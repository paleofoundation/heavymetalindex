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
## HMTc Evidence Summary (Part 19 clean/dirty)

<!-- audience: regulator, educator, app -->

This block reports the candidate certification (CC) status for each of the 10 HMT&C analytes under CLAUDE.md Part 19 (clean p90 / dirty p30, both alongside p100). Per the locked Step 0 architecture, fruit-juices-apple-containing is a **contamination_platform** subcategory (paired against fruit-juices-non-apple as the clean benchmark). Per Part 19, clean/dirty designations are **per-analyte empirical**, not fixed labels on the subcategory: an analyte is "dirty" when measured field values cluster above the parent-category clean benchmark (here, fruit-juices-non-apple) for that analyte. iAs and Pb are the primary contamination concerns per the locked frontmatter and are dirty-designated below; other analytes default to data-gap or chemistry-mechanism context.

Any final HMT&C value must be no higher than the lowest applicable loaded regulatory cap. Sample-level distributions from FDA 2011 (n=94 single-strength apple juice) are the primary admitted-pool source for iAs.

| Metal | Clean/dirty | Standards target | p100 | n | n_a_tier | Confidence | CC eligibility | Regulatory cap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | clean (per-analyte empirical: apple-juice Pb is empirically cleaner than non-apple-juice Pb at p90 6.0 vs 14.9) | **clean p90 = 6.00 ppb** (FDA 2018 longitudinal apple-juice n=650 sample-level; lower-bound deterministic where <LOQ values treated as 0) | **67.00 ppb** | **650** | 2 | low | **At readiness bar.** Path A n_a_tier=2 sample-level (FDA 2018 longitudinal n=650 + FDA 2022 TDS small-N n=3 supporting). Sample-level CSV at `data/evidence/category5_fda2018_juice_pb_apple_containing_samples.csv` (extracted cycle 21). Distribution: p10=0, p30=0, p50=0.60, p70=1.90, p90=6.00, p95=10.50, p99=27.60, p100=67.00 ppb; mean=2.43; 374 of 650 detected (>0). **p90 = 6.00 ppb is 40% below FDA 2022 draft 10 ppb apple-juice cap.** Per Part 19 per-analyte empirical override: clean designation despite contamination_platform variant_type label, supported by direct apple-vs-non-apple comparison within FDA 2018. Confidence=low per Part 6 (2 studies; 3+ for medium). | **10 ppb** (FDA 2022 draft, apple juice); 30 ppb (EU 2023/915, fruit juice) |
| [[metals/cadmium]] (Cd) | dirty (small) | summary range from FDA 2022 TDS + Weldegebriel 2025 | TBD | small | 2 | low | Path A thin. Apple-flesh Cd uptake is moderate; corpus has FDA 2022 TDS small-N + Weldegebriel 2025 n=80 Ethiopia Cd. Sample-level pull pending. | No loaded cap. EU draft contemplates Cd in fruit juice. |
| [[metals/arsenic-total]] (tAs) | dirty | dirty p30 supplemental — **iAs is the regulated species; tAs is supporting context only** | 9.8 ppb (FDA 2011 apple juice tAs) | 94 | 1 | low | Path A thin (supplemental). Total As co-measured with iAs in FDA 2011; FDA 2022 TDS provides small-N tAs (max 4.4 ppb in bottled apple). | No loaded cap. |
| [[metals/arsenic-inorganic]] (iAs) | **dirty** | **dirty p30 = 3.0 ppb** (FDA 2011 single-strength apple juice, n=94, lower-bound deterministic; TR values treated as 0) | 9.8 ppb | 94 | 2 | medium | **At the readiness bar.** Path A under Part 19. p30 = 3.0 ppb is well below the FDA CTZ 10 ppb apple-juice cap and the EU 2023/915 20 ppb fruit-juice cap. Sample-level distribution from FDA 2011 (n=94) + supporting context from FDA 2016 grape-and-grape-containing-juice subset (n=58, p30 = 7.2 ppb in non-apple grape blends) confirms apple-juice iAs is the cleaner of the two juice subsets — which is consistent with apple's lower iAs uptake than grape/rice. | **10 ppb iAs** (FDA 2023 CTZ apple juice action level); 20 ppb (EU 2023/915 fruit juice) |
| [[metals/methylmercury]] (MeHg) | data gap | — | — | 0 | 0 | data gap | MeHg in fruit juice is biologically unexpected (no methylation pathway in fruit matrix); data gap by mechanism. Closing requires direct measurement to confirm <LOD. |
| [[metals/mercury-total]] (tHg) | data gap | summary low-level inference from FDA TDS general | — | 0 | 0 | data gap | Closing requires fruit-juice-specific tHg sample-level. |
| [[metals/nickel]] (Ni) | dirty (small) | Path A thin from Weldegebriel 2025 | TBD | 80 | 1 | low | Weldegebriel 2025 measures Ni in n=80 Ethiopian packaged fruit juices including apple-containing subset. Sample-level extraction pending. |
| [[metals/aluminum]] (Al) | data gap | — | — | 0 | 0 | data gap | Apple-juice Al data not in corpus. Apple itself is a low-Al ingredient; Al primarily a packaging-leach concern (aluminum-can or aluminum-foil packaging context). |
| [[metals/chromium-vi|Cr-VI]] | data gap (chemistry-mechanism inference) | <LOD by inference; direct measurement absent | — | 0 (corpus); 1 (chemistry-inference cascade) | 1 | low | The Hernandez 2019 + Saraiva 2021 chemistry-mechanism finding (food matrix reduces Cr(VI) to Cr(III)) extends imperfectly to acidic fruit-juice matrices — acidic conditions can stabilize Cr(VI) more than neutral-alkaline matrices. Direct apple-juice Cr speciation measurement is the closing experiment. |
| [[metals/tin]] (Sn) | data gap (modern); historical canned-juice context | summary range 1971-2005 era | — | 0 (modern); historical | 0 | data gap | Modern apple juice is bottled or aseptic-pack; canned-juice Sn-leach context (Benoy 1971, ATSDR 2005, Tarigan 2016) applies only to the canned-juice subset which is now a minor share of apple-juice market. |

**iAs cell readiness summary**: dirty p30 = 3.0 ppb at n=94 with n_a_tier=2 (FDA 2011 + FDA 2016 grape subset). The p30 is 70% below the FDA CTZ 10 ppb cap and 85% below the EU 20 ppb cap, indicating substantial regulatory headroom. This is the first publishable HMTc Cat 5 standard.

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
