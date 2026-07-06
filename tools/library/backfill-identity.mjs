#!/usr/bin/env node
// Identity backfill — build the authoritative "what I own" have-set.
//
// FAST pass (default): no per-file reads. Seeds the index from
//   (1) data/evidence/discovery/corpus-index.json  (ingested sources, by DOI+title)
//   (2) every *.pdf on the drive, keyed by its filename DOI-slug
// so the wishlist can dedup against the FULL ~12k-PDF drive, not just the ~1.6k
// papers that made it into corpus-index. This is the correctness fix the
// adversarial review flagged.
//
// DEEP pass (--deep): pdftotext files whose filename is NOT a DOI-slug to recover
// a DOI/title key. HASH pass (--hash): sha256 every file (authoritative identity
// + Phase-3 bit-rot baseline). Both are slow (per-file I/O) and resumable.
//
//   npm run library:index            # fast pass
//   node tools/library/backfill-identity.mjs --deep --hash
//
// Flags: --limit N (first N drive files), --deep, --hash, --quiet

import fs from "node:fs"
import path from "node:path"
import { openIndex } from "./lib/index-db.mjs"
import { parseCsvFile } from "./lib/csv.mjs"
import { rawLibraryDir, isLibraryDriveMounted } from "../lib/library-root.mjs"
import {
  slugFromFilename, doiFromSlug, extractText, extractDoi, guessTitle,
  sha256File, normalizeDoi, normalizeTitle, doiSlug,
} from "./lib/extract.mjs"

const repoRoot = process.cwd()
const args = new Map()
{
  const a = process.argv.slice(2)
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith("--")) {
      const k = a[i].slice(2)
      const next = a[i + 1]
      if (next === undefined || next.startsWith("--")) args.set(k, "true")
      else { args.set(k, next); i++ }
    }
  }
}
const LIMIT = args.has("limit") ? Number(args.get("limit")) : 0
const DEEP = args.has("deep")
const HASH = args.has("hash")
const QUIET = args.has("quiet")
const log = (...m) => { if (!QUIET) console.log(...m) }

if (!isLibraryDriveMounted()) {
  console.error("✗ HMI-Library drive is not mounted — plug it in to backfill the library index.")
  process.exit(1)
}

const ix = openIndex()
const today = new Date().toISOString().slice(0, 10)

// ── (1) seed from corpus-index.json, grouped by cite_key so a paper reached via
//        both its DOI and its title becomes ONE row ───────────────────────────
const corpusIndexPath = path.join(repoRoot, "data/evidence/discovery/corpus-index.json")
let seeded = 0
try {
  const raw = JSON.parse(fs.readFileSync(corpusIndexPath, "utf8"))
  const byCite = new Map() // cite_key → {doi, title}
  for (const [d, ck] of Object.entries(raw.by_doi || {})) {
    if (!ck || d === "null") continue
    const e = byCite.get(ck) || {}
    if (!e.doi) e.doi = normalizeDoi(d)
    byCite.set(ck, e)
  }
  for (const [t, ck] of Object.entries(raw.by_normalized_title || {})) {
    if (!ck || !t) continue
    const e = byCite.get(ck) || {}
    if (!e.title) e.title = t
    byCite.set(ck, e)
  }
  for (const [ck, e] of byCite) {
    ix.upsertPaper({
      cite_key: ck,
      doi: e.doi || null,
      doi_slug: e.doi ? doiSlug(e.doi) : null,
      normalized_title: e.title || null,
      status: "have",
      ingested: 1,
      acquisition_source: "corpus-index",
    }, today)
    seeded++
  }
  log(`  seeded ${seeded} ingested papers from corpus-index.json`)
} catch (err) {
  log(`  (corpus-index.json not read: ${err.message})`)
}

// ── (1b) seed from the triage manifest — the ~23k-paper FM corpus Karen already
//        assembled. These are papers she HAS (as PDF or Marker markdown), so a
//        fetch that finds one again should not re-list it on the wishlist. Gives
//        the have-set ~10k real DOIs instantly, no per-file reads. ────────────
const triagePath = path.join(repoRoot, "raw/manifest/triage-manifest.csv")
let triageSeeded = 0
try {
  for (const r of parseCsvFile(triagePath)) {
    const doi = extractDoi(r.doi || "")
    const ck = (r.cite_key || "").trim() || null
    if (!doi && !ck) continue
    ix.upsertPaper({
      cite_key: ck,
      doi: doi || null,
      doi_slug: doi ? doiSlug(doi) : null,
      year: Number(r.year) || null,
      journal: (r.publication && r.publication !== "unknown") ? r.publication : null,
      status: "have",
      ingested: String(r.already_ingested || "").toLowerCase() === "true" ? 1 : 0,
      acquisition_source: "triage-corpus",
    }, today)
    triageSeeded++
  }
  log(`  seeded ${triageSeeded} assembled-corpus papers from triage-manifest.csv`)
} catch (err) {
  log(`  (triage-manifest.csv not read: ${err.message})`)
}

// ── (2) walk the drive raw dir; key each PDF by its filename DOI-slug ─────────
const rawDir = rawLibraryDir()
let scanned = 0, slugHits = 0, nonSlug = 0, deepKeyed = 0, hashed = 0
const stack = [rawDir]
outer:
while (stack.length) {
  const dir = stack.pop()
  let entries
  try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { continue }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) { stack.push(full); continue }
    if (!/\.pdf$/i.test(e.name)) continue
    scanned++
    const rel = path.relative(rawDir, full)
    const slug = slugFromFilename(e.name)
    const rec = { raw_path: rel, status: "have", acquisition_source: "drive-walk" }

    if (slug) {
      slugHits++
      rec.doi_slug = slug
      rec.doi = doiFromSlug(slug) || null
    } else {
      nonSlug++
      if (DEEP) {
        const text = extractText(full, 2)
        const doi = extractDoi(text)
        const title = guessTitle(text, e.name.replace(/\.pdf$/i, ""))
        if (doi) { rec.doi = doi; rec.doi_slug = doiSlug(doi) }
        if (title) rec.normalized_title = normalizeTitle(title)
        if (doi || title) deepKeyed++
        else continue // still unkeyable — skip rather than create a junk row
      } else {
        continue // fast pass: leave non-slug files for a later --deep pass
      }
    }

    if (HASH) { rec.sha256 = await sha256File(full); hashed++ }
    ix.upsertPaper(rec, today)

    if (!QUIET && scanned % 2000 === 0) log(`  …scanned ${scanned} (slug ${slugHits}, non-slug ${nonSlug})`)
    if (LIMIT && scanned >= LIMIT) break outer
  }
}

ix.setMeta("identity_built_at", new Date().toISOString())
ix.setMeta("drive_pdf_scanned", String(scanned))
const st = ix.stats()
log(`\n✓ identity backfill complete`)
log(`  drive PDFs scanned:   ${scanned}  (slug-keyed ${slugHits}, non-slug ${nonSlug}${DEEP ? `, deep-keyed ${deepKeyed}` : ""})`)
if (HASH) log(`  sha256 hashed:        ${hashed}`)
log(`  index rows:           ${st.total}  (have ${st.byStatus.have || 0}, with-doi ${st.withDoi}, with-sha ${st.withSha}, ingested ${st.ingested})`)
if (!DEEP && nonSlug) log(`  note: ${nonSlug} non-slug PDFs skipped — run with --deep to pdftotext them into the index`)
log(`  db: ${ix.dbPath}`)
ix.close()
