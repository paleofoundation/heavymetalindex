---
title: "Shellfish"
type: ingredient
commodity: shellfish
label: "Shellfish"
aliases: ["crustaceans and molluscs", seafood-shellfish, shrimp, crustaceans]
category: aquatic-protein
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 300]
    p95_ppb: 800
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: 4000
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [10, 80]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: 500
    confidence: high
    n_studies: 14
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [100, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [500, 5000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [1000, 10000]
    p95_ppb: 20000
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [filter-feeding, bioaccumulation, sediment-burden, harvest-water-quality, depuration-status]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/bivalve-molluscs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 56
---

# Shellfish

Shellfish is the regulatory umbrella covering crustaceans (shrimp, crab, lobster, crayfish) and molluscs (mussels, clams, oysters, scallops, octopus, squid). The category groups together aquatic invertebrates whose feeding ecology — filter-feeding for bivalves, scavenging and detritivory for crustaceans — produces a distinctive contamination signal: high cadmium concentrations from sediment-water concentration gradients, total arsenic in the high-ppb-to-low-ppm range driven primarily by non-toxic arsenobetaine but with variable inorganic arsenic fractions, and occasional Pb spikes in waters with industrial or marine-paint legacies.

The cadmium-shellfish relationship is the strongest single-metal signal in the dietary-exposure literature: EFSA, JECFA, and the FDA all treat bivalve molluscs as a leading dietary Cd source for shellfish-consuming populations, comparable to organ meats and cereals. The total-vs-inorganic arsenic distinction (per CLAUDE.md Part 14) is non-negotiable for shellfish; tAs values appear alarmingly high but most of that signal is arsenobetaine, which is excreted intact and lacks the toxicity of iAs.

This page is the structural umbrella; [[ingredients/bivalve-molluscs]] carries bivalve-specific evidence and is the higher-risk subcategory for Cd. Crustacean-specific detail will land on dedicated pages as the corpus grows.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=10 | 50–300 | 800 | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| Cd | n=13 | 200–1500 | 4000 | high | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| iAs | n=6 | 10–80 | — | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| tAs | n=10 | 1000–10000 | 20000 | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/taylor2025-seafood-benefits-contaminants\|2]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|3]] |
| tHg | n=14 | 20–200 | 500 | high | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| Ni | n=5 | 100–1000 | — | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|3]] |
| Al | n=2 | 500–5000 | — | low | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|1]], [[sources/berber2024-crayfish-metal-content-turkey\|2]] |
| Cr | n=4 | 100–500 | — | medium | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]], [[sources/ramos-miras2023-pte-shrimp-ecuador\|3]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

Direct evidence for shellfish-as-category lands here. Bivalve-specific evidence routes to [[ingredients/bivalve-molluscs]]; product-level routing flows through seafood-bearing baby food and prepared-meal product pages.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd, tAs, and the iAs/tAs ratio are the priority synthesis targets given seven contributing source pages already in scope. Speciation discipline (per Part 14) is load-bearing: never substitute tAs for iAs in shellfish prose or values.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | CN Sn occurrence in 2014 food samples from Zhejiang Province, China, collected 2018–2019 using multistage stratified random sampling: fresh vegetables (n=673), tea... (n=2014) |
| 2 | [[sources/brima2025-african-foods-uk-metals\|Brima et al. 2025]]. *Assessment of Human Health Risk Based on Analysis of Potentially Toxic Elements in African Foods Sold in the UK Market*, African Journal of Agriculture and Food Science | 2025 | Peer-reviewed | GB tAs, Cd, tHg, Pb occurrence in African foods and non-food additives sold in the UK market and consumed by African communities (n=152) |
| 3 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 4 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | Methods paper validating an Al3+/Cu2+ fluorescent sensor via spiked-recovery in scallops and razor clams; no ambient shellfish Al concentrations reported |
| 5 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 6 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 7 | [[sources/singhato2025-thailand-seafood-heavy-metals\|Singhato et al. 2025]]. *Risk Assessment of Toxic Heavy Metal Exposure in Selected Seafood Species from Thailand*, Foods | 2025 | Peer-reviewed | TH tAs, Cd, tHg, Pb occurrence in 20 commonly consumed seafood species from Thailand (4 shrimp/prawn, 4 crab, 3 squid, 8 shellfish, 2 marine fish),... (n=60) |
| 8 | [[sources/taylor2025-seafood-benefits-contaminants\|Taylor et al. 2025]]. *Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies*, Foods | 2025 | Peer-reviewed | Broad secondary review of Hg, Pb, Cd, and tAs concentrations across fish and shellfish matrices, summarizing US FDA/EPA advisory frameworks and vulnerable-population guidance |
| 9 | [[sources/xia2025-whole-cell-biosensor-hg-food\|Xia et al. 2025]]. *Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals*, Foods | 2025 | Peer-reviewed | Methods paper validating a whole-cell biosensor for Hg2+ detection in spiked shellfish and fish matrices; no occurrence measurements reported |
| 10 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, MeHg, Cd, Pb, tAs, iAs occurrence in 138,281 test records for aquatic food products from the WHO Food Safety Collaborative Platform (FOSCOLLAB) database; covers fish,... (n=138281) |
| 11 | [[sources/berber2024-crayfish-metal-content-turkey\|Berber et al. 2024]]. *Metal content and fatty acid profiles in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake, Turkey: seasonal variation and health risk assessment*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | TR Fe, Zn, Al, Cu, Mn, Se, As, Hg, Cd, Pb occurrence in Pontastacus leptodactylus (narrow-clawed crayfish) from Atikhisar Dam Lake, Çanakkale, Turkey; monthly sampling over 12 months; male and female... |
| 12 | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|Bruno et al. 2024]]. *Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health*, Frontiers in Toxicology | 2024 | Peer-reviewed | IT/EU tAs, Cd, Pb, tHg, Ni, Cr occurrence in 80 specimens of Mytilus galloprovincialis (mussel) and 80 specimens of Tapes decussatus (clam) collected from Faro Lake, Messina,... (n=160) |
| 13 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | CN Ni occurrence in Zhejiang Province residents, 11 cities, 2018–2019; n=19,000 in consumption survey (n=2628) |
| 14 | [[sources/rohonczy2024-arctic-foodweb-cd-hg\|Rohonczy et al. 2024]]. *Cadmium and mercury trophic transfer in the Arctic marine food web of Hudson Bay*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CA Cd, tHg, MeHg occurrence in Multiple Arctic marine species from Hudson Bay, Canada: blue mussel, common eider, sculpin, Arctic cod, ringed seal (n=781) |
| 15 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | iAs, tAs occurrence in Systematic review of published arsenic occurrence and speciation studies in marine organisms; no single primary cohort |
| 16 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 17 | [[sources/bezrodnykh2023-crayfish-chitosan-residual-metals\|Bezrodnykh et al. 2023]]. *A Walkway from Crayfish to Oligochitosan*, Applied Sciences | 2023 | Peer-reviewed | RU Fe, Cr, Ni, Pb, Cd, tHg, tAs, Al occurrence in One laboratory processing batch from 4 kg fresh-frozen narrow-toed crayfish (Actacus leptodactylus) bought on a local market and... (n=1) |
| 18 | [[sources/bjerregaard2023-mercury-mussels-denmark\|Bjerregaard et al. 2023]]. *In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | DK/EU tHg occurrence in Blue mussels (Mytilus edulis), periwinkles (Littorina littorea), brown shrimps, and amphipods from Nissum Broad coastal stations, Denmark; also... (n=137) |
| 19 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 20 | [[sources/de-anda-montanez2023-baja-red-crab-elements\|Anda-Montanez et al. 2023]]. *Spatial and Temporal Variability of Trace and Macro Elements in the Red Crab Pleuroncodes planipes in the Pacific Coast of the Baja California Peninsula, Mexico*, Animals | 2023 | Peer-reviewed | MX Cd, Cu, Fe, Mn, Ni, Pb, Zn, Ca, Mg occurrence in 279 whole adult red crabs (Pleuroncodes planipes, 32-40 mm body size) collected during three research cruises off the... (n=279) |
| 21 | [[sources/diogene2023-rascs-contaminants-seafood\|Diogène et al. 2023]]. *Risk Assessment Strategies for Contaminants in Seafood (RASCS)*, EFSA Supporting Publications 2023:EN-8419 | 2023 | Government report | EU tAs, iAs, Pb, Cd, tHg, MeHg, Ni, Cr, Al occurrence in Strategy/programmatic report from a seven-institution EU consortium (IRTA Spain coordinator, CREDA Spain, IPMA Portugal, ISS Italy, Ghent University... |
| 22 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 23 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | CN iAs, tAs occurrence in Laboratory study using crab, scallop, turbot, and flounder seafood samples subjected to in vitro digestion (BARGE UBM method) |
| 24 | [[sources/onyegeme-okerenta2023-shellfish-nigeria\|Onyegeme-Okerenta et al. 2023]]. *Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment*, Environmental Analysis, Health and Toxicology | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb, Ni occurrence in Three shellfish species (Penaeus monodon, Crassostrea rhizophorae, Tympanostomus fuscatus) from three rivers in Niger Delta, Nigeria (Buguma, Krakrama,... (n=27) |
| 25 | [[sources/ramos-miras2023-pte-shrimp-ecuador\|Ramos-Miras et al. 2023]]. *Potentially toxic element bioaccumulation in consumed indoor shrimp farming associated with diet, water and sediment levels*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EC/EU tAs, Cd, Cr, Ni, Pb, tHg occurrence in Pacific White shrimp (Litopenaeus vannamei) from indoor cage farming in El Oro Province, Ecuador; head and tail tissues... |
| 26 | [[sources/tolkou2023-fish-heavy-metals-review\|Tolkou et al. 2023]]. *Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury in Fish: Effects on the Sustainable and Healthy Development of Aquatic Life and Human Consumers*, Sustainability | 2023 | Peer-reviewed | AR/BD/CN tAs, Cr, Cd, Pb, tHg occurrence in Narrative literature review of >50 fish species across 13 countries on 4 continents (Asia, Europe, Africa, Latin America).... |
| 27 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 28 | [[sources/cegolon2022-hg-hair-trieste\|Cegolon et al. 2022]]. *Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy)*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | IT/EU tHg, MeHg occurrence in General population residents of Friuli Venezia Giulia (FVG) coastal region, Gulf of Trieste, Italy; convenience sample recruited at... (n=301) |
| 29 | [[sources/lordan2022-brown-crab-cadmium-review\|Lordan et al. 2022]]. *Cadmium: A Focus on the Brown Crab (Cancer pagurus) Industry and Potential Human Health Risks*, Toxics | 2022 | Peer-reviewed | IE/EU/NO Cd occurrence in Narrative review of the brown crab (Cancer pagurus) industry and cadmium exposure; tabulates cadmium concentrations compiled from prior... |
| 30 | [[sources/moura2022-hg-jaguaribe-estuary\|Moura et al. 2022]]. *Mercury in the Jaguaribe River Estuary, Northeast Brazil: Sources, Distribution, and Bioavailability*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | BR tHg occurrence in Shrimp (Littopenaeus vannamei), fish (Eugerres brasilianus, Cathorops spixii), sediments, and water from Jaguaribe River Estuary, Ceará, NE Brazil |
| 31 | [[sources/raju2021-bivalves-cagayan-philippines\|Raju et al. 2021]]. *Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines*, Scholars Academic Journal of Biosciences 9(10):256-258 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two bivalve species from Cagayan Valley, Philippines: freshwater clam (Corbicula fluminea) and marine mussel (Mytilus edulis); collected with... (n=2) |
| 32 | [[sources/valencia2021-canacao-bay-oyster-pb-cd\|Valencia et al. 2021]]. *Heavy metal accumulation and risk assessment of lead and cadmium in cultured oysters (Crassostrea iredalei) of Cañacao Bay, Philippines*, Sustinere: Journal of Environment and Sustainability 5(2), 64-78 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two hundred fourteen cultured slipper-cupped oysters (Crassostrea iredalei) of marketable shell length (45-55 mm) collected from three sampling... (n=214) |
| 33 | [[sources/dibella2020-augusta-meat-milk-seafood-metals\|Di et al. 2020]]. *Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment*, Frontiers in Public Health 8:273 | 2020 | Peer-reviewed | IT/EU tAs, Cd, Cr, tHg, Ni, Pb, Zn occurrence in Meat, milk, and seafood from the Augusta-Melilli-Priolo industrial area in Southern Italy; seafood pooled across fish, mollusc, and... (n=Seafood from the Augusta Bay/Sicily study area plus terrestrial animal products from 26 farms: 5 bovine milk, 11 sheep/goat milk, 11 beef, and 3 pork samples.) |
| 34 | [[sources/pawlaczyk2020-mercury-canned-fish-poland\|Pawlaczyk et al. 2020]]. *Risk of Mercury Ingestion from Canned Fish in Poland*, Molecules | 2020 | Peer-reviewed | PL tHg, MeHg occurrence in Eighty-four canned fish products covering 25 brands from over 14 producers (19 brands of canned fish plus six... (n=84) |
| 35 | [[sources/romero-estevez2020-bivalves-santa-rosa-ecuador\|Romero-Estévez et al. 2020]]. *An Overview of Cadmium, Chromium, and Lead Content in Bivalves Consumed by the Community of Santa Rosa Island (Ecuador) and Its Health Risk Assessment*, Frontiers in Environmental Science 8:134 | 2020 | Peer-reviewed | EC/EU Cd, Cr, Pb occurrence in Fifty composite bivalve soft-tissue samples (~10 individuals per composite) of Anadara tuberculosa and Anadara similis (locally 'concha prieta',... (n=50) |
| 36 | [[sources/sepulveda2020-callista-clam-metals\|Humberto et al. 2020]]. *Trace metals in two wild populations of the squalid callista clam (Megapitaria squalida) in the southeastern Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2020 | Peer-reviewed | MX Cu, Cd, Cr, Ni, Pb, Zn, tAs, tHg occurrence in Wild Megapitaria squalida clams from Altata and Agiabampo Bays in the southeastern Gulf of California |
| 37 | [[sources/cfs2019-organotin-aquatic-hongkong\|Centre for Food Safety 2019]]. *Organotin Compounds in Aquatic Products Available at Local Markets*, Risk Assessment Studies Report No. 60, Centre for Food Safety, Hong Kong FEHD | 2019 | Government report | HK Sn occurrence in Fish, crustaceans, and molluscs collected from local markets in Hong Kong, October 2017 to June 2018; 201 fish,... (n=341) |
| 38 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU/NZ tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Australian total-diet survey: 88 food types, 508 prepared-food composite samples from all Australian states and territories, sampled May... (n=508) |
| 39 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg occurrence in Beijing general population; 25 foodstuff types collected from four sites, three replicates per foodstuff at each site (n=300) |
| 40 | [[sources/gongora-gomez2018-pen-shell-seasonal-metals\|Martin et al. 2018]]. *Seasonal levels of heavy metals in soft tissue and muscle of the pen shell Atrina maura from a farm in the southeastern coast of the Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2018 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Farmed pen shell from the southeastern Gulf of California, sampled seasonally from summer 2011 to summer 2012 |
| 41 | [[sources/harding2018-bay-fundy-methylmercury\|Harding et al. 2018]]. *Bioaccumulation of methylmercury within the marine food web of the outer Bay of Fundy, Gulf of Maine*, PLoS ONE | 2018 | Peer-reviewed | CA/US MeHg, tHg occurrence in Marine food-web organisms from the outer Bay of Fundy and Gulf of Maine |
| 42 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | Joint FDA/EPA consumer-facing fish and shellfish consumption guidance anchored to MeHg exposure, classifying species by mercury tier for pregnant women and children |
| 43 | [[sources/gongora-gomez2017-oysters-gulf-california-metals\|Martin et al. 2017]]. *Heavy-metal contents in oysters (Crassostrea gigas) cultivated on the southeastern coast of the Gulf of California, Mexico*, Hidrobiologica | 2017 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Cultivated Pacific oysters from the southeastern Gulf of California, Mexico |
| 44 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 45 | [[sources/efsa-sc2015-fish-seafood-mehg-risk-benefit\|EFSA 2015]]. *Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood*, EFSA Journal 2015;13(1):3982, 36 pp. | 2015 | Government report | EU MeHg, tHg occurrence in Scenario-based risk-benefit assessment across 26 chronic dietary surveys from 17 EU Member States (Belgium, Bulgaria, Cyprus, Czech Republic,... |
| 46 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Pd, Pt, Sn, Tl, Zn occurrence in 3312 retail food samples from 24 UK locations, combined into 138 prepared-as-consumed food-category composites and 28 food-group composites (n=3312) |
| 47 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical toxicological chapter on Cd covering dietary exposure sources including shellfish and bivalve molluscs as high-Cd contributors |
| 48 | [[sources/shue2012-bivalves-tapeng-taiwan\|Shue et al. 2012]]. *Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan*, Advanced Materials Research | 2012 | Peer-reviewed | TW Pb, Cd, Cu, Zn, Ni, Cr occurrence in Six bivalve species (Katelysia hiantina, Anomalocardia squamosa, Perna viridis, Anadara antiquata, Paphia undulata, Sanguinolaria diphos) collected from Ta-Peng... (n=72) |
| 49 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA dietary exposure assessment for Cd identifying shellfish (particularly molluscs) as a significant contributor to the PTMI of 25 µg/kg b.w./month |
| 50 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM opinion establishing the EU Cd TWI at 2.5 µg/kg b.w./week, with shellfish and bivalve molluscs identified among the highest-Cd food groups in European diets |
| 51 | [[sources/hu2006-tpt-tbt-trophic-bohai-bay\|Jianying et al. 2006]]. *Trophic Magnification of Triphenyltin in a Marine Food Web of Bohai Bay, North China: Comparison to Tributyltin*, Environmental Science & Technology, Vol. 40, No. 10, pp 3142–3147 | 2006 | Peer-reviewed | CN Sn occurrence in Marine food web from Bohai Bay, North China, sampled May, June, and September 2002: phytoplankton/seston (n=3), zooplankton (n=3),... (n=48) |
| 52 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | US iAs, tAs occurrence in Literature review of fish and shellfish arsenic data; exposure scenarios derived from USDA Continuing Survey of Food Intake... |
| 53 | [[sources/chou-uthe1993-cadmium-american-lobster-belledune\|Chou et al. 1993]]. *Cadmium in American lobster (Homarus americanus) from the area of Belledune Harbour, New Brunswick, Canada: 1980-1992 results*, Canadian Technical Report of Fisheries and Aquatic Sciences No. 1916 | 1993 | Gray literature | CA Cd, Pb, tHg, tAs, Cu, Ag occurrence in American lobster (Homarus americanus) captured 1980-1992 at eight sites in and around Belledune Harbour, New Brunswick, Canada —... |
| 54 | [[sources/nielsen1975-nz-molluscs-heavy-metals\|Nielsen et al. 1975]]. *Heavy metal levels in New Zealand molluscs*, New Zealand Journal of Marine and Freshwater Research 9(4), 467-481 | 1975 | Peer-reviewed | NZ Cd, Pb, tHg, Cu, Zn, Fe occurrence in Two hundred and three numbered samples (Appendix sample numbers 1-203) drawn from 199 sampling sites distributed around the... (n=203) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Shellfish (the broad seafood category covering crustaceans, bivalves, and gastropods) accumulate heavy metals through their feeding mechanism and water-column exposure. Bivalves (oysters, mussels, clams, scallops) filter large volumes of water — an oyster filters 5-50 liters per day — and concentrate dissolved and particle-bound metals, particularly cadmium. Crustaceans (shrimp, crab, lobster) accumulate metals through their carnivorous diet and shedding-and-rebuilding-shell life cycle. Gastropods (sea snails, abalone, conch) carry profiles intermediate between bivalves and crustaceans depending on diet.

See [[ingredients/bivalve-molluscs]] for the bivalve-specific synthesis (the dominant Cd-accumulator subgroup) and [[ingredients/molluscs]] for the cephalopod and gastropod context.

The HMTc panel concerns for shellfish are dominantly Cd (in bivalves), with secondary Pb and Hg. Crustaceans carry lower Cd than bivalves but moderate Pb and Hg from their carnivorous diet.

## Ranges by source, region, and variety

See [[ingredients/bivalve-molluscs]] for the bivalve-specific source and region analysis. Within shellfish more broadly:

- Bivalves typically carry the highest Cd, with order-of-magnitude variance by production-area water quality.
- Crustaceans (shrimp, crab, lobster) carry moderate Cd and Pb; cold-water large lobster from northern waters can carry elevated trace metals from extended lifetime exposure.
- Production-area variance dominates within each shellfish subgroup. [[sources/raju2021-bivalves-cagayan-philippines|Raju 2021]] and [[sources/shue2012-bivalves-tapeng-taiwan|Shue 2012]] characterize Asian production-area variance.

## Processing effects

Shellfish processing (cleaning, depuration, freezing, canning, cooking, drying) generally does not reduce the soft-tissue metal load. Depuration (commercial water-circulation cleaning) targets pathogens not metals. Cooking concentrates per-mass metal through water loss. Removing the hepatopancreas in cephalopods (and gastropods where applicable) removes a Cd-concentrated tissue.

Canned shellfish carries the standard Sn-migration consideration. Smoked and dried shellfish concentrate metals on a per-dry-mass basis.

## Ingredient-derivative risk

Shellfish-derived dietary supplements (oyster extract, green-lipped mussel) carry concentrated source-shellfish metals. Crustacean shell-derived chitin and glucosamine supplements carry their own profiles, typically lower in soft-tissue metals because the shell tissue is processed separately. Shrimp and lobster shell-derived products are sold in some functional-food and supplement channels.

See [[products/supplements-algae-seaweed-based]] for the supplement-category routing.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Production-area water-quality verification is the operational specification for high-Cd bivalves. Aquaculture-source shellfish from documented clean-water operations typically carry lower metals than wild-caught from contaminated estuaries.

**Processing levers** ([[mitigation/processing]]) include hepatopancreas removal where applicable (substantially reduces per-serving Cd in cephalopods and gastropods) and standard depuration.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Cd, Pb, and Hg testing for commercial shellfish supply. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned shellfish.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets Cd maximum levels for bivalve molluscs and cephalopods; Pb and Hg MLs for crustaceans and other shellfish.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs for Cd, Pb, and Hg in shellfish.
- FDA action level of 1.0 ppm methylmercury in fish applies to shellfish in commercial channels.
- US state shellfish-growing-water classification programs (National Shellfish Sanitation Program) address microbial contamination but not heavy metals directly.
- California Prop 65 ([[regulations/california-prop65]]) Cd, Pb, and Hg MADLs apply to shellfish sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
<!-- END: hmi-page-history -->
