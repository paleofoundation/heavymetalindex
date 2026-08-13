# HMTc Category 34 — Herbs, Spices, Seasonings and Salt — standard derivation & lineage

**Status:** built 2026-08-13. Government-limit standard, HMTc Method v2.0 (government-limit default).
**Firewall (CLAUDE.md Part 19):** the numeric outputs below are STAFF/HMTc content, not public wiki. They live in `data/workbench/standards/cat34-compiled/`, never on heavymetalindex.com.

## What this is

A per-(subcategory × analyte) certification standard for Cat 34, produced by `tools/standards/compile-cat34.mjs` (derive → audit → verify) over `tools/standards/cat34-config.json`. Every published cell is a government-limit **lookup** against `data/evidence/regulatory_limits.csv`; occurrence data never selects a number. This is the **lead-in-spices enforcement space** (turmeric/chili lead-chromate adulteration), the program's highest-salience adulteration category. Canonical value table and audit notes:

- `data/workbench/standards/cat34-compiled/_derivation-report.md` (canonical value table)
- `data/workbench/standards/cat34-compiled/{spices,salt,hot-chili-sauces,bouillon-seasoning-blends}.json`

## Subcategories (taxonomy hmtc-v2.json, Cat 34)

1. `spices` — dried herbs/spices/seasonings (turmeric, cinnamon, paprika, chili powder, pepper)
2. `salt` — table, sea, Himalayan
3. `hot-chili-sauces` — hot sauce and chili sauces
4. `bouillon-seasoning-blends` — bouillon/stock cubes and powdered seasoning blends (dry rubs, gravy/seasoning packets)

Panel: 8 totals (Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr) + species controls (iAs, Cr-VI). MeHg is not-material for every row (no marine-bioaccumulation pathway in a dry spice or a mineral).

## Controlling instruments (why each number is what it is)

- **Lead in spices** binds EU Reg. 2023/915 as a botanical-part **form_split**, preserved exactly: fruit spices 600 (paprika/chili/pepper), seed 900 (cumin), flower-pistil 1000 (saffron), bud 1000 (cloves), root/rhizome 1500 (turmeric/ginger), bark 2000 (cinnamon). Certification applies the botanical part matching the spice. This is the controlling worldwide instrument for spice lead.
- **Cadmium / total arsenic / total mercury in spices** bind the strictest **dried-basis** spice-specific limits: Cd 1000 (Vietnam QCVN 8-2:2011, spices incl. curry powder), tAs 1500 (Singapore dried herbs & spices), tHg 50 (Vietnam).
- **Salt lead** binds EU Reg. 2023/915 split refined (1000) vs unrefined (fleur de sel / grey / manually-harvested, 2000). form_split. Codex STAN 193 (2 mg/kg) is looser, so EU refined governs.
- **Salt Cd/tAs/iAs/tHg** bind the Codex-aligned food-grade-salt limits: Cd 500 (GSO/Codex, many concur), tAs 500 (EU Reg. 2025/1891 + FSANZ), iAs 500 (Israel FCS 2016, explicit inorganic-As salt limit), tHg 100 (EU Reg. 2022/617 + FSANZ).
- **Hot/chili-sauce** contaminants bind the finished-sauce (liquid, as-consumed) limits: Pb 2000 (Singapore/Vietnam sauces), Cd 1000 (Vietnam), tAs 1000 (Singapore/Vietnam), tHg 50 (Vietnam). Routed here (not Cat 32) because their lead/chromium are chili-borne.
- **Bouillon/seasoning blends** have no blend-specific sovereign ML, so Pb/Cd/tAs/tHg **read across** the nearest applicable sovereign — the spice-blend / curry-powder scope (curry powder is the archetypal, explicitly-regulated seasoning blend): Pb 2000, Cd 1000, tAs 1000, tHg 50 µg/kg. Disclosed read-across, not a lookup.

## Basis discipline (load-bearing for defensibility)

DRIED-spice limits govern the spices row (dry basis). Fresh fruiting-vegetable and fresh-leaf-vegetable wet-weight limits — e.g. Israel fruiting-vegetable Pb 50 (incl. bell pepper), fresh-herb Cd 200, MERCOSUR fresh-herb Pb 300 — are the **wrong basis** for a dried spice (drying concentrates the analyte several-fold) and are excluded by scope. Selecting one of those would have set an indefensible, mis-based number.

## Lead-chromate adulteration handling (hazard-aware, not dismissive)

Turmeric and chili are adulterated with **lead chromate (PbCrO4)** — a hexavalent-chromium compound — to brighten colour. For the plant-derived rows (spices, hot-chili-sauces, bouillon-seasoning-blends), total chromium and Cr-VI are therefore **`control`** cells: total Cr is screened and co-read with lead as the lead-chromate adulteration signature, and Cr-VI gets a reflex speciation on that signature. They are *not* dismissed as not-material. Salt Cr-VI, by contrast, is not-material — a mineral has no colour-adulteration pathway.

## Not-material / control substantiation

Not-material determinations are registered in `data/evidence/standards-not-material.csv` and tested against routed sources by `tools/evidence/audit-not-material-integrity.mjs`. Two spices cells were **re-adjudicated from not-material to control** because routed sources measured the analyte: `spices/iAs` (NYS DOH 2019 metals-in-spices guidance measured inorganic arsenic) and `spices/Sn` (cicero2022, pradhan2023 measured trace tin). Post-adjudication: **0 Cat 34 contradictions** in the substantiation gate.

## Derive → audit → verify result (2026-08-13)

- Provenance tags: regulatory-alignment = 13, control = 13, not-material = 14, read-across = 4.
- Audit: 0 hard defects, 0 gaps, 0 illegal tags, 0 form errors, 0 stricter-unselected warnings (the one initial flag — Vietnam curry-powder tAs 1000 vs whole-spice tAs 1500 — was a scoping artifact: curry powder is a blend routed to `bouillon-seasoning-blends`, where 1000 already applies; resolved by excluding curry powder from the whole-spice audit scope).
- Substantiation gate: 0 Cat 34 contradictions.
- Publication QC gate: exit 0 (gov-limit cells are not occurrence-flagged, as expected for Method v2.0).
- Firewall no-threshold lint: 0 structural errors on these files.

## Independent adversarial verification (2026-08-13)

A fresh-context adversarial verifier re-checked every cell against the register and the actual instruments. Result: **all citations, form-splits (EU spice botanical parts, salt refined/unrefined), basis discipline (fresh-vs-dried exclusions), read-across (curry powder), and not-material/control determinations verified correct.** One finding applied:
- **MAJOR — hot-chili-sauces/Pb documentation:** Colombia Res. 4506/2013 sets a stricter Pb 1000 for "mango hot sauce and canned mangoes," which the engine dropped via the canned-token filter. The conclusion (keep 2000; the Colombia entry is a fruit-product/canned-fruit limit, a different product class and contamination platform from a chili sauce) is correct and consistent with the category's basis discipline, but the exclusion was silent. It is now **documented explicitly in the cell** rather than resting on a mechanical filter.
- The systemic audit improvement (whole-register per-form_split stricter-scan) also applies here; it surfaced Bosnia's refined-salt Pb 1000 as concurrence with the EU refined-salt 1000, now cited in the refined-salt form.

## Lineage

- **v1.0 (2026-08-13):** initial government-limit build. Register snapshot: `data/evidence/regulatory_limits.csv`. Engine: `tools/standards/lib/food-standards-engine.mjs`.
- Supersedes the stalled occurrence-pool attempt (readiness monitor showed `spices:Cd "no mapped government cap — Method v2.0 lookup incomplete"` and `salt:Cd/Pb QC-HELD percentile-beyond-sample`); the government-limit lookup supplies those caps. Readiness-path integration tracked as ledger item `OI-20260813-cat34-govlimit-supersedes-occurrence-pool`.
- Reproduce: `node tools/standards/compile-cat34.mjs` (add `--sync-not-material` to register any new not-material cells).
