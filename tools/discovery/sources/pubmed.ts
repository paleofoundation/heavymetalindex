// PubMed source adapter for the HMI-9 discovery pipeline.
//
// Pulls open-access biomedical literature via NCBI E-utilities:
//   search() → ESearch (PMIDs) + EFetch batch (XML metadata for drafts)
//   fetch()  → EFetch single PMID (full XML artifact)
//
// Open-access filter applied at search time:
//   &term=...AND+pubmed+pmc+open+access[filter]
// This restricts results to PMC OA records so paywalled articles never
// enter the pipeline. Stable id is PMID; Blob key is
// hmi/raw/pubmed/<pmid>/source.xml + metadata.json.
//
// Rate limits (NCBI policy):
//   Without NCBI_API_KEY: ~3 req/s
//   With    NCBI_API_KEY: ~10 req/s
// The adapter does not proactively sleep — the calling queue controls overall
// throughput. 429 responses are retried once after 1 s.
//
// Methodology grade (Cochrane-grade rule — do not infer, only match):
//   RCT / Systematic Review / Meta-Analysis → A
//   Observational / Cohort / Case-Control / Cross-Sectional → B
//   Everything else → "unknown"

import { createHash } from "node:crypto"

import {
  DiscoveryCandidateDraftSchema,
  DiscoveryCandidateSchema,
  rawArtifactBlobKey,
} from "./schema"
import type { DiscoveryCandidate, DiscoveryCandidateDraft, MethodologyGrade } from "./schema"
import type { Gap, SourceAdapter, FetchedDoc } from "./types"

// ---------------------------------------------------------------------------
// NCBI E-utilities endpoints
// ---------------------------------------------------------------------------

const ESEARCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
const EFETCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi"

// The pmc open access[filter] qualifier restricts ESearch to PMC OA articles.
// Use this exact string; whitespace placement matters for the NCBI query parser.
const OA_FILTER = "pubmed pmc open access[filter]"

// Maximum PMIDs to request per ESearch call. 50 is a safe batch size that
// keeps the follow-up EFetch URL within NCBI's length limits.
const ESEARCH_RETMAX = 50

// ---------------------------------------------------------------------------
// Methodology grade vocabulary
// ---------------------------------------------------------------------------

// Grade A: RCT / systematic review / meta-analysis
// Grade B: observational, cohort, case-control, cross-sectional
// Fall through to "unknown" for everything else — do not guess.
const GRADE_A_TYPES = new Set([
  "Randomized Controlled Trial",
  "Systematic Review",
  "Meta-Analysis",
])

const GRADE_B_TYPES = new Set([
  "Observational Study",
  "Cohort Study",
  "Case-Control Study",
  "Cross-Sectional Study",
  "Epidemiologic Study",
  "Surveillance",
])

function methodologyGrade(pubTypes: string[]): MethodologyGrade {
  for (const t of pubTypes) {
    if (GRADE_A_TYPES.has(t)) return "A"
  }
  for (const t of pubTypes) {
    if (GRADE_B_TYPES.has(t)) return "B"
  }
  return "unknown"
}

// ---------------------------------------------------------------------------
// Minimal XML helpers (no dependency on a DOM library)
// ---------------------------------------------------------------------------

// Extract text content from all occurrences of <tag>…</tag>, stripping inner
// child tags. PubMed XML is machine-generated and structurally stable.
function xmlAll(xml: string, tag: string): string[] {
  const out: string[] = []
  const re = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)</${tag}>`, "g")
  let m: RegExpExecArray | null
  while ((m = re.exec(xml)) !== null) {
    out.push(m[1].replace(/<[^>]+>/g, "").trim())
  }
  return out
}

function xmlFirst(xml: string, tag: string): string | null {
  const results = xmlAll(xml, tag)
  return results.length > 0 ? results[0] : null
}

// Extract n=<int> from abstract text for sample size. Falls back to null when
// the pattern is absent or ambiguous. Only matches unambiguous "n = 123" /
// "n=123" forms; compound expressions (n=40–60) are ignored.
function parseSampleSize(abstract: string | null): number | null {
  if (!abstract) return null
  const m = abstract.match(/\bn\s*=\s*([0-9,]+)(?!\s*[-–])/i)
  if (!m) return null
  const n = parseInt(m[1].replace(/,/g, ""), 10)
  return isNaN(n) || n <= 0 ? null : n
}

function deterministicCandidateId(adapter: string, externalId: string): string {
  return createHash("sha1").update(`${adapter}:${externalId}`).digest("hex").slice(0, 16)
}

// ---------------------------------------------------------------------------
// NCBI API helpers
// ---------------------------------------------------------------------------

async function ncbiGet(
  url: string,
  params: URLSearchParams,
  fetchFn: typeof globalThis.fetch,
): Promise<Response> {
  const fullUrl = `${url}?${params}`
  let res = await fetchFn(fullUrl)
  if (res.status === 429) {
    // Single retry on rate-limit. Caller queue owns overall throughput; this
    // handles transient bursts without stalling the pipeline indefinitely.
    await new Promise((r) => setTimeout(r, 1000))
    res = await fetchFn(fullUrl)
  }
  if (!res.ok) {
    throw new Error(`[pubmed] NCBI API error ${res.status} ${res.statusText}: ${fullUrl}`)
  }
  return res
}

// Build a PubMed query from gap fields. Prefers explicit metal + matrix over
// free-text gap_id so MeSH terms have a chance to resolve.
function buildQuery(gap: Gap): string {
  const parts: string[] = []
  if (gap.metal) parts.push(gap.metal)
  if (gap.matrix) parts.push(gap.matrix)
  if (gap.page) parts.push(gap.page)
  if (gap.population) parts.push(gap.population)
  if (parts.length === 0 && gap.why) parts.push(gap.why)
  return parts.join(" ") || gap.gap_id
}

// ---------------------------------------------------------------------------
// Adapter options
// ---------------------------------------------------------------------------

export interface PubMedAdapterOptions {
  /**
   * NCBI API key. Defaults to process.env.NCBI_API_KEY.
   * Without a key: ~3 req/s. With a key: ~10 req/s.
   */
  apiKey?: string | null

  /**
   * Inject a custom fetch function for tests. Defaults to globalThis.fetch.
   * Tests should pass a mock that returns fixtures rather than hitting NCBI.
   * The live smoke test (pubmed.test.ts) uses the default (real network).
   */
  fetch?: typeof globalThis.fetch
}

// ---------------------------------------------------------------------------
// Adapter factory
// ---------------------------------------------------------------------------

export function createPubMedAdapter(opts: PubMedAdapterOptions = {}): SourceAdapter {
  const apiKey = opts.apiKey !== undefined ? opts.apiKey : (process.env.NCBI_API_KEY ?? null)
  const fetchFn = opts.fetch ?? globalThis.fetch
  const NAME = "pubmed"

  if (!apiKey) {
    console.warn(
      "[pubmed] NCBI_API_KEY not set — rate limited to ~3 req/s (unauthenticated). " +
        "Set NCBI_API_KEY in the environment for ~10 req/s.",
    )
  }

  function baseParams(): URLSearchParams {
    const p = new URLSearchParams()
    p.set("db", "pubmed")
    if (apiKey) p.set("api_key", apiKey)
    return p
  }

  async function* search(gap: Gap): AsyncIterable<DiscoveryCandidateDraft> {
    const query = buildQuery(gap)

    // ESearch: get PMIDs matching the gap query + OA filter
    const searchParams = baseParams()
    searchParams.set("term", `${query} AND ${OA_FILTER}`)
    searchParams.set("retmax", String(ESEARCH_RETMAX))
    searchParams.set("retmode", "json")

    const searchRes = await ncbiGet(ESEARCH_URL, searchParams, fetchFn)
    const searchJson = (await searchRes.json()) as {
      esearchresult?: { idlist?: string[] }
    }
    const pmids: string[] = searchJson?.esearchresult?.idlist ?? []

    if (pmids.length === 0) return

    // EFetch batch: pull full XML for all PMIDs to extract draft metadata.
    // This is a single NCBI round-trip for the whole result set.
    const fetchParams = baseParams()
    fetchParams.set("id", pmids.join(","))
    fetchParams.set("rettype", "xml")
    fetchParams.set("retmode", "xml")

    const fetchRes = await ncbiGet(EFETCH_URL, fetchParams, fetchFn)
    const xmlText = await fetchRes.text()

    // Split the PubmedArticleSet into individual article blocks
    const articleBlocks = xmlText.match(/<PubmedArticle>[\s\S]*?<\/PubmedArticle>/g) ?? []

    for (const block of articleBlocks) {
      const pmid = xmlFirst(block, "PMID")
      if (!pmid) continue

      const title = xmlFirst(block, "ArticleTitle") ?? `PubMed article ${pmid}`
      const abstractText = xmlFirst(block, "AbstractText")
      const pubTypes = xmlAll(block, "PublicationType")
      const grade = methodologyGrade(pubTypes)
      const studyType = pubTypes[0] ?? null
      const sampleSize = parseSampleSize(abstractText)

      // DOI lives in <ArticleIdList> as <ArticleId IdType="doi">
      const doiMatch = block.match(/<ArticleId IdType="doi">([^<]+)<\/ArticleId>/)
      const doi = doiMatch ? doiMatch[1].trim() : null

      const url = `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`

      yield DiscoveryCandidateDraftSchema.parse({
        gap_id: gap.gap_id,
        source_adapter: NAME,
        external_id: pmid,
        url,
        title,
        abstract: abstractText,
        doi,
        study_type: studyType,
        sample_size: sampleSize,
        methodology_grade: grade,
      })
    }
  }

  async function fetchDoc(draft: DiscoveryCandidateDraft): Promise<FetchedDoc> {
    // Idempotency note: the writer's dedup on (source_adapter, external_id)
    // prevents duplicate manifest rows. Callers that want to avoid re-fetching
    // from NCBI when the Blob artifact already exists should check
    // writer.has("pubmed", pmid) or use @vercel/blob head() before calling
    // this method.

    const fetchParams = baseParams()
    fetchParams.set("id", draft.external_id)
    fetchParams.set("rettype", "xml")
    fetchParams.set("retmode", "xml")

    const res = await ncbiGet(EFETCH_URL, fetchParams, fetchFn)
    const xmlText = await res.text()

    const pubTypes = xmlAll(xmlText, "PublicationType")

    return {
      draft,
      bytes: new TextEncoder().encode(xmlText),
      contentType: "application/xml",
      ext: "xml",
      retrievedAt: new Date(),
      metadata: {
        pmid: draft.external_id,
        publication_types: pubTypes,
        ncbi_db: "pubmed",
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
