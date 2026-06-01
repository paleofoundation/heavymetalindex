---
title: "Lamb chop"
type: ingredient
commodity: lamb-chop
label: "Lamb chop"
aliases: ["Lamb chop, pan-cooked with oil", "lamb"]
category: meat
tds_food:
  number: 22
  description: "Lamb chop, pan-cooked with oil"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: high
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
    confidence: high
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
    confidence: high
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

# Lamb chop

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 22, "Lamb chop, pan-cooked with oil." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Lamb chop is skeletal muscle from young sheep, and its metal contamination profile follows the general pattern of grazing ruminant muscle tissue. Sheep are pasture-fed and ingest metals primarily through forage, soil particles adhering to grass, and water. Unlike cattle, which are often grain-finished in feedlot systems, lamb in many production systems (UK, Australia, New Zealand) is predominantly pasture-raised throughout its lifespan, meaning pasture soil geochemistry is the dominant environmental exposure variable. Cadmium in sheep accumulates preferentially in the kidney cortex (sometimes called "lamb kidneys" for the retail product), with muscle tissue receiving a much smaller fraction of absorbed Cd. Pastoral UK and European studies have documented low but detectable Cd in sheep muscle tissue, with concentrations influenced by the Cd content of the underlying pasture soil. Lead in lamb muscle is typically at or near the reporting limit, consistent with the general principle that lead partitions to bone and soft organs more readily than to skeletal muscle. The FDA FY2018-FY2020 TDS data for lamb chop (pan-cooked with oil) show Cd with a maximum of 1 ppb and Pb with a maximum of 4.4 ppb across 27 samples, confirming the low-concentration character of this matrix [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — | — |
| tAs | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 0 | 0 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — | — |
| U | n=2 | 0 | 0 | high | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Lamb chop, pan-cooked with oil" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 1 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 4.4 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured lamb chop (TDS Food 22, "Lamb chop, pan-cooked with oil") with n=27 composites and found Cd with a maximum of 1 ppb and all other values below the reporting limit; Pb with a maximum of 4.4 ppb and otherwise below detection; and Cr, Ni, tAs, tHg, and U all below the reporting limit across the full distribution [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. These near-BDL results are consistent with the general understanding of lamb muscle as a low-metal matrix. The US retail lamb market draws on domestic production (Colorado, California, Texas) as well as imports from Australia and New Zealand. Australian and New Zealand pastoral systems are characterized by extensive low-Cd pastures, and lamb from these origins tends to show uniformly low muscle-tissue metal concentrations. European pastoral lamb, particularly from the UK and France, may show slightly more geographic variability in soil Cd, but market-level composites are expected to remain well below regulatory limits.

## Processing effects

Lamb chop reaches the consumer as a cut of muscle with bone attached; pan-cooking with oil (the TDS preparation) causes surface browning and moisture loss. Cooking to medium or well-done concentrations metals slightly on a wet-weight basis through moisture loss, but the starting concentrations are so low that this effect is not practically significant. Bone broth or stock prepared from lamb bones is not characterized on this page; bone is a significant repository for lead in ruminants, and long-simmering of bones may release Pb into the broth matrix at higher concentrations than seen in muscle. The cooking oil added during pan-frying (a TDS preparation method) does not contribute metals.

## Ingredient-derivative risk

Lamb chop is consumed primarily as an intact cut; its use as an ingredient in composite products is limited relative to ground or minced lamb. Ground lamb would follow a profile similar to ground beef (see [[ingredients/ground-beef]]) in terms of the surface-to-interior homogenization during grinding. Lamb liver and lamb kidney, which are not this page, concentrate Cd substantially and represent a distinct risk profile; consumers and product developers incorporating offal should consult those ingredient pages when they exist in the wiki.

## Mitigation options

### Sourcing levers

Sourcing lamb from pasture systems documented to have low soil Cd provides the primary lever. Australian and New Zealand certification schemes for pastoral lamb provide provenance documentation that implicitly captures pasture quality. Domestic US lamb from regions without mining or industrial Cd soil loading is also generally low-risk.

### Agronomic levers

Pasture lime applications to maintain soil pH and reduce Cd bioavailability are the standard agronomic tool in pastoral sheep systems. This lever is at the producer level; specification requirements from processors or brands provide the incentive structure.

### Processing levers

Deboning reduces the potential for bone-fragment contamination during grinding or preparation. Standard butchering and trimming removes periosteal tissue, which may carry slightly higher surface metal loads than the muscle interior.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the near-BDL results across the TDS distribution, routine lot-level metal testing of lamb chop is unlikely to yield actionable findings under normal production conditions. Origin-level audit provides more cost-effective assurance than per-lot testing for this matrix.

### Packaging and storage levers

Lamb chop is packaged in vacuum pouches or modified-atmosphere trays; Sn migration is not applicable. Storage temperature does not affect metal concentration.

## Regulatory limits that apply

EU Regulation 2023/915 sets maximum levels for Pb in meat (muscle meat of sheep/lamb) at 0.10 mg/kg wet weight and for Cd at 0.050 mg/kg wet weight [[regulations/eu2023-contaminants-maximum-levels]]. The FDA TDS maximum values for Pb (4.4 ppb) and Cd (1 ppb) in pan-cooked lamb chop are well within both limits. No US statutory maximum for Pb or Cd in lamb muscle exists. The EU Cd limit for sheep muscle meat of 0.050 mg/kg (50 ppb) is the operative regulatory cap for EU market access [[regulations/eu-2023-915-cadmium]]. Codex Alimentarius does not set a distinct ML for lamb or sheep muscle as a separate category from other meat [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Lamb chop, pan-cooked with oil (n=27); detectable concentrations for Cd, Pb |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [b81f32c](https://github.com/paleofoundation/heavymetalindex/commit/b81f32c) | 2026-06-01 | codex sprint 2026-06-01 0339: end-of-fire cleanup |
| [8cae8bf](https://github.com/paleofoundation/heavymetalindex/commit/8cae8bf) | 2026-06-01 | codex sprint 2026-05-31 23:45: end-of-fire cleanup |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
<!-- END: hmi-page-history -->
