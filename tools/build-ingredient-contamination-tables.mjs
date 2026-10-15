#!/usr/bin/env node
/**
 * Ingredient body contamination-table regenerator.
 *
 * The "## Heavy metal contamination profile" table on each ingredient page is
 * declared to be "derived from the machine-readable contamination_profile in
 * the frontmatter," but no tool kept it in sync: sweep-ingredient-coverage.mjs
 * only INSERTS a table when one is missing, it never REPLACES an existing one.
 * So the body tables drifted from the frontmatter the app actually consumes —
 * most visibly when the synthesis writer changed a frontmatter value (or
 * retracted it) without the body following. This tool closes that gap: it
 * regenerates the table from the current frontmatter on every run.
 *
 * It is surgical and loss-free:
 *   - Only the markdown TABLE block under the heading is replaced; the heading,
 *     the intro paragraph, and any per-metal prose sections are left untouched.
 *   - The "Key sources" wikilinks are CARRIED FORWARD per metal from the
 *     existing table, so source attributions are never stripped. (sweep blanked
 *     them; regenerating with sweep would have lost them on 235 pages.) A cell
 *     with no value — pending / data gap — shows no sources.
 *
 * Output: regenerated 5-column table (Analyte | Coverage | Typical | Confidence |
 * Key sources). The per-page tail percentile (p95) is staff-side per the
 * percentile-arithmetic firewall (CLAUDE.md Part 19; docs/schema-history.md
 * 2026-05-16) and MUST NOT surface on the public page; the p95_ppb frontmatter
 * field remains for app/workbench consumers. Legacy 6-column tables (a regression
 * this generator previously introduced) are normalised back to 5 columns.
 *
 * Usage:
 *   node tools/build-ingredient-contamination-tables.mjs            # report only
 *   node tools/build-ingredient-contamination-tables.mjs --apply    # write
 *   node tools/build-ingredient-contamination-tables.mjs --check    # fail if stale
 */

import fs from "node:fs"
import path from "node:path"
import { randomUUID } from "node:crypto"
import matter from "gray-matter"
import { pathToFileURL } from "node:url"
import { evidenceSources, renderNonDetect } from "./evidence/lib/ingredient-profile-evidence.mjs"
import { metalLabel, metalSymbol } from "./lib/metal-names.mjs"

const INGREDIENTS_DIR = path.join(process.cwd(), "wiki/ingredients")
const AUDIT_LOG = path.join(process.cwd(), "data/evidence/wiki_edit_audit.jsonl")
const METALS = ["Pb", "Cd", "iAs", "tAs", "tHg", "Ni", "Al", "Cr", "Sn", "U"]
const HEADING = "Heavy metal contamination profile"
const APPLY = process.argv.includes("--apply")
const CHECK = process.argv.includes("--check")
const ONLY = process.argv.find((arg) => arg.startsWith("--only="))?.slice(7).split(",")

const HEADER = "| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |"
const SEP = "|---------|----------|---------------|------------|-------------|"

let scanned = 0
let changed = 0
const changedFiles = []

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
for (const file of fs.readdirSync(INGREDIENTS_DIR).filter((f) => f.endsWith(".md") && (!ONLY || ONLY.includes(f.replace(/\.md$/, "")))).sort()) {
  const filePath = path.join(INGREDIENTS_DIR, file)
  const content = fs.readFileSync(filePath, "utf8")
  const fm = content.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fm || !/^contamination_profile:/m.test(fm[1])) continue
  scanned += 1

  const next = regenerate(content)
  if (next !== content) {
    changed += 1
    changedFiles.push(file)
    if (APPLY) fs.writeFileSync(filePath, next, "utf8")
  }
}

// Provenance: every automated wiki edit leaves an audit row (enforced by the
// pre-commit barrier). The table is a deterministic view of the page's own
// frontmatter, so the source is the page itself and no model is involved.
if (APPLY && changedFiles.length > 0) {
  const ts = new Date().toISOString()
  const today = ts.slice(0, 10)
  const rows = changedFiles.map((file) => ({
    edit_id: randomUUID(),
    page: `wiki/ingredients/${file}`,
    span_id: "contamination-profile-table",
    source_document: `frontmatter contamination_profile | wiki/ingredients/${file}`,
    retrieval_date: today,
    models_used: ["deterministic/contamination-table-generator"],
    model_agreement_state: "not_applicable",
    applied_at: ts,
    commit_sha: "pending",
  }))
  fs.appendFileSync(AUDIT_LOG, rows.map((r) => JSON.stringify(r)).join("\n") + "\n", "utf8")
}

if (CHECK && changed > 0) {
  console.error(`Body contamination tables stale on ${changed} pages. Run \`node tools/build-ingredient-contamination-tables.mjs --apply\`.`)
  process.exit(1)
}
console.log(
  `Ingredient contamination tables: ${scanned} scanned, ${changed} ${APPLY ? "regenerated" : "would change"}${CHECK ? " (check)" : ""}.`,
)
if (!APPLY && !CHECK && changed > 0) {
  console.log("Sample:", changedFiles.slice(0, 8).join(", "))
}
}

// ---------------------------------------------------------------------------

export function regenerate(content) {
  const headingRe = new RegExp(`^#{1,6}\\s+${escapeRegex(HEADING)}\\b.*$`, "m")
  const hm = content.match(headingRe)
  if (!hm) return content // no contamination-profile section on this page

  const cp = extractContaminationProfile(content)
  const afterHeading = hm.index + hm[0].length

  // Locate the first markdown table block after the heading.
  const tail = content.slice(afterHeading)
  // A missing profile table must not make us overwrite a Sources or measured
  // occurrence table in the next section (new source-bearing stubs hit this).
  const nextHeading = tail.search(/\n#{1,6}\s/)
  const region = nextHeading < 0 ? tail : tail.slice(0, nextHeading)
  const tableMatch = region.match(/\n(\|[^\n]*\|\n\|[\s|:-]+\|\n(?:\|[^\n]*\|\n?)*)/)

  const existingSources = tableMatch ? extractKeySources(tableMatch[1]) : {}
  const table = buildTable(cp, existingSources)

  if (tableMatch) {
    const tableStart = afterHeading + tableMatch.index + 1 // +1 to skip the leading \n captured group offset
    const tableEnd = tableStart + tableMatch[1].length
    return content.slice(0, tableStart) + table + "\n" + content.slice(tableEnd)
  }
  // No table present — insert immediately after the heading's following blank line.
  return content.slice(0, afterHeading) + "\n\n" + table + "\n" + content.slice(afterHeading)
}

function buildTable(cp, existingSources) {
  const lines = [HEADER, SEP]
  for (const metal of METALS) {
    const c = cp[metal] || {}
    const coverage = renderCoverage(c)
    const typical = c.value_kind === "source_non_detect" ? renderNonDetect(c)
      : c.value_kind === "unquantified" ? "Not quantified"
      : c.value_kind === "source_summary" ? `${renderTypical(c.typical_ppb)} (source LB)` : renderTypical(c.typical_ppb)
    const confidence = renderScalar(c.confidence)
    const hasValue = typical !== "—"
    // New or adjudicated profiles derive numbers and citations from the same
    // record. Never carry a legacy FDA citation onto a WHO replacement value.
    const ids = evidenceSources(c)
    const sources = c.evidence ? (ids.map((id, index) => `[[sources/${id}\\|${index + 1}]]`).join(", ") || "—")
      : hasValue ? existingSources[metal] || "—" : "—"
    lines.push(`| ${metalLabel(metal)} | ${coverage} | ${typical} | ${confidence} | ${sources} |`)
  }
  return lines.join("\n")
}

// Parse the frontmatter contamination_profile with a real YAML parser. This
// MUST handle both block style (Pb:\n    status: ...) and flow style
// (Pb: { status: ..., typical_ppb: [10, 130] }) — the hand-rolled regex this
// replaced only matched block style, so every flow-style page silently rendered
// an all-dashes table while its frontmatter was fully populated (the bug that
// made e.g. black-pepper read as "100% gap" on the site).
function extractContaminationProfile(content) {
  let data
  try {
    data = matter(content).data || {}
  } catch {
    return {}
  }
  const cp = data.contamination_profile
  if (!cp || typeof cp !== "object") return {}
  const out = {}
  for (const metal of METALS) {
    const c = cp[metal]
    if (!c || typeof c !== "object") continue
    out[metal] = {
      ...c,
      status: c.status ?? null,
      typical_ppb: c.typical_ppb ?? null,
      p95_ppb: c.p95_ppb ?? null,
      confidence: c.confidence ?? null,
      n_studies: c.n_studies ?? null,
    }
  }
  return out
}

function extractKeySources(tableText) {
  // Map metal -> the last cell (Key sources) of its row in the existing table.
  const out = {}
  for (const line of tableText.split("\n")) {
    if (!line.trim().startsWith("|")) continue
    // Split on UNESCAPED pipes only — wikilink aliases use "\|" inside a cell
    // ("[[sources/x\|1]]"), which a naive split on "|" would shred.
    const cells = line.split(/(?<!\\)\|/).slice(1, -1).map((c) => c.trim())
    if (cells.length < 2) continue
    const metal = metalSymbol(cells[0])
    if (!METALS.includes(metal)) continue
    out[metal] = cells[cells.length - 1] || "—"
  }
  return out
}

function renderCoverage(c) {
  if (c.value_kind === "source_non_detect") return `n=${evidenceSources(c).length} dataset; composites=${(c.evidence || []).filter((e) => e.role === "value").reduce((n, e) => n + (Number(e.n) || 0), 0)}`
  if (c.value_kind === "unquantified") return "Source context"
  if (!c.status) return "—"
  if (c.status === "pending") return "pending"
  if (c.status === "in_progress") return `n=${c.n_studies} (in progress)`
  if (c.status === "populated") return Number(c.n_studies) === 0 ? "data gap" : `n=${c.n_studies}`
  return "—"
}

// typical_ppb arrives as a parsed YAML value: an array [a, b], possibly with
// null endpoints, or null. (Legacy string forms are tolerated for safety.)
function renderTypical(raw) {
  if (raw === null || raw === undefined) return "—"
  let a, b
  if (Array.isArray(raw)) {
    ;[a, b] = raw
  } else {
    const m = String(raw).match(/^\[\s*([^,]+),\s*([^\]]+)\]$/)
    if (!m) return String(raw)
    a = normNum(m[1])
    b = normNum(m[2])
  }
  const aNull = a === null || a === undefined
  const bNull = b === null || b === undefined
  if (aNull && bNull) return "—"
  if (aNull) return `up to ${b}`
  if (bNull) return `${a}`
  if (a === b) return `${a}`
  return `${a}–${b}`
}

function normNum(s) {
  const t = String(s).trim()
  if (t === "null" || t === "") return null
  const n = Number(t)
  return Number.isNaN(n) ? t : n
}

function renderScalar(v) {
  if (v === null || v === undefined || v === "null" || v === "") return "—"
  return v
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
