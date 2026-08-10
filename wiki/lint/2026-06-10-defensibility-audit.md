---
type: lint
op: defensibility-audit
date: 2026-06-10
auditor: Fable 5 (independent adversarial pass)
branch: fable/defensibility-audit-2026-06-10
scope: claim-to-source traceability, orphaned evidence, structural holes, scorecard
out_of_scope: Part 2 wiki/HMT&C drift check (deferred until synthesis matures)
status: report-only (no fixes applied per isolation rules)
noindex: true
---

# Adversarial defensibility audit — 2026-06-10

An independent (different-model) pass auditing the wiki the way a hostile plaintiff's
expert in a class action would: hunting for the places where "we have reviewed the
complete literature and here is what it says" breaks under cross-examination. Trust
nothing; verify against the cited sources.

**One-level caveat up front (see "What I could not verify"):** this pass traces each
sampled claim from the ingredient/product page to the cited `wiki/sources/` page and
checks the source page supports the value. It does **not** re-open the raw PDF behind
each source page. The headline finding below survives that caveat because the source
page's *own data table* contradicts the ingredient page — no PDF needed.

## Scorecard

| Metric | Value | Method / caveat |
| --- | --- | --- |
| Sampled claims verified to source | 9 / 12 deep source-cited claims (75%); 19 / 22 incl. regulatory-limit checks (86%) | Deep = read cited source page, compared value. Regulatory checks against domain knowledge of EU 2023/915, Codex CXS 193, FDA CTZ. |
| Litigation-blocking factual errors found | 1 (repeated ~30× on one page) | garuba2024 misattribution, below. |
| Drift findings (Part 2) | 0 (not assessed) | Deliberately out of scope this pass. |
| Extracted evidence actually routed | 45.6% (267 / 585 Category-1 autonomy rows carry a `row_slug`); 318 are slug-less | `data/evidence/category1_autonomy_extracted_summary.csv`. 267 of the 318 unrouted are EF-2 (pooling-fit) — good evidence, invisible to every wiki page. |
| Zero-evidence **claim-bearing** pages | 0 | All 103 locked product pages with zero routed sources are `products_status: scaffold` stubs that make no numeric claim. Technical debt, not a defensibility hole. |

Headline: the wiki's automated provenance posture (`claim-provenance-summary.json`:
100% supported) is **true for what it measures and misleading for what a litigator
will read it to mean.** It verifies a citation *exists* near each number; it does not
verify the number is the one the source reports, and it does not look at metals or
regulations pages at all. The single confirmed factual error below was scored
"supported" by that audit.

## Findings

| severity | type | file:line | finding |
| --- | --- | --- | --- |
| litigation-blocking | wrong-value-misattribution | `wiki/ingredients/rice.md:263` (and ~30 repeats: 455, 642, 820, 998, 1176, 1351, 1521, 1691, 1857, 2023, 2179, 2335, 2491, 2647, 2803, 2959, 3115, 3271, 3427, 3583, 3738, 3893, 4044, 4195, 4345, 4495, 4645, 4795, 4945, 5095, 5245, 5393, 5521) | Row states "US commercial **rice-cereal** infant product … tAs 0.102 µg/g (essentially at FDA 100 ppb iAs action level)". Per the cited source's own Table 3 (`wiki/sources/garuba2024-heavy-metals-commercial-baby-foods.md`), 0.102 µg/g tAs is sample **S7 "beef and gravy"**, not rice cereal. The actual rice-cereal sample **S5 = 0.013 µg/g tAs (13 ppb)** — about one-eighth of the action level, not "essentially at" it. An opposing expert pulls Garuba 2024, finds rice cereal at 13 ppb, and the page's central rice-arsenic exhibit collapses. The 2026-05-14 batch report flagged the *speciation* concern but missed that the wrong sample's value was attributed to rice cereal. Provenance audit scored this "supported" because "0.102 µg/g" appears on the source page. |
| serious | matrix-confusion (soil-as-food) | `wiki/ingredients/rice.md:239` (repeat 431) | Sources-inventory row surfaces "total Sb 94.41 mg/kg" as rice occurrence evidence (n=1). The cited huang2025 study measured that in **mining-contaminated paddy soil (0–20 cm)**, not rice grain. Labeled "paddy soil" in the row text, but it sits in the rice *occurrence* inventory and is auto-counted as a rice numerical claim. |
| serious | matrix-confusion (soil-as-food) | `wiki/ingredients/rice.md:352` | Row reads "FA473 at 1500 µg/kg soil exceeds EU 10 µg/kg and China 20 µg/kg grain limits." 1500 µg/kg is the **soil-spiking treatment level** in a greenhouse pot experiment (`enamorado-montes2021`); the rice **grain** value that actually exceeds the comparators is **26.15 µg/kg**. The surfaced number (1500) is a soil dose, presented adjacent to a grain-limit comparison. Misreads as a 1500 µg/kg rice value. |
| serious | matrix-confusion (soil-threshold-as-food) | `wiki/ingredients/leafy-vegetables.md` (Sources section, "0.869 mg/kg") | "0.869 mg/kg" surfaced as a leafy-vegetables claim is a **soil-extractable Cd safety threshold (0.489–0.869 mg/kg)** for safe production, not a measured leafy-vegetable concentration. Same pattern: environmental/soil numbers entering food-ingredient evidence inventories. |
| serious | audit-coverage-gap | `data/evidence/claim-provenance-summary.json:1` | `supported_pct: 100` is computed over ingredient + product pages only (`by_type` has exactly those two keys). 16 metals pages, 51 regulations pages, plus testing/mitigation pages carry numeric claims and are **never sampled**. A litigator who finds one bad number on `metals/*` or `regulations/*` rebuts "100% provenance" instantly. The summary does not disclose its own scope. |
| serious | audit-method-blind-spot | `tools/audit-claim-provenance.mjs:11-20` (doc-comment) | The audit, by its own admission, "does not verify that the cited source actually contains the claimed value … it only verifies a citation exists." The 100% headline therefore measures citation-proximity, not factual support. The garuba error above is the existence proof. Recommend the summary JSON carry an explicit `verifies: citation-existence-only` field so it cannot be quoted as value-level verification. |
| serious | invisible-evidence | `data/evidence/category1_autonomy_extracted_summary.csv` | 318 / 585 (54%) extracted Category-1 rows carry no `row_slug`; 267 of those are EF-2 (pooling-fit). This is defensible, already-extracted evidence that appears on no wiki page — i.e., the "complete literature" the wiki claims to have reviewed includes ~270 fit data points it has read but not surfaced. `hmtc_pool_starvation_audit.csv` tracks 193 of these (190 with a usable statistic) across 55 sources. |
| technical-debt | routing-unresolved | `data/evidence/routing_unresolved.csv` (17 rows, 10 sources) | 17 source→target declarations resolve to nonexistent pages. The **source pages exist and hold the data**, so this is not a false-claim hole; it is evidence that fails to fan out. Split below. |
| technical-debt | scaffold-debt | `data/evidence/product-mandatory-sections-audit.csv` + 103 locked rows | 103 locked product pages have zero routed sources; all are `products_status: scaffold` / `literature_scope: none` stubs that make no numeric claim. Harmless from a defensibility standpoint (a page that says "no sources yet" cannot be impeached). Note: 28 of them (e.g. `antiperspirant`, `canned-meats`, `refined-sugar`, `confectionery-candy`) are **absent from the product-mandatory-sections audit entirely** — the audit silently does not evaluate them, which is itself a small coverage gap. |
| technical-debt | page-bloat / error-amplification | `wiki/ingredients/rice.md` (7,250 lines; same Garuba row repeated 35×; 34 "Source Evidence Inventory"/"Sources" blocks) | A generator is emitting the full per-source inventory once per metal, duplicating every row ~30×. This is why the single garuba error reproduces 30 times. Bloat is cosmetic; the amplification is the real risk — one bad row becomes 30 impeachable lines. |

## Traceability sample detail (what was checked)

PASS (value matches cited source page):
- `huang2022` pooled Cd 0.16 mg/kg / Pb 0.10 mg/kg, 29 / 24 studies — exact.
- `pain2023` raw pheasant dogfood Pb 220.99 ppm d.w. — exact (labeled as dogfood; fine).
- `efsa-lead-contam-2010` BMDL₀₁ 12 µg/L (dev. neurotox), 36 µg/L (SBP), BMDL₁₀ 15 µg/L (CKD) — all three exact.
- `efsa-nickel-contam-2020` chronic oral TDI 13 µg/kg b.w./day — exact.
- `fsa2016` Ni 124–127 ppb in UK cereal-based infant foods (`baby-cereals-dry-non-rice`) — exact.
- Regulatory-limit claims spot-checked against domain knowledge and found consistent:
  guava Pb 100 ppb (EU 2023/915 general fruit); bivalve Cd 1.0 mg/kg / 1.5 mg/kg Pb;
  EU iAs rice 0.10 mg/kg; cinnamon NYS 0.21 mg/kg Pb; Codex cereal Cd 0.10 / Pb 0.20 mg/kg;
  infant-formula EU 0.020 mg/kg powder basis. (Checked against knowledge, not PDFs — see caveat.)

FAIL / FLAG:
- `garuba2024` rice-cereal tAs 0.102 µg/g — litigation-blocking (above).
- `enamorado-montes2021` 1500 µg/kg, `huang2025` Sb 94.41 mg/kg — soil values in food inventory (above).

## Orphaned / unresolved evidence — classification (not just count)

`routing_unresolved.csv`, 10 distinct sources, two buckets:

**Recoverable by alias (sub-5-paper ingredient — add as alias on parent, per Part 10):**
- `sage` (dghaim2015) → alias on `herbs-and-spices`.
- `whey` (editor2019) → alias on a dairy-derived ingredient.
- `jujube fruit`, `human milk` (introduction2014) → `human milk` maps to existing `breastmilk`; `jujube fruit` alias on a fruit parent.
- `biscuits`, `meats` (original2020, unknown2016) → aliases on `grain-based-snacks` / `meat`.
- `milk-based infant formula`, `cereal-based infant formula` (keywords2019) → broad tokens; should fan to existing infant-formula split rows, not new pages.

**Frontmatter slug should be remapped to an existing locked row (no new page needed):**
- `products/infant-cereal`, `products/infant-rice-cereal` (signes-pastor2018, open2017) → `baby-cereals-dry-rice-based` / `baby-cereals-dry-non-rice` already exist.
- `products/infant-formula`, `infant-formula-stage2`, `products/infant-formula-powder-dairy` → existing infant-formula split rows.
- `canned-tomato-paste`, `canned-olives`, `pickled-vegetables` (shavali-gilani2025) → map to existing canned/pickled product rows or propose under Cat 6/7.

None of these 10 sources is a false-claim defect: the source page carries the data; the
data just is not surfaced on an aggregation page. Defensibility risk: **low**
(no wrong claim). Completeness risk: **moderate** (evidence read but not visible).

`hmtc_pool_starvation_audit.csv` (193 empty-slug rows, 55 sources): sampled ~30.
Clearly recoverable to an existing ingredient page — `alrashdi2024`, `yan2025`,
`myatsoe2023`, `qin2026`, `xu2020` → `rice`; `armand2026`, `dearing2025`,
`sultana2022` → `leafy-vegetables` / `root-vegetables`; `romero-estevez2019` → `cocoa`;
`asni2020` → `seaweed`. Genuinely off the food-ingredient taxonomy (exposure-only,
in-scope per inclusion-default but not an ingredient page): `chen2023-breast-milk`
(no `human-milk` page), `eccles2024-polar-bear`, `badeenezhad2021-drinking-water`,
`benabbes2021-hair-dyes`, `abedi2023-hen-eggs`. Rough split of the sample: ~60%
recoverable to an existing page, ~40% need an alias/new page or are exposure-context.
Estimated defensible food-matrix evidence currently invisible: on the order of
150–270 pooling-fit data points (lower bound = starvation audit usable rows minus the
clearly-non-food sources; upper bound = all EF-2 slug-less Category-1 rows).

## Fixes to apply when Phase 1 is paused

Ordered by defensibility impact. Each is file-scoped so a later pass executes directly.

1. **(litigation-blocking) Correct the Garuba rice-cereal row.** In `wiki/ingredients/rice.md`,
   every row citing `garuba2024-heavy-metals-commercial-baby-foods` must read:
   rice cereal (Garuba S5) tAs **0.013 µg/g (13 ppb)**; and remove "essentially at FDA
   100 ppb iAs action level." If the 0.102 µg/g figure is retained anywhere, attribute
   it correctly to S7 "beef and gravy" on `wiki/ingredients/meat-and-poultry.md` (or beef),
   not rice. Because the row is duplicated ~30×, fix it at the generator/source-legend
   layer, not by hand-editing 30 lines. Re-run the source-legend / inventory generator
   for rice after correcting the underlying record.
2. **(serious) Strip soil/environmental values out of food-ingredient occurrence inventories,
   or tag them.** `rice.md` huang2025 Sb 94.41 mg/kg (soil) and enamorado 1500 µg/kg (soil
   treatment) and `leafy-vegetables.md` 0.869 mg/kg (soil threshold) should either be moved
   to a clearly-labeled "soil / environmental context" sub-block or carry an explicit
   `matrix: soil` flag so they are never pooled or read as food concentrations. Audit the
   generator that builds Sources inventories to exclude `matrices: [soil]`-only rows from the
   food-occurrence table.
3. **(serious) Make the provenance audit honest about scope and method.**
   In `tools/audit-claim-provenance.mjs` add metals/, regulations/, testing/, mitigation/
   to the page set, and add a `verifies: "citation-existence-only"` field plus per-type scope
   to `claim-provenance-summary.json`. Until value-level (PDF-side) verification exists, the
   100% number must not be quotable as factual verification.
4. **(serious) Route the 270 slug-less EF-2 Category-1 rows.** Run a slug-assignment pass over
   `category1_autonomy_extracted_summary.csv` mapping obvious sources to existing ingredient
   pages (rice/leafy-vegetables/root-vegetables/cocoa/seaweed list above). Target: move
   "extracted evidence routed" from 46% toward parity with the manually-curated inventories.
5. **(technical-debt) Resolve `routing_unresolved.csv` by remapping frontmatter slugs** to the
   existing locked rows listed in the classification above (infant-cereal→baby-cereals-dry-*,
   etc.) and adding sub-5-paper ingredients as aliases. No new pages required for most.
6. **(technical-debt) De-duplicate `rice.md`.** Fix the inventory generator so each source row
   appears once, not once per metal. This shrinks the page from 7,250 lines and removes the
   30× error-amplification surface.
7. **(technical-debt) Add the 28 missing rows to `product-mandatory-sections-audit.csv`** so
   every locked product page is actually evaluated by the audit that claims to cover them.

## What I could NOT verify

- **PDF ground truth.** I verified ingredient/product page ↔ cited `wiki/sources/` page.
  I did not re-open raw PDFs to confirm the source pages themselves faithfully represent
  the PDFs (except where a source page carried its own dated verification note). A source
  page that misreads its PDF would pass this audit. The garuba finding is robust regardless
  because the source page's internal table is self-contradicting with the ingredient page.
- **Full ~40-claim depth.** I deep-verified 12 source-cited value claims plus ~10
  regulatory-limit claims (22 total), not 40, prioritizing depth on the high-traffic rice /
  infant-food / lead cluster where litigation exposure concentrates. Coverage of antimony,
  tin, chromium-VI, and the cosmetics/cleaning/supplement product families is thin in this
  pass.
- **Metals and regulations pages** were spot-checked (`metals/lead.md` traced clean to
  `efsa-lead-contam-2010`) but not systematically sampled; they are outside the existing
  provenance audit and were outside my sampling budget here. They are the most likely place
  the next undiscovered error lives, precisely because nothing audits them.
- **Whether the 270 unrouted EF-2 rows are net-new** vs. already represented on ingredient
  pages via the separately-curated Sources tables. The 46%-routed figure is computed on the
  autonomy-extraction pipeline only; the manually written inventories are a parallel path and
  may already carry some of this evidence under different provenance.

`DONE: defensibility audit -> fable/defensibility-audit-2026-06-10`
