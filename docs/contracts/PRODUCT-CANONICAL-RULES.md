# Canonical product-category page rules (v2, pilot 4, 3 November 2026)

Status: proposed ruleset, revised after owner review of pilot 3. Pilot: `products/infant-formula-powder-non-soy` (v4). Nothing here changes production or `main` until the owner accepts it. Owner review items are binding and are marked **(owner)**.

## 1. What a product page is

A product page is the canonical ingredient page (Rice style, `docs/contracts/ingredient-canonical-style.md`, live reference https://heavymetalindex.com/ingredients/rice) plus a fixed universal core of product-only sections. Everything the ingredient contract requires still applies: shared components, the grouped contamination-profile table, sentence-level superscript citations, up to 20 FAQs, hero preservation, single-grid tables and the public content boundary.

## 2. Canonical style (owner)

1. **Prose plus accordion questions.** Every section is written as paragraphs followed, where useful, by accordion questions in the canonical markup (`<details class="qa" data-hmi-faq="1">` with `summary` and `.ans`), exactly as on ingredient pages. Bulleted or numbered lists are not used for section content.
2. **Tables only where the ingredient canon uses them**, which is where structured evidence exists: the contamination profile (shared `renderAnalyteTable` plus folded product-test tables), government limits, the recalls and enforcement record, and the evidence-based mitigation table. Everything else (why high-risk, ingredient drivers, testing, exposure, review) is prose plus questions. A long supporting table (for example every product in a published test) sits inside an accordion question.
3. **Citations and references use the canonical components unchanged.** Inline citations are `<sup class="cite">` numbered page-wide in first-use order, and every cited work appears once in the canonical References list (`hmi-ref-meta`, `hmi-ref-tag`) followed by the canonical Sources section. No section-specific source list, no custom citation styling and no change to the References or Sources styling.

## 3. Section order

Required on every product page, in this order, with these anchors. Headings may name the product naturally; anchors may not change.

| # | Anchor | Section | Form |
| --- | --- | --- | --- |
| 1 | (hero) | Hero, title, byline | Preserved hero; image path must resolve in previews and production |
| 2 | `#overview` | Product overview (Quick Read) | Prose; **comes before Scope (owner)** |
| 3 | `#scope` | What counts as the product | Prose |
| 4 | `#limits` | Government limits applicable to this category | Prose, one linked table, questions |
| 5 | `#why-high-risk` | Why this category is high-risk | Prose plus questions (owner) |
| 6 | `#profile` | Heavy metal contamination profile | Shared table plus folded product-test tables |
| 7 | `#ingredient-drivers` | Which ingredients drive metals | Prose plus one question per ingredient, linked to ingredient pages |
| 8 | `#recalls` | Historical recalls and enforcement | Prose, table, formal search note |
| 9 | `#testing` | Testing guidance | Prose plus questions |
| 10 | `#exposure` | Exposure | Prose plus questions, or a one-sentence gap |
| 11 | `#mitigation` | Mitigation | Prose plus evidence table, or prose plus questions flagged as a gap (owner) |
| 12 | optional | Category relationships, total diet rows, manufacturing and packaging | Only when sourced content exists |
| 13 | `#review` | Evidence review and remaining gaps | Prose |
| 14 | `#faqs` | FAQs (up to 20) | Accordion |
| 15 | `#references`, `#sources`, `#update-history` | References, Sources, Update history | Canonical components |

**FAQs come before References and Sources on every page, universally (owner).** The left table of contents is regenerated from the final heading order on every build; a stale engine TOC is a build failure.

## 4. Section rules

### 4.1 Government limits (`#limits`)
- One table: Jurisdiction, Instrument, Metal (species where it matters), Value, Unit, Basis, Status with citation.
- **Every jurisdiction and every instrument is an internal link (owner):** the jurisdiction links to its regulator page (`regulators/...`); the instrument links to its regulation page (`regulations/...`). If no regulation page exists, link the instrument's library source record (`sources/...`); if none exists, link the official source. Each missing internal target is listed in `gaps` and in `#review`.
- Include every jurisdiction with a verified value: U.S. FDA (action level or an explicit no-action-level row), California Proposition 65 (MADL and NSRL as per-day doses, never as ppb without a stated intake), EU 2023/915, Codex CXS 193 and any other national limit verified from primary text. Settlement terms are labeled as binding one company. An instrument that exists but does not apply (for example a canned-only level) gets a "not applicable" row.
- Values are rechecked against the primary instrument each build; the record stores what was checked and when (`limits_verification`).
- Per-day doses are converted to concentrations only inside a question, with the intake stated.

### 4.2 Why this category is high-risk (`#why-high-risk`) (owner)
- Two to four short paragraphs (who is exposed, how much is consumed, what surveys found, regulatory status) and two to four accordion questions. Each factual sentence carries a citation. "High-risk" describes exposure vulnerability and surveillance priority, never that a product is unsafe.

### 4.3 Contamination profile (`#profile`) and folded product tests (owner)
- There is no separate benchmark section. Published product-test summaries (n, detected, median, p90 or the statistic the source publishes, max) are folded into the profile section as compact tables after the shared table; the per-product list sits in an accordion question.
- Different bases stay in different tables (powder as sold versus prepared for feeding). Non-detects are counted, never set to zero. Statistics computed by HMI say so.

### 4.4 Ingredient drivers, recalls, testing, exposure
- Ingredient drivers: one question per ingredient, the ingredient linked to its page, stating only what a cited source supports.
- Recalls: Date, Company, Brand or product, Action, Metal, What happened, with source. Brands are named only from FDA recalls, enforcement reports and warning letters, government surveys, state attorney general or district attorney filings and settlements, and named, dated published test programs. Factual, in the source's terms; no attack language. Non-heavy-metal events (for example metal fragments) are noted as such. The formal search run and its date are stated.
- Testing: metals, method, speciation, a target LOQ at least five times below the lowest applicable limit, reporting basis.

### 4.5 Mitigation (`#mitigation`) (owner)
- A stage-led table (Stage, Control, What the evidence shows, with citation) of controls with published evidence, including steps restored from earlier live versions when they were sourced. Controls without quantified evidence are named in prose as gaps, never as table rows.
- If no control has evidence, the section is prose plus accordion questions and is flagged as a gap in `#review`. A mitigation section with neither an evidence table nor a flagged gap is a build failure.

### 4.6 Compare your product: Index Pro only (owner)
- The compare tool and step list are not shown on public pages. They belong in Index Pro. The compare inputs stay in the embedded JSON (`compare`, with `public: false`) so Index Pro, TECRID and VLE can use them.

### 4.7 No redundancy (owner, applies to every section)
- **No repeated constant fields in tables.** A column whose value is identical on every row (food form on a single-product page, a single data set, a single basis) is removed and stated once in the sentence before the table. The shared profile table drops Food form on product pages; the match chip moves to Collection scope.
- **No section restates another.** One fact, one home: limits live in `#limits`, measured levels in `#profile`, sources in References. Other sections cite or link instead of repeating.
- **No repeated template sentences.** A sentence repeated per metal is merged into one sentence.

### 4.8 What to show when data is missing
- Say exactly what is missing and what would resolve it, in one sentence, inside the same section. A missing value is never zero and a missing rating never reads as low contamination.

## 5. Evidence rules (all sections)
1. Every number carries a citation to a named source with a working link or a library source page.
2. No unsourced brand claim; brands only from the sources in 4.4.
3. Basis, species and statistic stay attached to every value.
4. **Hard rule: no supplier private data anywhere** (GRAS notices GRN 609, 788, 804 and 851, supplier certificates of analysis or other supplier confidential test data), in prose, tables, JSON, FAQs or drawers.
5. American English spelling (aluminum, analyzed, program). No em dashes or en dashes in public text. Source titles are quoted as published.
6. Internal program vocabulary never reaches the page.

## 6. Structured data (`hmi-product-core/2`)
Each page embeds `<script type="application/json" id="hmi-product-core">`; the same object lives at `data/evidence/products/<slug>/product-core.json`. Keys: `schema, slug, title, scope, limits[], limits_verification, why_high_risk{paragraphs, questions}, benchmark[], benchmark_products[], ingredient_drivers[], ingredient_drivers_intro, recalls[], recall_search, testing, exposure{paragraphs, questions}, mitigation{intro, rows, gaps, questions}, compare, gaps[], sources{}`. Limit rows carry `jurisdiction_page`, `instrument_page` and `instrument_source_page`. Every cited item carries `source` (a key in `sources`); every source carries `title`, `publisher`, `date`, `url` and, when it exists, `library`.

## 7. Acceptance checks
- Anchors present in the section 3 order; Overview before Scope; FAQs before References and Sources; TOC matches headings.
- No bullet or numbered lists in section content; tables only in the sections listed in 2.2.
- Every limits row has linked jurisdiction and instrument; missing internal targets listed as gaps.
- No `#benchmark` or `#compare` section and no compare form on the public page; compare data present in JSON.
- No constant column in any table; no repeated template sentence.
- Mitigation has an evidence table or a flagged gap.
- One References list in canonical styling; citation numbers in first-use order; no section-specific source list.
- Hero image loads from the preview folder.
- No forbidden private identifiers; no em or en dashes; American spelling outside source titles.
- Builder: `node tools/engine/page/build-product-v4.mjs <engine-built.html> <out.html> [slug]`.
