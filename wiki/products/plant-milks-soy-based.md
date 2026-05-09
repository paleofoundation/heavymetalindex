---
type: product-category
category: plant-milks-soy-based
hmtc_category: 5
hmtc_row: 6
label: "Plant milks, soy-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, soy]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-3
public_evidence_label: Approaching the bar (Al, Ni, Pb)
review_state: phase3_part19
hmtc_threshold_status: approaching_summary_level
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 2
---

# Plant Milks, Soy-Based

This page is HMTc Category 5 row 6. It is no longer a pure scaffold: the row has early finished-product occurrence evidence, but the evidence is still insufficient for HMTc threshold-setting.

## Decision Snapshot

| Field                 | Status                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| Row state             | Early occurrence evidence promoted                                                 |
| Best current source   | [[sources/milani2023-trace-elements-soy-based-beverages]]                          |
| Support source        | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                    |
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn, Cr, Sb; not threshold-ready                  |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/soy]]                                    |
| HMTc use              | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/aluminum]] (Al) | No federal product-specific limit loaded in this crosswalk. | Milani 2023: Al means 758, 609, and 176 ug/L by soy source; max range endpoint 1822 ug/L. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| [[metals/arsenic-total]] (tAs); [[metals/cadmium]] (Cd); [[metals/lead]] (Pb); [[metals/tin]] (Sn) | No federal/product-specific limit loaded yet. Source-cited non-U.S. thresholds require direct legal-source, unit, basis, and species review. | tAs <38.2 ug/L; Cd <3.8 ug/L; Pb mostly <10.9 ug/L with soybean group mean 2.2 ug/L; Sn <18 ug/L except isolate mean 4.3 ug/L. | No compliance read yet. Load the direct legal text before using this row in regulatory or litigation analysis. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| Cr-total; Sb | No federal product-specific limit loaded in this crosswalk. | Milani 2023: Cr isolate mean 1.8 ug/L with range <10.9-11.0; hydrosoluble and soybean groups <10.9 ug/L. Sb means 6.2, 2.5, and 12 ug/L with range endpoints up to 61 ug/L. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

Milani reports chromium as total/unspecified Cr and antimony as Sb in the finished beverage groups. Those values are useful occurrence context, but they are not Cr-VI evidence, not a compliance determination, and not an HMTc threshold input.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary (Part 19 clean/dirty)

<!-- audience: regulator, educator, app -->

This block reports the candidate certification (CC) status for each of the 10 HMT&C analytes under CLAUDE.md Part 19 (clean p90 / dirty p30, both alongside p100). Per the locked Step 0 architecture, plant-milks-soy-based is a **contamination_platform** subcategory (paired against plant-milks-non-soy-non-rice as the clean benchmark). Per Part 19, clean/dirty designations are **per-analyte empirical**: an analyte is "dirty" when measured field values cluster above the parent-category clean benchmark for that analyte. Al, Ni, and Cd are the platform_metals per the locked frontmatter; Al is empirically the most clearly dirty analyte (mean 514 ppb across 18 soy beverages — soy is a known Al accumulator).

Milani 2023 (n=18 Brazilian soy beverages by ICP-OES, grouped by soy-source: isolate-protein, hydrosoluble-extract, soybean) is the primary admitted-pool source. Marques 2021 provides supporting context for Pb, Hg, Ni, U. Note: Milani used ICP-OES (LOQ 3.8 ppb Cd, 10.9 ppb Pb, 18 ppb Sn — high vs ICP-MS), so several analytes are reported as <LOQ across all groups, limiting percentile-math feasibility.

Any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap. No federal or EU caps are loaded for plant-milks-soy-based; Brazilian/MERCOSUR thresholds cited by Milani 2023 require direct legal-text review before being treated as caps.

| Metal | Clean/dirty | Standards target | p100 | n | n_a_tier | Confidence | CC eligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | dirty (small) | summary-level dirty p30 not estimable from group means (Milani Pb mean 2.2 ppb in soybean group, <10.9 ppb LOQ in other 2 groups; mostly censored) | 13 ppb (soybean group max from Milani; isolate-protein and hydrosoluble groups <10.9 ppb LOQ) | 18 | 2 | low | Path A summary-level. Approaching the bar via 2 summary sources (Milani 2023 + Marques 2021) but Path A thin practical: Pb mostly <LOQ in 12 of 18 Milani samples; only soybean group (n=6) has detected Pb. Closing requires sample-level extraction or a 3rd source with lower LOD. |
| [[metals/cadmium]] (Cd) | data gap (Path B candidate) | Path B 5×LOQ = 19 ppb (Milani 2023 LOQ 3.8 ppb; all 18 samples <LOQ) | <3.8 (LOQ) | 18 | 1 | low | Path B candidate. All Milani samples <LOQ; this is informative for the *upper bound* of soy-beverage Cd (≤3.8 ppb at LOD-substitution-zero or up to 3.8 ppb at LOD-substitution-LOQ). Closing to Path A requires sample-level Cd from a lower-LOD method (ICP-MS with LOQ <0.5 ppb). |
| [[metals/arsenic-total]] (tAs) | data gap (Path B candidate) | Path B 5×LOQ = 191 ppb (Milani 2023 LOQ 38.2 ppb; all 18 samples <LOQ) | <38.2 (LOQ) | 18 | 1 | low | Path B candidate. Milani's ICP-OES LOQ for tAs is unusually high (38.2 ppb); modern ICP-MS would have sub-ppb LOQ. Closing requires sample-level tAs from a lower-LOD method. |
| [[metals/arsenic-inorganic]] (iAs) | data gap | — | — | 0 | 0 | data gap | Milani 2023 measured tAs only (no speciation). Closing requires direct soy-beverage iAs speciation. iAs in soy is typically a small fraction of tAs (soy is not a known iAs accumulator like rice). |
| [[metals/methylmercury]] (MeHg) | data gap | — | — | 0 | 0 | data gap | No methylation pathway in soy matrix; MeHg in soy beverage is biologically unexpected. Closing requires direct measurement to confirm <LOD. |
| [[metals/mercury-total]] (tHg) | clean | summary not-detected from Marques 2021 | <LOD | small | 1 | low | Path A thin. Marques 2021 reported Hg not detected in plant-drink samples including soy drinks. |
| [[metals/nickel]] (Ni) | **dirty** | summary-level dirty p30 estimate from Milani 2023: across 3 groups, p30 ≈ 0 ppb (most of isolate-protein and hydrosoluble groups <25.7 ppb LOQ); soybean group mean 29 ppb, max 46 ppb is the dirty signal | 46 ppb (Milani 2023 soybean group max) | 18 | 2 | low | Path A summary-level approaching. n_a_tier=2 (Milani 2023 + Marques 2021). Soy is one of the locked platform_metals for Ni. Closing requires sample-level extraction or 3rd source. |
| [[metals/aluminum]] (Al) | **dirty** | **summary-level dirty p30 estimate ≈ 130-200 ppb** (Milani 2023 group means 758/609/176 ppb across 3 soy-source groups; if pooled, p30 falls in the lower-mean soybean-group range; range-based across full 45-1822 ppb gives p30 ≈ 45 + 0.30·(1822-45) = 578 ppb upper estimate; group-weighted lower estimate ≈ 130 ppb in the soybean-group baseline) | **1822 ppb** (Milani isolate-protein group max; ~6× pre-existing milk-formula Al tolerance reference) | 18 | 1 | low | **Path A thin (n_a_tier=1).** Single A-tier source (Milani 2023). Soy is a known Al accumulator (soy roots take up Al from acidic soils); Milani's mean 758 ppb in isolate-protein beverages exceeds typical milk-formula Al ranges (FDA 2026 milk formula mean 432-1241 ppb is the closest comparator). p100 = 1822 ppb is the dominant finding. Soy beverages serve a population that often substitutes for cow milk (lactose-intolerant + vegan markets); Al exposure for high-soy-consuming subpopulations is a real concern. Closing to at-bar requires a 2nd direct soy-beverage Al source. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | <LOD by inference for milk-like fraction; direct measurement absent | — | 0 (corpus); 1 (chemistry-inference cascade from Hernandez 2019 + Saraiva 2021) | 1 | low | Per CLAUDE.md Part 14 + Hernandez 2019 + Saraiva 2021 chemistry-mechanism finding (food matrix reduces Cr(VI) to Cr(III)), soy plant-milk is a milk-like neutral-pH protein-containing matrix that inherits Cr(VI)<LOD inference more strongly than acidic juice matrices. Milani 2023 reports total Cr only (Cr 1.8 ppb in isolate group, <10.9 ppb in others) — total Cr ≠ Cr-VI. |
| [[metals/tin]] (Sn) | data gap (Path B candidate) | Path B 5×LOQ = 90 ppb (Milani 2023 LOQ 18 ppb; isolate-protein group mean 4.3 ppb at substitution-zero; other 2 groups <18 ppb LOQ) | 26 ppb (Milani isolate-protein group max) | 18 | 1 | low | Path B candidate. Milani's isolate-protein group has detected Sn in some samples (mean 4.3 ppb, max 26 ppb); other 2 groups <LOQ. Modern soy plant-milk is aseptic-pack, not canned; canned-Sn-leach Tarigan 2016 context not applicable. |

**Headline cells**: Al at p100=1822 ppb is the dominant finding — soy is a known Al accumulator and isolate-protein-based soy beverages cluster ~500-800 ppb mean. Closing the Al cell to at-bar (n_a_tier ≥ 2 medium confidence) requires a 2nd direct soy-beverage Al source. Ni at p100=46 ppb is the secondary dirty signal. Cd, tAs, Sn are constrained to Path B by Milani's high ICP-OES LOQs.

<!-- END: hmi-hmtc-evidence-summary -->

## Sources

- [[sources/milani2023-trace-elements-soy-based-beverages]] — n=18 Brazilian soy beverages by ICP-OES, grouped by soy-source (isolate-protein, hydrosoluble-extract, soybean); Al, tAs, Cd, Cr, Ni, Pb, Sb, Sn. Primary admitted-pool source. Note ICP-OES LOQ levels (Cd 3.8, Pb 10.9, tAs 38.2, Sn 18 ppb) constrain percentile math for those analytes.
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]] — Spanish ICP-MS plant-drink survey including soy drinks; Pb, tHg, Ni, U (no Al/Cd/As/Sn measurement). Supports Pb/tHg/Ni cells.

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Milani 2023 (group means; mostly <LOQ), Marques 2021 (n=42 plant-drinks) | 2 summary |
| Cd | — | Milani 2023 (all <LOQ; Path B candidate at 5×LOQ=19 ppb) | 1 summary (Path B) |
| tAs | — | Milani 2023 (all <LOQ; Path B candidate at 5×LOQ=191 ppb; high ICP-OES LOQ) | 1 summary (Path B) |
| iAs | — | — | 0 (Milani measured tAs only) |
| MeHg | — | — | 0 |
| tHg | — | Marques 2021 (not detected) | 1 summary |
| **Al** | — | **Milani 2023 (group means 176-758 ppb; range 45-1822 ppb)** | 1 summary (Path A thin; closing requires 2nd Al source) |
| Ni | — | Milani 2023 (soybean group mean 29 ppb), Marques 2021 | 2 summary |
| Cr-VI | — | inference-cascade only (Hernandez/Saraiva chemistry; milk-like matrix) | 1 cascade |
| Sn | — | Milani 2023 (isolate-protein group mean 4.3 ppb at LOD-zero; max 26 ppb; Path B candidate at 5×LOQ=90 ppb) | 1 summary (Path B) |
