---
title: "Non-apple fruit"
type: ingredient
commodity: non-apple-fruit
label: "Non-apple fruit"
aliases: [banana, blueberry, grape, melon, orange, peach, pear, strawberry]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13.4]
    p95_ppb: 15.6
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 11.3]
    p95_ppb: 17.9
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.9]
    p95_ppb: 9.4
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
    typical_ppb: [0, 3075]
    p95_ppb: 3918
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
    typical_ppb: [53.5, 32000]
    p95_ppb: 32900
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
used_in_products: [fruit-juices-non-apple]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 2
---

# Non-apple fruit

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | below-tier | 6/10 HMTc analytes, total n=6 | staple tier expects total n>=40; have 6 |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 2 claims checked, 2 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming non-apple-fruit: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Al, Sn; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below staple bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or a closely matching non-infant-specific food composite in the FS102048 survey. Exact concentrations remain in progress until Table 6 is parsed into structured ingredient rows with quantitation flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Non-apple fruit as a category encompasses a wide range of botanically distinct commodities (pears, peaches, berries, citrus, grapes, tropical fruits, and others) that share a broadly similar pattern of low heavy metal accumulation in edible flesh tissue. Fruit tissue is physiologically specialized for seed dispersal rather than nutrient storage, and the accumulation of phytotoxic metals such as Pb and Cd in flesh is actively limited by plant biology. Root uptake is the primary metal-entry pathway; however, the transfer factor from root to fruit flesh is substantially lower than the transfer factor from root to root tissue or leaf tissue. The protective effect of fruit skin or rind (thicker in citrus and stone fruits, thinner in berries) adds a secondary barrier against atmospheric Pb deposition and soil splash. Among non-apple fruits, the higher-risk sub-types within this category page are those with thin or consumed skins (berries, grapes) grown in contaminated soils, and those sourced from regions with elevated soil Cd from historic phosphate fertilizer use. Dried and concentrated derivatives (sultanas, dried berries, fruit juice concentrates) merit separate consideration because moisture removal concentrates all analytes on a wet weight basis.

This is a broad category page covering non-apple fruits that cannot be attributed to a dedicated commodity page. Individual fruit pages (oranges, melon, and others) carry more specific occurrence data where available.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–13.4 | low | — |
| Cd | n=1 | 0–11.3 | low | — |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1.9 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–3075 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 53.5–32000 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/fruit-juices-non-apple]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Variation within the non-apple fruit category is driven more by specific commodity type than by geography, because the biological differences between a berry, a stone fruit, and a citrus fruit are larger than the geographic soil differences for any single commodity. Berries (strawberries, blueberries, raspberries) have thin skins and relatively high surface-area-to-volume ratios, making them more susceptible to surface Pb deposition than thick-skinned citrus. Grapes, particularly wine grapes from regions where copper-based fungicides have been applied historically, may carry elevated Cu and occasionally elevated Cd in skin and flesh. Tropical fruits (mango, pineapple, papaya) are generally low-risk based on the sparse monitoring data available. Pears are botanically close to apples and show similar low metal profiles. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides the broadest single-source occurrence dataset for this category in the current corpus, covering non-apple fruit as a composite monitoring category. Specific sub-commodity breakdown data remain limited and will be expanded as individual fruit source pages accumulate.

## Processing effects

Processing effects on metal concentrations in non-apple fruit depend substantially on the specific fruit and the processing step. Skin and stone removal during production of stone-fruit purées eliminates the higher-Pb outer tissue, reducing Pb concentration in the final product relative to whole-fruit composition. Juice extraction from citrus and other fruits concentrates analytes relative to whole-fruit flesh in proportion to juice yield; the remaining pulp retains a disproportionate share of fiber-bound metals. Drying (raisins, dried apricots, dried cranberries) concentrates all analytes proportionally to moisture loss, typically producing a 4 to 8-fold increase in ppb values relative to fresh fruit on a wet weight basis. Freezing without concentration does not alter metal concentrations materially. Pasteurization of juice or purée does not affect total metal concentrations.

## Ingredient-derivative risk

The derivative with the most materially different metal profile relative to fresh fruit flesh is dried fruit: the moisture removal that makes drying commercially practical simultaneously concentrates all metals in proportion to the degree of drying. Juice concentrates and fruit purée concentrates carry similar concentration artifacts. Fruit powders (freeze-dried berry powder, for example) used in supplements and functional foods may show further-elevated ppb values relative to fresh fruit. For regulatory compliance purposes, the concentration basis (wet weight as purchased versus reconstituted versus fresh-equivalent) must be specified when comparing against regulatory limits. Individual sub-commodity ingredient pages should be consulted for derivatives specific to a given fruit type.

## Mitigation options

### Sourcing levers

Sourcing fresh fruit from suppliers operating under national monitoring programs with documented soil-history assessment reduces the primary risk from elevated soil Cd and Pb. For dried-fruit derivatives, requesting occurrence data from the supplier on a dry-weight basis (or a fresh-equivalent basis with moisture content documented) enables like-for-like comparison against regulatory limits.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Skin and stone removal before purée production reduces Pb contributed by surface deposition. For dried-fruit products, controlling drying temperature and duration and expressing analytical results on a consistent moisture-corrected basis prevents misinterpretation of concentration data.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh fruit on a wet weight basis, applicable across the non-apple fruit category. Dried fruit carries different EU limits reflecting the concentration effect of water removal. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets Pb limits for fresh fruit. No specific iAs or tHg limit applies to fresh or dried fruit under major regulatory frameworks at the category level. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

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
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
| [472d023f9](https://github.com/paleofoundation/heavymetalindex/commit/472d023f9) | 2026-05-14 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
