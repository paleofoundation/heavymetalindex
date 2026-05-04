# Reports Ingest Log

Updated: 2026-05-04

This folder records locally held report PDFs supplied under `raw/reports/`. The PDFs themselves remain local raw evidence and are not committed because `raw/` is intentionally gitignored. Source pages in `wiki/sources/` carry the citable metadata and SHA-256 verification hashes.

## Current Audit State

The report folder has now been reconciled through `npm run evidence:raw-inventory`.

| State | Count |
| --- | ---: |
| Report PDFs held locally | 51 |
| Matched by source-page raw path or related raw path | 44 |
| Matched by source-page SHA-256 | 1 |
| Deliberately not promoted as independent source pages | 6 |
| Report PDFs requiring new source pages | 0 |

The machine-readable queue is tracked at `data/evidence/raw_ingest_inventory.csv`; deliberate overrides are tracked at `data/evidence/raw_ingest_overrides.json`.

## Deliberate Non-Public-Source Decisions

These files are retained in raw storage but should not be promoted as independent source pages in the ordinary reports ingest:

| File | Decision |
| --- | --- |
| `2512.24601v2.pdf` | Rejected as out of scope: Recursive Language Models paper, not an HMI food/toxicology/regulatory source. |
| `ATSDR-2023-0004-0004_content.pdf` | Superseded draft nickel toxicological profile; final ATSDR nickel profile is represented by `wiki/sources/atsdr-nickel-toxprofile-2024.md`. |
| `Biochem_Mercury_Ralston_2008.pdf` | Filename/content misfire; file contains Mitsuhashi et al. 2008 on pyrogallol/polyphenol apoptosis, not the intended Ralston mercury source. |
| `EPA_IRIS_Cadmium_ToxicologicalReview.pdf` | Deferred historical artifact; marked external review draft/do-not-quote and not the operative EPA IRIS cadmium value. |
| `EPA_IRIS_InorganicArsenic_Summary.pdf` | Companion summary artifact for `wiki/sources/epa-iris-inorganic-arsenic-2025.md`; do not create duplicate source weight. |
| `EPA_IRIS_InorganicMercury_ToxReview.pdf` | Misleading filename; companion/mislabeled methylmercury IRIS artifact already represented by `wiki/sources/epa-iris-methylmercury.md`. |

## Source Pages Updated

- `FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf` -> [[sources/fda-ctz-Pb-babyfood-2025]]
- `FDA_CloserToZero_Lead_ActionLevels_2025.pdf` -> [[sources/fda-ctz-Pb-babyfood-2025]] as the FDA guidance landing-page snapshot for the same January 2025 guidance record.
- `Commission Regulation (EU) 2023-915 on maximum levels for certain contaminants in food.pdf` -> [[sources/eu-2023-915-contaminants-maximum-levels]]

## FDA Lead Processed Baby Food Guidance Artifacts

These two files are not duplicate bytes and should not be given independent evidence weight.

| File | Role | Pages | SHA-256 |
| --- | --- | ---: | --- |
| `FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf` | Full final guidance PDF, copy of record for the action levels, tables, legal status, and definitions | 19 | `8d52935f682a50daf68f6fb7f051c8ddec2cb7b22093ab910fcf1b5f8a32b110` |
| `FDA_CloserToZero_Lead_ActionLevels_2025.pdf` | FDA guidance webpage PDF/snapshot, used to verify official final status, docket, download link, and related FDA links | 3 | `d349ed5cc116261df02ba4c0b6f90e77cb6b9a5ac83aec71120234c588ebd40c` |

The canonical wiki source page is [[sources/fda-ctz-Pb-babyfood-2025]]. The canonical regulation hub created for product pages is [[regulations/fda2025-lead-processed-baby-foods]].

## WHO GEMS/Food Contaminants Heavy-Metal Exports

These CSV exports are source-data artifacts for [[sources/who-gemsfood-heavy-metal-contaminants]]. They remain local raw evidence under `raw/reports/gemsfood-contaminants/`; the tracked manifest is `data/evidence/who_gemsfood_heavy_metals_raw_exports.csv`.

- Exports preserved: 193 CSV files.
- Normalized rows: 2,109,234 rows in `raw/reports/gemsfood-contaminants/normalized/who_gemsfood_heavy_metals_samples.csv`.
- Summary rows: 14,027 rows in `data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv`.
- Manifest: `data/evidence/who_gemsfood_heavy_metals_raw_exports.csv` records query, row count, access date, raw path, and SHA-256 for every export.
