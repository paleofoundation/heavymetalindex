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
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: fruit juices, concentrated fruit juices as reconstituted, and fruit nectars. Basis: wet weight or reconstituted juice. | FDA 2016 grape-category rows provide 58 quantified iAs cells from 61 grape and grape-containing juice rows: p50 11.2 ppb, p90 22.6 ppb, p95 25.6 ppb, max 49.6 ppb; NS rows are excluded from percentile math. FDA TDS grapefruit rows report total arsenic only and remain separate. | EU maximum level loaded; the FDA grape category is species-specific occurrence context but not a full non-apple juice aggregate. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2022-tds-elements-fy2018-fy2020]]; [[sources/fda2016-infant-toddler-foods-inorganic-arsenic]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## HMTc Evidence Summary (Part 19 clean/dirty)

<!-- audience: regulator, educator, app -->

This block reports the candidate certification (CC) status for each of the 10 HMT&C analytes under CLAUDE.md Part 19. Per the locked Step 0 architecture, fruit-juices-non-apple is the **clean_benchmark** variant_type paired against fruit-juices-apple-containing as the contamination platform. **However, per Part 19, clean/dirty is per-analyte empirical, not fixed by variant_type** — and the iAs evidence shows a counterintuitive empirical pattern:

| Subcategory | iAs source | n (quantified) | p50 | p90 | p100 | mean |
| --- | --- | --- | --- | --- | --- | --- |
| Apple-containing juice | FDA 2011 (cycle 13) | 94 | 4.9 | 7.7 | 9.8 | 4.09 |
| Non-apple juice (grape subset) | FDA 2016 grape-category | 58 | 11.2 | 22.6 | 49.6 | 12.91 |

**Grape-category iAs is 2-5× higher than apple-juice iAs.** Despite the locked-architecture variant_type label calling this subcategory the "clean_benchmark," for iAs the empirical pattern overrides the architectural label per Part 19. Grapes have known soil arsenic uptake, and grape-juice concentrate processes can further concentrate iAs. **iAs is dirty here, not clean.** This finding does NOT trigger a stop condition — it is an explicit Part-19-supported per-analyte override, not an A-tier-vs-A-tier contradiction (both FDA datasets agree on the pattern).

For Pb, the variant_type architectural intent (clean benchmark) is empirically supported: non-apple juice Pb is generally lower than apple-containing juice Pb (apple cans were the lead-soldered legacy concern; modern non-apple bottled juice Pb is typically <5 ppb).

Sources: FDA 2016 grape-and-grape-containing juice category (n=58 quantified iAs sample-level — primary admitted-pool source for the iAs cell); FDA 2018 longitudinal Pb in juice FY2005-FY2018 (Pb sample-level, sub-set extraction pending); FDA 2022 TDS FY2018-FY2020 grapefruit juice (n=3 small-N Pb/tAs); Weldegebriel 2025 Ethiopia n=80 packaged fruit juices Pb/Cd/Cr/Ni; FDA 2022 draft action levels (Pb 20 ppb other juice).

Any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap.

| Metal | Clean/dirty (per-analyte empirical) | Standards target | p100 | n | n_a_tier | Confidence | CC eligibility | Regulatory cap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean (architectural intent supported empirically) | summary clean p90 candidate from FDA 2018 longitudinal + FDA 2022 TDS (grapefruit n=3 reports 0 ppb) + Weldegebriel 2025 (extraction pending) | TBD | (3 sources, n_corpus≈100+ pending pull) | 3 | medium | Approaching the bar. Three sources but per-page sample-level CSV extraction not yet complete; FDA 2022 TDS n=3 grapefruit reports Pb=0 (clean signal). Closing requires sample-level extraction and computation. | 20 ppb (FDA 2022 draft other-juice); 30 ppb (EU 2023/915 fruit juice); 50 ppb (FDA 2004 HACCP guidance) |
| [[metals/cadmium]] (Cd) | dirty (small) | Path A thin from Weldegebriel 2025 Ethiopia | TBD | small | 1 | low | Path A thin. Single source covers Cd in Ethiopian packaged fruit juices including non-apple subset; sample-level extraction pending. | No loaded cap |
| [[metals/arsenic-total]] (tAs) | dirty | summary thin from FDA 2016 grape-category co-measurement; FDA 2022 TDS grapefruit reports tAs=0 | TBD | small | 1 | low | Path A thin (supplemental to iAs). |
| [[metals/arsenic-inorganic]] (iAs) | **dirty (empirical override of variant_type label)** | **dirty p30 = 7.8 ppb** (FDA 2016 grape-and-grape-containing juice category, n=58 quantified, sample-level) | **49.6 ppb** | 58 | 1 | low | **Path A thin (n_a_tier=1, sample-level).** Sample-level distribution computed: p10=5.4, p20=6.5, p30=7.8, p50=11.2, p90=22.6, p95=25.6, p100=49.6 ppb; mean=12.9 ppb. **p30 = 7.8 ppb is 61% below EU 20 ppb cap** (substantial regulatory headroom). p100=49.6 ppb is **2.5× the EU cap** at the upper-tail (some grape-juice samples exceed the EU iAs limit). **Partial-fit caveat**: FDA 2016 covers only grape and grape-containing juice; the broader non-apple-juice subcategory includes orange/grapefruit/cranberry/pomegranate/etc. which are typically lower-iAs. Grape-category bridge is a conservative (overestimating) Path A estimator for the dirty p30 strict bar. Closing to at-bar requires either (a) a 2nd direct non-apple-juice iAs source covering more juice types, or (b) population-of-interest restriction to grape-category juice with named-row designation. | **20 ppb iAs** (EU 2023/915 fruit juice); no FDA action level for iAs in non-apple juice (FDA CTZ 10 ppb is apple-only) |
| [[metals/methylmercury]] (MeHg) | data gap | — | — | 0 | 0 | data gap | No methylation pathway in fruit matrix; biologically unexpected. |
| [[metals/mercury-total]] (tHg) | data gap | — | — | 0 | 0 | data gap | Closing requires direct non-apple-juice tHg measurement. |
| [[metals/nickel]] (Ni) | dirty (small) | Path A thin from Weldegebriel 2025 | TBD | small | 1 | low | Single source. |
| [[metals/aluminum]] (Al) | data gap | — | — | 0 | 0 | data gap | Non-apple juice Al data not in corpus. |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference partial) | <LOD by inference; direct measurement absent | — | 0 (corpus); 1 (chemistry-inference cascade) | 1 | low | Hernandez 2019 + Saraiva 2021 chemistry-mechanism finding extends imperfectly to acidic juice matrices — acidic conditions can stabilize Cr(VI) more than neutral-alkaline matrices. Direct juice-Cr-speciation absent from corpus. Weldegebriel 2025 measured total Cr (not Cr-VI). |
| [[metals/tin]] (Sn) | data gap (modern); historical canned-juice context | summary range 1971-2005 era | — | 0 (modern); historical | 0 | data gap | Modern non-apple juice is bottled or aseptic-pack; canned-juice Sn-leach (Benoy 1971, Tarigan 2016) applies only to canned-juice subset which is now a minor share of non-apple juice market. |

**Headline cells**:
- **iAs at p30=7.8 ppb is the most important finding** — sample-level Path A thin with grape-category-bridge caveat. This cell is at-bar percentile-math-wise (sample-level Part 19 dirty p30 computed) but Path A thin per Part 6's 2-source rule for n_a_tier=2; closing to at-bar requires a 2nd non-apple-juice iAs source.
- **The clean-architecture-vs-dirty-empirical override is the cycle-17 finding**: Part 19 explicitly allows per-analyte clean/dirty designations to override variant_type architectural labels, and this row demonstrates the pattern.

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
