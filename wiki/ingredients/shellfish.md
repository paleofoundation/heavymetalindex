---
title: "Shellfish"
dek: "Aquatic invertebrates including crustaceans and molluscs, with metal profiles shaped by feeding ecology and harvest waters. The page covers occurrence, processing, derivatives and regulatory limits."
rail_highlights:
  - label: Exposure
    text: Shellfish metal profiles vary with production area
    source: sources/raju2021-bivalves-cagayan-philippines
    source_label: Bivalve study
  - label: Limits
    text: Codex sets contaminant maximum levels for shellfish
    source: sources/codex-cxs-193-1995
    source_label: Codex standard
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
sources: 113
hero_image: /static/heroes/organotins-shellfish-marine-context.webp
hero_image_alt: "Shellfish, a marine stone, seaweed and an unmarked glass vessel illustrating shellfish ingredient context."
---

# Shellfish

## Overview

Shellfish is the regulatory umbrella covering crustaceans (shrimp, crab, lobster, crayfish) and molluscs (mussels, clams, oysters, scallops, octopus, squid). The category groups together aquatic invertebrates whose feeding ecology — filter-feeding for bivalves, scavenging and detritivory for crustaceans — produces a distinctive contamination signal: high cadmium concentrations from sediment-water concentration gradients, total arsenic in the high-ppb-to-low-ppm range driven primarily by non-toxic arsenobetaine but with variable inorganic arsenic fractions, and occasional Pb spikes in waters with industrial or marine-paint legacies.

The cadmium-shellfish relationship is the strongest single-metal signal in the dietary-exposure literature: EFSA, JECFA, and the FDA all treat bivalve molluscs as a leading dietary Cd source for shellfish-consuming populations, comparable to organ meats and cereals. The total-vs-inorganic arsenic distinction (per) is non-negotiable for shellfish; tAs values appear alarmingly high but most of that signal is arsenobetaine, which is excreted intact and lacks the toxicity of iAs.

This page is the structural umbrella; [[ingredients/bivalve-molluscs]] carries bivalve-specific evidence and is the higher-risk subcategory for Cd. Crustacean-specific detail will land on dedicated pages as the corpus grows.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=10 | 50–300 | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| Cd | n=13 | 200–1500 | high | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| iAs | n=6 | 10–80 | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| tAs | n=10 | 1000–10000 | medium | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/taylor2025-seafood-benefits-contaminants\|2]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|3]] |
| tHg | n=14 | 20–200 | high | [[sources/xu2025-heavy-metals-aquatic-foods-global\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/taylor2025-seafood-benefits-contaminants\|3]] |
| Ni | n=5 | 100–1000 | medium | [[sources/han2024-nickel-zhejiang-china\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|3]] |
| Al | n=2 | 500–5000 | low | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|1]], [[sources/berber2024-crayfish-metal-content-turkey\|2]] |
| Cr | n=4 | 100–500 | medium | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]], [[sources/ramos-miras2023-pte-shrimp-ecuador\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

Direct evidence for shellfish-as-category lands here. Bivalve-specific evidence routes to [[ingredients/bivalve-molluscs]]; product-level routing flows through seafood-bearing baby food and prepared-meal product pages.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd, tAs, and the iAs/tAs ratio are the priority synthesis targets given seven contributing source pages already in scope. Speciation discipline (per Part 14) is load-bearing: never substitute tAs for iAs in shellfish prose or values.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/raju2021-bivalves-cagayan-philippines|Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines]]<span class="hmi-ref-meta">Raju J, Johnson J, Jeevan A, and Capili JT · Scholars Academic Journal of Biosciences 9(10):256-258 · 2021 · [doi.org/10.36347/sajb.2021.v09i10.001](https://doi.org/10.36347/sajb.2021.v09i10.001)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/shue2012-bivalves-tapeng-taiwan|Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan]]<span class="hmi-ref-meta">Shue MF, Chen JJ, Tseng LH, and Lai WL · Advanced Materials Research · 2012 · [doi.org/10.4028/www.scientific.net/AMR.599.100](https://doi.org/10.4028/www.scientific.net/AMR.599.100)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/jiang2026-organotin-seafood-hong-kong\|Jiang et al. 2026]]. *Health risks of exposure to organotin compounds via seafood consumption after their legal ban*, Marine Pollution Bulletin | 2026 | Peer-reviewed | HK Sn occurrence in Twenty-three Hong Kong marine species collected in 2023, including molluscs, crustaceans, and fishes; extracted PDF is a ScienceDirect... (n=23) |
| 3 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | CN Sn occurrence in 2014 food samples from Zhejiang Province, China, collected 2018–2019 using multistage stratified random sampling: fresh vegetables (n=673), tea... (n=2014) |
| 4 | [[sources/akkaya2025-marmara-fishery-products-metals\|Akkaya et al. 2025]]. *Determination of Heavy Metal Levels and Assessment of L. monocytogenes and Salmonella spp. Presence in Fishery Products and Mussels from the Marmara Region, Türkiye*, Toxics | 2025 | Peer-reviewed | TR Pb, Cd, tHg, tAs, Cu occurrence in Fishery products and mussels collected from provinces in the Marmara region of Türkiye between March 2020 and November... (n=625) |
| 5 | [[sources/brima2025-african-foods-uk-metals\|Brima et al. 2025]]. *Assessment of Human Health Risk Based on Analysis of Potentially Toxic Elements in African Foods Sold in the UK Market*, African Journal of Agriculture and Food Science | 2025 | Peer-reviewed | GB tAs, Cd, tHg, Pb occurrence in African foods and non-food additives sold in the UK market and consumed by African communities (n=152) |
| 6 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 7 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | Methods paper validating an Al3+/Cu2+ fluorescent sensor via spiked-recovery in scallops and razor clams; no ambient shellfish Al concentrations reported |
| 8 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 9 | [[sources/mititelu2025-heavy-metal-food-contamination-review\|Mititelu et al. 2025]]. *Assessing Heavy Metal Contamination in Food: Implications for Human Health and Environmental Safety*, Toxics | 2025 | Review | EU/US/RO Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Cr, Sn occurrence in Narrative review; no primary sample collection. Synthesizes published literature and regulatory data across multiple countries. |
| 10 | [[sources/singhato2025-thailand-seafood-heavy-metals\|Singhato et al. 2025]]. *Risk Assessment of Toxic Heavy Metal Exposure in Selected Seafood Species from Thailand*, Foods | 2025 | Peer-reviewed | TH tAs, Cd, tHg, Pb occurrence in 20 commonly consumed seafood species from Thailand (4 shrimp/prawn, 4 crab, 3 squid, 8 shellfish, 2 marine fish),... (n=60) |
| 11 | [[sources/taylor2025-seafood-benefits-contaminants\|Taylor et al. 2025]]. *Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies*, Foods | 2025 | Peer-reviewed | Broad secondary review of Hg, Pb, Cd, and tAs concentrations across fish and shellfish matrices, summarizing US FDA/EPA advisory frameworks and vulnerable-population guidance |
| 12 | [[sources/xia2025-whole-cell-biosensor-hg-food\|Xia et al. 2025]]. *Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals*, Foods | 2025 | Peer-reviewed | Methods paper validating a whole-cell biosensor for Hg2+ detection in spiked shellfish and fish matrices; no occurrence measurements reported |
| 13 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, MeHg, Cd, Pb, tAs, iAs occurrence in 138,281 test records for aquatic food products from the WHO Food Safety Collaborative Platform (FOSCOLLAB) database; covers fish,... (n=138281) |
| 14 | [[sources/berber2024-crayfish-metal-content-turkey\|Berber et al. 2024]]. *Metal content and fatty acid profiles in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake, Turkey: seasonal variation and health risk assessment*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | TR Fe, Zn, Al, Cu, Mn, Se, As, Hg, Cd, Pb occurrence in Pontastacus leptodactylus (narrow-clawed crayfish) from Atikhisar Dam Lake, Çanakkale, Turkey; monthly sampling over 12 months; male and female... |
| 15 | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|Bruno et al. 2024]]. *Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health*, Frontiers in Toxicology | 2024 | Peer-reviewed | IT/EU tAs, Cd, Pb, tHg, Ni, Cr occurrence in 80 specimens of Mytilus galloprovincialis (mussel) and 80 specimens of Tapes decussatus (clam) collected from Faro Lake, Messina,... (n=160) |
| 16 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | CN Ni occurrence in Zhejiang Province residents, 11 cities, 2018–2019; n=19,000 in consumption survey (n=2628) |
| 17 | [[sources/rohonczy2024-arctic-foodweb-cd-hg\|Rohonczy et al. 2024]]. *Cadmium and mercury trophic transfer in the Arctic marine food web of Hudson Bay*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CA Cd, tHg, MeHg occurrence in Multiple Arctic marine species from Hudson Bay, Canada: blue mussel, common eider, sculpin, Arctic cod, ringed seal (n=781) |
| 18 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | iAs, tAs occurrence in Systematic review of published arsenic occurrence and speciation studies in marine organisms; no single primary cohort |
| 19 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 20 | [[sources/bezrodnykh2023-crayfish-chitosan-residual-metals\|Bezrodnykh et al. 2023]]. *A Walkway from Crayfish to Oligochitosan*, Applied Sciences | 2023 | Peer-reviewed | RU Fe, Cr, Ni, Pb, Cd, tHg, tAs, Al occurrence in One laboratory processing batch from 4 kg fresh-frozen narrow-toed crayfish (Actacus leptodactylus) bought on a local market and... (n=1) |
| 21 | [[sources/bjerregaard2023-mercury-mussels-denmark\|Bjerregaard et al. 2023]]. *In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | DK/EU tHg occurrence in Blue mussels (Mytilus edulis), periwinkles (Littorina littorea), brown shrimps, and amphipods from Nissum Broad coastal stations, Denmark; also... (n=137) |
| 22 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | ES/EU tHg, MeHg occurrence in Fish samples collected under the Valencian Community food health surveillance programme (Generalitat Valenciana); 560 THg measurements, 206 MeHg... (n=635) |
| 23 | [[sources/de-anda-montanez2023-baja-red-crab-elements\|Anda-Montanez et al. 2023]]. *Spatial and Temporal Variability of Trace and Macro Elements in the Red Crab Pleuroncodes planipes in the Pacific Coast of the Baja California Peninsula, Mexico*, Animals | 2023 | Peer-reviewed | MX Cd, Cu, Fe, Mn, Ni, Pb, Zn, Ca, Mg occurrence in 279 whole adult red crabs (Pleuroncodes planipes, 32-40 mm body size) collected during three research cruises off the... (n=279) |
| 24 | [[sources/diogene2023-rascs-contaminants-seafood\|Diogène et al. 2023]]. *Risk Assessment Strategies for Contaminants in Seafood (RASCS)*, EFSA Supporting Publications 2023:EN-8419 | 2023 | Government report | EU tAs, iAs, Pb, Cd, tHg, MeHg, Ni, Cr, Al occurrence in Strategy/programmatic report from a seven-institution EU consortium (IRTA Spain coordinator, CREDA Spain, IPMA Portugal, ISS Italy, Ghent University... |
| 25 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 26 | [[sources/haseeb-ur-rehman2023-pakistan-seafood-metals\|Haseeb-ur-Rehman et al. 2023]]. *Metal pollution and potential human health risk assessment in major seafood items (fish, crustaceans, and cephalopods)*, Marine Pollution Bulletin | 2023 | Peer-reviewed | PK tHg, Cd, Pb, Ni, Fe, Zn, Mn, Cu occurrence in Export-quality seafood from Pakistani processing plants during 2016-2018: 50 samples each of giant tiger shrimp, blue crab, Indian... (n=400) |
| 27 | [[sources/kim2023-korea-fishery-products-metals\|Kim et al. 2023]]. *Risk Assessment and Determination of Arsenic and Heavy Metals in Fishery Products in Korea*, Foods | 2023 | Peer-reviewed | KR Pb, Cd, tAs, tHg, MeHg occurrence in Fishery products purchased from grocery stores and markets in Seoul, Incheon, Daejeon, Gangneung, Busan, and Gwangju from January... (n=1186) |
| 28 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | CN iAs, tAs occurrence in Laboratory study using crab, scallop, turbot, and flounder seafood samples subjected to in vitro digestion (BARGE UBM method) |
| 29 | [[sources/onyegeme-okerenta2023-shellfish-nigeria\|Onyegeme-Okerenta et al. 2023]]. *Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment*, Environmental Analysis, Health and Toxicology | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb, Ni occurrence in Three shellfish species (Penaeus monodon, Crassostrea rhizophorae, Tympanostomus fuscatus) from three rivers in Niger Delta, Nigeria (Buguma, Krakrama,... (n=27) |
| 30 | [[sources/ramos-miras2023-pte-shrimp-ecuador\|Ramos-Miras et al. 2023]]. *Potentially toxic element bioaccumulation in consumed indoor shrimp farming associated with diet, water and sediment levels*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EC/EU tAs, Cd, Cr, Ni, Pb, tHg occurrence in Pacific White shrimp (Litopenaeus vannamei) from indoor cage farming in El Oro Province, Ecuador; head and tail tissues... |
| 31 | [[sources/shu2023-china-port-seafood-organotins\|Shu et al. 2023]]. *Characteristics, sources and health risks of organotin compounds in marine organisms from the seas adjacent to the eastern ports of China*, Regional Studies in Marine Science | 2023 | Peer-reviewed | CN Sn occurrence in Twenty species of edible marine organisms, including mollusks, crustaceans, and fish, collected from nine ports along the eastern... |
| 32 | [[sources/simionov2023-danube-fish-seafood-pte-microplastics\|Simionov et al. 2023]]. *Human health risk assessment of potentially toxic elements and microplastics accumulation in products from the Danube River Basin fish market*, Environmental Toxicology and Pharmacology | 2023 | Peer-reviewed | RO/GR/IT Al, tAs, Cd, Cr, Cu, Ni, Pb, Zn, tHg occurrence in Fish and seafood specimens purchased from retailers in Galati, Romania: 18 fish species and 5 seafood species, n=10... (n=230) |
| 33 | [[sources/tolkou2023-fish-heavy-metals-review\|Tolkou et al. 2023]]. *Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury in Fish: Effects on the Sustainable and Healthy Development of Aquatic Life and Human Consumers*, Sustainability | 2023 | Peer-reviewed | AR/BD/CN tAs, Cr, Cd, Pb, tHg occurrence in Narrative literature review of >50 fish species across 13 countries on 4 continents (Asia, Europe, Africa, Latin America).... |
| 34 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 35 | [[sources/cegolon2022-hg-hair-trieste\|Cegolon et al. 2022]]. *Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy)*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | IT/EU tHg, MeHg occurrence in General population residents of Friuli Venezia Giulia (FVG) coastal region, Gulf of Trieste, Italy; convenience sample recruited at... (n=301) |
| 36 | [[sources/china2022-gb-2762-contaminants-original\|National Health Commission of 2022]]. *GB 2762-2022 National Food Safety Standard: Maximum Levels of Contaminants in Foods*, National Food Safety Standard GB 2762-2022 | 2022 | Government report | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 37 | [[sources/lordan2022-brown-crab-cadmium-review\|Lordan et al. 2022]]. *Cadmium: A Focus on the Brown Crab (Cancer pagurus) Industry and Potential Human Health Risks*, Toxics | 2022 | Peer-reviewed | IE/EU/NO Cd occurrence in Narrative review of the brown crab (Cancer pagurus) industry and cadmium exposure; tabulates cadmium concentrations compiled from prior... |
| 38 | [[sources/moura2022-hg-jaguaribe-estuary\|Moura et al. 2022]]. *Mercury in the Jaguaribe River Estuary, Northeast Brazil: Sources, Distribution, and Bioavailability*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | BR tHg occurrence in Shrimp (Littopenaeus vannamei), fish (Eugerres brasilianus, Cathorops spixii), sediments, and water from Jaguaribe River Estuary, Ceará, NE Brazil |
| 39 | [[sources/suzuki2022-nano-mercury-seafood-exposure\|Suzuki et al. 2022]]. *Presence of nano-sized mercury-containing particles in seafoods, and an estimate of dietary exposure*, Environmental Pollution | 2022 | Peer-reviewed | JP tHg, MeHg occurrence in Ninety raw fish and shellfish samples purchased in Japan in 2019-2020 across eight groups: tuna and swordfish, salmon... (n=90) |
| 40 | [[sources/uc-peraza2022-yucatan-seafood-organotins\|Uc-Peraza et al. 2022]]. *Organotin contamination in seafood from the Yucatán Peninsula, Mexico: Is there a potential risk for the health of consumers?*, Chemosphere | 2022 | Peer-reviewed | MX Sn occurrence in Seafood collected directly from local fishermen at five Yucatán Peninsula fishing sites in February-March 2018: 37 individual fish... (n=50) |
| 41 | [[sources/lin2021-taiwan-seafood-mercury-tds\|Lin et al. 2021]]. *Dietary Exposure of the Taiwan Population to Mercury Content in Various Seafood Assessed by a Total Diet Study*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | TW tHg, MeHg occurrence in Taiwan total-diet-study seafood sample set purchased from fishing harbors, traditional markets, afternoon markets, supermarkets, and discount stores across... (n=140) |
| 42 | [[sources/luvonga2021-seafood-arsenic-speciation\|Luvonga et al. 2021]]. *Determination of total arsenic and hydrophilic arsenic species in seafood*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | US tAs, iAs occurrence in Seven homogenized seafood/seaweed study materials: spirulina powder, Atlantic kelp powder, geoduck clam, wild-caught brown shrimp, aquacultured white-leg shrimp,... (n=7) |
| 43 | [[sources/mehouel2021-algeria-seafood-metals-review\|Mehouel et al. 2021]]. *Review of the toxic trace elements arsenic, cadmium, lead and mercury in seafood species from Algeria and contiguous waters in the Southwestern Mediterranean Sea*, Environmental Science and Pollution Research | 2021 | Peer reviewed review | DZ/TN/MA tAs, Cd, Pb, tHg, MeHg occurrence in Narrative review of published As, Cd, Pb, Hg, and MeHg occurrence studies in fish, mollusks, and crustaceans from... |
| 44 | [[sources/novakov2021-serbia-mussels-metals-pahs\|Novakov et al. 2021]]. *Heavy metals and PAHs in mussels on the Serbian market and consumer exposure*, Food Additives & Contaminants: Part B | 2021 | Peer-reviewed | Serbia Pb, Cd, tHg, tAs occurrence in Eighty-four mussel-meat samples collected from supermarkets and fish markets in Serbia from January 2019 to March 2020: 42... (n=84) |
| 45 | [[sources/raju2021-bivalves-cagayan-philippines\|Raju et al. 2021]]. *Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines*, Scholars Academic Journal of Biosciences 9(10):256-258 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two bivalve species from Cagayan Valley, Philippines: freshwater clam (Corbicula fluminea) and marine mussel (Mytilus edulis); collected with... (n=2) |
| 46 | [[sources/sadighara2021-food-organotin-review\|Sadighara et al. 2021]]. *The organotin contaminants in food: Sources and methods for detection: A systematic review and meta-analysis*, Food Chemistry: X | 2021 | Peer reviewed review | JP/IT/CL Sn occurrence in Systematic review and meta-analysis of published food-matrix organotin studies; 123 database records were screened, 9 studies were selected,... |
| 47 | [[sources/valencia2021-canacao-bay-oyster-pb-cd\|Valencia et al. 2021]]. *Heavy metal accumulation and risk assessment of lead and cadmium in cultured oysters (Crassostrea iredalei) of Cañacao Bay, Philippines*, Sustinere: Journal of Environment and Sustainability 5(2), 64-78 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two hundred fourteen cultured slipper-cupped oysters (Crassostrea iredalei) of marketable shell length (45-55 mm) collected from three sampling... (n=214) |
| 48 | [[sources/barchiesi2020-shellfish-metals-central-italy\|Barchiesi et al. 2020]]. *Heavy Metals Contamination in Shellfish: Benefit-Risk Evaluation in Central Italy*, Foods | 2020 | Peer-reviewed | IT Cd, Pb, tHg occurrence in Cd, Pb, and Hg analytical results for shellfish collected along the Italian coastline from January 2017 through December... (n=2207) |
| 49 | [[sources/chung2020-hong-kong-seafood-organotins\|Chung et al. 2020]]. *Occurrence of organotin compounds in seafood from Hong Kong market*, Marine Pollution Bulletin | 2020 | Peer-reviewed | HK Sn occurrence in Three hundred forty-one seafood samples collected from wet markets and supermarkets in different regions of Hong Kong between... (n=341) |
| 50 | [[sources/dibella2020-augusta-meat-milk-seafood-metals\|Di et al. 2020]]. *Heavy Metals and PAHs in Meat, Milk, and Seafood From Augusta Area (Southern Italy): Contamination Levels, Dietary Intake, and Human Exposure Assessment*, Frontiers in Public Health 8:273 | 2020 | Peer-reviewed | IT/EU tAs, Cd, Cr, tHg, Ni, Pb, Zn occurrence in Meat, milk, and seafood from the Augusta-Melilli-Priolo industrial area in Southern Italy; seafood pooled across fish, mollusc, and... (n=Seafood from the Augusta Bay/Sicily study area plus terrestrial animal products from 26 farms: 5 bovine milk, 11 sheep/goat milk, 11 beef, and 3 pork samples.) |
| 51 | [[sources/djedjibegovic2020-bih-commercial-seafood-metals\|Djedjibegovic et al. 2020]]. *Heavy metals in commercial fish and seafood products and risk assessment in adult population in Bosnia and Herzegovina*, Scientific Reports | 2020 | Peer-reviewed | BA/ES/PT Cd, tHg, Pb occurrence in Commercial fish and seafood products purchased from retail in Bosnia and Herzegovina in June 2019, with country-of-origin labels... (n=37) |
| 52 | [[sources/eu2020-retained-1881-2006-contaminants\|EU 2020]]. *Commission Regulation (EC) No 1881/2006, consolidated text 28 September 2020*, EUR-Lex consolidated text | 2020 | Government report | EU/GB Pb, Cd, tHg, iAs, Sn concentrations |
| 53 | [[sources/pawlaczyk2020-mercury-canned-fish-poland\|Pawlaczyk et al. 2020]]. *Risk of Mercury Ingestion from Canned Fish in Poland*, Molecules | 2020 | Peer-reviewed | PL tHg, MeHg occurrence in Eighty-four canned fish products covering 25 brands from over 14 producers (19 brands of canned fish plus six... (n=84) |
| 54 | [[sources/romero-estevez2020-bivalves-santa-rosa-ecuador\|Romero-Estévez et al. 2020]]. *An Overview of Cadmium, Chromium, and Lead Content in Bivalves Consumed by the Community of Santa Rosa Island (Ecuador) and Its Health Risk Assessment*, Frontiers in Environmental Science 8:134 | 2020 | Peer-reviewed | EC/EU Cd, Cr, Pb occurrence in Fifty composite bivalve soft-tissue samples (~10 individuals per composite) of Anadara tuberculosa and Anadara similis (locally 'concha prieta',... (n=50) |
| 55 | [[sources/sepulveda2020-callista-clam-metals\|Humberto et al. 2020]]. *Trace metals in two wild populations of the squalid callista clam (Megapitaria squalida) in the southeastern Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2020 | Peer-reviewed | MX Cu, Cd, Cr, Ni, Pb, Zn, tAs, tHg occurrence in Wild Megapitaria squalida clams from Altata and Agiabampo Bays in the southeastern Gulf of California |
| 56 | [[sources/tamele2020-african-seafood-metals-review\|Tamele et al. 2020]]. *Lead, Mercury and Cadmium in Fish and Shellfish from the Indian Ocean and Red Sea (African Countries): Public Health Challenges*, Journal of Marine Science and Engineering | 2020 | Peer reviewed review | EG/DJ/KE Pb, tHg, Cd occurrence in Narrative review of Pb, Hg, and Cd in fish and shellfish from African countries bordering the Indian Ocean... |
| 57 | [[sources/cfs2019-hk-metallic-contamination-guidelines\|Centre for Food Safety 2019]]. *Guidelines on the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018*, USDA Foreign Agricultural Service GAIN Report HK1922, relaying the Hong Kong Centre for Food Safety Guidelines for the Food Adulteration (Metallic Contamination) (Amendment) Regulation 2018 (Cap. 132V sub. leg.) | 2019 | Government report | HK Sb, tAs, iAs, Ba, B, Cd, Cr, Cu, Pb, Mn, MeHg, tHg, Ni, Se, Sn, U occurrence in Not a sampling study. Regulatory document setting maximum levels (MLs) for 14 metallic contaminants across food and food... |
| 58 | [[sources/cfs2019-organotin-aquatic-hongkong\|Centre for Food Safety 2019]]. *Organotin Compounds in Aquatic Products Available at Local Markets*, Risk Assessment Studies Report No. 60, Centre for Food Safety, Hong Kong FEHD | 2019 | Government report | HK Sn occurrence in Fish, crustaceans, and molluscs collected from local markets in Hong Kong, October 2017 to June 2018; 201 fish,... (n=341) |
| 59 | [[sources/chen2019-china-oyster-organotins\|Chen et al. 2019]]. *Organotin contamination in commercial and wild oysters from China: Increasing occurrence of triphenyltin*, Science of the Total Environment | 2019 | Peer-reviewed | CN Sn occurrence in Commercial oysters from Shanghai seafood markets in November 2014 and wild oysters from fourteen coastal Chinese cities in... |
| 60 | [[sources/fsanz2019-25th-australian-total-diet-study\|Zealand 2019]]. *25th Australian Total Diet Study*, Food Standards Australia New Zealand | 2019 | Government report | AU/NZ tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Australian total-diet survey: 88 food types, 508 prepared-food composite samples from all Australian states and territories, sampled May... (n=508) |
| 61 | [[sources/liang2019-beijing-foodstuffs-health-risk\|Liang et al. 2019]]. *Analysis of Heavy Metals in Foodstuffs and an Assessment of the Health Risks to the General Public via Consumption in Beijing, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg occurrence in Beijing general population; 25 foodstuff types collected from four sites, three replicates per foodstuff at each site (n=300) |
| 62 | [[sources/matsumoto-tanibuchi2019-seaweed-seafood-ias\|Matsumoto-Tanibuchi et al. 2019]]. *Determination of Inorganic Arsenic in Seaweed and Seafood by LC-ICP-MS: Method Validation*, Journal of AOAC International | 2019 | Peer-reviewed | JP tAs, iAs occurrence in Japanese local-market food samples: eight dried seaweed products, seven seafood muscle/edible-portion samples, and two seafood-derived sauces/products in Table... (n=17) |
| 63 | [[sources/wang2019-dietary-lead-guangzhou\|Wang et al. 2019]]. *Dietary Lead Exposure and Associated Health Risks in Guangzhou, China*, International Journal of Environmental Research and Public Health | 2019 | Peer-reviewed | CN Pb occurrence in Food safety risk monitoring samples from Guangzhou, China, collected during 2014-2017 across 27 food categories; consumption inputs came... (n=6339) |
| 64 | [[sources/baki2018-st-martin-seafood-metals\|Baki et al. 2018]]. *Concentration of heavy metals in seafood (fishes, shrimp, lobster and crabs) and human health assessment in Saint Martin Island, Bangladesh*, Ecotoxicology and Environmental Safety | 2018 | Peer-reviewed | BD Cr, Mn, Cu, Zn, iAs, Cd, Pb, tHg, Fe occurrence in Eight fish species and five crustacean species collected from different points of Saint Martin's Island and its local... (n=13) |
| 65 | [[sources/gongora-gomez2018-pen-shell-seasonal-metals\|Martin et al. 2018]]. *Seasonal levels of heavy metals in soft tissue and muscle of the pen shell Atrina maura from a farm in the southeastern coast of the Gulf of California, Mexico*, Revista Internacional de Contaminacion Ambiental | 2018 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Farmed pen shell from the southeastern Gulf of California, sampled seasonally from summer 2011 to summer 2012 |
| 66 | [[sources/harding2018-bay-fundy-methylmercury\|Harding et al. 2018]]. *Bioaccumulation of methylmercury within the marine food web of the outer Bay of Fundy, Gulf of Maine*, PLoS ONE | 2018 | Peer-reviewed | CA/US MeHg, tHg occurrence in Marine food-web organisms from the outer Bay of Fundy and Gulf of Maine |
| 67 | [[sources/lehel2018-hungary-seafood-metals\|Lehel et al. 2018]]. *Heavy metals in seafood purchased from a fishery market in Hungary*, Food Additives & Contaminants: Part B | 2018 | Peer-reviewed | HU/DK/IT tAs, Cd, Pb, tHg occurrence in Seafood purchased weekly for 20 weeks from a fishery product market in Hungary: shellfish n=42 from Denmark and... (n=114) |
| 68 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | Joint FDA/EPA consumer-facing fish and shellfish consumption guidance anchored to MeHg exposure, classifying species by mercury tier for pregnant women and children |
| 69 | [[sources/gongora-gomez2017-oysters-gulf-california-metals\|Martin et al. 2017]]. *Heavy-metal contents in oysters (Crassostrea gigas) cultivated on the southeastern coast of the Gulf of California, Mexico*, Hidrobiologica | 2017 | Peer-reviewed | MX Cu, Cr, Cd, Ni, Pb, tAs, Zn, tHg occurrence in Cultivated Pacific oysters from the southeastern Gulf of California, Mexico |
| 70 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 71 | [[sources/ho2016-hong-kong-rock-shell-organotins\|Ho et al. 2016]]. *Long-Term Spatio-Temporal Trends of Organotin Contaminations in the Marine Environment of Hong Kong*, PLOS ONE | 2016 | Peer-reviewed | HK Sn occurrence in Adult Reishia clavigera collected from 29 Hong Kong rocky-shore sites in 2010 and 10 selected sites in 2015;... (n=39) |
| 72 | [[sources/lee2016-taiwan-seafood-organotins\|Lee et al. 2016]]. *Health risk assessment of the intake of butyltin and phenyltin compounds from fish and seafood in Taiwanese population*, Chemosphere | 2016 | Peer-reviewed | TW Sn occurrence in Two hundred Taiwanese fishery products provided from 25 fishery markets in 2011: freshwater fish (n = 64), saltwater... (n=200) |
| 73 | [[sources/zhao2016-xiamen-seafood-metals\|Zhao et al. 2016]]. *Seafood consumption among Chinese coastal residents and health risk assessment of heavy metals in seafood*, Environmental Science and Pollution Research | 2016 | Peer-reviewed | CN Pb, Cd, Cr, tHg, tAs occurrence in One hundred fifty-six market samples of 14 high-intake seafood types from six district regions of Xiamen, China; consumption... (n=156) |
| 74 | [[sources/efsa-sc2015-fish-seafood-mehg-risk-benefit\|EFSA 2015]]. *Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood*, EFSA Journal 2015;13(1):3982, 36 pp. | 2015 | Government report | EU MeHg, tHg occurrence in Scenario-based risk-benefit assessment across 26 chronic dietary surveys from 17 EU Member States (Belgium, Bulgaria, Cyprus, Czech Republic,... |
| 75 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | GB Al, Sb, tAs, iAs, Ba, Cd, Cr, Cu, Pb, Mn, tHg, Mo, Ni, Pd, Pt, Sn, Tl, Zn occurrence in 3312 retail food samples from 24 UK locations, combined into 138 prepared-as-consumed food-category composites and 28 food-group composites (n=3312) |
| 76 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical toxicological chapter on Cd covering dietary exposure sources including shellfish and bivalve molluscs as high-Cd contributors |
| 77 | [[sources/ho2014-hong-kong-seafood-organotins\|Ho et al. 2014]]. *Organotin contamination in seafood and its implication for human health risk in Hong Kong*, Marine Pollution Bulletin | 2014 | Peer-reviewed | HK Sn occurrence in Five analytical replicates for each of 11 commonly available Hong Kong seafood species: three gastropods, two bivalves, and... (n=55) |
| 78 | [[sources/copat2013-mediterranean-fish-shellfish-metals\|Copat et al. 2013]]. *Heavy metals concentrations in fish and shellfish from eastern Mediterranean Sea: Consumption advisories*, Food and Chemical Toxicology | 2013 | Peer-reviewed | IT tAs, Cd, Cr, Pb, Mn, Ni, V, Zn occurrence in Five fish species from the Catania fish market, n=30 specimens per species, plus 30 aliquots from a homogenized... (n=180) |
| 79 | [[sources/olmedo2013-andalusia-fish-shellfish-metals\|Olmedo et al. 2013]]. *Determination of toxic elements (mercury, cadmium, lead, tin and arsenic) in fish and shellfish samples. Risk assessment for the consumers*, Environment International | 2013 | Peer-reviewed | ES/MA/MR tHg, MeHg, Cd, Pb, Sn, tAs occurrence in Fresh, canned, and frozen fish and shellfish products representing 43 frequently consumed species/products in Andalusia, Spain; samples collected... (n=485) |
| 80 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 81 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
| 82 | [[sources/mfds2012-food-code-heavy-metals\|Korea Food and Drug 2012]]. *Article 2. Common Standards and Specifications for General Foods*, Korean Food Code | 2012 | Government report | KR Pb, Cd, tHg, MeHg concentrations |
| 83 | [[sources/shue2012-bivalves-tapeng-taiwan\|Shue et al. 2012]]. *Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan*, Advanced Materials Research | 2012 | Peer-reviewed | TW Pb, Cd, Cu, Zn, Ni, Cr occurrence in Six bivalve species (Katelysia hiantina, Anomalocardia squamosa, Perna viridis, Anadara antiquata, Paphia undulata, Sanguinolaria diphos) collected from Ta-Peng... (n=72) |
| 84 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
| 85 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA dietary exposure assessment for Cd identifying shellfish (particularly molluscs) as a significant contributor to the PTMI of 25 µg/kg b.w./month |
| 86 | [[sources/cirillo2010-campania-seafood-metals\|Cirillo et al. 2010]]. *Survey of lead, cadmium, mercury and arsenic in seafood purchased in Campania, Italy*, Food Additives & Contaminants: Part B: Surveillance | 2010 | Peer-reviewed | IT Pb, Cd, tHg, tAs occurrence in Seafood marketed in Campania, Italy from January-May 2007: 162 fish and cephalopod specimens and 30 mussel pools/soft-tissue packs... (n=192) |
| 87 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM opinion establishing the EU Cd TWI at 2.5 µg/kg b.w./week, with shellfish and bivalve molluscs identified among the highest-Cd food groups in European diets |
| 88 | [[sources/lorenzana2009-seafood-arsenic-speciation\|Lorenzana et al. 2009]]. *Arsenic in Seafood: Speciation Issues for Human Health Risk Assessment*, Human and Ecological Risk Assessment | 2009 | Review | US/GLOBAL tAs, iAs occurrence in Scholarly review of worldwide literature and U.S. site-assessment data on total and inorganic arsenic in marine, estuarine, freshwater,... |
| 89 | [[sources/pereira2008-ria-aveiro-mercury-review\|Pereira et al. 2008]]. *Mercury pollution in Ria de Aveiro (Portugal): a review of the system assessment*, Environmental Monitoring and Assessment | 2008 | Peer-reviewed | PT tHg occurrence in Review of Ria de Aveiro mercury studies, including Table 3 biotic-compartment summaries for macroalgae, benthic fauna, and fish... |
| 90 | [[sources/zanon2008-venice-lagoon-organotins\|Zanon et al. 2008]]. *Time trend of Butyl- and Phenyl-Tin contamination in organisms of the Lagoon of Venice (1999-2003)*, Environmental Monitoring and Assessment | 2008 | Peer-reviewed | IT/EU Sn occurrence in Pooled edible-organism samples of Mytilus galloprovincialis and Tapes spp. collected from up to 20 stations in the Lagoon... |
| 91 | [[sources/schoof2007-seafood-arsenic-speciation\|Schoof et al. 2007]]. *Variation of total and speciated arsenic in commonly consumed fish and seafood*, Human and Ecological Risk Assessment | 2007 | Peer-reviewed | US/ES/NO tAs, iAs occurrence in Compiled fish and seafood arsenic-speciation results from 20 studies, summarized into freshwater finfish, anadromous fish, marine fish, crustaceans,... (n=437) |
| 92 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 93 | [[sources/fattorini2006-marine-organisms-arsenic-speciation\|Fattorini et al. 2006]]. *Characterization of arsenic content in marine organisms from temperate, tropical, and polar environments*, Chemistry and Ecology | 2006 | Peer-reviewed | IT/CU tAs, iAs occurrence in Bivalve molluscs, crustaceans, and fish sampled from relatively unimpacted Mediterranean sites in Italy, Cienfuegos Bay in Cuba, and... (n=245) |
| 94 | [[sources/hu2006-tpt-tbt-trophic-bohai-bay\|Jianying et al. 2006]]. *Trophic Magnification of Triphenyltin in a Marine Food Web of Bohai Bay, North China: Comparison to Tributyltin*, Environmental Science & Technology, Vol. 40, No. 10, pp 3142–3147 | 2006 | Peer-reviewed | CN Sn occurrence in Marine food web from Bohai Bay, North China, sampled May, June, and September 2002: phytoplankton/seston (n=3), zooplankton (n=3),... (n=48) |
| 95 | [[sources/park2005-korean-seafood-arsenic-speciation\|Park et al. 2005]]. *Speciation of Six Arsenic Compounds in Korean Seafood Samples by HPLC-ICP-MS*, Key Engineering Materials | 2005 | Peer-reviewed | KR iAs occurrence in Thirty-three Korean seafood samples of seaweed, shrimp, fish, and shellfish plus two certified reference materials, analyzed for six... (n=33) |
| 96 | [[sources/cot2004-mercury-fish-shellfish\|Committee on Toxicity of 2004]]. *Updated COT statement on a survey of mercury in fish and shellfish*, Advice on fish consumption, Annex 3 | 2004 | Government report | GB tHg, MeHg occurrence in COT/SACN review of the 2002 FSA fish and shellfish mercury survey, 1998 MAFF marine fish/shellfish survey context, and... |
| 97 | [[sources/ec2004-scoop-heavy-metals-dietary-exposure\|EC 2004]]. *Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States*, Reports on tasks for scientific cooperation, SCOOP Task 3.2.11 | 2004 | Government report | EU/BE/DK tAs, Cd, Pb, tHg occurrence in Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under... |
| 98 | [[sources/efsa2004-organotins-foodstuffs\|EFSA 2004]]. *Opinion of the Scientific Panel on Contaminants in the Food Chain on a request from the Commission to assess the health risks to consumers associated with exposure to organotins in foodstuffs*, EFSA Journal 2004;102:1-119 | 2004 | Government report | EU/BE/DK Sn occurrence in EU SCOOP Task 3.2.13 occurrence database for organotin compounds in fish and fishery products submitted by Belgium, Denmark,... (n=2110) |
| 99 | [[sources/fattorini2004-cienfuegos-seafood-arsenic-speciation\|Fattorini et al. 2004]]. *Chemical speciation of arsenic in different marine organisms: Importance in monitoring studies*, Marine Environmental Research | 2004 | Peer-reviewed | CU tAs, iAs occurrence in Thirteen species rows of marine organisms collected from Cienfuegos Bay, Cuba, 15 days after a December 2001 arsenic... (n=13) |
| 100 | [[sources/dabeka2003-canadian-total-diet-mercury\|Dabeka et al. 2003]]. *Survey of total mercury in total diet food composites and an estimation of the dietary intake of mercury by adults and children from two Canadian cities, 1998-2000*, Food Additives & Contaminants | 2003 | Peer-reviewed | CA tHg occurrence in Total mercury in 259 total-diet food composites prepared from retail foods purchased in Whitehorse in January-February 1998 and... (n=259) |
| 101 | [[sources/amodio-cocchieri2000-farmed-fish-shellfish-alkyltins\|Amodio-Cocchieri et al. 2000]]. *Alkyltins in farmed fish and shellfish*, International Journal of Food Sciences and Nutrition | 2000 | Peer-reviewed | IT/NO Sn occurrence in Farmed fish and mussels bought from Naples-area retail stores between June 1997 and May 1998, with free-living fish... (n=170) |
| 102 | [[sources/munoz1999-seafood-inorganic-arsenic\|Munoz et al. 1999]]. *Rapid and quantitative release, separation and determination of inorganic arsenic [As(III)+As(V)] in seafood products by microwave-assisted distillation and hydride generation atomic absorption spectrometry*, Journal of Analytical Atomic Spectrometry | 1999 | Peer-reviewed | ES iAs, tAs occurrence in Twenty-one natural seafood products purchased at local retail outlets: fresh anchovy, clam, cockle, mussel, sardine, small squid, squid;... (n=21) |
| 103 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | US iAs, tAs occurrence in Literature review of fish and shellfish arsenic data; exposure scenarios derived from USDA Continuing Survey of Food Intake... |
| 104 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
| 105 | [[sources/harada1995-minamata-methylmercury-poisoning\|Harada 1995]]. *Minamata Disease: Methylmercury Poisoning in Japan Caused by Environmental Pollution*, Critical Reviews in Toxicology | 1995 | Peer reviewed review | JP MeHg, tHg occurrence in Peer-reviewed review of Minamata disease, congenital Minamata disease, historical mercury contamination in Minamata Bay and the Shiranui Sea,... |
| 106 | [[sources/chou-uthe1993-cadmium-american-lobster-belledune\|Chou et al. 1993]]. *Cadmium in American lobster (Homarus americanus) from the area of Belledune Harbour, New Brunswick, Canada: 1980-1992 results*, Canadian Technical Report of Fisheries and Aquatic Sciences No. 1916 | 1993 | Gray literature | CA Cd, Pb, tHg, tAs, Cu, Ag occurrence in American lobster (Homarus americanus) captured 1980-1992 at eight sites in and around Belledune Harbour, New Brunswick, Canada —... |
| 107 | [[sources/kaise1988-marine-organisms-arsenic-speciation\|Kaise et al. 1988]]. *Distribution of inorganic arsenic and methylated arsenic in marine organisms*, Applied Organometallic Chemistry | 1988 | Peer-reviewed | Japan tAs, iAs occurrence in Sixty marine-organism specimens collected from the Miura Peninsula and Shimonoseki coasts in Japan, plus some market samples; fish... (n=60) |
| 108 | [[sources/falconer1983-north-sea-seafood-arsenic\|Falconer et al. 1983]]. *Arsenic levels in fish and shellfish from the North Sea*, Journal of Experimental Marine Biology and Ecology | 1983 | Peer-reviewed | GB tAs occurrence in Commercially important fish and shellfish landed at selected Scottish fishing ports in the 1975-1976 survey, plus additional plaice... |
| 109 | [[sources/brooke1981-fish-shellfish-inorganic-arsenic\|Brooke et al. 1981]]. *Determination of Total Inorganic Arsenic in Fish, Shellfish and Fish Products*, Analyst | 1981 | Peer-reviewed | GB iAs, tAs occurrence in Fish and shellfish product sample rows in Table V: herring, canned crab, haddock, NBS dried tuna, two whelk... (n=9) |
| 110 | [[sources/nielsen1975-nz-molluscs-heavy-metals\|Nielsen et al. 1975]]. *Heavy metal levels in New Zealand molluscs*, New Zealand Journal of Marine and Freshwater Research 9(4), 467-481 | 1975 | Peer-reviewed | NZ Cd, Pb, tHg, Cu, Zn, Fe occurrence in Two hundred and three numbered samples (Appendix sample numbers 1-203) drawn from 199 sampling sites distributed around the... (n=203) |
| 111 | [[sources/reinke1975-fish-shellfish-inorganic-arsenic\|Reinke et al. 1975]]. *The determination of arsenite and arsenate ions in fish and shellfish by selective extraction and polarography*, Environmental Letters | 1975 | Peer-reviewed | CA iAs, tAs occurrence in White muscle or organ tissue from halibut, shrimp, haddock, crab, mackerel, herring, lobster tail, and lobster hepatopancreas analyzed... (n=8) |
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
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
