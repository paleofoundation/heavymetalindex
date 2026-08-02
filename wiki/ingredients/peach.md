---
title: "Peach"
type: ingredient
commodity: peach
label: "Peach"
aliases: [peaches, Peaches, "ingredients/peaches"]
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 9]
    p95_ppb: 12
    confidence: low
    n_studies: 2
    last_reviewed: 2026-06-11
    basis: raw-peach-wet-weight
  Cd:
    status: populated
    typical_ppb: [0, 1.8]
    p95_ppb: 2.9
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
    typical_ppb: [0, 8.3]
    p95_ppb: 9.3
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
    typical_ppb: [0, 100]
    p95_ppb: 107
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
    typical_ppb: [0, 8]
    p95_ppb: 12
    confidence: low
    n_studies: 3
    last_reviewed: 2026-06-11
    basis: raw-peach-wet-weight
    speciation_note: total-Cr-only; no Cr-VI measurement in corpus
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 1.0
    confidence: high
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [fruit-purees]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-06-11
sources: 7
---

# Peach

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Why this commodity accumulates heavy metals

Peach (Prunus persica) is a stone fruit grown on tree branches well above the soil surface, and the edible flesh is separated from the environment by a thin skin. The primary pathway for heavy metal accumulation in peach fruit is atmospheric deposition of lead-bearing particulate matter onto the fruit surface, which is then retained in the skin or carried into harvested samples that include skin. Lead does not translocate efficiently from roots through the woody stem and bark to the fruit interior under normal orchard conditions, so interior flesh concentrations are very low. Cadmium accumulation follows a similar pattern: uptake from soil through roots, limited translocation to the fruit, with the result that peach flesh cadmium concentrations are among the lowest observed in monitored food groups.

A distinct historical contamination pathway relevant to peaches is orchard soil legacy contamination from lead arsenate pesticides, which were applied extensively in stone-fruit orchards throughout the first half of the twentieth century across the United States, United Kingdom, and Europe. These applications left residual lead and arsenic in orchard soils that persist for decades, and tree roots in these soils can reflect slightly elevated Pb uptake relative to orchards on uncontaminated soils, even when surface fruit concentrations remain low.

The regulatory relevance of peach in the United States context is driven primarily by its use as a puree in infant food formulations, where FDA's Closer to Zero program has established action levels for Pb in fruit-and-vegetable purees consumed by infants and young children. Even though peach itself is a low-accumulation fruit, the regulatory framework applies because of the vulnerable-population exposure pattern.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Cd | n=2 | 0–1.8 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–8.3 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 0–100 | high | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 0–8 | low | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|2]], [[sources/rezaei2020-fruits-markazi-essential-elements\|3]], [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | high | — |

## Synthesis basis and censoring treatment

The lead, chromium, and total-mercury cells were resynthesized on 2026-06-11 on a raw peach wet-weight basis, the form in which the fruit enters the ingredient supply chain and the basis on which FDA Total Diet Study Food 83, "Peach, raw/frozen," reports.

Values below the analytical limit of detection or quantification are treated as left-censored, not as measured zeros. The earlier profile reported lead and chromium at typical and 95th-percentile values of zero. Those figures were an artifact of the FDA Total Diet Study composites for raw/frozen peach, in which every sample fell below the reporting limit and the reported zeros were pooled as literal zeros. For lead, FDA reported all 27 composites below the 4 µg/kg reporting limit; for chromium, all 27 below the 50 µg/kg reporting limit; for mercury, all 27 below the 1 µg/kg reporting limit ([[sources/fda2022-tds-elements-fy2018-fy2020|FDA 2022]]). The resynthesis replaces the literal zeros with a left-censored floor at the FDA reporting limit and, where a second source supplies a usable fresh-fruit measurement, recovers the upper distribution from primary occurrence literature in which these metals are low but non-zero in peach flesh.

The lead floor is set at the FDA 4 µg/kg reporting limit. The central and upper distribution rests on the Pakistani retail survey ([[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Rahim et al. 2020]]), which reported peach lead at 0.0738 mg/kg dry weight (73.8 µg/kg) from 28 Khyber Pakhtunkhwa markets, a low-industry baseline region. That value is on a dry-weight basis; the source itself states that at typical peach moisture of about 85 to 90 percent the fresh-weight equivalent is roughly seven to ten times lower, placing the as-marketed wet-weight central estimate near 9 µg/kg and the upper bound near 12 µg/kg. Because the wet-weight central anchor rests on a single dry-weight-converted survey set against a fully censored FDA cell, lead confidence is capped at low. The chromium floor is the FDA 50 µg/kg reporting limit; chromium is reported as total chromium only, no peach hexavalent-chromium measurement exists in the corpus, and Cr-VI is never inferred from total chromium. The total-chromium distribution rests on two dry-weight fresh-peach anchors converted to wet weight on the same moisture factor: Rahim reports peach total chromium at 0.0641 mg/kg dry weight (about 8 µg/kg wet weight), and the Markazi-province industrial-zone survey reports peach total chromium at 2.86 µg/kg dry weight (well under 1 µg/kg wet weight) ([[sources/rezaei2020-fruits-markazi-essential-elements|Rezaei et al. 2020]]). Both fresh-fruit anchors sit far below the FDA 50 µg/kg reporting limit, so the central estimate is low and confidence is low.

Total mercury is recorded as a reviewed data gap. The only peach mercury measurement in the corpus is the fully censored FDA Total Diet Study cell, in which all 27 composites fell below the 1 µg/kg reporting limit, and no primary fresh-peach source in the corpus measures mercury, so no distribution is published. The earlier literal-zero entry overstated the strength of the evidence and has been replaced with an honest single-source censored gap.

Dried and canned peach carry substantially higher per-gram metal loads than fresh peach and are recorded as separate concentration strata, not folded into the fresh-peach percentiles above. A single dried-peach sample reported lead at 1.093 mg/kg and total chromium at 1.289 mg/kg ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|Hadi et al. 2025]]), reflecting weight-loss concentration during drying rather than a higher fresh-fruit burden. Historical canned-peach composites from the lead-soldered-can era reported lead near 133 µg/kg ([[sources/dabeka1995-canadian-food-composites-metals|Dabeka et al. 1995]]); these values reflect packaging-derived lead from solder no longer in use and are not representative of modern canned peach. A secondary narrative review reports peach by-product (peel and seed) total chromium at 0.17 to 1.38 mg/kg and lead below 0.10 mg/kg ([[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Tsegay et al. 2025]]); these by-product values describe discarded peel and kernel fractions rather than edible flesh and are retained as low-weight context only.

## Routing

This node is linked from [[products/fruit-purees]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

## FDA TDS FY2018-FY2020 Evidence

FDA's FY2018-FY2020 Total Diet Study dataset includes this page's routed matrix as TDS Food 83, "Peach, raw/frozen." The normalized row-level data is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with reporting limits preserved separately; reported zeroes are not rewritten as `<LOD` without a source-specific rule. [[sources/fda2022-tds-elements-fy2018-fy2020]]

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Peach, raw/frozen" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | p10 | p50 | p90 | p95 | max | Schema |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Cd | 27 | 0 | 0 | 0 | 1.76 | 2.91 | 3.4 | in profile |
| Cr | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| Ni | 27 | 0 | 0 | 57 | 100 | 107 | 110 | in profile |
| Pb | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |
| U | 27 | 0 | 0 | 0 | 0 | 0.98 | 1.6 | in profile |
| tAs | 27 | 0 | 0 | 3.6 | 8.34 | 9.35 | 12 | in profile |
| tHg | 27 | 0 | 0 | 0 | 0 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

Peach metal concentrations vary primarily as a function of orchard soil history and geographic origin rather than cultivar. Orchards on former lead-arsenate-treated land, particularly in eastern US apple and stone-fruit production belts, show higher Pb and As in soil and, to a lesser extent, on fruit surfaces. California and Pacific Northwest peach production, on soils with less lead-arsenate history, tends to show lower surface lead. Clingstone versus freestone peach varieties do not show documented differences in metal accumulation; the primary variance driver is soil provenance. The FDA TDS FY2018-FY2020 dataset, which samples retail product across US purchase locations, reflects the integrated distribution of US commercial production and import ([[sources/fda2022-tds-elements-fy2018-fy2020]]).

## Processing effects

Peeling or enzymatic skin removal, as used in commercial peach processing for baby food, removes the surface-deposited lead fraction and reduces Pb concentration in the prepared product relative to whole skin-on fruit. Canning in syrup introduces a dilution effect for metals in the fruit flesh. Pureed and homogenized peach for infant food formulations reflects the metal burden of the skinless processed flesh rather than whole-fruit skin-on raw values.

Freezing does not alter metal concentrations. Cooking (heating) does not appreciably reduce heavy metal concentrations in the fruit flesh. The wet-weight basis reporting convention means that any moisture loss during processing (concentration during cooking) would appear to raise concentrations proportionally.

## Ingredient-derivative risk

Fresh and frozen peach are the raw-commodity forms. Canned peach slices in syrup represent a processed derivative where the brine dilutes metals but also where any Sn migration from unlined tin cans applies (Sn is not a primary concern for peach given its near-neutral pH, but applies in principle to all canned acidic or semi-acidic foods). Peach puree, particularly in the single-serve infant food segment, concentrates the regulatory interest because it is a direct infant exposure vector. Peach juice, which removes pulp solids, has a different metal profile from whole-fruit puree; lead and cadmium in juice depend primarily on how much particulate fruit material passes into the juice fraction.

## Mitigation options

### Sourcing levers

Sourcing peaches from orchards with documented soil lead and arsenic below threshold levels, particularly avoiding former lead-arsenate-treated orchards for products destined for infant food formulations, is the highest-impact sourcing lever. Supplier orchard-provenance documentation and periodic soil screening are the verification mechanisms.

### Agronomic levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling before puree production removes the surface-deposited lead fraction and is the standard commercial practice for infant-grade peach puree. This step also removes any residual pesticide-related surface contamination.

### Formulation levers

Diluting peach puree with other low-metal fruit purees in blended infant food formulations reduces the per-serving contribution from peach. Given that peach is already a low-metal fruit, formulation leverage is primarily relevant when orchard-specific sourcing cannot be guaranteed.

### Testing and QC levers

Lot-level ICP-MS testing of incoming peach puree with Pb acceptance criteria provides assurance for infant food manufacturers. Given the low baseline concentrations typical of peach, most commercial lots will be well below EU and proposed FDA action level thresholds, but periodic testing serves as a supply-chain audit function.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for lead in stone fruit (including peach) is 0.10 mg/kg fresh weight, and for cadmium in stone fruit is 0.050 mg/kg fresh weight. These apply to fresh peach as placed on the market.

For processed peach products intended for infants and young children, the EU applies lower Pb limits under the same regulation for processed cereal-based foods and baby foods. FDA's Closer to Zero program ([[regulations/fda-closer-to-zero]]) has proposed action levels for Pb in fruit purees and juices consumed by infants and young children; the peach category is within scope of this framework. No Codex Alimentarius maximum level for Cd or Pb specifically in stone fruit applies at the same limit values as the EU, but Codex sets guidance levels for fruit generally ([[regulations/codex-cadmium-mls]]).

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 7 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan|Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits]]<span class="hmi-ref-meta">Rahim M, Saqib NU, Wahid F, Khan N, and Alrawi LI · Journal of Physical Science · 2020 · [doi.org/10.21315/jps2020.31.2.5](https://doi.org/10.21315/jps2020.31.2.5)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/rezaei2020-fruits-markazi-essential-elements|Essential elements in the different type of fruits, soil and water samples collected from Markazi province, Iran: a health risk assessment study]]<span class="hmi-ref-meta">Mohammad Rezaei, Yousef Fakhri, Maryam Abtahi, Majid Keramati, Gholamreza Ghasemi, Mohammad H. Moradi, et al. · Quality Assurance and Safety of Crops & Foods · 2020 · [doi.org/10.15586/qas.v12i3.777](https://doi.org/10.15586/qas.v12i3.777)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/hadi2025-dried-fruits-heavy-metals-iraq|Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq]]<span class="hmi-ref-meta">Hadi QM, Mahdi FA, Hamood FJ, Abbas SH, and Abojassim AA · International Journal of Analytical Chemistry · 2025 · [doi.org/10.1155/ianc/3934929](https://doi.org/10.1155/ianc/3934929)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/dabeka1995-canadian-food-composites-metals|Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988]]<span class="hmi-ref-meta">Dabeka RW and McKenzie AD · Journal of AOAC International · 1995 · [academic.oup.com](https://academic.oup.com/jaoac/article/78/4/897/5685687)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review|Toxicological qualities and detoxification trends of fruit by-products for valorization: A review]]<span class="hmi-ref-meta">Tsegay ZT, Smaoui S, and Varzakas T · Open Life Sciences 20:20251105 · 2025 · [doi.org/10.1515/biol-2025-1105](https://doi.org/10.1515/biol-2025-1105)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/tsegay2025-fruit-byproduct-toxicology-detoxification-review\|Tsegay et al. 2025]]. *Toxicological qualities and detoxification trends of fruit by-products for valorization: A review*, Open Life Sciences 20:20251105 | 2025 | Peer-reviewed | tAs, Pb, Cd, Cr, Ni, Co, tHg occurrence in Narrative review of secondary literature on by-products (peels, pomace, seeds, kernels, rinds) from the globally highest-produced fruits in... |
| 2 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 3 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | US-FDA Pb, Cd, tAs, iAs, tHg, Ni, Cr concentrations |
| 4 | [[sources/rahim2020-toxic-heavy-metals-fruits-pakistan\|Rahim et al. 2020]]. *Analysis of Toxic Heavy Metal Content of the Most Widely Consumed Fruits*, Journal of Physical Science | 2020 | Peer-reviewed | Cr, Ni, Cd, and Pb in Pakistani peach samples from 28 Khyber Pakhtunkhwa markets, providing a low-contamination dry-weight baseline |
| 5 | [[sources/blunden2003-tin-canned-food-review\|Blunden et al. 2003]]. *Tin in canned food: a review and understanding of occurrence and effect*, Food and Chemical Toxicology, Vol. 41, Issue 12, pp. 1651-1662 | 2003 | Peer-reviewed | UK/EU/US Sn occurrence in Narrative review of tin-in-canned-food literature commissioned by ITRI Ltd (the International Tin Research Institute) compiling published primary clinical,... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
