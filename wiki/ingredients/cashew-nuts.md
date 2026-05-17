---
type: ingredient
commodity: cashew-nuts
title: "Cashew Nuts"
label: "Cashew Nuts"
aliases: []
category: nut
contamination_profile:
  Pb: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [1500, 5350], p95_ppb: 5350, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, shell-permeability, geography, storage]
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

# Cashew Nuts

Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | n=2 | 1500–5350 | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]], [[sources/bfr2022-nickel-dietary-intake-germany-meal\|2]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | *[awaiting synthesis]* |
| 2 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This page is the alias node for [[ingredients/cashews]]; the two slugs refer to the same Anacardium occidentale kernel. See the canonical [[ingredients/cashews]] page for the full synthesis covering the nickel-accumulator pathway, geographic and varietal variance, processing effects, ingredient-derivative risk, mitigation options, and applicable regulatory limits.

Cashew kernel carries Ni at 4,000-9,000 µg/kg — an order of magnitude higher than other tree nuts grown on comparable soil — because the cashew plant species itself is a documented Ni accumulator. The HMTc panel concerns are dominantly Ni, with secondary Cd and trace Pb.

## Ranges by source, region, and variety

See [[ingredients/cashews]] for the canonical synthesis. West African, Vietnamese, Indian, and Brazilian production regions show modest per-origin variance dominated by species-level Ni-accumulation behavior.

## Processing effects

See [[ingredients/cashews]]. Cashew processing does not change kernel Ni meaningfully; soaking does not reduce Ni.

## Ingredient-derivative risk

See [[ingredients/cashews]] for the cashew butter, cashew milk, cashew flour, and cashew cream derivative analysis.

## Mitigation options

See [[ingredients/cashews]]. Sourcing levers are limited because species-level Ni accumulation dominates; formulation substitution (almond, walnut, hazelnut) is the primary brand-side intervention for products that don't require cashew specifically.

## Regulatory limits that apply

See [[ingredients/cashews]]. [[regulations/eu-2023-915]] Pb and Cd MLs for tree nuts apply; no binding Ni ML currently set internationally.


