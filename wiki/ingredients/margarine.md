---
title: "Margarine"
type: ingredient
commodity: margarine
label: "Margarine"
aliases: ["Margarine, salted", "margarine"]
category: fat-oil
tds_food:
  number: 162
  description: "Margarine, salted"
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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
    typical_ppb: [0, 0]
    p95_ppb: 0
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

# Margarine

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
| D8 Provenance integrity | GAP | 1 claims checked, 1 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming margarine: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 162, "Margarine, salted." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Margarine is an emulsified fat product made primarily from refined vegetable oils, water, emulsifiers (typically lecithin), salt, and stabilizers. The primary reason margarine carries negligible heavy metal concentrations is the extensive refining process applied to the vegetable oil base. Crude vegetable oils extracted from seeds or palm fruit contain trace metal contaminants that are associated with phospholipids, free fatty acids, and colloidal particles in the crude oil. Refining steps including degumming (removing phospholipids), alkali neutralization, bleaching with activated earth or carbon, and deodorization by steam stripping progressively remove these metal-containing fractions. By the time a refined vegetable oil reaches the margarine manufacturing step, most metal-bearing components have been removed. Lecithin added as an emulsifier is typically a soy-derived phospholipid concentrate that may carry trace metals, but the inclusion rate is low (approximately 0.2 to 0.5 percent) and refined lecithin is itself a processed material with low metal content. Salt and water dilute the formulation further. The FDA FY2018-FY2020 TDS data for margarine (salted) found all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) below the reporting limit across all three samples [[sources/fda2022-tds-elements-fy2018-fy2020]], which is consistent with the expectation that refined-fat products are among the cleanest matrices in the food supply.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Margarine, salted" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured margarine (TDS Food 162, "Margarine, salted") with n=3 composites and found all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) below the reporting limit at both minimum and maximum [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. The small TDS sample count is adequate for this commodity given the uniformly non-detectable results and the mechanistic basis for expecting very low metal content from the refined-oil production process. European data for margarine and similar spreads are consistent with this result; refined plant fat products routinely pass regulatory surveillance at levels far below applicable limits. The vegetable oil source (soybean, canola, palm, sunflower) does not meaningfully differentiate the metal profile of the finished margarine because the refining process removes metal-bearing fractions regardless of the crude oil starting point.

## Processing effects

Oil refining, which precedes margarine manufacturing, is the critical processing step that determines margarine's metal content. Degumming removes phospholipid-associated metals; bleaching with activated earth physically adsorbs trace metals from the oil; deodorization at high temperature removes volatile contaminants. These sequential steps effectively eliminate metals from the oil phase. Hydrogenation of oils (used to achieve desired fat crystallization properties in some margarine products) does not introduce metals unless the hydrogenation catalyst (typically nickel-based) is incompletely removed; catalyst specifications and post-hydrogenation filtration are designed to prevent Ni carry-through, and the industry standard is to maintain Ni in the finished oil below the sub-ppb range. The emulsification step with water, lecithin, and salt does not introduce metals at meaningful concentrations.

## Ingredient-derivative risk

Margarine is itself the finished product; no further concentration or derivative process applies in typical consumer use. Baking or frying with margarine does not concentrate metals. At the ingredient level for food manufacturers, margarine presents essentially no metal risk pathway relative to other ingredient choices.

## Mitigation options

### Sourcing levers

Standard food-grade refined vegetable oils already satisfy the condition for negligible metal content. No special sourcing intervention is warranted; the metal profile is determined by the refining process rather than the agricultural origin.

### Agronomic levers

Not applicable; the refining process removes agricultural-origin metal variability from the product.

### Processing levers

Confirming that nickel-catalyzed hydrogenation steps use properly filtered and purified catalyst systems, and that post-hydrogenation Ni specifications are maintained, provides assurance against the only meaningful processing-introduced metal risk. Activated-earth bleaching specifications and filtration standards ensure the degumming and bleaching steps function as designed.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level metal testing of refined margarine is unlikely to yield actionable findings given the uniformly BDL results in the TDS. Monitoring at the refined oil intermediate stage, specifically for Ni as a potential process contaminant from hydrogenation, is more cost-effective than testing the finished margarine.

### Packaging and storage levers

Margarine is typically packaged in plastic tubs or foil-wrapped blocks; the Sn migration pathway is not applicable. Storage temperature affects crystallization state but not metal concentration.

## Regulatory limits that apply

EU Regulation 2023/915 sets a maximum level for Pb in fats and oils of 0.10 mg/kg [[regulations/eu2023-contaminants-maximum-levels]]; margarine falls under this limit as an oil-based spread. No EU maximum for Cd in fats and oils as a distinct category is set in the current framework, as Cd is not a meaningful contaminant in refined fats. The Ni hydrogenation pathway is addressed through food additive and processing aid regulations specifying catalyst purity and maximum residue standards, rather than through contaminant maximum levels. The United States does not set statutory maxima for Pb or Cd in margarine. Codex Alimentarius provisions for contaminants in edible fats and oils apply [[regulations/codex-cadmium-mls]].

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Margarine, salted (n=3); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [d3fe12511](https://github.com/paleofoundation/heavymetalindex/commit/d3fe12511) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
