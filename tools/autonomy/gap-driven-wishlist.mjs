#!/usr/bin/env node
/**
 * Gap-driven wishlist generator.
 *
 * Reads the pooling engine's output and the gap report. For each (product,
 * metal) cell where the pool is too thin (BLOCKED: pool too thin, BLOCKED:
 * no usable evidence, or PROVISIONAL with sensitivity unstable), emits a
 * targeted OpenAlex search query for new evidence.
 *
 * Output goes to:
 *   - data/evidence/autonomy/gap-driven-wishlist.csv
 *
 * The existing `npm run wishlist:fetch` pipeline consumes a wishlist file,
 * queries OpenAlex, and downloads OA PDFs to `raw/manual-fetch/auto-fetched/`.
 * This generator extends that pipeline with thin-cell-targeted queries so
 * the corpus-acquisition loop closes automatically.
 *
 * Per OPERATING.md Part 3: the model decides what's worth fetching; Karen
 * does not have to approve each query. The audit log
 * (data/evidence/wishlist-fetch-audit.csv) is for retrospective review only.
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const pooledPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const outputPath = path.join(repoRoot, "data/evidence/autonomy/gap-driven-wishlist.csv")
const reportPath = path.join(repoRoot, `data/evidence/autonomy/gap-driven-wishlist-${new Date().toISOString().slice(0, 10)}.md`)

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

// Map (product_slug, metal) → suggested OpenAlex search terms.
const PRODUCT_KEYWORDS = {
  "infant-formula-powder-non-soy": ["infant formula", "cow milk formula", "powdered infant formula"],
  "infant-formula-powder-soy-based": ["soy infant formula", "soy-based formula"],
  "infant-formula-rtf-liquid-non-soy": ["ready-to-feed infant formula", "ready to drink formula"],
  "infant-formula-rtf-liquid-soy-based": ["ready-to-feed soy formula"],
  "baby-cereals-dry-rice-based": ["infant rice cereal", "rice cereal infant"],
  "baby-cereals-dry-non-rice": ["infant cereal", "oat cereal infant", "wheat cereal baby"],
  "fruit-purees": ["fruit puree baby", "fruit baby food"],
  "non-root-vegetable-purees": ["vegetable baby food", "vegetable puree infant"],
  "root-vegetable-purees": ["carrot baby food", "sweet potato puree", "root vegetable infant"],
  "meat-and-poultry-purees": ["meat baby food", "poultry baby food", "chicken puree infant"],
  "fish-containing-baby-foods": ["fish baby food", "salmon baby food", "tuna infant food"],
  "mixed-meals-rice-containing": ["mixed meal baby food rice", "infant mixed meal"],
  "mixed-meals-non-rice": ["mixed meal baby food", "infant mixed meal pasta"],
  "teething-and-snacks-rice-based": ["rice teething biscuit", "rice puff snack infant"],
  "teething-and-snacks-non-rice": ["teething biscuit", "infant snack puff"],
}

const METAL_KEYWORDS = {
  Pb: ["lead", "Pb"],
  Cd: ["cadmium", "Cd"],
  iAs: ["inorganic arsenic", "speciated arsenic"],
  tAs: ["total arsenic", "arsenic"],
  MeHg: ["methylmercury", "methyl mercury"],
  tHg: ["total mercury", "mercury"],
  Ni: ["nickel"],
  Al: ["aluminum", "aluminium"],
  "Cr-VI": ["hexavalent chromium", "Cr(VI)", "chromium(VI)"],
  Sn: ["tin"],
  U: ["uranium"],
}

main()

function main() {
  if (!fs.existsSync(pooledPath)) {
    console.error(`No pooled distributions CSV at ${pooledPath} — run npm run evidence:pooling first.`)
    process.exit(1)
  }

  const pooled = parseCsv(fs.readFileSync(pooledPath, "utf8"))
  const wishlistRows = []

  for (const row of pooled) {
    const verdict = row.verdict || ""
    const isThin =
      verdict.startsWith("BLOCKED: pool too thin") ||
      verdict.startsWith("BLOCKED: no usable") ||
      verdict.startsWith("BLOCKED: sensitivity unstable") ||
      verdict.startsWith("PROVISIONAL")
    if (!isThin) continue

    const productSlug = row.product_slug
    const metal = row.metal_species
    const productKeywords = PRODUCT_KEYWORDS[productSlug] || [productSlug.replace(/-/g, " ")]
    const metalKeywords = METAL_KEYWORDS[metal] || [metal]
    // Cross-product the keywords; emit one row per (product keyword, metal keyword)
    for (const pk of productKeywords) {
      for (const mk of metalKeywords) {
        wishlistRows.push({
          gap_priority: priorityForVerdict(verdict),
          product_slug: productSlug,
          metal_species: metal,
          search_query: `${pk} ${mk} occurrence`,
          openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
          rationale: `${verdict}; current pool n=${row.sources_contributing || 0} sources, sensitivity ${row.sens_band || "unknown"}`,
          source_target: "openalex",
        })
      }
    }
  }

  // Dedupe identical queries
  const seen = new Set()
  const unique = []
  for (const r of wishlistRows) {
    const key = `${r.product_slug}::${r.metal_species}::${r.search_query}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(r)
  }
  // Sort by priority desc
  unique.sort((a, b) => priorityRank(b.gap_priority) - priorityRank(a.gap_priority))

  const headers = ["gap_priority", "product_slug", "metal_species", "search_query", "openalex_filter", "rationale", "source_target"]
  const lines = [headers.join(",")]
  for (const row of unique) lines.push(headers.map((h) => csvCell(row[h])).join(","))
  fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8")

  const cellsByVerdict = countBy(pooled.filter((r) => /^(BLOCKED|PROVISIONAL)/.test(r.verdict)), (r) => r.verdict.split(":")[0])
  const report = [
    `# Gap-driven wishlist — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `## Summary`,
    ``,
    `- Cells flagged as thin: ${unique.length === 0 ? 0 : unique.length / 4}`,
    `- Total OpenAlex queries emitted: ${unique.length}`,
    `- By verdict:`,
    ...Object.entries(cellsByVerdict).map(([k, v]) => `  - ${k}: ${v} cells`),
    ``,
    `## Top 20 priority queries`,
    ``,
    "| Priority | Product × Metal | Query |",
    "|---|---|---|",
    ...unique.slice(0, 20).map((r) => `| ${r.gap_priority} | ${r.product_slug} × ${r.metal_species} | ${r.search_query} |`),
    ``,
    `## How this feeds the corpus`,
    ``,
    `Run \`npm run wishlist:fetch\` to consume this file. The existing wishlist pipeline:`,
    `1. Reads queries from this CSV`,
    `2. Hits OpenAlex with each query + the OA-only filter`,
    `3. Downloads matching OA PDFs to \`raw/manual-fetch/auto-fetched/\``,
    `4. Logs decisions to \`data/evidence/wishlist-fetch-audit.csv\``,
    ``,
    `Downloaded PDFs are then picked up by the next routine ingest cycle (the agent's batch-ingest pipeline). The loop closes: thin cells trigger fetches, fetches feed ingest, ingest expands the pool, pool refresh refreshes briefings.`,
  ].join("\n")
  fs.writeFileSync(reportPath, report, "utf8")

  console.log(`\nWrote ${unique.length} OpenAlex queries to ${path.relative(repoRoot, outputPath)}`)
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
}

function priorityForVerdict(verdict) {
  if (verdict.startsWith("BLOCKED: no usable")) return "P1"
  if (verdict.startsWith("BLOCKED: pool too thin")) return "P2"
  if (verdict.startsWith("BLOCKED: sensitivity")) return "P3"
  if (verdict.startsWith("PROVISIONAL")) return "P3"
  return "P4"
}

function priorityRank(p) {
  return { P1: 4, P2: 3, P3: 2, P4: 1 }[p] || 0
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  return lines.slice(1).map((l) => {
    const cells = parseCsvLine(l)
    const r = {}
    for (let i = 0; i < headers.length; i++) r[headers[i]] = cells[i] ?? ""
    return r
  })
}

function parseCsvLine(line) {
  const out = []
  let cur = "", inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++ }
      else inQ = !inQ
    } else if (c === "," && !inQ) { out.push(cur); cur = "" }
    else cur += c
  }
  out.push(cur)
  return out
}

function csvCell(v) {
  const s = String(v ?? "")
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function countBy(arr, fn) {
  const c = {}
  for (const x of arr) {
    const k = fn(x) || "(empty)"
    c[k] = (c[k] || 0) + 1
  }
  return c
}
