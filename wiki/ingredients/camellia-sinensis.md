---
title: "Camellia sinensis"
type: ingredient
commodity: camellia-sinensis
label: "Camellia sinensis"
aliases: [tea leaves, black tea, green tea, white tea, oolong tea]
category: botanical
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [400, 1500]
    p95_ppb: 5000
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [40, 200]
    p95_ppb: 350
    confidence: high
    n_studies: 13
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [3, 40]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [5000, 15000]
    p95_ppb: 30000
    confidence: medium
    n_studies: 8
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [200000, 500000]
    p95_ppb: 975000
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [500, 3000]
    p95_ppb: 5060
    confidence: high
    n_studies: 12
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 200]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: 1830
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
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [kombucha-tea-based, matcha, true-tea-camellia-sinensis]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 15
---

# Camellia sinensis

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=13 | 400–1500 | high | [[sources/ji2026-agricultural-soil-metals-zhejiang\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| Cd | n=13 | 40–200 | high | [[sources/ji2026-agricultural-soil-metals-zhejiang\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=10 | 50–500 | medium | [[sources/ji2026-agricultural-soil-metals-zhejiang\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| tHg | n=6 | 3–40 | medium | [[sources/ji2026-agricultural-soil-metals-zhejiang\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| Ni | n=8 | 5000–15000 | medium | [[sources/fan2025-hangzhou-green-tea-metals\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/kazeminia2023-tea-heavy-metals-review\|3]] |
| Al | n=6 | 200000–500000 | medium | [[sources/fan2025-hangzhou-green-tea-metals\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]], [[sources/kazeminia2023-tea-heavy-metals-review\|3]] |
| Cr | n=12 | 500–3000 | high | [[sources/ji2026-agricultural-soil-metals-zhejiang\|1]], [[sources/fan2025-hangzhou-green-tea-metals\|2]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|3]] |
| Sn | n=2 | 0–200 | low | [[sources/fan2025-hangzhou-green-tea-metals\|1]], [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/kombucha-tea-based]], [[products/matcha]], [[products/true-tea-camellia-sinensis]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ji2026-agricultural-soil-metals-zhejiang\|Ji et al. 2026]]. *Assessing spatial variability and source identification of heavy metals in agricultural soils: A geostatistical and multivariate analysis of coastal eastern Zhejiang, China*, PLOS ONE | 2026 | Peer-reviewed | Soil Cr, Pb, Cd, Hg, and As concentrations across 877 agricultural sites in Zhejiang including tea gardens; provides contamination-load context for Camellia sinensis growing regions |
| 2 | [[sources/fan2025-hangzhou-green-tea-metals\|Fan et al. 2025]]. *Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area*, Scientific Reports | 2025 | Peer-reviewed | tAs, Cd, Cr, Pb, tHg, Al, Ni, and Sn in 120 Hangzhou green tea samples by ICP-MS; all values below Chinese standard limits, HI = 0.42 |
| 3 | [[sources/uthayarajan2025-cdku-food-water-sri-lanka-review\|Uthayarajan et al. 2025]]. *Quality and sources of food and water consumed by people with chronic kidney disease of unknown etiology in Sri Lanka: a systematic review*, Environmental Science and Pollution Research | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/wang2025-mof-bi-cd-tea-soil-to-cup\|Wang et al. 2025]]. *Tracking Cadmium Transfer from Soil to Cup: An Electrochemical Sensing Strategy Based on Bi3+-Rich MOFs for Tea Safety Monitoring*, Foods | 2025 | Peer-reviewed | Cd detection method tracking soil-to-leaf-to-infusion transfer in Camellia sinensis; provides literature-synthesised Cd concentration context across the tea supply chain |
| 5 | [[sources/hu2023-china-tea-heavy-metals\|Hu et al. 2023]]. *Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China*, Toxics | 2023 | Peer-reviewed | Meta-analysis of tAs, Cd, Cr, Cu, tHg, and Pb in 4,803 Chinese tea samples (227 studies, 1993–2021); spatial Kriging maps carcinogenic Cd risk hotspots in Shaanxi, Anhui, and southwest China |
| 6 | [[sources/jurowski2023-heavy-metals-green-tea-poland\|Jurowski et al. 2023]]. *The Control and Comprehensive Safety Assessment of Heavy Metal Impurities (As, Pb, and Cd) in Green Tea Camellia sinensis (L.) Samples (Infusions) Available in Poland*, Biological Trace Element Research | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 7 | [[sources/kazeminia2023-tea-heavy-metals-review\|Kazeminia et al. 2023]]. *Heavy metals and their adverse effects: sources, risks, and strategies to reduce accumulation in tea herb — a systematic review*, Carpathian Journal of Food Science and Technology | 2023 | Peer-reviewed | Systematic review of As, Cd, Cr, Pb, Hg, Al, Fe, Ba, Ni, and Co in black and green tea (157 articles, 2000–2022); synthesizes mitigation strategies including steeping time and soil management |
| 8 | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|Munilla et al. 2023]]. *Family outbreak of lead poisoning associated with the consumption of kombucha manufactured and marketed in ceramic containers*, Revista Española de Salud Pública | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 9 | [[sources/salmani2023-herbal-teas-metals-review\|Salmani et al. 2023]]. *Comparison of Essential and Toxic Metals Levels in some Herbal Teas: a Systematic Review*, Biological Trace Element Research | 2023 | Review | Systematic review of Pb, Cd, tAs, Al, Cr, and Ni in black tea, green tea, chamomile, thyme, and rosemary (49 studies, 2012–2023); flags As and Pb risks in black tea |
| 10 | [[sources/li2021-china-national-tea-reconnaissance\|Li et al. 2021]]. *Occurrence, accumulation, and risk assessment of trace metals in tea (Camellia sinensis): A national reconnaissance*, Science of the Total Environment | 2021 | Peer-reviewed | National-scale Chinese reconnaissance of trace metals in Camellia sinensis tea leaves and infusions; occurrence, accumulation factors, and health risk assessment across growing regions |
| 11 | [[sources/yaqub2018-tea-metals-pesticides-pakistan\|Yaqub et al. 2018]]. *Monitoring and risk assessment due to presence of heavy metals and pesticides in tea samples*, Food Science and Technology | 2018 | Peer-reviewed | Heavy metal monitoring and health risk assessment in Pakistani tea samples; provides occurrence context for tea from South Asian supply chains |
| 12 | [[sources/zhang2018-tea-puan-guizhou-heavy-metals\|Zhang et al. 2018]]. *Accumulation of Heavy Metals in Tea Leaves and Potential Health Risk Assessment: A Case Study from Puan County, Guizhou Province, China*, International Journal of Environmental Research and Public Health | 2018 | Peer-reviewed | Heavy metal accumulation in tea leaves from Puan County, Guizhou (southwest China); health risk assessment in a cadmium-enriched geological province |
| 13 | [[sources/brzezicha-cirocka2016-green-tea-geographic-origins\|Brzezicha-Cirocka et al. 2016]]. *Monitoring of essential and heavy metals in green tea from different geographical origins*, Environmental Monitoring and Assessment | 2016 | Peer-reviewed | Essential and toxic metal concentrations in green tea samples by geographic origin; quantifies country-of-origin variance in tea metal profiles |
| 14 | [[sources/li2015-green-tea-jiangxi-al-heavy-metals\|Li et al. 2015]]. *A comparison of the potential health risk of aluminum and heavy metals in tea leaves and tea infusion of commercially available green tea in Jiangxi, China*, Environmental Monitoring and Assessment | 2015 | Peer-reviewed | Al and heavy metal concentrations in Jiangxi green tea leaves and infusions; compares dry-leaf vs brewed-infusion risk and highlights Al as the dominant health concern |
| 15 | [[sources/li2013-tea-chemical-contaminants-review\|Li et al. 2013]]. *Determination for major chemical contaminants in tea (Camellia sinensis) matrices: A review*, Food Research International | 2013 | Review | Analytical review of determination methods for major chemical contaminants in tea matrices; covers metals, pesticides, and other contaminants across dry leaf, infusion, and extract |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


