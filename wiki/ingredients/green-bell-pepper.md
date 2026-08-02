---
title: "Green bell pepper"
type: ingredient
commodity: green-bell-pepper
label: "Green bell pepper"
aliases: ["Pepper, bell, green, raw", "green bell pepper"]
category: vegetable-fruit
tds_food:
  number: 125
  description: "Pepper, bell, green, raw"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 100]
    p95_ppb: 100
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-green-bell-pepper-edible-tissue-wet-weight
  Cd:
    status: populated
    typical_ppb: [3.6, 17.6]
    p95_ppb: 22.1
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
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: raw-green-bell-pepper-edible-tissue-wet-weight
    speciation: total-As-only
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 62
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-green-bell-pepper-edible-tissue-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, 124]
    p95_ppb: 151
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
    typical_ppb: [0, 130]
    p95_ppb: 130
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-green-bell-pepper-edible-tissue-wet-weight
    speciation: total-Cr-only
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
    last_reviewed: 2026-06-11
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 4
---

# Green bell pepper

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 125, "Pepper, bell, green, raw." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Green bell pepper (Capsicum annuum) is a fruit vegetable with a hollow, thick-walled structure. The outer wall (pericarp) forms a barrier between the growing environment and the inner seed cavity, providing partial protection to the seeds from soil-borne metal contact. Metals reach bell pepper tissue primarily through root uptake from soil and translocation to aerial plant parts, and secondarily through surface deposition of atmospheric particulates or spray residues on the outer pericarp surface. Capsicum species are not considered hyperaccumulators or even moderate accumulators of heavy metals under typical soil conditions; root uptake efficiency for Cd and Pb is lower in peppers than in leafy vegetables (which concentrate metals in edible leaf tissue) and lower than in legumes (which use root exudate chemistry that mobilizes soil metals). In the FDA TDS composite for green bell pepper raw (n=27), cadmium is the only metal detected above its reporting limit throughout the distribution (median 6.6 ppb, max 24 ppb), with nickel elevated in a small number of samples (max 580 ppb); lead, total arsenic, total mercury, chromium, and uranium all fell below their reporting limits in every composite [[sources/fda2022-tds-elements-fy2018-fy2020]]. Those below-limit results are carried as left-censored bounds rather than as measured zeros, and external surveys that measured bell pepper by name detected low but non-zero lead, total mercury, and total chromium under contaminated urban-agriculture or point-source production conditions (see the Synthesis basis and censoring treatment section). Green bell pepper flesh remains a generally low-risk matrix for heavy metal exposure under clean commercial production, but the honest values are low rather than zero, and the upper tails on lead, mercury, and chromium are driven by growing-region contamination rather than by pepper biology.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 0–100 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/emmanuel2025-kano-urban-vegetables-metals\|1]], [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra 2017, dw]] |
| Cd | n=2 | 3.6–17.6 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/li2017-mercury-vegetables-grains-coal-power-china\|4]] |
| Ni | n=2 | 0–124 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–130 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/emmanuel2025-kano-urban-vegetables-metals\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, total-arsenic, total-mercury, chromium, and uranium cells were resynthesized on 2026-06-11 on a raw green-bell-pepper edible-tissue wet-weight basis, the form in which the fresh vegetable is consumed. Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros.

The earlier profile reported lead, total arsenic, total mercury, chromium, and uranium at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Pepper, bell, green, raw" (n=27), in which every sample fell below the reporting limit for these five metals and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, tAs 3, tHg 1, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the honest FDA censored floor expressed as a left-censored low bound, and, where a grapefruit-style detected anchor exists, with the detected non-FDA distribution. The honest floor for each fully censored analyte is the FDA reporting limit carried as a left-censored bound, not a measured zero.

Lead rests on three contributors. The FDA composite is fully censored (below the 4 µg/kg reporting limit in all 27 samples) and supplies the left-censored low bound of zero. The detected upper anchor is the Nigerian urban-agriculture survey that measured bell pepper by name ([[sources/emmanuel2025-kano-urban-vegetables-metals|Emmanuel 2025]], microwave-plasma atomic emission, edible vegetable tissue, Kano State peri-urban and industrial sites, 2025), which reports pepper lead of 60 µg/kg at the Wudil site and 100 µg/kg at the Nomans-Land site. The Indian market-basket survey that measured green pepper by name ([[sources/salhotra2017-vegetables-fruits-heavy-metals|Salhotra and Verma 2017]], AAS, Jagdalpur market, 2017) reports green-pepper lead of 190 µg/kg, but on an explicit dry-weight basis that is not reconcilable into the wet-weight headline without a moisture factor the source does not provide; it is therefore carried as a dry-weight context anchor in prose only and excluded from the pooled wet-weight values. The pooled lead typical of [0, 100] takes the FDA censored floor as the low bound and the Nomans-Land pepper concentration as the upper; the lead 95th-percentile of 100 µg/kg is the top of the ordered pooled set. Both Emmanuel sites are urban-agriculture soils with elevated soil lead (Emmanuel's vegetable-pool mean soil Pb is 1.41 mg/kg), so the upper anchor reflects contaminated peri-urban production, not clean commercial supply, and the cell is held at low confidence: only one detected non-FDA contributor on the headline basis, both positive measurements from a single contaminated-soil survey, and the FDA composite fully censored.

Total mercury rests on the FDA censored floor plus the Chinese coal-fired-power-plant gradient study that measured pepper by name ([[sources/li2017-mercury-vegetables-grains-coal-power-china|Li et al. 2017]], atomic fluorescence, fruit-vegetable pepper on a fresh-weight basis, sites within 10 km of two power plants, 2015). Li's grocery-store control pepper, sampled more than 55 km from any power plant, carries total mercury of 0.93 µg/kg fresh weight, which anchors the typical-range upper bound of 1 µg/kg. The point-source-impacted samples run far higher, from 4.69 µg/kg at the most distant in-plume site to 62.09 µg/kg at the 1 km site; the 95th-percentile of 62 µg/kg is that coal-plant maximum and is the top of the ordered pooled set, reflecting atmospheric-deposition-impacted production near a point source rather than clean supply. The cell is held at low confidence with two contributors. Total mercury is held distinct from methylmercury and is not derived from it.

Total arsenic rests on the FDA censored floor alone. No source in the corpus reports a green-bell-pepper-specific positive total-arsenic value; the FDA composite is below the 3 µg/kg reporting limit across all 27 samples. The cell is recorded with the FDA reporting limit as a left-censored low bound ([0, null]) and no upper bound or 95th-percentile, at low confidence and a single contributor. Total arsenic is held distinct from inorganic arsenic, which remains a reviewed data gap because no speciated measurement exists for this ingredient.

Chromium rests on the FDA censored floor plus the Emmanuel 2025 Nigerian survey, which reports total chromium of 130 µg/kg in Wudil pepper and 100 µg/kg in Nomans-Land pepper. The chromium typical of [0, 130] spans the FDA censored floor to the Wudil pepper concentration, and the 95th-percentile of 130 µg/kg is the top of the ordered pooled set. Both detected values are from contaminated urban-agriculture soils and reflect that production context, not clean commercial supply. Chromium is reported as total chromium at low confidence; no green-bell-pepper hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred.

Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and no other source in the corpus reports an extractable quantitative green-bell-pepper value, so no distribution is published (the rice-uranium precedent).

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Pepper, bell, green, raw" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 1.6 | 3.58 | 6.6 | 17.6 | 22.1 | 24 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 124 | 151 | 580 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Cadmium concentrations in green bell pepper (range 1.6 to 24 ppb, median 6.6 ppb, n=27 in FDA TDS) [[sources/fda2022-tds-elements-fy2018-fy2020]] show variation consistent with differences in soil Cd availability across the US and import origins represented in the TDS composite. Greenhouse-grown peppers, which constitute a large fraction of European and some North American supply, typically grow in controlled growing media (peat-based or coco coir substrate) that can be formulated with low metal burden, potentially reducing Cd relative to field-grown peppers on naturally or fertilizer-elevated Cd soils. Conventional field production on heavily phosphate-fertilized soils carries higher expected Cd. The very high Ni outlier in the TDS data (max 580 ppb, n=27) is consistent with a small number of samples from a high-Ni soil origin but is not further disaggregated in the TDS dataset.

Lead, total mercury, and total chromium are below their FDA TDS reporting limits throughout the US composite distribution [[sources/fda2022-tds-elements-fy2018-fy2020]], but external surveys that measured bell pepper by name detect all three under contaminated production. The Nigerian urban-agriculture survey reports pepper lead of 60 to 100 µg/kg and total chromium of 100 to 130 µg/kg across peri-urban and industrial Kano State sites whose soils carry elevated lead (vegetable-pool soil-Pb mean 1.41 mg/kg) [[sources/emmanuel2025-kano-urban-vegetables-metals]]. The Indian Jagdalpur market survey reports green-pepper lead of 190 µg/kg on a dry-weight basis [[sources/salhotra2017-vegetables-fruits-heavy-metals]], which is not directly comparable to the wet-weight figures but corroborates that market produce from contaminated regions carries detectable lead. For total mercury, the Chinese coal-fired-power-plant gradient study shows a steep point-source effect: pepper total mercury runs from 0.93 µg/kg in grocery-store control fruit sampled more than 55 km from any plant to 62.09 µg/kg at the 1 km in-plume site, declining monotonically with distance from the source [[sources/li2017-mercury-vegetables-grains-coal-power-china]]. These mining, industrial, and atmospheric-deposition outliers are stratified out of the clean-supply central and carried as the upper tail; they describe contaminated production geography, not the metal burden of clean commercial green bell pepper. Color variants of bell pepper (red, orange, yellow) are the same species and cultivar class as green bell pepper and would be expected to carry a similar, if not identical, metal burden.

## Processing effects

The FDA TDS measures green bell pepper in the raw state, meaning that consumer preparation (washing, seeding, raw consumption or cooking) is not captured in this dataset. Washing the outer surface of the pepper before consumption or processing removes surface-deposited Pb and Cd from atmospheric deposition and spray residues; this is standard sanitation practice for fresh vegetables. Cooking (roasting, grilling, stir-frying) does not materially reduce cadmium or lead concentrations in the pericarp tissue. Commercial processing into frozen pepper strips or diced pepper involves washing and blanching, which may produce minor leaching of water-soluble metal fractions; the magnitude has not been characterized in the current corpus for bell pepper specifically.

## Ingredient-derivative risk

Green bell pepper appears as a fresh vegetable, as an ingredient in frozen vegetable mixes, jarred or canned roasted peppers, salsa, and in dried or powdered form (green pepper powder or flakes). Drying concentrates metals in proportion to moisture loss; a dried bell pepper powder with 10 percent moisture relative to fresh pepper with 92 percent moisture would carry approximately elevenfold higher concentrations per gram wet weight. Paprika and other dried Capsicum products are covered on separate commodity pages and are not part of the fresh green bell pepper risk profile addressed here.

## Mitigation options

### Sourcing levers

Preferring greenhouse-grown bell peppers grown in certified, low-Cd substrate or specifying field origin from regions with documented low soil Cd reduces the expected Cd burden in this matrix. For EU-marketed products, supplier compliance with EU maximum levels for Cd in vegetables (0.050 mg/kg) provides some assurance, though compliance testing by competent authorities is not comprehensive for all origins.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Thorough washing of fresh bell pepper removes surface-deposited metals from the pericarp exterior. For manufacturers processing bell pepper into frozen or preserved products, blanching provides an additional leaching step that reduces water-soluble metal fractions in the finished product.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given that Cd is the primary detectable analyte and its maximum of 24 ppb in the FDA TDS is below the EU regulatory limit of 50 ppb for vegetables [[sources/fda2022-tds-elements-fy2018-fy2020]], routine lot-level testing for Cd is not urgently indicated for typical commercial green bell pepper supply chains. However, for products targeting infants or using bell pepper in baby food formulations, where the EU applies stricter Pb limits (0.020 mg/kg for processed vegetable-based foods for infants), verification testing is warranted.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in vegetables (general) is 0.10 mg/kg wet weight and for Cd in vegetables (general) it is 0.050 mg/kg wet weight. These limits apply to green bell pepper as placed on the market. All FDA TDS Pb measurements for green bell pepper (n=27) are below the 4 µg/kg reporting limit [[sources/fda2022-tds-elements-fy2018-fy2020]], and Cd values peak at 24 ppb, indicating substantial margin below the EU 50 ppb Cd limit under typical US commercial supply. The detected non-FDA anchors tell a more cautionary story for contaminated production: the Nigerian urban-agriculture survey reports pepper lead of 100 µg/kg at one site [[sources/emmanuel2025-kano-urban-vegetables-metals]], which sits exactly at the EU general-vegetable Pb limit of 0.10 mg/kg, so peri-urban or industrially impacted growing soils can push green-bell-pepper lead to the regulatory ceiling. For bell pepper used in processed vegetable products for infants and young children, the EU applies a stricter Pb maximum of 0.020 mg/kg for vegetable-based processed foods; bell pepper may require verification testing when included in infant food formulations to demonstrate compliance with this lower limit, particularly for supply originating from regions with documented soil-lead loading. There are no specific US FDA action levels for metals in fresh or processed bell pepper.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 4 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/emmanuel2025-kano-urban-vegetables-metals|Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria]]<span class="hmi-ref-meta">Bernard Emmanuel · ChemClass Journal · 2025 · [doi.org/10.33003/chemclass-2025-0902/184](https://doi.org/10.33003/chemclass-2025-0902/184)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/salhotra2017-vegetables-fruits-heavy-metals|Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State]]<span class="hmi-ref-meta">Salhotra P and Verma R · IOSR Journal of Applied Chemistry · 2017 · [doi.org/10.9790/5736-100502110113](https://doi.org/10.9790/5736-100502110113)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/li2017-mercury-vegetables-grains-coal-power-china|Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants]]<span class="hmi-ref-meta">Li R, Wu H, Ding J, Fu W, Gan L, and Li Y · Scientific Reports · 2017 · [doi.org/10.1038/srep46545](https://doi.org/10.1038/srep46545)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/emmanuel2025-kano-urban-vegetables-metals\|Emmanuel 2025]]. *Assessment of Heavy Metal Contamination and Health Risks from Urban-Grown Vegetables in Kano State, Nigeria*, ChemClass Journal | 2025 | Peer-reviewed | NG Cd, Ni, Pb, Mn, Cr occurrence in Vegetable and soil samples from urban agriculture sites in Wudil, Nomans-Land, and Sharada, Kano State, Nigeria, collected January-March... (n=64) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Pepper, bell, green, raw (n=27); detectable concentrations for Cd, Ni |
| 3 | [[sources/li2017-mercury-vegetables-grains-coal-power-china\|Li et al. 2017]]. *Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants*, Scientific Reports | 2017 | Peer-reviewed | CN tHg occurrence in Pooled vegetable, grain, and soil samples from six open-field locations within 10 km of two coal-fired power plants... |
| 4 | [[sources/salhotra2017-vegetables-fruits-heavy-metals\|Salhotra et al. 2017]]. *Determination of heavy metals contamination in some vegetables and fruits samples from the market of Jagdalpur, Chhattisgarh State*, IOSR Journal of Applied Chemistry | 2017 | Peer-reviewed | IN Pb, Cd, Cu, Fe, Co, Zn occurrence in vegetable and fruit samples from Jagdalpur market, Chhattisgarh State, India (n=nine commodities measured (5 vegetables + 4 fruits); abstract claims ten but tables enumerate nine) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
