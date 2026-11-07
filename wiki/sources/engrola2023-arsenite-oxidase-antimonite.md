---
type: source
raw_handle: ENGROLA-2023-AIO
cite_key: engrola2023-arsenite-oxidase-antimonite
title: "Arsenite oxidase in complex with antimonite and arsenite oxyanions: Insights into the catalytic mechanism"
authors: ["Filipa Engrola", "Marcia A. S. Correia", "Cameron Watson", "Carlos C. Romao", "Luis F. Veiros", "Maria Joao Romao", "Teresa Santos-Silva", "Joanne M. Santini"]
year: 2023
publication: "Journal of Biological Chemistry 299(8):105036"
doi: "10.1016/j.jbc.2023.105036"
access_url: "https://doi.org/10.1016/j.jbc.2023.105036"
retrieval_date: 2026-09-25
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/antimony-verify/Engrola_2023_arsenite_oxidase_antimonite.pdf"
raw_sha256: b64f5d29ac1ed9470e4b0bc53b1be7a732a955d08050807b3e07069f976a8cdd
metals: [As, Sb]
ingredients: []
products: []
matrices: ["enzyme-structure"]
jurisdictions: [INT]
evidence_fitness:
  supports: ["relative oxidation rate of Sb(III) versus As(III) by arsenite oxidase", "structural mechanism of arsenite and antimonite oxidation at the molybdenum active site", "mutagenesis evidence for catalytic residues"]
  does_not_support: ["food occurrence data", "dietary exposure estimates", "regulatory limit derivation"]
audience: [regulator, educator]
sources: 0
wiki_doi: null
updated: 2026-11-07
---

# Engrola et al. 2023: Arsenite oxidase mechanism with arsenite and antimonite

## Overview

Engrola et al. (2023) solved four high-resolution crystal structures of arsenite oxidase (Aio) in complex with arsenic and antimony oxyanions, capturing putative reaction intermediates at the molybdenum active site. The study combined X-ray crystallography, site-directed mutagenesis, and density-functional theory (DFT) calculations to clarify the catalytic mechanism by which Aio oxidizes arsenite to the less toxic arsenate. The enzyme also oxidizes antimonite, but roughly 6,500 times more slowly than the corresponding arsenite salt (p. 1). The structures were obtained from two bacterial sources: Aio from Pseudorhizobium banfieldiae str. NT-26 (NT-26 Aio) and from Alcaligenes faecalis (Af Aio).

The work is relevant to the wiki because it quantifies the kinetic discrimination between arsenic and antimony by the principal microbial arsenic-oxidizing enzyme, confirms shared chemistry between the two metalloids at a conserved active site, and identifies the structural basis for the 6,500-fold rate difference. It has no food occurrence data and does not support contamination profile values.

## Study design

The study used crystallographic soaking experiments: existing Aio crystals were oxidized with potassium ferricyanide, then soaked in buffers containing either 10 mM sodium arsenite (As(III)) or 10 mM potassium antimonyl tartrate trihydrate (Sb(III)) for varying durations before flash-freezing in liquid nitrogen (p. 6, Experimental procedures). Four crystal structures resulted: Af Aio-As_c (3-minute soak, 1.57 Angstrom resolution), Af Aio-As_d (14-minute soak, 1.44 Angstrom), NT-26 Aio-Sb_d (120-minute soak, 1.89 Angstrom), and Af Aio-Sb_e (30-minute soak, 1.84 Angstrom) (Figs. 3 and 5, pp. 3-5). Site-directed mutagenesis of NT-26 Aio produced D169A and E453A single-residue mutants; enzymatic activity was measured spectrophotometrically using the artificial electron acceptor 2,6-dichlorophenolindophenol at 600 nm, with 2.5 mM sodium arsenite as substrate, in three replicates per variant (p. 6, Experimental procedures).

## Samples

This is a structural enzymology study; there are no environmental, food, or biological specimens. The crystallographic material consisted of recombinantly expressed Af Aio and NT-26 Aio heterologously produced in Escherichia coli DH5-alpha cells at 21 degrees Celsius for 24 hours in LB medium with 40 micromolar IPTG, then purified by Ni2+ affinity chromatography and, for NT-26 Aio wild type, an additional size-exclusion step (p. 6). Crystal dimensions were approximately 0.2 by 0.2 by 0.05 mm (p. 6). Mutagenesis assays used three replicate measurements per variant (Table S4, referenced p. 2). No certified reference material or food matrix was analyzed.

## Results

The four crystal structures revealed arsenic or antimony directly coordinated to the molybdenum cofactor (Moco) via bridging oxygen atoms in the active site (p. 2). Two structural classes were observed. In the Af Aio-As_c and Af Aio-Sb_e structures, molybdenum is pentacoordinated with the substrate atom connected through a single bridging oxo ligand; the Mo-O1 distance in Af Aio-Sb_e ranged 2.6 to 3.2 Angstrom, too long for a covalent bond (Table S7, referenced p. 3). In the NT-26 Aio-Sb_d and Af Aio-As_d structures, the molybdenum atom bears two bridging oxygen atoms shared symmetrically with the substrate, with Mo-O single bond distances of approximately 2 Angstrom (range 1.77 to 2.29 Angstrom across the four molecules of the asymmetric unit, Table S7); the arsenic or antimony atom sits vertically above the Mo dithiolene plane at approximately 3.1 Angstrom for arsenic and 3.3 Angstrom for antimony (p. 3).

The DFT-calculated free energy profile for arsenite oxidation showed a 24 kcal/mol barrier for the initial nucleophilic attack of arsenite on the oxidized six-coordinated Mo(VI) (from A to C in Fig. 4A), a 3 kcal/mol barrier for the subsequent oxo-transfer step (from C' to D), and a 19 kcal/mol barrier for water coordination in the enzyme regeneration step (E back to A) (Fig. 4A, pp. 4-5). The formation of two symmetrical mu-oxo bridges was described as facile with an 11 kcal/mol barrier (Fig. 4B, p. 5).

Mutagenesis of two conserved acidic residues at the entrance of the substrate funnel produced measurable activity losses. The D169A substitution decreased specific activity by 30%, and the E453A substitution decreased it by 65%, relative to wild-type NT-26 Aio (Table S4, referenced p. 2). Both residues are located approximately 8 Angstrom from the molybdenum ion and do not make direct contacts with the arsenic or antimony ligands but stabilize a conserved water-mediated hydrogen-bond network that connects to the substrate (p. 2).

The key kinetic comparison -- antimonite is oxidized approximately 6,500 times more slowly than arsenite -- is cited from Wang et al. (2015) (reference 24 in the paper) and treated as an established parameter motivating the structural study (p. 1).

## Methods

Crystallography: sitting drop vapor diffusion for NT-26 Aio (2 microliters protein plus 1 microliter reservoir of 2 M ammonium sulfate, 0.1 M Hepes pH 7.5, 2% v/v PEG 400) and for Af Aio (1 microliter protein plus 1 microliter of PEG-based reservoir; full conditions in Table S1). Diffraction data collected at PXIII of the Swiss Light Source, Biomax at MAX IV, and XALOC at ALBA. Data processed with XDS and STARANISO; quality assessed with Aimless (CCP4); structure determination by molecular replacement against PDB 5NQD (NT-26 Aio) and 1G8K (Af Aio); interactive refinement with COOT, Refmac5, and PHENIX (p. 6). Ligands placed only at the late stage of refinement using 2Fo-Fc, Fo-Fc, and anomalous difference Fourier maps (p. 6). Crystal structures deposited in the Protein Data Bank: Af Aio-As_c (PDB 8CFF), NT-26 Aio-Sb_d (PDB 8CCQ), Af Aio-As_d (PDB 8CH9), Af Aio-Sb_e (PDB 8CGS) (p. 7).

Activity assays: 10 mM potassium ferricyanide pre-oxidation for 10 minutes, excess removed by PD-10 desalting column with 50 mM MES pH 5.5; reduction of 2,6-dichlorophenolindophenol monitored at 600 nm (molar extinction coefficient difference 8.2 mM-1 cm-1) with 2.5 mM sodium arsenite substrate (p. 6).

DFT calculations: GAUSSIAN 09 software with the PBE0 functional (basis set b1: Stuttgart/Dresden ECP for Mo and As with polarization functions; 6-31G(d,p) for all other atoms); single-point energies at the M06/b2//PBE0/b1 level; solvent effects modeled by the Polarizable Continuum Model with SMD solvation; the molybdopterin cofactor was replaced by a simplified dithiolate model (pp. 6-7).

## Instrument and detection limits

LOD and LOQ are not reported. This is a structural study using synchrotron X-ray crystallography and in vitro spectrophotometric activity assays; LOD/LOQ in the food-chemistry sense are not applicable. No certified reference materials or recovery data are reported.

## Regulatory context

The paper cites the World Health Organization maximum recommended levels for arsenic (10 ppb) and antimony (20 ppb) in drinking water as background motivation for arsenite biosensor research (p. 1, citing WHO Guidelines for Drinking-Water Quality, 4th edition, 2022). No food regulatory limits are discussed, and the study does not generate data relevant to food safety limits.

## Evidence fitness

Supports the 6,500-fold rate difference between arsenite and antimonite oxidation, the structural mechanism of Aio-catalyzed arsenite oxidation via mu-oxo bridged intermediates, and the mutagenesis finding that Asp169 and Glu453 contribute to catalysis by maintaining a conserved water network rather than by direct substrate contact. Does not support food occurrence data, dietary exposure estimates, or food regulatory limits. This source provides mechanistic context for the arsenic and antimony pages but does not change any contamination profile value.

## Limitations

Not an exposure study. No food matrices are examined. The kinetic ratio of approximately 6,500-fold (Sb(III) versus As(III) oxidation rate) originates from Wang et al. (2015), cited by this paper but not independently measured here. Crystal occupancy of arsenic and antimony atoms is partial and was refined iteratively; the authors note that solubility differences and crystal channel diffusion affect reactivity (pp. 2-3). The DFT model uses a simplified dithiolate in place of the full molybdopterin cofactor (p. 7). The Af Aio-As_c structure is interpreted as a dead-end or side-product rather than a productive intermediate based on the DFT profile (p. 5).

## Related evidence

- [[metals/arsenic]]
- [[metals/antimony]]
- [[synthesis/antimony-in-baby-products]]

<!-- BEGIN: hmi-page-history -->
## Update history

Rebuilt 2026-11-07 from open-access PDF (PMC10448176; CC BY). All prior content replaced. Sections added: Overview, Study design, Samples, Results, Methods, Instrument and detection limits, Regulatory context, Evidence fitness, Limitations.
<!-- END: hmi-page-history -->
