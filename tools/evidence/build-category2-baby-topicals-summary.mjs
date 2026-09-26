#!/usr/bin/env node
// build-category2-baby-topicals-summary.mjs
//
// Turns the uncontested baby lotion, oil, and powder values promoted into
// data/evidence/values.jsonl (value_id prefix "lotions-ingest-1-") into
// data/evidence/category2_baby_topicals_occurrence_summary.csv, one row per
// (product row, source, analyte). That file feeds the standards gap report and
// the public Literature Evidence Summary block on the product pages.
//
// Only printed statistics are carried: the sample count, the detected count,
// the lowest and highest printed detected values, and a mean only where the source itself prints one
// for the same sample set. Nothing is pooled across sources and no percentile
// is computed. A printed mean that counts below-detection cells as zero is
// carried as mean_lb_ppb, not mean_ppb. A printed mean whose sample set includes
// a contested cell is dropped.
//
// Promotion rules (decided 2026-09-26): total-content mg/kg values only. Rows
// that carry an unresolved flag, extract-basis limits, dried-basis-unstated
// results, and mg/L digest readings are never promoted, so they never reach
// this file. See docs/briefs/baby-lotions-oils-powders-reading-brief.md.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
const ledgerPath = path.join(repoRoot, "docs/briefs/baby-lotions-oils-powders-number-ledger.csv")
const outPath = path.join(repoRoot, "data/evidence/category2_baby_topicals_occurrence_summary.csv")

const PREFIX = "lotions-ingest-1-"
const ROW_LABELS = {
  "baby-talcum-powder": ["Baby Talcum Powder", 4],
  "baby-powder-cornstarch": ["Baby Powder, Cornstarch-Based", 3],
  "baby-lotion-cream": ["Baby Lotion / Baby Cream", 1],
  "baby-oil": ["Baby Oil", 2],
}

const values = fs
  .readFileSync(valuesPath, "utf8")
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line))
  .filter((row) => String(row.value_id || "").startsWith(PREFIX))

const printedMeans = readPrintedMeans()

const groups = new Map()
for (const row of values) {
  const key = `${row.product_matrix}|${row.source_id}|${row.metal_species}`
  if (!groups.has(key)) groups.set(key, [])
  groups.get(key).push(row)
}

const header = [
  "source_id", "source_page", "row_id", "row_slug", "hmtc_row", "row_label", "source_product_label", "source_analyte",
  "metal_species", "basis", "n", "detected_n", "p10_ppb", "p50_ppb", "p90_ppb", "p95_ppb", "p100_ppb", "mean_ppb",
  "median_ppb", "max_ppb", "min_detected_ppb", "mean_lb_ppb", "mean_ub_ppb", "n_text", "statistic_type", "censoring_status",
  "censoring_limit_ppb", "unit", "statistic_scope", "evidence_fitness_verdict", "review_state", "row_fit",
  "field_value_summary", "notes",
]

const lines = [header.join(",")]
for (const [key, rows] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const [slug, sourceId, metal] = key.split("|")
  const [label, hmtcRow] = ROW_LABELS[slug] ?? [slug, ""]
  const detected = rows.filter((row) => Number.isFinite(row.normalized_value))
  const maxPpb = detected.length ? Math.max(...detected.map((row) => row.normalized_value)) : ""
  const minPpb = detected.length ? Math.min(...detected.map((row) => row.normalized_value)) : ""
  const censored = rows.length - detected.length
  // A source-level maximum (news report) carries its sample count but no
  // detected count; every other row is one printed value per product.
  const maximumOnly = String(rows[0].statistic_type).startsWith("maximum_across")
  const n = maximumOnly ? rows[0].measurement_n : rows.length
  const detectedN = maximumOnly ? "" : detected.length

  let meanPpb = ""
  let meanLbPpb = ""
  const printed = printedMeans.get(`${sourceId}|${metal}`)
  const containsExcludedCell = rows.length === 1 ? false : rows.length < (printed?.n ?? rows.length)
  if (rows.length === 1 && rows[0].statistic_type.includes("mean")) meanPpb = rows[0].normalized_value
  else if (printed && !containsExcludedCell) {
    if (censored === 0) meanPpb = printed.ppb
    else meanLbPpb = printed.ppb
  }

  const summary = [
    maximumOnly ? `maximum across ${n} samples; detected count not printed` : `${detectedN} of ${n} products detected`,
    maxPpb !== "" && !maximumOnly && minPpb < maxPpb ? `detected ${fmt(minPpb / 1000)} to ${fmt(maxPpb / 1000)} mg/kg` : maxPpb !== "" ? `highest printed ${fmt(maxPpb / 1000)} mg/kg` : "",
    meanPpb !== "" && rows.length > 1 ? `source-printed mean ${fmt(meanPpb / 1000)} mg/kg` : "",
    meanLbPpb !== "" ? `source-printed mean ${fmt(meanLbPpb / 1000)} mg/kg with below-detection cells counted as zero` : "",
  ].filter(Boolean).join("; ")

  const record = {
    source_id: sourceId,
    source_page: `wiki/sources/${sourceId}.md`,
    row_id: `hmtc_c2_${slug}`,
    row_slug: slug,
    hmtc_row: hmtcRow,
    row_label: label,
    source_product_label: rows[0].row_fit,
    source_analyte: metal,
    metal_species: metal === "Cr" ? "Cr-total" : metal,
    basis: "as_sold",
    n,
    detected_n: detectedN,
    p10_ppb: "", p50_ppb: "", p90_ppb: "", p95_ppb: "", p100_ppb: "",
    mean_ppb: meanPpb,
    median_ppb: "",
    max_ppb: maxPpb,
    min_detected_ppb: maximumOnly ? "" : minPpb,
    mean_lb_ppb: meanLbPpb,
    mean_ub_ppb: "",
    n_text: `${n}`,
    statistic_type: rows[0].statistic_type,
    censoring_status: censored ? "LDL cells present; limit not printed" : "detected",
    censoring_limit_ppb: "",
    unit: "ppb",
    statistic_scope: "per-source printed values; not pooled across sources",
    evidence_fitness_verdict: rows[0].evidence_fitness_verdict,
    review_state: "reviewed",
    row_fit: rows[0].row_fit,
    field_value_summary: summary,
    notes: `${rows[0].content_basis}. Values promoted from values.jsonl (${rows.length} row${rows.length === 1 ? "" : "s"}); ledger rows ${rows.map((row) => row.ledger_row).join(" ")}.`,
  }
  lines.push(header.map((column) => csvCell(record[column])).join(","))
}

fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8")
console.log(`category2 baby topicals summary: ${groups.size} rows from ${values.length} promoted values -> ${path.relative(repoRoot, outPath)}`)

function readPrintedMeans() {
  const means = new Map()
  if (!fs.existsSync(ledgerPath)) return means
  const [head, ...rest] = parseCsv(fs.readFileSync(ledgerPath, "utf8"))
  for (const cells of rest) {
    const row = Object.fromEntries(head.map((h, i) => [h, cells[i] ?? ""]))
    if (row.table_or_figure !== "Table 5, summary row" || !row.statistic.startsWith("mean")) continue
    const value = Number(row.value_as_printed)
    if (!Number.isFinite(value)) continue
    means.set(`${row.cite_key}|${row.metal}`, { ppb: Math.round(value * 1000 * 1000) / 1000, n: Number(row.n) || 0 })
  }
  return means
}

function parseCsv(text) {
  const records = []
  let field = ""
  let record = []
  let quoted = false
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i]
    if (quoted && ch === '"' && text[i + 1] === '"') { field += '"'; i += 1; continue }
    if (ch === '"') { quoted = !quoted; continue }
    if (!quoted && ch === ",") { record.push(field); field = ""; continue }
    if (!quoted && (ch === "\n" || ch === "\r")) {
      if (ch === "\r" && text[i + 1] === "\n") i += 1
      record.push(field); records.push(record); field = ""; record = []
      continue
    }
    field += ch
  }
  if (field || record.length) { record.push(field); records.push(record) }
  return records.filter((r) => r.some((v) => v !== ""))
}

function fmt(value) {
  return String(Number(Number(value).toFixed(3)))
}

function csvCell(value) {
  const text = String(value ?? "")
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}
