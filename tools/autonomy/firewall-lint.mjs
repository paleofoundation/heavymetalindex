#!/usr/bin/env node
// wiki/HMTc firewall lint (CLAUDE.md Part 2 + OPERATING.md Part 6).
//
// Brand legal teams and plaintiff/defense experts read public wiki/ pages.
// Any percentile-selection arithmetic, internal codename, or workbench-only
// vocabulary on those pages is a Daubert-cross-examination attack surface
// and a firewall breach.
//
// This tool scans wiki/products/, wiki/ingredients/, wiki/metals/, and
// wiki/regulations/ for the following violations and emits a report:
//
//   Severity ERROR (build-failing once wired to lint):
//     - "Path A" / "Path B" anywhere on a public page
//     - "contamination platform" / "clean platform" used as workbench framing
//       (the term contamination_profile in frontmatter is OK; "contamination
//        platform" as a row designation is NOT)
//     - "n_a_tier" mentioned on a public page
//     - "MAX_SOURCE_SHARE" anywhere on a public page
//     - "public_evidence_label" frontmatter with workbench tier language
//       ("Path A thin", "Path B", "approaching the bar", etc.)
//
//   Severity WARN (manual review):
//     - "variant_type: clean_platform | contamination_platform" in frontmatter
//       — these were added before the firewall hardening; they tag the row
//       architecture for the workbench but leak via frontmatter parsers
//     - "clean-platform P90" / "dirty-platform P30" / "p30 target" / "p90 target"
//       body phrasing — synthesis-target language
//
//   Not flagged (literature reporting is fine):
//     - Concentration percentiles (p50, p90, p95) inside source-evidence
//       tables that quote what a paper itself reports
//     - "ppb" / "ppm" / "mg/kg" / similar units
//
// Output:
//   data/evidence/autonomy/firewall-lint-<date>.md
//   data/evidence/autonomy/firewall-lint-violations.csv

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const PUBLIC_DIRS = [
  "wiki/products",
  "wiki/ingredients",
  "wiki/metals",
  "wiki/regulations",
  "wiki/methodology",
  "wiki/health",
  "wiki/testing",
  "wiki/mitigation",
  "wiki/supply-chain",
  "wiki/microbiome",
  "wiki/certification",
]

// Skip: source pages quote arbitrary text from literature; batch reports and
// lint reports are not public surfaces; the index page is auto-managed.
const SKIP_PATTERNS = [/\/index\.md$/, /\/batch-reports\//, /\/lint\//, /\/queries\//]

const ERROR_PATTERNS = [
  { pattern: /\bPath\s+[AB](?:\s+thin)?\b/g, label: "PATH_AB_FRAMING", description: "Path A / Path B is HMTc workbench tier vocabulary; not for public pages." },
  { pattern: /\bcontamination[- ]platform\b/gi, label: "CONTAMINATION_PLATFORM", description: "\"contamination platform\" is workbench row-architecture framing. State the literature evidence directly." },
  { pattern: /\bclean[- ]platform\b/gi, label: "CLEAN_PLATFORM", description: "\"clean platform\" is workbench row-architecture framing. State the literature evidence directly." },
  { pattern: /\bn_a_tier\b/g, label: "N_A_TIER", description: "n_a_tier is internal evidence-state vocabulary. Use plain confidence ratings instead." },
  { pattern: /\bMAX_SOURCE_SHARE\b/g, label: "MAX_SOURCE_SHARE", description: "MAX_SOURCE_SHARE is the pooling-engine parameter. Workbench-only." },
  { pattern: /^public_evidence_label:\s*(?:Path|approaching|at[- ]the[- ]bar)/img, label: "PUBLIC_EVIDENCE_LABEL_TIER", description: "public_evidence_label frontmatter contains tier vocabulary visible in rendered metadata." },
  { pattern: /\bCC eligibility\b/gi, label: "CC_ELIGIBILITY", description: "\"CC eligibility\" is workbench candidacy framing. Public pages report literature, not eligibility verdicts." },
]

const WARN_PATTERNS = [
  { pattern: /^variant_type:\s*(?:clean_platform|contamination_platform)/img, label: "VARIANT_TYPE_PLATFORM", description: "variant_type tags row-architecture role; consider moving to workbench frontmatter." },
  { pattern: /\b(?:clean|dirty|contamination)[- ]platform\s+(?:P|p)(?:30|45|90|97)\b/g, label: "PLATFORM_PERCENTILE_TARGET", description: "Phrase pairs a row-architecture role with a synthesis-target percentile. Both are workbench-only." },
  { pattern: /(?:p|P)(?:30|45|97)\s+target/g, label: "PERCENTILE_TARGET", description: "Synthesis-target percentile language. Move to workbench." },
]

const errors = []
const warnings = []
const filesScanned = []

for (const dir of PUBLIC_DIRS) {
  const full = path.join(repoRoot, dir)
  if (!fs.existsSync(full)) continue
  scanDir(full)
}

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      scanDir(path.join(dir, entry.name))
      continue
    }
    if (!entry.name.endsWith(".md")) continue
    const rel = path.relative(repoRoot, path.join(dir, entry.name))
    if (SKIP_PATTERNS.some((p) => p.test(rel))) continue
    scanFile(path.join(dir, entry.name), rel)
  }
}

function scanFile(filepath, rel) {
  const text = fs.readFileSync(filepath, "utf8")
  filesScanned.push(rel)
  for (const { pattern, label, description } of ERROR_PATTERNS) {
    pattern.lastIndex = 0
    const matches = collectMatches(text, pattern, 5)
    if (matches.length) {
      errors.push({ severity: "ERROR", file: rel, label, description, matches })
    }
  }
  for (const { pattern, label, description } of WARN_PATTERNS) {
    pattern.lastIndex = 0
    const matches = collectMatches(text, pattern, 3)
    if (matches.length) {
      warnings.push({ severity: "WARN", file: rel, label, description, matches })
    }
  }
}

function collectMatches(text, pattern, maxN) {
  const out = []
  let count = 0
  for (const m of text.matchAll(pattern)) {
    if (count >= maxN) break
    const line = lineNumberAt(text, m.index)
    out.push({ line, snippet: snippetAround(text, m.index) })
    count += 1
  }
  return out
}

function lineNumberAt(text, idx) {
  let line = 1
  for (let i = 0; i < idx; i++) if (text[i] === "\n") line += 1
  return line
}

function snippetAround(text, idx) {
  const start = Math.max(0, idx - 30)
  const end = Math.min(text.length, idx + 80)
  return text.slice(start, end).replace(/\n+/g, " ").trim()
}

// Write report
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
fs.mkdirSync(autonomyDir, { recursive: true })
const reportPath = path.join(autonomyDir, `firewall-lint-${today}.md`)
const csvPath = path.join(autonomyDir, "firewall-lint-violations.csv")

const lines = [
  `# Firewall lint — ${today}`,
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  `## Summary`,
  "",
  `- Files scanned: ${filesScanned.length}`,
  `- ERROR violations: ${errors.length}`,
  `- WARN violations: ${warnings.length}`,
  "",
]

if (errors.length) {
  lines.push("## ERROR violations")
  lines.push("")
  const byFile = groupBy(errors, "file")
  for (const [file, list] of Object.entries(byFile)) {
    lines.push(`### ${file}`)
    for (const e of list) {
      lines.push(`- **${e.label}** — ${e.description}`)
      for (const m of e.matches) {
        lines.push(`  - line ${m.line}: \`${m.snippet}\``)
      }
    }
    lines.push("")
  }
}

if (warnings.length) {
  lines.push("## WARN violations")
  lines.push("")
  const byFile = groupBy(warnings, "file")
  for (const [file, list] of Object.entries(byFile)) {
    lines.push(`### ${file}`)
    for (const w of list) {
      lines.push(`- ${w.label} — ${w.description}`)
      for (const m of w.matches) {
        lines.push(`  - line ${m.line}: \`${m.snippet}\``)
      }
    }
    lines.push("")
  }
}

fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

const csvLines = ["severity,file,label,line,snippet"]
for (const v of [...errors, ...warnings]) {
  for (const m of v.matches) {
    csvLines.push([v.severity, v.file, v.label, m.line, `"${m.snippet.replace(/"/g, '""')}"`].join(","))
  }
}
fs.writeFileSync(csvPath, csvLines.join("\n") + "\n", "utf8")

console.log(`Firewall lint: scanned ${filesScanned.length} files`)
console.log(`  ERRORS:   ${errors.length}`)
console.log(`  WARNINGS: ${warnings.length}`)
console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
console.log(`CSV:    ${path.relative(repoRoot, csvPath)}`)

// Exit non-zero on ERROR violations so the daemon tick captures the failure
// in its log. The first cleanup pass on 2026-05-14 reduced 30 errors → 0,
// so future ticks should stay at zero unless a regression slips in.
process.exit(errors.length > 0 ? 1 : 0)

function groupBy(arr, key) {
  const out = {}
  for (const a of arr) {
    if (!out[a[key]]) out[a[key]] = []
    out[a[key]].push(a)
  }
  return out
}
