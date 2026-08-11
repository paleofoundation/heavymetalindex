---
type: source
raw_handle: FM_12750342
cite_key: wei2025-cd-as-rice-yunnan-karst-thresholds
title: "Integrating soil bioavailability and plant physiological responses to establish region-specific safety thresholds for cadmium and arsenic in rice cultivated in karst regions"
authors: [Wei D, Huang Y, Yu Z, Zan L, Li W, Wei K, Peng Y, Wang X]
year: 2025
publication: "Frontiers in Plant Science"
doi: 10.3389/fpls.2025.1703651
access_url: https://doi.org/10.3389/fpls.2025.1703651
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_12750342/FM_12750342.md
metals: [Cd, tAs]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice, soil]
jurisdictions: [CN]
near_duplicates: []
sample_n: 125
sample_population: "Paired soil-rice samples from Gejiu-Mengzi, Yunnan Province, China (karst high-geochemical-background region)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-17
---

# Wei et al. 2025 — Cd and As in milled rice from karst Yunnan, field survey of 125 paired soil-rice samples

## Overview

This study measured cadmium (Cd) and total arsenic (tAs) concentrations in milled rice and paired paddy soils from 125 field sampling points in the Gejiu-Mengzi area of Yunnan Province, a karst region in southwestern China characterized by naturally elevated geochemical backgrounds for heavy metals. The primary research objective was to derive region-specific soil safety thresholds that perform better than the Chinese national screening values (RSVs) in neutral-to-alkaline karst soils, where the national one-size-fits-all standards produce false-positive misclassification rates of 52.0-66.4%. Rice grain Cd and tAs concentrations from the field survey are the food-matrix occurrence data the threshold derivation rests on.

## Key numbers

Sample set: n=125 paired soil-rice samples; stratified random sampling across a 1×1 km to 3×3 km grid during September 2018; milled rice (dehusked, pulverized, sieved at 0.149 mm).

Rice grain concentrations from the four-quadrant regulatory analysis (soil MAC exceedance vs rice MAC exceedance):

- Quadrant I (soil unsafe, rice unsafe; 14.4-17.6% of samples): mean rice Cd = 0.381 mg/kg (381 ppb); mean rice tAs = 1.12 mg/kg (1,120 ppb). These samples cross both the national MACs (Cd: 0.2 mg/kg; As: 0.5 mg/kg in GB 2762-2022) and the RSVs. The methods section oven-dries rice grains before analysis, so these occurrence values should not be labeled wet weight from this source alone.
- The paper does not report a single mean rice Cd or tAs across all 125 samples explicitly in the main text; the quadrant-stratified values above are the primary reported figures.

Soil concentrations (mean across all 125 samples): Cd 2.16 mg/kg; tAs 60.18 mg/kg. Soil pH range 6.56-8.25 (mean 7.65); 74.4% weakly alkaline.

Derived regional thresholds for paddy soil:
- Safety threshold (ST) for Cd: 4.54-7.12 mg/kg (pH-dependent); far above national RSV of 0.6-0.8 mg/kg.
- ST for tAs: 91.43-92.30 mg/kg; far above national RSV of 20-25 mg/kg.
- Hazard threshold (HT) for Cd: 9.66-10.12 mg/kg; 2.5-3.2x the national RIV.
- HT for tAs: 96.90-97.15 mg/kg; slightly below national RIV of 100-120 mg/kg.

Applying the regional ST-HT framework improved soil classification accuracy from 28.1-95.6% to 71.8-100%.

## Methods (brief)

Analytical method: the source reports mixed-acid digestion followed by atomic fluorescence spectrometry, and HNO3+HClO4 (4:1 v/v) digestion coupled with ICP-MS (Nexion 350x, PerkinElmer) for Cd and tAs in soil and rice. Quality control: soil standard GBW-07405 and plant standard GBW-10045 inserted every 10 samples with blank runs; recovery rates monitored. Matrix: milled rice (rice grain, dehusked). Metal species: total Cd; total As (tAs; no inorganic/organic speciation performed). Basis: rice grains were oven-dried before dehusking, pulverizing, and sieving; do not relabel the paper's rice values as wet weight.

Note on speciation: the paper measures total arsenic only; no iAs/DMA speciation was performed. All arsenic values are tAs and must not be interpreted as iAs.

## Implications

Certification: The rice Cd and tAs data provide source-level occurrence context for a geologically anomalous karst rice-growing region in Yunnan. The mean rice Cd of 381 ppb and mean rice tAs of 1,120 ppb are quadrant-I values from exceedance-classified sites, not whole-sample means. The finding that soil contamination metrics substantially overpredict actual grain contamination in alkaline karst soils is relevant to interpreting soil-screening evidence alongside rice-grain measurements.

Courses: Illustrates how geochemical background (naturally elevated metals in karst parent rock) interacts with soil chemistry (pH, Fe/Mn oxides) to modulate bioavailability; a clear case study for the gap between soil-total-metal and plant-available-metal framing.

App: Treat the rice-grain Cd and tAs values as region-specific occurrence context for Chinese karst systems. Do not merge the quadrant-I values into global-distribution rice profiles without preserving their exceedance-classified sampling context.

## Wiki pages this source may touch

- [[ingredients/rice]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]

## Verification notes

- Cross-vendor audit (Codex, 2026-05-17) corrected matrix terms to broad current vocabulary (`rice`, `soil`), removed a non-existent China GB 2762 regulation wikilink, replaced the umbrella arsenic link with `arsenic-total`, and removed wet-weight labeling that the source methods do not support.
- Strict Part 12 recheck found no sampled-product brand names. Instrument and software vendor names in the methods are retained under Part 12 Exception 2 for scientific reproducibility.
- The reported rice values are not whole-study means; 0.381 mg/kg Cd and 1.12 mg/kg tAs are means for the quadrant-I soil-unsafe/rice-unsafe subset.

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
