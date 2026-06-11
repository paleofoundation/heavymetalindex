#!/usr/bin/env node
// build-category-occurrence-summary.mjs
//
// Bridges synthesized ingredient `contamination_profile` ranges into the
// category occurrence-summary CSVs that the HMTc standards gap report consumes,
// for categories whose rows otherwise show "BLOCKED: no structured evidence".
//
// HONESTY BOUNDARY (load-bearing — do not change without understanding it):
// The ingredient contamination_profile is a SYNTHESIZED commodity-level range
// (typical_ppb low/high, optional p95, n_studies, confidence) — NOT a per-study
// sample-level distribution. This builder therefore emits SUMMARY-GRADE rows:
// it populates `field_value_summary`, `n`, and metadata, but LEAVES THE
// PERCENTILE COLUMNS (p10/p50/p90/p95/p100) BLANK. The gap report counts these
// as `summary_or_range_source_count`, NOT `distribution_capable_source_count`.
// A row only becomes distribution-capable when a per-study extraction pass
// supplies real sample-level percentiles. This bridge makes the literature
// VISIBLE in the standards pipeline; it does not manufacture a P97.
//
// Output: data/evidence/category<N>_occurrence_summary.csv (one per category).
// Register the output path in build-standards-gap-report.mjs occurrenceSummaryFiles.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const ingredientDir = path.join(repoRoot, "wiki/ingredients")
const productDir = path.join(repoRoot, "wiki/products")
const evidenceDir = path.join(repoRoot, "data/evidence")

// Explicit ingredient -> product-row mapping per category. Conservative: only
// commodities with a clear correspondence to a locked row are mapped. Generic
// commodities (e.g. bare "fish", "seafood") are intentionally omitted — their
// summary evidence awaits per-species extraction rather than an arbitrary
// row assignment.
const CATEGORY_MAP = {
  7: {
    "olive-oil": "olive-oil",
    "sunflower-oil": "cooking-oils-other",
    "corn-oil": "cooking-oils-other",
    "rapeseed-oil": "cooking-oils-other",
    "soybean-oil": "cooking-oils-other",
    "sesame-oil": "cooking-oils-other",
    "rice-bran-oil": "cooking-oils-other",
    "peanut-oil": "cooking-oils-other",
    "butter": "butter-and-ghee",
    "spices": "spices",
    "turmeric": "spices",
    "cinnamon": "spices",
    "black-pepper": "spices",
    "cumin": "spices",
    "honey": "honey",
    "chocolate": "chocolate",
    "cocoa": "chocolate",
    "salt": "salt",
    "vinegar": "vinegar",
  },
  6: {
    "shellfish": "shellfish",
    "seaweed": "seaweed-kelp-foods",
  },
  // Conservative expansion 2026-06-11: only clear ingredient->row correspondences.
  // Integrity-backlog cells (data/evidence/contamination-profile-integrity-backlog.md)
  // are skipped per-metal by the exclusion below, so mapping a backlog ingredient
  // here is safe — its corrupt metals are dropped, its clean metals still bridge.
  11: {
    "beef": "beef-product",
    "ground-beef": "beef-product",
    "lamb": "lamb-mutton",
    "lamb-chop": "lamb-mutton",
    "chicken": "poultry-product",
    "poultry": "poultry-product",
    "turkey": "poultry-product",
    "pork-chop": "pork-product",
    "pork-bacon": "pork-product",
    "pork-sausages": "pork-product",
    "eggs": "eggs-product",
    "organ-meats": "game-meats",
    "bologna-luncheon-meat": "processed-meats",
  },
  24: {
    "whole-milk": "dairy-milk-cow",
    "skim-milk": "dairy-milk-cow",
    "reduced-fat-milk": "dairy-milk-cow",
    "semi-skimmed-milk": "dairy-milk-cow",
    "milk-and-dairy": "dairy-milk-cow",
    "yogurt": "dairy-yogurt-cultured",
    "cheddar-cheese": "dairy-cheese",
    "processed-american-cheese": "dairy-cheese",
  },
}

const ANALYTES = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Cr", "Sn", "Al"]

// Integrity exclusion (added 2026-06-11): never bridge an (ingredient, metal) cell
// that the contamination-profile integrity guard has flagged as a censored-zero or
// degenerate-upper-tail artifact. Bridging those would pipe known-understated values
// into the standards pipeline. The set is rebuilt from the guard's backlog file each
// run; when the backlog drains to zero the exclusion becomes a no-op automatically.
function loadIntegrityExclusions() {
  const set = new Set()
  const fp = path.join(evidenceDir, "contamination-profile-integrity-backlog.md")
  if (!fs.existsSync(fp)) return set
  const metalToken = /\b(Pb|Cd|iAs|tAs|tHg|MeHg|Ni|Cr|Sn|Al|U)\b/g
  for (const line of fs.readFileSync(fp, "utf8").split("\n")) {
    const m = line.match(/\[\[ingredients\/([a-z0-9-]+)\]\]\s*\|(.*)\|/)
    if (!m) continue
    const ingredient = m[1]
    const metals = m[2].match(metalToken) || []
    for (const metal of metals) set.add(`${ingredient}::${metal}`)
  }
  return set
}
const INTEGRITY_EXCLUDE = loadIntegrityExclusions()

function num(v) { return typeof v === "number" && Number.isFinite(v) ? v : null }

function confidenceToEf(conf) {
  switch (String(conf || "").toLowerCase()) {
    case "high": return "EF-2"
    case "medium": return "EF-3"
    case "low": return "EF-4"
    default: return "EF-4"
  }
}

function rowLabel(slug) {
  const fp = path.join(productDir, `${slug}.md`)
  if (!fs.existsSync(fp)) return slug
  const d = matter(fs.readFileSync(fp, "utf8")).data
  return d.hmtc_subcategory_name || d.title || slug
}
function rowNumber(slug) {
  const fp = path.join(productDir, `${slug}.md`)
  if (!fs.existsSync(fp)) return ""
  return matter(fs.readFileSync(fp, "utf8")).data.hmtc_row ?? ""
}

const COLUMNS = [
  "source_id","source_page","row_id","row_slug","hmtc_row","row_label","source_product_label",
  "source_analyte","metal_species","basis","n","detected_n","lod_n","substitution_rule",
  "fiscal_year_min","fiscal_year_max","p10_ppb","p50_ppb","p90_ppb","p95_ppb","p100_ppb",
  "mean_ppb","median_ppb","max_ppb","mean_lb_ppb","mean_ub_ppb","n_text","statistic_type",
  "censoring_status","censoring_limit_ppb","unit","statistic_scope","evidence_fitness_verdict",
  "review_state","row_fit","category1_related_rows","field_value_summary","notes",
]

function csvCell(v) {
  const s = v === null || v === undefined ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function buildCategory(catNum, map) {
  const rows = []
  for (const [ingredient, rowSlug] of Object.entries(map)) {
    const fp = path.join(ingredientDir, `${ingredient}.md`)
    if (!fs.existsSync(fp)) { console.log(`  skip (no ingredient page): ${ingredient}`); continue }
    const data = matter(fs.readFileSync(fp, "utf8")).data
    const profile = data.contamination_profile
    if (!profile || typeof profile !== "object") { console.log(`  skip (no profile): ${ingredient}`); continue }
    const hmtcRow = rowNumber(rowSlug)
    const label = rowLabel(rowSlug)

    for (const metal of ANALYTES) {
      const block = profile[metal]
      if (!block || block.status !== "populated") continue
      if (INTEGRITY_EXCLUDE.has(`${ingredient}::${metal}`)) {
        console.log(`  skip (integrity backlog): ${ingredient} ${metal}`)
        continue
      }
      const typical = Array.isArray(block.typical_ppb) ? block.typical_ppb : [null, null]
      const lo = num(typical[0]); const hi = num(typical[1])
      const p95 = num(block.p95_ppb)
      const n = num(block.n_studies)
      // Require at least one real value (range or p95) and n>=1 to emit.
      if ((lo === null && hi === null && p95 === null) || !n) continue

      const rangeText = lo !== null || hi !== null ? `typical ${lo ?? "?"}-${hi ?? "?"} ppb` : ""
      const p95Text = p95 !== null ? `p95 ${p95} ppb` : ""
      const summary = [rangeText, p95Text, `n_studies ${n}`].filter(Boolean).join("; ") +
        " (ingredient contamination_profile synthesis — commodity-level range, not a per-study distribution)"

      rows.push({
        source_id: `ingredient-synthesis:${ingredient}`,
        source_page: `wiki/ingredients/${ingredient}.md`,
        row_id: `hmtc_c${catNum}_${rowSlug}`,
        row_slug: rowSlug,
        hmtc_row: hmtcRow,
        row_label: label,
        source_product_label: `${ingredient} (commodity synthesis)`,
        source_analyte: metal,
        metal_species: metal,
        basis: "commodity-level synthesized range (ingredient page contamination_profile); native product-form basis not resolved",
        n,
        detected_n: "", lod_n: "",
        substitution_rule: "n/a — synthesized aggregate, not per-sample data",
        fiscal_year_min: "", fiscal_year_max: "",
        // Percentile columns intentionally BLANK: this is summary-grade, not
        // distribution-capable. See the honesty boundary note at file top.
        p10_ppb: "", p50_ppb: "", p90_ppb: "", p95_ppb: "", p100_ppb: "",
        mean_ppb: "", median_ppb: "", max_ppb: "", mean_lb_ppb: "", mean_ub_ppb: "",
        n_text: String(n),
        statistic_type: "ingredient_contamination_profile_synthesis",
        censoring_status: "synthesized_range",
        censoring_limit_ppb: "",
        unit: "ppb",
        statistic_scope: `Commodity ${ingredient} synthesized range applied as summary context to row ${rowSlug}`,
        evidence_fitness_verdict: confidenceToEf(block.confidence),
        review_state: "commodity_synthesis_summary",
        row_fit: "commodity_synthesis_summary",
        category1_related_rows: rowSlug,
        field_value_summary: summary,
        notes: "Summary-grade evidence lifted from the ingredient contamination_profile. Counts as summary_or_range, NOT distribution_capable. A per-study extraction pass must supply sample-level percentiles before this row contributes a P97. Basis (native product form) must be resolved during that pass.",
      })
    }
  }
  return rows
}

let totalRows = 0
for (const [catNum, map] of Object.entries(CATEGORY_MAP)) {
  console.log(`Category ${catNum}:`)
  const rows = buildCategory(Number(catNum), map)
  const out = path.join(evidenceDir, `category${catNum}_occurrence_summary.csv`)
  const lines = [COLUMNS.join(",")]
  for (const r of rows) lines.push(COLUMNS.map((c) => csvCell(r[c])).join(","))
  fs.writeFileSync(out, lines.join("\n") + "\n", "utf8")
  console.log(`  wrote ${rows.length} summary rows -> ${path.relative(repoRoot, out)}`)
  totalRows += rows.length
}
console.log(`\nDone: ${totalRows} commodity-synthesis summary rows across ${Object.keys(CATEGORY_MAP).length} categories.`)
