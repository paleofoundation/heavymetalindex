---
type: batch-report
batch_id: p1-priority-one
date: 2026-05-12
priority_tier: P1
papers_processed: 29
papers_skipped: 17
source_pages_created: 26
source_pages_fixed: 2
values_records_added: 47
manifest_reclassifications: 12
noindex: true
---

# Batch Report — P1 Priority Tier Ingest

**Date:** 2026-05-12
**Priority tier:** P1 (HMT&C Path A concentration candidates)
**Original manifest P1 count:** 46 rows (34 short-form handles + 12 reclassified to P5)
**Long-name dedup copies skipped:** 3

## Summary

26 new source pages created. 2 existing source pages corrected. 47 values.jsonl concentration records appended. 12 false-positive P1 papers reclassified to P5 in the manifest.

---

## Papers processed (29 total)

### New source pages created (26)

| Cite key | FM handle | Description |
|---|---|---|
| henriquez-hernandez2023-baby-purees-spain-elements | FM_10384816 | 159 RTE baby purees Spain (ICP-MS, 38 elements, fish/chicken/beef/fruit types) |
| alharbi2023-baby-foods-saudi-arabia-heavy-metals | FM_10494610 | 111 baby food samples Saudi Arabia NFMP 2020 (As/Cd/Pb) |
| su2020-infant-formula-china-toxic-elements | FM_7763862 | 93 cow milk-based infant formula China (Cr/tAs/Cd/Pb) |
| zmudzinska2022-rte-baby-foods-poland | FM_9183086 | 397 RTE baby foods Poland (As/Cd/Hg/Pb) |
| jackson2012-brown-rice-syrup-arsenic | FM_3346791 | iAs in organic brown rice syrup and toddler formula (HPLC-ICP-MS) |
| bandara2010-cadmium-rice-sri-lanka-crf | FM_7127468 | Cd in rice/food Sri Lanka; CRF epidemic; WHO-sponsored |
| napier2024-wanabana-lead-apple-cinnamon | FM_11262827 | CDC MMWR: WanaBana recall Pb 1900–5800 µg/kg (adulteration event) |
| chronchol2026-dairy-free-infant-porridges-poland | FM_12845264 | Pb/Cd/Hg in dairy-free infant porridges Poland, n=105 |
| signes-pastor2018-infant-arsenic-solid-food | FM_5940663 | Urinary iAs +480% DMA spike at rice cereal introduction, NHBCS |
| zhao2021-cadmium-removal-rice-flour | FM_8358380 | Cd biosorption from rice flour; implies contaminated feedstock |
| fangstrom2008-breastfeeding-arsenic-protection-bangladesh | FM_2453168 | EBF protects against As exposure; breast milk As median 1 µg/kg |
| kumar2024-arsenic-breast-milk-bihar-gangetic | FM_11415992 | 55% breast milk As above WHO limit, Bihar India; rice up to 821 µg/kg |
| onyena2024-lactational-metals-africa-europe | FM_11621596 | Meta-analysis: SSA vs Mediterranean Europe breast milk metals; Cd 56× higher SSA |
| kumar2025-mercury-lactating-women-infants-bihar | FM_11971891 | 74% breast milk Hg above WHO guideline; Bihar India |
| garcia-salcedo2022-arsenic-biomonitoring-mexico | FM_9739351 | Transplacental + lactational As transfer; Comarca Lagunera vs Saltillo |
| islam2014-arsenic-breast-milk-bangladesh | FM_4265415 | HPLC-ICP-MS As speciation in breast milk Bangladesh; median 0.5 µg/L |
| carignan2015-arsenic-infancy-well-water-breast-milk | FM_4421759 | Well water drives formula-fed infant As 7.5× higher than breastfed; NHBCS |
| chang2015-mercury-korean-infants-weaning | FM_4421773 | Hg in Korean weaning infants; hair Hg GM 0.22 µg/g; fish intake driver |
| kelishadi2016-jujube-fruit-heavy-metals-breast-milk | FM_4847023 | Breast milk Pb ~30 µg/L in Isfahan industrial city; jujube RCT no effect |
| price2023-lead-biokinetic-baby-food-us | FM_10379829 | IEUBK biokinetic modeling of Pb from baby food; FDA CTZ context |
| shibata2016-arsenic-rice-cereal-risk-assessment-us | FM_4661673 | Monte Carlo iAs risk assessment, rice cereal US; CDI 0.73 µg/kg bw/day |
| igweze2019-trace-metals-infant-formula-nigeria | FM_7061406 | Essential trace metals (Cr, Fe, Zn, Mn) in 26 formula brands Nigeria |
| ljung2007-manganese-drinking-water-guideline | FM_2072823 | Mn in water and formula; breastfed infants 3–4 µg/L vs formula 325 µg/L |
| yuan2012-aluminum-oxidative-stress-neonatal-rats | FM_3404950 | Al neurotoxicity in neonatal rat brains; animal study, no food concentrations |
| schmidt2015-arsenic-infancy-commentary | FM_5322685 | EHP commentary summarizing Carignan 2015; C-tier; no primary data |
| neuwirth2022-baby-cereals-lead-arsenic | FM_9140990 | Commentary on baby cereal As/Pb; B-tier; cites Clean Label Project |

### Source pages corrected (2)

| Cite key | FM handle | Correction |
|---|---|---|
| navaretnam-2025-rice-as-speciation | FM_12378713 | Added missing raw_handle; corrected raw_path from studies/ to markdown/ |
| collado-lopez2025-heavy-metals-baby-food-formula | FM_12793581 | Corrected raw_handle from Digest/nuaf138.pdf to FM_12793581; corrected raw_path |

### Already ingested (no new source page needed)

| FM handle | Existing source page |
|---|---|
| FM_10196951 | amarh2023-ghana-infant-food-heavy-metals.md |
| FM_5355587 | akhtar2017-pakistan-infant-formula-nickel-aflatoxin.md |
| FM_11111292 | tatsuta2024-methylmercury-intake-children-duplicate-diet.md |

---

## Skip log (17 total)

### Long-name dedup copies skipped (3)

| FM handle (skipped) | Preferred handle | Reason |
|---|---|---|
| FM_12378713_Arsenic_speciation_using_HPLC-ICP-MS_in_white_and_brown_rice | FM_12378713 | Exact SHA256 duplicate; prefer short-form handle |
| FM_11111292_Dietary_intake_of_methylmercury_by_0-5_years_children_using | FM_11111292 | Exact duplicate; prefer short-form handle |
| FM_5940663_Infants_dietary_arsenic_exposure_during_transition_to_solid | FM_5940663 | Exact duplicate; prefer short-form handle |

### False positives reclassified P1→P5 (12)

The triage manifest's P1 heuristic (concentration keywords + food matrix + metal in first 4000 chars) produced false positives. These papers were screened and found not to be Path A concentration candidates:

| FM handle | Manifest cite key | Reason for reclassification |
|---|---|---|
| FM_12831472 | comprehensive2025-unknown-c | Paper content outside food/infant metals scope |
| FM_12945113 | effects2025-adding-sodium-diacetate | Mycotoxin/preservative study; not heavy metals in food |
| FM_11204095 | are2024-infants-children-risk | Not primary food concentration study |
| FM_11447910 | access2024-bisphenol-induces | Bisphenol/cardiac study; not heavy metals |
| FM_7731499 | preliminary2020-heavy-metals-low-cost | Low-cost jewelry/materials; not food |
| FM_12785589 | mapping2015-mapping-global-research | Research trends mapping; no concentration data |
| FM_1240527 | predictivexxxx-predictive-uterotrophic | Uterotrophic assay; not food metals |
| FM_8315274 | charlesxxxx-unknown | Not identifiable as food metals study |
| FM_12660678 | openxxxx-scientific-reports | Not food matrix study |
| FM_8585979 | openxxxx-exposure-infants-organochlorine | Organochlorine pesticides; not metals |
| FM_8921238 | open2017-scientific-reports-b | Not food concentration study |
| FM_3342545 | introduction2012-longitudinal-trace | Not relevant to infant food metals |

---

## New values.jsonl records (47)

Concentration values added for 8 sources with food/formula/ingredient concentration data:

| Source | Product matrix | Metals | Records |
|---|---|---|---|
| su2020-infant-formula-china-toxic-elements | infant-formula-powder-non-soy | Cr, tAs, Cd, Pb | 8 (mean+max × 4 metals) |
| zmudzinska2022-rte-baby-foods-poland | baby-foods-mixed | tAs, Cd, tHg, Pb | 8 (mean+max × 4 metals) |
| alharbi2023-baby-foods-saudi-arabia-heavy-metals | baby-cereals-dry-non-rice, infant-formula-powder-non-soy | tAs, Cd, Pb | 12 |
| jackson2012-brown-rice-syrup-arsenic | brown-rice-syrup, infant-formula-toddler | iAs | 4 |
| bandara2010-cadmium-rice-sri-lanka-crf | rice-grain | Cd | 2 |
| navaretnam-2025-rice-as-speciation | brown-rice, white-rice | iAs | 2 |
| napier2024-wanabana-lead-apple-cinnamon | fruit-purees | Pb | 1 (adulteration event) |
| henriquez-hernandez2023-baby-purees-spain-elements | fish-containing-baby-foods, fruit-purees, meat-and-poultry-purees | tAs, tHg, Pb, Ni | 7 |
| chronchol2026-dairy-free-infant-porridges-poland | baby-cereals-dry-non-rice | Pb, Cd | 2 |

Note: tAs in fish purees (henriquez-hernandez2023) is dominated by organic arsenobetaine from seafood; do not apply to iAs threshold calculations.

---

## Notable findings

**Lead adulteration vs background contamination:** The WanaBana recall (napier2024) demonstrates that Pb in fruit pouches can be 190–580× FDA action level due to deliberate adulteration of cinnamon with lead chromate. This is distinct from background agricultural Pb in apple puree. HMT&C spice sourcing protocols need to address lead chromate adulteration risk.

**Arsenic surge at rice cereal introduction:** Signes-Pastor 2018 documents a 480% increase in urinary DMA when rice cereal was introduced at weaning, with Spearman ρ=0.90 correlation between rice cereal intake and total urinary arsenic. This is the strongest biomarker evidence directly linking rice cereal to infant As exposure.

**Brown rice syrup concentrates iAs:** Jackson 2012 found OBRS iAs 51–89% of total As (vs more balanced in whole rice), with toddler formula containing OBRS reaching 15–25 µg/L iAs (reconstituted). Flag OBRS as a high-iAs ingredient in formula and cereal bar products.

**Breast milk metals — geographic extremes:** Bihar India (Kumar 2024) shows 55% of mothers with breast milk As above WHO limit (up to 458 µg/L); Sub-Saharan Africa (Onyena 2024) shows Cd 56× and Pb 13× higher in breast milk than Mediterranean Europe. These reflect environmental contamination extremes, not food product safety.

**Breastfeeding as protective factor:** Fångström 2008, Islam 2014, and Carignan 2015 all confirm that exclusive breastfeeding substantially reduces infant As exposure versus formula feeding, even when mothers have elevated As exposure. The key modifiable risk for formula-fed infants is preparation water quality.

---

## Open questions

1. **FM_11971891 (kumar2025 Hg Bihar):** Full concentration tables not available from Marker excerpt. A detailed read of the full paper is needed to extract specific breast milk Hg mean/median values.

2. **FM_10379829 (price2023 biokinetic modeling):** Specific blood Pb model outputs not extracted; needs full paper read to extract modeled blood Pb distributions for US infant age groups.

3. **P2 tier (488 papers):** Ready to begin after this commit.

---

## Manifest updates

- 12 false-positive P1 papers reclassified to P5 in raw/manifest/triage-manifest.csv
- P1 count reduced from 46 to 34 rows (31 valid short-form + 3 long-name dedup copies)
