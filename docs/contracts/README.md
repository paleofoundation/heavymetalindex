# HMI question register and page contracts

Version 1.0.0 · adopted 2026-10-17 at the user's request.

Heavy Metal Index maintains decision-relevant answers about contaminants across the food and supply chain. These contracts define what Metal, Ingredient, and Product pages must answer, how evidence supports those answers, and when an answer may be described as assessed. They do not certify the existing corpus as systematically reviewed or claim Cochrane affiliation.

## Authoritative files

- [Implementation plan](implementation-plan.md): current priorities, completed local presentation pilot and library roadmap; [next-chat handoff](next-chat-handoff.md).
- [Rice evidence expansion](rice-evidence-expansion.md): broader source-informed scientific scope, 27 exploratory themes drawing on 117 source records, source-correction findings and prioritized work before a substantive manuscript or wider rollout.
- [Question register](question-register.md): readable inventory of 108 required questions, 36 per family.
- [Metal page contract](metal.md): substance/species and cross-food synthesis.
- [Ingredient page contract](ingredient.md): commodity/material occurrence, pathways and controls.
- [Product page contract](product.md): finished-product category and subcategory decisions.
- [Shared evidence and answer contract](evidence-and-answers.md): methods, states, metadata, evidence tables and release gates.
- [Analyte evidence explorer](analyte-explorer.md): relative findings, region/year/reference filters, dataset overlay and rollout requirements.
- [Migration and rule changes](migration.md): superseded rules, compatibility and rollout acceptance.
- [Machine register](../../data/evidence/contracts/question-register.json): authoritative IDs, questions, section order, requirements and legacy mappings.
- [Page-question record schema](../../data/evidence/contracts/page-question-record.schema.json): machine-readable storage contract for per-page assessments.

Edit the JSON register to change questions; run `npm run contracts:generate` to refresh the readable register and the generated question tables in the three contracts. IDs are permanent: retire an ID with an explicit versioned migration instead of silently reusing it for a different question. A scope-changing revision requires a contract version change and reassessment of affected records.

## Authority and boundaries

These contracts supersede older HMI instructions on scientific page coverage, study-count confidence, automatic evidence gaps, source-count page promotion, default top-cited-source synthesis, and mandatory public standards arithmetic. The user expressly requested correction of rules that do not support the intended evidence standard. AGENTS.md, CLAUDE.md, OPERATING.md and page-templates.md point here for that authority.

Keep the existing `wiki/metals`, `wiki/ingredients`, `wiki/products`, `wiki/sources`, `wiki/synthesis`, `wiki/testing`, `wiki/mitigation`, `wiki/supply-chain`, `wiki/health`, `wiki/regulations` and `data/evidence` structure. Do not create a second source catalog, change URLs wholesale, or infer new certification categories from scientific page scopes.

The HMTc program's standards governance, numeric limits, private brand-data boundary, primary-source provenance, and public/private firewall remain in their existing owners. A requirement for numeric certification cells is not a requirement to invent an HMI occurrence value or regulatory limit. An HMI page may explicitly report unknown or unverified information.

## How to use

1. Identify the page family and exact material/entity scope.
2. Instantiate all 36 family questions as `unassessed`, preserving applicable historical evidence as candidates.
3. Map existing claims to question IDs and canonical synthesis records; retain source locators, original values and review history.
4. Resolve questions through the shared evidence contract. One incoming source can advance relevant questions without changing untouched questions.
5. Compose the page in its contract order. Use role-specific decision implications derived from the same evidence.
6. Validate records, headings, references and evidence support. A structural pass is not scientific approval.

A page is complete only when every mandatory question has a current reviewed answer, reviewed evidence gap, reviewed uncertainty/conflict, or justified reviewed not-applicable determination. Completion is conditional on the declared search scope and cutoff date. Sparse evidence can coexist with completed assessment; source-access failures and unassessed questions cannot be relabelled as completed gaps.

The [shared Sources index](source-index.md) defines source catalogue ownership, search and the distinction between verified citation placement and discovery relationships.

## Commands and current implementation

- `npm run contracts:generate` writes only the readable register and generated question tables.
- `npm run contracts:check` checks register integrity, document synchronization, and all pages that opt into version 1.0.0, listed in `data/evidence/contracts/adopted-pages.json`, including their question records and ordered nonempty sections.
- `npm run contracts:test` exercises gap, confidence, review, applicability and completeness failure cases.
- `node tools/contracts/scaffold-question-record.mjs <metal|ingredient|product> <slug> <output.json>` creates an unassessed 36-question record without overwriting an existing file or modifying a public page.

Adopted pages declare `page_contract_version: "1.0.0"` and a `question_record` path, and are explicitly registered in `data/evidence/contracts/adopted-pages.json`. Legacy pages are migration candidates, not automatically compliant. Three existing pages are now opted in as a local pilot: Cadmium, Rice and Infant Formula, Powder, Non-Soy. They remain partial assessments. See [pilot results and commands](pilot-2026-10-17.md). The broader rendering and ingestion engines have not all been migrated; the migration document identifies remaining work.
