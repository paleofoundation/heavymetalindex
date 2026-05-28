// Fixture-driven unit tests for pubmed.ts helper functions.
// No live API calls — these test the parser and query builder in isolation.

import { describe, it } from "node:test"
import assert from "node:assert/strict"

import { buildQuery, parseSampleSize, xmlAll } from "./pubmed.js"

// ---------------------------------------------------------------------------
// parseSampleSize — structured abstract extraction (Fix #2)
// ---------------------------------------------------------------------------

// A PubmedArticle block with four labelled abstract sections. The n= pattern
// is in METHODS — the section xmlFirst would have missed before the fix.
const STRUCTURED_ABSTRACT_XML = `
<PubmedArticle>
  <MedlineCitation>
    <Article>
      <Abstract>
        <AbstractText Label="BACKGROUND">Lead exposure in agricultural soils is a major public health concern.</AbstractText>
        <AbstractText Label="METHODS">A cross-sectional study was conducted. n=412 participants from three counties were enrolled and blood samples collected.</AbstractText>
        <AbstractText Label="RESULTS">Mean blood lead level was 8.4 μg/dL, exceeding the CDC reference value of 3.5 μg/dL.</AbstractText>
        <AbstractText Label="CONCLUSIONS">Exposure levels exceed safe thresholds; remediation is warranted.</AbstractText>
      </Abstract>
    </Article>
  </MedlineCitation>
</PubmedArticle>
`

describe("parseSampleSize — structured abstract extraction", () => {
  it("returns null when only the first section is used (BACKGROUND has no n=)", () => {
    const firstSection = xmlAll(STRUCTURED_ABSTRACT_XML, "AbstractText")[0] ?? null
    assert.equal(
      parseSampleSize(firstSection),
      null,
      "BACKGROUND section has no n= — should return null (demonstrates the pre-fix gap)",
    )
  })

  it("returns 412 when all sections are joined (METHODS contains n=412)", () => {
    const sections = xmlAll(STRUCTURED_ABSTRACT_XML, "AbstractText")
    const joined = sections.length > 0 ? sections.join(" ") : null
    assert.equal(
      parseSampleSize(joined),
      412,
      "Joined abstract should extract n=412 from the METHODS section",
    )
  })
})

// ---------------------------------------------------------------------------
// buildQuery — gap.page exclusion (Fix #1)
// ---------------------------------------------------------------------------

describe("buildQuery — gap.page excluded from NCBI query", () => {
  it("joins metal + matrix + population and excludes gap.page path tokens", () => {
    const gap = {
      gap_id: "g1",
      metal: "lead",
      matrix: "rice",
      page: "wiki/ingredients/rice.md",
      population: "children",
    }
    const q = buildQuery(gap)
    assert.ok(!q.includes("wiki"), `query must not contain 'wiki': "${q}"`)
    assert.ok(!q.includes("rice.md"), `query must not contain 'rice.md': "${q}"`)
    assert.ok(!q.includes("ingredients"), `query must not contain 'ingredients': "${q}"`)
    assert.ok(q.includes("lead"), `query must include metal 'lead': "${q}"`)
    assert.ok(q.includes("rice"), `query must include matrix 'rice': "${q}"`)
    assert.ok(q.includes("children"), `query must include population 'children': "${q}"`)
  })

  it("uses gap_id as fallback when no structured fields are present", () => {
    const gap = { gap_id: "fallback-gap-id" }
    const q = buildQuery(gap)
    assert.equal(q, "fallback-gap-id")
  })

  it("uses why as secondary fallback when metal/matrix/population are absent", () => {
    const gap = { gap_id: "g2", why: "cadmium in leafy greens" }
    const q = buildQuery(gap)
    assert.equal(q, "cadmium in leafy greens")
  })
})
