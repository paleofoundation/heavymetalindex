---
type: product-category
category: sunflower-seed-butter
title: "Sunflower Seed Butter"
hmtc_row: 5
hmtc_taxonomy_version: "2.2"
hmtc_category: 28
hmtc_category_name: "Nuts, Seeds, and Their Butters"
category_label: "Fruits, Vegetables, and Produce"
evidence_fitness: EF-5
public_evidence_label: Modeled or limited evidence
review_state: scaffolded
vulnerable_population: general_population
primary_metals_of_concern: [Cd, Pb]
applicable_regulations: []
variant_type: higher-contamination-sibling
platform_metals: [Cd]
pair_row: 14
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-06-09
literature_scope: thin
sources: 0
created_by: cat4_step0_scaffold_2026_05_16
---

# Sunflower Seed Butter

Sunflower seed butter sold as a peanut-free butter alternative (SunButter, plain sunflower seed butter, sweetened variants). Contaminated row of the Row 14 / Row 15 / Row 16 triplet: inherits the row 13 sunflower platform (Cd) from whole-seed → ground-butter inheritance. Cross-row CC anchor: Step 1 defaults to the tighter of row 14 (other butters) or row 13 (whole sunflower seeds) on a per-metal basis.

This page is a Step 0 lock scaffold for Cat 4 Row 16. Literature evidence will be populated as routed source pages accumulate per the synthesis workflow in CLAUDE.md Part 9. The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.


## Literature scope

The Heavy Metal Index source corpus is currently focused on food and food-contact materials. This page documents an HMTc Taxonomy v2.0 row in the category **this product class** for which no peer-reviewed primary or government sources have yet been ingested. The page exists as the routing destination for future ingest. Until sources land, the literature-evidence sections below are deliberately empty rather than guessed; HMTc certification thresholds for products in this row continue to be developed under the certification program at [heavymetaltested.com](https://heavymetaltested.com), not on this public page.

## Who this page is for

Brand legal teams evaluating HMTc Cat 4 certification for the Sunflower Seed Butter row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the produce, dried-goods, and snack aisles need the row-level assortment-eligibility view. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the Sunflower Seed Butter row. Speciation is non-substitutable per CLAUDE.md Part 14 (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (as-sold or as-consumed depending on the product form). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page; this public page reports literature evidence only.

Cat 4 lock empirical basis: Pass 2 occurrence-data extraction from the heavymetalindex.com wiki corpus (build claude/zealous-bhabha-d422c9, 896 source pages). The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` records the splitting decisions and platform attributions; this row inherits its scope from that document.

## Pair relationship + platform attribution

This is the contaminated row of a Cat 4 clean-contaminated split. The clean counterpart is Row 14 ([[products/nut-seed-butters-other|Nut and Seed Butters, Other]]). The categorical metal-load difference is attributable to platform ingredient(s) carrying load on **Cd**. Cross-row platform coordination per the Cat 4 Step 0 lock: the Standards Workbench's CC anchor for each platform is shared across all rows that share the platform, with per-row final limits diverging based on commercial-product variation.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Sunflower Seed Butter. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/cadmium\|Cd]] | Sunflower Seed Butter (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | Sunflower Seed Butter (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

_Hand-curated section. Populated by the synthesis pass as Cat 4 sources route to this row. Initial scaffold state: zero contributing sources. The Cat 4 corpus search prioritizes sources reporting concentration data on the specific commodity in this row; broad-scope produce surveys are filed under the master.

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Pending: regenerated by `tools/evidence/apply-product-broad-context.mjs` once broad-scope Cat 4 sources route to this page._
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
_Pending. Cat 4 regulatory landscape: Codex GSCTFF and EU Regulation 2023/915 set finished-product limits on fruits and vegetables (Pb, Cd) and on specific commodities (e.g., spinach Cd at 0.20 mg/kg per [[regulations/eu-2023-915]]); FDA Closer-to-Zero applies to infant fruit purées (Cat 1, not Cat 4) but informs the regulatory baseline; California Prop 65 covers cumulative Pb/Cd exposure across produce categories. Awaiting agency-page ingest._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

The Cat 4 Step 0 lock framework distinguishes lower-contamination row produce/seed rows from contaminated-platform commodity rows (where species or production system carries elevated metal load by characteristic). For this row, the levers below are ordered by impact magnitude per the literature evidence base; sourcing-and-agronomic levers dominate the per-product metal load, with processing-and-formulation levers offering additional reduction.

1. **Sourcing levers** (highest impact): supplier and origin-region selection for the platform commodity. Within-species variance by origin region is documented in the literature; pre-screened low-impurity supply is commercially available.
2. **Agronomic levers**: soil amendments (Cd accumulation in spinach/sunflower is reducible via soil-pH and silicon-amendment interventions documented in phytoremediation literature; geocarpic Al uptake in peanuts responds to soil-Al management).
3. **Cultivar/varietal selection**: where within-species variance is documented, low-accumulating cultivars are commercially viable.
4. **Processing levers** where applicable: rinsing, hulling, blanching may reduce surface-bound metal load on whole-seed/whole-bean formats; refining-grade differences for butter formats.
5. **Formulation levers**: reduce the platform-commodity fraction of multi-ingredient products where function permits.
6. **Testing/QC levers**: lot-level ICP-MS on raw commodity and finished product. Cat 4 supply chains routinely COA at the µg/kg level for premium-spec commodity.
7. **Regulatory levers** (not brand-controllable): supporting Codex and state-level fruit/vegetable Pb/Cd limits drives industry-wide tightening.

## How standards math uses this page

The percentile arithmetic that informs HMTc Cat 4 thresholds for this row lives on the staff Standards Workbench (`data/workbench/standards/sunflower-seed-butter.md`, to be generated). This public page reports literature evidence; the workbench applies the Cat 4 methodology (which includes the literature evidence occurrence-data-driven derivation and below-LOQ regulatory-floor fallback per the Step 0 lock) to produce candidate threshold values. The gap between literature evidence and HMTc thresholds is named honestly on the workbench, not hidden.

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda-tds-elements-2018-2020|Total Diet Study Report: Fiscal Years 2018-2020 Elements Data]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [70ae1ccdf](https://github.com/paleofoundation/heavymetalindex/commit/70ae1ccdf) | 2026-05-30 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [378d999f9](https://github.com/paleofoundation/heavymetalindex/commit/378d999f9) | 2026-05-17 | minor | Narrative text revised |
| [88594dab3](https://github.com/paleofoundation/heavymetalindex/commit/88594dab3) | 2026-05-17 | major | 1 section added |
<!-- END: hmi-page-history -->
