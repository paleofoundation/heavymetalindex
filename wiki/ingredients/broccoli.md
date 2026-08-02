---
title: "Broccoli"
type: ingredient
commodity: broccoli
label: "Broccoli"
aliases: [broccoli]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: boiled-broccoli-edible-portion-wet-weight
    speciation_note: see prose; only positive broccoli-specific Pb is a single Polish farm outlier
  Cd:
    status: populated
    typical_ppb: [6.7, 27.6]
    p95_ppb: 37
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: boiled-broccoli-edible-portion-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: boiled-broccoli-edible-portion-wet-weight
    speciation: total-Hg-only
  Ni:
    status: populated
    typical_ppb: [0, 130]
    p95_ppb: 137
    confidence: high
    n_studies: 3
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: boiled-broccoli-edible-portion-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.7]
    p95_ppb: 2.4
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 9
---

# Broccoli

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: occasional) | OK | 6/10 HMTc analytes, total n=16 | labeled data-gaps: Al, Sn |
| D2 Regional coverage | OK | 6 jurisdictions, top US 25% | — |
| D3 Anthropogenic evidence | GAP | 1 soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 1 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb THIN, Cd CONFIDENT, iAs THIN, tAs THIN, tHg THIN, Ni CONFIDENT, Cr THIN, U THIN | Pb: needs 1 more study(ies); iAs: needs 1 more study(ies); tAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 4/10 populated cells declare a basis token | 6 populated cell(s) lack a basis token: Cd, iAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 41 claims checked, 41 supported; 7 citations, 0 orphan, 4 foreign | 4 foreign citation(s) not naming broccoli: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020, dearing2025-nz-organic-nonorganic-vegetables-cyclone |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Cr, U; pairing 0 paired, 8 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); iAs: THIN, needs 1 more study(ies); tAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 6 populated cell(s) lack a basis token: Cd, iAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Broccoli is a member of the Brassica oleracea species complex, a plant family that includes some of the most studied moderate-to-high cadmium accumulators among common food crops. Brassica species express high-affinity cadmium transporters (in the ZIP/IRT family) that move Cd from the soil solution into root cells and then upward through the xylem to shoot tissues. Broccoli florets, which are the commercially harvested portion, receive metals translocated from roots and stems, and can accumulate Cd at concentrations meaningfully above those in low-accumulating crops such as corn or potato grown in the same soil. Lead accumulation in broccoli follows a different mechanism: atmospheric deposition of particulate Pb on the broad, rough surface of broccoli florets is a significant uptake route, supplementing the smaller root-absorption pathway. The textured, open floreted head structure of broccoli provides an effective surface area for trapping airborne particulates, making it more susceptible to surface-deposited lead than smooth-surfaced vegetables. Nickel uptake through soil solution is also measurable in brassica species, consistent with the family's generally elevated trace-metal absorption capacity.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/kiczorowski2022-fermented-vegetables-metals\|2]] |
| Cd | n=3 | 6.7–27.6 | high | [[sources/chiutula2025-wastewater-vegetables-malawi\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/codex-cxs-193-1995\|3]] |
| iAs | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/codex-cxs-193-1995\|2]] |
| tAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=3 | 0–130 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/imongben2026-kaduna-vegetables-hra\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.7 | high | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, total-mercury, and chromium cells were resynthesized on 2026-06-11 on a boiled broccoli edible-portion wet-weight basis, the form in which FDA Total Diet Study Food 113 ("Broccoli, fresh/frozen, boiled") reports and a reasonable proxy for the cooked broccoli that enters mixed and infant-food products. Values below the analytical limit of detection or quantification are treated as left-censored bounds, not as measured zeros. The earlier profile reported all four of these analytes at typical and 95th-percentile values of zero at high confidence; those figures were an artifact of the FDA composite in which every sample (or all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros. The resynthesis replaces the literal zeros with the honest FDA censored floor and, where a broccoli-specific positive measurement exists, records it explicitly as a stratified value rather than folding it into the headline distribution.

Lead rests on two broccoli-specific contributors and is held at low confidence. The FDA Total Diet Study composite is fully censored: all 27 boiled-broccoli samples fell below the 4 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]), so the honest floor is the 4 µg/kg reporting limit expressed as a left-censored bound, not a measured zero. The only positive broccoli-specific lead measurement in the corpus is a single Polish farm fermentation study ([[sources/kiczorowski2022-fermented-vegetables-metals|Kiczorowski et al. 2022]]), which reports raw broccoli lead at 4.39 µg/g fresh matter (4390 µg/kg), falling to 3.78 µg/g (3780 µg/kg) after fermentation. That raw value is roughly forty-four times the EU 100 µg/kg maximum level for vegetables and is uniformly elevated across every vegetable in that study (4.28 to 8.28 µg/g fresh matter), a pattern consistent with a high-deposition growing environment or a methodological offset rather than typical retail broccoli; it is therefore carried as a stratified outlier and is not used to set the headline typical or 95th-percentile. Because the only same-basis FDA evidence is fully censored and the single positive value is an extreme outlier, the lead typical is recorded as a left-censored bound ([0, null]) with no published 95th-percentile.

Total arsenic and total mercury each rest on the FDA censored floor alone. The FDA composite reports total arsenic below the 3 µg/kg reporting limit and total mercury below the 1 µg/kg reporting limit across all 27 boiled-broccoli samples ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); no broccoli-specific positive value for either analyte exists in the corpus. The New Zealand Hawke's Bay survey corroborates the near-absence of mercury, reporting total mercury below its 0.01 mg/kg limit of detection in all 153 vegetable composites (Brassica included), though it carries no broccoli-resolved row ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]). Each of these two cells is therefore recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no 95th-percentile, at low confidence and a single contributor. Total arsenic is held distinct from inorganic arsenic, which remains its own low-confidence cell and is not derived from total arsenic; total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium only at low confidence; no broccoli hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The FDA boiled-broccoli composite is censored in 26 of 27 samples below the 50 µg/kg reporting limit, with a single above-limit composite reaching 300 µg/kg ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]); the distribution 90th and 95th percentiles remain below the reporting limit, so the cell is recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and the lone 300 µg/kg composite is noted as the distribution maximum rather than promoted to a typical-upper or 95th-percentile value. The only other broccoli-specific chromium measurement is a Nigerian market survey reporting 6.3 mg/kg (6300 µg/kg) on a dry-weight basis in produce irrigated with River Kaduna water that receives untreated refinery, textile, and fertilizer-industry effluent ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]]); that value is a dry-weight industrial-irrigation outlier and is carried in the stratification below, not folded into the wet-weight headline distribution.

Brassica-broad and wastewater-irrigated values are stratified separately and are excluded from the headline broccoli percentiles. A Malawian study of Brassica vegetables (Brassica rapa, Brassica napus, Brassica rapa subsp. chinensis, not broccoli specifically) irrigated with treated wastewater effluent reports every species above 0.3 mg/kg lead, with Brassica rapa stems reaching 4.09 mg/kg, and total chromium in 64 percent of samples above 2.3 mg/kg with Brassica napus stems at 4.20 mg/kg ([[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]]); the associated health-risk indices far exceed unity. These are wastewater-irrigation contamination-transfer values on a related brassica genus, not edible-floret retail broccoli, and they bound the upper tail of what wastewater-irrigated brassica can carry rather than the central tendency of commercial broccoli.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 113, "Broccoli, fresh/frozen, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Broccoli, fresh/frozen, boiled" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 3.9 | 6.74 | 11 | 27.6 | 37 | 84 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 300 | in profile |
| Ni | 27 | 0 | 0 | 58 | 130 | 137 | 170 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 1.68 | 2.36 | 4 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study reports Cd in boiled broccoli ranging from 3.9 to 84 ppb (median 11 ppb, p90 27.6 ppb, n=27), with substantial skew toward low values and occasional high outliers [[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]. Nickel ranged from 0 to 170 ppb (median 58 ppb, p90 130 ppb). Lead, total arsenic, and total mercury were below their reporting limits across the full distribution in the TDS dataset (lead below 4 µg/kg in all 27 samples, total arsenic below 3 µg/kg in all 27, total mercury below 1 µg/kg in all 27); these are left-censored bounds rather than measured zeros, so they constrain the boiled-broccoli metal burden from above. Total chromium was below the 50 µg/kg reporting limit in 26 of 27 samples with a single above-limit composite at 300 µg/kg. The only positive broccoli-specific lead value in the corpus is a Polish farm fermentation study reporting raw broccoli at 4.39 µg/g fresh matter, a uniformly elevated outlier far above the EU vegetable limit that is stratified rather than pooled into the headline range ([[sources/kiczorowski2022-fermented-vegetables-metals|Kiczorowski et al. 2022]]). The Chiutula et al. 2025 study found measurably elevated Cd, Cr, and Pb in Brassica vegetables (not broccoli specifically) irrigated with wastewater effluent in Malawi [[sources/chiutula2025-wastewater-vegetables-malawi|Chiutula et al. 2025]], illustrating that irrigation-water quality is a major determinant of the upper-tail metal range in brassica crops beyond the TDS background values; the Nigerian Kaduna survey reports a comparably elevated dry-weight broccoli chromium of 6.3 mg/kg under industrial-effluent irrigation ([[sources/imongben2026-kaduna-vegetables-hra|Imongben et al. 2026]]). Varieties bred for higher glucosinolate content do not consistently differ from standard varieties in metal accumulation, though this remains understudied. The Codex Alimentarius international Cd maximum level for vegetables (0.05 mg/kg for most vegetables, with some variation) provides a ceiling against which the TDS p90 of 27.6 ppb falls comfortably [[sources/codex-cxs-193-1995|Codex 1995]].

## Processing effects

Washing broccoli before cooking removes a substantial fraction of the surface-deposited particulate Pb. Studies on brassica vegetables generally find that surface washing with water reduces externally deposited Pb by 30 to 70 percent, though this estimate comes from leafy vegetable data and the reduction in broccoli florets specifically is not precisely quantified in the current corpus. Boiling, as in the FDA TDS preparation method, results in some leaching of water-soluble metals into the cooking water; blanching and discarding water can further reduce Cd and Ni in the edible cooked product, though the magnitude for broccoli specifically requires additional study. Freezing does not alter metal concentrations. Industrial processing for frozen broccoli (blanching followed by freezing) may reduce surface-deposited Pb through the blanching step but effects on intrinsic (translocated) Cd and Ni are minimal.

## Ingredient-derivative risk

When broccoli is used as a component in baby food purees, soups, or stir-fry mixes, its Cd and Ni contribution is carried into those products in proportion to the broccoli inclusion rate. Broccoli-heavy baby food formulations (single-ingredient broccoli purees or broccoli-dominant blends) represent the highest-exposure scenario for this commodity, particularly for infants consuming multiple servings per day. Broccoli powder or concentrate, used in supplements, green-powder blends, and functional foods, concentrates metals in proportion to the moisture reduction achieved; a 10:1 concentrate will carry approximately ten times the ppb-basis concentration of fresh broccoli. Dehydrated broccoli in snack products follows a similar logic. These derivative forms are not separately profiled in the current corpus but warrant attention when inclusion rates are significant.

## Mitigation options

### Sourcing levers

Broccoli grown in certified low-Cd-soil regions, or with documented soil Cd below 0.3 mg/kg (the threshold below which Cd accumulation in brassica crops tends to remain well within regulatory limits), is the strongest sourcing lever. Avoiding broccoli from fields irrigated with wastewater or receiving Cd-containing phosphate fertilizers reduces background contamination. For surface Pb, sourcing from areas distant from high-traffic roads and industrial facilities reduces atmospheric particulate deposition.

### Agronomic levers

Liming to maintain soil pH above 6.5 reduces Cd bioavailability in the soil solution and thereby reduces plant uptake. Cultivar selection within broccoli has not been developed specifically for low Cd, though variation across varieties exists. Drip irrigation rather than overhead spray reduces deposition of contaminated water onto floret surfaces.

### Processing levers

Pre-harvest: no direct intervention at the field level beyond agronomic levers above. Post-harvest: washing with clean water, particularly with gentle agitation, is the most practical processing lever for surface-deposited Pb. Blanching (brief immersion in boiling water followed by draining) removes a portion of water-soluble Cd and Ni with the blanching water; this step is already standard in frozen-broccoli industrial processing. Discarding blanching water rather than incorporating it into sauces or purees captures the benefit.

### Formulation levers

When broccoli is used alongside lower-metal vegetables in mixed-vegetable products, the overall metal load is diluted in proportion to the broccoli fraction. Substituting lower-Cd vegetables for broccoli in formulations targeting infants or frequent consumers is a formulation-level risk-reduction option.

_No quantified data on formulation dilution effects in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS for Cd and Ni on incoming fresh or frozen broccoli, with documented acceptance criteria, provides the most direct quality control. Given the geographic and growing-season variability evident in the TDS data, a rolling lot-acceptance program is more informative than annual spot checks.

### Packaging and storage levers

Packaging and storage conditions are not a material driver of heavy metal load in fresh or frozen broccoli.

## Regulatory limits that apply

The EU [[regulations/eu2023-contaminants-maximum-levels]] sets a maximum level for Cd in vegetables (excluding leafy vegetables, fresh herbs, and fungi) of 0.050 mg/kg (50 ppb) wet weight; broccoli falls under this limit as a brassica vegetable. For Pb, the EU limit for vegetables is 0.10 mg/kg (100 ppb) wet weight. The Codex Alimentarius [[sources/codex-cxs-193-1995|Codex 1995]] sets a Cd maximum level of 0.05 mg/kg for vegetables, consistent with EU limits. The FDA does not currently impose specific action levels for Cd or Pb in broccoli for general consumers. Under FDA Closer to Zero [[regulations/fda-closer-to-zero]], action levels for Pb in foods for young children are being developed across vegetable categories; broccoli purees intended for infant consumption would fall within that scope.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/kiczorowski2022-fermented-vegetables-metals|Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition]]<span class="hmi-ref-meta">Kiczorowski P, Kiczorowska B, Samolinska W, Szmigielski M, and Winiarska-Mieczan A · Scientific Reports · 2022 · [doi.org/10.1038/s41598-022-17782-z](https://doi.org/10.1038/s41598-022-17782-z)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/imongben2026-kaduna-vegetables-hra|Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria]]<span class="hmi-ref-meta">Imongben CO, Tomori WB, Umoru PE, and Oyerinde WA · World Nutrition · 2026 · [doi.org/10.26596/wn.20261718-18](https://doi.org/10.26596/wn.20261718-18)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/chiutula2025-wastewater-vegetables-malawi|Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi]]<span class="hmi-ref-meta">Chiutula C, Mtewa AG, Abraham A, Mvula RLS, Maluwa A, Eregno FE, et al. · International Journal of Environmental Research and Public Health · 2025 · [doi.org/10.3390/ijerph22111614](https://doi.org/10.3390/ijerph22111614)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/barber2025-baby-food-elements-us\|Barber et al. 2025]]. *Toxic elements in baby and young children's foods in the US and correlation to ingredients*, Food Additives & Contaminants: Part B | 2025 | Peer-reviewed | US tAs, iAs, Cd, tHg, MeHg, Pb, Tl occurrence in Non-targeted 2023 FDA convenience survey of 566 foods intended for babies, young children, pregnant women, and nursing mothers:... (n=566) |
| 3 | [[sources/chiutula2025-wastewater-vegetables-malawi\|Chiutula et al. 2025]]. *Assessment of Heavy Metal Accumulation in Wastewater–Receiving Soil–Exotic and Indigenous Vegetable Systems and Its Potential Health Risks: A Case Study from Blantyre, Malawi*, International Journal of Environmental Research and Public Health | 2025 | Peer-reviewed | Measured Cd, Cr, and Pb in Brassica and indigenous leafy vegetables irrigated with WWTP effluent in Blantyre, Malawi; wastewater-irrigation contamination transfer context for brassica crops |
| 4 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 5 | [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 6 | [[sources/wu2024-jiaozuo-china-cereals-vegetables-legumes-heavy-metals\|Wu 2024]]. *Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment*, International Journal of Natural Resources and Environmental Studies, 2(1): 180–202 | 2024 | Peer-reviewed | CN Pb, Cd, Cr, tAs, tHg, Ni, Cu, Zn occurrence in 244 retail food samples purchased from 13 sampling points (6 supermarkets, 6 farmers' markets, 1 wholesale market) across... (n=244) |
| 7 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in boiled broccoli (TDS Food 113; n=27 per analyte) |
| 8 | [[sources/kiczorowski2022-fermented-vegetables-metals\|Kiczorowski et al. 2022]]. *Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition*, Scientific Reports | 2022 | Peer-reviewed | PL Pb, Cd occurrence in Raw and fermented broccoli, carrot, cucumber, pepper, and red beet, four repetitions per vegetable combination (n=40) |
| 9 | [[sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals\|U.S. House of Representatives, 2021]]. *Baby Foods Are Tainted with Dangerous Levels of Arsenic, Lead, Cadmium, and Mercury*, Staff Report | 2021 | Gray literature | US iAs, tAs, Pb, Cd, tHg occurrence in Internal company testing records (ingredient pre-shipment tests and finished-product tests) subpoenaed from seven major US baby-food manufacturers covering... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 1 source added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
