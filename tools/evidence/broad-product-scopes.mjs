// Canonical broad-scope product vocabulary — the SINGLE source of truth.
//
// A "broad scope" is a product declaration that intentionally does not name a
// specific locked HMTc row (e.g. `seafood`, `infant-formula`, `baby-cereals`).
// The routing layer fans these out to the concrete row pages rather than
// treating them as unresolved, and the index-fanning audit must not flag them
// as "unsurfaced evidence" because their sources are surfaced on the rows they
// fan to.
//
// Why this file exists: the vocabulary previously lived in TWO places — a
// `broadProductScopes` set in build-routing-audit.mjs and a separate
// `BROAD_SCOPE` set in audit-index-fanning.mjs — and they drifted. Tokens
// added to the routing set (dietary-supplements, infant-cereal, seafood, the
// Cat-7 canned sub-variants) were never added to the fanning-audit set, so the
// fanning audit reported them as leaks even though the routing layer was
// handling them correctly. That is the same silent-drift failure mode the scope
// denylists hit (project_scope_denylist_drift). Both tools now import THIS list,
// so a token can never again be broad-scope to one and a leak to the other.

export const BROAD_PRODUCT_SCOPES = [
  // Infant formula + milk broad scopes.
  "infant-formula",
  "infant-formula-powder",
  "infant-formula-rtf-liquid",
  "toddler-formula",
  "growing-up-milk",
  "milk-powder",
  "yoghurt",
  // Infant/child food broad scopes.
  "baby-cereals",
  "baby-cereals-dry",
  "rice-cereal",
  "mixed-cereals",
  "vegetable-purees",
  "meat-and-fish-baby-foods",
  "mixed-meals",
  "snacks",
  "rice-based-snacks",
  "teething-biscuits",
  "teething-and-snacks",
  "infant-foods",
  "infant-food",
  "infant-cereal",
  "baby-foods",
  "baby-food",
  "baby-food-purees",
  "baby-drinks",
  "jars-first-meals",
  "pouches",
  "kids-meals",
  "toddler-meals",
  "rice-containing-products",
  // Beverages.
  "fruit-juice",
  "packaged-fruit-juice",
  "tomato-juice",
  "tea",
  "tea-infusions",
  "breakfast-cereals",
  "cereal",
  "cereal-products",
  // Cat 6 seafood broad-scope parents (fan to species rows).
  "seafood",
  "fresh-fish",
  "fish-sauce",
  // Cat 7 / condiments / pantry broad scopes.
  "canned-foods",
  "canned-meat",
  "canned-tomatoes",
  "canned-vegetables",
  "canned-fruit",
  "tomato-paste",
  "tomato-sauce",
  "snacks-crackers-biscuits",
  "processed-meat",
  "pork-products",
  "cooking-oils",
  "vinegar",
  "hot-sauce",
  "confectionery",
  "bakery",
  // Supplements.
  "dietary-supplements",
  // Personal-care / non-food broad scopes.
  "disposable-baby-diapers",
  "whitening-cream",
]

export const BROAD_PRODUCT_SCOPE_SET = new Set(BROAD_PRODUCT_SCOPES)
