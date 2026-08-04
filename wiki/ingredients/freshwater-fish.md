---
title: "Freshwater Fish"
type: ingredient
commodity: freshwater-fish
label: "Freshwater Fish"
aliases: [river fish, lake fish, inland fish, sport fish]
category: aquatic-protein
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [20, 300]
    p95_ppb: 1000
    confidence: high
    n_studies: 22
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 300
    confidence: high
    n_studies: 19
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: 50
    confidence: low
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: 1500
    confidence: high
    n_studies: 33
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 400]
    p95_ppb: 800
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [500, 3000]
    p95_ppb: 6000
    confidence: low
    n_studies: 5
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 400]
    p95_ppb: 1000
    confidence: medium
    n_studies: 8
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
    typical_ppb: [50, 500]
    p95_ppb: 2000
    confidence: medium
    n_studies: 16
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [biomagnification, trophic-level, watershed-mining-history, age-and-size, ASGM-proximity, climate-driven-methylation]
lower_risk_variants: ["[[ingredients/farmed-tilapia]]"]
higher_risk_variants: ["[[ingredients/sport-fish-predatory]]"]
used_in_products: ["[[products/fish-containing-baby-foods]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 77
---

# Freshwater Fish

Freshwater fish are inland-water aquatic protein sources whose heavy-metal contamination profile differs materially from saltwater and marine fish. The defining difference is methylmercury biomagnification: freshwater systems with reducing sediments and microbial methylation activity (most notably in artisanal small-scale gold mining (ASGM) watersheds, mercury-impacted lakes, and historic industrial river basins) concentrate MeHg in piscivorous fish at levels that often exceed marine-fish equivalents. Sport-fishery advisories from US states, Canadian provinces, and the EFSA opinion on chronic methylmercury exposure target freshwater piscivores specifically.

This page is the structural anchor for freshwater-specific fish evidence. The broader [[ingredients/fish]] page covers cross-cutting fish-as-food properties; [[ingredients/saltwater-fish]] (when promoted) carries marine-specific evidence. Trophic level and fish age are the dominant within-species variance drivers, not species identity alone — a small, young pike from a low-Hg lake can carry less MeHg than a large, old walleye from the same lake.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | OK | 4 at 15+ studies, 4 at 5-14 | — |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=22 | 20–300 | high | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/venant2025-lake-victoria-sardine-cd-pb\|3]] |
| Cd | n=19 | 5–100 | high | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|1]], [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|2]], [[sources/venant2025-lake-victoria-sardine-cd-pb\|3]] |
| iAs | n=6 | 1–20 | low | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|3]] |
| tAs | n=16 | 50–500 | medium | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|1]], [[sources/paul2025-meghna-fish-arsenic\|2]], [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|3]] |
| tHg | n=33 | 50–500 | high | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|1]], [[sources/auzier-guimaraes2025-mercury-tapajos-fish\|2]], [[sources/wu2025-climate-meghan-freshwater-fish-china\|3]] |
| Ni | n=10 | 50–400 | medium | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]], [[sources/naz2025-trace-elements-punjnad-fish\|2]], [[sources/han2024-nickel-zhejiang-china\|3]] |
| Al | n=5 | 500–3000 | low | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]], [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|2]], [[sources/kovacik2024-grass-carp-muscle-microelements\|3]] |
| Cr | n=8 | 50–400 | medium | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|1]], [[sources/aljufaili2024-garra-shamal-oman\|2]], [[sources/shaalan2024-nile-tilapia-heavy-metals-egypt\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Climate-driven methylmercury trajectory

Freshwater wild fish MeHg concentrations are projected to rise substantially under climate change. [[sources/wu2025-climate-meghan-freshwater-fish-china|Wu et al. 2025]] (PNAS), drawing on approximately 13,000 fish mercury samples across 164 sampling sites in China spanning 2005 to 2020, projects that national average MeHg concentrations in freshwater wild fish will rise by approximately 60 percent by 2031 to 2060 under both SSP2-4.5 and SSP5-8.5 emission pathways. The dominant individual climate driver is increased solar radiation, which enhances photochemical methylation in aquatic systems (approximately 53 percent contribution to the projected increase).

Three baseline findings from this dataset anchor the trajectory. First, freshwater wild fish carry MeHg concentrations 2.9 to 6.2 times higher than freshwater farmed fish across trophic classes, and 1.7 times higher than marine wild fish in the same trophic class. Second, freshwater fish consumption accounted for 51 percent of China's total fish MeHg intake in 2011. Third, mean MeHg in freshwater wild fish of typical adult size (40 ± 5 cm body length) was 30.9 µg/kg wet weight, comparable to US shrimp (30 to 40 µg/kg ww), a quantity Western consumers and US regulators treat as a meaningful MeHg exposure source.

The mechanism, climate-driven enhancement of microbial and photochemical methylation in freshwater systems, is not specific to China, but the model is parameterized on Chinese data. Parallel datasets from North American, European, and other Asian freshwater systems would strengthen the geographic generalization substantially. See [[synthesis/climate-metals-tradeoffs]] for the full synthesis and [[synthesis/subsistence-fishing-mehg-disparity]] for the equity dimension.

## Routing

Direct evidence for freshwater fish lands here; the broader fish category fans out via the routing layer to [[ingredients/fish]] when sources address fish generally rather than freshwater specifically. Product-level routing flows through [[products/fish-containing-baby-foods]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. tHg and MeHg are the central concerns for this commodity; Pb and Cd are secondary; iAs is generally low in freshwater fish but elevated in some mining-impacted watersheds. Synthesis values will populate as contributing source pages are integrated per Part 9.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/wu2025-climate-meghan-freshwater-fish-china|Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers]]<span class="hmi-ref-meta">Wu M, Wu X, Saiz-Lopez A, Blanchfield PJ, Ren H, and Zhong H · Proceedings of the National Academy of Sciences · 2025 · [doi.org/10.1073/pnas.2424001122](https://doi.org/10.1073/pnas.2424001122)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rusko2026-mercury-fish-latvia-risk-benefit\|Rusko et al. 2026]]. *Risk-Benefit Assessment of Mercury, Lead, Cadmium, and Arsenic in Inland Fish from Latvian Lakes*, Foods | 2026 | Peer-reviewed | tHg, MeHg, Pb, Cd, and tAs in 460 inland fish muscle samples (7 species, 5 Latvian lakes) by ICP-MS and CV-AAS; Pb, Cd, and tAs all below LOQ across all samples; MeHg dominant mercury form, with risk-benefit analysis identifying pregnant women and children as at-risk for high consumption of predatory species |
| 2 | [[sources/auzier-guimaraes2025-mercury-tapajos-fish\|Auzier et al. 2025]]. *Systematic review and spatiotemporal assessment of mercury concentration in fish from the Tapajós River Basin: implications for environmental and human health*, ACS Environmental Au | 2025 | Peer-reviewed | Systematic review of tHg in fish muscle from the Tapajós River Basin, Brazil (36 studies, 143 species, 14,113 individuals, 1992–2022); tHg range 0.01–3.82 mg/kg with piscivorous species highest; 89% of food species showed THQ ≥1 in at least one sub-basin under local average consumption, linked to artisanal gold mining hotspots |
| 3 | [[sources/dietz2025-arctic-mercury-isotopes-greenland\|Dietz et al. 2025]]. *Stable isotopes unveil ocean transport of legacy mercury into Arctic food webs*, Nature Communications | 2025 | Peer-reviewed | GL tHg, MeHg occurrence in Arctic char, shorthorn sculpin, ringed seal, glaucous gull, polar bear, and peat samples across Greenland (Central West, Northwest,... |
| 4 | [[sources/fuenteslopez2025-colombia-freshwater-fish-mercury\|Katerin et al. 2025]]. *Presence of Nematodes, Mercury Concentrations, and Liver Pathology in Carnivorous Freshwater Fish from La Mojana, Sucre, Colombia: Assessing Fish Health and Potential Human Health Risks*, Archives of Environmental Contamination and Toxicology | 2025 | Peer-reviewed | CO tHg occurrence in 326 carnivorous freshwater fish specimens, 9 species, San Jorge River basin, La Mojana (Sucre), Colombia; sampled September 2022... (n=326) |
| 5 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | 10-year Italian regulatory monitoring of Cd, Pb, and tHg across 5,854 seafood samples including the freshwater fish category at 2.27% of samples, with 142 samples (2.43%) non-compliant against EU 2023/915 |
| 6 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Improving nutritional intakes and reducing metal(loid) exposures from wild fish broth among Inuit pregnant women*, Science of the Total Environment | 2025 | Peer-reviewed | tHg, MeHg, tAs, iAs, Cd, and Pb in large lake trout, whitefish, cisco, brook trout, and Arctic char from Nunavik (Canada), with over 67% of large lake trout exceeding the Canadian 0.5 µg/g RMRV and MeHg above 93% of tHg |
| 7 | [[sources/jermilova2025-mackenzie-mercury-fish-bayesian\|Jermilova et al. 2025]]. *Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis*, Integrated Environmental Assessment and Management | 2025 | Peer-reviewed | Bayesian network risk modelling of tHg and MeHg in 5 freshwater fish species (lake whitefish, northern pike, walleye, burbot, lake trout) from the Mackenzie Basin and Great Slave Lake, Canada (2005–2020 monitoring, n=1,044); northern pike mean 0.938 µg/g wet weight; dietary intake assessed against Health Canada, WHO, and USEPA pTWI thresholds for Indigenous communities |
| 8 | [[sources/jesse2025-unknown\|Lepak et al. 2025]]. *Correction: Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health*, PLoS ONE 20(2): e0319526 | 2025 | Peer-reviewed | US tHg occurrence in Correction table for reservoir sport-fish mercury data; species include northern pike, smallmouth bass, and walleye. |
| 9 | [[sources/lepak2025-mercury-sport-fish-colorado-correction\|Lepak et al. 2025]]. *Correction: Mercury Concentrations in Sport Fish from Colorado Reservoirs*, PLOS ONE | 2025 | Peer-reviewed | Corrected tHg and MeHg concentrations in sport fish (walleye, northern pike, smallmouth bass) from Colorado reservoirs, US; formal correction notice superseding previously published values, relevant to US freshwater sport-fish consumption advisory context |
| 10 | [[sources/lucchini2025-amazon-mercury-co-exposures\|Lucchini et al. 2025]]. *Mercury contamination in the Amazon Basin: fish consumption, co-exposures, and health implications for indigenous and riverside communities*, Annals of Global Health | 2025 | Peer-reviewed | BR Hg, MeHg, tHg occurrence in Review of studies covering Amazonian fish species and indigenous/riverside human populations; fish Hg concentrations 0.10–4.73 µg/g; hair mercury... |
| 11 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 12 | [[sources/naz2025-trace-elements-punjnad-fish\|Naz et al. 2025]]. *Trace elements in fish species from the Punjnad headworks: bioaccumulation and human health risk assessment*, PLoS ONE | 2025 | Peer-reviewed | Cd, Cu, Pb, and Ni in liver, gills, and muscle of 5 freshwater fish species from the Punjnad headworks, Punjab, Pakistan (AAS, n=27; 3 seasons); carnivorous Wallago attu highest in all metals; Cd and Pb THQ >1 for regular consumers of all 5 species |
| 13 | [[sources/paul2025-meghna-fish-arsenic\|Paul et al. 2025]]. *Arsenic bioaccumulation in fish of the lower meghna river: Seasonal dynamics, species sensitivity, and public health implications*, PLoS One | 2025 | Peer-reviewed | tAs in muscle of 10 small indigenous freshwater fish species from the Lower Meghna River, Bangladesh (n=300 muscle samples, 10 stations, 3 seasons); 5 species exceeded the WHO threshold of 1 mg/kg in at least one season; pre-monsoon concentrations highest; benthic carnivores showed greatest bioaccumulation |
| 14 | [[sources/shumba2025-tilapia-mercury-zambia-mining\|Shumba et al. 2025]]. *Assessment of total mercury (Hg) in soil, sediment, and tilapia fish (Oreochromis niloticus) and health risk assessment among residents of Kitwe mining area, Zambia*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | ZM tHg occurrence in Tilapia (Oreochromis niloticus), 12–15 cm, from Kafue River tributaries near Kitwe copper mining area (n=32 mining, n=47 non-mining),... (n=79) |
| 15 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Journal of Nephrology | 2025 | Peer-reviewed | LK Cd, Pb, iAs, tAs, Al, Cr, Ni, Sn, tHg occurrence in 57 studies (of 1,067 identified) reporting food and water quality in Sri Lanka CKDu-endemic areas, primarily North Central... (n=57) |
| 16 | [[sources/venant2025-lake-victoria-sardine-cd-pb\|Venant et al. 2025]]. *Community Awareness and Health Risk of Heavy Metals Through Consumption of Sardine (Rastrineobola argentea) From Lake Victoria, Tanzania*, Food Science & Nutrition | 2025 | Peer-reviewed | Cd and Pb in 279 sardine (Rastrineobola argentea) samples from 3 Tanzanian Lake Victoria regions in fresh and dried forms (ICP); all samples below FAO/WHO limits; median Cd 12 ppb, Pb 81 ppb dry weight; all health risk metrics below thresholds of concern |
| 17 | [[sources/wu2025-climate-meghan-freshwater-fish-china\|Wu et al. 2025]]. *Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers*, Proceedings of the National Academy of Sciences | 2025 | Peer-reviewed | CN MeHg, tHg occurrence in Freshwater wild and farmed fish, marine wild fish sampled across China (22.5–49.4° N, 85.2–134.6° E, 2005–2020, 164 sampling... (n=13000) |
| 18 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, Cd, Pb, tAs occurrence in 138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA,... (n=138281) |
| 19 | [[sources/aljufaili2024-garra-shamal-oman\|Al et al. 2024]]. *Heavy metals in Garra shamal freshwater fish from Oman: accumulation and health risk*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | OM tAs, Cd, Cr, Co, Pb, Mn, tHg, Ni occurrence in Garra shamal fish collected from freshwater sites in Oman (n=120) |
| 20 | [[sources/barquero2024-mercury-bass-almaden-spain\|Barquero et al. 2024]]. *A preliminary assessment of mercury, methylmercury and other potentially toxic elements in largemouth bass (Micropterus salmoides) from the Almadén mining district*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | ES/EU tHg, MeHg, tAs, Pb, Sb occurrence in Largemouth bass (Micropterus salmoides) from a 34 km transect of the Valdeazogues River, Almadén mercury mining district, Ciudad... |
| 21 | [[sources/escobar-camacho2024-mercury-fish-ecuador-amazon\|Escobar-Camacho et al. 2024]]. *Mercury in aquatic ecosystems of two indigenous communities in the Piedmont Ecuadorian Amazon: evidence from fish, water, and sediments*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | EC tHg, MeHg occurrence in Freshwater fish from Cofán-Bermejo and Dureno indigenous territory rivers, Sucumbíos Province, Ecuador; also water and sediment samples from... (n=120) |
| 22 | [[sources/gupta2024-tilapia-heavy-metals-cauvery-india\|Gupta et al. 2024]]. *Assessment of human health risks posed by toxic heavy metals in Tilapia fish (Oreochromis mossambicus) from the Cauvery River, India*, Frontiers in Public Health | 2024 | Peer-reviewed | IN Cr, Cd, Pb, Ni occurrence in 16 adult Tilapia fish (Oreochromis mossambicus) collected from 4 sites along the Cauvery River near Erode, Tamil Nadu,... (n=16) |
| 23 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Nickel occurrence in freshwater fish within a Zhejiang Province six-category dietary survey (2628 samples), with children 0–6 the only segment showing unacceptable cumulative Ni exposure (THQ 1.078) |
| 24 | [[sources/janiga2024-alpine-bullhead-metals\|Janiga et al. 2024]]. *Heavy metals in alpine bullhead fish (Cottus gobio) after flash flood in the Tatra mountains*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | SK tHg, Zn, Mo, Rb, Sr occurrence in Cottus gobio (alpine bullhead) collected from Tatra mountain streams after 2023 flash flood (n=66) |
| 25 | [[sources/kovacik2024-grass-carp-muscle-microelements\|Kovacik et al. 2024]]. *Microelements, Fatty Acid Profile, and Selected Biomarkers in Grass Carp (Ctenopharyngodon idella) Muscle Tissue: Seasonal Variations and Health Risk Assessment*, Research (journal not specified in text; published online 9 May 2024) | 2024 | Peer-reviewed | Al, tAs, Cd, Cr, tHg, Ni, and Pb in dorsal muscle of 36 grass carp from a Slovak agricultural-zone pond (ICP-OES + CV-AAS; summer vs autumn); Cd and Co below LOQ in all samples; Hg and Ni jointly drive 49% of total hazard quotient; TTHQ 0.27–0.76 across individuals |
| 26 | [[sources/laoye2024-fish-fruits-veg-heavy-metals-nigeria-review\|Laoye et al. 2024]]. *Assessment of heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria: A systematic review*, F1000Research | 2024 | Peer-reviewed | NG Pb, Cd, tHg, iAs, tAs, Al occurrence in 64 studies (screened from 10,212) reporting heavy metal contamination in fish, fruits, and vegetables in Southwest Nigeria (Lagos,... (n=64) |
| 27 | [[sources/lehel2024-rainbow-trout-aquaculture-italy\|Lehel et al. 2024]]. *Possible Metal Burden of Potentially Toxic Elements in Rainbow Trout (Oncorhynchus mykiss) on Aquaculture Farm*, Fishes | 2024 | Peer-reviewed | IT/HU/EU tAs, Cd, tHg, Pb occurrence in Farmed rainbow trout (Oncorhynchus mykiss) flesh; 40 fish purchased at a fishery market in Hungary but originating from... (n=40) |
| 28 | [[sources/najem2024-metals-common-carp-iraq\|Najem et al. 2024]]. *Bioaccumulation of lead, arsenic, and mercury in vital organs of common carp (Cyprinus carpio L.): Assessment of pathological effects and possible hazards associated with human consumption*, Open Veterinary Journal | 2024 | Peer-reviewed | IQ tAs, Pb, tHg occurrence in 10 common carp (Cyprinus carpio L.) from local Baqubah markets, Diyala province, Iraq; fish sourced from aquaculture in... (n=10) |
| 29 | [[sources/okonofua2024-mining-pits-cabbage-fish-nigeria\|Okonofua et al. 2024]]. *Analysis of Bioaccumulation of Heavy Metals in Water, Cabbage (Brassica oleracea var. capitata) and Tilapia Fish (Oreochromis niloticus) from Unreclaimed Mining Pits*, Earth Sciences Pakistan | 2024 | Peer-reviewed | NG Pb, Cd, tHg, Cu, Ni, Mn, Zn, U occurrence in Five unreclaimed tin-mining pit sites (BKKS I–V) in Bukuru, Jos South LGA, Plateau State, Nigeria, with a control... (n=48) |
| 30 | [[sources/paez-osuna2024-fish-mercury-selenium-mexico\|Páez-Osuna et al. 2024]]. *Mercury and selenium in three fish species from a dam 20 months after a mine-tailing spill in the SE Gulf of California ecoregion, Mexico* | 2024 | Peer-reviewed | MX tHg, Se occurrence in Cyprinus carpio, Oreochromis aureus, and Micropterus salmoides from El Comedero dam, Sinaloa, Mexico, 20 months post mine-tailing spill |
| 31 | [[sources/paezosuna2024-tilapia-mining-dams\|Páez-Osuna et al. 2024]]. *Tilapia as a model fish for biomonitoring of metal pollution in dams associated with mining watersheds: contrasting diagnosis from different tissues and health risk assessment*, Environmental Geochemistry and Health | 2024 | Peer-reviewed | MX Cd, Pb, Cu, Zn occurrence in Blue tilapia (Oreochromis aureus) from 11 mining-watershed dams in SE Gulf of California region, Sinaloa, Mexico; collected during... (n=320) |
| 32 | [[sources/paz-suconota2024-mercury-fish-pastaza-ecuador\|Paz-Suconota et al. 2024]]. *Assessment of total mercury content in fish muscle tissue from the middle basin of the Pastaza River, Ecuador*, PLOS ONE | 2024 | Peer-reviewed | EC tHg occurrence in Multiple freshwater fish species (carnivores, herbivores, omnivores, detritivores) from two sites in the middle basin of the Pastaza... (n=40) |
| 33 | [[sources/shaalan2024-nile-tilapia-heavy-metals-egypt\|Shaalan 2024]]. *Hazardous effects of heavy metal pollution on Nile tilapia in the aquatic ecosystem of the Eastern Delta in Egypt*, BMC Veterinary Research | 2024 | Peer-reviewed | EG Pb, Cd, tHg, Cr, Ni, Cu, Zn occurrence in Adult Nile tilapia (Oreochromis niloticus) from Damietta branch of Nile River and El-Rayah El-Tawfeeky canal, Benha City, Egypt;... (n=120) |
| 34 | [[sources/subhanullah2024-panjkora-fish-metals\|Subhanullah et al. 2024]]. *The detrimental effects of heavy metals on tributaries exert pressure on water quality, Crossocheilus diplocheilus, and the well-being of human health*, Scientific Reports | 2024 | Peer-reviewed | PK tAs, Cd, Pb, Fe, Mn, Zn occurrence in Crossocheilus diplocheilus fish and river-water samples collected at seven River Panjkora locations in Pakistan. (n=7) |
| 35 | [[sources/subhanullah2024-panjkora-fish-water-metals\|Subhanullah et al. 2024]]. *The detrimental effects of heavy metals on tributaries exert pressure on water quality, Crossocheilus aplocheilus, and the well-being of human health*, Scientific Reports 14:2868 | 2024 | Peer-reviewed | PK Fe, Pb, Mn, Zn, Cd, tAs occurrence in Crossocheilus fish muscle and river-water samples from seven Panjkora River locations in Pakistan, with additional tributary water context (n=7) |
| 36 | [[sources/zhuzhassarova2024-fish-seafood-central-asia-review\|Zhuzhassarova et al. 2024]]. *Fish and Seafood Safety: Human Exposure to Toxic Metals from the Aquatic Environment and Fish in Central Asia*, International Journal of Molecular Sciences | 2024 | Peer-reviewed | KZ/KG/TJ tAs, tHg, Cd, Pb occurrence in Narrative review of As, Hg, Cd, Pb in water bodies, fish, and human biomonitoring across five Central Asian... |
| 37 | [[sources/abbas2023-heavy-metals-fish-egypt-aquaculture\|Abbas et al. 2023]]. *Heavy Metals Assessment and Health Risk to Consumers of Two Commercial Fish Species from Polyculture Fishponds in El-Sharkia and Kafr El-Sheikh, Egypt: Physiological and Biochemical Study*, Biological Trace Element Research | 2023 | Peer-reviewed | EG Pb, Cd, Cu, Fe, Mn, Zn occurrence in Bolti (Oreochromis niloticus / Nile tilapia) and Topara (Chelon ramada / thinlip mullet) from 7 El-Sharkia (ES) and... (n=45) |
| 38 | [[sources/brodziak-dopierala2023-mercury-fish-poland\|Brodziak-Dopierala et al. 2023]]. *Analysis of the Mercury Content in Fish for Human Consumption in Poland*, Toxics | 2023 | Peer-reviewed | PL/EU tHg occurrence in Sixty-eight fish purchased from hypermarkets, fish-only shops, and aquaculture breeding tanks across Poland in 2021-2022, representing 18 species... (n=68) |
| 39 | [[sources/egbe2023-heavy-metals-tilapia-cameroon\|Egbe et al. 2023]]. *Heavy metal exposure risk associated with ingestion of Oreochromis niloticus and Coptodon kottae harvested from a lacustrine ecosystem*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Pb, Cd, tAs, Cr, and Ni in Nile tilapia and the endemic Coptodon kottae from Lake Barombi Kotto (Cameroon), with bone-greater-than-gut-greater-than-muscle organ distribution and Pb potentially exceeding PTDI at high adult-consumption scenarios |
| 40 | [[sources/hoy2023-arsenic-speciation-freshwater-fish\|Hoy et al. 2023]]. *Arsenic speciation in freshwater fish: challenges and research needs*, Food Quality and Safety | 2023 | Peer-reviewed | Systematic review of iAs and tAs speciation in freshwater fish (vs marine fish), anchoring the higher iAs-fraction-of-tAs claim for freshwater species and the gap in arsenobetaine-dominated organoarsenic typical of marine matrices |
| 41 | [[sources/hull2023-arsenic-lake-foodweb\|Hull et al. 2023]]. *Littoral sediment arsenic concentrations predict arsenic trophic transfer and human health risk in contaminated lakes*, PLoS ONE | 2023 | Peer-reviewed | US tAs, iAs occurrence in Organisms from 10 urban lakes in Puget Sound lowlands, Washington State; includes periphyton, phytoplankton, zooplankton, snails, insect larvae,... (n=10) |
| 42 | [[sources/hussein2023-freshwater-marine-fish-egypt\|Hussein et al. 2023]]. *Risk assessment of toxic residues among some freshwater and marine water fish species*, Frontiers in Veterinary Science | 2023 | Peer-reviewed | EG Pb, Cd, tHg, tAs, Al occurrence in Six fish species (n=20 each) from El-Obour city fish market, Egypt; freshwater: Oreochromis niloticus, Mugil cephalus, Lates niloticus;... (n=120) |
| 43 | [[sources/kim2023-korea-fishery-products-metals\|Kim et al. 2023]]. *Risk Assessment and Determination of Arsenic and Heavy Metals in Fishery Products in Korea*, Foods | 2023 | Peer-reviewed | KR Pb, Cd, tAs, tHg, MeHg occurrence in Fishery products purchased from grocery stores and markets in Seoul, Incheon, Daejeon, Gangneung, Busan, and Gwangju from January... (n=1186) |
| 44 | [[sources/lepak2023-sport-fish-mercury-colorado\|Lepak et al. 2023]]. *Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health*, PLOS ONE | 2023 | Peer-reviewed | US tHg occurrence in Northern pike (Esox lucius), smallmouth bass (Micropterus dolomieu), and walleye (Sander vitreus) from 32 Colorado reservoirs; Hg data... (n=864) |
| 45 | [[sources/marriott2023-lake-victoria-aquaculture-biogeochemistry\|Marriott et al. 2023]]. *Considerations for environmental biogeochemistry and food security for aquaculture around Lake Victoria, Kenya*, Environmental Geochemistry and Health | 2023 | Peer-reviewed | KE tAs, Cd, Cr, Pb, Al, Ni occurrence in Wild and aquaculture Nile tilapia from Winam Gulf, Lake Victoria, Kenya; water collected 2018-2019 |
| 46 | [[sources/sawe2023-fish-metals-lake-manyara-tanzania\|Sawe et al. 2023]]. *Assessment of Potentially Toxic Metals in Fish from Lake Manyara, Northern Tanzania*, Bulletin of Environmental Contamination and Toxicology | 2023 | Peer-reviewed | Cu, Ni, Pb, and Zn in muscle of Manyara tilapia and African catfish from Lake Manyara (Tanzania), with all values below FAO/WHO limits and a derived 2.2 kg/week maximum recommended consumption |
| 47 | [[sources/simionov2023-danube-fish-seafood-pte-microplastics\|Simionov et al. 2023]]. *Human health risk assessment of potentially toxic elements and microplastics accumulation in products from the Danube River Basin fish market*, Environmental Toxicology and Pharmacology | 2023 | Peer-reviewed | RO/GR/IT Al, tAs, Cd, Cr, Cu, Ni, Pb, Zn, tHg occurrence in Fish and seafood specimens purchased from retailers in Galati, Romania: 18 fish species and 5 seafood species, n=10... (n=230) |
| 48 | [[sources/sirisangarunroj2023-thai-fish-toxic-elements\|Sirisangarunroj et al. 2023]]. *Toxic Heavy Metals and Their Risk Assessment of Exposure in Selected Freshwater and Marine Fish in Thailand*, Foods 2023, 12, 3967 | 2023 | Peer-reviewed | tAs, Cd, tHg, and Pb in 15 commonly consumed Thai fish species (7 freshwater, 8 marine) from Bangkok markets by ICP-MS-MS (AOAC 2015.01); Pb below LOQ in all species; high tAs risk identified for young children consuming certain freshwater and marine species |
| 49 | [[sources/stahl2023-us-river-fish-mercury\|Stahl et al. 2023]]. *Contaminants in fish from U.S. rivers: Probability-based national assessments*, Science of the Total Environment | 2023 | Peer-reviewed | US tHg occurrence in Fish fillet composites from 353 U.S. river sites (2013–14) and 290 sites (2018–19), sampled under EPA National Rivers... (n=643) |
| 50 | [[sources/tolkou2023-fish-heavy-metals-review\|Tolkou et al. 2023]]. *Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury in Fish: Effects on the Sustainable and Healthy Development of Aquatic Life and Human Consumers*, Sustainability | 2023 | Peer-reviewed | AR/BD/CN tAs, Cr, Cd, Pb, tHg occurrence in Narrative literature review of >50 fish species across 13 countries on 4 continents (Asia, Europe, Africa, Latin America).... |
| 51 | [[sources/willacker2023-mercury-fish-snake-river\|Willacker et al. 2023]]. *Reservoir Stratification Modulates the Influence of Impoundments on Fish Mercury Concentrations along an Arid Land River System*, Environmental Science & Technology | 2023 | Peer-reviewed | US tHg, MeHg occurrence in Smallmouth Bass (Micropterus dolomieu) collected from reservoir, tailrace, and free-flowing reaches along 853 km of the Snake River... |
| 52 | [[sources/zahran2023-mercury-tilapia-nannochloropsis\|Zahran et al. 2023]]. *Toxicity Evaluation, Oxidative, and Immune Responses of Mercury on Nile Tilapia: Modulatory Role of Dietary Nannochloropsis oculata* | 2023 | Peer-reviewed | EG tHg occurrence in Nile tilapia (Oreochromis niloticus, 45–50 g) in four groups (n=30/group in triplicate), exposed to 0.3 mg/L HgCl2 sub-lethal... (n=120) |
| 53 | [[sources/rundio2022-mercury-trout-california\|Rundio et al. 2022]]. *High mercury concentrations in steelhead/rainbow trout, sculpin, and terrestrial invertebrates in a stream-riparian food web in coastal California*, Ecotoxicology | 2022 | Peer-reviewed | Total Hg and MeHg in steelhead/rainbow trout (n=20), coastrange sculpin (n=10), and invertebrates from Big Creek (coastal California), with age 1+ trout and sculpin at 1200–1300 ng/g dw and a marine-fog Hg-delivery mechanism documented |
| 54 | [[sources/vainio2022-baltic-mercury-food-web\|Vainio et al. 2022]]. *Trophic Dynamics of Mercury in the Baltic Archipelago Sea Food Web: The Impact of Ecological and Ecophysiological Traits*, Environmental Science & Technology | 2022 | Peer-reviewed | Total Hg trophic magnification factors for 30 Baltic Archipelago Sea species including 14 fish species, with pelagic TMF (3.58–4.02) significantly higher than benthic (2.11–2.34) and food-chain origin shaping Hg accumulation patterns |
| 55 | [[sources/cleary2021-fish-consumption-advisories-usa\|Cleary et al. 2021]]. *Comparison of Recreational Fish Consumption Advisories Across the USA*, Current Environmental Health Reports | 2021 | Peer-reviewed | Comparative review of MeHg-driven recreational fish consumption advisories across 46 US states, documenting substantial cross-state variation in toxicity values and target fish-tissue concentrations triggering advisory issuance |
| 56 | [[sources/lin2021-taiwan-seafood-mercury-tds\|Lin et al. 2021]]. *Dietary Exposure of the Taiwan Population to Mercury Content in Various Seafood Assessed by a Total Diet Study*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | TW tHg, MeHg occurrence in Taiwan total-diet-study seafood sample set purchased from fishing harbors, traditional markets, afternoon markets, supermarkets, and discount stores across... (n=140) |
| 57 | [[sources/mahjoub2021-morocco-fish-metals\|Mahjoub et al. 2021]]. *Mercury, Lead, and Cadmium in the Muscles of Five Fish Species from the Mechraa-Hammadi Dam in Morocco and Health Risks for Their Consumers*, Journal of Toxicology | 2021 | Peer-reviewed | tHg (CV-AAS), Pb, and Cd (GF-AAS) in muscle of five freshwater fish species from the Mechraa-Hammadi Dam (Morocco), with all values below EC 1881/2006 limits and THQ-based consumer risk assessed |
| 58 | [[sources/melnyk2021-mercury-anadromous-fish-penobscot\|Melnyk et al. 2021]]. *Risks from mercury in anadromous fish collected from Penobscot River, Maine*, Science of the Total Environment | 2021 | Peer-reviewed | US tHg occurrence in Composite samples of 6 anadromous fish species (alewife, American shad, blueback herring, rainbow smelt, striped bass, sea lamprey)... (n=75) |
| 59 | [[sources/chung2020-hong-kong-seafood-organotins\|Chung et al. 2020]]. *Occurrence of organotin compounds in seafood from Hong Kong market*, Marine Pollution Bulletin | 2020 | Peer-reviewed | HK Sn occurrence in Three hundred forty-one seafood samples collected from wet markets and supermarkets in different regions of Hong Kong between... (n=341) |
| 60 | [[sources/maikanov2020-fish-products-shuchinsk-burabay-metals\|Maikanov et al. 2020]]. *Quality and safety of fish products in the Shuchinsk-Burabay Resort Zone*, Medycyna Weterynaryjna 76(10):585-588 | 2020 | Peer-reviewed | KZ tAs, Cd, tHg, Pb occurrence in Fish muscle samples from four lakes (Burabay, Bolshoye Chebachye, Katarkol, Shchuchye) in the Shuchinsk-Burabay resort zone, Kazakhstan. Heavy-metals... (n=44) |
| 61 | [[sources/majlesi2019-farmed-rainbow-trout-yasuj-iran\|Majlesi et al. 2019]]. *Heavy metal content in farmed rainbow trout in relation to aquaculture area and feed pellets*, Foods and Raw Materials | 2019 | Peer-reviewed | IR/WHO/US tHg, Cd, Pb occurrence in Farmed rainbow trout (Oncorhynchus mykiss) muscle tissue from six farms across three aquaculture sites (A, B, C) in... (n=30) |
| 62 | [[sources/matsumoto-tanibuchi2019-seaweed-seafood-ias\|Matsumoto-Tanibuchi et al. 2019]]. *Determination of Inorganic Arsenic in Seaweed and Seafood by LC-ICP-MS: Method Validation*, Journal of AOAC International | 2019 | Peer-reviewed | JP tAs, iAs occurrence in Japanese local-market food samples: eight dried seaweed products, seven seafood muscle/edible-portion samples, and two seafood-derived sauces/products in Table... (n=17) |
| 63 | [[sources/kimakova2018-fish-products-slovakia-mercury\|Kimakova et al. 2018]]. *Fish and fish products as risk factors of mercury exposure*, Annals of Agricultural and Environmental Medicine | 2018 | Peer-reviewed | SK tHg occurrence in Fish and fish-product samples from food retail in Eastern Slovakia and fish from the Ruzin water reservoir |
| 64 | [[sources/rajeshkumar2018-taihu-lake-fish-oyster-metals\|Rajeshkumar et al. 2018]]. *Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China*, Chemosphere | 2018 | Peer-reviewed | Seasonal Pb, Cd, Cr, and Cu in crucian carp tissues across four seasons and seven sites in Meiliang Bay (Taihu Lake, China), with winter/summer concentrations significantly higher and Pb dominating in fish tissues |
| 65 | [[sources/majlesi2017-khersan-river-fish-iran\|Majlesi et al. 2017]]. *The Concentration of Mercury, Cadmium and Lead in Muscular Tissue of Fishes in Khersan River*, International Journal of Nutrition Sciences | 2017 | Peer-reviewed | IR/WHO/EU tHg, Cd, Pb occurrence in Wild-caught rainbow trout (Oncorhynchus mykiss), pike (Esox lucius), and common carp (Cyprinus carpio) muscular tissue from the Khersan... |
| 66 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 67 | [[sources/eaglessmith2016-freshwater-fish-mercury-western-us-canada\|Eagles-Smith et al. 2016]]. *Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada*, Science of The Total Environment (2016, in press 2015) | 2016 | Peer-reviewed | USGS-led synthesis of THg in 96,310 individual freshwater fish from 4,262 locations across the Western US and Canada (206 species, 1969–2014), with 30% of fish samples and 17% of site means exceeding the EPA 0.30 µg/g ww MeHg Fish Tissue Residue Criterion |
| 68 | [[sources/lee2016-taiwan-seafood-organotins\|Lee et al. 2016]]. *Health risk assessment of the intake of butyltin and phenyltin compounds from fish and seafood in Taiwanese population*, Chemosphere | 2016 | Peer-reviewed | TW Sn occurrence in Two hundred Taiwanese fishery products provided from 25 fishery markets in 2011: freshwater fish (n = 64), saltwater... (n=200) |
| 69 | [[sources/vicarova2016-common-carp-czech-reservoirs\|Vičarová et al. 2016]]. *Heavy metals in the common carp (Cyprinus carpio L.) from three reservoirs in the Czech Republic*, Czech Journal of Food Sciences | 2016 | Peer-reviewed | CZ/EU Cd, Pb, tHg occurrence in 75 common carp (Cyprinus carpio L.), 25 from each of three reservoirs (Pilská, Domaninský, Matějovský) in the Bohemian-Moravian... (n=75) |
| 70 | [[sources/efsa-sc2015-fish-seafood-mehg-risk-benefit\|EFSA 2015]]. *Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood*, EFSA Journal 2015;13(1):3982, 36 pp. | 2015 | Government report | EU MeHg, tHg occurrence in Scenario-based risk-benefit assessment across 26 chronic dietary surveys from 17 EU Member States (Belgium, Bulgaria, Cyprus, Czech Republic,... |
| 71 | [[sources/grandjean2010-methylmercury-health-research\|Grandjean et al. 2010]]. *Adverse Effects of Methylmercury: Environmental Health Research Implications*, Environmental Health Perspectives | 2010 | Peer reviewed review | JP/IQ/US MeHg, tHg occurrence in Peer-reviewed review of methylmercury toxicity, historical poisoning incidents, fish and seafood exposure pathways, and regulatory response; no original... |
| 72 | [[sources/schoof2007-seafood-arsenic-speciation\|Schoof et al. 2007]]. *Variation of total and speciated arsenic in commonly consumed fish and seafood*, Human and Ecological Risk Assessment | 2007 | Peer-reviewed | US/ES/NO tAs, iAs occurrence in Compiled fish and seafood arsenic-speciation results from 20 studies, summarized into freshwater finfish, anadromous fish, marine fish, crustaceans,... (n=437) |
| 73 | [[sources/uneyama2007-arsenic-foods-cumulative-data\|Uneyama et al. 2007]]. *Arsenic in various foods: Cumulative data*, Food Additives & Contaminants | 2007 | Peer-reviewed | JP/US/GB tAs, iAs occurrence in Cumulative review of arsenic measurements in food from PubMed, Japanese local-authority research databases, and national food-safety surveillance reports;... |
| 74 | [[sources/dabeka2003-canadian-total-diet-mercury\|Dabeka et al. 2003]]. *Survey of total mercury in total diet food composites and an estimation of the dietary intake of mercury by adults and children from two Canadian cities, 1998-2000*, Food Additives & Contaminants | 2003 | Peer-reviewed | CA tHg occurrence in Total mercury in 259 total-diet food composites prepared from retail foods purchased in Whitehorse in January-February 1998 and... (n=259) |
| 75 | [[sources/epa1999-mercury-update-fish-advisories\|EPA 1999]]. *Mercury Update: Impact on Fish Advisories*, US EPA Fact Sheet EPA-823-F-99-016 | 1999 | Government report | US tHg, MeHg occurrence in 1,931 state-issued fish-consumption advisories in 40 states as of December 1998; cited fish-tissue mercury data drawn from EPA... (n=1931) |
| 76 | [[sources/epa1997-arsenic-fish-shellfish\|EPA 1997]]. *Arsenic and Fish Consumption*, US EPA Office of Water | 1997 | Government report | EPA-822-R-97-003 baseline anchoring the speciation point that over 95% of marine fish and shellfish arsenic is organoarsenic (primarily arsenobetaine), with freshwater fish carrying a higher iAs fraction relative to tAs and corresponding dietary exposure scenarios |
| 77 | [[sources/norin1985-swedish-fish-arsenic-speciation\|Norin et al. 1985]]. *Concentration of inorganic and total arsenic in fish from industrially polluted water*, Chemosphere | 1985 | Peer-reviewed | Sweden tAs, iAs occurrence in Fish captured from arsenic-polluted brackish water near Ronnskar/Skelleftebukten, unpolluted brackish reference water at Furuogrund, polluted freshwater Lake Bodatrask,... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Freshwater fish (tilapia, catfish, trout, perch, walleye, bass, carp, pike, salmon-when-stocked-in-freshwater, and other freshwater species) accumulate methylmercury through aquatic-food-web biomagnification. The mechanism is identical to marine fish (see [[metals/mercury-methyl|MeHg]] and [[ingredients/fish]]): sulfate-reducing bacteria in sediment methylate inorganic mercury that arrives from atmospheric deposition or watershed runoff; plankton take up MeHg from water; small fish eat plankton; larger fish eat small fish; MeHg biomagnifies multiplicatively at each trophic step. The defining feature of freshwater fish is that the watershed-Hg loading is locally elevated in many freshwater systems because of historic chlor-alkali industry, coal-fired power generation, mining legacy, or agricultural Hg fungicide use. Freshwater fish from contaminated watersheds can carry MeHg comparable to marine apex predators despite lower trophic position.

[[sources/wu2025-climate-meghan-freshwater-fish-china|Wu et al. 2025]] projects climate-driven enhancement of MeHg production in freshwater systems — approximately 60 percent rise in mean freshwater wild-fish MeHg by 2031-2060 under both SSP2-4.5 and SSP5-8.5 pathways, dominated by enhanced photochemical methylation from increased solar radiation.

The HMTc panel concerns for freshwater fish are dominantly tHg/MeHg, with secondary Cd in some watersheds.

## Ranges by source, region, and variety

The dominant axes of variance are watershed-Hg loading and trophic position.

**Species:** Predatory freshwater species (pike, walleye, large bass, larger catfish) carry higher MeHg than primary-consumer species (carp, tilapia, smaller catfish). Wu et al. 2025's Chinese dataset documents wild freshwater fish MeHg 2.9-6.2× higher than farmed freshwater fish across trophic classes, and 1.7× higher than marine wild fish in the same trophic class.

**Watershed:** Fish from the Great Lakes (especially those subject to PCB+Hg advisories) carry higher MeHg. Fish from Adirondack lakes (acid-deposition-amplified Hg methylation) similarly. Fish from watersheds adjacent to historic mining carry elevated Hg, sometimes co-occurring with Pb and other mine-associated metals.

**Wild-caught vs farmed:** Farmed freshwater fish (commercial tilapia, catfish farming, rainbow trout aquaculture) typically carries lower MeHg because feed-mediated exposure is lower than wild prey-mediated exposure and farm lifespan is shorter than wild.

**Size and age:** Larger and older individuals of the same species carry more MeHg because lifetime exposure accumulates.

## Processing effects

Methylmercury in freshwater fish is bound to cysteine residues in muscle protein, identical to marine fin-fish. Processing (cleaning, filleting, freezing, smoking, drying) does not reduce MeHg. Cooking concentrates per-serving MeHg slightly through water loss. Removing skin and dark muscle reduces lipophilic contaminants but does not reduce MeHg meaningfully.

Smoking introduces no significant additional metal load relative to source-fish MeHg. Pickling and curing preserve the source-fish metal profile.

## Ingredient-derivative risk

Freshwater fish oil and fish-oil supplements carry low MeHg relative to source fish because the metal does not partition strongly into the lipid fraction. Cod liver oil specifically (though typically marine cod, not freshwater) carries elevated Cd and Pb from the liver organ.

Freshwater fish flour and freshwater-fish protein concentrate (less common in human-food markets than marine equivalents) carry per-mass-concentrated MeHg.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Species selection (lower-trophic freshwater species: tilapia, catfish, herring-family) and origin-watershed selection (avoiding watersheds with active consumption advisories) are the two largest single levers. Farmed-freshwater-fish sourcing typically reduces Hg below comparable wild-caught species.

**Consumption-pattern levers** apply at the consumer level: state-level fish consumption advisories (issued by US state health departments based on watershed-specific data) provide the operational consumer guidance for freshwater fish. The FDA/EPA federal advisory addresses freshwater fish less specifically than marine fish.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level methylmercury testing for commercial freshwater-fish supply, particularly for products targeting infant, young-child, and pregnancy markets. See [[testing/icp-ms]].

**Processing levers** ([[mitigation/processing]]) are limited; MeHg is muscle-bound and not reducible by processing.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not generally consequential for freshwater fish.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets species-specific Hg maximum levels for fishery products; freshwater species fall under the general 0.5 mg/kg Hg ML (some species carry separate 1.0 mg/kg ML where bioaccumulation justifies it).
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MeHg MLs for fish.
- FDA action level of 1.0 ppm methylmercury in fish applies to freshwater fish in commercial channels.
- US state-level fish consumption advisories: most states maintain freshwater fish advisories specific to watersheds and species; subsistence-fishing populations in some Great Lakes and Adirondack regions are at elevated risk.
- California Prop 65 ([[regulations/california-prop65]]) Hg MADL applies to freshwater fish sold in California.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
