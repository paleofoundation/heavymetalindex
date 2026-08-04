---
type: source
raw_handle: FM_12002180
cite_key: wu2025-climate-meghan-freshwater-fish-china
title: "Climate change amplifies neurotoxic methylmercury threat to Asian fish consumers"
authors: [Wu M, Wu X, Saiz-Lopez A, Blanchfield PJ, Ren H, Zhong H]
year: 2025
publication: "Proceedings of the National Academy of Sciences"
doi: 10.1073/pnas.2424001122
access_url: https://doi.org/10.1073/pnas.2424001122
source_type: peer-reviewed
evidence_tier: A
license: "unknown"
raw_path: raw/markdown/FM_12002180/FM_12002180.md
metals: [MeHg, tHg]
ingredients: ["[[ingredients/freshwater-fish]]", "[[ingredients/seafood]]"]
products: ["[[products/fresh-fish]]"]
matrices: [freshwater-fish, marine-fish, farmed-fish]
jurisdictions: [CN]
near_duplicates: []
sample_n: 13000
sample_population: "Freshwater wild and farmed fish, marine wild fish sampled across China (22.5–49.4° N, 85.2–134.6° E, 2005–2020, 164 sampling sites)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

## Overview

This study compiled a dataset of approximately 13,000 fish mercury samples across China spanning 2005–2020 and combined machine learning (random forest) with climate modeling to project how multiple interacting climate factors will drive methylmercury (MeHg) accumulation in freshwater wild fish. The authors found that freshwater wild fish in China are an underappreciated MeHg source: concentrations are 2.9 to 6.2 times higher than in freshwater farmed fish and 1.7 times higher than in marine wild fish within the same trophic class. Under SSP2–4.5 and SSP5–8.5 scenarios, national average MeHg concentrations in freshwater wild fish are projected to rise by approximately 60% by 2031–2060, with disproportionate increases in northern China and implications for health inequalities across Asia.

## Key numbers

- Dataset: approximately 13,000 fish Hg samples across 164 sampling sites in China, 2005–2020.
- Freshwater wild fish (40 ± 5 cm body length): MeHg mean of 30.9 µg/kg wet weight (ww), comparable to US shrimp (30–40 µg/kg ww) — a major US MeHg exposure source.
- Freshwater wild piscivorous fish: MeHg 2.9 to 6.2 times higher than freshwater farmed fish across trophic classes (p < 0.01).
- Freshwater wild piscivorous fish vs. marine wild piscivorous fish: MeHg 1.7 times higher (n = 787, p < 0.001).
- Freshwater fish consumption accounted for 51% of China's total fish MeHg intake in 2011.
- Projected near-future (2031–2060) national average increase: ~60% under both SSP2–4.5 and SSP5–8.5.
- Solar radiation (ssrd) is the dominant individual climate driver of MeHg increase (~53% contribution).
- Maximum temperature (Tx30day) exerts a negative influence in the far future (>−7% to −31.3% under SSP5–8.5, 2071–2100).
- IQ decrements in Chinese newborns from piscivorous freshwater wild fish consumption: 2,987 IQ points nationally under SSP2–4.5 near future; economic loss ~15.2 million USD (2022 USD).

## Methods (brief)

Compiled observed Hg dataset (n ≈ 13,000 samples, predominantly freshwater wild and farmed fish, with some marine wild fish) across China. Five machine learning models tested; random forest selected (R² = 0.66, RMSE = 0.39 on test set). MeHg species measured (not total Hg) using standard speciation methods. Climate variables sourced from ERA5 (present) and CMIP6 IPSL-CM6A-LR (future). Health impact estimated as IQ decrement per fetus using dose–response functions. Trophic level, fish weight, and 30-d running mean of maximum air temperature (Tx30day) were the three most important predictive features.

## Implications

Certification: Freshwater wild fish, especially piscivorous species in China and Asia, present MeHg concentrations comparable to marine species historically flagged for mercury risk. HMT&C product standards for fish-containing products should not assume farmed freshwater fish and wild freshwater fish are equivalent.

Courses: Demonstrates that wild vs. farmed distinctions are critical for MeHg risk assessment in fish. Climate change will progressively worsen MeHg loads in this category.

App: Freshwater wild fish (Chinese and Asian sourcing) carries elevated MeHg risk flag; farmed freshwater fish is substantially lower; marine wild fish is intermediate.

Microbiome: MeHg dietary exposure from fish has documented gut microbiome disruption mechanisms — crosswalk to [[microbiome/methylmercury-gut-axis]] when that page exists.

## Wiki pages updated on ingest

- [[metals/mercury]]
- [[ingredients/freshwater-fish]]
- [[ingredients/marine-fish]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
