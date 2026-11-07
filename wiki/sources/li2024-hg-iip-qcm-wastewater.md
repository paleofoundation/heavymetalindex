---
type: source
raw_handle: FM_10934118
cite_key: li2024-hg-iip-qcm-wastewater
title: "Ion-Imprinted Polymer-Based Sensor for the Detection of Mercury Ions"
authors: [Low KM, Lin X, Wu H, Li SFY]
year: 2024
publication: "Polymers 16: 652"
doi: 10.3390/polym16050652
access_url: https://doi.org/10.3390/polym16050652
retrieval_date: "2026-11-07"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/deposits/SRC-li2024-hg-iip-qcm-wastewater/10.3390_polym16050652.pdf
raw_sha256: "be15746029c55171418abc894c7f417c494700bbd13dcf49edb7bc8492b6e3cf"
metals: [tHg]
products: []
ingredients: []
matrices: [analytical-method, water]
jurisdictions: [SG]
near_duplicates: []
sample_n: null
sample_population: "Laboratory sensor development study; no human or food population sampled. Real-sample validation used tap water and 10,000-fold diluted palm oil wastewater spiked with Hg2+."
evidence_fitness:
  supports: [analytical-method-mercury-detection, iip-qcm-sensor-development, mercury-wastewater-screening]
  does_not_support: [dietary-exposure, food-occurrence, food-contamination, toxicity-claims, regulatory-limits]
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: []
updated: 2026-11-07
ingest: SRC-li2024-hg-iip-qcm-wastewater
---

# Low et al. 2024: Ion-imprinted polymer QCM sensor for mercury detection in wastewater

## Overview

Low and colleagues at the National University of Singapore and Peking University Shenzhen Graduate School developed a mercury ion-imprinted polymer (IIP) combined with a quartz crystal microbalance (QCM) for detecting mercury(II) ions in wastewater. The core innovation is a novel fluorescein- and 2-aminophenol-functionalized methacrylic acid monomer synthesized specifically for its high binding affinity toward Hg2+. The IIP coating is applied to a gold QCM chip; adsorption of Hg2+ ions increases mass on the chip, causing a measurable decrease in resonant frequency governed by the Sauerbrey equation. The paper is published open access in Polymers (2024, vol. 16, article 652). No food matrices were analyzed; relevance to this index is as an analytical method paper for inorganic mercury detection in water matrices.

## Study design

The study is a laboratory sensor-development investigation. The experimental program proceeded in four phases: (1) synthesis and characterization of the fluorescein-based monomer and IIP; (2) selectivity and sensitivity testing against a panel of competing metal ions; (3) analytical figure-of-merit determination (LOD, LOQ, signal-to-noise ratio, working range, repeatability); and (4) real-sample validation using tap water and palm oil wastewater samples spiked with known Hg2+ concentrations. No environmental survey or occurrence study was conducted. No certified reference materials (CRMs) were analyzed.

## Samples

No food, biological, or dietary samples were analyzed. All quantitative analysis used reagent-grade mercury(II) sulfate (Sigma-Aldrich, greater than or equal to 99% purity) dissolved in deionized water. For real-sample analysis, tap water and 10,000-fold diluted palm oil wastewater from Singapore were spiked with 0, 0.1, 0.5, 1, and 2 ppm Hg2+. Sample size: five concentration levels per matrix (n = 5 per matrix). ICP/AES analysis of unspiked tap water and unspiked wastewater confirmed 0 ppb mercury in both matrices.

## Methods

**IIP synthesis.** The fluorescein-based monomer was synthesized by sequential functionalization of fluorescein with hydrazine, glyoxal, and 2-aminophenol using EDC as an activating agent and DMF as solvent, with reflux steps at 90 degrees C. The resulting monomer was dissolved in methanol for polymerization. IIP polymerization used methacrylic acid (MAA) as functional monomer, mercury(II) sulfate as template, EGDMA as cross-linker, AIBN as initiator, and ACN plus PVP as porogens in a 70 degrees C reflux for 3 hours. Template removal used 0.01 N nitric acid for 2 hours followed by washing with sodium sulfide (993.1 ppm) during the QCM procedure.

**QCM coating and operation.** QCM chips were 10 MHz, 14 mm gold crystal chips (RenLux Crystal Ltd., Shenzhen, China). IIP solution (9.6 µL) was coated on the chip surface and dried at room temperature for 2 hours. Two QCM instruments were used: a MIPS Offline QCM-D Analyzer (QCM-8; MIPS Innovations Pte Ltd., Jurong East, Singapore) and a Biolin Scientific QSense QCM-D Analyzer (Biolin Scientific, Gothenburg, Sweden). Flow rate was 200 µL/min. The 1st, 3rd, 5th, and 7th specific resonances were monitored. Chip regeneration between analyses used 993.1 ppm sodium sulfide flushing for 5 to 10 minutes followed by deionized water rinse until baseline stabilized.

**Non-imprinted polymer (NIP) control.** A NIP was synthesized identically but without mercury template ions, to verify that the Hg2+ response was imprinting-dependent rather than a nonspecific effect of the polymer matrix.

**Signal confirmation.** To confirm that the sensor response to Hg2+ was not an artifact of the low pH of Hg2+ solutions (pH 3.77 at 2 ppm), two pH-adjusted control solutions without mercury were analyzed: a sodium acetate buffer at pH 3.77 and deionized water adjusted to pH 3.77. Both controls showed frequency increases (2 Hz and 14 Hz respectively), confirming that pH contributed a minor positive interference but did not account for the full sensor response.

**ICP/AES verification.** Unspiked tap water and unspiked wastewater were independently analyzed by inductively coupled plasma/atomic emission spectrometry (ICP/AES) and confirmed to contain 0 ppb mercury.

LOD and LOQ values were calculated from the calibration curve slope and standard deviation using standard 3.3 sigma and 10 sigma criteria. CRM analysis was not reported.

## Results

**Selectivity.** The Hg-IIP showed high selectivity toward Hg2+ relative to other metal ions tested at 2 ppm concentration (Figure 4 of paper). The NIP showed approximately half the Hg2+ response of the Hg-IIP and no measurable response to many other ions including Zn2+ and Ni2+, confirming that ion-imprinting doubled the sensitivity. At equimolar concentrations (1 ppm each), competing metal ions reduced the Hg-IIP response by 5 to 15 Hz (5 to 15% reduction), with Zn2+ and Na+ causing the highest interference and Ca2+ causing the least (Table 1 of paper):

| Added interference (1 ppm each) | Decrease in frequency (Hz) |
|---|---|
| None (1 ppm Hg2+ only) | 100.1 |
| Cu2+ | 90.3 |
| Zn2+ | 85.5 |
| Pb2+ | 90.9 |
| Na+ | 85.4 |
| Ca2+ | 95.4 |
| Mg2+ | 90.7 |

At higher Na+ concentrations (10, 50, 100 times the Hg2+ concentration), the Hg2+ response was suppressed by 30% at 10x Na+ and by 40% at both 50x and 100x Na+, indicating a maximum suppression ceiling of 40% from Na+. For Zn2+, the maximum suppression was 20% regardless of Zn2+ concentration (10x, 50x, or 100x), indicating a 20% ceiling. Even at 100x excess of the interfering ion, a significant Hg-IIP response remained (Table 2 of paper).

**Calibration and working range.** The calibration curve for Hg2+ concentration versus decrease in resonant frequency was linear from 42.94 ppb (LOQ) to 2 ppm, with R2 = 0.9998 (Figure 5 of paper). Above 2 ppm the relationship was no longer linear.

**LOD, LOQ, and signal-to-noise ratio.** Calculated from calibration curve statistics:

| Parameter | Value |
|---|---|
| LOD | 14.17 ppb |
| LOQ | 42.94 ppb |
| S/N | 4.29 |
| Working range | 42.94 ppb to 2 ppm |

The authors note that the WHO guideline value for inorganic mercury in drinking water is 6 ppb, below the LOD of 14.17 ppb. The method cannot detect or quantify mercury at the WHO drinking water guideline and is better suited to applications involving higher mercury concentrations, such as wastewater screening.

**Repeatability.** Six consecutive analyses of a 1 ppm Hg2+ solution using the same QCM chip, flow cell, and sample solution gave %RSD = 4.84%, with a slight response decrease in runs 4 and 5 attributed to instrumental fluctuations. The authors characterize repeatability as "relatively good."

**Real-sample analysis.** Spiked tap water and 10,000-fold diluted palm oil wastewater were analyzed at 0, 0.1, 0.5, 1, and 2 ppm Hg2+. Both matrices showed R2 greater than 0.99 for concentration versus frequency response. The unspiked tap water and unspiked diluted wastewater both returned 0 ppb Hg2+, confirmed by ICP/AES. Response in diluted wastewater was higher than in tap water at equivalent Hg2+ concentrations (e.g., 60 Hz versus 25 Hz at 1 ppm), attributed to the 10,000-fold dilution reducing matrix effects in the wastewater samples.

**Stability.** After more than 20 QCM runs conducted over two weeks (repeatability, interference, and real-sample testing), the chip response to 1 ppm Hg2+ was 105.5 Hz compared to 110.1 Hz when freshly prepared, within the range of repeatability-test fluctuations. The authors conclude the chip was stable over two weeks but note that long-term stability over months or years requires further evaluation.

## Instrument

MIPS Offline QCM-D Analyzer (QCM-8; MIPS Innovations Pte Ltd., Jurong East, Singapore) and Biolin Scientific QSense QCM-D Analyzer (Biolin Scientific, Gothenburg, Sweden). ICP/AES used for independent sample verification (instrument model not specified). Gold QCM chips: 10 MHz, 14 mm, RenLux Crystal Ltd., Shenzhen, China.

## LOD/LOQ

LOD: 14.17 ppb. LOQ: 42.94 ppb. Calculated from calibration slope and standard deviation using 3.3 sigma (LOD) and 10 sigma (LOQ) criteria.

## CRM recovery

Not reported. No certified reference materials were analyzed.

## Mechanistic context

The sensor operates on the converse piezoelectric effect. The IIP coating adsorbs Hg2+ ions, increasing mass on the QCM chip and decreasing its resonant frequency. The mass-frequency relationship is governed by the Sauerbrey equation. Ion imprinting creates specific recognition cavities complementary to Hg2+ in size, shape, and coordination chemistry, using the mercury(II) sulfate template. The fluorescein- and 2-aminophenol-functionalized ligand provides coordination binding pockets with high affinity for Hg2+. Chip regeneration uses sodium sulfide (S2-), which forms a highly stable complex with Hg2+, displacing it from the IIP binding sites and enabling reuse. The authors report the sensor is approximately 100-fold more durable than most previously reported Hg2+ sensors.

## Evidence fitness

This source supports context on IIP-QCM analytical methods for inorganic mercury detection, the selectivity characteristics of fluorescein-based mercury-imprinted polymers, achievable LOD and LOQ values for piezoelectric mass sensing of Hg2+, and the limitation of this method class relative to the WHO drinking water guideline for mercury (6 ppb). It does not support any claim about mercury concentrations in food, dietary mercury exposure, food contamination occurrence, or mercury toxicology. No food matrices were analyzed.

## Limitations

The LOD of 14.17 ppb and LOQ of 42.94 ppb exceed the WHO guideline for inorganic mercury in drinking water (6 ppb), limiting application to detection of elevated mercury concentrations rather than compliance monitoring at guideline levels. Real-sample analysis used only two matrices (tap water and palm oil wastewater), both from Singapore, with n = 5 concentration levels per matrix. No field samples with known mercury concentrations were analyzed; only spiked controls. Stability data cover only two weeks and more than 20 runs; long-term stability under varying temperature and salinity conditions was not evaluated. Interlaboratory reproducibility was not assessed. Interference from Na+ can suppress the response by up to 40% at high sodium concentrations typical of some environmental matrices. CRM analysis was not conducted. Funded by the National Research Foundation Singapore and PUB (Singapore's National Water Agency) under grant PUB-1804-0076, and the Shenzhen Research Program (KCXFZ20201221173010028, China); no competing financial interest declared.

## Regulatory context

The WHO guideline for inorganic mercury in drinking water is 6 ppb [reference 21 in paper]. The Hg-IIP-QCM LOD of 14.17 ppb exceeds this value; the method cannot detect mercury at the WHO drinking water guideline and is acknowledged by the authors as unsuitable for drinking water compliance monitoring at current sensitivity. No food regulatory limits are discussed in the paper.

## Related evidence

- [[metals/mercury]]

<!-- BEGIN: hmi-page-history -->
## Update history

Rebuilt 2026-11-07 from open-access PDF (DOI: 10.3390/polym16050652; SHA256: be15746029c55171418abc894c7f417c494700bbd13dcf49edb7bc8492b6e3cf; PMC: PMC10934118). Prior version had 73 prose words and was flagged as thin by audit_sources.py on 2026-11-03. Sections added: study_design, samples_n, results_values, methods, instrument, lod_loq, crm_recovery, evidence_fitness, limitations, regulatory_context.
<!-- END: hmi-page-history -->
