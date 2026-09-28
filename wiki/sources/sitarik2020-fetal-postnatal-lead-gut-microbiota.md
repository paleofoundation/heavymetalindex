---
type: source
raw_handle: papers-cube
cite_key: sitarik2020-fetal-postnatal-lead-gut-microbiota
title: "Fetal and early postnatal lead exposure measured in teeth associates with infant gut microbiota"
authors: [Sitarik AR, Arora M, Austin C, Bielak LF, Eggers S, Johnson CC, Lynch SV, Park SK, Wu KH, Yong GJM, Cassidy-Bushrow AE]
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
sample_population: "WHEALS (Wayne County Health, Environment, Allergy and Asthma Longitudinal Study) birth cohort, Wayne and Oakland counties, Michigan (Detroit metropolitan area); 1,258 maternal-child pairs enrolled 2003-2007, of whom 180 had tooth metals quantified and 146 also had early-life microbiome data available."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# Sitarik et al. 2020 — Fetal and early postnatal lead exposure in teeth and infant gut microbiota

## Overview

Sitarik and colleagues used laser ablation inductively coupled plasma mass spectrometry (LA-ICP-MS) on shed deciduous teeth to retrospectively quantify lead exposure across three developmental windows (2nd trimester, 3rd trimester, and postnatal birth-to-~1-year), then tested those exposure measures against bacterial (16S rRNA) and fungal (ITS2) gut microbiome composition in stool collected at 1 month and 6 months of age in 146 maternal-child pairs from the Detroit-area WHEALS birth cohort. In utero tooth lead levels were significantly associated with infant gut fungal community composition at 1 month — higher 2nd-trimester lead with lower abundances of Candida and Aspergillus and higher abundances of Malassezia and Saccharomyces — and 3rd-trimester lead with lower Candida. Lead did not significantly alter overall bacterial community structure, but specific bacterial taxa associated with lead exposure: higher Collinsella (at 1 month) and Bilophila (at 6 months), and lower Bacteroides at both time points.

## Key numbers

Tooth lead quantification by LA-ICP-MS, expressed as ²⁰⁸Pb:⁴³Ca ratios (calibrated against NIST SRM 612). LOD: 0.05 µg/g; ~2–7% of lead measurements were below LOD across time points and were excluded from analysis (Methods §2.6). Lead levels were standardized to one-standard-deviation increases for regression modelling. All associations below are adjusted for tooth type, attrition, batch, exact age at stool sample collection, and child race; reported p-values are FDR-corrected (Benjamini-Hochberg).

Cohort flow: 1,258 maternal-child pairs in WHEALS → 512 teeth donated → 203 children with teeth → 180 children with both quality-controlled metal measurements and either birth-outcome or 2-year-clinic-visit data → 146 with both tooth metals and early-life microbiome data. Of the 146, 35 had 1-month bacterial microbiota only, 35 had 6-month only, and 68 had bacterial data at both time points; for fungal data the subset sizes were 33 / 29 / 19, respectively (a 53% ITS2 amplification failure rate is reported by the authors as the cause of the smaller fungal subset). Mean (SD) stool collection age: 1-month visit 38 ± 16 days (range 16-107); 6-month visit 205 ± 27 days (range 172-290).

**Fungal genera significantly associated with tooth lead (FDR-corrected; from text §3.3 and Fig. 1):**

| Genus | Time of stool sample | Exposure window | Direction | pFDR |
|---|---|---|---|---|
| Candida | 1 month | 2nd trimester | Decreased | 0.006 |
| Candida | 1 month | 3rd trimester | Decreased | 0.003 |
| Aspergillus | 1 month | 2nd trimester | Decreased | 0.002 |
| Aspergillus | 1 month | Postnatal | Decreased | <0.001 |
| Penicillium | 6 months | Postnatal | Decreased | 0.002 |
| Malassezia | 1 month | 2nd trimester | Increased | 0.002 |
| Malassezia | 1 month | Postnatal | Increased | 0.013 |
| Malassezia | 6 months | 2nd trimester | Increased | <0.001 |
| Malassezia | 6 months | Postnatal | Increased | <0.001 |
| Saccharomyces | 1 month | 2nd trimester | Increased | 0.006 |
| Saccharomyces | 6 months | 2nd trimester | Decreased | 0.006 |

The positive Malassezia signal was attributable to Malassezia restricta and Malassezia globosa OTUs; the negative Candida signal was attributable to a Candida parapsilosis OTU (Supplemental Table 1).

**Bacterial genera significantly associated with tooth lead (FDR-corrected; from text §3.2 and Fig. 1):**

| Genus | Time of stool sample | Exposure window | Direction | pFDR |
|---|---|---|---|---|
| Collinsella | 1 month | 2nd trimester | Increased | <0.001 |
| Collinsella | 1 month | 3rd trimester | Increased | 0.022 |
| Bilophila | 6 months | 2nd trimester | Increased | 0.023 |
| Bilophila | 6 months | 3rd trimester | Increased | 0.008 |
| Bacteroides (multiple OTUs) | 1 and 6 months | In utero and postnatal | Decreased | <0.05 (Suppl Table 1) |

The Collinsella signal was driven by four Collinsella aerofaciens OTUs.

**Beta diversity (PERMANOVA, Table 3):** In utero and postnatal lead did not significantly explain overall bacterial beta diversity by any of unweighted UniFrac, weighted UniFrac, Bray-Curtis, or Canberra distances at 1 or 6 months. Fungal beta diversity by Bray-Curtis was significantly associated with 2nd-trimester lead (p=0.048 at 1 month) and 3rd-trimester lead (p=0.049 at 1 month), explaining approximately 4% of variability in community composition.

**Alpha diversity (Table 2):** No significant associations between any lead exposure window and bacterial or fungal alpha diversity metrics (richness, evenness, Faith's phylogenetic diversity, Shannon's diversity) at either time point after covariate adjustment.

**Cohort lead-level predictors (Table 1):** Among the 146-pair analysis subset, higher tooth lead levels at all three time points were significantly associated with Black race (all p < 0.001), urban residence (p = 0.024, 0.005, 0.003 for 2nd trimester, 3rd trimester, and postnatal respectively), and lower birthweight z-score (p = 0.021, 0.019, 0.036). Absence of a household pet during pregnancy was associated with higher 3rd-trimester lead (p = 0.019) and trended for 2nd-trimester lead (p = 0.058); the postnatal-window association was not significant (p = 0.19). After adjustment for race, the residence and prenatal-pet associations were attenuated (all p ≥ 0.067). Birthweight z-score remained associated and is flagged by the authors as a potential mediator rather than a confounder.

## Methods (brief)

Tooth lead by LA-ICP-MS on sectioned deciduous teeth using an ArF excimer laser ablation system (ESI, USA) coupled to an Agilent Technologies 8800 triple-quadrupole ICP-MS. The neonatal line — a histological feature formed in enamel and dentine at the time of birth — and incremental growth markings were used to assign 2nd-trimester, 3rd-trimester, and postnatal (birth–~1 year) exposure points along the ablation path, per Arora et al. 2012/2014. Data are reported as ²⁰⁸Pb:⁴³Ca ratios to correct for mineral-content variation within and between teeth. NIST SRM 612 was used for calibration and quality control. LOD = 0.05 µg/g; ~2-7% of measurements below LOD were excluded. Tooth-attrition wear was quantified and adjusted for. Within-child quality control on N = 17 children with two teeth gave second-trimester ICC = 0.55, third-trimester ICC = 0.74, and postnatal ICC = 0.87.

Stool collected at home visits at approximately 1 month and 6 months of age, banked at –80 °C. Bacterial 16S rRNA V4 region amplified using F515/R806 primers and sequenced on Illumina NextSeq (40% PhiX, 12.5 pM, 5 pM loading per cartridge). Fungal internal transcribed spacer 2 (ITS2) region amplified using fITS7/ITS4 primers and sequenced on Illumina MiSeq (25% PhiX, 10 pM). Reads quality-filtered (USEARCH v8.0.1623, > 2 expected errors removed), dereplicated, clustered at 97% identity into OTUs (UPARSE), taxonomy assigned via Greengenes (16S) and UNITE v7.0 (ITS). Rarefaction depth 60,000 reads/sample for 16S; multiply-rarefying to 1,000 reads for ITS to maximize sample inclusion given lower amplification success (53% ITS amplification failure rate, common for early-life cohorts).

Statistical analysis: Kruskal-Wallis (categorical) and Spearman (continuous) for tooth-lead-by-covariate associations. Covariate-adjusted linear regression for alpha diversity; covariate-adjusted PERMANOVA for beta diversity (vegan R package); covariate-adjusted zero-inflated negative binomial regression (pscl) — or negative binomial (MASS) where ZINB failed to converge — for differential genus/OTU abundance, restricted to taxa found in ≥ 10% of samples. FDR correction (Benjamini-Hochberg) applied at p < 0.05. Models adjusted for tooth type, attrition, batch, exact age at stool sample, and child race. Software: SAS 9.4 and R 3.6.1.

Limitations stated by authors: small analytical sample (n = 146), particularly for fungal microbiota (n ≈ 48 at 1 month, ~45 at 6 months); residual confounding plausible (race adjustment alone may be insufficient; birthweight z-score plausibly a mediator); no metagenomic sequencing so functional capacity not assessed; observational design so causality not established; reverse causation cannot be fully ruled out for fetal-microbiota mechanism.

## Implications

**Certification:** Does not directly measure food contamination and therefore does not contribute numerical inputs to HMT&C threshold-setting. Provides mechanistic biomarker evidence linking in utero and early postnatal lead exposure to early-life gut microbiome composition, relevant to vulnerable-population framing (pregnancy and infancy) used in the wiki's lead exposure discussion.

**Courses:** Methodological exemplar for retrospective exposure-window reconstruction via LA-ICP-MS on deciduous teeth, with concrete reporting of ICCs (0.55–0.87) across developmental windows that illustrates how reliability varies with tooth-developmental chronology. The fungal-microbiome finding is unusual in the lead-exposure literature, which has overwhelmingly focused on bacterial communities; useful as a case study of how mycobiome work expands the "metals and microbiome" frame.

**App:** Not directly applicable to food-contamination profiling. Provides exposure-source context: the WHEALS cohort lead exposures captured here are integrated biomarker measures, not food-specific.

**Microbiome:** Single-paper evidence for lead → mycobiome and lead → specific bacterial taxa axes. Fungal genera affected by fetal Pb (relative to controls): Candida (−), Aspergillus (−), Penicillium (− postnatally at 6 months), Malassezia restricta and M. globosa (+), Saccharomyces (+ at 1 month / − at 6 months). Bacterial genera affected: Collinsella aerofaciens (+ at 1 month), Bilophila (+ at 6 months), and several Bacteroides OTUs (−). Candidate for WikiBiome federation as a primary source on lead-mycobiome interactions in human infants.

## Related evidence

- [[microbiome/lead-gut-mycobiome]]
- [[health/vulnerable-populations]]
- [[metals/lead]]
- [[testing/la-icp-ms]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
