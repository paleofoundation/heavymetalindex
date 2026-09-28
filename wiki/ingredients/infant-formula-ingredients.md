---
title: Infant Formula Ingredients
type: ingredient
commodity: infant-formula-ingredients
aliases: [formula ingredients, formula powder ingredients, infant formula constituents, mineral premix, vitamin premix]
category: formulated-food-system
contamination_profile:
  Pb: { status: populated, typical_ppb: [1, 5], p95_ppb: 100, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [0, 5], p95_ppb: 15, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [0, 5], p95_ppb: 20, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [0, 3], p95_ppb: 5, confidence: low, n_studies: 5, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [10, 80], p95_ppb: 200, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [150, 1000], p95_ppb: 2700, confidence: medium, n_studies: 7, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [1, 5], p95_ppb: 10, confidence: low, n_studies: 3, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [5, 35], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [0, 50], p95_ppb: 100, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [ingredient-inputs, mineral-premix, processing-equipment, storage, packaging, powder-homogeneity]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/soy]]"]
used_in_products: ["[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-powder-soy-based]]", "[[products/infant-formula-rtf-liquid-non-soy]]", "[[products/infant-formula-rtf-liquid-soy-based]]"]
audience: [regulator, educator, consumer, app]
sources: 18
wiki_doi: null
updated: 2026-05-16
---

# Infant Formula Ingredients

## Overview

Burrell and Exley 2010 argues that aluminum in infant formula is likely contamination from formula constituents, processing equipment, storage, and packaging rather than an intentionally added ingredient. Chuchu et al. 2013 repeats the ingredient and processing concern and highlights aluminum-based packaging as a plausible contamination route. Dabeka et al. 2011 adds Canada-market format, formula-type, and packaging context for Al, Cd, and Pb in formula and infant-support liquids. Astolfi et al. 2021 adds an Italian powder-only multi-element survey in which nickel, cadmium, lead, tin, zinc, and manganese support powdered-formula evidence, while aluminum, arsenic, and chromium are retained only as detection-limit context because more than 30% of results were below LOD. Kazi et al. 2009 adds milk-based versus soy-based formula variance for Al, Cd, and Pb in imported formulae purchased in Pakistan. This page is a graph anchor for formula-input and processing-driver evidence, not a claim that a single ingredient explains all formula metal findings. [[sources/burrell2010-aluminium-in-infant-formulas]] [[sources/chuchu2013-aluminium-in-infant-formulas]] [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] [[sources/astolfi2021-italy-powdered-infant-formula-elements]] [[sources/kazi2009-toxic-elements-in-infant-formulae]]
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=7 | 1–5 | medium | — |
| Cd | n=7 | 0–5 | medium | — |
| iAs | n=2 | 0–5 | low | — |
| tAs | n=3 | 1–5 | low | — |
| tHg | n=5 | 0–3 | low | — |
| Ni | n=2 | 10–80 | low | — |
| Al | n=7 | 150–1000 | medium | — |
| Cr | n=2 | 5–35 | low | — |
| Sn | n=2 | 0–50 | low | — |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Infant formula ingredient variance is documented in the corpus at the finished-formula level rather than at individual ingredient inputs. The 10+ contributing sources cited in the Source legend below collectively establish that:

- **Base-protein ingredient class** is the largest variance axis (cow-milk vs soy vs hydrolysate). Kazi 2009 and Dabeka 2011 directly compare cow-milk and soy bases and document soy formula Al higher than cow-milk Al.
- **Carbohydrate ingredient** is a documented variance source for arsenic, with brown-rice-syrup-containing organic formulas showing 10-20× the As of non-OBRS formulas (Jackson 2012, attached at the finished-product level under [[ingredients/infant-formula-powder]]).
- **Vitamin-mineral premix** is a documented Pb pathway (Burrell 2010, Chuchu 2013 attributed Al to constituents and processing equipment).
- **Processing-water and packaging** are documented Al pathways (Burrell 2010, ATSDR 2008).

See [[ingredients/infant-formula-powder]] and [[ingredients/infant-formula-rtf-liquid]] for the format-specific synthesis combining these ingredient inputs.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/burrell2010-aluminium-in-infant-formulas|There is (still) too much aluminium in infant formulas]]<span class="hmi-ref-meta">Shelle-Ann M. Burrell and Christopher Exley · BMC Pediatrics · 2010 · [doi.org/10.1186/1471-2431-10-63](https://doi.org/10.1186/1471-2431-10-63)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/chuchu2013-aluminium-in-infant-formulas|The aluminium content of infant formulas remains too high]]<span class="hmi-ref-meta">Nancy Chuchu, Bhavini Patel, Blaise Sebastian, and Christopher Exley · BMC Pediatrics · 2013 · [doi.org/10.1186/1471-2431-13-162](https://doi.org/10.1186/1471-2431-13-162)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum|Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions]]<span class="hmi-ref-meta">Robert Dabeka, Andre Fouquet, Stephane Belisle, and Stephane Turcotte · Food Additives & Contaminants: Part A · 2011 · [doi.org/10.1080/19393210.2011.571795](https://doi.org/10.1080/19393210.2011.571795)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/astolfi2021-italy-powdered-infant-formula-elements|Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment]]<span class="hmi-ref-meta">Maria Luisa Astolfi, Daniela Marotta, Vittoria Cammalleri, Elisabetta Marconi, Arianna Antonucci, Pasquale Avino, et al. · International Journal of Environmental Research and Public Health · 2021 · [doi.org/10.3390/ijerph18105073](https://doi.org/10.3390/ijerph18105073)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/kazi2009-toxic-elements-in-infant-formulae|Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer]]<span class="hmi-ref-meta">Tasneem G. Kazi, Nusrat Jalbani, Jameel A. Baig, Hassan I. Afridi, Ghulam A. Kandhro, Mohammad B. Arain, et al. · Food and Chemical Toxicology · 2009 · [doi.org/10.1016/j.fct.2009.03.025](https://doi.org/10.1016/j.fct.2009.03.025)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Arsenic, Organic Foods, and Brown Rice Syrup]]<span class="hmi-ref-meta">Jackson BP, Taylor VF, Karagas MR, Punshon T, and Cottingham KL · Environmental Health Perspectives · 2012 · [doi.org/10.1289/ehp.1104619](https://doi.org/10.1289/ehp.1104619)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review synthesizing Pb, Cd, As, Hg in 251 infant formulas and 580 baby foods, providing broad-formula-context evidence for the metal burden attributable to formula ingredient inputs |
| 2 | [[sources/hopfner2025-infant-formula-dietary-exposure-germany\|Höpfner et al. 2025]]. *The contribution of infant formula to the food survey-based dietary exposure of nine selected elements*, Journal of Environmental Exposure Assessment | 2025 | Peer-reviewed | German TDS iAs, Cd, Cr, Pb, Ni, and tHg occurrence in powdered infant formula with formula contribution to infant and toddler dietary exposure |
| 3 | [[sources/soni2024-additives-contaminants-infant-foods-review\|Soni et al. 2024]]. *Food additives and contaminants in infant foods: a critical review of their health risk, trends and recent developments*, Food Production, Processing and Nutrition | 2024 | Peer-reviewed | US/EU/IN Al occurrence in Narrative review of food additives and contaminants in infant foods; no original measurements. Synthesizes EFSA opinions, US FDA... |
| 4 | [[sources/amarh2023-ghana-infant-food-heavy-metals\|Amarh et al. 2023]]. *Health risk assessment of some selected heavy metals in infant food sold in Wa, Ghana*, Heliyon | 2023 | Peer-reviewed | GH tAs, Cd, Cr, tHg, Mn, Ni, Pb, Sb occurrence in Locally and internationally produced infant formula and baby-food samples sold in Wa, Ghana (n=22) |
| 5 | [[sources/astolfi2021-italy-powdered-infant-formula-elements\|Astolfi et al. 2021]]. *Determination of 40 Elements in Powdered Infant Formulas and Related Risk Assessment*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | 40-element survey of 22 Italian powdered infant formula samples, providing Al, Cd, Pb, Ni, Sn, Cr, and As occurrence data with risk assessment and discussion of ingredient inputs and processing as contamination routes |
| 6 | [[sources/lodhi2021-methyl-inorganic-mercury-infant-formula\|Lodhi et al. 2021]]. *Evaluation of the Methyl and Inorganic Mercury in Infant Formula Milk and Cereals Samples: Estimated Risk Assessment in Children under 2.0 Years*, ACS Food Science & Technology | 2021 | Peer-reviewed | PK tHg, MeHg occurrence in 20 infant formula milk samples (starting, follow-on, grown-up) and 10 baby cereal samples purchased in Hyderabad, Pakistan (n=30) |
| 7 | [[sources/pacquette2016-icp-ms-as-cd-hg-pb-infant-formula-validation\|Pacquette et al. 2016]]. *Simultaneous Determination of Arsenic, Cadmium, Mercury, and Lead in Raw Ingredients, Nutritional Products, and Infant Formula by Inductively Coupled Plasma Mass Spectrometry: Single-Laboratory Validation*, Journal of AOAC International, Vol. 99, No. 3, pp. 766-779 | 2016 | Peer-reviewed | Single-laboratory ICP-MS method validation for As, Cd, Hg, Pb in raw formula ingredients (acid casein, maltodextrin, skim milk powder) and finished infant formula, establishing the analytical basis for ingredient-level heavy metal compliance testing |
| 8 | [[sources/chuchu2013-aluminium-in-infant-formulas\|Chuchu et al. 2013]]. *The aluminium content of infant formulas remains too high*, BMC Pediatrics | 2013 | Peer-reviewed | Al in 30 UK infant formulas attributing high concentrations to formula constituents, processing equipment, and aluminum-based packaging as contamination routes |
| 9 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 10 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 11 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum\|Dabeka et al. 2011]]. *Lead, cadmium and aluminum in Canadian infant formulae, oral electrolytes and glucose solutions*, Food Additives & Contaminants: Part A | 2011 | Peer-reviewed | Pb, Cd, Al in Canadian infant formulas across powder, concentrated liquid, and RTF formats, providing format-level and type-level context for ingredient-input variance |
| 12 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
| 13 | [[sources/burrell2010-aluminium-in-infant-formulas\|Burrell et al. 2010]]. *There is (still) too much aluminium in infant formulas*, BMC Pediatrics | 2010 | Peer-reviewed | Al in UK infant formulas arguing that formula constituent ingredients, processing equipment, and aluminum-based packaging are the primary Al contamination routes rather than intentionally added components |
| 14 | [[sources/kazi2009-toxic-elements-in-infant-formulae\|Kazi et al. 2009]]. *Determination of toxic elements in infant formulae by using electrothermal atomic absorption spectrometer*, Food and Chemical Toxicology | 2009 | Peer-reviewed | Al, Cd, Pb in 17 milk-based and soy-based infant formulas purchased in Pakistan, documenting higher means in soy-based than milk-based products across all three metals |
| 15 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR MRL of 1 mg Al/kg/day for chronic oral Al exposure, with infant formula ingredients identified as a relevant Al exposure source for non-breastfed infants |
| 16 | [[sources/efsa-aluminium-afc-2008\|EFSA 2008]]. *Safety of Aluminium from Dietary Intake*, The EFSA Journal 2008;754:1-34 | 2008 | Government report | EFSA TWI of 1 mg Al/kg b.w./week with infants on certain formulas explicitly identified as a population at risk of exceeding the TWI from Al in formula ingredient inputs |
| 17 | [[sources/cot2003-infant-food-metals\|Committee on Toxicity of 2003]]. *COT statement on a survey of metals in infant food*, Committee on Toxicity statement | 2003 | Government report | GB Al, Sb, tAs, Cd, Cr, Cu, Pb, tHg, Ni, Se, Sn, Zn occurrence in Commercial UK baby foods and formulae, including infant formulae, manufactured baby foods, desserts, rusks, and infant drinks, surveyed... (n=189) |
| 18 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd, Pb, Hg, and iAs in food matrices including infant formula, the international regulatory floor applicable to formula ingredient-level screening programs |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

This page is the ingredient-input aggregator for infant formula. Each input ingredient (cow milk, soy protein isolate, lactose, vegetable oils, vitamin-mineral premix, carbohydrate source such as corn syrup solids or brown rice syrup, fortifying iron) carries its own heavy-metal profile inherited from its upstream agricultural or industrial source. The infant formula manufacturer combines these inputs at recipe-specified ratios; the finished formula carries the weighted sum of input metals plus contributions from processing water and packaging contact.

See [[ingredients/soy]] for soybean-source Al/Ni/Cd analysis, [[ingredients/cocoa]] for cocoa-flavoring Cd analysis, [[ingredients/rice]] for brown-rice-syrup iAs concerns, [[ingredients/milk-and-dairy]] for dairy-protein-source trace-metal context, and per-grain ingredient pages.

## Processing effects

Ingredient-stage processing (drying, refining, fortification, packaging) at the supplier level does not change source-ingredient metal load meaningfully. Mineral-fortification processes that involve high-purity inputs (food-grade ascorbic acid, food-grade iron compound) have specification-controlled trace-metal contributions. Lower-grade fortifying mineral sources are a documented contamination pathway.

Brown rice syrup, used as a carbohydrate source in some organic infant formulas, retains a substantial fraction of the source-rice iAs because the syrup is produced by enzymatically converting rice starches to syrup without removing the inorganic arsenic in the source rice (per [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson 2012]] at the finished-formula level).

## Ingredient-derivative risk

The downstream derivatives are the various finished formula formats (powder, RTF liquid, concentrated liquid) at [[ingredients/infant-formula-powder]], [[ingredients/infant-formula-rtf-liquid]], and [[ingredients/infant-formula-concentrated-liquid]].

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) at the ingredient-supplier stage: specification of each input ingredient for Pb, Cd, As, Hg, Al, Ni, Cr, Sn against the finished-formula regulatory cap divided by recipe fraction. Documented avoidance of brown-rice-syrup for organic-labeled formulas. Premix-supplier verification.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the upstream ingredient-production stages.

**Processing levers** ([[mitigation/processing]]) at the formula-manufacturer stage: water-source specification, processing-equipment food-grade specification.

**Formulation levers** ([[mitigation/formulation]]) include base-protein-class choice (cow-milk vs soy vs hydrolysate vs amino-acid) and carbohydrate-source choice (avoiding brown rice syrup as iAs source).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include ingredient-level Pb/Cd/As/Hg testing at incoming, alongside finished-formula lot-release testing. See [[testing/icp-ms]] and [[testing/arsenic-speciation]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) operate at the finished-formula stage.

## Regulatory limits that apply

The applicable regulatory framework is the finished-formula framework at [[ingredients/infant-formula-powder]] and [[ingredients/infant-formula-rtf-liquid]]: [[regulations/eu-2023-915|EU Reg. 2023/915]] binding MLs for Pb, Cd, iAs, Hg in infant formula; FDA Closer to Zero action levels; [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] international Codex framework; California Prop 65 MADL serving-based screen for California-sold formulas. Ingredient-level supplier specifications align with finished-formula MLs through per-input testing programs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 6 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
