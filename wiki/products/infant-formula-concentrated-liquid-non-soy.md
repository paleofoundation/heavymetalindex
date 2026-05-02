---
title: Infant Formula, Concentrated Liquid (Non-Soy)
type: product-category
category: infant-formula-concentrated-liquid-non-soy
category_label: Infant and Child Foods
base_taxonomy: infant-formula-concentrated-liquid
variant_type: bridge
primary_metals_of_concern: [tAs, Pb, Cd, tHg, Al]
vulnerable_population: infants-0-12mo
audience: [regulator, educator, consumer, app]
review_state: draft
updated: 2026-04-29
sources: 2
---

# Infant Formula, Concentrated Liquid (Non-Soy)

<!-- BEGIN: hmi-product-crosswalk -->
## Regulatory Crosswalk Vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This decision surface mirrors [[products/regulatory-crosswalk-field-findings]]. It puts external regulatory context next to field findings so standards developers, regulators, retailers, brands, and legal teams can see what is comparable, what is blocked, and what must not be treated as an HMTc limit.

| Metal | External regulatory context | Field findings | Comparison status | HMTc use | Sources |
| --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/cadmium]] (Cd); [[metals/arsenic-total]] (tAs); [[metals/mercury-total]] (tHg) | No product-specific value loaded in this crosswalk. | tAs: N=8, detected 0.2-0.4 ug/kg, P90=0.4 ug/kg; Pb: N=8, detected 0.05-0.4 ug/kg, P90=0.4 ug/kg; Cd: N=8, detected 0.08-0.5 ug/kg, P90=0.43 ug/kg; tHg: N=8, not detected, P90=0 ug/kg | No matched FDA formula action level loaded; do not compare formula occurrence values to processed-baby-food action levels. | Occurrence evidence for HMTc review; not a regulatory exceedance table. | [[sources/fda2026-infant-formula-product-testing-results]] |

<!-- END: hmi-product-crosswalk -->

_Stub page. This bridge node exists for sources that report concentrated liquid milk-based formula, which is not one of the locked HMTc Category 1 rows but is part of the formula evidence graph._

## Current Source Links

- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian concentrated liquid milk-based formula summary: Al mean 131 ng/g and max 796 ng/g, Cd mean 0.13 ng/g and max 2.03 ng/g, and Pb mean 0.32 ng/g and max 0.85 ng/g, all as consumed.
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]] — FDA FY2023-FY2025 concentrated liquid cow-milk-based formula rows, expressed as prepared for feeding.

## FDA 2026 Prepared-For-Feeding Context

The FDA 2026 special survey includes 8 concentrated liquid cow-milk-based formula samples per analyte. These are retained as bridge context only; they are not assigned to powdered or ready-to-feed locked Category 1 rows. The extraction uses nearest-rank percentiles and treats `<LOD` as 0 for a lower-bound summary.

| Metal | N | Detected | p50 | p90 | p100/max | Use note |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| [[metals/arsenic-total|tAs]] | 8 | 8 | 0.3 | 0.4 | 0.4 | Total arsenic; prepared for feeding. |
| [[metals/lead|Pb]] | 8 | 8 | 0.3 | 0.4 | 0.4 | Prepared for feeding. |
| [[metals/cadmium|Cd]] | 8 | 4 | 0 | 0.5 | 0.5 | Prepared for feeding. |
| [[metals/mercury-total|tHg]] | 8 | 0 | 0 | 0 | 0 | Total mercury; not MeHg. |

## Row Mapping

Do not merge these rows into powdered formula or ready-to-feed formula without explicit basis normalization. Use as format-context evidence unless a future taxonomy adds concentrated liquid formula as a certification row.
