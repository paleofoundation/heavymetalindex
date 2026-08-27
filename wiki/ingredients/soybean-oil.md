---
type: ingredient
commodity: soybean-oil
title: "Soybean Oil"
label: "Soybean Oil"
aliases: [glycine-max-oil, refined-soybean-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 250
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
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
    last_reviewed: 2026-05-16
drivers: [seed-source, glyphosate-cultivar-correlation, extraction-method, refining-clay, packaging]
lower_risk_variants: ["[[ingredients/refined-soybean-oil-glass-bottled]]"]
higher_risk_variants: ["[[ingredients/cold-pressed-soybean-oil]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 11
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 5
---

# Soybean Oil

## Overview

Soybean oil (Glycine max seed oil) is the most-consumed edible oil in the United States and the second most-consumed globally after palm oil. The heavy-metals profile of soybean oil follows the standard refined-seed-oil pattern: modest baseline Pb-and-Cd from upstream seed agronomy, partial reduction through the refining chain, and trace Ni introduced by bleaching-clay contact during refining. The current corpus loads 5 sources: Ashraf 2012 Saudi market survey (21 soybean oil samples within 161-sample multi-oil survey, [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]), Pehlivan 2008 Turkish ICP-AES method ([[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]), Scutarasu 2023 global foods-and-beverages review ([[sources/scutarasu2023-heavy-metals-foods-beverages]]), Silva 2025 edible-oils health-and-sustainability review ([[sources/silva2025-edible-oils-health-sustainability]]), and Yohannes 2024 Ethiopian Gondar City survey ([[sources/yohannes2024-vegetable-oils-ethiopia-gondar]]). Soybean oil consistently sits in the lower-middle of the edible-oil heavy-metals distribution, comparable to sunflower oil and below olive oil on Pb-and-Cd.

## Why this commodity accumulates heavy metals

Soybean oil enters the food system through soybean seed (Glycine max) production, mechanical or solvent-assisted extraction, and refining. Soybean seed accumulates Pb and Cd from soil at moderate rates; the soybean plant has well-characterised cadmium uptake behaviour driven by soil pH and zinc availability, with cadmium concentration in the seed determined by the soil's Cd-to-Zn ratio. Solvent extraction (hexane-based, the dominant industrial method for soybean oil) recovers ~95% of the seed's oil content; mechanical pressing recovers ~70%. Refining (degumming, neutralisation, bleaching, deodorisation) reduces residual metals through filtration and bleaching-clay adsorption. The Ashraf 2012 Saudi market dataset placed soybean oil at the lower end of Pb and Cd among 7 surveyed oil types ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The Pehlivan 2008 Turkish ICP-AES data and the Yohannes 2024 Ethiopian Gondar City data confirm the low-end positioning across emerging-market and Mediterranean settings. The two systematic reviews (Scutarasu 2023, Silva 2025) consolidate the global edible-oils literature; both identify soybean oil as occupying the lower-middle of the heavy-metals distribution. Genetic-modification status (GMO Roundup-Ready soybeans dominate US production) does not produce measurably different heavy-metals profiles in the oil itself per the loaded literature; glyphosate residue (a separate analytical scope) is the dominant non-metal contaminant concern for GMO soybean product.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 5–100 | medium | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|2]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|3]] |
| Cd | n=5 | 1–30 | medium | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|2]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 1–50 | low | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| tHg | n=1 | — | — | — |
| Ni | n=3 | 10–200 | low | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|2]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|3]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 5–100 | low | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|2]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Saudi Ashraf 2012 dataset is the largest single-jurisdiction soybean-oil sample within the loaded corpus, with 21 soybean oil samples from Saudi hypermarkets ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]); the work places soybean oil at the lower end of the Saudi retail edible-oil Pb-Cd distribution. The Turkish Pehlivan 2008 9-metal panel ([[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]) and the Ethiopian Yohannes 2024 5-metal panel both characterise the lower-end positioning across diverse markets. The two systematic reviews (Scutarasu 2023 across IR, CN, GR, CY, TR, PK, UA, PL, BR, KR; Silva 2025 across MA, IR, GR, CN, BR) consolidate the global pattern. Within-soybean-oil variation: refined commodity-grade soybean oil sits at the lower end; cold-pressed and unrefined product carry slightly higher loads; expeller-pressed organic soybean oil carries metals similar to standard refined product on a per-mass basis. Geographic-origin: US, Brazilian, and Argentinian soybean oil dominate global trade; the loaded corpus does not provide a clean within-soybean-oil origin-vs-origin comparison, but the systematic reviews report broadly similar Pb-and-Cd profiles across the major-origin commodity oil.

## Processing effects

Cold-pressing (mechanical) retains a slightly higher metal load than solvent-extraction followed by refining. Solvent extraction (hexane-based, the dominant industrial method) does not introduce metals attributable to the solvent. Refining reduces Pb-and-Cd through filtration and bleaching-clay adsorption; refined commodity soybean oil typically carries lower Pb than cold-pressed unrefined soybean oil. Bleaching with food-grade acid-activated clay can introduce Ni at 5-50 ppb in finished oil. Hydrogenation (used for partially hydrogenated soybean oil, now phased out in many markets under FDA's trans-fat policy) introduces Ni from catalyst residue. Deodorisation at high temperature does not affect metal content. Industrial-fractionation processes used to produce winterised soybean oil or fractionated soybean oil derivatives do not meaningfully shift the metal profile.

## Ingredient-derivative risk

Refined soybean oil in glass packaging sits at the baseline-lowest-metal-load form. Refined soybean oil in PET, tin, or aluminium picks up modest additional metals from packaging-migration over shelf life. Cold-pressed unrefined soybean oil carries slightly higher Pb-and-Cd than refined product but lower Ni. Soybean lecithin (an emulsifier derivative from the degumming step) concentrates phospholipids and any phospholipid-bound metals; the metal profile of soybean lecithin differs from soybean oil itself. Soybean protein isolate (the protein-and-fiber-rich press cake processed into supplement and food ingredient) inherits the seed's full metal load and carries higher Cd than the oil. Soy sauce (a separate fermented-soy product) is not derived from soybean oil and has its own metal profile (often elevated through traditional fermentation vessel pathways). Hydrogenated soybean oil (shortening, margarine base) carries additional Ni from catalyst residue.

## Mitigation options

### Sourcing levers

Specify refined oil over unrefined for the lowest baseline Pb-and-Cd load. Source from suppliers with documented seed-source agronomic screening. US-Brazilian-Argentinian commodity supply chains are well-characterised and broadly equivalent on metals; specific-origin specifications add cost without meaningful metal-load reduction in the soybean-oil category.

### Agronomic levers

Soil pH management around 6.5 and Zn-availability management reduce Cd uptake into the soybean seed. Phosphate-fertiliser screening reduces ongoing Cd loading. Most agronomic interventions live with seed producers.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts. Specify maximum residual moisture and free fatty acid that correlate with effective metal removal during deodorisation.

### Formulation levers

For finished products using soybean oil as an ingredient, the inclusion ratio caps per-serving exposure. Soybean oil is broadly interchangeable on heavy metals with other refined seed oils (canola, sunflower, corn).

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention.

### Packaging and storage levers

Glass is the baseline-cleanest option. PET is comparable. Tin and aluminium packaging contribute modest additional metals over shelf life.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific provisions for soybean oil: iron 1.5 mg/kg max (virgin), 1.5 mg/kg max (refined), copper 0.1 mg/kg max. The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg. The FDA has not set soybean-oil-specific action levels. Commercial soybean oil consistently sits below the EU Pb maximum per the loaded retail-market data.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population]]<span class="hmi-ref-meta">Ashraf MW · Asian Journal of Chemistry (Uncorrected Proof) · 2012</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes|Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)]]<span class="hmi-ref-meta">Pehlivan E, Arslan G, Gode F, Altun T, and Özcan MM · Grasas y Aceites · 2008 · [doi.org/10.3989/gya.2008.v59.i3.514](https://doi.org/10.3989/gya.2008.v59.i3.514)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/scutarasu2023-heavy-metals-foods-beverages|Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods]]<span class="hmi-ref-meta">Scutarasu EC and Trincă LC · Foods · 2023 · [doi.org/10.3390/foods12183340](https://doi.org/10.3390/foods12183340)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/silva2025-edible-oils-health-sustainability|Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks]]<span class="hmi-ref-meta">Silva VdS, Arias LVA, Usberti FCS, Oliveira RAd, and Fakhouri FM · Lipidology · 2025 · [doi.org/10.3390/lipidology2040021](https://doi.org/10.3390/lipidology2040021)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/yohannes2024-vegetable-oils-ethiopia-gondar|Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia]]<span class="hmi-ref-meta">Yohannes L, Feleke H, Sharew Melaku M, and Eyachew Amare D · BMC Public Health · 2024 · [doi.org/10.1186/s12889-024-19695-0](https://doi.org/10.1186/s12889-024-19695-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 2 | [[sources/ntigoroku2025-delta-state-edible-oils-metals\|Ntigoroku et al. 2025]]. *Physicochemical Properties, Heavy Metals levels and Health Risk Assessment of selected Edible Oils purchased from major markets in Delta State, Nigeria*, Journal of Applied Sciences and Environmental Management | 2025 | Peer-reviewed | NG Cd, Cr, Pb, Cu occurrence in Twenty edible vegetable oil samples purchased from major markets in Delta State, Nigeria, grouped as sunflower oil, soybean... (n=20) |
| 3 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | Current systematic review of edible oil contaminants through Sept 2025 |
| 4 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 5 | [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|Yohannes et al. 2024]]. *Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia*, BMC Public Health | 2024 | Peer-reviewed | Ethiopian Gondar City vegetable oil 5-metal panel (n=17) |
| 6 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 7 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | Broad foods-and-beverages review including soybean oil cross-context |
| 8 | [[sources/acar2012-vegetable-oils-olives-turkey-etaas\|Acar 2012]]. *Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry*, Grasas y Aceites | 2012 | Peer-reviewed | TR Pb, Cd, Cu, Fe, Zn occurrence in 53 vegetable oil samples (8 soybean, 12 sunflower, 8 flower-seed, 8 nut, 8 corn, 9 olive) and 70... (n=123) |
| 9 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey including 21 soybean oil samples within 161-sample multi-oil panel |
| 10 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 11 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish 9-metal panel including soybean oil |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 5 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
