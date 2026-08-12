# Task spec — Cat 6 & Cat 7 occurrence extraction (for Codex / GPT-5.5 fast)

> **Superseded task objective (2026-08-12).** Extraction remains useful for descriptive occurrence evidence, but it must not produce or justify a certification limit. The P97/literature-baseline completion target below is retired.

**Goal:** convert routed source pages into per-study reported statistics so the
existing pooling engine can produce literature-baseline P97 standards for every
Cat 6 (Seafood) and Cat 7 (Oils, Condiments, Specialty Foods) row.

**Do NOT** build a pooler — it exists (`tools/evidence/build-hmtc-aggregate-distributions.mjs`).
**Do NOT** invent numbers. Extract only what each source actually reports.
**Worked template:** `data/evidence/category7_primary_extraction_summary.csv`
(olive-oil Pb/Cd, hand-extracted by Claude — copy its column layout and style exactly).

## Work list

For each locked row in Cat 6 and Cat 7, get its direct-evidence sources:

```
awk -F',' '$1=="<row-slug>" && $7=="direct_evidence"{print $3}' \
  data/evidence/product_source_routing_audit.csv | sort -u
```

Rows: Cat 7 = olive-oil (done — Pb/Cd; finish remaining metals), cooking-oils-other,
butter-and-ghee, honey, vinegar, chocolate, spices, salt. Cat 6 = fish-freshwater,
fish-marine-non-predatory, fish-marine-predatory, shellfish, seaweed-kelp-foods,
canned-seafood. (condiments-general/snacks/mixed-meals stay provisional — skip.)

## Per (source × row × metal) extraction rules

Read `wiki/sources/<id>.md`. For each panel metal the source reports **for this
row's matrix**, emit one CSV row with:

1. **Unit → ppb (µg/kg).** ng/g × 1 ; µg/kg × 1 ; µg/g (=ppm, =mg/kg) × 1000 ;
   mg/kg × 1000. Record the conversion in `notes`. State every conversion.
2. **Statistic.** Fill the columns that match what's reported: `mean_ppb`,
   `median_ppb`/`p50_ppb`, `max_ppb`/`p100_ppb`, `p95_ppb`, and `n`. If only a
   range, put low in notes + high in `max_ppb`. `statistic_type` = one of
   reported_mean_and_range / reported_value / reported_max_only /
   review_cited_mean_and_range / non_detect.
3. **Censoring.** BDL/<LOD/<MDL → `statistic_type: non_detect`,
   `censoring_status: below_lod`, `censoring_limit_ppb: <LOD>`, leave value
   columns blank (pooler drops pure non-detects — that is correct/conservative).
   A reported value that sits below the LOD → `censoring_status:
   below_lod_upper_bound`, keep the value, flag in notes.
4. **Speciation — never substitute.** iAs ≠ tAs; MeHg ≠ tHg; Cr-VI ≠ Cr. Use the
   exact species the source reports as `metal_species`.
5. **Matrix fit — exclude aggressively.** Only emit rows where the measurement is
   of THIS row's product matrix. Drop: olive *leaves*/*pits*, *table* olives,
   olive-mill *wastewater*, other oil types for the olive-oil row, fish *feed*,
   etc. If a source is a review with mixed/inconsistent bases and no extractable
   per-study number, skip it (record nothing) — do not pool the review's prose.
6. **Outliers the source itself disowns.** If the source page says "use as
   high-caution, not calibration input" (e.g. Ziarati Iran olive oil ~10,000
   µg/kg; ground-harvested Cyprus), set `review_state: excluded_outlier` and
   `notes` with the reason, and DO NOT include it in the poolable set (omit the
   numeric columns or write it to a sibling `*_excluded.csv` for the audit trail).
7. **basis** = product form as sold (e.g. "olive oil, as-sold"); note if dry/other.

`evidence_fitness_verdict`: EF-2 primary sample-level; EF-3 small-n or
review-cited; EF-4 weak. `row_slug`, `hmtc_row`, `row_label` from the product page.

## Output

Append to `data/evidence/category6_primary_extraction_summary.csv` and
`data/evidence/category7_primary_extraction_summary.csv` (same 38-column header as
the olive-oil template). These match the pooler's `category*_summary.csv` glob.

## Verification pass (second model, required — these are certification numbers)

For each emitted row, a second pass re-checks: (a) unit conversion arithmetic,
(b) matrix fit, (c) censoring/speciation correctness, (d) the value is actually in
the source. Flag disagreements to `data/evidence/cat67_extraction_review.csv` for
Karen. Precedent: a prior subagent misread a value on
`abedi2025-edible-oils-bleaching-review` — verify, don't trust first read.

## Then run

```
node tools/evidence/build-hmtc-aggregate-distributions.mjs   # pools -> P97/P45, caps
node tools/evidence/build-standards-gap-report.mjs            # status per cell
```

Result lands in `data/evidence/hmtc_aggregate_distributions.csv` — one row per
(product, metal) with P97, regulatory cap, `final = min(P97, cap)`, rationale
tag, sensitivity band, and READY-FOR-REVIEW / PROVISIONAL status. Commit per row
or per batch. Karen spot-checks before any standard is published.

## Acceptance

Every Cat 6/7 row × panel-metal cell either has a pooled distribution
(distribution_capable ≥ 1) or a documented reason it cannot (all non-detect / no
fit-source / cap-only). The olive-oil Pb result (P97 = 69.7 µg/kg, cap 100, final
69.7, literature-baseline, stable) is the known-good reference — re-running must
reproduce it.
