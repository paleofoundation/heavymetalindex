---
type: source
raw_handle: FM_11311761
cite_key: chen2024-hg-gtriplex-biosensor-milk
title: "Comparison of Double-Stranded DNA at the 5-Prime and 3-Prime Ends of the G-Triplex and Its Application in the Detection of Hg(II)"
authors: [Cai Y, Wu Z, Li X, Hu X, Wu J, You Z, Qiu J]
year: 2024
publication: "International Journal of Molecular Sciences 25 (2024) 8159"
doi: "10.3390/ijms25158159"
access_url: "https://doi.org/10.3390/ijms25158159"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/markdown/FM_11311761/FM_11311761.md
metals: [tHg]
products: []
ingredients: ["[[ingredients/milk-and-dairy]]", "[[ingredients/whole-milk]]"]
matrices: [analytical-method, milk, tap-water]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "Spiked milk and tap water samples (20, 100, 250 nM Hg(II)) for analytical method validation; no unspiked occurrence measurements reported"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-11-07
ingest: SRC-chen2024-hg-gtriplex-biosensor-milk
---

# Cai et al. 2024: G-triplex/thioflavin T biosensor for mercury detection validated in milk and water

## Overview

Cai and colleagues at Zhejiang Sci-Tech University (Hangzhou, China) developed a label-free fluorescent biosensor for inorganic mercury (Hg(II)) detection based on a G-triplex DNA structure combined with thioflavin T (ThT) as the fluorescent indicator. The probe, designated G3MB6, adopts a hairpin conformation in the absence of Hg(II). When Hg(II) is present, it coordinates with thymine bases in an adjacent complementary DNA strand (cDNA-9) through T-Hg(II)-T mismatched pairs, disrupting the hairpin and inducing formation of a parallel G-triplex structure. ThT intercalates preferentially into the parallel G-triplex, generating a strong fluorescence signal at 505 nm under 430 nm excitation. The method was validated by spike-recovery in both milk and tap water. No unspiked occurrence measurements of mercury in milk are reported; all milk results are spiked.

## Study design

This is an analytical method development paper. The design has three phases: (1) optimization of probe architecture by systematic variation of dsDNA position (5' vs. 3' end of G3), gap bases between dsDNA and G3, hairpin stem length, and G3 base composition; (2) performance characterization including linear range, limit of detection (LOD), limit of quantification (LOQ), and selectivity against common metal ion interferences; and (3) matrix validation by spike-recovery in milk and tap water samples.

Instrument: Hitachi F-4500 fluorescence spectrometer; excitation 430 nm, emission recorded 450-650 nm with maximum at Em = 505 nm; slit widths 5 nm. Buffer: 50 mM Tris-HCl (50 mM KCl + 100 mM NaCl + 20 mM MgCl2, pH 7.6). Incubation: 25 degrees Celsius, 60 minutes for the G3MB6/cDNA-9 step, then 5 minutes after ThT addition.

## Key numbers

Analytical performance (Figure 5A-B and Table 1 of the paper):

| Parameter | Value |
| --- | --- |
| Linear range | 17.72-300 nM Hg(II) |
| Calibration equation | y = 1.219x + 13.55 (R2 = 0.9954) |
| LOD (3 sigma/slope) | 5.32 nM |
| LOQ (10 sigma/slope) | 17.72 nM |
| Selectivity tested | Ni(II), Mg(II), K(I), Fe(II), Fe(III), Co(II), Mn(II), Ca(II), Cu(II) at 600 nM |

The LOD of 5.32 nM converts to approximately 1.07 micrograms per litre (1.07 ppb as total Hg) using the molecular weight of mercury at 200.59 g/mol. The WHO guideline value for mercury in potable water cited in the paper is 1 microgram per litre (1 ppb), making the LOD marginally above that threshold. Only Hg(II) produced a significant fluorescence signal; the nine tested interfering ions at 600 nM produced no notable fluorescence responses.

Comparison with published label-free fluorescence methods for Hg(II) detection (Table 1 of the paper):

| Intercalator | Linear range (micromolar) | LOD (nM) | Reference |
| --- | ---: | ---: | --- |
| DAPI + NMM | 0-20 | 300 | [27] in source |
| DAPI | 0-1.4 | 2.87 | [16] in source |
| NMM | 0-1 | 18.6 | [28] in source |
| Berberine | 0-10 | 7.7 | [29] in source |
| Genefinder | 0-0.3 | 2.5 | [30] in source |
| ThT (prior work) | 0-4 | 20 | [31] in source |
| ThT (this work, G3MB6) | 0-0.3 | 5.32 | Cai et al. 2024 |

Spike-recovery in milk and tap water (Table 2 of the paper; n = 3 replicates per spiked concentration):

| Matrix | Spiked Hg(II) (nM) | Mean found (nM) | Recovery (%) |
| --- | ---: | ---: | ---: |
| Milk | 20 | 20.061 | 100.30 |
| Milk | 100 | 103.203 | 103.20 |
| Milk | 250 | 252.803 | 101.12 |
| Tap water | 20 | 20.334 | 101.67 |
| Tap water | 100 | 103.750 | 103.75 |
| Tap water | 250 | 256.359 | 102.54 |

Relative standard deviations (RSDs) were consistently below 5% for all replicates (n = 3). These recoveries indicate no significant matrix suppression or enhancement in milk under the assay conditions.

## Methods (brief)

The G3MB6 probe (guanine-rich oligonucleotide, 5'-TGCTAAGTCCCGAGCTATATGGGAAGGGAGGG-3') contains a G-triplex motif at its 3' end flanked by a hairpin stem. The complementary strand cDNA-9 (5'-AGCTTGGGTCTTTGCA-3') is T-rich and partially complementary to the 5' end of G3MB6. Without Hg(II), cDNA-9 leaves G3MB6 in hairpin conformation; ThT cannot intercalate and fluorescence is minimal. With Hg(II), T-Hg(II)-T base pairs form between cDNA-9 and the thymine residues in G3MB6's stem region, disrupting the hairpin and promoting parallel G-triplex formation, which strongly enhances ThT fluorescence at 505 nm.

Optimal assay conditions: G3MB6 125 nM, cDNA-9 150 nM (1:1.2 ratio), ThT 4 micromolar, buffer 50 mM Tris-HCl pH 7.6 (50 mM KCl, 100 mM NaCl, 20 mM MgCl2), 25 degrees Celsius, 60 min reaction, 5 min ThT equilibration, total assay volume 200 microlitres.

The method measures inorganic Hg(II) only. It does not speciate or measure methylmercury (MeHg). The recognition mechanism is specifically the T-Hg(II)-T coordination; organomercury species were not tested. No certified reference materials (CRMs) or interlaboratory comparison were reported. The paper does not describe sample pre-treatment steps for real milk samples beyond spiking Hg(II) stock solution into the matrix.

## Evidence fitness

This source provides context only for contamination profiling of milk. No naturally occurring mercury concentrations in milk were measured; all milk data are spiked standard additions. The recoveries (100.30%-103.20%) demonstrate adequate analytical performance in a milk matrix but carry no information about baseline mercury levels in commercial milk supplies.

The LOD of 5.32 nM (approximately 1.07 micrograms per litre) is marginally above the WHO drinking water guideline of 1 microgram per litre cited in the paper. Conversion for milk (density approximately 1 kg/L) gives LOD approximately 1.07 micrograms per kilogram wet weight, which is below the Codex Alimentarius maximum level of 10 micrograms per kilogram for mercury in milk.

## Limitations

Speciation: the method detects inorganic Hg(II) only via T-Hg(II)-T coordination. Methylmercury and other organomercury species were not tested and cannot be inferred. No certified reference materials were used. The paper does not describe sample digestion or extraction procedures for the milk matrix, limiting direct comparison with regulatory methods that require acid digestion. The number of milk spike replicates is small (n = 3 at three concentration levels). The linear range ceiling at 300 nM (approximately 60 micrograms per litre) is well above the range relevant for routine food safety monitoring, where contamination levels in milk are typically sub-10 micrograms per kilogram.

## Regulatory context

The Codex Alimentarius General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets a maximum level of 10 micrograms per kilogram (10 ppb) for total mercury in milk. The WHO guideline value for total mercury in drinking water is cited in this paper as 1 microgram per litre. No jurisdiction-specific regulatory maximum for mercury in milk is imposed by the assay or discussed by the authors beyond the WHO water guideline used as a LOD benchmark.

## Implications

Certification: not applicable. No occurrence data from commercial or environmental food sources are reported. The method is not a validated regulatory method. HMT&C analyte scope includes tHg; this paper provides no contamination occurrence data to constrain any tHg limit for dairy categories.

Courses: demonstrates G-triplex/ThT DNA-based fluorescence sensing using T-Hg(II)-T coordination chemistry. Useful for illustrating rapid-screening analytical approaches to mercury detection and the structural biology of G-triplex DNA. The paper's systematic comparison of dsDNA positioning (5' vs. 3' end of G3) and hairpin stem length provides mechanistic insight into G-triplex biosensor design principles.

App: no contamination profile data extractable.

Microbiome: not applicable.

## Related evidence

- [[metals/mercury]]
- [[ingredients/milk-and-dairy]]
- [[ingredients/whole-milk]]

## References

1. Cai Y, Wu Z, Li X, Hu X, Wu J, You Z, Qiu J. Comparison of Double-Stranded DNA at the 5' and 3' Ends of the G-Triplex and Its Application in the Detection of Hg(II). Int. J. Mol. Sci. 2024, 25, 8159. https://doi.org/10.3390/ijms25158159

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
