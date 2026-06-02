---
type: ingredient
commodity: shark
title: "Shark"
label: "Shark"
aliases: []
category: fish-seafood
contamination_profile:
  Pb: { status: populated, typical_ppb: [10, 100], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [10, 100], p95_ppb: null, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [500, 2000], p95_ppb: 4000, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [bioaccumulation, trophic-level, harvest-region, species]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Shark

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | — | — | — | — | — |
| Cd | — | — | — | — | — |
| iAs | — | — | — | — | — |
| tAs | — | — | — | — | — |
| tHg | — | — | — | — | — |
| Ni | — | — | — | — | — |
| Al | — | — | — | — | — |
| Cr | — | — | — | — | — |
| Sn | — | — | — | — | — |
| U | — | — | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/garofalo2025-seafood-cd-pb-hg-italy-10yr\|Garofalo et al. 2025]]. *Monitoring of Cadmium, Lead, and Mercury Levels in Seafood Products: A Ten-Year Analysis*, Foods 14(3):451 | 2025 | Peer-reviewed | IT/EU Cd, Pb, tHg occurrence in 5,854 seafood samples (9,809 analyses: 4,300 THg + 3,338 Cd + 2,171 Pb) collected and analyzed by Istituto... (n=5854) |
| 2 | [[sources/xu2025-heavy-metals-aquatic-foods-global\|Xu et al. 2025]]. *Heavy metal risks in aquatic foods*, Environment International | 2025 | Peer-reviewed | tHg, Cd, Pb, tAs occurrence in 138,281 test records for aquatic-food products extracted from the WHO Food Safety Collaborative Platform (FOSCOLLAB), which integrates JECFA,... (n=138281) |
| 3 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 4 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016: Proceedings of International PhD Students Conference, pp. 651-656 | 2016 | Conference proceedings | CZ/EU tHg, Cd, Pb occurrence in 33 species of fish purchased in Brno City (Czech Republic) markets from 17 FAO localities, September 2015–June 2016;... (n=159) |
| 5 | [[sources/epa1999-mercury-update-fish-advisories\|EPA 1999]]. *Mercury Update: Impact on Fish Advisories*, US EPA Fact Sheet EPA-823-F-99-016 | 1999 | Government report | US tHg, MeHg occurrence in 1,931 state-issued fish-consumption advisories in 40 states as of December 1998; cited fish-tissue mercury data drawn from EPA... (n=1931) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Shark sits at the apex of marine food webs and carries the highest methylmercury bioaccumulation among commonly consumed seafood. Shark species are long-lived (decades for the largest species), large-bodied predators that consume smaller predatory fish, which multiplies the methylmercury concentration at every trophic step. The biomagnification factor from primary producer to apex predator across marine food webs spans three to four orders of magnitude for [[metals/mercury-methyl|methylmercury]]; shark muscle commonly carries 500 to 2,000 ppb tHg with documented outliers above 4,000 ppb in the larger species ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil 2019]], [[sources/smolikova2016-heavy-metals-fish-czech|Smolikova 2016]]).

Other HMTc-panel analytes ([[metals/cadmium|Cd]], [[metals/lead|Pb]], inorganic [[metals/arsenic-inorganic|iAs]]) sit at trace levels in shark muscle relative to MeHg because shark physiology partitions cadmium into liver and kidney rather than muscle, lead does not biomagnify through marine food chains the way mercury does, and arsenic in marine fish is dominantly organic arsenobetaine (low toxicity) rather than inorganic. The dominant heavy-metal concern for shark is methylmercury, and that concern is consequential enough that the FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, women of childbearing age, breastfeeding mothers, and young children.

## Ranges by source, region, and variety

Per-species variance is the dominant driver: all consumed shark species carry elevated MeHg, but larger and longer-lived species (great white shark, tiger shark, hammerhead, mako, bull shark) carry the highest concentrations because of body size and lifespan. Smaller shark species (dogfish, smooth-hound, blacktip) carry lower MeHg but still elevated relative to non-shark fish.

Geographic variance is dominated by the global methylmercury background plus regional fishery and watershed loading. Shark from the Mediterranean, Caribbean, and certain Pacific fisheries carry the highest documented MeHg in some surveys ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana|Rodriguez-Mendivil 2019]]). The Czech market survey of imported shark muscle ([[sources/smolikova2016-heavy-metals-fish-czech|Smolikova 2016]]) documents tHg ranges in line with the Mediterranean and Atlantic baseline. Region-specific point-source mercury pollution (mining, coal combustion, gold-amalgam-extraction watersheds) elevates local fishery values, though the open-ocean global background sets the floor.

## Processing effects

Shark processing (cleaning, filleting, freezing, smoking, drying for shark-fin and similar products) does not reduce methylmercury, because MeHg binds tightly to muscle protein and is not removed by any culinary or industrial process commonly applied to fish. Cooking concentrates per-mass MeHg slightly through water loss. Removing dark muscle and skin reduces lipophilic contaminants (PCBs, dioxins) but does not meaningfully reduce MeHg, which is distributed throughout muscle tissue.

Shark fin (consumed in some Asian culinary traditions) carries MeHg at similar concentrations to source-shark muscle. Shark cartilage supplements (sold in some health-food channels) carry per-mass MeHg with concentration adjustments depending on extraction process.

## Ingredient-derivative risk

Shark-derived dietary supplements carry source-shark heavy-metal loads at varying concentrations depending on extraction. Shark liver oil and squalene from shark liver concentrate Cd via the organ-storage pathway (Cd partitions to liver and kidney during the organism's lifetime). Shark cartilage supplements carry MeHg at adjusted concentrations relative to source-shark muscle. These supplements route to [[products/supplements-oil-based|supplements-oil-based]] or [[products/supplements-botanicals-herbs|supplements-botanicals-herbs]] depending on labeling and product format.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening|supply-chain-screening]]) are the dominant intervention but are operationally limited because all shark species carry elevated MeHg by trophic-level definition. The dominant brand-side decision is whether to use shark at all; for products targeting pregnancy, infant, and young-child populations, shark sourcing is operationally avoided as a category exclusion.

**Consumption-pattern levers** are the principal consumer-side intervention. The FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, breastfeeding mothers, and young children. Adults outside vulnerable populations can consume shark with moderation but should not consume it weekly.

**Testing and QC levers** ([[mitigation/testing-and-qc|testing-and-qc]]) include lot-level methylmercury testing on commercial shark supply. Cold-vapor atomic absorption spectroscopy (CV-AAS) and ICP-MS coupled with methylmercury-specific speciation (CV-AFS) are the standard analytical platforms. Lot acceptance against the FDA 1.0 ppm action level or EU 1.0 mg/kg ML is the operative QC gate.

**Processing, formulation, agronomic, and packaging levers** ([[mitigation/processing|processing]], [[mitigation/formulation|formulation]], [[mitigation/agronomic|agronomic]], [[mitigation/packaging-and-storage|packaging-and-storage]]) are not consequential for shark methylmercury — the contamination is bioaccumulated into the organism's muscle and is not affected by harvest-to-shelf processing or storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets the species-specific 1.0 mg/kg Hg maximum level for shark and similar large predatory species (versus 0.5 mg/kg for most other fish).
- [[regulations/eu-reg-2022-617-mercury-fish]] — EU Reg. 2022/617 amendments to Hg MLs for fish.
- FDA action level of 1.0 ppm methylmercury in fish applies to shark in commercial channels; FDA enforcement on commercial shark is documented.
- FDA/EPA joint fish-consumption advisory specifically categorizes shark in the AVOID tier for pregnant women and young children.
- Codex Alimentarius CXS 193-1995 establishes MeHg MLs for fish ([[sources/codex-cxs-193-1995|Codex CXS 193-1995]]).
- California Prop 65 ([[regulations/california-prop65]]) Hg MADL applies to shark sold in California; documented Prop 65 enforcement actions on tuna and similar large predatory species establish the precedent for shark.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
<!-- END: hmi-page-history -->
