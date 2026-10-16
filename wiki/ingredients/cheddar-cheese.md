---
title: "Cheddar cheese"
type: ingredient
commodity: cheddar-cheese
label: "Cheddar cheese"
aliases: [cheddar]
category: dairy
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 300]
    p95_ppb: 800
    confidence: low
    n_studies: 4
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [0, 100]
    p95_ppb: 250
    confidence: low
    n_studies: 3
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::12::arsenic-total","role":"value","food_id":"12","food_name":"Cheese, cheddar (sharp/mild)","metal_species":"tAs","basis":"FDA TDS prepared-food composite in the stated food form; original preparation retained; no basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":27,"non_detect_n":27,"reporting_limit_min_ppb":3,"reporting_limit_max_ppb":3,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 3
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [0, 200]
    p95_ppb: 1000
    confidence: low
    n_studies: 2
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
    typical_ppb: [0, 50]
    p95_ppb: 50
    confidence: low
    n_studies: 1
    last_reviewed: 2026-08-09
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [0, 1.2]
    p95_ppb: 1.3
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
hero_image: /static/heroes/cheddar-cheese-crackers-pizza.webp
hero_image_alt: "A wedge of orange cheese, golden crackers and a cheese pizza slice illustrating cheddar cheese ingredient context."
---

# Cheddar cheese

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Cheddar cheese, like other dairy products derived from cow's milk, accumulates heavy metals at very low concentrations relative to plant foods. The primary route is dietary transfer: cows ingest metals through feed and water, and a small fraction partitions into milk, where it distributes between the aqueous and fat fractions. During cheesemaking, cadmium and lead tend to partition into the whey (aqueous) phase rather than the curd, meaning cheese is generally lower in cadmium than the corresponding volume of milk. The FDA Total Diet Study FY2018-FY2020 found cadmium, lead, total arsenic, total mercury, nickel, and chromium all at or below reporting limits in 27 composite cheddar cheese samples, with only uranium detectable in trace amounts (maximum 1.3 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The FSA/Fera FS102048 UK survey also measured cheddar cheese and similarly found very low concentrations [[sources/fsa2016-infant-food-formula-metals-survey]]. The concentration effect of aging (which reduces moisture content) applies to all constituents including metals, but the overall metal burden in aged cheddar remains extremely low relative to plant-derived ingredients.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 0–300 | low | [[sources/capcarova2023-mozzarella-trace-elements-slovakia\|1]], [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|2]], [[sources/erol2025-turkish-cheese-metals\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|4]] |
| Cd | n=3 | 0–100 | low | [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese\|1]], [[sources/starska2011-noxious-elements-milk-products-poland\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=1 dataset; composites=27 | ND (<3; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=3 | 0–1 | low | [[sources/erol2025-turkish-cheese-metals\|1]], [[sources/pankiewicz2012-thg-dairy-products-poland\|2]], [[sources/fda2022-tds-elements-fy2018-fy2020\|3]] |
| Ni | n=2 | 0–200 | low | [[sources/capcarova2023-mozzarella-trace-elements-slovakia\|1]], [[sources/fda2022-tds-elements-fy2018-fy2020\|2]] |
| Al | data gap | — | — | — |
| Cr | n=1 | 0–50 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.2 | low | — |

## Synthesis basis and censoring treatment

The per-analyte values above were resynthesized on 2026-08-09 on a matured-cheese wet-weight basis. The earlier profile reported all five analytes at zero, an artifact of FDA Total Diet Study cheddar composites that fell below the reporting limit (lead 4, cadmium 1, mercury 1, nickel 40, chromium 50 micrograms per kilogram); below-limit non-detects are treated here as left-censored, not as measured zeros.

Cheese-making concentrates the metals present in milk, and matured-cheese datasets outside the United States report lead and cadmium well above the FDA cheddar reporting limit. [[sources/capcarova2023-mozzarella-trace-elements-slovakia|Capcarova et al. 2023]] reports Italian mozzarella lead of 580 to 810 and nickel of 720 to 1610 micrograms per kilogram in solid fractions; [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim et al. 2024]] reports Egyptian matured-cheese lead of 340 to 610 and cadmium of 120 to 250; [[sources/erol2025-turkish-cheese-metals|Erol and Urkek 2025]] documents a single artisanal outlier at 1788 micrograms per kilogram lead and 468 total mercury. The wide ranges and low confidence reflect an unresolved discrepancy between United States cheddar, which fell below the reporting limit, and European and Middle-Eastern matured cheeses, which do not. Total mercury and chromium remain trace outside occasional artisanal outliers, and no cheddar-specific total-chromium detection is available in the focused source set, so chromium is reported as the left-censored upper bound at the FDA reporting limit.

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 12, "Cheese, cheddar (sharp/mild)." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 12: Cheese, cheddar (sharp/mild) | tAs | 27 | 0 | ND in all composites | 3 |
| 12: Cheese, cheddar (sharp/mild) | Cd | 27 | 0 | ND in all composites | 1 |
| 12: Cheese, cheddar (sharp/mild) | Cr | 27 | 0 | ND in all composites | 50 |
| 12: Cheese, cheddar (sharp/mild) | Pb | 27 | 0 | ND in all composites | 4 |
| 12: Cheese, cheddar (sharp/mild) | tHg | 27 | 0 | ND in all composites | 1 |
| 12: Cheese, cheddar (sharp/mild) | Ni | 27 | 0 | ND in all composites | 40 |
| 12: Cheese, cheddar (sharp/mild) | U | 27 | 9 | 1–1.3 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA Total Diet Study FY2018-FY2020 reports all major metals at or below the reporting limit for cheddar cheese in 27 composite samples, with uranium as the sole detectable element (maximum 1.3 ppb) [[sources/fda2022-tds-elements-fy2018-fy2020]]. The FSA/Fera FS102048 survey similarly found very low metal concentrations in cheddar across UK retail samples [[sources/fsa2016-infant-food-formula-metals-survey]]. Variation across cheddar varieties (mild, sharp, extra-sharp) is primarily a function of aging time and moisture content; as moisture decreases during aging, metal concentrations on a wet-weight basis increase proportionally, but from such a low baseline that even aged cheddar remains extremely low. Differences between cow breeds, feeding regimes (grass-fed vs grain-fed), and regional soil conditions are expected to introduce some variation in milk cadmium and lead, but the magnitude for cheese specifically has not been characterised in the current corpus.

## Processing effects

Cheesemaking involves acidifying milk with starter cultures, adding rennet to form a curd, cutting and draining the curd (which carries metals into the whey effluent), pressing, and aging. The whey-partition step is the most significant processing effect: cadmium preferentially partitions into the aqueous whey phase rather than the fat-and-protein curd, so the curd that forms cheese contains less cadmium per unit mass than the input milk. Lead follows a similar partition pattern. Uranium, which appeared as the only detectable metal in the FDA TDS cheddar data, may be retained in the curd fraction via binding to protein. Aging concentrates all retained metals in proportion to the reduction in moisture content; however, because the starting concentrations are so low, this concentration effect does not bring cheddar close to applicable regulatory limits even for long-aged varieties.

## Ingredient-derivative risk

Processed cheese products (American cheese, cheese slices, cheese sauces) that use cheddar as a base may incorporate additional ingredients with higher metal burdens, such as whey solids, modified starch, or flavouring agents; the composite product's metal profile reflects the ingredient blend rather than cheddar alone. Cheese powders, used in snack seasonings and packaged foods, concentrate all constituents including metals relative to fresh cheddar, but from a baseline so low that the resulting concentrations remain in the very-low range. No specific derivative risk has been identified in the current corpus that would distinguish cheddar-derived products as a meaningful metal exposure source.

## Mitigation options

### Sourcing levers

Cheddar cheese sourced from dairy operations with clean pasture land and clean water supply will carry the lowest metal burden in milk. For regions where environmental lead contamination of soil or water is a concern, selecting suppliers with documented water quality monitoring reduces the risk of elevated milk lead. However, the practical importance of sourcing levers is low given the already very low baseline concentrations observed in both US and UK surveys.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Standard cheesemaking practices, particularly the separation of whey from curd, already achieve substantial reduction in cadmium and lead relative to raw milk. No additional processing lever beyond standard practice is indicated given the existing very low concentrations.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Routine lot-level testing for heavy metals in cheddar cheese is generally not warranted given the low concentrations observed in multiple national surveys. For specialty applications where cheddar cheese powder is used as a significant fraction of a finished product formulation, confirmatory ICP-MS testing may be appropriate as part of a broader ingredient testing program. EU dairy Pb limits (0.020 mg/kg for milk, applied to cheese as a milk-equivalent basis in some regulatory interpretations) are sufficiently high that exceedances from routine cheddar would be unexpected.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The EU sets a lead maximum level of 0.020 mg/kg for raw milk and heat-treated milk; for cheese, the applicable limit and its basis (as-product versus milk-equivalent) depends on the regulatory instrument in effect. Under [[regulations/eu2023-contaminants-maximum-levels]], dairy product limits apply to the product as placed on the market. The EU Regulation 2023/915 ([[regulations/eu-2023-915-cadmium]]) sets a cadmium maximum for cheese; exact cheese-specific values should be verified against the current regulatory text. No US FDA action level for Pb or Cd applies specifically to cheddar cheese; the FDA Closer to Zero program ([[regulations/fda-closer-to-zero]]) covers infant and toddler foods. Codex CXS 193-1995 ([[regulations/codex-cadmium-mls]]) provides international cadmium limits for dairy products. Given the TDS findings of all-below-reporting-limit concentrations for Cd, Pb, tAs, tHg, Ni, and Cr in 27 samples [[sources/fda2022-tds-elements-fy2018-fy2020]], typical US market cheddar is far below all applicable regulatory ceilings.

<!-- BEGIN: hmi-profile-evidence-correction -->
## Interpretation of source evidence

Source observations and population estimates are different. A non-detect supplies a reporting-limit bound for the tested composites. It does not show that this ingredient contains zero metal. Where a previous profile lacked matching source, species or basis support, its generic concentration has been withdrawn; the available source evidence is kept below.

**tAs.** FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context.
<!-- END: hmi-profile-evidence-correction -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results)</span><span class="hmi-ref-tag">Dataset</span>
3. [[sources/capcarova2023-mozzarella-trace-elements-slovakia|Levels of Essential and Trace Elements in Mozzarella Available on the Slovak Market with the Estimation of Consumer Exposure]]<span class="hmi-ref-meta">Capcarova M, Frigenti M, Arvay J, Janco I, Harangozo L, Bandlerova A, et al. · Biological Trace Element Research · 2023 · [doi.org/10.1007/s12011-023-03813-x](https://doi.org/10.1007/s12011-023-03813-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Heavy metals in raw milk and Egyptian cheese types]]<span class="hmi-ref-meta">Ibrahim SA, El-Sohaimy SA, Abd El-Aziz M, and Shehata MG · Open Veterinary Journal · 2024 · [doi.org/10.5455/OVJ.2024.v14.i2.4](https://doi.org/10.5455/OVJ.2024.v14.i2.4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/erol2025-turkish-cheese-metals|Safety and Nutritional Profile of Traditional Turkish Cheeses: A Comprehensive Study on Their Mineral Content, Heavy Metal Contamination, and Health Risks of Aho, Golot, and Telli]]<span class="hmi-ref-meta">Erol S and Ürkek B · Food Science & Nutrition · 2025 · [doi.org/10.1002/fsn3.70560](https://doi.org/10.1002/fsn3.70560)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cheese, cheddar (sharp/mild) (n=27); detectable concentrations for U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 3 sources removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 3 sources added; narrative text revised |
| [7fe044a3de](https://github.com/paleofoundation/heavymetalindex/commit/7fe044a3de) | 2026-08-09 | correction | 3 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
<!-- END: hmi-page-history -->
