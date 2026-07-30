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
metals: [Pb, Cd, iAs, MeHg, iHg]
ingredients: ["[[ingredients/rice]]", "[[ingredients/cereals]]", "[[ingredients/meat]]", "[[ingredients/fish]]", "[[ingredients/leafy-vegetables]]", "[[ingredients/vegetables]]", "[[ingredients/fruits]]", "[[ingredients/milk-and-dairy]]", "[[ingredients/eggs]]"]
products: []
matrices: [dietary-intake, exposure-modeling, cumulative-risk]
jurisdictions: [CN, EU]
near_duplicates: []
sample_n: 969
sample_population: "969 participants from 2018 China Health and Nutrition Survey, Chongqing Municipality: 31 preschoolers (3-6 yr, 3.2%), 113 adolescents (7-17 yr, 11.7%), 399 adults (18-59 yr, 41.2%), 426 elderly (≥60 yr, 43.9%); 432 male (44.6%), 537 female (55.4%). Food consumption from 3-day 24-h dietary recall at 6 survey sites (Shapingba, Fengjie, Dazu, Jiangjin, Qijiang, Nanan). Contamination data from 2017-2021 China National Food Contamination Monitoring Program (5199 Pb, 5206 Cd, 4345 As, 4378 Hg food samples) across 38 districts and counties of Chongqing."
wiki_doi: null
sampling_locations: ["Chongqing"]
sampling_year_range: "2017-2021"
updated: 2026-05-29
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Chen et al. 2025 — Cumulative dietary Pb/Cd/iAs/MeHg risk in Chongqing, China (hazard-driven mRPI + Monte Carlo)

This study applies the EFSA-recommended hazard-driven cumulative risk assessment framework to dietary Pb, Cd, iAs, and MeHg (neurotoxicity) and Pb, Cd, iAs, iHg (nephrotoxicity) exposure in Chongqing residents (n=969 across four age groups), using the modified Reference Point Index (mRPI) method with @RISK Monte Carlo simulation (100,000 iterations, Latin hypercube). Heavy-metal contamination is drawn from the 2017-2021 China National Food Contamination Monitoring Program (≈4,300-5,200 samples per metal); food consumption is drawn from the 2018 China Health and Nutrition Survey of Chongqing. Two toxicity endpoints are assessed: neurotoxicity (combined mRPI 0.922 to 4.835 across left-censoring scenarios at mean and 95th-percentile high exposure) and nephrotoxicity (combined mRPI 1.306 to 7.031). Both endpoint mRPIs exceed the acceptable-risk threshold of 1 at high exposure across all scenarios, indicating unacceptable cumulative risk at the upper tail of the Chongqing diet. **Pb dominates the neurotoxicity mRPI (69.74-72.22% at mean exposure); Cd dominates the nephrotoxicity mRPI (60.05-60.09%), with Pb second (39.08-39.01%).** Rice, leafy vegetables, and wheat products are the top three food contributors to both endpoints. The paper also documents established total-to-speciated conversion factors (iAs/tAs = 2% in fish, 70% in non-fish; MeHg/tHg = 100% in fish, 0% in non-fish; iHg/tHg = 20% in fish, 100% in non-fish) per EFSA and Suomi et al.

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

**Overall mean food-sample concentrations (Table 2; LB-UB bounds from EFSA left-censoring treatment)**:

| Metal | n samples | Detection rate (% >LOD) | Overall mean LB-UB (mg/kg) |
|---|---:|---:|---|
| Pb | 5199 | 29.7% | 0.0194 - 0.0295 |
| Cd | 5206 | 53.7% | 0.0219 - 0.0228 |
| As (total) | 4345 | 36.5% | 0.0206 - 0.0403 |
| Hg (total) | 4378 | 22.1% | 0.0024 - 0.0039 |

**Highest and lowest mean food-category concentrations (LB-UB mg/kg, from discussion narrative pages 6-7)**:

- **Pb**: dried legumes 0.0668-0.0975 > nuts 0.0584-0.0601 > leafy vegetables 0.0476-0.0597 > rice products 0.0471-0.0543. Cereals + cereal products overall 0.0211-0.0354; vegetables + vegetable products overall 0.0238-0.0336; meat + meat products overall 0.0140-0.0237. Lowest: milk and dairy based products 0.0064-0.0159. Overall mean 0.0194-0.0295.
- **Cd**: nuts up to 0.2383 (mean UB; vs Song et al. comparator 0.029) > edible livestock and poultry offal 0.0919-0.1462 > rice products 0.0740-0.0742 > rice 0.0497-0.0502. Lowest: livestock meat 0.0007-0.0025. Overall mean 0.0219-0.0228.
- **As (total)**: fish + fish products 0.0811-0.1180 > rice 0.0838-0.0848 > rice products 0.0447-0.0459. Lowest: brassica vegetables 0.0001-0.0077. Overall mean 0.0206-0.0403.
- **Hg (total)**: fish + fish products 0.0184-0.0285 (highest by an order of magnitude). Meat + meat products 0.0024-0.0057; cereals 0.002-0.0036; vegetables 0.0011-0.0027; milk and dairy 0.0011-0.0026; eggs 0.0012-0.0031; fruits 0.001-0.0028. Lowest: legumes vegetables 0.0006-0.0025. Overall mean 0.0024-0.0039.

Rice and rice products in Chongqing for Pb (0.0211-0.0354) and meat + meat products for Pb (0.0140-0.0237) are higher than levels reported in similar foods in Jiangsu Province 2007-2010 (Malavolti et al. 0.0114-0.0249) and the Pan et al. 2011-2015 comparator. The mean Pb across all food categories is below China National Health Commission MAL and Codex CAC limits in this dataset. The mean Cd in rice (0.0497-0.0502) is lower than the China MAL (0.2 mg/kg) and Codex CAC limit (0.4 mg/kg) but higher than reported values in Bangladesh (0.044), Cambodia (0.006), Italy (0.038), and France (0.01). As level in fish under the UB scenario exceeds the China MAL of 0.1 mg/kg.

**Toxicological reference points used in mRPI (Table 1)**:

| Endpoint | Metal | Type | Value (µg/kg bw/d) | UF | Critical effect / Source |
|---|---|---|---:|---:|---|
| Nephrotoxicity | Pb | BMDL10 (human) | 0.63 | 1 | Filtration rate of nephrons (EFSA 2010b) |
| Nephrotoxicity | Cd | BMDL10 (human) | 0.41 | 1 | β2-microglobulin in urine (EFSA 2010b) |
| Nephrotoxicity | iAs | BMDL10 (human) | 50 | 1 | β2-microglobulin in urine (Suomi et al. 2017) |
| Nephrotoxicity | iHg | BMDL10 (rat) | 60 | 10 | Rat kidney weight (EFSA 2012) |
| Neurotoxicity | Pb | BMDL01 (human) | 0.5 | 1 | IQ decrease (EFSA 2010b) |
| Neurotoxicity | Cd | NOAEL (mouse) | 200.0 | 100 | Mouse neurological damage (Suomi et al. 2017) |
| Neurotoxicity | iAs | NOAEL (human) | 3 | 1 | Neuropathy (EFSA 2012) |
| Neurotoxicity | MeHg | BMDL05 (human) | 1.2 | 1 | IQ decrease (EFSA 2012) |

**Combined cumulative risk (mRPI; >1 = unacceptable; range spans LB/MB/UB left-censoring and mean to P95 high exposure)**:

| Endpoint | Combined mRPI range | Primary contributors |
|---|---|---|
| Neurotoxicity | 0.922 - 4.835 | Pb dominant (69.74-72.22% of mRPI at mean) |
| Nephrotoxicity | 1.306 - 7.031 | Cd dominant (60.05-60.09%); Pb second (39.08-39.01%) |

**Per-metal RPQ ranges (range across LB/MB/UB scenarios at mean and P95 exposure)**:

| Endpoint | Pb RPQ | Cd RPQ | iAs RPQ | MeHg RPQ | iHg RPQ |
|---|---|---|---|---|---|
| Neurotoxicity | 0.643 - 3.462 | 0.116 - 0.866 | 0.112 - 0.480 | 0.001 - 0.035 | — |
| Nephrotoxicity | 0.510 - 2.748 | 0.784 - 4.223 | 0.007 - 0.029 | — | 0.005 - 0.032 |

At P95 high-exposure, Pb RPQ alone exceeds 1 for neurotoxicity in LB/MB/UB; for nephrotoxicity at P95, both Cd and Pb RPQ exceed 1 in LB/MB/UB. At mean exposure, no single-metal RPQ exceeds 1, but the combined mRPI exceeds 1 for nephrotoxicity in MB and UB scenarios.

**Top food contributors to mRPI at mean exposure** (Fig. 7 narrative):

- Neurotoxicity (rice + leafy vegetables + wheat products): rice 26.18-29.71% across LB/MB/UB; leafy vegetables and wheat products each >10%; all other categories <8.74%.
- Nephrotoxicity: similar ranking — rice, leafy vegetables, wheat products dominate; combined rice + vegetable consumption contributes 61.29-67.29% of risk.

**Mean and 95th-percentile daily food consumption (Table 3; converted from g/3-day to g/d)**:

| Food category | Mean (g/d) | P95 (g/d) |
|---|---:|---:|
| Cereals and cereal products | 324.1 | 540.0 |
| - Rice | 199.7 | 598.2 |
| - Wheat products | 89.8 | 269.1 |
| Vegetables and vegetable products | 279.1 | 836.2 |
| - Leafy vegetables | 92.9 | 278.3 |
| - Root and tuber vegetables | 75.2 | 225.4 |
| Meat and meat products | 121.2 | 363.0 |
| - Livestock meat | 98.8 | 296.1 |
| Fruits | 25.3 | 75.7 |
| Fish and their products | 21.6 | 64.8 |
| Milk and dairy based products | 29.0 | 87.0 |
| Eggs and their products | 20.5 | 61.3 |
| Beans and bean products | 16.3 | 48.9 |

Comparator references in text: Yangtze River Delta cereal consumption 331 g/d, Beijing 422 g/d, 2020 China national average 270 g/d, 2016 Chinese Dietary Guidelines recommendation 400 g/d.

**Speciation conversion factors applied (from prior literature)**:

- MeHg/total Hg = 100% in fish; 0% in non-fish food (per EFSA 2013 default).
- Inorganic Hg / total Hg = 20% in fish; 100% in non-fish food.
- iAs/total As = 2% in fish; 70% in non-fish food (per Suomi et al. 2017).

These are useful generic conversion factors for the wiki's speciation methodology when source studies report only total Hg or total As.

## Methods

Data sources:
- **Contamination data**: 2017-2021 China National Food Contamination Monitoring Program (5-year average), Chongqing Municipality, multi-stage stratified random sampling from retail stores, supermarkets, grocery stores, farmers' markets, and convenience stores in 38 districts and counties.
- **Consumption data**: 2018 China Health and Nutrition Survey of Chongqing, 969 participants from 6 survey sites (Shapingba, Fengjie, Dazu, Jiangjin, Qijiang, Nanan), three-day 24-h dietary recall (parents/guardians reported for under-7 and over-75 participants).
- **Hazard data**: prior JECFA assessments and EFSA scientific opinions, with reference points listed in Table 1.

Sample analysis: AAS (atomic absorption spectrometry), AFS (atomic fluorescence spectrometry), or ICP-MS per Chinese national standards GB 5009.11-2014, GB 5009.12-2017, GB 5009.15-2014, GB 5009.17-2014, GB 5009.123-2014, GB 5009.268-2016. Microwave digestion with HNO3 (5-10 mL) on 0.2-0.5 g solid or 1.0-3.0 mL liquid samples; volume adjusted to mark with 1% nitric acid solution or water. Quality control via certified reference materials per the National Monitoring Program of China (NMPC). Left-censored data treated per EFSA recommendation as LB (set to 0), MB (½ LOD), UB (LOD).

Speciation: total Hg and total As measured directly; iAs and MeHg estimated via the EFSA/Suomi conversion factors documented in Key numbers.

Exposure model: EDI_i = Σ (F_j × C_j) / BW_i for individual i, food category j (F_j = daily consumption g/d, C_j = concentration mg/kg, BW_i = body weight). High-exposure scenario substitutes the 95th percentile of individual exposure for the mean.

Risk model: modified Reference Point Index (mRPI) — RPQ_i = (EDI_i × UF_i) / RP_i for element i, summed across metals for the endpoint:
mRPI = RPQ_1 + RPQ_2 + ... + RPQ_n. Acceptable risk threshold = 1.

Monte Carlo: @RISK v8.2 (Palisade), 100,000 iterations, Latin hypercube sampling. AIC selected optimal distribution fit for contamination data; mean and 95th-percentile mRPI reported. Statistical software: Excel 2016 + @RISK v8.2.

## Implications

Certification: For HMTc Cat 1 cumulative-risk framework + Chinese-market food sourcing:

1. **The mRPI framework is the EFSA-recommended approach** for cumulative risk assessment from multiple heavy metals with shared/compatible MOA/AOP. HMTc Cat 1 standards-setting can use mRPI alongside per-analyte HQ to evaluate combined Pb+Cd+iAs+MeHg exposure in product formulations. The toxicological reference points (Table 1) provide the EFSA-vetted RP values for each metal-endpoint pair.

2. **The Chongqing finding (mRPI >1 for both neurotoxicity and nephrotoxicity at P95)** establishes that even in a Chinese provincial population with monitored typical exposure, combined heavy-metal exposure exceeds acceptable cumulative risk thresholds at the upper-tail diet. This is occurrence data relevant to HMTc Cat 1 sourcing decisions involving Chinese-sourced food ingredients (rice, vegetables, meat, fish); whether HMTc threshold-setting incorporates a cumulative-risk component is a methodology question for the standards workbench, not addressed by this paper.

3. **Speciation conversion factors documented in this paper** (iAs/tAs and MeHg/tHg ratios for fish vs non-fish) are useful for the wiki's CLAUDE.md Part 14 speciation methodology when source studies report only total metals. The 2% iAs/tAs in fish vs 70% in non-fish is particularly important for converting total-As surveys into iAs estimates.

4. **Pb dominates neurotoxicity (≈70% of mRPI); Cd dominates nephrotoxicity (≈60%), Pb second (≈39%)**. The paper's metal-contribution decomposition is the kind of occurrence/contribution data downstream HMTc Cat 1 prioritization work would draw on when weighting analytes — Pb-weighting matters most for neurodevelopmental endpoints; Cd-weighting matters most for renal endpoints — though the paper itself proposes no thresholds.

5. **Rice, leafy vegetables, and wheat products are the top three food contributors** to both neurotoxic and nephrotoxic mRPI in this population (combined rice + vegetables = 61-67% of nephrotoxic risk). For HMTc rice and leafy-vegetable category work, Pb and Cd are the highest-leverage analytes by these contribution percentages.

Courses: Excellent reference for an HMTc course module on cumulative risk assessment methodology. The EFSA mRPI + Monte Carlo framework is the current standard practice for combined-chemical-mixture risk; the worked example (RP table, RPQ summation, Latin hypercube simulation) is course-ready.

App: For the consumer app's cumulative-risk-per-meal estimation, the mRPI structure (RPQ sum across metals for a given endpoint) is directly implementable. The app should support neurotoxicity-endpoint and nephrotoxicity-endpoint mRPI as separate scoring outputs, with the Table 1 RPs as defaults.

Microbiome: Not addressed.

## Verification notes

Enhanced 2026-05-29 from prior 2026-05-14 ingest (kimi-loose-pdf-chen2025 raw_handle preserved). The prior version had the core mRPI numbers, the demographics breakdown, and the speciation conversion factors correct, but was missing: (a) the Table 1 toxicological reference points, (b) per-category Pb/Cd/As/Hg concentration data, (c) per-metal RPQ ranges that decompose the combined mRPI, (d) the relative contribution percentages of each metal to the combined mRPI (Pb 69.74-72.22% to neuro; Cd 60.05-60.09% to nephro), and (e) the daily food consumption volumes from Table 3 with the conversion from g/3-day to g/d. The legacy "## Wiki pages updated on ingest" section was removed because the routing layer (Part 5b) now owns the source-to-target-page mapping; the model no longer maintains routing by hand. `metals:` was extended from `[Pb, Cd, iAs, MeHg]` to `[Pb, Cd, iAs, MeHg, iHg]` because iHg appears as a separate analyte for the nephrotoxic-endpoint mRPI (Table 1 row; RPQ 0.005-0.032). `sampling_locations` and `sampling_year_range` populated. No brand names appear in the source or in this page.

Audit-subagent (2026-05-29) flagged one ❌ in Check 1 (per-category table: As column for "Edible livestock and poultry offal" showed the Cd value 0.0919-0.1462 transposed) and three ⚠️ (rice products Cd UB precision; two Implications phrasings that used "should" in an HMTc-direction). Independent verification against the page 6-7 narrative confirmed the ❌ AND revealed several additional per-category cell errors from misreading the dense Table 2 image (e.g., I had Cd rice = 0.0238-0.0336 vs the narrative's 0.0497-0.0502; As rice = 0.0497-0.0502 vs narrative 0.0838-0.0848 — the same Cd narrative value appears to have been duplicated into the As column). To eliminate the OCR uncertainty, the per-category table was rebuilt as a narrative-style summary citing only values explicitly stated on pages 6-7 of the source (the "highest/lowest by metal" prose). The two Implications phrasings were softened to describe the paper's contribution as occurrence data downstream HMTc work would draw on, rather than prescribing what HMTc should do — preserving the Part 2 wiki/HMTc firewall.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [0d1769e71](https://github.com/paleofoundation/heavymetalindex/commit/0d1769e71) | 2026-05-29 | minor | Narrative text revised |
| [7e61bb8e7](https://github.com/paleofoundation/heavymetalindex/commit/7e61bb8e7) | 2026-05-29 | major | 1 section added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [2c3797a6a](https://github.com/paleofoundation/heavymetalindex/commit/2c3797a6a) | 2026-05-15 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
