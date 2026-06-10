---
title: "Cassava"
type: ingredient
commodity: cassava
label: "Cassava"
aliases: [cassava, manioc, manihot-esculenta, yuca, tapioca, gari, fufu, cassava-flour]
category: root-vegetable
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [21, 69]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-17
  Cd:
    status: populated
    typical_ppb: [27, 63]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-17
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
  tAs:
    status: populated
    typical_ppb: [6, 11]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-17
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
  Cr:
    status: populated
    typical_ppb: [55, 68]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-17
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-17
drivers: [soil-uptake, processing, geography, mining-proximity, fermentation]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/cassava-flour]]", "[[ingredients/gari]]"]
used_in_products: ["[[products/root-tuber-vegetables]]", "[[products/gluten-free-flour]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-17
sources: 1
---

# Cassava

Cassava (*Manihot esculenta*) is a starchy tuber that feeds an estimated 700 to 800 million people globally, predominantly across sub-Saharan Africa, Latin America, and Southeast Asia, where it serves as a primary dietary calorie source. Its long below-ground growth cycle and the soils of major producing regions make cassava a meaningful vector for soil-derived heavy metals, particularly in West Africa and in artisanal-mining-influenced regions of Latin America. The single direct cassava-specific source in the current corpus ([[sources/albishi2026-cassava-flour-biofortification|1]]) reports Nigerian cassava flour control concentrations of Pb 61 to 69, Cd 58 to 63, tAs 10 to 11, and Cr 65 to 68 µg/kg dry weight, all well below WHO/FAO maximum permissible limits but not negligible given the high per-capita consumption in cassava-belt populations.

## Why this commodity accumulates heavy metals

Cassava is a root tuber that develops in sustained contact with soil over an 8 to 24 month growth cycle, longer than most root vegetables. The extended soil contact, combined with the deep-rooting habit of mature plants that draws nutrient solution from below the topsoil zone, exposes the tuber to both surface-adhered soil contamination and root-system uptake of soil-solution metals. The major producing regions, Nigeria, the Democratic Republic of the Congo, Thailand, Indonesia, Ghana, Brazil, and Vietnam, span soil types and contamination contexts that vary substantially: tropical laterites in West Africa with low pH and limited Cd buffering capacity; mining-influenced soils across parts of South America and West Africa; and intensive smallholder systems where fertilizer-derived Cd accumulation has not been monitored. Cassava is also processed in ways that materially change its heavy-metals profile: peeling removes surface contamination, fermentation can mobilize or sequester metals depending on the microbial process and matrix, and the drying-and-grinding step that produces cassava flour or gari concentrates metals proportionally to moisture loss.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found.

| Analyte | Coverage | Typical (ppb DW) | Confidence | Key sources |
|---------|----------|------------------|------------|-------------|
| Pb | n=1 | 21–69 | low | [[sources/albishi2026-cassava-flour-biofortification\|1]] |
| Cd | n=1 | 27–63 | low | [[sources/albishi2026-cassava-flour-biofortification\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=1 | 6–11 | low | [[sources/albishi2026-cassava-flour-biofortification\|1]] |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | n=1 | 55–68 | low | [[sources/albishi2026-cassava-flour-biofortification\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

Values are cassava flour, dry weight basis, Nigerian sourcing. Fresh-tuber and as-consumed values are not yet established in the corpus.

## Ranges by source, region, and variety

Direct cassava-specific occurrence data in the current corpus is limited to one Nigerian cassava flour source ([[sources/albishi2026-cassava-flour-biofortification|1]]). Two additional sources include cassava among broader plant-food or mining-region crop surveys: [[sources/afonne2020-heavy-metals-plant-foods|2]] discusses cassava contamination patterns across Nigeria, Tanzania, Slovakia, and Kosovo in a narrative review of plant-food heavy metals, citing Codex CXS 193-1995 root-and-tuber MLs of Pb 0.10 mg/kg and Cd 0.10 mg/kg; [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining|3]] reports cassava as one of several crops surveyed near the Ponce Enriquez gold-mining area in Ecuador, where artisanal mining contamination is the dominant exposure driver. Variety-level differences across *Manihot esculenta* cultivars (bitter vs sweet, yellow-flesh vs white-flesh) are not resolved in the corpus. Regional fan-out beyond Nigeria and Ecuador, particularly for the largest cassava-consuming regions (DRC, Thailand, Indonesia, Brazil), remains a substantial coverage gap.

## Processing effects

Cassava is rarely consumed as raw fresh tuber because of its cyanogenic glycoside content, so the as-consumed exposure is mediated through processing. Peeling removes the outer cortex where surface-adhered soil and Pb concentrate; this step is universal across cassava preparations and provides the largest single Pb reduction. Soaking and fermentation, used in producing gari, fufu, and cassava-based fermented flours across West Africa, can leach water-soluble metals into discard water, with the magnitude depending on fermentation duration, water-to-tuber ratio, and whether the leachate is discarded. Drying and grinding into cassava flour or gari concentrates metals by the moisture-removal factor; fresh cassava at roughly 60 percent moisture dried to a 12 percent moisture flour concentrates metals by approximately 2.2-fold on a per-gram wet-to-dry basis. Quantitative reductions from each processing step are not well characterized for cassava in the current corpus.

## Ingredient-derivative risk

Cassava flour and tapioca starch are the highest-volume cassava derivatives in international trade, with tapioca starch widely used as a thickener and gluten-free ingredient and cassava flour featured in gluten-free baking. Both are dried derivatives and concentrate metals proportionally to moisture loss; per-serving exposure depends on whether the derivative is used as a primary ingredient (gluten-free flour blends) or as a minor functional ingredient (tapioca as a thickener at low percentage). Gari, the West African fermented and roasted cassava granule, undergoes additional fermentation that may shift the Cd and Pb fraction available for human absorption but does not eliminate the underlying soil-derived burden. Cassava-based pet foods and animal feeds are an emerging derivative category with their own regulatory framework. Variant pages for cassava flour and gari are flagged as `higher_risk_variants` pending their accumulation of 5-plus dedicated sources to warrant their own ingredient pages.

## Mitigation options

### Sourcing levers

Origin diversification across the major cassava-producing regions reduces dependence on any single soil-contamination context. For commercial cassava flour and tapioca starch processors, requesting Cd and Pb supplier data and preferring sources from regions with documented low soil burdens is the most direct lever. Mining-proximity flags, particularly for South American sources, should be part of incoming-lot risk screening.

### Agronomic levers

Soil pH management reduces Cd bioavailability in cassava-growing soils, though many tropical laterite soils in major producing regions have limited buffering capacity and lime amendment is not standard smallholder practice. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Peeling, soaking, and fermentation with discard of leachate water collectively reduce surface-deposited Pb and water-soluble Cd fractions. The traditional gari production process incorporates several of these steps and is hypothesized to provide meaningful but not yet quantified reduction. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Formulation levers

Where cassava flour is one ingredient in a gluten-free blend, blending with lower-metal flours (e.g., tested rice flours or seed flours from low-Cd sources) reduces per-serving cassava-derived metal contribution proportionally to the blend ratio.

### Testing and QC levers

ICP-MS incoming-lot testing on cassava flour and tapioca starch for Cd, Pb, and tAs, benchmarked against Codex CXS 193-1995 root-and-tuber MLs (Pb 100 ppb, Cd 100 ppb on a wet-weight basis with appropriate dry-to-wet conversion for flours), provides compliance assurance. For mining-proximity sources, additional tAs testing with speciation to iAs is warranted given the disproportionate health risk from inorganic arsenic.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Codex Alimentarius CXS 193-1995 sets maximum levels for root and tuber vegetables, with Pb at 0.10 mg/kg (100 ppb) and Cd at 0.10 mg/kg (100 ppb) on a wet-weight basis; see [[regulations/codex-cadmium-mls]]. The European Union retains analogous MLs for root vegetables under Regulation 2023/915; see [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]]. The US FDA does not maintain federal action levels specific to cassava outside the baby-food context. Nigerian cassava destined for export to the EU or UK is subject to importing-country MLs; intra-African and intra-South-American trade is governed by domestic frameworks that vary in stringency and enforcement.

## Sources

- [[sources/albishi2026-cassava-flour-biofortification]]
- [[sources/afonne2020-heavy-metals-plant-foods]]
- [[sources/romero-crespo2023-trace-elements-crops-ecuador-mining]]
