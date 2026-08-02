---
type: source
raw_handle: MFK_aluminum-in-food-qa-sources-safety-and-regulations
cite_key: efsa2021-aluminium-food-qa
title: "Aluminium in Food (Q&A): Sources, Safety and Regulations"
authors: [EUFIC]
year: 2021
publication: "European Food Information Council (EUFIC)"
doi: null
no_doi_assigned: true
access_url: "https://www.eufic.org/en/food-safety/article/aluminium-in-food-qa-sources-safety-and-regulations"
source_type: ngo-report
evidence_tier: B
tier_rationale: "Industry-funded non-profit consumer Q&A (per the schema convention, NGO/industry communications are B-tier). The document contains no original measurement data, no sample frame, no analytical methods, and no exposure-assessment computations of its own. Substantive numerical claims (TWI, PTWI) are second-hand from EFSA (2008) and JECFA (2011) primary sources. Treat as a communications/regulatory-context reference, not as evidence on aluminium occurrence or exposure."
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/05_PB_Vanilla_Spices/Aluminum in Food (Q&A)_ Sources, Safety and Regulations.pdf"
raw_sha256: "74a64521bc8c0fc4423efc9efc71f181a2698dc034ffcd03eb53df3249ecbe3b"
metals: [Al]
ingredients: ["[[ingredients/tea]]", "[[ingredients/cocoa]]", "[[ingredients/herbs-and-spices]]", "[[ingredients/spinach]]", "[[ingredients/mushrooms]]"]
products: []
matrices: []
jurisdictions: [EU]
near_duplicates: []
sample_n: null
sample_population: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-28
---

# EUFIC 2021 — Aluminium in Food: Sources, Safety, and Regulations (Q&A)

## Overview

EUFIC (European Food Information Council) consumer-facing Q&A page, last updated 1 December 2021, summarising the dietary sources, safety assessment, and EU regulatory framework for aluminium in food. The piece is structured as six questions: what aluminium is, where it occurs, dietary sources, safety of dietary intake, regulations on aluminium levels in foods, and regulations on aluminium use during food processing. It draws on the 2008 EFSA AFC panel opinion and 2013 EFSA dietary-exposure assessment for aluminium-containing food additives, and on EU framework and food-additives regulations.

## Key numbers

- EFSA tolerable weekly intake (2008): 1 mg aluminium per kg body weight per week. Reported as the value EU regulators apply when evaluating cumulative dietary Al exposure.
- JECFA provisional tolerable weekly intake (2011): 2 mg aluminium per kg body weight per week. The Q&A presents this as a higher PTWI that the WHO/FAO expert panel established after reviewing new evidence increasing confidence in the risk assessment; it does not reconcile the divergence from the EFSA TWI.
- Aluminium share of earth's crust: approximately 8% by weight (background, not exposure-relevant).
- No occurrence or exposure values are reported in the document. No LOD/LOQ, no sample frame, no measured µg/kg figures, no per-food intake estimates.

## Dietary sources stated

The Q&A lists, qualitatively, the food categories it identifies as natural carriers of aluminium taken up from soil and water by vegetation: tea leaves, cocoa, spices and some herbs, cereals and cereal-based foods (bread, rice, cakes, biscuits, pastries), some vegetables (mushrooms, spinach, radish, lettuce), and dairy and soya products including infant formula. Drinking water is described as a minor source.

Two additional non-natural pathways are described: aluminium-containing food additives (texture and taste improvers in fine-bakery coatings, anti-caking agents in dried powders and drinks, aluminium lakes formed by precipitating water-soluble food colours with an aluminium salt for use in fat- and oil-containing products), and migration from aluminium cookware and packaging (foil, cartons).

## Regulatory landscape stated

- Regulation (EC) No 1935/2004 on materials and articles intended to come into contact with foodstuffs is identified as the EU framework requiring that food-contact materials not transfer constituents (including aluminium) to food at levels endangering human health.
- Since 2012, EU regulations have been amended to adjust conditions of use and reduce approved use levels for aluminium-containing food additives, so that the EFSA TWI is not exceeded by EU consumers. The Q&A specifically cites Commission Regulation (EU) No 380/2012 (amending Annex II to Regulation (EC) No 1333/2008 on the conditions of use and use levels for aluminium-containing food additives) and Commission Regulation (EU) No 923/2014 (amending Annex II to Regulation (EC) No 1333/2008 as regards aluminium lakes of riboflavins E 101 and cochineal/carminic acid/carmines E 120).
- The Q&A characterises dietary aluminium as not a source of concern in people with normal kidney function, citing low intestinal absorption and efficient urinary clearance, and states that EFSA's 2008 evaluation did not consider dietary Al exposure to constitute a risk for developing Alzheimer's disease.

## Methods (brief)

Tertiary regulatory communications document. No original measurement, no sample frame, no analytical method, no exposure calculation. Cites two EFSA scientific opinions (EFSA Journal 6(7):754 [2008]; EFSA Journal 10(4):411E [2013]) and three EU regulations (1935/2004, 380/2012, 923/2014). The bibliography is five entries.

## Verification notes

Merge-enhance pass 2026-05-28 (Claude Opus 4.7) of an earlier ingest that contained multiple defects:

- **Publisher misattributed.** The prior version listed `authors: [EFSA]`, `publication: "European Food Safety Authority"`, and titled the page "EFSA 2021 — …". The source is published by EUFIC (European Food Information Council), an industry-funded non-profit communications organisation, not EFSA. EUFIC's logo is on the cover page. EFSA appears in the text only as a cited authority. Corrected authors, publication, page heading, and source_type accordingly.
- **Cite-key preserved despite misattribution.** The cite-key `efsa2021-aluminium-food-qa` embeds the wrong publisher attribution. It has been preserved during this pass because it is backlinked from 10+ wiki pages (the aluminum metal page, four infant-formula product pages, five ingredient pages including tea/cocoa/spinach/mushrooms/herbs-and-spices, and the log) and from several `data/evidence/` artifacts. Renaming would break those links silently. The cite-key misattribution is noted here for a future rename pass that can update inbound references atomically.
- **Source_type corrected from `government-report` to `ngo-report`.** EUFIC is a Belgian non-profit, not a government agency. Aligns with the ngo-report convention used for CFA, CEPHED, ESCP, and the Consumer Reports source.
- **Evidence-tier dropped from A to B with rationale.** A-tier is reserved for peer-reviewed primary research and government-agency scientific opinions. A consumer Q&A summarising secondary EFSA opinions does not qualify. B is the NGO/industry-communication tier per the schema convention; the tier rationale flags that this source contributes no original data.
- **Invalid matrices slugs removed.** Prior version had `matrices: [dietary-intake, food-additives, cookware-migration]`, none of which are food-matrix vocabulary slugs (the matrices field carries food matrices like rice, fish, herbs, etc.). The Q&A measures no specific matrix; set to `[]`.
- **Products field cleared.** Prior version routed this source to `products/infant-formula`. The Q&A mentions infant formula once, in passing, as a member of the "dairy and soya products" group that can contain aluminium. There is no infant-formula occurrence data, no infant-formula-specific exposure estimate, and no infant-formula regulatory citation. Routing a contentless reference to all four infant-formula product pages overstates this source. Set to `[]`.
- **`## Implications` section removed.** The legacy section contained Part 2 firewall violations: "HMT&C product threshold-setting pages for products containing high-Al ingredients (tea, cocoa, spices) should reference these values." Per CLAUDE.md Part 2, source pages report what one paper found; they do not direct HMT&C threshold-setting. The section also contained "courses" and "app" implications that are speculative downstream framing rather than what the source states.
- **`## Wiki pages updated on ingest` section removed.** Legacy heading per skill v2 EXISTING-path defect list. Downstream routing is the routing audit's job, not the source page's.
- **`raw_handle` updated from placeholder.** Prior version had `raw_handle: manual-fetch-kimi` (the parent-folder placeholder used in ~100 legacy ingests). Updated to `MFK_aluminum-in-food-qa-sources-safety-and-regulations` per the v2 MFK_ handle convention.
- **`raw_sha256` populated** (74a64521bc8c0fc4423efc9efc71f181a2698dc034ffcd03eb53df3249ecbe3b) from the on-disk PDF.
- **`access_url` added.** Pointing at the EUFIC article URL (assumed to be the live home of this Q&A page based on the document layout, branding, and the EUFIC publication pattern; the URL has not been verified as still live during this pass).
- **`sample_population` cleared** (prior version invented "General population dietary aluminium exposure, EU context"; the Q&A has no sample population).
- The substantive Q&A content — six questions, the TWI/PTWI values, the qualitative dietary-source list, the regulatory framework — is preserved and restructured into Key numbers / Dietary sources stated / Regulatory landscape stated / Methods sections that match current source-page conventions.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [070df200e](https://github.com/paleofoundation/heavymetalindex/commit/070df200e) | 2026-05-28 | major | 4 sections added and 3 removed; narrative text revised |
| [99e9ccb8e](https://github.com/paleofoundation/heavymetalindex/commit/99e9ccb8e) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
