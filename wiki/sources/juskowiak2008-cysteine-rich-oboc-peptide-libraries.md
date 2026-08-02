---
type: source
raw_handle: MFK_50-synthesis-screening-and-sequencing-of-cysteine-
cite_key: juskowiak2008-cysteine-rich-oboc-peptide-libraries
title: "Synthesis, Screening, and Sequencing of Cysteine-Rich One-Bead One-Compound Peptide Libraries"
authors: [Juskowiak GL, McGee CJ, Greaves J, Van Vranken DL]
year: 2008
publication: "Journal of Combinatorial Chemistry, 2008;10(5):726–731"
doi: "10.1021/cc800087y"
source_type: peer-reviewed
evidence_tier: C
license: "ACS subscription (full-text held in raw/)"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/50_Synthesis_Screening_and_Sequencing_of_Cysteine-Rich_One-Be.pdf"
raw_sha256: "7ed3f7dd358a5b747d382bd05fa5c295b44568a2e2d2d863e36a542e6d91d0cf"
access_url: "https://doi.org/10.1021/cc800087y"
metals: []
ingredients: []
products: []
matrices: [synthetic-peptide-library, methodology-context]
jurisdictions: [GLOBAL]
near_duplicates: []
sample_n: null
sample_population: "Primary methodology paper. Synthesized a cysteine-biased decapeptide one-bead one-compound (OBOC) combinatorial library Ac-X8-KM on 5 g of 130 µm Rapp Polymer TentaGel HL NH2 resin (~6.5 million beads; 50% cysteine biased at each randomized position; methionine and isoleucine excluded). Sequencing validation drew 14 random beads (10 yielded a doubly charged molecular ion suitable for MS/MS; 9 yielded unambiguous sequences Cys01–Cys09). Cysteine-free comparator library Ac-KX8KM (X ≠ C, M, I) gave 6/8 unambiguous sequences. Screening validation suspended 0.33 g resin (~430 000 beads, including 3 spiked beads bearing the known biarsenical tag Ac-WDCCPGCCKM) in 50 mL potassium-rich phosphate buffer with 1 mM β-mercaptoethanol / 0.5 mM BAL / 2.6 mM tris-carboxyethylphosphine·HCl (Experimental-Section value; the paper's main text rounds to 2 mM), exposed to 0.005 µmol FlAsH·EDT2 over 6 h; six green-fluorescent beads selected by UV lamp, three yielded sequenceable peptides."
updated: 2026-06-08
---

# Juskowiak 2008 — Synthesis, screening, and sequencing of cysteine-rich OBOC peptide libraries

## Overview

Juskowiak, McGee, Greaves, and Van Vranken at UC Irvine reported the first method for synthesizing, screening, and sequencing one-bead one-compound (OBOC) peptide libraries that incorporate cysteine at variable positions. The paper is a synthetic and analytical chemistry methodology study: it solves three coupled bench problems that had previously kept cysteine out of OBOC libraries — tritylcysteine aggregation during Fmoc solid-phase synthesis, side-product formation during cyanogen bromide cleavage of cysteine-rich peptides from TentaGel beads, and direct MS/MS sequencing of cleaved cysteine-rich peptides from single 130 µm beads. Validation used the biarsenical fluorophore FlAsH·EDT2 to retrieve beads bearing the known tetracysteine binding motif CCXXCC. The motivation cited for the work spans tetracysteine tags for live-cell fluorescence imaging, environmental remediation and phytoremediation of cadmium and mercury via cysteine-rich peptide ligands, and cysteine-rich pharmaceuticals; the experimental work itself does not measure cadmium, mercury, lead, or any other HMI-tracked heavy metal in any food, personal-care, or environmental matrix. The paper enters the HMI corpus as upstream methodology context for the bioremediation-peptide and metal-chelating-peptide literature already represented in the same Kimi peptide folder ([[luo2024-peptides-heavy-metal-remediation]], [[lu2022-metal-chelating-peptides-review]], [[grill1989-phytochelatins-heavy-metal-binding-peptides-plants]], [[shalev2022-peptide-metal-nmr-review]], [[han2025-peptide-zinc-complexation-aquatic-review]], [[urbina2018-biomining-peptide-metal-recovery]], [[spallacci2025-bioinformatics-biomimetic-metal-peptide]]).

## Key numbers

The paper reports library-scale parameters, MS/MS sequencing yields, and the sequences of cysteine-rich peptides retrieved from individual beads. No occurrence or exposure values for HMI heavy metals are reported; values below are the library, screen, and sequencing parameters the paper publishes.

| Parameter | Value | Notes |
| --- | --- | --- |
| Library composition | Ac-X8-KM-TentaGel | Decapeptide; randomized X8 with 50% cysteine at each position; Met and Ile excluded from X; C-terminal Lys for MS/MS y-ion bias; N-terminal acetyl to suppress b-ions |
| Resin | 5 g of 130 µm Rapp Polymer TentaGel HL NH2 (0.45 mmol/g, batch 124.782) | ≈ 6.5 million beads total |
| Potential diversity | `18⁸` (≈ `10¹⁰`) | All 20 amino acids except Met and Ile |
| Coupling reagents | 3 eq amino acid, 3 eq HBTU, 3 eq HOBt, 6 eq DIPEA in NMP | NMP replaces standard 1:1 DMF/CH₂Cl₂ to suppress tritylcysteine aggregation and racemization |
| Side-chain deprotection / cleavage from acid-labile linker | 94% TFA / 2.5% ethanedithiol / 2.5% H₂O / 1% triisopropylsilane, 3 h | |
| Bead alkylation (pre-CNBr) | 50 mM DTT in 0.4 M NaHCO₃ / 30% aq. methanol, 1 h; then 0.5 M iodoacetamide in 30% aq. methanol, 30 min; second 50 mM DTT wash, 15 min | Methanol cosolvent required to sink beads below air-water interface for complete reduction/alkylation |
| Cyanogen bromide cleavage | 20 mg/mL CNBr in 0.1 M HCl, 8 h, room temperature, dark; FlAsH-screen beads use 6.5 h CNBr after a 5-min drying oven step | Cleaves at C-terminal methionine to give peptide-LysHsl (Hsl = homoserine lactone) |
| Single-bead format | Millipore Ultrafree-MC spin tube with 0.22 µm Durapore PVDF membrane; 12 000 rpm benchtop microcentrifuge | |
| LC-QTOF MS/MS column | Waters Symmetry 100 µ × 100 mm C18, 1.7 µm | 350 nL/min, 5% → 80% B over 40 min; electrospray 3 kV, cone 30 V; argon collision gas at 4 × 10⁻⁵ Torr |
| Random-bead sequencing yield (cysteine-biased library) | 9 of 14 beads unambiguously sequenced (≈ 64%); 10 of 14 gave a usable doubly charged ion | Bead Cys06 truncated (failed coupling); Cys10 incomplete y-series |
| Random-bead sequencing yield (cysteine-free comparator Ac-KX8KM) | 6 of 8 beads (75%) | Comparator not subjected to reduction/alkylation |
| Library sequences Cys01–Cys09 (random beads, cysteine-biased) | Cys01 Ac-CYCFCRCCKM; Cys02 Ac-CCVCCYGYKM; Cys03 Ac-CVWKTCWCKM; Cys04 Ac-CFCCCCCCKM; Cys05 Ac-CCCACCHCKM; Cys06 Ac-DYCWCRCKM (truncated); Cys07 Ac-CCKQCFGFKM; Cys08 Ac-FLAKHGCCKM; Cys09 Ac-CLWFFKPAKM | Each sequence ends in K-M (cleavage yields LysHsl C-terminus) |
| FlAsH·EDT2 screen — library mass | 0.33 g resin (≈ 430 000 beads); spiked with 3 beads bearing Ac-WDCCPGCCKM | Three doped beads added to ensure presence of a positive control sequence within the screened subset |
| FlAsH·EDT2 screen — buffer | 100 mM K-phosphate (pH 7.2), 15 mM NaCl, 0.5 mM MgCl₂, 0.03% Triton X-100, 1 mM β-mercaptoethanol, 0.5 mM BAL, 2.6 mM tris-carboxyethylphosphine·HCl | Approximates mammalian cytoplasmic ion composition |
| FlAsH·EDT2 screen — exposure | 5 µL of 1 mM FlAsH·EDT2 in DMSO (0.005 µmol total) against ≈ 130 µmol total peptide on resin, 6 h shaker | Followed by 10 h stringency wash in FlAsH-free buffer with 1 mM BAL |
| FlAsH-positive sequences | FB1 Ac-CCCKCCCKM (relative fluorescence +++); FB2 Ac-CCPCCCTNKM (+++); FB6 Ac-WDCCPGCCKM (+) | FB6 is the spiked positive control; FB1 matches the previously known CCKXCC motif; FB2 reports a previously unidentified CCPCCC tetracysteine motif |
| Unsequenceable FlAsH-positive beads | FB3, FB4, FB5 (rel. fluorescence ++) | Insufficient peptide for MS/MS; possibly FlAsH-quenched |

## Methods (brief)

The library was assembled by Fmoc solid-phase peptide synthesis on silylated glassware. Met and Lys(Boc) were coupled sequentially to the full batch of TentaGel in a 500 mL SPPS vessel. To force 50% cysteine incorporation at each of the eight randomized positions, half of the resin was coupled to Fmoc-Cys(Trt)-OH in the 500 mL vessel while the remainder was split equally across 17 × 20 mL scintillation vials, one for each non-cysteine, non-methionine, non-isoleucine amino acid; each randomized position used 90-min couplings followed by 30-min piperidine deprotection. The full N-terminus was acetylated with acetic anhydride / DIPEA in NMP and side chains were globally deprotected and cleaved from any acid-labile protecting groups using 94% TFA / 2.5% ethanedithiol / 2.5% H₂O / 1% triisopropylsilane for 3 h.

Single beads were drawn with a pipettor under 50× dissection microscope into Millipore Ultrafree-MC spin tubes. The pre-CNBr alkylation protocol — DTT reduction, iodoacetamide alkylation, second DTT wash — was developed specifically because cysteine-rich peptides treated with cyanogen bromide gave a wide range of side products (thiocyanate adducts, disulfides) that obliterated the molecular ion in LC-MS. Adding 30% aqueous methanol as cosolvent was required to keep single beads at the tube bottom; without methanol, beads floated at the air-water interface and reduction-alkylation was incomplete. After alkylation and rinsing, beads were transferred in 50 µL MeOH to PCR tubes, dried, and cleaved with 30 µL of 20 mg/mL CNBr in 0.1 M HCl for 8 h in the dark at room temperature. The cleavage solution was lyophilized and the residue redissolved in 30 µL 1:1 0.1% formic acid / acetonitrile for nanoflow LC-MS/MS on a Waters QTOF2 with a Waters Symmetry C18 nanocolumn. The doubly charged molecular ion of each peptide was selected and fragmented; the C-terminal LysHsl produced a diagnostic y2 ion at m/z 230, which the authors used as the anchor for manual y-ion series interpretation. Automated MS/MS interpretation was less reliable than manual y-ion walking for these non-tryptic cleaved peptides.

For the FlAsH screen, 0.33 g of resin (~430 000 beads) was prescreened to remove pre-existing fluorescent beads (7 removed), spiked with three beads bearing the known biarsenical tag Ac-WDCCPGCCKM, equilibrated 6 h with 0.005 µmol FlAsH·EDT2 in 50 mL potassium-rich phosphate buffer containing the cell-staining reducing-agent triad (β-mercaptoethanol, BAL = British anti-Lewisite = 2,3-dimercapto-1-propanol, and tris-carboxyethylphosphine) plus Triton X-100, and stringency-washed for 10 h in the same buffer without FlAsH. The library was photographed under an 8 W long-wave UV lamp in 90 mm Petri dishes; six green-fluorescent beads were picked with a 200 µL pipettor under microscope confirmation. Hit beads were processed through the same alkylation/CNBr/MS-MS pipeline with three modifications (water+methanol+dichloromethane prewash of the spin tube, a 5-min drying oven step before CNBr addition, and a shortened 6.5-h CNBr cleavage).

## Implications

The paper sits upstream of every peptide-based heavy-metal remediation, phytoremediation, biomining, and metal-binding-tag programme in the HMI corpus that depends on identifying short cysteine-rich peptide sequences that bind specific metals. By demonstrating that cysteine can be carried through OBOC library synthesis, screening, and single-bead sequencing without being excluded as historically required, it enables the discovery campaigns that papers like [[luo2024-peptides-heavy-metal-remediation]], [[urbina2018-biomining-peptide-metal-recovery]], and [[spallacci2025-bioinformatics-biomimetic-metal-peptide]] survey or model. The validation target FlAsH·EDT2 is a biarsenical: it contains two trivalent arsenic atoms in a fluorescein scaffold and binds the CCXXCC tetracysteine motif by forming bis-thiolate-arsenic bonds. The arsenic in FlAsH is a reagent, not contamination, and the paper does not measure inorganic or organic arsenic in any consumer matrix; it is not evidence for any iAs or tAs occurrence value, regulatory ceiling, or HMTc threshold. The paper likewise does not report Cd or Hg binding constants for its retrieved peptides — the link to environmental remediation of those metals is motivational only, citing prior work by Mejare and Bulow, Meagher, and Malachowski/Stair/Holcombe. The methodology is fully transferable in principle to screens against Cd²⁺ or Hg²⁺ themselves, but that work is left to other groups and is not done here.

Within the wiki/HMTc firewall, this source bears on no per-row P97/P45 percentile calculation, no regulatory crosswalk, and no occurrence summary for any product category. It belongs on `metals/` synthesis pages, ingredient pages, or product pages only as a methods reference if a future synthesis pass on cysteine-rich peptide bioremediation needs to cite the underlying library-construction methodology. The routing layer should leave this source unattached to consumer products and ingredients.

## Verification notes

- PDF read in full (6 pages: abstract + introduction + results/discussion + experimental section + acknowledgments + references). Tables 1 and 2 (random-bead sequences Cys01–Cys10; FlAsH hits FB1–FB6) and Figures 1–4 (LC-MS of CNBr cleavage products with/without iodoacetamide; MS/MS spectrum for bead Cys01 with y-ion ladder; photographs of green-fluorescent beads FB1–FB6) all reviewed.
- DOI `10.1021/cc800087y`, raw handle `MFK_50-synthesis-screening-and-sequencing-of-cysteine-`, and cite-key `juskowiak2008-cysteine-rich-oboc-peptide-libraries` checked against `wiki/sources/`; no existing page (DOI/handle/cite-key greps all empty at ingest time).
- Publication is *Journal of Combinatorial Chemistry* 2008, an American Chemical Society subscription journal; license recorded as `ACS subscription (full-text held in raw/)`. The published article includes free supporting information (MS/MS spectra for Cys02–Cys10 and an Excel calculator for y/b-ion masses) per the ACS Supporting Information cover.
- HMI's 10 HMTc analytes (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) are not measured in this paper. Arsenic appears only as part of the biarsenical reagent FlAsH·EDT2 used as a positive-binding probe for the tetracysteine motif, not as contamination. Cadmium and mercury are named once each in the introduction as motivation for the broader bioremediation field (Rauser 1991; McIntyre 2003; Meagher 2000; Mejare and Bulow 2001; Malachowski, Stair, Holcombe 2004) and once collectively as "toxic heavy metals" the developed methodology could one day screen for. `metals:` is therefore `[]`.
- `ingredients:` and `products:` are `[]`: no food, supplement, personal-care, or consumer matrix is present. The matrix is a synthetic combinatorial peptide library on TentaGel resin.
- `matrices: [synthetic-peptide-library, methodology-context]` follows the convention used for adjacent methodology and synthetic-chemistry sources in the same Kimi peptide folder ([[irankunda2022-imac-mcp-separation-methodology-simulation]] and [[lu2022-metal-chelating-peptides-review]] both use `matrices: [protein-hydrolysates, review-context]`, and several photocatalyst/remediation papers use the `synthetic-<reagent>` + `<method>-context` pattern).
- `jurisdictions: [GLOBAL]` because the work is a methodology paper from a single US academic group with no jurisdiction-specific implications; the methods are applicable globally to any peptide-discovery campaign.
- Evidence tier C: this is a primary methodology paper but it does not generate primary occurrence data for any HMI analyte in any HMI matrix; its value to the corpus is upstream methods-reference rather than direct evidence for any contamination claim.
- Brand firewall: no brand names appear in the paper. Instrument and consumable vendors named in the Experimental Section (Rapp Polymer TentaGel resin, Millipore Ultrafree-MC spin tubes, Waters QTOF2, Waters nanoAcquity HPLC, Waters Symmetry C18, Nikon Coolpix E4500 camera, Spectroline ENF-280C UV lamp, Pipetman) are reagent-grade laboratory equipment, not consumer brands and not attributable to any contamination value.
- Wiki/HMTc firewall: no synthesis claims about contamination thresholds, occurrence values, or HMTc standards were imported. The source does not bear on any HMI per-row P97/P45 calculation.
- Source-type: `peer-reviewed` (primary research article, not a review). Distinction from [[luo2024-peptides-heavy-metal-remediation]] (also `peer-reviewed`) and [[lu2022-metal-chelating-peptides-review]] (`review`) is preserved.
- Funding declared: NIH R33-CA91216; G.L.J. via predoctoral NIH T32 GM007311; C.J.M. via GAANN Fellowship.
- Audit subagent (2026-06-08) flagged internal inconsistency between the `sample_population` frontmatter blob ("2 mM tris-carboxyethylphosphine") and the Key numbers table (2.6 mM). The paper itself is internally inconsistent — main text page 3 says "tris-carboxyethylphosphine (2 mM)" while Experimental Section page 5 says "2.6 mM tris-carboxyethylphosphine·HCl". The Experimental Section is the authoritative protocol value; the frontmatter blob has been aligned to 2.6 mM with a parenthetical note about the paper's main-text rounding. All other audit checks (numerical fidelity, slug vocabulary, methods, brand firewall, wiki/HMTc firewall) passed with no findings to apply. Subagent verdict: PROMOTE.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [f81f4b865](https://github.com/paleofoundation/heavymetalindex/commit/f81f4b865) | 2026-06-08 | minor | Narrative text revised |
| [f35ea1306](https://github.com/paleofoundation/heavymetalindex/commit/f35ea1306) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
