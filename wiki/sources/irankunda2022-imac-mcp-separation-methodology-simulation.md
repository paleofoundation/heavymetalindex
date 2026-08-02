---
type: source
raw_handle: MFK_48-metal-chelating-peptides-separation-using-immob
cite_key: irankunda2022-imac-mcp-separation-methodology-simulation
title: "Metal-Chelating Peptides Separation Using Immobilized Metal Ion Affinity Chromatography: Experimental Methodology and Simulation"
authors: [Irankunda R, Camaño Echavarría JA, Paris C, Stefan L, Desobry S, Selmeczi K, Muhr L, Canabady-Rochelle L]
year: 2022
publication: "Separations, 2022;9(11):370"
doi: "10.3390/separations9110370"
source_type: review
evidence_tier: C
license: cc-by-4.0
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/48_Metal-Chelating_Peptides_Separation_Using_Immobilized_Metal.pdf"
raw_sha256: "c01afbd184c0495d6588deabeaad4956609f5a9f5188e7ecb0cb7486d30ea648"
access_url: "https://doi.org/10.3390/separations9110370"
metals: []
ingredients: []
products: []
matrices: [protein-hydrolysates, review-context]
jurisdictions: [GLOBAL]
near_duplicates: []
sample_n: null
sample_population: "Methodological review of immobilized metal ion affinity chromatography (IMAC) for the separation and purification of metal-chelating peptides (MCPs) from enzymatic protein hydrolysates, paired with a transport-dispersive simulation framework that uses Surface Plasmon Resonance (SPR) sorption-isotherm parameters as input. Covers IMAC constituents (matrix, complexing agent, immobilized metal ion), elution methods, and parameters affecting separation. Food protein sources cited as MCP feedstocks include Alaska pollock skin, beef muscle, chicken, cod, lamb, pork, porcine blood plasma, egg yolk and white, oyster, anchovy muscle, tilapia muscle and scales, sesame, soybean, sunflower, wheat germ, barley, mung bean, peony seed, walnut flake, rapeseed, Antarctic krill, casein, and whey."
updated: 2026-06-08
---

# Irankunda 2022 — Metal-chelating peptides separation using IMAC: methodology and simulation

## Overview

Irankunda and co-authors review the experimental methodology of Immobilized Metal Ion Affinity Chromatography (IMAC) for separating metal-chelating peptides (MCPs) from enzymatic protein hydrolysates and propose a chromatography-modelling and simulation workflow in which sorption-isotherm parameters measured by Surface Plasmon Resonance (SPR) are used as input data for a transport-dispersive model of IMAC. The review's framing is functional-food and nutraceutical manufacturing — MCPs as carriers for nutritionally essential metals (Ca²⁺, Fe²⁺, Zn²⁺, Cu²⁺) and as antioxidants — not contamination of food by toxic heavy metals. The paper notes in passing that MCPs can also remove heavy metals such as Cd²⁺, Ni²⁺, As³⁺ and Pb²⁺ from the environment for decontamination applications, but reports no measurements on such removal. This source is recorded here for its coordination-chemistry background — HSAB classification of metal ions and amino-acid donor groups, complexing-agent denticity, and the parameters controlling peptide–metal binding — which underpins primary studies in the HMI corpus that quantify binding of toxic heavy metals to food protein hydrolysates. No occurrence values for HMI's regulated heavy metals (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Cr-VI, Sn, Sb, U) appear.

## Key numbers

The review reports method parameters, chemical classifications, and modelling equations. None are HMI heavy-metal occurrence values; the most directly HMI-relevant content is the Table 2 HSAB classification, which places several HMI-regulated metal ions on the hard/borderline/soft acid continuum that governs their preferential donor-atom binding.

| Item | Detail as reported |
| --- | --- |
| HSAB hard acids (Table 2) | H⁺, Li⁺, Na⁺, K⁺, Be²⁺, Mg²⁺, Ca²⁺, Sr²⁺, Sn²⁺, Cr³⁺, Co³⁺, Fe³⁺, As³⁺, Ir³⁺, Al³⁺, Sc³⁺, Ga³⁺, In³⁺, La³⁺, Si⁴⁺, Ti⁴⁺, Zr⁴⁺, Th⁴⁺, Pu⁴⁺ |
| HSAB borderline acids (Table 2) | Fe²⁺, Co²⁺, Ni²⁺, Cu²⁺, Zn²⁺, Pb²⁺, Mn²⁺ |
| HSAB soft acids (Table 2) | Cu⁺, Ag⁺, Au⁺, Tl⁺, Hg⁺, Cs⁺, Pd²⁺, Cd²⁺, Pt²⁺, Hg²⁺ |
| HSAB hard bases (Table 2) | Carboxylate group (Asp, Glu), hydroxyl group (Ser, Thr, Tyr), phosphorylated amino acids |
| HSAB borderline bases (Table 2) | Aromatic nitrogen (His, Trp), amides (Asn, Gln), aliphatic nitrogen |
| HSAB soft bases (Table 2) | Cyanides, sulphur groups (Cys, Met) |
| IMAC loading-buffer NaCl range | `0.1–3 M` to reduce non-specific interactions |
| Glycerol additive | up to `50% v/v` to limit hydrophobic interactions |
| Ethanol additive | up to `20% v/v` |
| Acetonitrile additive | `1:1 v/v` ratio reported |
| Tween 80 additive | `0.01% v/v` |
| Triton X-100 additive | `1%` |
| EDTA column-stripping concentration | `10–50 mM` |
| Common complexing agents | bidentate (α-aminohydroxamic acid, salicylaldehyde, 8-hydroxyquinoline); tridentate (iminodiacetic acid IDA, orthophospho-DL-serine OPS, dipicolylamine DPA, N-(2-pyridylmethyl)aminoacetate, 2,6-diaminomethylpyridine); tetradentate (nitrilotriacetic acid NTA, carboxymethylated aspartic acid CM-Asp); pentadentate (N,N,N′-tris(carboxymethyl) ethylene diamine TED) |
| Most-used complexing agents | NTA, IDA, TED |
| Frequently immobilized metal ions | Ni²⁺, Cu²⁺, Fe²⁺, Co²⁺ |
| Cu²⁺ binding requirement | one exposed histidine residue |
| Ni²⁺ and Zn²⁺ binding requirement | two exposed vicinal histidine residues |
| Co²⁺ binding requirement | at least two adjacent exposed histidine residues |
| Biacore SPR conversion | response of `100 RU` represents a protein concentration of `1 g/L`; q_max,SPR = R_max / 100 |
| SPR–IMAC flow rates (Table 3) | IMAC `1 mL/min` per `1 mL` bed volume; SPR `20 µL/min` |
| Modelled isotherm | Mono-component Langmuir q = q_max·K_A·C / (1 + K_A·C); multi-component form given for imidazole-elution competition |
| SPR–IMAC affinity conversion | K_A,IMAC ≈ K_A,SPR / MW (peptide molecular weight, g/mol) |

Representative peptide sequences with metal-chelating activity tabulated by the authors from cited primary literature (Table 1) include — from sesame (Zn²⁺ and Fe²⁺): SM, NCS; from Alaska pollock skin (Fe²⁺): SCH; from soybean (Ca²⁺): DEGEQPFFPF; from tilapia scales (Ca²⁺): NGNNGEAGKIG; from Antarctic krill (Ca²⁺): VLGYIQIR; from oyster (Zn²⁺): HLRQEEKEEVTV, GSLK; from rapeseed (Zn²⁺): AR, NSM, EPSH; from defatted walnut flake (Fe³⁺): LAGNPDDEFRPQ, VEDELVAVV; from Pacific cod skin gelatin (Fe²⁺): GPAGPHGPPGKDGR, AGPHGPPGKDGR; from scad (*Decapterus maruadsi*) by-products (Fe³⁺): QKGTYDDYVEGL; from casein (Fe²⁺): EDVPSER, HKEMPFPK, NMAINPSK, AVPYPQR; from peony seed (Fe²⁺): SMRKPPG. These are tabulated from primary literature and are not original measurements of this review.

## Methods (brief)

This is a narrative methodological review with simulation discussion. The authors compile primary literature on MCP production by enzymatic proteolysis (Alcalase, Flavourzyme, trypsin, pepsin, papain, Protamex, Neutrase, Pancreatin, Chymotrypsin, Thermolysin), on peptide–metal-ion coordination chemistry organized around Pearson's HSAB framework, on IMAC constituents (matrix, complexing-agent denticity, immobilized metal ion), on column operation (equilibration, loading, washing, elution by pH variation, competitive elution with imidazole, chelate destruction with EDTA, column stripping, regeneration), and on parameters affecting separation (pH, ionic strength, organic-solvent and detergent additives, reducing agents). The simulation section develops a transport-dispersive model — a mass-balance partial differential equation with axial-dispersion and convective transport terms, an LDF mass-transfer relation, and a Langmuir or multi-component Langmuir isotherm — and proposes using SPR-measured sorption-isotherm parameters (K_D, R_max) as inputs, on the analogy that SPR and IMAC share the same complexing agent (NTA), immobilized metal ion, and a comparable surface chemistry on dextran (SPR) or agarose (IMAC). The authors generate no primary analytical data. Compiled instrument and reagent names function as scientific-method identifiers (Biacore chip, Cytiva product code BR100407, IMAC column resins, named protease preparations) and are not attributions of contamination values to brands.

## Implications

The HSAB-framework classification, the donor-atom preferences of peptide side chains (carboxylate of Asp/Glu, hydroxyl of Ser/Thr/Tyr, imidazole of His, thiol of Cys, thioether of Met), and the operating-parameter envelope for IMAC separation collectively describe the coordination chemistry by which dietary protein hydrolysates also bind toxic heavy metals — Pb²⁺ as a borderline acid, Cd²⁺ and Hg²⁺ as soft acids, As³⁺ as a hard acid in this classification — and therefore inform mechanistic interpretation of primary studies in the HMI corpus that measure heavy-metal binding to food protein matrices or quantify peptide-mediated speciation. The review itself reports no measurements on heavy-metal occurrence, no exposure estimates, and no thresholds; it should not be cited as evidence for any HMI standard or HMTc certification level. It is a methods and chemistry reference, not an occurrence source.

## Verification notes

- PDF read in full (28 pages) via the Read tool in three 10-page chunks; abstract, introduction, all body sections, Tables 1–3, Figures 1–5, and acknowledgements/funding/conflicts/data-availability statements reviewed.
- Identity checks against `wiki/sources/`: DOI `10.3390/separations9110370` (zero hits), raw_handle `MFK_48-metal-chelating-peptides-separation-using-immob` (zero hits), and author/year `irankunda` (one incidental hit in `lu2022-metal-chelating-peptides-review.md`, which is a different paper by Lu and Dong on Ca/Fe/Zn/Cu chelating peptides — confirmed by reading that page's frontmatter; not a duplicate of this Irankunda review). No existing wiki source page for this paper.
- The paper is open access under CC-BY 4.0 per the masthead and copyright notice on page 1; recorded as `license: cc-by-4.0`.
- Metals discussed are framed as immobilized affinity targets (Ni²⁺, Cu²⁺, Fe²⁺/³⁺, Co²⁺, Zn²⁺, Ca²⁺) and as classifications in the HSAB table (which incidentally places Pb²⁺ borderline and Cd²⁺/Hg²⁺/As³⁺ in their respective categories). None of HMI's 10 HMTc analytes (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) are measured. `metals:` is therefore `[]`; routing this source to `wiki/metals/lead.md` or similar pages on the basis of an HSAB table mention would misrepresent the paper.
- The paper reports no contamination values for any food matrix; `ingredients:` and `products:` are `[]`. Food protein sources are cited as MCP feedstocks for functional-food manufacture, not as products in which HMI heavy-metal contamination is being quantified. Routing to ingredient or product pages would be misleading.
- `matrices: [protein-hydrolysates, review-context]` mirrors the established convention for methodological-review sources in this corpus (cf. [[lu2022-metal-chelating-peptides-review]]).
- `jurisdictions: [GLOBAL]` because the review compiles international literature; the authors are at Université de Lorraine, France, but the scope is not French-regulatory.
- Brand firewall (Part 12, strict reading): no brand-name attribution to contamination values appears; the paper reports no contamination values. Instrument-vendor and reference-material names in the methods/simulation discussion (Biacore SPR chip, Cytiva, GeneCust, PolyPPeptides, Alberta Peptide Institute, IMAC column resins) are scientific-method identifiers and are permitted under Exception 2.
- Wiki/HMTc firewall (Part 2): the review proposes no thresholds, makes no certification-level claims, and does no synthesis across HMI sources. No content needed to be stripped.
- Sample size: this is a narrative methodological review with no primary measurements; `sample_n: null` is correct.
- Speciation: As³⁺ in Table 2 is the inorganic species; the paper does not separately classify As⁵⁺. Pb is given only as Pb²⁺. Hg is given as both Hg⁺ and Hg²⁺; the paper does not distinguish methylmercury. No HMI speciation flags (iAs vs tAs, MeHg vs tHg, Cr-VI vs Cr) need to be set on this page because no measurements are reported.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [d050fdebc](https://github.com/paleofoundation/heavymetalindex/commit/d050fdebc) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
