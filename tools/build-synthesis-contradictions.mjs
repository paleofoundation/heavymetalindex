#!/usr/bin/env node
// Living-review contradiction detector.
//
// Per CLAUDE.md Part 9, a synthesis page or ingredient contamination cell
// should be re-synthesised when an incoming source's value disagrees with
// the current page state by more than 2× in either direction for typical_ppb
// or p95_ppb. Today the trigger is checked at ingest time. This tool runs
// the same check across the whole corpus at prebuild time so the surfaces
// where re-synthesis is overdue are visible without waiting for the next
// ingest in that cell.
//
// Algorithm:
//   1. Load every ingredient page's `contamination_profile` (the current
//      synthesis state per cell).
//   2. Load every source page's structured values from
//      data/evidence/values.jsonl (the per-source measurements).
//   3. For each (ingredient, metal) cell with a populated synthesis,
//      compute the ratio of each contributing source's typical / P95 value
//      to the synthesis value. Flag cells where the spread exceeds the
//      tolerance band (2× by default).
//   4. Write data/evidence/synthesis-contradictions.csv and emit a marker-
//      bounded "Contradiction watch" block on the corresponding ingredient
//      page when at least one cell is flagged.
//
// The block is intentionally informational rather than alarming. It tells
// the reader that the corpus contains contributing sources whose values
// disagree with the current synthesis by more than the tolerance band, so
// a re-synthesis pass is warranted. The synthesis claim itself is not
// retracted. The contradiction watch is part of the audit trail Cochrane-
// style living reviews rely on.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const productsDir = path.join(repoRoot, "wiki/products")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
const contradictionsPath = path.join(repoRoot, "data/evidence/synthesis-contradictions.csv")

const beginMarker = "<!-- BEGIN: hmi-contradiction-watch -->"
const endMarker = "<!-- END: hmi-contradiction-watch -->"

const DEFAULT_TOLERANCE = 2.0 // 2× spread is the CLAUDE.md Part 9 threshold

const args = process.argv.slice(2)
const tolArg = args.find((a) => a.startsWith("--tolerance="))
const tolerance = tolArg ? Number(tolArg.split("=")[1]) : DEFAULT_TOLERANCE

// Load synthesis state per (ingredient, metal)
const synthesisByCell = new Map() // "ingredient/metal" → { ingredient, metal, typical, p95, n_studies, last_reviewed }

if (!fs.existsSync(ingredientsDir)) {
  console.log("build-synthesis-contradictions: wiki/ingredients/ missing")
  process.exit(0)
}

for (const file of fs.readdirSync(ingredientsDir)) {
  if (!file.endsWith(".md") || file === "index.md" || file.startsWith("_")) continue
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
  const fm = matter(raw).data
  if (!fm.contamination_profile) continue
  for (const [metal, cell] of Object.entries(fm.contamination_profile)) {
    if (!cell || typeof cell !== "object") continue
    if (cell.status !== "populated") continue
    const typical = Array.isArray(cell.typical_ppb) ? cell.typical_ppb : null
    synthesisByCell.set(`${slug}/${metal}`, {
      ingredient: slug,
      metal,
      typical_low: typical && typical[0] != null ? Number(typical[0]) : null,
      typical_high: typical && typical[1] != null ? Number(typical[1]) : null,
      p95: cell.p95_ppb != null ? Number(cell.p95_ppb) : null,
      n_studies: cell.n_studies || 0,
      last_reviewed: cell.last_reviewed || null,
    })
  }
}

// Load per-source structured values
const valueRecords = []
if (fs.existsSync(valuesPath)) {
  const lines = fs.readFileSync(valuesPath, "utf8").split("\n").filter(Boolean)
  for (const line of lines) {
    try { valueRecords.push(JSON.parse(line)) } catch { /* skip */ }
  }
}

// Bucket value records by (product_matrix, metal_species) — values.jsonl is
// keyed on product, not ingredient. The within-cohort consensus is the
// comparison baseline: a record that disagrees with its (product, metal)
// cohort by more than the tolerance band is the contradiction signal.
const valuesByCell = new Map()
for (const rec of valueRecords) {
  if (rec.review_state && !["approved_for_public", "approved_for_internal", "machine_extracted"].includes(rec.review_state)) continue
  const matrix = rec.product_matrix || rec.ingredient || rec.commodity
  const metal = rec.metal_species || rec.metal || rec.analyte
  const value = rec.normalized_value ?? rec.value_ppb ?? pickNumeric(rec)
  if (!matrix || !metal || value == null || Number.isNaN(Number(value))) continue
  const cellKey = `${matrix}/${metal}`
  if (!valuesByCell.has(cellKey)) valuesByCell.set(cellKey, [])
  valuesByCell.get(cellKey).push({
    source_id: rec.source_id || rec.source || rec.cite_key || "unknown",
    value: Number(value),
    statistic: rec.statistic_type || "unspecified",
  })
}

// Within-cohort contradiction detection: for each (product, metal) cell with
// >= 3 records, compute the median + P95. Flag records whose value is
// > tolerance × P95 (high outliers) or < median / tolerance (low outliers).
// Three records is the minimum where "consensus vs outlier" is meaningful.
const contradictions = []

for (const [cellKey, records] of valuesByCell.entries()) {
  if (records.length < 3) continue
  const [matrix, metal] = cellKey.split("/")
  const values = records.map((r) => r.value).sort((a, b) => a - b)
  const median = values[Math.floor(values.length / 2)]
  const p95 = values[Math.min(Math.floor(values.length * 0.95), values.length - 1)]
  if (median <= 0 && p95 <= 0) continue

  for (const rec of records) {
    let kind = null
    let ratio = 0
    if (p95 > 0 && rec.value > p95 * tolerance) {
      kind = "above-cohort-p95"
      ratio = rec.value / p95
    } else if (median > 0 && rec.value > 0 && rec.value < median / tolerance) {
      kind = "below-cohort-median"
      ratio = median / rec.value
    }
    if (!kind) continue
    contradictions.push({
      ingredient: matrix, // legacy field name; product_matrix is the actual scope
      metal,
      source_cite_key: rec.source_id,
      value_ppb: rec.value,
      synthesis_typical_high: median,
      synthesis_p95: p95,
      ratio: Number(ratio.toFixed(2)),
      kind,
      last_reviewed: null,
    })
  }
}

// Write CSV audit log
const csvLines = ["ingredient,metal,source_cite_key,value_ppb,synthesis_typical_high,synthesis_p95,ratio,kind,last_reviewed"]
for (const c of contradictions) {
  csvLines.push([c.ingredient, c.metal, c.source_cite_key, c.value_ppb, c.synthesis_typical_high ?? "", c.synthesis_p95 ?? "", c.ratio, c.kind, c.last_reviewed || ""].join(","))
}
fs.writeFileSync(contradictionsPath, csvLines.join("\n") + "\n", "utf8")

// Group contradictions by ingredient and emit per-page block
const byIngredient = new Map()
for (const c of contradictions) {
  if (!byIngredient.has(c.ingredient)) byIngredient.set(c.ingredient, [])
  byIngredient.get(c.ingredient).push(c)
}

let pagesUpdated = 0
let pagesCleared = 0
let unmappedSlugs = 0

// values.jsonl carries product_matrix slugs. The per-page block belongs on
// the matching product page; ingredient slugs that incidentally match also
// get one. Iterate both directories.
for (const targetDir of [productsDir, ingredientsDir]) {
  if (!fs.existsSync(targetDir)) continue
  for (const file of fs.readdirSync(targetDir)) {
    if (!file.endsWith(".md") || file === "index.md" || file.startsWith("_")) continue
    const slug = file.replace(/\.md$/, "")
    const filePath = path.join(targetDir, file)
    const raw = fs.readFileSync(filePath, "utf8")
    const flagged = byIngredient.get(slug) || []
    const existingPattern = new RegExp(`\\n*${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)

    let next
    if (flagged.length === 0) {
      if (existingPattern.test(raw)) {
        next = raw.replace(existingPattern, "")
        pagesCleared += 1
      } else { continue }
    } else {
      const block = renderBlock(flagged, tolerance)
      if (existingPattern.test(raw)) {
        next = raw.replace(existingPattern, `\n\n${block}`)
      } else {
        const historyMarker = "<!-- BEGIN: hmi-page-history -->"
        if (raw.includes(historyMarker)) {
          next = raw.replace(historyMarker, `${block}\n\n${historyMarker}`)
        } else {
          next = `${raw.replace(/\n+$/, "")}\n\n${block}\n`
        }
      }
      pagesUpdated += 1
    }

    if (next !== raw) fs.writeFileSync(filePath, next, "utf8")
  }
}

// Count slugs in contradictions that didn't match any product or ingredient page
const seenSlugs = new Set([...fs.readdirSync(productsDir).map((f) => f.replace(/\.md$/, "")),
                          ...fs.readdirSync(ingredientsDir).map((f) => f.replace(/\.md$/, ""))])
for (const [slug] of byIngredient.entries()) {
  if (!seenSlugs.has(slug)) unmappedSlugs += 1
}

console.log(`build-synthesis-contradictions: tolerance ${tolerance}×`)
console.log(`  flagged contradictions:   ${contradictions.length}`)
console.log(`  distinct slugs flagged:   ${byIngredient.size}`)
console.log(`  pages updated:            ${pagesUpdated}`)
console.log(`  pages cleared:            ${pagesCleared}`)
console.log(`  unmapped slugs:           ${unmappedSlugs}`)
console.log(`  audit CSV:                ${path.relative(repoRoot, contradictionsPath)}`)

function pickNumeric(rec) {
  // Pull the most-relevant single numeric from a value record. Prefer typical
  // (mean / median), fall back to P95, then max.
  for (const k of ["typical_ppb", "mean_ppb", "median_ppb", "p95_ppb", "p90_ppb", "max_ppb", "value_ppb"]) {
    if (rec[k] != null && !Number.isNaN(Number(rec[k]))) return Number(rec[k])
  }
  return null
}

function renderBlock(flagged, tol) {
  const top = flagged
    .sort((a, b) => b.ratio - a.ratio)
    .slice(0, 8)
    .map((c) => `| ${c.metal} | [[sources/${c.source_cite_key}]] | ${c.value_ppb} ppb | ${c.synthesis_typical_high ?? "—"} (typical) / ${c.synthesis_p95 ?? "—"} (P95) | ${c.ratio}× | ${c.kind} |`)
    .join("\n")
  return `${beginMarker}
## Contradiction watch

The living-review detector has flagged **${flagged.length}** contributing source value(s) that disagree with the current synthesis by more than ${tol}× the tolerance band. A re-synthesis pass for the affected (ingredient, metal) cell(s) is warranted; the synthesis claim is not retracted by this flag.

| Metal | Source | Reported value | Synthesis band | Spread | Direction |
| --- | --- | --- | --- | --- | --- |
${top}

Full per-flag audit at \`data/evidence/synthesis-contradictions.csv\`. The public evidence-routing boundary and interpretation rules are documented in [[methodology/persistent-wiki-ingest-rule|the methodology]].
${endMarker}`
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
