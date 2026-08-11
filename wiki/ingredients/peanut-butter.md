---
title: "Peanut butter"
type: ingredient
commodity: peanut-butter
label: "Peanut butter"
aliases: ["Peanut butter, creamy", "peanut butter"]
category: nut-seed
tds_food:
  number: 47
  description: "Peanut butter, creamy"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5.3, 6]
    p95_ppb: 6.0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [44.6, 59]
    p95_ppb: 59.5
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [3, 9]
    p95_ppb: 10
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [6.3, 9.5]
    p95_ppb: 9.7
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [452, 804]
    p95_ppb: 847
    confidence: low
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
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
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
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 6
---

# Peanut butter

## Overview

This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 47, "Peanut butter, creamy." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Peanut butter is manufactured from roasted peanuts (Arachis hypogaea), a legume that grows its pods underground in direct soil contact during the pod-fill stage. This subterranean pod development distinguishes peanuts from above-ground legumes and is the primary anatomical reason peanuts accumulate cadmium and nickel at higher concentrations than beans or lentils grown above ground. Cadmium in soil is taken up through root membrane transporters and translocates to pods and seeds during pod fill; the soil-contact surface of the pod shell creates an additional passive metal deposition pathway. Nickel follows a similar soil-contact accumulation pattern, and peanuts are consistently identified as one of the higher-Ni foods in systematic occurrence surveys ([[sources/flyvholm1984-nickel-content-food-dietary-intake]]).

Peanut butter concentrates the metals present in peanuts because it is made by grinding large quantities of peanuts into a paste. The grinding and blending process does not remove metals, and the minor additions of salt and stabilising oils do not dilute metals in a meaningful way given that they constitute a small mass fraction of the finished product. The roasting step that precedes grinding alters moisture content and surface chemistry but does not volatilise or otherwise remove lead, cadmium, or nickel. As a result, peanut butter's metal profile directly reflects that of the source peanuts, with any variation driven primarily by origin soil cadmium levels and peanut growing conditions.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5.3–6 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 44.6–59 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/schaefer2020-cadmium-mitigation-strategies\|2]] |
| iAs | n=2 | 3–9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/hovanec2004-peanut-butter-arsenic-speciation\|2]] |
| tAs | n=2 | 6.3–9.5 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]], [[sources/hovanec2004-peanut-butter-arsenic-speciation\|2]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 452–804 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 0 | low | — |

## Ranges by source, region, and variety

Peanut Cd and Ni concentrations vary by growing region as a function of soil cadmium levels and soil type. Peanuts grown on sandy, low-pH soils with naturally elevated cadmium, common in parts of West Africa and some South American production zones, accumulate more Cd than peanuts grown on calcareous or managed soils in the United States (Virginia, Southeast US) or Argentina. Runner-type peanuts dominant in US production, Virginia types used for premium nut markets, and Spanish types used in candy applications do not show systematic differences in metal accumulation attributable to variety alone; soil origin is the dominant driver. Chinese peanut production, which represents a large share of global supply, shows variable Cd depending on soil provenance within China's diverse agricultural regions.

The FDA TDS FY2018-FY2020 dataset, which represents US retail peanut butter (TDS Food 47, n=3), captures US market peanut butter from peanuts predominantly grown in the US Southeast and Southwest, with Cd detections at 42-60 ppb (median approximately 55 ppb) and Ni at 450-890 ppb ([[sources/fda2022-tds-elements-fy2018-fy2020]]). These n=3 observations are not sufficient to characterise the distribution; they are flagged here as indicative pending additional sourcing.

## Processing effects

Dry roasting, the dominant industrial process for peanut butter production, heats peanuts to 160-175 degrees Celsius. At these temperatures, volatile organomercury compounds would be removed, but inorganic metals (Pb, Cd, Ni) are not appreciably volatilised and remain in the peanut matrix. The roasting step does reduce moisture content, which means roasted peanut metal concentrations are slightly higher on a wet-weight basis than raw peanut concentrations from the same lot. Blanching (skin removal after roasting) removes the papery seed coat, which may carry marginally higher metal concentrations than the cotyledon, but the seed coat is a small mass fraction and the blanching contribution to overall reduction is minor.

Grinding and homogenisation create a uniform paste that distributes metals evenly throughout the product. No size separation or centrifugation step in conventional peanut butter production selectively removes a metal-bearing fraction. Defatted peanut flour production, by contrast, removes the oil fraction by pressing or solvent extraction, and since metals are not oil-soluble, they concentrate in the defatted meal relative to the original peanut; defatted peanut flour therefore has higher metal concentrations per unit mass than peanut butter.

## Ingredient-derivative risk

Peanut butter is the concentrated paste form, representing the metals of the whole peanut (minus seed coat and any roasting-step moisture loss). Refined peanut oil, produced by solvent extraction and refining (degumming, bleaching, deodorisation), contains negligible heavy metal residues because metals partition to the aqueous and solid phases during refining. Defatted peanut meal and peanut flour, produced as co-products of oil extraction, concentrate metals above whole-peanut levels and are used as protein ingredients in food formulations. Peanut flour is therefore a higher-risk derivative than peanut butter itself on a per-unit-mass basis.

## Mitigation options

### Sourcing levers

Specifying peanut origin to prefer US Southeast or Argentine production over unverified West African or Chinese origin reduces average Cd exposure given documented regional soil differences. Requiring Cd and Ni specifications from peanut suppliers and testing incoming peanut lots or finished peanut butter is the supply-chain verification mechanism. Given the small TDS sample size (n=3), supplier-level testing provides more reliable lot-specific data than relying on published occurrence averages.

### Agronomic levers

Soil liming in peanut-producing regions to raise pH above 6.5 reduces Cd bioavailability. Soil selection (avoiding fields with documented elevated Cd history) is a pre-planting lever available to growers and large commercial buyers with supply-chain control.

### Processing levers

Blanching (seed coat removal) provides marginal Cd reduction. Washing peanuts in water before roasting is not standard in commercial peanut butter production and has limited impact on metals embedded in the cotyledon tissue. No validated commercial-scale metal-reduction processing step is documented for peanut butter specifically.

### Formulation levers

In composite products where peanut butter contributes a large share of Ni (e.g., snack bars), substituting a portion with almond butter (lower Ni) or sunflower butter would reduce total Ni per serving. For Cd, the contribution from peanut butter is moderate (40-60 ppb range in TDS data); formulation dilution is relevant only in high-peanut-fraction products.

### Testing and QC levers

Lot-level ICP-MS testing of incoming peanut butter for Cd and Ni, with documented acceptance criteria, is the most direct QC lever. Given that TDS data show consistent Cd detectability at 40-60 ppb and Ni at 400-900 ppb, both analytes merit routine monitoring. Third-party verification adds audit-trail defensibility.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in peanuts (groundnuts) placed on the market for direct human consumption or use as food ingredient is 0.10 mg/kg, and for lead in peanuts is 0.10 mg/kg fresh weight ([[regulations/eu-2023-915-cadmium]]). These limits apply to peanuts and by extension to peanut butter manufactured from conforming peanuts, though peanut butter as a finished product is regulated under the general processed foods provisions.

Codex Alimentarius has adopted Cd maximum levels for groundnuts; the Codex Cd ML for peanuts intended for further processing is higher than the direct-consumption ML ([[regulations/codex-cadmium-mls]]). No US FDA action level for Cd or Ni specifically in peanut butter applies under the current regulatory framework; FDA Closer to Zero ([[regulations/fda-closer-to-zero]]) does not currently list peanut butter as a priority category. EFSA's 2020 Ni assessment identifies peanuts and peanut-derived products as significant contributors to dietary Ni intake in European populations and uses peanut occurrence data in its chronic exposure modelling.

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Peanut butter, creamy" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 42 | 60 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 450 | 890 | in profile |
| Pb | 3 | 5.2 | 6.1 | in profile |
| U | 3 | 0 | 0 | in profile |
| tAs | 3 | 5.9 | 9.9 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fda2022-tds-elements-fy2018-fy2020|FY2018-FY2020 TDS Elements Analytical Results]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Total Diet Study · 2022 · [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results)</span><span class="hmi-ref-tag">Dataset</span>
2. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Nickel Content of Food and Estimation of Dietary Intake]]<span class="hmi-ref-meta">Mari-Ann Flyvholm, Gitte Dalsgaard Nielsen, and Allan Andersen · Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 · 1984 · [doi.org/10.1007/BF01043419](https://doi.org/10.1007/BF01043419)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-tds-elements-2018-2020\|FDA 2022]]. *Total Diet Study Report: Fiscal Years 2018-2020 Elements Data*, U.S. Food and Drug Administration, Total Diet Study Program | 2022 | Government report | US Pb, Cd, tAs, iAs, tHg, Ni, Cr, U, Sb occurrence in Composite TDS samples across 307 foods (3,241 food/beverage samples + 35 bottled-water samples) collected across six US regions... (n=3276) |
| 2 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Peanut butter, creamy (n=3); detectable concentrations for Cd, Ni, Pb, tAs |
| 3 | [[sources/schaefer2020-cadmium-mitigation-strategies\|Schaefer et al. 2020]]. *Cadmium: Mitigation strategies to reduce dietary exposure*, Journal of Food Science | 2020 | Review | FDA-authored Cd mitigation review identifying peanut butter and peanuts among elevated-Cd commodities with soil-uptake and processing levers |
| 4 | [[sources/fsanz2008-cadmium-peanuts-assessment\|Zealand 2008]]. *Final Assessment Report - Application A552: Cadmium in peanuts*, Food Standards Australia New Zealand Final Assessment Report 12-08 | 2008 | Government report | AU/NZ/CN Cd occurrence in FSANZ regulatory assessment using Australian AQIS 2001-2006 imported-food cadmium tests, USFDA Total Diet Study 1991-2004 peanut values, Chinese... |
| 5 | [[sources/hovanec2004-peanut-butter-arsenic-speciation\|Hovanec 2004]]. *Arsenic speciation in commercially available peanut butter spread by IC-ICP-MS*, Journal of Analytical Atomic Spectrometry | 2004 | Peer-reviewed | First published As speciation in US retail peanut butter by IC-ICP-MS showing organic As species (DMA, MMA) dominate over iAs |
| 6 | [[sources/dabeka1995-canadian-food-composites-metals\|Dabeka et al. 1995]]. *Survey of Lead, Cadmium, Fluoride, Nickel, and Cobalt in Food Composites and Estimation of Dietary Intakes of These Elements by Canadians in 1986-1988*, Journal of AOAC International | 1995 | Peer-reviewed | CA Pb, Cd, Ni, Co occurrence in Five Canadian total-diet composite groups, each with 113 composites and 39 composite subsets, prepared from foods purchased in... (n=760) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
