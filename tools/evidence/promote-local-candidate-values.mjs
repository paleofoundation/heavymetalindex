import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""

const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const candidatePath = path.join(repoRoot, "data/evidence/local_reingest_candidate_values.csv")
const summaryPath = path.join(repoRoot, "data/evidence/category1_formula_concentration_summary.csv")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")

const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const candidateRows = fs.existsSync(candidatePath) ? parseCsv(fs.readFileSync(candidatePath, "utf8")) : []
const existingSummaryRows = fs.existsSync(summaryPath) ? parseCsv(fs.readFileSync(summaryPath, "utf8")) : []
const existingValueRows = fs.existsSync(valuesPath)
  ? fs
      .readFileSync(valuesPath, "utf8")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line))
  : []

const eligibleSourceKeys = new Set(
  queueRows
    .filter((row) => !productFilter || row.product_slug === productFilter)
    .filter((row) => row.local_pdf_status === "local_pdf_found")
    .map((row) => stateKey(row.product_slug, row.source_id)),
)

const promotedCandidates = candidateRows
  .filter((row) => !productFilter || row.product_slug === productFilter)
  .filter((row) => eligibleSourceKeys.has(stateKey(row.product_slug, row.source_id)))
  .filter((row) => String(row.extraction_method || "").startsWith("deterministic_parser_"))
  .sort((a, b) => candidateSortKey(a).localeCompare(candidateSortKey(b)))

const promotedSummaryRows = promotedCandidates.map(toSummaryRow)
const promotedKeys = new Set(promotedSummaryRows.map(summaryIdentity))

const nextSummaryRows = [
  ...existingSummaryRows.filter((row) => !promotedKeys.has(summaryIdentity(row))),
  ...promotedSummaryRows,
]

const nextValueRows = [
  ...existingValueRows.filter((row) => !String(row.value_id || "").startsWith("category1-formula-local-auto-")),
  ...promotedSummaryRows.map(toValueRecord),
]

fs.writeFileSync(summaryPath, toCsv(nextSummaryRows, summaryHeaders(nextSummaryRows)), "utf8")
fs.writeFileSync(valuesPath, `${nextValueRows.map((row) => JSON.stringify(row)).join("\n")}\n`, "utf8")

const promotedSourceCount = new Set(promotedSummaryRows.map((row) => stateKey(row.row_slug, row.source_id))).size

console.log(`Promoted ${promotedSummaryRows.length} deterministic local candidate row(s) across ${promotedSourceCount} source/product route(s).`)
console.log(`Updated ${path.relative(repoRoot, summaryPath)}`)
console.log(`Updated ${path.relative(repoRoot, valuesPath)}`)

function toSummaryRow(row) {
  const meta = hmtcRowMeta(row.product_slug)
  return {
    source_id: row.source_id,
    source_page: row.source_page,
    row_id: meta.row_id,
    row_slug: row.product_slug,
    hmtc_row: meta.hmtc_row,
    product_label: meta.product_label,
    source_product_label: row.source_product_label,
    metal_species: row.metal_species,
    basis: normalizeBasis(row.basis),
    n: row.n || "",
    detected_n: row.n || "",
    lod_n: "",
    substitution_rule: substitutionRule(row),
    fiscal_year_min: "",
    fiscal_year_max: "",
    p10_ppb: "",
    p50_ppb: row.p50_ppb || "",
    p90_ppb: row.p90_ppb || "",
    p95_ppb: row.p95_ppb || "",
    p100_ppb: row.max_ppb || "",
    mean_ppb: row.mean_ppb || "",
    median_ppb: "",
    max_ppb: row.max_ppb || "",
    mean_lb_ppb: row.mean_lb_ppb || "",
    mean_ub_ppb: row.mean_ub_ppb || "",
    n_text: row.n_text || "",
    statistic_type: row.statistic_type || "",
    censoring_status: row.censoring_status || "",
    censoring_limit_ppb: row.censoring_limit_ppb || "",
    unit: row.unit || "ppb",
    statistic_scope: statisticScope(row),
    evidence_fitness_verdict: row.evidence_fitness_verdict || "EF-3",
    review_state: "machine_extracted",
    row_fit: normalizeRowFit(row.row_fit),
    category1_related_rows: row.product_slug,
    notes: `${row.notes || ""} Auto-promoted from deterministic local candidate after confirmed local-PDF match.`.trim(),
  }
}

function toValueRecord(row) {
  return {
    value_id: `category1-formula-local-auto-${slugify(summaryIdentity(row))}`,
    source_id: row.source_id,
    claim_class: "literature_finding",
    metal_species: row.metal_species,
    product_matrix: row.row_slug,
    basis: valueBasis(row.basis),
    statistic_type: row.p90_ppb ? "p10_p50_p90_p95_p100_source_reported" : row.statistic_type || row.statistic_scope,
    original_value: bestNumericValue(row),
    original_unit: row.unit || "ppb",
    normalized_value: bestNumericValue(row),
    normalized_unit: "ppb",
    quote_trace: `${row.statistic_scope}; ${row.substitution_rule}; n=${row.n || ""}; detected_n=${row.detected_n || ""}; p50=${row.p50_ppb || row.median_ppb || ""}; p90=${row.p90_ppb || ""}; p100=${row.p100_ppb || row.max_ppb || ""}; row_fit=${row.row_fit}.`,
    page_number: null,
    table_number: null,
    evidence_fitness_verdict: row.evidence_fitness_verdict,
    public_label: publicLabelForEvidenceFitness(row.evidence_fitness_verdict),
    review_state: row.review_state,
  }
}

function bestNumericValue(row) {
  for (const value of [row.p90_ppb, row.max_ppb, row.p100_ppb, row.mean_ppb, row.mean_ub_ppb, row.mean_lb_ppb, row.p50_ppb, row.censoring_limit_ppb]) {
    if (value === "" || value === null || value === undefined) continue
    const number = Number(value)
    if (Number.isFinite(number)) return number
  }
  return null
}

function substitutionRule(row) {
  const rules = []
  if (row.mean_lb_ppb || row.mean_ub_ppb) {
    rules.push("source-reported lower-bound to upper-bound mean range; not a min/max range and not a percentile")
  }
  if (row.censoring_status === "less_than" || row.censoring_status === "less_than_loq" || row.censoring_status === "less_than_lod") {
    rules.push("<LOD/LOQ retained as censored source table value; not imputed")
  }
  if (rules.length === 0) rules.push("source-reported summary statistic; no percentile inference")
  return rules.join("; ")
}

function statisticScope(row) {
  const label = row.source_product_label || row.source_title || row.source_id
  return `${label}; ${String(row.statistic_type || "source_reported_value").replace(/_/g, " ")}`
}

function normalizeRowFit(rowFit) {
  const text = String(rowFit || "")
  if (text === "direct_category1_row") return text
  if (text.includes("bridge")) return "bridge_product_context"
  if (text.includes("broad")) return "broad_formula_context"
  if (text.includes("outside")) return "outside_locked_category1_rows"
  return "literature_summary_row"
}

function normalizeBasis(basis) {
  const text = String(basis || "")
  return text || "as_sold_or_source_reported"
}

function hmtcRowMeta(productSlug) {
  const meta = {
    "infant-formula-powder-non-soy": { row_id: "hmtc_c1_r01", hmtc_row: "1", product_label: "Infant formula, powder (non-soy)" },
    "infant-formula-powder-soy-based": { row_id: "hmtc_c1_r02", hmtc_row: "2", product_label: "Infant formula, powder (soy-based)" },
    "infant-formula-rtf-liquid-non-soy": { row_id: "hmtc_c1_r03", hmtc_row: "3", product_label: "Infant formula, ready-to-feed liquid (non-soy)" },
    "infant-formula-rtf-liquid-soy-based": { row_id: "hmtc_c1_r04", hmtc_row: "4", product_label: "Infant formula, ready-to-feed liquid (soy-based)" },
  }
  return meta[productSlug] ?? { row_id: "", hmtc_row: "", product_label: humanizeSlug(productSlug) }
}

function valueBasis(basis) {
  return basis === "prepared_for_feeding" || basis === "as_consumed" ? "reconstituted" : "as_sold"
}

function publicLabelForEvidenceFitness(verdict) {
  if (verdict === "EF-2") return "Reconstructable dataset"
  if (verdict === "EF-4") return "Context only"
  return "Modeled or limited evidence"
}

function summaryIdentity(row) {
  return [
    row.source_id,
    row.row_slug,
    row.source_product_label,
    row.metal_species,
    row.basis,
  ].join("::")
}

function stateKey(productSlug, sourceId) {
  return `${productSlug}::${sourceId}`
}

function candidateSortKey(row) {
  return [row.product_slug, row.source_id, row.source_product_label, row.metal_species, row.source_row_order].join("::")
}

function summaryHeaders(rows) {
  const base = [
    "source_id",
    "source_page",
    "row_id",
    "row_slug",
    "hmtc_row",
    "product_label",
    "source_product_label",
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
    "notes",
  ]
  const extras = new Set()
  for (const row of rows) {
    for (const key of Object.keys(row)) {
      if (!base.includes(key)) extras.add(key)
    }
  }
  return [...base, ...extras]
}

function toCsv(rows, headers) {
  return `${headers.join(",")}\n${rows.map((row) => headers.map((header) => csvCell(row[header])).join(",")).join("\n")}\n`
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function parseArgs(argv) {
  const parsed = new Map()
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (!arg.startsWith("--")) continue
    const [key, inlineValue] = arg.slice(2).split("=", 2)
    const value = inlineValue ?? argv[index + 1]
    parsed.set(key, value)
    if (inlineValue === undefined) index += 1
  }
  return parsed
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]
    if (char === '"') {
      if (quoted && next === '"') {
        field += '"'
        index += 1
      } else {
        quoted = !quoted
      }
      continue
    }
    if (char === "," && !quoted) {
      row.push(field)
      field = ""
      continue
    }
    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1
      row.push(field)
      rows.push(row)
      row = []
      field = ""
      continue
    }
    field += char
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  const headers = rows.shift() ?? []
  return rows
    .filter((cells) => cells.some((cell) => cell !== ""))
    .map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])))
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function humanizeSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => (part === "rtf" ? "RTF" : part))
    .join(" ")
}
