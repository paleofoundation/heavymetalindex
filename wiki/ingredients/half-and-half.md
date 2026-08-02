---
title: "Half and half"
type: ingredient
commodity: half-and-half
label: "Half and half"
aliases: ["Cream, half and half", "half and half"]
category: dairy
tds_food:
  number: 167
  description: "Cream, half and half"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13]
    p95_ppb: 33
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 3]
    p95_ppb: 20
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 19]
    p95_ppb: 80
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
  Ni:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, null]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-06-11
    basis: half-and-half-wet-weight
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
sources: 2
---

# Half and half

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 167, "Cream, half and half." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Half and half is a dairy cream product consisting of equal parts whole milk and cream. Metals in dairy products reach the consumer primarily through the cow's feed and water supply, following a parallel pathway to that described for whole milk and butter. Cadmium and lead absorbed from feed, pasture, and water are distributed in the cow's body primarily to soft tissues (kidney, liver) and bone; the fraction partitioning into blood and subsequently into milk is small. Within milk itself, metals associate preferentially with the aqueous casein-whey fraction rather than the fat globule membrane. Because half and half is richer in fat than whole milk, the relative dilution of the aqueous protein fraction means that metal concentrations in half and half tend to be at or below those in whole milk on a volume basis. The FDA FY2018-FY2020 Total Diet Study reported all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) below the reporting limit across all 27 samples ([[sources/fda2022-tds-elements-fy2018-fy2020]]); those below-limit results are carried as left-censored bounds rather than as measured zeros (see the Synthesis basis and censoring treatment section). The directly measured cream and liquid-dairy occurrence literature places lead, cadmium, total arsenic, and total mercury low but non-zero in this matrix, consistent with the general understanding that dairy products are among the lower-metal food matrices in the food supply while the honest floor for each fully censored FDA analyte is the reporting limit, not a measured zero.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–13 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/ibrahim2025-metals-flavored-dairy-egypt\|2]] |
| Cd | n=2 | 0–3 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–19 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/ibrahim2025-metals-flavored-dairy-egypt\|2]] |
| tHg | n=2 | 0–1 | low | [[sources/pankiewicz2012-thg-dairy-products-poland\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]] |
| Ni | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Synthesis basis and censoring treatment

The lead, cadmium, total-arsenic, total-mercury, nickel, chromium, and uranium cells were resynthesized on 2026-06-11 in the native half-and-half wet-weight basis, the form in which the ingredient is placed on the market. Values below the analytical limit of detection or quantification are treated as left-censored bounds, not as measured zeros.

The earlier profile reported all seven of these analytes at typical and 95th-percentile values of zero at high confidence. Those figures were an artifact of the FDA Total Diet Study FY2018-FY2020 composite for "Cream, half and half" (TDS Food 167, n=27), in which every sample fell below the reporting limit for each metal and the reported below-limit results were pooled as literal zeros ([[sources/fda2022-tds-elements-fy2018-fy2020]], reporting limits Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg). The resynthesis replaces the literal zeros with the detected cream and liquid-dairy distributions from the primary occurrence literature, in which lead, cadmium, total arsenic, and total mercury are all low but non-zero. The honest floor for each fully censored analyte is the FDA reporting limit expressed as a left-censored bound, not a measured zero.

No occurrence survey in the corpus reports lead, cadmium, or total arsenic for cream or half and half as a separately resolved matrix; the only metal directly measured in cream is total mercury. The lead, cadmium, and total-arsenic cells therefore rest on broad liquid-dairy aggregates and are carried at low confidence, with the breadth of the supporting subgroup stated explicitly rather than relabeled as cream-specific.

Lead rests on two broad liquid-dairy aggregates: the Polish national monitoring of liquid processed milk products ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]]), a non-fermented liquid-products group that lumps cream, coffee cream, condensed milk, and milk desserts together and is not resolved to cream alone (domestic average 13 µg/kg, 90th percentile 33 µg/kg, maximum 72 µg/kg), and the Egyptian flavored-dairy survey of UHT and pasteurized fluid milk ([[sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim et al. 2025]], fluid-milk lead 4 to 73 µg/kg, with three dairy products exceeding the 20 µg/kg EU milk limit). The typical band of <4 to 13 µg/kg pairs the FDA censored floor with the Starska liquid-products mean, and the 95th-percentile of 33 µg/kg is taken from the Starska liquid-products 90th percentile rather than from the 72 µg/kg single maximum; because neither aggregate isolates cream, the value is held at low confidence pending a cream-resolved survey.

Cadmium rests on the same Starska liquid-products group: average 1 µg/kg and 90th percentile 3 µg/kg across milk and liquid milk products, with the highest single domestic liquid-product result at 20 µg/kg. The Egyptian flavored-dairy survey reported cadmium below the limit of detection in every fluid-dairy product. The typical band of <1 to 3 µg/kg pairs the FDA censored floor with the Starska 90th percentile, and the 95th-percentile of 20 µg/kg carries the Starska liquid-products maximum; the cell is low confidence on a single quantitative aggregate.

Total arsenic rests on the Starska combined milk-and-liquid-products figures (average 8 µg/kg, 90th percentile 19 µg/kg, maximum 80 µg/kg across milk and liquid products) and the trace detections in Egyptian flavored fluid dairy ([[sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim et al. 2025]], 1.6 to 37 µg/kg where detected). The typical band of <3 to 19 µg/kg and the 95th-percentile of 80 µg/kg are carried from the Starska distribution; total arsenic and inorganic arsenic are kept as distinct analytes, and because no speciated measurement exists for this matrix the inorganic-arsenic cell remains a reviewed data gap.

Total mercury is the only analyte with a directly cream-resolved measurement. Pankiewicz 2012 ([[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz 2012]]) measured cream from six Polish regional cooperatives by direct-mercury analyzer and reported a cream range of 0.01 to 0.06 µg/kg on a wet-product basis, far below the 1 µg/kg FDA reporting limit. Starska et al. provide the broader liquid-dairy tail (milk-and-products average 1 µg/kg, 90th percentile 2 µg/kg, maximum 10 µg/kg). The typical band of <1 to 1 µg/kg pairs the FDA censored floor with the Starska central, and the 95th-percentile of 2 µg/kg is taken from the Starska liquid-dairy 90th percentile; the directly measured cream values sit an order of magnitude below this, so the cell is conservative. Total mercury is held distinct from methylmercury and is not derived from it.

Chromium is reported as total chromium at low confidence; no cream or half-and-half hexavalent-chromium measurement exists in the corpus, so no Cr-VI value is inferred. No clean-market survey resolves chromium for cream or fluid dairy as a distinct matrix: FDA reports it below the 50 µg/kg reporting limit across all 27 composites, the directly cream-resolving sources do not measure chromium, and the only dairy chromium values in the corpus are for concentrated milk powder ([[sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim et al. 2025]], up to 1.279 mg/kg in chocolate milk powder), a different and far more concentrated matrix that cannot be relabeled as cream. The chromium cell therefore carries only the FDA censored floor of <50 µg/kg as a left-censored bound, with no positive occurrence value and no upper bound. Nickel is recorded the same way: every half-and-half composite in the FDA Total Diet Study fell below the 40 µg/kg nickel reporting limit, and the only dairy nickel detection in the corpus is in strawberry yogurt, not cream, so the honest floor is the FDA reporting limit expressed as a left-censored bound and no positive cream nickel value is published. Uranium is recorded as a reviewed data gap: FDA reports it below the 1 µg/kg reporting limit across all 27 composites and Marques et al. report it below detection in every milk sample, with no extractable quantitative value for cream or fluid dairy, so no distribution is published (the rice-uranium precedent).

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

The machine-readable contamination profile is `in_progress` for analytes measured in the TDS file and `pending` for profile metals not measured by this source. Ingredient-level values belong here once cross-source synthesis is reviewed; product-category values belong on the relevant product page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cream, half and half" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tAs | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA FY2018-FY2020 Total Diet Study measured half and half as TDS Food 167 with n=27 composite samples and found all seven analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) at or below the reporting limit across the entire distribution, including the minimum and maximum [[sources/fda2022-tds-elements-fy2018-fy2020|1]]; these are left-censored bounds, not measured zeros. The detected liquid-dairy and cream distributions in the primary literature place lead in dairy at a low but non-zero central, with the Polish liquid-processed-milk-products group running at a mean of 13 µg/kg and a 90th percentile of 33 µg/kg ([[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]], an aggregate of cream, coffee cream, condensed milk, and milk desserts) and Egyptian fluid milk running from 4 to 73 µg/kg ([[sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim et al. 2025]]). Cadmium sits low (Starska liquid-products mean 1 µg/kg, 90th percentile 3 µg/kg, single highest 20 µg/kg), and total mercury measured directly in cream is very low (0.01 to 0.06 µg/kg, [[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz 2012]]). The EU maximum level for Pb in raw milk and heat-treated milk is 0.020 mg/kg (20 ppb); cream and half and half are governed by the general dairy framework, and the central tendency of the empirical data sits below this threshold while the upper tail of the broad liquid-dairy aggregates approaches or exceeds it. Regional variation driven by cattle sourcing or pasture geochemistry, such as the order-of-magnitude-higher lead and cadmium documented in raw cow milk from contaminated pastures elsewhere in the dairy literature, is a localised exception rather than a characteristic of the US retail commodity and is not folded into the central estimate.

## Processing effects

Half and half is produced by blending standardized cream with whole milk to achieve a fat content of approximately 10 to 18 percent, followed by pasteurization and homogenization. Pasteurization does not alter metal concentrations in any measurable way. Homogenization physically disrupts fat globules to distribute them uniformly but does not shift metal distribution between aqueous and fat phases in a way that would concentrate metals. Ultra-high-temperature (UHT) processing, used for shelf-stable half and half, also does not affect metal concentration. Storage in plastic or paper-based cartons rather than tin-lined cans means Sn migration is not a relevant pathway for this commodity.

## Ingredient-derivative risk

Half and half is used primarily as a culinary ingredient (in coffee, sauces, and baking) rather than as a base for further concentrated derivatives. Reduction of half and half in cooking concentrates all dissolved constituents, but the starting metal concentrations are so low that even a fivefold reduction would remain far below relevant regulatory limits. Heavy cream and whipping cream, which have higher fat content than half and half, would if anything have even lower metal concentrations because of greater fat-phase dilution of the aqueous fraction.

## Mitigation options

### Sourcing levers

Because cattle feed and water are the primary metal exposure pathways for dairy cattle, sourcing milk from herds with documented low-Cd pasture environments provides the principal risk reduction lever. For a product where all measured analytes are at or below reporting limits, the practical mitigation headroom is already achieved under ordinary US dairy production conditions.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Half and half is itself a formulation of milk and cream; no further formulation lever is applicable within the product definition.

### Testing and QC levers

Routine lot-level testing of half and half for metals is unlikely to yield actionable findings given the uniformly below-detection results in the TDS. Monitoring at the milk-intake level at the farm or collection point provides more cost-effective quality assurance.

### Packaging and storage levers

Half and half is packaged in plastic or paper-based cartons; Sn migration from tin-lined cans is not applicable. Storage temperature and duration affect microbiological quality but not metal concentration.

## Regulatory limits that apply

The EU sets a maximum level of 0.020 mg/kg (20 ppb) for Pb in raw milk, heat-treated milk, and milk for the manufacture of dairy-based products, applied on the wet-weight basis [[regulations/eu2023-contaminants-maximum-levels]]. Cream and half and half are governed under the same general dairy framework. No specific EU maximum level for Cd in milk or cream as a distinct matrix is set; dairy products generally fall below the Cd limits that apply to other food categories. The United States does not set statutory maximum levels for Pb or Cd in milk or dairy cream products in Federal regulation, though FDA's Total Diet Study provides ongoing surveillance. Codex Alimentarius general standards address Pb in milk at 0.020 mg/kg, consistent with the EU position [[regulations/codex-cadmium-mls]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Review</span>
3. [[sources/ibrahim2025-metals-flavored-dairy-egypt|Dietary Exposure and Health Risk Assessment of Selected Toxic and Essential Metals in Various Flavored Dairy Products]]<span class="hmi-ref-meta">Ibrahim AS, Awaad SS, Shehta HA, and Hegab OW · Biological Trace Element Research · 2025 · [doi.org/10.1007/s12011-025-04676-0](https://doi.org/10.1007/s12011-025-04676-0)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/pankiewicz2012-thg-dairy-products-poland|Monitoring of total mercury level in selected dairy products from the south-east regions of Poland]]<span class="hmi-ref-meta">Pankiewicz U · Ecological Chemistry and Engineering A · 2012 · [doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg distributions for Cream, half and half (n=27); all analytes below the reporting limit, carried as left-censored bounds (Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1 µg/kg); the Ni, Cr, and U censored floors |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [0b8cc0157](https://github.com/paleofoundation/heavymetalindex/commit/0b8cc0157) | 2026-06-11 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
