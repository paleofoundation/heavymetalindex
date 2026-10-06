---
title: "Frozen peas"
type: ingredient
commodity: frozen-peas
label: "Frozen peas"
aliases: [peas]
category: legume
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: 12
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Cd:
    status: populated
    typical_ppb: [0.3, 2.9]
    p95_ppb: 3.0
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-13
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
    evidence: [{"source_id":"fda2022-tds-elements-fy2018-fy2020","evidence_path":"data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv","row_key":"fda2022-tds-elements-fy2018-fy2020::46::arsenic-total","role":"value","food_id":"46","food_name":"Peas, green, frozen, boiled","metal_species":"tAs","basis":"FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion","geography":"US","year_min":2017,"year_max":2020,"period_scope":"dataset_collection_window","statistic_type":"source_observation","n":3,"non_detect_n":3,"reporting_limit_min_ppb":3,"reporting_limit_max_ppb":3,"min_lower_bound_ppb":0,"max_lower_bound_ppb":0,"censoring":"FDA non-detects are zero-coded; reporting limits are retained separately"}]
    evidence_note: "FDA source observations are non-detects at the reporting limits below. They do not estimate a zero population concentration; other literature remains separate context."
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2
    confidence: low
    n_studies: 2
    last_reviewed: 2026-08-09
  Ni:
    status: populated
    typical_ppb: [15.2, 151.2]
    p95_ppb: 160.6
    confidence: low
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
    typical_ppb: [0, 15]
    p95_ppb: 50
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
    status: populated
    typical_ppb: [0, 1.4]
    p95_ppb: 1.5
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

# Frozen peas

## Overview

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Peas (Pisum sativum) are a leguminous crop that form symbiotic relationships with nitrogen-fixing bacteria in root nodules, a root architecture that also facilitates contact with soil metal fractions including cadmium and lead. Legumes as a plant family generally accumulate Cd from soil at higher rates than cereal crops on equivalent soils, because the organic acids and phytosiderophores exuded from legume roots to support nitrogen fixation also mobilize divalent metals including Cd from the rhizosphere. However, within the legume family, peas accumulate Cd at lower rates than dried beans or lentils because the commercially harvested portion (the immature green seed and pod) is taken earlier in the plant's growth cycle before maximum mineral accumulation in the mature seed. The pod and immature seed together carry less Cd than mature dried peas from the same plant, providing a natural dilution relative to dried legume products. Lead uptake in peas occurs primarily through soil contact and atmospheric deposition onto pod surfaces and is largely a surface contamination pathway, so the contribution of Pb to total plant burden is related to soil Pb and atmospheric deposition at the field site rather than to plant physiology specifically. Nickel is detected in frozen peas at concentrations higher than most metals in this matrix, consistent with Ni being a cofactor in the legume nitrogen-fixation enzyme system (urease), which may facilitate Ni accumulation in legume tissues at rates higher than in non-leguminous crops.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]] |
| Cd | n=3 | 0.3–2.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 dataset; composites=3 | ND (<3; source reporting limit) | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0–1 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]] |
| Ni | n=3 | 15.2–151.2 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0–15 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo\|2]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0–1.4 | low | — |

## Synthesis basis and censoring treatment

The FDA Total Diet Study reported lead below its 4 ppb reporting limit, total mercury below its 1 ppb reporting limit, and total chromium below its 50 ppb reporting limit in all 3 boiled-frozen-pea composites ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The evidence base for this matrix is thin at 3 composites, but the non-detects are left-censored at the reporting limit rather than coded as zeros. The Jiaozuo Chinese-market survey provides supporting fresh-weight context with a vegetable-group lead mean of 0.013 mg/kg (13 ppb), total mercury mean of 0.004 mg/kg (4 ppb), and total chromium mean of 0.032 mg/kg (32 ppb) ([[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Wu 2024]]).

The synthesized central ranges are lead 0 to 5 ppb, total mercury 0 to 1 ppb, and total chromium 0 to 15 ppb, on a boiled-as-consumed fresh-weight basis. Blanching before freezing and boiling before consumption leach water-soluble metal fractions, which keeps the as-consumed pea values low. Confidence remains low across all three analytes because the pooled evidence is limited to the small FDA composite count plus one commercial anchor. No wastewater or hotspot values were admitted to the central estimate.

## Routing

This ingredient is listed in the ingredient index.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 46, "Peas, green, frozen, boiled." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018–FY2020 source observations

FDA measured the prepared foods named below. Each row describes that food and preparation, not every form of this ingredient. Values are µg/kg (ppb) on the FDA sample basis. ND means not detected; it is not a measured zero. Reporting limits can vary between composites. [[sources/fda2022-tds-elements-fy2018-fy2020]]

| FDA food and preparation | Analyte | Composites | Detected | Detected concentrations (ppb) | Reporting limits (ppb) |
| --- | --- | ---: | ---: | --- | --- |
| 46: Peas, green, frozen, boiled | tAs | 3 | 0 | ND in all composites | 3 |
| 46: Peas, green, frozen, boiled | Cd | 3 | 2 | 1.5–3.2 | 1 |
| 46: Peas, green, frozen, boiled | Cr | 3 | 0 | ND in all composites | 50 |
| 46: Peas, green, frozen, boiled | Pb | 3 | 0 | ND in all composites | 4 |
| 46: Peas, green, frozen, boiled | tHg | 3 | 0 | ND in all composites | 1 |
| 46: Peas, green, frozen, boiled | Ni | 3 | 2 | 76–170 | 40 |
| 46: Peas, green, frozen, boiled | U | 3 | 1 | 1.7 | 1 |
<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Geographic variation in frozen pea metal concentrations is primarily driven by soil Cd and soil Pb levels in the producing region. Peas grown on intensively phosphate-fertilized soils carry higher Cd than those grown on organically managed or low-input soils, as phosphate fertilizers are a consistent Cd source regardless of crop type. European pea production on legacy agricultural soils in intensively farmed regions shows higher Cd than production from lower-input systems, though the difference is moderated by the fact that commercial peas are harvested immature and the Cd accumulation curve is not yet at its maximum. Cultivar-level variation in Cd uptake within peas has been noted in some agronomic studies but is not yet characterized at the product level in the current source corpus. The FDA TDS FY2018-FY2020 measured frozen peas ("Peas, green, frozen, boiled") as a composite reflecting US production and import sources (n=3) [[sources/fda2022-tds-elements-fy2018-fy2020]], providing one reference distribution; UK and European distributions from the FSA/Fera survey represent a separate sourcing context.

## Processing effects

Blanching before freezing is standard practice for frozen peas; the blanching step involves brief immersion in hot water or steam to inactivate enzymes and preserve color and texture. Blanching leaches water-soluble metal fractions from pea tissue into the blanch water. For cadmium, which is present partly in water-soluble organic complexes in plant tissue, blanching may reduce Cd concentrations by a modest percentage relative to the raw pea, though the effect is not well characterized quantitatively in the peer-reviewed literature at the level of commercial processing conditions. Boiling of blanched frozen peas before consumption (as captured in the FDA TDS prepared-food measurement) adds a further leaching step; the FDA TDS value for "Peas, green, frozen, boiled" therefore represents the cumulative effect of all processing and preparation steps and is likely lower in Cd and Pb than raw field peas would show. Nickel in the boiled product reflects the retained fraction after blanching and boiling, though the magnitude of the leaching reduction for Ni specifically is not quantified in the current corpus.

## Ingredient-derivative risk

Frozen peas used as an ingredient in composite ready meals, baby food purees, and vegetable blends carry metal concentrations into those products proportional to the pea weight fraction. Pea protein concentrate, produced by extracting and drying the protein fraction from field or marrowfat peas, would be expected to concentrate metals relative to whole peas, since protein-binding concentrations metals during isolation, though this derivative is produced from mature dried peas rather than from the frozen immature pea represented by this commodity page. Split peas and pea flour derived from mature dry peas carry higher Cd than frozen green peas.

## Mitigation options

### Sourcing levers

Specifying field origin from regions with documented low soil Cd, or from production systems subject to fertilizer Cd limits (such as the EU limit for Cd in phosphate fertilizers), reduces the intrinsic Cd burden in the raw peas. Suppliers operating within EU Regulation frameworks for fertilizer Cd are subject to a maximum of 60 mg Cd per kg P2O5 in phosphate fertilizers (with a trajectory to tighten to 40 mg/kg P2O5 in coming years), providing a supply-chain lever that acts upstream of the crop.

### Agronomic levers

Cultivar selection favoring low-Cd-accumulation pea varieties can reduce Cd uptake on a given soil, but the agronomic literature on within-species Cd variation in peas is less developed than for wheat and rice, and specific cultivar recommendations are not available from the current corpus.

### Processing levers

Optimizing blanching conditions (water volume, temperature, and duration) to maximize cadmium leaching into blanch water, with subsequent disposal of that water, offers a processing-stage reduction opportunity. The effect magnitude has not been characterized for commercial frozen pea processing in the current corpus, so this is a research-supported hypothesis rather than a quantified lever.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level testing of incoming raw peas by ICP-MS for Cd and Ni before blanching and freezing provides the most actionable quality signal for manufacturers. Given the low Cd concentrations observed in the FDA TDS (median approximately 1.5 ppb, max 3.2 ppb, n=3) [[sources/fda2022-tds-elements-fy2018-fy2020]], routine lot testing should focus on Ni as the analyte most frequently above detection in this matrix, followed by Cd where a certified program standard or customer specification requires it.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation as updated in [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for Pb in vegetables (general) is 0.10 mg/kg wet weight, and for Cd in vegetables (general) it is 0.050 mg/kg wet weight. These limits apply to frozen peas as a vegetable product placed on the market. There is no specific EU maximum level for Ni in vegetables at the time of this writing, despite Ni being the most consistently detectable analyte in this matrix in the FDA TDS data. In the United States, FDA has not established action levels for metals in frozen vegetables; the FDA TDS provides a reference distribution against which new measurements can be compared, but no enforcement threshold exists for this matrix.

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
3. [[sources/wu2024-heavy-metals-cereals-vegetables-legumes-jiaozuo|Contamination of Heavy Metal(Loid)S in Cereals, Vegetables, and Legumes Purchased from Local Markets of Jiaozuo, China and The Associated Health Risk Assessment]]<span class="hmi-ref-meta">Wu Z · International Journal of Natural Resources and Environmental Studies, 2(1): 180-200 · 2024 · [doi.org/10.62051/ijnres.v2n1.21](https://doi.org/10.62051/ijnres.v2n1.21)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Peas, green, frozen, boiled (n=3); detectable concentrations for Cd, Ni, U |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 1 source removed; narrative text revised |
| [4aa8d04074](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d04074) | 2026-08-11 | major | 1 source added; narrative text revised |
| [0a907f56a4](https://github.com/paleofoundation/heavymetalindex/commit/0a907f56a4) | 2026-08-09 | correction | Narrative text revised |
| [942bc6b1bb](https://github.com/paleofoundation/heavymetalindex/commit/942bc6b1bb) | 2026-08-09 | correction | 2 sources added; contamination-profile values revised; 1 section added |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
