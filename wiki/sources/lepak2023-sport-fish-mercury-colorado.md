---
type: source
raw_handle: FM_10443864
cite_key: lepak2023-sport-fish-mercury-colorado
title: "Predicting sport fish mercury contamination in heavily managed reservoirs: Implications for human and ecological health"
authors: [Lepak JM, Johnson BM, Hooten MB, Wolff BA, Hansen AG]
year: 2023
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0285890
access_url: https://doi.org/10.1371/journal.pone.0285890
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/markdown/FM_10443864/FM_10443864.md
metals: [tHg]
ingredients: ["[[ingredients/freshwater-fish]]", "[[ingredients/fish]]"]
products: []
matrices: [fish-muscle]
jurisdictions: [US]
near_duplicates: []
sample_n: 864
sample_population: "Northern pike (Esox lucius), smallmouth bass (Micropterus dolomieu), and walleye (Sander vitreus) from 32 Colorado reservoirs; Hg data 2004-2013 (Colorado DPHE)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-13
---

# Lepak et al. 2023 — tHg in sport fish from Colorado reservoirs

## Overview

This study used a random forest machine learning approach to identify predictors of mercury (Hg) concentrations in three sport fish species across 32 Colorado reservoirs, using 864 individual and composite muscle tissue measurements collected by the Colorado Department of Public Health and Environment from 2004 to 2013. The primary purpose is predictive modelling for fisheries management and fish consumption advisories, but the study contains a comprehensive database of empirical Hg concentrations in US sport fish relevant to food-chain exposure assessment.

## Key numbers

All values are Hg concentrations (ppb = ng/g wet weight) in fish muscle, estimated at standard harvest lengths (864 mm northern pike; 381 mm smallmouth bass and walleye) via linear regression from measured data. Range across reservoirs and species (from Table 1):

**Northern pike (Esox lucius):** Observed ranges by reservoir: Crawford 198-330 ppb, Elkhead 20-396 ppb, Martin 30-152 ppb, McPhee 440 ppb, Narraguinnep 1290 ppb (highest reported), Rifle Gap 260-440 ppb, Sanchez 764 ppb, Vallecito 496-846 ppb. Many reservoirs with northern pike show concentrations well above the US FDA action level of 1000 ppb (1 ppm) for human consumption.

**Smallmouth bass (Micropterus dolomieu):** Elkhead 660-886 ppb, Horseshoe 420-693 ppb, McPhee 618-816 ppb, Rifle Gap 585-790 ppb.

**Walleye (Sander vitreus):** Barr 132-298 ppb, Boyd 70-155 ppb, Brush Hollow 301-844 ppb, Carter 299-425 ppb, Horsetooth 557-1102 ppb (above 1000 ppb FDA action level), Narraguinnep 340-522 ppb, Sanchez 124-1006 ppb.

Detection limits varied across years (0.01-0.3 ppm); 26 censored values (<0.5% of data) were assigned half the detection limit value.

Best predictors in the random forest model: for northern pike, salmonid stocking (food web dilution mechanism); for smallmouth bass and walleye, system-specific productivity and forage base metrics.

## Methods (brief)

Empirical Hg data from Colorado DPHE (2004-2013); n=864 individual and composite muscle samples. Linear regression to estimate Hg at standard harvest lengths. Random forest (RF) machine learning to identify covariates predicting Hg across 32 reservoirs. Censored values below detection limit assigned as half the detection limit. All values are total Hg (tHg) in muscle tissue, wet weight. Composite samples represented as mean length and measured Hg concentration.

## Implications

Certification: Multiple Colorado reservoir sport fish species, particularly northern pike and walleye, show tHg concentrations at or above the FDA 1000 ppb action level; directly relevant to freshwater fish consumption advisories and HMT&C scope for sport fish categories.
Courses: Demonstrates the role of food web structure (salmonid stocking, forage base) as a primary driver of Hg bioaccumulation in freshwater sport fish; supports mechanistic understanding of MeHg biomagnification.
App: Geographic risk differentiation for freshwater sport fish by reservoir, species, and trophic position; supports flagging of high-Hg freshwater fish species in ingredient risk scoring.

## Wiki pages updated on ingest

- [[ingredients/freshwater-fish]]
- [[metals/mercury]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [e6a6159d1](https://github.com/paleofoundation/heavymetalindex/commit/e6a6159d1) | 2026-05-13 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
