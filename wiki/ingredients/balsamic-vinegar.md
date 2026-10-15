---
type: ingredient
commodity: balsamic-vinegar
title: "Balsamic Vinegar"
label: "Balsamic Vinegar"
aliases: [aceto-balsamico, traditional-balsamic-vinegar, balsamic-vinegar-of-modena]
category: condiment
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: 1500
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 30]
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
    typical_ppb: [20, 200]
    p95_ppb: 500
    confidence: low
    n_studies: 2
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
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
drivers: [aging-vessel-wood-extraction, grape-substrate, acidic-pH-leaching, traditional-multi-barrel-aging]
lower_risk_variants: ["[[ingredients/young-balsamic-vinegar-stainless-aged]]"]
higher_risk_variants: ["[[ingredients/traditional-aged-balsamic-vinegar]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Balsamic Vinegar

## Overview

Balsamic vinegar — the aged grape-must-derived condiment from the Modena and Reggio Emilia regions of Italy, made traditionally in a sequence of progressively smaller wooden barrels for 12-25 years (Aceto Balsamico Tradizionale di Modena DOP/Reggio Emilia DOP) or industrially produced from concentrated grape must and wine vinegar with optional brief aging — sits at the high end of the vinegar-category heavy-metals distribution. The traditional aging-vessel chain (a sequence of chestnut, cherry, oak, mulberry, juniper, ash barrels) is the dominant heavy-metals risk because the acidic must (pH 2.5-3.0) extracts trace metals from the wood and from previous batches' residual concentrate over decades-long aging cycles. The current corpus loads 4 sources: ESCP 2021 FDA petition (n=24 US-market balsamic vinegar samples with Pb and tAs at regulatory-concern levels, [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]), Karavoltsos 2020 Greek balsamic-vs-common-vinegar comparison (n=43, 7-metal panel, [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]), Ndungu 2004 Pb-in-vinegar analytical method (n=59, [[sources/ndungu2004-lead-vinegar-icpms-gfaas]]), Ozbek 2016 Turkish MIP-OES method (n=32, including balsamic, [[sources/ozbek2016-mip-oes-turkish-vinegars]]). The ESCP 2021 petition is the policy-anchor source: in 2021, the Environmental and Safety Compliance Project petitioned the US FDA to set a maximum lead level for balsamic vinegar after documenting elevated Pb across 24 US-market samples ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]).

## Why this commodity accumulates heavy metals

Balsamic vinegar accumulates heavy metals through two principal pathways: the grape-must substrate and the aging-vessel extraction. The substrate is concentrated grape must from Trebbiano, Lambrusco, or other Modenese grape varieties; grape-must carries grape-source Pb and Cd at modest levels driven by vineyard soil and atmospheric deposition. Concentration of the must (cooked to roughly 1/3 of its original volume) raises per-mass metal concentrations proportionally before aging begins. Aging is the dominant pathway for traditional product: the multi-wood-barrel sequence over 12-25+ years allows the acidic concentrated must to extract trace Pb, Cd, Al, and other metals from the wood, from previous-batch residual concentrate that has bonded to the barrel interior, and from any historical barrel-coating or sealing materials. The Karavoltsos 2020 Greek work found significantly higher Cu, Pb, and trace metals in balsamic versus common (white) vinegar from Greek production, with the elevation correlated with organic-matter content — the longer-aged, more concentrated, more organic-rich product carries higher metal loads ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]). The ESCP 2021 US-market sampling (n=24 balsamic vinegars from US retail) found Pb concentrations across the sample reaching levels that the petitioners argued required FDA regulatory action ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]). Industrial-imitation balsamic uses caramel and acidic concentrate rather than traditional aging; both forms can carry elevated Pb, but for different reasons (substrate-driven for industrial, aging-vessel-driven for traditional).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=4 | 50–500 | medium | [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|1]], [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|2]], [[sources/ozbek2016-mip-oes-turkish-vinegars\|3]] |
| Cd | n=2 | 1–30 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 20–200 | low | [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|1]], [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|2]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 10–200 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]] |
| Al | n=2 | 50–500 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]], [[sources/ozbek2016-mip-oes-turkish-vinegars\|2]] |
| Cr | n=2 | 10–100 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]], [[sources/ozbek2016-mip-oes-turkish-vinegars\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The ESCP 2021 US-market n=24 dataset is the largest US-side dataset and is the policy-anchor for FDA action ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]). The Karavoltsos 2020 Greek n=43 work covers both common (white) and balsamic vinegar from Greek production and provides the cleanest within-vinegar-category comparison ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]). The Ozbek 2016 Turkish n=32 multi-vinegar-type panel covers Al specifically and characterises Turkish-market product ([[sources/ozbek2016-mip-oes-turkish-vinegars]]). The Ndungu 2004 method-development work covers 59 samples with rigorous sample-preparation evaluation ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]). Variety-level pattern: traditional aged balsamic (12-25+ years in the wooden-barrel sequence, DOP-certified) carries the highest Pb and Al; modena IGP-grade (younger, partially aged) carries intermediate levels; commodity-grade balsamic (caramel and wine-vinegar based, minimal or no traditional aging) carries variable Pb depending on substrate and packaging. No grape-variety-specific pattern is documented in the loaded corpus.

## Processing effects

The grape-must concentration step (cooking to ~1/3 original volume) raises per-mass metal concentrations proportionally before aging. Aging in the traditional multi-wood-barrel sequence extracts Pb, Al, and trace metals from the wood and from previous-batch residual concentrate; the magnitude grows with aging years. The Karavoltsos 2020 work quantifies the organic-matter-correlated trace-metal accumulation in aged product. Industrial production (caramel, wine vinegar, concentrate, minimal aging in stainless tanks) eliminates the wood-extraction pathway but introduces substrate-driven Pb. Filtration before bottling does not change dissolved metals. Pasteurization does not affect metal content. The single largest brand-controlled processing-stage variable is the choice of aging vessel: stainless steel and food-grade-coated tanks do not add metals, while traditional wood-barrel aging is the canonical pathway for the elevated Pb-and-Al distribution that distinguishes balsamic from other vinegars.

## Ingredient-derivative risk

Traditional aged balsamic vinegar (DOP, 12-25 years aging) is the highest-Pb-and-Al form. Modena IGP balsamic (younger, partially aged or blended with traditional aged) carries intermediate levels. Commodity-grade balsamic (caramel-and-wine-vinegar based) carries variable levels depending on substrate. Balsamic glaze (reduced balsamic vinegar concentrated further by additional cooking) concentrates metals proportionally; per-serving exposure for balsamic glaze can be 2-3× the parent balsamic vinegar on a per-volume basis. Balsamic dressings and finished sauces inherit the balsamic vinegar's metal load at the inclusion ratio.

## Mitigation options

### Sourcing levers

For brand-buyers concerned about Pb and Al specifically, sourcing modern commodity-grade balsamic (caramel-and-wine-vinegar based, no traditional aging) over traditional aged balsamic shifts the per-serving Pb meaningfully lower. For premium-positioning where traditional aged balsamic is the brand requirement, specifying suppliers with documented aging-vessel transparency (wood-source records, prior-batch traceability) provides supply-chain context but does not eliminate the underlying wood-extraction pathway. Glass packaging at retail is the standard for premium product and does not contribute additional metals.

### Agronomic levers

For brand-controlled-substrate operations (rare in the balsamic supply chain), grape vineyard soil and water management reduce the upstream substrate metal load. Most agronomic levers live with grape growers.

### Processing levers

Stainless steel aging or food-grade-coated tank aging eliminates the wood-extraction pathway entirely; this is incompatible with traditional aged balsamic protocols but is feasible for modern commercial balsamic. Verify wood-barrel history (prior contamination, prior batches) when sourcing traditional aged product.

### Formulation levers

For finished sauces and dressings using balsamic vinegar as one ingredient, the inclusion ratio determines per-serving exposure proportionally. Substitution with red wine vinegar (lower-Pb on average per the broader vinegar literature) is the principal formulation-stage substitution lever.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Al (≤ 50 ppb), and tAs (≤ 5 ppb) is the standard intervention. The acidic pH allows direct injection without extensive sample prep. The Ndungu 2004 protocol (n=59, ICP-MS and GFAAS comparison) is a useful method reference ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]).

### Packaging and storage levers

Glass packaging is the baseline-clean option. Avoid ceramic decanters with unverified glazes for service or storage (the acid pH extracts Pb from lead-glazed ceramic at high rates). Avoid metal closures without food-grade interior coating.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set a balsamic-vinegar-specific maximum. The EU Regulation 2023/915 applies general food-category limits to balsamic vinegar; the Italian DOP/IGP geographic-indication protocols do not set heavy-metals limits as part of the GI framework. The US FDA has not set a balsamic-specific action level but received the 2021 ESCP petition for action ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]); the petition remains pending and is a current policy-monitoring item. The CFIA 2025 Canadian survey did not identify balsamic-specific exceedances of Canadian limits in the surveyed product set.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter|Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA]]<span class="hmi-ref-meta">Corrigan ZB, Braiman J, and Chittenden C · Empire State Consumer Project / Food & Water Watch — FDA Citizen Petition Letter · 2021</span><span class="hmi-ref-tag">NGO</span>
2. [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece|Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter]]<span class="hmi-ref-meta">Karavoltsos S, Sakellari A, Sinanoglou VJ, Zoumpoulakis P, Plavsic M, Dassenakis M, et al. · Molecules · 2020 · [doi.org/10.3390/molecules25040861](https://doi.org/10.3390/molecules25040861)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures]]<span class="hmi-ref-meta">Ndung'u K, Hibdon S, and Flegal AR · Talanta · 2004 · [doi.org/10.1016/j.talanta.2004.02.017](https://doi.org/10.1016/j.talanta.2004.02.017)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/ozbek2016-mip-oes-turkish-vinegars|A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry]]<span class="hmi-ref-meta">Ozbek N, Koca M, and Akman S · Food Analytical Methods · 2016 · [doi.org/10.1007/s12161-016-0421-x](https://doi.org/10.1007/s12161-016-0421-x)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|Corrigan et al. 2021]]. *Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA*, Empire State Consumer Project / Food & Water Watch — FDA Citizen Petition Letter | 2021 | NGO report | US-market balsamic vinegar Pb and tAs at regulatory-concern levels (n=24); FDA petition policy anchor |
| 2 | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|Karavoltsos et al. 2020]]. *Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter*, Molecules | 2020 | Peer-reviewed | Greek balsamic-vs-common-vinegar 7-metal panel (n=43); aging-driven metal accumulation evidence |
| 3 | [[sources/ozbek2016-mip-oes-turkish-vinegars\|Ozbek et al. 2016]]. *A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry*, Food Analytical Methods | 2016 | Peer-reviewed | Turkish-market vinegar 5-metal panel (n=32) including Al rarely measured elsewhere |
| 4 | [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|Ndung'u et al. 2004]]. *Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures*, Talanta | 2004 | Peer-reviewed | Methodological evaluation of vinegar Pb sample-preparation procedures (n=59) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 3 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 3 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e29](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e29) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69c](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69c) | 2026-08-02 | major | 3 sources added; narrative text revised |
<!-- END: hmi-page-history -->
