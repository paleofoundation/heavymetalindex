import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import {
  CHECKS,
  BASELINE_IMPROVEMENT_NOTE,
  auditPage,
  loadBaseline,
  scanRepo,
  structureRatchet,
} from "./audit-page-structure.mjs"

function page(body, audience = "[regulator, brand-qa]") {
  return `---
type: ingredient
audience: ${audience}
---

${body}
`
}

const ORDERED = `## Why this commodity accumulates heavy metals

Lead moves from soil into the grain. Cadmium does the same under flood. The two pathways are different.

## Heavy metal contamination profile

A generated table belongs here.

## Ranges by source, region, and variety

Levels vary by region. The studies do not share one basis. See [[sources/example-rice|1]].

## Processing effects

Polishing changes the concentration. The direction depends on the fraction removed. See [[sources/example-rice|1]].

## Ingredient-derivative risk

Bran concentrates cadmium relative to white grain. The comparison is within one study. See [[sources/example-rice|1]].

## Mitigation options

Sourcing is the first lever. A second lever is irrigation. See [[sources/example-rice|1]].

## Regulatory limits that apply

One government maximum applies to this grain. The basis is the product as sold. See [[sources/example-rice|1]].

## What remains uncertain

Wet weight versus dry weight is not stated for every row.

## Sources

Legend.
`

test("a short uncited answer block is within the limit", () => {
  const body = `## Direct answer

Rice in this record contains lead, cadmium, and inorganic arsenic. Typical inorganic arsenic is 40 to 150 ppb across the studies filed on this page.

## What remains uncertain

The basis is unstated.
`
  const failures = auditPage("ingredient", page(body), { stub: true })
  assert.equal(failures.includes("answer_block"), false)
})

test("an answer block over 60 words, with a citation, or with the wrong sentence count fails", () => {
  const long = `## Direct answer

${"cadmium ".repeat(30)}is reported here. ${"lead ".repeat(31)}is reported here too.

## What remains uncertain

Missing basis.
`
  assert.equal(auditPage("ingredient", page(long), { stub: true }).includes("answer_block"), true)

  const cited = `## Direct answer

Rice contains lead and cadmium. The filed studies put inorganic arsenic at 40 to 150 ppb [[sources/example-rice|1]].

## What remains uncertain

Missing basis.
`
  assert.equal(auditPage("ingredient", page(cited), { stub: true }).includes("answer_block"), true)

  const oneSentence = `## Direct answer

Rice contains lead, cadmium, and inorganic arsenic across the filed studies.

## What remains uncertain

Missing basis.
`
  assert.equal(
    auditPage("ingredient", page(oneSentence), { stub: true }).includes("answer_block"),
    true,
  )
})

test("numbered source aliases pass and author-year, bare links, and DOIs fail", () => {
  const numbered = `## Ranges by source, region, and variety

Lead is 10 ppb in the filed survey [[sources/example-rice|1]].

## What remains uncertain

The basis is unstated.
`
  assert.equal(
    auditPage("ingredient", page(numbered), { stub: true }).includes("dois_or_author_year"),
    false,
  )

  for (const sentence of [
    "Smith et al. (2009) reported 10 ppb of lead.",
    "The figure is in [[sources/example-rice]].",
    "The figure is in [[sources/example-rice|Smith 2009]].",
    "The DOI 10.1000/example.2009 is not repeated here.",
  ]) {
    const body = `## Ranges by source, region, and variety

${sentence}

## What remains uncertain

The basis is unstated.
`
    assert.equal(
      auditPage("ingredient", page(body), { stub: true }).includes("dois_or_author_year"),
      true,
      sentence,
    )
  }
})

test("a DOI inside References is not prose", () => {
  const body = `## Ranges by source, region, and variety

Lead is 10 ppb [[sources/example-rice|1]].

## What remains uncertain

The basis is unstated.

## References

10.1000/example.2009 Smith et al. (2009)
`
  assert.equal(
    auditPage("ingredient", page(body), { stub: true }).includes("dois_or_author_year"),
    false,
  )
})

test("generic headings and metal symbols are detected, and U.S. is not a symbol", () => {
  const generic = `## Overview

Lead is discussed here.

## Other metals of concern

Cadmium.

## What remains uncertain

Coverage is thin.
`
  const failures = auditPage("ingredient", page(generic), { stub: true })
  assert.equal(failures.includes("generic_headings"), true)
  assert.equal(failures.includes("metal_symbols"), false)

  const symbol = `## Ranges by source, region, and variety

The Pb level is 10 ppb.

## What remains uncertain

Coverage is thin.
`
  assert.equal(
    auditPage("ingredient", page(symbol), { stub: true }).includes("metal_symbols"),
    true,
  )

  const country = `## Ranges by source, region, and variety

The U.S. level for lead is 10 ppb.

## What remains uncertain

Coverage is thin.
`
  assert.equal(
    auditPage("ingredient", page(country), { stub: true }).includes("metal_symbols"),
    false,
  )

  const allowedHeading = `## Literature Evidence Summary

Lead is 10 ppb.

## What remains uncertain

Coverage is thin.
`
  assert.equal(
    auditPage("product", page(allowedHeading), { stub: true }).includes("generic_headings"),
    false,
  )
})

test("consumer audience and a missing uncertainty note fail", () => {
  const body = `## What remains uncertain

The basis is unstated.
`
  assert.equal(
    auditPage("ingredient", page(body, "[regulator, consumer]"), { stub: true }).includes(
      "consumer_audience",
    ),
    true,
  )
  assert.equal(
    auditPage("ingredient", page("## Overview\n\nLead."), { stub: true }).includes(
      "uncertainty_note",
    ),
    true,
  )
  assert.equal(
    auditPage("ingredient", page(body), { stub: true }).includes("uncertainty_note"),
    false,
  )
})

test("section order is required for non-stubs and skipped for stubs", () => {
  assert.equal(
    auditPage("ingredient", page(ORDERED), { stub: false }).includes("section_presence_and_order"),
    false,
  )
  const swapped = ORDERED.replace(
    "## Why this commodity accumulates heavy metals",
    "## Sources\n\nMoved.\n\n## Why this commodity accumulates heavy metals",
  )
  assert.equal(
    auditPage("ingredient", page(swapped), { stub: false }).includes("section_presence_and_order"),
    true,
  )
  assert.equal(
    auditPage("ingredient", page("## Overview\n\nLead.\n\n## What remains uncertain\n\nThin."), {
      stub: true,
    }).includes("section_presence_and_order"),
    false,
  )
})

test("the spec names one section list per type", () => {
  const spec = fs.readFileSync("docs/page-structure.md", "utf8")
  const groups = [
    [
      "Why this commodity accumulates heavy metals",
      "Heavy metal contamination profile",
      "Ranges by source, region, and variety",
      "Processing effects",
      "Ingredient-derivative risk",
      "Mitigation options",
      "Regulatory limits that apply",
    ],
    [
      "Who this page is for",
      "Methodology",
      "Literature Evidence Summary",
      "Source Evidence Inventory",
      "Broad Product Context: Author-Scope Index",
      "Federal/Regulatory Limits vs Field Findings",
      "Levers to reduce contamination",
      "How standards math uses this page",
      "Historical recalls and enforcement",
    ],
    [
      "Toxicology",
      "Exposure routes",
      "Food sources",
      "Regulatory limits",
      "Testing",
      "Microbiome effects",
      "Vulnerable populations",
      "Mitigation",
    ],
  ]
  for (const group of groups) {
    let at = -1
    for (const heading of group) {
      const next = spec.indexOf(heading, at + 1)
      assert.ok(next > at, heading)
      at = next
    }
  }
  assert.match(spec, /at most 60 words/)
  assert.match(spec, /What remains uncertain/)
  assert.match(spec, /Metallopathy/)
  assert.match(spec, /Key facts/)
})

function baselineFixture(pagesScanned, pathCount, recordedPages = pathCount) {
  const paths = Array.from({ length: pathCount }, (_, index) => `wiki/ingredients/p${index}.md`)
  return {
    pages_scanned: pagesScanned,
    checks: Object.fromEntries(
      CHECKS.map((check) => [check, { pages: recordedPages, paths: [...paths] }]),
    ),
  }
}

function scanFixture(pages, liveCount, extra = {}) {
  const paths = Array.from({ length: liveCount }, (_, index) => `wiki/ingredients/p${index}.md`)
  return {
    pages,
    checks: Object.fromEntries(
      CHECKS.map((check) => [check, extra[check] ? [...extra[check]] : [...paths]]),
    ),
  }
}

test("a page-structure count below the baseline passes", () => {
  // recorded pages 4 and 5 paths is the 594 versus 595 baseline desync.
  const baseline = baselineFixture(10, 5, 4)
  const { failures, improvements } = structureRatchet(scanFixture(9, 2), baseline)
  assert.deepEqual(failures, [])
  assert.ok(improvements.some((line) => line.includes("scanned page count 9")))
  assert.ok(improvements.some((line) => line.includes("below the page-structure baseline 5")))
  assert.match(BASELINE_IMPROVEMENT_NOTE, /does not need to edit/)
})

test("a page-structure count above the baseline fails", () => {
  const baseline = baselineFixture(10, 3)
  const morePages = structureRatchet(scanFixture(11, 1), baseline)
  assert.ok(morePages.failures.some((line) => line.includes("scanned page count 11")))
  const moreViolations = structureRatchet(scanFixture(10, 4), baseline)
  assert.ok(moreViolations.failures.some((line) => line.includes("grew past the baseline")))
  const swapped = structureRatchet(
    scanFixture(10, 1, { metal_symbols: ["wiki/ingredients/new.md"] }),
    baseline,
  )
  assert.ok(swapped.failures.some((line) => line.startsWith("metal_symbols grew")))
})

test("the corpus does not exceed the page-structure baseline", () => {
  const scan = scanRepo(".")
  const baseline = loadBaseline(".")
  const { failures, improvements } = structureRatchet(scan, baseline)
  if (improvements.length) {
    console.log(
      `page-structure baseline: ${improvements.length} count(s) are below the baseline. ${BASELINE_IMPROVEMENT_NOTE}`,
    )
  }
  assert.deepEqual(failures, [])
})
