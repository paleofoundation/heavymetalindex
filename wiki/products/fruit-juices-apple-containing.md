---
type: product-category
category: fruit-juices-apple-containing
hmtc_category: 5
hmtc_row: 2
label: "Fruit juices, apple-containing"
base_taxonomy: fruit-juices
variant_type: contamination_platform
provenance: category_5_step_0_locked
ingredient_targets: [fruit-juice, apple]
primary_metals_of_concern: [iAs, Pb]
vulnerable_population: general_population
applicable_regulations: [fda2023_ias_apple_juice_10, fda2022_draft_pb_apple_juice_10]
evidence_fitness: EF-5
public_evidence_label: Data gap
review_state: draft
hmtc_threshold_status: data_gap
audience: [regulator, educator, consumer, app]
updated: 2026-05-07
sources: 2
---

# Fruit Juices, Apple-Containing

This page is HMTc Category 5 row 2 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction started |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |

## Measured Values And Concentration Evidence

<!-- audience: regulator, educator, consumer, app -->

FDA TDS food 99 routes to this row as bottled apple juice for total-element context, and FDA 2011 apple-juice speciation rows provide routeable inorganic-arsenic occurrence evidence. These source summaries are useful occurrence context, but no aggregate HMTc threshold is published from one source alone. [[sources/fda2022-tds-elements-fy2018-fy2020]] [[sources/fda2011-apple-juice-arsenic-speciation]]

| Analyte | Evidence scope | Reported value | Source-use caveat |
| --- | --- | --- | --- |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | FDA 2011 single-strength apple juice | N=94; lower-bound p50 4.9 ppb; p90 7.7 ppb; p95 8.2 ppb; max 9.8 ppb | Species-specific FDA sample distribution; TR values treated as 0 ppb only for the documented lower-bound summary. |
| [[metals/lead|Lead]] | TDS 99 apple juice, bottled | N=3; p50 1.5 ppb; p90 2.46 ppb; p95 2.58 ppb; max 2.7 ppb | Small-N single-food route; draft FDA lead value remains draft-only context. |
| [[metals/arsenic-total|Total arsenic]] | TDS 99 apple juice, bottled | N=3; p50 2.4 ppb; p90 4 ppb; p95 4.2 ppb; max 4.4 ppb | Total arsenic only; do not use as inorganic arsenic evidence. |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: Federal FDA final action level: 10 ug/kg iAs. Scope: apple juice. Basis: juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb; TR values are treated as 0 ppb for the documented lower-bound deterministic summary. | Direct iAs field comparison is available; this 2011 FDA dataset is below the 10 ug/kg action level at p95 and max, but it is one historical source dataset and not an HMTc aggregate. | [[regulations/fda2023-inorganic-arsenic-apple-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2011 single-strength apple-juice speciation rows provide N=94 iAs lower-bound summary: p50 4.9 ppb, p90 7.7 ppb, p95 8.2 ppb, max 9.8 ppb; TR values are treated as 0 ppb for the documented lower-bound deterministic summary. | Direct iAs field comparison is available; this 2011 FDA dataset is below the 20 ug/kg EU fruit-juice maximum at p95 and max, but it is one historical source dataset and not an HMTc aggregate. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2011-apple-juice-arsenic-speciation]] |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 10 ug/kg Pb. Scope: single-strength apple juice. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS FY2018-FY2020 apple juice rows provide N=3 bottled apple-juice results: Pb median 1.5 ppb, P95 2.58 ppb, max 2.7 ppb; total arsenic max 4.4 ppb, with no apple-juice iAs speciation row. | EU maximum level loaded; the small-N apple-juice TDS row is below 30 ug/kg, but this is occurrence context and not an HMTc category distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary

<!-- audience: regulator, educator, app -->

This row's standards target is **contaminated-platform P10**. No listed metal currently has a publishable aggregate HMTc value at the 80-95% confidence gate. This generated summary does not publish final HMTc limits; it shows whether the evidence pool can support the row-standard percentile under the governing principles.

Clean benchmark rows use aggregate P90. Contaminated-platform rows use aggregate P10 by default, or P20 only when explicitly selected. Source-reported percentiles stay source context until admitted into the exact-row aggregate pool, and any final HMTc value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Standards target | Evidence pool | Confidence/readiness | Regulatory cap |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | contaminated-platform P10 | 1 source; 1 distribution source; 0 summary sources; N=3 | Below confidence gate: only one fit distribution source is loaded. | 10 ug/kg (fda2022_draft_pb_apple_juice_10) |
| [[metals/arsenic-total]] (tAs) | contaminated-platform P10 | 1 source; 1 distribution source; 0 summary sources; N=3 | Below confidence gate: only one fit distribution source is loaded. | No loaded cap |
| [[metals/arsenic-inorganic]] (iAs) | contaminated-platform P10 | 1 source; 1 distribution source; 0 summary sources; N=94 | Below confidence gate: only one fit distribution source is loaded. | 10 ug/kg (fda2023_ias_apple_juice_10) |

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/fda2022-tds-elements-fy2018-fy2020]]
- [[sources/fda2011-apple-juice-arsenic-speciation]]
