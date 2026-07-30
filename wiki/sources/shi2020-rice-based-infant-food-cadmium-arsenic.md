---
type: source
raw_handle: AUTO_GAP-plant-milks-rice-based-Cd
cite_key: shi2020-rice-based-infant-food-cadmium-arsenic
title: "Avoiding Rice-Based Cadmium and Inorganic Arsenic in Infant Diets Through Selection of Products Low in Concentration of These Contaminants"
authors: [Shi Z, Carey M, Davidson E, Meharg C, Meharg AA]
year: 2020
publication: "Exposure and Health 13:229-235"
doi: 10.1007/s12403-020-00376-3
access_url: "https://link.springer.com/content/pdf/10.1007/s12403-020-00376-3.pdf"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-plant-milks-rice-based-cd_2020_10-1007-s12403-020-00376-3.pdf"
sha256: aca16bad52a4ba7ca9f4be067fee9df82c8579b313cd7557aacaf7bf3f598c7c
metals: [Cd, iAs]
ingredients: ["[[ingredients/rice]]", "[[ingredients/infant-rice-cereal]]"]
products: ["[[products/infant-rice-cereal]]", "[[products/teething-and-snacks-rice-based]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/rice-snacks-crackers]]"]
matrices: [rice-based-infant-food, rice-cereal, rice-porridge, rice-cake, rice-grain]
jurisdictions: [UK, EU]
sample_n: "Rice-based baby foods, generic rice crackers/cakes/cereals, and UK-purchased polished rice by origin; exact per-category n is figure/table dependent."
sample_population: "Rice-based products available on the UK market, including products labeled for infants and generic rice products that infants may eat; polished rice grain purchased in Northern Ireland from supermarkets, health-food shops, specialty shops, and Halal shops."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Shi et al. 2020 - Rice-Based Infant Foods, Cadmium, and Inorganic Arsenic

Shi et al. measured cadmium and inorganic arsenic in rice-based foods marketed for infants, generic rice products that infants may eat, and UK-purchased polished rice grain by country of origin. The central finding is that rice-based products labeled for infants complied with the authors' EU-threshold comparisons, while some generic rice crackers, rice cakes, puffed rice cereals, and rice grains exceeded cadmium or inorganic-arsenic thresholds relevant to infant diets.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Infant-food Cd comparison | All infant foods were below the EU processed-infant-food cadmium standard of 40 ug/kg wet weight, converted by the authors to about 44.8 ug/kg dry weight |
| Infant-food iAs comparison | All infant foods were below the authors' proxy inorganic-arsenic standard of about 112 ug/kg dry weight, corresponding to 100 ug/kg wet weight |
| Infant mixed cereal cakes | Highest infant-food median Cd: 12.8 ug/kg dry weight |
| Infant mixed grain porridge | Lowest infant-food median Cd: 5.1 ug/kg dry weight |
| Non-infant Cd exceedances | 6 of 44 generic/non-infant rice-based samples exceeded about 44.8 ug/kg dry-weight Cd; exceedances ranged from 46.0 to 66.2 ug/kg dry weight |
| Non-infant iAs exceedances | Some generic products exceeded the proxy iAs standard; pure rice cakes and pure rice cereals had medians above about 112 ug/kg dry weight |
| Infant-food medians for iAs by sub-category | Mixed grain infant cereals 7.8 ug/kg dry weight; infant porridges 11.9; infant mixed cake 60.6; infant pure porridge 65.9; infant pure cake 74.4; all below the ~112 ug/kg dry-weight proxy threshold (P < 0.0001 within infant products) |
| Polished rice Cd by origin | Basmati median 33.4 ug/kg dry weight; Italian median 40.1 with maximum 117; Egyptian and Spanish medians at half-LOD 4.9; USA about double half-LOD with n=3 |
| Polished rice iAs by origin | Italian median 106 ug/kg dry weight, 75th percentile 126, maximum 244; basmati 28.9 and Egyptian 30.2 had the lowest medians |

The authors note that rice milk tends to be elevated in inorganic arsenic and cite UK Food Standards Agency advice that rice milk cartons warn against infant consumption. This paper itself is strongest for infant rice foods and generic rice products; it is rice-milk context rather than a rice-milk concentration survey.

## Methods (brief)

Rice-based baby foods, crackers, cereals, rice grain, and related products were purchased from UK retail settings. Samples were powdered before analysis. Cadmium was measured by ICP-MS after nitric-acid digestion; the cadmium LOD was 0.5 ug/kg dry weight for infant foods and 9.8 ug/kg dry weight for rice grain. Inorganic arsenic was extracted with dilute nitric acid and measured by ion chromatography coupled to ICP-MS, monitoring m/z 75 in collision-cell mode. NIST rice flour CRM recovery was reported for cadmium and inorganic arsenic.

## Implications

For infant rice cereal and rice-based baby-food rows, this is direct product occurrence evidence for cadmium and inorganic arsenic in the UK/EU context. It supports a clear row-fit distinction between foods specifically labeled for infants and generic rice products that may nonetheless be fed to infants. It also supports rice-sourcing and product-form controls: Egyptian rice was low in both cadmium and inorganic arsenic in this study, while Italian rice was problematic for both.

For plant-milk pages, the source is context only. It discusses rice milk and UK warning advice but does not report a new rice-milk concentration dataset in the article body.

## Wiki pages this source may touch

- [[products/infant-rice-cereal]]
- [[products/baby-cereals-dry-rice-based]]
- [[products/teething-and-snacks-rice-based]]
- [[products/rice-snacks-crackers]]
- [[ingredients/rice]]
- [[ingredients/infant-rice-cereal]]
- [[metals/cadmium]]
- [[metals/arsenic]]

## Verification notes

- Batch 1 auto-fetched ingest, 2026-05-25. The wishlist filename targeted rice-based plant milks, but the actual paper's direct measurements are rice-based infant foods, generic rice products, and polished rice. Rice milk is discussed as regulatory/advice context only.
- Basis: values are primarily reported as dry-weight concentrations. The paper provides wet-weight regulatory standards and converts them to approximate dry-weight thresholds using a 1.12 factor for rice moisture. Do not pool dry-weight values with wet-weight infant food values without conversion.
- Speciation: arsenic values are inorganic arsenic by IC-ICP-MS, not total arsenic.
- Audit 2026-06-08 (autonomous): corrected a numerical fidelity error in the Key numbers table — the row formerly labeled "Non-infant product medians for Cd" listed values (7.8, 11.9, 60.6, 65.9, 74.4 µg/kg d.wt.) that the source (p231-232) reports as INFANT-food medians for INORGANIC ARSENIC, not non-infant Cd medians. Row re-labeled accordingly. Also dropped `products/plant-milks-rice-based` from the products array and `rice-milk-context` from matrices: the paper discusses rice-milk advisory context (citing Meharg 2008a,b and FSA 2018) but reports no new rice-milk concentration data, so routing it as direct evidence would misrepresent the source.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [e5daa6def](https://github.com/paleofoundation/heavymetalindex/commit/e5daa6def) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [d1c9a1e86](https://github.com/paleofoundation/heavymetalindex/commit/d1c9a1e86) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
