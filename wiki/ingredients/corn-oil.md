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
sources: 7
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Corn Oil

Corn oil (maize oil, Zea mays germ oil) is a refined seed oil extracted from corn germ (the embryo fraction of the corn kernel) after wet- or dry-milling separates the germ from the starch endosperm. The heavy-metals profile follows the standard refined-seed-oil pattern: modest baseline Pb-and-Cd from upstream corn agronomy, partial reduction through the refining chain, and trace Ni from bleaching-clay contact. The current corpus loads 5 sources: Ashraf 2012 Saudi market survey including 32 corn oil samples within the 161-sample multi-oil panel ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]), González-Torres 2023 global vegetable-oils systematic review covering corn oil among 35 oil types ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]), Pehlivan 2008 Turkish ICP-AES 9-metal panel including corn oil ([[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]), Scutarasu 2023 global foods-and-beverages review ([[sources/scutarasu2023-heavy-metals-foods-beverages]]), and Tayeb 2025 Iranian olive-and-corn-oil paired study (n=60 split between olive and corn, [[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). Corn oil sits in the lower-middle of the edible-oil heavy-metals distribution, comparable to soybean oil and sunflower oil and below olive oil on Pb-and-Cd in most retail surveys.

## Why this commodity accumulates heavy metals

Corn oil enters the food system through corn (Zea mays) seed production, wet- or dry-milling separation of the germ from the starch endosperm, and oil extraction from the germ followed by refining. Corn accumulates Pb and Cd from soil at moderate rates; corn is a moderate Cd accumulator and its grain Cd content reflects soil Cd-to-Zn ratio. The germ fraction (~10% of the kernel by mass) is enriched in oils, proteins, and many minerals relative to the endosperm, so the metal load in corn oil reflects predominantly the germ fraction. Solvent extraction (hexane-based) and refining (degumming, neutralisation, bleaching, deodorisation) reduce residual metals. The Saudi Ashraf 2012 dataset (32 corn oil samples) is the largest single-jurisdiction corn-oil-specific dataset and places corn oil at the lower-middle of the Saudi retail edible-oil Pb-Cd distribution ([[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia]]). The Iranian Tayeb 2025 paired olive-and-corn-oil study (n=60 with corn-oil-specific subset) provides public-health risk modeling for both oils ([[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]). GMO status (most US-and-Brazilian commodity corn is GMO Bt or Roundup-Ready) does not produce meaningfully different heavy-metals profiles in the oil per the loaded literature.

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | *[awaiting synthesis]* |
| 2 | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|Tayeb et al. 2025]]. *Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis*, Toxicology Reports | 2025 | Peer-reviewed | Iranian Gonbad-Kavus commercial-vs-traditional corn oil Pb-Cd risk analysis (n=30 corn within n=60 paired) |
| 3 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of 35 vegetable oil types from 24 countries including corn oil |
| 4 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | *[awaiting synthesis]* |
| 5 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | *[awaiting synthesis]* |
| 6 | [[sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia\|Ashraf 2012]]. *Levels of Selected Heavy Metals in Varieties of Vegetable Oils Consumed in Kingdom of Saudi Arabia and Health Risk Assessment of Local Population*, Asian Journal of Chemistry (Uncorrected Proof) | 2012 | Peer-reviewed | Saudi market survey including 32 corn oil samples within 161-sample multi-oil panel |
| 7 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish 9-metal panel including corn oil (n=17) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [2e76484](https://github.com/paleofoundation/heavymetalindex/commit/2e76484) | 2026-05-26 | state sync: 16h of daemon-stalled work — ingredient/routing/audit updates from yesterday's interrupted tick |
| [378d999](https://github.com/paleofoundation/heavymetalindex/commit/378d999) | 2026-05-17 | autonomy: daemon tick 2026-05-17T13-07-28Z — gap-healing + extraction + pooling + briefings |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
<!-- END: hmi-page-history -->
