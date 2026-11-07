---
type: source
cite_key: palawat2025-soil-plant-gardening-ej
title: "Plant and soil contaminant modeling paired with risk-based soil screening levels and ingestion rates for home gardening in environmental justice communities"
authors: [Palawat P, Ramirez-Andreotta M]
year: 2025
publication: "Journal of Environmental Management 377: 127515"
doi: 10.1016/j.jenvman.2025.127515
pmcid: PMC12574972
access_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12574972/
retrieval_date: "2026-11-03"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY-NC-ND"
raw_path: /Users/kmfp/hmi-evidence-deposits/deposits/HMI-METAL-BARIUM-1/10.1016_j.jenvman.2025.127515.pdf
raw_sha256: 1dba39c77745f9fa7ff577bf8a3b63a0b46183b4ab120ecf3ee92c530e2895e1
metals: [Ba, As, Cu, Mn, Cd, Cr, Ni, Pb]
ingredients: ["[[ingredients/leafy-vegetables]]", "[[ingredients/root-vegetables]]", "[[ingredients/brassica-vegetables]]"]
products: []
matrices: [garden soil, garden plant tissue]
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Environmental justice community gardens across multiple US states (Arizona, Nevada); soil and dry plant tissue samples from multiple sites and time points; community-specific sample sizes not extracted"
evidence_fitness:
  supports: [supply-chain-soil-to-plant-context, risk-based-screening-level-context]
  does_not_support: [finished-food-occurrence, dietary-exposure-population-distribution]
audience: [regulator, researcher, food-safety]
sources: 0
updated: 2026-11-05
ingest: HMI-METAL-BARIUM-1
---

# Palawat and Ramirez-Andreotta 2025: Soil-plant barium modeling in environmental justice community gardens

This study paired linear mixed models of soil-to-plant metal transfer (bioconcentration factors, BCFs) with risk-based soil screening level (RBSL) calculations for home-grown produce in environmental justice (EJ) communities. It assessed arsenic, barium, copper, manganese, cadmium, chromium, nickel, and lead across plant categories (brassica vegetables, fruits, leafy vegetables, root and tuber vegetables, legumes, stalk and stem vegetables, herbs, tree leaves) and found that existing soil screening levels may be insufficiently protective for barium in several plant categories.

## Key numbers

Soil pH effect on barium BCF: a 1-unit increase in soil pH was associated with a decrease in ln(BCF) for barium of 0.23 (p = 0.040); higher soil pH reduces barium plant uptake (p. 9).

Plant category ranking by barium BCF (highest to lowest): leafy vegetables > herbs > root and tuber vegetables (p. 9).

Plant category ranking by barium dry-plant concentration (highest to lowest): tree leaves > leafy vegetables > herbs (p. 9).

Risk-based soil screening levels (RBSLs): the non-cancer RBSL for barium in brassica vegetables, fruits, leafy vegetables, and root and tuber vegetables were below existing regulatory RBSLs for the same categories, indicating that current screening levels may not be protective enough against non-cancer risks from barium at a hazard quotient target of 0.1 (p. 10). This is a modeling finding, not a measurement of food concentrations.

## Evidence fitness

This paper is relevant to barium as a supply-chain contamination context source: it quantifies how soil barium transfers to plant categories and identifies that conventional soil screening levels may not fully protect against non-cancer risks from dietary barium for home gardeners in contaminated EJ communities. It is not a finished-food occurrence dataset; the matrix is garden soil and dried plant tissue, not commercial produce. The BCF and RBSL values are relevant for understanding the soil-to-plant pathway and geographic or site-specific risk. Results reflect contaminated EJ community sites in the US Southwest and are not generalizable to commercial agricultural settings.

## Methods (brief)

Linear mixed models (LMM) in RStudio with nested "community|site" random variable to account for repeat sampling. Response variables log-transformed. Risk-based soil screening levels calculated using modified ADD (average daily dose), LADD (lifetime average daily dose), HQ, and IELCR equations per US EPA (2015). Non-cancer RBSLs calculated for As, Ba, Cd, Cu, Mn; cancer RBSLs for As, Cr-VI, Ni, Pb. LOD/LOQ not reported for barium. CRM recovery not reported.

## Limitations

Community-specific contamination; not a commercial agricultural occurrence study. The finding that existing soil screening levels are insufficient for barium applies to EJ community garden contexts and cannot be used as general regulatory guidance. This paper is context for the soil-to-plant pathway, not a direct food occurrence source.

## Related evidence

- [[metals/barium]]
- [[supply-chain/soil-to-plant-transfer]]
