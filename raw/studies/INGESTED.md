# Studies Ingest Log

Updated: 2026-05-02

This folder records locally held study PDFs supplied under `raw/studies/`. The PDFs themselves remain local raw evidence and are not committed because `raw/` is intentionally gitignored. Source pages in `wiki/sources/` carry the citable metadata and SHA-256 verification hashes.

## Current Audit State

The study folder has been inventoried through `npm run evidence:raw-inventory`.

| State | Count |
| --- | ---: |
| Study PDFs held locally | 331 |
| Matched by source-page raw path or related raw path | 12 |
| Matched by source-page SHA-256 | 1 |
| Study PDFs requiring source-page or rejection/defer decision | 318 |
| Product-relevant study priority queue | 36 total; 28 still unresolved |
| Background/mechanistic study queue | 295 |

The machine-readable queue is tracked at `data/evidence/raw_ingest_inventory.csv`.

## Next Ingest Gate

The `raw/studies` batch should begin only after `raw/reports` remains at zero unresolved source-page gaps. Study ingest should start with the unresolved product-relevant rows in `wiki/lint/2026-05-02-raw-reports-studies-ingest-inventory.md`, then proceed to lower-priority background studies.

Ingredient-only occurrence values must route to ingredient pages. If an ingredient page does not exist yet, create it before publishing the finding.
