---
type: source
raw_handle: MFK_alarming-lead-arsenic-levels-found-in-popular-vine
cite_key: escp2021-pb-as-balsamic-vinegar-fda-letter
title: "Letter to FDA: Dangerously high levels of arsenic and lead found in many vinegar products require action by the FDA"
authors: [Corrigan ZB, Braiman J, Chittenden C]
year: 2021
publication: "Empire State Consumer Project / Food & Water Watch — FDA Citizen Petition Letter"
doi: null
no_doi_assigned: true
source_type: ngo-report
evidence_tier: B
license: "Public record — FDA submission"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf"
metals: [Pb, tAs]
ingredients: ["[[ingredients/vinegar]]", "[[ingredients/balsamic-vinegar]]"]
products: ["[[products/vinegar]]"]
matrices: [vinegar, balsamic-vinegar, balsamic-reduction, balsamic-glaze]
jurisdictions: [US]
near_duplicates: []
sample_n: 24
sample_population: "24 commercial vinegar and vinegar-reduction products purchased in Rochester NY area and online, 2021; 21 were balsamic vinegars or balsamic reductions/glazes; 3 were non-balsamic vinegars (types not specified in the letter)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-26
---

# ESCP / Food & Water Watch 2021 — FDA Letter: Pb and As in US Retail Balsamic Vinegars

## Overview

The Empire State Consumer Project (ESCP) and Food & Water Watch submitted this letter to FDA in May 2021 reporting third-party lab testing of 24 commercially available vinegar and vinegar-reduction products purchased in the United States. The letter is a citizen petition pressing FDA to establish limits and warning requirements for Pb and As in vinegar products. This is a B-tier source: the underlying test data are from a commissioned lab (methodology not fully described), the sampling is non-random and advocacy-motivated, and the document is not peer-reviewed. However, the concentration values reported are substantial and broadly consistent with peer-reviewed literature on balsamic vinegars; the filing is public FDA record and has regulatory process significance for the US condiment category.

## Key numbers

24 samples total (vinegars, reductions, glazes). 21 of 24 were balsamic or balsamic-type products. All positive-testing samples were imported from Italy, Greece, or Spain.

**Arsenic (total As — speciation not reported):**
- 11 of 24 samples contaminated with As or Pb; 7 tested positive for both
- As range in detected/positive samples: 70 to 1,040 ppb (µg/kg)
- Mean As across detected/positive samples: 287.91 ppb (the letter states "the mean levels detected"; does not state whether the mean is over the positive subset only or over all 24 samples — the surrounding language indicates the positive subset)
- Wiki arithmetic on the letter's reported concentrations (not stated in the letter itself): at a 1-tablespoon (15 mL) serving with vinegar density ≈ 1 g/mL, the mean As level of 287.91 ppb corresponds to ~4.3 µg tAs/serving, and the maximum reported level of 1,040 ppb corresponds to ~15.6 µg tAs/serving. The letter's own framing of the same numbers uses a different normalization — "with simply one serving (1 tablespoon), consumers would far exceed FDA's 10-ppb maximum contaminant level for 1 liter of bottled water" and "at the mean levels detected (287.91 ppb), consumers would come close with two tablespoons (8.51 ppb)" — restating concentration in a per-liter water-equivalence basis rather than per-serving µg intake.
- FDA MCL for bottled water: 10 ppb. The maximum balsamic As found (1,040 ppb) is 104× higher per volume.
- Note: This is total arsenic; speciation between iAs and organic As not performed. ESCP's comparison to water MCL (iAs-specific) is analytically imprecise.

**Lead (Pb):**
- Pb range in detected/positive samples: 68.6 to 127 ppb
- 10 of 21 balsamic products (47.6%) tested positive for As or Pb
- All but one of the positive samples (across either metal) were balsamics imported from Italy, Greece, or Spain; the letter does not identify the type or origin of the single non-balsamic positive
- California Prop 65 limit for Pb in balsamic vinegar: 34 ppb (corresponding to ~0.5 µg/day at a 15 mL serving). ESCP's Pb-positive samples all exceeded this threshold (range 68.6–127 ppb, i.e., 2× to 3.7× above the Prop 65 threshold).
- Context: two balsamic products previously identified as having no detectable lead or arsenic (per the 2002 Environmental Law Foundation testing referenced in the letter) registered the highest As (1,040 ppb) and Pb (106 ppb) in this 2021 testing.

**Regulatory context cited:**
- California AG database listed 24 Prop 65 warning notices for balsamic vinegar Pb as recently as 2020
- FDA Closer to Zero program announced but does not include vinegar products
- FDA Total Diet Survey does not include vinegar

## Methods

Commissioned third-party laboratory testing (specific lab not identified in the letter; results in attached spreadsheet referenced but not reproduced in the letter text). Sample prep and analytical method not described. As and Pb reported as ppb values. No LOD/LOQ stated. No certified reference material validation reported. This is the primary methodological weakness of this source: the testing was conducted for advocacy purposes without full method disclosure.

## Implications

Certification: This source contributes 2021 US-retail occurrence data for Pb and total As in balsamic vinegars, balsamic reductions, and balsamic glazes purchased in the Rochester NY area and online. The data points are at the high end of the reported magnitudes for the matrix (As to 1,040 ppb tAs; Pb to 127 ppb). Cross-source comparison with peer-reviewed regional studies (e.g., Karavoltsos 2020 on Greek vinegars) and any subcategory-level treatment for HMTc threshold work belong in the Part 9 synthesis pass on the relevant ingredient/product pages, not in this source page.

Courses: Illustrates that US regulatory frameworks contain a gap on this matrix: no FDA As or Pb limits for vinegar, no inclusion in the Total Diet Survey, and Prop 65 warnings applying only in California. The ESCP filing is an example of NGO data driving regulatory attention.

App: This source does not provide sufficient methodological detail (lab unnamed, no methods, no LOD/LOQ, no CRM validation) to anchor ppb values in the `contamination_profile` for vinegar. Its appropriate use is as corroboration that balsamic vinegars and balsamic reductions/glazes have been observed at elevated Pb and As levels in the US retail market.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
