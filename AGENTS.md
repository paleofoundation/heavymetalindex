# Codex Operating Rules for Heavy Metal Index

This repository is a compiled wiki, not a raw-file bucket and not a query-time RAG store.

Codex must read `CLAUDE.md` and `wiki/methodology/persistent-wiki-ingest-rule.md` before any ingest, evidence-routing, product-page, ingredient-page, or source-page work.

Codex must also read `docs/governance/hmtc-governing-principles.md` before any product-category, HMTc standards, limit-setting, crosswalk, or certification-threshold work.

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
Do not infer p50, p90, or p95 unless the source reports it or a deterministic calculation is documented.
Do not mix total arsenic with inorganic arsenic.
Do not mix total mercury with methylmercury.
Do not mix wet, dry, as-sold, and reconstituted bases.
Do not promote pending-tier evidence into public claims.
