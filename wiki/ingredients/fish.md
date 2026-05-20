---
title: Fish
type: ingredient
commodity: fish
aliases: [seafood, finfish, tuna, salmon, swordfish, mackerel, cod, tilapia, trout, sardines, herring, anchovies, fish-oil, anchovy, cod-liver-oil, shark-liver-oil]
category: aquatic-animal
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 300
    confidence: high
    n_studies: 49
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 2000
    confidence: high
    n_studies: 48
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 15]
    p95_ppb: 74
    confidence: high
    n_studies: 18
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [30, 300]
    p95_ppb: 1000
    confidence: high
    n_studies: 70
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 200]
    p95_ppb: null
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: null
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: null
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [500, 2500]
    p95_ppb: 5000
    confidence: high
    n_studies: 37
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [trophic-level, methylmercury-biomagnification, species, harvest-region, fish-age-and-size]
lower_risk_variants: ["[[ingredients/salmon]]", "[[ingredients/sardines]]", "[[ingredients/anchovies]]", "[[ingredients/herring]]", "[[ingredients/tilapia]]", "[[ingredients/trout]]", "[[ingredients/light-canned-tuna]]"]
higher_risk_variants: ["[[ingredients/swordfish]]", "[[ingredients/shark]]", "[[ingredients/king-mackerel]]", "[[ingredients/tilefish]]", "[[ingredients/bigeye-tuna]]", "[[ingredients/marlin]]", "[[ingredients/orange-roughy]]"]
used_in_products: ["[[products/fresh-fish]]", "[[products/frozen-fish]]", "[[products/canned-tuna]]", "[[products/canned-salmon]]", "[[products/canned-sardines]]", "[[products/fish-oil-supplements]]", "[[products/prepared-seafood]]", "[[products/surimi]]", "[[products/fish-sauce]]"]
audience: [regulator, educator, consumer, app]
sources: 121
updated: 2026-05-16
---

# Fish

Fish is the dominant dietary source of methylmercury exposure for most populations ([[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=49 | 5–50 | high | [[sources/albuquerque2026-fish-toxic-elements-western-para\|1]], [[sources/balzani2026-fish-metals-dalyan-lake\|2]], [[sources/xu2025-heavy-metals-aquatic-foods-global\|3]] |
| Cd | n=48 | 10–200 | high | [[sources/albuquerque2026-fish-toxic-elements-western-para\|1]], [[sources/xu2025-heavy-metals-aquatic-foods-global\|2]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|3]] |
| iAs | n=18 | 0–15 | high | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|2]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|3]] |
| tAs | n=37 | 500–2500 | high | [[sources/albuquerque2026-fish-toxic-elements-western-para\|1]], [[sources/balzani2026-fish-metals-dalyan-lake\|2]], [[sources/xu2025-heavy-metals-aquatic-foods-global\|3]] |
| tHg | n=70 | 30–300 | high | [[sources/albuquerque2026-fish-toxic-elements-western-para\|1]], [[sources/lepak2026-mehg-depuration-fish-consumption\|2]], [[sources/xu2025-heavy-metals-aquatic-foods-global\|3]] |
| Ni | n=15 | 50–200 | high | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/meli2024-chemical-characterization-baby-food-italy\|3]] |
| Al | n=11 | 200–1500 | high | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/suomi2023-finland-dietary-metals-cumulative\|3]] |
| Cr | n=15 | 5–50 | high | [[sources/balzani2026-fish-metals-dalyan-lake\|1]], [[sources/ray2025-fish-chennai-metals\|2]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|3]] |
| Sn | n=10 | 0–50 | medium | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|1]], [[sources/mititelu2025-heavy-metal-food-contamination-review\|2]], [[sources/hussein2024-toxic-metals-canned-fish-egypt\|3]] |
| U | data gap | — | — | — |

## Why this commodity accumulates heavy metals

Fish accumulate methylmercury through aquatic-food-web biomagnification: inorganic mercury in water is methylated by sulfate-reducing bacteria in sediment, taken up by plankton, and biomagnified through each trophic step. Predator species at the top of marine food webs (swordfish, shark, king mackerel, tilefish, bigeye tuna, marlin) carry methylmercury concentrations 1 to 2 orders of magnitude above small-pelagic species (sardines, anchovies, herring) and farmed or short-lived freshwater species (salmon, tilapia, trout). See [[metals/mercury]] for the methylmercury toxicology, the [[sources/jecfa-61st-methylmercury|JECFA 61st]] PTWI of 1.6 µg/kg b.w./week, and the Faroe Islands and Seychelles cohort literature on developmental neurotoxicity (synthesized in [[metals/mercury]]).

Cadmium and lead in fish are commodity-secondary concerns; bivalve molluscs (covered separately at [[ingredients/bivalve-molluscs]]) are the dominant marine-food Cd source ([[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]]).

## Multi-metal coverage and dedicated subpages

Fish-as-a-commodity is broad enough that future ingest waves will likely produce species-specific pages (tuna, salmon, swordfish) rather than a single fish page treating all species uniformly. The current page is a placeholder that satisfies the wikilink graph and orients consumers toward the dominant concern (methylmercury).

Collado-Lopez et al. 2025 reports fish/fish-mix baby foods as a priority review-level group for arsenic and mercury, with median As 0.165 mg/kg and median Hg 0.016 mg/kg among detected items. This signal should guide retrieval of the underlying primary studies before any fish-containing baby-food p90 is calculated. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

## Regulatory limits that apply

- [[regulations/jecfa-methylmercury-ptwi]] — JECFA provisional tolerable weekly intake of 1.6 µg methylmercury/kg b.w./week.
- [[regulations/efsa-methylmercury-twi]] — EFSA tolerable weekly intake of 1.3 µg methylmercury/kg b.w./week.
- [[sources/fda-epa-fish-consumption-advice|FDA/EPA Fish Advice]] — FDA/EPA joint advice for women who might become pregnant, women who are pregnant or breastfeeding, and young children.
- [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]] — EU fish maximum levels are species- and tissue-specific. General muscle meat of fish is 0.30 mg/kg (300 ug/kg) Pb, 0.050 mg/kg (50 ug/kg) Cd, and 0.50 mg/kg (500 ug/kg) Hg; listed lower-mercury fish are 0.30 mg/kg (300 ug/kg) Hg, and listed higher-mercury fish including tuna, shark, swordfish, marlin, halibut, pike, and sturgeon are 1.0 mg/kg (1000 ug/kg) Hg.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/albuquerque2026-fish-toxic-elements-western-para\|Albuquerque et al. 2026]]. *More Danger Than Meets the Eye: Potentially Toxic Element Contamination in Fish from the Western Pará Poses Significant Hazards to Local Communities*, ACS Omega | 2026 | Peer-reviewed | BR As, Cd, tHg, Pb occurrence in 398 fish specimens from 6 species across 5 municipalities in western Pará state, Brazilian Amazon; subsistence fishing communities... (n=398) |
| 2 | [[sources/balzani2026-fish-metals-dalyan-lake\|Balzani et al. 2026]]. *Metals and Metalloids Accumulation and Biomagnification in Three Commercially Important Fishes from a Turkish Brackish Lake*, Environmental Science and Pollution Research | 2026 | Peer-reviewed | TR tAs, Pb, Cr, Ni occurrence in Grey mullet (Mugil cephalus), gilthead seabream (Sparus aurata), European seabass (Dicentrarchus labrax) from Dalyan Lake, Türkiye; 9 individuals... (n=27) |
| 3 | [[sources/lepak2026-mehg-depuration-fish-consumption\|Lepak et al. 2026]]. *Quantifying Depuration of Methylmercury from Fish Consumption by Travelers*, Environmental Health | 2026 | Peer-reviewed | GA/US MeHg, tHg occurrence in Two adult travelers (one frequent fish consumer, one infrequent) who consumed local fish in Gabon, Central Africa (n=2) |
| 4 | [[sources/auzier-guimaraes2025-mercury-tapajos-fish\|Auzier et al. 2025]]. *Systematic review and spatiotemporal assessment of mercury concentration in fish from the Tapajós River Basin: implications for environmental and human health*, ACS Environmental Au | 2025 | Peer-reviewed | BR tHg, MeHg occurrence in 143 fish species from the Tapajós River Basin, Brazil; 36 studies, 1992–2022; 735 mean Hg values from 14,113... (n=14113) |
| 5 | [[sources/carter2025-tda-aas-methylmercury-finfish-fda-method\|Carter et al. 2025]]. *Thermal Decomposition Amalgamation AAS and SALLE for Methylmercury and Total Mercury in Finfish: FDA Method Validation* | 2025 | Peer-reviewed | US MeHg, tHg occurrence in 10 finfish certified reference materials; FDA method validation across multiple fish species |
| 6 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | CN/EU Pb, Cd, iAs, MeHg occurrence in 969 participants from China Health and Nutrition Survey 2018, Chongqing Municipality: 31 preschoolers (3-6 yr), 113 adolescents (7-17... (n=969) |
| 7 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | global Pb, Cd, tAs, tHg occurrence in 75 included studies covering 580 baby foods and 251 infant formulas |
| 8 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 9 | [[sources/jermilova2025-mackenzie-mercury-fish-bayesian\|Jermilova et al. 2025]]. *Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis*, Integrated Environmental Assessment and Management | 2025 | Peer-reviewed | CA tHg, MeHg occurrence in Five freshwater fish species (lake whitefish, lake trout, northern pike, walleye, burbot) from Mackenzie River Basin and Great... (n=1044) |
| 10 | [[sources/lucchini2025-amazon-mercury-co-exposures\|Lucchini et al. 2025]]. *Mercury contamination in the Amazon Basin: fish consumption, co-exposures, and health implications for indigenous and riverside communities*, Annals of Global Health | 2025 | Peer-reviewed | BR Hg, MeHg, tHg occurrence in Review of studies covering Amazonian fish species and indigenous/riverside human populations; fish Hg concentrations 0.10–4.73 µg/g; hair mercury... |
| 11 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 12 | [[sources/paul2025-meghna-fish-arsenic\|Paul et al. 2025]]. *Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications*, PLoS One | 2025 | Peer-reviewed | BD tAs occurrence in 300 muscle tissue samples from 10 small indigenous freshwater fish species (10 stations × 1 specimen per species... (n=300) |
| 13 | [[sources/ray2025-fish-chennai-metals\|Ray et al. 2025]]. *ICP-MS-based quantitative analysis and risk assessment of metal(loid)s in fish species from Chennai, India*, Frontiers in Public Health | 2025 | Peer-reviewed | IN tAs, Cd, Cr, tHg, Pb occurrence in Three commercially available fish species from Chennai marketplace (sourced from Ennore industrial coast): Nemipterus japonicus (threadfin bream), Oreochromis... (n=18) |
| 14 | [[sources/scovronick2025-glynn-county-exposure\|Scovronick et al. 2025]]. *Assessment of human exposure to uncommon industrial toxicants in Glynn County, Georgia*, Environmental Pollution | 2025 | Peer-reviewed | US tHg, Pb, Cd occurrence in Glynn County, Georgia adults (mean age 60.8 years, 66% female, 46% Black; long-term residents near 4 EPA NPL... (n=96) |
| 15 | [[sources/taylor2025-seafood-benefits-contaminants\|Taylor et al. 2025]]. *Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies*, Foods | 2025 | Peer-reviewed | US/global tHg, MeHg, Pb, Cd, tAs occurrence in Broad review; no primary sampling; synthesizes published literature on seafood contaminants globally |
| 16 | [[sources/venant2025-lake-victoria-sardine-cd-pb\|Venant et al. 2025]]. *Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania*, Food Science & Nutrition | 2025 | Peer-reviewed | TZ/CODEX Cd, Pb occurrence in Sardine (Rastrineobola argentea) samples from Lake Victoria, Tanzania; three regions: Mwanza (n=114), Kagera (n=78), Mara (n=87); both fresh... (n=279) |
| 17 | [[sources/ventura2025-portuguese-total-diet-study-trace-elements\|Ventura et al. 2025]]. *Dietary Exposure to Essential and Toxic Trace Elements in the Portuguese Population: A Total Diet Study Approach*, Foods | 2025 | Peer-reviewed | PT/EU tAs, Cd, Pb, Sn occurrence in Pooled TDS samples representing Portuguese population diet, 17 food groups, 1956 food items collected 2014-2016 (n=163) |
| 18 | [[sources/xia2025-whole-cell-biosensor-hg-food\|Xia et al. 2025]]. *Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals*, Foods | 2025 | Peer-reviewed | tHg occurrence in Spiked food matrices (fish, rice, shellfish, black beans) for whole-cell biosensor validation; no unspiked occurrence measurements reported |
| 19 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, MeHg, Cd, Pb, tAs, iAs occurrence in 138,281 test records for aquatic food products from the WHO Food Safety Collaborative Platform (FOSCOLLAB) database; covers fish,... (n=138281) |
| 20 | [[sources/atsdr-mercury-toxprofile-2024\|ATSDR 2024]]. *Toxicological Profile for Mercury*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2024 | Government report | US Hg, MeHg, tHg concentrations |
| 21 | [[sources/bfr2024-methylmercury-fish-seafood-germany\|BfR 2024]]. *Methylmercury in fish and seafood – health risk assessment of new data from the BfR MEAL study*, BfR Opinion 023/2024 | 2024 | Government report | DE/EU MeHg, tHg occurrence in German population across age groups (infants 0.5–<1 yr through elderly 65–<80 yr); consumption data from KiESEL (n=1,008 children... |
| 22 | [[sources/christian2024-caribbean-fish-mercury\|Christian et al. 2024]]. *An evaluation of fish and invertebrate mercury concentrations in the Caribbean Region*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | AG/BZ/GT tHg occurrence in Fish and aquatic invertebrates from 11 countries/territories in the wider Caribbean Region, 108 unique species, 2005-2023 (n=1600) |
| 23 | [[sources/codex-cccf17-2024\|Codex 2024]]. *Report of the 17th Session of the Codex Committee on Contaminants in Foods (REP24/CF17)*, Joint FAO/WHO Food Standards Programme, Codex Alimentarius Commission | 2024 | Government report | international Pb, Cd, Hg, MeHg, iAs, tAs concentrations |
| 24 | [[sources/hussein2024-toxic-metals-canned-fish-egypt\|Hussein et al. 2024]]. *Risk assessment of some toxic metals in canned fish products retailed in Mansoura, Egypt*, Open Veterinary Journal | 2024 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al, Sn occurrence in 100 canned fish products (20 each: herring, mackerel, salmon, sardine, tuna) from retail shops in Mansoura, Egypt; collected... (n=100) |
| 25 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, iAs, tAs, tHg occurrence in null |
| 26 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | EU/Italy Al, tAs, Cd, tHg, Ni, Pb, Sn concentrations |
| 27 | [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet\|Tatsuta et al. 2024]]. *Dietary intake of methylmercury by 0-5 years children using the duplicate diet method in Japan*, Environmental Health and Preventive Medicine | 2024 | Peer-reviewed | Japan tHg, MeHg concentrations |
| 28 | [[sources/yamashita2024-laep-oes-hg-tuna-japan\|Yamashita 2024]]. *LAEP-OES validation for total mercury in tuna and fish from Japanese markets*, unknown | 2024 | Peer-reviewed | JP tHg occurrence in 102 fish specimens purchased from Japanese markets (multiple species including tuna); total Hg by LAEP-OES with ICP-OES reference (n=102) |
| 29 | [[sources/abbas2023-heavy-metals-fish-egypt-aquaculture\|Abbas et al. 2023]]. *Heavy Metals Assessment and Health Risk to Consumers of Two Commercial Fish Species from Polyculture Fishponds in El-Sharkia and Kafr El-Sheikh, Egypt: Physiological and Biochemical Study*, Biological Trace Element Research | 2023 | Peer-reviewed | EG Pb, Cd, Cu, Fe, Mn, Zn occurrence in Bolti (Oreochromis niloticus / Nile tilapia) and Topara (Chelon ramada / thinlip mullet) from 7 El-Sharkia (ES) and... (n=45) |
| 30 | [[sources/abbas2023-sparus-aurata-egypt-metals\|Abbas 2023]]. *Heavy Metal Levels and Cancer Risk Assessments of the Commercial Denis, Sparus aurata Collected from Bardawil Lake and Private Fish Farm Waters as a Cultured Source, Egypt* | 2023 | Peer-reviewed | EG Pb, Cd, Ni, Fe, Cu, Zn occurrence in Sparus aurata (gilthead seabream); n=40 wild (Bardawil Lake, North Sinai) and n=40 farmed (Ezbet Elborg/Domeitta, Egypt) (n=80) |
| 31 | [[sources/alsulaiti2023-qatar-fish-mehg\|Al-Sulaiti et al. 2023]]. *Health risk assessment of methyl mercury from fish consumption in a sample of adult Qatari residents*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | QA tHg, MeHg occurrence in Adult Qatari residents aged 18+ (n=600 dietary survey respondents; 65 composite fish samples across 7 species) (n=65) |
| 32 | [[sources/bae2023-tuna-heavy-metals-korea\|Bae et al. 2023]]. *Heavy metal concentrations in commercial tuna products in Korea and assessment of health risks*, unknown | 2023 | Peer-reviewed | KR MeHg, tHg, Pb, Cd, tAs occurrence in Commercial tuna products purchased in Korea (n=31) |
| 33 | [[sources/bakhshalizadeh2023-mullet-ree-trace-caspian\|Bakhshalizadeh et al. 2023]]. *Bioaccumulation of rare earth elements and trace elements in different tissues of the golden grey mullet (Chelon auratus) in the southern Caspian Sea*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | IR tAs, Cd, tHg, Pb occurrence in Golden grey mullet (Chelon auratus) from southern Caspian Sea, Bandar Anzali coast, Iran; average weight 385±156 g, length... (n=20) |
| 34 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 35 | [[sources/coe2023-gut-microbiome-methylmercury-demethylation\|Coe et al. 2023]]. *Assessing the Role of the Gut Microbiome in Methylmercury Demethylation and Elimination in Humans and Gnotobiotic Mice*, Archives of Toxicology, Vol. 97, pp. 2399-2418 | 2023 | Peer-reviewed | US MeHg, tHg concentrations |
| 36 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 37 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 38 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | ES tAs, tHg, Pb, Cd, Ni, Al, Cr, U occurrence in 159 commercial ready-to-eat baby purees sold in Gran Canaria, Spain: 40 fruit, 39 chicken, 40 fish, 40 beef;... (n=159) |
| 39 | [[sources/holbert2023-mercury-hawaiian-fish\|Holbert et al. 2023]]. *Mercury accumulation and biomarkers of exposure in two popular recreational fishes in Hawaiian waters*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | US tHg occurrence in Hawaiian nearshore recreational fish: giant trevally (Caranx ignobilis, n=13), bluefin trevally (C. melampygus, n=4), sharp jaw bonefish (Albula... (n=38) |
| 40 | [[sources/hoy2023-arsenic-speciation-freshwater-fish\|Hoy et al. 2023]]. *Arsenic speciation in freshwater fish: challenges and research needs*, Food Quality and Safety | 2023 | Peer-reviewed | CA/CN/FR iAs, tAs occurrence in Systematic review of published literature on arsenic speciation in freshwater fish globally; primary data tables summarize studies from... |
| 41 | [[sources/hussein2023-freshwater-marine-fish-egypt\|Hussein et al. 2023]]. *Risk assessment of toxic residues among some freshwater and marine water fish species*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Al occurrence in Freshwater and marine water fish from El-Obour city fish market, Egypt; six species (three freshwater, three marine), 20... (n=120) |
| 42 | [[sources/kagawa2023-fish-arsenic-hypertension-japan\|Kagawa et al. 2023]]. *Elevated arsenic level in fasting serum via ingestion of fish meat increased the risk of hypertension in humans and mice*, European Heart Journal Open | 2023 | Peer-reviewed | JP tAs occurrence in 2709 Japanese adults aged 39–75 years from Nagoya City; second cross-sectional survey of Japan Multi-Institutional Collaborative Cohort (J-MICC);... (n=2709) |
| 43 | [[sources/leclerc2023-methylmercury-periphyton-river\|Leclerc et al. 2023]]. *Enhanced Bioaccumulation and Transfer of Monomethylmercury through Periphytic Biofilms in Benthic Food Webs of a River Affected by Run-of-River Dams*, Environmental Science & Technology | 2023 | Peer-reviewed | CA MeHg, tHg occurrence in Periphyton, benthic macroinvertebrates, and juvenile fish from St. Maurice River (Québec, Canada) affected by two run-of-river hydroelectric power... |
| 44 | [[sources/lepak2023-sport-fish-mercury-colorado\|Lepak et al. 2023]]. *Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health*, PLOS ONE | 2023 | Peer-reviewed | US tHg occurrence in Northern pike (Esox lucius), smallmouth bass (Micropterus dolomieu), and walleye (Sander vitreus) from 32 Colorado reservoirs; Hg data... (n=864) |
| 45 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | CN iAs, tAs occurrence in Laboratory study using crab, scallop, turbot, and flounder seafood samples subjected to in vitro digestion (BARGE UBM method) |
| 46 | [[sources/marriott2023-lake-victoria-aquaculture-biogeochemistry\|Marriott et al. 2023]]. *Considerations for environmental biogeochemistry and food security for aquaculture around Lake Victoria, Kenya*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | KE tAs, Cd, Cr, Pb, Al, Ni occurrence in Wild and aquaculture Nile tilapia from Winam Gulf, Lake Victoria, Kenya; water collected 2018-2019 |
| 47 | [[sources/sawe2023-fish-metals-lake-manyara-tanzania\|Sawe et al. 2023]]. *Assessment of Potentially Toxic Metals in Fish from Lake Manyara, Northern Tanzania*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | TZ Pb, Ni, Cu occurrence in Oreochromis amphimelas (endemic Manyara tilapia) and Clarias gariepinus (African catfish) collected from 5 landing sites at Lake Manyara,... (n=100) |
| 48 | [[sources/sirisangarunroj2023-thai-fish-toxic-elements\|Sirisangarunroj et al. 2023]]. *Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand*, Foods 2023, 12, 3967 | 2023 | Peer-reviewed | TH tAs, Cd, tHg, Pb occurrence in 15 commonly consumed fish species (7 freshwater, 8 marine) from three Bangkok markets; n=3 markets per species (n=45) |
| 49 | [[sources/sonke2023-mercury-global-change\|Sonke et al. 2023]]. *Global change effects on biogeochemical mercury cycling*, Ambio | 2023 | Peer-reviewed | tHg, MeHg occurrence in Global synthesis — multiple study populations and monitoring networks |
| 50 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | FI/EU Cd, Pb, iAs, MeHg, Ni, Al occurrence in Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas) (n=1295) |
| 51 | [[sources/ulusoy2023-canned-tuna-toxic-metals\|Ulusoy 2023]]. *Determination of toxic metals in canned tuna sold in developed and developing countries: Health risk assessment associated with human consumption*, Marine Pollution Bulletin | 2023 | Peer-reviewed | US/DE/FI Cd, Pb, tHg, tAs, iAs concentrations (n=222) |
| 52 | [[sources/willacker2023-mercury-fish-snake-river\|Willacker et al. 2023]]. *Reservoir Stratification Modulates the Influence of Impoundments on Fish Mercury Concentrations along an Arid Land River System*, Environmental Science & Technology | 2023 | Peer-reviewed | US tHg, MeHg occurrence in Smallmouth Bass (Micropterus dolomieu) collected from reservoir, tailrace, and free-flowing reaches along 853 km of the Snake River... |
| 53 | [[sources/cegolon2022-hg-hair-trieste\|Cegolon et al. 2022]]. *Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy)*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | IT/EU tHg, MeHg occurrence in General population residents of Friuli Venezia Giulia (FVG) coastal region, Gulf of Trieste, Italy; convenience sample recruited at... (n=301) |
| 54 | [[sources/ec-reg-2022-617-mercury-fishery\|EC 2022]]. *Commission Regulation (EU) 2022/617 of 12 April 2022 amending Regulation (EC) No 1881/2006 as regards maximum levels of mercury in fish and salt*, Official Journal of the European Union, OJ L 115, 13.4.2022, pp. 60–63 | 2022 | Regulation | EU tHg, MeHg occurrence in Regulatory instrument — establishes binding maximum levels (MLs) for total mercury in fishery products on the EU market |
| 55 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Cd, Pb, Hg, MeHg, iAs, tAs, Ni, Al, Cu, Fe, Zn, Mn, Mo, Cr concentrations |
| 56 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 57 | [[sources/li2022-mercury-isotope-biota-review\|Li et al. 2022]]. *Internal Dynamics and Metabolism of Mercury in Biota: A Review of Insights from Mercury Stable Isotopes*, Environmental Science & Technology | 2022 | Peer-reviewed | tHg, MeHg occurrence in Synthesis of mercury isotope fractionation data across multiple biota studies (review) |
| 58 | [[sources/motta2022-marine-hg-isotopes\|Motta et al. 2022]]. *Mercury isotopic evidence for the importance of particles as a source of mercury to marine organisms*, Proceedings of the National Academy of Sciences | 2022 | Peer-reviewed | tHg, MeHg occurrence in Marine organisms (mesopelagic and bathypelagic fish and zooplankton) and water/particle samples from the North Pacific Ocean |
| 59 | [[sources/moura2022-hg-jaguaribe-estuary\|Moura et al. 2022]]. *Mercury in the Jaguaribe River Estuary, Northeast Brazil: Sources, Distribution, and Bioavailability*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | BR tHg occurrence in Shrimp (Littopenaeus vannamei), fish (Eugerres brasilianus, Cathorops spixii), sediments, and water from Jaguaribe River Estuary, Ceará, NE Brazil |
| 60 | [[sources/oliveira2022-mercury-fish-pregnant-women-tapajos\|Oliveira et al. 2022]]. *Fish consumption habits of pregnant women in Itaituba, Tapajós River basin, Brazil: risks of mercury contamination as assessed by measuring total mercury in highly consumed piscivore fish species and in hair of pregnant women*, Archives of Industrial Hygiene and Toxicology | 2022 | Peer-reviewed | BR tHg, MeHg occurrence in 110 pregnant women in Itaituba, Brazil; 120 fish samples (30 Cichla spp. and 30 Plagioscion squamosissimus per season) (n=170) |
| 61 | [[sources/sarker2022-bangladesh-food-webs-review\|Sarker et al. 2022]]. *Heavy metals contamination and associated health risks in food webs — a review focuses on food safety and environmental sustainability in Bangladesh*, Environmental Science and Pollution Research | 2022 | Review | BD Pb, Cd, tAs, Cr, Ni occurrence in Systematic review of published literature on heavy metal contamination in foodstuffs, soil, and water in Bangladesh; first systematic... |
| 62 | [[sources/vejrup2022-prenatal-mehg-fish-behavior\|Vejrup et al. 2022]]. *Prenatal methylmercury exposure from fish intake and child emotional and behavioural problems: results from the Norwegian Mother, Father and Child Cohort Study*, BMJ Nutrition, Prevention and Health | 2022 | Peer-reviewed | NO MeHg, tHg occurrence in 51,238 mother-child pairs from the Norwegian Mother, Father and Child Cohort Study (MoBa) (n=51238) |
| 63 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | PL tAs, Cd, tHg, Pb occurrence in 397 commercial ready-to-eat baby food products from the Polish market for children aged 0.5–3 years: dinners, porridges, mousses,... (n=397) |
| 64 | [[sources/cleary2021-fish-consumption-advisories-usa\|Cleary et al. 2021]]. *Comparison of Recreational Fish Consumption Advisories Across the USA*, Current Environmental Health Reports | 2021 | Peer-reviewed | US MeHg occurrence in Technical guidance documents from 46 US states; fish consumption advisory data collected 2019 (n=46) |
| 65 | [[sources/mahjoub2021-morocco-fish-metals\|Mahjoub et al. 2021]]. *Mercury, Lead, and Cadmium in the Muscles of Five Fish Species from the Mechraa-Hammadi Dam in Morocco and Health Risks for Their Consumers*, Journal of Toxicology | 2021 | Peer-reviewed | MA tHg, Pb, Cd occurrence in Five freshwater fish species from Mechraa-Hammadi Dam reservoir, Morocco |
| 66 | [[sources/reksten2021-bay-bengal-fish-metals\|Reksten et al. 2021]]. *Heavy Metal Contamination in 24 Fish Species from the Bay of Bengal: Risk Assessment for Human Health*, Foods | 2021 | Peer-reviewed | BD/LK/EU tAs, Cd, tHg, Pb occurrence in 1,111 individual fish across 24 species from Bay of Bengal (Sri Lanka and Bangladesh) (n=1111) |
| 67 | [[sources/uzomah2021-nigeria-fish-contaminants\|Uzomah et al. 2021]]. *Chemical Contaminants in Nigerian Fresh and Marine Fish: A Review*, Foods | 2021 | Peer-reviewed | NG/EU Pb, Cd, tHg, tAs, Ni, Cr occurrence in Systematic review of literature on chemical contaminants in Nigerian freshwater and marine fish; covers 104+ commercial species |
| 68 | [[sources/wickliffe2021-suriname-mercury-pregnancy\|Wickliffe et al. 2021]]. *Exposure to total and methylmercury among pregnant women in Suriname: sources and public health implications*, Journal of Exposure Science and Environmental Epidemiology | 2021 | Peer-reviewed | SR tHg, MeHg occurrence in Pregnant women in Suriname; three geographic cohorts: interior communities, Paramaribo (capital), and Nickerie (rice-growing region) (n=807) |
| 69 | [[sources/mcsorley2020-seychelles-mehg-immunity\|McSorley et al. 2020]]. *Methylmercury and long chain polyunsaturated fatty acids are associated with immune dysregulation in young adults from the Seychelles child development study*, Environmental Research | 2020 | Peer-reviewed | SC MeHg, tHg occurrence in Young adults (approximately age 19) from the Seychelles Child Development Study cohort; high fish-consuming island population (~7 fish... (n=497) |
| 70 | [[sources/reksten2020-angola-fish-metals\|Reksten et al. 2020]]. *Nutrient and Contaminant Analyses of Five Commercially Important Fish Species from the Angolan Coast*, Foods | 2020 | Peer-reviewed | AO/EU tAs, Cd, tHg, Pb occurrence in 5 composite samples per species (5 fish per composite) across 5 marine fish species from the Angolan coast (n=25) |
| 71 | [[sources/cfs2019-organotin-aquatic-hongkong\|Centre for Food Safety 2019]]. *Organotin Compounds in Aquatic Products Available at Local Markets*, Risk Assessment Studies Report No. 60, Centre for Food Safety, Hong Kong FEHD | 2019 | Government report | HK Sn occurrence in Fish, crustaceans, and molluscs collected from local markets in Hong Kong, October 2017 to June 2018; 201 fish,... (n=341) |
| 72 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | FR Al, Sb, tAs, Cd, Cr, Co, Ni, Sn, V occurrence in French infant and toddler foods (n=291) |
| 73 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU tAs, iAs, Cd, Pb, tHg, MeHg concentrations |
| 74 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg occurrence in Beijing general population; 25 foodstuff types collected from 4 sites, 3 replicates each (n=75) |
| 75 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 76 | [[sources/zolfaghari2018-iran-wetlands-fish-mercury-lead\|Zolfaghari 2018]]. *Risk assessment of mercury and lead in fish species from Iranian international wetlands*, MethodsX | 2018 | Peer-reviewed | IR/WHO/EU tHg, Pb occurrence in Multiple fish species from Anzali Wetland (Caspian Sea), Caspian Sea, and Hamun Wetlands, Iran; 20 fish per species |
| 77 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | US MeHg, tHg, iAs concentrations |
| 78 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | ES/DE/AU Al occurrence in Compiled literature review of Al concentrations across food groups and drinks; intake estimated against Spanish population consumption data... |
| 79 | [[sources/eaglessmith2016-freshwater-fish-mercury-western-us-canada\|Eagles-Smith et al. 2016]]. *Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada*, Science of The Total Environment (2016, in press 2015) | 2016 | Peer-reviewed | US/CA tHg, MeHg occurrence in 96,310 individual fish records from 4,262 unique locations across 15 U.S. states + 3 Canadian provinces + 2... (n=96310) |
| 80 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet; adults n=1,500 (NANS, age 18+, 2008–2010) and children n=594... (n=141) |
| 81 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016 (Conference Proceedings) | 2016 | Peer-reviewed | CZ/EU tHg, Cd, Pb occurrence in 33 species of fish purchased in Brno City (Czech Republic) markets from 17 FAO localities, September 2015–June 2016;... (n=159) |
| 82 | [[sources/chang2015-mercury-korean-infants-weaning\|Chang et al. 2015]]. *Mercury Exposure in Healthy Korean Weaning-Age Infants: Association with Growth, Feeding and Fish Intake*, International Journal of Environmental Research and Public Health | 2015 | Peer-reviewed | KR tHg occurrence in 252 healthy Korean infants (median age 11.1 months, range 6–22 months), 50% male; 2 cohorts: 2009/2010 (n=111) and... (n=252) |
| 83 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency (FERA) Report for UK Food Standards Agency | 2015 | Government report | GB Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, Sb occurrence in 3312 retail food samples from 24 UK locations, combined into 138 food categories and 28 food groups, all... (n=3312) |
| 84 | [[sources/lim2015-korea-kriefs-dietary-exposure-pb-cd-hg\|Lim et al. 2015]]. *Korean research project on the integrated exposure assessment of hazardous substances for food safety*, Environmental Health and Toxicology | 2015 | Peer-reviewed | KR Pb, Cd, tHg occurrence in Nationwide Korean population, all ages, 15 metropolitan areas and provinces, 102 sampling sites, 2010-2011 (n=4867) |
| 85 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | international/EU/US Cd concentrations |
| 86 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal) | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni occurrence in 57 adults (28 men, 29 women, age 19–49) from Baku, Azerbaijan; 18 food items analyzed; blood and hair... (n=57) |
| 87 | [[sources/ralston2014-selenium-hbv-methylmercury-seafood\|Ralston et al. 2014]]. *Selenium Health Benefit Values: Updated Criteria for Mercury Risk Assessments*, Archives of Environmental Contamination and Toxicology | 2014 | Peer-reviewed | US/WHO MeHg, tHg occurrence in Theoretical/comparative analysis using reported Se and CH3Hg concentrations in ocean fish and other seafoods |
| 88 | [[sources/minamata-convention-2013\|Programme 2013]]. *Minamata Convention on Mercury — Text and Annexes (2024 Edition)*, United Nations Environment Programme, Secretariat of the Minamata Convention on Mercury | 2013 | Government report | international Hg, MeHg concentrations |
| 89 | [[sources/efsa-mercury-methylmercury-2012\|EFSA 2012]]. *Scientific Opinion on the Risk for Public Health Related to the Presence of Mercury and Methylmercury in Food*, EFSA Journal 2012;10(12):2985 | 2012 | Government report | EU Hg, MeHg, iHg concentrations |
| 90 | [[sources/awata2011-nhanes-asian-dietary-metals-biomarker\|Awata et al. 2011]]. *Association of Dietary Intake and Biomarker Levels of Arsenic, Cadmium, Lead, and Mercury among Asian Populations in the United States: NHANES 2011–2012*, Environmental Health Perspectives | 2011 | Peer-reviewed | US tAs, iAs, Cd, Pb, tHg occurrence in US Asians and other racial/ethnic groups from NHANES 2011-2012 nationally representative sample; first NHANES cycle to oversample Asians |
| 91 | [[sources/farina-rocha-aschner-2011-mehg-mechanism\|Farina et al. 2011]]. *Mechanisms of Methylmercury-Induced Neurotoxicity: Evidence from Experimental Studies*, Life Sciences 89(15-16):555-563 | 2011 | Peer-reviewed | international MeHg concentrations |
| 92 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | international Cd, Pb concentrations |
| 93 | [[sources/bandara2010-cadmium-rice-sri-lanka-crf\|JMRS et al. 2010]]. *Chronic Renal Failure in Sri Lanka Caused by Elevated Dietary Cadmium: Trojan Horse of the Green Revolution*, Toxicology Letters 198(1):33–39 | 2010 | Peer-reviewed | LK Cd, Pb, Fe occurrence in Samples from Sri Lanka North Central Province (Anuradhapura, Polonnaruwa, Madawachchiya): rice (n≈40), pulses, fish (Tilapia, Channa), lotus rhizomes,... (n=140) |
| 94 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb concentrations |
| 95 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EU iAs, tAs concentrations |
| 96 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EU Cd concentrations |
| 97 | [[sources/atsdr-arsenic-toxprofile-2007\|ATSDR 2007]]. *Toxicological Profile for Arsenic*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2007 | Government report | US iAs, tAs concentrations |
| 98 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | US Sn concentrations |
| 99 | [[sources/jecfa-61st-methylmercury\|JECFA 2004]]. *Evaluation of Certain Food Additives and Contaminants (Methylmercury), 61st Meeting of JECFA*, WHO Technical Report Series 922 | 2004 | Government report | international MeHg concentrations |
| 100 | [[sources/epa-iris-methylmercury\|EPA 2001]]. *Methylmercury (MeHg) — IRIS Chemical Assessment Summary*, U.S. Environmental Protection Agency, Integrated Risk Information System | 2001 | Government report | US MeHg concentrations |
| 101 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | international Cd, Pb, Hg, MeHg, iAs, Sn concentrations |
<!-- END: hmi-source-legend -->
## Ranges by source, region, and variety

The dominant axis of variance in fish heavy-metal load is trophic position. Methylmercury biomagnification is multiplicative through each trophic step: small filter-feeders and herbivorous fish carry low Hg; mid-level predators carry moderate Hg; apex predators carry the highest Hg. Within a given species, individual variance is large and is driven by body size (older, larger individuals carry higher Hg because exposure accumulates over a lifetime), trophic specialization (an individual that feeds higher in the food web than average for its species will carry higher Hg), and waterbody history.

Marine versus freshwater origin is the secondary axis. Marine apex predators (shark, swordfish, king mackerel from the Gulf of Mexico, bigeye tuna, marlin, tilefish from the Gulf) routinely test in the high-Hg range; the FDA "Avoid" tier in the FDA/EPA fish-consumption advisory is built around these species. Freshwater wild fish from waterbodies near historic mining, chlor-alkali industry, or coal-fired power generation can carry Hg comparable to marine apex predators despite lower trophic position, because watershed Hg loading is locally elevated. Farmed freshwater fish (catfish, tilapia, farmed salmon) typically carry the lowest Hg because feed-mediated exposure is lower and lifespan is shorter than wild equivalents. See [[ingredients/freshwater-fish]] for the freshwater-specific synthesis.

Geographic variance is documented at the waterbody level. The Great Lakes carry an active fish-consumption advisory program because of legacy Hg + PCB loading. The Gulf of Mexico carries tilefish-specific advisories. Subsistence-fishing populations in the Arctic and in parts of the Amazon basin carry the highest documented chronic MeHg exposures globally because of cultural reliance on apex predators and marine mammals.

Cadmium in fin-fish is generally low because cadmium is not significantly biomagnified through the aquatic food web in the way mercury is; the dominant marine-food Cd source is bivalve molluscs ([[ingredients/bivalve-molluscs]], [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]]). Lead in fish is similarly low except where waterbody loading is elevated. Total arsenic in fin-fish is dominated by arsenobetaine and is not health-equivalent to inorganic arsenic; see [[metals/arsenic-total]] for the speciation interpretation rule.

## Processing effects

Methylmercury is bound to cysteine residues in fish muscle protein and is not reduced by ordinary cooking, smoking, or canning. Cooking can slightly concentrate Hg per gram of finished product through water loss, but the total methylmercury per serving is approximately conserved. Removing the skin reduces lipophilic contaminants (PCBs, dioxins) but does not reduce methylmercury, because methylmercury is in the muscle tissue itself. Removing the dark muscle (where present) can slightly reduce per-serving methylmercury in some species, but is not a routine consumer practice.

Canning concentrates fish solids relative to fresh form (water loss, sometimes oil or sauce added). The methylmercury load per can of tuna or sardines reflects the source-fish methylmercury level adjusted for canning yield. Smoking does not reduce methylmercury; some smoking processes can add trace metals from smoke or curing salts, but this is small relative to the underlying matrix load. Surimi (paste from low-trophic fish, used in imitation crab and similar products) carries lower Hg than the species mix would suggest because surimi is made from short-lived species deliberately.

For cadmium and lead in fish, where the matrix carries low baseline loads, processing effects are similarly small relative to source variability. The dominant determinant of finished-product metal load is still the species and sourcing decision, not the processing decision.

## Ingredient-derivative risk

Fish oil supplements (omega-3, EPA/DHA, cod liver oil) are a separate exposure pathway with distinct contamination patterns. Methylmercury is concentrated in muscle protein and is largely partitioned out of the oil fraction during pressing and refining; commercial fish oil typically carries lower MeHg than the source fish on a mass basis. However, the lipophilic contaminants (PCBs, dioxins) that the oil fraction does carry are concentrated in fish oil, and reputable manufacturers run molecular distillation to reduce these to acceptable levels. Cod liver oil specifically can carry higher cadmium and lead than refined fish oil because the liver is the storage organ for some metals. See [[products/dietary-supplements]] (Cat 16 supplement oil-based) for the supplement-specific routing.

Fish flour and fish protein concentrate, used as feed additives and in some fortification applications, can concentrate metals where they were present in the source fish. Fish sauce, where fish are fermented in salt for extended periods, carries metal concentrations broadly proportional to the source fish but with variability driven by fermentation length and salt source. Imitation surimi-based products carry the surimi base's lower Hg.

## Mitigation options

For fish, mitigation operates almost entirely at the sourcing and consumption-pattern levels. Unlike rice or cocoa, where agronomic and processing levers can substantially shift the finished-product metal load, fish methylmercury is determined by the species and waterbody at the point of catch and cannot be reduced through downstream processing.

**Sourcing levers** are the dominant intervention. Choosing low-trophic, short-lived species (sardines, anchovies, herring, salmon, tilapia, catfish) over apex predators (shark, swordfish, king mackerel, tilefish, bigeye tuna) reduces methylmercury exposure by one to two orders of magnitude. Farmed-fish sourcing typically reduces Hg below comparable wild-caught species. Geographic provenance matters: avoiding waterbodies with active fish-consumption advisories is the operational rule. See [[mitigation/supply-chain-screening]] for the sourcing-screening framework.

**Consumption-pattern levers** apply at the consumer level. The FDA/EPA joint fish-consumption advisory categorizes fish into three tiers (best choice, good choice, avoid) and recommends weekly serving counts calibrated by tier. Pregnant women, women of childbearing age, breastfeeding mothers, and young children are the priority audiences. Substituting two best-choice servings per week for one avoid-tier serving reduces methylmercury exposure substantially without losing the cardiovascular and neurodevelopmental benefits of fish in the diet.

**Testing and QC levers** are routine in brand QA. Lot-level methylmercury testing on incoming fish, particularly for high-Hg species and value-added products targeting infants and pregnancy populations, is standard practice in regulated supply chains. See [[mitigation/testing-and-qc]] for sampling-plan and method considerations; [[testing/icp-ms]] for the analytical method.

**Processing levers** are limited for methylmercury. Removing dark muscle and skin marginally reduces methylmercury in some species but does not change the order-of-magnitude exposure picture. For commercial preparation of low-Hg-target fish products, the dominant intervention is source-species selection upstream.

**Packaging and storage levers** are not consequential for methylmercury in fish; the metal is bound to muscle protein and does not migrate to packaging materials in a way that affects finished-product Hg load. Canned fish carries the standard tinplate-migration Sn consideration ([[mitigation/packaging-and-storage]]).

