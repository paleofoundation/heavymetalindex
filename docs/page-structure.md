# Page structure — Heavy Metal Index

This is the canonical body-structure spec for the wiki. `docs/page-templates.md`, `docs/schemas/`, `docs/writing-style.md`, `docs/conventions.md`, and `docs/lint.md` point here. If one of those files disagrees with this page, this page wins.

Page data, evidence support and release gates are governed by [Content contract](content-contract.md), including the locked hero summary and Key evidence specification.

The readers are quality assurance, food safety, procurement, and regulatory staff. Consumer explanation, including sections addressed to families or parents, belongs to Metallopathy.

## Answer block

Metal and ingredient pages open with the Lead-style opening defined in `docs/content-contract.md` section 6 (Page opening): the Quick read box and a sources line, rendered from frontmatter `quick_read` by `tools/build-page-openings.mjs` directly under the H1. That opening is the page's one answer block. Authors do not type a `Direct answer` or `Key facts` heading; an existing Direct answer section moves its numbers into the relevant body section as numbered citations. The hero Key facts block was removed in PR #304 and is not restored.

## Citations

Every page type uses numbered citations only. In prose and in tables the form is `[[sources/<cite-key>|1]]`. The visible text is the number. Prose does not contain an author-year, a paper title, or a DOI. The generated References list carries the authors, the year, the title, and the DOI.

## Metal names

Prose uses the full name: lead, cadmium, inorganic arsenic, total arsenic, methylmercury, total mercury, nickel, aluminum, chromium, hexavalent chromium, tin, antimony, uranium. Inorganic arsenic is not total arsenic. Methylmercury is not total mercury. Total chromium is not hexavalent chromium unless the source speciates hexavalent chromium.

Symbols stay in frontmatter keys, in the units and analyte vocabulary in `docs/conventions.md` (that vocabulary stays as it is), and in the analyte column of the generated Heavy metal contamination profile table. They do not appear in prose.

## Evidence sections

An evidence section on an ingredient, product, or metal page reports measured results. Its heading names the topic. These headings are not used on those pages:

- Exact headings: Overview, Direct answer, Key facts, Quick read, At a glance, Introduction, Background, Discussion, Conclusion, Miscellaneous, General, Notes, Summary
- Headings that begin with Additional, Other, Direct answer, Overview, or Key facts

`Key facts` in that list is the handwritten heading. The rendered answer block is the one Key facts block above, and it is not a second section in the markdown. Regulator pages keep the ordered list in `docs/page-templates.md`, including Quick read. That list is outside this ban.

Each evidence section opens with a synthesis of 2 or 3 sentences, then a compact table:

| Study / location | Material / design | Metal species | Value (units and basis) | n | Interpretation / limitation |
| --- | --- | --- | --- | --- | --- |
| [[sources/example|1]], region | matrix, design, basis of sampling | inorganic arsenic | 40 to 150 ppb, dry weight | 36 | what the figure can and cannot support |

The study cell is the numbered citation and the location. The metal-species cell uses the full name. This table is a sanctioned exception to the two-column preference in `docs/writing-style.md`. The generated contamination-profile table is a separate sanctioned table and keeps its own columns.

Mechanism sections, including why a commodity accumulates a metal and toxicology, stay prose. Methodology, the reader line, and What remains uncertain are not evidence tables.

## Occurrence and remediation

Occurrence and geographic level stay in their own sections. Processing, removal, and remediation stay in theirs. An occurrence section does not give rinsing, cooking, polishing, or other removal results. A processing or mitigation section does not restate a regional concentration as if it were a treatment effect. The answer block follows the same split: it states level only.

## What remains uncertain

Every ingredient, product, and metal page ends its body with `## What remains uncertain`. That heading is immediately before the generated footer. Open questions is not a substitute. The footer order is References, then Sources, then Update history.

## Section order

One list per type. The answer block is rendered and is not typed as a markdown heading. Later topic-specific evidence headings may sit inside the section they belong to. They do not replace a required heading, and they follow the generic-heading ban above.

Stubs are exempt from section presence and order only. An ingredient stub has no `contamination_profile` cell at `populated` or `in_progress`. A product stub has no routed source, or a body under 500 characters after the opening frontmatter. Metal pages are not stubs. Stubs are still subject to the uncertainty note, the citation rule, the metal-name rule, and the audience rule.

### Ingredient

1. Key facts (rendered answer block)
2. Why this commodity accumulates heavy metals
3. Heavy metal contamination profile
4. Ranges by source, region, and variety
5. Processing effects
6. Ingredient-derivative risk
7. Mitigation options
8. Regulatory limits that apply
9. What remains uncertain
10. References
11. Sources
12. Update history

Ranges by source, region, and variety is occurrence and geography. Processing effects is processing. Mitigation options is removal and remediation, in this subsection order: sourcing, agronomic, processing, formulation, testing and QC, packaging and storage.

### Product

1. Key facts (rendered answer block)
2. Who this page is for
3. Methodology
4. Literature Evidence Summary
5. Source Evidence Inventory
6. Broad Product Context: Author-Scope Index
7. Federal/Regulatory Limits vs Field Findings
8. Levers to reduce contamination
9. How standards math uses this page
10. Historical recalls and enforcement
11. What remains uncertain
12. References
13. Sources
14. Update history

Who this page is for names quality assurance, food safety, procurement, and regulatory readers. Source Evidence Inventory and the literature summary are occurrence. Levers to reduce contamination is processing, removal, and remediation, in the same subsection order as ingredient mitigation. How standards math uses this page explains that the public page is literature evidence. It does not publish certification arithmetic.

### Metal

The metal template and the metal schema previously listed different sections. Live pages followed the template. Both lists are retired. This is the list:

1. Key facts (rendered answer block)
2. Toxicology
3. Exposure routes
4. Food sources
5. Regulatory limits
6. Testing
7. Microbiome effects
8. Vulnerable populations
9. Mitigation
10. What remains uncertain
11. References
12. Sources
13. Update history

Exposure routes and Food sources are occurrence and exposure. Mitigation is removal and remediation. Vulnerable populations names the populations the studies and the limits identify. It is not a section for families. Quick read, Overview, and Open questions are not metal sections.

## Audience

Frontmatter `audience` is a professional reader list: `regulator`, `brand-qa`, `food-safety`, `procurement`, `brand-legal`. A page may also carry `educator`, `researcher`, or `journalist` when those professional readers are the audience. It does not carry `consumer` or `app`, and it does not contain a section tagged for consumers, families, or parents.

`contamination_profile` remains machine-readable data. That is not a reader audience.
