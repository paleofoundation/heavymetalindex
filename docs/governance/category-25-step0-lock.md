# Category 25 — Cannabis, Hemp, and CBD Products — Step Zero Lock

**Status:** Scope lock (Step Zero, 2026-06-08); route-based government-limit compiler completed for five of six rows on 2026-08-12. Vape hardware remains reserved because its governing quantity is release into aerosol rather than total product content.
**Domain:** Ingestible and applied health products. **Number:** 25 (appended; no existing number changed).
**Exposure pathway:** Multi-route — inhalation (flower, vape aerosol), ingestion (edibles, tinctures),
dermal (topicals). **Jurisdiction:** state cannabis programs (testing rules vary by state), FDA (CBD/
hemp-derived, hemp foods), USDA (hemp production); no uniform federal contaminant limit.
**Panel:** eight totals — Pb, Cd, tAs, tHg, Ni, Sn, Al, total Cr — plus iAs and Cr-VI species controls and an explicit MeHg applicability cell.

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
- 2026-08-12 — Compiled the five route-defined cannabis material/product rows from sovereign cannabis programs. Nickel, tin, and aluminium remain mandatory total-panel surveillance controls where no sovereign cannabis maximum exists. Vape hardware remains unresolved under the reserved aerosol-release architecture decision.
- 2026-06-08 — Step Zero scaffold lock. 6 rows defined as routing destinations; no candidate values.
  Vape-hardware factoring left open pending Karen's decision.
