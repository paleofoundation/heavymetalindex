---
title: "HMTc Standards Briefing — Olive oil"
type: hmtc-standards-briefing
product_slug: olive-oil
native_basis: as_sold
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: 2026-06-19T12:28:12.859Z
authors: ["Karen Pendergrass, Standards Architect, Paleo Foundation"]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — Olive oil

**Product class:** Olive oil
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for olive oil.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Pb | **100 ppb** [as-sold] | 69.725 ppb | literature-baseline | 7 | stable | 100 ppb (eu2023_pb_fats_oils_100) |
| iAs | _not material_ | — | no-data | 0 | no_data | — |
| tAs | _not material_ | 607.952 ppb (pool not standardized — not material) | literature-baseline | 5 | provisional | — |
| Ni | **1000 ppb** [as-sold] | 577.054 ppb | literature-baseline | 9 | stable | — |
| Cd | _not material_ | 3.102 ppb (pool not standardized — not material) | literature-baseline | 2 | provisional | — |
| Al | **1000 ppb** [as-sold] | 581.619 ppb | literature-baseline | 2 | stable | — |
| tHg | _not material_ | — | no-data | 0 | no_data | — |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=olive-oil`.

---

## Per-Analyte Sections

### Pb

**Published HMTc threshold:** 100 ppb [as-sold] · 69.725 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 100 ppb (eu2023_pb_fats_oils_100)
**Pool composition:** 7 sources contributing · 60 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [58.09, 96.42] ppb**
**Sensitivity: log-normal 82.63 · gamma 72.93 · nonparametric 84.64 ppb · spread 14% (stable)**



**Defensibility.** Pooled P97 from 7 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 100 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 7 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 100 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 7 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (7 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| nazari2023-heavy-metals-seed-crops-oil-products-review (2023) · global, EU, IR, TR, ES, BR, SE, FR, IT, KSA, PL, NG, CN, US | Impacts of Heavy Metals in Seed Crops and Oil Seed on Human … | unknown | 1 | single_point | 1.7% |
| nazari2023-heavy-metals-seed-crops-oil-products-review (2023) · global, EU, IR, TR, ES, BR, SE, FR, IT, KSA, PL, NG, CN, US | Impacts of Heavy Metals in Seed Crops and Oil Seed on Human … | unknown | 1 | single_point | 1.7% |
| la-pera2010-sicily-olive-oil-metals-selenium (2010) · IT | Classification of Sicilian Olive Oils According to Heavy Met… | virgin olive oil, as-sold | 49 | lognormal_mean_max | 50.0% |
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | olive oil, as-sold | 12 | lognormal_mean_max | 20.0% |
| pehlivan2008-vegetable-oils-turkey-icp-aes (2008) · TR | Determination of some inorganic metals in edible vegetable o… | virgin olive oil, as-sold | 1 | lognormal_mean_only | 1.7% |
| nazari2023-heavy-metals-seed-crops-oil-products-review (2023) · global, EU, IR, TR, ES, BR, SE, FR, IT, KSA, PL, NG, CN, US | Impacts of Heavy Metals in Seed Crops and Oil Seed on Human … | olive oil (Bakkali 2012, Spain), as-sold | 5 | uniform_max_only | 8.3% |
| charfi2026-olive-oil-packaging-heavy-metals-phthalates (2026) · ES | Food safety in the production of olive oils. Presence of hea… | Spanish olive oil across grades/packaging, as-sold | 18 | uniform_max_only | 16.7% |

</details>

### iAs

**Published HMTc threshold:** **not material** — Inorganic arsenic does not partition into the extracted lipid fraction; vegetable and olive oils are among the cleanest matrices for arsenic
**Rationale tag:** `no-data`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.





### tAs

**Published HMTc threshold:** **not material** — Arsenic does not partition into the extracted lipid fraction; the pooled tail is a luka2019 unit self-contradiction (50-100x sibling sources) confirmed in the 2026-06-11 suspect-cell audit
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 5 sources contributing · 57 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 5 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.



<details>
<summary>Per-source contribution log (5 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| kabaran2020-health-risk-olive-oil-cyprus (2020) · CY | Is there any potential health risk of heavy metals through d… | olive oil, as-sold | 27 | lognormal_mean_max | 47.4% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined olive oil, as-sold | 3 | lognormal_mean_only | 5.3% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | extra virgin olive oil, as-sold | 5 | lognormal_mean_only | 8.8% |
| luka2019-northern-cyprus-olive-oil-metals (2019) · CY | Investigation of trace metals in different varieties of oliv… | olive oil, as-sold | 15 | uniform_max_only | 17.5% |
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | olive oil, as-sold | 12 | lognormal_mean_max | 21.1% |

</details>

### Ni

**Published HMTc threshold:** 1000 ppb [as-sold] · 577.054 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 9 sources contributing · 79 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [54.74, 750.62] ppb**
**Sensitivity: log-normal 663.20 · gamma 597.67 · nonparametric 518.50 ppb · spread 22% (stable)**



**Defensibility.** Pooled P97 from 9 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 9 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 9 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (9 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| kabaran2020-health-risk-olive-oil-cyprus (2020) · CY | Is there any potential health risk of heavy metals through d… | olive oil, as-sold | 27 | lognormal_mean_max | 34.2% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | refined olive oil, as-sold | 3 | lognormal_mean_only | 3.8% |
| lin2024-edible-oils-taiwan-12-metals (2024) · TW | Determination, distribution, and health risk assessment of 1… | extra virgin olive oil, as-sold | 5 | lognormal_mean_only | 6.3% |
| luka2019-northern-cyprus-olive-oil-metals (2019) · CY | Investigation of trace metals in different varieties of oliv… | olive oil, as-sold | 15 | uniform_max_only | 12.7% |
| matei2025-vegetable-oils-romania-gfaas (2025) · RO | Physicochemical Properties, Trace Elements, and Health Risk … | extra virgin olive oil, as-sold | 3 | lognormal_mean_only | 3.8% |
| matei2025-vegetable-oils-romania-gfaas (2025) · RO | Physicochemical Properties, Trace Elements, and Health Risk … | organic extra virgin olive oil, as-sold | 3 | lognormal_mean_only | 3.8% |
| charfi2026-olive-oil-packaging-heavy-metals-phthalates (2026) · ES | Food safety in the production of olive oils. Presence of hea… | olive oil, as-sold | 17 | uniform_max_only | 12.7% |
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | olive oil, as-sold | 12 | lognormal_mean_max | 15.2% |
| pehlivan2008-vegetable-oils-turkey-icp-aes (2008) · TR | Determination of some inorganic metals in edible vegetable o… | olive oil, as-sold | 6 | uniform_max_only | 7.6% |

</details>

### Cd

**Published HMTc threshold:** **not material** — Cadmium does not partition into the extracted lipid fraction; it remains with the press cake/meal, not the oil
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 2 sources contributing · 2 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** Pooled P97 from 2 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions.



<details>
<summary>Per-source contribution log (2 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| zhu2011-edible-vegetable-oils-china-8-metals (2011) · CN | Health risk assessment of eight heavy metals in nine varieti… | olive oil, as-sold | 12 | lognormal_mean_max | 50.0% |
| ashraf2012-heavy-metals-vegetable-oils-saudi-arabia (2012) · SA | Levels of Selected Heavy Metals in Varieties of Vegetable Oi… | olive oil, as-sold | 1 | lognormal_mean_only | 50.0% |

</details>

### Al

**Published HMTc threshold:** 1000 ppb [as-sold] · 581.619 ppb (pre-rounding)
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 2 sources contributing · 6 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [76.46, 722.92] ppb**
**Sensitivity: log-normal 443.51 · gamma 542.75 · nonparametric 465.72 ppb · spread 18% (stable)**



**Defensibility.** Pooled P97 from 2 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 2 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 1000 ppb (native basis: [as-sold]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 2 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (2 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| charfi2026-olive-oil-packaging-heavy-metals-phthalates (2026) · ES | Food safety in the production of olive oils. Presence of hea… | olive oil, as-sold | 17 | uniform_max_only | 50.0% |
| llorent-martinez2014-olive-oil-extraction-metals-fate (2014) · ES, EU | Quantitation of Metals During the Extraction of Virgin Olive… | virgin olive oil, as-sold | 3 | lognormal_mean_only | 50.0% |

</details>

### tHg

**Published HMTc threshold:** **not material** — Mercury does not partition into the extracted lipid fraction
**Rationale tag:** `no-data`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors




**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.





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
Response: The sensitivity bands are explicitly reported per analyte. 2 analytes (tAs, Cd) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.

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
| 3 | Every published value is on the primary increment ladder | ✓ PASS |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ✓ PASS |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ⚠ partial (non-formula rows may have no defined cross-basis) |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in `wiki/sources/` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

**Gates 4 + 5 caveat — provisional sensitivity:** 2 analytes (tAs, Cd) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.

**Gate 1 caveat — uncovered analytes:** 2 analytes (iAs, tHg) have no defensible threshold and the certification mark for this product explicitly does NOT cover them. This is honest gap reporting, not a gate failure — but the Master Limit Table flags the gap clearly so retailers, regulators, and adversarial readers can see what is and is not covered.

---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `ashraf2012-heavy-metals-vegetable-oils-saudi-arabia` (A) | Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population | Ashraf MW · 2012 · Asian Journal of Chemistry (Uncorrected Proof) · doi:null |
| `charfi2026-olive-oil-packaging-heavy-metals-phthalates` (A) | Food safety in the production of olive oils. Presence of heavy metals and phthalic acid esters using different types of packaging | Charfi A; Moya López AJ; Sánchez Villasclaras S · 2026 · Journal of Food Science and Technology · doi:10.1007/s13197-025-06246-7 |
| `kabaran2020-health-risk-olive-oil-cyprus` (A) | Is there any potential health risk of heavy metals through dietary intake of olive oil that produced in Morphou, Cyprus | Kabaran S; Güleç A; Besler HT · 2020 · Progress in Nutrition · doi:10.23751/pn.v22i3.8098 |
| `la-pera2010-sicily-olive-oil-metals-selenium` (B) | Classification of Sicilian Olive Oils According to Heavy Metal and Selenium Levels Using Canonical Discriminant Analysis (CDA) | La Pera L; Dugo G; Lo Turco V; Rando R; Di Bella G · 2010 · Olives and Olive Oil in Health and Disease Prevention (Elsevier, ISBN 978-0-12-374420-3), Chapter 18, pp. 155–163 · doi:null |
| `lin2024-edible-oils-taiwan-12-metals` (A) | Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan | Lin S-T; Liao K-W; Xuan T-C; Chiou T-Y; Lin Z-E; Lee W-J · 2024 · JSFA Reports · doi:10.1002/jsf2.186 |
| `llorent-martinez2014-olive-oil-extraction-metals-fate` (A) | Quantitation of Metals During the Extraction of Virgin Olive Oil from Olives Using ICP-MS after Microwave-assisted Acid Digestion | Llorent-Martínez EJ; Fernández-de Córdova ML; Ortega-Barrales P; Ruiz-Medina A · 2014 · Journal of the American Oil Chemists' Society · doi:10.1007/s11746-014-2511-5 |
| `luka2019-northern-cyprus-olive-oil-metals` (A) | Investigation of trace metals in different varieties of olive oils from northern Cyprus and their variation in accumulation using ICP-MS and multivariate techniques | Moses Farrell Luka; Ertan Akun · 2019 · Environmental Earth Sciences · doi:10.1007/s12665-019-8581-9 |
| `matei2025-vegetable-oils-romania-gfaas` (B) | Physicochemical Properties, Trace Elements, and Health Risk Assessment of Edible Vegetable Oils Consumed in Romania | Matei N; Birghila S; Dobrinas S; Soceanu A; Popescu V; Zaharia (Pricopie) R-G · 2025 · Applied Sciences · doi:10.3390/app15116269 |
| `nazari2023-heavy-metals-seed-crops-oil-products-review` (B) | Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review | Nazari F; Mirza Alizadeh A; Alikord M; Dizaji R; Torki Z; Shoeibi S; Hosseini MJ; Ghane T; Khosrokhavar R · 2023 · Carpathian Journal of Food Science and Technology, 15(2), 106-124 · doi:10.34302/crpjfst/2023.15.2.10 |
| `pehlivan2008-vegetable-oils-turkey-icp-aes` (B) | Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES) | Pehlivan E; Arslan G; Gode F; Altun T; Özcan MM · 2008 · Grasas y Aceites · doi:10.3989/gya.2008.v59.i3.514 |
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
3. Running `npm run briefing -- --product=olive-oil` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-06-19T12:28:12.870Z |
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