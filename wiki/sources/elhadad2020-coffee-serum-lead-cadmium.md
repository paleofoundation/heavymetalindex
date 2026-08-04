---
type: source
raw_handle: AUTO_gap-coffee-cd_2021_10-3390-nu12051470
cite_key: elhadad2020-coffee-serum-lead-cadmium
title: "Metabolites, Nutrients, and Lifestyle Factors in Relation to Coffee Consumption: An Environment-Wide Association Study"
authors: [Elhadad MA, Karavasiloglou N, Wulaningsih W, Tsilidis KK, Tzoulaki I, Patel CJ, Rohrmann S]
year: 2020
publication: "Nutrients"
doi: "10.3390/nu12051470"
access_url: "https://doi.org/10.3390/nu12051470"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-cd_2021_10-3390-nu12051470.pdf
metals: [Pb, Cd]
ingredients: []
products: []
matrices: [serum, urine, dietary-intake]
jurisdictions: [US]
near_duplicates: []
sample_n: 17752
sample_population: "Adults at least 18 years old in NHANES III after exclusion of participants with zero survey weights; phase 1 discovery set n = 8,825 and phase 2 replication set n = 8,927."
updated: 2026-06-11
---

# Elhadad et al. 2020 - Coffee consumption, serum lead, and urinary cadmium in NHANES III

## Overview

Elhadad and colleagues used an environment-wide association study design to test 245 metabolites, nutrients, and lifestyle factors against regular coffee and caffeinated-beverage consumption in NHANES III. This is lane a4 exposure and biomonitoring evidence, not a coffee occurrence paper. The replicated biomarker associations included positive associations between regular coffee consumption and serum lead concentration, and between regular coffee consumption and urinary cadmium.

## Key numbers

- Study population: 17,752 NHANES III adults after zero-weight exclusions.
- Discovery/replication structure: phase 1 discovery set `n = 8825`; phase 2 replication set `n = 8927`.
- Factors screened: 245 metabolites, nutrients, and lifestyle factors.
- Daily coffee consumption in Table 1: 4,111 of 8,292 male participants consumed at least one cup/day, with mean consumption `72.4 cups per month`; 4,766 of 9,460 female participants consumed at least one cup/day, with mean consumption `62.0 cups per month`.
- Table 2 replicated association for serum lead concentration: `No. 7866`, coefficient `8.25`, SE `1.71`, p-value `4.23 × 10−4`.
- Table 2 replicated association for urinary cadmium: `No. 7783`, coefficient `4.04`, SE `1.52`, p-value `2.11 × 10−2`.
- Table 3 caffeinated-beverage association for serum lead concentration: coefficient `8.09`, SE `1.92`, p-value `1.20 × 10−3`.
- Table 3 caffeinated-beverage association for urinary cadmium: coefficient `4.99`, SE `1.15`, p-value `9.66 × 10−4`.
- Table 3 soft-drink columns show no coefficient for serum lead concentration or urinary cadmium, meaning those coffee-replicated factors failed replication for soft-drink consumption under the table's dash convention.
- Abstract summary: regular coffee consumption was positively associated with active and passive smoking, serum lead and urinary cadmium concentrations, dietary potassium and magnesium intake, and aspirin intake.
- Discussion interpretation: the authors state that the positive association between regular coffee consumption and serum lead or urinary cadmium concentrations "potentially reflects coffee contamination with heavy metals," but the paper does not measure metals in coffee.

## Methods (brief)

The study used NHANES III, a US cross-sectional survey with multistage stratified, clustered probability sampling. Regular coffee, tea, and soda consumption were assessed by food-frequency questionnaire in times per month; non-caffeinated coffee, tea, and soda were infrequent, so the analysis focused on caffeinated beverages. The authors screened 245 factors using phase 1 NHANES III, applied survey-weighted linear regression and Benjamini-Hochberg FDR control, and then tested replication in phase 2. Continuous factors were Z-score standardized. The extracted text does not print laboratory methods for serum lead or urinary cadmium measurement, only the NHANES III biomarker variables and association models.

## Implications

Certification: This paper should not enter a coffee occurrence pool because it does not measure Pb or Cd in coffee products. It contributes exposure-context evidence: in NHANES III, coffee/caffeinated-beverage intake co-varied with serum lead and urinary cadmium biomarkers after EWAS screening and replication.

Courses: Useful for teaching why biomarker association studies should be preserved without being mis-routed as product measurements. It is also a cautionary example that smoking and other correlated lifestyle factors travel with coffee consumption in observational exposure data.

App: Supports exposure-context notes for lead and cadmium. It does not update the `coffee` product page as a concentration source.

Microbiome: No microbiome endpoints.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

- Recovered under the 2026-06-10 inclusion-by-default rule, lane a4 exposure and health effect. Prior skip was `skip:no-occurrence-data` because the paper had no product concentration measurements.
- DOI, title, authors, journal, license, NHANES III sample size, discovery/replication phase sizes, coffee-consumption counts, Table 2 lead/cadmium coefficients, Table 3 caffeinated-beverage coefficients, soft-drink dash convention, and methods description were checked against the extracted PDF text on 2026-06-11.
- Units are preserved where the source prints them: serum lead concentration is labelled `ug/dL`; urinary cadmium is labelled `ng/mL`. The regression coefficients are reported as source-model coefficients, not as biomarker concentration means.
- Speciation: serum lead is Pb; urinary cadmium is Cd. No arsenic, mercury, or chromium species are part of the heavy-metal result used here.
- Products and ingredients are intentionally empty because this is an exposure/biomarker association paper, not coffee occurrence evidence.
- The source's discussion offers coffee contamination as one possible interpretation; the wiki page does not promote that sentence into a product-concentration claim.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
<!-- END: hmi-page-history -->
