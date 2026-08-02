---
title: "Chili con carne with beans"
type: ingredient
commodity: chili-con-carne-with-beans
label: "Chili con carne with beans"
aliases: ["Chili con carne with beans, canned", "chili con carne"]
category: mixed-food
tds_food:
  number: 145
  description: "Chili con carne with beans, canned"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5.3]
    p95_ppb: 5.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [5.6, 7.1]
    p95_ppb: 7.2
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
    typical_ppb: [3.1, 4.9]
    p95_ppb: 5.1
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
    typical_ppb: [266, 450]
    p95_ppb: 465
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
    typical_ppb: [0.2, 1.2]
    p95_ppb: 1.2
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

# Chili con carne with beans

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
| D8 Provenance integrity | GAP | 16 claims checked, 16 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming chili-con-carne-with-beans: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 145, "Chili con carne with beans, canned." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chili con carne with beans is a composite canned product whose metal burden is driven by the interaction of three distinct contamination pathways. The bean fraction (typically red kidney beans or pinto beans) is the primary cadmium and nickel source: legumes are moderate cadmium accumulators that take up cadmium from soil through root transport mechanisms shared with other dicotyledonous crops, and nickel uptake is similarly elevated in legumes relative to cereal grains. The FDA Total Diet Study FY2018-FY2020 found nickel at a median of 330 ppb across 3 composite samples, which is among the higher values seen in the TDS dataset for this metal, consistent with the legume fraction driving Ni [[sources/fda2022-tds-elements-fy2018-fy2020]]. Ground beef (the "carne" fraction) contributes very little to Pb, Cd, or Ni in muscle meat. Tomato and tomato sauce components are typically low in metals. Total arsenic was detectable at a median of 3.3 ppb and a maximum of 5.3 ppb, likely reflecting contributions from both the beef and legume fractions [[sources/fda2022-tds-elements-fy2018-fy2020]]. The canned format introduces the potential for tin migration, though modern enamel-lined cans substantially limit this; Sn was declared a data gap in the contamination profile, indicating the TDS did not measure Sn for this food item.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 5.6–7.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 3.1–4.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 266–450 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.2–1.2 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Chili con carne with beans, canned" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 5.4 | 7.3 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 250 | 480 | in profile |
| Pb | 3 | 0 | 6.6 | in profile |
| U | 3 | 0 | 1.2 | in profile |
| tAs | 3 | 3 | 5.3 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides the primary quantitative reference, with 3 composite samples of canned chili con carne with beans reporting: nickel at a median of 330 ppb (range 250-480 ppb), cadmium at a median of 6.3 ppb (range 5.4-7.3 ppb), total arsenic at a median of 3.3 ppb (range 3.0-5.3 ppb), lead at a maximum of 6.6 ppb (below reporting limit at the median), and uranium at a median of 1.1 ppb (range 0-1.2 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The very small sample size (n=3) substantially limits confidence in these distributional estimates. Variation across brands and formulations would be expected primarily from the bean fraction: different legume species (red kidney, pinto, black, small red) and different geographic origins of beans carry different cadmium and nickel loads. Canned vs homemade chili also differs in that canned products may use enamel-lined cans (affecting Sn) and may include different salt and seasoning blends.

## Processing effects

Canning involves retort sterilisation at high temperature and pressure after sealing, which does not alter metal content of the ingredients but may influence metal migration from can surfaces if enamel integrity is compromised. The acidic environment of tomato-based chili (pH typically 3.5-4.5) promotes tin migration from can interiors more than neutral or alkaline foods; modern enamel linings substantially mitigate this. Soaking and boiling dried beans before incorporation removes a fraction of cadmium and nickel into the soak and cook water; commercial canned products may use pre-cooked beans with varying degrees of water-leaching applied. The tomato fraction (tomato sauce, diced tomato) is processed at high temperature, which concentrates metals slightly relative to fresh tomato as moisture is driven off, but tomato is generally a low-metal ingredient and this effect is small.

## Ingredient-derivative risk

Chili con carne with beans is itself a finished composite product. Its derivatives are primarily variations in recipe and packaging (homemade vs canned, dry-mix vs fully prepared). Bean-only products (canned beans in tomato sauce, refried beans) would carry higher per-serving bean-fraction Ni and Cd without dilution from the beef and tomato components. The "carne only" variant (chili without beans) would eliminate the dominant nickel source and substantially reduce cadmium, leaving a product with a much lower metal burden per serving.

## Mitigation options

### Sourcing levers

Selecting beans from regions with documented low soil cadmium and nickel background is the highest-leverage sourcing decision for this product. Bean-growing regions in the US (North Dakota, Michigan, Nebraska) vary in soil cadmium depending on field history and fertiliser inputs. Supplier specification requiring ICP-MS testing of dried beans for Cd and Ni, with maximum acceptable concentrations, is the most reliable quality control lever at the ingredient level. Specifying enamel-lined cans reduces any tin-migration risk.

### Agronomic levers

Soil pH management (maintaining pH above 6.5) reduces cadmium bioavailability to legume crops. Selecting lower-cadmium-accumulating bean varieties is a documented lever for legumes in European regulatory and breeding programs; varietal data for common chili bean types (red kidney, pinto) is limited in the current corpus. Reducing cadmium-contaminated phosphate fertiliser use on bean-growing fields addresses the primary anthropogenic Cd input.

_No quantified data on nickel-specific agronomic levers for beans in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Soaking dried beans overnight and discarding the soak water before cooking removes a fraction of cadmium and nickel; boiling in multiple changes of water enhances this effect. Commercial processors using pre-washed and pre-soaked beans may have already partially implemented this lever. The magnitude of cadmium reduction through soaking for common bean varieties is not quantified in the current corpus.

### Formulation levers

Reducing the bean fraction relative to beef and tomato reduces per-serving nickel and cadmium from the legume pathway. Substituting lower-accumulating legume varieties for red kidney beans (if lower-Ni species are identified through targeted sourcing) is a formulation-level option. Including lower-metal vegetables (corn, bell pepper) in the recipe does not substantially change the overall metal burden given the dominance of the bean fraction.

### Testing and QC levers

For manufacturers, lot-level ICP-MS testing of the dried bean ingredient for Cd and Ni is the most efficient quality control point, as the bean fraction drives both metals. Testing the finished canned product periodically provides a whole-system check. The TDS median Ni of 330 ppb in the finished product is notable and warrants tracking against any applicable guidance for nickel in composite foods.

### Packaging and storage levers

Enamel-lined cans substantially reduce tin migration. For retorted canned products with high acidity (tomato-heavy chili), verifying enamel lining quality is a standard quality assurance step relevant to tin as well as other metals.

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) and the general contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) do not set a single composite limit for canned chili as a finished product; applicable limits apply to constituent ingredients (beef muscle, legumes, tomato products, cereal-derived ingredients if applicable). For nickel, no specific EU or Codex maximum level applies to canned composite foods as a category; nickel exposure is monitored under dietary exposure assessments rather than individual product limits. No specific US FDA action level applies to canned chili; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides cadmium limits for legumes (pulses): the applicable Codex limit for dried legumes is 0.10 mg/kg, and for canned legumes it is generally addressed under the fresh/dried category limit. For tin in canned foods, the Codex ML is 200 mg/kg and the EU limit is 200 mg/kg for non-beverages.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Chili con carne with beans, canned (n=3); detectable concentrations for Cd, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
