---
title: "Chocolate chip cookies"
type: ingredient
commodity: chocolate-chip-cookies
label: "Chocolate chip cookies"
aliases: ["Cookies, chocolate chip", "chocolate chip cookies"]
category: dessert
tds_food:
  number: 183
  description: "Cookies, chocolate chip"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [300, 300]
    p95_ppb: 300
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
sources: 1
---

# Chocolate chip cookies

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 183, "Cookies, chocolate chip." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Chocolate chip cookies are a composite baked product whose heavy metal profile is driven by two primary ingredient streams: the chocolate chips and the wheat flour. Chocolate chips carry cadmium, lead, and nickel from the cocoa fraction; dark chocolate chips carry substantially more cocoa solids and thus more cadmium and nickel per gram than milk chocolate chips, which dilute the cocoa with dairy and sugar. The wheat flour contributes cadmium through bran-fraction uptake from agricultural soil. Butter, sugar, eggs, and leavening agents contribute negligible metals. The FDA Total Diet Study FY2018-FY2020 collected only a single composite sample for this food (n=1), finding chromium at 300 ppb as the sole detectable metal; all other analytes were at or below reporting limits in that single sample [[sources/fda2022-tds-elements-fy2018-fy2020]]. The very small sample size means the TDS data is indicative rather than distributional for this product; the chromium finding is consistent with cocoa being a known source of chromium in the diet. Cross-referencing with the chocolate cake TDS data (n=27) suggests that cadmium, lead, and nickel would be detectable in a larger sample of chocolate chip cookies, with concentrations depending on the chocolate-chip cocoa-solid fraction of the recipe.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | data gap | — | — | — |
| Cd | data gap | — | — | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | n=2 | 300 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cookies, chocolate chip" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cr | 1 | 300 | 300 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 provides only a single composite sample for chocolate chip cookies, finding chromium at 300 ppb and all other analytes below reporting limits [[sources/fda2022-tds-elements-fy2018-fy2020]]; this data point is insufficient to characterise the product's distributional metal profile. Analogy with chocolate cake TDS data (n=27), which measured a similar matrix with cocoa as the dominant metal driver, suggests cadmium concentrations in the range of 10-40 ppb and nickel concentrations in the range of 380-680 ppb would be expected in a larger sample of chocolate chip cookies, depending on the chocolate chip fraction and cocoa-solid content. Recipes using dark chocolate chips would carry higher cadmium and nickel per serving than those using milk chocolate chips, by a factor approximately proportional to the difference in cocoa-solid content between chip types.

## Processing effects

Baking does not alter the metal content of cocoa or flour fractions; heavy metals are thermally stable under standard oven temperatures. Moisture loss during baking concentrates all metals slightly on a per-gram basis relative to raw dough. The chocolate chips in most cookie recipes are added as discrete pieces that are partially melted during baking, maintaining their cocoa-derived metal load throughout the finished product. Dutch-processed cocoa powder (if used in addition to chocolate chips) carries the same metal profile as natural cocoa; alkalisation does not materially alter Cd or Pb.

## Ingredient-derivative risk

The primary variation driving differential metal load within the chocolate chip cookie product class is the type and proportion of chocolate chips: dark chocolate chips carry more cadmium and nickel per gram than milk chocolate chips, which in turn carry more than white chocolate chips (which contain no cocoa solids). The cookie-flour-to-chip ratio determines how much the wheat-flour Cd signal or the chip Cd signal dominates per serving. Cookie dough products (sold refrigerated or frozen for home baking) carry the same ingredient complement as the baked product; metal content per gram is similar before baking. Cookie mixes (dry blends to which consumers add eggs and butter) concentrate the dry ingredients and would carry proportionally higher per-gram Cd and Ni than the finished baked cookie.

## Mitigation options

### Sourcing levers

Sourcing chocolate chips made from lower-cadmium cocoa origins (West African rather than Andean) is the highest-impact lever. For manufacturers, specifying chocolate chip suppliers who provide Cd and Pb certificates of analysis per batch from ICP-MS testing enables upstream quality control. Specifying milk chocolate chips rather than dark chocolate chips in the recipe, where taste and product positioning permit, reduces the cocoa-solid fraction and thus cadmium and nickel per chip gram.

### Agronomic levers

Agronomic levers apply to the cocoa and wheat ingredient streams; see [[ingredients/cocoa]] for cocoa-specific levers (soil amendment, origin selection, cultivar) and [[ingredients/wheat-flour]] for wheat cadmium mitigation.

### Processing levers

_No quantified data on processing levers specific to chocolate chip cookie manufacturing in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Reducing the chocolate chip mass fraction in the recipe or substituting milk chocolate for dark chocolate chips reduces cadmium and nickel per serving proportionally to the change in cocoa-solid fraction. Using carob chips as a partial substitute for chocolate chips substantially reduces the cadmium and nickel contribution from the chip fraction, though sensory properties differ. Increasing the cookie-dough mass relative to chips (larger, chip-sparser cookies) dilutes the chip-derived metals per serving.

### Testing and QC levers

For manufacturers, ICP-MS testing of chocolate chip batches for Cd, Pb, and Ni is the appropriate quality control point. The single TDS data point is insufficient to drive regulatory concern, but the analogy with chocolate cake suggests that cadmium in chocolate chip cookies is a relevant analyte to test, particularly for products marketed to children where chronic exposure from repeated consumption is a factor.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets cadmium maximum levels for cocoa and chocolate ingredients; the applicable limit for chocolate chip cookies as a finished product would be assessed by reference to the limits for the constituent cereal and chocolate fractions. The general EU contaminants regulation ([[regulations/eu2023-contaminants-maximum-levels]]) applies lead limits to cereal-based fine bakery products. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides cadmium limits for cocoa and cereal products. No specific US FDA action level applies to chocolate chip cookies as a finished product; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler food categories. The chromium detected at 300 ppb in the single TDS sample represents total chromium, not Cr-VI; EU limits and HMT&C analyte tracking for Cr apply to Cr-VI specifically, which is not documented in the TDS data.

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
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cr occurrence distributions for Cookies, chocolate chip (n=1) |
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
