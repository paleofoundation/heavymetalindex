#!/usr/bin/env node
// Generates targeted OpenAlex queries from the HMTc standards gap report and
// ingredient-page contamination_profile gaps. The output feeds the existing
// find-candidates.mjs pipeline, replacing the manual-wishlist parse with a
// gap-driven query stream that closes specific (product, metal) and
// (ingredient, metal) cells the corpus currently leaves empty.
//
// Why this exists: Obsidian Claude's P4 bulk ingest has a 92-98% false-positive
// rate because the manifest text-mines anything mentioning metals into P4. This
// generator inverts the search: rather than reading randomly-ordered candidates
// and discarding most as off-topic, it builds queries that target the specific
// gaps that block HMTc standards-readiness or ingredient page synthesis.
//
// Input:
//   - data/evidence/hmtc_standards_gap_report.csv (BLOCKED rows = priority 1)
//   - wiki/ingredients/*.md (pending or in_progress contamination_profile cells = priority 2)
//
// Output:
//   - data/evidence/wishlist-queries.json (same format as parse-wishlist.mjs)
//     Existing find-candidates.mjs consumes this directly.
//
// Usage:
//   node tools/wishlist/build-targeted-queries.mjs
//   node tools/wishlist/build-targeted-queries.mjs --limit 50  (cap query count)
//
// Companion to: tools/wishlist/find-candidates.mjs (downloads OA PDFs)
//               tools/wishlist/parse-wishlist.mjs (manual-wishlist alternative)

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const gapReportPath = path.join(repoRoot, "data/evidence/hmtc_standards_gap_report.csv")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const queriesPath = path.join(repoRoot, "data/evidence/wishlist-queries.json")

const args = process.argv.slice(2)
const limit = (() => {
  const idx = args.indexOf("--limit")
  return idx >= 0 ? parseInt(args[idx + 1], 10) : 200
})()

// Metal-symbol → search-term expansions. We always include the chemical name
// alongside the symbol because abstracts vary.
const METAL_SEARCH_TERMS = {
  Pb: ["lead", "Pb"],
  Cd: ["cadmium", "Cd"],
  iAs: ["inorganic arsenic", "arsenic", "As"],
  tAs: ["arsenic", "total arsenic", "As"],
  MeHg: ["methylmercury", "MeHg"],
  tHg: ["mercury", "total mercury", "Hg"],
  Ni: ["nickel", "Ni"],
  Al: ["aluminum", "aluminium", "Al"],
  Cr: ["chromium", "Cr"],
  "Cr-VI": ["hexavalent chromium", "Cr(VI)", "Cr VI"],
  Sn: ["tin", "Sn"],
  U: ["uranium", "U"],
  Sb: ["antimony", "Sb"],
}

// Product-slug → search-keyword expansions. Captures the product category in
// terms that appear in abstracts of food-safety papers.
const PRODUCT_SEARCH_TERMS = {
  "baby-cereals-dry-non-rice": ["infant cereal", "baby cereal", "non-rice cereal", "oat cereal", "wheat cereal"],
  "baby-cereals-dry-rice-based": ["infant rice cereal", "baby rice cereal", "rice cereal"],
  "infant-formula-powder-non-soy": ["infant formula", "cow milk formula", "powdered formula"],
  "infant-formula-powder-soy-based": ["soy infant formula", "soy-based formula"],
  "infant-formula-rtf-liquid-non-soy": ["ready-to-feed infant formula", "liquid infant formula", "RTF formula"],
  "infant-formula-rtf-liquid-soy-based": ["ready-to-feed soy formula", "liquid soy formula"],
  "infant-formula-concentrated-liquid-non-soy": ["concentrated liquid formula", "infant formula concentrate"],
  "infant-formula-concentrated-liquid-soy-based": ["concentrated soy formula"],
  "fruit-purees": ["infant fruit puree", "baby food puree", "fruit baby food"],
  "vegetable-purees-root": ["root vegetable puree", "carrot puree", "sweet potato puree"],
  "non-root-vegetable-purees": ["vegetable puree", "spinach puree", "pea puree"],
  "meat-and-poultry-purees": ["meat baby food", "poultry baby food", "chicken puree"],
  "fish-containing-baby-foods": ["fish baby food", "salmon baby food", "infant fish"],
  "fruit-juice-not-canned": ["fruit juice", "apple juice", "grape juice"],
  "fruit-juices-apple-containing": ["apple juice", "apple-containing juice"],
  "fruit-juices-non-apple": ["fruit juice", "grape juice", "orange juice"],
  "plant-milks-rice-based": ["rice milk", "rice beverage"],
  "plant-milks-non-rice": ["plant milk", "almond milk", "oat milk", "soy milk"],
  "teething-and-snacks-rice-based": ["rice teething", "rice puffs", "infant rice snack"],
  "teething-and-snacks-non-rice": ["teething biscuit", "infant snack"],
  "mixed-meals-rice-containing": ["rice-containing baby food", "mixed baby meal"],
  "mixed-meals-non-rice": ["baby meal", "infant mixed food"],
  "oral-electrolyte-solutions": ["oral rehydration solution", "electrolyte solution"],
  "glucose-solutions": ["glucose solution", "oral glucose"],
  "flavored-waters": ["flavored water", "infant water"],
  "coffee": ["coffee", "coffee beans"],
  "herbal-botanical-infusions": ["herbal tea", "botanical infusion", "herbal infusion"],
  "fermented-beverages-non-tea-based": ["kombucha", "fermented beverage"],
  "category-5-beverages-master": ["beverage"],
}

// Ingredient-slug → search-keyword expansions. Falls back to slug-as-keyword
// if no explicit mapping; most slugs are already valid English search terms.
const INGREDIENT_SEARCH_TERMS = {
  "rice": ["rice"],
  "cocoa": ["cocoa", "cacao"],
  "chocolate": ["chocolate", "dark chocolate"],
  "wheat": ["wheat"],
  "oat": ["oat", "oats"],
  "corn": ["corn", "maize"],
  "cereals": ["cereal grains", "cereal"],
  "quinoa": ["quinoa"],
  "breastmilk": ["breast milk", "human milk"],
  "freshwater-fish": ["freshwater fish", "river fish", "lake fish"],
  "shellfish": ["shellfish", "crustaceans", "mussels", "clams"],
  "bivalve-molluscs": ["bivalve", "mussels", "oysters", "clams"],
  "spinach": ["spinach"],
  "leafy-greens": ["leafy green vegetables", "leafy vegetables"],
  "root-vegetables": ["root vegetables", "carrots", "potatoes"],
  "carrots": ["carrots"],
  "potatoes": ["potatoes", "potato"],
  "fruit": ["fruit"],
  "apple": ["apples", "apple"],
  "cassava": ["cassava"],
  "milk-and-dairy": ["dairy", "milk products"],
  "cheese": ["cheese"],
  "meat": ["meat"],
  "chicken": ["chicken", "poultry"],
  "beef": ["beef"],
  "fish": ["fish"],
  "seafood": ["seafood"],
  "marine-fish": ["marine fish", "saltwater fish"],
  "tuna": ["tuna"],
  "salmon": ["salmon"],
  "infant-formula": ["infant formula"],
  "soy": ["soy", "soybean"],
  "tofu": ["tofu"],
  "honey": ["honey"],
  "eggs": ["eggs"],
}

// ---------- Step 1: build gap candidates from HMTc gap report ----------

if (!fs.existsSync(gapReportPath)) {
  console.error(`No gap report at ${gapReportPath}.`)
  process.exit(1)
}

const gapRows = parseCsv(fs.readFileSync(gapReportPath, "utf8"))
const blockedRows = gapRows.filter((r) => (r.aggregate_hmtc_percentile_status || "").startsWith("DO NOT PUBLISH") || (r.aggregate_hmtc_percentile_status || "").startsWith("BLOCKED"))

console.error(`Gap report: ${gapRows.length} rows, ${blockedRows.length} blocked.`)

const candidates = []

for (const row of blockedRows) {
  const productSlug = row.product_slug
  const metal = row.metal_species
  const productTerms = PRODUCT_SEARCH_TERMS[productSlug] || [productSlug.replace(/-/g, " ")]
  const metalTerms = METAL_SEARCH_TERMS[metal] || [metal]

  // Primary product-anchored query: "infant rice cereal" + "lead concentration"
  // We also add "occurrence" / "content" / "level" / "intake" as positive
  // signal terms that food-concentration papers typically use.
  const primaryProduct = productTerms[0]
  const primaryMetal = metalTerms[0]
  const altMetal = metalTerms.slice(1).join(" OR ")

  candidates.push({
    id: `GAP-${productSlug}-${metal}`,
    section: "hmtc-gap-blocked",
    priority: "high",
    search_query_core: `"${primaryProduct}" ${primaryMetal} concentration`,
    search_query_full: `("${primaryProduct}" OR "${productTerms.slice(1, 3).join('" OR "')}") ${primaryMetal} ${altMetal ? `OR ${altMetal}` : ""} (concentration OR content OR level OR occurrence OR exposure)`,
    extracted: {
      crops: productTerms,
      regions: [],
      metals: metalTerms,
      metal_search_terms: metalTerms,
      periods: [],
    },
    target: {
      kind: "product",
      slug: productSlug,
      metal,
      reason: row.aggregate_hmtc_percentile_status,
      regulatory_cap: row.lowest_regulatory_cap_ug_kg,
    },
  })
}

// ---------- Step 2: build ingredient × metal pending candidates ----------

// Read ingredient pages; for each contamination_profile sub-block at
// `status: pending` or `status: in_progress` with `n_studies` below 3,
// generate a targeted query.

const ingredientCandidates = []

if (fs.existsSync(ingredientsDir)) {
  for (const file of fs.readdirSync(ingredientsDir)) {
    if (!file.endsWith(".md")) continue
    if (file === "index.md") continue
    const ingredientSlug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
    // Extract contamination_profile metal sub-blocks. Match metal name +
    // status line + n_studies on the next few lines.
    const cellMatches = raw.matchAll(/^ {2}(Pb|Cd|iAs|tAs|tHg|Ni|Al|Cr|Sn|U|MeHg):\s*\n((?: {4}\S[^\n]*\n){2,8})/gm)
    for (const m of cellMatches) {
      const metal = m[1]
      const block = m[2]
      const statusMatch = block.match(/status:\s*(\w+)/)
      const nStudiesMatch = block.match(/n_studies:\s*(\d+)/)
      if (!statusMatch) continue
      const status = statusMatch[1]
      const nStudies = nStudiesMatch ? parseInt(nStudiesMatch[1], 10) : 0
      if (status !== "pending" && status !== "in_progress") continue
      if (nStudies >= 3) continue  // already has enough sources

      const ingredientTerms = INGREDIENT_SEARCH_TERMS[ingredientSlug] || [ingredientSlug.replace(/-/g, " ")]
      const metalTerms = METAL_SEARCH_TERMS[metal] || [metal]
      const primaryIngredient = ingredientTerms[0]
      const primaryMetal = metalTerms[0]
      const altMetal = metalTerms.slice(1).join(" OR ")

      ingredientCandidates.push({
        id: `ING-${ingredientSlug}-${metal}`,
        section: "ingredient-cell-pending",
        priority: nStudies === 0 ? "medium" : "high",  // 1-2 sources is closer to synthesis
        search_query_core: `${primaryIngredient} ${primaryMetal} concentration`,
        search_query_full: `${ingredientTerms.join(" OR ")} ${primaryMetal} ${altMetal ? `OR ${altMetal}` : ""} (concentration OR content OR level OR occurrence)`,
        extracted: {
          crops: ingredientTerms,
          regions: [],
          metals: metalTerms,
          metal_search_terms: metalTerms,
          periods: [],
        },
        target: {
          kind: "ingredient",
          slug: ingredientSlug,
          metal,
          status,
          n_studies: nStudies,
        },
      })
    }
  }
}

console.error(`Ingredient cells pending or under-sourced (n<3): ${ingredientCandidates.length}.`)

// ---------- Step 3: prioritize and cap ----------

// Product-page gaps (HMTc-blocked) are higher priority than ingredient cells
// because they block standards-readiness directly. Within each, sort by
// alphabetical slug for reproducibility.
const all = [...candidates, ...ingredientCandidates]
all.sort((a, b) => {
  if (a.priority !== b.priority) {
    const p = { high: 0, medium: 1, low: 2 }
    return (p[a.priority] ?? 9) - (p[b.priority] ?? 9)
  }
  if (a.section !== b.section) return a.section.localeCompare(b.section)
  return a.id.localeCompare(b.id)
})

const queries = all.slice(0, limit)

// ---------- Step 4: emit ----------

fs.writeFileSync(
  queriesPath,
  JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      source: "gap-driven (build-targeted-queries.mjs)",
      total_candidates: all.length,
      emitted: queries.length,
      cap: limit,
      breakdown: {
        hmtc_blocked: candidates.length,
        ingredient_pending: ingredientCandidates.length,
      },
      queries,
    },
    null,
    2,
  ) + "\n",
)

console.log(`\nGenerated ${queries.length} targeted queries → ${path.relative(repoRoot, queriesPath)}`)
console.log(`Breakdown: ${candidates.length} HMTc-gap queries, ${ingredientCandidates.length} ingredient-cell queries (${all.length} total before --limit ${limit} cap).`)
console.log(`\nNext: run \`node tools/wishlist/find-candidates.mjs\` to download OA PDFs from these targeted queries.`)
console.log(`The find-candidates output goes to raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ which the next ingest session reads.`)

// ---------- helpers ----------

function parseCsv(text) {
  const rows = []
  let i = 0, cell = "", row = [], inQuotes = false
  const n = text.length
  while (i < n) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i += 2; continue }
      if (c === '"') { inQuotes = false; i++; continue }
      cell += c; i++; continue
    }
    if (c === '"') { inQuotes = true; i++; continue }
    if (c === ",") { row.push(cell); cell = ""; i++; continue }
    if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; i++; continue }
    if (c === "\r") { i++; continue }
    cell += c; i++
  }
  if (cell.length > 0 || row.length > 0) { row.push(cell); rows.push(row) }
  if (rows.length === 0) return []
  const header = rows.shift()
  return rows.map((r) => {
    const o = {}
    header.forEach((h, idx) => { o[h] = r[idx] ?? "" })
    return o
  })
}
