---
type: source
raw_handle: kimi-children-personal-care-li2021
cite_key: li2021-lead-lip-cosmetics-china-ecommerce
title: "Trace Metal Lead Exposure in Typical Lip Cosmetics From Electronic Commercial Platform: Investigation, Health Risk Assessment and Blood Lead Level Analysis"
authors: [Li Y, Fang Y, Liu Z, Zhang Y, Liu K, Jiang L, Yang B, Yang Y, Song Y, Liu C]
year: 2021
publication: "Frontiers in Public Health 9:766984"
doi: 10.3389/fpubh.2021.766984
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Trace_Metal_Lead_Exposure_in_Typical_Lip_Cosmetics_From_Electronic_Commercial_Pl.pdf"
metals: [Pb]
ingredients: []
products: ["[[products/lip-cosmetics]]", "[[products/lipstick]]", "[[products/lip-gloss]]", "[[products/lip-balm]]", "[[products/children-personal-care]]"]
matrices: [cosmetic-personal-care, exposure-modeling]
jurisdictions: [CN]
near_duplicates: []
sample_n: 34
sample_population: "34 best-selling lip cosmetics (12 lipsticks, 13 lip glosses, 9 lip balms) from JingDong (Chinese top-10 e-commerce market), selected via Python web crawler by market share + reviews"
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Li et al. 2021 — Lead in Chinese e-commerce lip cosmetics + health risk + child blood-Pb model

This study uses Python web crawling to select 34 best-selling lip cosmetics (12 lipsticks, 13 lip glosses, 9 lip balms) from JingDong, a major Chinese e-commerce platform, then measures Pb by ICP-MS and applies USEPA Monte Carlo health risk assessment for adults plus Adult Lead Model (ALM) and Integrated Exposure Uptake Biokinetic Model (IEUBK) for children's blood-Pb response. Pb concentrations range from 0 to 0.5237 mg/kg — far below the limits set by various countries (e.g., FDA 10 ppm cosmetic-color-additive, China 40 mg/kg cosmetic-impurity general limit, several country-specific lip-product limits in the 10-40 mg/kg range). Non-carcinogenic and carcinogenic risks are within acceptable ranges (HQ < 1; cancer risk < 10⁻⁴). The ALM/IEUBK models indicate that lip-cosmetic Pb does not appreciably influence children's blood-Pb levels — background environmental Pb exposure remains the dominant determinant.

Notably, this Chinese e-commerce dataset is substantially cleaner than comparable studies of lip products purchased from local supermarkets in Malaysia (Pb 0.77-15.44 mg/kg), South Korea (max 12.77 mg/kg), and Portugal/Brazil/Turkey (mean ~1.1 mg/kg in Turkey; some Portuguese and Brazilian samples in the tens of µg/g range). The authors suggest improving e-commerce regulation in China has narrowed the upper tail.

## Key numbers

**Sample:** 34 lip cosmetics from JingDong (Chinese e-commerce), selected by Python web crawler based on market share + commodity reviews.
- 12 lipsticks
- 13 lip glosses
- 9 lip balms
- Price range: 0-400 RMB (boxplot 33rd-66th percentile: 96-266 RMB)

**Pb concentrations (this study, mg/kg):**

| Statistic | Value |
|---|---:|
| Minimum | 0 (below LOD) |
| Maximum | 0.5237 |
| Mean | not directly reported in summary text; inferable from health-risk math |

All 34 products are far below the regulatory limits cited (FDA 10 ppm cosmetic; China general cosmetic impurity 40 mg/kg; various country-specific lip-product limits in the 10-40 mg/kg range).

**Comparison with other studies of lip cosmetics (cited values):**

| Country / market | Source cited | Pb (mg/kg) | Note |
|---|---|---|---|
| Malaysia, local supermarkets | (33) | 0.77-15.44 | Direct measurement |
| South Korea, local supermarkets | (34) | up to 12.77 | Maximum reported |
| Portugal + Brazil, 96 lipsticks | (21) Pinto et al. | <1 µg/g to tens of µg/g | Multiple metals (Pb, Zn, Mn) |
| Turkey, local | (18) Kilic et al. | mean 1.1 | Local market |
| China, Alnuwaiser cited | (35) | 0.7-12.34, with a few exceedances of the limit | Lipstick specifically |
| **This study (China e-commerce)** | — | **0-0.5237** | Best-selling JingDong products |

**Health risk assessment (USEPA + Monte Carlo simulation, adults):**
- Non-carcinogenic risk (HQ): 4.93×10⁻⁷ to 2.82×10⁻³ — all below the 1.0 concern threshold (acceptable)
- Carcinogenic risk (CR): 1.68×10⁻¹² to 9.59×10⁻⁹ — all below the 1×10⁻⁴ EPA acceptable cancer risk threshold

**Children's blood Pb (ALM + IEUBK models):**
The Pb content of lip cosmetics in this dataset had no obvious influence on blood Pb concentration in children. Background Pb exposure (soil, dust, water, other dietary) is the dominant determinant of children's blood Pb levels — far outweighing the lip-cosmetic contribution at these product-concentration levels.

## Methods

Sample selection: Python web crawler (BeautifulSoup + Pandas, JingDong URL pool, market-share + review filtering) → top 34 best-selling products in lipstick/gloss/balm categories.

Sample preparation: Wet digestion per Safety Specification for Cosmetics (China, 2015 edition). Weight 0.5-1.0 g sample in crucible, 100 °C electrothermal water bath, 10-15 mL mixed acid (HNO3:HClO4 = 3:1) digestion to white smoke / pale yellow → final 25 mL volume.

Instrumentation: NexLON 350x ICP-MS (PerkinElmer). ¹⁸⁷Re internal standard for calibration. Containers nitric-acid-soaked >24 h to prevent contamination. Blank parallel samples >20% of test set. Standard curve correlation coefficient ≥0.995; relative deviation of parallels controlled within 10%.

Speciation: Total Pb only. No speciation of Pb forms.

Health risk: USEPA standard ADD/HQ/CR equations × Monte Carlo simulation for adults; ALM (Adult Lead Model) + IEUBK (Integrated Exposure Uptake Biokinetic Model, children 0-7 years) for children's blood-Pb response.

## Implications

Certification: For HMTc Cat 2 lip-cosmetics row (lipstick, lip gloss, lip balm — three distinct sub-rows by product format):

1. **The Chinese e-commerce upper tail (0.5237 mg/kg) is substantially cleaner than older / other-market studies (up to 15 mg/kg)**. This is either (a) e-commerce platform-driven quality screening, (b) selection bias (best-selling vs. random products), or (c) genuine market improvement over the 2015-2021 period.

2. **At these concentrations, lip-cosmetic Pb is NOT a meaningful contributor to children's blood Pb** — background environmental Pb dominates. HMTc threshold-setting for lip cosmetics should be calibrated against this finding: a Pb threshold for lip products that's tight enough to exclude the top 1% of upper-tail products (e.g., 0.5 mg/kg) protects the population without overstating individual product risk.

3. **The three lip-product formats (lipstick, gloss, balm) likely have different ingestion-fraction profiles** (lipsticks have higher ingestion via lip-licking; balms are spread thinner; glosses have intermediate). This study aggregates across formats; future Cat 2 work should split format-specific exposure modelling.

4. **Children's lip balm specifically** (a Cat 2 row distinct from adult lip cosmetics) needs dedicated occurrence data. Children frequently apply balm and have higher ingestion fractions than adults; the IEUBK model output here is for hypothetical children using adult products.

Courses: Good case study for ICP-MS quantification of cosmetic Pb at sub-mg/kg levels and for USEPA + Monte Carlo risk-assessment methodology applied to a cosmetic exposure surface.

App: For the consumer app, the Chinese e-commerce dataset (P95 ~0.5 mg/kg) suggests a "concern threshold" near 1 mg/kg for lip-product Pb — well below the regulatory caps but high enough to flag the worst-of-best-selling. Older or regional supermarket products may be substantially worse.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[products/lip-cosmetics]] (Cat 2 row family — to be created)
- [[products/lipstick]] (Cat 2 row — to be created)
- [[products/lip-gloss]] (Cat 2 row — to be created)
- [[products/lip-balm]] (Cat 2 row — to be created)
- [[products/children-personal-care]]
- [[regulations/china-cosmetic-impurity-limits]] (to be created)
- [[regulations/fda-cir-cosmetic-impurities]] (related)
