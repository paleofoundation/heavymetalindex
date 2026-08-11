---
type: regulation
rule_id: australia-nhmrc-adwg-6-v4-drinking-water
jurisdiction: AU
agency: "National Health and Medical Research Council"
program: "Australian Drinking Water Guidelines"
metal: [Al, Sb, tAs, Cd, Cr-VI, Pb, tHg, Ni]
matrix: drinking-water
limit_value: multiple
limit_unit: "mg/L"
status: active
effective_date: 2025-06-01
sunset_date: null
source_refs: ["[[sources/nhmrc2025-australian-drinking-water-guidelines]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
---

# Australia NHMRC Drinking Water Guidelines - heavy-metal values

## Scope

The Australian Drinking Water Guidelines set national guidance values for drinking-water quality in Australia. The 2011 guidelines have been periodically updated, and the Version 4.0 file used here is updated June 2025. This page records the metal and metalloid values relevant to drinking water; it does not convert them into food or beverage product standards beyond the water matrix.

## Exact limit and units

The values below are transcribed from the individual fact sheets and the guideline-value table in the NHMRC document. Arsenic is recorded as total arsenic (`tAs`) because the value is stated as arsenic without a CSV-controlled speciation split. Chromium is recorded as `Cr-VI` because the guideline states that hexavalent chromium should not exceed 0.05 mg/L, while total chromium above that concentration triggers separate Cr(VI) analysis.

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Acid-soluble aluminium | Drinking water | 0.2 | mg/L | drinking water; aesthetic post-flocculation guideline |
| Antimony | Drinking water | 0.003 | mg/L | drinking water |
| Arsenic | Drinking water | 0.01 | mg/L | drinking water |
| Cadmium | Drinking water | 0.002 | mg/L | drinking water |
| Hexavalent chromium | Drinking water | 0.05 | mg/L | drinking water |
| Lead | Drinking water | 0.005 | mg/L | drinking water |
| Total mercury | Drinking water | 0.001 | mg/L | drinking water |
| Nickel | Drinking water | 0.02 | mg/L | drinking water |
| Uranium | Drinking water | 0.02 | mg/L | drinking water |

Uranium is shown for completeness because the guidelines list it, but it is not loaded into `data/evidence/regulatory_limits.csv` because `U` is outside the controlled `metal_species` vocabulary for this ingest.

## How tested

The guideline fact sheets describe analytical approaches for each parameter, including atomic absorption spectroscopy, inductively coupled plasma methods, cold-vapour atomic absorption for mercury, and specific chromium methods for total chromium and hexavalent chromium. The document is written for drinking-water monitoring and treatment systems. Its methods do not substitute for food-matrix digestion or product-specific heavy-metal testing methods.

## Enforcement posture

The Australian Drinking Water Guidelines are national guidance used by Australian jurisdictions, water regulators, and water suppliers to manage drinking-water safety. The values are guidance values rather than a single federal food-standard table. The aluminium value is aesthetic and operational, while the other loaded values are health-based guideline values.

## History of changes

The guidelines were published in October 2011, endorsed by NHMRC in August 2010 and NRMMC in January 2011, and updated through later versions. Version 4.0 was updated in June 2025. The 2025 update revised lead guidance and added related information on metals and metalloids leaching from plumbing products.

## How it compares

These values are drinking-water guideline concentrations. They are most comparable to Health Canada drinking-water MACs, EU drinking-water parametric values, US EPA MCLs, FDA bottled-water allowable levels, and WHO drinking-water guideline values. They should not be treated as food-contaminant maximum levels for non-water matrices.

## Sources

- [[sources/nhmrc2025-australian-drinking-water-guidelines]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [19f96492d](https://github.com/paleofoundation/heavymetalindex/commit/19f96492d) | 2026-08-06 | major | 1 source added; contamination-profile values revised; 8 sections added |
<!-- END: hmi-page-history -->
