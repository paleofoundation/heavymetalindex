// Source adapter contract for the HMI-9 discovery pipeline.
//
// Every external corpus (PubMed, OpenAlex, later FDA/EFSA, etc.) must implement
// `SourceAdapter`. The contract is the only thing the ranker and dual-model
// extractor depend on; new sources drop in without rewriting the spine.
//
// Provenance rule: a candidate is only admissible downstream once the adapter
// has produced a manifest row in `data/discovery/candidates.jsonl` and a raw
// artifact in Vercel Blob under `hmi/raw/<adapter>/<external_id>/…`. The Zod
// schema in `./schema.ts` enforces that every manifest row carries URL,
// retrieval_date, and methodology metadata.

import type {
  DiscoveryCandidate,
  DiscoveryCandidateDraft,
  DiscoveryCandidateStatus,
} from "./schema"

export type { DiscoveryCandidate, DiscoveryCandidateDraft, DiscoveryCandidateStatus }

/**
 * Gap describes a coverage hole the discovery loop is trying to fill.
 *
 * Fields mirror the `data/gaps/open_gaps.jsonl` schema in HMI-9.4 so adapters
 * can be tested against the gap detector's output without a separate fixture
 * type. Only `gap_id` is hard-required at this stage; the rest are advisory
 * query inputs that adapters use to build their search.
 */
export interface Gap {
  gap_id: string
  page?: string
  metal?: string
  matrix?: string
  population?: string
  why?: string
}

/**
 * FetchedDoc is the result of pulling a candidate's full payload from the
 * external source. `bytes` is the raw artifact (PDF, XML, HTML) that gets
 * persisted to Vercel Blob verbatim. `metadata` is everything the adapter
 * extracted in flight — title, abstract, methodology fields — and must be
 * sufficient for `manifestRow()` to produce a valid `DiscoveryCandidate`.
 *
 * Keeping `bytes` and `metadata` separate is what lets the Blob upload happen
 * before the manifest row is written. If the upload fails, the manifest row
 * is never written, and idempotency keeps the next retry honest.
 */
export interface FetchedDoc {
  draft: DiscoveryCandidateDraft
  bytes: Uint8Array
  contentType: string
  ext: string
  retrievedAt: Date
  metadata: Record<string, unknown>
}

/**
 * Licensing posture for the adapter. v1 hard-codes `open-source-only`: HMI
 * ingests only sources whose license permits storing the raw artifact, so the
 * Blob layer has unambiguous provenance even if upstream withdraws the source.
 */
export type AdapterLicense = "open-source-only"

export interface SourceAdapter {
  /** Stable adapter identifier; matches `source_adapter` on the manifest row. */
  name: string

  /** v1 ingests only open-source / OA material. */
  license: AdapterLicense

  /**
   * Yields candidate drafts for a given gap. Adapters page internally; callers
   * consume as long as they want and stop.
   */
  search(gap: Gap): AsyncIterable<DiscoveryCandidateDraft>

  /**
   * Pulls the full payload for a candidate draft. The returned `FetchedDoc`
   * carries the bytes that will be persisted to Blob and the metadata the
   * manifest row will be built from.
   */
  fetch(draft: DiscoveryCandidateDraft): Promise<FetchedDoc>

  /**
   * Builds the canonical manifest row from a fetched document. The returned
   * row must round-trip through the Zod schema; the writer rejects rows that
   * don't.
   */
  manifestRow(doc: FetchedDoc): DiscoveryCandidate
}
