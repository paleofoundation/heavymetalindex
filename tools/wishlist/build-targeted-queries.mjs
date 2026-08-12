#!/usr/bin/env node
// Generates targeted OpenAlex queries from the persistent occurrence-gap register and
// ingredient-page contamination_profile gaps. The output feeds the existing
// find-candidates.mjs pipeline, replacing the manual-wishlist parse with a
// gap-driven query stream that closes specific (product, metal) and
// (ingredient, metal) cells the corpus currently leaves empty.
//
// Why this exists: Obsidian Claude's P4 bulk ingest has a 92-98% false-positive
// rate because the manifest text-mines anything mentioning metals into P4. This
// generator inverts the search: rather than reading randomly-ordered candidates
// and discarding most as off-topic, it builds queries that target the specific
// gaps in occurrence coverage or ingredient-page synthesis.
//
// Input:
//   - data/gaps/open_gaps.jsonl (no-cited-occurrence rows = priority 1)
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
const openGapsPath = path.join(repoRoot, "data/gaps/open_gaps.jsonl")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const queriesPath = path.join(repoRoot, "data/evidence/wishlist-queries.json")

const args = process.argv.slice(2)
// Limit raised 2026-05-28 from 200 → 3000 to absorb the autonomy gap-
// driven candidates (Paths A/B/C/D cover Cat 1-23, ~2500 candidates),
// plus HMTc-blocked (~50) and ingredient-pending (~250). The fetcher's
// own FETCH_BUDGET_MS in find-candidates.mjs (default 15 min) is the
// real per-tick cap; this limit only ensures the queries are written
// to wishlist-queries.json for the fetcher to choose from.
const limit = (() => {
  const idx = args.indexOf("--limit")
  return idx >= 0 ? parseInt(args[idx + 1], 10) : 3000
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

// ---------- Step 1: build candidates from occurrence gaps ----------

if (!fs.existsSync(openGapsPath)) {
  console.error(`No open-gap register at ${openGapsPath}.`)
  process.exit(1)
}

const gapRows = fs.readFileSync(openGapsPath, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
const blockedRows = gapRows.filter((row) =>
  row.status !== "closed"
    && row.why === "no_cited_occurrence_evidence"
    && /^wiki\/products\/[a-z0-9-]+\.md$/.test(row.page || ""),
)

console.error(`Open-gap register: ${gapRows.length} rows, ${blockedRows.length} product occurrence gaps.`)

const candidates = []

for (const row of blockedRows) {
  const productSlug = row.page.match(/^wiki\/products\/([a-z0-9-]+)\.md$/)[1]
  const metal = row.metal
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
    section: "product-occurrence-gap",
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
      reason: row.why,
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

// ---------- Step 2b: merge autonomy gap-driven-wishlist.csv ─────────────────
// Per the 2026-05-28 multi-domain expansion, tools/autonomy/gap-driven-
// wishlist.mjs emits queries spanning Paths A (pooling), B (empty pages),
// C (cell-level n_studies), and D (regulatory anchors) — including
// Cat 10/12-23 categories the HMTc-staff gap report doesn't cover. Those
// queries also carry Karen's category priority + products-vs-ingredients
// rotation. We merge them here so the fetcher pipeline actually runs them.
const autonomyWishlistPath = path.join(repoRoot, "data/evidence/autonomy/gap-driven-wishlist.csv")
const autonomyCandidates = []
if (fs.existsSync(autonomyWishlistPath)) {
  const rows = parseCsv(fs.readFileSync(autonomyWishlistPath, "utf8"))
  for (const r of rows) {
    if (!r.search_query) continue
    // Build candidate row in the same shape as Steps 1 and 2
    const metalKey = r.metal_species || ""
    const metalTerms = METAL_SEARCH_TERMS[metalKey] || (metalKey ? [metalKey.toLowerCase()] : [])
    autonomyCandidates.push({
      id: `AUTO-${r.product_slug || "unknown"}-${metalKey}-${r.page_type || "unknown"}`,
      section: `autonomy-${r.page_type || "unknown"}-${r.domain || "unknown"}`,
      priority: r.gap_priority === "P1" ? "high" : r.gap_priority === "P2" ? "medium" : "low",
      search_query_core: r.search_query,
      search_query_full: r.search_query,
      extracted: {
        crops: r.product_slug ? [r.product_slug.replace(/^(ingredient|product|regulatory):/, "").replace(/-/g, " ")] : [],
        regions: [],
        metals: metalKey ? [metalKey] : [],
        metal_search_terms: metalTerms,
        periods: [],
      },
      target: {
        kind: r.page_type || "unknown",
        slug: r.product_slug || "",
        metal: metalKey,
        reason: r.rationale || "",
        domain: r.domain || "food",
      },
      // Preserve Karen's category priority for the sort below
      _karen_category_rank: parseInt(r.category_rank, 10),
      _autonomy_row_index: autonomyCandidates.length,
    })
  }
  console.error(`Autonomy gap-driven candidates (Paths A/B/C/D, Cat 1-23): ${autonomyCandidates.length}.`)
} else {
  console.error(`No autonomy gap-driven wishlist at ${autonomyWishlistPath} — skipping merge.`)
}

// ---------- Step 3: prioritize and cap ----------

// Combined ordering:
//   1. Product occurrence-coverage gaps (Step 1) come first.
//   2. Autonomy candidates next — but their existing order already
//      respects Karen's category priority + products/ingredients
//      rotation (set by tools/autonomy/gap-driven-wishlist.mjs).
//   3. Ingredient pending cells (Step 2) last as the fallback.
//
// Within each block, original ordering is preserved (autonomy CSV is
// already sorted; HMTc-blocked uses priority/section/id).
const all = [...candidates, ...autonomyCandidates, ...ingredientCandidates]

// Stable sort: keep autonomy candidates' existing order (they're already
// sorted by gap-driven-wishlist.mjs per Karen's priority). HMTc-blocked
// candidates sort by their internal priority. Ingredient cells fall in
// behind both.
all.sort((a, b) => {
  // Sources block ordering: product occurrence gaps → autonomy → ingredient
  const sectionRank = (x) => {
    if (x.section === "product-occurrence-gap") return 0
    if ((x.section || "").startsWith("autonomy-")) return 1
    return 2
  }
  const sa = sectionRank(a), sb = sectionRank(b)
  if (sa !== sb) return sa - sb
  // Within autonomy block: preserve the rank-ordered position assigned
  // by gap-driven-wishlist.mjs (which already applied focus + category
  // priority + day-shuffle).
  if (sa === 1) {
    return (a._autonomy_row_index ?? 0) - (b._autonomy_row_index ?? 0)
  }
  // Within other blocks: by priority then alphabetical
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
        autonomy_gap_driven: autonomyCandidates.length,
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
