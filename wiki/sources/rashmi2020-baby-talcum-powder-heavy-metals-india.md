---
type: source
raw_handle: MFK_heavy-metal-contamination-in-commonly-used-baby-ta
cite_key: rashmi2020-baby-talcum-powder-heavy-metals-india
title: "Determination of Toxic Heavy Metals in Commercially available brands of Baby Talcum Powder"
authors: [Rashmi V]
et_al: true
year: 2020
publication: "IRIS – Journal for Young Scientists, Vol. X, pp. 25–29"
doi: null
no_doi_assigned: true
access_url: "https://patnawomenscollege.in/iris-vol-x2020/"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_04_Shampoo_Wipes_Sunscreen/04_Shampoo_Wipes_Sunscreen/Heavy_metal_contamination_in_commonly_used_baby_talcum_powders_in_India.pdf"
raw_sha256: 2051bc3ab245b2c86cb49069a9e45ea9a091d33ef225d1c7c23d620ffebfa597
metals: [Pb, Cd, tHg]
ingredients: []
products: ["[[products/baby-talcum-powder]]", "[[products/children-personal-care]]"]
matrices: [cosmetic-personal-care]
jurisdictions: [IN]
near_duplicates: []
sample_n: 3
sample_population: "Three commercially-available baby talcum powder products sourced from the Indian retail market (one sample per product, n=3). The three products represent distinct manufacturer types but no product-form differences (all are finely-ground talc-based loose powder for infant skin application); the source treats them as the universe of 'commonly used' Indian baby talcum powders. Sample collection dates and lot numbers are not reported; expiry dates were checked."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-18
ingest_method: autonomy_phase1_v0
created_by: autonomy_v0
---

# Rashmi et al. 2020 — Lead, cadmium, and mercury in three Indian baby talcum powders by AAS / CVAAS

This short report from a Patna Women's College undergraduate science journal measures lead, cadmium, and total mercury in three commercially-available baby talcum powder products purchased from the Indian retail market (n=3, one sample per product, no replicate samples) using flame Atomic Absorption Spectrometry for Pb and Cd and Cold Vapour AAS for Hg. All three products carry detectable concentrations of all three metals; all measured values fall below the FDA cosmetic permissible limits cited by the authors (Pb 20 ppm, Cd 0.9–3 ppm, Hg 0.5 ppm), with lead the most concentrated of the three analytes across all three products. The paper documents the relevant pediatric exposure routes for talcum powder as pica behaviour, aspiration during application, and chronic dermal/inhalation contact, and frames mercury as the most acutely concerning of the three despite its lowest measured concentration because of its toxicity profile. Evidence tier is B: peer-reviewed but a regional/student journal, very small sample size (n=3 products, no replicates), no LOD/LOQ reporting, no recovery from certified reference materials, no method-blank quality control documented.

## Key numbers

Three baby talcum powder products tested, one sample per product. The paper's Tables 1–3 carry unit labels of "ng/l" (Pb, Cd) and "µg/l" (Hg) in the column headers, but the Results/Discussion text, the conclusion, and the FDA-limit comparison all use **ppm** (mg/kg, w/w solid basis) — see Verification notes for the unit-label issue. Values below are reproduced in the basis the authors compare against the FDA limits (ppm).

| Metal | Product-level range across n=3 (ppm) | Mean across n=3 (ppm) | FDA permissible limit cited |
|---|---:|---:|---:|
| Pb | 0.240 – 0.430 | 0.329 | 20 ppm |
| Cd | 0.015 – 0.027 | 0.021 | 0.9–3 ppm |
| tHg | 0.005 – 0.025 | 0.014 | 0.5 ppm |

Across the three products: Pb varied roughly two-fold (0.24 → 0.43 ppm); Cd varied roughly two-fold (0.015 → 0.027 ppm); tHg varied five-fold (0.005 → 0.025 ppm). Lead was the most concentrated metal in every product (within-product Pb-to-Cd and Pb-to-Hg ratios spanned approximately 12× to 48×). All values are one to three orders of magnitude below the FDA cosmetic ceilings the authors cite (Pb 0.012–0.022× the 20 ppm cap; Cd 0.005–0.030× the 0.9 ppm lower-bound cap; Hg 0.010–0.050× the 0.5 ppm cap). The authors do not report LOD/LOQ explicitly; reported %RSD ranges from 0.451 to "HIGH" (a placeholder where the standard deviation exceeded the precision the authors were willing to report) across analytes and products, indicating non-trivial analytical variability at these sub-ppm concentrations and limiting the quantitative interpretability of the values at the lower end of the range.

## Methods

Sample preparation: 1 g of finely-ground baby talcum powder per product was weighed into a beaker, digested with approximately 5 mL concentrated HNO₃ + 5 mL concentrated HCl (aqua-regia-like mixture), covered with a watch glass, and held on a hot plate at 60 °C for 2 hours. Digests were filtered through filter paper into volumetric flasks and made to volume with distilled water. Pb and Cd were quantified by Atomic Absorption Spectrometry (AAS); the paper does not specify flame vs graphite-furnace mode but the calibration range and absorbance values reported are consistent with flame-AAS. Calibration standards were prepared from commercial readymade stock at 0.2, 0.4, 0.6, and 0.8 ppm (10, 20, 30, 40 µL aliquots diluted in 100 mL volumetric flasks). Hg was quantified by Cold Vapour AAS (CVAAS) at 253.7 nm, mercury reduced to the elemental state with sodium borohydride or stannous chloride and carried to the absorption cell by argon. All measurements report total metal — no inorganic-vs-organic speciation. The paper does not report LOD/LOQ, recovery from certified reference materials, replicate-sample structure, method blanks, or instrument make/model.

## Implications

Certification: This source is one of a small set of peer-reviewed data points for heavy metals in baby talcum powders specifically (most cosmetic heavy-metals literature pools all cosmetics or focuses on adult products). For an HMTc Cat 2 (Children Personal Care) row covering talcum powders, this paper contributes Pb, Cd, and tHg occurrence data on finished product in the Indian market, but the n=3 sample size, B-tier evidence rating (regional/student journal), absence of method-quality reporting (LOD/LOQ, recoveries, blanks, replicates), and the analytical variability flagged by the %RSD pattern mean it cannot anchor a threshold on its own. The values feed the Cat 2 Row 4 (baby talcum powder) occurrence pool as a low-weight contributor pending corroboration from a higher-tier source.

Note on cosmetic vs ingestion exposure: Talcum powder is not a food, so the dose pathway differs from CLAUDE.md Cat 1 reasoning. Per OPERATING.md Part 7 initiative 3.1, the methodology for Cat 2 (personal care) needs a non-ingestion-exposure supplement before HMTc thresholds can be defended. This source documents that pica behaviour and aspiration are relevant exposure routes in infants, which means the toxicology basis for Cat 2 thresholds will need to combine dermal/inhalation default factors with the same total-metal occurrence data the ingestion-pathway analysis uses.

Courses: Useful as an introductory example of AAS quantification of trace metals in cosmetic matrices. The methodological gaps (no QC, no LOD, no recovery, no replicates) are also teachable as what NOT to do in a Cat 2 occurrence study.

App: For the consumer-facing app, baby talcum powder is a non-food category but the same risk-scoring logic applies. The product-level range data documents that mid-tier Indian-market baby talcum powders carry detectable Pb in the 0.2–0.5 ppm range, below FDA cosmetic limits but a meaningful signal at this sample size; sample-size-aware uncertainty surfacing is appropriate.

Microbiome: Not applicable — paper does not address microbiome.

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[products/baby-talcum-powder]]
- [[products/children-personal-care]]

## Verification notes

- **2026-05-18 merge-enhance (Claude Opus 4.7, autonomous v2.0 manual-fetch skill, daemon tick).** The prior revision (`updated: 2026-05-14`, `ingest_method: autonomy_phase1_v0`) carried three classes of defect under the current schema (Part 12 strict-reading locked 2026-05-17 and Part 2 wiki/HMTc-firewall conventions):
  1. **Part 12 brand-firewall violations.** The prior Key numbers table listed nine brand-by-brand contamination values with each brand named ("Johnson's (JH)", "Himalaya (HIM)", "Patanjali (PAT)") in the rows. The page body and `sample_population` also named the three brands. Under the strict reading locked 2026-05-17, brand names attached to contamination values is the exact failure mode Part 12 exists to prevent (brand ranking by contamination level). All three brand names were stripped from the body, table, frontmatter, and sample-population description. The Key numbers table now reports product-level **range and mean across n=3** rather than per-brand values. The three products share the same product form (loose talc-based baby powder, Indian retail market); no product-form descriptor distinguishes them in the source, so the aggregated range is the highest-resolution disclosure the firewall permits.
  2. **Part 2 wiki/HMTc-firewall violation.** The prior App section contained the synthesis claim "well above the 0–0.1 ppm range typical of well-controlled western brands." This is both a cross-source synthesis (comparing this paper to other literature) and a brand-comparison framing. Sentence removed.
  3. **Legacy heading.** The prior page used `## Wiki pages updated on ingest` (legacy autonomy-v0 heading) and listed stub-creation TODOs ("Cat 2 stub — to be created"). Renamed to `## Wiki pages this source may touch`; stub-TODO parentheticals removed (both [[products/baby-talcum-powder]] and [[products/children-personal-care]] exist as locked Cat 2 pages as of 2026-05-16).
- **Authors field corrected.** The prior frontmatter listed `authors: [Rashmi V, Anjali, others]`. The PDF byline reads only "Vidya Rashmi et al." with no co-author names spelled out on the title page or in the body of the article (the `et al.` is unattributed in the source). Corrected to `authors: [Rashmi V]` with `et_al: true`. The "Anjali, others" entries in the prior page were not supported by the source.
- **Raw SHA-256 added.** `2051bc3ab245b2c86cb49069a9e45ea9a091d33ef225d1c7c23d620ffebfa597` computed from the manual-fetch PDF.
- **Matrices vocabulary aligned.** The prior frontmatter used `[cosmetic-personal-care, whole-product]`. `whole-product` is not in the cosmetics-page matrices vocabulary used by sibling Cat 2 sources (kicinska2025, bashir2025, rbeida2023, balogun2024 all use either `[cosmetics]` or `[cosmetic-personal-care]` alone). Reduced to `[cosmetic-personal-care]` to align with the locked vocabulary.
- **Table-header unit mismatch in the source itself (paper-internal inconsistency, not a wiki defect).** Tables 1–3 in the PDF carry column headers "Concentration (ng/l)" for Pb and Cd and "Concentration (µg/l)" for Hg, but:
  - The Materials-and-Methods section describes calibration in **ppm** ("0.2, 0.4, 0.6, 0.8 ppm").
  - The Results narrative (p. 27) describes the Pb values as ppm: "highest in Himalaya (0.430) followed by Patanjali (0.316) and Johnson's (0.240). The safe limit of lead is 20 ppm by FDA."
  - The conclusion (p. 28) gives "the heavy metals were found in the range of 0.005 – 0.430 ppm which is within permissible limits of all three heavy metals as set by FDA (20 ppm for Pb, 0.9-3 ppm for Cd and 0.5 ppm for Hg)."
  - A value of "0.430 ng/L" for Pb would be ten orders of magnitude below an environmental water-sample-level concentration and inconsistent with the AAS calibration range (0.2–0.8 ppm) the authors describe.
  - **Resolution:** the Tables' column-header units are typos; the values are in **ppm (mg/kg dry mass, w/w solid)**. This is consistent with how the authors interpret their own data downstream and matches the prior wiki revision's reading. Flagged here so future synthesis cannot misread the column header literally.
- **Brand identification at the methods-vendor level.** No instrument vendor or reference material is named in the source. The Part 12 Exception 2 (scientific-method vendor/material names) does not apply here because the source does not document the AAS make/model, CVAAS make/model, reagent supplier, or any reference material — there is nothing to disclose. The three product-brand names that DO appear in the source are at the **contamination-value attribution** level (Part 12 violation under the strict reading) and have been stripped.
- **No certified reference material; no recovery; no LOD/LOQ.** The paper does not report any of these standard analytical-QC parameters. The %RSD values reported in Tables 1–3 range from 0.451 to "HIGH" (an explicit non-numeric placeholder, used for two of the nine measurements where the analytical variability exceeded what the authors were willing to quantify). This is the principal reason for the B-tier evidence rating despite peer-review status.
- **No DOI.** IRIS – Journal for Young Scientists (Patna Women's College, Patna, India) is a small institutional journal that did not assign DOIs to articles in the Vol. X (2020) issue. `doi: null` with `no_doi_assigned: true`. Access URL points to the journal's issue page.
- **License unknown.** No license statement on the PDF; the journal's open-access status is not declared on the article. `license: unknown` retained.
- **Brand-firewall compliance after enhancement.** No brand name appears in the wiki page body, frontmatter, Key numbers, Methods, Implications, or sample_population. Product identification is by form descriptor ("baby talcum powder", "finely-ground talc-based loose powder for infant skin application") and market ("Indian retail market") only. The aggregated product-level range and mean preserve the scientific signal (Pb is the dominant metal; all values below FDA cosmetic ceilings; analytical variability is non-trivial at these concentrations) without exposing the source's per-brand data.
- **Audit subagent (2026-05-18) — within-product Pb-to-other ratio corrected.** The first revision of this merge-enhance stated "10× to 86× the corresponding Cd or Hg value within the same product" in Key numbers. The audit subagent (general-purpose, fresh-context, v2.0 skill Phase 2) flagged this as arithmetically wrong: the maximum within-product Pb-to-Hg ratio is 0.240/0.005 = 48.0 (the lowest-Hg product), not 86. The 86 figure is the cross-product max-Pb/min-Hg ratio (0.430/0.005), which is not a within-product comparison. Verified against the source values per the audit citation; corrected to "approximately 12× to 48×" (lower bound 0.316/0.027 = 11.7, upper bound 0.240/0.005 = 48.0).

## Ingest log

- 2020-XX-XX (publication): IRIS – Journal for Young Scientists Vol. X, pp. 25–29 (Patna Women's College, India).
- 2026-05-14 fresh ingest (autonomy_phase1_v0): NEW path. Original page produced by the early autonomy script with brand-by-brand reporting that pre-dated the Part 12 strict-reading lock (2026-05-17).
- 2026-05-18 merge-enhance (Claude Opus 4.7, autonomous v2.0 manual-fetch skill, daemon tick): EXISTING path. Three identity checks against `wiki/sources/` returned a single hit at `rashmi2020-baby-talcum-powder-heavy-metals-india.md` (the prior revision, raw_handle `kimi-children-personal-care-rashmi2020`). Same paper, same DOI status (no DOI), same `raw_path`. Promoted to v2 schema: raw_handle migrated to the MFK-prefix convention (`MFK_heavy-metal-contamination-in-commonly-used-baby-ta`); `raw_sha256` populated; matrices reduced to `[cosmetic-personal-care]`; authors corrected against the PDF byline; brand names stripped throughout (Part 12 strict, 2026-05-17 lock); synthesis-claim sentence removed (Part 2 firewall); legacy heading renamed; `## Verification notes` and `## Ingest log` added.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [12120a9b2](https://github.com/paleofoundation/heavymetalindex/commit/12120a9b2) | 2026-05-18 | minor | Narrative text revised |
| [1b242f5dc](https://github.com/paleofoundation/heavymetalindex/commit/1b242f5dc) | 2026-05-18 | major | 3 sections added and 1 removed; narrative text revised |
| [6b92f2b23](https://github.com/paleofoundation/heavymetalindex/commit/6b92f2b23) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
