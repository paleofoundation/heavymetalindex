---
type: "source"
cite_key: "ghimire2026-jacaranda-carbon-chromium-removal"
title: "MOF-Derived Carbon Composites from Jacaranda Seed Pods for Selective Removal of Hexavalent Chromium [Cr(VI)]"
authors: ["Bibek Ghimire"]
year: 2026
publication: "MSc thesis, Materials Science and Engineering, Tribhuvan University, Institute of Engineering, Pulchowk Campus; May 2026"
doi: null
access_url: "https://elibrary.tucl.edu.np/items/b6674a17-91fb-46a3-a7e4-071af8bfdee8"
retrieval_date: "2026-09-11"
source_type: "thesis"
evidence_tier: "B"
license: "Copyright retained; freely available for inspection; extensive copying and financial-gain use restricted (PDF physical p2). No Creative Commons license stated."
raw_handle: "RPCRVI_1"
raw_path: "raw/Research Pull Chromium Deep Dive/Infant formula powder/Hexavalent chromium reduction Infant formula powder/mof-derived-carbon-composites-from-jacaranda-seed-pods-for-selective-removal-of-hexavalent.pdf"
raw_sha256: "e9abe48b8b9e7e93ed8d6b6ebbf26b3bba86c1ebae13082e36d8d747efb71ef4"
metals: ["Cr-VI", "Co"]
ingredients: []
products: []
matrices: ["synthetic-aqueous-solution", "engineered-carbon-adsorbent"]
jurisdictions: ["NP"]
evidence_fitness: {"classification": "EF-3 qualified laboratory mitigation evidence; academic thesis, not peer-reviewed journal", "supports": ["Source-reported apparentCrVI removal in one synthetic-water laboratory series.", "Material characterization and explicitly qualified source-fitted kinetic outputs."], "does_not_support": ["Food/formula occurrence or treatment efficacy.", "Directly measuredCrIII production,totalCr removal,selectivity,chemisorption proof or wastewater field effectiveness.", "Live legal maxima, treated-water safety, general optimal operating conditions,or cross-study quantitative ranking."]}
ingest_status: "complete"
sample_population: "Four adsorbent materials tested with synthetic aqueousCrVI; independentreplicateN not reported; nofoodsamples."
audience: ["researcher", "educator"]
sources: 0
updated: "2026-09-11"
data_path: "data/evidence/library-drain/batch-01-extractions.json"
audit_path: "data/evidence/library-drain/batch-01-audit.md"
---

# MOF-Derived Carbon Composites from Jacaranda Seed Pods for Selective Removal of Hexavalent Chromium [Cr(VI)]

Bibek Ghimire’s May 2026 MSc thesis compares raw Jacaranda seed-pod powder with three cobalt-containing carbon composites for removing hexavalent chromium from synthetic aqueous solution. It reports a strong decrease in the Cr(VI) colorimetric signal for the composite prepared at 900 °C. The experiment does not establish how much chromium was adsorbed versus reduced, or whether treated water was safe.

## Key numbers

The thesis reports **97.75% apparent Cr(VI) removal** for JSP-MOF900 after 90 minutes at pH 2 (Table 2, printed p19). The protocol uses 25 mg adsorbent in 50 mL of a solution described as 10 ppm Cr(VI). Figure 11 suggests approximately 50%, 83%, 93% and 98% removal at 90 minutes for pristine powder, JSP-MOF700, JSP-MOF800 and JSP-MOF900 respectively; these are chart readings, not separately reported replicate means.

Source-fitted kinetic parameters are:

| Material | Slope of −ln(C/C₀) versus minutes (min⁻¹) | R² for that fit | R² for t/qₜ fit |
| --- | ---: | ---: | ---: |
| JSP-Pristine | 0.0068 | 0.9667 | 0.70698 |
| JSP-MOF700 | 0.0197 | 0.9585 | 0.2889 |
| JSP-MOF800 | 0.0295 | 0.9471 | 0.4083 |
| JSP-MOF900 | 0.0379 | 0.9073 | 0.99971 |

The EDX table for JSP-MOF900 reports 68.27 wt% carbon, 19.27 wt% oxygen, 12.22 wt% cobalt and 0.48 wt% nitrogen. Those entries sum to 100.24% although the displayed total is 100%; the source values are retained without renormalization.

## Methods (brief)

The author grew ZIF-67 on Jacaranda seed-pod powder using cobalt nitrate and 2-methylimidazole in methanol, then heated the composites under nitrogen at 700, 800 or 900 °C for five hours. Batch contact times were 15, 30, 60 and 90 minutes. After centrifugation, diphenylcarbazide colorimetry at 540 nm measured the remaining Cr(VI) response. Material characterization used FTIR, electron microscopy with EDX, and X-ray diffraction.

## Evidence fitness

This academic thesis provides qualified laboratory treatment and material-characterization evidence. Its decreasing aqueous Cr(VI) signal supports an apparent removal trajectory under the reported conditions. It contains no infant-formula or other food measurements. Cobalt composition describes the engineered adsorbent, not cobalt contamination in treated water.

## Limitations

Independent replicate counts, removal uncertainty, numerical detection limits, cobalt leaching and post-treatment total chromium or Cr(III) measurements are absent. The reported endpoint implies a residual below the lowest plotted calibration standard, so its precision at that concentration is unverified. The title’s selectivity claim was not tested with competing metals. Mechanism claims about reduction and chemisorption exceed what the measurements and regression fits establish.

The morphology discussion ranks the 800 °C material above the 900 °C material, contradicting the removal results. The methods’ first-order equation differs from the concentration transformation used in the results. The source claims parameter optimization and isotherm work but does not supply the corresponding series or adsorption-capacity fit. Secondary regulatory and adsorbent comparisons contain labeling and citation problems and do not establish compliance or a cross-study performance ranking.

## Related evidence

[[metals/chromium-hexavalent]] · [[mitigation/remediation-evidence]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
