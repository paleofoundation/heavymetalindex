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

### The sample size a percentile requires (non-negotiable)

A percentile is only as real as the sample it is read from. For an upper-tail target, the smallest n at which a one-sided 95% nonparametric bound on the P-th percentile exists at all is `ceil(ln(0.05)/ln(P))`:

| Target | Minimum n |
|---|---|
| P90 | 29 |
| P95 | 59 |
| **P97** | **99** |

Below that n there is no bound. The number is the top order statistic wearing a percentile's name: it moves with the dirtiest lot in the pool rather than with the distribution, and no confidence statement can be made about it. A second condition applies independently — the target must sit inside the pool's resolution (`P <= 1 - 1/n`), or fewer than one observation is expected above it and the value is extrapolation.

This is separate from the distinct-source floor. `distinct_sources` counts sources; `pooled_n` counts samples. A three-source pool of twenty samples clears the source gate and fails this one.

Enforcement is in code, in two places that must agree: `minNForPercentile` / `maxSupportablePercentile` in `tools/evidence/lib/standards-readiness.mjs` (which prevents `classifyCell` grading a cell firm when the pool cannot carry the target), and checks C11a/C11b in `tools/evidence/build-standards-qc-gate.mjs`. Before these were aligned, 68 cells graded firm that C11b demotes — including a P97 read from n=4.

Where the pool cannot carry P97, the shortfall is stated rather than silently substituted: the cell is graded provisional and carries `percentile_unsupported`, `n_required`, and `max_supportable_p`. Publishing a lower percentile than the methodology targets is acceptable and honest; publishing P97 from a pool that cannot support it is neither. As of the 2026-07-29 pool, 118 of 786 cells can carry a P97.

## Clean and dirty subcategory framework

Within a parent category that has multiple subcategories (for example, infant formula split into milk-based, soy-based, and hydrolyzed; or baby cereals split into rice-based and non-rice), classify each subcategory per-analyte as the clean subcategory or the dirty subcategory based on whether its empirical distribution for that analyte is meaningfully lower (clean) or higher (dirty) than the parent-category median. Clean and dirty are designations within a parent category, not fixed labels on a subcategory; the same subcategory can be clean for one analyte and dirty for another. If only one subcategory has data for an analyte, the comparison cannot be made; report what is available and note the missing comparison rather than guessing.

## Packaging and processing format is a flag, not a category (the canned / tin rule)

A product is classified by its food matrix and exposure pathway, never by its packaging or processing format. "Canned," "pouched," "dried," and "frozen" are within-category format variants, not matrix rows and not categories. The contamination platform a format introduces is expressed as a cross-cutting flag and, where it drives a per-analyte distribution, as a clean/dirty split of the **matrix-native** row — never as a freestanding packaging-defined row in an unrelated category.

The canonical case is **tin (Sn) from tinplate cans**. Tin migrates from the can, not from the food, so canning is a packaging platform that cross-cuts every food category. The rule:

- A canned product routes to its matrix-native row (canned tuna to the predatory-fish row; canned tomatoes to the non-root-vegetable row; canned mushrooms to the wild-mushroom row) and carries a `canned` flag. It does **not** receive a freestanding "canned X" matrix row. This is the rule the Cat 4 mushrooms split already follows: canned wild mushrooms route to the wild-mushroom row with a tin flag, not to a separate canned row (see `docs/governance/category-4-step0-amendment-1.md`).
- The canned form is the **tin-dirty subcategory** of its matrix parent, evaluated on the Sn axis like any other clean/dirty split.
- **Tin is pooled per (matrix × canned) subcategory, never as one global canned-tin pool.** Tin leaching is driven by product acidity, can lining/lacquer state, and storage time, so high-acid canned tomatoes and near-neutral canned tuna are different tin marginals and must not be pooled together.
- Each canned row's tin standard is `min(pooled tin percentile, lowest applicable regulatory ceiling)` in the row's native basis, and the **tin species distinction is preserved**: Codex CXS 193 caps *total* tin (250 mg/kg for canned foods other than beverages) while EU 2023/915 caps *inorganic* tin at a lower level, lower still for canned foods intended for infants and young children. The binding ceiling is the lowest applicable one in the correct species. Carrying a total-tin cap onto a row without checking the inorganic-tin ceiling would silently loosen the standard and is prohibited (the speciation rule in CLAUDE.md Part 14 applies to Sn as it does to As, Hg, and Cr).

A freestanding packaging-defined row — for example, a single "canned seafood" row pooling every fish matrix — is defective because it forces one marginal distribution to serve two incompatible analytes at once: a methylmercury percentile (where the fish species, not the can, drives the value) and a tin percentile (where the can, not the fish, drives it). Both marginals are corrupted. Routing by matrix and flagging the format fixes both. The cross-cutting tin platform is documented once as the canonical reference (Cat 23 `food-packaging-cans-lids`), which every canned row references rather than restating.
