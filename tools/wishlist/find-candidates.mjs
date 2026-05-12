#!/usr/bin/env node
// Queries OpenAlex for open-access papers matching each wishlist query.
//
// Input: data/evidence/wishlist-queries.json (from parse-wishlist.mjs)
// Output: data/evidence/wishlist-candidates.csv
//
// For each query, hit OpenAlex's /works endpoint with the extracted core
// terms, filter for is_oa:true (open-access PDFs we can actually retrieve)
// and from_publication_date:2015 (recent enough to be relevant), and take
// the top N results. Score each by how densely the wishlist terms appear
// in the title + abstract. Emit a candidates CSV that Karen reviews and
// approves before download.
//
// No API key required. Polite use: includes a User-Agent and respects
// the 100/sec rate limit by batching with a 200ms delay between queries.
//
// To download approved candidates, see tools/wishlist/download-candidates.mjs
// (separate step so Karen can review before disk writes).

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const queriesPath = path.join(repoRoot, "data/evidence/wishlist-queries.json")
const outputPath = path.join(repoRoot, "data/evidence/wishlist-candidates.csv")
const sourcesIndexPath = path.join(repoRoot, "wiki/sources")

const OPENALEX_BASE = "https://api.openalex.org/works"
const USER_AGENT = "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)"
const PER_QUERY_LIMIT = 8
const FROM_YEAR = 2015
const DELAY_MS = 250 // polite rate limit

if (!fs.existsSync(queriesPath)) {
  console.error(`No wishlist queries at ${queriesPath}. Run tools/wishlist/parse-wishlist.mjs first.`)
  process.exit(1)
}

const { queries } = JSON.parse(fs.readFileSync(queriesPath, "utf8"))

// Build an index of existing source pages so we can flag duplicates.
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
console.error(`Indexed ${existingDOIs.size} existing DOIs and ${existingTitles.size} existing titles in wiki/sources/.`)

const candidates = []
let totalFound = 0
let totalSkipped = 0

for (let i = 0; i < queries.length; i += 1) {
  const q = queries[i]
  const searchTerms = q.search_query_core || q.search_query_full
  if (!searchTerms.trim()) {
    console.error(`[${q.id}] no extractable search terms; skipping`)
    continue
  }

  const url = `${OPENALEX_BASE}?search=${encodeURIComponent(searchTerms)}&filter=is_oa:true,from_publication_date:${FROM_YEAR}-01-01&per-page=${PER_QUERY_LIMIT}`
  process.stderr.write(`[${q.id}] querying: "${searchTerms}" ... `)

  try {
    const response = await fetch(url, { headers: { "User-Agent": USER_AGENT, "Accept": "application/json" } })
    if (!response.ok) {
      process.stderr.write(`HTTP ${response.status}\n`)
      continue
    }
    const data = await response.json()
    const works = data.results ?? []
    process.stderr.write(`${works.length} results\n`)
    totalFound += works.length

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
        ...q.extracted.periods,
      ])

      candidates.push({
        wishlist_id: q.id,
        wishlist_section: q.section,
        query_terms: searchTerms,
        relevance_score: score,
        title: work.title ?? "",
        doi: doi || "",
        year: work.publication_year ?? "",
        journal: work.primary_location?.source?.display_name ?? "",
        oa_url: work.open_access?.oa_url ?? "",
        is_oa: work.open_access?.is_oa ? "true" : "false",
        cited_by_count: work.cited_by_count ?? 0,
        already_indexed: alreadyIndexed ? "true" : "false",
        recommendation: scoreToRecommendation(score, alreadyIndexed),
        approved: "", // Karen fills this in
      })
      if (alreadyIndexed) totalSkipped += 1
    }
  } catch (err) {
    process.stderr.write(`error: ${err.message}\n`)
  }
  await new Promise((resolve) => setTimeout(resolve, DELAY_MS))
}

// Sort by wishlist_id then by score descending
candidates.sort((a, b) =>
  a.wishlist_id.localeCompare(b.wishlist_id) || b.relevance_score - a.relevance_score,
)

writeCsv(outputPath, candidates, [
  "wishlist_id",
  "wishlist_section",
  "approved",
  "recommendation",
  "relevance_score",
  "already_indexed",
  "title",
  "doi",
  "year",
  "journal",
  "oa_url",
  "is_oa",
  "cited_by_count",
  "query_terms",
])

console.log(`\nFound ${candidates.length} candidates across ${queries.length} wishlist queries.`)
console.log(`Already-indexed: ${totalSkipped} (duplicate DOI or title against wiki/sources/).`)
console.log(`Wrote ${outputPath}.`)
console.log(`\nNext step: open the CSV in a spreadsheet, fill the "approved" column (yes / no / skip),`)
console.log(`then run tools/wishlist/download-candidates.mjs to fetch the yes-approved PDFs.`)

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

function scoreToRecommendation(score, alreadyIndexed) {
  if (alreadyIndexed) return "skip (already indexed)"
  if (score >= 6) return "yes (strong match)"
  if (score >= 3) return "yes (likely match)"
  if (score >= 1) return "review (weak match)"
  return "skip (no keyword overlap)"
}

function normalizeDoi(doi) {
  return String(doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "").trim()
}

function normalizeTitle(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
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
