#!/usr/bin/env node
// Parses the wishlist markdown into structured search queries.
//
// Input: raw/manual-fetch/seasonal-geographic-variance/wishlist.md
// Output: data/evidence/wishlist-queries.json
//
// Per wishlist item (unticked checkbox), extract crop, region, period,
// and metal terms heuristically from the bullet text. The structured
// output is consumed by tools/wishlist/find-candidates.mjs which hits
// open-access scholarly APIs.
//
// Parsing is intentionally heuristic; the wishlist is human-edited
// prose. False positives in extraction are tolerated because the
// downstream candidate search uses keyword density, not strict match.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const wishlistPath = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/wishlist.md")
const outputPath = path.join(repoRoot, "data/evidence/wishlist-queries.json")

if (!fs.existsSync(wishlistPath)) {
  console.error(`wishlist not found at ${wishlistPath}`)
  process.exit(1)
}

const text = fs.readFileSync(wishlistPath, "utf8")
const lines = text.split("\n")

// Track current section heading so each query gets categorized.
let currentSection = "Uncategorized"
const queries = []

const CROPS = [
  "rice", "brown rice syrup", "rice protein", "basmati", "jasmine rice",
  "cocoa", "cacao", "chocolate", "sunflower", "carrot", "carrots", "sweet potato",
  "spinach", "kale", "leafy green", "wheat", "oat", "oats", "quinoa",
  "apple juice", "grape juice", "tea", "matcha", "coffee", "kombucha",
  "infant formula", "infant cereal", "baby food", "fish", "tuna",
]
const REGIONS = [
  "california", "texas", "arkansas", "louisiana", "mississippi", "michigan",
  "washington", "oregon", "idaho", "arizona", "colorado",
  "us", "united states", "usa", "us midwest", "pacific northwest", "midwest",
  "india", "pakistan", "thailand", "italy", "po valley", "japan", "china",
  "côte d'ivoire", "cote d'ivoire", "ghana", "nigeria", "cameroon",
  "ecuador", "peru", "colombia", "dominican republic",
  "bulgaria", "ukraine", "russia",
  "europe", "european union", "eu", "spain", "france", "germany",
  "australia", "canada", "saskatchewan", "manitoba", "alberta",
  "sri lanka", "kenya", "argentina", "bolivia", "puerto rico",
  "south asia", "west africa", "latin america", "andean", "andes",
  "asturias", "normandy", "uji", "nishio", "shizuoka", "punjab",
  "saudi arabia", "bangladesh", "vietnam", "south korea", "taiwan",
]
// Metal vocabulary keyed by canonical search term. Each entry's `aliases`
// are the surface forms found in wishlist prose (case-insensitive, must
// match on word boundaries to avoid false-positive on common English words
// like "as" or single letters). The `search_term` is the long-form name
// preferred for OpenAlex / PubMed queries because full-text indexes hit on
// full names more reliably than codes.
const METAL_SPECS = [
  { search_term: "lead", aliases: ["lead", "Pb"] },
  { search_term: "cadmium", aliases: ["cadmium", "Cd"] },
  { search_term: "inorganic arsenic", aliases: ["inorganic arsenic", "iAs"] },
  { search_term: "arsenic", aliases: ["arsenic", "tAs", "total arsenic"] },
  { search_term: "methylmercury", aliases: ["methylmercury", "MeHg"] },
  { search_term: "mercury", aliases: ["mercury", "tHg", "total mercury"] },
  { search_term: "nickel", aliases: ["nickel", "Ni"] },
  { search_term: "aluminum", aliases: ["aluminum", "aluminium", "Al"] },
  { search_term: "hexavalent chromium", aliases: ["hexavalent chromium", "Cr-VI", "Cr(VI)"] },
  { search_term: "chromium", aliases: ["chromium", "Cr"] },
  { search_term: "tin", aliases: ["tin", "Sn"] },
  { search_term: "antimony", aliases: ["antimony", "Sb"] },
  { search_term: "uranium", aliases: ["uranium"] }, // "U" alone is too ambiguous
  { search_term: "heavy metals", aliases: ["heavy metal", "heavy metals", "toxic metal", "toxic metals", "trace metal", "trace metals"] },
]
const PERIODS = [
  "harvest", "harvest year", "season", "seasonal", "el niño", "el nino",
  "la niña", "la nina", "drought", "monsoon", "pre-monsoon", "post-monsoon",
  "wet year", "dry year", "spring", "summer", "fall", "winter",
  "multi-year", "time series", "year over year",
]

function extractTerms(text, vocabulary) {
  // Word-boundary matching so "as" doesn't match "academic", "us" doesn't
  // match "USDA" (which it would if we used includes()), etc.
  const lower = text.toLowerCase()
  const hits = new Set()
  for (const term of vocabulary) {
    const re = new RegExp(`\\b${escapeRegex(term.toLowerCase())}\\b`)
    if (re.test(lower)) hits.add(term.toLowerCase())
  }
  return [...hits]
}

function extractMetals(text) {
  // For metals, return both the canonical search term (full name) and the
  // surface forms found. The search query uses the canonical term; the
  // surface-form list is preserved in `extracted.metals` for relevance
  // scoring in find-candidates.mjs.
  const lower = text.toLowerCase()
  const canonical = new Set()
  const surface = new Set()
  for (const spec of METAL_SPECS) {
    for (const alias of spec.aliases) {
      const re = new RegExp(`\\b${escapeRegex(alias.toLowerCase())}\\b`)
      if (re.test(lower)) {
        canonical.add(spec.search_term)
        surface.add(alias.toLowerCase())
      }
    }
  }
  return { canonical: [...canonical], surface: [...surface] }
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

let queryIndex = 0
for (let lineNum = 0; lineNum < lines.length; lineNum += 1) {
  const raw = lines[lineNum]
  const line = raw.trim()

  const headingMatch = line.match(/^##+ (.+)$/)
  if (headingMatch) {
    currentSection = headingMatch[1].trim()
    continue
  }

  // Unticked checkbox items only.
  const itemMatch = line.match(/^- \[ \] (.+)$/)
  if (!itemMatch) continue

  const item = itemMatch[1].trim()
  queryIndex += 1

  const crops = extractTerms(item, CROPS)
  const regions = extractTerms(item, REGIONS)
  const metalsExtraction = extractMetals(item)
  const metals = metalsExtraction.surface
  const metalSearchTerms = metalsExtraction.canonical
  const periods = extractTerms(item, PERIODS)

  // Build a search query. Core: crop + canonical metal name + first region
  // (regions are the discriminating axis; OpenAlex full-text indexes a paper's
  // body so region names sit in the abstract). Full: everything for broader
  // recall.
  const coreTerms = [
    ...new Set([
      ...crops,
      ...metalSearchTerms,
      ...regions.slice(0, 2), // up to two regions; more dilutes precision
    ]),
  ].filter(Boolean)
  const allTerms = [...new Set([...crops, ...regions, ...metalSearchTerms, ...periods])].filter(Boolean)

  queries.push({
    id: `WL-${String(queryIndex).padStart(4, "0")}`,
    section: currentSection,
    bullet_text: item,
    line_number: lineNum + 1,
    extracted: {
      crops,
      regions,
      metals, // surface forms found in the bullet (e.g., "iAs", "lead")
      metal_search_terms: metalSearchTerms, // canonical full names for the search
      periods,
    },
    search_query_core: coreTerms.join(" "),
    search_query_full: allTerms.join(" "),
  })
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(
  outputPath,
  JSON.stringify(
    {
      schema: "hmi.wishlist-queries.v1",
      generated_from: "raw/manual-fetch/seasonal-geographic-variance/wishlist.md",
      generated_at: new Date().toISOString(),
      query_count: queries.length,
      queries,
    },
    null,
    2,
  ) + "\n",
  "utf8",
)

console.log(`Parsed ${queries.length} wishlist queries to ${outputPath}.`)
console.log(`Top sections by query count:`)
const counts = new Map()
for (const q of queries) {
  counts.set(q.section, (counts.get(q.section) ?? 0) + 1)
}
for (const [section, count] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${section}: ${count}`)
}
