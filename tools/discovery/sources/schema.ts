// DiscoveryCandidate schema — the manifest row every adapter writes.
//
// Hard requirements (from HMI-11):
//   - url MUST be present and non-empty.
//   - retrieval_date MUST be present and ISO-8601.
//   - methodology metadata (study_type, sample_size, methodology_grade) MUST
//     be present. `methodology_grade` is non-null; the other two carry null
//     when the source genuinely doesn't expose them, but the field is always
//     written so consumers can distinguish "unknown" from "absent".
//
// The schema is the single source of truth: TypeScript types are inferred
// from it, and the JSON Schema export is generated from the same Zod object
// so a drifted JSON copy can't sneak in.

import { z } from "zod"

export const DISCOVERY_CANDIDATE_STATUSES = [
  "discovered",
  "fetched",
  "ranked",
  "extracted",
  "routed",
  "rejected",
] as const

export const DiscoveryCandidateStatusSchema = z.enum(DISCOVERY_CANDIDATE_STATUSES)
export type DiscoveryCandidateStatus = z.infer<typeof DiscoveryCandidateStatusSchema>

/**
 * Methodology grade vocabulary. Mirrors the existing evidence-tier ladder used
 * elsewhere in the repo:
 *   - A: peer-reviewed primary study with adequate methodology
 *   - B: peer-reviewed but limited (small n, narrow scope, methodological caveats)
 *   - C: gray literature / preprint / agency report
 *   - unknown: adapter could not determine grade; downstream ranker must treat
 *     as not-yet-graded rather than implicitly low.
 *
 * Hard requirement: methodology_grade is non-null. `unknown` is the explicit
 * carrier for "we don't know yet" — silent absence is not permitted.
 */
export const MethodologyGradeSchema = z.enum(["A", "B", "C", "unknown"])
export type MethodologyGrade = z.infer<typeof MethodologyGradeSchema>

const urlSchema = z
  .string()
  .min(1, "url must be non-empty")
  .url("url must be a valid URL")

const isoDateSchema = z
  .string()
  .min(1, "retrieval_date must be non-empty")
  .refine((value) => !Number.isNaN(Date.parse(value)), {
    message: "retrieval_date must be ISO-8601 parsable",
  })

/**
 * Schema for a *draft* candidate — what the adapter's `search()` yields before
 * the raw artifact has been fetched and persisted. `blob_key` is not yet
 * known, so it is absent at this stage; `status` defaults to `discovered`.
 */
export const DiscoveryCandidateDraftSchema = z.object({
  gap_id: z.string().min(1),
  source_adapter: z.string().min(1),
  external_id: z.string().min(1),
  url: urlSchema,
  title: z.string().min(1),
  abstract: z.string().nullable(),
  doi: z.string().nullable(),
  study_type: z.string().nullable(),
  sample_size: z.number().int().nonnegative().nullable(),
  methodology_grade: MethodologyGradeSchema,
})

export type DiscoveryCandidateDraft = z.infer<typeof DiscoveryCandidateDraftSchema>

/**
 * Schema for the final manifest row written to `data/discovery/candidates.jsonl`.
 * Adds the fields that are only known after `fetch()` runs: `candidate_id`,
 * `retrieval_date`, `blob_key`, `status`.
 *
 * `ranked_score` is set by the HMI-9.7 quality/relevance ranker after fetch.
 * Null until the ranker runs; a number once it has. The field is optional in
 * the schema (defaults to null) so rows written by adapters before ranking
 * round-trip unchanged.
 */
export const DiscoveryCandidateSchema = DiscoveryCandidateDraftSchema.extend({
  candidate_id: z.string().min(1),
  retrieval_date: isoDateSchema,
  blob_key: z.string().min(1),
  status: DiscoveryCandidateStatusSchema,
  ranked_score: z.number().nullable().default(null),
})

export type DiscoveryCandidate = z.infer<typeof DiscoveryCandidateSchema>

/**
 * JSON Schema export for cross-language consumers (Python rankers, future Go
 * services, etc.). Regenerated from the Zod schema on every build so it can't
 * drift.
 */
export function discoveryCandidateJsonSchema(): unknown {
  return z.toJSONSchema(DiscoveryCandidateSchema)
}

export function discoveryCandidateDraftJsonSchema(): unknown {
  return z.toJSONSchema(DiscoveryCandidateDraftSchema)
}

// ---------------------------------------------------------------------------
// Vercel Blob key layout
// ---------------------------------------------------------------------------
//
// Every fetched artifact lands under a deterministic key so the manifest row
// and the Blob object refer to each other unambiguously.
//
//   hmi/raw/<adapter>/<external_id>/source.<ext>
//   hmi/raw/<adapter>/<external_id>/metadata.json
//
// `<adapter>` is the adapter's `name` (e.g. "pubmed", "openalex").
// `<external_id>` is the adapter-native identifier (e.g. PMID, OpenAlex Work ID).
// `<ext>` is the artifact's content type: "pdf", "xml", "html", "json", "bin".
//
// `external_id` and `adapter` are kebab-cased to keep keys URL-safe; anything
// that doesn't match `[a-z0-9.-_]` collapses to `_` so a malformed ID can never
// produce an ambiguous key.

const BLOB_KEY_SAFE = /[^a-z0-9._-]+/g

export function sanitizeBlobSegment(segment: string): string {
  const lowered = segment.toLowerCase().trim()
  if (lowered.length === 0) {
    throw new Error("blob key segment must be non-empty")
  }
  return lowered.replace(BLOB_KEY_SAFE, "_")
}

export function rawArtifactBlobKey(adapter: string, externalId: string, ext: string): string {
  return `hmi/raw/${sanitizeBlobSegment(adapter)}/${sanitizeBlobSegment(externalId)}/source.${sanitizeBlobSegment(ext)}`
}

export function rawMetadataBlobKey(adapter: string, externalId: string): string {
  return `hmi/raw/${sanitizeBlobSegment(adapter)}/${sanitizeBlobSegment(externalId)}/metadata.json`
}

/**
 * Stable dedup key for the JSONL writer: `(source_adapter, external_id)`.
 * Manifest rows with the same dedup key are the same candidate; the writer
 * rejects duplicates without rewriting the file.
 */
export function candidateDedupKey(row: Pick<DiscoveryCandidate, "source_adapter" | "external_id">): string {
  return [row.source_adapter, row.external_id].join("|")
}
