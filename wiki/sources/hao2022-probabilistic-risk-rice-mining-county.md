---
type: source
cite_key: hao2022-probabilistic-risk-rice-mining-county
title: "Probabilistic health risk assessment of inorganic arsenic and some heavy metals in rice produced from a typical multi-mining county, China"
authors: [Hao H, Ge D, Wen Y, Lv Y, Chen W]
year: 2022
publication: "Environmental Science and Pollution Research"
doi: "10.1007/s11356-021-16583-7"
source_type: peer-reviewed
evidence_tier: A
license: "springer-exclusive"
raw_path: raw/studies/hao2022-probabilistic-risk-rice-mining-county.pdf
sha256: ef11e0d82fe1f7fd2bc82d9cfdc6d52021973610de2745ce029ee3637e1642a3
access_date: 2026-05-12
access_url: "https://doi.org/10.1007/s11356-021-16583-7"
metals: [tAs, iAs, Pb, Cd, Cr, Hg]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-grain, brown-rice]
jurisdictions: [CN]
sample_n: 220
updated: 2026-05-12
---

# Hao et al. 2022 — Probabilistic health risk from metals in rice, Xiangtan County, China

This study assessed pollution characteristics and probabilistic health risks from inorganic arsenic, lead, cadmium, chromium, and mercury in rice from Xiangtan County, Hunan Province, a typical multi-mining area in central China, using Monte Carlo simulation, GIS spatial mapping, and bioaccessibility corrections. Rice samples (n=220, five sub-samples per site combined) were collected from 220 sites across 2,134 km² of predominantly rice-cultivated land. Cadmium and iAs were identified as the dominant risk-driving elements: the probability of exceeding the non-carcinogenic risk threshold was 72% for adults and 78% for children, and carcinogenic risk probability reached 100% for arsenic. High-risk locations clustered in the north-eastern and central parts of the county, spatially correlated with Pb–Zn mining operations.

## Key numbers

Mean concentrations (mg/kg, wet weight basis unless noted): tAs 0.34 ± 0.20 [range 0.125–1.84], iAs 0.15 ± 0.09 [0.045–0.83], Pb 0.08 ± 0.15 [0.001–1.02], Cd 0.48 ± 0.50 [0.001–2.73], Cr 0.6 ± 1.56 [0.001–12.38], Hg 0.0023 ± 0.0020 [0.0001–0.0106]. In ppb (µg/kg) equivalents: mean tAs 340, iAs 150, Pb 80, Cd 480, Cr 600, Hg 2.3. Percentage exceeding China national food safety limit (GB 2762-2017): tAs 99.1%, Pb 10.5%, Cd 72.7%, Cr 10.0%, Hg 0%; iAs limit exceedance 22.7%. LOD/LOQ: tAs 0.01 mg/kg, iAs 0.02 mg/kg, Hg 0.003 mg/kg, Pb 0.02 mg/kg, Cd 0.002 mg/kg, Cr 0.05 mg/kg. iAs bioaccessibility (mean ± SD): 39.90 ± 8.30%, range [8.63, 68.5] (lognormal distribution).

## Methods (brief)

220 rice-sampling sites, 5 sub-samples per site combined to one sample. Rice dried to <13% moisture and mechanically milled to brown rice before testing. Total Pb, Cd, Cr: HNO3–HClO4 (9:1) digestion, ICP-MS (XSeries 2, Thermo Fisher). Total As: HNO3–HClO4 (9:1) wet method. Total As and Hg: atomic fluorescence spectrometry (AFS-933). iAs extraction per China NHFPC 2015 method, quantified by LC-AFS (AFS-933-SAP-20, Beijing Titan). Bioaccessibility assessed by in vitro digestion model (mouth, stomach, small intestine). Monte Carlo simulation (10,000 iterations, Crystal Ball 11.1.2.4). Spatial mapping: ArcGIS 10.5 inverse distance weight.

## Limitations

Brown rice matrix only; polished white rice iAs values would be lower. Bioaccessibility parameters borrowed from Li et al. 2017a/2018 for a different region; regional mismatch introduces uncertainty. Single time-point sampling; temporal variance in a multi-mining area with active operations is not captured. Mining-area concentration distribution is not representative of Chinese commercial rice or export markets.

## Implications

- Certification: Confirms that rice from active mining regions in Hunan can substantially exceed China's own GB 2762-2017 limits for iAs and Cd. The iAs mean of 150 ppb exceeds China's 0.2 mg/kg iAs limit (200 ppb) in 22.7% of samples, and Cd mean of 480 ppb exceeds the 0.2 mg/kg limit in 72.7% of samples. This represents the high end of contamination; not representative of US or European commercial supply chains, but critical context for geographic variance in rice sourcing.
- Courses: Strong case study for mining-area soil-to-grain contamination transfer; illustrates the importance of origin-labeling and sourcing diligence for rice ingredients.
- App: Supports inclusion of China multi-mining-region provenance as an elevated-risk flag in rice contamination_profile geographic_breakdown entries. Specific regions: north-eastern and central Xiangtan County, Hunan Province.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[ingredients/rice]]
- [[metals/cadmium]]
- [[metals/arsenic]]
