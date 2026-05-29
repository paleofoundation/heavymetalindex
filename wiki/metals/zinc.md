---
title: Zinc
type: metal
symbol: Zn
name: Zinc
species: [Zn2+, total-zinc]
audience: [regulator, educator, researcher]
microbiome_relevance: medium
sources: 88
wiki_doi: null
updated: 2026-05-17
n_sources: 3
in_hmtc_panel: false
scope_note: "Essential nutrient, not in the HMTc toxic-metal panel. Tracked as cross-metal context only."
---

# Zinc

Zinc is an essential nutrient and is not in the HMTc 8-metal toxic-metal panel. The Index nevertheless carries this page because zinc appears in elemental-survey sources alongside the HMTc analytes — many ICP-MS multi-element methods report zinc as part of the standard analyte set, and some toxicology sources covering cadmium and lead also discuss zinc as a competing-uptake or co-toxicity context. Zinc is in scope only as cross-metal context, not as an HMTc certification analyte.

The essential-vs-toxic boundary for zinc is dose-dependent. Adequate zinc intake supports immune function, wound healing, and child growth; insufficient zinc produces deficiency syndromes prevalent in some populations. High-dose chronic intake can cause copper deficiency, immune impairment, and gastrointestinal effects. The HMTc panel does not certify zinc thresholds because the certification program is anchored on toxic-metal contamination, not on nutritional adequacy.

For infant formula and baby food, zinc is included in regulatory composition requirements rather than contamination limits — the question is whether enough zinc is present, not whether too much is. EU compositional rules for infant formula set minimum and maximum zinc levels per 100 kcal; FDA rules similarly. The Heavy Metal Index does not synthesize zinc compositional adequacy because that work belongs to pediatric-nutrition references rather than to a heavy-metals-in-food index.

Where source pages declare `metals:` arrays including Zn alongside HMTc analytes, the routing audit attaches the source to this page automatically. The Index records the zinc values for completeness but does not feed them into the HMTc certification pipeline.

[[sources/ufelle2021-metals-chapter|Ufelle & Barchowsky 2021]] attaches zinc as an essential-metal-with-toxicity-potential node, covering zinc transport, essentiality, deficiency, high-dose toxicity, metal fume fever, neuronal toxicity, and pancreatic toxicity context. It is a toxicology source, not a food occurrence dataset.

## Sources

- [[sources/astolfi2021-italy-powdered-infant-formula-elements]]
- [[sources/jakubowski2012-zinc-cadmium-chapter]]
- [[sources/ufelle2021-metals-chapter|Ufelle & Barchowsky 2021]]

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [c67513a](https://github.com/paleofoundation/heavymetalindex/commit/c67513a) | 2026-05-28 | autonomy: commit pending daemon writes from 10:46Z tick (sync-source-counts + heal-gaps scaffolds + sprint-status) |
| [69e1bd7](https://github.com/paleofoundation/heavymetalindex/commit/69e1bd7) | 2026-05-28 | autonomy: commit pending sync-source-counts + tracker updates from stalled ticks |
| [2e76484](https://github.com/paleofoundation/heavymetalindex/commit/2e76484) | 2026-05-26 | state sync: 16h of daemon-stalled work — ingredient/routing/audit updates from yesterday's interrupted tick |
<!-- END: hmi-page-history -->
