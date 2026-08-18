---
type: source
raw_handle: FM_10244267
cite_key: suomi2023-finland-dietary-metals-cumulative
title: "Cumulative risk assessment of the dietary heavy metal and aluminum exposure of Finnish adults"
authors: [Suomi J, Tuominen P]
year: 2023
publication: "Environmental Science and Pollution Research"
doi: 10.1007/s11356-023-27879-x
access_url: https://doi.org/10.1007/s11356-023-27879-x
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10244267/FM_10244267.md
metals: [Cd, Pb, iAs, MeHg, Ni, Al]
ingredients: ["[[ingredients/wheat]]", "[[ingredients/cereals]]", "[[ingredients/vegetables]]", "[[ingredients/coffee]]", "[[ingredients/fish]]"]
products: ["[[products/fresh-fish]]"]
matrices: [dietary-intake, bread, cereals, vegetables, fish, non-alcoholic-beverages]
jurisdictions: [FI, EU]
near_duplicates: []
sample_n: 1295
sample_population: "Finnish adults aged 25–74 years from FinDiet 2012 national dietary survey (48-h recall; 5 geographic areas)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Suomi & Tuominen 2023 — Cumulative dietary heavy metal and aluminum exposure of Finnish adults

## Overview

This Finnish Food Authority paper is the first cumulative dietary risk assessment for a mixture of Cd, Pb, iAs, MeHg, Ni, and Al among Finnish adults, combining national occurrence monitoring data with individual-level consumption data from the FinDiet 2012 national survey (n=1295, ages 25–74). Using relative potency factors referenced to Pb neurotoxicity as the index compound, the authors calculate cumulative hazard indices (HI) for three endpoints: neurotoxicity, kidney tubular effects, and fertility effects. Critically, HI exceeds 1 (non-negligible risk threshold) for the average consumer in all age groups for both neurotoxicity and kidney toxicity. Women aged 25–45 years have statistically significantly higher cumulative exposure than men of the same age (P<0.05) and older women (P<0.001). More than 95% of women below age 45 have HI>1 for neurotoxicity. The main dietary sources of cumulative exposure for adults aged 25–64 are bread and other cereal products, non-alcoholic beverages (coffee, tea, soft drinks, plant-based milk alternatives), and vegetables.

## Key numbers

FinDiet 2012 survey characteristics: n=1295 adults aged 25–64 (265 males and 356 females aged 25–45; 413 people aged 65–74); 48-h dietary recall; 5 geographic areas of Finland.

Occurrence data: primarily national monitoring data supplemented by Finnish industry self-monitoring data and EFSA EU-level data. Lower bound (LB) estimate used throughout (non-detects set to zero). National Al monitoring data were scarce; Al estimates rely more on literature values.

Speciation assumptions: iAs modelled as percentage of total As (rice: speciation measured; other foods: 2% in fish, 3.5% in crustaceans/mollusks, 100% in water, 70% in other foods). MeHg modelled from total Hg (100% in fish; 80% in crustaceans and mollusks). These are conservative assumptions per EFSA conventions.

Relative potency factors (RPF) for neurotoxicity pilot assessment (Table 2, 6-chemical mixture): Pb=1.0 (HBGV 0.05 µg/kg bw/d); MeHg=0.27 (HBGV 0.19); iAs=0.017 (HBGV 3); Cd=0.025 (HBGV 2); Ni=0.0018 (HBGV 27.8); Al=0.0005 (HBGV 100).

Main dietary sources of cumulative exposure (adults 25–64): cereal products (including wheat, rye, oats, barley, bread) dominate for neurotoxicity and kidney endpoints; for fertility effects in the youngest age group, non-alcoholic drinks (coffee, tea, soft drinks, plant-based alternatives) slightly exceed cereals. Vegetables are the third major contributor.

Hazard index by endpoint: for average consumer, HI for neurotoxicity and kidney toxicity exceeds 1 in all age groups; highest in women aged 25–34. >95% of women below age 45 have HI>1 for neurotoxicity. Gender difference is statistically significant for ages 25–45 (women > men, P<0.05) and persists to age 64 for the 46–64 cohort versus 25–45 women (P<0.001).

Metals by endpoint grouping (Chemical Mixture Calculator DTD values, Table 1):
- Neurotoxicity (cognition): Al (DTD 100 µg/kg bw/d, RPF 0.0005), Pb (DTD 0.05, RPF 1.0), MeHg (DTD 0.19, RPF 0.26)
- Kidney: Cd (DTD 0.36, RPF 0.17), Pb (DTD 0.06, RPF 1.0), iHg (DTD 0.6, RPF 0.1), Ni (DTD 330, RPF 0.00018)
- Fertility: Al (DTD 270, RPF 0.0015), Pb (DTD 0.4, RPF 1.0), iHg (DTD 1.2, RPF 0.33), MeHg (DTD 5.0, RPF 0.08)

## Methods (brief)

Cumulative exposure modelled using dose-addition (RPF method) with MCRA online software (beta-binomial normal model, log transformation, 100,000 Monte Carlo simulations, 10,000 bootstrap iterations). Individual-level exposure from Suomi et al. 2020/2021 single-chemical assessments combined by pseudonymized ID code. HI calculated as sum of (Exposure_i / DTD_i). Chemical Mixture Calculator v2021 (Technical University of Denmark) provided DTD reference values for neurotoxicity, kidney, and fertility endpoints. Pilot neurotoxicity assessment with 6 chemicals used investigator-derived HBGV values where common toxicological endpoint data were available.

Limitation: iAs speciation only directly measured for rice; all other food matrices use assumed proportions. Al monitoring data sparse. LB approach likely underestimates true exposure. Synergistic or antagonistic interactions between metals not modelled (dose addition assumed). The neurotoxic endpoint grouping (combining CNS and peripheral neuropathy endpoints) involves higher uncertainty than endpoints with matched data.

## Implications

Certification: This is one of the most comprehensive cumulative dietary metal exposure assessments available for a European population. The finding that HI>1 for average consumers at current background dietary exposures — driven primarily by cereals, coffee/tea, and vegetables rather than high-risk foods — contextualizes HMT&C threshold-setting. Reducing exposure in individual certified product categories contributes to cumulative burden reduction even when single-food HQ calculations appear reassuring.

Courses: Strong teaching case for cumulative risk framing. Illustrates that single-chemical PTWI/TWI compliance does not guarantee mixture safety. Gender and age interaction for fertile-age women is a key policy communication point.

App: Supports exposure weighting toward Pb-equivalents for cumulative risk scoring. Cereals/bread and beverages being dominant sources (rather than meat or seafood) confirms that grain-heavy and plant-based diets still carry meaningful metal burden through ingredient volume, not just concentration.

Microbiome (if applicable): Chronic low-level dietary Pb, Cd, and iAs exposure in the Finnish adult population at exposure levels modelled here aligns with the microbiome disruption literature on gut barrier and taxa shifts at comparable chronic dietary exposure levels.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/aluminum]]
- [[metals/arsenic]]
- [[metals/mercury]]
- [[metals/nickel]]
- [[ingredients/bread]]
- [[ingredients/cereals]]
- [[ingredients/vegetables]]
- [[regulations/efsa-mehg-twi]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [98dd9c826](https://github.com/paleofoundation/heavymetalindex/commit/98dd9c826) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
