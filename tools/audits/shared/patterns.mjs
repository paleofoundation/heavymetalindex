// Shared regex patterns for content-quality audits across products,
// ingredients, metals, and sources. Each pattern set is documented inline
// with the rule it enforces. The product audit at
// tools/audit-product-content-quality.mjs imports from here; the ingredient,
// metal, and source audits do the same. When a rule changes, change it
// here once.

// ----- Hard rule 1: internal codenames -----

export const INTERNAL_CODENAMES = [
  // HMT&C taxonomy codenames that are workbench-internal
  /HMTc\s+Category\s+[12345]\s+row\s+\d+/g,
  /HMTc\s+Cat\s*[12345]\s+row\s+\d+/g,
  /HMTc\s+Cat\s*[12345]\b/g,
  /HMTc\s+row\s+\d+/g,
  /\bCategory\s+[12345]\s+row\s+\d+/g,
  /\bCategory\s+[12345]\s+Evidence\s+Fitness\s+pilot/g,
  /\bEvidence\s+Fitness\s+pilot/g,
  // Workbench-only pooling vocabulary
  /\bclean[-_ ]p?97[-_ ]pooled/gi,
  /\bdirty[-_ ]p?45[-_ ]pooled/gi,
  /\bn_a_tier\b/g,
  /\bPath\s+A\b\s+(?:candidates?|process|sources?)/g,
  /\bPath\s+B\b\s+(?:candidates?|process|sources?)/g,
  // Internal status flags
  /^\s*BLOCKED\s*:/m,
  /\bcc[-_ ]?eligibility\b/gi,
  /\bcc\s+eligibility\b/gi,
  // Pipeline-stage tags
  /\bStep\s+0\b/g,
  /\bTier\s+[12345]\s+(?:source|paper|extraction|stub|completed)/g,
  // Internal governance-doc references in body prose. CLAUDE.md /
  // OPERATING.md / AGENTS.md are the build's operating manuals; citing
  // them in a brand-legal-facing page reads as "this is internal build
  // documentation" rather than "this is authoritative reference."
  /\bCLAUDE\.md\s+Part\s+\d+/g,
  /\bOPERATING\.md\s+Part\s+\d+/g,
  /\bAGENTS\.md\s+Part\s+\d+/g,
  /\bper\s+CLAUDE\.md\b/gi,
  /\bper\s+OPERATING\.md\b/gi,
  // Autonomy/orchestrator vocabulary
  /\bautonomy[_ ]v\d+/gi,
  /\bthe autonomy loop\b/gi,
  /\bauto-stub creator\b/gi,
]

// ----- Hard rule 2: repo paths in prose -----

export const REPO_PATH_PATTERNS = [
  // Bare or backticked paths to data/evidence or data/workbench
  /`data\/(evidence|workbench)\/[^`]+`/g,
  /\bdata\/(evidence|workbench)\/[a-z0-9_-]+\.(csv|jsonl|md|json)\b/g,
  // Backticked source-tree paths
  /`tools\/[^`]+\.(mjs|ts|js|sh|py)`/g,
  /`raw\/[^`]+`/g,
  // Internal policy-doc filenames
  /`(Category[12345]_[A-Za-z0-9_-]+\.md|Cat[12345]_[A-Za-z0-9_-]+\.md|Step[0-9_A-Za-z]+\.md|StepZero[A-Za-z0-9_-]*\.md)`/g,
]

// ----- Helpers shared across audits -----

import fs from "node:fs"

export function readFile(path) {
  return fs.readFileSync(path, "utf8")
}

export function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) return { frontmatter: "", body: text }
  const end = text.indexOf("\n---\n", 4)
  if (end < 0) return { frontmatter: "", body: text }
  return {
    frontmatter: text.slice(4, end),
    body: text.slice(end + 5),
  }
}

export function frontmatterValue(fm, key) {
  const re = new RegExp(`^${key}:\\s*(.+)$`, "m")
  const m = fm.match(re)
  return m ? m[1].trim() : null
}

export function normalizeHeading(s) {
  return s
    .toLowerCase()
    .replace(/[‐-―]/g, "-")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ")
    .replace(/[.,;:!?]+$/g, "")
    .trim()
}

// ----- Per-line scanner that respects marker blocks for tracking only -----
// Returns { isMarker: bool } per line; callers decide whether to skip
// inside marker blocks. The product audit no longer skips them; ingredient
// and metal audits follow the same policy.

export function* scanLines(body) {
  const lines = body.split("\n")
  let inMarker = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/<!--\s*BEGIN:\s*hmi-/.test(line)) inMarker = true
    const wasInMarker = inMarker
    if (/<!--\s*END:\s*hmi-/.test(line)) inMarker = false
    yield { line, index: i, isMarker: wasInMarker }
  }
}

// ----- Hit collector: runs a pattern set against a line -----

export function collectHits(line, patterns, ruleName, severity) {
  const hits = []
  for (const pat of patterns) {
    pat.lastIndex = 0
    let m
    while ((m = pat.exec(line)) !== null) {
      hits.push({
        rule: ruleName,
        severity,
        snippet: m[0],
        context: line.trim().slice(0, 140),
      })
      if (!pat.global) break
    }
  }
  return hits
}
