---
title: "Root Vegetable Purees"
type: ingredient
commodity: root-vegetable-purees
label: "Root Vegetable Purees"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0.433, 5]
    p95_ppb: 5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1.5]
    p95_ppb: 1.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0.053, 12]
    p95_ppb: 12
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-31
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [root-vegetable-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Root Vegetable Purees

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 3 below 5 | below pooling depth: Cd, tHg, tAs |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | n=2 | 0.433–5 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0.053–12 | low | — |
| tHg | n=2 | 0–1.5 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/root-vegetable-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

No source has yet been routed to this page. That is a statement about the corpus, not about the ingredient: absence of routed evidence is not evidence of absence. Nothing here should be read as a finding of low contamination.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## Sources

No source pages are currently cited for this ingredient node.
## Why this commodity accumulates heavy metals

Root vegetable purees is the aggregate ingredient label for infant-and-toddler purees made from root-vegetable bases including [[ingredients/carrots|carrots]], sweet potatoes, [[ingredients/beet|beets]], parsnips, white potatoes, and similar tuber-and-root crops. Root vegetables accumulate [[metals/lead|Pb]] at the soil-root interface and [[metals/cadmium|Cd]] via cortical uptake during plant growth; this is documented in detail on the [[ingredients/vegetables|vegetables]] aggregate page. Root-vegetable purees inherit the source-vegetable metal profile, with Pb particularly concentrated relative to non-root vegetables because root vegetables grow directly in soil where legacy Pb-contamination concentrates.

The FDA Closer to Zero baby-food Pb action level differentiates root vegetable purees (20 ppb Pb) from non-root vegetable purees (10 ppb Pb) specifically because root vegetables carry the higher baseline Pb from soil-contact. The HMTc panel concerns for root vegetable purees are Pb (dominant), Cd, and trace iAs (in root vegetables grown in As-affected regions). Routes into [[products/root-vegetable-purees|root-vegetable-purees]] (Cat 1 row for infant root-vegetable products).

## Ranges by source, region, and variety

Variance within root vegetable purees tracks the source-vegetable mix (carrot-only vs sweet-potato-only vs mixed-root-vegetable formulations), source-region soil profile (industrial-region or urban-garden production carries elevated Pb; commercial agricultural production sits at moderate baseline; certified-clean-soil production sits at lower baseline), and processing tier. Carrot-based purees are the most common single-vegetable infant product; sweet potato is the second-most-common; beet, parsnip, and white potato purees are less common.

## Processing effects

Root-vegetable puree manufacturing involves washing, peeling (substantial Pb reduction by removing surface-deposited Pb), cooking, pureeing, and packaging (jar, pouch, or aseptic carton). Peeling is the dominant processing-stage mitigation lever for root-vegetable Pb; the peeled-and-cooked puree carries substantially lower per-mass Pb than the unpeeled raw vegetable. Sterilization (retort processing for jarred and pouched products) does not affect metals.

## Ingredient-derivative risk

Root vegetable purees route into Cat 1 row [[products/root-vegetable-purees|root-vegetable-purees]] as the primary infant feeding product family. Derivatives include single-vegetable purees (carrot puree, sweet potato puree, beet puree) and mixed-root-vegetable purees. Mixed-meals products containing root vegetables alongside grains, proteins, or other ingredients dilute the per-product root-vegetable metal load.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are dominant. Source-vegetable origin specification favoring documented low-soil-Pb production regions; supplier-soil verification programs; and contractual Pb/Cd ceiling on incoming root vegetables for infant-product manufacturers operating to tight specifications.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the root-vegetable cultivation stage. Soil pH management; soil amendments (biochar, lime); cultivar selection; remediation of urban-and-industrial production sites.

**Processing levers** ([[mitigation/processing]]) include thorough peeling for maximum Pb reduction; washing optimization; and avoidance of equipment-cleaning chemicals that could introduce metals.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of higher-Pb root vegetables (beet) with lower-Pb alternatives (carrot, sweet potato) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on finished root-vegetable purees against FDA Closer to Zero 20 ppb Pb action level for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include glass-jar, pouch, or aseptic-carton packaging (modern infant-food packaging); avoidance of older soldered or unlined-metal storage.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child foods.
- FDA Closer to Zero baby-food Pb action level: 20 ppb for root vegetable purees ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]).
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets infant-food category limits.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to root-vegetable-puree products sold in California.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
2. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
