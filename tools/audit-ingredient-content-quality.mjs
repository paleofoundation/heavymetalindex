#!/usr/bin/env node
// Content-quality audit for wiki/ingredients/*.md
//
// Shares the hard-rule pattern set with the product audit but adds
// ingredient-specific rules:
//   - contamination_profile block must have all 10 analytes (Pb, Cd, iAs,
//     tAs, tHg, Ni, Al, Cr, Sn, U) per CLAUDE.md Part 6
//   - mixed-state asymmetry: per the Part 6 coverage rule, an ingredient
//     page must not have some sub-blocks at `populated`/`in_progress` while
//     others remain `pending`. All-pending stubs are exempt.
//
// Wired into prebuild via npm run lint:ingredient-content-quality.
// Non-zero exit code on any hard-rule violation.

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
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const dataDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(dataDir, { recursive: true })

const HMTC_ANALYTES = ["Pb", "Cd", "iAs", "tAs", "tHg", "Ni", "Al", "Cr", "Sn", "U"]

const FRONTMATTER_REQUIRED = ["type", "audience", "updated"]

function auditFile(filepath) {
  const text = fs.readFileSync(filepath, "utf8")
  const { frontmatter, body } = splitFrontmatter(text)
  const slug = path.basename(filepath, ".md")
  const violations = []

  // ----- Hard rules: shared with product audit -----
  for (const { line, isMarker } of scanLines(body)) {
    void isMarker
    violations.push(...collectHits(line, INTERNAL_CODENAMES, "internal_codename", "hard"))
    violations.push(...collectHits(line, REPO_PATH_PATTERNS, "repo_path_leak", "hard"))
  }
  // Annotate line numbers
  let lineNum = 0
  for (const { isMarker } of scanLines(body)) { void isMarker; lineNum += 1 }
  // (Line annotation done in the per-hit walk below.)

  // Re-walk with line numbers
  const violationsByLine = []
  let i = 0
  for (const { line } of scanLines(body)) {
    i += 1
    const codenameHits = collectHits(line, INTERNAL_CODENAMES, "internal_codename", "hard")
    const pathHits = collectHits(line, REPO_PATH_PATTERNS, "repo_path_leak", "hard")
    for (const h of [...codenameHits, ...pathHits]) {
      violationsByLine.push({ ...h, line: i })
    }
  }

  // ----- Hard rule: frontmatter completeness -----
  for (const key of FRONTMATTER_REQUIRED) {
    if (!frontmatterValue(frontmatter, key)) {
      violationsByLine.push({
        rule: "frontmatter_missing",
        severity: "hard",
        line: 0,
        snippet: key,
        context: "Required frontmatter field absent",
      })
    }
  }

  // ----- Ingredient-specific: contamination_profile coverage -----
  // Stub state: all 10 analytes at status: pending. Non-stub: some at
  // populated/in_progress. Mixed: some advanced, others still pending —
  // this is the lint failure per the Part 6 coverage rule.
  const profileBlock = extractContaminationProfile(frontmatter)
  if (profileBlock) {
    const statesByMetal = parseAnalyteStates(profileBlock)
    const present = new Set(Object.keys(statesByMetal))
    const missing = HMTC_ANALYTES.filter((m) => !present.has(m))
    if (missing.length > 0) {
      violationsByLine.push({
        rule: "contamination_profile_incomplete",
        severity: "hard",
        line: 0,
        snippet: missing.join(","),
        context: `contamination_profile is missing analytes: ${missing.join(", ")}`,
      })
    }

    const advanced = Object.values(statesByMetal).filter((s) => s === "populated" || s === "in_progress").length
    const pending = Object.values(statesByMetal).filter((s) => s === "pending").length
    if (advanced > 0 && pending > 0) {
      violationsByLine.push({
        rule: "contamination_profile_mixed_state",
        severity: "hard",
        line: 0,
        snippet: `populated/in_progress: ${advanced}; pending: ${pending}`,
        context: "Per CLAUDE.md Part 6 coverage rule: when an ingest touches an ingredient page, all 10 sub-blocks must advance out of pending. Analytes the source does not address advance to populated with n_studies: 0 (declared data gap), not left as pending.",
      })
    }
  }

  return {
    slug,
    file: path.relative(repoRoot, filepath),
    violations: violationsByLine,
  }
}

function extractContaminationProfile(frontmatter) {
  const idx = frontmatter.indexOf("contamination_profile:")
  if (idx < 0) return null
  // Naive: read everything from contamination_profile: through end of frontmatter
  // or through next top-level key. Top-level keys start at column 0.
  const after = frontmatter.slice(idx)
  const lines = after.split("\n")
  const out = [lines[0]]
  for (let i = 1; i < lines.length; i++) {
    if (/^[a-zA-Z_]/.test(lines[i])) break  // next top-level key
    out.push(lines[i])
  }
  return out.join("\n")
}

function parseAnalyteStates(block) {
  // Each analyte sub-block can be either YAML block style:
  //   Pb:
  //     status: populated
  //     ...
  // or YAML flow style on one line:
  //   Pb: { status: pending, typical_ppb: [null, null], ... }
  const states = {}
  const lines = block.split("\n")
  let currentMetal = null
  for (const line of lines) {
    // Flow style: "  Pb: { status: pending, ... }"
    const flowMatch = line.match(/^\s{2}([A-Za-z][A-Za-z-]*?):\s*\{[^}]*status:\s*(\w+)/)
    if (flowMatch) {
      states[flowMatch[1]] = flowMatch[2]
      continue
    }
    // Block style: "  Pb:"
    const metalMatch = line.match(/^\s{2}([A-Za-z][A-Za-z-]*?):\s*$/)
    if (metalMatch) {
      currentMetal = metalMatch[1]
      continue
    }
    const statusMatch = line.match(/^\s{4}status:\s*(\w+)/)
    if (statusMatch && currentMetal) {
      states[currentMetal] = statusMatch[1]
    }
  }
  return states
}

// ----- Run -----

const results = []
for (const file of fs.readdirSync(ingredientsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  results.push(auditFile(path.join(ingredientsDir, file)))
}

// ----- Reports -----

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
fs.writeFileSync(path.join(dataDir, "ingredient-content-quality-audit.csv"), csvLines.join("\n") + "\n")

const today = new Date().toISOString().slice(0, 10)
const total = results.length
const hardFails = results.filter((r) => r.violations.some((v) => v.severity === "hard"))
const md = []
md.push(`# Ingredient content-quality audit — ${today}`)
md.push("")
md.push(`- Pages scanned: ${total}`)
md.push(`- Pages with hard violations: ${hardFails.length}`)
md.push("")
for (const r of hardFails.slice(0, 50)) {
  md.push(`## ${r.slug}`)
  for (const v of r.violations.filter((x) => x.severity === "hard").slice(0, 8)) {
    md.push(`- L${v.line}: \`${v.rule}\` — \`${v.snippet}\` (${v.context})`)
  }
  md.push("")
}
fs.writeFileSync(path.join(dataDir, "ingredient-content-quality-audit.md"), md.join("\n"))

console.log(`Ingredient content-quality audit: ${total} pages, ${hardFails.length} with hard violations.`)
console.log(`  csv: data/evidence/ingredient-content-quality-audit.csv`)

if (hardFails.length > 0) process.exit(1)
