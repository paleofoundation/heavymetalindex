---
type: product-category
category: infant-formula-concentrated-liquid-non-soy
hmtc_row: null
taxonomy_status: candidate_extension
label: "Infant formula, concentrated liquid (non-soy)"
base_taxonomy: infant-formula-concentrated-liquid
variant_type: candidate_clean_benchmark
provenance: fda-market-basket-taxonomy-gap
ingredient_targets: [infant-formula-concentrated-liquid, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Pb, Cd, tAs, tHg]
vulnerable_population: infants-0-12mo
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
---

# Infant Formula, Concentrated Liquid (Non-Soy)

This page is a candidate extension page, not one of the locked sixteen HMTc Category 1 rows. It exists to preserve FDA concentrated-liquid evidence separately from ready-to-feed liquid formula so product forms are not accidentally collapsed.

## Taxonomy Status

- Page state: taxonomy-gap candidate extension.
- Locked HMTc Category 1 row: none.
- Routing rule: do not merge concentrated liquid records into ready-to-feed rows unless the locked taxonomy creates a concentrated-liquid row or an explicit aggregate rule.
- Source coverage: 1 A-tier / 0 B-tier sources.

## Why This Category Is Tracked Separately

<!-- audience: regulator, educator, consumer, app -->

FDA FY2023-FY2025 market-basket testing included 8 concentrated liquid cow milk-based formula samples. In this subgroup, detected values ranged from 0.2 to 0.4 ppb for total arsenic, 0.05 to 0.4 ppb for lead, and 0.08 to 0.5 ppb for cadmium; total mercury was not detected in the subgroup. [[sources/fda2026-infant-formula-product-testing-results]]

Concentrated liquid formula is analyzed and prepared differently from ready-to-feed formula. FDA reported powders, ready-to-feed liquids, and concentrated liquids as prepared for feeding for comparison, but the product form remains distinct and should remain distinct in row routing. [[sources/fda2026-infant-formula-product-testing-results]]

## App Handling

<!-- audience: app, consumer -->

The app model may use this page as a candidate public evidence bucket for concentrated liquid non-soy formula, but it should not treat it as HMTc row 3 and should not combine it with ready-to-feed formula without an explicit aggregation rule. Brand-level inference remains disabled because the public workbook is anonymized. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=8, detected 0.2-0.4 ug/kg, P90=0.4 ug/kg; Pb: N=8, detected 0.05-0.4 ug/kg, P90=0.4 ug/kg; Cd: N=8, detected 0.08-0.5 ug/kg, P90=0.43 ug/kg; tHg: N=8, not detected, P90=0 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Sources

- [[sources/fda2026-infant-formula-product-testing-results]]
