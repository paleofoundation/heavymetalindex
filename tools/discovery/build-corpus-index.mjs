#!/usr/bin/env node
// Builds the dedupe index discovery uses to skip papers already in the corpus
// or already queued for ingest. Run at the start of every discovery pass; the
// discover skill calls this directly.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const trackerPath = path.join(repoRoot, "data/evidence/autonomy/manual-fetch-tracker.csv")
const outDir = path.join(repoRoot, "data/evidence/discovery")
const outPath = path.join(outDir, "corpus-index.json")

function normalizeTitle(s) {
  if (!s) return ""
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
}

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  if (!text.startsWith("---")) return null
  const end = text.indexOf("\n---", 3)
  if (end === -1) return null
  const block = text.slice(3, end)
  const fm = {}
  for (const line of block.split("\n")) {
    const m = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (!m) continue
    const [, key, rawValue] = m
    let value = rawValue.trim()
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    fm[key] = value
  }
  return fm
}

function indexSources() {
  const byDoi = {}
  const byTitle = {}
  let count = 0
  for (const name of fs.readdirSync(sourcesDir)) {
    if (!name.endsWith(".md") || name.startsWith("_")) continue
    const filePath = path.join(sourcesDir, name)
    const fm = readFrontmatter(filePath)
    if (!fm) continue
    const citeKey = fm.cite_key || name.replace(/\.md$/, "")
    if (fm.doi) byDoi[fm.doi.toLowerCase()] = citeKey
    const nt = normalizeTitle(fm.title)
    if (nt) byTitle[nt] = citeKey
    count++
  }
  return { byDoi, byTitle, count }
}

function indexTracker() {
  if (!fs.existsSync(trackerPath)) return { pdfPaths: {}, queuedCiteKeys: new Set() }
  const text = fs.readFileSync(trackerPath, "utf8")
  const lines = text.split("\n").slice(1)
  const pdfPaths = {}
  const queuedCiteKeys = new Set()
  for (const line of lines) {
    if (!line.trim()) continue
    // Crude CSV parse: handle the quoted-path case the tracker uses.
    const cols = []
    let cur = ""
    let inQ = false
    for (const ch of line) {
      if (ch === '"') inQ = !inQ
      else if (ch === "," && !inQ) { cols.push(cur); cur = "" }
      else cur += ch
    }
    cols.push(cur)
    const [pdfPath, handle, status, , citeKey] = cols
    if (pdfPath) pdfPaths[pdfPath] = { handle, status, citeKey }
    if (citeKey) queuedCiteKeys.add(citeKey)
  }
  return { pdfPaths, queuedCiteKeys }
}

function main() {
  if (!fs.existsSync(sourcesDir)) {
    console.error(`Missing ${sourcesDir}`)
    process.exit(1)
  }
  fs.mkdirSync(outDir, { recursive: true })
  const sources = indexSources()
  const tracker = indexTracker()
  const index = {
    built_at: new Date().toISOString(),
    source_count: sources.count,
    tracked_pdf_count: Object.keys(tracker.pdfPaths).length,
    by_doi: sources.byDoi,
    by_normalized_title: sources.byTitle,
    tracker_cite_keys: [...tracker.queuedCiteKeys],
  }
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2))
  console.log(
    `wrote ${outPath} — ${sources.count} sources, ` +
      `${Object.keys(sources.byDoi).length} DOIs, ` +
      `${tracker.queuedCiteKeys.size} tracker cite-keys`
  )
}

main()
