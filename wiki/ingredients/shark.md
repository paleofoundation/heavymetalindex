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
updated: 2026-05-16
sources: 2
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

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/smolikova2016-heavy-metals-fish-czech\|Smolikova et al. 2016]]. *Determination of heavy metals in fish products*, MendelNet 2016 (Conference Proceedings) | 2016 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Shark is at the apex of marine food webs and carries the highest methylmercury bioaccumulation among commonly consumed seafood. Shark species are long-lived (decades for some species), large-bodied predators that eat smaller predatory fish, multiplying the methylmercury concentration at each trophic step. The FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, women of childbearing age, breastfeeding mothers, and young children specifically because of this.

The HMTc panel concerns for shark are dominantly tHg/MeHg. Other panel metals (Cd, Pb, iAs in inorganic form) are at trace levels in shark muscle relative to MeHg.

## Ranges by source, region, and variety

Per-species: All consumed shark species carry elevated MeHg. Larger species (great white, tiger shark, hammerhead, mako, bull shark) carry the highest concentrations because of larger body size and longer lifespan. Smaller shark species (dogfish, smooth-hound, blacktip) carry lower MeHg but still elevated relative to non-shark fish.

Geographic variance is dominated by the global methylmercury background plus regional fishery and watershed loading. Shark from the Mediterranean, Caribbean, and certain Pacific fisheries carry the highest documented MeHg in some surveys.

## Processing effects

Shark processing (cleaning, filleting, freezing, smoking, drying for shark fin and similar products) does not reduce methylmercury. Cooking concentrates per-mass MeHg slightly through water loss. Removing dark muscle and skin reduces lipophilic contaminants but not MeHg meaningfully.

Shark fin (consumed in some Asian culinary traditions) carries MeHg at similar concentrations to source-shark muscle. Shark cartilage supplements (sold in some health-food channels) carry per-mass MeHg with concentration adjustments.

## Ingredient-derivative risk

Shark-derived dietary supplements (shark liver oil, shark cartilage, squalene from shark liver) carry source-shark metals at varying levels depending on extraction process. Shark liver specifically can carry elevated Cd from the organ-storage pathway.

These supplements route to [[products/supplements-oil-based|Cat 16 row 21]] or [[products/supplements-botanicals-herbs|Cat 16 row 15]] depending on labeling.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are limited because all shark species carry elevated MeHg by trophic-level definition. The dominant brand-side decision is whether to use shark at all; for products targeting pregnancy and young-child populations, shark sourcing is operationally avoided.

**Consumption-pattern levers** are the principal consumer-side intervention. FDA/EPA fish-consumption advisory categorizes shark in the AVOID tier for pregnant women, breastfeeding mothers, and young children. Adults outside vulnerable populations can consume shark with moderation but should not consume it weekly.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level methylmercury testing on commercial shark supply.

**Processing, Formulation, Agronomic, Packaging** levers are not consequential for shark methylmercury.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets the species-specific 1.0 mg/kg Hg ML for shark and similar large predatory species (versus 0.5 mg/kg for most other fish).
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MeHg MLs for fish.
- FDA action level of 1.0 ppm methylmercury in fish applies to shark in commercial channels.
- FDA/EPA joint fish-consumption advisory specifically categorizes shark in the AVOID tier for pregnant women and young children.
- California Prop 65 ([[regulations/california-prop65]]) Hg MADL applies to shark sold in California.


