# HMI-GAP-wire-household-specialty-cleaners-other

- **Logged:** 2026-09-14T13:40:00+03:00 by Reed Holloway
- **Product slug:** `household-specialty-cleaners-other`
- **HMTc:** Cat 12 Household Cleaning and Dishwashing — Row 20 — Other household specialty cleaners (by functional use-case); residual GS-52 specialty frame after dedicated sibling rows
- **Page:** wiki/products/household-specialty-cleaners-other.md — sources:8; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES pending-ingest scaffold; exposure_pathway dermal (incidental) + ingestion (residue); panel_metals Pb/iAs/Hg/Cd/Cr/Ni/Sn/Al; true_pull Sn|U|iAs
- **Authority:** Elon WAVE20 #1 after WAVE19 top5 COMPLETE + FULL-CORPUS re-rank; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `all-purpose-cleaners` (DONE) / `laundry-detergents` (DONE) / `bathroom-tub-tile-cleaners` (DONE) / `toilet-bowl-cleaners` (DONE) / `carpet-cleaners` (DONE) / `pre-treaters-stain-removers` (DONE) / `window-glass-mirror-cleaners` (DONE) / `automatic-dishwasher-detergents` (DONE) / `dish-soaps-manual` (DONE) / `floor-cleaners-hard-surface` / `kitchen-countertop-cleaners` / `oven-grill-bbq-cleaners` / `drain-maintainers-cleaners` / `odor-removers-hard-surfaces` / `disinfectants-sanitizers` / `rinse-aids` / `appliance-cleaners` / `degreasers` / `descalers` / `cleaning-wipes-household` / `carpet-spot-removers` / `floor-finishes-strippers` / bleaching-whitening-additives; CSIRO multipurpose/cream → APC; floor CFL → floor; CTO → toilet-bowl; CTF/CTC fresheners → odor/toilet label (do not steal CTC2 Cr 174)

## Structured evidence found (do not re-pull wired / valued)

1. **Tjandraatmadja2010** CSIRO Smart Water Fund (OA Commonwealth; SHA f21a071a…) — AU Melbourne n=156 — **WIRE PRIMARY disinfectant CGE4–7** (APC WAVE16 deferred disinfectant rows → specialty; mg/kg finished product):
   - **Disinfectant** (n=4; Appendix Table 18 CGE4*/CGE5/CGE6p/CGE7 + summary Table 9):
     - Cr: **2/4** detect; summary **0.07–0.11** mg/kg (median **0.04**; leader **0.07**; private **0.11**); appendix CGE4 **0.069** / CGE5 **<0.12** / CGE6p **<0.01** / CGE7 **<0.001**
     - Co: appendix **<0.01–<0.127** (not in Table 8 detectable summary for disinfectant class)
     - Se / Sb / Mo: appendix largely **<LOD** (Se not in Table 12 disinfectant row; Sb CGE4 **<0.3** / others **<0.01**; Mo **<0.01–<0.12**)
   - KEEP DISTINCT: multipurpose/cream → `all-purpose-cleaners` DONE; floor CFL → `floor-cleaners-hard-surface`; CTO toilet → `toilet-bowl-cleaners` DONE; CTF/CTC fresheners → `odor-removers-hard-surfaces` / toilet-bowl label; dedicated `disinfectants-sanitizers` row = dual-route KEEP DISTINCT (EPA-registered antimicrobial sprays/wipes/concentrates)
   - Panel excludes Pb/Cd/Hg/Ni/As/Sn/U/Al/iAs — cannot close Sn|U|iAs from this source.

2. **GreenSeal2022 GS-52** Ed2.7 (free standard; clarifications thru 2026; SHA e473f4df…) — **REGULATORY PRIMARY** specialty household residual umbrella:
   - Scope (Appendix 1): adhesive remover; boat cleaning/wax; chewing gum remover; deck/siding/outdoor furniture; dish (hand/automatic/rinse — sibling rows); antimicrobial pesticide/disinfectant (sibling dual-route); drain; dusting aid; electronic; fruit/vegetable wash; **furniture polish**; **graffiti remover**; grout; leather; **metal cleaning**; mold/mildew stain remover; motor vehicle cleaning/dressing/windshield/wax; odor remover (sibling); optical lens; oven (sibling); rust stain remover; stone; tire/wheel; upholstery (carpet dual-route); waterless motor vehicle; etc.
   - Product intentional prohibition undiluted: **Pb / Cr-VI / Se**
   - Colorants: no intentional **As/Cd/Co/Cr-VI/Pb/Mn/Hg/Ni/Se** (unless FDA-certified ingestion or natural)
   - Packaging sum **Pb+Hg+Cd+Cr-VI ≤100 ppm**
   - Excludes GS-8 general-purpose/bathroom/glass/carpet household; GS-37 I&I general-purpose — KEEP DISTINCT

3. **EPA2024 Safer Choice / DfE Standard** (Aug 2024; SHA 0472867c…) — **REGULATORY CONTEXT** program criteria for safer cleaning products — no finished specialty occurrence assay.

4. **NYDEC2020** Cleansing Product Information Disclosure BMP (SHA cea0eaf4…) — **REGULATORY CONTEXT** recommended disclosure practice naming Pb/Cd/tAs/tHg/Cr-VI/Ni — not occurrence assay.

5. **KR MoE** Safer Living Chemical Products criteria (SHA f8cb3876…) — **REGULATORY CONTEXT** 세정제 use-table includes **가구용 / 구두용 / 오븐용 / 배수관용 / 기타표면세정용** (furniture/shoe/oven/drain/other-surface) among general cleaner uses; ceilings **Pb ≤1 mg/kg**; **As ≤5 mg/kg** (tAs≠iAs) — no finished specialty occurrence assay.

6. **Tjandraatmadja2006** CSIRO lit review (OA Commonwealth; SHA 756a1453…) — **SUPPORTIVE SECONDARY** wastewater-source attribution for As/Pb/Ni/Cd/Hg etc.; **not** a finished specialty-product elemental assay.

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; panel lists Sn | No finished specialty residual elemental Sn OA this turn (CSIRO 2010 omits Sn; CSIRO 2008 PDF not fetchable) | **TRUE EMPTY** |
| **U** | values0; LES absent | No elemental U concentration OA in finished specialty residual | **TRUE EMPTY** |
| **iAs** | values0; panel lists iAs | No speciation OA; tAs≠iAs; do not mint from KR MoE As ≤5 / GS colorant As ban | **TRUE EMPTY** |
| Cr (disinfectant) | wiki CSIRO present; values0 wiring-miss | CSIRO2010 PRIMARY disinfectant CGE4–7 | **WIRE** |
| Pb/Cr-VI/Se (intentional) | wiki EPA/NYDEC present; GS-52 not yet on page products list | GS-52 intentional prohibition (+ EPA/NYDEC/KR context) | **REGULATORY CONTEXT** |
| Pb+Hg+Cd+Cr-VI packaging | — | GS-52 **≤100 ppm** sum | **REGULATORY CONTEXT** |
| Colorant As/Cd/Co/Cr-VI/Pb/Mn/Hg/Ni/Se | — | GS-52 intentional-addition ban | **REGULATORY CONTEXT** |
| KR Pb/As ceilings | — | Pb ≤1 / As ≤5 mg/kg (incl. furniture/shoe/oven/drain/other-surface uses) | **REGULATORY CONTEXT** |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/household-specialty-cleaners-other/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (CSIRO2010 PRIMARY disinfectant Cr WIRE + GS-52 PRIMARY REGULATORY specialty scope + EPA/NYDEC/KR REGULATORY + CSIRO2006 SUPPORTIVE; Sn/U/iAs **TRUE EMPTY**)

## Do not
- Mint iAs from KR MoE As ≤5 / GS-52 colorant As ban / any total-As regulatory mention
- Steal CSIRO multipurpose/cream/floor/CTO/CTF/CTC as specialty-other PRIMARY (siblings own)
- Steal CTC2 Cr 174 in-cistern as specialty-other PRIMARY
- Steal dedicated oven/drain/ADD/dish/rinse/odor/carpet upholstery PRIMARY occurrence as residual-umbrella identity
- Invent ppb from DavidSuzuki narrative / SB258 disclosure / Safer Choice criteria
- Sci-Hub Jang2024; cell mint; DataCite; shellfish; conflate GS-8 general-purpose as GS-52 specialty

