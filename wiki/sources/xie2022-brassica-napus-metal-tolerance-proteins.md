---
type: source
raw_handle: MFK_genes-13-00761-v2
cite_key: xie2022-brassica-napus-metal-tolerance-proteins
title: "Genome-Wide Identification and Expressional Profiling of the Metal Tolerance Protein Gene Family in Brassica napus"
authors: ["Tao Xie", "Wenjing Yang", "Xin Chen", "Hao Rong", "Youping Wang", "Jinjin Jiang"]
year: 2022
publication: "Genes"
doi: "10.3390/genes13050761"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 2 Manual Fetches/genes-13-00761-v2.pdf"
metals: [Cd, Cr, Cu, Fe, Hg, Mn, Pb, Se, Zn]
ingredients: []
products: []
matrices: [brassica-napus-seedlings, rapeseed-leaves, rapeseed-roots, metal-ion-treatment, qrt-pcr]
jurisdictions: [CN]
near_duplicates: []
sample_n: 33
sample_population: "Genome-wide identification of 33 Brassica napus metal tolerance protein genes, followed by rapeseed seedling leaf/root qRT-PCR response testing after metal-ion and selenium treatments."
updated: 2026-06-02
---

# Xie et al. 2022 - Brassica napus metal tolerance protein genes

Xie and colleagues identified the metal tolerance protein (MTP/CDF) gene family in the rapeseed genome and tested how BnMTP expression in roots and leaves responds to metal-ion stress. This is primary plant-genomics and phytoremediation-context evidence, not consumer-product occurrence evidence. The source does not measure metal concentrations in rapeseed seed, oil, meal, or any food matrix.

## Key numbers

### Gene-family inventory

The authors identified 33 BnMTP genes in Brassica napus, 17 BrMTP genes in B. rapa, and 17 BoMTP genes in B. oleracea. The 33 BnMTPs were classified into Zn-CDF, Fe/Zn-CDF, and Mn-CDF clusters. The paper reports 14 BnMTPs in Zn-CDF, 2 in Fe/Zn-CDF, and 17 in Mn-CDF. Twenty-five BnMTP genes were placed on 13 B. napus chromosomes, while eight were on unassembled scaffolds. Chromosome C04 carried the largest number of BnMTPs, with seven genes.

All 33 BnMTP proteins contained the cation-efflux domain. The authors identified 29 pairs of BnMTP paralogs, with expansion driven mainly by whole-genome duplication and segmental duplication; the discussion reports 22 of 33 BnMTPs (66.7%) derived from WGD or segmental duplication. Ka/Ks ratios of all duplicate MTP gene pairs were below 0.5, which the paper interprets as strong purifying selection after polyploidization.

### Metal and selenium treatment panel

For heavy-metal response testing, three-week-old rapeseed seedlings were treated for 8 days with Hoagland nutrient solution containing:

| Treatment compound | Nominal concentration |
| --- | ---: |
| CuCl2 | 100 micromolar |
| ZnSO4 | 100 micromolar |
| MnCl2 | 100 micromolar |
| HgCl2 | 180 micromolar |
| Pb(NO3)2 | 100 micromolar |
| K2Cr2O7 | 400 micromolar |
| Na2SeO3 | 1 micromolar |

Roots and leaves from five seedlings were pooled separately for RNA isolation and qRT-PCR. Control plants received Hoagland nutrient solution without the added metal-ion or selenium treatment.

### Expression response under metal stress

The paper found 24 BnMTPs expressed in roots and/or leaves under normal or metal-treatment conditions; 10 BnMTPs had low expression in the tested root/leaf samples. Under normal conditions, 13 BnMTPs were more highly expressed in leaves than roots, 8 were more highly expressed in roots than leaves, and BnMTP6.2, BnMTP12.1, and BnMTP12.2 had similar expression in roots and leaves.

Table 2 summarizes fold-change categories, where `+`/`-` means 2- to 4-fold change, `++`/`--` means 4- to 8-fold change, and `+++`/`---` means greater than 8-fold change.

Selected Table 2 response patterns:

| Tissue | Treatment | Main response pattern |
| --- | --- | --- |
| Leaf | Hg | Nine BnMTP genes were downregulated, including BnMTP1.1 and BnMTP11.1 at `--`; BnMTP2.1 was upregulated |
| Leaf | Mn | BnMTP2.1 was upregulated; BnMTP4.2 was downregulated |
| Leaf | Cr | BnMTP9.1 and BnMTP10.2 were upregulated |
| Leaf | Cu | BnMTP2.1 was upregulated |
| Leaf | Pb | BnMTP8.5 was downregulated |
| Leaf | Se | BnMTP8.2 was upregulated at `++`; BnMTP1.1 was inhibited per the Results narrative |
| Root | Cr | Twelve BnMTP genes were upregulated, including BnMTP1.1 at `+++` and BnMTP1.2, BnMTP2.1, BnMTP11.1, and BnMTP11.5 at `++`; BnMTP8.2 and BnMTP8.5 were downregulated at `---` |
| Root | Mn | BnMTP8.6 was downregulated at `--` |
| Root | Zn | BnMTP8.4, BnMTP8.5, and BnMTP8.6 were downregulated |
| Root | Pb | BnMTP8.2 and BnMTP9.2 were downregulated |
| Root | Hg | BnMTP1.2, BnMTP2.1, and BnMTP11.5 were upregulated; BnMTP1.1, BnMTP8.4, and BnMTP8.6 were downregulated |
| Root | Se | BnMTP8.2 and BnMTP8.5 were upregulated; BnMTP8.3, BnMTP8.4, and BnMTP8.6 were downregulated |

The authors emphasize Hg and Cr as the most notable treatment signals: several BnMTPs changed significantly after Hg or Cr treatment, and the conclusion identifies these genes as candidates for functional studies of Hg/Cr response.

## Methods (brief)

The study combined genome-wide bioinformatics with expression assays. Arabidopsis MTP sequences and the Pfam cation-efflux domain were used to identify BnMTP candidates in the B. napus genome. Candidate domains were screened with HMMER and InterProScan. Phylogeny, exon-intron structure, conserved motifs/domains, chromosome localization, synteny, duplication mode, Ka/Ks ratios, promoter cis-elements, and miRNA target sites were analyzed with standard bioinformatics tools including ClustalX, MEGA, MEME, MCScanX, PlantCARE, psRNATarget, ParaAT, and KaKs_Calculator.

Expression profiling used RNA-seq for developmental tissues, abiotic stresses, and hormone treatments, then qRT-PCR for metal and selenium treatments. B. napus Actin-7 was the qRT-PCR internal control; each qRT-PCR experiment was technically repeated three times.

## Implications

Certification: This source is not usable for HMTc product limits or benchmark pools. It reports gene expression after laboratory metal-ion challenge, not metal occurrence in rapeseed/canola foods.

App: Route as phytoremediation, plant metal transport, and stress-response context for chromium, mercury, lead, copper, zinc, manganese, cadmium, and testing/methodology pages. Do not route to rapeseed oil, seed, meal, or supplement pages as occurrence evidence.

Courses: Useful for teaching the difference between metal-exposure treatment doses, gene-expression response, and actual concentration occurrence in edible matrices.

## Wiki pages this source may touch

- [[metals/chromium]]
- [[metals/mercury]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/copper]]
- [[metals/zinc]]
- [[metals/manganese]]
- [[testing/index]]
- [[mitigation/index]]

## Verification notes

The PDF contains no measured crop or food concentration table. Metal values in this page are treatment concentrations used to provoke gene-expression responses and must not be interpreted as rapeseed occurrence values. The paper's group-count wording is internally awkward in the extracted text around group 7/AtMTP7; this page preserves the higher-confidence cluster counts from the Discussion and avoids using the inconsistent group-7 sentence as a routing fact.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [315a7b8a2](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8a2) | 2026-06-02 | major | 1 section added |
| [c90d709b7](https://github.com/paleofoundation/heavymetalindex/commit/c90d709b7) | 2026-06-02 | major | 8 sections added; narrative text revised |
<!-- END: hmi-page-history -->
