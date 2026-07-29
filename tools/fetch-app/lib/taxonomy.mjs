// Reads the canonical HMTc taxonomy (data/taxonomy/hmtc-v2.json) and turns a
// (category, subcategory, metals, extra-terms, years) selection into a search
// query plus the keyword arrays the scorer uses. The taxonomy file is the
// single source of truth for category/subcategory slugs, so the app never
// hard-codes its own product list.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const taxonomyPath = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")

let _tax = null
export function taxonomy() {
  if (!_tax) _tax = JSON.parse(fs.readFileSync(taxonomyPath, "utf8"))
  return _tax
}

// Canonical HMTc analyte panel + literature synonyms, for query expansion and
// scoring. Mirrors METAL_ALIASES in tools/wishlist/find-candidates.mjs.
export const METALS = {
  lead: ["lead", "Pb"],
  cadmium: ["cadmium", "Cd"],
  "inorganic arsenic": ["inorganic arsenic", "iAs"],
  arsenic: ["arsenic", "total arsenic", "As"],
  mercury: ["mercury", "methylmercury", "Hg", "MeHg"],
  nickel: ["nickel", "Ni"],
  aluminum: ["aluminum", "aluminium", "Al"],
  chromium: ["chromium", "hexavalent chromium", "Cr", "Cr(VI)"],
  tin: ["tin", "Sn"],
  antimony: ["antimony", "Sb"],
  uranium: ["uranium", "U"],
  "heavy metals": ["heavy metals", "toxic metals", "trace metals", "trace elements"],
}

// CSV metal codes (data/evidence/cells-needing-synthesis.csv) → canonical METALS
// key, used to expand the score-term synonym set for a gap cell. The gap file
// speaks HMT&C analyte codes (tHg/MeHg/tAs/iAs/Cr-VI); species distinctions
// matter at ingest and synthesis, not at fetch-recall time.
export const METAL_CODE_TO_CANON = {
  Pb: "lead",
  Cd: "cadmium",
  iAs: "inorganic arsenic",
  tAs: "arsenic",
  As: "arsenic",
  tHg: "mercury",
  MeHg: "mercury",
  Hg: "mercury",
  Ni: "nickel",
  Al: "aluminum",
  Cr: "chromium",
  "Cr-VI": "chromium",
  "Cr(VI)": "chromium",
  Sn: "tin",
  Sb: "antimony",
  U: "uranium",
}

// The broad element word to put in the actual query string for a gap cell.
// Recall beats precision here (the downstream dedupe + scorer + ingest firewall
// handle species), so iAs/tAs both query "arsenic" and tHg/MeHg both query
// "mercury" rather than the narrow species phrase.
export const METAL_CODE_TO_QUERY = {
  Pb: "lead",
  Cd: "cadmium",
  iAs: "arsenic",
  tAs: "arsenic",
  As: "arsenic",
  tHg: "mercury",
  MeHg: "mercury",
  Hg: "mercury",
  Ni: "nickel",
  Al: "aluminum",
  Cr: "chromium",
  "Cr-VI": "chromium",
  "Cr(VI)": "chromium",
  Sn: "tin",
  Sb: "antimony",
  U: "uranium",
}

// Which find-candidates.mjs domain gate applies to each category number, so the
// scorer can pick the right in-scope term list. Categories not listed default
// to "food".
const CATEGORY_DOMAIN = {
  2: "personal-care",
  6: "cleaning",
  9: "durable-goods",
  10: "durable-goods",
  12: "cleaning",
  13: "personal-care",
  14: "personal-care",
  15: "personal-care",
  19: "cleaning",
  20: "personal-care",
  21: "durable-goods",
  22: "inhalation",
  23: "durable-goods",
  26: "research-chemical",
}

export function categoryList() {
  return taxonomy().categories.map((c) => ({
    n: c.n,
    name: c.name,
    domain: CATEGORY_DOMAIN[c.n] || "food",
    subcategories: (c.subcategories || []).map((s) => ({
      row: s.row,
      name: s.name,
      slug: s.slug,
    })),
  }))
}

export function findCategory(n) {
  return taxonomy().categories.find((c) => c.n === Number(n))
}

// Build a search job spec from a UI selection. Returns the query terms (for the
// source adapters) plus the extracted keyword arrays (for scoring).
//   sel = { categoryN, subSlug, metals:[canonical], extraTerms:string,
//           fromYear, toYear, mode:'products'|'remediation'|'freeform',
//           freeform:string }
export function buildJob(sel) {
  // Data-gap mode: sel = { mode:'gaps', ingredient, metalCode, fromYear, toYear }.
  // Gap cells key on ingredient pages, not the HMTc product taxonomy, so they
  // route through their own builder rather than the category path below.
  if (sel.mode === "gaps") return buildGapJob(sel)

  const cat = sel.categoryN ? findCategory(sel.categoryN) : null
  const sub =
    cat && sel.subSlug
      ? (cat.subcategories || []).find((s) => s.slug === sel.subSlug)
      : null

  const domain = cat ? CATEGORY_DOMAIN[cat.n] || "food" : "food"

  // Product-name terms drive both the query and the positive score.
  const productTerms = []
  if (sub) productTerms.push(cleanProductName(sub.name))
  else if (cat) productTerms.push(cleanProductName(cat.name))

  const extraTerms = splitTerms(sel.extraTerms)
  const freeformTerms = splitTerms(sel.freeform)

  // Metals: expand canonical names to their long-form synonyms for scoring;
  // use the long form (never the bare 2-letter symbol) in the query string to
  // avoid the symbol false-positive problem documented in find-candidates.mjs.
  const metalCanon = (sel.metals && sel.metals.length ? sel.metals : ["heavy metals"]).filter(
    (m) => METALS[m],
  )
  const metalQueryTerms = metalCanon.map((m) => METALS[m][0])
  const metalScoreTerms = metalCanon.flatMap((m) => METALS[m])

  // Remediation mode appends the remediation/contamination-reduction lexicon,
  // which is IN SCOPE per CLAUDE.md inclusion-by-default (soil-to-plant
  // transfer, cropland remediation, contamination reduction).
  const remediationTerms =
    sel.mode === "remediation"
      ? [
          "remediation",
          "soil remediation",
          "phytoremediation",
          "contamination reduction",
          "bioavailability",
          "soil-to-plant transfer",
          "mitigation",
        ]
      : []

  // Query string: product/topic core AND a metal clause. Kept compact — the
  // adapters wrap it for each API. Freeform text, when present, is added
  // verbatim so a topic like "rice arsenic mitigation agronomic" works.
  const coreParts = []
  if (sel.mode === "freeform" && freeformTerms.length) {
    coreParts.push(sel.freeform.trim())
  } else {
    if (productTerms.length) coreParts.push(quoteIfPhrase(productTerms[0]))
    if (extraTerms.length) coreParts.push(...extraTerms.map(quoteIfPhrase))
    if (sel.mode === "remediation") coreParts.push("remediation OR mitigation")
  }
  const metalClause = metalQueryTerms.length
    ? metalQueryTerms.length === 1
      ? metalQueryTerms[0]
      : `(${metalQueryTerms.join(" OR ")})`
    : "heavy metals"

  const query = [coreParts.join(" "), metalClause].filter(Boolean).join(" ").trim()

  return {
    label:
      sel.mode === "freeform"
        ? sel.freeform.trim().slice(0, 80) || "freeform search"
        : [cat ? `${cat.n}. ${cat.name}` : null, sub ? sub.name : null]
            .filter(Boolean)
            .join(" › "),
    query,
    domain,
    fromYear: Number(sel.fromYear) || 2010,
    toYear: Number(sel.toYear) || new Date().getFullYear() + 1,
    // scoring inputs
    scoreTerms: {
      products: [...productTerms, ...extraTerms, ...freeformTerms, ...remediationTerms],
      metals: metalScoreTerms,
    },
    // provenance for the audit log
    category: cat ? `${cat.n}. ${cat.name}` : "",
    subcategory: sub ? sub.name : "",
    subSlug: sub ? sub.slug : "",
  }
}

// Build a fetch job from a single data-gap cell (ingredient × metal code). The
// ingredient is a free string from cells-needing-synthesis.csv; the metal is the
// cell's analyte code. Query is "<ingredient> <broad-element>"; score terms keep
// the species-aware synonym set so precision holds downstream.
function buildGapJob(sel) {
  const ingredient = cleanProductName(sel.ingredient)
  const code = String(sel.metalCode || "").trim()
  const canon = METAL_CODE_TO_CANON[code] || "heavy metals"
  const queryTerm = METAL_CODE_TO_QUERY[code] || (METALS[canon] && METALS[canon][0]) || "heavy metals"
  const metalScoreTerms = METALS[canon] || METALS["heavy metals"]

  const query = [ingredient ? quoteIfPhrase(ingredient) : "", queryTerm]
    .filter(Boolean)
    .join(" ")
    .trim()

  return {
    label: `gap: ${ingredient || "?"} × ${code || "heavy metals"}`,
    query,
    domain: "food",
    fromYear: Number(sel.fromYear) || 2010,
    toYear: Number(sel.toYear) || new Date().getFullYear() + 1,
    scoreTerms: {
      products: ingredient ? [ingredient] : [],
      metals: metalScoreTerms,
    },
    category: "gap",
    subcategory: ingredient,
    subSlug: "",
  }
}

function cleanProductName(name) {
  // "Infant formula (ready-to-feed, liquid)" -> "infant formula"
  return String(name || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/—.*$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
}

function splitTerms(s) {
  return String(s || "")
    .split(/[,;\n]+/)
    .map((t) => t.trim())
    .filter(Boolean)
}

function quoteIfPhrase(t) {
  return /\s/.test(t) ? `"${t}"` : t
}
