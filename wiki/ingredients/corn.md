---
title: "Corn"
type: ingredient
commodity: corn
label: "Corn"
aliases: ["Corn, frozen, boiled", "corn"]
category: vegetable-grain
tds_food:
  number: 54
  description: "Corn, frozen, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [1.4, 3.5]
    p95_ppb: 3.8
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 54.4]
    p95_ppb: 60.1
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Corn

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 54, "Corn, frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Maize (corn) accumulates cadmium through root uptake from soil, a mechanism that is modulated by soil pH, organic matter content, and the competing presence of zinc. In acidic soils or soils with elevated cadmium from phosphate fertilizer application, maize grain can carry detectable cadmium, though whole-grain corn is generally a lower Cd accumulator than leafy vegetables or root vegetables because the grain is a reproductive structure with some buffering against cadmium translocation from vegetative tissue. [[sources/romero-crespo2023-ecuador-mining-crops-metals]] documented substantially elevated cadmium, chromium, lead, and arsenic in maize grain grown near mining operations in Ecuador, where soil-to-plant transfer is driven by contaminated parent rock and tailings rather than agricultural inputs alone.

Arsenic in corn is typically low: the FDA TDS FY2018-FY2020 data shows tAs at or near zero across all 27 composite samples for frozen boiled corn [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the broader literature showing that corn does not concentrate arsenic the way flooded-paddy rice does. Nickel shows episodic elevation in the TDS corn data, with a p90 of 54.4 ppb and a maximum of 160 ppb, indicating that some market-basket composites captured nickel from soil or processing sources at levels notably higher than typical. Lead and mercury are essentially non-detectable in the TDS corn dataset.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=1 (in progress) | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | n=1 (in progress) | — | — | — | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Corn, frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 1.36 | 2.6 | 3.54 | 3.81 | 4.8 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 54.4 | 60.1 | 160 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 market-basket survey of frozen boiled corn (n=27) shows Cd at a median of 2.6 ppb and a maximum of 4.8 ppb, with Pb and tAs at zero across all samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. This represents the commercial US market baseline for a composite of diverse origin corn. By contrast, [[sources/romero-crespo2023-ecuador-mining-crops-metals]] measured substantially higher metal concentrations in maize grain from agricultural plots adjacent to mining operations in Ecuador, where contamination from ore processing and tailings runoff is the dominant input. This contrast between market-basket and mining-area concentrations reflects the origin dependence that is critical to understanding corn's metal risk profile: under normal US or EU agricultural conditions the risk is low, but sourcing from mining-adjacent or industrially contaminated regions can elevate cadmium, lead, arsenic, chromium, and nickel well above market-basket levels.

Corn variety also influences metal accumulation, though varietal differences are less studied than origin effects. Field corn versus sweet corn versus popcorn varieties have different grain morphologies and growing conditions, and these differences can translate into different metal concentrations per unit of edible tissue. No cross-varietal comparison is yet integrated into this corpus.

## Processing effects

Milling removes the bran and germ fractions of the corn kernel, concentrating the starchy endosperm in refined products (corn flour, masa, starch) and leaving the metal-concentrated outer layers behind. Cadmium in corn grain, like in wheat, tends to partition into the bran and germ rather than the endosperm, so degermination and milling reduce Cd in refined corn products relative to whole-grain corn. Wet milling for corn starch and corn syrup production removes essentially all mineral content, including trace metals, so these highly refined corn derivatives carry negligible metals.

Boiling corn does not meaningfully reduce metal concentrations in the grain, since most metal is structurally bound within the kernel's cell walls and is not water-extractable. The TDS data for frozen boiled corn therefore reflects an as-consumed metal burden that is substantially similar to the raw grain's metal content adjusted for moisture change.

## Ingredient-derivative risk

Corn is processed into a wide range of derivative ingredients with different metal profiles. Whole-grain corn flour and masa harina retain the bran fraction and carry the highest cadmium and mineral content of any corn-derived product. Degerminated corn meal removes the germ and has lower cadmium than whole-grain flour. Corn starch and corn syrup are highly refined and carry negligible metals. Corn oil, extracted from the germ fraction, concentrates any lipid-soluble contaminants present in the germ, though heavy metals are largely hydrophilic and do not preferentially partition into oil; corn oil is therefore a low-risk derivative for the analytes tracked in this wiki. Popcorn, which retains the pericarp and germ, carries a metal burden more similar to whole-grain corn than to degerminated products.

## Mitigation options

### Sourcing levers

Origin selection is the dominant mitigation lever for corn. Avoiding procurement from mining-adjacent regions or areas with documented soil cadmium elevation (for example, from legacy phosphate fertilizer overuse or industrial contamination) is the most effective strategy. [[sources/romero-crespo2023-ecuador-mining-crops-metals]] illustrates the magnitude of the origin effect: mining-area maize carried metals far exceeding the levels in US commercial market-basket corn [[sources/fda2022-tds-elements-fy2018-fy2020]]. Supplier specification requiring origin documentation and soil-cadmium pre-screening is the procurement-side implementation of this lever.

### Agronomic levers

Soil pH management reduces cadmium bioavailability; liming acidic soils to raise pH above 6.5 reduces cadmium uptake by corn. Zinc application competes with cadmium at the same root transporter, potentially reducing cadmium uptake, though excess zinc application carries its own environmental costs. These levers are most relevant for farmers supplying to buyers with contractual metal specifications.

### Processing levers

Degermination and milling to remove bran and germ reduces cadmium in refined corn products. For whole-grain corn products, this lever is not applicable by definition. Washing or blanching corn prior to processing has minimal effect on grain-incorporated metals but may reduce surface-deposited particulate contamination.

### Formulation levers

For food manufacturers concerned about cadmium or nickel, substituting degerminated corn products for whole-grain corn in formulations will reduce the metal burden per serving without eliminating corn as an ingredient.

### Testing and QC levers

Given that nickel in the TDS corn dataset reaches 160 ppb maximum across 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level nickel testing is warranted for brands with high-corn-content products sold to sensitive populations. Cadmium testing at the incoming ingredient level is appropriate for any product using whole-grain corn from origins with uncertain soil histories.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in corn is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union under [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for cadmium in cereals (including corn) of 0.10 mg/kg (100 ppb) wet weight. For lead in cereals, the EU limit is 0.20 mg/kg (200 ppb). Codex Alimentarius (CXS 193-1995 and revisions) sets a maximum level of 0.10 mg/kg for cadmium in grain crops including maize and 0.20 mg/kg for lead. The US TDS market-basket Cd maximum of 4.8 ppb and Pb at zero are well below these regulatory limits for the sampled commercial products. No US federal maximum level for cadmium or lead in corn grain has been finalized for the general food supply as of 2026.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|Gholami et al. 2025]]. *Health risk assessment Pb, As and Cr in corn (Zea mays) of Behbahan and Dezful from Khuzestan Province, Iran*, Scientific Reports | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/hassan2025-cornflakes-lebanon-metals\|Hassan et al. 2025]]. *Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance*, RSC Advances | 2025 | Peer-reviewed | Measured tAs, Cd, Cr, tHg, and Pb in 42 commercial cornflake products from Lebanese retail; Cr showed the highest mean concentrations; risk assessment for adult and child consumers |
| 3 | [[sources/abatemi-usman2023-corn-cement-nigeria\|Abatemi-Usman et al. 2023]]. *Trace elements concentrations in soil contaminate corn in the vicinity of a cement-manufacturing plant: potential health implications*, Journal of Exposure Science & Environmental Epidemiology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | Measured As, Cd, Cr, Cu, Ni, Pb, and Zn in food crops including corn near mining operations in Ecuador; mining-area contamination transfer into maize grain |
| 5 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 8 | [[sources/agarwal2022-heavy-metals-vegetables-east-kolkata\|Agarwal et al. 2022]]. *Seasonal Variations in Bioaccumulation and Translocation of Toxic Heavy Metals in the Dominant Vegetables of East Kolkata Wetlands: a Case Study with Suggestive Ecorestorative Strategies*, Water, Air, & Soil Pollution | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/bai2022-arsenic-coal-burning-shaanxi\|Bai et al. 2022]]. *Investigation Into Environmental Selenium and Arsenic Levels and Arseniasis Prevalence in an Arsenic-Affected Coal-Burning Area*, Frontiers in Nutrition | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in corn-based TDS food items (TDS Food varies; n varies by analyte) |
<!-- END: hmi-source-legend -->

