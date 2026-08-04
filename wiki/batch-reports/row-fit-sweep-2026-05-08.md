---
type: batch-report
report_kind: row-fit-sweep
date: 2026-05-08
phase: 1
status: read-only-sweep
scope: wiki/products/*.md
rule_source: CLAUDE.md Part 6 (line 390 — row-fit determination rule)
audience: [curator]
noindex: true
---

# Row-Fit Re-Sweep — 2026-05-08

## Overview

Read-only Phase 1 sweep across all `wiki/products/*.md` pages, applying the row-fit determination rule from CLAUDE.md Part 6 ("trust author scope statements; over-hedging row-fit destroys the value of the source evidence inventory"). The motivating defect is the Soares 2000 over-hedge pattern (hedged "milk-based or soy-based" despite explicit milk-only author scope at every level). This sweep enumerates other rows likely affected.

## Methodology

For each product-category page under `wiki/products/`, every evidence-bearing table row that maps a source to a row-fit/scope description was scanned. Each row's stated scope and caveat text was checked against the cited source page's frontmatter (`matrices`, `products`, `sample_population`), TL;DR/Summary, and explicit scope language. Rows were classified per Part 6:

- **CORRECT** — page row's matrix matches author scope.
- **DRIFT-HEDGE** — page row hedges row-fit more than author scope warrants (Soares 2000 pattern).
- **DRIFT-WRONG** — page row assigns scope to a subcategory the source's author scope explicitly excludes, or files a source on a page whose matrix is ruled out by the source's stated scope.
- **DRIFT-SOURCE** — source page itself hedges or vague-ifies the matrix where the underlying paper is more precise; needs a deeper source-page fix and possibly a raw-paper re-read.
- **ACCEPTABLE-HEDGE** — author used a vague umbrella term and the existing hedge correctly reflects that ambiguity.

The dominant evidence tables on each page are: `Source Evidence Inventory`, `Distribution Context`, `Measured Values And Concentration Evidence`, `Structured Concentration Rows`, `French TDS Category Rows`, `Broad Product Context Awaiting AI Adjudication`. The "Federal / Regulatory Limits vs Field Findings" crosswalk and "HMTc Evidence Summary" tables were excluded because they aggregate per-metal regulatory/evidence-pool counts rather than per-source row-fit calls.

Sweep coverage limitations are documented at the end of this report.

## Counts

The 41 files in `wiki/products/` split as follows: 24 evidence-bearing pages, 14 stub pages with `sources: 0` or no sources field, 1 index, 1 crosswalk hub (`regulatory-crosswalk-field-findings.md`), 1 lead-benchmark-context page. Stubs have no rows to classify.

| Category | Count |
| --- | ---: |
| Total evidence-bearing pages scanned | 24 |
| Total source rows scanned (estimated, see method note) | ~210 |
| **CORRECT** | ~155 |
| **DRIFT-HEDGE** | 19 |
| **DRIFT-WRONG** | 5 |
| **DRIFT-SOURCE** | 2 |
| **ACCEPTABLE-HEDGE** | ~32 |
| **AMBIGUITY (rule does not resolve)** | 6 |

Counts are approximate because (a) several rows have multi-analyte cells that this report counts as one row, and (b) some pages were sampled rather than exhaustively classified — see "Coverage limitations" at the end.

## Method note

This sweep first attempted parallel-agent classification but the agents produced mixed-quality results (one agent returned no output, one covered only 4 of 10 assigned pages, and the agent that covered Tier A misclassified the now-corrected Soares 2000 row as DRIFT-HEDGE — its scope text on `infant-formula-powder-non-soy.md` already reads "Portugal powdered milk infant, follow-up, and dietetic formulas," which is exact per author scope). The sweep was completed by direct read against the canonical pages, with a heuristic grep pass for known over-hedge phrases (`until AI adjudication`, `milk-based or soy-based`, `format and soy/non-soy fit`, `broad ... context`) followed by source-page verification of each candidate.

The dominant drift pattern is **systemic over-hedging in the "Broad Product Context Awaiting AI Adjudication" tables** that appear on 15 of the 24 evidence-bearing pages. These tables defer row-fit decisions to "AI adjudication" with stock hedge text ("Powder context only until AI adjudication resolves soy/non-soy fit", "Broad formula context only until AI adjudication resolves format and soy/non-soy fit", etc.) — but for many of those source/page pairs, author scope already resolves the axis the hedge defers. Per CLAUDE.md Part 6, those rows should not be marked unresolved when the authors themselves resolved them.

The Soares 2000 fix has already cascaded through the canonical pages: the literal "milk-based or soy-based" hedge no longer appears on any product page. The remaining drift is the broader same-class pattern in the AI-adjudication-pending tables.

---

## DRIFT-HEDGE

The 19 DRIFT-HEDGE rows split into two groups: (a) broad-context table over-hedges where author scope already resolves the deferred axis, and (b) duplicate listings where the source already appears as direct evidence in a Source Evidence Inventory or Distribution Context table on the same page.

### Group A — Broad-Context Over-Hedge (author scope already resolves the axis)

Each entry below identifies a row in a "Broad Product Context Awaiting AI Adjudication" table whose hedge text defers a row-fit axis the source's author scope already resolves.

#### `infant-formula-powder-non-soy.md` § Broad Product Context Awaiting AI Adjudication

- **`chung2021-china-infant-formula-toxic-elements`** — Cr; tAs; Cd; Pb
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Proposed row-fit: "Broad formula context (cow-milk-based; format unresolved between powder and ready-to-feed) — soy/non-soy axis resolved by author."
  - Author quote: "93 cow milk-based infant formulas purchased in Beijing, China in 2019-2020 ... it does not distinguish non-soy powder from ready-to-feed liquid formula in HMTc terms" (source TL;DR).
  - Source page also needs deeper fix: no.

- **`collado-lopez2025-heavy-metals-baby-food-formula`** — Pb; Cd; tAs; tHg
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Proposed row-fit: "Scoping-review context with cow-based, soy-based, specialty, and nonspecified primary-protein-source subgroups; format unresolved."
  - Author quote: "in the review's primary-protein-source subgrouping, Pb was detected in 73 percent of cow-based formula items and Cd in 44 percent of cow-based formula items" (per the same product page's `Why This Category Is High-Risk` section); source frontmatter products also explicitly enumerate baby-cereals-dry-rice-based, baby-cereals-dry-non-rice, etc.
  - Source page also needs deeper fix: no.

- **`lutfullah2014-peshawar-dried-fluid-milk-metals`** — Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn
  - Current row-fit: "Powder context only until AI adjudication resolves soy/non-soy fit."
  - Proposed row-fit: "Dried-milk and dried-formula context; non-soy by author scope (milk-based by definition)."
  - Author quote: title "Comparative study of heavy metals in dried and fluid milk in Peshawar"; source matrices `[infant-formula, dried-milk, fresh-milk, processed-milk]`. Soy is not in scope.
  - Source page also needs deeper fix: no.

- **`meli2024-chemical-characterization-baby-food-italy`** — Al; tAs; Cd; tHg; Ni; Pb; Sn
  - Current row-fit: "Powder context only until AI adjudication resolves soy/non-soy fit."
  - Proposed row-fit: "Powdered-milk subset of European baby-foods study; non-soy by author scope (powdered milk is not soy)."
  - Author quote: "25 European baby foods consumed in Italy, including powdered milk, cream of rice, fruit, fish, meat, and cheese homogenized foods" (source TL;DR).
  - Source page also needs deeper fix: no.

#### `infant-formula-rtf-liquid-non-soy.md` § Broad Product Context Awaiting AI Adjudication

- **`chung2021-china-infant-formula-toxic-elements`** — Cr; tAs; Cd; Pb
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Proposed row-fit: "Broad formula context (cow-milk-based; format unresolved) — soy/non-soy axis resolved."
  - Author quote: same as powder-non-soy page above.
  - Source page also needs deeper fix: no.

- **`collado-lopez2025-heavy-metals-baby-food-formula`** — Pb; Cd; tAs; tHg
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Proposed row-fit: as above; review has cow-based subset that resolves soy/non-soy axis.
  - Source page also needs deeper fix: no.

#### `infant-formula-powder-soy-based.md` § Broad Product Context Awaiting AI Adjudication

- **`collado-lopez2025-heavy-metals-baby-food-formula`** — Pb; Cd; tAs; tHg
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Proposed row-fit: "Scoping-review context with explicit soy-based subset; format unresolved."
  - Author quote: review's primary-protein-source subgrouping enumerates cow-based, soy-based, specialty, and nonspecified.
  - Source page also needs deeper fix: no.

#### `infant-formula-rtf-liquid-soy-based.md` § Broad Product Context Awaiting AI Adjudication

- **`collado-lopez2025-heavy-metals-baby-food-formula`** — Pb; Cd; tAs; tHg
  - Same logic as powder-soy-based. Soy/non-soy axis resolved by author subset.
  - Source page also needs deeper fix: no.

#### `baby-cereals-dry-rice-based.md` § Broad Product Context Awaiting AI Adjudication

- **`gardener2019-lead-cadmium-infant-formula-baby-food`** — Pb; Cd
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "U.S. baby-foods/formula context; rice-containing subset signal acknowledged in author scope (Cd elevated in foods containing rice, quinoa, wheat, oats; Pb elevated in foods containing rice, quinoa, sweet potatoes)."
  - Author quote: cited verbatim in this same page's `Why This Category Is High-Risk` section: "Gardener 2019 reported that cadmium values were higher in foods containing rice, quinoa, wheat, and oats and that lead values were elevated in foods containing rice, quinoa, and sweet potatoes."
  - Source page also needs deeper fix: no.

- **`meli2024-chemical-characterization-baby-food-italy`** — Al; tAs; Cd; tHg; Ni; Pb; Sn
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "European baby-foods study with cream-of-rice subset; rice axis resolvable for that subset."
  - Author quote: "25 European baby foods consumed in Italy, including powdered milk, cream of rice, fruit, fish, meat, and cheese homogenized foods" (source TL;DR).
  - Source page also needs deeper fix: no.

- **`parker2022-baby-food-arsenic-cadmium-lead-mercury-risk`** — tAs; Cd; tHg; Pb
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "Grain baby-food group, mostly rice-containing per author note (2 of 3 grain-product types rice-based)."
  - Author quote: per this product page's `Distribution Context`: "Parker 2022 provides a small grain baby-food concentration distribution with N=9, but the grain group is not fully equivalent to dry rice cereal; the authors report that two of three grain-product types were rice-based and that arsenic was not speciated."
  - Note: this source already appears in the page's Distribution Context and Measured Values tables with a precise caveat. The broad-context entry duplicates the source as undifferentiated context.
  - Source page also needs deeper fix: no.

- **`signes-pastor2018-infants-dietary-arsenic-solid-food`** — iAs; tAs
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "Has rice-cereal subset per author scope (`products: [..., rice-cereal, ..., rice-based-snacks]`); already cited as direct evidence in Measured Values."
  - Author quote: source frontmatter `products: [infant-formula-powder, rice-cereal, fruit-purees, vegetable-purees, mixed-cereals, rice-based-snacks]`.
  - Note: this source is already cited directly in the `Measured Values And Concentration Evidence` table with rice-specific values. Broad-context duplication is the drift.
  - Source page also needs deeper fix: no.

#### `baby-cereals-dry-non-rice.md` § Broad Product Context Awaiting AI Adjudication

- **`gardener2019-lead-cadmium-infant-formula-baby-food`** — Pb; Cd
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "U.S. baby-foods/formula context; non-rice subset signal acknowledged (Cd elevated in foods containing quinoa, wheat, oats — non-rice grains)."
  - Author quote: same Gardener quote as above; the non-rice cohort within that quote is "quinoa, wheat, and oats".
  - Source page also needs deeper fix: no.

#### `teething-and-snacks-rice-based.md` § Broad Product Context Awaiting AI Adjudication

- **`signes-pastor2018-infants-dietary-arsenic-solid-food`** — iAs; tAs
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Proposed row-fit: "Has explicit rice-based-snacks subset per author scope; row-fit exact for the rice-snacks subset."
  - Author quote: source frontmatter `products: [..., rice-based-snacks]`.
  - Source page also needs deeper fix: no.

### Group B — Duplicate Listings in Broad-Context Tables

The following sources appear in both a direct-evidence table (Source Evidence Inventory / Distribution Context / Measured Values) **and** in the broad-context-awaiting-adjudication table on the same page. The direct-evidence entry already carries an appropriate row-fit caveat; the broad-context entry duplicates the source under a stock hedge that ignores the more specific scope already extracted. These overlap with several of the Group A entries above; counts kept distinct so the cleanup task is visible.

- `baby-cereals-dry-rice-based.md`: parker2022, signes-pastor2018, meli2024 (all listed in Distribution Context with rice-specific caveats and again in broad-context table).
- `infant-formula-powder-non-soy.md`: jackson2012, chung2021 (jackson2012 is in Source Evidence Inventory with caveat "powder/non-soy/soy not split"; chung2021 is in Source Evidence Inventory as "China cow milk-based formulas" with direct row-fit). Both are also listed in broad-context table.

Recommended Phase 2 fix: when a source has a direct-evidence entry, remove its broad-context-table duplicate, or refer the broad-context table forward ("see direct evidence above").

---

## DRIFT-WRONG

The 5 DRIFT-WRONG rows are sources whose author scope **explicitly excludes** the page's subcategory but are nonetheless listed (under a "broad context awaiting adjudication" hedge) on that page.

### `infant-formula-powder-soy-based.md` § Broad Product Context Awaiting AI Adjudication

- **`chung2021-china-infant-formula-toxic-elements`** — Cr; tAs; Cd; Pb
  - Current row-fit: "Broad formula context only until AI adjudication resolves format and soy/non-soy fit."
  - Drift: author scope is "93 cow milk-based infant formulas" (TL;DR). Cow-milk-based excludes soy. Soy/non-soy is not pending adjudication; the source rules soy-based out.
  - Proposed action: remove from this page, or relabel as "non-soy comparison context — explicitly excluded from soy-based pool by author scope."
  - Author quote: "93 cow milk-based infant formulas purchased in Beijing, China" (source TL;DR / Summary).
  - Source page also needs deeper fix: no.

- **`lutfullah2014-peshawar-dried-fluid-milk-metals`** — Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn
  - Current row-fit: "Powder context only until AI adjudication resolves soy/non-soy fit."
  - Drift: title and frontmatter scope are "dried and fluid milk" / `[infant-formula, dried-milk, fresh-milk, processed-milk]`. Soy is not in scope.
  - Proposed action: remove from soy-based page or relabel as non-soy comparison.
  - Author quote: title "Comparative study of heavy metals in dried and fluid milk in Peshawar"; source matrices exclude soy.
  - Source page also needs deeper fix: no.

- **`meli2024-chemical-characterization-baby-food-italy`** — Al; tAs; Cd; tHg; Ni; Pb; Sn
  - Current row-fit: "Powder context only until AI adjudication resolves soy/non-soy fit."
  - Drift: source's powder subset is "powdered milk", not soy.
  - Proposed action: remove from soy-based page or relabel.
  - Author quote: source TL;DR identifies the powder subset as "powdered milk".
  - Source page also needs deeper fix: no.

### `infant-formula-rtf-liquid-soy-based.md` § Broad Product Context Awaiting AI Adjudication

- **`chung2021-china-infant-formula-toxic-elements`** — Cr; tAs; Cd; Pb
  - Same drift as the powder-soy-based page; author scope is non-soy.
  - Source page also needs deeper fix: no.

### `teething-and-snacks-non-rice.md` § Broad Product Context Awaiting AI Adjudication

- **`fda2024-toxic-elements-baby-food-compliance-2009-2024`** — tAs; Pb; Cd; tHg
  - Current row-fit: "Broad product context only until AI adjudication resolves row fit, basis, species, and statistic type."
  - Drift: source frontmatter `products: [..., teething-and-snacks-rice-based]` lists rice-based teething/snacks but does not list `teething-and-snacks-non-rice`. Author scope is rice-named compliance samples.
  - Proposed action: remove from non-rice page (or restate as a comparator note pointing to the rice-based teething/snacks page).
  - Author quote: source frontmatter products array enumerates `teething-and-snacks-rice-based` only; TL;DR scopes to rice-named FDA compliance subsets.
  - Source page also needs deeper fix: no.

---

## DRIFT-SOURCE

Source pages whose own metadata or TL;DR hedges where the underlying paper is more precise. These need a deeper source-page fix, possibly with a raw-paper re-read.

### `wiki/sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin.md`

- Internal contradiction: frontmatter `matrices: [infant-formula-milk-powder]` (which would resolve the soy/non-soy axis as milk-based / non-soy), but TL;DR states "does not distinguish cow-milk, non-soy, or soy-based formulas". Either the matrix value over-claims or the TL;DR over-hedges.
- Proposed action: re-read the source paper's Methods/Materials section to determine whether the 13 brands are explicitly milk-based, and reconcile `matrices` with the TL;DR. If milk-based, downstream pages can drop the soy/non-soy hedge; if mixed, the matrix value should be relaxed.
- Affected downstream rows: `infant-formula-powder-non-soy.md` and `infant-formula-powder-soy-based.md` broad-context entries currently use the TL;DR hedge.

### `wiki/sources/almeida2022-brazil-infant-formula-toxic-metals.md` (suspected)

- The product page `infant-formula-powder-non-soy.md` Source Evidence Inventory describes Almeida 2022 rows as "Brazil cow-milk phase 1/2 formulas," but the source frontmatter is `products: [infant-formula-powder]` and lists no cow-milk distinction. The TL;DR was not fully read in this sweep.
- Proposed action: read the Almeida 2022 source page and verify whether the underlying paper specifies cow-milk and phase 1/2 in its abstract/methods. If yes, update the source page frontmatter (`matrices`) and TL;DR to carry that scope; if no, the product-page row text needs to retract the unsupported scope claim.

(These are the two clear DRIFT-SOURCE candidates that surfaced in the priority pages. Other source pages were not examined in equivalent depth in this sweep.)

---

## ACCEPTABLE-HEDGE (sampled)

These rows correctly hedge because the author actually used a vague umbrella term and the data tables do not narrow the scope. Listing a sample for traceability.

- `infant-formula-powder-non-soy.md` § Source Evidence Inventory — `jackson2012-arsenic-organic-foods-brown-rice-syrup` — tAs — caveat "Broad infant-formula evidence; powder/non-soy/soy not split." Author scope is "infant formulas without organic brown rice syrup" with no powder/soy split.
- `infant-formula-powder-non-soy.md` § Broad Product Context — `astolfi2021-italy-powdered-infant-formula-elements` — caveat "Powder context only until AI adjudication resolves soy/non-soy fit." Author specifies powder ("11 powdered infant formulas authorized and sold in Italy") but does not split soy/non-soy. Hedge is precisely calibrated.
- `infant-formula-powder-non-soy.md` § Broad Product Context — `chekri2019-french-infant-toddler-tds-trace-elements` — TDS broad-formula scope, no format/soy split.
- `infant-formula-powder-non-soy.md` § Broad Product Context — `efsa-cadmium-contam-2009`, `gardener2019-lead-cadmium-infant-formula-baby-food`, `spungen2024-fda-tds-infant-lead-cadmium`, `tatsuta2024-methylmercury-intake-children-duplicate-diet`, `marques2021-trace-elements-milks-plant-based-drinks`, `signes-pastor2018-infants-dietary-arsenic-solid-food`, `amarh2023-ghana-infant-food-heavy-metals` — all broad scope per author, hedges appropriate.
- `baby-cereals-dry-rice-based.md` § Broad Product Context — `chekri2019` — author explicitly does not split rice from non-rice cereals; hedge appropriate.
- `root-vegetable-purees.md` § Measured Values — `fsa2016` UK potatoes "Ingredient group, not finished puree" — author umbrella; hedge appropriate.
- `root-vegetable-purees.md` § Measured Values — `fsa2016` UK other vegetables "may include root vegetables" — author umbrella; hedge appropriate.
- `root-vegetable-purees.md` § French TDS — `chekri2019` "does not split root vegetables from non-root vegetables" — appropriate.
- `fruit-purees.md` § Measured Values — `fsa2016` "Fruit-based group, not puree-only" — appropriate.
- `fruit-purees.md` § Distribution Context — `parker2022` "Small N; no p10/p90; does not separate apple, pear, peach, banana" — appropriate.

(Sampled only; the broader corpus contains many more correctly-hedged rows.)

## CORRECT (sampled)

These rows have row-fit text that exactly matches author scope and are flagged here for traceability against the spot-checked Tier A pages.

- `infant-formula-powder-non-soy.md` § Source Evidence Inventory — `soares2000-chromium-vi-powdered-milk-formulas` — Cr-VI — current scope "Portugal powdered milk infant, follow-up, and dietetic formulas." Matches source matrices `[powdered-milk-infant-formula, follow-up-milk, dietetic-milk, reconstituted-milk]` and sample population "7 infant formulas, 5 follow-up milks, and 8 dietetic milks." This is the post-fix state of the original smoking-gun row; the prior "milk-based or soy-based" hedge has been removed.
- `infant-formula-powder-non-soy.md` § Source Evidence Inventory — `dabeka1987-canada-infant-formula-lead-cadmium` — Cd — "Canada milk-base infant formula powder, historical." Matches source products `[infant-formula-powder-non-soy, ...]`.
- `infant-formula-powder-non-soy.md` § Structured Concentration Rows — `fda2026-infant-formula-toxic-elements-special-survey` — explicit non-soy/soy/RTF/concentrated splits per source frontmatter, matches direct row mapping.
- `infant-formula-powder-non-soy.md` § Structured Concentration Rows — `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` — explicit non-soy split per source frontmatter; "as consumed" basis correctly noted.
- `infant-formula-powder-non-soy.md` § Structured Concentration Rows — `kazi2009-toxic-elements-in-infant-formulae` — "13 milk-based rows in pasted Table 3"; source frontmatter products `[infant-formula-powder-non-soy, infant-formula-powder-soy-based]` with matrices `[powdered-formula, milk-based-formula, soy-based-formula]` confirms 13 milk-based subset is direct.
- `infant-formula-powder-non-soy.md` § Structured Concentration Rows — `burrell2010-aluminium-in-infant-formulas`, `chuchu2013-aluminium-in-infant-formulas` — "non-soy powder products are grouped" caveat reflects that source enumerates non-soy products explicitly.
- `baby-cereals-dry-rice-based.md` § Distribution Context — `fda2024-toxic-elements-baby-food-compliance-2009-2024` — "FDA Dry Infant Cereals with rice named" — matches source frontmatter products `[..., baby-cereals-dry-rice-based, ...]`.
- `baby-cereals-dry-rice-based.md` § Measured Values — `signes-pastor2018-infants-dietary-arsenic-solid-food` — rice cereal medians cited with explicit "dry-weight medians" caveat; matches source `products: [..., rice-cereal, ...]`.
- `fruit-purees.md` § French TDS — `chekri2019-french-infant-toddler-tds-trace-elements` "Fruit purees" row N=30 — matches source's direct fruit-puree subset.
- `fruit-purees.md` § Measured Values — `parker2022-baby-food-arsenic-cadmium-lead-mercury-risk` — "Fruit baby foods" N=9 — matches source's fruit subset.
- `root-vegetable-purees.md` § Distribution Context — `fda2024` "FDA Vegetables rows with carrot, sweet potato, beet, or parsnip terms" — matches source's name-based root subset.
- `root-vegetable-purees.md` § Measured Values — `parker2022` "Root-vegetable baby foods" — matches source subset.
- `root-vegetable-purees.md` § Measured Values — `spungen2024-fda-tds-infant-lead-cadmium` "FDA TDS baby food sweet potatoes" — source frontmatter `products: [..., root-vegetable-purees, ...]`.
- `oral-electrolyte-solutions.md` and `glucose-solutions.md` — `dabeka2011-canada-infant-formula-lead-cadmium-aluminum` — source frontmatter products array explicitly lists `oral-electrolyte-solutions` and `glucose-solutions` as separate products with paper title naming both.
- `plant-milks-rice-based.md` — `damato2026-inorganic-arsenic-rice-based-beverages` — title and methods specify rice-based beverages.
- `plant-milks-soy-based.md` — `milani2023-trace-elements-soy-based-beverages` — title specifies soy-based beverages.
- `plant-milks-non-soy-non-rice.md` — `marques2021-trace-elements-milks-plant-based-drinks` — page correctly tags as "support source" with author scope identified.

## Ambiguities the rule does not resolve

These rows raise classification questions the Part 6 rule does not fully cover. Flagging for Karen rather than guessing.

1. **Format-axis under-hedge on Source Evidence Inventory rows.** On `infant-formula-powder-non-soy.md`, the Chung 2021 SEI rows (Pb, Cd, tAs, Cr) are scoped as "China cow milk-based formulas" without flagging that the source did not split powder format from RTF. Author scope explicitly states it "does not distinguish non-soy powder from ready-to-feed liquid formula." The page firmly assigns the rows to powder, which is the format the page covers. Question: should SEI placement on a format-specific page require either (a) author scope confirming that format, or (b) an explicit format-fit caveat in the row? Part 6 addresses over-hedging; this is structurally an under-hedge / placement question. (4 rows.)

2. **Same-source dual listing in SEI and broad-context tables.** Some sources are listed in both a direct-evidence table (with appropriate row-fit caveat) and in the broad-context-awaiting-adjudication table on the same page. The duplication is structurally redundant and the broad-context hedge contradicts the direct-evidence entry's more specific row-fit. Question: should the curator delete the broad-context duplicate, or refer it forward, or annotate it as "see direct evidence above"? (~2 rows on `infant-formula-powder-non-soy.md`; suspected on other pages.)

3. **Comparison-context inclusions on opposite-row pages.** Sources whose author scope explicitly excludes the page's subcategory (e.g., Chung 2021 cow-milk-based on the soy-based page) are currently listed under a stock "awaiting adjudication" hedge. Per the rule, these should not be there. But there may be analytical value in showing comparator data from the opposite row (e.g., what cow-milk formula concentrations look like for benchmarking against soy). Question: are these DRIFT-WRONG (remove) or should the wiki carry an explicit "comparator from clean-benchmark row" framing for them? Treating as DRIFT-WRONG in this report; flag for Karen on framing.

## Coverage limitations

- **Exhaustive vs. sampled.** The 24 evidence-bearing pages were enumerated and the broad-context tables were grepped exhaustively (85 rows across 15 pages). The Source Evidence Inventory / Distribution Context / Measured Values / Structured Concentration Rows tables were read in detail for the 4 Phase-2 priority pages (`baby-cereals-dry-rice-based.md`, `infant-formula-powder-non-soy.md`, `fruit-purees.md`, `root-vegetable-purees.md`) plus several adjacent pages (`infant-formula-rtf-liquid-non-soy.md`, `infant-formula-powder-soy-based.md`, `oral-electrolyte-solutions.md`, `glucose-solutions.md`, `plant-milks-*.md`). The remaining pages (`baby-cereals-dry-non-rice.md`, `non-root-vegetable-purees.md`, `teething-and-snacks-{non-rice,rice-based}.md`, `mixed-meals-{non-rice,rice-containing}.md`, `meat-and-poultry-purees.md`, `fish-containing-baby-foods.md`, the fruit-juice pages, and the misc category pages) had only their broad-context tables systematically reviewed; their direct-evidence tables were inspected only for hedge-pattern hits.

- **Source-page depth.** Source-page TL;DR/Summary text was read for the ~25 sources cited on the priority pages. Source-page Methods sections, Key Numbers tables, and underlying raw paper text were not re-read except where the sweep flagged a specific scope conflict.

- **Pages with `sources: 0`.** 14 product-category pages are stubs (coffee, matcha, true-tea, herbal-botanical, kombucha, fermented-beverages, vegetable-juices-non-root, vegetable-juices-root-vegetable-containing, soft-drinks, sports-energy-drinks, flavored-waters, category-5-beverages, piercing-post-assemblies, infant-formula-powder.md base). They have no source rows to classify; they are tracked as "no rows" coverage.

- **Crosswalk pages.** `regulatory-crosswalk-field-findings.md` and `lead-benchmark-context.md` are crosswalk hubs — their `sources` counts represent regulation refs, not occurrence rows. They were not classified row-by-row in this sweep; spot-check confirmed no Soares-style row-fit hedges in their primary tables.

- **DRIFT-WRONG count is conservative.** The 5 DRIFT-WRONG rows enumerated are confirmed cases. Several other sources (e.g., `lutfullah2014` on the infant-formula-powder-soy-based.md page) would also qualify; only the most-confident cases are listed pending Karen's framing call on Ambiguity #3 above.

## Phase 2 priority recommendations (advisory)

This section is advisory only — Phase 2 is gated on Karen's approval per the master plan.

1. **Highest priority for Phase 2 (Tier A)**:
   - `baby-cereals-dry-rice-based.md`: 5 broad-context rows to fix (4 DRIFT-HEDGE, 0 DRIFT-WRONG). Add rice-subset acknowledgments for gardener2019, meli2024, parker2022, signes-pastor2018; consider deduplicating signes-pastor2018 and parker2022 against direct-evidence entries.
   - `infant-formula-powder-non-soy.md`: 4 broad-context DRIFT-HEDGE (chung2021, collado-lopez2025, lutfullah2014, meli2024); plus address the Chung 2021 SEI format-fit ambiguity (Phase 2 question for Karen).
   - `infant-formula-rtf-liquid-non-soy.md`: 2 broad-context DRIFT-HEDGE (chung2021, collado-lopez2025).

2. **Tier A soy-row cleanup (also Phase 2)**:
   - `infant-formula-powder-soy-based.md`: 1 DRIFT-HEDGE (collado-lopez2025), 3 DRIFT-WRONG (chung2021, lutfullah2014, meli2024 — sources with non-soy author scope).
   - `infant-formula-rtf-liquid-soy-based.md`: 1 DRIFT-HEDGE (collado-lopez2025), 1 DRIFT-WRONG (chung2021).

3. **Tier B (Phase 4 batch)**:
   - `baby-cereals-dry-non-rice.md`: 1 DRIFT-HEDGE (gardener2019).
   - `teething-and-snacks-rice-based.md`: 1 DRIFT-HEDGE (signes-pastor2018).
   - `teething-and-snacks-non-rice.md`: 1 DRIFT-WRONG (fda2024).
   - Other Tier B pages (purees, snacks, mixed-meals, fish, meat) have only ACCEPTABLE-HEDGE entries on broad-context; their direct-evidence tables look clean per spot-checks.

4. **Source-page deeper fixes**:
   - `wiki/sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin.md`: reconcile `matrices: [infant-formula-milk-powder]` against TL;DR claim that source "does not distinguish cow-milk, non-soy, or soy-based formulas". Re-read raw paper Methods.
   - `wiki/sources/almeida2022-brazil-infant-formula-toxic-metals.md` (suspected): verify whether paper specifies "cow-milk phase 1/2 formulas" as claimed by `infant-formula-powder-non-soy.md`. Re-read raw paper.

5. **Class-level fix to consider**: the "Broad Product Context Awaiting AI Adjudication" table convention itself is creating systemic over-hedge because the stock hedge phrase ("until AI adjudication resolves [axis]") gets applied uniformly even when author scope already resolves the axis. Options:
   - Replace the stock hedge with a per-row hedge that names which axes are open and which are closed by author scope.
   - Move sources whose author scope resolves all relevant axes out of the broad-context table and into the direct-evidence inventory.
   - Add a column "Author-resolved axes" so the stock hedge is at least scoped to the unresolved axis only.

   This is a Phase 2 architectural question, not a per-row fix.
