---
title: "Pears"
type: ingredient
commodity: pears
label: "Pears"
aliases: [pear]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 7.6]
    p95_ppb: 11.9
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 7]
    p95_ppb: 9.9
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 6.0]
    p95_ppb: 7.3
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 3
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1195]
    p95_ppb: 1568
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 15.7]
    p95_ppb: 25.4
    confidence: medium
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
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Pears

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Pears (Pyrus communis and related commercial species) are pome fruit grown on tree branches with the edible flesh protected by a thin skin. The metal accumulation profile of pears is governed by the same mechanisms documented for apples: lead accumulates at the fruit surface through atmospheric deposition rather than through root-to-fruit translocation, cadmium translocates from soil through root uptake but reaches the fruit only at very low concentrations through the woody perennial stem, and the flesh interior is therefore consistently among the least metal-contaminated segments of monitored food categories. Surface-deposited Pb on pear skin reflects both atmospheric particulate deposition and, in orchards with pre-1940 pesticide history, resuspension of legacy lead arsenate residues from treated orchard soils.

The FSA/Fera FS102048 survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) measured pears as a UK retail composite, providing European occurrence context distinct from the US TDS data captured on the [[ingredients/pear]] taxonomy node. The UK regulatory and dietary context for pears is relevant because pears are a standard UK weaning food and frequently appear in UK infant food purees, making their contamination profile relevant to the FDA Closer to Zero and EU baby food regulatory frameworks.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–7.6 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| Cd | n=1 | 0–7 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| iAs | n=1 | 0–6 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–2 | high | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1195 | medium | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–15.7 | medium | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Pear metal concentrations show low absolute variation across monitored production regions because the inherent accumulation mechanisms produce consistently low flesh concentrations. Geographic variance in surface Pb tracks orchard history; UK orchards with pre-1940 pesticide records may show marginally higher whole-fruit Pb than orchards in regions without such history. No quantified multi-region comparative dataset for pears is available in the current corpus. The FSA/Fera 2016 survey measured UK retail pears as a composite, providing one reference point for European market values pending full parsing of Table 6 values.

## Processing effects

Peeling removes the surface Pb fraction and is standard in commercial pear processing for infant food. Washing with water reduces surface deposits further. Juice production (pressing and filtering) removes particulate solids. Puree for infant food reflects the peeled flesh profile. Freezing does not alter metal concentrations. Cooking does not remove metals but moisture loss concentrates them on a wet-weight basis.

## Ingredient-derivative risk

Fresh and frozen pears are the raw commodity forms. Pear puree, pear juice, and pear concentrate are the primary processed derivatives. Pear concentrate, used as a natural sweetener in processed foods and infant beverages, concentrates metals in proportion to the water removal ratio, though starting concentrations in pear are very low, so concentrate concentrations remain low in absolute terms. Dried pear (pear chips) concentrates metals proportional to moisture loss (typical moisture reduction of 80-85 percent); dried pear is a niche form with limited infant food application.

## Mitigation options

### Sourcing levers

Sourcing from orchards with documented absence of pre-1940 lead arsenate pesticide application is the primary sourcing lever for Pb. Supplier orchard-history documentation and periodic soil screening are the verification mechanism for infant food manufacturers, where the regulatory scrutiny is highest.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling before puree production removes the surface Pb layer and is the standard commercial practice for infant-grade pear products. Juice filtration further removes particulate metal-bearing solids. These steps are already embedded in standard infant food processing without requiring additional capital investment.

### Formulation levers

Given that pears are already a low-metal commodity, formulation levers are not a primary concern. In multi-fruit infant food blends, pear can serve as a low-risk carrier ingredient that dilutes any metals from higher-risk co-ingredients.

### Testing and QC levers

Periodic ICP-MS testing of incoming pear puree or juice with Pb acceptance criteria is appropriate for infant food manufacturers. Given the consistently low baseline concentrations, this testing primarily serves as a supply-chain audit function rather than a primary contamination-control mechanism.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for lead in pome fruit (including pears) is 0.10 mg/kg fresh weight and for cadmium in pome fruit is 0.050 mg/kg fresh weight. For processed pear products in baby food formulations, stricter Pb limits apply under the specific baby foods provisions. The UK post-Brexit Contaminants Regulation applies the same ML values.

FDA's Closer to Zero program ([[regulations/fda-closer-to-zero]]) addresses lead in fruit purees and juices consumed by infants; pears are within scope as a commonly consumed infant fruit. Codex Alimentarius sets guidance levels for contaminants in fruit generally ([[regulations/codex-cadmium-mls]]).

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | South Korean fresh pear samples measured for tAs, Cd, Cr, Ni, Pb, and Sb by ICP-MS |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
<!-- END: hmi-page-history -->
