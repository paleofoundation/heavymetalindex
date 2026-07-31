---
type: ingredient
commodity: tomato-paste
title: "Tomato Paste"
label: "Tomato Paste"
aliases: []
category: vegetable-fruit
contamination_profile:
  Pb: { status: populated, typical_ppb: [5, 15], p95_ppb: 75, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  Cd: { status: populated, typical_ppb: [30, 70], p95_ppb: 280, confidence: low, n_studies: 2, last_reviewed: 2026-05-16 }
  iAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tAs: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  tHg: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Ni: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Al: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Cr: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  Sn: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
  U: { status: populated, typical_ppb: [null, null], p95_ppb: null, confidence: null, n_studies: 0, last_reviewed: 2026-05-16 }
drivers: [soil-uptake, geography, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 7
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 2
---

# Tomato Paste

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | GAP | 2/10 HMTc analytes, total n=4 | only 2/10 analytes have evidence |
| D2 Regional coverage | OK | 8 jurisdictions, top RO 29% | — |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 3 drivers, 0 upstream source(s) | no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 13 claims checked, 13 supported; 7 citations, 0 orphan, 5 foreign | 5 foreign citation(s) not naming tomato-paste: salem2024-tomato-remediated-soil-egypt, trandafir2012-tin-canned-foods-icp-ms, tarigan2016-factors-tin-released-canned-beverages |
| D9 Mitigation | OK | 1 cited lever(s), 6 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 2 rule link(s), 0 metal(s) covered | unmapped analytes: Pb, Cd |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd; pairing 0 paired, 2 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 0.67, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.50, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


Source-grounded narrative on this page is populated incrementally from the routed source pages per CLAUDE.md Part 9; values for analytes marked as data gap below have not yet accumulated 2+ A-tier contributing sources.
## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 5–15 | low | — |
| Cd | n=2 | 30–70 | low | — |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | data gap | — | — | — |
| Ni | data gap | — | — | — |
| Al | data gap | — | — | — |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

<!-- BEGIN: hmi-page-references -->
## References

The 7 works cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Grochowska-Niedworok E, Nieć J, and Baranowska R (2020). *Assessment of cadmium and lead content in tomatoes and tomato products*. Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene). [https://doi.org/10.32394/rpzh.2020.0126](https://doi.org/10.32394/rpzh.2020.0126). Peer-reviewed, A-tier. [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Source record]]
2. David I, Ştefănuţ Mariana Nela, Balcu I, and Berbentea F (2008). *The heavy metals analyses in canned tomato paste*. Journal of Agroalimentary Processes and Technologies. Peer-reviewed, B-tier. [[sources/david2008-heavy-metals-canned-tomato-paste-romania|Source record]]
3. Salem SH, Saber M, Gadow S, Kabary H, and Zaghloul A (2024). *Influence of the use of remediated soil and agricultural drainage water on the safety of tomato fruits*. Environmental Science and Pollution Research. [https://doi.org/10.1007/s11356-024-33187-z](https://doi.org/10.1007/s11356-024-33187-z). Peer-reviewed, A-tier. [[sources/salem2024-tomato-remediated-soil-egypt|Source record]]
4. Trandafir I, Nour V, and Ionica ME (2012). *Determination of Tin in Canned Foods by Inductively Coupled Plasma-Mass Spectrometry*. Polish Journal of Environmental Studies. [www.pjoes.com](https://www.pjoes.com/Determination-of-Tin-in-Canned-Foods-by-Inductively-Coupled-Plasma-Mass,88530,0,2.html). Peer-reviewed, B-tier. [[sources/trandafir2012-tin-canned-foods-icp-ms|Source record]]
5. Rida Evalina Tarigan, Jansen Silalahi, and Muchlisyam (2016). *Factors are Affecting Tin Released in Canned Beverages*. International Journal of PharmTech Research, Vol. 9, No. 5, pp. 330-333. [sphinxsai.com](https://sphinxsai.com/2016/ph_vol9_no5/3/(330-333)V9N5PT.pdf). Peer-reviewed, B-tier. [[sources/tarigan2016-factors-tin-released-canned-beverages|Source record]]
6. Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. (2019). *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*. Journal of Food Composition and Analysis. [https://doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002). Peer-reviewed, A-tier. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Source record]]
7. Codex Alimentarius Commission (1995). *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*. Codex Alimentarius (Joint FAO/WHO Food Standards Programme). [www.fao.org](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS+193-1995/CXS_193e.pdf). Government report, A-tier. [[sources/codex-cxs-193-1995|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/belabid2025-canned-tomato-pineapple-trace-elements\|Chahinez et al. 2025]]. *Evaluation of trace element contents in canned tomato paste and canned pineapple marketed in Algeria*, Research Square preprint | 2025 | Preprint | DZ Fe, Zn, Cu, Cd, Pb occurrence in Canned tomato paste and canned pineapple marketed in Algiers, Algeria (n=52) |
| 2 | [[sources/shavalig2025-canned-tomato-olives-pickles-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled*, Scientific Reports | 2025 | Peer-reviewed | IR Cd, Cu, tAs, Fe, Pb, Sn, Zn, tHg occurrence in 49 canned samples (tomato paste, olives, pickled cucumbers) from five popular brands in Tehran, Iran (n=49) |
| 3 | [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland\|Grochowska-Niedworok et al. 2020]]. *Assessment of cadmium and lead content in tomatoes and tomato products*, Roczniki Państwowego Zakładu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | PL/EU Pb, Cd occurrence in Fresh and processed tomato products purchased in Polish retail and local markets; variety includes conventional, organic, multiple varieties,... (n=25) |
| 4 | [[sources/uroko2020-ubani-canned-tomato-paste-metals\|Uroko et al. 2020]]. *Quantification of Heavy Metals in Canned Tomato Paste Sold in Ubani-Umuahia, Nigeria*, Journal of Bio-Science | 2020 | Peer-reviewed | NG Pb, Ni, Cu, Co, Fe, Cr, Cd, Mn, Zn occurrence in Ten coded canned tomato-paste products purchased from Ubani-Umuahia market, Nigeria. (n=10) |
| 5 | [[sources/buculei2012-tin-iron-migration-canned-food-romania\|Buculei et al. 2012]]. *Study regarding the tin and iron migration from metallic cans into foodstuff during storage*, Journal of Agroalimentary Processes and Technologies, 18(4), 299-303 | 2012 | Peer-reviewed | RO Sn, Fe occurrence in Four canned product types (peas, tomato paste, pork in own juice, pork liver pate) packed in three-piece tinplate... (n=4) |
| 6 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2012 | Government report | HK iAs occurrence in Hong Kong adult population aged 20-84; composite samples from 150 TDS food items collected on four occasions March... (n=600) |
| 7 | [[sources/david2008-heavy-metals-canned-tomato-paste-romania\|David et al. 2008]]. *The heavy metals analyses in canned tomato paste*, Journal of Agroalimentary Processes and Technologies | 2008 | Peer-reviewed | RO/IT Pb, Cd, Sn, Al, Cr, Fe, Zn, tAs occurrence in Five commercial canned tomato paste and tomato sauce products tested in Romania: two Romanian-branded products in metal cans,... (n=5) |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Tomato paste is the concentrated form of tomato (Solanum lycopersicum) produced by cooking and evaporating fresh tomato to roughly 28-30% solids (from the source tomato's ≈5% solids), which concentrates per-mass heavy-metal load by approximately 6-fold relative to fresh tomato. Tomatoes themselves accumulate [[metals/cadmium|Cd]] from soil uptake at moderate efficiency, and trace [[metals/lead|Pb]] from soil and atmospheric deposition; tomatoes are not strong leaf-tissue [[metals/cadmium|Cd]] accumulators like leafy vegetables, but the concentration step in paste production amplifies even moderate fresh-tomato Cd levels into measurable paste-level concentrations. The Polish market survey by [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Grochowska-Niedworok 2020]] documents Pb and Cd in fresh tomato and tomato products including paste; the Romanian canned tomato paste survey by [[sources/david2008-heavy-metals-canned-tomato-paste-romania|David 2008]] documents Pb at 5-15 ppb and Cd at 30-70 ppb in commercial canned paste.

Canned tomato paste introduces an additional contamination pathway: tin migration from tinplate can interior into the acidic paste matrix. Tomato paste is highly acidic (pH ≈4.1) and its high solute concentration promotes Sn migration over storage time. Modern can-stock specifications (BPA-NI epoxy lining, fully lacquered can-interior, two-piece drawn-redrawn can construction) reduce migration substantially; older can stock and damaged cans can produce per-mass Sn concentrations above 100 ppm (100,000 ppb) at end of shelf life. The HMTc panel concerns for tomato paste are Cd (dominant from source-tomato concentration), trace Pb, and Sn from can-lining migration in canned product.

## Ranges by source, region, and variety

Variance within tomato paste tracks three dimensions. First, source-tomato origin region: Cd in source tomatoes varies with soil-Cd profile across production regions. Mediterranean basin production (Italy, Spain, Portugal, Tunisia, Turkey) sits at the higher Cd end reflecting some volcanic-origin soils; California production (primary US source) sits at moderate Cd; Chinese production varies widely by sub-region per the broader Chinese-vegetable surveys. Second, cultivar and growing-system: greenhouse-grown tomato carries lower Cd than field-grown tomato in equivalent soil because controlled irrigation and pH management reduce uptake; cherry-tomato varieties accumulate more Cd per-mass than full-size tomato because the higher surface-to-volume ratio increases atmospheric-deposition load. Third, can-stock vintage and integrity: paste in older can stock (pre-2000 manufacture) carries higher Sn than modern epoxy-lined production; paste in damaged or dented cans concentrates Sn over storage time.

The 5-15 ppb Pb and 30-70 ppb Cd ranges in [[sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland|Grochowska-Niedworok 2020]] and [[sources/david2008-heavy-metals-canned-tomato-paste-romania|David 2008]] sit at the EU-market commercial baseline. Outliers in the corpus include tomato grown in remediated contaminated soils per [[sources/salem2024-tomato-remediated-soil-egypt|Salem 2024]] (Egyptian remediation-trial samples) showing variable Cd response to bioremediation interventions.

## Processing effects

Tomato paste manufacturing is the dominant per-mass concentration event. The source tomato at ≈5% solids is cooked, screened to remove peel and seeds, and evaporated under vacuum to ≈28-30% solids; this 6-fold concentration of solids similarly concentrates the per-mass metal load. The peel-and-seed removal step does reduce Pb by a small margin (10-20%) because surface-deposited Pb partitions to the peel fraction; the cooking and evaporation steps do not remove metals.

Canning introduces the Sn-migration pathway via interior tinplate contact with the acidic paste matrix. Migration rates depend on can-lining integrity, paste pH, storage temperature, and storage duration. The [[sources/trandafir2012-tin-canned-foods-icp-ms|Trandafir 2012]] ICP-MS Sn survey of canned foods including tomato products documents the distribution; the [[sources/tarigan2016-factors-tin-released-canned-beverages|Tarigan 2016]] mechanistic survey of Sn release factors quantifies the dependence on lining type and storage conditions.

Aseptic packaging (foil-laminate pouches or carton packaging for tomato paste) eliminates the Sn-migration pathway entirely.

## Ingredient-derivative risk

Tomato paste derivatives span the canned-tomato-product format spectrum: tomato sauce (paste diluted to ≈10-12% solids), tomato purée (≈15-20% solids), crushed tomato (≈9-11% solids), and tomato ketchup (paste blended with vinegar, sugar, and spice). Each derivative carries the source-paste per-mass profile diluted or adjusted by added ingredients. Dehydrated tomato products (sun-dried tomato, tomato powder, tomato flakes) further concentrate per-mass metal load.

Tomato paste is also a primary ingredient in many infant and toddler food formulations, where its concentrated form contributes substantially to per-serving metal load when blended into mixed-meals products. Per [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]] French infant TDS, tomato-paste-containing infant foods sit at the upper end of the vegetable-based infant-food Cd distribution.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention for tomato paste. Geographic-segmented sourcing from documented low-soil-Cd production regions (California processing tomato cultivation regions sit at the moderate Cd end; Italian San Marzano DOC production sits at variable Cd reflecting volcanic-soil influence); supplier-soil verification for tomato farms supplying paste production; and contractual specification of incoming-paste Cd ceiling.

**Agronomic levers** ([[mitigation/agronomic]]) operate at the tomato-cultivation stage and are effective. Soil pH management (raising pH from 5.5 to 6.5-7.0 reduces Cd plant availability substantially); soil amendments (biochar, lime, organic amendments); cultivar selection within species (low-Cd processing-tomato cultivars are documented in agronomic literature); and irrigation-water specification (testing source water for trace Pb/Cd). The Egyptian remediation-trial work in [[sources/salem2024-tomato-remediated-soil-egypt|Salem 2024]] documents the variable response of tomato Cd uptake to soil-remediation interventions.

**Processing levers** ([[mitigation/processing]]) include peel-removal optimization to maximize Pb reduction (the peel fraction concentrates surface-deposited Pb); pre-processing washing to reduce surface-soil and atmospheric-deposited contamination; and evaporation control to avoid over-concentration where unnecessary for product specification.

**Formulation levers** ([[mitigation/formulation]]) are limited because tomato paste is itself the formulation; the operative lever is substitution of fresh or canned-whole-tomato for paste in finished products where the matrix tolerates the higher water content.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) are mature: lot-level Cd, Pb, and Sn testing on finished tomato paste against EU 2023/915 maximum levels for processed vegetables and against can-stock-specific Sn migration limits. ICP-MS is the standard analytical platform.

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include can-lining specification (BPA-NI epoxy, full-can lacquering, two-piece drawn-redrawn construction) to minimize Sn migration; aseptic foil-laminate or carton packaging eliminates the Sn-migration pathway entirely. Storage-condition specification (cool, dark storage) extends shelf-life Sn-migration tolerance.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets binding maximum levels for processed tomato products including paste: Pb 50 ppb, Cd 50 ppb (vegetables and fruits, including processed forms); Sn 200 mg/kg for canned food (general), 50 mg/kg for canned beverages and infant food.
- Codex Alimentarius CXS 193-1995 ([[sources/codex-cxs-193-1995|Codex 1995]]) — Codex general standard sets maximum levels for Pb and Cd in processed vegetables aligned broadly with EU.
- FDA does not currently set a quantitative action level specific to tomato paste; general FDA enforcement on toxic-element contamination applies.
- California Prop 65 ([[regulations/california-prop65]]) — Pb MADL applies to tomato-paste products sold in California; commercial settlements have established practical compliance thresholds for canned tomato products.
- EU Sn-in-canned-food regulation sets a 200 ppm (200,000 ppb) maximum level for canned food and 50 ppm for canned infant food, baby food, follow-on formula, dietary food for special medical purposes, and beverages; tomato paste in tinplate cans is the primary commodity targeted by this limit.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fcd020390](https://github.com/paleofoundation/heavymetalindex/commit/fcd020390) | 2026-05-17 | major | 7 sources added; narrative text revised |
| [0b917c57b](https://github.com/paleofoundation/heavymetalindex/commit/0b917c57b) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
