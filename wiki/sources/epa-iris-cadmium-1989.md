---
type: source
cite_key: epa-iris-cadmium-1989
title: "Cadmium (CASRN 7440-43-9) — IRIS Chemical Assessment Summary"
authors: ["U.S. Environmental Protection Agency, National Center for Environmental Assessment"]
year: 1989
publication: "U.S. Environmental Protection Agency, Integrated Risk Information System"
doi: null
source_type: gov-report
evidence_tier: A
raw_path: null
sha256: null
access_date: 2026-04-25
access_url: https://iris.epa.gov/ChemicalLanding/&substance_nmbr=141
license: us-government-work
metals: [Cd]
ingredients: [drinking-water]
products: []
jurisdictions: [US]
superseded_by: null
updated: 2026-04-25
---

# EPA IRIS — Cadmium Chemical Assessment Summary (1989)

## TL;DR

This is the operative US Environmental Protection Agency Integrated Risk Information System chemical assessment summary for cadmium (CASRN 7440-43-9). The oral reference dose was last revised October 1, 1989 and remains in force. EPA IRIS provides two route-specific RfD values reflecting the different absorption efficiency of cadmium in water versus food matrices: **5 × 10⁻⁴ mg/kg/day for drinking water exposure** and **1 × 10⁻³ mg/kg/day for food exposure**. Both values are anchored on significant proteinuria (renal tubular dysfunction) as the critical effect, with NOAELs of 5 × 10⁻³ mg/kg/day (water) and 1 × 10⁻² mg/kg/day (food), and a composite uncertainty factor of 10 applied to each pathway. EPA assigned high confidence to both assessments. The two-route approach reflects EPA's recognition that cadmium absorption from water is approximately twofold higher than from food, requiring different RfD values to deliver equivalent body burden protection.

## Key numbers

| Parameter | Water RfD | Food RfD |
| --- | --- | --- |
| Oral RfD | 5 × 10⁻⁴ mg/kg/day | 1 × 10⁻³ mg/kg/day |
| Daily equivalent (µg/kg/day) | 0.5 | 1.0 |
| NOAEL | 5 × 10⁻³ mg/kg/day | 1 × 10⁻² mg/kg/day |
| Composite uncertainty factor | 10 | 10 |
| Critical effect | Significant proteinuria | Significant proteinuria |
| Confidence | High | High |
| Last revised | 1989-10-01 | 1989-10-01 |
| File first on-line | 1988-03-01 |  |

## Provenance notes

License `us-government-work`. The primary source is the EPA IRIS database web page, which is the canonical agency reference for the assessment summary; values cited here are extracted directly from the EPA IRIS web resource at `iris.epa.gov`. The companion PDF "IRIS Summary" referenced on the EPA IRIS page is a 13-page document not currently held in `raw/`; SHA-256 verification of the raw PDF is pending future ingestion. The agency-website reference is a sufficient primary-source citation for the values recorded above because the IRIS database itself is the EPA's authoritative publication channel for chemical assessment summaries.

The 1989 assessment is the operative EPA IRIS RfD; a 1999 external review draft (separately retained in `raw/reports/EPA_IRIS_Cadmium_ToxicologicalReview.pdf`, ingested as a "deferred historical" document at [[sources/]] but without a finalized source page) proposed a reassessment that was never adopted. The 1989 values therefore remain the operative US federal cadmium oral reference doses.

## Implications

- Certification: EPA IRIS Cd RfD is the most permissive of the major dietary Cd reference values when expressed on a daily per-kg basis (food RfD 1.0 µg/kg/day; water RfD 0.5 µg/kg/day). The food RfD is approximately 10x the [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]] chronic oral MRL of 0.1 µg/kg/day, approximately 2.8x the [[sources/efsa-cadmium-contam-2009|EFSA 2009]] TWI daily-equivalent of 0.36 µg/kg/day, and approximately 1.2x the [[sources/jecfa-91st-cadmium-2022|JECFA]] PTMI daily-equivalent of 0.83 µg/kg/day. HMT&C calibration to the EPA IRIS RfD would be the least-conservative of the four major reference values.
- Courses: the route-specific RfD distinction (water 0.5 vs food 1.0 µg/kg/day) is a teachable example of how EPA accounts for absorption-efficiency variation across exposure routes in the same metal.
- App: the food RfD of 1 × 10⁻³ mg/kg/day (1.0 µg/kg/day) is the operationally relevant value for dietary exposure benchmarking. The water RfD applies separately for drinking-water contributions and should be tracked as a distinct exposure route.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[regulations/epa-iris-cadmium-rfd]]
- [[synthesis]]
