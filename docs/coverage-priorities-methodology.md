# Coverage priorities methodology

This document defines how Heavy Metal Index constructs and maintains its coverage-priorities list: the canonical set of ingredients that must exist as wiki pages with full contamination profiles and mitigation sections, regardless of how the manual-fetch queue happens to land. The list itself lives at [[wiki/coverage-priorities]] and is the lint target enforced by `tools/audit-coverage-priorities.mjs`.

## Why this list exists

The wiki's epistemic-asymmetry argument rests on the claim that it represents the complete heavy-metals literature, not a convenience sample of whatever PDFs Karen happened to fetch. Without an explicit coverage target, ingest is driven by the manual-fetch queue, which is itself biased toward US- and EU-published, English-language, infant-food and supplement studies. The result is a wiki where turmeric has nine contributing sources and cassava has one, even though cassava feeds an order of magnitude more people. The coverage-priorities list is the artifact that makes this bias visible and correctable: the list says "these ingredients must be covered to a defined depth," and the lint pass says "here are the ones that aren't yet."

The list is also a defensible artifact in its own right. When a brand legal team or a regulator asks why a given ingredient is or isn't covered, the answer "it's number 47 on our published priorities list, and here are the criteria the list uses" is durable. The answer "we wrote about what came in" is not.

## Construction principles

Each candidate ingredient is scored on five criteria. The total score ranges from 0 to 13. The top-scoring ingredients populate the list, with the cutoff calibrated so that the list lands at roughly 100 entries; the exact count is allowed to drift between 90 and 130 as the corpus grows and exposure science evolves.

### Dietary exposure burden (0-3)

The contribution this ingredient makes to population intake of one or more priority metals (Pb, Cd, iAs, tAs, MeHg, tHg, Ni, Al, Cr, Sn, U), drawing on EFSA scientific opinions, JECFA evaluations, the WHO GEMS/Food database, and equivalent national exposure assessments where available. A score of 3 means the ingredient is named as a top-five contributor to population intake of any one priority metal in a major exposure assessment. A score of 2 means it's named in the top fifteen. A score of 1 means it's measured and discussed but not in the top contributors. A score of 0 means it's not characterized in any major exposure assessment.

Rice scores 3 on this criterion for iAs (consistently named the largest dietary contributor in EFSA 2014 and JECFA 2010). Spinach and other leafy greens score 3 for Cd. Tuna and swordfish score 3 for MeHg. Cassava scores 2 because it's a top staple-food calorie source in regions with documented soil Cd and Pb burdens but is not directly evaluated by EFSA or JECFA at the same depth as rice.

### Per-serving contamination potential (0-3)

The worst documented concentration in any major regulatory survey or peer-reviewed study, normalized against the relevant Codex or EU regulatory ceiling. A score of 3 means documented exceedances of 10x or more above an applicable ML. A score of 2 means 2x to 10x exceedance. A score of 1 means values close to but not exceeding the ML. A score of 0 means consistently low values.

Turmeric scores 3 (Pb in adulterated turmeric routinely exceeds 1 ppm against a 200 ppb Codex ML). Brazil nuts score 3 (radium-derived Ba, but for metals proper, score 2 for Ba/Cd). Liver and kidney offal score 3 for Cd. Honey near mining areas scores 2 for Pb.

### Population reach (0-3)

The number of people who consume the ingredient regularly, weighted toward staple-food status. A score of 3 is for FAO-recognized staple foods or globally ubiquitous commodities (rice, wheat, maize, cassava, potato, sugar). A score of 2 is for regionally important staples (millet, sorghum, teff, plantain, taro) or near-universal non-staples (tomato, onion, apple, banana). A score of 1 is for broadly consumed but not universal foods (most fruits, vegetables, nuts, fish species). A score of 0 is for specialty foods.

This criterion is the corrective against US/EU-centric bias. Teff and sorghum score 2 here despite being absent from US supermarkets, because they feed hundreds of millions in East Africa and parts of South Asia.

### HMTc relevance (0-2)

Whether the ingredient appears in any HMTc product category (Cat 1 through Cat 8 and successors). A score of 2 means the ingredient is a primary input to one or more locked HMTc categories. A score of 1 means it's a minor input or an input to a category still in scoping. A score of 0 means no current HMTc relevance.

This criterion exists because HMTc certification depends on the wiki for its evidence base, and any ingredient in a certification scope must have a defensible wiki page behind it.

### Vulnerable-population specificity (0-2)

Whether the ingredient is specifically consumed by infants, young children, pregnant women, or other vulnerable populations at rates substantially above general-population intake. A score of 2 is for ingredients that are primary inputs to infant or toddler foods (rice cereal, infant formula bases, fruit purees). A score of 1 is for ingredients with elevated relative intake in vulnerable populations but not exclusively (whole milk, peanut butter, applesauce). A score of 0 is for ingredients with no specific vulnerable-population weighting.

Infant rice cereal ingredients score 2 categorically. Tuna scores 1 (pregnancy advisories make it a vulnerable-population concern even though general consumption is widespread).

## Scoring discipline

Scores are assigned with citation, not from memory. The list source-of-truth in [[wiki/coverage-priorities]] records the score for each ingredient along with the specific exposure assessment, survey, or regulatory document supporting each criterion. The methodology fails as a defense if scores are assigned without traceable basis.

When two criteria are in tension (e.g., an ingredient with extreme per-serving contamination but tiny population reach), both scores are recorded and the total reflects the sum. Ties at the cutoff are broken by vulnerable-population score, then by HMTc relevance, then alphabetically.

## Tier structure

The list is partitioned into three tiers reflecting urgency of coverage:

**Tier 1 (Must-have, no exceptions).** Score 9 or above, or any FAO-recognized staple regardless of score. These ingredients must have non-stub pages with all eight mandatory sections within 90 days of being added to the list. Lint fails the build if any Tier 1 ingredient lacks a page.

**Tier 2 (High priority).** Score 6 to 8. Pages required within 180 days; lint warns but does not block builds.

**Tier 3 (Priority backlog).** Score 4 to 5. Tracked for completeness; surfaced in the morning report when contributing sources accumulate organically.

Ingredients below score 4 are not on the priorities list. They get pages organically as the corpus grows; their absence is not a defect.

## Maintenance cadence

The list is reviewed quarterly. Reviews are triggered by: new major exposure assessments (EFSA scientific opinions, JECFA reports, FDA Closer to Zero updates); new HMTc categories opening or locking; major regulatory limit changes that reshape per-serving contamination potential scores; and discovery of corpus gaps that suggest the scoring criteria themselves need calibration.

Adds, removes, and tier moves are logged in `log.md` with `op: coverage-priorities-update` and the rationale. The list is versioned in git; any reconstruction request can pin to a specific date.

## Relationship to the auto-fetch layer

The coverage-priorities list is the input to the auto-fetch pipeline (see [[docs/auto-fetch-design]], pending). When an ingredient on the list has `n_studies < 5` for any priority metal, the auto-fetch layer fires OpenAlex, Europe PMC, and PubMed Central queries scoped to that (ingredient, metal) pair with `is_oa:true` filters, deduplicates against the existing corpus, and queues candidate papers into `raw/Auto Fetch OA/` for the ingest skill to process. The priorities list is what makes the auto-fetch layer purposive rather than untargeted crawling.

## What this methodology does not do

It does not set HMTc certification thresholds. It does not define synthesis rules (see Part 9 of CLAUDE.md and `docs/standards-methodology.md`). It does not specify which sources are A-tier vs B-tier (see Part 13). Its sole job is to define which ingredients must be covered and to what depth, leaving how each page is built to the existing page-template and ingest-workflow specifications.
