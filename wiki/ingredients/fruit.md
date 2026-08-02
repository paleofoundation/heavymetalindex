---
title: Fruit
type: ingredient
commodity: fruit
aliases: [apple, pear, peach, banana, berries, "fruit puree", compote, dried-fruit, "dried fruits", cherries, kiwi, pineapple, persimmon, papaya, jackfruit, lemon, muskmelon, melons, pineapple-peel, fruits, Fruits, "ingredients/fruits"]
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
sources: 111
wiki_doi: null
updated: 2026-05-16
---

# Fruit

Chekri et al. 2019 reports a French infant fruit-puree category and identifies fruit purees as the highest-tin infant-food category in that study. The source gives category-level values, not fruit-by-fruit distributions. [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=21 | 5–50 | high | — |
| Cd | n=21 | 5–50 | high | — |
| iAs | n=8 | 1–10 | medium | — |
| tAs | n=18 | 5–30 | high | — |
| tHg | n=12 | 1–10 | high | — |
| Ni | n=6 | 30–200 | medium | — |
| Al | n=8 | 100–4000 | medium | — |
| Cr | n=9 | 20–100 | medium | — |
| Sn | n=5 | 10–100 | medium | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

_Pending fruit-specific occurrence extraction. Current product evidence is filed under [[products/fruit-purees]] and [[products/fruit-juice-not-canned]]._

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 111 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review of Pb, Cd, tAs, and tHg in processed baby foods (75 studies, 580 products) including fruit purees; provides category-level evidence map for processed fruit |
| 3 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero lead action levels for processed baby foods; sets 10 ppb Pb for fruit-based products (purees, mixtures) intended for infants and young children |
| 4 | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|Hadi et al. 2025]]. *Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq*, International Journal of Analytical Chemistry | 2025 | Peer-reviewed | Pb, Cd, and Cr in 15 dried-fruit commodity types (Iranian-origin) sold in Iraqi markets; multiple samples exceed FAO/WHO MLs for Cd and Cr |
| 5 | [[sources/mahmood2025-dried-fruit-metals\|Mahmood et al. 2025]]. *Estimation of some heavy metal concentrations in selected dried fruit samples available in local markets and assessment of their health risks*, International Journal of Environmental Impacts | 2025 | Peer-reviewed | IQ Pb, Cr, Ni occurrence in selected dried fruit samples available in local markets (n=not reported in abstract) |
| 6 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 7 | [[sources/pulze2025-volcanic-eruptions-food-chain-metals\|Pulze et al. 2025]]. *Impact of volcanic eruptions on heavy metal contamination in the food chain*, Italian Journal of Food Safety | 2025 | Peer-reviewed | Review of Ni, Cd, V, Pb, As, and Cr enrichment in volcanic agricultural soils (Mount Etna) and transfer into fruit crops, with EU 2023/915 compliance implications for Etna-area producers |
| 8 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 9 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | tAs, Cd, Pb, and Sn in 163 pooled Portuguese TDS samples including fruit categories; all values below legal limits, fills EFSA monitoring data gap |
| 10 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | Total arsenic across 4,900 Chongqing food samples (2018–2023) including fruit, with rice and rice products contributing 69.97–74.37% of dietary arsenic and fruit among the secondary contributing categories |
| 11 | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|Laoye et al. 2024]]. *Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review*, F1000Research | 2024 | Peer-reviewed | NG Pb, Cd, tHg, iAs, tAs, Al occurrence in 64 studies (screened from 10,212) reporting heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria (Lagos,... (n=64) |
| 12 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, tAs, tHg, Cr, W concentrations |
| 13 | [[sources/mekonnen2024-ethiopia-fruit-metals\|Mekonnen et al. 2024]]. *Health Risk Assessment of Potentially Toxic Elements Contamination of Commonly Consumed Fruits in Bahir Dar Town, Northwest Ethiopia*, International Journal of Food Science | 2024 | Peer-reviewed | Pb, Cd, Cr, and Cu in mango, banana, and orange from Bahir Dar (Ethiopia, n=120), with mango Pb (0.576 mg/kg DW) and Cd (1.771 mg/kg DW) exceeding FAO/WHO limits and yielding HI of 3.69 |
| 14 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Multi-element (Al, tAs, Cd, tHg, Ni, Pb, Sn) in 25 European baby foods including a fruit homogenate; apple sample had highest Al estimated daily intake |
| 15 | [[sources/apilux2023-rayong-tropical-fruits-metals\|Apilux et al. 2023]]. *Determination of Heavy Metal Residues in Tropical Fruits near Industrial Estates in Rayong Province, Thailand: A Risk Assessment Study*, Environment and Natural Resources Journal | 2023 | Peer-reviewed | TH tAs, Cd, Cu, tHg, Pb, Zn occurrence in Tropical fruits from three districts and markets in Rayong Province, Thailand |
| 16 | [[sources/fagbemi2023-akure-street-food-lead\|Fagbemi et al. 2023]]. *Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria*, IPS Journal of Public Health 3(2):73-78 | 2023 | Peer-reviewed | NG Pb, Cu, Fe, Zn occurrence in Seven street-hawked food types purchased from busy road intersections in Akure Metropolis, Nigeria (n=7) |
| 17 | [[sources/fagbemi2023-akure-street-foods-lead\|Fagbemi et al. 2023]]. *Microbial Density and Diversity and Lead Loads in Selected Street-Hawked Foods in Akure Metropolis, Nigeria*, IPS Journal of Public Health | 2023 | Peer-reviewed | NG Pb, Cu, Fe, Zn occurrence in Seven street-hawked food types purchased from three busy road intersections and Oba market in Akure, Ondo State, Nigeria. (n=7) |
| 18 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | tAs, tHg, Pb, Cd, Ni, Al, Cr, and U in 40 commercial ready-to-eat fruit purees from Spanish market (6–12 month infants); ICP-MS, wet weight |
| 19 | [[sources/liu2023-yuyao-soil-crop-metals\|Liu et al. 2023]]. *Enrichment Characteristics and Health Risk Assessment of Heavy Metals in Soil-Crop Systems*, KSCE Journal of Civil Engineering | 2023 | Peer-reviewed | CN tAs, Cr, Cu, Pb, Cd, tHg occurrence in Paired crop and soil samples from Yuyao City, Zhejiang Province: 88 rice/root-soil pairs, 68 bayberry/topsoil pairs, and 60... (n=216) |
| 20 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | IEUBK/ICRP/AALM Pb biokinetic modeling treating fruit purees as one of the consumer baby-food intake categories, with combined food and water contributing under 15% of infant BLL variance vs soil/dust dominance |
| 21 | [[sources/sadhya2023-india-food-heavy-metals-regulation\|Sadhya et al. 2023]]. *Regulation in India of Heavy Metals in Food Items: A Critical Analysis*, Environmental Analysis & Ecology Studies | 2023 | Review | IN Pb, Cu, tAs, Sn, Cd, tHg, MeHg, Cr, Ni, Se, Sb, Ba, Co, Fe, Li, Mn, Zn occurrence in Legal review of the Indian regulatory framework governing heavy metals in food and food packaging. No primary measurements.... |
| 22 | [[sources/uchenna2023-ihiala-fruits-heavy-metals\|Uchenna et al. 2023]]. *Assessment of Heavy Metals in Edible Fruits Sold in Selected Markets in Ihiala Local Government Area, Anambra State*, Journal of Sustainability and Environmental Management | 2023 | Peer-reviewed | NG Zn, Ni, Cu, Pb, Cr, tAs, Fe occurrence in Edible fruits from selected markets in Ihiala Local Government Area, Anambra State, Nigeria |
| 23 | [[sources/wang2023-toxic-metals-daily-diet-ningxia\|Wang et al. 2023]]. *Deterministic and Probabilistic Health Risk Assessment of Toxic Metals in the Daily Diets of Residents in Industrial Regions of Northern Ningxia, China*, Archives of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Al, tAs, Cr, Cd, Ni, and Pb across 151 food samples including fruit within an industrial-Ningxia dietary survey, with total noncarcinogenic HI of 5.61 and 87% of residents exposed to unacceptable carcinogenic risk |
| 24 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | CA/US/global iAs, tAs occurrence in Systematic review of biomonitoring studies of speciated iAs in pregnancy; covers cohort studies from Bangladesh, Spain, China, Mexico,... |
| 25 | [[sources/bair2022-infant-toddler-food-heavy-metals-policy\|Bair 2022]]. *A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy*, Frontiers in Nutrition | 2022 | Peer-reviewed | Narrative review of tAs, iAs, Pb, Cd, and tHg in fruit-based infant and toddler foods including purees and juices, synthesising Congressional Subcommittee findings and FDA testing into US-policy evaluation |
| 26 | [[sources/mawari2022-heavy-metals-fruits-vegetables-india\|Mawari et al. 2022]]. *Heavy Metal Accumulation in Fruits and Vegetables and Human Health Risk Assessment: Findings From Maharashtra, India*, Environmental Health Insights | 2022 | Peer-reviewed | Pb, Cd, tAs, and tHg in 24 fruit and vegetable commodity types from Maharashtra (India) by ICP-MS, with mean Pb 0.17 mg/kg fw across all commodities and anthropogenic soil contamination identified |
| 27 | [[sources/sarker2022-bangladesh-food-webs-review\|Sarker et al. 2022]]. *Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh*, Environmental Science and Pollution Research | 2022 | Review | BD Pb, Cd, tAs, Cr, Ni, Zn, Cu, tHg occurrence in Systematic review of published literature on heavy metal contamination in foodstuffs, soil, and water in Bangladesh; first systematic... |
| 28 | [[sources/subedi2022-fruit-juices-heavy-metals\|Subedi et al. 2022]]. *Determination of heavy metals in varieties of fresh and packaged fruit juices along with powdered fruit drink mixes in Kathmandu Valley*, Journal of Balkumari College | 2022 | Peer-reviewed | NP Fe, Mn, Zn, Pb occurrence in Fresh juices, packaged juices, and powdered fruit drink mixes sold in Kathmandu Valley, Nepal |
| 29 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | tAs, Cd, tHg, and Pb in 397 Polish ready-to-eat baby foods including fruit mousses; ICP-MS and AAS, wet weight |
| 30 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | Pb and Cd by ICP-OES in 8 citrus species' whole fruit, peel, and pulp from Polish retail (Turkish and Israeli origin), demonstrating peel-greater-than-pulp distribution and whole-fruit Pb 1.00–2.72 µg/100g fw |
| 31 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 32 | [[sources/maspalma2021-nigeria-wild-fruits-heavy-metals\|Maspalma et al. 2021]]. *Studies on some heavy metal contents of Ximenia americana and Sclerocarya birrea wild fruit from North-Eastern Nigeria*, Journal of the Chemical Society of Nigeria | 2021 | Peer-reviewed | NG Cd, Pb, Cr, Ni, Fe, Mn, Co, Zn occurrence in Mature ripe Ximenia americana and Sclerocarya birrea wild fruits collected from Pella and Pella Gwaja, Adamawa State, Nigeria (n=2) |
| 33 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 34 | [[sources/abdullahi2019-fruits-vegetables-heavy-metals\|Abdullahi 2019]]. *Analysis and Evaluation of the Effect of Heavy Metals in Fruits and Vegetables*, International Journal of Trend in Scientific Research and Development | 2019 | Peer-reviewed | NG Zn, Cu, Fe, Cd, Ni, Pb occurrence in Orange, pineapple, waterleaf, and pumpkin leaf samples from a local market in Nigeria |
| 35 | [[sources/chaleshtori2019-watermelon-carrot-pb-cd\|Reza et al. 2019]]. *Assessment of Lead and Cadmium Levels in Watermelon and Carrot*, Iranian Journal of Toxicology | 2019 | Peer-reviewed | IR Pb, Cd occurrence in Watermelon and carrot samples analyzed for lead and cadmium in Iran |
| 36 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Multi-element occurrence in 291 French infant foods including fruit purees; identifies fruit purees as the highest-Sn infant-food category in the study |
| 37 | [[sources/houlihan2019-hbbf-whats-in-baby-food\|Houlihan et al. 2019]]. *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*, Healthy Babies Bright Futures | 2019 | Nonprofit | HBBF testing of 168 commercial baby foods (61 brands, 13 food types) across US metros for tAs, iAs, Pb, Cd, and tHg including fruit purees and juices, with 95% of foods carrying at least one detectable metal |
| 38 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | Pb, Cd, Cr, tAs, and tHg in 25 Beijing foodstuff types including the fruit group, with cumulative TTHQ across food groups reaching 2.30 |
| 39 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 40 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Longitudinal infant biomarker study linking fruit puree introduction to urinary iAs and tAs changes during weaning; US New Hampshire birth cohort |
| 41 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | Compiled review of Al concentrations across food matrices including fruit, with fruits accounting for 18.2% (adults) and 29.4% (children) of weekly Al intake against the EFSA TWI of 1 mg/kg b.w./week |
| 42 | [[sources/zhang2017-red-raspberry-nutrient-profile\|Zhang et al. 2017]]. *Characterization of the nutrient profile of processed red raspberries for use in nutrition labeling and promoting healthy food choices*, Nutrition and Healthy Aging | 2017 | Peer-reviewed | Nutrient profile of IQF, puree, and juice-concentrate red raspberry products; no heavy metal data — provides fruit-processing category context only |
| 43 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish FSAI Total Diet Study reporting Al, tAs, iAs, Cd, Cr, Pb, tHg, and Sn across 141 food samples including fruit as-consumed, with Cd at the 97.5th percentile marginally exceeding health-based guidance values |
| 44 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
| 45 | [[sources/islam2015-bangladesh-foods-heavy-metals\|Islam et al. 2015]]. *The concentration, source and potential human health risk of heavy metals in the commonly consumed foods in Bangladesh*, Ecotoxicology and Environmental Safety | 2015 | Peer-reviewed | BD Cr, Ni, Cu, tAs, Cd, Pb occurrence in Commonly consumed meat, egg, fish, milk, vegetable, cereal, and fruit foods collected from agriculture fields, farms, river, and... |
| 46 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 47 | [[sources/fsa2014-infant-foods-metals\|FSA 2014]]. *Survey of metals and other elements in commercial infant foods, infant formula and non-infant specific foods*, Food Standards Agency report | 2014 | Government report | GB Al, Sb, tAs, iAs, Cd, Cr, Cu, Pb, Mn, tHg, Ni, Se, Sn, Zn occurrence in Forty-seven infant formula samples, 200 commercial infant foods, and 50 composite 'other foods' samples purchased from UK retail... (n=297) |
| 48 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
| 49 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 50 | [[sources/cot2008-uk-tds-metals\|Committee on Toxicity of 2008]]. *COT Statement on the 2006 UK Total Diet Study of Metals and Other Elements*, Committee on Toxicity statement | 2008 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Se, Sn, Tl, Zn occurrence in 2006 UK Total Diet Study: 119 food categories combined into 20 prepared-as-consumed food groups for metals and other... (n=20) |
| 51 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 52 | [[sources/efsa2005-tin-food-upper-intake\|EFSA 2005]]. *Opinion of the Scientific Panel on Dietetic Products, Nutrition and Allergies on a request from the Commission related to the tolerable upper intake level of tin*, EFSA Journal | 2005 | Regulatory opinion | EU/GB/FR Sn occurrence in EFSA opinion summarising dietary tin occurrence/intake literature, including UK 1997 Total Diet Study food-group means and French lacquered/unlacquered... |
| 53 | [[sources/oehha-cadmium-prop65-evidence-1996\|California Office of Environmental 1996]]. *Evidence on the Developmental and Reproductive Toxicity of Cadmium*, California Environmental Protection Agency, Office of Environmental Health Hazard Assessment | 1996 | Government report | California Prop 65 hazard identification for Cd reproductive/developmental toxicity; lists fruit among dietary Cd exposure pathways |
| 54 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative Codex standard setting international maximum levels for Cd, Pb, and other contaminants in fruit and fruit products |
| 55 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 56 | [[sources/iarc1990-chromium-nickel-welding\|IARC 1990]]. *Chromium, Nickel and Welding*, IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Volume 49 | 1990 | Government report | INTL Cr, Cr-VI, Ni occurrence in International scientific working group; review of global occupational, environmental, dietary, and experimental data for Cr, Ni, and welding... |
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

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
