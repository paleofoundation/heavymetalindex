---
type: ingredient
commodity: vinegar
title: "Vinegar"
label: "Vinegar"
aliases: [white-vinegar, distilled-vinegar, date-vinegar]
category: condiment
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [1, 50]
    p95_ppb: 100
    confidence: medium
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
    p95_ppb: 300
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 5]
    p95_ppb: null
    confidence: low
    n_studies: 3
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
    typical_ppb: [10, 500]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
drivers: [substrate-fruit-source, packaging-leaching, acid-pH, aging, fermentation-vessel]
lower_risk_variants: ["[[ingredients/white-vinegar]]"]
higher_risk_variants: ["[[ingredients/balsamic-vinegar]]", "[[ingredients/apple-cider-vinegar]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 13
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 10
---

# Vinegar

Vinegar — the acidified aqueous product of acetic-acid fermentation of a sugar or alcohol substrate, sold as white distilled vinegar, apple cider vinegar, balsamic vinegar, wine vinegar, malt vinegar, and rice vinegar — accumulates heavy metals through two distinct pathways: the upstream substrate (fruit or grain feedstock) and the downstream packaging-and-aging contact materials. The acidic pH (typically 2.5-3.5) makes vinegar an effective metal-leacher from any contact surface, which is why vinegar has historically been used as a test simulant in food-contact-material regulations (EU 4% acetic acid migration test). The current corpus loads 10 sources spanning Spain/Germany/UK (Acosta 1993 four-vinegar-type comparison), Greece (Karavoltsos 2020 balsamic-vs-common-vinegar trace-metal study), Turkey (Ozbek 2016 MIP-OES method development), Iran (Saei-Dehkordi 2012 commercial-market survey), China (Liu 2010 mercury method), Romania (Bora 2022 fruit-vegetable wash intervention work that also characterised vinegar baseline), Canada (CFIA 2025 targeted survey n=470), the US Environmental and Safety Compliance Project FDA petition (Pb and tAs in balsamic vinegar at levels of concern), and EFSA's 2022 buffered-vinegar food-additive safety assessment. The Environmental and Safety Compliance Project's 2021 FDA letter ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]) is the policy-anchor source documenting elevated Pb and tAs specifically in balsamic-vinegar product sold in the US market.

## Why this commodity accumulates heavy metals

Vinegar's metal profile is shaped by substrate, vessel, and aging. The substrate (apple, grape, malt grain, rice, or ethanol-from-various-feedstocks) carries the parent fruit or grain's metal load into the fermentation; apple cider vinegar inherits apple Pb and Cd, grape-derived balsamic and wine vinegars inherit grape and grape-must metal loads, malt vinegar inherits barley metals. The acetic-acid fermentation step itself does not change the metal load. The aging step (mandatory for traditional balsamic, optional for other types) is where the second pathway opens: traditional balsamic is aged in a sequence of wooden barrels (chestnut, cherry, oak, mulberry, juniper, ash) for 12 to 25+ years, and during this time the acidic must extracts trace metals from the wood, from the previous batches' residual concentrate, and from any unverified-coating barrel-construction materials. Industrial-imitation balsamic uses caramel and acidic concentrate rather than the traditional aging chain; both forms can carry elevated Pb relative to white distilled vinegar. The Karavoltsos 2020 Greek study found copper-and-trace-metal differences between common vinegars and balsamic vinegars driven by the organic-matter content of the aged product ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]). Packaging is the third pathway: glass and food-grade PET do not leach metals into vinegar; ceramic, certain metal closures, and historical lead-soldered packaging do. The Acosta 1993 four-vinegar-type comparison documented packaging-driven variance across white, red wine, sherry, and balsamic vinegar samples from Spanish, German, and UK markets ([[sources/acosta1993-cd-pb-ni-vinegar-types]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=10 | 5–200 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/efsa2022-buffered-vinegar-food-additive-safety\|2]], [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|3]] |
| Cd | n=6 | 1–50 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/efsa2022-buffered-vinegar-food-additive-safety\|2]], [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=6 | 5–100 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/efsa2022-buffered-vinegar-food-additive-safety\|2]], [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|3]] |
| tHg | n=3 | 0–5 | low | [[sources/efsa2022-buffered-vinegar-food-additive-safety\|1]], [[sources/liu2010-mercury-white-vinegar-afs\|2]] |
| Ni | n=3 | 10–200 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]], [[sources/acosta1993-cd-pb-ni-vinegar-types\|2]] |
| Al | n=2 | 10–500 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]], [[sources/ozbek2016-mip-oes-turkish-vinegars\|2]] |
| Cr | n=3 | 5–100 | low | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|1]], [[sources/ozbek2016-mip-oes-turkish-vinegars\|2]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

The corpus is concentrated on European-Mediterranean and North American vinegar markets, with the Greek balsamic-vs-common comparison (Karavoltsos 2020, n=43) and the four-country Acosta 1993 dataset providing the strongest within-type variance signal. The US-policy-anchor Environmental and Safety Compliance Project petition reported balsamic vinegar samples with Pb at concentrations of regulatory concern in 24 US-market product ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]); the petition formed the basis for proposed FDA action on the category. Canada's CFIA 2025 targeted survey (n=470 across multiple food categories including vinegar) is the largest single-jurisdiction recent dataset and confirms the general pattern of higher metal loads in aged-product (balsamic, traditional aged-vinegar) than in distilled-product ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]). The Iranian commercial-market survey (Saei-Dehkordi 2012, n=96) provides Middle East market data showing Pb-and-Cd in commercial product at the lower end of the distribution. The Turkish Ozbek 2016 method-development work (n=32) provides multi-metal data on Turkish vinegar types and contributes Al-specific values rarely measured elsewhere. The Liu 2010 Chinese white-vinegar mercury method development (n=3) provides the rare tHg-specific measurements. Variety-level pattern: white distilled vinegar sits at the lower bound across all analytes; apple cider vinegar inherits apple-source metals at modest levels; wine and sherry vinegars inherit grape-source metals at moderate levels; balsamic vinegar (particularly traditional aged balsamic) carries the highest Pb and tAs in the loaded corpus, driven by both substrate and aging-vessel pathways.

## Processing effects

The acetic-acid fermentation step does not measurably alter the metal load between the starting substrate and the unaged vinegar. Aging in wooden barrels (traditional balsamic, some artisan wine vinegars) modestly increases Pb and Al through wood-extraction over time; the Greek study quantifies organic-matter-driven trace metal accumulation in aged product ([[sources/karavoltsos2020-copper-trace-metals-vinegars-greece]]). Aging in stainless steel or food-grade-coated tanks does not add metals. Concentrating (used for industrial-imitation balsamic and for some specialty products) raises the per-mass metal load proportional to the concentration factor. Filtration before bottling does not affect dissolved metals. Pasteurization does not change the metal load. The single largest processing-driven shift is the choice of aging vessel for balsamic-type product: traditional aged balsamic in the multi-wood-barrel sequence accumulates a metal load distinguishable from young or industrial-substitute balsamic.

## Ingredient-derivative risk

White distilled vinegar (purified, no substrate-carryover, glass-bottled) is the lowest-metal-load form. Apple cider vinegar (unfiltered, raw, "with the mother") carries the apple-source metal load plus any contributions from the mother culture; filtered ACV carries slightly less. Wine vinegar inherits grape-source Pb and Cd; sherry vinegar inherits the same plus any contributions from the cask-aging chain. Balsamic vinegar is the highest-load form, with traditional aged balsamic carrying both substrate (grape must concentrate) and aging-vessel contributions; industrial-imitation balsamic varies widely depending on the manufacturing approach. Malt vinegar inherits barley metals at modest levels. Rice vinegar inherits rice-source iAs and Cd; the iAs profile depends on the rice-water origin. Flavored and infused vinegars (herb-infused, garlic-infused, fruit-infused) add the infusion-ingredient's metal load on top of the base vinegar.

## Mitigation options

### Sourcing levers

For balsamic-vinegar-buying brands, specifying compliance with the IGP (Indicazione Geografica Protetta) or DOP (Denominazione di Origine Protetta) traditional-balsamic protocols does NOT meaningfully reduce metal load because the traditional aged-vessel pathway is precisely what raises Pb and Al in those products. Sourcing transparency on aging-vessel materials and post-aging packaging is the more meaningful lever; specifying food-grade glass packaging and verified non-leaded glaze on any decorative bottle closure are intake-side specifications. For apple cider vinegar, sourcing from suppliers with documented apple-Pb screening is the upstream lever; see [[ingredients/apple]]. For wine vinegar, the upstream grape Pb and Cd profile drives the finished-product load; see [[ingredients/wine]] (where the corpus has data) or [[ingredients/grape]].

### Agronomic levers

For brand-controlled-substrate operations (a small fraction of the global vinegar trade), substrate-fruit soil amendment and screening reduce the upstream metal load. Most agronomic interventions live with the substrate-producer rather than the vinegar manufacturer.

### Processing levers

Stainless steel and food-grade-coated fermentation and aging vessels eliminate the wood-extraction pathway for non-traditional product. For traditional balsamic, the aging-vessel pathway is inherent to the product category and cannot be eliminated without re-classifying the product. Verifying the wood-source and prior-batch history of aging barrels reduces the risk of historical contamination from previous batches. Filtration before bottling does not change dissolved metals but improves clarity.

### Formulation levers

For finished sauces and dressings using vinegar as an ingredient, the inclusion ratio of vinegar in the finished product is the meaningful brand-side variable. A salad dressing with 25% vinegar inclusion carries 25% of the vinegar's metal load on a linear-mixing basis.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), and tAs (≤ 5 ppb) is the standard intervention. The Ndungu 2004 Pb-in-vinegar protocol (ICP-MS and GFAAS comparison) is a useful method reference for laboratories building vinegar-specific testing capability ([[sources/ndungu2004-lead-vinegar-icpms-gfaas]]). For balsamic vinegar specifically, the acidic pH allows direct injection without extensive sample prep, simplifying the analytical chain.

### Packaging and storage levers

Glass packaging is the baseline-clean option. PET is acceptable. Avoid ceramic decanters with unverified glazes (the acid pH of vinegar extracts Pb from lead-glazed ceramic at high rates). Avoid metal closures without food-grade interior coating; the EU EFSA buffered-vinegar safety assessment specifically noted the migration-from-packaging consideration in approving buffered-vinegar food-additive use ([[sources/efsa2022-buffered-vinegar-food-additive-safety]]).

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 does not set vinegar-specific heavy-metals maxima. The EU Regulation 2023/915 applies general food-category limits to vinegar, with no vinegar-specific maximum for Pb, Cd, or tAs. The US FDA has not set vinegar-specific action levels but received the 2021 ESCP petition for action on balsamic vinegar specifically ([[sources/escp2021-pb-as-balsamic-vinegar-fda-letter]]). Italy's IGP and DOP traditional-balsamic protocols do not set heavy-metals limits as part of the geographic-indication framework. The CFIA 2025 Canadian targeted survey ([[sources/cfia2025-toxic-metals-selected-foods-2022-23]]) found general compliance with Health Canada's vinegar-applicable limits in the surveyed product. The regulatory gap on balsamic vinegar specifically, given the documented Pb-and-tAs elevation in this product category, is the focus of ongoing US advocacy and is likely to drive an FDA action in coming years.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 13 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter|Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA]]<span class="hmi-ref-meta">Corrigan ZB, Braiman J, and Chittenden C · Empire State Consumer Project / Food & Water Watch — FDA Citizen Petition Letter · 2021</span><span class="hmi-ref-tag">NGO</span>
2. [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece|Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter]]<span class="hmi-ref-meta">Karavoltsos S, Sakellari A, Sinanoglou VJ, Zoumpoulakis P, Plavsic M, Dassenakis M, et al. · Molecules · 2020 · [doi.org/10.3390/molecules25040861](https://doi.org/10.3390/molecules25040861)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/acosta1993-cd-pb-ni-vinegar-types|Levels of Cd, Pb, and Ni in Different Types of Vinegars]]<span class="hmi-ref-meta">Acosta A, Diaz C, Hardisson A, and Gonzalez D · Bulletin of Environmental Contamination and Toxicology · 1993</span><span class="hmi-ref-tag">Review</span>
4. [[sources/cfia2025-toxic-metals-selected-foods-2022-23|Toxic metals in selected foods – April 1, 2022 to March 31, 2023: Food chemistry – Targeted surveys – Final report]]<span class="hmi-ref-meta">Canadian Food Inspection Agency · 2025 · [inspection.canada.ca](https://inspection.canada.ca/en/food-safety-industry/food-chemistry-and-microbiology/testing-reports-and-journal-articles/2022-2022-toxic-metals)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/ndungu2004-lead-vinegar-icpms-gfaas|Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures]]<span class="hmi-ref-meta">Ndung'u K, Hibdon S, and Flegal AR · Talanta · 2004 · [doi.org/10.1016/j.talanta.2004.02.017](https://doi.org/10.1016/j.talanta.2004.02.017)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/efsa2022-buffered-vinegar-food-additive-safety|Safety evaluation of buffered vinegar as a food additive]]<span class="hmi-ref-meta">EFSA Panel on Food Additives and Flavourings (FAF), Younes M, Aquilina G, Degen G, Engel KH, Fowler PJ, et al. · EFSA Journal · 2022 · [doi.org/10.2903/j.efsa.2022.7351](https://doi.org/10.2903/j.efsa.2022.7351)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/pribil2025-hot-sauce-food-safety-review\|Pribil et al. 2025]]. *Food safety considerations in hot sauce production: hazards, regulations, and industry challenges*, MOJ Food Processing & Technology | 2025 | Review | US Pb occurrence in Narrative review — no primary sampling. Metals content references Dhaneria et al. 2013 on imported hot sauces from... |
| 2 | [[sources/song2024-crvi-hplc-icpms-food-reduction\|Song et al. 2024]]. *Development of a Fast Method Using Inductively Coupled Plasma Mass Spectrometry Coupled with High-Performance Liquid Chromatography and Exploration of the Reduction Mechanism of Cr(VI) in Foods*, Toxics 12(5): 325 | 2024 | Peer-reviewed | CN Cr-VI, Cr occurrence in Seven commercially purchased food samples from a local supermarket in Nanjing, China — milk powder, rice flour, whole... (n=7) |
| 3 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | Vinegar baseline characterization within fruit-vegetable wash intervention study (n=80) |
| 4 | [[sources/efsa2022-buffered-vinegar-food-additive-safety\|EFSA 2022]]. *Safety evaluation of buffered vinegar as a food additive*, EFSA Journal | 2022 | Government report | EU EFSA buffered-vinegar food-additive safety assessment with embedded heavy-metals analysis |
| 5 | [[sources/escp2021-pb-as-balsamic-vinegar-fda-letter\|Corrigan et al. 2021]]. *Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA*, Empire State Consumer Project / Food & Water Watch — FDA Citizen Petition Letter | 2021 | NGO report | US-market balsamic-vinegar Pb and tAs at regulatory-concern levels (n=24); FDA petition policy anchor |
| 6 | [[sources/karavoltsos2020-copper-trace-metals-vinegars-greece\|Karavoltsos et al. 2020]]. *Copper Complexing Capacity and Trace Metal Content in Common and Balsamic Vinegars: Impact of Organic Matter*, Molecules | 2020 | Peer-reviewed | Greek balsamic-vs-common-vinegar 7-metal panel (n=43); aging-driven metal accumulation evidence |
| 7 | [[sources/guo2017-asian-rice-derived-products-metals\|Guo et al. 2017]]. *Trace Elements and Heavy Metals in Asian Rice-Derived Food Products*, Water, Air, & Soil Pollution | 2017 | Peer-reviewed | US/CN/VN Cr, Cu, Zn, tAs, Se, Cd, tHg, Pb occurrence in Six rice-noodle products, five rice vinegar/wine products, and five rice-snack products purchased from local oriental markets in Jackson,... (n=16) |
| 8 | [[sources/ozbek2016-mip-oes-turkish-vinegars\|Ozbek et al. 2016]]. *A Practical Method for the Determination of Al, B, Co, Cr, Cu, Fe, Mg, Mn, Pb, and Zn in Different Types of Vinegars by Microwave Induced Plasma Optical Emission Spectrometry*, Food Analytical Methods | 2016 | Peer-reviewed | Turkish vinegar 5-metal panel (n=32) including Al rarely measured elsewhere |
| 9 | [[sources/saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars\|Saei-Dehkordi et al. 2012]]. *Determination of Lead, Cadmium, Copper, and Zinc Content in Commercial Iranian Vinegars Using Stripping Chronopotentiometry*, Food Analytical Methods | 2012 | Peer-reviewed | Iranian commercial-market vinegar Pb-Cd-Cu-Zn by stripping chronopotentiometry (n=96) |
| 10 | [[sources/liu2010-mercury-white-vinegar-afs\|Liu 2010]]. *Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation atomic fluorescence spectrometry detection*, Spectrochimica Acta Part B | 2010 | Peer-reviewed | Chinese white-vinegar mercury method development (n=3); rare tHg-specific measurement |
| 11 | [[sources/ndungu2004-lead-vinegar-icpms-gfaas\|Ndung'u et al. 2004]]. *Determination of lead in vinegar by ICP-MS and GFAAS: evaluation of different sample preparation procedures*, Talanta | 2004 | Peer-reviewed | Methodological evaluation of vinegar Pb-analysis sample-preparation procedures (n=59) |
| 12 | [[sources/acosta1993-cd-pb-ni-vinegar-types\|Acosta et al. 1993]]. *Levels of Cd, Pb, and Ni in Different Types of Vinegars*, Bulletin of Environmental Contamination and Toxicology | 1993 | Peer-reviewed | Four-country (ES, DE, GB) white/red/sherry/balsamic vinegar 3-metal panel (n=52); within-type variance evidence |
| 13 | [[sources/troncoso1988-metallic-contaminants-andalusian-vinegars\|Troncoso et al. 1988]]. *Metallic contaminants in Andalusian vinegars*, Die Nahrung | 1988 | Peer-reviewed | Pb, tAs, Zn, Cu, and Fe in Andalusian white wine and sherry vinegars by direct flame AAS, the baseline Spanish vinegar metals dataset |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 3 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 3 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
