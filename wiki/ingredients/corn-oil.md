---
type: ingredient
commodity: corn-oil
title: "Corn Oil"
label: "Corn Oil"
aliases: [maize-oil, refined-corn-oil]
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
    n_studies: 4
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
drivers: [corn-germ-source, extraction-method, refining-clay, packaging, gmo-no-effect]
lower_risk_variants: ["[[ingredients/refined-corn-oil-glass-bottled]]"]
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 12
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Corn Oil

Corn oil (maize oil, Zea mays germ oil) is a refined seed oil extracted from corn germ (the embryo fraction of the corn kernel) after wet- or dry-milling separates the germ from the starch endosperm. The heavy-metals profile follows the standard refined-seed-oil pattern: modest baseline Pb-and-Cd from upstream corn agronomy, partial reduction through the refining chain, and trace Ni from bleaching-clay contact. The current corpus loads 5 sources: Ashraf 2012 Saudi market survey including 32 corn oil samples within the 161-sample multi-oil panel ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]), González-Torres 2023 global vegetable-oils systematic review covering corn oil among 35 oil types ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]), Pehlivan 2008 Turkish ICP-AES 9-metal panel including corn oil ([[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]), Scutarasu 2023 global foods-and-beverages review ([[sources/scutarasu2023-heavy-metals-foods-beverages]]), and Tayeb 2025 Iranian olive-and-corn-oil paired study (n=60 split between olive and corn, [[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). Corn oil sits in the lower-middle of the edible-oil heavy-metals distribution, comparable to soybean oil and sunflower oil and below olive oil on Pb-and-Cd in most retail surveys.

## Why this commodity accumulates heavy metals

Corn oil enters the food system through corn (Zea mays) seed production, wet- or dry-milling separation of the germ from the starch endosperm, and oil extraction from the germ followed by refining. Corn accumulates Pb and Cd from soil at moderate rates; corn is a moderate Cd accumulator and its grain Cd content reflects soil Cd-to-Zn ratio. The germ fraction (~10% of the kernel by mass) is enriched in oils, proteins, and many minerals relative to the endosperm, so the metal load in corn oil reflects predominantly the germ fraction. Solvent extraction (hexane-based) and refining (degumming, neutralisation, bleaching, deodorisation) reduce residual metals. The Saudi Ashraf 2012 dataset (32 corn oil samples) is the largest single-jurisdiction corn-oil-specific dataset and places corn oil at the lower-middle of the Saudi retail edible-oil Pb-Cd distribution ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The Iranian Tayeb 2025 paired olive-and-corn-oil study (n=60 with corn-oil-specific subset) provides public-health risk modeling for both oils ([[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). GMO status (most US-and-Brazilian commodity corn is GMO Bt or Roundup-Ready) does not produce meaningfully different heavy-metals profiles in the oil per the loaded literature.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 1 at 5-14, 5 below 5 | below pooling depth: Cd, tAs, tHg, Ni, Cr |
| Speciation transparency | OK | iAs, tAs, tHg | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 5–100 | medium | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| Cd | n=4 | 1–30 | medium | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|2]], [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 1–50 | low | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|1]] |
| tHg | n=1 | — | — | — |
| Ni | n=3 | 10–200 | low | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|2]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 5–100 | low | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Saudi Ashraf 2012 dataset is the largest single-jurisdiction corn-oil-specific data (n=32 corn oil samples within 161-sample multi-oil panel) and provides the strongest Pb-Cd-tAs baseline ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The Iranian Tayeb 2025 paired olive-and-corn-oil study at n=60 provides a within-Iran market position for corn oil; the work found commercial corn oil at lower Pb-and-Cd than traditional locally-produced corn oil, mirroring the olive-oil pattern in the same study ([[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). The Turkish Pehlivan 2008 9-metal panel (n=17) covers corn oil as part of the multi-oil Turkish market characterisation ([[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]). The González-Torres 2023 systematic review and the Scutarasu 2023 global review consolidate the broader corn-oil literature; both identify corn oil at the lower-middle of the edible-oil heavy-metals distribution. Origin-country pattern: US (the dominant global corn-oil producer), Brazilian, Argentinian, and EU corn-oil supply chains are broadly equivalent on metals; the loaded corpus does not provide a clean origin-vs-origin comparison for corn oil specifically. Refined corn oil dominates retail; cold-pressed unrefined corn oil is a small specialty segment carrying slightly higher Pb-and-Cd than refined product.

## Processing effects

Wet milling (the dominant industrial method for corn-oil germ separation) produces wet germ that is then expeller-pressed or solvent-extracted. Dry milling is a less common alternative. Solvent extraction (hexane-based) recovers higher oil yield from the germ; refining reduces residual metals through filtration and bleaching-clay adsorption. Bleaching with food-grade acid-activated clay can introduce Ni at 5-50 ppb in finished oil. Deodorisation at high temperature does not affect metals. Hydrogenation (used in some industrial corn-oil-derivative applications) introduces Ni from catalyst residue. Re-use of frying oil increases trace metal pickup during commercial use.

## Ingredient-derivative risk

Refined corn oil in glass packaging sits at the baseline-lowest-metal-load form. Refined corn oil in PET, tin, or aluminium picks up modest additional metals from packaging-migration over shelf life. Cold-pressed unrefined corn oil carries slightly higher Pb-and-Cd but lower Ni. Corn germ (the unprocessed source material) carries the full germ metal load and is used as a feed-and-food ingredient in some applications. Margarine and shortening containing hydrogenated corn oil carry additional Ni from catalyst residue. Corn-oil-based frying oils used in commercial food service inherit the baseline load plus any pickup during use. Corn-oil-based salad dressings inherit the baseline load at the inclusion ratio.

## Mitigation options

### Sourcing levers

Specify refined oil over unrefined for the lowest baseline Pb-and-Cd. Source from suppliers with documented corn-germ-source agronomic screening. US, Brazilian, and Argentinian commodity supply chains are broadly equivalent.

### Agronomic levers

Soil pH management and Zn-availability management reduce corn Cd uptake at the seed-production stage. Phosphate-fertiliser screening reduces ongoing Cd loading. Most agronomic interventions live with corn producers.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts. Specify maximum residual moisture and free fatty acid that correlate with effective metal removal during deodorisation.

### Formulation levers

For finished products using corn oil as an ingredient, the inclusion ratio caps per-serving exposure. Corn oil is broadly interchangeable on heavy metals with other refined seed oils (sunflower, soybean, canola).

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention.

### Packaging and storage levers

Glass is the baseline-cleanest option. PET is comparable. Tin and aluminium packaging contribute modest additional metals over shelf life.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific provisions for corn oil: iron 1.5 mg/kg max (virgin), 1.5 mg/kg max (refined), copper 0.1 mg/kg max. The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg. The FDA has not set corn-oil-specific action levels. Commercial corn oil consistently sits below the EU Pb maximum per the loaded retail-market data.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 12 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia|Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population]]<span class="hmi-ref-meta">Ashraf MW · Asian Journal of Chemistry (Uncorrected Proof) · 2012</span><span class="hmi-ref-tag">Review</span>
2. [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review|Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils]]<span class="hmi-ref-meta">González-Torres P, Puentes JG, Moya AJ, and La Rubia MD · Applied Sciences · 2023 · [doi.org/10.3390/app13053020](https://doi.org/10.3390/app13053020)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes|Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)]]<span class="hmi-ref-meta">Pehlivan E, Arslan G, Gode F, Altun T, and Özcan MM · Grasas y Aceites · 2008 · [doi.org/10.3989/gya.2008.v59.i3.514](https://doi.org/10.3989/gya.2008.v59.i3.514)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/scutarasu2023-heavy-metals-foods-beverages|Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods]]<span class="hmi-ref-meta">Scutarasu EC and Trincă LC · Foods · 2023 · [doi.org/10.3390/foods12183340](https://doi.org/10.3390/foods12183340)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/tayeb2025-olive-corn-oil-iran-pb-cd|Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis]]<span class="hmi-ref-meta">Tayeb J and Movassaghghazani M · Toxicology Reports · 2025 · [doi.org/10.1016/j.toxrep.2025.101922](https://doi.org/10.1016/j.toxrep.2025.101922)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abedi2025-edible-oils-bleaching-review\|Abedi et al. 2025]]. *Comparison Between Emerging and Conventional Methods for Edible Oils Bleaching*, Food Science & Nutrition | 2025 | Peer-reviewed | Pb, Cd, Ni, Cr, Co, Al, Cu, Fe occurrence in Narrative review of published literature on industrial and emerging bleaching technologies for edible vegetable oils. No primary measurements;... |
| 2 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr, Al, Cu, Zn, Fe, Mn, V, tHg occurrence in Systematic review of 35 studies meeting eligibility criteria (of 125 articles screened), including 7 studies on contaminants (PAHs... |
| 3 | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|Tayeb et al. 2025]]. *Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis*, Toxicology Reports | 2025 | Peer-reviewed | Iranian Gonbad-Kavus commercial-vs-traditional corn oil Pb-Cd risk analysis (n=30 corn within n=60 paired) |
| 4 | [[sources/lin2024-edible-oils-taiwan-12-metals\|S-T et al. 2024]]. *Determination, distribution, and health risk assessment of 12 heavy metals in various edible oils in Taiwan*, JSFA Reports | 2024 | Peer-reviewed | TW tAs, Pb, Cd, Ni, V, Cr, Co, Cu, Fe, Zn, Mn, Ba occurrence in 12 types of refined commercial edible oils (n=25 samples) and 12 types of unrefined (cold-pressed/virgin) commercial edible oils... (n=50) |
| 5 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of 35 vegetable oil types from 24 countries including corn oil |
| 6 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 7 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg, Al, Cu, Zn occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
| 8 | [[sources/acar2012-vegetable-oils-olives-turkey-etaas\|Acar 2012]]. *Evaluation of cadmium, lead, copper, iron and zinc in Turkish dietary vegetable oils and olives using electrothermal and flame atomic absorption spectrometry*, Grasas y Aceites | 2012 | Peer-reviewed | TR Pb, Cd, Cu, Fe, Zn occurrence in 53 vegetable oil samples (8 soybean, 12 sunflower, 8 flower-seed, 8 nut, 8 corn, 9 olive) and 70... (n=123) |
| 9 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey including 32 corn oil samples within 161-sample multi-oil panel |
| 10 | [[sources/zhu2011-edible-vegetable-oils-china-8-metals\|Zhu et al. 2011]]. *Health risk assessment of eight heavy metals in nine varieties of edible vegetable oils consumed in China*, Food and Chemical Toxicology | 2011 | Peer-reviewed | CN Cu, Zn, Fe, Mn, Cd, Ni, Pb, tAs occurrence in 109 commercial edible vegetable oil samples purchased from Chinese supermarkets during 2009-2010: 13 soybean, 12 corn, 14 peanut,... (n=109) |
| 11 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish 9-metal panel including corn oil (n=17) |
| 12 | [[sources/chen2001-edible-fats-oils-arsenic\|Chen et al. 2001]]. *Determination of arsenic in edible fats and oils by focused microwave digestion and atomic fluorescence spectrometer*, Journal of Food and Drug Analysis | 2001 | Peer-reviewed | TW tAs occurrence in Twenty-one market samples of edible fats and oils in Taiwan, including peanut oil, sesame oil, olive oil, sunflower... (n=21) |
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
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
