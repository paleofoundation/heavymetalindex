# Manual-fetch ingest stop notes — 2026-05-20

## STOP: saleem2025 vegetables Grand Forks ND — duplicate source pages

**PDF**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables.pdf`

**Paper**: Saleem M, Wang Y, Pierce D, Sens DA, Somji S, Garrett SH. "Concentration and Potential Non-Carcinogenic and Carcinogenic Health Risk Assessment of Metals in Locally Grown Vegetables." *Foods* 2025, 14, 2264. DOI: 10.3390/foods14132264

**Situation**: DOI grep returns two existing source pages for this paper:

1. `wiki/sources/saleem2025-locally-grown-vegetables-north-dakota.md` — canonical candidate.
   - `raw_handle: MFK_concentration-potential-non-carcinogenic-carcinog`
   - `updated: 2026-05-17`
   - Has complete Table 1 per-vegetable means/SDs for all 13 species, full Table 3 EDIs, Table 4 THQ/HI, Table 5 TCR.
   - Lists 11 metals (Cd, Pb, tAs, tHg, Cr, Ni, Co, Cu, Zn, Mn, Se).

2. `wiki/sources/saleem2025-nd-vegetables-hra.md` — older redundant copy.
   - `raw_handle: manual-fetch-kimi` (legacy generic handle)
   - `updated: 2026-05-13`
   - Has narrative interpretation of FAO/WHO Cd exceedance percentages (100% tomato/green chili/white eggplant/capsicum; 86% onion/sugar beet/potato), THQ per-metal ranges, and a DW-vs-FW comparison caveat. Lists 6 metals (Pb, Cd, tAs, tHg, Ni, Cr).
   - Uses legacy ingredient slugs `[[ingredients/leafy-greens]]` and `[[ingredients/root-vegetables]]` (these slugs exist, but are category/aggregate pages rather than the specific-ingredient slugs the canonical page uses).

Both pages are in `routing_malformed.csv` with advisory status (Phase 1 `products: []` warning, not a build-blocking failure).

**Why stop rather than consolidate autonomously**: The older duplicate cite-key `saleem2025-nd-vegetables-hra` is referenced from 14 downstream files:

- `wiki/ingredients/root-vegetables.md`
- `wiki/ingredients/vegetables.md`
- `wiki/ingredients/spinach.md`
- `wiki/ingredients/leafy-greens.md`
- `wiki/metals/lead.md`
- `wiki/metals/chromium.md`
- `wiki/metals/cadmium.md`
- `wiki/metals/nickel.md`
- `wiki/metals/mercury-total.md`
- `wiki/metals/arsenic-total.md`
- `data/evidence/category1_autonomy_extracted_summary.csv`
- `data/evidence/review_events.jsonl`
- `data/evidence/data-gap-with-sources.csv`
- `data/evidence/cells-needing-synthesis.csv`
- `wiki/log.md`

Removing the older page without updating those references would create 10+ broken wiki backlinks plus stale evidence-CSV entries that point at a non-existent source. Updating them inline would require touching `wiki/ingredients/*.md` and `wiki/metals/*.md`, which this skill's hard constraints explicitly forbid (only `wiki/sources/` is in-scope).

The right consolidation pass is a multi-file rename/redirect (or a structured re-routing) that needs to be done as a deliberate workflow with Karen's awareness, not as a side-effect of an ingest tick.

**Recommended next steps** (Karen / dedicated workflow):

- Decide canonical cite-key. Recommendation: keep `saleem2025-locally-grown-vegetables-north-dakota` (current schema, complete data table, proper MFK_ handle).
- Run a global rewrite from `saleem2025-nd-vegetables-hra` → `saleem2025-locally-grown-vegetables-north-dakota` across `wiki/`, `data/evidence/*.csv`, `data/evidence/review_events.jsonl`, and `wiki/log.md`.
- Merge the narrative deltas from the older page into the canonical:
  - FAO/WHO Cd exceedance percentages (100% / 86% / 20% breakdown by vegetable type).
  - Explicit THQ ranges per metal (Cd 0.03–4.79, Co 0.25–3.54, As 0.14–7.05).
  - Explicit TCR ranges per metal (Cr 3.4×10⁻⁵ to 4.3×10⁻⁴ across species).
  - DW vs FW comparison caveat for FAO/WHO comparison.
  - iAs speciation caveat language ("tAs values cannot be equated to iAs for regulatory comparison").
- Delete `wiki/sources/saleem2025-nd-vegetables-hra.md`.
- Re-run routing audit.

**No commits made this tick.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## STOP: Yangtze vegetables cadmium PDF — filename/content mismatch

**PDF (as listed in raw/)**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Distribution of Cadmium in Fresh Vegetables Marketed in the Yangtze River Delta Region and Health Risk Assessment.pdf`

**Suggested handle**: `MFK_distribution-of-cadmium-in-fresh-vegetables-market`

**Situation**: the file on disk does not contain the paper its filename advertises. Reading all 15 pages of the PDF confirms the actual content is a completely different paper:

- Title: "Occurrence of Patulin and Polyphenol Profile of Croatian Traditional and Conventional Apple Cultivars during Storage"
- Authors: Skoko, A-MG; Vilić, R; Kovač, M; Nevistić, A; Šarkanj, B; Lores, M; Celeiro, M; Babojelić, MS; Kovač, T; Lončarić, A
- Journal: *Foods* 2022, 11, 1912
- DOI: 10.3390/foods11071912
- Subject: mycotoxin patulin and polyphenol profile in apples after storage; *Penicillium expansum* susceptibility studies

**Why this is a hard stop, not a routing problem**: the actual paper contains no heavy-metal data at all. Patulin is an organic mycotoxin, not a metal. There is no Pb/Cd/As/Hg/Ni/Al/Cr/Sn measurement, no exposure assessment of any HMI-vocabulary analyte, and no regulatory comparison to a heavy-metal limit. The paper is out of scope for this wiki regardless of how the file is renamed.

The intended PDF (cadmium in Yangtze River Delta vegetables) appears to be missing from the folder — the slot it would have occupied is filled by an unrelated apple/patulin paper. Possible causes: copy-paste mistake at fetch time; PDF downloaded from a wrong URL; renamed-but-wrong-content swap during folder reorganization.

**What I did NOT do**:

- Did not create `wiki/sources/MFK_distribution-of-cadmium-in-fresh-vegetables-market.md` (would have created a fraudulent source page — a wiki entry claiming to be a cadmium-in-vegetables paper, while the actual cite would point to an apples/patulin paper, or vice versa).
- Did not ingest the Skoko-et-al. apple/patulin paper under a corrected handle, because it has no metals content (Part 1 / Part 14 — out of scope for HMI).
- Did not commit. Did not append to `data/evidence/audit-queue.csv`.

**Recommended next steps** (Karen):

1. Verify the intended source: cadmium distribution in Yangtze River Delta fresh vegetables (likely Hu et al. or similar — multiple candidate papers match that title pattern). Locate the correct PDF and re-fetch.
2. Decide whether the misplaced Skoko-et-al. patulin paper should be moved into `raw/_skipped/` (out-of-scope) or simply deleted from `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/`. It is not an HMI source under any cite-key.
3. After the correct cadmium-in-vegetables PDF is restored to the slot, re-run `/ingest-next-manual-fetch-pdf folder=02_Vegetables_and_Vegetable_Products`.

**No commits made this tick.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## STOP: zhao2022 Sixth China TDS Pb/Cd — duplicate source pages

**PDF**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Exposure to Lead and Cadmium in the Sixth Total Diet Study - China.pdf`

**Paper**: Zhao X, Shao Y, Ma L, Shang X, Zhao Y, Wu Y. "Exposure to Lead and Cadmium in the Sixth Total Diet Study — China, 2016–2019." *China CDC Weekly* 2022, 4(9), 176–179. DOI: 10.46234/ccdcw2022.045

**Situation**: DOI grep returns two existing source pages for this paper — same recurring pattern as the saleem2025 stop above.

1. `wiki/sources/zhao2022-china-tds6-lead-cadmium-exposure.md` — newer, more complete.
   - `raw_handle: MFK_exposure-lead-cadmium-sixth-tds-china`
   - `updated: 2026-05-17`
   - Prose Key numbers (full per-category mean ± SD ranges for Pb and Cd, all 12 food categories).
   - Methods paragraph noting JECFA-73 PTWI withdrawal, BMDL₀.₁ for MOE, 63 kg adult-male reference.
   - Ingredients use canonical slugs: `[[ingredients/seafood]]`, `[[ingredients/vegetables]]`, `[[ingredients/milk-and-dairy]]`, `[[ingredients/beverages]]`.
   - No "China GB 2762-2017" regulation cross-link.
   - No cross-country comparison table.

2. `wiki/sources/zhao2022-china-sixth-tds-pb-cd.md` — older redundant copy.
   - `raw_handle: manual-fetch-kimi` (legacy generic handle — the reason the v2 raw_handle grep didn't catch the duplicate when the May-17 ingest ran)
   - `updated: 2026-05-13`
   - Table-formatted Key numbers (cleaner rendering than the newer prose version).
   - Supplementary Table S1 cross-country comparison reproduced (France, USA, UK, Australia, Canada, China 5th vs 6th TDS) — content NOT present on the newer page.
   - Cites China GB 2762-2017 maximum-level compliance — content NOT present on the newer page.
   - Uses legacy ingredient slugs `[[ingredients/aquatic-foods]]` and `[[ingredients/leafy-vegetables]]` (different from the canonical `[[ingredients/seafood]]` + `[[ingredients/vegetables]]` on the newer page).
   - Lists `[[regulations/china-gb-2762-2017]]` under "Wiki pages updated on ingest".

Same Phase 1 advisory state as saleem2025: both pages have `products: []` and are in `routing_malformed.csv` warn-only.

**Why stop rather than consolidate autonomously**: the older duplicate cite-key `zhao2022-china-sixth-tds-pb-cd` is referenced from 9 downstream wiki files and the newer cite-key `zhao2022-china-tds6-lead-cadmium-exposure` is referenced from 4 — and some pages reference both, double-counting the same source. Reference distribution:

| Downstream file | old (sixth-tds-pb-cd) refs | new (tds6-lead-cadmium-exposure) refs |
|---|---|---|
| wiki/ingredients/vegetables.md | 2 | 0 |
| wiki/ingredients/rice.md | 2 | 1 |
| wiki/ingredients/leafy-vegetables.md | 1 | 0 |
| wiki/metals/lead.md | 1 | 0 |
| wiki/metals/cadmium.md | 1 | 0 |
| wiki/ingredients/meat.md | 0 | 1 |
| wiki/ingredients/eggs.md | 0 | 1 |
| wiki/ingredients/wheat.md | 1 | 0 |
| wiki/ingredients/potatoes.md | 1 | 1 |
| wiki/ingredients/legumes.md | 3 | 0 |
| wiki/ingredients/white-sugar.md | 0 | 1 |

`data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/routing_malformed.csv`, `data/evidence/review_events.jsonl`, and `data/evidence/cells-needing-synthesis.csv` also reference one or both cite-keys.

Choosing a canonical cite-key, retiring the other, and rewriting backlinks across 9-11 wiki files plus 4 evidence artifacts is a curation decision (which slugs win — `aquatic-foods` vs `seafood`, `leafy-vegetables` as a sub-page vs collapsed into `vegetables`), not a mechanical merge. Doing it silently in an ingest tick risks (a) losing the unique content on the older page (cross-country comparison table, GB 2762-2017 compliance statement) and (b) drift in downstream pages that have synthesized against one cite-key or the other.

**Recommended resolution** (Karen):

1. Canonical pick: `zhao2022-china-tds6-lead-cadmium-exposure` (more descriptive cite-key + specific MFK_ handle that survived the May-17 dedupe sweep is the cleaner forward-compatible identity).
2. Before deleting `zhao2022-china-sixth-tds-pb-cd.md`, lift onto the canonical page: (a) the Supplementary Table S1 cross-country comparison; (b) the explicit "all values below China GB 2762-2017" compliance statement; (c) the `regulations/china-gb-2762-2017` backlink.
3. Decide whether `[[ingredients/aquatic-foods]]` and `[[ingredients/seafood]]` are taxonomy-aliases or two distinct ingredient slugs. The newer page uses `seafood`; the older uses `aquatic-foods`. Same question for `[[ingredients/leafy-vegetables]]` as a sub-page of `[[ingredients/vegetables]]`.
4. Run a sed-style backlink rewrite (`zhao2022-china-sixth-tds-pb-cd` → `zhao2022-china-tds6-lead-cadmium-exposure`) across the 9-11 wiki files and 4 evidence artifacts.
5. Delete the older sources page.
6. Re-run routing audit and synthesis triggers for any cell whose contributing-source count just changed.

**What I did NOT do** this tick: did not edit either source page, did not pick a canonical cite-key, did not rewrite any downstream references, did not commit, did not append to `data/evidence/audit-queue.csv`.

**Same pattern as saleem2025 stop above.** Worth a single sweep across all `raw_handle: manual-fetch-kimi` (legacy-generic) pages to surface any other duplicates the May-17 dedupe sweep missed.

**No commits made for this PDF.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## STOP: shavali-gilani2025 canned tomato/olives/pickles Iran — duplicate source pages (sibling-PDF re-encounter)

**PDF**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Investigation of Heavy Metal Levels in Canned Tomato Paste, Olives, and Pickled Cucumbers.pdf`

**Paper**: Shavali-gilani P, Abedini A, Irshad N, Maleknezhad S, Yazdanfar N, Sadighara P. "Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers." *Scientific Reports* 2025, 15:20923. DOI: 10.1038/s41598-025-06896-9

**Situation**: this is the **02_Vegetables sibling copy** of the same PDF flagged yesterday under `manual-fetch-stops-2026-05-19.md` (where the 01_Fruits copy of the identical paper was the assigned PDF). The same DOI `10.1038/s41598-025-06896-9` still has two existing wiki source pages, and the duplicate has not yet been consolidated:

1. `wiki/sources/shavalig2025-canned-tomato-olives-pickles-iran.md` — newer, current schema.
   - `raw_handle: MFK_investigation-heavy-metal-canned-tomato-olives-pickle`
   - `updated: 2026-05-17`
   - `raw_path` points at the **01_Fruits** copy (still incorrect for the PDF on disk in 02_Vegetables; was already noted in the 2026-05-19 stop).
   - Full current-schema Key numbers (all 8 metals × 3 matrices, exact Table 2 values), Methods brief, Implications.
   - `metals: [Cd, Cu, tAs, Fe, Pb, Sn, Zn, tHg]` (complete).
   - 5 inbound refs: `wiki/ingredients/olives.md`, `wiki/ingredients/dill-pickles.md`, `data/evidence/category1_autonomy_extracted_summary.csv`, `data/evidence/hmtc_aggregate_distributions.csv`, and yesterday's stop/batch notes.

2. `wiki/sources/shavali-gilani2025-canned-tomato-olive-pickle-iran.md` — older, legacy schema.
   - `raw_handle: manual-fetch-kimi` (legacy generic — same dedupe-miss pattern as saleem2025 and zhao2022 above)
   - `updated: 2026-05-13`
   - `raw_path` points at the **02_Vegetables** copy (correct for the PDF on disk in this tick).
   - Has the table-formatted Key numbers and an explicit `## Wiki pages updated on ingest` legacy section.
   - `metals: [Pb, Cd, tHg, Sn]` (incomplete — Cu/As/Fe/Zn detected and reported in body but omitted from frontmatter).
   - Frontmatter declares `products/canned-tomato-paste`, `products/canned-olives`, `products/pickled-vegetables` slugs that may or may not be valid in the current taxonomy.
   - 8 inbound refs (more than the newer page): `wiki/metals/{cadmium,tin,lead,mercury-total}.md`, `wiki/ingredients/{cucumbers,olives,tomato}.md`, `wiki/log.md`, plus the same evidence-CSV / review-events / stop-note hits.

**Why stop rather than consolidate autonomously**: same reasoning as the 2026-05-19 stop and the saleem2025 / zhao2022 stops above. Resolving this requires (a) Karen's pick of canonical cite-key (`shavalig2025-...` vs `shavali-gilani2025-...` — the latter preserves the hyphenated surname more naturally), (b) fixing the `raw_path` on the surviving page so it matches whichever PDF copy stays canonical (or noting both copies exist as `near_duplicates`), (c) rewriting 8-11 downstream inbound references across `wiki/metals/`, `wiki/ingredients/`, `wiki/log.md`, and four evidence artifacts, and (d) merging any unique content from the loser onto the winner. The skill's hard constraints forbid editing `wiki/metals/*.md`, `wiki/ingredients/*.md`, etc., so this cannot be done inside an ingest tick.

**This is now the third sibling-PDF re-encounter of the same duplicate-page conflict** (1st: 01_Fruits copy on 2026-05-19; 2nd: 02_Vegetables copy today). Both `raw/Manual Fetch Kimi /01_Fruits_and_Fruit_Products/.../Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers.pdf` and the 02_Vegetables sibling are the same paper. Until the duplicate is resolved, the tracker should mark **both** filesystem entries as `skip-known-stop` so future ticks don't re-process them.

**Recommended next steps** (Karen — same shape as saleem2025 / zhao2022):

1. Pick canonical cite-key. Suggested: `shavali-gilani2025-canned-tomato-olive-pickle-iran` (matches the author's hyphenated surname; the newer `shavalig2025` collapses it into a non-standard form). But the newer page has the more complete `metals` frontmatter and current schema, so this requires either (a) renaming the newer file to the `shavali-gilani2025` cite-key, or (b) lifting the newer page's body content over to the older filename. Mechanical sed-rename is cleanest.
2. Lift unique content from the loser onto the winner before deletion. The newer page has the complete 8-metal body; the older page has the table-formatted Key numbers (already in the newer page's prose). Confirm no narrative deltas are lost.
3. Fix `raw_path` on the winner: both copies exist on disk; list one as canonical and the other as `near_duplicates`.
4. Sed-rewrite the loser's cite-key → winner's cite-key across the 8+ inbound files.
5. Delete the loser page.
6. Re-run routing audit.

**What I did NOT do** this tick: did not edit either source page, did not pick a canonical cite-key, did not rewrite any downstream references, did not commit, did not append to `data/evidence/audit-queue.csv`. The audit-queue still lacks this paper (under either cite-key), confirming the duplicate has remained un-promoted since the 2026-05-13/17 ingests.

**No commits made for this PDF.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.


## STOP: li2017 Hg in vegetables/grains near Chinese coal-fired power plants — duplicate source pages

**PDF**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Mercury Pollution in Vegetables, Grains and Soils from Areas Surrounding Coal-Fired Power Plants.pdf`

**Paper**: Li R, Wu H, Ding J, Fu W, Gan L, Li Y. "Mercury pollution in vegetables, grains and soils from areas surrounding coal-fired power plants." *Scientific Reports* 2017, 7:46545. DOI: 10.1038/srep46545. CC BY 4.0.

**Situation**: DOI grep returns two existing source pages for this paper — same recurring pattern as the saleem2025 / zhao2022 / shavali-gilani2025 stops above.

1. `wiki/sources/li2017-mercury-vegetables-grains-coal-power-china.md` — newer, current schema, canonical candidate.
   - `raw_handle: MFK_mercury-pollution-vegetables-grains-soils-coal-fi`
   - `updated: 2026-05-17`
   - Complete prose Key numbers (full Table 2 per-vegetable/grain × 6-site × control matrix, soil Hg at all 6 sites, tomato organ distribution Fig. 3, full Table 4 water-rinse before/after, Table 5 PWI calculation).
   - Methods paragraph correctly identifies AFS detection, EPA Method 7473, Milestone ETHOS One digestor, no MeHg speciation.
   - `ingredients` uses specific canonical slugs: `lettuce`, `tomato`, `cucumber`, `green-bell-pepper`, `leafy-greens`, `rice`, `maize`, `legumes`, `vegetables`, `cereals`.
   - 5 inbound refs (wiki): `wiki/ingredients/{leafy-greens,rice,lettuce,cucumber,green-bell-pepper}.md`.

2. `wiki/sources/li2017-mercury-coal-power-plants-vegetables-grains.md` — older, legacy schema.
   - `raw_handle: manual-fetch-kimi` (legacy generic handle — same dedupe-miss pattern as the other three stops in this file)
   - `updated: 2026-05-13`
   - Table-formatted Key numbers (subset: A1, B1, max only — not full 6-site matrix), with prose THQ-style fold-exceedance summary.
   - Asserts "Jiangsu province area, China" in `sample_population` and Methods — **this is not in the source PDF**, which only identifies the plants as Power Plant A and Power Plant B in China without naming a province. This is invented detail.
   - Legacy `## Wiki pages updated on ingest` section listing `[[supply-chain/coal-combustion-mercury-pathway]]` — **this page does not exist**; another invented slug.
   - `ingredients: [leafy-vegetables, root-vegetables, rice, tomato]` — `root-vegetables` is taxonomy-valid but not declared by this paper (no root vegetables were sampled; cowpea is a legume, cucumber/eggplant/pepper/tomato are fruits, lettuce/amaranth/water spinach are leafy).
   - `metals: [tHg]` correct; `matrices: [leafy-vegetable, fruit-vegetable, grain, soil]` reasonable.
   - 6 inbound refs (wiki): `wiki/ingredients/{rice,leafy-vegetables,root-vegetables,tomato}.md`, `wiki/metals/mercury-total.md`, `wiki/log.md`.

Both pages are in `routing_malformed.csv` advisory state (Phase 1 `products: []` warn-only).

**Why stop rather than consolidate autonomously**: same reasoning as the three sibling stops in this file. Cite-key retirement requires Karen's pick, plus a sed-rewrite of 6 downstream `wiki/ingredients/*.md` + `wiki/metals/*.md` + `wiki/log.md` references that this skill's hard constraints explicitly forbid touching from inside an ingest tick. The older page also has invented attribution (Jiangsu, supply-chain page) and an off-target ingredient slug (root-vegetables) that should be removed during consolidation, not silently propagated.

**This is the fourth manual-fetch-kimi legacy-handle duplicate surfaced in this folder this week** (saleem2025, zhao2022, shavali-gilani2025, li2017). The pattern is consistent enough that a single one-shot sweep across `wiki/sources/*.md` with `raw_handle: manual-fetch-kimi` would surface the full duplicate set in one pass — likely worth doing before more ingest ticks burn cycles re-encountering them.

**Recommended next steps** (Karen — same shape as the other three stops):

1. Pick canonical cite-key. Recommendation: `li2017-mercury-vegetables-grains-coal-power-china` (current schema, complete data table, proper MFK_ handle, no invented attribution).
2. Before deleting `li2017-mercury-coal-power-plants-vegetables-grains.md`, lift onto the canonical page any unique narrative deltas. Quick scan: the older page's "supply-chain sourcing risk factor" framing in Implications is an interpretation, not source content; the table-formatted Key numbers are a subset of the canonical page's prose; no genuine deltas appear to be lost.
3. Drop the invented `[[supply-chain/coal-combustion-mercury-pathway]]` reference and the unsupported "Jiangsu" attribution during merge.
4. Sed-rewrite `li2017-mercury-coal-power-plants-vegetables-grains` → `li2017-mercury-vegetables-grains-coal-power-china` across the 6 downstream wiki files plus the 3 evidence artifacts (`category1_autonomy_extracted_summary.csv`, `routing_malformed.csv`, `review_events.jsonl`).
5. Delete the older sources page.
6. Re-run routing audit.

**What I did NOT do** this tick: did not edit either source page, did not pick a canonical cite-key, did not rewrite any downstream references, did not commit, did not append to `data/evidence/audit-queue.csv`.

**No commits made for this PDF.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## SKIP: ye2026 Sn in foods Zhejiang — same PDF already ingested + audited from 01_Fruits sibling earlier today

**PDF (this tick)**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China.pdf`

**Sibling PDF (same content, ingested earlier today)**: `raw/Manual Fetch Kimi /01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/Occurrence of Tin in Foods and Dietary Exposure Assessment in Zhejiang Province, China.pdf`

**Existing canonical source page**: `wiki/sources/ye2026-tin-foods-dietary-exposure-zhejiang.md`
- `cite_key: ye2026-tin-foods-dietary-exposure-zhejiang`
- `updated: 2026-05-20` (today, post-2026-05-14)
- `raw_path` points at the 01_Fruits sibling
- Audit queue entry exists: `status=audited-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-05-20`
- Absent from both `routing_unresolved.csv` and `routing_malformed.csv`

**Why skip per skill v2.0 Phase 1 step 1**: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." This PDF meets all three conditions — existing canonical page, updated today, clean routing. The 01_Fruits sibling was the entry point for the earlier ingest (commit `a6c57b8`); the 02_Vegetables sibling on this tick is the same paper byte-for-byte under the same DOI (`10.3390/foods15060982`).

**Why not consolidate the dual-folder filesystem entry**: this is a legitimate cross-folder duplicate of the raw PDF, not a duplicate source page. The canonical source page is unambiguous (`ye2026-tin-foods-dietary-exposure-zhejiang.md`). The tracker shows the 01_Fruits row as `ingested` and the 02_Vegetables row as `unprocessed`; updating the 02_Vegetables tracker row to point at the same canonical cite-key is a tracker housekeeping task, not a source-page edit. Logged here so the wrapper recognizes the situation rather than re-tripping on the same PDF again.

**No commits made for this PDF.** Audit-queue not updated (already has the canonical entry from this morning). Wrapper should advance to the next PDF in the folder.

## STOP: Cr(VI) polluted soils vegetables PDF — filename/content mismatch

**PDF (as listed in raw/)**: `raw/Manual Fetch Kimi /02_Vegetables_and_Vegetable_Products/02_Vegetables_and_Vegetable_Products/The Potential Health Risk Associated with Edible Vegetables Grown on Cr(VI) Polluted Soils.pdf`

**Suggested handle**: `MFK_the-potential-health-risk-associated-with-edible-v`

**Situation**: the file on disk does not contain the paper its filename advertises. Reading pages 1-7 and confirming via `pdftotext` shows the actual content is a completely different paper:

- Title: "Exploring the Effect of Market Conditions on Price Premiums in the Online Health Community"
- Authors: Li, Chaoran; Zhang, E; Han, Jingti
- Journal: *International Journal of Environmental Research and Public Health* 2020, 17(4), 1326
- DOI: 10.3390/ijerph17041326
- Subject: economics/management study of online doctor consultation pricing on Haodf.com (n=68,945 doctors); resource supply, resource concentration, and social stigma of disease as predictors of price premium; 2SLS fixed-effects regression.

**Why this is a hard stop, not a routing problem**: the actual paper contains no heavy-metal data at all. It is an econometric study of doctor-pricing behavior on a Chinese health-services website. There is no Pb/Cd/As/Hg/Ni/Al/Cr/Sn/Cr-VI measurement, no exposure assessment of any HMI-vocabulary analyte, no soil/vegetable sampling, no regulatory comparison. The paper is out of scope for this wiki regardless of how the file is renamed (same shape as the Yangtze-cadmium / Skoko-patulin mismatch above).

The intended PDF (Cr(VI) polluted soils → edible vegetables health risk) appears to be missing from the folder — the slot it would have occupied is filled by an unrelated econometrics paper. Same likely causes as the prior mismatch: copy-paste mistake at fetch time, wrong-URL download, or renamed-but-wrong-content swap during folder reorganization. Both mismatched PDFs share the IJERPH/MDPI source domain, which suggests the misfile occurred during a bulk MDPI fetch.

**What I did NOT do**:

- Did not create `wiki/sources/MFK_the-potential-health-risk-associated-with-edible-v.md` (would have created a fraudulent source page — wiki entry claiming to be a Cr(VI) vegetables paper, with cite pointing at the unrelated Li-Zhang-Han online-pricing paper, or vice versa).
- Did not ingest the Li-Zhang-Han online-pricing paper under a corrected handle, because it has no metals content (Part 1 / Part 14 — out of scope for HMI).
- Did not commit. Did not append to `data/evidence/audit-queue.csv`.

**Recommended next steps** (Karen):

1. Verify the intended source: "The Potential Health Risk Associated with Edible Vegetables Grown on Cr(VI) Polluted Soils" — likely a recent Cr(VI) bioaccumulation study (multiple candidate papers match that title pattern, including some open-access MDPI entries). Locate the correct PDF and re-fetch.
2. Decide whether the misplaced Li-Zhang-Han online-pricing paper should be moved into `raw/_skipped/` (out-of-scope) or deleted from the vegetables folder. It is not an HMI source under any cite-key.
3. Worth a sweep of the 02_Vegetables folder for additional filename/content mismatches — this is now the **second** confirmed mismatch in this folder (first was the Yangtze-cadmium PDF that turned out to be a Croatian apple/patulin paper). Two mismatches in one folder suggests the bulk-fetch step had a systematic shuffle, not a one-off slip.
4. After the correct Cr(VI)-vegetables PDF is restored to the slot, re-run `/ingest-next-manual-fetch-pdf folder=02_Vegetables_and_Vegetable_Products`.

**No commits made this tick.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## STOP: hands2024 multi-year dark chocolate/cocoa USA — duplicate source pages (different pipeline-origin pattern)

**PDF**: `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA.pdf`

**Paper**: Hands JM, Anderson ML, Cooperman T, Balsky JE, Frame LA. "A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA." *Frontiers in Nutrition* 2024, 11:1366231. DOI: 10.3389/fnut.2024.1366231. CC BY.

**Situation**: DOI grep returns two existing source pages for this paper — same paper, different ingest pipelines. This differs from the saleem2025 / zhao2022 / shavali-gilani2025 / li2017 pattern (which had legacy-generic `manual-fetch-kimi` raw_handle on the older copy). Here both pages cross-reference each other in `near_duplicates`, suggesting the duplication was noticed during ingest but never consolidated.

1. `wiki/sources/hands2024-multiyear-dark-chocolate-cocoa-usa.md` — manual-fetch / studies-folder origin.
   - No `raw_handle`; `raw_path: raw/studies/hands2024-multiyear-dark-chocolate-cocoa-usa.pdf` (present on disk, 568178 bytes)
   - `sha256: 817bb032242a39581ddd1845bb8c384d2cd0f9ddb80510444ba02eb55cd92bb0`
   - `updated: 2026-05-13`
   - `near_duplicates: [FM_11321977]`
   - Body: prose Key numbers, Table 1 summary stats reproduction, by-cohort table, Methods, Limitations (notes total-As not speciated, product-selection bias from prior exclusions), Implications across cert / courses / app / microbiome.
   - `ingredients: [cocoa, chocolate]`; `products: [chocolate]`; `matrices: [dark-chocolate, cocoa-powder, cocoa-products]`.

2. `wiki/sources/hands2024-dark-chocolate-cocoa-heavy-metals-usa.md` — Frontiers/Marker pipeline origin.
   - `raw_handle: FM_11321977` with `raw_path: raw/markdown/FM_11321977/FM_11321977.md` (present on disk, plus 5 extracted figure JPEGs)
   - `updated: 2026-05-13`
   - `near_duplicates: [hands2024-multiyear-dark-chocolate-cocoa-usa]`
   - Body: same metals/cohort numbers in slightly different prose form; explicit Organic Welch's T-test reproduction (6.09 vs 3.18 µg/day Cd); arsenic-speciation caveat ("predominantly inorganic due to soil uptake by cacao") — content **not** present on the studies-folder page.
   - `ingredients: [cocoa, chocolate]`; `products: [chocolate]`; `matrices: [dark-chocolate, cocoa-powder, cocoa-product]` (singular vs plural diff vs page 1).
   - Lists `[[regulations/california-prop65-madl]]` in `## Wiki pages updated on ingest` (legacy section) — content not on page 1.
   - Lists `[[products/dark-chocolate]]` in the same section — different slug from page 1's `[[products/chocolate]]`.

The MFK_ PDF on this tick (`raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/...`) is a **third** filesystem copy of the same paper. Same DOI, same 568178-byte file as the studies-folder copy. The suggested handle `MFK_a-multi-year-heavy-metal-analysis-of-72-dark-choco` is not currently the raw_handle on either existing page.

**Both pages are pre-2026-05-14 (updated 2026-05-13)**, so both qualify for merge-enhance under skill v2.0 Phase 1 step 1. Neither is currently in `routing_malformed.csv` (status would need verification), but both are referenced widely.

**Why stop rather than consolidate autonomously**: same reasoning as the four sibling stops earlier in this file. Reference distribution across downstream files (16 inbound for the canonical-candidate, 13 inbound for the FM_-handle copy; substantial overlap):

| File class | hands2024-multiyear-* refs | hands2024-dark-chocolate-* refs |
|---|---|---|
| wiki/metals/{lead, cadmium, arsenic-total}.md | 3 | 3 |
| wiki/ingredients/{chocolate, cocoa}.md | 2 | 2 |
| wiki/synthesis/{organic-certification-not-protective, us-chocolate-lead-temporal-decline}.md | 2 | 0 |
| wiki/batch-reports/* | seasonal-geographic-variance-2026-05-12 | p4-batch7-2026-05-13 |
| wiki/log.md | 1 | 1 |
| data/evidence/category1_autonomy_extracted_summary.csv | 1 | 1 |
| data/evidence/hmtc_aggregate_distributions.csv | 1 | 1 |
| data/evidence/review_events.jsonl | 1 | 1 |
| data/evidence/data-gap-with-sources.csv | 1 | 1 |
| data/evidence/cells-needing-synthesis.csv | 1 | 1 |

Particularly notable: two `wiki/synthesis/*.md` pages (`organic-certification-not-protective`, `us-chocolate-lead-temporal-decline`) cite **only** `hands2024-multiyear-dark-chocolate-cocoa-usa` and not the FM_-handle version, so dropping that cite-key without lifting onto the canonical would break synthesis-page provenance. Meanwhile the FM_-handle page has unique content (arsenic-speciation caveat, explicit Welch's T-test numbers, prop65-MADL regulation cross-link, dark-chocolate vs chocolate product slug). Mechanical pick + sed-rename loses some of the unique content from whichever loses.

**This is the fifth duplicate-source-pages stop in this file** (saleem2025, zhao2022, shavali-gilani2025, li2017, hands2024). Pattern variant: this one is **not** the legacy-generic `manual-fetch-kimi` raw_handle pattern — both pages have specific raw_handle / raw_path setups and explicitly cross-reference each other in `near_duplicates`. So the proposed one-shot sweep across `raw_handle: manual-fetch-kimi` would miss this case; a complementary sweep across pages that list a counterpart cite-key under `near_duplicates:` would catch the hands2024-style pattern.

**Recommended resolution** (Karen):

1. Pick canonical cite-key. Recommendation: `hands2024-multiyear-dark-chocolate-cocoa-usa` — preserves the "multi-year" descriptor central to the paper's contribution and is already referenced by both `wiki/synthesis/*.md` pages.
2. Before deleting `hands2024-dark-chocolate-cocoa-heavy-metals-usa.md`, lift onto the canonical:
   - The arsenic-speciation caveat ("predominantly inorganic due to soil uptake by cacao, distinct from marine matrices where organoarsenicals dominate").
   - The explicit Welch's T-test per-group numbers (organic 6.09 µg/day Cd vs non-organic 3.18 µg/day Cd, p=0.02).
   - The `[[regulations/california-prop65-madl]]` cross-link.
   - Decide between `products/chocolate` and `products/dark-chocolate` slug (current canonical uses `products/chocolate`; the FM_-handle page uses `dark-chocolate`).
3. Set `raw_handle: FM_11321977` on the canonical (preserves the Frontiers/Marker handle for retroactive PMC linkage); keep the existing `raw_path` (`raw/studies/...`) and update `near_duplicates: [FM_11321977, MFK_a-multi-year-heavy-metal-analysis-of-72-dark-choco]` to acknowledge all three filesystem copies of the same paper.
4. Sed-rewrite `hands2024-dark-chocolate-cocoa-heavy-metals-usa` → `hands2024-multiyear-dark-chocolate-cocoa-usa` across the 13 downstream files.
5. Delete the FM_-handle source page.
6. Re-run routing audit.

**What I did NOT do** this tick: did not edit either source page, did not pick a canonical cite-key, did not rewrite any downstream references, did not commit, did not append to `data/evidence/audit-queue.csv`. The MFK_-handle PDF copy in `07_Processed_Foods_Snacks_Beverages/` remains un-ingested as a separate source-page identity (correctly so — it's the same paper, just a third filesystem location).

**No commits made for this PDF.** Audit-queue not updated. Wrapper should advance to the next PDF in the folder.

## SKIP: grochowska-niedworok2020 Cd/Pb in Polish tomatoes — already ingested + audited 2026-05-18

**PDF (this tick)**: `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/Assessment of cadmium and lead content in tomatoes and tomato products.pdf`

**Paper**: Grochowska-Niedworok E, Nieć J, Baranowska R. "Assessment of cadmium and lead content in tomatoes and tomato products." *Rocz Panstw Zakl Hig* 2020;71(3):313-319. DOI: 10.32394/rpzh.2020.0126. CC BY-NC 3.0 Poland.

**Existing canonical source page**: `wiki/sources/grochowska-niedworok2020-cadmium-lead-tomatoes-poland.md`
- `cite_key: grochowska-niedworok2020-cadmium-lead-tomatoes-poland`
- `updated: 2026-05-18` (post-2026-05-14)
- `raw_path` points at the 07_Processed_Foods_Snacks_Beverages copy (the PDF on disk this tick)
- Audit queue entry exists (row 141): `status=audited-codex-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-05-18`, Codex merge-enhance applied on 2026-05-18 with 2 findings / 2 applied / 0 rejected
- Absent from both `routing_unresolved.csv` and `routing_malformed.csv`
- Routing audit shows 3 product-page rows

**Why skip per skill v2.0 Phase 1 step 1**: "Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed." This PDF meets all three conditions — existing canonical page with current schema, last updated 2026-05-18, clean routing, already Codex-audited and revised. There is also a sibling PDF copy at `raw/Manual Fetch Kimi /condiment_papers/04_Condiments_and_Sauces/Cadmium and lead in tomatoes and tomato products from Polish market.pdf` (same SHA-256), already noted in the existing page's verification notes.

**No commits made for this PDF.** Audit-queue not updated (already has the canonical entry from 2026-05-18). Wrapper should advance to the next PDF in the folder.
