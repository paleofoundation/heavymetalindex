#!/usr/bin/env node
// Apply firewall-clean rewrites to public pages where workbench vocabulary
// leaked. This is the *fix* companion to firewall-lint.mjs.
//
// Per CLAUDE.md Part 2: percentile-selection arithmetic, internal codenames,
// and workbench tier labels do not appear on public pages. The wiki reports
// literature evidence; the workbench applies the methodology.
//
// Per the user's standing directive (no hand-curated content, generators
// overwrite freely), we apply the rewrites in bulk and let lint catch any
// regressions on subsequent ticks.
//
// Rewrites applied:
//   Frontmatter:
//     - public_evidence_label: Path A thin (...)  → "Modeled or limited evidence"
//     - public_evidence_label: At readiness bar (...) → "Modeled or limited evidence"
//     - public_evidence_label: approaching the bar (...) → "Modeled or limited evidence"
//     - variant_type: clean_platform → variant_type: lower-contamination-sibling
//     - variant_type: contamination_platform → variant_type: higher-contamination-sibling
//     - variant_type: contamination_platform_added_step_0c → variant_type: higher-contamination-sibling
//     - review_state: phase3_part19 → review_state: phase3
//   Body:
//     - "clean-platform P90" → "the lower-end of the literature distribution"
//     - "dirty-platform P30" → "the higher-end of the literature distribution"
//     - "contamination-platform P30" → "the higher-end of the literature distribution"
//     - "Path A thin" → "single-source coverage"
//     - "Path A" (standalone) → "literature evidence"
//     - "Path B" (standalone) → "below-LOQ context"
//     - "contamination platform" (lowercase) → "higher-contamination row"
//     - "clean platform" (lowercase) → "lower-contamination row"
//     - "n_a_tier" → "A-tier source count" (only in body, not in batch reports)
//     - "CC eligibility verdicts" → "candidate-cell verdicts"
//
// Scope: wiki/products/, wiki/ingredients/, wiki/metals/, wiki/regulations/.
// Skips wiki/sources/ (those quote literature verbatim) and batch reports.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const dryRun = process.argv.includes("--dry-run")

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

const SKIP_PATTERNS = [/\/batch-reports\//, /\/lint\//, /\/queries\//, /\/index\.md$/]

// Frontmatter rewrites: applied to lines in the YAML block only
const FRONTMATTER_REWRITES = [
  { re: /^public_evidence_label:\s*Path A thin.*$/m, to: "public_evidence_label: Modeled or limited evidence" },
  { re: /^public_evidence_label:\s*Path A.*$/m, to: "public_evidence_label: Modeled or limited evidence" },
  { re: /^public_evidence_label:\s*At readiness bar.*$/m, to: "public_evidence_label: Modeled or limited evidence" },
  { re: /^public_evidence_label:\s*[Aa]pproaching.*$/m, to: "public_evidence_label: Modeled or limited evidence" },
  { re: /^variant_type:\s*clean_platform.*$/m, to: "variant_type: lower-contamination-sibling" },
  { re: /^variant_type:\s*contamination_platform_added_step_0c.*$/m, to: "variant_type: higher-contamination-sibling" },
  { re: /^variant_type:\s*contamination_platform.*$/m, to: "variant_type: higher-contamination-sibling" },
  { re: /^review_state:\s*phase3_part19\s*$/m, to: "review_state: phase3" },
]

// Body rewrites: applied to text after the YAML block
const BODY_REWRITES = [
  // Workbench-target percentile phrases — most specific first
  { re: /\bclean[- ]platform[- ](P|p)(?:30|45|90|97)\b/g, to: "the lower-end of the literature distribution" },
  { re: /\bclean[- ]benchmark[- ]clean[- ]platform\b/g, to: "the lower-end of the literature distribution" },
  { re: /\bdirty[- ]platform[- ](P|p)(?:30|45|90|97)\b/g, to: "the higher-end of the literature distribution" },
  { re: /\bcontamination[- ]platform[- ](P|p)(?:30|45|90|97)\b/g, to: "the higher-end of the literature distribution" },
  { re: /\b(P|p)(30|45|97)\s+target\b/g, to: "synthesis target" },
  // Row-architecture role framing
  { re: /\bcontamination[- ]platform[- ]counterpart\b/gi, to: "sibling row in the same category" },
  { re: /\bcontamination[- ]platform\b/gi, to: "higher-contamination row" },
  { re: /\bclean[- ]platform\b/gi, to: "lower-contamination row" },
  // Tier vocabulary
  { re: /\bPath A thin\b/g, to: "single-source coverage" },
  { re: /\bPath A\s+(?:under|candidate|n_a_tier)/g, to: "literature evidence" },
  { re: /\bPath A(?=\s+(?:cell|row))/g, to: "literature-baseline" },
  { re: /\bPath A\b(?!\s*(?:\.docx|\(|—))/g, to: "literature evidence" },
  { re: /\bPath B candidate\b/g, to: "below-LOQ candidate" },
  { re: /\bPath B\b/g, to: "below-LOQ" },
  // Workbench internal vocabulary
  { re: /\bn_a_tier\s*(?:source\s*counts?)?\b/g, to: "A-tier source counts" },
  { re: /\bCC eligibility\s+verdicts\b/gi, to: "candidate-cell verdicts" },
  { re: /\bCC eligibility\b/gi, to: "candidate-cell status" },
]

const changes = []
let filesScanned = 0
let filesChanged = 0

for (const dir of PUBLIC_DIRS) {
  const full = path.join(repoRoot, dir)
  if (!fs.existsSync(full)) continue
  walkDir(full)
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      walkDir(path.join(dir, entry.name))
      continue
    }
    if (!entry.name.endsWith(".md")) continue
    const rel = path.relative(repoRoot, path.join(dir, entry.name))
    if (SKIP_PATTERNS.some((p) => p.test(rel))) continue
    processFile(path.join(dir, entry.name), rel)
  }
}

function processFile(filepath, rel) {
  filesScanned += 1
  const text = fs.readFileSync(filepath, "utf8")
  const fmEnd = text.indexOf("\n---", 4)
  if (fmEnd < 0 || !text.startsWith("---")) return // no frontmatter, leave alone

  let fm = text.slice(0, fmEnd + 4)
  let body = text.slice(fmEnd + 4)

  const fileChanges = []

  for (const { re, to } of FRONTMATTER_REWRITES) {
    const before = fm
    fm = fm.replace(re, to)
    if (fm !== before) fileChanges.push(`frontmatter: ${re.source.slice(0, 60)}`)
  }

  for (const { re, to } of BODY_REWRITES) {
    const before = body
    body = body.replace(re, to)
    if (body !== before) fileChanges.push(`body: ${re.source.slice(0, 60)}`)
  }

  if (fileChanges.length === 0) return

  filesChanged += 1
  changes.push({ file: rel, changes: fileChanges })
  if (!dryRun) {
    fs.writeFileSync(filepath, fm + body, "utf8")
  }
}

// Write report
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
fs.mkdirSync(autonomyDir, { recursive: true })
const reportPath = path.join(autonomyDir, `firewall-fix-${today}.md`)
const lines = [
  `# Firewall fix — ${today}`,
  "",
  `Generated: ${new Date().toISOString()}`,
  `Mode: ${dryRun ? "DRY-RUN" : "EXECUTED"}`,
  "",
  `## Summary`,
  "",
  `- Files scanned: ${filesScanned}`,
  `- Files changed: ${filesChanged}`,
  "",
  "## Changes",
  "",
]
for (const c of changes) {
  lines.push(`### ${c.file}`)
  for (const ch of c.changes) {
    lines.push(`- ${ch}`)
  }
  lines.push("")
}
fs.writeFileSync(reportPath, lines.join("\n"), "utf8")

console.log(`Firewall fix: scanned ${filesScanned}, changed ${filesChanged}${dryRun ? " (DRY-RUN)" : ""}`)
console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
