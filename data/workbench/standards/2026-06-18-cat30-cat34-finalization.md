# Cat 30 (Culinary Oils) + Cat 34 (Herbs, Spices, Salt) — finalization

**Date:** 2026-06-18. **Trigger:** "handle the AI blocks + AI artifacts, then handle Cat 30 and Cat 34. Get as close as we can."

Two ex-Cat-7 categories finalized to the maximum the evidence defensibly supports, plus two reusable
infrastructure additions that close the "artifact" and "false-block" failure modes program-wide.

## Result

**Cat 30 — Culinary Oils and Fats (100% resolved, zero holds):**

| Row | Published | Not material |
|---|---|---|
| olive-oil | Pb 100, Cd 5, Ni 1000, Al 1000 ppb | tAs |
| cooking-oils-other | Pb 100, Cd 100, Ni 100, tAs 100, Al 2, tHg 200 ppb | — |

**Cat 34 — Herbs, Spices, and Salt (resolved except one honest gap):**

| Row | Published | Not material | Held (honest gap) |
|---|---|---|---|
| salt | Pb 200, Cd 20, tAs 10 ppb | Al | — |
| spices | Pb 600, tAs 1000, tHg 2000, Ni 10000, Sn 1000 ppb | Al | Cd (mixed-unit pool) |

Both bound PDFs built (`HMTc-Culinary-Oils-and-Fats-Program-Manual-2026.pdf`, 469 pp;
`HMTc-Herbs-Spices-and-Salt-Program-Manual-2026.pdf`, 471 pp). QC Gate: 0 CRITICAL.

## Infrastructure added (reusable across all categories)

1. **QC Gate C9 — artifact / non-meaningful-limit plausibility.** A literature-baseline value is held
   if (a) it exceeds 100 mg/kg absolute (no food *contaminant* standard is that high — it is an
   artifact or a no-cap accumulator analyte that must resolve by not-material/feasibility), or (b) it
   is thin-source (<3 distinct) and >15× the metal's multi-source median. Catches `salt Al 164,000`
   (n=1), `spices Al 846,635` (multi-source but 846 mg/kg), and wrong-analyte tails in seafood/rice.
2. **QC Gate C10 — blocked-pool publish guard.** A `BLOCKED` pool (mixed units / internally
   inconsistent, p95/p10 > 1e4) is held even when it carries a candidate value. Caught `spices Cd`
   (21-source pool, value unrecoverable until units align) and several other corpus leaks (holds 14→24).
3. **`data/evidence/standards-not-material.csv`** — definitive not-material designations. Distinct from
   "adjudication pending": a resolved scientific judgment that the analyte is not a contaminant for the
   matrix. Briefing renders "**not material** — <reason>"; gate emits `NOT_MATERIAL` (no value, not a
   defect). Pre-rounding pool is shown marked "pool not standardized" for transparency.
4. **`data/evidence/standards-no-ml-confirmed.csv`** — verified "no regulatory ML exists" cells. Silences
   the C1b cap-completeness WARN (the "AI block") where it is a false positive, not an unmapped-cap defect.

## Decisions (the judgment calls)

**Not-material designations (3 cells):**
- `olive-oil tAs` — As does not partition into the lipid fraction; the tail is the luka2019 unit
  self-contradiction confirmed in the 2026-06-11 suspect-cell audit; no oil As ML anywhere.
- `salt Al` — Al in salt is a permitted anti-caking additive (E554/E555/E559), not contamination; the
  single source (n=1, 164 mg/kg) is an additive/unit artifact; no salt Al contaminant ML.
- `spices Al` — natural soil uptake by Al-accumulating botanicals (P97 846 mg/kg, n=149); not a
  contaminant signal; no spice Al ML.

**Confirmed-no-ML (7 cells):** oils Cd/As/Hg (do not partition into the lipid fraction; no oil ML in
EU 2023/915, Codex CXS 193, AU/NZ Sch 19) and spices As/Hg (EU sets only tiered Pb for spices).

**Caps mapped (real, were unmapped):** `salt tAs` 500 ppb (AU/NZ Schedule 19, total As in salt) and
`salt tHg` 100 ppb (EU 2022/617 §3.3.5 + Codex). The salt tAs WARN was a *genuine* unmapped cap, not noise.

**Holds cleared:**
- `olive-oil Ni` — the heavy tail (p97/p50 = 20.8) is the real refined/hydrogenated-vs-cold-pressed
  bimodality; Ni *is* the hydrogenation catalyst; n=79 across 7 sources; no Ni ML; P97 577 ppb defensible.
- `spices Pb` — EU fruit-spice cap (600) binds far below the adulteration-tail pool P97 (4554); the
  heavy tail is immaterial to the published value. Same cap-immaterial logic as fish-freshwater Pb.

## FLAGGED FOR KAREN — ratification needed

**Spices `across_row_review_hook` resolved without a v1 sub-split.** All spices publish at the
most-conservative EU botanical tier (Pb 600, fruit-spice — tighter than the 1500 root / 2000 bark tiers
that turmeric and cinnamon fall under). Rationale: adulteration (turmeric/chili Pb·Cr lead-chromate) is a
deliberate-fraud vector caught by **lot testing** (Part 4), not by a tighter concentration standard — an
adulterated lot fails any standard. A high-adulteration-risk sub-split (tighter-than-cap for low-risk
spices) is deferred to a **post-publication ratchet**. If you want the split in v1 instead, this reverts.

## Honest residual gap

`spices Cd` — a 21-source, 3354-sample pool that is internally inconsistent (p95/p10 > 1e4, mixed
reporting units). A real Cd standard is unrecoverable until the units are normalized. Published as a
documented data-gap, not a value. This is a unit-normalization evidence task, not a missing-literature gap.
