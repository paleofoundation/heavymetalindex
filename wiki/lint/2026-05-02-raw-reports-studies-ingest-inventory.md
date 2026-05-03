---
title: Raw Reports and Studies Ingest Inventory
type: lint
updated: 2026-05-02
---

# Raw Reports and Studies Ingest Inventory

This audit controls the next ingest wave for `raw/reports` followed by `raw/studies`. The generated CSV is tracked at `data/evidence/raw_ingest_inventory.csv`; the JSON summary is tracked at `data/evidence/raw_ingest_summary.json`.

## Counts

| Bucket | PDF files |
| --- | ---: |
| Reports | 3 |
| Studies | 331 |
| Total | 334 |

## Source-Page Status

| Status | Count |
| --- | ---: |
| matched_by_raw_path | 12 |
| matched_by_sha256 | 3 |
| no_source_page | 319 |

## Priority Buckets

| Priority | Count |
| --- | ---: |
| P0-report-regulatory-toxicology | 2 |
| P1-report-context | 1 |
| P1-study-product-relevant | 36 |
| P2-study-background | 295 |

## Reports Needing Source Pages First

- `raw/reports/fda-tds-elements-analytical-results-key-fy2018-fy2020.pdf`

## Reports Deliberately Not Promoted as Independent Source Pages

No report PDFs are currently marked as non-public ingest artifacts.

## Product-Relevant Study Queue

These study PDFs should be reviewed before lower-priority mechanistic/background papers because they are more likely to alter product, ingredient, or HMTc standards-development pages.

### Source-Page Gaps

- `raw/studies/FM_10447601_Characterisation_of_a_low_methane_emission_rice_cultivar_sui.pdf`
- `raw/studies/FM_10954997_Lead_Cadmium_and_Arsenic_in_Raw_Milk_Produced_in_the_Vicinit.pdf`
- `raw/studies/FM_11074271_Assessment_of_macro_trace_and_toxic_element_intake_from_rice.pdf`
- `raw/studies/FM_11111292_Dietary_intake_of_methylmercury_by_0-5_years_children_using.pdf`
- `raw/studies/FM_11876284_Assessing_trace_elements_in_soils_and_rice_insights_from_the.pdf`
- `raw/studies/FM_12286494_Analysis_of_heavy_metal_content_in_protein_powders_available.pdf`
- `raw/studies/FM_12507951_Hematological_Parameters_and_Mercury_Exposure_in_Children_Li.pdf`
- `raw/studies/FM_12583816_Risk_assessment_of_heavy_metals_in_north_of_Iran_Sari_rice_a.pdf`
- `raw/studies/FM_3765370_Health_risk_assessment_of_heavy_metals_in_rice_to_the_popula.pdf`
- `raw/studies/FM_3958402_Tungsten_distribution_in_soil_and_rice_in_the_vicinity_of_th.pdf`
- `raw/studies/FM_5331031_Arsenic_Transport_in_Rice_and_Biological_Solutions_to_Reduce.pdf`
- `raw/studies/FM_5394917_Genetic_diversity_of_arsenic_accumulation_in_rice_and_QTL_an.pdf`
- `raw/studies/FM_5425496_Urinary_Arsenic_Speciation_in_Children_and_Pregnant_Women_fr.pdf`
- `raw/studies/FM_5940663_Infants_dietary_arsenic_exposure_during_transition_to_solid.pdf`
- `raw/studies/FM_6505394_High_arsenic_in_rice_is_associated_with_elevated_genotoxic_e.pdf`
- `raw/studies/FM_6825132_Rice_production_threatened_by_coupled_stresses_of_climate_an.pdf`
- `raw/studies/FM_7121289_Environmental_Toxicology_Children_at_Risk.pdf`
- `raw/studies/FM_7359620_Heavy_Metals_and_PAHs_in_Meat_Milk_and_Seafood_From_Augusta.pdf`
- `raw/studies/FM_8082930_Maternal_methylmercury_exposure_through_rice_ingestion_and_c.pdf`
- `raw/studies/FM_8164619_Levels_of_heavy_metal_cadmium_in_rice_Oryza_sativa_L_produce.pdf`
- `raw/studies/FM_8207007_Developmental_toxicity_of_cadmium_in_infants_and_children_a.pdf`
- `raw/studies/FM_8342936_Risk-Benefit_Assessment_of_Consumption_of_Rice_for_Adult_Men.pdf`
- `raw/studies/FM_8891379_Measurement_of_Polycyclic_Aromatic_Hydrocarbons_in_Baby_Food.pdf`
- `raw/studies/FM_8924265_Infant_infections_respiratory_symptoms_and_allergy_in_relati.pdf`
- `raw/studies/FM_9271943_A_Narrative_Review_of_Toxic_Heavy_Metal_Content_of_Infant_an.pdf`
- `raw/studies/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan.pdf`
- `raw/studies/FM_9941557_Wheat_Selenium-binding_protein_TaSBP-A_enhances_cadmium_tole.pdf`
- `raw/studies/lead-in-infant-formula-1992.pdf`

### Matched, Still Needing Completeness Audit

- `raw/studies/Content and Dietary Exposure Assessment of Toxic Elements in Infant Formulas from the Chinese Market.pdf` — matched_by_raw_path; wiki/sources/chung2021-china-infant-formula-toxic-elements.md
- `raw/studies/FM_10375490_Arsenic_in_brown_rice_do_the_benefits_outweigh_the_risks.pdf` — matched_by_raw_path; wiki/sources/su-2023-arsenic-brown-rice.md
- `raw/studies/FM_10883532_Chemical_characterization_of_baby_food_consumed_in_Italy.pdf` — matched_by_raw_path; wiki/sources/meli2024-chemical-characterization-baby-food-italy.md
- `raw/studies/FM_11614607_Engineering_rice_Nramp5_modifies_cadmium_and_manganese_uptak.pdf` — matched_by_raw_path; wiki/sources/inoue-2024-rice-nramp5-cadmium.md
- `raw/studies/FM_12378713_Arsenic_speciation_using_HPLC-ICP-MS_in_white_and_brown_rice.pdf` — matched_by_raw_path; wiki/sources/navaretnam-2025-rice-as-speciation.md
- `raw/studies/FS102048 Infants metal survey FSIS pdf version.pdf` — matched_by_raw_path; wiki/sources/fsa2016-infant-food-formula-metals-survey.md
- `raw/studies/Infants  and young children s dietary exposures to lead and cadmium  FDA total diet study 2018 2020.pdf` — matched_by_raw_path; wiki/sources/spungen2024-fda-tds-infant-lead-cadmium.md
- `raw/studies/Toxic Metals and Metalloids in Infant Formulas Marketed in Brazil, and Child Health Risks According to the Target Hazard Quotients and Target Cancer Risk.pdf` — matched_by_raw_path; wiki/sources/almeida2022-brazil-infant-formula-toxic-metals.md

## Operating Rule

Do not treat a row as publicly ingested merely because it has a source page. A completed ingest requires source metadata, evidence-fitness classification, routeable value/claim extraction, page updates where warranted, and verification that ingredient-only findings live on ingredient pages rather than product pages.
