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
    confidence: high
    n_studies: 8
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: 500
    confidence: high
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
    confidence: high
    n_studies: 4
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
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
updated: 2026-05-16
sources: 10
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 10
---

# Tea

Tea (Camellia sinensis leaf, processed into green, black, oolong, white, and pu-erh varieties) is the dominant dietary source of aluminum in many populations and a notable source of lead, fluoride (out of scope for this page), and trace heavy metals. The defining biological feature of the tea plant is its aluminum hyperaccumulation: Camellia sinensis tolerates and accumulates aluminum at concentrations of 10,000-100,000 ppb dry weight (orders of magnitude above any other major food-crop leaf), driven by an adaptation to acidic soils where Al is the dominant available cation. The current corpus loads 10 sources spanning China (the largest tea-producing region globally, with the Hu 2023 status assessment covering 4,803 samples nationwide and the Fan 2025 Hangzhou survey at 120 samples), Poland-and-EU import data, Germany (BfR MEAL Study nickel dietary-intake assessment), Ireland (FSAI 2016 total diet study), and broader systematic reviews. The Hu 2023 dataset is the largest single tea heavy-metals dataset in the loaded corpus and provides the strongest distributional anchor for the Pb, Cd, tAs, Cr, tHg, and Cu profile in Chinese-origin product.

## Why this commodity accumulates heavy metals

Tea's heavy-metals profile is shaped by three interacting factors: soil chemistry, the aluminum-hyperaccumulator pathway, and the infusion-extraction question. Soil chemistry: tea is grown predominantly on acidic mountain soils in Yunnan, Anhui, Zhejiang, Fujian (China), Assam and Darjeeling (India), Sri Lanka, Kenya, and similar high-altitude tropical-to-subtropical regions. These soils are naturally elevated in aluminum and frequently in cadmium relative to neutral-pH agricultural soils. Tea bushes take up Al, Cd, and trace metals from the root zone and transport them into leaves; the older the leaf, the higher the metal concentration. The aluminum-hyperaccumulator pathway is the defining feature: green and black teas routinely carry 10,000-100,000 ppb Al dry weight, with pu-erh and aged-leaf product reaching the upper end. The Hardisson 2017 dietary-exposure review documents tea as the dominant aluminum source in many western diets ([[sources/hardisson2017-aluminium-dietary-exposure-review]]). The infusion-extraction question is what makes finished-beverage exposure different from dry-leaf exposure: hot water extracts roughly 30-50% of dry-leaf lead, 50-70% of cadmium, 70-90% of fluoride, and a variable fraction of aluminum into the brewed cup. The Jurowski 2023 Polish-market survey ([[sources/jurowski2023-heavy-metals-green-tea-poland]]) measured both dry-leaf and infusion concentrations and confirmed the partial-extraction pattern. Atmospheric deposition adds surface Pb to tea leaves harvested in roadside or industrial-corridor settings, particularly relevant for lower-altitude commodity-grade product.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=8       | 100–2,000        | 5,000     | high   | [[sources/hu2023-china-tea-heavy-metals\|7]], [[sources/fan2025-hangzhou-green-tea-metals\|4]] |
| Cd  | n=8       | 20–200           | 500       | high   | [[sources/hu2023-china-tea-heavy-metals\|7]], [[sources/jurowski2023-heavy-metals-green-tea-poland\|8]] |
| iAs | n=1       | —                | —         | —      | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|5]] |
| tAs | n=5       | 10–300           | —         | medium | [[sources/hu2023-china-tea-heavy-metals\|7]], [[sources/fan2025-hangzhou-green-tea-metals\|4]] |
| tHg | n=4       | 1–30             | —         | medium | [[sources/hu2023-china-tea-heavy-metals\|7]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|10]] |
| Ni  | n=3       | 1,000–8,000      | —         | medium | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|4]] |
| Al  | n=4       | 10,000–100,000   | 200,000   | high   | [[sources/hardisson2017-aluminium-dietary-exposure-review\|6]], [[sources/efsa2021-aluminium-food-qa\|3]] |
| Cr  | n=3       | 100–2,000        | —         | low    | [[sources/brzezicha-cirocka2016-green-tea-geographic-origins\|2]] |
| Sn  | n=1       | —                | —         | —      | [[sources/fan2025-hangzhou-green-tea-metals\|4]] |
| U   | data gap  | —                | —         | —      | — |

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel long-term intake via food, BfR MEAL Study* | 2022 | Government dataset | German MEAL-Study nickel dietary-intake assessment (n=840); identifies tea as major dietary Ni contributor |
| 2 | [[sources/brzezicha-cirocka2016-green-tea-geographic-origins\|Brzezicha-Cirocka 2016]]. *Essential and heavy metals in green tea from different geographic origins* | 2016 | Peer-reviewed | Multi-origin green-tea 9-metal panel (n=41) across Chinese, Indian, Japanese product |
| 3 | [[sources/efsa2021-aluminium-food-qa\|EFSA 2021]]. *Aluminium in Food (Q&A)*, EU regulatory guidance | 2021 | Government report | EU aluminium regulatory framework; tea is dominant dietary Al source in EU populations |
| 4 | [[sources/fan2025-hangzhou-green-tea-metals\|Fan 2025]]. *Heavy metals in green tea Hangzhou occurrence exposure health risk* | 2025 | Peer-reviewed | Hangzhou green-tea 12-metal panel (n=120) including Sn, Sb, Mn rarely measured elsewhere |
| 5 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|FSAI 2016]]. *Irish Total Diet Study 2012-2014* | 2016 | Government dataset | Irish total-diet-study tea iAs, tAs, Al, Cd, Cr, Pb, tHg, Sn in the as-consumed pathway |
| 6 | [[sources/hardisson2017-aluminium-dietary-exposure-review\|Hardisson 2017]]. *Aluminium Exposure Through the Diet* | 2017 | Peer-reviewed | Cross-country aluminium dietary exposure review; documents tea as dominant dietary Al contributor |
| 7 | [[sources/hu2023-china-tea-heavy-metals\|Hu 2023]]. *Heavy Metals Contamination in Tea across China* | 2023 | Peer-reviewed | China-wide tea heavy-metals status assessment (n=4,803); largest single tea heavy-metals dataset in corpus |
| 8 | [[sources/jurowski2023-heavy-metals-green-tea-poland\|Jurowski 2023]]. *Control and Safety Assessment of As Pb Cd in Green Tea Infusions Poland* | 2023 | Peer-reviewed | Polish-market green-tea dry-leaf AND infusion paired measurements (n=12); brewing-extraction evidence |
| 9 | [[sources/kazeminia2023-tea-heavy-metals-review\|Kazeminia 2023]]. *Heavy metals in tea herb systematic review* | 2023 | Peer-reviewed | Systematic review of 157 tea heavy-metals studies; global synthesis without sample-level data |
| 10 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *Safety Assessment of Toxic Metals in Herbs Spices Tea Coffee Poland* | 2021 | Peer-reviewed | Polish-market 8-sample green-tea Cd, Pb, tAs, tHg subset of broader 240-sample study |
<!-- END: hmi-source-legend -->
