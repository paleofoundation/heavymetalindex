# HMI-GAP-wire-laundry-detergents

- **Logged:** 2026-09-14T11:12:52+03:00 by Reed Holloway
- **Product slug:** `laundry-detergents`
- **HMTc:** Cat 19 Laundry and Fabric-Contact Home Products — Row 1 — Laundry detergents (liquid, powder, pods/sheets, delicates)
- **Page:** wiki/products/laundry-detergents.md — sources:15; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES pending-ingest scaffold; exposure_pathway dermal (residue on fabric); panel_metals frontmatter Pb/iAs/Hg/Cd/Cr/Ni/Sn/Al
- **Authority:** Elon WAVE15 #5 (last of WAVE15 top5) after #4 makeup-foundation-powders-blush HYBRID COMPLETE; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `automatic-dishwasher-detergents` / `dish-soaps-manual` / `all-purpose-cleaners` / `bathing-soaps` / `hand-soap` / `laundry-detergent-boosters-additives` / `laundry-prewash-products` / `laundry-starch-sizing-fabric-finish` / `fabric-softeners` / cosmetics pages; Zhang2010 Beijing detergents → dish-soaps-manual only

## Structured evidence found (do not re-pull wired / valued)

1. **Iwegbue2019** ToxRep doi:10.1016/j.toxrep.2019.08.014 (OA CC BY-NC-ND; PMC6726878) — NG Abraka/Sapele/Warri — **WIRE PRIMARY powdered laundry detergents n=10** (µg/g ≡ mg/kg):
   - Cd **0.6–5.4**; Pb **3.5–47.0**; Cr **nd–32.2**; Cu **2.0–7.5**; Co **5.5–9.5**; Ni **6.5–15.0**; Mn **nd–14.5**; Zn **23.0–80.5**; Fe **113–322**
   - KEEP DISTINCT: liquid dish-washing soaps n=3 → `dish-soaps-manual`; bar soaps n=8 → `bathing-soaps`; sanitizers/creams → other rows
   - Panel excludes As/Hg/Sn/Al/U — cannot close Sn|U|iAs from this source
2. **Torres2024** JBCS doi:10.21577/0103-5053.20230164 (OA CC BY) — BR Recife — **WIRE SUPPORTIVE powder detergent J1**:
   - J1 powder detergent: Cd **<LOD**; Pb **<LOD** (LOD **0.5** µg/g); Mg **117.0**; Zn **492.3** µg/g
   - Soap rows J2–J9 KEEP DISTINCT → `bathing-soaps` / hand/face liquids
3. **Abulude2007** Res J Environ Toxicol 1(2):102–104 (OA Academic Journals) — NG Akure — **WIRE SUPPORTIVE pooled**:
   - n=19 soaps+detergents pooled means: Pb **3.78** / Ni **2.20** / Cr **1.33** mg/kg; Cd ND — pooling mixes bathing-soaps + laundry (SUPPORTIVE only)
4. **Barkodia2020** JETIR 7(3):58–60 (OA; C-tier venue) — IN Jhansi — **WIRE SUPPORTIVE Fe/Cu/Mn/Zn**:
   - Laundry detergents n≈6: Cu **0.48–0.69** mg/kg; Fe/Mn/Zn low ppb–sub-ppm — sample5 oxygen-bleach additive KEEP DISTINCT → `laundry-detergent-boosters-additives`
5. **Tjandraatmadja2010** CSIRO Smart Water Fund (freely distributed Commonwealth) — AU Melbourne n=156 household products — **WIRE SUPPORTIVE laundry Cr/Sb/Co/Mo/Se**:
   - Laundry powder Cr: **13/13** detect; min **0.13** / max **1.20** / median **0.57** / avg **0.59** mg/kg
   - Laundry liquid Cr: **7/11**; min **0.03** / max **3.50** / median **0.06** / avg **0.51** mg/kg
   - Sb laundry (powder+liquid pooled): **8/24** detects up to **0.47** mg/kg
   - Dishwasher powder Sb max **0.82** KEEP DISTINCT → `automatic-dishwasher-detergents`
6. **ECETOC1992** TR045 (copyrighted; structured-first wiki only — **not OA-deposited**) — **WIRE corpus Ni/Co/Cr**:
   - Unilever1990 EU washing powder n=**213**: Ni **1.0±1.04** / Co **0.22±0.21** / Cr **1.2** ppm
   - Unilever1990 EU liquid n=**19**: Ni **0.29±0.27** / Co **0.22±0.21** / Cr **0.28** ppm
7. **GreenSeal2020 GS-51** Ed1.6 (free standard) — **REGULATORY CONTEXT** I&I laundry care: intentional-addition prohibitions; packaging **100 ppm** sum Pb+Hg+Cd+Cr-VI — no occurrence measurements

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; LES absent | No finished laundry-detergent elemental Sn OA (Iwegbue/Torres/Barkodia/Abulude omit Sn; CSIRO tin = wastewater list elsewhere) | **TRUE EMPTY** |
| **U** | values0; LES absent | No elemental U concentration OA in finished laundry detergent | **TRUE EMPTY** |
| **iAs** | values0; panel lists iAs | No speciation OA; tAs≠iAs; do not mint | **TRUE EMPTY** |
| Pb/Cd/Cr/Ni/Co/Cu/Mn/Zn/Fe/Sb | wiki sources present; values0 wiring-miss | Iwegbue PRIMARY + Torres/Abulude/Barkodia/CSIRO + ECETOC wiki | **WIRE** (closes wiring-miss for panel; not Sn/U/iAs) |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/laundry-detergents/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (Iwegbue panel WIRE + Torres/Abulude/Barkodia/CSIRO/ECETOC-wiki SUPPORTIVE; Sn/U/iAs **TRUE EMPTY**)

## Do not
- Mint iAs from any total-As regulatory mention (GS-51 colorants / EU Ecolabel / GB14930.1 food-contact detergents)
- Steal Zhang2010 Beijing detergents as laundry primary (→ dish-soaps-manual)
- Steal Torres soap rows / Iwegbue bar soaps / dish liquids as laundry primary
- Steal Barkodia oxygen-bleach sample5 as laundry detergent primary (→ boosters)
- Steal CSIRO dishwasher powder Sb as laundry primary
- Sci-Hub Jenkins2001 Irish wastewater Cd/Cu/Zn; cell mint; DataCite; shellfish
