---
title: "Onions"
type: ingredient
commodity: onions
label: "Onions"
aliases: [onion, garlic, allium-vegetables]
category: vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 16]
    p95_ppb: 76
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-06-11
    basis: raw-onion-bulb-wet-weight
  Cd:
    status: populated
    typical_ppb: [2.9, 13.8]
    p95_ppb: 20.6
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0, 8.6]
    p95_ppb: 10.3
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 1
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-onion-bulb-wet-weight
    speciation: total-Hg-only; not derived from MeHg
  Ni:
    status: populated
    typical_ppb: [0, 58.6]
    p95_ppb: 85
    confidence: medium
    n_studies: 6
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
    typical_ppb: [0, 34]
    p95_ppb: 60
    confidence: low
    n_studies: 4
    last_reviewed: 2026-06-11
    basis: raw-onion-bulb-wet-weight
    basis_note: "Headline values are native wet-weight, anchored on the only directly-measured wet-weight onion-bulb Cr in the corpus (Loutfy 2012, Egypt). Dry-weight onion-bulb anchors (Saleem 2025, Stasinos 2014 Latvian/Spanish allotment) are moisture-converted to wet-weight (wet ~= dry x 0.11 at ~89% onion moisture) and corroborate at a lower level; they are not presented as wet-weight."
    speciation: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
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
updated: 2026-06-11
sources: 23
---

# Onions

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: common) | OK | 5/10 HMTc analytes, total n=28 | labeled data-gaps: iAs, Al, Sn |
| D2 Regional coverage | OK | 29 jurisdictions, top IR 21% | — |
| D3 Anthropogenic evidence | GAP | 4 soil + 1 irrigation-water; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 4 upstream source(s) | drivers[] empty |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs POOLABLE, tHg THIN, Ni POOLABLE, Cr THIN | tHg: needs 1 more study(ies); Cr: THIN |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 3/10 populated cells declare a basis token | 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| D8 Provenance integrity | GAP | 55 claims checked, 55 supported; 13 citations, 0 orphan, 4 foreign | 4 foreign citation(s) not naming onions: fsa2016-infant-food-formula-metals-survey, fda2022-tds-elements-fy2018-fy2020, dearing2025-nz-organic-nonorganic-vegetables-cyclone |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 2 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr; pairing 0 paired, 6 single, 0 unpaired | tHg: THIN, needs 1 more study(ies); Cr: THIN; basis: 7 populated cell(s) lack a basis token: Cd, iAs, tAs, Ni, Al, Sn, U |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Onions (Allium cepa) are bulb vegetables grown underground, but their metal accumulation pattern differs substantially from root vegetables such as carrots and potatoes. Onion bulbs are modified leaf bases rather than storage roots, and they lack some of the active metal-sequestration mechanisms that concentrate Cd and Pb in root tissues of other vegetables. Cadmium uptake in onions follows the general soil-to-plant pathway via root absorption, but the transfer factor from soil to bulb is lower than in dedicated root vegetables; onion bulbs do not appear to be hyperaccumulators of Cd under typical agricultural conditions. Lead accumulates in onion bulb tissue at low concentrations because Pb transfer from soil to above-ground plant parts is inefficient, and the bulb's protected position within the soil and outer scales provides some barrier from surface Pb deposition. Nickel is detectable in onion tissue; the FDA TDS FY2018-FY2020 data [[sources/fda2022-tds-elements-fy2018-fy2020]] show Ni in the 0 to 100 ppb range (max 100 ppb) in raw mature onion (n=27). Sulfur compounds distinctive to Allium vegetables may influence metal speciation and binding in tissue, though specific mechanistic data on this interaction are limited in the current corpus. Total arsenic is detectable at low concentrations (median approximately 4 ppb in FDA TDS data), with inorganic speciation expected to represent a portion of that total; the level is substantially below arsenic concentrations in rice or seafood.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 0–16 | medium | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/rempelos2023-vegetable-organic-conventional-metals\|3]] |
| Cd | n=7 | 2.9–13.8 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 0–8.6 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| tHg | n=2 | 0–1 | low | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Ni | n=6 | 0–58.6 | medium | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|1]], [[sources/owusuadoma2024-ghana-lettuce-metals\|2]], [[sources/adhikari2024-leafy-vegetables-johannesburg\|3]] |
| Al | data gap | — | — | — |
| Cr | n=4 | 0–34 | low | [[sources/loutfy2012-ismailia-foodstuffs-metals\|1]], [[sources/saleem2025-locally-grown-vegetables-north-dakota\|2]], [[sources/stasinos2014-heavy-metals-tubers-review\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw onion-bulb wet-weight basis, the form in which the fresh vegetable enters the ingredient supply chain and the basis FDA Total Diet Study Food 128 ("Onion, mature, raw") reports. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead, total mercury, chromium, and uranium at typical and 95th-percentile values of zero; those figures were an artifact of the FDA Total Diet Study composites for raw onion, in which every sample (or all but one) fell below the reporting limit and the reported below-limit results were pooled as literal zeros. FDA reported lead below the 4 µg/kg reporting limit in 26 of 27 composites with a single detect to 7.4 µg/kg, total mercury below the 1 µg/kg reporting limit in all 27, chromium below the 50 µg/kg reporting limit in all 27, and uranium below the 1 µg/kg reporting limit in all 27 ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and recovers the upper distribution, where primary onion-named occurrence literature supports it.

Lead rests on onion-specific retail and field surveys rather than on broad-vegetable aggregates. The largest is a Hamadan, Iran market-basket survey of fifty onion composites ([[sources/heshmati2020-iran-vegetables-cereals-pb-cd|Heshmati et al. 2020]]), in which onion lead averaged 16 µg/kg fresh weight (range 2 to 76 µg/kg), with every composite below the EU 100 µg/kg maximum level. A North Dakota farmers'-market survey ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]], n=7 onion) reports onion lead at 14 µg/kg fresh weight, and the long-term UK Nafferton field trial ([[sources/rempelos2023-vegetable-organic-conventional-metals|Rempelos et al. 2023]]) reports onion-bulb lead main-effect means of 7 to 14.5 µg/kg fresh weight. The pooled lead typical of [0, 16] takes the FDA 4 µg/kg reporting limit as the censored low bound and the Heshmati clean-retail mean as the upper central; the 95th-percentile of 76 µg/kg is the top of the Heshmati clean-retail range, the highest value in the ordered clean pooled set and still below the EU maximum level. An Isfahan, Iran survey reports a markedly higher onion lead 95% upper confidence limit of 250 µg/kg ([[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals|Salehipour et al. 2015]], n=8); that figure is an upper-confidence-limit statistic rather than a mean and is treated as an upper-tail regional anchor, not folded into the central estimate. Lead is held at medium confidence: five distinct onion-named contributors agree on a low-tens-of-ppb central, against a censored FDA floor.

Total mercury is recovered at low confidence from a single onion-named positive measurement against censored corroboration. The North Dakota survey measured onion mercury by direct mercury analyzer (EPA 7473) at 1.0 µg/kg fresh weight ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]]), the only positive onion-named total-mercury value in the corpus. FDA reported onion mercury below the 1 µg/kg reporting limit across all 27 composites, and a 153-sample New Zealand market-garden survey that includes Allium reported mercury below its 10 µg/kg limit of detection in every sample ([[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Dearing et al. 2025]]). The total-mercury typical of [0, 1] spans the FDA censored floor to the single Saleem onion central, and the 95th-percentile of 1 µg/kg reflects that no onion-named value above approximately 1 µg/kg exists in the corpus. Total mercury is held distinct from methylmercury and is not derived from it; the prior high-confidence zero is corrected to an honest low non-zero value bounded by two censored surveys.

Chromium is reported as total chromium only at low confidence; no onion hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. This cell is held on the page's native raw onion-bulb wet-weight basis, and the headline values are anchored on the only directly-measured wet-weight onion-bulb chromium in the corpus. An Ismailia, Egypt market-basket survey ([[sources/loutfy2012-ismailia-foodstuffs-metals|Loutfy et al. 2012]], n=13 onion pools) reports onion total chromium at a mean of 34.3 µg/kg wet weight, range 18.7 to 59.5 µg/kg wet weight; the authors report cadmium, lead, and chromium explicitly in µg/kg wet weight. FDA reported onion chromium below the 50 µg/kg reporting limit across all 27 composites of TDS raw mature onion, a wet-weight censored floor on the same basis. The chromium typical of [0, 34] takes the FDA censored floor as the left-censored low bound and the Loutfy wet-weight mean as the upper central; the 95th-percentile of 60 µg/kg is the top of the Loutfy directly-measured wet-weight range, the highest value in the ordered clean pooled set on the page's native basis.

The remaining onion-bulb chromium anchors in the corpus are reported on a dry-weight basis and are not presented as wet-weight. The North Dakota farmers'-market survey reports onion total chromium at 32 µg/kg dry weight ([[sources/saleem2025-locally-grown-vegetables-north-dakota|Saleem et al. 2025]], all concentrations µg/g dry weight per its methods), and the Stasinos review compiles Spanish allotment onions at 30 to 36 µg/kg and a Latvian allotment-garden onion at 90 µg/kg, both dry weight ([[sources/stasinos2014-heavy-metals-tubers-review|Stasinos et al. 2014]], citing Bakkali et al. 2012 and Vincevica-Gaile et al. 2013). Converted to the row's native wet-weight basis at the corpus-stated onion moisture of approximately 89 percent (wet is approximately dry times 0.11), these become roughly 3.5 µg/kg (Saleem), 3.3 to 4.0 µg/kg (Spanish), and 9.9 µg/kg (Latvian) wet weight. They corroborate the Loutfy wet-weight anchor at the low end and are not folded into the central estimate at their dry-weight magnitude. The prior synthesis of this cell mis-stated these dry-weight values (a typical upper of 32 and a 95th-percentile of 90) as wet-weight on the page's native basis; that mis-attribution overstated the wet-weight distribution by an order of magnitude and is corrected here. The Greek Thiva-basin onions at 2.1 to 4.6 mg/kg dry weight and Asopos-basin onion bulbs subject to direct injection of Cr(VI)-rich industrial waste (Stasinos review, citing Economou-Eliopoulos) are industrial-contamination outliers and are stratified in the ranges section rather than folded into the central estimate.

Uranium is recorded as a reviewed data gap: the only onion uranium measurement in the corpus is the fully censored FDA Total Diet Study cell (all 27 composites below the 1 µg/kg reporting limit), and no primary onion-named source reports an extractable quantitative uranium value, so no distribution is published (the rice-uranium precedent). The cell is held as a reviewed gap, not as a measured zero.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

The machine-readable contamination profile is `in_progress`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 128, "Onion, mature, raw." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Onion, mature, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 2.3 | 2.94 | 5.6 | 13.8 | 20.6 | 26 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 58.6 | 85 | 100 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 7.4 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 4.2 | 8.6 | 10.28 | 15 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset [[sources/fda2022-tds-elements-fy2018-fy2020]] for raw mature onion (n=27) shows Cd ranging from 2.3 to 26 ppb (p90 approximately 14 ppb, max 26 ppb) and Ni from 0 to 100 ppb (p90 approximately 59 ppb, max 100 ppb), providing a US retail baseline; lead, total mercury, chromium, and uranium were below their reporting limits across essentially the full distribution in that dataset and are carried as left-censored floors rather than measured zeros. For lead, the clean retail and field anchors cluster in the low tens of ppb: onion lead averaged 16 ppb fresh weight (range 2 to 76 ppb) across fifty Iranian market composites [[sources/heshmati2020-iran-vegetables-cereals-pb-cd]], 14 ppb in a North Dakota farmers'-market survey [[sources/saleem2025-locally-grown-vegetables-north-dakota]], and 7 to 14.5 ppb in long-term UK field trials [[sources/rempelos2023-vegetable-organic-conventional-metals]]. For total chromium, the only directly-measured wet-weight onion-bulb anchor is an Ismailia, Egypt market survey at a mean of 34 ppb wet weight (range 19 to 60 ppb) [[sources/loutfy2012-ismailia-foodstuffs-metals]]; the other onion-named anchors are dry-weight (32 ppb in the North Dakota survey, 30 to 36 ppb in Spanish allotment onions, and 90 ppb in a Latvian allotment onion) [[sources/saleem2025-locally-grown-vegetables-north-dakota]] [[sources/stasinos2014-heavy-metals-tubers-review]], which convert to roughly 3 to 10 ppb on a wet-weight basis at approximately 89 percent onion moisture and are not comparable to the wet-weight headline at their dry-weight magnitude.

Mining, industrial, and wastewater-irrigated onion contexts sit well above these retail baselines and are stratified out of the headline values. The Stasinos review compiles Asopos-basin onion bulbs with site-specific lead from 2.5 mg/kg (Vourinos) to 76 mg/kg (Holargos, suburban Athens) and Thiva-basin onions with dry-weight total chromium of 2.1 to 4.6 mg/kg, the latter attributed to direct injection of Cr(VI)-rich industrial wastes [[sources/stasinos2014-heavy-metals-tubers-review]]. A synchrotron study of leek (Allium tenuissimum) grown in mine soil at 787 mg/kg soil lead and additionally spiked with lead nitrate solution is a mechanistic speciation experiment, not a food-occurrence measurement, and is excluded from the occurrence distribution entirely [[sources/sun2023-pb-leek-speciation-xanes]]. Ghanaian spring onion from anthropogenic activity sites (traffic corridors, sewage-treatment farms) likewise carries elevated nickel and chromium that reflect site contamination rather than typical retail produce [[sources/owusuadoma2024-ghana-lettuce-metals]] [[sources/ametepey2018-ghana-vegetables-heavy-metals]]. Geographic variation in Cd is primarily driven by soil Cd levels and pH; regions with history of phosphate fertilizer application on onion-growing soils may show elevated Cd relative to low-contamination baseline soils. Onion variety (yellow, white, red, spring onion, shallot) may show modest differences in metal concentrations, but cross-variety comparison data are not yet available in the current corpus to quantify this dimension.

## Processing effects

Removal of dry outer scales during commercial processing and home preparation eliminates the outer tissue that may carry surface Pb deposition from atmospheric particulates. Cooking onions by boiling, sautéing, or roasting does not materially reduce total Cd or Pb concentrations on a dry weight basis; moisture loss during cooking concentrates analytes per unit of wet weight. Dehydrated or powdered onion (produced by hot-air drying or spray-drying) will show higher ppb values than fresh onion on a wet weight basis in proportion to the degree of moisture removal. Pickling in acidic brine may leach some metals into the brine, but quantitative data on this effect for onions are not available in the current corpus.

## Ingredient-derivative risk

Dehydrated onion flakes, onion powder, and granulated onion are the main derivatives with materially different metal profiles relative to fresh onion, due to moisture removal concentrating all analytes. Onion oil and oleoresin (flavoring extracts) carry negligible metals because the extraction process is selective for volatile and lipophilic compounds rather than metal-containing hydrophilic fractions. These derivatives appear in ingredient lists of many processed foods and seasoning blends; their Cd and Pb concentrations on a wet-weight-equivalent basis should be compared on a moisture-adjusted rather than per-gram basis against regulatory limits for the fresh commodity.

## Mitigation options

### Sourcing levers

Preferring onions from growing regions with documented low soil Cd and appropriate soil pH management (higher pH reduces Cd bioavailability) is the primary upstream control. For dehydrated onion applications, requesting occurrence data from suppliers on a dry-weight basis with moisture content specified enables proper comparison against regulatory limits.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Removal of outer dry scales before processing eliminates the highest-exposure tissue layer. For dehydrated products, expressing analytical results on a fresh-equivalent basis with moisture content documented prevents overestimation of risk relative to the fresh commodity.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation (EU) 2023/915 [[regulations/eu2023-contaminants-maximum-levels]] sets maximum levels of 0.10 mg/kg for Pb and 0.050 mg/kg for Cd in fresh vegetables on a wet weight basis, applicable to onions. The Codex General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) [[sources/codex-cxs-193-1995]] sets Cd and Pb maximum levels for vegetables that include onion. No specific iAs or tHg regulatory limit applies to fresh onion under EU or Codex frameworks. See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/codex-cadmium-mls]] for applicable regulatory reference pages.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/heshmati2020-iran-vegetables-cereals-pb-cd|Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran]]<span class="hmi-ref-meta">Ali Heshmati, Fereshteh Mehri, Javad Karami-Momtaz, and Amin Mousavi Khaneghah · Journal of Food Protection 83(1):101-107 · 2020 · [doi.org/10.4315/0362-028X.JFP-19-312](https://doi.org/10.4315/0362-028X.JFP-19-312)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/saleem2025-locally-grown-vegetables-north-dakota|Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables]]<span class="hmi-ref-meta">Saleem M, Wang Y, Pierce D, Sens DA, Somji S, and Garrett SH · Foods · 2025 · [doi.org/10.3390/foods14132264](https://doi.org/10.3390/foods14132264)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/rempelos2023-vegetable-organic-conventional-metals|Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials]]<span class="hmi-ref-meta">Leonidas Rempelos, Marcin Baranski, Enas Khalid Sufar, Jenny Gilroy, Peter Shotton, Halima Leifert, et al. · Agronomy · 2023 · [doi.org/10.3390/agronomy13051225](https://doi.org/10.3390/agronomy13051225)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals|Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran]]<span class="hmi-ref-meta">Mitra Salehipour, Hadi Ghorbani, Hossein Kheirabadi, and Majid Afyuni · Human and Ecological Risk Assessment: An International Journal · 2015 · [doi.org/10.1080/10807039.2014.1002292](https://doi.org/10.1080/10807039.2014.1002292)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/dearing2025-nz-organic-nonorganic-vegetables-cyclone|Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis]]<span class="hmi-ref-meta">Dearing C, Ye Z, and Robertshaw G · F1000Research · 2025 · [doi.org/10.12688/f1000research.175538.1](https://doi.org/10.12688/f1000research.175538.1)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/loutfy2012-ismailia-foodstuffs-metals|Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt]]<span class="hmi-ref-meta">Loutfy N, Mentler A, Shoeab M, Ahmed MT, and Fuerhacker M · Toxicological & Environmental Chemistry · 2012 · [doi.org/10.1080/02772248.2011.638445](https://doi.org/10.1080/02772248.2011.638445)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/stasinos2014-heavy-metals-tubers-review|The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review]]<span class="hmi-ref-meta">Stasinos S, Nasopoulou C, Tsikrika C, and Zabetakis I · Journal of Food Science · 2014 · [doi.org/10.1111/1750-3841.12433](https://doi.org/10.1111/1750-3841.12433)</span><span class="hmi-ref-tag">Review</span>
10. [[sources/sun2023-pb-leek-speciation-xanes|Pb speciation and elemental distribution in leeks by micro X-ray fluorescence and X-ray absorption near-edge structure]]<span class="hmi-ref-meta">Sun J, Yang Y, and Luo L · Journal of Synchrotron Radiation · 2023 · [doi.org/10.1107/s1600577523006616](https://doi.org/10.1107/s1600577523006616)</span><span class="hmi-ref-tag">Review</span>
11. [[sources/owusuadoma2024-ghana-lettuce-metals|Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana]]<span class="hmi-ref-meta">Owusu Adoma M, Nyarko G, Boateng A, and Darko G · Environmental Health Insights · 2024 · [doi.org/10.1177/11786302241285737](https://doi.org/10.1177/11786302241285737)</span><span class="hmi-ref-tag">Review</span>
12. [[sources/ametepey2018-ghana-vegetables-heavy-metals|Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana]]<span class="hmi-ref-meta">Ametepey ST, Cobbina SJ, Akpabey FJ, Duwiejua AB, and Atule AA · International Journal of Food Contamination · 2018 · [doi.org/10.1186/s40550-018-0067-0](https://doi.org/10.1186/s40550-018-0067-0)</span><span class="hmi-ref-tag">Review</span>
13. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/dearing2025-hawkes-bay-organic-nonorganic-vegetables\|Dearing et al. 2025]]. *Assessment of Heavy Metals in Organic and Non-Organic Vegetables Post Severe Tropical Cyclone Gabrielle: A cross-sectional comparative analysis*, F1000Research | 2025 | Peer-reviewed | NZ Cd, Pb, tAs, Ni, Cr, Tl, tHg occurrence in 153 composite representative samples (combined from 736 individual vegetables) sourced from 14 market gardens across 10 growing sites... (n=153) |
| 2 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 3 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 4 | [[sources/adhikari2024-leafy-vegetables-johannesburg\|Adhikari et al. 2024]]. *Concentrations and health risks of selected elements in leafy vegetables: a comparison between roadside open-air markets and large stores in Johannesburg, South Africa* | 2024 | Peer-reviewed | ZA Al, As, Cd, Co, Cr, Cu, Hg, Ni, Pb, Zn occurrence in Composite leafy vegetable samples from roadside open-air markets (unwashed and washed) and large stores (supermarkets, vegetable markets), Johannesburg,... (n=20) |
| 5 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 6 | [[sources/malone2024-community-garden-soils-us\|Malone et al. 2024]]. *Trace Metal Contamination in Community Garden Soils across the United States*, Sustainability | 2024 | Review | US Pb, tAs, Cd, Zn occurrence in Integrative literature review of 52 peer-reviewed articles on trace metal (Pb, As, Cd, Zn) contamination in US urban... |
| 7 | [[sources/owusuadoma2024-ghana-lettuce-metals\|Owusu et al. 2024]]. *Assessment of Heavy Metal Contamination in Lettuce and Spring Onion Cultivated at Anthropogenic Activity Sites in the Kumasi Metropolis, Ghana*, Environmental Health Insights | 2024 | Peer-reviewed | GH Pb, Cr, Ni, Cu, Zn, Fe occurrence in Lettuce and spring onion from 6 anthropogenic activity sites in Kumasi Metropolis, Ghana (BSGS = Buokrom Second Grade... (n=90) |
| 8 | [[sources/rossini-oliva2024-urban-garden-vegetables-spain\|Rossini-Oliva et al. 2024]]. *Is it healthy urban agriculture? Human exposure to potentially toxic elements in urban gardens from Andalusia, Spain*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | ES As, Cd, Pb, Ni, Cr, Cu, Co, Ba, B, Mo, Zn occurrence in Edible vegetables and topsoils from urban gardens in Seville, Cordoba, Huelva, and Riotinto mining area, Andalusia, Spain; 2021–2023 (n=282) |
| 9 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | IR Pb, Cd occurrence in Eight vegetable types (parsley, spinach, basil, tomatoes, cucumbers, potatoes, onions, beans) from Babol, Mazandaran Province, northern Iran; 4... (n=32) |
| 10 | [[sources/bambara2023-loumbila-vegetables-heavy-metals\|Luc et al. 2023]]. *Evaluation of the Metallic Contamination of Market Garden Products around the Loumbila Dam*, Open Journal of Applied Sciences | 2023 | Peer-reviewed | BF Cu, Ni, Zn, Cr, Pb occurrence in Market-garden vegetables around Loumbila Dam, Burkina Faso |
| 11 | [[sources/rempelos2023-vegetable-organic-conventional-metals\|Rempelos et al. 2023]]. *Effect of Climatic Conditions, and Agronomic Practices Used in Organic and Conventional Crop Production on Yield and Nutritional Composition Parameters in Potato, Cabbage, Lettuce and Onion; Results from the Long-Term NFSC-Trials*, Agronomy | 2023 | Peer-reviewed | GB Cd, Ni, Pb occurrence in Long-term Nafferton Factorial Systems Comparison field trials in Northumberland, UK; toxic-metal main-effect means for harvested potato tubers, cabbage... |
| 12 | [[sources/sun2023-pb-leek-speciation-xanes\|Sun et al. 2023]]. *Pb speciation and elemental distribution in leeks by micro X-ray fluorescence and X-ray absorption near-edge structure*, Journal of Synchrotron Radiation | 2023 | Peer-reviewed | CN Pb occurrence in Leeks (Allium tenuissimum L.) collected from a vegetable garden near the Qixiashan Pb-Zn mine, Nanjing, Jiangsu Province, China;... |
| 13 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | RO/EU tAs, Cd, Pb, Zn occurrence in 80 fruit and vegetable samples from Galați County, Romania (45 from vegetable/fruit market, 35 from amateur farmers), collected... (n=80) |
| 14 | [[sources/diyarov2022-food-processing-heavy-metals\|Diyarov et al. 2022]]. *The effect of food processing on the content of heavy metals in vegetables*, Chemical Bulletin of Kazakh National University | 2022 | Peer-reviewed | KZ Zn, Pb, Mn, Cd, Cu occurrence in Carrot, potato, and onion samples subjected to different food-processing treatments |
| 15 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | Primary occurrence data for Pb, Cd, Ni, Cr, U, tAs, and tHg in raw onion (TDS food item; n varies by analyte) |
| 16 | [[sources/heshmati2020-iran-vegetables-cereals-pb-cd\|Heshmati et al. 2020]]. *Concentration and Risk Assessment of Potentially Toxic Elements, Lead and Cadmium, in Vegetables and Cereals Consumed in Western Iran*, Journal of Food Protection 83(1):101-107 | 2020 | Peer-reviewed | IR/EU Pb, Cd occurrence in Four hundred composite food samples — 50 each of eight commodities (potato Solanum tuberosum, onion Allium cepa, tomato... (n=400) |
| 17 | [[sources/ametepey2018-ghana-vegetables-heavy-metals\|Ametepey et al. 2018]]. *Determination of heavy metals in selected vegetables from markets in Tamale Metropolis, Ghana*, International Journal of Food Contamination | 2018 | Peer-reviewed | Measured Cd, Pb, Cr, and Ni in spring onion from three markets in Tamale, Ghana (n=15 onion samples); West African occurrence context |
| 18 | [[sources/moradi2015-iran-isfahan-soil-crops-metals\|Moradi et al. 2015]]. *A Human Health Risk Assessment of Soil and Crops Contaminated by Heavy Metals in Industrial Regions, Central Iran*, Human and Ecological Risk Assessment: An International Journal (accepted manuscript, 29 Sep 2015) | 2015 | Peer-reviewed | IR/EU/US Cd, Pb, Ni, Fe occurrence in Twenty-seven edible-crop samples and 27 paired topsoil (0–20 cm) samples drawn from three regions of Isfahan province, central... (n=27) |
| 19 | [[sources/salehipour2015-iran-isfahan-cereals-vegetables-metals\|Salehipour et al. 2015]]. *Health Risks from Heavy Metals via Consumption of Cereals and Vegetables in Isfahan Province, Iran*, Human and Ecological Risk Assessment: An International Journal | 2015 | Peer-reviewed | IR Pb, tAs, Ni, Zn, Cu occurrence in Seventy edible-part samples of nine commodities — onion (Allium cepa), leek (Allium pp.; species not stated by authors),... (n=70) |
| 20 | [[sources/stasinos2014-heavy-metals-tubers-review\|Stasinos et al. 2014]]. *The Bioaccumulation and Physiological Effects of Heavy Metals in Carrots, Onions, and Potatoes and Dietary Implications for Cr and Ni: A Review*, Journal of Food Science | 2014 | Review | GR/LV/US Pb, Cd, tAs, Cr, Ni, Al occurrence in Review of global studies on carrots, onions, and potatoes from polluted irrigation water contexts |
| 21 | [[sources/loutfy2012-ismailia-foodstuffs-metals\|Loutfy et al. 2012]]. *Analysis and exposure assessment of some heavy metals in foodstuffs from Ismailia city, Egypt*, Toxicological & Environmental Chemistry | 2012 | Peer-reviewed | EG Cd, Pb, Cr, Zn, Cu occurrence in About 350 locally produced individual food samples purchased in 2007 from four local markets around Ismailia city, Egypt,... (n=117) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 1 source added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0ae30c7b4](https://github.com/paleofoundation/heavymetalindex/commit/0ae30c7b4) | 2026-06-11 | correction | 9 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
