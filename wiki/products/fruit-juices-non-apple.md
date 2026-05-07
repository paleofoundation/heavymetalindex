---
type: product-category
category: fruit-juices-non-apple
hmtc_category: 5
hmtc_row: 1
label: "Fruit juices, non-apple"
base_taxonomy: fruit-juices
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice]
primary_metals_of_concern: [Pb, iAs]
vulnerable_population: general_population
applicable_regulations: [fda2022_draft_pb_other_juice_20, fda2004_juice_haccp_pb_50]
evidence_fitness: EF-5
public_evidence_label: Data gap
review_state: draft
hmtc_threshold_status: data_gap
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 2
---

# Fruit Juices, Non-Apple

This page is HMTc Category 5 row 1 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction started |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

FDA TDS food 100 routes to this row as bottled/cartoned grapefruit juice. FDA 2016 routes to this row as grape and grape-containing juice inorganic-arsenic context. These source summaries are useful occurrence context, but neither source is a full non-apple juice distribution. [[sources/fda2022-tds-elements-fy2018-fy2020]] [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]]

| Analyte | Evidence scope | Reported value | Source-use caveat |
| --- | --- | --- | --- |
| [[metals/lead|Lead]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Small-N single-food route; not an aggregate non-apple juice distribution. |
| [[metals/arsenic-total|Total arsenic]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Total arsenic only; do not use as inorganic arsenic evidence. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2016 grape and grape-containing juice category | 58 quantified iAs cells from 61 source rows; quantified-cell p50 11.2 ppb; p90 22.6 ppb; p95 25.6 ppb; max 49.6 ppb | Grape-category bridge context; includes grape blends, apple-grape blends, and one FDA-designated white-grape-peach row; not a full non-apple juice aggregate. |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 20 ug/kg Pb. Scope: other single-strength juices and juice blends. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/fda2004-juice-haccp-lead]]: Federal FDA guidance hazard-control level: 50 ug/kg Pb. Scope: ready-to-drink fruit juices including fruit nectars. Basis: ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Current older juice guidance context; direct compliance interpretation remains scope-limited. | [[regulations/fda2004-juice-haccp-lead]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows. | EU maximum level loaded; the TDS grapefruit row is below 30 ug/kg but is a single small-N food route rather than a full non-apple juice distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2016 grape-category rows provide 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. FDA TDS grapefruit rows report total arsenic only and remain separate. | EU maximum level loaded; the FDA grape category is species-specific occurrence context but not a full non-apple juice aggregate. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

This row's standards target is **clean-platform P90**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean-platform P90 | 1 source; 1 distribution source; 0 summary sources; N=3 | Below confidence gate: only one fit distribution source is loaded. | 20 ug/kg (fda2022_draft_pb_other_juice_20) |
| [[metals/arsenic-total]] (tAs) | clean-platform P90 | 1 source; 1 distribution source; 0 summary sources; N=3 | Below confidence gate: only one fit distribution source is loaded. | No loaded cap |
| [[metals/arsenic-inorganic]] (iAs) | clean-platform P90 | 1 source; 1 distribution source; 0 summary sources; N=58 | Below confidence gate: only one fit distribution source is loaded. | 20 ug/kg (eu2023_ias_fruit_juice_20) |

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]]
