// OpenAlex source adapter for the HMI-9 discovery pipeline.
//
// Pulls open-access cross-disciplinary literature via the OpenAlex REST API:
//   search() → GET /works with gap-driven query + is_oa:true filter + cursor pagination
//   fetch()  → GET /works/<id> to resolve OA URL, then download PDF or HTML artifact
//
// Open-access filter is hard at search time:
//   filter=is_oa:true
// Closed-source records must never enter the pipeline; we do not pull and drop them.
// The stable id is the OpenAlex work ID (e.g. "W2741809807"); blob key is
// hmi/raw/openalex/<openalex_id>/source.<ext> + metadata.json.
//
// Polite pool:
//   Without email: anonymous tier, strict rate limits
//   With    email: polite pool via User-Agent and mailto= param (~5× higher throughput)
// Set OPENALEX_POLITE_EMAIL to opt in. Absence is warned loudly so production
// misconfiguration surfaces immediately.
//
// Methodology grade (Cochrane-grade rule — do not infer, only match):
//   review (covers systematic reviews and meta-analyses) → A
//   journal-article / article                            → B
//   Everything else                                      → "unknown"
// cited_by_count is a relevance signal, NOT a methodology signal — it belongs
// in HMI-21 ranking, not here.

import { createHash } from "node:crypto"

import {
  DiscoveryCandidateDraftSchema,
  DiscoveryCandidateSchema,
  rawArtifactBlobKey,
} from "./schema"
import type { DiscoveryCandidate, DiscoveryCandidateDraft, MethodologyGrade } from "./schema"
import type { Gap, SourceAdapter, FetchedDoc } from "./types"

// ---------------------------------------------------------------------------
// OpenAlex REST API
// ---------------------------------------------------------------------------

const OPENALEX_API_BASE = "https://api.openalex.org"

// Fetch 50 works per cursor page — same batch size as PubMed's ESEARCH_RETMAX.
const PER_PAGE = 50

// ---------------------------------------------------------------------------
// Methodology grade vocabulary
// ---------------------------------------------------------------------------

// Grade A: review — OpenAlex groups systematic reviews and meta-analyses under "review".
// Grade B: journal-article / article — primary research.
// Fall through to "unknown" — do not guess from abstract or title.
function methodologyGrade(type: string | null): MethodologyGrade {
  if (!type) return "unknown"
  switch (type) {
    case "review":
      return "A"
    case "journal-article":
    case "article":
      return "B"
    default:
      return "unknown"
  }
}

// ---------------------------------------------------------------------------
// OpenAlex-specific helpers
// ---------------------------------------------------------------------------

// Reconstruct abstract text from OpenAlex's inverted-index encoding.
// Format: { "word": [position, ...], ... }. Sort by position, join with spaces.
function reconstructAbstract(invertedIndex: Record<string, number[]> | null | undefined): string | null {
  if (!invertedIndex) return null
  const positions: [number, string][] = []
  for (const [word, wordPositions] of Object.entries(invertedIndex)) {
    for (const pos of wordPositions) {
      positions.push([pos, word])
    }
  }
  if (positions.length === 0) return null
  positions.sort((a, b) => a[0] - b[0])
  return positions.map(([, word]) => word).join(" ")
}

// Extract the short OpenAlex ID (e.g. "W2741809807") from either the full URL
// "https://openalex.org/W2741809807" or a bare ID that is already short.
function extractOpenAlexId(idOrUrl: string): string {
  return idOrUrl.replace(/^https?:\/\/openalex\.org\//, "")
}

// Build a keyword search string from gap fields, in priority order:
// metal + matrix → page + population → why → gap_id.
// This mirrors the PubMed buildQuery approach so gap-driven searches are consistent
// across adapters. Document here so future adapter authors can copy the pattern.
function buildSearchQuery(gap: Gap): string {
  const parts: string[] = []
  if (gap.metal) parts.push(gap.metal)
  if (gap.matrix) parts.push(gap.matrix)
  if (gap.page) parts.push(gap.page)
  if (gap.population) parts.push(gap.population)
  if (parts.length === 0 && gap.why) parts.push(gap.why)
  return parts.join(" ") || gap.gap_id
}

function deterministicCandidateId(adapter: string, externalId: string): string {
  return createHash("sha1").update(`${adapter}:${externalId}`).digest("hex").slice(0, 16)
}

// ---------------------------------------------------------------------------
// OpenAlex API response types (minimal — only fields we use)
// ---------------------------------------------------------------------------

interface OpenAlexWork {
  id: string
  title: string | null
  type: string | null
  abstract_inverted_index: Record<string, number[]> | null | undefined
  doi: string | null | undefined
  open_access:
    | {
        is_oa: boolean
        oa_url: string | null
      }
    | null
    | undefined
  best_oa_location:
    | {
        pdf_url: string | null
        landing_page_url: string | null
      }
    | null
    | undefined
  cited_by_count: number | null | undefined
}

interface OpenAlexWorksResponse {
  results: OpenAlexWork[]
  meta: {
    count: number
    next_cursor: string | null
  }
}

// ---------------------------------------------------------------------------
// Adapter options
// ---------------------------------------------------------------------------

export interface OpenAlexAdapterOptions {
  /**
   * Email for the OpenAlex polite pool. Defaults to process.env.OPENALEX_POLITE_EMAIL.
   * Without this, the adapter runs on the anonymous tier with much lower rate limits.
   * Absence is warned loudly so production misconfiguration surfaces immediately.
   */
  politeEmail?: string | null

  /** Inject a custom fetch function for tests. Defaults to globalThis.fetch. */
  fetch?: typeof globalThis.fetch
}

// ---------------------------------------------------------------------------
// Adapter factory
// ---------------------------------------------------------------------------

export function createOpenAlexAdapter(opts: OpenAlexAdapterOptions = {}): SourceAdapter {
  const politeEmail =
    opts.politeEmail !== undefined ? opts.politeEmail : (process.env.OPENALEX_POLITE_EMAIL ?? null)
  const fetchFn = opts.fetch ?? globalThis.fetch
  const NAME = "openalex"

  if (!politeEmail) {
    console.warn(
      "[openalex] OPENALEX_POLITE_EMAIL not set — running on anonymous tier with strict rate limits. " +
        "Set OPENALEX_POLITE_EMAIL in the environment for polite-pool throughput.",
    )
  }

  // Build the polite-pool User-Agent header. OpenAlex documentation requires the
  // "mailto:<email>" form for polite-pool membership:
  //   https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication
  function buildHeaders(): HeadersInit {
    const ua = politeEmail ? `HMI-Index/0.1 (mailto:${politeEmail})` : "HMI-Index/0.1"
    return { "User-Agent": ua }
  }

  async function openAlexGet(url: string): Promise<Response> {
    const retryable = new Set([429, 502, 503])
    let res = await fetchFn(url, { headers: buildHeaders() })
    // Anonymous-tier search calls have returned 503 and then 429 during CI.
    // One 1s retry was not enough. Back off a few times before failing the call.
    for (let attempt = 0; attempt < 5 && retryable.has(res.status); attempt++) {
      const waitMs = Math.min(10_000, 1000 * 2 ** attempt)
      await new Promise((r) => setTimeout(r, waitMs))
      res = await fetchFn(url, { headers: buildHeaders() })
    }
    if (!res.ok) {
      throw new Error(`[openalex] API error ${res.status} ${res.statusText}: ${url}`)
    }
    return res
  }

  async function* search(gap: Gap): AsyncIterable<DiscoveryCandidateDraft> {
    const query = buildSearchQuery(gap)
    // Cursor-based pagination: start at "*", advance via meta.next_cursor.
    let cursor: string | null = "*"

    while (cursor !== null) {
      const url = new URL(`${OPENALEX_API_BASE}/works`)
      url.searchParams.set("search", query)
      // is_oa:true is the hard open-access filter — applied at search time so
      // closed-source records never enter the pipeline even transiently.
      url.searchParams.set("filter", "is_oa:true")
      url.searchParams.set("per-page", String(PER_PAGE))
      url.searchParams.set("cursor", cursor)
      // mailto param is the alternative polite-pool signal (complement to User-Agent).
      if (politeEmail) url.searchParams.set("mailto", politeEmail)

      const res = await openAlexGet(url.toString())
      const json = (await res.json()) as OpenAlexWorksResponse

      const works = json?.results ?? []
      if (works.length === 0) break

      for (const work of works) {
        if (!work.id) continue

        const oaId = extractOpenAlexId(work.id)
        const workUrl = `https://openalex.org/${oaId}`
        const title = work.title ?? `OpenAlex work ${oaId}`
        const abstract = reconstructAbstract(work.abstract_inverted_index ?? null)
        const grade = methodologyGrade(work.type ?? null)
        const studyType = work.type ?? null

        // Normalize DOI: strip the "https://doi.org/" prefix so the field holds
        // just the DOI identifier (e.g. "10.1016/j.envpol.2020.115101"), matching
        // the PubMed adapter convention.
        const doi = work.doi ? work.doi.replace(/^https?:\/\/doi\.org\//, "") : null

        yield DiscoveryCandidateDraftSchema.parse({
          gap_id: gap.gap_id,
          source_adapter: NAME,
          external_id: oaId,
          url: workUrl,
          title,
          abstract,
          doi,
          study_type: studyType,
          sample_size: null, // OpenAlex does not expose sample size; downstream must infer.
          methodology_grade: grade,
        })
      }

      cursor = json?.meta?.next_cursor ?? null
    }
  }

  async function fetchDoc(draft: DiscoveryCandidateDraft): Promise<FetchedDoc> {
    // Re-fetch the single work from OpenAlex to resolve the OA PDF or rendered-text URL.
    // Idempotency note: callers that want to avoid re-downloading when the Blob artifact
    // already exists should call writer.has("openalex", oaId) or @vercel/blob head()
    // before calling this method — same pattern as the PubMed adapter.
    const workUrl = `${OPENALEX_API_BASE}/works/${encodeURIComponent(draft.external_id)}`
    const metaRes = await openAlexGet(workUrl)
    const work = (await metaRes.json()) as OpenAlexWork

    // Prefer the direct PDF URL; fall back to the OA landing/rendered-text URL.
    // If neither is set, the candidate is unusable — skip rather than writing a half-row.
    const pdfUrl = work.best_oa_location?.pdf_url ?? null
    const oaUrl = work.open_access?.oa_url ?? null
    const targetUrl = pdfUrl ?? oaUrl

    if (!targetUrl) {
      throw new Error(
        `[openalex] No OA URL for ${draft.external_id} — ` +
          "neither best_oa_location.pdf_url nor open_access.oa_url is set. Skipping.",
      )
    }

    const isPdf = pdfUrl !== null
    const ext = isPdf ? "pdf" : "html"
    const defaultContentType = isPdf ? "application/pdf" : "text/html"

    const docRes = await fetchFn(targetUrl, { headers: buildHeaders() })
    if (!docRes.ok) {
      throw new Error(
        `[openalex] Failed to fetch artifact for ${draft.external_id}: ` +
          `${docRes.status} ${docRes.statusText} — ${targetUrl}`,
      )
    }

    const bytes = new Uint8Array(await docRes.arrayBuffer())

    return {
      draft,
      bytes,
      contentType: docRes.headers.get("content-type") ?? defaultContentType,
      ext,
      retrievedAt: new Date(),
      metadata: {
        openalex_id: draft.external_id,
        work_type: work.type ?? null,
        // cited_by_count stored for context; NOT used in grade — belongs in HMI-21 ranking.
        cited_by_count: work.cited_by_count ?? null,
        source_url: targetUrl,
        pdf_url: pdfUrl,
        oa_url: oaUrl,
      },
    }
  }

  function manifestRow(doc: FetchedDoc): DiscoveryCandidate {
    const blobKey = rawArtifactBlobKey(NAME, doc.draft.external_id, doc.ext)
    return DiscoveryCandidateSchema.parse({
      ...doc.draft,
      candidate_id: deterministicCandidateId(NAME, doc.draft.external_id),
      retrieval_date: doc.retrievedAt.toISOString(),
      blob_key: blobKey,
      status: "discovered",
    })
  }

  return {
    name: NAME,
    license: "open-source-only",
    search,
    fetch: fetchDoc,
    manifestRow,
  }
}
