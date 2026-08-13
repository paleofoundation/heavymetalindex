# Category 25 — Cannabis, Hemp, and CBD Products — Step Zero Lock

**Status:** Scope lock (Step Zero, 2026-06-08). A dedicated route-based government-limit compiler
(`tools/standards/compile-cat25.mjs`, `cat25-v1.0`, 2026-08-13) has since compiled five of the six rows
to firm numeric/control cells. Vape hardware remains reserved (its governing quantity is release into
aerosol, not total product content). Audit trail: `data/workbench/standards/2026-08-13-cat25-cannabis-derive-audit-verify.md`.
**Domain:** Ingestible and applied health products. **Number:** 25 (appended; no existing number changed).
**Exposure pathway:** Multi-route — inhalation (flower, vape aerosol), ingestion (edibles, tinctures),
dermal (topicals). **Jurisdiction:** state cannabis programs (testing rules vary by state), FDA (CBD/
hemp-derived, hemp foods), USDA (hemp production); no uniform federal contaminant limit.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls
and an explicit MeHg applicability cell.

## Why this earns a number

Cannabis is a documented hyperaccumulator, used in soil phytoremediation precisely because it
concentrates Pb, Cd, and Ni. Vape hardware leaches metal (Pb, Ni, Cr) into inhaled aerosol from the
heating coil. The market is large, the contamination science is real, and no incumbent heavy-metal
trust mark exists. None of the existing categories can hold it without distorting scope.

## Row architecture (scaffold)

| Row | Name | Slug |
|----:|------|------|
| 1 | Cannabis flower / dried herb | `cannabis-flower` |
| 2 | Edibles (gummies, baked goods, beverages) | `cannabis-edibles` |
| 3 | Tinctures and sublingual oils | `cannabis-tinctures-oils` |
| 4 | Topicals (creams, balms, salves) | `cannabis-topicals` |
| 5 | Concentrates and extracts | `cannabis-concentrates` |
| 6 | Vape cartridges and hardware | `cannabis-vape-hardware` |

## Boundary rules

- CBD/hemp-derived ingestibles route here even when labeled with a Supplement Facts panel, because FDA
  does not currently recognize CBD as a lawful dietary-supplement ingredient — they are legally distinct
  from Cat 16.
- Hemp **seed** and hemp **oil** sold as conventional food (no cannabinoid actives marketed) route to
  Cat 4 / Cat 7, not here.
- Cannabis products marketed for animals route to the Pet domain (Cat 17/18), not here.

## Platform notes

Soil hyperaccumulation drives Pb/Cd/Ni in flower and anything derived from it; concentrates and vape
oils can concentrate the load further. **Row 6 (vape hardware)** shares its coil-leaching mechanism
with nicotine vapes (potential Cat 27) and is inhalation-adjacent to Cat 22. Whether vape hardware is
treated here per-category or via one shared inhalable-hardware treatment is a **reserved decision for
Karen** (`taxonomy-reorganization-2026-06.md` §4) and is not resolved at this lock.

## Drift direction

Additive; scaffold only; no thresholds.

## Changelog
- 2026-08-13 — Dedicated route-based compiler (`compile-cat25.mjs`, `cat25-v1.0`) and route-based
  `cat25-config.json` built; five rows (flower, edibles, tinctures/oils, topicals, concentrates)
  compiled to firm numeric/control cells from sovereign cannabis programs (CA, CO, MA, MD, NV, IL),
  route basis preserved. Nickel, tin, and aluminium are mandatory total-panel surveillance controls
  where no sovereign cannabis maximum exists; total chromium is a control on the oral/topical rows
  (no protective sovereign value) and a numeric limit on the inhaled/multi-route rows (Maryland 600).
  Corrected two defects carried by the prior food-compiler run: Israel's route-agnostic mercury limit
  now binds edibles/tinctures/topicals (tHg 100, not 400), and the non-protective Maryland oral/cutaneous
  chromium value (1,100,000 µg/kg) is no longer published as a limit. Vape hardware remains reserved
  under the aerosol-release architecture decision.
- 2026-06-08 — Step Zero scaffold lock. 6 rows defined as routing destinations; no candidate values.
  Vape-hardware factoring left open pending Karen's decision.
