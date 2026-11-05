// Live API smoke test for the OpenAlex source adapter.
//
// Runs a real search + fetch round-trip against the OpenAlex REST API.
// No mocks — this is the trash-in-trash-out guard for the adapter.
//
// Test work W4402700521: "Mitigating toxic metals contamination in foods" (2024) —
// a real OA article indexed in PMC with a direct PDF URL on pmc.ncbi.nlm.nih.gov.
// Good canary because it is type "article" (grade B), covers lead/cadmium/arsenic
// in food, and its PMC PDF URL is publicly accessible without auth.
//
// Set OPENALEX_POLITE_EMAIL in your environment for polite-pool throughput.
// Without it, the adapter runs on the anonymous tier (lower rate limits) but
// the smoke tests still pass.

import { describe, it } from "node:test"
import type { TestContext } from "node:test"
import assert from "node:assert/strict"

import { createOpenAlexAdapter } from "./openalex.js"

// Evidence-fill CI runs many branches at once. OpenAlex then answers 429 or 503
// after the adapter's own retries. That is not a failure of the wiki change.
function skipIfOpenAlexBusy(t: TestContext, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error)
  if (/\[openalex\] API error (429|502|503|504)/.test(message)) t.skip(message)
}

// W4402700521: "Mitigating toxic metals contamination in foods: Bridging knowledge gaps"
// PMC OA, best_oa_location.pdf_url = https://pmc.ncbi.nlm.nih.gov/articles/PMC11634057/pdf/nihms-2038402.pdf
const TEST_WORK_ID = "W4402700521"

describe("OpenAlex adapter — live API smoke", { timeout: 90_000, concurrency: 1 }, () => {
  it("search() yields DiscoveryCandidateDraft objects for a gap with known results", async (t) => {
    const adapter = createOpenAlexAdapter()
    const gap = {
      gap_id: "smoke-test-lead-rice",
      metal: "lead",
      matrix: "rice",
    }

    const drafts: Array<{
      external_id: string
      source_adapter: string
      url: string
      methodology_grade: string
    }> = []
    try {
      for await (const draft of adapter.search(gap)) {
        drafts.push(draft)
        if (drafts.length >= 10) break
      }
    } catch (error) {
      skipIfOpenAlexBusy(t, error)
      throw error
    }

    assert.ok(drafts.length > 0, "search() returned no results for lead + rice")

    for (const d of drafts) {
      assert.equal(d.source_adapter, "openalex")
      assert.ok(
        d.url.startsWith("https://openalex.org/W"),
        `unexpected url format: ${d.url}`,
      )
      assert.ok(
        ["A", "B", "C", "unknown"].includes(d.methodology_grade),
        `invalid grade: ${d.methodology_grade}`,
      )
      assert.ok(d.external_id.startsWith("W"), `external_id should start with W: ${d.external_id}`)
    }
  })

  it("fetch() returns bytes and manifestRow() produces a valid manifest row for W4402700521", async (t) => {
    const adapter = createOpenAlexAdapter()

    // Synthetic draft for the known work so the test doesn't depend on search
    // result stability — same pattern as pubmed.test.ts.
    const syntheticDraft = {
      gap_id: "smoke-test-lead-rice",
      source_adapter: "openalex",
      external_id: TEST_WORK_ID,
      url: `https://openalex.org/${TEST_WORK_ID}`,
      title: "smoke test placeholder",
      abstract: null,
      doi: null,
      study_type: null,
      sample_size: null,
      methodology_grade: "unknown" as const,
    }

    let doc
    try {
      doc = await adapter.fetch(syntheticDraft)
    } catch (error) {
      skipIfOpenAlexBusy(t, error)
      throw error
    }

    assert.ok(["pdf", "html"].includes(doc.ext), `unexpected ext: ${doc.ext}`)
    assert.ok(doc.bytes.length > 0, "bytes must be non-empty")
    assert.ok(doc.contentType.length > 0, "contentType must be non-empty")
    assert.ok(doc.metadata.openalex_id === TEST_WORK_ID, "metadata.openalex_id must match")
    assert.ok(
      typeof doc.metadata.cited_by_count === "number" || doc.metadata.cited_by_count === null,
      "cited_by_count must be number or null",
    )

    const row = adapter.manifestRow(doc)

    assert.equal(row.source_adapter, "openalex")
    assert.equal(row.external_id, TEST_WORK_ID)
    assert.ok(row.candidate_id.length > 0, "candidate_id must be non-empty")
    assert.ok(row.retrieval_date.length > 0, "retrieval_date must be non-empty")
    assert.ok(
      row.blob_key.startsWith("hmi/raw/openalex/"),
      `unexpected blob_key prefix: ${row.blob_key}`,
    )
    assert.ok(
      row.blob_key.toLowerCase().includes(TEST_WORK_ID.toLowerCase()),
      `blob_key must contain work ID: ${row.blob_key}`,
    )
    assert.equal(row.status, "discovered")

    // Print the manifest row for the "live API smoke run" acceptance criterion.
    console.log("\n=== Manifest row for OpenAlex work", TEST_WORK_ID, "===")
    console.log(JSON.stringify(row, null, 2))
  })
})
