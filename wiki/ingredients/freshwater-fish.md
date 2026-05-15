---
title: "Freshwater Fish"
type: ingredient
commodity: freshwater-fish
label: "Freshwater Fish"
aliases: [river fish, lake fish, inland fish, sport fish]
category: aquatic-protein
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [biomagnification, trophic-level, watershed-mining-history, age-and-size, ASGM-proximity, climate-driven-methylation]
lower_risk_variants: ["[[ingredients/farmed-tilapia]]"]
higher_risk_variants: ["[[ingredients/sport-fish-predatory]]"]
used_in_products: ["[[products/fish-containing-baby-foods]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 9
---

# Freshwater Fish

Freshwater fish are inland-water aquatic protein sources whose heavy-metal contamination profile differs materially from saltwater and marine fish. The defining difference is methylmercury biomagnification: freshwater systems with reducing sediments and microbial methylation activity (most notably in artisanal small-scale gold mining (ASGM) watersheds, mercury-impacted lakes, and historic industrial river basins) concentrate MeHg in piscivorous fish at levels that often exceed marine-fish equivalents. Sport-fishery advisories from US states, Canadian provinces, and the EFSA opinion on chronic methylmercury exposure target freshwater piscivores specifically.

This page is the structural anchor for freshwater-specific fish evidence. The broader [[ingredients/fish]] page covers cross-cutting fish-as-food properties; [[ingredients/saltwater-fish]] (when promoted) carries marine-specific evidence. Trophic level and fish age are the dominant within-species variance drivers, not species identity alone — a small, young pike from a low-Hg lake can carry less MeHg than a large, old walleye from the same lake.

## Climate-driven methylmercury trajectory

Freshwater wild fish MeHg concentrations are projected to rise substantially under climate change. [[sources/wu2025-climate-meghan-freshwater-fish-china|Wu et al. 2025]] (PNAS), drawing on approximately 13,000 fish mercury samples across 164 sampling sites in China spanning 2005 to 2020, projects that national average MeHg concentrations in freshwater wild fish will rise by approximately 60 percent by 2031 to 2060 under both SSP2-4.5 and SSP5-8.5 emission pathways. The dominant individual climate driver is increased solar radiation, which enhances photochemical methylation in aquatic systems (approximately 53 percent contribution to the projected increase).

Three baseline findings from this dataset anchor the trajectory. First, freshwater wild fish carry MeHg concentrations 2.9 to 6.2 times higher than freshwater farmed fish across trophic classes, and 1.7 times higher than marine wild fish in the same trophic class. Second, freshwater fish consumption accounted for 51 percent of China's total fish MeHg intake in 2011. Third, mean MeHg in freshwater wild fish of typical adult size (40 ± 5 cm body length) was 30.9 µg/kg wet weight, comparable to US shrimp (30 to 40 µg/kg ww), a quantity Western consumers and US regulators treat as a meaningful MeHg exposure source.

The mechanism, climate-driven enhancement of microbial and photochemical methylation in freshwater systems, is not specific to China, but the model is parameterized on Chinese data. Parallel datasets from North American, European, and other Asian freshwater systems would strengthen the geographic generalization substantially. See [[synthesis/climate-metals-tradeoffs]] for the full synthesis and [[synthesis/subsistence-fishing-mehg-disparity]] for the equity dimension.

## Routing

Direct evidence for freshwater fish lands here; the broader fish category fans out via the routing layer to [[ingredients/fish]] when sources address fish generally rather than freshwater specifically. Product-level routing flows through [[products/fish-containing-baby-foods]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. tHg and MeHg are the central concerns for this commodity; Pb and Cd are secondary; iAs is generally low in freshwater fish but elevated in some mining-impacted watersheds. Synthesis values will populate as contributing source pages are integrated per Part 9.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|Rusko et al. 2026]]. *Risk-Benefit Assessment of Mercury, Lead, Cadmium, and Arsenic in Inland Fish from Latvian Lakes*, Foods | 2026 | Peer-reviewed | tHg, MeHg, Pb, Cd, and tAs in 460 inland fish muscle samples (7 species, 5 Latvian lakes) by ICP-MS and CV-AAS; Pb, Cd, and tAs all below LOQ across all samples; MeHg dominant mercury form, with risk-benefit analysis identifying pregnant women and children as at-risk for high consumption of predatory species |
| 2 | [[sources/auzier-guimaraes2025-mercury-tapajos-fish\|Auzier et al. 2025]]. *Systematic review and spatiotemporal assessment of mercury concentration in fish from the Tapajós River Basin: implications for environmental and human health*, ACS Environmental Au | 2025 | Peer-reviewed | Systematic review of tHg in fish muscle from the Tapajós River Basin, Brazil (36 studies, 143 species, 14,113 individuals, 1992–2022); tHg range 0.01–3.82 mg/kg with piscivorous species highest; 89% of food species showed THQ ≥1 in at least one sub-basin under local average consumption, linked to artisanal gold mining hotspots |
| 3 | [[sources/dietz2025-arctic-mercury-isotopes-greenland\|Dietz et al. 2025]]. *Stable isotopes unveil ocean transport of legacy mercury into Arctic food webs*, Nature Communications | 2025 | Peer-reviewed | GL tHg, MeHg occurrence in Arctic char, shorthorn sculpin, ringed seal, glaucous gull, polar bear, and peat samples across Greenland (Central West, Northwest,... |
| 4 | [[sources/fuenteslopez2025-colombia-freshwater-fish-mercury\|Katerin et al. 2025]]. *Presence of Nematodes, Mercury Concentrations, and Liver Pathology in Carnivorous Freshwater Fish from La Mojana, Sucre, Colombia: Assessing Fish Health and Potential Human Health Risks*, Archives of Environmental Contamination and Toxicology | 2025 | Peer-reviewed | CO tHg occurrence in 326 carnivorous freshwater fish specimens, 9 species, San Jorge River basin, La Mojana (Sucre), Colombia; sampled September 2022... (n=326) |
| 5 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Heavy metals, trace elements, and nutrients in traditional Inuit country foods: Assessing risks and benefits for pregnant women in Nunavik, Canada*, Science of the Total Environment | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/jermilova2025-mackenzie-mercury-fish-bayesian\|Jermilova et al. 2025]]. *Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis*, Integrated Environmental Assessment and Management | 2025 | Peer-reviewed | Bayesian network risk modelling of tHg and MeHg in 5 freshwater fish species (lake whitefish, northern pike, walleye, burbot, lake trout) from the Mackenzie Basin and Great Slave Lake, Canada (2005–2020 monitoring, n=1,044); northern pike mean 0.938 µg/g wet weight; dietary intake assessed against Health Canada, WHO, and USEPA pTWI thresholds for Indigenous communities |
| 8 | [[sources/lepak2025-mercury-sport-fish-colorado-correction\|Lepak et al. 2025]]. *Correction: Mercury Concentrations in Sport Fish from Colorado Reservoirs*, PLOS ONE | 2025 | Peer-reviewed | Corrected tHg and MeHg concentrations in sport fish (walleye, northern pike, smallmouth bass) from Colorado reservoirs, US; formal correction notice superseding previously published values, relevant to US freshwater sport-fish consumption advisory context |
| 9 | [[sources/lucchini2025-amazon-mercury-co-exposures\|Lucchini et al. 2025]]. *Mercury contamination in the Amazon Basin: fish consumption, co-exposures, and health implications for indigenous and riverside communities*, Annals of Global Health | 2025 | Peer-reviewed | BR Hg, MeHg, tHg occurrence in Review of studies covering Amazonian fish species and indigenous/riverside human populations; fish Hg concentrations 0.10–4.73 µg/g; hair mercury... |
| 10 | [[sources/naz2025-trace-elements-punjnad-fish\|Naz et al. 2025]]. *Trace elements in fish species from the Punjnad headworks: bioaccumulation and human health risk assessment*, PLoS ONE | 2025 | Peer-reviewed | Cd, Cu, Pb, and Ni in liver, gills, and muscle of 5 freshwater fish species from the Punjnad headworks, Punjab, Pakistan (AAS, n=27; 3 seasons); carnivorous Wallago attu highest in all metals; Cd and Pb THQ >1 for regular consumers of all 5 species |
| 11 | [[sources/paul2025-meghna-fish-arsenic\|Paul et al. 2025]]. *Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications*, PLoS One | 2025 | Peer-reviewed | tAs in muscle of 10 small indigenous freshwater fish species from the Lower Meghna River, Bangladesh (n=300 muscle samples, 10 stations, 3 seasons); 5 species exceeded the WHO threshold of 1 mg/kg in at least one season; pre-monsoon concentrations highest; benthic carnivores showed greatest bioaccumulation |
| 12 | [[sources/shumba2025-tilapia-mercury-zambia-mining\|Shumba et al. 2025]]. *Assessment of total mercury (Hg) in soil, sediment, and tilapia fish (Oreochromis niloticus) and health risk assessment among residents of Kitwe mining area, Zambia*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | ZM tHg occurrence in Tilapia (Oreochromis niloticus), 12–15 cm, from Kafue River tributaries near Kitwe copper mining area (n=32 mining, n=47 non-mining),... (n=79) |
| 13 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | LK Cd, Pb, iAs, tAs, Al, Cr, Ni, Sn, tHg occurrence in 57 studies (of 1,067 identified) reporting food and water quality in Sri Lanka CKDu-endemic areas, primarily North Central... (n=57) |
| 14 | [[sources/venant2025-lake-victoria-sardine-cd-pb\|Venant et al. 2025]]. *Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania*, Food Science & Nutrition | 2025 | Peer-reviewed | Cd and Pb in 279 sardine (Rastrineobola argentea) samples from 3 Tanzanian Lake Victoria regions in fresh and dried forms (ICP); all samples below FAO/WHO limits; median Cd 12 ppb, Pb 81 ppb dry weight; all health risk metrics below thresholds of concern |
| 15 | [[sources/wu2025-climate-meghan-freshwater-fish-china\|Wu et al. 2025]]. *Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers*, Proceedings of the National Academy of Sciences | 2025 | Peer-reviewed | CN MeHg, tHg occurrence in Freshwater wild and farmed fish, marine wild fish sampled across China (22.5–49.4° N, 85.2–134.6° E, 2005–2020, 164 sampling... (n=13000) |
| 16 | [[sources/aljufaili2024-garra-shamal-oman\|Al et al. 2024]]. *Heavy metals in Garra shamal freshwater fish from Oman: accumulation and health risk*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | OM tAs, Cd, Cr, Co, Pb, Mn, tHg, Ni occurrence in Garra shamal fish collected from freshwater sites in Oman (n=120) |
| 17 | [[sources/barquero2024-mercury-bass-almaden-spain\|Barquero et al. 2024]]. *A preliminary assessment of mercury, methylmercury and other potentially toxic elements in largemouth bass (Micropterus salmoides) from the Almadén mining district*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | ES/EU tHg, MeHg, tAs, Pb, Sb occurrence in Largemouth bass (Micropterus salmoides) from a 34 km transect of the Valdeazogues River, Almadén mercury mining district, Ciudad... |
| 18 | [[sources/escobar-camacho2024-mercury-fish-ecuador-amazon\|Escobar-Camacho et al. 2024]]. *Mercury in aquatic ecosystems of two indigenous communities in the Piedmont Ecuadorian Amazon: evidence from fish, water, and sediments*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | EC tHg, MeHg occurrence in Freshwater fish from Cofán-Bermejo and Dureno indigenous territory rivers, Sucumbíos Province, Ecuador; also water and sediment samples from... (n=120) |
| 19 | [[sources/gupta2024-tilapia-heavy-metals-cauvery-india\|Gupta et al. 2024]]. *Assessment of human health risks posed by toxic heavy metals in Tilapia fish (Oreochromis mossambicus) from the Cauvery River, India*, Frontiers in Public Health | 2024 | Peer-reviewed | IN Cr, Cd, Pb, Ni occurrence in 16 adult Tilapia fish (Oreochromis mossambicus) collected from 4 sites along the Cauvery River near Erode, Tamil Nadu,... (n=16) |
| 20 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 21 | [[sources/janiga2024-alpine-bullhead-metals\|Janiga et al. 2024]]. *Heavy metals in alpine bullhead fish (Cottus gobio) after flash flood in the Tatra mountains*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | SK tHg, Zn, Mo, Rb, Sr occurrence in Cottus gobio (alpine bullhead) collected from Tatra mountain streams after 2023 flash flood (n=66) |
| 22 | [[sources/kovacik2024-grass-carp-muscle-microelements\|Kovacik et al. 2024]]. *Microelements, Fatty Acid Profile, and Selected Biomarkers in Grass Carp (Ctenopharyngodon idella) Muscle Tissue: Seasonal Variations and Health Risk Assessment*, Research (journal not specified in text; published online 9 May 2024) | 2024 | Peer-reviewed | Al, tAs, Cd, Cr, tHg, Ni, and Pb in dorsal muscle of 36 grass carp from a Slovak agricultural-zone pond (ICP-OES + CV-AAS; summer vs autumn); Cd and Co below LOQ in all samples; Hg and Ni jointly drive 49% of total hazard quotient; TTHQ 0.27–0.76 across individuals |
| 23 | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|Laoye et al. 2024]]. *Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review*, F1000Research | 2024 | Peer-reviewed | NG Pb, Cd, tHg, iAs, tAs, Al occurrence in 64 studies (screened from 10,212) reporting heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria (Lagos,... (n=64) |
| 24 | [[sources/najem2024-metals-common-carp-iraq\|Najem et al. 2024]]. *Bioaccumulation of lead, arsenic, and mercury in vital organs of common carp (Cyprinus carpio L.): Assessment of pathological effects and possible hazards associated with human consumption*, Open Veterinary Journal | 2024 | Peer-reviewed | IQ tAs, Pb, tHg occurrence in 10 common carp (Cyprinus carpio L.) from local Baqubah markets, Diyala province, Iraq; fish sourced from aquaculture in... (n=10) |
| 25 | [[sources/paez-osuna2024-fish-mercury-selenium-mexico\|Páez-Osuna et al. 2024]]. *Mercury and selenium in three fish species from a dam 20 months after a mine-tailing spill in the SE Gulf of California ecoregion, Mexico* | 2024 | Peer-reviewed | MX tHg, Se occurrence in Cyprinus carpio, Oreochromis aureus, and Micropterus salmoides from El Comedero dam, Sinaloa, Mexico, 20 months post mine-tailing spill |
| 26 | [[sources/paezosuna2024-tilapia-mining-dams\|Páez-Osuna et al. 2024]]. *Tilapia as a model fish for biomonitoring of metal pollution in dams associated with mining watersheds: contrasting diagnosis from different tissues and health risk assessment*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | MX Cd, Pb, Cu, Zn occurrence in Blue tilapia (Oreochromis aureus) from 11 mining-watershed dams in SE Gulf of California region, Sinaloa, Mexico; collected during... (n=320) |
| 27 | [[sources/paz-suconota2024-mercury-fish-pastaza-ecuador\|Paz-Suconota et al. 2024]]. *Assessment of total mercury content in fish muscle tissue from the middle basin of the Pastaza River, Ecuador*, PLOS ONE | 2024 | Peer-reviewed | EC tHg occurrence in Multiple freshwater fish species (carnivores, herbivores, omnivores, detritivores) from two sites in the middle basin of the Pastaza... (n=40) |
| 28 | [[sources/shaalan2024-nile-tilapia-heavy-metals-egypt\|Shaalan 2024]]. *Hazardous effects of heavy metal pollution on Nile tilapia in the aquatic ecosystem of the Eastern Delta in Egypt*, BMC Veterinary Research | 2024 | Peer-reviewed | EG Pb, Cd, tHg, Cr, Ni, Cu, Zn occurrence in Adult Nile tilapia (Oreochromis niloticus) from Damietta branch of Nile River and El-Rayah El-Tawfeeky canal, Benha City, Egypt;... (n=120) |
| 29 | [[sources/abbas2023-heavy-metals-fish-egypt-aquaculture\|Abbas et al. 2023]]. *Heavy Metals Assessment and Health Risk to Consumers of Two Commercial Fish Species from Polyculture Fishponds in El-Sharkia and Kafr El-Sheikh, Egypt: Physiological and Biochemical Study*, Biological Trace Element Research | 2023 | Peer-reviewed | EG Pb, Cd, Cu, Fe, Mn, Zn occurrence in Bolti (Oreochromis niloticus / Nile tilapia) and Topara (Chelon ramada / thinlip mullet) from 7 El-Sharkia (ES) and... (n=45) |
| 30 | [[sources/egbe2023-heavy-metals-tilapia-cameroon\|Egbe et al. 2023]]. *Heavy metal exposure risk associated with ingestion of Oreochromis niloticus and Coptodon kottae harvested from a lacustrine ecosystem*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 31 | [[sources/hoy2023-arsenic-speciation-freshwater-fish\|Hoy et al. 2023]]. *Arsenic speciation in freshwater fish: challenges and research needs*, Food Quality and Safety | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 32 | [[sources/hull2023-arsenic-lake-foodweb\|Hull et al. 2023]]. *Littoral sediment arsenic concentrations predict arsenic trophic transfer and human health risk in contaminated lakes*, PLoS ONE | 2023 | Peer-reviewed | US tAs, iAs occurrence in Organisms from 10 urban lakes in Puget Sound lowlands, Washington State; includes periphyton, phytoplankton, zooplankton, snails, insect larvae,... (n=10) |
| 33 | [[sources/hussein2023-freshwater-marine-fish-egypt\|Hussein et al. 2023]]. *Risk assessment of toxic residues among some freshwater and marine water fish species*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | EG Pb, Cd, tHg, tAs, Al occurrence in Six fish species (n=20 each) from El-Obour city fish market, Egypt; freshwater: Oreochromis niloticus, Mugil cephalus, Lates niloticus;... (n=120) |
| 34 | [[sources/lepak2023-sport-fish-mercury-colorado\|Lepak et al. 2023]]. *Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health*, PLOS ONE | 2023 | Peer-reviewed | US tHg occurrence in Northern pike (Esox lucius), smallmouth bass (Micropterus dolomieu), and walleye (Sander vitreus) from 32 Colorado reservoirs; Hg data... (n=864) |
| 35 | [[sources/marriott2023-lake-victoria-aquaculture-biogeochemistry\|Marriott et al. 2023]]. *Considerations for environmental biogeochemistry and food security for aquaculture around Lake Victoria, Kenya*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | KE tAs, Cd, Cr, Pb, Al, Ni occurrence in Wild and aquaculture Nile tilapia from Winam Gulf, Lake Victoria, Kenya; water collected 2018-2019 |
| 36 | [[sources/sawe2023-fish-metals-lake-manyara-tanzania\|Sawe et al. 2023]]. *Assessment of Potentially Toxic Metals in Fish from Lake Manyara, Northern Tanzania*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 37 | [[sources/sirisangarunroj2023-thai-fish-toxic-elements\|Sirisangarunroj et al. 2023]]. *Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand*, Foods 2023, 12, 3967 | 2023 | Peer-reviewed | tAs, Cd, tHg, and Pb in 15 commonly consumed Thai fish species (7 freshwater, 8 marine) from Bangkok markets by ICP-MS-MS (AOAC 2015.01); Pb below LOQ in all species; high tAs risk identified for young children consuming certain freshwater and marine species |
| 38 | [[sources/stahl2023-us-river-fish-mercury\|Stahl et al. 2023]]. *Contaminants in fish from U.S. rivers: Probability-based national assessments*, Science of the Total Environment | 2023 | Peer-reviewed | US tHg occurrence in Fish fillet composites from 353 U.S. river sites (2013–14) and 290 sites (2018–19), sampled under EPA National Rivers... (n=643) |
| 39 | [[sources/willacker2023-mercury-fish-snake-river\|Willacker et al. 2023]]. *Reservoir Stratification Modulates the Influence of Impoundments on Fish Mercury Concentrations along an Arid Land River System*, Environmental Science & Technology | 2023 | Peer-reviewed | US tHg, MeHg occurrence in Smallmouth Bass (Micropterus dolomieu) collected from reservoir, tailrace, and free-flowing reaches along 853 km of the Snake River... |
| 40 | [[sources/zahran2023-mercury-tilapia-nannochloropsis\|Zahran et al. 2023]]. *Toxicity Evaluation, Oxidative, and Immune Responses of Mercury on Nile Tilapia: Modulatory Role of Dietary Nannochloropsis oculata* | 2023 | Peer-reviewed | EG tHg occurrence in Nile tilapia (Oreochromis niloticus, 45–50 g) in four groups (n=30/group in triplicate), exposed to 0.3 mg/L HgCl2 sub-lethal... (n=120) |
| 41 | [[sources/rundio2022-mercury-trout-california\|Rundio et al. 2022]]. *High mercury concentrations in steelhead/rainbow trout, sculpin, and terrestrial invertebrates in a stream-riparian food web in coastal California*, Ecotoxicology | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 42 | [[sources/vainio2022-baltic-mercury-food-web\|Vainio et al. 2022]]. *Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits*, Environmental Science & Technology | 2022 | Peer-reviewed | *[awaiting synthesis]* |
| 43 | [[sources/cleary2021-fish-consumption-advisories-usa\|Cleary et al. 2021]]. *Comparison of Recreational Fish Consumption Advisories Across the USA*, Current Environmental Health Reports | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 44 | [[sources/mahjoub2021-morocco-fish-metals\|Mahjoub et al. 2021]]. *Mercury, Lead, and Cadmium in the Muscles of Five Fish Species from the Mechraa-Hammadi Dam in Morocco and Health Risks for Their Consumers*, Journal of Toxicology | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 45 | [[sources/melnyk2021-mercury-anadromous-fish-penobscot\|Melnyk et al. 2021]]. *Risks from mercury in anadromous fish collected from Penobscot River, Maine*, Science of the Total Environment | 2021 | Peer-reviewed | US tHg occurrence in Composite samples of 6 anadromous fish species (alewife, American shad, blueback herring, rainbow smelt, striped bass, sea lamprey)... (n=75) |
| 46 | [[sources/rajeshkumar2018-taihu-lake-fish-oyster-metals\|Rajeshkumar et al. 2018]]. *Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China*, Chemosphere | 2018 | Peer-reviewed | *[awaiting synthesis]* |
| 47 | [[sources/eaglessmith2016-freshwater-fish-mercury-western-us-canada\|Eagles-Smith et al. 2016]]. *Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada*, Science of The Total Environment (2016, in press 2015) | 2016 | Peer-reviewed | *[awaiting synthesis]* |
| 48 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

