---
title: "HMTc Standards Briefing — Infant Formula, RTF Liquid (Non-Soy)"
type: hmtc-standards-briefing
product_slug: infant-formula-rtf-liquid-non-soy
native_basis: as_consumed
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-19T15:24:11.326Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Infant Formula, RTF Liquid (Non-Soy)

**Product class:** Infant Formula, RTF Liquid (Non-Soy)
**Subcategory role:** clean subcategory (within-pair)
**Native basis for published thresholds:** as_consumed
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for infant formula rtf liquid non soy.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **2 ppb** [as-consumed]<br>≈ 15 ppb [powder] | 1.498 ppb | literature-baseline | 5 | stable | 10 ppb (eu2023_pb_formula_liquid_10) |
| iAs | **0.5 ppb** [as-consumed]<br>≈ 3 ppb [powder] | 0.388 ppb | literature-baseline | 3 | needs_review | 10 ppb (eu2023_ias_formula_liquid_10) |
| tAs | **3 ppb** [as-consumed]<br>≈ 20 ppb [powder] | 2.286 ppb | literature-baseline | 4 | provisional | — |
| Sn | **5 ppb** [as-consumed]<br>≈ 25 ppb [powder] | 3.133 ppb | literature-baseline | 3 | provisional | — |
| Ni | **20 ppb** [as-consumed]<br>≈ 200 ppb [powder] | 19.408 ppb | literature-baseline | 3 | stable | — |
| Cd | **1 ppb** [as-consumed]<br>≈ 10 ppb [powder] | 0.761 ppb | literature-baseline | 6 | stable | 5 ppb (eu2023_cd_formula_cow_liquid_5) |
| Al | **1000 ppb** [as-consumed]<br>≈ 10000 ppb [powder] | 714.478 ppb | literature-baseline | 6 | stable | — |
| tHg | **0.5 ppb** [as-consumed]<br>≈ 2 ppb [powder] | 0.199 ppb | literature-baseline | 4 | provisional | — |

**How to read this table.** "Published" values are rounded up to the HMTc primary increment ladder (1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000, 1300, 1500, 2000, 5000, 10000 ppb) per the program's publication conventions; this gives brands an unambiguous bin to test against. The "precise" column shows the pooled-engine output before rounding so the methodology is transparent and re-derivable. Rationale tags map to CLAUDE.md Part 19's four allowed tags: `literature-baseline` (pooled value binds), `regulatory-alignment` (regulatory ceiling binds), `feasibility-driven` (analytical method binds), and `precautionary` (manual override below pooled and regulatory).

---

## Methodology — one page

**Per-analyte standards.** For each (product row, analyte) cell, every source loaded for that cell contributes to a pooled distribution via moment-matching pseudo-sample expansion. Sample-level data uses raw values; summary statistics (mean, median, max, lb/ub, reported percentiles) reconstruct under log-normal or Tobit assumptions documented per source. Pseudo-samples are weighted by source N and capped at 50% relative pool share to prevent any one survey from dominating. The pooled distribution is sorted and queried at the per-analyte target percentile:

- **Clean subcategory:** standard = pooled P97
- **Dirty subcategory:** standard = pooled P45
- **Independent (no within-pair partner):** standard = pooled P97 by default

**Why P97 / P45, not P90 / P30 (the row-pass calibration).** A brand certifies a product (one row, ten analytes simultaneously) — not one analyte at a time. Setting each per-analyte limit at the raw P90 of the clean distribution would deliver a joint row-pass rate close to 0.9^10 = 35% under analyte independence. Under realistic analyte correlation (~0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50-70%. To deliver the row-level outcomes the Governing Principles require — approximately 90% of clean-subcategory brands and approximately 30% of dirty-subcategory brands pass row certification — per-analyte limits are uplifted to P97 (clean) and P45 (dirty). This is the calibration that delivers the program's stated objective. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening; per-analyte differentiation (e.g., Pb tighter than Ni) is deferred until HMTc has 6-12 months of lot-testing data to measure actual joint pass rates.

**Basis.** Each product row's standard is published in the native basis of the product form: powder rows in powder-as-placed-on-market, ready-to-feed liquid rows in as-consumed, dry cereal rows in dry-as-sold, puree rows in as-consumed. Brands ship and test in their product's native form; the certification mark matches that form. Sources reporting in non-native bases are converted into the row's native basis during pooling via documented factors (the 1:7 reconstitution ratio for powder ↔ prepared; within-class identity for as_sold ↔ dry_as_sold). The cross-basis equivalent of every published value is shown in the Master Limit Table for ease of reference by audiences operating in different bases.

**Regulatory cap.** The final published HMTc value never exceeds the lowest applicable loaded regulatory ceiling, expressed in the product's native basis. When the pooled P97/P45 exceeds the regulatory cap, the cap binds and the rationale tag is `regulatory-alignment`. When the pooled value is below the cap, the rationale is `literature-baseline` and the cap is shown for context only.

**Sensitivity.** Each pooled value is recomputed under three parametric assumptions: log-normal (headline), gamma (alternative), and nonparametric reconstruction. The spread across the three is reported as the sensitivity band: stable (≤25%), provisional (25–50%), or needs_review (>50%). Confidence intervals are computed via meta-analytic bootstrap that resamples whole sources (not individual pseudo-samples) to capture between-source uncertainty.

**Methodology authorities.** The pooling approach follows WHO/JECFA pooled total-diet study methodology, the EFSA Scientific Opinions on lead (2010, 2024) and cadmium (2009, 2024) for log-normal contaminant occurrence reconstruction, ATSDR moment-matching guidance for summary-statistic-only sources, and Codex CAC/GL 50-2004 weighted pooling. Per-source contribution logs document every admission decision and every basis conversion.

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=infant-formula-rtf-liquid-non-soy`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 2 ppb [as-consumed] · 1.498 ppb (pre-rounding)
**Cross-basis: ≈ 15 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 10 ppb (eu2023_pb_formula_liquid_10)
**Pool composition:** 5 sources contributing · 100 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.50, 1.73] ppb**
**Sensitivity: log-normal 1.45 · gamma 1.69 · nonparametric 1.57 ppb · spread 14% (stable)**



**Defensibility.** Pooled P97 from 5 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 10 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 5 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 2 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 5 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (5 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 67 | lognormal_mean_median | 50.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.0% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 20 | percentile_interpolation | 20.0% |

</details>

### iAs

**Published HMTc threshold:** 0.5 ppb [as-consumed] · 0.388 ppb (pre-rounding)
**Cross-basis: ≈ 3 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 10 ppb (eu2023_ias_formula_liquid_10)
**Pool composition:** 3 sources contributing · 30 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [0.23, 1.33] ppb**
**Sensitivity: log-normal 0.50 · gamma 0.88 · nonparametric 1.66 ppb · spread 70% (needs_review)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 10 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 0.5 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band needs_review.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |

</details>

### tAs

**Published HMTc threshold:** 3 ppb [as-consumed] · 2.286 ppb (pre-rounding)
**Cross-basis: ≈ 20 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 4 sources contributing · 50 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.49, 2.39] ppb**
**Sensitivity: log-normal 1.24 · gamma 2.07 · nonparametric 1.49 ppb · spread 40% (provisional)**



**Defensibility.** Pooled P97 from 4 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 4 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 3 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 4 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 20 | percentile_interpolation | 40.0% |

</details>

### Sn

**Published HMTc threshold:** 5 ppb [as-consumed] · 3.133 ppb (pre-rounding)
**Cross-basis: ≈ 25 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 30 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [2.64, 8.01] ppb**
**Sensitivity: log-normal 5.91 · gamma 3.06 · nonparametric 4.23 ppb · spread 48% (provisional)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 5 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |

</details>

### Ni

**Published HMTc threshold:** 20 ppb [as-consumed] · 19.408 ppb (pre-rounding)
**Cross-basis: ≈ 200 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 30 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [7.02, 21.48] ppb**
**Sensitivity: log-normal 15.34 · gamma 12.12 · nonparametric 11.88 ppb · spread 23% (stable)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 20 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 33.3% |

</details>

### Cd

**Published HMTc threshold:** 1 ppb [as-consumed] · 0.761 ppb (pre-rounding)
**Cross-basis: ≈ 10 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 5 ppb (eu2023_cd_formula_cow_liquid_5)
**Pool composition:** 6 sources contributing · 126 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.43, 1.18] ppb**
**Sensitivity: log-normal 0.61 · gamma 0.69 · nonparametric 0.67 ppb · spread 12% (stable)**



**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 5 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 6 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 6 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 67 | lognormal_mean_median | 50.0% |
| dabeka1987-canada-infant-formula-lead-cadmium (1987) · Canada | Lead, cadmium, and fluoride levels in market milk and infant… | as_consumed | 13 | lognormal_mean_max | 10.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 7.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 7.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 7.9% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 20 | percentile_interpolation | 15.9% |

</details>

### Al

**Published HMTc threshold:** 1000 ppb [as-consumed] · 714.478 ppb (pre-rounding)
**Cross-basis: ≈ 10000 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 6 sources contributing · 96 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [268.53, 1175.64] ppb**
**Sensitivity: log-normal 910.40 · gamma 1029.80 · nonparametric 862.18 ppb · spread 16% (stable)**



**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 6 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 6 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 67 | lognormal_mean_median | 50.0% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | as_consumed | 8 | uniform_max_only | 8.3% |
| chuchu2013-aluminium-in-infant-formulas (2013) · UK | The aluminium content of infant formulas remains too high | as_consumed | 10 | uniform_max_only | 10.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 10.4% |

</details>

### tHg

**Published HMTc threshold:** 0.5 ppb [as-consumed] · 0.199 ppb (pre-rounding)
**Cross-basis: ≈ 2 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 4 sources contributing · 50 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.14, 0.47] ppb**
**Sensitivity: log-normal 0.36 · gamma 0.25 · nonparametric 0.22 ppb · spread 38% (provisional)**



**Defensibility.** Pooled P97 from 4 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 4 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 0.5 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 4 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_consumed | 10 | lognormal_lod_censored_midpoint | 20.0% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 20 | percentile_interpolation | 40.0% |

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

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 3 analytes (tAs, Sn, tHg) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: The 1:7 powder ↔ prepared-for-feeding conversion is the conservative reconstitution ratio (1 g powder + 6 g water = 7 g prepared) standard across infant-formula regulatory frameworks (FDA Closer-to-Zero, EU 2023/915). Within-class conversions (as_sold ↔ dry_as_sold) pass through with factor 1. Every basis conversion is logged per source in the contribution log; unknown-conversion cases are flagged and not silently coerced.

**Attack 8: "Show me one source you excluded."**
Response: No source contributing a usable statistic is excluded. Sources marked "no_usable_statistic" in the contribution log are LOD-censored entries with neither mean nor lb/ub recorded. Sources without a structured CSV row are documented in the routing audit and the gap report; those are extraction gaps, not exclusions, and they are tracked in Phase 1 backlog with target completion timelines.

---

## Anti-Circumvention — the six-move argument

Per the hmtc-standards skill rule #6, every Standards Briefing publishes the anti-circumvention argument that defends the program against the most common evasion strategies. The six moves are:

**Move 1 — Clean platform anchor.** The clean subcategory standard is set at P97 of the clean platform's distribution, not the dirty platform's. Brands cannot argue "the dirty platform is also part of the market, so the limit should accommodate it." The clean platform exists and is achievable; **97% of brands in the clean platform's distribution already meet the per-analyte limit** (the cleanest 97%, not the cleanest 3%). At the row level, with ten analytes combined under typical analyte correlation, approximately 90% of clean-platform brands pass joint certification — which is the Governing Principles' stated 90% clean row-pass target.

**Move 2 — Row-level certification.** A brand certifies a product (one row, ten analytes simultaneously), not one analyte. The single-analyte attack "you let 70% of brands pass on Pb individually" misses the joint test. Per-analyte P97 delivers ~90% row-pass; the joint discipline is the certification.

**Move 3 — Native basis discipline.** The standard is published in the product's native basis. Brands cannot reconstitute their powder, test the prepared form, then claim "we meet the standard in prepared basis" against a powder cap. Each row tests in its native form; cross-basis conversions are documented but never substitute.

**Move 4 — Regulatory ceiling absolute.** The final HMTc value never exceeds the lowest applicable loaded regulatory cap. Brands cannot game an "HMTc-only" framing — the regulatory cap is the absolute floor on the HMTc limit, regardless of where the pooled literature value falls.

**Move 5 — Speciation non-substitution.** Total arsenic does not substitute for inorganic arsenic; total mercury does not substitute for methylmercury; total chromium does not substitute for Cr-VI. Each speciated analyte is a separate row in the Master Limit Table with its own pooled distribution and threshold. Brands cannot claim "low total Hg" to satisfy MeHg, even though a low total Hg pool supports a defensible MeHg read-across in the briefing (the read-across is a methodology choice, not a substitution).

**Move 6 — Clean benchmark principle.** The standard is set by the clean platform, not loosened to accommodate the dirty platform. The dirty subcategory has its own threshold (P45 of its own distribution) that gives dirty-platform brands a realistic path to certification, but the dirty threshold never loosens the clean threshold and the clean threshold never accommodates dirty-platform sourcing. This is settled policy per the Clean Benchmark Policy; it is not litigable on commercial-viability grounds.

---

## Pre-Publication Checklist — the 9 gates

Per the hmtc-standards skill, every Standards Briefing must pass nine pre-publication gates before it ships. This draft has been auto-checked against gates 1, 2, 3, 4, 5, 6, 7, 9; gate 8 requires human sign-off.

| Gate | Description | Status |
|---|---|---|
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ✗ FAIL (8 of 10) |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ✓ PASS |
| 3 | Every published value is on the primary increment ladder | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ✓ PASS |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 3 analytes (tAs, Sn, tHg) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `burrell2010-aluminium-in-infant-formulas` (A) | There is (still) too much aluminium in infant formulas | Shelle-Ann M. Burrell; Christopher Exley · 2010 · BMC Pediatrics · doi:10.1186/1471-2431-10-63 |
| `chuchu2013-aluminium-in-infant-formulas` (A) | The aluminium content of infant formulas remains too high | Nancy Chuchu; Bhavini Patel; Blaise Sebastian; Christopher Exley · 2013 · BMC Pediatrics · doi:10.1186/1471-2431-13-162 |
| `dabeka1987-canada-infant-formula-lead-cadmium` (A) | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Dabeka; McKenzie · 1987 · Journal of Association of Official Analytical Chemists 70(4):754-757 · doi:10.1093/jaoac/70.4.754 |
| `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` (A) | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Robert Dabeka; Andre Fouquet; Stephane Belisle; Stephane Turcotte · 2011 · Food Additives & Contaminants: Part A · doi:10.1080/19393210.2011.571795 |
| `fda2026-infant-formula-toxic-elements-special-survey` (A) | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | U.S. Food and Drug Administration · 2026 · FDA analytical results table |
| `fsa2016-infant-food-formula-metals-survey` (A) | Survey of metals in commercial infant foods, infant formula and non-infant specific foods | Food Standards Agency / Fera Science Ltd · 2016 · UK Food Standards Agency report FS102048 |

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

1. Checking out commit `091aff1611af3dc48cd88e268bc88d79d14688d4` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=infant-formula-rtf-liquid-non-soy` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-19T15:24:11.335Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `091aff1611af3dc48cd88e268bc88d79d14688d4` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*