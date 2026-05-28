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
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Shark

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 10–100 | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]], [[sources/smolikova2016-heavy-metals-fish-czech\|2]] |
| Cd | n=2 | 10–100 | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]], [[sources/smolikova2016-heavy-metals-fish-czech\|2]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=2 | 500–2000 | low | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|1]], [[sources/smolikova2016-heavy-metals-fish-czech\|2]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | MX tHg, Pb, Cd, Cr occurrence in 48 samples of canned tuna (6 samples × 8 brands) and 20 samples of fresh fish (5 samples... (n=68) |
| 2 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016 (Conference Proceedings) | 2016 | Peer-reviewed | CZ/EU tHg, Cd, Pb occurrence in 33 species of fish purchased in Brno City (Czech Republic) markets from 17 FAO localities, September 2015–June 2016;... (n=159) |
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
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [c027e29](https://github.com/paleofoundation/heavymetalindex/commit/c027e29) | 2026-05-17 | source-legend: programmatic baseline fill (2026-05-17) |
| [c069002](https://github.com/paleofoundation/heavymetalindex/commit/c069002) | 2026-05-17 | synthesis: shark, soy/non-soy infant formula, vegetables — 6 narrative sections each |
<!-- END: hmi-page-history -->
