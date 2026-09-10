---
type: source
raw_handle: MFK_08-a-bioinformatics-approach-to-design-minimal-bio
cite_key: spallacci2025-bioinformatics-biomimetic-metal-peptide
title: "A bioinformatics approach to design minimal biomimetic metal-binding peptides"
authors: ["Claudia Spallacci", "Marco Chino", "Antonio Rosato", "Ornella Maglio", "Ping Huang", "Luca D'Amario", "Angela Lombardi", "Claudia Andreini", "Mun Hon Cheah"]
year: 2025
publication: "Communications Chemistry"
doi: "10.1038/s42004-025-01702-z"
source_type: peer-reviewed
evidence_tier: B
license: "CC-BY-4.0"
access_url: "https://doi.org/10.1038/s42004-025-01702-z"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/08_A_Bioinformatics_Approach_to_Design_Minimal_Biomimetic_Metal.pdf"
raw_sha256: "91a3b810554f78700c701a59a8482a13f1715bb7a08b1b9428b381be93691bd5"
near_duplicates: []
metals: [Cu]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Synthetic 8-residue peptide (H4pep, sequence HTVHYHGH); in vitro spectroscopic and electrochemical characterisation."
updated: 2026-06-08
---

# Spallacci et al. 2025 — Bioinformatics design of an 8-residue copper-binding β-sheet peptide that mimics the laccase trinuclear Cu site

## Overview

Spallacci and colleagues (Uppsala University, Naples Federico II, University of Florence, and the CNR Institute of Biostructures and Bioimaging, Naples) report the design and proof-of-concept characterisation of a minimal eight-residue peptide, H4pep (sequence HTVHYHGH), built to function as a biomimetic of the trinuclear Cu site of the small laccase from *Streptomyces viridosporus* (PDB 3tbc). The sequence was derived using the authors' bioinformatic tool MetalSite-Analyzer (MeSA), which extracts metal-binding fragments from a target metalloenzyme's minimal functional site (MFS), runs a PSI-BLAST conservation search against UniRef50, and outputs Skylign sequence logos that drive rational residue selection. Cu(II) binding to H4pep produces a β-sheet Cu²⁺ₓ(H4pep)ᵧ assembly with two distinct stoichiometries (1Cu2Pep and 2Cu2Pep), as resolved by combined UV-visible, circular dichroism, EPR and NMR titration data and supported by DFT geometry optimisation. The 1Cu2Pep species shows electrocatalytic O₂-reduction activity at −0.20 V vs Ag/AgCl, demonstrating that a single short peptide can reproduce both the β-sheet structural motif and a functional mimic of laccase redox chemistry. The paper is a methods-and-design contribution; there are no food, cosmetic, or human-exposure measurements.

## Why this matters

- It is a worked example of the MeSA → minimal peptide pipeline applied to a multinuclear (type-2/type-3) Cu enzyme, complementing the broader peptide-Cu chelation literature already catalogued in the wiki ([[sources/luo2024-peptides-heavy-metal-remediation]], [[sources/shalev2022-peptide-metal-nmr-review]]). For routing purposes the relevance is to copper coordination chemistry rather than to dietary or supply-chain copper contamination.
- The H4pep sequence (HTVHYHGH) is positioned by the authors as the first synthetic β-sheet metallo-peptide complex that is stable in solution and shows catalytic activity, contrasting with the broader literature in which short β-sheet motifs self-assemble into supramolecular aggregates or amyloid-like fibrils.
- The bioinformatic methodology is generalisable: the MeSA workflow extracts metal-binding fragments, maps them to a sequence, runs PSI-BLAST against UniRef50, generates a multiple sequence alignment, and outputs per-fragment Skylign logos. The output identifies "highly conserved" positions (almost always one residue), "moderately variable" positions (two or three options), and "highly variable" positions (almost any residue), which together drive the rational sequence design.
- The work uses Zn(II) as a diamagnetic NMR probe for the Cu(II) binding site, a standard speciation-chemistry technique. The paper does not address Zn as an analyte of toxicological concern; the Zn data are method-internal.

## Key numbers

Design and sequence parameters (Results / Methods sections; Fig. 1 and Fig. 5; pp. 1-3, 7-8).

| Item | Value | Source location |
| --- | --- | --- |
| Final peptide length | 8 residues | Abstract; Results, "Bioinformatic tool and peptide design" |
| Final peptide sequence | HTVHYHGH (H4pep) | Results, p. 2-3 |
| Model enzyme | Small laccase from *Streptomyces viridosporus*, PDB 3tbc | Methods, "Peptide design" |
| MeSA-extracted metal-binding fragments | 4 fragments: TFHLHGH, WMYHCHVQSHS, SLHVHGLDY, WHYHDHVVGTEHG | Fig. 1A; Results, p. 3 |
| Conservation analyses behind fragment selection | 2016 sequences (chain A fragments); 1669 sequences (chain B fragments) | Fig. 1B annotation |
| Binding-fragment motif highlighted | His-Xxx-His across all four fragments | Results, p. 3 |

Cu²⁺ binding and complex stoichiometry (Results, "Binding of metal ions by H4pep" and "Stoichiometry of H4pep-Cu²⁺ complexes"; Fig. 2; pp. 2-5).

| Item | Value | Source location |
| --- | --- | --- |
| H4pep concentration (UV-visible, near-UV range) | 0.4 mM at pH 5.6 (acetate buffer) | Methods, "Spectroscopic methods" |
| H4pep concentration (UV-visible, visible range) | 2.35 mM | Methods |
| H4pep concentration (CD spectroscopy) | 0.1 mM at pH 5.6 | Methods |
| Tyrosine absorbance peak | 276 nm | Results, p. 2 |
| Cu²⁺ d-d transition region observed | 500-800 nm (in the presence of H4pep) | Results, p. 2; Fig. 2A inset |
| Unbound Cu(II) maximum (excess Cu²⁺ above 1:1) | ~786 nm | Results, p. 2; Fig. 2A inset |
| CD-spectroscopy buffer-condition window tested | pH 4.4, 4.8, 5.2, 5.6 (Fig. S7) | Results, p. 4 |
| CD-spectroscopy pH chosen for titrations | 5.6 (avoids copper-oxide formation at higher pH; histidine pKa ~6 favours imidazole binding rather than N-terminal amine binding) | Results, p. 4 |
| β-sheet CD signature on Cu²⁺ binding | Negative band at 227 nm; positive band at 210 nm | Results, p. 4 |
| Stoichiometries resolved | 1Cu2Pep (Cu²⁺ : 2 H4pep) and 2Cu2Pep (2 Cu²⁺ : 2 H4pep) | Results, p. 5; Fig. 2D |
| Conditions favouring 1Cu2Pep | Up to ~0.5 Cu²⁺ equivalents per H4pep | Results, p. 5 |
| Conditions favouring 2Cu2Pep | Higher Cu²⁺ equivalents (≥1:1) | Results, p. 5 |
| 1Cu2Pep Cu²⁺ d-d Gaussian components | 636 nm and 742 nm | Results, p. 5 |
| Histidine residues participating in Cu binding (DFT-derived 2Cu2Pep) | His0, His3, His5, His7 (all eight histidines across the two-peptide assembly) | Discussion, p. 6 |
| Light-scattering result (DLS) | No large aggregates detected up to large Cu²⁺ excess | Results, p. 5 |

Cu⁺ binding (Results, "Binding of metal ions by H4pep"; p. 2).

| Item | Value | Source location |
| --- | --- | --- |
| Cu⁺-H4pep affinity (log β₂, BCA competition assay) | 17.2 | Results, p. 2; competitive-titration analysis |
| BCA competition complex | [Cu(BCA)₂]³⁻ monitored at 562 nm (ε = 7900 M⁻¹ cm⁻¹) | Methods, "Competitive titration studies" |
| Comparator (literature) | Comparable to triple-stranded α-helical coiled-coil Cu(His)₃ mimics of nitrite reductase | Results, p. 2 |

Electrochemistry and catalytic activity (Results, "Electrochemistry and testing of activity"; Fig. 3; pp. 4-6).

| Item | Value | Source location |
| --- | --- | --- |
| Reference electrode | Ag/AgCl (3 M KCl), E° = +0.210 V vs SHE | Methods |
| 1Cu2Pep cyclic-voltammetry conditions | 1 mM H4pep + 0.45 mM Cu²⁺ in 10 mM sodium phosphate, pH 5.8, with 40 mM Na₂SO₄ supporting electrolyte | Methods; Fig. 3 caption |
| 2Cu2Pep CV reduction peak (N₂ atmosphere) | −0.11 V vs Ag/AgCl; re-oxidation at 0.52 V | Results, p. 5 |
| 2Cu2Pep anodic re-oxidation feature | Sharp peak at 0.08 V, attributed to oxidation of metallic Cu deposited on the working electrode | Results, p. 5 |
| 1Cu2Pep reduction peak (N₂) | −0.16 V vs Ag/AgCl; re-oxidation at 0.36 V | Results, p. 5 |
| Chronoamperometry potential (O₂ reduction) | −0.20 V vs Ag/AgCl | Results, p. 5; Fig. 3B |
| Chronoamperometry steady-state current | ~−15 µA | Results, p. 5 |
| Faradaic efficiency (four-electron-reduction scenario) | Approaches unity | Results, p. 6 |
| Faradaic efficiency (two-electron-reduction scenario) | Approximately half of unity | Results, p. 6 |
| PPD oxidation reaction rate (laccase activity assay) | 82.8 ± 36.6 nM min⁻¹ at 1 mM PPD + 10 µM 1:1 H4pep:Cu | Results, p. 6 |
| PPD molar extinction coefficient used | 7650 M⁻¹ cm⁻¹ at 530 nm | Methods |

EPR (Results, "Titration experiments via EPR"; Fig. 2C; p. 4).

| Item | Value | Source location |
| --- | --- | --- |
| EPR spectrometer | Bruker EMX-micro with EMX-Premium bridge and ER4119HS resonator | Methods |
| Recording temperature | 10 K (microwave power 50 µW, microwave frequency 9.31 GHz, 10 G modulation amplitude, 100 kHz modulation frequency) | Methods |
| Cu²⁺ axial signal at large H4pep excess (Cu²⁺:H4pep 1:0.3) | g_x = 2.0419, g_y = 2.0437, g_z = 2.2447 | Results, p. 4-5 |
| Additional axial signal observed | Between Cu²⁺:H4pep 1:0.4 and 1:1 — lower g values; attributed to small distortion of the first Cu²⁺ site by a second bound Cu²⁺ | Results, p. 5 |

NMR (Methods, "Spectroscopic methods: UV-vis, CD, EPR, NMR"; Results, "Binding of metal ions by H4pep"; pp. 2-3).

| Item | Value | Source location |
| --- | --- | --- |
| NMR spectrometer | Bruker Avance 600 with triple-resonance cryoprobe | Methods |
| Temperature | 298 K | Methods |
| Buffer | 10 mM sodium phosphate, pH 5.8 (with 10% D₂O or in CD₃OH) at 0.5 mM peptide | Methods |
| Diamagnetic NMR probe | Zn²⁺ (added as ZnCl₂ in stoichiometric amounts) used to identify potential binding sites without paramagnetic broadening | Results, p. 2; Methods |
| Cu⁺ NMR conditions | Cu²⁺ + sodium dithionite (3 mM final concentration) under inert atmosphere | Methods |
| Zn²⁺ at 1:1 ratio | Selective downfield shifts (~0.1 ppm) of histidine resonances; broadening of imidazole Cδ and Cε signals (Fig. S2B) | Results, p. 3 |
| Cu⁺ effect | Significant broadening of all resonances (more extensive than Zn²⁺); multiple conformational states in exchange | Results, p. 3 |

## Methods (brief)

**Bioinformatic design.** Input PDB structure was 3tbc (small laccase from *Streptomyces viridosporus*); the MetalSite-Analyzer tool (https://metalsite-analyzer.cerm.unifi.it) extracted the minimal functional site (MFS) defined as the metal ion(s), the metal-binding residues, and any residue with at least one atom within 5 Å of a metal-binding atom. MeSA then identified the metal-binding fragments (contiguous segments containing binding residues), mapped them onto the sequence, ran PSI-BLAST against UniRef50 (3 iterations, default PSI-BLAST parameters), filtered out non-binding hits, generated a multiple sequence alignment, and produced per-fragment Skylign sequence logos. Position-by-position residue choice for H4pep combined high conservation (His residues at positions 3 and 5; Gly at 6) and rational structural reasoning (His at 7; Thr at 1; Tyr at 4 chosen as a UV-vis and redox probe; an N-terminal His at position 0 added to satisfy four-coordination geometry).

**Peptide synthesis.** Fmoc solid-phase synthesis on an automated microwave synthesiser (Biotage Initiator+, Alstra), 0.1 mmol scale, Rink-type resin (TentaGel R RAM) with a polyethylene-glycol/polystyrene backbone. Fmoc-protected amino acids (Fmoc-His(Trt)-OH, Fmoc-Gly-OH, Fmoc-Tyr(tBu)-OH, Fmoc-Val-OH, Fmoc-Thr(tBu)-OH) at 0.5 M in DMF; 20% piperidine deprotection; Oxyma (0.5 M in DMF) and DIC (0.5 M in DMF) as activator/activator base. Coupling at 75 °C for 5 min except for His (room temperature, to avoid racemisation). Cleavage with 95% TFA / 2.5% TIS / 2.5% H₂O for 2 h at room temperature. Crude peptide precipitated with cold diethyl ether, lyophilised, and purified by RP-HPLC over a C18 semi-preparative column on an ÄKTA pure system (solvent A 0.1% TFA in water; solvent B 0.085% TFA in acetonitrile; 5-20% B over 30 min at 4 mL min⁻¹; A280 monitoring). Identity and purity confirmed by LC-MS (Agilent).

**Spectroscopy.** UV-visible on a Cary 50 Bio in 10 mM acetate buffer pH 5.6 (4 mM H4pep, 1 mM CuSO₄ stock). CD on a Chirascan V100 (mean residue molar ellipticity, peptide n = 8 residues). EPR on a Bruker EMX-micro at 10 K, 10 mM acetate buffer pH 5.6, fixed 0.1 mM Cu²⁺ titrated with peptide. EasySpin v6.0.5 used for spectral simulation and fitting.

**Electrochemistry.** Metrohm Autolab potentiostat or BioLogic SP-300 at room temperature, 3 mm GCE working electrode (9 mm graphite rod counter-electrode for bulk electrolysis), Ag/AgCl in 3 M KCl reference. 10 mM sodium phosphate pH 5.8 + 40 mM Na₂SO₄ supporting electrolyte. 1Cu2Pep CV: 1 mM H4pep + 0.45 mM Cu²⁺. 2Cu2Pep CV: 1 mM H4pep + 0.9 mM Cu²⁺. Bulk-electrolysis volume 3 mL. Activity assays via Clark electrode (Unisense control box). Laccase activity quantified by oxidation of 1 mM PPD (ε₅₃₀ = 7650 M⁻¹ cm⁻¹, sodium acetate buffer, 1:1 H4pep:Cu mixed to 10 µM final concentration; absorbance at 530 nm over 15 min, triplicate).

**Computational chemistry.** Geometry optimisation of initial guesses for 1Cu2Pep and 2Cu2Pep performed at semi-empirical tight-binding (GFN2-xTB) level, then DFT (r2SCAN-3c composite method) using xTB 6.7 and ORCA 6.0.

**What this paper does not measure.** No dietary, environmental, or biological-fluid concentrations. No human-exposure data. No species-specific speciation measurements of Cu in food or cosmetic matrices. The paper's evidence is methodological (peptide design, in vitro Cu binding, in vitro O₂-reduction activity).

## Implications

Certification: Not directly applicable. Copper is in the HMI metal taxonomy ([[metals/copper]]) but is not on the HMTc-certified analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) and the paper measures no food or supply-chain matrix.

Courses: Marginal. May be useful in a future advanced module on peptide-based chelation chemistry as a worked example of how a bioinformatics workflow converts a metalloenzyme active site into a synthetic minimal peptide.

App: Not applicable. No contamination-profile data.

Microbiome: Not applicable. No microbiota or microbial-community measurements.

## Related evidence
- [[metals/copper]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155a](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155a) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
