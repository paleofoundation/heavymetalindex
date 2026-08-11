---
type: source
raw_handle: MFK_04-phytochelatins-sulfur-containing-metalloid-chel
cite_key: seregin2023-phytochelatins-sulfur-metal-chelating
title: "Phytochelatins: Sulfur-Containing Metal(loid)-Chelating Ligands in Plants"
authors: ["Ilya V. Seregin", "Anna D. Kozhevnikova"]
year: 2023
publication: "International Journal of Molecular Sciences"
doi: "10.3390/ijms24032430"
source_type: peer-reviewed
evidence_tier: B
license: "CC-BY-4.0"
access_url: "https://doi.org/10.3390/ijms24032430"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/04_Phytochelatins_Sulfur-Containing_Metalloid-Chelating_Liga.pdf"
raw_sha256: "81b68c9d4c11483779932282d2ffb368bf02b36cc01ea0338ab90b23c2e66780"
near_duplicates: []
metals: [Cd, iAs, tHg, Pb, Cu, Zn, Ni]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Narrative review of the phytochelatin literature across ~140 plant species, 361 cited references; no primary measurements."
updated: 2026-06-08
---

# Seregin & Kozhevnikova 2023 — Phytochelatins as sulfur-containing metal(loid)-chelating ligands in plants

## Overview

Seregin and Kozhevnikova (K.A. Timiryazev Institute of Plant Physiology, Russian Academy of Sciences, Moscow) review the published literature on phytochelatins (PCs), the cysteine-rich peptide ligands that plants synthesise from glutathione to chelate metal(loid)s in the cytosol and shuttle the resulting complexes into the vacuole. The review covers PC structure and family classification, biosynthesis from glutathione via phytochelatin synthase (PCS), regulation of PCS activity and gene expression, PC accumulation patterns across plant taxa and tissues, the role of PCs in cytosol-to-vacuole transport and long-distance translocation, and the comparative behaviour of hyperaccumulator versus excluder species. The piece is a comprehensive narrative review with 361 references, no PRISMA, and no primary measurements; its value to the wiki is biological background for the [[metals/cadmium]], [[metals/arsenic]], [[metals/mercury]], [[metals/lead]], [[metals/copper]], [[metals/zinc]], and [[metals/nickel]] pages on the plant-side biochemistry of metal detoxification, and for the [[mitigation/remediation-evidence]] section when it discusses phytoremediation, biofortification, and phytomining as remediation modalities. The review reports no contamination occurrence data in any food matrix.

## Why this matters

- It is the most comprehensive recent narrative synthesis of the phytochelatin literature, organising the field's vocabulary (PC families and iso-PC variants, the cad1 allelic series, the PCS isoform paralogues across taxa, the ABCC1/2/3 vacuolar transporters, the HMT1/YCF1 yeast homologues) and the canonical pathway diagram (Figure 1) in one place. Sibling syntheses on the wiki (the Marques 2025 Cd-and-PCS-genetics perspective, the Luo 2024 peptide-remediation review) lean on this background.
- It catalogues the structural diversity of PCs — the canonical PC_n-Gly family with n=2–11 (rarely beyond 4–5), plus iso-PCs with C-terminal Ser, Ala, β-Ala, Glu, Gln, Asn, or Cys substitutions, plus des-Gly, des-γGlu, and des-Cys variants (Table 1) — and the species distribution of these variants across angiosperms, gymnosperms, algae, liverworts, fungi, and animals, which is a closed list useful when reading primary studies.
- Table 2 (pp. 3–6) is a 100+ row catalogue of PC structures identified across plant species, listed by family (Amaranthaceae, Apiaceae, Apocynaceae, Asteraceae, Brassicaceae, Caryophyllaceae, Crassulaceae, Cucurbitaceae, Fabaceae, Lamiaceae, Marchantiaceae, Poaceae, Pontederiaceae, Proteaceae, Pteridaceae, Rubiaceae, Salicaceae, Solanaceae, Vitaceae), and gives the inducing metal(loid) concentration and exposure duration for each entry — providing dose-response context for the in vitro and hydroponic literature that the wiki's mitigation-evidence section may cite.
- Table 3 (pp. 15–16) enumerates the PCS gene orthologues identified to date across 26+ plant species (AsPCS1 in *Allium sativum*, AtPCS1/AtPCS2 in *Arabidopsis thaliana*, BjPCS1 in *Brassica juncea*, BrPCS1/BrPCS2 in *Brassica rapa*, CcPCS1 in *Cajanus cajan*, OsPCS1/OsPCS2 etc. in *Oryza sativa*, TaPCS1 in *Triticum aestivum*, ZmPCS1 in *Zea mays*, and others), with the citing references — providing a reading-aid index for the underlying primary literature.
- It synthesises the conflicting evidence on whether PCs are involved in metal hyperaccumulation: the consensus the review arrives at is that PCs are NOT involved in hyperaccumulation machinery (PC concentrations are LOW in hyperaccumulators) but play a key role in metal HOMEOSTASIS, particularly in excluder species. This nuance matters when the wiki frames the food-safety implications of PCS-engineered crops.

## Key concepts and structure

The review is organised into five top-level sections (after an introduction and abstract) plus references. Section 2 covers structure and accumulation of PCs in plants — metal-induced PC production (2.1), the structure of PC-metal complexes (2.2), classification of PCs and their organ-level accumulation patterns (2.3). Section 3 covers PC biosynthesis and its regulation — glutathione as precursor (3.1), PCS as the key enzyme (3.2), PCS genes across living organisms (3.3), other functions of PCS (3.4), and hormonal regulation (3.5). Section 4 covers PC transport and physiological role — PCs in hyperaccumulators versus excluders (4.1), PC-mediated transport of metals into the vacuole (4.2), participation of PCs in long-distance metal transport (4.3), and metal detoxification in the rhizosphere (4.4). Section 5 closes with conclusions and outlook.

### Phytochelatin family classification and structure (Table 1)

The canonical PC family is **PC_n-Gly with structure (γGlu-Cys)_n-Gly**, where n typically ranges from 2 to 5 (occasionally up to 11). The review's Table 1 catalogues eleven additional iso-PC variants distinguished by their C-terminal residue or by deletion of N-terminal or C-terminal amino acids:

- iso-PC variants with C-terminal substitutions: PC_n-Ser, PC_n-Ala, PC_n-βAla, PC_n-Glu, PC_n-Gln, PC_n-Asn, PC_n-Cys (notation: iso-PC_n(Ser), iso-PC_n(Ala), etc.)
- des-Gly-PC_n (C-terminal Gly absent; structure (γGlu-Cys)_n)
- des-γGlu-PC_n-Gly and des-γGlu-PC_n-Ser (N-terminal γGlu absent)
- des-Cys-PC_n-Glu (one Cys residue absent)

Homophytochelatins (homoPCs, C-terminal β-Ala) are characteristic of legumes; hydroxymethylphytochelatins (hydroxymethylPCs, C-terminal Ser) are found mainly in Poaceae cereals; PCs with C-terminal Glu, Gln, Asn, or Cys are reported in *Oryza sativa* (rice) and other Poaceae.

### Metal(loid)s that induce PC biosynthesis

In the *Rauvolfia serpentina* cell-culture system used as the canonical reference (PDF p. 7, reference [44]), PC biosynthesis was induced by **Pb²⁺, Zn²⁺** (1 mM), **Cd²⁺, Ni²⁺, Sn²⁺, SeO₃²⁻, Bi³⁺** (100 µM), **Ag⁺, Cu²⁺, Au⁺** (50 µM), **AsO₄³⁻ (arsenate, As(V))** (20 µM), and **Sb³⁺, Te⁴⁺** (10 µM). Across the broader plant literature, PC biosynthesis is also induced by Hg, Pt, Rh, Pd (in *Sinapis alba* leaves), and V (in *Zea mays* seedlings). PCs are mainly involved in the detoxification of **Cd and As(III)**, and to a lesser extent **Hg (including phenylmercury PheHg), Pb, Cu, and Sb(V)**, depending on the stability of metal complexes with S-containing ligands. The essential nutrients B, Mg, Ca, and Na do NOT induce PC biosynthesis. Because PCs are S-containing compounds, their concentration decreases under sulfur (S) deficiency.

The metal-specific activating potency of PCS, where measured in vitro, decreases in the order **Cd²⁺ > Ag⁺ > Bi³⁺ > Pb²⁺ > Zn²⁺ > Cu²⁺ > Hg²⁺ > Au⁺** (PDF p. 14, references [112,124,217]). Mo, Co, and Ni did not activate OsPCSs in vitro. For metals other than Cd (which has the highest affinity, established separately via the log K values below), the thermodynamic stability of PC complexes decreases in the order **Zn²⁺ ≥ Cu²⁺ ≥ Fe²⁺ > Mg²⁺ > Ca²⁺** (PDF p. 8, reference [158]). Pb²⁺ is not placed in this stability ordering by the source.

### Affinity of PCs versus glutathione for Cd

In spectrophotometric studies, log K^7.4 values for 1:1 Cd-ligand complexes were **4.8 for glutathione, 6.2 for PC2, 7.5 for PC4, and 5.5 for PC6** (PDF p. 8, reference [157]). Potentiometric and spectroscopic data (Wątły et al. 2021, reference [120]) show the affinity of Cd complexes increases almost linearly from the micromolar (log K^7.4_GSH = 5.93) to the femtomolar range (log K^7.4_PC4 = 13.39) with chain elongation from glutathione to PC4; additional chain elongation beyond PC4 did not significantly increase stability.

### Biosynthesis pathway (Figure 1)

Stage 1: γ-glutamylcysteine is formed from L-glutamate (Glu) and L-cysteine (Cys) in the chloroplast, catalysed by glutamate cysteine ligase (EC 6.3.2.2) encoded by *GSH1* (also called *GCS*). This is the rate-limiting step.

Stage 2: glutathione (GSH) is formed from γ-Glu-Cys and Gly in both chloroplast and cytosol, catalysed by glutathione synthetase (EC 6.3.2.3) encoded by *GSH2* (also called *GS*).

Stage 3: glutathione is transported to the cytosol via CLT1–3 transporters and converted to PCs by phytochelatin synthase (PCS, γ-glutamylcysteine dipeptidyl (trans)peptidase, EC 2.3.2.15) encoded by *PCS* genes, in the presence of metal ions (Me^n+). The activity of PCS increases (+) under metal exposure.

The PC-metal (LMW Me-PC) complexes are transported across the tonoplast into the vacuole by ATP-dependent ABCC1/2/3 transporters. In the vacuole (pH 4.5–6.0), high-molecular-weight (HMW) Me-PC complexes are formed with the participation of acid-labile sulfide (S²⁻) presumably derived from chloroplasts. The complexes can be partially destroyed at vacuolar pH and the metal ions can bind to organic acids (OAs) forming citrates and malates.

### Phytochelatin synthase (PCS) characteristics

PCS is a ~95,000-Mr tetramer with a K_m of 6.7 mM for glutathione, belonging to clan CA of papain-like cysteine proteases. The N-terminal domain (Phytochelatin domain) carries the catalytic triad Cys-56, His-162, Asp-180 (positions may slightly vary by species — e.g., BnPCS1 from *Boehmeria nivea* has Cys-58, His-164, Asp-182). The C-terminal Phytochelatin_C domain (~452–545 amino acids total in the enzyme) contains numerous Cys residues involved in metal binding and broad metal specificity.

PCS catalyses a dipeptidyl-transferase reaction in two steps: step I (metal-independent) acylates the enzyme at site I by transferring γ-Glu-Cys from GSH with release of Gly; step II (metal-dependent) transfers the γ-Glu-Cys residue to a second GSH (forming Metal-GS2 complex) or to a growing PC_n acceptor, yielding PC_n+1. Activation by Cd ions involves binding to a specific activation site; AtPCS1 phosphorylation by casein kinase 2 (CK2) at Thr-49 (N-terminal domain) increases activity, dephosphorylation decreases it.

### Vacuolar transport machinery

In yeast, the HMT1 (heavy metal tolerance-factor 1, ABCC subfamily) transporter in *Schizosaccharomyces pombe* and YCF1 (yeast cadmium factor 1, ABCC type) in *Saccharomyces cerevisiae* transport Cd-PC and Cd-GS2 complexes across the tonoplast. HMT1 homologues have been identified in *C. elegans* and *Drosophila melanogaster* but not in plants.

In *A. thaliana*, three tonoplast transporters (AtABCC1, AtABCC2, AtABCC3) mediate vacuolar PC-metal sequestration; *AtABCC3* expression is Cd-regulated and coordinated with *AtABCC1*/*AtABCC2*. *AtABCC1*/*AtABCC2* expression is positively regulated by the AtMYB40 transcription factor. The *abcc3* single mutant and the *abcc1/abcc2* double mutant show cytosolic Cd accumulation; *AtABCC3*-overexpressing plants accumulate more vacuolar Cd than wild-type. The ABCC1/2 transporters also handle As(III), and apparently Zn, Cu(II), Mn, and Hg (including PheHg).

OsABCC1 in rice tolerates PC-dependent As but NOT Cd in yeast expression — suggesting OsABCC1 has high selectivity for As-PC over Cd-PC. The *abcc1/abcc2* double mutant, along with the *cad1-3* and *cad1-6* mutants (which carry a T-DNA insertion disrupting the C-terminal half of the Phytochelatin_C domain of AtPCS1), are hypersensitive to As(III), Hg(II), and PheHg.

### Hyperaccumulators versus excluders

Hyperaccumulators (e.g., *Arabidopsis halleri*, *Noccaea caerulescens*, *Sedum alfredii*) show **LOW PC concentrations** in shoots — the review's central comparative finding. Cd in hyperaccumulator shoots is predominantly bound to **O-containing ligands (organic acids)** rather than S-containing ligands. In contrast, in the non-accumulator *Arabidopsis lyrata*, the highest amount of Cd was bound to S-containing ligands. The high tolerance of hyperaccumulators is therefore **not** associated with increased PC biosynthesis. The review concludes that PCs are involved in metal **homeostasis** but not in metal **hyperaccumulation**.

For comparison, excluders accumulate metal(loid)s primarily in roots and use PC-mediated vacuolar sequestration in root cortical cells to limit translocation to shoots; PC concentrations in excluder roots are higher than in hyperaccumulator roots. For Zn and Ni, histidine and nicotianamine play a leading role in metal binding rather than PCs.

### Long-distance transport and rhizosphere exudation

PCs were detected in xylem sap of *Brassica napus* and *B. juncea*, and in phloem sap of *B. napus*. Due to the low xylem pH (~5.5–6.2), metal-PC complex stability is lower there than in phloem (pH ~7.5) — phloem is therefore considered the main conducting tissue for long-distance PC-metal transport, including delivery to generative organs and seeds. In *A. thaliana*, AtOPT6 (oligopeptide transporter) was proposed to transport glutathione, PCs, and Cd complexes into actively dividing cells around phloem in sink organs. OsABCC7 (xylem parenchyma plasma membrane) was proposed to load As(III)-PC2 and As(III)-GS3 complexes into xylem vessels in rice roots.

In *Lupinus albus* root exudates, PCs (γ-Glu-Cys)_2-Gly, (γ-Glu-Cys)_2-Glu, (γ-Glu-Cys)_2, plus disulfide-linked dimers [(PC2)2 and (PC3)2] were detected, with the suggestion that PCs participate in As detoxification in the rhizosphere — either by limiting As entry into roots or by exuding As(III)-(PC2)2 complexes via ABC-type transporters.

### Genetic-engineering outcomes for metal tolerance

The review reports that PCS overexpression in transgenic plants produces **bidirectional outcomes**: increased Cd tolerance was observed for *BnPCS1* in *B. nivea*, *NnPCS1* in *Nelumbo nucifera*, *VsPCS1* in *Vicia sativa*, *ZmPCS1* in *Zea mays*, *CdPCS1* in *Cynodon dactylon*, *AtPCS1* in *A. thaliana*, *PtPCS* in *Populus tomentosa*, *NtPCS1* (sense or antisense) in *Nicotiana tabacum*, *MnPCS1/MnPCS2* in *Morus notabilis*, *BjPCS1* in *B. juncea*; in contrast, decreased Cd tolerance was reported for elevated *AtPCS1* in *A. thaliana* and *N. tabacum*, *OsPCS5*/*OsPCS15* overexpression in *A. thaliana*, and *AdPCS1* from *Arundo donax* in *A. thaliana*. The proposed mechanisms for the negative outcomes include supraoptimal PC content (toxicity), oxidative stress, and cytosolic accumulation of Cd-PC complexes exceeding vacuolar-sequestration capacity. The *cad1-3* and *cad1-6* mutants (AtPCS1 null/disrupted) are hypersensitive to Cd, Ag, Cu, Zn, Pb, Hg, and As; *OsPCS1* mutants in rice are sensitive to Cd and As.

### Three PC-metal complex molecular-weight classes

Three classes of Cd-PC complexes are recognised by molecular weight: low-molecular-weight (LMW), medium-molecular-weight (MMW, distinguished by degree of polymerisation), and high-molecular-weight (HMW). HMW complexes are isolated from *B. juncea*, *S. lycopersicum* (tomato), *Z. mays* (maize), *A. thaliana*, and *Canavalia lineata*; the defining feature of HMW is acid-labile sulfide (S²⁻) incorporation, which increases Cd-ion binding capacity per molecule and resistance to proteolytic degradation. For example, in *Phaeodactylum tricornutum* HMW Cd-PC complexes, the Cd/SCys ratio increases from 0.6 to 1.6.

## Methods (brief)

This is a narrative literature review with no PRISMA flow, no formal inclusion/exclusion criteria, no risk-of-bias assessment, and no primary measurements. The Data Availability Statement reads: "No new data were created or analyzed in this study. Data sharing is not applicable to this article." The review cites 361 references covering ~140 plant species across 20+ plant families plus algae, liverworts, fungi, and animal taxa for evolutionary context. Funding: Russian Science Foundation grant № 21-14-00028. Affiliation: K.A. Timiryazev Institute of Plant Physiology, Russian Academy of Sciences (Moscow). Received 28 December 2022; revised 20 January 2023; accepted 23 January 2023; published 26 January 2023.

Tables: Table 1 (PC family classification, 11 variant types); Table 2 (~100 rows of PC structures identified across plant species, with inducing metal concentration and exposure duration); Table 3 (PCS gene orthologues across 26+ plant species).

Figure 1: schematic of the PC-mediated metal detoxification pathway in plants, spanning chloroplast (GSH biosynthesis), nucleus (gene expression), cytosol (PCS-catalysed PC biosynthesis), and vacuole (HMW Me-PC complex formation, ABCC1/2/3-mediated transport, OA binding at acidic pH).

## Implications

- **Certification:** The review contributes no occurrence data and no exposure data; it does not move any HMTc threshold-setting work. Its value for HMTc is indirect — it is biological background for the question of whether plant-side phytochelatin biochemistry is a credible Cd/As/Hg-reduction lever for crops supplying HMTc-certifying categories (rice, leafy vegetables, cereals, root vegetables). The review's own framing emphasises that PCs are NOT involved in hyperaccumulation machinery and that PCS overexpression produces bidirectional tolerance outcomes — the same hedge that the sibling [[marques2025-phytochelatins-cadmium-mitigation]] review makes for Cd specifically, and that the wiki should preserve when framing plant-side engineering as a remediation pathway.
- **App:** No routing to ingredient or product pages. The review measures nothing in any food matrix; the food-relevant plant species (rice, wheat, maize, soybean, spinach, pea, peanut, sunflower, grape, tomato, lettuce, cucumber, cabbage, mustard) appear as model or experimental host organisms in PC-biosynthesis studies, not as sampled food commodities with reported metal concentrations. The review does cite Dennis et al. 2021 (*Food Chem.* 339:128051) reference [39] as the survey of PC distribution in commonly consumed fruits, vegetables, grains and legumes — that paper would be the food-matrix routing-relevant primary source, not this review.
- **Courses:** Useful as a single-source orientation to the phytochelatin literature, the PC and iso-PC family vocabulary, the canonical biosynthesis pathway (Figure 1), the PCS catalytic mechanism, the cad1 allelic series and PCS-paralogue inventory, and the hyperaccumulator-versus-excluder framing of PC physiology. Should not be cited as the authority for any specific quantitative crop-level metal-reduction claim; trace claims to the cited primary studies first.
- **Microbiome:** Marginally relevant. The review notes that PCS gene homologues exist in bacteria, fungi, *C. elegans*, ciliates, flatworms, annelids, echinoderms, chordates, and algae, indicating a phylogenetically deep distribution of the PC machinery. WikiBiome federation is unlikely to draw on this source directly, but the PCS-evolution discussion (Section 3.3) is the most current synthesis of PC machinery distribution across kingdoms.

## Limitations

- This is a narrative review with no declared inclusion or exclusion criteria, no systematic search protocol, no PRISMA flow, no language restrictions reported, and no risk-of-bias assessment. The reference list (361 entries) skews toward studies in *A. thaliana*, *N. tabacum*, *O. sativa*, *B. juncea*, hyperaccumulator *Brassicaceae* (*A. halleri*, *N. caerulescens*), and the Poaceae cereals (wheat, maize, rice); other taxa are sampled unevenly. The review repeatedly notes that conflicting results across studies (e.g., on PCS overexpression and Cd tolerance, on PC concentrations in hyperaccumulator versus excluder organs, on metal-specific PCS activation patterns) reflect heterogeneity in plant tissue, metal concentration, exposure duration, growth medium, and varietal characteristics, and that comparative analyses must take these factors into account.
- Hg, Pb, Cu, Zn, and Ni receive substantially less attention than Cd and As(III). The review explicitly notes that combined-metal (polymetallic) effects on PC biosynthesis are an underdeveloped area: "There are few works that studied the combined effects of different metals on the concentration of PCs and glutathione [146,148,149,357]. However, this line of research is promising, since plants often encounter polymetallic stress in natural habitats" (page 23). The HMTc 10-analyte priority list and the wiki's food-matrix coverage both span Cd, Pb, As, Hg, Ni, Sn, Cr-VI, Al — only the first four are covered here in any depth.
- Localization of PC complexes within plant tissues is acknowledged as practically absent: "due to the difficulties in visualizing the ligands and their complexes with metals in plants tissues, such studies are practically absent" (page 24).
- The biosynthesis of iso-PCs (PCs with C-terminal Ser, Glu, Ala, βAla, Gln, Asn, Cys) is reported as insufficiently studied — the review explicitly flags this as an open question.
- The review does not engage gut-microbiome, human-exposure, or epidemiological literature on PC intake from plant-derived foods. The single sentence on the food-safety relevance of PC distribution in foods (introduction, citing reference [39] Dennis et al. 2021) is not developed further.
- Geographic scope of the underlying primary literature skews toward Europe, North America, China, and Russia; tropical and subtropical crop literature is underrepresented in the cited corpus.

## Wiki pages this source may touch

- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/arsenic-inorganic]]
- [[metals/mercury]]
- [[metals/mercury-total]]
- [[metals/lead]]
- [[metals/copper]]
- [[metals/zinc]]
- [[metals/nickel]]
- [[mitigation/remediation-evidence]]

## Verification notes

**Existing-page check.** DOI grep (`10.3390/ijms24032430`), raw_handle grep (`MFK_04-phytochelatins-sulfur-containing-metalloid-chel`), and cite-key glob (`seregin2023-*`, `kozhevnikova2023-*`) over `wiki/sources/` on 2026-06-08 returned no matches. The MFK_03 sibling [[marques2025-phytochelatins-cadmium-mitigation]] is a different paper (Marques 2025 IJMS, DOI 10.3390/ijms26104767) with overlapping but distinct scope (Cd-and-PCS-genetics perspective). The two are co-routing background sources for the same wiki regions ([[metals/cadmium]], [[mitigation/remediation-evidence]]). This is a NEW source page — no prior version to merge-enhance.

**Evidence tier.** B (secondary narrative review with no PRISMA and no primary measurements). The paper synthesises 361 cited references but declares no systematic search strategy, no inclusion/exclusion criteria, no risk-of-bias assessment, and contains no primary data ("No new data were created or analyzed in this study"). A-tier is reserved for primary peer-reviewed studies and authoritative agency monographs; this is neither.

**Metals frontmatter.** Cd is the primary subject and the most-discussed metal across all sections. As(III) is the substantive secondary subject — the review repeatedly notes that PCs are mainly involved in detoxification of Cd and As(III). Hg (including PheHg phenylmercury) is discussed in the vacuolar transport, ABCC1/2 substrate range, and *cad1-3*/*cad1-6* mutant hypersensitivity contexts. Pb is discussed as a PCS-activating metal and in the *B. juncea* Pb-induced PC biosynthesis studies. Cu and Zn are discussed in homeostasis and in the multi-metal exposure studies (e.g., *Clinopodium vulgare* Lamiaceae, *Sinapis alba* Pt/Rh/Pd induction); both fall outside the HMTc 10-analyte list but are in the wiki taxonomy. Ni receives lesser coverage but is discussed in the Sb-PC/Ni section and the hyperaccumulator-comparison framing. The metal slugs used (Cd, iAs, tHg, Pb, Cu, Zn, Ni) follow the abbreviation vocabulary — iAs is used because the review explicitly discusses As(III) (arsenite, the inorganic form) throughout; tHg is used because the review distinguishes Hg(II), PheHg, and Hg generally without consistently reporting a methyl-vs-inorganic split.

**Ingredients, products, matrices, jurisdictions frontmatter.** All empty. The review measures nothing in any food matrix; the food-relevant plant species names (rice *Oryza sativa*, wheat *Triticum aestivum*, maize *Zea mays*, soybean *Glycine max*, pea *Pisum sativum*, spinach *Spinacia oleracea*, tomato *Solanum lycopersicum*, sunflower *Helianthus annuus*, peanut *Arachis hypogaea*, cabbage/mustard *Brassica* species, lettuce *Lactuca sativa*, cucumber *Cucumis sativus*, grape *Vitis vinifera*) appear as model or experimental host organisms in PC-biosynthesis and PCS-genetics studies, not as sampled food commodities with reported metal concentrations. Russia is the authors' institutional country but the review is conceptually international and no national regulatory or occurrence frame applies; `jurisdictions:` remains empty.

**Sample size.** Null. The review has no sampling frame; it cites ~140 plant species across 361 references but reports no human/biological sample numbers of its own.

**Brand firewall (Part 12).** No commercial brand names appear in the source body for contamination values. No food, supplement, or personal-care brand is named. Methods-context vendor mentions are limited to the cited primary studies (e.g., HPLC-ESI-MS-MS analytical methods, VOSviewer-style bibliometric tools) and are not reproduced in the review's body; per the verification checklist's Exception 2, scientific-method vendor names would be permitted in methods context anyway. No firewall action required.

**HMTc firewall (Part 2).** The review contains no HMTc-threshold language, no claims about HMI certification levels, and no consumer-audience risk advisories. The Conclusions and Outlook section discusses "the development of phytoremediation, biofortification, and phytomining technologies" as research goals; this is biological-research framing, not a wiki-side synthesis or threshold proposal, and is preserved in the Implications section without escalation. No firewall action required.

**Date arithmetic.** Received 28 December 2022; revised 20 January 2023; accepted 23 January 2023; published 26 January 2023 — all consistent with the `year: 2023` frontmatter. DOI 10.3390/ijms24032430 resolves to *Int. J. Mol. Sci.* 2023, Vol 24, Article 2430.

**Reviewer's note on scope fit.** This paper is in the "Black Market Peptide Metal Survey / heavy_metals_peptides" Manual Fetch Kimi folder alongside [[luo2024-peptides-heavy-metal-remediation]], [[marques2025-phytochelatins-cadmium-mitigation]], and others. Per the 2026-06-02 commit `3f47f95 — scope: mitigation/remediation is in-scope, not a skip`, peptide-mediated mitigation/remediation papers are in scope as background for the mitigation-evidence chapter. This paper is broader than Marques 2025 (which is Cd-and-PCS-genetics-engineering only) and broader than Luo 2024 (which covers peptides generally rather than PCs specifically); Seregin & Kozhevnikova 2023 is the comprehensive PC-physiology and PC-biosynthesis reference of the trio. The three together provide the conceptual backbone for a future PC-and-MT mitigation chapter.

**Slug-vocabulary note.** `[[mitigation/remediation-evidence]]` is in the live `wiki/mitigation/` directory (confirmed 2026-06-08 via `ls wiki/mitigation/`). The taxonomy snapshot (`docs/gpt-collaboration/taxonomy-snapshot.md`, generated 2026-05-18) covers ingredients, products, metals, and regulations but not the mitigation/ subdirectory; this is a snapshot-coverage gap, not a missing-slug defect. The wikilink is in-scope per the cited 2026-06-02 scope commit and per the existing live page. No correction applied; the snapshot will catch up in a future refresh.

**As speciation note.** The review uses "As(III)" throughout for arsenite (the inorganic form) and occasionally writes "arsenate" or "As(V)" for the pentavalent form. The *R. serpentina* induction observation specifically uses AsO₄³⁻ (As(V), arsenate), while the broader "PCs are mainly involved in the detoxification of Cd and As(III)" claim uses arsenite (the more biologically active form). The frontmatter uses `iAs` (inorganic arsenic), which captures both arsenite and arsenate. The MeHg/tHg distinction is not systematically maintained in the review (Hg, Hg(II), and PheHg are the three forms named); the frontmatter uses `tHg` as the broader designation.

**Audit subagent (2026-06-08) verdict: REVISE → applied.** Five checks returned three ⚠️ on Check 1 (numerical fidelity) and four ✅ on the other checks (slug vocabulary, speciation/methods, brand firewall, HMTc firewall). All three Check 1 findings were independently verified against PDF pp. 7–8 and applied as the audit recommended:
- **Finding 1 (citation slip on log K spectrophotometric values):** verified PDF p. 8 cites the 4.8/6.2/7.5/5.5 values to reference [157], not [120]. The wiki misattributed the values to [120] = Wątły 2021 (which actually supports the subsequent femtomolar potentiometric range). Corrected: spectrophotometric values now cite [157]; potentiometric range now correctly cites [120].
- **Finding 2 (metal-PC stability ordering mischaracterised):** verified PDF p. 8 reports the stability ordering "for metals other than Cd" as Zn²⁺ ≥ Cu²⁺ ≥ Fe²⁺ > Mg²⁺ > Ca²⁺ [158]; Pb²⁺ is not in this ordering and "for PC4" is not the qualifier. The wiki had invented Cd²⁺ ≥ Pb²⁺ at the front and added the false "for PC4" qualifier. Corrected: ordering now reads "for metals other than Cd…Zn²⁺ ≥ Cu²⁺ ≥ Fe²⁺ > Mg²⁺ > Ca²⁺" and notes Pb is not placed in this ordering by the source.
- **Finding 3 (induction list muddled — Ni omitted, As(III) where source has As(V)):** verified PDF p. 7 that the *R. serpentina* induction list explicitly includes Ni²⁺ (100 µM) and uses AsO₄³⁻ (As(V), arsenate, 20 µM). The wiki had omitted Ni and labelled the As form as As(III). Corrected: induction paragraph now reproduces the *R. serpentina* list verbatim including Ni²⁺ and AsO₄³⁻ (As(V)), and the broader cross-species induction context (Hg, Pt, Rh, Pd, V) is named separately.

3 findings, 3 applied, 0 rejected. Audit subagent ID a4bb3f7c5e10832b8.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
