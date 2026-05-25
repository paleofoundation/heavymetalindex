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
// Sprint mode: 8 → 25 candidates per OpenAlex query so each query produces
// more material. Combined with concurrent fetches below, throughput target
// is ~200-500 PDFs per fetch run.
const PER_QUERY_LIMIT = 25
const FROM_YEAR = 2015
const API_DELAY_MS = 150
const DOWNLOAD_DELAY_MS = 200
// Sprint mode 2026-05-25: 5 concurrent PDF fetches per query batch
// (instead of strict sequential). OpenAlex polite-pool allows 10 req/sec
// globally; per-publisher concurrency is implicitly limited by the
// candidate diversity within a single OpenAlex result set.
const CONCURRENT_FETCHES = 5
// Threshold lowered 2026-05-19 from 3 → 1 after measuring that the prior
// threshold rejected 63% of wishlist candidates (440 skip:no-keyword-overlap
// + 102 review:weak-match out of 868 rows). The negative-keyword filter is
// the real precision gate (biosensor/perovskite/case-report etc. score below
// zero and stay out). Any positive hit after negative-penalty applies is
// worth a fetch + content-check.
const DOWNLOAD_THRESHOLD = 1

// Metal alias table — mirrors METAL_SPECS in tools/wishlist/parse-wishlist.mjs.
// Used to score paper abstracts against ALL synonyms of a metal, not just the
// canonical search term. Without this, a paper saying "Pb levels" wouldn't
// score against a query whose extracted metal is "lead".
const METAL_ALIASES = {
  "lead": ["lead", "pb"],
  "cadmium": ["cadmium", "cd"],
  "inorganic arsenic": ["inorganic arsenic", "ias"],
  "arsenic": ["arsenic", "tas", "total arsenic"],
  "methylmercury": ["methylmercury", "mehg"],
  "mercury": ["mercury", "thg", "total mercury"],
  "nickel": ["nickel", "ni"],
  "aluminum": ["aluminum", "aluminium", "al"],
  "hexavalent chromium": ["hexavalent chromium", "cr-vi", "cr(vi)"],
  "chromium": ["chromium", "cr"],
  "tin": ["tin", "sn"],
  "antimony": ["antimony", "sb"],
  "uranium": ["uranium"],
  "heavy metals": ["heavy metal", "heavy metals", "toxic metal", "toxic metals", "trace metal", "trace metals"],
}
function expandMetalAliases(metalSearchTerms) {
  const expanded = new Set()
  for (const t of metalSearchTerms || []) {
    const aliases = METAL_ALIASES[t.toLowerCase()] || [t]
    for (const a of aliases) expanded.add(a)
  }
  return [...expanded]
}

// Negative-keyword prefilter. Papers with these phrases in title/abstract
// are predominantly sensor methodology, materials science, plant molecular
// biology, AMR studies, or clinical case reports — papers that mention
// metals but do not report food-matrix concentration data. We score them
// down so they fall below DOWNLOAD_THRESHOLD even if positive keywords hit.
// Audited via wishlist-fetch-audit.csv; rejections are logged with reason.
const NEGATIVE_KEYWORDS = [
  // sensor/biosensor methodology
  "biosensor", "fluorescence sensor", "colorimetric sensor", "electrochemical sensor",
  "voltammetric", "amperometric", "potentiometric sensor", "fluorometric",
  "LIBS", "laser-induced", "ratiometric sensor", "chemosensor",
  "nanoparticle sensor", "quantum dot sensor", "carbon dot sensor", "aptamer sensor",
  // materials science contexts
  "perovskite", "photovoltaic", "solar cell", "battery", "catalyst",
  "MOF synthesis", "metal-organic framework", "nanocomposite synthesis",
  // plant molecular biology / experiment contexts
  "transcriptomic", "QTL mapping", "gene expression analysis", "transgenic",
  "stress tolerance", "phytoextraction", "phytoremediation", "hydroponic",
  "CRISPR", "rhizosphere", "metallothionein gene", "transporter gene",
  // AMR / microbiology contexts
  "antimicrobial resistance", "antibiotic resistance gene", "AMR",
  "metal resistance gene", "biofilm formation", "Salmonella isolates",
  // clinical case reports / pathology
  "case report", "case series", "fatty liver", "acute kidney injury",
  "hepatology", "nephrology", "renal failure", "intoxication case",
  // pure ecology / soil-only studies
  "sediment ecology", "bioindicator species", "mining tailings remediation",
  "soil microbial community",
]

function negativeScore(haystack) {
  let penalty = 0
  for (const kw of NEGATIVE_KEYWORDS) {
    if (haystack.includes(kw.toLowerCase())) penalty -= 2
  }
  return penalty
}

function matchedNegatives(haystack) {
  const hits = []
  for (const kw of NEGATIVE_KEYWORDS) {
    if (haystack.includes(kw.toLowerCase())) hits.push(kw)
  }
  return hits
}

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

// Sprint mode 2026-05-25: wall-clock budget per invocation so the fetcher
// fits inside a 30-min daemon tick when the wishlist generator emits up to
// 2500 queries. Override with HMI_FETCH_BUDGET_MS env. Default 15 min
// leaves the rest of the tick for routing, hygiene, briefings, etc.
const FETCH_BUDGET_MS = parseInt(process.env.HMI_FETCH_BUDGET_MS || "900000", 10)
const FETCH_START = Date.now()
let budgetExhausted = false

// Resume from where the previous invocation left off (rotates through the
// 2500-query list across multiple daemon ticks instead of always restarting
// from query 0). The checkpoint resets when the generator emits a fresh
// query list (different hash) or the fetcher completes the whole list.
const CHECKPOINT_PATH = path.join(repoRoot, "data/evidence/wishlist-fetch-checkpoint.json")
let startIndex = 0
const queriesHash = JSON.stringify(queries.slice(0, 5).map(q => q.id))  // cheap signature
if (fs.existsSync(CHECKPOINT_PATH)) {
  try {
    const cp = JSON.parse(fs.readFileSync(CHECKPOINT_PATH, "utf8"))
    if (cp.queriesHash === queriesHash && typeof cp.nextIndex === "number" && cp.nextIndex < queries.length) {
      startIndex = cp.nextIndex
      console.error(`[checkpoint] resuming from query index ${startIndex} of ${queries.length}`)
    }
  } catch {}
}

for (let i = startIndex; i < queries.length; i += 1) {
  if (Date.now() - FETCH_START > FETCH_BUDGET_MS) {
    if (!budgetExhausted) {
      console.error(`[budget] FETCH_BUDGET_MS=${FETCH_BUDGET_MS} exhausted after ${i - startIndex} queries this run (${i}/${queries.length} total); checkpointing.`)
      budgetExhausted = true
      fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify({ queriesHash, nextIndex: i }))
    }
    break
  }
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

  // Build candidate rows first (cheap, no I/O). Defer all PDF fetches to a
  // batched concurrent pass below — gets us ~5× wall-clock improvement per
  // OpenAlex query in sprint mode.
  const fetchCandidates = []
  for (const work of works) {
    const doi = work.doi ? normalizeDoi(work.doi) : ""
    const titleNorm = work.title ? normalizeTitle(work.title) : ""
    const alreadyIndexed = (doi && existingDOIs.has(doi)) || (titleNorm && existingTitles.has(titleNorm))

    const abstract = reconstructAbstract(work.abstract_inverted_index)
    const haystack = `${work.title ?? ""} ${abstract}`.toLowerCase()
    const positiveScore = scoreHits(haystack, [
      ...q.extracted.crops,
      ...q.extracted.regions,
      ...q.extracted.metals,
      ...expandMetalAliases(q.extracted.metal_search_terms),
      ...q.extracted.periods,
    ])
    const penalty = negativeScore(haystack)
    const score = positiveScore + penalty
    const negativeHits = matchedNegatives(haystack)

    const oaUrl = work.open_access?.oa_url ?? ""
    const row = {
      wishlist_id: q.id,
      wishlist_section: q.section,
      query_terms: searchTerms,
      relevance_score: score,
      positive_score: positiveScore,
      negative_penalty: penalty,
      negative_hits: negativeHits.join("; "),
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
      audit.push(row)
    } else if (!oaUrl) {
      row.decision = "skip:no-oa-url"
      totalSkippedNoOa += 1
      audit.push(row)
    } else if (score < DOWNLOAD_THRESHOLD) {
      row.decision = score === 0 ? "skip:no-keyword-overlap" : "review:weak-match"
      totalSkippedWeak += 1
      audit.push(row)
    } else {
      // Strong or likely match → queue for concurrent download below.
      const filename = candidateFilename(row)
      const target = path.join(stagingDir, filename)
      if (fs.existsSync(target)) {
        row.decision = "skip:already-in-staging"
        row.downloaded_path = path.relative(repoRoot, target)
        totalSkippedIndexed += 1
        audit.push(row)
      } else {
        fetchCandidates.push({ row, target, oaUrl })
      }
    }
  }

  // Concurrent fetch pass: CONCURRENT_FETCHES (default 5) in flight at any time.
  // Each candidate has a hard 25s deadline via Promise.race to prevent hung
  // sockets from blocking the whole query batch.
  async function fetchOne({ row, target, oaUrl }) {
    process.stdout.write(`  ↓ ${row.title.slice(0, 65)} ... `)
    try {
      const response = await Promise.race([
        fetch(oaUrl, { headers: { "User-Agent": USER_AGENT }, redirect: "follow" }),
        new Promise((_, rej) => setTimeout(() => rej(new Error("hard-timeout")), 25000)),
      ])
      if (!response.ok) {
        process.stdout.write(`HTTP ${response.status}\n`)
        row.decision = `fail:http-${response.status}`
        totalFailed += 1
      } else {
        const contentType = response.headers.get("content-type") || ""
        if (!contentType.includes("pdf") && !contentType.includes("octet-stream")) {
          process.stdout.write(`not PDF\n`)
          row.decision = `skip:not-pdf:${contentType.slice(0, 40)}`
          totalSkippedNoOa += 1
        } else {
          const buffer = Buffer.from(await Promise.race([
            response.arrayBuffer(),
            new Promise((_, rej) => setTimeout(() => rej(new Error("body-timeout")), 25000)),
          ]))
          fs.writeFileSync(target, buffer)
          process.stdout.write(`${formatBytes(buffer.length)}\n`)
          row.decision = "downloaded"
          row.downloaded_path = path.relative(repoRoot, target)
          totalDownloaded += 1
        }
      }
    } catch (err) {
      process.stdout.write(`error: ${err.message.slice(0, 50)}\n`)
      row.decision = `fail:${err.message.slice(0, 40)}`
      totalFailed += 1
    }
    audit.push(row)
  }

  for (let bi = 0; bi < fetchCandidates.length; bi += CONCURRENT_FETCHES) {
    const batch = fetchCandidates.slice(bi, bi + CONCURRENT_FETCHES)
    await Promise.all(batch.map(fetchOne))
    await new Promise((r) => setTimeout(r, DOWNLOAD_DELAY_MS))
  }

  await new Promise((r) => setTimeout(r, API_DELAY_MS))
}

// Clear checkpoint if we got through the whole list this run (or never hit budget)
if (!budgetExhausted) {
  try { fs.existsSync(CHECKPOINT_PATH) && fs.unlinkSync(CHECKPOINT_PATH) } catch {}
}

audit.sort((a, b) => a.wishlist_id.localeCompare(b.wishlist_id) || b.relevance_score - a.relevance_score)

writeCsv(auditPath, audit, [
  "wishlist_id",
  "wishlist_section",
  "decision",
  "downloaded_path",
  "relevance_score",
  "positive_score",
  "negative_penalty",
  "negative_hits",
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
