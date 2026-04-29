# Digest Ingest Log

Updated: 2026-04-29

This folder records the Digest PDF batch supplied locally at `/Users/karenpendergrass/Desktop/heavy-metal-index/raw/Digest`. The PDFs themselves remain local raw evidence and are not committed because `raw/` is intentionally gitignored. Source pages in `wiki/sources/` point back to the expected raw paths.

## Source Pages Created

- `1-s2.0-S0889157518301868-am.pdf` -> [[sources/chekri2019-french-infant-toddler-tds-trace-elements]]
- `1471-2431-10-63.pdf` -> [[sources/burrell2010-aluminium-in-infant-formulas]]
- `1471-2431-13-162.pdf` -> [[sources/chuchu2013-aluminium-in-infant-formulas]]
- `Lead  cadmium and aluminum in Canadian infant formulae  oral electrolytes and glucose solutions.pdf` -> [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- `TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf` -> [[sources/fda2024-toxic-elements-baby-food-compliance-2009-2024]]
- `ijerph-18-05073.pdf` -> [[sources/astolfi2021-italy-powdered-infant-formula-elements]]
- `kazi2009.pdf` -> [[sources/kazi2009-toxic-elements-in-infant-formulae]]
- `nuaf138.pdf` -> [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- `toxic_element_infant_formula_prepared_for_posting_20260324.pdf` -> [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

## Structured Extraction Completed

- `TEP-AsPbCdHg-TEP-FY2009-FY2024-12162024.pdf` -> `data/evidence/category1_fda_baby_food_compliance_samples.csv`, `data/evidence/category1_fda_baby_food_compliance_summary.csv`, and value records with prefix `category1-fda-baby-food-compliance-`.
- `toxic_element_infant_formula_prepared_for_posting_20260324.pdf` -> `data/evidence/category1_formula_special_survey_samples.csv`, `data/evidence/category1_formula_concentration_summary.csv`, source metadata in `data/evidence/sources.jsonl`, and value records with prefix `category1-formula-digest-`.

## Duplicate Raw Files

The following two Digest PDFs are byte-identical and have one canonical source page, [[sources/fsa2016-infant-food-formula-metals-survey]]:

- `Multi-element Infant foods_FS102048 final report.pdf`
- `Multi-element Infant foods_FS102048 final report (1).pdf`
