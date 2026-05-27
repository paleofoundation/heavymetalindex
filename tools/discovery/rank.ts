// Quality/relevance ranker for the HMI-9 discovery pipeline.
//
// Pure function from DiscoveryCandidate (+ optional adapter-specific signals)
// to { score, why[] }. All weights live in `rank-weights.json` — no magic
// numbers in this file. The weights config is the methodology audit trail per
// Governing Principle 4 (legal defensibility). See `rank-methodology.md` for
// the locked rationale.
//
// The score is a transparent linear sum of four contributions:
//   peer_review + methodology_grade + study_type + sample_size_log
//
// Each contribution is recorded in `why[]` so the rationale for a given score
// is inspectable without re-running the ranker. The ranker does not filter;
// it orders. The extractor (HMI-9.8) consumes `ranked_score` descending.

import { access, mkdir, readFile, rename, writeFile } from "node:fs/promises"
import { dirname } from "node:path"

import { DiscoveryCandidateSchema, candidateDedupKey } from "./sources/schema"
import type {
  DiscoveryCandidate,
  DiscoveryCandidateDraft,
  MethodologyGrade,
} from "./sources/schema"

// ---------------------------------------------------------------------------
// Weights config — shape + loader
// ---------------------------------------------------------------------------

export interface RankWeights {
  version: string
  committed_at?: string
  committed_by?: string
  rationale_doc?: string
  peer_review: {
    peer_reviewed: number
    pre_print: number
    gray_literature: number
    unknown: number
  }
  methodology_grade: Record<MethodologyGrade, number>
  study_type: {
    primary: number
    review: number
    opinion: number
    unknown: number
  }
  sample_size: {
    log_coefficient: number
    cap: number
    min_n_for_credit: number
  }
  peer_reviewed_adapters: string[]
  pre_print_adapters: string[]
  gray_literature_adapters: string[]
  study_type_mapping: {
    primary: string[]
    review: string[]
    opinion: string[]
  }
}

export const DEFAULT_WEIGHTS_PATH = "tools/discovery/rank-weights.json"

/**
 * Load weights from a JSON file. Returns the parsed config without applying
 * defaults — the JSON is the source of truth, and partial configs should fail
 * loudly during downstream lookup rather than getting silently filled in.
 */
export async function loadRankWeights(path: string = DEFAULT_WEIGHTS_PATH): Promise<RankWeights> {
  const raw = await readFile(path, "utf8")
  return JSON.parse(raw) as RankWeights
}

// ---------------------------------------------------------------------------
// Optional adapter-specific signals
// ---------------------------------------------------------------------------

/**
 * Adapter-specific signals the ranker may consume on top of what the manifest
 * row carries. Kept narrow on purpose: today no signal is used (v1 ranks on
 * intrinsic candidate fields only); the field exists so future weights can
 * pull in citation counts, journal-tier signals, etc. without a contract
 * change. Methodology decisions about adding signals route through
 * `rank-methodology.md`, not through schema flex.
 */
export interface AdapterSignals {
  /** OpenAlex `cited_by_count` etc. Not consumed by v1. */
  citedByCount?: number
  /** Free-form metadata bag for one-off adapter signals. Not consumed by v1. */
  extra?: Record<string, unknown>
}

// ---------------------------------------------------------------------------
// Score result
// ---------------------------------------------------------------------------

export interface RankResult {
  /** Total score: peer_review + methodology_grade + study_type + sample_size_log. */
  score: number
  /** Per-contribution rationale, in evaluation order. Each entry is a single line. */
  why: string[]
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type PeerReviewBucket = "peer_reviewed" | "pre_print" | "gray_literature" | "unknown"
type StudyTypeBucket = "primary" | "review" | "opinion" | "unknown"

function classifyPeerReview(adapter: string, weights: RankWeights): PeerReviewBucket {
  if (weights.peer_reviewed_adapters.includes(adapter)) return "peer_reviewed"
  if (weights.pre_print_adapters.includes(adapter)) return "pre_print"
  if (weights.gray_literature_adapters.includes(adapter)) return "gray_literature"
  return "unknown"
}

function classifyStudyType(studyType: string | null, weights: RankWeights): StudyTypeBucket {
  if (!studyType) return "unknown"
  const normalized = studyType.trim().toLowerCase()
  if (normalized.length === 0) return "unknown"
  if (weights.study_type_mapping.primary.includes(normalized)) return "primary"
  if (weights.study_type_mapping.review.includes(normalized)) return "review"
  if (weights.study_type_mapping.opinion.includes(normalized)) return "opinion"
  return "unknown"
}

function sampleSizeBonus(sampleSize: number | null, weights: RankWeights): number {
  if (sampleSize === null) return 0
  if (sampleSize < weights.sample_size.min_n_for_credit) return 0
  const raw = weights.sample_size.log_coefficient * Math.log10(sampleSize)
  return Math.min(raw, weights.sample_size.cap)
}

function roundScore(value: number): number {
  // Two-decimal precision: enough to distinguish log-scaled sample-size ties,
  // tight enough to keep audit logs human-readable.
  return Math.round(value * 100) / 100
}

// ---------------------------------------------------------------------------
// rankCandidate — the public methodology call
// ---------------------------------------------------------------------------

/**
 * Compute the quality/relevance score for a single candidate.
 *
 * Pure: depends only on the candidate fields, the weights config, and any
 * adapter signals passed in. No clock, no filesystem, no network.
 *
 * The `candidate` parameter accepts a draft (pre-manifest) or a full
 * `DiscoveryCandidate` row; only the fields shared between the two are read.
 * Adapter signals are optional; v1 ignores them. They are part of the
 * contract so future weight versions can use them without a refactor.
 */
export function rankCandidate(
  candidate:
    | Pick<DiscoveryCandidate, "source_adapter" | "methodology_grade" | "study_type" | "sample_size">
    | Pick<DiscoveryCandidateDraft, "source_adapter" | "methodology_grade" | "study_type" | "sample_size">,
  weights: RankWeights,
  _signals?: AdapterSignals,
): RankResult {
  const why: string[] = []

  const peerBucket = classifyPeerReview(candidate.source_adapter, weights)
  const peerWeight = weights.peer_review[peerBucket]
  why.push(`peer_review[${peerBucket}] (+${peerWeight.toFixed(2)})`)

  const gradeWeight = weights.methodology_grade[candidate.methodology_grade] ?? 0
  why.push(`methodology_grade[${candidate.methodology_grade}] (+${gradeWeight.toFixed(2)})`)

  const studyBucket = classifyStudyType(candidate.study_type, weights)
  const studyWeight = weights.study_type[studyBucket]
  const studyLabel = candidate.study_type ? `${studyBucket}:${candidate.study_type}` : studyBucket
  why.push(`study_type[${studyLabel}] (+${studyWeight.toFixed(2)})`)

  const sampleBonus = sampleSizeBonus(candidate.sample_size, weights)
  const sampleLabel = candidate.sample_size === null ? "n=null" : `n=${candidate.sample_size}`
  why.push(`sample_size[${sampleLabel}] (+${sampleBonus.toFixed(2)})`)

  const total = roundScore(peerWeight + gradeWeight + studyWeight + sampleBonus)
  return { score: total, why }
}

// ---------------------------------------------------------------------------
// applyRankings — manifest-rewriting driver used by the CLI
// ---------------------------------------------------------------------------

export interface ApplyRankingsResult {
  total: number
  ranked: number
  skipped: number
  unchanged: number
}

/**
 * Read `candidates.jsonl`, score every row with `rankCandidate`, set
 * `ranked_score` and (when status is `discovered` or `fetched`) advance status
 * to `ranked`, then atomically rewrite the file.
 *
 * Atomicity: writes to `<path>.tmp` and renames over the original so a crash
 * mid-write cannot leave the manifest in a torn state. Rows that already have
 * a non-null `ranked_score` matching the recomputed score are counted as
 * `unchanged`.
 *
 * Rows that fail schema validation are skipped and logged via the optional
 * `onSkip` callback rather than aborting the whole pass — the writer's
 * append-only lint surfaces malformed rows separately.
 */
export async function applyRankings(
  jsonlPath: string,
  weights: RankWeights,
  options: { onSkip?: (line: string, error: unknown) => void } = {},
): Promise<ApplyRankingsResult> {
  await mkdir(dirname(jsonlPath), { recursive: true })

  let existing = ""
  try {
    await access(jsonlPath)
    existing = await readFile(jsonlPath, "utf8")
  } catch {
    return { total: 0, ranked: 0, skipped: 0, unchanged: 0 }
  }

  const out: string[] = []
  const seen = new Set<string>()
  let total = 0
  let ranked = 0
  let skipped = 0
  let unchanged = 0

  for (const line of existing.split("\n")) {
    if (!line) continue
    total += 1

    let parsed: unknown
    try {
      parsed = JSON.parse(line)
    } catch (err) {
      skipped += 1
      options.onSkip?.(line, err)
      continue
    }

    const validated = DiscoveryCandidateSchema.safeParse(parsed)
    if (!validated.success) {
      skipped += 1
      options.onSkip?.(line, validated.error)
      continue
    }

    const row = validated.data
    const key = candidateDedupKey(row)
    if (seen.has(key)) {
      // Manifest invariant violation — duplicate dedup key. Keep the first,
      // drop the rest, surface via onSkip.
      skipped += 1
      options.onSkip?.(line, new Error(`duplicate dedup key: ${key}`))
      continue
    }
    seen.add(key)

    const result = rankCandidate(row, weights)
    const previousScore = row.ranked_score
    const nextStatus = row.status === "discovered" || row.status === "fetched" ? "ranked" : row.status

    if (previousScore === result.score && row.status === nextStatus) {
      unchanged += 1
    } else {
      ranked += 1
    }

    const updated = { ...row, ranked_score: result.score, status: nextStatus }
    out.push(JSON.stringify(updated))
  }

  const tmpPath = `${jsonlPath}.tmp`
  await writeFile(tmpPath, out.length === 0 ? "" : out.join("\n") + "\n", "utf8")
  await rename(tmpPath, jsonlPath)

  return { total, ranked, skipped, unchanged }
}
