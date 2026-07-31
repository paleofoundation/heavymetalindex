---
type: ingredient
commodity: tea
title: "Tea"
label: "Tea"
aliases: [camellia-sinensis, green-tea, black-tea, oolong-tea]
category: leaf
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 2000]
    p95_ppb: 5000
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 300]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [1000, 8000]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [10000, 100000]
    p95_ppb: 200000
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [100, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [80, 130]
    p95_ppb: 490
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [aluminum-hyperaccumulator, soil-uptake, geography, infusion-extraction, atmospheric-deposition]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/pu-erh-tea]]"]
used_in_products: ["[[products/tea]]", "[[products/kombucha-tea-based]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 57
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 10
---

# Tea

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 8/10 HMTc analytes, total n=40 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 25 jurisdictions, top EU 31% | — |
| D3 Anthropogenic evidence | GAP | 8 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 5 drivers, 8 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tAs THIN, tHg POOLABLE, Ni THIN, Al THIN, Cr THIN, Sn THIN | Pb: needs 2 distinct source(s); Cd: needs 2 distinct source(s); iAs: needs 2 more study(ies); tAs: needs 3 distinct source(s); Ni: needs 2 distinct source(s); Al: needs 2 distinct source(s); Cr: THIN; Sn: needs 2 distinct source(s) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 9 claims checked, 9 supported; 8 citations, 0 orphan, 5 foreign | 5 foreign citation(s) not naming tea: jurowski2023-heavy-metals-green-tea-poland, brzezicha-cirocka2016-green-tea-geographic-origins, kazeminia2023-tea-heavy-metals-review |
| D9 Mitigation | OK | 2 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 6 single, 3 unpaired | Pb: THIN, needs 2 distinct source(s); Cd: THIN, needs 2 distinct source(s); iAs: THIN, needs 2 more study(ies); tAs: THIN, needs 3 distinct source(s); Ni: THIN, needs 2 distinct source(s); Al: THIN, needs 2 distinct source(s); Cr: THIN; Sn: THIN, needs 2 distinct source(s); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; Pb: clean/dirty UNPAIRED (dirty-side limit unsupportable); Cd: clean/dirty UNPAIRED (dirty-side limit unsupportable); Al: clean/dirty UNPAIRED (dirty-side limit unsupportable); consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.50, legal-defensibility 0.25, scale 0.25 | spread 0.75 — starved: legal-defensibility |

<!-- /hmi-completeness-scorecard -->


Tea (Camellia sinensis leaf, processed into green, black, oolong, white, and pu-erh varieties) is the dominant dietary source of aluminum in many populations and a notable source of lead, fluoride (out of scope for this page), and trace heavy metals. The defining biological feature of the tea plant is its aluminum hyperaccumulation: Camellia sinensis tolerates and accumulates aluminum at concentrations of 10,000-100,000 ppb dry weight (orders of magnitude above any other major food-crop leaf), driven by an adaptation to acidic soils where Al is the dominant available cation. The current corpus loads 10 sources spanning China (the largest tea-producing region globally, with the Hu 2023 status assessment covering 4,803 samples nationwide and the Fan 2025 Hangzhou survey at 120 samples), Poland-and-EU import data, Germany (BfR MEAL Study nickel dietary-intake assessment), Ireland (FSAI 2016 total diet study), and broader systematic reviews. The Hu 2023 dataset is the largest single tea heavy-metals dataset in the loaded corpus and provides the strongest distributional anchor for the Pb, Cd, tAs, Cr, tHg, and Cu profile in Chinese-origin product.

## Why this commodity accumulates heavy metals

Tea's heavy-metals profile is shaped by three interacting factors: soil chemistry, the aluminum-hyperaccumulator pathway, and the infusion-extraction question. Soil chemistry: tea is grown predominantly on acidic mountain soils in Yunnan, Anhui, Zhejiang, Fujian (China), Assam and Darjeeling (India), Sri Lanka, Kenya, and similar high-altitude tropical-to-subtropical regions. These soils are naturally elevated in aluminum and frequently in cadmium relative to neutral-pH agricultural soils. Tea bushes take up Al, Cd, and trace metals from the root zone and transport them into leaves; the older the leaf, the higher the metal concentration. The aluminum-hyperaccumulator pathway is the defining feature: green and black teas routinely carry 10,000-100,000 ppb Al dry weight, with pu-erh and aged-leaf product reaching the upper end. The Hardisson 2017 dietary-exposure review documents tea as the dominant aluminum source in many western diets ([[sources/hardisson2017-aluminium-dietary-exposure-review]]). The infusion-extraction question is what makes finished-beverage exposure different from dry-leaf exposure: hot water extracts roughly 30-50% of dry-leaf lead, 50-70% of cadmium, 70-90% of fluoride, and a variable fraction of aluminum into the brewed cup. The Jurowski 2023 Polish-market survey ([[sources/jurowski2023-heavy-metals-green-tea-poland]]) measured both dry-leaf and infusion concentrations and confirmed the partial-extraction pattern. Atmospheric deposition adds surface Pb to tea leaves harvested in roadside or industrial-corridor settings, particularly relevant for lower-altitude commodity-grade product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=8 | 100–2000 | medium | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| Cd | n=8 | 20–200 | medium | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| iAs | n=1 | — | — | — |
| tAs | n=5 | 10–300 | medium | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/lee2019-food-processing-heavy-metals-migration\|2]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|3]] |
| tHg | n=4 | 1–30 | medium | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Ni | n=3 | 1000–8000 | medium | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|1]] |
| Al | n=6 | 10000–100000 | medium | [[sources/ozturk2024-al-tea-infusion-teapot\|1]], [[sources/efsa2021-aluminium-food-qa\|2]], [[sources/lee2019-food-processing-heavy-metals-migration\|3]] |
| Cr | n=3 | 100–2000 | low | [[sources/song2024-crvi-hplc-icpms-food-reduction\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| Sn | n=2 | 80–130 | low | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|1]], [[sources/fsai2016-total-diet-study-ireland-2012-2014\|2]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

China is the dominant production-region anchor in the loaded corpus, contributing the Hu 2023 status assessment (n=4,803 samples nationwide, covering green, black, dark, oolong, and white-tea categories) and the Fan 2025 Hangzhou green-tea survey (n=120, 12-metal panel including the rarely-measured Sn and Sb). The Brzezicha-Cirocka 2016 multi-origin comparison sampled 41 green-tea products from Chinese, Indian, Japanese, and other global origins and quantified Cd, Pb, Cr, Ni, Cu, Zn, Co, Mn, Fe variation by origin ([[sources/brzezicha-cirocka2016-green-tea-geographic-origins]]). The Jurowski 2023 Polish-market green-tea infusion survey (n=12) is the smallest dataset but contributes both dry-leaf and brewed-infusion measurements and a comprehensive safety assessment ([[sources/jurowski2023-heavy-metals-green-tea-poland]]). The Kazeminia 2023 systematic review (n=157 included studies) provides the broadest global synthesis but does not report individual-sample concentrations ([[sources/kazeminia2023-tea-heavy-metals-review]]). The BfR 2022 MEAL Study nickel-intake dataset (n=840 across the German diet) identifies tea as a major dietary Ni contributor specifically ([[sources/bfr2022-nickel-dietary-intake-germany-meal]]). Within-China spatial variation is substantial: Hu 2023 reports the Pb-and-Cd distribution by province and notes a clustering pattern of elevated values in specific production regions, particularly where tea cultivation has expanded onto historically contaminated soils. Pu-erh (post-fermented dark tea) and other aged-leaf products consistently carry higher Al than fresh-leaf green tea due to the longer leaf-tissue accumulation time.

## Processing effects

The processing chain from fresh tea leaf to finished dry product (withering, rolling, oxidation/fermentation for non-green varieties, drying) does not significantly alter the per-mass metal load on a dry-weight basis. Drying removes water and concentrates metals from the fresh-leaf basis to the dry-leaf basis by roughly 4-5×. Post-fermentation aging for pu-erh tea can produce modest additional Al concentration if the storage matrix contributes additional aluminum, though this is not quantified in the loaded corpus. The dominant processing-related question for finished-beverage exposure is the brewing-extraction step: the Jurowski 2023 work and the broader tea-infusion literature establish that hot-water infusion extracts a partial fraction of dry-leaf metals into the cup, with extraction efficiency depending on water temperature, infusion time, water hardness, and leaf surface area. For typical western-style brewing (5-minute infusion, 90-100°C water), Pb extraction is ~30-50% of dry-leaf load, Cd extraction is ~50-70%, and Al extraction is highly variable (10-60% depending on water chemistry and tea form). For Asian-style short-infusion practices (multiple short brews at lower water-to-leaf ratios), extraction per brew is lower but cumulative extraction across multiple brews of the same leaf reaches similar totals. Cold-brew extraction is generally lower than hot-brew. Tea-bag product introduces an additional consideration: the tea-bag material itself can leach trace metals into the brew, though this is small relative to the leaf-derived load.

## Ingredient-derivative risk

Loose-leaf dry tea carries the baseline dry-weight metal load. Tea bags carry the same dry-leaf load plus any small contribution from the bag material. Brewed tea (the consumer-facing form) carries the extracted fraction of the dry-leaf load. Matcha (powdered whole-leaf green tea) carries the full dry-leaf load directly to consumption because the consumer ingests the powder rather than infusing and discarding it; matcha is the highest per-serving aluminum exposure form of tea. Tea extracts (used as flavoring in beverages, supplements, baked goods) carry the metal load in proportion to the extraction-to-dry-leaf ratio. Tea-derived ingredients used in cosmetic and topical products are out of scope for this food page. Kombucha brewed on a tea base carries the tea-derived metal load plus any fermentation-vessel contribution; see [[products/kombucha-tea-based]].

## Mitigation options

### Sourcing levers

Origin selection is the highest-impact lever for the lead and aluminum profile. The Hu 2023 China-wide assessment identified geographic clusters of higher and lower Pb-and-Cd production regions ([[sources/hu2023-china-tea-heavy-metals]]); brand buyers can specify supplier provinces with documented lower metal-load distributions. For aluminum specifically, no growing region is meaningfully lower than another because Al-hyperaccumulation is a species-level feature of Camellia sinensis; the only sourcing lever for Al is to source non-tea herbal infusions for brand positions where Al exposure is the limiting concern.

### Agronomic levers

For brand-controlled-supply operations (a small fraction of the global tea trade), soil pH management away from the acid-soil extremes that drive maximum Al-uptake is plausible but not commercially established at scale. Avoidance of phosphate fertilizers with elevated Cd impurity reduces Cd loading; this is a routine recommendation across the tea-agronomy literature.

### Processing levers

Choosing younger-leaf product (first-flush, spring-harvest) over older-leaf product (commodity-grade summer-and-autumn harvest) reduces the absolute metal load because younger leaves have accumulated less tissue Al, Pb, and Cd. The trade-off is cost and flavor profile. For finished-beverage operations, brewing-protocol choices (shorter infusion, lower water temperature) reduce extracted Pb but at the cost of flavor strength.

### Formulation levers

For tea-blend formulations, dilution with lower-Al herbal infusions (peppermint, chamomile, hibiscus) reduces per-serving Al on a linear-mixing basis. Substituting non-tea botanicals entirely for products targeting low-Al consumers is the formulation-level answer.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 100 ppb), Cd (≤ 50 ppb), and Al (≤ 1,000 ppb) is the standard intervention. The Fan 2025 Hangzhou protocol covers 12 metals including the rarely-measured Sn and Sb at appropriate sensitivity ([[sources/fan2025-hangzhou-green-tea-metals]]). For tea-bag product, separately characterise the metal contribution of the bag material.

### Packaging and storage levers

Standard food-grade packaging does not contribute meaningfully to the dry-leaf metal load. Long-term storage in unsealed bulk does not change the per-mass load. Aging conditions for pu-erh and dark teas use clay-pot or paper-wrapped storage; clay pots with unverified glazes are a potential additional Pb pathway but are not quantified in the loaded corpus.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set tea-specific heavy-metals maxima. The EU Regulation 2023/915 applies general dried-plant-product limits to tea: 2.0 mg/kg Pb maximum (which is generous relative to the typical-range distribution and routinely passed by commercial product) and 0.5 mg/kg Cd maximum. China's GB 2762-2017 national food-safety standard sets tea-specific Pb at 5.0 mg/kg and Cd at 1.0 mg/kg, looser than EU but applicable to the dominant production region. No regulatory framework currently sets a maximum aluminum level for tea or any other food ingredient, despite the high per-serving Al exposure tea provides; the EFSA 2021 aluminium Q&A ([[sources/efsa2021-aluminium-food-qa]]) addresses dietary Al as a category but does not propose tea-specific caps. The Jurowski 2023 Polish-market assessment ([[sources/jurowski2023-heavy-metals-green-tea-poland]]) found Pb, Cd, and tAs in green-tea infusions at levels below EU caps for dried-plant product on a dry-weight basis but flagged the cumulative per-serving exposure as worth tracking.

<!-- BEGIN: hmi-page-references -->
## References

The 8 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Hardisson A, Revert C, González-Weller D, Gutiérrez A, Paz S, and Rubio C (2017). *Aluminium Exposure Through the Diet*. HSOA Journal of Food Science and Nutrition. [https://doi.org/10.24966/fsn-1076/100020](https://doi.org/10.24966/fsn-1076/100020). Review, B-tier. [[sources/hardisson2017-aluminium-dietary-exposure-review|Source record]]
2. Jurowski K, Kondratowicz-Pietruszka E, and Krosniak M (2023). *The Control and Comprehensive Safety Assessment of Heavy Metal Impurities (As, Pb, and Cd) in Green Tea Camellia sinensis (L.) Samples (Infusions) Available in Poland*. Biological Trace Element Research. [https://doi.org/10.1007/s12011-023-03686-0](https://doi.org/10.1007/s12011-023-03686-0). Peer-reviewed, A-tier. [[sources/jurowski2023-heavy-metals-green-tea-poland|Source record]]
3. Brzezicha-Cirocka J, Grembecka M, and Szefer P (2016). *Monitoring of essential and heavy metals in green tea from different geographical origins*. Environmental Monitoring and Assessment. [https://doi.org/10.1007/s10661-016-5157-y](https://doi.org/10.1007/s10661-016-5157-y). Peer-reviewed, A-tier. [[sources/brzezicha-cirocka2016-green-tea-geographic-origins|Source record]]
4. Kazeminia M, Mehrabi A, Khorrami R, Rezaeifar M, Khedmati Morasa H, and Mahmoudi R (2023). *Heavy metals and their adverse effects: sources, risks, and strategies to reduce accumulation in tea herb — a systematic review*. Carpathian Journal of Food Science and Technology. [https://doi.org/10.34302/crpjfst/2023.15.4.3](https://doi.org/10.34302/crpjfst/2023.15.4.3). Peer-reviewed, B-tier. [[sources/kazeminia2023-tea-heavy-metals-review|Source record]]
5. German Federal Institute for Risk Assessment (BfR) (2022). *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*. BfR Communication No. 033/2022. [www.bfr.bund.de](https://www.bfr.bund.de/en/a-z_index/nickel-130376.html). Government report, A-tier. [[sources/bfr2022-nickel-dietary-intake-germany-meal|Source record]]
6. Hu C, Zhang X, Zhan N, and Liu Y (2023). *Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China*. Toxics. [https://doi.org/10.3390/toxics11080662](https://doi.org/10.3390/toxics11080662). Peer-reviewed, A-tier. [[sources/hu2023-china-tea-heavy-metals|Source record]]
7. Fan J, Wang S, Gong L, Ren R, and Jin Q (2025). *Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area*. Scientific Reports. [https://doi.org/10.1038/s41598-024-84287-2](https://doi.org/10.1038/s41598-024-84287-2). Peer-reviewed, A-tier. [[sources/fan2025-hangzhou-green-tea-metals|Source record]]
8. EUFIC (2021). *Aluminium in Food (Q&A): Sources, Safety and Regulations*. European Food Information Council (EUFIC). [www.eufic.org](https://www.eufic.org/en/food-safety/article/aluminium-in-food-qa-sources-safety-and-regulations). NGO report, B-tier. [[sources/efsa2021-aluminium-food-qa|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hamitoglu2026-turkiye-tea-metals\|Muhammed et al. 2026]]. *Determination of essential and toxic elements in black teas sold in Turkiye*, Turkish Journal of Pharmaceutical Sciences | 2026 | Peer-reviewed | TR Al, Pb, tAs, Cd, Mg, Fe, Cu, Zn occurrence in Eight black tea brands sold in Turkiye, analyzed as dry leaves and infusions |
| 2 | [[sources/szymczykowska2026-matcha-elemental-composition\|Szymczykowska et al. 2026]]. *Elemental Composition of Japanese Matcha Powder and Infusions—Potential Role as a Functional Food in Metabolic Health*, Beverages | 2026 | Peer-reviewed | JP/PL Pb, Cr, Ni occurrence in Two Japanese organic matcha types from the Uji region of Kyoto, Japan, single producer (JONA- and AgroBioTest-certified organic):... (n=2) |
| 3 | [[sources/taha2026-saudi-tea-metals\|Elhassan et al. 2026]]. *Heavy metals in commercial tea brands in Saudi Arabia*, Scientific Reports | 2026 | Peer-reviewed | SA Al, Mn, Pb, Cd, tAs occurrence in Twenty commercial tea samples imported into Saudi Arabia |
| 4 | [[sources/ye2026-tin-foods-dietary-exposure-zhejiang\|Ye et al. 2026]]. *Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China*, Foods | 2026 | Peer-reviewed | CN Sn occurrence in 2014 food samples from Zhejiang Province, China, collected 2018–2019 using multistage stratified random sampling: fresh vegetables (n=673), tea... (n=2014) |
| 5 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 6 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 7 | [[sources/wu2025-se-enriched-tea-cadmium-anhui\|Wu et al. 2025]]. *Cadmium in the Soil–Tea–Infusion Continuum of Selenium-Enriched Gardens: Implications for Food Safety*, Foods | 2025 | Peer-reviewed | CN Cd occurrence in Twelve Se-enriched tea gardens in the Golden Tea Belt of southwestern Anhui Province, China (30° N), cultivating Camellia... (n=216) |
| 8 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 9 | [[sources/grzadka2024-tea-radioisotopes-heavy-metals\|Grzadka et al. 2024]]. *Do You Know What You Drink? Comparative Research on the Contents of Radioisotopes and Heavy Metals in Different Types of Tea from Various Parts of the World*, Foods | 2024 | Peer-reviewed | PL/LK/IN Al, Cd, Cr, Cu, Fe, Mn, Mo, Ni, Pb, V occurrence in Thirty commercial true-tea samples imported to the Polish market from 2021 to 2023: black tea (n=16), green tea... (n=30) |
| 10 | [[sources/kowalski2024-herbal-tea-heavy-metals\|Maciej et al. 2024]]. *Assessment of heavy metal contamination and associated health risk indices in commercial herbal tea samples using inductively coupled plasma mass spectrometry*, International Journal of Advanced Chemistry Research | 2024 | Peer-reviewed | PL Pb, Cd, tAs, tHg, Cr occurrence in Commercial herbal tea samples purchased from Polish retail markets (n=48) |
| 11 | [[sources/ozturk2024-al-tea-infusion-teapot\|Öztürk et al. 2024]]. *Determination of aluminium concentrations in black, green, and white tea samples: effects of different infusion times and teapot species on aluminium release*, European Food Research and Technology | 2024 | Peer-reviewed | TR Al occurrence in Commercially purchased black, green, and white tea brewed in 5 teapot materials for 3 infusion times (n=45 condition... (n=45) |
| 12 | [[sources/si2024-nanomaterial-detection-heavy-metals-food\|Si et al. 2024]]. *Research progress in the detection of trace heavy metal ions in food samples*, Frontiers in Chemistry | 2024 | Review | CN Pb, Cd, tHg, Cr-VI, Cu, Zn, Fe occurrence in Mini-review of nanomaterial-based analytical methods for trace heavy-metal detection in food samples; covers electrochemical, colorimetric, and fluorescence sensing... |
| 13 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr occurrence in Seven commercially purchased food samples from a Nanjing supermarket: milk powder, whole wheat bread, yoghurt, orange juice, green... (n=7) |
| 14 | [[sources/meng2023-electrochemical-sensors-food-heavy-metals\|Meng et al. 2023]]. *The innovative and accurate detection of heavy metals in foods: A critical review on electrochemical sensors*, Food Control | 2023 | Review | CN/WHO Pb, Cd, iAs, tHg, Cr, Cr-VI, Cu, Zn, Ag occurrence in Critical review of the electrochemical-sensor literature (through ~2022) for heavy-metal detection in food matrices. |
| 15 | [[sources/peng2023-al-fluoride-tea-stress\|Peng et al. 2023]]. *Aluminum and Fluoride Stresses Altered Organic Acid and Secondary Metabolism in Tea (Camellia sinensis) Plants: Influences on Plant Tolerance, Tea Quality and Safety*, International Journal of Molecular Sciences | 2023 | Peer-reviewed | CN Al occurrence in Two-year-old tea seedlings of Camellia sinensis (L.) O. Kuntze cv. Shuchazao and Chuyeqi, grown in greenhouse hydroponic culture... |
| 16 | [[sources/usda-fas2023-china-gb-2762-2022-translation\|USDA 2023]]. *China Releases the Standard for Maximum Levels of Contaminants in Foods (USDA FAS GAIN Report CH2023-0040, unofficial translation of GB 2762-2022)*, USDA Foreign Agricultural Service, Global Agricultural Information Network (GAIN), Report Number CH2023-0040 | 2023 | Regulation | CN Pb, Cd, tHg, MeHg, tAs, iAs, Sn, Ni, Cr concentrations |
| 17 | [[sources/abraheem2022-tea-coffee-lead-cadmium\|Mohammad et al. 2022]]. *Determination of Lead and Cadmium Concentration in Different Samples of Tea and Coffee Circulating in the Libyan Market*, International Journal of Science and Research | 2022 | Peer-reviewed | LY Pb, Cd occurrence in Seventeen tea samples and eleven coffee samples circulating in Tripoli, Libya during 2018-2019 (n=28) |
| 18 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | German MEAL-Study nickel dietary-intake assessment (n=840); identifies tea as major dietary Ni contributor |
| 19 | [[sources/shchukin2022-mint-products-heavy-metals\|Shchukin et al. 2022]]. *Evaluation of Elemental Impurities in Peppermint Herb and Peppermint-Based Herbal Products*, Regulatory Research and Medicine Evaluation | 2022 | Peer-reviewed | RU Al, V, Cr, Mn, Fe, Ni, Cu, Zn, Sr, Ba, tAs occurrence in Peppermint leaves and peppermint-based herbal products evaluated in Russia |
| 20 | [[sources/yao2022-tieguanyin-tea-heavy-metals\|Qinghua et al. 2022]]. *Prediction and Health Risk Assessment of Copper, Lead, Cadmium, Chromium, and Nickel in Tieguanyin Tea: A Case Study from Fujian, China*, Foods | 2022 | Peer-reviewed | CN Cu, Pb, Cd, Cr, Ni occurrence in 91 Tieguanyin tea samples (500 g each) randomly collected from tea shops, supermarkets, and tea factories in Fujian... (n=91) |
| 21 | [[sources/efsa2021-aluminium-food-qa\|EUFIC 2021]]. *Aluminium in Food (Q&A): Sources, Safety and Regulations*, European Food Information Council (EUFIC) | 2021 | NGO report | EU aluminium regulatory framework; tea is dominant dietary Al source in EU populations |
| 22 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Polish-market 8-sample green-tea Cd, Pb, tAs, tHg subset of broader 240-sample study |
| 23 | [[sources/yao2021-tieguanyin-white-tea-heavy-metals\|Qinghua et al. 2021]]. *Dietary risk assessment of fluoride, lead, chromium, and cadmium through consumption of Tieguanyin tea and white tea*, Food Science and Technology (Campinas) | 2021 | Peer-reviewed | CN Pb, Cd, Cr occurrence in 72 Tieguanyin tea samples (40 from Anxi, 32 from Hua'an) and 40 white tea samples from Fuding, all... (n=112) |
| 24 | [[sources/bfr2020-aluminium-faq-consumer-products\|BfR 2020]]. *FAQs about aluminium in food and products intended for consumers*, BfR FAQ of 20 July 2020 | 2020 | Government report | DE/EU Al concentrations |
| 25 | [[sources/dehghani2020-food-lead-cadmium-mspe\|Zahra et al. 2020]]. *Magnetic Multi-Walled Carbon Nanotubes Modified with Polythiophene as a Sorbent for Simultaneous Solid Phase Microextraction of Lead and Cadmium from Water and Food Samples*, Analytical and Bioanalytical Chemistry Research | 2020 | Peer-reviewed | IR Pb, Cd occurrence in Black tea, rice, infant dry formula milk, and cow milk samples purchased in Yazd, Iran (n=5) |
| 26 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 27 | [[sources/fogarasi2019-tea-aluminum\|Erzsebet et al. 2019]]. *Aluminium contamination of several types of tea*, Orvostudomanyi Ertesito | 2019 | Peer-reviewed | RO Al occurrence in Green, black, fruit, and herbal tea infusions prepared from sampled tea materials (n=48) |
| 28 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biological Chemistry | 2019 | Peer-reviewed | KR/LK Pb, Cd, tAs, Al occurrence in Korean market oilseeds (sesame, perilla, flaxseed), noodles (flour and glass), and teas (black, green, Solomon's seal) — 3... (n=27) |
| 29 | [[sources/pourramezani2019-iran-imported-black-tea-metals\|Pourramezani et al. 2019]]. *Evaluation of heavy metal concentration in imported black tea in Iran and consumer risk assessments*, Food Science & Nutrition | 2019 | Peer-reviewed | IR/IN/LK Pb, Cd, Cu, tAs, tHg occurrence in One hundred twenty-two commercial black tea leaf samples randomly collected from the local market of Hormozgan Province, Iran... (n=122) |
| 30 | [[sources/deoliveira2018-traditional-herbal-teas-metals\|Oliveira et al. 2018]]. *Metal concentrations in traditional and herbal teas and their potential risks to human health*, Science of the Total Environment | 2018 | Peer-reviewed | US Al, tAs, Cd, Cr, Pb occurrence in Forty-seven tea products collected in the US market, covering 16 herbal teas, 16 black teas, 11 green teas,... (n=47) |
| 31 | [[sources/jannat2018-iran-tea-heavy-metals\|Jannat et al. 2018]]. *Determination of trace elements and heavy metals content of green and black tea varieties consumed in Iran*, African Journal of Biotechnology | 2018 | Peer-reviewed | IR Pb, Cd, Cu, Zn occurrence in Sixty commercial true-tea samples purchased from local retail markets in Tehran, Iran: 33 black tea and 27 green... (n=60) |
| 32 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson et al. 2017]]. *Aluminium Exposure Through the Diet*, HSOA Journal of Food Science and Nutrition | 2017 | Review | Cross-country aluminium dietary exposure review; documents tea as dominant dietary Al contributor |
| 33 | [[sources/scheer2017-aluminium-tolerable-intake-toys\|SCHEER 2017]]. *Final Opinion on tolerable intake of aluminium with regards to adapting the migration limits for aluminium in toys*, Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), European Commission | 2017 | Government report | EU Al occurrence in Review of regulatory opinions and dietary exposure data for children and adults |
| 34 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 35 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 36 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | Irish total-diet-study tea iAs, tAs, Al, Cd, Cr, Pb, tHg, Sn in the as-consumed pathway |
| 37 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 38 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 39 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 40 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 41 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | US Al occurrence in Synthesis of peer-reviewed human and animal toxicology, exposure, and environmental-fate data; no original sampling |
| 42 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EU Al concentrations |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
