# Standards methodology — occurrence evidence and certification boundary

**Method version: v2.0 (ratified 2026-08-11).** CLAUDE.md Part 19 is the constitutional source. This document supplies the procedural detail for constructing descriptive Heavy Metal Index occurrence distributions while keeping them outside HMTc initial limit selection and certification status.

## The boundary

HMTc initial limits are government-limit-only. For each product-analyte cell, the starting value is the strictest applicable maximum level set by a credible sovereign government, expressed in the product's native basis. Where the exact cell is unregulated, the certification-side record must contain a disclosed read-across from an analogous sovereign value or an n/m determination with its control method. If neither is supportable, the cell remains in development.

Heavy Metal Index occurrence evidence does not select that value. Descriptive distributions may support literature synthesis, market characterization, surveillance priorities, research-gap analysis, source-quality review, or regulatory-context comparison. They do not enter MaxPoL and cannot supply a missing certification number.

After publication, the separate HMTc Standards Ratchet may tighten a current limit using eligible certified-lot results under Governance Policy §12. Public Index occurrence data is not the ratchet pool.

For two consecutive annual reviews, the capped combined Status A + Status B trigger pool must have P80 at or below 80% of the current limit and at least 50% of trigger-pool SKUs must have qualifying lots at or below 60%; no licensee may contribute more than 25% of the pool. When both conditions hold, the new limit is the greater of Status A P80 or 80% of the current limit. That formula caps one ratchet event at a 20% reduction and is followed by a 12–18 month transition.

## Evidence admission for descriptive occurrence distributions

Every source loaded for a product-row and analyte cell is adjudicated for row fit, analyte species, basis, unit, market, time period, method quality, censoring, and statistic type. A source is included, excluded, stratified, or held with an explicit disposition.

The admission rule depends on what the source reports:

- Sample-level data uses the reported values after unit and basis normalization.
- A reported quantile vector with N may be reconstructed by quantile interpolation.
- Mean, SD, and N may be reconstructed through a documented parametric moment match.
- Mean, median, maximum, and N may be fitted with the assumptions recorded.
- Mean and N without dispersion may be reconstructed only as weak evidence under the configured default variability assumption.
- Lower-bound and upper-bound means for censored data are preserved as an interval and reconstructed under the documented censoring model.
- Range-only evidence is weak and receives bounded pseudo-sample treatment.
- A single value without N remains a single weak point; it is never silently promoted to a population distribution.

Summary-only studies remain useful evidence. They are not discarded simply because sample-level values are unavailable.

## Pool construction

Pseudo-samples are pooled with source-N weighting capped at twice the median per-source N in the cell so one large survey does not dominate. Descriptive summaries may include the median, interquartile range, upper quantiles, observed range, sensitivity variants, and source counts. These statistics describe the admitted evidence pool; none is a certification candidate.

Sensitivity is evaluated across the supported reconstruction assumptions, including log-normal, gamma, and nonparametric variants where applicable. The current stability labels are:

- within ±25%: stable;
- 25–50%: provisional;
- above 50%: needs review.

The contribution log records every source, admission decision, conversion, weight, reconstruction method, and sensitivity disposition.

## Market, period, product-form, and species discipline

Do not combine geography, market, period, basis, product form, or analyte species without labeling and justifying the consequence.

For a target-market analysis, the primary pool should represent the target market or a documented regulatory-equivalence class. Sources with unknown jurisdiction are retained with an explicit unknown-market flag rather than silently dropped. Non-target-market evidence may remain as context, a prior, a gap flag, or a sensitivity stratum.

Seasonal and geographic variability belongs in the evidence record and distribution. It does not create an unpublished brand-specific threshold or per-lot waiver.

Product matrix and packaging format are separate axes. A canned product routes to its matrix-native row and carries a packaging flag. Tin migration may require a matrix-by-package stratum; it does not justify pooling unrelated foods into one canned-food occurrence population. Species distinctions remain strict: total arsenic is not inorganic arsenic, total mercury is not methylmercury, total chromium is not hexavalent chromium, and total tin must not be substituted for inorganic tin without an explicit legal or analytical mapping.

## Native basis

Occurrence values are normalized only for like-for-like descriptive comparison, and every conversion is logged. Powder, ready-to-feed liquid, dry-as-sold, as-consumed, and contact-migration bases remain distinct.

The certification-side 8:1 powder-to-liquid conversion is confined to infant formula. The prior generic reconstitution factor is retired for certification selection. Other categories take the applicable sovereign value in their native product basis.

## Regulatory comparison

The regulatory crosswalk may be displayed beside descriptive occurrence evidence to show where measured markets sit relative to sovereign maximums. That comparison must not be phrased as a formula that selects a certification value.

The current certification provenance states are:

- `regulatory-alignment`: strictest applicable sovereign value;
- `read-across`: disclosed mapping from an analogous sovereign cell;
- `not-material`: no standalone numeric limit; documented control applies;
- `ratchet`: post-publication value adopted under Governance Policy §12.

Former occurrence-selected, discretionary precautionary, and feasibility-selected numeric tags are retired. Historical records may retain them only when clearly marked superseded and excluded from current generators.

## Quality and publication gates

An occurrence distribution is not complete merely because a percentile can be calculated. The record must also show adequate source fit, analyte species, units, basis, censoring treatment, market and period scope, source diversity, and sensitivity behavior.

The public wiki may publish literature-native descriptive findings and uncertainty. It must not publish HMTc candidate values, clean/dirty pathway labels, ratchet calculations, brand admission rates, or per-cell certification arithmetic. The certification property publishes the current method and limits.

## Implementation

`tools/evidence/build-hmtc-aggregate-distributions.mjs` constructs descriptive occurrence distributions and their audit logs. Its outputs under `data/evidence/` and `data/workbench/standards/` are evidence and staff context, not current certification candidates.

Current certification exports must read the government-limit compiler and ratchet register, not a descriptive occurrence percentile. Any tool that emits a public or current HMTc limit from an occurrence statistic is stale and must fail closed.

Ad-hoc per-cell calculation is prohibited. Changes to pool construction, sensitivity, weighting, censoring, or market stratification require code, tests, and a changelog entry.

## Supersession

This version retires the former clean/dirty percentile-selection and row-pass-calibration method for initial limit setting. Historical analyses remain part of the audit trail, but they do not govern current cells and must not be presented as the present method on either website.
