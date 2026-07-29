---
type: source
raw_handle: RPMEHG_10-1371-journal-pcbi-1007817
cite_key: authors2026-manuscript-growth-for-example-by-modeling-the-exposure
title: "manuscript. growth. For example, by modeling the exposure of E. coli to trimethoprim or sulfamethox-"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1371/journal.pcbi.1007817
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1371/journal.pcbi.1007817"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/metal_chelation_T4/T4_8259983_Computation_of_condition-dependent_proteome_allocation_revea.pdf"
raw_sha256: "1d6d71acd3f36e79537e4a566e517a1f89feb7825f4dfd058cb41a86208de9da"
metals: [Pb, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - manuscript. growth. For example, by modeling the exposure of E. coli to trimetho

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Colton J. Lloyd ID1, Jonathan Monk ID1, Laurence Yang ID1¤, Ali Ebrahim ID1, Bernhard
- O. Palsson ID1,2,3*
- 1 Department of Bioengineering, University of California, San Diego, La Jolla, California, United States of
- America, 2 Novo Nordisk Foundation Center for Biosustainability, Technical University of Denmark, Lyngby,
- a1111111111 Denmark, 3 Department of Pediatrics, University of California, San Diego, La Jolla, California, United States
- a1111111111 ¤ Current address: Department of Chemical Engineering, Queen’s University, Kingston, Canada
- Palsson BO (2021) Computation of condition- In addition to amino acids, many enzymes require cofactors (coenzymes and engrafted
- https://doi.org/10.1371/journal.pcbi.1007817 ability to compute an optimal proteome composition underlying a metabolic phenotype,
- Fédérale de Lausanne, SWITZERLAND coli K-12 MG1655 to computationally examine how environmental conditions change the
- tion used in models of metabolism alone (M-models); (2) ME-model computations reveal
- Published: June 23, 2021 non-intuitive variability in cofactor use under different growth conditions; (3) An analysis of
- Copyright: © 2021 Lloyd et al. This is an open ME-model predicted protein use in aerobic and anaerobic conditions suggests an enrich-
- (4) The ME-model could describe how limitation in key protein components affect the meta-
- Sciences under Grant numbers NIH R01 accessory molecules essential for the enzyme to function. Thus, the composition of the
- PLOS Computational Biology | https://doi.org/10.1371/journal.pcbi.1007817 June 23, 2021 1 / 24
- GM057089 (to BOP) and NIH U01 AI124316 (to
- Competing interests: The authors have declared azole—two antibiotics that target folate (vitamin B9) synthesis—we predicted how E. coli
- taking place in an organism (1–4). These predictions are based on the stoichiometric con-
- building blocks needed to synthesize RNA, protein, and other macromolecules (5).
- essential for detectable catalytic activity (6,7). The functions of some cofactors, such as flavins
- back to the beginning of life (8). Thus, ensuring that all coenzymes and prosthetic groups are
- essential biosynthetic activity of enzymes forming these cofactors (5). Biomass objective func-
- insight into the essentiality of individual cofactors in prokaryotes (10). However, even when
- PLOS Computational Biology | https://doi.org/10.1371/journal.pcbi.1007817 June 23, 2021 2 / 24
- (lipid and amino acid composition) affects metabolic fluxes (11), but a mechanistic model has
- These modeling methods include resource balance analysis (RBA) (13,14), whole-cell model-
- ing (15), flux-balance models that incorporate expression, thermodynamics, and resource allo-
- cation constraints (ETFL) (16), and other resource allocation models (17). One such method
- (ME-models) (18–20), and they are capable of explicitly computing over 80% of the proteome
- including direct computations of proteome allocation (21), the effect of temperature on pro-
- teostasis (22), and the effect of membrane and volume constraints on metabolism (19). Fur-
- E. coli K-12 MG1655, along with many other microbes, are capable of de novo synthesizing all
- of the essential cofactors needed for growth listed in Table 1. Thus, the pathways that require
- Table 1 is also explicitly modeled by the ME-model, as iJL1678b mechanistically describes all
- the processes required to produce a functioning proteome (Fig 1). Thus, for a particular enzy-
- is included as part of a “biomass constituent demand” reaction (23), analogous to the biomass
- objective function in M-models. iJL1678b was thus modified to account for the activity of these
- Methods). Coenzymes were included in the analysis if they met 2 criteria: 1) they function in
- S1 Text, see Materials and Methods). Using this modified ME-model, growth simulations
- PLOS Computational Biology | https://doi.org/10.1371/journal.pcbi.1007817 June 23, 2021 3 / 24
- Table 1. Summary of the vitamins synthesized by E. coli K-12 MG1655.
- Thiamin (thm) Energy metabolism Prosthetic group Universal B1

## Methods (brief)

- 49. Bouvet O, Bourdelier E, Glodt J, Clermont O, Denamur E. Diversity of the auxotrophic requirements in

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
