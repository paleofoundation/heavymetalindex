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

## Wiki pages this source may touch

- [[metals/lead]]
- [[products/lipstick]] (Cat 13 adult lipstick / lip-cosmetic umbrella — currently retired-redirect; routes here pending Cat 13 Step 0 lock for adult lip cosmetics)
- [[regulations/china-gb2762-2017]] (referenced by the source for infant-food Pb limits used as IEUBK food-Pb background; create if not present)
- [[regulations/china-cosmetic-impurity-limits]] (referenced by the source as the 10 mg/kg / 40 mg/kg cosmetic-Pb ceilings; create if not present)

## Verification notes

- 2026-05-18 merge-enhance (Claude Opus 4.7, autonomous v2.0 manual-fetch skill). EXISTING path: DOI grep against `wiki/sources/` returned this same page (`wiki/sources/li2021-lead-lip-cosmetics-china-ecommerce.md`, DOI 10.3389/fpubh.2021.766984). Prior version dated `updated: 2026-05-14` with `ingest_method: manual_phase1_priority` and `created_by: claude_opus_47_session`. Preserved: cite_key, raw_path, license, near_duplicates (empty), source_type, evidence_tier, sample_n, ingest_method, created_by. Preserved raw_handle `kimi-children-personal-care-li2021` (legacy pre-MFK_ format; per skill instructions, preserve from existing page even though current convention is `MFK_<truncated-filename>`). Added: `raw_sha256: a2eb8484e4d64f5f3b39e9e59939643080330904c435953940340cb21a9e7692` (computed from PDF); `access_url: https://www.frontiersin.org/articles/10.3389/fpubh.2021.766984/full` (CC-BY Frontiers publication URL). Removed `exposure-modeling` from `matrices:` (non-standard, single-page use; the standard cosmetic vocabulary is `[cosmetic-personal-care]` per 10+ precedent cosmetic-occurrence sources).

- Defects fixed from prior revision:
 1. `## Key numbers` previously stated "Mean | not directly reported in summary text; inferable from health-risk math" — incorrect. The Conclusions section explicitly reports "the average content of Pb in the tested lip products is 0.05791 mg/kg" (p. 10) and Table 3 (p. 7) gives per-format Mean/SD/Max/Min broken out by Lipstick/Gloss/Balm/All. The full Table 3 is now transcribed.
 2. Per-format statistics (Mean/SD/Max/Min for Lipstick n=12, Gloss n=13, Balm n=9) were entirely missing from prior version. Now transcribed verbatim from Table 3.
 3. Table 4 (adult ALM blood-Pb scenarios) and Table 5 (IEUBK age-binned blood-Pb) were entirely absent from prior version. Now transcribed verbatim with full parameter context from Materials and Methods pp. 5–6 (PbB₀ = 1.62 µg/dL, Pbs = 282 µg/g, AF_S+D = 0.12, AF_L = 0.12, BKSF = 0.4 d/dL, transmission rates 0.85 ALM / 0.9 IEUBK, age-default drinking-water consumption rates 0.2–0.59 L/d, food-Pb backgrounds 8 µg/d ages 0–3 and 20 µg/d ages 3–7, soil absorption 45% for children, default Pb absorption rate 30%).
 4. Health risk assessment parameter table (Table 2 parameters: IR avg/high, EF, ED, CF, AT, BW, RfD, SF) was missing. Now transcribed.
 5. Correlation analyses (Pb vs format r=0.067 P=0.707; Pb vs price r=−0.136 P=0.443) were missing. Now included.
 6. Sample-population field expanded to list the production-country breakdown from Table 1 (without naming brands per Part 12 strict reading).
 7. `## Implications` HMTc threshold-suggestion wording removed. Prior text included "HMTc threshold-setting for lip cosmetics should be calibrated against this finding: a Pb threshold for lip products that's tight enough to exclude the top 1% of upper-tail products (e.g., 0.5 mg/kg) protects the population without overstating individual product risk" — this violates (wiki proposing thresholds for HMTc). Rewritten in the descriptive register: the wiki reports the per-format occurrence values; whether they feed Cat 13 pooling at any specific percentile is a Standards Workbench question, not a wiki-page question. The "concern threshold near 1 mg/kg" suggestion for the consumer app was likewise removed; the App subsection now describes the dataset itself without proposing thresholds.
 8. Methods section expanded with full instrumentation/reagent vendor names per the 2026-05-17 scientific-method-vendor exception lock: PerkinElmer NexLON 350X ICP-MS, Mettler-Toledo EL204 balance, Tianjin Tester DK-98-11A water bath, Kaifeng Dongda HNO₃, Tianjin Zhengcheng HClO₄, Changzhou Boyuan DB-4A heating plate, Crystal Ball 16.0, Microsoft Excel 2019, SPSS 20.0, Origin Pro 8.0, IEUBK win 1.1 Build 11. These are method-vendor names attached to instruments/reagents/software (Exception 2 per Part 12), not brand-name attribution to contamination values.
 9. `## Wiki pages updated on ingest` heading replaced with `## Wiki pages this source may touch` (current template convention; the prior heading is legacy from pre-2026-05-08 page builds — the routing layer is the system's responsibility, not a per-session "updated on ingest" claim).

- `products:` routing decision: `["[[products/lipstick]]"]` only. Prior routing was `[childrens-lip-balm-mineral-bearing, childrens-lip-balm-plain, children-personal-care]`. The corrected routing reflects what was actually sampled — adult brand-marketed lip cosmetics from a Chinese e-commerce best-seller list, where the brand identities listed in Table 1 (e.g., Chanel, YSL, Armani, Dior, MAC, L'Oréal, Maybelline, Revlon, Kiko, Zeesea for lipsticks; same brands plus Carslan, Chioture for glosses; Dhc, Uriage, Maybelline, Mentholatum, Vaseline, Herbacin, Burt's Bees for balms) are all adult cosmetic lines, not kid-marketed (Burt's Bees has both adult Beeswax and a separate Burt's Bees Baby line; Table 1 does not disambiguate, but the absence of a "Baby" or "Kids" designation in the source body and the inclusion of brands like Uriage colourless and Herbacin colourless among the lip balms indicates the adult-line interpretation). The IEUBK model (Table 5) is a hypothetical-exposure exercise that defaults children to using these adult products at the standard children's-exposure parameters; it does not measure children's-specific products. Routing to the Cat 2 children's-lip-balm slugs ([[products/childrens-lip-balm-plain]] HMTc Cat 2 Row 15, [[products/childrens-lip-balm-mineral-bearing]] HMTc Cat 2 Row 16) is therefore incorrect — those rows are reserved for products actually marketed for ages 0–5 (e.g., Petite n Pretty tinted, Sun Bum Kids SPF, Babyganics SPF per the Cat 2 Step 0 lock scaffold language). Routing to [[products/lipstick]] (retired-redirect; pending Cat 13 adult-lipstick row) follows the precedent set today by [[sources/hepp2014-fda-cosmetics-seven-elements]] and [[sources/almukainzi2022-saudi-topical-cosmetics-icpms]] for adult lipstick samples. The umbrella accommodates lipstick + lip gloss + lip balm formats jointly under "adult lip cosmetics pending Cat 13 Step 0 lock"; a future Cat 13 lock that splits the three formats into separate rows can re-route this source from this page's routing audit row at that time.

- `matrices: [cosmetic-personal-care]`: the standard cosmetic-occurrence-source vocabulary used by 10+ sources (almukainzi2022, arshad2020, attard2022, bashir2025, hepp2014, jitareanu2025, opss2023, poulsen2007, rbeida2023, sccs2023). The prior version's `[cosmetic-personal-care, exposure-modeling]` introduced a non-standard `exposure-modeling` matrix used nowhere else; removed.

- `jurisdictions: [CN]`: 34 samples purchased from the JingDong Chinese e-commerce platform. While individual products were manufactured in France, USA, Italy, Japan, Canada, Germany, and China, the sampling jurisdiction is Chinese e-commerce; the regulatory frame discussed is China (cosmetic Pb limit 10 mg/kg cited as also US/Canada; food Pb limits per China GB2762-2017; drinking-water Pb per China GB5749-2006; air Pb per China GB3095-2012; soil Pb reference 282 µg/g per Chinese soil literature).

- Empty `ingredients: []` is intentional: the paper measures total Pb in finished lip-cosmetic products as placed on market, not in cosmetic ingredients (waxes, oils, pigments, emollients) individually.

- Paper-internal numerical inconsistency flagged in `## Key numbers` (not fixed in the source): Table 3 reports All-N=34 Maximum = 0.52370 mg/kg but Lip-Balm-n=9 Maximum = 0.52470 mg/kg. The All-Maximum should be ≥ each sub-Maximum by definition. The Abstract and Results body both report 0–0.5237 mg/kg as the dataset range, so the All-Maximum 0.52370 is consistent with the narrative and the Lip-Balm 0.52470 appears to be a 100-ppb transcription drift in the source's Table 3 typesetting. Recorded as the source wrote it; not silently corrected.

- Brand firewall (Part 12, strict reading locked 2026-05-17): the source's Table 1 names brand identities for all 34 samples (Chanel, YSL, Armani, Dior, DHC, MAC, L'Oréal, Maybelline, Carslan, Revlon, Kiko, Zeesea, Chioture, Uriage, Mentholatum, Vaseline, Herbacin, Burt's Bees). The wiki page does not transcribe these brand-to-value attributions anywhere in the body; the sample-population field summarises only the production-country mix and the lip-product formats. The single in-Verification-notes mention of brand identities above is methodological (it documents why the children's-lip-balm routing was rejected — i.e., the brands tested are all adult lines, not kid-marketed) and does not attribute Pb values to specific brands, which is the Part 12 firewall's actual target. Method-vendor names retained per Exception 2 (PerkinElmer NexLON 350X, Mettler-Toledo EL204, Tianjin Tester, Kaifeng Dongda, Tianjin Zhengcheng, Changzhou Boyuan, Crystal Ball 16.0, Microsoft Excel 2019, SPSS 20.0, Origin Pro 8.0, IEUBK win 1.1).

- Wiki/HMTc firewall (Part 2): the source frames its findings descriptively — Pb in JingDong best-seller lip cosmetics is well below the 10 mg/kg ceiling, HQ and LCR are acceptable, and lip-cosmetic Pb is not a measurable contributor to children's blood Pb at these concentrations against the background environmental baseline. The wiki page reports those findings as the source presents them without translating them into HMTc threshold proposals and without proposing consumer-facing concern thresholds. The Implications section frames the source as a direct percentile-pool input for a future Cat 13 row without specifying the percentile or the threshold; that decision is the Standards Workbench's.

- `evidence_tier: A`: peer-reviewed Frontiers in Public Health primary analytical paper with full method documentation (ICP-MS instrument and isotope identified, digestion method specified, parallel/blank QA, standard-curve QA, internal standard 187Re for Pb quantitation), reporting primary occurrence data and applying the established USEPA + IEUBK regulatory framework. CC-BY licensed.

- `evidence_tier` note on the IEUBK output: IEUBK output blood-Pb values are model outputs, not measured values. The wiki page reports them in the `## Key numbers` section because they are part of what the paper reports and are reproducible from the paper's inputs, but they should not be confused with measured childhood-blood-Pb data from this study (no blood was drawn from any child in this study).

- Audit subagent (2026-05-18, fresh-context general-purpose, autonomous v2.0 manual-fetch skill): PROMOTE verdict; 0 findings applied; 2 minor ⚠️ items recorded as false positives. (a) Subagent flagged HQ range lower-bound 4.93×10⁻⁷ and LCR range lower-bound 1.68×10⁻¹² as "figure-derived rather than text-quoted," suggesting they should be re-cast as approximate or referenced to Figures 4/5 — verified against source: the Abstract on p. 1 states these values verbatim ("The probabilistic non-carcinogenic risks and carcinogenic risks were 4.93×10⁻⁷~2.82×10⁻³ and 1.68×10⁻¹²~9.59×10⁻⁹, respectively"), so the wiki page's range bounds are direct text-quoted values, not figure-derived inferences. Finding rejected. (b) Subagent flagged the Implications-section phrasing "95th percentile far below 1 mg/kg" as a marginal inference not explicitly reported by the source — the source does not report the per-sample Pb distribution's 95th percentile (only the Monte Carlo iterations' 95th-percentile HQ/LCR), but with N=34 and max 0.5237 mg/kg the per-sample 95th-percentile is mathematically constrained to ≤0.5237 mg/kg, which is trivially "far below 1 mg/kg." The phrasing is descriptive about the dataset's scale, not a synthesis claim. Finding noted; no change. (c) Subagent also flagged a source-internal n-label transposition (Discussion p. 7: "the average Pb content of all kinds of lip products decreased in the following order: lip balms (n = 12) > lipsticks (n = 13) > lip glosses (n = 9)" — the n's are transposed in the source narrative; Table 1 has lipsticks n=12 and lip balms n=9). The wiki reports the ordering correctly (balms > lipsticks > glosses) and the wiki's per-format n's match Table 1, so no wiki defect; the source-side transposition is the paper's typesetting issue. Noted in `## Key numbers` per the Cochrane "report as the source wrote it" convention for paper-internal inconsistencies. CHECK 1 ⚠️ on HQ/LCR text-source false-positive + ⚠️ on inference + ⚠️ on source-internal n-label; CHECK 2 ✅; CHECK 3 ✅; CHECK 4 ✅ clean; CHECK 5 ✅ clean.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
