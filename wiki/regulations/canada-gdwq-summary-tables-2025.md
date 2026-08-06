---
type: regulation
rule_id: canada-gdwq-summary-tables-2025
jurisdiction: CA
agency: "Health Canada"
program: "Guidelines for Canadian Drinking Water Quality"
metal: [Al, Sb, tAs, Cd, Cr-total, Pb, tHg]
matrix: drinking-water
limit_value: multiple
limit_unit: "mg/L"
status: active
effective_date: 2025-12-01
sunset_date: null
source_refs: ["[[sources/healthcanada2025-gdwq-summary-tables]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
---

# Health Canada 2025 drinking-water guideline summary

## Scope

The December 2025 summary tables compile Canadian drinking-water guideline values by parameter. The table classifies health-based values as maximum acceptable concentrations, with separate aesthetic objectives and operational guidance values where those apply. This page records the heavy-metal and metalloid MAC entries that can be used as drinking-water regulatory comparators.

## Exact limit and units

The values below are transcribed from the Health Canada summary table. Arsenic is recorded as total arsenic (`tAs`) because the table states "arsenic" without speciation; mercury is recorded as total mercury (`tHg`) because the table states that the MAC applies to all forms of mercury; chromium is recorded as `Cr-total` because the table states that the MAC is established for total chromium.

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Aluminum | Drinking water | 2.9 | mg/L | drinking water |
| Antimony | Drinking water | 0.006 | mg/L | drinking water |
| Arsenic | Drinking water | 0.010 | mg/L | drinking water |
| Cadmium | Drinking water | 0.007 | mg/L | drinking water |
| Chromium | Drinking water | 0.05 | mg/L | drinking water |
| Lead | Drinking water | 0.005 | mg/L | drinking water |
| Mercury | Drinking water | 0.001 | mg/L | drinking water |
| Uranium | Drinking water | 0.02 | mg/L | drinking water |

The aluminium entry also includes an operational guidance value of 0.1 mg/L. The arsenic and lead entries carry ALARA notes, but the MACs above are the transcribed numeric values for the lookup table.

Uranium is shown for completeness because the Health Canada table lists it, but it is not loaded into `data/evidence/regulatory_limits.csv` because `U` is outside the controlled `metal_species` vocabulary for this ingest.

## How tested

The summary table does not prescribe a single analytical method for each parameter. It states the guideline value, sources, health basis, and application notes. The lead and cadmium entries specify tap sampling considerations because plumbing can affect exposure.

## Enforcement posture

The Guidelines for Canadian Drinking Water Quality are national guideline values compiled by Health Canada and used by Canadian jurisdictions in drinking-water management. The summary table distinguishes health-based MACs from aesthetic objectives and operational guidance values. This page records the MAC values as regulatory comparators and does not treat aesthetic or operational values as food-contaminant limits.

## History of changes

This source is the December 2025 summary-table version. The individual parameter rows show their own publication or reaffirmation years, including aluminium 2021, antimony 2024, arsenic 2006, cadmium 2020, chromium 2018, lead 2019, mercury 1986, and uranium 2019.

## How it compares

The Canadian MACs are drinking-water concentration values. They are most comparable to EU drinking-water parametric values and US EPA maximum contaminant levels. They should not be substituted for food-specific maximum levels or for product-form standards where a separate regulator sets a matrix-specific limit.

## Sources

- [[sources/healthcanada2025-gdwq-summary-tables]]

<!-- BEGIN: hmi-page-history -->
## Update history

This page has no substantive edit history yet. Future revisions will be recorded here once the change lands in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
