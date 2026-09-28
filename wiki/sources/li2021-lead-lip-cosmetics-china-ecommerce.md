---
type: source
raw_handle: kimi-children-personal-care-li2021
cite_key: li2021-lead-lip-cosmetics-china-ecommerce
title: "Trace Metal Lead Exposure in Typical Lip Cosmetics From Electronic Commercial Platform: Investigation, Health Risk Assessment and Blood Lead Level Analysis"
authors: [Li Y, Fang Y, Liu Z, Zhang Y, Liu K, Jiang L, Yang B, Yang Y, Song Y, Liu C]
year: 2021
publication: "Frontiers in Public Health 9:766984"
doi: 10.3389/fpubh.2021.766984
access_url: "https://www.frontiersin.org/articles/10.3389/fpubh.2021.766984/full"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Trace_Metal_Lead_Exposure_in_Typical_Lip_Cosmetics_From_Electronic_Commercial_Pl.pdf"
raw_sha256: a2eb8484e4d64f5f3b39e9e59939643080330904c435953940340cb21a9e7692
metals: [Pb]
ingredients: []
products: ["[[products/lipstick]]"]
matrices: [cosmetic-personal-care]
jurisdictions: [CN]
near_duplicates: []
sample_n: 34
sample_population: "34 best-selling lip cosmetics (12 lipsticks, 13 lip glosses, 9 lip balms) sold on JingDong (one of the top-10 Chinese e-commerce platforms), selected via Python web crawler (BeautifulSoup + Pandas) ranking by market share and commodity reviews; purchased and analysed 2020-2021. Production-country mix per Table 1: France (6 lipsticks + 4 lip glosses), China (4 lipsticks + 4 lip glosses + 3 lip balms), USA (1 lipstick + 2 lip glosses + 3 lip balms), Italy (1 lipstick + 2 lip glosses), Japan (1 lipstick + 1 lip balm), Canada (1 lipstick + 1 lip gloss), Germany (1 lip balm)."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Li et al. 2021 — Lead in Chinese e-commerce lip cosmetics with USEPA Monte Carlo risk assessment and ALM/IEUBK blood-lead modelling

## Overview

This Frontiers in Public Health paper measures total lead in 34 best-selling lip cosmetics (12 lipsticks, 13 lip glosses, 9 lip balms) drawn from the JingDong Chinese e-commerce platform by Python web crawler, then applies the USEPA oral-ingestion health risk assessment framework with 10,000-iteration Monte Carlo simulation for adult risk and the Adult Lead Model (ALM) plus Integrated Exposure Uptake Biokinetic (IEUBK) model for children's blood-lead response. Pb concentrations span 0 (below detection in 41.18% of samples) to 0.5237 mg/kg with an overall mean of 0.05791 mg/kg, all well below the 10 mg/kg lip-cosmetic Pb ceilings cited from China, the United States, and Canada. Modelled non-carcinogenic hazard quotients (HQ) for adults range from 4.93×10⁻⁷ to 2.82×10⁻³ at the 95th percentile (all <1 acceptability threshold) and carcinogenic lifetime cancer risks (LCR) from 1.68×10⁻¹² to 9.59×10⁻⁹ (all <10⁻⁶ EPA risk threshold). The ALM/IEUBK results indicate that at these product Pb concentrations, lip-cosmetic exposure does not measurably elevate children's blood Pb above the background-environmental contribution from soil, dust, air, water, and diet.

## Key numbers

All Pb concentrations are total elemental Pb in finished lip-cosmetic product as placed on market, measured by ICP-MS after HNO₃/HClO₄ wet acid digestion. Units in mg/kg (= ppm = µg/g) of finished product unless otherwise noted.

### Sample composition (Table 1, p. 5; N = 34)

| Product format | n | Production countries (n by country) | Price range (RMB) |
|---|---:|---|---:|
| Lipstick | 12 | France 6; China 4; Japan 1; Canada 1; USA 1; Italy 1 (Note: column adds to 13; one assignment overlaps in source table) | 70 – 330 |
| Lip gloss | 13 | France 4; China 4; USA 2; Italy 2; Canada 1 | 48 – 330 |
| Lip balm | 9 | China 3; USA 3; France 1; Japan 1; Germany 1 | 25 – 78 |

Overall e-commerce price distribution (Figure 2, p. 4) for the lip-cosmetics category on JingDong at the time of sampling: 0–95 RMB (33rd percentile), 96–266 RMB (33rd–66th percentile), >267 RMB (top tercile); boxplot 10th-percentile ~40 RMB, 90th-percentile ~380 RMB, median ~215 RMB.

### Pb content by format (Table 3, p. 7; mg/kg)

| Statistic | Lipstick (n=12) | Lip gloss (n=13) | Lip balm (n=9) | All (N=34) |
|---|---:|---:|---:|---:|
| Mean | 0.05482 | 0.04976 | 0.07380 | 0.05791 |
| Standard deviation | 0.04506 | 0.07922 | 0.16358 | 0.10146 |
| Maximum | 0.13849 | 0.23093 | 0.52470 | 0.52370 |
| Minimum | 0.00000 | 0.00000 | 0.00000 | 0.00000 |

Pb was not detected (<LOD) in approximately 41.18% of the 34 lip products (Results, p. 6, "the Pb element was not detected in about 41.18% lip products"). The per-sample Pb concentrations are charted in Figure 3 (p. 6); the per-format ordering by mean is balms > lipsticks > glosses. The single highest sample is a lip balm at 0.5237 mg/kg (the All-N=34 Maximum); the All-Maximum 0.52370 is 100 ppb below the per-format Lip-Balm Maximum 0.52470 reported in the same table, a paper-internal rounding/transcription inconsistency the source does not reconcile (the Abstract and Results body both report 0–0.5237 mg/kg as the dataset range). The mean ordering balms > lipsticks > glosses is opposite to the format ordering Iwegbue et al. found in Nigerian lip cosmetics (lipsticks > glosses/balms; cited as reference 17), which Li et al. attribute to differences in origin, color, brand, and batch.

All 34 samples are far below the lip-cosmetic Pb ceilings reported by the source for China, the United States, and Canada (all 10 mg/kg per Results, p. 6) and the China general-cosmetic impurity limit of 40 mg/kg referenced in the literature.

### Comparative literature values cited by the source (Introduction, p. 2)

| Country / setting | Source cited | Pb (mg/kg) | Note |
|---|---|---|---|
| Malaysia, local supermarkets | Ref. 33 | 0.77 – 15.44 | Lip products |
| South Korea, local supermarkets | Ref. 34 | up to 12.77 (maximum) | Lip products |
| Portugal + Brazil, 96 lipsticks | Ref. 21 (Pinto et al.) | <1 µg/g for most; tens of µg/g for some (Zn, Mn, Pb) | Multiple metals |
| Turkey, local market | Ref. 18 (Kilic et al.) | mean 1.1 | Lipstick |
| Saudi Arabia, Alnuwaiser | Ref. 35 | 0.7 – 12.34 in some products; only a few exceeded the limit | Lipstick |
| **This study (China, JingDong e-commerce)** | — | **0 – 0.5237 (mean 0.05791)** | Best-selling lip cosmetics |

### Adult health risk assessment parameters and results (Tables 2 + body; pp. 5–7)

**USEPA oral-ingestion model (Equations 1–3, p. 5):**
- ADD<sub>ing</sub> (mg/kg-d) = C × IR × EF × ED × CF / (BW × AT)
- HQ = ADD / RfD
- LCR = ADD × SF

**Parameter values used (Table 2, p. 5):**

| Parameter | Symbol | Value | Units |
|---|---|---:|---|
| Intake rate, average user | IR | 0.02578 | g/d |
| Intake rate, high user | IR | 0.14902 | g/d |
| Exposure frequency | EF | 365 | d/a |
| Exposure duration | ED | 70 | a |
| Conversion factor | CF | 0.001 | — |
| Averaging time | AT | 25,550 | d |
| Body weight | BW | 60 | kg |
| Reference dose (oral, Pb) | RfD | 0.0004 | mg/(kg·d) |
| Cancer slope factor (oral, Pb) | SF | 0.0085 | (kg·d)/mg |

**Monte Carlo simulation:** 10,000 iterations in Crystal Ball 16.0; sample-concentration distribution fitted as lognormal.

**Adult risk results (Figures 4 and 5; body p. 7):**
- Non-carcinogenic risk HQ at 95th percentile: 2.82×10⁻³ (high users) and 4.88×10⁻⁴ (average users); range across iterations 4.93×10⁻⁷ to 2.82×10⁻³. All values below the HQ = 1 acceptability threshold.
- Carcinogenic risk LCR: range 1.68×10⁻¹² to 9.59×10⁻⁹; 95th percentile 9.59×10⁻⁹ (high users) and 1.66×10⁻⁹ (average users). All values below the 10⁻⁶ EPA cancer risk threshold; the source notes the consequent carcinogenic risk is "at a safe level" but cautions that long-term cosmetic use cumulates with other Pb sources.

### Adult blood lead — ALM model results (Table 4, p. 9; µg/dL)

ALM combines three contributions: soil exposure, lip-cosmetic exposure, and reference (baseline) blood Pb. PbB₀ (baseline reference blood Pb) = 1.62 µg/dL; soil reference Pb concentration in China = 282 µg/g; soil intake rate IR<sub>S+D</sub> = 0.05 g/d; soil absorption AF<sub>S+D</sub> = 0.12; soil exposure frequency EFs = 220 d/year; lip-cosmetic absorption AF<sub>L</sub> = 0.12; lip-cosmetic exposure frequency EF<sub>L</sub> = 365 d/year; biokinetic slope factor BKSF = 0.4 d/dL; mother-to-fetus transmission rate examined at 0.85 (general ALM) and 0.9 (children's pharmacokinetic model).

| Exposure scenario | Background contribution | Lip-cosmetic contribution (avg user) | Lip-cosmetic contribution (high user) | PbL (avg user) | PbL (high user) | Mother→Fetus, transmission 0.85, avg | Mother→Fetus, transmission 0.85, high | Mother→Fetus, transmission 0.9, avg | Mother→Fetus, transmission 0.9, high |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Low background | 1.62 | 0.0006 | 0.0035 | 1.6206 | 1.6235 | 1.3775 | 1.3799 | 1.4585 | 1.4611 |
| High background | 2.03 | 0.0006 | 0.0035 | 2.0306 | 2.0335 | 1.7260 | 1.7284 | 1.8275 | 1.8301 |

The lip-cosmetic per-day Pb contribution to the maternal blood pool is 0.0006 µg/dL (average user) or 0.0035 µg/dL (high user) regardless of soil background scenario — three to four orders of magnitude below the 1.62–2.03 µg/dL background contribution. Across all transmission-rate × user-level × background-level combinations, mother-to-fetus transmitted blood Pb ranges 1.38–1.83 µg/dL; the lip-cosmetic component contributes <0.1% of total mother-to-fetus blood Pb.

### Children's blood lead — IEUBK model results (Table 5, p. 9)

IEUBK win 1.1 Build 11 was run for children ages 0–7 (0–84 months). Per the source's modelling choice (p. 6): children's lip-cosmetic exposure pathway was restricted to lip balms only; for lipstick and lip gloss the only child-exposure route considered was maternal transmission (handled via ALM). External-parameter inputs: soil Pb reference 282 µg/g with 45% absorption; air Pb background 0.5 µg/m³ (GB3095-2012); drinking-water Pb 0.01 µg/L (GB5749-2006) with age-default consumption rates 0.2–0.59 L/day across ages 0–7; food-Pb backgrounds 8 µg/day (ages 0–3) and 20 µg/day (ages 3–7) following China GB2762-2017 infant-food (0.15 mg/kg solid, 0.02 mg/kg liquid) and auxiliary-food (0.2–0.3 mg/kg) limits as the upper bound; default absorption rate 30%; iterations 10,000.

| Age (years) | Total Pb absorption (µg/d) | Modelled blood Pb level (µg/dL) |
|---|---:|---:|
| 0.5–1 | 9.694 ± 0.002 | 5.2 |
| 1–2 | 13.224 ± 0.002 | 5.9 |
| 2–3 | 13.574 ± 0.002 | 5.1 |
| 3–4 | 18.684 ± 0.001 | 6.0 |
| 4–5 | 16.679 ± 0.002 | 5.7 |
| 5–6 | 16.294 ± 0.002 | 5.1 |
| 6–7 | 16.048 ± 0.002 | 4.6 |

Across age groups, modelled blood Pb is 4.6–6.0 µg/dL. The 5.1–6.0 µg/dL range for ages 1–4 reaches the historical 5 µg/dL "elevated" threshold but remains below the 10 µg/dL international threshold the source references for childhood Pb risk (p. 9, ref. 86). The source observes that "even if the total intake of Pb content changed slightly, the operation results of blood Pb concentration under the six conditions were the same" — i.e., perturbing the lip-cosmetic Pb input had no detectable effect on modelled child blood Pb. Background soil/air/water/food Pb exposure is the dominant driver of the modelled blood-Pb output; lip-cosmetic Pb is rounding-error against it.

The source also reports that children aged 3–4 in this model reached the 6.0 µg/dL value cited as a developed-country standard exceedance (Discussion, p. 10).

### Correlation analyses (Discussion, p. 7)

- Pb content vs. product category: r = 0.067, P = 0.707 (not significant)
- Pb content vs. price: r = −0.136, P = 0.443 (not significant)

The source interprets these results as evidence that within the JingDong best-seller subset, neither product format nor retail price predicts Pb content — consistent with prior literature (ref. 81) that finds price is not a reliable proxy for heavy-metal cleanliness but inconsistent with two cited studies (refs. 82, 83) that reported cheaper lipstick brands having higher Pb. Li et al. attribute the discrepancy to differences in sample-selection scope.

## Methods (brief)

**Sample selection (Materials and Methods, p. 3).** Python web crawler built with BeautifulSoup (HTML parsing) and Pandas (data processing), initial URL seeded at www.jingdong.com. Crawler scheduler iteratively filtered links unrelated to the topic via webpage-analysis algorithm and pushed retained URLs into a URL pool. The web-page parser extracted product cards from the response HTML and processed them into the analysis dataset. The dataset was filtered by market share (top-tier sellers in each lip-product subcategory) plus consumer review volume to identify the top 34 best-selling lip cosmetics across lipstick, lip gloss, and lip balm subcategories.

**Sample preparation (Sample Determination, pp. 3–4).** Wet acid digestion per the "Safety Specification for Cosmetics" (China, 2015 edition). 0.5000–1.0000 g of sample weighed on an EL204 analytical balance (Mettler-Toledo Co., Ltd.) into a crucible, heated at 100 °C on a DK-98-11A electrothermal constant-temperature water bath (Tianjin Tester Instrument Co., Ltd.). Acid digestion mixture: 10–15 mL of high-purity HNO₃ (Kaifeng Dongda Chemical Co., Ltd.) and high-purity HClO₄ (Tianjin Zhengcheng Chemical Products Co., Ltd.) at a 3:1 (v/v) HNO₃:HClO₄ ratio. Digestion conducted on a DB-4A stainless-steel electric heating plate (Changzhou Boyuan Experimental Analysis Instrument Factory); crucibles shaken intermittently to homogenise the digestion solution. Heating continued until the acid solution turned pale yellow or colorless, then the power was turned off. The remaining 2–3 mL solution was diluted to a final volume of 25 mL with ultrapure deionised water.

**ICP-MS determination (p. 4).** PerkinElmer NexLON 350X inductively coupled plasma mass spectrometer; ¹⁸⁷Re used as internal standard for Pb quantitation. Standard curve correlation coefficient ≥0.995 for each batch; relative percent deviation of parallel-sample results controlled within 10%. Pb-only analysis; no other elements measured.

**Quality assurance (p. 4).** Required experimental containers were soaked in nitric acid for >24 h before use to prevent metal cross-contamination from the labware. Parallel samples were prepared at >20% of the sample set; method blanks and Pb-standard solutions were analysed concurrently to confirm the digestion procedure did not introduce contamination. Blank results were below the method limit of detection.

**Speciation.** Total elemental Pb only. No speciation of inorganic vs organic Pb compounds.

**Health risk assessment.** USEPA oral-ingestion ADD/HQ/LCR equations (Equations 1–3, p. 5) with parameter values from Table 2. Monte Carlo simulation in Crystal Ball 16.0 at 10,000 iterations to propagate the lognormally-fitted sample-concentration distribution through the risk equations. Adult Lead Model (ALM) per Equation 4 (p. 5) for adult-and-fetus blood Pb; Integrated Exposure Uptake Biokinetic (IEUBK) Model win 1.1 Build 11 for child blood Pb across ages 0–7 in twelve-month bins. Statistics computed in Microsoft Excel 2019 and SPSS 20.0; figures rendered in Origin Pro 8.0.

## Implications

**Certification.** Direct-evidence A-tier occurrence data on the Chinese e-commerce lip-cosmetic market for Pb. The 34-product dataset spans the three primary lip-cosmetic product formats (lipstick, lip gloss, lip balm) sampled by market-share-weighted convenience from the largest Chinese e-commerce platform. All values reported in mg/kg total Pb of finished product as placed on market. Per-format mean, SD, max, and min are available for downstream HMTc Cat 13 (Adult Leave-on Cosmetics) pooling once that category is built; the current wiki taxonomy retains adult lipstick as a retired-redirect slug ([[products/lipstick]]) pending Cat 13 Step 0 lock per the precedent established in 2026-05-18 by [[sources/almukainzi2022-saudi-topical-cosmetics-icpms]] and [[sources/hepp2014-fda-cosmetics-seven-elements]]. The dataset's defining characteristic is its tight upper tail (max 0.5237 mg/kg) relative to comparable studies of lip cosmetics from local supermarkets in Malaysia, South Korea, Portugal, Brazil, Turkey, and Saudi Arabia (Pb up to 15.44 mg/kg in the Malaysia study), which is consistent with — but not proof of — an e-commerce platform quality-screen effect or a best-seller selection effect. Cat 2 children's-lip-balm rows (Row 15 plain, Row 16 mineral-bearing) are not routing destinations for this paper: the 9 lip-balm samples here are adult brand-marketed products (production countries China/USA/France/Japan/Germany; brand identities in Table 1 are all adult lines, not kid-marketed), and the IEUBK model is run on these adult products as a hypothetical-exposure exercise, not on actual children's lip-balm products.

**Courses.** Useful as a teaching case for (a) USEPA + Monte Carlo health risk assessment methodology applied to a cosmetic exposure surface, (b) IEUBK model parameterisation for a non-food, non-soil exposure pathway (lip cosmetics treated as oral-ingestion via lip-licking), (c) Python web-crawling as an e-commerce sample-selection methodology versus convenience sampling from local retail (the source positions web-crawling as more representative of online consumer purchasing behaviour), and (d) wet acid digestion at the lower end of the Pb LOD range in cosmetic matrices using HNO₃/HClO₄ rather than the HNO₃/HF mixtures more common in mineral-pigment-heavy formulations (e.g., the [[sources/hepp2014-fda-cosmetics-seven-elements]] method).

**App.** The per-product Pb distribution (mean 0.05791 mg/kg, 95th percentile far below 1 mg/kg, max 0.5237 mg/kg) is direct input for any future app feature estimating contamination likelihood in adult lip-cosmetic product categories from product format alone. The non-significant correlation between price and Pb content (r = −0.136, P = 0.443) is a useful counterpoint to the consumer intuition that pricier cosmetics are necessarily cleaner.

**Microbiome.** Not addressed by this source.

## Related evidence

- [[metals/lead]]
- [[regulations/china-gb2762-2017]]
- [[regulations/china-cosmetic-impurity-limits]]
- [[products/childrens-lip-balm-plain]]
- [[products/childrens-lip-balm-mineral-bearing]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
