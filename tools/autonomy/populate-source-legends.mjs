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
// `--repair` additionally rewrites cells that an earlier run filled from a bad
// parse. parseShallowYaml used to return the STRING "null" for a `key: null`
// frontmatter line, which rendered as "Pb, Cd occurrence in null" on 62 pages.
// The parse is fixed, but because normal runs only touch the placeholder, those
// cells stay wrong until they are re-derived. Repair matches the exact defect
// signature and recomputes the cell from the source frontmatter.
//
// Per CLAUDE.md Part 15: prose-first, no em dashes, no inline bold.
//
// Usage:
//   node tools/autonomy/populate-source-legends.mjs              # write
//   node tools/autonomy/populate-source-legends.mjs --dry-run    # report only
//   node tools/autonomy/populate-source-legends.mjs --dir wiki/products  # scope to a single dir
//   node tools/autonomy/populate-source-legends.mjs --repair     # also re-derive null-artifact cells

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const repair = args.includes("--repair")
const scopedDir = args.includes("--dir") ? args[args.indexOf("--dir") + 1] : null

// Cells an earlier, buggy parse filled with the literal string "null".
const NULL_ARTIFACT = / occurrence in null(?=\s*$|\s*\|)/

const targetDirs = scopedDir
  ? [path.join(repoRoot, scopedDir)]
  : [
      path.join(repoRoot, "wiki/products"),
      path.join(repoRoot, "wiki/ingredients"),
      path.join(repoRoot, "wiki/metals"),
    ]
const sourcesDir = path.join(repoRoot, "wiki/sources")
// Audited source/page descriptions are inputs, so repairs survive regeneration.
const descriptionPath = path.join(repoRoot, "data/evidence/source-legend-descriptions.json")
const descriptions = fs.existsSync(descriptionPath) ? JSON.parse(fs.readFileSync(descriptionPath, "utf8")) : {}
for (const pageDescriptions of Object.values(descriptions)) {
  if (!pageDescriptions || typeof pageDescriptions !== "object" || Array.isArray(pageDescriptions)) throw new Error("Invalid source legend description map")
  for (const description of Object.values(pageDescriptions)) {
    if (typeof description !== "string" || !description.trim() || /[\r\n|]/.test(description)) throw new Error("Source legend descriptions must be nonempty single-line text without pipes")
  }
}

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

// YAML tokens that mean "no value". This parser reads raw lines rather than
// running a YAML load, so `sample_population: null` arrived as the five-character
// STRING "null" — truthy, non-empty, and therefore rendered straight into the
// legend as "Pb, Cd occurrence in null" on 62 pages. Treat every null spelling as
// an absent key so callers can rely on a plain truthiness check.
const YAML_NULL = new Set(["null", "Null", "NULL", "~", "none", "None", ""])

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
      const items = v
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""))
        .filter((s) => s && !YAML_NULL.has(s))
      if (items.length > 0) out[key] = items
    } else if (v.startsWith('"')) {
      const unquoted = v.replace(/^"|"$/g, "").trim()
      if (!YAML_NULL.has(unquoted)) out[key] = unquoted
    } else if (!YAML_NULL.has(v)) {
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
  // parseShallowYaml drops YAML null tokens, so a plain truthiness check is enough.
  const sampleN = fm.sample_n ? `n=${fm.sample_n}` : null

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
let cellsRepaired = 0

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md") continue
    pagesScanned += 1
    const filepath = path.join(dir, file)
    const raw = fs.readFileSync(filepath, "utf8")
    const pageKey = path.relative(path.join(repoRoot, "wiki"), filepath).replace(/\.md$/, "")
    const pageDescriptions = descriptions[pageKey] || {}
    const hasRepairWork = (repair && NULL_ARTIFACT.test(raw)) || Object.keys(pageDescriptions).length > 0
    if (!raw.includes("*[awaiting synthesis]*") && !hasRepairWork) continue
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
      const isPlaceholder = line.includes("*[awaiting synthesis]*")
      const isNullArtifact = repair && NULL_ARTIFACT.test(line)
      if (!isPlaceholder && !isNullArtifact && Object.keys(pageDescriptions).length === 0) {
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
      const curated = pageDescriptions[citeKey]
      if (!curated && !isPlaceholder && !isNullArtifact) {
        newLines.push(line)
        continue
      }
      const description = curated || describeSourceForPage(citeKey, { pageType, pageSlug })
      if (!description) {
        newLines.push(line)
        cellsSkipped += 1
        continue
      }
      // Escape pipe chars so they don't break the markdown table
      const escaped = description.replace(/\|/g, "\\|")
      // Function replacer: a string replacement would let `$&`, `$'`, `` $` ``,
      // `$$` in a dollar-bearing description (e.g. "$12–18 billion") be
      // interpreted as backreferences. Same idempotency hazard as
      // build-source-legend.mjs.
      if (isPlaceholder) {
        newLines.push(line.replace("*[awaiting synthesis]*", () => escaped))
        cellsFilled += 1
        continue
      }
      // Repair: replace the whole final column rather than patching inside it,
      // so the re-derived sentence fully supersedes the bad one.
      const cells = line.split("|")
      const lastIndex = cells.reduce((acc, cell, i) => (cell.trim() ? i : acc), -1)
      if (lastIndex === -1) {
        newLines.push(line)
        cellsSkipped += 1
        continue
      }
      cells[lastIndex] = ` ${escaped} `
      newLines.push(cells.join("|"))
      cellsRepaired += 1
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
console.log(`  cells repaired (audited description or null artifact): ${cellsRepaired}`)
console.log(`  cells skipped (no cite-key match or insufficient source metadata): ${cellsSkipped}`)
