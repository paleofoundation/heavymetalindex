#!/usr/bin/env node
// Harvest the wishlist from what the fetch tools ALREADY logged.
//
// Every fetch run records the candidates it could NOT download (paywalled /
// no-OA / fetch-failed) with their DOI + title intact. This reducer scans those
// audits, drops anything already in the have-set (Phase-1 index / corpus /
// staging — so it never lists a paper Karen owns), and upserts the rest into
// data/evidence/wishlist/wishlist.jsonl with a running surfacing[] history.
//
// It does NOT add capture code to the fetchers — it reads their existing output.
//
//   npm run wishlist:harvest
//
// Sources scanned:
//   data/evidence/fetch-app/*.csv                    (HMI fetch-app runs)
//   <drive>/research-pulls/**/_manifest.csv          (central-library sweeps)
//   data/evidence/wishlist-fetch-audit.csv           (gap-driven candidate finder)

import fs from "node:fs"
import path from "node:path"
import { parseCsvFile } from "../library/lib/csv.mjs"
import { normalizeDoi, normalizeTitle, doiSlug } from "../library/lib/extract.mjs"
import { loadWishlist, upsertEntry, saveWishlist } from "./lib/wishlist-store.mjs"
import { researchPullsDir } from "../lib/library-root.mjs"

const repoRoot = process.cwd()
const QUIET = process.argv.includes("--quiet")
const log = (...m) => { if (!QUIET) console.log(...m) }

// ── have-set: prefer the Phase-1 index (full 25k), fall back to corpus-index ──
async function haveSet() {
  let keys = { dois: new Set(), doiSlugs: new Set(), titles: new Set() }
  try {
    const { openIndex } = await import("../library/lib/index-db.mjs")
    const ix = openIndex({ readonly: true })
    keys = ix.haveKeys()
    ix.close()
    log(`  have-set from library index: ${keys.dois.size} DOIs, ${keys.doiSlugs.size} slugs, ${keys.titles.size} titles`)
  } catch (err) {
    const { loadCorpusIndex } = await import("../fetch-app/lib/dedup.mjs")
    const c = loadCorpusIndex()
    keys = { dois: c.byDoi, titles: c.byTitle, doiSlugs: new Set() }
    log(`  have-set from corpus-index only (drive not mounted): ${keys.dois.size} DOIs`)
  }
  return keys
}
function isHave(keys, doi, title) {
  const d = normalizeDoi(doi || "")
  if (d && keys.dois.has(d)) return true
  if (d && keys.doiSlugs.has(doiSlug(d))) return true
  const t = normalizeTitle(title || "")
  if (t && keys.titles.has(t)) return true
  return false
}

// ── which decisions mean "wanted but not obtained" ───────────────────────────
function isUndownloadable(decision) {
  const d = String(decision || "")
  if (!/^(skip|fail):/.test(d)) return false // downloaded / dup:* / reject:* excluded
  if (/already-indexed/.test(d)) return false // that's a HAVE
  return true
}

// ── source readers → common candidate shape ──────────────────────────────────
function* fromFetchApp() {
  const dir = path.join(repoRoot, "data/evidence/fetch-app")
  let files = []
  try { files = fs.readdirSync(dir).filter((f) => f.endsWith(".csv")) } catch { return }
  for (const f of files) {
    for (const r of parseCsvFile(path.join(dir, f))) {
      if (!isUndownloadable(r.decision)) continue
      if (!r.doi && !r.title) continue
      yield {
        cand: { doi: r.doi, title: r.title, year: r.year, oa_url: r.oa_url, cited_by_count: r.cited_by_count },
        sighting: { query: r.query, preset_group: [r.category, r.subcategory].filter(Boolean).join("/") || null, run_id: r.run_id, decision: r.decision, source: "fetch-app", build: "hmi" },
      }
    }
  }
}

function* fromCentralLibrary() {
  const root = researchPullsDir()
  if (!root) return
  const manifests = []
  const stack = [root]
  while (stack.length) {
    const dir = stack.pop()
    let entries
    try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { continue }
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) stack.push(full)
      else if (e.name === "_manifest.csv") manifests.push(full)
    }
  }
  for (const m of manifests) {
    // preset folder = first path segment under research-pulls → infer build
    const rel = path.relative(root, m)
    const preset = rel.split(path.sep)[0] || ""
    const build = /microbiome|mmed|condition/i.test(preset) ? "mmed" : "hmi"
    for (const r of parseCsvFile(m)) {
      if (!isUndownloadable(r.decision)) continue
      if (!r.doi && !r.title) continue
      yield {
        cand: { doi: r.doi, title: r.title, oa_url: r.oa_url },
        sighting: { query: r.query, preset_group: r.group || preset, run_id: r.runId, decision: r.decision, source: "central-library", build },
      }
    }
  }
}

function* fromGapWishlist() {
  const f = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
  if (!fs.existsSync(f)) return
  for (const r of parseCsvFile(f)) {
    if (!isUndownloadable(r.decision)) continue
    if (!r.doi && !r.title) continue
    yield {
      cand: { doi: r.doi, title: r.title, year: r.year, journal: r.journal, oa_url: r.oa_url, cited_by_count: r.cited_by_count },
      sighting: { query: r.query_terms, preset_group: r.wishlist_section, run_id: null, decision: r.decision, source: "gap-driven", build: "hmi" },
    }
  }
}

// ── run ──────────────────────────────────────────────────────────────────────
const keys = await haveSet()
const byKey = loadWishlist()
const before = byKey.size

let scanned = 0, bornHave = 0, upserted = 0
for (const gen of [fromFetchApp(), fromCentralLibrary(), fromGapWishlist()]) {
  for (const { cand, sighting } of gen) {
    scanned++
    if (isHave(keys, cand.doi, cand.title)) { bornHave++; continue }
    const e = upsertEntry(byKey, cand, sighting)
    if (e) upserted++
  }
}

saveWishlist(byKey)
const open = [...byKey.values()].filter((e) => e.status === "open").length
log(`\n✓ wishlist harvested`)
log(`  undownloadable rows scanned: ${scanned}`)
log(`  already-have (skipped):      ${bornHave}`)
log(`  wishlist entries: ${byKey.size} total (${open} open) — was ${before}`)
log(`  → data/evidence/wishlist/wishlist.jsonl  (+ wishlist.csv)`)
log(`  next: npm run wishlist:score`)
