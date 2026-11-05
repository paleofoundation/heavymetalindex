---
retired: true
noindex: true
redirect_target: products/fruit-juices-non-apple
retirement_date: 2026-10-25
retirement_authority: "HMI-HELD-TRIAGE-1 (Elon PASS 25 Oct 2026 21:01): 301 to parent; findings stay in the store"
title: "Fruit juice ready drinks"
dek: "Diluted juice beverages made with water and fruit juice, sometimes with sugars or flavor components. The page covers metal measurements, ingredient sources, processing and preparation."
rail_highlights:
  - label: Exposure
    text: FDA measurements cover prepared fruit drinks
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
  - label: Key distinction
    text: Non detects in these samples are not measured zeros
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: fruit-juice-ready-drinks
label: "Fruit juice ready drinks"
aliases: [fruit juice ready drinks]
category: juice-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 29.9]
    p95_ppb: 49.9
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0.2]
    p95_ppb: 6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 5.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0.2]
    p95_ppb: 1
    confidence: low
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
sources: 4
hero_image: /static/heroes/citrus-oranges-tangerines-grapefruit-juice.webp
quick_read:
  summary: "Fruit juice ready drinks inherit metals from juice and dilution water, with fruit origin and dilution affecting finished concentrations."
  points:
    - label: Metals of concern
      text: "[[metals/lead|lead]] and arsenic, with cadmium also addressed in treatment options"
    - label: Main drivers
      text: "fruit-growing soils and legacy pesticide residues, plus the quality and proportion of dilution water"
    - label: Practical framing
      text: "assess the ready-to-drink mixture; concentration and reconstitution retain metals while dilution lowers concentration"
hero_image_alt: "Orange, clementine, tangerine, grapefruit and citrus juices illustrating fruit juice ready drinks ingredient context."
---

# Fruit juice ready drinks

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Fruit juice ready drinks inherit metals from juice and dilution water, with fruit origin and dilution affecting finished concentrations.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/lead">lead</a> and arsenic, with cadmium also addressed in treatment options</li>
    <li><strong>Main drivers:</strong> fruit-growing soils and legacy pesticide residues, plus the quality and proportion of dilution water</li>
    <li><strong>Practical framing:</strong> assess the ready-to-drink mixture; concentration and reconstitution retain metals while dilution lowers concentration</li>
  </ul>
</div>

This page draws on evidence from [[sources/fsa2016-infant-food-formula-metals-survey|UK Food Standards Agency]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Fruit juice ready drinks are diluted, ready-to-consume juice beverages that combine fruit juice (from concentrate or not from concentrate) with water and, in some formulations, added sugars, vitamin C, and flavor components. The metal burden of these products is determined primarily by the metal content of the fruit juice fraction, which in turn reflects the metal uptake of the source fruit crop and, to a lesser extent, by the quality of the dilution water. Apple juice is a historically notable juice for lead content, partly because lead arsenate was used as a pesticide in US apple orchards through the mid-twentieth century, leaving residual Pb and As in orchard soils that continues to contribute to apple and apple juice metal burdens from some growing regions. Grape juice and grape-based juice drinks carry arsenic and Pb from vineyard soils and from historically applied copper-based and lead arsenate fungicides. The dilution of juice concentrate with water to ready-to-drink strength reduces per-serving metal exposure proportional to the dilution factor, but does not eliminate it. The water fraction contributes metals according to the source water quality, which for municipal-supply water is generally low.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–29.9 | low | — |
| Cd | n=1 | 0–0.2 | low | — |
| iAs | n=1 | 0–3.6 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.2 | low | — |
| Ni | n=1 | 63 | low | — |
| Al | n=1 | 0–2560 | low | — |
| Cr | n=1 | 48.6–65.4 | low | — |
| Sn | n=1 | 0–8.9 | low | — |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The metal profile of fruit juice ready drinks varies most strongly by the type of fruit used as the juice base. Apple-based drinks and blends that include apple juice carry higher Pb expectations than citrus-based drinks because of the legacy apple orchard soil contamination pathway; FDA's compliance history for apple juice includes detections above guidance values for Pb and As from certain import and domestic sources. Grape-based drinks reflect vineyard soil Pb and As, which vary by region (European wine regions on historically mineralized soils versus New World vineyards on less disturbed soils). Citrus-based drinks (orange, grapefruit) are generally lower risk across all metals because citrus grows in different soil and agricultural-history contexts and the thick peel provides partial protection to the fruit flesh. Multi-fruit blends mix these profiles in proportion to the juice volume shares from each source. The FSA/Fera survey measured fruit juice ready drinks as a composite category without disaggregation by juice type, so species-level variation is not yet characterized at the product level in the current corpus.

## Processing effects

Concentration and reconstitution of juice (making and using juice from concentrate) does not remove heavy metals; metals are non-volatile and remain in the juice fraction through evaporation and reconstitution. Pasteurization of juice has no effect on metal concentrations. Clarification of juice (filtration, fining with gelatin or bentonite clay) can in principle reduce metal concentrations if the fining agent adsorbs metal species, but this is not a standard industry practice specifically directed at heavy metal removal. The addition of vitamin C (ascorbic acid) as a preservative does not affect metal concentrations. Ready-to-drink dilution of juice concentrate with water reduces absolute metal concentrations proportional to the dilution ratio, making ready-to-drink products lower per milliliter in metals than the concentrated juice source.

## Ingredient-derivative risk

Fruit juice ready drinks are finished consumer beverages. The concentrated juice intermediate used to produce them carries substantially higher metal concentrations per unit volume; juice concentrates used as ingredients in other products (smoothies, flavored dairy drinks, confectionery glazes) contribute metals proportional to the volume and concentration factor. Fruit juice used in infant food or infant drink products faces stricter regulatory limits in the EU than the same juice in adult products, and the ready-to-drink format assessed here is the relevant comparator for infant juice products.

## Mitigation options

### Sourcing levers

Selecting juice from fruit origins with documented low-Pb and low-As soil histories (avoiding legacy orchard or vineyard regions known for historical pesticide contamination) is the most effective upstream lever. For apple-based drinks specifically, preferring juice concentrate from certified modern orchards on non-legacy soils, or from New World growing regions where lead arsenate was used less extensively and over a shorter historical period, reduces the expected Pb burden.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

For manufacturers with the facility capability, treating fruit juice with activated carbon or ion-exchange filtration before concentration can reduce Pb, As, and Cd. These are not standard juice industry processes and would require validation for flavor impact. Selecting high-quality dilution water (reverse osmosis treated or equivalent) eliminates the water-borne metal contribution from the dilution fraction.

### Formulation levers

Reducing the proportion of higher-risk juice types (apple, grape) in the blend in favor of lower-risk citrus or tropical fruit juices reduces expected average metal exposure per serving. For products targeting infants and young children, formulating with low-risk juice types and confirming compliance with infant-specific limits before market introduction is the standard responsible practice.

### Testing and QC levers

Finished product testing by ICP-MS for Pb and As is the most common and directly regulatory-relevant QC test for juice products in this category. Given FDA's historical focus on Pb and As in apple juice, manufacturers of apple-containing products should test every production lot or every concentrate lot, while manufacturers of exclusively citrus-based products may apply a less intensive surveillance program justified by the lower risk profile of that juice type.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU general food law maximum level for Pb in fruit juices under [[regulations/eu2023-contaminants-maximum-levels]] is 0.050 mg/kg (50 ppb), which is stricter than the general food Pb limit and reflects the elevated Pb levels historically observed in concentrated and processed juice products. For fruit juices specifically intended for infants and young children (labeled as such), the EU applies an even stricter maximum Pb limit. No EU maximum level exists for total arsenic in fruit juice; the regulatory focus for arsenic in food is on inorganic arsenic in specific high-risk commodities (cereals, rice). In the United States, FDA has established a guidance level for Pb in juice (all types) of 50 ppb, issued in the context of the juice HACCP regulation and available at [[regulations/fda-juice-haccp-lead-50ppb]], which applies to juice as a food safety reference point. For arsenic in apple juice specifically, FDA has issued draft guidance recommending a limit of 10 ppb for inorganic arsenic, consistent with the drinking water MCL, though this guidance had not been finalized as of the current date.

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 193: Fruit drink, from powder | tAs | 3 | 0 | ND in all composites | 1 |
| 193: Fruit drink, from powder | Cd | 3 | 0 | ND in all composites | 1 |
| 193: Fruit drink, from powder | Cr | 3 | 0 | ND in all composites | 25 |
| 193: Fruit drink, from powder | Pb | 3 | 0 | ND in all composites | 1 |
| 193: Fruit drink, from powder | tHg | 3 | 0 | ND in all composites | 1 |
| 193: Fruit drink, from powder | Ni | 3 | 0 | ND in all composites | 20 |
| 193: Fruit drink, from powder | U | 3 | 0 | ND in all composites | 1 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | tAs | 3 | 1 | 1.1 | 1 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | Cd | 3 | 0 | ND in all composites | 1 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | Cr | 3 | 0 | ND in all composites | 25 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | Pb | 3 | 0 | ND in all composites | 1 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | tHg | 3 | 0 | ND in all composites | 1 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | Ni | 3 | 0 | ND in all composites | 20 |
| 307: Fruit drink (5% - 25% juice), canned or bottled | U | 3 | 1 | 1.4 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
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
