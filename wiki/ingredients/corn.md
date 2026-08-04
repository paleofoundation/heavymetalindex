---
title: "Corn"
type: ingredient
commodity: corn
label: "Corn"
aliases: ["Corn, frozen, boiled", "corn", maize, Maize, "ingredients/maize"]
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
    n_studies: 19
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1.4, 3.5]
    p95_ppb: 3.8
    confidence: high
    n_studies: 18
    last_reviewed: 2026-05-16
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
    n_studies: 13
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 54.4]
    p95_ppb: 60.1
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
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
    n_studies: 15
    last_reviewed: 2026-05-16
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
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 54
---

# Corn

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 54, "Corn, frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Maize (corn) accumulates cadmium through root uptake from soil, a mechanism that is modulated by soil pH, organic matter content, and the competing presence of zinc. In acidic soils or soils with elevated cadmium from phosphate fertilizer application, maize grain can carry detectable cadmium, though whole-grain corn is generally a lower Cd accumulator than leafy vegetables or root vegetables because the grain is a reproductive structure with some buffering against cadmium translocation from vegetative tissue. [[sources/romero-crespo2023-ecuador-mining-crops-metals]] documented substantially elevated cadmium, chromium, lead, and arsenic in maize grain grown near mining operations in Ecuador, where soil-to-plant transfer is driven by contaminated parent rock and tailings rather than agricultural inputs alone.

Arsenic in corn is typically low: the FDA TDS FY2018-FY2020 data shows tAs at or near zero across all 27 composite samples for frozen boiled corn [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the broader literature showing that corn does not concentrate arsenic the way flooded-paddy rice does. Nickel shows episodic elevation in the TDS corn data, with a maximum of 160 ppb, indicating that some market-basket composites captured nickel from soil or processing sources at levels notably higher than typical. Lead and mercury are essentially non-detectable in the TDS corn dataset.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=19 | 0 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|2]], [[sources/hassan2025-cornflakes-lebanon-metals\|3]] |
| Cd | n=18 | 1.4–3.5 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/hassan2025-cornflakes-lebanon-metals\|2]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=13 | 0 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|2]], [[sources/hassan2025-cornflakes-lebanon-metals\|3]] |
| tHg | n=8 | 0 | medium | [[sources/hassan2025-cornflakes-lebanon-metals\|1]], [[sources/ibrahim2024-food-heavy-metals-nigeria\|2]], [[sources/rubio2023-metals-cereals-madeira-azores\|3]] |
| Ni | n=8 | 0–54.4 | medium | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|2]], [[sources/abatemi-usman2023-corn-cement-nigeria\|3]] |
| Al | data gap | — | — | — |
| Cr | n=15 | 0 | high | [[sources/zhang2026-trace-metals-five-crops-chongqing\|1]], [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|2]], [[sources/hassan2025-cornflakes-lebanon-metals\|3]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Corn, frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 4.8 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 160 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

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

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/romero-crespo2023-ecuador-mining-crops-metals|Heavy metals in soils and crops in a mining area of Ecuador]]<span class="hmi-ref-meta">Romero-Crespo PL, Bustamante-Herrera MF, Carrera-Villacrés D, and Flores-Orozco EI · Environmental Geochemistry and Health · 2023 · [doi.org/10.1007/s10653-023-01514-x](https://doi.org/10.1007/s10653-023-01514-x)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/zhang2026-trace-metals-five-crops-chongqing\|Zhang et al. 2026]]. *Trace metal pollution and ecological effects on five crops around a typical manganese mining area in Chongqing, China*, Scientific Reports | 2026 | Peer-reviewed | tAs, Pb, Cd, Cr, and Ni in maize grain (n=15) plus four other crops near a Chongqing manganese mining and smelting area, anchoring mining-adjacent grain contamination patterns for the corn page |
| 2 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 3 | [[sources/dragicevic2025-popcorn-essential-minerals\|Dragičević et al. 2025]]. *Essential minerals and their potential bioavailability in popcorn (Zea mays L. subsp. everta (Sturtev.) Zhuk.) kernels and flakes*, Chilean Journal of Agricultural Research 85(2): 277-286 | 2025 | Peer-reviewed | RS Cu, Mn, Zn occurrence in 12 popcorn hybrids grown 2021-2022 at Maize Research Institute Zemun Polje, Belgrade, Serbia; 4 replicates each (n=12) |
| 4 | [[sources/gholami2025-heavy-metals-corn-iran-khuzestan\|Gholami et al. 2025]]. *Health risk assessment Pb, As and Cr in corn (Zea mays) of Behbahan and Dezful from Khuzestan Province, Iran*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, tAs, Cr occurrence in 50 corn (Zea mays) samples and 50 soil samples from 5 farms in Dezful and 5 farms in... (n=100) |
| 5 | [[sources/hassan2025-cornflakes-lebanon-metals\|Hassan et al. 2025]]. *Cornflakes as a source of dietary metal exposure in Lebanon: Risk assessment and regulatory compliance*, RSC Advances | 2025 | Peer-reviewed | Measured tAs, Cd, Cr, tHg, and Pb in 42 commercial cornflake products from Lebanese retail; Cr showed the highest mean concentrations; risk assessment for adult and child consumers |
| 6 | [[sources/liu2025-nanyang-crops-heavy-metals\|Liu et al. 2025]]. *Heavy metal synergistic pollution risk assessment in the soil-crop system of the Nanyang Basin*, Scientific Reports | 2025 | Peer-reviewed | CN tAs, Cd, Cr, tHg, Pb occurrence in 5778 surface soil samples, 185 wheat samples, 75 corn samples, 114 peanut samples, and 374 root soil samples... (n=6252) |
| 7 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 8 | [[sources/ibrahim2024-food-heavy-metals-nigeria\|Ibrahim et al. 2024]]. *Correlates of Food Contamination by Heavy Metals in Northwest Nigeria*, Environmental Health Insights | 2024 | Peer-reviewed | Pb, Cd, and tHg by AAS in 361 raw staple food samples including maize from Jigawa State (Nigeria), with 97.8% of households above the authors' Hg reference threshold of 0.02 mg/kg |
| 9 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 10 | [[sources/toledo2024-essential-toxic-elements-infant-cereal-brazil\|Toledo et al. 2024]]. *Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment*, International Journal of Environmental Research and Public Health 21(4):381 | 2024 | Peer-reviewed | BR Ag, Al, tAs, iAs, B, Ba, Cd, Co, Cr, Cu, Mn, Ni, Pb, Se, Sr, Zn occurrence in Eighteen Brazilian infant-cereal samples acquired in 2014-2015: 9 rice cereals, 5 multi-grain cereals containing rice, and 4 non-rice-based... (n=18) |
| 11 | [[sources/abatemi-usman2023-corn-cement-nigeria\|Abatemi-Usman et al. 2023]]. *Trace elements concentrations in soil contaminate corn in the vicinity of a cement-manufacturing plant: potential health implications*, Journal of Exposure Science & Environmental Epidemiology | 2023 | Peer-reviewed | NG Pb, Cd, tAs, Cr, Ni, Cu occurrence in Corn grain and surface soil from 5 farmlands near Obajana cement plant, Kogi State, Nigeria (n=89) |
| 12 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market - potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | Cd and Pb in gluten-free breads typically containing maize and rice flour against gluten-containing breads on the Polish market (n=50), with gluten-free at the lowest Cd mean (0.021 mg/kg) and Pb above LOQ in only one wheat sample |
| 13 | [[sources/jakkielska2023-noodles-toxic-metals\|Jakkielska et al. 2023]]. *Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment*, Acta Universitatis Cibiniensis Series E: Food Technology | 2023 | Peer-reviewed | PL Pb, Cd, tAs, iAs, tHg occurrence in Twenty commercially available 500 g noodle/pasta products collected from markets in Poland, covering wheat, durum wheat, corn-flour gluten-free,... (n=20) |
| 14 | [[sources/romero-crespo2023-ecuador-mining-crops-metals\|Romero-Crespo et al. 2023]]. *Heavy metals in soils and crops in a mining area of Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | Measured As, Cd, Cr, Cu, Ni, Pb, and Zn in food crops including corn near mining operations in Ecuador; mining-area contamination transfer into maize grain |
| 15 | [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining\|Romero-Crespo et al. 2023]]. *Trace elements in farmland soils and crops, and probabilistic health risk assessment in areas influenced by mining activity in Ecuador*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | EC tAs, Cd, Cr, Ni, Pb occurrence in 9 crop samples and 8 farmland soil samples from agricultural orchards in Ponce Enriquez gold mining area, Azuay... (n=17) |
| 16 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | PT Cd, Pb, tHg occurrence in Cereals and cereal derivatives marketed in Madeira and the Azores (Portuguese Atlantic archipelagos); multiple cereal types including rice,... |
| 17 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | CN Al, tAs, Cr, Cd, Ni, Pb occurrence in 187 samples (36 drinking water + 151 food) from villages and towns in industrial regions of northern Ningxia,... (n=187) |
| 18 | [[sources/agarwal2022-heavy-metals-vegetables-east-kolkata\|Agarwal et al. 2022]]. *Seasonal Variations in Bioaccumulation and Translocation of Toxic Heavy Metals in the Dominant Vegetables of East Kolkata Wetlands: a Case Study with Suggestive Ecorestorative Strategies*, Water, Air, & Soil Pollution | 2022 | Peer-reviewed | IN Pb, Cd, Cr, tHg occurrence in Three vegetable species from Dhapa waste dumping site, East Kolkata Wetlands, India; 2016-2017 across three seasons |
| 19 | [[sources/bai2022-arsenic-coal-burning-shaanxi\|Bai et al. 2022]]. *Investigation Into Environmental Selenium and Arsenic Levels and Arseniasis Prevalence in an Arsenic-Affected Coal-Burning Area*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN tAs occurrence in 100 arseniasis patients and 50 healthy controls in coal-burning area of Shaanxi Province, China (n=150) |
| 20 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in corn-based TDS food items (TDS Food varies; n varies by analyte) |
| 21 | [[sources/getu2022-heavy-metals-cereals-ethiopia\|Getu et al. 2022]]. *Determination of the Level of Heavy Metals in the Selected Cereals from Debre Markos Local Market, Amhara Region, Ethiopia*, International Journal of Analytical Chemistry | 2022 | Peer-reviewed | Cr, Cu, Pb, and Cd by MP-AES in maize and three other cereal types from Debre Markos (Ethiopia), with Pb and Cd above FAO/WHO permissible limits in all four cereal types linked to local fertilizer use |
| 22 | [[sources/li2022-guizhou-cd-grains\|Li et al. 2022]]. *Spatial distribution and risk assessment of fluorine and cadmium in rice, corn, and wheat grains in most karst regions of Guizhou province, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | Cadmium in 119 corn grain samples from karst regions of Guizhou (China), with Cd range 0–307 µg/kg and 13.5% of corn samples exceeding the GB 2762-2017 limit of 0.1 mg/kg |
| 23 | [[sources/liu2022-heavy-metals-rice-maize-chengdu\|Liu et al. 2022]]. *Health risk assessment of heavy metals in soils and food crops from a coexist area of heavily industrialized and intensively cropping in the Chengdu Plain, Sichuan, China*, Frontiers in Chemistry | 2022 | Peer-reviewed | tAs, Cd, tHg, and Pb in 10 maize grain samples from an industrialized Chengdu Plain (China) zone, with maize Cd mean 0.26 mg/kg and Pb mean 0.29 mg/kg both exceeding national limits and 78% of all grains failing GB 2762-2017 Cd |
| 24 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Co, Cr, Ni, and Pb by ICP-OES in roasted sweet corn purchased from South African markets, with tAs exceeding maximum allowable thresholds in all three product matrices |
| 25 | [[sources/cfia2020-toxic-metals-selected-foods-2018-19\|CFIA 2020]]. *Toxic Metals in Selected Foods – April 1, 2018 to March 31, 2019: Food chemistry – Targeted surveys – Final report*, Canadian Food Inspection Agency | 2020 | Government report | CA tAs, Cd, Pb, tHg occurrence in Retail food samples (bran products, infant formula, meal replacement beverages, protein powders, rice products) collected from 6 Canadian... (n=985) |
| 26 | [[sources/el-hassanin2020-egypt-maize-pb-cd\|El-Hassanin et al. 2020]]. *Risk assessment of human exposure to lead and cadmium in maize grains cultivated in soils irrigated either with low-quality water or freshwater*, Toxicology Reports 7:10-15 | 2020 | Peer-reviewed | EG Pb, Cd occurrence in Soil (0–30 cm), irrigation water, and maize grain composites collected in August 2017 from nine cultivated sites across... (n=27) |
| 27 | [[sources/gu2019-maize-peanut-heavy-metals-guangxi\|Gu et al. 2019]]. *Prediction and risk assessment of five heavy metals in maize and peanut: a case study of Guangxi, China*, Environmental Toxicology and Pharmacology | 2019 | Peer-reviewed | CN Cd, Cu, tHg, Pb, Zn occurrence in Sixty-five maize grain samples and thirty-five peanut grain samples paired with rhizosphere soils from Binyang County and Xingbin... (n=100) |
| 28 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in 25 Beijing foodstuffs including corn within the cereal group (Cr 128 ppb, Cd 20 ppb DW), with cereals and vegetables jointly contributing 91.5% of total dietary Cd and 67.1% of total Pb |
| 29 | [[sources/abebe2017-popcorn-cornflake-metals-ethiopia\|Abebe et al. 2017]]. *Assessment of essential and non-essential metals in popcorn and cornflake commercially available in Ethiopia*, Chemistry International 3(3):268-276 | 2017 | Peer-reviewed | Pb and Cr by F-AAS and GF-AAS in oil-popped popcorn (Pb 0.94 mg/kg) and imported cornflakes (Pb 0.36 mg/kg) from Addis Ababa, both substantially above the EU 2023/915 cereals-as-placed limit of 0.020 mg/kg |
| 30 | [[sources/khalil2017-snacks-peshawar-pakistan-heavy-metals\|Khalil et al. 2017]]. *Heavy Metals Toxicity: Estimation of Heavy Metals in Branded and Local Snacks Available in the Markets of Peshawar, Pakistan*, Professional Medical Journal | 2017 | Peer-reviewed | Pb, Cd, and total Cr by AAS in branded and non-branded corn-based snacks from Peshawar (Pakistan, n=96), with total Cr exceeding permissible limits in all samples and branded products at mean 2.21 mg/kg |
| 31 | [[sources/ataee2016-iran-cereals-pb-cd\|Ataee et al. 2016]]. *Application of microwave-assisted dispersive liquid–liquid microextraction and graphite furnace atomic absorption spectrometry for ultra-trace determination of lead and cadmium in cereals and agricultural products*, International Journal of Environmental Analytical Chemistry 96(3):271-283 | 2016 | Peer-reviewed | IR Pb, Cd occurrence in 21 cereal composites (7 grain types — rice, wheat, barley, peas, beans, corn, lentil — × 3 local... (n=21) |
| 32 | [[sources/dufault2015-blood-mercury-glucose-nhanes\|Dufault et al. 2015]]. *Blood inorganic mercury is directly associated with glucose levels in the human population and may be linked to processed food intake*, Integrative Molecular Medicine | 2015 | Peer-reviewed | NHANES (n=16,232) epidemiological evidence linking blood inorganic Hg to fasting glucose (p<0.001), implicating high-fructose corn syrup manufactured with mercury-cell chlor-alkali processes as a Hg dietary-exposure pathway via corn derivatives |
| 33 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 34 | [[sources/pirsaheb2015-iran-kermanshah-cereals-metals\|Pirsaheb et al. 2015]]. *Essential and toxic heavy metals in cereals and agricultural products marketed in Kermanshah, Iran, and human health risk assessment*, Food Additives & Contaminants: Part B, Surveillance | 2015 | Peer-reviewed | IR Pb, Cd, Cr, Ni, Zn, Cu occurrence in 150 packed cereal samples representing 7 commodity types (rice, wheat, corn, peas, lentil, bean, split peas) collected from... (n=150) |
| 35 | [[sources/solidum2013-metro-manila-junk-food-metals\|Solidum et al. 2013]]. *Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines*, Advanced Materials Research | 2013 | Peer-reviewed | PH Pb, Cd, Cr occurrence in Thirty-six junk-food samples randomly selected from sari-sari stores in Metro Manila, Philippines, in June 2012. (n=36) |
| 36 | [[sources/mfds2012-food-code-heavy-metals\|Korea Food and Drug 2012]]. *Article 2. Common Standards and Specifications for General Foods*, Korean Food Code | 2012 | Government report | KR Pb, Cd, tHg, MeHg concentrations |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 12 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
