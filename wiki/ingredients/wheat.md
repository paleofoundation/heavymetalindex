---
title: Wheat
type: ingredient
commodity: wheat
aliases: [wheat grain, wheat flour, whole wheat flour, wheat bran, wheat germ, semolina, durum wheat, hard red wheat, soft white wheat, wheat protein, vital wheat gluten]
category: grain
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 650
    confidence: high
    n_studies: 28
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 50]
    p95_ppb: 216
    confidence: high
    n_studies: 39
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 12]
    p95_ppb: 12
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 30
    confidence: high
    n_studies: 14
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [100, 800]
    p95_ppb: null
    confidence: high
    n_studies: 16
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [2700, 6000]
    p95_ppb: 6000
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 1000]
    p95_ppb: 1000
    confidence: high
    n_studies: 18
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 20
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [3, 20]
    p95_ppb: 50
    confidence: high
    n_studies: 19
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-13
drivers: [soil-uptake, cultivar, zinc-status, phosphate-fertilization, geography]
lower_risk_variants: ["[[ingredients/refined-white-flour]]"]
higher_risk_variants: ["[[ingredients/wheat-bran]]", "[[ingredients/wheat-germ]]", "[[ingredients/whole-wheat-flour]]", "[[ingredients/wheat-protein-concentrate]]"]
used_in_products: ["[[products/bread]]", "[[products/pasta]]", "[[products/cereals]]", "[[products/baked-goods]]", "[[products/baby-cereal]]", "[[products/wheat-based-snacks]]", "[[products/crackers]]", "[[products/couscous]]", "[[products/bulgur]]"]
audience: [regulator, educator, consumer, app]
sources: 50
updated: 2026-05-16
---

# Wheat

Wheat is identified across [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] and [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as one of the top population-level dietary cadmium contributors, with the bran and germ fractions carrying higher cadmium than refined endosperm.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=28 | 10–100 | high | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|1]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|2]], [[sources/asaditouranlou2025-bread-iran-montecarlo\|3]] |
| Cd | n=39 | 10–50 | high | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|1]], [[sources/ozkutlu2026-wheat-cd-zinc-mitigation\|2]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|3]] |
| iAs | n=8 | 0–12 | medium | [[sources/mititelu2025-heavy-metal-food-contamination-review\|1]], [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|2]], [[sources/hao2024-amf-arsenic-plants-meta-analysis\|3]] |
| tAs | n=19 | 3–20 | high | [[sources/asaditouranlou2025-bread-wheat-mashhad\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/dai2024-chongqing-dietary-arsenic-exposure\|3]] |
| tHg | n=14 | 0–5 | high | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|1]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|2]], [[sources/asaditouranlou2025-bread-iran-montecarlo\|3]] |
| Ni | n=16 | 100–800 | high | [[sources/asaditouranlou2025-bread-wheat-mashhad\|1]], [[sources/asaditouranlou2025-bread-iran-montecarlo\|2]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|3]] |
| Al | n=8 | 2700–6000 | medium | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|1]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|2]], [[sources/asaditouranlou2025-bread-iran-montecarlo\|3]] |
| Cr | n=18 | 100–1000 | high | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|1]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|2]], [[sources/asaditouranlou2025-bread-iran-montecarlo\|3]] |
| Sn | n=5 | 0–20 | medium | [[sources/mititelu2025-heavy-metal-food-contamination-review\|1]], [[sources/vasilachi2023-heavy-metals-cereal-crops\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Wheat takes up cadmium from soil through its root system, with uptake efficiency influenced by soil cadmium concentration, zinc status, soil pH, and cultivar. Durum wheat has been documented as a more efficient cadmium accumulator than common bread wheats, producing elevated cadmium in pasta-grade wheat products. Within the wheat kernel, cadmium partitions preferentially to the bran and germ rather than the endosperm, so refined white flour carries the lowest cadmium among common wheat derivatives and whole-wheat products carry the highest.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for wheat grain and flour of 0.030 mg/kg and for wheat bran and germ of 0.065 mg/kg, reflecting the approximately two-fold bran-over-endosperm concentration factor. Durum wheat, rice bran, and whole-wheat products in cadmium-elevated growing regions carry values above the category mean._

## Processing effects

_Pending. Milling that removes bran and germ lowers the cadmium content of the resulting flour relative to whole grain; fermentation and baking do not remove cadmium. Wheat-protein isolation (vital wheat gluten) concentrates cadmium from the source grain proportionally with protein enrichment._

## Ingredient-derivative risk

Derivative wheat products vary substantially in cadmium content by the fraction of the kernel they represent. Refined white flour, semolina, and pasta made from refined wheat are at or near the endosperm-level mean; whole wheat flour, bran-enriched cereals, wheat bran supplements, and wheat germ products are above the whole-grain mean by the bran-concentration factor. Wheat protein products (vital wheat gluten, seitan) concentrate cadmium from the source grain; per-product characterization is necessary.

## Mitigation options

_Pending. Cultivar selection (non-accumulator lines), zinc amendment of soils (zinc-cadmium antagonism reduces plant cadmium uptake), soil pH management, and milling practices that remove bran and germ are the primary mitigation levers._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: the FDA Closer to Zero 20 ppb Pb action level for dry infant cereals applies to wheat-based infant cereal ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]; see [[regulations/fda-ctz-Pb-cereal-20ppb]]).

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for cereal grains (pending ingest of CXS 193-1995). The CCCF17 2024 discussion on quinoa (held separate from cereals at 0.15 mg/kg) recorded that one Member delegation cited cereals as a "serious contributor to exposure to cadmium" in their region, consistent with the wiki's cross-source synthesis.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for cereals: 0.10 mg/kg (100 ug/kg) for cereals except listed rows; 0.050 mg/kg (50 ug/kg) for barley and rye; 0.15 mg/kg (150 ug/kg) for rice, quinoa, wheat bran, and wheat gluten; 0.18 mg/kg (180 ug/kg) for durum wheat; 0.20 mg/kg (200 ug/kg) for wheat germ.
- [[regulations/fda-ctz-Pb-cereal-20ppb]] — FDA CTZ 20 ppb lead action level for dry infant cereals is the adjacent Pb rule; any future Cd analogue under the CTZ program would apply similarly to wheat-based infant cereal.

## Nickel in wheat

[[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports wheat flour mean Ni at 0.13 µg/g (range 0.03 to 0.3 µg/g, n=32 samples) and whole wheat at 0.33 µg/g (range 0.1 to 0.8 µg/g, n=85). The roughly 2.5x concentration gap between whole-grain wheat and refined flour reflects the bran fraction's accumulation of Ni, parallel to the bran-effect on Cd and Mn. In the Danish average diet model, wheat flour contributes 14.7 µg Ni/day (10 percent of total dietary Ni) at a load factor F = 1.9; wheat is therefore a meaningful per-day Ni source by volume, though not a high per-gram contributor on the order of cocoa, soy, or oats. Whole wheat at 0.33 µg/g is roughly 5x higher than white bread (0.27 µg/g, n=65 samples), supporting the bran-versus-endosperm pattern.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ozkutlu2026-wheat-cd-zinc-mitigation\|Ozkutlu et al. 2026]]. *Roles of Soil and Foliar Spray of Zinc Nutrition in Cadmium Reduction of Wheat Grain*, ACS Omega | 2026 | Peer-reviewed | Greenhouse trial quantifying Zn-based Cd mitigation in durum wheat grain; establishes practical ceiling of combined soil + foliar Zn fertilization across four Cd dose levels |
| 2 | [[sources/rahati2026-infant-formula-baby-food-iran-health-risk\|Rahati et al. 2026]]. *Monte Carlo simulation approach for health risk analysis of heavy metals' contamination in infant formula and food on the Iranian market*, Journal of Health, Population and Nutrition | 2026 | Peer-reviewed | IR Pb, Cd, tHg, Al, Cr occurrence in 80 infant formula samples (0–6 months, 6–12 months, above 1 year) from 8 commercial brands, and 27 baby... (n=107) |
| 3 | [[sources/asaditouranlou2025-bread-iran-montecarlo\|Asadi et al. 2025]]. *Health risk assessment of potentially toxic elements in bread from Iranian markets using Monte Carlo simulation*, Scientific Reports | 2025 | Peer-reviewed | IR Pb, Cd, tHg, Al, Cr, Ni, Cu, Fe, Zn, Co occurrence in 248 bread samples collected from 11 Iranian provinces during winter 2020; four traditional bread types: lavash (n=69), taftoon... (n=248) |
| 4 | [[sources/asaditouranlou2025-bread-wheat-mashhad\|Asadi et al. 2025]]. *Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran*, PLoS ONE | 2025 | Peer-reviewed | Multi-metal (tAs, Al, Cr, Cd, Ni, Pb, Hg) occurrence in wheat flour, dough, and bread from 90 Mashhad bakeries; As dominates carcinogenic and non-carcinogenic risk |
| 5 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 6 | [[sources/cantoral2024-cadmium-foodstuffs-mexico\|Cantoral et al. 2024]]. *Dietary Risk Assessment of Cadmium Exposure Through Commonly Consumed Foodstuffs in Mexico*, Foods | 2024 | Peer-reviewed | Cd concentrations in 143 commonly consumed Mexican foodstuffs including cereals and wheat-based products; dietary exposure modelling by age group |
| 7 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | Pb concentrations across 103 Mexican foods including cereals; whole wheat bread flagged at 0.447 mg/kg, exceeding FAO/WHO ML |
| 8 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 9 | [[sources/hao2024-amf-arsenic-plants-meta-analysis\|Hao et al. 2024]]. *Meta-analysis of the effects of arbuscular mycorrhizal fungi on arsenic accumulation in plants and grain*, Frontiers in Plant Science | 2024 | Peer-reviewed | As, iAs, tAs occurrence in 76 peer-reviewed publications (meta-analysis) evaluating AMF effects on arsenic accumulation in food crops (n=76) |
| 10 | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|Kumar et al. 2024]]. *High Arsenic Contamination in the Breast Milk of Mothers Inhabiting the Gangetic Plains of Bihar: A Major Health Risk to Infants*, Environmental Health 23(1) | 2024 | Peer-reviewed | tAs and iAs in wheat grain as part of multi-matrix arsenic exposure study in high-As Bihar groundwater area; provides supply-chain context for As transfer through diet |
| 11 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics | 2024 | Peer-reviewed | CN Cr occurrence in Seven commercially purchased food samples from a Nanjing supermarket: milk powder, whole wheat bread, yoghurt, orange juice, green... (n=7) |
| 12 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 13 | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals\|Alharbi et al. 2023]]. *Occurrence and Dietary Exposure Assessment of Heavy Metals in Baby Foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2023 | Peer-reviewed | As, Cd, Pb in wheat-containing cereal-based baby meals and biscuits from Saudi Arabia (n=111 products); dry-weight basis, ICP-MS |
| 14 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market – potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | PL/EU Cd, Pb occurrence in 50 bread samples purchased in Silesia Province, Poland: 10 gluten-free, 12 wheat-rye, 20 wheat, 8 rye (n=50) |
| 15 | [[sources/oduro2023-cereal-breakfast-ghana-health-risk\|Oduro et al. 2023]]. *Health risks of potentially toxic metals in cereal-based breakfast meals in the Kumasi Metropolis, Ghana*, Discover Food | 2023 | Peer-reviewed | GH tAs, Cd, Cr, Ni, Pb, Mn occurrence in Locally produced cereal-based breakfast meals (31 breakfast cereals, 20 biscuits, 3 bread types) from markets in Kumasi, Ghana;... (n=54) |
| 16 | [[sources/palombieri2023-triticum-turgidum-cadmium\|Palombieri et al. 2023]]. *Characterization of Triticum turgidum sspp. durum, turanicum, and polonicum grown in Central Italy in relation to technological and nutritional aspects*, Frontiers in Plant Science | 2023 | Peer-reviewed | IT/EU Cd occurrence in Multiple accessions of Triticum turgidum ssp. durum, ssp. turanicum (Khorasan), and ssp. polonicum (Polish wheat), grown at University... |
| 17 | [[sources/rubio2023-metals-cereals-madeira-azores\|Rubio et al. 2023]]. *Dietary Exposure to Toxic Metals (Cd, Pb and Hg) from Cereals Marketed in Madeira and the Azores*, Biological Trace Element Research | 2023 | Peer-reviewed | PT Cd, Pb, tHg occurrence in Cereals and cereal derivatives marketed in Madeira and the Azores (Portuguese Atlantic archipelagos); multiple cereal types including rice,... |
| 18 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 19 | [[sources/vasilachi2023-heavy-metals-cereal-crops\|Vasilachi et al. 2023]]. *Analysis of Heavy Metal Impacts on Cereal Crop Growth and Development in Contaminated Soils*, Agriculture | 2023 | Review | Pb, Cd, tAs, Cr, Ni, Al, Sn, tHg occurrence in Review of global literature on cereal crops (wheat, rice, maize, barley) in contaminated soils |
| 20 | [[sources/alemu2022-wheat-flour-metals-ethiopia\|Alemu et al. 2022]]. *Levels of selected essential and non-essential metals in wheat flour and health risk assessment among consumers in Ethiopia*, Journal of Nutritional Science | 2022 | Peer-reviewed | ET Pb, Cd, Ni occurrence in 9 commercially available wheat flour samples from Ethiopian markets; comparison with Indian flour samples from published literature (n=9) |
| 21 | [[sources/ali2022-lead-wastewater-crops-meta\|Ali et al. 2022]]. *Meta-analysis of public health risks of lead accumulation in wastewater, irrigated soil, and crops nexus*, Frontiers in Public Health | 2022 | Peer-reviewed | IN/PK/CN Pb occurrence in 24 studies from 13 countries (India, Pakistan, Iran, China, Egypt, Ethiopia, Kenya, Iraq, Morocco, Nigeria, North Korea, South... (n=24) |
| 22 | [[sources/balbo2022-bread-contaminants-poland\|Balbo et al. 2022]]. *Dietary exposure and risk characterisation of multiple chemical contaminants in rye-wheat bread marketed in Poland*, EFSA Journal | 2022 | Government report | PL/EU Al, tAs, Cd, Cr, Pb, Ni occurrence in 51 loaves of rye-wheat bread (refined flour, category A005N per FoodEx2) collected from popular supermarkets in Warsaw, Poland;... (n=51) |
| 23 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | DE/EU Ni occurrence in 840 food pools from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II,... (n=840) |
| 24 | [[sources/getu2022-heavy-metals-cereals-ethiopia\|Getu et al. 2022]]. *Determination of the Level of Heavy Metals in the Selected Cereals from Debre Markos Local Market, Amhara Region, Ethiopia*, International Journal of Analytical Chemistry | 2022 | Peer-reviewed | ET Pb, Cd, Cr occurrence in Four cereal types (barley, tef, wheat, maize) purchased from 40 merchants at Debre Markos local market, Amhara region,... (n=4) |
| 25 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | International Cd dietary exposure assessment identifying wheat and cereals as major population-level Cd contributors; underpins PTMI of 25 µg/kg BW/month |
| 26 | [[sources/li2022-guizhou-cd-grains\|Li et al. 2022]]. *Spatial distribution and risk assessment of fluorine and cadmium in rice, corn, and wheat grains in most karst regions of Guizhou province, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN Cd occurrence in Grain samples from karst regions of Guizhou province, China: 113 rice, 119 corn, 102 wheat (n=334) |
| 27 | [[sources/li2022-wheat-pte-guizhou-health-risk\|Li et al. 2022]]. *Co-exposure of potentially toxic elements in wheat grains reveals a probabilistic health risk in Southwestern Guizhou, China*, Frontiers in Nutrition | 2022 | Peer-reviewed | CN Pb, Cd, Cr, Ni, tAs occurrence in 149 wheat grain samples collected at maturity in 2021 using systematic composite grid sampling from Bijie City, Guizhou... (n=149) |
| 28 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Pb, Cd, tAs, tHg, Cr occurrence in Narrative review synthesizing published literature on heavy metal contamination in plant-based foods globally |
| 29 | [[sources/shi2022-sulfur-as-cd-wheat\|al. 2022]]. *Sulfur reduces arsenic and cadmium translocation from root to shoot in wheat by regulating vacuolar sequestration*, Frontiers in Plant Science | 2022 | Peer-reviewed | CN/IN/PK tAs, iAs, Cd occurrence in Hydroponic wheat experiment; references published occurrence data from India, Pakistan, Argentina |
| 30 | [[sources/sitek2022-cd-toxicity-antioxidant-vitamins\|Sitek et al. 2022]]. *The role of antioxidant vitamins in cadmium toxicity prevention*, Nutrients | 2022 | Peer-reviewed | EU/WHO/global Cd occurrence in Review of human and animal studies on dietary Cd exposure and antioxidant vitamin interactions |
| 31 | [[sources/vanisree2022-heavy-metals-food-crops-chapter\|Vanisree et al. 2022]]. *Heavy Metal Contamination of Food Crops: Transportation via Food Chain, Human Consumption, Toxicity and Management Strategies*, IntechOpen (Environmental Impact and Remediation of Heavy Metals) | 2022 | Book chapter | BD/IN Pb, Cd, tAs, tHg, Cr, Ni occurrence in Review chapter; includes a table of heavy metal concentrations in effluent-contaminated irrigation water from Bangladesh's Dhaka Export Processing... |
| 32 | [[sources/zhao2022-china-sixth-tds-pb-cd\|Zhao et al. 2022]]. *Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019*, China CDC Weekly | 2022 | Government report | CN Pb, Cd occurrence in Adult Chinese males (18–45 years, 63 kg reference body weight), 24 provincial-level administrative divisions (PLADs), 2016–2019; 288 composite... (n=288) |
| 33 | [[sources/motta-romero2021-wheat-cadmium-fungicide\|Motta-Romero et al. 2021]]. *Effects of foliar fungicide on yield, micronutrients, and cadmium in grains from historical and modern hard winter wheat genotypes*, PLoS ONE | 2021 | Peer-reviewed | US Cd occurrence in 20 hard winter wheat genotypes (18 elite cultivars plus 2 landraces released 1870-2013) grown at University of Nebraska... (n=20) |
| 34 | [[sources/pompa2021-durum-wheat-cd-pb-hg-italy\|Pompa et al. 2021]]. *Evaluation and Dietary Exposure Assessment of Selected Toxic Trace Elements in Durum Wheat (Triticum durum) Imported into the Italian Market: Six Years of Official Controls*, Foods | 2021 | Peer-reviewed | Cd, Pb, and Hg in 346 imported durum wheat grain samples (Italy 2015–2020, six origin countries); documents temporal and geographic Cd variance by country of origin |
| 35 | [[sources/tian2021-magnetic-purification-cadmium-lead-grain\|Tian et al. 2021]]. *A rapid magnetic-based purification of Cd2+ and Pb2+ prior to portable electrochemical determination for grain*, Food Chemistry: X | 2021 | Peer-reviewed | Cd and Pb detection method validated on naturally contaminated wheat, rice, and corn from Chinese markets; occurrence values cross-validated against ICP-MS |
| 36 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | NG/CN/TZ Pb, Cd, tAs, tHg, Cr, Ni occurrence in Narrative review in Current Opinion in Toxicology covering plant food heavy metal contamination globally, with emphasis on Asia,... |
| 37 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Ni occurrence in Polish market samples 2019–2020: 5 cereal grains (millet, rye, wheat, barley), 11 pasta, 13 flours, 12 groats, 10... (n=56) |
| 38 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | US/EU/AU Cd occurrence in Review of global literature and FDA Total Diet Study 2014–2016 data for cadmium in food and mitigation interventions |
| 39 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Multi-element (Al, Sb, tAs, Cd, Cr, Co, Ni, Sn, V) occurrence in 291 French infant foods including wheat-based cereals; category-level data for cereal-based infant products |
| 40 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg occurrence in Beijing general population; 25 foodstuff types collected from 4 sites, 3 replicates each (n=75) |
| 41 | [[sources/maccaferri2019-durum-wheat-genome-cadmium\|Maccaferri et al. 2019]]. *A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding*, Nature Genetics | 2019 | Peer-reviewed | Durum wheat reference genome identifying TdHMA3-B1 as the primary genetic determinant of grain Cd accumulation; underpins the cultivar-selection mitigation strategy |
| 42 | [[sources/slepecka2017-ecological-cereal-heavy-metals-poland\|Slepecka et al. 2017]]. *Evaluation of cadmium, lead, zinc and copper levels in selected ecological cereal food products and their non-ecological counterparts*, Current Issues in Pharmacy and Medical Sciences | 2017 | Peer-reviewed | PL Cd, Pb, Zn, Cu occurrence in 10 ecological and 10 non-ecological cereal products (flour, flakes, bran) from different producers and regions of Poland; product... (n=20) |
| 43 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | GB Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, Sb occurrence in 3312 retail food samples from 24 UK locations, combined into 138 food categories and 28 food groups, all... (n=3312) |
| 44 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology reference chapter covering environmental occurrence including wheat/cereals as major dietary Cd sources; anchors the toxicokinetic frame |
| 45 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley) | 2014 | Book chapter | EG Pb, Cd, tHg, tAs, Cr occurrence in Review chapter covering analytical methods and health risk assessment frameworks for heavy metal contamination in food; includes some... |
| 46 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EU Cd exposure assessment establishing TWI of 2.5 µg/kg BW/week; reports mean Cd in wheat grain and flour at 0.030 mg/kg and in wheat bran/germ at 0.065 mg/kg |
| 47 | [[sources/reczajska2005-chromium-plant-foods-poland\|Reczajska et al. 2005]]. *Determination of Chromium Content of Food and Beverages of Plant Origin*, Polish Journal of Food and Nutrition Sciences | 2005 | Peer-reviewed | PL Cr occurrence in Fresh fruits, vegetables, wheat grains collected in 2001 from three agricultural regions of Poland; plus commercially purchased juices,... (n=272) |
| 48 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative international Codex standard setting matrix-specific maximum levels for Cd, Pb, and other contaminants in cereals including wheat |
| 49 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in wheat flour (mean 0.13 µg/g, n=32) and whole wheat (0.33 µg/g, n=85) by AAS; foundational Danish dietary Ni intake model |
<!-- END: hmi-source-legend -->
