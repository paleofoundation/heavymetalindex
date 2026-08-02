---
type: product-category
category: sunflower-seeds
title: "Sunflower Seeds"
hmtc_row: 3
hmtc_taxonomy_version: "2.2"
hmtc_category: 28
hmtc_category_name: "Nuts, Seeds, and Their Butters"
category_label: "Fruits, Vegetables, and Produce"
evidence_fitness: EF-5
public_evidence_label: Modeled or limited evidence
review_state: scaffolded
vulnerable_population: general_population
primary_metals_of_concern: [Cd, Pb, Ni]
applicable_regulations: []
variant_type: higher-contamination-sibling
platform_metals: [Cd]
pair_row: 11
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-06-09
sources: 8
created_by: cat4_step0_scaffold_2026_05_16
---

# Sunflower Seeds

Sunflower seeds (Helianthus annuus) sold as raw, roasted, salted, in-shell, or shelled. Sunflower seed butter routes to row 16. Contaminated row of the Row 11 / Row 12 / Row 13 triplet: species-level Cd hyperaccumulator documented in the phytoremediation literature. Fechner BfR MEAL commercial sunflower seed Cd group-max 265 µg/kg.

This page is a Step 0 lock scaffold for Cat 4 Row 13. Literature evidence will be populated as routed source pages accumulate per the synthesis workflow in CLAUDE.md Part 9. The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.

## Who this page is for

Brand legal teams evaluating HMTc Cat 4 certification for the Sunflower Seeds row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the produce, dried-goods, and snack aisles need the row-level assortment-eligibility view. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the Sunflower Seeds row. Speciation is non-substitutable per CLAUDE.md Part 14 (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (as-sold or as-consumed depending on the product form). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page; this public page reports literature evidence only.

Cat 4 lock empirical basis: Pass 2 occurrence-data extraction from the heavymetalindex.com wiki corpus (build claude/zealous-bhabha-d422c9, 896 source pages). The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` records the splitting decisions and platform attributions; this row inherits its scope from that document.

## Pair relationship + platform attribution

This is the contaminated row of a Cat 4 clean-contaminated split. The clean counterpart is Row 11 ([[products/nuts-seeds-other|Nuts and Seeds, Other]]). The categorical metal-load difference is attributable to platform ingredient(s) carrying load on **Cd**. Cross-row platform coordination per the Cat 4 Step 0 lock: the Standards Workbench's CC anchor for each platform is shared across all rows that share the platform, with per-row final limits diverging based on commercial-product variation.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Sunflower Seeds. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/cadmium\|Cd]] | Sunflower Seeds (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | Sunflower Seeds (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/nickel\|Ni]] | Sunflower Seeds (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
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

The percentile arithmetic that informs HMTc Cat 4 thresholds for this row lives on the staff Standards Workbench (`data/workbench/standards/sunflower-seeds.md`, to be generated). This public page reports literature evidence; the workbench applies the Cat 4 methodology (which includes the literature evidence occurrence-data-driven derivation and below-LOQ regulatory-floor fallback per the Step 0 lock) to produce candidate threshold values. The gap between literature evidence and HMTc thresholds is named honestly on the workbench, not hidden.

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda-tds-elements-2018-2020|Total Diet Study Report: Fiscal Years 2018-2020 Elements Data]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shaikh2026-sunflower-seeds-heavy-metals\|Shar et al. 2026]]. *Environmental Assessment of Heavy Metal Uptake and Accumulation in Sunflower Seeds*, Planta Animalia | 2026 | Peer-reviewed | PK Pb, Cd, Cr, Cu, Zn occurrence in 36 composite sunflower seed samples from different ecological zones of Sindh, Pakistan (n=36) |
| 2 | [[sources/tkachuk2024-sunflower-seeds-metals\|Tkachuk et al. 2024]]. *Ecological safety of sunflower seeds in the conditions of agricultural intensification*, Scientific Horizons | 2024 | Peer-reviewed | UA Pb, Cd, Cu, Zn, tHg occurrence in sunflower seeds and soil under intensive agricultural technology (n=one production batch) |
| 3 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/IR tAs, Pb, Cd, tHg, Ni, Cr occurrence in Review of published literature on heavy metals in oilseeds and vegetable/seed oils globally; no primary data collection |
| 4 | [[sources/fu2022-sunflower-cd-cultivar-transcriptomics\|Fu et al. 2022]]. *Physiological and Transcriptomic Comparison of Two Sunflower (Helianthus annuus L.) Cultivars With High/Low Cadmium Accumulation*, Frontiers in Plant Science | 2022 | Peer-reviewed | CN/UA Cd concentrations (n=2) |
| 5 | [[sources/ozyazici2021-sunflower-seeds-metals\|Gül et al. 2021]]. *Determination of Some Heavy Metals in Oil Sunflower Seeds Grown in the North of Turkey*, European Journal of Science and Technology | 2021 | Peer-reviewed | TR Al, Cd, Pb, Ni, Cr, Cu, Zn occurrence in 18 sunflower seed samples from six Middle Black Sea Region sunflower-growing areas (n=18) |
| 6 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | US/EU/AU Cd occurrence in Review of global literature and FDA Total Diet Study 2014–2016 data for cadmium in food and mitigation interventions |
| 7 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | international/EU/US Cd concentrations |
| 8 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EU Cd concentrations |
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
| [8530c3e2e](https://github.com/paleofoundation/heavymetalindex/commit/8530c3e2e) | 2026-05-17 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
