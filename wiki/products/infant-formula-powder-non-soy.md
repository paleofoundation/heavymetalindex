---
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 5
---

# Infant Formula, Powder (Non-Soy)

This page is a structural scaffold for HMTc Category 1 row 1. FDA market-basket testing now provides row-specific public data for powder non-soy formula on lead, cadmium, total arsenic, and total mercury; FSA/Fera monitoring adds as-sold formula evidence for a broader ICP-MS panel, while chromium VI and methylmercury remain pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 5 A-tier / 0 B-tier sources.
- Next ingest target: structured extraction of the promoted FSA/Fera formula table plus sources that resolve [[metals/chromium|Cr-VI]] and methylmercury for non-soy powdered infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73% of cow-based formula items and Cd in 44% of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

FDA FY2023-FY2025 market-basket testing included 240 powder non-soy formula samples routed to this row, combining 230 cow milk-based powder samples and 10 amino acid-based powder samples. In this routed group, detected values ranged from 0.1 to 4.7 ppb for total arsenic, 0.1 to 0.6 ppb for lead, 0.1 to 1.3 ppb for cadmium, and 0.07 to 0.3 ppb for total mercury, with non-detects present for all four metals. [[sources/fda2026-infant-formula-product-testing-results]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

The FSA/Fera 2014 UK survey reported powdered infant formula as sold in Table 4b using a 16-element ICP-MS panel, including aluminum, nickel, cadmium, lead, total arsenic, total mercury, tin, and inorganic arsenic follow-up where total arsenic triggered speciation. Soy-labeled powdered formulas in the same table are routed to the soy row, so this source supports product-form evidence without collapsing protein-source categories. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Non-soy powder still lacks row-specific public evidence for [[metals/chromium|Cr-VI]] and methylmercury. <!-- UNCITED: Need non-soy powdered infant formula sources that measure Cr-VI and MeHg while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy]]

The FDA workbook resolves powder versus ready-to-feed and separates cow milk-based, soy-based, and amino acid-based formulas, making it the first promoted source suitable for this row's product-form and protein-source routing. [[sources/fda2026-infant-formula-product-testing-results]]

The FSA/Fera survey also resolves powder versus ready-to-feed formula, but its product labels should be used only for row routing and source traceability, not for current brand comparison. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for non-soy powdered formula beyond product form and protein source should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model can use the FDA source as public row-level evidence for powder non-soy formula on [[metals/lead|Pb]], [[metals/cadmium|Cd]], total arsenic, and total mercury. It should keep brand-level inference disabled because the public workbook is anonymized, and it should keep Al, Ni, Cr-VI, Sn, iAs, and MeHg unresolved until row-specific evidence exists. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=240, detected 0.1-4.7 ug/kg, P90=1.4 ug/kg; Pb: N=240, detected 0.1-0.6 ug/kg, P90=0.4 ug/kg; Cd: N=240, detected 0.1-1.3 ug/kg, P90=0.4 ug/kg; tHg: N=240, detected 0.07-0.3 ug/kg, P90=0 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

See [[products/regulatory-crosswalk-field-findings]] for the full cross-category comparison layer and review rules.

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

Regulatory crosswalk is summarized above; scope-specific enforcement events remain pending. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

No row-specific regulatory enforcement event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Sources

- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/fda2026-infant-formula-product-testing-results]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
