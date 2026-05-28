---
title: "Non Soy Protein Source"
type: ingredient
commodity: non-soy-protein-source
label: "Non Soy Protein Source"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [22500, 22500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [infant-formula-concentrated-liquid-non-soy, infant-formula-powder-non-soy, infant-formula-rtf-liquid-non-soy]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 2
---

# Non Soy Protein Source

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 22500 | low | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|1]], [[sources/masite2022-mopane-trace-metals\|2]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-rtf-liquid-non-soy]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|Sim et al. 2024]]. *Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach*, Food Chemistry | 2024 | Peer-reviewed | HPLC-ICP-MS validated iAs method applied to insect-protein samples as a non-soy protein matrix |
| 2 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Cr, Ni, and Pb in roasted mopane worms as an edible-insect alternative-protein source from the South African market |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Non-soy protein source is the aggregate ingredient label for protein bases in non-soy infant formula and alternative-protein finished products, covering cow-milk protein (intact, partially hydrolyzed, fully hydrolyzed), amino-acid-based protein, pea protein, rice protein, hemp protein, and emerging alternative proteins including insect protein. Each protein source carries its own heavy-metal profile inherited from its production pathway. Cow-milk protein from dairy farming carries forage-and-water inheritance plus background environmental Pb/Cd. Pea protein and rice protein concentrate the source-grain or source-legume metals during extraction. Insect protein (an emerging alternative-protein matrix) accumulates heavy metals from the substrate the insects feed on per [[sources/sim2024-inorganic-arsenic-seaweed-hplc|Sim 2024]]'s HPLC-ICP-MS method validation on insect-protein matrices and [[sources/masite2022-mopane-trace-metals|Masite 2022]]'s mopane worm trace-metals work (which documents tAs, Cd, Cr, Ni, Pb in roasted mopane worms as an edible-insect alternative protein from the South African market at notably elevated levels).

The HMTc panel concerns for non-soy protein sources depend heavily on the specific protein matrix. The 22,500 ppb tAs cited in the body table is an outlier reading specifically from the mopane-worm and insect-protein evidence and reflects emerging-alternative-protein concerns that do not apply to commercial cow-milk-protein-based infant formula, which sits at the trace-Pb baseline documented on [[ingredients/non-soy-infant-formula|non-soy-infant-formula]].

## Ranges by source, region, and variety

Variance within non-soy protein sources tracks the specific protein matrix:

- Cow-milk protein: trace-Pb baseline, region-dependent on dairy-farming practices
- Pea protein: moderate Cd from source-pea soil-uptake
- Rice protein: source-rice iAs inheritance
- Hemp protein: source-hemp soil-uptake (hemp is a documented bioaccumulator and is used in phytoremediation contexts)
- Insect protein: highly substrate-dependent per [[sources/masite2022-mopane-trace-metals|Masite 2022]]; can carry elevated levels reflecting feed-substrate quality

## Processing effects

Protein-extraction processes vary by matrix. Cow-milk protein isolation involves casein precipitation (curd separation) or whey-protein concentration via ultrafiltration; standard pasteurization and drying preserve the source-milk profile. Pea and rice protein extraction involves aqueous extraction at controlled pH followed by isoelectric precipitation similar to soy isolate. Insect protein production involves drying and grinding the source insect; metal load reflects feed-substrate inheritance.

## Ingredient-derivative risk

Non-soy protein sources route into [[products/infant-formula-powder-non-soy|non-soy infant formulas]] (cow-milk-protein based primarily) and into broader protein-bar, protein-shake, plant-based meat, and nutritional-supplement applications. Each downstream product carries the source-protein metal profile diluted by other ingredients.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Protein-source-supplier specification at infant-grade impurity tier; supplier audit programs verifying upstream raw-material and processing-equipment quality.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-protein cultivation or production stage (dairy farming for cow-milk protein; pea, rice, hemp cultivation for plant proteins; insect-feed-substrate quality for insect protein).

**Processing levers** ([[mitigation/processing]]) include ion-exchange polishing and ultrafiltration enhancements that reduce trace metals.

**Formulation levers** ([[mitigation/formulation]]) include matrix-substitution options (hydrolyzed cow-milk-protein vs amino-acid-based; pea-protein vs hemp-protein for plant-based products).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, As testing on incoming protein source. HPLC-ICP-MS speciation per [[sources/sim2024-inorganic-arsenic-seaweed-hplc|Sim 2024]] is the operative method for iAs/tAs distinction in protein matrices.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are minor; standard protein-product storage specifications apply.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant formula products into which non-soy protein sources are incorporated.
- US FDA Closer to Zero infant-and-young-child food framework: applicable to non-soy-protein-source-based finished products.
- Codex Alimentarius CXS 72-1981 (infant formula) and CXS 156-1987 (follow-up formula) establish composition standards.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to non-soy-protein-source-based products sold in California.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [7a12d11](https://github.com/paleofoundation/heavymetalindex/commit/7a12d11) | 2026-05-17 | synthesis: quinoa, non-rice-grains, non-soy-protein-source, flavoring, herbal-botanicals |
| [e3c860e](https://github.com/paleofoundation/heavymetalindex/commit/e3c860e) | 2026-05-17 | sections: autofill 76 ingredient + 6 product pages missing mandatory H2 structure |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
<!-- END: hmi-page-history -->
