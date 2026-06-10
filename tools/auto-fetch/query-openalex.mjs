#!/usr/bin/env node
// OpenAlex query client for the auto-fetch pipeline.
//
// Reads gap manifest rows, constructs queries from ingredient/product page
// frontmatter plus metal-vocab.json, and queries OpenAlex for OA candidates.
//
// Per docs/auto-fetch-design.md. Polite-pool: User-Agent with mailto. Rate
// limited to 10 requests per second. CC-BY / CC-BY-SA / CC0 / public-domain
// licenses only. Peer-reviewed only (journal-article or review). Cap 100
// results per query, sorted by cited_by_count desc then publication_year desc.
//
// Usage:
//   node tools/auto-fetch/query-openalex.mjs --manifest data/auto-fetch/gap-manifests/ingredients-<date>.csv [--limit N]
//   node tools/auto-fetch/query-openalex.mjs --target ingredient:cassava --metal Cd
//
// Output:
//   data/auto-fetch/candidates/<date>/<target>__<metal>.json (per-target candidate list)
//   data/auto-fetch/candidates/<date>/_run.json (run manifest)
//
// Does NOT download PDFs. Pure metadata fetch. Downloading is a separate step.

import fs from "node:fs"
import path from "node:path"
import { parseArgs } from "node:util"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const USER_AGENT = "HeavyMetalIndex/auto-fetch (mailto:karen@paleofoundation.com)"
const OPENALEX_BASE = "https://api.openalex.org/works"
const RATE_LIMIT_RPS = 8 // conservative under the 10/s polite-pool limit
const MAX_RESULTS_PER_QUERY = 100
const ALLOWED_LICENSES = new Set([
  "cc-by", "cc-by-sa", "cc0", "public-domain",
  "cc-by-4.0", "cc-by-3.0", "cc-by-sa-4.0"
])
const ALLOWED_TYPES = new Set(["article", "review"])
const MIN_YEAR = 2000
const ALLOWED_LANGS = new Set(["en", "es", "fr", "pt", "zh", "ar", "sw"])

const METAL_VOCAB = JSON.parse(
  fs.readFileSync(path.join(repoRoot, "tools/auto-fetch/metal-vocab.json"), "utf8")
)

const sleep = ms => new Promise(r => setTimeout(r, ms))

function readFrontmatter(filePath) {
  if (!fs.existsSync(filePath)) return {}
  const text = fs.readFileSync(filePath, "utf8")
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const mm = line.match(/^([a-z_]+):\s*(.*)$/i)
    if (mm) fm[mm[1]] = mm[2].trim()
  }
  return fm
}

function parseListField(val) {
  if (!val) return []
  const m = String(val).match(/^\[(.*)\]$/)
  if (!m) return []
  return m[1].split(",").map(s => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
}

function getTargetTerms(targetType, slug) {
  const dir = targetType === "ingredient" ? "ingredients" : "products"
  const fm = readFrontmatter(path.join(repoRoot, `wiki/${dir}/${slug}.md`))
  const terms = new Set()
  // Primary term: the slug itself, humanized.
  terms.add(slug.replace(/-/g, " "))
  // Title.
  if (fm.title) terms.add(fm.title.replace(/^"|"$/g, ""))
  if (fm.label) terms.add(fm.label.replace(/^"|"$/g, ""))
  if (fm.commodity) terms.add(fm.commodity.replace(/-/g, " "))
  if (fm.category) terms.add(fm.category.replace(/-/g, " "))
  // Aliases.
  for (const a of parseListField(fm.aliases)) terms.add(a.replace(/-/g, " "))
  // Product-specific: matrices and subcategory.
  if (fm.hmtc_subcategory_name) terms.add(fm.hmtc_subcategory_name.replace(/^"|"$/g, ""))
  for (const m of parseListField(fm.matrices)) terms.add(m.replace(/-/g, " "))
  return Array.from(terms).filter(t => t && t.length >= 3 && t.length < 80)
}

function buildOpenAlexQuery(targetTerms, metal) {
  const vocab = METAL_VOCAB[metal]
  if (!vocab) return null
  const targetClause = targetTerms.slice(0, 6).map(t => `"${t}"`).join(" OR ")
  const metalClause = vocab.names.slice(0, 4).map(n => `"${n}"`).join(" OR ")
  const contextClause = `"concentration" OR "contamination" OR "occurrence" OR "exposure" OR "heavy metal" OR "trace element"`
  return `(${targetClause}) AND (${metalClause}) AND (${contextClause})`
}

async function queryOpenAlex(searchQuery, perPage = 50) {
  const params = new URLSearchParams({
    search: searchQuery,
    filter: [
      "is_oa:true",
      `type:${[...ALLOWED_TYPES].join("|")}`,
      `publication_year:${MIN_YEAR}-`,
      "has_doi:true"
    ].join(","),
    sort: "relevance_score:desc",
    per_page: String(perPage),
    select: "id,doi,title,publication_year,language,type,authorships,primary_location,open_access,cited_by_count,abstract_inverted_index,locations,concepts"
  })
  const url = `${OPENALEX_BASE}?${params.toString()}`
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } })
  if (!res.ok) {
    if (res.status === 429) {
      await sleep(2000)
      return queryOpenAlex(searchQuery, perPage)
    }
    throw new Error(`OpenAlex HTTP ${res.status}: ${await res.text().catch(() => "")}`)
  }
  const data = await res.json()
  return data.results || []
}

function getBestOaLocation(work) {
  const locs = work.locations || []
  const oaLocs = locs.filter(l => l.is_oa && l.license)
  for (const l of oaLocs) {
    const lic = (l.license || "").toLowerCase()
    if (ALLOWED_LICENSES.has(lic)) return l
  }
  const primary = work.primary_location
  if (primary && primary.is_oa && ALLOWED_LICENSES.has((primary.license || "").toLowerCase())) {
    return primary
  }
  return null
}

function reconstructAbstract(invertedIndex) {
  if (!invertedIndex || typeof invertedIndex !== "object") return ""
  const positions = []
  for (const [word, posList] of Object.entries(invertedIndex)) {
    for (const p of posList) positions.push([p, word])
  }
  positions.sort((a, b) => a[0] - b[0])
  return positions.map(p => p[1]).join(" ")
}

function workMentionsTermAndMetal(work, targetTerms, metalVocab) {
  const haystack = (
    (work.title || "") + " " +
    reconstructAbstract(work.abstract_inverted_index || {})
  ).toLowerCase()
  if (!haystack) return false
  const targetHit = targetTerms.some(t => {
    const needle = t.toLowerCase()
    return needle.length >= 4 && haystack.includes(needle)
  })
  if (!targetHit) return false
  const metalHit = metalVocab.names.some(n => {
    const needle = n.toLowerCase()
    // For 1-3 char chemical symbols, require word boundary to avoid false hits.
    if (needle.length <= 3) {
      const re = new RegExp(`\\b${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`)
      return re.test(haystack)
    }
    return haystack.includes(needle)
  })
  return metalHit
}

function filterCandidate(work, targetTerms, metalVocab) {
  if (!work.language || !ALLOWED_LANGS.has(work.language)) return { keep: false, reason: "language" }
  if (!work.doi) return { keep: false, reason: "no-doi" }
  if (work.publication_year < MIN_YEAR) return { keep: false, reason: "too-old" }
  const oaLoc = getBestOaLocation(work)
  if (!oaLoc) return { keep: false, reason: "no-allowed-license" }
  const currentYear = new Date().getFullYear()
  if (work.cited_by_count < 1 && work.publication_year < currentYear - 2) {
    return { keep: false, reason: "low-impact-old" }
  }
  if (!workMentionsTermAndMetal(work, targetTerms, metalVocab)) {
    return { keep: false, reason: "off-topic" }
  }
  return { keep: true, oaLocation: oaLoc }
}

function loadCorpusDois() {
  const sourcesDir = path.join(repoRoot, "wiki/sources")
  if (!fs.existsSync(sourcesDir)) return new Set()
  const dois = new Set()
  for (const f of fs.readdirSync(sourcesDir)) {
    if (!f.endsWith(".md")) continue
    const fm = readFrontmatter(path.join(sourcesDir, f))
    if (fm.doi) dois.add(String(fm.doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, ""))
  }
  return dois
}

function normalizeDoi(doi) {
  if (!doi) return null
  return String(doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
}

async function processTarget(targetType, slug, metal, corpusDois) {
  const terms = getTargetTerms(targetType, slug)
  if (terms.length === 0) {
    return { target: `${targetType}:${slug}`, metal, status: "no-terms", candidates: [] }
  }
  const query = buildOpenAlexQuery(terms, metal)
  if (!query) {
    return { target: `${targetType}:${slug}`, metal, status: "no-metal-vocab", candidates: [] }
  }
  let results
  try {
    results = await queryOpenAlex(query, MAX_RESULTS_PER_QUERY)
  } catch (err) {
    return { target: `${targetType}:${slug}`, metal, status: "query-error", error: err.message, candidates: [] }
  }
  const candidates = []
  const dropped = { dedup: 0, language: 0, "no-doi": 0, "too-old": 0, "no-allowed-license": 0, "low-impact-old": 0, "off-topic": 0 }
  const metalVocab = METAL_VOCAB[metal]
  for (const work of results) {
    const filterResult = filterCandidate(work, terms, metalVocab)
    if (!filterResult.keep) {
      dropped[filterResult.reason] = (dropped[filterResult.reason] || 0) + 1
      continue
    }
    const doiKey = normalizeDoi(work.doi)
    if (corpusDois.has(doiKey)) {
      dropped.dedup += 1
      continue
    }
    candidates.push({
      openalex_id: work.id,
      doi: doiKey,
      title: work.title,
      year: work.publication_year,
      language: work.language,
      type: work.type,
      cited_by_count: work.cited_by_count,
      pdf_url: filterResult.oaLocation.pdf_url || null,
      landing_page_url: filterResult.oaLocation.landing_page_url || null,
      license: filterResult.oaLocation.license,
      source_display: filterResult.oaLocation.source?.display_name || null,
      authors: (work.authorships || []).slice(0, 5).map(a => a.author?.display_name).filter(Boolean)
    })
  }
  return {
    target: `${targetType}:${slug}`,
    metal,
    status: "ok",
    query,
    terms,
    candidates_count: candidates.length,
    dropped,
    candidates
  }
}

function readManifestCsv(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const lines = text.split("\n").filter(Boolean)
  const headers = lines[0].split(",")
  const rows = []
  for (const line of lines.slice(1)) {
    const cells = line.split(",")
    const row = {}
    headers.forEach((h, i) => { row[h] = cells[i] })
    rows.push(row)
  }
  return rows
}

async function main() {
  const { values } = parseArgs({
    options: {
      manifest: { type: "string" },
      target: { type: "string" },
      metal: { type: "string" },
      limit: { type: "string", default: "20" }
    }
  })

  const outDir = path.join(repoRoot, `data/auto-fetch/candidates/${today}`)
  fs.mkdirSync(outDir, { recursive: true })

  console.log("Loading existing-corpus DOIs for dedup...")
  const corpusDois = loadCorpusDois()
  console.log(`  ${corpusDois.size} DOIs already in corpus`)

  const targets = []
  if (values.target && values.metal) {
    const [targetType, slug] = values.target.split(":")
    targets.push({ targetType, slug, metal: values.metal })
  } else if (values.manifest) {
    const rows = readManifestCsv(path.join(repoRoot, values.manifest))
    const limit = parseInt(values.limit, 10)
    for (const row of rows.slice(0, limit)) {
      if (row.target_exists === "false") continue // skip pages that don't exist yet
      targets.push({
        targetType: row.target_type,
        slug: row.target_slug,
        metal: row.metal
      })
    }
  } else {
    console.error("Usage: --manifest <csv> [--limit N]  OR  --target ingredient:cassava --metal Cd")
    process.exit(2)
  }

  console.log(`Querying OpenAlex for ${targets.length} (target, metal) pairs at ${RATE_LIMIT_RPS} rps...`)
  const runResults = []
  let totalCandidates = 0
  for (let i = 0; i < targets.length; i++) {
    const { targetType, slug, metal } = targets[i]
    process.stdout.write(`  [${i + 1}/${targets.length}] ${targetType}:${slug} × ${metal}... `)
    const result = await processTarget(targetType, slug, metal, corpusDois)
    const outFile = path.join(outDir, `${targetType}__${slug}__${metal}.json`)
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2), "utf8")
    runResults.push({ ...result, candidates: undefined })
    totalCandidates += result.candidates?.length || 0
    console.log(`${result.candidates?.length ?? 0} candidates`)
    if (i < targets.length - 1) await sleep(1000 / RATE_LIMIT_RPS)
  }

  fs.writeFileSync(
    path.join(outDir, "_run.json"),
    JSON.stringify({
      run_date: today,
      targets_processed: targets.length,
      total_candidates: totalCandidates,
      results: runResults
    }, null, 2),
    "utf8"
  )

  console.log(`\nDone. ${totalCandidates} total candidates across ${targets.length} targets.`)
  console.log(`Per-target candidate files: data/auto-fetch/candidates/${today}/`)
  console.log(`Run manifest: data/auto-fetch/candidates/${today}/_run.json`)
}

main().catch(err => {
  console.error("Fatal:", err)
  process.exit(1)
})
