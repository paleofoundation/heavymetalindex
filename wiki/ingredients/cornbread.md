---
title: "Cornbread"
type: ingredient
commodity: cornbread
label: "Cornbread"
aliases: ["Cornbread, homemade", "cornbread"]
category: grain-product
tds_food:
  number: 60
  description: "Cornbread, homemade"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [1.1, 12.3]
    p95_ppb: 13.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [9.3, 10.8]
    p95_ppb: 10.9
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
    typical_ppb: [3.0, 3.4]
    p95_ppb: 3.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [2.8, 3.9]
    p95_ppb: 4.1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [146, 178]
    p95_ppb: 179
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
    typical_ppb: [200, 200]
    p95_ppb: 200
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
    typical_ppb: [2.2, 2.6]
    p95_ppb: 2.6
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
sources: 2
---

# Cornbread

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 60, "Cornbread, homemade." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cornbread is a composite baked product whose primary ingredients are cornmeal, fat (typically butter or oil), eggs, milk, and chemical leavening. Its heavy metal profile is therefore a blend of contributions from each of these inputs. Cornmeal, the dominant ingredient by weight, carries the cadmium and trace metal burden of the corn grain after milling, with the exact level depending on whether the cornmeal is whole-grain (higher Cd, from the bran and germ fraction) or degerminated (lower Cd). Butter and eggs, the other substantive contributors, are low-risk matrices for most heavy metals under normal production conditions. Chemical leavening agents, particularly baking powder, can contribute trace amounts of aluminum in products that use aluminum-based leavening, though baking soda (sodium bicarbonate) does not carry this concern.

The FDA TDS FY2018-FY2020 data for homemade cornbread (n=3, TDS Food 60) shows Pb at a maximum of 14 ppb, Cd at 9.2 to 11 ppb, Ni at 140 to 180 ppb, Cr at 200 ppb across all three samples, and tAs at 3 to 3.5 ppb, with U at 2.2 to 2.7 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. The uniform Cr value of 200 ppb and the elevated Ni of 140 to 180 ppb across all three composites are notable: at this level of consistency across three composites from the TDS program, equipment contact during the homemade preparation process, or a systematic feature of the cornmeal substrate, may be contributing chromium and nickel to the matrix.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 1.1–12.3 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 9.3–10.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 3–3.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 2.8–3.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 146–178 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 200 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 2.2–2.6 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cornbread, homemade" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 9.2 | 11 | in profile |
| Cr | 3 | 200 | 200 | in profile |
| Ni | 3 | 140 | 180 | in profile |
| Pb | 3 | 0 | 14 | in profile |
| U | 3 | 2.2 | 2.7 | in profile |
| tAs | 3 | 3 | 3.5 | in profile |
| tHg | 3 | 2.8 | 4.2 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset for homemade cornbread is the only structured occurrence source integrated into this corpus (n=3 composites) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The n=3 size is too small to characterize the distribution reliably, but all three composites show uniformly high Cr (200 ppb at all three samples), high Ni (140, 170, 180 ppb), and modest Cd (9.2 to 11 ppb) and Pb (0 to 14 ppb). The consistency of the Cr value across all three composites is analytically unusual; it may reflect a reporting-limit artifact, equipment contact during sample preparation, or a genuine feature of the homemade cornbread matrix.

No peer-reviewed survey of heavy metals specifically in cornbread or corn-based baked products is currently integrated into this corpus. Commercial cornbread products may differ from homemade formulations in their cornmeal grade, fat source, and leavening type, all of which could affect the metal profile.

## Processing effects

Baking cornbread at high temperatures does not volatilize or remove heavy metals from the matrix; metals in the cornmeal, eggs, and other inputs are fixed in the baked structure. The use of aluminum-containing baking powder (sodium aluminum sulfate-based leaveners) contributes aluminum to the finished product; this is why aluminum is a data gap in this page's profile (it was not measured in the TDS dataset for this food item) but is a known concern for baking-powder-leavened products. Aluminum-free baking powder is commercially available and eliminates this source.

The fat component of cornbread (butter or oil) does not substantially contribute heavy metals under normal production conditions. Milk or buttermilk, when used, is a low-risk ingredient for heavy metals. Eggs contribute negligibly to the metal burden of the finished product, consistent with the near-zero TDS values for hard-boiled eggs [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Ingredient-derivative risk

Cornbread is a finished baked good rather than an industrial ingredient that feeds into further processing, so derivative risk in the traditional sense does not apply. The cornmeal component is the highest-risk ingredient within the recipe; substitution of whole-grain cornmeal with degerminated cornmeal would reduce the cadmium contribution from the grain fraction. Self-rising cornmeal mixes that include pre-blended aluminum-containing leaveners present a higher aluminum risk than plain cornmeal prepared with aluminum-free leavening.

## Mitigation options

### Sourcing levers

Selecting degerminated cornmeal from origins with low background soil cadmium reduces the Cd contribution from the primary ingredient. For commercial cornbread producers, supplier specification for cornmeal Cd content and origin provenance is the relevant lever.

### Agronomic levers

_Agronomic levers apply at the corn grain level; see [[ingredients/corn]] for the relevant discussion. No cornbread-specific agronomic data is in the current corpus._

### Processing levers

Using aluminum-free leavening (sodium bicarbonate rather than aluminum-containing baking powder) eliminates the baking-powder aluminum source. Using degerminated cornmeal reduces cadmium relative to whole-grain formulations.

### Formulation levers

_No quantified data on formulation substitution effects on cornbread metal content beyond the cornmeal-grade effect is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

The elevated Cr and Ni values in the TDS homemade cornbread composites (200 ppb Cr, 140 to 180 ppb Ni across n=3 samples) [[sources/fda2022-tds-elements-fy2018-fy2020]] warrant confirmation with larger sample sizes and method scrutiny (to rule out equipment-contact artifacts). Commercial cornbread product manufacturers should include Cr and Ni in any finished-product testing program given these TDS signals, along with Cd and Pb as standard analytes.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in cornbread is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

No specific US federal maximum level for lead or cadmium in baked corn products has been finalized as of 2026. Under the European Union's [[regulations/eu2023-contaminants-maximum-levels]], the applicable ML for cereal-based baked goods depends on the product classification: general cereal products are subject to a Cd limit of 0.10 mg/kg (100 ppb) and Pb limit of 0.20 mg/kg (200 ppb) wet weight. If a cornbread product is specifically formulated and marketed for infants and young children, the stricter infant food cadmium limit of 0.040 mg/kg (40 ppb) would apply. The TDS Cd maximum of 11 ppb and Pb maximum of 14 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]] are within the general EU limits but the Cd value would approach the infant-food limit in higher-Cd scenarios. Codex Alimentarius general cereal limits (0.10 mg/kg Cd, 0.20 mg/kg Pb) apply to cornbread-category products as processed cereal-based goods.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Cornbread, homemade (n=3) |
| 2 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | US Al occurrence in Synthesis of peer-reviewed human and animal toxicology, exposure, and environmental-fate data; no original sampling |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
