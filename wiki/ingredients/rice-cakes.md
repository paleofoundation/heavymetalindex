---
title: "Rice cakes"
type: ingredient
commodity: rice-cakes
label: "Rice cakes"
aliases: [rice cake]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 10.6]
    p95_ppb: 15.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 22.0]
    p95_ppb: 32.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [46.5, 132.5]
    p95_ppb: 150
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.9
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
sources: 4
---

# Rice cakes

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Rice cakes are produced by puffing or compressing whole or milled rice under heat and pressure, yielding a product that is essentially concentrated rice with minimal water content. The metal contamination profile of rice cakes is driven by the same pathway that makes all rice-derived products high-priority for inorganic arsenic (iAs) surveillance: rice (Oryza sativa) is uniquely efficient at accumulating iAs from paddy soil water, through the same silicon uptake transporter system the plant uses to acquire silicon as a structural nutrient. In flooded paddy conditions, soil reduction converts insoluble arsenate to soluble arsenite, which becomes highly bioavailable to rice roots. The grain accumulates both iAs (the toxicologically relevant species) and total arsenic in concentrations that substantially exceed those found in other staple cereals grown under non-flooded conditions. Because rice cakes are made from rice with minimal dilution by other ingredients, they concentrate this arsenic load into a small-volume, low-moisture product. Unlike some grain products where refining (for example, removal of the bran in white rice) reduces iAs content, the puffing or compression step in rice cake manufacture does not remove arsenic; indeed, the low moisture content of the finished product means that metal concentrations on a wet-weight basis are proportionally higher than in cooked rice. Rice cakes marketed specifically to infants and young children are of particular regulatory and public health concern because infants have higher per-kilogram-body-weight dietary exposure and developing nervous systems that are more susceptible to iAs neurotoxicity. The relevant canonical page for the rice primary commodity is [[ingredients/rice]].

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 4 below 5 | below pooling depth: Pb, Cd, iAs, tHg |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–10.6 | low | — |
| Cd | n=1 | 0–22 | low | — |
| iAs | n=1 | 46.5–132.5 | low | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants\|1]] |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1.2 | low | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

The iAs concentration in rice cakes is primarily determined by the iAs content of the rice grain used as the input, which is strongly influenced by rice production region and variety. California-grown medium-grain rice consistently produces lower iAs concentrations than US-grown long-grain varieties, particularly those from Arkansas, Louisiana, and Texas, owing to differences in soil arsenic availability and water management practices in these regions. Indian and Pakistani basmati varieties grown in low-arsenic subcontinent soils have some of the lowest iAs values documented among commonly traded rice types. Asian jasmine and short-grain varieties span a wide range depending on production location. Whole-grain (brown rice) inputs carry higher iAs than white rice inputs because the bran, where arsenic preferentially accumulates, is retained in brown rice. A rice cake made from whole-grain or brown rice therefore carries higher iAs than one made from white milled rice, all else being equal. The study by Signes-Pastor et al. (2016), the primary source on this page, documents iAs in rice cakes sold in UK and Spain, representing a European retail market basket including products made from various rice origins [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants]]. Quantitative regional breakdown by input rice origin for rice cakes specifically requires additional source ingestion.

## Processing effects

The puffing or compression step in rice cake manufacture does not remove or neutralize iAs. Arsenic in the rice grain is bound within the grain matrix, primarily in the starchy endosperm and bran, and is not volatile at the process temperatures used. The moisture reduction achieved by puffing concentrates iAs on a wet-weight basis relative to cooked rice; puffed rice has approximately 5 to 10 percent moisture compared with approximately 70 percent in cooked rice, producing a roughly threefold concentration effect per unit weight compared with the as-consumed cooked grain. Rinsing of raw rice before puffing could theoretically remove some surface arsenic but is not a standard step in rice cake production lines, and its effect on endogenous (grain-matrix) arsenic would be negligible. For Cd and Pb, which are present at lower concentrations than iAs in most rice varieties, the same concentration effect applies; the finished rice cake carries proportionally higher Cd and Pb on a wet-weight basis than cooked rice.

## Ingredient-derivative risk

Rice cakes as a finished product are primarily sold as retail snacks. The primary derivative risk context is their use as infant and toddler finger foods, where the snack format may represent a substantial fraction of total daily food intake for young children not yet consuming adult portion sizes. In this context, a child consuming a 10 g rice cake serving at 100 ppb iAs would receive a meaningful fraction of their estimated daily tolerable intake of iAs, depending on body weight and other dietary sources. Flavored rice cakes with added coatings (yogurt coating, chocolate) introduce additional ingredients but the rice base remains the dominant iAs contributor. Rice flour and puffed rice as industrial ingredients are functionally equivalent to rice cakes in terms of iAs concentration per dry gram and carry the same derivative risk when used as primary components in other snack formats.

## Mitigation options

### Sourcing levers

Specifying low-iAs rice as the input ingredient is the most impactful lever. This means specifying California-grown or Indian/Pakistani basmati varieties with documented low iAs, supported by supplier lot-level iAs testing. For products marketed specifically to infants and young children, specifying white rice rather than brown or whole-grain rice further reduces iAs by removing the high-iAs bran fraction. Origin transparency from ingredient suppliers is the enabling condition for this lever.

### Agronomic levers

Aerobic or alternate wetting-and-drying rice cultivation methods have been documented to reduce grain iAs relative to continuously flooded paddy production by limiting the reducing conditions that mobilize arsenite in soil water. This lever operates at the farm level and is not directly accessible to food manufacturers except through sourcing specifications that favor suppliers using these practices. _No quantified reduction magnitude from aerobic cultivation in the specific context of rice cake input rice is available in the current corpus; see [[ingredients/rice]] for the broader rice iAs agronomic evidence._

### Processing levers

No processing step in rice cake manufacture removes iAs once it is in the grain. The only effective processing lever is at the raw-grain level: milling white rice (bran removal) before puffing reduces iAs relative to whole-grain input. This comes at the cost of removing fiber and some nutrients, and is a trade-off that product developers and the relevant population context must weigh. Rinsing of raw rice before puffing has limited effect on endogenous grain arsenic.

### Formulation levers

Blending rice with lower-iAs grains (for example, corn, oat, or millet) in multi-grain puffed formats dilutes the per-gram iAs load of the finished product. For infant-targeted products, multi-grain formulations that reduce the rice fraction are a documented reformulation approach. Substituting rice with alternative grains entirely produces the greatest reduction but changes the product identity.

### Testing and QC levers

Lot-level ICP-MS testing with speciation for iAs (as distinct from total arsenic) is essential for rice cakes marketed to infants and young children, given the EU regulatory limit specifically for iAs and the high variability of iAs by rice origin. Testing of incoming raw rice by origin and variety before production provides the earliest intervention point. Finished-product testing should confirm that any within-batch variation is captured.

### Packaging and storage levers

Packaging does not contribute iAs or other heavy metals to rice cakes under standard flexible plastic, multilayer, or paper packaging conditions. The lacquer-lined packaging used for some rice cake formats does not introduce metals at food-contact surfaces under standard conditions. Storage conditions do not alter iAs or other metal content in the finished product.

## Regulatory limits that apply

The EU has established a specific maximum level for iAs in rice-based foods for infants and young children of 0.10 mg/kg (100 ppb) wet weight under [[regulations/eu2023-contaminants-maximum-levels]], which applies directly to rice cakes marketed as infant or toddler food. For rice cakes sold to the general adult population, the EU applies the general cereal-product framework; this includes a Cd limit of 0.10 mg/kg (100 ppb) and a Pb limit of 0.20 mg/kg (200 ppb) for processed cereal products. In the United States, FDA's guidance for iAs in infant rice cereal establishes 100 ppb as the action level (see [[regulations/fda-iAs-rice-cereal-100ppb]]); this guidance applies specifically to infant rice cereal and not directly to rice cakes sold to adult consumers, but it provides context for the risk-based rationale applicable to rice-based infant snacks more broadly. The broader FDA Closer to Zero program (see [[regulations/fda-closer-to-zero]]) addresses ongoing work to reduce exposure to Pb, iAs, Cd, and Hg in foods for babies and young children, under which rice-based snacks are a relevant category.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 4 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants|Inorganic arsenic in rice-based products for infants and young children]]<span class="hmi-ref-meta">Signes-Pastor AJ, Carey M, and Meharg AA · Food Chemistry 191:128-134 · 2016 · [doi.org/10.1016/j.foodchem.2014.11.078](https://doi.org/10.1016/j.foodchem.2014.11.078)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
| 2 | [[sources/signes-pastor2017-infant-arsenic-rice-weaning\|Signes-Pastor et al. 2017]]. *Levels of infants' urinary arsenic metabolites related to formula feeding and weaning with rice products exceeding the EU inorganic arsenic standard*, PLOS ONE | 2017 | Peer-reviewed | GB/EU iAs occurrence in 79 Belfast infants with pre-weaning urine samples (20 breastfed, 27 mixed fed, 32 formula fed), an 11-infant paired... (n=79) |
| 3 | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants\|Signes-Pastor et al. 2016]]. *Inorganic arsenic in rice-based products for infants and young children*, Food Chemistry 191:128-134 | 2016 | Peer-reviewed | iAs in rice cakes sold in UK and Spain by HPLC-ICP-MS; rice cakes are a high-iAs infant snack category (EU limit 0.1 mg/kg applies); key primary data for rice-cake iAs profile |
| 4 | [[sources/meharg2008-rice-arsenic-literature-review\|Meharg et al. 2008]]. *Levels of arsenic in rice - literature review*, Food Standards Agency contract C101045 | 2008 | Government report | UK tAs, iAs occurrence in Food Standards Agency-commissioned literature review and secondary tabulation of published, FSA, and University of Aberdeen rice arsenic data,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
