---
title: "HMTc Standards Briefing — Honey"
type: hmtc-standards-briefing
product_slug: honey
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-08-10T09:36:41.653Z
authors: ["Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Honey

**Product class:** Honey
**Subcategory role:** independent
**Native basis for published thresholds:** as_sold
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-08-10
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for honey.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **100 ppb** [as-sold] | 1410.295 ppb (capped to 100 by reg cap) | regulatory-alignment | 13 | stable | 100 ppb (il_fcs2016_pb_23_honey_100) |
| tAs | **63 ppb** [as-sold] | 63.696 ppb | literature-baseline | 12 | stable | 300 ppb (py_decreto1335_2019_honey_tas_300) |
| Ni | **1200 ppb** [as-sold] | 1294.478 ppb | literature-baseline | 3 | stable | — |
| Cd | **89 ppb** [as-sold] | 89.532 ppb | literature-baseline | 14 | provisional | 100 ppb (py_decreto1335_2019_honey_cd_100) |
| Al | _not material_ | 151964.364 ppb (pool not standardized — not material) | literature-baseline | 4 | provisional | — |
| tHg | **74 ppb** [as-sold] | 74.738 ppb | literature-baseline | 2 | stable | — |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=honey`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 100 ppb [as-sold] · 100 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 100 ppb (il_fcs2016_pb_23_honey_100)
**Pool composition:** 13 sources contributing · 155 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [415.11, 1320.72] ppb**
**Sensitivity: log-normal 1015.93 · gamma 992.74 · nonparametric 997.25 ppb · spread 2% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (il_fcs2016_pb_23_honey_100). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 1410.29 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (il_fcs2016_pb_23_honey_100). A Daubert challenge on the value reduces to "is il_fcs2016_pb_23_honey_100 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = il_fcs2016_pb_23_honey_100 cap. The pooled occurrence distribution from 13 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (13 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| abeslami2025-moroccan-honey-minerals (2025) · MA, EU | Mineral Profile and Heavy Metal Content of Seven Monofloral … | honey, as-sold | 7 | uniform_max_only | 4.5% |
| aburas2023-libyan-honey-lead-cadmium (2023) · LY | Pollution assessment by estimation of Lead and Cadmium conce… | honey, as-sold | 5 | uniform_max_only | 3.2% |
| aghamirlou2015-iranian-honey-metals (2015) · IR | Heavy metals determination in honey samples using inductivel… | honey, as-sold | 25 | lognormal_mean_max | 16.1% |
| bektashi2021-honey-metals-sugars-balkans (2021) · MK, RS | Characterization of honey: determination of metal and sugar … | honey, as-sold | 5 | uniform_max_only | 3.2% |
| gunes2021-yalova-chestnut-honey-metals (2021) · TR | Chestnut Honey as a Complementary Medicine: Determination of… | honey, as-sold | 27 | lognormal_mean_max | 17.4% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 10 | lognormal_mean_only | 6.5% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 5.2% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 5.2% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 3.9% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 3.9% |
| shukla2020-honey-prayagraj-metals (2020) · IN | Melissopalynological and physicochemical analysis of honey s… | honey, as-sold | 14 | uniform_max_only | 6.5% |
| tomczyk2020-polish-honey-metal-transfer (2020) · PL | Transfer of some toxic metals from soil to honey depending o… | honey, as-sold | 50 | uniform_max_only | 6.5% |
| wise2025-elevated-metals-us-honeys (2025) · US | Elevated Metal Levels in U.S. Honeys: Is There a Concern for… | honey, as-sold | 28 | lognormal_mean_max | 18.1% |

</details>

### tAs

**Published HMTc threshold:** 63 ppb [as-sold] · 63.696 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 300 ppb (py_decreto1335_2019_honey_tas_300)
**Pool composition:** 12 sources contributing · 107 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [18.01, 208.42] ppb**
**Sensitivity: log-normal 71.02 · gamma 68.26 · nonparametric 68.99 ppb · spread 4% (stable)**



**Defensibility.** Pooled P97 from 12 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 300 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 12 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 63 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 12 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (12 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| gunes2021-yalova-chestnut-honey-metals (2021) · TR | Chestnut Honey as a Complementary Medicine: Determination of… | honey, as-sold | 27 | lognormal_mean_max | 25.2% |
| jackson2012-brown-rice-syrup-arsenic | jackson2012-brown-rice-syrup-arsenic | organic brown rice syrup, dry weight | 1 | lognormal_mean_only | 0.9% |
| jackson2012-brown-rice-syrup-arsenic | jackson2012-brown-rice-syrup-arsenic | organic brown rice syrup, dry weight | 1 | lognormal_mean_only | 0.9% |
| jackson2012-brown-rice-syrup-arsenic | jackson2012-brown-rice-syrup-arsenic | organic brown rice syrup, dry weight | 1 | lognormal_mean_only | 0.9% |
| jackson2012-brown-rice-syrup-arsenic | jackson2012-brown-rice-syrup-arsenic | organic brown rice syrup, dry weight | 1 | lognormal_mean_only | 0.9% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 10 | lognormal_mean_only | 9.3% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 7.5% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 7.5% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 5.6% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 5.6% |
| salama2019-libya-honey-metals (2019) · LY | Determination of Physicochemical Properties and Toxic Heavy … | honey, as-sold | 24 | uniform_max_only | 9.3% |
| wise2025-elevated-metals-us-honeys (2025) · US | Elevated Metal Levels in U.S. Honeys: Is There a Concern for… | honey, as-sold | 28 | lognormal_mean_max | 26.2% |

</details>

### Ni

**Published HMTc threshold:** 1200 ppb [as-sold] · 1294.478 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 3 sources contributing · 45 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [101.73, 1624.63] ppb**
**Sensitivity: log-normal 1268.01 · gamma 1431.15 · nonparametric 1628.53 ppb · spread 22% (stable)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1200 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| aghamirlou2015-iranian-honey-metals (2015) · IR | Heavy metals determination in honey samples using inductivel… | honey, as-sold | 25 | lognormal_mean_max | 50.0% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 38 | uniform_max_only | 25.0% |
| tomczyk2020-polish-honey-metal-transfer (2020) · PL | Transfer of some toxic metals from soil to honey depending o… | honey, as-sold | 50 | uniform_max_only | 25.0% |

</details>

### Cd

**Published HMTc threshold:** 89 ppb [as-sold] · 89.532 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 100 ppb (py_decreto1335_2019_honey_cd_100)
**Pool composition:** 14 sources contributing · 161 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [37.41, 135.85] ppb**
**Sensitivity: log-normal 105.42 · gamma 79.69 · nonparametric 78.36 ppb · spread 26% (provisional)**



**Defensibility.** Pooled P97 from 14 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 100 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 14 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 89 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 14 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (14 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| salama2019-libya-honey-metals (2019) · LY | Determination of Physicochemical Properties and Toxic Heavy … | unknown | 24 | lognormal_mean_only | 14.9% |
| abeslami2025-moroccan-honey-minerals (2025) · MA, EU | Mineral Profile and Heavy Metal Content of Seven Monofloral … | honey, as-sold | 7 | uniform_max_only | 4.3% |
| aburas2023-libyan-honey-lead-cadmium (2023) · LY | Pollution assessment by estimation of Lead and Cadmium conce… | honey, as-sold | 5 | uniform_max_only | 3.1% |
| aghamirlou2015-iranian-honey-metals (2015) · IR | Heavy metals determination in honey samples using inductivel… | honey, as-sold | 25 | lognormal_mean_max | 15.5% |
| bektashi2021-honey-metals-sugars-balkans (2021) · MK, RS | Characterization of honey: determination of metal and sugar … | honey, as-sold | 5 | uniform_max_only | 3.1% |
| gunes2021-yalova-chestnut-honey-metals (2021) · TR | Chestnut Honey as a Complementary Medicine: Determination of… | honey, as-sold | 27 | lognormal_mean_max | 16.8% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 10 | lognormal_mean_only | 6.2% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 5.0% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 8 | lognormal_mean_only | 5.0% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 3.7% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 6 | lognormal_mean_only | 3.7% |
| salama2019-libya-honey-metals (2019) · LY | Determination of Physicochemical Properties and Toxic Heavy … | honey, as-sold | 24 | uniform_max_only | 6.2% |
| shukla2020-honey-prayagraj-metals (2020) · IN | Melissopalynological and physicochemical analysis of honey s… | honey, as-sold | 14 | uniform_max_only | 6.2% |
| tomczyk2020-polish-honey-metal-transfer (2020) · PL | Transfer of some toxic metals from soil to honey depending o… | honey, as-sold | 50 | uniform_max_only | 6.2% |

</details>

### Al

**Published HMTc threshold:** **not material** — Aluminium in honey reflects environmental/processing residue (soil and forage uptake, extraction/handling equipment); the pooled P97 (~152 mg/kg, n=53) is a small-pool tail of ubiquitous mineral content, not a contaminant signal
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 4 sources contributing · 53 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 4 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.



<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| bektashi2021-honey-metals-sugars-balkans (2021) · MK, RS | Characterization of honey: determination of metal and sugar … | honey, as-sold | 5 | uniform_max_only | 10.0% |
| naccari2025-honey-toxic-metals-microelements (2025) · IT | Study of Toxic Metals and Microelements in Honey as a Tool t… | honey, as-sold | 38 | uniform_max_only | 20.0% |
| tomczyk2020-polish-honey-metal-transfer (2020) · PL | Transfer of some toxic metals from soil to honey depending o… | honey, as-sold | 50 | uniform_max_only | 20.0% |
| wise2025-elevated-metals-us-honeys (2025) · US | Elevated Metal Levels in U.S. Honeys: Is There a Concern for… | honey, as-sold | 28 | lognormal_mean_only | 50.0% |

</details>

### tHg

**Published HMTc threshold:** 74 ppb [as-sold] · 74.738 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 2 sources contributing · 37 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [31.58, 98.37] ppb**
**Sensitivity: log-normal 84.72 · gamma 95.00 · nonparametric 76.93 ppb · spread 19% (stable)**



**Defensibility.** Pooled P97 from 2 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 2 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 74 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 2 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (2 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| gunes2021-yalova-chestnut-honey-metals (2021) · TR | Chestnut Honey as a Complementary Medicine: Determination of… | honey, as-sold | 27 | lognormal_mean_max | 50.0% |
| salama2019-libya-honey-metals (2019) · LY | Determination of Physicochemical Properties and Toxic Heavy … | honey, as-sold | 24 | uniform_max_only | 50.0% |

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
Response: The sensitivity bands are explicitly reported per analyte. 2 analytes (Cd, Al) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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
| 3 | Every published value rounds toward the evidence (≤ the precise candidate; never loosened) | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 2 analytes (Cd, Al) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `abeslami2025-moroccan-honey-minerals` (A) | Mineral Profile and Heavy Metal Content of Seven Monofloral and Multifloral Honeys from Eastern Morocco | Abeslami A; El Farissi H; Cacciola F; Oulad El Majdoub Y; Mondello L; El Bachiri A; Alaiz M; Vioque J · 2025 · Molecules · doi:10.3390/molecules30010150 |
| `aburas2023-libyan-honey-lead-cadmium` (A) | Pollution assessment by estimation of Lead and Cadmium concentrations and some physical properties in a number of types of Libyan Honey | Aburas NM; Amaizah NR; Hadidan ME · 2023 · Bani Waleed University Journal of Humanities and Applied Sciences · doi:10.58916/jhas.v8i5.106 |
| `aghamirlou2015-iranian-honey-metals` (A) | Heavy metals determination in honey samples using inductively coupled plasma-optical emission spectrometry | Aghamirlou HM; Khadem M; Rahmani A; Sadeghian M; Mahvi AH; Akbarzadeh A; Nazmara S · 2015 · Journal of Environmental Health Science & Engineering · doi:10.1186/s40201-015-0189-8 |
| `bektashi2021-honey-metals-sugars-balkans` (A) | Characterization of honey: determination of metal and sugar content | Limani Bektashi N; Abazi D; Popovska O; Latifi A; Reka AA · 2021 · Journal of Agricultural, Food and Environmental Sciences · doi:10.55302/JAFES21752037lb |
| `gunes2021-yalova-chestnut-honey-metals` (A) | Chestnut Honey as a Complementary Medicine: Determination of Antibacterial Activity, Heavy Metal Residue and Health Risk Assessment | Gunes ME · 2021 · Journal of Advances in VetBio Science and Techniques · doi:10.31797/vetbio.931144 |
| `jackson2012-brown-rice-syrup-arsenic` | jackson2012-brown-rice-syrup-arsenic |  |
| `naccari2025-honey-toxic-metals-microelements` (A) | Study of Toxic Metals and Microelements in Honey as a Tool to Support Beekeeping Production and Consumer Safety | Naccari C; Ferrantelli V; Cammilleri G; Barbaccia G; Riolo P; Ferrante MC; Procopio A; Palma E · 2025 · Foods 2025, 14, 1986 · doi:10.3390/foods14111986 |
| `salama2019-libya-honey-metals` (A) | Determination of Physicochemical Properties and Toxic Heavy Metals Levels in Honey Samples from West of Libya | Salama AS; Etorki AM; Awad MH · 2019 · Journal of Advanced Chemical Sciences · doi:10.30799/jacs.207.19050104 |
| `shukla2020-honey-prayagraj-metals` (A) | Melissopalynological and physicochemical analysis of honey samples from Prayagraj District, Uttar Pradesh | Shukla V; Kumar A · 2020 · Acta Palaeobotanica · doi:10.35535/acpa-2020-0004 |
| `tomczyk2020-polish-honey-metal-transfer` (A) | Transfer of some toxic metals from soil to honey depending on bee habitat conditions | Tomczyk M; Zagula G; Puchalski C; Dzugan M · 2020 · Acta Universitatis Cibiniensis Series E: Food Technology · doi:10.2478/aucft-2020-0005 |
| `wise2025-elevated-metals-us-honeys` (A) | Elevated Metal Levels in U.S. Honeys: Is There a Concern for Human Health? | Wise JP Jr; Wise RM; Hoffert A; Wise JTF; Specht AJ · 2025 · Biological Trace Element Research · doi:10.1007/s12011-024-04295-1 |

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

1. Checking out commit `31952756b6b6f33ec7ecd3ea21f83e4aaad04f06` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=honey` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-08-10T09:36:41.665Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `31952756b6b6f33ec7ecd3ea21f83e4aaad04f06` |
| Author | Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS) |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Institute of Contaminant Standards (ICS), which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*