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
