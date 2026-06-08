# Task spec — fix flagged Cat 6/7 extraction rows (for Codex / GPT-5.5)

The first extraction sweep produced systematically wrong unit conversions. The
validation gate (`tools/evidence/validate-extraction-rows.mjs`) flagged the bad
rows. Your job: re-extract ONLY the flagged rows, correctly, until the flag list
is clean.

## Work list

`data/evidence/extraction_review.csv` — one row per (file, row_slug,
metal_species, max_value_ppb, note). Every entry is a value that is implausibly
high for that analyte in that food and is almost certainly a unit-conversion
error. Also re-check `data/evidence/extraction_quarantine.csv` (already rejected;
fix and re-add only if genuinely valid).

## The one rule you broke: unit conversion. Do it explicitly, per row.

The target unit is **ppb = µg/kg**. For EVERY value, write the source's reported
unit and the conversion in the `notes` column. Conversions:

- ng/g  → ppb : × 1        (1 ng/g = 1 µg/kg)
- µg/kg → ppb : × 1
- µg/g  → ppb : × 1000     (µg/g = ppm = mg/kg)
- mg/kg → ppb : × 1000
- ppm   → ppb : × 1000
- mg/g  → ppb : × 1,000,000   (rare; double-check the source really says mg/g)

Reality check after converting (if your number fails this, your unit is wrong):
- Pb / Cd in most foods: single digits to low hundreds of ppb. >1000 is rare and
  needs a real reason (spice adulteration, contaminated region).
- tHg / MeHg in fish: tens to ~1000 ppb; predatory fish up to ~1500. **Never
  28,000.** If you have tHg 28,540 you converted µg/g as if ng/g — divide by 1000.
- total As (tAs) in seafood/seaweed: genuinely high (thousands to tens of
  thousands) because of arsenobetaine — this is REAL, keep it, but iAs must stay
  low (tens of ppb). Do not conflate tAs and iAs.
- Al: usually tens to low thousands of ppb; >20,000 needs a real reason.
- Sn in canned: up to ~250,000 ppb (real, tinplate). Elsewhere low.

## Per-row procedure

1. Open `wiki/sources/<source_id>.md`, find the exact reported value + its unit
   for this row's matrix and this exact analyte species (iAs ≠ tAs; MeHg ≠ tHg).
2. Convert to ppb with the table above. Put the original value, original unit,
   and the multiplier in `notes`.
3. Overwrite the wrong value in the corresponding
   `category6/7_primary_extraction_summary.csv` row (match by source_id +
   row_slug + metal_species). Keep all other columns.
4. If the source value really is that high and you can defend it (e.g. seafood
   tAs), leave it and write the justification in `notes` — the gate keeps flagged
   rows, it does not delete them.

## Verify (loop until clean)

```
node tools/evidence/validate-extraction-rows.mjs     # re-flags
node tools/evidence/build-hmtc-aggregate-distributions.mjs
```

Then check:
- `data/evidence/extraction_review.csv` contains only values you have explicitly
  justified as real (no unconverted unit errors left).
- Olive-oil Pb still pools to **69.7 µg/kg** (proper CSV parse, column
  `pooled_p97`). If it moved, you corrupted the olive-oil rows — revert them.
- No pooled `pooled_p97` is below 0.01 or above its analyte's plausibility
  ceiling for any Cat 6/7 row.

Commit per row_slug. When `extraction_review.csv` holds only justified-real
values, stop and report — Karen/Claude spot-checks, then the standards are drawn.

## Done means

Every Cat 6/7 (row × analyte) cell either pools to a plausible P97, binds to its
regulatory cap, or is documented as all-non-detect / no-fit-source. No silent
unit errors remain.
