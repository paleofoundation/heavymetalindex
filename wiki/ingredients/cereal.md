---
type: ingredient
commodity: cereal
title: "Cereal"
label: "Cereal"
aliases: []
category: uncategorized
contamination_profile:
  Pb: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cd: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  iAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tAs: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  tHg: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Ni: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Al: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Cr: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  Sn: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
  U: { status: pending, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: null }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-20
sources: 2
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Cereal

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Not yet characterized — scorecard activates at 2 contributing A-tier sources._

<!-- /hmi-completeness-scorecard -->


This page is an autonomy-created stub. The routing audit identified 2 source pages in the corpus declaring `ingredients: [cereal]` in their frontmatter without a dedicated page existing. Per OPERATING.md Part 3, the autonomy loop created this stub so those sources route to a defined target. The synthesis pass per CLAUDE.md Part 9 fills in the contamination profile as sources accumulate.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | pending | — | — | — |
| Cd | pending | — | — | — |
| iAs | pending | — | — | — |
| tAs | pending | — | — | — |
| tHg | pending | — | — | — |
| Ni | pending | — | — | — |
| Al | pending | — | — | — |
| Cr | pending | — | — | — |
| Sn | pending | — | — | — |
| U | pending | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/original2020-original-a\|Alharbi et al. 2020]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2020 | Peer reviewed journal article | Cited reference from Food Science & Nutrition |
| 2 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | firewall+schema(ingredients): strip public percentile arithmetic, clamp confidence, fix in_progress contradiction |
| [bd0445000](https://github.com/paleofoundation/heavymetalindex/commit/bd0445000) | 2026-06-11 | fix(ingredient-tables): parse flow-style contamination_profile YAML, unblocking 64 all-dashes tables |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | feat: ingredient page-completeness scorecard (generator + 257 pages scored) |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
<!-- END: hmi-page-history -->
