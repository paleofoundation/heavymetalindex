---
type: ingredient
commodity: plums
title: "Plums"
dek: "Stone fruits consumed fresh and as prunes, juices and preserves. Explore the evidence on regional metal occurrence, drying, derivatives and regulatory context."
rail_highlights:
  - label: Exposure
    text: Regional fruit surveys report lead and cadmium in plums
    source: sources/lee2023-south-korea-fresh-fruits-seven-metals
    source_label: Fruit study
label: "Plums"
aliases: [prunus-domestica, european-plum, japanese-plum, prunes, dried-plums]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 250
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: 80
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
  tAs:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, atmospheric-deposition, drying-concentration, geography]
lower_risk_variants: ["[[ingredients/fresh-plums]]"]
higher_risk_variants: ["[[ingredients/prunes-dried-plums]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 5
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
hero_image: /static/heroes/orchard-fruit-apples-pears-stone-fruit.webp
quick_read:
  summary: "Plum metals reflect soil uptake and surface deposition, while drying to prunes concentrates the existing metal load through moisture loss."
  points:
    - label: Metals of concern
      text: "[[metals/lead|lead]] and cadmium are reported, alongside total arsenic, nickel and chromium"
    - label: Main drivers
      text: "soil uptake and airborne deposition affect plums; skin retains more [[metals/lead|lead]] than flesh"
    - label: Practical framing
      text: "drying changes the concentration basis; [[mitigation/testing-and-qc|testing]] should preserve preparation and moisture context"
hero_image_alt: "Apple, pear, peach, nectarine and plums illustrating plums ingredient context."
---

# Plums

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Plum metals reflect soil uptake and surface deposition, while drying to prunes concentrates the existing metal load through moisture loss.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/lead">lead</a> and cadmium are reported, alongside total arsenic, nickel and chromium</li>
    <li><strong>Main drivers:</strong> soil uptake and airborne deposition affect plums; skin retains more <a href="/metals/lead">lead</a> than flesh</li>
    <li><strong>Practical framing:</strong> drying changes the concentration basis; <a href="/mitigation/testing-and-qc">testing</a> should preserve preparation and moisture context</li>
  </ul>
</div>

This page draws on 2 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

Plums (Prunus domestica, European plum; Prunus salicina, Japanese plum) are stone fruits grown commercially across temperate climates: California (US), China (the world's largest producer), Serbia, Romania, Turkey, France, and Italy. The current corpus loads 2 directly-routed sources: Lee 2023 South Korean fresh fruits 7-metal panel covering plums within the broader survey (n=207 across multiple fruits, [[sources/lee2023-south-korea-fresh-fruits-seven-metals]]) and Sembratowicz 2010 Polish domestic fruits nitrate-Pb-Cd panel covering plums (n=108, [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Plums sit at the lower-middle of the fresh-fruit category for Pb-and-Cd; dried plums (prunes) carry concentrated metals on a dry-weight basis through the drying step.

## Why this commodity accumulates heavy metals

Plums take metals from soil through root uptake into the fruit-bearing tissue, and atmospheric deposition onto the fruit surface during the growing cycle. Prunus species are moderate Cd accumulators relative to apples and pears; the thicker skin of plums provides some buffering against atmospheric Pb deposition into the consumed flesh, with the skin carrying more Pb than the flesh. The Korean Lee 2023 dataset characterised seven metals (tAs, Sb, Ba, Cd, Cr, Ni, Pb) across 207 fresh-fruit samples including plums and confirmed the moderate-Cd, low-Pb pattern for the category ([[sources/lee2023-south-korea-fresh-fruits-seven-metals]]). The Polish Sembratowicz 2010 Lublin-area dataset covered 108 fruit samples and provided Pb-Cd baseline for European-market plums ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Drying (the production of prunes / dried plums) concentrates metals on a dry-weight basis by 4-5× through moisture removal; this is a basis change rather than contamination.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5–100 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]] |
| Cd | n=2 | 1–30 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 1–50 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| tHg | data gap | — | — | — |
| Ni | n=1 | 50–500 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 10–200 | low | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Korean Lee 2023 dataset is the largest single-jurisdiction recent fresh-fruit dataset covering plums, with 207 samples across the 7-metal panel and the broader fresh-fruit category ([[sources/lee2023-south-korea-fresh-fruits-seven-metals]]). The Polish Sembratowicz 2010 work (n=108 domestic fruits including plums) provides European-market baseline with the additional nitrate context ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits]]). Origin-country pattern: Chinese, Serbian, US-California, and EU commercial plums carry broadly comparable metal profiles per the routing-layer-accessible corpus. Variety-level pattern: European plums (Prunus domestica, used for prunes and culinary plums) and Japanese plums (Prunus salicina, the dominant fresh-eating commercial variety in the US market) are not separately characterised on heavy metals in the loaded corpus. Prune-specific data (concentrated by drying) is implicit through the dry-weight basis but the loaded corpus does not provide dried-plum-specific values.

## Processing effects

Drying fresh plums to prunes concentrates metals on a dry-weight basis by 4-5× through moisture removal (fresh plum ~85% moisture to prune ~30% moisture). Pitting before drying does not change the per-mass load. Some commercial prune production uses sulfur-dioxide treatment for color preservation; this is a non-metal-contamination consideration but worth flagging. Plum jam and plum preserves (concentrated through cooking and sugar addition) carry the parent fruit's metal load at the concentration ratio of the cooking step. Plum juice extracts soluble metals; per-serving exposure tracks the juice-yield ratio.

## Ingredient-derivative risk

Fresh plums (whole or pitted) represent the baseline. Prunes (dried plums) carry the 4-5× concentrated metal load on a dry-weight basis. Prune juice (the liquid extract used for digestive applications) carries soluble metals from the parent fruit. Plum preserves, plum sauce (used in Asian cuisine), and plum-flavoured products carry the parent fruit's metal load proportional to the inclusion ratio. Dried-plum-and-prune-based baby food applications carry the prune metal load directly to infant exposure.

## Mitigation options

### Sourcing levers

Source from production regions with documented soil-and-water screening. Chinese, Serbian, Romanian, US-California, and EU commercial supply chains are broadly equivalent. For brand-controlled-supply operations, single-orchard sourcing enables soil-and-water transparency.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading.

### Processing levers

Pitting and washing do not significantly affect internalised metals. Drying is a basis change, not contamination.

### Formulation levers

For products using plums or prunes as an ingredient, the inclusion ratio caps per-serving exposure. Substitution with other dried fruits (raisins, dates) does not meaningfully change the metal profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb fresh-weight), Cd (≤ 1 ppb fresh-weight), and the broader fruit-relevant panel is appropriate.

### Packaging and storage levers

Standard food-grade packaging does not contribute to plum or prune metal load. For canned plum products, modern fully-welded steel cans with food-grade interior coatings are appropriate.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 applies the general fresh-fruit Pb maximum of 0.10 mg/kg fresh weight and Cd at 0.05 mg/kg for fresh fruit (general). The EU Regulation 2023/915 applies the same fresh-fruit Pb limit of 0.10 mg/kg and Cd at 0.020 mg/kg for fresh fruit. For prunes (dried plums), the EU 2023/915 applies a dried-fruit limit framework that allows for the dry-weight basis conversion. The FDA has not set plum-specific action levels.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/lee2023-south-korea-fresh-fruits-seven-metals|Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea]]<span class="hmi-ref-meta">Lee J, Hwang I, Park YS, and Lee DY · Applied Biological Chemistry · 2023 · [doi.org/10.1186/s13765-023-00799-x](https://doi.org/10.1186/s13765-023-00799-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits]]<span class="hmi-ref-meta">Sembratowicz I, Rusinek E, and Ognik K · Polish Journal of Environmental Studies · 2010</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | South Korean fresh-fruit 7-metal panel including plums (n=207) |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 5 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | Polish Lublin-area domestic-fruit Pb-Cd panel including plums (n=108) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
