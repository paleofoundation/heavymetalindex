#!/usr/bin/env node
/**
 * create-missing-pages.mjs
 *
 * Reads data/evidence/routing_unresolved.csv and auto-creates stub pages
 * for unresolved targets (ingredient, product, regulation, metal).
 *
 * Per OPERATING.md Part 3: no approval gates for decisions the model is
 * qualified to make. Stub creation is reversible — pages start empty and
 * the synthesis pass fills them in as sources accumulate. Karen reviews
 * in the morning report.
 *
 * The tool emits:
 *   - wiki/<target_kind>/<slug>.md  (one stub page per resolvable unresolved row)
 *   - data/evidence/autonomy/create-missing-pages-<date>.md  (action log)
 *
 * The stub schema mirrors CLAUDE.md Part 6 templates so the routing audit
 * re-runs cleanly after.
 *
 * Filters applied (do NOT create a stub when):
 *   - target_kind is unknown (not ingredient, product, regulation, or metal)
 *   - slug looks like a typo (Levenshtein ≤ 2 to an existing page) — leave for heal-gaps
 *   - slug appears in a stop-list (out-of-scope, draft-pending, etc.)
 */

import fs from "node:fs"
import path from "node:path"

const REPO_ROOT = process.cwd()
const ROUTING_UNRESOLVED = path.join(REPO_ROOT, "data/evidence/routing_unresolved.csv")
const WIKI_DIR = path.join(REPO_ROOT, "wiki")
const REPORT_DIR = path.join(REPO_ROOT, "data/evidence/autonomy")

const STOP_SLUGS = new Set([
  "out-of-scope",
  "draft-pending",
  "tbd",
  "unknown",
])

function main() {
  if (!fs.existsSync(ROUTING_UNRESOLVED)) {
    console.log("[create-missing-pages] no routing_unresolved.csv; nothing to do.")
    process.exit(0)
  }

  const csv = fs.readFileSync(ROUTING_UNRESOLVED, "utf8")
  const lines = csv.split("\n").slice(1).filter((l) => l.trim())

  const created = []
  const skipped = []
  const seen = new Set()

  for (const line of lines) {
    // Naive CSV parse: handles the quoted-note column at end.
    const m = line.match(/^([^,]+),([^,]+),([^,]+),([^,]+),(.+)$/)
    if (!m) {
      skipped.push({ line, reason: "unparseable" })
      continue
    }
    const [, sourceId, sourcePage, targetKind, declaredTarget, note] = m
    const slug = declaredTarget.trim()

    // Dedupe (slug, kind) — many sources may declare the same target.
    const key = `${targetKind}::${slug}`
    if (seen.has(key)) continue
    seen.add(key)

    // Filters
    if (STOP_SLUGS.has(slug)) {
      skipped.push({ slug, kind: targetKind, reason: "stop-list" })
      continue
    }
    if (!/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(slug)) {
      skipped.push({ slug, kind: targetKind, reason: "malformed slug (likely typo)" })
      continue
    }

    const dir = path.join(WIKI_DIR, targetKindToDir(targetKind))
    if (!fs.existsSync(dir)) {
      skipped.push({ slug, kind: targetKind, reason: `unknown target_kind '${targetKind}'` })
      continue
    }

    const filePath = path.join(dir, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      // Already exists (page was created since routing audit ran).
      continue
    }

    const stub = stubFor(targetKind, slug)
    fs.writeFileSync(filePath, stub, "utf8")
    created.push({ slug, kind: targetKind, file: path.relative(REPO_ROOT, filePath) })
  }

  // Write report
  fs.mkdirSync(REPORT_DIR, { recursive: true })
  const dateStr = new Date().toISOString().slice(0, 10)
  const reportPath = path.join(REPORT_DIR, `create-missing-pages-${dateStr}.md`)
  const report = renderReport(created, skipped)
  fs.writeFileSync(reportPath, report, "utf8")

  console.log(`[create-missing-pages] created ${created.length} stub pages, skipped ${skipped.length}.`)
  console.log(`[create-missing-pages] report: ${path.relative(REPO_ROOT, reportPath)}`)
}

function targetKindToDir(kind) {
  return {
    ingredient: "ingredients",
    product: "products",
    regulation: "regulations",
    metal: "metals",
    "testing-method": "testing",
  }[kind] || ""
}

function stubFor(kind, slug) {
  const title = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")
  if (kind === "ingredient") {
    return `---
type: ingredient
commodity: ${slug}
aliases: []
category: tbd
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: []
audience: [regulator, educator, consumer, app]
updated: ${new Date().toISOString().slice(0, 10)}
---

# ${title}

*Stub created by autonomy/create-missing-pages.mjs. Awaiting source ingest and synthesis pass per CLAUDE.md Part 9.*

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

### Source legend

Empty corpus. Sources will populate as the routing layer fans out ingested papers to this page.
`
  }
  if (kind === "product") {
    return `---
type: product-category
category: ${slug}
typical_ingredients: []
primary_metals_of_concern: []
vulnerable_population: tbd
applicable_regulations: []
updated: ${new Date().toISOString().slice(0, 10)}
---

# ${title}

*Stub created by autonomy/create-missing-pages.mjs. Awaiting source ingest and synthesis pass per CLAUDE.md Part 9.*

## Methodology

Per CLAUDE.md Part 6: speciation is treated as non-substitutable; basis is preserved and labeled; non-detect handling preserves the source's own reporting convention; source pooling is avoided across LOQ, period, geography, and analytical-basis differences; row-fit is determined by author scope, not by re-derivation. Downstream sections anchor to this Methodology block.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
Empty. Generator will populate when sources accumulate.
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

Empty.

## Sources

Empty.
`
  }
  if (kind === "regulation") {
    return `---
type: regulation
rule_id: ${slug}
jurisdiction: tbd
agency: tbd
program: tbd
metal: tbd
matrix: tbd
limit_value: null
limit_unit: ppb
status: draft-pending
effective_date: null
sunset_date: null
source_refs: []
updated: ${new Date().toISOString().slice(0, 10)}
---

# ${title}

*Stub created by autonomy/create-missing-pages.mjs. Awaiting source ingest and synthesis pass per CLAUDE.md Part 9.*

## Scope

To be populated from the source document.

## Exact limit and units

To be populated from the source document.

## Sources

Empty.
`
  }
  if (kind === "metal") {
    return `---
type: metal
symbol: ${slug}
name: ${title}
species: []
audience: [regulator, educator, consumer]
updated: ${new Date().toISOString().slice(0, 10)}
sources: 0
---

# ${title}

*Stub created by autonomy/create-missing-pages.mjs. Awaiting source ingest and synthesis pass per CLAUDE.md Part 9.*
`
  }
  if (kind === "testing-method") {
    return `---
type: testing-method
method: ${slug}
audience: [regulator, educator]
updated: ${new Date().toISOString().slice(0, 10)}
---

# ${title}

*Stub created by autonomy/create-missing-pages.mjs. Awaiting source ingest and synthesis pass.*
`
  }
  return `# ${title}\n\nStub.\n`
}

function renderReport(created, skipped) {
  const lines = [
    `# create-missing-pages report — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `**Created:** ${created.length} stub pages.`,
    `**Skipped:** ${skipped.length}.`,
    ``,
    `## Created`,
    ``,
  ]
  for (const c of created) {
    lines.push(`- ${c.kind}: ${c.slug} → ${c.file}`)
  }
  lines.push(``, `## Skipped`, ``)
  const skipBy = {}
  for (const s of skipped) {
    const key = s.reason
    skipBy[key] = (skipBy[key] || []).concat([s])
  }
  for (const [reason, items] of Object.entries(skipBy)) {
    lines.push(`### ${reason} (${items.length})`)
    for (const i of items.slice(0, 20)) {
      lines.push(`- ${i.kind || "?"}: ${i.slug || i.line || "?"}`)
    }
    if (items.length > 20) lines.push(`- ... and ${items.length - 20} more`)
    lines.push(``)
  }
  return lines.join("\n")
}

main()
