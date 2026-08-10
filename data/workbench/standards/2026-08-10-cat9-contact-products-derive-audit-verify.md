# Category 9 — Infant and Child Contact Products — derive → audit → verify trail

**Date:** 2026-08-10. **Method:** v2.0 (government-limit default, contact-product form). **Standard version:** 1.0.
**Compiler:** `tools/standards/compile-cat9.mjs` + `tools/standards/cat9-config.json`.
**Compiled output:** `data/workbench/standards/cat9-compiled/*.json` (8 subcategories).
**Cert pages:** `heavymetalcertified/content/standards/*.md` (via `tools/standards/build-cert-cat9-pages.mjs`).
**Step 0 lock:** `docs/governance/category-9-step0-lock.md`.

This is a NON-food category. Limits are migration and total-content limits from toy-safety, childcare-article, and food-contact-material regulation, in five non-comparable bases. Basis is never conflated: migration and total-content limits are published as separate ceilings.

## DERIVE — the compiled standard (values in the native unit; mg/kg unless noted)

### Mouthable-toy rows — pacifiers-and-sucking-teething-aids, teething-toys-teethers
Governing basis: acid-soluble element migration from toy material (EU 2009/48/EC Annex II Pt III Category III scraped-off, current consolidated values). Teething toys are toys, directly governed. Pacifiers are excluded from the Toy Safety Directive (Annex I item 16) and read the same values across via the EN 1400 soother standard, which requires them (read-across, not direct governance). tAs and tHg bind the EU raw limits (47 / 94), not ASTM F963's nominal 25 / 60: ASTM applies an analytical-correction convention EN 71-3:2013+ abolished, so the EU raw limit is the stricter ceiling as enforced.

| Analyte | HMTc limit (mg/kg migration) | Binds | Companion (total content) |
| --- | ---: | --- | --- |
| Pb | 23 | EU 2009/48 Cat III (pacifiers: read-across via EN 1400) | 90 ppm (Washington CSPA); also CPSIA 100 ppm, REACH mouthable 500 ppm |
| tAs | 47 | EU 2009/48 Cat III raw (binds over ASTM nominal 25) | — |
| Cd | 17 | EU 2009/48 Cat III | 40 ppm (Washington CSPA) |
| tHg | 94 | EU 2009/48 Cat III raw (binds over ASTM nominal 60) | — |
| Ni | 930 | EU 2009/48 Cat III | — |
| Al | 28130 | EU 2009/48 Cat III (amended 2019/1922; not the superseded 70000) | — |
| Cr-VI | 0.053 | EU 2009/48 Cat III (amended 2018/725) | — |
| Sn | 180000 | EU 2009/48 Cat III (very permissive; Tier-2 screen) | — |
| iAs | not material | — | bounded by tAs |
| MeHg | not material | — | bounded by tHg |

### Food-contact rows — infant-bottles, infant-bottle-nipples, sippy-cups-toddler-drinkware, infant-food-storage-items, feeding-accessories-child-sized
Governing basis: EU Regulation 10/2011 Annex II specific migration into food.

| Analyte | HMTc limit | Binds | Companion (total content) |
| --- | ---: | --- | --- |
| Pb | not detectable (<0.01 mg/kg food) | EU 10/2011 pt 2 | 90 ppm (WA) / 100 ppm (CPSIA) |
| tAs | not detectable (<0.01) | EU 10/2011 pt 2 | — |
| Cd | not detectable (<0.002) | EU 10/2011 pt 2 | 40 ppm (WA) |
| tHg | not detectable (<0.01) | EU 10/2011 pt 2 | — |
| Ni | 0.02 mg/kg food | EU 10/2011 pt 1 SML | — |
| Al | 1 mg/kg food | EU 10/2011 pt 1 SML | — |
| Cr-VI | bounded by total-Cr not detectable (<0.01) | EU 10/2011 pt 2 (read-across) | — |
| Sn | not material (no tin source in plastic/glass/steel) | — | — |
| iAs, MeHg | not material | — | bounded by tAs / tHg |

feeding-accessories additionally carries a surface-coating companion for painted/printed tableware (Pb 90 ppm coating, tHg 10 ppm coating). Stainless drinkware (bottles, sippy cups, feeding accessories) additionally under nickel release ≤0.5 µg/cm²/week (former EU Directive 94/27/EC) — a release-rate basis not expressible in mg/kg.

### Skin-contact row — diapers-and-components
Governing basis: EU REACH Annex XVII entry 72 extractable metals. Entry 72 excludes disposable textiles (para 1(b)), so the 1 mg/kg limits bind reusable-cloth components directly and are read across as the benchmark for disposable-diaper skin-contact components. No metal-migration pathway from the absorbent core.

| Analyte | HMTc limit | Binds |
| --- | ---: | --- |
| Pb, tAs, Cd, Cr-VI | 1 mg/kg (after extraction) | EU REACH entry 72 (read-across per disposable-textile exclusion) |
| Ni | 0.5 µg/cm²/week (release) | EU Nickel Directive 94/27/EC (prolonged skin contact) |
| Sn | 1000 mg/kg as Sn (organotin) | EU REACH Annex XVII entry 20 (organotin; reflex speciation) |
| tHg, Al, iAs, MeHg | not material | no source / no pathway; no contradicting routed source |

Diaper Ni and Sn were initially not-material; the not-material integrity check (`tools/evidence/audit-not-material-integrity.mjs`, added this build and wired into prebuild) flagged both as contradicted by routed sources (Nyamukamba 2023 extractable Ni above the skin-contact limit; Smajgl 2015 organotin to 23 mg/kg, 20–100% of the organotin TDI). Retired to real limits per the rebuttable-not-material procedure in the Step 0 lock. Corpus-wide, the check flags 91 not-material cells contradicted by routed evidence — a program-wide re-adjudication queue, logged separately.

## AUDIT — per-cell provenance and basis check

Every published value traces to a named register row in `data/evidence/regulatory_limits.csv`:
- `eu_2009_48_cat{1,2,3}_*_toy_migration` — verified against the current consolidated Directive 2009/48/EC (amendments 2012/7 Cd, 2017/738 Pb, 2018/725 Cr-VI, 2019/1922 Al, 681/2013 Ba) via the legislation.gov.uk EU-law mirror and accredited-lab tables (Eurofins, SGS). Aluminium is the current 28130 (not the superseded 70000).
- `eu_10_2011_*_sml(_nd)` — verified against Regulation 10/2011 Annex II (amendments 2016/1416, 2020/1245): Ni 0.02, Al 1 mg/kg food; Pb/Hg/As not detectable at LOD 0.01, Cd at 0.002.
- `astm_f963_*_soluble` — verified against ASTM F963 §4.3.5 (mandatory under CPSIA §106 / 16 CFR 1250): Pb 90, Cd 75, As 25, Hg 60, Cr 60, Sb 60 mg/kg.
- Companions from `wa_cspa2008_*`, `cpsia_*`, `eu_2015_628_*`, `ca_sor2011_17_*` (already in register).

Basis non-conflation confirmed by construction: the compiler never mins across bases; total-content and surface-coating limits are carried as `companion` ceilings, published separately. The audit safety-net scan (`stricter_unselected`) is empty for every cell after excluding same-instrument material-form siblings (Cat I/II) and different-product-form scopes (clay, finger paint, jewellery).

## VERIFY — adversarial audit (Fable-5, Daubert-style, 2026-08-10)

Bottom line: numeric accuracy SOUND (all values traced to correctly-transcribed sovereign text; the aluminium 28130 landmine avoided; the no-cross-basis-min architecture confirmed implemented in code). Five framing/defensibility defects surfaced, all resolved in this build before publication:

1. **Register chromium note** said 0.0036 mg/kg for the Cr(VI)-excluded total-Cr concession; the law says 3.6 mg/kg (a relaxation). Corrected in the register and the source page. The binding value (ND) was unaffected.
2. **Pacifier applicability** — 2009/48/EC excludes soothers (Annex I item 16). Reframed the pacifier row as an EN 1400 → EN 71-3 read-across (identical values); corrected the register applicability text.
3. **Diaper applicability** — REACH entry 72 excludes disposable textiles (para 1(b)). Reframed the diaper row as a read-across benchmark (binds reusable-cloth components directly).
4. **tAs / tHg strictest-selection** — ASTM F963 nominal 25/60 incorporates an analytical correction EN 71-3:2013+ abolished; as enforced, EU raw 47/94 is stricter. Bound EU raw; documented the convention.
5. **Reg (EU) 2025/2509** successor Toy Safety Regulation (roughly halved limits, applicable 2030) cross-referenced as pending tightening in the Step 0 lock.

Wording repairs also applied: nickel/silicone Sn rationale (organotin in condensation-cure silicone; require platinum-cure/organotin screen), diaper-Ni fastener claim (scoped to metallic snaps), 10/2011-applied-to-glass/steel labelled as read-across.

Deferred (logged, not blocking): verify Japan MHLW nursing-nipple Pb/Cd material spec (reported ~10 mg/kg content — if confirmed, a stricter total-content companion on the nipples row); transcribe EN 1400:2013+A2's own element annex and Reg (EU) 2025/2509 Annex values.

## QC gate

Every published value is a government limit (rationale `regulatory-alignment`); no value can exceed its own cap. The occurrence-percentile QC gate (`build-standards-qc-gate.mjs`) does not apply — no cell is a pooled percentile. The 25 not-material determinations are recorded in `data/evidence/standards-not-material.csv`.
