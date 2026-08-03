# Standards methodology — pool admission and pooling math

**Method version: v1.0 (ratified 2026-08-03).** This is the first stable, versioned methodology. It incorporates the 2026-08-03 amendments (target-market stratification, dirty target ~40% anchored to measured lot data, program-level ~80% monitored admission, split-certifies-not-envelope, variance handled in the pool/cadence not per-lot, process-control screens). Constitutional amendments are ratified in CLAUDE.md Part 19; the evolution rationale and the five-principle checks are in `data/workbench/standards/2026-08-03-methodology-evolution-proposal.md`. This is the version publishable as method (per the firewall in CLAUDE.md Part 2: method may be published on the HMTc property; per-cell arithmetic and the excluded-jurisdiction list may not).

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

Do not combine geography, period, and product-fit scopes without labeling the consequence. Product fit, analytical basis, sample size, detection handling, period, and jurisdiction must be recorded as metadata for confidence and applicability review.

### Target-market pool (refines the prior "geography is not a hard exclusion" rule; proposed 2026-08-03, see the methodology-evolution proposal)

An occurrence percentile estimates a population. If the pool mixes jurisdictions that enforce binding maximum levels for the product class with jurisdictions that do not, the percentile estimates a market no certified brand ships into. The standards pool is therefore restricted to the **certification-relevant market**: sources from jurisdictions enforcing binding MLs for the product class with comparable surveillance. The exclusion criterion is **regulatory-equivalence, not geography** — this framing is mandatory for both defensibility and public communication ("markets with binding formula MLs and equivalent oversight," never a list of excluded countries). Sources with no jurisdiction recorded are retained, not dropped, and the per-run exclusion list is logged. The restriction is applied by the `--markets` flag of the pooling engine; it is off by default and an explicit, auditable choice per run.

Documented seasonal and geographic variance is accommodated **upstream of the pass/fail**, never as a per-brand waiver: the multi-season, multi-region pool already prices expected variance into P97/P45; the ratchet re-evaluates on rolling multi-season windows at a cadence longer than a seasonal cycle; lot-testing samples across the seasonal cycle. A per-lot "it was seasonal" exception is an unfalsifiable loophole and is not permitted.

## Why P97 and P45 (the row-pass calibration, in detail)

Setting each analyte's limit at the raw P90 (clean) or P30 (dirty) of its marginal distribution under independence would deliver joint row-pass rates of approximately 0.9^10 = 35% (clean) and 0.3^10 ≈ 0% (dirty) across the ten HMTc analytes. Analytes correlate in real markets — supply-chain hygiene drives multiple metals together — so the actual joint pass rate is somewhere between independence and perfect correlation, typically 50-70% for clean and 10-15% for dirty at raw P90/P30.

The Governing Principles require approximately 90% of clean-subcategory brands and ~40% of dirty-subcategory brands to pass row-level certification — not per-analyte certification. To deliver the row-level outcome, per-analyte limits are uplifted: P90 → P97 (clean), P30 → P45 (dirty).

**Calibration is now anchored to measured lot data, not an assumed correlation.** The earlier text asserted analyte correlation "≈0.6" to justify the uplift; the measured cross-analyte correlation is ~0.27 and the per-analyte-percentile → row-pass mapping is not uniquely identified from marginals. The anchor is the measurement: against the P97 clean / P45 dirty limits, the FDA 2026 special survey (per-sample vectors, four metals) delivered **94% clean and 42% dirty** row-pass on real market data — the 90/40 targets, confirmed. Update the dirty target from the legacy 30% to ~40% to match both this measurement and the Governing-Principles calibration.

These subcategory targets roll up, weighted by clean/dirty market share, to a **program-level admission of roughly 80%** (≈85/15 clean/dirty → 0.85×90 + 0.15×40 ≈ 82%). This is a **monitored average, not a per-category hard cap**: a category with no dirty sibling admits ~90%, a mostly-dirty category less. A sustained material deviation from ~80% program-wide is a signal to re-examine subcategory calibration, never a lever to force a single category to a headcount quota.

**The split is the certification instrument; the element-wise-max envelope is a headline only.** Certify each product against its own subcategory row. Publishing the envelope (the higher number per analyte) as the pass/fail instrument would (a) certify product above its own legal ceiling — the envelope nickel 400 exceeds the EU non-soy formula ML of 250 — and (b) leak the ratchet (measured: soy pass 42%→68% under the envelope). The envelope may be published as a category-ceiling summary only.

The heuristic uplift is uniform across all analytes today. Per-analyte differentiation (e.g., Pb tighter than Ni based on regulatory pressure or toxicology) is a Tier 2 calibration deferred until HMT&C has broader lot-testing data (target review: 6-12 months post-launch).

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

Where the pool cannot carry P97, the shortfall is stated rather than silently substituted: the cell is graded provisional and carries `percentile_unsupported`, `n_required`, and `max_supportable_p`.

### The publishing rule (locked 2026-07-29)

| Condition | Published value | Rationale tag |
|---|---|---|
| `pooled_n >= 99` | the pooled P97 | `literature-baseline` |
| `pooled_n < 99` and a regulatory cap applies | the lowest applicable cap | `regulatory-alignment` |
| `pooled_n < 99` and no cap | none — cell stays `in_development` | — |

Stated once, for the record and for cross-examination: **a literature-derived percentile is published only when the sample supports a one-sided 95% bound on it; otherwise the standard aligns to the binding regulatory limit; otherwise nothing is published.**

The rejected alternative was "publish the highest percentile each pool supports." It fails two ways. A lower percentile is a *tighter* value, so thin-data rows would carry harsher limits than data-rich ones — arbitrary, and it breaks the row-pass calibration the P97 uplift exists to deliver. And a P90 read from n=20 is no more stable than a P97 read from n=20; the instability is in the sample, not the percentile.

The direction of the error is what settles it. At low n the P97 collapses onto the sample maximum, so the published limit becomes "the dirtiest lot we happened to observe" — a permissive, unstable number that moves with each new sample. For a program whose value is consumer protection and legal defensibility, publishing a loose unstable limit is a worse failure than publishing none, and coverage does not depend on it: regulatory alignment carries the rows that literature cannot, and the ratchet tightens them as pools deepen.

Enforcement is `classifyCell` (which grades cap-bound cells firm regardless of n, literature cells firm only when n supports the target, and everything else provisional) plus gate 3 in `tools/standards/build-standards-catalog.mjs`, which emits no firm value for a non-firm classification. As of the 2026-07-29 pool, 122 of 792 cells can carry a P97.

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
