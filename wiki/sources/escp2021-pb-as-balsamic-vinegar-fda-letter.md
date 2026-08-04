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

## Verification notes

Page was originally drafted under the legacy `manual-fetch-kimi` handle (last `updated: 2026-05-14`). Merge-enhanced on 2026-05-26 against the source PDF to:

- Replace legacy `raw_handle: manual-fetch-kimi` with the canonical MFK handle `MFK_alarming-lead-arsenic-levels-found-in-popular-vine`.
- Correct `raw_path` to the actual filename and folder path (the prior path was truncated and missing the trailing space in `Manual Fetch Kimi `).
- Remove `wine-vinegar` from `matrices`: the letter identifies 21 of 24 samples as balsamic vinegars or balsamic reductions/glazes and the remaining 3 samples only as "vinegars" of unspecified type; "wine vinegar" is not named in the letter and was an unsupported inference. Added the broader `vinegar` matrix slug to capture the overall scope.
- Soften the Lead key-numbers bullet that previously stated "All Pb-positive samples were balsamics" — the letter only states that "all but one of the vinegar or reduction samples testing positive for either arsenic or lead were balsamics" and does not break the one non-balsamic positive out by metal.
- Clarify in the Arsenic key-numbers bullet that the 287.91 ppb mean is described in the letter as "the mean levels detected"; the page interprets this as the mean of the positive subset (consistent with the surrounding language) and labels it as such rather than as a sample-wide mean.
- Replace the legacy `## Wiki pages updated on ingest` heading (which listed downstream targets, including a stale `products/condiments` link to a page that does not exist) with this verification-notes block, matching the current source-page convention. Downstream routing is system-generated from frontmatter and is not maintained by hand inside source pages.
- Update `sample_population` to record that 3 of 24 samples were non-balsamic vinegars of unspecified type.

No content changes were made to the methods discussion or evidence-tier assignment. The B-tier classification is retained per `docs/conventions` evidence-grading rule (NGO reports without full method disclosure are B-tier; C-tier is reserved for news/blogs/press releases).

Auto-audit subagent (2026-05-26) verdict REVISE; 4 findings total. Three applied:

1. Audit flagged the µg/serving As intake numbers (~4.3 µg/serving at the mean, ~15.6 µg/serving at the maximum) as wiki-derived arithmetic not present in the letter — verified against pages 2–3 of the PDF, which give only a per-liter water-equivalence restatement ("two tablespoons (8.51 ppb)") rather than a µg/serving figure. Corrected by relabeling the bullet as "Wiki arithmetic on the letter's reported concentrations" and quoting the letter's own framing alongside, so a reader can see which numbers are source-reported and which are wiki computations.
2. Audit flagged the Implications-section statement "HMT&C should treat balsamic reductions/glazes as a distinct higher-risk subcategory from standard balsamic vinegar" as crossing the wiki/HMTc firewall (Part 2) — verified as a directive recommendation rather than occurrence reporting. Reframed to "this source contributes occurrence data; any subcategory-level treatment for HMTc threshold work belongs in the Part 9 synthesis pass."
3. Audit flagged the cross-literature comparison with Karavoltsos 2020 (max As 26 ppb in Greek balsamics) as synthesis-style work that belongs on the ingredient/product page rather than on the source page — agreed; the comparison was removed from this source page and is left for the synthesis pass to perform.

One finding documented but not applied:

- Audit noted that `balsamic-reduction` and `balsamic-glaze` are not in the snapshot of valid ingredient/product slugs. These are matrix descriptors, not ingredient or product slugs, and the matrices field is descriptive rather than routed against a controlled vocabulary; the routing audit accepts both slugs (the source is not in `routing_unresolved.csv` or `routing_malformed.csv`). The slugs are retained because they accurately describe the source's sampled population (the letter explicitly enumerates "vinegars or vinegar reductions or glazes" and identifies balsamic reductions/glazes as the highest-magnitude positives).

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
