---
title: "Saltine crackers"
type: ingredient
commodity: saltine-crackers
label: "Saltine crackers"
aliases: ["Crackers, saltine", "saltine crackers"]
category: grain-product
tds_food:
  number: 66
  description: "Crackers, saltine"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 3.3]
    p95_ppb: 3.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [22.4, 33.6]
    p95_ppb: 34.3
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
    typical_ppb: [3.1, 3.9]
    p95_ppb: 4.0
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
    typical_ppb: [76, 105.6]
    p95_ppb: 107.8
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
    typical_ppb: [0, 40]
    p95_ppb: 45
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
    typical_ppb: [0.4, 2.8]
    p95_ppb: 2.9
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

# Saltine crackers

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
| D8 Provenance integrity | GAP | 10 claims checked, 10 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming saltine-crackers: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 66, "Crackers, saltine." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Saltine crackers are thin, crisp crackers made primarily from refined wheat flour (typically white flour from which bran and germ have been removed), water, fat, and salt, with yeast or baking soda as a leavening agent. The heavy metal profile of saltine crackers is determined almost entirely by the metal content of the refined wheat flour base. Wheat (Triticum aestivum and related species) takes up cadmium (Cd) and lead (Pb) from soil through root absorption; Cd bioavailability is the primary driver because, as with most grain crops, Cd is efficiently translocated from root to grain. Refined white flour contains lower Cd than whole wheat flour because Cd preferentially accumulates in the outer layers of the wheat grain, including the bran and aleurone layer, which are removed during milling. A typical Cd concentration in whole wheat flour may be two to three times higher than in the corresponding white flour from the same source grain. Saltine crackers, being made from refined flour, therefore represent a moderate rather than high Cd risk within the wheat product category. Pb in wheat grain is low under normal agricultural conditions, and the milling of refined flour does not introduce Pb unless equipment or processing water is contaminated. Salt (NaCl) added to saltines at typical cracker-level inclusions (approximately 1 to 2 percent by weight) contributes negligible metals when food-grade salt is used. Vegetable shortening or oil added as a fat source is similarly low-risk after industrial refining.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–3.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 22.4–33.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 3.1–3.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 76–105.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–40 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.4–2.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Crackers, saltine" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 21 | 35 | in profile |
| Cr | 3 | 0 | 50 | in profile |
| Ni | 3 | 73 | 110 | in profile |
| Pb | 3 | 0 | 4.1 | in profile |
| U | 3 | 0 | 3 | in profile |
| tAs | 3 | 3 | 4 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Wheat production region is the primary driver of variation in grain Cd concentration, reflecting differences in soil Cd loading across major wheat-growing regions. European hard wheat grown in Belgium, the Netherlands, and northern France tends toward higher Cd than North American spring or winter wheat, reflecting historical soil Cd from phosphate fertilizer applications. Canadian Prairie wheat and US Great Plains wheat show moderate Cd associated with the Cd content of soils in these regions. The degree of milling refinement (extraction rate) is also relevant: higher extraction rates that retain more bran material produce higher Cd flours; standard white flour at approximately 70 to 75 percent extraction removes most bran-associated Cd. The FDA TDS FY2018-FY2020 data for saltine crackers (n=3 composites) show Cd at p50 of 28 ppb and max of 35 ppb, Ni at p50 of 88 ppb and max of 110 ppb, and Pb at max of 4.1 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. These values represent a US market-basket average and do not resolve geographic or supplier-level variation. Quantitative regional breakdown will be populated when origin-stratified wheat or cracker studies are ingested.

## Processing effects

Milling of wheat grain into white flour removes the bran and germ, which are the primary sites of Cd accumulation in the wheat kernel. This step is the most significant metal-reducing processing effect for cracker products based on refined flour, and it occurs upstream of cracker manufacture. The cracker baking step (at 200 to 250 degrees Celsius for a short duration) does not alter total metal content; metals are neither destroyed nor volatilized at these temperatures. Salt added in the mixing step introduces negligible metals. Yeast or baking soda used for leavening contributes no measurable metals at typical inclusion levels. Vegetable oil or shortening incorporated into the dough introduces no metals after industrial refining. No evidence in the current corpus identifies any cracker-specific processing step as a meaningful metal-introduction or metal-reduction lever.

## Ingredient-derivative risk

Saltine crackers are consumed directly as snacks and used as carriers for spreads, toppings, and soups. In the context of infant and young child feeding, crackers are sometimes used as early finger foods. The Cd content of saltines, at around 28 ppb (p50, TDS data), is lower than that of whole wheat products or bran-containing crackers, but it is not negligible when consumed in substantial quantities. Multi-grain crackers incorporating bran, germ, or whole-grain flours from higher-Cd wheat would carry proportionally higher Cd. Cracker crumbs used as coatings for processed meat or fish products contribute their metal load at the coating fraction level, which is typically small.

## Mitigation options

### Sourcing levers

Specifying low-Cd wheat varieties or wheat from low-Cd-soil production regions is the most impactful lever for cracker manufacturers seeking to reduce Cd exposure. Requiring flour suppliers to provide lot-level Cd testing results and maintaining supplier specifications against Cd concentration limits are standard practices in ingredients procurement for products marketed to children.

### Agronomic levers

Soil pH management (liming to above 6.5) in wheat-growing fields reduces Cd bioavailability and uptake, as documented across wheat-growing regions. This lever operates at the farm level and is accessible to food manufacturers only through supply-chain specifications. _No quantified magnitude data for saltine-specific cracker production in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Using higher-refinement white flour (lower extraction rate, more complete bran removal) reduces Cd relative to whole-grain or high-extraction flour. This is already standard for saltine production. No cracker-manufacturing processing step beyond the milling choice meaningfully reduces Cd once incorporated into refined flour.

### Formulation levers

Substituting refined wheat flour partially with lower-Cd alternative starches (potato starch, tapioca starch) in cracker formulations can reduce Cd on a per-gram basis. This affects product texture and label identity and is typically not pursued solely for metal reduction.

### Testing and QC levers

Lot-level ICP-MS testing of incoming flour for Cd is the primary QC lever for cracker manufacturers targeting a specific product Cd level. Finished-product sampling for Cd and Pb provides assurance that blending or formulation variations are not producing unexpected batch-level exceedances.

### Packaging and storage levers

Standard multilayer flexible packaging for saltine crackers does not contribute metals. Storage conditions do not alter metal content.

## Regulatory limits that apply

Under EU Regulation (EC) No 1881/2006 as amended (see [[regulations/eu2023-contaminants-maximum-levels]]), the applicable Cd maximum level for cereal-based processed foods and bread products is 0.10 mg/kg (100 ppb) wet weight; the Pb maximum level for processed cereal products for the general population is 0.20 mg/kg (200 ppb) wet weight. Crackers fall within the cereal-based processed food matrix under EU rules. The FDA does not publish a specific action level for Pb or Cd in crackers; general surveillance under 21 CFR applies. The Closer to Zero program (see [[regulations/fda-closer-to-zero]]) addresses processed foods for young children broadly, and crackers used as infant finger foods are within scope of this reduction effort even where no specific numerical limit currently exists.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Crackers, saltine (n=3); detectable concentrations for Cd, Cr, Ni, Pb, U, tAs |
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
| [835f4fc96](https://github.com/paleofoundation/heavymetalindex/commit/835f4fc96) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
