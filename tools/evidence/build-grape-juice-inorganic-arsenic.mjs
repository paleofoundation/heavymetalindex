import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourceId = "fda2016-infant-toddler-foods-inorganic-arsenic"
const samplesPath = path.join(repoRoot, "data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv")
const summaryPath = path.join(repoRoot, "data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")

const sampleHeaders = [
  "source_id",
  "sample_index",
  "product_category",
  "country_of_origin",
  "sample_description",
  "total_as_raw",
  "inorganic_as_raw",
  "inorganic_as_ppb",
  "inorganic_as_censoring",
  "dma_raw",
  "mma_raw",
  "inorganic_arsenic_mcg_per_serving",
  "serving_size_g_or_ml",
  "blend_scope",
  "product_slug",
  "source_product_label",
  "basis",
  "unit",
  "notes",
]

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

const rawSamples = [
  ["Unknown", "100% Concord Grape Juice from Concentrate", "1.3", "NS", "NS", "NS", "", "237"],
  ["Unknown", "100% Juice Concord Grape Juice Made from Fresh Pressed Organic Concord Grapes", "3.4", "NS", "NS", "NS", "", "240"],
  ["USA", "100% Apple Grape Juice Blend of Concentrates with Other Natural Flavors", "TR (3.7)", "2.6", "TR (0.7)", "< LOD", "0.6", "240"],
  ["USA", "100 % Organic Grape Juice", "TR (6.7)", "3.0", "1.4", "< LOD", "0.7", "240"],
  ["Unknown", "100% Grape Juice from Concentrate with Added Vitamin C Made with Concord Grapes", "7.1", "NS", "NS", "NS", "", "296"],
  ["USA", "100% Pure Juice from Concentrate Pressed from Fresh Whole Fruit", "< LOD", "4.6", "< LOD", "< LOD", "1.1", "237"],
  ["USA", "All Natural 100% Juice Grape Flavored Juice Blend from Concentrate with Other Natural Flavors and Added Ingredients", "< LOD", "4.8", "< LOD", "< LOD", "1.1", "240"],
  ["USA", "All Natural 100% Juice Fruit Punch Flavored Juice Blend from Concentrate with Other Natural Flavors and Added Ingredients", "< LOD", "5.1", "< LOD", "< LOD", "1.2", "240"],
  ["USA", "100% No Sugar Added Grape Juice from Concentrate with added Ingredient", "TR (8.0)", "5.4", "TR (1.0)", "< LOD", "1.3", "240"],
  ["USA", "100% White Grape Juice from Concentrate with Added Ingredients", "TR (11.0)", "5.5", "TR (0.9)", "< LOD", "1.3", "240"],
  ["USA", "100% Juice White Grape from Concentrate with added Ingredient", "TR (7.7)", "5.6", "TR (1.0)", "< LOD", "1.3", "240"],
  ["USA", "100% Juice Grape from Concentrate with added Vitamin C", "TR (9.3)", "6.0", "TR (1.1)", "< LOD", "1.4", "240"],
  ["USA", "100% No Sugar Added White Grape Juice from Concentrate with added Ingredient", "TR (8.9)", "6.2", "TR (1.2)", "< LOD", "1.5", "240"],
  ["USA", "100% Juice Cranberry Concord Grape No Sugar Added Flavored Blend of 4 Juices from Concentrate with Added Ingredients", "TR (8.4)", "6.4", "TR (0.5)", "< LOD", "1.5", "240"],
  ["USA", "100% Grape Juice from Concentrate with added Ingredient", "TR (8.8)", "6.5", "TR (0.9)", "< LOD", "1.6", "240"],
  ["Unknown", "Organic White Grape Juice from Concentrate", "10.9", "7.0", "TR (1.9)", "TR (0.3)", "1.7", "240"],
  ["USA", "100% Juice Apple Grape Flavored Juice Blend from 3 Concentrates with Added Ingredients", "TR (8.5)", "7.1", "TR (0.7)", "< LOD", "1.7", "240"],
  ["Unknown", "100% Grape Juice from Concentrate with Added Vitamin C Made with Concord Grapes", "11.7", "7.1", "< LOD", "TR (0.4)", "1.7", "240"],
  ["USA", "100% White Grape Juice from Concentrate with Added Ingredients", "TR (8.9)", "7.1", "TR (0.9)", "< LOD", "1.7", "240"],
  ["USA", "100% Grape Juice from Concentrate with Added Ingredients, 100% Vitamin C", "TR (11.0)", "7.7", "TR (0.5)", "< LOD", "1.8", "240"],
  ["USA", "100% Juice Cranberry Grape Flavored Juice Blend from Concentrate with Added Ingredients", "TR (8.5)", "7.8", "TR (0.6)", "< LOD", "1.9", "240"],
  ["USA", "100% Grape Juice from Concentrate with Added Ingredients", "TR (10.0)", "8.2", "TR (0.7)", "< LOD", "2.0", "240"],
  ["USA", "100% Juice Grape Juice from Concentrate with Added Ingredient Made with Concord Grapes No Artificial Flavors No Added Sweeteners", "TR (10.0)", "8.8", "TR (0.8)", "< LOD", "2.1", "240"],
  ["USA", "100% Grape Juice from Concentrate with Added Ingredients", "TR (14.0)", "9.1", "2.2", "< LOD", "2.2", "240"],
  ["USA", "100% Juice Grape A Flavored Blend of 2 Juice from Concentrate with other Natural Flavors & Added Ingredients No Artificial Flavors No Added Sweeteners", "TR (12.0)", "9.6", "TR (0.7)", "< LOD", "2.3", "240"],
  ["Unknown", "100% No Sugar Added White Grape Peach Juice Blend from Concentrate with Added Ingredients", "14.2", "10.1", "TR (1.7)", "TR (0.3)", "2.4", "240"],
  ["Unknown", "100% Juice White Grape Juice from Concentrate", "14.9", "10.5", "TR (1.5)", "TR (0.7)", "1.2", "118"],
  ["USA", "100% Juice Apple Grape Flavored Juice Blend from 3 Concentrates with Added Ingredients", "TR (15.0)", "10.6", "TR (0.5)", "< LOD", "2.5", "240"],
  ["Unknown", "100% Grape Juice from Concentrate with Added Vitamin C", "14.6", "10.8", "TR (0.7)", "< LOD", "3.2", "296"],
  ["Unknown", "100% Grape Juice from Concentrate with Added Ingredient", "13.9", "10.9", "TR (1.3)", "< LOD", "2.6", "240"],
  ["USA", "Premium Juice from Organic Concord Grapes Unsweetened", "TR (19.0)", "11.1", "TR (0.5)", "< LOD", "2.7", "240"],
  ["Unknown", "100% Juice White Grape Juice from Concentrate", "15.6", "11.2", "TR (1.9)", "< LOD", "1.3", "118"],
  ["USA", "100% White Grape Juice with added Vitamin C & Citric Acid from Concentrate", "TR (12.0)", "11.2", "TR (0.8)", "< LOD", "1.3", "118"],
  ["USA", "100% Concord Grape Juice - Not from Concentrate", "TR (22.0)", "11.6", "TR (0.6)", "< LOD", "2.8", "240"],
  ["Unknown", "100% White Grape Juice from Concentrate with Added Ingredients 100% Vitamin C", "13.1", "11.7", "TR (0.7)", "< LOD", "3.5", "296"],
  ["Unknown", "100% Grape Juice from Concentrate with Added Ingredients", "18.6", "11.7", "TR (0.6)", "TR (0.3)", "2.8", "240"],
  ["Unknown", "White Grape Juice", "14.5", "11.7", "2.1", "TR (0.3)", "2.8", "240"],
  ["Unknown", "White Grape Juice from Concentrate with added ingredients Pasteurized 100% Juice", "16.3", "13.0", "TR (1.9)", "TR (0.5)", "3.1", "240"],
  ["Unknown", "Sparkling Concord Grape Juice", "15.2", "13.0", "TR (0.3)", "TR (0.3)", "3.1", "240"],
  ["Unknown", "100% Juice Grape from Concentrate with added Vitamin C", "16.5", "13.2", "TR (1.5)", "< LOD", "3.2", "240"],
  ["Unknown", "100% White Grape Juice from Concentrate", "16.0", "14.2", "TR (1.1)", "< LOD", "3.4", "240"],
  ["USA", "Organic Grape Juice from Concentrate", "TR (21.0)", "14.2", "1.9", "< LOD", "3.4", "240"],
  ["Unknown", "100% Grape Juice from Concentrate", "17.9", "14.5", "TR (0.8)", "< LOD", "3.4", "237"],
  ["Unknown", "Grape Juice", "20.8", "14.8", "TR (0.5)", "TR (0.5)", "4.4", "296"],
  ["Unknown", "100 % Grape Juice from Concentrate with Added Ingredient", "18.7", "15.0", "TR (1.3)", "< LOD", "4.4", "296"],
  ["Unknown", "100% Juice Grape Grape Juice from Concentrate with Added Ingredients", "21.5", "15.3", "TR (1.4)", "< LOD", "3.7", "240"],
  ["USA", "100% Organic Grape Juice from Concentrate with Added Ingredients", "19.9", "16.0", "2.2", "< LOD", "3.8", "240"],
  ["Unknown", "100% Pure White Grape Juice from Concentrate", "16.9", "17.1", "TR (0.7)", "< LOD", "4.1", "237"],
  ["USA", "Organic Concord Grape Juice from Concentrate", "28.8", "17.4", "2.1", "< LOD", "4.2", "240"],
  ["Unknown", "Grape Juice 100%", "22.7", "17.4", "TR (1.3)", "< LOD", "4.2", "240"],
  ["Unknown", "White Grape Juice 100%", "18.2", "18.0", "TR (1.2)", "< LOD", "4.3", "240"],
  ["Unknown", "Grape Juice", "25.2", "18.7", "TR (1.1)", "TR (0.3)", "5.5", "296"],
  ["USA", "100% Pure Grape Juice from Concentrate Made with Concord Grapes", "TR (24.0)", "19.5", "TR (0.6)", "< LOD", "4.6", "237"],
  ["Unknown", "100% White Grape Juice", "21.9", "20.0", "TR (1.2)", "< LOD", "4.8", "240"],
  ["Unknown", "100% Grape Juice", "24.6", "22.0", "TR (1.2)", "< LOD", "5.3", "240"],
  ["USA", "100% White Grape Juice from Concentrate with Added Ingredients", "TR (26.0)", "22.6", "1.8", "< LOD", "5.4", "240"],
  ["Unknown", "100% Grape Juice from Concentrate", "26.9", "23.9", "TR (1.2)", "< LOD", "5.7", "240"],
  ["Argentina", "100% Juice with added Vitamin C & Citric Acid Variety Pack Juice from Concentrate; White Grape", "27.3", "25.2", "TR (0.8)", "< LOD", "3.0", "118"],
  ["Unknown", "Sparkling Kosher Grape 100% Juice from Concord Grape Concentrate", "49.0", "25.6", "TR (1.3)", "< LOD", "6.1", "240"],
  ["Unknown", "Organic Concord Grape Juice from Concentrate 100% Juice", "60.0", "34.0", "3.0", "< LOD", "8.2", "240"],
  ["Unknown", "Organic Grape Juice from Concentrate", "62.7", "49.6", "TR (1.2)", "< LOD", "11.9", "240"],
]

const sampleRows = rawSamples.map(([country, description, totalAs, inorganicAs, dma, mma, servingIas, servingSize], index) => {
  const inorganicValue = numericValue(inorganicAs)
  return {
    source_id: sourceId,
    sample_index: index + 1,
    product_category: "Juice - Grape",
    country_of_origin: country,
    sample_description: description,
    total_as_raw: totalAs,
    inorganic_as_raw: inorganicAs,
    inorganic_as_ppb: inorganicValue === null ? "" : inorganicValue,
    inorganic_as_censoring: inorganicAs === "NS" ? "not_speciated" : "quantified",
    dma_raw: dma,
    mma_raw: mma,
    inorganic_arsenic_mcg_per_serving: servingIas,
    serving_size_g_or_ml: servingSize,
    blend_scope: blendScope(description),
    product_slug: "fruit-juices-non-apple",
    source_product_label: "FDA 2016 grape and grape-containing juice category",
    basis: "ready_to_drink_juice_1_ml_1_g",
    unit: "ppb",
    notes:
      "FDA full analytical results table; NS means not speciated. Percentile summary uses quantified inorganic arsenic cells only and does not substitute total arsenic for iAs.",
  }
})

const quantifiedRows = sampleRows.filter((row) => row.inorganic_as_censoring === "quantified")
const stats = summarize(quantifiedRows.map((row) => Number(row.inorganic_as_ppb)))
const nsCount = sampleRows.length - quantifiedRows.length
const substitutionRule =
  "No substitution was made for NS/not-speciated inorganic arsenic rows. Deterministic nearest-rank percentiles use the 58 quantified full-table iAs cells only; the FDA source-reported all-sample category average is 12.4 ppb."

const common = {
  source_id: sourceId,
  source_page: `wiki/sources/${sourceId}.md`,
  source_product_label: "FDA 2016 grape and grape-containing juice category",
  source_analyte: "Inorganic arsenic (AsIII + AsV)",
  metal_species: "iAs",
  basis: "ready_to_drink_juice_1_ml_1_g",
  n: quantifiedRows.length,
  detected_n: quantifiedRows.length,
  lod_n: 0,
  substitution_rule: substitutionRule,
  fiscal_year_min: 2012,
  fiscal_year_max: 2016,
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
  n_text: `${quantifiedRows.length} quantified iAs cells from ${sampleRows.length} FDA grape-category rows; ${nsCount} NS rows excluded from percentile math`,
  statistic_type: "deterministic_quantified_sample_percentiles",
  censoring_status: "not_speciated_rows_excluded",
  censoring_limit_ppb: "",
  unit: "ppb",
  evidence_fitness_verdict: "EF-3",
  review_state: "reviewed_route",
}

const summaryRows = [
  {
    ...common,
    row_id: "hmtc_c5_r01",
    row_slug: "fruit-juices-non-apple",
    hmtc_row: 1,
    row_label: "Fruit juices, non-apple",
    statistic_scope:
      "FDA 2016 grape and grape-containing juice category; quantified full-table iAs cells only; includes some grape blends and one FDA-designated white-grape-peach mixed juice.",
    row_fit: "grape_category_bridge_for_non_apple_juice",
    category1_related_rows: "fruit-juices-non-apple",
    field_value_summary: `iAs quantified N=${quantifiedRows.length}; p50=${formatNumber(stats.p50)} ppb; p90=${formatNumber(stats.p90)} ppb; p95=${formatNumber(stats.p95)} ppb; max=${formatNumber(stats.p100)} ppb; FDA category mean=12.4 ppb`,
    notes:
      "FDA category includes grape, white grape, grape blends, apple-grape blends, and one white-grape-peach mixed juice that FDA included in grape calculations. Use as species-specific grape-category context, not a full non-apple juice aggregate.",
  },
  {
    ...common,
    row_id: "hmtc_c1_r14",
    row_slug: "fruit-juice-not-canned",
    hmtc_row: 14,
    row_label: "Fruit juice (not canned)",
    statistic_scope:
      "FDA 2016 grape and grape-containing juice category routed as not-canned fruit-juice context; quantified full-table iAs cells only.",
    row_fit: "grape_category_context_for_not_canned_fruit_juice",
    category1_related_rows: "fruit-juices-non-apple; fruit-juice-not-canned",
    field_value_summary: `Grape-category iAs quantified N=${quantifiedRows.length}; p50=${formatNumber(stats.p50)} ppb; p90=${formatNumber(stats.p90)} ppb; p95=${formatNumber(stats.p95)} ppb; max=${formatNumber(stats.p100)} ppb; FDA category mean=12.4 ppb`,
    notes:
      "Grape-category subcategory context for the broader not-canned fruit-juice row; do not treat as a full not-canned fruit-juice aggregate.",
  },
]

writeCsv(samplesPath, sampleRows, sampleHeaders)
writeCsv(summaryPath, summaryRows, summaryHeaders)
upsertValueRows(summaryRows)

console.log(`Wrote ${sampleRows.length} FDA grape-juice sample rows to ${path.relative(repoRoot, samplesPath)}`)
console.log(`Wrote ${summaryRows.length} FDA grape-juice iAs summary rows to ${path.relative(repoRoot, summaryPath)}`)
console.log(`Updated FDA grape-juice iAs value records in ${path.relative(repoRoot, valuesPath)}`)

function upsertValueRows(rows) {
  const valueIds = new Set([
    "category5-grape-juice-ias-fda2016-fruit-juices-non-apple-ias",
    "category1-grape-juice-ias-fda2016-fruit-juice-not-canned-ias",
  ])
  const existingRows = fs.existsSync(valuesPath)
    ? fs
        .readFileSync(valuesPath, "utf8")
        .trimEnd()
        .split("\n")
        .filter(Boolean)
        .map((line) => JSON.parse(line))
        .filter((row) => !valueIds.has(row.value_id))
    : []

  existingRows.push(...rows.map(summaryRowToValueRecord))
  fs.writeFileSync(valuesPath, `${existingRows.map((row) => JSON.stringify(row)).join("\n")}\n`, "utf8")
}

function summaryRowToValueRecord(row) {
  const isCategory5 = row.row_slug === "fruit-juices-non-apple"
  return {
    value_id: isCategory5
      ? "category5-grape-juice-ias-fda2016-fruit-juices-non-apple-ias"
      : "category1-grape-juice-ias-fda2016-fruit-juice-not-canned-ias",
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
      "FDA 2016 infant/toddler foods arsenic full analytical results table",
      "Juice - Grape category",
      `quantified iAs deterministic sample percentiles; n=${row.n}`,
      `source_category_n=${sampleRows.length}`,
      `not_speciated_n=${nsCount}`,
      `p50=${row.p50_ppb}`,
      `p90=${row.p90_ppb}`,
      `p95=${row.p95_ppb}`,
      `p100=${row.p100_ppb}`,
      `mean=${row.mean_ppb}`,
      "FDA source-reported all-sample category average=12.4 ppb",
      `row_fit=${row.row_fit}`,
      "NS rows were not speciated and were excluded from percentile calculation; no total arsenic was substituted for inorganic arsenic.",
    ].join("; "),
    page_number: null,
    table_number: null,
    evidence_fitness_verdict: row.evidence_fitness_verdict,
    public_label: "Modeled or limited evidence",
    review_state: row.review_state,
  }
}

function summarize(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b)
  if (sorted.length === 0) throw new Error("No numeric inorganic arsenic values found.")
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

function numericValue(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function blendScope(description) {
  const lower = description.toLowerCase()
  if (lower.includes("apple grape")) return "apple_grape_blend"
  if (lower.includes("peach")) return "white_grape_peach_blend"
  if (lower.includes("fruit punch")) return "fruit_punch_grape_blend"
  if (lower.includes("cranberry")) return "cranberry_grape_blend"
  if (lower.includes("blend")) return "grape_blend"
  return "grape_or_white_grape"
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return ""
  return Number.parseFloat(value.toFixed(2)).toString()
}

function writeCsv(filePath, rows, headers) {
  const text = `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, text, "utf8")
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}
