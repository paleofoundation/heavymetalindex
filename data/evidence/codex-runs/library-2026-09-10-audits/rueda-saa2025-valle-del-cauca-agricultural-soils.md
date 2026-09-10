# Audit report — rueda-saa2025-valle-del-cauca-agricultural-soils

Source: RPIS_2; DOI 10.22267/rcia.20254202.259
Audited: 2026-09-10

## Check 1 — Numerical fidelity
✅ clean

- Verified against the primary PDF's printed Tables 1–3 (pp. 4, 6–9) and Methods (p. 3), with visual inspection of all table pages plus an independent comparison of every CSV cell. The PDF SHA-256 matches `f0907939e04c8f3c6f0af3433cbb71f85b4d7353a8ca8295c385eae02d2b04d3`.
- Sample-frame values: 489 sites, 13 watersheds, 44% sugarcane and 56% other crops match pp. 1 and 3. The 2017–2019 range is correctly identified as laboratory analysis years; collection dates and annual concentration splits are not invented.
- Table 1 (p. 4), each following vector is **mean / median / SD / minimum / maximum**, in source-native mg/kg; all values match: tAs **0.03 / 0.00 / 0.28 / 0.00 / 2.92**; tHg **0.01 / 0.00 / 0.14 / 0.00 / 3.01**; Cd **0.16 / 0.13 / 0.18 / 0.00 / 2.77**; Cr **58.56 / 46.30 / 47.62 / 0.00 / 240.00**; Ni **41.62 / 30.80 / 38.8 / 0.001 / 226.00**; Pb **4.54 / 2.65 / 7.47 / 0.00 / 90.00**; Co **17.17 / 14.55 / 10.89 / 0.00 / 72.60**.
- Table 2 (pp. 6–7), each following vector is **tAs / tHg / Cd / Cr / Ni / Pb / Co mean**, in mg/kg; sample counts and every mean match:
- Arroyohondo, **n = 7**: **0.00* / 0.00 / 0.01 / 50.31 / 44.74 / 5.49 / 22.47**.
- Guabas, **n = 22**: **0.00 / 0.00 / 0.06 / 113.45 / 43.14 / 6.07 / 28.86**.
- Guachal, **n = 159**: **0.00 / 0.00 / 0.16 / 26.49 / 21.65 / 2.14 / 9.54**.
- Guadalajara, **n = 36**: **0.00 / 0.00 / 0.11 / 40.69 / 25.79 / 3.80 / 14.01**.
- Jamundí, **n = 28**: **0.00 / 0.00 / 0.05 / 31.41 / 14.49 / 7.82 / 19.36**.
- Meléndez, **n = 9**: **0.0 / 0.0 / 0.02 / 37.82 / 24.88 / 0.93 / 10.20**.
- Pescador, **n = 41**: **0.39 / 0.09 / 0.11 / 98.49 / 111.40 / 3.61 / 33.81**.
- RUT, **n = 53**: **0.00 / 0.00 / 0.22 / 80.00 / 46.08 / 7.37 / 18.39**.
- San Pedro, **n = 41**: **0.00 / 0.00 / 0.25 / 48.18 / 34.51 / 7.59 / 15.18**.
- Sonso, **n = 25**: **0.00 / 0.00 / 0.13 / 76.88 / 40.72 / 8.74 / 27.52**.
- Tuluá, **n = 61**: **0.00 / 0.00 / 0.29 / 103.44 / 70.98 / 2.76 / 17.79**.
- Yumbo, **n = 5**: **0.0 / 0.0 / 0.02 / 55.67 / 46.53 / 16.93 / 25.44**.
- Zona Industrial, **n = 2**: **0.00 / 0.00 / 0.12 / 64.50 / 42.50 / 11.50 / 32.00**.
- Narrative examples match Table 2: Pescador Ni median **121.00**, minimum **23.00**, maximum **226.00** mg/kg; San Pedro Cd median **0.19**, minimum **0.00**, maximum **2.77** mg/kg. RUT is correctly expanded as Roldanillo–Unión–Toro (p. 7 footnote).
- CSV completeness and fidelity: **518 unique rows, 518 exact numerical/display matches, zero missing/duplicate/mismatched cells**. Counts are **63 overall statistics** (7 analytes × 9 statistics), **364 watershed statistics** (13 watersheds × 7 analytes × 4 statistics), **84 soil-order statistics** (3 orders × 7 analytes × 4 statistics), and **7 detection limits**. Every watershed has **28 CSV rows**. Their source sample counts sum to **489**. PDF page and subgroup sample-count metadata also match every row.
- CSV statistic units are correct: C.V. is **%**, kurtosis and asymmetry are **dimensionless**, and concentration/SD/LOD statistics use **mg/kg**. The Cd mode is preserved as **1×10−6** (numeric 0.000001); source-native decimal precision and the three printed asterisks remain in `original_display`.
- Censoring caveats are adequate: Tables 1–3 define `*` as below detection; the page and CSV retain source zero/sub-LOD entries without treating them as proven absence or inventing a substitution rule. Moisture basis remains explicitly unreported; no wet/dry/food-basis conversion occurs.
- Source inconsistencies are accurately flagged, not transcription defects: Methods (p. 3) gives mollisol **271**, vertisol **128**, inceptisol **90**, whereas Table 3 (pp. 8–9) labels mollisol **271**, inceptisol **128**, vertisol **90**. Table 3 prints all Hg means as **0.00** despite overall Hg mean **0.01** and inceptisol maximum **3.01**. All 84 soil-order CSV rows carry these caveats; no soil-order correction is invented.

## Check 2 — Slug vocabulary
✅ clean

- All seven metal destinations are present in the taxonomy snapshot and on disk: `metals/arsenic`, `metals/mercury`, `metals/cadmium`, `metals/chromium`, `metals/nickel`, `metals/lead`, `metals/cobalt`.
- `supply-chain/soil-to-plant-transfer` exists on disk and is explicitly documented in the current conventions/page templates as the agricultural-soil destination. The May 2026 snapshot enumerates only ingredients/products/metals/regulations; that omission does not make this existing supply-chain slug invented.
- `matrices: [soil]` follows the currently documented environmental-matrix vocabulary; `jurisdictions: [CO]` correctly identifies Colombia. Metals use bare analyte abbreviations; empty product/ingredient arrays and the absence of page-reference frontmatter entries introduce no malformed wikilinks.

## Check 3 — Speciation and methods
✅ clean

- `tAs`, `tHg`, and `Cr` preserve the paper's total-metal scope (abstract, p. 1); no iAs, MeHg, or Cr(VI) result is substituted.
- Simple random sampling and composite/disturbed homogenized samples match Methods (p. 3). Approximate sample geometry is accurately retained as **3 cm thickness, 20 cm width, 30 cm depth**.
- HCl–HNO3 wet digestion and graphite-furnace AAS for **Cd, Ni, Pb, Co** match Methods (p. 3). The page correctly notes that Cr has a stated detection limit but is omitted from the analytical-method enumeration. It does not invent a Cr instrument assignment.
- Hydride-generation AAS for **As and Hg** matches the source's wording (p. 3), even if the Hg description warrants methodological caution. No cold-vapor method or speciation procedure is silently substituted.
- All detection limits match p. 3: **Cd 0.02; Cr 1; Ni 1; Pb 0.75; Co 0.10; As 0.10; Hg 0.10 mg/kg**.
- The absence of an explicit moisture basis and complete recovery/reference-material QC record is accurately disclosed. The paper's literature background ranges are not presented as primary legal instruments.

## Check 4 — Part 12 brand firewall
✅ clean

- No sampled-product brands, brand-specific contamination values, rankings, or certified-brand mentions appear. The source describes agricultural soils, not branded products.

## Check 5 — Part 2 wiki/HMTc firewall
✅ clean

- No certification limit proposal, policy justification, consumer recommendation, or cross-source consensus claim appears.
- The EF-4 statement is expressly limited to **product-occurrence use**. Geographic soil occurrence remains useful upstream evidence; crop concentrations, transfer factors, species concentrations, temporal trends, and source attribution are not inferred.
- The source's claims of environmental safety/permissible levels are explicitly not adopted as independently verified health or legal conclusions. No soil concentration is promoted to a food concentration.

## Verdict
PROMOTE

## Recommended next action
Retain the source and CSV as verified agricultural-soil evidence, carrying the existing censoring and soil-order discrepancies into any downstream use. No content correction is required by this five-check audit; ingest completion still depends on the parent workflow's routing, generated outputs, checks, and scoped commit.
