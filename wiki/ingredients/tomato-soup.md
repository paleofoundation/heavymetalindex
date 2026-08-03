---
title: "Tomato soup"
type: ingredient
commodity: tomato-soup
label: "Tomato soup"
aliases: ["Soup, tomato, canned, condensed, prepared with water", "tomato soup"]
category: soup
tds_food:
  number: 156
  description: "Soup, tomato, canned, condensed, prepared with water"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [7.5, 9.6]
    p95_ppb: 9.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [50.6, 68.2]
    p95_ppb: 68.6
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Tomato soup

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 156, "Soup, tomato, canned, condensed, prepared with water." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned tomato soup is a composite processed product whose metal profile is determined by two distinct mechanisms. The first is inheritance from the tomato base: Pb and Cd present in the tomato paste or puree used in soup manufacture are carried through processing unchanged, because neither metal is removed by cooking, blending, or acidification. The second mechanism is active migration of tin (Sn) from the tinplate can into the acidic soup matrix during retort sterilisation and shelf storage. Tomato soup is one of the most extensively studied matrices for tin migration from cans precisely because its low pH (typically around 4.0 to 4.4) and high water activity create ideal conditions for tin dissolution from unlined or inadequately lined tinplate. Studies from the United Kingdom and elsewhere have documented elevated Sn concentrations in canned condensed tomato soup relative to other canned products; this is a well-characterised migration pathway rather than a background soil-accumulation phenomenon.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 7.5–9.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 50.6–68.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Soup, tomato, canned, condensed, prepared with water" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 7.3 | 10 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 47 | 69 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data (n=3) shows Cd in the range 7.3 to 10 ppb and Ni in the range 47 to 69 ppb for condensed tomato soup prepared with water ([[sources/fda2022-tds-elements-fy2018-fy2020]]). These values represent a composite of US retail products from a single survey period and should be interpreted as a single-source snapshot. Variation across brands and can types (lacquer-lined versus unlined, BPA-free versus conventional) is expected to be meaningful for Sn but is not yet quantified in the current corpus for Cd and Ni specifically.

## Processing effects

The critical processing effect for canned tomato soup is Sn migration from the tinplate container during retort sterilisation (typically 121 degrees Celsius for several minutes) and subsequent ambient-temperature shelf storage. The high acidity of tomato soup drives electrochemical dissolution of tin from the can interior surface. Sn migration rates are substantially reduced by internal lacquer coatings applied to the can; unlined or inadequately coated cans can yield Sn concentrations several times higher than lacquer-lined equivalents over the same storage period. Storage time and temperature compound the effect: Sn concentration in canned acidic foods increases progressively over shelf life. The retort sterilisation step itself does not remove Pb or Cd from the tomato base; thermal processing concentrates slightly through minor water loss but does not alter the metal burden inherited from the raw ingredients.

## Ingredient-derivative risk

Tomato soup is itself a derivative of tomato paste or puree. The condensed soup format, which is diluted with water before consumption, carries a higher nominal Sn and metal concentration on a as-packaged basis than ready-to-serve soup because the same metal load is distributed across less water before preparation. Bouillon-based and cream-of-tomato variants introduce additional ingredients (starch, cream, dairy) that may slightly dilute tomato-derived metals but also introduce their own metal contributions at low concentrations. Tomato-based pasta sauces, pizza sauces, and ketchup are related derivatives; the canned variants share the Sn migration risk while the glass-packaged equivalents do not.

## Mitigation options

### Sourcing levers

Sourcing tomato paste from regions with documented low Pb and Cd in growing soils reduces the inherited metal load in the soup base. Supplier qualification with soil and raw paste testing is the primary upstream lever.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Switching from unlined tinplate cans to lacquer-lined or fully polymer-coated cans is the most effective single intervention for Sn. Published studies indicate that internal lacquering reduces Sn migration by a substantial margin relative to unlined tinplate, particularly in high-acid applications such as tomato soup. Minimising shelf-storage time after filling and controlling post-retort storage temperature further limit Sn accumulation.

### Formulation levers

Using glass jars or carton packaging entirely eliminates the Sn migration pathway. Reformulation to reduce the tomato-paste concentration in the recipe would proportionally reduce inherited Pb and Cd but would also alter the product's flavour and tomato solids content.

### Testing and QC levers

Lot-level Sn testing of finished soup from tinplate cans is warranted for high-volume producers, particularly for products with extended shelf life. Sn is relatively inexpensive to test by ICP-OES or ICP-MS and provides direct evidence of can integrity. Testing incoming tomato paste for Pb and Cd at the raw-material qualification stage catches soil-derived contamination before it enters production.

### Packaging and storage levers

Packaging material selection is the dominant lever for Sn. Lacquer-lined cans, retort pouches, and glass containers each offer meaningfully lower Sn migration risk than unlined tinplate. The EU maximum level of 200 mg/kg (200,000 ppb) for Sn in canned solid food and 100 mg/kg in canned liquid food provides the regulatory ceiling; well-managed lacquer-lined cans typically remain well below these limits in practice.

## Regulatory limits that apply

The European Union sets a maximum level for tin (Sn) in canned tomato soup of 100 mg/kg (100,000 ppb) on a wet-weight basis for canned liquid food under [[regulations/eu2023-contaminants-maximum-levels]]; canned solid food carries a higher limit of 200 mg/kg. For the tomato base ingredients, EU maximum levels for Pb (0.10 mg/kg for fresh tomato) and Cd (0.050 mg/kg for fresh tomato) apply at the raw-material level; processed tomato products are subject to matrix-specific provisions. No FDA action level specifically addressing Sn in canned food is currently enforced in the United States, though FDA has issued guidance acknowledging Sn as a recognized contaminant in tinned acidic foods.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 1 routed source. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Soup, tomato, canned, condensed, prepared with water (n=3); detectable concentrations for Cd, Ni |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
