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
- `category1_standards_decisions.csv`: internal standards-decision register
  for row x metal values that have been promoted, approved, or finalized for
  HMTc use. This file is intentionally separate from public evidence and from
  provisional percentile calculations.
- `category1_fda_baby_food_compliance_summary.csv`: FDA FY2009-FY2024
  baby/young-child food compliance samples summarized into Category 1
  lower-bound p10/p50/p90/p95/p100 rows.
- `category1_fda_baby_food_compliance_samples.csv`: parsed FDA sample-level
  baby/young-child food compliance rows with product-row mapping notes.
- `category1_formula_concentration_summary.csv`: formula concentration
  summary rows from the FDA FY2023-FY2025 special survey and promoted Digest
  formula papers.
- `category1_formula_special_survey_samples.csv`: parsed FDA sample-level
  infant-formula special-survey rows with locked-row, bridge, and out-of-scope
  mapping notes.
- `fda_tds_product_route_candidates.csv`: FDA FY2018-FY2020 Total Diet Study
  finished-food rows whose ingredient route table maps them to product pages.
  These are review candidates only; total/speciated analytes and small-N rows
  must be reviewed before promotion into standards evidence.
- `category1_lead_benchmark_context.csv`: ppb-normalized Category 1 lead
  benchmark context, including FDA status/value, EU maximum-level ppb values,
  Prop 65 serving-based ppb equivalents, and HMTc/public interpretation notes.
- `hmtc_standards_gap_report.csv`: generated standards triage report that reads
  the formula, baby-food compliance, plant-milk occurrence, TDS candidate, local
  reingest, and regulatory crosswalk layers before assigning gap status. It
  labels bridge/base product nodes as context-only so they stay visible without
  creating false HMTc p90 work.
- `schema/*.json`: JSON Schemas for the tracked JSONL records.
- `drafts/`: unreviewed scan output, review queues, and source page
  candidates. Draft records are not public evidence.

## Scripts

- `npm run evidence:category1`: rebuilds the Category 1 pilot register.
- `npm run evidence:digest-baby-food`: parses the FDA baby/young-child food
  compliance PDF text extraction into Category 1 summary/sample evidence files.
- `npm run evidence:digest-formula`: parses the FDA infant-formula special
  survey PDF text extraction into formula summary/sample evidence files.
- `npm run evidence:scan`: scans local `raw/markdown/` into draft JSONL
  registers.
- `npm run evidence:queue`: converts draft JSONL registers into a reviewer queue
  and draft source page candidates.
- `npm run evidence:tds-routes`: rebuilds the FDA TDS product-route candidate
  report used by standards gap triage.

## Review Boundary

`machine_extracted` records may support internal queues and drafts only.
`approved_for_internal` records may feed HMTc standards work.
`approved_for_public` records are required before a value or claim appears on a
public Index page.

HMTc thresholds must not be used as evidence for public Heavy Metal Index
claims.
