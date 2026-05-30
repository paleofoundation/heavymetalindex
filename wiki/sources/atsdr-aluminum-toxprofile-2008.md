---
type: source
cite_key: atsdr-aluminum-toxprofile-2008
title: "Toxicological Profile for Aluminum"
authors: ["Agency for Toxic Substances and Disease Registry"]
year: 2008
publication: "U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry"
doi: null
no_doi_assigned: true
access_url: "https://www.atsdr.cdc.gov/toxprofiles/tp22.pdf"
source_type: gov-report
evidence_tier: A
raw_path: null
sha256: null
access_date: 2026-04-25
license: us-government-work
metals: [Al]
ingredients: ["[[ingredients/water]]", "[[ingredients/infant-formula-ingredients]]", "[[ingredients/breastmilk]]"]
products: []
jurisdictions: [US]
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-04-25
---

# ATSDR 2008 — Toxicological Profile for Aluminum

## Summary

The September 2008 ATSDR Toxicological Profile for Aluminum is the comprehensive US toxicology synthesis for aluminum, prepared under CERCLA Section 104(i) authority. It supersedes the September 2006 draft for public comment. ATSDR derives Minimal Risk Levels for intermediate-duration oral exposure (15 to 364 days) at **1 mg Al/kg/day** and chronic-duration oral exposure (≥1 year) at **1 mg Al/kg/day**, both anchored on neurotoxic effects in lifetime-exposed mice, with a composite uncertainty factor of 100 applied to a LOAEL of 100 mg/kg/day (Golub et al. 2000). An acute-duration oral MRL was not derived because the available data were considered inadequate.

| Route / Duration | MRL | Equivalent |
| --- | --- | --- |
| Oral / Acute (≤14 days) | Not derived | Inadequate data |
| Oral / Intermediate (15-364 days) | 1 mg Al/kg/day | 1,000 µg Al/kg/day |
| Oral / Chronic (≥1 year) | 1 mg Al/kg/day | 1,000 µg Al/kg/day |
| Inhalation | Multiple by duration; see profile | |

## Key numbers

Critical study and derivation for chronic oral MRL:

| Parameter | Value |
| --- | --- |
| Critical study | Golub et al. 2000 |
| Critical effect | Decreased forelimb and hindlimb grip strength, decreased thermal sensitivity in mice exposed lifetime |
| LOAEL | 100 mg Al/kg/day |
| Composite uncertainty factor | 100 |
| Chronic oral MRL | 100 ÷ 100 = 1 mg Al/kg/day |

Aluminum bioavailability data captured in the profile:

| Source | GI bioavailability |
| --- | --- |
| Drinking water | 0.07 to 0.39 percent |
| Diet (typical aluminum compounds) | 0.1 percent |
| Aluminum lactate (specific compound) | Higher; suggests compound-specific variation |

Reference daily intake context (relative to MRL of 1 mg Al/kg/day = 70 mg Al/day for a 70 kg adult):

| Source | Daily aluminum delivery |
| --- | --- |
| Typical dietary intake | 5 to 15 mg/day |
| Aluminum-containing antacids (typical user) | 100 to 1000 mg/day |
| Drinking water (US EPA SMCL 0.05-0.2 mg/L) | <0.4 mg/day at 2 L/day intake |
| Breast milk concentration | 0.0092 to 0.049 mg/L |
| Milk-based infant formula concentration | 0.058 to 0.15 mg/L |

## Provenance notes

License `us-government-work`. The PDF was retrieved from ATSDR's canonical web URL (`atsdr.cdc.gov/toxprofiles/tp22.pdf`) via WebFetch on 2026-04-25; SHA-256 of the raw PDF is pending future ingestion when the document is added to `raw/reports/`. The agency-website reference is a sufficient primary-source citation for the values recorded above because the ATSDR website is the official publication channel for Toxicological Profiles.

The 2008 profile is the operative ATSDR aluminum reference; ATSDR has not published a finalized post-2008 update, so the September 2008 values remain in force.

## Implications

- Certification: ATSDR's chronic oral MRL of 1 mg Al/kg/day is approximately 7-fold higher than the [[sources/efsa-aluminium-afc-2008|EFSA AFC TWI]] daily-equivalent of approximately 0.14 mg Al/kg/day (1 mg/kg/week ÷ 7). The discrepancy is methodological: ATSDR derives from the LOAEL-with-uncertainty-factor pathway in Golub et al. 2000; EFSA integrates evidence across multiple animal endpoints with different safety-factor structure. HMT&C calibration to the EFSA TWI is the more conservative posture.
- Courses: the route- and duration-specific MRL structure for aluminum is a teachable example of how ATSDR addresses contaminants where renal-impaired subpopulations have substantially different risk profiles from general consumers.
- App: the chronic oral MRL of 1 mg Al/kg/day (70 mg Al/day for 70 kg adult) is the operationally relevant value. For users on aluminum-containing antacids, the antacid contribution alone (100 to 1000 mg/day) exceeds this MRL; the app should query antacid use as a separate input.

## Wiki pages updated on ingest

- [[metals/aluminum]]
- [[regulations/atsdr-aluminum-mrls]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [4a84eb1](https://github.com/paleofoundation/heavymetalindex/commit/4a84eb1) | 2026-05-17 | doi-recovery: replace 141 Scholar fallback URLs with real DOIs and venue URLs |
| [8365d7c](https://github.com/paleofoundation/heavymetalindex/commit/8365d7c) | 2026-05-13 | provenance: DOI audit cleanup + corpus counter refresh |
<!-- END: hmi-page-history -->
