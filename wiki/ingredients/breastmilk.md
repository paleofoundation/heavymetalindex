---
title: "Breastmilk"
type: ingredient
commodity: breastmilk
label: "Breastmilk (Human Milk)"
aliases: [breast milk, human milk, mother's milk, breastfeeding]
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
updated: 2026-05-16
sources: 14
---

# Breastmilk (Human Milk)

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

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/katrynska2026-human-milk-biomonitor-toxic-metals-review\|Katrynska et al. 2026]]. *Human Milk as a Biomonitor of Toxic Metal Exposure: Sources, Transfer Mechanisms, and Implications for Infant Health — A Review*, Nutrients | 2026 | Review | Structured narrative review of 112 studies (2010–2025) on Pb, Cd, tHg, tAs, Cr, and Al in human milk; typical ranges Pb 2–5 µg/L, tHg 1.4–1.7, Cd <1, with bone Pb mobilization and dietary intake as primary transfer pathways |
| 2 | [[sources/aisyiah2025-heavy-metals-breast-milk-systematic-review\|Aisyiah et al. 2025]]. *Heavy Metal Content in Breast Milk and Contributing Environmental and Maternal Factors: A Systematic Review*, Jurnal Bidan Cerdas | 2025 | Review | PROSPERO-registered systematic review of 9 primary studies (2013–2023) on Pb, Cd, tHg, tAs, Al, and Cr in breast milk across Taiwan, Spain, Poland, China, Palestine, Sierra Leone; food intake and place of residence as primary determinants |
| 3 | [[sources/moon2025-maternal-diet-heavy-metals-breast-milk-korea\|Moon et al. 2025]]. *The Association Between Maternal Dietary Intake and the Risk of Heavy Metals in Human Breast Milk in Korea*, Toxics | 2025 | Peer-reviewed | Pb, Cd, tHg, and tAs by ICP-MS in 209 Korean lactating mothers; Cd detection 99% (GM 0.13 µg/L), Hg 97% (GM 0.18), As 89% (GM 1.16), Pb 79% (GM 0.11), with diet-metal associations (legume/seaweed→Pb, vegetables/seaweed→Cd, meat→As) |
| 4 | [[sources/thoerig2025-toxic-elements-pfas-human-milk-formula-systematic-review\|Thoerig et al. 2025]]. *Assessment of arsenic, cadmium, lead, mercury, and per- and polyfluoroalkyl substances concentrations in human milk and infant formula in the United States: a systematic review*, American Journal of Clinical Nutrition, Vol. 122, pp. 1006-1026 | 2025 | Peer-reviewed | Systematic review of U.S. evidence on As, Cd, Pb, Hg, and PFAS concentrations in human milk vs infant formula; documents generally lower human-milk concentrations than reconstituted formula for these elements |
| 5 | [[sources/fatima2024-breast-milk-heavy-metals-lahore-neutrosophic\|Fatima et al. 2024]]. *Analysis of heavy metal concentrations in breast milk by neutrosophic method in the locate of Lahore, Pakistan*, npj Women's Health | 2024 | Peer-reviewed | Pb and tHg in 70 lactating mothers near Lahore industrial zones using interval-form neutrosophic statistics; Pb 0.85–2.87 µg/L and Hg 2.87–16.85 µg/L (industrial-zone setting elevated Hg) |
| 6 | [[sources/naspolini2024-human-milk-sao-paulo\|Naspolini et al. 2024]]. *Lead contamination in human milk affects infants' language trajectory: results from a prospective cohort study*, Frontiers in Public Health | 2024 | Peer-reviewed | tAs, Pb, tHg, and Cd in 185 São Paulo mothers' milk at 3 months postpartum (Germina cohort) by ICP-MS; Pb-exposed infants showed lower language development trajectory at 10–16 months (β=−0.413) despite modest Pb levels |
| 7 | [[sources/pikounis-urinary-biomarkers-infant-formula-vs-human-milk\|Pikounis et al. 2024]]. *Urinary biomarkers of exposure to toxic and essential elements: A comparison of infants fed with human milk or formula*, Environmental Epidemiology | 2024 | Peer-reviewed | U.S. infant cohort study comparing urinary biomarkers for iAs, Pb, Cd, Hg, and Mn in breastfed vs formula-fed infants; formula-fed infants showed higher As and Mn biomarker levels |
| 8 | [[sources/serreau2024-pollutants-breast-milk-scoping-review\|Serreau et al. 2024]]. *Pollutants in Breast Milk: A Scoping Review of the Most Recent Data in 2024*, Healthcare | 2024 | Review | Scoping review of POPs and Pb/Cd in breast milk from 54 articles (1995–2023); cites EU reference levels of 15 µg/L Pb and 5 µg/L Cd and identifies diet (>90% Cd in non-smokers, 100% MeHg), residence, and smoking as exposure determinants |
| 9 | [[sources/soto-ocana2024-metal-availability-early-life-microbiome\|Ocaña et al. 2024]]. *Metal availability shapes early life microbial ecology and community succession*, mBio 15(7):e00854-24 | 2024 | Peer-reviewed | Demonstrates that formula-fed infants have higher gastrointestinal Zn and Mn than breastfed infants, with measurable effects on early gut microbiome community assembly |
| 10 | [[sources/sushila2024-heavy-metals-human-milk-review\|Sushila et al. 2024]]. *Literature review and health risks assessment of heavy metal contamination in human milk*, Discover Minerals | 2024 | Peer-reviewed | PRISMA review of 22 studies on Pb, Cd, tHg, tAs, Ni, and Cr in breast milk across 11 countries with EDI/HQ/CR calculations; Cd HQ=4.7 in Iran and Pb 1.19 mg/kg in Cyprus are the outlier geographic extremes |
| 11 | [[sources/chen2023-breast-milk-ewaste-china\|Chen et al. 2023]]. *Prenatal Exposure to Heavy Metals and Adverse Birth Outcomes: Evidence From an E-Waste Area in China*, GeoHealth | 2023 | Peer-reviewed | Pb, Cd, Cr, tAs, Mn, and Cu by ICP-MS in 102 human milk samples at 4 weeks postpartum from Taizhou, Zhejiang e-waste recycling area; 34.3% exceeded WHO Cr guideline (0.8–1.5 µg/L) and Cd inversely associated with female-infant birth weight |
| 12 | [[sources/carignan2016-breast-milk-formula-arsenic-first-year-cohort\|Carignan et al. 2016]]. *Contribution of breast milk and formula to arsenic exposure during the first year of life in a U.S. prospective cohort*, Journal of Exposure Science and Environmental Epidemiology, Vol. 26, No. 5, pp. 452-457 | 2016 | Peer-reviewed | Prospective U.S. cohort quantifying iAs/tAs exposure from human milk vs formula across the first year of life; feeding mode and rice-cereal introduction are primary exposure determinants |
| 13 | [[sources/carignan2015-arsenic-exposure-breastfed-formula-fed-infants\|Carignan et al. 2015]]. *Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort*, Environmental Health Perspectives, Vol. 123, No. 5, pp. 500-506 | 2015 | Peer-reviewed | U.S. infant cohort study using urinary As biomarkers to compare arsenic exposure in breastfed vs formula-fed infants; formula-fed infants had higher urinary As levels, establishing feeding mode as a key determinant |
| 14 | [[sources/atsdr-aluminum-toxprofile-2008\|ATSDR 2008]]. *Toxicological Profile for Aluminum*, U.S. Department of Health and Human Services, Public Health Service, Agency for Toxic Substances and Disease Registry | 2008 | Government report | ATSDR Al toxicological profile covering dietary exposure routes including human milk and infant formula; includes Al MRL derivation and infant-exposure context |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

_Pending synthesis. The soil, plant biology, processing, or sourcing reasons this commodity carries heavy-metal load will be populated as contributing sources accumulate per CLAUDE.md Part 9._

## Ranges by source, region, and variety

_Pending synthesis. Geographic and varietal variance will be populated from contributing source pages per CLAUDE.md Part 9._

## Processing effects

_Pending synthesis. Polishing, rinsing, fermentation, drying, milling, and refining effects on per-analyte concentration will be populated from contributing sources._

## Ingredient-derivative risk

_Pending synthesis. When this commodity is processed into syrups, concentrates, flours, brans, or other derivatives, the per-derivative concentration shifts will be populated here._

## Mitigation options

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing source pages and cross-linked `mitigation/` pages._

## Regulatory limits that apply

_Pending synthesis. Operative Codex, EU, FDA, and other regulatory limits for this commodity or its derived products will be populated from `regulations/` pages and source evidence._


