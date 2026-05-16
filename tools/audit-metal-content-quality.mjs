#!/usr/bin/env node
// Content-quality audit for wiki/metals/*.md
//
// Shares the hard-rule pattern set with the product audit. Metal pages
// are reference pages for each metal (Pb, Cd, iAs, etc.) and follow a
// different template than product or ingredient pages — they don't have
// a contamination_profile block, but they do require complete frontmatter
// and the standard convention checks.

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
const metalsDir = path.join(repoRoot, "wiki/metals")
const dataDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(dataDir, { recursive: true })

const FRONTMATTER_REQUIRED = ["type", "audience", "updated"]

function auditFile(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  const { frontmatter, body } = splitFrontmatter(text)
  const slug = path.basename(filepath, ".md")
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

  return {
    slug,
    file: path.relative(repoRoot, filepath),
    violations,
  }
}

const results = []
for (const file of fs.readdirSync(metalsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  results.push(auditFile(path.join(metalsDir, file)))
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
fs.writeFileSync(path.join(dataDir, "metal-content-quality-audit.csv"), csvLines.join("\n") + "\n")

const hardFails = results.filter((r) => r.violations.some((v) => v.severity === "hard"))
console.log(`Metal content-quality audit: ${results.length} pages, ${hardFails.length} with hard violations.`)
console.log(`  csv: data/evidence/metal-content-quality-audit.csv`)

if (hardFails.length > 0) process.exit(1)
