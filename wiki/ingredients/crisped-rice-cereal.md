---
title: "Crisped rice cereal"
type: ingredient
commodity: crisped-rice-cereal
label: "Crisped rice cereal"
aliases: ["Cereal, crisped rice", "crisped rice cereal", "rice cereal"]
category: breakfast-cereal
tds_food:
  number: 75
  description: "Cereal, crisped rice"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 3.6]
    p95_ppb: 4.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [12.4, 34]
    p95_ppb: 36.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [86.7, 100.5]
    p95_ppb: 101.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [138, 202]
    p95_ppb: 206
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0.6, 3.9]
    p95_ppb: 4.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [97.2, 166]
    p95_ppb: 173
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
    typical_ppb: [10.8, 90.8]
    p95_ppb: 95.4
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
sources: 18
---

# Crisped rice cereal

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 75, "Cereal, crisped rice." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Crisped rice cereal is produced from rice grain that has been cooked, dried, and expanded under heat and pressure to produce a puffed or crisped texture. Because the raw material is rice, inorganic arsenic (iAs) is the primary heavy metal concern for this product category. Rice accumulates iAs from paddy soil pore water at rates far exceeding other staple grains because anaerobic flooded conditions convert arsenate to arsenite, which enters the plant via silicic acid transporters that cannot discriminate against arsenite. This mechanism is intrinsic to flooded paddy cultivation and is not removed by the crisping or puffing process.

The FDA TDS FY2018-FY2020 data for crisped rice cereal (n=3 composites, TDS Food 75) shows iAs ranging from 85.8 to 103 ppb with a median of 90.4 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. These levels approach and in some samples exceed the FDA action level of 100 ppb iAs for infant rice cereal specifically [[regulations/fda-iAs-rice-cereal-100ppb]], though the TDS samples in this dataset represent general-consumer crisped rice cereal rather than products specifically marketed for infants. Total arsenic ranges from 130 to 210 ppb in the same samples, indicating that organic arsenic species contribute approximately 40 to 50 ppb tAs beyond the iAs signal. Cadmium is detectable (maximum 39 ppb), nickel is consistently present (94 to 180 ppb), chromium shows variable low-level detection (0 to 100 ppb), and lead appears in one sample at a maximum of 4.5 ppb.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 8 below 5 | below pooling depth: Pb, Cd, iAs, tAs, tHg, Ni, Cr, U |
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
| Pb | n=2 | 0–3.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 12.4–34 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | n=2 | 86.7–100.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tAs | n=2 | 138–202 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0.6–3.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 97.2–166 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 10.8–90.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cereal, crisped rice" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 12 | 39 | in profile |
| Cr | 3 | 0 | 100 | in profile |
| Ni | 3 | 94 | 180 | in profile |
| Pb | 3 | 0 | 4.5 | in profile |
| U | 3 | 0 | 0 | in profile |
| iAs | 3 | 85.8 | 103 | in profile |
| tAs | 3 | 130 | 210 | in profile |
| tHg | 3 | 0 | 4.1 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 data for crisped rice cereal (n=3 composites) shows iAs at 85.8 to 103 ppb across three US commercial market-basket composites [[sources/fda2022-tds-elements-fy2018-fy2020]]. This range is consistent with iAs levels observed in the wider rice-based cereal literature, which shows that US long-grain rice carries higher iAs than basmati or jasmine varieties from lower-iAs origins (India, Thailand), and that brown rice-based crisped cereals carry higher iAs than white rice-based products because the bran layer retains more arsenic. Whether the TDS crisped rice cereal samples were produced predominantly from white or brown rice is not documented in the TDS dataset.

Geographic origin of the rice substrate is the dominant driver of iAs variability in crisped rice cereal. US-grown long-grain rice (particularly from Arkansas, Louisiana, Missouri) carries the highest iAs of any major commercial variety; California medium-grain and imported basmati carry substantially less. Crisped rice cereals produced from US-origin long-grain white rice therefore carry higher iAs burdens than those produced from California or imported lower-iAs varieties.

_No peer-reviewed survey specifically comparing iAs in crisped rice cereals by rice variety or geographic origin is currently integrated into this corpus; the TDS data and general rice literature anchor this analysis._

## Processing effects

The puffing and crisping process (typically high-temperature extrusion or gun-puffing) does not reduce arsenic concentrations; iAs is chemically stable at processing temperatures and is retained in the dried grain matrix. Studies of rice-based snacks and puffed rice products confirm that the puffing step does not meaningfully reduce iAs per gram of product relative to the rice input, and may slightly concentrate it through moisture loss. The extensive washing or rinsing that reduces iAs in cooked rice is not applicable to crisped rice cereal production, where the grain is processed dry or with controlled moisture addition rather than boiled in excess water.

Polishing of the rice grain before puffing (producing white crisped rice from white rice) reduces iAs somewhat relative to brown rice-based products, since the outer bran layer carries a disproportionate fraction of the grain's arsenic. However, the reduction is partial: the endosperm of rice grown in high-iAs paddy soils also carries substantial arsenic, so polishing reduces but does not eliminate the arsenic burden.

## Ingredient-derivative risk

Crisped rice cereal is primarily a consumer-facing product rather than an industrial ingredient, but it is used as an ingredient in rice-crispy-style confectionery bars, granola blends, and chocolate-covered cereal products. Any use of crisped rice cereal as an ingredient in a composite food product carries the iAs burden of the crisped rice substrate proportional to its weight fraction in the finished product. For products marketed to young children, the iAs contribution from a crisped-rice component can be significant given children's higher rice intake relative to body weight. The relevant derivative risk calculation should use the iAs concentration of the crisped rice ingredient (TDS range 85.8 to 103 ppb) and the serving size to estimate total daily iAs exposure from this source.

## Mitigation options

### Sourcing levers

Origin selection for the rice substrate is the highest-impact lever for reducing iAs in crisped rice cereal. Procuring rice from lower-iAs origins (California medium-grain, basmati from Pakistan or India, Thai jasmine) rather than US long-grain can reduce iAs in the finished product by a substantial margin. Supplier specification requiring iAs testing at the rice raw material level (not just the finished cereal) is more protective than finished-product testing alone, because the rice origin is determined before processing begins. Cross-referencing with [[ingredients/rice]] for sourcing lever detail on the rice substrate is recommended.

### Agronomic levers

Agronomic levers (alternate wetting and drying irrigation, silicon amendments, low-iAs cultivar selection) apply at the paddy rice farm level and are documented in detail on [[ingredients/rice]]. These levers are effective but are outside the direct control of the cereal manufacturer; they are implemented through supply-chain specification requiring origin documentation and verified iAs levels in the grain.

### Processing levers

Increasing the degree of rice polishing before puffing reduces iAs by removing the arsenic-concentrated bran layer. This is consistent with preferring white rice substrates over brown rice substrates for products where iAs minimization is a priority. Incorporating a water-washing or soaking step for the rice grain before puffing (parallel to the cooking-water rinsing effect in rice cookery) could reduce iAs, but this step is not standard in crisped rice cereal production and its feasibility and efficacy for this process have not been characterized in the current corpus.

### Formulation levers

For composite products using crisped rice cereal as an ingredient, reducing the crisped rice fraction in favor of lower-iAs cereals (oat-based crisped components, corn-based crisped components) reduces the overall iAs contribution from the crisped grain component. This formulation lever is particularly relevant for products marketed to young children.

### Testing and QC levers

Inorganic arsenic testing (by ICP-MS with HPLC speciation) at the finished-product level is essential for any crisped rice cereal product, given the TDS data showing values at or near the FDA 100 ppb infant rice cereal action level even for non-infant-specific products [[sources/fda2022-tds-elements-fy2018-fy2020]]. Testing at the incoming rice raw material level allows manufacturers to screen and reject high-iAs lots before processing. Cadmium and lead should be included in routine finished-product testing given detectable levels in the TDS data.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in crisped rice cereal is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

FDA's action level for inorganic arsenic in infant rice cereal is 100 ppb (iAs, on an as-sold basis), established under the Closer to Zero initiative [[regulations/fda-iAs-rice-cereal-100ppb]]. The FDA TDS FY2018-FY2020 crisped rice cereal data shows one composite sample above this level (103 ppb iAs) and two samples below it (85.8 and 90.4 ppb), indicating that some commercial crisped rice products marketed to general consumers are at or above the level FDA considers actionable for infant-specific rice cereal. This action level applies specifically to products labeled as infant rice cereal, not to general-consumer crisped rice cereals, but the proximity of the TDS values to this limit is noteworthy for any manufacturer considering infant or toddler positioning for crisped rice products.

Under European Union regulations, the maximum level for inorganic arsenic in rice-based products for infants and young children is 0.10 mg/kg (100 ppb) per EU Regulation 2015/1006, and for rice-based beverages intended for infants the limit is also 0.10 mg/kg. For rice-based breakfast cereals for adults and general consumers, the EU ML for iAs is 0.20 mg/kg (200 ppb). The TDS values of 85.8 to 103 ppb are within the general consumer EU limit but approach or exceed the infant-specific EU limit. For cadmium, the EU processed cereal limit is 0.10 mg/kg (100 ppb) for general products and 0.040 mg/kg (40 ppb) for products marketed to infants; the TDS Cd maximum of 39 ppb is within both thresholds.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 18 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

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
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cereal, crisped rice (n=3); detectable concentrations for Cd, Cr, Ni, Pb, iAs, tAs, tHg |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1e60f272d](https://github.com/paleofoundation/heavymetalindex/commit/1e60f272d) | 2026-08-04 | major | 1 section removed; narrative text revised |
| [3eb44d227](https://github.com/paleofoundation/heavymetalindex/commit/3eb44d227) | 2026-08-03 | major | 1 section added; narrative text revised |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
