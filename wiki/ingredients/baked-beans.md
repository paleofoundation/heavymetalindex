---
title: "Baked beans"
type: ingredient
commodity: baked-beans
label: "Baked beans"
aliases: [baked beans]
category: legume-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 39]
    p95_ppb: 63
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 4.2
    confidence: medium
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
    typical_ppb: [1015, 3692]
    p95_ppb: 3911
    confidence: low
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
    typical_ppb: [33.6, 82.8]
    p95_ppb: 85.2
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
sources: 0
---

# Baked beans

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Baked beans are a composite food product consisting of navy or haricot beans cooked in a tomato-based sauce and typically packaged in tinplate cans. The metal load of the product has three distinct sources. First, the beans themselves accumulate metals, principally Cd, from the soil via root uptake; legumes are moderate Cd accumulators because their root systems explore a significant soil volume and their nitrogen-fixing symbiosis can induce changes in rhizosphere chemistry that affect metal availability. Second, the tomato sauce component contributes metals from the tomato ingredient, which is also a moderate soil-to-fruit accumulator. Third, and uniquely among most foods, the tinplate can itself is a source of inorganic Sn: the acidic sauce contacts the can lining during thermal processing and storage, dissolving Sn from the tin layer at rates that increase with storage duration and temperature.

The FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) measured this food composite in Table 6 as part of a broad UK market survey; specific quantitative values from that source remain in progress pending table extraction. Given that baked beans are typically sold in tinplate cans and the sauce is acidic (pH approximately 3.5 to 4.5), Sn contamination is a relevant analyte for this matrix even though Sn is generally a lower acute-toxicity concern at concentrations below 200 mg/kg.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 | 0–39 | 63 | low | — |
| Cd | n=1 | 0 | 0 | low | — |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | 0–1 | 4.2 | medium | — |
| Ni | data gap | — | — | — | — |
| Al | n=1 | 1015–3692 | 3911 | low | — |
| Cr | data gap | — | — | — | — |
| Sn | n=1 | 33.6–82.8 | 85.2 | low | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) is the sole occurrence source in the current corpus for baked beans. Quantitative values from that source are in progress pending structured extraction of Table 6. UK retail baked beans are predominantly produced by a small number of large manufacturers from beans sourced internationally, meaning the product composition reflects a blend of supply origins that may vary year to year. Regional and brand-level variation in Sn content is expected to correlate with can age and storage conditions at retail, which are not tracked in occurrence surveys. Additional occurrence data from US and European sources will be required to establish geographic ranges.

## Processing effects

Commercial baked beans undergo high-temperature retort sterilization inside the sealed can, a process that ensures shelf stability. During and after this thermal process, the acidic tomato sauce contacts the tinplate can lining and Sn dissolves into the product over the product's shelf life; the rate and magnitude of Sn accumulation depend on the tin coating thickness, lacquer application (many modern cans are lacquered to reduce Sn migration), pH of the sauce, storage temperature, and total storage duration. Soaking dry beans before cooking and discarding the soak water is a pre-processing step that can reduce Cd content in the cooked bean fraction; however, for commercially produced canned baked beans this step is carried out at the factory level if at all, and the contribution to the final product's Cd concentration is not resolved in the current corpus. The tomato sauce component undergoes concentration during production, which may slightly elevate metal concentrations relative to fresh tomato.

## Ingredient-derivative risk

Baked beans in their canned form are the primary commercial product and also serve as an ingredient in composite dishes (baked potato with beans, bean toasties, bean soups). Each use carries the metal load of the canned product, including any accumulated Sn, into the recipe. Home-prepared baked beans from dried beans avoid the Sn contamination route entirely, as cooking occurs in non-metallic pots. Baked bean purées for baby food (if produced) would concentrate the bean solid fraction and carry forward any Cd and Pb present in the beans; the canning format would need to be evaluated separately for Sn risk if packed in tinplate.

## Mitigation options

### Sourcing levers

Sourcing beans from soils with documented low Cd reduces the Cd load in the dry bean ingredient before cooking. Phosphate fertilizer cadmium content is an upstream lever for bean Cd, as high-cadmium phosphate fertilizers increase soil Cd availability over the growing season. _Quantified reduction factors for baked beans specifically are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

Soil pH management (maintaining pH above 6.0 to 6.5) reduces Cd bioavailability in legume-growing soils. Selection of bean cultivars with lower Cd accumulation potential is an active area of agronomic research. _Quantified reduction factors for these levers in baked bean production are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Soaking and blanching dry beans before cooking and discarding the soak or blanch water may reduce Cd load in the bean matrix. Use of lacquered or otherwise lined cans reduces Sn migration from the can into the acidic sauce during storage. Minimizing storage duration and temperature before consumption reduces accumulated Sn in open-shelf canned product. _Quantified reduction magnitudes for these processing levers in a commercial baked bean context are not available in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Switching from tinplate cans to glass jars or non-metallic retort pouches eliminates the Sn contamination route. This is the most impactful single formulation lever for Sn specifically, though it does not address Cd or Pb in the bean or tomato components.

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

Non-metallic packaging (glass, retort pouch) eliminates the Sn dissolution route. For products sold in tinplate, lot-level Sn testing against the applicable ML (200 mg/kg for canned solid food in the EU, see below) provides a QC checkpoint, particularly for product approaching end of shelf life.

## Regulatory limits that apply

In the European Union, Regulation (EU) 2023/915 sets a maximum level of 200 mg/kg (200,000 ppb) for inorganic tin in canned solid foods, and 100 mg/kg for canned liquid foods (beverages); baked beans as a semi-solid product would fall under the solid food ML ([[regulations/eu2023-contaminants-maximum-levels]]). The EU also applies Pb and Cd limits to legumes: Pb ML is 0.10 mg/kg (100 ppb) and Cd ML is 0.050 mg/kg (50 ppb) for legume vegetables as placed on the market, though MLs specific to processed legume products (canned beans) may differ. For Cd specifically, EU Regulation (EU) 2023/915 sets a Cd ML of 0.10 mg/kg (100 ppb) for dried legume seeds ([[regulations/eu-2023-915-cadmium]]). In the United States, no FDA action level for Pb, Cd, or Sn in canned baked beans has been established under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]). No Codex Alimentarius ML specific to canned baked beans appears in the current corpus; Codex ML for Pb and Cd in legumes and for Sn in canned foods ([[regulations/codex-cadmium-mls]]) provide the international reference.

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
<!-- END: hmi-page-history -->
