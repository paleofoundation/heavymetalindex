#!/usr/bin/env node
/**
 * Gap-driven wishlist generator (v2 — empty-product-coverage + query-history-aware).
 *
 * Two inputs, two paths:
 *
 * Path A — pooling-engine-driven (legacy). Reads
 * data/evidence/hmtc_aggregate_distributions.csv; for each (product, metal)
 * cell flagged BLOCKED or PROVISIONAL, emits OpenAlex queries to expand
 * the pool.
 *
 * Path B — empty-page-driven (new 2026-05-18). Walks wiki/products/*.md
 * and wiki/ingredients/*.md directly. Any page with sources=0 (or <3 for
 * ingredients) is emitted for wishlist coverage regardless of whether
 * the pooling engine has seen it. This closes the 191-empty-product gap
 * Karen identified: the pooling engine only sees products that already
 * have some sources, so empty pages never reach the wishlist via Path A.
 *
 * Smart keyword generation. Instead of a hardcoded 15-entry map covering
 * only Cat 1 infant foods, this version derives 3-7 search terms per page
 * from:
 *   - Slug tokenization (kebab-case → space-separated words)
 *   - page title (frontmatter `title:` field) when more readable than slug
 *   - hmtc_category_label (frontmatter `category_label:`) → category-context modifier
 *   - primary_metals_of_concern (frontmatter list) cross-joined with metal keywords
 *   - HMTc-category-specific context terms (Cat 2 children-personal-care → "cosmetic safety", Cat 5 beverages → "beverage contaminants", etc.)
 *
 * Query-history-aware deprioritization. Reads
 * data/evidence/wishlist-fetch-audit.csv; counts attempts and downloads
 * per (query_terms × cell). Queries that have been attempted >=N times
 * with <2 downloads are dropped from this run; alternative search-term
 * variations are generated instead.
 *
 * Coverage rotation. The full set of eligible cells is shuffled with a
 * day-seeded deterministic shuffle so different cells get priority on
 * different days, ensuring no cell is permanently starved.
 *
 * Output goes to:
 *   - data/evidence/autonomy/gap-driven-wishlist.csv
 *
 * The existing `npm run wishlist:fetch` pipeline consumes the CSV and
 * downloads OA PDFs to raw/manual-fetch/auto-fetched/.
 *
 * Per OPERATING.md Part 3: the model decides what's worth fetching; Karen
 * does not have to approve each query.
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const pooledPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const productsDir = path.join(repoRoot, "wiki/products")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const auditPath = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
const outputPath = path.join(repoRoot, "data/evidence/autonomy/gap-driven-wishlist.csv")
const reportPath = path.join(repoRoot, `data/evidence/autonomy/gap-driven-wishlist-${new Date().toISOString().slice(0, 10)}.md`)

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

// Query-history deprioritization thresholds
const MAX_ATTEMPTS_BEFORE_DROP = 5 // a (query × cell) attempted >=5 times with <2 downloads is dropped
const MIN_DOWNLOADS_TO_KEEP = 2 // if downloads <2, treat as low-yield

// Cell-level coverage threshold (Path C, added 2026-05-28).
// CLAUDE.md Part 9 uses doubling-on-n_studies as the resynthesis trigger
// (resynthesize at 4, 8, 16, 32...). A cell at n < 8 is still in
// low/medium-confidence territory and benefits from more evidence. Setting
// the gap-fill threshold at 8 matches the high-confidence boundary; cells
// below this trigger a wishlist query targeted at that exact (page, metal).
const CELL_FULL_THRESHOLD = 8

// Path D regulatory-body anchors (2026-05-28). Per the HMI deliverable's
// "and other open-source corpora (government regulatory documents)"
// requirement. Most FDA/EFSA/WHO/ATSDR/CPSC/EN-71 documents have DOIs
// and are indexed in OpenAlex/PubMed; the gap-driven queries are food-
// keyword-shaped, not authority-shaped, so authority queries are emitted
// directly.
//
// Each entry carries `domain` so the fetcher applies the appropriate
// food/personal-care/durable-goods/cleaning gate to the candidates this
// query returns. Pre-2026-05-28 (food only) every authority assumed food
// — that silently rejected every Cat 10 (durable goods + textiles)
// candidate before download.
const REGULATORY_BODIES = [
  // ─── Food authorities (Cat 1, 3, 4, 5, 7, 16, 17, 18, 23) ───
  { name: "FDA total diet study",                  context_term: "food",     domain: "food"          },
  { name: "EFSA scientific opinion",               context_term: "food",     domain: "food"          },
  { name: "WHO JECFA",                             context_term: "food",     domain: "food"          },
  { name: "ATSDR toxicological profile dietary",   context_term: "dietary",  domain: "food"          },
  { name: "EFSA CONTAM panel dietary exposure",    context_term: "dietary",  domain: "food"          },
  { name: "Codex Alimentarius CCCF",               context_term: "food",     domain: "food"          },
  { name: "FDA Closer to Zero",                    context_term: "food",     domain: "food"          },
  // Dietary supplements (Cat 16)
  { name: "FDA DSHEA dietary supplement",          context_term: "supplement",        domain: "food"          },
  { name: "USP 2232 dietary supplement",           context_term: "supplement",        domain: "food"          },
  { name: "NSF dietary supplement certification",  context_term: "supplement",        domain: "food"          },
  { name: "AHPA herbal supplement",                context_term: "herbal supplement", domain: "food"          },
  // Pet food/supplements (Cat 17, 18)
  { name: "AAFCO pet food",                        context_term: "pet food",          domain: "food"          },
  { name: "FDA Center for Veterinary Medicine",    context_term: "pet food",          domain: "food"          },
  { name: "FEDIAF pet food",                       context_term: "pet food",          domain: "food"          },
  // Food-contact materials (Cat 7, 23)
  { name: "FDA 21 CFR 174 food contact substance", context_term: "food contact",      domain: "food"          },
  { name: "EU Regulation 1935/2004 food contact",  context_term: "food contact",      domain: "food"          },
  { name: "EU 10/2011 plastics food contact",      context_term: "food packaging",    domain: "food"          },
  { name: "BfR recommendation food contact",       context_term: "food contact",      domain: "food"          },
  // ─── Durable goods + textiles authorities (Cat 8, 9, 10, 21) ───
  { name: "CPSC Consumer Product Safety",          context_term: "consumer product",  domain: "durable-goods" },
  { name: "16 CFR 1303 lead-in-paint",             context_term: "paint",             domain: "durable-goods" },
  { name: "ASTM F963 toy safety",                  context_term: "toy",               domain: "durable-goods" },
  { name: "EN 71-3 migration toy",                 context_term: "toy",               domain: "durable-goods" },
  { name: "CPSIA Consumer Product Safety Improvement Act", context_term: "children product", domain: "durable-goods" },
  { name: "ECHA REACH SVHC",                       context_term: "consumer product",  domain: "durable-goods" },
  { name: "ATSDR toxicological profile exposure",  context_term: "exposure",          domain: "durable-goods" },
  // Arts and crafts (Cat 21)
  { name: "ASTM D-4236 art material",              context_term: "art material",      domain: "durable-goods" },
  { name: "LHAMA art material labeling",           context_term: "art material",      domain: "durable-goods" },
  // Textiles (Cat 8, 19)
  { name: "OEKO-TEX Standard 100 textile",         context_term: "textile",           domain: "durable-goods" },
  // ─── Personal care + cosmetics authorities (Cat 2, 13, 14) ───
  { name: "FDA cosmetics heavy metals",            context_term: "cosmetic",          domain: "personal-care" },
  { name: "EU Cosmetics Regulation 1223/2009",     context_term: "cosmetic",          domain: "personal-care" },
  { name: "Health Canada cosmetic ingredient hotlist", context_term: "cosmetic",      domain: "personal-care" },
  { name: "ASEAN cosmetic directive",              context_term: "cosmetic",          domain: "personal-care" },
  // Oral care (Cat 20)
  { name: "ADA accepted toothpaste",               context_term: "toothpaste",        domain: "personal-care" },
  { name: "ISO 11609 toothpaste",                  context_term: "toothpaste",        domain: "personal-care" },
  { name: "FDA OTC monograph oral",                context_term: "oral care",         domain: "personal-care" },
  // Feminine care (Cat 15)
  { name: "FDA 510k tampon medical device",        context_term: "tampon",            domain: "personal-care" },
  { name: "ISO 18193 tampon",                      context_term: "feminine hygiene",  domain: "personal-care" },
  // ─── Cleaning products (Cat 6, 12, 19) ───
  { name: "EPA Safer Choice cleaning product",     context_term: "cleaning product",  domain: "cleaning"      },
  { name: "EU Detergents Regulation 648/2004",     context_term: "detergent",         domain: "cleaning"      },
  { name: "Green Seal cleaning product",           context_term: "cleaning product",  domain: "cleaning"      },
  // ─── Home air + inhalation (Cat 22) ───
  { name: "EPA indoor air quality",                context_term: "indoor air",        domain: "inhalation"    },
  { name: "ASTM E2952 incense",                    context_term: "incense",           domain: "inhalation"    },
  { name: "WHO indoor air quality",                context_term: "indoor air",        domain: "inhalation"    },
  { name: "CARB consumer product air quality",     context_term: "consumer product air", domain: "inhalation" },
]
const HMTC_ANALYTES = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Al", "Cr-VI", "Sn"]
// Coverage-rotation budget per run. Sprint mode 2026-05-25 bumped 600 → 2500
// to feed the every-tick fetcher with enough queries per cycle. Combined
// with cell-targeted wishlist generation, this opens the pipeline to
// ~20k OpenAlex candidates per day.
const MAX_QUERIES_PER_RUN = 2500

// Metal keyword vocabulary
const METAL_KEYWORDS = {
  Pb: ["lead", "Pb"],
  Cd: ["cadmium", "Cd"],
  iAs: ["inorganic arsenic", "speciated arsenic"],
  tAs: ["total arsenic", "arsenic"],
  As: ["arsenic"],
  MeHg: ["methylmercury", "methyl mercury"],
  tHg: ["total mercury", "mercury"],
  Hg: ["mercury"],
  Ni: ["nickel"],
  Al: ["aluminum", "aluminium"],
  Cr: ["chromium"],
  "Cr-VI": ["hexavalent chromium", "Cr(VI)", "chromium(VI)"],
  Sn: ["tin"],
  Sb: ["antimony"],
  U: ["uranium"],
  Co: ["cobalt"],
  Cu: ["copper"],
  Fe: ["iron"],
  Mn: ["manganese"],
  Mo: ["molybdenum"],
  Zn: ["zinc"],
  Ba: ["barium"],
  Be: ["beryllium"],
  Tl: ["thallium"],
  V: ["vanadium"],
}

// HMTc category → context modifiers (used as additional search-term suffixes)
const HMTC_CATEGORY_CONTEXT = {
  1:  ["infant food", "baby food", "young child food"], // Infant and Child Foods
  2:  ["children personal care", "cosmetic safety", "infant skincare", "baby cosmetic", "children product safety"], // Children Personal Care
  3:  ["food contaminant", "dietary exposure"], // generic food category
  4:  ["produce contamination", "fruit vegetable heavy metal"], // Fruits/Vegetables/Produce
  5:  ["beverage contaminants", "drink heavy metal"], // Beverages
  6:  ["cleaning product safety", "household chemical"], // Cleaning products
  7:  ["cookware leaching", "food contact material"], // Cookware
  8:  ["textile heavy metals", "infant textile safety", "children textile lead", "fabric dye metals"], // Bedding/clothing
  9:  ["toy heavy metals", "children product safety", "painted toy lead", "plastic toy migration"], // Toys/art/craft
  10: ["durable good heavy metals", "infant product lead paint", "children furniture cadmium", "stroller car seat heavy metals", "mouthing exposure infant product"], // Infant and Child Durable Goods and Textiles
  12: ["dishwashing detergent heavy metals", "household cleaner contamination", "all-purpose cleaner metals", "EPA Safer Choice cleaning"], // Household Cleaning and Dishwashing
  13: ["cosmetic leave-on heavy metals", "face cream foundation metals", "makeup heavy metals", "color cosmetic contamination"], // Cosmetics — Leave-on
  14: ["rinse-off cosmetic heavy metals", "shampoo conditioner metals", "body wash heavy metals", "shower gel contamination"], // Cosmetics — Rinse-off
  15: ["feminine hygiene heavy metals", "tampon menstrual pad metals", "menstrual product contamination", "intimate care metals"], // Feminine Care
  16: ["dietary supplement heavy metals", "vitamin mineral supplement contamination", "herbal supplement metals", "USP NSF supplement"], // Dietary Supplements (Human)
  17: ["pet food heavy metals", "dog food cat food contamination", "AAFCO pet food", "kibble heavy metals"], // Pet Foods
  18: ["pet supplement heavy metals", "veterinary nutraceutical metals", "pet vitamin contamination"], // Pet Supplements
  19: ["laundry detergent heavy metals", "fabric softener metals", "laundry chemical contamination", "stain remover metals"], // Laundry and Fabric-Contact Home Products
  20: ["toothpaste heavy metals", "mouthwash fluoride metals", "oral care product contamination", "dental product lead"], // Oral Care
  21: ["toy paint heavy metals", "art craft material lead", "modeling clay heavy metals", "crayon paint set contamination", "ASTM D-4236 art material", "LHAMA art material"], // Children's Toys, Arts and Crafts
  22: ["scented candle heavy metals", "incense burning emissions", "air freshener contamination", "fragrance diffuser metals", "indoor air emission product"], // Home Air and Inhalation-Adjacent Products
  23: ["cookware leaching heavy metals", "food contact material migration", "kitchenware lead cadmium", "ceramicware glaze metals", "food packaging migration", "21 CFR 174 food contact"], // Food-Contact Consumer Goods and Kitchenware
}

// HMTc category → discovery DOMAIN. Determines which domain-term list the
// fetcher's hard gate applies. Food-shaped categories (1, 3, 4, 5, 7) use
// the food-domain gate; personal-care (2) and durable-goods/textiles (6, 8,
// 9, 10) use their own gates. Without this mapping, the food-domain gate
// added 2026-05-28 silently rejected every non-food paper — leaving Cat 10
// (infant durable goods + textiles) at 0 sources across the entire
// category despite the fetcher running thousands of queries.
const HMTC_CATEGORY_DOMAIN = {
  1:  "food",
  2:  "personal-care",
  3:  "food",
  4:  "food",
  5:  "food",
  6:  "cleaning",
  7:  "food",          // cookware studies measure metal in food
  8:  "durable-goods", // bedding/clothing
  9:  "durable-goods", // toys/art/craft
  10: "durable-goods", // infant durable goods + textiles
  12: "cleaning",      // household cleaning + dishwashing
  13: "personal-care", // cosmetics leave-on
  14: "personal-care", // cosmetics rinse-off
  15: "personal-care", // feminine care
  16: "food",          // dietary supplements (human, ingested)
  17: "food",          // pet foods (ingested, food terms apply)
  18: "food",          // pet supplements
  19: "cleaning",      // laundry + fabric-contact
  20: "personal-care", // oral care (toothpaste, mouthwash, floss)
  21: "durable-goods", // toys + arts + crafts
  22: "inhalation",    // home air + inhalation-adjacent (NEW DOMAIN)
  23: "food",          // food-contact consumer goods (measure migration into food)
}

// Infer the discovery domain from a product slug + hmtc_category frontmatter
// value. Falls back to "food" because the corpus is food-dominant; that
// preserves backwards-compat for the 80% of queries from Cat 1/3/4/5/7.
function inferDomain(productSlug, hmtcCategory) {
  const catNum = parseInt(hmtcCategory, 10)
  if (!isNaN(catNum) && HMTC_CATEGORY_DOMAIN[catNum]) return HMTC_CATEGORY_DOMAIN[catNum]
  // Slug-name heuristics for pages without an hmtc_category frontmatter
  const s = (productSlug || "").toLowerCase()
  // Inhalation-adjacent (Cat 22)
  if (/^(scented-|incense|air-product|air-freshen|diffuser|reed-|capillary-|candle|potpourri|sachet|wax-melt|wax-block|puff-releas|nebula-|electric-plug|heated-oil|home-air|vacuum-cleaner-fragrance)/.test(s)) return "inhalation"
  // Personal-care (Cat 2, 13, 14, 15, 20)
  if (/^(cosmetic|lotion|shampoo|conditioner|cream|lipstick|lip-balm|mascara|eyeliner|eyeshadow|foundation|concealer|blush|bronzer|sunscreen|sunblock|deodorant|antiperspirant|perfume|fragrance|body-wash|face-wash|cleanser|soap|toothpaste|mouthwash|mouth-rinse|floss|toothbrush|tongue-cleaner|whitening|denture|oral-irrig|breath-freshen|baby-lotion|baby-oil|baby-powder|baby-shampoo|baby-talcum|baby-wipe|baby-sunscreen|diaper-cream|face-paint|childrens-makeup|childrens-nail|childrens-lip|menstrual|tampon|feminine|intimate-wash|douche|period-underwear|personal-care)/.test(s)) return "personal-care"
  // Durable goods / toys / textiles (Cat 8, 9, 10, 21)
  if (/^(toy|toys|crib|bassinet|stroller|car-seat|carseat|bib|infant-clothing|blanket|sleep-sack|swaddle|high-chair|play-yard|swing|bouncer|walker|rocker|mattress|pillow|textile|fabric|onesie|pajama|pacifier|art-craft|art-material|craft-material|crayon|modeling-clay|clasps-fasteners|piercing-post)/.test(s)) return "durable-goods"
  // Cleaning (Cat 6, 12, 19)
  if (/^(laundry|fabric-softener|fabric-protect|fabric-refresh|fabric-contact|pre-treat|stain-remov|bleach|whitening-additive|anti-static|anti-wrinkle|detergent|cleaner|disinfect|dishwash|all-purpose)/.test(s)) return "cleaning"
  // Pet foods + supplements (Cat 17, 18) — domain food (ingested by animal)
  if (/^pet-/.test(s)) return "food"
  // Dietary supplements (Cat 16) — domain food (ingested)
  if (/^supplements?-/.test(s)) return "food"
  // Food-contact consumer goods / kitchenware (Cat 23) — domain food (measure migration into food)
  if (/^(cookware|bakeware|cutting-board|food-packaging|food-prep|food-storage|tableware|utensils|water-filter|filter-media)/.test(s)) return "food"
  return "food"
}

main()

function main() {
  const queryHistory = loadQueryHistory()
  console.log(`Loaded ${queryHistory.attempts.size} (query × cell) histories from audit log`)

  const wishlistRows = []

  // Path A: pooling-engine-driven (legacy path; preserves existing behavior)
  const pathACount = runPoolingEnginePath(wishlistRows, queryHistory)
  console.log(`Path A (pooling-engine-driven thin cells): ${pathACount} candidates`)

  // Path B: empty-page-driven (new)
  const pathBCount = runEmptyPagePath(wishlistRows, queryHistory)
  console.log(`Path B (empty-product + thin-ingredient pages): ${pathBCount} candidates`)

  // Path C: cell-level n_studies-driven (new 2026-05-28). Path B fires on
  // page-level `sources < 3` which misses thin individual cells on otherwise-
  // populated pages. Per CLAUDE.md Part 9, a cell needs n_studies >= 8 to
  // claim high confidence; cells at 3 <= n < 8 are medium/low confidence
  // and benefit from more evidence. This path walks every contamination_
  // profile sub-block on ingredient + product pages and emits a query for
  // any populated cell with n_studies below CELL_FULL_THRESHOLD.
  const pathCCount = runCellCoveragePath(wishlistRows, queryHistory)
  console.log(`Path C (cell-level n_studies < ${CELL_FULL_THRESHOLD} on populated cells): ${pathCCount} candidates`)

  // Path D: regulatory-anchor queries (new 2026-05-28). The HMI deliverable
  // requires "PubMed, OpenAlex, AND OTHER OPEN-SOURCE CORPORA (government
  // regulatory documents)." Most FDA/EFSA/WHO/ATSDR documents have DOIs
  // and ARE indexed in OpenAlex / PubMed — we just need to ask for them.
  // This path emits one anchor query per (HMTc analyte × authoritative
  // body) combination so the regulatory baseline is always actively re-
  // discovered, not just incidentally caught by gap queries.
  const pathDCount = runRegulatoryAnchorPath(wishlistRows)
  console.log(`Path D (regulatory-anchor queries — FDA/EFSA/WHO/ATSDR per analyte): ${pathDCount} candidates`)

  // Dedupe identical (product × metal × query) tuples
  const seen = new Set()
  const unique = []
  for (const r of wishlistRows) {
    const key = `${r.product_slug}::${r.metal_species}::${r.search_query}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(r)
  }
  console.log(`Deduped to ${unique.length} unique queries`)

  // Deprioritize queries with low-yield history
  const eligible = unique.filter((r) => {
    const histKey = `${r.product_slug}::${r.metal_species}::${r.search_query}`
    const hist = queryHistory.attempts.get(histKey)
    if (!hist) return true // never tried — keep
    if (hist.attempts < MAX_ATTEMPTS_BEFORE_DROP) return true // still under attempt cap
    if (hist.downloads >= MIN_DOWNLOADS_TO_KEEP) return true // proven productive
    return false // tried enough times with low yield — drop
  })
  console.log(`After history-aware filter: ${eligible.length} queries (dropped ${unique.length - eligible.length} low-yield)`)

  // Coverage rotation: shuffle with day-seeded deterministic order so different cells get priority on different days
  const daySeed = Math.floor(Date.now() / (24 * 60 * 60 * 1000))
  shuffleInPlace(eligible, daySeed)

  // Sort: P1/P2 priorities always come first, but within a priority the day-shuffle determines order
  eligible.sort((a, b) => {
    const pa = priorityRank(a.gap_priority)
    const pb = priorityRank(b.gap_priority)
    if (pa !== pb) return pb - pa // higher priority first
    return 0 // preserve shuffled order within priority
  })

  // Cap at MAX_QUERIES_PER_RUN so single days don't emit unbounded query volume
  const final = eligible.slice(0, MAX_QUERIES_PER_RUN)
  console.log(`Final wishlist: ${final.length} queries (capped at ${MAX_QUERIES_PER_RUN})`)

  const headers = ["gap_priority", "product_slug", "metal_species", "search_query", "openalex_filter", "rationale", "source_target", "domain"]
  const lines = [headers.join(",")]
  for (const row of final) lines.push(headers.map((h) => csvCell(row[h])).join(","))
  fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8")

  writeReport(final, pathACount, pathBCount, unique.length, eligible.length, queryHistory)

  console.log(`\nWrote ${final.length} OpenAlex queries to ${path.relative(repoRoot, outputPath)}`)
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
}

// ---------- Path A: pooling-engine-driven ----------

function runPoolingEnginePath(wishlistRows, queryHistory) {
  if (!fs.existsSync(pooledPath)) {
    console.warn(`No pooled distributions CSV at ${pooledPath} — Path A skipped.`)
    return 0
  }

  const pooled = parseCsv(fs.readFileSync(pooledPath, "utf8"))
  let count = 0

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
    const productKeywords = generateProductKeywords(productSlug)
    const metalKeywords = METAL_KEYWORDS[metal] || [metal]

    for (const pk of productKeywords) {
      for (const mk of metalKeywords) {
        wishlistRows.push({
          gap_priority: priorityForVerdict(verdict),
          product_slug: productSlug,
          metal_species: metal,
          search_query: `${pk} ${mk} occurrence`,
          openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
          rationale: `${verdict}; pool n=${row.sources_contributing || 0}, sensitivity ${row.sens_band || "unknown"}`,
          source_target: "openalex",
          domain: inferDomain(productSlug, null),
        })
        count++
      }
    }
  }
  return count
}

// ---------- Path B: empty-page-driven ----------

function runEmptyPagePath(wishlistRows, queryHistory) {
  let count = 0

  // Empty/thin product pages
  if (fs.existsSync(productsDir)) {
    const productFiles = fs.readdirSync(productsDir).filter((f) => f.endsWith(".md") && f !== "index.md")
    for (const file of productFiles) {
      const fullPath = path.join(productsDir, file)
      const fm = readFrontmatter(fullPath)
      const sources = parseInt(fm.sources || "0", 10)
      if (sources >= 3) continue // not empty/thin enough to warrant wishlist generation

      const slug = file.replace(/\.md$/, "")
      const metals = parseMetalsList(fm.primary_metals_of_concern)
      const productKeywords = generateProductKeywords(slug, fm.title, fm.category_label, fm.hmtc_category)
      const targetMetals = metals.length > 0 ? metals : ["Pb", "Cd", "tAs", "tHg"] // fallback to HMTc-priority metals

      for (const metal of targetMetals) {
        const metalKeywords = METAL_KEYWORDS[metal] || [metal.toLowerCase()]
        for (const pk of productKeywords) {
          for (const mk of metalKeywords) {
            wishlistRows.push({
              gap_priority: sources === 0 ? "P1" : "P2", // empty page = highest priority
              product_slug: slug,
              metal_species: metal,
              search_query: `${pk} ${mk}`,
              openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
              rationale: `Product page empty (sources=${sources}); wishlist generated from empty-page path (v2 2026-05-18).`,
              source_target: "openalex",
              domain: inferDomain(slug, fm.hmtc_category),
            })
            count++
          }
        }
      }
    }
  }

  // Empty/thin ingredient pages (use a stricter threshold since ingredients can have many sources)
  if (fs.existsSync(ingredientsDir)) {
    const ingredientFiles = fs.readdirSync(ingredientsDir).filter((f) => f.endsWith(".md") && f !== "index.md")
    for (const file of ingredientFiles) {
      const fullPath = path.join(ingredientsDir, file)
      const fm = readFrontmatter(fullPath)
      // Ingredient pages use n_studies in contamination_profile blocks, not sources: directly. Approximate.
      const sources = parseInt(fm.sources || fm.n_studies_max || "0", 10)
      if (sources >= 3) continue

      const slug = file.replace(/\.md$/, "")
      const productKeywords = generateProductKeywords(slug, fm.title || slug)
      // For ingredients, target the 10 HMTc analytes
      const targetMetals = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Al", "Cr-VI", "Sn"]

      for (const metal of targetMetals) {
        const metalKeywords = METAL_KEYWORDS[metal] || [metal.toLowerCase()]
        for (const pk of productKeywords.slice(0, 2)) { // limit per-ingredient query count to avoid explosion
          for (const mk of metalKeywords.slice(0, 1)) {
            wishlistRows.push({
              gap_priority: sources === 0 ? "P2" : "P3",
              product_slug: `ingredient:${slug}`,
              metal_species: metal,
              search_query: `${pk} ${mk} contamination`,
              openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
              rationale: `Ingredient page thin (sources=${sources}); wishlist generated from empty-page path (v2).`,
              source_target: "openalex",
              domain: inferDomain(slug, null),
            })
            count++
          }
        }
      }
    }
  }

  return count
}

// ---------- Path C: cell-level n_studies-driven (2026-05-28) ----------
//
// Walks contamination_profile blocks on ingredient + product pages. For each
// populated cell whose n_studies is below CELL_FULL_THRESHOLD, emits a
// wishlist query targeted at that exact (page, metal). Per CLAUDE.md Part 9,
// the resynthesis triggers double on n_studies (4, 8, 16…) — this path
// drives ingestion toward closing cells, not just toward populating empty
// pages (Path B). Distinct from Path A (pooling-engine BLOCKED/PROVISIONAL
// flags, HMTc-staff-facing data) by operating directly on the public-wiki
// contamination_profile state.
function runCellCoveragePath(wishlistRows, queryHistory) {
  let count = 0
  // Match a populated cell sub-block:
  //   <indent>Pb:
  //   <indent+2>status: populated
  //   <indent+2>n_studies: <number>
  // Captures both metal and n_studies.
  const cellRe = /^  ([A-Za-z][A-Za-z0-9-]+):\s*\n((?:    [^\n]*\n)+)/gm

  function emitForPage(fullPath, dirLabel) {
    const fm = readFrontmatter(fullPath)
    if (!fm.raw) return
    if (!/^contamination_profile:/m.test(fm.raw)) return
    const slug = path.basename(fullPath, ".md")
    if (slug === "index") return
    const title = fm.title || slug

    // Slice frontmatter to the contamination_profile section.
    const cpStart = fm.raw.search(/^contamination_profile:/m)
    if (cpStart < 0) return
    // contamination_profile ends at the next top-level key or end of frontmatter
    const after = fm.raw.slice(cpStart)
    const cpEnd = after.search(/^[a-z_]+:/m) > 0
      ? after.slice(1).search(/^[a-z_]+:/m) + 1
      : after.length
    const cpBlock = after.slice(0, cpEnd)

    cellRe.lastIndex = 0
    let m
    while ((m = cellRe.exec(cpBlock)) !== null) {
      const metalRaw = m[1]
      const sub = m[2]
      const statusMatch = sub.match(/^\s+status:\s*(\S+)/m)
      const nMatch = sub.match(/^\s+n_studies:\s*([0-9]+)/m)
      if (!statusMatch) continue
      const status = statusMatch[1]
      if (status !== "populated" && status !== "in_progress") continue
      const n = nMatch ? parseInt(nMatch[1], 10) : 0
      if (n >= CELL_FULL_THRESHOLD) continue
      // Normalize metal name to METAL_KEYWORDS key shape.
      const metalKey = metalRaw === "MeHg" ? "MeHg"
        : metalRaw === "Cr-VI" ? "Cr-VI"
        : metalRaw
      const metalKeywords = METAL_KEYWORDS[metalKey] || [metalRaw.toLowerCase()]
      const pageKeywords = generateProductKeywords(slug, title)
      const priority = n === 0 ? "P1" : n < 4 ? "P2" : "P3"
      for (const pk of pageKeywords.slice(0, 2)) {
        for (const mk of metalKeywords.slice(0, 1)) {
          wishlistRows.push({
            gap_priority: priority,
            product_slug: `${dirLabel}:${slug}`,
            metal_species: metalKey,
            search_query: `${pk} ${mk} contamination occurrence`,
            openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
            rationale: `Cell-level coverage: ${dirLabel}/${slug} × ${metalKey} has n_studies=${n} (<${CELL_FULL_THRESHOLD}); Path C (v2 2026-05-28).`,
            source_target: "openalex",
            domain: inferDomain(slug, fm.hmtc_category),
          })
          count++
        }
      }
    }
  }

  if (fs.existsSync(ingredientsDir)) {
    for (const file of fs.readdirSync(ingredientsDir).filter((f) => f.endsWith(".md"))) {
      emitForPage(path.join(ingredientsDir, file), "ingredient")
    }
  }
  if (fs.existsSync(productsDir)) {
    for (const file of fs.readdirSync(productsDir).filter((f) => f.endsWith(".md"))) {
      emitForPage(path.join(productsDir, file), "product")
    }
  }
  return count
}

// Path D: regulatory-anchor queries (2026-05-28) — emits one query per
// (HMTc analyte × regulatory body) so FDA/EFSA/WHO/ATSDR/Codex documents
// get continuously rediscovered alongside gap-driven queries. The
// food-domain hard gate + DOWNLOAD_THRESHOLD at the fetcher still apply.
function runRegulatoryAnchorPath(wishlistRows) {
  let count = 0
  for (const metal of HMTC_ANALYTES) {
    const metalKeywords = METAL_KEYWORDS[metal] || [metal.toLowerCase()]
    const metalTerm = metalKeywords[0]
    for (const body of REGULATORY_BODIES) {
      wishlistRows.push({
        gap_priority: "P1", // regulatory documents are top-tier evidence
        product_slug: `regulatory:${metal}`,
        metal_species: metal,
        search_query: `${body.name} ${metalTerm} ${body.context_term}`,
        openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2010-01-01",
        rationale: `Regulatory anchor: ${body.name} × ${metal} (domain=${body.domain}). Path D (v2 2026-05-28).`,
        source_target: "openalex",
        domain: body.domain,
      })
      count++
    }
  }
  return count
}

// ---------- Smart keyword generation ----------

function generateProductKeywords(slug, title, categoryLabel, hmtcCategory) {
  const keywords = []

  // Base: slug tokenized to readable words
  const slugWords = slug.replace(/-/g, " ")
  keywords.push(slugWords)

  // Title (if provided and different from slug)
  if (title) {
    const cleanTitle = title.replace(/^["']|["']$/g, "").toLowerCase()
    if (cleanTitle && cleanTitle !== slugWords) keywords.push(cleanTitle)
  }

  // Category-context modifier (if HMTc category is known)
  if (hmtcCategory) {
    const catNum = parseInt(String(hmtcCategory).replace(/[^0-9]/g, ""), 10)
    const contexts = HMTC_CATEGORY_CONTEXT[catNum] || []
    for (const ctx of contexts.slice(0, 2)) {
      keywords.push(`${slugWords} ${ctx}`)
    }
  } else if (categoryLabel) {
    // Fallback: use the category_label string directly
    const cleanCat = categoryLabel.replace(/^["']|["']$/g, "").toLowerCase()
    keywords.push(`${slugWords} ${cleanCat}`)
  }

  // Generic safety-context modifier (always useful)
  keywords.push(`${slugWords} heavy metals`)

  // Dedupe + return
  return [...new Set(keywords)]
}

// ---------- Query history ----------

function loadQueryHistory() {
  const attempts = new Map()
  if (!fs.existsSync(auditPath)) return { attempts }

  const lines = fs.readFileSync(auditPath, "utf8").split("\n").filter((l) => l.length)
  if (lines.length === 0) return { attempts }
  const headers = parseCsvLine(lines[0])
  const wishlistIdIdx = headers.indexOf("wishlist_id")
  const decisionIdx = headers.indexOf("decision")
  const queryTermsIdx = headers.indexOf("query_terms")

  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const wishlistId = cells[wishlistIdIdx] || ""
    const decision = cells[decisionIdx] || ""
    const queryTerms = cells[queryTermsIdx] || ""
    if (!wishlistId || !queryTerms) continue

    // wishlist_id is structured like "PROD-<slug>-<metal>" or "ING-<slug>-<metal>"
    // Convert to the (product_slug × metal × query) key used by the new wishlist
    const parts = wishlistId.split("-")
    if (parts.length < 3) continue
    const kind = parts[0]
    const metal = parts[parts.length - 1]
    const slug = parts.slice(1, -1).join("-")
    const productKey = kind === "ING" ? `ingredient:${slug}` : slug
    const histKey = `${productKey}::${metal}::${queryTerms}`

    const cur = attempts.get(histKey) || { attempts: 0, downloads: 0 }
    cur.attempts++
    if (decision === "downloaded") cur.downloads++
    attempts.set(histKey, cur)
  }
  return { attempts }
}

// ---------- Report ----------

function writeReport(final, pathACount, pathBCount, uniqueCount, eligibleCount, queryHistory) {
  const byPriority = countBy(final, (r) => r.gap_priority)
  const bySource = countBy(final, (r) => (r.product_slug.startsWith("ingredient:") ? "ingredient" : "product"))
  const droppedLowYield = uniqueCount - eligibleCount

  const report = [
    `# Gap-driven wishlist v2 — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `## Summary`,
    ``,
    `- Path A (pooling-engine-driven thin cells): ${pathACount} candidate queries`,
    `- Path B (empty product + thin ingredient pages): ${pathBCount} candidate queries`,
    `- Total candidates (after dedup): ${uniqueCount}`,
    `- Dropped as low-yield by query-history filter: ${droppedLowYield}`,
    `- Eligible after filtering: ${eligibleCount}`,
    `- Final wishlist (capped at ${MAX_QUERIES_PER_RUN}): ${final.length}`,
    ``,
    `### By priority`,
    ``,
    ...Object.entries(byPriority).map(([k, v]) => `- ${k}: ${v}`),
    ``,
    `### By source path`,
    ``,
    ...Object.entries(bySource).map(([k, v]) => `- ${k}: ${v}`),
    ``,
    `## Query-history-aware deprioritization`,
    ``,
    `Threshold: a (query × cell) attempted >=${MAX_ATTEMPTS_BEFORE_DROP} times with <${MIN_DOWNLOADS_TO_KEEP} successful downloads is dropped from this run.`,
    ``,
    `Audit-log scale: ${queryHistory.attempts.size} (query × cell) histories tracked.`,
    ``,
    `## Top 20 priority queries this run`,
    ``,
    "| Priority | Product/Ingredient × Metal | Query |",
    "|---|---|---|",
    ...final.slice(0, 20).map((r) => `| ${r.gap_priority} | ${r.product_slug} × ${r.metal_species} | ${r.search_query} |`),
    ``,
    `## Coverage rotation`,
    ``,
    `Queries are shuffled with a day-seeded deterministic order, so different cells get priority on different days. Over consecutive days, all eligible cells should receive query-pool attention.`,
    ``,
    `## How this feeds the corpus`,
    ``,
    `Run \`npm run wishlist:fetch\` to consume this CSV. The existing wishlist pipeline:`,
    `1. Reads queries from this file`,
    `2. Hits OpenAlex with each query + the OA-only filter`,
    `3. Downloads matching OA PDFs to \`raw/manual-fetch/auto-fetched/\``,
    `4. Logs decisions to \`data/evidence/wishlist-fetch-audit.csv\` (read by this generator on next run)`,
    ``,
    `Downloaded PDFs are picked up by the autonomy daemon's ingest-marker-batch and ingest-manual-fetch-batch steps on subsequent ticks. The full loop: empty-page detector → wishlist generator (this script) → OpenAlex fetch → PDF download → autonomy daemon ingest → routing audit → empty-page count decreases on next tick.`,
    ``,
    `## v2 changes from v1 (2026-05-18, in response to Karen's "fetching for the same thing yields diminishing returns" observation)`,
    ``,
    `- **Path B added**: empty/thin product and ingredient pages now trigger wishlist queries directly, not just via the pooling-engine output. Closes the 191-empty-product-page gap.`,
    `- **Smart keyword generation**: replaces 15-entry hardcoded keyword map. Now derives keywords from slug tokenization + page title + HMTc-category context modifier + generic safety modifier for any product/ingredient slug.`,
    `- **Query-history-aware deprioritization**: reads wishlist-fetch-audit.csv, drops queries that have run >=${MAX_ATTEMPTS_BEFORE_DROP} times with <${MIN_DOWNLOADS_TO_KEEP} successful downloads. Substitutes alternative queries via the multi-keyword generation per page.`,
    `- **Coverage rotation**: day-seeded deterministic shuffle ensures no cell is permanently starved by always-higher-priority cells.`,
    `- **Per-run cap (${MAX_QUERIES_PER_RUN})**: bounded query volume so single days don't emit unbounded OpenAlex requests.`,
  ].join("\n")
  fs.writeFileSync(reportPath, report, "utf8")
}

// ---------- Helpers ----------

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

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const match = text.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return { raw: "" }
  const fm = { raw: match[1] }
  const fmText = match[1]
  for (const line of fmText.split("\n")) {
    const m = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (m) fm[m[1]] = m[2].trim()
  }
  return fm
}

function parseMetalsList(s) {
  if (!s) return []
  // Strip brackets and split on comma; handle "[Pb, Cd, ...]" form
  const cleaned = s.replace(/^\[|\]$/g, "").trim()
  if (!cleaned) return []
  return cleaned.split(",").map((m) => m.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
}

function shuffleInPlace(arr, seed) {
  // Simple seeded LCG shuffle
  let s = seed
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    const j = s % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
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
