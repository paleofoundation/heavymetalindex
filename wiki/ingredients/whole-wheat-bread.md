---
title: "Whole wheat bread"
type: ingredient
commodity: whole-wheat-bread
label: "Whole wheat bread"
aliases: ["Bread, whole wheat, pre-sliced", "whole wheat bread"]
category: grain-product
tds_food:
  number: 62
  description: "Bread, whole wheat, pre-sliced"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 6.4]
    p95_ppb: 6.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [25, 39.2]
    p95_ppb: 41
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
    typical_ppb: [7.8, 13.8]
    p95_ppb: 15.7
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
    typical_ppb: [150, 220]
    p95_ppb: 241
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
    typical_ppb: [1.2, 2.5]
    p95_ppb: 3.0
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

# Whole wheat bread

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 62, "Bread, whole wheat, pre-sliced." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Whole wheat bread retains the bran and germ fractions of the wheat grain, and those outer layers are where cadmium and nickel preferentially accumulate during plant uptake. Wheat roots absorb cadmium from soil solution in a manner governed by the same divalent-cation transporter family that mediates zinc uptake; because the bran is metabolically active tissue involved in mineral storage, cadmium concentrations in bran run substantially higher than in the starchy endosperm that constitutes white flour. Refined white bread, which is milled to remove the bran and germ, consequently has a materially lower Cd content per serving than wholegrain bread made from the same wheat source. Nickel follows a broadly similar pattern, accumulating in the outer grain layers during seed maturation. Lead, by contrast, is less effectively translocated from soil into the grain interior regardless of milling degree, so Pb concentrations in both whole-wheat and white bread tend to be low. Arsenic in wheat grain distributes broadly across grain fractions rather than concentrating sharply in bran, but regional differences in the arsenic status of irrigated wheat-growing soils mean that bread made from grain grown in high-As regions can carry measurably higher total arsenic than bread from cleaner-soil origins. The fermentation step in bread production does not remove or materially reduce any of these metals; the metal load is set at the grain level before leavening or baking.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–6.4 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 25–39.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 7.8–13.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 150–220 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 1.2–2.5 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Bread, whole wheat, pre-sliced" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 27 | 24 | 42 | in profile |
| Cr | 27 | 0 | 0 | in profile |
| Ni | 27 | 140 | 250 | in profile |
| Pb | 27 | 0 | 7.3 | in profile |
| U | 27 | 0 | 4.1 | in profile |
| tAs | 27 | 7.4 | 18 | in profile |
| tHg | 27 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Cadmium concentrations in whole wheat bread reflect the Cd loading of the source wheat, which is primarily determined by soil Cd content and pH in the growing region. Durum wheat, grown extensively in Mediterranean and semiarid climates, is known to accumulate higher Cd than soft wheat varieties grown in northern Europe and North America, partly because of cultivar-level differences in root uptake efficiency and partly because of soil geochemistry in traditional durum-growing belts. Bread made from high-extraction flour from durum origins therefore tends to sit at the higher end of the cereal Cd range. In the FDA FY2018-FY2020 Total Diet Study, pre-sliced whole wheat bread sampled across US retail markets showed a Cd range of approximately 24 to 42 ppb, a distribution that reflects the mixed-origin supply chains typical of US commodity wheat ([[sources/fda2022-tds-elements-fy2018-fy2020|1]]). Total arsenic ranged from 7.4 to 18 ppb across the same sample set, consistent with the generally low arsenic profile of US wheat relative to rice. Nickel ranged from 140 to 250 ppb, reflecting the natural bran-associated Ni content. Geographic variation in Pb was minimal, with most samples at or near the reporting limit, consistent with the low grain-to-Pb translocation efficiency documented across cereal matrices.

## Processing effects

The critical processing step determining the metal content of whole wheat bread is the milling fraction retained in the flour. When wheat is milled to produce white flour, the bran and germ are sieved off and the resulting endosperm fraction is substantially lower in Cd and Ni. Whole wheat flour, by definition, retains all three fractions, so the resulting bread inherits the bran-level Cd and Ni concentrations rather than the diluted endosperm values. Partial extraction flours, sometimes marketed as high-extraction or 85 percent extraction flours, occupy an intermediate position: they retain more bran than white flour but less than true whole wheat, and their Cd content scales roughly proportionally with extraction rate. Yeast-leavened baking, including the extended fermentation used in sourdough production, does not remove heavy metals; sourdough fermentation may marginally reduce bioaccessible Cd through phytate reduction and organic acid complexation, but the total Cd concentration in the finished bread is not meaningfully altered by the fermentation process. Baking temperature and duration similarly have no material effect on metal concentrations, as the metals are non-volatile at food-processing temperatures. Rinsing, the lever that reduces inorganic arsenic in cooked rice, has no practical equivalent in bread production.

## Ingredient-derivative risk

Whole-grain cereal products more broadly, including wholegrain crackers, whole wheat pasta, whole wheat tortillas, and wholegrain breakfast cereals, carry risk profiles comparable to whole wheat bread when made from equivalent high-extraction flour sources, because the Cd, Ni, and As content is determined by the bran retention in the flour substrate, not by the product format. Wheat bran sold as a separate ingredient or incorporated into bran-enriched products concentrates these metals further relative to whole grain, because bran is the fraction of highest accumulation. Wheat germ similarly retains elevated Cd relative to white flour, though germ is used in smaller volumes in most applications. Mixed-grain products that combine whole wheat flour with refined grains from lower-Cd matrices (oats, corn) effectively dilute the whole-wheat Cd contribution in proportion to the wheat fraction.

## Mitigation options

### Sourcing levers

Sourcing wheat from regions with documented low soil Cd or from suppliers that test incoming grain for Cd is the highest-impact lever available to bread producers. Supplier specification programs that include a maximum Cd limit on raw wheat, benchmarked against achievable values for the relevant wheat type, provide forward purchase security. Geographic origin selection, such as preferring soft wheat origins with alkaline or neutral soils over durum-growing regions with known Cd elevation, reduces average Cd input before any further processing step.

### Agronomic levers

At the field level, soil pH management is the most effective agronomic tool: maintaining pH above 6.5 to 7.0 substantially reduces cadmium bioavailability to wheat roots, because Cd solubility in soil solution decreases with increasing pH. Phosphate fertilizer selection is also relevant; some phosphate rock sources carry elevated Cd, and use of low-Cd phosphate inputs reduces cumulative soil loading over time. Cultivar selection offers an additional margin; wheat breeding programs in Canada, Australia, and Europe have identified low-Cd accumulator lines, and certified low-Cd cultivars are commercially available in some markets. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Partial extraction milling, producing flour at 70 to 85 percent extraction rather than full whole-grain retention, is the processing lever with the greatest demonstrated effect on bread Cd content. A 50 percent wholemeal formulation, blending whole wheat flour with an equal mass of refined white flour, reduces Cd content approximately proportionally, to roughly half the value of 100 percent whole wheat bread made from the same wheat. This is a well-established reformulation option where regulatory or consumer demands allow. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Blending whole wheat flour with refined flours from inherently lower-Cd grain sources, including white rice flour (noting its own As profile) or refined corn flour, reduces the Cd contribution of the wholegrain fraction in proportion to blend ratio. Formulators using this lever should verify that it does not trigger regulatory labeling changes or consumer positioning concerns related to wholegrain content claims, as these vary by jurisdiction.

### Testing and QC levers

Routine incoming-grain testing by ICP-MS or ICP-OES provides direct Cd data for each wheat lot and allows lot-level rejection or blending decisions before milling. Finished-product testing at the bread level confirms actual concentrations and documents compliance with applicable limits. Surveillance frequencies appropriate for the supply chain complexity should be defined by the quality program; single-source, long-term-contract supply chains may justify lower surveillance frequencies than spot-purchase commodity wheat.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation 2023/915 sets maximum levels for Cd and Pb in cereal-based products. For bread and other cereal products made from whole grain wheat, the Cd limit is 0.10 mg/kg (100 ppb) on a wet-weight, as-placed-on-market basis; for wheat bran intended for direct consumption the EU Cd limit is 0.15 mg/kg (150 ppb). The Pb limit for bread and cereal products under the same regulation is 0.20 mg/kg (200 ppb). These limits apply to the finished product as sold, not to the flour input. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]] for the full scope and matrix definitions. The Codex Alimentarius General Standard for Contaminants and Toxins in Food (CODEX STAN 193-1995, as revised) sets a Cd ML of 0.10 mg/kg for wheat grain intended for direct consumption, which is directionally consistent with EU finished-product limits; see [[regulations/codex-cadmium-mls]] for the current Codex reference. The United States does not currently have a federal action level for Cd or Pb specifically in bread or cereal products outside the FDA's Closer to Zero framework for baby foods, which does not cover adult bread categories. Inorganic arsenic in bread is not subject to a specific regulatory maximum in any major jurisdiction as of 2026, though iAs in wheat and its products is monitored by regulatory agencies as part of ongoing dietary exposure assessments.

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
| 1 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Bread, whole wheat, pre-sliced (n=27); detectable concentrations for Cd, Ni, Pb, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [bff8abb72](https://github.com/paleofoundation/heavymetalindex/commit/bff8abb72) | 2026-07-27 | correction | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
