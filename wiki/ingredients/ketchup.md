---
title: "Ketchup"
type: ingredient
commodity: ketchup
label: "Ketchup"
aliases: ["Ketchup, tomato", "ketchup"]
category: condiment
tds_food:
  number: 173
  description: "Ketchup, tomato"
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
    typical_ppb: [20, 21.6]
    p95_ppb: 21.8
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
    typical_ppb: [100.4, 126]
    p95_ppb: 128
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
sources: 5
---

# Ketchup

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 173, "Ketchup, tomato." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Ketchup is a tomato-based condiment produced by concentrating cooked tomato paste with vinegar, sugar, salt, and spices. Two distinct metal pathways converge in ketchup. The first is the tomato plant pathway: tomatoes grown in soil with elevated Cd or Pb accumulate those metals through root uptake (Cd) and atmospheric deposition on fruit surfaces (Pb), though tomato fruit is generally among the lower-metal matrices in the vegetable category. The second and historically more significant pathway is tin migration from can interiors: ketchup is acidic due to both the organic acids in tomato and added vinegar, and that acidity drives dissolution of tin from unlined tin-plate can interiors into the product. The EU limits Sn in canned solid foods at 200 mg/kg, reflecting decades of evidence that tin dissolution from acidic canned products is a measurable dietary exposure source. Modern lacquer-lined cans greatly reduce Sn migration. The tomato concentration effect is also relevant: ketchup contains roughly five times the tomato solids concentration of fresh tomato, meaning that metals present in the tomato base are five times more concentrated in the finished condiment than in fresh tomato on a volume basis. Cadmium in the FDA TDS data for ketchup ranged from 20 to 22 ppb, and Ni from 98 to 130 ppb, reflecting the tomato and soil pathways [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 20–21.6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 100.4–126 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Ketchup, tomato" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 20 | 22 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 98 | 130 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured ketchup (TDS Food 173, "Ketchup, tomato") with n=3 composites and found Cd consistently detected at 20 to 22 ppb, Ni at 98 to 130 ppb, and Pb, tAs, tHg, Cr, and U at or below the reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020|1]]. The small TDS sample count limits distributional inference. Nickel concentrations in the 100 to 130 ppb range reflect the well-characterized affinity of tomatoes for Ni from soil. The tomato origin geography (domestic US versus imported) affects Cd and Ni to the extent that the source soils differ; commercial ketchup in the US primarily draws on California-grown tomatoes, which are well-characterized. European ketchup products would be subject to different tomato source geographies and can-lining standards. The Sn pathway for unlacquered cans is not captured in the FDA TDS for this particular commodity because the sample may represent glass-bottled or lacquer-lined products; Sn absence from the TDS distribution does not preclude Sn migration in unlacquered canned ketchup.

## Processing effects

Tomato concentration (cooking down tomato juice or puree to paste and then to ketchup) concentrates all non-volatile constituents, including metals, by a factor of approximately five relative to fresh tomato. Acidification with vinegar lowers pH to approximately 3.5 to 4.0, which enhances Sn dissolution from unlined tin-plate can surfaces. The EU Sn limit for canned solid food products of 200 mg/kg reflects the reality that unlacquered canned tomato products (including ketchup in some markets) have historically shown Sn concentrations approaching or exceeding this level. Lacquer-lined cans reduce Sn migration by roughly an order of magnitude, bringing levels from potentially 200 mg/kg range down to single-digit or tens-of-mg/kg range. Pasteurization of the finished ketchup does not affect metal concentrations. Sugar addition dilutes the overall metal concentration marginally but does not alter the chemistry.

## Ingredient-derivative risk

Ketchup is itself a finished condiment rather than an intermediate; it functions as a concentrated tomato derivative relative to fresh tomato. Its use in composite products (sauces, pizza toppings, marinades, processed meat products) further dilutes the metal load proportionally. Tomato paste, from which ketchup is derived, carries a similar metal profile but at higher concentration per unit volume than the finished ketchup, because ketchup adds water, vinegar, and sugar. Tomato paste is characterized separately and is the upstream ingredient most relevant to cross-commodity comparison.

## Mitigation options

### Sourcing levers

Sourcing tomato paste and puree from regions with documented low-Cd and low-Ni soil quality provides the primary ingredient-level lever. California tomato growing regions are generally well-documented with respect to soil quality under USDA and state agriculture frameworks. Supply specifications requiring tomato paste Cd verification provide a traceability anchor.

### Agronomic levers

pH management of tomato-growing soils reduces Cd bioavailability; phosphate fertilizer purity specifications reduce ongoing Cd load accumulation. These levers are at the tomato farmer level rather than the ketchup manufacturer level.

### Processing levers

Use of lacquer-lined cans rather than bare tin-plate cans is the single most impactful processing lever for Sn in ketchup. Lacquer lining reduces Sn migration from the 100 to 200 mg/kg range (observed with unlacquered cans and acidic tomato products) to values typically well below 50 mg/kg. Shifting to glass or plastic packaging eliminates the Sn pathway entirely.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the consistently detectable Cd (20 to 22 ppb) and Ni (98 to 130 ppb) in the TDS data [[sources/fda2022-tds-elements-fy2018-fy2020]], lot-level testing for these analytes is warranted. For products packaged in tin-lined cans, Sn monitoring is the priority test, with the EU 200 mg/kg limit as the compliance reference. For glass or lacquer-lined products, Sn monitoring frequency can be reduced substantially.

### Packaging and storage levers

The choice of packaging material is the most consequential lever for the Sn pathway. Glass packaging eliminates Sn migration entirely. Lacquer-lined cans reduce Sn migration to an order-of-magnitude lower than unlined tin-plate. Plastic packaging (squeeze bottles) is also free of the Sn migration concern. Storage temperature does not substantially affect metal migration rates within the normal shelf-life temperature range.

## Regulatory limits that apply

The EU sets a maximum level for Sn in canned solid food products of 200 mg/kg [[regulations/eu2023-contaminants-maximum-levels]]; this limit applies to ketchup when packaged in tin-lined cans. No specific EU maximum for Cd or Pb in ketchup as a distinct product category exists; the tomato-product framework and general condiment provisions would apply by analogy. No US statutory maximum for Pb, Cd, or Sn in ketchup is set in current FDA regulations. Codex Alimentarius sets Sn limits for canned products that broadly align with the EU framework [[regulations/codex-cadmium-mls]].

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Ketchup, tomato (n=3); detectable concentrations for Cd, Ni |
| 2 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 3 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 4 | [[sources/vaishali2020-tomato-ketchup-delhi-ncr-pb-cd\|Vaishali et al. 2020]]. *A Comparative Study on Presence of Heavy Metals Lead and Cadmium in Tomato Ketchups used by Street Vendors of Delhi NCR*, Journal of Advanced Research in Medical Science & Technology | 2020 | Peer-reviewed | IN Pb, Cd occurrence in Tomato ketchup from street vendors in Delhi, Noida, Gurugram, and Faridabad (3 samples per locale) (n=12) |
| 5 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | HK iAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [8c45a300b](https://github.com/paleofoundation/heavymetalindex/commit/8c45a300b) | 2026-05-31 | major | 1 source added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
