---
title: "Vegetable juice"
type: ingredient
commodity: vegetable-juice
label: "Vegetable juice"
aliases: [green juice, tomato juice]
category: beverage-ingredient
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [vegetable-juices-non-root, vegetable-juices-root-vegetable-containing]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 0
---

# Vegetable juice

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | OK | — | — |
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
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/vegetable-juices-non-root]], [[products/vegetable-juices-root-vegetable-containing]].

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

Vegetable juice is the liquid extracted or processed from vegetables (tomato juice, carrot juice, beet juice, celery juice, and mixed-vegetable products like V8). Vegetable juice carries the source-[[ingredients/vegetables|vegetable]] heavy-metal profile, concentrated per-mass via water-content removal during juicing or evaporation. Different vegetable types contribute different baseline metal profiles: [[ingredients/tomato-paste|tomato]] juice carries source-tomato Cd; [[ingredients/carrots|carrot]] juice carries source-carrot Pb and Cd at moderate concentrations; [[ingredients/beet|beet]] juice can carry higher Pb because beet (Beta vulgaris) is a moderate Pb accumulator; leafy-vegetable juice (kale, spinach, parsley juices in cold-pressed and craft-juice formulations) carries the leafy-greens Cd and Pb at concentrated per-mass levels. The HMTc panel concerns for vegetable juice are Pb and Cd (dominant), iAs in juice from vegetables grown in As-affected regions, and Sn for canned vegetable juices including canned tomato juice.

## Ranges by source, region, and variety

Variance within vegetable juice tracks vegetable type (tomato vs leafy-green vs root-vegetable juice carry different baseline profiles), source-vegetable origin region (industrial-region production, urban-garden production, atmospheric-deposition-affected production drive higher loads), processing scale (commodity scale vs cold-pressed craft juicing), and packaging (canned vs glass-bottle vs aseptic carton vs PET). Cold-pressed leafy-green juices marketed for health-and-wellness consumption can carry per-mass Pb and Cd at concentrated levels because the cold-pressing efficiently extracts the per-mass leafy-green metal load with minimal dilution.

## Processing effects

Vegetable-juice manufacturing varies by product: tomato juice is typically pressed from cooked tomato; carrot and beet juice are pressed from raw or lightly-blanched vegetables; cold-pressed juice extracts the per-vegetable juice content without thermal processing. Each method partitions metals between juice and solid fractions differently. Cold-pressed juicing typically retains more of the source-vegetable metal load in the juice phase because the pressing is less aggressive than thermal-and-pressed extraction. Canned vegetable juice (canned tomato juice, V8, canned mixed-vegetable juices) introduces a Sn migration pathway. Pasteurization does not affect metals.

## Ingredient-derivative risk

Vegetable juice routes into the [[products/vegetable-juices-non-root|vegetable-juices-non-root]] and [[products/vegetable-juices-root-vegetable-containing|vegetable-juices-root-vegetable-containing]] product rows. Derivatives include canned tomato juice, V8 and similar mixed-vegetable juices, fresh-pressed cold-pressed juice products, and vegetable-juice concentrates (further concentration of per-mass metals). Vegetable-juice powders (used in flavoring and seasoning applications) concentrate per-mass metals via dehydration.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include source-vegetable origin specification (avoidance of industrial-region or atmospheric-deposition-affected production); supplier-soil verification for vegetable suppliers; and contractual specification of Pb/Cd ceiling on incoming vegetable supply.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-vegetable cultivation stage; see [[ingredients/vegetables|vegetables]], [[ingredients/leafy-greens|leafy-greens]], and per-vegetable ingredient pages for the upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; pressing-residue handling (the solid residue concentrates source-vegetable metals and should not be returned to the juice stream); and washing optimization to maximize surface-Pb removal pre-juicing.

**Formulation levers** ([[mitigation/formulation]]) include mixed-vegetable formulations that dilute single-vegetable metal loads; substitution of higher-risk vegetables (leafy greens, beets) with lower-risk vegetables (tomatoes, citrus) where the matrix permits.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd, iAs testing on finished vegetable juice. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification for canned vegetable juice; aseptic carton, glass, or PET eliminates Sn migration.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets maximum levels for Pb and Cd in processed vegetables including vegetable juice as a processed-vegetable derivative.
- FDA does not currently set a quantitative action level specific to vegetable juice; general FDA enforcement on toxic-element contamination applies.
- Codex Alimentarius CXS 247-2005 (General Standard for Fruit Juices and Nectars) includes provisions that have been extended to vegetable juices in some interpretive contexts.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to vegetable-juice products sold in California.
- EU Sn-in-canned-food regulation sets 100 mg/kg maximum level for canned beverages including canned vegetable juice.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
