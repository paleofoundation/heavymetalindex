---
title: "Fruit juice ready drinks"
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
sources: 0
---

# Fruit juice ready drinks

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | below-tier | 7/10 HMTc analytes, total n=8 | common tier expects total n>=15; have 8 |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Ni THIN, Al THIN, Cr THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Ni: needs 2 more study(ies); Al: needs 2 more study(ies); Cr: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming fruit-juice-ready-drinks: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 8 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Ni: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Cr: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below common bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


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

This node is linked from the ingredient index and source routing list.

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

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [d3fe12511](https://github.com/paleofoundation/heavymetalindex/commit/d3fe12511) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
