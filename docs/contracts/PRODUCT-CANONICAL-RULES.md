# Canonical product-category page rules (v1, pilot 3 November 2026)

Status: proposed ruleset for owner review. Pilot: `products/infant-formula-powder-non-soy` (v3). Nothing here changes production or `main` until the owner accepts it.

## 1. What a product page is

A product page is the canonical ingredient page (Rice style, `docs/contracts/ingredient-canonical-style.md`) plus a fixed **universal core** of product-only sections. Everything the ingredient contract requires still applies: shared components, the grouped contamination-profile table, sentence-level superscript citations, the stage-led mitigation table, up to 20 FAQs, hero preservation, single-grid tables and the public content boundary.

The ingredient style alone is not enough for a product. The 25 October pilot proved it: it rendered the shared profile table well, but it dropped the three sections readers of a finished-product page come for (what the limits are, why the category is risky, what has been recalled or enforced) and replaced them with "nothing verified" placeholders even though the old live page and the library held sourced answers.

## 2. Why a universal core (the reasoning)

Brands, retailers, labs and buyers will look up their own products against these pages, and TECRID and VLE will read them by machine. That only works if every product page answers the same questions in the same place with the same fields. So:

- **Same section IDs and anchors on every page.** A retailer can deep-link `#limits` on any category; a script can read `#benchmark` without knowing the category.
- **Same fields in every table.** Limits always carry jurisdiction, instrument, metal, value, unit, basis, status and source. Benchmarks always carry n, detected, median, p90, max, basis and source.
- **Structured data on every page.** The same facts the reader sees are emitted as one JSON object (`hmi-product-core/1`) embedded in the page and written beside the build, so nothing has to be scraped.
- **Think Simple.** The reader sees short tables and plain sentences in a fixed order. Basis conversion, percentile math, source locators and match rules live in the data and the builder, not in the prose.

Category-specific material (soy versus non-soy relationship, French total diet rows, exposure models) is still welcome, but it goes in optional sections after the core so it never displaces or reorders it.

## 3. Section order

Universal core sections are REQUIRED on every product page, in this order, with these anchors. Optional sections sit where shown. Headings may name the product naturally; anchors may not change.

| # | Anchor | Section (reader heading pattern) | Required | Source of content |
| --- | --- | --- | --- | --- |
| 1 | (hero) | Hero, title, byline | Required | Preserved hero (unchanged rule) |
| 2 | `#scope` | What counts as <product> | Required | Category definition, inclusions, exclusions, related pages |
| 3 | `#overview` | <Product> overview (Quick Read) | Required | Main findings first; citations only, no internal links |
| 4 | `#limits` | Limits applicable to this category | Required, critical | One table, every jurisdiction |
| 5 | `#why-high-risk` | Why this category is high-risk | Required, critical | Exposed population, intake, matrix, measured findings |
| 6 | `#benchmark` | Measured levels: the benchmark | Required | Per-metal n, detected, median, p90, max |
| 7 | `#profile` | Heavy metal contamination profile | Required | Shared `renderAnalyteTable`, unchanged |
| 8 | `#ingredient-drivers` | Which ingredients drive metals | Required | Ingredient rows linking to ingredient pages |
| 9 | `#recalls` | Historical recalls and enforcement | Required, critical | Dated, named, sourced events |
| 10 | `#testing` | Testing guidance | Required | Metals, method, LOQ, speciation, basis |
| 11 | `#compare` | Compare your product | Required | How a COA or TECRID result maps to benchmark and limits |
| 12 | `#mitigation` | Mitigation | Required (ingredient rule) | Shared stage-led table |
| 13 | optional | Exposure, variation, category relationships, total diet rows, manufacturing and packaging | Optional | Only when sourced content exists |
| 14 | `#review` | Evidence review and remaining gaps | Required | Gaps stated plainly |
| 15 | `#faqs` | FAQs (up to 20) | Required | Question bank |
| 16 | `#references`, `#sources`, `#update-history` | References, Sources, Update history | Required | Shared formatter |

## 4. Section rules

### 4.1 Limits applicable to this category (`#limits`)
- One table. Columns: Jurisdiction, Instrument, Metal (species where it matters, for example inorganic arsenic), Value, Unit, Basis (as sold powder, as prepared, per day), Status (binding maximum level, action level, guidance, safe-harbor dose, settlement term), Source.
- Include every jurisdiction with a verified value: U.S. FDA (Closer to Zero action levels or an explicit "no action level for this category" row), California Proposition 65 MADL/NSRL (per-day doses, never shown as ppb without a stated intake), EU 2023/915, Codex CXS 193, and any other national limit verified from primary text. Settlement terms (for example a state attorney general consent judgment) may appear with status "settlement term, one company".
- A jurisdiction with no limit for the category gets a row saying so, with the source that shows it. Never leave the section empty or say "none verified" when the library holds a regulatory record; that is a build failure, not a gap.
- Never convert a per-day dose into a concentration limit in the table. Conversions live in `#compare`, with the intake assumption shown.

### 4.2 Why this category is high-risk (`#why-high-risk`)
- Three to five short paragraphs or bullets covering, as supported: who is exposed (age, body weight, sole-source diet), how much is consumed, which ingredients or processes bring metals in, and what measured surveys found. Each factual sentence carries a citation.
- "High-risk" describes exposure vulnerability and surveillance priority. It never says a product or brand is unsafe.

### 4.3 Benchmark (`#benchmark`)
- One row per metal and data set: Metal, Data set, Basis, n, Detected, Median, p90, Max, Source. Non-detects are counted, never set to zero; a median or p90 below the detection limit reads "below detection".
- Prefer product-level data sets that match the category exactly (match levels exact or subcategory from `product-match.mjs`). Keep different bases in different rows (for example as sold powder versus as prepared for feeding); never pool them.
- Derived statistics (computed by HMI from a published table) are labeled "computed by HMI from <source>" and are reproducible from the JSON.

### 4.4 Ingredient drivers (`#ingredient-drivers`)
- Table: Ingredient (linked to its ingredient page), Metals it drives, What the evidence shows, Source. Only claims a cited source supports. If no source isolates an ingredient's contribution, say that in the row.

### 4.5 Historical recalls and enforcement (`#recalls`)
- Table: Date, Company or brand, Action type (FDA recall, FDA warning letter, import alert, state AG action or settlement, published test results), Metal, What happened (values where published), Source link.
- **Naming brands is allowed and expected**, but only from: FDA recalls, enforcement reports and warning letters; FDA or other government survey publications; state attorney general or district attorney filings and settlements; published test programs (Consumer Reports, Healthy Babies Bright Futures and similar named, dated publications). Private lawsuits are excluded until a court or regulator makes a finding.
- State it factually, in the source's own terms, with the date and the measured value. No attack language, no adjectives such as "toxic brand" or "dangerous", no inference beyond the source. A published test ranking is reported as "rated by <publisher>", not as a regulatory finding.
- Events that mention metal but are not heavy-metal contamination (for example a recall for metal fragments) are listed in a one-line "not a heavy-metal event" note so readers do not mistake them.
- When a formal search finds no event (for example no FDA Enforcement Report entry), say which search was run and when.

### 4.6 Testing guidance (`#testing`)
- Which metals to test, method (ICP-MS, with speciation by HPLC-ICP-MS where the limit is species-specific), a target limit of quantification that is at least five times below the lowest applicable limit, the basis to report, and sample count guidance where a source supports it.

### 4.7 Compare your product (`#compare`)
- Plain-language steps: put the result on the same basis as the benchmark row, read the percentile against the benchmark set, compare with each limit row, and treat per-day limits through a stated intake.
- A small calculator may run in the page; it uses only values from the page JSON and shows the basis and intake it assumed. Output labels: "below", "at or above", "percentile among N products tested by <source>". It never outputs "safe" or "unsafe".

### 4.8 What to show when data is missing
- Say exactly what is missing and which search or source would resolve it, in one sentence, inside the same section and component. Do not drop the section, and do not pad it.
- A missing value is never shown as zero, and a missing rating never reads as low contamination.

## 5. Evidence rules (all sections)
1. Every number carries a citation to a named source with a working link or a library source page.
2. No unsourced brand claim. Brands are named only from the sources listed in 4.5.
3. Keep basis, species and statistic attached to every value.
4. **Hard rule: no Axiom or supplier private data anywhere** (GRAS notices GRN 609, 788, 804 and 851, Oryzatein certificates of analysis, or any other supplier confidential test data), in prose, tables, JSON, FAQs or drawers.
5. American English. No em dashes or en dashes in public text.
6. Internal programme vocabulary (row scaffolds, P95 bands, autonomy notes) never reaches the page (public content boundary).

## 6. Structured data (`hmi-product-core/1`)
Each page embeds `<script type="application/json" id="hmi-product-core">` and the builder writes the same object to `data/evidence/products/<slug>/product-core.json`. Top-level keys, identical on every page:

`schema, slug, title, scope, limits[], why_high_risk[], benchmark[], benchmark_products[], ingredient_drivers[], recalls[], testing, compare, gaps[], sources{}`

Every array item carries `source` (a key in `sources`) and every source carries `title`, `publisher`, `date` and `url`. TECRID and VLE read this object; the HTML is a rendering of it.

## 7. Acceptance checks for a product page
- All required anchors present, in order, each with real content or a one-sentence sourced gap.
- `#limits` has at least one row per jurisdiction listed in 4.1 (value or explicit "no limit" row).
- `#recalls` names each brand only with a source from 4.5, and records the formal search run.
- JSON validates against the key list in section 6 and matches the rendered tables.
- No forbidden private source identifiers, no em or en dashes in public text.
- All ingredient-contract gates still pass.
