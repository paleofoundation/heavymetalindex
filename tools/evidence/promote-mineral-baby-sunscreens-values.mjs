#!/usr/bin/env node
// Promotes the uncontested finished-product rows of the 2026-09-26 mineral baby
// sunscreens ingest from the number ledger into data/evidence/values.jsonl.
//
// Inclusion rules (applied mechanically to the ledger and flags files):
//   - finished-product occurrence rows only (comparison chart and single laboratory reports);
//     raw materials, seawater, skin and limit rows are not product content;
//   - no row carrying an UNRESOLVED flag;
//   - a chart row that repeats a single laboratory report is the same test: it is dropped
//     in favour of the report, and dropped too when that report is excluded;
//   - non-detects need a printed reporting limit; they are kept as censored, not as zero;
//   - the retail screening that used a food-validated digestion is not promoted;
//   - peer-reviewed rows with unresolved statistic or detection-limit flags are not promoted.
// Values are total element content in the product as received, converted ppb -> mg/kg by
// unit identity (1 mg/kg = 1000 ppb). Re-running replaces the batch; it never duplicates.

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const BATCH = "mineral-baby-sunscreens-2026-09-26"
const ledgerPath = path.join(root, "docs/briefs/mineral-baby-sunscreens-number-ledger.csv")
const flagsPath = path.join(root, "data/evidence/mineral-baby-sunscreens-ingest-2026-09-26-flags.csv")
const valuesPath = path.join(root, "data/evidence/values.jsonl")

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++ }
      else if (c === '"') quoted = false
      else field += c
    } else if (c === '"') quoted = true
    else if (c === ",") { row.push(field); field = "" }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = "" }
    else if (c !== "\r") field += c
  }
  if (field || row.length) { row.push(field); rows.push(row) }
  const [header, ...body] = rows
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])))
}

const ledger = parseCsv(fs.readFileSync(ledgerPath, "utf8"))
const flags = parseCsv(fs.readFileSync(flagsPath, "utf8"))
const unresolved = new Set(flags.filter((f) => f.status === "UNRESOLVED").map((f) => f.flag_id))

const CHART = "rubin2026-sunscreen-metals-comparison-chart"
const SINGLE_PREFIX = "rubin2025-mineral-baby-sunscreen-case-"
const SPECIES = { Pb: "Pb", Cd: "Cd", tAs: "tAs", tHg: "tHg" }

const hasUnresolved = (row) => row.flag_ids.split(";").filter(Boolean).some((f) => unresolved.has(f))
const productRows = ledger.filter(
  (r) => r.record_type === "occurrence" && (r.cite_key === CHART || r.cite_key.startsWith(SINGLE_PREFIX)),
)

const includedCases = new Set(
  productRows.filter((r) => r.cite_key.startsWith(SINGLE_PREFIX) && !hasUnresolved(r)).map((r) => r.cite_key.slice(SINGLE_PREFIX.length)),
)
const excludedCases = new Set(
  productRows.filter((r) => r.cite_key.startsWith(SINGLE_PREFIX) && hasUnresolved(r)).map((r) => r.cite_key.slice(SINGLE_PREFIX.length)),
)

function productFor(row) {
  if (row.cite_key.startsWith(SINGLE_PREFIX)) return "baby-sunscreen-mineral"
  if (/zinc oxide powder/.test(row.matrix)) return null
  const kids = (row.matrix.match(/"Kids\?" column: ([^,]+)/) || [])[1]
  const chemical = /chemical sunscreen/.test(row.note)
  if (chemical) return kids === "Kid" ? "baby-sunscreen-chemical" : "sun-suntan-products"
  if (!/^zinc oxide/.test(row.note)) return null
  return kids === "Baby" ? "baby-sunscreen-mineral" : "sun-suntan-mineral"
}

function parsePrinted(text) {
  const t = text.trim()
  const lim = t.match(/^(?:ND\s*)?<\s*([\d.,]+)$/)
  if (lim) return { censored: true, ppb: Number(lim[1].replace(/,/g, "")) }
  const n = Number(t.replace(/,/g, ""))
  return Number.isFinite(n) ? { censored: false, ppb: n } : null
}

const promoted = []
const skipped = []
for (const row of productRows) {
  const why = []
  if (hasUnresolved(row)) why.push("unresolved flag")
  const sameTest = (row.note.match(/same test as laboratory case (\d+)/) || [])[1]
  if (row.cite_key === CHART && sameTest && includedCases.has(sameTest)) why.push(`counted once via case ${sameTest}`)
  if (row.cite_key === CHART && sameTest && excludedCases.has(sameTest)) why.push(`same test as contested case ${sameTest}`)
  const product = productFor(row)
  if (!product) why.push("not a finished sunscreen with confirmed filter type")
  const parsed = parsePrinted(row.value_as_printed)
  if (!parsed) why.push("non-numeric or no printed limit")
  if (why.length) { skipped.push({ row: row.row_id, why: why.join("; ") }); continue }

  const mgkg = Number((parsed.ppb / 1000).toPrecision(6))
  promoted.push({
    value_id: `${BATCH}-${row.row_id.toLowerCase()}`,
    source_id: row.cite_key,
    claim_class: "literature_finding",
    metal_species: SPECIES[row.metal],
    product_matrix: product,
    basis: "as_sold",
    analyte_basis: "total element content in the product as received; ICP-MS, digestion not described by the laboratory",
    statistic_type: parsed.censored ? "single_unit_result_below_reporting_limit" : "single_unit_result",
    original_value: parsed.ppb,
    original_value_text: row.value_as_printed,
    original_unit: "ppb",
    normalized_value: parsed.censored ? null : mgkg,
    normalized_unit: "mg/kg",
    censoring: parsed.censored ? "less_than" : "quantified",
    censoring_limit: parsed.censored ? mgkg : null,
    measurement_n: 1,
    sample_code: row.sample_code,
    quote_trace: `${row.table_or_figure}; ${row.sample_code}; printed ${row.value_as_printed} ppb as received (${row.analyte_species}). Ledger ${row.row_id}.`,
    page_number: row.page.replace(/^PDF p\. /, ""),
    table_number: row.table_or_figure,
    evidence_fitness_verdict: "EF-3",
    public_label: "Modeled or limited evidence",
    evidence_class: "grey literature; one purchased unit, one lot",
    review_state: "reviewed",
    ledger_row: row.row_id,
    promotion_batch: BATCH,
  })
}

const existing = fs.readFileSync(valuesPath, "utf8").split("\n").filter(Boolean)
const kept = existing.filter((line) => JSON.parse(line).promotion_batch !== BATCH)
fs.writeFileSync(valuesPath, [...kept, ...promoted.map((r) => JSON.stringify(r))].join("\n") + "\n", "utf8")

const byProduct = {}
for (const r of promoted) byProduct[r.product_matrix] = (byProduct[r.product_matrix] || 0) + 1
console.log(JSON.stringify({ batch: BATCH, promoted: promoted.length, byProduct, skipped: skipped.length }, null, 1))
if (process.argv.includes("--verbose")) for (const s of skipped) console.log(`skip ${s.row}: ${s.why}`)
