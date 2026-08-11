---
type: regulation
rule_id: us-fda-21cfr165-110-bottled-water-2024
jurisdiction: US
agency: "U.S. Food and Drug Administration"
program: "21 CFR 165.110 Bottled water"
metal: [tAs, Sb, Cd, Cr-total, Pb, tHg, Ni, Al]
matrix: bottled-water
limit_value: multiple
limit_unit: "multiple"
status: active
effective_date: 2024-04-01
sunset_date: null
source_refs: ["[[sources/usfda2024-21cfr165110-bottled-water]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
---

# US FDA 21 CFR 165.110 - bottled-water metal limits

## Scope

21 CFR 165.110 sets FDA identity and quality requirements for bottled water. The CFR section covers bottled water intended for human consumption and includes physical, microbiological, chemical, and radiological requirements. This page records the controlled metal and metalloid allowable levels from the 2024 CFR edition.

## Exact limit and units

The values below are transcribed from 21 CFR 165.110. Arsenic is recorded as `tAs`, mercury as `tHg`, and chromium as `Cr-total` because the CFR table does not state inorganic arsenic, methylmercury, or hexavalent chromium. Aluminium is an aesthetically based secondary allowable level, and the CFR states that mineral water is exempt from those aesthetically based allowable levels.

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Arsenic | Bottled water | 0.010 | mg/L | bottled water |
| Antimony | Bottled water | .006 | mg/L | bottled water |
| Cadmium | Bottled water | 0.005 | mg/L | bottled water |
| Chromium | Bottled water | 0.1 | mg/L | bottled water |
| Lead | Bottled water | 0.005 | mg/L | bottled water |
| Mercury | Bottled water | 0.002 | mg/L | bottled water |
| Nickel | Bottled water | 0.1 | mg/L | bottled water |
| Aluminum | Bottled water | 0.2 | mg/L | secondary allowable level; mineral water exempt |
| Uranium | Bottled water | 30 | micrograms per liter | bottled water |

Uranium is shown for completeness because 21 CFR 165.110 lists it, but it is not loaded into `data/evidence/regulatory_limits.csv` because `U` is outside the controlled `metal_species` vocabulary for this ingest.

## How tested

21 CFR 165.110 references incorporated analytical methods for determining compliance with the chemical-quality requirements. The CFR text names specific methods for antimony, cadmium, chromium, lead, mercury, nickel, arsenic, aluminium, and uranium. The methods are water-compliance methods and do not replace food-matrix methods.

## Enforcement posture

FDA bottled-water quality requirements are federal regulatory requirements under the bottled-water standard. Bottled water containing a substance at a level considered injurious to health may be adulterated under the Federal Food, Drug, and Cosmetic Act. This page records the numeric allowable levels as statutory bottled-water limits.

## History of changes

The CFR source is the April 1, 2024 edition. The bottled-water section originated in FDA's bottled-water rulemaking and has been amended over time, including updates to standards and incorporated analytical methods.

## How it compares

FDA bottled-water allowable levels are product-specific water limits. They are most comparable to EPA drinking-water MCLs and other bottled- or packaged-water rules, and they should not be generalized to non-water foods or beverages without a separate governance crosswalk.

## Sources

- [[sources/usfda2024-21cfr165110-bottled-water]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [19f96492d](https://github.com/paleofoundation/heavymetalindex/commit/19f96492d) | 2026-08-06 | major | 1 source added; contamination-profile values revised; 8 sections added |
<!-- END: hmi-page-history -->
