// Worker handlers for the three continuous-ingest topics.
//
// Each handler is a pure function: (message, deps) → { outcome, next? }
// where:
//
//   outcome ∈ "ack" | "retry" | "dead_letter"
//   next    = zero or more downstream messages to enqueue on `ack`
//
// `deps` is the dependency injection seam: it carries idempotency stores,
// real source adapters / extractors / wiki-edit barrier, or test fakes.
// This keeps the workers runnable in three places without rewriting them:
//
//   1. The local-runner (HMI_RUNTIME=local) — fixture deps for demos / CI.
//   2. Vercel Functions (HMI_RUNTIME=vercel) — real deps wired from env.
//   3. Unit tests — fakes that record side-effects without I/O.
//
// Idempotency is enforced HERE, not in the queue: the worker consults a
// jsonl-backed processed-keys store before doing any side-effecting work
// (see processed-keys.mjs). This is what makes Vercel Queues' at-least-once
// delivery safe.

import { randomUUID } from "node:crypto"

/**
 * discovery.candidates worker.
 *
 * Input:  DiscoveryMessage (gap_id + page + metal + matrix + …)
 * Calls:  deps.runDiscovery(gap) → { candidates: DiscoveryCandidate[] }
 * Writes: data/discovery/candidates.jsonl (via deps.appendCandidate)
 * Emits:  one extraction.requests message per new candidate
 */
export async function runDiscoveryWorker(message, deps) {
  if (deps.alreadyProcessed("discovery", message.idempotency_key)) {
    return { outcome: "ack", next: [], skipped: true }
  }
  let result
  try {
    result = await deps.runDiscovery({
      gap_id: message.gap_id,
      page: message.page,
      metal: message.metal,
      matrix: message.matrix,
      population: message.population,
      why: message.why,
    })
  } catch (err) {
    deps.log?.("discovery_failed", { gap_id: message.gap_id, error: String(err) })
    return classifyError(err)
  }
  const next = []
  for (const candidate of result.candidates ?? []) {
    deps.appendCandidate(candidate)
    next.push({
      topic: "extraction.requests",
      body: {
        idempotency_key: candidate.candidate_id,
        candidate_id: candidate.candidate_id,
        gap_id: message.gap_id,
        source_adapter: candidate.source_adapter,
        external_id: candidate.external_id,
        blob_key: candidate.blob_key,
        enqueued_at: new Date().toISOString(),
      },
    })
  }
  deps.markProcessed("discovery", message.idempotency_key)
  return { outcome: "ack", next }
}

/**
 * extraction.requests worker.
 *
 * Input:  ExtractionMessage (candidate_id + blob_key + …)
 * Calls:  deps.runDualModelExtraction(candidate) → { extraction, agreement_state, models_used, source_document, retrieval_date, page }
 * Writes: data/evidence/model_extractions.jsonl (via deps.appendExtraction)
 *         data/evidence/model_disagreements.jsonl (via deps.appendDisagreements)
 * Emits:  routing.edits if model_agreement_state ∈ {agree, agree_with_minor_units_diff}
 */
export async function runExtractionWorker(message, deps) {
  if (deps.alreadyProcessed("extraction", message.idempotency_key)) {
    return { outcome: "ack", next: [], skipped: true }
  }
  let result
  try {
    result = await deps.runDualModelExtraction({
      candidate_id: message.candidate_id,
      gap_id: message.gap_id,
      source_adapter: message.source_adapter,
      external_id: message.external_id,
      blob_key: message.blob_key,
    })
  } catch (err) {
    deps.log?.("extraction_failed", { candidate_id: message.candidate_id, error: String(err) })
    return classifyError(err)
  }
  deps.appendExtraction(result.extraction)
  if (result.disagreements?.length) deps.appendDisagreements(result.disagreements)

  const state = result.extraction.model_agreement_state
  const next = []
  if (state === "agree" || state === "agree_with_minor_units_diff") {
    next.push({
      topic: "routing.edits",
      body: {
        idempotency_key: result.extraction.extraction_id,
        extraction_id: result.extraction.extraction_id,
        candidate_id: message.candidate_id,
        gap_id: message.gap_id,
        page: result.page,
        model_agreement_state: state,
        models_used: result.extraction.models_used ?? result.models_used,
        source_document: result.source_document,
        retrieval_date: result.retrieval_date,
        enqueued_at: new Date().toISOString(),
      },
    })
  }
  // Disagreed extractions are written to model_extractions.jsonl with their
  // state intact but never reach routing.edits — the disagreement queue +
  // dashboard handle them (HMI-9.11).

  deps.markProcessed("extraction", message.idempotency_key)
  return { outcome: "ack", next }
}

/**
 * routing.edits worker.
 *
 * Input:  RoutingMessage (extraction_id + page + agreement_state + …)
 * Calls:  deps.applyWikiEdit(edit) → { commit_sha }
 * Writes: wiki/<page> via the recordEditOrAbort write barrier in HMI-12
 *         data/evidence/wiki_edit_audit.jsonl (via the same barrier)
 */
export async function runRoutingWorker(message, deps) {
  if (deps.alreadyProcessed("routing", message.idempotency_key)) {
    return { outcome: "ack", next: [], skipped: true }
  }
  const editId = randomUUID()
  const auditRow = {
    edit_id: editId,
    page: message.page,
    span_id: deps.spanIdForExtraction?.(message) ?? "occurrence-data",
    source_document: message.source_document,
    retrieval_date: message.retrieval_date,
    models_used: message.models_used,
    model_agreement_state: mapAgreementToAuditState(message.model_agreement_state),
    applied_at: new Date().toISOString(),
    commit_sha: "pending",
  }
  try {
    await deps.applyWikiEdit({
      extraction_id: message.extraction_id,
      candidate_id: message.candidate_id,
      gap_id: message.gap_id,
      page: message.page,
      audit_row: auditRow,
    })
  } catch (err) {
    deps.log?.("routing_failed", { extraction_id: message.extraction_id, error: String(err) })
    return classifyError(err)
  }
  deps.markProcessed("routing", message.idempotency_key)
  return { outcome: "ack", next: [] }
}

// ── helpers ──────────────────────────────────────────────────────────────────

/**
 * Maps the runtime agreement_state to the audit-row enum from
 * tools/evidence/schemas/wiki-edit-audit.ts (single_model | consensus | …).
 */
function mapAgreementToAuditState(state) {
  switch (state) {
    case "agree":
      return "consensus"
    case "agree_with_minor_units_diff":
      // Still consensus on row_fit + included; only units differ. Treated as
      // consensus on the routable signal per HMI-12 schema.
      return "consensus"
    default:
      return "not_applicable"
  }
}

/**
 * Classify a thrown error into retry vs dead-letter. Synchronous validation
 * errors (bad message shape, missing required field) are dead-letter; transient
 * errors (network, 5xx, timeouts) get retried. The default is retry — we'd
 * rather see a noisy queue than silently drop something defensible.
 */
function classifyError(err) {
  const msg = err && typeof err.message === "string" ? err.message : String(err)
  if (/validation|invalid|schema|unknown_topic/i.test(msg)) {
    return { outcome: "dead_letter", next: [], error: msg }
  }
  return { outcome: "retry", next: [], error: msg }
}
