// Schemas for the dual-model extractor (HMI-9.8).
//
// One row per (candidate_id, model_slug, prompt_version) lands in
// `data/evidence/model_extractions.jsonl`. The disagreement detector
// (HMI-9.9) reads paired rows and compares axis by axis; the audit barrier
// (HMI-12) consumes the agreed-state subset and populates `model_versions_used`
// on the wiki-edit audit row.
//
// The Zod definition here is the source of truth. The JSON Schema export
// `data/evidence/schema/model-extraction.schema.json` is regenerated from this
// file so cross-language consumers cannot drift.

import { createHash } from "node:crypto"

import { z } from "zod"

// ---------------------------------------------------------------------------
// Provider-side finding row
// ---------------------------------------------------------------------------
//
// Field shape mirrors the existing `data/evidence/schema/value.schema.json`
// row minus the assigned `value_id` and `source_id`, which the audit barrier
// fills in when a finding promotes from the model_extractions stream into
// the canonical evidence register. Same enums on both sides so a finding
// flows through without translation.

export const ClaimClassSchema = z.enum([
  "literature_finding",
  "regulatory_limit",
  "toxicology_reference_value",
  "exposure_model",
])

export const BasisSchema = z
  .enum([
    "wet_weight",
    "dry_weight",
    "as_sold",
    "prepared_for_feeding",
    "as_consumed",
    "reconstituted",
    "not_reported",
  ])
  .nullable()

export const EvidenceFitnessSchema = z.enum([
  "EF-1",
  "EF-2",
  "EF-3",
  "EF-4",
  "EF-5",
  "EF-X",
])

export const PublicLabelSchema = z.enum([
  "Strong occurrence evidence",
  "Reconstructable dataset",
  "Modeled or limited evidence",
  "Context only",
  "Data gap",
  "Rejected/unusable",
])

export const ExtractionFindingSchema = z.object({
  claim_class: ClaimClassSchema,
  metal_species: z.string().nullable(),
  product_matrix: z.string().nullable(),
  basis: BasisSchema,
  statistic_type: z.string().nullable(),
  original_value: z.number().nullable(),
  original_unit: z.string().nullable(),
  normalized_value: z.number().nullable(),
  normalized_unit: z.string().nullable(),
  quote_trace: z.string().min(1, "quote_trace must be a non-empty excerpt from the source"),
  page_number: z.string().nullable(),
  table_number: z.string().nullable(),
  evidence_fitness_verdict: EvidenceFitnessSchema,
  public_label: PublicLabelSchema,
  sampling_country: z.string().regex(/^[A-Z]{2}$/).nullable().optional(),
  sampling_region: z.string().min(1).nullable().optional(),
  lat: z.number().gte(-90).lte(90).nullable().optional(),
  lon: z.number().gte(-180).lte(180).nullable().optional(),
  sampling_year_start: z.number().int().gte(1900).lte(2100).nullable().optional(),
  sampling_year_end: z.number().int().gte(1900).lte(2100).nullable().optional(),
  harvest_year: z.number().int().gte(1900).lte(2100).nullable().optional(),
  practice: z.enum([
    "flooded",
    "awd",
    "upland",
    "organic",
    "conventional",
    "wastewater_irrigated",
    "sludge_amended",
    "mining_proximate",
    "smelter_proximate",
    "volcanic_soil",
    "geogenic_as_groundwater",
    "post_harvest_processing",
    "unknown",
  ]).nullable().optional(),
  geo_precision: z.enum([
    "point",
    "admin2",
    "admin1",
    "country",
    "multi_country",
    "unknown",
  ]).nullable().optional(),
  geo_source: z.string().min(1).nullable().optional(),
  geo_provenance: z.record(z.string(), z.string()).optional(),
})

export type ExtractionFinding = z.infer<typeof ExtractionFindingSchema>

// ---------------------------------------------------------------------------
// Provider response envelope (what the prompt returns)
// ---------------------------------------------------------------------------

export const ProviderVerdictSchema = z.enum(["extracted", "no_finding", "unfit_source"])
export type ProviderVerdict = z.infer<typeof ProviderVerdictSchema>

export const ProviderResponseSchema = z.object({
  verdict: ProviderVerdictSchema,
  findings: z.array(ExtractionFindingSchema),
  notes: z.string().nullable().optional(),
})

export type ProviderResponse = z.infer<typeof ProviderResponseSchema>

// ---------------------------------------------------------------------------
// Per-extraction usage + error envelopes
// ---------------------------------------------------------------------------

export const ExtractionUsageSchema = z.object({
  input_tokens: z.number().int().nonnegative().nullable(),
  output_tokens: z.number().int().nonnegative().nullable(),
  total_tokens: z.number().int().nonnegative().nullable(),
  cost_usd: z.number().nonnegative().nullable(),
})

export type ExtractionUsage = z.infer<typeof ExtractionUsageSchema>

export const ExtractionErrorSchema = z
  .object({
    kind: z.enum([
      "gateway_http",
      "gateway_parse",
      "schema_validation",
      "transport",
      "timeout",
    ]),
    message: z.string(),
    http_status: z.number().int().nullable(),
  })
  .nullable()

export type ExtractionError = z.infer<typeof ExtractionErrorSchema>

// ---------------------------------------------------------------------------
// Top-level row written to `data/evidence/model_extractions.jsonl`
// ---------------------------------------------------------------------------

export const ModelExtractionRowSchema = z.object({
  extraction_id: z.string().min(1),
  candidate_id: z.string().min(1),
  model_slug: z.string().min(1),
  model_version: z.string().min(1),
  prompt_version: z.string().min(1),
  verdict: ProviderVerdictSchema,
  findings: z.array(ExtractionFindingSchema),
  notes: z.string().nullable().optional(),
  response: z.union([z.record(z.string(), z.unknown()), z.string()]),
  started_at: z.string().datetime(),
  finished_at: z.string().datetime(),
  duration_ms: z.number().int().nonnegative(),
  usage: ExtractionUsageSchema,
  error: ExtractionErrorSchema.optional(),
})

export type ModelExtractionRow = z.infer<typeof ModelExtractionRowSchema>

// ---------------------------------------------------------------------------
// Idempotency key
// ---------------------------------------------------------------------------

/**
 * `extraction_id = sha256(candidate_id:model_slug:prompt_version)`.
 *
 * Stable across runs and across providers — the writer dedups on this exact
 * key. A re-run of the same (candidate, model_slug, prompt_version) tuple
 * does not append a second row; the existing row stands until prompt_version
 * is bumped.
 */
export function extractionId(
  candidateId: string,
  modelSlug: string,
  promptVersion: string,
): string {
  return createHash("sha256")
    .update(`${candidateId}:${modelSlug}:${promptVersion}`)
    .digest("hex")
}
