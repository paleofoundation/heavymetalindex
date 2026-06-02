---
title: "Noodles"
type: ingredient
commodity: noodles
label: "Noodles"
aliases: [noodle]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 84
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 21.8]
    p95_ppb: 39.8
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 3.3]
    p95_ppb: 17.9
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
    typical_ppb: [873.4, 4994]
    p95_ppb: 5503
    confidence: high
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
    typical_ppb: [6.9, 480.9]
    p95_ppb: 909.4
    confidence: high
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
sources: 4
---

# Noodles

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Noodles are a wheat-based or wheat-and-egg-based product whose heavy metal profile is determined primarily by the metal content of the flour or whole-grain wheat used in production. Cadmium is the principal analyte of concern in the cereal-grain pathway: wheat accumulates Cd from soil through root uptake, and the Cd content of the grain reflects soil Cd levels and soil pH (lower pH mobilizes more Cd for uptake). The degree of grain milling affects Cd concentration in the final product: whole-grain or high-extraction flours retain more of the bran and aleurone layers where Cd concentrates, while refined white flour has lower Cd because milling removes the outer grain layers. Lead in wheat grain is generally low because Pb is not efficiently translocated from root to seed, but Pb from atmospheric deposition onto field wheat or from processing equipment can contribute at low levels. Asian-style wheat noodles prepared from partially refined or whole-grain flour therefore carry a modest but non-negligible Cd burden; egg-enriched pasta adds a second ingredient (egg) that is itself low in metals and does not materially change the wheat-driven Cd profile. Inorganic arsenic is not a significant concern for wheat-based products under typical growing conditions; total arsenic in wheat is low compared with rice.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=1 | 0–41 | 84 | high | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| Cd | n=1 | 0–21.8 | 39.8 | high | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| iAs | n=1 | 0 | 0 | medium | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | 0–3.3 | 17.9 | high | — |
| Ni | data gap | — | — | — | — |
| Al | n=1 | 873.4–4994 | 5503 | high | [[sources/lee2019-food-processing-heavy-metals-migration\|1]] |
| Cr | data gap | — | — | — | — |
| Sn | n=1 | 6.9–480.9 | 909.4 | high | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Variation within the noodle category is driven by flour extraction rate and wheat sourcing region. Higher-extraction (more whole-grain) flours carry more Cd than refined white flour; Asian-style wheat noodles prepared with higher-extraction flour therefore sit at the upper end of the category range. Geographic variation in soil Cd is substantial within major wheat-producing regions: durum wheat grown in some European and North African soils has higher Cd than wheat from low-Cd soils in North America or Australia, reflecting both soil Cd levels and soil pH differences. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides the primary occurrence dataset for noodles in the current corpus. Additional characterization by flour extraction rate and sourcing region will be added as further source pages are ingested.

## Processing effects

Cooking noodles in water leaches some water-soluble minerals and low-molecular-weight metal species into the cooking water. Studies on pasta and noodle cooking consistently show that boiling in abundant water and discarding the cooking water reduces Cd content of the cooked product relative to uncooked noodle, though the magnitude of reduction varies by product and cooking conditions. This is a practical mitigation lever in home cooking contexts that is less applicable to commercial food production where cooking water may be retained or where the product is sold in a sauce. Drying of noodles (whether in the factory for dry noodles or during production of instant noodles) concentrates analytes relative to fresh or cooked noodles on a wet weight basis. Extrusion and die-shaping of noodle dough at industrial scale do not introduce metals from equipment in amounts that are significant relative to the wheat-flour background, provided equipment is maintained.

## Ingredient-derivative risk

Noodle-based derivatives that alter the metal profile relative to the base product are instant noodles (dried and fried, with an added fat phase from the frying oil), fresh noodles (higher moisture content, so lower ppb values on a wet weight basis relative to dried noodles), and rice-noodle substitutes (which fall outside this page and are covered on the rice-based ingredient pages). The fried component of instant noodles adds a refined oil fraction that is low in metals, reducing the per-serving metal contribution slightly relative to the wheat fraction alone.

## Mitigation options

### Sourcing levers

Specifying low-Cd wheat flour from documented low-Cd growing regions (North America, Australia) is the primary sourcing lever for manufacturers where Cd is a formulation concern. Requesting supplier Cd occurrence data for the flour lot reduces uncertainty about incoming Cd concentration.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

For products where cooking water retention can be controlled (commercial production of ready-to-eat noodle meals), a cooking-and-drain step removes a portion of water-soluble Cd. Selecting refined flour over whole-grain or high-extraction flour reduces Cd concentration in the finished noodle, at the cost of reducing other nutritional attributes of the whole-grain fraction.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 and the predecessor regulation EU 2023/915 amending Regulation (EC) No 1881/2006 set a maximum level of 0.10 mg/kg Cd for cereal products and pasta, and 0.20 mg/kg Pb for the same category [[regulations/eu2023-contaminants-maximum-levels]]. These limits apply to noodles as a cereal-based product. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb maximum levels for cereal-based products; Cd limits for pasta and noodles have been addressed through Codex discussions that reference EU-level data. See [[regulations/eu2023-contaminants-maximum-levels]], [[regulations/eu-2023-915-cadmium]], and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/katyal2020-instant-noodles-canada-metals\|Katyal et al. 2020]]. *Analysis of lead, arsenic, and cadmium concentrations in instant noodles within the Canadian market*, BCIT Environmental Public Health Journal | 2020 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/lee2019-food-processing-heavy-metals-migration\|Lee et al. 2019]]. *Effects of food processing methods on migration of heavy metals to food*, Applied Biological Chemistry | 2019 | Peer-reviewed | Pb, Cd, tAs, and Al migration from Korean wheat-flour and sweet-potato glass noodles to boiling water, quantifying cooking-loss as a processing lever |
| 3 | [[sources/shamsani2019-instant-noodles-heavy-metals-malaysia\|Shamsani et al. 2019]]. *Heavy Metals (Pb, Cd, As) Content in Instant Noodles From Malaysian Market*, Malaysian Journal of Medicine and Health Sciences, Vol. 15 Supp. 3 (Proceedings of the Summer Crash Course Programme 2018) | 2019 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/tajdar-oranj2018-iran-instant-noodles-metals\|Tajdar-oranj et al. 2018]]. *The concentration of heavy metals in noodle samples from Iran's market: probabilistic health risk assessment*, Environmental Science and Pollution Research | 2018 | Peer-reviewed | *[awaiting synthesis]* |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
<!-- END: hmi-page-history -->
