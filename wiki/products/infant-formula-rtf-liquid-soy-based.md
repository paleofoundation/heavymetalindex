---
type: product-category
category: infant-formula-rtf-liquid-soy-based
hmtc_row: 4
label: "Infant formula, RTF liquid (soy-based)"
base_taxonomy: infant-formula-rtf-liquid
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
ingredient_targets: [infant-formula-rtf-liquid, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-rtf-liquid-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Infant Formula, RTF Liquid (Soy-Based)

This page is a structural scaffold for HMTc Category 1 row 4. FDA market-basket testing now provides ready-to-feed soy-based public data for lead, cadmium, total arsenic, and total mercury; aluminum, nickel, chromium VI, tin, and row-level arsenic speciation evidence remain pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 2 A-tier / 0 B-tier sources.
- Next ingest target: formula-specific [[metals/aluminum|Al]], [[metals/nickel|Ni]], [[metals/chromium|Cr-VI]], [[metals/tin|Sn]], inorganic arsenic, and methylmercury data for soy-based ready-to-feed liquid infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the contamination-platform counterpart to [[products/infant-formula-rtf-liquid-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations; in its primary-protein-source subgrouping, Pb was detected in 84% of soy-based formula items and Cd in 91% of soy-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

FDA FY2023-FY2025 market-basket testing included 3 ready-to-feed soy-based samples routed to this row. In this subgroup, detected values ranged from 0.9 to 1.3 ppb for total arsenic, 0.2 to 0.4 ppb for lead, 0.8 to 1.1 ppb for cadmium, and 0.08 ppb for total mercury in one sample. [[sources/fda2026-infant-formula-product-testing-results]]

Ready-to-feed-specific evidence for [[metals/aluminum|Al]], [[metals/nickel|Ni]], [[metals/chromium|Cr-VI]], [[metals/tin|Sn]], inorganic arsenic, and methylmercury remains pending. <!-- UNCITED: Need soy-based ready-to-feed liquid infant formula sources that measure Al, Ni, Cr-VI, Sn, iAs, and MeHg and distinguish ready-to-feed liquid from powder and concentrated liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates soy-based formulas from cow-based and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The FDA workbook resolves ready-to-feed liquid formula separately from powder and concentrated liquid formula, making it the first promoted source suitable for this row's product-form and protein-source routing. [[sources/fda2026-infant-formula-product-testing-results]]

Potential variance drivers for soy-based ready-to-feed formula beyond product form and protein source should be documented only after sources distinguish soy inputs, water inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate soy-based ready-to-feed liquid formula from non-soy ready-to-feed liquid formula and concentrated liquid formula and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model can use the FDA source as public row-level evidence for ready-to-feed soy-based formula on [[metals/lead|Pb]], [[metals/cadmium|Cd]], total arsenic, and total mercury. It should keep brand-level inference disabled because the public workbook is anonymized, and it should keep Al, Ni, Cr-VI, Sn, iAs, and MeHg unresolved until row-specific evidence exists. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=3, detected 0.9-1.3 ug/kg, P90=1.28 ug/kg; Pb: N=3, detected 0.2-0.4 ug/kg, P90=0.36 ug/kg; Cd: N=3, detected 0.8-1.1 ug/kg, P90=1.06 ug/kg; tHg: N=3, detected 0.08-0.08 ug/kg, P90=0.064 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/fda2026-infant-formula-product-testing-results]]
