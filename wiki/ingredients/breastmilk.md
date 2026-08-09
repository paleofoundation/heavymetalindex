---
title: "Breastmilk"
type: ingredient
commodity: breastmilk
label: "Breastmilk (Human Milk)"
aliases: [breast milk, human milk, mother's milk, breastfeeding, human-milk, "Human Milk", "ingredients/human-milk"]
category: dietary-exposure-route
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0.1, 13]
    p95_ppb: 41
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [0.01, 1.4]
    p95_ppb: 3.5
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [0.04, 14]
    p95_ppb: 54
    confidence: medium
    n_studies: 8
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
    typical_ppb: [9, 80]
    p95_ppb: 100
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [0.6, 1.5]
    p95_ppb: 7.5
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [0.1, 2.8]
    p95_ppb: 35
    confidence: medium
    n_studies: 10
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [maternal-exposure, lactational-transfer, geography, occupational-history]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 42
---

# Breastmilk (Human Milk)

## Overview

Breastmilk is the infant exposure route this wiki tracks alongside infant formula. It is not a manufactured ingredient and does not appear in any product-category page, but it is the comparator against which formula-fed infant exposure is measured and the source of evidence behind WHO and AAP feeding guidance. The page exists so that cohort studies, systematic reviews, and agency tox profiles addressing breastmilk concentrations of Pb, Cd, As species, Hg species, and Al can route here cleanly.

Breastmilk concentrations of heavy metals are driven primarily by maternal exposure history (diet, drinking water, occupational, geographic) and by the partitioning behavior of each metal across the mammary epithelial barrier. Lead and arsenic partition relatively poorly into breastmilk; mercury (especially MeHg) partitions more readily but is also bound by breast tissue and shed via hair. The literature is unanimous that breastmilk concentrations are typically lower than formula concentrations for Pb and Cd when reconstituted formula is compared in matched-population studies; the comparison for iAs depends heavily on the formula's water source and base ingredient.

This page is the structural anchor for breastmilk-as-exposure-route claims; the vulnerable-population framing in [[health/vulnerable-populations]] and the infant-feeding guidance comparison on [[products/infant-formula-powder-non-soy]] cite this page.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=10 | 0.1–13 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|2]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|3]] |
| Cd | n=9 | 0.01–1.4 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|2]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|3]] |
| iAs | data gap | — | — | — |
| tAs | n=10 | 0.1–2.8 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|2]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|3]] |
| tHg | n=8 | 0.04–14 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|2]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|3]] |
| Ni | data gap | — | — | — |
| Al | n=3 | 9–80 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|2]], [[sources/atsdr-aluminum-toxprofile-2008\|3]] |
| Cr | n=4 | 0.6–1.5 | medium | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|1]], [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|2]], [[sources/sushila2024-heavy-metals-human-milk-review\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

Comparisons with formula route through the infant-formula product pages. Mechanism and toxicokinetic claims about lactational transfer live in [[health]] and [[microbiome]].

## Contamination Profile State

All ten contamination_profile sub-blocks are `pending`. Population-typical concentrations from breastmilk vary by region and exposure regime more than for any food matrix; values will populate as the contributing source pages are synthesized per Part 9.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/naspolini2024-human-milk-sao-paulo|Lead contamination in human milk affects infants' language trajectory: results from a prospective cohort study]]<span class="hmi-ref-meta">Naspolini NF, Vanzele PAR, Tótolo P, Schüroff PA, Fatori D, Vicentini Neto SA, et al. · Frontiers in Public Health · 2024 · [doi.org/10.3389/fpubh.2024.1450570](https://doi.org/10.3389/fpubh.2024.1450570)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea|The Association Between Maternal Dietary Intake and the Risk of Heavy Metals in Human Breast Milk in Korea]]<span class="hmi-ref-meta">Moon N, Heo SJ, Park S, Im H, and Kim JH · Toxics · 2025 · [doi.org/10.3390/toxics13050381](https://doi.org/10.3390/toxics13050381)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/atsdr-aluminum-toxprofile-2008|Toxicological Profile for Aluminum]]<span class="hmi-ref-meta">Agency for Toxic Substances and Disease Registry · 2008 · [www.atsdr.cdc.gov](https://www.atsdr.cdc.gov/toxprofiles/tp22.pdf)</span><span class="hmi-ref-tag">Government</span>
4. [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review|Heavy Metal Content in Breast Milk and Contributing Environmental and Maternal Factors: A Systematic Review]]<span class="hmi-ref-meta">Aisyiah, Rahfiludin MZ, Agushybana F, and Sutiningsih D · Jurnal Bidan Cerdas · 2025 · [doi.org/10.33860/jbc.v7i2.4042](https://doi.org/10.33860/jbc.v7i2.4042)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/sushila2024-heavy-metals-human-milk-review|Literature review and health risks assessment of heavy metal contamination in human milk]]<span class="hmi-ref-meta">Sushila S, Balda A, Balhara N, Aarushi A, and Giri A · Discover Minerals · 2024 · [doi.org/10.1007/s44346-024-00002-z](https://doi.org/10.1007/s44346-024-00002-z)</span><span class="hmi-ref-tag">Review</span>
6. [[sources/serreau2024-pollutants-breast-milk-scoping-review|Pollutants in Breast Milk: A Scoping Review of the Most Recent Data in 2024]]<span class="hmi-ref-meta">Serreau R, Terbeche Y, and Rigourd V · Healthcare · 2024 · [doi.org/10.3390/healthcare12060680](https://doi.org/10.3390/healthcare12060680)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review]]<span class="hmi-ref-meta">Rachel C. Thoerig, Lauren E. O'Connor, Maureen K. Spill, Arin A. Balalian, Rupal Trivedi, Shailesh M. Advani, et al. · American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 · 2025 · [doi.org/10.1016/j.ajcnut.2025.07.001](https://doi.org/10.1016/j.ajcnut.2025.07.001)</span><span class="hmi-ref-tag">Review</span>
8. [[sources/chen2023-breast-milk-ewaste-china|Prenatal Exposure to Heavy Metals and Adverse Birth Outcomes: Evidence From an E-Waste Area in China]]<span class="hmi-ref-meta">Chen C, Ma C, Li Q, Hang JG, Shen J, Nakayama SF, et al. · GeoHealth · 2023 · [doi.org/10.1029/2023GH000897](https://doi.org/10.1029/2023GH000897)</span><span class="hmi-ref-tag">Review</span>
9. [[sources/fatima2024-breast-milk-heavy-metals-lahore-neutrosophic|Analysis of heavy metal concentrations in breast milk by neutrosophic method in the locate of Lahore, Pakistan]]<span class="hmi-ref-meta">Fatima A, Afzal U, Aslam M, Rafi Z, Ahmad N, and Baig MA · npj Women's Health · 2024 · [doi.org/10.1038/s44294-024-00024-0](https://doi.org/10.1038/s44294-024-00024-0)</span><span class="hmi-ref-tag">Review</span>
10. [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review|Human Milk as a Biomonitor of Toxic Metal Exposure: Sources, Transfer Mechanisms, and Implications for Infant Health — A Review]]<span class="hmi-ref-meta">Katrynska D, Bzikowska-Jura A, Goc Z, and Kogut L · Nutrients · 2026 · [doi.org/10.3390/nu18101527](https://doi.org/10.3390/nu18101527)</span><span class="hmi-ref-tag">Review</span>
11. [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk|Urinary biomarkers of exposure to toxic and essential elements: A comparison of infants fed with human milk or formula]]<span class="hmi-ref-meta">Talia D. Pikounis, Kassaundra L. Amann, Brian P. Jackson, Tracy Punshon, Diane Gilbert-Diamond, Susan Korrick, et al. · Environmental Epidemiology · 2024 · [doi.org/10.1097/EE9.0000000000000286](https://doi.org/10.1097/EE9.0000000000000286)</span><span class="hmi-ref-tag">Review</span>
12. [[sources/soto-ocana2024-metal-availability-early-life-microbiome|Metal availability shapes early life microbial ecology and community succession]]<span class="hmi-ref-meta">Joshua Soto Ocaña, Elliot S. Friedman, Orlaith Keenan, Nile U. Bayard, Eileen Ford, Ceylan Tanes, et al. · mBio 15(7):e00854-24 · 2024 · [doi.org/10.1128/mbio.00854-24](https://doi.org/10.1128/mbio.00854-24)</span><span class="hmi-ref-tag">Review</span>
13. [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort|Contribution of breast milk and formula to arsenic exposure during the first year of life in a U.S. prospective cohort]]<span class="hmi-ref-meta">Courtney C. Carignan, Margaret R. Karagas, Tracy Punshon, Diane Gilbert-Diamond, and Kathryn L. Cottingham · Journal of Exposure Science and Environmental Epidemiology, Vol. 26, No. 5, pp. 452-457 · 2016 · [doi.org/10.1038/jes.2015.69](https://doi.org/10.1038/jes.2015.69)</span><span class="hmi-ref-tag">Review</span>
14. [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort]]<span class="hmi-ref-meta">Courtney C. Carignan, Kathryn L. Cottingham, Brian P. Jackson, Shohreh F. Farzan, A. Jay Gandolfi, Tracy Punshon, et al. · Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 · 2015 · [doi.org/10.1289/ehp.1408789](https://doi.org/10.1289/ehp.1408789)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|Katrynska et al. 2026]]. *Human Milk as a Biomonitor of Toxic Metal Exposure: Sources, Transfer Mechanisms, and Implications for Infant Health — A Review*, Nutrients | 2026 | Review | Structured narrative review of 112 studies (2010–2025) on Pb, Cd, tHg, tAs, Cr, and Al in human milk; typical ranges Pb 2–5 µg/L, tHg 1.4–1.7, Cd <1, with bone Pb mobilization and dietary intake as primary transfer pathways |
| 2 | [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|Aisyiah et al. 2025]]. *Heavy Metal Content in Breast Milk and Contributing Environmental and Maternal Factors: A Systematic Review*, Jurnal Bidan Cerdas | 2025 | Review | PROSPERO-registered systematic review of 9 primary studies (2013–2023) on Pb, Cd, tHg, tAs, Al, and Cr in breast milk across Taiwan, Spain, Poland, China, Palestine, Sierra Leone; food intake and place of residence as primary determinants |
| 3 | [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|Moon et al. 2025]]. *The Association Between Maternal Dietary Intake and the Risk of Heavy Metals in Human Breast Milk in Korea*, Toxics | 2025 | Peer-reviewed | Pb, Cd, tHg, and tAs by ICP-MS in 209 Korean lactating mothers; Cd detection 99% (GM 0.13 µg/L), Hg 97% (GM 0.18), As 89% (GM 1.16), Pb 79% (GM 0.11), with diet-metal associations (legume/seaweed→Pb, vegetables/seaweed→Cd, meat→As) |
| 4 | [[sources/mumtaz2025-infant-nutrition-trace-metals\|Mumtaz et al. 2025]]. *Occurrence and Risk Evaluation of Trace Metals in Infant Nutrition Sources in Rural and Urban Multan, Pakistan*, Food and Nutrition Insights | 2025 | Peer-reviewed | PK Pb, Cd, Ni, Zn, Fe occurrence in breast milk from lactating mothers and commercial infant formula samples (all major available brands) collected from rural and... |
| 5 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | Systematic review of U.S. evidence on As, Cd, Pb, Hg, and PFAS concentrations in human milk vs infant formula; documents generally lower human-milk concentrations than reconstituted formula for these elements |
| 6 | [[sources/bzikowska-jura2024-human-milk-elements-poland\|Bzikowska-Jura et al. 2024]]. *Essential and non-essential element concentrations in human milk samples and the assessment of infants' exposure*, Scientific Reports 14:8140 | 2024 | Peer-reviewed | PL Al, tAs, Ba, Be, Cd, Co, Cr, Cu, tHg, Mn, Mo, Ni, Pb, Sn, Tl, Th, U, V occurrence in Thirty human-milk samples from exclusively breastfeeding mothers in Warsaw, Poland, collected 4-6 weeks postpartum (n=30) |
| 7 | [[sources/fatima2024-breast-milk-heavy-metals-lahore-neutrosophic\|Fatima et al. 2024]]. *Analysis of heavy metal concentrations in breast milk by neutrosophic method in the locate of Lahore, Pakistan*, npj Women's Health | 2024 | Peer-reviewed | Pb and tHg in 70 lactating mothers near Lahore industrial zones using interval-form neutrosophic statistics; Pb 0.85–2.87 µg/L and Hg 2.87–16.85 µg/L (industrial-zone setting elevated Hg) |
| 8 | [[sources/naspolini2024-human-milk-sao-paulo\|Naspolini et al. 2024]]. *Lead contamination in human milk affects infants' language trajectory: results from a prospective cohort study*, Frontiers in Public Health | 2024 | Peer-reviewed | tAs, Pb, tHg, and Cd in 185 São Paulo mothers' milk at 3 months postpartum (Germina cohort) by ICP-MS; Pb-exposed infants showed lower language development trajectory at 10–16 months (β=−0.413) despite modest Pb levels |
| 9 | [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk\|Pikounis et al. 2024]]. *Urinary biomarkers of exposure to toxic and essential elements: A comparison of infants fed with human milk or formula*, Environmental Epidemiology | 2024 | Peer-reviewed | U.S. infant cohort study comparing urinary biomarkers for iAs, Pb, Cd, Hg, and Mn in breastfed vs formula-fed infants; formula-fed infants showed higher As and Mn biomarker levels |
| 10 | [[sources/serreau2024-pollutants-breast-milk-scoping-review\|Serreau et al. 2024]]. *Pollutants in Breast Milk: A Scoping Review of the Most Recent Data in 2024*, Healthcare | 2024 | Review | Scoping review of POPs and Pb/Cd in breast milk from 54 articles (1995–2023); cites EU reference levels of 15 µg/L Pb and 5 µg/L Cd and identifies diet (>90% Cd in non-smokers, 100% MeHg), residence, and smoking as exposure determinants |
| 11 | [[sources/soto-ocana2024-metal-availability-early-life-microbiome\|Ocaña et al. 2024]]. *Metal availability shapes early life microbial ecology and community succession*, mBio 15(7):e00854-24 | 2024 | Peer-reviewed | Demonstrates that formula-fed infants have higher gastrointestinal Zn and Mn than breastfed infants, with measurable effects on early gut microbiome community assembly |
| 12 | [[sources/sushila2024-heavy-metals-human-milk-review\|Sushila et al. 2024]]. *Literature review and health risks assessment of heavy metal contamination in human milk*, Discover Minerals | 2024 | Review | PRISMA review of 22 studies on Pb, Cd, tHg, tAs, Ni, and Cr in breast milk across 11 countries with EDI/HQ/CR calculations; Cd HQ=4.7 in Iran and Pb 1.19 mg/kg in Cyprus are the outlier geographic extremes |
| 13 | [[sources/beyene2023-australian-fires-breast-milk\|Beyene et al. 2023]]. *The impact of the 2019/2020 Australian landscape fires on infant feeding and contaminants in breast milk in women with asthma*, International Breastfeeding Journal | 2023 | Peer-reviewed | AU Al, tAs, Ba, Cr, Cu, Fe, Li, Mg, Mn, Mo, Ni, Pb, Se, V occurrence in Breast milk samples from 77 women with asthma in eastern Australia, collected during and outside the 2019/2020 landscape... (n=92) |
| 14 | [[sources/chen2023-breast-milk-ewaste-china\|Chen et al. 2023]]. *Prenatal Exposure to Heavy Metals and Adverse Birth Outcomes: Evidence From an E-Waste Area in China*, GeoHealth | 2023 | Peer-reviewed | Pb, Cd, Cr, tAs, Mn, and Cu by ICP-MS in 102 human milk samples at 4 weeks postpartum from Taizhou, Zhejiang e-waste recycling area; 34.3% exceeded WHO Cr guideline (0.8–1.5 µg/L) and Cd inversely associated with female-infant birth weight |
| 15 | [[sources/lin2023-donor-milk-lead-mercury\|Y-C et al. 2023]]. *Health Risk of Infants Exposed to Lead and Mercury Through Breastfeeding*, Exposure and Health | 2023 | Peer-reviewed | TW Pb, tHg occurrence in donor milk from a Taiwanese human milk bank |
| 16 | [[sources/mansouri2023-smoking-trace-elements-human-milk\|Mansouri et al. 2023]]. *The effects of active and passive smoking on selected trace element levels in human milk*, Scientific Reports 13:20756 | 2023 | Peer-reviewed | IR Mg, Mn, Fe, Co, Cu, Zn, tAs, Cd, Cr, tHg, Ni, Pb occurrence in One hundred breast-milk samples from lactating women in Kermanshah, western Iran, grouped as passive smokers, active smokers, and... (n=100) |
| 17 | [[sources/martincarrasco2023-breast-milk-infant-formula-review\|Martín-Carrasco et al. 2023]]. *Comparison between pollutants found in breast milk and infant formula in the last decade: A review*, Science of the Total Environment | 2023 | Peer reviewed review | EU/MA/NG Pb, Cd, tHg, MeHg, tAs, Al, Cr, Cu, Ni, Zn, Fe, Mn, Co, Sn, Se, Sb occurrence in Narrative review of 65 breast-milk studies and 73 infant-formula studies published 2012–2022, covering metals, heat-treatment products, pharmaceuticals, mycotoxins,... |
| 18 | [[sources/sharafi2023-iran-breast-milk-metals\|Sharafi et al. 2023]]. *Human health risk assessment of potentially toxic elements in the breast milk consumed by infants in Western Iran*, Scientific Reports 13:6656 | 2023 | Peer-reviewed | IR Pb, tHg, Cd, Ni, Cr, tAs occurrence in One hundred breast milk samples from lactating women in Kermanshah city, western Iran, collected from September to December... (n=100) |
| 19 | [[sources/freire2022-donor-breast-milk-metals\|Freire et al. 2022]]. *Concentrations and determinants of lead, mercury, cadmium, and arsenic in pooled donor breast milk in Spain*, International Journal of Hygiene and Environmental Health | 2022 | Peer-reviewed | ES Pb, tHg, Cd, tAs occurrence in 242 pooled breast milk samples from 83 human-milk-bank donors in Spain, 2015-2018 (n=242) |
| 20 | [[sources/who-gdwq-2022-fourth-edition\|WHO 2022]]. *Guidelines for drinking-water quality: fourth edition incorporating the first and second addenda*, Geneva: World Health Organization | 2022 | Government report | WHO/Global Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U, Sb occurrence in Drinking-water consumers globally; guideline values derived for a 60 kg adult consuming 2 L/day, with bottle-fed infants flagged... |
| 21 | [[sources/original2020-original-a\|Alharbi et al. 2020]]. *Occurrence and dietary exposure assessment of heavy metals in baby foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2020 | Peer reviewed journal article | Cited reference from Food Science & Nutrition |
| 22 | [[sources/abaas2018-breast-milk-nickel\|Nassir et al. 2018]]. *Determination of Nickel Concentration in the Breast Milk of Lactating Mothers Living In Hilla City*, Journal of University of Babylon for Pure and Applied Sciences | 2018 | Peer-reviewed | IQ Ni occurrence in lactating mothers living in Hilla City, Iraq |
| 23 | [[sources/durovic2017-human-milk-infant-formula-microelements\|Durovic et al. 2017]]. *Determination of Microelements in Human Milk and Infant Formula Without Digestion by ICP-OES*, Acta Chimica Slovenica | 2017 | Peer-reviewed | ME/RS Zn, Fe, Cu occurrence in 28 mature human milk samples from lactating mothers and 15 powdered infant formula units representing five formula products... (n=43) |
| 24 | [[sources/klein2017-human-milk-trace-elements\|Klein et al. 2017]]. *Concentrations of trace elements in human milk: Comparisons among women in Argentina, Namibia, Poland, and the United States*, PLOS ONE | 2017 | Peer-reviewed | AR/NA/PL Pb, tAs occurrence in lactating mothers from Argentina, Namibia, Poland, and the United States (n=70) |
| 25 | [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort\|Carignan et al. 2016]]. *Contribution of breast milk and formula to arsenic exposure during the first year of life in a U.S. prospective cohort*, Journal of Exposure Science and Environmental Epidemiology, Vol. 26, No. 5, pp. 452-457 | 2016 | Peer-reviewed | Prospective U.S. cohort quantifying iAs/tAs exposure from human milk vs formula across the first year of life; feeding mode and rice-cereal introduction are primary exposure determinants |
| 26 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 | 2015 | Peer-reviewed | U.S. infant cohort study using urinary As biomarkers to compare arsenic exposure in breastfed vs formula-fed infants; formula-fed infants had higher urinary As levels, establishing feeding mode as a key determinant |
| 27 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives | 2015 | Peer-reviewed | Cited reference from Environmental Health Perspectives |
| 28 | [[sources/efsa2014-dietary-exposure-iAs\|EFSA 2014]]. *Dietary exposure to inorganic arsenic in the European population*, EFSA Journal 2014;12(3):3597 | 2014 | Government report | EU iAs, tAs concentrations (n=103773) |
| 29 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 30 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EU Pb occurrence in Aggregated EU occurrence data: 94,126 quantified analytical results across 14 Member States, Norway and three commercial operators (2003–2009),... (n=94126) |
| 31 | [[sources/efsa-arsenic-contam-2009\|EFSA 2009]]. *Scientific Opinion on Arsenic in Food*, EFSA Journal 2009;7(10):1351 | 2009 | Government report | EU iAs, tAs concentrations |
| 32 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR Al toxicological profile covering dietary exposure routes including human milk and infant formula; includes Al MRL derivation and infant-exposure context |
| 33 | [[sources/jecfa-67th-aluminium-methylmercury-2007\|JECFA 2007]]. *Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 940 (Sixty-seventh meeting of JECFA, Rome, 20-29 June 2006) | 2007 | Government report | international Al, MeHg, tHg occurrence in Aluminium: total dietary exposure derived from market-basket and duplicate-diet surveys in adults (France, Germany, UK, USA, China), Total... |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Breastmilk is a dietary-exposure-route page rather than a manufactured ingredient; the heavy-metal content of breastmilk reflects maternal cumulative body burden and ongoing maternal exposure transferred to the infant via the lactation pathway. [[metals/lead|Lead]] in breastmilk originates from maternal bone Pb (mobilized during lactation as bone mineral turnover increases to support milk production) plus ongoing maternal dietary, environmental, and occupational Pb exposure; the [[sources/naspolini2024-human-milk-sao-paulo|Naspolini 2024]] São Paulo cohort documents Pb-in-milk effects on infant language trajectory. [[metals/cadmium|Cadmium]] in breastmilk originates from maternal renal/hepatic Cd stores plus ongoing dietary Cd exposure (cumulative-burden tracking), though Cd transfer to milk is relatively inefficient compared to blood; the [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea|Moon 2025]] Korean maternal-diet cohort documents the maternal-dietary-intake → breastmilk Cd association. [[metals/mercury-methyl|Methylmercury]] transfers efficiently from maternal blood into milk. [[metals/aluminum|Aluminum]] in breastmilk reflects maternal dietary Al plus environmental exposure; ATSDR's toxicological profile ([[sources/atsdr-aluminum-toxprofile-2008|ATSDR 2008]]) covers the milk-route exposure.

Three systematic reviews establish the human-milk evidence base: [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review|Aisyiah 2025]] (heavy-metal content and contributing factors), [[sources/sushila2024-heavy-metals-human-milk-review|Sushila 2024]] (literature review and health-risk assessment), and [[sources/serreau2024-pollutants-breast-milk-scoping-review|Serreau 2024]] (pollutants in breast milk scoping review). The U.S. systematic review by [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review|Thoerig 2025]] is the most comprehensive recent U.S. evidence synthesis and documents that human milk generally carries lower per-mass concentrations of As, Cd, Pb, and Hg than reconstituted infant formula. Breastmilk Pb at typical 0.1-13 ppb, Cd at 0.01-1.4 ppb, Hg at 0.04-14 ppb, and Al at 9-80 ppb are the corpus-wide ranges. The HMTc-panel concerns for breastmilk are dominantly Pb (highest typical concentration relative to infant safety thresholds), Hg (notably from maternal fish consumption pattern), and Al (notably from maternal exposure to Al-containing personal-care products and food packaging).

## Ranges by source, region, and variety

Variance within breastmilk tracks maternal body burden plus ongoing exposure. First, maternal historical Pb exposure: women with documented historical occupational Pb exposure (battery manufacturing, mining, painting, ammunition), childhood Pb exposure (legacy environmental Pb), or pre-pregnancy elevated BLLs carry higher bone-Pb stores that mobilize during lactation. The [[sources/chen2023-breast-milk-ewaste-china|Chen 2023]] e-waste-region China cohort documents the prenatal-exposure → adverse-birth-outcome pathway in a high-exposure region. Second, geographic and dietary context: the [[sources/fatima2024-breast-milk-heavy-metals-lahore-neutrosophic|Fatima 2024]] Lahore Pakistan cohort and the broader [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review|Aisyiah 2025]] systematic review document elevated breastmilk metal concentrations in regions with high industrial or e-waste-related environmental contamination. Third, maternal dietary pattern: the [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea|Moon 2025]] Korean cohort documents the association between maternal seafood intake and breastmilk Hg, and between maternal cereal/legume intake and breastmilk Cd. Fourth, maternal smoking status: smoking elevates breastmilk Cd substantially.

The systematic review by [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review|Katrynska 2026]] synthesizes the human-milk-as-biomonitor literature and documents the transfer mechanisms, region-specific contributions, and implications for infant health.

## Processing effects

Breastmilk is not a processed commodity; the relevant "processing" considerations for the dietary-exposure-route framing are: maternal pumping and storage (refrigerated breastmilk stored for short periods does not appreciably change per-mass metal content; long-term frozen storage similarly does not), maternal supplementation with calcium during lactation (calcium supplementation reduces bone-Pb mobilization into milk, an evidence-based intervention), and infant feeding pattern (exclusively breastfed infants accumulate the entire transferred metal load; mixed-fed infants accumulate the weighted average of breastmilk and formula contributions). The [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk|Pikounis 2024]] U.S. cohort and the [[sources/soto-ocana2024-metal-availability-early-life-microbiome|Soto-Ocaña 2024]] CHOP/Penn/Vanderbilt cohort document the urinary-biomarker and gut-microbiome consequences of breastfed vs formula-fed feeding-pattern decisions.

## Ingredient-derivative risk

Breastmilk does not have manufactured derivatives in the conventional sense; the relevant derivative consideration is mixed-fed and formula-supplemented feeding patterns where breastmilk is part of the infant feeding mix. The [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort|Carignan 2016]] U.S. prospective cohort and [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants|Carignan 2015]] cohort document feeding-mode contributions to first-year-of-life As exposure: breastfed infants accumulate substantially less arsenic than formula-fed infants, with the gap widening once rice cereal and rice-containing solids are introduced.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) — not applicable in the conventional supply-chain sense because breastmilk is not a manufactured ingredient. The analogous lever is maternal-side intervention: maternal-dietary-pattern guidance during lactation (avoid high-Hg fish, manage seafood intake, avoid contaminated water sources), maternal occupational and environmental exposure reduction, and maternal pre-pregnancy and pregnancy Pb screening to identify and remediate elevated body burdens before lactation begins.

**Agronomic levers** ([[mitigation/agronomic]]) — not directly applicable. The upstream analog is the maternal-dietary-source-food agronomic intervention (which operates on the source foods the mother eats, not on breastmilk itself).

**Processing levers** ([[mitigation/processing]]) — not applicable to fresh breastmilk. For donor-breastmilk programs (milk banks), the operative consideration is donor screening for occupational and environmental exposure, plus standard milk-bank pooling and pasteurization protocols.

**Formulation levers** ([[mitigation/formulation]]) — not applicable to breastmilk itself. For mixed-fed infants, the operative lever is formula-selection and complementary-food-selection to manage the non-breastmilk fraction of the infant feeding mix.

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include maternal blood lead screening during pregnancy and lactation (CDC recommends BLL testing for mothers with documented historical Pb exposure), maternal urine As screening in As-affected regions, and biomarker-based exposure assessment per [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review|Aisyiah 2025]] and [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review|Katrynska 2026]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) — for pumped/stored milk, glass or food-grade plastic storage containers are standard; aluminum-foil-lined containers should be avoided to prevent migration into stored milk.

## Regulatory limits that apply

Breastmilk does not have direct regulatory maximum levels comparable to infant formula because it is not a commercially produced food product. The relevant regulatory framework operates at the maternal-exposure level:

- CDC and WHO maternal blood lead level guidance: action thresholds for elevated maternal BLL during pregnancy and lactation.
- WHO breastmilk biomonitoring program: provides population-level surveillance of pollutants in human milk including some heavy metals.
- ATSDR toxicological profiles for individual metals ([[sources/atsdr-aluminum-toxprofile-2008|ATSDR 2008]] for Al; parallel profiles for Pb, Cd, Hg) establish the reference dose framework that applies to infant exposure via breastmilk.
- EFSA and JECFA tolerable intake values (Pb BMDL for neurodevelopment, Cd PTMI, Hg PTWI, Al TWI) are the operative dose-response anchors for evaluating breastmilk exposure on a per-day or per-week basis.
- Donor-breastmilk programs operate under Human Milk Banking Association of North America (HMBANA) or equivalent regional guidance, which includes donor screening for exposure but not a direct regulatory maximum level for metals.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 9 sources added; 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 9 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 5 sources added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
