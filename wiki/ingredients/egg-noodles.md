---
title: "Egg noodles"
type: ingredient
commodity: egg-noodles
label: "Egg noodles"
aliases: ["Noodles, egg, enriched, boiled", "egg noodles"]
category: grain-product
tds_food:
  number: 69
  description: "Noodles, egg, enriched, boiled"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.9, 6.1]
    p95_ppb: 6.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [17.2, 26]
    p95_ppb: 26
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
sources: 2
---

# Egg noodles

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 69, "Noodles, egg, enriched, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Egg noodles are a pasta product made from refined wheat flour (endosperm fraction) and eggs, formed into noodles and typically boiled before consumption. The heavy metal profile of egg noodles is dominated by contributions from the wheat flour fraction, with the egg fraction adding negligible metals under normal commercial production conditions.

Cadmium in wheat flour (the endosperm fraction, with bran and germ removed) is lower than in whole-wheat flour, because Cd in wheat grain concentrates in the bran and germ outer layers. Egg noodles made from refined flour therefore carry less cadmium than whole-wheat pasta. The FDA TDS FY2018-FY2020 data for boiled enriched egg noodles (n=3, TDS Food 69) shows Cd at 15 to 26 ppb (median 26 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]], which is higher than some other refined grain products in the TDS dataset and may reflect variability in the wheat flour Cd content or in the degree of bran removal across the composite sample set. Pb is detectable at 0 to 6.6 ppb (median 4.3 ppb), while tAs, Cr, Ni, U, and tHg are all at zero across the three composites.

The egg component of egg noodles contributes protein and color but does not meaningfully add heavy metals to the matrix. Hard-boiled eggs in the TDS dataset show all analytes at zero [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the expectation that eggs from commercial production carry negligible heavy metals.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
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
| Pb | n=2 | 0.9–6.1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 17.2–26 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Noodles, egg, enriched, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 15 | 26 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 6.6 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset (n=3 composites) is the only structured occurrence source for egg noodles in the current corpus [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cd shows a range of 15 to 26 ppb with a notably constrained upper end (two of the three composites are at the maximum of 26 ppb), and Pb shows a range of 0 to 6.6 ppb. The n=3 size prevents confident characterization of the broader market distribution.

No peer-reviewed multi-region survey of heavy metals in egg noodles specifically is currently integrated into this corpus. Wheat cadmium varies by origin (European wheat from regions with higher soil Cd, or wheat from high-cadmium irrigation areas, can carry higher grain Cd), so the Cd level in egg noodles in other markets may differ from the US TDS market-basket result. Pasta studies from Europe generally report Cd in pasta products in a range of 10 to 80 ppb depending on wheat variety, degree of milling, and origin, which frames the upper end of the distribution for context.

## Processing effects

Boiling egg noodles in water does not substantially reduce metal concentrations per gram of food, since cadmium incorporated in wheat protein matrices does not leach readily into cooking water at the temperatures and durations typical of pasta cooking. Unlike rice, where inorganic arsenic leaches into boiling water and discarding cooking water can reduce iAs exposure, pasta cooking does not produce a comparably effective metal-reduction step.

The egg-enrichment step in noodle production (adding egg or egg solids to the dough) does not add heavy metals but does add protein that structurally modifies the pasta matrix. Drying and packaging of dry egg noodles preserves the metal burden of the cooked-equivalent; rehydration in cooking does not change the metal profile relative to what is present in the dry noodle.

Enrichment of the noodles with vitamins and iron (standard for enriched egg noodles in the US) uses food-grade premixes that do not add cadmium or lead at levels relevant to this profile.

## Ingredient-derivative risk

Egg noodles are a consumer-facing product rather than an industrial ingredient in most applications. In composite dishes (soups, casseroles, noodle bowls), egg noodles contribute their Cd and Pb burden proportional to their weight fraction in the finished dish. The broth or sauce component of noodle dishes adds a separate metal contribution not captured in the noodle-only TDS data. In food service and retail contexts where egg noodles are a primary component, the Cd range of 15 to 26 ppb per gram of noodle (on the as-consumed wet-weight basis of the TDS data) is the relevant figure for exposure estimation.

## Mitigation options

### Sourcing levers

Procuring wheat flour from origins with documented low soil cadmium is the primary lever for reducing Cd in egg noodles. Supplier specification for wheat flour Cd content and origin provenance, or selection of flour from certified low-Cd wheat cultivars where available, reduces the grain-origin contribution. Using semolina from durum wheat regions with established low-Cd soil profiles (for example, some North American spring wheat regions) rather than from high-Cd European regions is the geographic implementation of this lever.

### Agronomic levers

_Agronomic levers apply at the wheat farm level. Soil pH management (liming), phosphate fertilizer cadmium specifications, and low-Cd wheat cultivar selection are the relevant agronomic levers; see the wheat cadmium literature for detail._

### Processing levers

Effective bran and germ removal through roller milling reduces cadmium in the wheat flour used for egg noodles. Ensuring that the flour used is fully refined (not whole-wheat or partially refined) is the relevant specification. Boiling in a large volume of water and draining does not substantially reduce Cd but is consistent with standard safe preparation practice.

### Formulation levers

_No quantified data on formulation substitution effects on egg noodle metal content is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

The TDS Cd range of 15 to 26 ppb for boiled egg noodles (n=3) [[sources/fda2022-tds-elements-fy2018-fy2020]] is sufficiently variable that lot-level Cd testing of the wheat flour input is warranted for manufacturers producing high-volume egg noodle products or products positioned for children, who may have higher pasta consumption rates relative to body weight. Lead testing at spot-check frequency is reasonable given the detected Pb range (0 to 6.6 ppb).

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in egg noodles is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for cadmium in pasta and noodle products follows the general cereal products framework: 0.10 mg/kg (100 ppb) wet weight for pasta, and stricter limits apply for products specifically marketed to infants and young children. For lead in pasta, the EU general cereal limit of 0.20 mg/kg (200 ppb) applies. The TDS Cd maximum of 26 ppb (wet weight, boiled) and Pb maximum of 6.6 ppb are within these EU limits. Codex Alimentarius (CXS 193-1995 and revisions) sets a general cereal cadmium limit of 0.10 mg/kg and a lead limit of 0.20 mg/kg. No US federal maximum level for cadmium or lead in pasta or egg noodles has been finalized as of 2026.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 2 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/kongta2023-noodle-products-aluminum-thailand\|Kongta et al. 2023]]. *Assessment of Exposure to Aluminum through Consumption of Noodle Products*, Foods | 2023 | Peer-reviewed | TH Al occurrence in Twenty samples each of rice stick noodles, egg noodles, wide rice noodles, and Thai rice noodles collected from... (n=80) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Noodles, egg, enriched, boiled (n=3); detectable concentrations for Cd, Pb |
<!-- END: hmi-source-legend -->

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
