import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import { basename, dirname, join, relative, resolve } from "node:path"
import {
  EvidenceFitnessVerdict,
  ReviewState,
  evaluateEvidenceFitness,
  normalizeConcentrationToPpb,
  normalizeMetalSpecies,
  publicLabelForEvidenceFitness,
  sourcePagePathForId,
} from "./model"

export interface DraftSourceRecord {
  source_id: string
  raw_handle: string
  raw_path: string
  source_page_path: string
  source_title: string | null
  source_type: null
  evidence_tier: null
  metal_mentions: string[]
  matrix_mentions: string[]
  statistic_flags: string[]
  review_state: ReviewState
  extraction_run_id: string
  extraction_timestamp: string
}

export interface DraftValueRecord {
  value_id: string
  source_id: string
  claim_class: "literature_finding"
  metal_species: string | null
  product_matrix: string | null
  basis: "not_reported"
  statistic_type: string | null
  original_value: number
  original_unit: string
  normalized_value: number | null
  normalized_unit: "ppb" | null
  quote_trace: string
  evidence_fitness_verdict: EvidenceFitnessVerdict
  public_label: string
  review_state: ReviewState
}

export interface ScanResult {
  sources: DraftSourceRecord[]
  values: DraftValueRecord[]
}

const metalMentionPatterns: [string, RegExp][] = [
  ["Pb", /\b(?:Pb|lead)\b/i],
  ["Cd", /\b(?:Cd|cadmium)\b/i],
  ["iAs", /\b(?:iAs|inorganic arsenic)\b/i],
  ["tAs", /\b(?:tAs|total arsenic)\b/i],
  ["Hg", /\b(?:Hg|mercury)\b/i],
  ["MeHg", /\b(?:MeHg|methylmercury|methyl mercury)\b/i],
  ["Ni", /\b(?:Ni|nickel)\b/i],
  ["Al", /\b(?:Al|aluminum|aluminium)\b/i],
  ["Sn", /\b(?:Sn|tin)\b/i],
  ["Cr-total", /\b(?:Cr|chromium|total chromium)\b/i],
  ["Cr-VI", /\b(?:Cr\s*[\(-]?\s*VI|Cr6\+?|hexavalent chromium)\b/i],
]

const matrixMentionPatterns: [string, RegExp][] = [
  ["infant-food", /\b(?:infant food|infant cereal|infant rice cereal|baby cereal|baby food|complementary food)\b/i],
  ["infant-formula", /\binfant formula\b/i],
  ["rice", /\brice\b/i],
  ["cereal", /\bcereals?\b/i],
  ["fruit-juice", /\b(?:fruit juice|apple juice|grape juice)\b/i],
  ["root-vegetable", /\b(?:root vegetable|carrot|sweet potato)\b/i],
  ["fish", /\b(?:fish|seafood|tuna|salmon)\b/i],
  ["protein-powder", /\bprotein powder\b/i],
]

const statisticPatterns: [string, RegExp][] = [
  ["p10", /\b(?:p10|10th percentile)\b/i],
  ["p90", /\b(?:p90|90th percentile)\b/i],
  ["p95", /\b(?:p95|95th percentile)\b/i],
  ["mean", /\bmean\b/i],
  ["median", /\bmedian\b/i],
  ["maximum", /\b(?:maximum|max)\b/i],
  ["loq", /\b(?:LOQ|limit of quantification|limit of quantitation)\b/i],
  ["lod", /\b(?:LOD|limit of detection)\b/i],
]

const concentrationPattern =
  /(\d+(?:\.\d+)?)\s*(ppb|ppm|mg\/kg|ug\/kg|\u00b5g\/kg|ng\/g|ug\/g|ug\/l|\u00b5g\/l|mg\/l)\b/gi

export async function scanMarkdownFile(filePath: string, rootDir: string, runId = "manual-scan"): Promise<ScanResult> {
  const text = await readFile(filePath, "utf8")
  const rawHandle = sourceHandleFromPath(filePath)
  const sourceId = rawHandle || basename(filePath, ".md")
  const timestamp = new Date(0).toISOString()
  const source: DraftSourceRecord = {
    source_id: sourceId,
    raw_handle: rawHandle,
    raw_path: relative(rootDir, filePath),
    source_page_path: sourcePagePathForId(sourceId),
    source_title: extractTitle(text),
    source_type: null,
    evidence_tier: null,
    metal_mentions: collectMatches(text, metalMentionPatterns),
    matrix_mentions: collectMatches(text, matrixMentionPatterns),
    statistic_flags: collectMatches(text, statisticPatterns),
    review_state: "machine_extracted",
    extraction_run_id: runId,
    extraction_timestamp: timestamp,
  }

  const values = extractValueCandidates(text, sourceId, source.matrix_mentions)
  return { sources: [source], values }
}

export async function scanMarkdownCorpus(rootDir: string, limit?: number): Promise<ScanResult> {
  const root = resolve(rootDir)
  const files = await findMarkdownFiles(root, limit)
  const runId = `scan-${new Date(0).toISOString()}`
  const result: ScanResult = { sources: [], values: [] }
  for (const file of files) {
    const scanned = await scanMarkdownFile(file, root, runId)
    result.sources.push(...scanned.sources)
    result.values.push(...scanned.values)
  }
  result.sources.sort((a, b) => a.source_id.localeCompare(b.source_id))
  result.values.sort((a, b) => a.value_id.localeCompare(b.value_id))
  return result
}

export async function findMarkdownFiles(rootDir: string, limit?: number): Promise<string[]> {
  const found: string[] = []
  async function walk(dir: string): Promise<void> {
    const entries = await readdir(dir, { withFileTypes: true })
    entries.sort((a, b) => a.name.localeCompare(b.name))
    for (const entry of entries) {
      if (limit !== undefined && found.length >= limit) return
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(path)
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        found.push(path)
      }
    }
  }
  await walk(rootDir)
  return found
}

function extractValueCandidates(text: string, sourceId: string, matrices: string[]): DraftValueRecord[] {
  const values: DraftValueRecord[] = []
  for (const match of text.matchAll(concentrationPattern)) {
    const originalValue = Number(match[1])
    const originalUnit = match[2]
    const normalizedValue = normalizeConcentrationToPpb(originalValue, originalUnit)
    const start = Math.max(0, match.index - 100)
    const end = Math.min(text.length, match.index + match[0].length + 100)
    const quoteTrace = text.slice(start, end).replace(/\s+/g, " ").trim()
    const metalSpecies = inferMetalFromContext(quoteTrace)
    const statisticType = inferStatisticFromContext(quoteTrace)
    const verdict = evaluateEvidenceFitness({
      hasOccurrenceData: true,
      hasQuoteTrace: quoteTrace.length > 0,
      metalSpecies,
      matrix: matrices[0] ?? null,
      basis: "not_reported",
      normalizedUnit: normalizedValue === null ? null : "ppb",
      statisticType,
      sourceTier: null,
      sourceReportsDirectPercentile: statisticType === "p10" || statisticType === "p90",
    })

    values.push({
      value_id: `${sourceId}-v${String(values.length + 1).padStart(4, "0")}`,
      source_id: sourceId,
      claim_class: "literature_finding",
      metal_species: metalSpecies,
      product_matrix: matrices[0] ?? null,
      basis: "not_reported",
      statistic_type: statisticType,
      original_value: originalValue,
      original_unit: originalUnit,
      normalized_value: normalizedValue,
      normalized_unit: normalizedValue === null ? null : "ppb",
      quote_trace: quoteTrace,
      evidence_fitness_verdict: verdict,
      public_label: publicLabelForEvidenceFitness(verdict),
      review_state: "machine_extracted",
    })
  }
  return values
}

function inferMetalFromContext(context: string): ReturnType<typeof normalizeMetalSpecies> {
  for (const [candidate, pattern] of metalMentionPatterns) {
    if (pattern.test(context)) return normalizeMetalSpecies(candidate)
  }
  return null
}

function inferStatisticFromContext(context: string): string | null {
  for (const [name, pattern] of statisticPatterns) {
    if (pattern.test(context)) return name
  }
  return null
}

function collectMatches(text: string, patterns: [string, RegExp][]): string[] {
  return patterns.filter(([, pattern]) => pattern.test(text)).map(([name]) => name)
}

function extractTitle(text: string): string | null {
  const heading = text.match(/^#\s+(.+)$/m)
  if (heading) return heading[1].trim()
  const firstNonEmpty = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean)
  return firstNonEmpty?.slice(0, 160) ?? null
}

function sourceHandleFromPath(filePath: string): string {
  const parts = filePath.split(/[/\\]/)
  return parts.find((part) => /^FM_\d+/.test(part)) ?? basename(dirname(filePath))
}

function jsonl(records: unknown[]): string {
  return `${records.map((record) => JSON.stringify(record)).join("\n")}\n`
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const rawIndex = args.indexOf("--raw")
  const outIndex = args.indexOf("--out")
  const limitIndex = args.indexOf("--limit")
  const dryRun = args.includes("--dry-run")
  const rawDir = resolve(rawIndex >= 0 ? args[rawIndex + 1] : "raw/markdown")
  const outDir = resolve(outIndex >= 0 ? args[outIndex + 1] : "data/evidence/drafts")
  const limit = limitIndex >= 0 ? Number(args[limitIndex + 1]) : undefined
  const result = await scanMarkdownCorpus(rawDir, limit)

  if (dryRun) {
    console.log(JSON.stringify({ sources: result.sources.length, values: result.values.length }, null, 2))
    return
  }

  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, "sources.jsonl"), jsonl(result.sources), "utf8")
  await writeFile(join(outDir, "values.jsonl"), jsonl(result.values), "utf8")
  await writeFile(join(outDir, "claims.jsonl"), "", "utf8")
  await writeFile(
    join(outDir, "review_events.jsonl"),
    jsonl([
      {
        event_id: "scan-initialized",
        record_id: "scan-output",
        record_type: "source",
        review_state: "machine_extracted",
        reviewer_role: "system",
        reviewer_id: null,
        timestamp: new Date(0).toISOString(),
        notes: "Deterministic markdown scan completed. Records require human review before public use.",
      },
    ]),
    "utf8",
  )
  console.log(`Wrote ${result.sources.length} source records and ${result.values.length} value candidates to ${outDir}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main()
}
