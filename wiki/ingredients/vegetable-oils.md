---
type: ingredient
commodity: vegetable-oils
title: "Vegetable Oils"
label: "Vegetable Oils"
aliases: [edible-oils, cooking-oils, plant-oils]
category: oil
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: 500
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: 100
    confidence: high
    n_studies: 6
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
    typical_ppb: [5, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 5
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
    typical_ppb: [10, 300]
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
    typical_ppb: [5, 200]
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
drivers: [seed-source, extraction-method, refining-clay, packaging, hydrogenation-catalyst]
lower_risk_variants: ["[[ingredients/sunflower-oil]]", "[[ingredients/refined-vegetable-oil]]"]
higher_risk_variants: ["[[ingredients/olive-pomace-oil]]", "[[ingredients/cold-pressed-unrefined-oil]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 8
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 6
---

# Vegetable Oils

Vegetable oils — the broad category of liquid edible oils pressed or solvent-extracted from seeds (sunflower, soybean, rapeseed/canola, corn, peanut, sesame, safflower), fruit (olive, palm), or nuts — share a common heavy-metals profile shaped by upstream seed-source agronomy, the extraction-and-refining processing chain, and packaging-migration during shelf life. The current corpus loads 6 sources covering the global edible-oils literature: González-Torres 2023 systematic review (35 oil types from 24 countries, [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]), Mehri 2024 Iranian Hamadan probabilistic risk (n=40, [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]), Nazari 2023 seed-crops-and-oil-products threat-to-food-safety review ([[sources/nazari2023-heavy-metals-seed-crops-oil-products-review]]), Pehlivan 2008 Turkish ICP-AES method (n=17, [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes]]), Tayeb 2025 Iranian olive-and-corn-oil public-health risk (n=60, [[sources/tayeb2025-olive-corn-oil-iran-pb-cd]]), and Yohannes 2024 Ethiopian Gondar City survey (n=17, [[sources/yohannes2024-vegetable-oils-ethiopia-gondar]]). Vegetable oils as a category sit consistently in the lower-middle of the food-system heavy-metals distribution, with most retail product below applicable Codex and EU Pb limits and the worst-case-tail driven by specific origin-and-packaging combinations rather than category-wide elevation.

## Why this commodity accumulates heavy metals

The vegetable-oil category aggregates oils with different upstream profiles into a single ingredient class. Seed agronomy: the seed (or fruit) accumulates Pb and Cd from soil at rates that depend on species, soil chemistry, irrigation water source, and proximity to atmospheric Pb sources (roadways, industrial sources). Extraction: mechanical pressing (cold-pressed product) retains a slightly higher metal load than solvent-extraction (hexane-based, used for most commodity-grade product) followed by refining. Refining: the standard refining chain (degumming, neutralisation, bleaching, deodorisation) reduces residual metals through filtration and bleaching-clay adsorption, but bleaching can introduce Ni from acid-activated clay catalysts; the Ni-from-bleaching pathway is the explanation for refined oil consistently carrying detectable Ni above unrefined product. Hydrogenation: partial or full hydrogenation (used for shortening, margarine, and some industrial-fat applications) introduces Ni from catalyst residue; regulatory frameworks set maxima for residual Ni in hydrogenated oils. Packaging-migration: glass and food-grade PET do not contribute meaningfully; tin, aluminium, and certain coated containers contribute trace metals over shelf life. The Mehri 2024 Iranian Hamadan probabilistic risk assessment found vegetable oils as a category contributing modest Pb-and-Cd dietary exposure relative to other food groups, with worst-case-tail intake metrics still within bounds-of-concern thresholds ([[sources/mehri2024-vegetable-oils-iran-hamadan-ptes]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=6 | 5–200 | 500 | high | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| Cd | n=6 | 1–50 | 100 | high | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|1]], [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|2]], [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|3]] |
| iAs | data gap | — | — | — | — |
| tAs | n=5 | 5–100 | — | medium | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|1]], [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|2]] |
| tHg | n=1 | — | — | — | — |
| Ni | n=4 | 10–300 | — | medium | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|1]], [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|2]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|3]] |
| Al | data gap | — | — | — | — |
| Cr | n=3 | 5–200 | — | low | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|1]], [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|2]] |
| Sn | data gap | — | — | — | — |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

The González-Torres 2023 systematic review is the broadest synthesis at 35 vegetable-oil types across 24 countries, identifying olive oil, sunflower oil, soybean oil, corn oil, palm oil, peanut oil, and sesame oil as the dominant trade categories and characterising the heavy-metals distribution within each ([[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review]]). The Iranian Hamadan probabilistic-risk dataset (n=40) covers 5 vegetable-oil types and provides the strongest health-risk modeling in the loaded corpus. The Turkish Pehlivan 2008 work (n=17) is methodological but covers a 9-metal panel including the rarely-measured Co and Mn. The Ethiopian Gondar City data (n=17) characterises an emerging-market production-and-retail context. The Tayeb 2025 work (n=60 split between olive and corn oils) demonstrates the within-Iran market variance across commercial and traditional supply chains. Within-category pattern: refined commodity oils (sunflower, soybean, corn, canola) sit at the lower end of the Pb-and-Cd distribution; unrefined cold-pressed product carries slightly higher loads; olive pomace oil and certain solvent-extracted products carry the highest loads.

## Processing effects

The extraction step is the first major processing-driven shift. Cold pressing (mechanical) retains a slightly higher metal load than solvent extraction followed by refining, because refining removes residual metals through filtration and bleaching-clay adsorption. The Nazari 2023 review summarises the seed-to-oil-product metal-load reduction pathway: a typical seed at, say, 200 ppb Pb dry weight produces a finished refined oil at 5-50 ppb Pb, with most of the parent seed's metal load partitioned into the spent press cake or meal ([[sources/nazari2023-heavy-metals-seed-crops-oil-products-review]]). Refining reduces Pb-and-Cd by another 30-50% in finished product. Bleaching with food-grade acid-activated clay can introduce Ni at 5-50 ppb in finished oil; the magnitude depends on clay quality and bleaching protocol. Hydrogenation (used for trans-fat-containing applications, increasingly phased out) introduces Ni from catalyst residue at higher levels. Deodorisation at high temperature does not affect metal content. Re-use of frying oil increases trace metal pickup from food contact and equipment surfaces during use.

## Ingredient-derivative risk

Refined vegetable oils in glass packaging sit at the baseline. Refined vegetable oils in PET are comparable. Refined oils in tin, aluminium, or coated metal containers pick up modest additional metals from packaging-migration over shelf life. Cold-pressed unrefined oils carry slightly higher Pb-and-Cd than refined product but lower Ni. Hydrogenated oils and partially hydrogenated oils (shortening, margarine base) carry additional Ni from catalyst residue. Vegetable-oil-derived emulsifiers (lecithins, mono- and diglycerides) carry different metal profiles depending on the extraction and concentration step. Reused frying oil carries the baseline load plus any pickup during commercial frying use. Premium specialty oils (avocado oil, walnut oil, hazelnut oil) carry their parent fruit-or-nut's metal load; these are out of scope for the commodity-vegetable-oils page but covered on dedicated ingredient pages where the loaded corpus supports them.

## Mitigation options

### Sourcing levers

Specify refined oil over unrefined for the lowest baseline Pb-and-Cd load. For unrefined cold-pressed product, source from suppliers with documented seed-source agronomic screening. Single-origin and estate-bottled product enables supply-chain traceability that supports the upstream metal-load control.

### Agronomic levers

Soil pH management and phosphate-fertiliser screening at the seed-production stage reduce the upstream Cd load. Most agronomic interventions live with seed producers rather than oil refiners.

### Processing levers

Specify refining protocols with food-grade bleaching clay and Ni-screened catalysts. Specify maximum free-fatty-acid and residual-moisture targets that correlate with effective metal removal during deodorisation. For hydrogenated oils, specify the lowest Ni-residue limit consistent with FDA and EU food-additive frameworks.

### Formulation levers

For finished products using vegetable oils as a major ingredient, the inclusion ratio caps per-serving exposure. Substitution between oil types (sunflower vs soybean vs canola) does not meaningfully change the heavy-metals profile.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention. The Pehlivan 2008 ICP-AES method and the Mehri 2024 ICP-MS protocol are useful method references.

### Packaging and storage levers

Glass is the baseline-cleanest option for retail product. PET is comparable on metals. Tin and aluminium packaging contribute modest additional metals; for premium product, glass is preferred. For commercial frying applications, the container material and the frying-equipment alloy both contribute to the in-use metal load.

## Regulatory limits that apply

The Codex Alimentarius Standard for Named Vegetable Oils (CXS 210-1999) sets specific heavy-metals provisions for individual oils with iron at 1.5 mg/kg max and copper at 0.1 mg/kg max (virgin oils). The EU Regulation 2023/915 applies the general fats-and-oils Pb maximum of 0.10 mg/kg to vegetable oils. The FDA has not set vegetable-oil-specific action levels but the general adulteration framework applies. The systematic-review and probabilistic-risk literature consistently finds commercial vegetable oils below the EU Pb maximum, with worst-case-tail product (cold-pressed unrefined, certain origin combinations) approaching but not exceeding the limit in most retail surveys.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/silva2025-edible-oils-health-sustainability\|VdS et al. 2025]]. *Edible Oils from Health to Sustainability: Influence of the Production Processes in the Quality, Consumption Benefits and Risks*, Lipidology | 2025 | Peer-reviewed | MA/IR/GR Pb, Cd, tAs, Ni, Cr, Al, Cu, Zn, Fe, Mn, V, tHg occurrence in Systematic review of 35 studies meeting eligibility criteria (of 125 articles screened), including 7 studies on contaminants (PAHs... |
| 2 | [[sources/tayeb2025-olive-corn-oil-iran-pb-cd\|Tayeb et al. 2025]]. *Assessment of lead and cadmium exposure through olive and corn oil consumption in Gonbad-Kavus, north of Iran: A public health risk analysis*, Toxicology Reports | 2025 | Peer-reviewed | Iranian commercial-vs-traditional olive-and-corn oil Pb-Cd risk analysis (n=60) |
| 3 | [[sources/mehri2024-vegetable-oils-iran-hamadan-ptes\|Mehri et al. 2024]]. *A probabilistic health risk assessment of potentially toxic elements in edible vegetable oils consumed in Hamadan, Iran*, BMC Public Health | 2024 | Peer-reviewed | Iranian Hamadan probabilistic-risk 5-metal panel across vegetable oils (n=40) |
| 4 | [[sources/yohannes2024-vegetable-oils-ethiopia-gondar\|Yohannes et al. 2024]]. *Analysis of heavy metals and minerals in edible vegetable oils produced and marketed in Gondar City, Northwest Ethiopia*, BMC Public Health | 2024 | Peer-reviewed | Ethiopian Gondar City vegetable oil 5-metal panel (n=17); emerging-market context |
| 5 | [[sources/gonzalez-torres2023-heavy-metals-vegetable-oils-review\|González-Torres et al. 2023]]. *Comparative Study of the Presence of Heavy Metals in Edible Vegetable Oils*, Applied Sciences | 2023 | Peer-reviewed | Global systematic review of 35 vegetable oil types from 24 countries (2015-2022 literature) |
| 6 | [[sources/nazari2023-heavy-metals-seed-crops-oil-products-review\|Nazari et al. 2023]]. *Impacts of Heavy Metals in Seed Crops and Oil Seed on Human Health: A Threat to Food Safety — Review*, Carpathian Journal of Food Science and Technology, 15(2), 106-124 | 2023 | Review | Global seed-crops-to-oil-products review with seed-to-finished-oil metal-load partitioning |
| 7 | [[sources/scutarasu2023-heavy-metals-foods-beverages\|Scutarasu et al. 2023]]. *Heavy Metals in Foods and Beverages: Global Situation, Health Risks and Reduction Methods*, Foods | 2023 | Peer-reviewed | IR/CN/GR Pb, Cd, tAs, Ni, Cr, tHg, Al, Cu, Zn occurrence in Narrative literature review covering heavy metals in fruits and vegetables, milk and dairy, meat, edible oils, wine, and... |
| 8 | [[sources/pehlivan2008-vegetable-oils-turkey-icp-aes\|Pehlivan et al. 2008]]. *Determination of some inorganic metals in edible vegetable oils by inductively coupled plasma atomic emission spectroscopy (ICP-AES)*, Grasas y Aceites | 2008 | Peer-reviewed | Turkish vegetable oil 9-metal panel by ICP-AES (n=17); broad-coverage methodological reference |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
<!-- END: hmi-page-history -->
