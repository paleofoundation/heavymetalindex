// Queue message schemas for the continuous gap-fill runtime (HMI-9.10).
//
// Three topics flow through the pipeline:
//
//   1. discovery.candidates  — gap detector → source adapters
//   2. extraction.requests   — ranker → dual-model extractor
//   3. routing.edits         — extractor (agree only) → audit barrier + wiki edit
//
// Every message carries the worker's idempotency key in `idempotency_key`.
// Workers are required to no-op when they see a key they have already
// successfully processed (see tools/runtime/README.md). The queue treats
// `messageId` as ephemeral plumbing; idempotency belongs to the worker.

export const QUEUE_TOPICS = [
  "discovery.candidates",
  "extraction.requests",
  "routing.edits",
] as const

export type QueueTopic = (typeof QUEUE_TOPICS)[number]

export interface DiscoveryMessage {
  /** sha256(gap_id + run_id) — stable per gap-attempt */
  idempotency_key: string
  gap_id: string
  page: string
  metal: string
  matrix: string
  population: string | null
  why: string
  /** ISO-8601. Older than this means the message is stale; worker may skip. */
  enqueued_at: string
}

export interface ExtractionMessage {
  /** candidate_id — sha256(source_adapter + external_id) */
  idempotency_key: string
  candidate_id: string
  gap_id: string
  source_adapter: string
  external_id: string
  blob_key: string
  enqueued_at: string
}

export interface RoutingMessage {
  /** extraction_id — sha256(candidate_id + model_slug + prompt_version) */
  idempotency_key: string
  extraction_id: string
  candidate_id: string
  gap_id: string
  page: string
  /** Only "agree" or "agree_with_minor_units_diff" reach the routing topic. */
  model_agreement_state: "agree" | "agree_with_minor_units_diff"
  models_used: string[]
  source_document: string
  retrieval_date: string
  enqueued_at: string
}

export type QueueMessage = DiscoveryMessage | ExtractionMessage | RoutingMessage

export class MessageValidationError extends Error {}

export function validateDiscoveryMessage(input: unknown): DiscoveryMessage {
  const m = requireObject(input, "DiscoveryMessage")
  requireString(m, "idempotency_key")
  requireString(m, "gap_id")
  requireString(m, "page")
  requireString(m, "metal")
  requireString(m, "matrix")
  requireString(m, "why")
  requireString(m, "enqueued_at")
  // population may be null
  if (m.population !== null && typeof m.population !== "string") {
    throw new MessageValidationError("population must be string or null")
  }
  return m as unknown as DiscoveryMessage
}

export function validateExtractionMessage(input: unknown): ExtractionMessage {
  const m = requireObject(input, "ExtractionMessage")
  requireString(m, "idempotency_key")
  requireString(m, "candidate_id")
  requireString(m, "gap_id")
  requireString(m, "source_adapter")
  requireString(m, "external_id")
  requireString(m, "blob_key")
  requireString(m, "enqueued_at")
  return m as unknown as ExtractionMessage
}

export function validateRoutingMessage(input: unknown): RoutingMessage {
  const m = requireObject(input, "RoutingMessage")
  requireString(m, "idempotency_key")
  requireString(m, "extraction_id")
  requireString(m, "candidate_id")
  requireString(m, "gap_id")
  requireString(m, "page")
  requireString(m, "source_document")
  requireString(m, "retrieval_date")
  requireString(m, "enqueued_at")
  const state = m.model_agreement_state
  if (state !== "agree" && state !== "agree_with_minor_units_diff") {
    throw new MessageValidationError(
      `routing.edits messages must be agree or agree_with_minor_units_diff; got ${String(state)}`,
    )
  }
  if (!Array.isArray(m.models_used) || m.models_used.length === 0) {
    throw new MessageValidationError("models_used must be a non-empty array")
  }
  return m as unknown as RoutingMessage
}

// ── helpers ──────────────────────────────────────────────────────────────────

function requireObject(input: unknown, name: string): Record<string, unknown> {
  if (typeof input !== "object" || input === null) {
    throw new MessageValidationError(`${name} must be an object`)
  }
  return input as Record<string, unknown>
}

function requireString(m: Record<string, unknown>, field: string): void {
  if (typeof m[field] !== "string" || (m[field] as string).length === 0) {
    throw new MessageValidationError(`${field} must be a non-empty string`)
  }
}
