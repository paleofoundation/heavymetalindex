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
## HMTc Evidence Summary (Part 19 clean/dirty)

<!-- audience: regulator, educator, app -->

This block reports the candidate certification (CC) status for each of the 10 HMT&C analytes under CLAUDE.md Part 19 (clean p90 / dirty p30, both alongside p100). Per the locked Step 0 architecture, plant-milks-non-soy-non-rice is the **clean_benchmark** subcategory paired against plant-milks-soy-based and plant-milks-rice-based as contamination platforms. Per Part 19, clean/dirty is per-analyte empirical: most measured analytes here are expected to be clean (lower than the soy or rice contamination platforms).

Marques 2021 (Spanish ICP-MS plant-drink survey including almond + oat drinks; composite samples) is the sole admitted-pool source. The Marques source page itself flags the table extraction as "marker output noisy; numeric Pb table cells need source-table review before threshold use" — so summary-level values must carry an extraction-quality caveat. Marques did NOT measure Cd, Al, iAs, tAs, or Sn in the plant-drink panel, leaving those cells as gaps. The almond+oat subset within Marques 2021 is composites; subset n is small (~3-6 composites typical for this study design), below the 10-sample defensibility floor.

Any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap. No federal or EU caps are loaded for plant-milks-non-soy-non-rice as a subcategory.

| Metal | Clean/dirty | Standards target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean | summary clean p90 candidate from Marques 2021 (Pb detected in 1 non-organic oat drink among ~almond+oat composites; numeric value pending source-table review) | TBD pending source-table review | small | 1 | low | Path A thin (n_a_tier=1, single source). Marques 2021 detection in non-organic oat drink only; this is the dominant clean-benchmark Pb signal. Closing requires sample-level Pb extraction from a 2nd source. |
| [[metals/cadmium]] (Cd) | data gap | — | — | 0 | 0 | data gap | Marques 2021 did not measure Cd in the plant-drink panel. Closing requires direct almond/oat/coconut Cd measurement. |
| [[metals/arsenic-total]] (tAs) | data gap | — | — | 0 | 0 | data gap | Not measured by Marques. Almond and oat are not known iAs accumulators (rice is); expected to be low. |
| [[metals/arsenic-inorganic]] (iAs) | data gap | — | — | 0 | 0 | data gap | Not measured by Marques. The non-rice plant-milk subset would be a useful clean comparator to plant-milks-rice-based at-the-bar iAs. |
| [[metals/methylmercury]] (MeHg) | data gap | — | — | 0 | 0 | data gap | No methylation pathway in nut/oat matrix; biologically unexpected. |
| [[metals/mercury-total]] (tHg) | clean | <LOD baseline (Marques 2021 reports Hg not detected across all milks and plant-based drinks) | <LOD | small | 1 | low | Path A thin clean baseline. The not-detected finding across the survey is the cleanest Hg evidence in Cat 5 plant milks. |
| [[metals/nickel]] (Ni) | clean (small) | summary clean p90 candidate from Marques 2021 plant-drinks subset; subset values pending source-table review | TBD | small | 1 | low | Path A thin. Marques 2021 measured Ni; subset values for almond+oat composites pending extraction. |
| [[metals/aluminum]] (Al) | data gap | — | — | 0 | 0 | data gap | Not measured by Marques. Oat is reportedly a low-Al ingredient; coconut is unknown for Al. Compare to plant-milks-soy-based (Al p100=1822 ppb dominant); expected clean here but no measurement. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | <LOD by inference for the milk-like fraction; direct measurement absent | — | 0 (corpus); 1 (inference cascade from Hernandez 2019 + Saraiva 2021) | 1 | low | Almond/oat/coconut milks are milk-like neutral-pH protein-or-fat-containing matrices that inherit Cr(VI)<LOD inference. Direct measurement absent. |
| [[metals/tin]] (Sn) | data gap | — | — | 0 | 0 | data gap | Modern almond/oat/coconut milks are aseptic-pack; canned-Sn-leach context not applicable. |
| Uranium (U) — non-HMTc context | clean (not detected) | <LOD baseline (Marques 2021) | <LOD | small | 1 | low | Marques 2021 measured U as part of toxic-element panel; not detected. Reference for completeness; U is not in the HMT&C 10-analyte set. |

**Headline cells**: Pb (1 detection in non-organic oat drink) and tHg (not detected) are the only Path A signals; both Path A thin with single-source extraction-quality caveat. The composites + small subset + noisy-table-extraction triad means even these cells are weak. Closing 8 of 10 analyte cells (the data gaps) requires multi-element direct surveys of almond/oat/coconut beverages — a clean-benchmark target paper for the contamination-platform comparison.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/marques2021-trace-elements-milks-plant-based-drinks]] — Spanish ICP-MS plant-drink survey including almond + oat drinks; Pb (1 detection in non-organic oat drink), tHg (not detected), U (not detected), Ni measured. Composite-sample design with extraction-quality caveat. Sole admitted-pool source.

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Marques 2021 (Pb detected in 1 non-organic oat drink composite) | 1 summary |
| Cd, tAs, iAs, MeHg, Al, Sn | — | — | 0 (Marques didn't measure) |
| tHg | — | Marques 2021 (not detected baseline) | 1 summary |
| Ni | — | Marques 2021 (subset values pending source-table review) | 1 summary |
| Cr-VI | — | inference cascade from Hernandez/Saraiva chemistry (milk-like matrix) | 1 cascade |
