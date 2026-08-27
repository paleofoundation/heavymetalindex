---
title: "Almond"
type: ingredient
commodity: almond
label: "Almond"
aliases: [almond milk, almond base]
category: tree-nut
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 220]
    p95_ppb: 400
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 30]
    p95_ppb: 60
    confidence: low
    n_studies: 2
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
    typical_ppb: [1, 10]
    p95_ppb: 20
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [1000, 1500]
    p95_ppb: null
    confidence: medium
    n_studies: 4
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
    typical_ppb: [100, 253]
    p95_ppb: 500
    confidence: low
    n_studies: 3
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
    typical_ppb: [1, 10]
    p95_ppb: 30
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
used_in_products: [plant-milks-non-soy-non-rice]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 11
---

# Almond

## Overview

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 10–220 | low | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Cd | n=2 | 10–30 | low | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 1–10 | low | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| tHg | n=2 | 1–10 | low | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Ni | n=4 | 1000–1500 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 100–253 | low | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/henriksen2023-chromium-nordic-nnr\|2]], [[sources/fera2015-uk-tds-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates heavy metals

Almonds are tree nuts produced primarily in California, Spain, and Australia. As with other nuts, metal uptake in almonds is driven largely by soil chemistry at the root zone: nickel, in particular, is absorbed through the root system and distributed to seeds in concentrations that reflect soil Ni availability. The post-1969 literature compiled by [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] places almonds consistently in the high-Ni food group alongside hazelnuts, walnuts, and peanuts, with a reported mean of 1.3 µg/g (1,300 ppb). [[sources/efsa-nickel-contam-2020|EFSA's 2020 Nickel opinion]] names nuts collectively as one of the principal dietary Ni contributors for European populations.

Lead and cadmium in whole almonds are generally low under typical commercial production conditions in North America and Europe. Both metals can enter via root uptake from contaminated soils, but the nut tissue (enclosed within the hull and shell) provides a degree of physical isolation compared to leafy or root vegetables in direct soil contact. Arsenic, mercury, tin, chromium, uranium, and aluminum are not priority analytes for raw almonds in the current corpus; data are pending. The dominant metal risk for almonds is Ni, which is relevant primarily for nickel-sensitized individuals rather than for the general population.

## Routing

This node is linked from [[products/plant-milks-non-soy-non-rice]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Nickel in almond

[[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports almond mean Ni at 1.3 µg/g (range 1.0 to 1.5 µg/g, n=5 samples) from the post-1969 AAS/PIXE literature. Almonds sit in the same population-level high-Ni group as hazelnuts (1.8 µg/g, n=12), walnuts (3.6 µg/g, n=1), peanuts (2.8 µg/g, n=2), and pistachios (0.8 µg/g, n=1). [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] subsequently names nuts collectively among the principal dietary Ni sources alongside cocoa, drinking water, legumes, and cereals. For nickel-sensitized consumers (SNAS, approximately 10 to 15 percent of the European adult population), nuts including almonds are routinely excluded from the low-nickel diet protocols; [[sources/braga2013-snas-nosologic-framework-bramani-diet|Braga et al. 2013]] BraMa-Ni diet (~50 µg Ni/day) and the conventional forbidden-foods list both exclude almonds.

## Ranges by source, region, and variety

Geographic and varietal variation data for almond metals are limited in the current corpus. The Ni data from [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] represent a Danish literature survey of samples collected between 1969 and 1982; geographic origin of those samples is not specified at the country level, limiting regional inference. The finished-product data from [[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]] reflect retail almond milk from Spain rather than raw almonds, and Pb was below detection limits in that matrix. California-origin almonds, which supply the majority of the global market, have not been systematically characterized at the regional level in the ingested corpus; this is a data gap. Synthesis of values will be updated when additional occurrence sources with geographic metadata are integrated.

## Processing effects

Processing from whole almond to almond-derived products has meaningful implications for metal distribution. Blanching (removal of the brown skin through hot-water treatment) and roasting have minimal documented effect on metal content in the nut tissue itself, as the metals are distributed through the cotyledon rather than concentrated in the skin. When almonds are pressed for oil, the metals partition almost entirely into the defatted solid fraction (almond meal or almond flour) rather than into the oil; this means almond flour and almond meal carry higher metal concentrations per unit weight than almond oil. Almond milk production dilutes metals substantially relative to whole almonds because of the high water fraction: [[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]] found Pb below detection limits and only trace Ni in retail almond milk from Spain, consistent with the expected dilution at typical almond-to-water ratios used commercially (approximately 1:7 to 1:10 by weight).

## Ingredient-derivative risk

The primary derivatives of concern for metal concentration relative to whole almond are almond flour and almond butter, both of which concentrate the nut solids without the dilution that occurs in almond milk. Almond flour, produced by blanching and grinding, retains the full metal load of the nut tissue in a denser form; at typical substitution ratios in baked goods, this derivative contributes a higher metal dose per serving than equivalent weights of wheat flour. Almond butter similarly concentrates the nut solids; the oil phase carries negligible metal content. Almond milk, by contrast, is a lower-risk derivative from a per-serving metal standpoint given the water dilution, as supported by [[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques et al. 2021]]. Almond protein isolate, if produced commercially, would represent the highest-concentration derivative, as protein isolation processes retain the metal-bound protein fractions; no data on this derivative appear in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing from regions with documented low soil Ni and low soil Pb and Cd is the primary lever for almond Ni reduction. California production dominates global supply, and California almond-growing regions have not been systematically characterized for soil metal variability in the current corpus. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

For nickel-sensitized consumers (systemic nickel allergy syndrome, SNAS), the relevant formulation lever is substituting almond-containing products with low-Ni alternatives. The BraMa-Ni diet described by [[sources/braga2013-snas-nosologic-framework-bramani-diet|Braga et al. 2013]] explicitly excludes almonds as a high-Ni food on the restricted diet protocol targeting approximately 50 µg Ni per day.

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union's Regulation (EU) 2023/915 on maximum levels for certain contaminants in food establishes maximum levels (MLs) for Pb and Cd in nuts. For tree nuts, the applicable Pb ML is 0.20 mg/kg (200 ppb) wet weight as placed on the market. The applicable Cd ML for tree nuts is 0.050 mg/kg (50 ppb) wet weight, with certain exceptions for specific nut species at lower levels ([[regulations/eu2023-contaminants-maximum-levels]]). No specific EU ML exists for Ni in almonds; Ni is regulated for drinking water but not for food matrices under current EU contaminant legislation. No US FDA action level for Pb, Cd, or Ni in whole almonds is established in the current corpus; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) has focused on infant and toddler foods rather than on tree nut commodities directly. No Codex Alimentarius ML for heavy metals in almonds appears in the current corpus.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Nickel Content of Food and Estimation of Dietary Intake]]<span class="hmi-ref-meta">Mari-Ann Flyvholm, Gitte Dalsgaard Nielsen, and Allan Andersen · Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 · 1984 · [doi.org/10.1007/BF01043419](https://doi.org/10.1007/BF01043419)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/braga2013-snas-nosologic-framework-bramani-diet|Systemic Nickel Allergy Syndrome: Nosologic Framework and Usefulness of Diet Regimen for Diagnosis]]<span class="hmi-ref-meta">M. Braga, C. Quecchia, C. Perotta, A. Timpini, K. Maccarinelli, L. Di Tommaso, et al. · International Journal of Immunopathology and Pharmacology 26(3):707-716 · 2013 · [doi.org/10.1177/039463201302600314](https://doi.org/10.1177/039463201302600314)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/begday2026-plant-milk-heavy-metal-safety\|Begday et al. 2026]]. *Integral assessment of the environmental safety of plant-based milk alternatives based on heavy metal analysis*, Izvestiya KGTU (KSTU News) | 2026 | Peer-reviewed | RU Pb, Cd, Zn, Cu occurrence in Eight plant-based milk samples assessed on the Russian market: four commercial ready-to-drink beverages (one each of almond, rice,... (n=8) |
| 2 | [[sources/good2026-plant-milk-heavy-metals\|Good et al. 2026]]. *Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks*, Scientific Reports | 2026 | Peer-reviewed | US Cr, tAs, Cd, Pb occurrence in Twenty-two commercially available milk products purchased from major grocery retailers in Houston, Texas, USA. Eight milk-type categories: cow... (n=22) |
| 3 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | PL/EU Cd, Pb, Cr, Ni occurrence in Commercial nuts (almonds, cashews, hazelnuts, peanuts, walnuts) available on the Polish market (n=69) |
| 4 | [[sources/zverina2025-plant-dairy-toxic-elements\|Zvěřina et al. 2025]]. *Essential and toxic elements in plant-based dairy alternatives: implications for vegan diets*, European Food Research and Technology | 2025 | Peer-reviewed | CZ/EU Pb, Cd occurrence in Fifty-four plant-based dairy alternative (PBDA) samples sourced from the Czech market in Brno, Czech Republic. Composition: 35 milk... (n=54) |
| 5 | [[sources/dai2024-chongqing-dietary-arsenic-exposure\|Xinghui et al. 2024]]. *Assessment of Dietary Arsenic Exposure Levels and the Associated Health Risks in Chongqing City, China*, Chinese Journal of Public Health | 2024 | Peer-reviewed | CN tAs occurrence in Chongqing city residents; food samples from 39 districts collected 2018-2023 covering 10 food categories; dietary consumption data from... (n=4900) |
| 6 | [[sources/henriksen2023-chromium-nordic-nnr\|Henriksen et al. 2023]]. *Chromium – a scoping review for Nordic Nutrition Recommendations 2023*, Food & Nutrition Research | 2023 | Peer-reviewed | EU/NO/SE Cr occurrence in Scoping review for Nordic Nutrition Recommendations 2023; literature search on chromium in diet, supplementation, and health outcomes; Nordic... |
| 7 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 8 | [[sources/redan2023-plant-milk-alternatives-elements\|Redan et al. 2023]]. *Analysis of Eight Types of Plant-based Milk Alternatives from the United States Market for Target Minerals and Trace Elements*, Journal of Food Composition and Analysis | 2023 | Peer-reviewed | US tAs, Cd, Pb occurrence in Eighty-five plant-based milk alternative product units from 19 brands purchased from 10 retail markets and an online retailer... (n=85) |
| 9 | [[sources/bielecka2021-nuts-toxic-elements-poland\|Bielecka et al. 2021]]. *Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis*, Nutrients | 2021 | Peer-reviewed | Poland tAs, Cd, Pb, tHg occurrence in One hundred twenty edible nut samples purchased from Polish markets between January and March 2021: ten samples each... (n=120) |
| 10 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Pb and Ni in retail almond milk from Spain by ICP-MS; Pb BDL, Ni trace; finished-beverage context for processed almond-derived product metals |
| 11 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni content baseline for almonds from 1969–1982 Danish literature survey; almonds high-Ni food (load factor F >> 1); foundational reference for dietary Ni burden |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 3 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
