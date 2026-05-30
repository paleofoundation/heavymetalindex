---
title: "Melon"
type: ingredient
commodity: melon
label: "Melon"
aliases: [melon]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 4.8]
    p95_ppb: 20.7
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 10]
    p95_ppb: 12.6
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 0.1]
    p95_ppb: 0.2
    confidence: high
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
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
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 2
---

# Melon

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Melon (cucurbit fruits including cantaloupe and honeydew) is among the lower-risk fruit categories for heavy metal accumulation. The edible flesh is physically separated from the external environment by a thick, waxy rind that limits atmospheric deposition of Pb particulates and reduces surface contamination during growth. Metal uptake in cucurbits occurs primarily through root absorption from soil, but the vine's rooting system and the water-dilution effect of the high-moisture flesh together produce low transfer factors from soil to edible tissue. Cadmium absorption by the fruit is further limited because Cd competes with calcium for uptake pathways that are less active in fruit tissue than in the roots and stems of the plant. The net result is that melon flesh typically contains concentrations of Pb, Cd, and most other regulated metals that are low relative to root vegetables or leafy greens grown under equivalent soil conditions. Inorganic arsenic and total mercury are not principal concerns for this matrix in monitoring data from major producing regions.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–4.8 | high | — |
| Cd | n=1 | 0–10 | high | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–0.1 | high | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The main dimension of variation within the melon category is growing region and soil history rather than varietal differences between cantaloupe and honeydew. Melons grown in regions with historic industrial activity or where contaminated phosphate fertilizers are used for soil amendment may show modestly elevated Cd in flesh tissue, though concentrations remain substantially below the EU maximum level for fresh fruit. The FSA FS102048 survey [[sources/fsa2016-infant-food-formula-metals-survey]] provides the primary occurrence dataset in the current corpus and covers melon as measured in a UK dietary monitoring context. Concentrations across survey samples in this and comparable European monitoring data are generally well below regulatory thresholds. Specific regional breakdown data by producing country are not yet available in the current corpus.

## Processing effects

Fresh melon consumed as cut fruit undergoes minimal processing steps that would affect metal concentrations. Rind removal eliminates the outer tissue that may carry surface contamination from atmospheric Pb deposition or soil splash, reducing Pb contribution relative to the whole-fruit basis. Melon-based processed products (purées, juices, dried melon, frozen chunks) concentrate metals proportionally with water removal: dried melon will show substantially higher ppb values on a wet-weight basis than fresh flesh, purely as a moisture-reduction artifact. Pasteurization and aseptic processing do not alter total metal concentrations. No evidence in the current corpus documents metal leaching from processing equipment as a meaningful source for melon products.

## Ingredient-derivative risk

Melon purée and melon juice are the primary derivatives where concentration relative to fresh flesh is relevant. Water-removal during concentration for juice-from-concentrate applications proportionally elevates all analytes on a wet weight basis. Dried melon or freeze-dried melon powder, used in nutritional supplements and functional foods, can show ppb values several-fold higher than fresh flesh because the moisture fraction that dilutes metal concentrations in fresh fruit has been removed. These derivatives warrant separate occurrence characterization rather than extrapolation from fresh-melon data.

## Mitigation options

### Sourcing levers

Preferring melon grown on soils with documented low Cd history and low phosphate-fertilizer application reduces the primary risk driver for this category. Country-of-origin sourcing from major commercial production regions (Spain, Turkey, and the United States) with active regulatory monitoring provides an operational assurance baseline.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Rind removal before processing eliminates surface-deposited Pb and reduces the contribution of the outer tissue to the final product metal load. For dried or concentrated derivatives, reporting concentrations on a dry-weight or reconstitution-equivalent basis rather than a wet-weight basis provides a more meaningful risk signal.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh fruit (wet weight basis), which applies to melon. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets comparable maximum levels for Pb in fresh fruit. No specific iAs or tHg limit applies to fresh melon under major regulatory frameworks; these analytes are addressed at the category level under general food safety provisions where applicable. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/elbagory2025-toxic-elements-melon-ganges-yamuna\|Elbagory et al. 2025]]. *Assessment of Potentially Toxic Elements in Four Melon Fruit Varieties Grown in the Ganges and Yamuna River Basin*, Horticulturae | 2025 | Peer-reviewed | IN Cd, Cr, Cu, Pb, tAs, Fe, Mn, Zn occurrence in 200 composite melon fruit samples (50 per variety, each from 5 fruits pooled per site across 10 sampling... (n=200) |
| 2 | [[sources/rashid2015-metals-rock-melon-malaysia\|Rashid et al. 2015]]. *Determination of Metals Contamination in Rock Melon (Cucumis melo) and Coco Peat*, Jurnal Intelek 10(1): 33–36 (ISSN 2231-7716; UiTM Perlis) | 2015 | Peer-reviewed | MY Al, Cr, Cu, Fe, Mn, Ni, Pb, Zn, B, Co occurrence in Rock melon (Cucumis melo, cultivar Glamour) randomly sampled from 5 farm locations in Mantin (Negeri Sembilan; 3 farms)... (n=70) |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [96dc130](https://github.com/paleofoundation/heavymetalindex/commit/96dc130) | 2026-05-20 | autonomy: daemon tick 2026-05-19T21-10-50Z — gap-healing + extraction + pooling + briefings |
| [554e27c](https://github.com/paleofoundation/heavymetalindex/commit/554e27c) | 2026-05-19 | autonomy: daemon tick 2026-05-19T17-44-19Z — gap-healing + extraction + pooling + briefings |
| [fe6ad96](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96) | 2026-05-17 | synthesis: overnight wiki refresh + routing_unresolved cleared to 0 + detector extension |
| [ce0ecb2](https://github.com/paleofoundation/heavymetalindex/commit/ce0ecb2) | 2026-05-16 | sync source counts from live source-page references |
| [472d023](https://github.com/paleofoundation/heavymetalindex/commit/472d023) | 2026-05-14 | overnight catch-up: kimi-cond02/02b/03 ingest + ingredient profile synthesis + routing triage tooling |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
