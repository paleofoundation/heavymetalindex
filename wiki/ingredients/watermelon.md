---
title: "Watermelon"
type: ingredient
commodity: watermelon
label: "Watermelon"
aliases: [Watermelon, "raw/frozen", watermelon, watermelon-rind]
category: fruit
tds_food:
  number: 81
  description: "Watermelon, raw/frozen"
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
    typical_ppb: [0, 1.4]
    p95_ppb: 1.7
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
    typical_ppb: [0, 3.8]
    p95_ppb: 4.5
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
    typical_ppb: [0, 52]
    p95_ppb: 67.6
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
sources: 7
---

# Watermelon

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 81, "Watermelon, raw/frozen." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Watermelon is a cucurbit fruit with a high water content (approximately 92 percent by weight) and a large physical volume. Both characteristics limit heavy metal accumulation on a per-gram basis: metals taken up from soil by the root system are distributed across a large mass of dilute fruit tissue. The thick outer rind provides an additional physical barrier that restricts metal translocation into the edible flesh. Watermelon is therefore among the lower-risk food matrices on the wiki for most heavy metals. The FDA TDS FY2018-FY2020 data (n=27) consistently show zero or near-zero values for Pb, Cd, Cr, and tHg across the full distribution, with only Ni (reaching 79 ppb at maximum), tAs (reaching 6.8 ppb at maximum), and Cd (reaching 2.6 ppb at maximum) showing any non-zero observations at the upper tail ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The Ni signal is consistent with low-level background Ni in cucurbit crops. The tAs signal at trace levels is not unexpected for fruit grown on soils with any background arsenic. Root-level uptake from contaminated soils is the operative pathway for all detected metals; there is no aquatic bioaccumulation or manufacturing-related metal pathway for fresh watermelon.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Cd | n=2 | 0–1.4 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.8 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0–52 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Watermelon, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 2.6 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 0 | 79 | in profile |
| Pb | 27 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | in profile |
| tAs | 27 | 0 | 6.8 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=27) show that the vast majority of watermelon samples are at or below detection limits for all analytes ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Where detectable, Ni reached a maximum of 79 ppb, tAs a maximum of 6.8 ppb, and Cd a maximum of 2.6 ppb. These distributions suggest that elevated values are rare events, likely associated with specific growing conditions rather than being characteristic of the commodity category as a whole. No geographic or varietal breakdown for watermelon heavy metals is available in the current corpus.

## Processing effects

Fresh watermelon consumed raw undergoes no processing steps that alter metal concentrations. Watermelon juice and watermelon-based beverages produced by pressing and filtering concentrate metals in proportion to water reduction only minimally, as the high initial water content of the fruit means that juice yield is high and solid residue is low. Freezing (the form in the TDS description "Watermelon, raw/frozen") does not alter metal concentrations. No cooking or thermal processing is conventionally applied to watermelon in its primary use as a fresh fruit.

## Ingredient-derivative risk

Watermelon is used primarily as a fresh fruit. Processed derivatives include watermelon juice, watermelon extract (used in beverages and supplements), watermelon rind pickles, and freeze-dried watermelon powder. The rind carries a different metal profile than the flesh because it is the outer structural tissue closest to the soil interface; rind-specific metal data are not in the current corpus. Freeze-dried watermelon powder concentrates metals proportionally to water removal but the low initial metal content of the flesh means concentrations remain low even after dehydration.

## Mitigation options

### Sourcing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the consistently near-zero concentrations in the TDS data, routine lot-level heavy metal testing of fresh watermelon for commercial food manufacturing is unlikely to yield actionable signals under normal supply-chain conditions. Testing would be warranted when watermelon is sourced from geographies with known soil contamination or industrial co-location.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union applies maximum levels for Pb (0.10 mg/kg, or 100 ppb) and Cd (0.050 mg/kg, or 50 ppb) to fresh fruit under [[regulations/eu2023-contaminants-maximum-levels]]. These limits apply to watermelon as fresh fruit sold in the EU. No FDA action level specific to watermelon or cucurbit fruits is in force. [[regulations/codex-cadmium-mls]] provides the international Codex Cd maximum for vegetables and certain fruits. The observed concentrations in the TDS data are substantially below applicable regulatory limits.

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
| 1 | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|Elbagory et al. 2025]]. *Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin*, Horticulturae | 2025 | Peer-reviewed | Cd, Cr, Pb, tAs, and Al in two watermelon cultivars (Arka Shyama, Crimson Sweet) grown along the Ganges-Yamuna river basin |
| 2 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 4 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Watermelon, raw/frozen (n=27); detectable concentrations for Cd, Ni, tAs |
| 5 | [[sources/youssao2018-fruit-juices-syrup-benin\|Youssao et al. 2018]]. *Levels of Minor and Trace Elements of Some Commercial Fruit Juices and Syrup Produced in Artisanal and Semi-Industrial Units in Benin Republic*, International Journal of Chemistry | 2018 | Peer-reviewed | BJ/FR Al, tAs, Ba, Be, Cd, Hg, Pb, Sn, Tl, U occurrence in 92 fruit-juice and syrup samples: 85 Benin-produced bottled pineapple juices/cocktails from artisanal and semi-industrial units, 6 French pineapple... (n=92) |
| 6 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 7 | [[sources/unaegbu2016-fruit-heavy-metals-enugu\|Unaegbu et al. 2016]]. *Heavy metal, nutrient and antioxidant status of selected fruit samples sold in Enugu, Nigeria*, International Journal of Food Contamination | 2016 | Peer-reviewed | NG/US/ZA Ni, Cd, Pb occurrence in Ten fruit samples representing apple, pineapple, orange, watermelon, and banana sold in Ogbete market, Enugu, Nigeria; source table... (n=10) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
