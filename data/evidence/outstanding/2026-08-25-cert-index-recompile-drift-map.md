# Cert↔index recompile-drift map (2026-08-25)

Produced while completing Cat-6 (Seafood) analyte completion. The seaweed subcategory was
found to cite `fr_cshpf_seaweed_*` register binding-ids that never existed in the index
register; a corpus-wide audit showed the pattern is **systemic**.

## What was audited

For every one of the 321 live cert compiled records (`heavymetalcertified@main`,
`data/standards/*-compiled/*.json`), (1) every cited register id was resolved against the
index register, and (2) each category with a compiler was recompiled fresh from the current
index (register + config + compiler) and diffed against the live cert value.

## Part 1 — ID-traceability (FIXED)

11 register rows the live cert cites were **absent** from `data/evidence/regulatory_limits.csv`
(same pattern as seaweed): France CSHPF seaweed (4, restored in index `4de7dfa5b`) and China
GB 2762-2022 / Brazil IN 160/2022 (11, restored in index `774b7bf15`). All values
primary-verified 2026-08-25. **Divergence audit now reports 0 unresolved cited ids across all
321 records** — every published cert value again traces to a real register row.

## Part 2 — Recompile-drift (OPEN, hard gate)

Restoring the rows closed id-traceability but did **not** make a fresh recompile *reproduce*
the live values: the restored rows' scopes and a deeper config/scope drift (present rows such
as `pa_decreto467_2007_cd_*` and `uy_rbn_general_*` no longer win selection) mean recompiling
these categories today ships **weaker or missing limits than are currently live**. The live
cert holds the correct, more-protective values.

### Loosenings — recompiling ships a WEAKER limit (µg/kg)

| record | analyte | live | recompile |
|---|---|---|---|
| cat27/legumes-pulses-other | Cd | 10 | 40 |
| cat28/cashews | Pb | 200 | 1000 |
| cat28/cashews | tAs | 800 | 1000 |
| cat28/nut-seed-butters-other | Pb | 200 | 1000 |
| cat28/nut-seed-butters-other | tAs | 800 | 1000 |
| cat28/nuts-seeds-other | Pb | 200 | 1000 |
| cat28/nuts-seeds-other | tAs | 800 | 1000 |
| cat28/tree-nuts-high-nickel | Pb | 200 | 1000 |
| cat28/tree-nuts-high-nickel | tAs | 800 | 1000 |
| cat32/mustard-mayo-dressings | Cd | 200 | 1000 |
| cat32/mustard-mayo-dressings | Pb | 1000 | 2000 |
| cat32/soy-sauce-fermented | Cd | 100 | 1000 |
| cat32/soy-sauce-fermented | Pb | 1000 | 2000 |
| cat32/soy-sauce-fermented | tAs | 100 | 1000 |
| cat32/tomato-condiments | Cd | 200 | 1000 |
| cat32/vinegar | Cd | 100 | 1000 |
| cat32/vinegar | tAs | 100 | 200 |
| cat34/bouillon-seasoning-blends | Pb | 1000 | 2000 |
| cat34/hot-chili-sauces | Pb | 1000 | 2000 |

### Gaps — recompiling DROPS a published limit

| record | analyte | live | recompile |
|---|---|---|---|
| cat27/soy-products | Cr | 1000 | (none) |
| cat29/cultivated-mushrooms | Ni | 400 | (none) |
| cat29/cultivated-mushrooms-oyster-shiitake | Ni | 400 | (none) |
| cat29/wild-mushrooms | Ni | 400 | (none) |
| cat34/bouillon-seasoning-blends | iAs | 100 | (none) |
| cat34/hot-chili-sauces | iAs | 100 | (none) |

(One safe-direction tightening: cat27/legumes-pulses-other Cr 1000→500.)

## HARD GATE

**Do not recompile-and-ship cat27, cat28, cat29, cat32, or cat34 until each is reconciled
against the live cert.** A recompile ships the weaker/missing values above to production. This
is especially urgent because the program-wide analyte-completion sweep (`OI-20260825`)
recompiles categories to fill empty cells — run against these categories as-is, it would
silently loosen live protective limits.

Reconciliation is per-category deliberate work (as Cat-6 seaweed was done): make the restored
GB 2762 / IN 160 rows' `product_scope` match each config's `scope_include`, diagnose why the
present `pa_decreto467` / `uy_rbn_general` rows no longer win, resolve the cat29 mushroom-Ni
selection, then recompile → verify the diff reproduces the live values (no collateral) →
render → dedash → lint battery → ship. Every category verified by round-trip diff against the
live cert before shipping.

## Reproduce

- ID audit: `scratchpad/divergence_audit.py` (cert compiled ids vs index register).
- Drift map: recompile each `compile-cat*.mjs` to a temp dir, diff values vs
  `heavymetalcertified@main` compiled records (`scratchpad/fulldiff.py`).
