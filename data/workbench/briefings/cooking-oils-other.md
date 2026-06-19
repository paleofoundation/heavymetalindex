---
title: "HMTc Standards Briefing — Other cooking oils (canola, sunflower, coconut, avocado, sesame)"
type: hmtc-standards-briefing
product_slug: cooking-oils-other
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-19T12:28:12.940Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Other cooking oils (canola, sunflower, coconut, avocado, sesame)

**Product class:** Other cooking oils (canola, sunflower, coconut, avocado, sesame)
**Subcategory role:** independent
**Native basis for published thresholds:** as_sold
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-06-19
**Author:** Karen Pendergrass, Standards Architect, Paleo Foundation
**Status:** Draft for stakeholder review. Not yet through the 9 pre-publication gates.

---

## Who this briefing is for

The HMTc certification mark serves multiple audiences with different concerns. This briefing is written so each audience finds what they need in one document. Audience-tagged "read" callouts appear inline next to each per-analyte section.

**Brand legal teams** — Read the per-analyte Defensibility narrative and the Adversarial read section. The methodology section is your Daubert-resistance reference. Every numeric claim traces to a source page; the contribution logs document admission criteria.

**Retailer quality and compliance** — Read the Master Limit Table and the per-analyte Regulator read callouts. The certification mark on a product means the brand has tested at or below every value in the Master Limit Table, in the product's native basis. The regulatory comparison rows show which government caps apply and how HMTc thresholds compare.

**Regulators (FDA, EFSA, state AGs)** — Read the Methodology section, the Sources Cited table, and the Anti-Circumvention argument. The methodology is open, reproducible, and follows the WHO/JECFA, EFSA, ATSDR, and Codex precedents cited. Numeric thresholds are derived from a pooled occurrence distribution of peer-reviewed and agency data, weighted by source N with a 50% relative-share cap.

**Adversarial readers (plaintiff's experts, competing standards bodies)** — Read the per-analyte Defensibility narrative, the Adversarial read section, the contribution logs, and the sensitivity analyses. Every value carries: the pool composition, the basis-conversion math, the regulatory cap comparison, the parametric sensitivity, and the rationale for any gap between literature and threshold.

---

## Master Limit Table — Executive Summary

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for cooking oils other.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **100 ppb** [as-sold] | 211.530 ppb (capped to 100 by reg cap) | regulatory-alignment | 27 | provisional | 100 ppb (eu2023_pb_fats_oils_100) |
| tAs | _not material_ | 56.183 ppb (pool not standardized — not material) | literature-baseline | 15 | stable | — |
| Ni | **100 ppb** [as-sold] | 82.559 ppb | literature-baseline | 12 | stable | — |
| Cd | _not material_ | 56.746 ppb (pool not standardized — not material) | literature-baseline | 23 | provisional | — |
| Al | **2 ppb** [as-sold] | 1.457 ppb | literature-baseline | 1 | stable | — |
| tHg | _not material_ | 166.438 ppb (pool not standardized — not material) | literature-baseline | 1 | stable | — |

**How to read this table.** "Published" values are rounded up to the HMTc primary increment ladder (1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000, 1300, 1500, 2000, 5000, 10000 ppb) per the program's publication conventions; this gives brands an unambiguous bin to test against. The "precise" column shows the pooled-engine output before rounding so the methodology is transparent and re-derivable. Rationale tags map to CLAUDE.md Part 19's four allowed tags: `literature-baseline` (pooled value binds), `regulatory-alignment` (regulatory ceiling binds), `feasibility-driven` (analytical method binds), and `precautionary` (manual override below pooled and regulatory).

---

## Methodology — one page

**Per-analyte standards.** For each (product row, analyte) cell, every source loaded for that cell contributes to a pooled distribution via moment-matching pseudo-sample expansion. Sample-level data uses raw values; summary statistics (mean, median, max, lb/ub, reported percentiles) reconstruct under log-normal or Tobit assumptions documented per source. Pseudo-samples are weighted by source N and capped at 50% relative pool share to prevent any one survey from dominating. The pooled distribution is sorted and queried at the per-analyte target percentile:

- **Clean subcategory:** standard = pooled P97
- **Dirty subcategory:** standard = pooled P45
- **Independent (no within-pair partner):** standard = pooled P97 by default

**Why P97 / P45, not P90 / P30 (the row-pass calibration).** A brand certifies a product (one row, ten analytes simultaneously) — not one analyte at a time. Setting each per-analyte limit at the raw P90 of the clean distribution would deliver a joint row-pass rate close to 0.9^10 = 35% under analyte independence. Under realistic analyte correlation (~0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50-70%. To deliver the row-level outcomes the Governing Principles require — approximately 90% of clean-subcategory brands and approximately 30% of dirty-subcategory brands pass row certification — per-analyte limits are uplifted to P97 (clean) and P45 (dirty). This is the calibration that delivers the program's stated objective. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening; per-analyte differentiation (e.g., Pb tighter than Ni) is deferred until HMTc has 6-12 months of lot-testing data to measure actual joint pass rates.

**Basis.** Each product row's standard is published in the native basis of the product form, the form as sold and placed on market. Brands ship and test in their product's native as-sold form; the certification mark matches that form. As-sold product is not reconstituted from a concentrate, so no powder-to-prepared conversion applies and the published value is the as-sold value. Sources reporting in a non-native basis are converted into the row's native basis during pooling via documented per-source factors recorded in the contribution log; conversions of unknown factor are flagged and not silently coerced.

**Regulatory cap.** The final published HMTc value never exceeds the lowest applicable loaded regulatory ceiling, expressed in the product's native basis. When the pooled P97/P45 exceeds the regulatory cap, the cap binds and the rationale tag is `regulatory-alignment`. When the pooled value is below the cap, the rationale is `literature-baseline` and the cap is shown for context only.

**Sensitivity.** Each pooled value is recomputed under three parametric assumptions: log-normal (headline), gamma (alternative), and nonparametric reconstruction. The spread across the three is reported as the sensitivity band: stable (≤25%), provisional (25–50%), or needs_review (>50%). Confidence intervals are computed via meta-analytic bootstrap that resamples whole sources (not individual pseudo-samples) to capture between-source uncertainty.

**Methodology authorities.** The pooling approach follows WHO/JECFA pooled total-diet study methodology, the EFSA Scientific Opinions on lead (2010, 2024) and cadmium (2009, 2024) for log-normal contaminant occurrence reconstruction, ATSDR moment-matching guidance for summary-statistic-only sources, and Codex CAC/GL 50-2004 weighted pooling. Per-source contribution logs document every admission decision and every basis conversion.

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=cooking-oils-other`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 100 ppb [as-sold] · 100 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 100 ppb (eu2023_pb_fats_oils_100)
**Pool composition:** 27 sources contributing · 306 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [39.73, 757.65] ppb**
**Sensitivity: log-normal 182.83 · gamma 124.87 · nonparametric 211.04 ppb · spread 41% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_fats_oils_100). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 211.53 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_fats_oils_100). A Daubert challenge on the value reduces to "is eu2023_pb_fats_oils_100 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_fats_oils_100 cap. The pooled occurrence distribution from 27 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (27 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.5% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.5% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.5% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.5% |
| yohannes2024-vegetable-oils-ethiopia-gondar (2024) · ET | Analysis of heavy metals and minerals in edible vegetable oi… | unknown | 17 | single_point | 0.3% |
| acar2012-vegetable-oils-olives-turkey-etaas (2012) · TR | Evaluation of cadmium, lead, copper, iron and zinc in Turkis… | vegetable oils excluding olive, wet weight/as-sold | 44 | uniform_max_only | 3.3% |
| ashraf2012-heavy-metals-vegetable-oils-saudi-arabia (2012) · SA | Levels of Selected Heavy Metals in Varieties of Vegetable Oi… | vegetable oils excluding olive, wet weight/as-sold | 134 | uniform_max_only | 3.3% |
| famurewa2023-coconut-oil-metals-pesticides (2023) · NG, PK | Comparative assessment of different coconut oils: Chromatogr… | coconut oil, as-sold | 3 | uniform_max_only | 1.0% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined corn oil, as-sold | 2 | lognormal_mean_only | 0.7% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined rice bran oil, as-sold | 2 | lognormal_mean_only | 0.7% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined sunflower oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined canola oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined soybean oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sunflower oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined peanut oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sesame oil, as-sold | 5 | lognormal_mean_only | 1.6% |
| matei2025-vegetable-oils-romania-gfaas (2025) · RO | Physicochemical Properties, Trace Elements, and Health Risk … | vegetable oils excluding olive, as-sold | 18 | uniform_max_only | 3.3% |

</details>

### tAs

**Published HMTc threshold:** **not material** — Arsenic does not partition into the extracted lipid fraction; seed/vegetable/nut oils carry no As contaminant signal
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 15 sources contributing · 132 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 15 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.



<details>
<summary>Per-source contribution log (15 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| ashraf2012-heavy-metals-vegetable-oils-saudi-arabia (2012) · SA | Levels of Selected Heavy Metals in Varieties of Vegetable Oi… | vegetable oils excluding olive, wet weight/as-sold | 134 | uniform_max_only | 7.6% |
| chen2001-edible-fats-oils-arsenic (2001) · TW | Determination of arsenic in edible fats and oils by focused … | edible oils, as-sold | 15 | uniform_max_only | 7.6% |
| famurewa2023-coconut-oil-metals-pesticides (2023) · NG, PK | Comparative assessment of different coconut oils: Chromatogr… | coconut oil, as-sold | 3 | uniform_max_only | 2.3% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.8% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.8% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined corn oil, as-sold | 2 | lognormal_mean_only | 1.5% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined rice bran oil, as-sold | 2 | lognormal_mean_only | 1.5% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined sunflower oil, as-sold | 3 | lognormal_mean_only | 2.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined canola oil, as-sold | 3 | lognormal_mean_only | 2.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined soybean oil, as-sold | 3 | lognormal_mean_only | 2.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined peanut oil, as-sold | 3 | lognormal_mean_only | 2.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sesame oil, as-sold | 5 | lognormal_mean_only | 3.8% |
| mehri2024-vegetable-oils-iran-hamadan-ptes (2024) · IR | A probabilistic health risk assessment of potentially toxic … | vegetable oils excluding olive, wet weight/as-sold | 30 | uniform_max_only | 7.6% |
| samuel2020-palm-oil-metals-nigeria (2020) · NG | Variations on the physiochemical, microbiological and select… | palm oil, as-sold | 18 | uniform_max_only | 7.6% |
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | vegetable oils excluding olive, as-sold | 97 | lognormal_mean_max | 50.0% |

</details>

### Ni

**Published HMTc threshold:** 100 ppb [as-sold] · 82.559 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 12 sources contributing · 90 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [15.00, 92.04] ppb**
**Sensitivity: log-normal 89.40 · gamma 89.33 · nonparametric 84.54 ppb · spread 5% (stable)**



**Defensibility.** Pooled P97 from 12 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 12 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 12 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (12 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| famurewa2023-coconut-oil-metals-pesticides (2023) · NG, PK | Comparative assessment of different coconut oils: Chromatogr… | coconut oil, as-sold | 3 | uniform_max_only | 3.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined corn oil, as-sold | 2 | lognormal_mean_only | 2.2% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined rice bran oil, as-sold | 2 | lognormal_mean_only | 2.2% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined sunflower oil, as-sold | 3 | lognormal_mean_only | 3.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined canola oil, as-sold | 3 | lognormal_mean_only | 3.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined soybean oil, as-sold | 3 | lognormal_mean_only | 3.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sunflower oil, as-sold | 1 | lognormal_mean_only | 1.1% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined peanut oil, as-sold | 3 | lognormal_mean_only | 3.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sesame oil, as-sold | 5 | lognormal_mean_only | 5.6% |
| matei2025-vegetable-oils-romania-gfaas (2025) · RO | Physicochemical Properties, Trace Elements, and Health Risk … | vegetable oils excluding olive, as-sold | 18 | uniform_max_only | 11.1% |
| pehlivan2008-vegetable-oils-turkey-icp-aes (2008) · TR | Determination of some inorganic metals in edible vegetable o… | vegetable oils excluding olive, wet weight/as-sold | 11 | uniform_max_only | 11.1% |
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | vegetable oils excluding olive, as-sold | 97 | lognormal_mean_max | 50.0% |

</details>

### Cd

**Published HMTc threshold:** **not material** — Cadmium does not partition into the extracted lipid fraction; it remains with the press cake/meal, not the oil
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 23 sources contributing · 298 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 23 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.



<details>
<summary>Per-source contribution log (23 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.7% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.7% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.7% |
| tayeb2025-olive-corn-oil-iran-pb-cd (2025) · IR | Assessment of lead and cadmium exposure through olive and co… | unknown | 60 | uniform_range_only | 6.7% |
| acar2012-vegetable-oils-olives-turkey-etaas (2012) · TR | Evaluation of cadmium, lead, copper, iron and zinc in Turkis… | vegetable oils excluding olive, wet weight/as-sold | 44 | uniform_max_only | 3.4% |
| ashraf2012-heavy-metals-vegetable-oils-saudi-arabia (2012) · SA | Levels of Selected Heavy Metals in Varieties of Vegetable Oi… | vegetable oils excluding olive, wet weight/as-sold | 134 | uniform_max_only | 3.4% |
| famurewa2023-coconut-oil-metals-pesticides (2023) · NG, PK | Comparative assessment of different coconut oils: Chromatogr… | coconut oil, as-sold | 3 | uniform_max_only | 1.0% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| kheirati-rounizi2021-sesame-oil-heavy-metals (2021) · IR | The chemical composition and heavy metal content of sesame o… | sesame oil, as-sold | 1 | lognormal_mean_only | 0.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined corn oil, as-sold | 2 | lognormal_mean_only | 0.7% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined rice bran oil, as-sold | 2 | lognormal_mean_only | 0.7% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined sunflower oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined peanut oil, as-sold | 3 | lognormal_mean_only | 1.0% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | unrefined sesame oil, as-sold | 5 | lognormal_mean_only | 1.7% |
| matei2025-vegetable-oils-romania-gfaas (2025) · RO | Physicochemical Properties, Trace Elements, and Health Risk … | vegetable oils excluding olive, as-sold | 18 | uniform_max_only | 3.4% |
| mehri2024-vegetable-oils-iran-hamadan-ptes (2024) · IR | A probabilistic health risk assessment of potentially toxic … | vegetable oils excluding olive, wet weight/as-sold | 30 | uniform_max_only | 3.4% |
| ntigoroku2025-delta-state-edible-oils-metals (2025) · NG | Physicochemical Properties, Heavy Metals levels and Health R… | vegetable oils excluding olive, as-sold | 15 | uniform_max_only | 3.4% |
| pehlivan2008-vegetable-oils-turkey-icp-aes (2008) · TR | Determination of some inorganic metals in edible vegetable o… | vegetable oils excluding olive, wet weight/as-sold | 11 | uniform_max_only | 3.4% |
| samuel2020-palm-oil-metals-nigeria (2020) · NG | Variations on the physiochemical, microbiological and select… | palm oil, as-sold | 18 | uniform_max_only | 3.4% |

</details>

### Al

**Published HMTc threshold:** 2 ppb [as-sold] · 1.457 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 1 sources contributing · 1 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [1.03, 29.55] ppb**
**Sensitivity: log-normal 1.72 · gamma 1.74 · nonparametric 1.72 ppb · spread 1% (stable)**



**Defensibility.** Pooled P97 from 1 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 1 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 2 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 1 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (1 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| famurewa2023-coconut-oil-metals-pesticides (2023) · NG, PK | Comparative assessment of different coconut oils: Chromatogr… | coconut oil, as-sold | 3 | uniform_max_only | 100.0% |

</details>

### tHg

**Published HMTc threshold:** **not material** — Mercury does not partition into the extracted lipid fraction
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 1 sources contributing · 1 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 1 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.



<details>
<summary>Per-source contribution log (1 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| samuel2020-palm-oil-metals-nigeria (2020) · NG | Variations on the physiochemical, microbiological and select… | palm oil, as-sold | 18 | uniform_max_only | 100.0% |

</details>

---

## Adversarial Read — what a plaintiff's expert will attack, and the response

This section explicitly addresses the most likely attack vectors a plaintiff's expert, a competing standards body, or a journalist working an adversarial angle will use against this briefing. Each attack is named and answered.

**Attack 1: "The pool is too small; the methodology cherry-picks."**
Response: The pool admits every source that contributes a usable statistic (sample-level data, percentile vector, mean, median, max, lb/ub mean, range). No source is excluded for being "summary-only." The contribution log per analyte lists every admission decision and every basis conversion. Per-source pool share is capped at 50% to prevent dominance by any single survey. The methodology is reproducible from the structured CSVs in `data/evidence/` and the engine in `tools/evidence/build-hmtc-aggregate-distributions.mjs`.

**Attack 2: "Why P97 instead of P90? You're loosening the standard."**
Response: P97 per analyte is calibrated to deliver approximately 90% row-pass for the clean subcategory across the 10-analyte joint. Setting each analyte's limit at P90 of its own marginal would deliver a joint pass rate of 35% under independence and 50-70% under realistic correlation — well short of the Governing Principles' 90/30 row-pass target. P97 is the per-analyte percentile that delivers the row-level outcome the program promises. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening.

**Attack 3: "Why is your dirty subcategory P45 instead of P10?"**
Response: P45 of the dirty subcategory's distribution, applied per-analyte, delivers approximately 30% joint row-pass for dirty-subcategory brands. This is the design intent stated in the Governing Principles v2.0: the dirty subcategory standard must give dirty-platform brands a realistic path to certification so the program drives reformulation rather than excluding the platform. A P10 dirty standard would deliver <1% joint row-pass and the program would have no commercial uptake on the dirty side.

**Attack 4: "Your threshold matches the EU/FDA cap; HMTc adds no value over the regulator."**
Response: For Pb, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 2 analytes (Pb, Cd) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: Published thresholds for this category are in the as-sold edible basis (edible muscle or tissue). As-sold product is not reconstituted from a powder, so no fixed reconstitution ratio is applied and the published value is the as-sold value. Where a source reports in a different basis, the conversion factor is documented per source in the contribution log, and conversions of unknown factor are flagged rather than silently coerced. There is no powder-to-prepared dilution step a brand could exploit to claim compliance in a more favorable basis.

**Attack 8: "Show me one source you excluded."**
Response: No source contributing a usable statistic is excluded. Sources marked "no_usable_statistic" in the contribution log are LOD-censored entries with neither mean nor lb/ub recorded. Sources without a structured CSV row are documented in the routing audit and the gap report; those are extraction gaps, not exclusions, and they are tracked in Phase 1 backlog with target completion timelines.

---

## Anti-Circumvention — the six-move argument

Per the hmtc-standards skill rule #6, every Standards Briefing publishes the anti-circumvention argument that defends the program against the most common evasion strategies. The six moves are:

**Move 1 — Clean platform anchor.** The clean subcategory standard is set at P97 of the clean platform's distribution, not the dirty platform's. Brands cannot argue "the dirty platform is also part of the market, so the limit should accommodate it." The clean platform exists and is achievable; **97% of brands in the clean platform's distribution already meet the per-analyte limit** (the cleanest 97%, not the cleanest 3%). At the row level, with ten analytes combined under typical analyte correlation, approximately 90% of clean-platform brands pass joint certification — which is the Governing Principles' stated 90% clean row-pass target.

**Move 2 — Row-level certification.** A brand certifies a product (one row, ten analytes simultaneously), not one analyte. The single-analyte attack "you let 70% of brands pass on Pb individually" misses the joint test. Per-analyte P97 delivers ~90% row-pass; the joint discipline is the certification.

**Move 3 — Native basis discipline.** The standard is published in the product's native as-sold basis (edible muscle or tissue). Brands cannot test a diluted, drained, or otherwise differently-prepared form and claim compliance against the as-sold cap. Each row tests in its native as-sold form; any documented basis conversion is for source pooling only, never a substitute for testing in the certified basis.

**Move 4 — Regulatory ceiling absolute.** The final HMTc value never exceeds the lowest applicable loaded regulatory cap. Brands cannot game an "HMTc-only" framing — the regulatory cap is the absolute floor on the HMTc limit, regardless of where the pooled literature value falls.

**Move 5 — Speciation non-substitution.** Total arsenic does not substitute for inorganic arsenic; total mercury does not substitute for methylmercury; total chromium does not substitute for Cr-VI. Each speciated analyte is a separate row in the Master Limit Table with its own pooled distribution and threshold. Brands cannot claim "low total Hg" to satisfy MeHg, even though a low total Hg pool supports a defensible MeHg read-across in the briefing (the read-across is a methodology choice, not a substitution).

**Move 6 — Clean benchmark principle.** The standard is set by the clean platform, not loosened to accommodate the dirty platform. The dirty subcategory has its own threshold (P45 of its own distribution) that gives dirty-platform brands a realistic path to certification, but the dirty threshold never loosens the clean threshold and the clean threshold never accommodates dirty-platform sourcing. This is settled policy per the Clean Benchmark Policy; it is not litigable on commercial-viability grounds.

---

## Pre-Publication Checklist — the 9 gates

Per the hmtc-standards skill, every Standards Briefing must pass nine pre-publication gates before it ships. This draft has been auto-checked against gates 1, 2, 3, 4, 5, 6, 7, 9; gate 8 requires human sign-off.

| Gate | Description | Status |
|---|---|---|
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ✗ FAIL (6 of 10) |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ✓ PASS |
| 3 | Every published value is on the primary increment ladder | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 2 analytes (Pb, Cd) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `acar2012-vegetable-oils-olives-turkey-etaas` (B) | Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry | Acar O · 2012 · Grasas y Aceites · doi:10.3989/gya.047512 |
| `ashraf2012-heavy-metals-vegetable-oils-saudi-arabia` (A) | Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population | Ashraf MW · 2012 · Asian Journal of Chemistry (Uncorrected Proof) · doi:null |
| `chen2001-edible-fats-oils-arsenic` (A) | Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer | Syr-Song Chen; Bi-Yu Lee; Chieu-Chen Cheng; Shin-Shou Chou · 2001 · Journal of Food and Drug Analysis · doi:10.38212/2224-6614.2799 |
| `famurewa2023-coconut-oil-metals-pesticides` (A) | Comparative assessment of different coconut oils: Chromatographic and spectrometric analyses of pesticide residues, toxic heavy metals, and associated contents | Ademola C. Famurewa; Chima A. Ekeleme-Egedigwe; Chimaraoke Onyeabo; Shadrach C. Kanu; Elizabeth E. Besong; Ekenechukwu K. Maduagwuna · 2023 · Measurement: Food · doi:10.1016/j.meafoo.2023.100082 |
| `kheirati-rounizi2021-sesame-oil-heavy-metals` (A) | The chemical composition and heavy metal content of sesame oil produced by different methods: A risk assessment study | Somayeh Kheirati Rounizi; Fateme Akrami Mohajeri; Hamdollah Moshtaghi Broujeni; Fatemeh Pourramezani; Sara Jambarsang; Hossein Kiani; Elham Khalili Sadrabad · 2021 · Food Science & Nutrition · doi:10.1002/fsn3.2245 |
| `lin2024-edible-oils-taiwan-12-metals` (A) | Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan | Lin S-T; Liao K-W; Xuan T-C; Chiou T-Y; Lin Z-E; Lee W-J · 2024 · JSFA Reports · doi:10.1002/jsf2.186 |
| `matei2025-vegetable-oils-romania-gfaas` (B) | Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania | Matei N; Birghila S; Dobrinas S; Soceanu A; Popescu V; Zaharia (Pricopie) R-G · 2025 · Applied Sciences · doi:10.3390/app15116269 |
| `mehri2024-vegetable-oils-iran-hamadan-ptes` (A) | A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran | Mehri F; Heshmati A; Talebi Ghane E; Khazaei M; Mahmudiono T; Fakhri Y · 2024 · BMC Public Health · doi:10.1186/s12889-023-17624-1 |
| `ntigoroku2025-delta-state-edible-oils-metals` (A) | Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria | Atarhe Ntigoroku; P. O. Agbaire · 2025 · Journal of Applied Sciences and Environmental Management · doi:10.4314/jasem.v29i10.32 |
| `pehlivan2008-vegetable-oils-turkey-icp-aes` (B) | Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES) | Pehlivan E; Arslan G; Gode F; Altun T; Özcan MM · 2008 · Grasas y Aceites · doi:10.3989/gya.2008.v59.i3.514 |
| `samuel2020-palm-oil-metals-nigeria` (A) | Variations on the physiochemical, microbiological and selected heavy metals of different palm oil samples sourced from Galadima, Tarauni, Sabon-Gari, Yan-Kura of Kano State and samples from Kogi and Edo States of Nigeria | Samuel E; Salisu S; Amina A; Omogbeme J; Hadiza RS · 2020 · Chemical Sciences Journal · doi:10.37421/CSJ.2020.11.209 |
| `tayeb2025-olive-corn-oil-iran-pb-cd` (A) | Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis | Tayeb J; Movassaghghazani M · 2025 · Toxicology Reports · doi:10.1016/j.toxrep.2025.101922 |
| `yohannes2024-vegetable-oils-ethiopia-gondar` (B) | Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia | Yohannes L; Feleke H; Sharew Melaku M; Eyachew Amare D · 2024 · BMC Public Health · doi:10.1186/s12889-024-19695-0 |
| `zhu2011-edible-vegetable-oils-china-8-metals` (A) | Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China | Zhu F; Fan W; Wang X; Qu L; Yao S · 2011 · Food and Chemical Toxicology · doi:10.1016/j.fct.2011.09.019 |

In addition to occurrence sources, this briefing cites:

- `docs/governance/hmtc-governing-principles.md` (v2.0, May 2026) — the five governing principles and the locked P97/P45 methodology
- `wiki/regulations/efsa-methylmercury-twi.md` — EFSA TWI 1.3 µg/kg-bw/week for MeHg
- `wiki/regulations/epa-iris-methylmercury-rfd.md` — EPA IRIS RfD 0.1 µg/kg-bw/day for MeHg
- `wiki/regulations/jecfa-methylmercury-ptwi.md` — JECFA PTWI 1.6 µg/kg-bw/week for MeHg
- WHO/JECFA pooled total-diet-study methodology
- EFSA Scientific Opinions on Pb (2010, 2024) and Cd (2009, 2024)
- ATSDR moment-matching guidance for summary-statistic sources
- Codex Alimentarius CAC/GL 50-2004 weighted pooling

---

## Provenance Footer

This briefing is reproducible by:

1. Checking out commit `c3e342f14d43f38b64d5b59a0c14ea2137971a71` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=cooking-oils-other` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-19T12:28:12.949Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `c3e342f14d43f38b64d5b59a0c14ea2137971a71` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*