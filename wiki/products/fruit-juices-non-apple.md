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
evidence_fitness: EF-3
public_evidence_label: Path A thin (iAs grape-category bridge); approaching (Pb)
review_state: phase3_part19
hmtc_threshold_status: thin_iAs_dirty_p30_grape_bridge
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 5
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
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2016 grape-category rows provide 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. FDA TDS grapefruit rows report total arsenic only and remain separate. | No conversion offered. Regulatory ceiling is on inorganic arsenic; cited occurrence row reports total arsenic. The two are toxicologically and regulatorily distinct. See the page [Methodology](#methodology) section for the non-substitutability rule on speciation. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-apple fruit juice. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | non-apple (summary-only / supporting context) | median 0 ppb (1 source); highest reported 0 ppb | 0% detected (0/3, Fda 2022, FDA TDS prepared food/composite; reported concentration values retained) | [[regulations/fda2022-draft-lead-juice]]: 20 ppb (single-strength ready-to-drink juice) | 1 cited | low (1-2 sources) | FDA TDS prepared food/composite; reported concentration values retained |
| [[metals/arsenic-inorganic\|iAs]] | non-apple (summary-only / supporting context) | mean 12.91 ppb (1 source); highest reported 49.6 ppb | 100% detected (58/58, Fda 2016, ready-to-drink-juice-1-ml-1-g) | [[regulations/eu2023-contaminants-maximum-levels]]: 20 ppb (wet weight or reconstituted juice) | 1 cited | low (1-2 sources) | ready-to-drink-juice-1-ml-1-g |
<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] — Grape and grape-containing juice category n=58 quantified iAs sample-level (primary admitted-pool source for the at-bar-percentile-math iAs cell; partial-fit grape-category bridge for broader non-apple-juice subcategory).
- [[sources/fda2018-lead-in-juice-fy2005-fy2018]] — FDA longitudinal Pb in juice FY2005-FY2018 (sample-level Pb extraction pending; would close the Pb cell to sample-level).
- [[sources/fda2022-tds-elements-fy2018-fy2020]] — FDA TDS grapefruit juice n=3 small-N (Pb=0, tAs=0 reported; clean baseline for grapefruit subset).
- [[sources/fda2022-draft-lead-juice]] — FDA 2022 draft action level Pb 20 ppb in other juice.
- [[sources/weldegebriel2025-ethiopia-packaged-fruit-juice-metals]] — Ethiopia n=80 packaged fruit juices including non-apple subset; Pb/Cd/Cr/Ni sample-level (per-row extraction pending).

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | FDA 2018 (extraction pending), FDA 2022 TDS grapefruit n=3, Weldegebriel 2025 (extraction pending) | FDA 2022 draft cap | 3 distribution + 1 cap |
| Cd | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| tAs | FDA 2016 grape co-measurement, FDA 2022 TDS grapefruit | — | 2 summary |
| **iAs** | **FDA 2016 grape category (n=58 quantified)** + FDA 2022 TDS grapefruit (no iAs row) | EU cap | **1 distribution sample-level + 1 cap** |
| Ni | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| Cr-total | Weldegebriel 2025 (extraction pending) | — | 1 distribution |
| Al, MeHg, tHg, Cr-VI, Sn | data gap | — | 0 |
