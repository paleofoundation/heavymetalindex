// Relevance scoring for fetched candidates. A lighter, self-contained version
// of the gates in tools/wishlist/find-candidates.mjs, parameterized by the
// job's domain (food / durable-goods / personal-care / cleaning / inhalation /
// research-chemical). The authoritative in-scope gate still runs downstream at
// ingest time; this scorer's job is to keep obvious noise (sensor methodology,
// materials science, biomonitoring, water-quality surveys) out of the download
// set so the staging folder stays actionable.

const DOMAIN_TERMS = {
  food: [
    "food", "diet", "dietary", "consumption", "intake", "edible", "cereal", "grain",
    "rice", "wheat", "vegetable", "fruit", "meat", "poultry", "fish", "seafood",
    "dairy", "milk", "infant formula", "baby food", "supplement", "spice", "tea",
    "coffee", "juice", "beverage", "honey", "syrup", "nut", "legume", "market basket",
    "total diet study", "foodstuff", "food safety", "food contamination", "codex",
    "efsa", "usda", "for consumption", "agricultural product",
  ],
  "durable-goods": [
    "toy", "toys", "children's product", "infant product", "crib", "mattress",
    "car seat", "high chair", "clothing", "textile", "fabric", "apparel", "footwear",
    "diaper", "paint", "coating", "pigment", "plastic", "pvc", "vinyl", "leather",
    "consumer product", "product safety", "cpsc", "cpsia", "astm f963", "en 71",
    "lead paint", "mouthing", "migration", "leaching", "recall",
  ],
  "personal-care": [
    "cosmetic", "makeup", "lipstick", "lotion", "cream", "shampoo", "conditioner",
    "sunscreen", "soap", "body wash", "cleanser", "talc", "kohl", "kajal", "henna",
    "skincare", "skin care", "personal care", "toothpaste", "mouthwash", "tampon",
    "sanitary pad", "menstrual", "deodorant", "nail polish", "hair dye", "fragrance",
    "dermal", "cosmetic ingredient",
  ],
  cleaning: [
    "cleaning product", "household cleaner", "detergent", "disinfectant", "sanitizer",
    "bleach", "dish soap", "dishwasher", "laundry detergent", "fabric softener",
    "stain remover", "all-purpose cleaner", "surface cleaner", "consumer chemical",
    "safer choice",
  ],
  inhalation: [
    "scented candle", "candle emission", "incense", "air freshener", "diffuser",
    "wax melt", "room spray", "potpourri", "indoor air", "voc emission",
    "particulate matter emission", "inhalation exposure", "fragrance emission",
  ],
  "research-chemical": [
    "peptide", "sarm", "research chemical", "nootropic", "injectable", "vial",
    "lyophilized", "semaglutide", "tirzepatide", "bpc-157", "tb-500", "melanotan",
    "glp-1", "anabolic", "prohormone", "compounded",
  ],
}

// Remediation / contamination-reduction is in scope (CLAUDE.md inclusion-by-
// default). When a job runs in remediation mode we accept these as domain hits
// even if no food/product term is present, since a soil-remediation paper may
// not name a retail product.
const REMEDIATION_TERMS = [
  "remediation", "phytoremediation", "phytoextraction", "soil amendment",
  "biochar", "soil-to-plant", "soil to plant", "transfer factor", "bioavailability",
  "immobilization", "contamination reduction", "mitigation", "agronomic",
  "liming", "cropland", "paddy soil",
]

const LONG_FORM_METAL_NAMES = [
  "cadmium", "lead", "mercury", "arsenic", "nickel", "aluminum", "aluminium",
  "chromium", "tin", "antimony", "uranium", "methylmercury", "hexavalent chromium",
  "inorganic arsenic", "total arsenic", "heavy metal", "heavy metals", "toxic metal",
  "toxic metals", "trace metal", "trace metals", "trace element", "trace elements",
]

const NEGATIVE_KEYWORDS = [
  "biosensor", "fluorescence sensor", "colorimetric sensor", "electrochemical sensor",
  "voltammetric", "amperometric", "chemosensor", "aptamer sensor", "quantum dot",
  "perovskite", "photovoltaic", "solar cell", "battery", "catalyst",
  "metal-organic framework", "thin-film transistor", "transcriptomic", "qtl mapping",
  "transgenic", "crispr", "metallothionein gene", "antimicrobial resistance",
  "antibiotic resistance gene", "biofilm formation", "case report", "case series",
  "hepatoprotective", "nephroprotective", "oxidative stress", "apoptosis",
  "lipid peroxidation", "adsorbent", "adsorption", "biosorption", "activated carbon",
  "wastewater treatment", "effluent treatment", "biomonitoring", "blood lead level",
  "hair sample", "urine sample", "groundwater contamination", "drinking water quality",
  "river sediment", "lake sediment", "marine sediment", "occupational exposure",
  "smelter workers", "e-waste", "sewage sludge", "wild bird", "marine mammal",
  "rats fed", "mice fed", "feeding trial",
]

function countHits(haystack, terms) {
  let n = 0
  for (const t of terms) if (t && haystack.includes(t.toLowerCase())) n++
  return n
}

function scorePositive(haystack, terms) {
  let hits = 0
  for (const term of terms) {
    if (!term) continue
    const lc = term.toLowerCase()
    const re = new RegExp(`\\b${lc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g")
    const m = haystack.match(re)
    if (m) hits += m.length
  }
  return hits
}

function hasLongFormMetal(haystack) {
  for (const term of LONG_FORM_METAL_NAMES) {
    if (new RegExp(`\\b${term}\\b`, "i").test(haystack)) return true
  }
  return false
}

// Returns { score, positive, penalty, domainHits, metalOk, negatives, decisionHint }
export function scoreCandidate({ title, abstract }, job, remediationMode = false) {
  const haystack = `${title || ""} ${abstract || ""}`.toLowerCase()
  const domainTerms = DOMAIN_TERMS[job.domain] || DOMAIN_TERMS.food
  const domainHits =
    countHits(haystack, domainTerms) + (remediationMode ? countHits(haystack, REMEDIATION_TERMS) : 0)
  const positive = scorePositive(haystack, [...job.scoreTerms.products, ...job.scoreTerms.metals])
  const negatives = NEGATIVE_KEYWORDS.filter((k) => haystack.includes(k))
  const penalty = negatives.length * -2
  const metalOk = hasLongFormMetal(haystack)
  const score = positive + penalty

  let decisionHint = "keep"
  if (domainHits === 0) decisionHint = "reject:no-domain-terms"
  else if (!metalOk) decisionHint = "reject:symbol-only-metal-match"

  return { score, positive, penalty, domainHits, metalOk, negatives, decisionHint }
}
