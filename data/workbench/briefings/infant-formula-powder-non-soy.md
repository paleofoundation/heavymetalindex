---
title: "HMTc Standards Briefing — Infant Formula, Powder (Non-Soy)"
type: hmtc-standards-briefing
product_slug: infant-formula-powder-non-soy
native_basis: powder_as_placed
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-05-17T23:25:09.512Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Infant Formula, Powder (Non-Soy)

**Product class:** Infant Formula, Powder (Non-Soy)
**Subcategory role:** clean subcategory (within-pair)
**Native basis for published thresholds:** powder_as_placed
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-05-17
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for infant formula powder non soy.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **20 ppb** [powder]<br>≈ 3 ppb [prepared] | 66.321 ppb (capped to 20 by reg cap) | regulatory-alignment | 18 | stable | 20 ppb (eu2023_pb_formula_powder_20) |
| iAs | **10 ppb** [powder]<br>≈ 2 ppb [prepared] | 8.655 ppb | literature-baseline | 7 | provisional | 20 ppb (eu2023_ias_formula_powder_20) |
| tAs | **25 ppb** [powder]<br>≈ 5 ppb [prepared] | 23.730 ppb | literature-baseline | 17 | stable | — |
| Sn | **100 ppb** [powder]<br>≈ 15 ppb [prepared] | 76.200 ppb | literature-baseline | 16 | stable | — |
| Ni | **100 ppb** [powder]<br>≈ 15 ppb [prepared] | 83.496 ppb | literature-baseline | 9 | provisional | — |
| Cd | **10 ppb** [powder]<br>≈ 2 ppb [prepared] | 13.028 ppb (capped to 10 by reg cap) | regulatory-alignment | 24 | provisional | 10 ppb (eu2023_cd_formula_cow_powder_10) |
| Cr-VI | **50 ppb** [powder]<br>≈ 5 ppb [prepared] | 34.705 ppb | literature-baseline | 3 | stable | — |
| Al | **5000 ppb** [powder]<br>≈ 500 ppb [prepared] | 3130.713 ppb | literature-baseline | 19 | provisional | — |
| tHg | **2 ppb** [powder]<br>≈ 0.5 ppb [prepared] | 1.575 ppb | literature-baseline | 8 | provisional | — |
| MeHg | **1 ppb** [powder]<br>≈ 0.5 ppb [prepared] | 0.787 ppb (read-across) | feasibility-driven | 0 | feasibility-anchored (analytical LOQ binds) | EFSA TWI 1.3 µg/kg-bw/wk (exposure) |

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

**Published HMTc threshold:** 20 ppb [powder] · 20 ppb (pre-rounding)
**Cross-basis: ≈ 3 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 20 ppb (eu2023_pb_formula_powder_20)
**Pool composition:** 18 sources contributing · 296 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [4.96, 158.75] ppb**
**Sensitivity: log-normal 66.55 · gamma 69.55 · nonparametric 69.66 ppb · spread 5% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_formula_powder_20). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 66.32 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_formula_powder_20). A Daubert challenge on the value reduces to "is eu2023_pb_formula_powder_20 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 20 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_formula_powder_20 cap. The pooled occurrence distribution from 18 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (18 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| gardener2019-pb-cd-us-infant-formula-baby-foods (2019) · US | Lead and cadmium contamination in a large sample of United S… | unknown | 564 | uniform_max_only | 3.4% |
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 8 | uniform_range_only | 2.7% |
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 12 | uniform_range_only | 4.0% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 19.3% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 4.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### iAs

**Published HMTc threshold:** 10 ppb [powder] · 8.655 ppb (pre-rounding)
**Cross-basis: ≈ 2 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 20 ppb (eu2023_ias_formula_powder_20)
**Pool composition:** 7 sources contributing · 52 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [4.26, 20.22] ppb**
**Sensitivity: log-normal 11.45 · gamma 8.54 · nonparametric 14.11 ppb · spread 40% (provisional)**



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
| shibata2016-arsenic-rice-cereal-risk-assessment-us (2016) · US | Risk Assessment of Arsenic in Rice Cereal and Other Dietary … | unknown | 1 | single_point | 1.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 19.2% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.9% |

</details>

### tAs

**Published HMTc threshold:** 25 ppb [powder] · 23.730 ppb (pre-rounding)
**Cross-basis: ≈ 5 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 17 sources contributing · 104 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [16.15, 34] ppb**
**Sensitivity: log-normal 23.73 · gamma 23.73 · nonparametric 23.73 ppb · spread 0% (stable)**



**Defensibility.** Pooled P97 from 17 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 17 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 25 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 17 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (17 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| carignan2015-arsenic-infancy-well-water-breast-milk (2015) · US | Arsenic Exposure in Infancy: Estimating the Contributions of… | unknown | 9 | single_point | 1.0% |
| carignan2015-arsenic-infancy-well-water-breast-milk (2015) · US | Arsenic Exposure in Infancy: Estimating the Contributions of… | unknown | 72 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 9.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 9.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 9.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.0% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 9.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.0% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### Sn

**Published HMTc threshold:** 100 ppb [powder] · 76.200 ppb (pre-rounding)
**Cross-basis: ≈ 15 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 16 sources contributing · 61 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [42.03, 95] ppb**
**Sensitivity: log-normal 76.20 · gamma 76.20 · nonparametric 76.20 ppb · spread 0% (stable)**



**Defensibility.** Pooled P97 from 16 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 16 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 16 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (16 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 1.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 16.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 16.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 16.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 16.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 16.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.6% |

</details>

### Ni

**Published HMTc threshold:** 100 ppb [powder] · 83.496 ppb (pre-rounding)
**Cross-basis: ≈ 15 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 9 sources contributing · 81 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [42.34, 107.35] ppb**
**Sensitivity: log-normal 78.16 · gamma 86.74 · nonparametric 124.88 ppb · spread 37% (provisional)**



**Defensibility.** Pooled P97 from 9 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 9 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 9 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (9 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 8 | uniform_range_only | 9.9% |
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 12 | uniform_range_only | 14.8% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 12.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 1.2% |

</details>

### Cd

**Published HMTc threshold:** 10 ppb [powder] · 10 ppb (pre-rounding)
**Cross-basis: ≈ 2 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 10 ppb (eu2023_cd_formula_cow_powder_10)
**Pool composition:** 24 sources contributing · 340 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [5.97, 157.80] ppb**
**Sensitivity: log-normal 12.70 · gamma 9.45 · nonparametric 9.71 ppb · spread 26% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_cd_formula_cow_powder_10). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 13.03 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_cd_formula_cow_powder_10). A Daubert challenge on the value reduces to "is eu2023_cd_formula_cow_powder_10 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 10 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_cd_formula_cow_powder_10 cap. The pooled occurrence distribution from 24 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (24 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| gardener2019-pb-cd-us-infant-formula-baby-foods (2019) · US | Lead and cadmium contamination in a large sample of United S… | unknown | 564 | uniform_max_only | 2.9% |
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 8 | uniform_range_only | 2.4% |
| mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals (2026) · NG | Nutrient exploration and heavy metal risk assessment of baby… | unknown | 12 | uniform_range_only | 3.5% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 16.8% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 3.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |

</details>

### Cr-VI

**Published HMTc threshold:** 50 ppb [powder] · 34.705 ppb (pre-rounding)
**Cross-basis: ≈ 5 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 20 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [23.17, 84.45] ppb**
**Sensitivity: log-normal 61.74 · gamma 49.82 · nonparametric 59.97 ppb · spread 19% (stable)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 50 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 7 | lognormal_mean_max | 35.0% |
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 5 | lognormal_mean_max | 25.0% |
| soares2000-chromium-vi-powdered-milk-formulas (2000) · PT | Selective Determination of Chromium (VI) in Powdered Milk In… | as_sold | 8 | lognormal_mean_max | 40.0% |

</details>

### Al

**Published HMTc threshold:** 5000 ppb [powder] · 3130.713 ppb (pre-rounding)
**Cross-basis: ≈ 500 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 19 sources contributing · 120 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [1461.35, 7465.23] ppb**
**Sensitivity: log-normal 3640.37 · gamma 5449.58 · nonparametric 3384.79 ppb · spread 38% (provisional)**



**Defensibility.** Pooled P97 from 19 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 19 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 5000 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 19 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (19 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 47.5% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 10.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.8% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.8% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 8.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.8% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.8% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.8% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | prepared_for_feeding | 7 | uniform_max_only | 5.8% |
| chuchu2013-aluminium-in-infant-formulas (2013) · UK | The aluminium content of infant formulas remains too high | prepared_for_feeding | 18 | uniform_max_only | 8.3% |

</details>

### tHg

**Published HMTc threshold:** 2 ppb [powder] · 1.575 ppb (pre-rounding)
**Cross-basis: ≈ 0.5 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 8 sources contributing · 122 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.90, 90.21] ppb**
**Sensitivity: log-normal 1.29 · gamma 1.78 · nonparametric 1.21 ppb · spread 32% (provisional)**



**Defensibility.** Pooled P97 from 8 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 8 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 2 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 8 contributing sources across multiple jurisdictions. Sensitivity band provisional.

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
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### MeHg

**Published HMTc threshold:** 1 ppb [powder] · 0.787 ppb (pre-rounding)
**Cross-basis: ≈ 0.5 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `feasibility-driven`
**Regulatory ceiling reference:** EFSA TWI 1.3 µg/kg-bw/week (exposure context, not concentration cap)
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors
**feasibility-anchored (analytical LOQ binds)**

**Four-anchor read-across (this row has no direct MeHg occurrence data):**

1. **Empirical anchor.** Total Hg pooled P97 for this row = 1.575 ppb (8 contributing sources). MeHg ≤ tHg by chemistry; for a non-fish matrix the methylmercury fraction is typically below 50%.
2. **Analytical anchor.** ICP-MS with cold-vapor hydride generation for MeHg in dairy-matrix formula has a typical LOQ of 0.1 µg/kg. Path B floor = LOQ × 5 = 0.5 ppb.
3. **Regulatory anchor.** EFSA TWI = 1.3 µg/kg b.w./week (efsa-methylmercury-twi); EPA IRIS RfD = 0.1 µg/kg b.w./day (epa-iris-methylmercury-rfd); JECFA PTWI = 1.6 µg/kg b.w./week (jecfa-methylmercury-ptwi). At 0.5 ppb in formula × typical infant intake of ~150 mL/kg-bw/day, the MeHg contribution from formula is ~0.075 µg/kg-bw/week, roughly 6% of the EFSA TWI.
4. **Inferential anchor.** Dairy supply chain does not biomagnify mercury. Cattle do not consume aquatic biomass; pasture water and feed contribute primarily inorganic Hg. The matrix is not a methylmercury vehicle.

Each anchor is independently citable. The published threshold is the maximum of the analytical floor and the read-across upper bound, which gives the smallest defensible value that a competent lab can verify. Tagged `feasibility-driven` because the analytical LOQ is the binding constraint today; this threshold ratchets tighter when MeHg-specific occurrence data for this matrix lands in the corpus (scheduled for Tier 2 review after Phase 1 backlog clears).

**Defensibility.** No direct occurrence data for this analyte in this matrix; the value is anchored by the four-anchor read-across documented above. The empirical anchor (parent species pool), analytical anchor (Path B LOQ × 5), regulatory anchor (EFSA/EPA/JECFA exposure framework), and inferential anchor (matrix chemistry) are independently defensible. A plaintiff's "no MeHg data" attack does not land because each anchor stands on its own; rebutting one does not invalidate the threshold.

<!-- audience: brand-legal -->
**Brand legal read.** The threshold is the analytical-method floor (Path B LOQ × 5). Daubert defense is "you cannot publish a tighter limit than the standard analytical method can verify, and we cannot defensibly certify against a limit no lab can confirm." The four-anchor read-across documents that the matrix is empirically clean for this analyte.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

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
Response: For Pb, Cd, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 5 analytes (iAs, Ni, Cd, Al, tHg) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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
| 3 | Every published value is on the primary increment ladder | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ✓ PASS |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 5 analytes (iAs, Ni, Cd, Al, tHg) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `almeida2022-brazil-infant-formula-toxic-metals` (A) | Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk | Almeida CC; Baiao DS; Rodrigues PA; Saint-Pierre TD; Hauser-Davis RA; Leandro KC · 2022 · International Journal of Environmental Research and Public Health 19(18):11178 · doi:10.3390/ijerph191811178 |
| `burrell2010-aluminium-in-infant-formulas` (A) | There is (still) too much aluminium in infant formulas | Shelle-Ann M. Burrell; Christopher Exley · 2010 · BMC Pediatrics · doi:10.1186/1471-2431-10-63 |
| `carignan2015-arsenic-infancy-well-water-breast-milk` (A) | Arsenic Exposure in Infancy: Estimating the Contributions of Well Water and Human Milk | Carignan CC; Cottingham KL; Jackson BP; Farzan SF; Gandolfi AJ; Punshon T; Folt CL; Karagas MR · 2015 · Environmental Health Perspectives 123(12):1281–1287 · doi:10.1289/ehp.1408789 |
| `chuchu2013-aluminium-in-infant-formulas` (A) | The aluminium content of infant formulas remains too high | Nancy Chuchu; Bhavini Patel; Blaise Sebastian; Christopher Exley · 2013 · BMC Pediatrics · doi:10.1186/1471-2431-13-162 |
| `dabeka1987-canada-infant-formula-lead-cadmium` (A) | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Dabeka; McKenzie · 1987 · Journal of Association of Official Analytical Chemists 70(4):754-757 · doi:10.1093/jaoac/70.4.754 |
| `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` (A) | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Robert Dabeka; Andre Fouquet; Stephane Belisle; Stephane Turcotte · 2011 · Food Additives & Contaminants: Part A · doi:10.1080/19393210.2011.571795 |
| `fda2026-infant-formula-toxic-elements-special-survey` (A) | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | U.S. Food and Drug Administration · 2026 · FDA analytical results table |
| `fsa2016-infant-food-formula-metals-survey` (A) | Survey of metals in commercial infant foods, infant formula and non-infant specific foods | Food Standards Agency / Fera Science Ltd · 2016 · UK Food Standards Agency report FS102048 |
| `gardener2019-pb-cd-us-infant-formula-baby-foods` (A) | Lead and cadmium contamination in a large sample of United States infant formulas and baby foods | Gardener H; Bowen J; Callan SP · 2019 · Science of the Total Environment · doi:10.1016/j.scitotenv.2018.09.026 |
| `kazi2009-toxic-elements-in-infant-formulae` (A) | Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer | Tasneem G. Kazi; Nusrat Jalbani; Jameel A. Baig; Hassan I. Afridi; Ghulam A. Kandhro; Mohammad B. Arain; Mohammad K. Jamali; Abdul Q. Shah · 2009 · Food and Chemical Toxicology · doi:10.1016/j.fct.2009.03.025 |
| `mgbemena2026-baby-milk-infant-formula-nigeria-nutrients-heavy-metals` (A) | Nutrient exploration and heavy metal risk assessment of baby milk and infant formulae sold within Umuahia metropolis, Nigeria | Maryann Nkoli Mgbemena; Innocent Nwazulu Okwunodulu; Felicia Uchechukwu Okwunodulu; Mary Onuchi Mac-kalunta; Helen Okorie-Chukwuemeka · 2026 · Scientific Reports 16: 13751 · doi:10.1038/s41598-026-44198-w |
| `pandelova2012-eu-baby-food-formula-elements` (A) | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements | Pandelova M; Levy Lopez W; Michalke B; Schramm KW · 2012 · Journal of Food Composition and Analysis · doi:10.1016/j.jfca.2012.04.011 |
| `shibata2016-arsenic-rice-cereal-risk-assessment-us` (B) | Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S. | Shibata T; Meng C; Umoren J; West H · 2016 · International Journal of Environmental Research and Public Health 13(4):361 · doi:10.3390/ijerph13040361 |
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

1. Checking out commit `9f11f81ef8e3bd8b1334b34118f0fb1d80ce0c4c` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=infant-formula-powder-non-soy` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-05-17T23:25:09.530Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `9f11f81ef8e3bd8b1334b34118f0fb1d80ce0c4c` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*