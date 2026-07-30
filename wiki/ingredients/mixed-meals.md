---
title: "Mixed Meals"
type: ingredient
commodity: mixed-meals
label: "Mixed Meals"
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
used_in_products: [mixed-meals-non-rice, mixed-meals-rice-containing]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 2
---

# Mixed Meals

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | below-tier | 2 jurisdictions, top BE 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 1 claims checked, 1 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming mixed-meals: codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 1 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.00 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

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

This node is linked from [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/deroma2017-prepared-meals-italy-metals\|De et al. 2017]]. *Occurrence of cadmium, lead, mercury, and arsenic in prepared meals in Italy: Potential relevance for intake assessment*, Journal of Food Composition and Analysis | 2017 | Peer-reviewed | IT Cd, Pb, tHg, tAs occurrence in Seventeen pooled prepared-meal composites collected from Italian baby food, school canteen, office canteen, fast food, duplicate-portion, vegetarian, and... (n=17) |
| 2 | [[sources/buchet1983-belgium-duplicate-meal-metals\|Buchet et al. 1983]]. *Oral daily intake of cadmium, lead, manganese, copper, chromium, mercury, calcium, zinc and arsenic in Belgium: a duplicate meal study*, Food and Chemical Toxicology | 1983 | Peer-reviewed | BE Cd, Pb, Mn, Cu, Cr, tHg, Ca, Zn, tAs occurrence in One hundred twenty-four 24-hour duplicate meals and beverages collected from Brussels, Liege, Charleroi, and a Brussels hospital kitchen... (n=124) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Mixed meals (infant and toddler meal-combinations including meat-and-grain, vegetable-and-grain, fruit-and-vegetable, or similar combinations) inherit their heavy-metal load from the weighted sum of source ingredients. The metal profile is therefore driven by whichever ingredient in the mix is highest-loaded for each panel analyte: rice-containing meals carry rice iAs (see [[ingredients/rice]]); meat-containing meals carry the source-meat profile (see [[ingredients/beef]], [[ingredients/poultry]]); vegetable-containing meals carry the vegetable profile.

The Cat 1 Step 0 lock splits mixed meals into rice-containing and non-rice rows ([[products/mixed-meals-rice-containing]] vs [[products/mixed-meals-non-rice]]) because the rice-iAs question dominates the certification framing.

The HMTc panel concerns for mixed meals are dominantly Pb (cumulative from each ingredient) and iAs (rice-containing meals); Cd is generally moderate from vegetable and meat sources. The infant exposure pathway concentrates per-body-weight intake even when individual ingredient concentrations are moderate.

## Ranges by source, region, and variety

Rice-containing mixed meals carry the rice-iAs distribution proportional to the rice fraction in the recipe (typically 5-30 percent rice by mass in a mixed meal). Non-rice mixed meals carry combined-source profiles dominated by the dominant grain or vegetable.

Meat-and-grain combinations: lamb-and-rice, beef-and-noodle, chicken-and-rice products carry combined Pb (from meat) and iAs (from rice if present). [[ingredients/beef]], [[ingredients/poultry]], [[ingredients/rice]] address the source-ingredient profiles.

Vegetable-and-grain combinations: vegetable-and-rice, mixed-vegetable-and-quinoa carry combined Pb/Cd (from vegetables) and source-grain Cd.

## Processing effects

Mixed-meal manufacturing (combining ingredients, cooking, pureeing or chunking, packaging) does not change source-ingredient metal content. The cooking step (with or without water-discard) follows the same metal-removal profile as the dominant source ingredient.

For shelf-stable mixed-meal products (canned, jarred, pouched), the processing and packaging considerations follow the individual ingredient profiles plus packaging-specific metal-migration considerations (Sn for canned, food-contact-substance compliance for plastic and pouch).

## Ingredient-derivative risk

Mixed meals are themselves finished retail products; their derivatives are warmed-and-served preparations rather than further ingredient transformations. Mixed-meal-style ready-meals targeting older children and adults inherit the source-ingredient profiles with regulatory framework shifting from Cat 1 (infant) to Cat 7 (mixed meals / prepared foods).

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) operate at the per-ingredient level: low-iAs rice, low-Pb meat, low-Cd vegetables. Composite-recipe sourcing decisions can substantially shift the mixed-meal metal load by adjusting which ingredient contributes the most-loaded fraction.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the upstream per-ingredient stage; not at the mixed-meal-manufacturing stage directly.

**Processing levers** ([[mitigation/processing]]) include cooking-method specifications and recipe formulation choices.

**Formulation levers** ([[mitigation/formulation]]) are the dominant mixed-meal-side intervention: rice substitution (oat or wheat instead of rice in toddler meals), vegetable-percentage adjustment, meat-vs-poultry choice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb and iAs testing on finished mixed meals, particularly for products targeting children under 2.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include the Sn-migration consideration for canned mixed meals and food-contact-substance compliance for plastic and pouch formats.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action level for processed baby foods covers mixed meals at 10-20 ppb depending on subcategory.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child mixed foods. iAs MLs for rice-containing baby foods apply.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply to mixed-ingredient foods through the source-ingredient framework.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant mixed meals yields stringent serving-based screen.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [a7179d2c8](https://github.com/paleofoundation/heavymetalindex/commit/a7179d2c8) | 2026-05-17 | major | 1 source added; narrative text revised |
<!-- END: hmi-page-history -->
