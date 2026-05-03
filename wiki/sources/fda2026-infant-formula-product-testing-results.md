---
type: source
cite_key: fda2026-infant-formula-product-testing-results
title: "FDA's Infant Formula Product Testing Results"
authors: [U.S. Food and Drug Administration]
year: 2026
publication: "FDA"
url: https://www.fda.gov/food/infant-formula-homepage/fdas-infant-formula-product-testing-results
data_url: https://www.fda.gov/media/192124/download?attachment=
source_type: gov-report
evidence_tier: A
raw_path: raw/reports/toxic_element_infant_formula_prepared_for_posting_20260324.xlsx
pdf_path: raw/reports/toxic_element_infant_formula_prepared_for_posting_20260324.pdf
metals: [Pb, Cd, tAs, tHg]
ingredients: [cow-milk, soy, amino-acid-formula]
products: [infant-formula-powder, infant-formula-rtf-liquid, infant-formula-concentrated-liquid]
jurisdictions: [US-FDA]
updated: 2026-05-01
---

# FDA 2026 - Infant Formula Product Testing Results

## TL;DR

FDA reported FY2023-FY2025 market-basket testing of 312 infant-formula samples covering 16 brands and multiple lots per brand. The toxic-element workbook reports lead, cadmium, total arsenic, and total mercury by formula type and protein source, with concentrations expressed as ppb in formula as prepared for feeding. The workbook is the machine-readable source of truth for this ingest; the matching PDF is retained as the human-audit companion artifact.

## Key numbers

- Sample coverage: 312 infant-formula samples; 278 powdered, 11 concentrated liquid, and 23 ready-to-feed; 258 cow's milk, 44 soy, and 10 amino acid-based.
- Overall mercury: not detected in 296 of 312 samples; reported range not detected to 0.3 ppb.
- Overall cadmium: not detected in 106 of 312 samples; reported range not detected to 1.5 ppb; 95% of samples were below 1.1 ppb; median 0.2 ppb.
- Overall lead: not detected in 61 of 312 samples; reported range not detected to 1.1 ppb; 95% of samples were below 0.5 ppb; median 0.2 ppb.
- Overall arsenic: not detected in 18 of 312 samples; reported range not detected to 4.7 ppb; 95% of samples were below 2.0 ppb; median 0.5 ppb.
- Arsenic in the workbook is total arsenic. FDA separately notes that subset testing indicated detected arsenic was inorganic, but the workbook values should still be stored as total arsenic unless the speciation subset is ingested separately.

## Structured Data Extract

The workbook has been extracted into machine-readable evidence files for standards review:

- `data/evidence/category1_formula_special_survey_samples.csv`: sample-level rows by product label, HMTc product slug, metal species, value, basis, and censoring state.
- `data/evidence/category1_formula_concentration_summary.csv`: row-level N, detected count, lower-bound P10/P50/P90/P95, detected range, and evidence-fitness status.

These values are prepared-for-feeding lower-bound values using `<LOD=0`. They should not be converted into dry-powder-as-sold values unless the label-specific preparation factor is explicitly modeled and audited. The P90 values are occurrence statistics for HMTc review, not external regulatory limits.

## Row routing

- [[products/infant-formula-powder-non-soy]]: 240 powder non-soy samples, including 230 cow milk-based and 10 amino acid-based samples. Detected ranges in this routed group were total arsenic 0.1-4.7 ppb, lead 0.1-0.6 ppb, cadmium 0.1-1.3 ppb, and total mercury 0.07-0.3 ppb; non-detects occurred for all four metals.
- [[products/infant-formula-powder-soy-based]]: 38 powder soy-based samples. Detected ranges were total arsenic 0.6-2.2 ppb, lead 0.1-1.1 ppb, cadmium 0.4-1.4 ppb, and total mercury 0.08-0.3 ppb; mercury had 34 non-detects.
- [[products/infant-formula-rtf-liquid-non-soy]]: 20 ready-to-feed cow milk-based samples. Detected ranges were total arsenic 0.3-3.0 ppb, lead 0.2-0.5 ppb, and cadmium 0.09-0.7 ppb; total mercury was not detected in this subgroup.
- [[products/infant-formula-rtf-liquid-soy-based]]: 3 ready-to-feed soy-based samples. Detected ranges were total arsenic 0.9-1.3 ppb, lead 0.2-0.4 ppb, cadmium 0.8-1.1 ppb, and total mercury 0.08 ppb in one sample.
- [[products/infant-formula-concentrated-liquid-non-soy]]: 8 concentrated liquid cow milk-based samples. Detected ranges were total arsenic 0.2-0.4 ppb, lead 0.05-0.4 ppb, and cadmium 0.08-0.5 ppb; total mercury was not detected in this subgroup.
- [[products/infant-formula-concentrated-liquid-soy-based]]: 3 concentrated liquid soy-based samples. Detected ranges were total arsenic 0.6-0.7 ppb, lead 0.3-0.4 ppb, cadmium 1.3-1.5 ppb, and total mercury 0.05 ppb in one sample.
- Taxonomy status: concentrated liquid formula is not a ready-to-feed product and is not part of the locked sixteen HMTc Category 1 rows. The two concentrated-liquid pages are candidate extension pages to prevent silent merging into the ready-to-feed rows.

## Methods (brief)

Samples were collected as part of a special FDA infant-formula survey spanning FY2023-FY2025. Powders, ready-to-feed liquids, and concentrated liquids were analyzed as sold, then reported as prepared for feeding to support comparison across product forms. FDA says conversions were based on label preparation instructions and assumed no contribution from preparation water. Lead, cadmium, mercury, and total arsenic were measured using ICP-MS methods; the workbook reports element-specific LOQ and LOD ranges and marks results below LOD as `<LOD>`.

## Limitations

This is a market-basket survey and should be treated as a snapshot of sampled U.S. retail formula, not a brand ranking or a guarantee about every lot. Brand names are not present in the public workbook. The toxic-element workbook does not include aluminum, nickel, chromium VI, tin, inorganic arsenic values by row, methylmercury, PFAS, pesticides, or phthalates. Concentrated liquid formula is present in the workbook but absent from the locked Category 1 row architecture, so the concentrated-liquid pages remain candidate extensions rather than official HMTc rows.

## Implications

- Certification: Strong A-tier public evidence for row-specific formula toxic-element distributions, but not a source of HMTc thresholds and not a complete HMTc testing-panel source.
- Courses: Useful example of why product form, protein source, prepared-for-feeding basis, LOD/LOQ handling, and arsenic speciation need separate fields.
- App: Supports row-level public evidence features for formula type and protein-source routing. It should not support brand-level claims because the public dataset is anonymized.
- Microbiome: No direct microbiome endpoint.

## Wiki pages updated on ingest

- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-powder-soy-based]]
- [[products/infant-formula-rtf-liquid-non-soy]]
- [[products/infant-formula-rtf-liquid-soy-based]]
- [[products/infant-formula-concentrated-liquid-non-soy]]
- [[products/infant-formula-concentrated-liquid-soy-based]]
- [[lint/2026-05-01-infant-formula-fda-testing-ingest-audit]]
- [[products/regulatory-crosswalk-field-findings]]
