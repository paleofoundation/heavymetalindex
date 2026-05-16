---
type: ingredient
commodity: bread
title: "Bread"
label: "Bread"
aliases: [wheat-bread, rye-bread, gluten-free-bread, sourdough]
category: baked-good
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 80]
    p95_ppb: 152
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [21, 72]
    p95_ppb: 164
    confidence: medium
    n_studies: 1
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
    typical_ppb: [0, 10]
    p95_ppb: null
    confidence: low
    n_studies: 1
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
    typical_ppb: [5, 176]
    p95_ppb: 176
    confidence: low
    n_studies: 1
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
drivers: [flour-source, dough-water, baking-equipment, grain-region]
lower_risk_variants: ["[[ingredients/bread]]"]
higher_risk_variants: []
used_in_products: ["[[products/bread-and-baked-goods]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Bread

Bread is the baked product of fermented or unleavened flour dough, and is one of the highest-volume staple foods globally; in some markets it is the single largest contributor to cumulative dietary heavy metal exposure for adults. The Finnish Food Authority's cumulative risk assessment identifies bread and other cereal products as the dominant contributor to dietary neurotoxic and kidney-toxic metal load for Finnish adults aged 25 to 64 ([[sources/suomi2023-finland-dietary-metals-cumulative|Suomi and Tuominen 2023]]), and the Iranian Mashhad study documents bread as the carrier of an arsenic burden that drives hazard indices above 1 for both children and adults across all five regions of a major Iranian city, with carcinogenic risk estimates of 3.6 to 6.1 × 10⁻³ ([[sources/asaditouranlou2025-bread-wheat-mashhad|Asadi Touranlou et al. 2025]]). The bread metal profile is dominated by the source-wheat (or other grain) metal load, with smaller contributions from dough water and baking equipment.

## Why this commodity accumulates heavy metals

Bread accumulates heavy metals through three pathways. The first and dominant pathway is the source-flour metal load. The Asadi Touranlou 2025 dataset directly quantified the partition: 83 percent of heavy metal content in bread entered through flour, 14.5 percent through dough preparation (water and additives), and 2.5 percent from baking ovens. This means that bread metal load is fundamentally determined by the metal load of the source wheat (or rye, or rice in gluten-free), which in turn depends on the irrigation water, soil, and growing region of the source grain. The [[ingredients/wheat]] and [[ingredients/cereals]] pages cover the source-grain baseline.

The second pathway is dough-water contamination. The water used to make dough contributes metals at concentrations reflecting the source-water treatment, distribution-system contact, and any process-step water exposure. In regions where municipal water carries elevated metals (lead service lines, brass fittings, soldered joints), bread inherits those metals through the dough step.

The third pathway is baking-equipment contamination. Older ovens with iron or steel components in direct contact with dough during baking can contribute trace Fe and Ni. Aluminum bakeware contributes Al. Industrial bakery equipment with stainless steel surfaces is the lowest-contribution baking environment.

The grain-type effect on bread metal load is notable. The Polish Gacal 2023 dataset documented that wheat-rye bread carried the highest Cd (mean 72 ppb) and gluten-free bread the lowest (mean 21 ppb) among 50 Polish-market samples ([[sources/gacal2023-cadmium-lead-bread-gluten-free-poland|Gacal et al. 2023]]). This is counterintuitive given that gluten-free breads typically contain rice flour, which is a high-iAs ingredient; the same study did not measure arsenic, so the gluten-free arsenic profile remains uncharacterized. For Cd specifically, the gluten-free formulation actually reduced Cd load below the wheat baseline.

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=2 | 0–80 | 152 | low | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|2]], [[sources/asaditouranlou2025-bread-wheat-mashhad\|3]] |
| Cd  | n=1 | 21–72 | 164 | medium | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | <LOD | — | low | [[sources/asaditouranlou2025-bread-wheat-mashhad\|3]] |
| Ni  | data gap | — | — | — | — |
| Al  | data gap | — | — | — | — |
| Cr  | n=1 | 5–176 (Cr(III)) | 176 | low | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|1]] |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Polish Silesia market survey of 50 commercial bread samples (10 gluten-free, 12 wheat-rye, 20 wheat, 8 rye) provides the cleanest per-bread-type Cd dataset in the current corpus ([[sources/gacal2023-cadmium-lead-bread-gluten-free-poland|Gacal et al. 2023]]). Cd means by type: gluten-free 21 ppb (range below LOQ to 40), rye 41 ppb (range 8 to 88), wheat 50 ppb (range 22 to 90), wheat-rye 72 ppb (range 30 to 164). Two of 8 rye bread samples exceeded the EU rye-specific Cd limit of 50 ppb; one wheat-rye sample exceeded the general cereal Cd limit of 100 ppb. Pb was below the LOQ of 80 ppb in all samples except one wheat bread sample at 152 ppb. The non-carcinogenic hazard quotient for Cd at the maximum wheat-rye concentration exceeded 1 only for children aged 6 months to under 3 years; cancer risk for combined Cd plus Pb exceeded 10⁻⁴ for children under 11 in worst-case scenarios.

The Iranian Mashhad survey of 270 samples (90 bakeries × flour, dough, bread triplets) across five city regions reports that Pb and Hg were below detection limits in all 270 samples, while Al, As, Cr, and Fe exceeded WHO/FAO permissible limits in all five regions ([[sources/asaditouranlou2025-bread-wheat-mashhad|Asadi Touranlou et al. 2025]]). Cadmium exceeded Iranian national standards across all sampling stations. The specific per-bread-type concentration values for tAs, Al, Cr, Ni, and Cd are presented in the source as hazard indices rather than direct mg/kg values in the accessible data slice; the underlying message is that bread from this high-arsenic-irrigation region carries substantially elevated heavy metal load relative to bread from regions with cleaner irrigation water and soils.

The Saraiva 2021 method-validation study analyzed bread samples from France and Denmark using species-specific isotope dilution HPLC-ICP-MS, the current gold-standard for Cr speciation ([[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp|Saraiva et al. 2021]]). Cr(III) in bread ranged from 5.2 to 176 µg/kg; Cr(VI) was not detected (below LOQ of 0.047 µg/kg) in any sample. The methodological finding that all bread Cr is Cr(III) and that prior reports of Cr(VI) in foods likely reflected analytical artefacts from Cr(III) oxidation during alkaline extraction is load-bearing: the relevant chromium concern for bread is total Cr (essentially all Cr(III)), not Cr(VI), and the [[metals/chromium-hexavalent]] page should default to "not detected" for bread matrices.

The Finnish FinDiet 2012 cumulative-exposure dataset identifies bread and other cereal products as the dominant contributor to neurotoxic and kidney-toxic cumulative metal load for Finnish adults aged 25 to 64, with cumulative hazard indices exceeding 1 for average consumers ([[sources/suomi2023-finland-dietary-metals-cumulative|Suomi and Tuominen 2023]]). The specific per-bread Cd, Pb, and other metal concentrations are aggregated into mixture exposures rather than presented as per-bread occurrence values; the Finnish data are most useful as a cumulative-risk context for the per-analyte Polish and Iranian values.

The Azerbaijani Baku dataset reports bread hazard coefficients of Cr 8.4 and Ni 1.4 against Russian/CIS regulatory limits ([[sources/kazimov2014-dietary-heavy-metals-azerbaijan|Kazimov and Alieva 2014]]). The methodology is older AAS with regulatory framework differences from EFSA and EPA; the values are most useful as geographic-diversity context rather than as primary per-analyte sources.

## Processing effects

Processing-state effects on bread metal load operate at three stages. Flour milling determines the source-grain metal partition into the flour used for dough: whole-wheat flour preserves the bran and germ fractions where most metals concentrate, producing higher-metal bread than white flour from the same wheat. The bread-vs-flour-vs-dough partition documented by [[sources/asaditouranlou2025-bread-wheat-mashhad|Asadi Touranlou et al. 2025]] (83 percent of bread metals enter through flour, 14.5 percent through dough, 2.5 percent through baking) makes flour the dominant lever.

Fermentation does not materially remove metals from dough; the leavening process is biological transformation of starches and proteins, not metal removal. Sourdough fermentation, with its longer fermentation time and lactic acid production, is sometimes proposed as a partial mitigation pathway, but the contributing sources do not document a measurable bread Cd or Pb reduction from extended fermentation. The baking step concentrates metals proportionally with the water loss during baking (typically 10 to 15 percent), so per-mass-of-finished-bread metal load is slightly higher than per-mass-of-dough.

Gluten-free formulation has a documented effect on Cd specifically. The Polish dataset showed that gluten-free bread (typically formulated with rice flour, corn flour, and other non-wheat substitutes) carried lower Cd than any wheat-containing bread type. The same formulation effect for arsenic was not measured in the contributing source but would be expected to run in the opposite direction (rice flour carries higher iAs than wheat flour).

## Ingredient-derivative risk

Bread produces a wide range of derivatives. Sliced bread, dinner rolls, baguettes, focaccia, and other shaped breads all carry the same flour-derived metal profile as their source dough. Breadcrumbs concentrate metals slightly through the drying step. Toasted bread is essentially identical to fresh bread in metal content. Croutons and toasted bread products carry the same profile plus any seasoning additions. Bread mixes and ready-to-bake doughs inherit the flour metal profile directly. Frozen bread and par-baked bread products are functionally equivalent to fresh bread in metal load. Stuffing mixes, breadings, and other bread-based ingredients carry proportional metal loads. Cracker products are distinct from bread despite using similar flours; the cracker-specific metal profile depends on the additional processing (drying, lamination) used in cracker manufacture.

## Mitigation options

Sourcing levers operate at the flour and grain producer level. Sourcing wheat from low-Cd-soil regions, irrigated with low-metal water, is the upstream lever and carries the most leverage given that 83 percent of bread metals enter through flour. Geographic sourcing specifications that exclude wheat from high-Cd regions (parts of Europe with phosphate-fertilizer-driven Cd accumulation) or high-arsenic-irrigation regions (the Iranian Mashhad case as a documented example) reduce the inherent flour metal load. The [[ingredients/wheat]] page covers the source-grain sourcing variables.

Agronomic levers operate on the wheat producer and are addressed at the source-grain pages.

Processing levers are partial. Using white flour rather than whole-wheat flour reduces bran-and-germ-concentrated metals at the cost of nutritional content. Selecting filtered or treated dough water rather than tap water from suspect distribution systems reduces the dough-water contribution. Selecting stainless steel baking equipment over aluminum or iron-coated equipment reduces the baking-step contribution. The relative magnitudes of these processing levers are modest compared to the flour-sourcing lever per the Asadi 2025 partition analysis.

Formulation levers operate on the brand. Gluten-free formulation with rice or corn flour substitutes reduces Cd load below the wheat baseline per the Polish dataset, at the potential cost of elevated iAs if the substitute flour is rice-based. Diluting higher-Cd flour with lower-Cd flour from a different source is the standard within-wheat formulation response.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming flour against a sourcing specification catches origin-related variability before it enters production; finished-bread testing catches accumulated process drift. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are not a material variable for bread in the current evidence base. Paper, plastic film, and waxed-paper packaging dominate the market with no documented metal migration pathway.

## Regulatory limits that apply

The European Union Regulation (EU) 2023/915 (which consolidated and superseded the earlier EU Regulations 2021/1317 for Pb and 2021/1323 for Cd cited in [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland|Gacal et al. 2023]]) establishes Pb in cereals at 0.20 mg/kg (200 ppb) and Cd in cereals at 0.10 mg/kg (100 ppb) on a wet-weight basis as placed on the market, with the rye-specific Cd limit at 0.050 mg/kg (50 ppb) ([[regulations/eu2023-contaminants-maximum-levels]]). The same regulation sets stricter values for processed cereal-based foods for infants and young children. The Codex Alimentarius CXS 193-1995 establishes Pb in cereal grains at 0.2 mg/kg and Cd in cereal grains at 0.1 mg/kg. The WHO/FAO permissible limits used as the reference in the Iranian Mashhad exceedance analysis include Al, As, Cr, and Fe specifics that the cited source does not enumerate in the accessible data slice. The United States FDA has no commodity-specific action level for Pb, Cd, or arsenic in commercial bread for the general population under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]); the framework's processed-baby-food action levels apply to bread-based infant products.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/saraiva2021-chromium-speciation-bread-cereals-ssid-hplcicp\|Saraiva et al. 2021]]. *Speciation analysis of Cr(III) and Cr(VI) in bread and breakfast cereals using species-specific isotope dilution and HPLC-ICP-MS*, Journal of Food Composition and Analysis | 2021 | Peer-reviewed | Cr(III) bread occurrence (range 5–176 ppb) and methodological evidence that bread Cr is essentially all Cr(III) with Cr(VI) not detected (LOQ 0.047 ppb); load-bearing for Cr-VI default in bread matrices |
| 2 | [[sources/gacal2023-cadmium-lead-bread-gluten-free-poland\|Gacal et al. 2023]]. *Cadmium and lead content in gluten and gluten-free bread available on Polish market – potential health risk to consumers*, Annales Academiae Medicae Silesiensis | 2023 | Peer-reviewed | Primary Cd and Pb occurrence data for Polish-market bread (n=50, ET-AAS); Cd means by type 21–72 ppb (gluten-free lowest, wheat-rye highest), Pb below LOQ in all but one wheat sample |
| 3 | [[sources/asaditouranlou2025-bread-wheat-mashhad\|Asadi Touranlou et al. 2025]]. *Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran*, PLoS ONE | 2025 | Peer-reviewed | Mashhad Iranian bread occurrence (n=270; flour-dough-bread triplets, ICP-OES); Pb and Hg below detection in all samples; Al/As/Cr/Cd/Ni exceeding WHO limits with HI driven by As; 83 percent of bread metals enter through flour |
| 4 | [[sources/kazimov2014-dietary-heavy-metals-azerbaijan\|Kazimov et al. 2014]]. *Examination and Hygienic Assessment of Health Risk Depending on Heavy Metals Content in Foods*, Kazanskiy Meditsinskiy Zhurnal | 2014 | Peer-reviewed | Azerbaijani Baku bread hazard coefficients against CIS regulatory limits (Cr 8.4, Ni 1.4); geographic context |
| 5 | [[sources/suomi2023-finland-dietary-metals-cumulative\|Suomi et al. 2023]]. *Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | Finnish FinDiet cumulative-exposure modeling identifying bread and cereal products as dominant contributor to neurotoxic and kidney-toxic cumulative metal load for adults aged 25–64; HI exceeds 1 for average consumers |
| 6 | [[sources/fera2015-uk-tds-metals\|FERA 2015]]. *UK Total Diet Study: Metals*, Food and Environment Research Agency | 2015 | Government report | UK Total Diet Study metal occurrence data covering bread and cereal products; broader UK market context |
<!-- END: hmi-source-legend -->
