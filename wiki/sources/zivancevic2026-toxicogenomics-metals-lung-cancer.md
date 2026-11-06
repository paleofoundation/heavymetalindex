---
type: source
cite_key: zivancevic2026-toxicogenomics-metals-lung-cancer
title: "Toxicogenomic Characterization of Common Genes and Signaling Pathways Associated with Multiple Toxic Metal(loid)s in Lung Cancer: A Comparative Analysis of Small-Cell and Non-Small-Cell Lung Cancer"
authors: [Zivancevic K, Kok K]
year: 2026
publication: "Cancers"
doi: 10.3390/cancers18152395
access_url: https://doi.org/10.3390/cancers18152395
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/pdf/10.3390_cancers18152395.pdf
raw_sha256: 5427f7ad0b167180b7ad98a1c339832633d14ab0c548b2665d181c582e0cefde
pmcid: PMC13465796
pmid: "42588613"
metals: [tAs, Cd, Pb, tHg, Ni, Cr]
ingredients: []
products: []
matrices: [cell-culture, tissue]
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "In silico toxicogenomic analysis using Comparative Toxicogenomics Database (CTD, accessed 30 June 2026, Changelog 18280); gene network analysis via GeneMANIA; pathway enrichment via ToppFun; covers arsenic (As), cadmium (Cd), lead (Pb), methylmercury compounds (MMC), nickel (Ni), hexavalent chromium Cr(VI)"
evidence_fitness:
  supports: [arsenic-lung-cancer-gene-interactions, tp53-arsenic-lung-carcinogenesis, pi3k-akt-mtor-arsenic-lung-cancer, toxicogenomic-metal-lung-cancer-pathways]
  does_not_support: [dietary-arsenic-exposure, food-concentration-data, human-epidemiology]
audience: [researcher]
sources: 0
updated: 2026-11-06
no_doi_assigned: false
---

# Zivancevic and Kok 2026: Toxicogenomics of metals in lung cancer (NSCLC and SCLC)

This in silico toxicogenomic study used the Comparative Toxicogenomics Database (CTD) to identify genes, molecular interaction networks, and signaling pathways shared across six toxic metal(loid)s (lead, cadmium, methylmercury compounds, arsenic, nickel, hexavalent chromium) and lung cancer, including non-small-cell lung cancer (NSCLC) and small-cell lung cancer (SCLC). GeneMANIA and ToppFun tools were used for network analysis and pathway enrichment.

## Key numbers

- Arsenic (As) is associated with 10,260 total genes in the CTD; 199 of these genes are associated with lung cancer overall; 113 with NSCLC; 27 with SCLC.
- 18 genes are common to all six metal(loid)s and lung cancer overall, including AKT1, CDKN1A, FOS, GPX1, GPX3, GSTM1, HMOX1, IFNG, IL1B, IL6, MAPK3, NOS2, OGG1, PRKN, STAT3, TNF, and TP53.
- 8 genes are common to all six metal(loid)s and NSCLC: CAT, CCNB1, MTOR, NQO1, SOD2, STAT3, TP53, and VEGFA.
- 2 genes common to all six and SCLC: MTOR and TP53.
- TP53 was the only gene common to all investigated metal(loid)s across all three lung cancer categories, suggesting it as a molecular biomarker candidate.
- Pathway enrichment (ToppFun): PI3K-AKT-mTOR signaling enriched in both SCLC and NSCLC; VEGF signaling in NSCLC; MAPK, interleukin, and macrophage-stimulating protein signaling also enriched.
- Arsenic shows predominant co-expression interactions in lung cancer overall; pathway interactions predominate in NSCLC (42.70%).
- Several metals exhibited concordant effects on TP53, VEGFA, HMOX1, and IL6 expression.

## Methods (brief)

CTD queried for gene-chemical interactions and disease associations for each metal(loid) and each lung cancer category (accessed 30 June 2026, Changelog 18280). Gene lists common to all six metal(loid)s identified by CTD MyVenn tool. GeneMANIA (University of Toronto) used for molecular interaction network reconstruction; default settings; 20 related genes predicted per seed gene. ToppFun (Cincinnati Children's Hospital) for pathway enrichment using REACTOME, KEGG, WikiPathways, and PID databases; Benjamini-Hochberg FDR correction; p less than 0.05 cutoff. Only binary chemical-gene interactions for Homo sapiens included.

## Evidence fitness

Supports: identifying shared molecular pathways (PI3K-AKT-mTOR, TP53, oxidative stress/HMOX1, IL-6/inflammation) through which arsenic and co-occurring metals may contribute to lung carcinogenesis in NSCLC and SCLC. Hypothesis-generating; provides candidate biomarkers and mechanistic targets. Limitation: in silico only; CTD data include both direct and inferred evidence; correlation does not establish causation; real-world co-exposure mixtures are not modeled.

## Limitations

In silico analysis only (no primary data collection); CTD curated evidence includes inferred as well as directly demonstrated interactions; Gene network analysis predicts rather than confirms molecular interactions; pathway findings require experimental validation; no dose-response information; GPX1 gene was not recognized by GeneMANIA server and was excluded from network analysis.

## Related evidence

- [[health/arsenic-respiratory-effects]]
- [[metals/arsenic-inorganic]]
- [[metals/chromium-hexavalent]]
