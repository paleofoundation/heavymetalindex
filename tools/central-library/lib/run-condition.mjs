// Condition research runner — the real Microbiome Medicine research tool.
//
// Given a subject (a condition like "Multiple Sclerosis") and a preset set, it
// expands every preset query template (substituting the subject), searches the
// literature databases, dedupes each query's results, and downloads the open-
// access PDFs into a per-query folder:
//
//   <outRoot>/<Subject>/<query with subject substituted>/<paper>.pdf
//
// This reproduces the behavior of the old tool (see ~/Desktop/Multiple Sclerosis).
// It reuses the fetch-app engine wholesale — the source adapters and the
// PDF-download-with-rescue chain — so there is one fetch/dedupe/download stack,
// not two. Unlike the HMI fetch-app, this runner applies NO food/HMI relevance
// gate: a research pull downloads what each query returns.

import fs from "node:fs"
import path from "node:path"

import { ADAPTERS } from "../../fetch-app/lib/sources.mjs"
import { downloadWithRescue } from "../../fetch-app/lib/pdf-fetch.mjs"
import { loadKeys } from "../../fetch-app/lib/config.mjs"
import { loadCorpusIndex, loadStagingDoiSlugs } from "../../fetch-app/lib/dedup.mjs"
import { normalizeDoi, normalizeTitle, slugify, sleep, toCsv } from "../../fetch-app/lib/util.mjs"
import { researchPullsDir, isLibraryDriveMounted } from "../../lib/library-root.mjs"

const repoRoot = process.cwd()
const presetsDir = path.join(repoRoot, "tools/central-library/presets")

const DEFAULT_SOURCES = ["pubmed", "openalex", "crossref", "semanticscholar"]
const CONCURRENT_DOWNLOADS = 4

export function listPresets() {
  try {
    return fs
      .readdirSync(presetsDir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => {
        const p = JSON.parse(fs.readFileSync(path.join(presetsDir, f), "utf8"))
        const queryCount = (p.groups || []).reduce((n, g) => n + g.queries.length, 0)
        return {
          id: p.id,
          label: p.label,
          build: p.build || "",
          subjectLabel: p.subjectLabel || "Subject",
          placeholder: p.placeholder || "[Subject]",
          groupCount: (p.groups || []).length,
          queryCount,
        }
      })
  } catch {
    return []
  }
}

export function loadPreset(id) {
  const file = path.join(presetsDir, `${id}.json`)
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

// Expand a preset's templates for a subject. The subject placeholder (e.g.
// [Condition] or [Matrix]) is substituted directly. An optional second
// placeholder (default [Analyte]) fans a template out across the preset's
// `analytes` list — so "[Analyte] [Matrix]" for rice becomes one query per
// analyte (lead rice, cadmium rice, …). Returns [{ group, template, query,
// analyte? }].
export function expandQueries(preset, subject) {
  const ph = preset.placeholder || "[Subject]"
  const aPh = preset.analytePlaceholder || "[Analyte]"
  const analytes = Array.isArray(preset.analytes) ? preset.analytes : []
  const clean = (s) => s.replace(/\s+/g, " ").trim()
  const out = []
  for (const g of preset.groups || []) {
    for (const template of g.queries) {
      const withSubject = template.split(ph).join(subject)
      if (analytes.length && withSubject.includes(aPh)) {
        for (const a of analytes) out.push({ group: g.name, template, analyte: a, query: clean(withSubject.split(aPh).join(a)) })
      } else {
        out.push({ group: g.name, template, query: clean(withSubject) })
      }
    }
  }
  return out
}

// Windows/macOS-safe folder name for a query (the query IS the folder name, as
// in the old tool). Strips path-illegal characters, neutralizes "."/".." so a
// subject can never traverse out of outRoot, and disambiguates when truncated so
// two long queries can't collapse onto one folder.
function safeFolder(name) {
  let s = String(name).replace(/[\/\\:*?"<>|]/g, " ").replace(/\s+/g, " ").trim()
  s = s.replace(/^\.+/, "").trim() // strip leading dots — "." / ".." can't traverse
  if (!s || /^\.+$/.test(s)) s = "untitled"
  if (s.length > 180) s = `${s.slice(0, 168).trim()}-${Math.abs(hash(name)).toString(36)}`
  return s
}

function urlBasename(u) {
  try {
    const seg = new URL(u).pathname.split("/").filter(Boolean).pop() || ""
    return decodeURIComponent(seg)
  } catch {
    return ""
  }
}

// Generic OA-URL basenames that do NOT identify the paper — many publishers
// serve /fulltext.pdf, /pdf, /download, /main.pdf. Never use these as filenames
// (two distinct papers would collide on one path).
const GENERIC_BASENAMES = new Set([
  "fulltext", "download", "main", "article", "pdf", "paper", "file", "view",
  "content", "document", "get", "nihms", "index", "full", "getpdf",
])

// Filename: prefer the publisher's native PDF basename (ncomms12015.pdf,
// s41598-024-64369-x.pdf …) as the old tool did, but only when it's specific;
// else DOI (unique); else title slug; else a per-candidate hash. fetchOne
// additionally guarantees uniqueness within the folder.
function filenameFor(cand) {
  const base = urlBasename(cand.oaUrl)
  const stem = base.replace(/\.pdf$/i, "").toLowerCase()
  if (/^[A-Za-z0-9][\w.\-]{2,90}\.pdf$/i.test(base) && !GENERIC_BASENAMES.has(stem)) return base
  const doi = normalizeDoi(cand.doi)
  if (doi) return `${slugify(doi, 90)}.pdf`
  const t = slugify(cand.title, 90)
  if (t) return `${t}.pdf`
  return `paper-${Math.abs(hash(cand.external_id || cand.oaUrl || cand.url || cand.doi || cand.source || ""))}.pdf`
}

function hash(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return h
}

function dedupKey(cand) {
  const doi = normalizeDoi(cand.doi)
  if (doi) return `doi:${doi}`
  const pmid = /PMID:(\d+)/i.exec(cand.external_id || "")?.[1]
  if (pmid) return `pmid:${pmid}`
  const t = normalizeTitle(cand.title)
  if (t) return `title:${t}`
  const idv = cand.external_id || cand.url || cand.oaUrl
  // Deterministic fallback (never Math.random) so identical malformed records
  // collapse to one key and dedup is reproducible across runs.
  return idv ? `id:${idv}` : `id:${Math.abs(hash([cand.source, cand.title, cand.oaUrl, cand.doi].join("|")))}`
}

// Run a full condition pull.
//   opts = { subject, presetId, sources, fromYear, toYear, outRoot, keys,
//            maxPerQuery, groups (name filter), limitQueries, dryRun, onEvent }
export async function runCondition(opts) {
  const {
    subject,
    presetId = "microbiome-medicine",
    sources,
    fromYear = 2000,
    toYear = new Date().getFullYear() + 1,
    maxPerQuery = 15, // per-query download cap (OA-direct first); 0 = no cap
    dedupeCorpus = true, // skip papers already in the ~23k corpus / staging
    groups = null,
    limitQueries = 0, // 0 = all; >0 caps the number of queries (for quick tests)
    dryRun = false,
    onEvent = () => {},
    runId = `cond-${Date.now()}`,
  } = opts

  const keys = opts.keys || loadKeys()
  if (!subject || !subject.trim()) throw new Error("subject (condition) is required")

  const preset = loadPreset(presetId)
  // Where downloads land: an explicit outRoot wins; otherwise the Intenso
  // library's research-pulls area (organized by preset). If the drive isn't
  // plugged in, refuse a real run rather than silently write to the wrong place
  // (a dry run is allowed for display only).
  let outRoot
  if (opts.outRoot) {
    outRoot = path.resolve(opts.outRoot)
  } else if (isLibraryDriveMounted()) {
    outRoot = path.join(researchPullsDir(), slugify(preset.label || preset.id, 60))
  } else if (dryRun) {
    outRoot = path.join(process.env.HOME || repoRoot, "Desktop")
  } else {
    throw new Error(
      "HMI-Library drive is not plugged in — plug it in to download into the library, or pass --out <dir>.",
    )
  }
  const subjectDir = path.join(outRoot, safeFolder(subject.trim()))

  let queries = expandQueries(preset, subject.trim())
  if (groups && groups.length) queries = queries.filter((q) => groups.includes(q.group))
  if (limitQueries > 0) queries = queries.slice(0, limitQueries)

  // Default sources: the free academic DBs + any SERP source whose key is set
  // (SerpAPI = Google Scholar, Serper = Google filetype:pdf). The SERP recall
  // layer is what drives high yield — the original tool leaned on it. Explicit
  // opts.sources overrides. NOTE: SerpAPI bills per search, so a 130-query
  // sweep with SerpAPI on = 130 SerpAPI calls.
  const effectiveSources =
    sources && sources.length
      ? sources
      : [
          ...DEFAULT_SOURCES,
          ...(keys.serpapi_key ? ["serpapi"] : []),
          ...(keys.serper_key ? ["serper"] : []),
        ]
  const activeSources = effectiveSources.filter((s) => ADAPTERS[s])
  const log = (msg) => onEvent({ type: "log", msg })

  onEvent({
    type: "start",
    runId,
    subject: subject.trim(),
    preset: preset.label,
    queryCount: queries.length,
    sources: activeSources,
    outDir: subjectDir,
    dryRun,
  })

  if (!dryRun) fs.mkdirSync(subjectDir, { recursive: true })

  const manifest = []
  const stats = { queries: queries.length, found: 0, unique: 0, downloaded: 0, skipped: 0, failed: 0, corpusSkipped: 0 }

  // Corpus-aware dedup: skip papers already in the ~23k corpus or already in the
  // manual-fetch staging, so a sweep never re-downloads what we already own.
  // Reuses the fetch-app corpus index + on-disk staging scan.
  const corpus = dedupeCorpus ? loadCorpusIndex() : { byDoi: new Set(), byTitle: new Set() }
  const stagingSlugs = dedupeCorpus ? loadStagingDoiSlugs() : new Set()
  if (dedupeCorpus) log(`corpus dedup: ${corpus.byDoi.size} DOIs, ${corpus.byTitle.size} titles, ${stagingSlugs.size} staged`)

  for (let qi = 0; qi < queries.length; qi++) {
    const { group, query } = queries[qi]
    onEvent({ type: "query-start", index: qi, total: queries.length, group, query })

    // 1) gather candidates from every source
    const job = { query, fromYear, toYear, domain: "none", scoreTerms: { products: [], metals: [] } }
    const raw = []
    for (const s of activeSources) {
      try {
        const res = await ADAPTERS[s](job, keys, log)
        raw.push(...res)
      } catch (err) {
        log(`${s} error on "${query}": ${err.message}`)
      }
      await sleep(120)
    }
    stats.found += raw.length

    // 2) dedupe within this query AND against the corpus/staging
    const seen = new Set()
    let unique = []
    for (const c of raw) {
      const k = dedupKey(c)
      if (seen.has(k)) continue
      seen.add(k)
      if (dedupeCorpus) {
        const doi = normalizeDoi(c.doi || "")
        const title = normalizeTitle(c.title || "")
        const inCorpus =
          (doi && corpus.byDoi.has(doi)) ||
          (title && corpus.byTitle.has(title)) ||
          (doi && stagingSlugs.has(doi.replace(/[^a-z0-9]+/gi, "-")))
        if (inCorpus) {
          stats.corpusSkipped++
          manifest.push({ runId, subject, group, query, decision: "dup:corpus", source: c.source, title: c.title, doi: c.doi, oa_url: c.oaUrl, file: "" })
          continue
        }
      }
      unique.push(c)
    }
    // keep only downloadable candidates (OA url or a DOI to resolve), and put
    // candidates with a direct OA PDF url first — they succeed most often — so
    // the per-query cap keeps the highest-yield ones (as the old tool did).
    unique = unique.filter((c) => c.oaUrl || c.doi)
    // OA-direct first (highest download yield), then newest — so the per-query
    // cap keeps the most useful hits rather than whichever source ran first.
    unique.sort((a, b) => ((b.oaUrl ? 1 : 0) - (a.oaUrl ? 1 : 0)) || ((Number(b.year) || 0) - (Number(a.year) || 0)))
    if (maxPerQuery > 0) unique = unique.slice(0, maxPerQuery)
    stats.unique += unique.length

    onEvent({ type: "query-candidates", query, found: raw.length, unique: unique.length })

    if (dryRun) {
      for (const c of unique) manifest.push({ runId, subject, group, query, decision: "dry-run", source: c.source, title: c.title, doi: c.doi, oa_url: c.oaUrl, file: "" })
      continue
    }

    // 3) download unique candidates into this query's folder
    const queryDir = path.join(subjectDir, safeFolder(query))
    fs.mkdirSync(queryDir, { recursive: true })
    const usedNames = new Set() // reserve filenames so two papers never collide

    async function fetchOne(c) {
      // Mint + reserve the filename synchronously (before any await) so concurrent
      // downloads in the same batch can't both claim one path and clobber it.
      let filename = filenameFor(c)
      if (usedNames.has(filename)) {
        const stem = filename.replace(/\.pdf$/i, "")
        let n = 2
        while (usedNames.has(`${stem}-${n}.pdf`)) n++
        filename = `${stem}-${n}.pdf`
      }
      usedNames.add(filename)
      const target = path.join(queryDir, filename)
      const rel = path.relative(subjectDir, target)
      if (fs.existsSync(target)) {
        stats.skipped++
        manifest.push({ runId, subject, group, query, decision: "skip:exists", source: c.source, title: c.title, doi: c.doi, oa_url: c.oaUrl, file: rel })
        return
      }
      const r = await downloadWithRescue({ oaUrl: c.oaUrl, doi: c.doi, title: c.title }, target, keys.contact_email)
      if (r.saved) {
        stats.downloaded++
        manifest.push({ runId, subject, group, query, decision: "downloaded", source: c.source, via: r.via, bytes: r.bytes, title: c.title, doi: c.doi, oa_url: r.oaUrl || c.oaUrl, file: rel })
        onEvent({ type: "download", query, title: c.title, source: c.source, via: r.via, bytes: r.bytes, file: rel })
      } else {
        stats.failed++
        manifest.push({ runId, subject, group, query, decision: r.decision, source: c.source, title: c.title, doi: c.doi, oa_url: c.oaUrl, file: "" })
      }
    }

    for (let bi = 0; bi < unique.length; bi += CONCURRENT_DOWNLOADS) {
      await Promise.all(unique.slice(bi, bi + CONCURRENT_DOWNLOADS).map(fetchOne))
      await sleep(150)
    }

    // Remove an empty query folder (query returned nothing downloadable) so the
    // output mirrors the old tool, which only kept folders that got files.
    try {
      if (fs.readdirSync(queryDir).length === 0) fs.rmdirSync(queryDir)
    } catch {}

    onEvent({ type: "query-done", index: qi, total: queries.length, query, downloaded: stats.downloaded })
  }

  // manifest
  let manifestPath = ""
  if (!dryRun) {
    manifestPath = path.join(subjectDir, "_manifest.csv")
    fs.writeFileSync(
      manifestPath,
      toCsv(manifest, ["runId", "subject", "group", "query", "decision", "source", "via", "bytes", "title", "doi", "oa_url", "file"]),
    )
  }

  const summary = { runId, subject: subject.trim(), stats, outDir: subjectDir, manifestPath, dryRun }
  onEvent({ type: "done", ...summary })
  return summary
}
