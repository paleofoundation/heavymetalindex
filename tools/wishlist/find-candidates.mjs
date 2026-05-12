#!/usr/bin/env node
// Auto-fetches open-access papers matching each wishlist query. The model
// (this script) decides yes/no itself based on relevance score, open-access
// status, and duplicate check against wiki/sources/; it does not ask Karen
// to approve each row. High-confidence matches are downloaded immediately
// into the manual-fetch staging folder. The output CSV is an audit log of
// what got downloaded and why, not an approval queue.
//
// Decision rules:
//   - already-indexed (DOI or title match against wiki/sources/) → skip
//   - relevance_score >= 3 AND has OA URL AND not already-indexed → download
//   - relevance_score 1-2 → log for Karen's optional review, do not download
//     (these are weak matches; preserving them in the audit lets Karen
//     redirect if a borderline paper is actually important)
//   - relevance_score 0 → skip silently (no keyword overlap)
//
// Input: data/evidence/wishlist-queries.json (from parse-wishlist.mjs)
// Output:
//   - data/evidence/wishlist-fetch-audit.csv (audit log)
//   - raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf
//
// No API keys required. Polite use: User-Agent set, 250ms between API calls,
// 500ms between PDF downloads.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const queriesPath = path.join(repoRoot, "data/evidence/wishlist-queries.json")
const auditPath = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
const stagingDir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")
const sourcesIndexPath = path.join(repoRoot, "wiki/sources")

const OPENALEX_BASE = "https://api.openalex.org/works"
const USER_AGENT = "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)"
const PER_QUERY_LIMIT = 8
const FROM_YEAR = 2015
const API_DELAY_MS = 250
const DOWNLOAD_DELAY_MS = 500
const DOWNLOAD_THRESHOLD = 3

if (!fs.existsSync(queriesPath)) {
  console.error(`No wishlist queries at ${queriesPath}. Run tools/wishlist/parse-wishlist.mjs first.`)
  process.exit(1)
}

const { queries } = JSON.parse(fs.readFileSync(queriesPath, "utf8"))

const existingDOIs = new Set()
const existingTitles = new Set()
if (fs.existsSync(sourcesIndexPath)) {
  for (const file of fs.readdirSync(sourcesIndexPath)) {
    if (!file.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(sourcesIndexPath, file), "utf8")
    const doiMatch = raw.match(/^doi:\s*([^\n]+)/m)
    const titleMatch = raw.match(/^title:\s*["']?([^"'\n]+?)["']?\s*$/m)
    if (doiMatch) existingDOIs.add(normalizeDoi(doiMatch[1]))
    if (titleMatch) existingTitles.add(normalizeTitle(titleMatch[1]))
  }
}
console.error(`Indexed ${existingDOIs.size} existing DOIs and ${existingTitles.size} existing titles.`)

fs.mkdirSync(stagingDir, { recursive: true })

const audit = []
let totalFound = 0
let totalDownloaded = 0
let totalSkippedIndexed = 0
let totalSkippedWeak = 0
let totalSkippedNoOa = 0
let totalFailed = 0

for (let i = 0; i < queries.length; i += 1) {
  const q = queries[i]
  const searchTerms = q.search_query_core || q.search_query_full
  if (!searchTerms.trim()) {
    console.error(`[${q.id}] no search terms; skipping`)
    continue
  }

  const url = `${OPENALEX_BASE}?search=${encodeURIComponent(searchTerms)}&filter=is_oa:true,from_publication_date:${FROM_YEAR}-01-01&per-page=${PER_QUERY_LIMIT}`
  process.stderr.write(`[${q.id}] "${searchTerms}" ... `)

  let works = []
  try {
    const response = await fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } })
    if (!response.ok) {
      process.stderr.write(`HTTP ${response.status}\n`)
      await new Promise((r) => setTimeout(r, API_DELAY_MS))
      continue
    }
    const data = await response.json()
    works = data.results ?? []
    process.stderr.write(`${works.length} hits\n`)
    totalFound += works.length
  } catch (err) {
    process.stderr.write(`error: ${err.message}\n`)
    await new Promise((r) => setTimeout(r, API_DELAY_MS))
    continue
  }

  for (const work of works) {
    const doi = work.doi ? normalizeDoi(work.doi) : ""
    const titleNorm = work.title ? normalizeTitle(work.title) : ""
    const alreadyIndexed = (doi && existingDOIs.has(doi)) || (titleNorm && existingTitles.has(titleNorm))

    const abstract = reconstructAbstract(work.abstract_inverted_index)
    const haystack = `${work.title ?? ""} ${abstract}`.toLowerCase()
    const score = scoreHits(haystack, [
      ...q.extracted.crops,
      ...q.extracted.regions,
      ...q.extracted.metals,
      ...(q.extracted.metal_search_terms ?? []),
      ...q.extracted.periods,
    ])

    const oaUrl = work.open_access?.oa_url ?? ""
    const row = {
      wishlist_id: q.id,
      wishlist_section: q.section,
      query_terms: searchTerms,
      relevance_score: score,
      title: work.title ?? "",
      doi: doi || "",
      year: work.publication_year ?? "",
      journal: work.primary_location?.source?.display_name ?? "",
      oa_url: oaUrl,
      cited_by_count: work.cited_by_count ?? 0,
      already_indexed: alreadyIndexed ? "true" : "false",
      decision: "",
      downloaded_path: "",
    }

    // Decision logic — the model decides, no Karen-side approval gate.
    if (alreadyIndexed) {
      row.decision = "skip:already-indexed"
      totalSkippedIndexed += 1
    } else if (!oaUrl) {
      row.decision = "skip:no-oa-url"
      totalSkippedNoOa += 1
    } else if (score < DOWNLOAD_THRESHOLD) {
      row.decision = score === 0 ? "skip:no-keyword-overlap" : "review:weak-match"
      totalSkippedWeak += 1
    } else {
      // Strong or likely match → download immediately.
      const filename = candidateFilename(row)
      const target = path.join(stagingDir, filename)
      if (fs.existsSync(target)) {
        row.decision = "skip:already-in-staging"
        row.downloaded_path = path.relative(repoRoot, target)
        totalSkippedIndexed += 1
      } else {
        process.stdout.write(`  ↓ downloading ${row.title.slice(0, 70)} ... `)
        try {
          const response = await fetch(oaUrl, { headers: { "User-Agent": USER_AGENT }, redirect: "follow" })
          if (!response.ok) {
            process.stdout.write(`HTTP ${response.status}\n`)
            row.decision = `fail:http-${response.status}`
            totalFailed += 1
          } else {
            const contentType = response.headers.get("content-type") || ""
            if (!contentType.includes("pdf") && !contentType.includes("octet-stream")) {
              process.stdout.write(`not PDF\n`)
              row.decision = `skip:not-pdf:${contentType}`
              totalSkippedNoOa += 1
            } else {
              const buffer = Buffer.from(await response.arrayBuffer())
              fs.writeFileSync(target, buffer)
              process.stdout.write(`${formatBytes(buffer.length)}\n`)
              row.decision = "downloaded"
              row.downloaded_path = path.relative(repoRoot, target)
              totalDownloaded += 1
            }
          }
        } catch (err) {
          process.stdout.write(`error: ${err.message}\n`)
          row.decision = `fail:${err.message.slice(0, 40)}`
          totalFailed += 1
        }
        await new Promise((r) => setTimeout(r, DOWNLOAD_DELAY_MS))
      }
    }

    audit.push(row)
  }

  await new Promise((r) => setTimeout(r, API_DELAY_MS))
}

audit.sort((a, b) => a.wishlist_id.localeCompare(b.wishlist_id) || b.relevance_score - a.relevance_score)

writeCsv(auditPath, audit, [
  "wishlist_id",
  "wishlist_section",
  "decision",
  "downloaded_path",
  "relevance_score",
  "already_indexed",
  "title",
  "doi",
  "year",
  "journal",
  "oa_url",
  "cited_by_count",
  "query_terms",
])

console.log(`\nWishlist fetch complete.`)
console.log(`  candidates returned by OpenAlex: ${totalFound}`)
console.log(`  downloaded (relevance >= ${DOWNLOAD_THRESHOLD}, OA, not indexed): ${totalDownloaded}`)
console.log(`  skipped (already in wiki/sources/ or staging): ${totalSkippedIndexed}`)
console.log(`  skipped (weak match, logged for review): ${totalSkippedWeak}`)
console.log(`  skipped (no OA URL or not-PDF): ${totalSkippedNoOa}`)
console.log(`  failed: ${totalFailed}`)
console.log(`\nAudit log: ${path.relative(repoRoot, auditPath)}`)
console.log(`Downloaded PDFs: ${path.relative(repoRoot, stagingDir)}/`)
console.log(`\nThe next ingest session reads the staging folder and produces source pages per CLAUDE.md Part 8.`)

function reconstructAbstract(inverted) {
  if (!inverted || typeof inverted !== "object") return ""
  const positions = []
  for (const [word, idxs] of Object.entries(inverted)) {
    for (const idx of idxs) positions.push([idx, word])
  }
  positions.sort((a, b) => a[0] - b[0])
  return positions.map(([, word]) => word).join(" ")
}

function scoreHits(haystack, terms) {
  let hits = 0
  for (const term of terms) {
    if (!term) continue
    const lc = term.toLowerCase()
    const re = new RegExp(`\\b${lc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g")
    const matches = haystack.match(re)
    if (matches) hits += matches.length
  }
  return hits
}

function normalizeDoi(doi) {
  return String(doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "").trim()
}

function normalizeTitle(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

function candidateFilename(row) {
  const year = row.year || "0000"
  const doi = (row.doi || "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").slice(0, 60)
  const wishlist = (row.wishlist_id || "WL-XXXX").toLowerCase()
  if (doi) return `${wishlist}_${year}_${doi}.pdf`
  const titleSlug = (row.title || "untitled")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
  return `${wishlist}_${year}_${titleSlug}.pdf`
}

function formatBytes(n) {
  if (n > 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`
  if (n > 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${n} B`
}

function writeCsv(filePath, rows, columns) {
  const lines = [columns.join(",")]
  for (const row of rows) {
    lines.push(columns.map((col) => csvCell(row[col])).join(","))
  }
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8")
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}
