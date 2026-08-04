---
title: "Grapefruit"
type: ingredient
commodity: grapefruit
label: "Grapefruit"
aliases: ["Grapefruit, raw", "grapefruit"]
category: fruit
tds_food:
  number: 92
  description: "Grapefruit, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 27
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-grapefruit-edible-flesh-wet-weight
    speciation: total-Cr-only
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 3
---

# Grapefruit

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 92, "Grapefruit, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Grapefruit (Citrus paradisi) is a tree fruit with a thick, protective rind that substantially shields the edible inner flesh from surface contamination pathways such as atmospheric deposition of Pb-containing particulates and spray-borne metal residues. Citrus trees are deep-rooted perennial crops that draw metals from subsoil horizons rather than only the topsoil layer, but grapefruit orchards in major commercial growing regions (Florida, Texas, California in the US; Mediterranean Spain; South Africa) typically occupy soils with moderate metal burdens, and the physiology of citrus root metal uptake does not involve the same high-efficiency channels as, for example, leafy vegetables or legumes. The thick rind (flavedo and albedo) accumulates more Pb and other atmospherically deposited metals than the edible flesh, but since the rind is not consumed in typical fresh-fruit use, the consumer exposure from grapefruit flesh is very low. The FDA TDS data for raw grapefruit (n=27) report every measured analyte (Cd, Cr, Ni, Pb, U, tAs, tHg) below its reporting limit across the entire distribution [[sources/fda2022-tds-elements-fy2018-fy2020]]; those below-limit results are carried as left-censored bounds rather than as measured zeros, and the European retail citrus survey that measured grapefruit directly detected lead and cadmium at low but non-zero concentrations in the whole fruit (see the Synthesis basis and censoring treatment section). Grapefruit flesh remains among the lowest-risk food matrices for heavy metal exposure, but the values are low rather than zero.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 6 below 5 | below pooling depth: Pb, Cd, tAs, tHg, Ni, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | THIN | 6 of 10 populated analytes declare a basis | no wet/dry basis declared: iAs, Al, Sn, U |
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
| Pb | n=2 | 0–20 | low | [[sources/czech2021-citrus-lead-cadmium\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=2 | 0–1 | low | [[sources/czech2021-citrus-lead-cadmium\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw-grapefruit edible-flesh wet-weight basis, the form in which the fresh fruit is consumed. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported all seven of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Grapefruit, raw" (n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored bound, and, for lead and cadmium, with the detected European retail-citrus distribution. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound, not a measured zero.

Lead and cadmium rest on the single European retail-citrus survey that measured grapefruit by name ([[sources/czech2021-citrus-lead-cadmium|Czech et al. 2021]], ICP-OES, whole fruit, Turkish/Israeli origin via Polish retail, 2019). That study reports whole-fruit lead of 27.2 µg/kg in red grapefruit, 19.6 µg/kg in green grapefruit, and 15.9 µg/kg in white grapefruit, and whole-fruit cadmium of 0.9 µg/kg (red), 1.1 µg/kg (green), and 1.31 µg/kg (white). These are whole-fruit values that include the peel, which Czech et al. show concentrates lead and cadmium above the pulp; they therefore sit at or above the true edible-flesh concentration and are carried as an upper anchor on a flesh page, not as a flesh central. The pooled lead typical of [0, 20] takes the FDA censored floor as the low bound and the white/green whole-fruit central as the upper; the lead 95th-percentile of 27 µg/kg is the red-grapefruit whole-fruit maximum, the top of the ordered pooled set. The cadmium typical of [0, 1] and 95th-percentile of 1 µg/kg likewise span the FDA censored floor to the Czech whole-fruit central, rounded to the resolution the source supports. Both cells are held at low confidence: only two contributors exist, the only positive measurements are whole-fruit rather than pulp-only, and the FDA composite is fully censored.

Total arsenic, total mercury, nickel, and chromium rest on the FDA censored floor alone. No source in the corpus reports a grapefruit-specific positive value for these four analytes: the FDA TDS composite is below the reporting limit for all of them, and the fruit-by-product review that names grapefruit in scope ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]) carries no grapefruit row in its Table 1 — its citrus by-product entries are pomelo, orange, lemon, lime, and mandarin, none of which may be relabeled as grapefruit. Each of these four cells is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single contributor. Total arsenic is held distinct from inorganic arsenic, which remains a reviewed data gap because no speciated measurement exists for this ingredient. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium at low confidence; no grapefruit hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source reports an extractable quantitative value, so no distribution is published (the rice-uranium precedent).

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Grapefruit, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS data for grapefruit raw (n=27) report all measured analytes below the reporting limit throughout the distribution [[sources/fda2022-tds-elements-fy2018-fy2020]]; these are left-censored bounds, not measured zeros, so they constrain the flesh metal burden from above rather than establishing it at zero. The European retail-citrus survey that measured grapefruit by name detected low but non-zero lead and cadmium in the whole fruit, with a varietal gradient: red grapefruit carried the most lead (27.2 µg/kg whole fruit) and white grapefruit the least (15.9 µg/kg), while cadmium ran the opposite way, highest in white grapefruit (1.31 µg/kg) and lowest in red (0.9 µg/kg) ([[sources/czech2021-citrus-lead-cadmium|Czech et al. 2021]]). These are whole-fruit values that include the peel; the rind fraction, which is excluded from the TDS measurement of the raw edible portion, concentrates Pb and Cd above the pulp and is the principal source of the variation seen across varieties. The pulp-only edible flesh therefore sits at or below these whole-fruit figures. Organic versus conventional production may affect surface residue metals on the rind but would not substantially alter flesh metal concentrations given the protective rind barrier.

## Processing effects

Peeling grapefruit before consumption removes the rind, which carries the majority of any atmospherically deposited surface Pb or Cd; the edible flesh that remains is the lowest-metal portion of the fruit. Juicing involves expression of juice from the flesh segment, with minimal contribution from the rind in mechanical juice extraction, though peel oils expressed in some commercial juicing operations can introduce surface-associated metals into the juice fraction. The FDA TDS measures raw grapefruit as the intact edible portion after peeling, which is appropriate for representing consumer exposure from fresh grapefruit consumption.

## Ingredient-derivative risk

Grapefruit juice (covered separately at [[ingredients/grapefruit-juice]]) is the primary derivative. Grapefruit zest and grapefruit peel extract, used in flavoring and confectionery, concentrate metals from the rind and would carry higher Pb and potentially higher Cd than the flesh; these are niche applications and are not characterized in the current corpus. Grapefruit seed extract, used as a natural antimicrobial in food and dietary supplements, is produced from seed and membrane fraction and is also not characterized in the current corpus.

## Mitigation options

### Sourcing levers

Grapefruit flesh is a very-low-risk matrix for heavy metals, and sourcing-level metal risk mitigation is not a high-priority concern for this commodity relative to more contaminated foods. For grapefruit-derived products that utilize rind or peel fractions, sourcing from orchards with low atmospheric metal burden (away from industrial sites and major roads) reduces surface deposition on the fruit exterior.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Thorough washing of the fruit exterior before juicing or zesting removes atmospherically deposited metals from the rind surface, preventing their transfer to juice or flavoring products. This is standard sanitation practice and also addresses microbiological hazards.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine heavy metal testing of fresh grapefruit flesh is not justified by the available occurrence data, which show all analytes below detection limits in a 27-sample TDS dataset [[sources/fda2022-tds-elements-fy2018-fy2020]]. Testing resources for producers and users of grapefruit in food manufacturing are better directed at the higher-risk ingredients in the product formulation.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in citrus fruit is 0.10 mg/kg wet weight, and for Cd in citrus fruit it is 0.050 mg/kg wet weight. These limits apply to grapefruit as placed on the market in fresh form. Given the FDA TDS finding of all analytes at or below detection limits in 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], grapefruit flesh is expected to present no compliance risk at these limits under typical production and supply chain conditions. There are no specific US FDA action levels for metals in fresh grapefruit.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/czech2021-citrus-lead-cadmium|Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits]]<span class="hmi-ref-meta">Czech A, Malik A, Sosnowska B, and Domaradzki P · International Journal of Food Science · 2021 · [doi.org/10.1155/2021/6662259](https://doi.org/10.1155/2021/6662259)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Grapefruit, raw (n=27); all analytes reported as zero (BDL) |
| 3 | [[sources/czech2021-citrus-lead-cadmium\|Czech et al. 2021]]. *Bioactive Substances, Heavy Metals, and Antioxidant Activity in Whole Fruit, Peel, and Pulp of Citrus Fruits*, International Journal of Food Science | 2021 | Peer-reviewed | Pb and Cd in red, green, and white grapefruit whole-fruit, peel, and pulp fractions by ICP-OES |
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
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
