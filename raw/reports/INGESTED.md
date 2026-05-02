# Reports Ingest Log

Updated: 2026-05-02

This folder records locally held report PDFs supplied under `raw/reports/`. The PDFs themselves remain local raw evidence and are not committed because `raw/` is intentionally gitignored. Source pages in `wiki/sources/` carry the citable metadata and SHA-256 verification hashes.

## Source Pages Updated

- `FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf` -> [[sources/fda-ctz-Pb-babyfood-2025]]
- `FDA_CloserToZero_Lead_ActionLevels_2025.pdf` -> [[sources/fda-ctz-Pb-babyfood-2025]] as the FDA guidance landing-page snapshot for the same January 2025 guidance record.

## FDA Lead Processed Baby Food Guidance Artifacts

These two files are not duplicate bytes and should not be given independent evidence weight.

| File | Role | Pages | SHA-256 |
| --- | --- | ---: | --- |
| `FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf` | Full final guidance PDF, copy of record for the action levels, tables, legal status, and definitions | 19 | `8d52935f682a50daf68f6fb7f051c8ddec2cb7b22093ab910fcf1b5f8a32b110` |
| `FDA_CloserToZero_Lead_ActionLevels_2025.pdf` | FDA guidance webpage PDF/snapshot, used to verify official final status, docket, download link, and related FDA links | 3 | `d349ed5cc116261df02ba4c0b6f90e77cb6b9a5ac83aec71120234c588ebd40c` |

The canonical wiki source page is [[sources/fda-ctz-Pb-babyfood-2025]]. The canonical regulation hub created for product pages is [[regulations/fda2025-lead-processed-baby-foods]].
