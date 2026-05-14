#!/usr/bin/env node
// Provenance auditor — find numerical claims on wiki/ pages that don't trace
// to a [[sources/...]] link in the same paragraph.
//
// CLAUDE.md Part 14: "Always include sample size and method when citing a
// concentration. 'Rice has high arsenic' is not a wiki-quality claim;
// 'FDA TDS 2014 found mean iAs of 92 ppb (n=76) in white rice by ICP-MS with
// HPLC speciation' is."
//
// Part 18: "Provenance gaps: wiki claims that do not trace to a specific
// source page. Every numerical claim in the wiki must link to a source;
// claims without provenance are a lint failure."
//
// This auditor scans paragraphs (blocks of consecutive non-blank lines) for
// numerical-with-units patterns and checks for [[sources/...]] links nearby.
// Flags the paragraph if none found.
//
// Scope: wiki/products, wiki/ingredients, wiki/metals, wiki/regulations.
// Skips: tables (the column convention varies, sources are often columnated),
//         source pages (the page IS the source), batch reports, lint reports.
//
// Patterns that count as "numerical claim":
//   - <number> ppb / µg/kg / mg/kg / mg/L / µg/L / ng/g / µg/g
//   - <number>% or <number> percent (when discussing detection/exceedance)
//   - "p50", "p95", "P95" followed by a number (e.g. "p95 410 ppb")
//   - "n=" followed by a number (e.g. "n=2628")
//   - "LOD", "LOQ" followed by a number with units
//
// Patterns that satisfy provenance:
//   - [[sources/<slug>]] or [[sources/<slug>|N]] anywhere in the same paragraph
//   - A footnote-style reference like [N] when the paragraph names a study
//   - Within a marker-managed block (the marker generator is the source of truth)
//   - Inside a markdown table row (skip — see scope above)
//
// Output:
//   data/evidence/autonomy/provenance-audit-<date>.md
//   data/evidence/autonomy/provenance-violations.csv

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const args = new Set(process.argv.slice(2))
const verbose = args.has("--verbose")

const PUBLIC_DIRS = [
  "wiki/products",
  "wiki/ingredients",
  "wiki/metals",
  "wiki/regulations",
  "wiki/health",
  "wiki/testing",
  "wiki/mitigation",
  "wiki/supply-chain",
]

const SKIP_PATTERNS = [/\/index\.md$/, /\/batch-reports\//, /\/lint\//, /\/queries\//]

// Detect numerical claims (must look like a real value, not a date/year)
const CLAIM_PATTERNS = [
  // Concentration with units
  /\b\d+(?:\.\d+)?\s*(?:ppb|ppm|µg\/kg|mg\/kg|mg\/L|µg\/L|ng\/g|µg\/g|μg\/kg)\b/i,
  // Percentile-prefixed value with number (e.g. "P95 410 ppb", "p50 2.76 ppb")
  /\b[Pp](?:10|25|30|45|50|75|90|95|97|99|100)\s*[=:]?\s*\d/,
  // Sample size declaration
  /\bn\s*=\s*\d{2,}/,
  // LOD/LOQ with number
  /\b(?:LOD|LOQ)\s*[=:]?\s*\d/,
  // "exceeded" / "above" / "below" plus number + unit
  /(?:exceeded|above|below)\s+\d+(?:\.\d+)?\s*(?:µg|mg|ng|ppb|ppm)/i,
]

const PROVENANCE_PATTERNS = [
  /\[\[sources\/[^|\]#]+/,
  /\[\d+\]/, // footnote-style: [1], [42]
  /\(\d{4}[a-z]?\)/, // inline year-style citation: (2024), (2024a)
]

const violations = []
const filesScanned = []

for (const dir of PUBLIC_DIRS) {
  const full = path.join(repoRoot, dir)
  if (!fs.existsSync(full)) continue
  walkDir(full)
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) { walkDir(path.join(dir, entry.name)); continue }
    if (!entry.name.endsWith(".md")) continue
    const rel = path.relative(repoRoot, path.join(dir, entry.name))
    if (SKIP_PATTERNS.some((p) => p.test(rel))) continue
    scanFile(path.join(dir, entry.name), rel)
  }
}

function scanFile(filepath, rel) {
  filesScanned.push(rel)
  const text = fs.readFileSync(filepath, "utf8")
  // Strip frontmatter
  let body = text
  if (body.startsWith("---")) {
    const fmEnd = body.indexOf("\n---", 4)
    if (fmEnd >= 0) body = body.slice(fmEnd + 4)
  }

  // Split into paragraphs (blocks separated by blank lines).
  const paragraphs = body.split(/\n\s*\n/)
  let lineOffset = 0
  for (const para of paragraphs) {
    const paraStartLine = lineOffset + 1
    lineOffset += para.split("\n").length + 1 // +1 for the blank line separator

    // Skip if entirely inside a marker block or YAML-like block
    if (isInsideMarker(para)) continue
    if (isTableRow(para)) continue
    if (para.length < 20) continue

    // Has a numerical claim?
    const claimMatch = CLAIM_PATTERNS.map((p) => para.match(p)).find(Boolean)
    if (!claimMatch) continue

    // Has provenance?
    const hasProvenance = PROVENANCE_PATTERNS.some((p) => p.test(para))
    if (hasProvenance) continue

    // Skip if paragraph is just a placeholder/pending notice
    if (/_Pending synthesis/i.test(para) || /awaiting synthesis/i.test(para)) continue
    // Skip frontmatter-inside-text false positives (rare but possible)
    if (/^---/.test(para.trim())) continue

    violations.push({
      file: rel,
      line: paraStartLine,
      claim_snippet: claimMatch[0],
      paragraph_excerpt: para.slice(0, 200).replace(/\n/g, " "),
    })
  }
}

function isInsideMarker(para) {
  return /<!--\s*BEGIN:/.test(para) || /<!--\s*END:/.test(para)
}

function isTableRow(para) {
  // Heuristic: a "paragraph" that is mostly | characters and pipe-separated cells
  const lines = para.split("\n")
  const pipeLines = lines.filter((l) => /^\s*\|/.test(l) && l.split("|").length >= 3)
  return pipeLines.length >= 2 || (lines.length === 1 && /^\s*\|/.test(para))
}

// Write report
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
fs.mkdirSync(autonomyDir, { recursive: true })
const reportPath = path.join(autonomyDir, `provenance-audit-${today}.md`)
const csvPath = path.join(autonomyDir, "provenance-violations.csv")

const byFile = {}
for (const v of violations) {
  if (!byFile[v.file]) byFile[v.file] = []
  byFile[v.file].push(v)
}

const lines = [
  `# Provenance audit — ${today}`,
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  `## Summary`,
  "",
  `- Files scanned: ${filesScanned.length}`,
  `- Files with unsourced claims: ${Object.keys(byFile).length}`,
  `- Total unsourced claims: ${violations.length}`,
  "",
  "## Methodology",
  "",
  "Each non-table, non-marker paragraph containing a numerical claim (concentration with units, P-value with number, n= sample size, LOD/LOQ value) is checked for a [[sources/...]] link, footnote reference, or inline year citation in the same paragraph. Paragraphs with no provenance are flagged. False positives are likely on summary tables that span multiple paragraphs and frontmatter-derived prose. Triage by priority: highest-traffic pages first.",
  "",
  "## Files with unsourced claims",
  "",
]

const sortedFiles = Object.entries(byFile).sort(([, a], [, b]) => b.length - a.length)
for (const [file, vs] of sortedFiles.slice(0, 30)) {
  lines.push(`### ${file} (${vs.length})`)
  for (const v of vs.slice(0, 5)) {
    lines.push(`- line ${v.line}: claim \`${v.claim_snippet}\``)
    lines.push(`  > ${v.paragraph_excerpt}…`)
  }
  if (vs.length > 5) lines.push(`- … ${vs.length - 5} more on this page`)
  lines.push("")
}
if (sortedFiles.length > 30) lines.push(`_${sortedFiles.length - 30} more files — see CSV._`)

fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

const csvLines = ["file,line,claim_snippet,paragraph_excerpt"]
for (const v of violations) {
  csvLines.push([
    v.file,
    v.line,
    `"${v.claim_snippet.replace(/"/g, '""')}"`,
    `"${v.paragraph_excerpt.replace(/"/g, '""')}"`,
  ].join(","))
}
fs.writeFileSync(csvPath, csvLines.join("\n") + "\n", "utf8")

console.log(`Provenance audit: ${filesScanned.length} files scanned`)
console.log(`  Files with unsourced claims: ${Object.keys(byFile).length}`)
console.log(`  Total unsourced claims: ${violations.length}`)
console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
console.log(`CSV:    ${path.relative(repoRoot, csvPath)}`)
