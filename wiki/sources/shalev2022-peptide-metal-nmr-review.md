---
type: source
raw_handle: MFK_02-studying-peptide-metal-ion-complex-structures-b
cite_key: shalev2022-peptide-metal-nmr-review
title: "Studying Peptide-Metal Ion Complex Structures by Solution-State NMR"
authors: ["Deborah E. Shalev"]
year: 2022
publication: "International Journal of Molecular Sciences"
doi: "10.3390/ijms232415957"
source_type: peer-reviewed
evidence_tier: B
license: "CC-BY-4.0"
access_url: "https://doi.org/10.3390/ijms232415957"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/02_Studying_Peptide-Metal_Ion_Complex_Structures_by_Solution-St.pdf"
raw_sha256: "22801e1e3069456c6b25487339ce90d981db500f617bb6ffef3edcce8ddc9d0a"
near_duplicates: []
metals: [Ni, Al]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Narrative methodological review; no primary measurements."
updated: 2026-06-08
---

# Shalev 2022 — Solution-state NMR methods for studying peptide-metal ion complex structures

## Overview

Shalev (Department of Pharmaceutical Engineering, Azrieli College of Engineering Jerusalem, with a joint appointment at the Wolfson Centre for Applied Structural Biology, Hebrew University of Jerusalem) reviews solution-state nuclear magnetic resonance (NMR) approaches for characterising the structure of peptide-metal ion complexes. The review systematically surveys the published NMR literature on each of the ten essential metals (Na, K, Mg, Ca, Fe, Mn, Co, Cu, Zn, Mo — with copper split methodologically into diamagnetic Cu(I) and paramagnetic Cu(II) cases) and several biologically relevant non-essential metals (Al, Ni, Ga, Pd, Ag, Pt, lanthanides), framed around the diamagnetic-versus-paramagnetic distinction that drives NMR experiment selection. The review is a secondary methodological synthesis with no primary measurements; its value to the wiki is as a NMR-methods background reference for any downstream page that discusses peptide-metal coordination chemistry, ATCUN-motif Cu/Ni binding, aluminum-amyloid interactions, or the use of solution NMR as a characterisation tool for chelation studies.

## Why this matters

- It is the most current peer-reviewed methodological review of solution-state NMR applied to peptide-metal complexes, with a search window of 2012-2022 (Clarivate Web of Science, accessed 13 November 2022, search terms `NMR`, `structure* OR structural`, `binding`, `peptide*` and each individual metal). For any wiki page that needs to summarise what is and is not feasible to determine about a peptide-metal complex by NMR, this paper organises the methodological landscape.
- It explicitly distinguishes diamagnetic from paramagnetic metal-NMR experiments and explains why this distinction governs whether canonical 2D NMR structure determination is possible at all. Cu(I), Cu(II), Mn(II), Fe(II)/Fe(III), Co(II)/Co(III) high-spin/low-spin, Ni(II) in different geometries, Ga(III), and lanthanide-substitution chemistry are each placed within this framework with worked examples.
- It catalogues the methodological tools available for paramagnetic systems — paramagnetic relaxation enhancement (PRE), pseudo-contact shifts (PCS), residual dipolar couplings (RDC) — and provides the vocabulary that downstream synthesis pages will need when reading the primary peptide-metal NMR literature.
- It documents the ATCUN (amino-terminal copper-and-nickel binding) motif and its NMR characterisation across linear and cyclic peptide models with Co(II), Ni(II), and other divalent ions, which is the structural-biology background relevant to the HMTc-priority analytes Ni and Cu (Cu is out of HMTc 10-analyte scope; Ni is in scope).

## Key concepts and structure

The review is organised into twelve top-level sections: introduction (Section 1), metal binding in biological systems (Section 2), peptides as biomimetics for metal binding (Section 3), applications of metal-binding peptides (Section 4), challenges of using peptides (Section 5), use of NMR in peptide-metal complexation (Section 6), diamagnetic metal-peptide NMR studies (Section 7, covering Na/K, Mg, Ca, Cu(I), Zn, Mo), paramagnetic metal-peptide NMR studies (Section 8, covering Mn, Fe, Co, Cu(II)), metal substitutions (Section 9), some non-essential elements (Section 10, covering Al, Ni, Ga, Pd, Ag, Pt, lanthanides), considerations in choosing metals (Section 11), and outlook (Section 12). The reference list contains 199 entries.

### The biological-chemistry framing the review opens with

Ten of the twenty elements considered essential for life are metals: Na, K, Mg, Ca, Fe, Mn, Co, Cu, Zn, and Mo. The review cites Metal PDB as showing that over 30 % of protein structures in the Protein Data Bank bind metal. The author defines a "peptide" for the purposes of the review as a molecule with fewer than 23 residues, anchored to the minimum polypeptide length the Protein Data Bank accepts at the time of writing.

### Diamagnetic vs paramagnetic metals as the methodological dividing line

For solution-state NMR purposes, the review categorises metals according to whether they generate paramagnetic effects on NMR spectra:

- **Diamagnetic** metals (e.g., Mg(II), Ca(II), Cu(I), Zn(II), Ga(III), Pd(II), Ag(I), Pt(II)) allow canonical structure determination by 2D NMR using through-bond and through-space (nOe) experiments.
- **Paramagnetic** metals (e.g., Mn(II), Cu(II), Fe(II)/Fe(III), high-spin Co(II), Ni(II) in certain geometries, lanthanides) cause line-broadening (paramagnetic relaxation enhancement, PRE) and chemical-shift perturbation (pseudo-contact shifts, PCS) within a "blind sphere" of up to several angstroms around the metal ion that erases NMR signals. Special methodology (PRE/PCS/RDC) is required to extract structural information from these systems, and the methodology is itself an active research area.
- **Substitution chemistry** is a recurring strategy: paramagnetic Cu(II) studied via diamagnetic Pd(II)/Ag(I); diamagnetic Ca(II) substituted by paramagnetic Tb(III) to introduce shift reagents; paramagnetic Fe(III) replaced by diamagnetic Ga(III) to enable canonical 2D NMR.

### Methodological tools for paramagnetic systems

- **Paramagnetic relaxation enhancement (PRE):** line-broadening proportional to the distance from the paramagnetic centre, usable up to ~35 Å distance information.
- **Pseudo-contact shifts (PCS):** chemical-shift perturbations that encode geometric information about the position of nuclei relative to the paramagnetic ion.
- **Residual dipolar couplings (RDC):** orthogonal structural restraints used to refine the geometry of paramagnetic complexes.
- **1D 1H-NMR titration:** signal-broadening as a function of titration is a workhorse for identifying binding residues even when full structure determination is not feasible.

### Peptide-metal NMR by metal (selected wiki-relevant entries)

The review treats each metal individually. The wiki-relevant entries are:

- **Mg(II), Ca(II):** discussed primarily via EF-hand and calmodulin-derived peptides. Mg(II) binds weakly; no NMR studies are reported on isolated magnesium-peptide complexes shorter than 23 residues. Ca(II) binding is characterised on the six-residue silk-moth silk peptide and on the N- and C-terminal calmodulin-derived peptides.
- **Cu(I) (diamagnetic):** structures determined on linear and cyclic peptide models of conserved Cu-chaperone binding sites and on the N-terminal Aβ16 fragment of amyloid beta (Aβ). Sample preparation requires a glove box and sealed NMR tubes to prevent oxidation.
- **Cu(II) (paramagnetic):** characterised primarily through line-broadening analysis on titration and by substitution with diamagnetic Pd(II), Ag(I), or Ni(II) followed by Cu(II) substitution into the resolved structure. Cyclic peptides designed to bind Cu(II) are discussed.
- **Zn(II) (diamagnetic):** zinc-finger model peptides, amyloid-beta zinc-induced oligomerisation studies (including the familial Taiwanese mutation D7H homodimer), zinc-bound dipeptide self-assembly. Cyclic peptides with linear tails show conformational and thermodynamic stability for modelling zinc fingers.
- **Mo:** no peptide-NMR studies reported; molybdenum-peptide systems exist (Noni juice, antimicrobial Mo-polyoxometalate, MoS2-bound peptides) but have not been characterised by NMR.
- **Mn(II) (paramagnetic):** characterised via 1D 1H-NMR line-broadening on a 30-residue Cap43 decapeptide repeat (prion-disease context), on a Mn(II)-Aβ(13-23) fragment, and on a 30-residue YPk9-derived peptide (Parkinson's-disease context).
- **Fe(II)/Fe(III) (paramagnetic):** characterised on grafted 29-residue iron-binding peptide models, magnetotactic-bacteria-derived peptides reacted with Fe(II), Fe(III), Ni(II), and Zn(II), and on an 8-residue microperoxidase-8 model bound to heme iron.
- **Co(II)/Co(III) (paramagnetic for Co(II); Co(III) high- vs low-spin):** Co(II) characterised on Aβ(13-23) fragment, on the Cap43 decapeptide repeat, and on chiral cobalt oxide nanoparticle-binding tripeptides. Co(III) characterised on Aβ-protein-fragment Schiff-base complexes and on cobalt-fibrinopeptide-B complexes in thrombosis context.
- **Ni (HMTc-priority analyte):** the amino-terminal copper-and-nickel binding (ATCUN) motif is reviewed across linear and cyclic peptide models with Co(II), Ni(II), and other divalent ions. Ni(II)-peptide models derived from the C-terminal of histone H2B were studied to elucidate the role of Ni in carcinogenesis. Ni(II) interactions with a peptide derived from the human Toll-like receptor 4 (hTLR4) were studied in the context of nickel-induced contact allergy.
- **Aluminum (HMTc-priority analyte):** mentioned in the non-essential-elements section as one of several metals whose interactions with amyloid-beta-derived peptides have been studied by NMR to gain insights into possible Alzheimer's-disease mechanisms; the review does not summarise the structural detail in depth in this section and the reader is referred to the cited primary literature.
- **Ga, Pd, Ag, Pt, lanthanides:** characterised as diamagnetic substitutes for paramagnetic essential metals, as platinum anticancer-related complexes, and as paramagnetic shift reagents (lanthanides). Silver binds the human copper transporter 1 (hCtr1) extracellular domain micelle-bound peptide; platinum binding to a transferrin receptor binding sequence is characterised by NMR titration.

### Outlook (Section 12) — the review's own framing

The author closes by noting that approximately one third of known proteins bind metal and that peptide models provide a way to focus structural studies on the binding region of a larger metalloprotein. The Outlook explicitly mentions metallopeptide delivery systems for therapeutic and nutritional applications, supramolecular metallopeptide structures as an expanding research direction, and the still-untapped potential of NMR applied to molybdenum-peptide systems.

## Methods (brief)

This is a narrative review. The author conducted a Clarivate Web of Science search (accessed 13 November 2022) with the search terms `NMR`, `structure* OR structural`, `binding`, `peptide*`, and each individual essential metal as a Topic field. The search window covers 2012-2022. Only solution-state NMR studies were considered (solid-state NMR and X-ray crystallography studies are explicitly excluded). The review further restricts to studies of peptides under 23 residues, anchored to the Protein Data Bank's minimum polypeptide length, with the caveat that longer polypeptides (e.g., calmodulin at ~150 residues) are also discussed where they are referred to as peptides in the underlying literature. No PRISMA flow, no inclusion/exclusion criteria, no risk-of-bias assessment is reported. The reference list contains 199 entries spanning 1986 to 2022, drawn from journals including *Annual Review of Biophysics*, *Chemical Reviews*, *Journal of the American Chemical Society*, *Inorganic Chemistry*, *Chemistry — A European Journal*, *Dalton Transactions*, *Proceedings of the National Academy of Sciences*, *Journal of Biological Chemistry*, *Bioorganic & Medicinal Chemistry*, *Protein Science*, and *Int. J. Mol. Sci.* itself.

The journal (IJMS, MDPI) is open-access; the article is published under CC BY 4.0. The author declares no external funding and no conflicts of interest. Academic Editors: Jean-Marc Lancelin and Manuela Grimaldi.

## Implications

- **Certification:** The review contributes no occurrence data and no exposure data, so it does not move any HMTc threshold-setting work. Its value for HMTc is indirect — it is a methodological background reference for any future page that discusses peptide-metal coordination chemistry as it relates to Ni or Al, the two HMTc-priority analytes that receive any substantive treatment in this review.
- **App:** No routing to ingredient or product pages. This source contributes background reading for the [[metals/nickel]] and [[metals/aluminum]] pages on the topic of peptide-mediated coordination chemistry and the NMR methodology used to characterise it; it does not bear on contamination occurrence in any food or personal-care matrix.
- **Courses:** Useful as a single-source orientation to the diamagnetic-vs-paramagnetic NMR methodological framework, the ATCUN motif vocabulary, and the substitution-chemistry strategies that the analytical-chemistry literature uses to characterise metal-peptide complexes. Should not be cited as the authority for any specific quantitative claim; trace claims to their primary references first.
- **Microbiome:** Not relevant. The review does not engage the gut microbiome or the heavy-metal-microbiome axis. WikiBiome federation is unlikely to draw on this source.

## Limitations

This is a narrative review with no declared inclusion/exclusion criteria, no PRISMA flow, and no risk-of-bias assessment. The review's stated search window is 2012-2022, which excludes pre-2012 foundational NMR-peptide-metal work that downstream readers may need to consult independently. The review's definition of "peptide" as under 23 residues is anchored to the Protein Data Bank's minimum and is relaxed in the body of the review to include calmodulin and similar longer polypeptides where the underlying literature uses "peptide" descriptively — readers should not take the 23-residue cap as a strict scope statement. The review is methodological and does not report quantitative binding constants, stoichiometries, or structural coordinates of its own; all such values must be traced to the primary citations. Molybdenum-peptide NMR is acknowledged as an empty literature, not as a gap the review fills. Two HMTc-priority analytes (Pb and Cd) are not addressed at all by this review, and one (Hg, including MeHg) is also absent; this further limits the source's HMI-routing usefulness to Ni and Al only.

## Wiki pages this source may touch

- [[metals/nickel]]
- [[metals/aluminum]]
- [[mitigation/remediation-evidence]]

## Verification notes

**Existing-page check.** DOI grep (`10.3390/ijms232415957`), raw_handle grep (`MFK_02-studying-peptide-metal-ion-complex-structures-b`), and cite-key glob (`shalev2022-*`) over `wiki/sources/` on 2026-06-08 returned no matches. This is a NEW source page — no prior version to merge-enhance.

**Evidence tier.** B (secondary narrative review). The paper reports no primary measurements and declares no systematic search strategy. A-tier is reserved for primary peer-reviewed studies and authoritative agency monographs; this is neither.

**Metals frontmatter.** From the HMTc 10-analyte priority list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn), the review substantively discusses only Ni and Al; both are recorded in the `metals:` frontmatter. The review's primary structural-NMR content covers Cu(I), Cu(II), Zn(II), Mn(II), Fe(II)/Fe(III), Co(II)/Co(III), Mg(II), Ca(II), Ga(III), Pd(II), Ag(I), Pt(II), and lanthanides, none of which are on the HMTc 10-analyte list and so are not added to frontmatter. Pb, Cd, MeHg, tHg, iAs, tAs, Cr-VI, and Sn are not addressed at all by this review. Aluminum is included in `metals:` even though the review's treatment is brief (a single paragraph in the non-essential-elements section, pointing to primary Aβ-Al interaction studies) because aluminum is an HMTc analyte and this source is the only methodological NMR entry-point the wiki has for that topic.

**Ingredients, products, matrices, jurisdictions frontmatter.** All empty. The source measures nothing in any food, beverage, personal-care, or environmental matrix; it reviews NMR methodology for peptide-metal complexes only. No jurisdiction is studied — the author is based in Jerusalem (Israel) but the review is conceptually international and no national regulatory or occurrence frame applies.

**Sample size.** Null. This is a review with no sampling frame.

**Brand firewall (Part 12).** No commercial brand names appear in the source body. The reference list cites scientific software (UCSF Chimera, HyperChem) only in the context of computational methodology; per the verification checklist's Exception 2, scientific-method software/instrument vendors are permitted in methods context. The review also names scientific instruments and reagents only through its primary-source citations, not in body text. No firewall action required.

**HMTc firewall (Part 2).** The review contains no HMTc-threshold language, no claims of "consistent with the literature consensus" framing in either direction, no consumer-audience risk advisories, and no occurrence or exposure language. The Outlook section mentions therapeutic and nutritional metallopeptide delivery systems as an aspirational research direction but does not propose any threshold or safety claim. No firewall action required.

**Date arithmetic.** Received 14 November 2022, accepted 13 December 2022, published 15 December 2022 — all consistent with the year frontmatter (2022). Article DOI 10.3390/ijms232415957 resolves to *Int. J. Mol. Sci.* 2022, Vol 23, Article 15957 (cover citation: *Int. J. Mol. Sci.* 2022, 23, 15957).

**Reviewer's note on scope fit.** This paper is in the "Black Market Peptide Metal Survey / heavy_metals_peptides" Manual Fetch Kimi folder alongside [[luo2024-peptides-heavy-metal-remediation]]. Like Luo 2024, this paper is in scope per the 2026-06-02 commit `3f47f95 — scope: mitigation/remediation is in-scope, not a skip`, but its actual wiki contribution is even narrower than Luo's: this is a pure-methods review on solution NMR, not a remediation review. Its value is as a methods background reference if any downstream page discusses how peptide-metal coordination is characterised structurally — which is upstream of any contamination, occurrence, exposure, or mitigation claim the wiki will make. Karen's manual-fetch curation appears to be assembling a peptide-metal corpus for the eventual mitigation-evidence chapter; this paper is a useful but indirect contributor to that chapter.

**Audit subagent (2026-06-08) verdict: PROMOTE.** Five checks (numerical fidelity, slug vocabulary, speciation/methods, brand firewall, HMTc firewall) returned three ✅ and two ⚠️.
- Check 1 numerical-fidelity ⚠️ flagged that the opening sentence listed "Na, K, Mg, Ca, Cu(I), Cu(II), Zn, Mn, Fe, Co, Mo" (11 entries) while the PDF p.1 §1 lists 10 essential metals ("Na, K, Mg, Ca, Fe, Mn, Co, Cu, Zn and Mo"). The Cu(I)/Cu(II) split is faithful to the review's diamagnetic-vs-paramagnetic methodological organisation (Sections 7.4 and 8.4 treat them as separate cases) but they are one essential element, not two. **Verified against PDF p.1 §1 — finding correct; corrected the opening sentence to "each of the ten essential metals (Na, K, Mg, Ca, Fe, Mn, Co, Cu, Zn, Mo — with copper split methodologically into diamagnetic Cu(I) and paramagnetic Cu(II) cases)".**
- Check 2 slug-vocabulary ⚠️ flagged that `[[mitigation/remediation-evidence]]` is not in the taxonomy snapshot. **Verified against the snapshot — finding correct on snapshot coverage, but this is the same snapshot-coverage gap addressed on the [[luo2024-peptides-heavy-metal-remediation]] sibling audit (2026-06-08 commit `ba01991`) and is in-scope per commit `3f47f95 — scope: mitigation/remediation is in-scope, not a skip`. The wikilink points to a real `wiki/mitigation/remediation-evidence.md` section. No content correction applied; the snapshot will catch up in a future refresh, per the Luo precedent.**

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
