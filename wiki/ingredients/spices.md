---
type: ingredient
commodity: spices
title: "Spices"
label: "Spices"
aliases: [ground-spices, whole-spices, seasoning-spices, chili-pepper]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.003, 23.7]
    p95_ppb: 2411
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-28
  Cd:
    status: populated
    typical_ppb: [0.001, 80.8]
    p95_ppb: 1023
    confidence: low
    n_studies: 7
    last_reviewed: 2026-05-28
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [20, 500]
    p95_ppb: null
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: null
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [200, 3000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [1000, 20000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [50, 1000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 1
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [adulteration-lead-chromate, soil-uptake, drying-concentration, origin-country, processing]
lower_risk_variants: ["[[ingredients/whole-spices]]"]
higher_risk_variants: ["[[ingredients/turmeric]]", "[[ingredients/cinnamon]]", "[[ingredients/paprika]]"]
used_in_products: ["[[products/spice-blends]]", "[[products/curry-powder]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 14
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 8
---

# Spices

Spices — the broad seasoning category covering ground and whole dried plant parts (turmeric, paprika, cinnamon, black pepper, cumin, coriander, chili, cardamom, cloves, and dozens more) — sit at the top of the food-system heavy-metals risk distribution by mass concentration. The category is closely related to [[ingredients/herbs-and-spices]] (which aggregates both leaf-and-flower herbs and seed-and-bark spices) but the spices-only subset focuses on the seed, root, bark, and fruit-derived seasonings that include the highest-Pb-adulteration-risk product categories: turmeric, cinnamon, and paprika. The current corpus loads 8 sources spanning the US (Angelon-Gaetz 2018 NC home investigations at n=386, [[sources/angelon-gaetz2018-lead-spices-north-carolina]]), Mexico (Cantoral 2024 most-consumed foods Pb monitoring at n=103, [[sources/cantoral2024-lead-levels-mexican-foods]]), EU (Carpena 2024 herbs chemical-hazards assessment, [[sources/carpena2024-chemical-hazards-herbs-europe]]), Canada (CFIA 2025 targeted survey at n=470, [[sources/cfia2025-toxic-metals-selected-foods-2022-23]]), Nigeria (Chime 2025 Nigerian spice trace-metal survey, [[sources/chime2025-nigerian-spices-as-cd-pb]]), multi-origin (Cicero 2022 8-metal panel across 6 countries, [[sources/cicero2022-minerals-spices-aromatic-herbs]]), UAE (Dghaim 2015 traditional-herbs at n=81, [[sources/dghaim2015-heavy-metals-uae-herbs]]), and the EU EFSA 2021 aluminium regulatory framework ([[sources/efsa2021-aluminium-food-qa]]).

## Why this commodity accumulates heavy metals

The spices-as-a-category accumulation pathways compound: soil uptake into the live plant carries Cd, Cr, Ni, and trace metals into the seed-or-root-or-bark tissue at rates depending on soil chemistry, plant species, and growing region; drying concentrates these metals on a per-mass basis by 5-10× through moisture removal; atmospheric deposition adds surface Pb to spice plants grown in roadside or industrial settings; and post-harvest adulteration with lead-based pigments (the canonical pathway documented in turmeric and cinnamon supply chains) drives the worst-case-tail distribution. The Angelon-Gaetz 2018 home-investigation cohort documented spices as a recurring elevated-Pb source in NY-area homes of children with elevated blood-lead levels, with specific country-of-origin product flagged ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The Cicero 2022 multi-origin work (n=13 across IT, SA, IN, IR, ID, VN) provides a clean within-non-adulterated baseline across the 8-metal panel ([[sources/cicero2022-minerals-spices-aromatic-herbs]]). The CFIA 2025 Canadian targeted survey (n=470) is the largest recent single-jurisdiction dataset and confirms the bimodal distribution: non-adulterated commodity-grade product compliant with applicable caps, with a small worst-case-tail above caps driven by adulteration-risk supply chains ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]). The Cantoral 2024 Mexican most-consumed-foods Pb monitoring identified spices among the elevated-Pb categories in Mexican retail ([[sources/cantoral2024-lead-levels-mexican-foods]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=8 | 100–3000 | high | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|2]], [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|3]] |
| Cd | n=6 | 30–500 | high | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|2]], [[sources/spex2023-hot-sauce-chili-powder-metals\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=5 | 20–500 | medium | [[sources/chime2025-nigerian-spices-as-cd-pb\|1]], [[sources/spex2023-hot-sauce-chili-powder-metals\|2]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|3]] |
| tHg | n=3 | 1–50 | medium | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| Ni | n=2 | 200–3000 | low | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|1]] |
| Al | n=2 | 1000–20000 | low | — |
| Cr | n=2 | 50–1000 | low | [[sources/spex2023-hot-sauce-chili-powder-metals\|1]] |
| Sn | n=1 | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The spices category exhibits extreme within-category variance. Adulteration-prone single-spice categories (turmeric, cinnamon, paprika; see [[ingredients/turmeric]] and [[ingredients/cinnamon]]) can carry Pb at 5,000-100,000 ppb in worst-case-tail product. Non-adulteration-prone categories (black pepper, cumin, coriander, cardamom, cloves) carry Pb at typical-spice levels of 100-3,000 ppb driven by ordinary agronomy. The Cicero 2022 6-country multi-spice work covers 12 spice species and provides clean per-species values within a single methodological framework. The CFIA 2025 Canadian targeted survey at n=470 is the largest single-jurisdiction recent dataset. The Mexican Cantoral 2024 most-consumed-foods survey at n=103 covers spices within the broader Mexican retail food panel. The UAE Dghaim 2015 traditional-herbs work covers 81 samples and characterises the traditional-medicine market context. The Nigerian Chime 2025 work (n=7) is a small but recent African-market data point. Variety-level: within-spice variance (Bangladeshi turmeric vs Sri Lankan turmeric, cassia vs Ceylon cinnamon, Hungarian paprika vs Spanish paprika) is documented in the dedicated spice pages.

## Processing effects

Drying is the dominant processing-driven concentration event for spices, with fresh-to-dried transitions concentrating metals on a per-mass basis by 5-10× through moisture removal. This is a basis change rather than contamination but matters for reporting consistency. Grinding and blending introduce minor metal pickup from equipment surfaces. The single largest processing-driven contamination event is adulteration: post-harvest addition of lead chromate (yellow-orange pigment in turmeric, paprika) or lead-based red pigments shifts the affected lots by 2-4 orders of magnitude. The adulteration pathway is documented for turmeric, cinnamon, and paprika specifically. Steam sterilisation, irradiation, and other microbial-control processing steps do not affect metal load.

## Ingredient-derivative risk

Whole-form intact spices (whole black pepper, whole cinnamon stick, whole nutmeg, cardamom pods, clove buds) carry the lowest adulteration risk because the adulteration channel typically works on ground product. Ground and powdered spices carry the highest absolute Pb concentrations in the worst-case tail. Spice blends and seasoning mixes (curry powder, garam masala, taco seasoning, chili powder, pumpkin pie spice) inherit the metal load of their highest-concentration component, weighted by inclusion ratio. Spice extracts and oleoresins typically have lower metal loads than the parent dry spice because most metals partition with the spent solid matter rather than the volatile fraction.

## Mitigation options

### Sourcing levers

Origin-country screening is the single highest-impact lever, especially for turmeric, cinnamon, paprika, and other yellow-and-red-pigmented ground spices. Source whole-spice rather than ground when feasible; in-brand grinding eliminates the adulteration pathway. For ground product from adulteration-prone categories, specify XRF screening at intake for Pb and Cr simultaneously. FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead]]) provides the US regulatory framework.

### Agronomic levers

For brand-controlled-supply operations, soil testing and amendment reduce baseline plant metal load. The Carpena 2024 European-scale assessment emphasises that agronomic interventions reduce baseline but do not address the dominant adulteration risk ([[sources/carpena2024-chemical-hazards-herbs-europe]]).

### Processing levers

For brand-controlled grinding, validate equipment surfaces, screen incoming whole spice before grinding, and segregate adulteration-prone product (yellow-red-pigmented ground spice) for additional QC.

### Formulation levers

For seasoning blends, characterise the metal load of each ingredient on a dry-weight basis and weight to keep aggregate Pb, Cd, and tAs at the lowest achievable per-serving level. Dilution with lower-metal carrier ingredients reduces per-serving exposure proportionally.

### Testing and QC levers

Lot-level ICP-MS testing of every ground-spice lot at intake, with detection floors ≤ 100 ppb Pb. For adulteration-prone product (turmeric, paprika, cinnamon), XRF screening catches the Pb-and-Cr adulteration pattern at intake. The CFIA 2025 protocol is a useful population-screening reference ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]).

### Packaging and storage levers

Packaging is not the dominant pathway for dry spices.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set spice-specific heavy-metals maxima; general food categories apply. The EU Regulation 2023/915 applies a 1.5 mg/kg Pb maximum for "spices (dry products from seeds, fruits, roots, bark, or other plant parts)" and 0.5 mg/kg Cd for the same category. The NYS Department of Health 2019 Technical Support Document derived health-based guidance values (Pb 0.21, Cd 0.21, Cr 0.41, iAs 0.10 mg/kg) for spices specifically. FDA Import Alert 99-42 is the operational US enforcement mechanism for adulteration-risk imports.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | international/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 2 | [[sources/chime2025-nigerian-spices-as-cd-pb\|Chime et al. 2025]]. *Assessment of toxic trace metal contamination in food spices sold in Nigerian markets*, World Journal of Advanced Research and Reviews | 2025 | Peer-reviewed | Nigerian-market spice Pb-Cd-tAs (n=7); West African retail context |
| 3 | [[sources/napier2024-wanabana-apple-cinnamon-puree-lead-NC\|Napier et al. 2024]]. *Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024*, MMWR Morbidity and Mortality Weekly Report | 2024 | Agency report | US/EC Pb occurrence in Routine pediatric blood lead surveillance in North Carolina + nationwide; ~500 cases identified nationally, 22 in NC. Lead... |
| 4 | [[sources/spex2023-hot-sauce-chili-powder-metals\|ZeptoMetrix 2023]]. *Heavy Metal Contamination of Hot Sauce and Chili Powder*, SPEX Application Note (ZeptoMetrix) | 2023 | Industry | US Pb, Cd, tAs, Cr occurrence in 7 chili powders (1 organic) and 6 hot sauces (1 organic) purchased at US dollar stores, farmer's markets,... (n=13) |
| 5 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | PL/EU Cd, Pb occurrence in Retail herbs and spices from Lublin, eastern Poland; 9 dried herb species (n=100), 15 fresh herb species (n=184),... (n=432) |
| 6 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, MeHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 7 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 8 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | PL/EU Cd, Pb, tAs, tHg occurrence in 240 plant material samples from eastern Poland: herbs (n=163), spices (n=61), China tea/green tea (n=8), Arabica roasted coffee... (n=240) |
| 9 | [[sources/hoha2014-pork-pb-cd-cu-zn-romania\|Hoha et al. 2014]]. *Heavy metals contamination levels in processed meat marketed in Romania*, Environmental Engineering and Management Journal | 2014 | Peer-reviewed | RO Pb, Cd, Cu, Zn occurrence in Bacon (n=6), ham (n=6), sausage (n=12), and salami (n=12) purchased from four commercial centers in Iasi, Romania; produced... (n=36) |
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
| [57c2985](https://github.com/paleofoundation/heavymetalindex/commit/57c2985) | 2026-05-28 | audit: gasparik2017-wild-boar-slovakia-metals [revised] |
<!-- END: hmi-page-history -->
