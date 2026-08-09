---
type: regulation
rule_id: who2022-drinking-water-guidelines
jurisdiction: WHO
agency: "World Health Organization"
program: "Guidelines for drinking-water quality"
metal: [Sb, tAs, Cd, Cr-total, Pb, Ni]
matrix: drinking-water
limit_value: multiple
limit_unit: "mg/l"
status: active
effective_date: 2022-01-01
sunset_date: null
source_refs: ["[[sources/who2022-guidelines-drinking-water-quality]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
---

# WHO 2022 drinking-water guideline values - metals

## Scope

The WHO Guidelines for drinking-water quality are international public-health guidelines for drinking-water systems. The 2022 source is the fourth edition incorporating the first and second addenda. This page records the metal and metalloid guideline values relevant to the controlled ingest, while preserving cases that are provisional, not formal guideline values, or outside the CSV species vocabulary.

## Exact limit and units

The values below are transcribed from the WHO chemical fact sheets. Arsenic is recorded as `tAs` because the row heading is arsenic without a CSV-controlled speciation split, even though the supporting text discusses inorganic arsenic forms. Chromium is recorded as `Cr-total` because WHO states "Total chromium".

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Antimony | Drinking-water | 0.02 | mg/l | drinking-water |
| Arsenic | Drinking-water | 0.01 | mg/l | drinking-water; provisional guideline value |
| Cadmium | Drinking-water | 0.003 | mg/l | drinking-water |
| Total chromium | Drinking-water | 0.05 | mg/l | drinking-water |
| Lead | Drinking-water | 0.01 | mg/l | drinking-water; provisional guideline value |
| Mercury (inorganic) | Drinking-water | 0.006 | mg/l | drinking-water |
| Nickel | Drinking-water | 0.07 | mg/l | drinking-water |
| Uranium | Drinking-water | 0.03 | mg/l | drinking-water; provisional guideline value |
| Aluminium | Drinking-water | no formal guideline value | not applicable | practicable operational levels discussed |

Inorganic mercury and uranium are shown for completeness but are not loaded into `data/evidence/regulatory_limits.csv` because the current controlled vocabulary does not support those species. Aluminium is not loaded because WHO does not establish a formal aluminium guideline value.

## How tested

The WHO fact sheets describe analytical detection limits and treatment performance for individual substances, including ICP-MS, AAS, and related water-analysis methods. The document is a drinking-water guideline, not a food-testing manual. It does not substitute for product-specific digestion, speciation, or recovery requirements.

## Enforcement posture

WHO guideline values are international public-health benchmarks intended for adaptation into locally relevant drinking-water standards. They are not themselves national legal standards. The WHO text explicitly discusses adapting guideline values to local circumstances and using them as benchmarks for national drinking-water regulation.

## History of changes

The source used here is the fourth edition incorporating the first and second addenda, published in 2022. Several values are marked provisional by WHO, including arsenic, lead, and uranium.

## How it compares

WHO guideline values are most comparable to national drinking-water values such as EPA MCLs, EU parametric values, Health Canada MACs, and Australian drinking-water guideline values. Because WHO values are intended for national adaptation, a jurisdiction-specific legal limit should be preferred where one exists for the same matrix.

## Sources

- [[sources/who2022-guidelines-drinking-water-quality]]

<!-- BEGIN: hmi-page-history -->
## Update history

This page has no substantive edit history yet. Future revisions will be recorded here once the change lands in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
