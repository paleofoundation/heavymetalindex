---
type: synthesis-proposals
updated: 2026-05-13
audience: [internal]
noindex: true
---

# Synthesis findings — candidate threads

This file is the queue of candidate threads for promotion to dedicated synthesis findings pages at `wiki/synthesis/<topic-slug>.md`. Each candidate is evaluated against the four criteria in [[../../wiki/synthesis|the synthesis index]]:

1. At least three independent A-tier or high-quality B-tier sources support the finding.
2. The finding spans multiple metals, ingredients, or products.
3. The finding is not obvious from any single source page.
4. The finding has strategic relevance for at least one wiki audience (brand-legal, regulator, educator).

When all four are met, the candidate moves to `## Promoted` below with a link to its synthesis page, and the page itself is drafted following CLAUDE.md Part 15 prose conventions.

Candidates can be added by any session that reads the corpus. Ingest sessions surface candidates in batch report `Synthesis threads` notes; the orchestrator's planned `PROPOSE-SYNTHESIS-PAGES` signal will surface candidates from routing-audit clustering; Karen adds candidates ad hoc.

## Pending candidates

### Combined-exposure underprotection from single-metal regulatory limits

Anchor sources (need at least one more to meet the three-source criterion):

- [[../../wiki/sources/suomi2023-finland-cumulative-dietary-hi|Suomi et al. 2023]] — Finnish cumulative dietary HI analysis: HI greater than 1 for average Finnish consumers at all ages for neurotoxicity and kidney endpoints from combined Cd/Pb/iAs/MeHg/Ni/Al exposures; greater than 95 percent of women under 45 exceed the neurotoxicity threshold.
- [[../../wiki/sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] — children aged 0.5-12 reach as high as 96 percent of the JECFA PTMI from cadmium alone in subpopulations, indicating that even the most permissive single-metal reference value is saturated where population risk is highest.
- _One additional anchor needed._ EFSA's chronic dietary iAs update (2024) is in the corpus and may serve; the FDA TDS 2018-2020 elements report covers multi-metal US dietary intake and is also in the corpus.

Thesis: National-population dietary metals exposure data, when combined across the regulated metal set rather than evaluated against single-metal reference values, exceeds health-protective thresholds in countries with strong food-safety regimes (Finland) and approaches them in others. The implication is that single-metal regulatory limits, treated as the floor against which certification programs are calibrated, systematically underprotect because they do not account for cumulative exposure.

Why this matters:

- Brand-legal: this is the strongest single citation cluster supporting why HMTc certifies to combined-exposure standards rather than matching the regulatory floor on each metal.
- Regulator: the finding aligns with recent EFSA and JECFA framing on cumulative exposure but quantifies the gap in a way regulatory documents have not.
- Educator: the case for why a "safe" single-metal level does not imply a safe dietary intake.

Status: holding pending one additional anchor source. Re-evaluate after next P4 batch if a third high-quality combined-exposure paper enters the corpus.

### Subsistence fishing methylmercury as a global vulnerable-population pattern

Anchor sources (three present, meets criteria):

- [[../../wiki/sources/li2024-global-fisheries-mehg|Li et al. 2024]] (PNAS) — catch-weighted MeHg geometric mean 0.13 µg/g ww across 1,774 species; 84-99 percent of subsistence fishing entities exceed MeHg exposure thresholds.
- [[../../wiki/sources/wu2025-climate-meghan-freshwater-fish-china|Wu et al. 2025]] (PNAS) — Chinese freshwater wild fish 2.9-6.2 times higher MeHg than farmed, 1.7 times higher than marine; projected 60 percent increase by 2031-2060.
- [[../../wiki/sources/auzier-guimaraes2025-mercury-tapajos-fish|Auzier-Guimarães et al. 2025]] — Tapajós River basin systematic review confirming ASGM-driven MeHg accumulation in subsistence-fished Brazilian Amazonian fish.
- Additional anchors likely available from corpus: [[../../wiki/sources/paul2025-meghna-fish-arsenic|Paul 2025]] (Meghna River Bangladesh fish As/Hg), [[../../wiki/sources/venant2025-lake-victoria-sardine-cd-pb|Venant 2025]] (Lake Victoria sardine), Colombia/Ecuador papers from batch 7.

Thesis: The MeHg exposure profile that underlies major regulatory fish-consumption advice (FDA-EPA, EFSA) is calibrated against typical Western consumer patterns. Subsistence fishing populations globally, including Indigenous and rural communities in the Amazon basin, Lake Victoria region, Bangladesh deltaic systems, and rural China, derive a disproportionate share of their diet from freshwater wild fish whose MeHg levels routinely exceed the thresholds the regulatory advice is built against. Climate change is increasing this disparity. The "safe reference population" embedded in seafood regulation is not the population most at risk.

Why this matters:

- Brand-legal: HMTc certification of seafood products faces a defensibility question if the certification standard is calibrated to median-consumer exposure rather than the high-end consumers the wiki documents.
- Regulator: argues for jurisdiction-specific fish-consumption advice that distinguishes subsistence from market populations.
- Educator: the case for why "fish consumption is safe" is true for some populations and false for others, with dose and frequency the load-bearing variables.

Status: ready for promotion. Three independent A-tier anchors with concrete numbers; additional anchors expected from upcoming P4 batches. Suggested page slug: `subsistence-fishing-mehg-disparity`.

### US chocolate lead temporal decline

Anchor sources (need to confirm three; current count is two):

- [[../../wiki/sources/hands2024-multiyear-dark-chocolate-cocoa-usa|Hands et al. 2024]] — multi-year US dark chocolate / cocoa Pb survey 2014-2022; 43 percent exceeded California Prop 65 Pb MADL, 35 percent exceeded Cd MADL; organic products had significantly higher Cd.
- [[../../wiki/sources/zhao2024-toxic-metals-metalloids-food-review|Zhao et al. 2024]] — global synthesis covering cocoa Cd to 1.8 mg/kg with US context.
- Third anchor needed; potential candidates: the Consumer Reports / As You Sow chocolate datasets if ingested, or any FDA TDS cocoa-product analysis.

Thesis: US-market chocolate Pb has been on a measurable temporal decline since 2014, with rates of California Prop 65 MADL exceedance dropping in a fashion that suggests industry response to Prop 65 enforcement is reshaping market-level concentrations. Cadmium has not shown the same decline and may be increasing in organic products specifically.

Why this matters:

- Brand-legal: a defensible US-specific evidence base for the Prop 65 effect on chocolate, useful in litigation context.
- Regulator: case for the effectiveness of state-level enforcement reshaping a national market.
- Educator: chocolate as a case study in regulation-driven market shifts.

Status: needs one more anchor. Holding for next ingest pass touching chocolate.

### Egypt regulatory baseline as a multi-jurisdiction interpretation hazard

Anchor sources (meta-finding about corpus pattern, not a single-paper thesis):

- [[../../wiki/sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim 2024]], [[../../wiki/sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim 2025]], [[../../wiki/sources/kamouh2024-heavy-metals-chicken-meat-egypt|Kamouh 2024]], [[../../wiki/sources/hussein2024-toxic-metals-canned-fish-egypt|Hussein 2024]], [[../../wiki/sources/erol2025-turkish-cheese-metals|Erol 2025 Turkish cheese]] (geographic neighbor, similar regulatory regime).
- Additional Egyptian and Middle Eastern food-safety surveys throughout batches 6-9.

Thesis: A cluster of Egyptian and neighboring-jurisdiction food-safety surveys document elevated Pb, Cd, and other metal concentrations relative to EU or Codex limits. The framing in most of these papers reports the exceedance against EU limits even though Egyptian and Turkish national limits are systematically lower or absent for the matrices studied. A reader of the wiki, encountering many Egyptian papers reporting "exceedance," may incorrectly infer that Egyptian food supply is uniquely contaminated when the operative finding is that Egyptian regulatory baselines do not yet match EU or Codex frameworks, and that papers are using EU as a comparative reference rather than enforcing it.

Why this matters:

- Brand-legal: avoids the wiki being read as making a jurisdiction-specific contamination claim that is actually a regulatory-floor artifact.
- Regulator: case for harmonization between national food-safety reference values and Codex.
- Educator: introduces the methodological care needed when reading multi-jurisdiction occurrence data.

Status: this may not meet the synthesis page bar. It is a methodological note rather than a finding about contamination itself. Karen to decide whether this belongs as a synthesis page, an addition to the methodology framing on relevant ingredient pages, or a CLAUDE.md addendum about how multi-jurisdiction data should be reported.

## Promoted

### Climate adaptation creates new heavy-metal trade-offs

Promoted 2026-05-13. Anchor sources: Seyfferth 2025, Limmer 2024, Wu 2025. Synthesis page: [[../../wiki/synthesis/climate-metals-tradeoffs|climate-metals-tradeoffs]].

## Workflow notes

When a candidate is ready to promote, the workflow is:

1. Move its block from `## Pending candidates` to `## Promoted` with a brief one-line summary and a link to the synthesis page that will be created.
2. Draft the synthesis page at `wiki/synthesis/<topic-slug>.md` using the template established in [[../../wiki/synthesis/climate-metals-tradeoffs|the climate-metals page]].
3. Add the new page to the index in `wiki/synthesis.md` under `## Synthesis findings pages`.
4. Commit with a message like `synthesis: promote <topic> — N anchor sources, brand-legal-facing`.
5. The synthesis page is provisional. Re-synthesis is expected when two corroborating studies enter the corpus after promotion, or when an anchor source is contradicted by later evidence.
