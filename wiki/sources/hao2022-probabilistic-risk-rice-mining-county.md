---
type: source
raw_handle: auto-fetched
cite_key: hao2022-probabilistic-risk-rice-mining-county
title: "Probabilistic health risk assessment of inorganic arsenic and some heavy metals in rice produced from a typical multi-mining county, China"
authors: [Hao H, Ge D, Wen Y, Lv Y, Chen W]
year: 2022
publication: "Environmental Science and Pollution Research"
doi: "10.1007/s11356-021-16583-7"
source_type: peer-reviewed
evidence_tier: A
license: "springer-exclusive"
raw_path: "raw/studies/hao2022-probabilistic-risk-rice-mining-county.pdf"
raw_sha256: "ef11e0d82fe1f7fd2bc82d9cfdc6d52021973610de2745ce029ee3637e1642a3"
access_url: "https://doi.org/10.1007/s11356-021-16583-7"
metals: [tAs, iAs, Pb, Cd, Cr, tHg]
ingredients: ["[[ingredients/rice]]"]
products: ["[[products/rice-bulk-grain]]"]
matrices: [rice-grain, brown-rice]
jurisdictions: [CN]
near_duplicates: [MFK_probabilistic-health-risk-assessment-of-inorganic]
sample_n: 220
sample_population: "220 brown-rice composite samples from Xiangtan County, Hunan Province, China; each site sample combined five rice subsamples from a multi-mining county."
updated: 2026-06-08
---

# Hao et al. 2022 — Probabilistic health risk from metals in rice, Xiangtan County, China

## Overview

Hao and colleagues measured total arsenic (tAs), inorganic arsenic (iAs), Pb, Cd, Cr, and total Hg in 220 rice samples from Xiangtan County, Hunan Province, China, a multi-mining county with rice cultivation. The paper is routeable as rice-bulk-grain occurrence evidence because Table 2 reports rice concentrations directly; mining and soil context should be treated as source-attribution context rather than product concentration data. The rice occurrence finding is dominated by Cd, tAs, and iAs, with iAs kept separate from tAs and total Hg kept separate from methylmercury.

## Key numbers

Table 2 reports concentration characteristics for rice (N=220):

| Element/species | Mean ± SD, mg·kg−1 | Range, mg·kg−1 | Limited value, mg·kg−1 | PEL | CV | Skewness | Probability distribution |
| --- | ---: | --- | ---: | ---: | ---: | ---: | --- |
| tAs | 0.34±0.20 | [0.125,1.84] | 0.2 | 99.1% | 167.9% | 4.26 | Lognormal |
| iAs | 0.15±0.09 | [0.045,0.83] | 0.2 | 22.7% | 168.5% | 3.39 | Lognormal |
| Pb | 0.08±0.15 | [0.001,1.02] | 0.2 | 10.5% | 53.8% | 3.72 | Lognormal |
| Cd | 0.48±0.50 | [0.001,2.73] | 0.2 | 72.7% | 96.2% | 2.38 | Lognormal |
| Cr | 0.6±1.56 | [0.001,12.38] | 1 | 10.0% | 38.4% | 5.18 | Lognormal |
| tHg | 0.0023±0.0020 | [0.0001,0.0106] | 0.02 | 0.0% | 117.7% | 1.91 | Normal |

Additional source-reported values:

- The source states that the iAs/tAs ratio in the study was 44.1%.
- Method detection limits were tAs 0.01 mg·kg−1, iAs 0.02 mg·kg−1, Hg 0.003 mg·kg−1, Pb 0.02 mg·kg−1, Cd 0.002 mg·kg−1, and Cr 0.05 mg·kg−1.
- Table 1 reports bioaccessibility inputs from related studies: iAs 39.90±8.30% with range [8.63,68.5], Pb 23.94±11.00% with range [7.58,48.34], Cd 35.25±20.06% with range [6.67,87.50], and Cr 9.87±5.66% with range [3.26,32.04].
- The source reports probability of non-carcinogenic risk exceeding 1 via rice consumption as 72% for adults and 78% for children. It reports probability of carcinogenic risk as 100%.
- Table 4 reports total HI/TCR point estimates and uncertainty values: adult HI point estimate 2.74, P5 0.67, P50 1.43, P95 5.50; child HI point estimate 2.86, P5 0.43, P50 1.49, P95 6.21; adult TCR point estimate 5.2E-03, P5 7.4E-04, P50 2.8E-03, P95 2.1E-02; child TCR point estimate 5.4E-03, P5 5.5E-04, P50 2.9E-03, P95 2.3E-02.

## Methods (brief)

The authors collected rice from 220 sampling sites in Xiangtan County, with five subsamples per site mixed into one sample. Rice was dried to less than 13% moisture, threshed to brown rice, ground, and homogenized. Total Pb, Cd, and Cr were measured after HNO3-HClO4 digestion by ICP-MS; total As used HNO3-HClO4 wet digestion and AFS; Hg used microwave digestion and AFS; and iAs was extracted with 0.15 mol/L HNO3 and quantified by LC-AFS. Quality control used national rice reference material GBW10043, one reference material per 10 samples, and triplicate analyses with RSD less than 5%. The study also used a bioaccessibility-adjusted health-risk model, Monte Carlo simulation with 10,000 iterations, sensitivity analysis, and ArcGIS spatial mapping.

## Implications

This source contributes China-market rice occurrence evidence for tAs, iAs, Cd, Pb, Cr, and total Hg, with arsenic speciation resolved and the product matrix tied to brown rice from a multi-mining county. It is useful for rice geographic-variance and supply-chain-context work, especially because the paper links rice concentrations to mining-area spatial patterns. It should not be silently pooled into a United States rice benchmark without an explicit cross-market rationale, and its total Hg result should not be treated as methylmercury.

## Related evidence

- [[ingredients/rice]]
- [[products/rice-bulk-grain]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/lead]]
- [[metals/chromium]]
- [[metals/mercury]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [598ebf5211](https://github.com/paleofoundation/heavymetalindex/commit/598ebf5211) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
