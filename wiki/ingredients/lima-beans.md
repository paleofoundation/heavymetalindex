---
title: "Lima beans"
type: ingredient
commodity: lima-beans
label: "Lima beans"
aliases: ["Lima beans, immature, frozen, boiled", "lima beans"]
category: legume
tds_food:
  number: 42
  description: "Lima beans, immature, frozen, boiled"
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
    typical_ppb: [912, 928]
    p95_ppb: 929
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
    typical_ppb: [0.2, 1.8]
    p95_ppb: 1.9
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

# Lima beans

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 42, "Lima beans, immature, frozen, boiled." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Lima beans (Phaseolus lunatus), also known as butter beans, are a large-seeded legume with a contamination profile that parallels other pulses in its core pathways while differing in some quantitative characteristics due to seed size and starch content. As with lentils and other legumes, cadmium is the metal of primary concern: legumes accumulate Cd from soil through root uptake because the same mobilization chemistry that makes soil nutrients bioavailable to legume root systems also enhances divalent cation uptake. The seed coat of lima beans, as with other pulse crops, carries a higher Cd concentration than the starchy cotyledon interior, so whole dried lima beans have higher Cd than dehulled or split forms. However, the large seed size relative to lentils means that the cotyledon constitutes a larger fraction of total seed mass, which dilutes the overall Cd concentration per gram compared with smaller pulses. Lead in lima beans reaches the edible portion primarily through atmospheric deposition and post-harvest handling; root uptake of Pb is limited by its soil binding characteristics. Nickel in legumes is bioavailable and is the analyte that dominates in the FDA FY2018-FY2020 TDS data, where lima beans (immature, frozen, boiled) showed Ni ranging from 910 to 930 ppb across both samples, a conspicuously high value consistent with legumes' general affinity for Ni from soil [[sources/fda2022-tds-elements-fy2018-fy2020]].

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
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 912–928 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0.2–1.8 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Lima beans, immature, frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 2 | 0 | 0 | in profile |
| Cr | 2 | 0 | 0 | in profile |
| Ni | 2 | 910 | 930 | in profile |
| Pb | 2 | 0 | 0 | in profile |
| U | 2 | 0 | 2 | in profile |
| tAs | 2 | 0 | 0 | in profile |
| tHg | 2 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured lima beans (TDS Food 42, "Lima beans, immature, frozen, boiled") with only n=2 composites; both showed Ni at 910 and 930 ppb respectively, U at values of 0 and 2 ppb at the range endpoints, and Cd, Pb, Cr, tAs, and tHg at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. The n=2 sample count severely limits distributional inference from the TDS for this commodity; the Ni values are consistent with the general pulse literature identifying legumes as dietary Ni contributors, but whether Cd is genuinely at the reporting limit in this matrix or whether the sample count is too small to represent the population variance cannot be determined from two composites. US-grown lima beans, produced primarily in California, are from agricultural soils that are generally well-characterized; imported lima beans from other growing regions would carry geographic soil-metal variability not captured in the TDS. The "immature, frozen" format captured by the TDS reflects the market form most commonly consumed in the US; dried mature lima beans would have different moisture content and thus different metal concentrations on a wet-weight basis.

## Processing effects

The frozen boiled form measured in the TDS represents a commercially prepared product that has undergone blanching before freezing. Blanching (brief exposure to hot water or steam) removes some surface-soluble metals from immature bean pods but affects the interior seed minimally for metals already absorbed into plant tissue. Cooking (boiling) of frozen or dried lima beans in water provides an opportunity for metal leaching into the cooking water; discarding cooking water reduces the metal burden of the edible bean. Soaking dried lima beans before cooking, as is common practice for mature dried beans, and discarding soak water has the same effect documented for lentils: Cd and Ni in the soak water carry away a fraction of the total metal content. Canned lima beans are subject to Sn migration from tin-lined cans, as documented for canned pulses generally; this pathway is not captured by the TDS data for the frozen boiled form.

## Ingredient-derivative risk

Lima bean flour and lima bean protein concentrates are not mainstream commercial ingredients at present but would carry metal profiles proportional to the source bean, with Ni being the analyte of most concern given the TDS data. Canned lima beans represent a different format from the frozen form characterized here; the Sn pathway would be relevant for the canned form if unlacquered tin-plate is used. Mature dried lima beans (larger seed, fully developed starchy cotyledon) may differ somewhat in metal concentration from the immature frozen form measured in the TDS.

## Mitigation options

### Sourcing levers

Sourcing from producers with documented soil Cd monitoring provides the primary lever for Cd. Geographic origin documentation enables assessment of whether Ni-rich soils (a common property of legume-growing regions with high clay content) contribute to elevated Ni. US California-origin lima beans from known agricultural regions provide traceability.

### Agronomic levers

Soil pH management above 6.5 reduces Cd bioavailability. Selection of lima bean varieties with lower Ni accumulation is a potential lever that has not been systematically characterized in the current corpus.

### Processing levers

Soaking dried lima beans in water (for mature dried forms) and discarding soak water reduces Cd and Ni content. Blanching before freezing (applied commercially) provides a partial surface-metal reduction. Cooking in ample water and discarding cooking water reduces the metal burden further.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the high Ni values (910 to 930 ppb) in the TDS data, Ni testing of incoming lots is warranted for products where Ni is a concern. EFSA's nickel risk assessment identifies legumes as dietary Ni contributors, and the TDS values for lima beans are at the upper end of the range seen for legumes. Cd testing is also appropriate given the general pulse Cd accumulation pathway; the absence of detectable Cd in the two TDS composites should be verified against additional sources before treating lima beans as low-Cd.

### Packaging and storage levers

Frozen lima beans in plastic pouches are not subject to Sn migration. Canned lima beans would require lacquer-lined can specifications to reduce the Sn migration pathway.

## Regulatory limits that apply

EU Regulation 2023/915 sets a maximum level for Cd in dried legumes (pulses) of 0.10 mg/kg wet weight [[regulations/eu-2023-915-cadmium]]; this limit is applicable to dried lima beans as placed on the market. For fresh or frozen lima beans, the applicable Cd limit would follow the vegetable framework rather than the pulse framework; the EU typically applies 0.10 mg/kg for fresh pulses with pods consumed. The Pb limit for dried legumes is 0.10 mg/kg wet weight [[regulations/eu2023-contaminants-maximum-levels]]. No specific regulatory limit for Ni in legumes exists in current EU or US regulatory frameworks, though EFSA has established a tolerable daily intake for Ni of 13 µg/kg body weight per day based on sensitized individuals as the most sensitive population [[sources/efsa-nickel-contam-2020|1]]. Codex Alimentarius sets a maximum of 0.10 mg/kg for Cd in pulses [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Lima beans, immature, frozen, boiled (n=2); detectable concentrations for Ni, U |
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
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
