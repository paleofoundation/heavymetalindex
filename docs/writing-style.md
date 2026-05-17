# Writing style — Heavy Metal Index Wiki

This specification document uses bullets because it is genuinely list-shaped. Wiki content itself is different. The wiki must read as authoritative scientific reference, not as internal documentation or marketing summary. The register to aim for is Cochrane review, EFSA scientific opinion, or WHO monograph.

## Prose over bullets

Default to prose paragraphs for narrative sections. This includes overview, mechanism, implications, discussion of contradictions, synthesis, consumer translations, and any section that presents reasoning rather than enumerating facts. Prose signals considered analysis; bullets signal slides or notes. A future reader (plaintiff's expert, defense counsel, FDA reviewer, journalist) will form a judgment about the wiki's authority within the first page they read. Prose produces the correct judgment.

Bullets require justification. Before using a bullet list in wiki content, pause and ask: is this content genuinely enumerative? Three to seven discrete parallel items with no analytical connective tissue between them? If yes, bullets are appropriate. If reaching for bullets to flatten analysis into items because it feels easier, stop and write prose instead.

**Legitimate uses of bullets in wiki content:**
- enumerated regulatory values or thresholds across jurisdictions
- stepwise procedures (testing methods, sampling plans, mitigation options)
- section tables of contents at the top of long pages
- parallel lists of discrete items (taxa, ingredients in a category, vulnerable populations)
- audience tagging metadata

**Illegitimate uses:**
- summaries of individual studies (use prose with full citation)
- explanations of mechanisms (use prose, develop the argument)
- synthesis paragraphs (use prose, make the connections)
- consumer-facing explanations of risk (use prose, contextualize the dose)
- implications sections (use prose, reason through the implications)

## Tables

Structured data belongs in frontmatter YAML or two-column tables, not in bullets. Regulatory limits, concentration values, study details, and test method parameters are reference data, not analytical claims. They go in YAML where the app can parse them, or in two-column tables where humans can scan them.

Multi-column tables are discouraged because they render poorly on mobile and in narrow Obsidian panes. If a multi-column table seems necessary, consider whether the data should be split across several two-column tables or represented as structured YAML.

The ingredient-page "Heavy metal contamination profile" table defined in [[docs/page-templates]] is a sanctioned exception: the stakeholder-snapshot use case (a single scannable view of all ten analytes for one commodity, read by regulators, brand QA, and legal reviewers) warrants the wide format, and the same data is available in machine-readable form in the frontmatter for any rendering surface that cannot accommodate it.

## Em dashes and bold

Avoid em dashes. Use commas, semicolons, periods, or parentheticals instead. Em dashes are fine inside direct quotes and citation text; do not introduce them in new writing.

No bolded words inside running prose for emphasis. Bold is for headings and for explicit labels (for example, the start of a definition). Inline bold for emphasis creates a marketing-copy register that undermines authority.
