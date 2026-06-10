---
type: product-category
category: plant-milks-non-soy-non-rice
hmtc_category: 5
hmtc_row: 5
label: "Plant milks (almond, oat, coconut, other non-soy/non-rice)"
base_taxonomy: plant-milks
variant_type: clean_benchmark
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, almond, oat, coconut]
primary_metals_of_concern: [Al, Ni, Cd, iAs, Pb]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-3
public_evidence_label: Path A thin (Pb, tHg, Ni single-source)
review_state: phase3_part19
hmtc_threshold_status: thin_clean_benchmark_single_source
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 1
---

# Plant Milks (Almond, Oat, Coconut, Other Non-Soy/Non-Rice)

This page is HMTc Category 5 row 5. It remains a clean-benchmark candidate, but the current evidence is not strong enough to use it as a clean comparator without more occurrence extraction.

## Decision Snapshot

| Field                 | Status                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Row state             | Early source coverage only                                                                       |
| Best current source   | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                                  |
| Computation readiness | Not computation-ready; table values need source review                                           |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/almond]], [[ingredients/oat]], [[ingredients/coconut]] |
| HMTc use              | Hold as clean-benchmark hypothesis, not clean-benchmark evidence                                 |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb); [[metals/mercury-total]] (tHg); [[metals/uranium]] (U) | No federal product-specific limit loaded in this crosswalk. | Marques 2021 reports Pb detected in one non-organic oat drink and Hg/U non-detected in milks and plant-based drinks; numeric table extraction requires review. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/marques2021-trace-elements-milks-plant-based-drinks]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured almond, oat, rice, and soy drinks from the Spanish retail market. It supports routing and shows why non-soy/non-rice plant milks cannot simply be assumed clean, but it is not enough to populate thresholds.

## Ingredient Handling

Finished oat or almond beverage values belong on this product row. Ingredient-only almond, oat, coconut, or plant-milk values belong on the linked ingredient pages if those sources are later promoted.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in non-soy (cow milk-based) product. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | non-soy (cow milk-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/nickel\|Ni]] | non-soy (cow milk-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | non-soy (cow milk-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/arsenic-inorganic\|iAs]] | non-soy (cow milk-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | non-soy (cow milk-based) (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Marques 2021 (Pb detected in 1 non-organic oat drink composite) | 1 summary |
| Cd, tAs, iAs, MeHg, Al, Sn | — | — | 0 (Marques didn't measure) |
| tHg | — | Marques 2021 (not detected baseline) | 1 summary |
| Ni | — | Marques 2021 (subset values pending source-table review) | 1 summary |
| Cr-VI | — | inference cascade from Hernandez/Saraiva chemistry (milk-like matrix) | 1 cascade |
