---
title: "Fruit Purees"
type: ingredient
commodity: fruit-purees
label: "Fruit Purees"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.036, 4.02]
    p95_ppb: 5.24
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-31
  Cd:
    status: populated
    typical_ppb: [0, 2.81]
    p95_ppb: 3.95
    confidence: low
    n_studies: 5
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
    typical_ppb: [0.057, 5]
    p95_ppb: 5
    confidence: medium
    n_studies: 5
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
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 2
---

# Fruit Purees

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 3/10 HMTc analytes, total n=13 | only 3/10 analytes have evidence |
| D2 Regional coverage | OK | 3 jurisdictions, top UK 50% | — |
| D3 Anthropogenic evidence | GAP | 1 drinking-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 1 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs POOLABLE | Pb: THIN; Cd: THIN |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 2 claims checked, 2 supported; 3 citations, 0 orphan, 3 foreign | 3 foreign citation(s) not naming fruit-purees: collado-lopez2025-heavy-metals-baby-food-formula, houlihan2019-hbbf-whats-in-baby-food, codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 1 metal(s) covered | unmapped analytes: Cd, tAs |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs; pairing 0 paired, 3 single, 0 unpaired | Pb: THIN; Cd: THIN; basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.50, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0.036–4.02 | low | — |
| Cd | n=5 | 0–2.81 | low | — |
| iAs | data gap | — | — | — |
| tAs | n=5 | 0.057–5 | medium | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

The 3 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. (2025). *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*. Nutrition Reviews. [https://doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138). Peer-reviewed, A-tier. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Source record]]
2. Jane Houlihan and Charlotte Brody (2019). *What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead*. Healthy Babies Bright Futures. [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food). Nonprofit, B-tier. [[sources/houlihan2019-hbbf-whats-in-baby-food|Source record]]
3. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | WanaBana apple-cinnamon fruit puree pouch Pb outbreak from intentional Ecuadorian cinnamon adulteration with finished product at 1.9–3.0 ppm Pb |
| 2 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Fruit purees inherit heavy metals from the source fruit (see [[ingredients/fruits]] and per-fruit pages like [[ingredients/apple]], [[ingredients/banana]], [[ingredients/peach]], [[ingredients/pear]], [[ingredients/mango]]). The pureeing process does not change total source-fruit metal load; it homogenizes the source fruit into a smooth texture suitable for infant feeding. Apple, pear, and banana are the most common infant-fruit-puree ingredients in commercial Cat 1 product lines; berry purees and mango/peach purees are common premium variants.

The dominant metal-load contributor in fruit purees is Pb from soil-uptake and atmospheric-deposition pathways at the source orchard. Apple specifically carries a legacy iAs concern from historic lead-arsenate-pesticide orchards (though the iAs in apple is generally lower than in apple juice because juicing concentrates the metal); see [[ingredients/apple]]. Cd in fruit purees is generally low.

The HMTc panel concerns for fruit purees are dominantly Pb, with iAs as a secondary concern for apple-containing products and Cd as a minor concern.

## Ranges by source, region, and variety

Fruit puree metal load tracks the source fruit. Apple purees carry the highest Pb among common fruit-puree species, particularly apples from regions with historic lead-arsenate pesticide use. Pear purees from cleaner orchards carry lower Pb. Banana purees (from tropical-soil-grown bananas in Central and South America) carry low Pb across the board. Peach and apricot purees can carry trace Cd from stone-fruit-specific pathways.

[[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]] is the broad baby-food + fruit puree synthesis source documenting Spanish-market fruit baby food. [[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]] (HBBF) characterized US-market baby food including fruit purees.

## Processing effects

Fruit puree processing (washing, peeling, coring, pureeing, heat treatment for shelf-stability, pH adjustment, packaging) does not change total source-fruit metal content meaningfully. Washing and peeling at the manufacturer stage remove surface-deposited Pb (relevant for tree fruits grown in atmospheric-Pb regions). Heat treatment for retort sterilization or aseptic packaging does not change panel metals.

Fortification additives (vitamin C, citric acid, mineral additives) can contribute trace metals at parts-per-billion levels depending on supplier specification.

## Ingredient-derivative risk

Fruit purees are themselves finished retail products targeting infant and toddler markets. Concentrated fruit puree (used as flavor or color in compounded products) carries elevated per-mass metal because water has been removed.

Fruit-puree-based finished products (fruit pouches, fruit-and-veggie pouches, fruit-and-yogurt combinations) inherit the source-fruit-puree profile proportional to recipe fraction.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. Single-origin sourcing from documented low-Pb production regions, fruit-supplier soil-Pb verification (especially for apples and pears from legacy-orchard regions), and avoidance of lead-arsenate-history orchards.

**Agronomic levers** ([[mitigation/agronomic]]) apply at the orchard level (see [[ingredients/fruits]]).

**Processing levers** ([[mitigation/processing]]) include washing and peeling at the manufacturer stage, which removes surface-deposited Pb effectively.

**Formulation levers** ([[mitigation/formulation]]) include fruit-species substitution (substituting banana or pear puree for apple puree reduces Pb), single-fruit vs mixed-fruit formulation, and added-ingredient minimization.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb testing on finished fruit purees, particularly for apple-containing products targeted at infants. See [[testing/icp-ms]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include jar-and-foil-cap specification, pouch-material specification, and food-contact-substance compliance.

## Regulatory limits that apply

- [[regulations/fda2025-lead-processed-baby-foods]] — FDA Closer to Zero Pb action level for processed baby foods covers fruit purees at 10 ppb Pb.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for Pb and Cd in infant-and-young-child fruit-based foods.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex MLs apply.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to fruit purees sold in California; the serving-based screen is stringent for infant-targeted products.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [789dbf16d](https://github.com/paleofoundation/heavymetalindex/commit/789dbf16d) | 2026-05-31 | major | Contamination-profile values revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [0abe06f55](https://github.com/paleofoundation/heavymetalindex/commit/0abe06f55) | 2026-05-17 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
