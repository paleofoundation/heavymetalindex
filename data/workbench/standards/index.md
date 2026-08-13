---
title: Standards Workbench Boundary
type: workbench-index
audience: [internal]
noindex: true
updated: 2026-08-12
---

# Standards Workbench Boundary

The former per-product occurrence-selected standards snapshots were retired on 2026-08-12. They must not be regenerated or used to select an HMTc limit.

Current initial certification values are government-limit-only. The active deterministic records are:

- `cat1-compiled/` — infant and child foods plus the historical Category 6 seafood records consumed from this directory by downstream certification builders
- `cat3-compiled/` — grains, cereals, and rice products
- `cat7-compiled/` — the eight scope-locked oils and specialty-food rows
- `cat9-compiled/` — infant and child contact products
- `cat24-compiled/` — dairy and milk products
- `cat25-compiled/` — the five route-defined cannabis material/product rows
- `hmtc-category-completion.{json,md}` — canonical Big-8-plus-species completion audit, including controlled cells and deliberately unresolved rows
- the certification repository’s frozen compiled records and Program Manual outputs

Run `npm run standards:compile` to regenerate every active compiler family and the completion audit. Run `npm run standards:audit` to validate the existing records without rewriting them.

External occurrence models remain in `data/evidence/hmtc_aggregate_distributions.csv` for descriptive literature context and evidence-gap detection only. Post-publication tightening is a separate workflow using eligible HMTc certified-lot data under Governance Policy §12.

The retired snapshot generator, catalog generator, publication QC gate, and standards-readiness tools fail closed at startup. Historical analyses remain recoverable from version control and dated workbench decision records.
