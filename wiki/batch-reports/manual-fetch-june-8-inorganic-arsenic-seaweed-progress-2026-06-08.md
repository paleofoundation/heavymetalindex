# Manual-fetch ingest progress — June 8 Inorganic Arsenic Seaweed

> **Historical methodology snapshot.** This June 2026 progress report predates the government-limit-only method. Its P97, clean/dirty, standards-setting, and occurrence-selected completion language is superseded. The ingested literature remains descriptive occurrence evidence; it does not select an initial HMTc limit or enter the certified-lot Standards Ratchet.

**Folder:** `raw/Manual Fetch Kimi /June 8 Inorganic Arsenic Seaweed/`
**Date:** 2026-06-08 (updated through 10/67)
**Session:** Claude Code (Opus 4.8), interactive, driven via a self-paced `/loop` of `ingest-next-manual-fetch-pdf`
**Purpose:** populate HMTc Category 6 (Seafood) Row 5 `seaweed-kelp-foods` (iAs/tAs/Cd platform) for standards-setting.

## Folder inventory

68 PDFs; 67 unique papers (one in-folder duplicate: `…fct.2011.11.024.pdf` and `…(1).pdf`). One likely corpus duplicate to verify on reach: `llorente-mirandes2016.pdf` ↔ existing `llorente-mirandes2016-ias-food-analytical-review`.

## Completed: 10 of 67 — all routed `direct_evidence` → `seaweed-kelp-foods`, all audited (fresh-context subagent per page)

| # | cite_key | tier | type | headline (dry-weight basis) | audit |
|---|---|---|---|---|---|
| 1 | almela2002-algae-food-arsenic-metals | A | occurrence | 18 algae food products (ES); tAs+iAs+Pb+Cd+Hg; hijiki iAs 83–88 mg/kg | PROMOTE |
| 2 | rose2007-seaweed-arsenic-forms-uk | A | occurrence | UK FSA; iAs hijiki-only 67–96 mg/kg; n=31; as-sold/prepared/water | revised |
| 3 | fsanz2012-seaweed-inorganic-arsenic-au | A | gov-survey | FSANZ; iAs dried; hijiki 7.80 mg/kg sole ML exceedance; n=38 | PROMOTE |
| 4 | ronan2017-laminaria-ascophyllum-ias-ireland | A | occurrence/speciation | kelp *L. digitata* iAs 2.2–87 mg/kg (>50% of tAs); *A. nodosum* iAs <1% | revised |
| 5 | taylor2016-new-england-seaweed-arsenic | A | occurrence/speciation | 20 NE-US species; *L. digitata* iAs 2.8–20.4 mg/kg; others <1 mg/kg | revised |
| 6 | llorente-mirandes2011-commercial-seaweed-arsenic | A | occurrence/speciation | 6 ES products; iAs <LOD in kombu (*L. ochroleuca/saccharina*) + nori | revised |
| 7 | camurati2019-edible-macroalgae-arsenic-review | B | review | corroborates iAs rarely >1 mg/kg except hijiki + *L. digitata*; legislation | revised |
| 8 | narukawa2020-hijiki-crm-arsenosugars-interlab | A | CRM/metrology | hijiki iAs(as As(V)) 10.1 (CRM 7405-a) / 24.4 mg/kg (candidate); EF-3 flag | PROMOTE |
| 9 | lynch2014-inorganic-arsenic-food-review | B | meta-analysis | seaweed inAs mean 11,000 µg/kg (n=312); NOT poolable (aggregate) | revised |
| 10 | luvonga2020-organoarsenicals-marine-methods-review | B | methods review | speciation methods; total As inadequate; seaweed extraction caveats | revised |

## Emerging row finding (for the standards / synthesis pass)

Across primary occurrence sources from Spain, UK, Australia/NZ, Ireland, and the US, the row's structure is consistent and well-supported: **inorganic arsenic in seaweed is generally <1 mg/kg dw, with two high-iAs exceptions — hijiki (*Hizikia/Sargassum fusiforme*) and the kelp *Laminaria digitata*.** The kombu-marketed kelps *L. ochroleuca* / *L. saccharina* (Saccharina) ran iAs-below-detection (Llorente-Mirandes 2011), so the high-iAs concern is species-specific, not generic to "kombu." This directly supports the within-row hijiki/*Laminaria* clean/dirty sub-treatment flagged in `docs/governance/category-6-step0-lock.md`.

## Pooling guidance recorded on the pages

- Poolable market-occurrence primaries so far: almela2002, rose2007, fsanz2012, ronan2017, taylor2016, llorente-mirandes2011 (all dry, as-sold basis).
- NOT poolable (flagged on-page): narukawa2020 (reference materials, EF-3), lynch2014 (meta-analysis aggregate — would double-count), camurati2019 & luvonga2020 (reviews, no primary data).

## Remaining (~57)

Priority occurrence/speciation still to do: hata2014 (hijiki), the recent ones (`s12403-025-00708-1`, `s00216-024-05250-8`, `molecules-29-01348`, `1-s2.0-S0147651325007936`), `Survey of inorganic arsenic in seaweed` (done = fsanz), the EFSA 2021 iAs opinion (large, A-tier exposure anchor), `Knowledgeupdateonmacroalgaefoodandfeedsafety2020`, `Arsenic in Marine Macroalgae Booklet v2`. Method-development papers (chroma/aca/mcsheehy/nischwitz/vanhulle/vanelteren/ichikawa/shimoda). Mechanism/uptake (effects-of-dietary-intake-of-arsenosugars, Neff_1997, bolan2017, bhattacharya2016). Matrix-fit check before ingest: `Heavy-metal-accumulation…seagrass` (seagrass ≠ macroalgae), `Characteristics…organotin` (Sn focus), `water-16-00005`. Likely scanned/OCR: morita1990, yamaoka1986, stoeppler1986, toxic_elements_Pacin.

## Historical next gate recorded at the time

At the time, the report proposed occurrence-extraction and P97 pooling as a certification step. That step is retired. The same evidence may still populate the descriptive occurrence model and surveillance context; the initial certification value must come from the sovereign-government compiler, and any later tightening must come from eligible HMTc certified-lot data.

## Live tracker

Authoritative per-paper status is in `data/evidence/audit-queue.csv` (one row per cite_key); git log has one ingest commit + one audit/queue commit per paper.
