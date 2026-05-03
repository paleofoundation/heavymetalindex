---
type: product-category
category: infant-formula-concentrated-liquid-soy-based
hmtc_row: null
taxonomy_status: candidate_extension
label: "Infant formula, concentrated liquid (soy-based)"
base_taxonomy: infant-formula-concentrated-liquid
variant_type: candidate_contamination_platform
provenance: fda-market-basket-taxonomy-gap
ingredient_targets: [infant-formula-concentrated-liquid, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Pb, Cd, tAs, tHg]
vulnerable_population: infants-0-12mo
applicable_regulations: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
---

# Infant Formula, Concentrated Liquid (Soy-Based)

This page is a candidate extension page, not one of the locked sixteen HMTc Category 1 rows. It exists to preserve FDA concentrated-liquid evidence separately from ready-to-feed liquid formula so product forms are not accidentally collapsed.

## Taxonomy Status

- Page state: taxonomy-gap candidate extension.
- Locked HMTc Category 1 row: none.
- Routing rule: do not merge concentrated liquid records into ready-to-feed rows unless the locked taxonomy creates a concentrated-liquid row or an explicit aggregate rule.
- Source coverage: 1 A-tier / 0 B-tier sources.

## Why This Category Is Tracked Separately

<!-- audience: regulator, educator, consumer, app -->

FDA FY2023-FY2025 market-basket testing included 3 concentrated liquid soy-based formula samples. In this subgroup, detected values ranged from 0.6 to 0.7 ppb for total arsenic, 0.3 to 0.4 ppb for lead, 1.3 to 1.5 ppb for cadmium, and 0.05 ppb for total mercury in one sample. [[sources/fda2026-infant-formula-product-testing-results]]

Concentrated liquid formula is analyzed and prepared differently from ready-to-feed formula. FDA reported powders, ready-to-feed liquids, and concentrated liquids as prepared for feeding for comparison, but the product form remains distinct and should remain distinct in row routing. [[sources/fda2026-infant-formula-product-testing-results]]

## App Handling

<!-- audience: app, consumer -->

The app model may use this page as a candidate public evidence bucket for concentrated liquid soy-based formula, but it should not treat it as HMTc row 4 and should not combine it with ready-to-feed formula without an explicit aggregation rule. Brand-level inference remains disabled because the public workbook is anonymized. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=3, detected 0.6-0.7 ug/kg, P90=0.68 ug/kg; Pb: N=3, detected 0.3-0.4 ug/kg, P90=0.38 ug/kg; Cd: N=3, detected 1.3-1.5 ug/kg, P90=1.46 ug/kg; tHg: N=3, detected 0.05-0.05 ug/kg, P90=0.04 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Sources

- [[sources/fda2026-infant-formula-product-testing-results]]
