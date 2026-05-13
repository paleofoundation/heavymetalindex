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
drivers: [biomagnification, trophic-level, watershed-mining-history, age-and-size, ASGM-proximity]
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
| 3 | [[sources/dietz2025-arctic-mercury-isotopes-greenland\|Dietz et al. 2025]]. *Stable isotopes unveil ocean transport of legacy mercury into Arctic food webs*, Nature Communications | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/fuenteslopez2025-colombia-freshwater-fish-mercury\|Katerin et al. 2025]]. *Presence of Nematodes, Mercury Concentrations, and Liver Pathology in Carnivorous Freshwater Fish from La Mojana, Sucre, Colombia: Assessing Fish Health and Potential Human Health Risks*, Archives of Environmental Contamination and Toxicology | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/jermilova2025-mackenzie-mercury-fish-bayesian\|Jermilova et al. 2025]]. *Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis*, Integrated Environmental Assessment and Management | 2025 | Peer-reviewed | Bayesian network risk modelling of tHg and MeHg in 5 freshwater fish species (lake whitefish, northern pike, walleye, burbot, lake trout) from the Mackenzie Basin and Great Slave Lake, Canada (2005–2020 monitoring, n=1,044); northern pike mean 0.938 µg/g wet weight; dietary intake assessed against Health Canada, WHO, and USEPA pTWI thresholds for Indigenous communities |
| 6 | [[sources/lepak2025-mercury-sport-fish-colorado-correction\|Lepak et al. 2025]]. *Correction: Mercury Concentrations in Sport Fish from Colorado Reservoirs*, PLOS ONE | 2025 | Peer-reviewed | Corrected tHg and MeHg concentrations in sport fish (walleye, northern pike, smallmouth bass) from Colorado reservoirs, US; formal correction notice superseding previously published values, relevant to US freshwater sport-fish consumption advisory context |
| 7 | [[sources/naz2025-trace-elements-punjnad-fish\|Naz et al. 2025]]. *Trace elements in fish species from the Punjnad headworks: bioaccumulation and human health risk assessment*, PLoS ONE | 2025 | Peer-reviewed | Cd, Cu, Pb, and Ni in liver, gills, and muscle of 5 freshwater fish species from the Punjnad headworks, Punjab, Pakistan (AAS, n=27; 3 seasons); carnivorous Wallago attu highest in all metals; Cd and Pb THQ >1 for regular consumers of all 5 species |
| 8 | [[sources/paul2025-meghna-fish-arsenic\|Paul et al. 2025]]. *Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications*, PLoS One | 2025 | Peer-reviewed | tAs in muscle of 10 small indigenous freshwater fish species from the Lower Meghna River, Bangladesh (n=300 muscle samples, 10 stations, 3 seasons); 5 species exceeded the WHO threshold of 1 mg/kg in at least one season; pre-monsoon concentrations highest; benthic carnivores showed greatest bioaccumulation |
| 9 | [[sources/shumba2025-tilapia-mercury-zambia-mining\|Shumba et al. 2025]]. *Assessment of total mercury (Hg) in soil, sediment, and tilapia fish (Oreochromis niloticus) and health risk assessment among residents of Kitwe mining area, Zambia*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 10 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 11 | [[sources/venant2025-lake-victoria-sardine-cd-pb\|Venant et al. 2025]]. *Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania*, Food Science & Nutrition | 2025 | Peer-reviewed | Cd and Pb in 279 sardine (Rastrineobola argentea) samples from 3 Tanzanian Lake Victoria regions in fresh and dried forms (ICP); all samples below FAO/WHO limits; median Cd 12 ppb, Pb 81 ppb dry weight; all health risk metrics below thresholds of concern |
| 12 | [[sources/wu2025-climate-meghan-freshwater-fish-china\|Wu et al. 2025]]. *Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers*, Proceedings of the National Academy of Sciences | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 13 | [[sources/barquero2024-mercury-bass-almaden-spain\|Barquero et al. 2024]]. *A preliminary assessment of mercury, methylmercury and other potentially toxic elements in largemouth bass (Micropterus salmoides) from the Almadén mining district*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 14 | [[sources/escobar-camacho2024-mercury-fish-ecuador-amazon\|Escobar-Camacho et al. 2024]]. *Mercury in aquatic ecosystems of two indigenous communities in the Piedmont Ecuadorian Amazon: evidence from fish, water, and sediments*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 15 | [[sources/gupta2024-tilapia-heavy-metals-cauvery-india\|Gupta et al. 2024]]. *Assessment of human health risks posed by toxic heavy metals in Tilapia fish (Oreochromis mossambicus) from the Cauvery River, India*, Frontiers in Public Health | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 16 | [[sources/kovacik2024-grass-carp-muscle-microelements\|Kovacik et al. 2024]]. *Microelements, Fatty Acid Profile, and Selected Biomarkers in Grass Carp (Ctenopharyngodon idella) Muscle Tissue: Seasonal Variations and Health Risk Assessment*, Research (journal not specified in text; published online 9 May 2024) | 2024 | Peer-reviewed | Al, tAs, Cd, Cr, tHg, Ni, and Pb in dorsal muscle of 36 grass carp from a Slovak agricultural-zone pond (ICP-OES + CV-AAS; summer vs autumn); Cd and Co below LOQ in all samples; Hg and Ni jointly drive 49% of total hazard quotient; TTHQ 0.27–0.76 across individuals |
| 17 | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|Laoye et al. 2024]]. *Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review*, F1000Research | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 18 | [[sources/najem2024-metals-common-carp-iraq\|Najem et al. 2024]]. *Bioaccumulation of lead, arsenic, and mercury in vital organs of common carp (Cyprinus carpio L.): Assessment of pathological effects and possible hazards associated with human consumption*, Open Veterinary Journal | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 19 | [[sources/paezosuna2024-tilapia-mining-dams\|Páez-Osuna et al. 2024]]. *Tilapia as a model fish for biomonitoring of metal pollution in dams associated with mining watersheds: contrasting diagnosis from different tissues and health risk assessment*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 20 | [[sources/paz-suconota2024-mercury-fish-pastaza-ecuador\|Paz-Suconota et al. 2024]]. *Assessment of total mercury content in fish muscle tissue from the middle basin of the Pastaza River, Ecuador*, PLOS ONE | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 21 | [[sources/hussein2023-freshwater-marine-fish-egypt\|Hussein et al. 2023]]. *Risk assessment of toxic residues among some freshwater and marine water fish species*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 22 | [[sources/lepak2023-sport-fish-mercury-colorado\|Lepak et al. 2023]]. *Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health*, PLOS ONE | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 23 | [[sources/marriott2023-lake-victoria-aquaculture-biogeochemistry\|Marriott et al. 2023]]. *Considerations for environmental biogeochemistry and food security for aquaculture around Lake Victoria, Kenya*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 24 | [[sources/sirisangarunroj2023-thai-fish-toxic-elements\|Sirisangarunroj et al. 2023]]. *Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand*, Foods 2023, 12, 3967 | 2023 | Peer-reviewed | tAs, Cd, tHg, and Pb in 15 commonly consumed Thai fish species (7 freshwater, 8 marine) from Bangkok markets by ICP-MS-MS (AOAC 2015.01); Pb below LOQ in all species; high tAs risk identified for young children consuming certain freshwater and marine species |
| 25 | [[sources/stahl2023-us-river-fish-mercury\|Stahl et al. 2023]]. *Contaminants in fish from U.S. rivers: Probability-based national assessments*, Science of the Total Environment | 2023 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

