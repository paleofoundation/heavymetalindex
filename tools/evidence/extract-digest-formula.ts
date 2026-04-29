import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

type FormulaRow = {
  source_id: string
  source_page: string
  row_id: string
  row_slug: string
  product_label: string
  metal_species: string
  basis: string
  n: number
  detected_n: number
  lod_n: number
  substitution_rule: string
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
  evidence_fitness_verdict: string
  review_state: string
  notes: string
}

const fdaFormulaSections = [
  ["tAs", "Arsenic Concentration"],
  ["Pb", "Lead Concentration"],
  ["Cd", "Cadmium Concentration"],
  ["tHg", "Mercury Concentration"],
] as const

const fdaFormulaProductMap: Record<string, Pick<FormulaRow, "row_id" | "row_slug" | "product_label">> = {
  "Infant Formula, Powder, Cow Milk-based": {
    row_id: "hmtc_c1_r01",
    row_slug: "infant-formula-powder-non-soy",
    product_label: "Infant formula, powder, cow milk-based",
  },
  "Infant Formula, Powder, Soy-based": {
    row_id: "hmtc_c1_r02",
    row_slug: "infant-formula-powder-soy-based",
    product_label: "Infant formula, powder, soy-based",
  },
  "Infant Formula, Ready-to-Feed Liquid, Cow Milk-based": {
    row_id: "hmtc_c1_r03",
    row_slug: "infant-formula-rtf-liquid-non-soy",
    product_label: "Infant formula, ready-to-feed liquid, cow milk-based",
  },
  "Infant Formula, Ready-to-Feed Liquid, Soy-based": {
    row_id: "hmtc_c1_r04",
    row_slug: "infant-formula-rtf-liquid-soy-based",
    product_label: "Infant formula, ready-to-feed liquid, soy-based",
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
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Imported infant milk-based and soy-based formula powders; not row-split", "Al", 17, 1070, 2170),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Imported infant milk-based and soy-based formula powders; not row-split", "Cd", 17, 10.5, 34.4),
  rangeRow("kazi2009-toxic-elements-in-infant-formulae", "hmtc_c1_r01", "infant-formula-powder-non-soy", "Imported infant milk-based and soy-based formula powders; not row-split", "Pb", 17, 28.7, 119),
  rangeRow("burrell2010-aluminium-in-infant-formulas", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based formula powder, prepared estimate", "Al", 1, 629, 629),
  rangeRow("chuchu2013-aluminium-in-infant-formulas", "hmtc_c1_r02", "infant-formula-powder-soy-based", "Soy-based formula products, prepared estimate", "Al", 2, 656, 756),
]

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const fdaTextIndex = args.indexOf("--fda-formula-text")
  const outIndex = args.indexOf("--out")
  const valuesIndex = args.indexOf("--values-out")
  const fdaFormulaText = resolve(
    fdaTextIndex >= 0 ? args[fdaTextIndex + 1] : "/private/tmp/hmi-digest-text/toxic_element_infant_formula_prepared_for_posting_20260324.txt",
  )
  const outPath = resolve(outIndex >= 0 ? args[outIndex + 1] : "data/evidence/category1_formula_concentration_summary.csv")
  const valuesPath = resolve(valuesIndex >= 0 ? args[valuesIndex + 1] : "data/evidence/values.jsonl")
  const rows = [...extractFdaFormulaRows(await readFile(fdaFormulaText, "utf8")), ...digestPaperRows]

  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, toCsv(rows), "utf8")
  await writeFile(valuesPath, toValueJsonl(rows), "utf8")
  console.log(`Wrote ${rows.length} formula concentration summary rows to ${outPath}`)
  console.log(`Wrote ${rows.length} value records to ${valuesPath}`)
}

function extractFdaFormulaRows(text: string): FormulaRow[] {
  const rows: FormulaRow[] = []
  for (let index = 0; index < fdaFormulaSections.length; index += 1) {
    const [metal, marker] = fdaFormulaSections[index]
    const start = text.indexOf(marker)
    if (start < 0) throw new Error(`Missing FDA formula section marker: ${marker}`)
    const end = index < fdaFormulaSections.length - 1 ? text.indexOf(fdaFormulaSections[index + 1][1]) : text.length
    const section = text.slice(start, end)
    const grouped = new Map<string, { value: number; detected: boolean }[]>()

    for (const line of section.split(/\r?\n/)) {
      const match = line.match(/^\s*(\d+)\s+(202[3-5])\s+(Infant Formula,.*?)\s+(<LOD|\d+(?:\.\d+)?)\s*$/)
      if (!match) continue
      const label = match[3].trim()
      if (!fdaFormulaProductMap[label]) continue
      const value = match[4] === "<LOD" ? 0 : Number(match[4])
      const detected = match[4] !== "<LOD"
      if (!grouped.has(label)) grouped.set(label, [])
      grouped.get(label)?.push({ value, detected })
    }

    for (const [label, values] of grouped) {
      const product = fdaFormulaProductMap[label]
      const sorted = values.map((value) => value.value).sort((a, b) => a - b)
      rows.push({
        source_id: "fda2026-infant-formula-toxic-elements-special-survey",
        source_page: "wiki/sources/fda2026-infant-formula-toxic-elements-special-survey.md",
        ...product,
        metal_species: metal,
        basis: "prepared_for_feeding",
        n: values.length,
        detected_n: values.filter((value) => value.detected).length,
        lod_n: values.filter((value) => !value.detected).length,
        substitution_rule: "<LOD treated as 0 for lower-bound percentile summary",
        p10_ppb: nearestRank(sorted, 0.1),
        p50_ppb: nearestRank(sorted, 0.5),
        p90_ppb: nearestRank(sorted, 0.9),
        p95_ppb: nearestRank(sorted, 0.95),
        p100_ppb: nearestRank(sorted, 1),
        mean_ppb: null,
        median_ppb: null,
        max_ppb: null,
        unit: "ppb",
        statistic_scope: "FDA FY2023-FY2025 infant-formula special-survey product-label subset",
        evidence_fitness_verdict: values.length >= 10 ? "EF-2" : "EF-3",
        review_state: "machine_extracted",
        notes:
          values.length >= 10
            ? "Reconstructable product-label subset; still needs review for clean-platform inclusion/exclusion."
            : "Small product-label subset; percentile values are mechanically reproducible but not stable enough for direct threshold selection.",
      })
    }
  }
  return rows
}

function nearestRank(sortedValues: number[], percentile: number): number | null {
  if (!sortedValues.length) return null
  const index = Math.max(0, Math.ceil(percentile * sortedValues.length) - 1)
  return sortedValues[index]
}

function paperRow(
  sourceId: string,
  rowId: string,
  rowSlug: string,
  productLabel: string,
  metal: string,
  n: number,
  mean: number | null,
  median: number | null,
  max: number | null,
  note = "Source reports summary statistics but not p90.",
): FormulaRow {
  return {
    source_id: sourceId,
    source_page: `wiki/sources/${sourceId}.md`,
    row_id: rowId,
    row_slug: rowSlug,
    product_label: productLabel,
    metal_species: metal,
    basis: "as_consumed",
    n,
    detected_n: n,
    lod_n: 0,
    substitution_rule: "not applicable; source-reported summary row",
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
    notes: note,
  }
}

function rangeRow(
  sourceId: string,
  rowId: string,
  rowSlug: string,
  productLabel: string,
  metal: string,
  n: number,
  min: number,
  max: number,
): FormulaRow {
  return {
    source_id: sourceId,
    source_page: `wiki/sources/${sourceId}.md`,
    row_id: rowId,
    row_slug: rowSlug,
    product_label: productLabel,
    metal_species: metal,
    basis: "as_sold_or_source_reported",
    n,
    detected_n: n,
    lod_n: 0,
    substitution_rule: "not applicable; source reports range only",
    p10_ppb: null,
    p50_ppb: null,
    p90_ppb: null,
    p95_ppb: null,
    p100_ppb: null,
    mean_ppb: null,
    median_ppb: null,
    max_ppb: max,
    unit: "ppb",
    statistic_scope: `source-reported range ${min}-${max} ppb`,
    evidence_fitness_verdict: "EF-3",
    review_state: "machine_extracted",
    notes: "Range supports source-scope p100/max only; it does not establish p50 or p90.",
  }
}

function toCsv(rows: FormulaRow[]): string {
  const headers = Object.keys(rows[0]) as (keyof FormulaRow)[]
  return `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
}

function csvCell(value: unknown): string {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n]/.test(text)) return text
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
        basis: row.basis === "prepared_for_feeding" ? "reconstituted" : row.basis === "as_consumed" ? "reconstituted" : "as_sold",
        statistic_type: row.p90_ppb === null ? row.statistic_scope : "p10_p50_p90_p95_p100",
        original_value: row.p90_ppb ?? row.max_ppb,
        original_unit: row.unit,
        normalized_value: row.p90_ppb ?? row.max_ppb,
        normalized_unit: "ppb",
        quote_trace: `${row.statistic_scope}; ${row.substitution_rule}; n=${row.n}; detected_n=${row.detected_n}; p50=${row.p50_ppb ?? ""}; p90=${row.p90_ppb ?? ""}; p100=${row.p100_ppb ?? row.max_ppb ?? ""}.`,
        page_number: null,
        table_number: null,
        evidence_fitness_verdict: row.evidence_fitness_verdict,
        public_label: row.evidence_fitness_verdict === "EF-2" ? "Reconstructable dataset" : "Modeled or limited evidence",
        review_state: row.review_state,
      }),
    )
    .join("\n")}\n`
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main()
}
