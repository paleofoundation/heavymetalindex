---
type: source
raw_handle: FM_8208921
cite_key: cleary2021-fish-consumption-advisories-usa
title: "Comparison of Recreational Fish Consumption Advisories Across the USA"
authors: [Cleary BM, Romano ME, Chen CY, Heiger-Bernays W, Crawford KA]
year: 2021
publication: "Current Environmental Health Reports"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: B
license: "unknown"
raw_path: raw/markdown/FM_8208921/FM_8208921.md
metals: [MeHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/freshwater-fish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]"]
matrices: [fish-tissue, freshwater-fish, self-caught-fish]
jurisdictions: [US]
near_duplicates: []
sample_n: 46
sample_population: "Technical guidance documents from 46 US states; fish consumption advisory data collected 2019"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Cleary et al. 2021 — Comparison of US state fish consumption advisories for MeHg and PCBs

This comparative review examined the risk assessment assumptions underlying fish consumption advisories for methylmercury (MeHg) and PCBs across 46 US states, identifying substantial cross-state variation in toxicity values, bodyweight assumptions, meal size, and cancer risk levels. The paper quantified how these assumptions translate into divergent target fish tissue concentrations that would trigger advisory issuance, and demonstrated that advisories for the same species in contiguous states bordering shared waterbodies (Lake Michigan, Lower Mississippi River) can differ markedly. The analysis highlights that advisory inconsistency undermines public health messaging for consumers of self-caught fish, particularly sensitive populations.

## Key numbers

State advisory guidance scope:
- 45 of 46 states (96%) developed MeHg advisories; 40 (84%) developed PCB advisories
- Year of guidance publication: 1992–2019; median 2012
- General population bodyweight assumption: 60–80 kg; median 70 kg
- Meal size for general population: 0.113–0.283 kg/meal; median 0.227 kg

MeHg toxicity values across states:
- Reference dose (non-cancer, 39 states): 7×10⁻⁵ to 5.6×10⁻⁴ mg/kg-day; median 1×10⁻⁴ mg/kg-day (EPA value)
- Acute tolerance level (3 states): 1.0–1.5 mg/kg

PCB toxicity values:
- Non-cancer reference dose (12 states): 2×10⁻⁵ to 5×10⁻⁵ mg/kg-day; median 5×10⁻⁵ mg/kg-day
- Cancer slope factor (19 states): 2–7.7 (mg/kg-day)⁻¹; median 2 (mg/kg-day)⁻¹
- Target cancer risk level (22 states): 10⁻⁶ to 10⁻⁴; median 10⁻⁵

No measured fish tissue concentration data; this is a methodological/regulatory comparison study.

## Methods (brief)

Systematic collection and review of state technical guidance documents from 46 US states (2019). Direct abstraction of risk assessment variables (reference doses, cancer slope factors, bodyweight, meal size, target hazard quotient, target cancer risk levels). Where states did not publish target tissue concentrations directly, calculated from abstracted assumptions using EPA equations for chronic non-cancer and cancer health endpoints. Sensitivity analysis quantified relative contribution of each variable to advisory variation. Advisories for 6 Lake Michigan sport fish species (4 states) and 11 Lower Mississippi River species (4 states) compared across jurisdictional boundaries. Montana, North Carolina, South Dakota, and Texas had no technical guidance available.

## Implications

Certification: Directly relevant to MeHg regulatory context for seafood products. The wide cross-state variation in MeHg reference doses (8-fold range) and resulting target tissue concentrations means the stringency of MeHg-related consumer guidance depends substantially on which state's methodology is applied.

Courses: Excellent case study on regulatory inconsistency in US fish advisories; illustrates how the same contaminant concentration can be "safe" or "advisory-warranting" depending on state methodology.

App: Reference for regulatory context on self-caught fish and MeHg advisories; not a direct source of fish tissue concentration values.

## Wiki pages updated on ingest

- [[metals/mercury]]
- [[products/freshwater-fish]]
- [[regulations/us-state-fish-consumption-advisories]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [74a1533](https://github.com/paleofoundation/heavymetalindex/commit/74a1533) | 2026-05-16 | reverse-route: backfill products from matrices for 154 sources |
| [472d023](https://github.com/paleofoundation/heavymetalindex/commit/472d023) | 2026-05-14 | overnight catch-up: kimi-cond02/02b/03 ingest + ingredient profile synthesis + routing triage tooling |
| [ca07956](https://github.com/paleofoundation/heavymetalindex/commit/ca07956) | 2026-05-13 | ingest p4-batch17-g4: 4 pages, 46 FP |
<!-- END: hmi-page-history -->
