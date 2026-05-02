import { createHash } from "node:crypto"
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { basename, extname, join, relative } from "node:path"

type SourceFootprint = {
  path: string
  rawPaths: string[]
  sha256s: string[]
  reviewState: string | null
  sourceType: string | null
  evidenceTier: string | null
  title: string | null
}

type InventoryRow = {
  queue_order: number
  bucket: string
  raw_path: string
  filename: string
  extension: string
  bytes: number
  sha256: string
  source_page_status:
    | "matched_by_raw_path"
    | "matched_by_sha256"
    | "no_source_page"
    | "related_artifact"
    | "superseded_artifact"
    | "deferred_historical"
    | "rejected_unusable"
  matched_source_pages: string
  review_states: string
  suggested_source_type: string
  suggested_evidence_tier: string
  ingest_priority: string
  next_action: string
}

type IngestOverride = Partial<
  Pick<
    InventoryRow,
    | "source_page_status"
    | "matched_source_pages"
    | "review_states"
    | "suggested_source_type"
    | "suggested_evidence_tier"
    | "ingest_priority"
    | "next_action"
  >
>

const ROOT = process.cwd()
const RAW_BUCKETS = ["raw/reports", "raw/studies"]
const SOURCE_DIR = "wiki/sources"
const OUT_CSV = "data/evidence/raw_ingest_inventory.csv"
const OUT_JSON = "data/evidence/raw_ingest_summary.json"
const OUT_MD = "wiki/lint/2026-05-02-raw-reports-studies-ingest-inventory.md"
const OVERRIDES_PATH = "data/evidence/raw_ingest_overrides.json"

function walkFiles(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkFiles(full))
    } else if (entry.isFile()) {
      files.push(relative(ROOT, full))
    }
  }
  return files.sort((a, b) => a.localeCompare(b))
}

function sha256(path: string): string {
  const hash = createHash("sha256")
  hash.update(readFileSync(path))
  return hash.digest("hex")
}

function field(frontmatter: string, name: string): string | null {
  const match = frontmatter.match(new RegExp(`^${name}:\\s*(.*)$`, "m"))
  if (!match) return null
  const value = match[1].trim()
  if (!value || value === "null") return null
  return value.replace(/^["']|["']$/g, "")
}

function sourceFootprints(): SourceFootprint[] {
  return walkFiles(SOURCE_DIR)
    .filter((path) => path.endsWith(".md"))
    .map((path) => {
      const text = readFileSync(path, "utf8")
      const frontmatter = text.startsWith("---")
        ? text.split("---", 3)[1] ?? ""
        : ""
      const rawPaths = new Set<string>()
      const primaryRawPath = field(frontmatter, "raw_path")
      if (primaryRawPath) rawPaths.add(primaryRawPath)
      for (const match of frontmatter.matchAll(/^\s*-\s*(raw\/(?:reports|studies)\/.+)$/gm)) {
        rawPaths.add(match[1].trim())
      }

      const sha256s = new Set<string>()
      const primarySha = field(frontmatter, "sha256")
      if (primarySha && /^[a-f0-9]{64}$/i.test(primarySha)) sha256s.add(primarySha.toLowerCase())
      for (const match of frontmatter.matchAll(/\b([a-f0-9]{64})\b/gim)) {
        sha256s.add(match[1].toLowerCase())
      }

      return {
        path,
        rawPaths: [...rawPaths],
        sha256s: [...sha256s],
        reviewState: field(frontmatter, "review_state"),
        sourceType: field(frontmatter, "source_type"),
        evidenceTier: field(frontmatter, "evidence_tier"),
        title: field(frontmatter, "title"),
      }
    })
}

function suggestedSourceType(path: string): string {
  const lower = path.toLowerCase()
  if (path.startsWith("raw/reports/")) {
    if (
      lower.includes("fda") ||
      lower.includes("epa") ||
      lower.includes("atsdr") ||
      lower.includes("cdc") ||
      lower.includes("oehha")
    ) {
      return "gov-report"
    }
    if (
      lower.includes("efsa") ||
      lower.includes("jecfa") ||
      lower.includes("codex") ||
      lower.includes("minamata") ||
      lower.includes("who") ||
      lower.includes("978924")
    ) {
      return "gov-report"
    }
    return "peer-reviewed"
  }
  return "peer-reviewed"
}

function ingestPriority(path: string): string {
  const lower = path.toLowerCase()
  if (path.startsWith("raw/reports/")) {
    if (
      lower.includes("fda") ||
      lower.includes("epa") ||
      lower.includes("atsdr") ||
      lower.includes("cdc") ||
      lower.includes("efsa") ||
      lower.includes("jecfa") ||
      lower.includes("codex") ||
      lower.includes("oehha")
    ) {
      return "P0-report-regulatory-toxicology"
    }
    return "P1-report-context"
  }
  if (
    lower.includes("infant") ||
    lower.includes("baby") ||
    lower.includes("formula") ||
    lower.includes("rice") ||
    lower.includes("juice") ||
    lower.includes("protein") ||
    lower.includes("milk") ||
    lower.includes("beverage") ||
    lower.includes("children")
  ) {
    return "P1-study-product-relevant"
  }
  return "P2-study-background"
}

function csvEscape(value: string | number): string {
  const stringValue = String(value)
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`
  }
  return stringValue
}

const sources = sourceFootprints()
const overrides: Record<string, IngestOverride> = existsSync(OVERRIDES_PATH)
  ? JSON.parse(readFileSync(OVERRIDES_PATH, "utf8"))
  : {}
const sourcesByRawPath = new Map<string, SourceFootprint[]>()
const sourcesBySha = new Map<string, SourceFootprint[]>()
for (const source of sources) {
  for (const rawPath of source.rawPaths) {
    const list = sourcesByRawPath.get(rawPath) ?? []
    list.push(source)
    sourcesByRawPath.set(rawPath, list)
  }
  for (const digest of source.sha256s) {
    const list = sourcesBySha.get(digest) ?? []
    list.push(source)
    sourcesBySha.set(digest, list)
  }
}

const rawFiles = RAW_BUCKETS.flatMap((bucket) => walkFiles(bucket))
  .filter((path) => !basename(path).startsWith("."))
  .filter((path) => extname(path).toLowerCase() === ".pdf")

const rows: InventoryRow[] = rawFiles.map((rawPath, index) => {
  const digest = sha256(rawPath)
  const byRaw = sourcesByRawPath.get(rawPath) ?? []
  const bySha = sourcesBySha.get(digest) ?? []
  const matches = byRaw.length > 0 ? byRaw : bySha
  const source_page_status =
    byRaw.length > 0
      ? "matched_by_raw_path"
      : bySha.length > 0
        ? "matched_by_sha256"
        : "no_source_page"
  const suggested_source_type = suggestedSourceType(rawPath)
  const suggested_evidence_tier =
    suggested_source_type === "gov-report" || suggested_source_type === "peer-reviewed"
      ? "A"
      : "B"
  const row: InventoryRow = {
    queue_order: index + 1,
    bucket: rawPath.split("/")[1],
    raw_path: rawPath,
    filename: basename(rawPath),
    extension: extname(rawPath).replace(".", "").toLowerCase(),
    bytes: statSync(rawPath).size,
    sha256: digest,
    source_page_status,
    matched_source_pages: matches.map((match) => match.path).join(";"),
    review_states: [...new Set(matches.map((match) => match.reviewState).filter(Boolean))].join(";"),
    suggested_source_type,
    suggested_evidence_tier,
    ingest_priority: ingestPriority(rawPath),
    next_action:
      source_page_status === "no_source_page"
        ? "create source page, classify evidence fitness, then route claims/values"
        : "audit source page completeness, extract routeable claims/values if missing",
  }
  return { ...row, ...(overrides[rawPath] ?? {}) }
})

const header = Object.keys(rows[0] ?? {
  queue_order: "",
  bucket: "",
  raw_path: "",
  filename: "",
  extension: "",
  bytes: "",
  sha256: "",
  source_page_status: "",
  matched_source_pages: "",
  review_states: "",
  suggested_source_type: "",
  suggested_evidence_tier: "",
  ingest_priority: "",
  next_action: "",
})

writeFileSync(
  OUT_CSV,
  [
    header.join(","),
    ...rows.map((row) => header.map((key) => csvEscape(row[key as keyof InventoryRow])).join(",")),
  ].join("\n") + "\n",
)

const summary = {
  generated_at: new Date().toISOString(),
  buckets: RAW_BUCKETS,
  total_pdf_files: rows.length,
  by_bucket: Object.fromEntries(
    RAW_BUCKETS.map((bucket) => [
      bucket.replace("raw/", ""),
      rows.filter((row) => row.raw_path.startsWith(`${bucket}/`)).length,
    ]),
  ),
  by_source_page_status: rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.source_page_status] = (acc[row.source_page_status] ?? 0) + 1
    return acc
  }, {}),
  by_ingest_priority: rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.ingest_priority] = (acc[row.ingest_priority] ?? 0) + 1
    return acc
  }, {}),
  reports_requiring_source_page: rows
    .filter((row) => row.bucket === "reports" && row.source_page_status === "no_source_page")
    .map((row) => row.raw_path),
  unmatched_studies_count: rows.filter(
    (row) => row.bucket === "studies" && row.source_page_status === "no_source_page",
  ).length,
}

writeFileSync(OUT_JSON, `${JSON.stringify(summary, null, 2)}\n`)

const reportRows = rows.filter((row) => row.bucket === "reports")
const studyRows = rows.filter((row) => row.bucket === "studies")
const reportUnmatched = reportRows.filter((row) => row.source_page_status === "no_source_page")
const reportNonPublic = reportRows.filter((row) =>
  ["related_artifact", "superseded_artifact", "deferred_historical", "rejected_unusable"].includes(
    row.source_page_status,
  ),
)
const studyProductRelevant = studyRows.filter((row) => row.ingest_priority === "P1-study-product-relevant")

writeFileSync(
  OUT_MD,
  `---
title: Raw Reports and Studies Ingest Inventory
type: lint
updated: 2026-05-02
---

# Raw Reports and Studies Ingest Inventory

This audit controls the next ingest wave for \`raw/reports\` followed by \`raw/studies\`. The generated CSV is tracked at \`${OUT_CSV}\`; the JSON summary is tracked at \`${OUT_JSON}\`.

## Counts

| Bucket | PDF files |
| --- | ---: |
| Reports | ${reportRows.length} |
| Studies | ${studyRows.length} |
| Total | ${rows.length} |

## Source-Page Status

| Status | Count |
| --- | ---: |
${Object.entries(summary.by_source_page_status)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([status, count]) => `| ${status} | ${count} |`)
  .join("\n")}

## Priority Buckets

| Priority | Count |
| --- | ---: |
${Object.entries(summary.by_ingest_priority)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([priority, count]) => `| ${priority} | ${count} |`)
  .join("\n")}

## Reports Needing Source Pages First

${reportUnmatched.length === 0 ? "All report PDFs currently have a source-page match." : reportUnmatched.map((row) => `- \`${row.raw_path}\``).join("\n")}

## Reports Deliberately Not Promoted as Independent Source Pages

${reportNonPublic.length === 0 ? "No report PDFs are currently marked as non-public ingest artifacts." : reportNonPublic.map((row) => `- \`${row.raw_path}\` — ${row.source_page_status}; ${row.next_action}`).join("\n")}

## Product-Relevant Study Queue

These study PDFs should be reviewed before lower-priority mechanistic/background papers because they are more likely to alter product, ingredient, or HMTc standards-development pages.

${studyProductRelevant
  .slice(0, 60)
  .map((row) => `- \`${row.raw_path}\``)
  .join("\n")}

## Operating Rule

Do not treat a row as publicly ingested merely because it has a source page. A completed ingest requires source metadata, evidence-fitness classification, routeable value/claim extraction, page updates where warranted, and verification that ingredient-only findings live on ingredient pages rather than product pages.
`,
)
