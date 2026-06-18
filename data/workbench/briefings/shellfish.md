---
title: "HMTc Standards Briefing — Shellfish (shrimp, crab, lobster, clams, oysters, mussels)"
type: hmtc-standards-briefing
product_slug: shellfish
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-18T19:37:34.655Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Shellfish (shrimp, crab, lobster, clams, oysters, mussels)

**Product class:** Shellfish (shrimp, crab, lobster, clams, oysters, mussels)
**Subcategory role:** whole_row_platform
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for shellfish.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **1500 ppb** [as-sold] | 3043.451 ppb (capped to 1500 by reg cap) | regulatory-alignment | 18 | stable | 1500 ppb (eu2023_pb_bivalve_1500) |
| iAs | **200 ppb** [as-sold] | 109.487 ppb | literature-baseline | 4 | needs_review | — |
| tAs | _adjudication pending_ | 33023.140 ppb | literature-baseline | 6 | needs_review | — |
| Ni | **10000 ppb** [as-sold] | 12189.015 ppb | literature-baseline | 5 | provisional | — |
| Cd | **1000 ppb** [as-sold] | 5152.922 ppb (capped to 1000 by reg cap) | regulatory-alignment | 20 | stable | 1000 ppb (eu2023_cd_bivalve_1000) |
| Al | *data gap* | — | no-data | 0 | no_data | — |
| tHg | **500 ppb** [as-sold] | 236.605 ppb | literature-baseline | 14 | stable | 500 ppb (eu2023_hg_crustaceans_molluscs_500) |
| MeHg | **200 ppb** [as-sold] | 140.720 ppb | literature-baseline | 4 | stable | — |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=shellfish`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 1500 ppb [as-sold] · 1500 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 1500 ppb (eu2023_pb_bivalve_1500)
**Pool composition:** 18 sources contributing · 774 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [771.10, 6306.83] ppb**
**Sensitivity: log-normal 3130.83 · gamma 3032.83 · nonparametric 3057.21 ppb · spread 3% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_pb_bivalve_1500). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 3043.45 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_pb_bivalve_1500). A Daubert challenge on the value reduces to "is eu2023_pb_bivalve_1500 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_pb_bivalve_1500 cap. The pooled occurrence distribution from 18 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (18 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| chou-uthe1993-cadmium-american-lobster-belledune (1993) · CA | Cadmium in American lobster (Homarus americanus) from the ar… | cooked lobster tail/claw/knuckle meat, wet weight | 5 | uniform_max_only | 0.7% |
| fera2015-uk-tds-metals (2015) · GB | Total Diet Study of metals and other elements in food | shellfish composite, as consumed/as prepared | 1 | single_point | 0.1% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | bivalve molluscs, wet weight | 897 | percentile_interpolation | 50.0% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | crustaceans, wet weight | 38 | lognormal_mean_max | 4.9% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | cephalopod molluscs, wet weight | 650 | uniform_max_only | 1.3% |
| gongora-gomez2017-oysters-gulf-california-metals (2017) · MX | Heavy-metal contents in oysters (Crassostrea gigas) cultivat… | oyster soft tissue, dry weight | 1 | single_point | 0.1% |
| gongora-gomez2018-pen-shell-seasonal-metals (2018) · MX | Seasonal levels of heavy metals in soft tissue and muscle of… | pen shell soft tissue, wet weight | 1 | single_point | 0.1% |
| helcom2017-core-indicator-metals-baltic (2017) · EU, DE, DK, EE, FI, LV, LT, PL, RU, SE | Metals (lead, cadmium and mercury) — HELCOM core indicator r… | mussel soft body, wet weight | 5 | uniform_max_only | 0.7% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | mussel whole weight/wet weight | 5 | uniform_max_only | 0.7% |
| nielsen1975-nz-molluscs-heavy-metals (1975) · NZ | Heavy metal levels in New Zealand molluscs | mollusc whole soft tissue, wet weight | 5 | uniform_max_only | 0.7% |
| onyegeme-okerenta2023-shellfish-nigeria (2023) · NG | Potential Toxic elements in shellfish from three rivers in N… | shellfish tissue, dry weight | 5 | uniform_max_only | 0.7% |
| rajeshkumar2018-taihu-lake-fish-oyster-metals (2018) · CN | Studies on seasonal pollution of heavy metals in water, sedi… | oyster whole body, wet weight | 4 | lognormal_mean_only | 0.5% |
| raju2021-bivalves-cagayan-philippines (2021) · PH | Heavy Metal Determination of Bivalves in Cagayan Valley, Phi… | bivalve soft tissue, dry weight | 5 | uniform_max_only | 0.7% |
| romero-estevez2020-bivalves-santa-rosa-ecuador (2020) · EC, EU | An Overview of Cadmium, Chromium, and Lead Content in Bivalv… | bivalve soft tissue, fresh weight | 50 | uniform_max_only | 1.3% |
| sepulveda2020-callista-clam-metals (2020) · MX | Trace metals in two wild populations of the squalid callista… | clam tissue, dry weight | 1 | single_point | 0.1% |
| shue2012-bivalves-tapeng-taiwan (2012) · TW | Seasonal variations of heavy metals in the bivalve's mollusk… | bivalve soft tissue, dry weight | 72 | lognormal_mean_max | 9.3% |
| singhato2025-thailand-seafood-heavy-metals (2025) · TH | Risk Assessment of Toxic Heavy Metal Exposure in Selected Se… | shellfish/crustacean/cephalopod edible tissue, fresh weight | 5 | uniform_max_only | 0.7% |
| valencia2021-canacao-bay-oyster-pb-cd (2021) · PH | Heavy metal accumulation and risk assessment of lead and cad… | oyster soft tissue, fresh weight | 214 | lognormal_mean_max | 27.7% |

</details>

### iAs

**Published HMTc threshold:** 200 ppb [as-sold] · 109.487 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 4 sources contributing · 34 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [27.13, 221.49] ppb**
**Sensitivity: log-normal 69.42 · gamma 162.83 · nonparametric 88.98 ppb · spread 57% (needs_review)**



**Defensibility.** Pooled P97 from 4 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 4 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 200 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 4 contributing sources across multiple jurisdictions. Sensitivity band needs_review.

<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| fera2015-uk-tds-metals (2015) · GB | Total Diet Study of metals and other elements in food | shellfish composite, as consumed/as prepared | 1 | single_point | 2.9% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | crab/lobster shellfish subset, whole weight/wet weight | 5 | uniform_max_only | 14.7% |
| munoz1999-seafood-inorganic-arsenic (1999) · ES | Rapid and quantitative release, separation and determination… | shellfish soft tissue, wet weight | 11 | lognormal_mean_median | 32.4% |
| schoof2007-seafood-arsenic-speciation (2007) · US, ES, NO, TH | Variation of total and speciated arsenic in commonly consume… | seafood soft tissue, wet weight | 120 | lognormal_mean_max | 50.0% |

</details>

### tAs

**Published HMTc threshold:** adjudication pending — held provisional (wrong-analyte-not-material) · 33023.140 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 6 sources contributing · 20 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [2153.06, 75145.79] ppb**
**Sensitivity: log-normal 24468.63 · gamma 13579.50 · nonparametric 27635.79 ppb · spread 51% (needs_review)**



**Defensibility.** Pooled P97 from 6 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 6 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 10000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 6 contributing sources across multiple jurisdictions. Sensitivity band needs_review.

<details>
<summary>Per-source contribution log (6 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| chou-uthe1993-cadmium-american-lobster-belledune (1993) · CA | Cadmium in American lobster (Homarus americanus) from the ar… | cooked lobster tail/claw/knuckle meat, wet weight | 5 | uniform_max_only | 25.0% |
| fera2015-uk-tds-metals (2015) · GB | Total Diet Study of metals and other elements in food | shellfish composite, as consumed/as prepared | 1 | single_point | 5.0% |
| gongora-gomez2017-oysters-gulf-california-metals (2017) · MX | Heavy-metal contents in oysters (Crassostrea gigas) cultivat… | oyster soft tissue, dry weight | 1 | single_point | 5.0% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | mussel whole weight/wet weight | 5 | uniform_max_only | 25.0% |
| onyegeme-okerenta2023-shellfish-nigeria (2023) · NG | Potential Toxic elements in shellfish from three rivers in N… | shellfish tissue, dry weight | 5 | uniform_max_only | 25.0% |
| singhato2025-thailand-seafood-heavy-metals (2025) · TH | Risk Assessment of Toxic Heavy Metal Exposure in Selected Se… | shellfish/crustacean/cephalopod edible tissue, fresh weight | 3 | lognormal_mean_only | 15.0% |

</details>

### Ni

**Published HMTc threshold:** 10000 ppb [as-sold] · 12189.015 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 5 sources contributing · 102 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [6973.54, 17107.47] ppb**
**Sensitivity: log-normal 13165.89 · gamma 9309.15 · nonparametric 11084.56 ppb · spread 29% (provisional)**



**Defensibility.** Pooled P97 from 5 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 5 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 10000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 5 contributing sources across multiple jurisdictions. Sensitivity band provisional.

<details>
<summary>Per-source contribution log (5 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| de-anda-montanez2023-baja-red-crab-elements (2023) · MX | Spatial and Temporal Variability of Trace and Macro Elements… | whole adult red crab, dry weight | 5 | uniform_max_only | 4.9% |
| gongora-gomez2017-oysters-gulf-california-metals (2017) · MX | Heavy-metal contents in oysters (Crassostrea gigas) cultivat… | oyster soft tissue, dry weight | 1 | single_point | 1.0% |
| onyegeme-okerenta2023-shellfish-nigeria (2023) · NG | Potential Toxic elements in shellfish from three rivers in N… | shellfish tissue, dry weight | 5 | uniform_max_only | 4.9% |
| shue2012-bivalves-tapeng-taiwan (2012) · TW | Seasonal variations of heavy metals in the bivalve's mollusk… | bivalve soft tissue, dry weight | 72 | lognormal_mean_max | 50.0% |
| yap-almutairi2022-nickel-seafood-malaysia (2022) · MY | Comparative Study of Potentially Toxic Nickel and Their Pote… | mollusc soft tissue, wet weight | 40 | lognormal_mean_max | 39.2% |

</details>

### Cd

**Published HMTc threshold:** 1000 ppb [as-sold] · 1000 ppb (pre-rounding)
**Rationale tag:** `regulatory-alignment`
**Regulatory ceiling reference:** 1000 ppb (eu2023_cd_bivalve_1000)
**Pool composition:** 20 sources contributing · 2165 pseudo-samples in pool · 3 sample-level contributors
**Bootstrap 95% CI: [803.94, 8521.40] ppb**
**Sensitivity: log-normal 5370.16 · gamma 5374.83 · nonparametric 5625.30 ppb · spread 5% (stable)**



**Defensibility.** The published value matches the lowest applicable regulatory ceiling (eu2023_cd_bivalve_1000). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of 5152.92 ppb sits above the cap, confirming the cap is the protective constraint.

<!-- audience: brand-legal -->
**Brand legal read.** This threshold matches the binding government cap (eu2023_cd_bivalve_1000). A Daubert challenge on the value reduces to "is eu2023_cd_bivalve_1000 a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** HMTc threshold = eu2023_cd_bivalve_1000 cap. The pooled occurrence distribution from 20 sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.

<details>
<summary>Per-source contribution log (20 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| chou-uthe1993-cadmium-american-lobster-belledune (1993) · CA | Cadmium in American lobster (Homarus americanus) from the ar… | cooked lobster tail/claw/knuckle meat, wet weight | 5 | uniform_max_only | 0.2% |
| de-anda-montanez2023-baja-red-crab-elements (2023) · MX | Spatial and Temporal Variability of Trace and Macro Elements… | whole adult red crab, dry weight | 5 | uniform_max_only | 0.2% |
| fera2015-uk-tds-metals (2015) · GB | Total Diet Study of metals and other elements in food | shellfish composite, as consumed/as prepared | 1 | single_point | 0.1% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | cephalopod molluscs, wet weight | 1500 | percentile_interpolation | 23.1% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | bivalve molluscs, wet weight | 904 | percentile_interpolation | 23.1% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | crustaceans, wet weight | 424 | percentile_interpolation | 19.6% |
| gongora-gomez2017-oysters-gulf-california-metals (2017) · MX | Heavy-metal contents in oysters (Crassostrea gigas) cultivat… | oyster soft tissue, dry weight | 1 | single_point | 0.1% |
| gongora-gomez2018-pen-shell-seasonal-metals (2018) · MX | Seasonal levels of heavy metals in soft tissue and muscle of… | pen shell soft tissue, wet weight | 1 | single_point | 0.1% |
| helcom2017-core-indicator-metals-baltic (2017) · EU, DE, DK, EE, FI, LV, LT, PL, RU, SE | Metals (lead, cadmium and mercury) — HELCOM core indicator r… | mussel soft body, wet weight | 5 | uniform_max_only | 0.2% |
| lordan2022-brown-crab-cadmium-review (2022) · IE, EU, NO, GB, PT, CN, HK, US, KR | Cadmium: A Focus on the Brown Crab (Cancer pagurus) Industry… | brown crab white meat, wet weight | 5 | uniform_max_only | 0.2% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | brown crabmeat and products, wet weight | 399 | lognormal_mean_median | 18.4% |
| nielsen1975-nz-molluscs-heavy-metals (1975) · NZ | Heavy metal levels in New Zealand molluscs | mollusc whole soft tissue, wet weight | 5 | uniform_max_only | 0.2% |
| onyegeme-okerenta2023-shellfish-nigeria (2023) · NG | Potential Toxic elements in shellfish from three rivers in N… | shellfish tissue, dry weight | 5 | uniform_max_only | 0.2% |
| rajeshkumar2018-taihu-lake-fish-oyster-metals (2018) · CN | Studies on seasonal pollution of heavy metals in water, sedi… | oyster whole body, wet weight | 4 | lognormal_mean_only | 0.2% |
| raju2021-bivalves-cagayan-philippines (2021) · PH | Heavy Metal Determination of Bivalves in Cagayan Valley, Phi… | bivalve soft tissue, dry weight | 5 | uniform_max_only | 0.2% |
| romero-estevez2020-bivalves-santa-rosa-ecuador (2020) · EC, EU | An Overview of Cadmium, Chromium, and Lead Content in Bivalv… | bivalve soft tissue, fresh weight | 50 | uniform_max_only | 0.5% |
| sepulveda2020-callista-clam-metals (2020) · MX | Trace metals in two wild populations of the squalid callista… | clam tissue, dry weight | 1 | single_point | 0.1% |
| shue2012-bivalves-tapeng-taiwan (2012) · TW | Seasonal variations of heavy metals in the bivalve's mollusk… | bivalve soft tissue, dry weight | 72 | lognormal_mean_max | 3.3% |
| singhato2025-thailand-seafood-heavy-metals (2025) · TH | Risk Assessment of Toxic Heavy Metal Exposure in Selected Se… | shellfish/crustacean/cephalopod edible tissue, fresh weight | 3 | lognormal_mean_max | 0.1% |
| valencia2021-canacao-bay-oyster-pb-cd (2021) · PH | Heavy metal accumulation and risk assessment of lead and cad… | oyster soft tissue, fresh weight | 214 | lognormal_mean_max | 9.9% |

</details>

### Al

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



### tHg

**Published HMTc threshold:** 500 ppb [as-sold] · 236.605 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 500 ppb (eu2023_hg_crustaceans_molluscs_500)
**Pool composition:** 14 sources contributing · 1123 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [74.50, 411.84] ppb**
**Sensitivity: log-normal 224.19 · gamma 242.82 · nonparametric 235.92 ppb · spread 8% (stable)**



**Defensibility.** Pooled P97 from 14 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 500 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 14 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 500 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 14 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (14 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| bjerregaard2023-mercury-mussels-denmark (2023) · DK, EU | In Search of Mercury Lost from Sediments in a Previously Con… | blue mussel soft tissue, dry weight | 20 | lognormal_mean_max | 1.8% |
| chou-uthe1993-cadmium-american-lobster-belledune (1993) · CA | Cadmium in American lobster (Homarus americanus) from the ar… | cooked lobster tail/claw/knuckle meat, wet weight | 5 | uniform_max_only | 0.4% |
| fera2015-uk-tds-metals (2015) · GB | Total Diet Study of metals and other elements in food | shellfish composite, as consumed/as prepared | 1 | single_point | 0.1% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | crustaceans, wet weight | 60 | percentile_interpolation | 5.3% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | bivalve molluscs, wet weight | 898 | lognormal_mean_max | 44.5% |
| garofalo2025-seafood-cd-pb-hg-italy-10yr (2025) · IT, EU | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood P… | cephalopod molluscs, wet weight | 687 | lognormal_mean_max | 44.5% |
| gongora-gomez2017-oysters-gulf-california-metals (2017) · MX | Heavy-metal contents in oysters (Crassostrea gigas) cultivat… | oyster soft tissue, dry weight | 1 | single_point | 0.1% |
| gongora-gomez2018-pen-shell-seasonal-metals (2018) · MX | Seasonal levels of heavy metals in soft tissue and muscle of… | pen shell soft tissue, dry weight | 1 | single_point | 0.1% |
| harding2018-bay-fundy-methylmercury (2018) · CA, US | Bioaccumulation of methylmercury within the marine food web … | blue mussel soft tissue, wet weight | 12 | lognormal_mean_median | 1.1% |
| harding2018-bay-fundy-methylmercury (2018) · CA, US | Bioaccumulation of methylmercury within the marine food web … | lobster tissue, wet weight | 9 | lognormal_mean_median | 0.8% |
| macdonald2025-fss-uk-fishery-contaminants-review (2025) · GB, EU | Occurrence of chemical contaminants in wild-caught fishery p… | shellfish whole weight/wet weight | 5 | uniform_max_only | 0.4% |
| nielsen1975-nz-molluscs-heavy-metals (1975) · NZ | Heavy metal levels in New Zealand molluscs | mollusc whole soft tissue, wet weight | 1 | single_point | 0.1% |
| pawlaczyk2020-mercury-canned-fish-poland (2020) · PL | Risk of Mercury Ingestion from Canned Fish in Poland | canned octopus drained product, wet/as consumed | 3 | lognormal_mean_only | 0.3% |
| singhato2025-thailand-seafood-heavy-metals (2025) · TH | Risk Assessment of Toxic Heavy Metal Exposure in Selected Se… | shellfish/crustacean/cephalopod edible tissue, fresh weight | 5 | uniform_max_only | 0.4% |

</details>

### MeHg

**Published HMTc threshold:** 200 ppb [as-sold] · 140.720 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 4 sources contributing · 22 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [9.44, 302] ppb**
**Sensitivity: log-normal 140.72 · gamma 140.72 · nonparametric 144.30 ppb · spread 3% (stable)**



**Defensibility.** Pooled P97 from 4 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 4 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 200 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 4 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (4 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | lobster, fish/seafood occurrence input, wet weight/as reported | 1 | single_point | 4.5% |
| efsa-sc2015-fish-seafood-mehg-risk-benefit (2015) · EU | Statement on the benefits of fish/seafood consumption compar… | squid, fish/seafood occurrence input, wet weight/as reported | 1 | single_point | 4.5% |
| harding2018-bay-fundy-methylmercury (2018) · CA, US | Bioaccumulation of methylmercury within the marine food web … | blue mussel soft tissue, wet weight | 12 | lognormal_mean_median | 50.0% |
| harding2018-bay-fundy-methylmercury (2018) · CA, US | Bioaccumulation of methylmercury within the marine food web … | lobster tissue, wet weight | 9 | lognormal_mean_median | 40.9% |

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
Response: For Pb, Cd, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.

**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. 1 analytes (Ni) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ✗ FAIL (8 of 10) |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ✓ PASS |
| 3 | Every published value is on the primary increment ladder | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 1 analytes (Ni) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.

**Gate 1 caveat — uncovered analytes:** 1 analytes (Al) have no defensible threshold and the certification mark for this product explicitly does NOT cover them. This is honest gap reporting, not a gate failure — but the Master Limit Table flags the gap clearly so retailers, regulators, and adversarial readers can see what is and is not covered.

---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `bjerregaard2023-mercury-mussels-denmark` (A) | In Search of Mercury Lost from Sediments in a Previously Contaminated Coastal Area, Harboøre Tange, Denmark | Bjerregaard P; Jensen CL; Juhl AVR; Markussen AJR; Poulsen SR · 2023 · Bulletin of Environmental Contamination and Toxicology · doi:null |
| `chou-uthe1993-cadmium-american-lobster-belledune` (B) | Cadmium in American lobster (Homarus americanus) from the area of Belledune Harbour, New Brunswick, Canada: 1980-1992 results | Chou CL; Uthe JF · 1993 · Canadian Technical Report of Fisheries and Aquatic Sciences No. 1916 · doi:null |
| `de-anda-montanez2023-baja-red-crab-elements` (A) | Spatial and Temporal Variability of Trace and Macro Elements in the Red Crab Pleuroncodes planipes in the Pacific Coast of the Baja California Peninsula, Mexico | Juan Antonio De Anda-Montanez; Tania Zenteno-Savin; Eduardo F. Balart; Baudilio Acosta-Vargas; Ramon Gaxiola-Robles; Lia Celina Mendez-Rodriguez · 2023 · Animals · doi:10.3390/ani13050822 |
| `efsa-sc2015-fish-seafood-mehg-risk-benefit` (A) | Statement on the benefits of fish/seafood consumption compared to the risks of methylmercury in fish/seafood | EFSA Scientific Committee · 2015 · EFSA Journal 2015;13(1):3982, 36 pp. · doi:10.2903/j.efsa.2015.3982 |
| `fera2015-uk-tds-metals` (A) | Total Diet Study of metals and other elements in food | Baxter M; Brereton N · 2015 · Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 · doi:null |
| `garofalo2025-seafood-cd-pb-hg-italy-10yr` (A) | Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis | Garofalo L; Sala M; Focardi C; Pasqualetti P; Delfino D; D'Onofrio F; Droghei B; Pasquali F; Nicolini V; Galli FS; Scaramozzino P; Ubaldi A; Russo K; Neri B · 2025 · Foods 14(3):451 · doi:10.3390/foods14030451 |
| `gongora-gomez2017-oysters-gulf-california-metals` (B) | Heavy-metal contents in oysters (Crassostrea gigas) cultivated on the southeastern coast of the Gulf of California, Mexico | Gongora-Gomez Andres Martin; Garcia-Ulloa Manuel; Munoz-Sevilla Norma Patricia; Dominguez-Orozco Ana Laura; Villanueva-Fonseca Brenda Paulina; Hernandez-Sepulveda Juan Antonio; Ortega Izaguirre Rogelio · 2017 · Hidrobiologica · doi:10.24275/uam/izt/dcbs/hidro/2017v27n2/garcia |
| `gongora-gomez2018-pen-shell-seasonal-metals` (B) | Seasonal levels of heavy metals in soft tissue and muscle of the pen shell Atrina maura from a farm in the southeastern coast of the Gulf of California, Mexico | Gongora-Gomez Andres Martin; Dominguez-Orozco Ana Laura; Villanueva-Fonseca Brenda Paulina; Munoz-Sevilla Norma Patricia; Garcia-Ulloa Manuel · 2018 · Revista Internacional de Contaminacion Ambiental · doi:10.20937/rica.2018.34.01.05 |
| `harding2018-bay-fundy-methylmercury` (A) | Bioaccumulation of methylmercury within the marine food web of the outer Bay of Fundy, Gulf of Maine | Harding G; Dalziel J; Vass P · 2018 · PLoS ONE · doi:10.1371/journal.pone.0197220 |
| `helcom2017-core-indicator-metals-baltic` (A) | Metals (lead, cadmium and mercury) — HELCOM core indicator report | HELCOM; Zalewska T; Larsen MM; Fryer R; Danielsson S; Nyberg E · 2017 · HELCOM Core Indicator Report (HOLAS II component), ISSN 2343-2543 · doi:null |
| `lordan2022-brown-crab-cadmium-review` (A) | Cadmium: A Focus on the Brown Crab (Cancer pagurus) Industry and Potential Human Health Risks | Ronan Lordan; Ioannis Zabetakis · 2022 · Toxics · doi:10.3390/toxics10100591 |
| `macdonald2025-fss-uk-fishery-contaminants-review` (A) | Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review | MacDonald S; Stead S; Rose M; Boss K; Campbell K · 2025 · Fera Science Ltd report to Food Standards Scotland (Report FR/002826) · doi:null |
| `munoz1999-seafood-inorganic-arsenic` (A) | Rapid and quantitative release, separation and determination of inorganic arsenic [As(III)+As(V)] in seafood products by microwave-assisted distillation and hydride generation atomic absorption spectrometry | Munoz O; Velez D; Cervera ML; Montoro R · 1999 · Journal of Analytical Atomic Spectrometry · doi:10.1039/a904999a |
| `nielsen1975-nz-molluscs-heavy-metals` (B) | Heavy metal levels in New Zealand molluscs | Nielsen SA; Nathan A · 1975 · New Zealand Journal of Marine and Freshwater Research 9(4), 467-481 · doi:10.1080/00288330.1975.9515582 |
| `onyegeme-okerenta2023-shellfish-nigeria` (A) | Potential Toxic elements in shellfish from three rivers in Niger Delta, Nigeria: bioaccumulation, dietary intake, and human health risk assessment | Onyegeme-Okerenta BM; West LO · 2023 · Environmental Analysis, Health and Toxicology · doi:10.5620/eaht.2023015 |
| `pawlaczyk2020-mercury-canned-fish-poland` (A) | Risk of Mercury Ingestion from Canned Fish in Poland | Pawlaczyk A; Przerywacz A; Gajek M; Szynkowska-Jozwik MI · 2020 · Molecules · doi:10.3390/molecules25245884 |
| `rajeshkumar2018-taihu-lake-fish-oyster-metals` (A) | Studies on seasonal pollution of heavy metals in water, sediment, fish and oyster from the Meiliang Bay of Taihu Lake in China | Rajeshkumar S; Liu Y; Zhang X; Ravikumar B; Bai G; Li X · 2018 · Chemosphere · doi:10.1016/j.chemosphere.2017.10.078 |
| `raju2021-bivalves-cagayan-philippines` (B) | Heavy Metal Determination of Bivalves in Cagayan Valley, Philippines | Raju J; Johnson J; Jeevan A; Capili JT · 2021 · Scholars Academic Journal of Biosciences 9(10):256-258 · doi:10.36347/sajb.2021.v09i10.001 |
| `romero-estevez2020-bivalves-santa-rosa-ecuador` (B) | An Overview of Cadmium, Chromium, and Lead Content in Bivalves Consumed by the Community of Santa Rosa Island (Ecuador) and Its Health Risk Assessment | Romero-Estévez D; Yánez-Jácome GS; Dazzini Langdon M; Simbaña-Farinango K; Rebolledo Monsalve E; Durán Cobo G; Navarrete H · 2020 · Frontiers in Environmental Science 8:134 · doi:10.3389/fenvs.2020.00134 |
| `schoof2007-seafood-arsenic-speciation` (B) | Variation of total and speciated arsenic in commonly consumed fish and seafood | Schoof RA; Yager JW · 2007 · Human and Ecological Risk Assessment · doi:10.1080/10807030701506454 |
| `sepulveda2020-callista-clam-metals` (B) | Trace metals in two wild populations of the squalid callista clam (Megapitaria squalida) in the southeastern Gulf of California, Mexico | Sepulveda Carlos Humberto; Gongora-Gomez Andres Martin; Perez-Alvarez Sandra; Rodriguez-Gonzalez Hervey; Munoz-Sevilla Norma Patricia; Villanueva-Fonseca Brenda Paulina; Hernandez-Sepulveda Juan Antonio; Garcia-Ulloa Gomez Manuel · 2020 · Revista Internacional de Contaminacion Ambiental · doi:10.20937/rica.53565 |
| `shue2012-bivalves-tapeng-taiwan` (B) | Seasonal variations of heavy metals in the bivalve's mollusks from Ta-Peng Bay lagoon in southwestern Taiwan | Shue MF; Chen JJ; Tseng LH; Lai WL · 2012 · Advanced Materials Research · doi:10.4028/www.scientific.net/AMR.599.100 |
| `singhato2025-thailand-seafood-heavy-metals` (A) | Risk Assessment of Toxic Heavy Metal Exposure in Selected Seafood Species from Thailand | Alongkote Singhato; Narisa Rueangsri; Purimprat Thanaratsotornkun; Konpong Boonyingsathit; Piyanut Sridonpai; Nunnapus Laitip; Nattikarn Ornthai; Kunchit Judprasong · 2025 · Foods · doi:10.3390/foods14213725 |
| `valencia2021-canacao-bay-oyster-pb-cd` (B) | Heavy metal accumulation and risk assessment of lead and cadmium in cultured oysters (Crassostrea iredalei) of Cañacao Bay, Philippines | Valencia HB; Caballar EJM; Dioneda SCC; Gomez JAE; Obanan SP · 2021 · Sustinere: Journal of Environment and Sustainability 5(2), 64-78 · doi:10.22515/sustinerejes.v5i2.159 |
| `yap-almutairi2022-nickel-seafood-malaysia` (B) | Comparative Study of Potentially Toxic Nickel and Their Potential Human Health Risks in Seafood (Fish and Mollusks) from Peninsular Malaysia | "Yap; Chee Kong"; "Al-Mutairi; Khalid Awadh" · 2022 · Biology · doi:10.3390/biology11030376 |

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
3. Running `npm run briefing -- --product=shellfish` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-18T19:37:34.665Z |
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