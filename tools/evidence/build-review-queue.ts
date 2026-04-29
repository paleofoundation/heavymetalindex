import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join, resolve } from "node:path"
import { EvidenceFitnessVerdict, PublicEvidenceLabel, ReviewState, sourcePagePathForId } from "./model"

export interface QueueSourceRecord {
  source_id: string
  source_title?: string | null
  source_page_path?: string | null
  metal_mentions?: string[]
  matrix_mentions?: string[]
  statistic_flags?: string[]
  review_state: ReviewState
}

export interface QueueValueRecord {
  value_id: string
  source_id: string
  metal_species?: string | null
  product_matrix?: string | null
  evidence_fitness_verdict: EvidenceFitnessVerdict
  public_label: PublicEvidenceLabel
  review_state: ReviewState
}

export interface ReviewQueueRow {
  queue_id: string
  record_type: "source" | "value"
  record_id: string
  source_id: string
  review_state: ReviewState
  priority: 1 | 2 | 3 | 4
  evidence_fitness_verdict: EvidenceFitnessVerdict | ""
  public_label: PublicEvidenceLabel | ""
  metal_species: string
  product_matrix: string
  source_page_path: string
  reason: string
}

export interface SourcePageCandidate {
  page_type: "source"
  source_id: string
  source_page_path: string
  source_title: string | null
  review_state: ReviewState
  metal_mentions: string[]
  matrix_mentions: string[]
  statistic_flags: string[]
  value_candidate_count: number
  required_before_publication: string[]
}

const terminalReviewStates = new Set<ReviewState>(["approved_for_public", "published", "rejected", "superseded"])

export function buildReviewQueue(sources: QueueSourceRecord[], values: QueueValueRecord[]): ReviewQueueRow[] {
  const sourceRows = sources.filter(needsReview).map((source): ReviewQueueRow => {
    const hasSignals = Boolean(
      source.metal_mentions?.length || source.matrix_mentions?.length || source.statistic_flags?.length,
    )
    return {
      queue_id: `source:${source.source_id}`,
      record_type: "source",
      record_id: source.source_id,
      source_id: source.source_id,
      review_state: source.review_state,
      priority: hasSignals ? 3 : 4,
      evidence_fitness_verdict: "",
      public_label: "",
      metal_species: "",
      product_matrix: "",
      source_page_path: source.source_page_path ?? sourcePagePathForId(source.source_id),
      reason: hasSignals
        ? "Source has extracted signals and needs metadata, tier, and legal/publication review."
        : "Source needs metadata review before it can support value or claim records.",
    }
  })

  const valueRows = values.filter(needsReview).map((value): ReviewQueueRow => ({
    queue_id: `value:${value.value_id}`,
    record_type: "value",
    record_id: value.value_id,
    source_id: value.source_id,
    review_state: value.review_state,
    priority: priorityForValue(value.evidence_fitness_verdict),
    evidence_fitness_verdict: value.evidence_fitness_verdict,
    public_label: value.public_label,
    metal_species: value.metal_species ?? "",
    product_matrix: value.product_matrix ?? "",
    source_page_path: sourcePagePathForId(value.source_id),
    reason: reasonForValue(value.evidence_fitness_verdict),
  }))

  return [...valueRows, ...sourceRows].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority
    if (a.source_id !== b.source_id) return a.source_id.localeCompare(b.source_id)
    return a.record_id.localeCompare(b.record_id)
  })
}

export function buildSourcePageCandidates(
  sources: QueueSourceRecord[],
  values: QueueValueRecord[],
): SourcePageCandidate[] {
  const valueCounts = new Map<string, number>()
  for (const value of values) {
    valueCounts.set(value.source_id, (valueCounts.get(value.source_id) ?? 0) + 1)
  }

  return sources
    .filter(needsReview)
    .map((source) => ({
      page_type: "source" as const,
      source_id: source.source_id,
      source_page_path: source.source_page_path ?? sourcePagePathForId(source.source_id),
      source_title: source.source_title ?? null,
      review_state: source.review_state,
      metal_mentions: source.metal_mentions ?? [],
      matrix_mentions: source.matrix_mentions ?? [],
      statistic_flags: source.statistic_flags ?? [],
      value_candidate_count: valueCounts.get(source.source_id) ?? 0,
      required_before_publication: [
        "confirm source metadata",
        "assign source tier",
        "confirm source rights/public citation status",
        "approve any public values or claims separately",
      ],
    }))
    .sort((a, b) => a.source_id.localeCompare(b.source_id))
}

export function reviewQueueToCsv(rows: ReviewQueueRow[]): string {
  const headers: (keyof ReviewQueueRow)[] = [
    "queue_id",
    "record_type",
    "record_id",
    "source_id",
    "review_state",
    "priority",
    "evidence_fitness_verdict",
    "public_label",
    "metal_species",
    "product_matrix",
    "source_page_path",
    "reason",
  ]
  return `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(String(row[header]))).join(","))].join(
    "\n",
  )}\n`
}

function needsReview(record: { review_state: ReviewState }): boolean {
  return !terminalReviewStates.has(record.review_state)
}

function priorityForValue(verdict: EvidenceFitnessVerdict): 1 | 2 | 3 | 4 {
  if (verdict === "EF-1" || verdict === "EF-2") return 1
  if (verdict === "EF-3") return 2
  if (verdict === "EF-4") return 3
  return 4
}

function reasonForValue(verdict: EvidenceFitnessVerdict): string {
  if (verdict === "EF-1" || verdict === "EF-2") {
    return "High-value occurrence evidence candidate; review first for public or internal approval."
  }
  if (verdict === "EF-3") return "Limited or modeled evidence candidate; review context and caveats."
  if (verdict === "EF-4") return "Context-only candidate; review before using as background evidence."
  if (verdict === "EF-5") return "Data-gap record; confirm that no source-backed value exists yet."
  return "Rejected/unusable candidate; review only if rejection status needs confirmation."
}

function csvCell(value: string): string {
  if (!/[",\n]/.test(value)) return value
  return `"${value.replace(/"/g, '""')}"`
}

function jsonl(records: unknown[]): string {
  return `${records.map((record) => JSON.stringify(record)).join("\n")}\n`
}

async function readJsonl<T>(path: string): Promise<T[]> {
  try {
    const text = await readFile(path, "utf8")
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line) as T)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return []
    throw error
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const draftsIndex = args.indexOf("--drafts")
  const outIndex = args.indexOf("--out")
  const draftsDir = resolve(draftsIndex >= 0 ? args[draftsIndex + 1] : "data/evidence/drafts")
  const outDir = resolve(outIndex >= 0 ? args[outIndex + 1] : draftsDir)
  const sources = await readJsonl<QueueSourceRecord>(join(draftsDir, "sources.jsonl"))
  const values = await readJsonl<QueueValueRecord>(join(draftsDir, "values.jsonl"))
  const queue = buildReviewQueue(sources, values)
  const pageCandidates = buildSourcePageCandidates(sources, values)

  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, "review_queue.csv"), reviewQueueToCsv(queue), "utf8")
  await writeFile(join(outDir, "source_page_candidates.jsonl"), jsonl(pageCandidates), "utf8")
  console.log(`Wrote ${queue.length} review queue rows and ${pageCandidates.length} source page candidates to ${outDir}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main()
}
