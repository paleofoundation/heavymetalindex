---
title: "Shellfish"
type: ingredient
commodity: shellfish
label: "Shellfish"
aliases: ["crustaceans and molluscs", seafood-shellfish, shrimp, crustaceans]
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
drivers: [filter-feeding, bioaccumulation, sediment-burden, harvest-water-quality, depuration-status]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/bivalve-molluscs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 28
---

# Shellfish

Shellfish is the regulatory umbrella covering crustaceans (shrimp, crab, lobster, crayfish) and molluscs (mussels, clams, oysters, scallops, octopus, squid). The category groups together aquatic invertebrates whose feeding ecology — filter-feeding for bivalves, scavenging and detritivory for crustaceans — produces a distinctive contamination signal: high cadmium concentrations from sediment-water concentration gradients, total arsenic in the high-ppb-to-low-ppm range driven primarily by non-toxic arsenobetaine but with variable inorganic arsenic fractions, and occasional Pb spikes in waters with industrial or marine-paint legacies.

The cadmium-shellfish relationship is the strongest single-metal signal in the dietary-exposure literature: EFSA, JECFA, and the FDA all treat bivalve molluscs as a leading dietary Cd source for shellfish-consuming populations, comparable to organ meats and cereals. The total-vs-inorganic arsenic distinction (per CLAUDE.md Part 14) is non-negotiable for shellfish; tAs values appear alarmingly high but most of that signal is arsenobetaine, which is excreted intact and lacks the toxicity of iAs.

This page is the structural umbrella; [[ingredients/bivalve-molluscs]] carries bivalve-specific evidence and is the higher-risk subcategory for Cd. Crustacean-specific detail will land on dedicated pages as the corpus grows.

## Routing

Direct evidence for shellfish-as-category lands here. Bivalve-specific evidence routes to [[ingredients/bivalve-molluscs]]; product-level routing flows through seafood-bearing baby food and prepared-meal product pages.

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Cd, tAs, and the iAs/tAs ratio are the priority synthesis targets given seven contributing source pages already in scope. Speciation discipline (per Part 14) is load-bearing: never substitute tAs for iAs in shellfish prose or values.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | 10-year Italian regulatory monitoring of Cd, Pb, and tHg across 5,854 seafood samples including bivalves (17.41%) and crustaceans (7.69%), with cephalopod Cd exceedances (n=17) concentrated in squids against EU 2023/915 |
| 2 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | Methods paper validating an Al3+/Cu2+ fluorescent sensor via spiked-recovery in scallops and razor clams; no ambient shellfish Al concentrations reported |
| 3 | [[sources/taylor2025-seafood-benefits-contaminants\|Taylor et al. 2025]]. *Seafood Benefits and Contaminants: A Comprehensive Review of Health Impacts, Safety Concerns, and Risk Mitigation Strategies*, Foods | 2025 | Peer-reviewed | Broad secondary review of Hg, Pb, Cd, and tAs concentrations across fish and shellfish matrices, summarizing US FDA/EPA advisory frameworks and vulnerable-population guidance |
| 4 | [[sources/xia2025-whole-cell-biosensor-hg-food\|Xia et al. 2025]]. *Replacing Manual Operation with Bio-Automation II: Construction of a Biological Digestion Gene Circuit to Eliminate the Interference of Food Matrices in the Rapid Detection of Heavy Metals*, Foods | 2025 | Peer-reviewed | Methods paper validating a whole-cell biosensor for Hg2+ detection in spiked shellfish and fish matrices; no occurrence measurements reported |
| 5 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | Global WHO FOSCOLLAB analysis of 138,281 records for tHg, MeHg, Cd, Pb, tAs, and iAs across fish, molluscs, crustaceans, and cephalopods, with benthic and filter-feeding shellfish biodiluting Hg but accumulating Cd, Pb, and As |
| 6 | [[sources/berber2024-crayfish-metal-content-turkey\|Berber et al. 2024]]. *Metal content and fatty acid profiles in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake, Turkey: seasonal variation and health risk assessment*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | Fe, Zn, Al, Cu, Mn, Se, As, Hg, Cd, and Pb in narrow-clawed crayfish (Pontastacus leptodactylus) from Atikhisar Dam Lake (Turkey) across 12 months, with seasonal and sex-based variation reported alongside EDI/THQ consumer risk |
| 7 | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|Bruno et al. 2024]]. *Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health*, Frontiers in Toxicology | 2024 | Peer-reviewed | IT/EU tAs, Cd, Pb, tHg, Ni, Cr occurrence in 80 specimens of Mytilus galloprovincialis (mussel) and 80 specimens of Tapes decussatus (clam) collected from Faro Lake, Messina,... (n=160) |
| 8 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Nickel occurrence in shellfish and molluscs within a Zhejiang Province six-category dietary survey (2628 samples), with children 0–6 the only segment showing unacceptable cumulative Ni exposure (THQ 1.078) |
| 9 | [[sources/rohonczy2024-arctic-foodweb-cd-hg\|Rohonczy et al. 2024]]. *Cadmium and mercury trophic transfer in the Arctic marine food web of Hudson Bay*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | CA Cd, tHg, MeHg occurrence in Multiple Arctic marine species from Hudson Bay, Canada: blue mussel, common eider, sculpin, Arctic cod, ringed seal (n=781) |
| 10 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | iAs, tAs occurrence in Systematic review of published arsenic occurrence and speciation studies in marine organisms; no single primary cohort |
| 11 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 12 | [[sources/bjerregaard2023-mercury-mussels-denmark\|Bjerregaard et al. 2023]]. *In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | DK/EU tHg occurrence in Blue mussels (Mytilus edulis), periwinkles (Littorina littorea), brown shrimps, and amphipods from Nissum Broad coastal stations, Denmark; also... (n=137) |
| 13 | [[sources/blanco2023-mercury-fish-valencia\|Blanco et al. 2023]]. *Mercury levels in fish in the Valencian Community: temporal evolution (2011-2017) and associated factors*, Revista Española de Salud Pública | 2023 | Peer-reviewed | Total and methylmercury in 635 Valencian (Spain) seafood-surveillance samples including shellfish, with median tHg 0.20 mg/kg ww and a downward Hg trend (~7% per year for swordfish) over 2011–2017 |
| 14 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 15 | [[sources/liu2023-arsenic-seafood-digestion\|Liu et al. 2023]]. *Transformation of arsenic species from seafood consumption during in vitro digestion*, Frontiers in Nutrition | 2023 | Peer-reviewed | In vitro BARGE UBM digestion of crab and scallop demonstrating that organoarsenic species (AsB, AsC, DMA, MMA) convert to As(V) during digestion, raising bioavailable iAs 2–3-fold above pre-digestion speciation |
| 16 | [[sources/onyegeme-okerenta2023-shellfish-nigeria\|Onyegeme-Okerenta et al. 2023]]. *Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment*, Environmental Analysis, Health and Toxicology | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb, Ni occurrence in Three shellfish species (Penaeus monodon, Crassostrea rhizophorae, Tympanostomus fuscatus) from three rivers in Niger Delta, Nigeria (Buguma, Krakrama,... (n=27) |
| 17 | [[sources/ramos-miras2023-pte-shrimp-ecuador\|Ramos-Miras et al. 2023]]. *Potentially toxic element bioaccumulation in consumed indoor shrimp farming associated with diet, water and sediment levels*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | tAs, Cd, Cr, Ni, Pb, and tHg in indoor-farmed Pacific White shrimp (Litopenaeus vannamei) head and tail tissues from El Oro Province (Ecuador), with head As (3.52–6.11 mg/kg DW) exceeding the EU 4 mg/kg cephalothorax limit |
| 18 | [[sources/cegolon2022-hg-hair-trieste\|Cegolon et al. 2022]]. *Concentration of mercury in human hair and associated factors in residents of the Gulf of Trieste (North-Eastern Italy)*, Environmental Science and Pollution Research | 2022 | Peer-reviewed | Hair-tHg biomonitoring in 301 Gulf of Trieste (Italy) residents identifying shellfish/crayfish/mollusk preference as the strongest positive predictor of elevated hair Hg (adjusted RC = 0.35) |
| 19 | [[sources/moura2022-hg-jaguaribe-estuary\|Moura et al. 2022]]. *Mercury in the Jaguaribe River Estuary, Northeast Brazil: Sources, Distribution, and Bioavailability*, International Journal of Environmental Research and Public Health | 2022 | Peer-reviewed | Total Hg in shrimp (Littopenaeus vannamei) tissues alongside sediments and water from the Jaguaribe River Estuary (NE Brazil), with annual Hg load to the estuary estimated at 243 kg/year |
| 20 | [[sources/cfs2019-organotin-aquatic-hongkong\|Centre for Food Safety 2019]]. *Organotin Compounds in Aquatic Products Available at Local Markets*, Risk Assessment Studies Report No. 60, Centre for Food Safety, Hong Kong FEHD | 2019 | Government report | Organotin compounds (TBT, DBT, DOT, TPT) in 341 Hong Kong market shellfish, crustacean, and molluscan samples, with TPT dominant and dietary exposures at 20–57% of the EFSA group TDI; distinct from inorganic Sn toxicology |
| 21 | [[sources/fda-epa-fish-consumption-advice\|FDA 2017]]. *Advice About Eating Fish — For Those Who Might Become or Are Pregnant or Breastfeeding and Children Ages 1 to 11 Years*, U.S. FDA and U.S. EPA | 2017 | Government report | Joint FDA/EPA consumer-facing fish and shellfish consumption guidance anchored to MeHg exposure, classifying species by mercury tier for pregnant women and children |
| 22 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical toxicological chapter on Cd covering dietary exposure sources including shellfish and bivalve molluscs as high-Cd contributors |
| 23 | [[sources/shue2012-bivalves-tapeng-taiwan\|Shue et al. 2012]]. *Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan*, Advanced Materials Research | 2012 | Peer-reviewed | Cu, Zn, Pb, Cd, Ni, and Cr across six bivalve species from Ta-Peng Bay (Taiwan) over four seasons (n=72), with Pb/Ni/Cr higher in winter and Cd accumulation significantly species-dependent (ANOVA p<0.001) |
| 24 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA dietary exposure assessment for Cd identifying shellfish (particularly molluscs) as a significant contributor to the PTMI of 25 µg/kg b.w./month |
| 25 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM opinion establishing the EU Cd TWI at 2.5 µg/kg b.w./week, with shellfish and bivalve molluscs identified among the highest-Cd food groups in European diets |
| 26 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | EPA-822-R-97-003 baseline establishing that over 95% of arsenic in marine fish and shellfish is organoarsenic (primarily arsenobetaine), with associated dietary iAs exposure scenarios derived from USDA intake data |
<!-- END: hmi-source-legend -->

