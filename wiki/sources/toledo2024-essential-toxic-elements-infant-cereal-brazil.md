---
type: source
cite_key: toledo2024-essential-toxic-elements-infant-cereal-brazil
title: "Essential and Toxic Elements in Infant Cereal in Brazil: Exposure Risk Assessment"
authors: ["Toledo MC", "Lee JS", "Batista BL", "Olympio KPK", "Nardocci AC"]
year: 2024
publication: "International Journal of Environmental Research and Public Health 21(4):381"
doi: "10.3390/ijerph21040381"
pmid: "38673295"
pmcid: "PMC11050093"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
access_url: "https://doi.org/10.3390/ijerph21040381"
raw_path: "raw/external-fetch/2026-05-09/toledo2024-essential-toxic-elements-infant-cereal-brazil.jats.xml"
data_paths:
  - data/evidence/category1_toledo2024_infant_cereal_brazil_samples.csv
metals: [Al, tAs, iAs, Cd, Cr, Cu, Fe, Mn, Ni, Pb, Sn, Zn]
products: [baby-cereals-dry-rice-based, baby-cereals-dry-non-rice]
matrices: [infant-rice-cereal, multigrain-cereal-with-rice, non-rice-infant-cereal]
jurisdictions: [BR]
sample_n: 18
sample_population: "Eighteen samples of eight different brands of infant cereal acquired 2014-2015 in Brazilian grocery stores: 9 rice cereal, 5 multi-grain cereal containing rice, 4 non-rice cereal (corn, oatmeal, multi-grain). Concentration data drawn from Pedron et al. (cited as ref [10] in the paper); Toledo 2024 performs the cancer/non-cancer risk-assessment integration."
acquired_via: "PubMed E-utilities EFetch JATS XML (db=pmc, id=PMC11050093) — 2026-05-09 autonomous run"
updated: 2026-05-09
---

# Toledo et al. 2024 — Essential and Toxic Elements in Infant Cereal in Brazil

This A-tier peer-reviewed paper reports total concentrations of 14 essential and non-essential elements (Ag, Al, As, B, Ba, Co, Cr, Cu, Mn, Se, Sr, Zn, Ni, Cd, Pb) in 18 samples of Brazilian infant cereal across three matrix subcategories: rice cereal (n=9), multi-grain cereal containing rice (n=5), and non-rice-based cereal (n=4 — corn, oatmeal, multi-grain). Concentrations were measured by ICP-MS with HPLC-ICP-MS speciation for arsenic; the paper integrates the concentration data (drawn from Pedron et al. as ref [10]) with EPA/Codex toxicity values to compute incremental lifetime cancer risks and hazard quotients for infant exposure. Author scope is exact on matrix axis (rice vs multi-grain-with-rice vs non-rice infant cereal per Section 2.2 sample collection) and exact on format axis (dry infant cereal as sold). Per the corrected row-fit rule (CLAUDE.md Part 6), this routes directly to the rice-based and non-rice cereal HMTc subcategory pages.

## Key Numbers

Table 3 of the paper reports per-sample mean ± SD concentrations in ng/g (= ppb) for each of the 18 samples (labeled A through R). Sample-level extract written to `data/evidence/category1_toledo2024_infant_cereal_brazil_samples.csv`. Computed percentiles by HMTc subcategory under the lower-bound treatment (samples reported as `5×10⁻⁵ ± <0` treated as below LOD = 0):

### Rice-based subcategory pool (rice + multigrain-with-rice; n=14)

| Analyte | n | p30 | p50 | p90 | p100 (max) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Total arsenic (tAs) | 14 | 80.67 ppb | 107.91 ppb | 141.64 ppb | 168.08 ppb |
| Aluminum (Al) | 14 | 504.94 ppb | 1836.97 ppb | 4890.31 ppb | 8799.73 ppb |
| Nickel (Ni) | 14 | 173.13 ppb | 199.10 ppb | 428.00 ppb | 484.46 ppb |
| Cadmium (Cd) | 14 | 4.24 ppb | 12.75 ppb | 19.00 ppb | 22.15 ppb |
| Lead (Pb) | 14 | 22.36 ppb | 25.12 ppb | 44.94 ppb | 60.13 ppb |

### Non-rice subcategory pool (n=4)

| Analyte | n | p30 | p50 | p90 | p100 (max) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Total arsenic (tAs) | 4 | 6.14 ppb | 9.41 ppb | 12.76 ppb | 12.86 ppb |
| Aluminum (Al) | 4 | 2208.12 ppb | 2528.15 ppb | 3300.92 ppb | 3516.70 ppb |
| Nickel (Ni) | 4 | 81.75 ppb | 249.75 ppb | 474.13 ppb | 498.52 ppb |
| Cadmium (Cd) | 4 | 1.50 ppb | 1.72 ppb | 7.22 ppb | 9.52 ppb |
| Lead (Pb) | 4 | 15.83 ppb | 21.64 ppb | 29.91 ppb | 31.30 ppb |

The non-rice pool n=4 is below the 10-sample defensibility floor; values are reported for traceability but should not be treated as a defensible standalone non-rice distribution. They serve as triangulation with the FDA 2024 non-rice (n=25) and FDA 2016 non-rice (n=30) pools.

### Comparison with FDA 2024 + FDA 2016 (rice-based subcategory)

| Analyte | Toledo 2024 p90 (BR, n=14) | FDA 2024 p90 (US, n=252-256) | FDA 2016 p90 (US, n=82) |
| --- | ---: | ---: | ---: |
| tAs | 141.64 ppb | 135.00 ppb | — (iAs only) |
| iAs | — (only one sample speciated) | — (total only) | 124.90 ppb |
| Al | 4890.31 ppb | — | — |
| Ni | 428.00 ppb | — | — |
| Cd | 19.00 ppb | 22.00 ppb | — |
| Pb | 44.94 ppb | 19.10 ppb | — |

Toledo 2024 shows substantially higher Pb in Brazilian rice-based infant cereal (p90 44.94 vs FDA 19.10) — geographic variation that should not be silently merged into a single global aggregate without jurisdiction labeling per CLAUDE.md Part 6. tAs is consistent across U.S. and Brazil (~140 ppb p90). Al and Ni were not in the FDA datasets, so Toledo 2024 supplies the first sample-level Al and Ni distributions for rice-based infant cereal.

## Methods (brief)

Sample preparation: ICP-MS for total elements; HPLC-ICP-MS for arsenic speciation. The arsenic speciation was performed only on one sample where the concentration of As was below detection in the total-As determination, so iAs is not available at the sample level for the broader 18-sample pool — author's iAs analysis relies on the total-As to iAs conversion typical of rice-based products. Concentrations reported on a dry-weight basis. The paper notes that the underlying concentration data is from Pedron et al. and the Toledo 2024 contribution is the risk-assessment integration.

## Evidence Fitness

EF-2 reconstructable A-tier sample-level evidence for the rice-based and non-rice infant cereal subcategories, with the caveat that the source-paper-of-record for the underlying concentration measurements is Pedron et al. (cited as ref [10] in Toledo 2024). The data table is faithfully reproduced in Toledo 2024's Table 3 with per-sample mean ± SD; sample-level extraction is reconstructable.

## Limitations

- Sample size is small (n=18) and concentrated in Brazilian-market products acquired 2014-2015. Geographic and temporal applicability to U.S. or EU contexts requires explicit jurisdiction metadata.
- The non-rice subset is n=4, below the 10-sample defensibility floor. Use only for triangulation against U.S. FDA 2024 non-rice (n=25) and FDA 2016 non-rice (n=30).
- iAs at sample level is not directly reported (speciation only on one sample where total As was below LOD); routing to iAs cells uses total-As as a conservative upper bound only with explicit caveat.
- Toledo 2024 is the citing/risk-assessment paper. The original concentration source is Pedron et al. (ref [10] in Toledo 2024). When Pedron et al. is independently ingested as a source page, this Toledo 2024 entry should be reviewed for whether it adds risk-assessment context only (not double-counted as a separate concentration source) per the Part 6 row-fit n_a_tier counting.
- Cr is total Cr only (not speciated); do not interpret as Cr-VI per CLAUDE.md Part 14.

## Implications

Certification: Direct A-tier sample-level evidence for the rice-based infant cereal Pb, Cd, tAs, Ni, and Al cells under HMTc Category 1, plus first sample-level Al and Ni distributions for that subcategory. Combined with FDA 2024 (n=252-256, U.S. compliance) and FDA 2016 (n=82, U.S. iAs), Toledo 2024 brings n_a_tier to 2-3 for several rice-based cereal cells. Geographic-context note required: Toledo's Brazilian-market Pb p90 (44.94 ppb) is more than 2× the U.S. FDA 2024 p90 (19.10 ppb), so any aggregate must label jurisdiction composition per Part 6.

Courses: Useful illustration of geographic variation in rice cereal contamination, and of the value of sample-level data tables for downstream risk assessment.

App: Supports rice-based infant cereal contamination_profile values for Al, Cd, Pb, Ni, tAs.

Microbiome: No direct microbiome endpoint.

## Provenance Notes

This source was acquired during the 2026-05-09 autonomous run via NCBI EFetch JATS XML for PMC11050093 (CC BY license per PMC OA bulk API). The JATS XML is preserved at `raw/external-fetch/2026-05-09/toledo2024-essential-toxic-elements-infant-cereal-brazil.jats.xml`. The PDF was not directly fetched (PMC's HTML interstitial blocked direct PDF download); the JATS XML is the canonical full-text artifact.

The PMC ID PMC11050093 was originally surfaced via PubMed E-utilities elink as a candidate when searching for hexavalent chromium in baby food (where it was a citing paper rather than the original Mathebula 2019 target). On reverse-verification via PMC esummary, PMC11050093 was identified as Toledo 2024 — itself a high-value paper directly relevant to infant cereal subcategories. See `wiki/batch-reports/data-gap-wishlist-2026-05-09.md` for the full PMC ID correction note.

## Wiki Pages Updated On Ingest

- [[products/baby-cereals-dry-rice-based]]
- [[products/baby-cereals-dry-non-rice]]
- [[products/infant-and-child-foods-master]]
