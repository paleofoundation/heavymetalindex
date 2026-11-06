---
type: source
raw_handle: FM_12079195
cite_key: bozkurt2025-massachusetts-lead-monitoring-sensors
title: "Community-Wide Monitoring of Lead in Drinking Water Distribution Systems Using Hand-Held Voltammetric Sensors and Geographic Information Systems"
authors: [Bozkurt F, Haque MM, Sullivan EM, Xiang L, Zhu J, Alam MS, Kurup P]
year: 2025
publication: "ACS Omega"
doi: 10.1021/acsomega.5c01580
access_url: "https://doi.org/10.1021/acsomega.5c01580"
source_type: peer-reviewed
evidence_tier: A
license: "PMC OA subset"
raw_path: raw/markdown/FM_12079195/FM_12079195.md
metals: [Pb, Cu]
ingredients: ["[[ingredients/water]]"]
products: []
matrices: [drinking-water, tap-water]
jurisdictions: [US]
near_duplicates: []
sample_n: 634
sample_population: "317 homes across four Massachusetts municipalities (Andover, Dracut, Lawrence, and Lowell); first-liter and fifth-liter tap water samples collected by residents after 6 h or more stagnation; June 2023 to August 2024"
wiki_doi: null
sampling_locations: [Andover, Dracut, Lawrence, Lowell, MA]
sampling_year_range: "2023-2024"
updated: 2026-11-06
---

# Bozkurt et al. 2025 -- Community-wide lead monitoring with hand-held sensors, Massachusetts

## Overview

This community-engaged field study deployed portable voltammetric sensors (a mercury-free "E-Tongue" device) alongside ICP-MS confirmation to monitor lead in tap water across 317 homes in four Massachusetts municipalities. First-liter and fifth-liter sequential samples were collected by residents after 6 h or more stagnation, following a protocol similar to the US EPA Lead and Copper Rule revised 2021 (Trigger Level 10 µg/L). GIS spatial analysis identified geographic clustering of elevated lead samples. The highest single first-liter sample measured 168.2 µg/L (confirmed at 25.1 µg/L in the corresponding fifth liter) in Andover. Fifth-liter exceedances above the action level in Andover indicated potential lead service lines in that municipality.

## Key numbers

First-liter results across all four municipalities (317 homes, µg/L):
- Above 10 µg/L (US EPA LCRI action level, 2024): 7 samples (4 from Andover, 2 from Lowell, 1 from Lawrence)
- 5 to 10 µg/L: 3 samples
- 2 to 5 µg/L: 21 samples
- Below 2 µg/L: remainder

Highest single first-liter measurement: 168.2 µg/L (Andover; sensor result); confirmed by ICP-MS at 25.1 µg/L (fifth-liter sample from same home)

Fifth-liter results (317 homes):
- Above 10 µg/L: 3 samples (all Andover, suggesting lead service line presence)
- 5 to 10 µg/L: 2 samples
- 2 to 5 µg/L: 10 samples

Sensor performance: voltammetric E-Tongue MDL 1.6 µg/L; linear range 5 to 200 µg/L; lead recovery 84 to 105 percent; RSD below 10 percent.

Water chemistry by municipality: Andover most alkaline; Lawrence neutral; Lowell and Dracut intermediate.

## Methods (brief)

Community-engaged sampling with resident-collected first-liter and fifth-liter samples (1 L per sample) after 6 h or more stagnation, confirmed by certified ICP-MS or graphite furnace atomic absorption if sensor result was above the action level. Portable anodic stripping voltammetry (E-Tongue; mercury-free bismuth electrode). Confirmatory analysis by EPA Methods 200.8 (ICP-MS) or 200.9 (GFAA). GIS spatial analysis using natural neighbor interpolation and kriging.

## Evidence fitness

Supports: demonstrating feasibility of community-wide distributed lead monitoring using portable sensors validated against reference methods; establishing baseline lead concentrations across four Massachusetts municipalities; identifying geographic clustering of elevated lead and potential lead service line locations via fifth-liter sampling.

Does not support: establishing a city-level 90th percentile for LCR compliance purposes (self-selected volunteer sample, not a Tier I high-risk site survey); generalizing sensor performance across all tap water matrices without site-specific validation; substituting sensor results for regulatory compliance measurements without ICP-MS confirmation.

## Limitations

Residential sampling was volunteer-based, potentially oversampling residents with elevated concern about water quality. Sample size (317 homes across four municipalities) is insufficient for statistically robust municipality-level distributions. The E-Tongue MDL of 1.6 µg/L means that samples below this threshold are non-detect, potentially underestimating low-level exposure. Sensor results require confirmatory ICP-MS when above the action level; the study confirmed a subset, but routine community monitoring with sensors alone would miss the precision needed for regulatory compliance. Stagnation time was self-reported as 6 h or more without confirmation.

## Related evidence

- [[metals/lead]]
- [[ingredients/water]]
- [[testing/tap-water-lead-sampling]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
