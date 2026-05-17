---
title: "Tomato"
type: ingredient
commodity: tomato
label: "Tomato"
aliases: [Tomato, raw, tomato, tomato-products]
category: vegetable-fruit
tds_food:
  number: 117
  description: "Tomato, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0.6, 6.7]
    p95_ppb: 7.2
    confidence: medium
    n_studies: 9
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
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 7
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
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [50, 400]
    p95_ppb: 600
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
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
updated: 2026-05-16
sources: 12
---

# Tomato

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 117, "Tomato, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Tomato is a botanical fruit grown close to the soil surface, and its metal burden is determined primarily by the chemical composition of the growing medium. Lead and cadmium enter tomato tissue through root uptake from contaminated soils; both metals are taken up passively along with nutrients, with Cd uptake facilitated by the same membrane transporters that move zinc and calcium into root cells. Tomatoes are generally considered a low-to-moderate accumulator for both Pb and Cd relative to leafy vegetables or root crops, because the fruit forms a physical separation from the root system and metals must be transported through multiple plant compartments to reach the edible portion. However, tomatoes are a dietary staple consumed in large volumes by diverse populations, meaning that even low per-gram concentrations contribute meaningfully to aggregate dietary exposure across the population. Soil organic matter, pH, and proximity to industrial or road-traffic Pb sources are the primary drivers of field-level variance.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=11 | 0 | high | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| Cd | n=9 | 0.6–6.7 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|2]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=3 | 0 | medium | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|3]] |
| Ni | n=7 | 0 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/salem2024-tomato-remediated-soil-egypt\|3]] |
| Al | data gap | — | — | — |
| Cr | n=7 | 0 | medium | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|1]], [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|2]], [[sources/samma2024-bangladesh-vegetable-metals\|3]] |
| Sn | n=3 | 50–400 | medium | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/kangre2024-canned-tomato-pb-sn-ghana\|2]], [[sources/muniz2018-tomato-sauce-packaging-metals\|3]] |
| U | n=2 | 0 | high | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Tomato, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0.6 | 3.3 | 6.68 | 7.22 | 7.6 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Processing effects

Fresh tomato transitions into several processed forms that concentrate or dilute metals in different proportions. Dicing, crushing, and cooking in water do not significantly change metal concentrations on a wet-weight basis, but evaporation during sauce or paste production concentrates all solutes proportionally. Tomato paste, which undergoes substantial water removal, will carry higher ppb values for any metal present in the raw fruit simply because the same mass of metal is distributed across less water. Canning introduces a separate concern: the heat sterilisation step required for shelf-stable canned tomatoes in tinplate cans can drive tin (Sn) migration from the can lining into the acidic tomato matrix; this pathway is documented for canned tomato products more broadly and is discussed on the [[ingredients/tomato-soup]] page. Lacquer-lined or BPA-free can coatings substantially reduce Sn migration.

## Ingredient-derivative risk

The primary derivatives of tomato in food manufacturing are tomato paste (concentrated), tomato puree, crushed tomatoes, tomato sauce, ketchup, tomato juice, sun-dried tomatoes, and tomato powder. Because metals do not volatilize during cooking, any derivative that reduces water content relative to fresh tomato will show proportionally elevated concentrations on a wet-weight basis. Sun-dried tomatoes and tomato powder, which remove nearly all free water, would be expected to carry the highest per-gram concentrations of any metal present in the raw fruit. Tomato soup and tomato-based sauces occupy an intermediate position. Ketchup, which is typically made from concentrated paste diluted with vinegar and other ingredients, presents a blended metal profile. The [[ingredients/tomato-soup]] page carries occurrence data specific to the canned condensed soup form.

## Mitigation options

### Sourcing levers

Tomatoes grown in soils with low background Pb and Cd concentrations, verified by supplier soil testing, represent the primary sourcing lever. Industrial or peri-urban cultivation sites near smelters, highways, or legacy industrial land carry higher Pb risk. Specification of growing-region origin and soil metal testing at supplier qualification is the upstream control.

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces Cd and Pb bioavailability through adsorption to soil particles. Liming contaminated soils is an established agronomic practice for reducing Cd uptake across vegetable crops. Organic matter additions similarly reduce metal bioavailability. These interventions are most relevant where supplier soils are moderately elevated rather than severely contaminated.

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Because tomato is a high-volume dietary staple, lot-level testing of raw tomato paste or puree used in high-volume products is warranted for Pb and Cd. Third-party ICP-MS testing of finished paste concentrates provides the most actionable signal for downstream product manufacturers.

### Packaging and storage levers

For canned tomato products, specifying lacquer-lined or polymer-coated cans eliminates the Sn migration pathway from tinplate. This is addressed in more detail on [[ingredients/tomato-soup]].

## Regulatory limits that apply

The European Union sets maximum levels for Pb and Cd in fresh tomatoes under [[regulations/eu2023-contaminants-maximum-levels]]: Pb at 0.10 mg/kg (100 ppb) and Cd at 0.050 mg/kg (50 ppb) on a fresh-weight basis. These limits apply to tomato as a fresh fruit or vegetable placed on the EU market. Processed tomato products such as paste or sauce are governed by separate matrix-specific provisions in EU contaminant regulations. No FDA action level specific to raw tomato is currently in force; [[regulations/fda-closer-to-zero]] guidance addresses Pb in processed baby foods rather than raw commodities. [[regulations/codex-cadmium-mls]] provides the international Codex Cd maximum for vegetables.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements\|Rodríguez-Rodríguez et al. 2026]]. *Trace Element Content in Tomato Fruit Grown with Sargassum-Based Biofertilizer*, Agronomy | 2026 | Peer-reviewed | Measured tAs, Cd, Pb, Ni, and Cr in greenhouse tomatoes grown with Sargassum biofertilizer vs controls (Spain); all five metals below LOQ in tomato fruit from both treatment groups |
| 2 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Sn occurrence in 49 samples of canned tomato paste, canned olives, and pickled cucumbers from the 5 most popular brands, purchased... (n=49) |
| 3 | [[sources/kangre2024-canned-tomato-pb-sn-ghana\|Kangre 2024]]. *Heavy metal migration, exposure, and health risk through canned tomato mix under different marketing display models*, MPhil Thesis, University of Education Winneba, Ghana | 2024 | Thesis | GH Pb, Sn occurrence in 32 canned Tasty Tom tomato mix samples from Effutu Municipality (Winneba), Ghana: 16 from sunlight-exposed shops, 16 from... (n=32) |
| 4 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 5 | [[sources/salem2024-tomato-remediated-soil-egypt\|Salem et al. 2024]]. *Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | EG Cd, Ni, Cu, Zn, Pb occurrence in Tomato fruits (Solanum lycopersicum var. cerasiforme) grown in contaminated soil with different bioremediation treatments; greenhouse and field experiments;... |
| 6 | [[sources/samma2024-bangladesh-vegetable-metals\|Samma et al. 2024]]. *Evaluating Soil-Vegetable Contamination with Heavy Metals in Bogura, Bangladesh: A Risk Assessment Approach*, Environmental Health Insights | 2024 | Peer-reviewed | BD Pb, Cr, Cu occurrence in Composite vegetable and soil samples from 5 vegetable species across 6 upazilas in Bogura district, Bangladesh (northern industrial... (n=30) |
| 7 | [[sources/ahmed2023-trace-metals-tomato-wastewater\|Ahmed et al. 2023]]. *Trace metal concentrations in tomato fruits irrigated with industrial wastewater in Cairo and health risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EG Pb, Cd, Cr, Ni, Cu, Fe, Mn, Zn, Co occurrence in Tomato fruits from wastewater-irrigated farms in Cairo, Egypt |
| 8 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in tomato (TDS food item; n varies by analyte) |
| 9 | [[sources/vaishali2020-tomato-ketchup-delhi-ncr-pb-cd\|Vaishali et al. 2020]]. *A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR*, Journal of Advanced Research in Medical Science & Technology | 2020 | Peer-reviewed | IN Pb, Cd occurrence in Tomato ketchup from street vendors in Delhi, Noida, Gurugram, and Faridabad (3 samples per locale) (n=12) |
| 10 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in tomato from three markets in Tamale, Ghana (n=75 total samples across 5 vegetables); provides West African occurrence context |
| 11 | [[sources/muniz2018-tomato-sauce-packaging-metals\|Muniz et al. 2018]]. *Evaluation of metals in tomato sauces stored in different types of packaging*, Food Science and Technology | 2018 | Peer-reviewed | BR tAs, Cd, Pb, Cr, Ni, Sb, Sn occurrence in 20 retail tomato sauce samples in 4 packaging types (plastic, metallic/canned, cellulosic, glass), 2 brands, Rio de Janeiro... (n=20) |
| 12 | [[sources/li2017-mercury-coal-power-plants-vegetables-grains\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Vegetables (lettuce, amaranth, water spinach, tomato, eggplant, pepper, cucumber, cowpea), grains (rice, maize), and soils sampled from 6... (n=120) |
<!-- END: hmi-source-legend -->

