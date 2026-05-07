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
primary_metals_of_concern: [Pb]
vulnerable_population: general_population
applicable_regulations: [fda2022_draft_pb_other_juice_20, fda2004_juice_haccp_pb_50]
evidence_fitness: EF-5
public_evidence_label: Data gap
review_state: draft
hmtc_threshold_status: data_gap
audience: [regulator, educator, consumer, app]
updated: 2026-05-01
sources: 1
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

FDA TDS food 100 routes to this row as bottled/cartoned grapefruit juice. These source summaries are useful occurrence context, but the sample size is three and the row is not a full non-apple juice distribution. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| Analyte | Evidence scope | Reported value | Source-use caveat |
| --- | --- | --- | --- |
| [[metals/lead|Lead]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Small-N single-food route; not an aggregate non-apple juice distribution. |
| [[metals/arsenic-total|Total arsenic]] | TDS 100 grapefruit juice, bottled/cartoned | N=3; all reported concentrations 0 ppb | Total arsenic only; do not use as inorganic arsenic evidence. |


<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2022-draft-lead-juice]]: Federal FDA draft level, not final: 20 ug/kg Pb. Scope: other single-strength juices and juice blends. Basis: single-strength ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Draft context only. Do not present this value as a final federal limit or an HMTc threshold. | [[regulations/fda2022-draft-lead-juice]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/fda2004-juice-haccp-lead]]: Federal FDA guidance hazard-control level: 50 ug/kg Pb. Scope: ready-to-drink fruit juices including fruit nectars. Basis: ready-to-drink juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows; no inorganic-arsenic row is present for grapefruit juice. | Current older juice guidance context; direct compliance interpretation remains scope-limited. | [[regulations/fda2004-juice-haccp-lead]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 30 ug/kg Pb. Scope: fruit juices, fruit juices from concentrate, concentrated fruit juices, and fruit nectars other than exclusively from berries and other small fruits. Basis: wet weight or reconstituted juice. | FDA TDS FY2018-FY2020 grapefruit juice rows provide N=3 bottled/cartoned grapefruit-juice results: Pb was reported as 0 ppb in all three rows. | EU maximum level loaded; the TDS grapefruit row is below 30 ug/kg but is a single small-N food route rather than a full non-apple juice distribution. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA TDS reports total arsenic for grapefruit juice, not iAs; no inorganic-arsenic row is present for grapefruit juice. | EU maximum level loaded; direct comparison remains blocked until beverage occurrence sources are promoted with inorganic arsenic species. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

## Sources

- [[sources/fda2022-tds-elements-fy2018-fy2020]]
