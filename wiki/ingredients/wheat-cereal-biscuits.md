---
retired: true
noindex: true
redirect_target: ingredients/cereals
retirement_date: 2026-10-25
retirement_authority: "HMI-HELD-TRIAGE-1 (Elon PASS 25 Oct 2026 21:01): 301 to parent; findings stay in the store"
title: "Wheat cereal biscuits"
dek: "Whole wheat cereal products that retain bran and germ. Explore the evidence on measured metals, flour sourcing and processing effects."
rail_highlights:
  - label: Exposure
    text: UK survey measured metals in wheat cereal biscuits
    source: sources/fsa2016-infant-food-formula-metals-survey
    source_label: FSA survey
type: ingredient
commodity: wheat-cereal-biscuits
label: "Wheat cereal biscuits"
aliases: [wheat cereal biscuit]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 15.4]
    p95_ppb: 20.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 42
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 230]
    p95_ppb: 260
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2.3
    confidence: low
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
    typical_ppb: [0, 4292]
    p95_ppb: 6160
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 67.3]
    p95_ppb: 267
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
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
hero_image: /static/heroes/wheat-cereal-biscuits.webp
quick_read:
  summary: "Wheat cereal biscuits retain bran and germ, carrying their higher cadmium burden through baking."
  points:
    - label: Metals of concern
      text: "[[metals/cadmium|cadmium]] is central to the whole-grain profile; lead, inorganic arsenic, total mercury, aluminum, and tin are also covered."
    - label: Main drivers
      text: "[[ingredients/wheat|wheat]] origin, cultivar, soil conditions, and bran retention determine the starting metal load."
    - label: Practical framing
      text: "baking does not remove cadmium; incoming-flour [[testing/icp-ms|testing]] and grain sourcing are the main controls described."
hero_image_alt: "Oblong compressed wheat cereal biscuits beside a dish of wheat grain illustrating wheat cereal biscuits ingredient context."
---

# Wheat cereal biscuits

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Wheat cereal biscuits retain bran and germ, carrying their higher cadmium burden through baking.</p>
  <ul>
    <li><strong>Metals of concern:</strong> <a href="/metals/cadmium">cadmium</a> is central to the whole-grain profile; lead, inorganic arsenic, total mercury, aluminum, and tin are also covered.</li>
    <li><strong>Main drivers:</strong> <a href="/ingredients/wheat">wheat</a> origin, cultivar, soil conditions, and bran retention determine the starting metal load.</li>
    <li><strong>Practical framing:</strong> baking does not remove cadmium; incoming-flour <a href="/testing/icp-ms">testing</a> and grain sourcing are the main controls described.</li>
  </ul>
</div>

This page draws on evidence from [[sources/fsa2016-infant-food-formula-metals-survey|UK Food Standards Agency]]. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Wheat cereal biscuits (typified by the Weetabix format) are whole-wheat products that retain the bran and germ fractions of the wheat grain. This is the defining characteristic for metal accumulation risk: cadmium partitions preferentially to the bran and germ rather than the starchy endosperm, so whole-wheat products consistently carry higher Cd concentrations than refined wheat products made from the same grain. The bran-to-endosperm Cd concentration ratio in wheat is approximately two-fold, as documented in EFSA's 2009 cadmium opinion, which reports mean Cd in wheat bran and germ of 0.065 mg/kg compared to 0.030 mg/kg for wheat grain and flour overall. Nickel, manganese, and other transition metals also partition to the bran fraction. In addition to whole-wheat base metal inheritance, commercial wheat cereal biscuits commonly contain vitamin and mineral fortification premixes; the iron, folic acid, and B-vitamin additions in standard fortification are of food-grade purity and contribute negligible metals, but this ingredient pathway should be verified for any specific formulation. Baking does not remove cadmium or other heavy metals; the final biscuit form carries essentially the same metal concentration on a dry-weight basis as the whole-wheat ingredient from which it is made.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–15.4 | low | — |
| Cd | n=1 | 0–30 | low | — |
| iAs | n=1 | 0–230 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–4292 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–67.3 | low | — |
| U | data gap | — | — | — |

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

FSA/Fera FS102048 (2016) includes wheat cereal biscuits in Table 6 of the UK infant and child food survey, providing the single current source for this product ([[sources/fsa2016-infant-food-formula-metals-survey]]). Quantified values remain in progress until the Table 6 structured data is fully parsed with censoring flags preserved. Geographic variation is expected to follow wheat grain sourcing patterns: durum and hard wheat varieties from high-Cd growing regions (parts of Southern Europe, North Africa) will produce higher-Cd biscuits than biscuits made from lower-Cd wheat varieties grown in Northern Europe or the UK. Most major UK and European wheat cereal biscuit brands source wheat domestically or from established European agricultural regions where Cd concentrations are within typical temperate-zone ranges.

## Processing effects

The milling step that produces whole-wheat flour for biscuit manufacture retains the bran and germ fractions, preserving their higher metal concentrations relative to refined flour. If wheat cereal biscuit manufacturers used refined white flour instead of whole wheat, Cd concentrations would be approximately halved. Toasting and baking at high temperatures (typical oven temperatures for biscuit production are 200 to 250 degrees Celsius) do not volatilise cadmium, lead, or other heavy metals under food-processing conditions; the metal content of the finished biscuit equals that of the flour and other dry ingredients minus any negligible transfer to the baking surface. Water addition during dough mixing and subsequent drying during baking bring the finished product back to the low-moisture state of the dry ingredients, so concentrations on a dry-weight basis are preserved through processing.

## Ingredient-derivative risk

Wheat cereal biscuits are themselves a derivative of whole-wheat flour. The primary downstream risk gradient is between whole-wheat products (biscuits, whole-grain crackers, bran-enriched breads) and refined-wheat products (white bread, pasta from refined semolina); the biscuit format is at the higher end of the wheat-product Cd gradient because it preserves the bran fraction. Crushed wheat cereal biscuits are used as a porridge ingredient, a coating for other foods, and occasionally as a breadcrumb substitute; in all these applications the metal burden follows the mass fraction of biscuit in the finished dish.

## Mitigation options

### Sourcing levers

Sourcing whole-wheat flour from varieties and growing regions with documented lower Cd is the primary lever. Durum wheat from high-Cd soils (parts of North Africa, Mediterranean basin) should be avoided in favour of bread wheats from lower-Cd European growing regions. Supplier wheat testing for Cd at commodity intake is the most direct quality gate.

### Agronomic levers

Cultivar selection (preferring non-accumulator bread wheat varieties over durum or other high-accumulator types) and supplier-side soil pH management and zinc fertilisation reduce Cd in the grain before it reaches the mill. These levers operate at the wheat-growing level and require supplier specification.

### Processing levers

Substituting whole-wheat flour with partially refined flour reduces Cd but changes the product definition (a whole-grain cereal biscuit is defined by its bran content). For products where partial bran reduction is acceptable, milling to a higher extraction rate than standard whole wheat achieves a Cd reduction proportional to the fraction of bran removed.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS testing of incoming whole-wheat flour for Cd is the most cost-effective quality gate for wheat cereal biscuit manufacturers. The EU ML of 0.10 mg/kg for Cd in cereals provides the operative threshold for supplier release criteria.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Cd in cereal-based products under [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]]: 0.10 mg/kg (100 ppb) for cereal products generally, with the caveat that wheat bran and wheat gluten carry a higher specific ML of 0.15 mg/kg under the 2023 regulation revisions. Wheat cereal biscuits, as a whole-wheat cereal product, fall under the general 0.10 mg/kg Cd limit. For Pb in cereals, the EU limit is 0.20 mg/kg (200 ppb). [[regulations/codex-cadmium-mls]] provides the international Codex Cd ML for cereal grains. [[regulations/fda-closer-to-zero]] Pb guidance (20 ppb for dry infant cereals) applies when wheat cereal biscuits are labelled or sold as infant or toddler food.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 514: Cereal, shredded wheat, frosted | tAs | 3 | 1 | 3.3 | 3 |
| 514: Cereal, shredded wheat, frosted | Cd | 3 | 3 | 27–57 | 1 |
| 514: Cereal, shredded wheat, frosted | Cr | 3 | 2 | 200–300 | 50 |
| 514: Cereal, shredded wheat, frosted | Pb | 3 | 0 | ND in all composites | 4 |
| 514: Cereal, shredded wheat, frosted | tHg | 3 | 0 | ND in all composites | 1 |
| 514: Cereal, shredded wheat, frosted | Ni | 3 | 3 | 63–150 | 40 |
| 514: Cereal, shredded wheat, frosted | U | 3 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/taher2023-biscuits-iraqi-markets\|Taher et al. 2023]]. *Assessment of Heavy Metals in Biscuit Samples Available in Iraqi Markets*, Biological Trace Element Research | 2023 | Peer-reviewed | IQ Pb, Cd occurrence in Biscuit products marketed for infants (stated age range 6–24 months) collected from local markets in Iraq, July 2023,... (n=13) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in 3276 prepared food, beverage and water composites across 307 TDS foods, FY2018-FY2020 US collections (n=3276) |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
