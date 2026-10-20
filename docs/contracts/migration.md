# Contract migration and superseded rules

Version 1.0.0 · 2026-10-17.

## What this release establishes

This release adopts the question inventory, three definitive scientific page contracts, shared evidence rules, a per-page record schema and validation/scaffolding tools. It does not re-review the existing library, relabel historical confidence, instantiate every page's answers, publish new scientific conclusions, change certification limits, or activate unattended work.

The contract files belong to the existing HMI repository, retaining its directories and URL identities. The historical desktop path in older operating guidance is not required to consume the contracts.

## Rule replacements

| Retired rule | Replacement | Implemented locations |
| --- | --- | --- |
| Confidence follows 1–2 / 3–10 / >10 sources | Scoped question/outcome appraisal with method, rationale and review. Counts remain descriptive. | CLAUDE Part 9/13; OPERATING clarification; conventions; page templates; shared contract; product-summary confidence output. |
| Touching one analyte advances all ten | Advance only supported questions; mixed pending/in-progress/populated states are legitimate. | Page templates; AGENTS; lint documentation; coverage audit; coverage sweeper. |
| Missing analyte in an incoming source becomes a reviewed gap | Only an executed search and screening process can establish a searched gap. Access failures remain unresolved. | Shared contract; record schema/validator; coverage sweeper no longer fabricates review dates or gaps. |
| Two sources trigger populated low-confidence profile and percentiles | Question-driven synthesis; no mandatory percentile or minimum paper count. | CLAUDE Part 9; shared contract. |
| Incremental update uses incoming source plus five most-cited papers | Account for all still-eligible evidence; reuse verified extraction without selective citation. | CLAUDE Part 9; shared contract. |
| Five papers promote a scientific page | Distinct scope and completed question/review gates; sparse reviewed evidence can be complete. | CLAUDE Part 10; page-creation policy. |
| Required public standards-math section | Product requirements describe literature, controls, testing and verified instruments. | Product contract; page templates; product heading audit. |
| Source tier decides evidence strength | Source class, methodological quality, applicability and certainty are separate. | Conventions; shared contract; CLAUDE/OPERATING clarifications. |
| Author scope automatically determines exact row fit | Reconcile methods, tables, footnotes and author scope on both matrix and format axes. | Page templates; shared contract. |
| Complete means headings present or high confidence | All required questions have current reviewed dispositions; uncertainty remains visible. | Register, family contracts, state validator and adoption checks. |

The September certification method locks still govern their own program. Scientific unknowns remain unknown. The contracts do not authorize new certification read-across values, change product-category locks or modify private brand-data handling.

## Existing content mapping

The generated section tables in each contract identify the legacy material that maps to every new section. Preserve the existing source and evidence IDs, URLs, useful anchors, exact numbers, original units and passage provenance. Do not preserve duplicated prose merely to maintain token counts; preserve the underlying claims and evidence, or record a justified correction/withdrawal. New scientific content requires review rather than a layout-only migration claim.

Keep generator-owned markers intact. Move source inventories and broad context into subordinate evidence sections only after updating the producer. On an adopted page a legacy generator must not reintroduce old H2 sections or count-derived certainty. A page with an incompatible generator remains a migration candidate until the producer is corrected and tested.

## Adoption procedure

1. Inventory the existing page's exact scope, source records, generated regions and claims. Do not infer review completeness from their presence.
2. Create an unassessed 36-question record with `tools/contracts/scaffold-question-record.mjs`. For example:

   ```sh
   node tools/contracts/scaffold-question-record.mjs ingredient rice data/evidence/questions/ingredient/rice.json
   ```

3. Map claims and findings to the questions. Link existing synthesis records where genuinely applicable; otherwise record the needed assessment. Recheck historical zero-study gaps, paper-count certainty labels and pooled values before adopting them.
4. Define/execute bounded searches and assessment methods, resolve applicability, and record reviewed answers, gaps or uncertainty. Maintain partial status where work is unfinished.
5. Update affected generators before the public page. Apply the twelve ordered H2 roles; preserve meaningful old anchors, references, source legend and history. Add the contract metadata and question-record path.
6. Add the canonical page path to `data/evidence/contracts/adopted-pages.json`. The manifest is the explicit adoption inventory; it avoids scanning or reading the whole legacy library merely to validate documentation.
7. Run `npm run contracts:check`, applicable legacy guards, source/claim verification and the normal page-release checks. Confirm that a generator rerun preserves question coverage and scientific statements.
8. Record the actual review/version and dependent pages. Only then mark `coverage_state: complete` if every question is reviewed. Contract adoption alone never establishes formal systematic-review status.

Start with rice, cocoa and spinach, related metal pages, and a finished-product subcategory with clearly separated formulation and preparation states. This is a representative migration order, not a scientific risk ranking.

## Implemented checks and limits

`contracts:check` checks the register and generated documents/schema, then reads the explicit adoption inventory. It validates each registered page's family, metadata, ordered nonempty core headings and all required question states. Ingredient and product heading audits also route detected v1 pages to this validator. Zero pages are registered on initial release, so the check cannot be read as validation of the existing public library.

The coverage audit checks legacy profile schema and body-table presence without rejecting mixed research states. The legacy coverage sweeper no longer advances pending cells, invents reviewed dates or labels zero-source cells as searched gaps, and skips v1 pages. The product summary generator no longer computes public certainty from source count. No generated public pages were rewritten as part of these tool corrections.

The record schema checks shape; the validator adds cross-field rules for gaps, review, certainty, revision order, question ownership and completeness. Referenced evidence/search/review record contents and passage support still require the explicit scientific gates. No validator here proves that the stated review occurred, that a search was exhaustive, or that an intervention works.

## Remaining migration work (not implemented by this contract release)

These are concrete follow-on engineering tasks, not alternative governing rules:

- Replace `tools/autonomy/completion-matrix.mjs` and downstream count-driven dashboards/queues with question-state coverage. Their high-confidence/source-count targets are legacy prioritization outputs and must not be used as evidence-completion criteria.
- Replace remaining count-based heuristics in `tools/evidence/build-ingredient-scorecard.mjs`, `tools/evidence/build-lab-comparator-context.mjs`, and profile-population/repair tools with documented question-specific assessments. Until migrated, do not promote their outputs as v1 certainty or searched gaps.
- Bind canonical synthesis, search, screening and review references to verified records and implement reference-resolution/correction propagation across every dependent page. The contract supplies fields and required behavior, not a completed synthesis service.
- Update product/ingredient generators to preserve the new order, scope-specific tables and answer projections. Retire historical staff-snapshot percentile-limit prose in `tools/evidence/apply-product-hmtc-evidence-summaries.mjs` through the standards-maintenance workflow; it was identified but no threshold-setting behavior was changed here.
- Audit historical public tables, source-count badges, gap labels and source-tier conclusions. Preserve and reassess their evidence rather than bulk relabelling them or applying a global grade conversion.
- Calibrate fit-for-purpose appraisal methods and obtain recorded scientific/methodological review before using a formal systematic-review label.

Prioritize these migrations through the pilot. The new contracts prohibit treating old automated outputs as scientifically reviewed simply because they pass legacy checks.

## Local pilot implementation — 17 October 2026

The [three-page pilot](pilot-2026-10-17.md) now adopts Cadmium, Rice and non-soy powdered infant formula. A scoped compiler generates their pages, question records and occurrence/control tables. Seventeen legacy writers respect its ownership; the presentation layer preserves contract order. Input changes trigger reassessment rather than silently refreshing conclusions. These fixes apply to the pilot; the broader dashboard, lab comparator and library migration tasks above remain open. No full-library regeneration or deployment has occurred.
