---
title: Fruit
type: ingredient
commodity: fruit
aliases: [apple, pear, peach, banana, berries, "fruit puree", compote, dried-fruit, "dried fruits", cherries, kiwi, pineapple, persimmon, papaya, jackfruit, lemon, muskmelon, melons, pineapple-peel]
category: fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [5, 50], p95_ppb: 150, confidence: high, n_studies: 21, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [5, 50], p95_ppb: 130, confidence: high, n_studies: 21, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [1, 10], p95_ppb: 15, confidence: medium, n_studies: 8, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [1, 10], p95_ppb: 42, confidence: high, n_studies: 12, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [30, 200], p95_ppb: 500, confidence: medium, n_studies: 6, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [100, 4000], p95_ppb: 9100, confidence: medium, n_studies: 8, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [5, 30], p95_ppb: 50, confidence: high, n_studies: 18, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [20, 100], p95_ppb: 200, confidence: medium, n_studies: 9, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [10, 100], p95_ppb: 500, confidence: medium, n_studies: 5, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, variety, processing, packaging]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-purees]]", "[[products/fruit-juice-not-canned]]"]
audience: [regulator, educator, consumer, app]
sources: 31
updated: 2026-05-16
---

# Fruit

Chekri et al. 2019 reports a French infant fruit-puree category and identifies fruit purees as the highest-tin infant-food category in that study. The source gives category-level values, not fruit-by-fruit distributions. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=21 | 5–50 | high | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|3]] |
| Cd | n=21 | 5–50 | high | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|3]] |
| iAs | n=8 | 1–10 | medium | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|1]], [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|2]], [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|3]] |
| tAs | n=18 | 5–30 | high | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|2]], [[sources/pulze2025-volcanic-eruptions-food-chain-metals\|3]] |
| tHg | n=12 | 1–10 | high | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|1]], [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|2]], [[sources/meli2024-chemical-characterization-baby-food-italy\|3]] |
| Ni | n=6 | 30–200 | medium | [[sources/pulze2025-volcanic-eruptions-food-chain-metals\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Al | n=8 | 100–4000 | medium | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/wang2023-toxic-metals-daily-diet-ningxia\|3]] |
| Cr | n=9 | 20–100 | medium | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|1]], [[sources/pulze2025-volcanic-eruptions-food-chain-metals\|2]], [[sources/mekonnen2024-ethiopia-fruit-metals\|3]] |
| Sn | n=5 | 10–100 | medium | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending fruit-specific occurrence extraction. Current product evidence is filed under [[products/fruit-purees]] and [[products/fruit-juice-not-canned]]._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review of Pb, Cd, tAs, and tHg in processed baby foods (75 studies, 580 products) including fruit purees; provides category-level evidence map for processed fruit |
| 2 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero lead action levels for processed baby foods; sets 10 ppb Pb for fruit-based products (purees, mixtures) intended for infants and young children |
| 3 | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|Hadi et al. 2025]]. *Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq*, International Journal of Analytical Chemistry | 2025 | Peer-reviewed | Pb, Cd, and Cr in 15 dried-fruit commodity types (Iranian-origin) sold in Iraqi markets; multiple samples exceed FAO/WHO MLs for Cd and Cr |
| 4 | [[sources/pulze2025-volcanic-eruptions-food-chain-metals\|Pulze et al. 2025]]. *Impact of volcanic eruptions on heavy metal contamination in the food chain*, Italian Journal of Food Safety | 2025 | Peer-reviewed | Review of Ni, Cd, V, Pb, As, and Cr enrichment in volcanic agricultural soils (Mount Etna) and transfer into fruit crops, with EU 2023/915 compliance implications for Etna-area producers |
| 5 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | tAs, Cd, Pb, and Sn in 163 pooled Portuguese TDS samples including fruit categories; all values below legal limits, fills EFSA monitoring data gap |
| 6 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | Total arsenic across 4,900 Chongqing food samples (2018–2023) including fruit, with rice and rice products contributing 69.97–74.37% of dietary arsenic and fruit among the secondary contributing categories |
| 7 | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|Laoye et al. 2024]]. *Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review*, F1000Research | 2024 | Peer-reviewed | NG Pb, Cd, tHg, iAs, tAs, Al occurrence in 64 studies (screened from 10,212) reporting heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria (Lagos,... (n=64) |
| 8 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | Pb, Cd, Cr, and Cu in mango, banana, and orange from Bahir Dar (Ethiopia, n=120), with mango Pb (0.576 mg/kg DW) and Cd (1.771 mg/kg DW) exceeding FAO/WHO limits and yielding HI of 3.69 |
| 10 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-element (Al, tAs, Cd, tHg, Ni, Pb, Sn) in 25 European baby foods including a fruit homogenate; apple sample had highest Al estimated daily intake |
| 11 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 40 commercial ready-to-eat fruit purees from Spanish market (6–12 month infants); ICP-MS, wet weight |
| 12 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM Pb biokinetic modeling treating fruit purees as one of the consumer baby-food intake categories, with combined food and water contributing under 15% of infant BLL variance vs soil/dust dominance |
| 13 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Al, tAs, Cr, Cd, Ni, and Pb across 151 food samples including fruit within an industrial-Ningxia dietary survey, with total noncarcinogenic HI of 5.61 and 87% of residents exposed to unacceptable carcinogenic risk |
| 14 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | CA/US/global iAs, tAs occurrence in Systematic review of biomonitoring studies of speciated iAs in pregnancy; covers cohort studies from Bangladesh, Spain, China, Mexico,... |
| 15 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | Narrative review of tAs, iAs, Pb, Cd, and tHg in fruit-based infant and toddler foods including purees and juices, synthesising Congressional Subcommittee findings and FDA testing into US-policy evaluation |
| 16 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | Multi-element (Cd, Pb, iAs, tAs, Ni, Al, and others) concentrations in US retail fruit as consumed; primary US population-level dietary toxic-element exposure dataset |
| 17 | [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|Mawari et al. 2022]]. *Heavy metal accumulation in fruits and vegetables in Maharashtra, India*, Environmental Health Insights | 2022 | Peer-reviewed | Pb, Cd, tAs, and tHg in 24 fruit and vegetable commodity types from Maharashtra (India) by ICP-MS, with mean Pb 0.17 mg/kg fw across all commodities and anthropogenic soil contamination identified |
| 18 | [[sources/sarker2022-bangladesh-food-webs-review\|Sarker et al. 2022]]. *Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh*, Environmental Science and Pollution Research | 2022 | Review | *[awaiting synthesis]* |
| 19 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | tAs, Cd, tHg, and Pb in 397 Polish ready-to-eat baby foods including fruit mousses; ICP-MS and AAS, wet weight |
| 20 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | Pb and Cd by ICP-OES in 8 citrus species' whole fruit, peel, and pulp from Polish retail (Turkish and Israeli origin), demonstrating peel-greater-than-pulp distribution and whole-fruit Pb 1.00–2.72 µg/100g fw |
| 21 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Cadmium and lead contents in fresh and processed fruit and vegetable products and the resulting dietary risk assessment*, Scientific Reports | 2021 | Peer-reviewed | Cd and Pb in 370 fresh, frozen, dried, and processed fruit samples from Polish retail; directly compares processing-state effects on metal concentration |
| 22 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Multi-element occurrence in 291 French infant foods including fruit purees; identifies fruit purees as the highest-Sn infant-food category in the study |
| 23 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF testing of 168 commercial baby foods (61 brands, 13 food types) across US metros for tAs, iAs, Pb, Cd, and tHg including fruit purees and juices, with 95% of foods carrying at least one detectable metal |
| 24 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in 25 Beijing foodstuff types including the fruit group, with cumulative TTHQ across food groups reaching 2.30 |
| 25 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports | 2018 | Peer-reviewed | Longitudinal infant biomarker study linking fruit puree introduction to urinary iAs and tAs changes during weaning; US New Hampshire birth cohort |
| 26 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | Compiled review of Al concentrations across food matrices including fruit, with fruits accounting for 18.2% (adults) and 29.4% (children) of weekly Al intake against the EFSA TWI of 1 mg/kg b.w./week |
| 27 | [[sources/zhang2017-red-raspberry-nutrient-profile\|Zhang et al. 2017]]. *Characterization of the nutrient profile of processed red raspberries for use in nutrition labeling and promoting healthy food choices*, Nutrition and Healthy Aging | 2017 | Peer-reviewed | Nutrient profile of IQF, puree, and juice-concentrate red raspberry products; no heavy metal data — provides fruit-processing category context only |
| 28 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish FSAI Total Diet Study reporting Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn across 141 food samples including fruit as-consumed, with Cd at the 97.5th percentile marginally exceeding health-based guidance values |
| 29 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | *[awaiting synthesis]* |
| 30 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | California Prop 65 hazard identification for Cd reproductive/developmental toxicity; lists fruit among dietary Cd exposure pathways |
| 31 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative Codex standard setting international maximum levels for Cd, Pb, and other contaminants in fruit and fruit products |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Singular "fruit" is the bridge node for infant-and-toddler-context fruit references; for the broader fruit category in adult diet, see [[ingredients/fruits]]. Both inherit the same plant-biological pathway: most plants sequester less Cd and Pb in their reproductive tissue (the fruit) than in leaves or roots, because metals would interfere with seed germination and offspring viability. Fruit metal loads are therefore generally low across the panel, with exceptions for apple-pesticide-history products and for surface-deposition contamination.

In the infant-and-toddler context, "fruit" usually means fruit purees, fruit juices, and fruit-containing baby foods. The infant exposure pathway concentrates per-body-weight intake even when source-fruit concentrations are low, making fruit a relevant Cat 1 ingredient at infant scale despite being a low-priority commodity in adult-diet exposure calculations.

The HMTc panel concerns for fruit in infant context are Pb (orchard-soil and atmospheric deposition pathways) and historical iAs in apple juice; in adult context the per-serving exposure is low across the panel.

## Processing effects

Fruit processing for puree, juice, dried, and frozen formats has the same effects as discussed at [[ingredients/fruits]]: peeling and washing remove surface contamination; juicing concentrates per-mass solids; drying concentrates per-mass dry-basis. For infant-and-toddler-specific products, [[products/fruit-purees]] addresses the regulatory and certification context.

Cooking and pureeing for baby food do not change total per-mass metal load. Heat-treatment for shelf-stability does not affect the panel metals.

## Ingredient-derivative risk

Fruit derivatives in the infant-and-toddler context: fruit purees ([[products/fruit-purees]]), fruit-juice baby drinks ([[products/fruit-juice-not-canned]]), teething biscuits and fruit-puree pouches. Each inherits the source-fruit metal profile with processing-step adjustments.

## Mitigation options

Mitigation options for fruit in the infant context follow the broader fruits framework (see [[ingredients/fruits]]):

**Sourcing levers** ([[mitigation/supply-chain-screening]]) — single-origin sourcing, avoidance of legacy-pesticide-orchard areas.

**Agronomic levers** ([[mitigation/agronomic]]) — orchard-level soil management.

**Processing levers** ([[mitigation/processing]]) — washing, peeling, juice-yield management for the infant-targeted product line.

**Formulation levers** ([[mitigation/formulation]]) — species choice and fruit-percentage adjustment in compounded infant fruit products.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) — particularly important for infant-targeted fruit products given the lower regulatory tolerance and the higher per-body-weight infant intake. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) — pouch and jar material specifications for infant fruit purees.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets specific Pb maximum levels for infant and young-child fruit-based foods, with the infant-fruit ML lower than the general adult-fruit ML.
- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action levels for processed baby foods include fruit-puree categories at 10 ppb Pb.
- [[regulations/codex-cadmium-mls]] — Codex Cd ML framework.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant-targeted fruit products yields a more stringent per-serving screen than for adult-targeted equivalents.


