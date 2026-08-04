---
type: source
raw_handle: FM_10379829
cite_key: price2023-biokinetic-lead-baby-food-blls
title: "Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability"
authors: [Price SA, Maddaloni MA, Finley BL, Thornton SA, Unice KM]
year: 2023
publication: "Foods 12:2732"
doi: 10.3390/foods12142732
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10379829/FM_10379829.md
metals: [Pb]
ingredients: ["[[ingredients/rice]]", "[[ingredients/rice-cereal]]", "[[ingredients/fruit]]", "[[ingredients/vegetables]]", "[[ingredients/root-vegetables]]"]
products: ["[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/fruit-purees]]", "[[products/root-vegetable-purees]]"]
matrices: [exposure-modeling, blood-lead-modeling, dietary-intake]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "US national probabilistic Monte Carlo (10,000 iterations) using AHHS 2005-2006 + AHHS II 2018-2019 + FDA TDS 2007-2013 + NHANES distributions for soil, dust, water, and food Pb intake."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-14
ingest_method: manual_phase1_priority
created_by: claude_opus_47_session
---

# Price et al. 2023 (Stantec ChemRisk) — Biokinetic models comparing baby food Pb to soil/dust/water BLL contributions

## Overview

This study compares three biokinetic Pb models (IEUBK, ICRP v5, AALM) to characterize how baby food Pb contributes to infant blood lead levels (BLLs) relative to soil, dust, water, and other dietary sources. The three models converge for children ≥3 years to the FDA dietary conversion factor of **0.16 µg Pb/dL blood per µg Pb intake/day**, with some variation for younger infants. Applying IEUBK in a probabilistic Monte Carlo framework with US-national distributions for all media: **soil and dust are the primary contributors to BLL variance; food and water contribute <15% combined**. The Stantec ChemRisk authors conclude that "reductions in upper-bound soil and dust concentrations will be necessary before achieving appreciable reductions in the frequency of BLLs greater than the BLRV of 3.5 µg/dL." This is a defensible biokinetic argument from an industry-aligned consultancy, important for HMTc Cat 1 messaging: even with FDA action levels at 10/20 ppb implemented across the food supply, the residual BLL reduction is modest because non-food Pb sources dominate exposure variance.

## Key numbers

**FDA Pb regulatory framework (cited by paper, January 2023)**:
- **FDA Interim Reference Level (IRL)**: 2.2 µg Pb/day for children
- **CDC Blood Lead Reference Value (BLRV)**: 3.5 µg/dL
- Derivation: BLRV 3.5 µg/dL ÷ 10-fold safety factor ÷ 0.16 µg/dL per µg Pb/day conversion factor = 2.2 µg/day IRL
- **FDA 2023 draft action levels**:
  - 10 ppb Pb for fruits, vegetables, mixtures, yogurt, meat
  - 20 ppb Pb for root vegetables and dry infant cereals
- **Estimated dietary Pb reduction from FDA action levels (90th percentile)**: 2.02 → 1.5 µg/day (~26% reduction for sum of fruits, root vegetables, dry infant cereal)

**Probabilistic Monte Carlo Pb sources contribution to BLL variance** (US-national IEUBK Monte Carlo, n=10,000 iterations):
- **Soil + dust**: dominant (>85% of variance)
- **Food + water combined**: <15% of variance
- Baseline scenario: AHHS 2005-2006 soil/dust data, FDA TDS 2007-2013 food data
- 30% dietary Pb reduction scenario: minimal BLL distribution shift
- 50% soil Pb reduction scenario: substantial BLL distribution shift (more impactful than 30% dietary reduction)

**Biokinetic model dietary conversion factors compared** (µg Pb/dL blood per µg Pb intake/day):

| Model | Age 0.5-<1 yr | Age 1-<2 yr | Age 2-<3 yr | Age 3-<7 yr |
|---|---|---|---|---|
| FDA reference (cited) | 0.16 | 0.16 | 0.16 | 0.16 |
| IEUBK v2.0 (2017) | ~0.18 | ~0.16 | ~0.15 | ~0.15 |
| ICRP v5 | ~0.20 | ~0.18 | ~0.17 | ~0.16 |
| AALM v2.0 | ~0.18 | ~0.17 | ~0.16 | ~0.16 |

(Exact per-age values appear in paper Table 2; reading provides directional approximation.)

**Soil/dust Pb temporal trend** (AHHS 2005-2006 → AHHS II 2018-2019):
- Mean soil Pb in homes with children <6 yr: 172 → 83 ppm (~50% reduction over ~13 years)
- This is the documented historical reduction in residential soil Pb, attributable to lead paint abatement and gasoline-Pb phaseout legacy effects.

## Methods

**Biokinetic model comparison**:
- IEUBK v1.1 Build 11 (2010) + v2.0 Build 1.66 (2017) — US EPA Superfund. Multi-compartment, ages 0-7. Pseudo steady-state kinetics.
- ICRP v5 (Roy and Edwards 2022 / Syracuse Research Corp) — radiation-protection multi-compartment, ages 0-lifetime, supports intermittent exposures.
- AALM v2.0 (US EPA, External Review Draft 2019) — "All-Ages Lead Model", extends ICRP v5 with US-specific calibration.

**Probabilistic exposure assessment**:
- 10,000 Monte Carlo iterations using Argo v4.1.3 (Booz Allen Hamilton) for input distribution sampling.
- Distributions: lognormal for soil, dust, water, food Pb based on AHHS, AHHS II, FDA TDS, NHANES.
- Correlations: rank correlation 0.48 for soil-dust pairs; 0.2 for dust-water and soil-water; 0.7 for year-to-year food intake (within-individual).
- Airborne Pb set to IEUBK defaults (negligible contribution to BLL variance).
- BLL estimation in IEUBK v2 batch mode.
- First-order variance decomposition (Plischke 2012 algorithm) for percent-contribution per source.

**Scenarios**:
1. Baseline (current US distribution)
2. 30% reduction in dietary Pb intake distribution (proxy for FDA 2023 action levels effect)
3. 50% reduction in soil Pb concentration distribution (proxy for further residential Pb abatement)

## Implications

Certification: For HMTc Cat 1 lead-in-baby-food framework + the broader Cat 1 Pb threshold-setting strategy:

1. **The biokinetic finding (food contributes <15% of BLL variance)** is the strongest industry-aligned argument that food Pb action levels alone can't drive BLL reductions to safe levels. HMTc Cat 1 Pb threshold messaging should engage with this directly — certifying below FDA action levels is meaningful for the food-source contribution, but the >85% non-food contribution (soil, dust) is the binding constraint at population level.

2. **The 0.16 µg/dL-per-µg/day conversion factor is the consensus** across IEUBK, ICRP, AALM, and FDA for children 3-7. For ages <3, the models diverge somewhat but the directional finding (food matters less than soil/dust for BLL variance) holds across all three models. HMTc Cat 1 threshold derivation can use this conversion factor as a defensible reference.

3. **The 30% vs 50% dietary-vs-soil reduction comparison** is important for adversarial cross-examination: a plaintiff's expert arguing that food Pb (even at FDA-compliant levels) "causes" elevated BLLs faces this paper's evidence that soil and dust dominate variance. HMTc's posture should be: HMTc certification reduces the food-source contribution to its irreducible minimum (good for individual children whose only/dominant Pb exposure is dietary), but does not by itself solve population-level BLL distributions (which require residential Pb remediation).

4. **The Cat 1 framing for HMTc**: HMTc-certified baby food at 10 ppb Pb is meaningful for the subset of children whose food is the dominant Pb source (low-soil-Pb homes; certified-food-eating-only). It's not a guarantee of low BLL for children in older homes with residual Pb paint and contaminated soil.

5. **Industry-aligned source caveat**: Stantec ChemRisk is a consultancy that frequently works for industry clients including formula manufacturers. The methodology is technically sound but the framing favors industry's "food-source argument is overstated" narrative. The wiki should cite this paper alongside the Chiger 2017 (HBBF) IQ-loss paper, which represents the opposite advocacy direction. Both are scientifically valid; readers and policy stakeholders need both perspectives.

Courses: Strong reference for an HMTc course module on Pb biokinetic modeling and the distinction between (a) source contribution to individual exposure (b) source contribution to population-level BLL variance.

App: For the consumer app's Pb risk modeling, the 0.16 µg/dL-per-µg/day conversion factor applied to per-meal Pb intake gives a defensible per-child BLL impact estimate.

Microbiome: Not addressed.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[ingredients/rice]]
- [[ingredients/rice-cereal]]
- [[ingredients/fruit]]
- [[ingredients/vegetables]]
- [[ingredients/root-vegetables]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/fruit-purees]]
- [[products/root-vegetable-purees]]
- [[regulations/fda-pb-baby-food-action-levels-2023]] (to be created — FDA 2023 draft guidance with 10/20 ppb action levels)
- [[regulations/fda-iAs-rice-cereal-2020]] (related, prior FDA action level)
- [[regulations/cdc-blrv-3.5-ugdl]] (to be created)

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fa7496edd](https://github.com/paleofoundation/heavymetalindex/commit/fa7496edd) | 2026-05-15 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
