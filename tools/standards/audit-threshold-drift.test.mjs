// audit-threshold-drift.test.mjs
//
// Unit tests for the threshold-drift audit core. Uses small inline fixtures
// that mirror the hmtc_aggregate_distributions.csv row shape; does NOT depend
// on live data. Run: node --test tools/standards/audit-threshold-drift.test.mjs

import { test } from "node:test"
import assert from "node:assert/strict"
import { auditRow, parseCsv, ALLOWED_TAGS } from "./audit-threshold-drift.mjs"

// Helper: build a minimal staged-standard row. Defaults are a CLEAN row:
// final == literature, literature-baseline tag, no cap -> zero findings.
function row(overrides = {}) {
  return {
    product_slug: "test-product",
    metal_species: "Pb",
    variant_type: "clean_benchmark",
    role: "clean_subcategory",
    target_value: "100",
    pooled_p97: "100",
    pooled_p45: "",
    candidate_value_ppb: "100",
    lowest_regulatory_cap_ppb: "",
    rationale_tag_auto: "literature-baseline",
    ...overrides,
  }
}

const types = (findings) => findings.map((f) => f.finding_type).sort()

// ---------- clean rows pass ----------

test("clean literature-baseline row (final == pooled) produces no findings", () => {
  assert.deepEqual(auditRow(row()), [])
})

test("clean regulatory-alignment row (final == cap, below pooled) produces no findings", () => {
  const r = row({
    target_value: "300",
    pooled_p97: "300",
    candidate_value_ppb: "100",
    lowest_regulatory_cap_ppb: "100",
    rationale_tag_auto: "regulatory-alignment",
  })
  assert.deepEqual(auditRow(r), [])
})

test("row with no candidate value is not a staged standard -> skipped", () => {
  const r = row({ candidate_value_ppb: "", rationale_tag_auto: "no-data" })
  assert.deepEqual(auditRow(r), [])
})

test("ladder-rounding within 5% does not trip UNEXPLAINED_GAP", () => {
  // pooled 98.5, staged 100 (rounded up): 1.5% < tolerance.
  const r = row({ target_value: "98.5", pooled_p97: "98.5", candidate_value_ppb: "100" })
  assert.deepEqual(auditRow(r), [])
})

// ---------- (a) MISSING_RATIONALE_TAG ----------

test("MISSING_RATIONALE_TAG fires on empty tag with a staged value", () => {
  const r = row({ rationale_tag_auto: "" })
  assert.deepEqual(types(auditRow(r)), ["MISSING_RATIONALE_TAG"])
})

test("MISSING_RATIONALE_TAG fires on a tag outside the allowed four (no-data sentinel)", () => {
  // Mirrors the live cap-only rows tagged `no-data` that still carry a value.
  const r = row({
    target_value: "",
    pooled_p97: "",
    candidate_value_ppb: "5",
    lowest_regulatory_cap_ppb: "5",
    rationale_tag_auto: "no-data",
  })
  assert.deepEqual(types(auditRow(r)), ["MISSING_RATIONALE_TAG"])
})

// ---------- (b) UNEXPLAINED_GAP ----------

test("UNEXPLAINED_GAP fires when final diverges from pooled but stays literature-baseline", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "40", // 60% below pooled, still tagged literature-baseline
    rationale_tag_auto: "literature-baseline",
  })
  assert.deepEqual(types(auditRow(r)), ["UNEXPLAINED_GAP"])
})

test("a divergent value with a valid explaining tag does NOT trip UNEXPLAINED_GAP", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "40",
    lowest_regulatory_cap_ppb: "40",
    rationale_tag_auto: "regulatory-alignment",
  })
  assert.deepEqual(auditRow(r), [])
})

test("divergent value with an invalid tag emits BOTH missing-tag and unexplained-gap", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "40",
    rationale_tag_auto: "bogus",
  })
  assert.deepEqual(types(auditRow(r)), ["MISSING_RATIONALE_TAG", "UNEXPLAINED_GAP"])
})

// ---------- (c) TAG_VALUE_MISMATCH ----------

test("TAG_VALUE_MISMATCH: regulatory-alignment but final != cap", () => {
  const r = row({
    target_value: "300",
    pooled_p97: "300",
    candidate_value_ppb: "150", // not equal to cap
    lowest_regulatory_cap_ppb: "100",
    rationale_tag_auto: "regulatory-alignment",
  })
  // final (150) diverges from cap (100); also diverges from pooled but is
  // explained by a valid tag, so only the cap-mismatch fires.
  assert.deepEqual(types(auditRow(r)), ["TAG_VALUE_MISMATCH"])
})

test("TAG_VALUE_MISMATCH: feasibility-driven but final < pooled", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "40", // feasibility-driven should RAISE, not lower
    rationale_tag_auto: "feasibility-driven",
  })
  assert.deepEqual(types(auditRow(r)), ["TAG_VALUE_MISMATCH"])
})

test("feasibility-driven with final ABOVE pooled is consistent -> no finding", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "200",
    rationale_tag_auto: "feasibility-driven",
  })
  assert.deepEqual(auditRow(r), [])
})

test("TAG_VALUE_MISMATCH: precautionary but final not below min(pooled, cap)", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "100", // precautionary should be BELOW min(pooled,cap)
    lowest_regulatory_cap_ppb: "120",
    rationale_tag_auto: "precautionary",
  })
  assert.deepEqual(types(auditRow(r)), ["TAG_VALUE_MISMATCH"])
})

test("precautionary with final below min(pooled, cap) is consistent -> no finding", () => {
  const r = row({
    target_value: "100",
    pooled_p97: "100",
    candidate_value_ppb: "50",
    lowest_regulatory_cap_ppb: "120",
    rationale_tag_auto: "precautionary",
  })
  assert.deepEqual(auditRow(r), [])
})

// ---------- ALLOWED_TAGS sanity + CSV parse ----------

test("ALLOWED_TAGS is exactly the Part-19 four", () => {
  assert.deepEqual([...ALLOWED_TAGS].sort(), [
    "feasibility-driven",
    "literature-baseline",
    "precautionary",
    "regulatory-alignment",
  ])
})

test("parseCsv handles quoted fields with embedded commas", () => {
  const csv =
    'product_slug,candidate_value_ppb,rationale_tag_auto,detail\n' +
    'p,"5","no-data","a, b, c"\n'
  const rows = parseCsv(csv)
  assert.equal(rows.length, 1)
  assert.equal(rows[0].candidate_value_ppb, "5")
  assert.equal(rows[0].detail, "a, b, c")
})
