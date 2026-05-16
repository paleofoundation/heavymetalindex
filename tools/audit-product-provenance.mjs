#!/usr/bin/env node
// Citation-anchor lint: the semantic firewall.
//
// Every concentration number in body prose on a public product page
// (ppb, ug/kg, mg/kg, ng/g, ug/L, mg/L, ppm, ng/L) should have a
// [[sources/...]] wikilink within ~200 characters. Numbers without a
// nearby source citation are quantitative claims with no provenance,
// which is the failure mode the wiki/HMT&C firewall (CLAUDE.md Part 2)
// is meant to prevent: "HMTc certifies infant rice cereal at 100 ppb iAs"
// would not be caught by lexical regex but is caught here because the
// number isn't anchored to a literature source.
//
// Soft warning at first to measure the false-positive rate. Hard rule
// after the corpus has been cleaned. Wired into prebuild as warn-only.
//
// Exemptions:
//   - Numbers inside generator-managed marker blocks (those values come
//     from structured-evidence CSVs that have their own provenance)
//   - Numbers inside the Methodology section (boilerplate disclaimer
//     mentioning regulatory cap values without citing them inline)
//   - Numbers inside the "How standards math uses this page" section
//   - Frontmatter
//   - Code blocks
//   - Stubs (sources: 0)

import fs from "node:fs"
import path from "node:path"
import {
  splitFrontmatter,
  frontmatterValue,
  scanLines,
} from "./audits/shared/patterns.mjs"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const dataDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(dataDir, { recursive: true })

// Match a concentration value with units. The number can be integer or
// decimal, optionally with a range separator (-, to, –). Units are the
// common ones for heavy-metal concentration in food.
const CONCENTRATION_PATTERN = /\b(\d+(?:[.,]\d+)?(?:\s*(?:-|to|–)\s*\d+(?:[.,]\d+)?)?)\s*(ppb|ug\/kg|µg\/kg|mg\/kg|ng\/g|ug\/L|µg\/L|mg\/L|ppm|ng\/L)\b/gi

// Sources wikilink — the anchor we require nearby
const SOURCES_LINK = /\[\[sources\/[^\]]+\]\]/g

// Sections whose H2 heading exempts this section's prose from anchor check
const ANCHOR_EXEMPT_SECTIONS = new Set([
  "methodology",
  "how standards math uses this page",
  "lead benchmark context",  // table of regulatory reference points
])

function isStub(fm) {
  const v = frontmatterValue(fm, "sources")
  if (v === null) return true
  return Number(v) === 0
}

function isExemptHeading(h2) {
  return ANCHOR_EXEMPT_SECTIONS.has((h2 || "").toLowerCase())
}

function findNearbySource(body, startOffset, windowChars = 400) {
  // Look backwards to the nearest H2 heading or page-section break and
  // forwards within windowChars characters for a [[sources/...]] link.
  // This handles two layouts:
  //   1. inline citation: "FDA reports 100 ppb [[sources/fda2024-...]]"
  //   2. table citation in a header paragraph: a prose intro that names
  //      the source, followed by a multi-row table reporting values from
  //      that source. The table data rows don't repeat the citation.
  const lookbackStart = (() => {
    // Find the start of the current section (last "\n## " before startOffset)
    const h2Idx = body.lastIndexOf("\n## ", startOffset)
    const paraIdx = body.lastIndexOf("\n\n", startOffset)
    // Take the closer of (last H2 heading + section intro) or (3 paragraphs back).
    // Heuristic: 1500 chars back is plenty to catch a table-intro paragraph.
    return Math.max(h2Idx, startOffset - 1500, 0)
  })()
  const lookahead = body.slice(lookbackStart, startOffset + windowChars)
  SOURCES_LINK.lastIndex = 0
  return SOURCES_LINK.test(lookahead)
}

function auditFile(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  const { frontmatter, body } = splitFrontmatter(text)
  const slug = path.basename(filepath, ".md")
  if (isStub(frontmatter)) return null  // stubs exempt

  const violations = []
  const lines = body.split("\n")
  let inMarker = false
  let inCodeBlock = false
  let currentH2 = null
  let bodyOffset = 0  // cumulative offset of current line start

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/<!--\s*BEGIN:\s*hmi-/.test(line)) inMarker = true
    if (/<!--\s*END:\s*hmi-/.test(line)) { inMarker = false; bodyOffset += line.length + 1; continue }
    if (/^```/.test(line)) inCodeBlock = !inCodeBlock
    const h2 = line.match(/^##\s+(.+?)\s*$/)
    if (h2) currentH2 = h2[1].trim()

    if (inMarker || inCodeBlock || isExemptHeading(currentH2)) {
      bodyOffset += line.length + 1
      continue
    }

    // Skip table rows that contain a sources wikilink anywhere in the row
    // (the per-row source citation; common in evidence inventories where
    // the citation column is at the end of the row)
    if (line.startsWith("|") && /\[\[sources\//.test(line)) {
      bodyOffset += line.length + 1
      continue
    }

    // Find concentration mentions on this line
    CONCENTRATION_PATTERN.lastIndex = 0
    let m
    while ((m = CONCENTRATION_PATTERN.exec(line)) !== null) {
      const numStart = bodyOffset + m.index
      if (!findNearbySource(body, numStart)) {
        violations.push({
          rule: "concentration_without_citation",
          severity: "soft",
          line: i + 1,
          snippet: m[0],
          context: line.trim().slice(0, 140),
        })
      }
    }

    bodyOffset += line.length + 1
  }

  return {
    slug,
    file: path.relative(repoRoot, filepath),
    violations,
  }
}

const results = []
for (const file of fs.readdirSync(productsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const r = auditFile(path.join(productsDir, file))
  if (r) results.push(r)
}

const csvLines = ["slug,file,rule,severity,line,snippet,context"]
for (const r of results) {
  if (r.violations.length === 0) {
    csvLines.push(`${r.slug},${r.file},,,,,`)
    continue
  }
  for (const v of r.violations) {
    const ctx = String(v.context).replace(/"/g, '""')
    csvLines.push(`${r.slug},${r.file},${v.rule},${v.severity},${v.line},"${v.snippet}","${ctx}"`)
  }
}
fs.writeFileSync(path.join(dataDir, "product-provenance-audit.csv"), csvLines.join("\n") + "\n")

const flagged = results.filter((r) => r.violations.length > 0)
const totalHits = results.reduce((sum, r) => sum + r.violations.length, 0)
console.log(`Product provenance audit: ${results.length} non-stub pages scanned.`)
console.log(`  pages with un-cited concentration mentions: ${flagged.length}`)
console.log(`  total un-cited concentration mentions: ${totalHits}`)
console.log(`  csv: data/evidence/product-provenance-audit.csv`)
// Soft warning; does not exit non-zero. After corpus is cleaned, this can
// be hardened by changing the rule severity above.
