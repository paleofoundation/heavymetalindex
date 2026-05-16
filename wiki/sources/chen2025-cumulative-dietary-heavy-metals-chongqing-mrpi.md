---
type: source
raw_handle: kimi-loose-pdf-chen2025
cite_key: chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi
title: "Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach"
authors: [Chen J, Chen J, Li M, Feng P, Qin M, Chen T, Luo S, Zhao J, Yan X, Chen J, Lian X, Zhang H, Huo J]
year: 2025
publication: "Scientific Reports 15:2229"
doi: 10.1038/s41598-024-83299-2
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/Manual Fetch Kimi /Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach.pdf"
metals: [Pb, Cd, iAs, MeHg]
ingredients: ["[[ingredients/rice]]", "[[ingredients/cereals]]", "[[ingredients/meat]]", "[[ingredients/fish]]", "[[ingredients/leafy-vegetables]]", "[[ingredients/vegetables]]", "[[ingredients/fruits]]", "[[ingredients/milk-and-dairy]]", "[[ingredients/eggs]]"]
products: []
matrices: [dietary-intake, exposure-modeling, cumulative-risk]
jurisdictions: [CN, EU]
near_duplicates: []
sample_n: 969
sample_population: "969 participants from China Health and Nutrition Survey 2018, Chongqing Municipality: 31 preschoolers (3-6 yr), 113 adolescents (7-17 yr), 399 adults (18-59 yr), 426 elderly (≥60 yr). Food consumption from 2018 dietary recall survey. Contamination data from 2017-2021 China National Food Contamination Monitoring Program."
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Chen et al. 2025 — Cumulative dietary Pb/Cd/iAs/MeHg risk in Chongqing, China (hazard-driven mRPI + Monte Carlo)

This study applies the EFSA-recommended hazard-driven cumulative risk assessment framework to dietary Pb, Cd, iAs, and MeHg exposure in Chongqing residents (n=969 across four age groups), using the modified Reference Point Index (mRPI) method combined with @RISK Monte Carlo simulation (100,000 iterations, Latin hypercube). The four metals are grouped by mode-of-action/AOP for two toxicity endpoints: **neurotoxicity** (mRPI 0.922 to 4.835 across scenarios) and **nephrotoxicity** (mRPI 1.306 to 7.031). Both endpoint mRPIs exceed the 1.0 acceptable-risk threshold across scenarios, indicating unacceptable cumulative risk for the Chongqing population's typical and high-exposure diets. **Pb is the dominant contributor to neurotoxicity; Cd and Pb together dominate nephrotoxicity.** The paper provides established conversion factors for total-to-speciated metal interpretation (iAs/tAs = 2% in fish, 70% in non-fish; MeHg/tHg = 100% in fish, 0% in non-fish), which are useful for the wiki's speciation methodology.

## Key numbers

**Participant demographics (n=969 from 2018 Chongqing China Health and Nutrition Survey)**:

| Age group | n | % |
|---|---:|---:|
| Preschoolers (3-6 yr) | 31 | 3.2% |
| Adolescents (7-17 yr) | 113 | 11.7% |
| Adults (18-59 yr) | 399 | 41.2% |
| Elderly (≥60 yr) | 426 | 43.9% |
| Male | 432 | 44.6% |
| Female | 537 | 55.4% |

**Cumulative risk results (modified Reference Point Index mRPI; >1 = unacceptable)**:

| Endpoint | mRPI range (mean to 95th percentile high-exposure) | Primary contributors |
|---|---|---|
| Neurotoxicity | 0.922 to 4.835 | **Pb (dominant)** |
| Nephrotoxicity | 1.306 to 7.031 | **Cd + Pb (combined dominant)** |

**Speciation conversion factors used** (cited from prior literature):
- For Hg in food: MeHg/total Hg = 100% in fish; 0% in non-fish food (per EFSA 2013 default)
- For As in food: iAs/total As = 2% in fish; 70% in non-fish food (per Suomi et al.)
- For Hg in food, inorganic Hg / total Hg: 20% in fish; 100% in non-fish food

These are useful generic conversion factors for the wiki's speciation methodology when source studies report only total Hg or total As.

**Food categories covered (10)**:
1. Cereals + cereal products (rice, rice products, wheat grains, wheat flour, wheat products, other cereal products)
2. Vegetables + vegetable products (leafy, root/tuber, stem, brassica, legumes, other fresh, vegetable products)
3. Nuts, fruits, beans, bean products
4. Meat + meat products (livestock meat, poultry meat, meat products, edible livestock + poultry offal)
5. Fish + fish products
6. Eggs + egg products
7. Milk + dairy + dairy products
8. Foods for special dietary uses
9. Beverages
10. (additional minor categories)

## Methods

Data sources:
- **Contamination data**: 2017-2021 China National Food Contamination Monitoring Program (5-year average), Chongqing Municipality, multi-stage stratified random sampling from retail stores, supermarkets, grocery stores, farmers' markets, convenience stores in 38 districts and counties.
- **Consumption data**: 2018 China Health and Nutrition Survey of Chongqing, 969 participants from 6 survey sites (Shapingba, Fengjie, Dazu, Jiangjin, Qijiang, Nanan), three-day 24-h dietary recall.

Sample analysis: AAS or AFS (atomic fluorescence spectrometry) or ICP-MS. Standard sample prep per Chinese national standards GB 5009.11-2014 (Pb), GB 5009.12-2017 (lead), GB 5009.15-2014 (Cd), GB 5009.17-2014 (Hg), GB 5009.123-2014, GB 5009.268-2016 (multi-element). Microwave digestion with HNO3 (5-10 mL) on 0.2-0.5 g solid or 1.0-3.0 mL liquid samples. Left-censored data treated per EFSA: LB (set to 0), MB (½ LOD), UB (LOD). High-exposure scenario substitutes 95th percentile for individual exposure estimates.

Risk modeling: modified Reference Point Index (mRPI) — for each element, RPQ_i = (EDI_i × UF_i) / RP_i where RP is the toxicological reference point for the specific endpoint and UF is the uncertainty factor. mRPI = sum of RPQ across the four metals for a given endpoint. Monte Carlo with @RISK v8.2 (Palisade), 100,000 iterations, Latin hypercube sampling. AIC selected optimal distribution fit for contamination data.

Speciation: Total Hg and total As measured. iAs and MeHg estimated via conversion factors (above). This is the standard approach when sample-level speciation is not feasible.

## Implications

Certification: For the HMT&C certification program cumulative-risk framework + Chinese-market food sourcing:

1. **The mRPI framework is the EFSA-recommended approach** for cumulative risk assessment from multiple heavy metals with shared/compatible MOA/AOP. the HMT&C certification program standards-setting can use mRPI alongside per-analyte HQ to evaluate combined Pb+Cd+iAs+MeHg exposure in product formulations.

2. **The Chongqing finding (mRPI >1 for both neurotoxicity and nephrotoxicity)** establishes that even in a Chinese provincial population with relatively typical exposure, combined heavy-metal exposure exceeds acceptable cumulative risk thresholds. HMTc certification of Chinese-sourced food ingredients (rice, vegetables, meat, fish) needs both per-analyte certification AND cumulative-risk consideration.

3. **Speciation conversion factors documented in this paper** (iAs/tAs and MeHg/tHg ratios for fish vs non-fish) are useful for the wiki's the program governance framework speciation methodology when source studies report only total metals. The 2% iAs/tAs in fish vs 70% in non-fish is particularly important for converting total-As surveys into iAs estimates.

4. **Pb dominates neurotoxicity; Cd+Pb dominate nephrotoxicity**. the HMT&C certification program standards-prioritization should reflect this — Pb thresholds for child-targeted products are the highest leverage; Cd thresholds matter most for kidney-burden control in adult products.

Courses: Excellent reference for an HMTc course module on cumulative risk assessment methodology. The EFSA mRPI + Monte Carlo framework is the current standard practice for combined-chemical-mixture risk.

App: For the consumer app's cumulative-risk-per-meal estimation, the mRPI structure (RPQ sum across metals for a given endpoint) is directly implementable. The app should support neurotoxicity-endpoint and nephrotoxicity-endpoint mRPI as separate scoring outputs.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-inorganic]]
- [[metals/mercury-methyl]]
- [[ingredients/rice]]
- [[ingredients/cereals]]
- [[ingredients/meat]]
- [[ingredients/fish]]
- [[ingredients/leafy-vegetables]]
- [[ingredients/vegetables]]
- [[ingredients/fruits]]
- [[ingredients/milk-and-dairy]]
- [[ingredients/eggs]]
- [[health/cat-2-non-ingestion-exposure-pathways]] — Chen 2025's mRPI/RPQ framework is also applicable to the children's personal care category cumulative dermal exposure modeling once the supplement extends to non-ingestion pathways.
