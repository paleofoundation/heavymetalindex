---
type: source
raw_handle: RPMEHG_10-1128-jb-00259-22
cite_key: haft2022-methylmercury-biosynthesis
title: "Methylmercury Biosynthesis"
authors: ["Daniel H. Haft", "a Marc Gwadza National Center for Biotechnology Information", "National Library of Medicine", "Bethesda", "Maryland"]
year: 2022
publication: "Peer-reviewed article"
doi: 10.1128/jb.00259-22
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1128/jb.00259-22"
raw_path: "/Volumes/HMI-Library/research-pulls/metal-deep-dive-methylmercury-mehg/Infant formula powder/Methylmercury selenoprotein synthesis/10-1128-jb-00259-22.pdf"
raw_sha256: "e7f71387ce54777236c74003941fdb10d9c03ac34649c03927ce92c4cfd69858"
metals: [MeHg, tHg, Cd, Pb, tAs, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# Haft et al. 2022 - Methylmercury Biosynthesis

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- are well described (1–3). Much of its energy generation depends on the extraction of
- examined in detail. For one, it performs acetogenesis, converting carbon dioxide (CO2),
- ethanol and butyrate (2). C. difﬁcile also performs Stickland-type fermentations of a
- (SDMHs) (6, 7). Characterized SDMH enzymes of this type include nicotinic acid hydroxylase
- from Clostridium barkeri (8), purine hydroxylase from Clostridium purinolyticum (9), and
- xanthine dehydrogenase EF2570 from Enterococcus faecalis (10). The protein CAJ70074.1
- from C. difﬁcile is 59% identical to the E. faecalis enzyme and is annotated as functionally
- ated with double-cubane proteins (12), which have a highly unusual 8Fe-9S cofactor
- MerB family. Characterized members of that family described in the literature (14) are organo-
- mercurial lyases (EC 4.99.1.2) that are able to cleave substrates such as methyl-mercury. MerB-
- pilosicoli (Spirochaetes) predicted previously by PGAP (15) represented a distinct branch within
- shorter than the typical MerB, averaging 197 residues in length, and all proteins ended in a
- TABLE 1 Information for protein families in this study
- WP_012048218 NF040736 saoE ArsP-related export permease 0/52
- WP_240004094 NF040728 saoL MerB-related organometallo-lyase SaoL 44/45
- WP_242649185 NF040733 saoP ABC transporter permease subunit SaoP 44/52
- WP_012048215 NF040729 saoA ABC transporter ATP-binding subunit SaoA 0/52
- such as WP_008520765.1 of Jonquetella anthropi, WP_208119251.1 of Spirabiliibacterium
- pneumoniae, and WP_151052138.1 of Neisseria zalophi. A multiple sequence alignment,
- shown the CU motif and alignment of Sec to Cys in nonselenoproteins is shown in Fig. S1
- By examining the genomic regions surrounding WP_004454659.1, WP_041443257.1,
- the 15,511-species calibration set. This value is just 0.3% of species, which are all anaero-
- 52 conserved regions. It occurs as a selenoprotein in 44 of the 45 (98%) regions. The
- https://www.ncbi.nlm.nih.gov/protfam for hidden Markov model NF040728. The nine
- notes are listed in Table 1. All members of all nine family are found exclusively in bacte-
- ing RefSeq or when it does its regular reannotations of existing genomes (15).
- Three-dimensional (3D) structural prediction for SaoL. The corrected, full-length,
- selenocysteine-containing protein SaoL of Clostridioides difﬁcile 630 is WP_238476746.1,
- FIG 1 AlphaFold2 structure of SaoLCdiffSec162Cys with structural alignment to MerB structure 3F0P.
- while SaoLCdiffSec162Cys is colored by AlphaFold2 pLDDT scores of local structural prediction
- conﬁdence (see key). SaoL residues Cys99, Asp102, and Sec162Cys (indicated by arrows) align to the
- MerB active site residues Cys96, Asp99, and Cys159.
- prediction by AlphaFold, the U (Sec) in WP_238476746.1 was changed to C (Cys),
- producing a sequence we designate SaoLCdiffSec162Cys, in order to avoid having the
- selenocysteine treated as X. Fig. 1 shows structures for SaoLCdiffSec162Cys, as pre-
- dicted by AlphaFold2, and for MerB from Escherichia coli plasmid R831b, solved
- crystallographically with a bound mercury atom as structure PDB 3F0P. The two
- sequences, although homologous and both recognized by Pfam model PF03243,
- ogy is detected readily by BLAST search with SaoLCdiff or HMM NF040728 versus
- sequences represented in PDB, while Vector Alignment Search Tool (VAST) (16) ﬁnds
- where it binds Hg (17), altering a single amino acid at the metal-binding site that can
- convert MerB to a copper-binding enzyme (17). The ability of heavy metal atoms to

## Methods (brief)

- Analytical method details were not mechanically resolved from extracted text.

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/mercury]]
- [[metals/mercury]]
- [[metals/cadmium]]
- [[metals/lead]]
- [[metals/arsenic]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
