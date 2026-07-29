---
type: source
raw_handle: RPMEHG_10-3389-fmicb-2021-628426
cite_key: authors2026-biomarkers-of-type-2-diabetes-from
title: "Biomarkers of Type 2 Diabetes From"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.3389/fmicb.2021.628426
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.3389/fmicb.2021.628426"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/Diabetes Type I/Microbial biomarkers Diabetes Type I/Discovering Potential Taxonomic Biomarkers of Type 2 Diabetes From Human Gut Microbiota via Different Feature Selection .pdf"
raw_sha256: "519c88a697874b11e369dc9536c49a3c28c924ad564105aa85e0227b74a5feb7"
metals: [Pb, Al, Cr]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - Biomarkers of Type 2 Diabetes From

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Burcu Bakir-Gungor 1* , Osman Bulut 1 , Amhar Jabeer 1 , O. Ufuk Nalbantoglu 2 and
- Malik Yousef 3,4
- Department of Computer Engineering, Faculty of Engineering, Abdullah Gül University, Kayseri, Turkey, 2 Department
- of Computer Engineering, Genome and Stem Cell Center, Erciyes University, Kayseri, Turkey, 3 Department of Information
- Systems, Zefat Academic College, Zefat, Israel, 4 Galilee Digital Health Research Center, Zefat Academic College, Zefat,
- Academy of Agricultural Sciences, disease-associated metagenomics datasets. Type 2 diabetes (T2D) is a chronic disease
- technique that can accelerate T2D diagnosis. In this study, using T2D-associated
- Burcu Bakir-Gungor metagenomics data, we aim to develop a classification model to facilitate T2D
- burcu.gungor@agu.edu.tr diagnosis and to discover T2D-associated biomarkers. The sequencing data of T2D
- Received: 11 November 2020 as Conditional Mutual Information Maximization, Maximum Relevance and Minimum
- Accepted: 03 May 2021 Redundancy, Correlation Based Feature Selection, and select K best approach. To
- different methods, we used random forest classifier with 100-fold Monte Carlo cross-
- Jabeer A, Nalbantoglu OU and validation. In our experiments, we observed that 15 commonly selected features have
- Yousef M (2021) Discovering Potential
- Diabetes From Human Gut Microbiota T2D and thus reducing the time and cost. When we perform biological validation of
- via Different Feature Selection these identified species, we found that some of them are known as related to T2D
- Front. Microbiol. 12:628426.
- doi: 10.3389/fmicb.2021.628426 Additionally, we attempted to find the subgroups of T2D patients using k-means
- Frontiers in Microbiology | www.frontiersin.org 1 August 2021 | Volume 12 | Article 628426
- Bakir-Gungor et al. Biomarkers of T2D Using ML
- learning algorithms to increase the diagnostic accuracy of T2D, investigates potential
- biomarkers of T2D, and finds out which subset of microbiota is more informative than
- Keywords: feature selection, metagenomic analysis, classification, machine learning, type 2 diabetes, human gut
- INTRODUCTION regulation (Fernandez-Mejia, 2005; Albarracin et al., 2008; Lazo
- de la Vega-Monroy et al., 2013).
- system. They provide energy, break down foreign matters, T2D is essential. For example, Karlsson et al. (2013) emphasize
- and amounts of microorganisms is crucial for human health and of variation, they worked on such data that consist of 145
- human disorders (Valdes et al., 2018). With the help of new women who are 70 years old. Interestingly, they found that
- other words, we can measure their amount in our gut more species are decreased in the microbiomes of the T2D patients.
- easily than ever before. Hence, we can try to go after some They got 0.83 AUC with a metagenomics cluster level. Increased
- correlation signs between these creatures and human diseases. Clostridium clostridioforme and decreased Roseburia in T2D
- Type 2 diabetes (T2D) is one of such diseases, which affects patients are common findings of Karlsson et al. (2013) and Qin
- millions of people around the world. Approximately 9–11% of et al. (2012). Larsen et al. (2010) and Lê et al. (2013) also found
- people in the United States and China have T2D. Four hundred that Lactobacillus species are increased in T2D patients.
- sixty-three million people in the world, who are older than 20, Forslund et al. (2015) presented a different perspective such
- have diabetes. One of three people in the United States, who that the possible effects of the T2D drugs on the human gut
- are older than 20, has prediabetes. Seventy percent of these microbiome also need to be taken into account. They also
- 2003; National Diabetes Clearinghouse, 2011; Tabak et al., 2012; from the medications that patients use. Forslund et al. (2015),
- Diabetes.co.uk, 2019; International Diabetes Federation, 2019; Wu et al. (2017), and Sun et al. (2018) show the effects of
- Centers for Disease Control and Prevention, 2020). the most commonly used anti-T2D drug metformin. But they
- Several studies have been conducted on human microbiota also found that metformin-untreated T2D is still associated with
- et al., 2009; Vrieze et al., 2012; Trøseid et al., 2013; Boulangé butyrate-producing species for glucose health is also emphasized

## Methods (brief)

- regulating the variations of our gut microbiota by doing dietary T2D samples and healthy samples generated a 0.78 AUC score.
- changes. After the meal, even the glycemic action type of a body Zhong et al. (2019) worked on 254 samples of Chinese cohort.
- only nominal increases in Escherichia/Shigella happen in the data of 290 human samples. The raw sequencing data of
- microbiomes of T2D patients. Also, medications and dietary samples were obtained from the repository provided by
- rhythms in their microbiome. They show that arrhythmic samples were assigned to its microbial species of origin (taxa)
- of T2D, and they found that 13 arrhythmic bacterial species sample was inferred accordingly. These taxa and their relative
- meals per day) are independent of gut microbiota composition 290 samples and 1,455 microbial species. One hundred thirty-
- (Reitmeier et al., 2020). five of the samples are T2D patients, and 155 are healthy.
- microbiome studies and reviewed popular feature selection, relative abundance values of each species for each sample are
- strategies. In this review, the most widely used machine learning including bacteria, viruses, and archea. The samples have one
- dataset via some feature selection algorithms such as Fleuret’s control samples.
- Sample 1 0.334 0 0 0 0 (Healthy)
- Sample 2 0.141 0 0 0.632 0.03 1 (T2D patient)
- The relative abundance values of each species for each sample are shown in this dataset. The features correspond to different species including bacteria, viruses, and
- archea. The samples have one of the two class labels, i.e., healthy (shown with 0) and T2D patient (shown with 1).
- algorithm is applied on data to specify subgroups of patients and control samples.
- algorithm and subgrouped the healthy samples and sick samples patients (sick0 in Figure 6B). (iv) Similarly, Subdoligranulum
- generate four subgroups for healthy samples and four subgroups in three of the healthy groups (healthy 0, 1, and 2), compared to

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/aluminum]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
