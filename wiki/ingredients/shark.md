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

This page is an autonomy-created stub. The routing audit identified 2 source pages in the corpus declaring `ingredients: [shark]` in their frontmatter without a dedicated page existing. Per OPERATING.md Part 3, the autonomy loop created this stub so those sources route to a defined target. The synthesis pass per CLAUDE.md Part 9 fills in the contamination profile as sources accumulate.

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

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


