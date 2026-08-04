---
type: source
raw_handle: MFK_p0154-arsenic-and-fish-consumption-epa-report
cite_key: epa1997-arsenic-fish-shellfish
title: "Arsenic and Fish Consumption"
authors: [US EPA Office of Science and Technology, Health and Ecological Criteria Division]
year: 1997
publication: "US EPA Office of Water"
doi: null
no_doi_assigned: true
access_url: "https://www.epa.gov/sites/default/files/2015-08/documents/arsenic-fish-consumption.pdf"
source_type: government-report
evidence_tier: A
license: "US Government Work (public domain)"
raw_path: "raw/Manual Fetch Kimi /04_Meat_Poultry_Seafood/04_Meat_Poultry_Seafood/P0154_Arsenic and Fish Consumption (EPA Report).pdf"
raw_sha256: "f5d4fb4314a7a93a8d19e5ab3f159cd269b8d346a33575a77d0db25d3695e3a7"
report_number: EPA-822-R-97-003
metals: [iAs, tAs]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]", "[[ingredients/shellfish]]", "[[ingredients/freshwater-fish]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]"]
matrices: [fish, shellfish, dietary-intake, drinking-water]
jurisdictions: [US]
sample_n: null
sample_population: "Literature review of fish and shellfish arsenic data; exposure scenarios derived from USDA Continuing Survey of Food Intake 1989–1991"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
---

# EPA 1997 — Arsenic and Fish Consumption (EPA-822-R-97-003)

## Overview

This December 1997 report from EPA's Office of Science and Technology summarizes available data on arsenic concentrations and speciation in fish and shellfish, then uses that data alongside USDA dietary intake survey records to estimate inorganic arsenic (iAs) exposure across six fish-consumption scenarios. The report was produced to address whether the then-current MCL of 50 ppb for arsenic in drinking water could also serve as an Ambient Water Quality Criterion under the Clean Water Act and to determine whether fish and shellfish consumption from the same waters adds materially to iAs exposure. The central finding is that more than 95% of arsenic in marine fish and shellfish is present as organic species (primarily arsenobetaine), a compound that is metabolically inert in mammals and rapidly excreted, so that dietary iAs exposure from fish and shellfish is low relative to drinking water exposure for most population groups.

The drinking-water MCL discussed in the report is historical: EPA later lowered the federal arsenic MCL from 50 ppb to 10 ppb under [[regulations/epa-arsenic-mcl]]. The report remains useful for seafood speciation and exposure-scenario logic, but its 50 ppb water scenario should be treated as a 1997 policy context rather than the current US public-water standard.

## Key numbers

**Total arsenic in marine finfish (literature compiled by Chew 1996, Ballin 1994, Lawrence 1986):**
- Range across species: less than 1 to 64 ppm (wet weight); most species 0.6–37 ppm
- Two outliers: skate (64 ppm), stingray (17 ppm), both with near-zero inorganic fraction
- Anchovy, tuna, sardines, hake, sole from commercial sources (Lopez 1994): 0.82–7.76 ppm tAs

**Total arsenic in shellfish:**
- Chew 1996 dataset: average 0.2–126 ppm (mollusks highly variable, 1–126 ppm across 20 samples)
- Ballin 1994: 2.6–21 ppm across four species; highest in lobster
- Lawrence 1986: lobster 5.2 ppm, shrimp 20.8 ppm, scallop 0.68 ppm

**Freshwater finfish (much lower):**
- Ballin 1994 (Germany rivers/hatchery): detection limit to 1.5 ppm tAs
- Lawrence 1986 (Ontario/Alberta): 0.007–0.24 ppm tAs
- Combined across the Ballin 1994 and Lawrence 1986 freshwater-fish samples, 22 of 23 samples were below 0.3 ppm tAs.

**Inorganic arsenic fraction:**
- Marine fish: less than 4% iAs in all but three species (shark 9.5%, sturgeon 6.9%, sucker 8.5% per Chew 1996); 23 of 42 fish samples had iAs below detection
- Shellfish: less than 3% iAs in all but one case per Chew 1996; 18 of 50 shellfish samples below detection
- Arsenobetaine accounts for 96–100% of tAs in marine finfish (Ballin 1994); arsenocholine estimated at less than 1% of tAs

**Bioconcentration:** EPA BCF for arsenic in mixed fish/shellfish diet = 44; shellfish-specific BCF (oyster) = 350, freshwater fish BCF = 4. From 50 ppb arsenic water: estimated tAs in edible tissue = 2.2 ppm; estimated iAs (at 4% maximum fraction) = 0.09 ppm; at median 0.4% fraction = 0.01 ppm.

**iAs exposure scenarios (Table 2, USDA 1989–1991 dietary intake data):**
- High fish/high arsenic (99.9th percentile consumer, max 4% iAs, 461 g/day): 41 µg iAs/day
- High fish/average arsenic (99.9th percentile, 0.4% median iAs, 461 g/day): 4 µg iAs/day
- Average fish/high arsenic (50th percentile, 4% iAs, 42 g/day): 4 µg iAs/day
- Average fish/average arsenic (50th percentile, 0.4%, 42 g/day): 0.4 µg iAs/day
- High fish with shellfish preference (99.9th percentile fish/125 g/day shellfish, 4% iAs): 90 µg iAs/day
- General population (6.5 g/day normalized, high arsenic): 0.6 µg iAs/day

**Combined iAs exposure (fish/shellfish + drinking water at 20 ppb high/5 ppb average, 2 L/day):**
- General population (fish + 5 ppb water): ~11 µg iAs/day
- General population (fish + 20 ppb water): ~41 µg iAs/day
- High shellfish preference (fish/shellfish + 20 ppb water): ~130 µg iAs/day

## Methods (brief)

Literature review of published arsenic speciation data for fish and shellfish (Ballin 1994, Chew 1996, Lawrence 1986, Lopez 1994 as primary data sources). Exposure scenarios derived from USDA Continuing Survey of Food Intake 1989–1991 for fish-consuming subpopulations and general population (6.5 g/day normalized). Inorganic arsenic fractions applied from Chew 1996 and other speciation studies. Arsenic in edible tissue estimated from EPA bioconcentration factors against ambient water at 50 ppb. No original analytical measurements were conducted; this is an exposure assessment compiling existing data. Key limitation: BCF derived from laboratory inorganic arsenic spikes, not natural trophic cycling; may underestimate marine species accumulation.

## Implications

**Certification:** The report contributes source-side evidence for distinguishing total arsenic from inorganic arsenic in seafood. EPA reviewed evidence that most marine fish arsenic was present as organic arsenic species, especially arsenobetaine, and modeled iAs exposure separately from tAs occurrence. It also notes that freshwater fish had lower total arsenic in the reviewed datasets and a different, unidentified organic arsenic compound.

**Courses:** Illustrates why speciation matters: high total-arsenic values in marine fish and shellfish can reflect predominantly organic arsenic rather than inorganic arsenic. The report's Chew 1996 compilation found that all fish species other than shark, sturgeon, and sucker had less than 4% of total arsenic as inorganic arsenic; Ballin 1994 separately found arsenobetaine accounted for 96–100% of total arsenic in marine fish.

**App:** The report provides EPA exposure-scenario inputs rather than product-level measurements: a 4% maximum iAs fraction, 0.4% median iAs fraction, 461 g/day high fish/shellfish consumption value, and 6.5 g/day general-population normalized intake. These values are EPA's 1997 assumptions, not general conversion rules.

**Regulations:** The Ambient Water Quality Criterion context is US-specific (CWA 0.018 ppb vs MCL 50 ppb at time of writing). The report predates EPA's 2001 MCL revision to 10 ppb, so the 50 ppb water-arsenic scenarios are historically high for most current US public water systems.

## Wiki pages this source may touch

- [[ingredients/fish]]
- [[ingredients/seafood]]
- [[ingredients/shellfish]]
- [[ingredients/freshwater-fish]]
- [[products/seafood]]
- [[metals/arsenic]]
- [[metals/arsenic-total]]
- [[metals/arsenic-inorganic]]
- [[regulations/epa-arsenic-mcl]]

## Verification notes

- 2026-05-18 Codex merge-enhance: matched existing EPA-822-R-97-003 page to P0154, corrected `raw_handle` and raw path spacing, added SHA-256 provenance, added the broad `products/seafood` route, and replaced narrow matrix strings with broad `fish`, `shellfish`, `dietary-intake`, and `drinking-water` terms.
- The source report's 50 ppb arsenic MCL references the pre-2001 US drinking-water standard; the current EPA arsenic MCL is 10 ppb.
- Fresh-context audit (Codex, 2026-05-18) flagged QUARANTINE-level Part 2 wording in the prior implications section; corrected by removing HMT&C/app directives, fixing the freshwater 22-of-23 attribution to the combined Ballin/Lawrence dataset, and softening the Ballin catfish iAs inference to source-supported speciation context.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
