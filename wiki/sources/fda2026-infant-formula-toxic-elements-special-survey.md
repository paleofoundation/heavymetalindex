---
type: source
raw_handle: Digest/toxic_element_infant_formula_prepared_for_posting_20260324.pdf
cite_key: fda2026-infant-formula-toxic-elements-special-survey
title: "Analytical Results for Toxic Elements in Infant Formula, FY2023-FY2025 Special Survey"
authors: ["U.S. Food and Drug Administration"]
year: 2026
publication: "FDA analytical results table"
source_type: government_dataset
evidence_tier: A
license: us-government-work
raw_path: "raw/Digest/toxic_element_infant_formula_prepared_for_posting_20260324.pdf"
raw_sha256: "928429d5c42e7d71ab08f1c2608ee8eac9e0d34df13b4111b3c20f167ed330d0"
metals: [tAs, Pb, Cd, tHg]
products: [infant-formula-powder-non-soy, infant-formula-powder-soy-based, infant-formula-rtf-liquid-non-soy, infant-formula-rtf-liquid-soy-based]
context_products: [infant-formula-concentrated-liquid-non-soy, infant-formula-concentrated-liquid-soy-based, infant-formula-powder-amino-acid-based-out-of-scope]
matrices: [infant-formula, prepared-for-feeding, special-survey]
jurisdictions: [US]
sample_n: 312
sample_analyte_rows: 1248
sample_population: "FDA special survey infant formula samples tested in FY2023-FY2025"
derived_files: [data/evidence/category1_formula_special_survey_samples.csv, data/evidence/category1_formula_concentration_summary.csv, data/evidence/values.jsonl, data/evidence/sources.jsonl]
review_state: machine_extracted
updated: 2026-04-29
---

# FDA 2026 — Infant Formula Toxic Elements Special Survey

## TL;DR

This FDA special-survey table reports total arsenic, lead, cadmium, and total mercury results for 312 infant-formula samples tested in FY2023-FY2025. It is a priority Category 1 formula source because FDA reports powders, concentrated liquids, and ready-to-feed liquids on a prepared-for-feeding basis.

The structured ingest now keeps all 1,248 sample/analyte rows. Four FDA labels map directly to locked Category 1 formula rows, while concentrated-liquid formulas and amino-acid powder are retained as context rather than being silently merged into powder or ready-to-feed rows.

## Extracted Files

- `data/evidence/category1_formula_special_survey_samples.csv` — 1,248 sample/analyte rows with product-label mapping and `row_fit` notes.
- `data/evidence/category1_formula_concentration_summary.csv` — 45 formula summary rows: 28 FDA lower-bound p-value rows plus 17 Digest paper summary/range rows.
- `data/evidence/values.jsonl` — machine-extracted value records under prefix `category1-formula-digest-`.
- `data/evidence/sources.jsonl` — source metadata record for this FDA PDF.

## FDA Source Tables Ingested

The FDA PDF is organized as four analyte-specific infant formula tables. The arsenic table is ingested under the wiki metal key `tAs` because FDA reports total arsenic, not inorganic arsenic.

| FDA table heading | Wiki metal key | Rows | Category 1 treatment |
| --- | --- | ---: | --- |
| Analytical Results for Arsenic in Infant Formula (FY2023-2025) | `tAs` | 312 | Direct for locked powder and ready-to-feed formula rows; concentrated liquids and amino-acid formulas retained as context. |
| Analytical Results for Lead in Infant Formula (FY2023-2025) | `Pb` | 312 | Direct for locked powder and ready-to-feed formula rows; concentrated liquids and amino-acid formulas retained as context. |
| Analytical Results for Cadmium in Infant Formula (FY2023-2025) | `Cd` | 312 | Direct for locked powder and ready-to-feed formula rows; concentrated liquids and amino-acid formulas retained as context. |
| Analytical Results for Mercury in Infant Formula (FY2023-2025) | `tHg` | 312 | Direct for locked powder and ready-to-feed formula rows; concentrated liquids and amino-acid formulas retained as context. |

## Arsenic Characterization

The arsenic table is characterized as an A-tier FDA special-survey dataset for total arsenic in infant formula, expressed in ppb as prepared for feeding. It is not characterized as inorganic arsenic, not treated as a market-share-weighted distribution, and not used as a final threshold by itself.

| FDA product label | Category 1 fit | N | Detected | p50 | p90 | p95 | p100/max | Evidence Fitness |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Infant Formula, Powder, Cow Milk-based | [[products/infant-formula-powder-non-soy]] | 230 | 212 | 0.4 | 1.3 | 2.0 | 4.7 | EF-2 |
| Infant Formula, Powder, Soy-based | [[products/infant-formula-powder-soy-based]] | 38 | 38 | 1.1 | 1.5 | 1.9 | 2.2 | EF-2 |
| Infant Formula, Ready-to-Feed Liquid, Cow Milk-based | [[products/infant-formula-rtf-liquid-non-soy]] | 20 | 20 | 0.7 | 1.2 | 1.3 | 3.0 | EF-2 |
| Infant Formula, Ready-to-Feed Liquid, Soy-based | [[products/infant-formula-rtf-liquid-soy-based]] | 3 | 3 | 1.2 | 1.3 | 1.3 | 1.3 | EF-3 |
| Infant Formula, Concentrated Liquid, Cow Milk-based | [[products/infant-formula-concentrated-liquid-non-soy]] bridge context | 8 | 8 | 0.3 | 0.4 | NA | 0.4 | EF-4 |
| Infant Formula, Concentrated Liquid, Soy-based | [[products/infant-formula-concentrated-liquid-soy-based]] bridge context | 3 | 3 | 0.6 | 0.7 | NA | 0.7 | EF-4 |
| Infant Formula, Powder, Amino Acid-based | outside locked Category 1 rows | 10 | 10 | 1.1 | 1.8 | NA | 2.5 | EF-4 |

## Source Table Counts

Each FDA analyte table contains 312 infant-formula rows. The sample labels are stable across arsenic, lead, cadmium, and mercury.

| FDA product label | Category 1 fit | N per analyte | Evidence Fitness |
| --- | --- | ---: | --- |
| Infant Formula, Powder, Cow Milk-based | [[products/infant-formula-powder-non-soy]] | 230 | EF-2 |
| Infant Formula, Powder, Soy-based | [[products/infant-formula-powder-soy-based]] | 38 | EF-2 |
| Infant Formula, Ready-to-Feed Liquid, Cow Milk-based | [[products/infant-formula-rtf-liquid-non-soy]] | 20 | EF-2 |
| Infant Formula, Ready-to-Feed Liquid, Soy-based | [[products/infant-formula-rtf-liquid-soy-based]] | 3 | EF-3 |
| Infant Formula, Concentrated Liquid, Cow Milk-based | [[products/infant-formula-concentrated-liquid-non-soy]] bridge context | 8 | EF-4 |
| Infant Formula, Concentrated Liquid, Soy-based | [[products/infant-formula-concentrated-liquid-soy-based]] bridge context | 3 | EF-4 |
| Infant Formula, Powder, Amino Acid-based | outside locked Category 1 rows | 10 | EF-4 |

## Direct Category 1 Lower-Bound Summaries

These rows use nearest-rank percentiles and treat `<LOD` as 0 for a lower-bound summary. Results are expressed as prepared for feeding. They are not final HMT&C threshold values.

| Locked row | Metal | N | Detected | p50 | p90 | p95 | p100/max | Notes |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Powder, cow milk-based | tAs | 230 | 212 | 0.4 | 1.3 | 2 | 4.7 | Total arsenic, not iAs. |
| Powder, cow milk-based | Pb | 230 | 169 | 0.2 | 0.4 | 0.5 | 0.6 | Prepared for feeding. |
| Powder, cow milk-based | Cd | 230 | 145 | 0.2 | 0.4 | 0.5 | 1.3 | Prepared for feeding. |
| Powder, cow milk-based | tHg | 230 | 3 | 0 | 0 | 0 | 0.3 | Total mercury, not MeHg. |
| Powder, soy-based | tAs | 38 | 38 | 1.1 | 1.5 | 1.9 | 2.2 | Total arsenic, not iAs. |
| Powder, soy-based | Pb | 38 | 38 | 0.3 | 0.5 | 0.5 | 1.1 | Prepared for feeding. |
| Powder, soy-based | Cd | 38 | 38 | 0.8 | 1.2 | 1.3 | 1.4 | Prepared for feeding. |
| Powder, soy-based | tHg | 38 | 4 | 0 | 0.08 | 0.2 | 0.3 | Total mercury, not MeHg. |
| RTF liquid, cow milk-based | tAs | 20 | 20 | 0.7 | 1.2 | 1.3 | 3 | Total arsenic, not iAs. |
| RTF liquid, cow milk-based | Pb | 20 | 20 | 0.3 | 0.4 | 0.5 | 0.5 | Prepared for feeding. |
| RTF liquid, cow milk-based | Cd | 20 | 11 | 0.09 | 0.6 | 0.6 | 0.7 | Prepared for feeding. |
| RTF liquid, cow milk-based | tHg | 20 | 0 | 0 | 0 | 0 | 0 | Total mercury, not MeHg. |
| RTF liquid, soy-based | tAs | 3 | 3 | 1.2 | 1.3 | 1.3 | 1.3 | Small direct subset. |
| RTF liquid, soy-based | Pb | 3 | 3 | 0.2 | 0.4 | 0.4 | 0.4 | Small direct subset. |
| RTF liquid, soy-based | Cd | 3 | 3 | 0.9 | 1.1 | 1.1 | 1.1 | Small direct subset. |
| RTF liquid, soy-based | tHg | 3 | 1 | 0 | 0.08 | 0.08 | 0.08 | Small direct subset. |

## Context Rows Not Assigned To Locked Category 1

The source also reports concentrated-liquid formulas and amino-acid-based powder. These are retained because they matter for formula exposure context, but they are not assigned to the locked Category 1 formula rows.

| Context label | Metal | N | Detected | p50 | p90 | p100/max | Row-fit note |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| Concentrated liquid, cow milk-based | tAs | 8 | 8 | 0.3 | 0.4 | 0.4 | Bridge context; do not merge into powder or RTF rows without taxonomy decision. |
| Concentrated liquid, cow milk-based | Pb | 8 | 8 | 0.3 | 0.4 | 0.4 | Bridge context. |
| Concentrated liquid, cow milk-based | Cd | 8 | 4 | 0 | 0.5 | 0.5 | Bridge context. |
| Concentrated liquid, cow milk-based | tHg | 8 | 0 | 0 | 0 | 0 | Bridge context. |
| Concentrated liquid, soy-based | tAs | 3 | 3 | 0.6 | 0.7 | 0.7 | Bridge context; small source subset. |
| Concentrated liquid, soy-based | Pb | 3 | 3 | 0.3 | 0.4 | 0.4 | Bridge context; small source subset. |
| Concentrated liquid, soy-based | Cd | 3 | 3 | 1.3 | 1.5 | 1.5 | Bridge context; small source subset. |
| Concentrated liquid, soy-based | tHg | 3 | 1 | 0 | 0.05 | 0.05 | Bridge context; small source subset. |
| Amino-acid-based powder | tAs | 10 | 10 | 1.1 | 1.8 | 2.5 | Specialty formula outside the locked Category 1 rows. |
| Amino-acid-based powder | Pb | 10 | 10 | 0.3 | 0.5 | 0.6 | Specialty formula outside the locked Category 1 rows. |
| Amino-acid-based powder | Cd | 10 | 2 | 0 | 0.1 | 0.1 | Specialty formula outside the locked Category 1 rows. |
| Amino-acid-based powder | tHg | 10 | 7 | 0.1 | 0.3 | 0.3 | Specialty formula outside the locked Category 1 rows. |

## Methods And Censoring

Powders, ready-to-feed liquids, and concentrated liquids were analyzed as sold, then reported as prepared for feeding using label preparation instructions. FDA assumes no added contribution from water used to prepare the product.

Analyses were conducted by ICP-MS. FDA reports total arsenic as arsenic, not inorganic arsenic. FDA reports total mercury, not methylmercury.

| Analyte | LOQ range, prepared for feeding | LOD range, prepared for feeding |
| --- | ---: | ---: |
| tAs | 0.2-0.4 ppb | 0.05-0.2 ppb |
| Pb | 0.1-0.4 ppb | 0.04-0.1 ppb |
| Cd | 0.1-0.3 ppb | 0.04-0.1 ppb |
| tHg | 0.08-0.2 ppb | 0.03-0.08 ppb |

Trace values above LOD and below LOQ are preserved as reported. Values below LOD are reported as `<LOD` in the source and treated as 0 only for the lower-bound summary extraction.

## Evidence Fitness

Direct locked-row subsets with at least 10 reconstructable sample rows are `EF-2` pending review. The ready-to-feed soy-based subset is direct but only `n=3`, so it is `EF-3`. Concentrated-liquid formulas and amino-acid-based powder are `EF-4` context only for the current locked Category 1 build.

## Limitations

This is a special survey, not a market-share-weighted surveillance distribution. It includes infant formula rows from a 344-item infant-formula/toddler-drink special survey; toddler-drink data were not included in this PDF and should not be inferred here.

Prepared-for-feeding normalization makes format comparison possible, but it also means these values must not be silently pooled with dry-powder-as-sold ppb data. Product labels are simplified FDA labels, not brand names.

## Implications

Certification: Priority U.S. A-tier formula dataset for source-scope distributions and current-market context, but final HMT&C limits require review, basis matching, non-detect policy, jurisdiction decisions, and confidence logic.

Courses: Useful example of prepared-for-feeding normalization, explicit LOD/LOQ disclosure, and context-row separation.

App: Supports U.S. formula risk estimates by format/protein-source class where the app can match the simplified label.

Microbiome: No direct microbiome endpoint.

## Wiki Pages Updated

- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-powder-soy-based]]
- [[products/infant-formula-rtf-liquid-non-soy]]
- [[products/infant-formula-rtf-liquid-soy-based]]
- [[products/infant-formula-concentrated-liquid-non-soy]]
- [[products/infant-formula-concentrated-liquid-soy-based]]
- [[raw/Digest/INGESTED]]
