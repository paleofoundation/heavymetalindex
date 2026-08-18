---
type: source
raw_handle: MFK_10-de-novo-generation-of-heavy-metal-binding-pepti
cite_key: zhang2025-metalorian-de-novo-metal-binding-peptides
title: "Metalorian: De Novo Generation of Heavy Metal-Binding Peptides with Classifier-Guided Diffusion Sampling"
authors: ["Yinuo Zhang", "Divya Srijay", "Zachary Quinn", "Pranam Chatterjee"]
year: 2025
publication: "bioRxiv"
doi: "10.1101/2025.07.10.664242"
source_type: preprint
evidence_tier: C
license: "CC-BY-NC-ND-4.0"
access_url: "https://doi.org/10.1101/2025.07.10.664242"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/10_De_Novo_Generation_of_Heavy_Metal-Binding_Peptides_with_Mach.pdf"
raw_sha256: "93deb3f5f23db20d03fd8a2aab2ffabfd1f85213248eca642384ef0fd5fc32a9"
near_duplicates: []
metals: [Cd, Cu, Zn, Co, Ni]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "In silico generation of de novo metal-binding peptides (30-80 residues) for Cu, Zn, Cd, Co, Ni; in vitro ELISA validation of three SUMO-fusion-expressed constructs (MTLrn_Cu_1, MTLrn_Cu_2, MTLrn_Zn_1) against Cu- and Zn-coated microplates."
updated: 2026-06-08
---

# Zhang et al. 2025 — Metalorian: a classifier-guided diffusion model that designs *de novo* heavy-metal-binding peptides, with in vitro validation against Cu and Zn

## Overview

Zhang and colleagues (University of Pennsylvania, Duke-NUS Medical School, Duke University) report a two-component computational platform for *de novo* design of heavy-metal-binding peptides: **MetaLATTE**, a multi-label classifier built on the ESM-2 protein language model that predicts metal-binding propensity across 14 transition/heavy metals from sequence alone, and **Metalorian**, a co-evolving conditional diffusion model that uses MetaLATTE as a guidance classifier to generate short metal-binding peptides (30-80 residues) with controllable length and target-metal specificity. The pipeline was validated in two stages: (i) in silico molecular-dynamics simulations comparing generated Cu- and Cd-binding peptides to wild-type metal-binding proteins, and (ii) in vitro ELISA-based binding assays for three SUMO-fusion-expressed Metalorian-generated constructs (two Cu binders and one Zn binder) against Cu- or Zn-coated microplates. The MbPA training database covers fourteen metal labels (Ag, Cd, Co, Cu, Fe, Hg, Mn, Mo, Ni, Pb, Pt, V, W, Zn). The paper is a methods-and-design contribution; there are no food, cosmetic, or human-exposure measurements. It is a bioRxiv preprint posted 2025-07-10 and not certified by peer review.

## Why this matters

- It is the first published platform that uses a protein-language-model-based classifier together with a diffusion model to generate, by sequence design alone, candidate heavy-metal chelators for cytotoxic targets including Cd. Prior peptide-design work in the wiki's chelation/bioremediation literature ([[sources/luo2024-peptides-heavy-metal-remediation]], [[sources/spallacci2025-bioinformatics-biomimetic-metal-peptide]], [[sources/shalev2022-peptide-metal-nmr-review]]) relies either on fixed natural scaffolds (metallothionein, phytochelatin), bioinformatic mining of known metal-binding fragments, or directed evolution; Metalorian extends the space to fully *de novo* sequence generation conditioned on metal label.
- The MbPA training-set proportions reported in Figure 1A document a severe class imbalance across heavy metals: Zn (21,423 binders) and Fe (17,805) dominate; V (6), W (10), Ag (10), Pt (11), Mo (14), Pb (90), Cd (131), Hg (149) and Co (197) are under-represented. The paper's MetaLATTE classifier achieves AUCROC 0.86-0.99 across all 14 metals despite this imbalance, which is the load-bearing claim for using the classifier as a guidance signal. The class-imbalance numbers are useful as a structural fact about the available metal-binding-protein training data — they reflect how much primary literature exists for each metal's binding biology, not how much exposure data exists.
- For HMI's metal taxonomy, the paper's experimental validation directly addresses Cu and Zn (both in vitro binders confirmed via ELISA); the in silico generation addresses Cd, Co, and Ni in addition. The discussion frames the platform as a bioremediation tool — generating peptides for environmental remediation of toxic metals at industrial-scale contaminated sites — rather than a dietary or supply-chain intervention. Relevance for the wiki is to peptide-based chelation chemistry, not to food matrices.
- The paper is methodologically transparent: model weights, code, and an inference pipeline are released at https://huggingface.co/ChatterjeeLab/MetaLATTE, https://huggingface.co/spaces/ChatterjeeLab/MetaLATTE-demo, and https://huggingface.co/ChatterjeeLab/Metalorian. This places it within reach for future external validation against larger benchmark sets and for combination with peer-reviewed peptide-chelation literature already in the wiki.

## Key numbers

Training-data composition (Figure 1A; MbPA database; Methods, "Metal-Binding Protein Data Curation"; pp. 2, 7).

Bars on Figure 1A are plotted in ascending count order; x-axis (left to right) is V, Ag, W, Pt, Mo, Pb, Cd, Hg, Co, Ni, Cu, Mn, N/A, Fe, Zn with the corresponding bar-top counts 6, 10, 10, 11, 14, 90, 131, 149, 197, 829, 913, 3,839, 5,230, 17,805, 21,423.

| Metal label | Count of metal-binding proteins in MbPA training set | Source location |
| --- | --- | --- |
| V (vanadium) | 6 | Fig. 1A |
| Ag (silver) | 10 | Fig. 1A |
| W (tungsten) | 10 | Fig. 1A |
| Pt (platinum) | 11 | Fig. 1A |
| Mo (molybdenum) | 14 | Fig. 1A |
| Pb (lead) | 90 | Fig. 1A |
| Cd (cadmium) | 131 | Fig. 1A |
| Hg (mercury) | 149 | Fig. 1A |
| Co (cobalt) | 197 | Fig. 1A |
| Ni (nickel) | 829 | Fig. 1A |
| Cu (copper) | 913 | Fig. 1A |
| Mn (manganese) | 3,839 | Fig. 1A |
| N/A (non-binding negatives, from Mpbipred) | 5,230 | Fig. 1A |
| Fe (iron) | 17,805 | Fig. 1A |
| Zn (zinc) | 21,423 | Fig. 1A |

Classifier performance (MetaLATTE; Figure 1D, Figure 2B; Results, "MetaLATTE enables accurate classification of peptide binders for cognate heavy metals"; p. 2).

| Item | Value | Source location |
| --- | --- | --- |
| AUCROC across all 14 metals | 0.86 - 0.99 | Results, p. 2; Fig. 1D |
| MetaLATTE recall (mean across metal classes) | 0.55 | Results, p. 2; Fig. 2B |
| MetaLATTE F1 score (mean across metal classes) | 0.57 | Results, p. 2; Fig. 2B |
| Benchmark models compared | XGBoost, vanilla ESM (zero-shot), ESM head-only fine-tuned (ESM-FT) | Methods, "Benchmark Models"; p. 11 |

Mollusk-protein test case (Methods/Results; Figure 2C; p. 4).

| Item | Value | Source location |
| --- | --- | --- |
| Test proteins | HpoMT1 (Cu-specific), HpoMT2 (Cd-specific), HpoMT3 (dual Cd/Cu) from *Helix pomatia* | Results, p. 4 |
| Sequence identity between HpoMT isoforms | 75.4% (some pairs) | Results, p. 4 |
| Outcome | MetaLATTE correctly distinguished Cu-, Cd-, and dual-binding isoforms; correctly predicted loss-of-function for alanine-mutated binding-site variants | Results, p. 4 |

Metalorian generation parameters (Results; Methods; pp. 4, 9-10).

| Item | Value | Source location |
| --- | --- | --- |
| Target metals for design generation | Cu, Zn, Cd, Co, Ni | Results, p. 4 |
| Generated peptide length range | 30 - 80 residues | Results, p. 4; Methods, p. 9 |
| Architecture base | ESM-2-650M (last 10 layers unfrozen) plus discrete TabularUnet on metal labels | Methods, p. 9 |
| Training hardware | 7 × NVIDIA A100 GPUs | Methods, p. 9 |
| Batch size | 140 | Methods, p. 9 |
| Learning rate | 2 × 10⁻⁴ (AdamW optimizer) | Methods, p. 9 |
| Sampling strategies | Progressive Verification Sampling (well-represented metals) and Gradient-Guided Sampling (under-represented metals) | Methods, p. 10 |

Generated-versus-wildtype property comparison (Figure 3B; Results; p. 4-5).

| Property | Direction relative to wildtype metal-binding proteins | Source location |
| --- | --- | --- |
| Molecular weight | Lower (designed to favor shorter, lighter scaffolds) | Results, p. 4; Fig. 3B |
| Net charge | Comparable distribution; key feature preserved | Abstract; Results, p. 4 |
| Hydrophobicity (Kyte-Doolittle scale) | Increased (enriched in cysteine, histidine, phenylalanine) | Results, p. 5; Fig. 3B |
| Isoelectric point | Increased | Results, p. 5; Fig. 3B |
| Aromaticity | Increased | Results, p. 5; Fig. 3B |
| Instability index | Increased (consistent with short, transiently structured chelators) | Results, p. 5; Fig. 3B |

MD-simulation outcomes for two named generated peptides (Results, "Metalorian-generated peptides exhibit potent binding capacities *in silico*"; Figure 3C; p. 5).

| Item | Value | Source location |
| --- | --- | --- |
| Generated Cd peptide tested in MD | MTLrn_Cd_1 | Results, p. 5; Fig. 3C |
| Generated Cu peptide tested in MD | MTLrn_Cu_1 | Results, p. 5; Fig. 3C |
| Structural stability metric | RMSD comparable or improved versus wildtype; similar or lower radius of gyration | Results, p. 5 |
| MM/PBSA finding | Stronger electrostatic interactions (ΔEEL) than wildtype; net binding energies favorable | Results, p. 5-6 |
| Simulation length | 2.5 ns production MD per system (5,000,000 steps, 0.0005 ps timestep) | Methods, p. 12 |
| Force field | AMBER19SB (peptide) + GAFF (other atoms); TIP3P water | Methods, p. 12 |
| Conformational-landscape method | Time-lagged independent component analysis (TICA); PyEMMA; lag time 10 frames | Methods, p. 12 |

In vitro ELISA validation (Results, "Metalorian-generated proteins bind Cu and Zn *in vitro*"; Figure 4; Methods, p. 13).

| Item | Value | Source location |
| --- | --- | --- |
| Constructs tested | MTLrn_Cu_1, MTLrn_Cu_2, MTLrn_Zn_1 | Results, p. 6 |
| MetaLATTE-predicted binding probabilities | 0.11, 0.82, 0.99 respectively | Results, p. 6 |
| Expression system | SUMO-fusion in *E. coli* BL21(DE3); Ni-NTA affinity purification; TEV protease cleavage; biotinylation; HRP-streptavidin/TMB detection at 450 nm | Methods, p. 12-13 |
| Capture surface | Cu- or Zn-coated microplates (bioWORLD 20140021) | Methods, p. 13 |
| Positive control | CuWT (wildtype Cu-binding metalloprotein) | Results, p. 6; Fig. 4B |
| Negative control | BSA, biotinylated identically | Results, p. 6; Fig. 4B |
| MTLrn_Cu_1 result | Cu-binding profile similar to CuWT; higher absorbance than BSA | Results, p. 6; Fig. 4B |
| MTLrn_Cu_2 result | Stronger Cu binding than CuWT; low-nanomolar affinity | Results, p. 6; Fig. 4B |
| MTLrn_Zn_1 result | Robust Zn binding at mid-nanomolar concentrations | Results, p. 6; Fig. 4C |
| Concentration range scanned | 0.0001 - 10 µg mL⁻¹ (serial dilution) | Fig. 4B-C |
| IC₅₀ calculation method | Sigmoidal four-parameter least-squares fit (GraphPad Prism v10) | Methods, p. 13 |
| Technical replicates | Triplicate per dilution | Fig. 4 caption |

## Methods (brief)

**Datasets.** Metal-binding-protein training data drawn primarily from the MbPA database, restricted to fourteen transition/heavy metals (Ag, Cd, Co, Cu, Fe, Hg, Mn, Mo, Ni, Pb, Pt, V, W, Zn); labels with fewer than 6 protein samples were excluded. Negative (non-binding) examples drawn from the Mpbipred database. Three benchmark test sets used: a stratified validation split from a stage-2 contaminated set, a non-overlapping MetalPDB extract, and a newly-sequenced mollusk dataset from Calatayud et al. 2021.

**MetaLATTE classifier.** Two-stage fine-tuning on top of ESM-2-650M (last two transformer layers unfrozen) with attention-pooling layer and rotary position embeddings before the classification head. Stage 1: class-balanced focal loss + F1 loss + cross-entropy reconstruction loss on the balanced multi-label task. Stage 2: triplet loss with adaptive margins over synthetically-mutated (alanine-swap and BLOSUM62-substituted) "semi-hard" and "hard" negatives, to enforce site-specific sensitivity. Triplet sampling progresses from easy to hard negatives during training. Stage 1 trained for up to 30 epochs (early stopping on validation macro-F1); Stage 2 trained ~15 epochs. Hardware: 32 GPU-hours on a 7× NVIDIA A6000 DGX server (350 GB shared VRAM) for stage 1; 56 GPU-hours on the same hardware for stage 2.

**Metalorian generator.** Co-evolving conditional diffusion (CoDi-style; Lee et al. 2023) over two coupled processes: a continuous diffusion over MetaLATTE's ESM-2 embeddings (x_C ∈ ℝ^(B×L×1280)) and a discrete multinomial diffusion over a one-hot metal label vector (x_D ∈ ℝ^(B×15), 14 metals plus N/A) using a TabularUnet backbone. Bidirectional conditioning between the two processes at every timestep. Joint loss combines per-process diffusion losses with two contrastive (triplet) terms over matched/mismatched (embedding, label) pairs. Trained on 7 × A100 GPUs at batch size 140, learning rate 2e-4 (AdamW), PyTorch Lightning. Sampling supports controllable peptide length via masking.

**Sampling strategies.** Progressive Verification Sampling for well-represented metal classes (Zn, Fe, Mn): standard diffusion sampling in phase one followed by phase-two verification timesteps where predictor confidence (MetaLATTE P(x_t)[y_target]) and discrete-label alignment (argmax(x_t^D) = y_target) must agree. Gradient-Guided Sampling for under-represented metals (Cd, Pb, Pt, V, W, Ag): extension of classifier guidance (Dhariwal & Nichol 2021) with dynamic scaling — guidance scale λ doubles when predictor confidence falls below threshold τ.

**MD simulations.** AlphaFold3 (2024.08.19 build) initial structures; AutoDock VINA docking for metal-ion placement; AMBER ToolS 24 system prep with MCPB.py and GAMESS-US for bonded/nonbonded parameters and RESP charge derivation. Most transition metals used the 6-31G(d,p)/LANL2TZ basis set; Cd used SBKJC-ECP for tighter convergence on its larger atomic radius. TIP3P water with Na⁺/Cl⁻ at 0.155 mM [sic — the preprint reads "0.155 mM," but physiological PBS ionic strength is 155 mM NaCl; likely a typo in the manuscript]; AMBER19SB protein + GAFF other atoms; GROMACS 5.0 workflow (energy minimization → NVT → NPT → 2.5 ns production NPT at 300 K, 1 bar, c-rescale barostat). gmx_MMPBSA for binding free energy; PyEMMA for TICA conformational analysis.

**SUMO-fusion expression and ELISA validation.** Constructs designed with N-terminal 6xHis-SUMO tag and modified TEV protease cleavage site (vector derived from Chen et al. 2023a); Gibson Assembly with NEB enzymes; Sanger-verified inserts; transformation into BL21(DE3); IPTG induction (1 mM at OD₆₀₀ 0.6-0.8); Ni-NTA affinity purification; TEV cleavage and reverse His-purification; biotinylation with EZ-Link Micro Sulfo-NHS-Biotinylation Kit; SDS-PAGE and anti-His Western blot for purity confirmation. Sandwich ELISA: blocked Cu- or Zn-coated bioWORLD microplates incubated with serial dilutions of biotinylated constructs (10 µg mL⁻¹ → 0.0001 µg mL⁻¹) in PBS-T; detection via HRP-streptavidin (1:20,000) and TMB; absorbance at 450 nm read on a Promega GloMax Discover plate reader; IC₅₀ fit by four-parameter sigmoid (GraphPad Prism v10).

**What this paper does not measure.** No dietary, environmental, or biological-fluid metal concentrations. No human-exposure data. No food, supply-chain, or cosmetic-matrix occurrence values. No measurements of Pb, Hg, As, or any other HMTc analyte in any product; the paper mentions Pb and Hg only as motivating examples of cytotoxic heavy metals and as classifier labels with limited training data. The evidence is methodological (in silico generation, MD simulation, and in vitro purified-protein ELISA against metal-coated plates).

## Implications

Certification: Not directly applicable. Cu and Zn (the experimentally validated targets) are not on the HMTc-certified analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Cd and Ni — both on the HMTc list — appear only as in silico generation targets with no exposure-relevant measurements; the work does not inform any threshold-setting question for any HMTc product category. Evidence-tier C (bioRxiv preprint).

Courses: Potentially useful as a methods reference in a future advanced module on computational design of metal-chelating peptides for bioremediation. The MbPA class-imbalance numbers in particular illustrate how the heavy-metals research base is biased toward physiologically essential metals (Zn, Fe, Mn) and away from toxic non-essential metals (Pb, Cd, Hg) — a structural fact relevant to teaching why the toxic-metals literature is comparatively thin.

App: Not applicable. No contamination-profile data, no consumer-product matrices.

Microbiome: Not applicable. No microbiota or microbial-community measurements; bacterial work is limited to *E. coli* BL21(DE3) as an expression host.

## Verification notes

- 2026-06-08 audit subagent flagged systematic mis-mapping of Figure 1A bar-top counts to metal labels in the original Key-numbers table and the corresponding "Why this matters" narrative bullet. The figure plots bars in ascending count order (V, Ag, W, Pt, Mo, Pb, Cd, Hg, Co, Ni, Cu, Mn, N/A, Fe, Zn = 6, 10, 10, 11, 14, 90, 131, 149, 197, 829, 913, 3,839, 5,230, 17,805, 21,423); the original draft had shifted ten of the fifteen counts onto the wrong metal label. Verified against PDF p. 3 Fig. 1A and corrected. Ag, Pb, Fe, Zn counts in the original draft were already correct.
- 2026-06-08 audit subagent noted that the preprint's MD-system PBS ionic-strength statement reads "Na⁺ and Cl⁻ ions at a concentration of 0.155 mM" (PDF p. 11) — almost certainly a typo for 155 mM, the conventional physiological PBS value. Retained the figure as the preprint reports it, with a `[sic]` flag.
- 2026-06-08 audit subagent noted the original draft omitted the "350 GB shared VRAM" detail of the A6000 DGX server (PDF p. 8). Added.

## Wiki pages updated on ingest

- [[metals/cadmium]]
- [[metals/copper]]
- [[metals/zinc]]
- [[metals/cobalt]]
- [[metals/nickel]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [16fb63b65](https://github.com/paleofoundation/heavymetalindex/commit/16fb63b65) | 2026-06-08 | major | 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
