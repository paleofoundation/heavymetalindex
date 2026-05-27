// Production queue adapter targeting Vercel Queues over the public API.
// Implements the same QueueAdapter contract as tools/runtime/local-queue.mjs.
//
// Why HTTP, not an SDK: Vercel Queues are addressed as Fluid Compute Functions
// with a queue-shaped invocation contract. The SDK surface is evolving, so
// this adapter speaks the documented HTTP shape directly. When the SDK
// stabilises this file is the single place to swap.
//
// Wire-up (all required when HMI_RUNTIME=vercel):
//   HMI_RUNTIME=vercel
//   VERCEL_QUEUE_DISCOVERY_URL  https://…/api/queue/discovery
//   VERCEL_QUEUE_EXTRACTION_URL https://…/api/queue/extraction
//   VERCEL_QUEUE_ROUTING_URL    https://…/api/queue/routing
//   VERCEL_QUEUE_SECRET         HMAC-shared secret (also set on the consumer fn)
//
// The consumer Functions live at api/queue/{discovery,extraction,routing}.ts
// and call into the same worker handlers as the local runner.
//
// Crash safety + retry policy mirror local-queue: Vercel Queues guarantees
// at-least-once delivery, and we centralise MAX_ATTEMPTS / backoffDelayMs in
// queue.mjs so the visible behaviour is identical across backends.

import { backoffDelayMs, MAX_ATTEMPTS } from "./queue.mjs"

const TOPIC_TO_ENV = {
  "discovery.candidates": "VERCEL_QUEUE_DISCOVERY_URL",
  "extraction.requests": "VERCEL_QUEUE_EXTRACTION_URL",
  "routing.edits": "VERCEL_QUEUE_ROUTING_URL",
}

export function createVercelQueue(opts = {}) {
  const secret = opts.secret ?? process.env.VERCEL_QUEUE_SECRET
  if (!secret) {
    throw new Error(
      "createVercelQueue: VERCEL_QUEUE_SECRET is required (set on the producer and on each queue Function).",
    )
  }
  const fetcher = opts.fetch ?? globalThis.fetch
  if (typeof fetcher !== "function") {
    throw new Error("createVercelQueue: a global fetch is required (Node 22+ provides this).")
  }

  return {
    backend: "vercel",
    MAX_ATTEMPTS,

    async enqueue(topic, body, enqueueOpts = {}) {
      const envName = TOPIC_TO_ENV[topic]
      if (!envName) throw new Error(`Unknown topic: ${topic}`)
      const url = opts.urls?.[topic] ?? process.env[envName]
      if (!url) throw new Error(`createVercelQueue: ${envName} is not set`)
      if (typeof body?.idempotency_key !== "string") {
        throw new Error("enqueue: body.idempotency_key is required")
      }
      const headers = {
        "content-type": "application/json",
        "x-hmi-queue-secret": secret,
        "x-hmi-idempotency-key": body.idempotency_key,
      }
      if (enqueueOpts.delayMs && enqueueOpts.delayMs > 0) {
        headers["x-hmi-delay-ms"] = String(enqueueOpts.delayMs)
      }
      const res = await fetcher(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => "")
        throw new Error(`enqueue ${topic} failed: HTTP ${res.status} ${text.slice(0, 200)}`)
      }
      const json = await res.json().catch(() => ({}))
      return { messageId: json.messageId ?? body.idempotency_key, deduped: !!json.deduped }
    },

    // The push model means the producer does not lease / ack / nack — those
    // happen inside the consumer Function (api/queue/*.ts) which calls the
    // shared worker handler and returns 2xx for ack, 5xx for retry. The
    // consumer maps HTTP status onto Vercel Queues' built-in retry + DLQ.
    //
    // We expose stub implementations so test code can still verify the
    // interface shape against the same QueueAdapter contract.
    lease() {
      throw new Error("createVercelQueue: lease() is consumer-only; use HMI_RUNTIME=local for pull-based polling.")
    },
    ack() {
      throw new Error("createVercelQueue: ack() is consumer-only.")
    },
    nack() {
      throw new Error("createVercelQueue: nack() is consumer-only.")
    },

    async listDeadLetter(topic = null, limit = 100) {
      const url = opts.deadLetterUrl ?? process.env.VERCEL_QUEUE_DEAD_LETTER_URL
      if (!url) return []
      const params = new URLSearchParams()
      if (topic) params.set("topic", topic)
      params.set("limit", String(limit))
      const res = await fetcher(`${url}?${params.toString()}`, {
        headers: { "x-hmi-queue-secret": secret },
      })
      if (!res.ok) return []
      const json = await res.json().catch(() => ({ rows: [] }))
      return json.rows ?? []
    },

    close() {
      /* no-op: HTTP client is global */
    },
  }
}

/**
 * Helper for Vercel Function handlers: compute the right HTTP response for
 * a worker outcome. The Vercel Queues runtime treats 2xx as ack and 5xx as
 * retry (with platform-provided exponential backoff + DLQ); 4xx as poison.
 *
 *   - 'ack'        → 200
 *   - 'retry'      → 503 (retry per platform policy, capped at MAX_ATTEMPTS)
 *   - 'dead_letter'→ 422 (poison; do not retry)
 */
export function toQueueResponse(outcome) {
  if (outcome === "ack") return { status: 200, body: { ok: true } }
  if (outcome === "retry") return { status: 503, body: { retry: true } }
  if (outcome === "dead_letter") return { status: 422, body: { dead_letter: true } }
  throw new Error(`Unknown worker outcome: ${String(outcome)}`)
}
