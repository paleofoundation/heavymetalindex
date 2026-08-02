---
title: "Corn/hominy grits"
type: ingredient
commodity: corn-grits
label: "Corn/hominy grits"
aliases: ["Corn/hominy grits, enriched, cooked", "hominy grits", "corn grits"]
category: grain
tds_food:
  number: 53
  description: "Corn/hominy grits, enriched, cooked"
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
sources: 1
---

# Corn/hominy grits

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 53, "Corn/hominy grits, enriched, cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Corn grits (also known as hominy grits) are produced from dried, coarsely ground corn that has typically been alkali-treated through nixtamalization or at minimum degerminated. The grinding process removes the pericarp and often the germ, leaving the starchy endosperm as the dominant fraction. Because cadmium in corn grain concentrates in the bran and germ rather than the endosperm, degerminated grits carry lower cadmium than whole-grain corn products. The FDA TDS FY2018-FY2020 data for enriched cooked corn grits (n=3, TDS Food 53) shows all analytes at zero across all samples [[sources/fda2022-tds-elements-fy2018-fy2020]], which is consistent with effective cadmium removal during degermination and with corn's generally low arsenic and lead burden compared with rice or leafy vegetables.

The enrichment step (addition of B vitamins and iron) that is standard for enriched grits does not substantially add heavy metals to the matrix, as food-grade mineral premixes are regulated for purity. Nixtamalization, the traditional alkali treatment with slaked lime used to make hominy, further affects the mineral profile of the corn grain through calcium exchange and can reduce the bioavailability of some metals, though the effect on cadmium and lead is incompletely characterized in the current corpus.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
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

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Corn/hominy grits, enriched, cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 0 | 0 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 0 | 0 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset for enriched cooked corn grits (n=3 composites) reports all measured analytes at zero across Cd, Cr, Ni, Pb, U, tAs, and tHg [[sources/fda2022-tds-elements-fy2018-fy2020]]. This consistent below-detection result across all seven analytes is notable and distinguishes corn grits from corn flakes (which show detectable Cr and Ni) and from whole-grain corn products. The result is consistent with effective removal of the metal-bearing bran and germ fractions during degermination, though the n=3 sample count is too small to characterize the full distribution or to rule out elevated samples at higher percentiles.

No independent peer-reviewed survey of heavy metals specifically in corn grits or hominy grits is currently integrated into this corpus. The contrast between the all-zero grits TDS result and the detectable Ni in the corn TDS dataset (max 160 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]] suggests that processing does substantially reduce the nickel burden relative to less-processed corn, though the small TDS sample size precludes a definitive conclusion.

## Processing effects

Degermination, the removal of the corn germ during milling, is the primary processing step that reduces cadmium and other metals in grits relative to whole-grain corn. Coarse grinding retains a greater proportion of the endosperm and less bran than fine milling. Enrichment with vitamins and iron is a downstream step that does not add heavy metals at levels relevant to this profile.

Nixtamalization (alkali treatment with calcium hydroxide) is used in hominy production and in masa-based products but is variable across commercial grits products. Where nixtamalization is applied, the lime treatment modifies the mineral matrix of the grain: it adds calcium, reduces phytic acid (which can affect metal bioavailability), and may alter the leachability of some trace metals. The effect on Pb and Cd bioavailability specifically is not quantified in the current corpus.

Cooking grits by boiling in water further dilutes the dry-weight metal concentration as water is absorbed into the starchy matrix. TDS values are reported for the cooked, as-consumed form, so they already reflect this dilution.

## Ingredient-derivative risk

Corn grits as a product is itself derived from corn grain with metal-reducing processing applied. Further processing of grits into commercial food products (for example, grits-based porridges, grits used as a thickener, or instant grits products) would not be expected to increase metal concentration relative to the base grits ingredient, since no concentration step is involved. Stone-ground grits that retain more of the bran fraction would be expected to carry higher cadmium than conventionally degerminated grits, analogous to the difference between stone-ground and roller-milled wheat products.

## Mitigation options

### Sourcing levers

Procuring corn grain from origins with low background soil cadmium and verifying that supplier specifications include degermination reduces the likelihood of elevated metal content in finished grits. The all-zero TDS result [[sources/fda2022-tds-elements-fy2018-fy2020]] suggests that US commercial enriched grits already achieve effective metal reduction through standard processing; maintaining degermination as a specification requirement preserves this outcome.

### Agronomic levers

_No quantified data on agronomic interventions specifically for corn metal accumulation as it relates to grits production is in the current corpus; see [[ingredients/corn]] for the general corn agronomic lever discussion._

### Processing levers

Ensuring full degermination and avoiding stone-ground or whole-grain formulations reduces cadmium in the finished product. Nixtamalization, where applicable, may further modify the metal profile, though the direction and magnitude of this effect on Pb and Cd is not yet characterized in the corpus.

### Formulation levers

_No quantified data on formulation substitution effects on corn grits metal content is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the all-zero TDS result for commercial enriched corn grits, routine heavy metal testing is lower priority for this ingredient than for higher-risk commodities. However, the small TDS sample size (n=3) means the upper tail of the distribution is uncharacterized. Periodic cadmium and lead spot-checks at incoming ingredient receipt are reasonable for any manufacturer purchasing large volumes of grits.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in corn grits is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union under [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for cadmium in cereals of 0.10 mg/kg (100 ppb) wet weight and for lead in cereals of 0.20 mg/kg (200 ppb) wet weight. For foods specifically marketed to infants and young children, the EU cadmium limit is 0.040 mg/kg (40 ppb). Codex Alimentarius (CXS 193-1995 and revisions) sets a cereal cadmium maximum of 0.10 mg/kg and a lead maximum of 0.20 mg/kg. All measured analytes in the FDA TDS FY2018-FY2020 corn grits data are at zero, well within these limits [[sources/fda2022-tds-elements-fy2018-fy2020]].

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 1 routed source. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Corn/hominy grits, enriched, cooked (n=3); all analytes reported as zero (BDL) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
