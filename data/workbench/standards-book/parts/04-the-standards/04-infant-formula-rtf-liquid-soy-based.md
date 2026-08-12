# 3.4 Infant Formula, Ready-to-Feed Liquid (Soy-Based)

> **Superseded draft (2026-08-12).** This chapter records the retired occurrence-selected P45/P97 method and must not be used for current certification. Current initial limits are government-limit-only; later tightening uses eligible HMTc certified-lot data under the Standards Ratchet. The certification repository’s Program Manual is controlling.

*This chapter is one of fifteen per-product chapters in Part 3 of the HMTc Program Manual. Each chapter is self-contained enough to function as a licensing exhibit detached from the bound volume. The methodology that produces the limit values in this chapter is documented in Part 5.1 (How HMTc Standards Are Set). The certification status framework that operationalizes the limits is documented in Part 2.3. The Standards Ratchet that evolves these limits over time is documented in Part 2.10. Program-level adversarial attacks not specific to this product are addressed in Part 5.2 (Program-Level Adversarial Read); the per-product adversarial read in this chapter addresses attacks specific to this product category.*

**Product class:** Infant Formula, RTF Liquid (Soy-Based)
**Subcategory role:** higher-contamination-sibling
**Native basis for published thresholds:** as_consumed
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** 2026-05-18
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

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for infant formula rtf liquid soy based.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
| Ni | *data gap* |, | no-data | 0 | no_data |, |
| Cd | **5 ppb** [as-consumed]<br>≈ 50 ppb [powder] | 3.616 ppb | literature-baseline | 3 | stable | 10 ppb (eu2023_cd_formula_soy_liquid_10) |
| Al | *data gap* | 768.747 ppb | no-data | 1 | stable |, |

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

**Tooling and reproducibility.** The pooling engine is `tools/evidence/build-hmtc-aggregate-distributions.mjs` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is `tools/standards/build-standards-briefing.mjs` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running `npm run evidence:pooling && npm run briefing -- --product=infant-formula-rtf-liquid-soy-based`.

---

## Per-Analyte Sections

### Ni

**Published HMTc threshold:** *data gap*
**Rationale tag:** `no-data`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 0 sources contributing · 0 pseudo-samples in pool · 0 sample-level contributors
**no_data**



**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 0 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below no published value (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 0 contributing sources across multiple jurisdictions. Sensitivity band no_data.



### Cd

**Published HMTc threshold:** 5 ppb [as-consumed] · 3.616 ppb (pre-rounding)
**Cross-basis: ≈ 50 ppb [powder] (×7 (1:7 reconstitution))**
**Rationale tag:** `literature-baseline`
**Regulatory ceiling reference:** 10 ppb (eu2023_cd_formula_soy_liquid_10)
**Pool composition:** 3 sources contributing · 33 pseudo-samples in pool · 1 sample-level contributors
**Bootstrap 95% CI: [1.36, 8.17] ppb**
**Sensitivity: log-normal 5.18 · gamma 4.68 · nonparametric 5.48 ppb · spread 14% (stable)**



**Defensibility.** Pooled P97 from 3 contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination below the pooled value (cap = 10 ppb). The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 3 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below 5 ppb (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 3 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (3 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 14 | lognormal_mean_median | 42.4% |
| dabeka1987-canada-infant-formula-lead-cadmium (1987) · Canada | Lead, cadmium, and fluoride levels in market milk and infant… | as_consumed | 16 | lognormal_mean_max | 48.5% |
| fda2026-infant-formula-toxic-elements-special-survey (2026) · US | Analytical Results for Toxic Elements in Infant Formula, FY2… | prepared_for_feeding | 3 | percentile_interpolation | 9.1% |

</details>

### Al

**Published HMTc threshold:** *data gap*
**Rationale tag:** `no-data`
**Regulatory ceiling reference:** no applicable cap loaded
**Pool composition:** 1 sources contributing · 1 pseudo-samples in pool · 0 sample-level contributors
**Bootstrap 95% CI: [767.51, 770.69] ppb**
**Sensitivity: log-normal 768.89 · gamma 769.16 · nonparametric 768.94 ppb · spread 0% (stable)**



**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.

<!-- audience: brand-legal -->
**Brand legal read.** The value is pooled P97 from 1 peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.

<!-- audience: retailer-compliance -->
**Retailer compliance read.** A certified product tests at or below no published value (native basis: [as-consumed]) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.

<!-- audience: regulator -->
**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. 1 contributing sources across multiple jurisdictions. Sensitivity band stable.

<details>
<summary>Per-source contribution log (1 admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
| dabeka2011-canada-infant-formula-lead-cadmium-aluminum (2011) · CA | Lead, cadmium and aluminum in Canadian infant formulae, oral… | as_consumed | 14 | lognormal_mean_median | 100.0% |

</details>

---

## Adversarial Read

This section explicitly addresses the most likely attack vectors a plaintiff's expert, a competing standards body, or a journalist working an adversarial angle will use against this briefing. Each attack is named and answered.

**Attack 1: "The pool is too small; the methodology cherry-picks."**
Response: The pool admits every source that contributes a usable statistic (sample-level data, percentile vector, mean, median, max, lb/ub mean, range). No source is excluded for being "summary-only." The contribution log per analyte lists every admission decision and every basis conversion. Per-source pool share is capped at 50% to prevent dominance by any single survey. The methodology is reproducible from the structured CSVs in `data/evidence/` and the engine in `tools/evidence/build-hmtc-aggregate-distributions.mjs`.

**Attack 2: "Why P97 instead of P90? You're loosening the standard."**
Response: P97 per analyte is calibrated to deliver approximately 90% row-pass for the clean subcategory across the 10-analyte joint. Setting each analyte's limit at P90 of its own marginal would deliver a joint pass rate of 35% under independence and 50-70% under realistic correlation, well short of the Governing Principles' 90/30 row-pass target. P97 is the per-analyte percentile that delivers the row-level outcome the program promises. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening.

**Attack 3: "Why is your dirty subcategory P45 instead of P10?"**
Response: P45 of the dirty subcategory's distribution, applied per-analyte, delivers approximately 30% joint row-pass for dirty-subcategory brands. This is the design intent stated in the Governing Principles v2.0: the dirty subcategory standard must give dirty-platform brands a realistic path to certification so the program drives reformulation rather than excluding the platform. A P10 dirty standard would deliver <1% joint row-pass and the program would have no commercial uptake on the dirty side.

**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: The 1:7 powder ↔ prepared-for-feeding conversion is the conservative reconstitution ratio (1 g powder + 6 g water = 7 g prepared) standard across infant-formula regulatory frameworks (FDA Closer-to-Zero, EU 2023/915). Within-class conversions (as_sold ↔ dry_as_sold) pass through with factor 1. Every basis conversion is logged per source in the contribution log; unknown-conversion cases are flagged and not silently coerced.

**Attack 8: "Show me one source you excluded."**
Response: No source contributing a usable statistic is excluded. Sources marked "no_usable_statistic" in the contribution log are LOD-censored entries with neither mean nor lb/ub recorded. Sources without a structured CSV row are documented in the routing audit and the gap report; those are extraction gaps, not exclusions, and they are tracked in Phase 1 backlog with target completion timelines.

---

## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at `wiki/sources/<source-id>.md` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
| `dabeka1987-canada-infant-formula-lead-cadmium` (A) | Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada | Dabeka; McKenzie · 1987 · Journal of Association of Official Analytical Chemists 70(4):754-757 · doi:10.1093/jaoac/70.4.754 |
| `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` (A) | Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions | Robert Dabeka; Andre Fouquet; Stephane Belisle; Stephane Turcotte · 2011 · Food Additives & Contaminants: Part A · doi:10.1080/19393210.2011.571795 |
| `fda2026-infant-formula-toxic-elements-special-survey` (A) | Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey | U.S. Food and Drug Administration · 2026 · FDA analytical results table |

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

1. Checking out commit `2e44dd7751a2620f3d6da74745d090840c3a71c6` in the heavymetalindex.com repository.
2. Running `npm run evidence:pooling` to regenerate `data/evidence/hmtc_aggregate_distributions.csv`.
3. Running `npm run briefing -- --product=infant-formula-rtf-liquid-soy-based` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | 2026-05-18T05:18:43.546Z |
| Generator | `tools/standards/build-standards-briefing.mjs` |
| Pooling engine | `tools/evidence/build-hmtc-aggregate-distributions.mjs` |
| Methodology version | HMTc-10 / P97-P45 per / Governing Principles v2.0 |
| Git commit | `2e44dd7751a2620f3d6da74745d090840c3a71c6` |
| Author | Karen Pendergrass, Standards Architect, Paleo Foundation |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

Karen Pendergrass also serves as CEO of the Paleo Foundation, which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title.

### Methodology implementation note

Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author.

*End of briefing.*
