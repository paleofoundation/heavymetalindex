---
type: ingredient
commodity: parsley
title: "Parsley"
label: "Parsley"
aliases: [petroselinum-crispum, italian-parsley, flat-leaf-parsley, curly-parsley]
category: herb-spice
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [500, 12830]
    p95_ppb: 12830
    confidence: medium
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [60, 210]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
drivers: [soil-uptake, leafy-accumulation, geography, drying-concentration]
lower_risk_variants: ["[[ingredients/fresh-herbs]]"]
higher_risk_variants: ["[[ingredients/dried-herbs]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 3
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Parsley

Parsley (Petroselinum crispum) is a leafy herb in the Apiaceae family, consumed both fresh (in salads, garnishes, sauces, and gremolata) and dried (in herb blends and seasonings). The contamination profile reflects parsley's status as a leafy vegetable from a metal-accumulation perspective: like spinach, basil, and other leafy crops, parsley accumulates Pb and Cd from soil at higher rates than root vegetables or fruit vegetables. The available evidence splits cleanly along the fresh-versus-dried processing axis. The Iranian Babol survey of fresh parsley reports moderate Pb and Cd in agricultural production ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]), while the UAE Dubai market survey of dried parsley documents substantially higher values, with 46 percent of parsley samples exceeding the WHO permissible limit of 10 mg/kg for Pb in medicinal herbs ([[sources/dghaim2015-heavy-metals-uae-herbs|Dghaim et al. 2015]]).

## Why this commodity accumulates heavy metals

Parsley accumulates heavy metals through two principal pathways. The first is soil uptake by the root system, with translocation into the leafy aboveground tissue where most consumption occurs. Leafy herbs generally accumulate Pb and Cd at higher rates than root or fruiting vegetables because they have larger transpiration-driven water uptake per unit biomass; the large surface area of leafy tissue also captures atmospheric deposition of metals. The Iranian Babol dataset documented this leafy-accumulation pattern: fresh parsley (Pb 500 ppb mean) and spinach (Pb 480 ppb) carried materially higher Pb than tomatoes (190 ppb), cucumbers (88 ppb), or beans (67 ppb) from the same agricultural region.

The second pathway is post-harvest drying concentration. When fresh parsley is dried for spice-blend use, the water loss (typically 80 to 90 percent for parsley) proportionally concentrates all metals on a per-mass basis. Dried parsley therefore carries roughly 5- to 10-fold the per-mass metal load of fresh parsley from the same source. The UAE Dghaim dataset reports dried parsley Pb up to 12,830 µg/kg, consistent with both source-fresh-parsley metal load and the drying-concentration effect.

## Heavy metal contamination profile

Values below combine fresh-weight Iranian data and dry-weight UAE data; the wide typical range reflects the fresh-versus-dried processing axis.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 500–12,830 | 12,830 | medium | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]], [[sources/dghaim2015-heavy-metals-uae-herbs\|2]] |
| Cd  | n=2 | 60–210 | — | low | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]], [[sources/dghaim2015-heavy-metals-uae-herbs\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Iranian Babol fresh-vegetable survey reports parsley Pb at 0.5 ± 0.16 mg/kg and Cd at 0.06 ± 0.04 mg/kg on a fresh-weight basis from 4 samples ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]). The Pb value exceeds the Iranian National Standard for leafy vegetables (0.2 mg/kg) by 2.5-fold; the Cd value is below the Iranian National Standard for leafy vegetables (0.05 mg/kg) and below the Codex CXS 193-1995 leafy vegetable Cd limit. The four-sample-per-vegetable design is a low-confidence basis for population-level inference, but the order-of-magnitude pattern (leafy herbs higher than fruiting vegetables) is internally consistent within the study.

The UAE Dubai market survey of 81 samples across seven traditional herbs (parsley, basil, sage, oregano, mint, thyme, chamomile) reports dried parsley Pb up to 12.83 mg/kg with 46 percent of parsley samples above the WHO permissible limit of 10 mg/kg ([[sources/dghaim2015-heavy-metals-uae-herbs|Dghaim et al. 2015]]). Cd in dried parsley reached 0.21 mg/kg but zero percent of parsley samples exceeded the WHO PL of 0.3 mg/kg. The dataset documents that parsley sits in the middle of the seven-herb range for Pb (lower than sage, oregano, basil, and thyme; higher than mint and chamomile) and at the lower end for Cd (lower than basil, sage, and chamomile). The WHO PL of 10 mg/kg for Pb in medicinal herbs is far above current EU limits (3 mg/kg for dried herbs per the older EU 1881/2006, with EU 2023/915 establishing 0.10 mg/kg for fresh herbs in the leafy vegetable category); the UAE exceedance pattern reflects both true contamination and the older regulatory benchmark.

The Zakrzewska 2023 study of Cd-spiked soil and the resulting parsley Cd accumulation provides agronomic mechanism data for soil-to-parsley translocation; the specific per-soil-condition parsley Cd values are not in the accessible data slice but the study's contribution is qualitative confirmation of the leafy-accumulation pathway ([[sources/zakrzewska2023-cadmium-soil-micp-parsley|Zakrzewska 2023]]).

Regional and varietal variation across flat-leaf (Italian) parsley and curly parsley is not resolved in the current corpus; the available evidence does not stratify by cultivar.

## Processing effects

The fresh-to-dried processing transformation is the dominant processing-effect lever for parsley metal load. Water removal during drying (typically 80 to 90 percent water loss) proportionally concentrates all metals on a per-mass basis. Dried parsley therefore carries roughly 5- to 10-fold the per-mass metal load of fresh parsley from the same source. The UAE dataset reports Pb values consistent with this concentration effect applied to source-fresh parsley grown in regions with documented soil-Pb contamination. Washing fresh parsley removes a portion of surface-deposited Pb but does not affect systemically-taken-up metals. Blanching does not remove metals from parsley tissue. Freeze-drying produces similar concentration effects to air-drying but preserves more of the volatile flavor compounds.

## Ingredient-derivative risk

Parsley produces several food-ingredient derivatives. Fresh parsley leaves (whole or chopped) are the baseline form. Dried parsley flakes and ground dried parsley carry the drying-concentration effect documented above. Parsley essential oil concentrates the volatile flavor compounds while leaving most metals in the spent plant material; this is the lowest-metal-load parsley-derived ingredient. Parsley root (used in some Central European cuisines as a vegetable) has a different metal profile from the leafy part, typically with lower Pb and similar or slightly higher Cd reflecting root-versus-leaf partition. Parsley-containing seasoning blends carry the parsley metal load proportionally to the blend percentage.

## Mitigation options

Sourcing levers operate at the brand and grower level. Sourcing parsley from low-Pb-soil regions with documented clean irrigation water is the upstream lever and carries the most leverage. Avoiding parsley grown in industrially polluted regions, urban-fringe agricultural zones, or near major roadways (atmospheric Pb deposition) reduces source-fresh parsley load. For dried parsley, brand selection matters because the UAE dataset documented brand-level variability within the same herb type that exceeded the across-source LOD variability.

Agronomic levers operate on the parsley grower. Soil testing to identify and avoid contaminated plots, irrigation-water testing, and soil-pH management for Cd bioavailability are the documented practices. Hydroponic and controlled-environment parsley production substantially reduces soil-derived metal load relative to field-grown product.

Processing levers are limited for the fresh-to-dried conversion (the drying-concentration effect is mechanically unavoidable). Selecting cleaner source-fresh parsley before drying is the dominant lever rather than processing modification. For consumed product, freshly chopped parsley carries lower per-mass metals than dried parsley flakes from the same source.

Formulation levers operate on the brand. Substituting other fresh herbs (cilantro, dill, chives) with lower documented metal loads is the available adjustment where flavor profile permits. Reducing the parsley percentage in seasoning blends proportionally reduces per-serving metal exposure.

Testing and QC levers are critical given the documented wide variability between fresh and dried, and between Iranian agricultural and UAE market sources. Lot-level ICP-MS testing of dried parsley against a Pb specification catches origin-related variability before it enters production. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for parsley in the current evidence base.

## Regulatory limits that apply

The Codex Alimentarius CXS 193-1995 establishes Pb in leafy vegetables at 0.3 mg/kg (300 ppb) and Cd in leafy vegetables at 0.2 mg/kg (200 ppb) on a wet-weight basis. The European Union Regulation (EU) 2023/915 establishes Pb in leafy vegetables and fresh herbs at 0.10 mg/kg (100 ppb) and Cd in leafy vegetables and fresh herbs at 0.20 mg/kg (200 ppb), with dried herbs covered under a separate category at higher values reflecting the drying-concentration effect ([[regulations/eu2023-contaminants-maximum-levels]]). The Iranian National Standard for leafy vegetables (Pb 0.2 mg/kg, Cd 0.05 mg/kg) is the reference for the Babol exceedance analysis ([[sources/abdolahpour2023-heavy-metals-babol-vegetables|Abdolahpour Alamdari et al. 2023]]). The WHO/FAO permissible limit of 10 mg/kg for Pb in medicinal herbs is the reference used in the UAE exceedance analysis ([[sources/dghaim2015-heavy-metals-uae-herbs|Dghaim et al. 2015]]); this limit is substantially higher than the EU dried-herb limit and reflects the medicinal-herb regulatory category rather than the dried-culinary-herb category. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in parsley under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Primary Pb and Cd occurrence data for fresh parsley from Babol Iranian agricultural region (n=4, fresh weight); Pb mean 500 ppb (exceeds Iranian leafy vegetable limit), Cd mean 60 ppb |
| 2 | [[sources/dghaim2015-heavy-metals-uae-herbs\|Dghaim et al. 2015]]. *Determination of Heavy Metals Concentration in Traditional Herbs Commonly Consumed in the United Arab Emirates*, Journal of Environmental and Public Health | 2015 | Peer-reviewed | Primary Pb and Cd occurrence data for dried parsley from Dubai market (n=11–13 samples, dry weight, AAS); Pb up to 12,830 ppb (46 percent above WHO PL 10 mg/kg), Cd up to 210 ppb (0 percent above WHO PL 0.3 mg/kg) |
| 3 | [[sources/zakrzewska2023-cadmium-soil-micp-parsley\|Zakrzewska 2023]]. *Cadmium accumulation in parsley grown in MICP-treated soils*, — | 2023 | Peer-reviewed | Agronomic mechanism study of soil-to-parsley Cd translocation; qualitative confirmation of leafy-accumulation pathway and soil-Cd bioavailability variables |
<!-- END: hmi-source-legend -->
