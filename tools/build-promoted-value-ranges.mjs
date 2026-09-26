#!/usr/bin/env node
// Renders measured ranges on product pages from reviewed rows in
// data/evidence/values.jsonl that belong to a promotion batch and carry
// normalized_unit "mg/kg" (total content in the product as sold).
//
// The block is descriptive: counts, quantified min-max, and non-detects counted
// against their printed reporting limits. It computes no percentile, pooled
// statistic or candidate limit; a non-detect is never treated as zero.

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const valuesPath = path.join(root, "data/evidence/values.jsonl")
const productDir = path.join(root, "wiki/products")
const BEGIN = "<!-- BEGIN: hmi-promoted-value-ranges -->"
const END = "<!-- END: hmi-promoted-value-ranges -->"
const METALS = [
  ["Pb", "[[metals/lead\\|Pb]]"],
  ["Cd", "[[metals/cadmium\\|Cd]]"],
  ["tAs", "[[metals/arsenic-total\\|tAs]]"],
  ["tHg", "[[metals/mercury-total\\|tHg]]"],
]

const rows = fs
  .readFileSync(valuesPath, "utf8")
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line))
  .filter((r) => r.promotion_batch && r.normalized_unit === "mg/kg" && r.review_state === "reviewed")

const byProduct = new Map()
for (const r of rows) {
  if (!byProduct.has(r.product_matrix)) byProduct.set(r.product_matrix, [])
  byProduct.get(r.product_matrix).push(r)
}

const fmt = (n) => String(Number(n.toPrecision(6)))

function block(productRows) {
  const table = [
    "| Analyte | Units tested | Quantified | Range where quantified (mg/kg) | Below reporting limit | Sources |",
    "| --- | ---: | ---: | --- | --- | --- |",
  ]
  for (const [metal, label] of METALS) {
    const m = productRows.filter((r) => r.metal_species === metal)
    if (m.length === 0) continue
    const q = m.filter((r) => r.censoring === "quantified").map((r) => r.normalized_value)
    const c = m.filter((r) => r.censoring === "less_than")
    const limits = [...new Set(c.map((r) => fmt(r.censoring_limit)))]
    const range = q.length === 0 ? "none quantified" : q.length === 1 ? fmt(q[0]) : `${fmt(Math.min(...q))} to ${fmt(Math.max(...q))}`
    const below = c.length === 0 ? "0" : `${c.length} (< ${limits.join(", < ")})`
    const sources = [...new Set(m.map((r) => r.source_id))].sort()
    table.push(`| ${label} | ${m.length} | ${q.length} | ${range} | ${below} | ${sources.length} |`)
  }
  const sourceList = [...new Set(productRows.map((r) => r.source_id))].sort().map((s) => `[[sources/${s}]]`).join(", ")
  return [
    BEGIN,
    "## Measured ranges from the evidence register",
    "",
    "<!-- audience: regulator, educator, consumer, app -->",
    "",
    "Computed from reviewed rows in the structured evidence register for this page: total element content in the product as sold, in mg/kg, one purchased unit per result. These are single commercially tested units from grey literature, not a market distribution. Non-detects are counted against the reporting limit the laboratory printed and are not treated as zero. Rows attached to an unresolved flag, repeated reports of the same test, non-detects without a printed limit, unstated bases, and screening results from a food-validated digestion are not included.",
    "",
    ...table,
    "",
    `Sources: ${sourceList}.`,
    END,
  ].join("\n")
}

let updated = 0
for (const [product, productRows] of [...byProduct.entries()].sort()) {
  const file = path.join(productDir, `${product}.md`)
  if (!fs.existsSync(file)) continue
  const original = fs.readFileSync(file, "utf8")
  const next = upsert(original, block(productRows))
  if (next !== original) {
    fs.writeFileSync(file, next)
    updated++
  }
}
console.log(`promoted-value-ranges: ${rows.length} rows, ${byProduct.size} product(s), ${updated} page(s) updated`)

function upsert(text, section) {
  const start = text.indexOf(BEGIN)
  if (start >= 0) {
    const end = text.indexOf(END, start)
    return text.slice(0, start) + section + text.slice(end + END.length)
  }
  for (const anchor of ["<!-- END: hmi-hmtc-evidence-summary -->"]) {
    const i = text.indexOf(anchor)
    if (i >= 0) return text.slice(0, i + anchor.length) + "\n\n" + section + text.slice(i + anchor.length)
  }
  const legend = text.indexOf("<!-- BEGIN: hmi-source-legend -->")
  if (legend >= 0) return text.slice(0, legend) + section + "\n\n" + text.slice(legend)
  return text.trimEnd() + "\n\n" + section + "\n"
}
