#!/usr/bin/env node
// Content-quality audit for wiki/sources/*.md
//
// Source pages have different concerns than product/ingredient/metal pages:
//   - cite_key must match the filename (raw_handle stays internal)
//   - evidence_tier must be A, B, or C
//   - source_type must be one of the recognized values
//   - frontmatter must have type, cite_key, year, source_type, evidence_tier
//   - Internal codenames and repo paths are still hard violations
//
// At 896 source pages, this audit runs across the corpus. Failures block
// prebuild.

import fs from "node:fs"
import path from "node:path"
import {
  INTERNAL_CODENAMES,
  REPO_PATH_PATTERNS,
  splitFrontmatter,
  frontmatterValue,
  scanLines,
  collectHits,
} from "./audits/shared/patterns.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const dataDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(dataDir, { recursive: true })

const FRONTMATTER_REQUIRED = ["type", "cite_key", "year", "source_type", "evidence_tier"]
const VALID_EVIDENCE_TIERS = new Set(["A", "B", "C"])
const VALID_SOURCE_TYPES = new Set([
  "peer-reviewed", "review", "systematic-review", "meta-analysis",
  "gov-regulation", "government-regulatory", "regulation",
  "gov-data", "dataset", "government-dataset", "government dataset",
  "gov-guidance", "government-guidance", "government-report", "gov-report",
  "ngo", "ngo-report", "industry", "industry-white-paper",
  "news", "press", "conference", "conference-proceedings",
  "study", "database", "textbook", "textbook-chapter", "report",
  "nonprofit",
])

function auditFile(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  const { frontmatter, body } = splitFrontmatter(text)
  const filename = path.basename(filepath, ".md")
  const violations = []

  let i = 0
  for (const { line } of scanLines(body)) {
    i += 1
    const codenameHits = collectHits(line, INTERNAL_CODENAMES, "internal_codename", "hard")
    const pathHits = collectHits(line, REPO_PATH_PATTERNS, "repo_path_leak", "hard")
    for (const h of [...codenameHits, ...pathHits]) {
      violations.push({ ...h, line: i })
    }
  }

  for (const key of FRONTMATTER_REQUIRED) {
    if (!frontmatterValue(frontmatter, key)) {
      violations.push({
        rule: "frontmatter_missing",
        severity: "hard",
        line: 0,
        snippet: key,
        context: "Required frontmatter field absent",
      })
    }
  }

  // cite_key must match the filename
  const citeKey = frontmatterValue(frontmatter, "cite_key")
  if (citeKey && citeKey !== filename) {
    violations.push({
      rule: "cite_key_mismatch",
      severity: "hard",
      line: 0,
      snippet: citeKey,
      context: `cite_key '${citeKey}' does not match filename '${filename}'`,
    })
  }

  // evidence_tier must be A/B/C
  const tier = frontmatterValue(frontmatter, "evidence_tier")
  if (tier && !VALID_EVIDENCE_TIERS.has(tier)) {
    violations.push({
      rule: "evidence_tier_invalid",
      severity: "hard",
      line: 0,
      snippet: tier,
      context: `evidence_tier must be A, B, or C; got '${tier}'`,
    })
  }

  // source_type validation (soft warning — vocabulary may evolve)
  const sourceType = frontmatterValue(frontmatter, "source_type")
  if (sourceType && !VALID_SOURCE_TYPES.has(sourceType.toLowerCase().replace(/_/g, "-"))) {
    violations.push({
      rule: "source_type_unrecognized",
      severity: "soft",
      line: 0,
      snippet: sourceType,
      context: `source_type '${sourceType}' is not in the recognized vocabulary; check display-type mapping in build-source-legend.mjs`,
    })
  }

  return {
    slug: filename,
    file: path.relative(repoRoot, filepath),
    violations,
  }
}

const results = []
for (const file of fs.readdirSync(sourcesDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  // Template files (filenames starting with underscore) carry placeholder
  // values like "firstauthor2024-short-slug" and YAML inline-comment
  // hints — they're documentation, not real source pages.
  if (file.startsWith("_")) continue
  results.push(auditFile(path.join(sourcesDir, file)))
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
fs.writeFileSync(path.join(dataDir, "source-content-quality-audit.csv"), csvLines.join("\n") + "\n")

const hardFails = results.filter((r) => r.violations.some((v) => v.severity === "hard"))
const softWarnings = results.filter((r) => r.violations.some((v) => v.severity === "soft"))
console.log(`Source content-quality audit: ${results.length} pages.`)
console.log(`  hard violations: ${hardFails.length} pages`)
console.log(`  soft warnings:   ${softWarnings.length} pages`)
console.log(`  csv: data/evidence/source-content-quality-audit.csv`)

if (hardFails.length > 0) process.exit(1)
