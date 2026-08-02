---
type: source
cite_key: who-gems-food-database
title: "WHO GEMS/Food contaminants database (Global Environment Monitoring System — Food Contamination Monitoring and Assessment Programme)"
authors: [World Health Organization]
publication: "WHO GEMS/Food"
year: 2026
doi: ""
no_doi_assigned: true
access_url: "https://extranet.who.int/gemsfood/"
source_type: agency_database
evidence_tier: A
raw_handle: GEMS_June1_export
license: "WHO GEMS/Food data-use terms — aggregate-only republication; per-record redistribution restricted. Confirm terms before publishing record-level values."
products: []
ingredients: []
matrices: []
metals: [Pb, Cd, tHg, iAs, tAs, Al, Cr, Ni, Sn]
jurisdictions: [global]
---

# WHO GEMS/Food contaminants database

## Overview

The Global Environment Monitoring System — Food Contamination Monitoring and Assessment Programme (GEMS/Food) is the WHO's global repository of individual-measurement contaminant occurrence data: one record per sample, per analyte, per food, with the food (Codex food code), region, year, detection limit (LOD/LOQ), sampling representativeness, food origin, and analytical basis. It is the authoritative, agency-curated occurrence dataset that national exposure assessments and the JECFA evaluations draw on, which is why it is graded A-tier here.

This source is not a paper and is not ingested through the PDF/Cochrane pipeline. It enters the wiki as structured occurrence data through `tools/evidence/ingest-gems.mjs`, which streams the raw CSVs (held in `raw/`, never committed — Cd alone is ~190 MB), normalises units to ppb (µg/kg), separates censored (below-detection) from detected measurements, keeps wet ("as is") and dry bases apart, and emits per-(analyte × food × basis) distribution aggregates to the structured evidence register. Every value derived from GEMS carries `source_id: who-gems-food-database` for provenance, so any cell can be re-derived from, or contested against, the GEMS records.

## Coverage in this export

The June 2026 export covers Pb, Cd, tHg, iAs/tAs, Al, Cr, Ni, and Sn across the full Codex food taxonomy, with dedicated infant-and-children subsets for the priority analytes. Record counts run to hundreds of thousands per analyte (Lead ~588k rows; Cadmium larger).

## How GEMS feeds contamination profiles

GEMS distributions are pooled, per the synthesis methodology, into the `contamination_profile` blocks on ingredient and product pages: the detected-value percentiles supply `typical_ppb` and `p95_ppb`, the record count supplies sample weight, and the censoring fraction and per-region/per-year spread supply the geographic and temporal variance the defensibility argument relies on. The GEMS food taxonomy maps to wiki ingredient/product slugs through the food crosswalk before any value lands on a page.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
| [c91a7481a](https://github.com/paleofoundation/heavymetalindex/commit/c91a7481a) | 2026-06-01 | major | 2 sections added; narrative text revised |
<!-- END: hmi-page-history -->
