---
type: regulation
rule_id: us-epa-2018-drinking-water-standards-health-advisories
jurisdiction: US
agency: "U.S. Environmental Protection Agency"
program: "Drinking Water Standards and Health Advisories"
metal: [Sb, tAs, Cd, Cr-total, Pb, Al]
matrix: drinking-water
limit_value: multiple
limit_unit: "mg/L"
status: active
effective_date: 2018-03-01
sunset_date: null
source_refs: ["[[sources/usepa2018-drinking-water-standards-health-advisories]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
---

# US EPA 2018 drinking-water standards table - inorganic metal MCLs

## Scope

EPA's 2018 table compiles drinking-water standards and health advisories for public water systems. The table includes enforceable MCLs, MCLGs, and non-enforceable health advisory values. This page records the metal and metalloid entries relevant to the controlled ingest, while distinguishing numeric MCLs from treatment techniques, ranges, health advisories, and unsupported species.

## Exact limit and units

The numeric MCL rows below are transcribed from the "INORGANICS" section of the EPA table. Arsenic is recorded as total arsenic (`tAs`) because the table states arsenic without speciation. Chromium is recorded as `Cr-total` because the table states "Chromium (total)".

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Antimony | Drinking water | 0.006 | mg/L | drinking water |
| Arsenic | Drinking water | 0.01 | mg/L | drinking water |
| Cadmium | Drinking water | 0.005 | mg/L | drinking water |
| Chromium (total) | Drinking water | 0.1 | mg/L | drinking water |
| Lead (at tap) | Drinking water | TT | treatment technique | drinking water |
| Mercury (inorganic) | Drinking water | 0.002 | mg/L | drinking water |
| Uranium | Drinking water | 0.03 | mg/L | drinking water |
| Aluminum | Drinking water | 0.05 to 0.2 | mg/L | secondary drinking-water regulation |

Lead is not loaded because the MCL field is a treatment technique, not a numeric value. Inorganic mercury and uranium are not loaded because the current `regulatory_limits.csv` controlled vocabulary does not support those species. Aluminium is not loaded because the secondary value is a range, not a point value.

## How tested

The table provides benchmark values rather than prescribing all analytical details in the displayed row. It references EPA drinking-water methods and related regulatory programs. The values are for drinking-water compliance and advisory comparison, not for food-matrix testing.

## Enforcement posture

EPA states that MCLs are enforceable standards for regulated drinking-water contaminants in public drinking-water systems. Health advisories are informal technical guidance and are not legally enforceable federal standards. This ingest loads only numeric MCL values that fit the controlled species vocabulary.

## History of changes

The 2018 edition amended the 2012 Drinking Water Standards and Health Advisories tables in March 2018 to fix typographical errors and add health advisories published after 2012. The source identifies itself as EPA 822-F-18-001 from the Office of Water.

## How it compares

The EPA MCL rows are directly comparable to other drinking-water concentration limits such as Health Canada MACs, EU drinking-water parametric values, Australian drinking-water guideline values, FDA bottled-water allowable levels, and WHO guideline values. The EPA table should not be used as a food maximum-level schedule for non-water matrices.

## Sources

- [[sources/usepa2018-drinking-water-standards-health-advisories]]

<!-- BEGIN: hmi-page-history -->
## Update history

This page has no substantive edit history yet. Future revisions will be recorded here once the change lands in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
