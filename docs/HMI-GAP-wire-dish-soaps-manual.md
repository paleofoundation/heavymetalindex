# HMI-GAP-wire-dish-soaps-manual

- **Logged:** 2026-09-14T12:04:30+03:00 by Reed Holloway
- **Product slug:** `dish-soaps-manual`
- **HMTc:** Cat 12 Household Cleaning and Dishwashing — Row 14 — Dish soaps (manual dishwashing)
- **Page:** wiki/products/dish-soaps-manual.md — sources:12; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES scaffold empty; exposure_pathway dermal (incidental skin) + ingestion (residue on dishes/surfaces); panel_metals Pb/iAs/Hg/Cd/Cr/Ni/Sn/Al; true_pull Sn|U|iAs
- **Authority:** Elon WAVE17 #2 after #1 face-paint HYBRID COMPLETE; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `laundry-detergents` / `all-purpose-cleaners` / `automatic-dishwasher-detergents` / `baby-wipes` / `bathing-soaps` / `hand-soap` / Iwegbue powdered HD + bar HBS / CSIRO dishwasher powder+tablet+rinse aid / Torres soap rows / GS-8 general-purpose/bathroom/glass/carpet (APC)

## Structured evidence found (do not re-pull wired / valued)

1. **Zhang2010** Asian J Chem 22(6):4777–4780 (copyrighted; **structured-first wiki only — not OA-deposited**) — **WIRE PRIMARY** Beijing Chaoshifa supermarket manual dish/produce-wash detergents **n=4** ICP-MS (ng/g ≡ µg/kg = ppb as-purchased):
   - Pb **0.041–249.835**; Cd **0.025–0.206**; Cr (total) **0.000–73.938**; Ni **0.502–45.936**; Cu **12.703–52.097**; Zn **12.737–94.224**; Fe **3.293–174.450**; Mn **0.000–29.897**; Ti **6.162–871.676**; Se **102.060–147.340**
   - Brand 3 plant-tissue feedstock lowest for 8/10 analytes; Ti dominant mass (not HMTc panel). Unit/LOD flag: Table 3 ng/g vs Table 2 LOD µg/g — treat sub-LOD as semi-quantitative per wiki Verification. No As/Hg/Sn/Al/U; Cr not speciated.

2. **Iwegbue2019** ToxRep doi:10.1016/j.toxrep.2019.08.014 (OA CC BY-NC-ND; PMC6726878; SHA cb021c19592c…) — **WIRE PRIMARY liquid dish-washing soaps n=3** (HLS11–HLS13; µg/g ≡ mg/kg; brand names firewall-stripped):
   - Cd **0.4–2.5**; Pb **4.0–15.5**; Cr **1.3–3.5**; Cu **nd–0.5**; Co **1.0–5.0**; Ni **nd–6.5**; Mn **nd–5.0**; Zn **31.5–56.0**; Fe **62.4–92.9**
   - Per-brand Table 3 means: HLS11 Cd **2.5** / Pb **15.5** / Cr **2.9** / Ni **6.0**; HLS12 Cd **1.7** / Pb **4.0** / Cr **3.5** / Ni **6.5**; HLS13 Cd **0.4** / Pb **4.5** / Cr **1.3** / Cu **0.5** / Co **5.0** / Ni **nd**
   - KEEP DISTINCT: powdered detergents HD1–HD10 → `laundry-detergents`; bar soaps HBS → `bathing-soaps`; sanitizers/creams/spot removers → other rows
   - Panel excludes As/Hg/Sn/Al/U — cannot close Sn|U|iAs

3. **Tjandraatmadja2010** CSIRO Smart Water Fund (freely distributed Commonwealth; SHA f21a071afa57…) — **WIRE SUPPORTIVE** Melbourne manual dishwashing liquids **n=6**:
   - Cr (total): **3/6** detect; min **0.02** / max **0.19** / median **0.01** / avg **0.06** mg/kg
   - Mo: **3/6**; min **0.05** / max **7.6** / median **0.01** / avg **0.06** mg/kg
   - Se: **2/6**; min **0.08** / max **0.21** / avg **0.05** mg/kg
   - Sb: **ND** in all dishwashing liquids (Sb detects in dishwasher powder max **0.82** KEEP DISTINCT → `automatic-dishwasher-detergents`)

4. **Abulude2007** Res J Environ Toxicol 1(2):102–104 (OA Academic Journals; SHA e37c78817569…) — **WIRE SUPPORTIVE pooled**:
   - n=19 soaps+detergents pooled means: Pb **3.78** / Ni **2.20** / Cr **1.33** mg/kg; Cd ND — pooling mixes bathing-soaps + laundry (SUPPORTIVE only; not dish-primary)

5. **EPA Safer Choice / DfE Standard Aug 2024** (SHA 0472867c600e…) — **REGULATORY**: hand dish soaps in scope (§4.2.1.8); packaging Cd/Pb/Hg/Cr-VI via TPCH; §5.9 toxic-elements narrative (no formulation ppm for dish matrix); residuals <100 ppm

6. **Commission Decision (EU) 2017/1214** Hand Dishwashing Detergents (RAL EN mirror; SHA 7d5118e475e0…) + **EC 2024 EU Ecolabel User Manual v1.5** (SHA b5f9f484f2d5…) — **REGULATORY**: HDD product group; excluded nanosilver + EDTA/DTPA (chelators); CLP/SVHC gates; **no element-specific occurrence ppb** and no Pb/Cd/As/Sn/U numerical impurity caps in Decision text

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; panel lists Sn | No finished manual-dish-soap elemental Sn OA (Zhang/Iwegbue/CSIRO omit Sn; Yamada1993 organotin textiles KEEP DISTINCT infant-clothing/bibs) | **TRUE EMPTY** |
| **U** | values0 | No elemental U concentration OA in finished manual dish soap | **TRUE EMPTY** |
| **iAs** | values0; panel lists iAs | No speciation OA; Zhang/Iwegbue omit As; method papers tAs≠iAs; do not mint | **TRUE EMPTY** |
| Pb/Cd/Cr/Ni/Co/Cu/Mn/Zn/Fe/Sb/Mo/Se/Ti | wiki sources present; values0 wiring-miss | Zhang structured PRIMARY + Iwegbue PRIMARY HLS + CSIRO/Abulude SUPPORTIVE + EPA/EU REGULATORY | **WIRE** (closes wiring-miss for panel; not Sn/U/iAs) |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/dish-soaps-manual/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (Zhang structured PRIMARY + Iwegbue HLS PRIMARY panel WIRE; CSIRO/Abulude SUPPORTIVE; EPA Safer Choice + EU 2017/1214/EC User Manual REGULATORY; Sn/U/iAs **TRUE EMPTY**)

## Do not
- Mint iAs from any total-As method paper / GB detergent arsenic mention / Safer Choice narrative
- Steal Zhang2010 as laundry primary (→ dish-soaps-manual only; laundry wire already flags this)
- Steal Iwegbue HD powdered / HBS bar soaps / Torres soap rows as dish primary
- Steal CSIRO dishwasher powder Sb / tablet Cr as manual-dish primary (→ automatic-dishwasher-detergents)
- Steal GS-8 general-purpose/bathroom/glass/carpet as dish primary (→ all-purpose-cleaners / window-glass)
- Steal Yamada1993 organotin textiles as dish Sn
- Sci-Hub; cell mint; DataCite; invent ppb; shellfish; conflate baby-wipes
