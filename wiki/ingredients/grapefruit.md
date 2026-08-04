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
sources: 3
---

# Grapefruit

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 92, "Grapefruit, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Grapefruit (Citrus paradisi) is a tree fruit with a thick, protective rind that substantially shields the edible inner flesh from surface contamination pathways such as atmospheric deposition of Pb-containing particulates and spray-borne metal residues. Citrus trees are deep-rooted perennial crops that draw metals from subsoil horizons rather than only the topsoil layer, but grapefruit orchards in major commercial growing regions (Florida, Texas, California in the US; Mediterranean Spain; South Africa) typically occupy soils with moderate metal burdens, and the physiology of citrus root metal uptake does not involve the same high-efficiency channels as, for example, leafy vegetables or legumes. The thick rind (flavedo and albedo) accumulates more Pb and other atmospherically deposited metals than the edible flesh, but since the rind is not consumed in typical fresh-fruit use, the consumer exposure from grapefruit flesh is very low. The FDA TDS data for raw grapefruit (n=27) show all metals at or below detection limits [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with citrus flesh being among the lowest-risk food matrices for heavy metal exposure.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/czech2021-citrus-lead-cadmium\|2]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/czech2021-citrus-lead-cadmium\|2]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Grapefruit, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS data for grapefruit raw (n=27) shows all measured analytes at or below the reporting limit, suggesting that geographic and varietal variation in the flesh metal burden is not detectable at the sensitivity of the TDS method [[sources/fda2022-tds-elements-fy2018-fy2020]]. The rind fraction, which is excluded from the TDS measurement of the raw edible portion, would show higher Pb from atmospheric deposition and is not characterized for grapefruit flesh specifically in the current corpus. Pink versus white grapefruit varieties are not expected to differ materially in heavy metal burden, as both use the same root architecture and protective rind structure. Organic versus conventional production may affect surface residue metals on the rind but would not substantially alter flesh metal concentrations given the protective rind barrier.

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
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
