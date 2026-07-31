---
type: source
cite_key: fu2022-sunflower-cd-cultivar-transcriptomics
title: "Physiological and Transcriptomic Comparison of Two Sunflower (Helianthus annuus L.) Cultivars With High/Low Cadmium Accumulation"
authors: [Fu Y, Zhatova H, Li Y, Liu Q, Trotsenko V, Li C]
year: 2022
publication: "Frontiers in Plant Science"
doi: "10.3389/fpls.2022.854386"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/studies/fu2022-sunflower-cd-cultivar-transcriptomics.pdf
sha256: b92d4c2c046426ea38c2661e42c5cec731eef6dc7461550368527a008c8f8f51
access_date: 2026-05-12
access_url: "https://doi.org/10.3389/fpls.2022.854386"
metals: [Cd]
ingredients: ["[[ingredients/sunflower-seeds]]"]
products: ["[[products/sunflower-seeds]]"]
matrices: [sunflower-shoot, sunflower-root]
jurisdictions: [CN, UA]
sample_n: 2
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Fu et al. 2022 — Sunflower cultivar comparison for cadmium accumulation and tolerance

Two sunflower genotypes — 62\3 (high Cd accumulation) and JB231AC (low Cd accumulation) — were subjected to hydroponic Cd stress at 0, 25, 50, and 100 µM CdCl2 for seven days to compare physiological responses and transcriptomic profiles. The high-accumulating cultivar 62\3 showed significantly greater root-to-shoot Cd translocation (higher transfer factor) and higher Cd concentration in shoots at 100 µM stress, whereas JB231AC exhibited superior Cd tolerance, maintaining larger biomass and higher antioxidant enzyme (SOD, POD) activity. RNA-seq analysis identified 8,818 differentially expressed genes; ABC-transporter genes and ZIP (Zn-regulated transporter, Iron-regulated transporter-like protein) gene families were disproportionately represented in Cd-transport-related DEGs, with one NRAMP gene up-regulated specifically in the high-accumulating cultivar 62\3, implicating it as a candidate Cd-uptake driver.

## Key numbers

Cd concentration in shoots of 62\3 at 100 µM treatment: approximately 850 mg/kg DW; JB231AC shoots: approximately 700 mg/kg DW (Figure 1B, estimated from bar chart, n=3 per treatment). Transfer factor (TF, shoot:root Cd ratio) for 62\3 was significantly higher than JB231AC at 0–50 µM range (p < 0.001; Figure 1D). Root Cd in 62\3 reached approximately 3,100 mg/kg DW at 100 µM versus approximately 2,500 mg/kg DW for JB231AC (Figure 1C). These are hydroponic spike concentrations, not field measurements. Total of 4,764 DEGs compared between the two cultivars under 50 µM Cd.

## Methods (brief)

Hydroponic experiment, 1/2 strength Hoagland solution. Cd treatment: 0, 25, 50, 100 µM CdCl2·2.5H2O for 7 days. Tissue Cd measured by ICP-OES (Optima 2100DV, Perkin Elmer) after HNO3/H2O2 digestion. Transcriptomics: RNA-seq on Illumina NovaSeq 6000, Trinity assembly, DESeq R package (FDR < 0.01, |log2FC| > 2). RT-qPCR validation (n=3 biological + 3 technical replicates). Cultivars sourced from Sumy National Agrarian University, Ukraine.

## Limitations

Hydroponic conditions at supraphysiological Cd concentrations (25–100 µM); field soil Cd is typically in the ppb–low ppm range. Results illuminate molecular mechanisms but do not directly translate to seed/oil Cd contamination under agricultural conditions. Single-species comparison of two cultivars; commercial sunflower breeding pools are far larger. No downstream measurement of seed or oil Cd.

## Implications

- Certification: Sunflower oil and seed products are not HMT&C primary matrices, but this paper establishes that cultivar selection is a meaningful Cd-mitigation lever for sunflower supply chains — relevant if sunflower protein or seed ingredients are evaluated. The NRAMP finding supports cultivar-screening as a practical mitigation strategy.
- Courses: Demonstrates the plant-side mechanisms of Cd uptake (ABC transporters, ZIP family, NRAMP) in a commercially important oilseed crop; useful for supply-chain educator modules on cultivar-based contamination variance.
- App: Sunflower seed/oil Cd contamination_profile for [[ingredients/sunflower-seed]] should note cultivar as a variance driver; this paper provides the mechanistic basis but not field ppb values.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[ingredients/sunflower-seed]]
- [[metals/cadmium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [29a65ac86](https://github.com/paleofoundation/heavymetalindex/commit/29a65ac86) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
