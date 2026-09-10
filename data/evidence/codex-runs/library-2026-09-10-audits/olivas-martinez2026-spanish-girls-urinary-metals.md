# Audit report — olivas-martinez2026-spanish-girls-urinary-metals

Source: RPIS_1; DOI 10.1007/s00431-026-06919-1; preserved 13-page PDF at the source page's `raw_path`.
Audited: 2026-09-10

## Check 1 — Numerical fidelity

✅ clean

- Independently extracted the preserved PDF and visually inspected PDF pages 4–8, including Tables 1–4 and Figures 1–2. PDF size 1,031,210 bytes and SHA-256 `3d2a58257d6b952bd3877dbc6982687a831105072d7ece250d8d7fa939f33280` match the page and sidecar.
- ✅ Population: 310 total; 182 cases; 128 controls; diagnoses 101 precocious puberty, 74 premature thelarche, 6 early pubarche and 1 isolated vaginal bleeding. Recruitment 2018–2022 in six hospitals; ages 4–8 years. These match PDF pp. 1–2 and Table 1, p. 4.
- ✅ Age means/SD: cases 7.44/0.78 years; controls 6.24/1.28 years. Table 1, p. 4.
- ✅ Measurement samples: metals 180 cases/127 controls; phenols 181 cases/126 controls. Specific-gravity medians 1.024/1.023. Table 2, p. 5. The page does not label the chemical medians definitively adjusted or unadjusted when the table itself does not do so.
- ✅ Every metal value below matches Table 2, p. 5. Order is case median, case detection %, control median, control detection %, reported p. Concentrations retain ng/mL.

| Analyte | Verified values | Status |
| --- | --- | --- |
| As | 22.23; 100; 27.66; 100; 0.72 | ✅ |
| Cd | 0.05; 76.1; 0.04; 80.3; 0.38 | ✅ |
| Cu | 7.15; 99.4; 6.02; 98.4; 0.03 | ✅ |
| Hg | 0.32; 91.1; 0.35; 94.5; 0.41 | ✅ |
| Mn | <LOD (0.07); 38.3; <LOD (0.07); 43.3; 0.38 | ✅ |
| Ni | 2.02; 96.7; 2.02; 96.1; 0.42 | ✅ |
| Pb | 0.26; 75.6; 0.26; 82.7; 0.13 | ✅ |
| Zn | 509.99; 100; 443.85; 100; 0.006 | ✅ |

- ✅ The >85%/<85% test distinction agrees with the Table 2 footnote. The page correctly identifies Cd, Mn and Pb p-values as detection-category comparisons, and does not replace the censored Mn median with zero.
- ✅ Every unadjusted/adjusted OR and 95% CI below matches Table 3, p. 6; all are attributed to a two-fold concentration increase as stated on p. 3. All-diagnoses metals use 180/127 cases/controls, premature-thelarche metals 74/127, and precocious-puberty metals 99/127.

| Outcome | Analyte | Verified unadjusted OR (95% CI) | Verified adjusted OR (95% CI) | Status |
| --- | --- | --- | --- | --- |
| All diagnoses | As | 0.99 (0.87–1.12) | 1.07 (0.91–1.25) | ✅ |
| All diagnoses | Cu | 1.23 (0.99–1.53) | 1.13 (0.84–1.50) | ✅ |
| All diagnoses | Hg | 0.95 (0.79–1.13) | 0.99 (0.79–1.25) | ✅ |
| All diagnoses | Ni | 0.91 (0.72–1.16) | 0.84 (0.62–1.13) | ✅ |
| All diagnoses | Zn | 1.71 (1.20–2.44) | 1.74 (1.10–2.76) | ✅ |
| Premature thelarche | As | 1.06 (0.91–1.24) | 1.06 (0.87–1.28) | ✅ |
| Premature thelarche | Cu | 1.11 (0.85–1.44) | 1.02 (0.74–1.41) | ✅ |
| Premature thelarche | Hg | 0.93 (0.74–1.18) | 0.97 (0.68–1.21) | ✅ |
| Premature thelarche | Ni | 0.97 (0.72–1.30) | 0.83 (0.57–1.22) | ✅ |
| Premature thelarche | Zn | 1.38 (0.90–2.11) | 1.39 (0.81–2.38) | ✅ |
| Precocious puberty | As | 0.92 (0.79–1.07) | 1.08 (0.87–1.34) | ✅ |
| Precocious puberty | Cu | 1.47 (1.09–1.97) | 1.33 (0.86–2.07) | ✅ |
| Precocious puberty | Hg | 0.94 (0.76–1.15) | 1.13 (0.83–1.53) | ✅ |
| Precocious puberty | Ni | 0.92 (0.71–1.20) | 0.85 (0.59–1.23) | ✅ |
| Precocious puberty | Zn | 1.99 (1.30–3.04) | 2.26 (1.22–4.16) | ✅ |

- ✅ Zinc third versus first tertile OR 2.28 (95% CI 1.10–4.73): exact p. 6 Results text, referring to Figure 1A on p. 7. Other categorical point/CI estimates are not numerically labeled in Figure 1; the page correctly refrains from inventing them.
- ✅ BPA medians 1.78/0.60 ng/mL match Table 2, p. 5. Adjusted ORs/95% CIs 1.44 (1.19–1.73), 1.29 (1.05–1.58) and 1.69 (1.26–2.27) respectively for all diagnoses, premature thelarche and precocious puberty match Table 3, p. 6.
- ✅ Mixture all diagnoses: 179/125 cases/controls; OR 1.20 (95% CI 1.04–1.38); p=0.01. Premature thelarche: 74/125; 1.23 (0.86–1.75); p=0.25. Precocious puberty: 98/125; 1.28 (1.03–1.59); p=0.02. All match Table 4, p. 7. The one-quartile increment is supported by Methods p. 3 and Results p. 6.
- ✅ BPA mixture weights 46% for all diagnoses and 52% for precocious puberty appear explicitly in p. 6 Results text; Figure 2, p. 8, supports their positive-direction interpretation. The wiki does not misstate these as attributable disease fractions.
- ✅ Verified the structured sidecar's 48 Table 2 summary records, 72 Table 3 effect estimates, three Table 4 mixture estimates, one text-reported zinc tertile estimate and two BPA weights against the same source tables/text. There are 126 distinct record IDs; all carry `product_occurrence_eligible: false`. Censored summaries use null with an explicit LOD, not zero. Hospital counts in the sidecar agree with Table 1, including the documented absence of HUVA controls.
- ✅ The page correctly preserves source inconsistencies: Table 2 As medians 22.23/27.66 versus narrative 22.20/27.60, and total-phenol p=0.24 versus a contradictory significance statement on p. 4. Table 1's BMI anomalies are disclosed, not silently repaired.

## Check 2 — Slug vocabulary

✅ clean

- All eight destination wikilinks occur in `docs/gpt-collaboration/taxonomy-snapshot.md` and resolve to existing pages: `metals/arsenic`, `metals/cadmium`, `metals/copper`, `metals/mercury`, `metals/manganese`, `metals/nickel`, `metals/lead`, `metals/zinc`.
- `matrices: [urine]` uses a bare controlled term explicitly listed in `docs/gpt-collaboration/system-prompt.md` line 167. `jurisdictions: [ES]` is a country code for the Spanish population, not a regulation slug.
- `metals: [tAs, Cd, Cu, tHg, Mn, Ni, Pb, Zn]` uses analyte abbreviations as required. Empty product/ingredient arrays accurately reflect the measured human urine matrix. No malformed frontmatter wikilinks or missing-page proposals.

## Check 3 — Speciation and methods

✅ clean

- The paper's As/Hg measurements are elemental ICP-MS results without reported speciation. Frontmatter uses `tAs`/`tHg`; the tables say unspeciated; no iAs or MeHg is inferred. No chromium measurement is claimed. Methods p. 3 and Table 2, p. 5.
- Single first-morning void urine, polypropylene containers, −80 °C storage, University of Granada analysis, Agilent 8900 triple-quadrupole ICP-MS, dispersive liquid–liquid microextraction/UHPLC-MS/MS for phenols and handheld-refractometer specific gravity all agree with Methods p. 3.
- LOD/√2 substitution; >85% continuous/tertile models; 50–85% three-category models; <50% detection models; age/hospital/maternal-schooling adjustment; eight mixture chemicals; quartiles and 1,000 bootstraps; BMI and hospital-exclusion sensitivity analyses all agree with Methods p. 3.
- The main PDF delegates preparation and quality control to a supplement. The page does not invent recoveries, reference materials, complete LOD/LOQ values or the specific-gravity formula. Phenol-family sum unit ambiguity is explicitly preserved.
- Limitations involving temporality, one urine sample, missing HUVA controls, residual confounding, multiple comparisons and urinary Pb/Hg chronic-exposure interpretation are faithful to pp. 8–9. The reported sensitivity robustness is attributed to the authors, with absent supplementary estimates disclosed.

## Check 4 — Part 12 brand firewall

✅ clean

- No sampled-product brands, brand-linked contamination values or rankings appear.
- “Agilent 8900” names the measurement instrument and is permitted by the audit prompt's scientific-method exception; it matches Methods p. 3.

## Check 5 — Part 2 wiki/HMTc firewall

✅ clean

- The page reports the individual-metal and chemical-mixture findings without proposing certification limits, clinical thresholds, consumer advice or cross-paper consensus.
- “The values cannot supply product contamination concentrations, ingredient contamination profiles, product-specific exposure attribution or clinical risk thresholds” preserves the human-biomonitoring boundary.
- “These observations do not demonstrate a protective effect of cadmium or copper” accurately bounds the observational categorical associations. BPA's dominant positive mixture contribution is not attributed to metals alone.
- Legacy fish/sunscreen routing is explicitly described as unsupported; the corrected frontmatter and all structured records exclude product-occurrence use. Historical generated update records were not treated as claims made by the current source narrative.

## Verdict

PROMOTE

## Recommended next action

Keep the corrected source and its 126-record sidecar; no revision is required by these five checks. Preserve the disclosed supplement/data gaps and complete the parent ingest's routing, checks and scoped commit before declaring the overall ingest complete.

Audit identity: wiki source SHA-256 `2ace5f22a3f41ac9a56d5ea149e93497cf19476f973111b67ee8593835a82ee6`; structured sidecar SHA-256 `7ede124ae724df905f8c26f7eddd499030bc1d517986da102432979294daaac1`. Read-only audit; no repository edits or commit.
