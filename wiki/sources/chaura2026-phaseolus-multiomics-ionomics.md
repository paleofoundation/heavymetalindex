---
type: source
raw_handle: FM_13019807
cite_key: chaura2026-phaseolus-multiomics-ionomics
title: "Nutritional and Biochemical Diversity in Beans Accessions from Three Phaseolus Species Using Multiomics Characterization"
authors: [Chaura J, Velez GE, Clavijo-Buritica DC, Riccio-Rengifo C, Granobles LM, Brinkley S, Santaella M, Wenzl P, Carvajal-Yepes M, Correa Abondano M, Ospina JA, Gallo-Franco JJ, Debouck D, Beebe S, Wilker J, Kennedy G, Tohme J, Ahmed S, de La Parra J, Jaramillo-Botero A]
year: 2026
publication: "ACS Nutrition Science"
doi: "10.1021/acsnutrsci.5c00061"
access_url: https://doi.org/10.1021/acsnutrsci.5c00061
source_type: peer-reviewed
evidence_tier: A
license: "CC-BY-NC-ND 4.0"
raw_path: raw/markdown/FM_13019807/FM_13019807.md
metals: [Pb, Cd, tAs, tHg, Cr]
products: ["[[products/legumes-pulses-other]]"]
ingredients: ["[[ingredients/lentils]]"]
matrices: [legume-grain, dry-bean]
jurisdictions: [CO, MX, PE]
near_duplicates: []
sample_n: 46
sample_population: "46 genebank accessions of Phaseolus vulgaris (n=35), P. lunatus (n=7), and P. acutifolius (n=4) from 19 countries, sourced from CIAT Future Seeds genebank, Palmira, Colombia; Periodic Table of Food Initiative (PTFI)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Chaura et al. 2026 — Multiomics of Phaseolus beans: heavy metal outlier in P. vulgaris

A comprehensive multiomics study of 46 Phaseolus bean accessions (three species, 19 countries of origin) finds that overall heavy metal concentrations in dry bean seeds are below Codex Alimentarius thresholds, with the important exception of one P. vulgaris accession (G3645, "Jamapa," from Veracruz, Mexico) which exhibited 3311 ppb lead and 134 ppb cadmium — both exceeding the 100 ppb threshold applied by the authors. Excluding that single outlier, cadmium showed a significant species-level difference, with P. acutifolius (tepary bean) averaging 36 ppb versus 11-12 ppb in P. vulgaris and P. lunatus; arsenic also differed significantly by species, with P. acutifolius averaging 6 ppb versus 1.3-1.8 ppb. The findings are relevant to bean ingredient suppliers and agronomic genebank screening.

## Key numbers

Heavy metals by ICP-MS (dry bean, ppb unless stated):

- G3645 (P. vulgaris, Veracruz MX) outlier: Pb = 3311 ppb, Cd = 134 ppb (authors flag as "unsafe" and recommend exclusion from food-oriented deployment)
- Cadmium (excluding G3645), overall range consistent with: P. acutifolius average ~36 ppb; P. vulgaris and P. lunatus average 11-12 ppb (Kruskal-Wallis p = 0.0166)
- Arsenic (total): P. acutifolius average ~6 ppb; P. vulgaris and P. lunatus average 1.3-1.8 ppb (Kruskal-Wallis p = 0.0097)
- Lead, chromium, mercury: no significant species-level differences (excluding G3645)
- No significant inter-species differences in Pb, Cr, or Hg excluding the outlier
- Authors describe all heavy metals except G3645 as within Codex limits, though exact Codex reference not specified

Method: ICP-OES for macrominerals and microminerals; ICP-MS for heavy metals (As, Hg, Cd, Pb, Cr); acid digestion per AOAC standard methodologies; outsourced to Agrosavia (Mosquera, Colombia). n = 46 accessions, approximately 5 g sample per accession. Sample prep: lyophilized, cryo-homogenized. No LOD/LOQ reported in the text.

## Methods (brief)

Multiomics characterization (proteomics, metabolomics, ionomics, fatty acids, genotyping) of 46 Phaseolus genebank accessions. Ionomics conducted via ICP-OES and ICP-MS at a certified analytical laboratory. Statistical comparisons by Kruskal-Wallis with Dunn post-hoc Bonferroni correction. Limitation: only one sample per accession (5 g); no field replication or multiple harvest years; single-point measurement; genebank propagation conditions unknown. Outlier G3645 attributed to likely localized soil contamination but genotype-dependent hyperaccumulation or postharvest contamination not excluded.

## Implications

Certification: The G3645 Pb outlier (3311 ppb in dry bean) illustrates that genotype × origin interactions can produce large within-species variation in heavy metal accumulation even when most accessions of the same species are clean. Commodity-level risk profiling for beans cannot rely on species identity alone; provenance and variety matter. Bean-containing products should be evaluated with origin data where available.

Courses: Useful example that ionomic safety screening is a meaningful component of genebank and crop diversity research, and that "legumes are generally safe" is not a complete statement without variety and origin qualification.

App: Bean ingredients should carry a contamination_profile flag noting that the overall Cd and As burden is low for most P. vulgaris accessions but that P. acutifolius consistently shows higher Cd and As, and that single-accession outliers at very high Pb can occur.

## Wiki pages updated on ingest

- [[ingredients/beans]]
- [[metals/cadmium]]
- [[metals/lead]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [da722b679](https://github.com/paleofoundation/heavymetalindex/commit/da722b679) | 2026-05-12 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
