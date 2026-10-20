# Analyte evidence explorer

Planned 18 October 2026 for the existing three-page contract pilot. This extends the occurrence table in the shared page contract; it does not change the universal questions or authorize library rollout.

## Plan before implementation

1. Replace the food-first occurrence table with an analyte-first table. Expand each analyte into separately scoped food-form records. Keep total and inorganic arsenic separate, and likewise mercury and chromium species.
2. Use columns **Analyte**, **Region**, **Finding**, **Certainty**, and **Evidence**. Show material/form under each analyte, collection period with the region, and measurement basis with every finding. Region means sampling market unless an original source explicitly supports production origin. The current pilot supports United States summaries; it does not support regional rankings.
3. Add analyte and region filters, matching-record counts, reset, and expand/collapse all. Filtering changes visibility only, never recalculates or pools scientific statistics. With JavaScript unavailable, all findings remain readable. Use native buttons and disclosure controls, and a narrow-screen layout with explicit field labels.
4. Keep detected ranges, observed maxima, sampling units, denominators, censoring and reporting limits attached to each result. Open the evidence cell to inspect the source, locator, basis and scope limitations. Keep source-family counts separate from sample counts; never total samples across analytes.
5. Display High, Moderate, Low, Very low, Not assessed, or Not applicable. Use an auditable assessment record to calculate a grade, not the number of papers, sample count, source prestige or contaminant concentration. Unknown judgments remain Not assessed. These are certainty labels, never contamination-risk categories.
6. Test species separation, non-detects, filtering, expansion, source links, unit case, responsive presentation, and grade failures. Rebuild only the three pilot pages. Add this working pattern to the rollout plan after verification.

## Certainty calculation contract

The display consumes a question-specific assessment: exact finding scope, method and version, justified starting level, completed search/eligibility status, included source families, domain judgments with references and reasons, and an actual reviewer/date. Occurrence appraisals must cover sampling/selection, analytical validity and censoring, applicability, consistency, precision, and selective reporting. The baseline and domain changes must come from a named, fit-for-purpose method. No default high baseline is assigned to a government survey or default low baseline to every observational design.

The calculation is only bookkeeping: map Very low/Low/Moderate/High to 1/2/3/4, apply the recorded domain changes, and bound the result to 1–4. A missing required field, unresolved domain, incomplete search, or unreviewed assessment returns Not assessed. Store the reasons and expose them beside the grade. This adapter is not a newly validated appraisal instrument and is not labelled formal GRADE. A method may require different domains or prohibit upgrades; that method must be implemented and tested before its records can be admitted. The pilot adapter supports documented downgrades only.

The current pilot has verified descriptive findings but unfinished question-level appraisal. Its real rows therefore remain Not assessed. Test fixtures exercise completed grades without presenting synthetic grades as research results. Formal GRADE's four levels and outcome-specific assessments inform the vocabulary, not an automatic transfer of a clinical-trial hierarchy to food surveys: [Cochrane Handbook, chapter 14](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14).

## Acceptance record

Implemented and verified locally on 18 October 2026. The pattern is adopted for the three-page pilot and is the occurrence-table target for later contract migrations.

| Existing page | Analyte groups | Scoped findings |
| --- | ---: | ---: |
| Cadmium | 1 | 2 cooked-rice findings |
| Rice | 8 | 15 cooked-rice findings |
| Infant Formula, Powder, Non-Soy | 4 | 4 cow-milk powder findings, reported on FDA's prepared-for-feeding basis |

The compiler uses `tools/contracts/pilot/observations.mjs` and `analyte-table.mjs`. Structured observation output is version 2. Certainty assessments have a separate authored input, `data/evidence/contracts/pilot-2026-10-17/occurrence-assessments.json`; it currently contains no completed assessments. The calculator in `certainty.mjs` requires matching scope and source families, search/eligibility records, an attributed review, a justified starting level, every domain judgment and resolving local references. The supported adapter ID is `hmi-occurrence-profile-v1`. Its existence does not constitute methodological validation or scientific approval.

`quartz/components/scripts/analyteExplorer.inline.ts` supplies filtering and group expansion; `quartz/components/styles/analyteExplorer.scss` supplies the table and narrow-container layout. The static comparison uses the same script and styles. The Quartz preview versions its interaction asset so an existing browser tab cannot silently reuse the previous table behavior. Scientific-name expansion skips this component's already explicit names and species labels.

Verification: 88 tests passed, including grade bookkeeping, invalid/missing assessment failures, scoped observations, source links, HTML escaping, units and species labels. TypeScript, contract validation, output drift checks and the isolated Quartz render passed. Actual browser checks covered analyte and United States region filters, collapse all, keyboard expansion, reset, expand all, certainty disclosures, source navigation and return, the Product and Metal pages, and a 390-pixel viewport. With scripts unavailable, all findings remain in the rendered document. These checks establish implementation behavior, not completion of scientific appraisal.

Design references: the user-supplied [RemapRx breast-cancer table](https://remaprx.com/conditions/breast-cancer) screenshot supplied the grouped-disclosure pattern; the [PepsAnon tirzepatide table](https://pepsanon.com/peptides/tirzepatide) and [methodology](https://pepsanon.com/methodology) supplied the readable certainty/evidence treatment. Their disease-specific grades are not imported into HMI.

## Carry forward into the rollout plan

1. Require analyte-first, scope-preserving occurrence displays on each subsequently migrated Metal, Ingredient and Product page. A Metal page may group one species into many materials; an Ingredient or Product page may expose many analytes. Keep the same renderer and assessment gates.
2. Add further markets and production-origin data only from verified source fields. Never infer origin from an author's address, sampling market, publication country or a regulator's jurisdiction. Filtering does not synthesize regional estimates.
3. Finish and review the fit-for-purpose appraisal protocol before publishing graded occurrence judgments. Add actual assessment records and their source/search/review references; do not enter favorable placeholders to populate the badges. Reuse identical scoped assessments across pages rather than grading the same finding differently in each family.
4. Extend beyond this frozen pilot only after the concrete page examples are reviewed. Reconcile additional study families, table exports and broader generator ownership before migration. No full-library generation, deployment or certification changes were performed for this section.
