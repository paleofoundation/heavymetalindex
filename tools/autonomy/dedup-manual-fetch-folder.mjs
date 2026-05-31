#!/usr/bin/env node
// Dedup a freshly-dropped manual-fetch folder against the corpus BEFORE the
// drain spawns ~25-min claude --print ingests on it.
//
// Reproduces the 2026-05-30 Kimi-corruption novelty pass as a committed,
// reusable tool (the original was ad-hoc and never checked in, which is the
// "re-derive from scratch" failure mode OPERATING.md Part 5 warns against).
//
// For every PDF under --dir it computes:
//   - sha256  -> matched against raw_sha256: frontmatter across wiki/sources/
//   - doi     -> extracted from the first 3 pages via pdftotext, normalized,
//                matched against doi: frontmatter across wiki/sources/
// and classifies each PDF as one of:
//   duplicate          (byte-identical to an existing source page)
//   duplicate_doi      (same DOI as an existing source page)
//   duplicate_in_folder(same sha or doi as an earlier PDF in THIS walk)
//   novel              (no corpus/in-folder match; has a DOI)
//   no_doi_needs_claude(no DOI extractable; can't auto-dedup, must spawn)
//
// Duplicates (corpus + in-folder) are appended to data/evidence/manual-fetch-skip.csv
// so the batch ingester short-circuits them without paying for a spawn. A
// per-run novelty CSV is written for the audit trail. Novel + no_doi PDFs are
// left on disk for the drain to pick up.
//
// Usage:
//   node tools/autonomy/dedup-manual-fetch-folder.mjs --dir="raw/Manual Fetch Kimi /May 21 ..." --tag=may21-kimi
//   node tools/autonomy/dedup-manual-fetch-folder.mjs --dir="..." --tag=... --dry-run

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const args = new Map()
for (const a of process.argv.slice(2)) {
  if (a.startsWith("--")) {
    const eq = a.indexOf("=")
    if (eq > 0) args.set(a.slice(2, eq), a.slice(eq + 1))
    else args.set(a.slice(2), "true")
  }
}
const dir = args.get("dir")
const tag = args.get("tag") || "manual-fetch"
const dryRun = args.get("dry-run") === "true"
// --also=<dir>[,<dir>] : existing drain-queue folders whose PDFs are already
// tracked elsewhere. A May-21 PDF byte-identical to one of these is a dup of
// that queue (not the corpus), so skip it here to avoid double-draining the
// same paper from two roots. Used to dedup the May-21 Kimi base-six against the
// already-queued raw/manual-fetch/Kimi_Agent_Download Corruption Issue folder.
const alsoDirs = (args.get("also") || "").split(",").map(s => s.trim()).filter(Boolean)
if (!dir) { console.error("ERROR: --dir is required"); process.exit(1) }

const today = new Date().toISOString().slice(0, 10)
const sourcesDir = path.join(repoRoot, "wiki/sources")
const skipPath = path.join(repoRoot, "data/evidence/manual-fetch-skip.csv")
const noveltyPath = path.join(repoRoot, `data/evidence/${tag}-novelty-${today}.csv`)

// ---------- Corpus index ----------
function normalizeDoi(raw) {
  if (!raw) return ""
  let d = String(raw).trim().toLowerCase()
  d = d.replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
  d = d.replace(/^doi:\s*/, "")
  // strip surrounding quotes/brackets and trailing punctuation PDFs append
  d = d.replace(/^["'<(\[]+/, "").replace(/["'>)\].,;]+$/, "")
  return d
}

function buildCorpusIndex() {
  const byDoi = new Map()   // doi -> cite-key
  const bySha = new Map()   // sha -> cite-key
  if (!fs.existsSync(sourcesDir)) return { byDoi, bySha }
  for (const file of fs.readdirSync(sourcesDir)) {
    if (!file.endsWith(".md")) continue
    const head = fs.readFileSync(path.join(sourcesDir, file), "utf8").slice(0, 4000)
    const key = file.replace(/\.md$/, "")
    const dm = head.match(/^doi:\s*(.+)$/m)
    if (dm) { const d = normalizeDoi(dm[1]); if (d && d !== "n/a" && !byDoi.has(d)) byDoi.set(d, key) }
    const sm = head.match(/^raw_sha256:\s*([a-f0-9]{64})/m)
    if (sm && !bySha.has(sm[1])) bySha.set(sm[1], key)
  }
  return { byDoi, bySha }
}

// ---------- PDF helpers ----------
function sha256(file) {
  try { return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex") }
  catch { return null }
}

function extractDoi(file) {
  // pdftotext first 3 pages; grep the first DOI-shaped token.
  const res = spawnSync("pdftotext", ["-f", "1", "-l", "3", file, "-"], { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 })
  if (res.status !== 0 || !res.stdout) return ""
  const m = res.stdout.match(/10\.\d{4,9}\/[^\s"'<>)\]]+/)
  return m ? normalizeDoi(m[0]) : ""
}

function walkPdfs(root, out) {
  if (!fs.existsSync(root)) return
  for (const e of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, e.name)
    if (e.isDirectory()) walkPdfs(full, out)
    else if (e.isFile() && e.name.toLowerCase().endsWith(".pdf")) out.push(full)
  }
}

// ---------- Run ----------
console.log(`Building corpus index from ${sourcesDir} ...`)
const { byDoi, bySha } = buildCorpusIndex()
console.log(`  corpus: ${byDoi.size} DOIs, ${bySha.size} sha256`)

// Existing-queue sha index: byte-identical PDFs already queued in another root.
const queuedSha = new Map()  // sha -> "queued:<relpath>"
for (const ad of alsoDirs) {
  const abs = path.isAbsolute(ad) ? ad : path.join(repoRoot, ad)
  const found = []
  walkPdfs(abs, found)
  for (const f of found) {
    const s = sha256(f)
    if (s && !queuedSha.has(s)) queuedSha.set(s, `queued:${path.relative(repoRoot, f)}`)
  }
  console.log(`  also-queue ${ad}: ${found.length} PDFs indexed`)
}

const absDir = path.isAbsolute(dir) ? dir : path.join(repoRoot, dir)
const pdfs = []
walkPdfs(absDir, pdfs)
pdfs.sort()
console.log(`Found ${pdfs.length} PDFs under ${dir}`)

const seenSha = new Map()  // sha -> relPath (first seen)
const seenDoi = new Map()  // doi -> relPath (first seen)
const rows = []            // novelty rows
const skipRows = []        // [relPath, reason]
const counts = { duplicate: 0, duplicate_queued: 0, duplicate_doi: 0, duplicate_in_folder: 0, novel: 0, no_doi_needs_claude: 0 }

for (const abs of pdfs) {
  const rel = path.relative(repoRoot, abs)
  const sha = sha256(abs)
  let status, matches = "", doi = ""

  if (sha && bySha.has(sha)) {
    status = "duplicate"; matches = bySha.get(sha)
  } else if (sha && queuedSha.has(sha)) {
    status = "duplicate_queued"; matches = queuedSha.get(sha)
  } else if (sha && seenSha.has(sha)) {
    status = "duplicate_in_folder"; matches = seenSha.get(sha)
  } else {
    doi = extractDoi(abs)
    if (doi && byDoi.has(doi)) {
      status = "duplicate_doi"; matches = byDoi.get(doi)
    } else if (doi && seenDoi.has(doi)) {
      status = "duplicate_in_folder"; matches = seenDoi.get(doi)
    } else if (doi) {
      status = "novel"
    } else {
      status = "no_doi_needs_claude"
    }
  }

  if (sha && !seenSha.has(sha)) seenSha.set(sha, rel)
  if (doi && !seenDoi.has(doi)) seenDoi.set(doi, rel)

  counts[status]++
  rows.push({ rel, status, doi, matches, sha: sha || "" })
  if (status === "duplicate" || status === "duplicate_queued" || status === "duplicate_doi" || status === "duplicate_in_folder") {
    const reason = status === "duplicate" ? `byte-identical -> ${matches}`
      : status === "duplicate_queued" ? `dup of already-queued root -> ${matches}`
      : status === "duplicate_doi" ? `duplicate_doi:${doi} -> ${matches}`
      : `duplicate_in_folder -> ${matches}`
    skipRows.push([rel, reason])
  }
}

// ---------- Write novelty CSV ----------
function csvField(s) { const v = String(s ?? ""); return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v }
const noveltyOut = ["rel_path,status,doi,matches,sha256",
  ...rows.map(r => [r.rel, r.status, r.doi, r.matches, r.sha].map(csvField).join(","))].join("\n") + "\n"

// ---------- Append to skip-list (idempotent) ----------
let skipExisting = ""
const skipSeen = new Set()
if (fs.existsSync(skipPath)) {
  skipExisting = fs.readFileSync(skipPath, "utf8")
  for (const line of skipExisting.split(/\r?\n/).slice(1)) {
    const c = line.indexOf(",")
    if (c > 0) skipSeen.add(line.slice(0, c).replace(/^"|"$/g, ""))
  }
}
const newSkip = skipRows.filter(([rel]) => !skipSeen.has(rel))

console.log("\n=== Dedup summary ===")
for (const [k, v] of Object.entries(counts)) console.log(`  ${k.padEnd(20)} ${v}`)
console.log(`\nNovel + no_doi (will drain): ${counts.novel + counts.no_doi_needs_claude}`)
console.log(`New skip-list entries: ${newSkip.length}`)

if (dryRun) {
  console.log("\nDRY RUN — no files written.")
  console.log(`Would write novelty CSV: ${path.relative(repoRoot, noveltyPath)}`)
  process.exit(0)
}

fs.writeFileSync(noveltyPath, noveltyOut, "utf8")
console.log(`\nWrote novelty CSV: ${path.relative(repoRoot, noveltyPath)}`)

if (newSkip.length) {
  const header = skipExisting ? "" : "rel_path,reason\n"
  const body = newSkip.map(([rel, reason]) => [rel, reason].map(csvField).join(",")).join("\n") + "\n"
  fs.appendFileSync(skipPath, (skipExisting && !skipExisting.endsWith("\n") ? "\n" : "") + header + body, "utf8")
  console.log(`Appended ${newSkip.length} entries to ${path.relative(repoRoot, skipPath)}`)
}
