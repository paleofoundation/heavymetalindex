export const canonicalMetals = [
  "Pb",
  "Cd",
  "iAs",
  "tAs",
  "tHg",
  "MeHg",
  "Ni",
  "Al",
  "Sn",
  "Cr-total",
  "Cr-VI",
] as const

export type MetalSpecies = (typeof canonicalMetals)[number]

export const evidenceFitnessVerdicts = ["EF-1", "EF-2", "EF-3", "EF-4", "EF-5", "EF-X"] as const
export type EvidenceFitnessVerdict = (typeof evidenceFitnessVerdicts)[number]

export type PublicEvidenceLabel =
  | "Strong occurrence evidence"
  | "Reconstructable dataset"
  | "Modeled or limited evidence"
  | "Context only"
  | "Data gap"
  | "Rejected/unusable"

const evidenceFitnessPublicLabels: Record<EvidenceFitnessVerdict, PublicEvidenceLabel> = {
  "EF-1": "Strong occurrence evidence",
  "EF-2": "Reconstructable dataset",
  "EF-3": "Modeled or limited evidence",
  "EF-4": "Context only",
  "EF-5": "Data gap",
  "EF-X": "Rejected/unusable",
}

export const reviewStates = [
  "draft",
  "machine_extracted",
  "needs_review",
  "reviewed",
  "approved_for_internal",
  "approved_for_public",
  "published",
  "rejected",
  "superseded",
  "needs_source",
  "needs_unit_review",
  "needs_legal_review",
] as const

export type ReviewState = (typeof reviewStates)[number]

export const claimClasses = [
  "literature_finding",
  "regulatory_limit",
  "toxicology_reference_value",
  "exposure_model",
  "internal_standard_candidate",
  "hmtc_threshold",
  "public_wiki_claim",
  "app_model_assumption",
] as const

export type ClaimClass = (typeof claimClasses)[number]
export type EvidenceTier = "A" | "B" | "C"

export interface Category1Row {
  rowId: string
  slug: string
  label: string
}

export const category1Rows: Category1Row[] = [
  { rowId: "hmtc_c1_r01", slug: "infant-formula-powder-non-soy", label: "Infant Formula Powder, Non-Soy" },
  { rowId: "hmtc_c1_r02", slug: "infant-formula-powder-soy-based", label: "Infant Formula Powder, Soy-Based" },
  {
    rowId: "hmtc_c1_r03",
    slug: "infant-formula-rtf-liquid-non-soy",
    label: "Infant Formula RTF/Liquid, Non-Soy",
  },
  {
    rowId: "hmtc_c1_r04",
    slug: "infant-formula-rtf-liquid-soy-based",
    label: "Infant Formula RTF/Liquid, Soy-Based",
  },
  { rowId: "hmtc_c1_r05", slug: "baby-cereals-dry-non-rice", label: "Baby Cereals, Dry, Non-Rice" },
  { rowId: "hmtc_c1_r06", slug: "baby-cereals-dry-rice-based", label: "Baby Cereals, Dry, Rice-Based" },
  { rowId: "hmtc_c1_r07", slug: "fruit-purees", label: "Fruit Purees" },
  { rowId: "hmtc_c1_r08", slug: "non-root-vegetable-purees", label: "Non-Root Vegetable Purees" },
  { rowId: "hmtc_c1_r09", slug: "root-vegetable-purees", label: "Root Vegetable Purees" },
  { rowId: "hmtc_c1_r10", slug: "meat-and-poultry-purees", label: "Meat and Poultry Purees" },
  { rowId: "hmtc_c1_r11", slug: "fish-containing-baby-foods", label: "Fish-Containing Baby Foods" },
  { rowId: "hmtc_c1_r12", slug: "mixed-meals-non-rice", label: "Mixed Meals, Non-Rice" },
  { rowId: "hmtc_c1_r13", slug: "mixed-meals-rice-containing", label: "Mixed Meals, Rice-Containing" },
  { rowId: "hmtc_c1_r14", slug: "fruit-juice-not-canned", label: "Fruit Juice, Not Canned" },
  { rowId: "hmtc_c1_r15", slug: "teething-and-snacks-non-rice", label: "Teething and Snacks, Non-Rice" },
  { rowId: "hmtc_c1_r16", slug: "teething-and-snacks-rice-based", label: "Teething and Snacks, Rice-Based" },
]

export interface Category1RegisterRow {
  category_id: "hmtc-category-1"
  category_label: "Infant and Child Foods"
  row_id: string
  row_slug: string
  row_label: string
  metal_species: MetalSpecies
  evidence_fitness_verdict: EvidenceFitnessVerdict
  public_label: PublicEvidenceLabel
  review_state: ReviewState
  source_count: number
  notes: string
}

export interface EvidenceFitnessInput {
  hasOccurrenceData: boolean
  hasQuoteTrace: boolean
  metalSpecies: MetalSpecies | null
  matrix: string | null
  basis: string | null
  normalizedUnit: string | null
  statisticType: string | null
  sourceTier: EvidenceTier | null
  sourceReportsDirectPercentile?: boolean
  reconstructableDistribution?: boolean
  rejectionReason?: string | null
}

export interface ClaimRecord {
  claim_class: ClaimClass
  review_state: ReviewState
  source_id?: string | null
  quote_trace?: string | null
}

export function publicLabelForEvidenceFitness(verdict: EvidenceFitnessVerdict): PublicEvidenceLabel {
  return evidenceFitnessPublicLabels[verdict]
}

export function normalizeMetalSpecies(raw: string): MetalSpecies | null {
  const lower = raw.trim().toLowerCase().replace(/\u00b5/g, "u")
  const compact = lower.replace(/[^a-z0-9]/g, "")

  if (compact === "pb" || compact === "lead" || compact === "plumbum") return "Pb"
  if (compact === "cd" || compact === "cadmium") return "Cd"
  if (compact === "ni" || compact === "nickel") return "Ni"
  if (compact === "al" || compact === "aluminum" || compact === "aluminium") return "Al"
  if (compact === "sn" || compact === "tin") return "Sn"

  if (compact === "ias" || lower.includes("inorganic arsenic")) return "iAs"
  if (compact === "tas" || lower.includes("total arsenic")) return "tAs"
  if (compact === "mehg" || compact === "methylmercury" || lower.includes("methyl mercury")) return "MeHg"
  if (compact === "thg" || lower.includes("total mercury")) return "tHg"

  if (
    compact === "crvi" ||
    compact === "cr6" ||
    compact === "cr6plus" ||
    compact === "chromiumvi" ||
    lower.includes("hexavalent chromium")
  ) {
    return "Cr-VI"
  }
  if (compact === "cr" || compact === "chromium" || lower.includes("total chromium")) return "Cr-total"

  return null
}

export function normalizeConcentrationToPpb(value: number, unit: string): number | null {
  if (!Number.isFinite(value)) return null
  const normalizedUnit = unit
    .trim()
    .toLowerCase()
    .replace(/\u00b5/g, "u")
    .replace(/micrograms?/g, "ug")
    .replace(/mcg/g, "ug")
    .replace(/\s+/g, "")

  if (["ppb", "ug/kg", "ugkg", "ng/g", "ngg", "ug/l", "ug/liter", "ugperliter", "ugperl"].includes(normalizedUnit)) {
    return roundPpb(value)
  }
  if (["ppm", "mg/kg", "mgkg", "ug/g", "ugg", "mg/l", "mg/liter", "mgperliter", "mgperl"].includes(normalizedUnit)) {
    return roundPpb(value * 1000)
  }
  return null
}

export function evaluateEvidenceFitness(input: EvidenceFitnessInput): EvidenceFitnessVerdict {
  if (input.rejectionReason) return "EF-X"
  if (!input.hasOccurrenceData) return "EF-5"
  if (input.sourceTier === "C") return "EF-4"
  if (!input.hasQuoteTrace || !input.metalSpecies || !input.matrix || !input.basis || !input.normalizedUnit) {
    return "EF-4"
  }

  const statistic = (input.statisticType ?? "").toLowerCase()
  if (input.sourceReportsDirectPercentile && /^(p10|p90|10th_percentile|90th_percentile)$/.test(statistic)) {
    return "EF-1"
  }
  if (input.reconstructableDistribution) return "EF-2"
  if (/mean|median|max|maximum|range|sd|standard_deviation|iqr|threshold|exceedance/.test(statistic)) {
    return "EF-3"
  }
  return "EF-4"
}

export function claimAllowedForPublic(record: ClaimRecord): boolean {
  if (record.review_state !== "approved_for_public") return false
  if (!record.source_id || !record.quote_trace) return false
  return !["hmtc_threshold", "internal_standard_candidate", "app_model_assumption"].includes(record.claim_class)
}

export function buildCategory1RegisterRows(): Category1RegisterRow[] {
  return category1Rows.flatMap((row) =>
    canonicalMetals.map((metal) => ({
      category_id: "hmtc-category-1" as const,
      category_label: "Infant and Child Foods" as const,
      row_id: row.rowId,
      row_slug: row.slug,
      row_label: row.label,
      metal_species: metal,
      evidence_fitness_verdict: "EF-5" as const,
      public_label: publicLabelForEvidenceFitness("EF-5"),
      review_state: "needs_source" as const,
      source_count: 0,
      notes: "Pilot cell initialized as a data gap until reviewed occurrence evidence is approved.",
    })),
  )
}

export function sourcePagePathForId(sourceId: string): string {
  const slug =
    sourceId
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "source"
  return `wiki/sources/${slug}.md`
}

export function category1RegisterToCsv(rows: Category1RegisterRow[]): string {
  const headers: (keyof Category1RegisterRow)[] = [
    "category_id",
    "category_label",
    "row_id",
    "row_slug",
    "row_label",
    "metal_species",
    "evidence_fitness_verdict",
    "public_label",
    "review_state",
    "source_count",
    "notes",
  ]
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map((header) => csvCell(String(row[header]))).join(","))
  }
  return `${lines.join("\n")}\n`
}

function csvCell(value: string): string {
  if (!/[",\n]/.test(value)) return value
  return `"${value.replace(/"/g, '""')}"`
}

function roundPpb(value: number): number {
  return Number(value.toFixed(6))
}
