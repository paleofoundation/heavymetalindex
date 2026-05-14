---
type: source
raw_handle: papers-cube
cite_key: kaya2024-milk-packaging-heavy-metals
title: "Determination of Heavy Metal Accumulation in Milk and Their Packaging Materials and Statistical Analysis"
authors: [Kaya TN, Zurnaci M, Sener I]
year: 2024
publication: "Journal of Engineering Technology and Applied Sciences"
doi: 10.30931/jetas.1395566
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: "raw/Papers Cube Manual Fetch/10.30931-jetas.1395566-3557768.pdf"
metals: [Pb, tAs, Cd, Ni, Al]
ingredients: ["[[ingredients/milk]]"]
products: ["[[products/milk]]"]
matrices: [milk, food-packaging, packaging-material]
jurisdictions: [TR]
near_duplicates: []
sample_n: 10
sample_population: "10 commercial liquid milk brands (labeled T1–T10) sold in Turkish markets, each analyzed alongside their corresponding packaging material; Kastamonu University, Turkey"
updated: 2026-05-14
---

# Kaya et al. 2024 — Heavy metals in Turkish milk and packaging materials (JETAS)

This Turkish study, funded by TUBITAK (grant 1919B012215735), measures Pb, As, Cd, Fe, Mn, Zn, Cu, Al, Co, and Ni in 10 commercial liquid milk brands and their corresponding packaging materials using ICP-OES, with statistical correlation analysis between milk and packaging metal levels. The key finding is that packaging materials carry heavy metal concentrations orders of magnitude higher than the milk itself, with aluminum foil laminate packaging accounting for very high Al (51,267–71,601 mg/kg in packaging vs 1.219–2.578 mg/kg in milk) and with Pb, As, and Ni all detectable in packaging well above milk concentrations. This study is important for the supply-chain packaging contamination pathway and for the question of whether packaging migration into milk is a significant route of heavy metal exposure.

## Key numbers

Milk heavy metal concentrations (mg/kg, range across 10 brands):
- Al: 1.219–2.578 mg/kg
- As (total): 1.078–1.522 mg/kg
- Co: 0.219–0.239 mg/kg
- Fe: 0.862–81.440 mg/kg
- Pb: 1.784–2.170 mg/kg
- Mn: 0.042–1.884 mg/kg
- Ni: 0.782–9.758 mg/kg
- Zn: 1.814–2.522 mg/kg
- Cd: not reported in milk ranges summary (LOQ issue noted)

Packaging material heavy metal concentrations (mg/kg):
- Al: 51,267–71,601 mg/kg (dominant packaging metal, consistent with aluminum foil laminate construction)
- As: 31.626–42.371 mg/kg
- Cd: 1.035–1.209 mg/kg
- Co: 0.775–1.167 mg/kg
- Cu: 4.921–44.839 mg/kg
- Fe: 259.615–463.182 mg/kg
- Pb: 24.386–26.668 mg/kg
- Mn: 4.301–59.599 mg/kg
- Ni: 6.065–7.943 mg/kg
- Zn: 5.324–8.763 mg/kg

Analytical parameters (ICP-OES, SpectroBlue II):
- LOD (mg/kg): Al 0.139; As 3.358; Cd 0.211; Co 0.732; Cu 0.689; Fe 0.972; Pb 1.771; Mn 0.356; Ni 1.074; Zn 0.261
- LOQ (mg/kg): all 120.000 (uniform)
- RSD: all < 6.56%
- All r² > 0.99972

## Methods (brief)

ICP-OES analysis (SpectroBlue II) following microwave digestion (CEM MARS6) with 97% HNO₃. Milk: 0.25 mL samples, 200°C. Packaging: 0.1 g samples, 210°C. Calibration from Merck multielement standard IV (1000 ppm). SPSS correlation analysis between milk and packaging results. Received November 2023, accepted May 2024, published online August 2024. Journal JETAS is a Turkish engineering technology journal (e-ISSN 2548-0391). Evidence tier A: original primary data with adequate QC, original research, peer-reviewed. Key limitation: 10 brands is a small n, all from one Turkish university's procurement; results are representative of commercial Turkish milk but not globally generalizable.

Note on units: milk values above appear to be reported in mg/kg but may represent µg/kg (ppb) or mg/L depending on how wet-weight milk was handled. Calibration table shows LOD for As at 3.358 mg/kg which is very high for milk; requires clarification against original paper. These values should be verified against original table data before use in contamination_profile.

## Implications

**Certification:** Packaging material composition is a contamination pathway that HMT&C should address in supply-chain audits. Aluminum foil laminate packaging (Tetra Pak-type) carries very high Al, As, and Pb levels at the packaging matrix level. Whether these migrate into milk at measurable levels depends on contact conditions (pH, temperature, storage time). This study shows significant differences between packaging and milk concentrations, suggesting the packaging barrier is largely effective, but the data warrant attention for high-migration scenarios (acidic products, elevated storage temperatures).

**Courses:** Supply-chain packaging module: illustrates that aseptic multi-layer packaging combining polyethylene, cardboard, and aluminum foil is designed to prevent leaching but contains measurable heavy metals in the packaging matrix itself. Migration testing vs static concentration analysis distinction is important.

**App:** Milk heavy metal values in Turkish market context. As values in milk (1.078–1.522 mg/kg) seem anomalously high for liquid milk; app should flag for verification before treating as representative. Ni in milk (0.782–9.758 mg/kg) also warrants comparison with other datasets.

## Wiki pages updated on ingest

- [[ingredients/milk]]
- [[supply-chain/packaging]]
