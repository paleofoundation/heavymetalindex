---
type: product-category
category: spinach
title: "Spinach"
hmtc_row: 5
hmtc_category: 4
category_label: "Fruits, Vegetables, and Produce"
evidence_fitness: EF-5
public_evidence_label: Modeled or limited evidence
review_state: scaffolded
vulnerable_population: general_population
primary_metals_of_concern: [Pb, Cd]
applicable_regulations: []
variant_type: higher-contamination-sibling
platform_metals: [Cd, Pb]
pair_row: 4
audience: [regulator, educator, consumer, brand-legal]
wiki_doi: null
updated: 2026-10-15
sources: 19
created_by: cat4_step0_scaffold_2026_05_16
hero_image: /static/heroes/leafy-greens-spinach-kale-lettuce.webp
hero_image_alt: "Spinach, kale, collard greens, romaine and iceberg lettuce illustrating spinach product-format context."
---

# Spinach

## Overview

Spinach (*Spinacia oleracea*) sold as fresh, frozen, baby spinach, mature spinach, and spinach-based prepared salads. Concentrations, jurisdiction limits, and pathway evidence for this commodity are compiled on [[ingredients/spinach]]. Seyfferth and colleagues report higher fresh-weight cadmium in later US Total Diet Study composites than in the 1980s survey. They attribute that pattern to a geographic shift toward the Salinas Valley and discuss California and Arizona samples separately from the national composites. [[sources/seyfferth2024-spinach-cd-pb-review]]

This page is a Step 0 lock scaffold for Cat 4 Row 5. The compiled literature for the commodity is on [[ingredients/spinach]]. The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` is the canonical reference for the row's clean-vs-contaminated framing and platform attribution.

## Who this page is for

Brand legal teams evaluating HMT&C certification for the Spinach row need to know what the cited literature reports per panel metal, what the applicable regulatory caps are, and how this row relates to its clean-contaminated pair (when applicable). Retailer compliance teams stocking the produce, dried-goods, and snack aisles need the row-level assortment-eligibility view. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page.

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in the Spinach row. Speciation is non-substitutable (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (as-sold or as-consumed depending on the product form). Non-detect handling follows each source's convention. Pooling avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page; this public page reports literature evidence only.

Cat 4 lock empirical basis: Pass 2 occurrence-data extraction from the heavymetalindex.com wiki corpus (build claude/zealous-bhabha-d422c9, 896 source pages). The Step 0 lock document at `Category4_Step_0_Output_LOCKED.md` records the splitting decisions and platform attributions; this row inherits its scope from that document.

## Pair relationship + platform attribution

This is the contaminated row of a Cat 4 clean-contaminated split. The clean counterpart is Row 4 ([[products/leafy-vegetables-other|Leafy / Green Vegetables, Other]]). The categorical metal-load difference is attributable to platform ingredient(s) carrying load on **Cd, Pb**. Certification threshold decisions for this row and its clean counterpart are made separately under the certification program and are not published on this public page.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Spinach. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Spinach (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | [[regulations/eu2023-contaminants-maximum-levels]]: 300 ppb (wet weight) | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Spinach (summary-only / supporting context) | mean 0.065 to 222 ppb (1 source); highest reported 222 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | as-consumed |
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

This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in this product category; it publishes no certification thresholds of its own. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified.com, which reads this page as its literature baseline. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold.

## Historical recalls and enforcement

Cat 4 (produce, nuts, seeds) regulatory enforcement intersects two domains: heavy-metal contamination (the focus of this row) and microbial contamination (FDA recall notices for E. coli/Salmonella/Listeria in fresh produce, a separate concern). FDA Total Diet Study and Pesticide Data Program surveillance reports establish the heavy-metal occurrence baseline ([[sources/fda-tds-elements-2018-2020|FDA 2022]]). State-level Cd-in-leafy-greens enforcement has been active in California under Prop 65; the related Mateel Environmental settlement framework has shaped compliance practice. Individual brand recall actions are not enumerated here.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/seyfferth2024-spinach-cd-pb-review|Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach]]<span class="hmi-ref-meta">Seyfferth AL, Limmer MA, Runkle BRK, and Chaney RL · GeoHealth · 2024 · [doi.org/10.1029/2024GH001081](https://doi.org/10.1029/2024GH001081)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/fda-tds-elements-2018-2020|Total Diet Study Report: Fiscal Years 2018-2020 Elements Data]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 2 | [[sources/see2025-malaysia-leafy-vegetables-icp-oes\|See et al. 2025]]. *Heavy Metals Assessment in Selected Leafy Vegetables from Selangor, Malaysia*, Pertanika Journal of Tropical Agricultural Science | 2025 | Peer-reviewed | MY Al, Cd, Cr, Cu, Fe, Pb occurrence in Four leafy vegetable types (cabbage Brassica oleracea subsp. capitata; mustard B. juncea; spinach Spinacia oleracea; pak choi B.... (n=12) |
| 3 | [[sources/fatai2024-african-spinach-tomato-nigeria\|Fatai et al. 2024]]. *Concentration and Health Risk Assessment of Selected Heavy Metals (HMs) in African spinach (Amaranthus hybridus) and Tomato (Solanum lycopersicum) Grown around Ashaka Community, Gombe State, Nigeria*, Journal of Chemistry and Nutritional Biochemistry | 2024 | Peer-reviewed | NG Cu, Ni, Zn, Cd, Cr, Pb occurrence in African spinach and tomato composite samples collected around Ashaka community, Gombe State, Nigeria (n=2) |
| 4 | [[sources/seyfferth2024-spinach-cd-pb-review\|Seyfferth et al. 2024]]. *Mitigating Toxic Metal Exposure Through Leafy Greens: A Comprehensive Review Contrasting Cadmium and Lead in Spinach*, GeoHealth | 2024 | Peer-reviewed | US Pb, Cd occurrence in Review of U.S. spinach surveys including USDA-FDA-EPA 1980s paired soil-plant study (n=105), FDA Total Diet Study 1991-2017 and... |
| 5 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 6 | [[sources/bedoya-perales2023-moquegua-peru-mining-dataset\|Bedoya-Perales et al. 2023]]. *Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru*, Scientific Data | 2023 | Peer-reviewed | PE tAs, Cd, Pb, Cu, Zn concentrations (n=341) |
| 7 | [[sources/martin-leon2023-canary-leafy-vegetables-elements\|Martin-Leon et al. 2023]]. *Evaluation of essential, toxic and potentially toxic elements in leafy vegetables grown in the Canary Islands*, Toxics | 2023 | Peer-reviewed | ES Cd, tAs, Pb, Al, Cr, Ni, V, Sr occurrence in Two hundred forty-four ready-to-eat leafy-vegetable samples from the Canary Islands, including spinach, watercress, chard, lettuces, arugula, and lamb's... (n=244) |
| 8 | [[sources/sultana2022-dhaka-root-leafy-vegetables\|Sultana et al. 2022]]. *Heavy Metals in Commonly Consumed Root and Leafy Vegetables in Dhaka City, Bangladesh, and Assessment of Associated Public Health Risks*, Environmental Systems Research | 2022 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Cu, Zn, Fe, Mn occurrence in Four root vegetables (beet Beta vulgaris, radish Raphanus sativus, carrot Daucus carota, turnip Brassica rapa) and five leafy... (n=36) |
| 9 | [[sources/ullah2022-khyber-vegetables-metals\|Ullah et al. 2022]]. *Health Risk Assessment and Multivariate Statistical Analysis of Heavy Metals in Vegetables of Khyber Pakhtunkhwa Region, Pakistan*, Biological Trace Element Research | 2022 | Peer-reviewed | PK Pb, Cr, Cd, Cu, Zn, Ni, Fe, Mn occurrence in Nine locally grown vegetable types from three peri-urban D.I. Khan sectors: sectors X and Y irrigated with untreated... |
| 10 | [[sources/adebayo2020-wastewater-irrigated-spinach\|Adebayo et al. 2020]]. *Levels of heavy metals and their health risk assessment from wastewater irrigated spinach in railway quarters, Bauchi, Bauchi state, Nigeria*, International Journal of Advanced Chemistry Research | 2020 | Peer-reviewed | NG Cd, Cr, Cu, Mn, Ni, Pb occurrence in Wastewater and African spinach (Amarantus caudatus) samples from Railway Quarters irrigation farm, Bauchi, Nigeria (n=3) |
| 11 | [[sources/nawaz2019-wastewater-manganese-spinach\|Nawaz et al. 2019]]. *Wastewater induced manganese toxicity affects growth and bioavailability in spinach (Spinacia oleracea)*, International Journal of Agriculture & Biology | 2019 | Peer-reviewed | PK Mn, Zn, Fe, Pb, Cd occurrence in Wastewater collected from three Faisalabad drains and a four-replicate spinach pot experiment using Bawachak drain wastewater amended with... |
| 12 | [[sources/ghasemidehkordi2018-markazi-vegetables-pb-hg\|Ghasemidehkordi et al. 2018]]. *Concentration of lead and mercury in collected vegetables and herbs from Markazi province, Iran: a non-carcinogenic risk assessment*, Food and Chemical Toxicology 113:204-210 | 2018 | Peer-reviewed | IR Pb, tHg occurrence in Ten species of green leafy vegetables and herbs (Allium ampeloprasum L. [leek], A. wakegi L. [Welsh/Japanese bunching onion],... (n=160) |
| 13 | [[sources/naser2018-leafy-vegetables-bangladesh-metals\|Naser et al. 2018]]. *Heavy metal accumulation in leafy vegetables grown in industrial areas under varying levels of pollution*, Bangladesh Journal of Agricultural Research | 2018 | Peer-reviewed | BD Pb, Cd, Ni, Co, Cr occurrence in spinach, red amaranth, and amaranth from Gazipur industrial and non-industrial areas, Bangladesh (n=three leafy vegetables across three pollution levels) |
| 14 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=ten vegetables and fruits) |
| 15 | [[sources/hussain2016-spinach-cadmium-zinc\|Hussain et al. 2016]]. *The Cd:Zn ratio in a soil affects Cd toxicity in spinach (Spinacea oleracea L.)*, Pakistan Journal of Agricultural Sciences | 2016 | Peer-reviewed | PK Cd, Zn, Pb occurrence in Glasshouse pot experiment at the University of Agriculture Faisalabad, Pakistan, with four Cd/Zn soil treatments and three replicates... (n=3) |
| 16 | [[sources/sharma2016-spinach-wastewater-metals\|Sharma et al. 2016]]. *Heavy metals in vegetables: screening health risks involved in cultivation along wastewater drain and irrigating with wastewater*, SpringerPlus | 2016 | Peer-reviewed | IN Cd, Pb, Cu, Co, Fe occurrence in Edible portions of 12 common vegetable types from three Amritsar, Punjab agricultural sites, collected in triplicate per vegetable/site. (n=108) |
| 17 | [[sources/mohod2015-spinach-tomato-metals\|Mohod 2015]]. *A review on the concentration of the heavy metals in vegetable samples like spinach and tomato grown near the area of Amba Nalla of Amravati City*, International Journal of Innovative Research in Science, Engineering and Technology | 2015 | Peer-reviewed | IN Pb, Cd, Cu, Zn occurrence in spinach leaf and tomato grown near Amba Nalla, Amravati City, India (n=not reported in abstract) |
| 18 | [[sources/salawu2015-spinach-irrigation-metals\|Salawu et al. 2015]]. *Determination of some selected heavy metals in spinach and irrigated water from Samaru Area within Gusau Metropolis in Zamfara State, Nigeria*, Journal of Toxicology and Environmental Health Sciences | 2015 | Peer-reviewed | NG Pb, Cd, Fe, Cu, Zn occurrence in spinach and irrigation water from Samaru Area, Gusau Metropolis, Zamfara State, Nigeria (n=triplicate measurements) |
| 19 | [[sources/zemanova2015-spinach-cadmium-amino-fatty-acids\|Zemanova et al. 2015]]. *Changes in the contents of amino acids and the profile of fatty acids in response to cadmium contamination in spinach*, Plant, Soil and Environment | 2015 | Peer-reviewed | CZ Cd occurrence in Spinach cv. Matador grown in a controlled pot experiment in Prague with four Cd soil-dose treatments and four... (n=96) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [cbedbcc786](https://github.com/paleofoundation/heavymetalindex/commit/cbedbcc786) | 2026-08-18 | correction | Narrative text revised |
| [ad172bca7e](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7e) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
