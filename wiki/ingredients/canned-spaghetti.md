---
title: "Canned spaghetti in tomato sauce"
type: ingredient
commodity: canned-spaghetti
label: "Canned spaghetti in tomato sauce"
aliases: [canned spaghetti]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 84
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 21.8]
    p95_ppb: 39.8
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
    typical_ppb: [0, 3.3]
    p95_ppb: 17.9
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
    typical_ppb: [873.4, 4994]
    p95_ppb: 5503
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
    typical_ppb: [6.9, 480.9]
    p95_ppb: 909.4
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

# Canned spaghetti in tomato sauce

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Canned spaghetti in tomato sauce is a composite food product whose heavy metal risk derives from three overlapping pathways: the wheat-derived pasta fraction, the tomato sauce fraction, and the tinplate can packaging. Wheat grain, as a cereal, accumulates cadmium in the bran and outer endosperm layers; durum wheat used for pasta has been the subject of substantial European regulatory attention for Cd, particularly from soft-wheat and durum cultivars grown on Cd-enriched soils. Tomato is a relatively low metal accumulator as a fruit-vegetable, but the acidic nature of tomato sauce (pH typically 3.5 to 4.5) makes it one of the most aggressive matrices for Sn migration from unlacquered tinplate can walls. Studies of canned acidic foods show that tomato-based products release more Sn from tinplate per unit time than near-neutral pH products, because the corrosion electrochemistry favors faster tin dissolution at lower pH [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]]. The combined effect is that canned spaghetti presents both an intrinsic Cd signal from the wheat pasta fraction and an elevated Sn migration signal from the tomato-acid-can interaction, making it a product category warranting monitoring across both pathways. FSA/Fera included canned spaghetti in their FS102048 survey of non-infant food composites in the UK [[sources/fsa2016-infant-food-formula-metals-survey]].

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
| Pb | n=1 | 0–41 | low | — |
| Cd | n=1 | 0–21.8 | low | — |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–3.3 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 873.4–4994 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 6.9–480.9 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey included canned spaghetti in tomato sauce as a non-infant food composite [[sources/fsa2016-infant-food-formula-metals-survey]]; exact tabulated values from Table 6 of that report remain in progress pending structured extraction. The general expectation from the literature is that pasta-based canned products show Cd from the wheat fraction at concentrations reflecting the durum wheat supply chain (typically 20 to 100 ppb dry-weight basis in the pasta; lower on a wet-product basis). Sn migration in tomato-based canned products is well documented as elevated relative to neutral-pH canned goods due to tomato acidity; Schafer et al. 1984 reviews European data showing acid foods can reach several hundred mg/kg Sn in unlacquered cans over standard shelf lives [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]]. Geographic variation in the wheat Cd component follows durum wheat origin: Italian and North African durum wheat may carry higher Cd than wheat from low-Cd regions.

## Processing effects

Pasta production (milling, extrusion, drying) does not materially change the metal content of the wheat raw material; Cd, Pb, and Ni are retained through these processing steps. The canning step, involving thermal sterilization at temperatures of approximately 120°C, does not reduce intrinsic metal concentrations but initiates Sn migration from the can wall. The tomato sauce fraction is acidic throughout processing and storage, continuously accelerating Sn release. The combined solid-sauce product means that metal analysis of this commodity reflects both fractions simultaneously. Draining the sauce would reduce Sn exposure from the sauce fraction, but is not standard practice for this product type (consumed as a whole).

## Ingredient-derivative risk

Canned spaghetti is primarily a retail consumer product consumed as-is rather than as an ingredient in further processing. When used as a component in prepared meal assembly (commercial cafeteria, food service contexts), its Cd from the pasta and Sn from the can contribute at the proportion included. The tomato sauce fraction may be of interest in formulation contexts where the acid-can-Sn interaction is a concern.

## Mitigation options

### Sourcing levers

Sourcing durum wheat from regions and supply chains with documented low Cd reduces the intrinsic pasta Cd. EU regulatory pressure on durum wheat Cd has driven some producers toward lower-Cd wheat varieties and supply chains. Specifying lacquered-can sourcing is the dominant lever for Sn reduction given the high acidity of the tomato sauce matrix.

### Agronomic levers

Low-Cd durum wheat cultivation (soil pH management, low-Cd phosphate fertilizers, cultivar selection) is the upstream lever for reducing pasta Cd. This is a supply-chain intervention rather than a direct lever for the canned spaghetti manufacturer.

### Processing levers

Specifying lacquered cans reduces Sn migration dramatically compared to unlacquered tinplate in this acid-food application. No processing step within the manufacturing of canned spaghetti itself further reduces Cd from the pasta fraction after pasta production is complete.

### Formulation levers

Reducing the pasta fraction relative to sauce, or substituting a lower-Cd pasta (for example, rice pasta from a low-iAs, low-Cd origin, or legume-based pasta with verified low metal content) reduces the intrinsic Cd contribution proportionally. These substitutions have product-taste implications and are primarily relevant where HMT&C or regulatory compliance requires demonstrating lower metal loads.

_No quantified data on substitution effects in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

ICP-MS for Cd on incoming pasta and for Sn on finished canned product near end of shelf life are the two most relevant QC tests. Tomato sauce pH should be monitored as a proxy for Sn-migration rate; lower pH batches drive faster Sn release.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are essential for this product given the high acidity of the tomato sauce matrix. The case for lacquered cans is stronger here than for near-neutral pH canned vegetables, because unlacquered-can Sn release rates in tomato-based products are substantially higher. Storing finished cans below 20°C and enforcing maximum shelf-life limits reduces cumulative Sn exposure. Lot-level documentation of can batch, fill date, and storage temperature supports trace-back in the event of a Sn exceedance [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]].

## Regulatory limits that apply

For the pasta/wheat Cd component, the EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Cd in cereal-based foods of 0.060 mg/kg (60 ppb) wet weight; for pasta specifically (dry), the limit is 0.20 mg/kg (200 ppb) dry weight. For Sn in canned solid foods, the EU limit is 200 mg/kg (200,000 ppb) wet weight. The Codex Alimentarius [[regulations/codex-cadmium-mls]] sets Cd limits for cereal grain and processed cereal products at analogous levels. The FDA does not currently specify Sn action levels for canned pasta products; FDA Closer to Zero [[regulations/fda-closer-to-zero]] focuses on Pb in foods for young children.

<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

No source has yet been routed to this page. That is a statement about the corpus, not about the ingredient: absence of routed evidence is not evidence of absence. Nothing here should be read as a finding of low contamination.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/schafer1984-tin-toxic-heavy-metal-review|Tin — A Toxic Heavy Metal? A Review of the Literature]]<span class="hmi-ref-meta">S. G. Schafer and U. Femfert · Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 · 1984 · [doi.org/10.1016/0273-2300(84)90006-0](https://doi.org/10.1016/0273-2300(84)90006-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
