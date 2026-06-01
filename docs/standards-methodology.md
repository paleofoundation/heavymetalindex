# Standards methodology — pool admission and pooling math

This document is the detailed reference for HMT&C standards methodology. The rule-grade firewall and the P97/P45 methodology summary live in CLAUDE.md Part 19; this file is the procedural detail.

## Pool admission rules

Every source loaded for a (row, metal) cell contributes to the pooled distribution unless explicitly dispositioned out with a stated reason. The admission rule depends on what the source reports:

- **Sample-level data:** use raw values directly.
- **Reported P-vector with N:** 4-quantile fit; reconstruct N pseudo-samples by quantile interpolation.
- **Mean + SD + N:** log-normal moment-match; generate N pseudo-samples.
- **Mean + median + max + N:** log-normal fit on mean and CV-from-(max/mean); generate N pseudo-samples.
- **Mean + N only:** assume CV = 1.0 (EFSA/JECFA convention for contaminant occurrence data); generate N pseudo-samples; mark "weak."
- **Lower-bound / upper-bound mean (LOD-censored):** Tobit-style interval; generate N pseudo-samples between bounds.
- **Range / min / max only, no mean:** uniform across range; min(N, 10) pseudo-samples; mark "range_only_weak."
- **Single value, no N:** 1 pseudo-sample at the reported value, weight 1; mark "single_point_weak."

## Pooling math

Pseudo-samples are pooled with source-N weighting, capped at 2× the median per-source N across the cell's pool to prevent any one large survey from dominating. Percentiles are computed on the pooled distribution.

Sensitivity is reported across three parametric assumptions:
- Log-normal (headline)
- Gamma (alternative)
- Nonparametric reconstruction

A spread within ±25% is "stable," 25-50% is "provisional," >50% is "needs review."

This is standard practice in environmental exposure assessment (WHO/JECFA pooled TDS methodology; EFSA Scientific Opinions on Pb and Cd in food). The novelty is only in formalizing it as deterministic code rather than doing it ad hoc per cell.

## Minimum sample size for percentile estimation

The pool admission rules above never gate on count; they admit weak data with a flag rather than excluding it. That is correct for opportunistic literature pooling, where the alternative to a weak source is no source. It is the wrong posture when commissioning data, where the count is a design choice. This section gives the guidance for that case: how many randomly-selected products to request per row when the data is being commissioned (for example a randomized brand-product survey) to set a limit.

The binding constraint is the clean-row statistic, P97. The dirty-row statistic, P45, is near-central and stable from 20 to 30 samples; an independent or clean row's P97 depends on the top 3% of the distribution, so it governs the request. Size for P97 and P45 takes care of itself.

The sample unit is the independent product or lot, not the analytical replicate. Repeated assays of one lot count as one observation for an occurrence distribution. A single physical sample assayed for all ten analytes yields one observation per analyte simultaneously, so the count below is per row, not per (row, analyte). Random selection across the market, rather than convenience sampling, is what protects the percentile from selection bias and is the property that makes the resulting limit defensible.

Reading the count off the order-statistic expectation (expected observations above P97 is `0.03n`):

- **n = 30 to 35** is the floor at which P97 is defined at all. The estimate is effectively the sample maximum; it is parametric-only and carries the "weak" flag. Use only when more is unavailable, and label the row provisional.
- **n ≈ 100** yields roughly three observations above P97, a stable log-normal estimate, and a meaningful three-way sensitivity band (the ±25% / 25-50% / >50% thresholds above). This is the working target for a commissioned survey.
- **n ≈ 150 to 200** puts five or six observations above P97, so the nonparametric reconstruction stands on its own data rather than leaning on the parametric fit. This is the litigation-grade tier; reserve it for high-volume or high-scrutiny rows.

Counts are per row, and clean/dirty is a within-parent, per-analyte split, so the per-row count applies per subcategory that will carry its own limit. Total commissioned volume is therefore (number of rows or subcategories to be certified) × the per-row count, not multiplied by analyte count.

Commissioned data should be requested as sample-level values with LOD/LOQ reported per result, not as summary statistics. Summary-only data is admissible via the moment-matching expansion above, but it loses censoring handling and carries the "weak" flag; sample-level values with detection limits are what let the P97 survive scrutiny.

### Validation use: checking realized pass rates, not setting limits

A distinct purpose for commissioned data is to check whether a limit already set delivers its intended outcome, rather than to set the limit. The intended outcome is the row-level pass rate the calibration targets: approximately 90% of clean-subcategory products and 30% of dirty-subcategory products passing row-level certification. The validation question is whether the realized pass rate matches that target.

The statistics differ from limit-setting. The binding quantity is a proportion (the pass rate), not a tail percentile, and a proportion's precision is governed by `p(1-p)/n`, which is largest near 50%. The clean-row target (90%) is therefore cheap to confirm and the dirty-row target (30%) is the expensive one, the reverse of the limit-setting case where P97 made the clean rows expensive. The sample unit is the product, scored as a single joint pass or fail across all ten analytes, so n products per subcategory yields n joint observations.

95% confidence half-width on the realized pass rate, per subcategory:

| n per subcategory | at the 90% clean target | at the 30% dirty target |
|---|---|---|
| 35 | ±10 pp | ±15 pp |
| 70 | ±7 pp | ±11 pp |
| 100 | ±6 pp | ±9 pp |
| 150 | ±5 pp | ±7 pp |
| 320 | ±3 pp | ±5 pp |

The working target is n ≈ 100 per subcategory, which pins the clean mark to ±6 pp and the dirty mark to ±9 pp, enough to detect a decision-relevant miss (off target by ten points or more). Push a specific dirty row to ~150 for tighter confirmation; ~320 is only warranted for a flagship row expected to be defended publicly.

Two requirements are non-negotiable for this use. The sample must be randomly or representatively drawn within each subcategory: a convenience sample of the cleanest products inflates the pass rate and voids the check. And the sample must be independent of whatever set the limit; using one draw both to set and to validate a limit is circular. Because HMT&C limits are literature-derived, a fresh randomized commissioned draw is independent by construction, provided that same draw is not later folded back into limit-setting. Per-product, per-analyte records additionally permit measuring the realized analyte correlation (the uplift calibration assumes approximately 0.6) and the per-analyte marginal pass rates, which localize the cause when a row misses its target. Anonymized records suffice for the entire validation workflow, since only the subcategory label and per-analyte values are needed, not brand attribution.

## Regulatory ceiling rule

Final HMT&C values must not exceed the lowest applicable loaded regulatory cap regardless of where the pooled percentile falls. The cap is converted into the row's native basis if it was published in a different one. Intake and exposure estimates are not substitutes for product-occurrence distributions; intake tables inform exposure context only.

## Geography, period, product-fit handling

Do not combine geography, period, and product-fit scopes without labeling the consequence. Product fit, analytical basis, sample size, detection handling, period, and jurisdiction must be recorded as metadata for confidence and applicability review. The standards workflow may pool across jurisdictions when documented confidence is sufficient; pooling is a staff-side decision recorded in the workbench snapshot, not a public-page claim. Geography can affect weighting or scope notes; it is not a hard exclusion rule.

## Why P97 and P45 (the row-pass calibration, in detail)

Setting each analyte's limit at the raw P90 (clean) or P30 (dirty) of its marginal distribution under independence would deliver joint row-pass rates of approximately 0.9^10 = 35% (clean) and 0.3^10 ≈ 0% (dirty) across the ten HMTc analytes. Analytes correlate in real markets — supply-chain hygiene drives multiple metals together — so the actual joint pass rate is somewhere between independence and perfect correlation, typically 50-70% for clean and 10-15% for dirty at raw P90/P30.

The Governing Principles require approximately 90% of clean-subcategory brands and 30% of dirty-subcategory brands to pass row-level certification — not per-analyte certification. To deliver the row-level outcome, per-analyte limits are uplifted: P90 → P97 (clean), P30 → P45 (dirty). Under typical analyte correlation (≈0.6), these uplifted per-analyte percentiles deliver joint row-pass rates close to the 90/30 target.

The heuristic uplift is uniform across all analytes today. Per-analyte differentiation (e.g., Pb tighter than Ni based on regulatory pressure or toxicology) is a Tier 2 calibration deferred until HMT&C has lot-testing data to measure the actual joint pass rate empirically (target review: 6-12 months post-launch).

## Clean and dirty subcategory framework

Within a parent category that has multiple subcategories (for example, infant formula split into milk-based, soy-based, and hydrolyzed; or baby cereals split into rice-based and non-rice), classify each subcategory per-analyte as the clean subcategory or the dirty subcategory based on whether its empirical distribution for that analyte is meaningfully lower (clean) or higher (dirty) than the parent-category median. Clean and dirty are designations within a parent category, not fixed labels on a subcategory; the same subcategory can be clean for one analyte and dirty for another. If only one subcategory has data for an analyte, the comparison cannot be made; report what is available and note the missing comparison rather than guessing.
