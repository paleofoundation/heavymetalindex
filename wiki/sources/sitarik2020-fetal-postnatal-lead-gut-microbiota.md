---
type: source
raw_handle: papers-cube
cite_key: sitarik2020-fetal-postnatal-lead-gut-microbiota
title: "Fetal and early postnatal lead exposure and the infant gut microbiota in a birth cohort"
authors: [Sitarik AR, Bobbitt KR, Havstad SL, Fujimura KE, Levin AM, Zoratti EM, Kim H, Johnson CC, Lynch SV, Ownby DR, Wegienka GR]
year: 2020
publication: "Environment International"
doi: 10.1016/j.envint.2020.106062
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND 4.0"
raw_path: "raw/Papers Cube Manual Fetch/article (1).pdf"
metals: [Pb]
ingredients: []
products: []
matrices: [tooth-dentin, stool, infant-gut-microbiome]
jurisdictions: [US]
near_duplicates: []
sample_n: 146
sample_population: "WHEALS (Wayne County Health, Environment, Allergy and Asthma Longitudinal Study) birth cohort, Detroit Metropolitan Area, Michigan; 146 mother-child pairs with both tooth-metal and gut microbiome data available (of 1,258 total enrolled)"
updated: 2026-05-14
---

Sitarik et al. (2020) used laser ablation ICP-MS (LA-ICP-MS) on deciduous teeth to reconstruct fetal and early postnatal lead exposure windows, then correlated those measures with gut microbiota composition (bacterial and fungal) at 1 month of age in 146 mother-child pairs from the Detroit-area WHEALS birth cohort. The primary finding is that second-trimester lead exposure was significantly associated with altered infant gut fungal community composition at 1 month, specifically lower abundances of Candida and Aspergillus and higher abundances of Malassezia restricta and M. globosa, as well as increased Saccharomyces; third-trimester lead also predicted lower Candida. At the bacterial level, second-trimester lead was associated with increased Collinsella aerofaciens and Bilophila and decreased Bacteroides, but no overall significant association with bacterial beta diversity was detected. This study establishes a link between in utero lead exposure and disruption of the early-life mycobiome, a relationship with potential implications for allergy and immune development.

## Key numbers

| Exposure window | Outcome | Association | Significance |
|---|---|---|---|
| 2nd trimester Pb | Fungal beta diversity (Bray-Curtis) | Significant | pFDR<0.05 |
| 2nd trimester Pb | Candida spp. abundance | Decreased | pFDR<0.05 |
| 2nd trimester Pb | Aspergillus spp. abundance | Decreased | pFDR<0.05 |
| 2nd trimester Pb | Malassezia restricta | Increased | pFDR<0.05 |
| 2nd trimester Pb | Malassezia globosa | Increased | pFDR<0.05 |
| 2nd trimester Pb | Saccharomyces spp. | Increased | pFDR<0.05 |
| 3rd trimester Pb | Candida spp. abundance | Decreased | pFDR<0.05 |
| 2nd trimester Pb | Collinsella aerofaciens (bacteria) | Increased | pFDR<0.001 |
| 2nd trimester Pb | Bilophila spp. (bacteria) | Increased | pFDR=0.023 |
| 2nd trimester Pb | Bacteroides spp. (bacteria) | Decreased | pFDR<0.05 |
| Any window Pb | Bacterial beta diversity (overall) | Not significant | NS |

Tooth lead LOD: 0.05 µg/g. Proportion of samples below LOD: approximately 2-7% across time windows. n=146 pairs contributed both tooth-metal and microbiome data (of 1,258 enrolled); the subset with tooth data had higher proportion of Black race and lower household income than full cohort, consistent with WHEALS demographics. Microbiome sampling: stool at 1 month. 16S rRNA sequencing (bacteria), ITS sequencing (fungi). Covariates: maternal education, antibiotic exposure, mode of delivery, breastfeeding, sex.

## Methods (brief)

Lead exposure assessed by LA-ICP-MS on deciduous teeth using established spatially resolved ablation protocols that resolve distinct developmental windows (prenatal, early postnatal) within the tooth dentin growth record. Each tooth position along the ablation path corresponds to a specific gestational or postnatal period, validated against known developmental chronology. Gut microbiota: stool at 1 month analyzed by 16S rRNA sequencing (bacterial, V4 region on Illumina MiSeq) and ITS1 sequencing (fungal); OTUs clustered at 97% similarity; diversity metrics: Shannon index, Bray-Curtis dissimilarity. Associations tested by PERMANOVA (beta diversity), negative binomial regression (taxon abundance), FDR-corrected for multiple testing.

## Implications

**Certification:** This paper does not directly report food product metal concentrations and does not contribute to HMT&C threshold setting. However, it provides mechanistic evidence that in utero lead exposure at sub-clinical levels disrupts early-life mycobiome composition, supporting the rationale for precautionary lead limits in foods consumed during pregnancy and early infancy.

**Courses:** Central paper for the microbiome-metals interaction module. The tooth-dentin LA-ICP-MS methodology is a teaching exemplar for reconstructing exposure windows retrospectively from biological archives. The mycobiome findings are underappreciated relative to bacterial microbiome findings and open an important discussion about fungal community disruption in early immune programming.

**App:** Not directly applicable to food contamination profiling (exposure measured via tooth dentin, not food). Provides mechanistic grounding for why early-life Pb exposure in food is a priority.

**Microbiome:** Primary evidence for [[microbiome/lead-gut-mycobiome]] crosswalk page. Key taxa affected by fetal Pb: Candida (-), Aspergillus (-), Malassezia restricta (+), Malassezia globosa (+), Saccharomyces (+), Collinsella aerofaciens (+), Bilophila (+), Bacteroides (-). Mechanism proposed: Pb-induced oxidative stress or immune-pathway disruption in developing gut mucosa alters initial fungal colonization during critical window. WikiBiome crosswalk: lead-gut mycobiome axis.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[microbiome/lead-gut-mycobiome]]
- [[health/vulnerable-populations]]
- [[testing/la-icp-ms]]
