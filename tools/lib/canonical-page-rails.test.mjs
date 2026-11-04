import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"
import { auditRails } from "../audit-canonical-rails.mjs"
import { defaultHeadings } from "../engine/page/prose.mjs"
import {
  CANONICAL_LABELS,
  classifyHeading,
  ensureCanonicalRails,
  h2Headings,
  missingRailIds,
  splitFrontmatter,
  universalParents,
} from "./canonical-page-rails.mjs"

const RICE = [
  ["Rice overview", "overview"],
  ["Rice identity and scope", "overview"],
  ["Heavy metal contamination profile of rice", "contamination"],
  ["Sources and contamination pathways", "contamination"],
  ["Variation by origin, variety and growing conditions", "contamination"],
  ["Processing effects and derivatives", "contamination"],
  ["Heavy metal mitigation and remediation for rice", "mitigation"],
  ["Trade-offs and failure modes", "mitigation"],
  ["Sampling and testing rice for heavy metals", "details"],
  ["Procurement and process control", "details"],
  ["Finished-product and exposure implications", "details"],
  ["Evidence review, methods and research gaps", "review"],
  ["Rice FAQs", "faqs"],
  ["References", "references"],
  ["Sources", "sources"],
  ["Update history", "updates"],
]

const OLIVE = [
  ["Olive Oil overview", "overview"],
  ["What counts as olive Oil", "overview"],
  ["Heavy metal contamination profile of olive Oil", "contamination"],
  ["How metals reach olive Oil", "contamination"],
  ["Which forms and regions measured lower", "contamination"],
  ["Processing, cooking and preparation", "contamination"],
  ["Mitigation for olive Oil", "mitigation"],
  ["Trade-offs and limits of controls", "mitigation"],
  ["Testing olive Oil for metals", "details"],
  ["Buying and verifying olive Oil", "details"],
  ["Exposure from olive Oil", "details"],
  ["Evidence review and remaining gaps", "review"],
  ["Olive Oil FAQs", "faqs"],
  ["Interpretation of source evidence", "review"],
]

test("rice and olive oil headings cover the nine rails", () => {
  for (const [heading, rail] of [...RICE, ...OLIVE]) {
    assert.equal(classifyHeading(heading), rail, heading)
  }
  assert.deepEqual(missingRailIds(RICE.map(([heading]) => ({ text: heading }))), [])
  assert.deepEqual(
    missingRailIds([
      ...OLIVE.map(([heading]) => ({ text: heading })),
      { text: "References" },
      { text: "Sources" },
      { text: "Update history" },
    ]),
    [],
  )
  assert.deepEqual(
    universalParents().map((parent) => parent.label),
    ["Overview", "Contamination", "Mitigation", "Details", "Review", "FAQs"],
  )
  assert.deepEqual(CANONICAL_LABELS, [
    "Overview",
    "Contamination",
    "Mitigation",
    "Details",
    "Review",
    "FAQs",
    "References",
    "Sources",
    "Updates",
  ])
})

test("a thin product page gains honest stubs and a second pass is a no-op", () => {
  const page = `---
title: Rice and grain syrups
type: product-category
---

# Rice and grain syrups

## Literature scope

No sources are catalogued for this row yet.

## Sources

<!-- BEGIN: hmi-source-legend -->
<!-- END: hmi-source-legend -->

## Update history

Kept.
`
  const once = ensureCanonicalRails(page)
  assert.deepEqual(once.inserted, ["contamination", "mitigation", "details", "review", "faqs", "references"])
  assert.match(once.content, /## Contamination\n\nNo measured data yet in our corpus\./)
  assert.match(once.content, /## FAQs\n\nNo frequently asked questions have been compiled for this page yet\./)
  assert.equal(once.content.includes("\u2014") || once.content.includes("\u2013"), false)
  assert.doesNotMatch(once.content, /GRN\s*609|Oryzatein|RPN2026|\bAxiom\b/i)
  const headings = h2Headings(splitFrontmatter(once.content).body).map((heading) => heading.text)
  assert.deepEqual(headings, [
    "Literature scope",
    "Contamination",
    "Mitigation",
    "Details",
    "Review",
    "FAQs",
    "References",
    "Sources",
    "Update history",
  ])
  const twice = ensureCanonicalRails(once.content)
  assert.deepEqual(twice.inserted, [])
  assert.equal(twice.content, once.content)
})

test("stubs land in front of a footer marker without splitting a block", () => {
  const page = `---
title: Banana
type: ingredient
---

## Why this commodity accumulates heavy metals

Roots.

<!-- BEGIN: hmi-page-references -->
## References

Already listed.
<!-- END: hmi-page-references -->

## Sources

Listed.

## Update history

Kept.
`
  const once = ensureCanonicalRails(page)
  const body = splitFrontmatter(once.content).body
  const headings = h2Headings(body).map((heading) => heading.text)
  assert.deepEqual(headings, [
    "Why this commodity accumulates heavy metals",
    "Contamination",
    "Mitigation",
    "Details",
    "Review",
    "FAQs",
    "References",
    "Sources",
    "Update history",
  ])
  assert.match(body, /## Review\n\nNo evidence review yet in our corpus\.\n\n## FAQs\n\nNo frequently asked questions have been compiled for this page yet\.\n\n<!-- BEGIN: hmi-page-references -->\n## References\n\nAlready listed\./)
  assert.equal(ensureCanonicalRails(once.content).content, once.content)
})

test("live rice and olive oil pages already resolve to nine rails", () => {
  for (const rel of ["wiki/ingredients/rice.md", "wiki/ingredients/olive-oil.md"]) {
    const content = fs.readFileSync(rel, "utf8")
    const ensured = ensureCanonicalRails(content)
    assert.deepEqual(ensured.inserted, [], rel)
    assert.equal(ensured.content, content, rel)
  }
})

test("engine heading templates map onto the nine rails", () => {
  for (const family of ["ingredient", "product"]) {
    const headings = Object.values(defaultHeadings(family, "Olive oil"))
    headings.push("Olive oil FAQs", "References", "Sources", "Update history")
    assert.deepEqual(missingRailIds(headings.map((text) => ({ text }))), [], family)
  }
})

test("every ingredient and product page has the nine rails", () => {
  const missing = auditRails(".")
  assert.deepEqual(
    missing.map((item) => `${item.rel}: ${item.gaps.join(",")}`),
    [],
  )
})
