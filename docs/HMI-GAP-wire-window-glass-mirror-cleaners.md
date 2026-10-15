# HMI-GAP-wire-window-glass-mirror-cleaners

- **Logged:** 2026-09-14T12:35:00+03:00 by Reed Holloway
- **Product slug:** `window-glass-mirror-cleaners`
- **HMTc:** Cat 12 Household Cleaning and Dishwashing — Row 5 — Window/glass/mirror cleaners (dilute surfactant/solvent sprays for windows, glass, mirrored surfaces; GS-37 also names dry-erase boards)
- **Page:** wiki/products/window-glass-mirror-cleaners.md — sources:11; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES pending-ingest scaffold; exposure_pathway dermal (incidental) + ingestion (residue on surfaces); panel_metals frontmatter Pb/iAs/Hg/Cd/Cr/Ni/Sn/Al
- **Authority:** Elon WAVE17 #5 (last of WAVE17 top5) after #4 infant-clothing HYBRID COMPLETE; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `all-purpose-cleaners` (DONE) / `laundry-detergents` (DONE) / `dish-soaps-manual` (DONE) / `automatic-dishwasher-detergents` / `bathroom-tub-tile-cleaners` / `toilet-bowl-cleaners` / `floor-cleaners-hard-surface` / `carpet-cleaners` / `kitchen-countertop-cleaners` / `household-specialty-cleaners-other` / `baby-wipes` / `bathing-soaps` / `hand-soap` / bleaching-whitening-additives; CSIRO2010 multipurpose/floor/toilet/disinfectant/laundry/dish rows → sibling pages (CSIRO2010 has **no** glass/window product rows)

## Structured evidence found (do not re-pull wired / valued)

1. **GreenSeal2022 GS-8** Ed5.7 (free standard) — **REGULATORY CONTEXT** household general-purpose/bathroom/**glass**/carpet cleaners:
   - Scope: Glass Cleaner = “A product used to clean windows, glass, and mirrored surfaces”
   - Performance: ≥3 rating each HCPA DCC 09 category (soil removal / smearing / streaking)
   - Undiluted product intentional prohibition: **Pb / Cr-VI / Se**
   - Primary packaging: no intentional introduction of **Pb / Hg / Cd / Cr-VI**; sum ≤ **100 ppm** by weight
   - CARB VOC table: glass cleaners **3%** (effective 12/31/2012)
   - No finished-product occurrence measurements

2. **GreenSeal2024 GS-37** Ed7.8 (free standard) — **REGULATORY CONTEXT** I&I general-purpose/restroom/**glass**/carpet:
   - Glass Cleaner definition includes windows, glass, dry-erase boards, mirrored surfaces
   - Colorant intentional-addition ban: **As / Cd / Co / Cr-VI / Pb / Mn / Hg / Ni / Se**
   - Undiluted product intentional prohibition: **Pb / Cr-VI / Se**
   - Packaging sum **Pb+Hg+Cd+Cr-VI ≤100 ppm**
   - Glass cleaner VOC: ≤ lower of **1%** or CARB limit
   - No finished-product occurrence measurements

3. **EPA2024 Safer Choice / DfE Standard** (Aug 2024) — **REGULATORY CONTEXT** program criteria for safer cleaning products — no finished glass-cleaner occurrence assay

4. **EC2024 EU Ecolabel User Manual** v1.5 (Feb 2024) — **REGULATORY CONTEXT** Hard Surface Cleaning (**HSC**) product group explicitly includes **window cleaners** (RTU / undiluted dosage + VOC worked examples) — procedural assessment guidance; not occurrence

5. **NYDEC2020 Cleansing Product Disclosure BMP** — **REGULATORY CONTEXT** NY household cleansing-product disclosure (covers glass cleaners among cleansing products): nonfunctional-contaminant disclosure hierarchy (NY DOH MCL → EPA pre-MCL → Prop 65 → default **50 ppb**); Appendix B chemicals-of-concern lists include Pb/Cd/As/Cr/Hg/Ni compounds — **disclosure thresholds, not occurrence assays**

6. **JEHS2015** (Kim et al., J Environ Health Sci 41(5):314–326; OA PDF) — **SUPPORTIVE SECONDARY** KR commercial ingredient survey:
   - Glass cleaner product group **n=31** products; **19** unique ingredients reported for glass cleaners
   - Dominant: ethanol **4–20%** (CAS 64-17-5); also ammonium hydroxide 0.2–1%, 2-butoxyethanol <1%, 1-butoxy-2-propanol ~0.9%, D-limonene, etc.
   - Hazardous-substance classification under EU Directive 67/548/EEC for organic ingredients — **NO elemental heavy-metal concentration assay**; do not invent ppb

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; panel lists Sn | No finished glass/window/mirror cleaner elemental Sn OA this turn (CSIRO2010 omits glass rows; Jang2024 CF403 residual) | **TRUE EMPTY** |
| **U** | values0; LES absent | No elemental U concentration OA in finished glass cleaners | **TRUE EMPTY** |
| **iAs** | values0; panel lists iAs | No speciation OA; tAs≠iAs; do not mint from GS colorant As ban / NY DEC As lists | **TRUE EMPTY** |
| Pb/Cr-VI/Se (product intentional) | wiki GS-8/GS-37 present; values0 | GS-8 / GS-37 intentional prohibition | **REGULATORY CONTEXT** (not occurrence WIRE) |
| Pb+Hg+Cd+Cr-VI packaging | wiki present; values0 | GS-8 / GS-37 **≤100 ppm** sum | **REGULATORY CONTEXT** |
| Colorant As/Cd/Co/Cr-VI/Pb/Mn/Hg/Ni/Se | wiki GS-37 | GS-37 intentional-addition ban | **REGULATORY CONTEXT** |
| Cr/Ni/other occurrence | values0 | Jang2024 residual (glass cleaner among all-ND metal panel products per abstract) | densify residual |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/window-glass-mirror-cleaners/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (GS-8 / GS-37 / EPA Safer Choice / EU Ecolabel HSC / NY DEC REGULATORY CONTEXT densify + JEHS2015 SUPPORTIVE ingredient inventory; Sn/U/iAs **TRUE EMPTY**; no finished glass-cleaner elemental occurrence PRIMARY this turn)

## Do not
- Mint iAs from GS colorant As ban / EU Ecolabel / Safer Choice / NY DEC As MCL lists
- Steal CSIRO2010 multipurpose/floor/toilet/disinfectant/laundry/dish rows as glass PRIMARY (CSIRO2010 has **no** glass rows)
- Steal Iwegbue/Torres/Abulude/Barkodia laundry/soap/dish rows
- Steal SDA1990 laundry/bleach/dish composites
- Steal ECETOC scouring/cleaners Ni/Co/Cr as glass spray PRIMARY
- Sci-Hub Jang2024; cell mint; DataCite; shellfish; conflate all-purpose / bathroom / floor specialty
