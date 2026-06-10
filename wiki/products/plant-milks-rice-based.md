---
type: product-category
category: plant-milks-rice-based
hmtc_category: 5
hmtc_row: 7
label: "Plant milks, rice-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [iAs, Cd, Pb]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, rice]
primary_metals_of_concern: [iAs, Cd, Pb]
vulnerable_population: general_population
applicable_regulations: [eu2023_ias_rice_drinks_30]
evidence_fitness: EF-3
public_evidence_label: Approaching the bar (iAs summary-level)
review_state: phase3_part19
hmtc_threshold_status: approaching_iAs_dirty_p30_summary_level
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 4
---

# Plant Milks, Rice-Based

This page is HMTc Category 5 row 7. It now has a usable regulatory-versus-field-finding comparison for inorganic arsenic in finished rice-based drinks.

## Decision Snapshot

| Field                 | Status                                                                  |
| --------------------- | ----------------------------------------------------------------------- |
| Row state             | Species-specific occurrence and regulatory comparison available for iAs |
| Best current source   | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]           |
| Applicable regulation | [[regulations/eu2023-arsenic-rice-based-drinks]]                        |
| Computation readiness | Data-grounded for EU iAs comparison; Cd and Pb remain evidence gaps     |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/rice]]                        |
| HMTc use              | Strong evidence for iAs prioritization; not an HMTc threshold           |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-arsenic-rice-based-drinks]]: EU European Commission maximum level: 30 ug/kg iAs. Scope: non-alcoholic rice-based drinks. Basis: wet weight. | D'Amato 2026 reports 25 Italian rice-based beverages with iAs from 7 to 24 ug/kg; no sample exceeded 30 ug/kg. | Direct comparison available; matrix, analyte species, and unit basis match. Not an HMTc certification limit. | [[regulations/eu2023-arsenic-rice-based-drinks]]; [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |
| [[metals/arsenic-total]] (tAs) | No federal product-specific limit loaded in this crosswalk. | D'Amato 2026 reports total arsenic from 9 to 58 ug/kg in rice-based beverages; total arsenic is context only and is not interchangeable with inorganic arsenic. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/damato2026-inorganic-arsenic-rice-based-beverages]] analyzed 25 Italian-market rice-based beverages collected from April 2022 to March 2023. The study used HPLC-ICP-MS speciation and reported no left-censored iAs values, which makes it unusually useful for comparison-layer work.

The same source reports consumer-only dietary exposure estimates that are important for risk prioritization: toddlers consuming rice drinks averaged 0.27 ug/kg bw/day with MOE 0.2, while other children averaged 0.13 ug/kg bw/day with MOE 0.5. These are exposure-risk context, not product-level compliance values.

## Ingredient Handling

The iAs measurements are finished rice-based beverages. They should not be copied into [[ingredients/rice]] as ingredient-only values. The rice ingredient node can link to this source as related finished-product evidence.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in rice-based product. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-inorganic\|iAs]] | rice-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | [[regulations/eu2023-arsenic-rice-based-drinks]]: 30 ppb (wet weight) | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | rice-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/lead\|Pb]] | rice-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|D'Amato et al. 2026]]. *Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment*, Foods | 2026 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/gu2020-arsenic-rice-infant-food-australia\|Gu et al. 2020]]. *Arsenic Concentrations and Dietary Exposure in Rice-Based Infant Food in Australia*, International Journal of Environmental Research and Public Health 17(2):415 | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/brombach2017-methylmercury-european-commercial-rice\|C-C et al. 2016]]. *Methylmercury varies more than one order of magnitude in commercial European rice*, Food Chemistry | 2016 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Marques 2021 (n=42 plant-drinks; rice-drink subset count pending) | 1 summary |
| Cd | — | — | 0 |
| tAs | — | Da Mato 2026 (n=25 summary), Gu 2020 (n=3 triangulation) | 2 summary |
| **iAs** | — | **Da Mato 2026 (n=25 summary)**, Gu 2020 (n=3 triangulation) | **2 summary + EU cap** |
| MeHg | — | Brombach 2017 ingredient cascade | 1 cascade |
| tHg | — | Marques 2021 (not-detected) | 1 summary |
| Ni | — | Marques 2021 | 1 summary |
| Al, Cr-VI, Sn | — | — | 0 |
