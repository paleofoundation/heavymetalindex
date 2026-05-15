#!/usr/bin/env node
// Programmatic source-legend "Used on this page for" populator.
//
// The hmi-source-legend tables on product, ingredient, and metal pages carry
// `*[awaiting synthesis]*` placeholders in the fifth column. The orchestrator's
// POPULATE-SOURCE-LEGEND action is a Claude Code Opus session for per-cell
// contextual writing. This tool is the deterministic baseline: it generates
// a 1-sentence description from the source page's frontmatter (metals,
// jurisdictions, sample_population, sample_n) so every cell carries at least
// some accurate context. Subsequent Claude Code Opus dispatches can deepen the
// per-cell descriptions where bespoke-context matters; the programmatic
// baseline is the floor.
//
// Idempotent: re-running on pages where the cell is already populated is a
// no-op (we only touch literal `*[awaiting synthesis]*` strings).
//
// Per CLAUDE.md Part 15: prose-first, no em dashes, no inline bold.
//
// Usage:
//   node tools/autonomy/populate-source-legends.mjs              # write
//   node tools/autonomy/populate-source-legends.mjs --dry-run    # report only
//   node tools/autonomy/populate-source-legends.mjs --dir wiki/products  # scope to a single dir

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const scopedDir = args.includes("--dir") ? args[args.indexOf("--dir") + 1] : null

const targetDirs = scopedDir
  ? [path.join(repoRoot, scopedDir)]
  : [
      path.join(repoRoot, "wiki/products"),
      path.join(repoRoot, "wiki/ingredients"),
      path.join(repoRoot, "wiki/metals"),
    ]
const sourcesDir = path.join(repoRoot, "wiki/sources")

// Cache of source-page frontmatter so we read each source page at most once.
const sourceCache = new Map()

function loadSourceFrontmatter(citeKey) {
  if (sourceCache.has(citeKey)) return sourceCache.get(citeKey)
  const filepath = path.join(sourcesDir, `${citeKey}.md`)
  if (!fs.existsSync(filepath)) {
    sourceCache.set(citeKey, null)
    return null
  }
  const raw = fs.readFileSync(filepath, "utf8")
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) {
    sourceCache.set(citeKey, null)
    return null
  }
  const fmText = m[1]
  const body = m[2]
  const fm = parseShallowYaml(fmText)
  // Also grab the first prose paragraph (the TL;DR) for fallback description
  const firstPara = (() => {
    const lines = body.split("\n")
    let inH1 = false
    const collected = []
    for (const line of lines) {
      if (line.startsWith("# ")) {
        inH1 = true
        continue
      }
      if (!inH1) continue
      if (line.startsWith("## ")) break
      if (line.trim() === "" && collected.length === 0) continue
      if (line.trim() === "" && collected.length > 0) break
      collected.push(line.trim())
    }
    return collected.join(" ").trim()
  })()
  const result = { ...fm, firstPara }
  sourceCache.set(citeKey, result)
  return result
}

function parseShallowYaml(text) {
  // Minimal YAML extractor for our specific fields. We don't need a full parser
  // — just the keys we care about, with arrays handled as comma-separated.
  const out = {}
  const wanted = ["title", "year", "sample_n", "sample_population", "metals", "jurisdictions", "matrices", "source_type", "publication"]
  for (const key of wanted) {
    // Find a top-level line `key: value` (not nested under contamination_profile etc).
    const re = new RegExp(`^${key}:\\s*(.+)$`, "m")
    const m = text.match(re)
    if (!m) continue
    const v = m[1].trim()
    if (v.startsWith("[")) {
      // array
      out[key] = v.replace(/^\[|\]$/g, "").split(",").map((s) => s.trim().replace(/^"|"$/g, "")).filter(Boolean)
    } else if (v.startsWith('"')) {
      out[key] = v.replace(/^"|"$/g, "")
    } else {
      out[key] = v
    }
  }
  return out
}

function describeSourceForPage(citeKey, pageContext) {
  // pageContext: { pageType: 'product'|'ingredient'|'metal', pageSlug, pageMetalsContext (for metal pages) }
  const fm = loadSourceFrontmatter(citeKey)
  if (!fm) return null
  // Compose: "{jurisdictions} {metals} {sample matrix-snippet} (n=N)"
  const parts = []
  const jurisdictions = Array.isArray(fm.jurisdictions) ? fm.jurisdictions.slice(0, 3).join("/") : null
  const metals = Array.isArray(fm.metals) ? fm.metals.join(", ") : null
  let sampleSnippet = ""
  if (typeof fm.sample_population === "string" && fm.sample_population.length > 0) {
    // Take the first 18 words for context
    const words = fm.sample_population.replace(/\s+/g, " ").split(" ")
    sampleSnippet = words.slice(0, 18).join(" ")
    if (words.length > 18) sampleSnippet += "..."
  }
  const sampleN = fm.sample_n && fm.sample_n !== "null" ? `n=${fm.sample_n}` : null

  // Build a single sentence
  if (metals && sampleSnippet) {
    let sentence = ""
    if (jurisdictions) sentence += `${jurisdictions} `
    sentence += `${metals} occurrence in ${sampleSnippet}`
    if (sampleN) sentence += ` (${sampleN})`
    return sentence
  }
  if (metals && jurisdictions) {
    let sentence = `${jurisdictions} ${metals} concentrations`
    if (sampleN) sentence += ` (${sampleN})`
    return sentence
  }
  if (metals) {
    let sentence = `${metals} concentrations from the cited dataset`
    if (sampleN) sentence += ` (${sampleN})`
    return sentence
  }
  // Fallback: use first paragraph
  if (fm.firstPara) {
    const words = fm.firstPara.replace(/\s+/g, " ").split(" ")
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "")
  }
  if (fm.publication) {
    return `Cited reference from ${fm.publication}`
  }
  return null
}

// Walk pages and patch cells
let pagesScanned = 0
let pagesModified = 0
let cellsFilled = 0
let cellsSkipped = 0

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md") continue
    pagesScanned += 1
    const filepath = path.join(dir, file)
    const raw = fs.readFileSync(filepath, "utf8")
    if (!raw.includes("*[awaiting synthesis]*")) continue
    const pageSlug = file.replace(/\.md$/, "")
    const pageType = dir.endsWith("products") ? "product" : dir.endsWith("ingredients") ? "ingredient" : "metal"
    // Extract source-legend block(s) by marker bounds
    const legendStart = raw.indexOf("<!-- BEGIN: hmi-source-legend -->")
    const legendEnd = raw.indexOf("<!-- END: hmi-source-legend -->")
    if (legendStart < 0 || legendEnd < 0) continue
    const before = raw.slice(0, legendStart)
    const legendBlock = raw.slice(legendStart, legendEnd)
    const after = raw.slice(legendEnd)
    // Within legendBlock, find table rows with awaiting synthesis
    const lines = legendBlock.split("\n")
    const newLines = []
    for (const line of lines) {
      if (!line.includes("*[awaiting synthesis]*")) {
        newLines.push(line)
        continue
      }
      // Parse the row to extract the cite-key from the [[sources/<cite-key>\|...]] wikilink.
      // The pipe is markdown-escaped in tables as \|, so accept both forms.
      const m = line.match(/\[\[sources\/([^\\|\]]+)(?:\\\||\|)/)
      if (!m) {
        newLines.push(line)
        cellsSkipped += 1
        continue
      }
      const citeKey = m[1].trim()
      const description = describeSourceForPage(citeKey, { pageType, pageSlug })
      if (!description) {
        newLines.push(line)
        cellsSkipped += 1
        continue
      }
      // Escape pipe chars so they don't break the markdown table
      const escaped = description.replace(/\|/g, "\\|")
      newLines.push(line.replace("*[awaiting synthesis]*", escaped))
      cellsFilled += 1
    }
    const newLegend = newLines.join("\n")
    const newContent = before + newLegend + after
    if (newContent !== raw) {
      pagesModified += 1
      if (!dryRun) fs.writeFileSync(filepath, newContent, "utf8")
    }
  }
}

console.log(`populate-source-legends: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  pages scanned: ${pagesScanned}`)
console.log(`  pages modified: ${pagesModified}`)
console.log(`  cells filled: ${cellsFilled}`)
console.log(`  cells skipped (no cite-key match or insufficient source metadata): ${cellsSkipped}`)
