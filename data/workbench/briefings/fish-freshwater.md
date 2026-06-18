---
title: "HMTc Standards Briefing — Fish — freshwater (tilapia, catfish, trout)"
type: hmtc-standards-briefing
product_slug: fish-freshwater
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-18T19:37:34.570Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Fish — freshwater (tilapia, catfish, trout)

**Product class:** Fish — freshwater (tilapia, catfish, trout)
**Subcategory role:** independent
**Native basis for published thresholds:** as_sold
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-06-18
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for fish freshwater.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **300 ppb** [as-sold] | 2030.518 ppb (capped to 300 by reg cap) | regulatory-alignment | 10 | stable | 300 ppb (eu2023_pb_fish_muscle_300) |
| iAs | **500 ppb** [as-sold] | 359.471 ppb | literature-baseline | 2 | stable | — |
| tAs | _adjudication pending_ | 2024.892 ppb | literature-baseline | 8 | stable | — |
| Cd | **50 ppb** [as-sold] | 213.216 ppb (capped to 50 by reg cap) | regulatory-alignment | 9 | needs_review | 50 ppb (eu2023_cd_fish_muscle_50) |
| tHg | **500 ppb** [as-sold] | 678.374 ppb (capped to 500 by reg cap) | regulatory-alignment | 11 | stable | 500 ppb (eu2023_hg_fish_muscle_500) |
| MeHg | **500 ppb** [as-sold] | 359.650 ppb | literature-baseline | 6 | stable | — |

**How to read this table.** "Published" values are rounded up to the HMTc primary increment ladder (1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000, 1300, 1500, 2000, 5000, 10000 ppb) per the program's publication conventions; this gives brands an unambiguous bin to test against. The "precise" column shows the pooled-engine output before rounding so the methodology is transparent and re-derivable. Rationale tags map to CLAUDE.md Part 19's four allowed tags: `literature-baseline` (pooled value binds), `regulatory-alignment` (regulatory ceiling binds), `feasibility-driven` (analytical method binds), and `precautionary` (manual override below pooled and regulatory).

---

## Methodology — one page

**Per-analyte standards.** For each (product row, analyte) cell, every source loaded for that cell contributes to a pooled distribution via moment-matching pseudo-sample expansion. Sample-level data uses raw values; summary statistics (mean, median, max, lb/ub, reported percentiles) reconstruct under log-normal or Tobit assumptions documented per source. Pseudo-samples are weighted by source N and capped at 50% relative pool share to prevent any one survey from dominating. The pooled distribution is sorted and queried at the per-analyte target percentile:

- **Clean subcategory:** standard = pooled P97
- **Dirty subcategory:** standard = pooled P45
- **Independent (no within-pair partner):** standard = pooled P97 by default

**Why P97 / P45, not P90 / P30 (the row-pass calibration).** A brand certifies a product (one row, ten analytes simultaneously) — not one analyte at a time. Setting each per-analyte limit at the raw P90 of the clean distribution would deliver a joint row-pass rate close to 0.9^10 = 35% under analyte independence. Under realistic analyte correlation (~0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50-70%. To deliver the row-level outcomes the Governing Principles require — approximately 90% of clean-subcategory brands and approximately 30% of dirty-subcategory brands pass row certification — per-analyte limits are uplifted to P97 (clean) and P45 (dirty). This is the calibration that delivers the program's stated objective. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening; per-analyte differentiation (e.g., Pb tighter than Ni) is deferred until HMTc has 6-12 months of lot-testing data to measure actual joint pass rates.

**Basis.** Each product row's standard is published in the native basis of the product form, the edible form as sold (edible muscle or tissue for fish and shellfish; the product as placed on market for other as-sold forms). Brands ship and test in their product's native as-sold form; the certification mark matches that form. As-sold product is not reconstituted from a concentrate, so no powder-to-prepared conversion applies and the published value is the as-sold value. Sources reporting in a non-native basis are converted into the row's native basis during pooling via documented per-source factors recorded in the contribution log; conversions of unknown factor are flagged and not silently coerced.

**Regulatory cap.** The final published HMTc value never exceeds the lowest applicable loaded regulatory ceiling, expressed in the product's native basis. When the pooled P97/P45 exceeds the regulatory cap, the cap binds and the rationale tag is `regulatory-alignment`. When the pooled value is below the cap, the rationale is `literature-baseline` and the cap is shown for context only.

**Sensitivity.** Each pooled value is recomputed under three parametric assumptions: log-normal (headline), gamma (alternative), and nonparametric reconstruction. The spread across the three is reported as the sensitivity band: stable (≤25%), provisional (25–50%), or needs_review (>50%). Confidence intervals are computed via meta-analytic bootstrap that resamples whole sources (not individual pseudo-samples) to capture between-source uncertainty.

**Methodology authorities.** The pooling approach follows WHO/JECFA pooled total-diet study methodology, the EFSA Scientific Opinions on lead (2010, 2024) and cadmium (2009, 2024) for log-normal contaminant occurrence reconstruction, ATSDR moment-matching guidance for summary-statistic-only sources, and Codex CAC/GL 50-2004 weighted pooling. Per-source contribution logs document every admission decision and every basis conversion.

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=fish-freshwater`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 300 ppb [as-sold] · 300 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 300 ppb (eu2023_pb_fish_muscle_300)
**Pool composition:** 10 sources contributing · 126 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [897.42, 3157.41] ppb**
**Sensitivity: log-normal 2180.39 · gamma 1803.42 · nonparametric 2135.62 ppb · spread 17% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_fish_muscle_300). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 2030.52 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_fish_muscle_300). A Daubert challenge on the value reduces to "is eu2023_pb_fish_muscle_300 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 300 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_fish_muscle_300 cap. The pooled occurrence distribution from 10 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (10 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| lehel2024-rainbow-trout-aquaculture-italy (2024) · IT, HU, EU, WHO | Possible Metal Burden of Potentially Toxic Elements in Rainb… | unknown | 40 | uniform_max_only | 7.9% |
| lehel2024-rainbow-trout-aquaculture-italy (2024) · IT, HU, EU, WHO | Possible Metal Burden of Potentially Toxic Elements in Rainb… | rainbow trout flesh, wet weight | 40 | lognormal_mean_max | 31.8% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | freshwater fish, wet whole-weight/muscle as reported | 16 | uniform_max_only | 7.9% |
| maikanov2020-fish-products-shuchinsk-burabay-metals (2020) · KZ | Quality and safety of fish products in the Shuchinsk-Burabay… | freshwater fish muscle, wet/as-reported | 44 | uniform_max_only | 7.9% |
| majlesi2019-farmed-rainbow-trout-yasuj-iran (2019) · IR, WHO, US, EU | Heavy metal content in farmed rainbow trout in relation to a… | rainbow trout muscle, dry weight | 30 | lognormal_mean_max | 23.8% |
| zhuzhassarova2024-fish-seafood-central-asia-review (2024) · KZ, KG, TJ, TM, UZ | Fish and Seafood Safety: Human Exposure to Toxic Metals from… | freshwater fish tissue, wet/as-reported | 5 | uniform_max_only | 4.0% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | freshwater fish, wet weight | 57 | uniform_max_only | 7.9% |
| majlesi2017-khersan-river-fish-iran (2017) · IR, WHO, EU, US | The Concentration of Mercury, Cadmium and Lead in Muscular T… | freshwater fish muscle, dry/ambiguous basis | 5 | uniform_max_only | 4.0% |
| subhanullah2024-panjkora-fish-metals (2024) · PK | The detrimental effects of heavy metals on tributaries exert… | fish muscle, dry/wet ambiguous basis | 1 | single_point | 0.8% |
| tolkou2023-fish-heavy-metals-review (2023) · AR, BD, CN, ES, GN, IN, IT, PK, PL, SA, SK, TR, VN | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury i… | freshwater fish muscle, as reported | 5 | uniform_max_only | 4.0% |

</details>

### iAs

**Published HMTc threshold:** 500 ppb [as-sold] · 359.471 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 2 sources contributing · 20 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [111.10, 406.18] ppb**
**Sensitivity: log-normal 401.45 · gamma 327.17 · nonparametric 365.50 ppb · spread 19% (stable)**



**Defensibility.** Pooled P97 from 2 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 2 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 2 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (2 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| hoy2023-arsenic-speciation-freshwater-fish (2023) · CA, CN, FR, TH, TR, DE | Arsenic speciation in freshwater fish: challenges and resear… | freshwater fish dry weight | 14 | uniform_max_only | 50.0% |
| lehel2024-rainbow-trout-aquaculture-italy (2024) · IT, HU, EU, WHO | Possible Metal Burden of Potentially Toxic Elements in Rainb… | rainbow trout flesh, wet weight | 40 | lognormal_mean_max | 50.0% |

</details>

### tAs

**Published HMTc threshold:** adjudication pending — held provisional (wrong-analyte-not-material) · 2024.892 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 8 sources contributing · 81 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [1132.65, 2518.93] ppb**
**Sensitivity: log-normal 2252.28 · gamma 2195.34 · nonparametric 2218.91 ppb · spread 3% (stable)**



**Defensibility.** Pooled P97 from 8 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 8 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 5000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 8 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (8 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| hoy2023-arsenic-speciation-freshwater-fish (2023) · CA, CN, FR, TH, TR, DE | Arsenic speciation in freshwater fish: challenges and resear… | freshwater fish wet weight | 5 | uniform_max_only | 6.2% |
| hoy2023-arsenic-speciation-freshwater-fish (2023) · CA, CN, FR, TH, TR, DE | Arsenic speciation in freshwater fish: challenges and resear… | freshwater fish dry weight | 14 | uniform_max_only | 12.3% |
| lehel2024-rainbow-trout-aquaculture-italy (2024) · IT, HU, EU, WHO | Possible Metal Burden of Potentially Toxic Elements in Rainb… | rainbow trout flesh, wet weight | 40 | lognormal_mean_max | 49.4% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | freshwater fish, wet whole-weight/muscle as reported | 5 | uniform_max_only | 6.2% |
| maikanov2020-fish-products-shuchinsk-burabay-metals (2020) · KZ | Quality and safety of fish products in the Shuchinsk-Burabay… | freshwater fish muscle, wet/as-reported | 44 | uniform_max_only | 12.3% |
| zhuzhassarova2024-fish-seafood-central-asia-review (2024) · KZ, KG, TJ, TM, UZ | Fish and Seafood Safety: Human Exposure to Toxic Metals from… | freshwater fish tissue, wet/as-reported | 5 | uniform_max_only | 6.2% |
| subhanullah2024-panjkora-fish-metals (2024) · PK | The detrimental effects of heavy metals on tributaries exert… | fish muscle, dry/wet ambiguous basis | 1 | single_point | 1.2% |
| tolkou2023-fish-heavy-metals-review (2023) · AR, BD, CN, ES, GN, IN, IT, PK, PL, SA, SK, TR, VN | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury i… | freshwater fish muscle, as reported | 5 | uniform_max_only | 6.2% |

</details>

### Cd

**Published HMTc threshold:** 50 ppb [as-sold] · 50 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 50 ppb (eu2023_cd_fish_muscle_50)
**Pool composition:** 9 sources contributing · 116 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [112.15, 1959.98] ppb**
**Sensitivity: log-normal 1444.37 · gamma 507.64 · nonparametric 308.83 ppb · spread 79% (needs_review)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_cd_fish_muscle_50). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 213.22 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_cd_fish_muscle_50). A Daubert challenge on the value reduces to "is eu2023_cd_fish_muscle_50 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 50 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_cd_fish_muscle_50 cap. The pooled occurrence distribution from 9 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (9 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| lehel2024-rainbow-trout-aquaculture-italy (2024) · IT, HU, EU, WHO | Possible Metal Burden of Potentially Toxic Elements in Rainb… | rainbow trout flesh, wet weight | 40 | lognormal_mean_max | 34.5% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | freshwater fish, wet whole-weight/muscle as reported | 16 | uniform_max_only | 8.6% |
| maikanov2020-fish-products-shuchinsk-burabay-metals (2020) · KZ | Quality and safety of fish products in the Shuchinsk-Burabay… | freshwater fish muscle, wet/as-reported | 44 | uniform_max_only | 8.6% |
| majlesi2019-farmed-rainbow-trout-yasuj-iran (2019) · IR, WHO, US, EU | Heavy metal content in farmed rainbow trout in relation to a… | rainbow trout muscle, dry weight | 30 | lognormal_mean_max | 25.9% |
| zhuzhassarova2024-fish-seafood-central-asia-review (2024) · KZ, KG, TJ, TM, UZ | Fish and Seafood Safety: Human Exposure to Toxic Metals from… | freshwater fish tissue, wet/as-reported | 5 | uniform_max_only | 4.3% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | freshwater fish, wet weight | 53 | uniform_max_only | 8.6% |
| majlesi2017-khersan-river-fish-iran (2017) · IR, WHO, EU, US | The Concentration of Mercury, Cadmium and Lead in Muscular T… | freshwater fish muscle, dry/ambiguous basis | 5 | uniform_max_only | 4.3% |
| subhanullah2024-panjkora-fish-metals (2024) · PK | The detrimental effects of heavy metals on tributaries exert… | fish muscle, dry/wet ambiguous basis | 1 | single_point | 0.9% |
| tolkou2023-fish-heavy-metals-review (2023) · AR, BD, CN, ES, GN, IN, IT, PK, PL, SA, SK, TR, VN | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury i… | freshwater fish muscle, as reported | 5 | uniform_max_only | 4.3% |

</details>

### tHg

**Published HMTc threshold:** 500 ppb [as-sold] · 500 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 500 ppb (eu2023_hg_fish_muscle_500)
**Pool composition:** 11 sources contributing · 1407 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [346.14, 1063.23] ppb**
**Sensitivity: log-normal 802.96 · gamma 736.28 · nonparametric 651.35 ppb · spread 19% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_hg_fish_muscle_500). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 678.37 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_hg_fish_muscle_500). A Daubert challenge on the value reduces to "is eu2023_hg_fish_muscle_500 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_hg_fish_muscle_500 cap. The pooled occurrence distribution from 11 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (11 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| brodziak-dopierala2023-mercury-fish-poland (2023) · PL, EU | Analysis of the Mercury Content in Fish for Human Consumptio… | freshwater fish edible muscle, wet weight | 30 | lognormal_mean_median | 2.1% |
| eaglessmith2016-freshwater-fish-mercury-western-us-canada (2016) · US, CA | Spatial and temporal patterns of mercury concentrations in f… | skinless boneless fillet standardized wet weight | 96310 | lognormal_mean_max | 35.5% |
| epa1999-mercury-update-fish-advisories (1999) · US | Mercury Update: Impact on Fish Advisories | freshwater whole-fish composite, wet weight | 315 | lognormal_mean_max | 22.4% |
| epa1999-mercury-update-fish-advisories (1999) · US | Mercury Update: Impact on Fish Advisories | freshwater fish tissue, wet weight | 374 | lognormal_mean_median | 26.6% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | freshwater fish, wet whole-weight/muscle as reported | 16 | uniform_max_only | 0.7% |
| maikanov2020-fish-products-shuchinsk-burabay-metals (2020) · KZ | Quality and safety of fish products in the Shuchinsk-Burabay… | freshwater fish muscle, wet/as-reported | 44 | uniform_max_only | 0.7% |
| majlesi2019-farmed-rainbow-trout-yasuj-iran (2019) · IR, WHO, US, EU | Heavy metal content in farmed rainbow trout in relation to a… | rainbow trout muscle, dry weight | 30 | lognormal_mean_max | 2.1% |
| zhuzhassarova2024-fish-seafood-central-asia-review (2024) · KZ, KG, TJ, TM, UZ | Fish and Seafood Safety: Human Exposure to Toxic Metals from… | freshwater fish tissue, wet/as-reported | 5 | uniform_max_only | 0.4% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | freshwater fish, wet weight | 123 | percentile_interpolation | 8.7% |
| majlesi2017-khersan-river-fish-iran (2017) · IR, WHO, EU, US | The Concentration of Mercury, Cadmium and Lead in Muscular T… | freshwater fish muscle, dry/ambiguous basis | 5 | uniform_max_only | 0.4% |
| tolkou2023-fish-heavy-metals-review (2023) · AR, BD, CN, ES, GN, IN, IT, PK, PL, SA, SK, TR, VN | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury i… | freshwater fish muscle, as reported | 5 | uniform_max_only | 0.4% |

</details>

### MeHg

**Published HMTc threshold:** 500 ppb [as-sold] · 359.650 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 6 sources contributing · 6 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [86.55, 466.97] ppb**
**Sensitivity: log-normal 374.81 · gamma 359.65 · nonparametric 383.64 ppb · spread 6% (stable)**



**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 6 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 6 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | fish meat/products, source MeHg occurrence basis | 1 | single_point | 16.7% |
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | fish meat/products, source MeHg occurrence basis | 1 | single_point | 16.7% |
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | fish meat/products, source MeHg occurrence basis | 1 | single_point | 16.7% |
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | fish meat/products, source MeHg occurrence basis | 1 | single_point | 16.7% |
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | fish meat/products, source MeHg occurrence basis | 1 | single_point | 16.7% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | trout/freshwater fish, wet weight | 1 | lognormal_mean_only | 16.7% |

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
Response: For Pb, Cd, tHg, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

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
| 3 | Every published value is on the primary increment ladder | ✗ FAIL |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |



---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `brodziak-dopierala2023-mercury-fish-poland` (A) | Analysis of the Mercury Content in Fish for Human Consumption in Poland | Brodziak-Dopierala B; Fischer A · 2023 · Toxics · doi:10.3390/toxics11080717 |
| `eaglessmith2016-freshwater-fish-mercury-western-us-canada` (A) | Spatial and temporal patterns of mercury concentrations in freshwater fish across the Western United States and Canada | Eagles-Smith CA; Ackerman JT; Willacker JJ; Tate MT; Lutz MA; Fleck JA; Stewart AR; Wiener JG; Evers DC; Lepak JM; Davis JA; Flanagan Pritz C · 2016 · Science of The Total Environment (2016, in press 2015) · doi:10.1016/j.scitotenv.2016.03.229 |
| `efsa-sc2015-fish-seafood-mehg-risk-benefit` (A) | Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood | EFSA Scientific Committee · 2015 · EFSA Journal 2015;13(1):3982, 36 pp. · doi:10.2903/j.efsa.2015.3982 |
| `epa1999-mercury-update-fish-advisories` (A) | Mercury Update: Impact on Fish Advisories | US EPA Office of Water · 1999 · US EPA Fact Sheet EPA-823-F-99-016 · doi:null |
| `garofalo2025-seafood-cd-pb-hg-italy-10yr` (A) | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis | Garofalo L; Sala M; Focardi C; Pasqualetti P; Delfino D; D'Onofrio F; Droghei B; Pasquali F; Nicolini V; Galli FS; Scaramozzino P; Ubaldi A; Russo K; Neri B · 2025 · Foods 14(3):451 · doi:10.3390/foods14030451 |
| `hoy2023-arsenic-speciation-freshwater-fish` (A) | Arsenic speciation in freshwater fish: challenges and research needs | Hoy KS; Davydiuk T; Chen X; Lau C; Schofield JRM; Lu X; Graydon JA; Mitchell R; Reichert M; Le XC · 2023 · Food Quality and Safety · doi:10.1093/fqsafe/fyad032 |
| `lehel2024-rainbow-trout-aquaculture-italy` (A) | Possible Metal Burden of Potentially Toxic Elements in Rainbow Trout (Oncorhynchus mykiss) on Aquaculture Farm | Lehel J; Plachy M; Palotás P; Bartha A; Budai P · 2024 · Fishes · doi:10.3390/fishes9070252 |
| `macdonald2025-fss-uk-fishery-contaminants-review` (A) | Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review | MacDonald S; Stead S; Rose M; Boss K; Campbell K · 2025 · Fera Science Ltd report to Food Standards Scotland (Report FR/002826) · doi:null |
| `maikanov2020-fish-products-shuchinsk-burabay-metals` (B) | Quality and safety of fish products in the Shuchinsk-Burabay Resort Zone | Maikanov BS; Auteleyeva LT; Ismagulova GT; Wisniewski J; Belkot Z; Anusz K · 2020 · Medycyna Weterynaryjna 76(10):585-588 · doi:10.21521/mw.6462 |
| `majlesi2017-khersan-river-fish-iran` (B) | The Concentration of Mercury, Cadmium and Lead in Muscular Tissue of Fishes in Khersan River | Majlesi M; Khazaei Y; Berizi E; Sharifpour E · 2017 · International Journal of Nutrition Sciences · doi:null |
| `majlesi2019-farmed-rainbow-trout-yasuj-iran` (A) | Heavy metal content in farmed rainbow trout in relation to aquaculture area and feed pellets | Majlesi M; Malekzadeh J; Berizi E; Akbartabar Toori M · 2019 · Foods and Raw Materials · doi:10.21603/2308-4057-2019-2-329-338 |
| `subhanullah2024-panjkora-fish-metals` (A) | The detrimental effects of heavy metals on tributaries exert pressure on water quality, Crossocheilus diplocheilus, and the well-being of human health | Subhanullah M; Hassan N; Ali S; Saleh IA; Ilyas M; Rawan B; Ullah W; Iqbal B; Okla MK; Alaraidh IA; Fahad S · 2024 · Scientific Reports · doi:10.1038/s41598-024-53340-5 |
| `tolkou2023-fish-heavy-metals-review` (B) | Detection of Arsenic, Chromium, Cadmium, Lead, and Mercury in Fish: Effects on the Sustainable and Healthy Development of Aquatic Life and Human Consumers | Tolkou AK; Toubanaki DK; Kyzas GZ · 2023 · Sustainability · doi:10.3390/su152316242 |
| `zhuzhassarova2024-fish-seafood-central-asia-review` (B) | Fish and Seafood Safety: Human Exposure to Toxic Metals from the Aquatic Environment and Fish in Central Asia | Zhuzhassarova G; Azarbayjani F; Zamaratskaia G · 2024 · International Journal of Molecular Sciences · doi:10.3390/ijms25031590 |

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

1. Checking out commit `756c01d83dd5e6e0815cc016b990e494c2c32783` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=fish-freshwater` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-18T19:37:34.580Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | `756c01d83dd5e6e0815cc016b990e494c2c32783` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*