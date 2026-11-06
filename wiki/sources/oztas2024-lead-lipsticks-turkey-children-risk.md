---
type: source
raw_handle: HMI-PROD-childrens-makeup-1_oztas2024-lead-lipsticks-turkey
cite_key: oztas2024-lead-lipsticks-turkey-children-risk
title: "Do lead (Pb) content of lipsticks expose a health risk to children? A risk assessment study"
authors: [Oztas DM, Ulutas OK, Berkkan A]
year: 2024
publication: "Journal of Public Health, Vol. 46, No. 3, pp. 335-341"
doi: 10.1093/pubmed/fdae070
access_url: https://doi.org/10.1093/pubmed/fdae070
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: raw/hmi-evidence-deposits/HMI-PROD-childrens-makeup-1/10.1093_pubmed_fdae070.pdf
raw_sha256: c777914c459882a3ee0295ab62c352d2211e40d90dacd1d21f116a4395daf0e1
metals: [Pb]
ingredients: []
products: ["[[products/lipstick]]"]
matrices: [cosmetic-personal-care, exposure-modeling]
jurisdictions: [TR]
near_duplicates: []
sample_n: 25
sample_population: "25 lipsticks purchased from Turkish markets representing 10 different brands, categorized by type (solid n=10, gloss n=10, creamy n=5) and price range (high-priced n=15, low-priced n=10). Adult-use lip products; children's risk is modeled via IEUBK, not measured in child-marketed products."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-11-06
ingest: HMI-PROD-childrens-makeup-1
created_by: evidence-fill-conductor
---

# Oztas et al. 2024: Lead in Turkish lipsticks with IEUBK-based children's blood lead modeling

## Overview

This Journal of Public Health paper measures total lead in 25 lipsticks purchased from Turkish markets (10 brands, three lipstick types, two price tiers), then applies the USEPA Integrated Exposure Uptake Biokinetic (IEUBK) model to project blood lead levels in children assuming unintended exposure. The overall mean lead concentration was 1.68 plus or minus 0.72 mg/kg. All samples fell below the Turkish regulatory ceiling of 20 ppm for lead in cosmetics. The IEUBK projections indicated that daily lead intake and lifetime cancer risk from lipstick exposure remain below accepted thresholds under all modeled scenarios, though the authors caution that long-worn usage by sensitive or unintended exposure groups (including children who access adult lipsticks) warrants monitoring.

## Key numbers

All lead concentrations are total elemental lead in finished lipstick product as placed on market, measured by continuous-flow hydride generation atomic absorption spectrometry (CF-HG-AAS) after acid digestion. Units are mg/kg (equivalent to ppm) unless otherwise stated.

### Overall dataset

Overall mean lead: 1.68 plus or minus 0.72 mg/kg (95% confidence interval range reported in source).

Detection limit determined as 3.3 Sb/m (standard deviation of blank signal, n = 11, divided by slope of calibration curve). Specific LOD value in mg/kg not stated in the source text; all 25 samples yielded detectable lead.

### Lead by lipstick type (mg/kg, mean)

| Lipstick type | n | Mean Pb (mg/kg) |
|---|---:|---:|
| Solid | 10 | 2.45 |
| Gloss | 10 | 1.28 |
| Creamy | 5 | 0.95 |

Solid lipsticks had the highest mean lead concentration regardless of price range; creamy lipsticks the lowest.

### Lead by price tier (mg/kg, mean)

| Price tier | n | Mean Pb (mg/kg) |
|---|---:|---:|
| High-priced (all types) | 15 | 1.41 |
| Low-priced (all types) | 10 | 2.085 |

Statistically significant difference between high-priced and low-priced lipsticks (unpaired t-test, P = 0.0212). Low-priced lipsticks had higher mean lead than high-priced lipsticks across all three types.

### Lead by price tier within solid lipsticks

| Tier | Mean Pb (mg/kg) |
|---|---:|
| High-priced solid | 2.17 |
| Low-priced solid | 2.73 |

### Lead by price tier within gloss lipsticks

| Tier | Mean Pb (mg/kg) |
|---|---:|
| High-priced gloss | 1.12 |
| Low-priced gloss | 1.44 |

### Lead by color

Brown, pink or red, and nude lipstick subgroups showed means of 2.17, 1.70, and 0.95 mg/kg, respectively. Statistically significant difference between brown and nude groups (P = 0.0073).

### IEUBK children's blood lead modeling

The IEUBK model (EPA, version 1.1 build 11) was run to project blood lead levels in children assuming unintended exposure starting at age 7. Four exposure scenarios were deployed. The source states that daily intake and total risk for lifetime lead exposure from the tested lipsticks were below acceptable risk levels under all scenarios. Specific projected blood lead values are not tabulated in the source abstract; the source reports that blood lead levels stayed below the threshold associated with concern under the modeled scenarios.

### Regulatory comparators cited by the source

Turkey: upper limit of 20 ppm (mg/kg) for lead in cosmetics (aligned with EU law; toothpaste excluded).
USA: FDA has no finished-product lead standard for lipstick; the candy lead limit of 0.1 ppm is cited in the introduction as a reference comparator for unintentional ingestion by children.

## Methods (brief)

**Sample collection.** 25 lipstick samples from Turkish markets. Brands, colors, and retail sources not disclosed.

**Sample preparation.** Wet acid digestion. Specific acids and conditions not fully reported in the available text.

**Analysis.** Continuous-flow hydride generation atomic absorption spectrometry (CF-HG-AAS). Lead standard added to digested sample; Ar gas sweep to atomizer. Standard curve prepared for calibration.

**Statistical analysis.** Results presented as means plus or minus SD. Unpaired t-tests performed in GraphPad InStat version 3.05. IEUBK model version 1.1 build 11 for children's blood lead projection.

**Speciation.** Total elemental lead only. No speciation of lead compounds.

## Implications

**Certification.** Provides A-tier occurrence data on the Turkish lip-cosmetic market for lead. The 25-product dataset spans three lipstick types and two price tiers, with means ranging from 0.95 mg/kg (creamy) to 2.45 mg/kg (solid). The finding that lower-priced products had higher mean lead (2.085 vs 1.41 mg/kg) is consistent with the direction seen in some other markets but should not be generalized beyond the Turkish sample. All samples fell below the Turkish 20 ppm regulatory ceiling. Useful context for adult lip-product lead profiling under the HMTc Cat 13 (Adult Leave-on Cosmetics) Row 8 (Lip products) framework.

**Courses.** Useful as a teaching case for IEUBK model parameterization applied to cosmetic exposure in an unintended-exposure-group scenario (children accessing adult lipstick), and for illustrating that price tier does not reliably predict lead content across product types.

**App.** The per-type mean Pb concentrations (solid 2.45, gloss 1.28, creamy 0.95 mg/kg) are useful reference points for lipstick product format profiling.

## Related evidence

- [[metals/lead]]
- [[products/lipstick]]
- [[products/childrens-makeup]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
<!-- END: hmi-page-history -->
