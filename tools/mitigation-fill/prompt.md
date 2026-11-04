Fill measured mitigation evidence for the Heavy Metal Index pages listed below. Then stop.

Pages this run (__COUNT__): __PAGES__
Candidate manifest: __MANIFEST__
Full text directory: __FULLTEXT__
DOI map: data/mitigation-map.json
Today's date: __DATE__

DEPOSITS_READ_TOKEN may be present in the environment. Do not print it, do not write it into a file, and do not put it in a commit. This run does not read the deposits repository. The only papers you may use are the open-access full texts saved in the full text directory.

Read docs/page-structure.md before you edit. If that file defines a universal nine-section order, write under the mitigation heading in that order and do not rename or reorder the other sections. If it does not, leave the page outline alone and fill the existing Mitigation heading (the H2 that starts with "Mitigation", or "Levers to reduce contamination").

What counts as evidence:

- The paper reports a measured reduction, removal, or lower result for a heavy metal in this specific food. Processing, washing, peeling, cooking water ratio, refining, soaking, cultivar, and soil amendment are the interventions to look for.
- The food itself was measured. A class-level paper (vegetable oils, cereals, crops, food in general) is excluded when it does not print a result for this food. A mechanism paper, a cell study, or an animal tissue study is excluded when it does not print a result in the food.
- Copy numbers and units exactly as they appear in the saved full text. Do not subtract, average, convert, or round. If the unit does not state dry weight, wet weight, or as sold, keep the unit as printed and say that the paper does not state the weight basis. Use the words "as printed" in that sentence.
- The manifest is ordered with reviews and meta-analyses that name many foods first. Read those before a single-food paper.
- A paper may measure more than one food. That is the fan-out. For every food the full text actually measures, add it to `data/mitigation-map.json` and write that page's Mitigation section in this same run. Use `--ingredient` when the page id starts with `ingredients/`, and `--product` when it starts with `products/`. Do not map a food the paper only names, and do not map a food that has no page here. A class-level review is in scope only for the foods whose printed results you quote.

How to record a paper:

1. Read the manifest, then the saved full text. Skip a paper when the quotation you need is not in that file.
2. If `node tools/mitigation-fill/cite.mjs --page wiki/<page>.md --doi <doi>` prints `"found": true`, cite that source page and do not edit it.
3. Otherwise create `wiki/sources/<cite-key>.md`. Use a lowercase hyphenated cite key. Use this shape, with real values and no invented hash:

```yaml
---
type: source
cite_key: surname2020-short-topic
title: "Title"
authors:
  - "Surname A"
year: 2020
publication: "Journal"
doi: 10.1000/example
access_url: https://doi.org/10.1000/example
source_type: peer-reviewed
evidence_tier: A
license: "open access"
raw_handle: oa-10.1000-example
audience:
  - regulator
  - brand-qa
  - food-safety
sources: 0
updated: __DATE__
ingredients:
  - "[[ingredients/olive-oil]]"
products: []
metals:
  - Pb
matrices: []
jurisdictions: []
evidence_fitness:
  supports:
    - measured-metal-reduction
  does_not_support:
    - brand-level-results
    - other-foods
---
```

Do not set ingest_status. Do not invent raw_path or raw_sha256. The public body has an H1, then prose, then `## Key numbers`, `## Methods (brief)`, `## Evidence fitness`, `## Limitations`, and `## Related evidence`. Key numbers are quotations from the full text. Do not mention local paths, tool names, or this workflow.

4. Add the mapping only through the checker, which rejects anything that is not a quotation of the saved file:

```bash
node tools/mitigation-fill/record.mjs add \
  --doi "10.1000/example" \
  --title "Title" \
  --year 2020 \
  --ingredient olive-oil \
  --metal lead \
  --intervention refining \
  --effect "the exact quotation, at least a short clause with the printed number and unit" \
  --effect-file "__FULLTEXT__/10.1000_example.txt" \
  --source sources/surname2020-short-topic
```

Repeat `--ingredient` or `--product` for every food the quotation covers. Repeat `--metal` for each metal. The fulltext file name matches the DOI with punctuation turned into underscores.

5. Cite it on the page:

```bash
node tools/mitigation-fill/cite.mjs --page wiki/ingredients/olive-oil.md --source wiki/sources/surname2020-short-topic.md --append
```

Paste the printed `sup` value at the end of the sentence, not at the start. On a page that already uses cite cards, that command prints the card. On a plain page it prints `[[sources/<cite-key>|n]]`. `--append` adds the references line when the page already has a references marker. Do not create a second references section.

Writing rules:

- American English. Write a range with the word "to". No em dash and no en dash in any line you add.
- Prose uses full metal names: lead, cadmium, inorganic arsenic, total arsenic, methylmercury, total mercury, nickel, aluminum, chromium, hexavalent chromium, tin. Do not write a chemical symbol in the ingredient or product sentence.
- Do not change frontmatter, the hero image, any section outside Mitigation, or the update history. Keep every `<a id=` line in the Mitigation section. You may remove a `data-mitigation-gap` paragraph when you add a real citation. Leave the gap in place when you add nothing.
- On a page with `page_contract_version`, write paragraphs under the existing heading. Do not add a new H2. On a page whose heading is exactly "Mitigation options", "Mitigation", or "Levers to reduce contamination", you may add only the subsections that have a measured result, in this order: Sourcing, Agronomic, Processing, Formulation, Testing and QC, Packaging and storage.
- No supplier or manufacturer notice. Do not add any of these: GRN 609, GRN 788, GRN 804, GRN 851, Oryzatein, RPN2026, Axiom.
- Do not name certified brands and do not copy a brand results table.

If the manifest has no saved full text for a page, leave that page unchanged. Do not invent a paper or a number.

When you change a page, insert one log entry immediately after the frontmatter of wiki/log.md, above the previous entry. Do not change the title line.

```markdown
## [__DATE__] ingest | mitigation evidence for <pages>

Pages touched: [[ingredients/olive-oil]]
Notes: Open-access full texts added measured reductions for <metals and interventions>. Numbers are printed values, not calculated ones. Direction: toward the literature.
```

Do not commit, do not push, and do not open a pull request. The workflow checks quotations, runs the tests, and opens the pull request only if those checks pass.

Stop after the seed pages and every extra page those papers measure. One run, one pull request.

## Evidence scope (parent-matrix rows)

Each mapping may carry `evidence_scope` ("product" or "parent-matrix") and `parent_matrix`.
When `evidence_scope` is "parent-matrix", render the row with the line:
"Evidence from <parent_matrix>, not measured in this product."
Never present a parent-matrix row as product-specific. Quote `effect_as_printed` unchanged.
