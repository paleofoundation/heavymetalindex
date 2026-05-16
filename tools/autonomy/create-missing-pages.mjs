#!/usr/bin/env node
// Auto-stub-creator for routing_unresolved.csv entries.
//
// Per OPERATING.md Part 3 ("no approval gates for decisions Claude can make"),
// when the routing audit reports that N source pages declare a product or
// ingredient page that does not exist, this tool autonomously creates a stub
// page so the next routing-audit run resolves those declarations.
//
// CLAUDE.md Part 10 says new pages are "proposed" — that wording predates
// Karen's standing directive that the autonomy loop should not gate decisions
// behind her review. Stubs are reversible; bad stubs surface in lint and can
// be retired. The cost of a stub is small; the cost of having 400 sources
// route to nowhere is large.
//
// Rules:
//   - Only act on unresolved entries with frequency >= MIN_FREQ (default 2).
//     Frequency-1 entries are usually typos that heal-gaps' Levenshtein
//     proposer is going to catch, or transient references that are not yet
//     load-bearing. The cost of creating one-off stubs is name pollution.
//   - Skip slugs that resolve through an existing page's `aliases` array.
//     The patched routing-audit (alias-aware) already excludes these, so
//     this tool will not see them in routing_unresolved.csv — but the
//     defensive check stays in case the audit runs out of order.
//   - Stubs are minimal: schema-correct frontmatter, a body explaining that
//     this is an autonomy-created stub, and a marker-managed Sources block.
//     The synthesis pass (per CLAUDE.md Part 9) fills in contamination_profile
//     when sources accumulate.
//   - **Product auto-stub creation is OFF by default** (2026-05-16). Per
//     docs/order-of-operations.md Phase 0, product pages are HMTc governance
//     items requiring Karen's Step 0 Lock plus a category-scaffold script
//     (the Cat 2 scaffold is the reference exemplar). Auto-created product
//     stubs cause governance drift: the 2026-05-14 autonomy run created
//     face-paint.md, skin-lightening-cream.md, lipstick.md which had to be
//     retired/rewritten by the Cat 2 scaffold the following day. Ingredient
//     stubs continue to be auto-created — commodities are not governance
//     units, and CLAUDE.md Part 10's 5-paper rule self-corrects via the
//     synthesis pass. Override with --allow-products (Karen's call only).
//
// Output:
//   - wiki/ingredients/<slug>.md or wiki/products/<slug>.md (new stubs)
//   - data/evidence/autonomy/created-pages-<date>.csv (audit log)
//
// Per CLAUDE.md Part 10, new ingredient pages need at least 5 papers to
// warrant a dedicated page. The 5-paper rule is for *promotion from alias to
// dedicated page*. For unresolved entries, the source-page frontmatter
// already declares a dedicated slug, so the choice is between "create the
// stub now" and "let the source route nowhere until Karen reviews."
// Karen explicitly chose the former. Per Part 10's spirit, the stub records
// the slug and a synthesis pass can later merge it into a parent page if the
// 5-paper threshold isn't met within a quarter.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const minFreq = Number(args.get("min-freq") ?? 2)
const allowProducts = args.has("allow-products")
const today = new Date().toISOString().slice(0, 10)

const unresolvedPath = path.join(repoRoot, "data/evidence/routing_unresolved.csv")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const productsDir = path.join(repoRoot, "wiki/products")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")

if (!fs.existsSync(unresolvedPath)) {
  console.error(`No routing_unresolved.csv at ${unresolvedPath}. Run \`node tools/evidence/build-routing-audit.mjs\` first.`)
  process.exit(0)
}

const rows = parseCsv(fs.readFileSync(unresolvedPath, "utf8"))

// Aggregate by (target_kind, declared_target) → frequency + source list
const grouped = new Map()
for (const row of rows) {
  const kind = row.target_kind
  const target = row.declared_target
  if (kind !== "ingredient" && kind !== "product") continue
  const key = `${kind}:${target}`
  if (!grouped.has(key)) {
    grouped.set(key, { kind, target, count: 0, sources: [] })
  }
  const entry = grouped.get(key)
  entry.count += 1
  entry.sources.push(row.source_id)
}

const candidates = [...grouped.values()].filter((e) => e.count >= minFreq)

// Drop any whose target already exists as a page (defensive; the alias-aware
// routing audit should have already excluded these).
const existingIngredients = listSlugs(ingredientsDir)
const existingProducts = listSlugs(productsDir)
const eligible = candidates.filter((c) => {
  if (c.kind === "ingredient" && existingIngredients.has(c.target)) return false
  if (c.kind === "product" && existingProducts.has(c.target)) return false
  return true
})

// Split product candidates off as Phase 0 proposals (Karen's Step 0 Lock).
// Per docs/order-of-operations.md, product pages are governance items and
// auto-stubbing them causes downstream rewrite churn (Cat 2 scaffold had to
// retire 3 auto-stubs on 2026-05-15). With --allow-products, the legacy
// behavior is preserved for one-off Karen-authorized cases.
const productProposals = eligible.filter((c) => c.kind === "product")
const ingredientCandidates = eligible.filter((c) => c.kind === "ingredient")
let pageEligible
if (allowProducts) {
  pageEligible = eligible
  if (productProposals.length > 0) {
    console.log(`create-missing-pages: WARNING — creating ${productProposals.length} product stub(s) under --allow-products. Per docs/order-of-operations.md this requires Karen's Step 0 Lock approval.`)
  }
} else {
  pageEligible = ingredientCandidates
  if (productProposals.length > 0) {
    console.log(`create-missing-pages: ${productProposals.length} product proposal(s) deferred to morning report (Phase 0 Step 0 Lock pending). Re-run with --allow-products only with Karen's explicit approval.`)
  }
}

console.log(`create-missing-pages: ${pageEligible.length} candidates eligible (freq >= ${minFreq}; product auto-stub ${allowProducts ? "ALLOWED" : "DEFERRED"})`)

const created = []
for (const c of pageEligible) {
  const dir = c.kind === "ingredient" ? ingredientsDir : productsDir
  const filepath = path.join(dir, `${c.target}.md`)
  if (fs.existsSync(filepath)) continue
  const stub = c.kind === "ingredient" ? ingredientStub(c) : productStub(c)
  if (!dryRun) {
    fs.writeFileSync(filepath, stub, "utf8")
  }
  created.push({ kind: c.kind, slug: c.target, count: c.count, path: path.relative(repoRoot, filepath) })
}

// Write audit log
fs.mkdirSync(autonomyDir, { recursive: true })
const auditPath = path.join(autonomyDir, `created-pages-${today}.csv`)
const auditLines = ["kind,slug,routed_source_count,path"]
for (const c of created) {
  auditLines.push(`${c.kind},${c.slug},${c.count},${c.path}`)
}
fs.writeFileSync(auditPath, auditLines.join("\n") + "\n", "utf8")

// Write product-proposal log (the deferred Phase-0 candidates).
const proposalsPath = path.join(autonomyDir, "product-stub-proposals-pending.csv")
const proposalLines = ["slug,routed_source_count,first_three_sources,recommended_action"]
for (const c of productProposals) {
  const firstSources = c.sources.slice(0, 3).join(";")
  proposalLines.push(
    `${c.target},${c.count},${csvField(firstSources)},${csvField(
      "Add to the appropriate HMTc category Step 0 Lock. Until Karen authors the lock + scaffold script, sources declaring this slug remain in routing_unresolved.csv. Re-run create-missing-pages with --allow-products only on Karen's explicit OK.",
    )}`,
  )
}
fs.writeFileSync(proposalsPath, proposalLines.join("\n") + "\n", "utf8")

console.log(`Created ${created.length} stub page(s)${dryRun ? " (DRY-RUN)" : ""}`)
console.log(`Audit log: ${path.relative(repoRoot, auditPath)}`)
if (productProposals.length > 0) {
  console.log(`Product proposals deferred to Phase 0: ${productProposals.length}`)
  console.log(`Deferral log: ${path.relative(repoRoot, proposalsPath)}`)
}

// =========================================================================
// Stub templates
// =========================================================================

function ingredientStub(entry) {
  const slug = entry.target
  const title = titleCase(slug)
  const category = inferIngredientCategory(slug)
  const drivers = inferDrivers(slug)
  const today = new Date().toISOString().slice(0, 10)

  return `---
type: ingredient
commodity: ${slug}
title: "${title}"
label: "${title}"
aliases: []
category: ${category}
contamination_profile:
  Pb: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cd: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  iAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tHg: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Ni: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Al: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cr: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Sn: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  U: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
drivers: [${drivers.join(", ")}]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: ${today}
sources: ${entry.count}
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: ${entry.count}
---

# ${title}

This page is an autonomy-created stub. The routing audit identified ${entry.count} source pages in the corpus declaring \`ingredients: [${slug}]\` in their frontmatter without a dedicated page existing. Per OPERATING.md Part 3, the autonomy loop created this stub so those sources route to a defined target. The synthesis pass per CLAUDE.md Part 9 fills in the contamination profile as sources accumulate.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | pending | — | — | — | — |
| Cd  | pending | — | — | — | — |
| iAs | pending | — | — | — | — |
| tAs | pending | — | — | — | — |
| tHg | pending | — | — | — | — |
| Ni  | pending | — | — | — | — |
| Al  | pending | — | — | — | — |
| Cr  | pending | — | — | — | — |
| Sn  | pending | — | — | — | — |
| U   | pending | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as \`*[awaiting synthesis]*\`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

function productStub(entry) {
  const slug = entry.target
  const title = titleCase(slug)
  const primaryMetals = inferPrimaryMetals(slug)
  const today = new Date().toISOString().slice(0, 10)

  return `---
type: product-category
category: ${slug}
title: "${title}"
typical_ingredients: []
primary_metals_of_concern: [${primaryMetals.join(", ")}]
vulnerable_population: general_population
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: ${today}
sources: ${entry.count}
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: ${entry.count}
---

# ${title}

This page is an autonomy-created stub product-category page. The routing audit identified ${entry.count} source pages in the corpus declaring \`products: [${slug}]\` in their frontmatter without a dedicated product page existing. Per OPERATING.md Part 3, the autonomy loop created this stub so those sources route to a defined target. The synthesis pass per CLAUDE.md Part 9 populates the evidence-summary table as sources accumulate.

## Who this page is for

This stub will be developed for the brand-legal, retailer-compliance, HMTc-internal, and regulator audiences per OPERATING.md Part 2. Until evidence is synthesized, the page exists primarily as a routing target so the corpus's references to this product category resolve to a defined location.

## Methodology

This page will report literature evidence per CLAUDE.md Part 6's product-category-page template. Speciation is non-substitutable (iAs vs tAs, Cr-VI vs total Cr, MeHg vs tHg); basis is preserved and labeled; non-detect handling follows the source's own convention; pooling avoided across LOQ, period, geography, and analytical-basis differences. Percentile-selection arithmetic does not appear on this public page (CLAUDE.md Part 2 firewall); it lives on the staff Standards Workbench.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated by \`tools/evidence/apply-product-hmtc-evidence-summaries.mjs\` once sources route and the pooling engine emits aggregate rows for this product category._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as sources contribute._

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by \`tools/evidence/apply-product-broad-context.mjs\` once broad-scope sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending: regenerated by \`tools/apply-product-crosswalk-sections.mjs\` once \`applicable_regulations\` are identified and field-finding evidence is pooled._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

_Pending: populated by the synthesis pass when ingredient-level mitigation evidence is sufficient. Cross-links to relevant \`mitigation/\` pages and the contributing ingredients' Mitigation options sections._

## How standards math uses this page

The percentile arithmetic that informs HMTc thresholds lives in \`data/workbench/standards/${slug}.md\` (the staff snapshot). This public page reports literature evidence; the staff workbench applies the methodology in CLAUDE.md Part 19 to produce candidate threshold values. The gap between literature-baseline and HMTc threshold is named honestly on the workbench, not hidden.

## Historical recalls and enforcement

_Public-record regulatory events for this product category will be summarized here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as \`*[awaiting synthesis]*\`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

function titleCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function inferIngredientCategory(slug) {
  if (/oil$/.test(slug)) return "oil"
  if (/vinegar$/.test(slug)) return "vinegar"
  if (/herb|spice|cinnamon|turmeric|pepper|parsley/.test(slug)) return "herb-spice"
  if (/leafy|lettuce|cabbage|spinach|kale/.test(slug)) return "leafy-vegetable"
  if (/seaweed|algae|kelp/.test(slug)) return "algae"
  if (/^canned-/.test(slug)) return "canned-product"
  if (/tuna|shark|salmon|fish|seafood|tilapia|cod|mackerel|sardine/.test(slug)) return "fish-seafood"
  if (/mollusc|clam|oyster|mussel|squid|octopus|shrimp/.test(slug)) return "shellfish"
  if (/walnut|hazelnut|almond|cashew|pecan|pistachio|peanut|nut$/.test(slug)) return "nut"
  if (/bean|legume|lentil|pea/.test(slug)) return "legume"
  if (/juice/.test(slug)) return "juice"
  if (/milk|dairy|cheese|yogurt|cream|butter/.test(slug)) return "dairy"
  if (/maize|corn|wheat|rice|oat|barley|rye|grain/.test(slug)) return "grain"
  if (/tomato|cucumber|zucchini|squash|pepper-vegetable/.test(slug)) return "vegetable-fruit"
  if (/raspberr|strawberr|blueberr|blackberr|cherry|grape|plum|apple|pear|peach|nectarine|mango|guava|olive|fruit/.test(slug)) return "fruit"
  if (/mushroom|fungus/.test(slug)) return "fungus"
  if (/bread|cracker|biscuit|pastry/.test(slug)) return "baked-good"
  if (/beverage|drink/.test(slug)) return "beverage"
  return "uncategorized"
}

function inferDrivers(slug) {
  if (/oil$/.test(slug)) return ["seed-source", "extraction-method", "refining", "storage"]
  if (/vinegar$/.test(slug)) return ["fermentation-substrate", "production-method", "storage", "leaching"]
  if (/seaweed|algae/.test(slug)) return ["ocean-water-quality", "species", "harvest-region", "processing"]
  if (/herb|spice|cinnamon|turmeric/.test(slug)) return ["soil-uptake", "geography", "drying", "milling", "adulteration"]
  if (/tuna|shark|fish|mollusc|seafood/.test(slug)) return ["bioaccumulation", "trophic-level", "harvest-region", "species"]
  if (/leafy|lettuce|cabbage/.test(slug)) return ["soil-uptake", "irrigation-water", "atmospheric-deposition", "geography"]
  if (/^canned-/.test(slug)) return ["raw-material-load", "leaching-from-container", "lining-material", "storage-duration"]
  if (/nut$|walnut|hazelnut|cashew|peanut/.test(slug)) return ["soil-uptake", "shell-permeability", "geography", "storage"]
  return ["soil-uptake", "geography", "processing"]
}

function inferPrimaryMetals(slug) {
  // Reuse the canonical product-class heuristics from heal-gaps.mjs.
  if (/infant|baby|toddler/.test(slug)) return ["Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "Ni", "Al", "Cr-VI", "Sn"]
  if (/fish|seafood|tuna|shark|mollusc|shellfish/.test(slug)) return ["Pb", "Cd", "tAs", "MeHg", "tHg"]
  if (/^canned-/.test(slug)) return ["Pb", "Cd", "Sn", "tAs"]
  if (/tea|infusion/.test(slug)) return ["Pb", "Cd", "Al", "tAs"]
  if (/juice/.test(slug)) return ["Pb", "Cd", "iAs", "tAs"]
  if (/spice|herb|seasoning/.test(slug)) return ["Pb", "Cd", "tAs", "Cr"]
  if (/honey/.test(slug)) return ["Pb", "Cd", "tAs"]
  if (/supplement|vitamin/.test(slug)) return ["Pb", "Cd", "iAs", "tAs", "tHg", "Ni", "Cr-VI"]
  if (/chocolate/.test(slug)) return ["Pb", "Cd"]
  if (/master/.test(slug)) return ["Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "Ni", "Al", "Cr-VI", "Sn"]
  return ["Pb", "Cd", "tAs"]
}

// =========================================================================
// Utilities
// =========================================================================

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    const match = a.match(/^--([^=]+)(?:=(.*))?$/)
    if (match) m.set(match[1], match[2] ?? "true")
  }
  return m
}

function csvField(value) {
  const str = String(value ?? "")
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

function listSlugs(dir) {
  if (!fs.existsSync(dir)) return new Set()
  const slugs = new Set()
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    slugs.add(path.basename(file, ".md"))
  }
  return slugs
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j++) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQuote = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuote) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i += 1
        } else {
          inQuote = false
        }
      } else {
        cur += ch
      }
    } else {
      if (ch === '"') inQuote = true
      else if (ch === ",") {
        out.push(cur)
        cur = ""
      } else cur += ch
    }
  }
  out.push(cur)
  return out
}
