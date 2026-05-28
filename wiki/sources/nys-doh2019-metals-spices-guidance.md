---
type: source
raw_handle: manual-fetch-kimi
cite_key: nys-doh2019-metals-spices-guidance
title: "Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices"
authors: [Bureau of Toxic Substance Assessment, Center for Environmental Health, New York State Department of Health]
year: 2019
publication: "New York State Department of Health"
doi: null
no_doi_assigned: true
source_type: government-report
evidence_tier: A
license: "public domain"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/05_PB_Vanilla_Spices/Technical Support Document for Derivation of Health-Based Guidance Values for Metals in Spices.pdf"
metals: [iAs, Cd, Cr, Pb]
ingredients: ["[[ingredients/herbs-and-spices]]", "[[ingredients/sesame-seeds]]"]
products: ["[[products/spices]]"]
matrices: [spices, dried-herbs]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Methodology document; no direct food-sampling data; uses FCID consumption data for children and adults across 8 spices"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-14
---

# NYS DOH 2019 — Health-based guidance values for metals in spices

The New York State Department of Health (NYS DOH) Bureau of Toxic Substance Assessment derived health-based guidance values for inorganic arsenic, cadmium, hexavalent chromium, and lead in spices, at the request of the NYS Department of Agriculture & Markets. Using standard EPA risk-assessment methodology (hazard identification, dose-response, exposure assessment, risk characterization), the document establishes recommended screening-level concentrations in spices that would be protective of both cancer and noncancer health effects for children and adults. The guidance explicitly calls for speciation of arsenic (iAs, not tAs) and chromium (Cr-VI, not total Cr) for comparison with the derived values, and acknowledges that lead has no threshold, requiring an as-low-as-achievable approach.

## Key numbers

Summary of recommended health-based guidance values (Table 1), in mg/kg (equivalent to ppm, milligrams of metal per kilogram of spice):

| Metal | Noncancer — child scenario | Noncancer — adult scenario | Cancer health-based value |
|---|---|---|---|
| Inorganic arsenic (iAs) | 0.53 mg/kg | 2.4 mg/kg | 0.0030 mg/kg |
| Cadmium | 0.019 mg/kg | 0.61 mg/kg | 0.45 mg/kg |
| Chromium (Cr-VI only) | 1.6 mg/kg | 5.5 mg/kg | 0.058 mg/kg |
| Lead | 0.21 mg/kg | — | not derived (no threshold) |

Recommended guidance value for each metal = the most protective (lowest) value across scenarios. For example:
- iAs: 0.0030 mg/kg (3 ppb) — cancer-protective value for adults governs
- Cd: 0.019 mg/kg (19 ppb) — noncancer child scenario governs
- Cr-VI: 0.058 mg/kg (58 ppb) — cancer value governs
- Pb: 0.21 mg/kg (210 ppb) — noncancer child scenario, with note that no threshold exists

Spice consumption rates used (FCID data):
- Children 0 to <7 years: 114 mg/kg bw/day (central tendency, all races/genders, 8 spices including sesame)
- Adults: 32.9 mg/kg bw/day (central tendency, all races/genders, 8 spices)
- Sesame seed was the single largest contributor to total spice consumption; guidance values were derived with sesame included
- Relative source contribution for noncancer values: 20% of reference dose assigned to spices (5-fold safety margin)

Reference doses used: iAs noncancer RfD from US EPA IRIS; Cd RfD from ATSDR/EPA; Cr-VI RfD from EPA IRIS; Pb BMDL from EFSA/EPA.

Toxicity values for cancer: iAs oral slope factor, Cd slope factor, Cr-VI oral slope factor (no cancer value derived for Pb given uncertainty).

Race/ethnic group analyses: "Other Hispanic," "Non-Hispanic Black," "Mexican American," and "other races" had higher central tendency and upper-end spice consumption rates than the all-races combined estimate. The guidance is based on all-races combined for robustness, but the report flags that these subpopulations may have higher exposure.

## Methods (brief)

Methodology document only; no original food sampling data. Exposure assessment draws on FCID (Food Commodity Intake Database, 2019 version) and EPA Exposure Factors Handbook (2011). Dose-response assessment draws on IRIS, ATSDR, and EFSA oral toxicity values. Standard EPA risk-assessment equations used throughout. Noncancer HBGVs calculated using Reference Dose × Relative Source Contribution / Total Spice Consumption Rate. Cancer HBGVs calculated using 10⁻⁶ cancer risk level / Total Spice Consumption Rate.

Key limitation: guidance values are expressed as concentrations in any single spice, not as limits per serving or per spice type. They are intended as screening or action-level triggers for regulatory surveillance, not as per-product certification limits without further context.

## Implications

**Certification:** The NYS DOH guidance values are the most explicit US-jurisdiction health-based benchmarks for metals in spices by population subgroup. The cancer-protective iAs value (0.0030 mg/kg = 3 ppb) and the child-protective Cd value (0.019 mg/kg = 19 ppb) are far below typical EU regulatory maxima for spices (e.g., EU Regulation 2023/915 sets 1.0 mg/kg Cd for dried herbs/spices). HMT&C standards for spice and herb categories should reference these values as the health-protective floor when the certification is being positioned as a more protective alternative to EU or FDA status-quo limits. The speciation requirement (iAs not tAs; Cr-VI not total Cr) is fully consistent with CLAUDE.md Part 14.

**Courses:** Excellent teaching example for how risk assessment methodology translates a toxicological reference dose into a food-matrix action level, and why the same toxicological endpoint produces very different concentration limits depending on consumption rate (spices vs. staple foods).

**App:** The FCID-derived consumption rate breakdown by race/ethnic group is load-bearing data for the app's vulnerable-subpopulation flagging logic. "Mexican American" and "other Hispanic" users who report high spice consumption may have exposures near or above the child-scenario-based guidance values even at spice concentrations well below EU regulatory maxima.

## Wiki pages updated on ingest

- [[ingredients/herbs-and-spices]]
- [[ingredients/sesame-seeds]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/chromium-hexavalent]]
- [[regulations/nys-metals-spices-guidance-2019]]
- [[health/vulnerable-populations]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [99e9ccb](https://github.com/paleofoundation/heavymetalindex/commit/99e9ccb) | 2026-05-14 | ingest kimi-cond05: 21 pages from condiment_papers/05_PB_Vanilla_Spices, 1 image-only FP, 3 skips |
<!-- END: hmi-page-history -->
