#!/usr/bin/env node
// Cat 2 (Infant and Child Personal Care, ages 0-5) Step 0 lock scaffolder.
//
// Sources from Category2_Clean_vs_Contaminated_Splits.md (Karen, 2026-04-28):
// the LOCKED 16-row Step 0 architecture for HMTc Category 2.
//
// What this does (one-shot):
//   1. Create the 12 product-row pages missing on the live site.
//   2. Patch the 3 existing pages that are present but misaligned
//      (baby-talcum-powder, toothpaste, face-paint) so their frontmatter
//      carries hmtc_row + hmtc_category + age_range + the relevant
//      variant_type / platform_metals fields per the lock.
//   3. Retire wiki/products/lipstick.md (created today by auto-stub but the
//      Li 2021 source was adult lip cosmetics, not children's, so it
//      doesn't belong in Cat 2 and there is no Cat 13 adult-cosmetics
//      taxonomy yet — leave a retirement banner and a pointer to
//      childrens-lip-balm-mineral-bearing for the kids' overlap).
//   4. Retire wiki/products/skin-lightening-cream.md — Cat 2 splits doc
//      explicitly puts this out of scope (advisory only).
//
// Does NOT do (handled separately by hand-edits):
//   - Rewriting wiki/products/children-personal-care.md as the Cat 2 master.
//   - Creating wiki/advisory/skin-lightening-products.md.
//   - Updating Ricketts 2020 source-page product references.
//
// RETIRED 2026-08-12: this one-shot scaffold encodes the superseded
// clean/contaminated certification-role architecture. Product occurrence
// comparisons are now descriptive only; initial HMTc limits are compiled from
// sovereign-government maxima. The historical implementation is retained
// below for audit provenance and must not be executed.

import fs from "node:fs"
import path from "node:path"

console.error("RETIRED 2026-08-12: Cat 2 clean/contaminated scaffold must not be run; use the current taxonomy and government-limit-only method.")
process.exit(1)

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const today = new Date().toISOString().slice(0, 10)

// The locked 16-row structure. `slug` is the URL; `row` is the permanent
// HMTc row number. `variant_type` is set on clean/contaminated pair rows;
// platform_metals enumerates the panel metals the platform predictably loads.
const ROWS = [
  {
    row: 1, slug: "baby-lotion-cream", title: "Baby Lotion / Baby Cream",
    summary: "Generic baby lotion and baby cream marketed for infants and young children (ages 0-5). Petrolatum-based and plant-extract-forward formulations both route here; no within-row split applies per Cat 2 Step 0 lock.",
    primary_metals: ["Pb", "Cd"], variant_type: null, platform_metals: [], pair: null,
  },
  {
    row: 2, slug: "baby-oil", title: "Baby Oil",
    summary: "Mineral oil and plant oil baby oils marketed for ages 0-5. No within-row split per Step 0 lock — the categorical 8-panel metal difference between mineral and plant variants is not documented in the literature batch reviewed for the lock.",
    primary_metals: ["Pb", "Cd"], variant_type: null, platform_metals: [], pair: null,
  },
  {
    row: 3, slug: "baby-powder-cornstarch", title: "Baby Powder, Cornstarch-Based",
    summary: "Cornstarch-based baby powder (Johnson's reformulated 2020+ product, generic cornstarch baby powders). Clean baseline of the Row 3 / Row 4 clean-contaminated pair: cornstarch carries no platform metal load, in contrast to talc.",
    primary_metals: ["Pb", "Cd", "Ni", "Cr"], variant_type: "clean_benchmark", platform_metals: [], pair: 4,
  },
  {
    row: 5, slug: "baby-shampoo-body-wash", title: "Baby Shampoo / Baby Body Wash",
    summary: "Rinse-off cleansing products marketed for ages 0-5. No within-row split per Step 0 lock — surfactant-based and plant-extract-forward formulations do not show categorical 8-panel metal differences in the literature.",
    primary_metals: ["Pb", "Cd"], variant_type: null, platform_metals: [], pair: null,
  },
  {
    row: 6, slug: "baby-wipes", title: "Baby Wipes",
    summary: "Disposable wipes for infant skin (polyester, polypropylene, cotton, bamboo). No within-row split per Step 0 lock. **Panel-scope note**: the dominant heavy-metal finding for baby wipes is antimony (Sb, up to 19,558 µg/L from polyester catalyst residues), which is NOT in the HMTc 8-metal panel; HMTc Cat 2 standards recommend panel expansion to include Sb based on this finding.",
    primary_metals: ["Pb", "Cd"], variant_type: null, platform_metals: [], pair: null,
  },
  {
    row: 7, slug: "diaper-cream-non-zno", title: "Diaper Cream, Non-ZnO",
    summary: "Petrolatum-based and plant-based diaper preventatives without zinc oxide (Aquaphor Original, plain petrolatum, calendula/plant-based formulations). Clean baseline of the Row 7 / Row 8 clean-contaminated pair: non-ZnO formulations do not carry the sphalerite-derived Pb/Cd platform.",
    primary_metals: ["Pb", "Cd"], variant_type: "clean_benchmark", platform_metals: [], pair: 8,
  },
  {
    row: 8, slug: "diaper-cream-zno", title: "Diaper Cream, ZnO-Based",
    summary: "Diaper rash treatments using zinc oxide as active ingredient (Desitin, Boudreaux's Butt Paste, Triple Paste, most '10-40% ZnO' products). Contaminated row of the Row 7 / Row 8 pair: ZnO is sourced from sphalerite (ZnS) ore co-occurring with Pb-containing minerals; pyrometallurgical and electrolytic ZnO production routes reduce but do not eliminate Pb and Cd carry-through. Documented Pb up to 3,300 ppb in surveyed products.",
    primary_metals: ["Pb", "Cd"], variant_type: "contamination_platform", platform_metals: ["Pb", "Cd"], pair: 7,
  },
  {
    row: 9, slug: "baby-sunscreen-chemical", title: "Baby Sunscreen, Chemical",
    summary: "Pediatric sunscreens using synthetic organic UV filters (avobenzone, octocrylene, octinoxate, octisalate, homosalate). Clean baseline of the Row 9 / Row 10 clean-contaminated pair: chemical UV filters carry no intrinsic heavy-metal platform load, only refining-related trace contamination.",
    primary_metals: ["Pb", "Cd"], variant_type: "clean_benchmark", platform_metals: [], pair: 10,
  },
  {
    row: 10, slug: "baby-sunscreen-mineral", title: "Baby Sunscreen, Mineral (ZnO + TiO2)",
    summary: "Pediatric sunscreens using ZnO and/or TiO2 as mineral UV filters at 10-25% of formulation (Babyganics Mineral, Thinkbaby, Badger Baby, Blue Lizard Baby, California Baby No Fragrance). Contaminated row of the Row 9 / Row 10 pair: ZnO carries Pb/Cd platform load (sphalerite-derived); TiO2 carries Pb/iAs/Cd platform load (rutile/ilmenite-derived). A typical 20% ZnO + 5% TiO2 baby sunscreen contains ~250 mg/g of mineral metal-load-carrying material.",
    primary_metals: ["Pb", "iAs", "Cd"], variant_type: "contamination_platform", platform_metals: ["Pb", "iAs", "Cd"], pair: 9,
  },
  {
    row: 13, slug: "childrens-makeup", title: "Children's Makeup (ages 0-5)",
    summary: "Cosmetic makeup products marketed for ages 0-5 (eye shadow, blush, foundation, bronzer formulated and sold as children's product). Whole-row platform — every commercial product in this row uses mineral cosmetic pigments (iron oxides, ultramarines, mica, bismuth oxychloride) which carry Pb/Ni/Cr platform load. No within-row split because no clean-counterpart variant exists in this row.",
    primary_metals: ["Pb", "Ni", "Cr"], variant_type: "whole_row_platform", platform_metals: ["Pb", "Ni", "Cr"], pair: null,
  },
  {
    row: 14, slug: "childrens-nail-polish", title: "Children's Nail Polish (ages 0-5)",
    summary: "Nail polish products marketed for ages 0-5. Whole-row platform — every commercial product uses mineral pigments and/or pearlescent agents (iron oxides, mica, bismuth oxychloride, chromium oxides) which carry Pb/Ni/Cr platform load. No within-row split because no clean-counterpart variant exists in this row.",
    primary_metals: ["Pb", "Ni", "Cr"], variant_type: "whole_row_platform", platform_metals: ["Pb", "Ni", "Cr"], pair: null,
  },
  {
    row: 15, slug: "childrens-lip-balm-plain", title: "Children's Lip Balm, Plain (uncolored, no SPF)",
    summary: "Plain children's lip balms (uncolored, non-SPF) marketed for ages 0-5 (Burt's Bees Baby Bee plain, California Baby plain). Clean baseline of the Row 15 / Row 16 clean-contaminated pair: beeswax + plant oils + petrolatum + flavoring ingredients carry no platform metal load.",
    primary_metals: ["Pb", "Ni", "Cr"], variant_type: "clean_benchmark", platform_metals: [], pair: 16,
  },
  {
    row: 16, slug: "childrens-lip-balm-mineral-bearing", title: "Children's Lip Balm, Mineral-Bearing (tinted or SPF)",
    summary: "Tinted and/or SPF children's lip balms marketed for ages 0-5 (Petite n Pretty tinted, Sun Bum Kids SPF, Babyganics SPF, various kids' colored lip balms). Contaminated row of the Row 15 / Row 16 pair: tinted variants add mineral cosmetic pigments (Pb/Ni/Cr platforms); SPF variants add ZnO and/or TiO2 (Pb/iAs/Cd platforms). Tinted and SPF collapsed into a single contaminated variant per the Cat 2 lock because the dominant affected metal is Pb in both and the commercial overlap is significant.",
    primary_metals: ["Pb", "Ni", "Cr", "iAs", "Cd"], variant_type: "contamination_platform",
    platform_metals: ["Pb", "Ni", "Cr", "iAs", "Cd"], pair: 15,
  },
]

// Pages that already exist on disk but need hmtc_row + Cat 2 frontmatter
// alignment. The page body is left untouched; only the YAML frontmatter
// is patched to add the row-number + category fields.
const ALIGN_EXISTING = [
  {
    slug: "baby-talcum-powder", row: 4, variant_type: "contamination_platform",
    platform_metals: ["Ni", "Cr", "Pb"], pair: 3,
    summary_note: "Row 4 (contaminated row of Row 3 / Row 4 pair). Talc carries Ni/Cr/Pb platform load from deposit geology.",
  },
  {
    slug: "toothpaste", row: 11, variant_type: null,
    platform_metals: [], pair: null,
    summary_note: "Row 11. Whole-row monitor candidate per Cat 2 lock — literature shows 90% of children's toothpastes had detectable Pb but the finding is across-the-board, not clustered by formulation variant.",
    rename_to: "baby-toothpaste", // create symlink-style stub at new slug
  },
  {
    slug: "face-paint", row: 12, variant_type: "whole_row_platform",
    platform_metals: ["Pb", "Ni", "Cr"], pair: null,
    summary_note: "Row 12. Whole-row pigment platform — Campaign for Safe Cosmetics 2009 found 100% of commercial face paints contained Pb and 60% contained Ni/Co/Cr at allergen-relevant levels.",
    rename_to: "childrens-face-paint",
  },
]

function frontmatter(row) {
  const lines = [
    "---",
    `type: product-category`,
    `category: ${row.slug}`,
    `title: "${row.title}"`,
    `hmtc_row: ${row.row}`,
    `hmtc_category: 2`,
    `category_label: "Infant and Child Personal Care"`,
    `age_range: "0-5"`,
    `evidence_fitness: EF-5`,
    `public_evidence_label: Modeled or limited evidence`,
    `review_state: scaffolded`,
    `vulnerable_population: infants-and-children-0-5`,
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
  lines.push(`audience: [regulator, educator, consumer, brand-legal]`)
  lines.push(`updated: ${today}`)
  lines.push(`sources: 0`)
  lines.push(`created_by: cat2_step0_scaffold_2026_05_16`)
  lines.push("---")
  return lines.join("\n")
}

function body(row) {
  return `
# ${row.title}

${row.summary}

This page is a Step 0 lock scaffold for Cat 2 Row ${row.row}. Literature evidence will be populated as routed source pages accumulate per the synthesis workflow in CLAUDE.md Part 9. The Step 0 lock document at \`Category2_Clean_vs_Contaminated_Splits.md\` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.

## Who this page is for

Brand legal teams evaluating HMT&C certification for the ${row.title} row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the children's personal care aisle need the row-level assortment-eligibility view.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the ${row.title} row. Speciation is non-substitutable per CLAUDE.md Part 14 (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (finished-product as sold). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page; this public page reports literature evidence only.

The non-ingestion exposure pathways relevant to this row (dermal, inhalation, accidental-ingestion, and trans-placental) are documented at [[health/cat-2-non-ingestion-exposure-pathways]].

${row.variant_type === "clean_benchmark" ? `## Pair relationship\n\nThis is the clean-baseline row of a Cat 2 clean-contaminated pair. The contaminated counterpart is Row ${row.pair} ([[products/${ROWS.find(r => r.row === row.pair)?.slug || "(pending)"}]]). The Step 0 lock documents the categorical metal-load difference attributable to the contaminated row's platform ingredient(s); the clean baseline row certifies against limits set to genuinely clean-achievable levels independent of the platform.\n\n` : ""}${row.variant_type === "contamination_platform" ? `## Pair relationship + platform attribution\n\nThis is the contaminated row of a Cat 2 clean-contaminated pair. The clean counterpart is Row ${row.pair} ([[products/${ROWS.find(r => r.row === row.pair)?.slug || "(pending)"}]]). The categorical metal-load difference is attributable to platform ingredient(s) carrying load on **${row.platform_metals.join(", ")}**. Certification threshold decisions for this row and its clean counterpart are made separately under the certification program and are not published on this public page.\n\n` : ""}${row.variant_type === "whole_row_platform" ? `## Whole-row platform\n\nThe entire row inherits the platform load on **${row.platform_metals.join(", ")}** because every commercial product in this row uses ingredients in the platform class. There is no clean-counterpart variant on the commercial shelf within this row.\n\n` : ""}## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
_Pending: regenerated by \`tools/evidence/apply-product-hmtc-evidence-summaries.mjs\` once sources route to this row and the pooling engine emits aggregate rows. Row ${row.row} of the Cat 2 Step 0 lock is currently in scaffold state pending corpus ingest of Cat 2 papers from the Children Personal Care Papers pile in \`raw/Manual Fetch Kimi /\`._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as Cat 2 sources are ingested and route to this row. Initial scaffold state: zero contributing sources._

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by \`tools/evidence/apply-product-broad-context.mjs\` once broad-scope Cat 2 sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending. Cat 2 regulatory landscape is fragmented: cosmetics under FDA FD&C Act adulteration provisions (no binding finished-product heavy-metal limits); sunscreens under FDA OTC drug monograph; toothpaste under FDA cosmetic + OTC drug regulation; state-level cosmetic heavy-metal laws (Washington TFCA 2025, New York TCCP). EU 1223/2009 Annex II/III addresses cosmetic ingredient restrictions but not finished-product action levels. Awaiting agency-page ingest._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

_Pending synthesis. Levers to reduce contamination for this row, ordered by impact magnitude:_

${row.variant_type === "clean_benchmark" ? `1. **Maintain the clean-baseline formulation choice.** The Row ${row.row} clean baseline exists precisely because alternative ingredient classes (without the platform load) are commercially available. Brands certifying this row commit to NOT adopting the contaminated variant's ingredient class.\n2. **Sourcing-level controls** on the few remaining ingredient classes carrying trace metal load.\n3. **Testing/QC levers**: lot-level ICP-MS on raw materials and finished product.` : row.variant_type === "contamination_platform" ? `1. **Sourcing levers** (highest impact): platform-ingredient supplier selection. Pre-screened low-impurity grades of ${row.platform_metals.join("/")} -carrying ingredients are commercially available at premium price; the gap between cosmetic-grade and pharmaceutical-grade specifications is material.\n2. **Refining levers** for the platform ingredient class.\n3. **Formulation levers**: reduce the platform-ingredient fraction of the finished product where the function permits.\n4. **Testing/QC levers**: lot-level ICP-MS testing on raw materials and finished product. Cosmetic-grade supply chains routinely COA at the µg/kg level when specified.\n5. **Regulatory levers** (not brand-controllable): supporting state-level Pb/Cd/Hg-in-cosmetics standards drives industry-wide tightening.` : `1. **Sourcing levers** on platform ingredients. Even without a clean alternative within the row, supplier-grade differences within the platform are material.\n2. **Refining levers**.\n3. **Testing/QC levers**: lot-level ICP-MS on raw materials and finished product.\n4. **Regulatory levers**.`}

## How standards math uses this page

This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in this row; it publishes no certification thresholds of its own. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified.com, which reads this page as its literature baseline. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold.

## Historical recalls and enforcement

_Pending synthesis. Cat 2-relevant public-record regulatory events are summarized at [[products/children-personal-care]] (Cat 2 master). Row-specific events will be filed here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as \`*[awaiting synthesis]*\`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

let created = 0
let skipped = 0

for (const row of ROWS) {
  const filepath = path.join(productsDir, `${row.slug}.md`)
  if (fs.existsSync(filepath)) {
    const existing = fs.readFileSync(filepath, "utf8")
    if (/^hmtc_row:\s*\d/m.test(existing)) {
      console.log(`SKIP (already has hmtc_row): ${row.slug}`)
      skipped += 1
      continue
    }
    console.log(`SKIP (file exists, manual review): ${row.slug}`)
    skipped += 1
    continue
  }
  const content = frontmatter(row) + body(row)
  fs.writeFileSync(filepath, content, "utf8")
  console.log(`CREATED Row ${row.row}: ${row.slug}`)
  created += 1
}

// Patch the three existing pages
for (const align of ALIGN_EXISTING) {
  const filepath = path.join(productsDir, `${align.slug}.md`)
  if (!fs.existsSync(filepath)) {
    console.log(`ALIGN skip (file missing): ${align.slug}`)
    continue
  }
  const text = fs.readFileSync(filepath, "utf8")
  if (/^hmtc_row:\s*\d/m.test(text)) {
    console.log(`ALIGN skip (already aligned): ${align.slug}`)
    continue
  }
  // Insert hmtc_row + Cat 2 fields after the existing `type:` line
  const insertion = [
    `hmtc_row: ${align.row}`,
    `hmtc_category: 2`,
    `category_label: "Infant and Child Personal Care"`,
    `age_range: "0-5"`,
  ]
  if (align.variant_type) insertion.push(`variant_type: ${align.variant_type}`)
  if (align.platform_metals && align.platform_metals.length > 0) {
    insertion.push(`platform_metals: [${align.platform_metals.join(", ")}]`)
  }
  if (align.pair !== null && align.pair !== undefined) {
    insertion.push(`pair_row: ${align.pair}`)
  }
  insertion.push(`cat2_step0_alignment: 2026-05-16`)

  // Insert these lines after the line starting with `type:`
  const patched = text.replace(/^(type:\s*product-category\s*\n)/m, `$1${insertion.join("\n")}\n`)
  fs.writeFileSync(filepath, patched, "utf8")
  console.log(`ALIGNED Row ${align.row}: ${align.slug} (${align.rename_to ? "rename suggested → " + align.rename_to : "slug unchanged"})`)
}

// Retire lipstick.md (created today by auto-stub from Li 2021 adult lip cosmetics)
const lipstickPath = path.join(productsDir, "lipstick.md")
if (fs.existsSync(lipstickPath)) {
  const lipstickText = fs.readFileSync(lipstickPath, "utf8")
  if (!/retired:\s*true/.test(lipstickText)) {
    const retired = `---
type: product-category
category: lipstick
title: "Lipstick — RETIRED (no Cat 2 placement)"
retired: true
retirement_date: 2026-05-16
retirement_authority: "Cat 2 Step 0 lock 2026-04-28"
retirement_reason: "Created 2026-05-14 by auto-stub from Li 2021 + Attard 2022 which both report adult lip cosmetics, not children's. Cat 2 (ages 0-5) covers children's lip balm at Row 15 (plain) / Row 16 (mineral-bearing). Adult lipstick belongs in a future Cat 13 (adult Leave-on Cosmetics) row; that category is not yet built. URL is preserved permanently per the locked-file-immutability principle."
redirect_target: products/childrens-lip-balm-mineral-bearing
redirect_target_pending: false
audience: [regulator, educator, consumer]
updated: 2026-05-16
sources: 0
---

# Lipstick — RETIRED (no Cat 2 placement)

> **This page has been retired.** Lipstick was scaffolded into Cat 2 (Infant and Child Personal Care) by the autonomy stub-creator on 2026-05-14 when two source pages declared \`products: [lipstick]\` in frontmatter, but the underlying papers ([[sources/li2021-lead-lip-cosmetics-china-ecommerce]] and [[sources/attard2022-heavy-metals-cosmetics-review]]) report **adult** lip cosmetics. Cat 2 covers ages 0-5 only.
>
> For the children's-lip-balm portion of the Li 2021 dataset (the small subset that is age-relevant), see [[products/childrens-lip-balm-mineral-bearing]] (Cat 2 Row 16) for tinted/SPF children's lip balm and [[products/childrens-lip-balm-plain]] (Cat 2 Row 15) for plain children's lip balm.
>
> Adult lipstick will be filed under Cat 13 (Leave-on Cosmetics, adult) when that category is built. Until then, this page is a redirect target for the Cat 2 Step 0 cleanup.

## Source attribution

The Li 2021 and Attard 2022 \`products: [lipstick]\` frontmatter declarations were valid at the time of the auto-stub-creator run (a single-row "lipstick" page didn't exist) but did not carry Cat 2 vs Cat 13 disambiguation. The Cat 2 Step 0 lock on 2026-04-28 retroactively settles the ambiguity: adult lipstick is Cat 13 scope.

## Status

- Retired: 2026-05-16
- Authority: Cat 2 Step 0 lock 2026-04-28 (\`Category2_Clean_vs_Contaminated_Splits.md\`)
- Redirect: [[products/childrens-lip-balm-mineral-bearing]] for child-lipstick overlap; awaiting Cat 13 build for adult lipstick.
`
    fs.writeFileSync(lipstickPath, retired, "utf8")
    console.log(`RETIRED: lipstick.md → redirect to childrens-lip-balm-mineral-bearing + Cat 13 (future)`)
  } else {
    console.log(`RETIRED skip (already retired): lipstick.md`)
  }
}

// Retire skin-lightening-cream.md — out of scope per Cat 2 lock
const slPath = path.join(productsDir, "skin-lightening-cream.md")
if (fs.existsSync(slPath)) {
  const slText = fs.readFileSync(slPath, "utf8")
  if (!/retired:\s*true/.test(slText)) {
    const retired = `---
type: product-category
category: skin-lightening-cream
title: "Skin Lightening Cream — RETIRED (out of HMTc scope)"
retired: true
retirement_date: 2026-05-16
retirement_authority: "Cat 2 Step 0 lock 2026-04-28"
retirement_reason: "Skin lightening products are explicitly out of HMTc certification scope per the Cat 2 Step 0 lock. The product class is dominated by bad actors operating outside or in violation of existing regulation (FDA regulates as drugs; EU prohibits hydroquinone in cosmetic skin lighteners under Regulation 1223/2009; mercury in cosmetics is broadly illegal). Creating a certification row would manufacture a false impression that this is a normal product category requiring better limits. Replaced by the public advisory page at /advisory/skin-lightening-products."
redirect_target: advisory/skin-lightening-products
redirect_target_pending: true
audience: [regulator, educator, consumer]
updated: 2026-05-16
sources: 1
---

# Skin Lightening Cream — RETIRED (out of HMTc scope)

> **This page has been retired.** Skin lightening products are explicitly out of HMTc certification scope per the Category 2 Step 0 lock (2026-04-28). See the public-facing advisory at [[advisory/skin-lightening-products]] for the program's position on documented mercury contamination in this product class (up to 210,000 ppm in the literature) and the recommendation that consumers, regulators, and journalists treat this as a regulatory-enforcement issue rather than a certification-gap issue.
>
> The Ricketts 2020 source page ([[sources/ricketts2020-mercury-skin-lightening-jamaica]]) remains a valid literature reference. Its product reference now routes to the advisory page rather than a certification row.

## Why no certification path

Certification works by giving brands a path to demonstrate compliance with a standard. The skin lightening product class is dominated by bad actors operating outside or in violation of existing regulation:

- FDA regulates these as drugs (not cosmetics), so the FD&C Act's cosmetic adulteration framework does not apply.
- EU prohibits hydroquinone in cosmetic skin lighteners under Regulation 1223/2009.
- Mercury in cosmetics is broadly illegal in most jurisdictions; documented 21%-mercury skin lighteners are illegal at the ingredient level, not just at the contaminant level.

Brands using mercury at 21% concentrations will not seek HMTc certification regardless of what limit is set. Creating a Cat 2 row for skin lightening would manufacture a false impression that this is a normal product category requiring better limits.

## Status

- Retired: 2026-05-16
- Authority: Cat 2 Step 0 lock 2026-04-28 (\`Category2_Clean_vs_Contaminated_Splits.md\` — "Out of Scope: Skin Lightening Products" section)
- Replaced by: [[advisory/skin-lightening-products]] (public advisory page)
`
    fs.writeFileSync(slPath, retired, "utf8")
    console.log(`RETIRED: skin-lightening-cream.md → redirect to advisory/skin-lightening-products`)
  } else {
    console.log(`RETIRED skip (already retired): skin-lightening-cream.md`)
  }
}

console.log(`\nScaffold done: ${created} created, ${skipped} skipped.`)
