# Manual-fetch ingest progress — June 8 Inorganic Arsenic Seaweed

**Folder:** `raw/Manual Fetch Kimi /June 8 Inorganic Arsenic Seaweed/`
**Date:** 2026-06-08
**Session:** Claude Code (Opus 4.8), interactive
**Purpose:** ingest this folder to populate HMTc Category 6 (Seafood) Row 5 `seaweed-kelp-foods` (iAs/tAs/Cd platform) for standards-setting.

## Folder inventory

68 PDF files; 67 unique papers (one in-folder duplicate: `10.1016@j.fct.2011.11.024.pdf` and `…(1).pdf`). One likely corpus duplicate: `llorente-mirandes2016.pdf` ↔ existing `llorente-mirandes2016-ias-food-analytical-review` (verify on reach).

## Completed this session (3) — all audited PROMOTE, routing direct_evidence to seaweed-kelp-foods

| cite_key | tier | metals | n | headline | ingest commit | audit |
|---|---|---|---|---|---|---|
| almela2002-algae-food-arsenic-metals | A | tAs,iAs,Pb,Cd,tHg | 18 | edible algae food products (Spain), dry wt; hijiki iAs 83–88 mg/kg (60–72% of tAs); Cd ≤1.9 | 0bb8e85 | PROMOTE (43b3c40) |
| rose2007-seaweed-arsenic-forms-uk | A | tAs,iAs | 31 | UK FSA survey; iAs hijiki-only 67–96 mg/kg as sold; as-sold/prepared/water bases | 95b689d | PROMOTE→revised (c5a5510, b2bb901) — 30→"30-50-fold" exposure fix applied |
| fsanz2012-seaweed-inorganic-arsenic-au | A | iAs | 38 | FSANZ gov-survey; iAs dried basis; hijiki 7.80 mg/kg sole ML exceedance | fdd6098 | PROMOTE (b7de8bd) |

All three independently re-verified table-by-table by fresh-context audit subagents. The recurring, cross-source structural finding: inorganic arsenic in wakame/kombu/nori/arame/sea-vegetable clusters low (≈0.09–0.57 mg/kg dw), while **hijiki/*Hizikia*/*Sargassum fusiforme* is a categorical outlier** (67–96 mg/kg dw speciated; 7.80 mg/kg in the FSANZ composite). This directly supports the within-row hijiki species sub-split flagged in `docs/governance/category-6-step0-lock.md`.

## Stop reason

Context-budget checkpoint after the three highest-value occurrence/speciation surveys. Not a defect or contradiction stop.

## Remaining work (~64 papers)

Priority order for the remainder (occurrence first, since that feeds the P97):
- **High (occurrence/speciation surveys):** ronan2017 (kelp iAs), llorente-mirandes2011 (iAs edible algae), lynch2014, taylor2016, camurati2019, hata2014, narukawa2020, luvonga2020, almela-2006-equivalent (`s12403-025-00708-1`, `s00216-024-05250-8`, `molecules-29-01348`, `1-s2.0-S0147651325007936`), the EFSA 2021 iAs opinion (large, regulatory A-tier exposure anchor), `Knowledgeupdateonmacroalgaefoodandfeedsafety2020`, `Arsenic in Marine Macroalgae Booklet v2`.
- **Method-development (HPLC-ICP-MS speciation; capture LOD/LOQ + any validation occurrence):** the `10.1016@j.chroma…`/`j.aca…` papers, mcsheehy2000, nischwitz2006, vanhulle2004, vanelteren2007, narukawa2020, ichikawa2006/2010, shimoda2010.
- **Mechanism/metabolism/uptake (lower occurrence value):** effects-of-dietary-intake-of-arsenosugars, Neff_1997 marine As toxicology (review), bolan2017, bhattacharya2016.
- **Check matrix-fit before ingest (possible out-of-scope):** `Heavy-metal-accumulation…seagrass` (seagrass ≠ edible macroalgae), `Characteristics…organotin compounds in marine organisms` (Sn/organotin focus), `water-16-00005`.
- **Likely scanned (may need OCR):** morita1990, yamaoka1986, stoeppler1986, toxic_elements_Pacin.

## Next gate after ingest (to actually ship the Cat 6 seaweed standard)

Ingest produces source pages; the P97 comes from the occurrence-extraction → pooling pass per `docs/tasks/cat6-7-occurrence-extraction.md`, scoped to `row_slug = seaweed-kelp-foods`. Result lands in `data/evidence/hmtc_aggregate_distributions.csv`.
