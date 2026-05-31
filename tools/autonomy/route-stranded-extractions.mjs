#!/usr/bin/env node
/**
 * Matrix-routing recovery for stranded autonomy-extraction rows.
 *
 * The v1 extractor (extract-source-values.mjs) deliberately STRANDS a numeric
 * row (empty row_slug) when the line's matrix does not word-match one of the
 * source's declared `products:` slugs — precise-but-stranded beats mis-assigned.
 * That leaves correct values sitting in the extract with no product to pool on.
 *
 * This pass recovers the cleanly-resolvable subset using the existing
 * `data/evidence/matrix-to-product-map.json` (`_mappings`: matrix slug ->
 * {products, confidence}; `_no_route`: biological/environmental/methodological
 * matrices to skip). For each stranded-with-statistic row it resolves a product
 * from, in priority order:
 *   1. an in-line food-group matrix token (the "Grains and grain-based
 *      products:" lead-in of a TDS bullet), normalised to a map key; else
 *   2. the source page's `matrices:` frontmatter (the source's subject).
 *
 * SAFETY: a row is routed ONLY when resolution is UNAMBIGUOUS — the resolved
 * product set is exactly one slug. Multi-product sources (e.g. hoha2014 with
 * matrices [pork-bacon, pork-ham, pork-sausage]) whose metal-keyed lines carry
 * no in-line cohort marker are left stranded and logged, because fanning one
 * "Cd: 0.05" line out to every pork product would cohort-mix. Those need the
 * extractor to inherit a MATRIX-context header ("Pork bacon:" sets product
 * context) — a separate follow-up, flagged in the report.
 *
 * Output (all generated; never hand-edited):
 *   data/evidence/category1_autonomy_matrix_routed_summary.csv  (pooling engine reads this)
 *   data/evidence/matrix-mapping-unmapped.csv                   (worklist: matrices to add to the map)
 *   data/evidence/autonomy/matrix-routing-report-<date>.md
 *
 * Usage: node tools/autonomy/route-stranded-extractions.mjs [--dry-run]
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const extractPath = path.join(repoRoot, "data/evidence/category1_autonomy_extracted_summary.csv")
const mapPath = path.join(repoRoot, "data/evidence/matrix-to-product-map.json")
const sourcesDir = path.join(repoRoot, "wiki/sources")
const productDir = path.join(repoRoot, "wiki/products")
const outPath = path.join(repoRoot, "data/evidence/category1_autonomy_matrix_routed_summary.csv")
const unmappedPath = path.join(repoRoot, "data/evidence/matrix-mapping-unmapped.csv")
const today = new Date().toISOString().slice(0, 10)
const reportPath = path.join(repoRoot, "data/evidence/autonomy", `matrix-routing-report-${today}.md`)

const dryRun = process.argv.includes("--dry-run")

const OUTPUT_HEADERS = [
  "source_id", "source_page", "row_slug", "metal_species", "product_label", "basis",
  "n", "mean_ppb", "median_ppb", "p50_ppb", "p90_ppb", "p95_ppb", "p100_ppb", "max_ppb", "min_ppb",
  "unit", "statistic_scope", "evidence_fitness_verdict", "review_state", "row_fit",
  "jurisdiction", "extraction_method", "notes", "matrix_routed_from", "route_confidence",
]

function main() {
  const map = JSON.parse(fs.readFileSync(mapPath, "utf8"))
  const mappings = map._mappings || {}
  const noRoute = new Set((map._no_route || []).map((s) => s.toLowerCase()))
  const productSlugs = loadProductSlugs()

  const allRows = parseCsv(fs.readFileSync(extractPath, "utf8"))
  const stranded = allRows.filter(
    (r) => !(r.row_slug || "").trim() && hasStat(r),
  )

  const matricesCache = new Map()
  const routed = []
  const unmappedCounts = new Map() // matrix -> {count, sources:Set}
  let ambiguous = 0
  let noRouteSkipped = 0

  for (const row of stranded) {
    // 1. in-line food-group matrix token
    const inlineMatrix = leadMatrixToken(row.statistic_scope)
    // 2. source frontmatter matrices
    const srcMatrices = sourceMatrices(row.source_id, matricesCache)

    // Resolve in priority order. Each candidate yields a set of product slugs.
    const candidates = []
    if (inlineMatrix) candidates.push(inlineMatrix)
    candidates.push(...srcMatrices)

    let resolved = null // {products:Set, confidence}
    let routedFrom = null
    for (const m of candidates) {
      const key = m.toLowerCase()
      if (noRoute.has(key)) continue
      const entry = mappings[key]
      if (!entry || !Array.isArray(entry.products) || entry.products.length === 0) continue
      const products = entry.products.filter((p) => productSlugs.has(p))
      if (products.length === 0) continue
      // First resolving candidate wins (in-line matrix is most line-specific).
      resolved = { products: new Set(products), confidence: entry.confidence || "unknown" }
      routedFrom = key
      break
    }

    if (!resolved) {
      // nothing mapped — record the unmapped matrices (not _no_route) for the worklist
      for (const m of candidates) {
        const key = m.toLowerCase()
        if (noRoute.has(key)) { noRouteSkipped += 1; continue }
        if (mappings[key]) continue
        if (!unmappedCounts.has(key)) unmappedCounts.set(key, { count: 0, sources: new Set() })
        const u = unmappedCounts.get(key)
        u.count += 1
        u.sources.add(row.source_id)
      }
      continue
    }

    // Unambiguous-resolution rule.
    if (resolved.products.size !== 1) { ambiguous += 1; continue }
    const slug = [...resolved.products][0]

    routed.push({
      ...row,
      row_slug: slug,
      product_label: slug,
      review_state: "autonomy_v1_matrix_routed",
      extraction_method: "autonomy_v1_matrix_routed",
      notes: "Stranded extraction row routed to a product via matrix-to-product-map. Validate before promotion.",
      matrix_routed_from: routedFrom,
      route_confidence: resolved.confidence,
    })
  }

  // ----- write outputs -----
  if (!dryRun) {
    writeCsv(outPath, routed, OUTPUT_HEADERS)
    const unmappedRows = [...unmappedCounts.entries()]
      .sort((a, b) => b[1].count - a[1].count)
      .map(([matrix, u]) => ({
        matrix,
        stranded_rows_blocked: u.count,
        example_sources: [...u.sources].slice(0, 3).join(";"),
      }))
    writeCsv(unmappedPath, unmappedRows, ["matrix", "stranded_rows_blocked", "example_sources"])
  }

  const report = [
    `# Matrix-routing recovery report — ${today}`,
    ``,
    `Generated by \`tools/autonomy/route-stranded-extractions.mjs\` (${dryRun ? "dry-run" : "executed"}).`,
    ``,
    `- Stranded-with-statistic rows examined: ${stranded.length}`,
    `- Routed to a product (unambiguous, single slug): ${routed.length}`,
    `- Left stranded (ambiguous, resolved to >1 product): ${ambiguous}`,
    `- Skipped (matrix is _no_route biological/environmental/method): ${noRouteSkipped}`,
    `- Distinct unmapped matrices blocking recovery: ${unmappedCounts.size}`,
    ``,
    `Routed rows are written to \`${path.relative(repoRoot, outPath)}\` (the pooling engine`,
    `admits it on the next run). Unmapped matrices are the map-expansion worklist in`,
    `\`${path.relative(repoRoot, unmappedPath)}\` — add high-confidence entries to`,
    `\`_mappings\` in matrix-to-product-map.json and re-run.`,
    ``,
    `## Follow-up`,
    ``,
    `Multi-product sources whose metal-keyed lines sit under a MATRIX-context header`,
    `(e.g. "Pork bacon:" then "Cd: 0.05") are left stranded here because the cohort`,
    `marker is in the header, not the line. Teaching the extractor to inherit a`,
    `product/matrix-context header (parallel to the existing metal-context header)`,
    `would recover them without cohort-mixing.`,
    ``,
  ].join("\n")
  if (!dryRun) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true })
    fs.writeFileSync(reportPath, report, "utf8")
  }

  console.log(report.split("\n").slice(0, 11).join("\n"))
}

// ----- helpers -----

const STAT_COLS = ["mean_ppb", "median_ppb", "p50_ppb", "p90_ppb", "p95_ppb", "p100_ppb", "max_ppb", "min_ppb"]
function hasStat(r) {
  return STAT_COLS.some((c) => {
    const v = r[c]
    if (v === undefined || v === "") return false
    return Number.isFinite(Number(v))
  })
}

function leadMatrixToken(scope) {
  // The leading "Food group:" phrase of a bullet, slugified. Returns null when
  // the lead-in is a metal name (those lines carry no matrix).
  const m = String(scope || "").match(/^[-*\s]*\**\s*([A-Za-z][A-Za-z ,/&-]{4,}?)\**\s*:/)
  if (!m) return null
  const phrase = m[1].trim().toLowerCase()
  const METAL_WORDS = /^(cd|pb|cu|ni|cr|al|as|hg|sn|zn|fe|mn|co|tas|ias|thg|mehg|cadmium|lead|nickel|arsenic|mercury|chromium|aluminium|aluminum|tin|copper|zinc|iron|cobalt|manganese)\b/
  if (METAL_WORDS.test(phrase)) return null
  // Slugify: take the head noun group, hyphenate.
  return phrase.replace(/\band\b|\bproducts?\b/g, " ").replace(/[,/&]/g, " ").trim().replace(/\s+/g, "-")
}

function sourceMatrices(sourceId, cache) {
  if (cache.has(sourceId)) return cache.get(sourceId)
  let out = []
  for (const f of fs.readdirSync(sourcesDir)) {
    if (!f.startsWith(sourceId) || !f.endsWith(".md")) continue
    const m = fs.readFileSync(path.join(sourcesDir, f), "utf8").match(/^matrices:\s*(.*)$/m)
    if (m) {
      const v = m[1].trim()
      if (v.startsWith("[")) {
        out = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
      }
    }
    break
  }
  cache.set(sourceId, out)
  return out
}

function loadProductSlugs() {
  const slugs = new Set()
  for (const f of fs.readdirSync(productDir)) {
    if (!f.endsWith(".md") || f === "index.md") continue
    const fm = fs.readFileSync(path.join(productDir, f), "utf8").match(/^---\n([\s\S]*?)\n---/)
    if (!fm) continue
    if (!/^type:\s*product-category\s*$/m.test(fm[1])) continue
    const cat = fm[1].match(/^category:\s*(.*)$/m)
    slugs.add(cat ? cat[1].trim().replace(/^["']|["']$/g, "") : f.replace(/\.md$/, ""))
  }
  return slugs
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line)
    const row = {}
    headers.forEach((h, i) => (row[h] = cells[i] ?? ""))
    return row
  })
}

function parseCsvLine(line) {
  const out = []
  let cur = "", inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++ } else inQ = !inQ
    } else if (c === "," && !inQ) { out.push(cur); cur = "" } else cur += c
  }
  out.push(cur)
  return out
}

function writeCsv(filePath, rows, headers) {
  const lines = [headers.join(",")]
  for (const row of rows) lines.push(headers.map((h) => csvCell(row[h] ?? "")).join(","))
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8")
}

function csvCell(v) {
  const s = String(v ?? "")
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

main()
