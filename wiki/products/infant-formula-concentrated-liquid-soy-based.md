---
type: product-category
category: infant-formula-concentrated-liquid-soy-based
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

# Infant Formula, Concentrated Liquid (Soy-Based)

_Stub page. This bridge node exists for sources that report concentrated liquid soy-based formula, which is not one of the locked HMTc Category 1 rows but is part of the formula evidence graph._

## Current Source Links

- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] — Canadian concentrated liquid soy-based formula summary: Al mean 706 ng/g and max 1047 ng/g, Cd mean 1.12 ng/g and max 1.70 ng/g, and Pb mean 1.19 ng/g and max 1.54 ng/g, all as consumed.
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]] — FDA FY2023-FY2025 concentrated liquid soy-based formula rows, expressed as prepared for feeding.

## FDA 2026 Prepared-For-Feeding Context

The FDA 2026 special survey includes 3 concentrated liquid soy-based formula samples per analyte. These are retained as bridge context only; they are not assigned to powdered or ready-to-feed locked Category 1 rows. The extraction uses nearest-rank percentiles and treats `<LOD` as 0 for a lower-bound summary.

| Metal | N | Detected | p50 | p90 | p100/max | Use note |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| [[metals/arsenic-total|tAs]] | 3 | 3 | 0.6 | 0.7 | 0.7 | Total arsenic; prepared for feeding. |
| [[metals/lead|Pb]] | 3 | 3 | 0.3 | 0.4 | 0.4 | Prepared for feeding. |
| [[metals/cadmium|Cd]] | 3 | 3 | 1.3 | 1.5 | 1.5 | Prepared for feeding. |
| [[metals/mercury-total|tHg]] | 3 | 1 | 0 | 0.05 | 0.05 | Total mercury; not MeHg. |

## Row Mapping

Do not merge these rows into powdered formula or ready-to-feed formula without explicit basis normalization. Use as format-context evidence unless a future taxonomy adds concentrated liquid formula as a certification row.
