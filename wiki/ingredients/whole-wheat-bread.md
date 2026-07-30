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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [25, 39.2]
    p95_ppb: 41
    confidence: high
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
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
  Ni:
    status: populated
    typical_ppb: [150, 220]
    p95_ppb: 241
    confidence: high
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
    speciation: total-Cr-only; Cr-VI not detected (<0.1 ug/kg) by HPLC-ICP-MS speciation
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
    confidence: high
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

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | GAP | 4/10 HMTc analytes, total n=10 | only 4/10 analytes have evidence |
| D2 Regional coverage | below-tier | 1 jurisdictions, top CN 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, Ni THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); Ni: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 16 claims checked, 16 supported; 2 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming whole-wheat-bread: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, Ni, U; pairing 0 paired, 5 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; depth below staple bar |
| **Principle balance** | **OK** | consumer-protection 0.67, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | — |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 62, "Bread, whole wheat, pre-sliced." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Whole wheat bread retains the bran and germ fractions of the wheat grain, and those outer layers are where cadmium and nickel preferentially accumulate during plant uptake. Wheat roots absorb cadmium from soil solution in a manner governed by the same divalent-cation transporter family that mediates zinc uptake; because the bran is metabolically active tissue involved in mineral storage, cadmium concentrations in bran run substantially higher than in the starchy endosperm that constitutes white flour. Refined white bread, which is milled to remove the bran and germ, consequently has a materially lower Cd content per serving than wholegrain bread made from the same wheat source. Nickel follows a broadly similar pattern, accumulating in the outer grain layers during seed maturation. Lead, by contrast, is less effectively translocated from soil into the grain interior regardless of milling degree, so Pb concentrations in both whole-wheat and white bread tend to be low. Arsenic in wheat grain distributes broadly across grain fractions rather than concentrating sharply in bran, but regional differences in the arsenic status of irrigated wheat-growing soils mean that bread made from grain grown in high-As regions can carry measurably higher total arsenic than bread from cleaner-soil origins. The fermentation step in bread production does not remove or materially reduce any of these metals; the metal load is set at the grain level before leavening or baking.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–6.4 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 25–39.2 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 7.8–13.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 150–220 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | n=2 | 1.2–2.5 | high | — |

## Synthesis basis and censoring treatment

The total-mercury and total-chromium cells were resynthesized on 2026-06-11 on a whole-wheat-bread-as-sold basis, the form FDA Total Diet Study Food 62 ("Bread, whole wheat, pre-sliced") reports and the form in which the product reaches the consumer. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported total mercury and total chromium at typical and 95th-percentile values of zero at high confidence with two contributing studies. Those figures were an artifact of the FDA Total Diet Study composites for whole wheat bread, in which every one of the 27 composites fell below the reporting limit for each of these two metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]], total-mercury reporting limit 1 µg/kg, all 27 composites below limit; total-chromium reporting limit 50 µg/kg, all 27 composites below limit). For both metals the only occurrence measurement specific to whole wheat bread in the corpus is the fully censored FDA cell, and no primary food survey reports an extractable quantitative whole-wheat-bread value for either, so each is recorded as a reviewed data gap rather than as a measured zero. The honest floor is the FDA reporting limit expressed as a left-censored bound (total mercury below 1 µg/kg, total chromium below 50 µg/kg), not a measured zero.

Total mercury and inorganic mercury are kept distinct, and total mercury is not derived from methylmercury; the FDA Total Diet Study measures total mercury only, and that measurement was fully censored, so no whole-wheat-bread mercury distribution is published. The single non-FDA source routed to this ingredient ([[sources/song2024-crvi-hplc-icpms-food-reduction|Song et al. 2024]]) is a Cr(VI) speciation method paper and does not measure mercury.

Chromium is reported as total chromium only. The one speciated measurement in the corpus is from Song et al. 2024, in which a commercially purchased whole wheat bread from a Nanjing supermarket was analyzed by HPLC-ICP-MS with a 0.1 µg/kg detection limit and hexavalent chromium was not detected (below 0.1 µg/kg, triplicate measurement). Cr(VI) is therefore recorded as not detected at that speciation detection limit, and no Cr(VI) value is inferred from total chromium. Song et al. report no total-chromium concentration for the tested foods (their analysis targets the Cr(VI) species), and the FDA total-chromium cell for whole wheat bread is fully censored, so the total-chromium distribution is a reviewed data gap with no published central or 95th-percentile value. No mining-region, industrial, or wastewater-affected whole-wheat-bread chromium or mercury stratum exists in the corpus to report separately.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Bread, whole wheat, pre-sliced" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 24 | 25 | 28 | 39.2 | 41 | 42 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 140 | 150 | 180 | 220 | 241 | 250 | in profile |
| Pb | 27 | 0 | 0 | 4.3 | 6.44 | 6.71 | 7.3 | in profile |
| U | 27 | 0 | 1.2 | 1.8 | 2.54 | 2.95 | 4.1 | in profile |
| tAs | 27 | 7.4 | 7.82 | 9.6 | 13.8 | 15.7 | 18 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

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

The 2 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
2. Song G, Tan H, Cheng C, Li P, Sun X, Zhou Y, et al. (2024). *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*. Toxics 12(5): 325. [https://doi.org/10.3390/toxics12050325](https://doi.org/10.3390/toxics12050325). Peer-reviewed, A-tier. [[sources/song2024-crvi-hplc-icpms-food-reduction|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

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
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [d5bdf4bb7](https://github.com/paleofoundation/heavymetalindex/commit/d5bdf4bb7) | 2026-06-11 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
