import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

type MetalSpecies = "tAs" | "Pb" | "Cd" | "tHg" | "Al"
type FdaMetalSpecies = "tAs" | "Pb" | "Cd" | "tHg"
type EvidenceFitnessVerdict = "EF-2" | "EF-3" | "EF-4"
type RowFit = "direct_category1_row" | "bridge_product_context" | "outside_locked_category1_rows" | "literature_summary_row"

type ProductMapping = {
  row_id: string
  row_slug: string
  hmtc_row: number | null
  product_label: string
  row_fit: RowFit
  category1_related_rows: string
  mapping_notes: string
}

type ParsedFormulaSample = {
  source_id: string
  source_page: string
  sample_number: number
  fiscal_year: number
  simplified_product_label: string
  source_analyte: string
  metal_species: FdaMetalSpecies
  reported_value: string
  numeric_lower_bound_ppb: number
  detected: boolean
  censoring_status: string
} & ProductMapping

type FormulaRow = {
  source_id: string
  source_page: string
  row_id: string
  row_slug: string
  hmtc_row: number | null
  product_label: string
  source_product_label: string
  metal_species: MetalSpecies
  basis: string
  n: number
  detected_n: number
  lod_n: number
  substitution_rule: string
  fiscal_year_min: number | null
  fiscal_year_max: number | null
  p10_ppb: number | null
  p50_ppb: number | null
  p90_ppb: number | null
  p95_ppb: number | null
  p100_ppb: number | null
  mean_ppb: number | null
  median_ppb: number | null
  max_ppb: number | null
  unit: string
  statistic_scope: string
  evidence_fitness_verdict: EvidenceFitnessVerdict
  review_state: string
  row_fit: RowFit
  category1_related_rows: string
  notes: string
}

const sourceId = "fda2026-infant-formula-toxic-elements-special-survey"
const sourcePage = "wiki/sources/fda2026-infant-formula-toxic-elements-special-survey.md"

const fdaFormulaSections = [
  { marker: "Analytical Results for Arsenic", sourceAnalyte: "As", metal: "tAs" as const, expectedRows: 312 },
  { marker: "Analytical Results for Lead", sourceAnalyte: "Pb", metal: "Pb" as const, expectedRows: 312 },
  { marker: "Analytical Results for Cadmium", sourceAnalyte: "Cd", metal: "Cd" as const, expectedRows: 312 },
  { marker: "Analytical Results for Mercury", sourceAnalyte: "Hg", metal: "tHg" as const, expectedRows: 312 },
] as const

const fdaFormulaProductOrder = [
  "Infant Formula, Powder, Cow Milk-based",
  "Infant Formula, Powder, Soy-based",
  "Infant Formula, Ready-to-Feed Liquid, Cow Milk-based",
  "Infant Formula, Ready-to-Feed Liquid, Soy-based",
  "Infant Formula, Concentrated Liquid, Cow Milk-based",
  "Infant Formula, Concentrated Liquid, Soy-based",
  "Infant Formula, Powder, Amino Acid-based",
] as const

const fdaFormulaProductMap: Record<(typeof fdaFormulaProductOrder)[number], ProductMapping> = {
  "Infant Formula, Powder, Cow Milk-based": {
    row_id: "hmtc_c1_r01",
    row_slug: "infant-formula-powder-non-soy",
    hmtc_row: 1,
    product_label: "Infant formula, powder, cow milk-based",
    row_fit: "direct_category1_row",
    category1_related_rows: "infant-formula-powder-non-soy",
    mapping_notes: "Direct FDA label match for locked Category 1 row 1; total metals are expressed as prepared for feeding.",
  },
  "Infant Formula, Powder, Soy-based": {
    row_id: "hmtc_c1_r02",
    row_slug: "infant-formula-powder-soy-based",
    hmtc_row: 2,
    product_label: "Infant formula, powder, soy-based",
    row_fit: "direct_category1_row",
    category1_related_rows: "infant-formula-powder-soy-based",
    mapping_notes: "Direct FDA label match for locked Category 1 row 2; total metals are expressed as prepared for feeding.",
  },
  "Infant Formula, Ready-to-Feed Liquid, Cow Milk-based": {
    row_id: "hmtc_c1_r03",
    row_slug: "infant-formula-rtf-liquid-non-soy",
    hmtc_row: 3,
    product_label: "Infant formula, ready-to-feed liquid, cow milk-based",
    row_fit: "direct_category1_row",
    category1_related_rows: "infant-formula-rtf-liquid-non-soy",
    mapping_notes: "Direct FDA label match for locked Category 1 row 3; total metals are expressed as prepared for feeding.",
  },
  "Infant Formula, Ready-to-Feed Liquid, Soy-based": {
    row_id: "hmtc_c1_r04",
    row_slug: "infant-formula-rtf-liquid-soy-based",
    hmtc_row: 4,
    product_label: "Infant formula, ready-to-feed liquid, soy-based",
    row_fit: "direct_category1_row",
    category1_related_rows: "infant-formula-rtf-liquid-soy-based",
    mapping_notes:
      "Direct FDA label match for locked Category 1 row 4, but the source subset is very small; total metals are expressed as prepared for feeding.",
  },
  "Infant Formula, Concentrated Liquid, Cow Milk-based": {
    row_id: "",
    row_slug: "infant-formula-concentrated-liquid-non-soy",
    hmtc_row: null,
    product_label: "Infant formula, concentrated liquid, cow milk-based",
    row_fit: "bridge_product_context",
    category1_related_rows: "infant-formula-rtf-liquid-non-soy;infant-formula-powder-non-soy",
    mapping_notes:
      "Concentrated liquid cow-milk formula is a bridge product node, not one of the locked Category 1 rows. Retain as prepared-for-feeding context and do not merge into powder or RTF rows without an explicit taxonomy decision.",
  },
  "Infant Formula, Concentrated Liquid, Soy-based": {
    row_id: "",
    row_slug: "infant-formula-concentrated-liquid-soy-based",
    hmtc_row: null,
    product_label: "Infant formula, concentrated liquid, soy-based",
    row_fit: "bridge_product_context",
    category1_related_rows: "infant-formula-rtf-liquid-soy-based;infant-formula-powder-soy-based",
    mapping_notes:
      "Concentrated liquid soy formula is a bridge product node, not one of the locked Category 1 rows. Retain as prepared-for-feeding context and do not merge into powder or RTF rows without an explicit taxonomy decision.",
  },
  "Infant Formula, Powder, Amino Acid-based": {
    row_id: "",
    row_slug: "infant-formula-powder-amino-acid-based-out-of-scope",
    hmtc_row: null,
    product_label: "Infant formula, powder, amino acid-based",
    row_fit: "outside_locked_category1_rows",
    category1_related_rows: "infant-formula-powder-non-soy",
    mapping_notes:
      "Amino-acid-based formula is a specialty powder label and is not one of the locked Category 1 formula rows. Retain as out-of-scope formula context rather than assigning it to non-soy powder.",
  },
}

const digestPaperRows: FormulaRow[] = [
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Infant formula powder, milk-based, as consumed", "Al", 57, 177, 44, 1004),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Infant formula powder, milk-based, as consumed", "Cd", 57, 0.17, 0.06, 1.21),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Infant formula powder, milk-based, as consumed", "Pb", 57, 0.65, 0.34, 3.46),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Infant formula powder, soy-based, as consumed", "Al", 15, 733, 713, 1461),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Infant formula powder, soy-based, as consumed", "Cd", 15, 1.56, 1.39, 3.47),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Infant formula powder, soy-based, as consumed", "Pb", 15, null, 1.27, 1.9, "Pb mean in OCR table is ambiguous; median/range retained only."),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r03", "infant-formula-rtf-liquid-non-soy", "Infant formula ready-to-use, milk-based", "Al", 67, 437, 365, 3442),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r03", "infant-formula-rtf-liquid-non-soy", "Infant formula ready-to-use, milk-based", "Cd", 67, 0.23, 0.11, 1.26),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r03", "infant-formula-rtf-liquid-non-soy", "Infant formula ready-to-use, milk-based", "Pb", 67, 0.9, 0.84, 2.46),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r04", "infant-formula-rtf-liquid-soy-based", "Infant formula ready-to-use, soy-based", "Al", 14, 730, 769, 1121),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r04", "infant-formula-rtf-liquid-soy-based", "Infant formula ready-to-use, soy-based", "Cd", 14, 1.18, 1.06, 2.95),
  paperRow("dabeka2011-canada-infant-formula-lead-cadmium-aluminum", "hmtc_c1_r04", "infant-formula-rtf-liquid-soy-based", "Infant formula ready-to-use, soy-based", "Pb", 14, 1.45, 1.36, 2.1),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Milk-based infant formula powder, pasted Table 3", "Al", 13, 640, 1520, 1018.5, "Pasted Table 3 milk-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Milk-based infant formula powder, pasted Table 3", "Cd", 13, 4.2, 12.3, 7.86, "Pasted Table 3 milk-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Milk-based infant formula powder, pasted Table 3", "Pb", 13, 28.7, 97, 64.2, "Pasted Table 3 milk-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based infant formula powder, pasted Table 3", "Al", 4, 1740, 2720, 2270, "Pasted Table 3 soy-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based infant formula powder, pasted Table 3", "Cd", 4, 8.3, 14.5, 11.7, "Pasted Table 3 soy-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based infant formula powder, pasted Table 3", "Pb", 4, 98.6, 119, 109.4, "Pasted Table 3 soy-based rows; source text has subgroup-count conflict and needs PDF-image QA before final standards math."),
  rangeRow("burrell2010-aluminium-in-infant-formulas", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based formula powder, prepared estimate", "Al", 1, 629, 629),
  rangeRow("chuchu2013-aluminium-in-infant-formulas", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based formula products, prepared estimate", "Al", 2, 656, 756),
]

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const fdaTextIndex = args.indexOf("--fda-formula-text")
  const outIndex = args.indexOf("--out")
  const samplesIndex = args.indexOf("--samples-out")
  const valuesIndex = args.indexOf("--values-out")
  const sourcesIndex = args.indexOf("--sources-out")
  const fdaFormulaText = resolve(
    fdaTextIndex >= 0 ? args[fdaTextIndex + 1] : "/private/tmp/hmi-digest-text/toxic_element_infant_formula_prepared_for_posting_20260324.txt",
  )
  const outPath = resolve(outIndex >= 0 ? args[outIndex + 1] : "data/evidence/category1_formula_concentration_summary.csv")
  const samplesPath = resolve(
    samplesIndex >= 0 ? args[samplesIndex + 1] : "data/evidence/category1_formula_special_survey_samples.csv",
  )
  const valuesPath = resolve(valuesIndex >= 0 ? args[valuesIndex + 1] : "data/evidence/values.jsonl")
  const sourcesPath = resolve(sourcesIndex >= 0 ? args[sourcesIndex + 1] : "data/evidence/sources.jsonl")
  const fdaSamples = parseFdaFormulaSamples(await readFile(fdaFormulaText, "utf8"))
  const rows = [...summarizeFdaFormulaSamples(fdaSamples), ...digestPaperRows]

  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, toCsv(rows), "utf8")
  await writeFile(samplesPath, toCsv(fdaSamples), "utf8")
  await mergeJsonlByValueIdPrefix(valuesPath, "category1-formula-digest-", toValueJsonl(rows))
  await mergeSourcesJsonl(sourcesPath, sourceId, toSourceJsonl())
  console.log(`Parsed ${fdaSamples.length} FDA infant-formula sample/analyte rows`)
  console.log(`Wrote ${rows.length} formula concentration summary rows to ${outPath}`)
  console.log(`Wrote ${fdaSamples.length} sample rows to ${samplesPath}`)
  console.log(`Wrote ${rows.length} value records to ${valuesPath}`)
}

export function parseFdaFormulaSamples(text: string): ParsedFormulaSample[] {
  const rows: ParsedFormulaSample[] = []
  const counts = new Map<FdaMetalSpecies, number>()
  const rowPattern = /^\s*(\d+)\s+(202[3-5])\s+(Infant Formula,.*?)\s+(<LOD|\d+(?:\.\d+)?)\s*$/

  for (let index = 0; index < fdaFormulaSections.length; index += 1) {
    const section = fdaFormulaSections[index]
    const start = text.indexOf(section.marker)
    if (start < 0) throw new Error(`Missing FDA formula section marker: ${section.marker}`)
    const end = index < fdaFormulaSections.length - 1 ? text.indexOf(fdaFormulaSections[index + 1].marker) : text.length
    if (end < 0) throw new Error(`Missing next FDA formula section marker after: ${section.marker}`)

    for (const rawLine of text.slice(start, end).split(/\r?\n/)) {
      const match = rawLine.match(rowPattern)
      if (!match) continue
      const label = normalizeLabel(match[3])
      const mapping = fdaFormulaProductMap[label]
      if (!mapping) throw new Error(`Unmapped FDA formula product label: ${label}`)
      const reportedValue = match[4]
      rows.push({
        source_id: sourceId,
        source_page: sourcePage,
        sample_number: Number(match[1]),
        fiscal_year: Number(match[2]),
        simplified_product_label: label,
        source_analyte: section.sourceAnalyte,
        metal_species: section.metal,
        reported_value: reportedValue,
        numeric_lower_bound_ppb: reportedValue === "<LOD" ? 0 : Number(reportedValue),
        detected: reportedValue !== "<LOD",
        censoring_status: reportedValue === "<LOD" ? "less_than_lod" : "detected",
        ...mapping,
      })
      counts.set(section.metal, (counts.get(section.metal) ?? 0) + 1)
    }
  }

  for (const marker of fdaFormulaSections) {
    const actual = counts.get(marker.metal) ?? 0
    if (actual !== marker.expectedRows) {
      throw new Error(`Expected ${marker.expectedRows} ${marker.metal} rows, parsed ${actual}`)
    }
  }
  return rows
}

function summarizeFdaFormulaSamples(samples: ParsedFormulaSample[]): FormulaRow[] {
  const grouped = new Map<string, ParsedFormulaSample[]>()
  for (const sample of samples) {
    const key = [sample.simplified_product_label, sample.metal_species, sample.source_analyte].join("\t")
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key)?.push(sample)
  }

  return Array.from(grouped.values())
    .sort((a, b) => fdaSummarySortKey(a[0]).localeCompare(fdaSummarySortKey(b[0])))
    .map((group) => {
      const first = group[0]
      const values = group.map((sample) => sample.numeric_lower_bound_ppb).sort((a, b) => a - b)
      const fiscalYears = group.map((sample) => sample.fiscal_year)
      const detectedN = group.filter((sample) => sample.detected).length
      const verdict = evidenceFitnessForFdaGroup(first.row_fit, group.length)
      return {
        source_id: sourceId,
        source_page: sourcePage,
        row_id: first.row_id,
        row_slug: first.row_slug,
        hmtc_row: first.hmtc_row,
        product_label: first.product_label,
        source_product_label: first.simplified_product_label,
        metal_species: first.metal_species,
        basis: "prepared_for_feeding",
        n: group.length,
        detected_n: detectedN,
        lod_n: group.length - detectedN,
        substitution_rule: "<LOD treated as 0 for lower-bound percentile summary; detected values preserved as reported",
        fiscal_year_min: Math.min(...fiscalYears),
        fiscal_year_max: Math.max(...fiscalYears),
        p10_ppb: nearestRank(values, 0.1),
        p50_ppb: nearestRank(values, 0.5),
        p90_ppb: nearestRank(values, 0.9),
        p95_ppb: nearestRank(values, 0.95),
        p100_ppb: nearestRank(values, 1),
        mean_ppb: null,
        median_ppb: null,
        max_ppb: null,
        unit: "ppb",
        statistic_scope: `FDA FY2023-FY2025 infant-formula special survey: ${first.product_label}`,
        evidence_fitness_verdict: verdict,
        review_state: "machine_extracted",
        row_fit: first.row_fit,
        category1_related_rows: first.category1_related_rows,
        notes: notesForFdaGroup(verdict, first),
      }
    })
}

function evidenceFitnessForFdaGroup(rowFit: RowFit, n: number): EvidenceFitnessVerdict {
  if (rowFit !== "direct_category1_row") return "EF-4"
  return n >= 10 ? "EF-2" : "EF-3"
}

function notesForFdaGroup(verdict: EvidenceFitnessVerdict, sample: ParsedFormulaSample): string {
  if (verdict === "EF-2") {
    return "Reconstructable product-label subset; machine extracted from sample-level FDA rows and still needs review for clean-platform inclusion/exclusion."
  }
  if (verdict === "EF-3") {
    return "Small direct product-label subset; percentile values are mechanically reproducible but not stable enough for direct threshold selection."
  }
  return sample.mapping_notes
}

function fdaSummarySortKey(sample: ParsedFormulaSample): string {
  return `${String(metalOrder(sample.metal_species)).padStart(2, "0")}-${String(productOrder(sample.simplified_product_label)).padStart(2, "0")}`
}

function metalOrder(metal: MetalSpecies): number {
  return ["tAs", "Pb", "Cd", "tHg", "Al"].indexOf(metal)
}

function productOrder(label: string): number {
  const index = fdaFormulaProductOrder.indexOf(label as (typeof fdaFormulaProductOrder)[number])
  return index >= 0 ? index : 99
}

function nearestRank(sortedValues: number[], percentile: number): number {
  const index = Math.max(0, Math.ceil(percentile * sortedValues.length) - 1)
  return sortedValues[index]
}

function paperRow(
  sourceIdForRow: string,
  rowId: string,
  rowSlug: string,
  productLabel: string,
  metal: MetalSpecies,
  n: number,
  mean: number | null,
  median: number | null,
  max: number | null,
  note = "Source reports summary statistics but not p90.",
): FormulaRow {
  return {
    source_id: sourceIdForRow,
    source_page: `wiki/sources/${sourceIdForRow}.md`,
    row_id: rowId,
    row_slug: rowSlug,
    hmtc_row: hmtcRowFromRowId(rowId),
    product_label: productLabel,
    source_product_label: productLabel,
    metal_species: metal,
    basis: "as_consumed",
    n,
    detected_n: n,
    lod_n: 0,
    substitution_rule: "not applicable; source-reported summary row",
    fiscal_year_min: null,
    fiscal_year_max: null,
    p10_ppb: null,
    p50_ppb: null,
    p90_ppb: null,
    p95_ppb: null,
    p100_ppb: null,
    mean_ppb: mean,
    median_ppb: median,
    max_ppb: max,
    unit: "ppb",
    statistic_scope: "source-reported formula type summary",
    evidence_fitness_verdict: "EF-3",
    review_state: "machine_extracted",
    row_fit: "literature_summary_row",
    category1_related_rows: rowSlug,
    notes: note,
  }
}

function rangeRow(
  sourceIdForRow: string,
  rowId: string,
  rowSlug: string,
  productLabel: string,
  metal: MetalSpecies,
  n: number,
  min: number,
  max: number,
  mean: number | null = null,
  note = "Range supports source-scope p100/max only; it does not establish p50 or p90.",
): FormulaRow {
  return {
    source_id: sourceIdForRow,
    source_page: `wiki/sources/${sourceIdForRow}.md`,
    row_id: rowId,
    row_slug: rowSlug,
    hmtc_row: hmtcRowFromRowId(rowId),
    product_label: productLabel,
    source_product_label: productLabel,
    metal_species: metal,
    basis: "as_sold_or_source_reported",
    n,
    detected_n: n,
    lod_n: 0,
    substitution_rule: "not applicable; source reports range only",
    fiscal_year_min: null,
    fiscal_year_max: null,
    p10_ppb: null,
    p50_ppb: null,
    p90_ppb: null,
    p95_ppb: null,
    p100_ppb: null,
    mean_ppb: mean,
    median_ppb: null,
    max_ppb: max,
    unit: "ppb",
    statistic_scope: `source-reported range ${min}-${max} ppb`,
    evidence_fitness_verdict: "EF-3",
    review_state: "machine_extracted",
    row_fit: "literature_summary_row",
    category1_related_rows: rowSlug,
    notes: note,
  }
}

function hmtcRowFromRowId(rowId: string): number | null {
  const match = rowId.match(/r(\d+)$/)
  return match ? Number(match[1]) : null
}

function normalizeLabel(label: string): (typeof fdaFormulaProductOrder)[number] {
  return label.trim().replace(/\s+/g, " ") as (typeof fdaFormulaProductOrder)[number]
}

function toCsv<T extends Record<string, unknown>>(rows: T[]): string {
  const headers = Object.keys(rows[0] ?? {}) as (keyof T)[]
  return `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
}

function csvCell(value: unknown): string {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function toValueJsonl(rows: FormulaRow[]): string {
  return `${rows
    .map((row, index) =>
      JSON.stringify({
        value_id: `category1-formula-digest-v${String(index + 1).padStart(4, "0")}`,
        source_id: row.source_id,
        claim_class: "literature_finding",
        metal_species: row.metal_species,
        product_matrix: row.row_slug,
        basis: valueBasis(row.basis),
        statistic_type: row.p90_ppb === null ? row.statistic_scope : "p10_p50_p90_p95_p100_lower_bound",
        original_value: row.p90_ppb ?? row.max_ppb ?? row.p100_ppb,
        original_unit: row.unit,
        normalized_value: row.p90_ppb ?? row.max_ppb ?? row.p100_ppb,
        normalized_unit: "ppb",
        quote_trace: `${row.statistic_scope}; ${row.substitution_rule}; n=${row.n}; detected_n=${row.detected_n}; p50=${row.p50_ppb ?? row.median_ppb ?? ""}; p90=${row.p90_ppb ?? ""}; p100=${row.p100_ppb ?? row.max_ppb ?? ""}; row_fit=${row.row_fit}.`,
        page_number: null,
        table_number: null,
        evidence_fitness_verdict: row.evidence_fitness_verdict,
        public_label: publicLabelForEvidenceFitness(row.evidence_fitness_verdict),
        review_state: row.review_state,
      }),
    )
    .join("\n")}\n`
}

function valueBasis(basis: string): string {
  if (basis === "prepared_for_feeding" || basis === "as_consumed") return "reconstituted"
  return "as_sold"
}

function publicLabelForEvidenceFitness(verdict: EvidenceFitnessVerdict): string {
  if (verdict === "EF-2") return "Reconstructable dataset"
  if (verdict === "EF-4") return "Context only"
  return "Modeled or limited evidence"
}

function toSourceJsonl(): string {
  return `${JSON.stringify({
    source_id: sourceId,
    raw_handle: "Digest/toxic_element_infant_formula_prepared_for_posting_20260324.pdf",
    raw_path: "raw/Digest/toxic_element_infant_formula_prepared_for_posting_20260324.pdf",
    source_page_path: sourcePage,
    cite_key: sourceId,
    source_title: "Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Infant Formula (FY2023-FY2025)",
    source_type: "government_dataset",
    evidence_tier: "A",
    license: "us-government-work",
    sha256: "928429d5c42e7d71ab08f1c2608ee8eac9e0d34df13b4111b3c20f167ed330d0",
    doi: null,
    year: 2026,
    metal_mentions: ["tAs", "Pb", "Cd", "tHg"],
    matrix_mentions: [
      "infant-formula-powder-cow-milk-based",
      "infant-formula-powder-soy-based",
      "infant-formula-ready-to-feed-cow-milk-based",
      "infant-formula-ready-to-feed-soy-based",
      "infant-formula-concentrated-liquid-cow-milk-based",
      "infant-formula-concentrated-liquid-soy-based",
      "infant-formula-powder-amino-acid-based",
      "prepared-for-feeding",
    ],
    statistic_flags: ["sample-level", "p10", "p50", "p90", "p95", "p100", "lod-loq"],
    review_state: "machine_extracted",
    extraction_run_id: "category1-formula-digest",
    extraction_timestamp: "2026-04-29T00:00:00.000Z",
  })}\n`
}

async function mergeJsonlByValueIdPrefix(path: string, prefix: string, generatedJsonl: string): Promise<void> {
  const existing = await readExisting(path)
  const kept = existing
    .split(/\r?\n/)
    .filter(Boolean)
    .filter((line) => {
      try {
        const record = JSON.parse(line) as { value_id?: string }
        return !record.value_id?.startsWith(prefix)
      } catch {
        return true
      }
    })
  const generated = generatedJsonl.split(/\r?\n/).filter(Boolean)
  await writeFile(path, `${[...kept, ...generated].join("\n")}\n`, "utf8")
}

async function mergeSourcesJsonl(path: string, id: string, generatedJsonl: string): Promise<void> {
  const existing = await readExisting(path)
  const kept = existing
    .split(/\r?\n/)
    .filter(Boolean)
    .filter((line) => {
      try {
        const record = JSON.parse(line) as { source_id?: string }
        return record.source_id !== id
      } catch {
        return true
      }
    })
  const generated = generatedJsonl.split(/\r?\n/).filter(Boolean)
  await writeFile(path, `${[...kept, ...generated].join("\n")}\n`, "utf8")
}

async function readExisting(path: string): Promise<string> {
  try {
    return await readFile(path, "utf8")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return ""
    throw error
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main()
}
