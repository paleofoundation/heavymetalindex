---
type: source
raw_handle: MFK_10-2478-aucft-2023-0008
cite_key: jakkielska2023-noodles-toxic-metals
title: "Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment"
authors: [Jakkielska D, Frankowski M, Kurzyca I, Ziola-Frankowska A]
year: 2023
publication: "Acta Universitatis Cibiniensis Series E: Food Technology"
doi: "10.2478/aucft-2023-0008"
source_type: peer-reviewed
evidence_tier: A
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/10.2478_aucft-2023-0008.pdf"
raw_sha256: "58adae15a74ea037ca96373045a0983a802145dccabb42ba6e7e61a00e2a80c0"
access_url: "https://doi.org/10.2478/aucft-2023-0008"
metals: [Pb, Cd, tAs, tHg]
ingredients: ["[[ingredients/noodles]]", "[[ingredients/pasta]]", "[[ingredients/wheat]]", "[[ingredients/corn]]", "[[ingredients/non-rice-grains]]"]
products: ["[[products/pasta-wheat-based]]", "[[products/other-grain-products]]"]
matrices: [noodles, pasta, cereal-grain, dry-weight]
jurisdictions: [PL]
near_duplicates: []
sample_n: 20
sample_population: "Twenty commercially available 500 g noodle/pasta products collected from markets in Poland, covering wheat, durum wheat, corn-flour gluten-free, whole-grain, buckwheat/spelt, vegetable-added, and other ingredient variants. Product names were reported by the source but are not repeated here because contamination values are aggregated to product form."
updated: 2026-06-08
---

# Jakkielska et al. 2023 — Toxic metals in noodles and pasta sold in Poland

## Overview

Jakkielska and colleagues measured Pb, Cd, As, and Hg in 20 commercially available noodle/pasta products collected from Polish markets. Acid microwave digestion followed by ICP-MS produced total-metal concentrations for each product, and the authors then calculated ADI, THQ, HI, and CR values for Polish adult consumers. The occurrence finding is that Cd had the highest mean concentration among the four measured metals, while Hg was the lowest on average but had one high sample-level maximum. The arsenic speciation finding is not a direct speciation assay: the authors estimated i-As by applying a 70% conversion factor to total arsenic.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Sample count | 20 noodle/pasta samples, commercially available in Poland |
| Mean total As | 8.483 μg·kg-1 |
| Total As range | 1.087-33.02 μg·kg-1 |
| Mean Cd | 29.39 μg·kg-1 |
| Cd range | 1.255-55.33 μg·kg-1 |
| Mean total Hg | 1.661 μg·kg-1 |
| Total Hg range | <LOD-13.55 μg·kg-1 |
| Mean Pb | 9.241 μg·kg-1 |
| Pb range | <LOD-52.13 μg·kg-1 |
| Mean ADI values from Table 2 | As 0.0019, Cd 0.0065, Hg 0.0004, Pb 0.0020 μg·kg-1 bw·day-1 |
| Mean THQ values from Table 2 | As 0.0063, Cd 0.0065, Hg 0.0037, Pb 0.0006 |
| Mean HI | 0.0171, with min-max 0.0077-0.0331 |
| Mean CR values | As 2.820 x 10-6, Cd 2.475 x 10-6, Pb 1.741 x 10-8; Hg CR not calculated |
| Source-estimated i-As | Estimated by applying a 70% conversion factor to total arsenic data; mean estimated ADI for i-As reported as 0.0013 μg·kg-1 bw·day-1 |
| Instrumental LODs | As 0.0063, Cd 0.0031, Hg 0.0009, Pb 0.0030 µg·L-1 |

The text reports the lowest total arsenic value in a corn-flour sample and the highest total arsenic value in a wheat-flour sample with spirulina and salt. It reports the lowest cadmium value in a corn-flour sample and the highest cadmium value in a whole-grain buckwheat tube pasta sample. The lowest mercury value was reported for a wheat pasta sample and the highest mercury value for a gluten-free penne sample; the lowest and highest lead values occurred in the same samples as the lowest and highest arsenic values. Product brand names from the source table are intentionally omitted from this page.

## Methods (brief)

The authors collected 20 commercially available 500 g noodle/pasta products from different markets in Poland. Samples were ground, 1000 +/- 5 mg was digested with 8 mL of 70% HNO3 in a microwave system, and diluted solutions were analyzed by ICP-MS 2030 (Shimadzu). As was analyzed at mass 75 u, Cd at 114 u, Hg at 202 u, and Pb at 208 u; Sc, Rh, and Tb were used as internal standards. Certified reference materials "Trace metal ICP - sample 1" and "Trace metal ICP - sample 2" gave recoveries of 94-105% for the certified elements except Hg. Values below LOD were treated as half the LOD for health-risk calculations. The study measured total metals; it did not perform arsenic or mercury speciation.

## Implications

This source contributes occurrence data for processed non-rice grain pasta/noodles in the Polish market, with a useful split between total-metal measurements and risk-calculation outputs. The Table 2 means and ranges can support product-form occurrence context for pasta/noodles, while the i-As values should remain explicitly labeled as source-estimated from total arsenic rather than measured speciation. The paper is most relevant to product-row routing for pasta-wheat-based and other non-rice grain products, plus metal pages for lead, cadmium, total arsenic, inorganic arsenic as an estimate, and total mercury.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text had a readable title page, methods, Table 1, Table 2, Figure 1 caption, and conclusions.
- DOI verified from the title page as `10.2478/aucft-2023-0008`; DOI, raw handle `MFK_10-2478-aucft-2023-0008`, and cite-key checks found no existing source page before creation.
- All concentration means, ranges, ADI, THQ, HI, CR, and LOD values above were checked against the extracted title-page abstract, Results text, methods LOD sentence, and Table 2.
- Units are preserved as reported (`μg·kg-1`, `μg·kg-1 bw·day-1`, `µg·L-1`); no ppb/ppm conversion was performed.
- Speciation: arsenic in the occurrence table is total As; mercury is total Hg. The i-As entry is source-estimated by a 70% conversion factor and is not a measured arsenic-speciation result. Per, `iAs` was removed from the frontmatter `metals` array (2026-06-09 autonomous audit) so this source does not route as direct iAs evidence; the estimated i-As discussion is preserved in body text only.
- Frontmatter slug check (2026-06-09 autonomous audit): GPT-style audit flagged `[[ingredients/non-rice-grains]]` as off-vocabulary. Verified false positive — the slug appears in `docs/gpt-collaboration/taxonomy-snapshot.md` ingredients list and `wiki/ingredients/non-rice-grains.md` exists. No change applied.
- ADI unit correction (2026-06-09 autonomous audit): the source defines ADIHMs in `μg·kg-1 bw·day-1` (body-weight normalized); earlier draft dropped the `bw` qualifier. Corrected in Key numbers and verification-notes unit list.
- Brand firewall: the source's sample-characterization table names commercial pasta products. This page reports only aggregated product-form descriptors and does not attach brand names to contamination values.
- The source text has an internal tension between a prose sentence listing ADI values near the Table 2 maxima and Table 2's mean ADI row. This page uses the table-labeled mean and min-max values and notes the table source.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [f4141d790](https://github.com/paleofoundation/heavymetalindex/commit/f4141d790) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [ba7f1e796](https://github.com/paleofoundation/heavymetalindex/commit/ba7f1e796) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
