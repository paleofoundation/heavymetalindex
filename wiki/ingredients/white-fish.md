---
title: "White fish"
type: ingredient
commodity: white-fish
label: "White fish"
aliases: [white fish]
category: seafood
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 60]
    p95_ppb: 80
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 70]
    p95_ppb: 130
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 2.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [4.9, 570]
    p95_ppb: 900.3
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
    typical_ppb: [0, 1752]
    p95_ppb: 2617
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
    typical_ppb: [0, 30.8]
    p95_ppb: 36.6
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
---

# White fish

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

White-fleshed fish (cod, haddock, pollock, tilapia, hake, sole, and related species) accumulate heavy metals through two distinct mechanisms. The first is direct uptake from water across gill membranes, which is the primary route for dissolved metals such as Cd and Pb in aquatic environments. The second is dietary accumulation through the marine food chain: white fish are typically mid-trophic predators that consume invertebrates and smaller fish, and metals bioaccumulate with each trophic step. Mercury bioaccumulation is the most consequential trophic pathway for fish, and it scales with fish fat content and trophic level. White fish are defined by their low fat content relative to oily fish such as salmon, mackerel, and tuna; because methylmercury (MeHg) partitions to the protein and fat fractions of fish tissue, lean white fish species carry materially lower MeHg concentrations than higher-fat, higher-trophic species such as shark, swordfish, or tuna. This is the primary reason regulatory advisories on fish consumption for pregnant women and children draw a categorical distinction between white fish (generally safer) and predatory oily fish (consume in moderation). Lead and cadmium concentrations in white fish muscle are generally low; the highest cadmium concentrations in fish are found in organs (particularly liver and kidney), not muscle tissue, which is what consumers typically eat. Aquaculture-raised white fish species (particularly tilapia) may show different metal profiles depending on the composition of fish feed and water quality at the farm.

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
| Pb | n=1 | 0–60 | low | — |
| Cd | n=1 | 0–70 | low | — |
| iAs | n=1 | 0 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 4.9–570 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–1752 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–30.8 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

White fish species vary in Hg accumulation broadly according to size, trophic level, and age. Tilapia, which is a herbivorous/omnivorous species raised primarily in freshwater aquaculture, consistently shows among the lowest Hg values in comparative fish surveys, typically below 50 ppb tHg in muscle. Cod and haddock, which are wild-caught marine predators, show somewhat higher Hg than tilapia but substantially lower than tuna or swordfish; EU monitoring data place cod tHg medians in the range of 100 to 200 ppb, well below the EU ML of 500 ppb for most non-predatory fish. Geographic variation is significant: fish from coastal waters adjacent to industrial discharge or historical smelting activity (parts of the Baltic Sea, polluted estuaries) carry higher Pb and Cd than the same species from open ocean or clean-water fisheries. Wild-caught versus farmed tilapia can differ in metal profile because aquaculture feed composition and water quality vary by producer and region.

## Processing effects

White fish is consumed after cooking, typically as pan-frying, baking, steaming, poaching, or as fish and chips (deep-fat frying). Cooking does not remove mercury or other metals from fish muscle to a meaningful degree; methylmercury is bound to proteins and is not volatilised or leached away at cooking temperatures. Fish-and-chip preparation (batter-coating followed by deep-frying in vegetable oil) adds a wheat-batter component with its own metal profile (primarily Cd from the wheat flour) at the mass fraction of batter in the finished product, but this is a minor addition to the predominantly fish-derived metal profile. Frozen white fish undergoes freezing and cold-chain storage but no processing that alters metal concentrations. Breaded fish sticks or fish fingers include a breadcrumb coating (white bread or wheat-based) that contributes a small wheat-derived Cd increment proportional to coating weight.

## Ingredient-derivative risk

White fish muscle is used in products including fresh and frozen fillets, breaded fish sticks, fish cakes, fish pie, fish-based baby food purees, and fish-and-chip takeaway preparations. The core muscle profile carries through all of these applications. Breaded or battered preparations add a wheat-based coating component, contributing modest Cd from the wheat fraction. Fish-based baby food purees (white fish with vegetable combinations) present the products most directly relevant to infant dietary exposure, and these are typically addressed at the product level on the relevant [[products/]] page. Canned white fish (tuna, cod, and related species in brine or oil) is a related product category where the can type (tinplate versus lacquer-lined) and the oil or brine medium may affect Sn and metal profiles; canned fish is addressed separately from fresh and frozen white fish.

## Mitigation options

### Sourcing levers

Sourcing white fish from certified fisheries with documented low contamination of harvest waters is the primary upstream lever. MSC-certified and equivalent sustainability certifications do not directly address metal content, but the supply-chain documentation they require makes origin verification tractable. For aquaculture species, specifying feed composition and water-quality standards at supplier qualification provides direct leverage on Hg and Pb.

### Agronomic levers

For aquaculture-raised species, feed metal content (particularly fish meal derived from high-Hg pelagic species) is the primary controllable driver. Specifying fish meal with documented low-Hg source fisheries, or substituting plant-based protein in feeds, reduces Hg in farmed fish. This lever is not available for wild-caught species.

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

When white fish is used in multi-ingredient products (baby food purees, fish cakes, fish pies), selecting white fish species with consistently lower Hg profiles (tilapia, pollock) rather than larger predatory species provides a meaningful Hg reduction per serving. This is the species-substitution lever.

### Testing and QC levers

For white fish products marketed to children or pregnant women, tHg testing by ICP-MS or cold-vapour atomic absorption on a lot or species basis is warranted. For aquaculture-raised species from regions of uncertain water quality, Pb and Cd testing of raw fillet at intake is appropriate.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets maximum levels for metals in fish muscle under [[regulations/eu2023-contaminants-maximum-levels]]: Pb at 0.30 mg/kg (300 ppb) for fish muscle, Cd at 0.050 mg/kg (50 ppb) for most fish and 0.10 mg/kg for certain species, and tHg at 0.50 mg/kg (500 ppb) for most fish species. The tHg limit is a total mercury limit and does not distinguish MeHg; in practice, essentially all Hg in fish muscle is present as MeHg, so total mercury in fish is effectively a methylmercury limit for practical purposes. [[regulations/codex-cadmium-mls]] provides international Codex MLs for Cd in fish. In the US, FDA and EPA joint fish advice for pregnant women and children identifies white fish categories (cod, tilapia, pollock, catfish) as "Best Choices" under their fish advisory, permitting two to three servings per week for pregnant women; this advisory reflects MeHg considerations rather than formal regulatory maxima.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 4 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

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
| 1 | [[sources/macdonald2025-fss-uk-fishery-contaminants-review\|MacDonald et al. 2025]]. *Occurrence of chemical contaminants in wild-caught fishery products of relevance to Scottish and wider UK Fishing Waters: A Review*, Fera Science Ltd report to Food Standards Scotland (Report FR/002826) | 2025 | Agency report | GB/EU tHg, MeHg, Cd, Pb, tAs, iAs, Ni, Cr occurrence in Narrative + tabular review of chemical contaminants in wild-caught and smoked fish, shellfish, crustaceans, and cephalopods from Scottish... (n=192) |
| 2 | [[sources/ospar2022-metals-fish-shellfish-sediment\|Larsen et al. 2022]]. *Status and Trend for Heavy Metals (Mercury, Cadmium and Lead) in Fish, Shellfish and Sediment*, OSPAR Commission, Quality Status Report 2023 Common Indicator Assessment | 2022 | Government report | EU/BE/DK Pb, Cd, tHg, Cu, Zn, Cr, Ni, tAs, Co, Ag, Sn occurrence in Aggregated CEMP monitoring data from 603 to 647 biota monitoring sites and 393 to 401 sediment monitoring sites... |
| 3 | [[sources/naess2020-norwegian-seafood-metals\|Naess et al. 2020]]. *Mercury, lead, arsenic, and cadmium in Norwegian seafood products and consumer exposure*, Food Additives & Contaminants: Part B | 2020 | Peer-reviewed | NO tHg, Pb, tAs, Cd occurrence in Market-representative commercially available seafood products collected in Norway in 2015, 2017, and 2018; each analytical sample was a... (n=84) |
| 4 | [[sources/helcom2017-core-indicator-metals-baltic\|HELCOM et al. 2017]]. *Metals (lead, cadmium and mercury) — HELCOM core indicator report*, HELCOM Core Indicator Report (HOLAS II component), ISSN 2343-2543 | 2017 | Government report | EU/DE/DK Pb, Cd, tHg occurrence in Aggregated monitoring data from the HELCOM COMBINE database (held at ICES) for the assessment period 2011-2015, with all... |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
| [1c410cb](https://github.com/paleofoundation/heavymetalindex/commit/1c410cb) | 2026-06-01 | codex sprint 2026-06-01 0715: end-of-fire cleanup |
| [c660ae7](https://github.com/paleofoundation/heavymetalindex/commit/c660ae7) | 2026-06-01 | codex sprint 2026-06-01 03:04: end-of-fire cleanup |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
<!-- END: hmi-page-history -->

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
