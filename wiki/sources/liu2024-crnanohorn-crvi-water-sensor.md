---
type: source
raw_handle: FM_11396986
cite_key: liu2024-crnanohorn-crvi-water-sensor
title: "Electrochemical Sensor Based on Glassy Carbon Electrode Modified with Carbon Nanohorns (SWCNH) for Determination of Cr(VI) via Adsorptive Cathodic Stripping Voltammetry (AdCSV) in Tap Water"
authors: ["Liendo F", "Pichun B", "Paz de la Vega A", "Penagos J", "Serrano N", "Diaz-Cruz JM", "Pizarro J", "Segura R", "Aguirre MJ"]
year: 2024
publication: "Nanomaterials"
doi: "10.3390/nano14171465"
access_url: "https://doi.org/10.3390/nano14171465"
pmid: "39269127"
pmcid: "PMC11396986"
source_type: peer-reviewed
evidence_tier: A
license: "cc by"
raw_path: "deposits/SRC-liu2024-crnanohorn-crvi-water-sensor/10.3390_nano14171465.pdf"
raw_sha256: "a8f2e15f57b5ed2b6d1c4d5d5e868b211fcd80f18024c5dde3437c9c8bae39e7"
metals: [Cr]
products: []
ingredients: []
matrices: [analytical-method, tap-water]
jurisdictions: [CL]
sample_n: 2
sample_population: "Spiked tap water samples (n=3 replicate analyses per spike level) collected in Santiago, Chile; Cr(VI) was not detected in unspiked tap water by either AdCSV or FAAS."
sampling_locations: ["Santiago, Chile"]
sampling_year_range: null
ingest_status: complete
updated: 2026-11-07
evidence_fitness:
  supports:
    - "Electrochemical detection of Cr(VI) in tap water: LOD 3.5 µg/L, LOQ 11.6 µg/L, linear range 20 to 100 µg/L (Table 1; Section 3.4.1)"
    - "Validation of SWCNH/GCE sensor in spiked tap water: recoveries 105% and 110% at 20 and 30 µg/L Cr(VI) (Table 2)"
    - "Cr(VI) below LOD in unspiked Santiago tap water by both AdCSV and FAAS (Table 3)"
    - "Comparison of SWCNH/GCE analytical performance against published carbon-nanomaterial electrodes for Cr(VI) (Table 1)"
  does_not_support:
    - "Cr(VI) occurrence in food matrices or food-grade water"
    - "Total chromium or Cr(III) concentration in any matrix"
    - "Population dietary exposure to chromium"
    - "Regulatory compliance determinations; the LOD of 3.5 µg/L exceeds the WHO and EPA drinking water guideline values for total chromium in several frameworks"
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Electrochemical apparatus and glassy carbon electrode illustrating the SWCNH/GCE sensor study for Cr(VI) detection in tap water."
---

# Liendo et al. 2024 : Carbon nanohorn AdCSV sensor for Cr(VI) in tap water

## Overview

Liendo and colleagues at the Universidad de Santiago de Chile and Universitat de Barcelona developed a glassy carbon electrode modified with single-walled carbon nanohorns (SWCNH/GCE) for the electrochemical determination of hexavalent chromium (Cr(VI)) in tap water by adsorptive cathodic stripping voltammetry (AdCSV). The electrode was characterized by field emission scanning electron microscopy (FE-SEM) and cyclic voltammetry (CV). Chemical and electrochemical parameters were optimized and the method was validated against flame atomic absorption spectrophotometry (FAAS). The paper focuses exclusively on Cr(VI) speciation, not total chromium, which is the toxicologically and regulatorily relevant distinction: Cr(VI) is the genotoxic, carcinogenic species, whereas Cr(III) at low concentrations is an essential trace element.

The paper's contribution to the wiki is as an analytical methods reference demonstrating Cr(VI)-specific detection capability at concentrations relevant to drinking water surveillance and food-contact water quality. No food occurrence data for chromium are provided.

## Study design

The study developed and validated a modified electrode sensor. Electrode preparation used a drop-casting method: a 6.0 µL aliquot of a 1.0 mg/mL SWCNH suspension in N,N-dimethylformamide (DMF) was deposited on a polished GCE surface and dried under infrared light for 60 minutes. The resulting SWCNH/GCE electrode was used as the working electrode in a three-electrode system with Ag/AgCl (3.0 mol/L KCl) as reference and a Pt wire as auxiliary.

Analytical conditions were optimized by studying HCl supporting electrolyte concentration, SWCNH suspension volume, accumulation time, and accumulation potential. Final optimized conditions: 0.15 mol/L HCl supporting electrolyte; 6.0 µL SWCNH volume; accumulation potential (E_acc) 0.8 V versus Ag/AgCl; accumulation time (t_acc) 240 s. Square-wave AdCSV scanning from 0.8 V to 0.0 V; potential increments 4 mV; amplitude 25 mV; frequency 15 Hz.

Real sample validation used tap water collected in Santiago, Chile, spiked with 20.0 µg/L and 30.0 µg/L Cr(VI) standards in 0.15 mol/L HCl, analyzed in triplicate (n=3) by both SWCNH/GCE AdCSV and FAAS.

## Instrument

Electrochemical measurements: CH Instruments 619E potentiostat (Austin, TX, USA). FE-SEM: ThermoFisher Quanta FEG 250 (Waltham, MA, USA). FAAS reference measurements: Analytik Jena novAA 350 (Jena, Germany).

## Results

### Electrode characterization

FE-SEM confirmed spherical SWCNH agglomerates with an average diameter of 87 nm uniformly distributed on the GCE surface. EDX showed carbon as the predominant element with no metallic impurities, confirming catalyst-free synthesis. CV with 1.0 mmol/L [Fe(CN)6]3-/4- redox probe showed a 1.5-fold increase in cathodic and anodic peak currents for SWCNH/GCE versus bare GCE. Using the Randles-Sevcik equation, electroactive area increased from 0.10 +/- 0.01 cm2 (GCE) to 0.16 +/- 0.01 cm2 (SWCNH/GCE).

### Analytical performance (Section 3.4.1; Table 1)

| Parameter | Value |
| --- | --- |
| Linear range | 20 to 100 µg/L Cr(VI) |
| Calibration equation | y = 0.0649x - 0.461 |
| Correlation coefficient (R2) | 0.999 |
| LOD (3s/slope) | 3.5 µg/L Cr(VI) |
| LOQ (10s/slope) | 11.6 µg/L Cr(VI) |
| Repeatability (RSD, same electrode, n=10) | 6.5% |
| Reproducibility (RSD, 10 different electrodes) | 9.0% |

### Accuracy in spiked tap water (Table 2)

| Added Cr(VI) (µg/L) | Measured Cr(VI) (µg/L) | Recovery (%) |
| --- | --- | --- |
| 20.0 | 21.0 +/- 1.8 | 105 |
| 30.0 | 33.0 +/- 2.4 | 110 |

Recoveries of 105% and 110% meet AOAC International accuracy criteria. The Student t-test comparison of AdCSV and FAAS for spiked tap water gave t = 1.09, below the critical value of 4.30 at p = 0.05 (two degrees of freedom), confirming no significant statistical difference between the two methods.

### Real sample results (Table 3)

Unspiked Santiago tap water: Cr(VI) not detected (ND) by both AdCSV and FAAS, indicating concentrations below the LOD of 3.5 µg/L. The spiked tap water gave 33.0 +/- 2.4 µg/L by AdCSV and 31.4 +/- 0.7 µg/L by FAAS.

### Selectivity

Potential interferents tested individually at 10 and 100 µg/L: Fe(III), Cr(III), Mg(II), Zn(II), Ca(II), Cu(II), Co(II), Pb(II), Ni(II), Na(I), and K(I). At 10 µg/L (low interference level), most cations did not modify the Cr(VI) signal by more than the 10% tolerance limit, with variation exceeding 10% only for Ca, Pb, and Na. At 100 µg/L, variation exceeded 10% for all tested cations. The authors recommend the standard addition method to compensate for matrix interference at higher analyte concentrations.

## Methods summary

Reagents: analytical-grade; SWCNH from Sigma-Aldrich; DMF as dispersant; HCl as supporting electrolyte; K2CrO4 as Cr(VI) standard; ultrapure water from Milli-Q. Electrode preparation by drop-casting without metallic catalysts or complex multi-step functionalization. No certified reference material (CRM) was used; method accuracy was assessed by spiked recovery and comparison to FAAS.

## LOD/LOQ

LOD: 3.5 µg/L Cr(VI); LOQ: 11.6 µg/L Cr(VI). Both calculated as 3 and 10 times the standard deviation of the calibration curve slope, respectively (references 33 and 34 in the paper). No CRM was employed.

## CRM and recovery

No certified reference material was used. Accuracy was established by spiked tap water recovery (105% at 20 µg/L and 110% at 30 µg/L) and confirmed by FAAS cross-validation (t = 1.09, p = 0.05).

## Evidence fitness

This paper is an analytical methods study with no food occurrence data. Its contribution to the wiki is as a reference for Cr(VI)-specific electrochemical detection methodology and as evidence that tap water Cr(VI) can be monitored at the sub-WHO-guideline level using simple carbon nanomaterial electrodes. The LOD of 3.5 µg/L Cr(VI) is relevant context: WHO has no specific Cr(VI) drinking water guideline separate from the total chromium guideline (50 µg/L), while the US EPA total chromium MCL is 100 µg/L (10 µg/L for California Cr(VI)); the sensor's LOD falls between these reference points and would detect Cr(VI) if it exceeded approximately 3.5 µg/L.

The paper does not report Cr(VI) occurrence in food, food-contact water used in processing, or any biological matrix. It does not support inferences about dietary chromium exposure.

## Limitations

The linear range (20 to 100 µg/L) starts above the California Cr(VI) MCL of 10 µg/L and well above WHO and EU drinking water guidance values, limiting the sensor's utility for routine regulatory compliance monitoring without preconcentration. Interferents at 100 µg/L affected accuracy; the standard addition method is required. Only one real water matrix (Santiago tap water) was tested; matrix generalizability is unestablished. No CRM validation was performed.

## Regulatory context

Chromium(VI) is classified as a Group 1 human carcinogen by IARC. Regulatory limits for total chromium in drinking water: WHO 50 µg/L (guideline); US EPA MCL 100 µg/L total chromium; California MCL 10 µg/L Cr(VI)-specific (the first jurisdiction to set a Cr(VI)-specific limit). The FDA restricts total chromium in food to 1000 µg/kg. WHO and EPA restrict chromium in bottled water to 50 µg/L and 100 µg/L respectively. These regulatory values are cited in the paper's introduction (references 3 and 8) as the motivation for sensitive Cr(VI) detection methods.

## Implications for the wiki

This paper reinforces the Cr(VI) versus total chromium speciation distinction on [[metals/chromium-hexavalent]] and [[metals/chromium]]. It demonstrates that simple carbon nanomaterial electrodes can achieve Cr(VI) detection at concentrations between 3.5 and 100 µg/L in tap water, which is relevant for water quality monitoring supporting food processing operations. It provides no food occurrence data and does not alter contamination profile estimates for any food ingredient or product category.

## Related evidence

- [[metals/chromium-hexavalent]]
- [[metals/chromium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
