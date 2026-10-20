# Current priority — Rice scientific expansion

Latest user constraint — 19 October: preserve the hero, byline, page snapshot and persistent right sidebar with ZERO deviation from the user's saved screenshots. Follow the [preservation requirement](implementation-plan.md#preserve-the-current-hero-and-right-sidebar--19-october-2026), which supersedes earlier hero/byline redesign instructions. The temporary evidence overlay is separate and remains within the revision scope. Existing pilot hero changes still need comparison and reconciliation against the current-site baseline before acceptance. Keep the canonical References design.

Latest planning direction — 19 October: this is a new information-display plan, not just a restyling of existing copy. Decide whether each item deserves public display before selecting its location. Use the [shared information-selection rule](evidence-and-answers.md#information-selection-and-placement) and the [planning priority](implementation-plan.md#information-selection-comes-before-layout--19-october-2026). Reader purpose, support, uniqueness and consequence of omission govern whether to show prominently, explain in context, place in hover/sidebar, keep only in the assessment record, or omit. Drawers are not repositories for every unnecessary paragraph. This supersedes earlier fixed visible-content/count requirements while preserving scientific records and stable anchors.


Revised 18 October 2026. The user requires the scientific plan to incorporate substantially more of the collected findings before judging the final page. The local presentation pilot is implemented, including prose-first articles, evidence explorers/drawers and the established grouped left sidebar with one- or two-word labels. Preserve that work. The latest Rice organization and reusable presentation rules are recorded below; outstanding scientific work remains explicit.

Read [the implementation plan](implementation-plan.md), then [Rice: evidence-informed scope and gap plan](rice-evidence-expansion.md). The latter is the current execution brief. Its broad local inventory and exploratory thematic map are complete as planning artifacts; full question-specific eligibility, primary extraction, critical appraisal and synthesis are not complete.

## What the planning pass established

The inventory scanned 3,304 canonical source records and identified 319 broad candidates: the 262 retained records plus 57 more. The revised map develops 27 themes from 117 source records, including 108 not cited in the original nine-reference pilot. It adds 20 records to the earlier 97-record map, with concrete source findings, organoarsenic/processing transformations, integrated field programmes and exposure attribution. These are overlapping source-record counts, not eligible or independent-study totals. Sixteen candidates are mechanical bulk records requiring scientific adjudication. Eight prior primary-text/abstract spot checks identify useful extensions, source-summary errors/ambiguities and study-overlap risks. Eleven additional internal source-summary checks identify claim-level holds; these are not fresh primary checks or proof that the original papers contain those errors. Sixteen priority gap workstreams and six concrete work packets now define the next outputs and acceptance checks. Existing JSONL/CSV registers also contain candidate extraction; source-identity matches do not establish Rice row-fit.

The expanded scope includes global/regional occurrence, exact arsenic and mercury species, co-metals, grain fractions and derivatives, microbial/plant/redox mechanisms, cultivar selection, multiple soil and processing controls, nutrition/yield/resource trade-offs, bioaccessibility, human biomarkers/outcomes, analytical fitness, current sourcing and exact instrument applicability.

Carry forward the [pilot internal-linking rules](implementation-plan.md#internal-linking): automatic first-mention links stay enabled, relevant relationships receive explicit contextual wikilinks, and rendered canonical destinations and anchors require navigation checks. Preserve exact species/material scope, table design and short sidebar labels. This is a required implementation and publication check; documenting it does not establish that the current page has passed it.

## Current files

- 19 October 2026: Rice contamination now opens with one short paragraph; detailed occurrence interpretation opens in the existing right evidence overlay. The default comparison is same-study brown/white rice: matched FDA cooked-food collections and Tran’s explicitly verified same-plant reported means. Year and region modes remain. Preserve source/basis/species matching, censoring, shared-genotype identity and the distinction from a causal milling effect. Methods are in `relative-findings.md#rice-type-comparisons-19-october-2026`.

- Local rice audit follow-up (18 October 2026): selected EU Cd/iAs/Ni and FDA infant-cereal provisions now have primary snapshots, register IDs and explicit status/basis in `rice-depth/regulatory-findings.json`. The supplier brief is downloadable. `rice-depth/limmer2026-findings.json` records an Arkansas counterexample to an inevitable irrigation Cd rise; 103 versus 107 field-years and unextracted arm uncertainty remain held, so the new source adds narrative context rather than a quantitative table row. Current reference count is 50 works. `rice-depth/audit-resolution.json` distinguishes earlier fixes from this follow-up. Full scientific assessment and ingestion/search work remain open.

- Latest requested execution: [Rice conclusions-first plan](rice-answer-first-plan.md), preserving the tables, fourteen canonical supplementary FAQs, short sidebar and scientific qualifications. Summary now precedes Scope in the ingredient register; main reader questions remain visible. Preview contextual targets, comparison interpretation and payload cleanup are part of this acceptance, not a new scientific review.

- Latest presentation contract: [ingredient reading pattern](ingredient-reading-pattern.md). Rice uses concise scope/summary, styled supplementary FAQs, stage-led mitigation with paired analytes, and scope/testing reference tables. Do not revert to analyte-led mitigation or unstyled disclosures. These presentation changes do not complete the outstanding scientific workstreams.

- Scientific brief: `docs/contracts/rice-evidence-expansion.md`.
- Inventory command: `node tools/contracts/audit-rice-evidence-depth.mjs`.
- Generated inventory/excerpts: `data/evidence/contracts/pilot-2026-10-17/rice-depth/summary.json`, `source-map.json`, `question-map.json`, `csv-register-join.json`.
- Authored exploratory themes: `rice-depth/planning-findings.json` in that same pilot directory.
- Primary checks: `rice-depth/primary-spot-checks.json`; new internal summary consistency holds: `rice-depth/source-summary-audit.json`.
- Priority work/acceptance: `rice-depth/gap-register.json`.
- Canonical source records remain `wiki/sources/`; existing factual registers remain `data/evidence/`. Do not create a second canonical catalog.
- Current authored pilot answers: `data/evidence/syntheses/pilot-*-v1.json`; compiler: `tools/contracts/pilot/compiler.mjs`. Markdown and question records are generated outputs.
- Local Rice example: `http://127.0.0.1:8766/quartz/ingredients/rice.html`. Existing comparison and mitigation hubs remain available.

## Continue in this order

1. Execute packet A in the revised scientific brief: reconcile the P0 source-summary corrections, the 11 new internal checks, access/provenance and study families. The known FDA FY2018 all-below-100 statement conflicts with the official maximum of 142 ppb. Other primary checks identify source-grouping, dispersion, model, biomarker and metadata clarifications. Use exact originals; do not guess disputed values. Preserve corrections and dependent records.
2. Specify question-level eligibility, grouping, appraisal and synthesis protocols; label this completed exploratory mapping retrospectively rather than calling it preregistered.
3. Give every potentially relevant local candidate an auditable disposition, retrieve originals/supplements and search beyond the local corpus reproducibly. No top-cited-source cap, paper-count certainty or arbitrary citation target.
4. Reconcile existing extraction with exact material/species/basis/statistic/sample scope; include null/adverse findings and resolve overlap between reviews, compilations and original reports.
5. Execute packets B–F and develop an integrated critical Rice manuscript and its scientific tables. The 36 questions impose no one-paragraph budget. Explain convergence/disagreement, mechanism, trade-offs, applicability and outcome-specific uncertainty. Keep relevant derivative and finished-product detail in existing destinations.
6. Verify scientific support and publication behavior separately; keep actual review attribution and incomplete states explicit. The expanded 45-reference presentation remains a partial scientific assessment.

Routine evidence work is agent work; involve the user only for unavailable access, policy/interpretation exceptions and the independent review actually being claimed. Preserve all unrelated dirty work, immutable before archives, source/evidence identities and the scientific/certification boundary. Do not run a full library prebuild, deploy, or initiate a library-wide rollout as part of this local scientific expansion. The user requested evidence-informed planning before those steps.

## Relevant existing commands

`npm run contracts:check` validates the register and adopted-page structure. `npm run contracts:pilot:check` detects stale pilot outputs. These checks are not scientific review. Run `npm run contracts:pilot:build`, scoped tests and the isolated preview/Quartz commands only after changing their owned scientific or rendering inputs; no page rebuild is required for planning documentation alone.


### 19 October: named varieties and canonical comparison buttons

Rice now has 59 occurrence rows and 51 cited works. Eight FDA 2013 iAs category means add basmati, jasmine, brown, instant, parboiled and white grain lengths. Original 45 g dry-rice serving values are preserved and explicitly converted; no cultivar effect is inferred from unequal, mixed-origin/milling categories. Primary PDF/text/provenance: `raw/manual-fetch/rice-varieties-20261019/`. Structured design metadata gates source-summary comparisons; all eight categories appear together in their overlays. No Cd or tAs variety values were invented.

`resultButton` is canonical for occurrence comparisons and mitigation effects. Use concise direction/reference labels; percentages, counts, source contrasts and interpretation stay in the right overlay. Mitigation considerations also open the overlay. Preserve paired adverse analyte directions and native source disclosures. This instruction supersedes earlier numerical effect-button/Low–Moderate–High presentation notes.


### Button correction — latest user instruction, 19 October

Restore the earlier warm-gray/blush/burgundy Low / Moderate / High buttons with three-bar icons. `ratingButton` is the canonical shared component. Longer comparator/direction labels and all numerical estimates belong in the adjacent information-icon hover or right sidebar. This supersedes the descriptive-label and reference-band button notes above. Existing classification remains unchanged; unrateable comparisons and intervention effects use the same neutral component with a dash, not an invented rating. Named-variety comparisons and all original evidence remain available in hover/sidebar content.


### Default rice-type ratings fixed — 19 October, latest correction

The default `forms` view now has 12 rated findings: four FDA TDS cooked-food tAs/Cd comparisons retain the reference-group quartiles that the form comparator previously deleted, and eight FDA 2013 iAs categories use the other seven category averages as an explicitly separate category-position reference. Each category is weighted once; target excluded; no cross-study, analyte, basis or statistic mixing. The band describes category averages, not an individual-sample distribution or safety. Pairwise comparisons remain intact and separately labelled in hover/sidebar. All three compact Low / Moderate / High labels are present in the default generated page. Two Tran means and unsupported/censored references remain neutral. No effect-size thresholds were invented for mitigation. This supersedes the prior state in which every default comparison was neutral. Regression tests exercise the default view and category-reference eligibility.


### Quick Read retained in the revised rice page — 19 October

The synthesis `quick_read` field owns a cited lead and three facets using the original on-brand `.hmi-quick-read` panel. It appears before Decision summary, with inline canonical links and the shared bibliography. Existing questions, conclusions, diagrams and comparison explorers remain intact. Three columns stack on phones. Keep this panel when regenerating the pilot.


### Opening uncertainty paragraph removed — 19 October

The user asked whether the generic partial-assessment paragraph was necessary. It duplicated specific limitations already in the evidence review and source contexts, so the third summary answer now uses `presentation: record_only` with `public_context_section: assessment`. The canonical answer, 36 anchors and its control-stage diagram remain; only the repeated opening paragraph is omitted. Preserve finding-specific caveats and partial review metadata.

### Plain scientific style and Rice headings — latest 19 October instruction

The user wants thorough, useful scientific content with minimal visual clutter, keeping detailed graph/table nuance in right evidence sidebars. Rice now has authored `display_title`, `search_title` and role-keyed `section_headings`; generic Decision summary becomes Rice overview. Identity, contamination, mitigation/remediation and testing headings name rice, while other headings and short navigation remain concise. The overview/description explicitly name arsenic, cadmium, lead, nickel, chromium and mercury, backed by existing profile evidence. This is not a keyword-density exercise or ranking promise. Old section anchors and all 36 question IDs remain. Contracts validate presentation titles without changing the universal question roles.

The implementation plan now defines a future DOI-facing scoped evidence review: plain title/abstract, scope, supported findings and interpretation, source selection/methods, exact measurements and comparisons, references, authorship/version/corrections, and a complete static/archive edition containing sidebar evidence. Do not mint a DOI, publish, invent peer review, claim completed systematic assessment or change certification in this presentation task.
