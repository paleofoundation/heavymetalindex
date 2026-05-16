---
type: source
raw_handle: kimi-children-personal-care-massarsky2025
cite_key: massarsky2025-heavy-metals-toothpaste-health-risk
title: "Health risk implications of heavy metals in toothpaste"
authors: [Massarsky A, Unice KM, Kreider ML]
year: 2025
publication: "Public Health and Toxicology 5(2):9"
doi: 10.18332/pht/207273
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC"
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Health_risk_implications_of_heavy_metals_in_toothpaste.pdf"
metals: [Pb, Cd, tHg, tAs]
ingredients: []
products: ["[[products/toothpaste]]", "[[products/children-personal-care]]"]
matrices: [cosmetic-personal-care, exposure-modeling]
jurisdictions: [US]
near_duplicates: []
sample_n: 50
sample_population: "50 toothpastes tested by Lead Safe Mama (Perkins 2025 news article); screening-level risk assessment by Massarsky et al."
updated: 2026-05-14
ingest_method: autonomy_phase1_v0
created_by: autonomy_v0
---

# Massarsky et al. 2025 — Heavy metals in toothpaste: screening-level health risk assessment

This short communication performs a screening-level health risk assessment on a 50-toothpaste dataset (Lead Safe Mama testing, Perkins 2025) for lead, cadmium, mercury, and arsenic. The methodology converts product-concentration data into average daily doses (ADDs for Pb/Cd/Hg, lifetime-average for As) for children (2-4 years) and adults (20-35 years), then compares to health guidance values (HGVs) using hazard quotients. Cadmium and mercury ADDs are all below HGVs at typical and upper-bound use. Lead ADDs exceed HGVs for 10 toothpastes in children and 1 toothpaste in adults under the upper-bound use scenario. Arsenic LADDs exceed HGVs in 3 toothpastes but are several orders of magnitude lower than dietary arsenic intake. The authors conclude that the four metals at these concentrations are not anticipated to appreciably increase metal-related toxicity risk when products are used as directed — but the lead exceedances for children flag a real concern in the upper tail.

## Key numbers

Dataset: 50 toothpastes + 3 tooth powders tested by Lead Safe Mama (Perkins 2025). Most products had detectable lead; cadmium/mercury/arsenic detected at lower product frequencies. Only 5 products had non-detectable concentrations for all four metals (Supplementary file Table S1).

Exposure modelling assumptions (key):
- Children aged 2-4 years: typical-use toothpaste ingestion 0.205 g per brushing (Belknap 2014 systematic review), 2 brushings/day
- Adults aged 20-35 years: typical-use 0.04 g/brushing, 2 brushings/day
- Upper bound use: 90th-percentile ingestion rates
- Reference body weights and ingestion rates from RIVM Cosmetics Fact Sheet defaults

Health guidance values (HGVs) used:
- Pb: HGV anchored on CDC blood lead reference value (BLRV) of 3.5 µg/dL with 10x safety factor; per FDA approach for Closer-to-Zero
- Cd: as cited
- Hg: as cited (organic and inorganic mercury endpoints)
- As: as cited (lifetime cancer risk endpoint)

Per-product exposure doses (Table 1; selected; full table on page 3-5 of the source PDF):

| Product # | Children Pb (µg/day) typical | Children Cd (µg/day) typical | Children Hg (µg/day) typical | Adult Pb (µg/day) typical | As lifetime (µg/kg/day) typical |
|---|---:|---:|---:|---:|---:|
| 1 | 1.50e-3 | 1.50e-3 | 1.50e-3 | 2.00e-4 | 1.68e-5 |
| 13 | 3.41e-2 | 3.08e-2 | 4.50e-3 | 4.55e-3 | 4.23e-4 |
| 25 | 1.17e-1 | 1.58e-2 | 1.50e-3 | 1.57e-2 | 1.80e-4 |
| 49 | 3.41e-1 | 1.50e-3 | 8.76e-3 | 4.54e-2 | 9.57e-5 |
| 51 | 2.10e+0 (highest) | 1.86e-2 | 1.50e-3 | 2.80e-1 | 9.07e-3 |

The full per-product Pb range for children (typical use) spans 1.5e-3 to 2.10 µg/day (three orders of magnitude). For Pb under upper-bound use: 3.65e-3 to 5.11e+0 µg/day in children. The highest-Pb product (#51) is the outlier whose presence flags the upper-tail concern.

Cited regulatory action levels (FDA-equivalent and state):
- FDA 10 ppb interim reference level (IRL) for total dietary Pb intake: 2.2 µg/day for children, 8.8 µg/day for women of child-bearing age
- FDA 10 ppb action level for Pb in fruits/vegetables/mixtures/yogurt/meat (Closer-to-Zero)
- Toxic-Free Cosmetics Act (Washington State, TFCA): 1000 ppb statutory limit for Pb in toothpaste (the recently-publicized testing identified one toothpaste with concentration exceeding 1000 ppb)
- Note: a hypothetical 1000 ppb Pb action level for toothpaste corresponds to modelled 90th-percentile Pb intake of 0.61 µg/day in a 1-2 year-old (pea-sized amount × 0.25 g × 2/day), which the authors argue should not exceed the BLRV when considered with other food categories

## Methods

This is a screening-level health risk assessment (HRA), not a primary occurrence study. Source concentration data: third-party testing of 50 toothpastes by Lead Safe Mama (consumer-advocacy testing program), reported via Perkins 2025 news article and supplementary table. Exposure model: standard EPA-style ADD/LADD calculations × ingestion-rate scenarios × age-group body-weight defaults. Comparison: ADDs vs HGVs anchored on regulatory and scientific reference values; HQs = ADD/HGV; HQ > 1.0 flags potential health-risk concern.

Limitations: B-tier evidence chain at the data-source level (consumer-advocacy testing, methodology not fully detailed for the lab analysis), A-tier at the risk-assessment-methodology level (peer-reviewed authors at Stantec environmental consulting). The metal concentrations themselves are taken at face value; the paper does not re-analyze the Lead Safe Mama samples.

## Implications

Certification: For the HMT&C certification program toothpaste row, this paper is the most relevant single source. Key findings:
1. **Lead is the binding-concern analyte**, not Cd/Hg/As. Cd, Hg, As ADDs stay below HGVs in all toothpastes; Pb ADDs exceed HGV in 10 toothpastes for children under upper-bound use.
2. **Toothpaste ingestion in young children (2-4 yr)** is the worst-case exposure scenario. Older children and adults face lower per-mass exposure.
3. **The Washington State Toxic-Free Cosmetics Act 1000 ppb Pb limit** is the operative US state-level binding limit for toothpaste. the HMT&C certification program thresholds should reconcile against this — if HMTc certifies below 1000 ppb (e.g., literature-anchored 90th percentile of clean toothpastes), the certification is meaningful; if HMTc matches 1000 ppb, the certification adds nothing over state regulation.
4. **The the children's personal care category toxicology supplement** (initiative 3.1) for non-ingestion exposure should incorporate the toothpaste ingestion-during-brushing pathway as a discrete exposure route, separate from dermal absorption (lotions, sunscreen).

Courses: Excellent case study for the children's personal care category module on screening-level risk assessment methodology. The Stantec authors' framing (ADD/HQ/HGV machinery) is the standard EPA approach and translates directly to other personal-care categories.

App: For toothpaste products, the binding consumer-app concern is Pb in the upper tail. A per-product Pb concentration above ~200 ppb (corresponding to >~0.1 µg/day Pb ingestion in children) is the threshold at which screening-level risk assessment starts flagging concern.

Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[metals/arsenic-total]]
- [[products/toothpaste]] (the children's personal care category row — to be created)
- [[products/children-personal-care]]
- [[regulations/washington-tfca-toothpaste-pb-1000ppb]] (the children's personal care category reg — to be created)
- [[regulations/fda-ctz-pb-irl-2-2ug-day]] (related reg)
