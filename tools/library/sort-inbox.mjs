#!/usr/bin/env node
// Library intake sorter — "drop and file."
//
// Point it at a folder of dumped files (the drive's _inbox/, or --from ~/Desktop).
// For each file it: reads the text (pdftotext), pulls the DOI/title/IDs,
// checks it against the existing corpus (duplicate vs novel), classifies which
// build it belongs to (Heavy Metal Index = heavy metals; Microbiome Medicine =
// microbiome) and its topic (condition/organism), then files it into the
// library under <build>/<topic>/ and flags novel items as pending ingest.
//
//   node tools/library/sort-inbox.mjs --from ~/Desktop --dry-run
//   node tools/library/sort-inbox.mjs           # processes the drive _inbox/
//   npm run library:sort -- --from ~/Desktop
//
// Flags:
//   --from <dir>   source of dropped files (default: <library>/_inbox)
//   --dry-run      classify + report only; move nothing
//   --copy         copy instead of move (default: move)

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { normalizeDoi, normalizeTitle } from "../fetch-app/lib/util.mjs"
import { libraryRoot, isLibraryDriveMounted } from "../lib/library-root.mjs"

const repoRoot = process.cwd()
const corpusIndexPath = path.join(repoRoot, "data/evidence/discovery/corpus-index.json")

const args = new Map()
for (let i = 0; i < process.argv.slice(2).length; i++) {
  const a = process.argv.slice(2)[i]
  if (a.startsWith("--")) {
    const k = a.slice(2)
    const next = process.argv.slice(2)[i + 1]
    if (next === undefined || next.startsWith("--")) args.set(k, "true")
    else { args.set(k, next); i++ }
  }
}
const DRY = args.has("dry-run")
const COPY = args.has("copy")

// ── classification vocab ─────────────────────────────────────────────────────
const HEAVY_METAL = [
  "heavy metal", "trace element", "toxic metal", "lead", "cadmium", "arsenic",
  "mercury", "chromium", "nickel", "aluminum", "aluminium", "antimony", "tin ",
  "inorganic arsenic", "methylmercury", "contaminant", "contamination", "µg/kg",
  "mg/kg", "ppb", "icp-ms", "maximum level", "dietary exposure",
]
const MICROBIOME = [
  "microbiome", "microbiota", "dysbiosis", "gut-brain", "16s rrna", "metagenomic",
  "metagenomics", "shotgun", "probiotic", "prebiotic", "scfa", "short-chain fatty",
  "fecal", "commensal", "gut bacteria", "fungal", "mycobiome", "candida",
  "bacterial vaginosis", "akkermansia",
]
// Topic (condition / organism) phrases → folder name. First match by frequency.
const TOPICS = [
  "Candida albicans", "Candidiasis", "Multiple Sclerosis", "Endometriosis",
  "Bacterial Vaginosis", "Chronic Kidney Disease", "Interstitial Cystitis",
  "Rosacea", "Gestational Diabetes", "Inflammatory Bowel Disease",
  "Irritable Bowel Syndrome", "Rheumatoid Arthritis", "Parkinson", "Alzheimer",
  "Infant Formula", "Rice", "Dark Chocolate", "Spices", "Canned Tuna", "Cinnamon",
]

function countHits(hay, terms) {
  let n = 0
  for (const t of terms) {
    const i = hay.split(t.toLowerCase()).length - 1
    n += i
  }
  return n
}

function extractText(file) {
  try {
    return execFileSync("pdftotext", ["-l", "3", "-q", file, "-"], {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    })
  } catch {
    return ""
  }
}

function extractDoi(text) {
  const m = text.match(/\b10\.\d{4,9}\/[-._;()/:a-z0-9]+/i)
  return m ? normalizeDoi(m[0].replace(/[.,;]+$/, "")) : ""
}

function guessTitle(text, fallback) {
  // First few non-empty, non-boilerplate lines; pick the longest of the top 8.
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 12 && !/^(https?:|www\.|doi|pmid|volume|issn|received|accepted|©|abstract)/i.test(l))
  const top = lines.slice(0, 8).sort((a, b) => b.length - a.length)[0]
  return (top || fallback).slice(0, 140)
}

function classify(text) {
  const hay = text.toLowerCase()
  const hm = countHits(hay, HEAVY_METAL)
  const mb = countHits(hay, MICROBIOME)
  let build = "needs-review"
  if (hm >= 3 && hm >= mb) build = "heavy-metal-index"
  else if (mb >= 3 && mb > hm) build = "microbiome-medicine"
  else if (hm >= 1 && hm >= mb) build = "heavy-metal-index"
  else if (mb >= 1) build = "microbiome-medicine"

  // topic = most-mentioned phrase from the list
  let topic = "unsorted"
  let best = 0
  for (const t of TOPICS) {
    const c = hay.split(t.toLowerCase()).length - 1
    if (c > best) { best = c; topic = t }
  }
  return { build, topic, hmHits: hm, mbHits: mb }
}

function loadCorpus() {
  const idx = { doi: new Set(), title: new Set() }
  try {
    const raw = JSON.parse(fs.readFileSync(corpusIndexPath, "utf8"))
    for (const d of Object.keys(raw.by_doi || {})) if (d && d !== "null") idx.doi.add(normalizeDoi(d))
    for (const t of Object.keys(raw.by_normalized_title || {})) if (t) idx.title.add(t)
  } catch {}
  return idx
}

function safe(s) {
  return String(s).replace(/[\/\\:*?"<>|]/g, " ").replace(/\s+/g, " ").trim().slice(0, 120) || "unsorted"
}

// ── run ──────────────────────────────────────────────────────────────────────
const root = libraryRoot()
if (!root && !DRY) {
  console.error("✗ Library drive not mounted — plug in HMI-Library, or use --dry-run.")
  process.exit(1)
}
const inboxDefault = root ? path.join(root, "_inbox") : path.join(repoRoot, "_inbox")
const fromDir = args.get("from") ? path.resolve(args.get("from").replace(/^~/, process.env.HOME)) : inboxDefault
const sortedRoot = path.join(root || repoRoot, "_inbox", "_sorted")

if (!fs.existsSync(fromDir)) {
  console.error(`✗ Source folder not found: ${fromDir}`)
  process.exit(1)
}

const corpus = loadCorpus()
const files = fs
  .readdirSync(fromDir, { withFileTypes: true })
  .filter((e) => e.isFile() && /\.(pdf)$/i.test(e.name))
  .map((e) => path.join(fromDir, e.name))

console.log(`\nIntake: ${files.length} PDF(s) from ${fromDir}${DRY ? "  (dry run)" : ""}\n`)

const manifest = []
for (const file of files) {
  const base = path.basename(file)
  const text = extractText(file)
  const doi = extractDoi(text)
  const title = guessTitle(text, base.replace(/\.pdf$/i, ""))
  const { build, topic, hmHits, mbHits } = classify(text)

  let status = "novel-pending-ingest"
  if ((doi && corpus.doi.has(doi)) || (title && corpus.title.has(normalizeTitle(title)))) status = "duplicate"
  else if (build === "needs-review") status = "needs-review"

  const destBuild = status === "duplicate" ? "_duplicates" : build
  const destDir = path.join(sortedRoot, destBuild, status === "duplicate" ? "" : safe(topic))
  const dest = path.join(destDir, base)

  manifest.push({ file: base, build, topic, doi, status, title, hmHits, mbHits, dest: DRY ? "(dry)" : path.relative(root || repoRoot, dest) })

  const tag = status === "duplicate" ? "DUPLICATE" : status === "needs-review" ? "REVIEW   " : "NEW      "
  console.log(`  ${tag} ${base}`)
  console.log(`            → ${build} / ${topic}${doi ? "  · doi:" + doi : ""}  (hm:${hmHits} mb:${mbHits})`)
  console.log(`            "${title}"`)

  if (!DRY) {
    fs.mkdirSync(destDir, { recursive: true })
    const finalDest = fs.existsSync(dest) ? dest.replace(/\.pdf$/i, `-${Date.now()}.pdf`) : dest
    if (COPY) fs.copyFileSync(file, finalDest)
    else fs.renameSync(file, finalDest)
  }
}

// manifest + pending summary
if (!DRY && manifest.length) {
  const cols = ["file", "status", "build", "topic", "doi", "title", "hmHits", "mbHits", "dest"]
  const csv = [cols.join(",")]
    .concat(manifest.map((r) => cols.map((c) => `"${String(r[c] ?? "").replace(/"/g, '""')}"`).join(",")))
    .join("\n")
  fs.mkdirSync(sortedRoot, { recursive: true })
  fs.writeFileSync(path.join(sortedRoot, "_intake-manifest.csv"), csv + "\n")
}

const n = (s) => manifest.filter((m) => m.status === s).length
console.log(
  `\nSummary: ${n("novel-pending-ingest")} new (pending ingest) · ${n("duplicate")} duplicate · ${n("needs-review")} needs review`,
)
if (!DRY) console.log(`Filed under: ${path.relative(root || repoRoot, sortedRoot)}/  (+ _intake-manifest.csv)`)
else console.log(`(dry run — nothing moved)`)
