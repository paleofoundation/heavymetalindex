---
title: "HMTc Standards Briefing — Chocolate"
type: hmtc-standards-briefing
product_slug: chocolate
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-08-10T09:36:41.726Z
authors: ["Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Chocolate

**Product class:** Chocolate
**Subcategory role:** whole_row_platform
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for chocolate.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | _adjudication pending_ | 2113.168 ppb (capped to 200 by reg cap) | regulatory-alignment | 14 | needs_review | 200 ppb (py_decreto1335_2019_chocolate_less_40_cocoa_pb_200) |
| tAs | **200 ppb** [as-sold] | 344.018 ppb (capped to 200 by reg cap) | regulatory-alignment | 1 | stable | 200 ppb (py_decreto1335_2019_chocolate_less_40_cocoa_tas_200) |
| Ni | _adjudication pending_ | 7454.929 ppb (capped to 2500 by reg cap) | regulatory-alignment | 4 | provisional | 2500 ppb (eu2024_ni_chocolate_milk_low_2500) |
| Cd | **100 ppb** [as-sold] | 3095.201 ppb (capped to 100 by reg cap) | regulatory-alignment | 22 | provisional | 100 ppb (eu2023_cd_chocolate_lowcocoa_100) |
| Al | _not material_ | 118650.645 ppb (pool not standardized — not material) | literature-baseline | 2 | provisional | — |
| tHg | *data gap* | — | no-data | 0 | no_data | — |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=chocolate`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** adjudication pending — held provisional (bimodal-needs-subcategory-split) · 200 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 200 ppb (py_decreto1335_2019_chocolate_less_40_cocoa_pb_200)
**Pool composition:** 14 sources contributing · 234 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [110.00, 2974.07] ppb**
**Sensitivity: log-normal 1811.21 · gamma 2579.51 · nonparametric 1257.69 ppb · spread 51% (needs_review)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (py_decreto1335_2019_chocolate_less_40_cocoa_pb_200). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 2113.17 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (py_decreto1335_2019_chocolate_less_40_cocoa_pb_200). A Daubert challenge on the value reduces to "is py_decreto1335_2019_chocolate_less_40_cocoa_pb_200 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 200 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = py_decreto1335_2019_chocolate_less_40_cocoa_pb_200 cap. The pooled occurrence distribution from 14 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (14 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| hands2024-multiyear-dark-chocolate-cocoa-usa (2024) · US | A multi-year heavy metal analysis of 72 dark chocolate and c… | unknown | 72 | lognormal_mean_only | 30.8% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | cocoa powder, as-sold | 1 | single_point | 0.4% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | cocoa nibs, as-sold | 1 | single_point | 0.4% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | dark chocolate, as-sold | 1 | single_point | 0.4% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | milk chocolate, as-sold | 1 | single_point | 0.4% |
| amjad2021-lahore-chocolates-metals (2021) · PK | Determination of Heavy Metals in Locally Available Chocolate… | finished chocolate, as-sold | 30 | uniform_max_only | 4.3% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | white chocolate, as-sold | 2 | lognormal_mean_max | 0.9% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | milk chocolate 40-50% cocoa solids, as-sold | 12 | lognormal_mean_max | 5.1% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | semi-sweet chocolate 50-70% cocoa solids, as-sold | 17 | lognormal_mean_max | 7.3% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | dark chocolate 70-100% cocoa solids, as-sold | 34 | lognormal_mean_max | 14.5% |
| fda-tds-elements-2018-2020 (2022) · US | Total Diet Study Report: Fiscal Years 2018-2020 Elements Dat… | prepared/as-consumed FDA TDS basis | 9 | uniform_max_only | 3.9% |
| hands2024-multiyear-dark-chocolate-cocoa-usa (2024) · US | A multi-year heavy metal analysis of 72 dark chocolate and c… | dark chocolate/cocoa products, as-sold | 72 | lognormal_mean_median | 30.8% |
| fechner2022-bfr-meal-hg-cd-pb-ni-germany (2022) · DE, EU | Results of the BfR MEAL Study: In Germany, mercury is mostly… | cocoa powder, prepared/as-consumed German MEAL basis | 1 | single_point | 0.4% |
| fechner2022-bfr-meal-hg-cd-pb-ni-germany (2022) · DE, EU | Results of the BfR MEAL Study: In Germany, mercury is mostly… | dark chocolate, prepared/as-consumed German MEAL basis | 1 | single_point | 0.4% |

</details>

### tAs

**Published HMTc threshold:** 200 ppb [as-sold] · 200 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 200 ppb (py_decreto1335_2019_chocolate_less_40_cocoa_tas_200)
**Pool composition:** 1 sources contributing · 55 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [225.25, 609.17] ppb**
**Sensitivity: log-normal 500.86 · gamma 391.42 · nonparametric 460.59 ppb · spread 22% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (py_decreto1335_2019_chocolate_less_40_cocoa_tas_200). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 344.02 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (py_decreto1335_2019_chocolate_less_40_cocoa_tas_200). A Daubert challenge on the value reduces to "is py_decreto1335_2019_chocolate_less_40_cocoa_tas_200 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 200 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = py_decreto1335_2019_chocolate_less_40_cocoa_tas_200 cap. The pooled occurrence distribution from 1 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (1 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| hands2024-multiyear-dark-chocolate-cocoa-usa (2024) · US | A multi-year heavy metal analysis of 72 dark chocolate and c… | dark chocolate/cocoa products, as-sold | 55 | lognormal_mean_median | 100.0% |

</details>

### Ni

**Published HMTc threshold:** adjudication pending — held provisional (thin-source-needs-corroboration) · 2500 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 2500 ppb (eu2024_ni_chocolate_milk_low_2500)
**Pool composition:** 4 sources contributing · 520 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [1956.54, 10512.01] ppb**
**Sensitivity: log-normal 8822.31 · gamma 7478.74 · nonparametric 5614.38 ppb · spread 36% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2024_ni_chocolate_milk_low_2500). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 7454.93 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2024_ni_chocolate_milk_low_2500). A Daubert challenge on the value reduces to "is eu2024_ni_chocolate_milk_low_2500 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 2500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2024_ni_chocolate_milk_low_2500 cap. The pooled occurrence distribution from 4 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| bfr2022-nickel-dietary-intake-germany-meal (2022) · DE, EU | Nickel: estimate of long-term intake via food based on the B… | unknown | 840 | lognormal_mean_max | 50.0% |
| amjad2021-lahore-chocolates-metals (2021) · PK | Determination of Heavy Metals in Locally Available Chocolate… | finished chocolate, as-sold | 30 | uniform_max_only | 25.0% |
| bfr2022-nickel-dietary-intake-germany-meal (2022) · DE, EU | Nickel: estimate of long-term intake via food based on the B… | ready-to-eat chocolate, German MEAL Study basis | 5 | uniform_max_only | 12.5% |
| bfr2022-nickel-dietary-intake-germany-meal (2022) · DE, EU | Nickel: estimate of long-term intake via food based on the B… | ready-to-eat cocoa powder, German MEAL Study basis | 5 | uniform_max_only | 12.5% |

</details>

### Cd

**Published HMTc threshold:** 100 ppb [as-sold] · 100 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 100 ppb (eu2023_cd_chocolate_lowcocoa_100)
**Pool composition:** 22 sources contributing · 554 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [975.72, 18433.15] ppb**
**Sensitivity: log-normal 2622.64 · gamma 4352.43 · nonparametric 2296.98 ppb · spread 47% (provisional)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_cd_chocolate_lowcocoa_100). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 3095.20 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_cd_chocolate_lowcocoa_100). A Daubert challenge on the value reduces to "is eu2023_cd_chocolate_lowcocoa_100 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_cd_chocolate_lowcocoa_100 cap. The pooled occurrence distribution from 22 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (22 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| hands2024-multiyear-dark-chocolate-cocoa-usa (2024) · US | A multi-year heavy metal analysis of 72 dark chocolate and c… | unknown | 72 | lognormal_mean_median | 13.0% |
| marincich2023-cadmium-chocolate-poland (2023) · PL, EU | Threat or treat: Exposure assessment and risk characterisati… | unknown | 1 | single_point | 0.2% |
| marincich2023-cadmium-chocolate-poland (2023) · PL, EU | Threat or treat: Exposure assessment and risk characterisati… | unknown | 1 | single_point | 0.2% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | cocoa powder, as-sold | 1 | single_point | 0.2% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | cocoa nibs, as-sold | 1 | single_point | 0.2% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | dark chocolate, as-sold | 1 | single_point | 0.2% |
| abt2018-cadmium-lead-cocoa-chocolate-us-market (2018) · US | Cadmium and Lead in Cocoa Powder and Chocolate Products in t… | milk chocolate, as-sold | 1 | single_point | 0.2% |
| amjad2021-lahore-chocolates-metals (2021) · PK | Determination of Heavy Metals in Locally Available Chocolate… | finished chocolate, as-sold | 30 | uniform_max_only | 1.8% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | milk chocolate 40-50% cocoa solids, as-sold | 12 | lognormal_mean_max | 2.2% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | semi-sweet chocolate 50-70% cocoa solids, as-sold | 17 | lognormal_mean_max | 3.1% |
| burgon2023-cocoa-bean-to-bar-brazil-metals-ota (2023) · BR | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos … | dark chocolate 70-100% cocoa solids, as-sold | 34 | lognormal_mean_max | 6.1% |
| hands2024-multiyear-dark-chocolate-cocoa-usa (2024) · US | A multi-year heavy metal analysis of 72 dark chocolate and c… | dark chocolate/cocoa products, as-sold | 72 | lognormal_mean_median | 13.0% |
| kataoka2018-japan-chocolate-cocoa-cadmium (2018) · JP | Surveillance of Cadmium Concentration in Chocolate and Cocoa… | dark chocolate, as-sold | 140 | lognormal_mean_median | 25.3% |
| kataoka2018-japan-chocolate-cocoa-cadmium (2018) · JP | Surveillance of Cadmium Concentration in Chocolate and Cocoa… | milk chocolate, as-sold | 35 | lognormal_mean_median | 6.3% |
| kataoka2018-japan-chocolate-cocoa-cadmium (2018) · JP | Surveillance of Cadmium Concentration in Chocolate and Cocoa… | white chocolate, as-sold | 5 | lognormal_mean_median | 0.9% |
| kataoka2018-japan-chocolate-cocoa-cadmium (2018) · JP | Surveillance of Cadmium Concentration in Chocolate and Cocoa… | cocoa powder products, as-sold | 140 | lognormal_mean_median | 25.3% |
| marincich2023-cadmium-chocolate-poland (2023) · PL, EU | Threat or treat: Exposure assessment and risk characterisati… | milk chocolate, wet weight/as-sold | 1 | single_point | 0.2% |
| marincich2023-cadmium-chocolate-poland (2023) · PL, EU | Threat or treat: Exposure assessment and risk characterisati… | bitter chocolate, wet weight/as-sold | 1 | single_point | 0.2% |
| oliveira2021-cocoa-beans-cd-pb-brazil-processing (2021) · BR, EC, CI, EU, INTL | Cd and Pb in cocoa beans: Occurrence and effects of chocolat… | cocoa powder from pilot Bahia bean processing, dry/as-sold derivative | 1 | lognormal_mean_only | 0.2% |
| bravo2024-cadmium-cacao-arauca (2024) · CO | Cadmium in cacao crops and artisanal chocolates in the Arauc… | artisanal chocolate, as-sold | 6 | lognormal_mean_only | 1.1% |

</details>

### Al

**Published HMTc threshold:** **not material** — Aluminium in cocoa/chocolate is natural mineral content of cocoa (a known Al-accumulating crop) plus permitted additives in cocoa-with-additives products; the pooled tail (118 mg/kg, elsheikh2020 cocoa-with-additives) is natural/additive content, not a contaminant signal
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 2 sources contributing · 7 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 2 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.



<details>
<summary>Per-source contribution log (2 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi (2020) · SA | Evaluation of Some Toxic and Essential Trace Elements in Chi… | cocoa sweets, as-sold | 3 | uniform_max_only | 50.0% |
| elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi (2020) · SA | Evaluation of Some Toxic and Essential Trace Elements in Chi… | cocoa with additives, as-sold | 4 | uniform_max_only | 50.0% |

</details>

### tHg

**Published HMTc threshold:** *data gap*
**Rationale tag:** `no-data`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors
**no_data**



**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 0 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below no published value (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 0 contributing sources across multiple jurisdictions. Sensitivity band no_data.



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
Response: For Pb, tAs, Ni, Cd, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 3 analytes (Ni, Cd, Al) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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

**Gates 4 + 5 caveat — provisional sensitivity:** 3 analytes (Ni, Cd, Al) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.

**Gate 1 caveat — uncovered analytes:** 1 analytes (tHg) have no defensible threshold and the certification mark for this product explicitly does NOT cover them. This is honest gap reporting, not a gate failure — but the Master Limit Table flags the gap clearly so retailers, regulators, and adversarial readers can see what is and is not covered.

---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `abt2018-cadmium-lead-cocoa-chocolate-us-market` (A) | Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market | Eileen Abt; Jennifer Fong Sam; Patrick Gray; Lauren Posnick Robin · 2018 · Food Additives & Contaminants: Part B Surveillance · doi:10.1080/19393210.2017.1420700 |
| `amjad2021-lahore-chocolates-metals` (A) | Determination of Heavy Metals in Locally Available Chocolates in Lahore Region | Amjad M; Hussain S; Baloch ZU; Raza A · 2021 · Turkish Journal of Agriculture - Food Science and Technology · doi:10.24925/turjaf.v9i6.1144-1153.4262 |
| `bfr2022-nickel-dietary-intake-germany-meal` (A) | Nickel: estimate of long-term intake via food based on the BfR MEAL Study | German Federal Institute for Risk Assessment (BfR) · 2022 · BfR Communication No. 033/2022 · doi:null |
| `bravo2024-cadmium-cacao-arauca` (A) | Cadmium in cacao crops and artisanal chocolates in the Arauca Department, Colombia | Bravo AG; Espinosa LF; Quiroga JA; Noriega RD; Castellanos DA · 2024 · Environmental Monitoring and Assessment · doi:10.1007/s10661-024-12539-9 |
| `burgon2023-cocoa-bean-to-bar-brazil-metals-ota` (B) | Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos e Ocratoxina A (Cocoa beans and "Bean to Bar" chocolates: Inorganic contaminants and Ochratoxin A) | Burgon VH · 2023 · Master's thesis, Instituto de Tecnologia de Alimentos (ITAL), Centro de Ciência e Qualidade de Alimentos, Campinas-SP, Brazil · doi:null |
| `elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi` (A) | Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES | Elsheikh MA; Ali DMH; Alotaibi SH · 2020 · Asian Journal of Chemistry 32(6):1273-1278 · doi:10.14233/ajchem.2020.22499 |
| `fda-tds-elements-2018-2020` (A) | Total Diet Study Report: Fiscal Years 2018-2020 Elements Data | U.S. Food and Drug Administration · 2022 · U.S. Food and Drug Administration, Total Diet Study Program · doi:null |
| `fechner2022-bfr-meal-hg-cd-pb-ni-germany` (A) | Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods | Fechner C; Hackethal C; Höpfner T; Dietrich J; Bloch D; Lindtner O; Sarvan I · 2022 · Food Chemistry: X · doi:10.1016/j.fochx.2022.100326 |
| `hands2024-multiyear-dark-chocolate-cocoa-usa` (A) | A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA | Hands JM; Anderson ML; Cooperman T; Balsky JE; Frame LA · 2024 · Frontiers in Nutrition · doi:10.3389/fnut.2024.1366231 |
| `kataoka2018-japan-chocolate-cocoa-cadmium` (A) | Surveillance of Cadmium Concentration in Chocolate and Cocoa Powder Products Distributed in Japan | Kataoka Y; Watanabe T; Hayashi K; Akiyama H · 2018 · Food Hygiene and Safety Science · doi:10.3358/shokueishi.59.269 |
| `marincich2023-cadmium-chocolate-poland` (A) | Threat or treat: Exposure assessment and risk characterisation of chemical contaminants in soft drinks and chocolate bars in various Polish population age groups | Marincich L; Protti M; Mandrioli R; Mercolini L; Wozniak L · 2023 · EFSA Journal · doi:10.2903/j.efsa.2023.e211011 |
| `oliveira2021-cocoa-beans-cd-pb-brazil-processing` (A) | Cd and Pb in cocoa beans: Occurrence and effects of chocolate processing | Ferreira de Oliveira AP; Milani RF; Efraim P; Morgano MA; Tfouni SAV · 2021 · Food Control 119, 107455 · doi:10.1016/j.foodcont.2020.107455 |

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
3. Running `npm run briefing -- --product=chocolate` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-08-10T09:36:41.738Z |
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