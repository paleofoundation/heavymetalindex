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
