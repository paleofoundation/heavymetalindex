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
- `category1_local_baby_food_occurrence_summary.csv`: reviewed small-sample
  peer-reviewed baby-food occurrence summaries that are useful as product-row
  context but not distribution-capable HMTc standards-percentile evidence.
- `category5_tds_finished_food_occurrence_summary.csv`: reviewed FDA TDS
  finished-food route rows promoted from product-route candidates. These rows
  preserve source/TDS p10-p95 summaries where available, keep total arsenic
  separate from inorganic arsenic, and remain single-source or small-N context
  until HMTc aggregate review.
- `category5_apple_juice_arsenic_speciation_samples.csv`: FDA 2011
  single-strength apple-juice arsenic speciation sample rows, preserving total
  arsenic, inorganic arsenic, DMA, MMA, and trace/zero handling.
- `category5_apple_juice_arsenic_speciation_summary.csv`: generated lower-bound
  inorganic-arsenic p10/p50/p90/p95/p100 rows routed to the apple-containing
  juice row and the broader not-canned fruit-juice context row. FDA Trace (TR)
  values are treated as 0 ppb only for the documented lower-bound calculation.
- `category5_grape_juice_inorganic_arsenic_samples.csv`: FDA 2016 `Juice -
  Grape` infant/toddler foods arsenic sample rows, preserving grape blends,
  NS cells, total arsenic, inorganic arsenic, DMA, MMA, and serving-size notes.
- `category5_grape_juice_inorganic_arsenic_summary.csv`: generated
  quantified-cell inorganic-arsenic p10/p50/p90/p95/p100 rows routed to the
  non-apple juice row and the broader not-canned fruit-juice context row. NS
  cells are not speciated and are excluded from percentile calculations.
- `who_gemsfood_heavy_metals_summary_by_food_contaminant.csv`: recovered
  WHO GEMS/Food lower-bound per-food/per-contaminant summaries. These rows are
  source-scope occurrence context and route/gap inputs until the gitignored raw
  exports are restored and exact-row aggregate review admits a row.
- `who_gemsfood_heavy_metals_raw_exports.csv`: recovered GEMS/Food raw export
  manifest with access dates, row counts, raw paths, and SHA-256 hashes. The
  raw CSV exports themselves live under `raw/` and are intentionally untracked.
- `who_gemsfood_arsenic_page_routes.csv`: arsenic route audit for high-value
  GEMS/Food food rows. Route entries preserve species and page fit caveats; they
  are not final HMTc standards values.
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
- `product_source_routing_audit.csv`: generated source-to-product routing audit
  for locked HMTc rows plus base/bridge context nodes. It distinguishes direct
  routes, broad row-fit context, structured rows, and missing extraction work.
- `local_reingest_queue.csv`: generated work queue from the routing audit and
  local raw-file inventory. Queue priority is highest for locked-row extraction;
  bridge/base rows remain visible as context-only review work.
- `local_reingest_candidate_values.csv`: deterministic candidate rows parsed
  from local source packets. These are non-public review inputs until promoted.
- `local_reingest_context_dispositions.csv`: source/product/metal routes that
  were read but documented as context-only, not routeable, or table-review
  blocked. This prevents read sources from remaining as vague extraction tasks.
- `local_reingest_extraction_tasks.csv`: remaining source-specific extraction
  prompts after deterministic candidates and context dispositions are written.
- `category1_lead_benchmark_context.csv`: ppb-normalized Category 1 lead
  benchmark context, including FDA status/value, EU maximum-level ppb values,
  Prop 65 serving-based ppb equivalents, and HMTc/public interpretation notes.
- `hmtc_standards_gap_report.csv`: generated standards triage report that reads
  the formula, baby-food compliance, plant-milk occurrence, TDS candidate, local
  reingest, and regulatory crosswalk layers before assigning gap status. It
  labels bridge/base product nodes as context-only so they stay visible without
  creating false HMTc threshold work. Clean benchmark rows use aggregate
  clean-platform P90 as the standards target; contaminated-platform rows use a
  governance-selected aggregate lower-tail value, P10 by default or P20 only
  when explicitly selected. Source-reported percentiles are context until
  admitted into the exact-row aggregate pool, and final HMTc values must not
  exceed the lowest applicable loaded regulatory cap.
- `hmtc_standards_action_queue.csv`: generated next-action queue collapsed from
  the standards gap report. It groups locked-row blockers by product/status,
  ranks local candidate review, TDS route review, species-specific gaps, source
  discovery, summary-only rows, and single-source standards-percentile blockers.
- `ai_adjudication_queue.csv`: generated machine-adjudication contract for the
  standards action queue. It names the AI task, required decisions, input
  artifacts, confidence gate, expected outputs, and human exception trigger for
  each unresolved product/metal standards action. Human work is scoped to source
  retrieval, low-confidence exceptions, policy conflicts, and final governance
  approval rather than routine row sorting.
- Product-page `HMTc Evidence Summary` blocks: generated from
  `hmtc_standards_gap_report.csv` by
  `tools/evidence/apply-product-hmtc-evidence-summaries.mjs`. These blocks
  answer the row-standard percentile question in one place: clean rows use
  aggregate P90, contaminated rows use aggregate P10 by default, source
  percentiles remain context until admitted into the aggregate pool, and final
  values remain capped by the lowest loaded applicable regulatory ceiling.
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
- `npm run evidence:juice-speciation`: rebuilds the FDA 2011 apple-juice
  arsenic speciation and FDA 2016 grape-juice inorganic arsenic summaries and
  value records from the checked sample extracts.
- `npm run evidence:gemsfood`: ingests WHO GEMS/Food CSV exports from a local
  input file/directory or a download run. Raw exports remain under gitignored
  `raw/`; tracked outputs are the manifest, grouped summaries, source page, and
  route/gap context.
- `npm run evidence:standards-actions`: rebuilds the HMTc standards action
  queue and downstream AI adjudication queue from the current standards gap
  report.
- `npm run evidence:ai-adjudication`: rebuilds the machine adjudication queue
  from the current HMTc standards action queue.
- `npm run evidence:standards-summary`: refreshes generated HMTc Evidence
  Summary blocks on product pages from the current standards gap report.

## Review Boundary

`machine_extracted` records may support internal queues and drafts only.
`approved_for_internal` records may feed HMTc standards work.
`approved_for_public` records are required before a value or claim appears on a
public Index page.

HMTc thresholds must not be used as evidence for public Heavy Metal Index
claims.
