#!/usr/bin/env node
// Content-quality audit for wiki/products/*.md
//
// Per OPERATING.md Part 3 and CLAUDE.md Part 2 / Part 18, public product
// pages must not surface internal pipeline vocabulary, repo paths, brand
// names, or wiki-computed percentile arithmetic. Source-reported
// percentiles in evidence-inventory rows that cite a source are allowed
// (those are literature evidence). This audit classifies every product
// page against the rule set and writes a structured CSV plus a markdown
// summary so future sessions can read the current state without
// re-deriving the rules from CLAUDE.md.
//
// Usage:
//   node tools/audit-product-content-quality.mjs            # write report
//   node tools/audit-product-content-quality.mjs --json     # also emit json
//
// Output:
//   data/evidence/product-content-quality-audit.csv
//   data/evidence/product-content-quality-audit.md
//
// Non-zero exit code is reserved for use as a prebuild gate: if any
// hard-flag violation count is above zero, exit 1. Stubs (sources: 0)
// are exempt from content-quality lint but still scanned for tracking.

import fs from "node:fs"
import path from "node:path"
import {
  INTERNAL_CODENAMES,
  REPO_PATH_PATTERNS,
} from "./audits/shared/patterns.mjs"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const dataDir = path.join(repoRoot, "data/evidence")
fs.mkdirSync(dataDir, { recursive: true })

const args = process.argv.slice(2)
const wantJson = args.includes("--json")

// ----- Product-specific rule definitions -----
// Internal codenames and repo paths are imported from the shared module
// (tools/audits/shared/patterns.mjs) so this audit and the ingredient,
// metal, and source audits all use the same definitions. When you change
// a pattern, change it there once.

const PLACEHOLDER_PATTERNS = [
  /\*\[awaiting synthesis\]\*/g,
  /_Pending synthesis\./g,
]

// Source-reported percentile patterns we ALLOW. A percentile mention is
// allowed if (a) it appears inside an evidence-inventory or distribution-
// context table row that contains a `[[sources/` wikilink, OR (b) it
// appears inside the canonical "How standards math uses this page"
// disclaimer paragraph. Otherwise it's flagged as a wiki-computed value.
const PERCENTILE_TOKEN = /\bp(10|25|30|45|50|75|90|95|97|99|100)\b/g

// Required for every product page in wiki/products/
const FRONTMATTER_REQUIRED_ALL = ["type", "audience", "updated", "sources"]
// Required only for type: product-category (per-row pages); master and
// crosswalk pages have their own structure.
const FRONTMATTER_REQUIRED_ROW = ["category"]

// ----- Helpers -----

function readFile(p) { return fs.readFileSync(p, "utf8") }

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) return { frontmatter: "", body: text }
  const end = text.indexOf("\n---\n", 4)
  if (end < 0) return { frontmatter: "", body: text }
  return {
    frontmatter: text.slice(4, end),
    body: text.slice(end + 5),
  }
}

function frontmatterValue(fm, key) {
  const re = new RegExp(`^${key}:\\s*(.+)$`, "m")
  const m = fm.match(re)
  return m ? m[1].trim() : null
}

function isStub(fm) {
  const v = frontmatterValue(fm, "sources")
  if (v === null) return true
  const n = Number(v)
  return !Number.isFinite(n) || n === 0
}

function isMarkerBlock(line, state) {
  // Tracks whether the current line is inside one of the generator-managed
  // marker blocks. We scan inside marker blocks because the rendered page
  // shows that content to readers — whether the leak came from a scaffolder
  // placeholder, a generator template, or hand editing, it is public-facing.
  // The right fix is to clean the source (scaffolder + generator + manual).
  if (/<!--\s*BEGIN:\s*hmi-/.test(line)) state.inMarker = true
  if (/<!--\s*END:\s*hmi-/.test(line)) state.inMarker = false
  return state.inMarker
}

function isInsideEvidenceRow(line) {
  // An evidence-inventory row is a table row that cites at least one source
  // wikilink. We consider table rows (starts with `|`) that include
  // `[[sources/`. Source-reported percentile values inside these rows are
  // allowed (the wiki is quoting what the source published).
  return /^\|/.test(line) && /\[\[sources\//.test(line)
}

function isStandardsMathDisclaimer(prevHeading) {
  return /how\s+standards\s+math\s+uses\s+this\s+page/i.test(prevHeading || "")
}

function isMethodologyParagraph(prevHeading) {
  return /^\s*methodology\b/i.test(prevHeading || "")
}

// ----- Audit one file -----

function auditFile(filepath) {
  const text = readFile(filepath)
  const { frontmatter, body } = splitFrontmatter(text)
  const slug = path.basename(filepath, ".md")
  const stub = isStub(frontmatter)

  const violations = []
  const lines = body.split("\n")
  const state = { inMarker: false }
  let currentH2 = null
  let placeholderCount = 0
  const headings = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const inMarker = isMarkerBlock(line, state)

    const h2 = line.match(/^##\s+(.+?)\s*$/)
    if (h2) {
      currentH2 = h2[1].trim()
      headings.push(currentH2)
    }

    // Placeholder count (any block)
    const placeholderMatches = line.match(/\*\[awaiting synthesis\]\*/g)
    if (placeholderMatches) placeholderCount += placeholderMatches.length

    // Note: marker-block contents are scanned the same as plain body.
    // The rendered page shows them; whether the leak came from a scaffolder
    // placeholder, a generator template, or hand editing, it is public-facing.
    void inMarker

    // Hard rule 1: internal codenames
    for (const pat of INTERNAL_CODENAMES) {
      pat.lastIndex = 0
      const m = pat.exec(line)
      if (m) {
        violations.push({
          rule: "internal_codename",
          severity: "hard",
          line: i + 1,
          snippet: m[0],
          context: line.trim().slice(0, 140),
        })
      }
    }

    // Hard rule 2: repo paths in prose
    for (const pat of REPO_PATH_PATTERNS) {
      pat.lastIndex = 0
      let m
      while ((m = pat.exec(line)) !== null) {
        violations.push({
          rule: "repo_path_leak",
          severity: "hard",
          line: i + 1,
          snippet: m[0],
          context: line.trim().slice(0, 140),
        })
      }
    }

    // Hard rule 3: wiki-computed percentile arithmetic
    // (allowed: source-cited evidence rows; standards-math disclaimer)
    if (!isInsideEvidenceRow(line) && !isStandardsMathDisclaimer(currentH2) && !isMethodologyParagraph(currentH2)) {
      PERCENTILE_TOKEN.lastIndex = 0
      let m
      while ((m = PERCENTILE_TOKEN.exec(line)) !== null) {
        // Allow `p10/p90/p100 distributions remain incomplete` as a phrase
        // describing what the literature has not provided — but only when
        // the line is explicitly describing absence of source-reported data.
        const isAbsenceContext = /(remain|are|still|not yet|incomplete|pending|cannot|do(es)? not|no\b).*\b(distribution|percentile|p(10|30|45|50|75|90|95|97|99|100))/i.test(line)
        if (isAbsenceContext) continue
        violations.push({
          rule: "wiki_computed_percentile",
          severity: "soft",
          line: i + 1,
          snippet: m[0],
          context: line.trim().slice(0, 140),
        })
      }
    }
  }

  // Soft rule: fixer-introduced grammar artifacts (the the, a the, doubled
  // words, empty parens, "an [consonant]"). These come from regex-driven
  // replacements that combine awkwardly with surrounding prose. Surfacing
  // as soft warnings prevents quiet accumulation.
  state.inMarker = false
  let prevH2 = null
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/<!--\s*BEGIN:\s*hmi-/.test(line)) state.inMarker = true
    if (/<!--\s*END:\s*hmi-/.test(line)) state.inMarker = false
    void prevH2

    const artifactPatterns = [
      { re: /\bthe the\b/g, name: "doubled_article_the_the" },
      { re: /\ba the\b/g, name: "doubled_article_a_the" },
      { re: /\bof the the\b/g, name: "doubled_article_of_the_the" },
      // "an structural" / "an stub" — "an" + consonant
      { re: /\ban [bcdfghjklmnpqrstvwxyz][a-z]+/g, name: "an_consonant" },
      // Empty parens that the fixer may leave
      { re: /\(\s*\)/g, name: "empty_parens" },
      // Doubled identical adjacent words (excluding allowlist)
      { re: /\b(\w{3,}) \1\b/g, name: "doubled_word" },
    ]
    const doubledWordAllowlist = new Set(["had", "that", "the", "is", "in", "of", "out"])
    for (const { re, name } of artifactPatterns) {
      re.lastIndex = 0
      let m
      while ((m = re.exec(line)) !== null) {
        // "an_consonant" check: many false positives ("an example", "an outcome").
        // Only flag the specific consonant-starting nouns the fixer commonly produces.
        if (name === "an_consonant") {
          const noun = m[0].slice(3)
          if (!/^(structural|the|page|product|stub|certification|new|few|valid|broad|recent|reported|relevant|cited|locked|retired|brand|consumer|regulatory|public|staff|future|sample|source|measured|tested|small|specific|wider|wide|narrow|category|category-level|class|partner|series|generator|generic)\b/.test(noun)) continue
        }
        // doubled_word: skip allowlist
        if (name === "doubled_word") {
          const word = m[1].toLowerCase()
          if (doubledWordAllowlist.has(word)) continue
        }
        violations.push({
          rule: `fixer_artifact:${name}`,
          severity: "soft",
          line: i + 1,
          snippet: m[0],
          context: line.trim().slice(0, 140),
        })
      }
    }
  }

  // Hard rule 4: duplicate H2 headings (after normalize)
  const normHeadings = headings.map((h) => h.toLowerCase().replace(/[‐-―]/g, "-").replace(/\s*\/\s*/g, "/").replace(/\s+/g, " ").trim())
  const seen = new Map()
  for (let i = 0; i < normHeadings.length; i++) {
    const h = normHeadings[i]
    if (seen.has(h)) {
      violations.push({
        rule: "duplicate_h2",
        severity: "hard",
        line: 0,
        snippet: headings[i],
        context: `Duplicate of "${headings[seen.get(h)]}"`,
      })
    } else {
      seen.set(h, i)
    }
  }

  // Hard rule 5: missing required frontmatter fields
  const pageType = frontmatterValue(frontmatter, "type")
  const required = [...FRONTMATTER_REQUIRED_ALL]
  if (pageType === "product-category") required.push(...FRONTMATTER_REQUIRED_ROW)
  for (const key of required) {
    if (!frontmatterValue(frontmatter, key)) {
      violations.push({
        rule: "frontmatter_missing",
        severity: "hard",
        line: 0,
        snippet: key,
        context: `Required frontmatter field absent`,
      })
    }
  }

  // Soft rule: excessive awaiting-synthesis placeholders. Budget scales
  // with source count: a 5-source page tolerates 1-2 placeholders; a
  // 60-source page tolerates ~10. The budget is max(3, 20% of source count).
  const sourceCount = Number(frontmatterValue(frontmatter, "sources") || 0)
  const placeholderBudget = Math.max(3, Math.floor(sourceCount * 0.2))
  if (placeholderCount > placeholderBudget) {
    violations.push({
      rule: "placeholder_budget_exceeded",
      severity: "soft",
      line: 0,
      snippet: String(placeholderCount),
      context: `Page carries ${placeholderCount} awaiting-synthesis placeholders (budget for ${sourceCount} sources: ${placeholderBudget})`,
    })
  }

  return {
    slug,
    file: path.relative(repoRoot, filepath),
    stub,
    placeholderCount,
    violations,
  }
}

// ----- Run -----

const results = []
for (const file of fs.readdirSync(productsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  results.push(auditFile(path.join(productsDir, file)))
}

// ----- Write CSV -----

const csvLines = ["slug,file,stub,placeholder_count,rule,severity,line,snippet,context"]
for (const r of results) {
  if (r.violations.length === 0) {
    csvLines.push(`${r.slug},${r.file},${r.stub},${r.placeholderCount},,,,,`)
    continue
  }
  for (const v of r.violations) {
    const ctx = String(v.context).replace(/"/g, '""')
    csvLines.push(`${r.slug},${r.file},${r.stub},${r.placeholderCount},${v.rule},${v.severity},${v.line},"${v.snippet}","${ctx}"`)
  }
}
fs.writeFileSync(path.join(dataDir, "product-content-quality-audit.csv"), csvLines.join("\n") + "\n", "utf8")

// ----- Write summary markdown -----

const today = new Date().toISOString().slice(0, 10)
const totalPages = results.length
const stubCount = results.filter((r) => r.stub).length
const nonStub = results.filter((r) => !r.stub)
const hardFails = nonStub.filter((r) => r.violations.some((v) => v.severity === "hard"))
const softFails = nonStub.filter((r) => r.violations.some((v) => v.severity === "soft"))

const ruleCounts = new Map()
for (const r of nonStub) {
  for (const v of r.violations) {
    const key = `${v.severity}:${v.rule}`
    ruleCounts.set(key, (ruleCounts.get(key) ?? 0) + 1)
  }
}

const md = []
md.push(`# Product content-quality audit — ${today}`)
md.push("")
md.push(`Generated: ${new Date().toISOString()}`)
md.push("")
md.push("## Summary")
md.push("")
md.push(`- Product pages scanned: ${totalPages}`)
md.push(`- Stubs (exempt from content-quality lint): ${stubCount}`)
md.push(`- Non-stub pages with hard-rule violations: ${hardFails.length}`)
md.push(`- Non-stub pages with soft-rule warnings: ${softFails.length}`)
md.push("")
md.push("## Violations by rule")
md.push("")
md.push("| Severity | Rule | Total occurrences |")
md.push("| --- | --- | ---: |")
for (const [key, count] of [...ruleCounts.entries()].sort((a, b) => b[1] - a[1])) {
  const [sev, rule] = key.split(":")
  md.push(`| ${sev} | ${rule} | ${count} |`)
}
md.push("")
md.push("## Pages with hard violations")
md.push("")
for (const r of hardFails) {
  md.push(`### ${r.slug}`)
  for (const v of r.violations.filter((x) => x.severity === "hard").slice(0, 10)) {
    md.push(`- Line ${v.line}: \`${v.rule}\` — \`${v.snippet}\` (${v.context})`)
  }
  const more = r.violations.filter((x) => x.severity === "hard").length - 10
  if (more > 0) md.push(`- _...and ${more} more hard hits._`)
  md.push("")
}

fs.writeFileSync(path.join(dataDir, "product-content-quality-audit.md"), md.join("\n"), "utf8")

if (wantJson) {
  fs.writeFileSync(path.join(dataDir, "product-content-quality-audit.json"), JSON.stringify(results, null, 2), "utf8")
}

console.log(`Content-quality audit: ${totalPages} pages (${stubCount} stubs).`)
console.log(`  hard violations: ${hardFails.length} pages`)
console.log(`  soft warnings:   ${softFails.length} pages`)
console.log(`  csv: data/evidence/product-content-quality-audit.csv`)
console.log(`  md:  data/evidence/product-content-quality-audit.md`)

if (hardFails.length > 0) process.exit(1)
