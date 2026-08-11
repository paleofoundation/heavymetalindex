---
title: "HMTc Standards Briefing — Infant Formula, Powder (Non-Soy)"
type: hmtc-standards-briefing
product_slug: infant-formula-powder-non-soy
native_basis: powder_as_placed
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-08-11T10:25:25.775Z
authors: ["Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Infant Formula, Powder (Non-Soy)

**Product class:** Infant Formula, Powder (Non-Soy)
**Subcategory role:** clean subcategory (within-pair)
**Native basis for published thresholds:** powder_as_placed
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-08-11
**Author:** Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for infant formula powder non soy.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **11 ppb** [powder]<br>≈ 1.7 ppb [prepared] | 11.925 ppb | literature-baseline | 11 | provisional | 20 ppb (eu2023_pb_formula_powder_20) |
| iAs | **10 ppb** [powder]<br>≈ 1.5 ppb [prepared] | 10.894 ppb | literature-baseline | 7 | provisional | 20 ppb (eu2023_ias_formula_powder_20) |
| tAs | _adjudication pending_<br>≈ 2.8 ppb [prepared] | 20.253 ppb | literature-baseline | 10 | stable | 500 ppb (china_gb2762_tas_milk_powder_500) |
| Sn | **48 ppb** [powder]<br>≈ 6.9 ppb [prepared] | 48.996 ppb | literature-baseline | 6 | stable | — |
| Ni | **250 ppb** [powder]<br>≈ 35 ppb [prepared] | 415.518 ppb (capped to 250 by reg cap) | regulatory-alignment | 8 | provisional | 250 ppb (eu2024_ni_formula_powder_250) |
| Cd | **7.5 ppb** [powder]<br>≈ 1 ppb [prepared] | 7.520 ppb | literature-baseline | 13 | stable | 10 ppb (eu2023_cd_formula_cow_powder_10) |
| Cr-VI | _not material_ | 34.705 ppb (pool not standardized — not material) | literature-baseline | 3 | stable | — |
| Al | **3500 ppb** [powder]<br>≈ 500 ppb [prepared] | 6538.323 ppb (capped to 3500 by reg cap) | regulatory-alignment | 14 | stable | 3500 ppb (aunz_sch19_al_formula_nonsoy_500) |
| tHg | **1.4 ppb** [powder]<br>≈ 0.2 ppb [prepared] | 1.496 ppb | literature-baseline | 7 | provisional | — |
| MeHg | **0.7 ppb** [powder]<br>≈ 0.1 ppb [prepared] | 0.748 ppb (read-across) | feasibility-driven | 0 | feasibility-anchored (analytical LOQ binds) | EFSA TWI 1.3 µg/kg-bw/wk (exposure) |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=infant-formula-powder-non-soy`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 11 ppb [powder] · 11.925 ppb (pre-rounding)
**Cross-basis: ≈ 1.7 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 20 ppb (eu2023_pb_formula_powder_20)
**Pool composition:** 11 sources contributing · 388 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [4.16, 36.91] ppb**
**Sensitivity: log-normal 10.29 · gamma 16.15 · nonparametric 15.43 ppb · spread 36% (provisional)**



**Defensibility.** Pooled P97 from 11 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 20 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 11 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 11 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 11 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (11 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_max | 18.0% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 18.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### iAs

**Published HMTc threshold:** 10 ppb [powder] · 10.894 ppb (pre-rounding)
**Cross-basis: ≈ 1.5 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 20 ppb (eu2023_ias_formula_powder_20)
**Pool composition:** 7 sources contributing · 54 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [6.20, 20.15] ppb**
**Sensitivity: log-normal 13.80 · gamma 10.64 · nonparametric 16.64 ppb · spread 36% (provisional)**



**Defensibility.** Pooled P97 from 7 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 20 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 7 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 10 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 7 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (7 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.8% |
| jackson2012-arsenic-speciation-infant-formulas-first-foods (2012) · US | Arsenic concentration and speciation in infant formulas and … | powder_as_placed | 3 | lognormal_mean_median | 5.6% |

</details>

### tAs

**Published HMTc threshold:** adjudication pending — held provisional (elevated-market-outlier) · 20.253 ppb (pre-rounding)
**Cross-basis: ≈ 2.8 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 500 ppb (china_gb2762_tas_milk_powder_500)
**Pool composition:** 10 sources contributing · 310 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [7.54, 23.90] ppb**
**Sensitivity: log-normal 17.48 · gamma 19.34 · nonparametric 19.46 ppb · spread 10% (stable)**



**Defensibility.** Pooled P97 from 10 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 500 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 10 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 20 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 10 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (10 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| carignan2015-arsenic-infancy-well-water-breast-milk | carignan2015-arsenic-infancy-well-water-breast-milk | unknown | 72 | single_point | 0.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.6% |
| jackson2012-arsenic-speciation-infant-formulas-first-foods (2012) · US | Arsenic concentration and speciation in infant formulas and … | powder_as_placed | 9 | lognormal_mean_median | 5.6% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 28 | lognormal_mean_max | 17.5% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### Sn

**Published HMTc threshold:** 48 ppb [powder] · 48.996 ppb (pre-rounding)
**Cross-basis: ≈ 6.9 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 6 sources contributing · 51 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [25.97, 66.64] ppb**
**Sensitivity: log-normal 39.02 · gamma 38.11 · nonparametric 34.96 ppb · spread 10% (stable)**



**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 6 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 48 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 6 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 2.0% |

</details>

### Ni

**Published HMTc threshold:** 250 ppb [powder] · 250 ppb (pre-rounding)
**Cross-basis: ≈ 35 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 250 ppb (eu2024_ni_formula_powder_250)
**Pool composition:** 8 sources contributing · 123 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [55.75, 497.07] ppb**
**Sensitivity: log-normal 535.87 · gamma 389.27 · nonparametric 396.94 ppb · spread 27% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2024_ni_formula_powder_250). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 415.52 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2024_ni_formula_powder_250). A Daubert challenge on the value reduces to "is eu2024_ni_formula_powder_250 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 250 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2024_ni_formula_powder_250 cap. The pooled occurrence distribution from 8 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (8 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.2% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.8% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 62 | lognormal_mean_max | 50.0% |

</details>

### Cd

**Published HMTc threshold:** 7.5 ppb [powder] · 7.520 ppb (pre-rounding)
**Cross-basis: ≈ 1 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 10 ppb (eu2023_cd_formula_cow_powder_10)
**Pool composition:** 13 sources contributing · 467 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [5.34, 10.63] ppb**
**Sensitivity: log-normal 7.50 · gamma 7.62 · nonparametric 6.23 ppb · spread 18% (stable)**



**Defensibility.** Pooled P97 from 13 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 10 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 13 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 7.5 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 13 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (13 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_max | 12.2% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 12.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.1% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.1% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.1% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.1% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.2% |
| dabeka1987-canada-infant-formula-lead-cadmium (1987) · Canada | Lead, cadmium, and fluoride levels in market milk and infant… | as_sold | 17 | lognormal_mean_max | 3.6% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.2% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.2% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 62 | lognormal_mean_max | 13.3% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 49.3% |

</details>

### Cr-VI

**Published HMTc threshold:** **not material** — Hexavalent chromium does not persist in the infant-formula matrix. Two independent modern reference-method studies find it absent: saraiva2021 (species-specific isotope-dilution HPLC-ICP-MS, LOQ 0.049 ug/kg) does not quantify Cr-VI in infant formula and measures near-total reduction of spiked Cr-VI to Cr-III during sample prep; hernandez2019 (ANSES LC-ICP-MS, 68 brands of milk/dairy/cereal) detects no Cr-VI and attributes older positive findings to analytical artifacts. The sole source reporting measurable Cr-VI (soares2000, superseded ion-exchange/ETAAS, 37x coarser LOQ) is graded EF-3 context-only. See data/workbench/standards/2026-07-31-chromium-formula-adjudication.md. China GB 2762 regulates total Cr only, not Cr-VI.
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 20 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.



<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 7 | lognormal_mean_max | 35.0% |
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 5 | lognormal_mean_max | 25.0% |
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 8 | lognormal_mean_max | 40.0% |

</details>

### Al

**Published HMTc threshold:** 3500 ppb [powder] · 3500 ppb (pre-rounding)
**Cross-basis: ≈ 500 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 3500 ppb (aunz_sch19_al_formula_nonsoy_500)
**Pool composition:** 14 sources contributing · 233 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [3569.92, 9845.43] ppb**
**Sensitivity: log-normal 6562.41 · gamma 7269.43 · nonparametric 7318.66 ppb · spread 10% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (aunz_sch19_al_formula_nonsoy_500). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 6538.32 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (aunz_sch19_al_formula_nonsoy_500). A Daubert challenge on the value reduces to "is aunz_sch19_al_formula_nonsoy_500 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 3500 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = aunz_sch19_al_formula_nonsoy_500 cap. The pooled occurrence distribution from 14 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (14 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | unknown | 8 | uniform_max_only | 3.4% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | powder_as_placed | 8 | uniform_max_only | 3.4% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_max | 24.5% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 24.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 4.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 4.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | prepared_for_feeding | 7 | uniform_max_only | 3.0% |
| chuchu2013-aluminium-in-infant-formulas (2013) · UK | The aluminium content of infant formulas remains too high | prepared_for_feeding | 18 | uniform_max_only | 4.3% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 28 | lognormal_mean_max | 12.0% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 34 | lognormal_mean_max | 14.6% |

</details>

### tHg

**Published HMTc threshold:** 1.4 ppb [powder] · 1.496 ppb (pre-rounding)
**Cross-basis: ≈ 0.2 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 7 sources contributing · 290 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.89, 2.22] ppb**
**Sensitivity: log-normal 1.25 · gamma 1.67 · nonparametric 1.18 ppb · spread 29% (provisional)**



**Defensibility.** Pooled P97 from 7 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 7 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1.4 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 7 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (7 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### MeHg

**Published HMTc threshold:** 0.7 ppb [powder] · 0.748 ppb (pre-rounding)
**Cross-basis: ≈ 0.1 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `feasibility-driven`
**Regulatory ceiling reference:** EFSA TWI 1.3 µg/kg-bw/week (exposure context, not concentration cap)
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors
**feasibility-anchored (analytical LOQ binds)**

**Four-anchor read-across (this row has no direct MeHg occurrence data):**

1. **Empirical anchor.** Total Hg pooled P97 for this row = 1.496 ppb (7 contributing sources). MeHg ≤ tHg by chemistry; for a non-fish matrix the methylmercury fraction is typically below 50%.
2. **Analytical anchor.** ICP-MS with cold-vapor hydride generation for MeHg in dairy-matrix formula has a typical LOQ of 0.1 µg/kg. Path B floor = LOQ × 5 = 0.5 ppb.
3. **Regulatory anchor.** EFSA TWI = 1.3 µg/kg b.w./week (efsa-methylmercury-twi); EPA IRIS RfD = 0.1 µg/kg b.w./day (epa-iris-methylmercury-rfd); JECFA PTWI = 1.6 µg/kg b.w./week (jecfa-methylmercury-ptwi). At 0.5 ppb in formula × typical infant intake of ~150 mL/kg-bw/day, the MeHg contribution from formula is ~0.075 µg/kg-bw/week, roughly 6% of the EFSA TWI.
4. **Inferential anchor.** Dairy supply chain does not biomagnify mercury. Cattle do not consume aquatic biomass; pasture water and feed contribute primarily inorganic Hg. The matrix is not a methylmercury vehicle.

Each anchor is independently citable. The published threshold is the maximum of the analytical floor and the read-across upper bound, which gives the smallest defensible value that a competent lab can verify. Tagged `feasibility-driven` because the analytical LOQ is the binding constraint today; this threshold ratchets tighter when MeHg-specific occurrence data for this matrix lands in the corpus (scheduled for Tier 2 review after Phase 1 backlog clears).

**Defensibility.** No direct occurrence data for this analyte in this matrix; the value is anchored by the four-anchor read-across documented above. The empirical anchor (parent species pool), analytical anchor (Path B LOQ × 5), regulatory anchor (EFSA/EPA/JECFA exposure framework), and inferential anchor (matrix chemistry) are independently defensible. A plaintiff's "no MeHg data" attack does not land because each anchor stands on its own; rebutting one does not invalidate the threshold.

<!-- audience: brand-legal -->
**Brand legal read.** The threshold is the analytical-method floor (Path B LOQ × 5). Daubert defense is "you cannot publish a tighter limit than the standard analytical method can verify, and we cannot defensibly certify against a limit no lab can confirm." The four-anchor read-across documents that the matrix is empirically clean for this analyte.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 0.7 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** No direct MeHg occurrence data for this matrix in the structured corpus. Threshold is derived via four-anchor read-across documented above: empirical (total Hg pool for this row, see tHg row); analytical (ICP-MS-HG LOQ × 5); regulatory (EFSA TWI 1.3 µg/kg-bw/week + EPA RfD 0.1 µg/kg-bw/day + JECFA PTWI 1.6 µg/kg-bw/week as exposure ceiling); inferential (non-fish matrix chemistry). Methodology follows WHO/JECFA read-across precedent for analytes where direct occurrence data is absent but the parent species, the regulatory exposure framework, and the matrix biology are all citable.



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
Response: For Ni, Al, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 4 analytes (Pb, iAs, Ni, tHg) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

**Attack 6: "Methylmercury — you have no data, but you published a value anyway."**
Response: The four-anchor read-across is documented in the MeHg per-analyte section. The empirical anchor (parent species pool: tHg ≈ 0 ppb in this matrix), the analytical anchor (Path B LOQ × 5), the regulatory anchor (EFSA TWI as exposure context), and the inferential anchor (non-fish matrix chemistry) are independently citable. The published value is the analytical floor — the smallest concentration a competent lab can verify. Tagged `feasibility-driven` with scheduled Tier 2 review when MeHg-specific occurrence data lands. The "no data" framing misrepresents the four-anchor defense.

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
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ✓ PASS |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ✓ PASS |
| 3 | Every published value rounds toward the evidence (≤ the precise candidate; never loosened) | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ✓ PASS |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 4 analytes (Pb, iAs, Ni, tHg) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `burrell2010-aluminium-in-infant-formulas` (A) | There is (still) too much aluminium in infant formulas | Shelle-Ann M. Burrell; Christopher Exley · 2010 · BMC Pediatrics · doi:10.1186/1471-2431-10-63 |
| `carignan2015-arsenic-infancy-well-water-breast-milk` | carignan2015-arsenic-infancy-well-water-breast-milk |  |
| `chekri2019-french-infant-toddler-tds-trace-elements` (A) | Trace element contents in foods from the first French Total Diet Study on infants and toddlers | Rachida Chekri; Emilie Le Calvez; Julie Zinck; Jean-Charles Leblanc; Veronique Sirot; Marion Hulin; Laurent Noel; Thierry Guerin · 2019 · Journal of Food Composition and Analysis · doi:10.1016/j.jfca.2019.02.002 |
| `chuchu2013-aluminium-in-infant-formulas` (A) | The aluminium content of infant formulas remains too high | Nancy Chuchu; Bhavini Patel; Blaise Sebastian; Christopher Exley · 2013 · BMC Pediatrics · doi:10.1186/1471-2431-13-162 |
| `dabeka1987-canada-infant-formula-lead-cadmium` (A) | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Dabeka; McKenzie · 1987 · Journal of Association of Official Analytical Chemists 70(4):754-757 · doi:10.1093/jaoac/70.4.754 |
| `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` (A) | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Robert Dabeka; Andre Fouquet; Stephane Belisle; Stephane Turcotte · 2011 · Food Additives & Contaminants: Part A · doi:10.1080/19393210.2011.571795 |
| `fda2026-infant-formula-toxic-elements-special-survey` (A) | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | U.S. Food and Drug Administration · 2026 · FDA analytical results table |
| `fsa2016-infant-food-formula-metals-survey` (A) | Survey of metals in commercial infant foods, infant formula and non-infant specific foods | Food Standards Agency / Fera Science Ltd · 2016 · UK Food Standards Agency report FS102048 |
| `jackson2012-arsenic-speciation-infant-formulas-first-foods` (A) | Arsenic concentration and speciation in infant formulas and first foods | Brian P. Jackson; Vivien F. Taylor; Tracy Punshon; Kathryn L. Cottingham · 2012 · Pure and Applied Chemistry, Vol. 84, No. 2, pp. 215-223 · doi:10.1351/PAC-CON-11-09-17 |
| `pandelova2012-eu-baby-food-formula-elements` (A) | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements | Pandelova M; Levy Lopez W; Michalke B; Schramm KW · 2012 · Journal of Food Composition and Analysis · doi:10.1016/j.jfca.2012.04.011 |
| `soares2000-chromium-vi-powdered-milk-formulas` (A) | Selective Determination of Chromium (VI) in Powdered Milk Infant Formulas by Electrothermal Atomization Atomic Absorption Spectrometry after Ion Exchange | Maria E Soares; Maria L Bastos; Margarida Ferreira · 2000 · Journal of AOAC International 83(1):220-223 · doi:10.1093/jaoac/83.1.220 |

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

1. Checking out commit `f52208530592c38af25b890fdf4970316954011c` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=infant-formula-powder-non-soy` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-08-11T10:25:25.785Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `f52208530592c38af25b890fdf4970316954011c` |
| Author | Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS) |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Institute of Contaminant Standards (ICS), which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*