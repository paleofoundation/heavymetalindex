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
wiki_doi: null
updated: 2026-05-16
sources: 24
hero_image: /static/heroes/matcha-green-powder-tea.webp
hero_image_alt: "Fine muted-green matcha powder and a plain bowl of green tea illustrating camellia sinensis ingredient context."
---

# Camellia sinensis

## Overview

Camellia sinensis is the tea plant, the source of black, green, white, and oolong teas. Its heavy-metal profile is the subject of a dedicated synthesis, [[synthesis/tea-multi-metal-bioaccumulation]], which carries the load-bearing finding for this ingredient: tea is a multi-metal bioaccumulator and an aluminium hyperaccumulator whose as-consumed exposure is governed by the metal-specific, origin-dependent leaf-to-infusion transfer fraction rather than by the dry-leaf totals tabulated below. The table that follows is on a dry-leaf basis and, per the synthesis, overstates the dose delivered in the brewed cup; the transfer-fraction and infusion-basis caveats live on the synthesis page.

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

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ji2026-agricultural-soil-metals-zhejiang\|Ji et al. 2026]]. *Assessing spatial variability and source identification of heavy metals in agricultural soils: A geostatistical and multivariate analysis of coastal eastern Zhejiang, China*, PLOS ONE | 2026 | Peer-reviewed | Soil Cr, Pb, Cd, Hg, and As concentrations across 877 agricultural sites in Zhejiang including tea gardens; provides contamination-load context for Camellia sinensis growing regions |
| 2 | [[sources/fan2025-hangzhou-green-tea-metals\|Fan et al. 2025]]. *Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area*, Scientific Reports | 2025 | Peer-reviewed | tAs, Cd, Cr, Pb, tHg, Al, Ni, and Sn in 120 Hangzhou green tea samples by ICP-MS; all values below Chinese standard limits, HI = 0.42 |
| 3 | [[sources/tandhanskul2025-kombucha-metabiotics-review\|Tandhanskul et al. 2025]]. *Kombucha as a Sustainable Source of Metabiotics: Potential, Applications, and Future Perspectives*, Beverages | 2025 | Peer-reviewed | Pb, Cd, Cr, Co, Ni occurrence in Narrative review of secondary literature on kombucha as a source of postbiotics/metabiotics. No new measurements; heavy-metal content appears... |
| 4 | [[sources/wang2025-mof-bi-cd-tea-soil-to-cup\|Wang et al. 2025]]. *Tracking Cadmium Transfer from Soil to Cup: An Electrochemical Sensing Strategy Based on Bi3+-Rich MOFs for Tea Safety Monitoring*, Foods | 2025 | Peer-reviewed | Cd detection method tracking soil-to-leaf-to-infusion transfer in Camellia sinensis; provides literature-synthesised Cd concentration context across the tea supply chain |
| 5 | [[sources/wu2025-se-enriched-tea-cadmium-anhui\|Wu et al. 2025]]. *Cadmium in the Soil–Tea–Infusion Continuum of Selenium-Enriched Gardens: Implications for Food Safety*, Foods | 2025 | Peer-reviewed | CN Cd occurrence in Twelve Se-enriched tea gardens in the Golden Tea Belt of southwestern Anhui Province, China (30° N), cultivating Camellia... (n=216) |
| 6 | [[sources/grzadka2024-tea-radioisotopes-heavy-metals\|Grzadka et al. 2024]]. *Do You Know What You Drink? Comparative Research on the Contents of Radioisotopes and Heavy Metals in Different Types of Tea from Various Parts of the World*, Foods | 2024 | Peer-reviewed | PL/LK/IN Al, Cd, Cr, Cu, Fe, Mn, Mo, Ni, Pb, V occurrence in Thirty commercial true-tea samples imported to the Polish market from 2021 to 2023: black tea (n=16), green tea... (n=30) |
| 7 | [[sources/hu2023-china-tea-heavy-metals\|Hu et al. 2023]]. *Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China*, Toxics | 2023 | Peer-reviewed | Meta-analysis of tAs, Cd, Cr, Cu, tHg, and Pb in 4,803 Chinese tea samples (227 studies, 1993–2021); spatial Kriging maps carcinogenic Cd risk hotspots in Shaanxi, Anhui, and southwest China |
| 8 | [[sources/jurowski2023-heavy-metals-green-tea-poland\|Jurowski et al. 2023]]. *The Control and Comprehensive Safety Assessment of Heavy Metal Impurities (As, Pb, and Cd) in Green Tea Camellia sinensis (L.) Samples (Infusions) Available in Poland*, Biological Trace Element Research | 2023 | Peer-reviewed | tAs, Pb, and Cd in 12 green tea infusions (not dry leaf) from the Polish market with Chinese-origin samples showing higher hazard index than Sri Lankan |
| 9 | [[sources/kazeminia2023-tea-heavy-metals-review\|Kazeminia et al. 2023]]. *Heavy metals and their adverse effects: sources, risks, and strategies to reduce accumulation in tea herb — a systematic review*, Carpathian Journal of Food Science and Technology | 2023 | Peer-reviewed | Systematic review of As, Cd, Cr, Pb, Hg, Al, Fe, Ba, Ni, and Co in black and green tea (157 articles, 2000–2022); synthesizes mitigation strategies including steeping time and soil management |
| 10 | [[sources/munilla-garcia2023-lead-kombucha-ceramics\|Munilla et al. 2023]]. *Family outbreak of lead poisoning associated with the consumption of kombucha manufactured and marketed in ceramic containers*, Revista Española de Salud Pública | 2023 | Peer-reviewed | Spanish family lead-poisoning outbreak from tea-based kombucha fermented in unglazed ceramic vessels, documenting Pb migration into the finished beverage |
| 11 | [[sources/salmani2023-herbal-teas-metals-review\|Salmani et al. 2023]]. *Comparison of Essential and Toxic Metals Levels in some Herbal Teas: a Systematic Review*, Biological Trace Element Research | 2023 | Review | Systematic review of Pb, Cd, tAs, Al, Cr, and Ni in black tea, green tea, chamomile, thyme, and rosemary (49 studies, 2012–2023); flags As and Pb risks in black tea |
| 12 | [[sources/yao2022-tieguanyin-tea-heavy-metals\|Qinghua et al. 2022]]. *Prediction and Health Risk Assessment of Copper, Lead, Cadmium, Chromium, and Nickel in Tieguanyin Tea: A Case Study from Fujian, China*, Foods | 2022 | Peer-reviewed | CN Cu, Pb, Cd, Cr, Ni occurrence in 91 Tieguanyin tea samples (500 g each) randomly collected from tea shops, supermarkets, and tea factories in Fujian... (n=91) |
| 13 | [[sources/li2021-china-national-tea-reconnaissance\|Li et al. 2021]]. *Occurrence, accumulation, and risk assessment of trace metals in tea (Camellia sinensis): A national reconnaissance*, Science of the Total Environment | 2021 | Peer-reviewed | National-scale Chinese reconnaissance of trace metals in Camellia sinensis tea leaves and infusions; occurrence, accumulation factors, and health risk assessment across growing regions |
| 14 | [[sources/yao2021-tieguanyin-white-tea-heavy-metals\|Qinghua et al. 2021]]. *Dietary risk assessment of fluoride, lead, chromium, and cadmium through consumption of Tieguanyin tea and white tea*, Food Science and Technology (Campinas) | 2021 | Peer-reviewed | CN Pb, Cd, Cr occurrence in 72 Tieguanyin tea samples (40 from Anxi, 32 from Hua'an) and 40 white tea samples from Fuding, all... (n=112) |
| 15 | [[sources/pourramezani2019-iran-imported-black-tea-metals\|Pourramezani et al. 2019]]. *Evaluation of heavy metal concentration in imported black tea in Iran and consumer risk assessments*, Food Science & Nutrition | 2019 | Peer-reviewed | IR/IN/LK Pb, Cd, Cu, tAs, tHg occurrence in One hundred twenty-two commercial black tea leaf samples randomly collected from the local market of Hormozgan Province, Iran... (n=122) |
| 16 | [[sources/deoliveira2018-traditional-herbal-teas-metals\|Oliveira et al. 2018]]. *Metal concentrations in traditional and herbal teas and their potential risks to human health*, Science of the Total Environment | 2018 | Peer-reviewed | US Al, tAs, Cd, Cr, Pb occurrence in Forty-seven tea products collected in the US market, covering 16 herbal teas, 16 black teas, 11 green teas,... (n=47) |
| 17 | [[sources/jannat2018-iran-tea-heavy-metals\|Jannat et al. 2018]]. *Determination of trace elements and heavy metals content of green and black tea varieties consumed in Iran*, African Journal of Biotechnology | 2018 | Peer-reviewed | IR Pb, Cd, Cu, Zn occurrence in Sixty commercial true-tea samples purchased from local retail markets in Tehran, Iran: 33 black tea and 27 green... (n=60) |
| 18 | [[sources/yaqub2018-tea-metals-pesticides-pakistan\|Yaqub et al. 2018]]. *Monitoring and risk assessment due to presence of heavy metals and pesticides in tea samples*, Food Science and Technology | 2018 | Peer-reviewed | Heavy metal monitoring and health risk assessment in Pakistani tea samples; provides occurrence context for tea from South Asian supply chains |
| 19 | [[sources/zhang2018-tea-puan-guizhou-heavy-metals\|Zhang et al. 2018]]. *Accumulation of Heavy Metals in Tea Leaves and Potential Health Risk Assessment: A Case Study from Puan County, Guizhou Province, China*, International Journal of Environmental Research and Public Health | 2018 | Peer-reviewed | Heavy metal accumulation in tea leaves from Puan County, Guizhou (southwest China); health risk assessment in a cadmium-enriched geological province |
| 20 | [[sources/brzezicha-cirocka2016-green-tea-geographic-origins\|Brzezicha-Cirocka et al. 2016]]. *Monitoring of essential and heavy metals in green tea from different geographical origins*, Environmental Monitoring and Assessment | 2016 | Peer-reviewed | Essential and toxic metal concentrations in green tea samples by geographic origin; quantifies country-of-origin variance in tea metal profiles |
| 21 | [[sources/li2015-green-tea-jiangxi-al-heavy-metals\|Li et al. 2015]]. *A comparison of the potential health risk of aluminum and heavy metals in tea leaves and tea infusion of commercially available green tea in Jiangxi, China*, Environmental Monitoring and Assessment | 2015 | Peer-reviewed | Al and heavy metal concentrations in Jiangxi green tea leaves and infusions; compares dry-leaf vs brewed-infusion risk and highlights Al as the dominant health concern |
| 22 | [[sources/li2013-tea-chemical-contaminants-review\|Li et al. 2013]]. *Determination for major chemical contaminants in tea (Camellia sinensis) matrices: A review*, Food Research International | 2013 | Review | Analytical review of determination methods for major chemical contaminants in tea matrices; covers metals, pesticides, and other contaminants across dry leaf, infusion, and extract |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Camellia sinensis (the tea plant; source of black, green, white, oolong, pu-erh, and yellow teas) is a documented aluminum accumulator. The plant species itself, independent of soil-Al loading, takes up aluminum into the leaves at concentrations 10-100× higher than most other food plants. The mechanism is plant-physiological: tea leaves carry aluminum-organic-acid complexes (oxalate, catechins) that act as Al chelators, sequestering Al in vacuoles where it doesn't damage cellular machinery. This adaptation lets tea grow in acidic, Al-rich soils that would be toxic to most other crops; the consequence is that tea leaves carry substantial Al as harvested.

Cadmium, lead, and other panel metals appear in tea proportional to soil concentrations and atmospheric deposition. Tea is grown predominantly in Asia (China, India, Sri Lanka, Kenya, Japan, Taiwan, Indonesia, Vietnam) and some of these regions have elevated soil Cd from prior agricultural practice or natural geochemistry. Tea grown near roadways or industrial sources can carry elevated Pb from atmospheric deposition.

The HMTc panel concerns for camellia sinensis are dominantly Al (the plant-physiological accumulator), with secondary Cd and Pb. The brewed-tea-as-consumed exposure pathway extracts a fraction of these metals from the dry leaf into the cup, with the leach fraction depending on tea type, brew temperature, brew time, and water source.

## Ranges by source, region, and variety

The dominant axis of variance is plant-age and leaf-age. Mature tea bushes (10+ years old) accumulate more Al than young plants from the same soil. Older leaves (lower-grade tea picks) carry more Al than younger leaves (premium first-flush teas). White teas (made from very young leaves and buds) carry less Al per dry mass than the bottom-tier "fanning" and "dust" grades used in commodity tea bags.

Geographic variance: Chinese teas (Yunnan, Fujian, Zhejiang, Anhui growing regions) cluster across a wide Al range with some Yunnan pu-erh teas at the high end. Indian teas (Assam, Darjeeling, Nilgiri) cluster at moderate Al with regional sub-variance. Sri Lankan (Ceylon) teas and Kenyan teas tend to carry moderate Al with less within-region variance than Chinese teas because of more consistent commodity production methods.

Fermented vs unfermented teas: Black tea (fully oxidized) and pu-erh tea (microbially fermented) have undergone post-harvest transformations that don't substantially change total Al but can affect the Al-organic-acid complex distribution and therefore extraction efficiency. Green tea (steamed or pan-fired to halt oxidation) retains the largest free-catechin fraction; brewed green tea consequently extracts more Al per unit leaf than brewed black tea brewed under the same conditions.

## Processing effects

Tea processing (withering, oxidation, fermentation for pu-erh, drying, sorting) does not remove heavy metals from the leaf. The brewing step is where the consumer-exposure question becomes operational.

**Brew temperature and time** determine Al, Pb, and Cd extraction. Higher temperature and longer steeping increase the extraction fraction. Standard hot-brewing (90-100°C, 3-5 min) extracts 30-60 percent of leaf Al into the cup, with the exact fraction varying by tea type. Cold-brew tea (room temperature, several hours) extracts less Al per unit time but can match hot-brew extraction over long enough steep times.

**Water source** matters because the dissolved minerals in the brewing water affect Al solubility and Al-complex stability. Hard water (high Ca, Mg) reduces Al extraction modestly; soft water increases it.

**Tea bag vs loose leaf** is a minor variance: surface-area exposure differs, but the practical brewing-time difference (tea bags are typically smaller and steeped shorter) tends to offset.

**Lemon juice or other acid** added to brewed tea increases Al solubility and bioavailability; addition of milk forms Al-casein complexes that may reduce intestinal absorption. The downstream-bioavailability question is separate from the in-cup concentration question.

## Ingredient-derivative risk

Concentrated tea products (tea extract supplements, EGCG capsules, matcha powder) carry substantially higher per-serving Al than brewed tea because the consumer ingests the leaf material in concentrated form rather than the brew. Matcha powder ([[ingredients/matcha-powder]]) is the most consequential case: the leaf is consumed whole (suspended in water, not strained), so all of the leaf Al is ingested. EGCG and green-tea-extract dietary supplements similarly deliver the whole-leaf metal content per serving and route to [[products/supplements-botanicals-herbs|Cat 16 row 15]].

Bottled and ready-to-drink teas inherit the brew-method metal extraction profile of their manufacturing process; cold-brewed RTD teas typically carry less Al than hot-brewed canned or bottled teas. Sweetened RTD teas dilute the metal content per serving size compared to unsweetened steeped tea.

Iced tea, kombucha (fermented tea), and tea-based functional beverages inherit the source-tea metal profile with brewing-and-dilution adjustments.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Choosing tea from lower-Al-accumulator origin regions and from younger-leaf grades (white tea, first-flush green tea) reduces per-serving Al. Single-origin sourcing with documented per-lot Al testing is the operational specification for high-quality tea brands.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the tea-farm level. Soil pH management can modestly reduce Al uptake, though tea's aluminum-accumulation mechanism makes this less effective than for non-Al-accumulating crops. Cultivar selection within Camellia sinensis can shift Al accumulation moderately. Avoidance of fertilizer Al inputs is standard.

**Processing levers** ([[mitigation/processing]]) for finished tea are limited. Brewing-method recommendations (cooler water, shorter steep, paper-filter brewing) are consumer-side mitigation rather than brand-side. Some tea brands market a "low-aluminum" brewing recommendation.

**Formulation levers** ([[mitigation/formulation]]) include blend composition (substituting low-Al-origin tea for high-Al-origin tea in commodity blends).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Al, Cd, and Pb testing on green-leaf or dry-tea shipments. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are not consequential for tea metal load on typical shelf-life timescales.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb in tea (typically expressed for dry tea leaves) and does not currently set an Al ML for tea.
- Codex Alimentarius does not maintain a tea-specific Al or Cd ML; some national authorities set national MLs.
- FDA does not maintain a binding action level for Al, Cd, or Pb in tea specifically.
- JECFA Provisional Tolerable Weekly Intake for aluminum (2 mg/kg b.w./week) and EFSA TWI (1 mg/kg b.w./week) anchor the dose-response framing. Daily tea consumption at 2-3 cups can deliver 2-5 mg Al per day, putting heavy daily tea drinkers at or near the JECFA/EFSA reference intake depending on tea type and brewing method.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to tea sold in California; the serving-based screen governs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
