---
title: "Chapattis"
type: ingredient
commodity: chapattis
label: "Chapattis"
aliases: [chapatti]
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
sources: 0
---

# Chapattis

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Chapattis (chapati) are unleavened whole-wheat flatbreads central to South Asian diets. As a whole-wheat product, chapattis carry the metal accumulation profile of wheat grain with the important distinction that the bran fraction, which concentrates cadmium and to a lesser extent lead, is retained. Wheat accumulates cadmium primarily from soil via root uptake; the outer bran layers of the grain bind a disproportionate share of soil-derived cadmium relative to the starchy endosperm. This means that whole-wheat products carry meaningfully higher cadmium than refined white-flour products made from the same grain. Preparation with water introduces a secondary contamination pathway: in regions where drinking water carries elevated lead or cadmium (particularly groundwater in South Asian contexts), the water used to make the dough can contribute to the metal load of the finished bread. Traditional cooking on clay griddles (tawa) has been noted anecdotally as a potential trace-metal source from the clay substrate, but this pathway is not quantified in the current corpus. The FSA/Fera FS102048 survey, which measured chapattis as part of a broad food composite study in the UK, is the primary source in this corpus [[sources/fsa2016-infant-food-formula-metals-survey]].

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

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The FSA/Fera FS102048 survey (UK, 2016) measured chapattis alongside a range of other foods and provides the primary occurrence evidence in this corpus; exact chapatti-specific concentration values remain pending structured extraction from Table 6 of that report [[sources/fsa2016-infant-food-formula-metals-survey]]. EU cadmium limits for bread and fine bakery products (0.10 mg/kg per [[regulations/eu-2023-915-cadmium]]) and the corresponding lead limit (0.20 mg/kg per [[regulations/eu2023-contaminants-maximum-levels]]) provide a regulatory frame for expected concentration ranges in European-market products. Chapattis made from whole-wheat flour in South Asia would be expected to carry cadmium at levels characteristic of local wheat varieties and soil conditions; South Asian wheat-growing soils vary widely in cadmium background, and irrigation water quality adds a secondary variable particularly in areas relying on groundwater. Chapattis made from white flour rather than whole-wheat would carry substantially lower cadmium, as the bran fraction bearing most of the grain's cadmium has been removed. Regional and variety-level quantitative data for chapattis are not currently available in this corpus beyond the UK survey reference.

## Processing effects

The preparation of chapattis involves mixing whole-wheat flour with water and cooking on a dry griddle. The mixing step introduces any metals present in the water used; in regions with lead-containing plumbing infrastructure or elevated groundwater lead, this step is a meaningful exposure route that would not appear in surveys of flour alone. Dry-heat cooking on a griddle does not involve aqueous leaching and therefore does not reduce cadmium or lead content; unlike boiling, griddle cooking retains all metals in the finished product. The high surface temperature may volatilise mercury-containing compounds to a small degree, but mercury levels in wheat are typically below detection limits and this pathway is not quantified. Leavened breads from similar flour can lose a small fraction of metals through the carbon dioxide expelled during fermentation, but chapattis are unleavened and this mechanism does not apply. On balance, processing effects for chapattis are minimal; the metal content of the finished bread closely reflects that of the input flour, adjusted upward by any contribution from water quality.

## Ingredient-derivative risk

Chapattis as a finished product are essentially the derivative of whole-wheat flour. Within the chapatti product space, the key variation driving differential metal load is the flour extraction rate: 100% wholemeal flour retains maximum cadmium from bran; lower-extraction (more refined) flours used in some regional variants reduce cadmium substantially. Chapatti flour sold commercially may be blended to varying degrees with refined flour, introducing batch-to-batch variability. In prepared-food contexts, chapattis are sometimes ground or crumbled into other dishes, but this does not change the per-mass metal content. Chapatti-based products that have been charred (common with hand-made chapattis on high heat) have not been studied for metal content changes from charring in the current corpus.

## Mitigation options

### Sourcing levers

Sourcing wheat from regions and varieties with documented low cadmium accumulation reduces chapatti cadmium at the ingredient level. Specifying low-cadmium wheat flour from suppliers with ICP-MS testing data on Cd per batch is the most reliable lever. For South Asian production, selecting wheat grown in lower-cadmium irrigated regions and using clean water sources for dough preparation are complementary levers.

### Agronomic levers

Soil liming to maintain pH above 6.5 in wheat-growing fields reduces cadmium bioavailability and uptake. Selection of lower-cadmium-accumulating wheat varieties is an established mitigation in European regulatory contexts and is relevant for South Asian wheat breeding programs. Reducing cadmium-contaminated phosphate fertiliser use addresses the primary anthropogenic cadmium input to agricultural soils.

_No quantified data specific to chapatti-relevant wheat varieties in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Substituting partly-refined flour for 100% wholemeal flour reduces cadmium per unit weight of finished chapatti in proportion to the reduction in bran fraction. Using clean potable water with verified low lead and cadmium content for dough preparation eliminates the water-contribution pathway. These are meaningful levers where water quality is a concern.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

For commercial chapatti flour and branded chapatti products, lot-level cadmium testing by ICP-MS against the EU bakery-products limit of 0.10 mg/kg is the appropriate control. Flour mills supplying whole-wheat flour for chapatti production can provide Cd certificates of analysis as part of standard grain quality documentation.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets a cadmium maximum level of 0.10 mg/kg for bread, fine bakery wares, biscuits, crackers, and cereal snacks; this limit applies to chapattis as a bread product. The lead maximum for bread and cereal products under EU contaminants regulations ([[regulations/eu2023-contaminants-maximum-levels]]) is 0.20 mg/kg. The Codex general standard CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides international cadmium maximum levels for cereals; the applicable Codex limit for wheat flour is 0.20 mg/kg. No specific US FDA action level applies to chapattis; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods. UK Food Standards Agency national legislation, under which the FS102048 survey was conducted, adopts EU-derived limits.

<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

No source has yet been routed to this page. That is a statement about the corpus, not about the ingredient: absence of routed evidence is not evidence of absence. Nothing here should be read as a finding of low contamination.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
<!-- END: hmi-page-history -->
