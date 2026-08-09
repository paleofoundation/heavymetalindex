# MeHg + Cr-VI determinations for infant formula (outstanding item 7, 2026-08-09)

Staff-side. Resumes crashed session dd96cbf1's item 7: "MeHg and Cr-VI not-material
determinations with documented rationale." The evidence changes the answer for MeHg.

## Cr-VI — not-material (COMPLETE, no new work)

Both powder rows are already registered not-material in
`data/evidence/standards-not-material.csv` (commit 1ab8cf6a4, full adjudication in
`data/workbench/standards/2026-07-31-chromium-formula-adjudication.md`). Verified the
wiring today: the QC gate emits `NOT_MATERIAL` for `infant-formula-powder-non-soy /
Cr-VI` (and the soy row is in the registry). Rationale: hexavalent chromium does not
persist in the infant-formula matrix — species-specific isotope-dilution HPLC-ICP-MS
(saraiva2021) does not quantify Cr-VI above a 0.049 µg/kg LOQ and shows spiked Cr-VI
is near-quantitatively reduced to Cr-III during sample prep. The argument is
matrix-level, so it covers reconstituted (RTF) formula as well; the RTF locked rows
carry no Cr-VI pool cell (no data, Cr-VI not in their concern list), so there is
nothing to register there.

## MeHg — MATERIAL, not not-material (premise corrected)

The crashed session planned to register MeHg not-material for the soy/RTF rows. That
plan predated the ingest of `lodhi2021-methyl-inorganic-mercury-infant-formula`
(commit 5d7b1f546), which is the first sample-level speciated MeHg-in-formula source
in the corpus. Its result refutes not-material: **all 20 infant-formula samples had
detectable MeHg** (body table p50 0.30, p95 0.60, p100 2.00 µg/kg; MeHg was 11.9–32.2%
of total mercury). MeHg is therefore a low-level, quantified contaminant in the
matrix, not an immaterial one. Registering it not-material would be a false claim,
contradicted by primary data — the [[project_cr_vi_not_material_formula]] "check for
recoverable data before calling a cell not-material" lesson, in reverse.

Nor can MeHg be registered as a completed no-ML cell (`standards-no-ml-confirmed.csv`).
It is true that **no jurisdiction sets a MeHg ML for infant formula** (the same
no-cap situation recorded for tHg on both powder rows). But the literature baseline is
NOT complete: lodhi is a single source from Hyderabad, Pakistan (PK) — a non-target
market — so it is stratified OUT of the target-market locked pools, and no
target-market MeHg-in-formula source exists (tatsuta2024, JP, measured MeHg only in
fish-containing baby foods, not formula). MeHg is a Tier-1 toxic; silencing the C1b
cap-completeness warning here would hide a real, honest gap.

**Determination:** MeHg in infant formula is **material, uncapped, and thin-data**.
The locked MeHg cells stay BLOCKED/provisional (the truthful state) — neither
not-material nor no-ML-complete is registered. Two concrete follow-ups are logged, not
guessed:

- `OI-20260809-recover-lodhi-mehg-thg` — extract lodhi2021's MeHg + tHg formula
  distribution into the structured summary (data recovery). It will not populate the
  stratified locked non-soy cell (PK is non-target market) but it records the data and
  populates the unstratified parent `infant-formula-powder` MeHg cell (which item 4
  correctly emptied of the tatsuta hair-biomarker poison — real data would replace it).
- `OI-20260809-acquire-target-market-mehg-formula-source` — the locked MeHg cells need
  at least one target-market (US/EU/CA/AU-NZ/JP…) sample-level MeHg-in-formula source
  before a defensible MeHg percentile can be set. This is a data-acquisition gap, not a
  determination that can be made analytically today.

Part 2 direction check: reporting MeHg as material-but-thin (rather than not-material)
moves toward the literature, and it neither softens nor strengthens any HMTc threshold.
