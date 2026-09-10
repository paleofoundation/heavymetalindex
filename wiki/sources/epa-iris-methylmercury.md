---
routing_input_gaps: []
routing_input_disposition: "AI scope adjudication from existing source text; existing declarations preserved. All originally missing declarations resolved, including intentional empty context-only fields where applicable."
matrices: ["dietary-exposure", "fish", "seafood"]
type: source
cite_key: epa-iris-methylmercury
title: "Methylmercury (MeHg) — IRIS Chemical Assessment Summary"
authors: ["U.S. Environmental Protection Agency"]
year: 2001
publication: "U.S. Environmental Protection Agency, Integrated Risk Information System"
doi: null
no_doi_assigned: true
access_url: "https://iris.epa.gov/ChemicalLanding/&substance_nmbr=73"
source_type: gov-report
evidence_tier: A
raw_path: raw/reports/EPA_IRIS_Methylmercury_ToxReview.pdf
sha256: c040605d1404be18b5c84849f502f62a4e4d67d754122a1949ff53ba51ca2bce
access_date: 2026-04-25
license: us-government-work
metals: [MeHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]"]
products: []
jurisdictions: [US]
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-09-10
routing_input_adjudication: data/evidence/audits/2026-09-10-fda-tds/routing-input-adjudication.json
---

# EPA IRIS — Methylmercury (MeHg), CASRN 22967-92-6

## Summary

The EPA IRIS chemical assessment for methylmercury (CASRN 22967-92-6) provides the US federal oral reference dose for methylmercury exposure, anchored on developmental neurotoxicity observed in cohort studies (the Faroe Islands and Seychelles cohorts). The IRIS RfD for methylmercury is **0.1 µg/kg body weight per day**. Methylmercury is the dominant species in seafood and is the species addressed in the FDA/EPA fish consumption advice. The IRIS file is currently in step 1 of EPA's reassessment process; the operative RfD remains the value derived in the 2001 assessment.

| Parameter | Value |
| --- | --- |
| CASRN | 22967-92-6 |
| Oral RfD | 0.1 µg MeHg/kg b.w./day (1 × 10⁻⁴ mg/kg/day) |
| Critical study | Faroe Islands cohort (Grandjean et al.); Seychelles cohort considered |
| Critical effect | Developmental neurotoxicity in offspring exposed in utero through maternal seafood consumption |
| Last revised | 2001-07-27 |
| Reassessment status | In step 1 (draft scoping) at IRIS |

## Provenance notes

This source page is created from the file `EPA_IRIS_Methylmercury_ToxReview.pdf`. The companion file `EPA_IRIS_InorganicMercury_ToxReview.pdf` (SHA 88ffb70e) appears to contain the same methylmercury content despite its filename suggesting inorganic mercury; the InorganicMercury filename is misleading. Both files appear to be downloads of the same EPA IRIS methylmercury chemical assessment summary; only the Methylmercury-named file is treated as the source of record here.

## Related evidence
- [[metals/mercury]]
- [[regulations/epa-iris-methylmercury-rfd]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [9a3fa9ddf1](https://github.com/paleofoundation/heavymetalindex/commit/9a3fa9ddf1) | 2026-04-30 | major | 1 section added and 1 removed |
| [eb85df33db](https://github.com/paleofoundation/heavymetalindex/commit/eb85df33db) | 2026-04-25 | major | 3 sections added; narrative text revised |
<!-- END: hmi-page-history -->
