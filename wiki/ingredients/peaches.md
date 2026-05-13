---
title: "Peaches"
type: ingredient
commodity: peaches
label: "Peaches"
aliases: [peach]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 7.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 3.9
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  tHg:
    status: populated
    typical_ppb: [0, 0.8]
    p95_ppb: 1.3
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Al:
    status: populated
    typical_ppb: [299.6, 1746]
    p95_ppb: 1808
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: in_progress
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-01
  Sn:
    status: populated
    typical_ppb: [0, 26.5]
    p95_ppb: 29.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-13
sources: 1
---

# Peaches

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Peaches (Prunus persica) are stone fruit grown as tree fruit with the edible flesh positioned well above the soil surface and enclosed by a thin skin. As with other pome and stone fruits, heavy metal accumulation in the flesh itself is low under normal conditions because lead and cadmium do not translocate efficiently from root tissue through woody perennial stems into the fruit. The dominant pathway for Pb in commercial peach samples is atmospheric deposition onto fruit surfaces during growing and handling, and historical orchard soil contamination from lead arsenate pesticides applied in stone-fruit production regions during the pre-regulatory era. Cadmium, which has slightly higher phloem mobility than lead in most woody perennials, nonetheless accumulates at very low concentrations in stone fruit flesh, consistent with published EU and US monitoring data.

The broader ingredient page for peaches (the common-name, non-TDS form) encompasses both fresh and processed forms of the commodity and is the destination for FSA and other non-TDS occurrence data that cover peaches as a market basket food category. The FSA/Fera FS102048 survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) measured multiple food composites including peaches in Table 6, providing a UK-specific occurrence baseline that complements US TDS data available on the [[ingredients/peach]] taxonomy node.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 (in progress) | — | — | — | — |
| Cd | n=1 (in progress) | — | — | — | — |
| iAs | n=1 (in progress) | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 (in progress) | — | — | — | — |
| Ni | n=1 (in progress) | — | — | — | — |
| Al | n=1 (in progress) | — | — | — | — |
| Cr | n=1 (in progress) | — | — | — | — |
| Sn | n=1 (in progress) | — | — | — | — |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

Peach Pb and Cd concentrations in the edible flesh are consistently low across monitored production regions. The primary source of geographic variance is orchard soil history: orchards on former lead-arsenate-treated land, concentrated in established stone-fruit growing districts in the United States, United Kingdom, and parts of continental Europe, can show elevated surface contamination and marginally higher whole-fruit Pb compared with orchards on uncontaminated soils. Commercial peaches sourced from modern orchards with documented pesticide history and soil monitoring show Pb concentrations at or below analytical detection limits in most samples. No multi-region quantified comparison dataset for peaches is available in the current corpus.

## Processing effects

Washing and peeling remove surface-deposited Pb and reduce whole-fruit Pb values toward flesh-only levels. Commercial peeling, as used in canning and puree production, effectively eliminates the surface-contamination fraction. Canning in heavy syrup introduces minor dilution. Freezing does not alter metal concentrations. Pureed peach for baby food applications reflects the metal profile of the peeled flesh rather than skin-on raw fruit, and is therefore consistently lower in Pb than unprocessed skin-on samples. Concentration effects during evaporation or pasteurisation at high solids are negligible for heavy metals at the levels typically observed in peach.

## Ingredient-derivative risk

Fresh peach is the primary raw form. Canned peach slices carry potential Sn migration from unlined tinplate, though the near-neutral pH of peach in syrup limits Sn dissolution relative to high-acid fruits. Peach puree for infant food is the derivative with the highest regulatory scrutiny, given the vulnerable-population exposure context. Peach juice, produced by pressing and filtration, carries lower metal concentrations than whole-fruit puree because particulate pulp solids (the primary carrier of metal-bearing cellular material) are removed in filtration.

## Mitigation options

### Sourcing levers

Preferring peaches from orchards with documented soil metal monitoring and absence of pre-1940 lead arsenate application history is the primary sourcing lever. For infant food formulations, supplier orchard-provenance declarations and periodic soil screening provide the chain-of-custody evidence supporting a low-Pb sourcing claim.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling before puree or canning production removes the surface-deposited Pb fraction. This step is standard commercial practice for infant-grade peach products and is the most accessible processing intervention.

### Formulation levers

Blending peach puree with other verified-low-metal fruit purees in composite products reduces the per-serving contribution from peach. Given that peach is already a low-metal commodity, the formulation lever primarily functions as a risk-management hedge when supply-chain provenance is uncertain rather than as a primary contamination-reduction strategy.

### Testing and QC levers

Lot-level ICP-MS screening of incoming peach puree or concentrated juice for Pb and Cd provides assurance for infant food manufacturers. Most commercial peach lots are expected to be well within EU and proposed FDA thresholds, but systematic testing anchors the quality argument in documented evidence.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for lead in stone fruit (including peach) is 0.10 mg/kg fresh weight and for cadmium in stone fruit is 0.050 mg/kg fresh weight. For processed baby foods containing peach, lower Pb limits apply under the same regulation.

FDA's Closer to Zero program ([[regulations/fda-closer-to-zero]]) addresses lead in fruit purees and juices consumed by infants; peach puree is within scope of this framework as a commonly consumed infant food category. Codex Alimentarius sets guidance levels for contaminants in fruit generally ([[regulations/codex-cadmium-mls]]). The UK Contaminants Regulation, which mirrors EU limits post-Brexit, applies the same ML values for peach in UK domestic commerce.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]
