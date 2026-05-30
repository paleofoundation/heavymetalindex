---
type: ingredient
commodity: sunflower-oil
title: "Sunflower Oil"
label: "Sunflower Oil"
aliases: [helianthus-annuus-oil, refined-sunflower-oil]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 200
    confidence: medium
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
    p95_ppb: null
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
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: low
    n_studies: 4
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
    confidence: medium
    n_studies: 4
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
drivers: [seed-source, extraction-method, refining-clay, packaging, ukraine-russia-supply]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 9
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 7
---

# Sunflower Oil

Sunflower oil (Helianthus annuus seed oil) is the third- or fourth-most-consumed edible oil globally and a workhorse cooking oil across Eastern Europe, the Mediterranean, the Middle East, and increasingly North Africa. The heavy-metals profile of sunflower oil is qualitatively similar to other refined seed oils (corn, soybean, rapeseed): the seed itself carries a modest soil-derived metal load, the pressing-and-refining chain partitions most of that load into the spent meal rather than the oil, and the dominant remaining concerns are trace Pb and Cd from seed-source agronomy plus packaging-migration during shelf life. The current corpus loads 7 sources covering Saudi Arabia (Ashraf 2012 161-sample market survey including 28 sunflower-oil samples), Iran (Hamadan probabilistic risk assessment), Turkey (Pehlivan 2008 ICP-AES method development), Ethiopia (Yohannes 2024 Gondar City survey), and global systematic reviews (González-Torres 2023, Silva 2025). Sunflower oil is consistently among the lowest-metal-load edible oils in market surveys.

## Why this commodity accumulates heavy metals

Sunflower oil enters the food system through seed (Helianthus annuus achene) production, mechanical or solvent-assisted extraction from the dehulled seed, and refining (degumming, neutralisation, bleaching, deodorisation). The seed accumulates Pb and Cd from soil through root uptake at modest rates relative to leafy vegetables; the achene's oil fraction (~40% by mass) carries a small fraction of the seed's total metal load because most metals partition with the protein-and-fiber-rich press cake. Refining further reduces residual metals through filtration, bleaching-clay adsorption, and deodorisation. Bleaching is the step that can introduce Ni from acid-activated clay catalysts; the magnitude is small but is the explanation for Ni being detectable in refined sunflower oil at levels above unrefined product. Packaging-migration during shelf life adds trace Pb, Cd, and other metals depending on the contact material. The Iranian Hamadan probabilistic risk work (n=40 vegetable oil samples) found sunflower oil among the lower-Pb and lower-Cd edible oils in the Iranian retail market ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]). The Ethiopian Gondar City survey (n=17) and the Turkish Pehlivan 2008 work confirm the pattern across emerging-market and Mediterranean settings. Geopolitical supply: Ukraine and Russia together produced ~75% of global sunflower oil exports pre-2022, and the 2022-2024 supply disruption shifted European import flows to alternative origins (Argentina, Turkey, Romania) without dramatic shifts in metal load reported in the loaded corpus.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 5–100 | medium | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| Cd | n=7 | 1–30 | medium | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 1–50 | low | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|3]] |
| tHg | n=1 | — | — | [[sources/scutarasu2023-heavy-metals-foods-beverages\|1]] |
| Ni | n=4 | 10–200 | medium | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|2]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|3]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 5–100 | low | [[sources/silva2025-edible-oils-health-sustainability\|1]], [[sources/scutarasu2023-heavy-metals-foods-beverages\|2]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Saudi market survey is the largest single-jurisdiction dataset, sampling 28 sunflower oil samples within a 161-sample multi-oil survey ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]); the work confirms sunflower oil as broadly compliant with WHO recommended daily intake limits for Pb, Cd, and tAs at Saudi market levels. The Iranian Hamadan dataset (n=40 across 5 oils including sunflower) places sunflower oil at the lower end of the Iranian retail edible-oil distribution ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]). The Ethiopian Gondar City survey (n=17 sunflower + other oils, [[sources/yohannes2024-vegetable-oils-ethiopia-gondar]]) characterises an emerging-market production-and-retail context with similar findings. The two systematic reviews (González-Torres 2023, Silva 2025) consolidate the global edible-oil literature; both identify sunflower oil as occupying the lower-middle of the edible-oil heavy-metals distribution, less variable than olive oil and substantially lower than palm and certain palm-derivative oils. Variety-level pattern: high-oleic vs traditional sunflower oil cultivars do not produce meaningfully different metal profiles per the loaded literature; the determining variables are seed-source agronomy and refining protocol.

## Processing effects

Cold-pressing (unrefined sunflower oil) retains a slightly higher metal load than refined product because the refining step removes a fraction through filtration and adsorption. Refined sunflower oil (the dominant market form) carries a slightly lower Pb and Cd than cold-pressed but a slightly higher Ni from the bleaching-clay contact step; the net change is modest. Solvent extraction (hexane-based) recovers higher oil yield from the seed but introduces no measurable metal-load shift attributable to the solvent itself. Deodorisation at high temperature does not affect metal content. Hydrogenation (used in some industrial sunflower-oil derivatives) introduces Ni from catalyst residue; the FDA and EU limit Ni residue in hydrogenated oils to specific maxima that are well-documented. Re-use of frying oil increases trace metal pickup from food contact and equipment surfaces, though the magnitude is small relative to the underlying baseline.

## Ingredient-derivative risk

Refined sunflower oil in glass packaging is the baseline-lowest-metal-load form. Refined sunflower oil in PET, tin, or aluminium packaging picks up modest additional metals from packaging-migration over shelf life. High-oleic sunflower oil (used for frying applications where oxidative stability is required) does not differ meaningfully on heavy metals from traditional sunflower oil. Sunflower lecithin (an emulsifier derivative) carries a different metal profile because it concentrates phospholipids and any phospholipid-bound metals. Sunflower seed butter (a peanut-butter alternative) inherits the seed's metal load directly, including the protein-and-fiber portions that the oil-only product excludes; sunflower seed butter is consistently higher in Cd than sunflower oil. Sunflower-oil-based deep-fry oil used in commercial food service inherits the baseline load plus any pickup during use.

## Mitigation options

### Sourcing levers

Source from production regions with documented agronomic screening. The Ukraine-Russia-Argentina-Turkey-Romania production geography is well-characterised; specific suppliers with traceability to individual farms enable upstream metal-load control. Specifying refined oil over unrefined for buyers concerned about Pb and Cd reduces the baseline metal load modestly.

### Agronomic levers

Soil pH management and phosphate-fertiliser screening at the seed-production stage reduce the upstream Cd load. Most agronomic interventions live with seed producers rather than oil refiners.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts. Specify maximum free fatty acid and residual moisture targets that correlate with effective metal removal during deodorisation.

### Formulation levers

For finished products using sunflower oil as one ingredient, the inclusion ratio caps per-serving exposure. Substitution with other refined seed oils (canola, safflower) does not meaningfully change the heavy-metals profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention. The Saudi Ashraf 2012 protocol (n=161 across 7 oil types) and the Turkish Pehlivan 2008 ICP-AES method are useful method references ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]).

### Packaging and storage levers

Glass packaging is the baseline-cleanest option for retail product. PET is comparable on metals. Tin and aluminium packaging contribute modest additional metals through migration over shelf life; for branded premium product, glass is preferred. Avoid lead-glazed ceramic decanters for serving.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific heavy-metals provisions for sunflower oil: iron 1.5 mg/kg max (virgin), 1.5 mg/kg max (refined), copper 0.1 mg/kg max. The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg to sunflower oil. The FDA has not set a sunflower-oil-specific action level. The general retail-survey data place commercial sunflower oil consistently below the EU Pb maximum ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | Current systematic review of edible oil contaminants through Sept 2025 |
| 2 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Iranian Hamadan retail oil 5-metal panel (n=40); sunflower-oil position in market context |
| 3 | [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|Yohannes et al. 2024]]. *Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia*, BMC Public Health | 2024 | Peer-reviewed | Ethiopian Gondar City sunflower-and-other-oils 5-metal panel (n=17) |
| 4 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of vegetable oils 2015-2022 literature including sunflower |
| 5 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | global/EU/IR Pb, Cd, iAs, tAs, tHg, MeHg, Ni, Cr, Cr-VI occurrence in Narrative literature review of published studies on heavy metal occurrence in oilseeds (sunflower, pumpkin, sesame, rape, mustard, linseed,... |
| 6 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | Broader food-and-beverage heavy-metals review including sunflower oil cross-context |
| 7 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal (Kazan Medical Journal), vol. 95, no. 5, pp. 706–709 | 2014 | Peer-reviewed | AZ Pb, Cd, Cr, Ni, Cu, Zn occurrence in 57 adults (28 men, 29 women, age 19–49) sampled by random selection from Baku, Azerbaijan; 18 food items... (n=57) |
| 8 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey across 161 oil samples including 28 sunflower; 7-metal panel |
| 9 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish vegetable oil 9-metal panel by ICP-AES (n=17) including sunflower-oil baseline |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [2e76484](https://github.com/paleofoundation/heavymetalindex/commit/2e76484) | 2026-05-26 | state sync: 16h of daemon-stalled work — ingredient/routing/audit updates from yesterday's interrupted tick |
<!-- END: hmi-page-history -->
