---
type: source
raw_handle: FM_11844342
cite_key: jermilova2025-mackenzie-mercury-fish-bayesian
title: "Assessing mercury exposure to water and fish of the Mackenzie watershed using a Bayesian network analysis"
authors: [Jermilova U, Kirk JL, Moe SJ, Landis WG, Sharpe E, McGovern M, Braaten HFV, Gundersen CB, Dastoor AP, Schaefer K, Hintelmann HH]
year: 2025
publication: "Integrated Environmental Assessment and Management"
doi: 10.1093/inteam/vjae011
access_url: https://doi.org/10.1093/inteam/vjae011
source_type: peer-reviewed
evidence_tier: A
license: "not specified (OA)"
raw_path: raw/markdown/FM_11844342/FM_11844342.md
metals: [tHg, MeHg]
ingredients: ["[[ingredients/freshwater-fish]]", "[[ingredients/fish]]", "[[ingredients/fish]]", "[[ingredients/fish]]"]
products: []
matrices: [fish-tissue, freshwater, dietary-intake]
jurisdictions: [CA]
near_duplicates: []
sample_n: 1044
sample_population: "Five freshwater fish species (lake whitefish, lake trout, northern pike, walleye, burbot) from Mackenzie River Basin and Great Slave Lake, Canada; 2005–2020 monitoring data"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Jermilova et al. 2025 — Bayesian network Hg risk assessment, Mackenzie watershed freshwater fish

Jermilova et al. developed Bayesian Network Relative Risk Models (BN-RRMs) to assess mercury (Hg) exposure risk in the freshwater ecosystems of Great Slave Lake and the Mackenzie River Basin (Canadian Northwest Territories) using 2005–2020 monitoring data from 21 studies. The models integrated atmospheric Hg deposition, permafrost thaw, soil erosion, and proximity to mining and fossil fuel operations as source nodes, connecting environmental Hg concentrations to measured tissue Hg in five ecologically and food-security-relevant fish species and then propagating those concentrations to human dietary intake risk against Health Canada, WHO, and USEPA provisional tolerable weekly intake (pTWI) thresholds. The study is particularly relevant to Indigenous communities in the Northwest Territories, for whom these freshwater fish species are country foods and primary protein sources.

## Key numbers

**Fish tissue Hg concentrations (mean ± SD, µg Hg/g tissue, wet weight):**
- Lake whitefish (GBS South baseline): 0.332 ± 0.32 µg/g
- Northern pike (GBS South baseline): 0.938 ± 0.61 µg/g
- Lake whitefish (projected under Minamata 450 ppm scenario): 0.231 ± 0.28 µg/g
- Northern pike (projected under Minamata 450 ppm scenario): 0.72 ± 0.54 µg/g
- Large northern pike (≥600 mm, GSL North Arm): 0.93 ± 0.54 µg/g
- Small northern pike (<600 mm, GSL North Arm): 0.50 ± 0.37 µg/g
- Large northern pike (≥600 mm, GSL Outlet): 0.74 ± 0.39 µg/g
- Small northern pike (<600 mm, GSL Outlet): 0.30 ± 0.28 µg/g

**Canadian commercial sale guideline for fish:** 0.5 µg Hg/g tissue (Health Canada 2007)

**Probability of commercial catch exceeding Canadian Hg guideline:**
- GSL North Arm (highest risk): 30%
- GSL Middle (lowest risk, GSL model): 17%
- GBS South (highest risk, GBS model): 28%
- GBS North (lowest risk, GBS model): 19%

**Fish injury thresholds (dose-response based on fathead minnow):**
- Low injury (<25%): fish Hg <0.51 µg/g
- Moderate injury (25–50%): 0.51–2.43 µg/g
- High injury (50–75%): 2.43–11.72 µg/g
- Extreme injury (>75%): >11.72 µg/g

**Human dietary pTWI thresholds used:**
- Adult males: 3.3 µg Hg/kg body weight/week (Health Canada 2007)
- Women of child-bearing age: 1.4 µg Hg/kg bw/week (WHO 1990)
- Children: 0.7 µg Hg/kg bw/week (USEPA 2000)

**Human dietary exceedance risk (adult male, 150 g portion, light diet 2 — one whitefish + one trout/week):**
- GSL North Arm: 19.4% probability of exceeding pTWI
- Across regions, light diet consumers (2 portions/week) range from 7% to 22% exceedance probability

**Monitoring data:** 768 fish tissue samples (GSL), 276 (GBS); 855 freshwater THg samples (GSL), 1,271 (GBS)

## Methods

This is a risk modeling study, not a primary occurrence survey. Hg monitoring data were compiled from 21 publicly available datasets spanning 2005–2020 and parameterized into Bayesian network models using linear mixed effects models. Fish tissue Hg was reported as total Hg (tHg, µg Hg/g tissue, wet weight). The paper does not specify ICP-MS or CVAFS method details for the underlying monitoring data, as those originate from diverse legacy studies. Freshwater concentrations reported as total Hg (THg, ng/L). No speciation into MeHg versus inorganic Hg was performed in the model; the paper notes that MeHg is the dominant form bioaccumulated in fish tissue and the primary route of human exposure. Human dietary exposure was calculated from a portion size of 150 g fish and body weight of 60 kg (adult male), producing a ratio of 2.5 g fish/kg bw/week per portion.

## Implications

**Certification:** Not directly applicable to HMT&C food product categories (this paper concerns wild-caught freshwater fish for Indigenous subsistence use in Canada). The fish tissue Hg concentration data are nonetheless benchmarkable: lake whitefish (0.33 µg/g mean, 0.5 µg/g Canadian commercial threshold) and northern pike (0.94 µg/g mean for large fish) provide context for the dietary MeHg exposure literature relevant to [[health/mercury-toxicology]] and [[regulations/canada-health-canada-fish-hg]].

**Courses:** Illustrates how probabilistic Bayesian modeling can integrate multi-source environmental Hg data with dietary intake modeling to estimate population-level risk — directly useful for supply-chain and environmental-pathway modules covering mercury in fish and seafood.

**App:** Fish tissue Hg values (0.33–0.94 µg/g range depending on species and region) and dietary exceedance probabilities can inform the app's MeHg risk flag for freshwater fish species when consumption frequency and consumer demographics are known. The paper's finding that large predatory fish carry two- to threefold higher Hg than small fish of the same species is a key app-relevant size-dependent risk driver.

## Wiki pages updated on ingest

- [[metals/mercury]]
- [[ingredients/freshwater-fish]]
- [[health/mercury-dietary-exposure]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [2961cee1c](https://github.com/paleofoundation/heavymetalindex/commit/2961cee1c) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
