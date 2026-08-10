#!/usr/bin/env node
// audit-not-material-integrity.mjs
//
// A not-material determination (data/evidence/standards-not-material.csv) is a REBUTTABLE presumption:
// "no exposure pathway, no source, no government limit." It is defensible only if it is actually tested
// against evidence and revised when evidence contradicts it. This check enforces that: for every
// not-material (row, analyte), it scans the source pages routed to that row and flags any source whose
// `metals:` frontmatter reports the analyte was measured in that product. A hit is a CONTRADICTION —
// the analyte was investigated and (per the source) is present, so the not-material determination must
// be re-adjudicated (retire → real limit / screen, or keep with the source cited as verified trace/artifact).
//
// This is the safeguard the 2026-08-10 Cat-9 build lacked: it shipped diaper Sn and Ni as not-material
// while smajgl2015 (tin) and nyamukamba2023 (nickel) — already routed to the diaper row — reported both.
//
// Speciation-aware matching so iAs/MeHg not-material cells are NOT falsely flagged by tAs/tHg sources.
// Exit non-zero if any contradiction is found (so it can gate a build); --warn-only downgrades to report.
//
// Usage: node tools/evidence/audit-not-material-integrity.mjs [--warn-only] [--row=slug]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Set(process.argv.slice(2))
const rowFilter = (process.argv.find((a) => a.startsWith("--row=")) || "").split("=")[1] || ""
const WIKI = path.join(REPO, "wiki")

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").trim().split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { out.push(cur); cur = "" } else cur += ch }
  out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
}
// Minimal frontmatter reader: pulls `products:` and `metals:` inline arrays.
function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = m[1]
  const arr = (key) => {
    const line = fm.match(new RegExp(`^${key}:\\s*\\[(.*?)\\]`, "m"))
    if (line) return line[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    return []
  }
  // Normalise product tokens: the frontmatter mixes bare slugs (`diapers-and-components`) and wikilinks
  // (`[[products/diapers-and-components]]`, optionally with an alias `|Label`). Reduce both to the slug.
  const slug = (t) => t.replace(/^\[\[/, "").replace(/\]\]$/, "").replace(/^products\//, "").split("|")[0].trim()
  return { products: arr("products").map(slug), metals: arr("metals") }
}

// Does a source metal token contradict a not-material analyte? Speciation-aware:
//  - not-material iAs is contradicted only by iAs (NOT tAs); MeHg only by MeHg (NOT tHg).
//  - not-material tAs is contradicted by tAs (or a bare As); tHg by tHg/Hg.
//  - not-material Sn is contradicted by Sn (organotin measured as total Sn still contradicts "no tin source").
//  - Ni/Al/Cr-VI/Cr/Pb/Cd match their own token (Cr-VI also contradicted by a bare Cr measurement).
function contradicts(nmAnalyte, sourceMetal) {
  const a = nmAnalyte.trim(), s = sourceMetal.trim()
  if (a === "iAs") return s === "iAs"
  if (a === "MeHg") return s === "MeHg"
  if (a === "tAs") return s === "tAs" || s === "As"
  if (a === "tHg") return s === "tHg" || s === "Hg"
  if (a === "Cr-VI") return s === "Cr-VI" || s === "Cr" || s === "Cr-total"
  return a === s
}

const nm = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/standards-not-material.csv"), "utf8"))
  .filter((r) => !rowFilter || r.row_slug === rowFilter)

// Index sources by product routed to, capturing their measured metals.
const srcDir = path.join(WIKI, "sources")
const sources = []
for (const f of fs.readdirSync(srcDir)) {
  if (!f.endsWith(".md")) continue
  const fm = frontmatter(fs.readFileSync(path.join(srcDir, f), "utf8"))
  if (!fm.products || !fm.products.length || !fm.metals || !fm.metals.length) continue
  sources.push({ slug: f.replace(/\.md$/, ""), products: fm.products, metals: fm.metals })
}

const flags = []
for (const cell of nm) {
  const row = cell.row_slug, analyte = cell.metal_species
  for (const src of sources) {
    if (!src.products.includes(row)) continue
    const hit = src.metals.find((m) => contradicts(analyte, m))
    if (hit) flags.push({ row, analyte, source: src.slug, reported: hit, all_metals: src.metals.join(",") })
  }
}

// report
if (!flags.length) {
  console.log(`not-material integrity: OK — no routed source contradicts any${rowFilter ? " " + rowFilter : ""} not-material determination (${nm.length} cells checked)`)
  process.exit(0)
}
console.log(`not-material integrity: ${flags.length} CONTRADICTION(S) — a not-material analyte was measured by a source routed to the row:\n`)
for (const f of flags) {
  console.log(`  ${f.row} / ${f.analyte}  <-- ${f.source} reports ${f.reported}  (measured: ${f.all_metals})`)
}
console.log(`\nEach must be re-adjudicated: retire the not-material cell to a real limit/screen, or keep it with the source cited as verified trace/artifact. See docs/governance for the procedure.`)
process.exit(args.has("--warn-only") ? 0 : 1)
