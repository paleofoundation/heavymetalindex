---
noindex: true
---

# P2 Sub-batch 4 Ingest Report
**Date:** 2026-05-12  
**Batch:** 50 papers from P2 tier  
**Handles:** FM_12412015, FM_467049, FM_10005410 through FM_10305879, FM_9965521

---

## 1. Summary

| Metric | Count |
|--------|-------|
| Total papers in manifest batch | 50 |
| Papers with files present in raw/markdown | 12 |
| Papers missing from raw/markdown | 38 |
| False positives (skipped, file present) | 4 |
| Source pages created | 7 |
| Source pages skipped (no file) | 38 |
| Manifest metadata corrections flagged | 4 |

---

## 2. Classification Table

| Handle | Cite Key (assigned) | Classification | Key Finding |
|--------|---------------------|----------------|-------------|
| FM_12412015 | — | FALSE POSITIVE | Chinese-language paper about isoxazoline veterinary drug residues (fluralaner, sarolaner, afoxolaner, lotilaner) in beef/milk/liver by UHPLC-Q/Trap MS. No heavy metals. Manifest text-mined matrix hits (beef, milk, poultry) are real but metals hits are wrong. Skip. |
| FM_467049 | — | FALSE POSITIVE | Heliyon 2024 — salt mineral content study in Tanzania. Reports iodine, nitrate, phosphate, sulphate, ammonia, copper, iron, manganese. Manifest listed As/Sb — incorrect; no arsenic or antimony in paper. Skip. |
| FM_10005410 | yuan2023-fluorescent-aptasensor-arsenic | Analytical method | As(III) fluorescent aptasensor (triple-helix molecular switch), Molecules 2023. LOD 69.95 nM (~5.2 µg/L). CC BY. Source page created. |
| FM_10020839 | patel2023-arsenic-environment-review | Review | RSC Advances 2023 comprehensive review of arsenic in environment. Covers speciation, exposure routes, analytical methods. Geogenic sources key. CC BY. Source page created. |
| FM_10053095 | elsebai2023-amperometric-mercury-sensor | Analytical method | Molecules 2023 — Hg2+ amperometric sensor with organic chelator ionophore + MWCNT. LOD 60 nM. Validated in milk and water. Manifest year "1972" is wrong; actual year 2023. CC BY. Source page created. |
| FM_10053391 | tian2021-magnetic-purification-cadmium-lead-grain | Analytical method | Food Chemistry: X — Cd/Pb rapid detection in grain via Fe3O4 magnetic bead purification + portable ASV. LOD 0.01 mg/kg Cd, 0.02 mg/kg Pb. Real samples: rice, wheat, corn (n=12, China). License unknown. Source page created. |
| FM_10054876 | — | FALSE POSITIVE | Toxins 2023 — mycotoxins (23 analytes including AFM1, DON, OTA, ZEA) in raw bovine milk by UHPLC-QTrap-MS/MS. No heavy metals data. Skip. |
| FM_10058424 | han2023-paper-chip-mercury-water | Analytical method | Sensors 2023 — paper-based chip for Hg2+ visual fluorescent detection in water. LOD 2.83 µg/L, 90-second response. Manifest listed As/Pb — incorrect; paper is Hg only. CC BY. Source page created. |
| FM_10058480 | pinto2023-cadmium-hollow-fibre-water | Analytical method | Membranes 2023 — Cd in natural waters by HF-LPME + HR-CS-GFAAS. LOD 0.13 ng/L. Validated in mineral/tap/seawater. CC BY. Source page created. |
| FM_10069232 | — | FALSE POSITIVE | RSC Advances 2023 — MoS2-NFO voltammetric sensor for clenbuterol (veterinary drug). No heavy metals analyte. Manifest Ni/As/Pb hits from electrode material composition and selectivity testing, not analytes. Skip. |
| FM_9965521 | chepak2023-light-harvesting-mercury-nanoprobe | Analytical method | Molecules 2023 — FRET light-harvesting nanoprobe for Hg2+ in water. LOD ~100 pM (~0.02 µg/L). Proof-of-concept, no food matrix. CC BY. Source page created. |
| FM_10074625 through FM_10305879 (38 handles) | — | MISSING | Not present in raw/markdown directory. See Section 6. |

---

## 3. Food Concentration Papers

None in this batch. All processable papers are analytical method or sensor development papers (LOD data only, no food occurrence survey data), environmental reviews, or false positives.

Candidates from missing batch that may contain food concentration data when files become available:
- FM_10222697 (manifest: meat matrix + As/Cd/Pb/tHg) — if present, likely a food occurrence paper
- FM_10128540 (manifest: fish/seafood + As/Pb) — if present, likely a food occurrence paper
- FM_10076285 (manifest: vegetable + As/Cd/Pb) — if present, likely a food occurrence paper
- FM_10093527 (manifest: fruit/vegetable + As/Pb) — if present, may have occurrence data

---

## 4. Analytical Method Papers: LOD Data for Testing Pages

| Cite Key | Metal | Matrix | LOD | Method |
|----------|-------|--------|-----|--------|
| yuan2023-fluorescent-aptasensor-arsenic | tAs/As(III) | water | 69.95 nM (~5.2 µg/L) | Fluorescent aptasensor (triple-helix molecular switch) |
| elsebai2023-amperometric-mercury-sensor | tHg/Hg2+ | water, milk | 60 nM (~12 µg/L) | Amperometric electrochemical sensor |
| tian2021-magnetic-purification-cadmium-lead-grain | Cd, Pb | grain (rice/wheat/corn) | 0.01 mg/kg Cd; 0.02 mg/kg Pb | Magnetic bead SPE + portable ASV |
| han2023-paper-chip-mercury-water | tHg/Hg2+ | water | 2.83 µg/L | Paper-based chip, CdTe quantum dot fluorescence |
| pinto2023-cadmium-hollow-fibre-water | Cd | water | 0.13 ng/L | HF-LPME + HR-CS-GFAAS |
| chepak2023-light-harvesting-mercury-nanoprobe | tHg/Hg2+ | water | ~100 pM (~0.02 µg/L) | FRET light-harvesting nanoprobe |

Testing pages to create or update:
- `wiki/testing/arsenic-detection-methods.md`
- `wiki/testing/mercury-detection-methods.md` (3 papers contribute)
- `wiki/testing/cadmium-detection-methods.md` (2 papers contribute)
- `wiki/testing/electrochemical-detection-methods.md`

---

## 5. Manifest Metadata Corrections

Four papers had incorrect manifest metadata:

1. **FM_10053095** — manifest year: `1972`. Actual year: `2023`. Paper is *Molecules* 2023, DOI 10.3390/molecules28062809. Data entry error in triage pipeline; corrected in source page.

2. **FM_10058424** — manifest text-mined metals: `As;Pb`. Actual analyte: `tHg` only. Paper is a Hg2+ quantum-dot paper-based chip. The As/Pb hit was likely from mention of these metals in the selectivity interference tests.

3. **FM_10069232** — manifest text-mined metals: `As;Pb;Ni`. Actual analyte: clenbuterol (veterinary drug). This is a false positive — the Ni was from NiFe2O4 electrode material name; As/Pb from selectivity tests. Not a heavy metals paper.

4. **FM_467049** — manifest text-mined metals: `As;Sb`. Actual metals measured: Cu, Fe, Mn, iodine only. No arsenic or antimony in the study. False positive from AAS method text or reagent mentions.

---

## 6. Missing Files — System Note

38 of 50 papers in this manifest sub-batch are absent from `raw/markdown/`. All missing handles fall in the FM_10074625 through FM_10305879 range. These are predominantly labeled in the manifest as RSC Advances 2021-2022 sensor/detection papers. The `raw/manifest/triage-manifest.csv` confirms these handles exist in the corpus list (23,260 rows total), so the files were known to the triage pipeline but are not present in the current `raw/markdown/` deployment.

Possible causes: (a) not yet converted by the Marker pipeline; (b) in a staging or overflow folder (the untracked "raw 2/" directory in the working tree contains PDFs but no FM_ markdown subfolders, suggesting it is a pending-conversion queue); (c) the files were assigned FM handles in the manifest during the triage scan of PDFs but the Marker conversion jobs for this range have not completed.

Recommended action: re-run Marker conversion on the FM_100xxxxx range PDFs and merge into `raw/markdown/`. Then re-queue these 38 handles. The manifest metadata for this range suggests potential food occurrence papers (fish/seafood, vegetable, meat, fruit matrices) that warrant attention.

---

## 7. New Page Proposals

None proposed this batch. All processed papers are analytical method papers without food concentration data, so no new ingredient or product pages are triggered.
