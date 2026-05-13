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

### Egypt regulatory baseline as a multi-jurisdiction interpretation hazard

Anchor sources (meta-finding about corpus pattern, not a single-paper thesis):

- [[../../wiki/sources/ibrahim2024-heavy-metals-egyptian-milk-cheese|Ibrahim 2024]], [[../../wiki/sources/ibrahim2025-metals-flavored-dairy-egypt|Ibrahim 2025]], [[../../wiki/sources/kamouh2024-heavy-metals-chicken-meat-egypt|Kamouh 2024]], [[../../wiki/sources/hussein2024-toxic-metals-canned-fish-egypt|Hussein 2024]], [[../../wiki/sources/erol2025-turkish-cheese-metals|Erol 2025 Turkish cheese]] (geographic neighbor, similar regulatory regime).
- Additional Egyptian and Middle Eastern food-safety surveys throughout batches 6-9.

Thesis: A cluster of Egyptian and neighboring-jurisdiction food-safety surveys document elevated Pb, Cd, and other metal concentrations relative to EU or Codex limits. The framing in most of these papers reports the exceedance against EU limits even though Egyptian and Turkish national limits are systematically lower or absent for the matrices studied. A reader of the wiki, encountering many Egyptian papers reporting "exceedance," may incorrectly infer that Egyptian food supply is uniquely contaminated when the operative finding is that Egyptian regulatory baselines do not yet match EU or Codex frameworks, and that papers are using EU as a comparative reference rather than enforcing it.

Why this matters:

- Brand-legal: avoids the wiki being read as making a jurisdiction-specific contamination claim that is actually a regulatory-floor artifact.
- Regulator: case for harmonization between national food-safety reference values and Codex.
- Educator: introduces the methodological care needed when reading multi-jurisdiction occurrence data.

Status: **recommendation — do not promote as a synthesis findings page.** The Egypt-baseline observation is a methodological note about how to read multi-jurisdiction occurrence data, not a finding about contamination patterns or regulatory architecture. It fails the third promotion criterion ("the finding is not obvious from any single source page"): once a reader knows that Egyptian national reference values differ from EU and Codex limits, the observation that papers using EU as a comparative benchmark report "exceedances" follows directly without any synthesis pass adding value. The pattern repeats across many jurisdictions (Iran, Pakistan, Nigeria, multiple sub-Saharan African countries); singling out Egypt risks framing it as a country-specific issue when it is a generic methodological care item.

Recommended placement instead:

1. Add a one-paragraph methodology note to [[../../wiki/CLAUDE|CLAUDE.md]] Part 14 (conventions) covering how multi-jurisdiction occurrence data should be reported on wiki source pages: state the reference value the paper compared against; state the operative national reference value for the matrix in the originating jurisdiction (if known); flag where the two differ materially. This is a one-paragraph addition with no synthesis-page overhead.

2. Add a sidebar to [[../../wiki/regulations]] or to a dedicated [[../../wiki/regulations/multi-jurisdiction-comparison]] page once enough national reference-value pages exist to support it. This is the right home long-term and is parallel work to the synthesis-page architecture, not a substitute for it.

3. On each product-category and ingredient page where multiple non-EU non-Codex jurisdictions contribute evidence, the page's methodology section should briefly note that exceedance framings reflect the cited reference value, not necessarily the operative national reference value. This is per-page work that happens during the synthesis pass on each ingredient or product, not synthesis-page work.

Resolution: this entry can be retired from the candidate queue. Implementing the three recommendations above is the right follow-up, but each is a small ingest-time or methodology-time intervention rather than a synthesis page in its own right.

## Promoted

### Climate adaptation creates new heavy-metal trade-offs

Promoted 2026-05-13. Anchor sources: Seyfferth 2025, Limmer 2024, Wu 2025. Synthesis page: [[../../wiki/synthesis/climate-metals-tradeoffs|climate-metals-tradeoffs]].

### Subsistence fishing methylmercury as a global vulnerable-population pattern

Promoted 2026-05-13. Anchor sources: Li 2024 (PNAS), Wu 2025 (PNAS), Auzier-Guimarães 2025. Synthesis page: [[../../wiki/synthesis/subsistence-fishing-mehg-disparity|subsistence-fishing-mehg-disparity]].

### Single-metal regulatory limits systematically underprotect

Promoted 2026-05-13. Anchor sources: Suomi 2023 (Finnish cumulative HI), JECFA 91st 2022 (Cd PTMI saturation in children), EFSA 2024 (iAs MOE below 1 across adult European range). Synthesis page: [[../../wiki/synthesis/combined-exposure-underprotection|combined-exposure-underprotection]]. Note: cite-key for the Suomi anchor is `suomi2023-finland-dietary-metals-cumulative` (not `-cumulative-dietary-hi` as originally listed in the pending entry).

### US chocolate lead temporal decline

Promoted 2026-05-13. Anchor sources: Abt 2018 (US baseline), Hands 2024 (multi-year trajectory), Zhao 2024 (global mechanistic context). Synthesis page: [[../../wiki/synthesis/us-chocolate-lead-temporal-decline|us-chocolate-lead-temporal-decline]].

## Workflow notes

When a candidate is ready to promote, the workflow is:

1. Move its block from `## Pending candidates` to `## Promoted` with a brief one-line summary and a link to the synthesis page that will be created.
2. Draft the synthesis page at `wiki/synthesis/<topic-slug>.md` using the template established in [[../../wiki/synthesis/climate-metals-tradeoffs|the climate-metals page]].
3. Add the new page to the index in `wiki/synthesis.md` under `## Synthesis findings pages`.
4. Commit with a message like `synthesis: promote <topic> — N anchor sources, brand-legal-facing`.
5. The synthesis page is provisional. Re-synthesis is expected when two corroborating studies enter the corpus after promotion, or when an anchor source is contradicted by later evidence.
