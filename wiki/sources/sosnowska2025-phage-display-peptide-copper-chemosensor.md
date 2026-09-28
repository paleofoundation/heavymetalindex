---
type: source
raw_handle: MFK_53-phage-display-technology-in-ecotoxicology-pepti
cite_key: sosnowska2025-phage-display-peptide-copper-chemosensor
title: "Phage display technology in ecotoxicology: phage display derived unique peptide for copper identification in aquatic samples"
authors: [Sosnowska M, Łęga T, Olszewski M, Gromadzka B]
year: 2025
publication: "Microbial Cell Factories, 2025;24:11"
doi: "10.1186/s12934-024-02553-4"
source_type: peer-reviewed
evidence_tier: C
license: cc-by-nc-nd-4.0
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/53_Phage_Display_Technology_in_Ecotoxicology_Peptide_for_Coppe.pdf"
raw_sha256: "2ee660a710248d3a9ac5edf8971b7aed0be517cc0fe33548260af62d3c30fd42"
access_url: "https://doi.org/10.1186/s12934-024-02553-4"
metals: []
ingredients: []
products: []
matrices: [synthetic-peptide-library, methodology-context]
jurisdictions: [GLOBAL]
near_duplicates: []
sample_n: null
sample_population: "Primary methodology paper. Modified biopanning of the Ph.D.-7 Phage Display Peptide Library Kit (NEB) on the host Escherichia coli K12 ER 2738 against Cu(II) immobilised on maleic anhydride-activated microtiter plates via Nα,Nα-Bis(carboxymethyl)-L-lysine (BCML, 10 mM in 0.1 M NaPO4 pH 8) with 10 mM CuSO4. Negative selection rounds were performed sequentially against Hg(II), Cd(II), Mn(II), and Ni(II) before three positive rounds against Cu(II). Library input 1×10¹¹ PFU per panning round; 240 plaques picked after round 3 for amplification; 20 individual M13 clones with unique 7-residue peptide sequences were identified. Cross-reactivity of the selected MHIVPHE-bearing clone was assayed against Ni(II), Cd(II), Hg(II), Mn(II), and Cu(II) (n = 3 independent ELISA experiments). The selected MHIVPHE peptide was elongated to a fluorescent decapeptide Dansyl-Met-His-Ile-Val-Pro-His-Glu-Lys-Trp-NH2 (DNS-L9) by microwave-assisted Fmoc solid-phase peptide synthesis on Rink Amide resin (0.1 mmol scale) and tested for fluorescent-quenching response to Cu²⁺, Hg²⁺, Pb²⁺, Cd²⁺, Ni²⁺, Mn²⁺, Cr³⁺, As³⁺, Na⁺, and K⁺ (each at 10 µM = 1 equiv) in 50 mM HEPES pH 7.41 (n = 3 independent fluorescence measurements). No environmental, food, or human samples were analysed."
updated: 2026-06-08
---

# Sosnowska et al. 2025 — Phage-display-derived peptide chemosensor for Cu(II) in aquatic samples

## Overview

Sosnowska, Łęga, Olszewski, and Gromadzka (Institute of Biotechnology and Molecular Medicine, Gdańsk; Faculty of Chemistry, Warsaw University of Technology; Nano Expo Sp. z o.o., Gdańsk) report a methodology paper that combines phage display biopanning, peptide synthesis, and fluorescence spectroscopy to develop a Cu(II)-selective fluorescent chemosensor. The motivation is sensor development for ecotoxicological monitoring of copper in aquatic ecosystems; the WHO drinking-water reference cited in the paper is `<31 µM` total copper and reported industrial-wastewater Cu²⁺ concentrations span `2.5 to 10,000 mg/L`. The biopanning workflow modifies the standard Ph.D.-7 protocol by introducing four sequential negative-selection rounds (Hg²⁺ → Cd²⁺ → Mn²⁺ → Ni²⁺) prior to three positive rounds against Cu²⁺, which the authors state is the first reported use of microtiter-plate functionalisation chemistry to enable negative selection against multiple non-target metals. The selected 7-mer MHIVPHE (Met-His motif at the N-terminus and a second histidine near the C-terminus at position 6 of the 7-residue peptide; the paper frames this as "two histidines at both ends" with an N-terminal MH motif) was extended into a dansyl-labelled decapeptide DNS-L9 (Dansyl-Met-His-Ile-Val-Pro-His-Glu-Lys-Trp-NH2) that exhibits `≈58.5%` Cu²⁺-induced fluorescence quenching at a 1:1 peptide:metal stoichiometry with negligible response to nine other monovalent and divalent ions tested at the same concentration. Copper is not among the ten HMI HMTc analytes (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) and the paper reports no contamination measurements in any food, personal-care, or environmental sample. The source enters the HMI corpus as upstream sensor-development methodology context adjacent to the broader phage-display and peptide-metal-binding literature already represented in the same source-retrieval peptide folder ([[bae2000-synthetic-phytochelatin-bacterial-cd-bioaccumulation]], [[hu2024-engineered-ecoli-hg-cr-adsorption]], [[juskowiak2008-cysteine-rich-oboc-peptide-libraries]], [[luo2024-peptides-heavy-metal-remediation]], [[lu2022-metal-chelating-peptides-review]], [[han2025-peptide-zinc-complexation-aquatic-review]]).

## Key numbers

| Step | Variable | Value |
| --- | --- | --- |
| Library input | Ph.D.-7 phage clones per panning round | `1 × 10¹¹ PFU` in `100 µL` 0.05% TBST |
| Negative selection | Metal targets immobilised (10 mM each) | Hg(NO3)2 → Cd standard → MnCl2 → NiCl2, sequentially |
| Positive selection | Target metal | `10 mM` CuSO4, three rounds |
| Round-3 output | Plaques picked for amplification and sequencing | `240` |
| Sequencing yield | Unique 7-mer peptide sequences | `20` (P-1 through P-20) |
| Top-affinity clones (Fig. 3a, qualitative ELISA PFU/mL means) | P-10 DTAHGTW (1 His); P-11 MHIVPHE (2 His); P-12 DRSWVTS (0 His); P-18 ASKGVGL (0 His); P-20 EARAPGS (0 His) | P-11 selected as the candidate for further work based on its MH (Met-His) motif at the N-terminus and a second histidine at position 6 (paper wording: "two histidine at both ends of the peptide" and "peptides with MH motifs") |
| Cross-reactivity ELISA (Fig. 4b, MHIVPHE clone, %PFU normalised to Cu = 100%) | Cu²⁺ | `100%` reference |
| Cross-reactivity ELISA | Ni²⁺ | `≈45%` (large error bar) |
| Cross-reactivity ELISA | Mn²⁺ | `≈38%` |
| Cross-reactivity ELISA | Cd²⁺ | `≈18%` |
| Cross-reactivity ELISA | Hg²⁺ | `≈10%` (nominal; bar within error of zero) |
| DNS-L9 fluorescence-quenching response (Fig. 5b, 1 - F/F0 normalised; 10 µM DNS-L9 + 10 µM metal ion = 1 equiv in 50 mM HEPES pH 7.41, ex 330 nm) | Cu²⁺ | `≈0.58` quenching ratio (`≈58.5%` quenching) |
| DNS-L9 fluorescence response | Pb²⁺, Hg²⁺, Cd²⁺, Ni²⁺, Mn²⁺, Cr³⁺, As³⁺, Na⁺, K⁺ | Each `≈0` (no significant change vs blank) |
| Statistics | Mann–Whitney U comparison of Cu vs Hg, Cu vs Cd | p `≈ 0.1` (authors state as "approximately 0.1"; with `n = 3` independent ELISA replicates the test is underpowered) |
| Cited regulatory anchor | WHO drinking-water guideline for Cu (paper's wording: "WHO suggests that the concentration of copper in drinking water should be less than 31 µM") | `<31 µM` |
| Cited environmental context | Reported industrial wastewater Cu²⁺ | `2.5 to 10,000 mg/L` |

## Methods (brief)

Phage display library and host. Ph.D.-7 Phage Display Peptide Library Kit (New England Biolabs GmbH, Frankfurt am Main, Germany) screened on *Escherichia coli* K12 ER 2738 (NEB), grown overnight at `37 °C` in LB medium (`10 g/L` tryptone, `5 g/L` yeast extract, `5 g/L` NaCl) with `20 µg/mL` tetracycline; agar plates `15 g/L` with `20 mg/L` tetracycline.

Microplate functionalisation. Maleic anhydride-activated microtiter plates (Thermo Scientific Cat#15100) functionalised overnight at room temperature with `100 µL` of `10 mM` Nα,Nα-Bis(carboxymethyl)-L-lysine hydrate (BCML; Sigma Aldrich Cat# 14580) in `0.1 M` NaPO4 pH 8, then washed three times with `300 µL` 0.05% TBST, blocked with 3% BSA in 0.05% TBST (`2 h`, room temperature), washed again, and modified with `20 µL` of `10 mM` metal salts for `20 min` at room temperature. Metal salts used: Hg(NO3)2, Pb(NO3)2, MnCl2, ZnSO4, CuSO4, NiCl2; Cd standard solution, Cr standard solution, NaAsO2, KCl, and NaCl (all `10 mM`).

Biopanning. Library diluted to `1 × 10¹¹ PFU` in `100 µL` 0.05% TBST, applied first to a Ni(II)-coated well (negative selection), unbound clones transferred to Hg(II)-coated, Mn(II)-coated, and Cd(II)-coated wells in sequence (text and Figure 2 schematic are consistent on which non-target metals are used; the negative-selection ordering is described in slightly different orderings in two passages — page 3 lists Hg → Cd → Mn → Ni, the Materials-and-Methods Surface Panning section lists negative selection against Ni, Mn, Cd, Hg). Three positive-selection rounds were then performed against Cu(II); `100 µL` of `0.2 M` glycine-HCl pH 2.2 was used for elution and neutralised with `15 µL` of `1 M` Tris-HCl pH 9.1 after `15 min` incubation. After the third round, 240 plaques were selected from LB/IPTG/X-gal titration plates for DNA sequencing; 20 unique 7-mer copper-binding peptide sequences were identified.

Affinity ELISA. Plates functionalised and modified as above with Cu(II), incubated with `100 µL` of `10⁹ PFU` per well of each selected clone (n = 21 sequences screened in Fig. 3a; the higher-affinity hits P-10, P-11, P-12, P-18, P-20 were taken forward); plates washed `10×` with TBST; phage eluted with `100 µL` of `0.2 M` glycine-HCl pH 2.2 and titrated per kit manual. Three independent experiments per clone; mean PFU/mL plotted with standard deviation in Fig. 3a.

Cross-reactivity ELISA. Selective P-11 clone tested on plates functionalised with Cu(II), Mn(II), Hg(II), Ni(II), and Cd(II) at `10 mM` modification; `100 µL` of `10⁹ PFU` selected clones per well; phage titre on Cu wells set to `100%` reference and other-metal titres normalised. Three independent experiments.

Peptide synthesis. DNS-L9 (Dansyl-Met-His-Ile-Val-Pro-His-Glu-Lys-Trp-NH2) synthesised on Rink Amide resin (0.1 mmol) by microwave-assisted Fmoc SPPS on an Initiator+Alstra automated synthesizer (Biotage, Sweden). Couplings performed twice for `5 min` at `75 °C` with Fmoc-amino acid (5 equiv), DIC (5 equiv), Oxyma (5 equiv) in DMF. Fmoc deprotection in 20% piperidine/DMF (1×3 min, 1×10 min). Dansyl chloride (5 equiv) and TEA (3 equiv) coupled to peptidyl resin for `4 h`. Cleavage with TFA/TIS/H2O 95:2.5:2.5 (`2 h`); precipitation in cold diethyl ether; lyophilisation. Crude product characterised by reverse-phase HPLC on a Shimadzu Prominence-i LC-2030C Plus with a Jupiter 4 µm Proteo 90 Å, 4.6 × 250 mm column, UV detection at `224 nm`, linear gradient `5–95% B over 60 min` at `1 mL/min` (A = water + 0.1% TFA; B = acetonitrile + 0.1% TFA). ESI(+) mass confirmation on a LCMS 2020 Shimadzu single-quadrupole at `1.5 mL/min` isocratic 60% B with 0.1% formic acid eluents.

Fluorescence sensing. DNS-L9 dissolved in double-distilled water at `2 mM` and stored at `4 °C`. Metal-ion stocks at `10 mM` prepared from Hg(NO3)2, Pb(NO3)2, MnCl2, ZnSO4, CuSO4, NiCl2, Cd standard, Cr standard, NaAsO2, KCl, and NaCl. Fluorescence measured on a Synergy H1MG Multimode Microplate Reader (BioTek Instruments, USA) in 96-well F-bottom Greiner Bio-one plates with excitation at `330 nm`; F0 (no metal) and F (with metal) intensities reported. Working solution was `10 µM` DNS-L9 in `50 mM` HEPES buffer pH `7.41`; metal ions added at `1.0 equiv` (`10 µM`).

Statistics. Calculations in Excel; nonparametric Mann–Whitney U test in SciPy (Python 3). Authors state the test gave significant differences for Cu vs Hg and Cu vs Cd "assuming p ≈ 0.1"; with `n = 3` independent replicates the statistical power is limited and this caveat is acknowledged in the Statistical analysis section.

## Implications

The MHIVPHE peptide and its DNS-L9 chemosensor derivative are reported as a single proof-of-concept against `10 µM` reference Cu²⁺ in HEPES buffer, not yet tested in any real environmental, drinking-water, or food matrix. The cited WHO drinking-water guideline `<31 µM` is the authors' framing of the regulatory anchor for downstream sensor deployment; the paper does not measure copper in any actual drinking water sample, does not address ICP-MS or AAS comparability, and does not characterise matrix effects from dissolved organic matter, competing cations at environmental ratios (Ca²⁺, Mg²⁺, Fe²⁺, Zn²⁺), or chloride/sulfate interferences. As an HMI source page this is upstream methodology context for the broader peptide-based sensing and heavy-metal-binding peptide literature; it does not contribute occurrence data to any HMI metals or ingredient page, does not constrain any HMTc per-row standard, and does not warrant a Part 9 synthesis trigger on any cell of the contamination index. Copper is not among the ten HMTc analytes, so `metals:` is empty even though Cu, Hg, Cd, Pb, Ni, Mn, Cr, and As appear throughout the paper as detection-method targets and counter-selection ions.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [50de6ab217](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab217) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
