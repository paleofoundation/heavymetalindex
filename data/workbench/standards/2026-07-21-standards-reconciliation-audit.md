---
op: standards-reconciliation-audit
date: 2026-07-21
audience: [staff]
generator: tools/standards/audit-standards-reconciliation.mjs
---

# Standards reconciliation audit

Cross-checks the pooling engine's auto-confidence (`sens_band`→firm, per
`build-category-standards-tables.mjs`) against the human adjudication layer
(`standards-outlier-adjudication.csv`) and the not-material list
(`standards-not-material.csv`). A conflict means the engine presents a cell more
confidently than ground truth allows. No threshold value is changed here; this is
the reconciliation anchor that makes 'firm' mean 'reconciled', not 'the pool was stable'.

_Scope: this reads the engine's **direct-pool** layer. Thin or no-data pools are NOT
flagged as conflicts — a thin cell may carry a defensible read-across in the briefing layer
(the four-anchor chain: empirical / analytical / regulatory / inferential). Only cells the
engine presents *more* confidently than the adjudication / not-material ground truth count._

**20 HIGH** (engine publishes/firms an adjudicated-away cell) · **3 MEDIUM** (value shown where 'adjudication pending' is honest).

## HIGH — build-blocking

| Cat | Row | Analyte | Engine shows | Conflict | Ground truth (latest adjudication) |
| --- | --- | --- | --- | --- | --- |
| ? | infant-formula-powder-non-soy | tAs | 923 ppb (firm) | firm-but-hold-provisional | HOLD PROVISIONAL pending market-stratification adjudication |
| ? | infant-formula-powder-non-soy | tHg | 11.33 ppb (firm) | firm-but-hold-provisional | HOLD PROVISIONAL pending market-stratification adjudication |
| 30 | cooking-oils-other | Cd | 56.75 ppb (provisional) | shown-but-not-material | not-material: Cadmium does not partition into the extracted lipid fraction; it remains with the press cake/meal, not the oil |
| 30 | cooking-oils-other | tAs | 56.18 ppb (firm) | shown-but-not-material | not-material: Arsenic does not partition into the extracted lipid fraction; seed/vegetable/nut oils carry no As contaminant signal |
| 30 | cooking-oils-other | tHg | 166 ppb (firm) | shown-but-not-material | not-material: Mercury does not partition into the extracted lipid fraction |
| 30 | olive-oil | Cd | 3.10 ppb (provisional) | shown-but-not-material | not-material: Cadmium does not partition into the extracted lipid fraction; it remains with the press cake/meal, not the oil |
| 30 | olive-oil | tAs | 608 ppb (provisional) | shown-but-not-material | not-material: Arsenic does not partition into the extracted lipid fraction; the pooled tail is a luka2019 unit self-contradiction (50-100x sibling sources) confirmed in the 2026-06 |
| 32 | vinegar | Pb | 868 ppb (firm) | firm-but-hold-provisional | HOLD PROVISIONAL: vinegar lead (signature) needs a market-temporal adjudication — does a 1993 study (pre lead-reduction in food-contact materials) belong in a 2026 certification li |
| 33 | chocolate | Pb | 362 ppb (provisional) | shown-but-not-shippable | NOT SHIPPABLE as a single blended row. Lead is the litigation-critical chocolate metal; an unstable blended P97 is indefensible. Resolve via the dark/milk subcategory split the cat |
| 33 | chocolate | Al | 118655 ppb (provisional) | shown-but-not-material | not-material: Aluminium in cocoa/chocolate is natural mineral content of cocoa (a known Al-accumulating crop) plus permitted additives in cocoa-with-additives products; the pooled  |
| 34 | salt | Al | 164000 ppb (firm) | shown-but-not-material | not-material: Aluminium in salt derives from permitted anti-caking additives (E554/E555/E559), not contamination; the single pooled source (n=1, 164 mg/kg) is an additive/unit arti |
| 34 | spices | Al | 846636 ppb (firm) | shown-but-not-material | not-material: Aluminium in dried spices/herbs reflects natural soil uptake by Al-accumulating botanicals; pooled P97 (846 mg/kg, n=149) is natural mineral content, not a contaminan |
| 6 | canned-seafood | Cd | 155 ppb (firm) | firm-but-held | HELD: dissolve to matrix-native rows + the tin platform; no freestanding canned-seafood standard (governance: surface to Karen) |
| 6 | canned-seafood | tAs | 3680 ppb (firm) | shown-but-withdrawn | HELD/WITHDRAWN: publish no tAs fish/seafood standard (arsenobetaine); iAs is the toxic-fraction analyte |
| 6 | fish-freshwater | tAs | 2025 ppb (firm) | shown-but-withdrawn | HELD/WITHDRAWN: publish no tAs fish/seafood standard (arsenobetaine); iAs is the toxic-fraction analyte |
| 6 | fish-marine-non-predatory | tAs | 83014 ppb (firm) | shown-but-withdrawn | HELD/WITHDRAWN: publish no tAs fish/seafood standard (arsenobetaine); iAs is the toxic-fraction analyte |
| 6 | fish-marine-predatory | tAs | 41247 ppb (provisional) | shown-but-withdrawn | HELD/WITHDRAWN: publish no tAs fish/seafood standard (arsenobetaine); iAs is the toxic-fraction analyte |
| 6 | seaweed-kelp-foods | iAs | 1829 ppb (firm) | firm-but-hold-provisional | HOLD PROVISIONAL pending source-level adjudication of the new iAs sources: verify analyte species (iAs not tAs), wet-vs-dry-weight basis, and >10x-median outliers (hijiki-type tota |
| 6 | seaweed-kelp-foods | tAs | 5516 ppb (firm) | shown-but-withdrawn | WITHDRAWN 2026-06-16: seaweed total-As is arsenosugar-dominated; iAs is the toxic AND regulated analyte (EU/AU/France seaweed limits are on iAs). Publish iAs, not tAs. |
| 6 | shellfish | tAs | 33023 ppb (provisional) | shown-but-withdrawn | HELD/WITHDRAWN: publish no tAs fish/seafood standard (arsenobetaine); iAs is the toxic-fraction analyte |

## MEDIUM — advisory (render 'adjudication pending')

| Cat | Row | Analyte | Engine shows | Conflict | Ground truth (latest adjudication) |
| --- | --- | --- | --- | --- | --- |
| 33 | chocolate | Ni | 7514 ppb (provisional) | shown-provisional-but-hold-provisional | HOLD PROVISIONAL pending more cocoa/chocolate Ni sources to confirm the P97; render adjudication-pending (the value is plausible, not an artifact, but the pool is too thin to publi |
| 6 | canned-seafood | Sn | 136029 ppb (provisional) | shown-provisional-but-held | HELD: dissolve to matrix-native rows + the tin platform; no freestanding canned-seafood standard (governance: surface to Karen) |
| 6 | canned-seafood | MeHg | 30.51 ppb (provisional) | shown-provisional-but-held | HELD: dissolve to matrix-native rows + the tin platform; no freestanding canned-seafood standard (governance: surface to Karen) |

## How to clear a conflict

- **withdrawn / not-material:** the engine must publish no value. Fix: make the
  tables/briefing generators suppress the cell (read these two files), or route the
  analyte out per the not-material rationale.
- **held / hold-provisional / review:** render 'adjudication pending', never a firm
  number, until the governance/source-adjudication decision is recorded.
- Re-run this audit after the generator is made adjudication-aware; HIGH must reach 0.

