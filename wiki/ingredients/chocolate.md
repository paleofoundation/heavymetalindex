---
title: Chocolate
type: ingredient
commodity: chocolate
aliases: [dark chocolate, milk chocolate, chocolate liquor, chocolate bar, chocolate confection, couverture]
category: processed-confectionery
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: 380
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [60, 500]
    p95_ppb: 2200
    confidence: high
    n_studies: 15
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Ni:
    status: populated
    typical_ppb: [700, 1900]
    p95_ppb: null
    confidence: low
    n_studies: 2
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
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [30, 150]
    p95_ppb: 200
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: [cocoa-solid-fraction, cocoa-origin, formulation]
lower_risk_variants: ["[[ingredients/milk-chocolate]]", "[[ingredients/white-chocolate]]"]
higher_risk_variants: ["[[ingredients/high-cocoa-dark-chocolate]]", "[[ingredients/baking-chocolate]]", "[[ingredients/cocoa-powder-heavy-confections]]"]
used_in_products: ["[[products/chocolate-bars]]", "[[products/chocolate-confections]]", "[[products/baked-goods]]", "[[products/ice-cream]]", "[[products/chocolate-beverages]]", "[[products/nutritional-supplements]]", "[[products/chocolate-coated-snacks]]"]
audience: [regulator, educator, consumer, app]
sources: 39
wiki_doi: null
updated: 2026-05-16
---

# Chocolate

Chocolate is a processed derivative of [[ingredients/cocoa]] and inherits cadmium from its cocoa-solid fraction; cadmium content scales approximately with cocoa-solid percentage and with cocoa origin.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 1 at 15+ studies, 1 at 5-14, 2 below 5 | below pooling depth: Ni, tAs |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 10–100 | medium | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate\|3]] |
| Cd | n=15 | 60–500 | high | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/bravo2024-cadmium-cacao-arauca\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=4 | 30–150 | medium | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|1]], [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|2]], [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 700–1900 | low | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|1]], [[sources/flyvholm1984-nickel-content-food-dietary-intake\|2]] |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Chocolate carries cadmium primarily through its cocoa solids, which concentrate cadmium from the cocoa beans during processing (see [[ingredients/cocoa]] for the upstream story). Cocoa butter, the other principal cocoa-derived ingredient in chocolate, carries relatively little cadmium. As a consequence, dark chocolate (higher cocoa-solid percentage) carries more cadmium per serving than milk chocolate (lower cocoa-solid percentage, higher milk and sugar fractions), and baking or confectionery chocolate made from cocoa powder can be particularly cadmium-heavy. White chocolate, which contains cocoa butter but not cocoa solids, carries minimal cadmium from the cocoa pathway.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 of approximately 140,000 European samples reported a mean cadmium concentration in chocolate of 0.090 mg/kg, which is one-half the mean reported for cocoa (0.178 mg/kg), consistent with the dilution from milk, sugar, and cocoa butter in typical chocolate formulations. Dark-chocolate-specific values are higher; brand and origin variation is substantial and is the subject of Consumer Reports and HBBF published testing that is outside this wiki's brand-level firewall scope._

## Processing effects

_Pending. Formulation (percent cocoa solids, presence of milk, use of cocoa powder versus chocolate liquor) is the dominant processing-level driver of finished-product cadmium. Conching and tempering do not meaningfully alter cadmium content._

## Ingredient-derivative risk

A chocolate-containing ingredient list translates to cadmium exposure primarily through the cocoa-solid fraction. Apps estimating cadmium from ingredient lists should weight the chocolate contribution by approximate percent cocoa solids when that information is available on the label, and default to a representative mid-range cocoa-solid percentage (approximately 35 to 50 percent for most mass-market chocolates) when it is not.

## Mitigation options

_Pending. Upstream cocoa-sourcing decisions are the meaningful mitigation lever for chocolate manufacturers; see [[ingredients/cocoa]]._

## Abt 2018 sample-level occurrence values

[[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]] is the primary FDA U.S.-market occurrence dataset for finished chocolate products. Per-matrix means below; full ranges and stratification by percent cocoa and by Latin America versus Africa origin are in the source page. The 2020 perspective [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]] contextualizes these values within the JECFA-and-Codex regulatory landscape and the JECFA finding that cocoa-and-chocolate consumption can drive 30-69 percent of total Cd intake in high-consumer children.

| Matrix | Mean Cd ± SD (mg/kg) | Mean Pb ± SD (mg/kg) |
| --- | ---: | ---: |
| Dark chocolate | 0.27 ± 0.25 | 0.03 ± 0.02 |
| Milk chocolate | 0.06 ± 0.07 | 0.01 ± 0.01 |

The four-fold higher Cd in dark chocolate versus milk chocolate reflects the higher percent cocoa content in dark chocolate; Cd and Pb were both significantly correlated with percent cocoa across the dataset. These values count as one literature evidence primary source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; Abt 2020 is a secondary citation that does not add new primary data.

## Lead in chocolate

Chocolate inherits Pb from its cocoa-solid fraction with the four-fold dark-versus-milk gradient documented in [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Abt et al. 2018]]: dark chocolate mean 0.03 ± 0.02 mg/kg, milk chocolate mean 0.01 ± 0.01 mg/kg, across the 144-sample U.S. retail convenience-sample survey. Pb correlated significantly with percent cocoa solids, mirroring the Cd pattern. The 2020 FDA perspective ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]) frames chocolate Pb as principally anthropogenic-deposition-driven via the cocoa bean rather than added during chocolate manufacture. The U.S. FDA Pb-in-candy guidance recommends a maximum level of 0.1 mg/kg in candy including chocolate candy; finished chocolate products in the Abt 2018 dataset fall comfortably below the guidance, though high-percent-cocoa dark chocolate has been documented at or above this level in some independent third-party testing not yet in the loaded corpus.

## Nickel in chocolate

Chocolate carries Ni proportional to its cocoa-solid fraction. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports bitter (dark) chocolate at 1.9 µg/g (range 1.3 to 2.7 µg/g, n=7) and milk chocolate at 0.7 µg/g (range 0.4 to 1.2 µg/g, n=11) from the post-1969 AAS/PIXE literature. The roughly 3x gap between bitter and milk chocolate maps cleanly onto the cocoa-solid percentage difference, which is consistent with the >9 µg/g concentration in cocoa itself (Flyvholm 1984). [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] subsequently confirmed cocoa among the principal dietary Ni sources and dark chocolate inherits that load. Nickel-sensitized individuals (systemic contact dermatitis-prone, approximately 10 to 15 percent of the European adult population per EFSA) can experience flare-ups from high-cocoa dark chocolate consumption; the EFSA acute LOAEL of 4.3 µg Ni/kg b.w. for eczematous flare-up identifies chocolate-heavy consumers as one of the dietary subgroups at risk. [[sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc|Pacor et al. 2003]] documents cocoa-and-chocolate as the most consistently symptom-aggravating food category in nickel-reactive recurrent aphthous stomatitis (92.6 percent of patients).

## Aluminum in chocolate

Chocolate carries Al from a combination of cocoa-solid uptake (cacao tree root Al accumulation from tropical soils) and any processing-equipment or alkalization-step contribution. [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Elsheikh et al. 2020]] reports Al in cocoa sweets in Saudi Arabia (B-tier journal; matrix-specific Al concentrations in cocoa sweets), and biscuit brand 6 in that survey reached a remarkable 291,900 ppb total Al (outlier value that the source page flags for follow-up). Direct U.S. or EU-market chocolate Al concentration distributions are not yet loaded on the wiki. Phase 3b ingest of primary cocoa-and-chocolate Al occurrence work would firm this cell.

## Chromium in chocolate

[[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Hernandez et al. 2019]] documents that cocoa-containing finished products consistently show the highest Cr concentrations among the French food categories surveyed: chocolate-containing breakfast cereals 360 to 483 ppb total Cr; a dry chocolate biscuit averaged 103 ppb. The paper measures both total Cr and Cr-VI by speciation; whether the Cr-VI fraction in finished chocolate products is significant requires the underlying Hernandez 2019 speciation tables and additional cross-source confirmation. The total-Cr signal supports flagging chocolate as a Cr-bearing finished-product category; Cr-VI-specific speciation data for chocolate matrices is a documented data gap.

## Other metals of concern

The remaining HMI-tracked metals on chocolate (iAs, tAs, tHg, MeHg, Sn, U) do not have strong chocolate-specific occurrence evidence in the loaded corpus. Chocolate is not a primary arsenic matrix, is not canned in tin, and does not carry meaningful Hg or U at population level. These metals remain at status: pending on the contamination_profile.

## Regulatory limits that apply

- [[regulations/jecfa-cadmium-ptmi]] — JECFA 91st meeting 2022: cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg b.w./month in European children aged 7 to 11, indicating that chocolate products heavy in cocoa powder warrant particular attention for child consumers.
- [[regulations/codex-cadmium-mls]] / [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — International Cd MLs scaled by cocoa-solid percentage: chocolate less than 30 percent cocoa solids (including milk chocolate) 0.3 mg/kg; 30 to less than 50 percent 0.7 mg/kg; 50 to less than 70 percent 0.8 mg/kg; 70 percent or greater 0.9 mg/kg; cocoa powder (100 percent cocoa solids dry-matter basis) 2.0 mg/kg.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for chocolate products: 0.10 mg/kg (100 ug/kg) for milk chocolate with less than 30 percent total dry cocoa solids; 0.30 mg/kg (300 ug/kg) for chocolate with less than 50 percent total dry cocoa solids and milk chocolate with at least 30 percent total dry cocoa solids; 0.80 mg/kg (800 ug/kg) for chocolate with at least 50 percent total dry cocoa solids.
- FDA Pb in candy: recommended maximum level 0.1 mg/kg for candy including chocolate candy ([[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Abt and Robin 2020]]).
- [[sources/efsa-nickel-contam-2020|EFSA Nickel 2020]] — Chronic TDI 13 µg Ni/kg b.w./day; acute LOAEL 4.3 µg Ni/kg b.w. for eczematous flare-up in sensitized individuals. No chocolate-specific Ni ML at international level.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market|Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market]]<span class="hmi-ref-meta">Eileen Abt, Jennifer Fong Sam, Patrick Gray, and Lauren Posnick Robin · Food Additives & Contaminants: Part B Surveillance · 2018 · [doi.org/10.1080/19393210.2017.1420700](https://doi.org/10.1080/19393210.2017.1420700)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate|Perspective on Cadmium and Lead in Cocoa and Chocolate]]<span class="hmi-ref-meta">Eileen Abt and Lauren Posnick Robin · Journal of Agricultural and Food Chemistry · 2020 · [doi.org/10.1021/acs.jafc.9b08295](https://doi.org/10.1021/acs.jafc.9b08295)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/flyvholm1984-nickel-content-food-dietary-intake|Nickel Content of Food and Estimation of Dietary Intake]]<span class="hmi-ref-meta">Mari-Ann Flyvholm, Gitte Dalsgaard Nielsen, and Allan Andersen · Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 · 1984 · [doi.org/10.1007/BF01043437](https://doi.org/10.1007/BF01043437)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/efsa-nickel-contam-2020|Update of the Risk Assessment of Nickel in Food and Drinking Water]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · EFSA Journal 2020;18(11):6268 · 2020 · [doi.org/10.2903/j.efsa.2020.6268](https://doi.org/10.2903/j.efsa.2020.6268)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/pacor2003-nickel-recurrent-aphthous-stomatitis-dbpc|Results of Double-Blind Placebo-Controlled Challenge with Nickel Salts in Patients Affected by Recurrent Aphthous Stomatitis]]<span class="hmi-ref-meta">M. L. Pacor, G. Di Lorenzo, N. Martinelli, G. Lombardo, A. Di Gregoli, P. Mansueto, et al. · International Archives of Allergy and Immunology 131(4):296-300 · 2003 · [doi.org/10.1159/000072142](https://doi.org/10.1159/000072142)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi|Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES]]<span class="hmi-ref-meta">Elsheikh MA, Ali DMH, and Alotaibi SH · Asian Journal of Chemistry 32(6):1273-1278 · 2020 · [doi.org/10.14233/ajchem.2020.22499](https://doi.org/10.14233/ajchem.2020.22499)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/hernandez2019-cr-vi-cr-iii-milk-dairy-cereal-france|Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment]]<span class="hmi-ref-meta">Hernandez F, Bemrah N, Séby F, Noël L, and Guérin T · Food Additives & Contaminants Part B: Surveillance · 2019 · [doi.org/10.1080/19393210.2019.1598506](https://doi.org/10.1080/19393210.2019.1598506)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/codex-cxs-193-1995|General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)]]<span class="hmi-ref-meta">Codex Alimentarius Commission · Codex Alimentarius (Joint FAO/WHO Food Standards Programme) · 1995 · [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/anses2026-tds3-metals-france\|ANSES 2026]]. *Opinion of the French Agency for Food, Environmental and Occupational Health & Safety on the results of the Third French Total Diet Study (TDS3) - Acrylamide, aluminium, silver, cadmium, mercury and lead*, ANSES Opinion, Request No 2019-SA-0010 | 2026 | Government report | FR Al, Ag, Cd, Pb, tHg, iHg, MeHg occurrence in French TDS3 foods selected from 276 foods across 44 groups, with 718 samples collected in Loiret, Puy-de-Dome, and... (n=718) |
| 2 | [[sources/hernandez-montoya2026-heavy-metals-foods-review\|Hernández-Montoya et al. 2026]]. *Heavy Metal Contamination in Foods: Advances in Detection Technologies, Regulatory Challenges, Health Risks, and Implications for Sustainable Food Safety*, Sustainability | 2026 | Peer-reviewed | international/EU/US Pb, Cd, tAs, tHg, MeHg, Ni occurrence in Scoping review of 121 peer-reviewed studies (Scopus, Web of Science, ScienceDirect, SpringerLink, Wiley Online Library, Google Scholar; published... |
| 3 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 4 | [[sources/bravo2024-cadmium-cacao-arauca\|Bravo et al. 2024]]. *Cadmium in cacao crops and artisanal chocolates in the Arauca Department, Colombia*, Environmental Monitoring and Assessment | 2024 | Peer-reviewed | CO Cd occurrence in 180 cacao farms surveyed across four municipalities in Arauca Department, Colombia (Arauquita, Fortul, Saravena, Tame); seed subsamples from... (n=20) |
| 5 | [[sources/eu-2024-1987-nickel-maximum-levels\|EU 2024]]. *Commission Regulation (EU) 2024/1987 of 30 July 2024 amending Regulation (EU) 2023/915 as regards maximum levels of nickel in certain foodstuffs*, Official Journal of the European Union, L series, 2024/1987 (31.7.2024) | 2024 | Regulation | EU Ni concentrations |
| 6 | [[sources/eu-2024-907-nickel-monitoring-recommendation\|EU 2024]]. *Commission Recommendation (EU) 2024/907 of 22 March 2024 on the monitoring of nickel in food*, Official Journal of the European Union, L series, 2024/907 (26.3.2024) | 2024 | Regulation | EU Ni concentrations |
| 7 | [[sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | US Pb, Cd, tAs occurrence in 72 consumer cocoa-containing products (dark chocolate, cocoa powder, and related products) purchased in the US from retail and... (n=72) |
| 8 | [[sources/hands2024-multiyear-dark-chocolate-cocoa-usa\|Hands et al. 2024]]. *A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA*, Frontiers in Nutrition | 2024 | Peer-reviewed | Pb, Cd, As in 72 US dark chocolate and cocoa products across four cohorts (2014–2022), with mean Cd and Pb per serving both exceeding Prop 65 MADLs; organic products showed significantly higher Cd and Pb concentrations |
| 9 | [[sources/burgon2023-cocoa-bean-to-bar-brazil-metals-ota\|Burgon 2023]]. *Cacau e Chocolates "Bean to Bar": Contaminantes Inorgânicos e Ocratoxina A (Cocoa beans and "Bean to Bar" chocolates: Inorganic contaminants and Ochratoxin A)*, Master's thesis, Instituto de Tecnologia de Alimentos (ITAL), Centro de Ciência e Qualidade de Alimentos, Campinas-SP, Brazil | 2023 | Thesis | BR Pb, Cd, tAs, tHg, Cu, Co, Se concentrations |
| 10 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 11 | [[sources/marincich2023-cadmium-chocolate-poland\|Marincich et al. 2023]]. *Threat or treat: Exposure assessment and risk characterisation of chemical contaminants in soft drinks and chocolate bars in various Polish population age groups*, EFSA Journal | 2023 | Peer-reviewed | PL/EU Cd occurrence in Multiple chocolate bars from different brands purchased in Warsaw supermarkets, 2022–2023; two matrices: milk chocolate and bitter chocolate |
| 12 | [[sources/asyousow2022-expert-investigation-cocoa-chocolate-products\|Ahn et al. 2022]]. *Expert Investigation Related to Cocoa and Chocolate Products: Final Report*, Expert Committee report submitted to As You Sow and the Settling Defendants under a California Proposition 65 Consent Judgment; Project Manager: Eastern Research Group, Inc. (ERG). Final Report dated March 28, 2022 (381 pp., including three technical attachments). | 2022 | Industry | US-CA/US/EC Pb, Cd concentrations |
| 13 | [[sources/bfr2022-nickel-dietary-intake-germany-meal\|BfR 2022]]. *Nickel: estimate of long-term intake via food based on the BfR MEAL Study*, BfR Communication No. 033/2022 | 2022 | Government report | DE/EU Ni occurrence in 840 food pools from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II,... (n=840) |
| 14 | [[sources/blommaert2022-cd-cacao-translocation\|Blommaert et al. 2022]]. *Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms*, Frontiers in Plant Science | 2022 | Peer-reviewed | BE Cd occurrence in Greenhouse pot experiment using Theobroma cacao plants; isotope fractionation and XAS analysis of plant compartments |
| 15 | [[sources/codex-cxc-81-2022\|Codex 2022]]. *Code of Practice for the Prevention and Reduction of Cadmium Contamination in Cocoa Beans (CXC 81-2022)*, FAO and WHO, 2023. Codex Alimentarius Code of Practice No. CXC 81-2022. Joint FAO/WHO Food Standards Programme. Rome. | 2022 | Government report | International Codex supply-chain Code of Practice for preventing and reducing Cd in cocoa beans, the upstream guidance underpinning mitigation efforts for chocolate Cd |
| 16 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 17 | [[sources/gutierrez2022-ecuador-cacao-cadmium-compost\|Gutiérrez et al. 2022]]. *Cadmium fractionation in soils affected by organic matter application: Transfer of cadmium to cacao (Theobroma cacao L.) tissues*, Frontiers in Environmental Science | 2022 | Peer-reviewed | EC Cd occurrence in Four Ecuadorian cacao farms, three in Manabi and one in Guayas, with cacao pods and leaves sampled under... (n=4) |
| 18 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA 91st meeting finding that cocoa powder alone can drive 97.5th-percentile Cd exposure in European children to 12 µg/kg b.w./month, with chocolate intake scaling with cocoa-solid percentage |
| 19 | [[sources/wade2022-cacao-cadmium-drivers\|Wade et al. 2022]]. *Drivers of cadmium accumulation in Theobroma cacao L. beans: A quantitative synthesis of soil-plant relationships across the Cacao Belt*, PLOS ONE | 2022 | Peer-reviewed | EC/PE/CO Cd occurrence in 489 site-years from 31 studies across 10 cacao-producing countries; 2,127 observations compiled from systematic literature search (n=2127) |
| 20 | [[sources/amjad2021-lahore-chocolates-metals\|Amjad et al. 2021]]. *Determination of Heavy Metals in Locally Available Chocolates in Lahore Region*, Turkish Journal of Agriculture - Food Science and Technology | 2021 | Peer-reviewed | PK Pb, Ni, Cr, Cd occurrence in Thirty locally available chocolate samples collected from shops and markets in Lahore, Pakistan (n=30) |
| 21 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 22 | [[sources/abt2020-perspective-cadmium-lead-cocoa-chocolate\|Abt et al. 2020]]. *Perspective on Cadmium and Lead in Cocoa and Chocolate*, Journal of Agricultural and Food Chemistry | 2020 | Peer-reviewed | FDA perspective synthesizing Cd and Pb occurrence in cocoa and chocolate, documenting geographic origin variation (Latin America vs Africa) and confirming that Cd scales with cocoa-solid percentage and cocoa-product use in chocolate manufacture |
| 23 | [[sources/el-daouk2020-aluminum-food-lebanon\|EL et al. 2020]]. *Aluminum exposure from food in the population of Lebanon*, Toxicology Reports | 2020 | Peer-reviewed | LB Al occurrence in Ninety-seven food items collected May–September 2018 from the Beirut retail market (105 sampled; 8 discarded for turbidity), comprising... (n=97) |
| 24 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Al, Sb, As, Cd, Cr, Co, Ni, Sn, V in 291 French infant and toddler foods, with cocoa-containing breakfast cereals and chocolate-based products among the highest-Cr categories in the survey |
| 25 | [[sources/ec2019-cadmium-chocolate-leaflet\|EC 2019]]. *Cadmium in Chocolate (European Commission consumer information leaflet)*, European Commission, Directorate-General for Health and Food Safety (consumer information leaflet) | 2019 | Government guidance | EU Cd concentrations |
| 26 | [[sources/meter2019-cadmium-cacao-lac-review\|Meter et al. 2019]]. *Cadmium in Cacao from Latin America and the Caribbean: A Review of Research and Potential Mitigation Solutions*, Bioversity International / CAF Development Bank of Latin America | 2019 | Government report | Comprehensive review of Cd in LAC cacao, identifying Ecuador, Peru, Honduras, and Trinidad as consistently high-Cd origins whose beans frequently exceed EU MLs, directly affecting chocolate Cd by cocoa-origin |
| 27 | [[sources/abt2018-cadmium-lead-cocoa-chocolate-us-market\|Abt et al. 2018]]. *Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market*, Food Additives & Contaminants: Part B Surveillance | 2018 | Peer-reviewed | FDA 144-sample ICP-MS survey of Cd and Pb in US cocoa powder, cocoa nibs, dark chocolate, and milk chocolate; primary occurrence data for this page, including dark chocolate mean Cd 0.27 mg/kg and Pb 0.03 mg/kg |
| 28 | [[sources/kataoka2018-japan-chocolate-cocoa-cadmium\|Kataoka et al. 2018]]. *Surveillance of Cadmium Concentration in Chocolate and Cocoa Powder Products Distributed in Japan*, Food Hygiene and Safety Science | 2018 | Peer-reviewed | JP Cd occurrence in Retail chocolate and cocoa powder products purchased online or at supermarkets in Tokyo and surrounding areas, April 2015... (n=320) |
| 29 | [[sources/grimaldi2017-prop65-chocolate-settlement-news\|Grimaldi 2017]]. *Proposition 65 Settlement May Establish New Industry Standard for Lead and Cadmium in Chocolate*, Grimaldi Law Offices (San Francisco) — attorney commentary article | 2017 | News | US-CA Pb, Cd concentrations |
| 30 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 31 | [[sources/fsai2016-total-diet-study-ireland-2012-2014\|Food Safety Authority of 2016]]. *Report on a Total Diet Study Carried out by the Food Safety Authority of Ireland in the Period 2012–2014*, FSAI Chemical Monitoring and Surveillance Series | 2016 | Government report | IE/EU Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn occurrence in 141 food samples (1,043 sub-samples) representing the Irish diet; adults n=1,500 (NANS, age 18+, 2008–2010) and children n=594... (n=141) |
| 32 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
| 33 | [[sources/efsa-chromium-contam-2014\|EFSA 2014]]. *Scientific Opinion on the risks to public health related to the presence of chromium in food and drinking water*, EFSA Journal 2014;12(3):3595 | 2014 | Government report | EU Cr, Cr-VI occurrence in Analytical results submitted to EFSA on chromium in food (27,074) and drinking water (52,735) reported by EU Member... (n=79809) |
| 34 | [[sources/efsa2012-cadmium-dietary-exposure-europe\|EFSA 2012]]. *Cadmium dietary exposure in the European population*, EFSA Journal 2012;10(1):2551 | 2012 | Government report | EU Cd occurrence in Cadmium occurrence results in food submitted to EFSA from 22 EU Member States, 3 European Economic Area or... (n=178541) |
| 35 | [[sources/fsanz2011-23rd-australian-total-diet-study\|Zealand 2011]]. *The 23rd Australian Total Diet Study*, Food Standards Australia New Zealand | 2011 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, iHg, MeHg occurrence in Ninety-two Australian foods and beverages, including tap and bottled water, represented by 570 composite samples; each composite used... (n=570) |
| 36 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA Cd scientific opinion reporting European mean chocolate Cd of 0.090 mg/kg (vs 0.178 mg/kg for cocoa), establishing the dilution ratio between cocoa and chocolate concentrations used to relate upstream and downstream Cd levels |
| 37 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | International Codex MLs for Cd in chocolate tiered by cocoa-solid percentage (0.3 to 0.9 mg/kg) and for Cd in cocoa powder at 2.0 mg/kg, the international benchmark for finished chocolate regulation |
| 38 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Foundational Ni concentration data reporting dark (bitter) chocolate at 1.9 µg/g and milk chocolate at 0.7 µg/g, the primary Ni occurrence reference underpinning the chocolate Ni section |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 6 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
