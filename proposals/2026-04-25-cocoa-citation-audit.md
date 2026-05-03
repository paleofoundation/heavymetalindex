---
type: proposal
subject: Inline-citation audit of wiki/ingredients/cocoa.md
audit_date: 2026-04-25
audited_by: claude (cowork session)
audited_against: rendered output pasted from localhost:8080/ingredients/cocoa
schema_basis: CLAUDE.md Conventions ("Inline citations") and Lint check #13 ("Uncited claims")
status: ready-to-apply
---

# Cocoa page citation audit — 2026-04-25

## Why this audit was filed as a proposal rather than applied as edits

`wiki/ingredients/cocoa.md` was not reachable from this Cowork session — neither the file tools nor the bash snapshot showed it on disk, only `index.md` and `.gitkeep` in the ingredients directory. The audit was performed against the rendered text from `localhost:8080/ingredients/cocoa` that Karen pasted into chat. The findings below are diff instructions to apply via Obsidian Claude, not edits already made.

## Sources referenced in the audit

The audit assumes two source pages exist at the cite keys named in the rendered page's Sources section:

- `[[sources/jecfa-91st-cadmium-2022]]` — JECFA 91st meeting, 2020 (published 2022). Cadmium dietary exposure assessment.
- `[[sources/codex-cccf17-2024]]` — Codex CCCF, April 2024. Report of the 17th Session (REP24/CF17).

If either page does not in fact exist at that cite key, the audit's recommendations using it become `<!-- UNCITED -->` markers instead.

## Findings

### Opening paragraph

Already cites `jecfa-91st-cadmium-2022` inline — compliant.

The CCCF17 reference is currently `(CXC 81-2022, pending ingest)` in parenthetical prose. Replace with an inline link to the source page that names CCCF17:

> Codex CCCF17 initiated new Code of Practice work on cadmium contamination reduction in 2024 with cocoa as the precedent category [[sources/codex-cccf17-2024]] (CXC 81-2022 itself pending ingest).

### Why this commodity accumulates cadmium

Three claims need attention.

The botanical sentence ("Cocoa trees (Theobroma cacao) take up cadmium from soil through their root system") is borderline. It is a definitional statement of mechanism rather than a literature finding, but the rule says mechanism explanations require citation. Add `[[sources/jecfa-91st-cadmium-2022]]` if the JECFA monograph treats root uptake as background; otherwise mark `<!-- UNCITED: root uptake mechanism -->` and queue a soil-plant-transfer source for ingest.

The regional-soil paragraph is uncited and substantive:

> Soil cadmium concentrations in several major cocoa-producing regions, particularly parts of Latin America (Ecuador, Peru, Colombia, the Dominican Republic), are elevated either by natural geology (volcanic soils, cadmium-rich parent materials) or by historical agricultural amendments.

Mark this `<!-- UNCITED: Latin American cocoa soil cadmium drivers — needs Chavez or Argüello source -->` and add to the next-sources queue. The JECFA monograph likely cites the underlying agronomy work; pulling that thread is the right ingest target.

The 2019-vs-2013 JECFA comparison is attributable to the JECFA 91st monograph itself:

> the 2019 occurrence data submitted to JECFA showed higher mean cadmium concentrations in cocoa products than had been recognized in the earlier 2013 JECFA assessment, driven in part by broader geographical sampling.

Append `[[sources/jecfa-91st-cadmium-2022]]` at the end of the sentence.

### Ranges by source, region, and variety

The "Pending ingest" sentence is stub language — exempt.

The JECFA-monograph methodological note is attributable but uncited:

> The JECFA 91st meeting monograph summarizes cocoa cadmium concentrations across the 17 GEMS/Food cluster diets but does not provide per-region mean values in the extract captured to date.

Append `[[sources/jecfa-91st-cadmium-2022]]`.

### Processing effects

Two uncited substantive claims.

> Fermentation, drying, roasting, winnowing, alkalization, conching, and dutching all influence the cadmium concentration in downstream cocoa products (cocoa liquor, cocoa butter, cocoa powder, chocolate).

Mark `<!-- UNCITED: cocoa processing effects on cadmium distribution -->`. The cocoa-processing literature is well-developed; CXC 81-2022 (when ingested) and the Vanderschueren or Kruszewski lines of research will close this. Queue.

> Cocoa powder is a particular concern because the cadmium concentrates in the defatted solids during cocoa butter extraction.

This claim is partially supported by the JECFA 91st monograph's exposure data showing cocoa-powder dominance. If the monograph asserts the partitioning mechanism, append `[[sources/jecfa-91st-cadmium-2022]]`. If it only reports the exposure outcome without the mechanism, mark `<!-- UNCITED: defatted-solids cadmium partitioning mechanism -->` and append the JECFA link to the downstream sentence about exposure.

### Ingredient-derivative risk

> Derivative products of cocoa redistribute cadmium between cocoa solids and cocoa butter during processing.

Same status as the previous mechanism claim — `<!-- UNCITED -->` unless JECFA monograph supports it explicitly.

> Cocoa powder carries the highest cadmium concentration of common cocoa derivatives because the manufacturing process concentrates the cadmium in the defatted solids; cocoa butter, by contrast, carries relatively little.

Same. `<!-- UNCITED: cadmium partitioning between cocoa powder and cocoa butter -->`.

> Dark chocolate (high cocoa solids) therefore carries more cadmium than milk chocolate at equal serving size.

Logical consequence of the preceding claims. If the upstream claims get cited, this inherits the citation. Otherwise mark `<!-- UNCITED: dark vs milk chocolate cadmium load -->`.

> The JECFA 91st meeting finding that cocoa powder alone drives a 97.5th-percentile cadmium exposure of 12 µg/kg body weight per month in European children aged 7 to 11 reflects this concentration effect.

Append `[[sources/jecfa-91st-cadmium-2022]]`. The page names JECFA in prose but the rule requires a wikilink.

### Other metals of concern

The intro paragraph is navigational and exempt.

The Pb subsection has two uncited substantive claims:

> Lead enters cocoa primarily after harvest, through contact with soils, dust, and surfaces during sun-drying and post-harvest handling rather than through root uptake.

Mark `<!-- UNCITED: lead post-harvest pathway in cocoa -->`. The Abt or Mounicou cocoa-lead-pathway literature is the right ingest target. Queue.

> Independent testing programs (Consumer Reports, HBBF) report consumer-relevant Pb levels in dark chocolate and cocoa-powder products.

Names two B-tier source organizations but provides no wikilink. If the wiki has not yet ingested specific Consumer Reports and HBBF chocolate reports, mark `<!-- UNCITED: CR and HBBF chocolate Pb findings -->` and queue the Consumer Reports 2022 dark chocolate report and the HBBF 2017 baby food report (which covers cocoa-containing infant products) as ingest targets. If those source pages already exist under cite keys not visible to this audit, replace the parenthetical with `[[sources/consumer-reports-2022-chocolate]] [[sources/hbbf-2017-baby-food]]` (substitute actual cite keys).

The iAs and tHg "not a notable concern" sentences are null findings. Per the schema, null findings are real findings and should be sourced. Mark each `<!-- UNCITED: null finding for iAs in cocoa -->` and `<!-- UNCITED: null finding for tHg in cocoa -->`. The JECFA 91st monograph's silence on these does not constitute evidence of absence; the right citation here is whatever total-diet study actually measured cocoa for these metals.

The Ni claim:

> Ni: cocoa is among the higher-Ni plant foods. Cocoa-derived products contribute meaningfully to dietary Ni intake, particularly relevant for nickel-allergic consumers.

Mark `<!-- UNCITED: cocoa Ni concentrations and dietary contribution -->`. The EFSA 2015 nickel scientific opinion and the Sharma or Onianwa cocoa-Ni lines are the standard sources. Queue.

The Al claim:

> Al: cocoa is among the higher-Al plant foods because Theobroma cacao roots take up aluminum from acidic tropical soils.

Mark `<!-- UNCITED: cocoa Al uptake mechanism and concentration -->`. The Stahl or EFSA 2008/2013 aluminum opinions are the standard regulatory references; for the uptake mechanism, the soil-science literature on aluminum-tolerant tropical crops is the target. Queue.

### Regulatory limits that apply

The bullet glosses on `jecfa-cadmium-ptmi` and `codex-cadmium-mls` are linked to regulation pages, which is the appropriate form for this section. The 96 percent figure on the PTMI bullet should additionally carry the source citation since it's a quantitative claim:

> [[regulations/jecfa-cadmium-ptmi]] — Not a cocoa-specific limit but the health-based reference value Codex cocoa MLs are aligned against; children 0.5 to 12 can reach 96 percent of the PTMI with cocoa included in total dietary intake [[sources/jecfa-91st-cadmium-2022]].

The EU 2023/915 bullet is "(pending ingest)" — stub language, exempt.

### Sources section

The Sources section at the bottom is intact and lists the two cite keys correctly. Per the new rule, this section is an index, not a substitute for inline attribution — but it remains required. No change needed here.

## Summary of edits to apply via Obsidian Claude

Inline-citation additions (high confidence): 5 places where `[[sources/jecfa-91st-cadmium-2022]]` should be appended to existing prose, plus 1 `[[sources/codex-cccf17-2024]]` addition in the opening paragraph.

`<!-- UNCITED -->` markers to add (claims that need sources we have not yet ingested): 9 distinct claims, spanning Latin American soil drivers, cocoa processing effects, cadmium partitioning between solids and butter, lead post-harvest pathway, third-party Pb testing references, iAs and tHg null findings, Ni concentration claims, and Al uptake claims.

Suggested next ingests prompted by this audit: Consumer Reports 2022 dark chocolate report; HBBF 2017 baby food report; CXC 81-2022 (Codex Code of Practice for cadmium reduction in cocoa); EFSA 2015 nickel scientific opinion; EFSA 2008 aluminum scientific opinion; a soil-plant cadmium transfer review for Latin American cocoa (Chavez et al. or Argüello et al.); a cocoa-processing-and-cadmium-partitioning study (Vanderschueren et al. or Kruszewski).

## Prompt to paste into Obsidian Claude to apply this audit

> Apply the citation audit at `/proposals/2026-04-25-cocoa-citation-audit.md` to `wiki/ingredients/cocoa.md`. For each finding, make the edit exactly as specified. Do not soften any claim, do not strengthen any claim, do not invent citations. Where the audit says to mark `<!-- UNCITED -->`, do so verbatim including the descriptive comment. Where the audit says to append a wikilink to existing prose, append it without otherwise rewording the sentence. After applying the edits, append the queued ingest targets to `wiki/queries/2026-04-25-cocoa-source-queue.md` and append a log entry to `wiki/log.md` with op `lint` and handle `2026-04-25-cocoa-citations`. Commit with the matching message.
