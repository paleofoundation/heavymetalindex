---
type: source
raw_handle: MFK_38-overexpression-of-arabidopsis-phytochelatin-syn
cite_key: lee2003-arabidopsis-pcs1-overexpression-cd-hypersensitivity
title: "Overexpression of Arabidopsis Phytochelatin Synthase Paradoxically Leads to Hypersensitivity to Cadmium Stress"
authors: ["Sangman Lee", "Jae S. Moon", "Tae-Seok Ko", "David Petros", "Peter B. Goldsbrough", "Schuyler S. Korban"]
year: 2003
publication: "Plant Physiology"
doi: "10.1104/pp.014118"
source_type: peer-reviewed
evidence_tier: A
license: "copyright-licensed-private"
access_url: "https://doi.org/10.1104/pp.014118"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/38_Overexpression_of_Arabidopsis_Phytochelatin_Synthase_Paradox.pdf"
raw_sha256: "d92f749175be255ca1185c468f5af69641574d04558615c036db0ddc0ba03b69"
near_duplicates: []
metals: [Cd, Zn, Cu]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Transgenic Arabidopsis thaliana (ecotype Columbia) seedlings — 16 independent T-DNA lines overexpressing C-terminal FLAG-tagged AtPCS1 (pcs1-pcs16, of which pcs1, pcs3, pcs5, pcs8, pcs9 were characterised in depth) and 13 independent T2 cad1-3 complementation lines (cad1pcs1-cad1pcs15, of which 12 were assayed); wild-type Columbia and cad1-3 PC-deficient mutant as controls. Root-elongation assays used 10 plants per line per Cd/Zn/Cu concentration; GSH/NPT/PC analyses used 4 replicate samples per genotype per treatment. No food matrix sampled."
updated: 2026-06-08
---

# Lee et al. 2003 — AtPCS1 overexpression paradoxically causes Cd hypersensitivity in Arabidopsis

## Overview

Lee, Moon, Ko, Petros, Goldsbrough, and Korban (Department of Natural Resources and Environmental Sciences, University of Illinois at Urbana-Champaign; Korea Research Institute of Bioscience and Biotechnology; and Department of Horticulture and Landscape Architecture, Purdue University) report that ectopic overexpression of *Arabidopsis* phytochelatin synthase (AtPCS1) under its own 2.0-kb promoter in transgenic *Arabidopsis thaliana* increases phytochelatin (PC) production 1.3- to 2.1-fold under Cd stress but paradoxically decreases — rather than improves — Cd tolerance, with concomitant hypersensitivity to Zn but not to Cu. The mechanism proposed is PC toxicity at supraoptimal concentrations when glutathione (GSH) is the limiting substrate: reducing intracellular GSH with buthionine sulfoximine (BSO) makes pcs lines more Cd-sensitive than the PC-null cad1-3 mutant, and supplementing the medium with 1 mM GSH abolishes the hypersensitivity. The paper is a primary mechanistic plant-biology study published in *Plant Physiology* 131:656–663 (February 2003); its value to the wiki is conceptual background for [[metals/cadmium]] and the mitigation/remediation-evidence section on the question of whether PCS-only genetic engineering is a viable phytoremediation lever, with no occurrence or food-matrix data.

## Why this matters

- It is one of the canonical primary references documenting that *PCS1* overexpression is not a uniformly Cd-protective intervention in plants; the result complicates the otherwise intuitive "more PCS → more PCs → more Cd chelation → less Cd toxicity" framing that early phytoremediation literature emphasised (Zhu et al., 1999a, 1999b on Indian mustard). The Marques 2025 narrative review of the PC-Cd genetic-manipulation literature ([[marques2025-phytochelatins-cadmium-mitigation]]) cites this paradox as a key example and attributes it to PC toxicity, GSH depletion, and vacuolar-transport saturation; this Lee 2003 paper is the experimental backbone behind one strand of that argument.
- It mechanistically distinguishes three sources of the paradox: (i) PCS-protein toxicity (ruled out by the cad1pcs complementation experiment), (ii) altered antioxidative response (partially ruled out by the hydrogen-peroxide assay), and (iii) PC toxicity at supraoptimal PC:GSH ratios (supported by the BSO and GSH-supplementation experiments). The wiki's mitigation pages will need this mechanistic decomposition when they explain why "more PCS" is not a one-step strategy.
- The Zn-but-not-Cu finding is consistent with the Cu-PC literature (Grill et al., 1987; De Vos et al., 1992; Hartley-Whitaker et al., 2001; Scarano and Morelli, 1998) and supports the framing that PCs are major Cd/Zn chelators but a minor factor in Cu tolerance — relevant to the [[metals/copper]] and [[metals/zinc]] pages' mechanism sections.
- The PC-toxicity hypothesis the authors land on (PCs themselves are toxic at supraoptimal concentrations relative to GSH, similar to free Cys and free GSH at high levels) has downstream implications for any plant-side strategy that aims to flood the PC pathway: it argues for coupling PCS overexpression with γ-glutamyl-Cys-synthetase or GSH-synthetase upregulation (Zhu et al., 1999a, 1999b approach) and with vacuolar-sequestration capacity, not for standalone PCS upregulation.

## Key numbers

All values reported in the source's own units; no conversions applied. Cd concentrations are given as CdCl₂ molarity (the source's framing); 1 µM CdCl₂ contains 1 µmol Cd/L, which corresponds to ≈0.112 mg Cd/L (Cd atomic mass 112.41 g/mol) if a downstream consumer needs mass-concentration units for the metal.

**Transgene expression (Figure 1).** AtPCS1 mRNA relative to wild-type (after β-tubulin normalisation): pcs1, pcs3, pcs9 ≈ 24-fold; pcs5, pcs8 ≈ 13-fold (p. 657). Western blot confirmed FLAG-tagged AtPCS1 protein production in all five lines (Figure 1B).

**Thiol and PC content under 85 µM CdCl₂ for 3 d (Figure 2).** Total GSH was approximately equivalent across WT and pcs lines at both 0 µM Cd (≈350–400 nmol·g⁻¹ FW) and 85 µM Cd (≈430–470 nmol·g⁻¹ FW), with a slight Cd-induced increase in both genotypes. Total non-protein thiol (NPT) increased markedly under 85 µM Cd: WT to ≈2.8 µmol·g⁻¹ FW, pcs lines to ≈3.5–4.1 µmol·g⁻¹ FW (significantly higher than WT, P < 0.05, marked with asterisks for pcs1, pcs3, pcs5, pcs8, pcs9). Total PCs under 85 µM Cd: WT ≈1050 nmol·g⁻¹ FW, pcs lines ≈1500–2100 nmol·g⁻¹ FW; the source's text gives the increase as "approximately 1.3- to 2.1-fold" (p. 657). No PC was detected in any line at 0 µM Cd (data not shown).

**Cd hypersensitivity in root-length assay (Figure 3).** Seedlings grown vertically for 10 d on Murashige-Skoog agar with 0, 50, or 85 µM CdCl₂. At 0 µM Cd, all lines ≈33–35 mm root length (no significant difference). At 50 µM Cd, WT and pcs5/pcs8 ≈16–17 mm; pcs1, pcs3, pcs9 ≈11–12 mm (significantly inhibited). At 85 µM Cd, WT ≈4.1 mm and pcs5/pcs8 ≈3.8–4.0 mm; pcs1, pcs3, pcs9 ≈0.9–1.2 mm (significantly inhibited).

**Zn hypersensitivity (Figure 4B).** Root growth on 0–1.0 mM ZnCl₂ for 8 d. At 0.5 mM ZnCl₂, WT ≈13–14 mm; pcs3, pcs9 ≈8 mm. At 1.0 mM ZnCl₂, WT ≈6–7 mm; pcs3, pcs9 ≈1–2 mm. pcs8 did not show Zn hypersensitivity. (Text on p. 658–659 also reports pcs1 showed Zn hypersensitivity similar to pcs3; pcs5 and pcs8 did not — data not shown.)

**Cu non-effect (Figure 4A).** Root growth on 0–80 µM CuCl₂ for 8 d. pcs3, pcs8, pcs9 and WT all tracked together (≈33 mm at 0 µM; ≈25 mm at 50 µM; ≈0 mm at 80 µM). No genotype-by-Cu interaction.

**cad1-3 complementation (Figure 5).** 12 cad1pcs lines plus WT and cad1-3 grown on 0, 50, 85 µM CdCl₂. At 85 µM Cd, WT ≈4.5 mm; cad1-3 ≈0 mm; most cad1pcs lines (cad1pcs1, cad1pcs2, cad1pcs4, cad1pcs7–cad1pcs15) ≈3.5–5 mm (functional complementation). Only cad1pcs6 ≈1 mm (Cd-hypersensitive); western blot (Figure 5B) showed cad1pcs6 had the highest FLAG-tagged AtPCS1 expression of all lines — higher than pcs1 and pcs3 — consistent with the dose-dependent paradox.

**BSO and GSH manipulation of Cd sensitivity (Figure 6).** Root growth on 0–50 µM CdCl₂ for 10 d. (A) No supplement: cad1-3 most Cd-sensitive (≈0 mm at 50 µM), WT and pcs1, pcs8 ≈10–17 mm. (B) +1 mM BSO: order reverses below 20 µM Cd — pcs1 (and similarly pcs3, pcs9 per text) become more sensitive than cad1-3; pcs8 (and similarly pcs5 per text) track cad1-3. (C) +1 mM GSH: pcs1 and pcs8 hypersensitivity disappears (WT ≈ pcs1 ≈ pcs8 trajectories overlap from 0 to 50 µM Cd); cad1-3 retains hypersensitivity at 20–50 µM Cd.

**Auxiliary measurements (text, p. 658–660, "data not shown").** 1 mM BSO reduced total GSH in WT and pcs lines to ≈42% of nontreated. 1 mM BSO + 20 µM CdCl₂ reduced GSH ≈35% relative to nontreated. 1 mM GSH supplementation increased GSH ≈20% over nontreated; 1 mM GSH + 50 µM CdCl₂ increased GSH ≈60% over nontreated. Treatment of plants with 1 mM Gly, Cys, Glu, γ-Glu-Cys, γ-Glu-Gly, Cys-Gly, or GSH inhibited growth (except Gly), with Cys more toxic than Glu — interpreted as evidence that high free thiol/cysteinyl concentrations are themselves cytotoxic and that supraoptimal PCs may behave similarly.

## Evidence Fitness

This source supports Context only for the wiki's contamination-occurrence layer: it reports no measurements of any food or personal-care matrix, no environmental Cd concentrations, no exposure estimates, and no regulatory threshold proposals. It contributes mechanistic background for the [[metals/cadmium]] page on the topic of plant-side PC-mediated Cd detoxification and for the mitigation/remediation-evidence section on the topic of whether PCS overexpression is a viable phytoremediation strategy. It is a primary peer-reviewed mechanistic study with internal controls (cad1-3 complementation, BSO and GSH supplementation, multiple independent transgenic lines, 4 replicate biochemical samples, 10 plants per root-length data point, P < 0.05 significance testing) and is appropriate for A-tier citation when the wiki discusses the PCS-overexpression paradox; it is not appropriate as evidence for any quantitative crop-level or food-level Cd contamination claim because no such data exist in the paper.

## Methods (brief)

**Plant material.** *Arabidopsis thaliana* ecotype Columbia; cad1-3 PC-deficient mutant (Howden et al., 1995). Sixteen previously developed independent transgenic lines (pcs1–pcs16) carrying a 2.0-kb AtPCS1 promoter::AtPCS1 genomic-DNA::C-terminal FLAG (DYKDDDDL) construct, of which five (pcs1, pcs3, pcs5, pcs8, pcs9) were the main focus. Thirteen newly generated T2 cad1-3 complementation lines (cad1pcs1–cad1pcs15, gaps in the numbering reflecting losses; the figure shows 12 lines plus WT and cad1-3).

**Transformation.** Floral-dip method (Clough and Bent, 1998) using *Agrobacterium tumefaciens* GV3101 (pMP90) harbouring the P₁::gDNA::FLAG construct (Lee et al., 2002). Transformed seeds selected on Murashige-Skoog (MS) agar with 50 mg·L⁻¹ kanamycin; T2 seeds used for complementation assays.

**Growth conditions.** Half-strength MS agar (pH 5.8) with 2% (w/v) sucrose in 100 × 100 × 15 mm square plates; growth chamber at 23 °C, 12 h photoperiod, cool-white fluorescent ≈80 µmol photons·m⁻²·s⁻¹. Plates placed vertically for root-length assays to allow root growth along the agar surface.

**Treatments.** CdCl₂ at 0, 50, 85 µM (root assays) or 85 µM for 3 d (biochemical assays); CuCl₂ at multiple concentrations 0–80 µM (root assay, 8 d); ZnCl₂ at 0, 0.5, 1.0 mM (root assay, 8 d); 1 mM buthionine sulfoximine (BSO; γ-glutamyl-Cys-synthetase inhibitor; Griffith, 1982) ± 20 µM CdCl₂; 1 mM GSH ± 50 µM CdCl₂. Free amino-acid and peptide treatments at 1 mM each (Gly, Cys, Glu, γ-Glu-Cys, γ-Glu-Gly, Cys-Gly, GSH).

**Molecular analyses.** Total RNA extracted with RNeasy Plant Mini-kit (Qiagen, Valencia, CA); 10 µg per lane on formaldehyde gel, blotted to Zeta-Probe (Bio-Rad, Hercules, CA), UV-crosslinked, hybridised with ³²P-random-primer-labelled (Invitrogen, Carlsbad, CA) full-length 1.5-kb AtPCS1 cDNA and β-tubulin (EST clone B64XP/T04000, Arabidopsis Biological Resource Center, Ohio State University) probes; signal quantified on PhosphorImager (Molecular Dynamics, Sunnyvale, CA). Total protein extracted in 50 mM Tris-HCl (pH 7.5); 5 µg per lane on 10% SDS-PAGE; transferred to Immobilon-P (Millipore, Bedford, MA); probed with anti-FLAG M2 monoclonal (Sigma, St. Louis) and alkaline-phosphatase-linked anti-mouse (Sigma); detected with Renaissance chemiluminescence (NEN, Boston, MA). Protein concentration by Bradford (1976) assay.

**Thiol and PC measurement.** 100 mg frozen tissue ground in liquid nitrogen, homogenised in 300 µL of 1 M NaOH + 1 mg·L⁻¹ NaBH₄, centrifuged 5 min at 13,000g 4 °C, supernatant acidified with 50 µL 37% (w/v) HCl. Total NPT measured by Ellman's reagent (5,5′-dithiobis(2-nitrobenzoic acid); Ellman, 1959) at A₄₁₂ in sodium-phosphate/Na₂-EDTA stock buffer; Shimadzu (Tokyo) spectrophotometer. Total GSH measured by glutathione-reductase recycling assay (Anderson, 1985). PCs measured by reverse-phase HPLC with post-column derivatisation of thiol compounds (Gupta and Goldsbrough, 1991); samples extracted from 200 mg frozen tissue in 200 µL of 0.5 M HCl, 10 min on ice with three 30-s vortex cycles, centrifuged 10 min 4 °C, 200 µL supernatant + 50 µL 2 mM N-acetyl-Cys.

**Statistics.** Values reported as means ± SE; n = 4 for biochemical measurements (GSH, NPT, PC); n = 10 for root-length measurements. Significant differences from wild-type within the same treatment marked with asterisks (P < 0.05). Statistical method (likely Student's t-test or one-way ANOVA) is not explicitly named in the Materials and Methods.

**Limitations the paper acknowledges or the reader should note.** (i) The construct carries a C-terminal FLAG tag; the authors note that non-specific protein-protein interactions caused by the FLAG modification "may also contribute" to the observed Cd hypersensitivity (p. 661), so the magnitude of the paradox in a tag-free PCS1 overexpression line is not established. (ii) The AtPCS1 promoter is used rather than a strong constitutive promoter (CaMV 35S); the paper does not test whether 35S-driven AtPCS1 would replicate the paradox. (iii) The "data not shown" claims for free-amino-acid toxicity, GSH-content modulation under BSO/GSH/Cd, and pcs5/pcs8 Zn-response are not independently verifiable from the figures. (iv) The model organism is *Arabidopsis thaliana*; extrapolation to crop species (rice, wheat, *Brassica juncea*) is the subject of subsequent literature ([[marques2025-phytochelatins-cadmium-mitigation]]) and is not within this paper's scope. (v) No environmental or food-matrix Cd concentrations are measured; the Cd concentrations in the medium (50–85 µM CdCl₂, corresponding to ≈5.6–9.6 mg Cd/L given Cd atomic mass 112.41 g/mol) are several orders of magnitude above environmentally realistic soil-solution Cd and are chosen to produce a measurable phenotype, not to model field exposure.

## Implications

- **Certification:** The paper contributes no occurrence data and no exposure data, so it does not move any HMTc threshold-setting work. Its relevance to HMTc is indirect — it is mechanistic background for the question of whether plant-side genetic engineering of the PC pathway is a credible Cd-reduction lever for crops in HMTc-certifying categories (rice, leafy vegetables, root vegetables, cacao). The paper's headline finding argues against standalone PCS1 overexpression as a Cd-reduction strategy: in the model plant, doing so increases Cd sensitivity rather than tolerance when GSH is limiting, which is the regime any field-deployed engineered crop would encounter.
- **App:** No routing to ingredient or product pages. The paper provides background reading for the [[metals/cadmium]] page on plant-side PC-mediated detoxification mechanisms and for related discussions on the [[metals/zinc]] and [[metals/copper]] pages.
- **Courses:** Useful as a primary-source case study for the PCS-overexpression paradox in plant Cd-tolerance pedagogy. Pair with [[marques2025-phytochelatins-cadmium-mitigation]] for the secondary-synthesis view of the broader PCS genetic-manipulation literature, and with [[grill1989-phytochelatins-heavy-metal-binding-peptides-plants]] for the foundational PCS-biochemistry context.
- **Microbiome:** Not relevant. The paper is plant-only and does not engage soil microbiome, rhizosphere community, or any host-microbe interaction.

## Limitations

The study is a primary mechanistic experiment in *Arabidopsis thaliana* using a transgenic-overexpression-plus-complementation design with appropriate internal controls (wild-type, PC-null mutant cad1-3, multiple independent transgenic lines at two expression levels, BSO and GSH manipulation). Specific limitations include: the AtPCS1 promoter (rather than a strong constitutive promoter) leaves open whether higher expression would saturate or reverse the paradox; the C-terminal FLAG tag is acknowledged by the authors as a potential confound for protein-protein interaction effects; statistical method is not explicitly named in Materials and Methods; several supporting measurements are reported as "data not shown" and not in the figures (free amino-acid toxicity, BSO/GSH-dependent total-GSH changes, pcs5/pcs8 Zn-response); no measurements were made under environmentally realistic Cd concentrations (the 50–85 µM CdCl₂ medium concentrations are well above typical soil-solution Cd); and the work is confined to *Arabidopsis*, with extrapolation to crop species and to field conditions left to subsequent literature.

## Wiki pages this source may touch

- [[metals/cadmium]]
- [[metals/zinc]]
- [[metals/copper]]
- [[mitigation/remediation-evidence]]

## Verification notes

**Existing-page check.** DOI grep (`10.1104/pp.014118`), raw_handle grep (`MFK_38-overexpression-of-arabidopsis-phytochelatin-syn`), and cite-key glob (`lee2003-*`) over `wiki/sources/` on 2026-06-08 returned no matches. Author-pair globs (`korban*`, `goldsbrough*`, `moon20*`) returned no matches for this paper (the `moon2*` hits are different Moons; `lee20*` hits are different Lees). This is a NEW source page — no prior version to merge-enhance.

**Evidence tier.** A (primary peer-reviewed experimental study). The paper is a controlled molecular-biology experiment in *Plant Physiology* (American Society of Plant Biologists, 2003) with statistical replication (n = 4 for biochemistry, n = 10 for root-length assays), explicit controls (WT, cad1-3, multiple transgenic lines at two expression levels), and complementary perturbations (BSO and GSH supplementation, cad1-3 functional complementation). The work is appropriate for A-tier citation when the wiki discusses the PCS-overexpression paradox or the GSH-PC-Cd mechanistic axis.

**Metals frontmatter.** Cd, Zn, Cu. Cadmium is the primary subject (all main figures and the headline result). Zinc is treated as a secondary result with Zn-hypersensitivity data in Figure 4B and accompanying text (pcs3, pcs9, and pcs1 hypersensitive at 0.5–1.0 mM ZnCl₂; pcs5, pcs8 not). Copper is treated as a control metal showing no genotype effect (Figure 4A), which is itself an informative finding for the [[metals/copper]] page on the question of PC involvement in Cu tolerance. The frontmatter abbreviations follow CLAUDE.md Part 14 vocabulary (Cd, Zn, Cu).

**Ingredients, products, matrices, jurisdictions frontmatter.** All empty. The source measures nothing in any food matrix; *Arabidopsis thaliana* is the model plant for the experiment, not a sampled food commodity. No regulatory or jurisdictional frame applies (the Illinois Department of Natural Resources funded the work, but the science is conceptually species-general and not US-specific in any regulatory sense).

**Sample size.** Null in frontmatter. The primary sampling units are 10 root-length measurements per line per Cd/Zn/Cu concentration, and 4 biochemical replicates per genotype per treatment. `sample_n` represents a biological or human-subject sample count for occurrence/exposure studies and is null here; the per-assay replication is summarised in the `sample_population` field.

**Speciation conventions.** All Cd values are reported as CdCl₂ molarity (the source's framing). No Cd speciation flag is needed — the salt form is given and "Cd" in the wiki sense (total Cd, the HMTc analyte) is unambiguous for soluble inorganic salts in an aqueous Murashige-Skoog medium. Similarly ZnCl₂ and CuCl₂ are given as the salt forms. No iAs/tAs, MeHg/tHg, or Cr-VI/Cr distinctions are at issue.

**Brand firewall (Part 12).** No commercial food or personal-care brand names appear in the source body for contamination values. The Methods section names scientific-instrument and reagent vendors per verification-checklist Exception 2: RNeasy Plant Mini-kit (Qiagen, Valencia, CA), Zeta-Probe membrane (Bio-Rad, Hercules, CA), random primer labeling kit (Invitrogen, Carlsbad, CA), PhosphorImager (Molecular Dynamics, Sunnyvale, CA), Immobilon-P membrane (Millipore, Bedford, MA), anti-FLAG M2 monoclonal antibody (Sigma, St. Louis), alkaline phosphatase-linked anti-mouse antibody (Sigma), Renaissance chemiluminescence kit (NEN, Boston, MA), Shimadzu spectrophotometer (Tokyo), Sunshine Mix no. 1 (Sun Gro Horticulture, Bellevue, WA), and *Agrobacterium tumefaciens* GV3101 (pMP90) strain. These are scientific-method vendor/material names and are preserved per the locked 2026-05-17 reading of Exception 2. No firewall action required.

**HMTc firewall (Part 2).** The paper contains no HMTc-threshold language, no claims about HMI certification levels, and no consumer-audience risk advisories. Its forward-looking framing is about "phytoremediation" as a research goal, not about food-safety thresholds. The Implications section above frames the relevance for HMTc indirectly (mechanistic background, not threshold input) and labels its food-safety relevance as conjectural. No firewall action required.

**Date arithmetic.** Received 4 September 2002, returned for revision 10 October 2002, accepted 20 October 2002, published February 2003 in *Plant Physiology* Vol. 131, pp. 656–663 — all consistent with the `year: 2003` frontmatter. DOI 10.1104/pp.014118 resolves to the article via plantphysiol.org and via the ASPB hosting infrastructure.

**License.** *Plant Physiology* in 2003 was published by the American Society of Plant Biologists (ASPB) under standard journal copyright; the article became part of the ASPB published archive and is currently distributed under ASPB's open-access policy for older content, but the original publication was not under a Creative Commons licence. The `license:` field is set to `copyright-licensed-private` to reflect the as-acquired posture in this repository's raw/ folder; the access_url field points to the canonical DOI for any reader who wants to verify the original.

**Reviewer's note on scope fit.** This paper is in the "Black Market Peptide Metal Survey / heavy_metals_peptides" Manual Fetch Kimi folder alongside [[marques2025-phytochelatins-cadmium-mitigation]], [[luo2024-peptides-heavy-metal-remediation]], [[shalev2022-peptide-metal-nmr-review]], [[seregin2023-phytochelatins-sulfur-metal-chelating]], and related PC/peptide-metal sources. Per the 2026-06-02 commit `3f47f95 — scope: mitigation/remediation is in-scope, not a skip`, peptide-mediated mitigation/remediation papers are in scope as background for the mitigation-evidence chapter. This paper is one of the foundational primary studies behind the PCS-overexpression-paradox narrative that Marques 2025 reviews secondarily; its inclusion strengthens the wiki's primary-source coverage of the PC genetic-manipulation literature.

**Slug-vocabulary note.** `[[mitigation/remediation-evidence]]` is not in the 2026-05-18 taxonomy snapshot. This is the same snapshot-coverage gap noted in [[marques2025-phytochelatins-cadmium-mitigation]], [[luo2024-peptides-heavy-metal-remediation]], and [[shalev2022-peptide-metal-nmr-review]]; the wikilink points to the wiki's mitigation/remediation-evidence section and is in-scope per the cited 2026-06-02 scope commit. No correction applied; the snapshot will catch up in a future refresh.

**Audit subagent (2026-06-08) verdict: REVISE.** Five checks returned four ✅ and one ⚠️.
- Check 1 numerical-fidelity ⚠️ on the CdCl₂ → mg Cd/L unit conversion factor. The originally-written page stated "1 µM CdCl₂ ≈ 0.183 mg Cd/L" and "50–85 µM CdCl₂ ≈ 9.2–15.5 mg Cd/L." Independent verification: Cd atomic mass is 112.41 g/mol, so 1 µmol Cd/L corresponds to 0.112 mg Cd/L; the 0.183 g/mol figure is the molar mass of the CdCl₂ salt (Cd 112.41 + 2 × Cl 35.45 = 183.31), which is the wrong species for a "mg Cd/L" figure. Finding correct, correction applied: 1 µM CdCl₂ → 0.112 mg Cd/L; 50–85 µM CdCl₂ → ≈5.6–9.6 mg Cd/L in the Key numbers preface and the Methods (brief) limitations bullet (v).
- Check 2 slug-vocabulary ⚠️ on `[[mitigation/remediation-evidence]]` not in the 2026-05-18 snapshot — same snapshot-coverage gap as the Marques 2025, Luo 2024, and Shalev 2022 siblings, already disclosed in the slug-vocabulary note above and accepted per the cited precedent. No content correction applied.
- Checks 3 (speciation/methods), 4 (Part 12 brand firewall), and 5 (Part 2 wiki/HMTc firewall) all ✅. Subagent independently verified all per-line and per-figure numbers, confirmed scientific-method vendor list against p. 662 of the source, confirmed no commercial food/personal-care brand names appear, and confirmed no HMTc-threshold language or consumer risk advisories. 2 findings flagged, 1 corrected (the unit-conversion factor), 1 carried (the known cross-page taxonomy gap, not a defect on this page), 0 rejected. Audit subagent ID aec7faff159538b50.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [43f4b6b1b](https://github.com/paleofoundation/heavymetalindex/commit/43f4b6b1b) | 2026-06-08 | minor | Narrative text revised |
| [86ae207d4](https://github.com/paleofoundation/heavymetalindex/commit/86ae207d4) | 2026-06-08 | major | 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
