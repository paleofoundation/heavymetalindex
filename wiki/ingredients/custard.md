---
title: "Custard"
type: ingredient
commodity: custard
label: "Custard"
aliases: [ready to serve custard]
category: dairy-dessert
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 14.8]
    p95_ppb: 51.1
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 4.3]
    p95_ppb: 5.2
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 11.2]
    p95_ppb: 33.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2.4
    confidence: low
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
    typical_ppb: [0, 1734]
    p95_ppb: 2352
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
    typical_ppb: [0, 200.6]
    p95_ppb: 245.4
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

# Custard

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Custard is a dairy-based preparation made primarily from milk or cream, egg yolks, and sugar, cooked until thickened by egg protein coagulation. Its heavy metal risk profile is low for most analytes, reflecting the generally clean metal status of both dairy and eggs under normal commercial production conditions. Milk carries metals primarily as a function of the dairy cow's feed and water supply: cadmium and lead are poorly transferred from feed into milk, with transfer factors typically below 0.01 (less than 1% of dietary metal appears in milk on a comparable weight basis), which is why dairy products appear at the low end of dietary metal exposure estimates. Egg yolk contributes trace metals at concentrations reflecting the hen's feed and environment, but under commercial laying hen conditions where feed is formulated from low-metal ingredients, egg metal content is low.

The FSA/Fera FS102048 survey measured custard or equivalent dairy composite as part of its non-infant food survey Table 6, providing the primary sourcing anchor for this page [[sources/fsa2016-infant-food-formula-metals-survey]]. Exact values from that table await structured parsing. Custard's composite nature (milk plus egg plus sugar plus starch) means that even if any single component carries trace metals, the dilution effect of mixing multiple low-risk ingredients reduces the per-gram metal burden in the finished product further.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–14.8 | low | — |
| Cd | n=1 | 0–4.3 | low | — |
| iAs | n=1 | 0–11.2 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1734 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–200.6 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The only structured source for custard heavy metal levels currently integrated into this corpus is the FSA/Fera FS102048 survey, which measured metal concentrations in custard as part of a broader UK survey of non-infant foods [[sources/fsa2016-infant-food-formula-metals-survey]]. Exact values remain in progress pending structured table parsing. No peer-reviewed multi-region survey specifically characterizing heavy metal concentrations in custard products is in the current corpus.

Regional variation in custard metal content would be expected to follow the variation in its primary inputs: milk from dairy cattle in regions with elevated soil cadmium or lead, or where cattle consume contaminated forage, could contribute higher metals to custard than milk from low-contamination regions. Similarly, eggs from hens with unusual environmental metal exposures (for example, near mining areas, as documented in Thailand by [[sources/aendo2024-thailand-egg-metals-goldmine]] for eggs generally) could contribute more metal to custard than eggs from standard commercial production systems.

## Processing effects

Custard preparation involves heating the milk-egg mixture to coagulate proteins and thicken the product, then cooling. This thermal processing does not reduce heavy metal concentrations; metals in the dairy and egg inputs are retained in the set custard matrix. Sugar and starch thickeners, if used, add negligible metals.

Commercial custard production uses stainless steel equipment, which contributes negligible chromium or nickel to a neutral-pH dairy product under normal processing temperatures, unlike acidic or high-temperature industrial processes where equipment leaching is more relevant.

## Ingredient-derivative risk

Custard is a finished product rather than an industrial ingredient in most contexts. In confectionery and bakery applications, custard powder or custard filling may be used as a component of pastries, trifles, or confections. Custard powder (typically starch, colouring, and flavouring with no dairy) is a different product category from dairy custard. In all cases, the metal contribution from a custard component to a composite product will be proportional to its weight fraction and the low metal concentrations of the dairy and egg inputs.

## Mitigation options

### Sourcing levers

Procuring milk from dairy herds raised in regions with low soil cadmium and lead is the relevant lever, though given the low milk-to-cow transfer factors for these metals, even moderate contamination of dairy cow feed is unlikely to materially elevate custard metal content under normal commercial conditions. Egg sourcing from commercial laying flocks on formulated low-metal feed reduces any egg-origin metal contribution.

### Agronomic levers

_No custard-specific agronomic lever applies. For dairy-origin cadmium, see [[ingredients/butter]] and [[ingredients/milk]] when those pages are created; for egg-origin metals, see [[ingredients/eggs]]._

### Processing levers

No processing-level intervention is specifically applicable for reducing heavy metals in custard beyond selecting clean-sourced inputs. Standard food safety cleaning of equipment between production runs is not a metal-control issue for this product category.

### Formulation levers

_No quantified data on formulation substitution effects on custard metal content is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given that custard is a low-risk matrix under normal production conditions, heavy metal testing of finished custard products is lower priority than testing of higher-risk ingredient categories. Periodic cadmium and lead testing of the milk and egg inputs that feed into custard production is the most efficient testing leverage point.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in custard is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for lead in liquid milk is 0.020 mg/kg (20 ppb) wet weight, one of the strictest food-category lead limits in the EU framework, reflecting the use of dairy as a major dietary staple particularly for infants and children. Custard, as a prepared dairy-based product, would fall under EU limits for processed dairy products, where the applicable lead ML depends on the product's dairy fraction and the specific regulatory product category. For cadmium, dairy products are subject to a maximum of 0.050 mg/kg (50 ppb) under EU general food contaminant rules. Codex Alimentarius (CXS 193-1995 and revisions) sets a lead limit of 0.020 mg/kg for liquid milk. No US federal maximum level for lead or cadmium in custard or prepared dairy desserts has been finalized as of 2026.

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/aendo2024-thailand-egg-metals-goldmine|Heavy metal contamination in eggs on poultry farms and ecological risk assessment around a gold mine area in northern Thailand]]<span class="hmi-ref-meta">Aendo P, Mingkhwan R, Senachai K, Pinniam N, Sonthong K, and Tulayakul P · Environmental Geochemistry and Health · 2024 · [doi.org/10.1007/s10653-024-02215-9](https://doi.org/10.1007/s10653-024-02215-9)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
