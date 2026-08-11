#!/usr/bin/env node
// Auto-fetches open-access papers matching each wishlist query. The model
// (this script) decides yes/no itself based on relevance score, open-access
// status, and duplicate check against wiki/sources/; it does not ask Karen
// to approve each row. High-confidence matches are downloaded immediately
// into the manual-fetch staging folder. The output CSV is an audit log of
// what got downloaded and why, not an approval queue.
//
// Decision rules:
//   - already-indexed (DOI or title match against wiki/sources/) → skip
//   - relevance_score >= 3 AND has OA URL AND not already-indexed → download
//   - relevance_score 1-2 → log for Karen's optional review, do not download
//     (these are weak matches; preserving them in the audit lets Karen
//     redirect if a borderline paper is actually important)
//   - relevance_score 0 → skip silently (no keyword overlap)
//
// Input: data/evidence/wishlist-queries.json (from parse-wishlist.mjs)
// Output:
//   - data/evidence/wishlist-fetch-audit.csv (audit log)
//   - raw/manual-fetch/seasonal-geographic-variance/auto-fetched/*.pdf
//
// No API keys required. Polite use: User-Agent set, 250ms between API calls,
// 500ms between PDF downloads.

import fs from "node:fs"
import path from "node:path"
import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"

const repoRoot = process.cwd()
// Query source: defaults to the wishlist generator's output, but accepts an
// override so other gap pipelines (e.g. tools/autonomy/lever-gaps.mjs) can feed
// their own queries through the same fetch/dedupe/score/stage machinery without
// racing the wishlist generator that overwrites the default file each tick.
//   --queries=<path>   or   HMI_QUERIES_PATH=<path>
const _queriesArg = process.argv.slice(2).find((a) => a.startsWith("--queries="))
const queriesPath = _queriesArg
  ? path.resolve(repoRoot, _queriesArg.slice("--queries=".length))
  : process.env.HMI_QUERIES_PATH
    ? path.resolve(repoRoot, process.env.HMI_QUERIES_PATH)
    : path.join(repoRoot, "data/evidence/wishlist-queries.json")
const auditPath = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
const stagingDir = path.join(repoRoot, "raw/manual-fetch/seasonal-geographic-variance/auto-fetched")
const sourcesIndexPath = path.join(repoRoot, "wiki/sources")

const OPENALEX_BASE = "https://api.openalex.org/works"
// NCBI E-utilities — PubMed source (added 2026-05-28 per HMI deliverable
// loop #2: "queries PubMed, OpenAlex, and other open-source corpora").
// The HMI-19 adapter at tools/discovery/sources/pubmed.ts has the same
// upstream call shape; we don't import it here because find-candidates.mjs
// is plain Node ESM and pubmed.ts is TypeScript with a different output
// shape (HMI-9 manifest rows, not wishlist staging PDFs). Each adapter is
// the right tool for its caller — the fetcher needs PMC OA fulltext PDFs
// in the existing staging dir; HMI-19 needs typed candidate rows for the
// dual-model extractor. Both run with no API key required; if NCBI_API_KEY
// is set in the env, the rate cap rises from ~3 to ~10 req/sec.
const ESEARCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
const EFETCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi"
const PMC_FULLTEXT_URL = "https://www.ncbi.nlm.nih.gov/pmc/articles" // /<PMCID>/pdf/
const NCBI_API_KEY = process.env.NCBI_API_KEY || ""
const PUBMED_ENABLED = (process.env.HMI_PUBMED_ENABLED ?? "1") !== "0"
const USER_AGENT = "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)"
// OpenAlex grants the "polite pool" (far higher, more stable rate limits) ONLY
// when you pass a mailto. Without it you're in the common pool and get HTTP 429
// under any sustained load — which is exactly what silently killed fetch (608
// queries/run, every one 429'd, 0 downloads, for days). The User-Agent email is
// NOT enough; OpenAlex keys off the mailto query param.
const MAILTO = process.env.HMI_FETCH_MAILTO || "karen@paleofoundation.com"
// 429 circuit-breaker: once the API starts rate-limiting, hammering through it
// only deepens the throttle and wastes the whole budget producing nothing. Back
// off exponentially, and after MAX_CONSECUTIVE_429 give up this run cleanly —
// the cap resets and the next run (with mailto) succeeds.
const MAX_CONSECUTIVE_429 = 6
let consecutive429 = 0
// OpenAlex free tier is 10,000 requests/DAY (x-ratelimit-limit). The old code
// fired 600-3000 queries/run across dozens of runs (~24,000+/day), blew the cap
// in hours, then got 429'd the rest of the day. Read x-ratelimit-remaining off
// each response and stop querying OpenAlex once we're near the floor, keeping a
// reserve so a single run can never exhaust the day. PubMed (separate quota)
// keeps producing after OpenAlex stops for the day.
const OPENALEX_DAILY_RESERVE = Number(process.env.HMI_OPENALEX_RESERVE || "800")
let openalexExhausted = false
// Sprint mode: 8 → 25 candidates per OpenAlex query so each query produces
// more material. Combined with concurrent fetches below, throughput target
// is ~200-500 PDFs per fetch run.
const PER_QUERY_LIMIT = 25
const FROM_YEAR = 2015
const API_DELAY_MS = 150
const DOWNLOAD_DELAY_MS = 200
// Sprint mode 2026-05-25: 5 concurrent PDF fetches per query batch
// (instead of strict sequential). OpenAlex polite-pool allows 10 req/sec
// globally; per-publisher concurrency is implicitly limited by the
// candidate diversity within a single OpenAlex result set.
const CONCURRENT_FETCHES = 5
// Europe PMC PDF rescue (added 2026-06-09). MDPI (10.3390/*) was losing ~44% of
// strong candidates: the publisher PDF 403s our UA, and OpenAlex hands us the
// PMC interstitial (/pmc/articles/PMCxxxx/pdf/) which returns an HTML bot-page,
// not the binary. Europe PMC mirrors PMC and serves the real PDF at
// europepmc.org/api/getPdf?pmcid=PMCxxxx in one hop with content-type
// application/pdf — empirically verified against the failing audit rows. This
// rescues ANY PMC-deposited paper stuck behind a PMC interstitial, not just MDPI.
const EUROPEPMC_GETPDF = "https://europepmc.org/api/getPdf" // ?pmcid=PMCxxxx
const EUROPEPMC_SEARCH = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"
// Headless last resort for the residual case (MDPI papers with no PMC deposit,
// whose publisher PDF needs a real browser to clear Cloudflare's JS challenge).
// OFF by default — in-scope MDPI clusters in PMC-indexed journals, so this is
// ~0% of observed losses and not worth a heavy dependency. When enabled, the
// browser runs in an isolated child process that is hard-killed on timeout, so
// it can never stall the time-boxed fetch stage (CLAUDE.md: FRANK safety).
const MDPI_HEADLESS_ENABLED = process.env.HMI_MDPI_HEADLESS === "1"
const MDPI_HEADLESS_TIMEOUT_MS = parseInt(process.env.HMI_MDPI_HEADLESS_TIMEOUT_MS || "45000", 10)
const MDPI_HEADLESS_SCRIPT = fileURLToPath(new URL("./mdpi-headless.mjs", import.meta.url))
// Threshold history:
//   2026-05-19: 3 → 1 (was over-rejecting; negative-keyword filter was the
//                       real precision gate, raw score 1+ worth checking).
//   2026-05-25 morning: 1 → 2 (after 7% TP rate; combined with title.search
//                       switch the threshold=2 was over-strict, 1 PDF in
//                       10 min of fetching).
//   2026-05-25 evening: 2 → 1 (back off; the title.search switch alone is
//                       the bigger precision lever, threshold=2 stacked on
//                       top swung too far. Iterate one knob at a time).
//   2026-05-28: 1 → 2 (auto-fetched-hygiene-2026-05-27 showed 148/167 =
//                       88.6% waste rate. Added FOOD_DOMAIN_HARD_GATE
//                       below — a paper must contain at least one food-
//                       domain term to pass, regardless of metal hits.
//                       Threshold raised back to 2 to stack with the gate.)
const DOWNLOAD_THRESHOLD = 2

// Food-domain hard gate (2026-05-28). The wishlist queries are food-oriented
// but OpenAlex returns plenty of papers that match metal + region without
// being about food (sediment chemistry, drinking-water contamination, blood
// biomonitoring, occupational exposure, soil-metal bioavailability, etc.).
// We require AT LEAST ONE explicit food-domain term match before fetching.
// If a candidate's title+abstract has zero food-domain hits, it's rejected
// regardless of how well it matches the metal/region terms. This catches the
// "no-heavy-metal-data" (63 PDFs) + "not-food-occurrence" (49 PDFs) skip
// buckets at the source instead of paying the download + ingest classify
// cost downstream.
const FOOD_DOMAIN_TERMS = [
  // generic food/diet
  "food", "diet", "dietary", "consumption", "consumed", "consumer", "consumers",
  "ingest", "ingested", "intake", "meal", "meals", "menu", "edible",
  "ready-to-eat", "ready to eat", "rte ",
  // commodity classes
  "cereal", "grain", "grains", "rice", "wheat", "oat", "oats", "barley", "corn",
  "maize", "sorghum", "millet", "quinoa", "buckwheat",
  "vegetable", "vegetables", "fruit", "fruits", "leafy", "tuber", "root crop",
  "potato", "carrot", "tomato", "lettuce", "spinach", "cabbage", "broccoli",
  "apple", "banana", "berry", "berries", "pear", "grape", "citrus",
  "meat", "poultry", "beef", "pork", "chicken", "lamb", "veal",
  "fish", "seafood", "shellfish", "tuna", "salmon", "shrimp", "mollusc",
  "dairy", "milk", "cheese", "yogurt", "yoghurt", "butter", "cream",
  "egg ", "eggs ",
  "infant formula", "baby food", "baby foods", "infant cereal",
  "supplement", "supplements", "vitamin", "vitamins",
  "spice", "spices", "herb", "herbs", "tea", "coffee", "cocoa", "chocolate",
  "wine", "beer", "juice", "beverage", "beverages", "drinking water",
  "oil ", "oils ", "olive oil", "vegetable oil",
  "vinegar", "ketchup", "sauce", "condiment",
  "honey", "syrup", "sugar",
  "nut ", "nuts ", "almond", "walnut", "peanut", "legume", "bean ", "beans ",
  // food-system contexts
  "market", "supermarket", "retail", "consumer market", "store-bought",
  "total diet study", "tds", "market basket",
  "fao", "codex alimentarius", "efsa", "fda food", "usda",
  "food safety", "food contamination", "food quality", "food chain",
  "food matrix", "food sample", "food samples", "foodstuff", "foodstuffs",
  "agricultural product", "agricultural products",
  "human consumption", "for consumption",
  // Dietary supplements (Cat 16)
  "dietary supplement", "dietary supplements", "multivitamin", "multivitamins",
  "vitamin supplement", "mineral supplement", "fish oil", "omega-3", "omega-6",
  "probiotic", "probiotics", "prebiotic", "amino acid supplement",
  "protein powder", "collagen", "herbal supplement", "botanical supplement",
  "softgel", "capsule", "gummy supplement", "supplement bar",
  "nutraceutical", "USP supplement", "NSF supplement", "DSHEA",
  // Pet food + supplements (Cat 17, 18)
  "pet food", "dog food", "cat food", "puppy food", "kitten food",
  "kibble", "dry pet food", "wet pet food", "raw pet food", "freeze-dried pet",
  "pet treat", "pet treats", "dental chew", "pet topper", "pet supplement",
  "veterinary nutraceutical", "aafco", "fediaf",
  // Food-contact + kitchenware (Cat 7, 23) — these touch food, so food-domain
  "cookware", "bakeware", "kitchenware", "tableware", "food packaging",
  "food contact material", "food contact substance", "21 cfr 174",
  "ceramicware", "glassware", "stoneware", "earthenware",
  "lead glaze", "glazed ceramic", "food storage container",
  "migration into food", "leaching into food", "kitchen utensil",
]

function foodDomainScore(haystack) {
  let hits = 0
  for (const term of FOOD_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Durable goods + textiles domain terms (Category 8/9/10 — children's
// products, toys, clothing, cribs, mattresses, car seats, etc.). The
// food-domain gate added 2026-05-28 silently rejected every paper in
// these categories because the abstracts don't mention "food" or "diet"
// terms. Cat 10 was at 0 sources across the entire category as a
// direct result. This separate gate accepts papers in the durable-goods
// scope.
const DURABLE_GOODS_DOMAIN_TERMS = [
  // children's products + textiles
  "toy", "toys", "children's product", "children product", "infant product",
  "baby product", "child safety", "infant safety", "juvenile product",
  "crib", "bassinet", "stroller", "car seat", "carseat", "high chair",
  "play yard", "playpen", "swing", "bouncer", "walker", "rocker",
  "mattress", "pillow", "blanket", "sleep sack", "swaddle", "bedding",
  "bib", "burp cloth",
  "clothing", "garment", "textile", "textiles", "fabric", "apparel",
  "onesie", "pajama", "pajamas", "sleepwear",
  "shoe", "shoes", "footwear",
  "diaper", "diapers", "wipes",
  "carrier", "sling", "wrap",
  // toy/durable-goods materials
  "paint", "painted", "coating", "varnish", "lacquer", "pigment", "dye",
  "plastic", "pvc", "polymer", "vinyl", "rubber", "silicone", "latex",
  "metal component", "metal part", "metal clasp", "snap", "zipper",
  "fastener", "buckle", "rivet",
  "leather", "tanning", "tanned",
  // exposure pathways relevant to durable goods
  "mouthing", "hand-to-mouth", "ingestion exposure", "dermal exposure",
  "skin contact", "skin absorption", "migration", "leaching", "extractable",
  "bioaccessible", "bioaccessibility",
  // regulatory + safety framing
  "consumer product", "consumer products", "product safety",
  "CPSC", "CPSIA", "ASTM F963", "EN 71", "EN-71", "EN71",
  "16 CFR 1303", "lead in paint", "lead paint",
  "REACH", "SVHC", "restricted substance",
  "toy safety", "product recall", "recall",
  // common Cat 10 paper phrasing
  "infant clothing", "children clothing", "childcare article", "childcare articles",
  "nursery product", "nursery products",
  "flame retardant", "flame-retardant", "antimony oxide",
]

function durableGoodsDomainScore(haystack) {
  let hits = 0
  for (const term of DURABLE_GOODS_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Personal-care domain terms (Categories 2, 13, 14, 15, 20 — cosmetics
// leave-on, cosmetics rinse-off, oral care, feminine hygiene, children's
// personal care). Distinct from food because primary exposure is dermal /
// oral-mucosal / inhalation, not ingestion; distinct from durable goods
// because the matrix is a chemical formulation, not a manufactured object.
const PERSONAL_CARE_DOMAIN_TERMS = [
  // Cosmetics (Cat 2, 13, 14)
  "cosmetic", "cosmetics", "makeup", "make-up", "make up",
  "lipstick", "lip balm", "lip gloss", "lip stain", "mascara",
  "eyeshadow", "eye shadow", "eyeliner", "eye liner",
  "foundation", "concealer", "blush", "bronzer", "highlighter",
  "lotion", "moisturizer", "moisturiser", "cream", "balm", "salve", "serum",
  "shampoo", "conditioner", "hair dye", "hair color", "hair colour",
  "hair gel", "hair spray", "leave-in conditioner",
  "deodorant", "antiperspirant", "perfume", "fragrance", "cologne",
  "sunscreen", "sunblock", "spf", "uv filter",
  "soap", "body wash", "facial wash", "face wash", "cleanser",
  "henna", "kohl", "surma", "sindoor", "kajal",
  "talc", "talcum",
  "skin care", "skincare", "skin-care", "skin lightening", "skin whitening",
  "leave-on cosmetic", "rinse-off cosmetic",
  "personal care", "personal-care", "personal hygiene", "personal-hygiene",
  "nail polish", "nail varnish", "nail lacquer",
  // Oral care (Cat 20)
  "toothpaste", "tooth paste", "mouthwash", "mouth rinse", "oral rinse",
  "dental floss", "interdental cleaner", "toothbrush", "tooth brush",
  "tongue cleaner", "tongue scraper", "denture cleaner", "denture adhesive",
  "whitening strip", "whitening product", "oral irrigator", "water flosser",
  "breath freshener", "breath mint", "oral care",
  // Feminine care (Cat 15)
  "tampon", "tampons", "menstrual pad", "menstrual pads", "sanitary pad",
  "sanitary napkin", "menstrual cup", "menstrual disc", "panty liner",
  "period underwear", "period panty", "intimate wash", "intimate cleanser",
  "feminine wipe", "feminine wash", "feminine deodorant", "vaginal douche",
  "feminine hygiene", "menstrual hygiene",
  // Children's personal care (Cat 2 specifics)
  "baby lotion", "baby oil", "baby powder", "baby shampoo", "baby wash",
  "baby wipe", "baby wipes", "diaper cream", "diaper rash",
  "baby sunscreen", "children's sunscreen", "kids sunscreen",
  "children cosmetic", "children's cosmetic", "children makeup",
  "children nail polish", "face paint", "children lip balm",
  // Exposure pathways
  "dermal absorption", "skin absorption", "skin penetration",
  "oral mucosal absorption", "transmucosal", "lip ingestion",
  // Regulatory framing
  "FDA cosmetic", "EU cosmetic", "1223/2009",
  "Health Canada cosmetic", "cosmetic ingredient hotlist",
  "ADA accepted", "ISO 11609", "ISO 18193",
]

function personalCareDomainScore(haystack) {
  let hits = 0
  for (const term of PERSONAL_CARE_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Cleaning products domain (Categories 6, 12, 19 — household cleaners,
// dishwashing, laundry detergents + fabric-contact products).
const CLEANING_DOMAIN_TERMS = [
  // Household cleaners (Cat 6, 12)
  "cleaning product", "cleaning products", "household cleaner", "household cleaners",
  "detergent", "all-purpose cleaner", "multi-surface cleaner",
  "disinfectant", "sanitizer", "bleach", "chlorine bleach",
  "stain remover", "drain cleaner", "oven cleaner", "toilet cleaner",
  "glass cleaner", "tile cleaner", "floor cleaner", "wood cleaner",
  "household chemical", "consumer chemical",
  // Dishwashing (Cat 12)
  "dishwashing", "dish soap", "dish detergent", "dishwasher detergent",
  "dishwasher pod", "rinse aid",
  // Laundry + fabric-contact (Cat 19)
  "laundry detergent", "laundry pod", "fabric softener", "dryer sheet",
  "stain remover", "pre-treater", "pre-wash", "color-safe bleach",
  "anti-static", "anti-wrinkle", "wrinkle release", "fabric protectant",
  "fabric refresher", "fabric finish", "starch", "sizing",
  "laundry booster", "laundry additive",
  // Regulatory framing
  "EPA Safer Choice", "EU Detergents Regulation", "Green Seal cleaning",
]

function cleaningDomainScore(haystack) {
  let hits = 0
  for (const term of CLEANING_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Inhalation-adjacent products domain (Category 22 — scented candles,
// incense, air fresheners, fragrance diffusers, wax melts, room sprays).
// Exposure pathway is inhalation of emissions / particulates / volatiles
// from combustion or evaporation. Distinct from personal-care (no direct
// dermal application) and from cleaning (not applied to surfaces for
// removal of soil) and from durable-goods (the active product is the
// fragrance compound, not the container).
const INHALATION_DOMAIN_TERMS = [
  "scented candle", "candle emission", "candle smoke", "candle particulate",
  "incense", "incense stick", "incense cone", "incense smoke", "incense emission",
  "air freshener", "air-freshener", "air fragrance",
  "fragrance diffuser", "reed diffuser", "essential oil diffuser",
  "nebula diffuser", "plug-in air freshener", "wall plug-in",
  "wax melt", "wax warmer", "wax cube", "wax tart",
  "potpourri", "sachet",
  "room spray", "room fragrance", "fabric spray",
  "indoor air quality", "indoor air emission", "indoor air pollution",
  "VOC emission", "volatile organic compound", "particulate matter emission",
  "combustion particulate", "burning emission",
  "inhalation exposure", "respiratory exposure", "inhaled particulate",
  "fragrance emission", "scented product emission",
  "ASTM E2952", "candle safety",
]

function inhalationDomainScore(haystack) {
  let hits = 0
  for (const term of INHALATION_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Research chemicals / peptides / SARMs domain terms (added 2026-06-08).
// Black-market and grey-market injectable peptides, SARMs, and compounded
// "research chemicals" are an in-scope consumer-product category for HMTc
// (heavy-metal contamination of unregulated vials), but none of the gates
// above had terms for them — so peptide-contamination queries defaulted to the
// food gate and were rejected at the source. This gate closes that hole.
const RESEARCH_CHEMICAL_DOMAIN_TERMS = [
  "peptide", "peptides", "research peptide", "compounded peptide",
  "sarm", "sarms", "selective androgen receptor modulator",
  "research chemical", "research chemicals", "grey market", "gray market",
  "black market peptide", "nootropic", "nootropics",
  "injectable", "injectable vial", "lyophilized", "lyophilised", "reconstituted vial",
  "semaglutide", "tirzepatide", "retatrutide", "liraglutide",
  "bpc-157", "bpc157", "tb-500", "tb500", "cjc-1295", "ipamorelin",
  "melanotan", "pt-141", "glp-1 agonist", "growth hormone secretagogue",
  "anabolic", "prohormone", "designer steroid",
]

function researchChemicalDomainScore(haystack) {
  let hits = 0
  for (const term of RESEARCH_CHEMICAL_DOMAIN_TERMS) {
    if (haystack.includes(term)) hits++
  }
  return hits
}

// Domain-aware gate. Returns the appropriate `<domain>Hits` count given
// the query's tagged domain. Wishlist rows tagged `domain: "food"` (or
// untagged, defaulting to food) use FOOD_DOMAIN_TERMS; `durable-goods`
// uses DURABLE_GOODS_DOMAIN_TERMS; etc. Untagged queries default to food
// for backwards-compat with the dominant query shape.
function domainScore(haystack, domain) {
  switch ((domain || "food").toLowerCase()) {
    case "durable-goods": return durableGoodsDomainScore(haystack)
    case "personal-care": return personalCareDomainScore(haystack)
    case "cleaning": return cleaningDomainScore(haystack)
    case "research-chemical": return researchChemicalDomainScore(haystack)
    case "regulatory":
      // Regulatory anchor queries can match ANY domain — an FDA Closer to
      // Zero paper is food, a CPSC paper is durable-goods, a peptide-vial
      // recall is research-chemical, etc. Accept if ANY domain matches.
      return Math.max(
        foodDomainScore(haystack),
        durableGoodsDomainScore(haystack),
        personalCareDomainScore(haystack),
        cleaningDomainScore(haystack),
        inhalationDomainScore(haystack),
        researchChemicalDomainScore(haystack),
      )
    case "food":
    default: return foodDomainScore(haystack)
  }
}

// Metal alias table — mirrors METAL_SPECS in tools/wishlist/parse-wishlist.mjs.
// Used to score paper abstracts against ALL synonyms of a metal, not just the
// canonical search term. Without this, a paper saying "Pb levels" wouldn't
// score against a query whose extracted metal is "lead".
const METAL_ALIASES = {
  "lead": ["lead", "pb"],
  "cadmium": ["cadmium", "cd"],
  "inorganic arsenic": ["inorganic arsenic", "ias"],
  "arsenic": ["arsenic", "tas", "total arsenic"],
  "methylmercury": ["methylmercury", "mehg"],
  "mercury": ["mercury", "thg", "total mercury"],
  "nickel": ["nickel", "ni"],
  "aluminum": ["aluminum", "aluminium", "al"],
  "hexavalent chromium": ["hexavalent chromium", "cr-vi", "cr(vi)"],
  "chromium": ["chromium", "cr"],
  "tin": ["tin", "sn"],
  "antimony": ["antimony", "sb"],
  "uranium": ["uranium"],
  "heavy metals": ["heavy metal", "heavy metals", "toxic metal", "toxic metals", "trace metal", "trace metals"],
}
function expandMetalAliases(metalSearchTerms) {
  const expanded = new Set()
  for (const t of metalSearchTerms || []) {
    const aliases = METAL_ALIASES[t.toLowerCase()] || [t]
    for (const a of aliases) expanded.add(a)
  }
  return [...expanded]
}

// 2026-05-28 fix: long-form metal-name gate. Two-letter symbols (Cd, Pb, Hg,
// Ni, As, Sn, Sb, Cr) match too many false positives — "Cd" in a Portuguese
// abstract about Chagas disease (doença de Chagas), "Hg" as the SI prefix in
// "Hg-Co" alloy materials science, "Pb" as Pubmed identifier in a citation
// list, "Ni" as the chemical-symbol-shaped indefinite article in Tagalog,
// etc. The previous filter scored these as positive metal hits and let
// papers through to download. The Cat 11 "auto-game-meats-cd-product-2016-
// 10-1590-1980-..." paper that the 2026-05-28T22Z parallel test rejected
// at the ingest stage (Chagas disease systematic review) was a direct
// consequence: the OpenAlex query matched "Cd" + "meat" in the abstract,
// passed download, then claude --print spent 60+ seconds reading 2.3 MB
// of off-topic PDF before STOPping. By requiring at least one chemistry-
// name term (the long form, never the symbol) to appear in title-or-
// abstract, we reject the false positive at the fetch stage instead of
// burning ingest tokens.
const LONG_FORM_METAL_NAMES = [
  "cadmium", "lead", "mercury", "arsenic", "nickel", "aluminum", "aluminium",
  "chromium", "tin", "antimony", "uranium",
  "methylmercury", "hexavalent chromium", "inorganic arsenic", "total arsenic",
  "total mercury", "heavy metal", "heavy metals", "toxic metal", "toxic metals",
  "trace metal", "trace metals", "trace element", "trace elements",
]
function hasLongFormMetalName(haystack) {
  for (const term of LONG_FORM_METAL_NAMES) {
    // Word-boundary check so "chromium" doesn't match "polychromium"
    const re = new RegExp(`\\b${term}\\b`, "i")
    if (re.test(haystack)) return true
  }
  return false
}

// Negative-keyword prefilter. Papers with these phrases in title/abstract
// are predominantly sensor methodology, materials science, plant molecular
// biology, AMR studies, or clinical case reports — papers that mention
// metals but do not report food-matrix concentration data. We score them
// down so they fall below DOWNLOAD_THRESHOLD even if positive keywords hit.
// Audited via wishlist-fetch-audit.csv; rejections are logged with reason.
const NEGATIVE_KEYWORDS = [
  // sensor/biosensor methodology
  "biosensor", "fluorescence sensor", "colorimetric sensor", "electrochemical sensor",
  "voltammetric", "amperometric", "potentiometric sensor", "fluorometric",
  "LIBS", "laser-induced", "ratiometric sensor", "chemosensor",
  "nanoparticle sensor", "quantum dot sensor", "carbon dot sensor", "aptamer sensor",
  // materials science contexts
  "perovskite", "photovoltaic", "solar cell", "battery", "catalyst",
  "MOF synthesis", "metal-organic framework", "nanocomposite synthesis",
  "thin-film", "thin film transistor", "TFT", "coffee-ring", "coffee ring effect",
  // plant molecular biology / experiment contexts
  "transcriptomic", "QTL mapping", "gene expression analysis", "transgenic",
  "stress tolerance", "hydroponic",
  // NOTE: "phytoextraction"/"phytoremediation" REMOVED 2026-06-18 — field
  // remediation of cropland is IN SCOPE (soil-to-plant-transfer hub, remediation
  // pages); they were miscategorized here as molecular-biology lab contexts.
  "CRISPR", "rhizosphere", "metallothionein gene", "transporter gene",
  "salinity stress", "abiotic stress", "antioxidant defense",
  // AMR / microbiology contexts
  "antimicrobial resistance", "antibiotic resistance gene", "AMR",
  "metal resistance gene", "biofilm formation", "Salmonella isolates",
  // clinical case reports / pathology / disease epidemiology
  "case report", "case series", "fatty liver", "acute kidney injury",
  "hepatology", "nephrology", "renal failure", "intoxication case",
  "bladder cancer", "epidemiology of", "case-control study", "cohort study",
  "covid-19", "stress fracture", "lifestyle intervention",
  // toxicology mechanism / protective effect (not occurrence)
  "protective effect", "hepatoprotective", "nephroprotective",
  "antioxidant activity", "oxidative stress", "apoptosis",
  "induced toxicity", "ameliorate", "ameliorative",
  "DNA damage", "lipid peroxidation",
  // adsorption / removal / remediation (using food as adsorbent, not measuring food)
  "adsorbent", "adsorption", "biosorption", "biosorbent",
  "biochar", "activated carbon", "chitosan composite",
  "removal of heavy metals", "removal of lead", "removal of cadmium",
  "wastewater treatment", "effluent treatment", "leachate",
  // NOTE: "remediation of" REMOVED 2026-06-18 — over-broad; it matched in-scope
  // soil/crop remediation papers, not just food-as-adsorbent water treatment.
  "chelation therapy", "chelating agent",
  // biomonitoring / human-sample studies (blood/urine/hair, not food matrix)
  "biomonitoring", "blood lead level", "blood cadmium",
  "maternal whole blood", "hair sample", "urine sample",
  // NOTE: "human exposure assessment" + "dietary exposure assessment" REMOVED
  // 2026-06-18 — exposure assessment is an in-scope lane (scope-manifest.json).
  // NOTE: the review/secondary-literature cluster (": a review",
  // ": a systematic review", "a meta-analysis", "systematic review of",
  // "scoping review", "narrative review") was REMOVED 2026-06-18 — systematic
  // reviews and meta-analyses are A/B-tier evidence (Part 13), in scope.
  // pure ecology / non-food applications
  // NOTE: "mining tailings remediation" + "soil contamination assessment"
  // REMOVED 2026-06-18 — in-scope upstream remediation / soil-burden context.
  "sediment ecology", "bioindicator species",
  // NOTE: "soil microbial community" REMOVED 2026-06-18 — microbiome is in-scope
  // (federates to WikiBiome); scope-manifest.json in_scope.microbiome.
  // water / drinking-water / occupational / air — major skip categories per
  // auto-fetched-hygiene-2026-05-27 (49 not-food-occurrence skips).
  // Drinking water bottled-for-consumption studies are sometimes legitimate
  // (see FOOD_DOMAIN_TERMS) but environmental water-quality assessments are not.
  "groundwater contamination", "drinking water quality",
  "surface water", "river water", "river sediment", "lake sediment",
  "estuarine sediment", "marine sediment", "coastal sediment",
  "occupational exposure", "workplace exposure", "smelter workers",
  "battery workers", "lead-acid", "battery recycling",
  "air pollution", "particulate matter", "pm2.5 exposure",
  // NOTE: "atmospheric deposition" REMOVED 2026-06-18 — atmospheric deposition
  // onto cropland is an in-scope lane (scope-manifest.json).
  "fly ash", "incinerator", "indoor dust", "household dust", "settled dust",
  "e-waste", "electronic waste", "wastewater", "sewage sludge",
  // NOTE: the soil-to-plant-transfer cluster ("soil-to-plant transfer",
  // "soil-plant transfer", "transfer factor", "bioaccumulation factor",
  // "translocation factor") was REMOVED 2026-06-18. It is the in-scope upstream
  // soil->plant mechanism literature the soil-to-plant-transfer hub is built to
  // hold; excluding it contradicted CLAUDE.md inclusion-by-default scope.
  // veterinary / wildlife / aquaculture-environment (not retail food)
  "wild bird", "wild mammal", "marine mammal", "wildlife exposure",
  "veterinary drug", "veterinary residue", "aquaculture environment",
  // nutrition reviews not specific to contamination
  "nutritional value of", "nutritional composition",
  "tea drinking culture", "tea ceremony",
  // animal-experiment-only (not retail food)
  "rats fed", "mice fed", "rabbits exposed", "broiler trial",
  "feeding trial", "experimental diet",
]

function negativeScore(haystack) {
  let penalty = 0
  for (const kw of NEGATIVE_KEYWORDS) {
    if (haystack.includes(kw.toLowerCase())) penalty -= 2
  }
  return penalty
}

function matchedNegatives(haystack) {
  const hits = []
  for (const kw of NEGATIVE_KEYWORDS) {
    if (haystack.includes(kw.toLowerCase())) hits.push(kw)
  }
  return hits
}

if (!fs.existsSync(queriesPath)) {
  console.error(`No wishlist queries at ${queriesPath}. Run tools/wishlist/parse-wishlist.mjs first.`)
  process.exit(1)
}

const { queries } = JSON.parse(fs.readFileSync(queriesPath, "utf8"))

const existingDOIs = new Set()
const existingTitles = new Set()
if (fs.existsSync(sourcesIndexPath)) {
  for (const file of fs.readdirSync(sourcesIndexPath)) {
    if (!file.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(sourcesIndexPath, file), "utf8")
    const doiMatch = raw.match(/^doi:\s*([^\n]+)/m)
    const titleMatch = raw.match(/^title:\s*["']?([^"'\n]+?)["']?\s*$/m)
    if (doiMatch) existingDOIs.add(normalizeDoi(doiMatch[1]))
    if (titleMatch) existingTitles.add(normalizeTitle(titleMatch[1]))
  }
}
console.error(`Indexed ${existingDOIs.size} existing DOIs and ${existingTitles.size} existing titles.`)

fs.mkdirSync(stagingDir, { recursive: true })

const audit = []
let totalFound = 0
let totalDownloaded = 0
let totalSkippedIndexed = 0
let totalSkippedWeak = 0
let totalSkippedNoOa = 0
let totalFailed = 0
let totalUnpaywallRescued = 0
let totalEpmcRescued = 0
let totalHeadlessRescued = 0

// Sprint mode 2026-05-25: wall-clock budget per invocation so the fetcher
// fits inside a 30-min daemon tick when the wishlist generator emits up to
// 2500 queries. Override with HMI_FETCH_BUDGET_MS env. Default 15 min
// leaves the rest of the tick for routing, hygiene, briefings, etc.
const FETCH_BUDGET_MS = parseInt(process.env.HMI_FETCH_BUDGET_MS || "900000", 10)
const FETCH_START = Date.now()
let budgetExhausted = false

// Resume from where the previous invocation left off (rotates through the
// 2500-query list across multiple daemon ticks instead of always restarting
// from query 0). The checkpoint resets when the generator emits a fresh
// query list (different hash) or the fetcher completes the whole list.
// Checkpoint is per-query-set: an alternate query source (e.g. the lever-gap
// fetch) must use its own checkpoint or it would ping-pong the resume cursor
// with the 2982-query wishlist (each run resetting the other to query 0).
const CHECKPOINT_PATH = process.env.HMI_FETCH_CHECKPOINT
  ? path.resolve(repoRoot, process.env.HMI_FETCH_CHECKPOINT)
  : path.join(repoRoot, "data/evidence/wishlist-fetch-checkpoint.json")
let startIndex = 0
const queriesHash = JSON.stringify(queries.slice(0, 5).map(q => q.id))  // cheap signature
if (fs.existsSync(CHECKPOINT_PATH)) {
  try {
    const cp = JSON.parse(fs.readFileSync(CHECKPOINT_PATH, "utf8"))
    if (cp.queriesHash === queriesHash && typeof cp.nextIndex === "number" && cp.nextIndex < queries.length) {
      startIndex = cp.nextIndex
      console.error(`[checkpoint] resuming from query index ${startIndex} of ${queries.length}`)
    }
  } catch {}
}

// ─── PubMed adapter (added 2026-05-28) ────────────────────────────────────
// Compact ESearch + EFetch pass; same scoring/staging as the OpenAlex path.
// Restricted to PMC OA via the "pubmed pmc open access[filter]" term so
// paywalled records never enter the pipeline.
function xmlAll(xml, tag) {
  const out = []
  const re = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)</${tag}>`, "g")
  let m
  while ((m = re.exec(xml)) !== null) out.push(m[1].replace(/<[^>]+>/g, "").trim())
  return out
}
function xmlFirst(xml, tag) { const a = xmlAll(xml, tag); return a.length ? a[0] : null }

async function queryPubMed(q, searchTerms, fetchOne) {
  const keyParam = NCBI_API_KEY ? `&api_key=${encodeURIComponent(NCBI_API_KEY)}` : ""
  const term = encodeURIComponent(`${searchTerms} AND pubmed pmc open access[filter] AND ${FROM_YEAR}:3000[dp]`)
  const searchUrl = `${ESEARCH_URL}?db=pubmed&term=${term}&retmax=${PER_QUERY_LIMIT}&retmode=json${keyParam}`
  process.stderr.write(`[${q.id}] pubmed "${searchTerms}" ... `)

  let pmids = []
  try {
    const res = await fetch(searchUrl, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } })
    if (!res.ok) { process.stderr.write(`esearch HTTP ${res.status}\n`); return }
    const data = await res.json()
    pmids = data.esearchresult?.idlist ?? []
    process.stderr.write(`${pmids.length} hits\n`)
    totalFound += pmids.length
  } catch (err) { process.stderr.write(`esearch error: ${err.message}\n`); return }

  if (pmids.length === 0) return

  // Batch EFetch all PMIDs in one call (XML payload is the cheap one; the
  // expensive call is the per-article PDF fetch from PMC).
  const fetchUrl = `${EFETCH_URL}?db=pubmed&id=${pmids.join(",")}&rettype=xml&retmode=xml${keyParam}`
  let xmlText
  try {
    const res = await fetch(fetchUrl, { headers: { "User-Agent": USER_AGENT } })
    if (!res.ok) { process.stderr.write(`[${q.id}] pubmed efetch HTTP ${res.status}\n`); return }
    xmlText = await res.text()
  } catch (err) { process.stderr.write(`[${q.id}] pubmed efetch error: ${err.message}\n`); return }

  const articleBlocks = xmlText.match(/<PubmedArticle>[\s\S]*?<\/PubmedArticle>/g) ?? []
  const fetchCandidates = []

  for (const block of articleBlocks) {
    const pmid = xmlFirst(block, "PMID")
    if (!pmid) continue
    const title = xmlFirst(block, "ArticleTitle") || `PubMed ${pmid}`
    // AbstractText may have multiple blocks (BACKGROUND/METHODS/RESULTS/...);
    // join all per HMI-27 fix so n=… in METHODS isn't lost.
    const abstract = xmlAll(block, "AbstractText").join(" ")
    const journal = xmlFirst(block, "Title") || ""
    const yearStr = xmlFirst(block, "Year") || ""
    const year = yearStr ? parseInt(yearStr, 10) : ""
    // DOI lives in ArticleId with IdType="doi"
    const doiMatch = block.match(/<ArticleId\s+IdType="doi">([^<]+)<\/ArticleId>/)
    const doi = doiMatch ? normalizeDoi(doiMatch[1]) : ""
    // PMC ID for fulltext URL
    const pmcMatch = block.match(/<ArticleId\s+IdType="pmc">PMC([0-9]+)<\/ArticleId>/)
    const pmcId = pmcMatch ? pmcMatch[1] : ""

    const titleNorm = normalizeTitle(title)
    const alreadyIndexed = (doi && existingDOIs.has(doi)) || (titleNorm && existingTitles.has(titleNorm))

    const haystack = `${title} ${abstract}`.toLowerCase()
    const positiveScore = scoreHits(haystack, [
      ...q.extracted.crops, ...q.extracted.regions, ...q.extracted.metals,
      ...expandMetalAliases(q.extracted.metal_search_terms), ...q.extracted.periods,
    ])
    const penalty = negativeScore(haystack)
    const score = positiveScore + penalty
    const foodHits = foodDomainScore(haystack)
    const durableHits = durableGoodsDomainScore(haystack)
    const personalCareHits = personalCareDomainScore(haystack)
    const cleaningHits = cleaningDomainScore(haystack)
    const inhalationHits = inhalationDomainScore(haystack)
    const researchChemHits = researchChemicalDomainScore(haystack)
    const inScopeHits = Math.max(foodHits, durableHits, personalCareHits, cleaningHits, inhalationHits, researchChemHits)
    const negativeHits = matchedNegatives(haystack)

    const oaUrl = pmcId ? `${PMC_FULLTEXT_URL}/PMC${pmcId}/pdf/` : ""
    const row = {
      wishlist_id: q.id, wishlist_section: q.section,
      query_terms: `pubmed:${searchTerms}`,
      relevance_score: score, positive_score: positiveScore,
      negative_penalty: penalty, negative_hits: negativeHits.join("; "),
      food_hits: foodHits,
      domain_match: durableHits > 0 ? "durable-goods" : personalCareHits > 0 ? "personal-care" : cleaningHits > 0 ? "cleaning" : inhalationHits > 0 ? "inhalation" : researchChemHits > 0 ? "research-chemical" : foodHits > 0 ? "food" : "none",
      title, doi, year, journal, oa_url: oaUrl,
      cited_by_count: 0,  // PubMed's EFetch doesn't return cite counts
      already_indexed: alreadyIndexed ? "true" : "false",
      decision: "", downloaded_path: "",
    }

    if (alreadyIndexed) { row.decision = "skip:already-indexed"; totalSkippedIndexed += 1; audit.push(row); continue }
    if (!oaUrl) { row.decision = "skip:no-pmc-oa"; totalSkippedNoOa += 1; audit.push(row); continue }
    if (inScopeHits === 0) { row.decision = "skip:no-domain-terms"; totalSkippedWeak += 1; audit.push(row); continue }
    if (!hasLongFormMetalName(haystack)) { row.decision = "skip:symbol-only-metal-match"; totalSkippedWeak += 1; audit.push(row); continue }
    if (score < DOWNLOAD_THRESHOLD) { row.decision = score === 0 ? "skip:no-keyword-overlap" : "review:weak-match"; totalSkippedWeak += 1; audit.push(row); continue }

    const filename = candidateFilename(row)
    const target = path.join(stagingDir, filename)
    if (fs.existsSync(target)) {
      row.decision = "skip:already-in-staging"
      row.downloaded_path = path.relative(repoRoot, target)
      totalSkippedIndexed += 1
      audit.push(row)
    } else {
      fetchCandidates.push({ row, target, oaUrl })
    }
  }

  // Reuse the OpenAlex fetchOne closure for concurrent PDF download.
  for (let bi = 0; bi < fetchCandidates.length; bi += CONCURRENT_FETCHES) {
    const batch = fetchCandidates.slice(bi, bi + CONCURRENT_FETCHES)
    await Promise.all(batch.map(fetchOne))
    await new Promise((r) => setTimeout(r, DOWNLOAD_DELAY_MS))
  }
}

// Unpaywall DOI → direct OA PDF resolver. Used as a fallback when a candidate's
// primary OA URL resolves to an HTML landing page or a 403-blocked publisher
// link — the two dominant fetch-loss modes (empirically ~477 not-pdf + ~69 http
// per ~1096 decisions, vs only 2 missing-OA-URL). Unpaywall's
// best_oa_location.url_for_pdf is a resolved direct-PDF link, frequently a
// repository copy that is neither a landing page nor publisher-blocked. Free
// API; the email param is required for the polite pool. Returns "" on any error
// or when no direct-PDF OA location exists (caller treats "" as "no fallback"),
// so it can never reduce existing downloads.
async function resolveUnpaywallPdf(doi) {
  const clean = String(doi || "").replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").trim()
  if (!clean) return ""
  const url = `https://api.unpaywall.org/v2/${encodeURIComponent(clean)}?email=${encodeURIComponent(MAILTO)}`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("unpaywall-timeout")), 15000)),
    ])
    if (!res.ok) return ""
    const data = await res.json()
    const locs = []
    if (data.best_oa_location) locs.push(data.best_oa_location)
    if (Array.isArray(data.oa_locations)) locs.push(...data.oa_locations)
    for (const l of locs) {
      if (!l) continue
      if (l.url_for_pdf) return l.url_for_pdf
      if (typeof l.url === "string" && /\.pdf($|\?)/i.test(l.url)) return l.url
    }
    return ""
  } catch {
    return ""
  }
}

// PDF signature check. The spec permits a few stray leading bytes before the
// "%PDF-" header, so we scan the first 1 KB rather than requiring it at byte 0;
// HTML interstitials (which begin with "<!doctype"/"<html"/newlines) never
// contain it there, so this cleanly separates a real binary from a bot-page.
function looksLikePdf(buffer) {
  if (!buffer || buffer.length < 5) return false
  return buffer.subarray(0, 1024).toString("latin1").includes("%PDF-")
}

// Extract a PMCID from a URL. The PMC interstitial OA URLs OpenAlex hands us
// embed it directly (…/pmc/articles/PMC4808979/pdf/), so the common rescue
// path needs no extra API call — we read the PMCID straight off the failed URL.
function pmcidFromUrl(url) {
  const m = String(url || "").match(/PMC(\d+)/i)
  return m ? `PMC${m[1]}` : ""
}

// DOI → PMCID via the Europe PMC search REST API. Only called when the failed
// URLs carry no PMCID (e.g. an mdpi.com publisher OA URL with no PMC copy in
// the OpenAlex record); returns "" when the DOI has no open PMC deposit. Time-
// boxed like resolveUnpaywallPdf so a slow lookup can't stall the fetch stage.
async function resolveEuropePmcId(doi) {
  const clean = String(doi || "").replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").trim()
  if (!clean) return ""
  const url = `${EUROPEPMC_SEARCH}?query=DOI:%22${encodeURIComponent(clean)}%22&format=json&resultType=lite`
  try {
    const res = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("epmc-search-timeout")), 12000)),
    ])
    if (!res.ok) return ""
    const data = await res.json()
    const r = data.resultList?.result?.[0]
    return r && r.pmcid ? r.pmcid : ""
  } catch {
    return ""
  }
}

// Europe PMC getPdf rescue. Builds the one-hop direct-PDF URL for a PMCID and
// hands it to attemptDownload, which time-boxes and magic-byte-validates it.
// Returns "" PMCID-less inputs early so the caller can skip cleanly. Purely
// additive: only ever called on a candidate whose primary fetch already failed.
async function resolveEpmcPdf(oaUrl, knownUrl, doi) {
  let pmcid = pmcidFromUrl(oaUrl) || pmcidFromUrl(knownUrl)
  if (!pmcid && doi) pmcid = await resolveEuropePmcId(doi)
  return pmcid ? `${EUROPEPMC_GETPDF}?pmcid=${pmcid}` : ""
}

// Download an Europe PMC getPdf URL with one retry. The endpoint is reliable
// per-request but flaky under load — transient 5xx, and large (multi-MB) PDFs
// occasionally render slower than the default deadline. Both clear on a retry,
// so one extra attempt with a longer (40s) budget and a short backoff takes the
// rescue from flaky to effectively deterministic. A deterministic not-pdf is
// not retried. Uses a longer timeout than the publisher path because EPMC
// render latency is the bottleneck, not a hung socket.
async function attemptEpmcDownload(epmcUrl, target) {
  const first = await attemptDownload(epmcUrl, target, 40000)
  if (first.saved || first.kind === "not-pdf") return first
  await new Promise((r) => setTimeout(r, 2500))
  return attemptDownload(epmcUrl, target, 40000)
}

// Headless last resort for not-in-PMC MDPI papers (publisher PDF behind a
// Cloudflare JS challenge that no UA/header set clears). Runs the browser in an
// ISOLATED child process that is hard-killed on timeout, so a hung browser can
// never stall the parent's time-boxed fetch loop. Playwright is loaded only by
// the child (dynamic import); when the dep is absent the child exits 66 and we
// degrade to a clean, distinctly-logged skip — Playwright is never a hard
// dependency of this pipeline. OFF unless HMI_MDPI_HEADLESS=1.
function fetchMdpiHeadless(doi, target) {
  return new Promise((resolve) => {
    let settled = false
    const done = (v) => { if (!settled) { settled = true; resolve(v) } }
    let child
    try {
      child = spawn(process.execPath, [MDPI_HEADLESS_SCRIPT, doi, target], {
        stdio: ["ignore", "ignore", "ignore"],
        env: process.env,
      })
    } catch {
      return done({ saved: false, decision: "fail:mdpi-headless-spawn-error", kind: "error" })
    }
    const killer = setTimeout(() => { try { child.kill("SIGKILL") } catch {} }, MDPI_HEADLESS_TIMEOUT_MS)
    child.on("error", () => { clearTimeout(killer); done({ saved: false, decision: "fail:mdpi-headless-spawn-error", kind: "error" }) })
    child.on("exit", (code) => {
      clearTimeout(killer)
      if (code === 0 && fs.existsSync(target)) {
        try {
          const buf = fs.readFileSync(target)
          if (looksLikePdf(buf)) return done({ saved: true, bytes: buf.length, url: `mdpi-headless:${doi}` })
          fs.unlinkSync(target)
        } catch {}
      }
      done({
        saved: false,
        decision: code === 66 ? "fail:mdpi-headless-unavailable" : "fail:mdpi-headless-failed",
        kind: "error",
      })
    })
  })
}

// Fetch one URL and write its body to `target` if it is a real PDF. Returns
// { saved:true, bytes } on success, or { saved:false, decision, kind } with
// kind ∈ {http, not-pdf, error} so the caller can decide whether a fallback
// (Unpaywall, Europe PMC, headless) is worth attempting. Hard 25s deadlines on
// both the response and the body via Promise.race. Defined once at module scope
// (was previously redefined on every query iteration).
async function attemptDownload(url, target, timeoutMs = 25000) {
  try {
    const response = await Promise.race([
      fetch(url, { headers: { "User-Agent": USER_AGENT }, redirect: "follow" }),
      new Promise((_, rej) => setTimeout(() => rej(new Error("hard-timeout")), timeoutMs)),
    ])
    if (!response.ok) return { saved: false, decision: `fail:http-${response.status}`, kind: "http" }
    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("pdf") && !contentType.includes("octet-stream")) {
      return { saved: false, decision: `skip:not-pdf:${contentType.slice(0, 40)}`, kind: "not-pdf" }
    }
    const buffer = Buffer.from(await Promise.race([
      response.arrayBuffer(),
      new Promise((_, rej) => setTimeout(() => rej(new Error("body-timeout")), timeoutMs)),
    ]))
    // Validate the body, not just the content-type header. Bot-check and error
    // pages are routinely served with an application/pdf or octet-stream
    // content-type but an HTML body; writing that to a .pdf poisons the staging
    // dir and burns a downstream ingest spawn on garbage. Require the PDF
    // signature to actually appear near the top of the body, and treat a miss as
    // not-pdf so the Unpaywall / Europe PMC fallbacks still fire.
    if (!looksLikePdf(buffer)) {
      return { saved: false, decision: "skip:not-pdf:body-not-pdf", kind: "not-pdf" }
    }
    fs.writeFileSync(target, buffer)
    return { saved: true, bytes: buffer.length }
  } catch (err) {
    return { saved: false, decision: `fail:${err.message.slice(0, 40)}`, kind: "error" }
  }
}

// Self-test: exercise the real rescue path against a DOI + PMC interstitial OA
// URL without running the full discovery loop. Used to verify the MDPI/Europe
// PMC rescue against real failing audit rows. Exits after the probe.
//   node tools/wishlist/find-candidates.mjs --selftest-rescue <doi> <oaUrl>
const _selftestArgIdx = process.argv.indexOf("--selftest-rescue")
if (_selftestArgIdx !== -1) {
  const doi = process.argv[_selftestArgIdx + 1] || ""
  const oaUrl = process.argv[_selftestArgIdx + 2] || ""
  const tmp = path.join(stagingDir, `__selftest_${(doi || "x").replace(/[^a-z0-9]+/gi, "-")}.pdf`)
  // Reproduce the primary failure, then run the exact fallbacks fetchOne uses.
  const primary = await attemptDownload(oaUrl, tmp)
  let r = primary
  let epmcUrl = null
  let epmcDecision = null
  if (!r.saved && (r.kind === "not-pdf" || r.kind === "http")) {
    epmcUrl = await resolveEpmcPdf(oaUrl, "", doi)
    if (epmcUrl && epmcUrl !== oaUrl) {
      const r3 = await attemptEpmcDownload(epmcUrl, tmp)
      epmcDecision = r3.saved ? "saved" : r3.decision
      if (r3.saved) { r = r3; r.via = epmcUrl }
    }
  }
  const ok = r.saved && looksLikePdf(fs.readFileSync(tmp))
  console.log(JSON.stringify({
    doi, oaUrl,
    primary_decision: primary.decision || "saved",
    rescued: r.saved && !primary.saved,
    epmc_url: epmcUrl,
    epmc_decision: epmcDecision,
    via: r.via || null,
    bytes: r.saved ? r.bytes : 0,
    is_pdf: ok,
  }))
  try { fs.unlinkSync(tmp) } catch {}
  process.exit(ok ? 0 : 1)
}

for (let i = startIndex; i < queries.length; i += 1) {
  if (Date.now() - FETCH_START > FETCH_BUDGET_MS) {
    if (!budgetExhausted) {
      console.error(`[budget] FETCH_BUDGET_MS=${FETCH_BUDGET_MS} exhausted after ${i - startIndex} queries this run (${i}/${queries.length} total); checkpointing.`)
      budgetExhausted = true
      fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify({ queriesHash, nextIndex: i }))
    }
    break
  }
  const q = queries[i]
  const searchTerms = q.search_query_core || q.search_query_full
  if (!searchTerms.trim()) {
    console.error(`[${q.id}] no search terms; skipping`)
    continue
  }

  // Sprint mode 2026-05-25: switched from `search=` (loose full-text matching
  // against title+abstract+fulltext+references) to `title_and_abstract.search`
  // which requires the terms to appear in title OR abstract — not just in
  // references or fulltext body. This alone cut the prior 7% true-positive
  // rate by excluding adsorbent papers ("removal of Pb using coffee waste"
  // matched as "coffee Pb concentration" under the old search), thin-film
  // transistor papers using metals as semiconductors, and clinical-mechanism
  // papers ("hepatoprotective coffee against Cd toxicity in rats").
  // OpenAlex pass — SKIPPED once the daily cap is hit (openalexExhausted), so
  // the rest of the run falls straight through to PubMed (separate quota, still
  // productive). We never `break`/`continue` past the PubMed pass below.
  let works = []
  if (!openalexExhausted) {
    const url = `${OPENALEX_BASE}?filter=title_and_abstract.search:${encodeURIComponent(searchTerms)},is_oa:true,from_publication_date:${FROM_YEAR}-01-01&per-page=${PER_QUERY_LIMIT}&mailto=${encodeURIComponent(MAILTO)}`
    process.stderr.write(`[${q.id}] "${searchTerms}" ... `)
    try {
      const response = await fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } })
      if (!response.ok) {
        process.stderr.write(`HTTP ${response.status}\n`)
        if (response.status === 429) {
          consecutive429++
          if (consecutive429 >= MAX_CONSECUTIVE_429) {
            process.stderr.write(
              `\n[rate-limit] ${consecutive429} consecutive 429s — pausing OpenAlex for the rest of this run (daily cap likely hit); PubMed continues.\n`,
            )
            openalexExhausted = true
          } else {
            // Exponential backoff: 2s, 4s, 8s … capped at 30s.
            await new Promise((r) => setTimeout(r, Math.min(2000 * 2 ** (consecutive429 - 1), 30000)))
          }
        } else {
          await new Promise((r) => setTimeout(r, API_DELAY_MS))
        }
      } else {
        consecutive429 = 0 // a good response clears the breaker
        const remaining = Number(response.headers.get("x-ratelimit-remaining"))
        if (Number.isFinite(remaining) && remaining < OPENALEX_DAILY_RESERVE) {
          process.stderr.write(
            `\n[rate-limit] OpenAlex daily quota low (${remaining} left, reserve ${OPENALEX_DAILY_RESERVE}) — pausing OpenAlex for the rest of this run; PubMed continues.\n`,
          )
          openalexExhausted = true
        }
        const data = await response.json()
        works = data.results ?? []
        process.stderr.write(`${works.length} hits\n`)
        totalFound += works.length
      }
    } catch (err) {
      process.stderr.write(`error: ${err.message}\n`)
    }
  }

  // Build candidate rows first (cheap, no I/O). Defer all PDF fetches to a
  // batched concurrent pass below — gets us ~5× wall-clock improvement per
  // OpenAlex query in sprint mode.
  const fetchCandidates = []
  for (const work of works) {
    const doi = work.doi ? normalizeDoi(work.doi) : ""
    const titleNorm = work.title ? normalizeTitle(work.title) : ""
    const alreadyIndexed = (doi && existingDOIs.has(doi)) || (titleNorm && existingTitles.has(titleNorm))

    const abstract = reconstructAbstract(work.abstract_inverted_index)
    const haystack = `${work.title ?? ""} ${abstract}`.toLowerCase()
    const positiveScore = scoreHits(haystack, [
      ...q.extracted.crops,
      ...q.extracted.regions,
      ...q.extracted.metals,
      ...expandMetalAliases(q.extracted.metal_search_terms),
      ...q.extracted.periods,
    ])
    const penalty = negativeScore(haystack)
    const score = positiveScore + penalty
    const negativeHits = matchedNegatives(haystack)
    const foodHits = foodDomainScore(haystack)
    const durableHits = durableGoodsDomainScore(haystack)
    const personalCareHits = personalCareDomainScore(haystack)
    const cleaningHits = cleaningDomainScore(haystack)
    const inhalationHits = inhalationDomainScore(haystack)
    const researchChemHits = researchChemicalDomainScore(haystack)
    const inScopeHits = Math.max(foodHits, durableHits, personalCareHits, cleaningHits, inhalationHits, researchChemHits)
    const domainMatch = durableHits > 0 ? "durable-goods" : personalCareHits > 0 ? "personal-care" : cleaningHits > 0 ? "cleaning" : inhalationHits > 0 ? "inhalation" : researchChemHits > 0 ? "research-chemical" : foodHits > 0 ? "food" : "none"

    const oaUrl = work.open_access?.oa_url ?? ""
    const row = {
      wishlist_id: q.id,
      wishlist_section: q.section,
      query_terms: searchTerms,
      relevance_score: score,
      positive_score: positiveScore,
      negative_penalty: penalty,
      negative_hits: negativeHits.join("; "),
      food_hits: foodHits,
      domain_match: domainMatch,
      title: work.title ?? "",
      doi: doi || "",
      year: work.publication_year ?? "",
      journal: work.primary_location?.source?.display_name ?? "",
      oa_url: oaUrl,
      cited_by_count: work.cited_by_count ?? 0,
      already_indexed: alreadyIndexed ? "true" : "false",
      decision: "",
      downloaded_path: "",
    }

    // Decision logic — the model decides, no Karen-side approval gate.
    if (alreadyIndexed) {
      row.decision = "skip:already-indexed"
      totalSkippedIndexed += 1
      audit.push(row)
    } else if (!oaUrl) {
      row.decision = "skip:no-oa-url"
      totalSkippedNoOa += 1
      audit.push(row)
    } else if (inScopeHits === 0) {
      // Domain hard gate (2026-05-28, expanded to multi-domain 2026-05-28
      // evening). A candidate with zero hits across ALL FOUR domain term
      // lists (food, durable-goods, personal-care, cleaning) is out of
      // scope no matter how well it matches metals/regions. Rejecting
      // before download saves bandwidth + a downstream classify-and-skip
      // ingest spawn (~75k tokens per spawn). Multi-domain check is what
      // unblocks Category 10 (infant durable goods + textiles), which was
      // stuck at 0 sources because the food-only gate rejected every toy/
      // textile/crib paper. domainMatch records which domain actually hit
      // so the downstream ingest skill knows which schema to apply.
      row.decision = "skip:no-domain-terms"
      totalSkippedWeak += 1
      audit.push(row)
    } else if (!hasLongFormMetalName(haystack)) {
      // 2026-05-28 fix: long-form metal-name gate. Reject papers whose
      // title+abstract contains no chemistry-name metal term (cadmium,
      // lead, mercury, arsenic, etc.) — only symbol-only matches (Cd,
      // Pb, Hg) are too noisy to act on. The Cat 11 Chagas-disease
      // false positive that broke the 2026-05-28T22Z parallel test
      // would have been rejected here.
      row.decision = "skip:symbol-only-metal-match"
      totalSkippedWeak += 1
      audit.push(row)
    } else if (score < DOWNLOAD_THRESHOLD) {
      row.decision = score === 0 ? "skip:no-keyword-overlap" : "review:weak-match"
      totalSkippedWeak += 1
      audit.push(row)
    } else {
      // Strong or likely match → queue for concurrent download below.
      const filename = candidateFilename(row)
      const target = path.join(stagingDir, filename)
      if (fs.existsSync(target)) {
        row.decision = "skip:already-in-staging"
        row.downloaded_path = path.relative(repoRoot, target)
        totalSkippedIndexed += 1
        audit.push(row)
      } else {
        fetchCandidates.push({ row, target, oaUrl })
      }
    }
  }

  // Concurrent fetch pass: CONCURRENT_FETCHES (default 5) in flight at any time,
  // each with a hard 25s deadline inside attemptDownload (module scope) so a
  // hung socket can't block the whole query batch.
  async function fetchOne({ row, target, oaUrl }) {
    process.stdout.write(`  ↓ ${row.title.slice(0, 65)} ... `)

    let r = await attemptDownload(oaUrl, target)

    // Unpaywall fallback. The dominant fetch-loss modes are oa_url resolving to
    // an HTML landing page (skip:not-pdf) and publisher 403s — not missing OA
    // URLs. Unpaywall maps the DOI to a direct OA PDF (often a repository copy
    // that is neither a landing page nor publisher-blocked), rescuing both. It
    // fires only on a failed primary fetch for a candidate carrying a DOI, so it
    // can never reduce existing downloads — purely additive.
    if (!r.saved && row.doi && (r.kind === "not-pdf" || r.kind === "http")) {
      const upUrl = await resolveUnpaywallPdf(row.doi)
      if (upUrl && upUrl !== oaUrl) {
        const r2 = await attemptDownload(upUrl, target)
        if (r2.saved) { r = r2; row.oa_url = upUrl; totalUnpaywallRescued += 1 }
      }
    }

    // Europe PMC getPdf rescue. The dominant residual loss after Unpaywall is
    // MDPI (10.3390/*): its publisher PDF 403s our UA and Unpaywall typically
    // lists only that publisher location, while OpenAlex hands us the PMC
    // interstitial (HTML, not the binary). Europe PMC serves the real PDF for
    // any PMC-deposited paper, so this recovers the MDPI losses (and any other
    // PMC-mirrored paper stuck behind a PMC interstitial). Fires only on a
    // still-failed candidate, so it can never reduce existing downloads.
    let epmcAttempted = false // a PMCID existed and getPdf was tried (paper IS in PMC)
    if (!r.saved && (r.kind === "not-pdf" || r.kind === "http")) {
      const epmcUrl = await resolveEpmcPdf(oaUrl, row.oa_url, row.doi)
      if (epmcUrl && epmcUrl !== oaUrl) {
        epmcAttempted = true
        const r3 = await attemptEpmcDownload(epmcUrl, target)
        if (r3.saved) { r = r3; row.oa_url = epmcUrl; totalEpmcRescued += 1 }
      }
    }

    // Residual MDPI handling (publisher PDF behind a Cloudflare JS challenge).
    // Headless rescue is OFF by default — ~0% of observed losses, in-scope MDPI
    // clusters in PMC-indexed journals. When HMI_MDPI_HEADLESS=1, an isolated,
    // hard-killed child renders it. Otherwise we tag a distinct, quantifiable
    // decision so the residual stays visible in the audit, and distinguish a
    // transient Europe PMC failure (paper IS in PMC, getPdf 5xx/timeout — retry
    // next run) from a genuine no-PMC-deposit case (only a headless browser can
    // reach the publisher PDF). Honest labeling keeps the audit actionable.
    if (!r.saved && /^10\.3390\//.test(row.doi || "") && (r.kind === "not-pdf" || r.kind === "http")) {
      if (MDPI_HEADLESS_ENABLED) {
        const r4 = await fetchMdpiHeadless(row.doi, target)
        if (r4.saved) { r = r4; row.oa_url = r4.url || row.oa_url; totalHeadlessRescued += 1 }
        else r = r4 // carries fail:mdpi-headless-{unavailable,failed,spawn-error}
      } else {
        r = epmcAttempted
          ? { saved: false, decision: "fail:epmc-pdf-failed", kind: "error" }
          : { saved: false, decision: "fail:mdpi-no-pmc-copy", kind: "error" }
      }
    }

    if (r.saved) {
      process.stdout.write(`${formatBytes(r.bytes)}\n`)
      row.decision = "downloaded"
      row.downloaded_path = path.relative(repoRoot, target)
      totalDownloaded += 1
      // 2026-05-28 fix: cross-query DOI dedup. The same paper is discovered by
      // multiple queries; without this a later query re-downloads it. Adding the
      // freshly-downloaded DOI + normalized title means the next query sees
      // alreadyIndexed=true.
      if (row.doi) existingDOIs.add(normalizeDoi(row.doi))
      if (row.title) existingTitles.add(normalizeTitle(row.title))
    } else {
      process.stdout.write(`${r.kind === "not-pdf" ? "not PDF" : r.kind === "http" ? r.decision.replace("fail:", "") : "error"}\n`)
      row.decision = r.decision
      if (r.kind === "not-pdf") totalSkippedNoOa += 1
      else totalFailed += 1
    }
    audit.push(row)
  }

  for (let bi = 0; bi < fetchCandidates.length; bi += CONCURRENT_FETCHES) {
    const batch = fetchCandidates.slice(bi, bi + CONCURRENT_FETCHES)
    await Promise.all(batch.map(fetchOne))
    await new Promise((r) => setTimeout(r, DOWNLOAD_DELAY_MS))
  }

  // ─── PubMed pass for the same query (added 2026-05-28) ─────────────────
  // Runs alongside OpenAlex, not instead of. Different coverage: PubMed
  // catches NIH-indexed biomedical literature including some PMC-OA papers
  // OpenAlex misses, and is the canonical source for FDA/CDC-cross-linked
  // clinical literature. We restrict to PMC OA so paywalled records never
  // enter the pipeline. Same scoring (food_hits gate, positive/negative,
  // DOWNLOAD_THRESHOLD); same staging dir.
  if (PUBMED_ENABLED) {
    try {
      await queryPubMed(q, searchTerms, fetchOne)
    } catch (err) {
      process.stderr.write(`[${q.id}] pubmed pass failed: ${err.message}\n`)
    }
  }

  await new Promise((r) => setTimeout(r, API_DELAY_MS))
}

// Clear checkpoint if we got through the whole list this run (or never hit budget)
if (!budgetExhausted) {
  try { fs.existsSync(CHECKPOINT_PATH) && fs.unlinkSync(CHECKPOINT_PATH) } catch {}
}

audit.sort((a, b) => a.wishlist_id.localeCompare(b.wishlist_id) || b.relevance_score - a.relevance_score)

writeCsv(auditPath, audit, [
  "wishlist_id",
  "wishlist_section",
  "decision",
  "downloaded_path",
  "relevance_score",
  "positive_score",
  "negative_penalty",
  "negative_hits",
  "food_hits",
  "domain_match",
  "already_indexed",
  "title",
  "doi",
  "year",
  "journal",
  "oa_url",
  "cited_by_count",
  "query_terms",
])

console.log(`\nWishlist fetch complete.`)
console.log(`  candidates returned by OpenAlex + PubMed combined: ${totalFound}`)
console.log(`  downloaded (relevance >= ${DOWNLOAD_THRESHOLD}, OA, not indexed): ${totalDownloaded}`)
console.log(`    of which rescued via Unpaywall (landing-page/403 → direct OA PDF): ${totalUnpaywallRescued}`)
console.log(`    of which rescued via Europe PMC (PMC interstitial → getPdf binary, incl. MDPI): ${totalEpmcRescued}`)
console.log(`    of which rescued via headless MDPI render (HMI_MDPI_HEADLESS): ${totalHeadlessRescued}`)
console.log(`  skipped (already in wiki/sources/ or staging): ${totalSkippedIndexed}`)
console.log(`  skipped (weak match, logged for review): ${totalSkippedWeak}`)
console.log(`  skipped (no OA URL or not-PDF): ${totalSkippedNoOa}`)
console.log(`  failed: ${totalFailed}`)
console.log(`\nAudit log: ${path.relative(repoRoot, auditPath)}`)
console.log(`Downloaded PDFs: ${path.relative(repoRoot, stagingDir)}/`)
console.log(`\nThe next ingest session reads the staging folder and produces source pages per CLAUDE.md Part 8.`)

function reconstructAbstract(inverted) {
  if (!inverted || typeof inverted !== "object") return ""
  const positions = []
  for (const [word, idxs] of Object.entries(inverted)) {
    for (const idx of idxs) positions.push([idx, word])
  }
  positions.sort((a, b) => a[0] - b[0])
  return positions.map(([, word]) => word).join(" ")
}

function scoreHits(haystack, terms) {
  let hits = 0
  for (const term of terms) {
    if (!term) continue
    const lc = term.toLowerCase()
    const re = new RegExp(`\\b${lc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g")
    const matches = haystack.match(re)
    if (matches) hits += matches.length
  }
  return hits
}

function normalizeDoi(doi) {
  return String(doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "").trim()
}

function normalizeTitle(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
}

function candidateFilename(row) {
  const year = row.year || "0000"
  const doi = (row.doi || "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").slice(0, 60)
  const wishlist = (row.wishlist_id || "WL-XXXX").toLowerCase()
  if (doi) return `${wishlist}_${year}_${doi}.pdf`
  const titleSlug = (row.title || "untitled")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
  return `${wishlist}_${year}_${titleSlug}.pdf`
}

function formatBytes(n) {
  if (n > 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`
  if (n > 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${n} B`
}

function writeCsv(filePath, rows, columns) {
  const lines = [columns.join(",")]
  for (const row of rows) {
    lines.push(columns.map((col) => csvCell(row[col])).join(","))
  }
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8")
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}
