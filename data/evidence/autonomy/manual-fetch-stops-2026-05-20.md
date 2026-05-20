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

