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
evidence_fitness: EF-3
public_evidence_label: At readiness bar (iAs); approaching (Pb)
review_state: phase3_part19
hmtc_threshold_status: at_bar_iAs_dirty_p30
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 5
---

# Fruit Juices, Apple-Containing

This page is HMTc Category 5 row 2 from the locked beverage architecture. It exists as a wiki node so evidence, regulatory context, ingredient routing, and future field findings have a stable place to land.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | At readiness bar for iAs (n=94 sample-level + regulatory cap); approaching for Pb (3-source corpus, sample-level extraction pending). |
| Category hub | [[products/category-5-beverages]] |
| Cat 5 master | [[products/category-5-beverages-master]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | iAs cell publishable as Path A under Part 19 dirty p30 = 3.0 ppb (n=94 from FDA 2011 single-strength apple juice). Other cells routing or evidence-tracking only. |

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
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in apple-containing fruit juice. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | apple-containing (direct row-fit) | mean 4.09 ppb (1 source); highest reported 9.8 ppb | 97% detected (91/94, Fda 2011, single-strength-juice) | [[regulations/fda2023-inorganic-arsenic-apple-juice]]: 10 ppb (juice) | 1 cited | low (1-2 sources) | single-strength-juice |
| [[metals/lead\|Pb]] | apple-containing (summary-only / supporting context) | median 1.5 ppb (1 source); highest reported 2.7 ppb | 67% detected (2/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | [[regulations/fda2022-draft-lead-juice]]: 10 ppb (single-strength ready-to-drink juice) | 1 cited | low (1-2 sources) | FDA TDS prepared food/composite; reported concentration values retained |
<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/fda2011-apple-juice-arsenic-speciation]] — n=94 single-strength apple juice; iAs sample-level (primary admitted-pool source for the at-bar iAs cell).
- [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] — Grape-and-grape-containing juice subset (n=58 quantified iAs cells); supporting context for fruit-juices-apple-containing's apple-grape blend subset.
- [[sources/fda2018-lead-in-juice-fy2005-fy2018]] — FDA longitudinal Pb in juice FY2005-FY2018; sample-level Pb extraction pending for the approaching Pb cell.
- [[sources/fda2022-tds-elements-fy2018-fy2020]] — FDA TDS Pb/Cd/tAs/Ni in apple juice (n=3 small-N).
- [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] — Ethiopia n=80 packaged fruit juices including apple-containing subset; Pb/Cd/Cr/Ni sample-level.

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | FDA 2018, FDA 2022 TDS (n=3), Weldegebriel 2025 (n=80; apple-subset extraction pending) | FDA 2022 draft cap | 3 distribution + 1 cap |
| Cd | FDA 2022 TDS (n=3), Weldegebriel 2025 | — | 2 distribution |
| tAs | FDA 2011 (n=94 co-measured), FDA 2022 TDS (n=3) | — | 2 distribution |
| **iAs** | **FDA 2011 (n=94)** + FDA 2016 grape-subset context (n=58) | FDA CTZ + EU cap | **2 distribution + 2 caps** |
| Ni | Weldegebriel 2025 (n=80) | — | 1 distribution |
| Cr-total | Weldegebriel 2025 (n=80) | — | 1 distribution |
| Al, MeHg, tHg, Cr-VI, Sn | data gap | — | 0 |
