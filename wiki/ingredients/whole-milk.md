---
title: "Whole milk"
dek: "Fluid dairy milk used directly and in products including cheese, yogurt and milk powder. Explore the evidence on measured metals, feed transfer and processing."
rail_highlights:
  - label: Exposure
    text: Lead detected in Spanish retail whole milk
    source: sources/marques2021-trace-elements-milks-plant-based-drinks
    source_label: Spanish study
  - label: Key distinction
    text: Whole milk non detects are not measured zeroes
    source: sources/fda2022-tds-elements-fy2018-fy2020
    source_label: FDA survey
type: ingredient
commodity: whole-milk
label: "Whole milk"
aliases: [whole milk]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: 60
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: 15
    confidence: low
    n_studies: 5
    last_reviewed: 2026-08-09
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::1::arsenic-total","role":"value","food_id":"1","food_name":"Milk, whole, fluid","metal_species":"tAs","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 4
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 120]
    p95_ppb: 150
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0, 20]
    p95_ppb: 30
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: "populated"
    typical_ppb: [null,null]
    p95_ppb: null
    confidence: "low"
    n_studies: 1
    last_reviewed: "2026-09-10"
    value_kind: "source_non_detect"
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::1::uranium","role":"value","food_id":"1","food_name":"Milk, whole, fluid","metal_species":"U","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":1,"reporting_limit_max_ppb":1,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 10
hero_image: /static/heroes/dairy-butter-protein-powder-milk.webp
hero_image_alt: "A butter block, an unmarked jar of fine pale powder and a glass of milk illustrating whole milk ingredient context."
---

# Whole milk

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Whole milk is a low-accumulator matrix for most heavy metals. The dairy cow's physiology actively restricts the transfer of ingested metals from blood to milk; this is particularly effective for cadmium and lead, which are tightly regulated across biological membranes. The transfer factor from feed to milk for Cd and Pb is very low (typically below 1 percent for Pb, and even lower for Cd), meaning that even when cows graze on Cd-or Pb-contaminated pastures, the resulting milk carries concentrations well below those of the feed. Mercury transfer to milk is similarly restricted. The FDA TDS FY2018-FY2020 data for whole fluid milk (n=27) record all seven measured analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) at zero across the entire distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]), consistent with the well-established low-risk characterisation of fluid dairy from non-contaminated herds. Marques et al. (2021) detected Pb in non-organic whole milk at trace levels in Spanish retail samples by ICP-MS ([[sources/marques2021-trace-elements-milks-plant-based-drinks]]), illustrating that Pb is detectable in some market contexts even if distribution-wide surveys show predominantly zero values. Whole milk's fat content relative to skim milk results in slightly higher concentrations of lipophilic metal species, but this effect is minor for the regulated heavy metals of concern.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 1–20 | medium | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/chen2020-milk-types-elements-china\|2]], [[sources/davidov2019-cow-milk-heavy-metals\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|4]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|5]] |
| Cd | n=5 | 0–2 | low | [[sources/starska2011-noxious-elements-milk-products-poland\|1]], [[sources/chen2020-milk-types-elements-china\|2]], [[sources/davidov2019-cow-milk-heavy-metals\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|4]], [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|5]] |
| iAs | data gap | — | — | — |
| tAs | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=4 | 0–1 | low | [[sources/pankiewicz2012-thg-dairy-products-poland\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|4]] |
| Ni | n=3 | 0–120 | low | [[sources/davidov2019-cow-milk-heavy-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|3]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–20 | low | [[sources/davidov2019-cow-milk-heavy-metals\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Sn | data gap | — | — | — |
| U | n=1 dataset; composites=27 | ND (<1; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |

## Synthesis basis and censoring treatment

The per-analyte values above were resynthesized on 2026-08-09 on a liquid whole-milk as-consumed (wet-weight) basis. The earlier profile reported lead, cadmium, total mercury, nickel, and chromium at typical and 95th-percentile values of zero. Those figures were an artifact of FDA Total Diet Study composites in which every whole-milk sample fell below the reporting limit (lead 1, cadmium 1, mercury 1, nickel 20, chromium 25 micrograms per kilogram) and the reported non-detects were pooled as literal zeros. Values below the analytical reporting or detection limit are treated here as left-censored, not as measured zeros.

Lead in commercial milk is low but non-zero, with a regional right tail. [[sources/starska2011-noxious-elements-milk-products-poland|Starska et al. 2011]], sampling 483 Polish milk and dairy products, reports a milk mean of 8 and a 90th percentile of 17 micrograms per kilogram, with two of 75 milk samples above the 20 microgram per kilogram Codex maximum level and a maximum of 50. [[sources/chen2020-milk-types-elements-china|Chen et al. 2020]] reports a Chinese cow-milk mean of 23.4, above the Codex level, and [[sources/davidov2019-cow-milk-heavy-metals|Davidov et al. 2019]] a Serbian mean of 80 described by the authors as just above recommended values. Cadmium, chromium, and total mercury sit at or below a few micrograms per kilogram across these datasets; total mercury in particular is genuinely trace, with [[sources/pankiewicz2012-thg-dairy-products-poland|Pankiewicz et al. 2012]] reporting Polish milk at 0.03 to 0.06. Nickel spans from below the FDA reporting limit to the 119 microgram per kilogram Serbian mean. Values reported only in a contaminated-market survey ([[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim et al. 2024]], Egyptian raw-milk cadmium mean 90) are carried as an elevated-context tail rather than adopted as the central value.

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 1, "Milk, whole, fluid." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 1: Milk, whole, fluid | tAs | 27 | 0 | ND in all composites | 1 |
| 1: Milk, whole, fluid | Cd | 27 | 0 | ND in all composites | 1 |
| 1: Milk, whole, fluid | Cr | 27 | 0 | ND in all composites | 25 |
| 1: Milk, whole, fluid | Pb | 27 | 0 | ND in all composites | 1 |
| 1: Milk, whole, fluid | tHg | 27 | 0 | ND in all composites | 1 |
| 1: Milk, whole, fluid | Ni | 27 | 0 | ND in all composites | 20 |
| 1: Milk, whole, fluid | U | 27 | 0 | ND in all composites | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

FDA TDS FY2018-FY2020 data (n=27) for whole fluid milk in the US show zero values across all analytes (Cd, Cr, Ni, Pb, U, tAs, tHg) throughout the distribution ([[sources/fda2022-tds-elements-fy2018-fy2020]]). The Marques et al. 2021 Spanish retail study detected Pb in non-organic whole cow milk, illustrating that while distribution-wide surveys show predominantly zero values, some market contexts yield detectable Pb ([[sources/marques2021-trace-elements-milks-plant-based-drinks]]). Dairy from herds grazing pastures with elevated Pb or Cd, such as land near legacy mining or smelting operations, can produce milk with elevated concentrations; this is a localised exception rather than a characteristic of the commodity category. Organic versus conventional milk is not systematically associated with different metal profiles in the published literature, as the primary determinant of milk metal content is the metal burden of the pasture and feed rather than production system.

## Processing effects

Pasteurisation (HTST or UHT) does not significantly alter the metal content of milk; the thermal treatment targets microbial pathogens rather than mineral or metal composition. Homogenisation, which breaks up fat globules to produce uniform fat distribution, does not change total metal concentrations. Ultra-high temperature (UHT) processing and sterilisation similarly leave metal concentrations unchanged. Spray-drying of whole milk to produce whole milk powder concentrates all solutes including metals in proportion to the water removed, roughly by a factor of 7 to 8 (reflecting the reconstitution ratio of approximately 1 part powder to 7 parts water); however, because the starting fluid milk concentrations are near or below detection limits, the resulting whole milk powder concentrations remain very low even after this concentration step. Evaporated milk, which is concentrated but not fully dried, shows a similar concentration factor.

## Ingredient-derivative risk

Whole milk is the starting material for a range of dairy derivatives including cream, butter, cheese, yogurt, condensed milk, evaporated milk, and whole milk powder. In all of these derivatives, the metal profile of the raw milk is carried through with modification only by the concentration or dilution factor of the processing step. Cheese production involves concentration of protein and fat (which removes whey), so any metals associated with the protein or fat fraction may be slightly concentrated in the curd; however, cheese metal concentrations remain very low given the near-zero starting point of fluid milk. Butter, which is almost pure fat, carries minimal metals. Whey protein products (whey protein concentrate, whey protein isolate) are addressed on separate ingredient pages and may carry different metal profiles from the whey fraction.

## Mitigation options

### Sourcing levers

Sourcing milk from herds grazing on non-contaminated pastures in regions without legacy industrial Pb or Cd soil loading is the primary upstream lever, though this is rarely a practical concern for commercially produced whole milk at population scale. In geographies with legacy mining or smelting activity adjacent to dairy farming, pasture metal testing and milk surveillance are appropriate.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine heavy metal testing of commercial whole milk for Pb and Cd is unlikely to yield actionable values under standard supply-chain conditions. Testing is warranted for dairy sourced from geographic areas with known soil contamination, or for product categories such as infant formula where milk is a primary ingredient and regulatory scrutiny of metals is high.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Pb in raw milk, heat-treated milk, and milk-based products of 0.020 mg/kg (20 ppb) under [[regulations/eu2023-contaminants-maximum-levels]]. No EU maximum level is set for Cd in fluid milk because Cd transfer to milk from contaminated feed is very low. No maximum level for Hg in milk is promulgated under current EU contaminant regulations. In the US, no FDA action level for Pb, Cd, or Hg in fluid cow milk is currently enforced under the [[regulations/fda-closer-to-zero]] programme, which focuses on processed infant foods and baby foods rather than raw milk constituents. [[regulations/codex-cadmium-mls]] includes provisions for Pb in milk at 0.020 mg/kg, consistent with the EU limit.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tAs.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

**U.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.

Other previously cited literature is retained as context; it does not establish the withdrawn numerical profile: [[sources/marques2021-trace-elements-milks-plant-based-drinks]].
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/starska2011-noxious-elements-milk-products-poland|Noxious Elements in Milk and Milk Products in Poland]]<span class="hmi-ref-meta">Starska K, Wojciechowska-Mazurek M, Mania M, Brulinska-Ostrowska E, Biernat U, and Karlowski K · Polish Journal of Environmental Studies · 2011</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/chen2020-milk-types-elements-china|Analysis of 17 elements in cow, goat, buffalo, yak, and camel milk by inductively coupled plasma mass spectrometry (ICP-MS)]]<span class="hmi-ref-meta">Chen L, Li X, Li Z, and Deng L · RSC Advances · 2020 · [doi.org/10.1039/d0ra00390e](https://doi.org/10.1039/d0ra00390e)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/davidov2019-cow-milk-heavy-metals|Contamination of Cow Milk by Heavy Metals in Serbia]]<span class="hmi-ref-meta">Davidov I, Kovacevic Z, Stojanovic D, Pucarevic M, Radinovic M, Stojic N, et al. · Acta Scientiae Veterinariae · 2019 · [doi.org/10.22456/1679-9216.96366](https://doi.org/10.22456/1679-9216.96366)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/pankiewicz2012-thg-dairy-products-poland|Monitoring of total mercury level in selected dairy products from the south-east regions of Poland]]<span class="hmi-ref-meta">Pankiewicz U · Ecological Chemistry and Engineering A · 2012 · [doi.org/10.2428/ecea.2012.19(01)014](https://doi.org/10.2428/ecea.2012.19(01)014)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Heavy metals in raw milk and Egyptian cheese types]]<span class="hmi-ref-meta">Ibrahim SA, El-Sohaimy SA, Abd El-Aziz M, and Shehata MG · Open Veterinary Journal · 2024 · [doi.org/10.5455/OVJ.2024.v14.i2.4](https://doi.org/10.5455/OVJ.2024.v14.i2.4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 2 | [[sources/shahzad2025-buffalo-milk-trace-metals\|Shahzad et al. 2025]]. *Assessment of hazardous trace metals and associated health risk as affected by feed intake in buffalo milk*, Scientific Reports 15:9841 | 2025 | Peer-reviewed | PK Pb, Cd, tHg, tAs, Mn, Fe occurrence in Ninety buffalo-milk samples from Tehsil Daska, District Sialkot, Pakistan, grouped by buffalo feed category: alfalfa fodder, maize silage,... (n=90) |
| 3 | [[sources/yildiz-kucuk2024-minerals-heavy-metals-raw-cow-milk-mus\|Yildiz et al. 2024]]. *Determination of Some Minerals and Heavy metals in Raw Cow's Milk Collected from Different Regions of Muş Province*, Afyon Kocatepe University – Journal of Science and Engineering (AKU J. Sci. Eng.) | 2024 | Peer-reviewed | TR Pb, Cd, Fe, Cu, Mn, Mg, Zn occurrence in 10 raw cow milk samples from different regions of Muş province, eastern Turkey (n=10) |
| 4 | [[sources/arellano2023-dairy-products-arsenic-argentina\|Arellano et al. 2023]]. *Arsenic risk assessment through dairy products ingestion*, Arsenic in the Environment: Bridging Science to Practice for Sustainable Development | 2023 | Conference proceedings | AR tAs occurrence in Raw bovine, caprine, and ovine milk from 37 farms in Cordoba and Buenos Aires provinces, plus market commercial... (n=157) |
| 5 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 Cd, Cr, Ni, Pb, U, tAs, tHg occurrence distributions for Milk, whole, fluid (n=27); all analytes reported as zero (BDL) |
| 6 | [[sources/hasan2022-bangladesh-raw-pasteurized-milk-metals\|Hasan et al. 2022]]. *Determination of heavy metals in raw and pasteurized liquid milk of Bangladesh to assess the potential health risks*, Food Research | 2022 | Peer-reviewed | BD Fe, Cu, Mn, Zn, Pb, Cd, Cr, tAs occurrence in 64 raw cow milk samples and 64 liquid pasteurized milk samples collected from 64 administrative areas of Bangladesh... (n=128) |
| 7 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Pb, tHg, Ni, and U in Spanish retail whole cow milk by ICP-MS; Pb detected in non-organic whole milk; finished-milk matrix context supplementing FDA TDS data |
| 8 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 9 | [[sources/pankiewicz2012-thg-dairy-products-poland\|Pankiewicz 2012]]. *Monitoring of total mercury level in selected dairy products from the south-east regions of Poland*, Ecological Chemistry and Engineering A | 2012 | Peer-reviewed | PL tHg occurrence in 48 dairy products (milk, kefir, natural and flavoured yogurt, cream, cream cheese, cottage cheese, butter, milk powder, buttermilk,... (n=48) |
| 10 | [[sources/starska2011-noxious-elements-milk-products-poland\|Starska et al. 2011]]. *Noxious Elements in Milk and Milk Products in Poland*, Polish Journal of Environmental Studies | 2011 | Peer-reviewed | PL Pb, Cd, tHg, tAs occurrence in 483 milk and dairy product samples from all 16 Polish voivodships (2006–2007); 92% domestic production, 8% imported from... (n=483) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 6 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 5 sources added; narrative text revised |
| [7fe044a3de](https://github.com/paleofoundation/heavymetalindex/commit/7fe044a3de) | 2026-08-09 | correction | 5 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
<!-- END: hmi-page-history -->
