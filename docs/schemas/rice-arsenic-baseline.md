---
schema_version: 1.0.0
last_updated: 2026-09-26
applies_to: wiki/static/data/rice-arsenic-ground-truth.json, wiki/baselines/rice-arsenic.md, docs/briefs/rice-arsenic-ground-truth-coverage.md
---

# Rice arsenic Ground Truth contract

The public baseline at `wiki/baselines/rice-arsenic.md` is a scaffold. The machine-readable contract is `wiki/static/data/rice-arsenic-ground-truth.json` (and the CSV beside it). The schema is `data/evidence/schema/rice-arsenic-baseline.schema.json`.

`node tools/evidence/build-rice-arsenic-baseline.mjs` rebuilds the JSON, the CSV, the public page, and `docs/briefs/rice-arsenic-ground-truth-coverage.md`. It reads `data/evidence/geo_hist.jsonl` and joins each `row_id` back to the CSV line or `values.jsonl` record. It copies concentration fields. It does not compute a new statistic, split a year span, or add a government limit.

A row is included only when the ledger already has all of the following:

- a rice matrix (a slug containing rice, excluding non-rice slugs; mixed meals only when the printed food name contains the word rice)
- `metal_species` of `iAs` or `tAs`
- `sampling_country`
- `sampling_year_start` or `sampling_year_end`
- a numeric concentration field or a `field_value_summary` on the joined record

`sampling_region` is copied only when the geo-hist row already has one. Empty means the ledger did not state an admin-1 region. Author affiliation, the `jurisdictions` array, an agency name, and a WHO region are not sampling countries. Those exclusions are applied by the geo-hist backfill before this contract reads the file.
