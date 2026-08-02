---
type: source
raw_handle: FM_11617688
cite_key: tian2024-voltammetric-ias-rice
title: "Efficient voltammetric analysis for total inorganic arsenic detection in rice with enhanced sensitivity and selectivity"
authors: [Tian W, Guo J, Wang S, Zhou M, He Y, Xi X, Chen X, Wang Y, Wu Y, Zhang J]
year: 2024
publication: "Food Chemistry: X"
doi: 10.1016/j.fochx.2024.102003
access_url: https://doi.org/10.1016/j.fochx.2024.102003
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: raw/markdown/FM_11617688/FM_11617688.md
metals: [iAs]
products: []
ingredients: ["[[ingredients/rice]]"]
matrices: [rice, grain]
jurisdictions: [CN]
near_duplicates: []
sample_n: 36
sample_population: "Commercial rice samples from five Chinese provinces (Heilongjiang, Anhui, Jiangsu, Hunan, Guangdong), purchased from local markets, Beijing"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

## Overview

A voltammetric method for total inorganic arsenic (iAs) detection in rice was developed using screen-printed electrodes (SPEs) modified in situ with gold nanoparticles and L-cysteine, combined with magnetic composite interference removal. The primary analytical contribution is the method development, but the paper includes LC-ICP/MS measurements of iAs in 36 commercial rice samples sourced from five Chinese provinces — making it a genuine food concentration occurrence dataset for iAs in Chinese commercial rice.

The method converts As(V) to As(III) via simultaneous ultrasonic extraction with L-cysteine in 5% HNO3, then detects As(III) by linear stripping voltammetry (LSV). Copper interference — a major challenge in rice matrices due to Cu being roughly 1000x more concentrated than As — is removed by carboxyl-functionalised magnetic composites. The LOD is 0.018 mg/kg and LOQ is 0.043 mg/kg (on a dry-weight basis, though the paper does not state whether concentrations are dry or wet weight; rice is typically reported on dry weight for regulatory comparison).

## Key numbers

iAs concentrations by LC-ICP/MS in 36 commercial rice samples (mg/kg):

| Sample range | iAs (mg/kg, LC-ICP/MS) |
|---|---|
| Minimum observed | 0.101 |
| Maximum observed | 0.345 |
| Approximate central tendency | 0.15–0.22 (visual scan of Table 2) |

All 36 samples by LC-ICP/MS (mean ± SD, mg/kg):
1: 0.101±0.016, 2: 0.139±0.012, 3: 0.129±0.016, 4: 0.196±0.021, 5: 0.177±0.023, 6: 0.186±0.025, 7: 0.216±0.018, 8: 0.209±0.033, 9: 0.106±0.015, 10: 0.105±0.017, 11: 0.151±0.014, 12: 0.115±0.021, 13: 0.111±0.019, 14: 0.118±0.008, 15: 0.145±0.024, 16: 0.218±0.017, 17: 0.175±0.008, 18: 0.214±0.024, 19: 0.132±0.017, 20: 0.211±0.028, 21: 0.178±0.022, 22: 0.345±0.019, 23: 0.246±0.026, 24: 0.267±0.009, 25: 0.263±0.032, 26: 0.306±0.022, 27: 0.172±0.013, 28: 0.153±0.022, 29: 0.171±0.022, 30: 0.176±0.017, 31: 0.147±0.025, 32: 0.171±0.019, 33: 0.234±0.021, 34: 0.275±0.016, 35: 0.242±0.027, 36: 0.264±0.031

Province distribution: 6 from Heilongjiang, 6 from Anhui, 9 from Jiangsu, 8 from Hunan, 7 from Guangdong. No per-province breakdown of iAs values is provided in the paper.

Method LOD: 0.018 mg/kg; LOQ: 0.043 mg/kg. Correlation between voltammetry and LC-ICP/MS: R2 = 0.9403, slope = 1.0965, intercept −0.021.

## Methods (brief)
LC-ICP/MS reference method: Agilent 8900CX, CNWSep AX anion exchange column (250 × 4 mm, 10 µm, 100 Å), mobile phase 15 mmol/L ammonium dihydrogen phosphate pH 6.0 at 1.0 mL/min, 80 µL injection. ICP/MS in standard mode for mass 75 (As). Retention times: As(III) at 2.5 min, As(V) at 8.0 min — confirming speciation separation and therefore genuine iAs measurement (not tAs). Voltammetric method uses LSV with L-cys-AuNPs/SPE after ultrasonic extraction. Rice type not specified per province. Basis not stated explicitly (assumed dry weight for regulatory comparison, as is standard for rice iAs reporting in China).

## Implications
Certification: Direct evidence for iAs occurrence in commercial Chinese rice spanning southern (Guangdong, Hunan) and eastern (Jiangsu, Anhui) producing regions plus northeastern (Heilongjiang) rice. The range 0.101–0.345 mg/kg iAs spans below and above China's regulatory limit (0.2 mg/kg for rice per GB 2762). Samples from Hunan and Guangdong appear to cluster toward higher values in Table 2 (samples 20–26, 33–36 include the highest readings), consistent with southern paddy rice literature. The maximum of 0.345 mg/kg (Sample 22) exceeds China's limit by 73%.
Courses: Demonstrates the importance of province-of-origin for iAs in Chinese commercial rice; illustrates the workflow challenge of eliminating Cu interference in rice matrices for portable sensors.
App: Contributes iAs occurrence data to [[ingredients/rice]] contamination profile. Range 0.101–0.345 mg/kg; n=36; method LC-ICP/MS (verified iAs); China commercial market.
Microbiome: Not applicable.

## Wiki pages updated on ingest
- [[metals/arsenic]]
- [[ingredients/rice]]
- [[regulations/china-gb2762-rice-ias]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [303004243](https://github.com/paleofoundation/heavymetalindex/commit/303004243) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
