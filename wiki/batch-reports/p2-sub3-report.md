---
noindex: true
---

# P2 Sub-Batch 3 Ingest Report
**Date:** 2026-05-12
**Batch:** 50 papers listed in P2 sub-batch 3 task

---

## 1. Summary

| Category | Count |
|---|---|
| Papers in batch list | 50 |
| Files present in raw/markdown | 3 |
| Files missing from filesystem | 47 |
| Source pages created | 3 |
| False positives (out of scope) | 1 (FM_11123258) |
| Food concentration papers | 1 (FM_11125852) |
| Environmental/water papers | 1 (FM_11120698) |

---

## 2. Classification Table

| Handle | Cite Key | Classification | Key Finding |
|---|---|---|---|
| FM_11120698 | bousquet2024-lead-drinking-water-university | Environmental/water — Pb in drinking water | 8.43% of 5,954 fixture tests above 1 ppb LOD; max 1,100 ppb; UNC-CH campus; not food matrix |
| FM_11123258 | atanasov2024-sers-ammonium-nitrate-aln | False positive — materials science SERS | Al nanostructure SERS for ammonium nitrate; no food matrix; no food heavy metal data |
| FM_11125852 | cantoral2024-lead-levels-mexican-foods | **Food concentration paper — reclassify P2 to P1** | Pb in 103 Mexican foods; infant rice cereal 1,005 ppb; soy infant formula 35 ppb; AAS; Mexico City retail |
| FM_11134948 through FM_12231472 (47 handles) | various unknown2024-rsc-advances-* | **FILE MISSING** | Not in raw/markdown; not in triage manifest |

---

## 3. Food Concentration Paper Detail

### FM_11125852 — cantoral2024-lead-levels-mexican-foods

**Reclassification recommendation: P2 → P1.** This is a primary food occurrence survey with direct concentration values in relevant infant food matrices. Meets all HMT&C Path A criteria.

**Metal:** Pb (total Pb; GF-AAS; no speciation)
**Jurisdiction:** MX (Mexico City retail stores and markets)
**n:** 103 food, beverage, and spice samples
**LOQ:** 0.0025 mg/kg
**Method:** Graphite furnace AAS (Perkin Elmer AAnalyst-600 with HGA-600); CRM bovine liver NIST 1577c; recovery 105.03 ± 9.01%; duplicate analysis per sample
**Basis:** Wet weight for liquids; dry weight for solids dehydrated at 80°C for 72 h

**Key concentration values (mg/kg = ppm; convert × 1000 for ppb):**

| Food item | Pb mean (mg/kg) | SD | ppb equivalent | FAO/WHO ML (mg/kg) | Exceeds ML |
|---|---|---|---|---|---|
| Infant rice cereal (Brand 2) | 1.005 | 0.042 | 1,005 | 0.20 | Yes |
| Soy infant formula (Brand 2) | 0.035 | 0.008 | 35 | 0.01 | Yes |
| Whole wheat bread | 0.447 | 0.192 | 447 | 0.20 | Yes |
| Pre-cooked rice | 0.276 | 0.017 | 276 | 0.20 | Yes |
| Black pepper (bulk) | 0.239 | 0.007 | 239 | No ML |  |
| Turmeric (bulk) | 0.176 | 0.032 | 176 | No ML |  |
| Beef liver | 0.133 | 0.015 | 133 | 0.20 |  |
| Sweet bread | 0.123 | 0.020 | 123 | 0.20 |  |
| Paprika (bulk) | 0.092 | 0.027 | 92 | No ML |  |
| Wheat flour Brand 2 | 0.070 | 0.007 | 70 | 0.20 |  |
| Pork ham | 0.062 | 0.003 | 62 | 0.15 |  |
| Tamarind candy | 0.050 | 0.001 | 50 | 0.10 (FDA candy) |  |
| Guajillo chili | 0.037 | 0.000 | 37 | 0.05 |  |
| Infant formula soy Brand 2 | 0.035 | 0.008 | 35 | 0.01 | Yes |
| Cacao powder (bulk) | 0.083 | 0.032 | 83 | 0.10 (FDA candy) |  |
| Soybean | 0.029 | 0.013 | 29 | 0.10 |  |
| Turkey sausages Brand 2 | 0.026 | 0.010 | 26 | 0.10 |  |
| Wheat flour Brand 1 | 0.031 | 0.009 | 31 | 0.20 |  |
| Rice cake Brand 1 | 0.030 | 0.012 | 30 | 0.20 |  |
| Tea sachet | 0.021 | 0.003 | 21 | No ML |  |

All remaining 84 samples: <LOQ (<0.0025 mg/kg; <2.5 ppb)

**Row-fit notes:** Each food item is a single commercial sample (n=1 per item per brand). High within-item variance expected; SD for infant rice cereal is 0.042 mg/kg reflecting duplicate measurement variation, not between-sample variation. Row-fit is exact for matrices where the paper specifies (infant rice cereal, soy infant formula, pre-cooked rice, wheat flour, etc.). No speciation performed; values are total Pb.

**Comparison context:** The 1,005 ppb infant rice cereal value is the highest single-sample Pb concentration for that matrix in current wiki coverage. FDA Closer to Zero draft action level for processed foods eaten by babies/young children is 20 ppb as-consumed (fruit/vegetables) or may be referenced against powder-equivalent; the paper does not address reconstitution. This value was purchased retail in Mexico City; it is not representative of US market supply.

---

## 4. Testing Page Notes

**FM_11123258** is a materials science paper on laser-structured AlN ceramic for SERS detection of ammonium nitrate. No food-relevant testing content. The Al and As flags in text-mining are from the chemical notation AlN (aluminium nitride) and As (arsenic) used in plasmonics substrate comparisons, not from food analysis. No testing page update warranted.

---

## 5. Reclassification Recommendations

**FM_11125852:** Reclassify P2 → P1. The manifest flagged this as a LOQ source candidate based on method validation language in the abstract. The paper is actually a multi-food Pb occurrence survey with primary concentration data across 13 food groups including infant rice cereal and infant formula. It meets all HMT&C Path A criteria.

---

## 6. Missing Files — Action Required

47 of 50 handles in this batch (FM_11134948 through FM_12231472) are absent from both `raw/markdown/` and `raw/manifest/triage-manifest.csv`. The triage manifest has 23,260 rows and was built 2026-05-12; these handles are not in it.

Git status shows two untracked paths: `raw 2.zip` and `raw 2/`. These are likely the source of the missing Marker-converted markdown. The handles in the batch list follow the manifest numbering scheme above the current highest ingested range, suggesting they belong to a not-yet-imported batch.

**Action needed (Karen):** Confirm whether `raw 2/` or `raw 2.zip` contains the markdown for these handles. If yes, the workflow is:
1. Copy the FM_111xxxxx through FM_122xxxxx folders from `raw 2/` into `raw/markdown/`
2. Extend the triage manifest with rows for the new handles
3. Re-run this sub-batch against the updated manifest

Until the files are available in `raw/markdown/` with manifest entries, no source pages can be created for these 47 handles. They are logged here as missing, not silently dropped.

---

## 7. Source Pages Created

1. `wiki/sources/cantoral2024-lead-levels-mexican-foods.md` — Food concentration paper; Pb in 103 Mexican foods; P1 reclassification recommended
2. `wiki/sources/bousquet2024-lead-drinking-water-university.md` — Pb in drinking water at UNC-CH; environmental exposure paper; not food matrix
3. `wiki/sources/atanasov2024-sers-ammonium-nitrate-aln.md` — Materials science / SERS false positive; no food data
