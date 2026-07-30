---
title: "Chicken noodle soup"
type: ingredient
commodity: chicken-noodle-soup
label: "Chicken noodle soup"
aliases: ["Soup, chicken noodle, canned, condensed, prepared with water", "chicken noodle soup"]
category: soup
tds_food:
  number: 155
  description: "Soup, chicken noodle, canned, condensed, prepared with water"
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
    typical_ppb: [2.5, 2.8]
    p95_ppb: 2.8
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
    typical_ppb: [0, 49.6]
    p95_ppb: 55.8
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

# Chicken noodle soup

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 8 claims checked, 8 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming chicken-noodle-soup: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 155, "Soup, chicken noodle, canned, condensed, prepared with water." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chicken noodle soup is a multi-ingredient composite product whose metal burden is the sum of contributions from each ingredient stream. Cadmium enters primarily through the wheat-based noodle component: wheat grain accumulates cadmium through root uptake from soil, and whole-wheat or enriched-wheat noodles carry this signal into the final product. Nickel is a secondary concern that derives from both the noodle fraction (wheat contains moderate Ni) and the vegetable components (celery, carrots, peas) commonly included in the soup recipe. Chicken muscle itself contributes very little to Pb, Cd, or Ni; the broth component, if prepared from bones, may contribute trace lead through leaching from the skeletal calcium matrix. The canned format introduces the potential for tin (Sn) from the can interior, though modern cans use enamel linings that substantially reduce tin migration. The FDA Total Diet Study FY2018-FY2020 measured canned condensed chicken noodle soup prepared with water and found cadmium detectable at a median of 2.6 ppb and nickel at a maximum of 62 ppb across 3 composite samples [[sources/fda2022-tds-elements-fy2018-fy2020]]; the small sample size limits inference.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 2.5–2.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–49.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Soup, chicken noodle, canned, condensed, prepared with water" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 2.5 | 2.8 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 62 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference, with 3 composite samples of canned condensed chicken noodle soup prepared with water reporting cadmium at a median of 2.6 ppb, nickel at a maximum of 62 ppb, and all other measured metals (Pb, tAs, tHg, Cr, U) below reporting limits [[sources/fda2022-tds-elements-fy2018-fy2020]]. The very small sample size (n=3) limits confidence in these distributional estimates. Variation across brands and product lines would be expected primarily from differences in the noodle-fraction wheat source (which drives Cd), the proportion of bone-derived versus muscle-only broth (which affects Pb), and the vegetable complement (which affects Ni). Homemade chicken noodle soup would vary from canned product in tin content (absent without canned ingredients) and in broth lead content depending on whether bone-in chicken is used and cooking time.

## Processing effects

Canning involves cooking the soup at high temperature under pressure (retort processing), which converts the product to a ready-to-heat form. The acidic content of the soup (from tomato-based additions in some recipes, or from natural acidity of ingredients) can influence tin migration from can interiors, but modern enamel-lined cans substantially limit this; Sn was below reporting limits in all three TDS samples [[sources/fda2022-tds-elements-fy2018-fy2020]]. The preparation instruction to dilute condensed soup with an equal volume of water reduces all concentrations by approximately half relative to the condensed product; the TDS values represent the prepared (diluted) product. Extended cooking of bone-in chicken to make broth before soup assembly increases the leaching of lead from bone surfaces into the liquid; the TDS product is manufactured with controlled processes that likely minimise this pathway compared to home preparation from whole bone-in chicken.

## Ingredient-derivative risk

Chicken noodle soup is already a composite product rather than a raw ingredient, and its derivatives are primarily variations in recipe formulation (see Mitigation options below). Dried soup mixes and instant noodle packets that carry the chicken noodle soup flavour profile would concentrate all metals relative to the prepared liquid product; they are not characterised separately in the current corpus. Soup stock or broth sold separately as a component derives from a similar process and would carry the bone-lead pathway more directly than the finished composite.

## Mitigation options

### Sourcing levers

For manufacturers, specifying low-cadmium wheat flour for the noodle fraction is the highest-leverage sourcing decision, as the noodle component drives the cadmium signal in the final product. Selecting chicken suppliers who use clean-bone processing (muscle-only broth rather than bone-in broth) reduces potential lead contribution from skeletal calcium. Specifying enamel-lined cans minimises tin migration risk.

### Agronomic levers

Agronomic levers apply primarily to the wheat ingredient used in the noodle fraction; see [[ingredients/wheat-flour]] for wheat cadmium mitigation levers. The chicken, vegetable, and salt fractions do not offer meaningful agronomic levers relative to wheat.

### Processing levers

Using muscle-only chicken stock rather than bone-derived broth reduces the lead contribution from the broth fraction. Ensuring adequate can-lining quality limits tin migration. Formulating with a higher water-to-noodle ratio dilutes the cadmium contributed by the noodle fraction in the final product serving.

### Formulation levers

Reducing the noodle fraction of the recipe or substituting rice-based noodles (which carry different metal profiles depending on rice origin) for wheat noodles changes the cadmium source. Adding more vegetables relative to noodles may increase nickel but typically does not materially increase cadmium or lead. Including vegetables with lower soil-contact cadmium (peas, corn) rather than higher-accumulating types changes the vegetable-fraction metal contribution.

### Testing and QC levers

Given the low cadmium concentrations observed in the TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]] (median 2.6 ppb, maximum 2.8 ppb in prepared product), routine lot-level testing for chicken noodle soup is lower priority than for higher-risk categories. For manufacturers sourcing wheat from high-cadmium regions, testing the flour prior to noodle production provides earlier-stage quality control. Tin testing is warranted for any canned soup product where enamel lining quality cannot be confirmed.

### Packaging and storage levers

Enamel-lined cans substantially reduce tin migration. For products stored in damaged or corroded cans, tin migration increases and is a relevant quality defect. No specific metal packaging interaction has been identified for chicken noodle soup beyond the tin-can pathway.

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general contaminants framework ([[regulations/eu2023-contaminants-maximum-levels]]) do not set a single composite limit for chicken noodle soup as a finished product; rather, the limits for each constituent ingredient (cereal products, chicken meat, vegetables) apply to those components as assessed in the final product. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) similarly addresses ingredient categories rather than composite dishes. No specific US FDA action level applies to canned chicken noodle soup; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. For tin in canned products, the Codex ML for tin in canned foods is 200 mg/kg; EU limits are 200 mg/kg for non-beverages. The TDS data showing Sn at or below reporting limits is consistent with modern canned products meeting these limits comfortably [[sources/fda2022-tds-elements-fy2018-fy2020]].

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Soup, chicken noodle, canned, condensed, prepared with water (n=3); detectable concentrations for Cd, Ni |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [8c45a300b](https://github.com/paleofoundation/heavymetalindex/commit/8c45a300b) | 2026-05-31 | major | 1 source added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
