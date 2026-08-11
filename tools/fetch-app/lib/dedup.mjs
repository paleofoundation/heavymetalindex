// Dedup against the existing corpus. Reuses the discovery corpus index
// (data/evidence/discovery/corpus-index.json: {by_doi, by_normalized_title}),
// which build-corpus-index.mjs regenerates from wiki/sources/ + the manual-
// fetch tracker. We also scan the manual-fetch staging roots on disk so a paper
// already downloaded (but not yet ingested) is not re-fetched.

import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { normalizeDoi, normalizeTitle } from "./util.mjs"

const repoRoot = process.cwd()
const corpusIndexPath = path.join(repoRoot, "data/evidence/discovery/corpus-index.json")

const STAGING_ROOTS = [
  "raw/Manual Fetch Discovery",
  "raw/Manual Fetch Kimi ",
  "raw/Papers Cube Manual Fetch",
  "raw/Manual Resourcing",
  "raw/manual-fetch",
]

export function rebuildCorpusIndex() {
  const r = spawnSync(process.execPath, ["tools/discovery/build-corpus-index.mjs"], {
    cwd: repoRoot,
    encoding: "utf8",
  })
  return { ok: r.status === 0, out: (r.stdout || "") + (r.stderr || "") }
}

export function loadCorpusIndex() {
  const idx = { byDoi: new Set(), byTitle: new Set(), builtAt: null, sourceCount: 0 }
  try {
    const raw = JSON.parse(fs.readFileSync(corpusIndexPath, "utf8"))
    for (const d of Object.keys(raw.by_doi || {})) if (d && d !== "null") idx.byDoi.add(normalizeDoi(d))
    for (const t of Object.keys(raw.by_normalized_title || {})) if (t) idx.byTitle.add(t)
    idx.builtAt = raw.built_at || null
    idx.sourceCount = raw.source_count || 0
  } catch {}
  return idx
}

// Filenames already present in staging (any root), so we don't re-download a
// paper that's queued but not yet ingested. Returns a Set of lowercased slugs
// derived from the DOI, which is what our minted filenames embed.
export function loadStagingDoiSlugs() {
  const slugs = new Set()
  const walk = (dir) => {
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) walk(full)
      else if (e.name.toLowerCase().endsWith(".pdf")) {
        const m = e.name.toLowerCase().match(/10-\d{4,}[-a-z0-9]*/)
        if (m) slugs.add(m[0])
      }
    }
  }
  for (const root of STAGING_ROOTS) walk(path.join(repoRoot, root))
  return slugs
}

export function makeDeduper() {
  const corpus = loadCorpusIndex()
  const stagingSlugs = loadStagingDoiSlugs()
  const seenThisRun = new Set() // cross-source + cross-query dedup within a run

  function key(cand) {
    return cand.doi ? `doi:${normalizeDoi(cand.doi)}` : `title:${normalizeTitle(cand.title)}`
  }

  // Returns { duplicate:boolean, reason:string }
  function check(cand) {
    const doi = normalizeDoi(cand.doi || "")
    const title = normalizeTitle(cand.title || "")
    const k = key(cand)
    if (seenThisRun.has(k)) return { duplicate: true, reason: "dup:this-run" }
    if (doi && corpus.byDoi.has(doi)) return { duplicate: true, reason: "dup:corpus-doi" }
    if (title && corpus.byTitle.has(title)) return { duplicate: true, reason: "dup:corpus-title" }
    if (doi) {
      const slug = doi.replace(/[^a-z0-9]+/gi, "-")
      if (stagingSlugs.has(slug)) return { duplicate: true, reason: "dup:staging" }
    }
    return { duplicate: false, reason: "" }
  }

  function markSeen(cand) {
    seenThisRun.add(key(cand))
  }

  return { check, markSeen, corpus, stagingCount: stagingSlugs.size }
}
