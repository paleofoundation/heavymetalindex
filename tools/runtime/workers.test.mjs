// Unit tests for the three worker handlers.
// Run with: npm test -- tools/runtime/workers.test.mjs

import assert from "node:assert/strict"
import { test } from "node:test"
import {
  runDiscoveryWorker,
  runExtractionWorker,
  runRoutingWorker,
} from "./workers.mjs"

function makeDeps(overrides = {}) {
  const processed = new Set()
  const candidates = []
  const extractions = []
  const disagreements = []
  const wikiEdits = []
  const logs = []
  return {
    candidates,
    extractions,
    disagreements,
    wikiEdits,
    logs,
    deps: {
      alreadyProcessed: (topic, key) => processed.has(`${topic}:${key}`),
      markProcessed: (topic, key) => processed.add(`${topic}:${key}`),
      appendCandidate: (c) => candidates.push(c),
      appendExtraction: (e) => extractions.push(e),
      appendDisagreements: (ds) => disagreements.push(...ds),
      applyWikiEdit: async (e) => wikiEdits.push(e),
      log: (event, payload) => logs.push({ event, payload }),
      runDiscovery: overrides.runDiscovery,
      runDualModelExtraction: overrides.runDualModelExtraction,
      spanIdForExtraction: overrides.spanIdForExtraction,
    },
  }
}

// ── discovery ────────────────────────────────────────────────────────────────

test("discovery: ack + emits extraction.requests per candidate", async () => {
  const { deps, candidates } = makeDeps({
    runDiscovery: async () => ({
      candidates: [
        {
          candidate_id: "cand-1",
          source_adapter: "pubmed",
          external_id: "PMID:1",
          blob_key: "hmi/raw/pubmed/PMID-1/source.pdf",
        },
        {
          candidate_id: "cand-2",
          source_adapter: "openalex",
          external_id: "W:2",
          blob_key: "hmi/raw/openalex/W-2/source.json",
        },
      ],
    }),
  })
  const r = await runDiscoveryWorker(
    {
      idempotency_key: "gap-1:run-1",
      gap_id: "gap-1",
      page: "wiki/ingredients/lead.md",
      metal: "Pb",
      matrix: "fruit",
      population: null,
      why: "no_cited_evidence",
      enqueued_at: "2026-05-27T00:00:00Z",
    },
    deps,
  )
  assert.equal(r.outcome, "ack")
  assert.equal(r.next.length, 2)
  assert.equal(r.next[0].topic, "extraction.requests")
  assert.equal(r.next[0].body.idempotency_key, "cand-1")
  assert.equal(candidates.length, 2)
})

test("discovery: idempotent — second call is a no-op", async () => {
  const { deps, candidates } = makeDeps({
    runDiscovery: async () => ({ candidates: [{ candidate_id: "cand-1", source_adapter: "pubmed", external_id: "X", blob_key: "k" }] }),
  })
  const message = {
    idempotency_key: "k",
    gap_id: "g",
    page: "wiki/p.md",
    metal: "Pb",
    matrix: "x",
    population: null,
    why: "no_cited_evidence",
    enqueued_at: "now",
  }
  await runDiscoveryWorker(message, deps)
  const second = await runDiscoveryWorker(message, deps)
  assert.equal(second.skipped, true)
  assert.equal(candidates.length, 1) // not 2
})

test("discovery: transient error → retry", async () => {
  const { deps } = makeDeps({
    runDiscovery: async () => {
      throw new Error("network unreachable")
    },
  })
  const r = await runDiscoveryWorker(
    {
      idempotency_key: "k",
      gap_id: "g",
      page: "wiki/p.md",
      metal: "Pb",
      matrix: "x",
      population: null,
      why: "no_cited_evidence",
      enqueued_at: "now",
    },
    deps,
  )
  assert.equal(r.outcome, "retry")
})

test("discovery: validation error → dead_letter", async () => {
  const { deps } = makeDeps({
    runDiscovery: async () => {
      throw new Error("validation failed: missing gap_id")
    },
  })
  const r = await runDiscoveryWorker(
    {
      idempotency_key: "k",
      gap_id: "g",
      page: "wiki/p.md",
      metal: "Pb",
      matrix: "x",
      population: null,
      why: "no_cited_evidence",
      enqueued_at: "now",
    },
    deps,
  )
  assert.equal(r.outcome, "dead_letter")
})

// ── extraction ───────────────────────────────────────────────────────────────

test("extraction: agree → emits routing.edits", async () => {
  const { deps, extractions } = makeDeps({
    runDualModelExtraction: async () => ({
      extraction: {
        extraction_id: "ext-1",
        model_agreement_state: "agree",
        models_used: ["openai/gpt-5", "anthropic/claude-opus-4-7"],
      },
      models_used: ["openai/gpt-5", "anthropic/claude-opus-4-7"],
      page: "wiki/ingredients/lead.md",
      source_document: "FDA2016 | https://example.com",
      retrieval_date: "2026-05-27",
    }),
  })
  const r = await runExtractionWorker(
    {
      idempotency_key: "cand-1",
      candidate_id: "cand-1",
      gap_id: "gap-1",
      source_adapter: "pubmed",
      external_id: "PMID:1",
      blob_key: "k",
      enqueued_at: "now",
    },
    deps,
  )
  assert.equal(r.outcome, "ack")
  assert.equal(r.next.length, 1)
  assert.equal(r.next[0].topic, "routing.edits")
  assert.equal(r.next[0].body.model_agreement_state, "agree")
  assert.equal(extractions.length, 1)
})

test("extraction: disagree_on_value → no routing.edits emitted", async () => {
  const { deps, extractions } = makeDeps({
    runDualModelExtraction: async () => ({
      extraction: {
        extraction_id: "ext-2",
        model_agreement_state: "disagree_on_value",
        models_used: ["openai/gpt-5", "anthropic/claude-opus-4-7"],
      },
      models_used: ["openai/gpt-5", "anthropic/claude-opus-4-7"],
      page: "wiki/ingredients/lead.md",
      source_document: "X | y",
      retrieval_date: "2026-05-27",
      disagreements: [
        { disagreement_id: "d-1", candidate_id: "cand-1", axis: "value", severity: "high" },
      ],
    }),
  })
  const r = await runExtractionWorker(
    {
      idempotency_key: "cand-1",
      candidate_id: "cand-1",
      gap_id: "g",
      source_adapter: "pubmed",
      external_id: "X",
      blob_key: "k",
      enqueued_at: "now",
    },
    deps,
  )
  assert.equal(r.outcome, "ack")
  assert.equal(r.next.length, 0)
  assert.equal(extractions.length, 1) // still recorded for audit
})

// ── routing ──────────────────────────────────────────────────────────────────

test("routing: ack + calls applyWikiEdit with the audit row", async () => {
  const { deps, wikiEdits } = makeDeps()
  const r = await runRoutingWorker(
    {
      idempotency_key: "ext-1",
      extraction_id: "ext-1",
      candidate_id: "cand-1",
      gap_id: "gap-1",
      page: "wiki/ingredients/lead.md",
      model_agreement_state: "agree",
      models_used: ["openai/gpt-5", "anthropic/claude-opus-4-7"],
      source_document: "FDA2016 | https://example.com",
      retrieval_date: "2026-05-27",
      enqueued_at: "now",
    },
    deps,
  )
  assert.equal(r.outcome, "ack")
  assert.equal(wikiEdits.length, 1)
  const edit = wikiEdits[0]
  assert.equal(edit.page, "wiki/ingredients/lead.md")
  assert.equal(edit.audit_row.model_agreement_state, "consensus")
  assert.equal(edit.audit_row.models_used.length, 2)
  assert.equal(edit.audit_row.source_document, "FDA2016 | https://example.com")
})

test("routing: crashed-mid-edit becomes retry on next delivery", async () => {
  const { deps, wikiEdits } = makeDeps()
  let calls = 0
  deps.applyWikiEdit = async () => {
    calls++
    if (calls === 1) throw new Error("ECONNRESET")
    wikiEdits.push({ ok: true })
  }
  const msg = {
    idempotency_key: "ext-1",
    extraction_id: "ext-1",
    candidate_id: "cand-1",
    gap_id: "gap-1",
    page: "wiki/x.md",
    model_agreement_state: "agree",
    models_used: ["m"],
    source_document: "X | y",
    retrieval_date: "2026-05-27",
    enqueued_at: "now",
  }
  const first = await runRoutingWorker(msg, deps)
  assert.equal(first.outcome, "retry")
  // The processed-key was NOT set; the next delivery will re-run the side-effect.
  const second = await runRoutingWorker(msg, deps)
  assert.equal(second.outcome, "ack")
  assert.equal(wikiEdits.length, 1)
})
