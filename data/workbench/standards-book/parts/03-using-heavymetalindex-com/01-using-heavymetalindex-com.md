# Part 2.5 — Using heavymetalindex.com

Part 1.5 introduced heavymetalindex.com as the public curated corpus of the heavy-metals-in-food literature that HMTc's standards rest on. That chapter established the architectural separation between HMI and the certification program and explained why the separation produces durable epistemic authority. This chapter is the operational complement: it demonstrates how brand QA teams, brand legal teams, and certification auditors **use** the corpus day-to-day in the course of operating under HMTc.

The chapter has four sections. The first three describe how the corpus serves brand operations today; the fourth describes a roadmap capability — the brand-facing percentile-placement dashboard — that is on the program's near-term build path and that brands considering certification should expect to come online during their first license cycle.

This chapter exists for a strategic reason. The certification mark is the program's visible signal; the corpus is the program's value engine. A reader who finishes Part 2.5 should understand that HMTc is not just a certification mark backed by a methodology, but a certification mark backed by a continuously-maintained operational tool that brand QA teams lean on. That distinction is what separates HMTc from any single-point certification.

## 2.5.1 The diagnostic tool

When a brand's lot tests come back with one or more analytes elevated above their typical range — even when still within the HMTc limit — the brand's first operational question is: *why*? Random analytical noise, a seasonal supplier shift, a new ingredient lot, a process change that wasn't documented as material, an upstream supply-chain event the brand has not yet been alerted to? The diagnostic tool is the relevant ingredient pages on heavymetalindex.com.

Each ingredient page on HMI carries a structured `contamination_profile` block summarizing what the literature says about typical and 95th-percentile concentrations for each priority metal in that commodity, with three additional structured layers:

- **Geographic variance** — typical concentration ranges by growing region, with sample sizes from contributing sources. A brand sourcing cocoa from Ecuador can see what the published literature reports for Cd in Ecuadorian cocoa specifically, distinguished from Cd in cocoa from Côte d'Ivoire, Ghana, or Indonesia.
- **Seasonal variance** — concentration ranges by harvest period and climate condition, where the literature reports them. The El Niño years 2015–2016 and 2023 are documented as drought-stress periods that elevate Cd uptake in Ecuadorian cocoa by roughly 40% above non-El-Niño baselines.
- **Processing effects** — how polishing, rinsing, parboiling, fermentation, drying, milling, and refining shift concentrations of which metals. Each processing-effect claim is anchored to a cited source.

### Worked example

A brand producing chocolate-flavored toddler snack pouches sees their July 2026 lot test return Cd at 240 ppb against an HMTc limit of 350 ppb. The result is within limit, but it is meaningfully higher than the brand's typical 90 ppb baseline. Brand QA opens `heavymetalindex.com/ingredients/cocoa`, navigates to the Cd contamination_profile block, and finds:

- Typical Cd range across all reported cocoa: 80–240 ppb (p95: 410 ppb).
- Geographic breakdown shows Ecuadorian high-altitude cocoa at 220–540 ppb (n=87 from one peer-reviewed source) versus Ghanaian cocoa at 70–210 ppb (n=92 from a separate source).
- Seasonal variance shows Ecuadorian cocoa during El Niño years at 180–620 ppb (n=41), running roughly 40% above non-El-Niño baselines.

The brand cross-references their supplier records: their June 2026 cocoa lot was sourced from a new Ecuadorian high-altitude supplier (replacing their typical Ghanaian supplier due to a price shift), and the 2025-2026 El Niño cycle was active during the relevant harvest period. The diagnostic answer is clear, traceable to the literature, and actionable: source verification on the new supplier, possibly a return to the Ghanaian supplier or a regional diversification of cocoa sourcing.

This diagnostic conversation happened in twenty minutes using the corpus. It would have taken brand QA days of supplier outreach and ingredient testing to reach the same conclusion working from scratch.

## 2.5.2 The remediation playbook

Each ingredient page on HMI carries a Mitigation Options section ranked by impact magnitude. The categories are: sourcing levers (origin region, supplier specification, soil-Cd or paddy-iAs pre-screening); agronomic levers (soil amendments, water management, cultivar selection); processing levers (rinsing, polishing, fermentation, drying); formulation levers (substitute or dilute); testing and QC levers (lot-level vs. spot-check, internal vs. third-party); and packaging and storage levers where relevant.

Each lever entry names the magnitude of the effect on the metal in question and cites the source page that establishes the effect. A brand reading the cocoa ingredient page's Mitigation Options finds, for Cd:

- **Sourcing level (highest impact):** regional substitution from Ecuadorian high-altitude to Ghanaian or West African low-altitude supply can reduce typical Cd by 60-70% (anchored to comparative studies cited on the page).
- **Agronomic level:** soil-Cd pre-screening of farmer plots before harvest contracting can reduce supplier-batch variance by 40-50%.
- **Processing level:** fermentation duration and pH adjustments during cocoa processing can shift Cd uptake by 15-25%.
- **Formulation level:** dilution with lower-Cd ingredients reduces final-product Cd proportionally (a 50/50 blend of high-Cd and low-Cd cocoa typically produces ~50% of the high-Cd value, allowing for ingredient interactions documented in the cited sources).
- **Testing and QC level:** lot-by-lot incoming-cocoa testing with rejection thresholds at the 80% PoL internal warning level can prevent elevated lots from entering production.

Brand QA can read the cited sources for each lever, evaluate which fit their operational reality (sourcing changes have long lead times; processing changes have capital implications; formulation changes have R&D and labeling implications), and assemble a defensible reformulation plan. The remediation pathway becomes a reading exercise, not a research project.

For brands enrolled in the Confidential Remediation Track, this is the daily operational tool the Track's technical guidance points them to. The Track's value is not opacity but accelerated access to the same evidence base that successful Status A brands have already used to reduce their contamination profiles.

## 2.5.3 Percentile placement (roadmap)

A future capability on the HMTc roadmap is the brand-facing percentile-placement dashboard. The dashboard will allow a brand with a license to log into the heavymetaltested.com platform and see, in real time:

- Where their lot results sit relative to the pooled distribution of all certified Status A SKUs for the same product category and metal. A brand's lot at 12 ppb Pb in a category with a 30 ppb HMTc limit and a Status A median of 8 ppb sees themselves at "P67 of certified Status A pool" — better than two-thirds of certified competitors, worse than one-third.
- Their trend over time, with the pool's distribution overlay. Is the brand improving faster than the certified market, slower, or at the same pace? Is the brand's percentile placement getting better or worse as the certified pool tightens around them?
- The projected next-cycle limit (per Part 2.10's forward forecast) overlaid on their current lot trajectory. Will the brand's current trajectory clear the projected next-cycle limit before enforcement, or will the brand need to accelerate reduction?

This is the operational expression of the Standards Ratchet's planning-tool framing. A brand that knows where they sit and where they are heading can budget reformulation against actual data rather than abstract limits. A brand that is at the cleaner end of the certified pool sees their leadership reflected in real time; a brand at the dirtier end of the pool sees the urgency of their reformulation runway.

The dashboard is a roadmap capability rather than a current operational feature. Brands considering certification should expect the dashboard to come online during their first license cycle; brands currently certified will receive access as the capability ships. The roadmap is named here so that brands evaluating HMTc understand the operational trajectory they are signing up for, not just the standards they are signing up against.

## 2.5.4 The pre-certification baseline

Before a brand signs an HMTc license agreement, the brand can use heavymetalindex.com to model their pre-certification baseline. The exercise is straightforward and takes one to two hours per product category.

The brand identifies the product-category page on HMI that matches their SKU (one of the fifteen Category 1 pages, or a Category 2+ page when those come online). The product-category page carries a Master Limit Table previewing what the HMTc limit would be for each priority analyte, the applicable regulatory cap, and the basis note. The brand cross-references this against their internal testing data, if any, or against the relevant ingredient pages' contamination_profile blocks if no internal data exists.

This pre-certification exercise tells the brand:

- Whether their current production is likely to qualify for Status A immediately (most metals at or below the HMTc limit), Status B (one or more Tier 2 metals between 100% and 150% PoL), or only the Confidential Remediation Track.
- Which metals are closest to the limit — the analytes most likely to drive a status determination.
- Which ingredients in their formulation are the likely contributors — sourcing lever candidates.
- What the rough magnitude of reformulation effort would be — small adjustments versus full sourcing-chain restructuring.

A brand whose pre-certification baseline suggests Status A or B can sign the license with reasonable confidence about their initial status. A brand whose pre-certification baseline suggests Status C-or-worse can sign the license with the understanding that the Confidential Remediation Track is their entry path, and can begin the technical-guidance conversations with the Program Operator before formal enrollment. Either way, the brand enters the program with their eyes open and their reformulation strategy informed by the same evidence base the Program Operator is using to set their limits.

This is the closing argument for the chapter and for the corpus's role in the Program. The HMTc certification mark is the visible signal. The HMI corpus is the operational tool that brand QA, brand legal, and brand management use to plan, diagnose, remediate, and verify the certification effort. The two work together; neither alone would be sufficient. Part 3 publishes the standards that the corpus supports; Part 4 specifies the testing schedule that operationalizes the surveillance; Part 5 documents the methodology that the corpus feeds. The bound volume in front of the reader is the program's specification; heavymetalindex.com is where the program lives.

## Cross-references

- The corpus's structure and the wiki/HMTc firewall: Part 1.5.
- The product-category pages corresponding to Part 3's per-product chapters: `wiki/products/*` on heavymetalindex.com.
- The ingredient pages with contamination profiles, geographic variance, seasonal variance, and Mitigation Options: `wiki/ingredients/*` on heavymetalindex.com.
- The metal pages with toxicology, exposure routes, and regulatory limits: `wiki/metals/*` on heavymetalindex.com (the toxicology callouts in Part 2.2 reference these directly).
- The Standards Ratchet forward forecast: Part 2.10.
- The Confidential Remediation Track: Part 2.4.
