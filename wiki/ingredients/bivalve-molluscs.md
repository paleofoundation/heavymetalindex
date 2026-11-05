---
retired: true
noindex: true
redirect_target: ingredients/molluscs
retirement_date: 2026-10-25
retirement_authority: "HMI-HELD-TRIAGE-1 (Elon PASS 25 Oct 2026 21:01): 301 to parent; findings stay in the store"
title: Bivalve Molluscs (Excluding Oysters)
dek: "Filter feeding shellfish, including clams, mussels, scallops and cockles, are covered separately from oysters. Explore the evidence on cadmium accumulation, dietary exposure and regulatory limits."
rail_highlights:
  - label: Exposure
    text: Regular bivalve consumers exceeded EFSA tolerable weekly cadmium intake
    source: sources/efsa-cadmium-contam-2009
    source_label: EFSA opinion
type: ingredient
commodity: bivalve-molluscs
aliases: [clams, mussels, scallops, cockles, razor-clams, oysters-separate-page, quahog, geoduck, oyster]
category: shellfish-mollusc
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1500
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [300, 2000]
    p95_ppb: 5000
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [20, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 80]
    p95_ppb: 150
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 1500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 600]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [1000, 8000]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [filter-feeding, marine-water-cadmium, bioaccumulation, species, harvest-region]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/wild-harvested-near-estuaries]]", "[[ingredients/older-specimens]]"]
used_in_products: ["[[products/clam-chowder]]", "[[products/frozen-shellfish-mixes]]", "[[products/prepared-seafood]]", "[[products/shellfish-sauces]]", "[[products/seafood-supplements]]"]
audience: [regulator, educator, consumer, app]
sources: 75
wiki_doi: null
updated: 2026-05-16
hero_image: /static/heroes/organotins-shellfish-marine-context.webp
quick_read:
  summary: "Bivalve cadmium concentrations depend on species and harvesting conditions, and routine cooking does not meaningfully remove tissue-bound cadmium."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]] is the central concern described for this food category"
    - label: Main drivers
      text: "filter-feeding uptake from seawater, species differences, specimen age and size, and contaminated harvesting waters"
    - label: Practical framing
      text: "keep species and harvest conditions distinct; cooking, canning and freezing do not meaningfully remove [[metals/cadmium|cadmium]]"
hero_image_alt: "Shellfish, a marine stone and a glass vessel illustrating bivalve molluscs (excluding oysters) ingredient context."
---

# Bivalve Molluscs (excluding Oysters)

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Bivalve cadmium concentrations depend on species and harvesting conditions, and routine cooking does not meaningfully remove tissue-bound cadmium.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a> is the central concern described for this food category</li>
    <li><strong>Main drivers:</strong> filter-feeding uptake from seawater, species differences, specimen age and size, and contaminated harvesting waters</li>
    <li><strong>Practical framing:</strong> keep species and harvest conditions distinct; cooking, canning and freezing do not meaningfully remove <a href="/metals/cadmium">cadmium</a></li>
  </ul>
</div>

This page draws on evidence from [[sources/efsa-cadmium-contam-2009|EFSA]] and [[sources/codex-cxs-193-1995|Codex Alimentarius]], together with 6 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

Bivalve molluscs other than oysters are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as the food category with the highest mean cadmium concentration in the European occurrence dataset, and regular consumers of this commodity show mean dietary cadmium exposure at approximately twice the EFSA tolerable weekly intake. Oysters are held in a separate analytic category because their cadmium concentrations and biological behavior diverge sufficiently to warrant distinct treatment; that split will be reflected in the wiki when a dedicated oysters page is created.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 100–500 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| Cd | n=10 | 300–2000 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| iAs | n=2 | 20–100 | low | [[sources/mancuso2024-food-contamination-cvd\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=4 | 1000–8000 | medium | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/bao2024-sp-icp-ms-nps-mussels\|2]], [[sources/mancuso2024-food-contamination-cvd\|3]] |
| tHg | n=9 | 10–80 | medium | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|1]], [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|2]], [[sources/dogruyol2024-mediterranean-mussels-health-risk\|3]] |
| Ni | n=2 | 200–1500 | low | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 100–600 | low | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|1]], [[sources/onyegeme-okerenta2023-shellfish-nigeria\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Bivalve molluscs are filter-feeders that accumulate cadmium directly from seawater across their gill and mantle tissues, concentrating the metal at levels orders of magnitude above the dissolved seawater concentration. Species vary substantially in bioaccumulation factor; clams, mussels, scallops, and cockles (the species grouped in the EFSA "bivalve molluscs other than oysters" category) consistently show higher cadmium concentrations than oysters under the same environmental conditions. Older specimens, larger specimens, and specimens harvested from waters with elevated cadmium (estuaries near historical industrial discharge, rivers draining cadmium-mineralized watersheds) carry higher cadmium than younger specimens from cleaner waters.

## Ranges by source, region, and variety

EFSA 2009 Table 1 reports a mean cadmium concentration for bivalve molluscs (excluding oysters) of 0.380 mg/kg, the highest mean in the entire EFSA food-commodity ranking. Crustaceans separately mean 0.093 mg/kg and cephalopods 0.285 mg/kg. Regular consumers of bivalve molluscs show mean dietary cadmium exposure of 4.6 µg/kg b.w./week, approximately twofold the EFSA mean adult exposure of 2.3 and approximately twofold the EFSA TWI of 2.5._

## Processing effects

_Pending. Cadmium is incorporated into the bivalve tissue and is not meaningfully removed by cooking, canning, or freezing. Removing the digestive gland (the "hepatopancreas" or "tomalley" in lobsters, the analogous tissue in bivalves) can reduce cadmium intake from some species because the metal preferentially accumulates there, but consumer-level preparation rarely separates these tissues in bivalve molluscs._

## Ingredient-derivative risk

Prepared shellfish dishes, shellfish-based sauces, clam chowders, and frozen shellfish mixes carry cadmium at the concentration of the source bivalves. Shellfish-based nutritional supplements and traditional preparations (such as fermented mussel or clam products in some Asian cuisines) can concentrate cadmium further through water loss during processing.

## Mitigation options

_Pending. Harvest-region selection, species selection within the broader bivalve category, and regulatory testing programs are the primary mitigation levers. The OEHHA Proposition 65 Cd MADL of 4.1 µg/day is relevant for retail bivalve products sold in California; regular consumers can approach or exceed this daily threshold from several servings per week._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for bivalve molluscs; historically one of the higher matrix-specific values in CXS 193, reflecting the biological reality of filter-feeder bioaccumulation.
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU maximum levels for bivalve molluscs are 1.0 mg/kg (1000 ug/kg) Cd and 1.50 mg/kg (1500 ug/kg) Pb; the general EU mercury maximum level for crustaceans, molluscs, and non-listed fish is 0.50 mg/kg (500 ug/kg). For Pecten maximus, the Cd/Pb rows apply to adductor muscle and gonad only.
- [[regulations/oehha-cadmium-prop65]] — OEHHA Prop 65 MADL of 4.1 µg/day oral applies to consumer products sold in California; frequent bivalve mollusc consumption can trigger the Prop 65 warning threshold.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/akkaya2025-marmara-fishery-products-metals\|Akkaya et al. 2025]]. *Determination of Heavy Metal Levels and Assessment of L. monocytogenes and Salmonella spp. Presence in Fishery Products and Mussels from the Marmara Region, Türkiye*, Toxics | 2025 | Peer-reviewed | TR Pb, Cd, tHg, tAs, Cu occurrence in Fishery products and mussels collected from provinces in the Marmara region of Türkiye between March 2020 and November... (n=625) |
| 2 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg, MeHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 3 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Improving nutritional intakes and reducing metal(loid) exposures from wild fish broth among Inuit pregnant women*, Science of the Total Environment | 2025 | Peer-reviewed | CA tHg, MeHg, tAs, iAs, Cd, Pb, Fe, K, Ca, Mg, Zn, Se occurrence in Nunavik (northern Quebec), Canada. Country-food ingredients sampled with Inuit partners from Inukjuak, Kangiqsualujjuaq, Puvirnituq, and Salluit: lake trout... |
| 4 | [[sources/li2025-ratiometric-fluorescent-sensor-al-cu-food\|Li et al. 2025]]. *A ratiometric fluorescent sensor for Al3+ and Cu2+ detection in food samples*, Frontiers in Nutrition | 2025 | Peer-reviewed | Methods paper validating an Al3+/Cu2+ fluorescent sensor with spiked-recovery experiments in scallops and razor clams; no ambient Al concentrations reported |
| 5 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 6 | [[sources/singhato2025-thailand-seafood-heavy-metals\|Singhato et al. 2025]]. *Risk Assessment of Toxic Heavy Metal Exposure in Selected Seafood Species from Thailand*, Foods | 2025 | Peer-reviewed | TH tAs, Cd, tHg, Pb occurrence in 20 commonly consumed seafood species from Thailand (4 shrimp/prawn, 4 crab, 3 squid, 8 shellfish, 2 marine fish),... (n=60) |
| 7 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, Cd, Pb, tAs occurrence in 138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA,... (n=138281) |
| 8 | [[sources/bao2024-sp-icp-ms-nps-mussels\|Bao 2024]]. *Single-particle ICP-MS characterisation of metal nanoparticles in mussels*, unknown | 2024 | Peer-reviewed | SP-ICP-MS characterisation of nano-particulate vs dissolved fractions of Pb, Cd, and tAs in mussel tissue; speciation and bioavailability context rather than total occurrence concentrations |
| 9 | [[sources/bruno2024-metals-mussels-clams-faro-lake-sicily\|Bruno et al. 2024]]. *Mineral composition in mussel Mytilus galloprovincialis and clam Tapes decussatus from Faro Lake of Messina: risk assessment for human health*, Frontiers in Toxicology | 2024 | Peer-reviewed | IT/EU tAs, Cd, Pb, tHg, Ni, Cr occurrence in 80 specimens of Mytilus galloprovincialis (mussel) and 80 specimens of Tapes decussatus (clam) collected from Faro Lake, Messina,... (n=160) |
| 10 | [[sources/dogruyol2024-mediterranean-mussels-health-risk\|Dogruyol et al. 2024]]. *Evaluation of Health Risks Attributed to Toxic Trace Elements and Selenium in Farmed Mediterranean Mussels from Türkiye and Bulgaria*, Environmental Science and Pollution Research (published online 1 February 2024) | 2024 | Peer-reviewed | Measured Cd, tHg, and Pb in farmed *Mytilus galloprovincialis* from four farms in Türkiye and Bulgaria (n=48); all means below EU/Codex MLs; seasonal and site-level concentration data |
| 11 | [[sources/mancuso2024-food-contamination-cvd\|Mancuso et al. 2024]]. *Food contamination and cardiovascular disease: a narrative review* | 2024 | Peer-reviewed | EU/global Pb, Cd, iAs, tAs, tHg occurrence in null |
| 12 | [[sources/bjerregaard2023-mercury-mussels-denmark\|Bjerregaard et al. 2023]]. *In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | DK/EU tHg occurrence in Blue mussels (Mytilus edulis), periwinkles (Littorina littorea), brown shrimps, and amphipods from Nissum Broad coastal stations, Denmark; also... (n=137) |
| 13 | [[sources/cardoso2023-mercury-portuguese-coast-seafood\|Cardoso et al. 2023]]. *Seasonal characterization of mercury contamination along the Portuguese coast: human health and environmental risk assessment*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | PT/EU tHg occurrence in Seasonal sampling over 1 year at three Portuguese estuaries (Ria de Aveiro, Tagus, Ria Formosa); water, macroalgae, and... |
| 14 | [[sources/diogene2023-rascs-contaminants-seafood\|Diogène et al. 2023]]. *Risk Assessment Strategies for Contaminants in Seafood (RASCS)*, EFSA Supporting Publications 2023:EN-8419 | 2023 | Government report | EU tAs, iAs, Pb, Cd, tHg, MeHg, Ni, Cr, Al occurrence in Strategy/programmatic report from a seven-institution EU consortium (IRTA Spain coordinator, CREDA Spain, IPMA Portugal, ISS Italy, Ghent University... |
| 15 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 16 | [[sources/hall2023-methylmercury-tidal-marsh\|Hall et al. 2023]]. *Linking Mesoscale Spatial Variation in Methylmercury Production to Bioaccumulation in Tidal Marsh Food Webs*, Environmental Science & Technology | 2023 | Peer-reviewed | US MeHg, tHg occurrence in Primary and secondary consumers (gastropods, bivalves, amphipods, beetles, spiders, shrimp, crabs, fish) from four marsh features at three... (n=116) |
| 17 | [[sources/kim2023-korea-fishery-products-metals\|Kim et al. 2023]]. *Risk Assessment and Determination of Arsenic and Heavy Metals in Fishery Products in Korea*, Foods | 2023 | Peer-reviewed | KR Pb, Cd, tAs, tHg, MeHg occurrence in Fishery products purchased from grocery stores and markets in Seoul, Incheon, Daejeon, Gangneung, Busan, and Gwangju from January... (n=1186) |
| 18 | [[sources/onyegeme-okerenta2023-shellfish-nigeria\|Onyegeme-Okerenta et al. 2023]]. *Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment*, Environmental Analysis, Health and Toxicology | 2023 | Peer-reviewed | NG tAs, Cd, Cr, Pb, Ni occurrence in Three shellfish species (Penaeus monodon, Crassostrea rhizophorae, Tympanostomus fuscatus) from three rivers in Niger Delta, Nigeria (Buguma, Krakrama,... (n=27) |
| 19 | [[sources/simionov2023-danube-fish-seafood-pte-microplastics\|Simionov et al. 2023]]. *Human health risk assessment of potentially toxic elements and microplastics accumulation in products from the Danube River Basin fish market*, Environmental Toxicology and Pharmacology | 2023 | Peer-reviewed | RO/GR/IT Al, tAs, Cd, Cr, Cu, Ni, Pb, Zn, tHg occurrence in Fish and seafood specimens purchased from retailers in Galati, Romania: 18 fish species and 5 seafood species, n=10... (n=230) |
| 20 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr occurrence in null |
| 21 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 22 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA dietary Cd exposure assessment confirming the PTMI of 25 µg/kg b.w./month; bivalve molluscs among the highest-concentration categories in the global occurrence dataset |
| 23 | [[sources/ospar2022-metals-fish-shellfish-sediment\|Larsen et al. 2022]]. *Status and Trend for Heavy Metals (Mercury, Cadmium and Lead) in Fish, Shellfish and Sediment*, OSPAR Commission, Quality Status Report 2023 Common Indicator Assessment | 2022 | Government report | EU/BE/DK Pb, Cd, tHg, Cu, Zn, Cr, Ni, tAs, Co, Ag, Sn occurrence in Aggregated CEMP monitoring data from 603 to 647 biota monitoring sites and 393 to 401 sediment monitoring sites... |
| 24 | [[sources/vainio2022-baltic-mercury-food-web\|Vainio et al. 2022]]. *Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits*, Environmental Science & Technology | 2022 | Peer-reviewed | FI/SE/DK tHg occurrence in 30 species from the Baltic Archipelago Sea (southwestern Finland), sampled 2017–2019 (white-tailed eagle 2013–2019); birds (3 spp.), fish... (n=136) |
| 25 | [[sources/yap-almutairi2022-nickel-seafood-malaysia\|Yap et al. 2022]]. *Comparative Study of Potentially Toxic Nickel and Their Potential Human Health Risks in Seafood (Fish and Mollusks) from Peninsular Malaysia*, Biology | 2022 | Peer-reviewed | MY Ni occurrence in Three primary datasets newly measured in this study plus one cited dataset. (1) 19 species of commercial marine... (n=88) |
| 26 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 27 | [[sources/lin2021-taiwan-seafood-mercury-tds\|Lin et al. 2021]]. *Dietary Exposure of the Taiwan Population to Mercury Content in Various Seafood Assessed by a Total Diet Study*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | TW tHg, MeHg occurrence in Taiwan total-diet-study seafood sample set purchased from fishing harbors, traditional markets, afternoon markets, supermarkets, and discount stores across... (n=140) |
| 28 | [[sources/mehouel2021-algeria-seafood-metals-review\|Mehouel et al. 2021]]. *Review of the toxic trace elements arsenic, cadmium, lead and mercury in seafood species from Algeria and contiguous waters in the Southwestern Mediterranean Sea*, Environmental Science and Pollution Research | 2021 | Peer reviewed review | DZ/TN/MA tAs, Cd, Pb, tHg, MeHg occurrence in Narrative review of published As, Cd, Pb, Hg, and MeHg occurrence studies in fish, mollusks, and crustaceans from... |
| 29 | [[sources/novakov2021-serbia-mussels-metals-pahs\|Novakov et al. 2021]]. *Heavy metals and PAHs in mussels on the Serbian market and consumer exposure*, Food Additives & Contaminants: Part B | 2021 | Peer-reviewed | Serbia Pb, Cd, tHg, tAs occurrence in Eighty-four mussel-meat samples collected from supermarkets and fish markets in Serbia from January 2019 to March 2020: 42... (n=84) |
| 30 | [[sources/raju2021-bivalves-cagayan-philippines\|Raju et al. 2021]]. *Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines*, Scholars Academic Journal of Biosciences 9(10):256-258 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two bivalve species from Cagayan Valley, Philippines: freshwater clam (Corbicula fluminea) and marine mussel (Mytilus edulis); collected with... (n=2) |
| 31 | [[sources/valencia2021-canacao-bay-oyster-pb-cd\|Valencia et al. 2021]]. *Heavy metal accumulation and risk assessment of lead and cadmium in cultured oysters (Crassostrea iredalei) of Cañacao Bay, Philippines*, Sustinere: Journal of Environment and Sustainability 5(2), 64-78 | 2021 | Peer-reviewed | PH Pb, Cd occurrence in Two hundred fourteen cultured slipper-cupped oysters (Crassostrea iredalei) of marketable shell length (45-55 mm) collected from three sampling... (n=214) |
| 32 | [[sources/barchiesi2020-shellfish-metals-central-italy\|Barchiesi et al. 2020]]. *Heavy Metals Contamination in Shellfish: Benefit-Risk Evaluation in Central Italy*, Foods | 2020 | Peer-reviewed | IT Cd, Pb, tHg occurrence in Cd, Pb, and Hg analytical results for shellfish collected along the Italian coastline from January 2017 through December... (n=2207) |
| 33 | [[sources/chung2020-hong-kong-seafood-organotins\|Chung et al. 2020]]. *Occurrence of organotin compounds in seafood from Hong Kong market*, Marine Pollution Bulletin | 2020 | Peer-reviewed | HK Sn occurrence in Three hundred forty-one seafood samples collected from wet markets and supermarkets in different regions of Hong Kong between... (n=341) |
| 34 | [[sources/djedjibegovic2020-bih-commercial-seafood-metals\|Djedjibegovic et al. 2020]]. *Heavy metals in commercial fish and seafood products and risk assessment in adult population in Bosnia and Herzegovina*, Scientific Reports | 2020 | Peer-reviewed | BA/ES/PT Cd, tHg, Pb occurrence in Commercial fish and seafood products purchased from retail in Bosnia and Herzegovina in June 2019, with country-of-origin labels... (n=37) |
| 35 | [[sources/romero-estevez2020-bivalves-santa-rosa-ecuador\|Romero-Estévez et al. 2020]]. *An Overview of Cadmium, Chromium, and Lead Content in Bivalves Consumed by the Community of Santa Rosa Island (Ecuador) and Its Health Risk Assessment*, Frontiers in Environmental Science 8:134 | 2020 | Peer-reviewed | EC/EU Cd, Cr, Pb occurrence in Fifty composite bivalve soft-tissue samples (~10 individuals per composite) of Anadara tuberculosa and Anadara similis (locally 'concha prieta',... (n=50) |
| 36 | [[sources/tamele2020-african-seafood-metals-review\|Tamele et al. 2020]]. *Lead, Mercury and Cadmium in Fish and Shellfish from the Indian Ocean and Red Sea (African Countries): Public Health Challenges*, Journal of Marine Science and Engineering | 2020 | Peer reviewed review | EG/DJ/KE Pb, tHg, Cd occurrence in Narrative review of Pb, Hg, and Cd in fish and shellfish from African countries bordering the Indian Ocean... |
| 37 | [[sources/chen2019-china-oyster-organotins\|Chen et al. 2019]]. *Organotin contamination in commercial and wild oysters from China: Increasing occurrence of triphenyltin*, Science of the Total Environment | 2019 | Peer-reviewed | CN Sn occurrence in Commercial oysters from Shanghai seafood markets in November 2014 and wild oysters from fourteen coastal Chinese cities in... |
| 38 | [[sources/matsumoto-tanibuchi2019-seaweed-seafood-ias\|Matsumoto-Tanibuchi et al. 2019]]. *Determination of Inorganic Arsenic in Seaweed and Seafood by LC-ICP-MS: Method Validation*, Journal of AOAC International | 2019 | Peer-reviewed | JP tAs, iAs occurrence in Japanese local-market food samples: eight dried seaweed products, seven seafood muscle/edible-portion samples, and two seafood-derived sauces/products in Table... (n=17) |
| 39 | [[sources/lehel2018-hungary-seafood-metals\|Lehel et al. 2018]]. *Heavy metals in seafood purchased from a fishery market in Hungary*, Food Additives & Contaminants: Part B | 2018 | Peer-reviewed | HU/DK/IT tAs, Cd, Pb, tHg occurrence in Seafood purchased weekly for 20 weeks from a fishery product market in Hungary: shellfish n=42 from Denmark and... (n=114) |
| 40 | [[sources/rajeshkumar2018-taihu-lake-fish-oyster-metals\|Rajeshkumar et al. 2018]]. *Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China*, Chemosphere | 2018 | Peer-reviewed | CN Pb, Cd, Cr, Cu occurrence in Surface water (n=28: 7 sites × 4 seasons), sediment (n=28: 7 sites × 4 seasons), crucian carp Carassius... (n=28) |
| 41 | [[sources/helcom2017-core-indicator-metals-baltic\|HELCOM et al. 2017]]. *Metals (lead, cadmium and mercury) — HELCOM core indicator report*, HELCOM Core Indicator Report (HOLAS II component), ISSN 2343-2543 | 2017 | Government report | EU/DE/DK Pb, Cd, tHg occurrence in Aggregated monitoring data from the HELCOM COMBINE database (held at ICES) for the assessment period 2011-2015, with all... |
| 42 | [[sources/lee2016-taiwan-seafood-organotins\|Lee et al. 2016]]. *Health risk assessment of the intake of butyltin and phenyltin compounds from fish and seafood in Taiwanese population*, Chemosphere | 2016 | Peer-reviewed | TW Sn occurrence in Two hundred Taiwanese fishery products provided from 25 fishery markets in 2011: freshwater fish (n = 64), saltwater... (n=200) |
| 43 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter identifying bivalve molluscs as a leading dietary Cd source, with mechanistic explanation of filter-feeding bioaccumulation |
| 44 | [[sources/ho2014-hong-kong-seafood-organotins\|Ho et al. 2014]]. *Organotin contamination in seafood and its implication for human health risk in Hong Kong*, Marine Pollution Bulletin | 2014 | Peer-reviewed | HK Sn occurrence in Five analytical replicates for each of 11 commonly available Hong Kong seafood species: three gastropods, two bivalves, and... (n=55) |
| 45 | [[sources/mansour2014-monitoring-health-risk-food-chapter\|Mansour 2014]]. *Monitoring and Health Risk Assessment of Heavy Metal Contamination in Food*, Practical Food Safety: Contemporary Issues and Future Directions (Wiley-Blackwell) | 2014 | Book chapter | EG/CN/IN Pb, Cd, tHg, tAs, Cr, Ni, Sn, Al occurrence in Book chapter authored by Sameeh A. Mansour (Environmental Toxicology Research Unit, Pesticide Chemistry Department, National Research Centre, Cairo)... |
| 46 | [[sources/copat2013-mediterranean-fish-shellfish-metals\|Copat et al. 2013]]. *Heavy metals concentrations in fish and shellfish from eastern Mediterranean Sea: Consumption advisories*, Food and Chemical Toxicology | 2013 | Peer-reviewed | IT tAs, Cd, Cr, Pb, Mn, Ni, V, Zn occurrence in Five fish species from the Catania fish market, n=30 specimens per species, plus 30 aliquots from a homogenized... (n=180) |
| 47 | [[sources/olmedo2013-andalusia-fish-shellfish-metals\|Olmedo et al. 2013]]. *Determination of toxic elements (mercury, cadmium, lead, tin and arsenic) in fish and shellfish samples. Risk assessment for the consumers*, Environment International | 2013 | Peer-reviewed | ES/MA/MR tHg, MeHg, Cd, Pb, Sn, tAs occurrence in Fresh, canned, and frozen fish and shellfish products representing 43 frequently consumed species/products in Andalusia, Spain; samples collected... (n=485) |
| 48 | [[sources/shue2012-bivalves-tapeng-taiwan\|Shue et al. 2012]]. *Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan*, Advanced Materials Research | 2012 | Peer-reviewed | TW Pb, Cd, Cu, Zn, Ni, Cr occurrence in Six bivalve species (Katelysia hiantina, Anomalocardia squamosa, Perna viridis, Anadara antiquata, Paphia undulata, Sanguinolaria diphos) collected from Ta-Peng... (n=72) |
| 49 | [[sources/cirillo2010-campania-seafood-metals\|Cirillo et al. 2010]]. *Survey of lead, cadmium, mercury and arsenic in seafood purchased in Campania, Italy*, Food Additives & Contaminants: Part B: Surveillance | 2010 | Peer-reviewed | IT Pb, Cd, tHg, tAs occurrence in Seafood marketed in Campania, Italy from January-May 2007: 162 fish and cephalopod specimens and 30 mussel pools/soft-tissue packs... (n=192) |
| 50 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 51 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM opinion establishing the EU Cd TWI; bivalves (excluding oysters) reported as the highest-mean-Cd food category (0.380 mg/kg), with regular consumers reaching approximately twice the TWI |
| 52 | [[sources/pereira2008-ria-aveiro-mercury-review\|Pereira et al. 2008]]. *Mercury pollution in Ria de Aveiro (Portugal): a review of the system assessment*, Environmental Monitoring and Assessment | 2008 | Peer-reviewed | PT tHg occurrence in Review of Ria de Aveiro mercury studies, including Table 3 biotic-compartment summaries for macroalgae, benthic fauna, and fish... |
| 53 | [[sources/zanon2008-venice-lagoon-organotins\|Zanon et al. 2008]]. *Time trend of Butyl- and Phenyl-Tin contamination in organisms of the Lagoon of Venice (1999-2003)*, Environmental Monitoring and Assessment | 2008 | Peer-reviewed | IT/EU Sn occurrence in Pooled edible-organism samples of Mytilus galloprovincialis and Tapes spp. collected from up to 20 stations in the Lagoon... |
| 54 | [[sources/schoof2007-seafood-arsenic-speciation\|Schoof et al. 2007]]. *Variation of total and speciated arsenic in commonly consumed fish and seafood*, Human and Ecological Risk Assessment | 2007 | Peer-reviewed | US/ES/NO tAs, iAs occurrence in Compiled fish and seafood arsenic-speciation results from 20 studies, summarized into freshwater finfish, anadromous fish, marine fish, crustaceans,... (n=437) |
| 55 | [[sources/fattorini2006-marine-organisms-arsenic-speciation\|Fattorini et al. 2006]]. *Characterization of arsenic content in marine organisms from temperate, tropical, and polar environments*, Chemistry and Ecology | 2006 | Peer-reviewed | IT/CU tAs, iAs occurrence in Bivalve molluscs, crustaceans, and fish sampled from relatively unimpacted Mediterranean sites in Italy, Cienfuegos Bay in Cuba, and... (n=245) |
| 56 | [[sources/jecfa-64th-cadmium-tin-2006\|JECFA 2006]]. *Evaluation of certain food contaminants — Sixty-fourth report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 930 (Sixty-fourth meeting of JECFA, Rome, 8-17 February 2005) | 2006 | Government report | international Cd, Sn occurrence in Cadmium: raw or aggregated occurrence data submitted to GEMS/Food by Australia, Canada, Germany, Japan, New Zealand, Norway, USA,... |
| 57 | [[sources/efsa2004-organotins-foodstuffs\|EFSA 2004]]. *Opinion of the Scientific Panel on Contaminants in the Food Chain on a request from the Commission to assess the health risks to consumers associated with exposure to organotins in foodstuffs*, EFSA Journal 2004;102:1-119 | 2004 | Government report | EU/BE/DK Sn occurrence in EU SCOOP Task 3.2.13 occurrence database for organotin compounds in fish and fishery products submitted by Belgium, Denmark,... (n=2110) |
| 58 | [[sources/amodio-cocchieri2000-farmed-fish-shellfish-alkyltins\|Amodio-Cocchieri et al. 2000]]. *Alkyltins in farmed fish and shellfish*, International Journal of Food Sciences and Nutrition | 2000 | Peer-reviewed | IT/NO Sn occurrence in Farmed fish and mussels bought from Naples-area retail stores between June 1997 and May 1998, with free-living fish... (n=170) |
| 59 | [[sources/munoz1999-seafood-inorganic-arsenic\|Munoz et al. 1999]]. *Rapid and quantitative release, separation and determination of inorganic arsenic [As(III)+As(V)] in seafood products by microwave-assisted distillation and hydride generation atomic absorption spectrometry*, Journal of Analytical Atomic Spectrometry | 1999 | Peer-reviewed | ES iAs, tAs occurrence in Twenty-one natural seafood products purchased at local retail outlets: fresh anchovy, clam, cockle, mussel, sardine, small squid, squid;... (n=21) |
| 60 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex maximum levels for Cd, Pb, and Hg in bivalve molluscs and other shellfish matrices |
| 61 | [[sources/harada1995-minamata-methylmercury-poisoning\|Harada 1995]]. *Minamata Disease: Methylmercury Poisoning in Japan Caused by Environmental Pollution*, Critical Reviews in Toxicology | 1995 | Peer reviewed review | JP MeHg, tHg occurrence in Peer-reviewed review of Minamata disease, congenital Minamata disease, historical mercury contamination in Minamata Bay and the Shiranui Sea,... |
| 62 | [[sources/falconer1983-north-sea-seafood-arsenic\|Falconer et al. 1983]]. *Arsenic levels in fish and shellfish from the North Sea*, Journal of Experimental Marine Biology and Ecology | 1983 | Peer-reviewed | GB tAs occurrence in Commercially important fish and shellfish landed at selected Scottish fishing ports in the 1975-1976 survey, plus additional plaice... |
| 63 | [[sources/nielsen1975-nz-molluscs-heavy-metals\|Nielsen et al. 1975]]. *Heavy metal levels in New Zealand molluscs*, New Zealand Journal of Marine and Freshwater Research 9(4), 467-481 | 1975 | Peer-reviewed | NZ Cd, Pb, tHg, Cu, Zn, Fe occurrence in Two hundred and three numbered samples (Appendix sample numbers 1-203) drawn from 199 sampling sites distributed around the... (n=203) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
