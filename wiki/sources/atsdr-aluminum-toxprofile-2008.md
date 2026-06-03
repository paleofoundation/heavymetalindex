---
type: source
raw_handle: MFK_tp22
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
raw_path: "raw/Manual Fetch Kimi /June 3 Folder/tp22.pdf"
raw_sha256: f959d09859641c06040b2ab1fbd280bb8de0f30adb0bf6be1980d5d915833b42
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
near_duplicates: []
sample_n: null
sample_population: "ATSDR toxicological profile compiling aluminum toxicology, exposure, regulatory, and environmental fate evidence; not a new primary sampling study."
updated: 2026-06-03
---

# ATSDR 2008 — Toxicological Profile for Aluminum

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

## Methods (brief)

This is an ATSDR toxicological profile rather than a single experimental paper. The profile reviews human, animal, mechanistic, exposure, toxicokinetic, environmental fate, and regulatory literature for aluminum and aluminum compounds. Its oral MRL derivation focuses on neurotoxicity endpoints in animal studies, especially lifetime mouse exposure evidence, then applies ATSDR's standard MRL uncertainty-factor framework. The profile also compiles dietary, drinking-water, infant-formula, medication, and consumer-product exposure information; these are exposure-context values and literature summaries, not a new ATSDR sampling campaign.

## Implications

- Certification: ATSDR's chronic oral MRL of 1 mg Al/kg/day is approximately 7-fold higher than the [[sources/efsa-aluminium-afc-2008|EFSA AFC TWI]] daily-equivalent of approximately 0.14 mg Al/kg/day (1 mg/kg/week ÷ 7). The discrepancy is methodological: ATSDR derives from the LOAEL-with-uncertainty-factor pathway in Golub et al. 2000; EFSA integrates evidence across multiple animal endpoints with different safety-factor structure. HMT&C calibration to the EFSA TWI is the more conservative posture.
- Courses: the route- and duration-specific MRL structure for aluminum is a teachable example of how ATSDR addresses contaminants where renal-impaired subpopulations have substantially different risk profiles from general consumers.
- App: the chronic oral MRL of 1 mg Al/kg/day (70 mg Al/day for 70 kg adult) is the operationally relevant value. For users on aluminum-containing antacids, the antacid contribution alone (100 to 1000 mg/day) exceeds this MRL; the app should query antacid use as a separate input.

## Wiki pages this source may touch

- [[metals/aluminum]]
- [[regulations/atsdr-aluminum-mrls]]

## Verification notes

The June 3 manual-fetch PDF was checked against ATSDR's canonical `tp22.pdf` title metadata and text extraction. Page count is 357. The canonical raw file `raw/Manual Fetch Kimi /June 3 Folder/tp22.pdf` and duplicate file `raw/Manual Fetch Kimi /June 3 Folder/tp22 2.pdf` are byte-identical with SHA-256 `f959d09859641c06040b2ab1fbd280bb8de0f30adb0bf6be1980d5d915833b42`; the duplicate is recorded in the tracker as a duplicate rather than a second source. No DOI is assigned. The ATSDR website is the official publication channel for Toxicological Profiles, and the access URL remains the canonical agency PDF URL.

The 2008 profile is the operative ATSDR aluminum toxicological profile; no finalized post-2008 replacement was identified in the existing corpus at this ingest point. This page records MRL and exposure-context values only. It should not be used as an aluminum occurrence dataset for food, infant formula, drinking water, antacids, or cookware.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
<!-- END: hmi-page-history -->
