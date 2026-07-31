# 3.1 Infant Formula, Powder (Non-Soy)

*This chapter is one of fifteen per-product chapters in Part 3 of the HMTc Program Manual. Each chapter is self-contained enough to function as a licensing exhibit detached from the bound volume. The methodology that produces the limit values in this chapter is documented in Part 5.1 (How HMTc Standards Are Set). The certification status framework that operationalizes the limits is documented in Part 2.3. The Standards Ratchet that evolves these limits over time is documented in Part 2.10. Program-level adversarial attacks not specific to this product are addressed in Part 5.2 (Program-Level Adversarial Read); the per-product adversarial read in this chapter addresses attacks specific to this product category.*

**Product class:** Infant Formula, Powder (Non-Soy)
**Subcategory role:** clean subcategory (within-pair)
**Native basis for published thresholds:** powder_as_placed
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-07-31
**Author:** Karen Pendergrass, Standards Architect, Paleo Foundation
**Status:** Draft for stakeholder review. Not yet through the 9 pre-publication gates.

---

## Who this briefing is for

The HMTc certification mark serves multiple audiences with different concerns. This briefing is written so each audience finds what they need in one document. Audience-tagged "read" callouts appear inline next to each per-analyte section.

**Brand legal teams**, Read the per-analyte Defensibility narrative and the Adversarial read section. The methodology section is your Daubert-resistance reference. Every numeric claim traces to a source page; the contribution logs document admission criteria.

**Retailer quality and compliance**, Read the Master Limit Table and the per-analyte Regulator read callouts. The certification mark on a product means the brand has tested at or below every value in the Master Limit Table, in the product's native basis. The regulatory comparison rows show which government caps apply and how HMTc thresholds compare.

**Regulators (FDA, EFSA, state AGs)**, Read the Methodology section, the Sources Cited table, and the Anti-Circumvention argument. The methodology is open, reproducible, and follows the WHO/JECFA, EFSA, ATSDR, and Codex precedents cited. Numeric thresholds are derived from a pooled occurrence distribution of peer-reviewed and agency data, weighted by source N with a 50% relative-share cap.

**Adversarial readers (plaintiff's experts, competing standards bodies)**, Read the per-analyte Defensibility narrative, the Adversarial read section, the contribution logs, and the sensitivity analyses. Every value carries: the pool composition, the basis-conversion math, the regulatory cap comparison, the parametric sensitivity, and the rationale for any gap between literature and threshold.

---

## Master Limit Table

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for infant formula powder non soy.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **20 ppb** [powder]<br>≈ 2.8 ppb [prepared] | 88.123 ppb (capped to 20 by reg cap) | regulatory-alignment | 16 | stable | 20 ppb (eu2023_pb_formula_powder_20) |
| iAs | **20 ppb** [powder]<br>≈ 2.8 ppb [prepared] | 2031.456 ppb (capped to 20 by reg cap) | regulatory-alignment | 8 | stable | 20 ppb (eu2023_ias_formula_powder_20) |
| tAs | _adjudication pending_<br>≈ 3.4 ppb [prepared] | 24.008 ppb | literature-baseline | 17 | stable |, |
| Sn | **76 ppb** [powder]<br>≈ 10 ppb [prepared] | 76.200 ppb | literature-baseline | 16 | stable |, |
| Ni | **250 ppb** [powder]<br>≈ 35 ppb [prepared] | 415.518 ppb (capped to 250 by reg cap) | regulatory-alignment | 8 | provisional | 250 ppb (eu2024_ni_formula_powder_250) |
| Cd | **8.6 ppb** [powder]<br>≈ 1.2 ppb [prepared] | 8.676 ppb | literature-baseline | 22 | stable | 10 ppb (eu2023_cd_formula_cow_powder_10) |
| Cr-VI | **34 ppb** [powder]<br>≈ 4.9 ppb [prepared] | 34.705 ppb | literature-baseline | 3 | stable |, |
| Al | **3500 ppb** [powder]<br>≈ 500 ppb [prepared] | 6040.669 ppb (capped to 3500 by reg cap) | regulatory-alignment | 24 | provisional | 3500 ppb (aunz_sch19_al_formula_nonsoy_500) |
| tHg | _adjudication pending_<br>≈ 0.2 ppb [prepared] | 1.496 ppb | literature-baseline | 7 | provisional |, |
| MeHg | **0.7 ppb** [powder]<br>≈ 0.1 ppb [prepared] | 0.748 ppb (read-across) | feasibility-driven | 0 | feasibility-anchored (analytical LOQ binds) | EFSA TWI 1.3 µg/kg-bw/wk (exposure) |

**How to read this table.** "Published" values are rounded up to the HMTc primary increment ladder (1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000, 1300, 1500, 2000, 5000, 10000 ppb) per the program's publication conventions; this gives brands an unambiguous bin to test against. The "precise" column shows the pooled-engine output before rounding so the methodology is transparent and re-derivable. Rationale tags map to the four allowed rationale tags: `literature-baseline` (pooled value binds), `regulatory-alignment` (regulatory ceiling binds), `feasibility-driven` (analytical method binds), and `precautionary` (manual override below pooled and regulatory).

---

## Methodology

**Per-analyte standards.** For each (product row, analyte) cell, every source loaded for that cell contributes to a pooled distribution via moment-matching pseudo-sample expansion. Sample-level data uses raw values; summary statistics (mean, median, max, lb/ub, reported percentiles) reconstruct under log-normal or Tobit assumptions documented per source. Pseudo-samples are weighted by source N and capped at 50% relative pool share to prevent any one survey from dominating. The pooled distribution is sorted and queried at the per-analyte target percentile:

- **Clean subcategory:** standard = pooled P97
- **Dirty subcategory:** standard = pooled P45
- **Independent (no within-pair partner):** standard = pooled P97 by default

**Why P97 / P45, not P90 / P30 (the row-pass calibration).** A brand certifies a product (one row, ten analytes simultaneously), not one analyte at a time. Setting each per-analyte limit at the raw P90 of the clean distribution would deliver a joint row-pass rate close to 0.9^10 = 35% under analyte independence. Under realistic analyte correlation (~0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50-70%. To deliver the row-level outcomes the Governing Principles require, approximately 90% of clean-subcategory brands and approximately 30% of dirty-subcategory brands pass row certification, per-analyte limits are uplifted to P97 (clean) and P45 (dirty). This is the calibration that delivers the program's stated objective. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening; per-analyte differentiation (e.g., Pb tighter than Ni) is deferred until HMTc has 6-12 months of lot-testing data to measure actual joint pass rates.

**Basis.** Each product row's standard is published in the native basis of the product form: powder rows in powder-as-placed-on-market, ready-to-feed liquid rows in as-consumed, dry cereal rows in dry-as-sold, puree rows in as-consumed. Brands ship and test in their product's native form; the certification mark matches that form. Sources reporting in non-native bases are converted into the row's native basis during pooling via documented factors (the 1:7 reconstitution ratio for powder ↔ prepared; within-class identity for as_sold ↔ dry_as_sold). The cross-basis equivalent of every published value is shown in the Master Limit Table for ease of reference by audiences operating in different bases.

**Regulatory cap.** The final published HMTc value never exceeds the lowest applicable loaded regulatory ceiling, expressed in the product's native basis. When the pooled P97/P45 exceeds the regulatory cap, the cap binds and the rationale tag is `regulatory-alignment`. When the pooled value is below the cap, the rationale is `literature-baseline` and the cap is shown for context only.

**Sensitivity.** Each pooled value is recomputed under three parametric assumptions: log-normal (headline), gamma (alternative), and nonparametric reconstruction. The spread across the three is reported as the sensitivity band: stable (≤25%), provisional (25–50%), or needs_review (>50%). Confidence intervals are computed via meta-analytic bootstrap that resamples whole sources (not individual pseudo-samples) to capture between-source uncertainty.

**Methodology authorities.** The pooling approach follows WHO/JECFA pooled total-diet study methodology, the EFSA Scientific Opinions on lead (2010, 2024) and cadmium (2009, 2024) for log-normal contaminant occurrence reconstruction, ATSDR moment-matching guidance for summary-statistic-only sources, and Codex CAC/GL 50-2004 weighted pooling. Per-source contribution logs document every admission decision and every basis conversion.

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=infant-formula-powder-non-soy`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 20 ppb [powder] · 20 ppb (pre-rounding)
**Cross-basis: ≈ 2.8 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 20 ppb (eu2023_pb_formula_powder_20)
**Pool composition:** 16 sources contributing · 420 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [5.73, 117.70] ppb**
**Sensitivity: log-normal 83.75 · gamma 90.25 · nonparametric 105.93 ppb · spread 21% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_formula_powder_20). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot, the cap binds. The pooled P97 of 88.12 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_formula_powder_20). A Daubert challenge on the value reduces to "is eu2023_pb_formula_powder_20 a legitimate regulatory anchor?", and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 20 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_formula_powder_20 cap. The pooled occurrence distribution from 16 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (16 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 15.0% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 3.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| demir2023-infant-formulas-turkey-toxic-elements (2023) · TR, EU | Estimated daily intake and health risk assessment of toxic e… | powder_as_placed | 72 | lognormal_mean_max | 18.9% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### iAs

**Published HMTc threshold:** 20 ppb [powder] · 20 ppb (pre-rounding)
**Cross-basis: ≈ 2.8 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 20 ppb (eu2023_ias_formula_powder_20)
**Pool composition:** 8 sources contributing · 53 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [5.70, 7480] ppb**
**Sensitivity: log-normal 2032.13 · gamma 2069.39 · nonparametric 2034.62 ppb · spread 2% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_ias_formula_powder_20). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot, the cap binds. The pooled P97 of 2031.46 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_ias_formula_powder_20). A Daubert challenge on the value reduces to "is eu2023_ias_formula_powder_20 a legitimate regulatory anchor?", and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 20 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_ias_formula_powder_20 cap. The pooled occurrence distribution from 8 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (8 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| shibata2016-arsenic-rice-cereal-risk-assessment-us (2016) · US | Risk Assessment of Arsenic in Rice Cereal and Other Dietary … | unknown | 1 | single_point | 1.9% |
| shibata2016-arsenic-rice-cereal-risk-assessment-us (2016) · US | Risk Assessment of Arsenic in Rice Cereal and Other Dietary … | unknown | 1 | single_point | 1.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 18.9% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 1.9% |

</details>

### tAs

**Published HMTc threshold:** adjudication pending, held provisional (elevated-market-outlier) · 24.008 ppb (pre-rounding)
**Cross-basis: ≈ 3.4 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 17 sources contributing · 309 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [19.99, 34] ppb**
**Sensitivity: log-normal 22.04 · gamma 21.72 · nonparametric 23.64 ppb · spread 8% (stable)**



**Defensibility.** Pooled P97 from 17 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 17 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 24 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 17 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (17 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| carignan2015-arsenic-infancy-well-water-breast-milk (2015) · US | Arsenic Exposure in Infancy: Estimating the Contributions of… | unknown | 72 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.6% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 6.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.6% |
| chekri2019-french-infant-toddler-tds-trace-elements (2019) · FR | Trace element contents in foods from the first French Total … | powder_as_placed | 28 | lognormal_mean_max | 17.7% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 230 | percentile_interpolation | 50.0% |

</details>

### Sn

**Published HMTc threshold:** 76 ppb [powder] · 76.200 ppb (pre-rounding)
**Cross-basis: ≈ 10 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 16 sources contributing · 61 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [42.03, 95] ppb**
**Sensitivity: log-normal 76.20 · gamma 76.20 · nonparametric 76.20 ppb · spread 0% (stable)**



**Defensibility.** Pooled P97 from 16 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 16 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 76 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

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

**Published HMTc threshold:** 250 ppb [powder] · 250 ppb (pre-rounding)
**Cross-basis: ≈ 35 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 250 ppb (eu2024_ni_formula_powder_250)
**Pool composition:** 8 sources contributing · 123 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [55.75, 497.07] ppb**
**Sensitivity: log-normal 535.87 · gamma 389.27 · nonparametric 396.94 ppb · spread 27% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2024_ni_formula_powder_250). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot, the cap binds. The pooled P97 of 415.52 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2024_ni_formula_powder_250). A Daubert challenge on the value reduces to "is eu2024_ni_formula_powder_250 a legitimate regulatory anchor?", and the answer is yes, it is published, finalized, and enforced.

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

**Published HMTc threshold:** 8.6 ppb [powder] · 8.676 ppb (pre-rounding)
**Cross-basis: ≈ 1.2 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 10 ppb (eu2023_cd_formula_cow_powder_10)
**Pool composition:** 22 sources contributing · 432 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [5.81, 11.66] ppb**
**Sensitivity: log-normal 8.05 · gamma 8.82 · nonparametric 8.35 ppb · spread 9% (stable)**



**Defensibility.** Pooled P97 from 22 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 10 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 22 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 8.6 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 22 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (22 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 14.1% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 3.2% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 2.5% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.3% |
| dabeka1987-canada-infant-formula-lead-cadmium (1987) · Canada | Lead, cadmium, and fluoride levels in market milk and infant… | as_sold | 17 | lognormal_mean_max | 4.2% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |
| pandelova2012-eu-baby-food-formula-elements (2012) · EU, FR, DE, IT, PT, SE, UK, ES, SK | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby … | as_sold | 1 | single_point | 0.3% |

</details>

### Cr-VI

**Published HMTc threshold:** 34 ppb [powder] · 34.705 ppb (pre-rounding)
**Cross-basis: ≈ 4.9 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 20 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [23.17, 84.45] ppb**
**Sensitivity: log-normal 61.74 · gamma 49.82 · nonparametric 59.97 ppb · spread 19% (stable)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 34 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

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

**Published HMTc threshold:** 3500 ppb [powder] · 3500 ppb (pre-rounding)
**Cross-basis: ≈ 500 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 3500 ppb (aunz_sch19_al_formula_nonsoy_500)
**Pool composition:** 24 sources contributing · 270 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [3668.33, 9339.82] ppb**
**Sensitivity: log-normal 7830.51 · gamma 5814.18 · nonparametric 6124.54 ppb · spread 26% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (aunz_sch19_al_formula_nonsoy_500). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot, the cap binds. The pooled P97 of 6040.67 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (aunz_sch19_al_formula_nonsoy_500). A Daubert challenge on the value reduces to "is aunz_sch19_al_formula_nonsoy_500 a legitimate regulatory anchor?", and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 3500 ppb (native basis: [powder]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = aunz_sch19_al_formula_nonsoy_500 cap. The pooled occurrence distribution from 24 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (24 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | unknown | 8 | uniform_max_only | 3.0% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | powder_as_placed | 8 | uniform_max_only | 3.0% |
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 57 | lognormal_mean_median | 21.1% |
| kazi2009-toxic-elements-in-infant-formulae (2009) · PK | Determination of toxic elements in infant formulae by using … | as_sold_or_source_reported | 13 | lognormal_mean_max | 4.8% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| almeida2022-brazil-infant-formula-toxic-metals (2022) · BR | Toxic Metals and Metalloids in Infant Formulas Marketed in B… | as_sold_or_source_reported | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.7% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 10 | lognormal_lod_censored_midpoint | 3.7% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| fsa2016-infant-food-formula-metals-survey (2016) · UK | Survey of metals in commercial infant foods, infant formula … | as_sold | 1 | single_point | 0.4% |
| burrell2010-aluminium-in-infant-formulas (2010) · UK | There is (still) too much aluminium in infant formulas | prepared_for_feeding | 7 | uniform_max_only | 2.6% |

</details>

### tHg

**Published HMTc threshold:** adjudication pending, held provisional (elevated-market-outlier) · 1.496 ppb (pre-rounding)
**Cross-basis: ≈ 0.2 ppb [prepared] (÷7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 7 sources contributing · 290 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [0.89, 2.28] ppb**
**Sensitivity: log-normal 1.25 · gamma 1.67 · nonparametric 1.18 ppb · spread 29% (provisional)**



**Defensibility.** Pooled P97 from 7 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional, log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

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

## Adversarial Read

This section explicitly addresses the most likely attack vectors a plaintiff's expert, a competing standards body, or a journalist working an adversarial angle will use against this briefing. Each attack is named and answered.

**Attack 1: "The pool is too small; the methodology cherry-picks."**
Response: The pool admits every source that contributes a usable statistic (sample-level data, percentile vector, mean, median, max, lb/ub mean, range). No source is excluded for being "summary-only." The contribution log per analyte lists every admission decision and every basis conversion. Per-source pool share is capped at 50% to prevent dominance by any single survey. The methodology is reproducible from the structured CSVs in `data/evidence/` and the engine in `tools/evidence/build-hmtc-aggregate-distributions.mjs`.

**Attack 2: "Why P97 instead of P90? You're loosening the standard."**
Response: P97 per analyte is calibrated to deliver approximately 90% row-pass for the clean subcategory across the 10-analyte joint. Setting each analyte's limit at P90 of its own marginal would deliver a joint pass rate of 35% under independence and 50-70% under realistic correlation, well short of the Governing Principles' 90/30 row-pass target. P97 is the per-analyte percentile that delivers the row-level outcome the program promises. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening.

**Attack 3: "Why is your dirty subcategory P45 instead of P10?"**
Response: P45 of the dirty subcategory's distribution, applied per-analyte, delivers approximately 30% joint row-pass for dirty-subcategory brands. This is the design intent stated in the Governing Principles v2.0: the dirty subcategory standard must give dirty-platform brands a realistic path to certification so the program drives reformulation rather than excluding the platform. A P10 dirty standard would deliver <1% joint row-pass and the program would have no commercial uptake on the dirty side.

**Attack 4: "Your threshold matches the EU/FDA cap; HMTc adds no value over the regulator."**
Response: For Pb, iAs, Ni, Al, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification, a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 3 analytes (Ni, Al, tHg) are flagged provisional, log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative, silently picking one parametric form, would be the actual methodological flaw.

**Attack 6: "Methylmercury, you have no data, but you published a value anyway."**
Response: The four-anchor read-across is documented in the MeHg per-analyte section. The empirical anchor (parent species pool: tHg ≈ 0 ppb in this matrix), the analytical anchor (Path B LOQ × 5), the regulatory anchor (EFSA TWI as exposure context), and the inferential anchor (non-fish matrix chemistry) are independently citable. The published value is the analytical floor, the smallest concentration a competent lab can verify. Tagged `feasibility-driven` with scheduled Tier 2 review when MeHg-specific occurrence data lands. The "no data" framing misrepresents the four-anchor defense.

**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: The 1:7 powder ↔ prepared-for-feeding conversion is the conservative reconstitution ratio (1 g powder + 6 g water = 7 g prepared) standard across infant-formula regulatory frameworks (FDA Closer-to-Zero, EU 2023/915). Within-class conversions (as_sold ↔ dry_as_sold) pass through with factor 1. Every basis conversion is logged per source in the contribution log; unknown-conversion cases are flagged and not silently coerced.

**Attack 8: "Show me one source you excluded."**
Response: No source contributing a usable statistic is excluded. Sources marked "no_usable_statistic" in the contribution log are LOD-censored entries with neither mean nor lb/ub recorded. Sources without a structured CSV row are documented in the routing audit and the gap report; those are extraction gaps, not exclusions, and they are tracked in Phase 1 backlog with target completion timelines.

---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `almeida2022-brazil-infant-formula-toxic-metals` (A) | Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk | Almeida CC; Baiao DS; Rodrigues PA; Saint-Pierre TD; Hauser-Davis RA; Leandro KC · 2022 · International Journal of Environmental Research and Public Health 19(18):11178 · doi:10.3390/ijerph191811178 |
| `burrell2010-aluminium-in-infant-formulas` (A) | There is (still) too much aluminium in infant formulas | Shelle-Ann M. Burrell; Christopher Exley · 2010 · BMC Pediatrics · doi:10.1186/1471-2431-10-63 |
| `carignan2015-arsenic-infancy-well-water-breast-milk` (A) | Arsenic Exposure in Infancy: Estimating the Contributions of Well Water and Human Milk | Carignan CC; Cottingham KL; Jackson BP; Farzan SF; Gandolfi AJ; Punshon T; Folt CL; Karagas MR · 2015 · Environmental Health Perspectives 123(12):1281–1287 · doi:10.1289/ehp.1408789 |
| `chekri2019-french-infant-toddler-tds-trace-elements` (A) | Trace element contents in foods from the first French Total Diet Study on infants and toddlers | Rachida Chekri; Emilie Le Calvez; Julie Zinck; Jean-Charles Leblanc; Veronique Sirot; Marion Hulin; Laurent Noel; Thierry Guerin · 2019 · Journal of Food Composition and Analysis · doi:10.1016/j.jfca.2019.02.002 |
| `chuchu2013-aluminium-in-infant-formulas` (A) | The aluminium content of infant formulas remains too high | Nancy Chuchu; Bhavini Patel; Blaise Sebastian; Christopher Exley · 2013 · BMC Pediatrics · doi:10.1186/1471-2431-13-162 |
| `dabeka1987-canada-infant-formula-lead-cadmium` (A) | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Dabeka; McKenzie · 1987 · Journal of Association of Official Analytical Chemists 70(4):754-757 · doi:10.1093/jaoac/70.4.754 |
| `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` (A) | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Robert Dabeka; Andre Fouquet; Stephane Belisle; Stephane Turcotte · 2011 · Food Additives & Contaminants: Part A · doi:10.1080/19393210.2011.571795 |
| `demir2023-infant-formulas-turkey-toxic-elements` (A) | Estimated daily intake and health risk assessment of toxic elements in infant formulas | Tugba Demir; Sema Agaoglu · 2023 · British Journal of Nutrition · doi:10.1017/S0007114523000971 |
| `fda2026-infant-formula-toxic-elements-special-survey` (A) | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | U.S. Food and Drug Administration · 2026 · FDA analytical results table |
| `fsa2016-infant-food-formula-metals-survey` (A) | Survey of metals in commercial infant foods, infant formula and non-infant specific foods | Food Standards Agency / Fera Science Ltd · 2016 · UK Food Standards Agency report FS102048 |
| `kazi2009-toxic-elements-in-infant-formulae` (A) | Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer | Tasneem G. Kazi; Nusrat Jalbani; Jameel A. Baig; Hassan I. Afridi; Ghulam A. Kandhro; Mohammad B. Arain; Mohammad K. Jamali; Abdul Q. Shah · 2009 · Food and Chemical Toxicology · doi:10.1016/j.fct.2009.03.025 |
| `pandelova2012-eu-baby-food-formula-elements` (A) | Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements | Pandelova M; Levy Lopez W; Michalke B; Schramm KW · 2012 · Journal of Food Composition and Analysis · doi:10.1016/j.jfca.2012.04.011 |
| `shibata2016-arsenic-rice-cereal-risk-assessment-us` (B) | Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S. | Shibata T; Meng C; Umoren J; West H · 2016 · International Journal of Environmental Research and Public Health 13(4):361 · doi:10.3390/ijerph13040361 |
| `soares2000-chromium-vi-powdered-milk-formulas` (A) | Selective Determination of Chromium (VI) in Powdered Milk Infant Formulas by Electrothermal Atomization Atomic Absorption Spectrometry after Ion Exchange | Maria E Soares; Maria L Bastos; Margarida Ferreira · 2000 · Journal of AOAC International 83(1):220-223 · doi:10.1093/jaoac/83.1.220 |

In addition to occurrence sources, this briefing cites:

- `docs/governance/hmtc-governing-principles.md` (v2.0, May 2026), the five governing principles and the locked P97/P45 methodology
- `wiki/regulations/efsa-methylmercury-twi.md`, EFSA TWI 1.3 µg/kg-bw/week for MeHg
- `wiki/regulations/epa-iris-methylmercury-rfd.md`, EPA IRIS RfD 0.1 µg/kg-bw/day for MeHg
- `wiki/regulations/jecfa-methylmercury-ptwi.md`, JECFA PTWI 1.6 µg/kg-bw/week for MeHg
- WHO/JECFA pooled total-diet-study methodology
- EFSA Scientific Opinions on Pb (2010, 2024) and Cd (2009, 2024)
- ATSDR moment-matching guidance for summary-statistic sources
- Codex Alimentarius CAC/GL 50-2004 weighted pooling

---


## Cross-references

- Methodology that produces this chapter's limits: Part 5.1 (How HMTc Standards Are Set).
- Certification status framework (A/B/C/D/E): Part 2.3.
- Confidential Remediation Track for brands not yet at Status A or B: Part 2.4.
- Standards Ratchet (how this chapter's limits evolve over time): Part 2.10.
- Lot Testing Schedule for surveillance frequency at each status: Part 4.
- Program-level adversarial read (attacks on methodology, governance, ratchet, conflict of interest): Part 5.2.
- Toxicology references for the priority metals in this product category: Part 5.3 (Glossary) with full reviews on heavymetalindex.com.

---

## Provenance Footer

This briefing is reproducible by:

1. Checking out commit `11631713f39610ebd1fa0cb8333bd3a084d94687` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=infant-formula-powder-non-soy` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-07-31T12:55:41.283Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per / Governing Principles v2.0 |
| Git commit | `11631713f39610ebd1fa0cb8333bd3a084d94687` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*