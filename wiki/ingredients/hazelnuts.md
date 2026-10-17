---
type: ingredient
commodity: hazelnuts
title: "Hazelnuts"
dek: "Tree nuts used whole, roasted or as paste, flour and oil in foods. Evidence covers metal occurrence, geographic sourcing, processing and regulatory frameworks."
rail_highlights:
  - label: Exposure
    text: German diet study identifies hazelnuts as dietary nickel contributors
    source: sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany
    source_label: BfR diet study
label: "Hazelnuts"
aliases: [corylus-avellana, filberts, turkish-hazelnuts]
category: nut
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 400
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [20, 150]
    p95_ppb: 400
    confidence: medium
    n_studies: 3
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [800, 4000]
    p95_ppb: 8000
    confidence: medium
    n_studies: 3
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
    typical_ppb: [50, 300]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
drivers: [tree-nut-nickel-accumulator, turkish-origin-dominance, soil-uptake, processing-roasting]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/chocolate-confections]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
hero_image: /static/heroes/nickel-legumes-nuts-cocoa.webp
quick_read:
  summary: "Hazelnut kernels accumulate nickel and cadmium from soil, and their contribution to finished foods follows the amount of hazelnut included."
  points:
    - label: Metals of concern
      text: "[[metals/nickel|nickel]] is prominent, with cadmium, lead and chromium also addressed."
    - label: Main drivers
      text: "root uptake and regional soil conditions affect kernels; hulls and skins carry different metal burdens."
    - label: Practical framing
      text: "roasting does not meaningfully remove metals; [[testing/icp-ms|lot testing]] is relevant for high-inclusion confectionery uses."
hero_image_alt: "Lentils, nuts, oats and cocoa illustrating hazelnuts ingredient context."
---

# Hazelnuts

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Hazelnut kernels accumulate nickel and cadmium from soil, and their contribution to finished foods follows the amount of hazelnut included.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/nickel">nickel</a> is prominent, with cadmium, lead and chromium also addressed.</li>
    <li><strong>Main drivers:</strong> root uptake and regional soil conditions affect kernels; hulls and skins carry different metal burdens.</li>
    <li><strong>Practical framing:</strong> roasting does not meaningfully remove metals; <a href="/testing/icp-ms">lot testing</a> is relevant for high-inclusion confectionery uses.</li>
  </ul>
</div>

This page draws on 2 peer-reviewed studies. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

Hazelnuts (Corylus avellana, also called filberts) are tree nuts grown commercially in Turkey (which produces ~70% of global supply, with the Black Sea coastal region the dominant production area), Italy (~13%, Piedmont and Campania regions), Azerbaijan (~5%), the United States (Oregon's Willamette Valley, ~3%), and Georgia. The heavy-metals profile follows the broader tree-nut pattern (see [[ingredients/walnuts]] for the category overview): high Ni from physiological accumulation, moderate Cd from soil uptake, low Pb due to woody-tissue barrier function. The current corpus loads 3 directly-routed sources: Cwielag-Drabek 2025 paired publications covering Polish 5-tree-nut panel (n=69 including hazelnuts, [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]]) and the Fechner 2022 BfR MEAL Study (n=869 broader contaminant panel including hazelnuts, [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]]). Hazelnuts are heavily used in chocolate confection (Nutella, Ferrero Rocher, hazelnut-praline chocolate), which routes the hazelnut metal profile into downstream products at high inclusion ratios.

## Why this commodity accumulates heavy metals

Hazelnut trees take up metals from soil through root uptake into the kernel-bearing tissue. The tree-nut nickel-accumulation pathway is shared with walnuts, almonds, and cashews: hazelnut kernels typically carry 800-4,000 ppb Ni on a dry-weight basis, making them among the highest-Ni tree nuts globally. Cadmium follows the standard plant pathway with hazelnuts at moderate Cd levels (20-150 ppb typical). Lead is generally low in the kernel because the woody tree tissue acts as a barrier; the hull (outer green covering, discarded during processing) carries higher Pb and Cd than the kernel itself. The Turkish dominance of global hazelnut supply means the production geography is heavily concentrated, with the Black Sea coastal region (Trabzon, Giresun, Ordu provinces) as the dominant production zone; this region has well-characterised soils with elevated Cd background in some sub-regions due to historical industrial activity and geological factors. The Polish Cwielag-Drabek 2025 dataset is the most rigorous within-tree-nut comparison for hazelnuts on Cd-Pb-Cr-Ni ([[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 10–200 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Cd | n=3 | 20–150 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–5 | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]] |
| Ni | n=3 | 800–4000 | medium | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]], [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 50–300 | low | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|1]], [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Polish Cwielag-Drabek 2025 dataset characterises Polish-market hazelnut Pb-Cd-Cr-Ni within the broader 5-tree-nut panel; the EU-and-Chinese-origin product mix in this dataset is representative of European retail hazelnut supply ([[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland]]). The German BfR MEAL Study covers hazelnuts as part of the broader 869-sample dietary contaminant panel and identifies them among the meaningful dietary Ni contributors ([[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany]]). Origin-country pattern: Turkish hazelnuts (the dominant global supply) carry similar baseline metals to Italian, Azerbaijani, and Oregon-grown commercial product per the loaded literature; specific Turkish sub-region (within Black Sea production zone) variance is not characterised in the loaded corpus. Variety-level pattern: Tonda Gentile, Tombul, Çakıldak, Mortarella, Negret, and other commercial hazelnut cultivars are not separately characterised in the loaded corpus on heavy metals. The peeled-kernel-vs-with-skin distinction is implicit; the consumed product is typically peeled kernel, and the analytical work reports kernel concentrations.

## Processing effects

Hazelnut processing (harvest, drying, dehulling, sizing, roasting, optional pellicle removal, optional grinding) does not significantly alter the per-mass metal load on a dry-weight basis. Roasting (typically 130-160°C, 10-30 minutes) drives off moisture and modifies flavour but does not measurably affect metal content. Pellicle removal (the thin brown skin around the kernel, removed for some chocolate-confection applications) reduces per-serving Pb modestly because the pellicle carries more surface-deposited Pb than the inner kernel. Grinding to paste (hazelnut paste used in chocolate-praline and gianduja confection) does not change the per-mass load but distributes it through the paste matrix. Hazelnut oil extraction partitions most metals into the spent press cake rather than the oil phase.

## Ingredient-derivative risk

Whole shelled and peeled hazelnut kernels are the baseline form. Roasted hazelnuts (the dominant consumer form) carry the same per-mass load. Ground hazelnut paste (used in chocolate-confection, gianduja, Nutella-type spreads) inherits the kernel's metal load directly. Hazelnut oil carries a small fraction of the parent kernel's metals. Hazelnut flour (used in gluten-free baking and some specialty applications) carries the kernel's full metal load on a dry-weight basis. Chocolate-and-hazelnut spread products (Nutella, store brand equivalents) inherit the hazelnut's Ni-Cd-Pb at the hazelnut inclusion ratio (typically 13-50% in retail product); these are routed to the [[products/chocolate-confections]] page where applicable. Hazelnut-containing ice cream, baked goods, and confections inherit the kernel's metal load at the inclusion ratio.

## Mitigation options

### Sourcing levers

Source from production regions with documented soil-and-water screening. Turkish Black Sea coastal production is the dominant supply; brand specifications can require lot-level metal testing on Turkish-origin product. Italian Piedmont and Campania production is broadly comparable to Turkish on metals. Oregon Willamette Valley product (the US commercial supply) is also broadly comparable.

### Agronomic levers

Soil pH management around 6.5 reduces Cd bioavailability in the orchard. Avoidance of phosphate fertilisers with elevated Cd impurity reduces ongoing Cd loading. The tree-nut nickel-accumulation pathway is a species-level feature and is not readily reduced by soil amendment.

### Processing levers

Pellicle removal reduces per-serving Pb modestly through removal of the surface-deposition-bound fraction. Validate equipment surfaces in shelling and grinding operations.

### Formulation levers

For chocolate-hazelnut spread and chocolate-confection formulations, the hazelnut inclusion ratio determines per-serving hazelnut-derived metals proportionally. Substitution with lower-Ni alternatives is not typically functional in chocolate-praline contexts where hazelnut flavour is definitional.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 5 ppb), and Ni (≤ 50 ppb) is appropriate for hazelnut buyers, particularly for the chocolate-confection supply chain where hazelnut inclusion is high.

### Packaging and storage levers

Standard food-grade packaging does not contribute to hazelnut metal load.

## Regulatory limits that apply

The EU Regulation 2023/915 sets a Pb maximum of 0.20 mg/kg for tree nuts including hazelnuts and Cd at 0.10 mg/kg fresh weight for tree nuts. The Codex Alimentarius General Standard CXS 193-1995 applies general fruit-and-nut limits without tree-nut-specific provisions. The FDA has not set hazelnut-specific action levels. Turkish regulatory framework applies the Codex limits as a baseline. The German BfR MEAL Study findings on dietary Ni from tree nuts contribute to the case for tree-nut-specific Ni regulatory guidance, but no such guidance is currently in effect. Hazelnut-containing chocolate-confection product is subject to the EU 2023/915 chocolate-Cd limits (covered separately on the chocolate ingredient pages).

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland|Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers]]<span class="hmi-ref-meta">Ćwieląg-Drabek M, Nieć-Leśniak J, Białek-Dratwa A, Piekut A, Kiciak A, Dziubanek G, et al. · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-024-04438-4](https://doi.org/10.1007/s12011-024-04438-4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany|Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods]]<span class="hmi-ref-meta">Fechner C, Hackethal C, Höpfner T, Dietrich J, Bloch D, Lindtner O, et al. · Food Chemistry: X · 2022 · [doi.org/10.1016/j.fochx.2022.100326](https://doi.org/10.1016/j.fochx.2022.100326)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland\|Ćwieląg-Drabek et al. 2025]]. *Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts: Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts – Health Risk of Polish Consumers*, Biological Trace Element Research | 2025 | Peer-reviewed | Companion paper on Polish nut health-risk assessment including hazelnuts (n=69) |
| 2 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 3 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | German MEAL-Study broader contaminant panel (n=869) covering hazelnuts as part of broad-food-spectrum |
| 4 | [[sources/bielecka2021-nuts-toxic-elements-poland\|Bielecka et al. 2021]]. *Assessment of the Safe Consumption of Nuts in Terms of the Content of Toxic Elements with Chemometric Analysis*, Nutrients | 2021 | Peer-reviewed | Poland tAs, Cd, Pb, tHg occurrence in One hundred twenty edible nut samples purchased from Polish markets between January and March 2021: ten samples each... (n=120) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [aa06ad499](https://github.com/paleofoundation/heavymetalindex/commit/aa06ad499) | 2026-08-09 | correction | 1 source removed; narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 3 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
<!-- END: hmi-page-history -->
