---
type: synthesis
title: "EU heavy-metals regulatory framework timeline (2001-2023 and beyond)"
slug: eu-regulatory-framework-timeline
audience: [regulator, brand-legal, hmtc-staff]
metals: [Pb, Cd, tHg, MeHg, iAs, Sn]
ingredients: []
products: []
anchor_sources: ["[[regulations/eu-466-2001-contaminants-superseded]]", "[[regulations/eu-1881-2006-contaminants-superseded]]", "[[regulations/eu-reg-2022-617-mercury-fishery]]", "[[regulations/eu-2021-1317-lead-cereals-superseded]]", "[[regulations/eu-2021-1323-cadmium-cereals-superseded]]", "[[regulations/eu2023-contaminants-maximum-levels]]"]
established: 2026-05-18
wiki_doi: null
updated: 2026-05-18
---

# EU heavy-metals regulatory framework timeline (2001-2023 and beyond)

The European Union's enforceable heavy-metal maximum levels in foodstuffs have evolved through six major regulatory instruments since 2001, each building on its predecessor with tighter limits, new analyte coverage, or recalibration to updated EFSA scientific opinions. Source pages in the wiki citing EU regulatory caps cite different points along this timeline depending on publication year; this synthesis maps the timeline so citation work doesn't fall through cracks.

Every wiki source page in the wiki that names an "EU maximum level" for Pb, Cd, Hg, iAs, or Sn in food traces to one of the six instruments below. When working downstream from a source citation, identify which point in the timeline the source's regulatory comparison anchors against; this matters because the limits changed substantially between framework versions, and a paper citing "the EU 0.1 mg/kg Pb limit for infant foods" may be referencing the EC 1881/2006 value, the 2021/1317 amendment value, or the 2023/915 recast value — each requires the matching regulation page citation.

## The six instruments

**1. Commission Regulation (EC) No 466/2001 (effective March 2001, superseded December 2006).** The original EU-wide harmonized contaminants framework, replacing the older patchwork of member-state-specific maximum levels. Established baseline maximum levels for Pb, Cd, Hg, and others across major food matrices. Operated for five years before being recast by EC 1881/2006. See [[regulations/eu-466-2001-contaminants-superseded]]. Sources published 2001-2006 may cite this regulation.

**2. Commission Regulation (EC) No 1881/2006 (effective March 2007, superseded May 2023).** The omnibus contaminants regulation that became the load-bearing EU reference for sixteen years. Major amendments along its lifetime added new analytes and tightened limits for existing ones:

- **Regulation (EU) 488/2014** — tightened cadmium maximum levels (cocoa, chocolate, infant cereal-based foods specifically). This is the source of the 0.010 mg/kg Cd cap for cow-milk-based infant formula powder that anchors most pre-2023 infant-formula Cd literature.
- **Regulation (EU) 2015/1006** — introduced inorganic arsenic (iAs) maximum levels for rice and rice-based products, including infant food (0.10 mg/kg for rice destined for infant/young-child food; 0.20 mg/kg for non-parboiled milled rice; 0.30 mg/kg for rice waffles/cakes/crackers). Before this amendment, EU had no iAs-specific cap in food (only the WHO drinking-water 10 ppb).
- **Regulation (EU) 2015/1933** — further tightened iAs limits in selected matrices.
- **Regulation (EU) 2021/1317** — tightened lead maximum levels across many food matrices, including drinking water, fruits, vegetables, fishery products, and infant foods. The 0.020 mg/kg Pb cap for processed cereal-based foods and baby foods that anchors most pre-2023 baby-food Pb literature came from this amendment. Subsequently superseded by EU 2023/915. See [[regulations/eu-2021-1317-lead-cereals-superseded]].
- **Regulation (EU) 2021/1323** — tightened cadmium maximum levels across cereal grains and cereal-based foods. Companion to 2021/1317 but for Cd. See [[regulations/eu-2021-1323-cadmium-cereals-superseded]].
- **Regulation (EU) 2022/617** — introduced new per-species maximum mercury levels for fishery products (0.5 mg/kg general default, up to 1.0 mg/kg for listed predatory species including tuna, swordfish, shark, marlin). This is the operative current EU framework for seafood Hg; remained in force as a successor instrument when the broader EC 1881/2006 was recast in May 2023. See [[regulations/eu-reg-2022-617-mercury-fishery]].

See [[regulations/eu-1881-2006-contaminants-superseded]] for the consolidated final EC 1881/2006 framework.

**3. Commission Regulation (EU) 2023/915 (effective May 2023, current).** The full recast superseding EC 1881/2006 in its entirety. Substantively, most maximum levels carried forward unchanged from the final amended EC 1881/2006 framework; the recast was primarily a structural reorganization. See [[regulations/eu2023-contaminants-maximum-levels]]. New per-metal companion regulation pages in the wiki track specific recast sections: [[regulations/eu-2023-915-cadmium]] (Cd), [[regulations/eu-2023-915-lead-infant-young-child-foods]] (Pb in infant foods specifically).

## How source pages cite this timeline

A source page citing "the EU Pb maximum level for infant foods" can mean different things depending on publication year:

- **Pre-2007 source** → cites EC 466/2001
- **2007-2014 source** → cites EC 1881/2006 (original limits)
- **2014-2021 source** → cites EC 1881/2006 as amended by 488/2014 (tightened Cd)
- **2021-2023 source** → cites EC 1881/2006 as amended by 2021/1317 (tightened Pb)
- **2023+ source** → cites EU 2023/915 (recast)

The numerical limit cited may be identical across multiple framework versions (Pb 0.020 mg/kg in processed cereal-based infant foods was 2021/1317 and remains in EU 2023/915), or different (Pb 0.020 mg/kg today vs higher values pre-2021). The wiki's source-page convention is to cite the regulation page version active when the source was published, and to update to the current framework reference when downstream synthesis work cites the value.

## How HMTc certification work uses the timeline

Per CLAUDE.md Part 19 and the wiki's [[regulations/eu2023-contaminants-maximum-levels]] page, the HMTc workbench uses EU regulatory caps as the regulatory-cap floor in the standards-setting math: `final = min(literature-baseline-percentile, regulatory-cap)`. The cap value used should be the current operative framework (EU 2023/915 or EU 2022/617 for fish Hg specifically), regardless of when the contributing literature sources were published. Pre-2023 sources cited as evidence for the literature-baseline percentile remain valid; the regulatory cap they compared against is historical context, not the current binding floor for HMTc threshold derivation.

**Rationale tagging in the HMTc workbench** (per Part 19): when an HMTc threshold sits at or near the current EU 2023/915 cap, the tag is `regulatory-alignment`. When the threshold sits below the EU cap (precautionary, market-ratcheting, or feasibility-driven), the tag is one of those three. The historical EU caps from pre-recast frameworks (EC 1881/2006, EC 466/2001) are not used as cap-floors in current threshold work; they appear in the literature-baseline pooled distribution as the regulatory context the source authors compared against, but the HMTc cap-floor is always the current operative framework.

## What this synthesis does not yet rest on

This synthesis page is structural (the timeline of regulatory instruments) rather than empirical (what the limits actually were at each point). The numerical limits for each instrument are documented on the individual regulation pages linked above; this synthesis page should NOT enumerate them (avoiding stale-data drift if the regulation pages get updated). When a wiki claim needs a specific EU cap value, cite the regulation page, not this synthesis.

Future expansion candidates:

- **Member-state-level enforcement variation under each framework.** EU regulations set maximum levels; member-state competent authorities enforce them, and enforcement intensity varies. RASFF (Rapid Alert System for Food and Feed) notifications give a window into where exceedances appear, but this is not currently integrated into the wiki.
- **Comparison with US (FDA action levels) and Codex (CODEX STAN 193-1995) frameworks.** The EU framework is one of three major heavy-metal regulatory systems globally; cross-framework comparison synthesis would benefit HMTc certification work targeting multi-jurisdictional markets but is out of scope for this single-EU-focused page.
- **Pre-2001 member-state-specific frameworks** (German contaminant levels, French AFSSA limits, UK FSA guidance) that EC 466/2001 harmonized. Only relevant for very old sources (1990s and earlier).

## Downstream pages updated

- All six EU regulation pages cross-reference this synthesis: [[regulations/eu-466-2001-contaminants-superseded]], [[regulations/eu-1881-2006-contaminants-superseded]], [[regulations/eu-reg-2022-617-mercury-fishery]], [[regulations/eu-2021-1317-lead-cereals-superseded]], [[regulations/eu-2021-1323-cadmium-cereals-superseded]], [[regulations/eu2023-contaminants-maximum-levels]].
- Source pages citing pre-2023 EU caps should reference the relevant historical regulation page; this synthesis page is the connector that helps citation work locate the correct framework version.

## Anchor sources (regulation pages)

- [[regulations/eu-466-2001-contaminants-superseded]] — 2001 original framework.
- [[regulations/eu-1881-2006-contaminants-superseded]] — 2006 successor; 16-year operative framework with multiple amendments.
- [[regulations/eu-2021-1317-lead-cereals-superseded]] — 2021 Pb amendment.
- [[regulations/eu-2021-1323-cadmium-cereals-superseded]] — 2021 Cd amendment.
- [[regulations/eu-reg-2022-617-mercury-fishery]] — 2022 Hg-fish amendment (current).
- [[regulations/eu2023-contaminants-maximum-levels]] — 2023 full recast (current).

## How this page was promoted

Established 2026-05-18 after Codex created the EC 466/2001 page (and Karen + Claude created the EC 1881/2006 page, the EU 2022/617 page, the EU 2021/1317 + 1323 pages, and the EU 2023/915 page). With six EU regulation pages now in the wiki, the timeline connecting them needed dedicated synthesis-page treatment to prevent citation work from picking the wrong framework version.

<!-- BEGIN: hmi-peer-review -->
## Peer review state

This synthesis claim has not yet been evaluated by external reviewers. Verdicts will be added here as named domain experts (listed at [[curators]]) complete their review. The verdict log is `data/peer-review/<reviewer-slug>.jsonl` and is part of the public corpus.

| Reviewer | Verdict | Review date | Notes |
| --- | --- | --- | --- |
| _no reviews yet_ | | | |

The Heavy Metal Index publishes synthesis claims before external review completes, with the review state visibly tracked. This is the same model Cochrane uses for its protocols: the claim is published, the review accumulates over time, and the credibility of the claim is partly the cumulative result of visible review.
<!-- END: hmi-peer-review -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [22b1fec](https://github.com/paleofoundation/heavymetalindex/commit/22b1fec) | 2026-05-31 | autonomy: self-heal recovery of prior tick's uncommitted work — 2026-05-31T15-22-11Z |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
<!-- END: hmi-page-history -->
