/**
 * build-open-gaps.mjs
 *
 * Reads gap signals from multiple sources and emits data/gaps/open_gaps.jsonl.
 * Each line is a stable gap record keyed by gap_id = sha256(page+metal+matrix+population).
 *
 * Gap sources:
 *  1. hmtc_standards_gap_report.csv  → why: no_cited_evidence
 *  2. contamination_profile pending cells in wiki frontmatter → why: pending_contamination_profile
 *  3. routing_unresolved.csv entries mapping to ingredient/product pages → why: routing_unresolved
 *  4. TBD sections in wiki body text → why: tbd_section
 *
 * Status transitions (managed externally):
 *  open       → set by this detector
 *  attempted  → set by discovery loop when a candidate is enqueued (HMI-9.5/9.6)
 *  closed     → set when wiki_edit_audit references gap_id (HMI-9.3)
 */

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { createRequire } from "node:module"
import matter from "gray-matter"

// csv-parse is used by sibling scripts; fall back to a minimal inline parser
let parseCsv
try {
  const require = createRequire(import.meta.url)
  parseCsv = require("csv-parse/sync").parse
} catch {
  // minimal fallback: only handles simple CSVs without quoted commas
  parseCsv = (text, opts = {}) => {
    const lines = text.trim().split("\n")
    const headers = lines[0].split(",").map((h) => h.trim())
    return lines.slice(1).map((line) => {
      // handle quoted fields
      const fields = []
      let cur = ""
      let inQ = false
      for (const ch of line) {
        if (ch === '"') { inQ = !inQ; continue }
        if (ch === "," && !inQ) { fields.push(cur); cur = ""; continue }
        cur += ch
      }
      fields.push(cur)
      const obj = {}
      headers.forEach((h, i) => { obj[h] = (fields[i] ?? "").trim() })
      return obj
    })
  }
}

const repoRoot = process.cwd()
const gapsDir = path.join(repoRoot, "data/gaps")
const outputPath = path.join(gapsDir, "open_gaps.jsonl")
const existingPath = outputPath // same path; we merge to preserve status

// ── helpers ──────────────────────────────────────────────────────────────────

function gapId(page, metal, matrix, population) {
  const raw = [page, metal, matrix, population].join("|")
  return crypto.createHash("sha256").update(raw).digest("hex").slice(0, 32)
}

function nowIso() {
  return new Date().toISOString()
}

function loadExisting() {
  const map = new Map()
  if (!fs.existsSync(existingPath)) return map
  const lines = fs.readFileSync(existingPath, "utf8").trim().split("\n")
  for (const line of lines) {
    if (!line.trim()) continue
    try {
      const rec = JSON.parse(line)
      if (rec.gap_id) map.set(rec.gap_id, rec)
    } catch {}
  }
  return map
}

function merge(existing, detected) {
  const id = detected.gap_id
  const prev = existing.get(id)
  if (!prev) return { ...detected, status: "open" }
  // preserve external status transitions (attempted / closed) and audit fields
  return {
    ...detected,
    opened_at: prev.opened_at ?? detected.opened_at,
    last_attempted_at: prev.last_attempted_at ?? null,
    last_attempt_outcome: prev.last_attempt_outcome ?? null,
    status: prev.status ?? "open",
  }
}

// ── source 1: hmtc_standards_gap_report.csv ──────────────────────────────────

// The gap-report CSV carries no hmtc_category column; the authoritative source
// is each product page's own frontmatter. Build slug -> hmtc_category once.
function buildProductCategoryIndex() {
  const dir = path.join(repoRoot, "wiki/products")
  const idx = new Map()
  if (!fs.existsSync(dir)) return idx
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    try {
      const fm = matter(fs.readFileSync(path.join(dir, file), "utf8")).data || {}
      const cat = (fm.hmtc_category ?? "").toString().trim()
      if (cat) idx.set(file.replace(/\.md$/, ""), cat)
    } catch {}
  }
  return idx
}

function gapsFromStandardsReport() {
  const csvPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
  if (!fs.existsSync(csvPath)) return []
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"), { columns: true, skip_empty_lines: true })
  const productCategory = buildProductCategoryIndex()
  const gaps = []
  const now = nowIso()

  for (const row of rows) {
    const status = (row.aggregate_hmtc_percentile_status ?? "").trim()
    // Only rows with no structured evidence loaded count as no_cited_evidence
    if (!status.startsWith("BLOCKED")) continue

    const page = `wiki/products/${row.product_slug}.md`
    const metal = (row.metal_species ?? "").trim()
    const matrix = (row.product_standard_scope ?? "").trim()
    const hmtcCategory = (row.hmtc_category ?? productCategory.get(row.product_slug) ?? "").toString().trim()
    const population = (hmtcCategory ? `category${hmtcCategory}` : "")

    if (!metal) continue

    gaps.push({
      gap_id: gapId(page, metal, matrix, population),
      page,
      metal,
      matrix,
      population,
      hmtc_category: hmtcCategory,
      why: "no_cited_evidence",
      opened_at: now,
      last_attempted_at: null,
      last_attempt_outcome: null,
    })
  }
  return gaps
}

// ── source 2: contamination_profile pending cells ────────────────────────────

function gapsFromContaminationProfiles() {
  const wikiDir = path.join(repoRoot, "wiki")
  const gaps = []
  const now = nowIso()

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) { walk(path.join(dir, entry.name)); continue }
      if (!entry.name.endsWith(".md")) continue
      const fullPath = path.join(dir, entry.name)
      let parsed
      try {
        parsed = matter(fs.readFileSync(fullPath, "utf8"))
      } catch { continue }
      const fm = parsed.data
      if (!fm.contamination_profile || typeof fm.contamination_profile !== "object") continue

      const relPage = path.relative(repoRoot, fullPath)
      const pageType = fm.type ?? ""
      const matrix = fm.category ?? fm.slug ?? entry.name.replace(".md", "")
      const population = fm.vulnerable_population ?? ""
      const hmtcCategory = (fm.hmtc_category ?? "").toString().trim()

      for (const [metal, profile] of Object.entries(fm.contamination_profile)) {
        if (!profile || typeof profile !== "object") continue
        if ((profile.status ?? "").toLowerCase() !== "pending") continue
        gaps.push({
          gap_id: gapId(relPage, metal, matrix, population),
          page: relPage,
          metal,
          matrix,
          population,
          hmtc_category: hmtcCategory,
          why: "pending_contamination_profile",
          opened_at: now,
          last_attempted_at: null,
          last_attempt_outcome: null,
        })
      }
    }
  }

  walk(wikiDir)
  return gaps
}

// ── source 3: routing_unresolved.csv ─────────────────────────────────────────

function gapsFromRoutingUnresolved() {
  const csvPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
  if (!fs.existsSync(csvPath)) return []
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"), { columns: true, skip_empty_lines: true })
  const gaps = []
  const now = nowIso()

  for (const row of rows) {
    const targetKind = (row.target_kind ?? "").trim()
    // Only ingredient and product page targets are actionable gaps
    if (!["ingredient", "product"].includes(targetKind)) continue

    const page = (row.source_page ?? "").trim()
    // Use a generic gap entry: no specific metal/matrix/population known
    gaps.push({
      gap_id: gapId(page, "", targetKind, ""),
      page,
      metal: "",
      matrix: targetKind,
      population: "",
      hmtc_category: "",
      why: "routing_unresolved",
      opened_at: now,
      last_attempted_at: null,
      last_attempt_outcome: null,
    })
  }
  return gaps
}

// ── source 4: TBD sections in wiki body ──────────────────────────────────────

function gapsFromTbdSections() {
  const wikiDir = path.join(repoRoot, "wiki")
  const gaps = []
  const now = nowIso()
  const tbdRe = /\bTBD\b/

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) { walk(path.join(dir, entry.name)); continue }
      if (!entry.name.endsWith(".md")) continue
      const fullPath = path.join(dir, entry.name)
      let parsed
      try {
        parsed = matter(fs.readFileSync(fullPath, "utf8"))
      } catch { continue }
      if (!tbdRe.test(parsed.content)) continue

      const relPage = path.relative(repoRoot, fullPath)
      const fm = parsed.data
      const matrix = fm.category ?? fm.slug ?? entry.name.replace(".md", "")
      const population = fm.vulnerable_population ?? ""

      gaps.push({
        gap_id: gapId(relPage, "", matrix, population),
        page: relPage,
        metal: "",
        matrix,
        population,
        hmtc_category: "",
        why: "tbd_section",
        opened_at: now,
        last_attempted_at: null,
        last_attempt_outcome: null,
      })
    }
  }

  walk(wikiDir)
  return gaps
}

// ── main ──────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(gapsDir)) fs.mkdirSync(gapsDir, { recursive: true })

  const existing = loadExisting()

  const detected = [
    ...gapsFromStandardsReport(),
    ...gapsFromContaminationProfiles(),
    ...gapsFromRoutingUnresolved(),
    ...gapsFromTbdSections(),
  ]

  // Deduplicate by gap_id (last one wins within this run; shouldn't conflict)
  const byId = new Map()
  for (const gap of detected) {
    byId.set(gap.gap_id, gap)
  }

  // Merge with existing to preserve status / audit fields
  const final = []
  for (const gap of byId.values()) {
    final.push(merge(existing, gap))
  }

  // Sort deterministically for stable diffs
  final.sort((a, b) => a.gap_id.localeCompare(b.gap_id))

  fs.writeFileSync(outputPath, final.map((r) => JSON.stringify(r)).join("\n") + "\n")

  // Per-category rollup so "pull papers for product-category N gaps" is a direct
  // lookup, not an implicit join through the population string.
  const rollup = new Map() // `${cat}|${why}|${status}` -> count
  for (const r of final) {
    const cat = (r.hmtc_category ?? "").toString().trim() || "(uncategorized)"
    const key = `${cat}|${r.why}|${r.status}`
    rollup.set(key, (rollup.get(key) ?? 0) + 1)
  }
  const rollupRows = [...rollup.entries()]
    .map(([k, count]) => { const [hmtc_category, why, status] = k.split("|"); return { hmtc_category, why, status, count } })
    .sort((a, b) => (a.hmtc_category.localeCompare(b.hmtc_category) || b.count - a.count))
  const rollupPath = path.join(gapsDir, "open_gaps_by_category.csv")
  fs.writeFileSync(
    rollupPath,
    ["hmtc_category,why,status,count", ...rollupRows.map((r) => `${r.hmtc_category},${r.why},${r.status},${r.count}`)].join("\n") + "\n",
  )

  // Summary
  const byCause = {}
  for (const r of final) { byCause[r.why] = (byCause[r.why] ?? 0) + 1 }
  const byStatus = {}
  for (const r of final) { byStatus[r.status] = (byStatus[r.status] ?? 0) + 1 }
  const withCat = final.filter((r) => (r.hmtc_category ?? "").toString().trim()).length

  console.log(`open_gaps.jsonl: ${final.length} gaps (${withCat} carry an hmtc_category)`)
  for (const [k, v] of Object.entries(byCause)) console.log(`  ${k}: ${v}`)
  console.log("by status:", byStatus)
  console.log(`→ ${outputPath}`)
  console.log(`→ ${rollupPath} (per-category rollup)`)
}

main()
