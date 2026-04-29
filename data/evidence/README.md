# Evidence Register

This directory contains the tracked evidence layer for Heavy Metal Index.

The private source corpus remains under `raw/` and is gitignored. Files here
store only metadata, extracted candidate values, claims, review events, schemas,
and Category 1 pilot coverage registers.

## Files

- `sources.jsonl`: reviewed or machine-extracted source metadata.
- `values.jsonl`: candidate concentration, regulatory, toxicology, and exposure values.
- `claims.jsonl`: claim-level statements with source provenance.
- `review_events.jsonl`: append-only review and promotion events.
- `category1_register.csv`: expected Category 1 row x metal/species coverage
  for value-level backfill and review. Existing source-cited product pages may
  contain public synthesis before every table cell has a matching JSONL value
  record; new machine extraction still requires promotion before publication.
- `schema/*.json`: JSON Schemas for the tracked JSONL records.
- `drafts/`: unreviewed scan output, review queues, and source page
  candidates. Draft records are not public evidence.

## Scripts

- `npm run evidence:category1`: rebuilds the Category 1 pilot register.
- `npm run evidence:scan`: scans local `raw/markdown/` into draft JSONL
  registers.
- `npm run evidence:queue`: converts draft JSONL registers into a reviewer queue
  and draft source page candidates.

## Review Boundary

`machine_extracted` records may support internal queues and drafts only.
`approved_for_internal` records may feed HMTc standards work.
`approved_for_public` records are required before a value or claim appears on a
public Index page.

HMTc thresholds must not be used as evidence for public Heavy Metal Index
claims.
