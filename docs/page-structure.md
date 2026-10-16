# Page structure — Heavy Metal Index

This is the canonical body-structure spec for the wiki. `docs/page-templates.md`, `docs/schemas/`, `docs/writing-style.md`, `docs/conventions.md`, and `docs/lint.md` point here. If one of those files disagrees with this page, this page wins.

The readers are quality assurance, food safety, procurement, and regulatory staff. Consumer explanation, including sections addressed to families or parents, belongs to Metallopathy.

## Answer block

Each ingredient, product, and metal page has one answer block. The block is the Key facts summary introduced in PR #263. It is rendered from structured frontmatter immediately after the H1. Authors do not type a second answer heading.

The block is 2 or 3 plain sentences and at most 60 words. It names every metal the page covers, in full. A metal with no typical range is still named. Numeric claims use only a populated measured typical range, with the unit and the basis when the profile carries a basis. The block has no citation, no author-year, no paper title, and no DOI. It does not describe removal, rinsing, cooking, or any other remediation.

Handwritten headings `Direct answer` and `Key facts` are not a second block. A page that still has one is waiting for the content pass that deletes it. The renderer does not emit Key facts on a page that still has a handwritten answer heading.

PR #263 landed the generator (`tools/lib/key-facts.mjs`). That generator is the implementation of this block and does not yet meet this contract: it names at most three metals by a fixed priority, it uses the phrase "summary profile", and it covers ingredient and product pages only. A follow-up amends the generator. This spec does not change it. Until that amendment, the renderer also stays off any page that still has a handwritten answer heading, so the page does not show two blocks.

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
