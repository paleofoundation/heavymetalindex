---
type: source
raw_handle: Digest/TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf
cite_key: fda2024-toxic-elements-baby-food-compliance-2009-2024
title: "Analytical Results for Arsenic, Lead, Cadmium, and Mercury in Food Intended for Babies and Young Children - TEP (FY2009-FY2024)"
authors: ["U.S. Food and Drug Administration"]
year: 2024
publication: "FDA analytical results table"
source_type: government_dataset
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf"
access_url: "https://www.fda.gov/media/164564/download?attachment="
raw_sha256: "2a295ce054da90d9be2a93a81830840f599c91bfb076b5f04a0a85dba5c055fb"
metals: [tAs, Pb, Cd, tHg]
products: [baby-cereals-dry-non-rice, baby-cereals-dry-rice-based, fruit-purees, non-root-vegetable-purees, root-vegetable-purees, mixed-meals-non-rice, mixed-meals-rice-containing, teething-and-snacks-rice-based]
context_products: [teething-and-snacks-non-rice, grain-based-snacks-rice-status-unspecified, yogurts-custards-puddings-out-of-scope]
excluded_category1_rows: [infant-formula-powder-non-soy, infant-formula-powder-soy-based, infant-formula-rtf-liquid-non-soy, infant-formula-rtf-liquid-soy-based, meat-and-poultry-purees, fish-containing-baby-foods, fruit-juice-not-canned]
matrices: [baby-food, young-child-food, compliance-sampling]
jurisdictions: [US]
sample_population: "FDA compliance-program foods intended for babies and young children, FY2009-FY2024"
derived_files: [data/evidence/category1_fda_baby_food_compliance_summary.csv, data/evidence/category1_fda_baby_food_compliance_samples.csv, data/evidence/values.jsonl, data/evidence/sources.jsonl]
updated: 2026-04-29
---

# FDA 2024 - Toxic Elements Compliance Results For Baby And Young Child Foods

## TL;DR

This FDA compliance-program table is an A-tier government dataset for arsenic, lead, cadmium, and mercury in foods intended for babies and young children from FY2009 through FY2024. It has been ingested as sample-level Category 1 evidence where the FDA baby-food category and product name can be mapped to locked HMTc product rows.

This source does not cover infant formula, fruit juice, fish-containing baby foods, or meat/poultry purees. It also does not report inorganic arsenic; the arsenic table is ingested as source-reported arsenic / [[metals/arsenic-total|total arsenic]] (`tAs`) until speciation evidence says otherwise.

## Extracted Files

- `data/evidence/category1_fda_baby_food_compliance_samples.csv`: 1,944 parsed sample/analyte rows.
- `data/evidence/category1_fda_baby_food_compliance_summary.csv`: 39 row/product/analyte summary records.
- `data/evidence/values.jsonl`: 39 machine-extracted value records with prefix `category1-fda-baby-food-compliance-`.
- `data/evidence/sources.jsonl`: source metadata record for this PDF.

## Source Tables

- Arsenic table: 575 samples from FY2009-FY2024.
- Lead table: 598 samples from FY2009-FY2024.
- Cadmium table: 576 samples from FY2009-FY2024.
- Mercury table: 195 samples from FY2009-FY2024.

FDA reports that arsenic, lead, cadmium, and most mercury analyses were conducted by ICP-MS. Three early mercury rows were reported by X-ray fluorescence as `NDb` under a 5 ppm LOQ.

## Category 1 Mapping

Rows were mapped conservatively:

- FDA `Dry Infant Cereals` with rice named in the product description -> [[products/baby-cereals-dry-rice-based]].
- FDA `Dry Infant Cereals` with no rice named -> [[products/baby-cereals-dry-non-rice]].
- FDA `Fruits` -> [[products/fruit-purees]] as finished fruit baby-food products.
- FDA `Vegetables` containing carrot, sweet potato, beet, or parsnip terms -> [[products/root-vegetable-purees]].
- Other FDA `Vegetables` -> [[products/non-root-vegetable-purees]].
- FDA `Mixtures` with rice named -> [[products/mixed-meals-rice-containing]].
- FDA `Mixtures` with no rice named -> [[products/mixed-meals-non-rice]].
- FDA `Grain-Based Snacks` with rice named -> [[products/teething-and-snacks-rice-based]], but the explicit rice-named subset is small.
- FDA `Grain-Based Snacks` without rice named -> broad snack context only; these rows are not treated as [[products/teething-and-snacks-non-rice]] because ingredient rice status is not isolated.
- FDA `Yogurts/Custards/Puddings` -> context only; no separate locked Category 1 row exists.

## Summary Highlights

The summary values below are lower-bound nearest-rank percentiles in ppb with `<LOD` and `NDb` treated as 0. They are machine-extracted and require review before standards use.

| Category 1 scope | Evidence Fitness | Key lower-bound distribution signals |
| --- | --- | --- |
| [[products/baby-cereals-dry-rice-based]] | EF-2 | `tAs` n=253, p50 115, p90 135, max 348; `Pb` n=256, p90 19.2, max 32; `Cd` n=252, p90 22, max 40.5; `tHg` n=64, p90 2.1, max 4. |
| [[products/baby-cereals-dry-non-rice]] | EF-2 / EF-3 | `tAs` n=25, p90 37.8, max 54.8; `Pb` n=25, p90 8, max 9.9; `Cd` n=25, p90 27.4, max 62.9; `tHg` n=9, all lower-bound 0. |
| [[products/fruit-purees]] | EF-2 | `tAs` n=39, p90 5.2, max 8.7; `Pb` n=44, p90 2.4, max 8; `Cd` n=39, p90 2.2, max 4; `tHg` n=14, p90 0.5, max 0.6. |
| [[products/non-root-vegetable-purees]] | EF-2 | `tAs` n=20, p90 1, max 11; `Pb` n=29, p90 2, max 7.6; `Cd` n=22, p90 12.8, max 23.1; `tHg` n=13, p90 0, max 0.4. |
| [[products/root-vegetable-purees]] | EF-2 | `tAs` n=54, p90 6.4, max 10.3; `Pb` n=59, p90 15.9, max 27.3; `Cd` n=54, p90 31.5, max 42; `tHg` n=25, p90 0.3, max 1.1. |
| [[products/mixed-meals-non-rice]] | EF-2 | `tAs` n=77, p90 5.6, max 13.6; `Pb` n=78, p90 6.8, max 13; `Cd` n=77, p90 5.2, max 44.4; `tHg` n=36, p90 0, max 0.4. |
| [[products/mixed-meals-rice-containing]] | EF-3 | Small rice-named mixture subset: `tAs` n=9, p90/max 28.3; `Pb` n=9, p90/max 11.6; `Cd` n=9, p90/max 7; `tHg` n=3, p90/max 0.3. |
| [[products/teething-and-snacks-rice-based]] | EF-3 | Explicit rice-named snack subset: `tAs` n=2, p50 96.3, p90/max 171; `Pb` n=2, p90/max 6.5; `Cd` n=2, p90/max 3.5. |
| Broad FDA grain-based snacks, rice status not isolated | EF-4 | Context only: `tAs` n=91, p50 61, p90 224, p95 383, max 561; `Pb` n=91, p90 15, max 23.7; `Cd` n=91, p90 27, max 41; `tHg` n=28, p90 2.5, max 3.3. |

## LOD/LOQ Handling

The PDF gives analyte-level ranges for LOQ and LOD, not per-row usable censoring thresholds in the table text. The machine extraction therefore preserves the source-reported text (`<LOD`, `NDb`, or numeric value) and computes lower-bound distributions by substituting 0 for `<LOD` and `NDb`.

- Arsenic LOQs ranged from 0.7 to 103 ppb; LODs ranged from 0.2 to 34.3 ppb.
- Lead LOQs ranged from 0.2 to 100 ppb; LODs ranged from 0.1 to 33.3 ppb.
- Cadmium LOQs ranged from 0.1 to 63 ppb; LODs ranged from 0.03 to 21 ppb.
- Mercury LOQs ranged from 0.8 to 38.4 ppb; LODs ranged from 0.1 to 12.8 ppb for most mercury analyses.

## Evidence Fitness

Direct row-fit subsets with at least 10 reconstructable sample rows are `EF-2` pending review. Small rice-named subsets are `EF-3`. Broad grain-based snacks without isolated rice status and yogurt/custard/pudding rows are `EF-4` context only.

These values do not publish or justify HMTc thresholds. They are occurrence evidence candidates for internal review and product-page synthesis under the shared evidence contract.

## Limitations

- Compliance-program sampling is not a market-share-weighted Total Diet Study.
- `As` is retained as `tAs` / source-reported arsenic, not [[metals/arsenic-inorganic|inorganic arsenic]].
- `Hg` is retained as [[metals/mercury-total|total mercury]], not methylmercury.
- Grain-based snack product names are not enough to infer non-rice status.
- The source does not cover infant formula, fruit juice, fish-containing baby foods, or meat/poultry purees.

## Implications

Certification: priority A-tier occurrence dataset for Category 1 review, especially rice-based dry cereals, root-vegetable purees, and snack context.

Courses: strong example for teaching surveillance sampling, censoring, and why source analyte/speciation labels must travel with values.

App: useful for retrieval and row-specific evidence summaries after reviewed promotion; not sufficient by itself for brand ranking or ingredient-level inference.

Microbiome: no direct microbiome endpoint.

## Wiki Pages Updated On Ingest

- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/fruit-purees]]
- [[products/non-root-vegetable-purees]]
- [[products/root-vegetable-purees]]
- [[products/mixed-meals-rice-containing]]
- [[products/mixed-meals-non-rice]]
- [[products/teething-and-snacks-rice-based]]
- [[products/teething-and-snacks-non-rice]]
