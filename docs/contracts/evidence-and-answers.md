# Shared evidence and answer contract

Version 1.0.0 · 2026-10-17. Applies to the Metal, Ingredient and Product contracts.

## 1. What is being maintained

The question register contains universal question templates. A page-question record instantiates those templates for a defined page scope. A canonical synthesis record supplies the scoped scientific answer and can be reused by several page-question records with an explicit applicability rationale. Source findings remain in the existing evidence registers; publication identity remains in `wiki/sources/`. A page is a compiled presentation of assessed answers, not an append-only sequence of paper summaries.

Use `data/evidence/questions/<family>/<slug>.json` for per-page question records and stable synthesis IDs resolved through `data/evidence/syntheses/` or an existing versioned synthesis register. Canonical synthesis narratives can continue to live in `wiki/synthesis/`. Refer to existing `claims.jsonl`, values, routing audits and `review_events.jsonl` rather than copying their identities into parallel catalogs. These synthesis-store paths are the storage contract for subsequent implementation, not a claim that every legacy record already resolves through them.

Each answer must identify the exact chemical species, material/form, preparation and measurement basis, geography/market, time period, supply-chain stage, population or exposure route, comparator and outcome as relevant. Explicitly record unknown or not-applicable dimensions. An umbrella question may need several scoped synthesis records. If those differ, show the differences instead of averaging them into an unqualified answer.

### Scientific depth before presentation acceptance

Plan a substantive page from the full potentially relevant evidence set, rather than using a few illustrative sources to define its final scientific scope. An existing-library evidence map should identify findings, contradictions, source/study families, material and outcome boundaries, extraction/access problems and questions needing external searches. Account for every potentially relevant local record with an auditable disposition; this does not replace a reproducible literature search. Reconcile stored summaries with primary sources before promoting disputed claims.

The universal questions are an internal coverage framework. They impose no one-paragraph-per-question limit, reference quota or top-cited-source cap. The public synthesis should compare the eligible findings, explain convergence and disagreement, examine null/adverse results and develop the relevant mechanisms, effect modifiers, trade-offs and decision implications. A catalogue, populated headings, a short answer for every ID, added citations or passing implementation tests cannot establish adequate scientific depth. Source use follows applicability and scientific contribution, not a target count. The [Rice evidence expansion plan](rice-evidence-expansion.md) applies this requirement to the current pilot without changing question IDs or family scope.

### Information selection and placement

Before arranging content, decide whether it belongs on the public page. Ask what it helps the intended reader understand, compare or do; whether the evidence supports it; whether it adds something distinct; and whether leaving it out would change a reasonable interpretation. Information is not entitled to display merely because it exists in a source, an earlier page or the coverage register. Assess usefulness and scientific accuracy together.

| Disposition | Use when |
| --- | --- |
| Quick Read or opening summary | The information provides the main orientation or changes the reader's immediate understanding or next step. |
| Main section prose | It explains a substantive finding, mechanism, applicability boundary or consequential trade-off. Keep a qualification beside the claim when it is needed to avoid a misleading reading. |
| Compact table cell or rating | It is essential to identify or compare the row. Preserve the established concise controls and any immediately necessary adverse-outcome indication. |
| Information-icon hover, focus or tap | A short reference definition, numerical contrast or explanation helps interpret the adjacent result. |
| Right evidence sidebar | The reader benefits from inspecting measurements, methods, denominators, uncertainty, operating conditions or provenance in detail. |
| Supplementary question | It answers a distinct likely reader question that the preceding explanation has not already answered. |
| Assessment record only | It is needed for scientific coverage, review or traceability but adds no useful public explanation in that location. Retain its disposition and any necessary public context. |
| Omit from the public page | It is redundant, generic, distracting, unsupported or lacks a clear reader purpose. Preserve underlying source/audit records as appropriate; do not turn a sidebar into a dumping ground. |

There is no requirement to display every assessed answer, disclaimer, FAQ or available number. Question coverage and review completeness remain separate from public information hierarchy. Do not repeat a general partial-assessment statement in the opening when specific limitations are already explained where they affect the findings. Do not remove a material qualification simply to shorten the page or imply stronger evidence, safety or completeness. Record a brief reason for substantive inclusion, relocation or omission so regeneration preserves the editorial judgment.

### Public reading experience

For ingredient pages, the [ingredient reading pattern](ingredient-reading-pattern.md) specifies introductory prose followed by either section-specific accordions or a table, stage-led mitigation comparisons and selective table use. Questions use the established styled accordion, rather than unstyled native disclosures. The introduction synthesizes the main findings and their implications so it is useful on its own; accordions or a table provide supporting evidence and detailed explanation. Summarizing a finding and then explaining it is appropriate. Avoid duplicating sentences or full explanations, and keep each claim with its necessary qualifications.

Present the assessed evidence within the twelve required sections. The 36 questions are the coverage and traceability framework; they do not require 36 visible question headings or accordions. Explain each finding, its applicability, uncertainty and practical implication in its chosen location, with citations attached to the claims they support. For an ingredient section with accordions, the introduction gives the general findings while the accordions develop their evidence, mechanisms and nuance. A topic preview alone is insufficient; avoid repeating detailed explanations at both levels. Keep the stable question anchors and structured dispositions even when their question wording is not displayed.

Place occurrence and mitigation explorers after the prose that explains what the reader can learn from them. For ingredient sections, follow the updated reading pattern: substantive prose first, using 1–3 introductory paragraphs according to the material, followed by either a table or section-specific accordion questions, never both. Three paragraphs is not a target or minimum; these rules govern presentation and must not limit the critical information retained. Questions must belong to the section that answers them; general reader FAQs have a dedicated section. FAQs alone are exempt from the introductory-prose and five-question rules: the heading leads straight into questions, with no introductory or empty-state explanation, no question-count cap and no table-conversion requirement. Use only the related questions needed, often up to three, rather than filling a quota. Let substantive overview prose occupy the larger share when paired with accordions; four or five questions need a more robust overview, without filler or repeated detailed answers. If covering the remaining material needs six or more questions, prefer a table where the information supports useful parallel comparison. Do not remove critical evidence or qualifications to meet a paragraph or question count. Source methods, values and extraction locators remain available in their evidence context. Main conclusions and any qualification or trade-off needed to avoid misleading the reader remain visible with the affected claim. Other limitations and assessment details belong in their relevant evidence context when useful; generic notices are not mandatory opening paragraphs. Use one-word main left-sidebar labels wherever possible, reserving two- or three-word labels for expandable subsections. Full scientific section headings belong in the article and remain available as link titles; the prose-first rule does not flatten sidebar groups or lengthen navigation labels.

Follow the [internal-linking rules](../writing-style.md) and [canonical wikilink conventions](../conventions.md): retain automatic first-mention links for unambiguous concepts and add explicit contextual links where relevant relationships cannot safely be inferred. Resolve exact species, material and derivative scope before choosing a destination. Concept links supplement scientific citations. Publication checks must follow rendered canonical links and anchors, verify target scope and availability, and confirm generation retains the links. Missing preview destinations remain explicit verification limitations. See the [pilot implementation plan](implementation-plan.md#internal-linking) for acceptance checks.

## 2. Page and answer metadata

Keep existing `type`, title/entity fields, aliases, audience, sources, updated date, routing links, and generator markers. Add these fields only when a page is migrated:

```yaml
page_contract_version: "1.0.0"
question_record: data/evidence/questions/ingredient/rice.json
```

The question record contains `contract_version`, `family`, `page_slug`, `coverage_state`, and all 36 family question assessments. `page_slug` includes the existing family folder, for example `ingredients/rice`. The machine schema defines required fields. Each assessment contains:

- Stable question ID and explicit scope.
- Workflow state and separate evidence state.
- A direct contextual answer or null while unassessed.
- Search scope, protocol, search execution and screening records, cutoff and limitations.
- References to original evidence and canonical syntheses, including conflicting findings.
- Applicability rationale and limits of inference.
- Certainty method, judgment, assessment reference and rationale, or an explicit not-assessed/not-applicable judgment.
- Actual review kind, reviewer identity, date and review record; AI and human review are labelled separately.
- Justification for not-applicable decisions, dependent pages, and revision number/superseded version.

A contextual answer is a projection of its cited canonical synthesis, not an independently edited competing conclusion. Updates must find dependent pages; blocked updates stay in an explicit queue and stale conclusions cannot be presented as current.

## 3. Workflow, evidence, and certainty are separate

Workflow states: `unassessed`, `searching`, `access_blocked`, `extracting`, `assessing`, `reviewed`, `stale`.

Evidence states: `not_assessed`, `available`, `conflicting`, `insufficient`, `no_eligible_evidence`, `inaccessible`, `not_applicable`.

Certainty judgments: `high`, `moderate`, `low`, `very_low`, `not_assessed`, `not_applicable`. A named method and documented assessment are required for a graded judgment. The label does not itself establish formal GRADE compliance. Historical `medium` values remain legacy labels until reassessed; do not automatically translate them to `moderate`.

A source not measuring nickel does not establish a nickel literature gap. A missing PDF is an access problem. A non-detect is an analytical result with a reporting limit. Zero eligible studies after a documented search is a search result. Evidence of little or no effect requires an adequate effect estimate and uncertainty. Keep all five situations distinct.

`reviewed` requires a recorded assessment. `no_eligible_evidence` additionally requires a completed, reproducible search and screening record for the question scope, with no unresolved potentially eligible inaccessible source. `not_applicable` requires a reviewed rationale based on page scope; it cannot be used just because evidence is missing. `stale` reopens a previously reviewed answer after a material change. A legacy timestamp is not proof of any of these states.

Legacy `contamination_profile.status` remains a compatibility field: `pending` = not yet assessed, `in_progress` = incomplete work, `populated` = legacy data populated, not proof of systematic review. Mixed statuses are valid. Nulls are allowed. An existing `populated, n_studies: 0` cell with no search record is an unverified legacy gap and needs reassessment. `n_studies` remains a descriptive count; record the counted unit and deduplicate study/dataset families. It never assigns certainty.

## 4. Review methods by question

Before synthesis, define question scope, eligibility, sources to search, search syntax, dates, outcomes, planned grouping, appraisal and analysis methods. Record amendments and their reasons. Search beyond the existing corpus where needed; an existing-library search is explicitly labelled as such. Record source-access limitations, language/date restrictions and grey-literature coverage. Preserve excluded-study reasons and duplicate/overlapping dataset relationships. Never describe the entire corpus as complete based on file counts.

| Question class | Required assessment |
| --- | --- |
| Identity and mechanism | Authoritative identity/species definitions; direct observation versus proposed pathway; measured matrices and transfer boundaries; causal limits. |
| Occurrence | Sampling frame, representativeness, selection bias, geography and period, analytical validation, reporting limits, censoring, uncertainty and overlap between datasets. |
| Intervention | Defined comparator and endpoint, confounding/bias, replication, absolute and relative effects, uncertainty, operating conditions, adverse outcomes, and transfer from laboratory to commercial setting. |
| Exposure and health | Route/species/population fit, exposure measurement, consumption data and model assumptions, health outcome validity, bias/confounding and outcome-specific evidence integration. |
| Analytical | Matrix-specific validation, recovery, precision, selectivity/speciation, detection/quantification limits, sampling uncertainty and fitness for the decision. |
| Regulatory | Verified primary instrument, exact provision, legal/value type, scope, dates, amendments and applicability. Legal authority is not an effect-certainty grade. |
| Decision and review summary | Traceable synthesis of assessed answers, actual review/search records and explicit decision assumptions; no new unsupported factual claims. |

Select and publish fit-for-purpose appraisal methods. Use Cochrane/GRADE principles for relevant intervention outcomes, EFSA food/feed safety methodology for appropriate assessment questions, and environmental-health integration methods where appropriate. Do not impose clinical trial hierarchies on every occurrence survey. A-tier/B-tier/C-tier is a legacy source-class label, not risk of bias or certainty. Do not double-count a review and its included primary studies as independent evidence.

A formal systematic-review label requires an executed protocol, reproducible searches and screening, source-level verification, study-family deduplication, question-appropriate appraisal, documented synthesis and uncertainty, conflict-of-interest disclosure, and recorded scientific/methodological review. AI-only review must be named as such and cannot be described as independent human peer review. Human experts handle consequential interpretation, exceptions and formal review sign-off; routine extraction and routing remain automatable.

## 5. Required evidence tables

### Occurrence record

For each reported result retain source/study/dataset ID, passage/table/cell locator, specimen/material and form, analyte species, sample count and sampling unit, location and market, collection period, sampling design, method and validation information, units and basis, exact statistic, uncertainty, LOD/LOQ, censoring convention, and review status. Preserve source-reported values separately from derived conversions and models.

Display observed samples, summary-only findings and modelled estimates distinctly. A study maximum is not a population maximum. A range across study means is not a range of individual samples. Non-detects are not measured zeros. An undefined 'typical' range is not acceptable. Population percentiles are optional, not required outputs; report them only when justified by the data and a documented analysis. Reconstructed pseudo-samples are never counted as new observed samples.

Presentation extension, revised 18 October 2026: use the [analyte evidence explorer](analyte-explorer.md) and [relative-findings method](relative-findings.md) on the pilot and subsequent contract migrations. Group by exact analyte and retain food form, collection region, fiscal year, basis and source. The public Comparison column names an earlier matched reference or contemporaneous peers, the calculation and its sample counts. Regional and temporal summaries must address sampling, season, method and censoring comparability; higher sample levels do not automatically establish population trends or safety judgments. Evidence opens a right overlay drawer with dataset details and source values. Internal appraisal and question-level review remain separate from this descriptive comparison. The former confidence-column prototype is superseded.

### Intervention record

Every intervention answer records control category (prevent, remove, redistribute/transform, formulate/dilute, detect/exclude), metal/species, exact material and stage, mechanism, comparator, operating conditions, starting and ending measurements, absolute/relative effect and uncertainty, basis/yield/mass balance where relevant, study design, scale (laboratory/greenhouse/field/pilot/commercial), duration, replication, other-contaminant effects, nutrition/quality/yield, waste destination, measured costs or unknown costs, feasibility and verification requirements.

Separate concentration reduction, total metal mass removal, speciation change, in-vitro bioaccessibility, human absorption and dietary exposure. Testing detects or informs exclusion; it does not remove contamination. Do not describe dilution as removal or assume blending is legally permissible. Rank controls by the applicable evidence, decision relevance, trade-offs and implementation evidence, not maximum reported percentage reduction. Missing effect sizes remain missing; a requirement to address the question does not authorize invented numbers.

### Regulatory comparison

Retain primary instrument and provision, issuing body, jurisdiction, legal/value type (binding limit, action level, guidance, health reference value, international standard), effective and verification dates, status, product/species/basis, exact value and units, and any justified conversion. Never assume a universal reconstitution factor or that an international benchmark is automatically domestic law. Distinguish legal applicability from scientific certainty. A certification read-across is not a government rule for the target product. No matching verified instrument is reported explicitly; no number is invented to fill a scientific page.

## 6. Applicability and synthesis

- Validate matrix AND format AND species AND basis against methods, tables and footnotes. Author labels are evidence, not an override of contradictory primary measurements. Resolve or flag contradictions before using a row as exact evidence.
- Ingredient results do not automatically establish finished-product results. Soil or irrigation-water values do not become edible-food concentrations. Food-contact release results do not become bulk-content results.
- Separate direct evidence, indirect evidence with a rationale, mechanistic context, and inapplicable evidence. The routing system may index all four, but only applicable findings support a conclusion.
- Define grouping and weighting before combining results. Do not silently pool incompatible markets, years, forms, analytes or bases. Retain null and adverse findings. Use existing maintained analysis engines when appropriate; document why pooling is or is not defensible.
- Review the full eligible evidence set for the question. An incremental update may reuse verified prior extraction, but must account for all still-eligible evidence. 'Incoming paper plus five most-cited papers' is not an adequate default synthesis rule.
- Trigger reassessment for material new evidence, contradictions, corrections/retractions, methods or scope changes, regulatory changes and scheduled search expiry. Count thresholds can prioritize a queue but cannot establish completion, certainty or absence of evidence.

## 7. Completion and publication

A public page can be useful while partial. Label its coverage honestly. Require all 36 question records even for an adopted scaffold; unassessed entries remain visible to the editorial workflow. Review completeness is the fraction of required questions with current reviewed dispositions; evidence availability is a separate measure. A positive result, high certainty or a minimum paper count is not required for completeness.

A complete page passes these gates:

1. All mandatory questions have a current reviewed answer, uncertainty/conflict, documented search gap or justified not-applicable decision.
2. Material factual clauses and values trace to verified evidence at the asserted scope. Sources have integrity/access status and duplicate-family checks.
3. Searches, eligibility, appraisal and synthesis support the declared review scope; unresolved access blocks are not hidden.
4. Certainty is answer/outcome-specific and justified; no count-derived promotion or source-tier shortcut.
5. Controls include applicability, effect uncertainty, trade-offs and verification, or explicitly identify missing evidence.
6. Regulatory comparisons preserve instrument status, dates, species, material and basis.
7. Page sections, question records, evidence tables and downloads agree; generator markers, useful anchors and provenance are preserved.
8. Actual review attribution, conflicts of interest, version/date, dependent-page updates and rollback are recorded.

Record corrections rather than silently replacing disputed answers. Protect unfavorable findings as carefully as favorable findings. Disclose ownership, funding and relationships relevant to the interpretation; separate certification governance from the scientific conclusion.

The supplied validator checks structural and state invariants. It cannot establish that a passage supports a claim, that a search is adequate, that a referenced review actually occurred, or that a causal interpretation is valid. Those remain evidence-review gates; passing validation is never a scientific review badge.

## Methodological references

These are reference frameworks, not a claim that HMI has already implemented or been endorsed by them. Checked 2026-10-17.

- [Cochrane Handbook, Chapter 3: eligibility and grouping](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03).
- [Cochrane Handbook, Chapter 14: outcome-specific certainty](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14).
- [EFSA: systematic review methodology for food and feed safety](https://www.efsa.europa.eu/en/efsajournal/pub/1637).
- [NTP OHAT Handbook: environmental-health evidence integration](https://ntp.niehs.nih.gov/research/assessments/noncancer/handbook).
- [Codex codes of practice](https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/).
