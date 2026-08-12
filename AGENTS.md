# Codex Operating Rules for Heavy Metal Index

This repository is a compiled wiki, not a raw-file bucket and not a query-time RAG store.

Codex must read `CLAUDE.md` and `wiki/methodology/persistent-wiki-ingest-rule.md` before any ingest, evidence-routing, product-page, ingredient-page, or source-page work.

Codex must also read `docs/governance/hmtc-governing-principles.md` before any product-category, HMTc standards, limit-setting, crosswalk, or certification-threshold work.

Codex must read `docs/continuous-ingest-architecture.md` before any work on the continuous gap-fill system (gap detector, source adapters, ranker, dual-model extractor, disagreement detector, wiki-edit audit barrier, or queue runtime). Adding a new source adapter is covered by `docs/add-a-source.md`.

## AI Adjudication Default

Evidence routing is an AI adjudication workflow, not a manual clerical workflow.

Codex is expected to resolve row fit, basis, analyte species, statistic type, units, censoring, and routeability from the source whenever the source provides enough information. Each decision must leave an auditable trace in structured evidence, routing audits, context dispositions, gap reports, source pages, and/or wiki pages.

Human review is reserved for low-confidence extraction, policy conflicts, high-impact threshold decisions, missing-source retrieval, and final governance approval. Do not write instructions that imply Karen or another human must manually perform routine source-to-row sorting when the repository can perform or record the adjudication.

## Ingest Completion Gate

A source is not ingested merely because a PDF exists, a source page exists, or the source is searchable.

A completed ingest requires:

1. Raw source preserved and provenance verified.
2. Canonical source page created or updated in `wiki/sources/`.
3. Evidence Fitness classified: what the source can support and what it cannot support.
4. Routeable values or claims captured in `data/evidence/` with basis, species, unit, statistic type, and row-fit metadata.
5. Evidence routed to the correct wiki page family: products, ingredients, metals, regulations, testing, health, microbiome, or context-only source documentation.
6. Missing destination pages created as stubs before findings are published.
7. Affected generated outputs regenerated.
8. Routing audits, reingest queues, gap reports, or candidate records updated when evidence cannot be placed cleanly.
9. `index.md`, `wiki/log.md`, checks, and commit handled before calling the ingest complete.

## Tier-1 Stubs

Pages with `status: tier1-stub` or `evidence_tier: pending` are not completed ingests.

They are recovery-queue items awaiting Tier-2 deep read, extraction, routing, and review. Do not promote them as public evidence without completing those steps.

## Source Pages Are Not Enough

If Karen asks to ingest a paper or dataset, and the result is only a `wiki/sources/...` page, the task failed unless Karen explicitly requested source-page-only staging.

## Product Category Pages

Product category pages are core HMTc evidence surfaces. Product-occurrence data must update the structured evidence register and the relevant product-page matrix, ledger, routing audit, or gap report.

If row fit is unclear, keep the source visible through an audit or queue record. Do not silently drop it.

## Occurrence Distributions and Certification Boundary

Do not look for any particular percentile as a requirement inside an individual study. Lack of a reported percentile is not, by itself, an Evidence Fitness defect.

During ingest, capture source facts: sample-level values when available, N, basis, species, units, censoring, geography/market, time period, sample frame, and every source-reported summary statistic. Means, medians, ranges, maxima, IQRs, SDs, and lower-bound / upper-bound means remain reportable evidence. Summary-only papers contribute to descriptive occurrence distributions through documented moment-matching pseudo-sample expansion; they are not discarded merely because sample-level values are unavailable.

The current HMTc certification method is locked in CLAUDE.md Part 19:

- **Initial limit setting is government-limit-only.** Each starting value is the strictest applicable maximum level set by a credible sovereign government, expressed in the product's native basis.
- Government formulation splits are preserved. The 8:1 powder-to-liquid conversion is confined to infant formula.
- Where no government regulates the exact cell, use a disclosed read-across from the nearest applicable sovereign value or an n/m determination with its control method. Occurrence evidence cannot supply the missing certification value.
- Heavy Metal Index occurrence distributions are contextual. They support literature synthesis, market characterization, source prioritization, surveillance design, and research-gap analysis, but they do not select an initial certification limit or determine status.
- After publication, the separate endogenous Standards Ratchet uses eligible HMTc certified-lot results under Governance Policy §12. It does not use the public Index occurrence pool. For two consecutive annual reviews, the capped combined Status A + Status B trigger pool must have P80 at or below 80% of the current limit and at least 50% of trigger-pool SKUs must have qualifying lots at or below 60%; no licensee may contribute more than 25% of the pool. The new limit is the greater of Status A P80 or 80% of the current limit, so one event cannot reduce the value by more than 20%.

Occurrence pools must remain jurisdiction-, market-, basis-, species-, product-form-, and period-aware. If values differ materially across markets, stratify and document the difference rather than silently pooling them.

The occurrence engine (`tools/evidence/build-hmtc-aggregate-distributions.mjs`) remains the deterministic implementation for descriptive distributions and audit context. Its outputs live under `data/evidence/` and `data/workbench/standards/`; certification selection arithmetic and candidate values do not publish under `wiki/`.

## Infant Formula Row Fit

For formula sources, "infant formula" alone is broad until powder/liquid and soy/non-soy status are resolved. But sources that explicitly describe the matrix as cow-milk, milk-based, powdered milk, milk formula, follow-up milk, or dietetic milk should route to the non-soy formula row unless the source states soy, plant protein, amino-acid-only, or another non-dairy formulation.

Keep specialty or dietetic milk formulas flagged as specialty/context when appropriate. Group means, ranges, and maxima must retain their source-reported statistic type; they may contribute to descriptive occurrence modeling through the documented reconstruction method but never select an initial certification value. This row-fit rule does not weaken the species rule: total chromium still cannot substitute for Cr(VI), total arsenic for inorganic arsenic, or total mercury for methylmercury.

## Dataset Ingests

For datasets with many foods or ingredients, each routeable row or grouped summary must be mapped to destination wiki pages or recorded in a routing gap.

A dataset with 300 ingredient findings should produce 300 destination routes, updates, or explicit audit records, not merely one source page.

## Before Ending An Ingest

Run the applicable checks:

- `npm run evidence:source-routes`
- `npm run evidence:local-reingest`
- `npm run evidence:standards-gaps`
- `npm run evidence:ai-adjudication`
- `npm run prebuild`
- `npm test`
- `npm run check`
- `npm run build`

Report pages touched, evidence rows generated, product or ingredient pages updated, and unresolved gaps.

## Do Not

Do not silently drop source data because a destination page is missing.
Do not require individual studies to report any specific percentile.
Do not exclude summary-only sources (mean, median, range, IQR, max, lb/ub) from descriptive occurrence distributions; they contribute through documented moment-matching pseudo-sample expansion.
Do not end a commit with a bare `git commit` or `git commit -a`. Declare the files and commit by pathspec — `git commit -- <files>` or `tools/commit-scoped.sh -m "msg" -- <files>` — or FRANK's `git add -A` rides along into your commit. See OPERATING.md Part 5 ("Scoped commits").
Do not treat a source-reported percentile from one paper as a program-wide distribution, and do not turn any Index occurrence statistic into a certification limit. Initial HMTc values are government-limit-only; post-publication tightening belongs to the separate certified-lot ratchet.
Do not silently pool samples across jurisdictions, markets, time periods, bases, product forms, or analyte species. If the benchmark target is jurisdiction-specific, document why each non-target-market source is included, excluded, or retained as context.
Do not write standards arithmetic (P-value computations, pooling math, sensitivity bands, candidate values) into `wiki/`. That content lives in `data/workbench/standards/` and on the local staff Standards Workbench tool. The wiki is the public literature evidence layer only.
Do not mix total arsenic with inorganic arsenic.
Do not mix total mercury with methylmercury.
Do not mix wet, dry, as-sold, and reconstituted bases without explicit conversion logged in the contribution log.
Do not promote pending-tier evidence into public claims.
