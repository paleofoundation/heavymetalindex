---
type: ingredient
commodity: dried-herbs
title: "Dried Herbs"
label: "Dried Herbs"
aliases: [dried-aromatic-herbs, culinary-dried-herbs, oregano, thyme]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 2000]
    p95_ppb: 5000
    confidence: high
    n_studies: 7
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: 1200
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [20, 300]
    p95_ppb: null
    confidence: medium
    n_studies: 4
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
drivers: [drying-concentration, soil-uptake, atmospheric-deposition, species-variance]
lower_risk_variants: ["[[ingredients/fresh-herbs]]"]
higher_risk_variants: []
used_in_products: ["[[products/spice-blends]]", "[[products/herbal-botanical-infusions]]"]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 7
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Dried Herbs

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 8/10 HMTc analytes, total n=28 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 10 jurisdictions, top PL 25% | — |
| D3 Anthropogenic evidence | GAP | 5 soil; no supply-chain link | link a supply-chain/ hub page |
| D4 Background mechanism | OK | section present, 4 drivers, 5 upstream source(s) | — |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tAs POOLABLE, tHg POOLABLE, Ni THIN, Al THIN, Cr THIN, Sn THIN | Pb: needs 3 distinct source(s); Cd: needs 3 distinct source(s); iAs: needs 2 more study(ies); Ni: needs 1 more study(ies); Al: needs 3 distinct source(s); Cr: needs 1 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 5 claims checked, 5 supported; 8 citations, 0 orphan, 6 foreign | 6 foreign citation(s) not naming dried-herbs: angelon-gaetz2018-lead-spices-north-carolina, chime2025-nigerian-spices-as-cd-pb, cicero2022-minerals-spices-aromatic-herbs |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn; pairing 0 paired, 9 single, 0 unpaired | Pb: THIN, needs 3 distinct source(s); Cd: THIN, needs 3 distinct source(s); iAs: THIN, needs 2 more study(ies); Ni: THIN, needs 1 more study(ies); Al: THIN, needs 3 distinct source(s); Cr: THIN, needs 1 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.50, legal-defensibility 0.25, scale 0.25 | spread 0.75 — starved: legal-defensibility |

<!-- /hmi-completeness-scorecard -->


Dried herbs — the dehydrated leaves, flowers, and aerial plant parts of culinary and medicinal aromatic plants (oregano, basil, thyme, parsley, sage, rosemary, mint, chamomile, lemon balm, dill, marjoram, savory) — share the drying-concentration heavy-metals pattern with the broader [[ingredients/herbs-and-spices]] category. The dominant feature is concentration: fresh herbs at 80-90% moisture content dry down to product at 8-12% moisture, producing a 7-10× per-mass concentration uplift on Pb, Cd, and other metals relative to the fresh-weight baseline. The current corpus loads 3 routed sources plus broader herbs-and-spices corpus reachable via the routing layer: Angelon-Gaetz 2018 NC home-investigation cohort (n=386, [[sources/angelon-gaetz2018-lead-spices-north-carolina]]), Chime 2025 Nigerian-market spice trace-metal work (n=7, [[sources/chime2025-nigerian-spices-as-cd-pb]]), Cicero 2022 multi-origin 8-metal panel (n=13, [[sources/cicero2022-minerals-spices-aromatic-herbs]]), Fischer 2022 Polish mercury in spice plants (n=48, [[sources/fischer2022-mercury-spice-plants-poland]]), Huff 2025 Lancaster PA spice survey (n=116, [[sources/huff2025-spices-lancaster-pa]]), Kowalska 2021 Polish 240-sample herb-spice-tea-coffee panel ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]), LHAAC 2025 Australian Coordinated Sampling Project 41 (n=380, [[sources/lhaac2025-csp41-herbs-spices-wa]]), NYS DOH 2019 spice-specific health-based guidance values ([[sources/nys-doh2019-metals-spices-guidance]]).

## Why this commodity accumulates heavy metals

Dried herbs accumulate metals through two combined pathways: the live plant's soil-uptake of Cd, Cr, Ni, and trace metals plus atmospheric deposition of Pb onto the leaf surface during the growing cycle, and the drying step that concentrates these metals on a per-mass basis by 7-10× through moisture removal. Drying is not contamination but a basis change; reporting consistency (dry weight vs fresh weight) matters when comparing values across sources. Atmospheric deposition is particularly relevant for herbs harvested in roadside or industrial-corridor settings, where surface Pb-and-Cd accumulate on the leaf during the growing cycle and then concentrate per-mass during drying. The Kowalska 2021 Polish dataset (n=240 across 37 herb species and 12 spice species) identified valerian root, lemon balm leaves, common sage, and chamomile flowers as higher-Pb species ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]). The Cicero 2022 multi-origin work (n=13 across IT, SA, IN, IR, ID, VN) provides the strongest within-non-adulterated baseline across the full 8-metal panel ([[sources/cicero2022-minerals-spices-aromatic-herbs]]). The Australian Coordinated Sampling Project 41 (n=380 retail-and-import samples) is the largest single-jurisdiction recent dataset and demonstrates the population-scale per-species variance within commercial dried-herb product ([[sources/lhaac2025-csp41-herbs-spices-wa]]). The Winiarska-Mieczan 2023 Polish n=432 herbs-and-single-component-spices Pb-Cd panel is referenced through the [[ingredients/fresh-herbs]] page as a paired-product comparison.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=7 | 100–2000 | 5000 | high | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| Cd | n=6 | 50–500 | 1200 | high | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| iAs | n=1 | 10–200 | — | low | — |
| tAs | n=4 | 20–300 | — | medium | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| tHg | n=3 | 1–50 | — | medium | [[sources/fischer2022-mercury-spice-plants-poland\|1]], [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|2]] |
| Ni | n=2 | 200–3000 | — | low | — |
| Al | n=2 | 1000–20000 | — | low | — |
| Cr | n=2 | 50–1000 | — | low | — |
| Sn | n=1 | — | — | — | — |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

The corpus characterises dried herbs through both directly-routed studies and the broader herbs-and-spices corpus. The Polish Kowalska 2021 dataset is the most species-diverse with 37 herb species and 12 spice species, identifying within-species variance of 2-3 orders of magnitude across Pb and Cd ([[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland]]). The Australian LHAAC 2025 Coordinated Sampling Project 41 covers 380 retail-and-import samples with the 7-metal panel including Al specifically ([[sources/lhaac2025-csp41-herbs-spices-wa]]). The North Carolina Angelon-Gaetz 2018 home-investigation cohort identified dried-herbs among the elevated-Pb spice samples in homes of children with elevated blood-lead levels ([[sources/angelon-gaetz2018-lead-spices-north-carolina]]). The Lancaster PA Huff 2025 retail survey (n=116) included dried-herbs within the broader spice panel and reported the regulatory-gap analysis for the US market ([[sources/huff2025-spices-lancaster-pa]]). The Polish Fischer 2022 mercury-in-spice-plants work (n=48) provides the strongest single-jurisdiction tHg data for the dried-herb category ([[sources/fischer2022-mercury-spice-plants-poland]]). Within-species pattern: valerian root, lemon balm leaves, common sage, and chamomile flowers consistently sit at the higher end of the Pb distribution; thyme, oregano, basil, and rosemary at the middle; parsley, dill, and chives at the lower end. Country-of-origin matters: Mediterranean dried herbs (Italy, Greece, Spain, Turkey) sit at the lower-to-middle of the distribution; some South Asian and Middle Eastern origins carry higher loads driven by soil and atmospheric Pb.

## Processing effects

Drying is the dominant processing-driven concentration event, with fresh-to-dried transitions concentrating metals on a per-mass basis by 7-10× through moisture removal. This is a basis change rather than contamination. Sun-drying, oven-drying, and freeze-drying produce similar per-mass concentration outcomes; freeze-drying preserves color and flavor better but does not differ on metal load. Grinding and blending introduce minor metal pickup from equipment surfaces. Steam sterilisation, irradiation, and ethylene-oxide-based microbial-control treatments do not affect metal load. The dried-herbs category does not have the adulteration risk that ground-spices (turmeric, paprika, cinnamon) face; the adulteration mechanism (lead chromate pigment addition) does not apply to the green-and-grey-colored dried-leaf products that dominate the dried-herb category.

## Ingredient-derivative risk

Whole-leaf dried herbs (whole dried oregano, whole basil leaves, whole sage) carry the baseline dry-weight metal load. Ground dried herbs (ground oregano, ground thyme) carry the same per-mass load. Herbal-tea preparations (dried chamomile flowers, dried lemon balm, dried mint) inherit the dried-herb load; brewing extracts a partial fraction into the cup (see [[products/herbal-botanical-infusions]] for the prepared-infusion view). Herbal-tincture and herbal-supplement preparations concentrate the parent herb's metal load proportional to extraction concentration; supplement-grade herbal product from non-audited supply chains can carry Pb-and-Cd at concentrations of regulatory concern. Italian-seasoning, herbes-de-Provence, and similar blends inherit the highest-load component's metals weighted by the inclusion ratio.

## Mitigation options

### Sourcing levers

Species selection within the dried-herbs category shifts the per-mass Pb-and-Cd distribution. Sourcing thyme, oregano, basil, rosemary, and parsley over valerian root, lemon balm leaves, and chamomile flowers reduces the per-mass load for buyers without species-specific functional requirements. Origin-country sourcing matters: Mediterranean-origin product sits at the lower-to-middle of the distribution. Specify supplier transparency on the species mix in blended product.

### Agronomic levers

For brand-controlled-supply operations, soil pH management around 6.5 and avoidance of phosphate fertilisers with elevated Cd impurity reduce upstream Cd loading. Avoid sourcing from roadside or industrial-corridor production. Most agronomic interventions live with herb producers.

### Processing levers

Validate equipment surfaces in grinding and blending operations. The drying method (sun, oven, freeze-dry) does not meaningfully differ on metal load. Avoid extended storage in unsealed bulk bins where atmospheric Pb dust deposition can accumulate on surface.

### Formulation levers

For herb-blend formulations, characterise the metal load of each ingredient input on a dry-weight basis and weight to keep aggregate Pb-and-Cd at the lowest achievable per-serving level. Dilution with lower-metal carrier ingredients reduces per-serving exposure proportionally.

### Testing and QC levers

Lot-level ICP-MS testing of every dried-herb lot at intake, with detection floors ≤ 100 ppb Pb and ≤ 50 ppb Cd. The LHAAC 2025 protocol is a useful population-screening reference ([[sources/lhaac2025-csp41-herbs-spices-wa]]).

### Packaging and storage levers

Packaging is not the dominant pathway for dried herbs. Standard food-grade glass, plastic, or paperboard does not affect the metal load.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set a dried-herbs-specific maximum. The EU Regulation 2023/915 applies a 1.5 mg/kg Pb maximum for "dried herbs and spices" (a slightly different category than the broader "spices" maximum) and 0.5 mg/kg Cd for the same category. The NYS Department of Health 2019 Technical Support Document derived health-based guidance values (Pb 0.21, Cd 0.21, Cr 0.41, iAs 0.10 mg/kg) that apply to dried herbs as well as spices ([[sources/nys-doh2019-metals-spices-guidance]]). FDA has issued occasional import alerts and enforcement actions on dried-herb product but does not maintain a category-specific action level.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saleem2025-locally-grown-vegetables-north-dakota\|Saleem et al. 2025]]. *Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables*, Foods | 2025 | Peer-reviewed | US Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se occurrence in 82 samples of 13 locally grown vegetable types from the Town Square Farmer's Market in Grand Forks, North... (n=82) |
| 2 | [[sources/winiarska-mieczan2023-cd-pb-polish-herbs-spices\|Winiarska-Mieczan et al. 2023]]. *The Content of Cd and Pb in Herbs and Single-Component Spices Used in Polish Cuisine*, Biological Trace Element Research | 2023 | Peer-reviewed | Cd and Pb in 100 dried-herb samples across 9 species from Polish retail, with dried form carrying highest Cd and Pb among herb forms |
| 3 | [[sources/fischer2022-mercury-spice-plants-poland\|Fischer et al. 2022]]. *The Mercury Concentration in Spice Plants*, Processes | 2022 | Peer-reviewed | Polish mercury in 48 spice-and-herb plant samples; strongest tHg data |
| 4 | [[sources/gill2021-consumer-reports-spices\|Gill et al. 2021]]. *The Trouble With Spices: Heavy Metals in 15 Herbs and Spices*, Consumer Reports | 2021 | NGO report | US Pb, Cd, tAs occurrence in 126 individual products covering 38 brands and 15 herb/spice types from the US retail market (n=126) |
| 5 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Polish 37-herb-12-spice (n=240) 4-metal panel; species-variance evidence |
| 6 | [[sources/dghaim2015-heavy-metals-uae-herbs\|Dghaim et al. 2015]]. *Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates*, Journal of Environmental and Public Health | 2015 | Peer-reviewed | AE Pb, Cd, Cu, Fe, Zn occurrence in Seven traditional herbs (parsley n=13, basil n=11, sage n=11, oregano n=11, mint n=13, thyme n=13, chamomile n=9) purchased... (n=81) |
| 7 | [[sources/darko2014-seasonings-ghana-metals\|Darko et al. 2014]]. *Heavy metal content in mixed and unmixed seasonings on the Ghanaian market*, African Journal of Food Science | 2014 | Peer-reviewed | GH Fe, Zn, Cu, Cd, Pb, tHg occurrence in Twenty-two powdered mixed and unmixed seasoning samples purchased at random from local shops and hawkers in the Asafo,... (n=22) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
<!-- END: hmi-page-history -->
