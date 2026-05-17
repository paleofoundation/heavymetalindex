---
type: ingredient
commodity: seaweed
title: "Seaweed"
label: "Seaweed"
aliases: [sea-vegetables, edible-algae, macroalgae, kelp, algae]
category: sea-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [200, 3000]
    p95_ppb: 8000
    confidence: high
    n_studies: 7
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [100, 5000]
    p95_ppb: 20000
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [5000, 80000]
    p95_ppb: 150000
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 2000]
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
    typical_ppb: [100, 2000]
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
drivers: [bioaccumulation, species, harvest-location, water-arsenic, arsenic-speciation]
lower_risk_variants: ["[[ingredients/nori]]"]
higher_risk_variants: ["[[ingredients/hijiki]]", "[[ingredients/kombu]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 12
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 10
---

# Seaweed

Seaweed (edible macroalgae: nori, wakame, kombu, hijiki, dulse, kelp, sea lettuce, and farmed and wild-harvested species) is among the highest-concentration heavy-metal ingredients in the food system, with cadmium and arsenic the dominant analytes. Marine macroalgae bioaccumulate dissolved seawater metals at concentration factors of 1,000-100,000× relative to ambient seawater, producing tissue concentrations of total arsenic that routinely reach 5-80 mg/kg dry weight — orders of magnitude above any terrestrial-plant matrix. The crucial qualifier for arsenic is speciation: most seaweed arsenic is in organoarsenic forms (arsenosugars, arsenolipids, arsenobetaine, dimethylarsinic acid) rather than inorganic arsenic. Inorganic arsenic (iAs), the regulated and toxicologically dominant form, typically represents 1-10% of total arsenic in seaweed — but the exception is hijiki (Sargassum fusiforme), which carries 30-70% of its arsenic as iAs and accounts for the regulatory bans on hijiki in the EU, UK, Canada, and Australia. The current corpus loads 10 peer-reviewed and government sources, anchored by the EFSA 2023 European dietary exposure assessment (n=2,093 samples) ([[sources/efsa2023-heavy-metals-seaweed]]).

## Why this commodity accumulates heavy metals

Marine macroalgae take metals from seawater through passive diffusion across cell walls and active transport into vacuoles. The bioconcentration factor (BCF) — the ratio of tissue concentration to ambient seawater concentration — is genus- and metal-specific but typically 10³ to 10⁵ for Cd and tAs. Brown algae (Phaeophyceae: kelp, kombu, hijiki, wakame, Ecklonia) generally have higher BCFs than red algae (Rhodophyta: nori, dulse) and green algae (Chlorophyta: sea lettuce, ulva). The dominant metals are cadmium and arsenic for nearly all species, with regional variation in lead and mercury depending on coastal pollution sources. The Bantaeng (South Sulawesi) Pb-distribution work in farmed Kappaphycus alvarezii ([[sources/asni2020-pb-seaweed-bantaeng]]) shows seasonal-and-location variability in lead uptake driven by coastal-water Pb concentrations. The arsenic speciation question is critical: marine algae convert inorganic arsenate to organoarsenic forms (arsenosugars, arsenolipids) as a detoxification mechanism, leaving the consumer with predominantly low-toxicity organoarsenic plus a small iAs fraction. The Davydiuk 2023 arsenosugar-methylation work documents the human metabolic handling of dietary arsenosugars and confirms that seaweed-derived total-arsenic concentrations cannot be used as iAs proxies without speciation ([[sources/davydiuk2023-arsenosugars-methylation]]). Hijiki is the species-specific exception: its iAs fraction reaches 30-70% of total arsenic, which is why dedicated hijiki regulatory bans exist.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 50–1000 | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| Cd | n=7 | 200–3000 | high | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| iAs | n=6 | 100–5000 | high | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|2]], [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|3]] |
| tAs | n=9 | 5000–80000 | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/raab2024-arsenolipids-chlamydomonas\|2]], [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|3]] |
| tHg | n=5 | 10–100 | medium | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|1]], [[sources/efsa2023-heavy-metals-seaweed\|2]], [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|3]] |
| Ni | n=3 | 200–2000 | low | [[sources/hahn2022-salish-seaweed-contaminants\|1]] |
| Al | data gap | — | — | — |
| Cr | n=3 | 100–2000 | low | [[sources/hahn2022-salish-seaweed-contaminants\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus spans European farmed-and-wild-harvested macroalgae (the largest single dataset, EFSA 2023 at n=2,093 samples), New Zealand Ecklonia radiata aquaculture (Nepper-Davidsen 2023, n=24 with high spatial and temporal variation), the Salish Sea (Pacific Northwest US-Canada border, Hahn 2022 at n=58 across 6 metals), Djiboutian coastal seaweeds (Nour 2025, n=6), Indonesian farmed Kappaphycus alvarezii (Asni 2020, Indonesian South Sulawesi), and Nunavik traditional Inuit harvests (Groleau 2025, n=140 including fish and country-food matrices). The species-by-species pattern is consistent across studies: hijiki and kombu (brown algae, large fronds, mature life-stage) accumulate the highest Cd and total As; nori (red algae, thin sheet, short harvest cycle) accumulates much lower Cd and arsenic; wakame sits between. The EFSA 2023 assessment ([[sources/efsa2023-heavy-metals-seaweed]]) is the regulatory anchor for European dietary exposure and reports both finished-product and bulk-trade concentrations across the major edible species, with arsenic speciation breakdowns where the underlying primary literature supported them. Spatial variation within a single farm site can be substantial: the Nepper-Davidsen New Zealand data show seasonal variability in Cd and tAs of 2-3× within the same Ecklonia radiata farm across a 12-month cycle ([[sources/nepper-davidsen2023-kelp-biomass-composition-nz]]).

## Processing effects

Drying does not affect the metal load on a dry-weight basis (the standard reporting basis for seaweed). Soaking and rinsing dried seaweed before cooking can leach a fraction of soluble cadmium and arsenosugars into the rinse water; the magnitude depends on soaking time, water-to-seaweed ratio, and seaweed structure. For hijiki specifically, the traditional Japanese soaking protocol (extended soak with multiple water changes) reduces iAs by an estimated 30-60% compared to dry-weight values, but does not eliminate the iAs load, which is why hijiki bans in most western regulatory frameworks were maintained despite the soaking-mitigation argument. Cooking by boiling in water leaches additional soluble arsenic compounds; discarding the cooking water reduces per-serving exposure but is not always culturally or culinarily acceptable. Roasting (used for nori production) drives off moisture but does not change the per-mass metal load on a dry basis. Fermented seaweed products (Korean kelp ferments, kombucha-substrate seaweed extracts) carry the parent species' metal load with negligible processing-driven change.

## Ingredient-derivative risk

Whole-leaf dried seaweed (sheet nori, kombu strips, dried wakame, dulse strips) carries the baseline species-specific metal load. Powdered and granulated seaweed (often sold as nutritional supplement, salt substitute, or seasoning ingredient) carries the same per-mass load but typical serving sizes are smaller, partially offsetting per-meal exposure. Seaweed-based dietary supplements (kelp tablets, kelp powder for thyroid-iodine support) carry the parent kelp species' Cd and tAs at the upper end of the loaded distribution; supplement-grade kelp should always be lot-tested. Alginate, agar, carrageenan, and other seaweed-derived hydrocolloids extracted from macroalgae carry significantly lower metal loads than the parent species because the extraction process leaves most metals in the spent biomass. Seaweed-flour additions to bread and noodle formulations contribute Cd and tAs at the inclusion ratio. Seaweed-extract animal-feed ingredients are out of scope for the human-food page.

## Mitigation options

### Sourcing levers

Species selection is the highest-impact lever. Avoid hijiki (Sargassum fusiforme) entirely for any product targeting iAs compliance; the EU, UK, Canada, and Australia all maintain hijiki-specific bans or advisories. Favour nori (Pyropia/Porphyra species) and dulse (Palmaria palmata) over kombu (Saccharina/Laminaria) and wakame (Undaria pinnatifida) when the Cd budget is the constraint. For arsenic, harvest-region matters: seaweed grown in waters with low ambient dissolved arsenic (most North Atlantic, Pacific Northwest) carries less tAs than seaweed from regions with elevated water-arsenic backgrounds.

### Agronomic levers

For farmed seaweed (kelp aquaculture, nori aquaculture), site selection away from coastal Pb and Cd point sources is the primary control. Mid-water-column harvest (rather than near-bottom) reduces sediment-derived metal pickup for some species. Younger plants (shorter accumulation time) generally carry lower metal loads.

### Processing levers

Soaking and rinsing dried seaweed in water (multiple water changes, sufficient soak time) reduces soluble iAs and Cd by 20-60% depending on species and protocol. The intervention is well-documented for hijiki specifically and applicable in principle to kombu and wakame. Boiling and discarding the cooking water reduces total exposure further. For brand-controlled processing, validated rinse protocols can be specified and verified by post-rinse testing.

### Formulation levers

For seaweed-containing finished products (snacks, condiments, supplements), inclusion-ratio limits are the meaningful brand-side lever. A 1% seaweed inclusion in a finished snack carries 1% of the seaweed's per-mass metal load into the finished product on a linear-mixing basis.

### Testing and QC levers

Lot-level ICP-MS testing for Cd, Pb, and tAs with detection floors ≤ 50 ppb is the standard intervention. For arsenic, total-arsenic alone is not sufficient for compliance assessment; iAs speciation by HPLC-ICP-MS is the regulatory-grade method. The EFSA 2023 dataset reports iAs speciation for the European market product where it was available; the Llorente-Mirandes 2016 analytical review documents the state-of-the-art iAs determination methods for food matrices ([[sources/llorente-mirandes2016-ias-food-analytical-review]]).

### Packaging and storage levers

Packaging is not the dominant metal-load pathway for dry seaweed product. Standard food-grade packaging does not measurably alter the metal load over shelf life. Long-term storage in humid environments can promote microbial spoilage but does not change the metal load.

## Regulatory limits that apply

The EU Regulation 2023/915 sets dedicated maximum levels for "dried seaweed" entries: Cd at 0.50 mg/kg dry weight, Pb at 0.50 mg/kg dry weight, with arsenic addressed under the inorganic-arsenic framework (no general tAs limit on seaweed, but iAs limits apply where the product-as-consumed pathway is established). The EU separately prohibits hijiki in any food product on the basis of its iAs profile. Codex Alimentarius does not currently set seaweed-specific maxima; general seafood limits do not apply to algae. The FDA has issued advisories on hijiki consumption but has not set a federal maximum level. France's ANSES (food safety agency) sets seaweed-specific advisory limits at 3 mg/kg dry weight for tAs and 0.5 mg/kg for iAs in seaweed-as-food. The EFSA 2023 exposure assessment ([[sources/efsa2023-heavy-metals-seaweed]]) found European dietary intakes from seaweed at levels of concern for iAs in high-seaweed-consumption sub-populations and recommended continued monitoring and tighter regulatory clarity.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/groleau2025-inuit-fish-broth-metals-pregnancy\|Groleau et al. 2025]]. *Heavy metals, trace elements, and nutrients in traditional Inuit country foods: Assessing risks and benefits for pregnant women in Nunavik, Canada*, Science of the Total Environment | 2025 | Peer-reviewed | Nunavik traditional-harvest seaweed and country-food metals (n=140 multi-matrix) |
| 2 | [[sources/raab2024-arsenolipids-chlamydomonas.md\|Raab et al. 2024]]. *Arsenolipids in the green microalga Chlamydomonas reinhardtii: first report of arsenosugar phospholipid (AsSugPhytol)*, Metallomics | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 3 | [[sources/sadee2024-arsenic-speciation-marine-organisms-review\|Sadee et al. 2024]]. *Recent developments in speciation and determination of arsenic in marine organisms using different analytical techniques. A review*, RSC Advances | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 4 | [[sources/sim2024-inorganic-arsenic-seaweed-hplc\|Sim et al. 2024]]. *Determination of inorganic arsenic in seaweed, grain, grass silage, and insect protein by HPLC-ICP-MS using a design of experiments optimization approach*, Food Chemistry | 2024 | Peer-reviewed | *[awaiting synthesis]* |
| 5 | [[sources/davydiuk2023-arsenosugars-methylation\|Davydiuk et al. 2023]]. *Effects of Dietary Intake of Arsenosugars and Other Organic Arsenic Species on Studies of Arsenic Methylation Efficiency in Humans*, Environmental Health | 2023 | Peer-reviewed | Arsenosugar-and-organoarsenic human-metabolism evidence; confirms seaweed tAs is not iAs proxy |
| 6 | [[sources/efsa2023-heavy-metals-seaweed\|EFSA 2023]]. *Dietary exposure assessment to heavy metals and iodine from seaweeds and halophytes for the European population*, EFSA Journal | 2023 | Peer-reviewed | European dietary exposure assessment for seaweed Cd, Pb, tAs, iAs, tHg (n=2,093); regulatory anchor |
| 7 | [[sources/nepper-davidsen2023-kelp-biomass-composition-nz\|Nepper-Davidsen et al. 2023]]. *High spatial and temporal variation in biomass composition of the novel aquaculture target Ecklonia radiata*, Journal of Applied Phycology | 2023 | Peer-reviewed | New Zealand Ecklonia radiata aquaculture spatial-temporal Cd and tAs variation (n=24) |
| 8 | [[sources/ashley-martin2022-ias-biomonitoring-pregnancy\|Ashley-Martin et al. 2022]]. *Biomonitoring of inorganic arsenic species in pregnancy*, Journal of Exposure Science & Environmental Epidemiology | 2022 | Peer-reviewed | Pregnancy-biomonitoring iAs and tAs context relevant to seaweed-consuming populations |
| 9 | [[sources/hahn2022-salish-seaweed-contaminants\|Hahn et al. 2022]]. *Chemical contaminant levels in edible seaweeds of the Salish Sea and implications for their consumption*, PLOS ONE | 2022 | Peer-reviewed | Pacific-Northwest Salish Sea edible-seaweed Cd, tHg, Pb, tAs, Cr, Ni (n=58) |
| 10 | [[sources/asni2020-pb-seaweed-bantaeng\|Asni et al. 2020]]. *Pb heavy metal distribution patterns in seaweed (Kappaphycus alvarezii) cultivation locations by season in Bantaeng Waters, South Sulawesi*, IOP Conference Series: Earth and Environmental Science | 2020 | Peer-reviewed | Indonesian farmed-seaweed seasonal Pb-distribution data |
<!-- END: hmi-source-legend -->
