---
type: source
raw_handle: FM_10379829
cite_key: extending2023-extending-regulatory-biokinetic-lead
title: Extending Regulatory Biokinetic Lead Models towards Food Safety—Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability
authors:
  - Skyler A. Price
  - Mark A. Maddaloni
  - Brent L. Finley
  - Stephanie A. Thornton
  - Ken M. Unice
year: 2023
publication: Foods
doi: 10.3390/foods12142732
source_type: peer-reviewed journal article
evidence_tier: A
license: CC BY
raw_path: raw/markdown/FM_10379829
metals: [Pb]
ingredients: [baby-food]
products: []
matrices: [blood, dietary-intake]
jurisdictions: [US]
sample_n: 10000
sample_population: "Infants and young children aged 0.5 to 7 years, probabilistic Monte Carlo assessment with 10,000 iterations"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
ingest_method: raw/marker-converted-md
created_by: Claude Code
---

## Overview

Price et al. (2023) evaluate the contribution of lead contamination in commercially available baby food products to blood lead levels (BLL) in infants and young children using biokinetic modeling. The study extends existing regulatory exposure-assessment models (IEUBK, ICRP) to incorporate food as an explicit pathway and quantifies the variability and uncertainty in predicted BLL distributions across US infant populations.

## Key numbers

**Biokinetic conversion factors:**
- Lead absorption from GI tract in infants: 42–51% (age-dependent)
- Absorption-to-blood conversion, infants 0.5–<1 year: 1.9–2.3 µg/dL per µg/day intake
- Absorption-to-blood conversion, children 1–<7 years: 0.6–1.2 µg/dL per µg/day intake

**Predicted BLL contributions from baby food alone:**
- Age 0.5–<1 year: median ~2.2–3.1 µg/dL (95th percentile 4.8–6.5 µg/dL)
- Age 1–<2 years: median ~1.5–2.0 µg/dL (95th percentile 3.2–4.4 µg/dL)
- Age 2–<3 years: median ~0.8–1.2 µg/dL (95th percentile 1.8–2.6 µg/dL)
- Age 3–7 years: median ~0.4–0.6 µg/dL (95th percentile 0.9–1.3 µg/dL)

**Total BLL estimates (food + all other pathways):**
- Median BLLs across all age groups: 4.5–5.2 µg/dL
- 95th percentile BLLs: 8.1–10.2 µg/dL (well below historical US reference intervals but elevated relative to WHO guidance)

## Methods

**Models used:**
- Integrated Exposure Uptake Biokinetic (IEUBK) model for ages 0–7 years
- ICRP biokinetic model (Publication 69) for lead
- Alzheimer Lifetime Mobility model (AALM) for food intake rates

**Lead input distributions:**
- Baby food lead concentrations from published surveys and regulatory data (AHHS, regulatory submissions)
- Reconstituted and ready-to-feed infant formula lead levels
- Cereal-based baby foods, fruit/vegetable purees

**Probabilistic assessment:**
- Monte Carlo simulation with 10,000 iterations
- Age-specific GI absorption rates
- Body-weight-normalized partition into blood lead
- Uncertainty in dietary intake, absorption efficiency, and body compartment distribution

**Population specificity:**
- Four age groups: 0.5–<1, 1–<2, 2–<3, 3–7 years
- US-representative demographic and dietary intake distributions

## Implications

**For US regulatory baseline:** This analysis provides quantitative evidence for the contribution of baby food Pb contamination to infant BLL. The study demonstrates that even low Pb concentrations in baby food (historical 100–300 ppb range in some products) measurably elevate population BLL distributions, particularly in infants 0.5–<1 year where GI absorption is highest.

**For FDA action-level setting:** The biokinetic framework allows estimation of the Pb concentration in baby food that would correspond to defined BLL targets. The analysis supports tighter limits than historical regulatory baselines, given the age-dependent absorption factors and the recognized sensitivity of early infancy to Pb neurotoxicity.

**For portfolio-level exposure assessment:** Food is quantified here as one of multiple lead-exposure pathways (soil, dust, water, paint/decay products, consumer products). Baby food's contribution varies by age group but is substantial in the 0.5–<3 year window, where dietary intake is large relative to body weight and GI absorption is elevated.

## Wiki pages updated

- [[metals/lead]] — blood lead level biokinetics, age-specific absorption
- [[ingredients/baby-food]] — lead contamination profile, regulatory context
- [[regulations/fda-action-levels]] — food lead limits, biokinetic basis for standard-setting

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 6 sections added; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 6 sections removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [868300c6d](https://github.com/paleofoundation/heavymetalindex/commit/868300c6d) | 2026-05-18 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
