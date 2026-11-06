---
type: source
raw_handle: FM_12070402
cite_key: hood2025-orthophosphate-silicate-lead-corrosion
title: "Evaluating Orthophosphate-Silicate Blend as an Alternative to Blended Phosphates for Corrosion Control and Sequestration"
authors: [Hood TM, Trueman BF, Gagnon GA]
year: 2025
publication: "ACS ES&T Water"
doi: 10.1021/acsestwater.5c00159
access_url: "https://doi.org/10.1021/acsestwater.5c00159"
source_type: peer-reviewed
evidence_tier: A
license: "PMC OA subset"
raw_path: raw/markdown/FM_12070402/FM_12070402.md
metals: [Pb]
ingredients: ["[[ingredients/water]]"]
products: []
matrices: [drinking-water]
jurisdictions: [CA]
near_duplicates: []
sample_n: null
sample_population: "Bench-scale lead coupon experiment; 52 lead coupons (2.7 by 1.5 by 0.2 cm) in 125 mL glass jars; treated surface water from Halifax Water's J.D. Kline plant at approximately pH 7.5 and alkalinity 18 to 21 mg/L as CaCO3; five water changes per week; 15-week conditioning plus treatment phase; 24-hour and 72-hour stagnation cycles"
wiki_doi: null
sampling_locations: [Halifax, Nova Scotia, Canada]
sampling_year_range: "2024-2025"
updated: 2026-11-06
---

# Hood et al. 2025 -- Orthophosphate-silicate blend evaluation for lead corrosion control

## Overview

This bench-scale study compared orthophosphate, trimetaphosphate (a polyphosphate), and an orthophosphate-silicate blend as corrosion inhibitor alternatives for lead coupons in treated surface water. The study was motivated by the common utility practice of using blended phosphates for simultaneous iron and manganese sequestration and lead corrosion control, which is problematic because polyphosphates increase lead solubility. The orthophosphate-silicate blend was tested as a potential compromise: effective iron and manganese sequestration with less adverse effect on lead. Results showed that pH elevation was the dominant control on lead solubility in this system; trimetaphosphate substantially increased dissolved lead; and the silicate blend produced a smaller, partly non-significant increase in total lead but a detectable increase in dissolved lead relative to orthophosphate alone.

## Key numbers

Baseline (conditioning phase prior to treatment comparisons, lead coupon leachate, µg/L):
- Median dissolved lead: 23.5 µg/L (IQR: 10.1 to 86.5 µg/L)
- Median total lead: 98.8 µg/L (IQR: 49.1 to 205.2 µg/L)

Treatment effects (geometric mean relative to orthophosphate-only control):
- Trimetaphosphate: total lead +22 percent (95% CI: +11 to +35 percent); dissolved lead +54 percent (95% CI: +25 to +91 percent) -- increase in both fractions
- Orthophosphate-silicate blend: total lead +8 percent (not statistically significant); dissolved lead +30 percent (95% CI: +5 to +61 percent)
- pH 9.5 versus 7.5: total lead -24 percent; dissolved lead -34 percent (95% CI: -15 to -48 percent) -- protective
- Iron and manganese co-present (versus absent): total lead +41 percent; dissolved lead -44 percent (adsorption of dissolved lead to iron and manganese colloids)

Health Canada regulatory context: MAC for lead lowered to 5 µg/L in 2019.

## Methods (brief)

Bench-scale glass jar system with 52 lead coupons. Treated water from Halifax surface water plant. Five water changes per week at 24-hour and 72-hour stagnation cycles. ICP-MS (Standard Methods 3125 and 3030). Dissolved samples filtered at 0.2 µm. Mixed effects models with repeated measures structure. Corrosion product characterization by X-ray diffraction identified cerussite, hydrocerussite, and hydroxypyromorphite.

## Evidence fitness

Supports: establishing that polyphosphate sequestrants increase lead solubility and are unsuitable as sole corrosion inhibitors in lead-containing plumbing; demonstrating that the orthophosphate-silicate blend offers modest improvement over trimetaphosphate for total lead while still increasing dissolved lead; confirming pH as the dominant solubility control in Atlantic Canada source water.

Does not support: extrapolation to field-scale treatment plants (bench-scale static conditions differ from distribution system hydraulics and biofilm-pipe scale interactions); applying these results to other source water chemistries without bench-scale replication; substituting silicate for orthophosphate in regulatory compliance decisions without full-scale validation.

## Limitations

Bench-scale static systems do not replicate distribution system hydraulics, biofilm, or varying flow patterns. Lead coupons have a fixed surface area that differs from actual pipe geometry in distribution networks. The increase in dissolved lead fraction under silicate treatment, even when total lead is not significantly elevated, is a concern for compliance measurements that use total lead rather than dissolved lead as the basis. The study used a single Atlantic Canada source water; utilities with different alkalinity, hardness, and NOM profiles would need to conduct site-specific bench testing before adopting the silicate blend.

## Related evidence

- [[metals/lead]]
- [[ingredients/water]]
- [[testing/tap-water-lead-sampling]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
