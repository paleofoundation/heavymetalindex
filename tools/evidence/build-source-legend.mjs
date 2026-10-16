#!/usr/bin/env node
// Generates marker-bounded source legend tables on product, ingredient,
// and metal pages. Per Karen's standing rule (the infant-formula-powder-non-soy
// page as exemplar), every consumer page should end with a scannable table
// listing the sources that contribute to it: #, citation, year, type, and
// "Used on this page for".
//
// Tier 1 (this script): mechanical generation of #, citation, year, type.
// The "Used on this page for" column is emitted as `*[awaiting synthesis]*`
// placeholder and gets populated by the orchestrator's
// POPULATE-SOURCE-LEGEND action.
//
// Source → target relationships:
//   products:     frontmatter slugs and [[products/<slug>]] wikilinks,
//                 unioned with data/evidence/product_source_routing_audit.csv.
//                 The audit still fans broad tokens out to subcategory pages.
//   ingredients:  ["[[ingredients/<slug>]]", ...]  →  wiki/ingredients/<slug>.md
//   metals:       [Pb, Cd, iAs, ...] → wiki/metals/<metal>.md (mapped)
//
// Marker convention: <!-- BEGIN: hmi-source-legend --> / <!-- END: hmi-source-legend -->
// wraps the generated section so the prebuild regenerator can replace
// contents without disturbing surrounding prose. Non-markered `## Sources`
// sections are overwritten in place — all wiki content is Claude-generated
// and nothing requires manual migration.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { citationReviewIssue } from "../lib/source-publication.mjs"
import {
  displayType,
  renderAuthorLabel,
} from "../lib/citation-format.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const wikiRoot = path.join(repoRoot, "wiki")
const lintPath = path.join(repoRoot, "wiki/lint", `${new Date().toISOString().slice(0, 10)}-source-legend-migration.md`)

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
// --count-only prints product edge counts and writes nothing.
// --sync-new-product-rows appends publishable frontmatter-only product
// rows into existing legend tables. It does not rewrite notes or drop rows.
const countOnly = args.includes("--count-only")
const syncNewProductRows = args.includes("--sync-new-product-rows")
const targetFilter = (() => {
  const idx = args.indexOf("--only")
  return idx >= 0 ? args[idx + 1] : null  // optional: "products" / "ingredients" / "metals"
})()

const BEGIN_MARKER = "<!-- BEGIN: hmi-source-legend -->"
const END_MARKER = "<!-- END: hmi-source-legend -->"

// Metal symbol → page slug mapping. Symbols in frontmatter (Pb, Cd, etc.)
// map to canonical wiki/metals/<name>.md pages.
const METAL_PAGES = {
  Pb: "lead",
  Cd: "cadmium",
  iAs: "arsenic-inorganic",
  tAs: "arsenic-total",
  MeHg: "mercury-methyl",
  tHg: "mercury-total",
  Ni: "nickel",
  Al: "aluminum",
  Cr: "chromium",
  "Cr-VI": "chromium-hexavalent",
  Sn: "tin",
  Sb: "antimony",
  U: "uranium",
}

function isDuplicateSource(fm) {
  return String(fm.status || "").trim().toLowerCase() === "duplicate" || Boolean(fm.canonical_source)
}

// String slugs and [[products/<slug>]] wikilinks both become the page slug.
function productSlugFromFrontmatter(entry) {
  if (typeof entry !== "string") return ""
  let slug = entry.trim()
  if (slug.startsWith("[[")) {
    const linked = slug.match(/^\[\[products\/([^\]|#]+?)(?:\|[^\]]*)?\]\]$/)
    if (!linked) return ""
    slug = linked[1].trim()
  } else {
    slug = slug.replace(/^products\//, "").trim()
  }
  if (!/^[A-Za-z0-9._-]+$/.test(slug) || slug === "index") return ""
  return slug
}

// ---------- Step 1: build reverse index source → target pages ----------

const sourceFiles = fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md"))
const sourcesByCiteKey = new Map()
// targetKey is e.g. "products/infant-formula-powder-non-soy" or "metals/lead"
const targetToSources = new Map()
// Routing-audit product edges only, kept so --count-only can report the
// before/after union. Not used for the written legend.
const csvProductToSources = new Map()

for (const file of sourceFiles) {
  const fullPath = path.join(sourcesDir, file)
  const raw = fs.readFileSync(fullPath, "utf8")
  let fm
  try {
    fm = matter(raw).data
  } catch (e) {
    continue  // skip pages with malformed frontmatter
  }
  if (isDuplicateSource(fm)) continue
  const citeKey = fm.cite_key || file.replace(/\.md$/, "")
  sourcesByCiteKey.set(citeKey, {
    file,
    fm,
    citeKey,
  })
  // Ingredients (via frontmatter — no audit alternative)
  const ingredients = Array.isArray(fm.ingredients) ? fm.ingredients : []
  for (const i of ingredients) {
    if (!i || typeof i !== "string") continue
    const slug = i.replace(/^\[\[ingredients\//, "").replace(/\]\]$/, "").trim()
    if (!slug) continue
    const key = `ingredients/${slug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(citeKey)
  }
  // Metals — symbol-to-page mapping via frontmatter
  const metals = Array.isArray(fm.metals) ? fm.metals : []
  for (const m of metals) {
    if (!m || typeof m !== "string") continue
    const pageSlug = METAL_PAGES[m.trim()]
    if (!pageSlug) continue
    const key = `metals/${pageSlug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(citeKey)
  }
  // Products named on the source page. Unioned with the routing audit below.
  const products = Array.isArray(fm.products) ? fm.products : []
  for (const product of products) {
    const slug = productSlugFromFrontmatter(product)
    if (!slug) continue
    const key = `products/${slug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(citeKey)
  }
}

// Products also come from the routing audit. It fans broad-token frontmatter
// like `products: [infant-formula]` out to specific subcategory pages like
// infant-formula-powder-non-soy via direct_evidence and broad_*_context routes.
// Those rows stay. Frontmatter slugs above are added, then both lists are deduped.
const auditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
if (fs.existsSync(auditPath)) {
  const rows = parseCsv(fs.readFileSync(auditPath, "utf8"))
  for (const row of rows) {
    const productSlug = row.product_slug
    const sourceId = row.source_id
    if (!productSlug || !sourceId) continue
    // Skip the "no route" diagnostic rows where source_id is the placeholder
    if (sourceId === "—" || sourceId === "") continue
    const key = `products/${productSlug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(sourceId)
    if (!csvProductToSources.has(productSlug)) csvProductToSources.set(productSlug, [])
    csvProductToSources.get(productSlug).push(sourceId)
  }
}

// Dedupe each target's source list
for (const [k, v] of targetToSources) {
  targetToSources.set(k, [...new Set(v)])
}

console.log(`Indexed ${sourcesByCiteKey.size} source pages across ${targetToSources.size} target pages.`)

// Public-legend allow-lists. Routing rows and source records stay as they are.
// baby-wipes: frontmatter currently attaches a large set of sources that do not
// measure or regulate metals in wipes. The public table keeps the measurement
// record and one labeled pathway-context record.
const PUBLIC_LEGEND_ALLOW = new Map([
  ["products/baby-wipes", [
    "biver2021-antimony-release-polyester-artificial-sweat",
    "choi2016-wet-wipes-nonwoven-heavy-metals",
    "cpqs2026-online-baby-wipes-quality-monitoring",
    "gocer2025-baby-wet-wipes-solution-fiber-packaging",
    "nyamukamba2023-south-africa-diapers-metals-formaldehyde",
    "shin2004-disposable-diaper-heavy-metals",
    "smajgl2015-tin-baby-diapers-croatia",
    "stone2021-wa-metals-childrens-consumer-products",
  ]],
])
const PUBLIC_LEGEND_USED_FOR = new Map([
  ["ingredients/spinach", new Map([
    ["saleem2025-nd-vegetables-hra", "Local-market spinach occurrence, five samples, dry-weight basis. Total-element results are not species measurements; no fresh-weight compliance inference is made."],
    ["see2025-malaysia-leafy-vegetables-icp-oes", "Three washed fresh-spinach composites from one Malaysian market. Aluminum was measured; lead, cadmium and chromium were below method detection limits. Intake benchmarks are not food concentration limits."],
    ["abdolahpour2023-heavy-metals-babol-vegetables", "Four spinach samples from Babol, Iran; fresh-weight lead and cadmium means, with source-table inconsistencies retained. No countrywide estimate."],
    ["cardini2025-cadmium-speciation-plant-foods-sec-icp", "Cross-food analytical context. Beetroot leaves and other plant foods are not direct spinach occurrence measurements."],
    ["fatai2024-african-spinach-tomato-nigeria", "Botanical-scope context: African spinach is Amaranthus hybridus, not Spinacia oleracea; results are not substituted for commercial spinach."],
  ])],
  ["products/baby-wipes", new Map([
    ["cpqs2026-online-baby-wipes-quality-monitoring", "Measurement. Twenty-one online baby wipes, China, April 2026. Annex image: total antimony on a per-liter label in 20 of 21 columns, preferred reads 15.02 to 450.45 µg/L. One column not detected. Lead, cadmium, arsenic, and mercury read as not detected on a unit that was not adopted. Not milligrams per kilogram. Not the Choi digest."],
    ["gocer2025-baby-wet-wipes-solution-fiber-packaging", "Measurement. Ten Turkish baby wipes, coded A–J. Squeezed liquid, digested fiber, and digested packaging reported separately, in ppb of the ICP-MS solution. Not milligrams per kilogram. Several maxima are printed twice and conflict. Antimony results above 50 ppb sit above the stated calibration."],
    ["shin2004-disposable-diaper-heavy-metals", "Pathway context, not a wipe measurement. Scanned 2004 paper on eleven disposable diapers. Table 1 total-digest antimony is quoted only where the results prose and the table image agree. Timed urine-extract tables were not transcribed."],
    ["choi2016-wet-wipes-nonwoven-heavy-metals", "Measurement. Twenty-four wet-wipe sheets digested for ICP-MS. Antimony, lead, arsenic, and nickel in micrograms per liter of digest solution. A labeled reconstruction multiplies by 0.125 if the volume is taken as 25 mL and the mass as 0.200 g. That reconstruction is not the printed result. Cadmium and mercury not detected. Mask packs in the same paper are not baby wipes."],
    ["stone2021-wa-metals-childrens-consumer-products", "Measurement. Washington Ecology ICP-MS of three wipe components and two wipe packages. Antimony, lead, and total chromium in ppm. The report does not print EPA 3052. The 2012 plans it cites do, with a 1.0 ppm reporting limit for those metals. Printed values below 1.0 ppm are not restated as less-than that limit. The panel has no nickel, tin, or aluminum column. Only components with a metal of concern on the XRF screen went to the laboratory."],
    ["biver2021-antimony-release-polyester-artificial-sweat", "Pathway context, not a wipe measurement. Polyester textiles. Total antimony about 125 to 470 µg/g. Default artificial sweat mobilized about 0.05 to 2 percent, or 0.1 to 1 µg/g in the abstract. Table 1 extractable results run up to 2.572 µg/g."],
    ["nyamukamba2023-south-africa-diapers-metals-formaldehyde", "Pathway context, not a wipe measurement. Extractable metals in 20 disposable diapers. Nickel was the only metal the authors reported above the Oeko-Tex figure they used (0.1 mg/kg). Total chromium is also reported. Tin and aluminum are not in the panel."],
    ["smajgl2015-tin-baby-diapers-croatia", "Pathway context, not a wipe measurement. Total tin by EDXRF in diaper top sheets and adhesive tape. The publisher abstract gives the ranges used on this page. The method does not speciate organotin."],
  ])],
  ["products/diaper-cream-zno", new Map([
    ["rubin2025a-40pct-zno-diaper-ointment-lot-2025-142", "Measurement, grey literature. One unit of a 40% zinc oxide ointment, ICP-MS, as received: lead 3303.8 ppb, cadmium 55.50 ppb, arsenic < 10.00, mercury < 5.00 ppb. Single lot, no published quality control."],
    ["rubin2025b-40pct-zno-diaper-paste-lot-2025-169", "Measurement, grey literature. One unit of a 40% zinc oxide paste, ICP-MS, as received: lead 1401.0 ppb, cadmium 509.5 ppb, arsenic < 10.00, mercury < 5.00 ppb. Single lot."],
    ["rubin2025c-40pct-zno-diaper-paste-lot-2025-182", "Measurement, grey literature. One unit of a 40% zinc oxide paste, ICP-MS, as received: lead 4657.1 ppb, cadmium 473.1 ppb, arsenic < 10.00, mercury < 5.00 ppb. Single lot."],
    ["rubin2025d-13pct-zno-diaper-cream-lot-2025-218", "Measurement, grey literature. One unit of a 13% zinc oxide cream, ICP-MS, as received: lead 1244.1 ppb, cadmium 45.26 ppb, arsenic < 10.00, mercury < 5.00 ppb. Single lot."],
    ["rubin2026-diaper-cream-comparison-chart-11-products", "Grey-literature chart of eleven products, rounded ppb. Four values match the laboratory reports on this page. Seven have no report on file and are not verified. No product without zinc oxide was charted."],
    ["agren1991-zno-vehicles-zinc-absorption-skin-wounds", "Zinc pathway, not lead or cadmium. Occlusive zinc oxide dressings: epidermal zinc 49 and 127 µg/g dry weight on intact adult skin; rat serum zinc up to 4.06 µg/ml through full-thickness wounds against 0.95 in controls."],
    ["khabir2021-epidermal-zinc-zno-nanoparticle-sunscreen", "Zinc pathway, intact adult skin ex vivo. Exogenous zinc in viable epidermis 1.0 µg/mL against endogenous 4.3 µg/mL after a 20% zinc oxide nanoparticle formulation. Sunscreen vehicle, not a diaper cream."],
    ["pal2016-uvb-zno-nanoparticle-penetration-hairless-mouse", "Zinc pathway, mouse. UVB increased skin zinc uptake from topical zinc oxide nanoparticles. Numeric values only in a supplementary figure not on file."],
    ["yasugi2026-hyperzincemia-zno-ointment-preterm-infant", "Zinc pathway, single case. Preterm infant on oral zinc; serum zinc 427 µg/dL during zinc oxide ointment on eroded diaper dermatitis, 52 µg/dL after both were stopped. Naranjo 9."],
    ["sccs2012-zinc-oxide-nano-opinion-1489-12", "EU opinion on nano zinc oxide in sunscreen. No impurity data provided; impurities inferred at 1% or less. Adopted dermal absorption of zinc 0.03% of applied dose."],
    ["ich2022-q3d-r2-elemental-impurities", "Drug-product guideline. Cutaneous PDEs: cadmium 20, lead 50, arsenic 30, mercury 30 µg/day; 2, 5, 3, 3 µg/g at a 10 g daily dose. Not for skin with substantial basal-layer disruption."],
    ["healthcanada2015-natural-health-products-quality-guide", "Canadian topical natural health product limits: arsenic 3, cadmium 3, lead 10, total mercury 1, antimony 5 ppm, finished product. Applies to licensed zinc oxide diaper-rash products via the 2024 monograph."],
    ["healthcanada2024-nnhpd-diaper-rash-products-monograph", "Canadian diaper-rash monograph. Zinc oxide 1 to 25%, or 25 to 40% as ointment, pharmacopoeial grade. No metal limit in the monograph itself."],
    ["healthcanada2012-cosmetics-heavy-metal-impurities", "Canadian cosmetic impurity limits: lead 10, arsenic 3, cadmium 3, mercury 1, antimony 5 ppm, finished product. Applies where a product is sold as a cosmetic."],
    ["bvl2017-technically-avoidable-heavy-metals-cosmetics", "German technically avoidable levels for cosmetics in general: lead 2.0, cadmium 0.1, mercury 0.1, arsenic 0.5, antimony 0.5 mg/kg, finished product. Diaper creams were not a named monitoring group."],
    ["fda2023-21cfr-part73-color-additives", "US zinc oxide colour-additive specification (21 CFR 73.1991, 73.2991): cadmium 15, mercury 1, arsenic 3, lead 20 ppm of the ingredient. Not a finished-product limit and not the drug-active specification."],
    ["fda2025-21cfr347-skin-protectant-otc", "US OTC skin protectant monograph: zinc oxide 1 to 25 percent. No heavy-metal limit for the finished product."],
    ["fda1990-55fr25204-diaper-rash-tentative-final-monograph", "US 1990 proposed diaper-rash rule: zinc oxide above 25 to 40 percent only in an ointment dosage form. No heavy-metal specification."],
    ["fda2003-68fr33362-skin-protectant-final-monograph", "US 2003 final skin protectant monograph. Zinc oxide 1 to 25 percent; diaper-rash claims deferred to a separate rule. No metal limit."],
    ["edqm2026-pheur-0252-zinc-oxide-knowledge-database", "European Pharmacopoeia zinc oxide monograph record: thallium 5 ppm added, arsenic test deleted, cadmium and lead limits updated but not given in the free pages."],
  ])],
])
const PUBLIC_LEGEND_NOTE = new Map([
  ["products/baby-wipes", `<p class="hmi-table-note">This table lists source records that measure metals in wipes, or that are labeled pathway context. Other files whose routing frontmatter names this category are not measurements of wipes. Those records are not deleted.</p>`],
])

if (countOnly) {
  reportProductLegendCounts()
  process.exit(0)
}

// ---------- Step 2: render and write to each target page ----------

const stats = {
  generated: 0,
  regenerated: 0,
  skipped_no_target_page: 0,
  flagged_for_migration: 0,
  unchanged: 0,
  rows_added: 0,
  skipped_no_legend_table: 0,
  skipped_legend_pages: [],
}
const flaggedForMigration = []
const citationReview = []

for (const [targetKey, citeKeys] of targetToSources) {
  if (targetFilter && !targetKey.startsWith(targetFilter + "/")) continue
  const targetPath = path.join(wikiRoot, `${targetKey}.md`)
  if (!fs.existsSync(targetPath)) {
    stats.skipped_no_target_page++
    continue
  }
  // Skip index.md and stub-only pages
  if (targetKey.endsWith("/index")) continue

  const raw = fs.readFileSync(targetPath, "utf8")
  const allowed = PUBLIC_LEGEND_ALLOW.get(targetKey)
  const legendKeys = allowed
    ? allowed.filter((ck) => sourcesByCiteKey.has(ck))
    : citeKeys
  const publishableKeys = [...new Set(legendKeys)].filter((key) => {
    const source = sourcesByCiteKey.get(key)
    const issue = source ? citationReviewIssue(source.fm) : "Source record missing"
    if (issue) citationReview.push({ page: targetKey, source: key, reason: issue })
    return !issue
  })
  const sortedSources = publishableKeys.sort((a, b) => compareCiteKeys(a, b))

  if (syncNewProductRows && targetKey.startsWith("products/")) {
    const slug = targetKey.slice("products/".length)
    const csvPublishable = new Set(selectPublishable(targetKey, csvProductToSources.get(slug) || []))
    const toAdd = sortedSources.filter((key) => !csvPublishable.has(key))
    const appended = appendProductLegendRows(raw, toAdd)
    if (appended.skipped) {
      stats.skipped_no_legend_table++
      stats.skipped_legend_pages.push(`${targetKey} (${toAdd.length})`)
      continue
    }
    if (appended.added === 0) {
      stats.unchanged++
      continue
    }
    stats.rows_added += appended.added
    if (!dryRun) fs.writeFileSync(targetPath, appended.content)
    stats.regenerated++
    continue
  }

  const newContent = upsertLegend(
    raw,
    sortedSources,
    targetPath,
    targetKey,
    PUBLIC_LEGEND_USED_FOR.get(targetKey) || new Map(),
    PUBLIC_LEGEND_NOTE.get(targetKey) || `<p class="hmi-table-note">Source records associated with this topic. Inclusion does not establish that every finding applies to this product or ingredient. References above identify works cited in the text.${legendKeys.length > publishableKeys.length ? " Additional records await source or bibliographic review and are excluded from this list." : ""}</p>`,
  )
  if (newContent === null) {
    // upsertLegend returned null → page has hand-curated content needing migration
    continue
  }
  if (newContent === raw) {
    stats.unchanged++
    continue
  }

  if (!dryRun) {
    fs.writeFileSync(targetPath, newContent)
  }
  if (raw.includes(BEGIN_MARKER)) {
    stats.regenerated++
  } else {
    stats.generated++
  }
}

// ---------- Step 3: write lint file for migration candidates ----------
if (!dryRun && !syncNewProductRows) {
  const reviewPath = path.join(repoRoot, `data/audits/public-source-citations${targetFilter ? `-${targetFilter.replace(/[^a-z0-9-]/gi, "-")}` : ""}.json`)
  fs.mkdirSync(path.dirname(reviewPath), { recursive: true })
  fs.writeFileSync(reviewPath, JSON.stringify(citationReview, null, 2) + "\n")
}

if (flaggedForMigration.length > 0) {
  fs.mkdirSync(path.dirname(lintPath), { recursive: true })
  const lintBody = renderMigrationLint(flaggedForMigration)
  if (!dryRun) {
    fs.writeFileSync(lintPath, lintBody)
  }
  stats.flagged_for_migration = flaggedForMigration.length
}

// ---------- Step 4: report ----------

console.log("")
console.log(`Source legend generation:`)
console.log(`  New legends (marker block did not exist): ${stats.generated}`)
console.log(`  Regenerated (marker block updated):       ${stats.regenerated}`)
console.log(`  Unchanged:                                 ${stats.unchanged}`)
console.log(`  Skipped (target page does not exist):     ${stats.skipped_no_target_page}`)
console.log(`  Flagged for manual migration:             ${stats.flagged_for_migration}`)
if (syncNewProductRows) {
  console.log(`  Product legend rows appended:             ${stats.rows_added}`)
  console.log(`  Skipped (legend table missing):           ${stats.skipped_no_legend_table}`)
  for (const page of stats.skipped_legend_pages) console.log(`    ${page}`)
}
if (stats.flagged_for_migration > 0) {
  console.log(`  Migration lint:                            ${path.relative(repoRoot, lintPath)}`)
}
if (dryRun) console.log(`  (dry run — no files written)`)

// ---------- helpers ----------

function compareCiteKeys(a, b) {
  const ya = sourcesByCiteKey.get(a)?.fm?.year ?? 0
  const yb = sourcesByCiteKey.get(b)?.fm?.year ?? 0
  if (ya !== yb) return yb - ya
  return a.localeCompare(b)
}

function selectPublishable(targetKey, citeKeys) {
  const allowed = PUBLIC_LEGEND_ALLOW.get(targetKey)
  const legendKeys = allowed
    ? allowed.filter((ck) => sourcesByCiteKey.has(ck))
    : citeKeys
  const out = []
  const seen = new Set()
  for (const key of legendKeys) {
    if (seen.has(key)) continue
    seen.add(key)
    const source = sourcesByCiteKey.get(key)
    const issue = source ? citationReviewIssue(source.fm) : "Source record missing"
    if (!issue) out.push(key)
  }
  return out.sort(compareCiteKeys)
}

function appendProductLegendRows(raw, citeKeys) {
  const result = { content: raw, added: 0, skipped: false }
  if (citeKeys.length === 0) return result
  if (!raw.includes(BEGIN_MARKER) || !raw.includes(END_MARKER)) {
    result.skipped = true
    return result
  }
  const re = new RegExp(`${escapeRe(BEGIN_MARKER)}([\\s\\S]*?)${escapeRe(END_MARKER)}`)
  const match = raw.match(re)
  if (!match) {
    result.skipped = true
    return result
  }
  const block = match[1]
  const present = new Set([...block.matchAll(/\[\[sources\/([a-z0-9._-]+)/gi)].map((item) => item[1]))
  const missing = citeKeys.filter((key) => !present.has(key) && sourcesByCiteKey.has(key))
  if (missing.length === 0) return result
  const lines = block.split("\n")
  let lastRow = -1
  let separator = -1
  let maxNum = 0
  for (let i = 0; i < lines.length; i++) {
    if (/^\|\s*-+/.test(lines[i])) separator = i
    const num = lines[i].match(/^\|\s*(\d+)\s*\|/)
    if (num) {
      lastRow = i
      maxNum = Math.max(maxNum, Number(num[1]))
    }
  }
  const insertAt = lastRow >= 0 ? lastRow + 1 : (separator >= 0 ? separator + 1 : -1)
  if (insertAt < 0) {
    result.skipped = true
    return result
  }
  const rendered = missing.map((key, index) => (
    renderRow(maxNum + index + 1, sourcesByCiteKey.get(key), "*[awaiting synthesis]*")
  ))
  lines.splice(insertAt, 0, ...rendered)
  result.added = missing.length
  result.content = raw.replace(re, () => `${BEGIN_MARKER}${lines.join("\n")}${END_MARKER}`)
  return result
}

function reportProductLegendCounts() {
  const productDir = path.join(wikiRoot, "products")
  const pageSlugs = new Set(
    fs.existsSync(productDir)
      ? fs.readdirSync(productDir)
        .filter((name) => name.endsWith(".md") && name !== "index.md")
        .map((name) => name.slice(0, -3))
      : [],
  )

  function citeSet(map, key) {
    return new Set(map.get(key) || [])
  }

  function publishableKeys(slug, citeKeys) {
    const targetKey = `products/${slug}`
    const allowed = PUBLIC_LEGEND_ALLOW.get(targetKey)
    const legendKeys = allowed
      ? allowed.filter((ck) => sourcesByCiteKey.has(ck))
      : [...citeKeys]
    const out = new Set()
    for (const key of legendKeys) {
      const source = sourcesByCiteKey.get(key)
      const issue = source ? citationReviewIssue(source.fm) : "Source record missing"
      if (!issue) out.add(key)
    }
    return out
  }

  function onPageKeys(slug) {
    const pagePath = path.join(productDir, `${slug}.md`)
    if (!fs.existsSync(pagePath)) return new Set()
    const raw = fs.readFileSync(pagePath, "utf8")
    const marked = raw.match(/<!-- BEGIN: hmi-source-legend -->([\s\S]*?)<!-- END: hmi-source-legend -->/)
    const text = marked ? marked[1] : ""
    return new Set([...text.matchAll(/\[\[sources\/([a-z0-9._-]+)/gi)].map((m) => m[1]))
  }

  let beforeEdges = 0
  let afterEdges = 0
  let beforePages = 0
  let afterPages = 0
  let beforePublishable = 0
  let afterPublishable = 0
  let beforePublishablePages = 0
  let afterPublishablePages = 0
  let missingPublishableRows = 0
  let pagesMissingPublishable = 0
  const deltas = []
  const publishableDeltas = []

  for (const slug of pageSlugs) {
    const before = citeSet(csvProductToSources, slug)
    const after = citeSet(targetToSources, `products/${slug}`)
    beforeEdges += before.size
    afterEdges += after.size
    if (before.size > 0) beforePages++
    if (after.size > 0) afterPages++
    const delta = after.size - before.size
    if (delta !== 0) deltas.push({ slug, before: before.size, after: after.size, delta })

    const publishBefore = publishableKeys(slug, before)
    const publishAfter = publishableKeys(slug, after)
    beforePublishable += publishBefore.size
    afterPublishable += publishAfter.size
    if (publishBefore.size > 0) beforePublishablePages++
    if (publishAfter.size > 0) afterPublishablePages++
    const publishDelta = publishAfter.size - publishBefore.size
    if (publishDelta !== 0) {
      publishableDeltas.push({ slug, before: publishBefore.size, after: publishAfter.size, delta: publishDelta })
    }

    const listed = onPageKeys(slug)
    let missing = 0
    for (const key of publishAfter) {
      if (!publishBefore.has(key) && !listed.has(key)) missing++
    }
    if (missing > 0) {
      missingPublishableRows += missing
      pagesMissingPublishable++
    }
  }

  deltas.sort((a, b) => b.delta - a.delta || a.slug.localeCompare(b.slug))
  publishableDeltas.sort((a, b) => b.delta - a.delta || a.slug.localeCompare(b.slug))

  const allSlugs = new Set(csvProductToSources.keys())
  for (const key of targetToSources.keys()) {
    if (key.startsWith("products/")) allSlugs.add(key.slice("products/".length))
  }
  let allBefore = 0
  let allAfter = 0
  let allBeforeSlugs = 0
  let allAfterSlugs = 0
  for (const slug of allSlugs) {
    const before = citeSet(csvProductToSources, slug)
    const after = citeSet(targetToSources, `products/${slug}`)
    allBefore += before.size
    allAfter += after.size
    if (before.size > 0) allBeforeSlugs++
    if (after.size > 0) allAfterSlugs++
  }

  const printRows = (rows) => {
    console.log("slug\tbefore\tafter\tdelta")
    for (const row of rows) console.log(`${row.slug}\t${row.before}\t${row.after}\t${row.delta}`)
  }

  console.log("")
  console.log("Product to source edges on existing product pages (deduped cite keys).")
  console.log("Before is the routing audit only. After unions source frontmatter products.")
  console.log(`  edges_before: ${beforeEdges}`)
  console.log(`  edges_after: ${afterEdges}`)
  console.log(`  edges_delta: ${afterEdges - beforeEdges}`)
  console.log(`  pages_with_sources_before: ${beforePages}`)
  console.log(`  pages_with_sources_after: ${afterPages}`)
  console.log(`  pages_delta: ${afterPages - beforePages}`)
  console.log(`  pages_with_edge_delta: ${deltas.length}`)
  console.log("Top 15 existing product pages by edge delta:")
  printRows(deltas.slice(0, 15))
  console.log("")
  console.log("Publishable legend rows on existing product pages.")
  console.log("Citation review and the public allow-lists still apply. Allow-lists are unchanged.")
  console.log(`  rows_before: ${beforePublishable}`)
  console.log(`  rows_after: ${afterPublishable}`)
  console.log(`  rows_delta: ${afterPublishable - beforePublishable}`)
  console.log(`  pages_before: ${beforePublishablePages}`)
  console.log(`  pages_after: ${afterPublishablePages}`)
  console.log(`  pages_with_publishable_delta: ${publishableDeltas.length}`)
  console.log("Top 15 existing product pages by publishable-row delta:")
  printRows(publishableDeltas.slice(0, 15))
  console.log("")
  console.log(`Publishable frontmatter-only rows not already listed in the page legend: ${missingPublishableRows} across ${pagesMissingPublishable} pages.`)
  console.log("Index including product slugs that have no wiki page:")
  console.log(`  edges_before: ${allBefore}`)
  console.log(`  edges_after: ${allAfter}`)
  console.log(`  slugs_before: ${allBeforeSlugs}`)
  console.log(`  slugs_after: ${allAfterSlugs}`)
}

function renderLegend(citeKeys, preservedContributions = new Map(), seedContributions = new Map(), noteHtml = null) {
  if (citeKeys.length === 0) {
    return [
      BEGIN_MARKER,
      "## Sources",
      "",
      "No source records are ready to list for this topic. This is a review gap, not evidence that the contaminant is absent.",
      END_MARKER,
    ].join("\n")
  }

  const lines = [
    BEGIN_MARKER,
    "## Sources",
    "",
    // COMPONENTS §10 caption: emitted as a classed HTML paragraph (not markdown
    // emphasis) so the shared `.hmi-table-note` rule in v3-primitives.scss styles
    // it (11.5px / #a9a1a2). Raw HTML blocks render as-is in Quartz; the blank
    // line below separates it from the markdown table so the table still parses.
    noteHtml || `<p class="hmi-table-note">Source records associated with this topic. Consult each record for its scope and limitations.</p>`,
    "",
    "| # | Citation | Year | Type | Used on this page for |",
    "| --- | --- | ---: | --- | --- |",
  ]
  citeKeys.forEach((ck, i) => {
    const s = sourcesByCiteKey.get(ck)
    if (!s) return
    const usedFor = seedContributions.get(ck) || preservedContributions.get(ck) || "*[awaiting synthesis]*"
    lines.push(renderRow(i + 1, s, usedFor))
  })
  lines.push(END_MARKER)
  return lines.join("\n")
}

function renderRow(num, source, usedFor) {
  if (/Not mechanically resolved|occurrence in null|awaiting synthesis/i.test(usedFor)) usedFor = "Contribution to this topic remains under review; see the source record for its reported scope."
  const fm = source.fm
  const ck = source.citeKey
  const title = (fm.title || "(untitled)").replace(/\|/g, "\\|")
  const pub = fm.publication ? `, ${String(fm.publication).replace(/\|/g, "\\|")}` : ""
  const year = fm.year || "—"
  const type = displayType(fm.source_type)
  const authorLabel = renderAuthorLabel(fm.authors, fm.year, ck)
  const cite = `[[sources/${ck}\\|${authorLabel}]]. *${title}*${pub}`
  return `| ${num} | ${cite} | ${year} | ${type} | ${usedFor} |`
}

// Parses any existing source-legend block (either marker-bounded or a
// plain `## Sources` section) and extracts the per-cite-key "Used on this
// page for" contribution text. Returns a Map of citeKey → contribution.
// Recognizes three legacy shapes:
//   1. A 5-column markdown table with "Used on this page for" header
//   2. A bullet list of `[[sources/<key>]]` (no contribution data to preserve)
//   3. Free-form prose (flagged separately)
function parseExistingContributions(rawSection) {
  const out = new Map()
  if (!rawSection) return out
  const lines = rawSection.split("\n")
  // Look for table rows after the header row.
  let inTable = false
  for (const line of lines) {
    if (/^\|\s*#\s*\|/.test(line) && /used on this page for/i.test(line)) {
      inTable = true
      continue
    }
    if (inTable && /^\|\s*-+/.test(line)) continue  // separator row
    if (inTable && !line.startsWith("|")) {
      inTable = false
      continue
    }
    if (inTable && line.startsWith("|")) {
      // Wikilinks use `\|` to escape pipes inside the link display label
      // (e.g. `[[sources/key\|Display]]`). A naive split on `|` would break
      // those in half, so we protect escaped pipes first.
      const safe = line.replace(/\\\|/g, "\x00")
      const cells = safe.split("|").map((c) => c.replace(/\x00/g, "\\|").trim()).filter(Boolean)
      // Expect: [#, Citation, Year, Type, Used on this page for]
      if (cells.length < 5) continue
      const citeCell = cells[1]
      const usedFor = cells[4]
      // Extract cite_key from `[[sources/<key>|...]]` or `[[sources/<key>]]`
      const m = citeCell.match(/\[\[sources\/([a-z0-9._-]+)(?:\\?\|[^\]]*)?\]\]/i)
      if (!m) continue
      const ck = m[1]
      if (usedFor && usedFor !== "*[awaiting synthesis]*" && usedFor !== "—") {
        out.set(ck, usedFor)
      }
    }
  }
  return out
}

// Detect if a `## Sources` section is just a bullet list of source
// wikilinks (no rich per-source data to preserve). Such sections are safe
// to overwrite without manual migration.
function isSimpleBulletList(content) {
  const trimmed = content.trim()
  if (!trimmed) return true
  const lines = trimmed.split("\n").filter((l) => l.trim())
  // Allow any leading paragraph (≤2 lines of intro) followed by bullets
  let bulletStart = 0
  while (bulletStart < lines.length && !lines[bulletStart].startsWith("-")) bulletStart++
  if (bulletStart > 2) return false
  const bullets = lines.slice(bulletStart)
  if (bullets.length === 0) return false
  return bullets.every((b) => /^- \[\[sources\/[a-z0-9._-]+/i.test(b.trim()))
}




// "U.S. Food and Drug Administration" → "FDA" (already in known map)
// "European Commission" → "European Commission"
// "Health Canada" → "Health Canada"
// Last-resort shortening for unknown orgs: keep the original name if short
// enough; otherwise return the first 3-4 words.

// Extracts a surname from a single author string. Handles three common forms:
//   - "Lastname F" or "Lastname FI" → first token (e.g. "Chung S" → "Chung")
//   - "Lastname, F." → before-comma (e.g. "Chung, S." → "Chung")
//   - "First M. Last" → last token (e.g. "Rachel C. Thoerig" → "Thoerig")
// Heuristic: if the last whitespace-separated token looks like initials
// (1-3 capital letters, optionally with periods), the first token is the
// surname; otherwise the last token is the surname.

function upsertLegend(raw, citeKeys, targetPath, targetKey, seedContributions = new Map(), noteHtml = null) {
  // Case 1: marker block exists → parse existing contributions, regenerate
  if (raw.includes(BEGIN_MARKER) && raw.includes(END_MARKER)) {
    const re = new RegExp(`${escapeRe(BEGIN_MARKER)}([\\s\\S]*?)${escapeRe(END_MARKER)}`)
    const m = raw.match(re)
    const preserved = m ? parseExistingContributions(m[1]) : new Map()
    const rendered = renderLegend(citeKeys, preserved, seedContributions, noteHtml)
    // Function replacer, not a string: a string replacement would interpret
    // `$&`, `$1`, `$'`, etc. inside the rendered table. Preserved "Used on
    // this page for" cells routinely contain literal dollar amounts (e.g.
    // chiger2017's "$12–18 billion"), where `$1` would expand to capture
    // group 1 — the entire matched block — re-inserting every prior table on
    // each run. That was the source-legend non-idempotency bug.
    return raw.replace(re, () => rendered)
  }
  // Case 2: page has an existing `## Sources` heading with content
  const sourcesHeadingMatch = raw.match(/(^|\n)##\s+Sources\s*\n([\s\S]*?)(?=\n##\s+|\n\s*$)/i)
  if (sourcesHeadingMatch) {
    const existingContent = sourcesHeadingMatch[2].trim()
    const preserved = parseExistingContributions(existingContent)
    // Safe-to-overwrite cases:
    //  - empty / placeholder text
    //  - a 5-column table we successfully parsed (preserved values flow through)
    //  - a simple bullet list of source wikilinks
    const isPlaceholder =
      existingContent === "" ||
      /^_No sources/i.test(existingContent) ||
      /^No source pages/i.test(existingContent)
    const isStructuredTable = preserved.size > 0
    const isBulletList = isSimpleBulletList(existingContent)
    const rendered = renderLegend(citeKeys, preserved, seedContributions, noteHtml)
    // Function replacer for the same reason as Case 1 — keep `$`-bearing
    // citation/contribution text literal rather than letting String.replace
    // treat it as a backreference.
    return raw.replace(sourcesHeadingMatch[0], () => `\n${rendered}\n`)
  }
  // Case 3: no `## Sources` heading at all — append at end of page
  const rendered = renderLegend(citeKeys, new Map(), seedContributions, noteHtml)
  return raw.trimEnd() + "\n\n" + rendered + "\n"
}

function renderMigrationLint(flagged) {
  const today = new Date().toISOString().slice(0, 10)
  const lines = [
    "---",
    `type: lint`,
    `op: lint`,
    `date: ${today}`,
    `scope: source-legend-migration`,
    `status: deferred`,
    `priority: low`,
    "---",
    "",
    `# Source legend migration follow-up — ${today}`,
    "",
    `The Tier 1 source-legend generator (\`tools/evidence/build-source-legend.mjs\`) skipped ${flagged.length} pages because they already carry hand-curated \`## Sources\` content that should not be clobbered by auto-generation. These pages need manual migration into the marker-bounded format used elsewhere.`,
    "",
    `## Workflow`,
    ``,
    `For each flagged page:`,
    ``,
    `1. Compare the existing hand-curated \`## Sources\` table with what the generator would produce (run \`node tools/evidence/build-source-legend.mjs --dry-run --only <kind>\` to preview).`,
    `2. Decide which "Used on this page for" descriptions in the hand-curated table to preserve — those are the higher-quality version of what Tier 2 will eventually generate.`,
    `3. Wrap the hand-curated table in \`<!-- BEGIN: hmi-source-legend -->\` and \`<!-- END: hmi-source-legend -->\` markers.`,
    `4. Re-run the generator — it will see the markers and respect the hand-curated content.`,
    ``,
    `## Flagged pages (${flagged.length})`,
    ``,
  ]
  for (const f of flagged) {
    lines.push(`- \`wiki/${f.targetKey}.md\` — existing content snippet: ${JSON.stringify(f.snippet.slice(0, 120))}...`)
  }
  return lines.join("\n")
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function capitalize(s) {
  if (!s) return ""
  return s[0].toUpperCase() + s.slice(1)
}

// Minimal RFC-4180-ish CSV parser. Handles double-quoted cells with
// embedded commas, quotes-as-double-quotes, and newlines inside quoted
// cells. Returns array of row objects keyed by the header row.
function parseCsv(text) {
  const rows = []
  let i = 0
  const n = text.length
  let cell = ""
  let row = []
  let inQuotes = false
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
