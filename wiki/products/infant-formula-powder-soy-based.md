---
type: product-category
category: infant-formula-powder-soy-based
hmtc_row: 2
label: "Infant formula, powder (soy-based)"
base_taxonomy: infant-formula-powder
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: split_from_base
ingredient_targets: [infant-formula-powder, soy-protein-isolate, vitamin-mineral-premix]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: contamination_platform
  scope: within_row
  partners:
    - slug: infant-formula-powder-non-soy
      partner_type: row
      role_of_partner: clean_benchmark
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 5
---

# Infant Formula, Powder (Soy-Based)

This page is a structural scaffold for HMTc Category 1 row 2. FDA market-basket testing now provides row-specific public data for soy-based powder formula on lead, cadmium, total arsenic, and total mercury; FSA/Fera monitoring adds as-sold soy powder evidence for a broader ICP-MS panel, while chromium VI and methylmercury remain pending.

## Scaffold Status

- Page state: structural scaffold, not synthesis.
- Source coverage: 5 A-tier / 0 B-tier sources.
- Next ingest target: structured extraction of the promoted FSA/Fera formula table plus sources that resolve [[metals/chromium|Cr-VI]] and methylmercury for soy-based powdered infant formula.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Row Relationship

This row is the contamination-platform counterpart to [[products/infant-formula-powder-non-soy]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63% of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 84% of soy-based formula items and Cd in 91% of soy-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

FDA FY2023-FY2025 market-basket testing included 38 powder soy-based formula samples routed to this row. In this subgroup, detected values ranged from 0.6 to 2.2 ppb for total arsenic, 0.1 to 1.1 ppb for lead, 0.4 to 1.4 ppb for cadmium, and 0.08 to 0.3 ppb for total mercury; mercury was not detected in 34 of the 38 samples. [[sources/fda2026-infant-formula-product-testing-results]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy]]

The FSA/Fera 2014 UK survey reported powdered infant formula as sold in Table 4b and includes soy-labeled powdered formula products such as Infasoy and Wysoy. This supports row-specific soy powder routing for aluminum, nickel, cadmium, lead, total arsenic, total mercury, tin, and triggered inorganic arsenic follow-up, but not brand ranking or current-market claims. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Soy-powder-specific evidence remains pending for [[metals/chromium|Cr-VI]] and methylmercury. <!-- UNCITED: Need soy-based powdered infant formula sources that measure Cr-VI and MeHg while distinguishing soy-based powder from non-soy powder and ready-to-feed liquid formula. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates soy-based formulas from cow-based and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy]]

The FDA workbook resolves powder versus ready-to-feed and separates soy-based powder from cow milk-based and amino acid-based powder, making it the first promoted source suitable for this row's product-form and protein-source routing. [[sources/fda2026-infant-formula-product-testing-results]]

The FSA/Fera survey also preserves soy powder as a distinct product label within powdered formula, which keeps the contamination-platform row from being diluted by non-soy powder data. [[sources/fera2014-fsa-metals-infant-foods-formula]]

Potential variance drivers for soy-based powdered formula beyond product form and protein source should be documented only after sources distinguish soy inputs, mineral premix, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate soy-based powder from non-soy powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model can use the FDA source as public row-level evidence for soy-based powder formula on [[metals/lead|Pb]], [[metals/cadmium|Cd]], total arsenic, and total mercury. It should keep brand-level inference disabled because the public workbook is anonymized, and it should keep Al, Ni, Cr-VI, Sn, iAs, and MeHg unresolved until row-specific evidence exists. [[sources/fda2026-infant-formula-product-testing-results]]

## Regulatory Crosswalk vs Field Findings

This layer separates external regulatory values from observed field findings and from HMTc standards-development use. Regulatory values are context or caps; they are not automatically HMTc limits.

| Metal | Regulatory value | Regulatory status/scope | Current field finding | HMTc use |
|---|---:|---|---|---|
| Pb; Cd; tAs; tHg | No matched value loaded | no matched regulatory value loaded; No product-specific value loaded in this crosswalk. | tAs: N=38, detected 0.6-2.2 ug/kg, P90=1.43 ug/kg; Pb: N=38, detected 0.1-1.1 ug/kg, P90=0.5 ug/kg; Cd: N=38, detected 0.4-1.4 ug/kg, P90=1.2 ug/kg; tHg: N=38, detected 0.08-0.3 ug/kg, P90=0.024 ug/kg | Occurrence evidence for HMTc review; not a regulatory exceedance table. |

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
