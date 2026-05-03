---
type: product-crosswalk
title: "Regulatory Crosswalk vs Field Findings"
audience: [standards-development, regulator, retailer, brand, legal]
updated: 2026-05-03
sources: 13
---

# Regulatory Crosswalk vs Field Findings

This page is the critical comparison layer between external regulatory values and observed occurrence findings. It is designed for HMTc standards development, regulatory review, retailer and brand due diligence, and legal review.

Regulatory values are not HMTc standards values. They are external legal or guidance context. HMTc candidate values must still pass the evidence-fitness gate: exact metal species, exact product matrix, known basis, deterministic unit normalization, adequate source tier, and review state.

## How To Read This Table

- "Final guidance" and "regulation" rows may be used as external regulatory context or caps.
- FDA final guidance action levels that contain nonbinding recommendations should be displayed as enforcement-relevant federal context, not as statutory legal limits and not as HMTc standards.
- "Draft guidance" rows must not be presented as final legal limits.
- "No matched value loaded" means the current evidence layer has not identified a product-specific regulatory value for that row.
- Field findings are shown only where a structured extraction exists. Otherwise the comparison is intentionally blocked rather than guessed.
- Formula occurrence values are prepared-for-feeding lower-bound values from the FDA workbook, not dry-powder-as-sold values.

## Crosswalk Surface

The detailed comparison surface is generated on each product page from `data/evidence/product_regulatory_crosswalk.csv`. That CSV is now the source of truth for the row-level crosswalk; the product pages carry the readable table close to the top of the page.

High-signal rows after the EU 2023/915 ingest:

| Product row group | Regulatory values now visible | Current comparison read |
| --- | --- | --- |
| [[products/infant-formula-powder-non-soy]] and [[products/infant-formula-powder-soy-based]] | EU Pb 20 ug/kg; EU Cd 10 or 20 ug/kg by protein source; EU iAs 20 ug/kg | Legal values are visible, but direct comparison is blocked because the FDA 2026 formula occurrence rows are prepared-for-feeding and the EU powder limits are product-as-placed; iAs is also blocked where the source reports total arsenic. |
| [[products/infant-formula-rtf-liquid-non-soy]] and [[products/infant-formula-rtf-liquid-soy-based]] | EU Pb 10 ug/kg; EU Cd 5 or 10 ug/kg by protein source; EU iAs 10 ug/kg | Pb and Cd have direct liquid-basis context from FDA 2026 subsets; iAs remains blocked where the occurrence source reports total arsenic. |
| [[products/baby-cereals-dry-non-rice]] and [[products/baby-cereals-dry-rice-based]] | FDA Pb 20 ug/kg; FDA iAs 100 ug/kg for rice cereal; EU Pb 20 ug/kg; EU Cd 40 ug/kg | Limits are visible, but field-finding comparison remains blocked until structured product-row extraction is complete. |
| Purees and mixed meals | FDA Pb values plus EU Pb 20 ug/kg and EU Cd 40 ug/kg; selected baby-food iAs context | Field-finding comparison remains blocked until puree and meal rows are extracted with matrix, basis, and species preserved. |
| Fruit juices | FDA apple-juice iAs and draft Pb only on [[products/fruit-juices-apple-containing]]; FDA other-juice and Juice HACCP context on split rows; EU fruit-juice iAs/Pb context remains scope-blocked where needed | The generic not-canned row is split-required and carries explicit blocked rows instead of inheriting apple-specific values. |
| [[products/teething-and-snacks-rice-based]] | EU iAs 300 ug/kg for named rice cakes/crackers/wafers/flakes/popped rice products | Useful legal context, but product split is required; do not substitute FDA infant-rice-cereal values for snacks. |
| [[products/plant-milks-rice-based]] | EU iAs 30 ug/kg for non-alcoholic rice-based drinks | Direct comparison is available for D'Amato 2026 because product matrix, species, and unit basis match. |

## Data Files

- `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`
- `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`
- `data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv`
- `data/evidence/regulatory_limits.csv`
- `data/evidence/product_regulatory_crosswalk.csv`
- `data/evidence/category1_formula_special_survey_samples.csv`
- `data/evidence/category1_formula_concentration_summary.csv`

## Source And Regulation Nodes

- [[sources/fda2022-tds-elements-fy2018-fy2020]]

- [[sources/fda2026-infant-formula-product-testing-results]]
- [[sources/fera2014-fsa-metals-infant-foods-formula]]
- [[regulations/fda2025-lead-processed-baby-foods]]
- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]]
- [[regulations/fda2023-inorganic-arsenic-apple-juice]]
- [[regulations/fda2022-draft-lead-juice]]
- [[regulations/fda2004-juice-haccp-lead]]
- [[regulations/fda-21cfr165110-bottled-water-lead]]
- [[regulations/eu2023-arsenic-rice-based-drinks]]
- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

## Product-Page Decision Surface

The product pages should be decision-first. Narrative remains useful, but standards reviewers, regulators, retailers, brands, and legal teams need the same compact surface near the top of each row:

| Layer                       | Purpose                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Row identity                | Locked HMTc category, row number, clean or contaminated platform, paired clean counterpart.                |
| External regulatory context | Final rules/guidance, draft guidance, and no-value-loaded cells shown separately.                          |
| Field findings              | N, basis, units, analyte species, censoring policy, decision statistic, and source tier.                   |
| HMTc decision status        | DATA-GROUNDED, PROVISIONAL, HELD TO CLEAN, BLOCKED, or context-only.                                       |
| Legal caveats               | Brand anonymity, non-current-market status, scope mismatch, draft status, and analyte-speciation warnings. |

Regional pooling belongs below this row-level surface, not above it. Pool only after product matrix, analyte species, basis, method, and region fields are comparable.
