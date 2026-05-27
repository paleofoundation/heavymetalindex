// QueueAdapter contract for the continuous gap-fill runtime (HMI-9.10).
//
// The same worker code targets either backend:
//   - HMI_RUNTIME=local  → tools/runtime/local-queue.mjs (SQLite-backed)
//   - HMI_RUNTIME=vercel → tools/runtime/vercel-queue.mjs (Vercel Queues + Fluid Compute)
//
// The adapter exposes a small, durable interface:
//
//   enqueue(topic, body, opts?)         → { messageId }
//   lease(topic, leaseMs)               → null | { messageId, body, attempts }
//   ack(messageId)                      → void
//   nack(messageId, errorMessage)       → { dead_lettered: boolean }
//   listDeadLetter(topic?, limit?)      → DeadLetterRow[]
//   close()                             → void
//
// `lease()` returns the next available message and hides it for `leaseMs`.
// If the worker dies between lease() and ack(), the message becomes
// available again at lease-expiry; that is the crash-safety guarantee.
// Idempotency is the worker's responsibility (every message carries
// `idempotency_key`).
//
// Retry policy is centralised here so both backends apply the same rule:
//   - MAX_ATTEMPTS = 5
//   - base = 30s, factor = 2, cap = 1h, jitter = ±25%
//
// Dead-lettered rows are surfaced on the coverage dashboard via
// listDeadLetter() (see api/queue/dead-letter.ts).

export const MAX_ATTEMPTS = 5
const BACKOFF_BASE_MS = 30_000
const BACKOFF_FACTOR = 2
const BACKOFF_CAP_MS = 60 * 60 * 1000
const BACKOFF_JITTER = 0.25

/**
 * Compute the next retry delay using exponential backoff with jitter.
 * `attempts` is the count *including* the most recent failure (1 = first failure).
 */
export function backoffDelayMs(attempts, random = Math.random) {
  const exp = Math.min(BACKOFF_BASE_MS * Math.pow(BACKOFF_FACTOR, attempts - 1), BACKOFF_CAP_MS)
  const jitter = exp * BACKOFF_JITTER * (random() * 2 - 1)
  return Math.max(0, Math.floor(exp + jitter))
}

/**
 * Returns a QueueAdapter selected by HMI_RUNTIME env var.
 *
 *   HMI_RUNTIME=local   → SQLite queue (default; safe for laptops + CI)
 *   HMI_RUNTIME=vercel  → Vercel Queues adapter (production)
 *
 * The factory imports lazily so the local path does not require Vercel SDK.
 */
export async function getQueueAdapter(opts = {}) {
  const runtime = opts.runtime ?? process.env.HMI_RUNTIME ?? "local"
  if (runtime === "local") {
    const { createLocalQueue } = await import("./local-queue.mjs")
    return createLocalQueue(opts)
  }
  if (runtime === "vercel") {
    const { createVercelQueue } = await import("./vercel-queue.mjs")
    return createVercelQueue(opts)
  }
  throw new Error(`Unknown HMI_RUNTIME: ${runtime}`)
}
