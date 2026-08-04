---
type: batch-report
report_kind: priority-5-architecture-survey
date: 2026-05-09
phase: 5
audience: [curator]
covers:
  - "Survey of HMTc product category architecture beyond Cat 1 and Cat 5"
  - "Discovery: Cat 2/3/4/6/7+ have no product pages; Step 0 lock not done"
  - "Recommendation: Priority 5 requires Karen's architectural scoping input before autonomous build-out can proceed"
covers_cycles: "23"
related: "[[batch-reports/category-5-beverages-overnight-2026-05-09]]"
noindex: true
---

# Priority 5 — HMTc Product Category Architecture Survey (cycle 23)

## Overview

This report documents the cycle-23 survey of `wiki/products/` for HMTc product category architecture beyond Cat 1 (Infant and Child Foods) and Cat 5 (Beverages). The survey was triggered by Karen's directive to "begin Priority 5 (other HMTc product categories — Cat 2 / 3 / 4 / 6+)" in the post-cycle-20 /loop re-fire.

## Headline finding

**HMTc Categories 2, 3, 4, 6, 7, 8, 9, 10, 11, and 12 have no product pages in `wiki/products/`. Step 0 architectural lock has not been performed for these categories.** The autonomous /loop cannot proceed with Priority 5 build-out without Karen's architectural scoping decisions first.

## Inventory

Total `wiki/products/` pages: **44**.

| Category | Pages | State |
| --- | ---: | --- |
| HMTc Cat 1 (Infant and Child Foods) | 17 | **Architecture complete.** 16 locked Step 0 rows + master summary at [[products/infant-and-child-foods-master]]. All pages rebuilt under Part 19 framework. 11 cells at readiness bar (cycles 1-22 cumulative). |
| HMTc Cat 5 (Beverages) | 18 | **Architecture complete.** 16 locked Step 0 rows + 1 regulatory-crosswalk page + master summary at [[products/category-5-beverages-master]]. All pages rebuilt under Part 19 framework (cycles 12-19 + cycle 21 FDA 2018 extraction). 3 cells at readiness bar. |
| HMTc Cat 2 / 3 / 4 / 6 / 7 / 8 / 9 / 10 / 11 / 12 | **0** | **Not yet built.** No Step 0 lock; no product pages; no master summaries. |
| No `hmtc_category` integer (9 pages) | 9 | Mix of base/bridge variants for Cat 1 (3 pages, see below); Cat 5 regulatory-crosswalk synthesis (1 page); utility/synthesis (4 pages); plus 1 contact-product page (`piercing-post-assemblies.md` — non-food, separate scope). |

### The 9 no-category pages

| Page | Notes |
| --- | --- |
| `infant-formula-powder.md` | Cat 1 base/bridge stub (variant_type=base). category_label="Infant and Child Foods". Likely should carry `hmtc_category: 1` for consistency, but variant_type=base means it bridges multiple Cat 1 rows and may intentionally lack the integer. **Flagged for Karen review.** |
| `infant-formula-concentrated-liquid-non-soy.md` | Cat 1 bridge variant (variant_type=bridge). Same flag. |
| `infant-formula-concentrated-liquid-soy-based.md` | Cat 1 bridge variant (variant_type=bridge). Same flag. |
| `regulatory-crosswalk-field-findings.md` | Cat 5 17th locked-architecture page (synthesis layer, not percentile-readiness row). Already documented in [[products/category-5-beverages-master]]. |
| `lead-benchmark-context.md` | Cross-category Pb-benchmark synthesis page. type=product-synthesis. Not a product subcategory. |
| `index.md` | Index page for `products/` directory. |
| `glucose-solutions.md` | Medical/clinical product (oral electrolyte category). Not in the current HMT&C 12-category architecture; possibly future Cat 6+ scope. |
| `oral-electrolyte-solutions.md` | Medical/clinical product. Same scope question. |
| `piercing-post-assemblies.md` | Contact-product (non-food jewelry). Outside HMT&C food scope; separate contact-Pb risk track. |

## Step 0 lock status

The Step 0 process — the locked-row architecture that fixed Cat 1's 16 subcategory rows and Cat 5's 16 subcategory rows — has been applied only to those two categories. Evidence:

- `raw/reports/category5-step-0-output-locked-20260428.md` exists (referenced from [[products/category-5-beverages]] frontmatter at field `raw_path`).
- No equivalent Step 0 output documents exist in `raw/reports/` for Categories 2, 3, 4, 6, 7+.
- The Cat 1 architecture predates the cycle-1 corpus state and is implicitly locked by the 16-page coverage.

**Karen's `hmtc-standards` Cowork skill and the master plan reference an HMTc 12-category architecture, but only 2 of those 12 categories have entered the wiki product-page build-out.** The other 10 categories remain unbuilt.

## What Priority 5 build-out would require from Karen

For each remaining HMTc category (2-12), the autonomous /loop would need:

1. **Step 0 lock document** — like `raw/reports/category5-step-0-output-locked-20260428.md`. This defines:
   - Which subcategory rows are locked into the architecture (typical: 8-20 rows per category)
   - Each row's variant_type (clean_benchmark / contamination_platform / independent_no_split / distinct_exposure_pathway)
   - cc_relationship pairings (which rows pair against which)
   - primary_metals_of_concern per row
   - applicable_regulations per row
   - Boundary rules (what's in scope, what's excluded)
   - Notable platform metals routed through specific ingredients

2. **HMTc category integer assignment** — which integer (2 through 12) each category gets. The current `hmtc_category` frontmatter integers establish this for Cat 1 and Cat 5; the others need explicit assignment.

3. **Initial source corpus pointer** — primary A-tier sources Karen knows of (e.g., FDA TDS subset, EU TDS, regional surveys) that route to each new category's subcategories.

Without these inputs, the autonomous loop cannot:
- Build product pages (the page slug, frontmatter, base_taxonomy require Step 0 decisions)
- Compute percentiles (no admitted-pool sources are routed)
- Apply Part 19 clean/dirty per-analyte (no within-pair partner relationships defined)
- Apply per-analyte regulatory caps (no `applicable_regulations` array populated)

## What Priority 5 categories likely cover (inferred from the broader HMT&C frame)

Based on Karen's existing master plan and the patterns established by Cat 1 and Cat 5, Priority 5 likely encompasses categories along these axes (purely speculative until Step 0 lock is defined):

- **Cat 2**: Possibly Toddler/Older-Child Foods (3-12 years), distinct from Cat 1's 0-60-month scope.
- **Cat 3**: Possibly Adult Foods or General-Population Foods.
- **Cat 4**: Possibly Dietary Supplements / Nutraceuticals.
- **Cat 6+**: Possibly Cosmetics, Contact Products (jewelry/dental — `piercing-post-assemblies.md` would route here), Medical Foods, or Specialty Diet Categories.

These speculations are NOT the locked architecture; they are placeholders for what Karen's Step 0 process would resolve.

## Recommendation for Priority 5 sequencing

If Karen wants to expand HMTc beyond Cat 1 + Cat 5:

1. **Define Step 0 lock for one new category at a time** (e.g., Cat 2 next). Document it at `raw/reports/category-N-step-0-output-locked-YYYYMMDD.md`.
2. **Re-fire `/loop`** with the new category's Step 0 lock as the directive. The autonomous loop can then mirror the Cat 5 build-out pattern: master skeleton → per-page CC blocks → data-gap-with-rationale blocks → readiness bar achievement where data supports it.
3. **Estimated cycle count per new category**: ~10-15 cycles (similar to Cat 5's cycles 12-22 = ~11 cycles for the full build-out from skeleton to gap-documented).

## Tractable autonomous work that does NOT require Step 0 lock

While Priority 5 build-out is blocked on Karen's input, the loop can still continue these in-scope items:

1. **Re-ingest queue (cycles 21-22 progress; ~5 items remaining)**: Sipahi 2014 Al unit-label disambiguation; Marques 2021 PDF/table-image review; Chekri 2019 broad French TDS row-fit re-classification; Sadiq 2021 Figure 1 visual extraction (low priority); Da Mato 2026 supplementary materials fetch (requires external acquisition).
2. **Frontmatter consistency fixes**: 3 Cat 1 bridge pages missing `hmtc_category: 1` integer (flagged above); awaits Karen confirmation that bridge pages should carry the integer.
3. **gap-report regeneration**: The `data/evidence/hmtc_standards_gap_report.csv` is dated 2026-05-08 (pre-cycle-1). Regenerating it would surface accurate post-cycle-22 cell-state inventory across the existing Cat 1 + Cat 5 corpus. This requires the underlying gap-report-generation tooling, which has not been located in the autonomous environment yet (would need Karen's pointer).
4. **Cat 1 / Cat 5 sample-level extraction continuation**: The remaining Cat 5 cells at "approaching" or "Path A thin" status (~12 cells) could move to at-bar with sample-level extractions from sources already in corpus — primary candidates are FDA 2024 baby-food compliance dataset rows for non-rice cereal Pb/Cd/tAs and root-vegetable purees Pb/Cd/tAs. Multiple cells could be closed with focused per-page CSV pulls.

## Stop conditions check (cycle 23)

No stop conditions triggered. The Priority 5 architectural-gap finding is a scope-discovery deliverable, not a CLAUDE.md-uncovered schema decision. The pattern (build Step 0 lock → build pages → build percentiles → close gaps) is documented and just hasn't been applied to Cat 2-12 yet.

## Cycle 23 commit

This batch report is the cycle-23 deliverable. The autonomous loop will continue with re-ingest queue items in cycle 24+ unless Karen issues a Step 0 lock document for a Cat 2-12 build-out.

End of Priority 5 architecture survey.
