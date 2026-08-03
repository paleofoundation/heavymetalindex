---
title: "Pork sausages"
type: ingredient
commodity: pork-sausages
label: "Pork sausages"
aliases: [pork sausage]
category: meat-composite
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.4]
    p95_ppb: 4.9
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0.7
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 28]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cooked-pork-sausage-composite-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, 7]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: cooked-pork-sausage-composite-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 43]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: cooked-pork-sausage-composite-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: cooked-pork-sausage-composite-wet-weight
    speciation: total-Cr-only
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.3]
    p95_ppb: 1.6
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 2
---

# Pork sausages

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Pork sausages are processed meat products made from a mixture of minced pork meat, fat, flavourings, and typically cereal-based fillers such as wheat rusk or breadcrumbs, encased in natural or collagen casings. The heavy metal profile of pork sausages reflects contributions from three distinct ingredient pathways, each with a different metal source.

The dominant pork meat fraction, which comprises skeletal muscle and fat, contributes very low levels of cadmium and lead because these metals do not bioaccumulate efficiently in mammalian muscle or adipose tissue. However, many commercial sausage formulations include a small proportion of mechanically recovered meat (MRM) or offal trimmings, and sausages containing any liver or kidney fraction carry elevated Cd from those organ tissues, where cadmium concentrates at levels roughly 10 to 100 times higher than skeletal muscle following dietary accumulation in the pig.

The cereal filler fraction (typically wheat rusk) introduces cadmium through the well-documented wheat grain Cd pathway: cadmium is taken up by wheat roots from soil and translocates to grain, and the bran fraction that is often present in rusk carries higher Cd than white flour derived from the endosperm. Wheat-rusk inclusion at levels of 5-15 percent by weight in standard pork sausage formulations represents a meaningful Cd contributor to the finished product.

The casing does not contribute significant metals. Natural casings (cleaned intestine) would carry minimal residual Cd or Pb. Collagen casings do not introduce metals at analytically significant levels. Seasonings and flavourings at typical inclusion levels are negligible metal contributors unless specific flavouring ingredients have known elevated metal profiles.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr, U |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 4 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, Al, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-13 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–4.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=3 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–28 | low | [[sources/zhang2022-pork-heavy-metals-china\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–7 | low | [[sources/zhang2022-pork-heavy-metals-china\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=1 | 0–43 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.3 | high | — |

## Synthesis basis and censoring treatment

The total-arsenic, total-mercury, nickel, and chromium cells were resynthesized on 2026-06-11 in the page's native basis, the cooked pork-sausage composite as placed on the table (pan-cooked link or patty, wet weight), the form FDA reports for this matrix. Values below the analytical reporting limit are treated as left-censored bounds, not as measured zeros.

The earlier profile reported all four of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Pork sausage (link/patty), pan-cooked" (n=27), in which every sample (or all but one, for nickel) fell below the reporting limit and the below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits total arsenic 3, total mercury 1, nickel 40, total chromium 50 µg/kg). The resynthesis replaces the literal zeros with left-censored floors and folds in the one non-FDA occurrence anchor available for pork, so each of the four cells now exposes a non-zero understanding rather than a measured zero.

Total arsenic rests on the FDA fully-censored floor (all 27 composites below the 3 µg/kg reporting limit, carried as "<3") together with the secondary China-market pork aggregate of Zhang et al. 2022 ([[sources/zhang2022-pork-heavy-metals-china|Zhang et al. 2022]], fitted total-arsenic concentration in pork of 0.028 mg/kg = 28 µg/kg, drawn from 26 published concentration records). The 28 µg/kg upper anchor is a broader-pork fitted central, not a pork-sausage-specific value and not a distribution, so it is carried as the typical upper bound at low confidence; no 95th-percentile value is published, because the FDA distribution is fully censored and the Zhang figure is a single fitted central rather than an ordered set. Total arsenic and inorganic arsenic are kept as distinct analytes; no speciated measurement exists for this commodity, so the inorganic-arsenic cell remains a reviewed data gap and total arsenic is not promoted to inorganic arsenic.

Total mercury rests on the same two sources: the FDA fully-censored floor (all 27 composites below the 1 µg/kg reporting limit, carried as "<1") and the Zhang et al. 2022 China-market pork aggregate (fitted total-mercury concentration 0.007 mg/kg = 7 µg/kg, from 22 records). As with arsenic, the 7 µg/kg upper anchor is a broader-pork fitted central rather than a sausage-specific distribution, so it is the low-confidence typical upper bound and no 95th-percentile is computed. Total mercury is held distinct from methylmercury and is not derived from it.

Nickel rests on the FDA composite alone: 26 of 27 samples fell below the 40 µg/kg reporting limit and a single sample (2019 summer, West region) returned a detect of 43 µg/kg. The honest reading is a left-censored floor of "<40" with one detected value at 43 µg/kg; the FDA distribution's own 90th and 95th percentiles remain zero because the lone detect sits at the maximum rather than in the upper-percentile band. The typical range is therefore carried as the censored floor up to the single 43 µg/kg detect, at low confidence, with no published 95th-percentile value and no second source for the commodity. The earlier zero is replaced because nickel is demonstrably not absent: one composite detected it above the reporting limit.

Chromium is reported as total chromium at low confidence. Every one of the 27 FDA composites fell below the 50 µg/kg total-chromium reporting limit, so the only defensible value is a left-censored floor of "<50"; no positive total-chromium occurrence value exists for pork sausage in the corpus, and the upper typical bound and 95th-percentile are left null rather than inferred. No fluid hexavalent-chromium measurement exists for this commodity, so no Cr-VI value is inferred. The only chromium-speciation evidence routed to pork is Ren et al. 2018 ([[sources/ren2018-crvi-pork-electron-beam|Ren et al. 2018]]), a laboratory electron-beam mitigation study in which lean, marbled, and fat pork were deliberately spiked with potassium dichromate to 150-250 ppm Cr(VI); it establishes that Cr(VI) adsorbs to pork tissue in a protein-dependent manner (fat pork carrying 80-85 percent of total Cr(VI) as free, lean pork only 2-4 percent) but provides no naturally occurring concentration, so it substantiates the total-Cr-only, no-Cr-VI-occurrence reading without populating a number.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Pork sausage metal concentrations vary primarily as a function of formulation (the proportion of organ meat, the type of cereal filler, and the rusk Cd level) rather than geographic production origin. UK sausage formulations, which typically include higher rusk proportions than some continental European equivalents, may carry slightly higher Cd from the wheat filler fraction when UK wheat rusk is derived from higher-Cd durum or harder wheat varieties. The FSA/Fera 2016 survey ([[sources/fsa2016-infant-food-formula-metals-survey]]) includes pork sausages as a UK retail composite, providing one occurrence reference point. No multi-country comparative dataset for pork sausage metal concentrations is available in the current corpus.

The FDA TDS FY2018-FY2020 dataset includes a pork sausage (link/patty, pan-cooked) entry (TDS Food 19, n=27) that shows Pb at a 90th percentile of 4.38 ppb (max 4.9 ppb) and Cd predominantly at zero (p95 of 0.7 ppb), reflecting US market sausages where wheat rusk may not be present in all formulations and organ-meat inclusion is less common than in UK sausages ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Mincing and emulsification homogenise the metal burden across the meat, fat, filler, and any organ-meat fractions; any pocket of higher Cd from an organ-meat inclusion is distributed throughout the product. Cooking (pan-frying, grilling, baking) drives moisture loss, which concentrates metals slightly on a wet-weight basis. Smoking does not add metals at analytically significant levels. The net cooking effect is minor relative to the formulation-driven Cd variance.

## Ingredient-derivative risk

Standard pork sausage is the base form on this page. Cocktail sausages and chipolatas are small-format versions of essentially the same formulation and share the same metal profile drivers. Cooked-in-can sausages are subject to Sn migration from tinplate and would therefore have an additional Sn pathway not present in fresh or chilled sausages. Sausage meat used as an ingredient in composite products contributes proportionally to its inclusion level.

## Mitigation options

### Sourcing levers

Specifying low-organ-meat or organ-meat-free pork sausage formulations for applications where Cd is a concern eliminates the organ-tissue Cd pathway. Sourcing wheat rusk from low-Cd wheat flour rather than whole-grain or bran-containing rusk reduces the cereal-filler Cd contribution. Supplier formulation transparency and filler-specification documentation are the verification mechanisms.

### Agronomic levers

Soil pH management and cultivar selection in the wheat supply chain upstream of rusk manufacture reduce cereal-filler Cd; this lever is at the wheat-growing and rusk-manufacturing stages and is not directly accessible to sausage manufacturers without supplier engagement.

### Processing levers

Using refined white wheat flour rather than bran-containing rusk in sausage formulations reduces the Cd contribution from the cereal fraction. Reducing the total rusk inclusion proportion in the formulation reduces the Cd load proportionally.

### Formulation levers

Replacing wheat rusk with alternative cereal or starch fillers that carry lower Cd (for example, tapioca starch or rice starch from verified low-Cd sources) is a formulation lever available to manufacturers seeking to reduce product Cd. Eliminating organ-meat inclusions from formulations directed at vulnerable populations is a higher-impact lever where organ-meat inclusion is confirmed.

### Testing and QC levers

Lot-level ICP-MS testing of finished pork sausage for Cd provides assurance for markets where EU pork muscle Cd limits or product-specific limits apply. Testing incoming wheat rusk or flour for Cd addresses the primary variable cereal-filler contributor. Given the formulation variability across sausage types, testing should be formulation-specific rather than relying on generic pork sausage reference values.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in processed meat products is governed by the ML for pork muscle meat (0.050 mg/kg) applied to the meat fraction; composite products are assessed proportionally to their meat content. Sausages are regulated as processed meat products under EU food law. For lead in processed meat, the EU ML for meat-based products applies.

No US FDA action level for Cd or Pb in pork sausage applies under the current regulatory framework. FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not list pork sausage as a priority category. Codex Cd ML for meat applies to the meat fraction ([[regulations/codex-cadmium-mls]]).

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 19, "Pork sausage (link/patty), pan-cooked." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pork sausage (link/patty), pan-cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0.7 | 1.3 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 43 | in profile |
| Pb | 27 | 0 | 0 | 0 | 4.38 | 4.87 | 4.9 | in profile |
| U | 27 | 0 | 0 | 0 | 1.3 | 1.65 | 1.9 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 2 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/zhang2022-pork-heavy-metals-china|Risk assessment of heavy metals contamination in pork]]<span class="hmi-ref-meta">Zhang H, Zhou G, Zhang S, Yang Y, Dev S, Su Q, et al. · Food Control · 2022 · [doi.org/10.1016/j.foodcont.2021.108793](https://doi.org/10.1016/j.foodcont.2021.108793)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/ren2018-crvi-pork-electron-beam|One-Step and Nondestructive Reduction of Cr(VI) in Pork by High-Energy Electron Beam Irradiation]]<span class="hmi-ref-meta">Ren J, Zhang G, Wang D, Han J, Wu Z, and Cai D · Journal of Food Science · 2018 · [doi.org/10.1111/1750-3841.14088](https://doi.org/10.1111/1750-3841.14088)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pork sausage (link/patty), pan-cooked (n=27); detectable concentrations for Cd, Ni (one 43 µg/kg detect), Pb, U; left-censored floors for tAs (<3), tHg (<1), Ni (<40), Cr (<50) |
| 2 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
