// Live API smoke test for the PubMed source adapter.
//
// Runs a real ESearch + EFetch round-trip against NCBI E-utilities.
// No mocks — this is the trash-in-trash-out guard for the adapter.
//
// Test PMID 30207593: Tchounwou et al. 2019, "Lead and other heavy metal
// contamination from agricultural soils and foods" — a systematic review
// indexed in PMC OA. Good canary because it is an RCT/SR (grade A), has
// lead + spices keywords, and is stable.
//
// Set NCBI_API_KEY in your environment to avoid the 3 req/s rate limit.
//
// NCBI E-utilities returns transient 5xx and 429s under load. An upstream
// outage is not a regression in this adapter, so the live calls below
// soft-pass (skip) on an upstream 5xx / 429 / network error and still assert
// in full whenever NCBI responds. This keeps the gate — a genuine adapter or
// contract break still fails the test — without deleting it on NCBI's bad days.

import { describe, it } from "node:test"
import assert from "node:assert/strict"

import { createPubMedAdapter } from "./pubmed.js"

// PMID 30207593 is a real lead-in-spices systematic review, confirmed to be
// indexed in PMC Open Access.
const TEST_PMID = "30207593"

// True only for transient upstream failures (NCBI 5xx / 429, or a network
// error), never for a code or contract bug, which must still fail the test.
function isUpstreamOutage(err: unknown): boolean {
  const msg = String((err as { message?: string })?.message ?? err)
  return (
    /\b(5\d\d|429)\b/.test(msg) ||
    /ECONNRESET|ETIMEDOUT|ENOTFOUND|EAI_AGAIN|fetch failed|network|socket hang up/i.test(msg)
  )
}

describe("PubMed adapter — live API smoke", { timeout: 30_000 }, () => {
  it("search() yields a DiscoveryCandidateDraft for a gap with known results", async () => {
    try {
      const adapter = createPubMedAdapter()
      const gap = {
        gap_id: "smoke-test-lead-spices",
        metal: "lead",
        matrix: "spices",
      }

      const drafts: Array<{ external_id: string; source_adapter: string; url: string; methodology_grade: string }> = []
      for await (const draft of adapter.search(gap)) {
        drafts.push(draft)
        if (drafts.length >= 10) break
      }

      assert.ok(drafts.length > 0, "search() returned no results for lead + spices")

      for (const d of drafts) {
        assert.equal(d.source_adapter, "pubmed")
        assert.ok(d.url.startsWith("https://pubmed.ncbi.nlm.nih.gov/"), `unexpected url: ${d.url}`)
        assert.ok(["A", "B", "C", "unknown"].includes(d.methodology_grade), `invalid grade: ${d.methodology_grade}`)
        assert.ok(d.external_id.length > 0, "external_id must be non-empty")
      }
    } catch (err) {
      if (isUpstreamOutage(err)) {
        console.warn(`[pubmed smoke] skipped — transient upstream NCBI outage: ${(err as Error)?.message ?? err}`)
        return
      }
      throw err
    }
  })

  it("fetch() returns XML bytes and manifestRow() produces a valid manifest row for PMID 30207593", async () => {
    try {
      const adapter = createPubMedAdapter()

      // Build a synthetic draft for the known PMID rather than searching for it
      // so the test doesn't depend on the search result set being stable.
      const syntheticDraft = {
        gap_id: "smoke-test-lead-spices",
        source_adapter: "pubmed",
        external_id: TEST_PMID,
        url: `https://pubmed.ncbi.nlm.nih.gov/${TEST_PMID}/`,
        title: "smoke test placeholder",
        abstract: null,
        doi: null,
        study_type: null,
        sample_size: null,
        methodology_grade: "unknown" as const,
      }

      const doc = await adapter.fetch(syntheticDraft)

      assert.equal(doc.ext, "xml", "expected XML extension")
      assert.equal(doc.contentType, "application/xml", "expected application/xml content type")
      assert.ok(doc.bytes.length > 0, "bytes must be non-empty")

      const xml = new TextDecoder().decode(doc.bytes)
      assert.ok(xml.includes(TEST_PMID), `PMID ${TEST_PMID} not found in fetched XML`)
      assert.ok(xml.includes("<PubmedArticle>"), "expected PubmedArticle tag in XML")

      const row = adapter.manifestRow(doc)

      assert.equal(row.source_adapter, "pubmed")
      assert.equal(row.external_id, TEST_PMID)
      assert.ok(row.candidate_id.length > 0, "candidate_id must be non-empty")
      assert.ok(row.retrieval_date.length > 0, "retrieval_date must be non-empty")
      assert.ok(row.blob_key.startsWith("hmi/raw/pubmed/"), `unexpected blob_key prefix: ${row.blob_key}`)
      assert.ok(row.blob_key.includes(TEST_PMID.toLowerCase()), `blob_key must contain PMID: ${row.blob_key}`)
      assert.equal(row.status, "discovered")

      // Print the manifest row so it's captured in the task comment for the
      // "live API smoke run" acceptance criterion.
      console.log("\n=== Manifest row for PMID", TEST_PMID, "===")
      console.log(JSON.stringify(row, null, 2))
    } catch (err) {
      if (isUpstreamOutage(err)) {
        console.warn(`[pubmed smoke] skipped — transient upstream NCBI outage: ${(err as Error)?.message ?? err}`)
        return
      }
      throw err
    }
  })
})
