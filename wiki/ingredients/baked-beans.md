---
title: "Baked beans"
dek: "A composite of beans and tomato sauce, commonly packaged in cans. Explore the evidence on metals from ingredients, tin migration, processing and packaging."
rail_highlights:
  - label: Key distinction
    text: UK survey evidence concerns a baked bean food composite
    source: sources/fsa2016-infant-food-formula-metals-survey
    source_label: FSA survey
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
    status: "in_progress"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: "2026-09-10"
    value_kind: "unquantified"
    evidence: []
    evidence_note: "The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified."
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
hero_image: /static/heroes/beans-dry-cooked-baked.webp
quick_read:
  summary: "Baked beans combine soil-derived metals from beans and sauce with a separate tin pathway from can contact."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]] and tin are the main concerns described; lead is also relevant to bean-based pur\u00e9es"
    - label: Main drivers
      text: "bean and tomato uptake from soil, plus acidic sauce contact with tinplate during processing and storage"
    - label: Practical framing
      text: "consider packaging, storage time and temperature; soaking and discarding water may reduce soluble metals, but product-specific effects are unresolved"
hero_image_alt: "Dry white and red beans, plain cooked beans and baked beans in tomato sauce illustrating baked beans ingredient context."
---

# Baked beans

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Baked beans combine soil-derived metals from beans and sauce with a separate tin pathway from can contact.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a> and tin are the main concerns described; lead is also relevant to bean-based purées</li>
    <li><strong>Main drivers:</strong> bean and tomato uptake from soil, plus acidic sauce contact with tinplate during processing and storage</li>
    <li><strong>Practical framing:</strong> consider packaging, storage time and temperature; soaking and discarding water may reduce soluble metals, but product-specific effects are unresolved</li>
  </ul>
</div>

This page draws on evidence from [[sources/fsa2016-infant-food-formula-metals-survey|UK Food Standards Agency]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Baked beans are a composite food product consisting of navy or haricot beans cooked in a tomato-based sauce and typically packaged in tinplate cans. The metal load of the product has three distinct sources. First, the beans themselves accumulate metals, principally Cd, from the soil via root uptake; legumes are moderate Cd accumulators because their root systems explore a significant soil volume and their nitrogen-fixing symbiosis can induce changes in rhizosphere chemistry that affect metal availability. Second, the tomato sauce component contributes metals from the tomato ingredient, which is also a moderate soil-to-fruit accumulator. Third, and uniquely among most foods, the tinplate can itself is a source of inorganic Sn: the acidic sauce contacts the can lining during thermal processing and storage, dissolving Sn from the tin layer at rates that increase with storage duration and temperature.

The FSA/Fera UK survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) measured this food composite in Table 6 as part of a broad UK market survey; specific quantitative values from that source remain in progress pending table extraction. Given that baked beans are typically sold in tinplate cans and the sauce is acidic (pH approximately 3.5 to 4.5), Sn contamination is a relevant analyte for this matrix even though Sn is generally a lower acute-toxicity concern at concentrations below 200 mg/kg.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–39 | low | — |
| Cd | Source context | Not quantified | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 1015–3692 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 33.6–82.8 | low | — |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

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

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**Cd.** The former exact-zero concentration had no supported measured-zero interpretation. Source observations are retained separately; a population concentration is not quantified.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72e](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72e) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
