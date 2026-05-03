---
type: product-category
category: infant-formula-rtf-liquid-non-soy
hmtc_row: 3
label: "Infant formula, RTF liquid (non-soy)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 3
---

# Infant Formula, RTF Liquid (Non-Soy)

This page is a structural scaffold for HMTc Category 1 row 3. FDA market-basket testing now provides ready-to-feed non-soy public data for lead, cadmium, total arsenic, and total mercury; FSA/Fera monitoring adds as-sold ready-to-feed formula evidence for a broader ICP-MS panel, while chromium VI and methylmercury remain pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 3 A-tier / 0 B-tier sources.
- Next ingest target: structured extraction of the promoted FSA/Fera formula table plus sources that resolve [[metals/chromium|Cr-VI]] and methylmercury for non-soy ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-rtf-liquid-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

FDA FY2023-FY2025 market-basket testing included 20 ready-to-feed cow milk-based samples routed to this row. In this subgroup, detected values ranged from 0.3 to 3.0 ppb for total arsenic, 0.2 to 0.5 ppb for lead, and 0.09 to 0.7 ppb for cadmium; total mercury was not detected in the subgroup. [[sources/fda2026-infant-formula-product-testing-results]]

The FSA/Fera 2014 UK survey reported ready-to-feed liquid infant formula as sold in Table 4a using a 16-element ICP-MS panel. The extracted Table 4a products do not identify a soy-based ready-to-feed subgroup, so this source updates the RTF liquid evidence base here without supporting the RTF soy row. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Ready-to-feed-specific evidence for [[metals/chromium|Cr-VI]] and methylmercury remains pending. <!-- UNCITED: Need non-soy ready-to-feed liquid infant formula sources that measure Cr-VI and MeHg and distinguish ready-to-feed liquid from powder and concentrated liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The FDA workbook resolves ready-to-feed liquid formula separately from powder and concentrated liquid formula, making it the first promoted source suitable for this row's product-form and protein-source routing. [[sources/fda2026-infant-formula-product-testing-results]]

The FSA/Fera survey also separates ready-to-feed liquid formula from powdered formula, reinforcing that liquid and powder products should not be merged during ingest. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for non-soy ready-to-feed formula beyond product form and protein source should be documented only after sources distinguish formulation, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate ready-to-feed liquid formula from powdered and concentrated liquid formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model can use the FDA source as public row-level evidence for ready-to-feed non-soy formula on [[metals/lead|Pb]], [[metals/cadmium|Cd]], total arsenic, and total mercury. It should keep brand-level inference disabled because the public workbook is anonymized, and it should keep Al, Ni, Cr-VI, Sn, iAs, and MeHg unresolved until row-specific evidence exists. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=20, detected 0.3-3 ug/kg, P90=1.21 ug/kg; Pb: N=20, detected 0.2-0.5 ug/kg, P90=0.41 ug/kg; Cd: N=20, detected 0.09-0.7 ug/kg, P90=0.6 ug/kg; tHg: N=20, not detected, P90=0 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2026-infant-formula-product-testing-results]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
