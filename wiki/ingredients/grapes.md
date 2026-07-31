---
title: "Grapes"
type: ingredient
commodity: grapes
label: "Grapes"
aliases: [grape, grape-pomace]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 28]
    p95_ppb: 84
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-grape-whole-berry-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 15]
    p95_ppb: 30
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-grape-whole-berry-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 7.0]
    p95_ppb: 8.1
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-grape-whole-berry-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 44.1
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 1966]
    p95_ppb: 2411
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [0, 15]
    p95_ppb: 50
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-23
    basis: raw-grape-whole-berry-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [0, 15.3]
    p95_ppb: 16.5
    confidence: medium
    n_studies: 1
    last_reviewed: 2026-05-13
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-23
sources: 16
---

# Grapes

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 7/10 HMTc analytes, total n=26 | labeled data-gaps: iAs |
| D2 Regional coverage | OK | 12 jurisdictions, top PL 21% | — |
| D3 Anthropogenic evidence | GAP | 1 soil + 1 agricultural-soil + 1 irrigation-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 2 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg THIN, Ni POOLABLE, Al THIN, Cr THIN, Sn THIN | tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Cr: THIN; Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 4/10 populated cells declare a basis token | 6 populated cell(s) lack a basis token: iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 34 claims checked, 34 supported; 8 citations, 0 orphan, 2 foreign | 2 foreign citation(s) not naming grapes: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Al, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 8 single, 0 unpaired | tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Cr: THIN; Sn: THIN, needs 2 more study(ies); basis: 6 populated cell(s) lack a basis token: iAs, tAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Grapes (Vitis vinifera and related species) are a vine fruit whose metal burden arises from a combination of root uptake from vineyard soils and surface deposition on the thin skin. Grapevines are deep-rooted perennial crops that access subsoil mineral fractions over decades of growth, and vineyard soils accumulate heavy metals through two principal routes: application of copper-based fungicides (copper can co-carry arsenic impurities and displace other metals in soil chemistry), and in some historical viticultural regions, application of lead arsenate as a pesticide before its prohibition. The berry skin is thin relative to citrus rind or apple cuticle, providing less of a barrier to surface-deposited Pb from atmospheric deposition, road traffic, or spray residues. Total arsenic in grapes reflects both soil arsenic uptake through roots and historical pesticide residue patterns in vineyard soils. The dominant arsenic species in grape tissue is expected to be predominantly inorganic, unlike in marine food, because the organoarsenical metabolism pathways in terrestrial plants produce different speciation profiles than marine organisms. The FDA TDS data for seedless red/green grapes (n=27) shows tAs at a median of 3.7 ppb (max 9 ppb) as the most consistently detectable analyte in this matrix, with Ni detected at the 95th percentile [[sources/fda2022-tds-elements-fy2018-fy2020]]. Lead, cadmium, total mercury, and uranium fall below their FDA reporting limits across that composite, but the European fresh-grape occurrence literature that measured grape by name detects lead and cadmium at low but non-zero concentrations; those below-limit FDA results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–28 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|2]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|3]] |
| Cd | n=5 | 0–15 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0–7 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=5 | 0 | medium | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|3]] |
| Al | n=1 | 0–1966 | medium | — |
| Cr | n=4 | 0–15 | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|1]], [[sources/rezaei2020-fruits-markazi-essential-elements\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Sn | n=1 | 0–15.3 | medium | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|1]] |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-mercury, and uranium cells were resynthesized on 2026-06-11 on a raw grape whole-berry wet-weight basis, the form in which table grapes enter the fresh-fruit and ingredient supply chain and the basis the FDA Total Diet Study reports for TDS Food 88, "Grapes, seedless, red/green, raw." Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. Inorganic arsenic is held distinct from total arsenic and remains a reviewed data gap; total mercury is held distinct from methylmercury and is not derived from it.

The earlier profile reported lead, cadmium, total mercury, and uranium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composite for grapes (n=27), in which every composite (or all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros: lead all 27 below the 4 µg/kg reporting limit, cadmium all 27 below 1 µg/kg, total mercury all 27 below 1 µg/kg, and uranium 26 of 27 below 1 µg/kg with a single detect at 5.2 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and, for lead and cadmium, recovers the upper distribution from primary fresh-fruit occurrence literature that measured grape by name, in which both metals are low but non-zero in grape berries.

Lead rests on three sources that report grape-specific values. The Romanian retail survey ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]], ICP-MS, fresh weight) reports grape lead of 27.48 µg/kg in commercial-market grapes and 18.32 µg/kg in amateur-grown grapes; this commercial-market value sets the upper end of the typical range. The 95th-percentile anchor of 84 µg/kg is the single highest fresh-grape lead value named in the corpus, red grapes from Peru in the Polish monitoring survey ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]], the explicit highest-lead fresh-grape lot in that dataset). The allotment-garden survey from Lublin ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Sembratowicz et al. 2010]]) reports white-grape lead at fresh-weight means of 60 µg/kg (city-centre) and 90 µg/kg (surrounding gardens) with a per-lot range to 150 µg/kg; these self-harvested allotment values corroborate the upper distribution but are not retail and are treated as an upper-tail prior rather than a central anchor. Two further sources confirm the low central tendency: Polish retail fresh grape ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]], fresh-grape lead mean 5 µg/kg, maximum 9 µg/kg wet weight) and a Pakistani low-industry baseline ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]], grape lead 107 µg/kg dry weight, the highest-lead of eleven fruits in that survey but on a dry-weight basis that overstates the wet-weight value). The lead typical range of 0 to 28 µg/kg spans the FDA censored floor to the Bora commercial-market central; confidence is held at medium given the consistent low central across retail surveys against a fully censored FDA composite and the wide allotment-versus-retail spread.

Cadmium rests on the same grape-naming surveys but shows a sharply bimodal distribution between retail and allotment sources. Retail and market grape cadmium is low: the Romanian commercial-market value is 14.78 µg/kg fresh weight with the amateur arm below the limit of detection ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Bora et al. 2022]]), Polish retail fresh grape is 1 µg/kg with a maximum of 2 µg/kg ([[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Rusin et al. 2021]]), and the Pakistani low-industry baseline is 66 µg/kg dry weight ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]], which converts to a substantially lower wet-weight value). The cadmium typical range of 0 to 15 µg/kg spans the FDA censored floor to the Bora commercial-market central, and the 95th-percentile of 30 µg/kg is set at the top of the ordered retail-and-market set with margin above the Bora central-plus-spread. The dominant exception is the Lublin allotment survey ([[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Sembratowicz et al. 2010]]), in which white grape was the only species of five to exceed the EU cadmium maximum level, with fresh-weight means of 190 µg/kg (city-centre) and 220 µg/kg (surrounding gardens), a per-lot range of 60 to 290 µg/kg, and 100 percent of lots above the 50 µg/kg EU limit at both sites. These allotment-garden values are roughly four times the regulatory limit and an order of magnitude above retail grape cadmium; they are a documented site-and-source-specific outlier reflecting self-harvested produce on metal-bearing garden soils, are held outside the pooled retail percentiles, and bound the upper-tail exposure for garden-grown rather than commercial grape. Cadmium confidence is held at medium for the same reasons as lead.

Total mercury and uranium remain at or below the FDA reporting limit with no grape-specific positive measurement in the corpus. Total mercury is recorded with the FDA 1 µg/kg reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single contributor: the FDA composite is fully censored, and the only mercury data touching grape is a broad fresh-fruit-category aggregate, not a grape-specific value. The Polish monitoring survey reports total mercury for "fresh fruits other than berries" at a category mean of 0.3 to 1.7 µg/kg and a 90th percentile of 0.1 to 4 µg/kg ([[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Mania et al. 2021]]); that figure is a whole-fresh-fruit-category proxy and is recorded only as broad-aggregate context at low confidence, never relabeled as a grape value. The grape-matrix mercury sensor study in the corpus ([[sources/chen2024-trimodal-hg-food-sensor|Chen et al. 2024]]) measured only spiked grape juice for method validation and reports no unspiked occurrence value, so it contributes no occurrence baseline. No grape hexavalent-chromium or grape-specific methylmercury measurement exists; neither is inferred. Uranium is recorded as a reviewed data gap: the only grape uranium data in the corpus is the FDA Total Diet Study cell (26 of 27 composites below the 1 µg/kg reporting limit, a single detect at 5.2 µg/kg), and no primary non-FDA source reports an extractable quantitative grape uranium value, so no distribution is published (the rice-uranium and apple-uranium precedent).

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 88, "Grapes, seedless, red/green, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Grapes, seedless, red/green, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 44.1 | 110 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 5.2 | in profile |
| tAs | 27 | 0 | 0 | 3.7 | 7.04 | 8.1 | 9 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Vineyard origin is the primary source of variation in grape metal concentrations. European wine-producing regions with long agricultural histories and documented legacy pesticide use (particularly in France, Italy, and Spain) carry vineyard soils with elevated Cu (from Bordeaux mixture applications) and, in some historically documented areas, elevated Pb and As from lead arsenate use. New World wine-grape growing regions (California, Chile, Australia, New Zealand, South Africa) generally have lower legacy pesticide contamination burdens in soils but may show elevated natural geogenic arsenic in regions with volcanic geology. Table grape production, which is distinct from wine grape production and is more relevant to the frozen or fresh grape market, is concentrated in California, Chile, and South Africa and tends to involve different viticultural practices and soil contexts than Old World wine vineyards. The FDA TDS data (n=27, seedless red/green raw grapes) reflects the US market table grape distribution, which is dominated by California and Chilean production [[sources/fda2022-tds-elements-fy2018-fy2020]].

## Processing effects

Washing fresh grapes before consumption or before commercial processing removes surface-deposited Pb and Cd from the skin, reducing the contribution of atmospheric deposition to the measured metal burden. Drying grapes to produce raisins removes approximately 70 to 75 percent of the fruit's moisture while retaining essentially all of the metals, resulting in a roughly threefold to fourfold concentration of metals per gram dry weight in raisins relative to fresh grapes. This concentration effect is the most important processing-step risk for derivatives of this commodity. Juicing separates juice from skin and seeds; the juice fraction carries the water-soluble metal fraction while skin and seeds retain the protein-bound and particle-associated fraction. Wine production involves fermentation in contact with skins (for red wines) or pressing first (for white wines), then potential fining with bentonite clay (which adsorbs some metal species), which can reduce final wine metal concentrations relative to the grape juice starting material.

## Ingredient-derivative risk

Raisins are the most significant metal-concentrating derivative of grapes. The moisture removal during drying concentrates all metals in proportion to the dry-weight ratio; a raisin with 15 percent moisture versus a fresh grape with 80 percent moisture would carry approximately fivefold higher metal concentration per gram on a wet-weight basis. Raisins used as ingredients in breakfast cereals, trail mixes, granola bars, and baked goods contribute metals proportional to their weight fraction, and their higher concentration per gram relative to fresh grapes makes them a more consequential metal contributor in composite products. Grape juice, wine, grape seed extract, and grape skin extract each partition grape metals differently; grape seed extract concentrates metal-binding tannins and may carry higher metal loads per gram than juice.

## Mitigation options

### Sourcing levers

Specifying table grape origin from producers with documented soil metal testing and from regions without documented legacy lead arsenate application history reduces the expected Pb and As burden. For raisin products specifically, the concentration effect means that sourcing specification has amplified importance: the same soil-level difference in Pb or As translates to a fivefold larger absolute difference per gram in the dried product.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Washing grapes before drying or juicing reduces surface-deposited metal contamination. For raisin production, washing the fresh grape before drying removes surface Pb and other atmospheric deposits before they are concentrated by moisture loss. The effect magnitude for washing-then-drying is not characterized in the current corpus.

### Formulation levers

In composite food products that include raisins as an ingredient, substituting with lower-metal fruit pieces (apple, pear, lower-risk dried fruits) reduces the metal contribution from the dried fruit fraction if the arsenic or lead burden of the raisin supply is a concern.

### Testing and QC levers

Given the concentration effect in raisins, lot-level ICP-MS testing for Pb, As, and Cd on incoming raisin batches is more productive than testing fresh grapes for most food manufacturing applications. For fresh grape supply chains, testing at the first point of import or first domestic pack-house is the most efficient point of control.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in fresh grapes is 0.10 mg/kg wet weight and for Cd it is 0.050 mg/kg wet weight. For dried grapes (raisins), the applicable limit in the EU food contaminant regulations accounts for the concentration effect by applying limits to the product as sold (which is at raisin moisture content, not fresh grape moisture content); the dry-weight basis distinction is critical when comparing raisin measurements to fresh grape regulatory limits. There are no specific US FDA action levels for metals in fresh or dried grapes.

<!-- BEGIN: hmi-page-references -->
## References

The 8 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
2. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
3. Bora FD, Bunea A, Pop SR, Banita SI, Dusa DS, Chira A, et al. (2022). *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*. Horticulturae. [https://doi.org/10.3390/horticulturae8111034](https://doi.org/10.3390/horticulturae8111034). Peer-reviewed, A-tier. [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing|Source record]]
4. Mania M, Rebeniak M, Chabros E, Orshulyak O, and Postupolski J (2021). *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*. Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene). [https://doi.org/10.32394/rpzh.2021.0188](https://doi.org/10.32394/rpzh.2021.0188). Peer-reviewed, A-tier. [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland|Source record]]
5. Sembratowicz I, Rusinek E, and Ognik K (2010). *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*. Polish Journal of Environmental Studies. Peer-reviewed, A-tier. [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits|Source record]]
6. Rusin M, Domagalska J, Rogala D, Razzaghi M, and Szymala I (2021). *Concentration of cadmium and lead in vegetables and fruits*. Scientific Reports. [https://doi.org/10.1038/s41598-021-91554-z](https://doi.org/10.1038/s41598-021-91554-z). Peer-reviewed, A-tier. [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland|Source record]]
7. Rahim M, Saqib NU, Wahid F, Khan N, and Alrawi LI (2020). *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*. Journal of Physical Science. [https://doi.org/10.21315/jps2020.31.2.5](https://doi.org/10.21315/jps2020.31.2.5). Peer-reviewed, A-tier. [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Source record]]
8. Chen J, Zhang C, Yi L, Duan F, Gu Y, Ge K, et al. (2024). *Design and fabrication of self-calibration colorimetric/fluorescence/SERS tri-modal optical sensor for highly rapid and accurate detection of mercury ions in foods*. Food Chemistry: X. [https://doi.org/10.1016/j.fochx.2024.101958](https://doi.org/10.1016/j.fochx.2024.101958). Peer-reviewed, A-tier. [[sources/chen2024-trimodal-hg-food-sensor|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/chen2024-trimodal-hg-food-sensor\|Chen et al. 2024]]. *Design and fabrication of self-calibration colorimetric/fluorescence/SERS tri-modal optical sensor for highly rapid and accurate detection of mercury ions in foods*, Food Chemistry: X | 2024 | Peer-reviewed | tHg sensor validation using spiked grape matrix; no primary occurrence data — analytical-method context confirming tHg detection in grape at method LOQ range |
| 3 | [[sources/lee2023-south-korea-fresh-fruits-seven-metals\|Lee et al. 2023]]. *Occurrence and health risk assessment of antimony, arsenic, barium, cadmium, chromium, nickel, and lead in fresh fruits consumed in South Korea*, Applied Biological Chemistry | 2023 | Peer-reviewed | KR tAs, Sb, Ba, Cd, Cr, Ni, Pb occurrence in Fresh fruits collected from supermarkets in six South Korean regions, 14 fruit species, April–October 2019 (n=207) |
| 4 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galati County, Romania: 45 from commercial markets, 35 from amateur farmers; collected... (n=80) |
| 5 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 6 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Grapes, seedless, red/green, raw (n=27); detectable concentrations for Ni, U, tAs |
| 7 | [[sources/durdjic2021-lead-isotopes-wine-origin\|Đurđić et al. 2021]]. *Is a Lead Isotope Ratios in Wine Good Marker for Origin Assessment?*, Frontiers in Chemistry | 2021 | Peer-reviewed | RS Pb occurrence in Fifty-nine red wine samples from four Serbian regions — Vojvodina (n=12), Belgrade (n=22), Central Serbia (n=14) and South... (n=59) |
| 8 | [[sources/mania2021-lead-cadmium-arsenic-mercury-tin-fruit-poland\|Mania et al. 2021]]. *The content of lead, cadmium, arsenic, mercury and tin in fruit and their products based on monitoring studies – exposure assessment*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2021 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg, Sn occurrence in Approximately 600 samples of fresh, frozen, dried fruits, fruit preserves and canned fruits collected throughout Poland in 2015... (n=600) |
| 9 | [[sources/rusin2021-vegetables-fruits-cadmium-lead-poland\|Rusin et al. 2021]]. *Concentration of cadmium and lead in vegetables and fruits*, Scientific Reports | 2021 | Peer-reviewed | PL Cd, Pb occurrence in 370 samples drawn from the Polish retail market and analysed under Polish State Sanitary Inspection (n=292 by the... (n=370) |
| 10 | [[sources/afrin2020-heavy-metals-fruits-dhaka\|Afrin 2020]]. *Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City*, M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka | 2020 | Peer-reviewed | BD Pb, Cd, Cr, Ni, Co occurrence in Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop... (n=75) |
| 11 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | PK Cr, Ni, Cd, Pb occurrence in Fruit samples of 11 varieties (apple, apricot, banana, cherry, grapes, guava, lemon, mango, orange, peach, pomegranate) collected from... (n=308) |
| 12 | [[sources/rezaei2020-fruits-markazi-essential-elements\|Rezaei et al. 2020]]. *Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study*, Quality Assurance and Safety of Crops & Foods | 2020 | Peer-reviewed | IR Fe, Cu, Zn, Mn, Cr occurrence in Five fruit types (peach, apple, grape, nectarine, and golden plum) plus paired soil and irrigation-water samples collected from... (n=30) |
| 13 | [[sources/amer2019-egyptian-fruits-heavy-metals\|Amer et al. 2019]]. *Exposure assessment of heavy metal residues in some Egyptian fruits*, Toxicology Reports | 2019 | Peer-reviewed | EG Pb, Cd, Cr, Cu, Ni occurrence in 108 fresh fruit samples (apples, grapes, oranges; 36 per fruit type) purchased from four Egyptian governorates (Cairo, Giza,... (n=108) |
| 14 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
| 15 | [[sources/bora2015-vineyard-wine-heavy-metals-romania\|F-D et al. 2015]]. *Vertical distribution and analysis of micro-, macroelements and heavy metals in the system soil-grapevine-wine in vineyard from North-West Romania*, Chemistry Central Journal | 2015 | Peer-reviewed | RO Pb, Cd, Cu, Zn, Ni, Co occurrence in Three Vitis vinifera cultivars (Feteasca albă, Feteasca regală, Riesling italian) grown in one 4-ha vineyard at Turulung (Satu... (n=3) |
| 16 | [[sources/sembratowicz2010-nitrates-pb-cd-lublin-fruits\|Sembratowicz et al. 2010]]. *Contents of Nitrates (III) and (V), Lead and Cadmium in Select Domestic Fruits*, Polish Journal of Environmental Studies | 2010 | Peer-reviewed | PL Pb, Cd occurrence in Apples, plums, strawberries, raspberries, and white grapes from allotment gardens in Lublin city center and surrounding rural areas,... (n=108) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
| [22134c35a](https://github.com/paleofoundation/heavymetalindex/commit/22134c35a) | 2026-06-23 | correction | Contamination-profile values revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 6 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
