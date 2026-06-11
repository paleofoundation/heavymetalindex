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
sources: 5
---

# Non Soy Protein Source

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 1/10 HMTc analytes, total n=2 | only 1/10 analytes have evidence |
| D2 Regional coverage | OK | 6 jurisdictions, top EU 33% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | tAs THIN | tAs: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | OK | 1 claims checked, 1 supported; 2 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | OK | 1 cited lever(s), 6 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: tAs |
| D11 Standards-readiness | NOT-READY | priority: tAs; pairing 0 paired, 1 single, 0 unpaired | tAs: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.50, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.75, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | data gap | — | — | — | — |
| Cd | data gap | — | — | — | — |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 22500 | — | low | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|1]], [[sources/masite2022-mopane-trace-metals\|2]] |
| tHg | data gap | — | — | — | — |
| Ni | data gap | — | — | — | — |
| Al | data gap | — | — | — | — |
| Cr | data gap | — | — | — | — |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Routing

This node is linked from [[products/infant-formula-concentrated-liquid-non-soy]], [[products/infant-formula-powder-non-soy]], [[products/infant-formula-rtf-liquid-non-soy]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/barborakova2024-black-soldier-fly-larvae-metals\|Barborakova et al. 2024]]. *Safety of black soldier fly larvae: microbial and heavy metal risks*, Journal of Microbiology, Biotechnology and Food Sciences | 2024 | Peer-reviewed | SK/EU Cd, Pb, Ni, Cr, Cu, Mn, Mo, Zn, Co occurrence in Black soldier fly larvae before experimental feeding and after four laboratory feed variants: egg pasta in whole milk,... (n=5) |
| 2 | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|Sim et al. 2024]]. *Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach*, Food Chemistry | 2024 | Peer-reviewed | HPLC-ICP-MS validated iAs method applied to insect-protein samples as a non-soy protein matrix |
| 3 | [[sources/masite2022-mopane-trace-metals\|Masite et al. 2022]]. *Trace Metals, Crude Protein, and TGA-FTIR Analysis of Evolved Gas Products in the Thermal Decomposition of Roasted Mopane Worms, Sweet Corn, and Peanuts*, International Journal of Food Science | 2022 | Peer-reviewed | tAs, Cd, Cr, Ni, and Pb in roasted mopane worms as an edible-insect alternative-protein source from the South African market |
| 4 | [[sources/bandara2020-protein-powder-heavy-metals\|Bandara et al. 2020]]. *A human health risk assessment of heavy metal ingestion among consumers of protein powder supplements*, Toxicology Reports | 2020 | Peer-reviewed | US tAs, Cd, Pb, tHg occurrence in Risk assessment built on heavy-metal concentrations reported in two US third-party testing datasets: 15 protein powder products from... (n=148) |
| 5 | [[sources/hosojima2017-rice-endosperm-protein-cadmium\|Hosojima et al. 2017]]. *A Randomized, Double-Blind, Crossover Pilot Trial of Rice Endosperm Protein Supplementation in Maintenance Hemodialysis Patients*, Scientific Reports | 2017 | Peer-reviewed | JP Cd occurrence in Five batches of rice endosperm protein powder prepared from Japonica rice flour for a maintenance-hemodialysis nutrition intervention in... (n=5) |
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
| [1ca3eb0](https://github.com/paleofoundation/heavymetalindex/commit/1ca3eb0) | 2026-06-06 | source-legend: drain awaiting-synthesis backlog + wire populator into prebuild |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
