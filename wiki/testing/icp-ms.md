---
title: ICP-MS — Inductively coupled plasma mass spectrometry
type: testing-method
method: ICP-MS
analyte_class: trace-elements
metals_addressed: [Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Sn, Sb, U]
matrix_types: [food, water, biological-tissue, infant-formula, soil]
audience: [regulator, educator, researcher, qa, app]
updated: 2026-05-04
sources: 0
---

# ICP-MS — Inductively Coupled Plasma Mass Spectrometry

Inductively coupled plasma mass spectrometry is the dominant analytical method for trace heavy metal quantification in food, water, biological tissue, and soil matrices, and is the operative measurement underpinning nearly all post-2000 regulatory occurrence datasets cited in this wiki. ICP-MS combines the high ionization efficiency of an argon inductively coupled plasma source with the high mass resolution of a mass spectrometer, producing simultaneous multi-element detection at sub-parts-per-billion concentrations across most of the periodic table. The wiki cites ICP-MS measurements throughout — the [[sources/efsa-cadmium-contam-2009|EFSA cadmium]], [[sources/efsa-nickel-contam-2020|EFSA nickel]], [[sources/codex-cxs-193-1995|Codex CXS 193-1995]], FDA Total Diet Study, and most peer-reviewed occurrence studies in the corpus rest on ICP-MS-derived concentration values.

## Principle

A liquid sample (typically the digested form of a food, tissue, or water matrix) is introduced to the instrument as an aerosol via a nebulizer. The aerosol enters an argon plasma operating at approximately 6,000 to 10,000 K, which atomizes and ionizes the sample components. Singly-charged ions are extracted through a sampler-and-skimmer interface into a mass analyzer (most commonly a quadrupole, with sector-field and time-of-flight instruments available for higher-resolution applications), where they are separated by mass-to-charge ratio and detected by an electron multiplier. The resulting signal is proportional to elemental concentration after calibration against certified reference standards.

The technique's combination of high ionization efficiency (greater than 90 percent for most elements with first ionization energies below the argon ionization potential of 15.76 eV), wide linear dynamic range (six to nine orders of magnitude for most elements), and isotopic mass discrimination (which permits internal-standard correction and isotope-dilution quantification) is what makes ICP-MS the reference method for trace heavy metals in food.

## What ICP-MS measures (and what it doesn't)

ICP-MS measures total elemental concentration. The plasma destroys all chemical structure during atomization, so ICP-MS alone cannot distinguish between oxidation states, between organic and inorganic species, or between cofactor-bound and free forms of an element. For heavy metals where speciation matters operationally, ICP-MS must be hyphenated with a chromatographic separation upstream:

- HPLC-ICP-MS is the standard configuration for arsenic speciation, separating inorganic arsenic (the regulatorily-relevant species per [[regulations/fda-iAs-rice-cereal-100ppb|FDA iAs action levels]]) from organic forms (arsenobetaine in seafood, dimethylarsinic acid, monomethylarsonic acid). [[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]] documents an HPLC-ICP-MS method for rice arsenic speciation with retention time under 4 minutes.
- HPLC-ICP-MS is similarly used for mercury speciation (methylmercury versus inorganic mercury), chromium speciation (Cr(III) versus the more-toxic Cr(VI)), and selenium speciation.

Where total content is the regulatory operative parameter (cadmium under [[regulations/codex-cadmium-mls|Codex MLs]], lead under FDA Closer to Zero, nickel under [[regulations/efsa-nickel-tdi|EFSA TDI]] dietary intake calculations), ICP-MS without hyphenation is the appropriate method.

The iAs-versus-tAs distinction is non-negotiable in this wiki per CLAUDE.md Part 14 conventions; an occurrence study reporting "total arsenic" by ICP-MS without HPLC-ICP-MS speciation is not a substitute for an inorganic-arsenic measurement and should be tagged accordingly on the source page.

## Typical limits of detection and quantification

LOD and LOQ values for ICP-MS in food matrices are method-dependent (digestion protocol, sample dilution, instrument tune, integration time) and matrix-dependent (some matrices produce greater spectral interference than others). The values below are representative ranges for routine quadrupole ICP-MS operation on acid-digested food samples; specific method validations report more conservative or more sensitive values depending on configuration.

| Element | Typical LOD in food (µg/kg) | Typical LOQ (µg/kg) | Notes |
| --- | --- | --- | --- |
| Pb (lead) | 0.5 to 5 | 1.5 to 15 | ²⁰⁸Pb is the routine analytical isotope; minimal polyatomic interference. |
| Cd (cadmium) | 0.5 to 5 | 1.5 to 15 | ¹¹¹Cd or ¹¹⁴Cd; ¹¹⁴Cd has ¹¹⁴Sn interference. |
| iAs/tAs (arsenic) | 1 to 10 | 3 to 30 | ⁷⁵As; argon-chloride (⁴⁰Ar³⁵Cl) is the dominant interference, requires collision/reaction cell or DRC. HPLC-ICP-MS speciation needed for iAs vs tAs. |
| MeHg/tHg (mercury) | 0.5 to 5 | 1.5 to 15 | ²⁰²Hg or ²⁰⁰Hg; mercury "memory effect" requires dedicated washout. HPLC-ICP-MS or cold-vapor AFS for MeHg speciation. |
| Ni (nickel) | 5 to 50 | 15 to 150 | Polyatomic interferences from ⁴⁰Ar²³Na and others on ⁵⁸Ni and ⁶⁰Ni; collision cell typically used. |
| Al (aluminum) | 5 to 50 | 15 to 150 | ²⁷Al; high blank levels are common (aluminum is ubiquitous in lab plasticware and reagents). |
| Cr (chromium) | 1 to 10 | 3 to 30 | ⁵²Cr has ⁴⁰Ar¹²C interference; ⁵³Cr is alternative. Cr(VI) speciation requires HPLC-ICP-MS. |
| Sn (tin) | 5 to 50 | 15 to 150 | ¹¹⁸Sn or ¹²⁰Sn; ¹²⁰Te interference on ¹²⁰Sn. |

Specific LOD/LOQ values used in regulatory or peer-reviewed occurrence studies cited in the wiki are recorded on each source page where the source documents them. Occurrence studies that do not state per-analyte LOD/LOQ are flagged on their source pages as having a methodological gap.

## Sample preparation

Sample preparation for ICP-MS dominates total method variability and is the most common source of methodological inconsistency across occurrence studies in the corpus. The principal sample-prep stages are:

1. **Digestion.** Closed-vessel microwave digestion with concentrated nitric acid (HNO₃), often with hydrogen peroxide (H₂O₂) added, is the reference method for food-matrix digestion. The closed-vessel format prevents volatile-element loss (notably mercury, but also some arsenic species at high temperature). Open-vessel hot-plate digestion is still in use in some laboratories but produces lower recoveries for volatile elements and is method-validation-dependent.

2. **Acid choice.** Nitric acid is universal. Hydrochloric acid (HCl) increases mercury and chromium recovery but introduces argon-chloride polyatomic interference on arsenic detection (⁴⁰Ar³⁵Cl⁺ overlaps ⁷⁵As⁺), requiring collision-cell operation or sample-introduction modification. Hydrofluoric acid (HF) is required for full silicate-matrix digestion (relevant for some soil and certain plant samples) but introduces handling and instrument-corrosion considerations.

3. **Dilution.** Digested samples are diluted to a target acid concentration (typically 2 to 5 percent nitric acid) and a target solid-content concentration (typically less than 0.5 percent) to minimize matrix effects on the plasma and to extend instrument lifetime.

4. **Internal standardization.** Indium (¹¹⁵In) and rhodium (¹⁰³Rh) are common internal standards for the trace-metal mass range; bismuth (²⁰⁹Bi) for the heavy-mass range. Internal standards correct for drift in nebulizer efficiency, plasma stability, and ion-transport efficiency.

5. **Calibration.** Multi-element calibration standards traceable to NIST or equivalent reference materials are run at the start of each batch. Certified reference material (CRM) recovery checks (rice CRM, milk powder CRM, fish tissue CRM, depending on matrix) are the operational quality-control anchor for occurrence studies and are documented in source-page method sections where the contributing study reports them.

## Cost and throughput

Capital cost of a routine quadrupole ICP-MS is approximately USD 200,000 to 500,000 for the instrument plus ancillary equipment (microwave digestion, autosampler, lab gases). Operating cost per sample is dominated by the digestion step (about 5 to 15 USD per sample for reagents and consumables) and the analytical run (about 5 to 15 USD per sample for argon, internal standards, and instrument time). Throughput on a routine quadrupole instrument is approximately 60 to 120 samples per day for full multi-element analysis with QC interleaving.

Sector-field ICP-MS instruments (capital cost USD 500,000 to 1,000,000+) and triple-quadrupole ICP-MS instruments offer higher resolution and lower detection limits at correspondingly higher cost per analysis; their use is concentrated in research applications and in specific analytical challenges (sub-ppt-level mercury speciation, sulfur and phosphorus quantification in food) that routine quadrupole ICP-MS does not address well.

## When to choose ICP-MS

ICP-MS is the appropriate method when:

- Multiple metals are quantified simultaneously from a single sample (almost always cheaper than running each metal on a dedicated instrument).
- LOD/LOQ requirements are at sub-ppb to low-ppb level in food matrices.
- The regulatory operative parameter is total elemental content (most cadmium, lead, nickel, aluminum, tin, chromium applications).
- Speciation is needed and HPLC-ICP-MS hyphenation is available (arsenic, mercury, chromium speciation).

Alternative methods chosen over ICP-MS in specific contexts:

- AAS (atomic absorption spectrometry) — graphite-furnace AAS remains in routine use for single-element high-throughput analysis where ICP-MS capacity is not available; flame AAS is appropriate for higher-concentration matrices (some cocoa products, some industrial samples) where ICP-MS dynamic range is unnecessary.
- ICP-OES (optical emission spectrometry) — appropriate for higher-concentration matrices (typically µg/g and above) where ICP-MS sensitivity is not needed and ICP-OES throughput and cost favor it.
- Cold-vapor AFS (atomic fluorescence spectrometry) — gold-standard for sub-ppt mercury detection where ICP-MS sensitivity is limiting.
- XRF (X-ray fluorescence) — non-destructive, in-situ-capable, but with substantially higher LOD; appropriate for screening rather than quantitative regulatory measurement.

## Sources

This page is methodological orientation, not a source-grounded synthesis of any specific occurrence dataset. Per-element LOD/LOQ values and per-method validation parameters used in any specific concentration claim in this wiki should be traced to the source page that reports the underlying study. Source pages in the wiki that document ICP-MS methodology in their Methods sections include:

- [[sources/navaretnam-2025-rice-as-speciation|Navaretnam et al. 2025]] — HPLC-ICP-MS arsenic speciation method validation.
- [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]], [[sources/efsa-nickel-contam-2020|EFSA Ni 2020]], [[sources/efsa-arsenic-contam-2009|EFSA As 2009]], [[sources/efsa-lead-contam-2010|EFSA Pb 2010]], [[sources/efsa-mercury-methylmercury-2012|EFSA Hg/MeHg 2012]] — EFSA risk assessments anchored on ICP-MS-derived European occurrence datasets.
- [[sources/codex-cxs-193-1995|Codex CXS 193-1995]] — Codex matrix-level MLs implicitly referencing ICP-MS as the operative analytical method.
- [[sources/fda-tds-elements-2018-2020|FDA TDS Elements FY2018-FY2020]] — US FDA Total Diet Study elemental analysis by ICP-MS.

Method-validation primary literature on ICP-MS in food matrices (sample-preparation digestion comparisons, isotope-dilution mass spectrometry, polyatomic-interference correction strategies) is a future ingest priority; this page populates with primary-source numerical claims as those papers are promoted from the corpus.
