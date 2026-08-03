---
title: "Butternut squash"
type: ingredient
commodity: butternut-squash
label: "Butternut squash"
aliases: [butternut squash]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 6.5]
    p95_ppb: 7.3
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0.9, 2.2]
    p95_ppb: 2.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [5.2, 43.2]
    p95_ppb: 45.6
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 3215]
    p95_ppb: 3478
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
    typical_ppb: [0, 10.5]
    p95_ppb: 12.8
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
sources: 1
---

# Butternut squash

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Butternut squash is a cucurbit (Cucurbitaceae family) whose edible flesh is physically separated from direct soil contact by a thick, relatively impermeable outer rind. This anatomical feature fundamentally limits the soil-to-fruit metal transfer pathway that drives accumulation in root vegetables such as carrot and parsnip. Metals must travel via the root system and vascular transport into the developing fruit, and the cucurbit plant does not prioritize metal translocation to fruit tissue the way some brassica or root crops do. As a result, butternut squash exhibits substantially lower Pb and Cd concentrations than root vegetables grown in the same soil. That said, root uptake of cadmium and lead from contaminated soil does occur, and waterlogged or heavily industrially contaminated growing conditions can produce detectable fruit-tissue concentrations. Nickel and chromium can reach squash flesh at low but measurable concentrations depending on soil levels. The FSA/Fera FS102048 survey included butternut squash among non-infant food composites, confirming its inclusion in UK dietary exposure monitoring [[sources/fsa2016-infant-food-formula-metals-survey]].

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 6 below 5 | below pooling depth: Pb, Cd, iAs, tHg, Al, Sn |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
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
| Pb | n=1 | 0–6.5 | low | — |
| Cd | n=1 | 0.9–2.2 | low | — |
| iAs | n=1 | 5.2–43.2 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.2 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–3215 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–10.5 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey measured butternut squash as part of a broader non-infant food composite survey in the UK [[sources/fsa2016-infant-food-formula-metals-survey]]; exact tabulated values for butternut squash from Table 6 of that report remain in progress pending structured extraction. The general pattern in the cucurbit literature is Pb and Cd concentrations considerably lower than for root vegetables, typically in the single-digit ppb range for Pb in non-contaminated agricultural settings. Geographic variation follows soil quality: squash grown on arable land with low industrial impact shows very low metal accumulation, while squash from irrigated fields using contaminated water or soils with legacy industrial contamination can show elevated root and flesh values. No independent peer-reviewed surveys specifically for butternut squash metal occurrence are represented in the current corpus beyond the FSA source.

## Processing effects

Peeling butternut squash before consumption or processing removes the outer rind and the immediately sub-surface flesh layer, which may carry higher metal concentrations than the inner flesh due to proximity to the external environment. Cooking (steaming, boiling, or roasting) does not materially alter metal concentrations in the edible tissue. Pureed butternut squash, as used in baby food, reflects the concentration in the peeled and cooked flesh. Commercial baby food production typically uses peeled squash, which inherently excludes the highest-concentration outer layer.

## Ingredient-derivative risk

Butternut squash appears as an ingredient in baby food purees, soups, and pasta sauces. Given its generally low metal accumulation profile relative to root vegetables, its contribution to product-level metal load is modest. Butternut squash powder or concentrate, used in snack foods or functional food formulations, concentrates metals in proportion to the moisture reduction, but from a low baseline. Butternut squash is sometimes used as a substitute for higher-risk root vegetables (carrot, sweet potato) in low-metal formulation strategies for infant foods.

## Mitigation options

### Sourcing levers

Sourcing butternut squash from regions with documented low soil Pb and Cd, and from suppliers with verified non-wastewater irrigation, is the primary lever. Given the vegetable's inherently low accumulation, standard agricultural-quality soil is generally sufficient to produce below-regulatory-limit fruit.

### Agronomic levers

Soil pH management to maintain conditions above 6.0 reduces metal bioavailability in the root zone, limiting root uptake and subsequent translocation to fruit. Avoiding wastewater irrigation eliminates the most significant external contamination pathway.

### Processing levers

Peeling prior to cooking or pureeing is the most practical processing lever and is standard practice for this commodity. Boiling with water exchange further reduces any water-soluble metal load in the cooked product.

_No quantified data on the magnitude of these effects for butternut squash specifically in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the low inherent metal accumulation of butternut squash, heavy metal testing can be deprioritized relative to higher-risk ingredients in the same product formulation. If a formulation relies on butternut squash as a principal ingredient in baby food, lot-level Pb and Cd verification provides appropriate due diligence.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh or processed butternut squash.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Pb in vegetables of 0.10 mg/kg (100 ppb) wet weight and for Cd in vegetables (other than leafy vegetables and root vegetables) of 0.050 mg/kg (50 ppb) wet weight. Butternut squash, as a cucurbit fruit-vegetable, falls under these general vegetable limits. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets analogous international Cd limits for vegetables. The FDA does not currently specify action levels for Pb or Cd in squash for general consumers. Under FDA Closer to Zero [[regulations/fda-closer-to-zero]], action levels for Pb in foods for young children are under development and would apply to butternut squash purees marketed as infant food.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 1 routed source. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
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
