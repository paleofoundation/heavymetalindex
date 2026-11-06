---
type: source
cite_key: tang2026-china-food-trade-heavy-metals-crops
title: "Evaluating the Influence of Food Trade on Human Exposure to Heavy Metals via Crops in China"
authors: [Tang B, Miao X, Ma J, Liu W, Gu Q, Ma F]
year: 2026
publication: "Toxics, 14(6): 474"
doi: 10.3390/toxics14060474
access_url: https://doi.org/10.3390/toxics14060474
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
public_evidence_label: "Modeled or limited evidence"
review_state: machine_extracted
claim_classes: [modeled_dietary_intake, food_trade_analysis, health_risk_index]
raw_path: raw/evidence/HMI-TOPIC-0024/10.3390_toxics14060474.pdf
sha256: ddb3c18714451ac4a7a0223b9e79f93f2107057114f6a146aedc5115aae165c9
access_date: 2026-11-04
license: "CC BY"
metals: [tAs, Cd, Cr, Ni, Pb, Zn]
ingredients: ["[[ingredients/rice]]", "[[ingredients/wheat]]"]
products: []
matrices: [rice, wheat, agricultural-soil]
jurisdictions: [CN]
superseded_by: null
wiki_doi: null
sampling_locations: [China, national multi-province]
sampling_year_range: [2000, 2024]
updated: 2026-11-06
---

# Tang et al. 2026: Interregional food trade modifies dietary heavy metal exposure from rice and wheat across China

## Summary

This study used soil heavy metal concentration data from more than 50,000 samples across 30-plus Chinese provinces, combined with bioconcentration factors (BCFs) for rice and wheat, and interregional food trade flow data, to estimate dietary intake of six heavy metals (arsenic, cadmium, chromium, nickel, lead, zinc). The analysis found that the total concentration of the six metals in national agricultural soil ranged from 184.30 to 277.25 mg/kg, with the Central and Southwest regions showing the highest values. Through rice consumption, the Central and Northeast regions accounted for up to 36.78% and 45.08% of the daily intakes of arsenic and cadmium in other regions, respectively, illustrating how food trade redistributes contamination burden across consuming populations who live far from the source soils.

## Key numbers

| Measure | Value | Units | Matrix | Source location |
| --- | --- | --- | --- | --- |
| National average soil HM total | 234.01 ± 29.54 | mg/kg | Agricultural soil | Abstract |
| Rice average total HM concentration | 16.06 ± 2.91 | mg/kg | Rice | Abstract |
| Wheat average total HM concentration | 22.48 ± 4.22 | mg/kg | Wheat | Abstract |
| Rice BCF (As) | 0.0035 | dimensionless | Rice grain | Table 2 |
| Rice BCF (Cd) | 0.0489 | dimensionless | Rice grain | Table 2 |
| Rice BCF (Cr) | 0.0049 | dimensionless | Rice grain | Table 2 |
| Rice BCF (Ni) | 0.0166 | dimensionless | Rice grain | Table 2 |
| Rice BCF (Pb) | 0.0014 | dimensionless | Rice grain | Table 2 |
| Rice BCF (Zn) | 0.1619 | dimensionless | Rice grain | Table 2 |
| Central/NE share of As intake via rice | up to 36.78% and 45.08% | % of other regions' As and Cd daily intake | National | Abstract |
| Central/SW share of As intake via wheat | up to 51.33% | % of other regions' As intake | National | Abstract |
| HQ for As via rice exceeding 1 | Central, Central Coast, South Coast, Southwest, Northeast regions | dimensionless | National regional analysis | Abstract |

## Methods (brief)

Soil data: compiled from more than 50,000 samples across the published literature covering 30-plus provinces, excluding samples from polluted soils (concentrations exceeding Chinese Soil Environmental Quality Standard GB 15618-2018). Crop concentrations derived from soil data using published BCFs. Food trade flows derived from published inter-provincial trade literature. EDI calculated as crop concentration multiplied by food consumption (kg/kg body weight per day), normalized by region and body weight. HQ calculated as EDI divided by USEPA RfD. RfD values: As 0.30, Cd 1.00, Cr 3.00, Ni 20.00, Zn 300.00 µg/kg body weight per day; Pb 1.50 µg/kg body weight per day.

## Evidence fitness

This is a modeled study; it does not report measured food concentrations. The BCF-based approach is a recognized approximation and introduces uncertainty at the per-province level. The key contribution is the food-trade redistribution dimension, which demonstrates that standard single-jurisdiction exposure assessments underestimate the exposure of consumer populations in regions that import heavily contaminated rice from Central or Northeastern China. The arsenic HQ exceedance in multiple regions is based on modeled concentrations and should be interpreted with that caveat.

## Limitations

Modeled, not measured, crop concentrations. BCFs derived from published literature introduce variability. Inter-provincial food trade flows may not reflect actual current trade volumes. Polluted soil exclusion may underestimate high-end exposures in contaminated hotspots.

## Related evidence

- [[health/dietary-heavy-metal-exposure]]
- [[ingredients/rice]]
- [[ingredients/wheat]]
- [[metals/cadmium]]
- [[metals/total-arsenic]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| (see git) | 2026-11-06 | major | Initial ingest, Evidence Fill HMI-TOPIC-0024 |
<!-- END: hmi-page-history -->
