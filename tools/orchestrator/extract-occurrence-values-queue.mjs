#!/usr/bin/env node
// Build the upstream evidence extraction queue.
//
// Reads two artifacts:
//   - data/evidence/hmtc_standards_gap_report.csv (gap report: which
//     product_slug × metal_species combinations have zero loaded sources)
//   - data/evidence/product_source_routing_audit.csv (routing audit: which
//     source pages route to which product page, as direct evidence or
//     broad context)
//
// Emits:
//   - data/evidence/extraction_queue.csv (priority-sorted work items, one
//     row per (product_slug, metal_species, source_cite_key) triple)
//
// Each queue item is a focused extraction task: a session opens the named
// source page, reads its tables, applies row-fit / basis / species /
// statistic-type / censoring judgment per CLAUDE.md Part 4 (AI adjudication
// default), and writes a row to the appropriate occurrence-summary CSV
// (e.g., data/evidence/category1_*_summary.csv).
//
// Priority calculation: the number of product pages whose Literature
// Evidence Summary would gain a populated cell when this extraction lands.
// A single source routed to many empty-cell pages ranks higher than one
// routed to a single page.
//
// The queue is the work-item generator. Dispatch happens elsewhere —
// any session (Claude Code, Cowork, Codex) can consume the queue,
// produce structured records, run the relevant generators
// (apply-product-hmtc-evidence-summaries.mjs), commit, and log the
// extraction decision to data/evidence/autonomy/extraction-events.jsonl.
//
// Per CLAUDE.md Part 4 and the no-approval-gates memory: this tool
// produces a work queue, not an approval queue. The session that
// consumes it makes row-fit / basis / species / statistic-type decisions
// itself, writes the records, and appends the audit log. Karen reads
// the audit log when she wants to second-guess.
//
// Usage:
//   node tools/orchestrator/extract-occurrence-values-queue.mjs
//
// Idempotent: re-running overwrites the queue file. Items that have
// been processed since the last run drop off because the gap report
// will show loaded_source_count > 0 for them.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const gapPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const routingPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const queuePath = path.join(repoRoot, "data/evidence/extraction_queue.csv")
const eventsDir = path.join(repoRoot, "data/evidence/autonomy")
fs.mkdirSync(eventsDir, { recursive: true })

// ----- Read CSVs -----

function parseCsv(text) {
  const lines = text.trim().split("\n")
  const header = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    if (cells.length < 2) continue
    const row = {}
    header.forEach((h, j) => { row[h] = cells[j] ?? "" })
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  // Tolerate quoted fields with embedded commas
  const out = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') { cur += '"'; i += 1 }
      else inQuotes = !inQuotes
    } else if (c === "," && !inQuotes) {
      out.push(cur); cur = ""
    } else {
      cur += c
    }
  }
  out.push(cur)
  return out
}

if (!fs.existsSync(gapPath)) {
  console.error(`Missing: ${gapPath}. Run the standards gap report builder first.`)
  process.exit(1)
}
if (!fs.existsSync(routingPath)) {
  console.error(`Missing: ${routingPath}. Run the routing audit first.`)
  process.exit(1)
}

const gapRows = parseCsv(fs.readFileSync(gapPath, "utf8"))
const routingRows = parseCsv(fs.readFileSync(routingPath, "utf8"))

// ----- Find empty cells: gap rows where loaded_source_count = 0 -----

const emptyCells = gapRows.filter((r) => {
  const loaded = Number(r.loaded_source_count || 0)
  return loaded === 0 && r.product_standard_scope === "locked_hmtc_row"
})

console.log(`Empty (loaded_source_count=0) cells in gap report: ${emptyCells.length}`)

// Build a map: product_slug → set of empty metal_species
const emptyCellsBySlug = new Map()
for (const cell of emptyCells) {
  const slug = cell.product_slug
  if (!emptyCellsBySlug.has(slug)) emptyCellsBySlug.set(slug, new Set())
  emptyCellsBySlug.get(slug).add(cell.metal_species)
}

// ----- For each empty cell, find direct-evidence sources from routing -----

// Map (product_slug, metal_species) → array of source_cite_keys with direct evidence
const candidatesByCell = new Map()
for (const row of routingRows) {
  if (row.route_kind !== "direct_evidence") continue
  const slug = row.product_slug
  if (!emptyCellsBySlug.has(slug)) continue
  // The routing audit has two metal columns:
  //   declared_metal_species — what the source page's frontmatter declares
  //     this source covers (load-bearing for routing)
  //   metal_species — which metals have been extracted into structured
  //     evidence (empty when no values extracted yet — exactly the case
  //     for the empty cells we're queuing).
  // Read declared_metal_species since we're looking for cells that have
  // a routed source but no extraction yet.
  const declaredMetals = (row.declared_metal_species || "").split(";").map((s) => s.trim()).filter(Boolean)
  const extractedMetals = (row.metal_species || "").split(";").map((s) => s.trim()).filter(Boolean)
  const sourceMetals = declaredMetals.length > 0 ? declaredMetals : extractedMetals
  for (const metal of sourceMetals) {
    if (!emptyCellsBySlug.get(slug).has(metal)) continue
    const key = `${slug}::${metal}`
    if (!candidatesByCell.has(key)) candidatesByCell.set(key, [])
    candidatesByCell.get(key).push({
      source_id: row.source_id,
      source_page: row.source_page,
      source_title: row.source_title,
      route_basis: row.route_basis,
      route_status: row.route_status,
    })
  }
}

console.log(`(product_slug, metal_species) cells with at least one direct-evidence routed source: ${candidatesByCell.size}`)

// ----- Compute priority -----

// Priority = how many other empty cells the same source could help fill.
// A source routed to many empty cells across pages ranks higher.
const sourcePresenceCount = new Map()  // source_id → count of empty cells it can help fill
for (const [cellKey, sources] of candidatesByCell.entries()) {
  for (const s of sources) {
    sourcePresenceCount.set(s.source_id, (sourcePresenceCount.get(s.source_id) ?? 0) + 1)
  }
}

// ----- Emit queue -----

const queueRows = []
for (const [cellKey, sources] of candidatesByCell.entries()) {
  const [slug, metal] = cellKey.split("::")
  for (const s of sources) {
    queueRows.push({
      product_slug: slug,
      metal_species: metal,
      source_id: s.source_id,
      source_page: s.source_page,
      source_title: s.source_title,
      route_basis: s.route_basis,
      route_status: s.route_status,
      priority: sourcePresenceCount.get(s.source_id) ?? 1,
    })
  }
}

// Sort by priority desc, then by slug+metal for stable ordering
queueRows.sort((a, b) => {
  if (b.priority !== a.priority) return b.priority - a.priority
  if (a.product_slug !== b.product_slug) return a.product_slug.localeCompare(b.product_slug)
  return a.metal_species.localeCompare(b.metal_species)
})

const headers = ["priority", "product_slug", "metal_species", "source_id", "source_page", "source_title", "route_basis", "route_status"]
const csvOut = [headers.join(",")]
for (const r of queueRows) {
  const cells = headers.map((h) => {
    const v = String(r[h] ?? "")
    return v.includes(",") || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v
  })
  csvOut.push(cells.join(","))
}
fs.writeFileSync(queuePath, csvOut.join("\n") + "\n", "utf8")

// ----- Top-of-queue summary -----

console.log(`\nWrote ${queueRows.length} queue items to ${path.relative(repoRoot, queuePath)}.`)
console.log("\nTop 10 priority items:")
console.log("priority | product_slug | metal | source")
console.log("---")
for (const r of queueRows.slice(0, 10)) {
  console.log(`${r.priority} | ${r.product_slug} | ${r.metal_species} | ${r.source_id}`)
}

// ----- Per-product summary -----

const perProduct = new Map()
for (const r of queueRows) {
  if (!perProduct.has(r.product_slug)) perProduct.set(r.product_slug, new Set())
  perProduct.get(r.product_slug).add(`${r.metal_species}:${r.source_id}`)
}
console.log(`\nPer-product extraction workload:`)
console.log(`  product_slug | empty (metal, source) cells to extract`)
console.log("---")
const sortedProducts = [...perProduct.entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 16)
for (const [slug, set] of sortedProducts) {
  console.log(`  ${slug} | ${set.size}`)
}

console.log(`\nNext: a session consumes queue items, reads each source's full markdown,`)
console.log(`applies row-fit / basis / species / statistic-type judgment, writes a structured`)
console.log(`row to the appropriate category*_*_summary.csv, runs the generators, commits,`)
console.log(`and appends to data/evidence/autonomy/extraction-events.jsonl.`)
