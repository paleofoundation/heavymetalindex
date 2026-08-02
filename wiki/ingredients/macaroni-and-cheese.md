---
title: "Macaroni and cheese"
type: ingredient
commodity: macaroni-and-cheese
label: "Macaroni and cheese"
aliases: ["Macaroni and cheese, prepared from boxed mix", "macaroni and cheese"]
category: mixed-food
tds_food:
  number: 146
  description: "Macaroni and cheese, prepared from boxed mix"
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
    typical_ppb: [9.7, 12.6]
    p95_ppb: 12.8
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
    typical_ppb: [0, 2.2]
    p95_ppb: 2.5
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

# Macaroni and cheese

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 146, "Macaroni and cheese, prepared from boxed mix." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Macaroni and cheese prepared from a boxed mix is a composite food product with two primary components: a refined-wheat pasta (macaroni) and a processed cheese sauce powder. The primary metal pathway in this product is cadmium, which enters through the semolina or refined wheat flour used to make the pasta. Wheat accumulates Cd through root uptake from soil, with durum wheat (used for semolina and pasta) showing somewhat different Cd accumulation characteristics from bread wheat. The milling of durum wheat into semolina removes much of the bran and germ (which carry higher Cd than the endosperm), but refined pasta flour retains detectable Cd because Cd distributes throughout the grain. The cheese powder component contributes very little to metal load, as dairy products are generally among the lowest-metal food matrices and cheese powders, which are derived from pasteurized milk with added emulsifiers, do not concentrate metals from the dairy fraction. The FDA FY2018-FY2020 TDS data for macaroni and cheese from a boxed mix found Cd ranging from 9.4 to 13 ppb and U with a maximum of 2.8 ppb, with other analytes at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020]], consistent with the wheat pathway being the dominant contributor.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 9.7–12.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–2.2 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Macaroni and cheese, prepared from boxed mix" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 9.4 | 13 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 2.8 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured macaroni and cheese prepared from a boxed mix (TDS Food 146) with n=3 composites and found Cd in the narrow range of 9.4 to 13 ppb (median 11 ppb), U with a maximum of 2.8 ppb, and Pb, tAs, tHg, Ni, and Cr at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. The narrow Cd range across the three composites suggests consistency across the US retail market for this product type, which is dominated by a small number of large-volume brands using similar formulations. The wheat sourcing geography for US pasta manufacturers draws on durum wheat grown primarily in the Northern Plains (Montana, North Dakota); the Cd content of Northern Plains durum wheat is generally lower than durum grown in some European regions with higher soil Cd. European macaroni and cheese products, where they exist, would reflect the Cd characteristics of European durum wheat and may differ from US market values. The cheese powder component does not materially vary by geographic origin with respect to metals.

## Processing effects

Boiling macaroni in water during preparation causes some Cd to leach from the pasta into the cooking water; discarding the cooking water and draining before adding the cheese sauce provides a modest reduction in Cd content relative to cooking in a minimal water volume where all the liquid is absorbed. Boxed macaroni and cheese preparation typically involves draining the pasta cooking water, which means some Cd leaves with the discarded water. The magnitude of this leaching effect for durum pasta is documented in the general pasta literature but specific values for the US boxed macaroni market are not in the current corpus; estimates from Italian pasta studies suggest 10 to 20 percent Cd reduction through the drain-cooking method. The cheese sauce preparation step (mixing the powder with butter and milk) does not alter metal concentrations.

## Ingredient-derivative risk

Macaroni and cheese as a finished retail product is itself a composite; its primary upstream ingredient with metal significance is the pasta component. Pasta flour (semolina) used in products with higher durum wheat Cd, whether from high-Cd growing regions or from less-refined milling, would produce finished macaroni with higher Cd. Whole-wheat pasta versions of macaroni and cheese products would carry higher Cd than refined-semolina versions because bran and germ Cd content is higher than endosperm. Mac and cheese products using gluten-free pasta substitutes (rice-based, chickpea-based, or lentil-based pasta) would have substantially different metal profiles; rice-based pasta would carry the arsenic and Cd signature of rice, while legume-based pasta would carry the Ni and Cd signature of pulses.

## Mitigation options

### Sourcing levers

Sourcing durum wheat from low-Cd growing regions (US Northern Plains) provides the primary lever for the pasta component. Supplier specifications requiring semolina Cd documentation and lot-level verification provide a traceable quality basis for formulations where Cd minimization is a product objective.

### Agronomic levers

Soil pH management and phosphate fertilizer purity specifications at the wheat farm level reduce Cd in durum wheat; these are producer-level levers accessed by ingredient buyers through supply-chain audit and specification requirements.

### Processing levers

Use of drain-cooking methods (cooking pasta in ample water then discarding cooking water) during consumer preparation reduces Cd intake by approximately 10 to 20 percent relative to absorption-cooking in minimum water. For a manufacturer making pre-cooked or retorted macaroni and cheese, cooking-and-draining the pasta before combining with cheese sauce achieves this reduction at the manufacturing stage.

### Formulation levers

Switching from refined semolina pasta to whole-wheat pasta in the formulation increases Cd from the pasta component. Switching to gluten-free alternatives introduces different metal profiles (rice arsenic, legume Ni or Cd) that may not represent a net improvement. Increasing the relative proportion of cheese sauce component versus pasta dilutes the pasta-sourced Cd contribution.

### Testing and QC levers

Given the consistently detectable Cd (9.4 to 13 ppb) in the TDS data, lot-level Cd testing of incoming semolina or pasta is a proportionate quality assurance measure. Testing of the finished product provides direct verification but is redundant if ingredient-level testing is systematic.

### Packaging and storage levers

Boxed macaroni and cheese is packaged in cardboard with an inner polyethylene-lined cheese-powder packet; the Sn migration pathway is not applicable. Canned prepared macaroni and cheese products (a different format not characterized by this TDS food number) would require lacquer-lined can consideration for the Sn pathway.

## Regulatory limits that apply

No specific EU maximum level for Cd in pasta or macaroni and cheese as a product category exists in the current regulatory framework; the applicable EU limit would be for unprocessed cereals used in production. EU Regulation 2023/915 sets Cd limits for cereals at 0.10 mg/kg for durum wheat and pasta products, reflecting the pasta supply chain specifically [[regulations/eu-2023-915-cadmium]]. The Pb limit for cereals and cereal products under the EU framework is 0.20 mg/kg [[regulations/eu2023-contaminants-maximum-levels]]. The US does not set statutory maximum levels for Pb or Cd in pasta or macaroni and cheese products. Codex Alimentarius addresses Cd in cereals and products but does not have a distinct ML for pasta [[regulations/codex-cadmium-mls]].

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Macaroni and cheese, prepared from boxed mix (n=3); detectable concentrations for Cd, U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
