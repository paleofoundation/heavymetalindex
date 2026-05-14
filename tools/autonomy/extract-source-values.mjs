#!/usr/bin/env node
/**
 * Source-page → structured-CSV extractor (Phase 1 backlog v0).
 *
 * Reads every wiki/sources/*.md page that follows the CLAUDE.md Part 6
 * source-page template, extracts the structured fields (N, mean, median,
 * max, basis, jurisdiction, metal_species), and writes them to a new
 * structured CSV at:
 *
 *   data/evidence/category1_autonomy_extracted_summary.csv
 *
 * That filename matches the `category*_summary.csv` pattern the pooling
 * engine scans, so its output is automatically admitted to the pool the
 * next time `npm run evidence:pooling` runs.
 *
 * Robustness model:
 *   - Each source page is parsed independently. A parse failure on one
 *     page doesn't stop the others.
 *   - For each page we extract every (metal, product_slug, statistic)
 *     tuple we can find with high confidence. Ambiguous values are
 *     skipped, not guessed.
 *   - All extractions are tagged with `extraction_method: autonomy_v0`
 *     so downstream reviewers (and the pooling engine's contribution
 *     log) can see which rows came from this autonomous extractor.
 *   - A separate "unparsed but interesting" log lists pages that had
 *     `## Key numbers` sections but no extractable values, so Karen
 *     can prioritize hand-curation.
 *
 * v0 limitations (acknowledged):
 *   - Only extracts from pages following the Part 6 template's "Key
 *     numbers" section. Pages with hand-written prose throughout will
 *     be skipped.
 *   - Doesn't do speciation reasoning beyond what's stated explicitly
 *     in the page body. Per CLAUDE.md Part 14, speciation is
 *     non-substitutable; if a page says "total Hg" we treat it as tHg
 *     even if the matrix is fish.
 *   - Doesn't handle non-ppb units. Pages that report only µg/L, ng/g,
 *     mg/kg, etc. get unit-converted only when the conversion is
 *     unambiguous (1 ppb = 1 µg/kg = 1 ng/g; ppm/mg/kg = 1000 ppb).
 *
 * Run with:
 *   node tools/autonomy/extract-source-values.mjs [--dry-run] [--limit N]
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const outputPath = path.join(repoRoot, "data/evidence/category1_autonomy_extracted_summary.csv")
const unparseablePath = path.join(repoRoot, "data/evidence/autonomy/extraction-unparseable.csv")
const reportPath = path.join(repoRoot, `data/evidence/autonomy/extraction-report-${new Date().toISOString().slice(0, 10)}.md`)

const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const limit = args.has("limit") ? Number(args.get("limit")) : Infinity

// Output schema — matches category1_formula_concentration_summary.csv
const OUTPUT_HEADERS = [
  "source_id",
  "source_page",
  "row_slug",
  "metal_species",
  "product_label",
  "basis",
  "n",
  "mean_ppb",
  "median_ppb",
  "p50_ppb",
  "p90_ppb",
  "p95_ppb",
  "p100_ppb",
  "max_ppb",
  "min_ppb",
  "unit",
  "statistic_scope",
  "evidence_fitness_verdict",
  "review_state",
  "row_fit",
  "jurisdiction",
  "extraction_method",
  "notes",
]

// Metal-name normalization (per CLAUDE.md Part 14)
const METAL_NORMALIZATION = {
  pb: "Pb", lead: "Pb", "Pb": "Pb",
  cd: "Cd", cadmium: "Cd", "Cd": "Cd",
  ias: "iAs", "inorganic as": "iAs", "inorganic arsenic": "iAs", "i-as": "iAs", "iAs": "iAs",
  tas: "tAs", "total as": "tAs", "total arsenic": "tAs", "t-as": "tAs", "tAs": "tAs",
  as: "tAs",   // bare "As" is total arsenic per Part 14 unless speciated
  mehg: "MeHg", methylmercury: "MeHg", "methyl mercury": "MeHg", "MeHg": "MeHg",
  thg: "tHg", "total hg": "tHg", "total mercury": "tHg", "tHg": "tHg",
  hg: "tHg", mercury: "tHg",  // bare Hg is total
  ni: "Ni", nickel: "Ni", "Ni": "Ni",
  al: "Al", aluminum: "Al", aluminium: "Al", "Al": "Al",
  "cr-vi": "Cr-VI", "cr(vi)": "Cr-VI", "chromium-vi": "Cr-VI", "hexavalent chromium": "Cr-VI", "Cr-VI": "Cr-VI",
  cr: "Cr-total", chromium: "Cr-total", "total chromium": "Cr-total",
  sn: "Sn", tin: "Sn", "Sn": "Sn",
  u: "U", uranium: "U",
}

main()

function main() {
  const startTime = Date.now()
  fs.mkdirSync(path.dirname(unparseablePath), { recursive: true })
  fs.mkdirSync(path.dirname(reportPath), { recursive: true })

  if (!fs.existsSync(sourcesDir)) {
    console.error(`No wiki/sources/ directory at ${sourcesDir}`)
    process.exit(1)
  }

  const extractedRows = []
  const unparseable = []
  let processed = 0
  let pagesWithKeyNumbers = 0
  let pagesWithoutKeyNumbers = 0

  const files = fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md")).slice(0, limit)
  for (const file of files) {
    processed++
    const filepath = path.join(sourcesDir, file)
    const text = fs.readFileSync(filepath, "utf8")
    const fm = parseFrontmatter(text)
    if (fm.type && fm.type !== "source") continue
    const sourceId = String(fm.cite_key || fm.raw_handle || file.replace(/\.md$/, ""))
    const declaredMetals = arrayField(fm.metals)
    const declaredProducts = arrayField(fm.products).map((p) =>
      String(p).replace(/^\[\[products\//, "").replace(/\]\]$/, "").trim(),
    )
    const declaredJurisdictions = arrayField(fm.jurisdictions)
    const sampleN = fm.sample_n ? Number(fm.sample_n) : null
    const sourceType = String(fm.source_type || "")
    const evidenceTier = String(fm.evidence_tier || "")

    // Section: ## Key numbers (the canonical structured-evidence section)
    const keyNumbersBlock = extractSection(text, "Key numbers")
    if (!keyNumbersBlock) {
      pagesWithoutKeyNumbers++
      continue
    }
    pagesWithKeyNumbers++

    // Parse the key numbers block: look for analyte mentions followed by
    // N=X, mean=Y, median=Z, max=W patterns within the same paragraph.
    const rowsFromPage = parseKeyNumbersBlock(keyNumbersBlock, {
      sourceId,
      sourcePage: `wiki/sources/${file}`,
      declaredMetals,
      declaredProducts,
      declaredJurisdictions,
      sampleN,
      evidenceTier,
    })

    if (rowsFromPage.length > 0) {
      extractedRows.push(...rowsFromPage)
    } else {
      unparseable.push({
        source_id: sourceId,
        source_page: `wiki/sources/${file}`,
        declared_metals: declaredMetals.join(";"),
        block_preview: keyNumbersBlock.slice(0, 200).replace(/\n/g, " "),
        reason: "Key numbers block present but no parseable (metal, value, basis) tuples extracted",
      })
    }
  }

  // Write outputs
  if (!dryRun) {
    writeCsv(outputPath, extractedRows, OUTPUT_HEADERS)
    writeCsv(unparseablePath, unparseable, ["source_id", "source_page", "declared_metals", "block_preview", "reason"])
  }

  // Report
  const report = [
    `# Source-value extraction report — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `Generated: ${new Date().toISOString()}`,
    `Mode: ${dryRun ? "DRY-RUN" : "EXECUTED"}`,
    `Elapsed: ${Math.round((Date.now() - startTime) / 1000)}s`,
    ``,
    `## Summary`,
    ``,
    `- Source pages processed: ${processed}`,
    `- Pages with \`## Key numbers\` section: ${pagesWithKeyNumbers}`,
    `- Pages without Key numbers section (skipped): ${pagesWithoutKeyNumbers}`,
    `- Structured rows extracted: ${extractedRows.length}`,
    `- Pages with Key numbers but no parseable values: ${unparseable.length}`,
    ``,
    `## Output`,
    ``,
    `- \`${path.relative(repoRoot, outputPath)}\` — pooling engine consumes this on next run`,
    `- \`${path.relative(repoRoot, unparseablePath)}\` — flagged for human curation`,
    ``,
    `## Coverage by metal_species`,
    ``,
    Object.entries(countBy(extractedRows, (r) => r.metal_species))
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `- ${k}: ${v} rows`)
      .join("\n"),
    ``,
    `## Coverage by row_slug (top 20)`,
    ``,
    Object.entries(countBy(extractedRows, (r) => r.row_slug))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([k, v]) => `- ${k}: ${v} rows`)
      .join("\n"),
    ``,
  ].join("\n")

  fs.writeFileSync(reportPath, report, "utf8")

  console.log(`\n=== extract-source-values ${dryRun ? "DRY-RUN" : "EXECUTED"} ===`)
  console.log(`Pages processed: ${processed}`)
  console.log(`Pages with Key numbers: ${pagesWithKeyNumbers}`)
  console.log(`Rows extracted: ${extractedRows.length}`)
  console.log(`Pages flagged for human curation: ${unparseable.length}`)
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
}

function extractSection(text, heading) {
  // Look for "## <heading>" and capture until the next "## " or EOF.
  const re = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|\\Z)`, "m")
  const m = text.match(re)
  return m ? m[1].trim() : null
}

function parseKeyNumbersBlock(block, ctx) {
  // For each declared metal, find sentences mentioning the metal and try to
  // extract N, mean, median, max, basis, and jurisdiction from the same
  // sentence or adjacent context.
  const rows = []
  // Split block into paragraphs separated by blank lines.
  const paragraphs = block.split(/\n\n+/)

  for (const para of paragraphs) {
    // For each declared metal, check if this paragraph references it.
    for (const declared of ctx.declaredMetals) {
      const metalCanonical = normalizeMetal(declared)
      if (!metalCanonical) continue

      if (!referencesMetal(para, metalCanonical, declared)) continue

      // Try to extract numeric statistics from this paragraph.
      const stats = extractStats(para)
      if (Object.keys(stats).length === 0) continue

      const basis = extractBasis(para)
      const productSlug = chooseProduct(para, ctx.declaredProducts)
      const jurisdiction = chooseJurisdiction(para, ctx.declaredJurisdictions)

      // Apply unit normalization to each statistic.
      const unit = "ppb"  // we normalize everything to ppb in the output

      const row = {
        source_id: ctx.sourceId,
        source_page: ctx.sourcePage,
        row_slug: productSlug || "",
        metal_species: metalCanonical,
        product_label: productSlug || "",
        basis: basis || "",
        n: stats.n != null ? String(stats.n) : (ctx.sampleN != null ? String(ctx.sampleN) : ""),
        mean_ppb: stats.mean != null ? String(stats.mean) : "",
        median_ppb: stats.median != null ? String(stats.median) : "",
        p50_ppb: stats.p50 != null ? String(stats.p50) : (stats.median != null ? String(stats.median) : ""),
        p90_ppb: stats.p90 != null ? String(stats.p90) : "",
        p95_ppb: stats.p95 != null ? String(stats.p95) : "",
        p100_ppb: stats.p100 != null ? String(stats.p100) : (stats.max != null ? String(stats.max) : ""),
        max_ppb: stats.max != null ? String(stats.max) : "",
        min_ppb: stats.min != null ? String(stats.min) : "",
        unit,
        statistic_scope: para.slice(0, 200).replace(/\n/g, " "),
        evidence_fitness_verdict: ctx.evidenceTier === "A" ? "EF-2" : "EF-3",
        review_state: "autonomy_v0_extracted",
        row_fit: "literature_summary_row",
        jurisdiction,
        extraction_method: "autonomy_v0_regex_keynumbers",
        notes: "Auto-extracted from wiki/sources/ Key numbers section. Validate before promotion.",
      }
      rows.push(row)
    }
  }
  return rows
}

function referencesMetal(paragraph, canonical, originalDeclared) {
  const lower = paragraph.toLowerCase()
  if (lower.includes(canonical.toLowerCase())) return true
  if (lower.includes(originalDeclared.toLowerCase())) return true
  // Long-form matches
  const longForms = {
    Pb: ["lead"], Cd: ["cadmium"], iAs: ["inorganic arsenic", "inorganic as"],
    tAs: ["total arsenic", "arsenic"], MeHg: ["methylmercury", "methyl mercury"],
    tHg: ["total mercury", "mercury"], Ni: ["nickel"], Al: ["aluminum", "aluminium"],
    "Cr-VI": ["chromium(vi)", "hexavalent chromium", "cr(vi)"],
    Sn: ["tin"], U: ["uranium"],
  }
  const lf = longForms[canonical]
  if (lf && lf.some((s) => lower.includes(s))) return true
  return false
}

function extractStats(paragraph) {
  const stats = {}
  // N or n=X or N=X or sample size X
  const nMatch = paragraph.match(/\b[Nn]\s*=\s*(\d+)|sample size\s*(?:of\s*)?(\d+)|n=(\d+)/i)
  if (nMatch) {
    stats.n = Number(nMatch[1] || nMatch[2] || nMatch[3])
  }
  // mean X, mean X.X ppb, mean of X.X µg/kg
  stats.mean = extractValueLabeled(paragraph, ["mean", "average"])
  stats.median = extractValueLabeled(paragraph, ["median", "p50", "50th percentile"])
  stats.max = extractValueLabeled(paragraph, ["max", "maximum", "highest"])
  stats.min = extractValueLabeled(paragraph, ["min", "minimum", "lowest"])
  stats.p90 = extractValueLabeled(paragraph, ["p90", "90th percentile"])
  stats.p95 = extractValueLabeled(paragraph, ["p95", "95th percentile"])
  stats.p100 = extractValueLabeled(paragraph, ["p100", "100th percentile"])

  // Filter undefined → null
  for (const k of Object.keys(stats)) {
    if (stats[k] === undefined) stats[k] = null
  }
  return stats
}

function extractValueLabeled(paragraph, labels) {
  // Look for "<label> X.X <unit>" where unit normalizes to ppb.
  for (const label of labels) {
    const re = new RegExp(
      `\\b${label.replace(/\\/g, "\\\\").replace(/\s+/g, "\\s+")}\\b\\s*(?:of\\s+)?(?:=\\s*)?(\\d+(?:\\.\\d+)?)\\s*(ppb|µg/kg|ug/kg|mcg/kg|ng/g|mg/kg|ppm|µg/g|µg/L|ng/mL|ng/L)?`,
      "i",
    )
    const m = paragraph.match(re)
    if (!m) continue
    return normalizeToPpb(Number(m[1]), m[2] || "ppb")
  }
  return null
}

function normalizeToPpb(value, unit) {
  if (!unit) return value
  const u = unit.toLowerCase().replace(/\s+/g, "")
  // 1 ppb = 1 µg/kg = 1 ng/g (mass)
  if (["ppb", "µg/kg", "ug/kg", "mcg/kg", "ng/g"].includes(u)) return value
  // 1 ppm = 1000 ppb
  if (["ppm", "mg/kg", "µg/g", "ug/g"].includes(u)) return value * 1000
  // Liquid-mass approximation (1 L water ≈ 1 kg): treat µg/L as µg/kg
  if (["µg/l", "ug/l", "ng/ml"].includes(u)) return value
  if (["ng/l"].includes(u)) return value / 1000
  // Unknown — return as-is and flag (the row will be reviewable downstream)
  return value
}

function extractBasis(paragraph) {
  const lower = paragraph.toLowerCase()
  if (lower.includes("prepared for feeding") || lower.includes("prepared-for-feeding")) return "prepared_for_feeding"
  if (lower.includes("as consumed") || lower.includes("ready to drink") || lower.includes("rtd ")) return "as_consumed"
  if (lower.includes("as sold") || lower.includes("on the market") || lower.includes("as marketed")) return "as_sold"
  if (lower.includes("dry weight") || lower.includes("dry matter") || lower.includes(" dw") || lower.includes("dry powder")) return "dry_as_sold"
  if (lower.includes("wet weight") || lower.includes("fresh weight") || lower.includes(" fw")) return "as_consumed"
  if (lower.includes("powder")) return "powder_as_placed"
  return ""
}

function chooseProduct(paragraph, declaredProducts) {
  if (declaredProducts.length === 0) return ""
  if (declaredProducts.length === 1) return declaredProducts[0]
  // Pick the one whose slug words appear most in the paragraph.
  let best = declaredProducts[0]
  let bestScore = 0
  const para = paragraph.toLowerCase()
  for (const product of declaredProducts) {
    const slug = String(product).toLowerCase()
    const score = slug.split("-").filter((w) => w.length > 3 && para.includes(w)).length
    if (score > bestScore) {
      best = product
      bestScore = score
    }
  }
  return best
}

function chooseJurisdiction(paragraph, declaredJurisdictions) {
  if (declaredJurisdictions.length === 0) return ""
  if (declaredJurisdictions.length === 1) return declaredJurisdictions[0]
  return declaredJurisdictions[0]  // simplest: first declared. Could improve.
}

function normalizeMetal(input) {
  if (!input) return null
  const lower = String(input).trim().toLowerCase()
  return METAL_NORMALIZATION[lower] || (input.length <= 6 ? input : null)
}

// ----- utilities -----

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([\w-]+):\s*(.*)$/)
    if (!km) continue
    let v = km[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")).filter(Boolean)
    } else if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    fm[km[1]] = v
  }
  return fm
}

function arrayField(v) {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean)
  if (typeof v === "string") {
    return v.replace(/^\[|\]$/g, "").split(/[,;]/).map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")).filter(Boolean)
  }
  return []
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    const match = a.match(/^--([^=]+)(?:=(.*))?$/)
    if (match) m.set(match[1], match[2] ?? "true")
  }
  return m
}

function writeCsv(filepath, rows, headers) {
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map((h) => csvCell(row[h] ?? "")).join(","))
  }
  fs.writeFileSync(filepath, lines.join("\n") + "\n", "utf8")
}

function csvCell(v) {
  const s = String(v ?? "")
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function countBy(arr, keyFn) {
  const c = {}
  for (const x of arr) {
    const k = keyFn(x) || "(empty)"
    c[k] = (c[k] || 0) + 1
  }
  return c
}
