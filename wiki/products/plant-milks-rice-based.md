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
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-arsenic-rice-based-drinks]]: EU European Commission maximum level: 30 ug/kg iAs. Scope: non-alcoholic rice-based drinks. Basis: wet weight. | D'Amato 2026 reports 25 Italian rice-based beverages with iAs from 7 to 24 ug/kg; no sample exceeded 30 ug/kg. | Direct comparison available because matrix, analyte species, and unit basis match; still not an HMTc certification limit. | [[regulations/eu2023-arsenic-rice-based-drinks]]; [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |
| [[metals/arsenic-total]] (tAs) | No federal product-specific limit loaded in this crosswalk. | D'Amato 2026 reports total arsenic from 9 to 58 ug/kg in rice-based beverages; total arsenic is context only and is not interchangeable with inorganic arsenic. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/damato2026-inorganic-arsenic-rice-based-beverages]] analyzed 25 Italian-market rice-based beverages collected from April 2022 to March 2023. The study used HPLC-ICP-MS speciation and reported no left-censored iAs values, which makes it unusually useful for comparison-layer work.

The same source reports consumer-only dietary exposure estimates that are important for risk prioritization: toddlers consuming rice drinks averaged 0.27 ug/kg bw/day with MOE 0.2, while other children averaged 0.13 ug/kg bw/day with MOE 0.5. These are exposure-risk context, not product-level compliance values.

## Ingredient Handling

The iAs measurements are finished rice-based beverages. They should not be copied into [[ingredients/rice]] as ingredient-only values. The rice ingredient node can link to this source as related finished-product evidence.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary (Part 19 clean/dirty)

<!-- audience: regulator, educator, app -->

This block reports the candidate certification (CC) status for each of the 10 HMT&C analytes under CLAUDE.md Part 19 (clean p90 / dirty p30, both alongside p100). Per the locked Step 0 architecture, plant-milks-rice-based is a **contamination_platform** subcategory (paired against plant-milks-non-soy-non-rice as the clean benchmark). Per Part 19, clean/dirty designations are **per-analyte empirical**, not fixed labels on the subcategory: an analyte is "dirty" when measured field values cluster above the parent-category clean benchmark (here, plant-milks-non-soy-non-rice) for that analyte. iAs, Cd, and Pb are the primary contamination concerns per the locked frontmatter and platform_metals; for iAs the dirty designation is empirically supported by Da Mato 2026 (mean iAs 15 ppb in rice plant-milk vs ~1-2 ppb expected in non-rice plant-milk — Marques 2021 did not measure iAs but the rice-vs-non-rice ingredient cascade is clear).

Any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap. Da Mato 2026 (n=25 Italian rice-based beverages, summary-level mean+median+range) is the primary admitted-pool source for iAs; Gu 2020 rice-milk-powder subset (n=3) provides triangulation context.

| Metal | Clean/dirty | Standards target | p100 | n | n_a_tier | Confidence | CC eligibility | Regulatory cap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | dirty | summary range from Marques 2021 | TBD (Marques 2021 reports 3 of 42 plant-drink samples Pb-detected; rice-drink subset count not enumerated) | small | 1 | low | Path A thin (summary-level). Marques 2021 detected Pb in 3 plant-drink samples including non-organic oat drink; rice-drink-specific Pb count requires source-table review. Closing requires sample-level Pb extraction or a 2nd direct rice-plant-milk Pb source. | No loaded cap; EU 2023/915 contemplates Pb in plant-based drinks. |
| [[metals/cadmium]] (Cd) | dirty | data gap | — | 0 | 0 | data gap | Closing requires direct Cd measurement in rice plant-milk. Rice ingredient-cascade Cd context exists (rice-cereal data; FDA 2024 baby food Cd p90 22 ppb in rice cereal) but rice-plant-milk Cd-specific is gap. | No loaded cap |
| [[metals/arsenic-total]] (tAs) | dirty | dirty p30 estimate ≈ 18 ppb (Da Mato 2026 mean=23, median=22, range 9-58); supplemental to iAs | 58 ppb | 25 | 2 | low | Path A summary-level. Da Mato 2026 reports tAs as supporting context for the iAs measurement; Gu 2020 rice-milk-powder n=3 triangulation confirms rice-plant-milk tAs profile. | No loaded cap. |
| [[metals/arsenic-inorganic]] (iAs) | **dirty** | **dirty p30 estimate ≈ 12 ppb** (Da Mato 2026 mean=15, median=15, range 7-24; range-based estimator p30 ≈ 7 + 0.30·(24-7) = 12.1; median-based normal-approximation gives p30 ≈ 12.8) | **24 ppb** | 25 | 2 | low | **Approaching the bar.** Path A summary-level (Da Mato 2026 publishes mean+median+range; no per-sample distribution). n_a_tier=2 = Da Mato 2026 (n=25 direct) + Gu 2020 (n=3 rice-milk-powder triangulation, below 10-sample defensibility floor). Confidence=low (2 studies; Part 6 threshold for medium is 3+ studies). max=24 ppb is **20% below EU 30 ppb cap** (substantial regulatory headroom). Closing to at-bar requires either (a) sample-level extraction from Da Mato 2026 supplementary tables, or (b) a 3rd direct rice-plant-milk iAs source (e.g., a U.S. or U.K. market survey). | **30 ppb** (EU 2023/915 non-alcoholic rice-based drinks) |
| [[metals/methylmercury]] (MeHg) | data gap (cascade from Brombach 2017 rice ingredient) | — | — | 0 | 0 | data gap | Brombach 2017 covers European rice ingredient MeHg (mean MeHg 1.91 ppb, range 0.11-6.45 ppb in n=87 rice samples); ingredient-cascade context for rice plant-milk but no direct rice-plant-milk MeHg measurement. Closing requires direct rice-drink MeHg speciation. |
| [[metals/mercury-total]] (tHg) | dirty | summary not-detected from Marques 2021 | — | small | 1 | low | Marques 2021 reports Hg not detected in plant-drink samples including rice drink. Brombach 2017 rice-ingredient tHg cascade context. Path A thin. |
| [[metals/nickel]] (Ni) | dirty | summary range from Marques 2021 | TBD | small | 1 | low | Marques 2021 includes Ni in essential/trace element panel; rice-drink subset count requires source-table review. |
| [[metals/aluminum]] (Al) | data gap | — | — | 0 | 0 | data gap | Closing requires direct Al measurement in rice plant-milk. de Paiva 2020 rice-flour subset n=3 cereal Al cascade context (group-mean 0.92-8.82 mg/kg in rice-flour-based infant cereal) suggests rice-plant-milk Al should be measurable; Da Mato 2026 did not measure Al. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | <LOD by inference for the milk-like fraction; direct measurement absent | — | 0 (corpus); 1 (inference cascade from Hernandez 2019 + Saraiva 2021) | 1 | low | Per CLAUDE.md Part 14 + Hernandez 2019 + Saraiva 2021 chemistry, food-matrix Cr is essentially Cr(III); rice-plant-milk is a milk-like (neutral-pH, protein-containing) matrix that inherits the Cr(VI)<LOD inference more strongly than acidic matrices. Direct rice-plant-milk Cr speciation absent from corpus. |
| [[metals/tin]] (Sn) | data gap | — | — | 0 | 0 | data gap | Modern rice plant-milk is aseptic-pack or shelf-stable carton; Sn-leach context applies only to canned subset (negligible market share). |

**iAs cell readiness summary**: Approaching the bar at Path A summary-level. The estimated p30 ≈ 12 ppb is 60% below the EU 30 ppb cap; even the p100 max of 24 ppb is 20% below cap. Cell will move to at-bar after either sample-level extraction from Da Mato 2026 (publishes 25 named samples; supplementary tables may contain per-sample values) or addition of a 3rd direct rice-plant-milk iAs source.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]] — n=25 Italian rice-based beverages; iAs/tAs summary-level (mean+median+range). Primary source for the approaching iAs cell.
- [[sources/gu2020-arsenic-rice-infant-food-australia]] — Rice-milk-powder subset n=3 triangulation (below 10-sample defensibility floor). Supports n_a_tier=2 with caveat.
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]] — Spanish ICP-MS plant-drink survey including rice drinks; Pb/Hg/Ni/U/V (no iAs measurement). Supports Pb/Hg/Ni cells.
- [[sources/brombach2017-methylmercury-european-commercial-rice]] — European rice ingredient MeHg/tHg cascade context for rice plant-milk subcategory.

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
