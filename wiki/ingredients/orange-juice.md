---
title: "Orange juice"
type: ingredient
commodity: orange-juice
label: "Orange juice"
aliases: [orange juice]
category: juice-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 29.9]
    p95_ppb: 49.9
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0.2]
    p95_ppb: 6
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 5.5
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0.2]
    p95_ppb: 1
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [63, 63]
    p95_ppb: 63
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [0, 2560]
    p95_ppb: 2875
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [48.6, 65.4]
    p95_ppb: 66.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [0, 8.9]
    p95_ppb: 9.0
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
wiki_doi: null
updated: 2026-05-13
sources: 8
---

# Orange juice

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Orange juice, as a squeezed or processed citrus product, carries a metal profile that reflects both the inherently low metal content of orange flesh and the potential for metal introduction from processing equipment and packaging. Citrus fruit flesh is protected from atmospheric Pb deposition by the thick peel, and Pb is not efficiently translocated from the tree's root system to the fruit. Cadmium in orange flesh is similarly low under normal soil conditions because citrus trees are not strong Cd accumulators and the fruit's high-acidity and high-moisture character limits metal binding in tissue. The primary metal-risk pathways specific to the juice product (as opposed to the whole fruit) are: Pb contribution from corroded or contaminated processing equipment such as older metal pipes, tanks, or fittings; and, in theory, contamination from packaging materials. The EU maximum level for Pb in fruit juices (0.050 mg/kg) is more stringent than the level for fresh fruit (0.10 mg/kg), reflecting regulatory recognition that juice production can concentrate or introduce Pb relative to the raw fruit. No commercial-scale processing pathway for orange juice is known to introduce iAs, and tHg is not a concern for citrus-derived products.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 | 0–29.9 | 49.9 | medium | [[sources/paudel2024-packaged-fruit-juices-nepal\|1]] |
| Cd | n=1 | 0–0.2 | 6 | high | — |
| iAs | n=1 | 0–3.6 | 5.5 | medium | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | 0–0.2 | 1 | high | — |
| Ni | n=1 | 63 | 63 | low | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|1]] |
| Al | n=1 | 0–2560 | 2875 | low | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|1]] |
| Cr | n=1 | 48.6–65.4 | 66.5 | low | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|1]] |
| Sn | n=1 | 0–8.9 | 9.0 | low | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Orange juice sourced from different major producing regions (Florida and California in the US, Brazil, Spain, and Mediterranean countries) does not show dramatic differences in Pb and Cd concentrations because the primary source of metal in orange juice is equipment-related rather than geographic-agricultural. Brazil is the largest global orange juice exporter; bulk juice from Brazilian production has been subject to EU import monitoring programs for contaminants. Differences between fresh-squeezed, pasteurized, and reconstituted-from-concentrate formats may arise from the concentration step: juice concentrated by evaporation and then reconstituted may carry higher analyte concentrations after reconstitution if concentration was achieved under conditions that introduced contamination, but the concentration-then-reconstitution pathway itself does not add metals if equipment is clean. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides the primary occurrence dataset for this matrix in the current corpus.

## Processing effects

Squeezing or centrifugal juice extraction separates the liquid fraction from the pulp and peel. The peel, which may carry surface Pb from atmospheric deposition, is not incorporated into juice by standard commercial processing (peel oil expression for flavoring is a separate process). Pasteurization by high-temperature short-time (HTST) or flash pasteurization does not alter total metal concentrations. Concentration by evaporation (for juice-from-concentrate production) concentrates all analytes proportionally; subsequent reconstitution with water restores approximate original concentrations, though the concentration step itself may expose the product to equipment surfaces at elevated temperature. Processing through non-stainless-steel equipment (historic lead-soldered fittings, copper piping) is the most significant processing-risk for Pb in juice and has been the subject of regulatory attention. Modern food-grade stainless steel processing equipment does not contribute meaningful Pb contamination.

## Ingredient-derivative risk

The primary derivatives are pasteurized not-from-concentrate (NFC) juice, reconstituted-from-concentrate (RFC) juice, and orange juice used as an ingredient in beverages, smoothies, and infant juice products. For infant juice applications, FDA's HACCP-based action level of 50 ppb Pb [[regulations/fda-juice-haccp-lead-50ppb]] applies and has historically driven juice processors to upgrade equipment. Blending with other juice types (multi-fruit juice blends) does not elevate orange juice's contribution to the blend's metal profile because other fruits in typical juice blends also carry low metal concentrations.

## Mitigation options

### Sourcing levers

Sourcing juice from suppliers with modern stainless-steel processing equipment and documented water quality for production water and cleaning-in-place systems reduces equipment-related Pb contamination risk. EU-registered juice exporters operating under import monitoring programs provide an additional compliance baseline.

### Agronomic levers

Not a material lever for orange juice given that the primary metal-introduction pathways are equipment-related rather than agricultural.

### Processing levers

Maintaining and replacing lead-containing equipment components (older solder, bronze or brass fittings, corroded tanks) is the most material processing lever for Pb reduction in orange juice production. Stainless steel specification for all juice-contact surfaces eliminates the primary equipment-related Pb source. For concentrate production, monitoring equipment surfaces before and after the concentration step identifies contamination sources.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine Pb testing of finished juice by ICP-MS is the primary quality-control lever and is required implicitly by HACCP programs that reference the 50 ppb FDA action level [[regulations/fda-juice-haccp-lead-50ppb]]. For juice products destined for EU markets, testing against the 0.050 mg/kg EU Pb limit for fruit juices provides the applicable compliance verification.

### Packaging and storage levers

Modern aseptic packaging, glass bottles, and multilayer cartons do not contribute Pb migration to orange juice under normal storage conditions. Older tinplate cans without internal lacquer were a historic Sn-migration source but are no longer standard for high-acid juice products.

## Regulatory limits that apply

In the United States, FDA's juice HACCP regulation (21 CFR Part 120) and the associated 2004 Pb action guidance establish a 50 ppb Pb limit for juice products intended for infants and young children, and this level has been used operationally for all juice HACCP programs [[regulations/fda-juice-haccp-lead-50ppb]]. In the European Union, Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.050 mg/kg (50 ppb) for Pb in fruit juices (including orange juice), which is more stringent than the 0.10 mg/kg level for fresh fruit. No specific EU Cd, iAs, or tHg limit applies to orange juice. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) provides Pb reference levels for fruit juices. See [[regulations/fda-juice-haccp-lead-50ppb]] and [[regulations/eu2023-contaminants-maximum-levels]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/paudel2024-packaged-fruit-juices-nepal\|Paudel et al. 2024]]. *Analysis and Detection of Heavy Metals Content in Some Selected Packaged Fruit Juices of Kathmandu City by Flame Atomic Absorption Spectroscopy*, International Journal of Applied Sciences and Biotechnology 12(3): 158-165 | 2024 | Peer-reviewed | Pb in packaged orange juice from Kathmandu retail (all below detection) and essential-element levels |
| 2 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 3 | [[sources/desouza2022-fruit-juice-trace-elements\|Souza et al. 2022]]. *Determination of the Trace Element Contents of Fruit Juice Samples by ICP OES and ICP-MS*, Brazilian Journal of Analytical Chemistry | 2022 | Peer-reviewed | ES/PT Al, tAs, Cd, Co, Cr, Cu, Fe, Mg, Mn, Mo, Ni, Pb, Sb, V, Zn occurrence in 21 fruit juice and nectar samples: 16 commercial fruit juices, 2 commercial nectars, 2 laboratory-squeezed orange juices, and... (n=21) |
| 4 | [[sources/balalimood2018-fruit-juice-mashhad-pb-as\|Balali-Mood et al. 2018]]. *Arsenic and Lead Contaminations in Commercial Fruit Juices of Markets in Mashhad, Iran*, Iranian Journal of Toxicology | 2018 | Peer-reviewed | IR Pb, tAs occurrence in 50 commercial packaged fruit juice samples from Mashhad, Iran local markets in spring and winter 2016; grape, apple,... (n=50) |
| 5 | [[sources/sobhanardakani2017-aluminum-copper-fruit-juices-iran\|Sobhanardakani et al. 2017]]. *Assessment of Contents and Health Risk of Aluminum and Copper through Consumption of Commercial Fruit Juices*, Annals of Military and Health Sciences Research | 2017 | Peer-reviewed | Al in Tetra Pak-packaged orange juice from Iran exceeding WHO maximum permissible limit due to acid-mediated leaching |
| 6 | [[sources/paula2015-fruit-juices-elements-portugal\|Paula et al. 2015]]. *Effects of Pre- and Post-Harvest Factors on the Selected Elements Contents in Fruit Juices*, Czech Journal of Food Sciences | 2015 | Peer-reviewed | PT Cd, Cr, Pb, Ni, Zn, Fe occurrence in 62 packs of 100% fruit juices acquired randomly from major supermarkets in Portugal; samples covered multiple fruit species,... (n=62) |
| 7 | [[sources/savic2015-clear-orange-juice-minerals\|Savic et al. 2015]]. *The Presence of Minerals in Clear Orange Juices*, Advanced Technologies | 2015 | Peer-reviewed | RS Ag, Al, tAs, Cd, Co, Cr, Cu, Fe, Li, Mg, Mn, Mo, Ni, Pb, Sb, Zn occurrence in Seven clear orange-juice samples with 50% fruit content, produced by different manufacturers and purchased from the local market... (n=7) |
| 8 | [[sources/farid2010-fruit-juices-jeddah-trace-elements\|Farid et al. 2010]]. *Levels of Trace Elements in Commercial Fruit Juices in Jeddah, Saudi Arabia*, Medical Journal of Islamic World Academy of Sciences | 2010 | Peer-reviewed | Total Cr and Ni in 45 commercial orange juices from Jeddah by GFAAS |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
<!-- END: hmi-page-history -->
