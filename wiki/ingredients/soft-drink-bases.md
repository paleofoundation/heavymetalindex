---
title: "Soft drink bases"
type: ingredient
commodity: soft-drink-bases
label: "Soft drink bases"
aliases: [carbonated beverage base, cola base]
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
used_in_products: [soft-drinks-carbonated-beverages]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 2
---

# Soft drink bases

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 0/10 HMTc analytes, total n=0 | only 0/10 analytes have evidence |
| D2 Regional coverage | below-tier | 2 jurisdictions, top EG 50% | only 2 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | GAP | no priority analytes | — |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 1 claims checked, 1 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming soft-drink-bases: codex-cxs-193-1995 |
| D9 Mitigation | GAP | 0 cited lever(s), 6 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | — |
| D11 Standards-readiness | NOT-READY | no priority analytes | basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.00 | — |

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

This node is linked from [[products/soft-drinks-carbonated-beverages]].

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
| 1 | [[sources/abdel-rahman2019-egypt-nonalcoholic-beverages-metals\|Abdel-Rahman et al. 2019]]. *Heavy metals content in some non-alcoholic beverages (carbonated drinks, flavored yogurt drinks, and juice drinks) of the Egyptian markets*, Toxicology Reports | 2019 | Peer-reviewed | EG Cd, Pb, Cr, Ni, Fe, Mn, Cu occurrence in Twelve flavored yogurt drinks, eighteen juice drinks, and twenty-four carbonated drinks collected from Egyptian local markets between January... (n=54) |
| 2 | [[sources/godwill2015-soft-drinks-metals-nigeria\|Godwill et al. 2015]]. *Determination of some soft drink constituents and contamination by some heavy metals in Nigeria*, Toxicology Reports | 2015 | Peer-reviewed | NG Cd, Pb, tHg occurrence in Twenty-six soft-drink and juice samples purchased from local grocery stores in Enugu, Enugu State, Nigeria; sample names are... (n=26) |
<!-- END: hmi-source-legend -->

## Why this commodity accumulates heavy metals

Soft drink bases is the aggregate ingredient label for the syrup-and-concentrate ingredients used in carbonated soft drinks (cola, lemon-lime, root beer, fruit-flavored sodas), including flavoring concentrates, sweetener syrups (high-fructose corn syrup, refined sugar syrup, or non-nutritive sweetener solutions), acidulants (phosphoric acid in cola, citric acid in citrus sodas), and color compounds (caramel coloring in cola). Heavy-metal load in soft drink bases comes from four pathways: source-sweetener inheritance ([[ingredients/white-sugar|sugar]] at low metal baseline; HFCS at slightly different baseline reflecting corn-source metals); flavoring-and-color concentrate impurities (some natural colorings, particularly older caramel coloring formulations, carry trace metals); acidulant impurities (phosphoric acid produced from phosphate rock can carry trace Pb and Cd from the source phosphate rock); and packaging migration (canned soft drinks introduce Sn from tinplate; bottled soft drinks in glass or PET avoid that pathway).

Soft drink concentrates and syrups can also carry trace metals from processing-equipment contact and from the formulation water. The HMTc panel concerns for soft drink bases are trace Pb (dominantly from phosphoric-acid acidulant and some colorings), trace Cd, and Sn from canned-product migration. Sugar-sweetened soft drinks have been a subject of FDA and Consumer Reports surveillance for As contamination in older formulations using As-derived raw materials, though current formulations have largely eliminated those pathways.

## Ranges by source, region, and variety

Variance within soft drink bases tracks sweetener choice (HFCS vs cane sugar vs non-nutritive sweetener — different baseline impurity profiles), acidulant choice (phosphoric acid carries more impurities than citric acid), color and flavoring source (natural vs artificial; certain natural-color concentrates from plant sources carry source-plant metals), and formulation-water quality (RO water is standard for major brand soft-drink production). Major brand commercial soft drinks operate to tight impurity specifications; emerging-market and craft soft drinks may carry higher metals.

## Processing effects

Soft drink manufacturing involves preparing the syrup concentrate (combining sweetener, flavoring, acidulant, color), diluting with carbonated water to finished-product strength, and packaging. The dilution step proportionally reduces per-mass metals from the concentrate. Carbonation does not affect metals. Packaging is the final processing step; aluminum-can packaging (with epoxy lining) is standard for canned soft drinks and minimizes Al-migration risk under modern can-stock specifications.

## Ingredient-derivative risk

Soft drink bases route into [[products/soft-drinks-carbonated-beverages|soft-drinks-carbonated-beverages]] product family. Derivatives include cola, lemon-lime soda, ginger ale, root beer, fruit-flavored carbonated beverages, and diet/zero-sugar variants. Each carries the per-base profile diluted by carbonated water and adjusted for any per-format additions.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) include sweetener supplier specification ([[ingredients/white-sugar|refined sugar]] or HFCS at food-grade impurity tier); acidulant supplier specification (food-grade phosphoric acid with documented impurity limits, or citric acid as a lower-impurity alternative); flavoring and color concentrate supplier specification.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-ingredient cultivation stage (sugar cane, sugar beet for refined sugar; corn for HFCS); see [[ingredients/maize|corn]] and per-sweetener pages for upstream interventions.

**Processing levers** ([[mitigation/processing]]) include processing-equipment material specification; formulation-water quality (RO or equivalent purification standard).

**Formulation levers** ([[mitigation/formulation]]) include acidulant choice (citric vs phosphoric) and color/flavor concentrate substitution where impurity tier differs by supplier.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level Pb, Cd testing on incoming sweetener, acidulant, and color concentrate, and on finished product. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (modern epoxy lining minimizes Al and Sn migration); glass and PET packaging eliminate metal-migration pathways entirely.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 does not set soft-drink-specific maximum levels; general EU food-safety law applies plus the lead-in-beverages context.
- FDA does not currently set quantitative action levels specific to soft drinks; general FDA enforcement on toxic-element contamination applies.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) sets general beverage contaminant provisions.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to soft drink products sold in California.
- EU Sn-in-canned-food regulation sets 100 mg/kg maximum level for canned beverages including canned soft drinks.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [cedfa8b8a](https://github.com/paleofoundation/heavymetalindex/commit/cedfa8b8a) | 2026-06-11 | correction | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
