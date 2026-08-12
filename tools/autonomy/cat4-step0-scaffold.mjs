#!/usr/bin/env node
// Cat 4 (Fruits, Vegetables, and Produce) Step 0 lock scaffolder.
//
// Source: Category4_Step_0_Output_LOCKED.md (Karen, 2026-05-16). The
// LOCKED 16-row Step 0 architecture for HMTc Category 4. Built against
// HMTc Taxonomy v2.0 and the Pass 2 occurrence-data extraction from
// the heavymetalindex.com wiki (corpus claude/zealous-bhabha-d422c9,
// 896 source pages).
//
// What this does (one-shot):
//   1. Create the 15 new Cat 4 product-row pages.
//   2. Align the 1 existing page (fresh-fruit) — autonomy_v0 stub —
//      to add hmtc_row + hmtc_category + variant_type frontmatter.
//   3. Append a Category 4 section to wiki/products/index.md.
//
// Does NOT do (handled separately):
//   - Writing the Cat 4 master rollup page (a single rollup is not
//     specified by the Cat 4 lock; the row pages are the canonical
//     surface).
//   - Cross-category cross-link activation (Cat 1 spinach purée,
//     Cat 5 soy plant milk, Cat 16 supplements). Cat 16 not yet built;
//     Cat 1 spinach-puree cross-link added as flagged future link in
//     each row body.
//   - Boundary advisory pages (organic-certification advisory,
//     Wanabana-style adulteration advisory). Separate work.
//
// RETIRED 2026-08-12: this one-shot scaffold encodes the superseded
// clean/contaminated certification-role architecture. Product occurrence
// comparisons are now descriptive only; initial HMTc limits are compiled from
// sovereign-government maxima. The historical implementation is retained
// below for audit provenance and must not be executed.

import fs from "node:fs"
import path from "node:path"

console.error("RETIRED 2026-08-12: Cat 4 clean/contaminated scaffold must not be run; use the current taxonomy and government-limit-only method.")
process.exit(1)

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const indexPath = path.join(productsDir, "index.md")
const today = new Date().toISOString().slice(0, 10)

// The locked 16-row structure. `slug` is the URL; `row` is the permanent
// HMTc row number. `variant_type` is set on clean/contaminated pair rows;
// platform_metals enumerates the panel metals the platform predictably
// loads. `pair_rows` is an array of all contaminated rows a clean row
// pairs with; for downstream tooling that consumes a single int, `pair`
// holds the primary (largest commercial) contaminated row.
const ROWS = [
  {
    row: 1, slug: "fresh-fruit", title: "Fresh and Frozen Fruits",
    summary: "Fresh and frozen fruits as sold and as consumed (apples, berries, citrus, melons, grapes, stone fruits, tropical fruits, frozen fruit blends). No within-row split per Cat 4 lock — orchard-legacy Pb in commercial fresh apples is below the 2-3× categorical threshold that warrants splitting; monitor candidate per the Step 0 lock.",
    primary_metals: ["Pb", "Cd", "tAs"], variant_type: null, platform_metals: [], pair: null, pair_rows: [],
    align_existing: true,
  },
  {
    row: 2, slug: "dried-fruit", title: "Dried Fruit",
    summary: "Dried fruits sold as standalone products (raisins, dates, figs, dried apricots, dried cranberries, dried mango, etc.). Distinct from row 1 by the Cat 4 taxonomy because the drying process concentrates metals by 3-8× relative to fresh weight. Cat 4 Step 0 keeps dried fruit as its own row to preserve the basis-of-comparison.",
    primary_metals: ["Pb", "Cd", "tAs"], variant_type: null, platform_metals: [], pair: null, pair_rows: [],
  },
  {
    row: 3, slug: "fruit-snacks", title: "Fruit Snacks",
    summary: "Processed fruit snack products: fruit leather, fruit roll-ups, gummy fruit snacks (not positioned as supplements), fruit chips, and fruit-based snack formats sold at retail. Cocoa-coated or chocolate-fruit hybrid bars route to Cat 7 unless fruit is dominant by weight (Cat 4 Step 0 boundary clarification flagged for v2.1 taxonomy resolution).",
    primary_metals: ["Pb", "Cd", "tAs"], variant_type: null, platform_metals: [], pair: null, pair_rows: [],
  },
  {
    row: 4, slug: "leafy-vegetables-other", title: "Leafy / Green Vegetables, Other",
    summary: "Lettuce, kale, chard, arugula, herbs (basil, parsley, cilantro), and other leafy green vegetables not in the spinach row. Clean baseline of the Row 4 / Row 5 clean-contaminated pair: spinach is split out as its own row because Spinacia oleracea is a documented Cd hyperaccumulator at species level.",
    primary_metals: ["Pb", "Cd"], variant_type: "clean_benchmark", platform_metals: [], pair: 5, pair_rows: [5],
  },
  {
    row: 5, slug: "spinach", title: "Spinach",
    summary: "Spinach (Spinacia oleracea) sold as fresh, frozen, baby spinach, mature spinach, and spinach-based prepared salads. Contaminated row of the Row 4 / Row 5 pair: species-level Cd accumulation plus geographic concentration of US production in high-Cd soils (Salinas Valley, Imperial Valley). Seyfferth 2024 FDA TDS documents US spinach Cd doubled since the 1980s.",
    primary_metals: ["Pb", "Cd"], variant_type: "contamination_platform",
    platform_metals: ["Cd", "Pb"], pair: 4, pair_rows: [4],
  },
  {
    row: 6, slug: "non-root-vegetables", title: "Non-Root Vegetables",
    summary: "Above-ground non-leafy vegetables: tomatoes (fresh, not canned), peppers, squash, zucchini, eggplant, cucumber, green beans, peas, broccoli, cauliflower, brussels sprouts, asparagus, corn-on-the-cob, mushrooms. No within-row split per Cat 4 lock. Canned tomato Pb migration from lid solder is a Step 0E watch item; may sub-stratify canned vs fresh in Step 1.",
    primary_metals: ["Pb", "Cd", "tAs"], variant_type: null, platform_metals: [], pair: null, pair_rows: [],
  },
  {
    row: 7, slug: "root-tuber-vegetables", title: "Root and Tuber Vegetables",
    summary: "Below-ground vegetables: carrots, potatoes (white, red, yellow, fingerling), beets, sweet potatoes, parsnips, turnips, rutabagas, radishes, yams, jicama, celeriac. No within-row split per Cat 4 lock; sweet potato data gap flagged in Step 0E. HMTc tests at the 'as consumed' basis (potatoes with skin if commonly eaten with skin; peeled for product-form variants).",
    primary_metals: ["Pb", "Cd", "tAs"], variant_type: null, platform_metals: [], pair: null, pair_rows: [],
  },
  {
    row: 8, slug: "legumes-pulses-other", title: "Legumes and Pulses, Other",
    summary: "Beans (black, kidney, pinto, navy, cannellini, lima), lentils, chickpeas, split peas, and derived foods that are legume-based (hummus, bean pastas like chickpea-pasta and lentil-pasta). Clean baseline of the Row 8 / Row 9 / Row 10 clean-contaminated triplet: soy products (row 9) and peanuts (row 10) are split out as separate contaminated rows because both carry categorical platform load distinct from other legumes/pulses.",
    primary_metals: ["Pb", "Cd", "Al", "Ni"], variant_type: "clean_benchmark", platform_metals: [], pair: 9, pair_rows: [9, 10],
  },
  {
    row: 9, slug: "soy-products", title: "Soy Products",
    summary: "Whole-bean soy products sold as produce or as direct-consumption foods: whole soybeans (edamame, dried soybeans), tempeh, tofu sold as a refrigerated produce item, soy flour. Soy milks and soy beverages route to Category 5; soy-based infant products route to Category 1. Contaminated row of the Row 8 / Row 9 / Row 10 triplet: Glycine max carries Al, Ni, Cd platform load; Hg flagged for supply-chain watch (Kurniawati ID, Ibrahim NG).",
    primary_metals: ["Cd", "Ni", "Al", "tHg"], variant_type: "contamination_platform",
    platform_metals: ["Al", "Ni", "Cd"], pair: 8, pair_rows: [8],
  },
  {
    row: 10, slug: "peanuts", title: "Peanuts",
    summary: "Peanuts (Arachis hypogaea) sold as raw, roasted, in-shell, shelled, salted, unsalted, or with seasonings. Peanut butter is a separate row (15). Contaminated row of the Row 8 / Row 9 / Row 10 triplet: peanuts are geocarpic legumes (pods develop in soil), giving direct soil contact during seed development. Chen 2022 peanut Al 64-119 mg/kg, 1-2 orders of magnitude above other legumes/nuts; Step 0E flags single-research-group finding pending second-source confirmation.",
    primary_metals: ["Al", "Ni", "Pb", "Cd"], variant_type: "contamination_platform",
    platform_metals: ["Al", "Ni"], pair: 8, pair_rows: [8],
  },
  {
    row: 11, slug: "nuts-seeds-other", title: "Nuts and Seeds, Other",
    summary: "Tree nuts and seeds not split into dedicated contaminated rows: walnut, almond, hazelnut, pecan, pistachio, macadamia, Brazil nut, flaxseed, sesame seed, pumpkin seed, chia seed. Clean baseline of the Row 11 / Row 12 / Row 13 clean-contaminated triplet: cashews and sunflower seeds are split out as separate contaminated rows. Brazil nut data gap flagged in Step 0E (known Ba/Ra/Se concerns are off-panel for HMTc).",
    primary_metals: ["Pb", "Cd", "Ni"], variant_type: "clean_benchmark", platform_metals: [], pair: 12, pair_rows: [12, 13],
  },
  {
    row: 12, slug: "cashews", title: "Cashews",
    summary: "Cashews (Anacardium occidentale) sold as raw, roasted, salted, unsalted, or with seasonings. Cashew butter routes to row 14 (nut and seed butters, other). Contaminated row of the Row 11 / Row 12 / Row 13 triplet: soil-uptake elevated relative to other tree nuts driven by species and production geography (West Africa, Vietnam, India, Brazil). Cwielag pair mean 6,434 µg/kg Ni; BfR 2022 5,350 µg/kg.",
    primary_metals: ["Ni", "Pb", "Cd"], variant_type: "contamination_platform",
    platform_metals: ["Ni"], pair: 11, pair_rows: [11],
  },
  {
    row: 13, slug: "sunflower-seeds", title: "Sunflower Seeds",
    summary: "Sunflower seeds (Helianthus annuus) sold as raw, roasted, salted, in-shell, or shelled. Sunflower seed butter routes to row 16. Contaminated row of the Row 11 / Row 12 / Row 13 triplet: species-level Cd hyperaccumulator documented in the phytoremediation literature. Fechner BfR MEAL commercial sunflower seed Cd group-max 265 µg/kg.",
    primary_metals: ["Cd", "Pb", "Ni"], variant_type: "contamination_platform",
    platform_metals: ["Cd"], pair: 11, pair_rows: [11],
  },
  {
    row: 14, slug: "nut-seed-butters-other", title: "Nut and Seed Butters, Other",
    summary: "Tree-nut and seed butters not in the peanut-butter or sunflower-seed-butter rows: almond butter, cashew butter, tahini (sesame), hazelnut butter, walnut butter, pecan butter, pistachio butter, mixed-nut butters. Clean baseline of the Row 14 / Row 15 / Row 16 clean-contaminated triplet: peanut butter (row 15) and sunflower seed butter (row 16) are split out as separate contaminated rows by inheritance from rows 10 and 13.",
    primary_metals: ["Pb", "Cd", "Ni"], variant_type: "clean_benchmark", platform_metals: [], pair: 15, pair_rows: [15, 16],
  },
  {
    row: 15, slug: "peanut-butter", title: "Peanut Butter",
    summary: "Peanut butter sold as creamy, crunchy, natural, conventional, or single-ingredient. Contaminated row of the Row 14 / Row 15 / Row 16 triplet: inherits the row 10 peanut platform (Al, Ni) from whole-peanut → ground-butter inheritance.",
    primary_metals: ["Al", "Ni", "Pb"], variant_type: "contamination_platform",
    platform_metals: ["Al", "Ni"], pair: 14, pair_rows: [14],
  },
  {
    row: 16, slug: "sunflower-seed-butter", title: "Sunflower Seed Butter",
    summary: "Sunflower seed butter sold as a peanut-free butter alternative (SunButter, plain sunflower seed butter, sweetened variants). Contaminated row of the Row 14 / Row 15 / Row 16 triplet: inherits the row 13 sunflower platform (Cd) from whole-seed → ground-butter inheritance.",
    primary_metals: ["Cd", "Pb"], variant_type: "contamination_platform",
    platform_metals: ["Cd"], pair: 14, pair_rows: [14],
  },
]

function frontmatter(row) {
  const lines = [
    "---",
    `type: product-category`,
    `category: ${row.slug}`,
    `title: "${row.title}"`,
    `hmtc_row: ${row.row}`,
    `hmtc_category: 4`,
    `category_label: "Fruits, Vegetables, and Produce"`,
    `evidence_fitness: EF-5`,
    `public_evidence_label: Modeled or limited evidence`,
    `review_state: scaffolded`,
    `vulnerable_population: general_population`,
    `primary_metals_of_concern: [${row.primary_metals.join(", ")}]`,
    `applicable_regulations: []`,
  ]
  if (row.variant_type) lines.push(`variant_type: ${row.variant_type}`)
  if (row.platform_metals && row.platform_metals.length > 0) {
    lines.push(`platform_metals: [${row.platform_metals.join(", ")}]`)
  }
  if (row.pair !== null && row.pair !== undefined) {
    lines.push(`pair_row: ${row.pair}`)
  }
  if (row.pair_rows && row.pair_rows.length > 1) {
    lines.push(`pair_rows: [${row.pair_rows.join(", ")}]`)
  }
  lines.push(`audience: [regulator, educator, consumer, brand-legal]`)
  lines.push(`updated: ${today}`)
  lines.push(`sources: 0`)
  lines.push(`created_by: cat4_step0_scaffold_2026_05_16`)
  lines.push("---")
  return lines.join("\n")
}

function pairLabel(pairRows) {
  if (!pairRows || pairRows.length === 0) return ""
  return pairRows
    .map((r) => {
      const target = ROWS.find((x) => x.row === r)
      if (!target) return `Row ${r}`
      return `Row ${r} ([[products/${target.slug}|${target.title}]])`
    })
    .join(", ")
}

function pairRelationshipSection(row) {
  if (row.variant_type === "clean_benchmark") {
    return `## Pair relationship\n\nThis is the clean-baseline row of a Cat 4 clean-contaminated split. The contaminated counterpart${row.pair_rows.length > 1 ? "s are" : " is"} ${pairLabel(row.pair_rows)}. The Step 0 lock documents the categorical metal-load difference attributable to the contaminated row's platform ingredient(s); the clean baseline row certifies against limits set to genuinely clean-achievable levels independent of the platform.\n\n`
  }
  if (row.variant_type === "contamination_platform") {
    const pairTxt = pairLabel(row.pair_rows)
    return `## Pair relationship + platform attribution\n\nThis is the contaminated row of a Cat 4 clean-contaminated split. The clean counterpart is ${pairTxt}. The categorical metal-load difference is attributable to platform ingredient(s) carrying load on **${row.platform_metals.join(", ")}**. Certification threshold decisions for this row and its clean counterpart are made separately under the certification program and are not published on this public page.\n\n`
  }
  return ""
}

function body(row) {
  return `
# ${row.title}

${row.summary}

This page is a Step 0 lock scaffold for Cat 4 Row ${row.row}. Literature evidence will be populated as routed source pages accumulate per the synthesis workflow in CLAUDE.md Part 9. The Step 0 lock document at \`Category4_Step_0_Output_LOCKED.md\` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.

## Who this page is for

Brand legal teams evaluating HMT&C certification for the ${row.title} row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the produce, dried-goods, and snack aisles need the row-level assortment-eligibility view.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the ${row.title} row. Speciation is non-substitutable per CLAUDE.md Part 14 (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (as-sold or as-consumed depending on the product form). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page; this public page reports literature evidence only.

Cat 4 lock empirical basis: Pass 2 occurrence-data extraction from the heavymetalindex.com wiki corpus (build claude/zealous-bhabha-d422c9, 896 source pages). The Step 0 lock document at \`Category4_Step_0_Output_LOCKED.md\` records the splitting decisions and platform attributions; this row inherits its scope from that document.

${pairRelationshipSection(row)}## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated by \`tools/evidence/apply-product-hmtc-evidence-summaries.mjs\` once sources route to this row and the pooling engine emits aggregate rows. Row ${row.row} of the Cat 4 Step 0 lock is currently in scaffold state pending corpus routing of Cat 4 papers (892 source pages in the corpus as of 2026-05-16, ~52 of 128 Cat 4 cells have usable Path A occurrence data per the Pass 2 report)._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as Cat 4 sources route to this row. Initial scaffold state: zero contributing sources. The Cat 4 corpus search prioritizes sources reporting concentration data on the specific commodity in this row; broad-scope produce surveys are filed under the master.

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by \`tools/evidence/apply-product-broad-context.mjs\` once broad-scope Cat 4 sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending. Cat 4 regulatory landscape: Codex GSCTFF and EU Regulation 2023/915 set finished-product limits on fruits and vegetables (Pb, Cd) and on specific commodities (e.g., spinach Cd at 0.20 mg/kg EU); FDA Closer-to-Zero applies to infant fruit purées (Cat 1, not Cat 4) but informs the regulatory baseline; California Prop 65 covers cumulative Pb/Cd exposure across produce categories. Awaiting agency-page ingest._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

_Pending synthesis. Levers to reduce contamination for this row, ordered by impact magnitude:_

${row.variant_type === "clean_benchmark" ? `1. **Maintain the clean-baseline commodity choice.** The Row ${row.row} clean baseline exists precisely because alternative commodities (without the platform load) are commercially available within the same product class. Brands certifying this row commit to NOT using the contaminated variant's ingredient class as a substitute.\n2. **Sourcing-level controls**: origin region, soil-Cd or paddy-iAs pre-screening, supplier specification.\n3. **Agronomic levers**: soil amendments, water management, cultivar selection.\n4. **Processing levers** where applicable: washing, peeling, blanching for fresh-cut and frozen formats.\n5. **Testing/QC levers**: lot-level ICP-MS on raw commodity and finished product.` : row.variant_type === "contamination_platform" ? `1. **Sourcing levers** (highest impact): supplier and origin-region selection for the platform commodity. Within-species variance by origin region is documented in the literature; pre-screened low-impurity supply is commercially available.\n2. **Agronomic levers**: soil amendments (Cd accumulation in spinach/sunflower is reducible via soil-pH and silicon-amendment interventions documented in phytoremediation literature; geocarpic Al uptake in peanuts responds to soil-Al management).\n3. **Cultivar/varietal selection**: where within-species variance is documented, low-accumulating cultivars are commercially viable.\n4. **Processing levers** where applicable: rinsing, hulling, blanching may reduce surface-bound metal load on whole-seed/whole-bean formats; refining-grade differences for butter formats.\n5. **Formulation levers**: reduce the platform-commodity fraction of multi-ingredient products where function permits.\n6. **Testing/QC levers**: lot-level ICP-MS on raw commodity and finished product. Cat 4 supply chains routinely COA at the µg/kg level for premium-spec commodity.\n7. **Regulatory levers** (not brand-controllable): supporting Codex and state-level fruit/vegetable Pb/Cd limits drives industry-wide tightening.` : `1. **Sourcing levers**: origin region, supplier specification, soil-Cd or paddy-iAs pre-screening for at-risk commodities.\n2. **Agronomic levers**: soil amendments, water management, cultivar selection.\n3. **Processing levers** where applicable: washing, peeling, blanching for fresh-cut and frozen formats; refining for derivative products.\n4. **Formulation levers**: where the row contains multi-ingredient formats, reducing the platform-commodity fraction.\n5. **Testing/QC levers**: lot-level ICP-MS on raw commodity and finished product.\n6. **Regulatory levers**.`}

## How standards math uses this page

This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in this row; it publishes no certification thresholds of its own. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified.com, which reads this page as its literature baseline. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold.

## Historical recalls and enforcement

_Pending synthesis. Cat 4-relevant public-record regulatory events include FDA recall notices for fresh-produce E. coli/Listeria contamination (separate concern from heavy metals), and FDA TDS/PDP surveillance reporting on produce metal occurrence. Row-specific events will be filed here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as \`*[awaiting synthesis]*\`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

// =========================================================================
// Create new pages
// =========================================================================

let createdCount = 0
let alignedCount = 0
let skippedCount = 0
const log = []

for (const row of ROWS) {
  const pagePath = path.join(productsDir, `${row.slug}.md`)
  const exists = fs.existsSync(pagePath)

  if (exists && row.align_existing) {
    // Patch existing page's frontmatter to add Cat 4 alignment fields.
    const original = fs.readFileSync(pagePath, "utf8")
    if (original.includes("hmtc_row:")) {
      log.push(`SKIP align (already has hmtc_row): ${row.slug}`)
      skippedCount += 1
      continue
    }
    const patched = patchExistingFrontmatter(original, row)
    fs.writeFileSync(pagePath, patched, "utf8")
    log.push(`ALIGN ${row.slug} (row ${row.row})`)
    alignedCount += 1
    continue
  }

  if (exists) {
    log.push(`SKIP create (file exists): ${row.slug}`)
    skippedCount += 1
    continue
  }

  fs.writeFileSync(pagePath, `${frontmatter(row)}\n${body(row)}`, "utf8")
  log.push(`CREATE ${row.slug} (row ${row.row})`)
  createdCount += 1
}

// =========================================================================
// Update wiki/products/index.md — append Category 4 section
// =========================================================================

const indexText = fs.readFileSync(indexPath, "utf8")
if (indexText.includes("## Category 4:") || indexText.includes("## Fruits, Vegetables, and Produce")) {
  log.push("SKIP index (Category 4 section already present)")
} else {
  const cat4Section = `\n## Category 4: Fruits, Vegetables, and Produce\n\nThese pages carry the Category 4 Step 0 lock (16 rows). Five within-row clean/contaminated splits document categorical metal-load differences: spinach (Cd) split from leafy vegetables; soy and peanut (each carrying their own platform load) split from legumes/pulses; cashew (Ni) and sunflower seed (Cd) each split from nuts and seeds; peanut butter and sunflower seed butter inherit from their whole-kernel parents within the nut and seed butters family.\n\n${ROWS.map((r) => `- [[products/${r.slug}|${r.title}]]${r.variant_type === "clean_benchmark" ? " — clean baseline" : ""}${r.variant_type === "contamination_platform" ? ` — contaminated (${r.platform_metals.join(", ")})` : ""}`).join("\n")}\n`

  // Insert before the auto-linked-stubs section if present, else append.
  const stubMarker = "<!-- BEGIN: hmi-auto-linked-stubs -->"
  let newIndex
  if (indexText.includes(stubMarker)) {
    newIndex = indexText.replace(stubMarker, `${cat4Section}\n${stubMarker}`)
  } else {
    newIndex = indexText + cat4Section
  }
  fs.writeFileSync(indexPath, newIndex, "utf8")
  log.push("UPDATE index.md (added Category 4 section)")
}

// =========================================================================
// Summary
// =========================================================================

console.log(`Cat 4 Step 0 scaffold: ${createdCount} created, ${alignedCount} aligned, ${skippedCount} skipped`)
for (const line of log) console.log(`  ${line}`)

// =========================================================================
// Helpers
// =========================================================================

function patchExistingFrontmatter(original, row) {
  // Strategy: find the closing --- of the frontmatter and insert the Cat 4
  // alignment fields before it. Preserve all existing fields verbatim.
  const fmMatch = original.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) {
    throw new Error(`Could not parse frontmatter in ${row.slug}`)
  }
  const existing = fmMatch[1]
  const additions = [
    `hmtc_row: ${row.row}`,
    `hmtc_category: 4`,
    `category_label: "Fruits, Vegetables, and Produce"`,
    `review_state: scaffolded`,
    `cat4_step0_scaffolded: ${today}`,
  ]
  const newFrontmatter = `---\n${existing}\n${additions.join("\n")}\n---`
  return original.replace(/^---\n[\s\S]*?\n---/, newFrontmatter)
}
