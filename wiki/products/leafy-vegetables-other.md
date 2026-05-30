---
type: product-category
category: leafy-vegetables-other
title: "Leafy / Green Vegetables, Other"
hmtc_row: 4
hmtc_category: 4
category_label: "Fruits, Vegetables, and Produce"
evidence_fitness: EF-5
public_evidence_label: Modeled or limited evidence
review_state: scaffolded
vulnerable_population: general_population
primary_metals_of_concern: [Pb, Cd]
applicable_regulations: []
variant_type: clean_benchmark
pair_row: 5
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-05-16
sources: 11
created_by: cat4_step0_scaffold_2026_05_16
---

# Leafy / Green Vegetables, Other

Lettuce, kale, chard, arugula, herbs (basil, parsley, cilantro), and other leafy green vegetables not in the spinach row. Clean baseline of the Row 4 / Row 5 clean-contaminated pair: spinach is split out as its own row because Spinacia oleracea is a documented Cd hyperaccumulator at species level.

This page is a Step 0 lock scaffold for Cat 4 Row 4. Literature evidence will be populated as routed source pages accumulate per the synthesis workflow in CLAUDE.md Part 9. The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.

## Who this page is for

Brand legal teams evaluating HMTc Cat 4 certification for the Leafy / Green Vegetables, Other row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the produce, dried-goods, and snack aisles need the row-level assortment-eligibility view. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the Leafy / Green Vegetables, Other row. Speciation is non-substitutable per CLAUDE.md Part 14 (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (as-sold or as-consumed depending on the product form). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page; this public page reports literature evidence only.

Cat 4 lock empirical basis: Pass 2 occurrence-data extraction from the heavymetalindex.com wiki corpus (build claude/zealous-bhabha-d422c9, 896 source pages). The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` records the splitting decisions and platform attributions; this row inherits its scope from that document.

## Pair relationship

This is the clean-baseline row of a Cat 4 clean-contaminated split. The contaminated counterpart is Row 5 ([[products/spinach|Spinach]]). The Step 0 lock documents the categorical metal-load difference attributable to the contaminated row's platform ingredient(s); the clean baseline row certifies against limits set to genuinely clean-achievable levels independent of the platform.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Leafy / Green Vegetables, Other. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Leafy / Green Vegetables, Other (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Leafy / Green Vegetables, Other (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
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

1. **Maintain the clean-baseline commodity choice.** The Row 4 clean baseline exists precisely because alternative commodities (without the platform load) are commercially available within the same product class. Brands certifying this row commit to NOT using the contaminated variant's ingredient class as a substitute.
2. **Sourcing-level controls**: origin region, soil-Cd or paddy-iAs pre-screening, supplier specification.
3. **Agronomic levers**: soil amendments, water management, cultivar selection.
4. **Processing levers** where applicable: washing, peeling, blanching for fresh-cut and frozen formats.
5. **Testing/QC levers**: lot-level ICP-MS on raw commodity and finished product.

## How standards math uses this page

The percentile arithmetic that informs HMTc Cat 4 thresholds for this row lives on the staff Standards Workbench (`data/workbench/standards/leafy-vegetables-other.md`, to be generated). This public page reports literature evidence; the workbench applies the Cat 4 methodology (which includes the literature evidence occurrence-data-driven derivation and below-LOQ regulatory-floor fallback per the Step 0 lock) to produce candidate threshold values. The gap between literature evidence and HMTc thresholds is named honestly on the workbench, not hidden.

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Per CLAUDE.md Part 12, individual brand recall actions are not enumerated here.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/osuolale2025-leafy-vegetables-ondo-trace-elements\|Osuolale et al. 2025]]. *Assessing Public Health Risks from Trace Element Contamination in Common Leafy Vegetables from Ondo, Nigeria, Using PIXE and Multivariate Statistics*, International Journal of Research and Innovation in Applied Science | 2025 | Peer-reviewed | NG Ni, Co, Cd, Pb, Fe, Zn occurrence in Ten composite samples from six leafy vegetable types in Ondo Metropolis, Nigeria |
| 2 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | MY Al, Cd, Cr, Cu, Fe, Pb occurrence in Four leafy vegetable types (cabbage Brassica oleracea subsp. capitata; mustard B. juncea; spinach Spinacia oleracea; pak choi B.... (n=12) |
| 3 | [[sources/kim2024-metals-kale-urban-rural-maryland\|Kim et al. 2024]]. *Nutrients and non-essential metals in darkibor kale grown at urban and rural farms: a pilot study*, PLOS ONE | 2024 | Peer-reviewed | US tAs, Pb, Cd, Cr, Ni, U occurrence in Darkibor kale grown at three urban and four rural farms in and around Baltimore City, Maryland, USA; harvested... (n=42) |
| 4 | [[sources/bambara2023-loumbila-vegetables-heavy-metals\|Luc et al. 2023]]. *Evaluation of the Metallic Contamination of Market Garden Products around the Loumbila Dam*, Open Journal of Applied Sciences | 2023 | Peer-reviewed | BF Cu, Ni, Zn, Cr, Pb occurrence in Market-garden vegetables around Loumbila Dam, Burkina Faso |
| 5 | [[sources/vela2023-quito-vegetables-cd-pb\|Doris et al. 2023]]. *Determination of cadmium and lead in vegetables marketed in Quito, Ecuador*, Revista Internacional de Contaminacion Ambiental | 2023 | Peer-reviewed | EC Cd, Pb occurrence in Tomato, carrot, and lettuce samples marketed in Quito, Ecuador |
| 6 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 7 | [[sources/sadee2022-erbil-vegetables\|Sadee 2022]]. *Determination of trace metals in vegetables using ICP-MS*, ZANCO Journal of Pure and Applied Sciences | 2022 | Peer-reviewed | IQ tAs, Cd, Cr, Pb, Cu occurrence in ten common vegetables from local markets in Erbil, Kurdistan Region, Iraq (n=10) |
| 8 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 9 | [[sources/wang2021-houttuynia-mercury-china\|Wang et al. 2021]]. *Mercury accumulation in vegetable Houttuynia cordata Thunb. from two different geological areas in southwest China and implications for human consumption*, Scientific Reports 11:1470 | 2021 | Peer-reviewed | CN tHg, MeHg occurrence in Edible Houttuynia cordata tissues collected from a mercury mining area and a non-mining comparison area in southwest China. (n=Houttuynia cordata plants and rhizosphere soils from Danzhai mercury-mining and Zhijin non-mining areas in Guizhou, China; tissue-level n varies by site/tissue table.) |
| 10 | [[sources/ahmed2017-bangladesh-vegetable-arsenic\|Ahmed et al. 2017]]. *Arsenic Contamination of Water-Soil-Crop System in an Industrial Area of Bangladesh*, International Journal of Environment | 2017 | Peer-reviewed | BD tAs occurrence in Vegetables grown in a Gazipur industrial-area water-soil-crop system in Bangladesh (n=27) |
| 11 | [[sources/pal2017-wastewater-vegetables-heavy-metals\|Jitender et al. 2017]]. *Heavy Metals in Soil and Vegetables and their Effect on Health*, International Journal of Engineering Science Technologies | 2017 | Peer-reviewed | IN Cd, Pb, Cu, Zn, Cr, Ni occurrence in Vegetables grown on domestic-wastewater-irrigated farmland around Hisar district, Haryana, India |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [d26f8f1](https://github.com/paleofoundation/heavymetalindex/commit/d26f8f1) | 2026-05-30 | autonomy: checkpoint [deterministic-phase] 2026-05-30T04-02-50Z |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
<!-- END: hmi-page-history -->
