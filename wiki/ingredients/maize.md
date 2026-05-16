---
type: ingredient
commodity: maize
title: "Maize"
label: "Maize"
aliases: [corn, maize-grain]
category: grain
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [940, 2092]
    p95_ppb: 2673
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0, 179]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 1387]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [680, 2529]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, irrigation-water, seasonal-variance, geography, mining-legacy]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/maize]]"]
used_in_products: ["[[products/breakfast-cereals]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Maize

Maize (Zea mays), also known as corn, is the world's largest cereal crop by tonnage and a staple grain in sub-Saharan Africa, Latin America, and as a feed ingredient and processed-food substrate globally. The available evidence in the current corpus is concentrated in two African studies (Nigerian irrigated maize across seasons, Ethiopian commercial popcorn and cornflake) plus broad plant-food reviews; this geographic skew toward African-grown maize means the per-analyte values on this page reflect the elevated end of the global maize range rather than the global mean. Maize from US, Brazilian, and Argentine commercial production is documented in the broader literature as carrying substantially lower Pb and Cd than the African dataset reports, but no US or South American maize-specific source is in the current routed corpus for this page. The values reported here should be read with that scope limitation in mind.

## Why this commodity accumulates heavy metals

Maize accumulates heavy metals through soil uptake by the root system, with the translocation efficiency from root to grain depending on soil chemistry, growth season, irrigation source, and cultivar. The Nigerian Kano River Irrigation Project dataset establishes that the same crop on the same fields can produce dramatically different grain metal loads depending on season: wet-season maize grain had Cd and Cr below detection while dry-season grain from the same locations carried Cd at 179 µg/kg (above the WHO/FAO 100 µg/kg limit) and Cr at 2,529 µg/kg ([[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal|Abdullahi et al. 2024]]). The seasonal effect is driven by reduced soil moisture, altered translocation factor patterns, and concentration effects from lower water availability during grain fill.

Irrigation water is a major contributor when maize is grown in regions where surface water or shallow groundwater carries dissolved metals. The Kano dataset attributes much of the dry-season metal load to irrigation-water inputs concentrated by reduced dilution. Atmospheric deposition on maize tassels and grain during anthesis contributes a smaller surface load. Historical pesticide and fertilizer legacies, including phosphate fertilizer Cd content, contribute persistent soil burdens.

Processing transforms the raw grain metal load in characteristic ways. The Ethiopian dataset compared traditionally oil-popped popcorn against imported cornflake and found Pb in popcorn (940 µg/kg) approximately 2.6 times higher than in cornflake (360 µg/kg), with most metals reduced by the cornflake processing steps (cooking, water leaching during flake formation) ([[sources/abebe2017-popcorn-cornflake-metals-ethiopia|Abebe et al. 2017]]). The exceptions are Na (added salt), Ca (process water hardness), and Cu (process equipment), all of which increase through cornflake manufacture.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 940–2,092 | 2,673 | low | [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|4]] |
| Cd  | n=2 | 0–179 | — | low | [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|4]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=2 | 0–1,387 | — | low | [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|4]] |
| Al  | data gap | — | — | — | — |
| Cr  | n=2 | 680–2,529 | — | low | [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal\|1]], [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|4]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Nigerian Kano River Irrigation Project survey of maize grain from ten locations across two seasons provides the largest single contributor to this page's per-analyte values ([[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal|Abdullahi et al. 2024]]). Wet-season 2022 grain (n=10 locations) reported Pb at 1,260–2,673 µg/kg with a mean of 1,967 µg/kg, Ni at 180–620 µg/kg with a mean of 366 µg/kg, and Cd, Cr, and Hg below detection. Dry-season 2023 grain (n=10) reported Pb mean 2,092 µg/kg (above the WHO 2,000 µg/kg limit), Cd mean 179 µg/kg (above the WHO 100 µg/kg limit), Cr mean 2,529 µg/kg, and Ni mean 1,387 µg/kg. The same irrigation scheme, same crop, and same locations produced dramatically different metal profiles depending on season; this is the load-bearing finding for sourcing-specification design.

The Ethiopian commercial-market survey of five popcorn brands (pooled to a single sample) and three imported cornflake brands provides a comparison point for processed maize products ([[sources/abebe2017-popcorn-cornflake-metals-ethiopia|Abebe et al. 2017]]). Popcorn carried Pb at 940 µg/kg and Cr at 680 µg/kg with Cd and Ni below detection; imported cornflake carried Pb at 360 µg/kg and Cr at 300 µg/kg with Cd and Ni below detection. Both Pb levels exceed the EU Regulation (EU) 2023/915 limits for cereals (typically 100–200 µg/kg depending on cereal class) by 2- to 9-fold.

The Vasilachi 2023 review of heavy metal impacts on cereal crops in contaminated soils and the Afonne 2020 review of plant-food heavy metals both summarize the regulatory and physiological landscape for maize but provide no primary occurrence data beyond the secondary citations they review ([[sources/vasilachi2023-heavy-metals-cereal-crops|Vasilachi et al. 2023]], [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]]). Both confirm that maize from mining-impacted and irrigation-contaminated regions consistently exceeds regulatory limits for Pb, Cd, and Cr.

Regional and varietal variation outside the African dataset is not resolved in the current corpus. US, Brazilian, and Argentine commercial maize, which dominates global trade, is documented in the broader literature as carrying substantially lower Pb and Cd, but a primary source for this commercial baseline is not in the current routing for this page; it should be added in a future ingest.

## Processing effects

The Ethiopian dataset provides the cleanest direct comparison of processing effects on maize metal load. Traditionally oil-popped popcorn carried Pb at approximately 2.6 times the cornflake Pb level, with most metals reduced through cornflake manufacture by the cooking and leaching steps. The exception of Na, Ca, and Cu reflects salt addition, process water hardness, and metal-contact contamination during industrial cornflake production. Nixtamalization (the traditional Mesoamerican alkaline cooking process that produces masa and tortillas) is not represented in the current corpus, but the published literature documents that alkaline processing can mobilize some metals out of the grain matrix while introducing trace contaminants from the lime used in the process. Wet milling for corn syrup and corn starch separates the grain into fractions with distinct metal distributions, with germ and bran fractions concentrating most of the metal load and the starch fraction carrying substantially less. Dry milling for cornmeal and corn flour redistributes metals but does not remove them.

## Ingredient-derivative risk

Maize produces an unusually wide range of food derivatives, each with distinct metal profiles. Whole maize grain and stone-ground cornmeal carry the full metal load of the source crop. Corn flour, corn grits, and polenta similarly preserve the source-grain metal load. Cornflake and other extruded breakfast cereals carry a modest reduction in most metals through processing but, as the Ethiopian dataset shows, the absolute levels can still exceed regulatory ceilings when the source maize was contaminated. Popcorn, produced from a specific maize variety, carries the source-grain metal load directly plus any oil-related residues from popping. Corn syrup and corn-based sweeteners are produced from the starch fraction of wet-milled corn and carry substantially lower metal loads than whole-grain derivatives because metals concentrate in the germ and bran fractions removed during milling. Corn oil from the germ fraction concentrates metals associated with the germ. Tortilla, masa, and other nixtamalized products carry the source-grain metals plus any Pb associated with the lime used in alkaline cooking. Distillers grains and corn-derived feed ingredients (out of scope for the food-chain wiki) concentrate metals into the protein and bran fractions.

## Mitigation options

Sourcing levers operate at the buyer and producer level. Geographic sourcing specifications that exclude maize from documented contaminated-irrigation regions (Kano River basin, mining-impacted catchments across West Africa) reduce the inherent Pb, Cd, and Cr load. Seasonal sourcing constraints, sourcing wet-season maize from regions where seasonal effects are documented, are the highest-leverage single intervention given the Nigerian dataset's documented 2- to 10-fold seasonal swings. Commercial maize from US, Brazilian, and Argentine production typically carries lower metal loads than the African dataset represents and is the de facto sourcing baseline for industrial maize-derivative production globally.

Agronomic levers operate on the maize producer. Irrigation-water testing to exclude contaminated sources is the highest-leverage agronomic intervention given the irrigation-driven seasonal patterns documented by [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal|Abdullahi et al. 2024]]. Soil amendment to manage pH for Cd bioavailability, cultivar selection for low-uptake varieties, and avoidance of high-Cd phosphate fertilizers are documented in the broader literature reviewed by [[sources/vasilachi2023-heavy-metals-cereal-crops|Vasilachi et al. 2023]] and [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]].

Processing levers are partial. Cornflake and other industrial cereal manufacture reduces most metals through cooking and leaching but does not eliminate them. Wet milling concentrates metals into the germ and bran fractions; brands sourcing only the starch fraction can claim lower metal loads in finished products. Nixtamalization may mobilize some metals out of the grain matrix but introduces trace contaminants from the lime.

Formulation levers operate on the brand. Substituting starch-fraction-derived ingredients for whole-grain-derived ingredients reduces metal load in formulations where the functional requirement permits. Diluting maize ingredients with lower-metal-load grains reduces per-serving metal exposure.

Testing and QC levers are critical given the documented exceedance pattern in African-sourced maize. Lot-level ICP-MS testing of incoming maize raw material against a sourcing specification catches origin- and season-related variability before it enters production. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for whole maize and most maize derivatives in the current evidence base.

## Regulatory limits that apply

The Codex Alimentarius CXS 193-1995 maximum levels, summarized in [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]], establish Pb in cereal grains at 0.2 mg/kg (200 ppb) and Cd in cereal grains at 0.1 mg/kg (100 ppb). The European Union Regulation (EU) 2023/915 establishes Pb in cereal grains at 0.20 mg/kg (200 ppb) on a wet-weight basis as placed on the market, with stricter values for processed cereal-based foods for infants and young children ([[regulations/eu2023-contaminants-maximum-levels]]). The WHO/FAO permissible limits of 2 mg/kg Pb and 0.1 mg/kg Cd are the reference values used in the Nigerian Kano dataset's exceedance analysis ([[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal|Abdullahi et al. 2024]]). The United States FDA action level for Pb in processed food intended for babies and young children includes a 20 µg/kg ceiling for dry infant cereals other than rice ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]), which applies to maize-based infant cereal products. FDA has no commodity-specific action level for Pb or Cd in whole maize grain or in maize products intended for the general population under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abdullahi2024-heavy-metals-maize-nigeria-seasonal\|Abdullahi et al. 2024]]. *Seasonal Variation and Uptake Pattern of Heavy Metals in Maize*, Dutse Journal of Pure and Applied Sciences (DUJOPAS) | 2024 | Peer-reviewed | Primary occurrence data for Nigerian irrigated maize across wet and dry seasons (n=10 locations); dry-season Pb mean 2,092 ppb, Cd mean 179 ppb, Cr mean 2,529 ppb, Ni mean 1,387 ppb (all above WHO/FAO limits); wet season substantially lower |
| 2 | [[sources/vasilachi2023-heavy-metals-cereal-crops\|Vasilachi et al. 2023]]. *Analysis of Heavy Metal Impacts on Cereal Crop Growth and Development in Contaminated Soils*, Agriculture | 2023 | Review | Review of heavy metal effects on cereal crop physiology, growth, and grain accumulation in contaminated soils; provides agronomic mechanism context for maize |
| 3 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | Codex CXS 193-1995 ML table for cereal grains (Pb 200 ppb, Cd 100 ppb); maize-specific context from cited primary studies including Tanzania gold-mine and central-China mining-area findings |
| 4 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | Primary occurrence data for processed maize products (popcorn n=5 pooled, cornflake n=3); popcorn Pb 940 ppb, cornflake Pb 360 ppb; documents processing effect on metal load |
<!-- END: hmi-source-legend -->
