#!/usr/bin/env node
/**
 * firewall-lint.mjs
 *
 * Enforces the wiki/HMTc firewall: percentile arithmetic and engine
 * internals stay in data/workbench/, never in wiki/. The wiki is the
 * public literature evidence layer; the workbench is the staff
 * Standards Workbench (and per-product threshold math).
 *
 * Per CLAUDE.md Part 2: the firewall is operative policy. This tool
 * fails the daemon tick log (loud) when wiki/ contains engine
 * vocabulary, percentile-selection arithmetic, or workbench-side
 * markers. It is non-blocking by default (the daemon swallows the
 * exit code with || true) so a stray violation does not freeze the
 * autonomous loop, but the violation is loud in the report and gets
 * fixed before it accumulates.
 *
 * Output:
 *   - data/evidence/autonomy/firewall-lint-<date>.md
 *
 * Exit codes:
 *   0 = clean
 *   1 = warnings (engine-internal vocabulary in arguably defensible context)
 *   2 = errors (firewall breach — workbench arithmetic in public wiki/)
 */

import fs from "node:fs"
import path from "node:path"

const REPO_ROOT = process.cwd()
const WIKI_DIR = path.join(REPO_ROOT, "wiki")
const REPORT_DIR = path.join(REPO_ROOT, "data/evidence/autonomy")

// Patterns that should NOT appear in wiki/ pages.
// Hard violations (errors): code parameter names, explicit pooled-percentile
// values stated as the program's percentile, sensitivity-band internal labels.
// Soft warnings: methodology-description terms in contexts that may be
// describing transparency rather than exposing engine internals.
const FORBIDDEN = [
  {
    pattern: /\bMAX_SOURCE_SHARE\b/,
    level: "error",
    reason: "engine parameter name (code-level identifier)",
  },
  {
    pattern: /\bn_a_tier\s*[:=]\s*\d+\b/,
    level: "error",
    reason: "engine internal counter (n_a_tier with explicit value)",
  },
  {
    pattern: /\bpooled_p(?:30|45|90|97)_ppb\b/,
    level: "error",
    reason: "engine output column name (workbench CSV schema)",
  },
  {
    pattern: /\bclean_p97_pooled\b|\bdirty_p45_pooled\b/,
    level: "error",
    reason: "workbench-side percentile-classification token",
  },
  {
    pattern: /\bhmtc_aggregate_distributions\.csv\b/,
    level: "error",
    reason: "explicit reference to workbench engine output file",
  },
  {
    pattern: /\bcc_eligible(?:_clean|_dirty|_independent)?\b/,
    level: "error",
    reason: "CC eligibility token (workbench classification)",
  },
  {
    pattern: /\bsource-level bootstrap CI\b/i,
    level: "warning",
    reason: "specific algorithmic identifier; OK if describing methodology principle",
  },
]

function lintFile(filePath, content) {
  const findings = []
  for (const { pattern, level, reason } of FORBIDDEN) {
    const matches = [...content.matchAll(new RegExp(pattern, "g"))]
    for (const m of matches) {
      const before = content.slice(0, m.index)
      const lineNo = before.split("\n").length
      findings.push({
        file: path.relative(REPO_ROOT, filePath),
        line: lineNo,
        term: m[0],
        level,
        reason,
      })
    }
  }
  return findings
}

function walkWiki(dir, accum = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkWiki(p, accum)
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      accum.push(p)
    }
  }
  return accum
}

function main() {
  if (!fs.existsSync(WIKI_DIR)) {
    console.error("[firewall-lint] wiki/ directory not found.")
    process.exit(0)
  }

  const files = walkWiki(WIKI_DIR)
  console.log(`[firewall-lint] scanning ${files.length} wiki files...`)

  const allFindings = []
  for (const f of files) {
    const content = fs.readFileSync(f, "utf8")
    const findings = lintFile(f, content)
    if (findings.length > 0) allFindings.push(...findings)
  }

  const errors = allFindings.filter((f) => f.level === "error")
  const warnings = allFindings.filter((f) => f.level === "warning")

  // Write report
  fs.mkdirSync(REPORT_DIR, { recursive: true })
  const dateStr = new Date().toISOString().slice(0, 10)
  const reportPath = path.join(REPORT_DIR, `firewall-lint-${dateStr}.md`)
  const lines = [
    `# firewall-lint report — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `**Files scanned:** ${files.length}.`,
    `**ERRORS:** ${errors.length}.`,
    `**Warnings:** ${warnings.length}.`,
    ``,
  ]
  if (errors.length > 0) {
    lines.push(`## ERRORS (firewall breach)`)
    lines.push(``)
    for (const f of errors.slice(0, 100)) {
      lines.push(`- ${f.file}:${f.line} — \`${f.term}\` — ${f.reason}`)
    }
    if (errors.length > 100) lines.push(`- ... and ${errors.length - 100} more`)
    lines.push(``)
  }
  if (warnings.length > 0) {
    lines.push(`## Warnings`)
    lines.push(``)
    for (const f of warnings.slice(0, 50)) {
      lines.push(`- ${f.file}:${f.line} — \`${f.term}\` — ${f.reason}`)
    }
    if (warnings.length > 50) lines.push(`- ... and ${warnings.length - 50} more`)
    lines.push(``)
  }
  if (errors.length === 0 && warnings.length === 0) {
    lines.push(`Clean. No firewall violations detected in wiki/.`)
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

  console.log(`[firewall-lint] errors: ${errors.length}, warnings: ${warnings.length}.`)
  console.log(`[firewall-lint] report: ${path.relative(REPO_ROOT, reportPath)}`)

  if (errors.length > 0) process.exit(2)
  if (warnings.length > 0) process.exit(1)
  process.exit(0)
}

main()
