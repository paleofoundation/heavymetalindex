import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourceId = "fda2011-apple-juice-arsenic-speciation"
const samplesPath = path.join(repoRoot, "data/evidence/category5_apple_juice_arsenic_speciation_samples.csv")
const summaryPath = path.join(repoRoot, "data/evidence/category5_apple_juice_arsenic_speciation_summary.csv")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")

const summaryHeaders = [
  "source_id",
  "source_page",
  "row_id",
  "row_slug",
  "hmtc_row",
  "row_label",
  "source_product_label",
  "source_analyte",
  "metal_species",
  "basis",
  "n",
  "detected_n",
  "lod_n",
  "substitution_rule",
  "fiscal_year_min",
  "fiscal_year_max",
  "p10_ppb",
  "p50_ppb",
  "p90_ppb",
  "p95_ppb",
  "p100_ppb",
  "mean_ppb",
  "median_ppb",
  "max_ppb",
  "mean_lb_ppb",
  "mean_ub_ppb",
  "n_text",
  "statistic_type",
  "censoring_status",
  "censoring_limit_ppb",
  "unit",
  "statistic_scope",
  "evidence_fitness_verdict",
  "review_state",
  "row_fit",
  "category1_related_rows",
  "field_value_summary",
  "notes",
]

if (!fs.existsSync(samplesPath)) {
  throw new Error(`Missing FDA apple-juice sample extract: ${path.relative(repoRoot, samplesPath)}`)
}

const sampleRows = parseCsv(fs.readFileSync(samplesPath, "utf8"))
const inorganicValues = sampleRows.map((row) => numberCell(row.inorganic_as_lower_bound_ppb))
const quantifiedCount = sampleRows.filter((row) => numberCell(row.inorganic_as_lower_bound_ppb) > 0).length
const traceCount = sampleRows.filter((row) => row.inorganic_as_censoring === "reported_trace_above_lod_below_loq").length
const detectedN = quantifiedCount + traceCount
const lodN = sampleRows.length - detectedN
const stats = summarize(inorganicValues)

const substitutionRule =
  "FDA Trace (TR) values above LOD and below LOQ treated as 0 ppb for this lower-bound deterministic percentile calculation; quantified values retained; no percentile inferred from summary statistics."
const common = {
  source_id: sourceId,
  source_page: `wiki/sources/${sourceId}.md`,
  source_product_label: "FDA 2011 single-strength apple juice",
  source_analyte: "Inorganic arsenic (AsIII + AsV)",
  metal_species: "iAs",
  basis: "single_strength_juice",
  n: sampleRows.length,
  detected_n: detectedN,
  lod_n: lodN,
  substitution_rule: substitutionRule,
  fiscal_year_min: 2011,
  fiscal_year_max: 2011,
  p10_ppb: formatNumber(stats.p10),
  p50_ppb: formatNumber(stats.p50),
  p90_ppb: formatNumber(stats.p90),
  p95_ppb: formatNumber(stats.p95),
  p100_ppb: formatNumber(stats.p100),
  mean_ppb: formatNumber(stats.mean),
  median_ppb: formatNumber(stats.p50),
  max_ppb: formatNumber(stats.p100),
  mean_lb_ppb: formatNumber(stats.mean),
  mean_ub_ppb: "",
  n_text: `${sampleRows.length} FDA sample rows; ${traceCount} TR values handled as lower-bound zero`,
  statistic_type: "deterministic_lower_bound_sample_percentiles",
  censoring_status: "trace_values_lower_bound_zero",
  censoring_limit_ppb: "",
  unit: "ppb",
  evidence_fitness_verdict: "EF-2",
  review_state: "reviewed_route",
}

const summaryRows = [
  {
    ...common,
    row_id: "hmtc_c5_r02",
    row_slug: "fruit-juices-apple-containing",
    hmtc_row: 2,
    row_label: "Fruit juices, apple-containing",
    statistic_scope: "FDA 2011 single-strength apple juice; inorganic arsenic lower-bound sample distribution",
    row_fit: "direct_apple_juice_speciation_row",
    category1_related_rows: "fruit-juices-apple-containing",
    field_value_summary: `iAs N=${sampleRows.length}; p50=${formatNumber(stats.p50)} ppb; p90=${formatNumber(stats.p90)} ppb; p95=${formatNumber(stats.p95)} ppb; max=${formatNumber(stats.p100)} ppb`,
    notes:
      "Historical FDA single-strength apple-juice speciation dataset. Use for species-specific occurrence and source-prioritization; one historical source is not an HMTc aggregate threshold.",
  },
  {
    ...common,
    row_id: "hmtc_c1_r14",
    row_slug: "fruit-juice-not-canned",
    hmtc_row: 14,
    row_label: "Fruit juice (not canned)",
    statistic_scope:
      "FDA 2011 single-strength apple juice; apple-only inorganic arsenic lower-bound sample distribution routed as not-canned fruit-juice context",
    row_fit: "apple_juice_subcategory_context_for_not_canned_fruit_juice",
    category1_related_rows: "fruit-juices-apple-containing; fruit-juice-not-canned",
    field_value_summary: `Apple iAs N=${sampleRows.length}; p50=${formatNumber(stats.p50)} ppb; p90=${formatNumber(stats.p90)} ppb; p95=${formatNumber(stats.p95)} ppb; max=${formatNumber(stats.p100)} ppb`,
    notes:
      "Apple-only subcategory context for the broader not-canned fruit-juice row; do not treat as a full not-canned fruit-juice aggregate.",
  },
]

writeCsv(summaryPath, summaryRows, summaryHeaders)

const valueIds = new Set([
  "category5-apple-juice-speciation-fda2011-fruit-juices-apple-containing-ias",
  "category1-apple-juice-speciation-fda2011-fruit-juice-not-canned-ias",
])
const valueRows = fs.existsSync(valuesPath)
  ? fs
      .readFileSync(valuesPath, "utf8")
      .trimEnd()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line))
      .filter((row) => !valueIds.has(row.value_id))
  : []

valueRows.push(...summaryRows.map(summaryRowToValueRecord))
fs.writeFileSync(valuesPath, `${valueRows.map((row) => JSON.stringify(row)).join("\n")}\n`, "utf8")

console.log(`Wrote ${summaryRows.length} FDA apple-juice speciation summary rows to ${path.relative(repoRoot, summaryPath)}`)
console.log(`Updated FDA apple-juice speciation value records in ${path.relative(repoRoot, valuesPath)}`)

function summaryRowToValueRecord(row) {
  const isAppleRow = row.row_slug === "fruit-juices-apple-containing"
  return {
    value_id: isAppleRow
      ? "category5-apple-juice-speciation-fda2011-fruit-juices-apple-containing-ias"
      : "category1-apple-juice-speciation-fda2011-fruit-juice-not-canned-ias",
    source_id: row.source_id,
    claim_class: "literature_finding",
    metal_species: row.metal_species,
    product_matrix: row.row_slug,
    basis: row.basis,
    statistic_type: row.statistic_type,
    original_value: Number(row.p90_ppb),
    original_unit: row.unit,
    normalized_value: Number(row.p90_ppb),
    normalized_unit: row.unit,
    quote_trace: [
      "FDA 2011 single-strength apple-juice arsenic speciation table",
      `iAs lower-bound deterministic sample percentiles; n=${row.n}`,
      `detected_n=${row.detected_n}`,
      `trace_n=${traceCount}`,
      `lod_n=${row.lod_n}`,
      `p50=${row.p50_ppb}`,
      `p90=${row.p90_ppb}`,
      `p95=${row.p95_ppb}`,
      `p100=${row.p100_ppb}`,
      `mean=${row.mean_ppb}`,
      `row_fit=${row.row_fit}`,
      "TR values were reported above LOD and below LOQ and are treated as 0 ppb only for the documented lower-bound calculation.",
    ].join("; "),
    page_number: null,
    table_number: null,
    evidence_fitness_verdict: row.evidence_fitness_verdict,
    public_label: "Reconstructable dataset",
    review_state: row.review_state,
  }
}

function summarize(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b)
  if (sorted.length === 0) throw new Error("No numeric inorganic arsenic values found in sample extract.")
  return {
    p10: nearestRank(sorted, 0.1),
    p50: nearestRank(sorted, 0.5),
    p90: nearestRank(sorted, 0.9),
    p95: nearestRank(sorted, 0.95),
    p100: sorted[sorted.length - 1],
    mean: sorted.reduce((sum, value) => sum + value, 0) / sorted.length,
  }
}

function nearestRank(sortedValues, percentile) {
  const rank = Math.max(1, Math.ceil(percentile * sortedValues.length))
  return sortedValues[rank - 1]
}

function numberCell(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) throw new Error(`Expected numeric cell, received ${value}`)
  return number
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]
    if (quoted && char === '"' && next === '"') {
      field += '"'
      index += 1
      continue
    }
    if (char === '"') {
      quoted = !quoted
      continue
    }
    if (!quoted && char === ",") {
      row.push(field)
      field = ""
      continue
    }
    if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") index += 1
      row.push(field)
      rows.push(row)
      row = []
      field = ""
      continue
    }
    field += char
  }

  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }

  const [headers = [], ...body] = rows.filter((line) => line.some((cell) => cell !== ""))
  return body.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])))
}

function writeCsv(filePath, rows, headers) {
  const text = `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, text, "utf8")
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function formatNumber(value) {
  return Number(value.toFixed(2)).toString()
}
