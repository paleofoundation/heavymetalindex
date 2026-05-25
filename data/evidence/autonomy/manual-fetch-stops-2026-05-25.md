---
type: autonomy-log
date: 2026-05-25
purpose: Per-PDF stop notes from /ingest-next-manual-fetch-pdf cycles
---

# Manual-fetch ingest stops — 2026-05-25

## STOP: david2008-heavy-metals-canned-tomato-paste-romania (already-audited)

- **PDF:** `raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf`
- **Suggested handle:** `MFK_the-heavy-metals-analyses-in-canned-tomato-paste`
- **Existing wiki page:** `wiki/sources/david2008-heavy-metals-canned-tomato-paste-romania.md`
- **Existing page `updated:`** 2026-05-20 (post-2026-05-14)
- **Audit-queue row 248:** `audited-revised` / verdict QUARANTINE / 7 of 8 findings applied / 0 rejected / 1 deferred (commit 11483b0, 2026-05-20T16:16:53Z)
- **Routing audits:** cite-key not in `routing_malformed.csv`, not in `routing_unresolved.csv`
- **Verification pass against PDF (this session):** Table 1 values all match PDF p. 342 column order Cr/Fe/Pb/Cd/Sn/Al/Zn/As across all 5 samples; brand firewall correctly applied (Sultan / La Grande Famiglia / Winmark / Maxim's / Regal → product-form descriptors); methods accurate (novAA 400 G, ISO 15586:2003, MWS-2 Berghof, PGZ 402 Voltalab, calibration R Fe 0.99699 / Sn 0.9983); voltammetry Sn cross-check 3.60 / 3.40 ppm; regulation slug `eu-1881-2006-contaminants-superseded` exists; all four referenced ingredient/product slugs exist.

**Reason:** Page qualifies for SKILL.md Phase 1 step 1 skip rule ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"). The wrapper script selected this PDF but the v2.0 cycle was already completed on 2026-05-20. Re-running ingest + a second audit-subagent pass would produce no content changes and would consume Agent-tool budget that is better spent on un-ingested or pre-2026-05-14 PDFs in the same folder.

**Suggested next action for wrapper:** advance the queue past this PDF; pick a folder-mate whose wiki source page is missing or has `updated:` before 2026-05-14.

## STOP: cwielag-drabek2025-nuts-cd-pb-cr-ni-poland (true duplicate conflict — two existing pages for one DOI)

- **PDF:** `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0297_Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts_ Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts — Health Risk of.pdf`
- **Suggested handle:** `MFK_p0297-evaluation-of-cadmium-lead-chromium-and-nick`
- **DOI:** `10.1007/s12011-024-04438-4` (Biological Trace Element Research 203:3913–3930, 2025)
- **DOI grep hit two existing wiki source pages:**
  1. `wiki/sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland.md` (correctly-keyed; first author Ćwieląg-Drabek)
  2. `wiki/sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland.md` (malformed cite-key, mangled "Ćwieląg" + "Nieć[-Leśniak]")

**Why this is a stop, not a merge-enhance:**

The skill's EXISTING-path merge-enhance assumes a single existing page per DOI. Here there are two, and they disagree:

- Page (1) `cwielag-drabek2025` has accurate methods (ETAAS Savant AA Sigma GBC, HNO3-only digestion — matches PDF p. 3917) but a `raw_path` pointing to a condiment_papers folder it doesn't belong to, `products: ["[[products/cashews]]"]` only (thin — should include peanuts and nuts-seeds-other), and the typo `ingredients/almond` (no such page; canonical slug is `almonds`).
- Page (2) `cwielagniec2025` has **invented methods** ("Perkin-Elmer AAnalyst 800" / "HNO3 + HClO4 digestion" — neither appears in the paper; PDF p. 3917 names Savant AA Sigma GBC and supra-pure HNO3 only), **wrong EU MLs** (claims 0.1 mg/kg for peanuts and 0.05 mg/kg for other nuts; the paper itself cites the EU ML as 0.20 mg/kg for tree nuts and peanuts on p. 3918), unsupported "dry weight" basis attributions, and a stripped country attribution ("country: unspecified" for the 0.818 mg/kg Pb peanut sample when the paper explicitly says Poland, p. 3918). The cite-key itself is malformed.

Both pages are referenced inside generator-owned BEGIN/END marker blocks across `wiki/metals/{nickel,cadmium,lead,chromium}.md`, six ingredient pages, three product pages, `data/evidence/product_source_routing_audit.csv`, `data/evidence/review_events.jsonl`, `data/evidence/hmtc_aggregate_distributions.csv`, `data/evidence/cells-needing-synthesis.csv`, and the discovery corpus index. A clean dedup requires (a) deleting page (2), (b) merge-enhancing page (1) with correct raw_path / products / ingredient-slug fix / merged numerical detail from both prior versions verified against the PDF, (c) re-running every downstream generator that has page (2) baked into a BEGIN/END block, and (d) cleaning the audit-queue and synthesis-cells CSVs of page (2)'s cite-key. Steps (c) and (d) are outside what a single per-PDF ingest cycle does and would touch generator-owned blocks the skill forbids editing by hand.

This matches the skill's "True duplicate conflict" stop condition in spirit: the standard merge-enhance flow cannot resolve it without cross-cutting changes Karen should coordinate.

**Verification work already completed in this session** (so it doesn't need to be redone when the dedup is run):

- Read PDF pp. 1–18 (full body + all tables + references).
- Confirmed first author surname is Ćwieląg-Drabek (so `cwielag-drabek2025` is the correct cite-key; `cwielagniec2025` is malformed).
- Confirmed methods on PDF p. 3917: ETAAS Savant AA Sigma (GBC, Australia); microwave digestion in 8 mL supra-pure HNO3 (Merck) in Teflon containers, Magnum II ERTEC reactor; four-stage program (5 min/60% / 5 min/80% / 10 min/100% / 10 min cooling); recoveries Ni 98%, Cr 107%, Cd 95%, Pb 101%; LOD Cd 0.0017, Pb 0.018, Ni 0.27, Cr 0.034 mg/kg; LOQ Cd 0.0032, Pb 0.032, Ni 0.44, Cr 0.06 mg/kg.
- Confirmed n=69 (16 peanuts, 15 hazelnuts, 15 almonds, 8 cashews, 15 walnuts) from 13 countries; PDF p. 3916.
- Confirmed mean concentrations PDF p. 3918: Cd peanuts 0.092 mg/kg highest; Pb peanuts 0.229 mg/kg highest, one Polish peanut sample 0.818 mg/kg exceeded Chinese ML; Ni cashews 6.434 mg/kg highest, almonds 1.299 mg/kg lowest; Cr almonds 0.253 mg/kg highest, walnuts 0.133 mg/kg lowest.
- Confirmed below-LOQ rates p. 3918: Cd 41%, Pb 49%, Ni 21%, Cr 4%.
- Confirmed EU ML cited in paper is 0.20 mg/kg for Cd in tree nuts and peanuts; no EU ML for Pb / Ni / Cr in nuts (Chinese MLs apply: Cd 0.5 mg/kg, Pb 0.2 mg/kg peanuts only).
- Reference doses (paper p. 3917): Cd 0.0010, Pb 0.0036, Ni 0.0200, Cr 0.0030 mg/kg bw/day.
- License: CC BY 4.0 (PDF p. 3928).
- Paper does NOT specify wet vs dry weight basis explicitly — the digestion is performed on as-purchased nut samples without a prior drying step, so values are best read as as-purchased; both existing pages' "dry weight" annotation in page (2) is unsupported by the paper.
- No brand attribution in source-page-eligible body. Methods-vendor names (GBC Savant AA Sigma, ERTEC, TESTCHEM, OHAUS, Merck) are scientific-method-vendor names permitted by Part 12 Exception 2.

**Suggested next action for Karen / dedup pass:**

1. Delete `wiki/sources/cwielagniec2025-nuts-cd-pb-cr-ni-poland.md` (malformed cite-key, invented methods, wrong reg values).
2. Merge-enhance `wiki/sources/cwielag-drabek2025-nuts-cd-pb-cr-ni-poland.md`:
   - Fix `raw_path` to `raw/Manual Fetch Kimi /08_Nuts_Seeds_Legumes_and_Misc/08_Nuts_Seeds_Legumes_and_Misc/P0297_Evaluation of Cadmium, Lead, Chromium, and Nickel Content in Various Types of Nuts_ Almonds, Cashews, Hazelnuts, Peanuts, and Walnuts — Health Risk of.pdf`.
   - Fix ingredient slug `almond` → `almonds`.
   - Expand `products:` to `["[[products/peanuts]]", "[[products/cashews]]", "[[products/nuts-seeds-other]]"]` (per page (2)'s product set, which routes correctly to existing pages).
   - Drop unsupported "dry weight" annotations; the paper does not specify basis, so values are as-purchased nut.
   - Set `updated: 2026-05-25`.
   - Add `## Verification notes` documenting the dedup: page (2)'s invented methods and wrong regulatory values were verified against PDF and rejected; page (1)'s table values and methods were verified against PDF and kept; raw_path, products, and almond-slug typo were corrected.
3. Re-run downstream generators that have `cwielagniec2025` baked in (metals, ingredients, products, routing audit, hmtc_aggregate_distributions, cells-needing-synthesis, review_events, discovery corpus-index).
4. Clean `data/evidence/audit-queue.csv` of `cwielagniec2025` entries; add a single `cwielag-drabek2025` `pending` entry for fresh audit.

The wrapper should advance the queue past this PDF; the dedup is a non-trivial coordinated cleanup task for a dedicated session, not a per-PDF cycle.

**Wrapper output line:** `STOP: true-duplicate-conflict cwielag-drabek2025-nuts-cd-pb-cr-ni-poland`
