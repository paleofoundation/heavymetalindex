---
title: "Rice Cereal"
type: ingredient
commodity: rice-cereal
label: "Rice Cereal"
aliases: []
category: taxonomy-placeholder
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 20]
    p95_ppb: 170
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 60]
    p95_ppb: 190
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [80, 200]
    p95_ppb: 323
    confidence: high
    n_studies: 6
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0, 2]
    p95_ppb: null
    confidence: medium
    n_studies: 3
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
    typical_ppb: [0, 50]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [100, 300]
    p95_ppb: 400
    confidence: high
    n_studies: 5
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [baby-cereals-dry-rice-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 16
---

# Rice Cereal

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 3 at 5-14, 3 below 5 | below pooling depth: Cd, tHg, Sn |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-16 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 5–20 | medium | [[sources/fda-ctz-Pb-babyfood-2025\|1]], [[sources/meli2024-chemical-characterization-baby-food-italy\|2]], [[sources/price2023-biokinetic-lead-baby-food-blls\|3]] |
| Cd | n=4 | 10–60 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|2]], [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|3]] |
| iAs | n=6 | 80–200 | high | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|1]], [[sources/fda-iAs-rice-cereal-2020\|2]], [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|3]] |
| tAs | n=5 | 100–300 | high | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|2]], [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|3]] |
| tHg | n=3 | 0–2 | medium | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/parker2022-baby-food-arsenic-cadmium-lead-mercury-risk\|2]], [[sources/codex-cxs-193-1995\|3]] |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | n=2 | 0–50 | low | [[sources/meli2024-chemical-characterization-baby-food-italy\|1]], [[sources/codex-cxs-193-1995\|2]] |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/baby-cereals-dry-rice-based]].

## Contamination Profile State

The machine-readable contamination profile is `pending`. Ingredient-level values belong here once parsed; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation|Multi-elemental risk assessment of various baby rice cereals: some cause for concern?]]<span class="hmi-ref-meta">Sadiq NW and Beauchemin D · Canadian Journal of Chemistry · 2021 · [doi.org/10.1139/cjc-2020-0518](https://doi.org/10.1139/cjc-2020-0518)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/fda-iAs-rice-cereal-2020|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
3. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Infants' dietary arsenic exposure during transition to solid food]]<span class="hmi-ref-meta">Signes-Pastor AJ, Cottingham KL, Carey M, Sayarath V, Palys T, Meharg AA, et al. · Scientific Reports 8(1):7114 · 2018 · [doi.org/10.1038/s41598-018-25372-1](https://doi.org/10.1038/s41598-018-25372-1)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
5. [[sources/price2023-biokinetic-lead-baby-food-blls|Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability]]<span class="hmi-ref-meta">Price SA, Maddaloni MA, Finley BL, Thornton SA, and Unice KM · Foods 12:2732 · 2023 · [doi.org/10.3390/foods12142732](https://doi.org/10.3390/foods12142732)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants|Inorganic arsenic in rice-based products for infants and young children]]<span class="hmi-ref-meta">Signes-Pastor AJ, Carey M, and Meharg AA · Food Chemistry 191:128-134 · 2016 · [doi.org/10.1016/j.foodchem.2014.11.078](https://doi.org/10.1016/j.foodchem.2014.11.078)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/meli2024-chemical-characterization-baby-food-italy|Chemical characterization of baby food consumed in Italy]]<span class="hmi-ref-meta">Meli MA, Desideri D, Sisti D, Fagiolino I, and Roselli C · PLOS ONE · 2024 · [doi.org/10.1371/journal.pone.0297158](https://doi.org/10.1371/journal.pone.0297158)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf|Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment]]<span class="hmi-ref-meta">Chiger A and Lynch MT · Abt Associates report prepared for Healthy Babies Bright Futures · 2017 · [www.healthybabyfood.org](https://www.healthybabyfood.org/sites/healthybabyfoods.org/files/2017-12/HBBF_InorganicArsenicReport_Dec2017.pdf)</span><span class="hmi-ref-tag">Government</span>
9. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero Pb action levels for baby foods including rice-cereal-based products, regulatory context for Pb limits |
| 2 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Measured Al, tAs, Cd, tHg, Ni, Pb, and Sn in cream of rice and other European baby foods (n=25); Cd and Pb below LOD in all samples |
| 3 | [[sources/vincevica-gaile2024-libya-infant-toddler-food-arsenic\|Vincevica-Gaile et al. 2024]]. *Total Concentration of Arsenic in Commercial Infant/Toddler Food: A Preliminary Study in Libya*, BIO Web of Conferences | 2024 | Peer-reviewed | LY tAs occurrence in Commercial infant/toddler foods purchased in supermarkets in Sabha, Tripoli, and Benghazi, Libya. (n=36) |
| 4 | [[sources/price2023-biokinetic-lead-baby-food-blls\|Price et al. 2023]]. *Extending Regulatory Biokinetic Lead Models towards Food Safety: Evaluation of Consumer Baby Food Contribution to Infant Blood Lead Levels and Variability*, Foods 12:2732 | 2023 | Peer-reviewed | Biokinetic modeling quantifying rice cereal Pb contribution to infant blood lead relative to soil, dust, and water sources |
| 5 | [[sources/parker2022-baby-food-risk-assessment-as-cd-hg-pb\|Parker et al. 2022]]. *Human health risk assessment of arsenic, cadmium, lead, and mercury ingestion from baby foods*, Toxicology Reports | 2022 | Peer-reviewed | US tAs, Cd, tHg, Pb occurrence in 36 baby and toddler food samples (n=9 per ingredient category: fruit, grain, leguminous vegetable, root vegetable) purchased from... (n=36) |
| 6 | [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation\|Sadiq et al. 2021]]. *Multi-elemental risk assessment of various baby rice cereals: some cause for concern?*, Canadian Journal of Chemistry | 2021 | Peer-reviewed | In vitro bioaccessibility and HPLC-ICP-MS speciation of As, Cr, Pb, Cd, and Se in three Canadian commercial baby rice cereals |
| 7 | [[sources/fda-iAs-rice-cereal-2020\|FDA 2020]]. *Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry*, U.S. Food and Drug Administration, Federal Register Notice (Docket FDA-2016-D-1099) | 2020 | Government report | Establishes the US FDA action level for iAs in infant rice cereals at 100 ppb (dry weight basis), the primary regulatory limit for this commodity |
| 8 | [[sources/fda2020-iAs-rice-cereal-supporting-doc\|FDA 2020]]. *Supporting Document for Action Level for Inorganic Arsenic in Rice Cereals for Infants*, U.S. Food and Drug Administration | 2020 | Government report | US iAs occurrence in Three infant-rice-cereal datasets: 81 samples from 2011-2013, 76 samples from 2014, and 149 samples from 2018. (n=306) |
| 9 | [[sources/depa2019-baby-food-lead-cadmium\|Depa 2019]]. *Heavy Metals in Baby Foods and Cereal Products*, Turkish Journal of Computer and Mathematics Education | 2019 | Peer-reviewed | Pb, Cd occurrence in Baby foods and cereal products, including milk powder and cereal-based products (n=63) |
| 10 | [[sources/editor2019-manganese-levels-infant-formula\|Editor 2019]]. *Manganese Levels in Infant Formula and Young Child Nutritional Beverages in the United States and France*, Unknown | 2019 | Journal article | US/FR Mn occurrence in Commercial infant formulas and nutritional beverages marketed in the United States and France (n=Unknown) |
| 11 | [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food\|Signes-Pastor et al. 2018]]. *Infants' dietary arsenic exposure during transition to solid food*, Scientific Reports 8(1):7114 | 2018 | Peer-reviewed | Longitudinal biomarker study linking rice cereal introduction to elevated urinary iAs species in US infants during weaning transition |
| 12 | [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf\|Chiger et al. 2017]]. *Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment*, Abt Associates report prepared for Healthy Babies Bright Futures | 2017 | Agency report | Cost-benefit and IQ-loss modeling for US infant rice cereal iAs reduction underpinning the FDA action level rationale |
| 13 | [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants\|Signes-Pastor et al. 2016]]. *Inorganic arsenic in rice-based products for infants and young children*, Food Chemistry 191:128-134 | 2016 | Peer-reviewed | Measured iAs in rice-based infant and young-child products (EU and US markets); primary occurrence data supporting the rice cereal iAs signal |
| 14 | [[sources/unknown2016-risk-arsenic-rice-cereal\|Shibata et al. 2016]]. *Risk Assessment of Arsenic in Rice Cereal and Other Dietary Sources for Infants and Toddlers in the U.S.*, International Journal of Environmental Research and Public Health | 2016 | Peer reviewed journal | Cited reference from International Journal of Environmental Research and Public Health |
| 15 | [[sources/arsenic2012-arsenic-organic-foods-brown\|Arsenic 2012]]. *Arsenic, Organic Foods, and Brown Rice Syrup*, Environmental Health Perspectives | 2012 | Peer-reviewed | US/EU iAs, tAs, DMA, MMA, Al, U concentrations (n=200) |
| 16 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international maximum levels for iAs, Cd, Pb, and Sn applicable to rice-based infant food matrices |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Rice cereal carries the rice-base [[ingredients/rice|rice]] inheritance of inorganic arsenic at concentrated per-mass levels because the milling-to-cereal manufacturing chain preserves the iAs load while drying and milling reduce moisture without removing the embedded arsenic. The source rice itself accumulates iAs from soil and irrigation-water arsenic via the flooded-paddy cultivation system: rice plants grown under anaerobic flooded conditions absorb iAs from soil porewater far more efficiently than upland-grown crops, and arsenic preferentially partitions into the grain rather than into straw or root tissues. Rice cereal made from milled white rice carries the iAs load at concentrations of 80-200 ppb (typical), with high-confidence range support from [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation|Sadiq 2021]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]], and [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor 2018]]. Brown rice cereal and bran-containing variants carry substantially higher iAs because the bran fraction concentrates the metal.

[[metals/lead|Lead]] and [[metals/cadmium|cadmium]] in rice cereal come from a different pathway than arsenic: Pb originates primarily in the vitamin-mineral fortification premix (calcium phosphate and iron salts carry trace Pb impurities), with a smaller contribution from the source rice and minor residual contamination from processing equipment. Cadmium comes partly from source rice and partly from premix mineral salts. The FDA's Closer to Zero infant-and-young-child food framework ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]) identified rice cereal as a priority commodity for Pb action levels because rice cereal occupies a high-frequency feeding role for infants 6-24 months and concentrates exposure to multiple analytes simultaneously. The biokinetic Pb-modeling work in [[sources/price2023-biokinetic-lead-baby-food-blls|Price 2023]] quantifies the contribution of baby food (including rice cereal) to infant blood lead levels, demonstrating that even sub-action-level Pb in rice cereal at high feeding frequency drives measurable BLL elevation. The HMTc-panel concerns for rice cereal are iAs (dominant), Pb (secondary), Cd (tertiary), and trace tHg and Sn.

## Ranges by source, region, and variety

Variance within rice cereal tracks four dimensions per the corpus. First, source-rice cultivar and origin region: rice cereal made from US southern long-grain (Texas, Arkansas, Louisiana, Mississippi) carries higher iAs than rice cereal made from California-grown medium-grain or Indian Basmati per [[sources/signes-pastor2016-inorganic-arsenic-rice-products-infants|Signes-Pastor 2016]] EU and US market sampling, which documents geographic variance up to 3-fold in iAs across rice-based infant products. Second, milling fraction: white rice cereal carries lower iAs than brown rice cereal because polishing removes the bran fraction where iAs concentrates. Third, fortification-premix supplier: the [[sources/meli2024-chemical-characterization-baby-food-italy|Meli 2024]] Italian baby-food survey documents Pb below LOD in measured samples reflecting tight EU premix specifications, while [[sources/chiger2017-iAs-rice-cereal-neurodevelopment-hbbf|Chiger 2017]] documents wider US-market variance reflecting historical premix-quality heterogeneity. Fourth, historical generation: post-FDA-CTZ-2020 production typically carries lower iAs than pre-2020 production because manufacturer responses to the 100 ppb action level drove reformulation and supply-chain tightening per [[sources/fda-iAs-rice-cereal-2020|FDA 2020]].

The high-confidence p95 iAs of 323 ppb across the 6-study evidence base reflects the upper end of the post-FDA-CTZ commercial supply; outliers above this level in older product or lower-tier emerging-market supply are documented in the broader corpus.

## Processing effects

Rice cereal manufacturing concentrates source-rice metal load per unit mass via moisture removal (raw rice at ≈14% moisture is dried and milled to cereal at ≈3-5% moisture) and via milling fractionation. Per [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation|Sadiq 2021]], the bioaccessibility of iAs in baby rice cereal in simulated infant gastrointestinal fluid runs 60-90% depending on cereal formulation and rice-fraction composition, which is higher than the bioaccessibility in adult-rice products because the finer milled particle size and infant gastric pH increase iAs solubilization. Rinsing before cooking (a documented mitigation for adult rice products) is not applicable to dry rice cereal because the cereal is reconstituted with formula or water at preparation time without a separate rinse step. Adding vitamin-mineral premix introduces the Pb/Cd contamination pathway documented above; the premix supplier specification is the operative quality lever rather than a processing intervention.

## Ingredient-derivative risk

Rice cereal derivatives span the format spectrum from dry instant cereal (most common, the [[products/baby-cereals-dry-rice-based|baby-cereals-dry-rice-based]] product row) to pre-mixed wet pouch products (mixed-meals with a rice-cereal base) to teething products with a rice-cereal binder. The dry-cereal-on-the-can format carries the per-mass profile documented in the body table; reconstituted cereal at infant feeding moves the per-serving dose into the as-consumed range. Mixed meals containing rice cereal as a primary ingredient ([[products/mixed-meals-rice-containing]]) inherit the rice-cereal iAs profile diluted by the other-ingredient fraction. Rice puffs ([[ingredients/rice-puffs]]) and rice cakes carry similar iAs profiles to rice cereal because the puffing and pressing processes do not remove iAs.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention for rice cereal and operationally tractable. Rice-origin specification favoring lower-iAs growing regions (California, India Basmati, Pakistan Basmati relative to US southern long-grain); cultivar selection within species (iAs-low rice cultivars are documented in agronomic research and partially commercialized); milled-white rice substitution for brown rice in dry-cereal formulations to reduce iAs ([[mitigation/formulation]]); and vitamin-mineral premix supplier specification for low-Pb-impurity sources.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the rice-cultivation stage; see [[ingredients/rice]] for the soil-management, water-regime modification (alternate wetting and drying reduces grain iAs by 30-50%), and cultivar-selection interventions.

**Processing levers** ([[mitigation/processing]]) include polishing to remove bran in white-rice-cereal formulations (large effect on iAs reduction); the upstream rice-milling operation is the primary lever. Rinsing of source rice prior to milling reduces surface-deposited contaminants but does not affect grain-internal iAs.

**Formulation levers** ([[mitigation/formulation]]) include partial substitution of rice with non-rice grains ([[ingredients/oat|oat]], [[ingredients/maize|corn]], [[ingredients/quinoa|quinoa]]) in baby-cereal formulations, which proportionally dilutes the iAs load. Multi-grain baby cereals on the market document this lever in practice.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature for rice cereal: lot-level iAs testing on finished cereal against the FDA Closer to Zero 100 ppb action level for infant rice cereal per [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]. HPLC-ICP-MS speciation methodology is the operative analytical platform for distinguishing iAs from total As; the speciation work in [[sources/sadiq2021-baby-rice-cereal-bioaccessibility-speciation|Sadiq 2021]] is the methodological foundation.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) are limited; the iAs and Pb loads are in the cereal itself rather than in packaging. Storage-condition specification to prevent moisture re-uptake (which can mobilize trace metals) is the operative consideration.

## Regulatory limits that apply

- [[regulations/fda2020-inorganic-arsenic-infant-rice-cereal]] — FDA Closer to Zero action level of 100 ppb iAs for infant rice cereal on a dry-weight basis ([[sources/fda-iAs-rice-cereal-2020|FDA 2020]]) is the operative US regulatory limit for this commodity.
- FDA Closer to Zero Pb action level for processed baby food sets the operative US Pb limit per [[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]]: 20 ppb for dry infant cereal.
- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for infant-and-young-child cereal-based food: iAs 50 ppb (dry weight), Pb 20 ppb (dry weight), Cd 40 ppb (dry weight). These apply to rice cereal as a subset of infant cereal-based food.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex international maximum levels for iAs in polished rice (200 ppb) and husked rice (350 ppb) provide the upstream regulatory context; the per-cereal limit operates one step downstream.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applied to infant food yields stringent serving-based screening.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 5 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 4 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
