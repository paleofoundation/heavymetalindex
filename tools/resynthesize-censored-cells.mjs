#!/usr/bin/env node
/**
 * Deterministic editor for the censored-zero / degenerate-upper-tail
 * contamination-profile resynthesis backlog (CLAUDE.md Part 9 synthesis workflow,
 * Part 18 integrity lint). Drains the artifact flagged by
 * tools/audit-contamination-profile-integrity.mjs.
 *
 * This tool does the MECHANICAL edits only — the synthesized VALUES are supplied
 * by the operator per cell, grounded in the contributing sources. For each cell
 * spec it:
 *   1. rewrites the frontmatter contamination_profile metal sub-block
 *      (typical_ppb, p95_ppb, confidence, n_studies, last_reviewed),
 *   2. rewrites the matching row in the body "contamination profile" table
 *      (the row whose Key-sources column contains "[[sources/"), updating the
 *      Coverage, Typical (ppb) and Confidence columns and preserving Key sources,
 *   3. appends a review_events.jsonl full_resynthesis entry with previous/current.
 *
 * Usage: node tools/resynthesize-censored-cells.mjs specs.json
 *   specs.json: [{slug, metal, typical_lo, typical_hi, p95, confidence,
 *                 n_studies, coverage_display, typical_display, basis, trigger,
 *                 note}]
 *   (p95 may be a number or null; typical_lo/hi may be null for a data-gap revert)
 */
import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const TODAY = new Date().toISOString().slice(0, 10)
const NOW = new Date().toISOString()
const specsPath = process.argv[2]
if (!specsPath) { console.error("usage: resynthesize-censored-cells.mjs specs.json"); process.exit(2) }
const DRY = process.argv.includes("--dry-run")
const specs = JSON.parse(fs.readFileSync(specsPath, "utf8"))
const reviewEventsPath = path.join(REPO, "data/evidence/review_events.jsonl")
const editAuditPath = path.join(REPO, "data/evidence/wiki_edit_audit.jsonl")
const perPage = new Map() // slug -> [metal,...]

const fmtNum = (v) => (v === null || v === undefined) ? "null" : (Number.isInteger(v) ? String(v) : String(v))
const events = []
let filesTouched = new Set()

for (const s of specs) {
  const file = path.join(REPO, `wiki/ingredients/${s.slug}.md`)
  let raw = fs.readFileSync(file, "utf8")
  const before = raw

  // ---- capture previous values from frontmatter for the review event ----
  const prev = readMetalBlock(raw, s.metal)

  // ---- 1. frontmatter metal sub-block rewrite ----
  raw = rewriteFrontmatterBlock(raw, s)

  // ---- 2. body table row rewrite (profile table only: has [[sources/) ----
  raw = rewriteTableRow(raw, s)

  if (raw === before) {
    console.error(`WARN ${s.slug} x ${s.metal}: no change applied (block/row not found?)`)
  }
  if (!DRY) fs.writeFileSync(file, raw)
  filesTouched.add(`wiki/ingredients/${s.slug}.md`)

  const typ = (s.typical_lo === null && s.typical_hi === null) ? [null, null] : [s.typical_lo, s.typical_hi]
  events.push(JSON.stringify({
    ts: NOW,
    op: "synthesis_full_resynthesis",
    mode: "full_resynthesis",
    page: `wiki/ingredients/${s.slug}.md`,
    slug: s.slug,
    metal: s.metal,
    trigger: s.trigger || "integrity-audit-2026-08-09-censored-zero-degenerate-p95",
    basis: s.basis || null,
    previous: prev,
    current: { typical_ppb: typ, p95_ppb: s.p95 ?? null, confidence: s.confidence, n_studies: s.n_studies },
    note: s.note,
  }))
  if (!perPage.has(s.slug)) perPage.set(s.slug, [])
  perPage.get(s.slug).push(s.metal)
  console.log(`  ${s.slug} x ${s.metal}: [${prev.typical_ppb}] p95=${prev.p95_ppb} -> [${typ}] p95=${s.p95 ?? "null"} (n=${s.n_studies}, ${s.confidence})`)
}

// wiki_edit_audit rows (one per page) — required by the pre-commit write barrier.
const auditRows = []
for (const [slug, metals] of perPage) {
  auditRows.push(JSON.stringify({
    edit_id: `censored-zero-resynthesis-2026-08-09-${slug}`,
    page: `wiki/ingredients/${slug}.md`,
    span_id: `Resynthesized contamination_profile cells [${metals.join(", ")}] out of the censored-zero / degenerate-upper-tail integrity artifact (typical [0,0] p95 0 from below-LOQ non-detects pooled as literal zeros). Below-LOQ values left-censored at the reporting limit; each published value traced to named sources; added a Synthesis-basis-and-censoring-treatment section. Part 2 direction: toward the literature.`,
    source_document: "tools/audit-contamination-profile-integrity.mjs backlog; per-cell sources in data/evidence/review_events.jsonl (op synthesis_full_resynthesis, 2026-08-09) and each page's Synthesis-basis section.",
    retrieval_date: "2026-08-09",
    models_used: ["anthropic/claude-opus-4-8"],
    model_agreement_state: "single_model",
    applied_at: NOW,
    commit_sha: "pending",
  }))
}

if (!DRY) fs.appendFileSync(reviewEventsPath, events.join("\n") + "\n")
if (!DRY) fs.appendFileSync(editAuditPath, auditRows.join("\n") + "\n")
console.log(`\n${specs.length} cell(s) resynthesized across ${filesTouched.size} page(s)${DRY ? " [DRY RUN]" : ""}.`)

// --------------------------------------------------------------------------

function readMetalBlock(raw, metal) {
  const re = new RegExp(`^  ${metal}:\\s*$([\\s\\S]*?)(?=^  [A-Za-z]|^[A-Za-z])`, "m")
  const m = raw.match(re)
  const out = { typical_ppb: null, p95_ppb: null, confidence: null, n_studies: null }
  if (!m) return out
  const body = m[1]
  const t = body.match(/typical_ppb:\s*\[\s*([^,]+),\s*([^\]]+)\s*\]/)
  if (t) out.typical_ppb = [num(t[1]), num(t[2])]
  const p = body.match(/p95_ppb:\s*(.+)/); if (p) out.p95_ppb = num(p[1])
  const c = body.match(/confidence:\s*(.+)/); if (c) out.confidence = c[1].trim()
  const n = body.match(/n_studies:\s*(.+)/); if (n) out.n_studies = num(n[1])
  return out
}

function num(s) {
  const t = String(s).trim()
  if (t === "null" || t === "~" || t === "") return null
  const n = Number(t); return Number.isFinite(n) ? n : null
}

function rewriteFrontmatterBlock(raw, s) {
  const lines = raw.split("\n")
  let inCp = false, cur = null
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/^contamination_profile:\s*$/.test(line)) { inCp = true; continue }
    if (!inCp) continue
    if (line.trim() !== "" && !line.startsWith(" ")) break
    const mm = line.match(/^  ([A-Za-z][A-Za-z0-9-]*):\s*$/)
    if (mm) { cur = mm[1]; continue }
    if (cur !== s.metal) continue
    if (/^    typical_ppb:/.test(line)) {
      const lo = fmtNum(s.typical_lo), hi = fmtNum(s.typical_hi)
      lines[i] = `    typical_ppb: [${lo}, ${hi}]`
    } else if (/^    p95_ppb:/.test(line)) {
      lines[i] = `    p95_ppb: ${fmtNum(s.p95 ?? null)}`
    } else if (/^    confidence:/.test(line)) {
      lines[i] = `    confidence: ${s.confidence}`
    } else if (/^    n_studies:/.test(line)) {
      lines[i] = `    n_studies: ${s.n_studies}`
    } else if (/^    last_reviewed:/.test(line)) {
      lines[i] = `    last_reviewed: ${TODAY}`
    } else if (/^    status:/.test(line) && (s.typical_lo === null && s.typical_hi === null)) {
      lines[i] = `    status: pending`
    }
  }
  return lines.join("\n")
}

function rewriteTableRow(raw, s) {
  const lines = raw.split("\n")
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // profile-table row: | Metal | coverage | typical | confidence | [[sources/...]] |
    const m = line.match(/^\|\s*([A-Za-z][A-Za-z0-9-]*)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|(.*)\|\s*$/)
    if (!m) continue
    if (m[1].trim() !== s.metal) continue
    if (!/\[\[sources\//.test(m[5])) continue // only the profile table (has key sources)
    const cov = s.coverage_display
    const typ = s.typical_display
    const conf = (s.typical_lo === null && s.typical_hi === null) ? "—" : s.confidence
    let keyCol = m[5]
    if (Array.isArray(s.key_sources) && s.key_sources.length) {
      keyCol = " " + s.key_sources.map((k, j) => `[[sources/${k}\\|${j + 1}]]`).join(", ") + " "
    }
    lines[i] = `| ${s.metal} | ${cov} | ${typ} | ${conf} |${keyCol}|`
  }
  return lines.join("\n")
}
