---
title: "Canned fruit cocktail"
type: ingredient
commodity: canned-fruit-cocktail
label: "Canned fruit cocktail"
aliases: ["Fruit cocktail, canned in light syrup, solids and liquids", "fruit cocktail"]
category: fruit-product
tds_food:
  number: 87
  description: "Fruit cocktail, canned in light syrup, solids and liquids"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [1, 5.4]
    p95_ppb: 5.5
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
    typical_ppb: [60.6, 67.8]
    p95_ppb: 68.4
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
    typical_ppb: [11, 63.8]
    p95_ppb: 64.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [3000, 60000]
    p95_ppb: 250000
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0.3, 1.4]
    p95_ppb: 1.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 6
---

# Canned fruit cocktail

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 87, "Fruit cocktail, canned in light syrup, solids and liquids." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Canned fruit cocktail is a mixed processed fruit product (typically peach, pear, grape, cherry, and pineapple in syrup) whose heavy metal risk derives primarily from tin migration from the tinplate can rather than from intrinsic contamination of the fruit ingredients. Tree fruits and small fruits that compose fruit cocktail are generally among the lowest-accumulating food categories for Pb and Cd because their edible flesh is protected from soil contact by skin and peel, and because fruit tissues tend not to concentrate metals at the levels characteristic of root or leafy vegetables. The syrup medium (sugar solution, mildly acidic from fruit organic acids) maintains direct contact with the can interior throughout shelf life, and this acidic aqueous environment drives electrochemical corrosion of unlacquered tin coatings. Inorganic tin ions released from the can wall migrate into the syrup and are absorbed by the solid fruit components over time. This mechanism has been documented for decades in the canned-food literature [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]], [[sources/schafer1984-tin-toxic-heavy-metal-review|Schafer et al. 1984]], [[sources/benoy1971-tin-toxicity-canned-fruit-juices|Benoy et al. 1971]]. Lead, cadmium, and arsenic in the fruit fractions themselves contribute modestly and represent background soil-derived accumulation in the growing region.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1–5.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 60.6–67.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 11–63.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | n=4 | 3000–60000 | medium | [[sources/tarigan2016-factors-tin-released-canned-beverages\|1]], [[sources/atsdr2005-tin-toxicological-profile\|2]], [[sources/schafer1984-tin-toxic-heavy-metal-review\|3]] |
| U | n=2 | 0.3–1.4 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Fruit cocktail, canned in light syrup, solids and liquids" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 3 | 0 | 11 | 55 | 63.8 | 64.9 | 66 | in profile |
| Ni | 3 | 60 | 60.6 | 63 | 67.8 | 68.4 | 69 | in profile |
| Pb | 3 | 0 | 1 | 5 | 5.4 | 5.45 | 5.5 | in profile |
| U | 3 | 0 | 0.26 | 1.3 | 1.38 | 1.39 | 1.4 | in profile |
| tAs | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Pb in canned fruit cocktail in light syrup (solids and liquids combined) at a median of 5.0 ppb (range 0 to 5.5 ppb, n=3) [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 60 to 69 ppb (median 63 ppb), and Cr ranged from 0 to 66 ppb (median 55 ppb). Cd, tAs, and tHg were at or below the reporting limit. The elevated Ni and Cr detections in this product are notable and may reflect trace contamination from can interior alloy components or fruit variety variation; additional independent sources are needed to confirm the pattern. Tarigan et al. 2016 measured Sn in canned fruit juice and beverages in Indonesia, finding that product pH and storage time were the primary drivers of Sn release [[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan et al. 2016]]; these findings are directly applicable to canned fruit cocktail given similar acidity and can format. Historic incident data from Benoy et al. 1971 documented Sn concentrations well above 200 mg/kg in improperly handled unlacquered canned fruit products during a 1967 Kuwait distribution incident [[sources/benoy1971-tin-toxicity-canned-fruit-juices|Benoy et al. 1971]].

## Processing effects

The thermal sterilization (retorting) step in canning initiates the tin-release mechanism by heating the acidic fruit-syrup matrix in contact with the can wall; Sn release increases during and after retorting. Prolonged storage at ambient temperatures allows continued slow corrosion. Once opened, refrigeration slows further Sn release but does not reverse what has already migrated. The combined-solids-and-liquids TDS measurement includes Sn that has migrated into both the syrup and the solid fruit components; a drained-solids-only measurement would show lower total Sn and Ni, though the syrup itself carries the bulk of the migrated Sn. No metal-reducing transformation occurs during thermal processing; the concern is migration from packaging rather than intrinsic commodity contamination.

## Ingredient-derivative risk

Canned fruit cocktail is consumed directly or incorporated into desserts, yogurts, and baked goods. Its metal contribution to final products is dominated by whatever Sn (from the can) and Ni/Pb (from the fruit) are present in the portion used. Products that incorporate syrup as well as solids carry more migrated Sn than those using only drained solids. The fruit fractions themselves carry a low intrinsic metal load, so derivative applications using canned fruit cocktail as one ingredient among many dilute the effect proportionally.

## Mitigation options

### Sourcing levers

Specifying lacquered-can sourcing is the primary lever for reducing Sn in this commodity. Can manufacturer quality specifications for coating integrity and composition (including absence of Pb solder, which has been phased out in most markets but may persist in legacy supply chains) provide additional protection.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._ Fruit ingredients in cocktail are low metal accumulators by nature; agronomic interventions have marginal impact relative to the can-sourcing lever.

### Processing levers

Reducing retort temperature or time is not available as a safety-lever because retorting is required for shelf-stable sterilization. Lacquered cans are the processing-compatible mitigation. For consumers or food service operators: draining and rinsing the solid fruit before use removes syrup-phase Sn; this is the highest-impact simple intervention for reducing Sn exposure from canned fruit products.

### Formulation levers

Substituting glass-jarred fruit for tinplate-canned fruit cocktail eliminates the Sn migration pathway entirely. Refrigerated fruit products (not shelf-stable) packaged in plastic or glass also avoid Sn migration while maintaining product quality.

### Testing and QC levers

Sn measurement by ICP-MS in finished product from lots near end of shelf life provides the most directly relevant QC data. Monitoring Sn across can batches and storage durations establishes lot-specific Sn curves, enabling tighter shelf-life management. For Pb, Cd, and As in the fruit fractions, the low baseline makes testing a lower priority; lot-acceptance specifications from fruit suppliers with documented growing-region metal surveys are the appropriate upstream control.

### Packaging and storage levers

Lacquered ("enamel-lined") tinplate cans are the most important packaging specification for Sn reduction. Storage at cool temperatures (below 20°C) and under controlled humidity (to prevent external can corrosion affecting seal integrity) reduces the rate of Sn release. Implementing a strict shelf-life ceiling and FIFO inventory rotation limits cumulative exposure from aged stock. Products that have been stored above 25°C for extended periods should be tested before use in formulations targeting sensitive populations [[sources/atsdr2005-tin-toxicological-profile|Harper et al. 2005]].

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Sn in canned solid foods of 200 mg/kg (200,000 ppb) wet weight. The Codex Alimentarius general standard for contaminants sets a Sn limit of 250 mg/kg for canned foods (solid content). For Pb in fruit, the EU limit is 0.10 mg/kg (100 ppb) wet weight. For Cd in fruit, the EU limit is 0.050 mg/kg (50 ppb). No FDA-specific action level for Sn in canned fruit cocktail is currently operative; FDA Closer to Zero [[regulations/fda-closer-to-zero]] does not address Sn.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in canned fruit cocktail in light syrup (TDS Food 87; n=3 per analyte) |
| 2 | [[sources/tarigan2016-factors-tin-released-canned-beverages\|Tarigan et al. 2016]]. *Factors are Affecting Tin Released in Canned Beverages*, International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333 | 2016 | Peer-reviewed | Measured Sn in canned fruit juice and other canned beverages (n=27, Indonesia); pH and storage-time drivers of tin release; regulatory context for Sn in canned fruits |
| 3 | [[sources/trandafir2012-tin-canned-foods-icp-ms\|Trandafir et al. 2012]]. *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*, Polish Journal of Environmental Studies | 2012 | Peer-reviewed | RO/EU Sn occurrence in Canned fruit, vegetables, and fish purchased at local markets in Romania; 3 cans per product batch, each analyzed... (n=13) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|Harper et al. 2005]]. *Toxicological Profile for Tin and Tin Compounds*, U.S. Department of Health and Human Services, ATSDR | 2005 | Government report | ATSDR Sn toxicological profile covering dietary inorganic tin from canned foods including canned fruit; MRL derivation and species (inorganic vs organotin) distinction |
| 5 | [[sources/schafer1984-tin-toxic-heavy-metal-review\|Schafer et al. 1984]]. *Tin — A Toxic Heavy Metal? A Review of the Literature*, Regulatory Toxicology and Pharmacology, Vol. 4, pp. 57-69 | 1984 | Peer-reviewed | Literature review on dietary Sn toxicity from canned foods; frames the relative low concern of inorganic tin vs organotins and includes canned fruit data |
| 6 | [[sources/benoy1971-tin-toxicity-canned-fruit-juices\|Benoy et al. 1971]]. *The Toxicity of Tin in Canned Fruit Juices and Solid Foods*, Food and Cosmetics Toxicology, Vol. 9, Issue 5, pp. 645-656 | 1971 | Peer-reviewed | Toxicity study using high-Sn outbreak canned fruit juices; establishes the acute GI irritation threshold for inorganic Sn and reports occurrence data from a 1967 Kuwait canning incident |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
<!-- END: hmi-page-history -->
