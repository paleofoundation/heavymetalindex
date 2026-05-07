import fs from "node:fs"
import path from "node:path"

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
fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8")

console.log(`Wrote ${candidateRows.length} deterministic local candidate rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote ${taskRows.length} local extraction task rows to ${path.relative(repoRoot, tasksPath)}`)
console.log(`Wrote local candidate summary to ${path.relative(repoRoot, summaryPath)}`)

function deterministicExtract(queueRow, text) {
  if (!text) return []
  if (queueRow.source_id === "chung2021-china-infant-formula-toxic-elements") return extractChung2021(queueRow, text)
  if (queueRow.source_id === "fsa2016-infant-food-formula-metals-survey") return extractFsa2016(queueRow, text)
  if (queueRow.source_id === "almeida2022-brazil-infant-formula-toxic-metals") return extractAlmeida2022(queueRow, text)
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
  if (queueRow.product_slug !== "infant-formula-powder-non-soy") return []
  if (!text.includes("Table 2. Average concentration data used to assess dietary exposure to metals and other elements in dry infant formula")) {
    return []
  }

  const sourceRows = [
    {
      label: "First milk & hungrier milk (from birth)",
      row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
      values: ["388-488", "1-3", "0.7-1.8", "3-4", "15-35", "1-4", "0-1", "18-54", "0-23"],
      source_line:
        "First milk & hungrier milk (from birth): Al 388-488; As 1-3; iAs 0.7-1.8; Cd 3-4; Cr 15-35; Pb 1-4; Hg 0-1; Ni 18-54; Sn 0-23 ug/kg.",
    },
    {
      label: "Comfort (from birth)",
      row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
      values: ["767", "1-3", "0.9-1.9", "0-2", "37-73", "0-5", "0-1", "0-40", "0-24"],
      source_line:
        "Comfort (from birth): Al 767; As 1-3; iAs 0.9-1.9; Cd 0-2; Cr 37-73; Pb 0-5; Hg 0-1; Ni 0-40; Sn 0-24 ug/kg.",
    },
    {
      label: "Follow on milk (from 6 months)",
      row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
      values: ["400-450", "1-3", "0.9-2", "3", "0-25", "0-3", "0-1", "0-40", "0-22"],
      source_line:
        "Follow on milk (from 6 months): Al 400-450; As 1-3; iAs 0.9-2; Cd 3; Cr 0-25; Pb 0-3; Hg 0-1; Ni 0-40; Sn 0-22 ug/kg.",
    },
    {
      label: "Growing up milk (12 months +)",
      row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
      values: ["650", "2-3", "1.4-2.3", "3-4", "0-40", "0-4", "0-1", "0-40", "0-22"],
      source_line:
        "Growing up milk (12 months +): Al 650; As 2-3; iAs 1.4-2.3; Cd 3-4; Cr 0-40; Pb 0-4; Hg 0-1; Ni 0-40; Sn 0-22 ug/kg.",
    },
    {
      label: "Goat based (from birth and growing up)",
      row_fit: "non_soy_goat_formula_subtype_needs_review",
      values: ["950", "9", "6-6.3", "0-2", "40-45", "6.5", "0-1", "0-45", "0-35"],
      source_line:
        "Goat based (from birth and growing up): Al 950; As 9; iAs 6-6.3; Cd 0-2; Cr 40-45; Pb 6.5; Hg 0-1; Ni 0-45; Sn 0-35 ug/kg.",
    },
    {
      label: "Organic milk",
      row_fit: "direct_non_soy_dry_formula_subtype_needs_review",
      values: ["1000", "14", "~7", "8", "~30", "~3", "<1", "<40", "~40"],
      source_line:
        "Organic milk: Al 1000; As 14; iAs ~7; Cd 8; Cr ~30; Pb ~3; Hg <1; Ni <40; Sn ~40 ug/kg.",
    },
  ]
  const metals = ["Al", "tAs", "iAs", "Cd", "Cr-total", "Pb", "tHg", "Ni", "Sn"]
  const footnote =
    "Table 2 dry infant formula; samples analysed as sold and not reconstituted. Values are lower-bound to upper-bound means where ranges are shown; iAs may include source-estimated values using 70% of tAs."
  const rows = []

  for (const [sourceIndex, sourceRow] of sourceRows.entries()) {
    for (const [metalIndex, metal] of metals.entries()) {
      const parsed = parseFsaValue(sourceRow.values[metalIndex])
      rows.push(
        candidateRow(queueRow, {
          candidate_id: `${queueRow.source_id}-${queueRow.product_slug}-${slugify(sourceRow.label)}-${metal}`,
          metal_species: metal,
          source_product_label: sourceRow.label,
          basis: "as_sold",
          n: "",
          n_text: "N by dry-formula subtype is not provided in this table; total infant formula samples reported elsewhere as 47.",
          statistic_type: parsed.statistic_type,
          mean_ppb: parsed.mean_ppb,
          mean_lb_ppb: parsed.mean_lb_ppb,
          mean_ub_ppb: parsed.mean_ub_ppb,
          censoring_status: parsed.censoring_status,
          row_fit: sourceRow.row_fit,
          extraction_method: "deterministic_parser_fsa2016_table2_dry_formula",
          quote_trace: `${sourceRow.source_line} ${footnote}`,
          notes: compact(
            [
              "Deterministic parse of FSA/Fera Table 2 dry infant formula concentration means in ug/kg.",
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

function extractAlmeida2022(queueRow, text) {
  if (queueRow.product_slug !== "infant-formula-powder-non-soy") return []
  if (!text.includes("Infant formulas containing protein sources other than cow milk, such as soy or wheat")) return []
  if (!text.includes("Table 3. Average concentrations of toxic elements in phase 1 and phase 2 infant formulas marketed")) return []

  const formulaRows = [
    {
      label: "ME1",
      values: { Al: "0.724", tAs: "0.016", Cd: "0.004", Sn: "0.007", tHg: "<LOQ", Pb: "<LOD" },
      source_line: "ME1: Al 0.724; As 0.016; Cd 0.004; Sn 0.007; Hg <LOQ; Pb <LOD mg/kg.",
    },
    {
      label: "NC1",
      values: { Al: "0.459", tAs: "<LOQ", Cd: "0.005", Sn: "0.081", tHg: "<LOQ", Pb: "<LOD" },
      source_line: "NC1: Al 0.459; As <LOQ; Cd 0.005; Sn 0.081; Hg <LOQ; Pb <LOD mg/kg.",
    },
    {
      label: "NN1",
      values: { Al: "0.504", tAs: "<LOQ", Cd: "0.004", Sn: "0.054", tHg: "<LOQ", Pb: "0.036" },
      source_line: "NN1: Al 0.504; As <LOQ; Cd 0.004; Sn 0.054; Hg <LOQ; Pb 0.036 mg/kg.",
    },
    {
      label: "DM1",
      values: { Al: "0.432", tAs: "0.031", Cd: "0.005", Sn: "0.068", tHg: "<LOD", Pb: "0.016" },
      source_line: "DM1: Al 0.432; As 0.031; Cd 0.005; Sn 0.068; Hg <LOD; Pb 0.016 mg/kg.",
    },
    {
      label: "DA1",
      values: { Al: "0.746", tAs: "0.020", Cd: "0.005", Sn: "0.040", tHg: "<LOD", Pb: "<LOD" },
      source_line: "DA1: Al 0.746; As 0.020; Cd 0.005; Sn 0.040; Hg <LOD; Pb <LOD mg/kg.",
    },
    {
      label: "ME2",
      values: { Al: "0.673", tAs: "0.021", Cd: "<LOQ", Sn: "0.010", tHg: "<LOD", Pb: "0.023" },
      source_line: "ME2: Al 0.673; As 0.021; Cd <LOQ; Sn 0.010; Hg <LOD; Pb 0.023 mg/kg.",
    },
    {
      label: "NC2",
      values: { Al: "0.942", tAs: "0.012", Cd: "0.008", Sn: "0.095", tHg: "<LOD", Pb: "0.011" },
      source_line: "NC2: Al 0.942; As 0.012; Cd 0.008; Sn 0.095; Hg <LOD; Pb 0.011 mg/kg.",
    },
    {
      label: "NN2",
      values: { Al: "0.494", tAs: "0.015", Cd: "0.004", Sn: "0.075", tHg: "<LOD", Pb: "<LOD" },
      source_line: "NN2: Al 0.494; As 0.015; Cd 0.004; Sn 0.075; Hg <LOD; Pb <LOD mg/kg.",
    },
    {
      label: "DM2",
      values: { Al: "<LOQ", tAs: "0.034", Cd: "0.004", Sn: "0.033", tHg: "<LOD", Pb: "<LOD" },
      source_line: "DM2: Al <LOQ; As 0.034; Cd 0.004; Sn 0.033; Hg <LOD; Pb <LOD mg/kg.",
    },
    {
      label: "DA2",
      values: { Al: "1.241", tAs: "0.024", Cd: "0.004", Sn: "0.035", tHg: "<LOD", Pb: "<LOD" },
      source_line: "DA2: Al 1.241; As 0.024; Cd 0.004; Sn 0.035; Hg <LOD; Pb <LOD mg/kg.",
    },
  ]
  const limitsMgKg = {
    Al: { LOQ: 0.430 },
    tAs: { LOQ: 0.011 },
    Cd: { LOQ: 0.002 },
    Sn: { LOQ: 0.005 },
    tHg: { LOD: 0.003, LOQ: 0.011 },
    Pb: { LOD: 0.003, LOQ: 0.010 },
  }
  const tableNote =
    "Almeida 2022 Table 3. Data are formula means from three batches per brand; samples analyzed in quintuplicate; N = 150 analytical determinations. LOQ mg/kg: Al 0.430, As 0.011, Cd 0.002, Sn 0.005, Hg 0.011, Pb 0.010. LOD mg/kg: Hg 0.003, Pb 0.003."
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
      "metal_species": "Pb|Cd|tAs|iAs|tHg|MeHg|Al|Ni|Sn|Cr-total|Cr-VI",
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
