# HMI-GAP-wire-carpet-cleaners

- **Logged:** 2026-09-14T13:25:00+03:00 by Reed Holloway
- **Product slug:** `carpet-cleaners`
- **HMTc:** Cat 12 Household Cleaning and Dishwashing — Row 8 — Carpet cleaners (routine carpet/rug cleaning via extraction, shampooing, dry foam, bonnet, or absorbent compound; upholstery cleaners under GS-52 specialty frame)
- **Page:** wiki/products/carpet-cleaners.md — sources:8; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES pending-ingest scaffold; exposure_pathway dermal (incidental skin contact) + ingestion (residue on dishes/surfaces); panel_metals frontmatter Pb/iAs/Hg/Cd/Cr/Ni/Sn/Al
- **Authority:** Elon WAVE19 #4 after #3 menstrual-pads HYBRID COMPLETE; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `all-purpose-cleaners` (DONE) / `laundry-detergents` (DONE) / `bathroom-tub-tile-cleaners` (DONE) / `toilet-bowl-cleaners` (DONE) / `pre-treaters-stain-removers` (DONE) / `carpet-spot-removers` (GS-8 Carpet Cleaner **excludes** products intended primarily for spot removal) / `floor-cleaners-hard-surface` (CSIRO2010 CFL floor rows) / `window-glass-mirror-cleaners` / `kitchen-countertop-cleaners` / `household-specialty-cleaners-other` / Allsopp2001 carpets **materials** (not cleaners)

## Structured evidence found (do not re-pull wired / valued)

1. **GreenSeal2022 GS-8** Ed5.7 (free standard; wiki source on page) — **REGULATORY CONTEXT** household general-purpose/bathroom/glass/**carpet**:
   - Carpet Cleaner def: routine cleaning of household carpets and rugs (extraction/shampoo/dry foam/bonnet/absorbent compound); **does not include** products intended primarily for spot removal → KEEP DISTINCT `carpet-spot-removers` / `pre-treaters-stain-removers`
   - Undiluted product intentional prohibition: **Pb / Cr-VI / Se**
   - Primary packaging: no intentional introduction of **Pb / Hg / Cd / Cr-VI**; sum ≤ **100 ppm** by weight
   - CARB VOC table includes Carpet cleaners (dilutable / ready-to-use)
   - No finished-product occurrence measurements

2. **GreenSeal2024 GS-37** Ed7.8 (free standard; wiki source on page) — **REGULATORY CONTEXT** I&I general-purpose/restroom/glass/**carpet**:
   - Carpet cleaners explicitly in scope (performance/re-soiling; WoolSafe / CRI Seal accepted)
   - Colorant intentional-addition ban: **As / Cd / Co / Cr-VI / Pb / Mn / Hg / Ni / Se**
   - Undiluted product intentional prohibition: **Pb / Cr-VI / Se**
   - Packaging sum **Pb+Hg+Cd+Cr-VI ≤100 ppm**
   - No finished-product occurrence measurements

3. **GreenSeal2024 GS-37 Carpet Cleaners Snapshot** (free program snapshot) — **REGULATORY SUMMARY** carpet-named:
   - Se / Hexavalent Chromium / Lead: **Prohibited above 100 ppm** (snapshot summary language)
   - Colorants: cannot contain intentionally added heavy metals
   - Packaging chemicals: Pb / Hg / Cd / Cr-VI must not be intentionally added to primary packaging
   - Binding detail remains GS-37 Ed7.8 full text — do not invent occurrence ppb from snapshot thresholds

4. **GreenSeal2022 GS-52** Ed2.7 (free standard; clarifications last Apr 3 2026) — **REGULATORY CONTEXT** specialty household **upholstery cleaning products**:
   - Scope includes upholstery cleaning products (routine carpet/glass/floor/toilet/restroom excluded → those live in GS-8/GS-37)
   - Colorant intentional-addition ban: **As / Cd / Co / Cr-VI / Pb / Mn / Hg / Ni / Se**
   - Undiluted product intentional prohibition: **Pb / Cr-VI / Se**
   - Packaging sum **Pb+Hg+Cd+Cr-VI ≤100 ppm**
   - No finished-product occurrence measurements

5. **EPA2024 Safer Choice / DfE Standard** (Aug 2024; wiki source on page) — **REGULATORY CONTEXT** program criteria for safer cleaning products — no finished carpet-cleaner occurrence assay

6. **KR MoE Safer Living Chemical Products safety/label criteria** (deposit PDF) — **REGULATORY CONTEXT** 세정제 (cleaners) scope table includes **카페트용** (carpet use) among general-use cleaners; detection ceilings (mg/kg): **As ≤5** (as As); **Pb ≤1** (as Pb) for all products/forms — **regulatory ceilings, not occurrence assays**; do not mint iAs from tAs ceiling

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; panel lists Sn | No finished carpet/upholstery cleaner elemental Sn OA this turn (CSIRO2010 has **no** carpet rows; Jang2024 CF403) | **TRUE EMPTY** |
| **U** | values0; LES absent | No elemental U concentration OA in finished carpet/upholstery cleaners | **TRUE EMPTY** |
| **iAs** | values0; panel lists iAs | No speciation OA; tAs≠iAs; do not mint from GS colorant As ban / KR MoE As ≤5 mg/kg | **TRUE EMPTY** |
| Pb/Cr-VI/Se (product intentional) | wiki GS-8/GS-37 present; values0 | GS-8 / GS-37 / GS-52 intentional prohibition (+ Snapshot summary) | **REGULATORY CONTEXT** (not occurrence WIRE) |
| Pb+Hg+Cd+Cr-VI packaging | wiki present; values0 | GS-8 / GS-37 / GS-52 **≤100 ppm** sum | **REGULATORY CONTEXT** |
| Colorant As/Cd/Co/Cr-VI/Pb/Mn/Hg/Ni/Se | wiki GS-37 | GS-37 / GS-52 intentional-addition ban | **REGULATORY CONTEXT** |
| Pb/As KR cleaner ceilings | values0 | KR MoE Pb≤1 / As≤5 mg/kg (**카페트용** in scope) | **REGULATORY CONTEXT** |
| Cr/Ni/other occurrence | values0 | Jang2024 residual (stain frame caution); CSIRO2008/SDA densify | densify residual |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/carpet-cleaners/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (GS-8 / GS-37 / GS-37 Carpet Snapshot / GS-52 upholstery / EPA Safer Choice / KR MoE 카페트용 REGULATORY CONTEXT densify; Sn/U/iAs **TRUE EMPTY**; no finished carpet/upholstery elemental occurrence PRIMARY this turn)

## Do not
- Mint iAs from GS colorant As ban / Safer Choice / KR MoE As ≤5 mg/kg ceiling / Snapshot thresholds
- Steal CSIRO2010 floor (CFL) / multipurpose / toilet / disinfectant rows as carpet PRIMARY (CSIRO2010 has **no** carpet/upholstery cleaner rows)
- Steal Iwegbue spot-removing cream SRC rows → `pre-treaters-stain-removers` DONE
- Steal Jang2024 carpet/clothes **stain** cleaner rows as routine carpet PRIMARY without matrix confirm → prefer `carpet-spot-removers` / pre-treaters frame
- Steal EU Ecolabel HSC Decision 2017/1217 as carpet REGULATORY (HSC does **not** cover carpet/upholstery)
- Steal Allsopp2001 carpet **materials** as cleaner occurrence
- Sci-Hub Jang2024 / SDA CI PDFs; cell mint; DataCite; shellfish; conflate APC / laundry / bathroom / toilet / pretreaters / floor
