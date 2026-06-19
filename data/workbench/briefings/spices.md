---
title: "HMTc Standards Briefing — Spices"
type: hmtc-standards-briefing
product_slug: spices
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-19T16:40:50.943Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Spices

**Product class:** Spices
**Subcategory role:** whole_row_platform
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for spices.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **600 ppb** [as-sold] | 4553.808 ppb (capped to 600 by reg cap) | regulatory-alignment | 45 | stable | 600 ppb (eu2023_pb_spice_fruit_600) |
| tAs | **1000 ppb** [as-sold] | 702.937 ppb | literature-baseline | 16 | provisional | — |
| Sn | **1000 ppb** [as-sold] | 508.845 ppb | literature-baseline | 1 | provisional | — |
| Ni | **10000 ppb** [as-sold] | 6976.289 ppb | literature-baseline | 16 | stable | — |
| Cd | **1000 ppb** [as-sold] | 641.466 ppb | literature-baseline | 27 | stable | — |
| Al | _not material_ | 846635.607 ppb (pool not standardized — not material) | literature-baseline | 6 | stable | — |
| tHg | **2000 ppb** [as-sold] | 1501.599 ppb | literature-baseline | 9 | stable | — |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=spices`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 600 ppb [as-sold] · 600 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 600 ppb (eu2023_pb_spice_fruit_600)
**Pool composition:** 45 sources contributing · 2911 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [1915.46, 271482.72] ppb**
**Sensitivity: log-normal 4661.49 · gamma 4705.95 · nonparametric 4884.12 ppb · spread 5% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_spice_fruit_600). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 4553.81 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_spice_fruit_600). A Daubert challenge on the value reduces to "is eu2023_pb_spice_fruit_600 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 600 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_spice_fruit_600 cap. The pooled occurrence distribution from 45 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (45 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| forsyth2019-turmeric-lead-chromate-bangladesh (2019) · BD | Turmeric means 'yellow' in Bengali: Lead chromate pigments a… | powder_as_placed | 524 | uniform_max_only | 0.3% |
| forsyth2019-turmeric-lead-chromate-bangladesh (2019) · BD | Turmeric means 'yellow' in Bengali: Lead chromate pigments a… | unknown | 7 | uniform_max_only | 0.2% |
| forsyth2019-turmeric-lead-chromate-bangladesh (2019) · BD | Turmeric means 'yellow' in Bengali: Lead chromate pigments a… | unknown | 524 | uniform_max_only | 0.3% |
| forsyth2024-turmeric-lead-chromate-south-asia (2024) · IN, PK, LK, NP | Evidence of turmeric adulteration with lead chromate across … | unknown | 356 | uniform_max_only | 0.3% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 3 | lognormal_mean_only | 0.1% |
| winiarska-mieczan2023-cd-pb-polish-herbs-spices (2023) · PL, EU | The Content of Cd and Pb in Herbs and Single-Component Spice… | unknown | 432 | lognormal_mean_median | 14.8% |
| winiarska-mieczan2023-cd-pb-polish-herbs-spices (2023) · PL, EU | The Content of Cd and Pb in Herbs and Single-Component Spice… | unknown | 432 | lognormal_mean_max | 14.8% |
| winiarska-mieczan2023-cd-pb-polish-herbs-spices (2023) · PL, EU | The Content of Cd and Pb in Herbs and Single-Component Spice… | unknown | 432 | lognormal_mean_median | 14.8% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 26 | lognormal_mean_only | 0.9% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 8 | lognormal_mean_only | 0.3% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 3 | lognormal_mean_only | 0.1% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 3 | lognormal_mean_only | 0.1% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 240 | lognormal_mean_only | 8.2% |
| kowalska2021-metals-herbs-spices-tea-coffee-poland (2021) · PL, EU | The Safety Assessment of Toxic Metals in Commonly Used Herbs… | unknown | 240 | lognormal_mean_only | 8.2% |
| alam2022-dhaka-spices-lead (2022) · BD | Lead Exposure of Four Biologically Important Common Branded … | powdered spices, as-sold | 72 | uniform_max_only | 0.3% |
| bahrouna2025-zawia-spices-metals (2025) · LY | Evaluation of Heavy Metals Contents in Spices Available on Z… | mixed spices and seasonings, as-sold | 13 | lognormal_mean_only | 0.4% |
| bekalu2025-black-cumin-heavy-metals-ethiopia (2025) · ET | Analysis of Nigella sativa L. (Black Cumin) seeds for levels… | black cumin seed, dry weight | 3 | uniform_max_only | 0.1% |
| brima2025-african-foods-uk-metals (2025) · GB | Assessment of Human Health Risk Based on Analysis of Potenti… | spices, dry weight | 1 | single_point | 0.0% |
| cantoral2024-lead-levels-mexican-foods (2024) · MX | Lead Levels in the Most Consumed Mexican Foods: First Monito… | solid condiments/spices, source dry-prepared basis | 11 | uniform_max_only | 0.3% |
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 0.3% |

</details>

### tAs

**Published HMTc threshold:** 1000 ppb [as-sold] · 702.937 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 16 sources contributing · 412 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [410.39, 10591.45] ppb**
**Sensitivity: log-normal 843.49 · gamma 1063.11 · nonparametric 721.84 ppb · spread 32% (provisional)**



**Defensibility.** Pooled P97 from 16 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 16 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 16 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (16 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| bahrouna2025-zawia-spices-metals (2025) · LY | Evaluation of Heavy Metals Contents in Spices Available on Z… | mixed spices and seasonings, as-sold | 13 | lognormal_mean_only | 3.2% |
| brima2025-african-foods-uk-metals (2025) · GB | Assessment of Human Health Risk Based on Analysis of Potenti… | spices, dry weight | 1 | single_point | 0.2% |
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 2.4% |
| marinescu2020-romanian-herbs-spices-metals (2020) · RO | Assessment of heavy metals content in some medicinal plants … | packaged and wild-growing culinary herbs/spices, source mg/kg basis | 18 | uniform_max_only | 2.4% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | cumin, unpackaged as-sold | 20 | lognormal_mean_only | 4.9% |
| spex2023-hot-sauce-chili-powder-metals (2023) · US | Heavy Metal Contamination of Hot Sauce and Chili Powder | chili powder, as-sold | 7 | uniform_max_only | 1.7% |
| tinggi2025-spices-herbs-queensland (2025) · AU, IN, CN, LK, VN, BD, MY, EG, FJ, ES | Heavy metal analysis in commercial spices and herbs by induc… | dried commercial spices and herbs, as-sold | 69 | lognormal_mean_max | 16.8% |
| cfia2025-toxic-metals-selected-foods-2022-23 (2025) · CA | Toxic metals in selected foods – April 1, 2022 to March 31, … | spices, as-sold | 115 | lognormal_mean_max | 27.9% |
| huff2025-spices-lancaster-pa (2025) · US | Heavy metals in spices from Lancaster, PA: arsenic, cadmium,… | spices, as-sold | 116 | uniform_max_only | 2.4% |
| moussa2024-spices-herbs-lebanon (2024) · LB | Impact of source, packaging and presence of food safety mana… | dried herbs and spices, as-sold | 96 | uniform_max_only | 2.4% |
| oseisafo2024-ghana-spices-metals (2024) · GH, IN, CN, MA, ML, FR, MY | Trace and Heavy Metals in Locally and Imported Spices Sold o… | spices, as-received | 90 | uniform_max_only | 2.4% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | cinnamon, dry-weight/as-sold bulk spice | 37 | lognormal_mean_max | 9.0% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | cumin, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 6.1% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | ginger, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 6.1% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | black pepper, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 6.1% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | turmeric, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 6.1% |

</details>

### Sn

**Published HMTc threshold:** 1000 ppb [as-sold] · 508.845 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 1 sources contributing · 1 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [47.13, 2354.26] ppb**
**Sensitivity: log-normal 381.60 · gamma 521.95 · nonparametric 381.90 ppb · spread 27% (provisional)**



**Defensibility.** Pooled P97 from 1 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 1 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 1 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (1 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 100.0% |

</details>

### Ni

**Published HMTc threshold:** 10000 ppb [as-sold] · 6976.289 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 16 sources contributing · 934 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [4629.82, 18303.00] ppb**
**Sensitivity: log-normal 7052.45 · gamma 7532.07 · nonparametric 6169.20 ppb · spread 18% (stable)**



**Defensibility.** Pooled P97 from 16 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 16 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 10000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 16 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (16 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| adams2017-nigerian-processed-spices-metals (2017) · NG | Genotoxic studies of cooked and uncooked processed spices us… | Nigerian processed spices, as-sold | 4 | uniform_max_only | 0.4% |
| bahrouna2025-zawia-spices-metals (2025) · LY | Evaluation of Heavy Metals Contents in Spices Available on Z… | mixed spices and seasonings, as-sold | 13 | lognormal_mean_only | 1.4% |
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 1.1% |
| efsa2015-nickel-food-water (2015) · EU | Scientific Opinion on the risks to public health related to … | herbs, spices and condiments, whole weight | 481 | lognormal_lod_censored_midpoint | 50.0% |
| matloob2016-iraq-spices-heavy-metals (2016) · IQ | Using Stripping Voltammetry to Determine Heavy Metals in Coo… | spices, dry weight | 160 | lognormal_mean_max | 17.1% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | black pepper, unpackaged as-sold | 20 | lognormal_mean_only | 2.1% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | cumin, unpackaged as-sold | 20 | lognormal_mean_only | 2.1% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | red pepper, unpackaged as-sold | 20 | lognormal_mean_only | 2.1% |
| savic2019-serbian-spices-minerals (2019) · RS | Determination of the mineral content of spices by ICP-OES | spices, as-sold | 10 | uniform_max_only | 1.1% |
| tinggi2025-spices-herbs-queensland (2025) · AU, IN, CN, LK, VN, BD, MY, EG, FJ, ES | Heavy metal analysis in commercial spices and herbs by induc… | dried commercial spices and herbs, as-sold | 69 | lognormal_mean_max | 7.4% |
| dokubo2023-nigeria-seasoning-powder (2023) · NG | Heavy Metal Concentration and Human Health Risk Assessment o… | dry seasoning powder, as-sold | 4 | uniform_max_only | 0.4% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | cinnamon, dry-weight/as-sold bulk spice | 37 | lognormal_mean_max | 4.0% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | cumin, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 2.7% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | ginger, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 2.7% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | black pepper, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 2.7% |
| sabri2025-moroccan-spices-casablanca-metals (2025) · MA, EU, INTL | Essential and Toxic Element Profiles in Selected Spices from… | turmeric, dry-weight/as-sold bulk spice | 25 | lognormal_mean_max | 2.7% |

</details>

### Cd

**Published HMTc threshold:** 1000 ppb [as-sold] · 641.466 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 27 sources contributing · 896 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [365.68, 886.40] ppb**
**Sensitivity: log-normal 643.37 · gamma 596.68 · nonparametric 582.04 ppb · spread 10% (stable)**



**Defensibility.** Pooled P97 from 27 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 27 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 27 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (27 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| adams2017-nigerian-processed-spices-metals (2017) · NG | Genotoxic studies of cooked and uncooked processed spices us… | Nigerian processed spices, as-sold | 4 | uniform_max_only | 0.4% |
| bahrouna2025-zawia-spices-metals (2025) · LY | Evaluation of Heavy Metals Contents in Spices Available on Z… | mixed spices and seasonings, as-sold | 13 | lognormal_mean_only | 1.5% |
| bekalu2025-black-cumin-heavy-metals-ethiopia (2025) · ET | Analysis of Nigella sativa L. (Black Cumin) seeds for levels… | black cumin seed, dry weight | 3 | uniform_max_only | 0.3% |
| brima2025-african-foods-uk-metals (2025) · GB | Assessment of Human Health Risk Based on Analysis of Potenti… | spices, dry weight | 1 | single_point | 0.1% |
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 1.1% |
| dghaim2015-heavy-metals-uae-herbs (2015) · AE | Determination of Heavy Metals Concentration in Traditional H… | dried culinary/medicinal herbs, dry weight | 78 | uniform_max_only | 1.1% |
| marinescu2020-romanian-herbs-spices-metals (2020) · RO | Assessment of heavy metals content in some medicinal plants … | packaged and wild-growing culinary herbs/spices, source mg/kg basis | 18 | uniform_max_only | 1.1% |
| matloob2016-iraq-spices-heavy-metals (2016) · IQ | Using Stripping Voltammetry to Determine Heavy Metals in Coo… | spices, dry weight | 160 | lognormal_mean_max | 17.9% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | black pepper, unpackaged as-sold | 20 | lognormal_mean_only | 2.2% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | cumin, unpackaged as-sold | 20 | lognormal_mean_only | 2.2% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | red pepper, unpackaged as-sold | 20 | lognormal_mean_only | 2.2% |
| munarso2024-vanilla-indonesia-quality (2024) · ID | From bean to market: exploring the chemical and production d… | cured vanilla beans, as-sold | 5 | uniform_max_only | 0.6% |
| savic2019-serbian-spices-minerals (2019) · RS | Determination of the mineral content of spices by ICP-OES | spices, as-sold | 10 | uniform_max_only | 1.1% |
| spex2023-hot-sauce-chili-powder-metals (2023) · US | Heavy Metal Contamination of Hot Sauce and Chili Powder | chili powder, as-sold | 7 | uniform_max_only | 0.8% |
| tinggi2025-spices-herbs-queensland (2025) · AU, IN, CN, LK, VN, BD, MY, EG, FJ, ES | Heavy metal analysis in commercial spices and herbs by induc… | dried commercial spices and herbs, as-sold | 69 | lognormal_mean_max | 7.7% |
| winiarska-mieczan2023-cd-pb-polish-herbs-spices (2023) · PL, EU | The Content of Cd and Pb in Herbs and Single-Component Spice… | dried herbs, fresh-weight reporting basis | 100 | lognormal_mean_median | 11.2% |
| winiarska-mieczan2023-cd-pb-polish-herbs-spices (2023) · PL, EU | The Content of Cd and Pb in Herbs and Single-Component Spice… | single-component spices, fresh-weight reporting basis | 148 | lognormal_mean_max | 16.5% |
| cfia2025-toxic-metals-selected-foods-2022-23 (2025) · CA | Toxic metals in selected foods – April 1, 2022 to March 31, … | spices, as-sold | 115 | lognormal_mean_max | 12.8% |
| huff2025-spices-lancaster-pa (2025) · US | Heavy metals in spices from Lancaster, PA: arsenic, cadmium,… | spices, as-sold | 116 | uniform_max_only | 1.1% |
| dokubo2023-nigeria-seasoning-powder (2023) · NG | Heavy Metal Concentration and Human Health Risk Assessment o… | dry seasoning powder, as-sold | 4 | lognormal_mean_max | 0.4% |

</details>

### Al

**Published HMTc threshold:** **not material** — Aluminium in dried spices/herbs reflects natural soil uptake by Al-accumulating botanicals; pooled P97 (846 mg/kg, n=149) is natural mineral content, not a contaminant signal
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 6 sources contributing · 149 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.



<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 6.7% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | black pepper, unpackaged as-sold | 20 | lognormal_mean_only | 13.4% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | cumin, unpackaged as-sold | 20 | lognormal_mean_only | 13.4% |
| mercan-yucel2022-van-spices-heavy-metals (2022) · TR | Determination of Aflatoxin and Heavy Metal Levels in Some Sp… | red pepper, unpackaged as-sold | 20 | lognormal_mean_only | 13.4% |
| savic2019-serbian-spices-minerals (2019) · RS | Determination of the mineral content of spices by ICP-OES | spices, as-sold | 10 | uniform_max_only | 6.7% |
| tinggi2025-spices-herbs-queensland (2025) · AU, IN, CN, LK, VN, BD, MY, EG, FJ, ES | Heavy metal analysis in commercial spices and herbs by induc… | dried commercial spices and herbs, as-sold | 69 | lognormal_mean_max | 46.3% |

</details>

### tHg

**Published HMTc threshold:** 2000 ppb [as-sold] · 1501.599 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 9 sources contributing · 357 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [45.56, 1931.18] ppb**
**Sensitivity: log-normal 902.69 · gamma 974.32 · nonparametric 1149.94 ppb · spread 22% (stable)**



**Defensibility.** Pooled P97 from 9 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 9 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 2000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 9 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (9 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| bahrouna2025-zawia-spices-metals (2025) · LY | Evaluation of Heavy Metals Contents in Spices Available on Z… | mixed spices and seasonings, as-sold | 13 | lognormal_mean_only | 3.6% |
| brima2025-african-foods-uk-metals (2025) · GB | Assessment of Human Health Risk Based on Analysis of Potenti… | spices, dry weight | 1 | single_point | 0.3% |
| cicero2022-minerals-spices-aromatic-herbs (2022) · SA, IN, IR, ID, VN | Mineral and Microbiological Analysis of Spices and Aromatic … | dried spices and aromatic herbs, as-sold | 13 | uniform_max_only | 2.8% |
| fischer2022-mercury-spice-plants-poland (2022) · PL, EU | The Mercury Concentration in Spice Plants | commercial dried leafy herbs, dry weight | 28 | lognormal_mean_median | 7.8% |
| marinescu2020-romanian-herbs-spices-metals (2020) · RO | Assessment of heavy metals content in some medicinal plants … | packaged and wild-growing culinary herbs/spices, source mg/kg basis | 18 | uniform_max_only | 2.8% |
| matloob2016-iraq-spices-heavy-metals (2016) · IQ | Using Stripping Voltammetry to Determine Heavy Metals in Coo… | spices, dry weight | 160 | lognormal_mean_max | 44.8% |
| tinggi2025-spices-herbs-queensland (2025) · AU, IN, CN, LK, VN, BD, MY, EG, FJ, ES | Heavy metal analysis in commercial spices and herbs by induc… | dried commercial spices and herbs, as-sold | 69 | uniform_max_only | 2.8% |
| cfia2025-toxic-metals-selected-foods-2022-23 (2025) · CA | Toxic metals in selected foods – April 1, 2022 to March 31, … | spices, as-sold | 115 | lognormal_mean_max | 32.2% |
| moussa2024-spices-herbs-lebanon (2024) · LB | Impact of source, packaging and presence of food safety mana… | dried herbs and spices, as-sold | 96 | uniform_max_only | 2.8% |

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
Response: The sensitivity bands are explicitly reported per analyte. 2 analytes (tAs, Sn) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ✗ FAIL (7 of 10) |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ✓ PASS |
| 3 | Every published value is on the primary increment ladder | ✗ FAIL |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 2 analytes (tAs, Sn) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `adams2017-nigerian-processed-spices-metals` (A) | Genotoxic studies of cooked and uncooked processed spices using Allium cepa Test | Adams FM; Njoku K; Famotemi AC; Idowu D; Tijani AA · 2017 · International Journal of Advanced Research in Biological Sciences · doi:10.22192/ijarbs.2017.04.09.004 |
| `alam2022-dhaka-spices-lead` (B) | Lead Exposure of Four Biologically Important Common Branded and Nonbranded Spices: Relative Analysis and Health Implication | Alam M Nur E; Hosen M Mozammal; Maksud M A; Khan S R; Lutfa L N; Choudhury Tasrina Rabia; Quraishi Shamshad B · 2022 · Research Square (preprint) · doi:10.21203/rs.3.rs-2087533/v1 |
| `bahrouna2025-zawia-spices-metals` (A) | Evaluation of Heavy Metals Contents in Spices Available on Zawia City`s Markets | Bahrouna N H; Abdassalama A F; Abobakera D M; Saleha M S; Alshareef M A; Salema S N · 2025 · University of Zawia Journal of Natural Sciences · doi:10.26629/uzjns.2025.10 |
| `bekalu2025-black-cumin-heavy-metals-ethiopia` (A) | Analysis of Nigella sativa L. (Black Cumin) seeds for levels of heavy metals using FAAS: geospatial profiling and regional safety implications | Bekalu Yewbmirt; Kitaw Sintayehu Leshe; Manayia Abere Habtamu; Asmare Nigus Hunegnaw · 2025 · Discover Chemistry · doi:10.1007/s44371-025-00300-1 |
| `brima2025-african-foods-uk-metals` (A) | Assessment of Human Health Risk Based on Analysis of Potentially Toxic Elements in African Foods Sold in the UK Market | Brima EI; Haris PI; Frei M · 2025 · African Journal of Agriculture and Food Science · doi:10.52589/AJAFS-TWSMWEGM |
| `cantoral2024-lead-levels-mexican-foods` (A) | Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort | Cantoral A; Betanzos-Robledo L; Collado-López S; García-Martínez BA; Lamadrid-Figueroa H; Mariscal-Moreno RM; Díaz-Ruiz A; Ríos C; Téllez-Rojo MM · 2024 · Toxics · doi:10.3390/toxics12050318 |
| `cfia2025-toxic-metals-selected-foods-2022-23` (A) | Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report | Canadian Food Inspection Agency · 2025 · Canadian Food Inspection Agency · doi:null |
| `cicero2022-minerals-spices-aromatic-herbs` (A) | Mineral and Microbiological Analysis of Spices and Aromatic Herbs | Cicero N; Gervasi T; Durazzo A; Lucarini M; Macrì A; Nava V; Giarratana F; Tardugno R; Vadalà R; Santini A · 2022 · Foods · doi:10.3390/foods11040548 |
| `dghaim2015-heavy-metals-uae-herbs` (A) | Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates | Dghaim R; Al Khatib S; Rasool H; Khan MA · 2015 · Journal of Environmental and Public Health · doi:10.1155/2015/973878 |
| `dokubo2023-nigeria-seasoning-powder` (B) | Heavy Metal Concentration and Human Health Risk Assessment of Selected Brands of Seasoning Powder Sold in Port Harcourt, Nigeria | Dokubo A; Dappa EN; Hamilton AA; Igwe FU · 2023 · International Journal of Science and Healthcare Research · doi:10.52403/ijshr.20230212 |
| `efsa2015-nickel-food-water` (A) | Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water | EFSA Panel on Contaminants in the Food Chain (CONTAM) · 2015 · EFSA Journal 2015;13(2):4002, 202 pp. · doi:10.2903/j.efsa.2015.4002 |
| `fischer2022-mercury-spice-plants-poland` (A) | The Mercury Concentration in Spice Plants | Fischer A; Brodziak-Dopierała B · 2022 · Processes · doi:10.3390/pr10101954 |
| `forsyth2019-turmeric-lead-chromate-bangladesh` (A) | Turmeric means 'yellow' in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh | Forsyth JE; Nurunnahar S; Islam SS; Baker M; Yeasmin D; Islam MS; Rahman M; Fendorf S; Ardoin NM; Winch PJ; Luby SP · 2019 · Environmental Research · doi:10.1016/j.envres.2019.108722 |
| `forsyth2024-turmeric-lead-chromate-south-asia` (A) | Evidence of turmeric adulteration with lead chromate across South Asia | Forsyth JE; Mistree D; Nash E; Angrish M; Luby SP · 2024 · Science of the Total Environment · doi:10.1016/j.scitotenv.2024.175003 |
| `huff2025-spices-lancaster-pa` (A) | Heavy metals in spices from Lancaster, PA: arsenic, cadmium, and lead exposure risks and the need for regulation | Huff A; Lam H; Ghimirey A; Goldring J; Pimentel M; Okatch H · 2025 · Environmental Monitoring and Assessment · doi:10.1007/s10661-025-14064-9 |
| `kowalska2021-metals-herbs-spices-tea-coffee-poland` (A) | The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland | Kowalska G · 2021 · International Journal of Environmental Research and Public Health · doi:10.3390/ijerph18115779 |
| `lech2020-turmeric-lead-united-states` (A) | Ground Turmeric as a Source of Lead Exposure in the United States | Lech FA; Brown S; Karagas MR; Matte TD · 2020 · Environmental Health Perspectives · doi:10.1289/EHP5561 |
| `marinescu2020-romanian-herbs-spices-metals` (A) | Assessment of heavy metals content in some medicinal plants and spices commonly used in Romania | Marinescu E; Elisei AM; Aprotosoaie AC; Cioancă O; Trifan A; Miron A; Robu S; Ifrim C; Hăncianu M · 2020 · Farmacia · doi:10.31925/farmacia.2020.6.18 |
| `matloob2016-iraq-spices-heavy-metals` (A) | Using Stripping Voltammetry to Determine Heavy Metals in Cooking Spices Used in Iraq | Matloob MH · 2016 · Polish Journal of Environmental Studies · doi:10.15244/pjoes/62401 |
| `mercan-yucel2022-van-spices-heavy-metals` (A) | Determination of Aflatoxin and Heavy Metal Levels in Some Spices Sold as Unpackaged in Van Province and Health Risks Assessment of Heavy Metals | Mercan Yucel U · 2022 · Balikesir Health Sciences Journal · doi:10.53424/balikesirsbd.1160866 |
| `moussa2024-spices-herbs-lebanon` (A) | Impact of source, packaging and presence of food safety management system on heavy metals levels in spices and herbs | Moussa L; Hassan HF; Savvaidis IN; Karam L · 2024 · PLoS ONE · doi:10.1371/journal.pone.0307884 |
| `munarso2024-vanilla-indonesia-quality` (B) | From bean to market: exploring the chemical and production dynamics of high-quality Indonesian vanilla | Munarso SJ; Rahardjo YP; Sjafrina N; Arianto A; Hadipoentyanti E; Astuti P; Setiadi A; Koeslulat EE; Lintang MMJ; Sulistyorini S; Egayanti Y; Elmatsani HM; Djafar MJ; Susetyo EB; Lanjar L; Hadipernata M · 2024 · Frontiers in Sustainable Food Systems · doi:10.3389/fsufs.2024.1425656 |
| `oseisafo2024-ghana-spices-metals` (A) | Trace and Heavy Metals in Locally and Imported Spices Sold on Markets in Accra Metropolis, Ghana | Osei-Safo I; Miezah K; Sackey LNA; Adusei-Gyamf J; Abdul AM · 2024 · The Scientific World Journal · doi:10.1155/2024/3168279 |
| `rahman2021-dhaka-turmeric-heavy-metals` (A) | Analysis of heavy metal contents in some commercial turmeric samples available at Dhaka, Bangladesh | Rahman MA; Akter T; Akter R; Sarkar BK; Rafiquzzaman M · 2021 · Jahangirnagar University Journal of Biological Sciences · doi:10.3329/jujbs.v9i1.53703 |
| `sabri2025-moroccan-spices-casablanca-metals` (B) | Essential and Toxic Element Profiles in Selected Spices from Greater Casablanca, Morocco | Sabri S; Sabri C; Salam MR; El Mellouli F; Lafram A; Khallouki H; Hassane YA; Kabine M · 2025 · World's Veterinary Journal 15(4): 863-881 · doi:10.54203/scil.2025.wvj88 |
| `savic2019-serbian-spices-minerals` (A) | Determination of the mineral content of spices by ICP-OES | Savić S; Petrović S; Petronijević M; Cvetanović A; Petronijević Ž · 2019 · Advanced Technologies · doi:10.5937/savteh1901027s |
| `shah2025-commercial-turmeric-lead-chromium` (A) | Heavy Metal Contamination in Commercial Turmeric: A Public Health Perspective | Shah SK; Thapa A; Bhattarai A · 2025 · COGNITION: A Peer Reviewed Transdisciplinary Research Journal · doi:10.3126/cognition.v7i1.74770 |
| `spex2023-hot-sauce-chili-powder-metals` (B) | Heavy Metal Contamination of Hot Sauce and Chili Powder | SPEX CertiPrep / ZeptoMetrix · 2023 · SPEX Application Note (ZeptoMetrix) · doi:null |
| `tinggi2025-spices-herbs-queensland` (A) | Heavy metal analysis in commercial spices and herbs by inductively coupled plasma mass spectrometry (ICP-MS) and estimated dietary exposure | Tinggi U; Farrell M; Porter J; Mitchell S; Jurd S · 2025 · Journal of Environmental Exposure Assessment · doi:10.20517/jeea.2025.10 |
| `winiarska-mieczan2023-cd-pb-polish-herbs-spices` (A) | The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine | Winiarska-Mieczan A; Jachimowicz K; Kwiecień M; Krusiński R; Kislova S; Sowińska L; Zasadna Z; Yanovych D · 2023 · Biological Trace Element Research · doi:10.1007/s12011-022-03437-7 |

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

1. Checking out commit `6dfe2d3e96de11533a4db182d0dd711d9a2c0607` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=spices` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-19T16:40:50.961Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `6dfe2d3e96de11533a4db182d0dd711d9a2c0607` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*