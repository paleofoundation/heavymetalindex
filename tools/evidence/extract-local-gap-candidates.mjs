import fs from "node:fs"
import path from "node:path"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const productFilter = args.get("product") ?? ""
const queuePath = path.join(repoRoot, "data/evidence/local_reingest_queue.csv")
const packetRoot = path.join(repoRoot, "data/evidence/local_reingest_packets")
const outputPath = path.join(repoRoot, "data/evidence/local_reingest_candidate_values.csv")
const tasksPath = path.join(repoRoot, "data/evidence/local_reingest_extraction_tasks.csv")
const summaryPath = path.join(repoRoot, "data/evidence/local_reingest_candidate_summary.json")
const promptRoot = path.join(repoRoot, "data/evidence/local_reingest_prompts")

const queueRows = fs.existsSync(queuePath) ? parseCsv(fs.readFileSync(queuePath, "utf8")) : []
const selectedRows = queueRows
  .filter((row) => !productFilter || row.product_slug === productFilter)
  .filter((row) => row.priority?.startsWith("P0") && row.local_pdf_status === "local_pdf_found")

const candidateRows = []
const taskRows = []

for (const row of selectedRows) {
  const textPath = packetTextPath(row)
  const text = textPath && fs.existsSync(textPath) ? fs.readFileSync(textPath, "utf8") : ""
  const sourceCandidates = filterCandidateMetals(row, deterministicExtract(row, text))

  if (sourceCandidates.length > 0) {
    candidateRows.push(...sourceCandidates)
    continue
  }

  const promptPath = writeExtractionPrompt(row, text)
  taskRows.push({
    product_slug: row.product_slug,
    source_id: row.source_id,
    source_title: row.source_title,
    local_pdf_path: row.local_pdf_path,
    packet_text_path: textPath ? path.relative(repoRoot, textPath) : "",
    prompt_path: path.relative(repoRoot, promptPath),
    extraction_status: text ? "needs_source_specific_parser_or_ai_review" : "missing_packet_text",
    action_needed:
      "Extract source-stated rows into candidate values only; do not publish and do not infer p50/p90/p95.",
  })
}

writeCsv(outputPath, candidateRows, candidateHeaders())
writeCsv(tasksPath, taskRows, [
  "product_slug",
  "source_id",
  "source_title",
  "local_pdf_path",
  "packet_text_path",
  "prompt_path",
  "extraction_status",
  "action_needed",
])

const summary = {
  generated_at: new Date().toISOString(),
  product_filter: productFilter || "all",
  source_count: selectedRows.length,
  deterministic_candidate_value_count: candidateRows.length,
  source_task_count: taskRows.length,
  by_source: countBy(candidateRows, (row) => row.source_id),
  by_metal: countBy(candidateRows, (row) => row.metal_species),
  by_extraction_method: countBy(candidateRows, (row) => row.extraction_method),
}
writeStableJsonSummary(summaryPath, summary)

console.log(`Wrote ${candidateRows.length} deterministic local candidate rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote ${taskRows.length} local extraction task rows to ${path.relative(repoRoot, tasksPath)}`)
console.log(`Wrote local candidate summary to ${path.relative(repoRoot, summaryPath)}`)

function deterministicExtract(queueRow, text) {
  if (!text) return []
  if (queueRow.source_id === "chung2021-china-infant-formula-toxic-elements") return extractChung2021(queueRow, text)
  if (queueRow.source_id === "fsa2016-infant-food-formula-metals-survey") return extractFsa2016(queueRow, text)
  if (queueRow.source_id === "chekri2019-french-infant-toddler-tds-trace-elements") return extractChekri2019(queueRow, text)
  if (queueRow.source_id === "almeida2022-brazil-infant-formula-toxic-metals") return extractAlmeida2022(queueRow, text)
  if (queueRow.source_id === "meli2024-chemical-characterization-baby-food-italy") return extractMeli2024(queueRow, text)
  if (queueRow.source_id === "pandelova2012-eu-baby-food-formula-elements") return extractPandelova2012(queueRow, text)
  if (queueRow.source_id === "weldegebriel2025-ethiopia-packaged-fruit-juice-metals") return extractWeldegebriel2025(queueRow, text)
  if (queueRow.source_id === "burrell2010-aluminium-in-infant-formulas") return extractBurrell2010(queueRow, text)
  if (queueRow.source_id === "chuchu2013-aluminium-in-infant-formulas") return extractChuchu2013(queueRow, text)
  if (queueRow.source_id === "dabeka1987-canada-infant-formula-lead-cadmium") return extractDabeka1987(queueRow, text)
  return []
}

function filterCandidateMetals(queueRow, candidates) {
  const missingMetals = splitMetals(queueRow.missing_metal_species)
  if (missingMetals.length === 0) return candidates
  const missingKeys = new Set(missingMetals.map(canonicalMetal).filter(Boolean))
  return candidates.filter((candidate) => missingKeys.has(canonicalMetal(candidate.metal_species)))
}

function extractDabeka1987(queueRow, text) {
  if (!text.includes("Lead, Cadmium, and Fluoride Levels in Market Milk and Infant Formulas in Canada")) return []
  if (!text.includes("Table 3. Cadmium levels")) return []

  const sourceRows = {
    "infant-formula-powder-non-soy": {
      source_product_label: "Infant formula powders, milk-base",
      basis: "as_sold",
      n: "17",
      n_text: "Table 3 reports infant formula powders, milk-base, n=17.",
      mean_ppb: "1.02",
      p50_ppb: "0.6",
      min_ppb: "",
      max_ppb: "4.3",
      quote_trace:
        "Dabeka 1987 Table 3 reports infant formula powders, milk-base: n=17, mean Cd 1.02 ng/g, median 0.6 ng/g, range <0.07-4.3 ng/g.",
      notes:
        "Deterministic parse of Dabeka 1987 Table 3 cadmium milk-base powder row. The lower range value is censored as <0.07 ng/g and is retained in notes rather than imputed. Lead powder values are not soy-split and remain queued separately.",
      source_row_order: "1",
    },
    "infant-formula-powder-soy-based": {
      source_product_label: "Infant formula powders, milk-free or soy-base",
      basis: "as_sold",
      n: "15",
      n_text: "Table 3 reports infant formula powders, milk-free or soy-base, n=15.",
      mean_ppb: "13.3",
      p50_ppb: "12.0",
      min_ppb: "1.1",
      max_ppb: "35",
      quote_trace:
        "Dabeka 1987 Table 3 reports infant formula powders, milk-free or soy-base: n=15, mean Cd 13.3 ng/g, median 12.0 ng/g, range 1.1-35 ng/g.",
      notes:
        "Deterministic parse of Dabeka 1987 Table 3 cadmium milk-free or soy-base powder row. Lead powder values are not soy-split and remain queued separately.",
      source_row_order: "2",
    },
    "infant-formula-rtf-liquid-non-soy": {
      source_product_label: "Ready-to-use formula, milk-base",
      basis: "as_consumed",
      n: "13",
      n_text: "Table 3 reports ready-to-use formula, milk-base, n=13.",
      mean_ppb: "0.27",
      p50_ppb: "0.08",
      min_ppb: "0.05",
      max_ppb: "0.78",
      quote_trace:
        "Dabeka 1987 Table 3 reports ready-to-use formulas, milk-base: n=13, mean Cd 0.27 ng/g, median 0.08 ng/g, range 0.05-0.78 ng/g.",
      notes:
        "Deterministic parse of Dabeka 1987 Table 3 cadmium milk-base ready-to-use row. Lead ready-to-use rows are glass/can split rather than soy/non-soy split and remain queued separately.",
      source_row_order: "3",
    },
    "infant-formula-rtf-liquid-soy-based": {
      source_product_label: "Ready-to-use formula, milk-free or soy-base",
      basis: "as_consumed",
      n: "16",
      n_text: "Table 3 reports ready-to-use formula, milk-free or soy-base, n=16.",
      mean_ppb: "2.35",
      p50_ppb: "1.64",
      min_ppb: "0.18",
      max_ppb: "7.55",
      quote_trace:
        "Dabeka 1987 Table 3 reports ready-to-use formulas, milk-free or soy-base: n=16, mean Cd 2.35 ng/g, median 1.64 ng/g, range 0.18-7.55 ng/g.",
      notes:
        "Deterministic parse of Dabeka 1987 Table 3 cadmium milk-free or soy-base ready-to-use row. Lead ready-to-use rows are glass/can split rather than soy/non-soy split and remain queued separately.",
      source_row_order: "4",
    },
  }

  const row = sourceRows[queueRow.product_slug]
  if (!row) return []
  return [
    candidateRow(queueRow, {
      candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-Cd-milk-soy-split`,
      metal_species: "Cd",
      statistic_type: "source_reported_mean_median_range",
      row_fit: "direct_category1_row",
      extraction_method: "deterministic_parser_dabeka1987_table3_cadmium_formula_splits",
      ...row,
    }),
  ]
}

function extractBurrell2010(queueRow, text) {
  if (!text.includes("There is (still) too much aluminium in infant")) return []
  if (!text.includes("Table 2 The aluminium content of milk powders")) return []

  const sourceRows = {
    "infant-formula-powder-non-soy": {
      source_product_label: "Non-soy formula powders, prepared estimate",
      basis: "prepared_for_feeding",
      n: "7",
      n_text:
        "Table 2 contains seven non-soy powdered formula products; prepared estimates are based on manufacturer instructions.",
      statistic_type: "source_reported_prepared_estimate_range",
      min_ppb: "333.3",
      max_ppb: "592.4",
      quote_trace:
        "Burrell 2010 Table 2 reports non-soy formula powder prepared estimates from 333.3 to 592.4 ug/L; the paper separately reports powder replicate ranges in ug/g, including a 10.8 ug/g replicate maximum.",
      notes:
        "Deterministic parse of Burrell 2010 Table 2 non-soy powder prepared estimates. Range is source-scope product-format range, not p50/p90/p95. Powder replicate maxima are not mixed with prepared-for-feeding values.",
      source_row_order: "1",
    },
    "infant-formula-rtf-liquid-non-soy": {
      source_product_label: "Ready-made non-soy formula products",
      basis: "as_consumed",
      n: "8",
      n_text: "Table 1 contains eight ready-made infant formula products; the source page classifies these as non-soy.",
      statistic_type: "source_reported_product_mean_range",
      min_ppb: "175.5",
      max_ppb: "700.4",
      quote_trace:
        "Burrell 2010 Table 1 reports ready-made formula product means from 175.5 to 700.4 ug/L; the table also reports a 863.0 ug/L replicate maximum for the highest product.",
      notes:
        "Deterministic parse of Burrell 2010 Table 1 ready-made formula product means. Range is source-scope product-format range, not p50/p90/p95. Replicate maxima are retained in notes only because they are not product means.",
      source_row_order: "2",
    },
  }

  const row = sourceRows[queueRow.product_slug]
  if (!row) return []
  return [
    candidateRow(queueRow, {
      candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-Al-format-range`,
      metal_species: "Al",
      row_fit: "direct_category1_row",
      extraction_method: "deterministic_parser_burrell2010_formula_format_summary",
      ...row,
    }),
  ]
}

function extractChuchu2013(queueRow, text) {
  if (!text.includes("Chuchu et al. BMC Pediatrics 2013")) return []
  if (!text.includes("Table 2 The aluminium content of powdered infant formula milks")) return []

  const sourceRows = {
    "infant-formula-powder-non-soy": {
      source_product_label: "Non-soy formula powders, prepared estimate",
      basis: "prepared_for_feeding",
      n: "18",
      n_text:
        "Table 2 contains eighteen non-soy powdered formula products; prepared estimates are based on manufacturer instructions.",
      statistic_type: "source_reported_prepared_estimate_range",
      min_ppb: "106",
      max_ppb: "411",
      quote_trace:
        "Chuchu 2013 Table 2 reports non-soy powder prepared estimates from approximately 106 to 411 ug/L at six months; the two soy products are reported separately at 656/654 and 756/755 ug/L.",
      notes:
        "Deterministic parse of Chuchu 2013 Table 2 non-soy powder prepared estimates. Range is source-scope product-format range, not p50/p90/p95. Soy-based products remain separated.",
      source_row_order: "1",
    },
    "infant-formula-rtf-liquid-non-soy": {
      source_product_label: "Ready-to-drink non-soy formula products",
      basis: "as_consumed",
      n: "10",
      n_text: "Table 1 contains ten ready-to-drink infant formula products; the source page classifies these as non-soy.",
      statistic_type: "source_reported_product_mean_range",
      min_ppb: "155",
      max_ppb: "422",
      quote_trace:
        "Chuchu 2013 Table 1 reports ready-to-drink formula product means from 155 to 422 ug/L.",
      notes:
        "Deterministic parse of Chuchu 2013 Table 1 ready-to-drink formula product means. Range is source-scope product-format range, not p50/p90/p95.",
      source_row_order: "2",
    },
  }

  const row = sourceRows[queueRow.product_slug]
  if (!row) return []
  return [
    candidateRow(queueRow, {
      candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-Al-format-range`,
      metal_species: "Al",
      row_fit: "direct_category1_row",
      extraction_method: "deterministic_parser_chuchu2013_formula_format_summary",
      ...row,
    }),
  ]
}

function extractChung2021(queueRow, text) {
  if (!text.includes("A total of 93 cow milk-based infant formulas")) return []
  const match = text.match(
    /Total\s+93\s+([\d.]+)\s+([\d.]+)[–-]([\d.]+)\s+([\d.]+)\s+([\d.]+)[–-]([\d.]+)\s+([\d.]+)\s+([\d.]+)[–-]([\d.]+)\s+([\d.]+)\s+([\d.]+)[–-]([\d.]+)/,
  )
  if (!match) return []

  const metals = [
    { metal: "Cr-total", mean: match[1], min: match[2], max: match[3], note: "Source reports Cr; HMTc Cr-VI remains a separate species gap." },
    { metal: "tAs", mean: match[4], min: match[5], max: match[6], note: "Source reports As by ICP-MS; treated as total/unspecified arsenic candidate, not iAs." },
    { metal: "Cd", mean: match[7], min: match[8], max: match[9], note: "" },
    { metal: "Pb", mean: match[10], min: match[11], max: match[12], note: "" },
  ]

  const quote = quoteAround(text, "Table 4. Heavy toxic elements")
  return metals.map((item, index) =>
    candidateRow(queueRow, {
      candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-total-${item.metal}`,
      metal_species: item.metal,
      source_product_label: "Total cow milk-based infant formulas, stages 1-4",
      basis: "as_sold_or_source_reported",
      n: "93",
      n_text: "A total of 93 cow milk-based infant formulas from Beijing were collected in 2019-2020.",
      statistic_type: "source_reported_mean_range",
      mean_ppb: item.mean,
      min_ppb: item.min,
      max_ppb: item.max,
      row_fit: "direct_category1_row_needs_review",
      extraction_method: "deterministic_parser_chung2021_table4_total",
      quote_trace: quote,
      notes: compact(
        [
          "Deterministic parse of source Table 4 Total row. No p90/p95 is reported or inferred.",
          item.note,
        ].join(" "),
      ),
      source_row_order: String(index + 1),
    }),
  )
}

function extractFsa2016(queueRow, text) {
  const route = fsa2016Route(queueRow.product_slug)
  if (!route) return []
  if (!text.includes(route.tableMarker)) return []

  const metals = ["Al", "Sb", "tAs", "iAs", "Cd", "Cr-total", "Cu", "I", "Fe", "Pb", "Mn", "tHg", "Ni", "Se", "Sn", "Zn"]
  const rows = []

  for (const [sourceIndex, sourceRow] of route.sourceRows.entries()) {
    for (const [metalIndex, metal] of metals.entries()) {
      const parsed = parseFsaValue(sourceRow.values[metalIndex])
      rows.push(
        candidateRow(queueRow, {
          candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${slugify(sourceRow.label)}-${metal}`,
          metal_species: metal,
          source_product_label: sourceRow.label,
          basis: route.basis,
          n: "",
          n_text: route.nText,
          statistic_type: parsed.statistic_type,
          mean_ppb: parsed.mean_ppb,
          mean_lb_ppb: parsed.mean_lb_ppb,
          mean_ub_ppb: parsed.mean_ub_ppb,
          censoring_status: parsed.censoring_status,
          row_fit: sourceRow.row_fit,
          extraction_method: route.extractionMethod,
          quote_trace: `${sourceRow.source_line} ${route.footnote}`,
          notes: compact(
            [
              route.note,
              "LB/UB values are source lower-bound/upper-bound concentration means, not min/max and not percentiles.",
              metal === "iAs"
                ? "Source estimates iAs for some samples using a 70% tAs factor; retain as estimated iAs candidate pending review."
                : "",
              metal === "Cr-total" ? "Source reports Cr; this does not satisfy Cr-VI without species confirmation." : "",
              parsed.note,
            ].join(" "),
          ),
          source_row_order: String(sourceIndex * metals.length + metalIndex + 1),
        }),
      )
    }
  }

  return rows
}

function fsa2016Route(productSlug) {
  const dryFootnote =
    "Table 2 dry infant formula; samples analysed as sold and not reconstituted. Values are lower-bound to upper-bound means where ranges are shown; iAs may include source-estimated values using 70% of tAs."
  const readyToFeedFootnote =
    "Table 1 ready-to-feed infant formula; values are liquid as-consumed concentrations in ug/L. Values are lower-bound to upper-bound means where ranges are shown; iAs may include source-estimated values using 70% of tAs."
  const commercialInfantFoodFootnote =
    "Table 3 commercial infant foods; values are as-consumed concentrations in ug/kg fresh weight. Values are lower-bound to upper-bound means where ranges are shown; iAs may include source-estimated values using 70% of tAs."
  const dryTableMarker =
    "Table 2. Average concentration data used to assess dietary exposure to metals and other elements in dry infant formula"
  const readyToFeedTableMarker =
    "Table 1. Average concentration data used to assess dietary exposure to metals and other elements in ready-to-feed infant"
  const commercialInfantFoodTableMarker =
    "Table 3. Average concentration data used to assess dietary exposure to metals and other elements in commercial infant"

  const routes = {
    "fruit-purees": {
      tableMarker: commercialInfantFoodTableMarker,
      basis: "as_consumed",
      nText:
        "FSA/Fera Table 3 reports commercial infant-food category means; the fruit-based foods and dishes category N is not reported in Table 3.",
      footnote: commercialInfantFoodFootnote,
      extractionMethod: "deterministic_parser_fsa2016_table3_fruit_based_infant_foods",
      note: "Deterministic parse of FSA/Fera Table 3 fruit based foods and dishes concentration means in ug/kg fresh weight.",
      sourceRows: [
        {
          label: "Fruit based foods and dishes",
          row_fit: "direct_fruit_based_infant_foods_needs_review",
          values: [
            "1125",
            "0-3",
            "9",
            "1-4",
            "2-3",
            "43-54",
            "862",
            "22-27",
            "7543",
            "1-3",
            "2436",
            "0-1",
            "92-117",
            "6-7",
            "43-50",
            "4993-5002",
          ],
          source_line:
            "Fruit based foods and dishes: Al 1125; Sb 0-3; As 9; iAs 1-4; Cd 2-3; Cr 43-54; Cu 862; I 22-27; Fe 7543; Pb 1-3; Mn 2436; Hg 0-1; Ni 92-117; Se 6-7; Sn 43-50; Zn 4993-5002 ug/kg.",
        },
      ],
    },
    "infant-formula-powder-non-soy": {
      tableMarker: dryTableMarker,
      basis: "as_sold",
      nText: "N by dry-formula subtype is not provided in this table; total infant formula samples reported elsewhere as 47.",
      footnote: dryFootnote,
      extractionMethod: "deterministic_parser_fsa2016_table2_dry_formula",
      note: "Deterministic parse of FSA/Fera Table 2 dry infant formula concentration means in ug/kg.",
      sourceRows: [
        {
          label: "First milk & hungrier milk (from birth)",
          row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
          values: ["388-488", "0-5", "1-3", "0.7-1.8", "3-4", "15-35", "3007", "948", "42363", "1-4", "593", "0-1", "18-54", "107", "0-23", "40388"],
          source_line:
            "First milk & hungrier milk (from birth): Al 388-488; Sb 0-5; As 1-3; iAs 0.7-1.8; Cd 3-4; Cr 15-35; Cu 3007; I 948; Fe 42363; Pb 1-4; Mn 593; Hg 0-1; Ni 18-54; Se 107; Sn 0-23; Zn 40388 ug/kg.",
        },
        {
          label: "Comfort (from birth)",
          row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
          values: ["767", "0-5", "1-3", "0.9-1.9", "0-2", "37-73", "2967", "753", "46600", "0-5", "603", "0-1", "0-40", "173", "0-24", "42800"],
          source_line:
            "Comfort (from birth): Al 767; Sb 0-5; As 1-3; iAs 0.9-1.9; Cd 0-2; Cr 37-73; Cu 2967; I 753; Fe 46600; Pb 0-5; Mn 603; Hg 0-1; Ni 0-40; Se 173; Sn 0-24; Zn 42800 ug/kg.",
        },
        {
          label: "Follow on milk (from 6 months)",
          row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
          values: ["400-450", "0-5", "1-3", "0.9-2", "3", "0-25", "2855", "913", "72475", "0-3", "615", "0-1", "0-40", "93", "0-22", "44500"],
          source_line:
            "Follow on milk (from 6 months): Al 400-450; Sb 0-5; As 1-3; iAs 0.9-2; Cd 3; Cr 0-25; Cu 2855; I 913; Fe 72475; Pb 0-3; Mn 615; Hg 0-1; Ni 0-40; Se 93; Sn 0-22; Zn 44500 ug/kg.",
        },
        {
          label: "Growing up milk (12 months +)",
          row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
          values: ["650", "5-9", "2-3", "1.4-2.3", "3-4", "0-40", "3195", "1150", "83950", "0-4", "580", "0-1", "0-40", "105", "0-22", "60300"],
          source_line:
            "Growing up milk (12 months +): Al 650; Sb 5-9; As 2-3; iAs 1.4-2.3; Cd 3-4; Cr 0-40; Cu 3195; I 1150; Fe 83950; Pb 0-4; Mn 580; Hg 0-1; Ni 0-40; Se 105; Sn 0-22; Zn 60300 ug/kg.",
        },
        {
          label: "Goat based (from birth and growing up)",
          row_fit: "non_soy_goat_formula_subtype_needs_review",
          values: ["950", "0-5", "9", "6-6.3", "0-2", "40-45", "4220", "960", "71900", "6.5", "800", "0-1", "0-45", "137", "0-35", "47000"],
          source_line:
            "Goat based (from birth and growing up): Al 950; Sb 0-5; As 9; iAs 6-6.3; Cd 0-2; Cr 40-45; Cu 4220; I 960; Fe 71900; Pb 6.5; Mn 800; Hg 0-1; Ni 0-45; Se 137; Sn 0-35; Zn 47000 ug/kg.",
        },
        {
          label: "Organic milk",
          row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
          values: ["1000", "<5", "14", "~7", "8", "~30", "3740", "1030", "47500", "~3", "2470", "<1", "<40", "79", "~40", "49400"],
          source_line:
            "Organic milk: Al 1000; Sb <5; As 14; iAs ~7; Cd 8; Cr ~30; Cu 3740; I 1030; Fe 47500; Pb ~3; Mn 2470; Hg <1; Ni <40; Se 79; Sn ~40; Zn 49400 ug/kg.",
        },
      ],
    },
    "infant-formula-powder-soy-based": {
      tableMarker: dryTableMarker,
      basis: "as_sold",
      nText: "N for soy-based dry formula is not provided in Table 2; the source flags powdered soy formula separately in the exposure discussion.",
      footnote: dryFootnote,
      extractionMethod: "deterministic_parser_fsa2016_table2_dry_formula",
      note: "Deterministic parse of FSA/Fera Table 2 soy-based dry infant formula concentration means in ug/kg.",
      sourceRows: [
        {
          label: "Soy based (from birth)",
          row_fit: "direct_soy_dry_formula_subtype_needs_review",
          values: ["2550", "0-6", "7", "4.6", "11", "35-55", "2905", "855", "65250", "0-5", "2785", "0-1", "200", "147", "0-23", "46000"],
          source_line:
            "Soy based (from birth): Al 2550; Sb 0-6; As 7; iAs 4.6; Cd 11; Cr 35-55; Cu 2905; I 855; Fe 65250; Pb 0-5; Mn 2785; Hg 0-1; Ni 200; Se 147; Sn 0-23; Zn 46000 ug/kg.",
        },
      ],
    },
    "infant-formula-rtf-liquid-non-soy": {
      tableMarker: readyToFeedTableMarker,
      basis: "as_consumed",
      nText: "N by ready-to-feed formula subtype is not provided in Table 1; the source reports category mean concentrations for exposure assessment.",
      footnote: readyToFeedFootnote,
      extractionMethod: "deterministic_parser_fsa2016_table1_rtf_formula",
      note: "Deterministic parse of FSA/Fera Table 1 ready-to-feed infant formula concentration means in ug/L, retained as as-consumed liquid concentration values.",
      sourceRows: [
        {
          label: "Ready-to-feed first milk & hungrier milk (from birth)",
          row_fit: "direct_non_soy_rtf_formula_subtype_needs_review",
          values: ["18-34", "0-1", "0-0.3", "0-0.2", "0-0.2", "0-3", "376", "143", "5136", "0-0.4", "63", "0-0.2", "0-9", "18", "0-3", "5974"],
          source_line:
            "Ready-to-feed first milk & hungrier milk (from birth): Al 18-34; Sb 0-1; As 0-0.3; iAs 0-0.2; Cd 0-0.2; Cr 0-3; Cu 376; I 143; Fe 5136; Pb 0-0.4; Mn 63; Hg 0-0.2; Ni 0-9; Se 18; Sn 0-3; Zn 5974 ug/L.",
        },
        {
          label: "Ready-to-feed follow on milk (6 months +)",
          row_fit: "direct_non_soy_rtf_formula_subtype_needs_review",
          values: ["15-31", "0-0.8", "0-0.4", "0-0.3", "0-0.2", "0-3", "329", "115", "8785", "0-0.5", "71", "0-0.2", "0-7", "17", "0-3", "5608"],
          source_line:
            "Ready-to-feed follow on milk (6 months +): Al 15-31; Sb 0-0.8; As 0-0.4; iAs 0-0.3; Cd 0-0.2; Cr 0-3; Cu 329; I 115; Fe 8785; Pb 0-0.5; Mn 71; Hg 0-0.2; Ni 0-7; Se 17; Sn 0-3; Zn 5608 ug/L.",
        },
        {
          label: "Ready-to-feed growing up milk (12 months +)",
          row_fit: "direct_non_soy_rtf_formula_subtype_needs_review",
          values: ["15-29", "0-0.8", "0.3-0.7", "0.2-0.5", "0-0.3", "0-3", "346", "140", "10223", "0-0.5", "65", "0-0.2", "0-9", "14", "0-3", "7615"],
          source_line:
            "Ready-to-feed growing up milk (12 months +): Al 15-29; Sb 0-0.8; As 0.3-0.7; iAs 0.2-0.5; Cd 0-0.3; Cr 0-3; Cu 346; I 140; Fe 10223; Pb 0-0.5; Mn 65; Hg 0-0.2; Ni 0-9; Se 14; Sn 0-3; Zn 7615 ug/L.",
        },
      ],
    },
  }

  return routes[productSlug]
}

function extractChekri2019(queueRow, text) {
  const route = chekri2019Route(queueRow.product_slug)
  if (!route) return []
  if (!text.includes("Table 5: Upper bound (UB) levels of trace elements in foods")) return []

  const rows = []
  for (const [metalIndex, [metal, values]] of Object.entries(route.values).entries()) {
    rows.push(
      candidateRow(queueRow, {
        candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${metal}`,
        metal_species: metal,
        source_product_label: route.label,
        basis: "as_consumed",
        n: route.n,
        n_text: `Chekri 2019 Table 5 reports ${route.label}, n=${route.n}.`,
        statistic_type: "source_reported_upper_bound_mean_range",
        mean_ppb: values.mean,
        min_ppb: values.min,
        max_ppb: values.max,
        row_fit: "direct_infant_food_category_needs_review",
        extraction_method: "deterministic_parser_chekri2019_table5_food_category_ub",
        quote_trace: `${route.source_line} Table 5 values are upper-bound concentrations in foods as consumed by French infants and toddlers (ug/kg fresh weight).`,
        notes: compact(
          [
            "Deterministic parse of Chekri 2019 Table 5 upper-bound food-category concentration means.",
            "Mean, minimum, and maximum are source-reported UB concentrations, not percentiles.",
            metal === "tAs" ? "Source reports total arsenic as As; this is not inorganic arsenic." : "",
            metal === "Cr-total" ? "Source reports chromium as Cr; this does not satisfy Cr-VI without species confirmation." : "",
          ].join(" "),
        ),
        source_row_order: String(metalIndex + 1),
      }),
    )
  }
  return rows
}

function chekri2019Route(productSlug) {
  const routes = {
    "fruit-juice-not-canned": {
      label: "Fruit juices",
      n: "4",
      source_line:
        "Chekri 2019 Table 5 Fruit juices: n=4; Al 191 (42.0-314); Sb 0.75 (0.50-1.00); As 2.00 (1.00-2.00); Cd 0.30 (0.30-0.30); Cr 21.0 (5.00-29.0); Co 0.93 (0.70-1.00); Ni 25.0 (25.0-25.0); Sn 62.5 (42.0-83.0); V 0.88 (0.00-1.00) ug/kg fresh weight.",
      values: {
        Al: { mean: "191", min: "42.0", max: "314" },
        Sb: { mean: "0.75", min: "0.50", max: "1.00" },
        tAs: { mean: "2.00", min: "1.00", max: "2.00" },
        Cd: { mean: "0.30", min: "0.30", max: "0.30" },
        "Cr-total": { mean: "21.0", min: "5.00", max: "29.0" },
        Co: { mean: "0.93", min: "0.70", max: "1.00" },
        Ni: { mean: "25.0", min: "25.0", max: "25.0" },
        Sn: { mean: "62.5", min: "42.0", max: "83.0" },
        V: { mean: "0.88", min: "0.00", max: "1.00" },
      },
    },
    "fruit-purees": {
      label: "Fruit purees",
      n: "30",
      source_line:
        "Chekri 2019 Table 5 Fruit purees: n=30; Al 556 (260-1420); Sb 0.65 (0.50-3.00); As 2.00 (1.00-8.00); Cd 0.66 (0.30-2.00); Cr 42.7 (13.0-84.0); Co 2.87 (1.00-5.00); Ni 54.7 (25.0-121); Sn 424 (42.0-3330); V 1.40 (1.00-4.00) ug/kg fresh weight.",
      values: {
        Al: { mean: "556", min: "260", max: "1420" },
        Sb: { mean: "0.65", min: "0.50", max: "3.00" },
        tAs: { mean: "2.00", min: "1.00", max: "8.00" },
        Cd: { mean: "0.66", min: "0.30", max: "2.00" },
        "Cr-total": { mean: "42.7", min: "13.0", max: "84.0" },
        Co: { mean: "2.87", min: "1.00", max: "5.00" },
        Ni: { mean: "54.7", min: "25.0", max: "121" },
        Sn: { mean: "424", min: "42.0", max: "3330" },
        V: { mean: "1.40", min: "1.00", max: "4.00" },
      },
    },
  }
  return routes[productSlug]
}

function extractAlmeida2022(queueRow, text) {
  if (queueRow.product_slug !== "infant-formula-powder-non-soy") return []
  if (!text.includes("Infant formulas containing protein sources other than cow milk, such as soy or wheat")) return []
  if (!text.includes("Table 3. Average concentrations of toxic elements in phase 1 and phase 2 infant formulas marketed")) return []

  const formulaRows = [
    {
      label: "ME1",
      values: { Al: "0.724", tAs: "0.016", Cd: "0.004", Sn: "0.007", tHg: "<LOQ", Pb: "<LOD", U: "0.005" },
      source_line: "ME1: Al 0.724; As 0.016; Cd 0.004; Sn 0.007; Hg <LOQ; Pb <LOD; U 0.005 mg/kg.",
    },
    {
      label: "NC1",
      values: { Al: "0.459", tAs: "<LOQ", Cd: "0.005", Sn: "0.081", tHg: "<LOQ", Pb: "<LOD", U: "<LOD" },
      source_line: "NC1: Al 0.459; As <LOQ; Cd 0.005; Sn 0.081; Hg <LOQ; Pb <LOD; U <LOD mg/kg.",
    },
    {
      label: "NN1",
      values: { Al: "0.504", tAs: "<LOQ", Cd: "0.004", Sn: "0.054", tHg: "<LOQ", Pb: "0.036", U: "<LOD" },
      source_line: "NN1: Al 0.504; As <LOQ; Cd 0.004; Sn 0.054; Hg <LOQ; Pb 0.036; U <LOD mg/kg.",
    },
    {
      label: "DM1",
      values: { Al: "0.432", tAs: "0.031", Cd: "0.005", Sn: "0.068", tHg: "<LOD", Pb: "0.016", U: "0.009" },
      source_line: "DM1: Al 0.432; As 0.031; Cd 0.005; Sn 0.068; Hg <LOD; Pb 0.016; U 0.009 mg/kg.",
    },
    {
      label: "DA1",
      values: { Al: "0.746", tAs: "0.020", Cd: "0.005", Sn: "0.040", tHg: "<LOD", Pb: "<LOD", U: "0.011" },
      source_line: "DA1: Al 0.746; As 0.020; Cd 0.005; Sn 0.040; Hg <LOD; Pb <LOD; U 0.011 mg/kg.",
    },
    {
      label: "ME2",
      values: { Al: "0.673", tAs: "0.021", Cd: "<LOQ", Sn: "0.010", tHg: "<LOD", Pb: "0.023", U: "0.007" },
      source_line: "ME2: Al 0.673; As 0.021; Cd <LOQ; Sn 0.010; Hg <LOD; Pb 0.023; U 0.007 mg/kg.",
    },
    {
      label: "NC2",
      values: { Al: "0.942", tAs: "0.012", Cd: "0.008", Sn: "0.095", tHg: "<LOD", Pb: "0.011", U: "0.003" },
      source_line: "NC2: Al 0.942; As 0.012; Cd 0.008; Sn 0.095; Hg <LOD; Pb 0.011; U 0.003 mg/kg.",
    },
    {
      label: "NN2",
      values: { Al: "0.494", tAs: "0.015", Cd: "0.004", Sn: "0.075", tHg: "<LOD", Pb: "<LOD", U: "0.002" },
      source_line: "NN2: Al 0.494; As 0.015; Cd 0.004; Sn 0.075; Hg <LOD; Pb <LOD; U 0.002 mg/kg.",
    },
    {
      label: "DM2",
      values: { Al: "<LOQ", tAs: "0.034", Cd: "0.004", Sn: "0.033", tHg: "<LOD", Pb: "<LOD", U: "0.009" },
      source_line: "DM2: Al <LOQ; As 0.034; Cd 0.004; Sn 0.033; Hg <LOD; Pb <LOD; U 0.009 mg/kg.",
    },
    {
      label: "DA2",
      values: { Al: "1.241", tAs: "0.024", Cd: "0.004", Sn: "0.035", tHg: "<LOD", Pb: "<LOD", U: "0.016" },
      source_line: "DA2: Al 1.241; As 0.024; Cd 0.004; Sn 0.035; Hg <LOD; Pb <LOD; U 0.016 mg/kg.",
    },
  ]
  const limitsMgKg = {
    Al: { LOQ: 0.430 },
    tAs: { LOQ: 0.011 },
    Cd: { LOQ: 0.002 },
    Sn: { LOQ: 0.005 },
    tHg: { LOD: 0.003, LOQ: 0.011 },
    Pb: { LOD: 0.003, LOQ: 0.010 },
    U: { LOD: 0.0004, LOQ: 0.001 },
  }
  const tableNote =
    "Almeida 2022 Table 3. Data are formula means from three batches per brand; samples analyzed in quintuplicate; N = 150 analytical determinations. LOQ mg/kg: Al 0.430, As 0.011, Cd 0.002, Sn 0.005, Hg 0.011, Pb 0.010, U 0.001. LOD mg/kg: Hg 0.003, Pb 0.003, U 0.0004."
  const rows = []

  for (const [formulaIndex, formula] of formulaRows.entries()) {
    for (const [metal, rawValue] of Object.entries(formula.values)) {
      const parsed = parseMgKgMean(rawValue, limitsMgKg[metal])
      rows.push(
        candidateRow(queueRow, {
          candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${formula.label}-${metal}`,
          metal_species: metal,
          source_product_label: `${formula.label} cow-milk formula mean`,
          basis: "as_sold_or_source_reported",
          n: "",
          n_text: "Table reports formula means from three batches per brand; samples were analyzed in quintuplicate; source states total N = 30 product samples and N = 150 analytical determinations.",
          statistic_type: parsed.statistic_type,
          mean_ppb: parsed.mean_ppb,
          censoring_status: parsed.censoring_status,
          censoring_limit_ppb: parsed.censoring_limit_ppb,
          row_fit: "direct_non_soy_cow_milk_formula_mean_needs_review",
          extraction_method: "deterministic_parser_almeida2022_table3_formula_means",
          quote_trace: `${formula.source_line} ${tableNote}`,
          notes: compact(
            [
              "Deterministic parse of Almeida 2022 Table 3 formula means in mg/kg converted to ppb.",
              "Source excludes soy, wheat, lactose-free, hydrolyzed, and special-needs formulas.",
              "No p90/p95 is reported or inferred.",
              metal === "tAs" ? "Source reports As; retained as total/unspecified arsenic candidate, not iAs." : "",
              metal === "U" ? "Source reports uranium; retained as uranium and not pooled with other metals." : "",
              parsed.note,
            ].join(" "),
          ),
          source_row_order: String(formulaIndex * Object.keys(formula.values).length + Object.keys(formula.values).indexOf(metal) + 1),
        }),
      )
    }
  }

  return rows
}

function extractMeli2024(queueRow, text) {
  const route = meli2024Route(queueRow.product_slug)
  if (!route) return []
  if (!text.includes("Table 5. Concentration (mg kg-1ww) of non essential or toxic elements in baby food")) return []

  const rows = []
  for (const [metalIndex, [metal, rawValue]] of Object.entries(route.values).entries()) {
    const parsed = parseMgKgConcentration(rawValue)
    rows.push(
      candidateRow(queueRow, {
        candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${metal}`,
        metal_species: metal,
        source_product_label: route.label,
        basis: "wet_weight",
        n: route.n,
        n_text: route.nText,
        statistic_type: parsed.statistic_type,
        mean_ppb: parsed.mean_ppb,
        censoring_status: parsed.censoring_status,
        censoring_limit_ppb: parsed.censoring_limit_ppb,
        row_fit: "direct_baby_food_category_mean_needs_review",
        extraction_method: "deterministic_parser_meli2024_table5_category_means",
        quote_trace: `${route.source_line} Values are Table 5 category means in mg/kg wet weight, normalized to ppb.`,
        notes: compact(
          [
            "Deterministic parse of Meli 2024 Table 5 category mean concentrations.",
            "Rows are source-reported category means, not sample distributions or percentiles.",
            metal === "tAs" ? "Source reports As; retained as total/unspecified arsenic candidate, not iAs." : "",
            metal === "tHg" ? "Source reports Hg; retained as total mercury, not methylmercury." : "",
            metal === "Cd" || metal === "Pb"
              ? "Table 2 reports zero samples above LOD for this analyte across the study; retained as a censored source-table value."
              : "",
            parsed.note,
          ].join(" "),
        ),
        source_row_order: String(metalIndex + 1),
      }),
    )
  }
  return rows
}

function meli2024Route(productSlug) {
  const routes = {
    "fish-containing-baby-foods": {
      label: "Homogenized fish products, mean",
      n: "3",
      nText: "Table 5 reports three homogenized fish products: bream, salmon, and sea bass.",
      source_line:
        "Meli 2024 Table 5 Fish mean: Al 0.390; As 0.0600; Hg 0.0068; Ni 0.080; Sn <0.075 mg/kg wet weight. Table 2 reports Cd LOD 0.005 mg/kg and Pb LOD 0.10 mg/kg, with zero samples above LOD across the study.",
      values: { Al: "0.390", tAs: "0.0600", Cd: "<0.005", tHg: "0.0068", Ni: "0.080", Pb: "<0.10", Sn: "<0.075" },
    },
    "fruit-purees": {
      label: "Homogenized fruit products, mean",
      n: "3",
      nText: "Table 5 reports three homogenized fruit products: apple, pear, and banana.",
      source_line:
        "Meli 2024 Table 5 Fruit mean: Al 0.580; As <0.0197; Hg 0.0072; Ni 0.137; Sn 0.098 mg/kg wet weight. Table 2 reports Cd LOD 0.005 mg/kg and Pb LOD 0.10 mg/kg, with zero samples above LOD across the study.",
      values: { Al: "0.580", tAs: "<0.0197", Cd: "<0.005", tHg: "0.0072", Ni: "0.137", Pb: "<0.10", Sn: "0.098" },
    },
    "meat-and-poultry-purees": {
      label: "Homogenized meat products, mean",
      n: "4",
      nText: "Table 5 reports four homogenized meat products: rabbit, lamb, turkey, and veal.",
      source_line:
        "Meli 2024 Table 5 Meat mean: Al 0.753; As <0.017; Hg 0.0040; Ni 0.086; Sn 0.267 mg/kg wet weight. Table 2 reports Cd LOD 0.005 mg/kg and Pb LOD 0.10 mg/kg, with zero samples above LOD across the study.",
      values: { Al: "0.753", tAs: "<0.017", Cd: "<0.005", tHg: "0.0040", Ni: "0.086", Pb: "<0.10", Sn: "0.267" },
    },
  }
  return routes[productSlug]
}

function extractPandelova2012(queueRow, text) {
  const sourceRowsByProduct = {
    "infant-formula-powder-non-soy": [
      {
        label: "EU basket starting infant formulae, milk-based (Mf)",
        values: { Ca: "3.4", Cd: "3.3", Cu: "2.6", Fe: "47.7", tHg: "<0.5", Mn: "0.5", Ni: "<0.5", Pb: "8.2", Se: "84.7", Zn: "32.9" },
        row_fit: "direct_non_soy_pooled_formula_basket_needs_review",
        source_line:
          "Pandelova 2012 Table 3 EU basket Mf: Ca 3.4 g/kg fw; Cd 3.3 ug/kg fw; Cu 2.6 mg/kg fw; Fe 47.7 mg/kg fw; Hg <0.5 ug/kg fw; Mn 0.5 mg/kg fw; Ni <0.5 mg/kg fw; Pb 8.2 ug/kg fw; Se 84.7 ug/kg fw; Zn 32.9 mg/kg fw.",
      },
      {
        label: "EU basket follow-on infant formulae, milk-based (fMf)",
        values: { Ca: "5.5", Cd: "4.5", Cu: "3.9", Fe: "69.1", tHg: "113", Mn: "0.6", Ni: "0.1", Pb: "43.9", Se: "510", Zn: "46.5" },
        row_fit: "direct_non_soy_pooled_formula_basket_needs_review",
        source_line:
          "Pandelova 2012 Table 3 EU basket fMf: Ca 5.5 g/kg fw; Cd 4.5 ug/kg fw; Cu 3.9 mg/kg fw; Fe 69.1 mg/kg fw; Hg 113 ug/kg fw; Mn 0.6 mg/kg fw; Ni 0.1 mg/kg fw; Pb 43.9 ug/kg fw; Se 510 ug/kg fw; Zn 46.5 mg/kg fw.",
      },
    ],
    "infant-formula-powder-soy-based": [
      {
        label: "EU basket starting infant formulae, soy-based (Sf)",
        values: { Ca: "4.8", Cd: "15.8", Cu: "3.3", Fe: "70.4", tHg: "<0.5", Mn: "3.3", Ni: "<0.5", Pb: "30.5", Se: "120", Zn: "41.6" },
        row_fit: "direct_soy_pooled_formula_basket_needs_review",
        source_line:
          "Pandelova 2012 Table 3 EU basket Sf: Ca 4.8 g/kg fw; Cd 15.8 ug/kg fw; Cu 3.3 mg/kg fw; Fe 70.4 mg/kg fw; Hg <0.5 ug/kg fw; Mn 3.3 mg/kg fw; Ni <0.5 mg/kg fw; Pb 30.5 ug/kg fw; Se 120 ug/kg fw; Zn 41.6 mg/kg fw.",
      },
      {
        label: "EU basket follow-on infant formulae, soy-based (fSf)",
        values: { Ca: "4.8", Cd: "18.3", Cu: "3.2", Fe: "67.3", tHg: "29.3", Mn: "3.3", Ni: "1.3", Pb: "20.1", Se: "222", Zn: "47.7" },
        row_fit: "direct_soy_pooled_formula_basket_needs_review",
        source_line:
          "Pandelova 2012 Table 3 EU basket fSf: Ca 4.8 g/kg fw; Cd 18.3 ug/kg fw; Cu 3.2 mg/kg fw; Fe 67.3 mg/kg fw; Hg 29.3 ug/kg fw; Mn 3.3 mg/kg fw; Ni 1.3 mg/kg fw; Pb 20.1 ug/kg fw; Se 222 ug/kg fw; Zn 47.7 mg/kg fw.",
      },
    ],
  }
  const sourceRows = sourceRowsByProduct[queueRow.product_slug]
  if (!sourceRows) return []
  if (!text.includes("Concentration levels of Cd, Fe, Pb, Se, Hg, Cu, Ni, Zn, Ca, Mn in infant formulae")) return []

  const units = {
    Ca: { source_unit: "g/kg fw", multiplier: 1000000 },
    Cd: { source_unit: "ug/kg fw", multiplier: 1 },
    Cu: { source_unit: "mg/kg fw", multiplier: 1000 },
    Fe: { source_unit: "mg/kg fw", multiplier: 1000 },
    tHg: { source_unit: "ug/kg fw", multiplier: 1 },
    Mn: { source_unit: "mg/kg fw", multiplier: 1000 },
    Ni: { source_unit: "mg/kg fw", multiplier: 1000 },
    Pb: { source_unit: "ug/kg fw", multiplier: 1 },
    Se: { source_unit: "ug/kg fw", multiplier: 1 },
    Zn: { source_unit: "mg/kg fw", multiplier: 1000 },
  }
  const metals = ["Cd", "tHg", "Ni", "Pb", "Ca", "Cu", "Fe", "Mn", "Se", "Zn"]
  const rows = []

  for (const [sourceIndex, sourceRow] of sourceRows.entries()) {
    for (const [metalIndex, metal] of metals.entries()) {
      const parsed = parsePandelovaValue(sourceRow.values[metal], units[metal])
      rows.push(
        candidateRow(queueRow, {
          candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${slugify(sourceRow.label)}-${metal}`,
          metal_species: metal,
          source_product_label: sourceRow.label,
          basis: "as_sold",
          n: "",
          n_text:
            "Table 3 reports pooled EU formula-basket values; the study reports 42 infant-formula products pooled into milk-based, soy-based, and hypoallergenic starting/follow-on baskets.",
          statistic_type: parsed.statistic_type,
          mean_ppb: parsed.mean_ppb,
          censoring_status: parsed.censoring_status,
          censoring_limit_ppb: parsed.censoring_limit_ppb,
          row_fit: sourceRow.row_fit,
          extraction_method: "deterministic_parser_pandelova2012_table3_formula_baskets",
          quote_trace: `${sourceRow.source_line} Formula samples were reported per fresh-weight powder; units were verified against the rendered PDF page image.`,
          notes: compact(
            [
              "Deterministic parse of Pandelova 2012 Table 3 EU pooled formula baskets.",
              `Source unit ${parsed.source_unit} normalized to ppb using deterministic unit conversion.`,
              "Pooled market-basket values are source means, not individual-product distributions.",
              "No p50, p90, or p95 is reported or inferred.",
              metal === "tHg" ? "Source reports total mercury as Hg; it is not methylmercury." : "",
              parsed.note,
            ].join(" "),
          ),
          source_row_order: String(sourceIndex * metals.length + metalIndex + 1),
        }),
      )
    }
  }

  return rows
}

function extractWeldegebriel2025(queueRow, text) {
  if (queueRow.product_slug !== "fruit-juice-not-canned") return []
  if (!text.includes("Table 5.**; Median, IQR and range of toxic metals in fruit juice")) return []

  const values = {
    Cd: { median: "0.08", min: "0.010", max: "0.1" },
    "Cr-total": { median: "0.004", min: "0.0003", max: "0.0081" },
    Pb: { median: "0.035", min: "0.01", max: "0.04" },
    Ni: { median: "0.078", min: "0.0025", max: "0.08" },
  }

  return Object.entries(values).map(([metal, item], index) =>
    candidateRow(queueRow, {
      candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${metal}`,
      metal_species: metal,
      source_product_label: "Packaged fruit juice samples, all brands",
      basis: "as_consumed",
      n: "80",
      n_text: "Table 5 reports toxic-metal concentrations in fruit juice, n=80.",
      statistic_type: "source_reported_median_iqr_range",
      min_ppb: String(round(Number(item.min) * 1000)),
      max_ppb: String(round(Number(item.max) * 1000)),
      p50_ppb: String(round(Number(item.median) * 1000)),
      row_fit: "direct_packaged_fruit_juice_needs_review",
      extraction_method: "deterministic_parser_weldegebriel2025_table5_fruit_juice_medians",
      quote_trace:
        "Weldegebriel 2025 Table 5 reports Cd median 0.08 mg/L, min 0.010, max 0.1; Cr median 0.004 mg/L, min 0.0003, max 0.0081; Pb median 0.035 mg/L, min 0.01, max 0.04; Ni median 0.078 mg/L, min 0.0025, max 0.08 for fruit juice (n=80).",
      notes: compact(
        [
          "Deterministic parse of Weldegebriel 2025 Table 5 fruit-juice medians and ranges.",
          "mg/L liquid concentrations are normalized to ppb as ug/L-equivalent; no p90 or p95 is reported or inferred.",
          metal === "Cr-total" ? "Source reports Cr; this does not satisfy Cr-VI without species confirmation." : "",
        ].join(" "),
      ),
      source_row_order: String(index + 1),
    }),
  )
}

function candidateRow(queueRow, values) {
  return {
    candidate_id: values.candidate_id,
    product_slug: queueRow.product_slug,
    source_id: queueRow.source_id,
    source_title: queueRow.source_title,
    source_page: queueRow.source_page_path,
    source_product_label: values.source_product_label ?? "",
    metal_species: values.metal_species ?? "",
    basis: values.basis ?? "",
    n: values.n ?? "",
    n_text: values.n_text ?? "",
    statistic_type: values.statistic_type ?? "",
    mean_ppb: values.mean_ppb ?? "",
    mean_lb_ppb: values.mean_lb_ppb ?? "",
    mean_ub_ppb: values.mean_ub_ppb ?? "",
    min_ppb: values.min_ppb ?? "",
    max_ppb: values.max_ppb ?? "",
    p50_ppb: values.p50_ppb ?? "",
    p90_ppb: "",
    p95_ppb: "",
    unit: "ppb",
    censoring_status: values.censoring_status ?? "",
    censoring_limit_ppb: values.censoring_limit_ppb ?? "",
    row_fit: values.row_fit ?? "needs_review",
    extraction_method: values.extraction_method ?? "deterministic_parser",
    extraction_status: "candidate_only_not_published",
    review_state: "needs_review",
    evidence_fitness_verdict: "EF-3",
    source_row_order: values.source_row_order ?? "",
    quote_trace: values.quote_trace ?? "",
    notes: values.notes ?? "",
    guardrails:
      "Candidate row only; do not publish until source table, product fit, basis, species, unit, and N are reviewed. Do not infer p90/p95.",
  }
}

function parseFsaValue(raw) {
  const cleaned = String(raw).trim()
  const approx = cleaned.includes("~")
  const value = cleaned.replace("~", "")
  if (value.startsWith("<")) {
    return {
      statistic_type: "source_reported_censored_mean_upper_bound",
      mean_lb_ppb: "0",
      mean_ub_ppb: value.slice(1),
      censoring_status: "less_than",
      note: `${cleaned} is retained as a censored source table value.`,
    }
  }
  const range = value.match(/^([\d.]+)-([\d.]+)$/)
  if (range) {
    return {
      statistic_type: "source_reported_lb_ub_mean",
      mean_lb_ppb: range[1],
      mean_ub_ppb: range[2],
      censoring_status: "",
      note: approx ? "Source value is marked approximate." : "",
    }
  }
  return {
    statistic_type: approx ? "source_reported_approximate_mean" : "source_reported_mean",
    mean_ppb: value,
    mean_lb_ppb: "",
    mean_ub_ppb: "",
    censoring_status: approx ? "approximate" : "",
    note: approx ? "Source value is marked approximate." : "",
  }
}

function parsePandelovaValue(raw, unitInfo) {
  const sourceUnit = unitInfo.source_unit
  const multiplier = unitInfo.multiplier
  const value = String(raw).trim()
  if (value.startsWith("<")) {
    return {
      statistic_type: "source_reported_censored_pooled_basket_mean",
      mean_ppb: "",
      censoring_status: "less_than",
      censoring_limit_ppb: String(round(Number(value.slice(1)) * multiplier)),
      source_unit: sourceUnit,
      note: `${value} ${sourceUnit} retained as a censored source-table value.`,
    }
  }
  return {
    statistic_type: "source_reported_pooled_basket_mean",
    mean_ppb: String(round(Number(value) * multiplier)),
    censoring_status: "",
    censoring_limit_ppb: "",
    source_unit: sourceUnit,
    note: "",
  }
}

function parseMgKgMean(raw, limits = {}) {
  const value = String(raw).trim()
  if (value.startsWith("<")) {
    const kind = value.replace("<", "")
    const limit = limits[kind]
    return {
      statistic_type: `source_reported_${kind.toLowerCase()}_censored_mean`,
      mean_ppb: "",
      censoring_status: `less_than_${kind.toLowerCase()}`,
      censoring_limit_ppb: limit === undefined ? "" : String(round(limit * 1000)),
      note: `${value} retained as a censored source table value.`,
    }
  }
  return {
    statistic_type: "source_reported_formula_mean",
    mean_ppb: String(round(Number(value) * 1000)),
    censoring_status: "",
    censoring_limit_ppb: "",
    note: "",
  }
}

function parseMgKgConcentration(raw) {
  const value = String(raw).trim()
  if (value.startsWith("<")) {
    return {
      statistic_type: "source_reported_censored_category_mean",
      mean_ppb: "",
      censoring_status: "less_than",
      censoring_limit_ppb: String(round(Number(value.slice(1)) * 1000)),
      note: `${value} mg/kg wet weight retained as a censored source table value.`,
    }
  }
  return {
    statistic_type: "source_reported_category_mean",
    mean_ppb: String(round(Number(value) * 1000)),
    censoring_status: "",
    censoring_limit_ppb: "",
    note: "",
  }
}

function packetTextPath(row) {
  const dir = path.join(packetRoot, row.product_slug)
  if (!fs.existsSync(dir)) return ""
  const prefix = `${String(row.queue_order || "").padStart(3, "0")}-${safeFilename(row.source_id)}`
  const exact = path.join(dir, `${prefix}.txt`)
  if (fs.existsSync(exact)) return exact
  const match = fs.readdirSync(dir).find((file) => file.endsWith(".txt") && file.includes(row.source_id) && !file.endsWith(".snippets.txt"))
  return match ? path.join(dir, match) : ""
}

function writeExtractionPrompt(row, text) {
  const promptDir = path.join(promptRoot, row.product_slug)
  fs.mkdirSync(promptDir, { recursive: true })
  const promptPath = path.join(promptDir, `${safeFilename(row.source_id)}.prompt.md`)
  const relevant = text ? buildRelevantContext(text) : "No packet text found."
  const prompt = `# Local Evidence Extraction Task

Source ID: ${row.source_id}
Source title: ${row.source_title}
Product target: ${row.product_slug}
Local PDF: ${row.local_pdf_path}

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

\`\`\`json
{
  "source_id": "${row.source_id}",
  "product_slug": "${row.product_slug}",
  "candidate_values": [
    {
      "source_product_label": "",
      "metal_species": "Pb|Cd|tAs|iAs|tHg|MeHg|Al|Ni|Sn|Cr-total|Cr-VI|Sb|Cu|I|Fe|Mn|Se|Zn|U",
      "basis": "as_sold|prepared_for_feeding|as_consumed|as_sold_or_source_reported|not_reported",
      "n": "",
      "n_text": "",
      "statistic_type": "source_reported_mean|source_reported_median|source_reported_range|source_reported_percentile|sample_value|other",
      "mean_ppb": "",
      "median_ppb": "",
      "min_ppb": "",
      "max_ppb": "",
      "p50_ppb": "",
      "p90_ppb": "",
      "p95_ppb": "",
      "censoring_status": "",
      "row_fit": "direct_category1_row|literature_summary_row|broad_formula_context|context_only|needs_review",
      "quote_trace": "",
      "notes": ""
    }
  ],
  "blocked_items": [
    {
      "reason": "",
      "quote_trace": ""
    }
  ]
}
\`\`\`

## Guardrails
- Do not infer p50, p90, or p95.
- Do not convert total arsenic into inorganic arsenic.
- Do not convert total mercury into methylmercury.
- Do not pool powder/liquid or soy/non-soy rows unless the source explicitly does so.
- Keep broad formula rows as candidates needing row-fit review.
- Include a quote trace for every candidate.
- If a value is not source-stated or reconstructable from a table row, put it in blocked_items.

## Packet context

\`\`\`text
${relevant}
\`\`\`
`
  fs.writeFileSync(promptPath, prompt, "utf8")
  return promptPath
}

function buildRelevantContext(text) {
  const terms = [
    "Table",
    "infant formula",
    "dry infant formula",
    "powder",
    "cow milk",
    "soy",
    "mean",
    "median",
    "range",
    "percentile",
    "µg/kg",
    "mg·kg",
    "mg/kg",
    "ppb",
    "lead",
    "cadmium",
    "arsenic",
    "mercury",
    "aluminium",
    "aluminum",
    "nickel",
    "tin",
    "chromium",
  ]
  const lines = text.split(/\r?\n/)
  const selected = []
  for (let index = 0; index < lines.length; index += 1) {
    const lower = lines[index].toLowerCase()
    if (!terms.some((term) => lower.includes(term.toLowerCase()))) continue
    const start = Math.max(0, index - 2)
    const end = Math.min(lines.length - 1, index + 4)
    selected.push(lines.slice(start, end + 1).join("\n"))
    if (selected.join("\n\n").length > 18000) break
  }
  return selected.join("\n\n---\n\n").slice(0, 20000)
}

function quoteAround(text, needle, radius = 1200) {
  const index = text.indexOf(needle)
  if (index < 0) return ""
  return compact(text.slice(Math.max(0, index - radius), Math.min(text.length, index + radius)))
}

function quoteBetween(text, startNeedle, endNeedle) {
  const start = text.indexOf(startNeedle)
  if (start < 0) return ""
  const end = text.indexOf(endNeedle, start + startNeedle.length)
  return compact(text.slice(start, end > start ? end : Math.min(text.length, start + 4000)))
}

function candidateHeaders() {
  return [
    "candidate_id",
    "product_slug",
    "source_id",
    "source_title",
    "source_page",
    "source_product_label",
    "metal_species",
    "basis",
    "n",
    "n_text",
    "statistic_type",
    "mean_ppb",
    "mean_lb_ppb",
    "mean_ub_ppb",
    "min_ppb",
    "max_ppb",
    "p50_ppb",
    "p90_ppb",
    "p95_ppb",
    "unit",
    "censoring_status",
    "censoring_limit_ppb",
    "row_fit",
    "extraction_method",
    "extraction_status",
    "review_state",
    "evidence_fitness_verdict",
    "source_row_order",
    "quote_trace",
    "notes",
    "guardrails",
  ]
}

function splitMetals(value) {
  return String(value || "")
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(/[;,]/)
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean)
}

function canonicalMetal(value) {
  const text = String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "")
  const aliases = {
    al: "Al",
    aluminium: "Al",
    aluminum: "Al",
    as: "tAs",
    tas: "tAs",
    totalas: "tAs",
    totalarsenic: "tAs",
    arsenic: "tAs",
    ias: "iAs",
    inorganicarsenic: "iAs",
    cd: "Cd",
    cadmium: "Cd",
    pb: "Pb",
    lead: "Pb",
    hg: "tHg",
    thg: "tHg",
    totalhg: "tHg",
    totalmercury: "tHg",
    mercury: "tHg",
    mehg: "MeHg",
    methylmercury: "MeHg",
    cr: "Cr-total",
    crtotal: "Cr-total",
    chromium: "Cr-total",
    crvi: "Cr-VI",
    chromiumvi: "Cr-VI",
    ni: "Ni",
    nickel: "Ni",
    sn: "Sn",
    tin: "Sn",
    sb: "Sb",
    antimony: "Sb",
    v: "V",
    vanadium: "V",
    co: "Co",
    cobalt: "Co",
    u: "U",
    uranium: "U",
  }
  return aliases[text] ?? value
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

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
}

function safeFilename(value) {
  return String(value || "source").replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "")
}

function compact(value) {
  return String(value || "").replace(/\s+/g, " ").trim()
}

function round(value) {
  return Math.round((value + Number.EPSILON) * 1000) / 1000
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}
