// Tests for the load-bearing pure helpers in build-defense-dossier.mjs.
//
// A dossier is a litigation artifact, so the parts most likely to silently
// corrupt it are tested here: the quoted multi-value CSV parse (contributing
// sources + metal species are semicolon-joined inside quoted fields), the
// locked/provisional gate (a dossier must never be minted for a provisional
// scaffold), and the report-summary frontmatter parse (the dossier reuses the
// defensibility report's own claim counts).
//
// Run: npx tsx --test tools/build-defense-dossier.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import { parseCsvLine, isLocked, parseReportSummary } from "./build-defense-dossier.mjs"

test("parseCsvLine: plain fields", () => {
  assert.deepEqual(parseCsvLine("a,b,c"), ["a", "b", "c"])
})

test("parseCsvLine: quoted field with embedded comma", () => {
  assert.deepEqual(parseCsvLine('a,"b,c",d'), ["a", "b,c", "d"])
})

test("parseCsvLine: quoted multi-value field (semicolon-joined) survives intact", () => {
  // This is the routing-audit shape: declared_products / metal_species are
  // semicolon-joined inside one quoted CSV cell.
  const row = 'infant-formula-powder-non-soy,direct_evidence,"Pb;Cd;tAs;Cr",true'
  assert.deepEqual(parseCsvLine(row), [
    "infant-formula-powder-non-soy",
    "direct_evidence",
    "Pb;Cd;tAs;Cr",
    "true",
  ])
})

test("parseCsvLine: escaped double-quote inside quoted field", () => {
  assert.deepEqual(parseCsvLine('"she said ""hi""",x'), ['she said "hi"', "x"])
})

test("parseCsvLine: trailing empty field is preserved", () => {
  assert.deepEqual(parseCsvLine("a,b,"), ["a", "b", ""])
})

test("isLocked: a locked HMTc row qualifies", () => {
  assert.equal(isLocked({ hmtc_row: 1, hmtc_category: 1 }), true)
  assert.equal(isLocked({ hmtc_row: 0 }), true) // row 0 is a real row, not "absent"
})

test("isLocked: provisional scaffolds never qualify", () => {
  assert.equal(isLocked({ hmtc_row: 1, provisional_scaffold: true }), false)
  assert.equal(isLocked({ hmtc_row: 1, pending_category_lock: true }), false)
  assert.equal(isLocked({ hmtc_row: "pending_taxonomy_review" }), false)
})

test("isLocked: a page with no hmtc_row is not a defendable certification row", () => {
  assert.equal(isLocked({}), false)
  assert.equal(isLocked({ hmtc_category: 1 }), false)
  assert.equal(isLocked({ hmtc_row: null }), false)
})

test("parseReportSummary: reads the report's own frontmatter counts", () => {
  const report = [
    "---",
    "source_page: wiki/products/x.md",
    "total_claims: 107",
    "cited_claims: 107",
    "uncited_claims: 0",
    "distinct_cited_sources: 99",
    "noindex: true",
    "---",
    "",
    "# Defensibility report",
  ].join("\n")
  const sum = parseReportSummary(report)
  assert.equal(sum.total_claims, 107)
  assert.equal(sum.cited_claims, 107)
  assert.equal(sum.uncited_claims, 0)
  assert.equal(sum.distinct_cited_sources, 99)
})

test("parseReportSummary: no frontmatter yields an empty object, not a throw", () => {
  assert.deepEqual(parseReportSummary("# just a heading\n"), {})
})
