---
type: source
raw_handle: AUTO_auto-mineral-water-ias-product-2018-10-3389-feart-2018-00111
cite_key: dinwiddie2018-orange-county-groundwater-arsenic
title: "Examining the Geologic Link of Arsenic Contamination in Groundwater in Orange County, North Carolina"
authors: ["Ethan Dinwiddie", "Xiao-Ming Liu"]
year: 2018
publication: "Frontiers in Earth Science"
doi: "10.3389/feart.2018.00111"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-mineral-water-ias-product_2018_10-3389-feart-2018-00111.pdf"
metals: [tAs]
ingredients: []
products: []
matrices: [groundwater, private-wells, bedrock, source-attribution]
jurisdictions: [US]
near_duplicates: []
sample_n: 1335
sample_population: "Orange County, North Carolina private-well arsenic dataset with 1,335 geolocated arsenic analyses, 769 matched water-quality records, 26 collected bedrock samples, and 49 supplementary NCGS whole-rock analyses."
updated: 2026-06-10
---

# Dinwiddie and Liu 2018 - Orange County groundwater arsenic

Dinwiddie and Liu investigated geologic controls on arsenic in private-well groundwater in Orange County, North Carolina. This is upstream groundwater and source-attribution evidence: it does not measure bottled or mineral-water products, but it links private-well arsenic detections to bedrock units, pH, alkalinity, fluoride, and likely oxidation of arsenic-bearing sulfide minerals.

## Key numbers

The study used an Orange County dataset containing 1,335 arsenic concentration analyses of private wells geolocated to tax-parcel centroids. A second dataset contained 769 Orange County samples with location, arsenic concentrations, and additional water-quality variables after matching to the statewide well database. The paper states that arsenic concentrations in the groundwater datasets were in mg/L, values below the 0.001 mg/L detection limit were marked `<0.001`, and the authors converted concentrations to ug/L (ppb) for examination.

The introduction states that the World Health Organization adopted a drinking-water arsenic guideline of 10 ug/L in 1993 and that the United States EPA drinking-water standard is 10 ug/L. The authors note that the EPA standard is not enforced for private wells in the United States.

The results text reports that most wells had arsenic concentrations below detection limit (<1 ug/L), and that most wells with detectable arsenic resided in Neoproterozoic epiclastics or in other Carolina Terrane geologic units. The discussion states that with over 300 well samples in the Neoproterozoic epiclastics unit, the unit's average groundwater arsenic concentration was 1.25 ug/L.

Table 1 reports whole-rock As and Fe concentrations from 26 collected bedrock samples. Average As and Fe concentrations were: felsic lavas and tuffs, n=8, As 2.8 ppm and Fe 15,963 ppm; felsic plutonic, n=2, As 4.0 ppm and Fe 16,090 ppm; intermediate/mafic plutonic, n=3, As 3.5 ppm and Fe 48,797 ppm; mafic lavas and tuffs, n=3, As 4.0 ppm and Fe 62,743 ppm; Neoproterozoic epiclastics, n=5, As 3.3 ppm and Fe 19,005 ppm; and Triassic sedimentary, n=5, As 1.8 ppm and Fe 18,576 ppm.

Table 2 reports supplementary NCGS whole-rock analyses. Average As and Fe concentrations were: felsic lavas and tuffs, n=15, As 6.7 ppm and Fe 31,780 ppm; felsic plutonic, n=13, As 1.2 ppm and Fe 33,942 ppm; intermediate/mafic plutonic, n=6, As 0.17 ppm and Fe 76,200 ppm; mafic lavas and tuffs, n=13, As 11.9 ppm and Fe 76,000 ppm; and Neoproterozoic epiclastics, n=9, As 6.2 ppm and Fe 41,925 ppm.

The pluton-proximity analysis compared wells located within 500 m of pluton boundaries with wells more than 500 m away. The authors report that wells more than 500 m from pluton boundaries had a statistically greater mean arsenic concentration at the 95% confidence interval; the extracted text does not report the two group means.

The multivariate analysis began with 21 variables from 769 wells and reduced the associated group to six variables: Mg2+ (mg/L), Ca2+ (mg/L), hardness, F- (mg/L), alkalinity, and pH. Q-mode PCA found that the first two principal components explained approximately 64.8% of the variance. Mann-Whitney-Wilcoxon tests showed significant differences at the 95% confidence interval between detected-arsenic and non-detected-arsenic wells for the paired variables the authors tested.

## Methods (brief)

The authors combined North Carolina Department of Health and Human Services private-well arsenic data, statewide water-quality records, and a detailed Orange County bedrock map. They used simple kriging to map predicted arsenic concentrations, spatial analysis to compare wells within or beyond 500 m of pluton contacts, hierarchical clustering and Q-mode PCA to evaluate water-chemistry associations, and Mann-Whitney-Wilcoxon tests for non-normal variables. Bedrock samples were cleaned, crushed, powdered, acid-digested, and analyzed by ICP-MS; the reported arsenic is total elemental As, not a separated inorganic-arsenic species.

## Implications

Certification: Do not use the private-well or bedrock arsenic values as bottled-water or mineral-water occurrence data. They are geogenic groundwater-pathway and source-attribution evidence.

Courses: Useful for explaining how natural bedrock units, private-well governance, pH, alkalinity, fluoride, and sulfide-mineral oxidation can create upstream arsenic exposure without a finished-product contaminant source.

App: Context only. The paper supports regional groundwater-pathway explanations, not consumer-product contamination estimates.

## Wiki pages this source may touch

- [[supply-chain/irrigation-and-soil-amendments]]
- [[supply-chain/source-attribution-environmental-burden-apportionment]]
- [[metals/arsenic-total]]
- [[regulations/epa-arsenic-mcl]]

## Verification notes

Recovered from `skip:not-target-cell` under the 2026-06-10 inclusion-by-default rule. The old skip treated private-well groundwater geochemistry as out of scope because it was not mineral-water product occurrence; under the corrected rule it is a3 groundwater pathway and geogenic source-attribution evidence.

Numbers were checked against the extracted PDF text, especially the abstract, Data and Methods, Table 1, Table 2, pluton-proximity results, PCA results, discussion, and conclusion. The supplementary Table S5 groundwater-by-unit values were not fully present in the extracted text; only the text-reported Neoproterozoic epiclastics average of 1.25 ug/L is used here. Arsenic is tagged as `tAs` because the methods report elemental arsenic analysis and do not separate inorganic arsenic species.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [02e3d9cfb](https://github.com/paleofoundation/heavymetalindex/commit/02e3d9cfb) | 2026-06-10 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
