import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

type MetalSpecies = "tAs" | "Pb" | "Cd" | "tHg"

type ProductMapping = {
  row_id: string
  row_slug: string
  hmtc_row: number | null
  row_label: string
  row_fit: string
  category1_related_rows: string
  mapping_notes: string
}

type ParsedSample = {
  source_id: string
  source_page: string
  fda_sample_id: string
  fiscal_year: number
  baby_food_name: string
  fda_category: string
  source_analyte: string
  metal_species: MetalSpecies
  reported_value: string
  numeric_lower_bound_ppb: number
  detected: boolean
  censoring_status: string
} & ProductMapping

type SummaryRow = {
  source_id: string
  source_page: string
  row_id: string
  row_slug: string
  hmtc_row: number | null
  row_label: string
  fda_category_scope: string
  source_analyte: string
  metal_species: MetalSpecies
  basis: string
  n: number
  detected_n: number
  lod_n: number
  substitution_rule: string
  fiscal_year_min: number
  fiscal_year_max: number
  p10_ppb: number
  p50_ppb: number
  p90_ppb: number
  p95_ppb: number
  p100_ppb: number
  unit: string
  statistic_scope: string
  evidence_fitness_verdict: string
  review_state: string
  row_fit: string
  category1_related_rows: string
  notes: string
}

const sourceId = "fda2024-toxic-elements-baby-food-compliance-2009-2024"
const sourcePage = "wiki/sources/fda2024-toxic-elements-baby-food-compliance-2009-2024.md"

const sectionMarkers = [
  { marker: "Analytical Results for Arsenic", analyte: "As", metal: "tAs" as const, expectedRows: 575 },
  { marker: "Analytical Results for Lead", analyte: "Pb", metal: "Pb" as const, expectedRows: 598 },
  { marker: "Analytical Results for Cadmium", analyte: "Cd", metal: "Cd" as const, expectedRows: 576 },
  { marker: "Analytical Results for Mercury", analyte: "Hg", metal: "tHg" as const, expectedRows: 195 },
]

const hmtcRows: Record<string, Omit<ProductMapping, "row_fit" | "category1_related_rows" | "mapping_notes">> = {
  "baby-cereals-dry-non-rice": {
    row_id: "hmtc_c1_r05",
    row_slug: "baby-cereals-dry-non-rice",
    hmtc_row: 5,
    row_label: "Baby cereals and grain products, dry (non-rice)",
  },
  "baby-cereals-dry-rice-based": {
    row_id: "hmtc_c1_r06",
    row_slug: "baby-cereals-dry-rice-based",
    hmtc_row: 6,
    row_label: "Baby cereals and grain products, dry (rice-based)",
  },
  "fruit-purees": {
    row_id: "hmtc_c1_r07",
    row_slug: "fruit-purees",
    hmtc_row: 7,
    row_label: "Fruit purees",
  },
  "non-root-vegetable-purees": {
    row_id: "hmtc_c1_r08",
    row_slug: "non-root-vegetable-purees",
    hmtc_row: 8,
    row_label: "Non-root vegetable purees",
  },
  "root-vegetable-purees": {
    row_id: "hmtc_c1_r09",
    row_slug: "root-vegetable-purees",
    hmtc_row: 9,
    row_label: "Root-vegetable purees",
  },
  "mixed-meals-non-rice": {
    row_id: "hmtc_c1_r12",
    row_slug: "mixed-meals-non-rice",
    hmtc_row: 12,
    row_label: "Mixed meals, non-rice",
  },
  "mixed-meals-rice-containing": {
    row_id: "hmtc_c1_r13",
    row_slug: "mixed-meals-rice-containing",
    hmtc_row: 13,
    row_label: "Mixed meals, rice-containing",
  },
  "teething-and-snacks-rice-based": {
    row_id: "hmtc_c1_r16",
    row_slug: "teething-and-snacks-rice-based",
    hmtc_row: 16,
    row_label: "Teething and snacks, rice-based",
  },
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const textIndex = args.indexOf("--text")
  const summaryIndex = args.indexOf("--summary-out")
  const samplesIndex = args.indexOf("--samples-out")
  const valuesIndex = args.indexOf("--values-out")
  const sourcesIndex = args.indexOf("--sources-out")
  const textPath = resolve(textIndex >= 0 ? args[textIndex + 1] : "/private/tmp/fda-baby-food-compliance.txt")
  const summaryPath = resolve(
    summaryIndex >= 0 ? args[summaryIndex + 1] : "data/evidence/category1_fda_baby_food_compliance_summary.csv",
  )
  const samplesPath = resolve(
    samplesIndex >= 0 ? args[samplesIndex + 1] : "data/evidence/category1_fda_baby_food_compliance_samples.csv",
  )
  const valuesPath = resolve(valuesIndex >= 0 ? args[valuesIndex + 1] : "data/evidence/values.jsonl")
  const sourcesPath = resolve(sourcesIndex >= 0 ? args[sourcesIndex + 1] : "data/evidence/sources.jsonl")

  const samples = parseComplianceText(await readFile(textPath, "utf8"))
  const summary = summarizeSamples(samples)

  await mkdir(dirname(summaryPath), { recursive: true })
  await writeFile(summaryPath, toCsv(summary), "utf8")
  await writeFile(samplesPath, toCsv(samples), "utf8")
  await mergeJsonlByValueIdPrefix(valuesPath, "category1-fda-baby-food-compliance-", toValueJsonl(summary))
  await mergeSourcesJsonl(sourcesPath, sourceId, toSourceJsonl())

  console.log(`Parsed ${samples.length} FDA baby/young-child food compliance sample rows`)
  console.log(`Wrote ${summary.length} summary rows to ${summaryPath}`)
  console.log(`Wrote ${samples.length} sample rows to ${samplesPath}`)
}

export function parseComplianceText(text: string): ParsedSample[] {
  const rows: ParsedSample[] = []
  let current: (typeof sectionMarkers)[number] | null = null
  const counts = new Map<MetalSpecies, number>()
  const categoryPattern =
    "Dry Infant Cereals|Fruits|Grain-Based Snacks|Mixtures|Vegetables|Yogurts/Custards/Puddings|Yogurts/Custards/Puddi|Yogurts/Custards/Pudd"
  const rowPattern = new RegExp(
    `^\\s*(\\d{6,7})\\s+(\\d{4})\\s+(.+?)\\s+(${categoryPattern})\\s*(<LOD|NDb|\\d+(?:\\.\\d+)?)\\s*$`,
  )

  for (const rawLine of text.split(/\r?\n/)) {
    for (const marker of sectionMarkers) {
      if (rawLine.includes(marker.marker)) current = marker
    }
    if (!current) continue

    const match = rawLine.match(rowPattern)
    if (!match) continue
    const fdaCategory = normalizeFdaCategory(match[4])
    const reportedValue = match[5]
    const mapping = mapToCategory1(match[3].trim(), fdaCategory)
    rows.push({
      source_id: sourceId,
      source_page: sourcePage,
      fda_sample_id: match[1],
      fiscal_year: Number(match[2]),
      baby_food_name: match[3].trim().replace(/\s+/g, " "),
      fda_category: fdaCategory,
      source_analyte: current.analyte,
      metal_species: current.metal,
      reported_value: reportedValue,
      numeric_lower_bound_ppb: reportedValue === "<LOD" || reportedValue === "NDb" ? 0 : Number(reportedValue),
      detected: reportedValue !== "<LOD" && reportedValue !== "NDb",
      censoring_status: reportedValue === "<LOD" ? "less_than_lod" : reportedValue === "NDb" ? "not_detected_xrf" : "detected",
      ...mapping,
    })
    counts.set(current.metal, (counts.get(current.metal) ?? 0) + 1)
  }

  for (const marker of sectionMarkers) {
    const actual = counts.get(marker.metal) ?? 0
    if (actual !== marker.expectedRows) {
      throw new Error(`Expected ${marker.expectedRows} ${marker.metal} rows, parsed ${actual}`)
    }
  }
  return rows
}

function mapToCategory1(name: string, fdaCategory: string): ProductMapping {
  const lower = name.toLowerCase()
  const hasRice = /\brice\b/.test(lower)
  const hasRootVegetable = /\b(carrot|carrots|sweet potato|sweet potatoes|beet|beets|parsnip|parsnips)\b/.test(lower)

  if (fdaCategory === "Dry Infant Cereals") {
    const slug = hasRice ? "baby-cereals-dry-rice-based" : "baby-cereals-dry-non-rice"
    return withFit(
      slug,
      "direct_category1_row",
      slug,
      hasRice
        ? "FDA Dry Infant Cereals row with rice named in the product description."
        : "FDA Dry Infant Cereals row with no rice named in the product description.",
    )
  }

  if (fdaCategory === "Fruits") {
    return withFit("fruit-purees", "direct_category1_row", "fruit-purees", "FDA Fruits category maps to the fruit-puree row as finished baby-food fruit products.")
  }

  if (fdaCategory === "Vegetables") {
    const slug = hasRootVegetable ? "root-vegetable-purees" : "non-root-vegetable-purees"
    return withFit(
      slug,
      "name_split_category1_row",
      slug,
      hasRootVegetable
        ? "FDA Vegetables row contains carrot, sweet potato, beet, or parsnip terms and is mapped to the root-vegetable row."
        : "FDA Vegetables row has no root-vegetable term and is mapped to the non-root vegetable row.",
    )
  }

  if (fdaCategory === "Mixtures") {
    const slug = hasRice ? "mixed-meals-rice-containing" : "mixed-meals-non-rice"
    return withFit(
      slug,
      "name_split_category1_row",
      slug,
      hasRice ? "FDA Mixtures row has rice named in the product description." : "FDA Mixtures row has no rice named in the product description.",
    )
  }

  if (fdaCategory === "Grain-Based Snacks") {
    if (hasRice) {
      return withFit(
        "teething-and-snacks-rice-based",
        "explicit_rice_named_subset",
        "teething-and-snacks-rice-based",
        "FDA Grain-Based Snacks row has rice named in the product description.",
      )
    }
    return {
      row_id: "",
      row_slug: "grain-based-snacks-rice-status-unspecified",
      hmtc_row: null,
      row_label: "Grain-based snacks, rice status not isolated",
      row_fit: "category_context_only",
      category1_related_rows: "teething-and-snacks-non-rice;teething-and-snacks-rice-based",
      mapping_notes:
        "FDA Grain-Based Snacks rows without rice named in the product description are not assumed to be non-rice; they remain broad snack context until ingredient/rice status is verified.",
    }
  }

  return {
    row_id: "",
    row_slug: "yogurts-custards-puddings-out-of-scope",
    hmtc_row: null,
    row_label: "Yogurts, custards, and puddings, not in locked Category 1 row set",
    row_fit: "outside_locked_category1_rows",
    category1_related_rows: "",
    mapping_notes:
      "FDA reports this as a baby-food category, but the current locked HMTc Category 1 product-row list does not include a separate yogurt/custard/pudding row.",
  }
}

function withFit(slug: string, rowFit: string, relatedRows: string, notes: string): ProductMapping {
  return {
    ...hmtcRows[slug],
    row_fit: rowFit,
    category1_related_rows: relatedRows,
    mapping_notes: notes,
  }
}

function normalizeFdaCategory(category: string): string {
  if (category.startsWith("Yogurts/Custards/Pudd")) return "Yogurts/Custards/Puddings"
  return category
}

function summarizeSamples(samples: ParsedSample[]): SummaryRow[] {
  const grouped = new Map<string, ParsedSample[]>()
  for (const sample of samples) {
    const key = [sample.row_slug, sample.fda_category, sample.metal_species, sample.source_analyte].join("\t")
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key)?.push(sample)
  }

  return Array.from(grouped.values())
    .sort((a, b) => summarySortKey(a[0]).localeCompare(summarySortKey(b[0])))
    .map((group) => {
      const first = group[0]
      const values = group.map((sample) => sample.numeric_lower_bound_ppb).sort((a, b) => a - b)
      const fiscalYears = group.map((sample) => sample.fiscal_year)
      const detectedN = group.filter((sample) => sample.detected).length
      const verdict =
        first.row_fit === "category_context_only" || first.row_fit === "outside_locked_category1_rows"
          ? "EF-4"
          : group.length >= 10
            ? "EF-2"
            : "EF-3"
      return {
        source_id: sourceId,
        source_page: sourcePage,
        row_id: first.row_id,
        row_slug: first.row_slug,
        hmtc_row: first.hmtc_row,
        row_label: first.row_label,
        fda_category_scope: first.fda_category,
        source_analyte: first.source_analyte,
        metal_species: first.metal_species,
        basis: "as_sold",
        n: group.length,
        detected_n: detectedN,
        lod_n: group.length - detectedN,
        substitution_rule: "<LOD and ND treated as 0 for lower-bound percentile summary; detected values preserved as reported",
        fiscal_year_min: Math.min(...fiscalYears),
        fiscal_year_max: Math.max(...fiscalYears),
        p10_ppb: nearestRank(values, 0.1),
        p50_ppb: nearestRank(values, 0.5),
        p90_ppb: nearestRank(values, 0.9),
        p95_ppb: nearestRank(values, 0.95),
        p100_ppb: nearestRank(values, 1),
        unit: "ppb",
        statistic_scope: `FDA FY2009-FY2024 baby/young-child compliance samples: ${first.row_label}`,
        evidence_fitness_verdict: verdict,
        review_state: "machine_extracted",
        row_fit: first.row_fit,
        category1_related_rows: first.category1_related_rows,
        notes:
          verdict === "EF-2"
            ? "Reconstructable sample-level subset; machine extracted and needs review before standards use."
            : verdict === "EF-3"
              ? "Small or narrowed source subset; supports source-scope context but not direct threshold selection without review."
              : first.mapping_notes,
      }
    })
}

function summarySortKey(sample: ParsedSample): string {
  return `${String(sample.hmtc_row ?? 99).padStart(2, "0")}-${sample.row_slug}-${sample.metal_species}`
}

function nearestRank(sortedValues: number[], percentile: number): number {
  const index = Math.max(0, Math.ceil(percentile * sortedValues.length) - 1)
  return sortedValues[index]
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

function toValueJsonl(rows: SummaryRow[]): string {
  return `${rows
    .map((row, index) =>
      JSON.stringify({
        value_id: `category1-fda-baby-food-compliance-v${String(index + 1).padStart(4, "0")}`,
        source_id: row.source_id,
        claim_class: "literature_finding",
        metal_species: row.metal_species,
        product_matrix: row.row_slug,
        basis: row.basis,
        statistic_type: "p10_p50_p90_p95_p100_lower_bound",
        original_value: row.p90_ppb,
        original_unit: row.unit,
        normalized_value: row.p90_ppb,
        normalized_unit: "ppb",
        quote_trace: `${row.statistic_scope}; ${row.substitution_rule}; n=${row.n}; detected_n=${row.detected_n}; FY${row.fiscal_year_min}-FY${row.fiscal_year_max}; p50=${row.p50_ppb}; p90=${row.p90_ppb}; p100=${row.p100_ppb}.`,
        page_number: null,
        table_number: null,
        evidence_fitness_verdict: row.evidence_fitness_verdict,
        public_label:
          row.evidence_fitness_verdict === "EF-2"
            ? "Reconstructable dataset"
            : row.evidence_fitness_verdict === "EF-4"
              ? "Context only"
              : "Modeled or limited evidence",
        review_state: row.review_state,
      }),
    )
    .join("\n")}\n`
}

function toSourceJsonl(): string {
  return `${JSON.stringify({
    source_id: sourceId,
    raw_handle: "Digest/TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf",
    raw_path: "raw/Digest/TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf",
    source_page_path: sourcePage,
    cite_key: sourceId,
    source_title:
      "Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)",
    source_type: "government_dataset",
    evidence_tier: "A",
    license: "us-government-work",
    sha256: "2a295ce054da90d9be2a93a81830840f599c91bfb076b5f04a0a85dba5c055fb",
    doi: null,
    year: 2024,
    metal_mentions: ["tAs", "Pb", "Cd", "tHg"],
    matrix_mentions: [
      "dry-infant-cereals",
      "fruits",
      "grain-based-snacks",
      "mixtures",
      "vegetables",
      "yogurts-custards-puddings",
    ],
    statistic_flags: ["sample-level", "p10", "p50", "p90", "p95", "p100", "lod-loq"],
    review_state: "machine_extracted",
    extraction_run_id: "category1-fda-baby-food-compliance",
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
