---
type: ingredient
commodity: apple-cider-vinegar
title: "Apple Cider Vinegar"
label: "Apple Cider Vinegar"
aliases: [acv, raw-apple-cider-vinegar, filtered-apple-cider-vinegar]
category: condiment
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 300
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
    typical_ppb: [5, 100]
    p95_ppb: null
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
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [5, 100]
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
drivers: [apple-substrate, mother-culture, packaging-leaching, acid-pH, fermentation-vessel]
lower_risk_variants: ["[[ingredients/filtered-apple-cider-vinegar]]"]
higher_risk_variants: ["[[ingredients/raw-unfiltered-acv-with-mother]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Apple Cider Vinegar

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=16 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | OK | 9 jurisdictions, top ES 17% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 5 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb POOLABLE, Cd POOLABLE, tAs THIN, Ni THIN, Al THIN, Cr THIN | tAs: needs 1 more study(ies); Ni: needs 1 more study(ies); Al: needs 2 more study(ies); Cr: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | OK | 3 claims checked, 3 supported; 5 citations, 0 orphan, 0 foreign | — |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | GAP | 0 rule link(s), 0 metal(s) covered | no regulations/ link in section |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, Ni, Al, Cr; pairing 0 paired, 6 single, 0 unpaired | tAs: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Al: THIN, needs 2 more study(ies); Cr: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.75, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


Apple cider vinegar (ACV) is fermented apple juice or cider acidified through a two-step microbial fermentation: yeast converts apple sugars to ethanol, then Acetobacter bacteria oxidise the ethanol to acetic acid. The finished product carries the apple substrate's heavy-metals load (see [[ingredients/apple]] for upstream context) plus any contributions from the fermentation-vessel and packaging materials. The current corpus loads 5 sources, all drawing from the broader [[ingredients/vinegar]] literature: Acosta 1993 four-country vinegar-type comparison covering apple-derived product within the broader survey ([[sources/acosta1993-cd-pb-ni-vinegar-types]]), Karavoltsos 2020 Greek balsamic-vs-common vinegar work that includes apple-derived product in the common-vinegar subset ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]), Ndungu 2004 vinegar Pb method development ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]), Ozbek 2016 Turkish vinegar 5-metal panel ([[sources/ozbek2016-mip-oes-turkish-vinegars]]), and Saei-Dehkordi 2012 Iranian commercial vinegars (n=96, [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars]]). ACV-specific data within the loaded corpus is limited; the cross-vinegar data establishes the within-category baseline that applies to ACV.

## Why this commodity accumulates heavy metals

Apple cider vinegar's metal profile follows the standard vinegar pattern (see [[ingredients/vinegar]] for the category overview) with apple-specific upstream context. The apple substrate carries soil-derived Pb and Cd from orchard agronomy; apples are generally low-Pb and low-Cd among fruits, but orchards near roadways or in historically industrial regions can carry elevated atmospheric Pb on the fruit surface and elevated Cd in the flesh. The two-step fermentation (yeast then Acetobacter) does not change the metal load between starting juice and finished vinegar. The acidic finished pH (typically 2.5-3.5) makes ACV an effective metal-leacher from any contact surface during fermentation, aging (when applied), and packaging. Raw unfiltered ACV "with the mother" (the cellulose-bacterial culture that forms during fermentation) carries the cellulose mass and any metals bound to it; filtered commercial ACV removes the mother before bottling. The Saei-Dehkordi 2012 Iranian commercial-market survey of 96 vinegars provides the largest single-jurisdiction dataset and characterises the ACV subset within the broader commercial-vinegar landscape ([[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars]]). The Acosta 1993 four-country comparison places apple-derived vinegar in the lower-end of the within-vinegar-category Pb distribution relative to wine and balsamic vinegars ([[sources/acosta1993-cd-pb-ni-vinegar-types]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=5 | 5–100 | medium | [[sources/ozbek2016-mip-oes-turkish-vinegars\|1]], [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars\|2]], [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|3]] |
| Cd | n=4 | 1–30 | medium | [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars\|1]], [[sources/acosta1993-cd-pb-ni-vinegar-types\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 5–100 | low | — |
| tHg | data gap | — | — | — |
| Ni | n=2 | 10–200 | low | [[sources/acosta1993-cd-pb-ni-vinegar-types\|1]] |
| Al | n=1 | 10–500 | low | [[sources/ozbek2016-mip-oes-turkish-vinegars\|1]] |
| Cr | n=2 | 5–100 | low | [[sources/ozbek2016-mip-oes-turkish-vinegars\|1]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The Iranian Saei-Dehkordi 2012 dataset (n=96 commercial vinegars including ACV) is the largest single-jurisdiction recent ACV-specific dataset; the work characterised commercial Iranian apple-derived vinegar Pb-Cd-Cu-Zn at retail-market levels generally compliant with applicable caps ([[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars]]). The Acosta 1993 four-country (ES, DE, GB) comparison of 52 samples across white, red wine, sherry, and balsamic vinegars established that apple-derived and other fruit-derived vinegars sit at the lower-Pb-and-Cd end of the vinegar category ([[sources/acosta1993-cd-pb-ni-vinegar-types]]). The Greek Karavoltsos 2020 common-vs-balsamic comparison covers apple-derived product within the "common vinegar" subset and finds these at much lower metal loads than the long-aged balsamic ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]). The Turkish Ozbek 2016 5-metal panel (n=32) covers Turkish-market vinegar types including ACV and contributes Al-specific data rarely measured elsewhere ([[sources/ozbek2016-mip-oes-turkish-vinegars]]). The Ndungu 2004 US-market method-development work (n=59) provides US-market Pb baseline data ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]). Variety-level pattern within ACV: raw unfiltered ACV "with the mother" carries slightly higher Pb-and-Cd than filtered ACV due to the mother-bound metals, but the difference is small. Organic versus conventional ACV does not produce meaningfully different metal profiles per the loaded literature. Origin (US, EU, Asian apple production) does not produce systematic differences within the commodity-grade product set.

## Processing effects

The apple-juicing and fermentation steps do not change the metal load between starting apple and finished vinegar. The two-step microbial fermentation (yeast and Acetobacter) is metal-neutral. Aging (when applied, typically 3-12 months for premium ACV in oak or other wood barrels) can modestly increase Pb and Al through wood-extraction; the magnitude is small relative to long-aged balsamic vinegar. Filtration removes the mother-culture cellulose mass and any metals bound to it. Pasteurization does not affect metals. The single largest processing-driven shift is the choice of fermentation vessel: stainless steel and food-grade-coated tanks do not add metals, while wood-barrel fermentation and aging contribute modestly through wood-extraction.

## Ingredient-derivative risk

Raw unfiltered ACV "with the mother" carries slightly higher Pb-and-Cd than filtered ACV but the difference is small. Filtered commercial ACV in glass packaging sits at the baseline-lowest-metal-load form for the ACV category. ACV in PET is comparable on metals. ACV concentrated for supplement-grade applications (capsules, gummies marketed for digestive or weight-management positioning) concentrates metals proportionally; supplement-grade ACV from non-audited supply chains can carry Pb at concentrations of regulatory concern. ACV-based salad dressings and finished sauces inherit the ACV's metal load at the inclusion ratio. Apple cider vinegar-honey-water beverages popular in wellness positioning carry the ACV's per-volume load at consumption ratios.

## Mitigation options

### Sourcing levers

For brand buyers, sourcing ACV from suppliers with documented apple-source agronomic screening reduces the upstream substrate metal load. Specifying stainless-steel or food-grade-coated fermentation and aging vessels eliminates the wood-extraction pathway. Single-orchard or single-supplier traceability enables supply-chain transparency that supports brand-side metal-load control.

### Agronomic levers

For brand-controlled-substrate operations (a small fraction of the global ACV trade), apple orchard soil testing and amendment reduce the upstream metal load. Most agronomic interventions live with apple producers; the apple-specific pathway is on [[ingredients/apple]].

### Processing levers

Stainless-steel or food-grade-coated fermentation vessels eliminate the wood-extraction pathway. Filtration reduces the mother-bound metal fraction modestly. Avoid extended aging in unverified wood barrels.

### Formulation levers

For finished sauces, dressings, and beverages using ACV as an ingredient, the inclusion ratio determines per-serving exposure proportionally. Substitution with white distilled vinegar (the lowest-baseline-metal vinegar type) reduces per-serving metal load.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and Ni (≤ 10 ppb) is the standard intervention. The acidic pH allows direct injection without extensive sample prep. The Ndungu 2004 protocol is a useful method reference ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]).

### Packaging and storage levers

Glass packaging is the baseline-cleanest option for retail product. PET is comparable on metals. Avoid lead-glazed ceramic decanters for serving or storage (the acid pH extracts Pb from lead-glazed ceramic at high rates). Avoid metal closures without food-grade interior coating.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set ACV-specific maxima. The EU Regulation 2023/915 applies general food-category limits to vinegar including ACV. The US FDA has not set ACV-specific action levels. The CFIA 2025 Canadian targeted survey did not identify ACV-specific exceedances of Canadian limits in the surveyed product set. The general vinegar regulatory framework (see [[ingredients/vinegar]] for the broader picture) applies to ACV without modification.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/acosta1993-cd-pb-ni-vinegar-types|Levels of Cd, Pb, and Ni in Different Types of Vinegars]]<span class="hmi-ref-meta">Acosta A, Diaz C, Hardisson A, and Gonzalez D · Bulletin of Environmental Contamination and Toxicology · 1993</span><span class="hmi-ref-tag">Review</span>
2. [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece|Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter]]<span class="hmi-ref-meta">Karavoltsos S, Sakellari A, Sinanoglou VJ, Zoumpoulakis P, Plavsic M, Dassenakis M, et al. · Molecules · 2020 · [doi.org/10.3390/molecules25040861](https://doi.org/10.3390/molecules25040861)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures]]<span class="hmi-ref-meta">Ndung'u K, Hibdon S, and Flegal AR · Talanta · 2004 · [doi.org/10.1016/j.talanta.2004.02.017](https://doi.org/10.1016/j.talanta.2004.02.017)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/ozbek2016-mip-oes-turkish-vinegars|A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry]]<span class="hmi-ref-meta">Ozbek N, Koca M, and Akman S · Food Analytical Methods · 2016 · [doi.org/10.1007/s12161-016-0421-x](https://doi.org/10.1007/s12161-016-0421-x)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars|Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripping Chronopotentiometry]]<span class="hmi-ref-meta">Saei-Dehkordi SS, Fallah AA, and Ghafari E · Food Analytical Methods · 2012 · [doi.org/10.1007/s12161-011-9303-4](https://doi.org/10.1007/s12161-011-9303-4)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|Karavoltsos et al. 2020]]. *Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter*, Molecules | 2020 | Peer-reviewed | GR tAs, Pb, Cd, Al, Cr, Ni, Cu, Fe, Mn, Zn, Co, Ba, Cs, Rb, Sr, V occurrence in 43 vinegars retailed in Greece: 20 balsamic (12 red-grape BR, 5 red-grape with honey BRH, 3 white-grape BW)... (n=43) |
| 2 | [[sources/ozbek2016-mip-oes-turkish-vinegars\|Ozbek et al. 2016]]. *A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry*, Food Analytical Methods | 2016 | Peer-reviewed | Turkish-market vinegar 5-metal panel (n=32) including ACV; Al specifically measured |
| 3 | [[sources/bassioni2012-aluminum-foil-meat-cooking-uae\|Bassioni et al. 2012]]. *Risk Assessment of Using Aluminum Foil in Food Preparation*, International Journal of Electrochemical Science | 2012 | Peer-reviewed | AE/EG Al occurrence in Six experimental cooking-solution recipes (variants on 40% minced-beef extract + tomato juice + citric acid + NaCl, with... (n=6) |
| 4 | [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars\|Saei-Dehkordi et al. 2012]]. *Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripping Chronopotentiometry*, Food Analytical Methods | 2012 | Peer-reviewed | Iranian commercial-market vinegar including ACV by stripping chronopotentiometry (n=96) |
| 5 | [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|Ndung'u et al. 2004]]. *Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures*, Talanta | 2004 | Peer-reviewed | US-market vinegar Pb method development (n=59) |
| 6 | [[sources/acosta1993-cd-pb-ni-vinegar-types\|Acosta et al. 1993]]. *Levels of Cd, Pb, and Ni in Different Types of Vinegars*, Bulletin of Environmental Contamination and Toxicology | 1993 | Peer-reviewed | Four-country (ES DE GB) within-vinegar category 3-metal panel including apple-derived (n=52) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [84e1f50c3](https://github.com/paleofoundation/heavymetalindex/commit/84e1f50c3) | 2026-05-16 | major | 5 sources added; contamination-profile values revised; 12 sections added |
<!-- END: hmi-page-history -->
