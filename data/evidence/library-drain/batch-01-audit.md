# Audit report — khalid2008-islamabad-chromium-electrokinetic-remediation

Source: RPCRVI_2; batch position 2, extracted draft, not a published source page
Audited: 2026-09-11

## Check 1 — Numerical fidelity
✅ Numerical magnitudes and group assignments match all 58 observation records and the draft Key numbers.

- PDF p4 (printed p58), Table 1, IDs 0001–0017: Quartz 53%, Muscovite 9%, Albite 6%, Calcite 12%, Kaolinite 4%, Montmorilonite 14%; liquid limit 31.0%, plastic limit 15.35%, plastic index 15.65; pH 7.91 (source incorrectly prints %), moisture 2.83%, buffering capacity 0.09 mM/g, density 1.14 g/cm³, porosity 54.1%, specific gravity 2.52, organic content 0.22%, conductivity 56.8 µS/cm. All verified. The six mineral fractions sum to 98%; existing extraction correctly preserves that inconsistency.
- PDF p4, Table 2, IDs 0018–0029: Na 1178.94, K 3026.72, Mn 2033.91, Zn 26.73, V 22.70, Ni 8.21, Cr 28.15, Pb 3.15, Cu 1.30, Co 0.76, Fe 170 µg/g; Cd ND, with no numerical detection limit. All verified. ND is correctly retained as null/nondetect, not zero. JSON numeric serialization drops trailing zeros in 31.0, 22.70 and 1.30; preserve reported text if a verbatim table is later exported.
- PDF p5 (printed p59), Table 3, IDs 0030–0037: anolyte pH 1.24→1.59; catholyte pH 0.89→0.64; anolyte conductivity 11.9→30.6 mS/cm; catholyte 115→72.1 mS/cm. All verified, with columns correctly assigned.
- PDF p6 (printed p60), Table 4/equation, IDs 0038–0044: removed 91.3433; remaining 73.6055; recovered sum 164.9488; parent 28.15; added 176.7505; initial sum 204.9005 µg/g; stated removal 44.58%. All verified. The draft accurately identifies incomplete mass accounting; do not repair source values. The reported removal calculation is based on 91.3433/204.9005, while the recovered sum is smaller than the initial sum.
- PDF p6 conclusion, ID 0045: 3.13 mL/h, verified. PDF p5 §3.1, ID 0046: adsorbed Cr of the order of 8 µg/g, verified as approximate.
- PDF p3 §2.4.3, IDs 0047–0051: 15 V, 1.5 V/cm, 24 h, 0.05 M anolyte and 0.5 M catholyte H₂SO₄, verified. Draft 10 cm soil compartment is supported by p2 §2.3.
- PDF p5 §3.3, IDs 0052–0058: stated minimum 14.88 V, maximum variation 0.12 V, drop 0.06 V at about 2.5 h, initial current about 11 mA, 24 mA within 12 h and 25 mA during the remaining 12 h, verified. Figure 2 visually ends around 14.87 V; the discrepancy is already correctly disclosed.

## Check 2 — Slug vocabulary
⚠️ Correct real destination pages; matrix vocabulary needs revision.

- Every explicit route and every draft wikilink resolves to an existing wiki page. Empty food products/ingredients are correct; the containing infant-formula folder does not determine study scope.
- Change frontmatter candidate matrix `experimental-soil` to existing broad `soil`. `electrolyte` is a new term absent from the audit system-prompt vocabulary: retain only with an explicit internal vocabulary-addition disposition explaining the laboratory electrolyte matrix. Do not map this sulfuric-acid electrolyte to the existing oral-electrolyte product mapping.
- Add an explicit contextual `metals/chromium-hexavalent` route or document that the generator supplies it from `Cr-VI`; existing routes list only the total-chromium page. This is a routing-completeness recommendation, not an invented-slug finding. Vanadium is already retained with an explicit unresolved dedicated-metal route; do not drop that observation.

## Check 3 — Speciation and methods
✅ Source methods and limitations are faithfully bounded.

- Table 2 bulk ICP analysis reports Cr without oxidation-state separation; IDs 0024/0041/0043 correctly use total Cr. The paper itself feeds the native 28.15 µg/g into a Table 4 column headed Cr(VI). Existing `Cr-VI (source attribution)` labels and warnings correctly avoid validating this attribution.
- PDF pp3–4 §2.4.4 explicitly describes EPA Method 3050 acid digestion then UV–VIS Cr(VI) analysis, without a demonstrated species-preservation validation. The draft accurately reports this limitation and makes no fabricated analytical-validation claim.
- Laboratory geography, unknown soil wet/dry basis, single-trial design, absent uncertainty/LOD, ambiguous 0.75 g spike wording, and absence of an independent food cohort are correctly recorded.
- Metadata clarification: keep printed 2008 year. Cached Crossref JSON assigns 2020-07-01 to `published-online`/`issued`, whereas `created` and `deposited` are 2025-01-28. Change “deposit-date discrepancy” to “printed issue year versus Crossref online-publication metadata discrepancy”; do not describe 2020 as the actual DOI deposit date. Title/byline/volume/pages and primary PDF link agree; raw PDF SHA-256 matches the record.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brands or brand contamination comparisons in draft.

## Check 5 — Part 2 wiki/HMTc firewall
✅ Environmental occurrence and preliminary remediation remain separate from food occurrence, consumer risk advice, and certification limits.

## Verdict
REVISE

## Recommended next action
Normalize/explicitly document matrix vocabulary and make the Crossref date-field wording precise; ensure a contextual hexavalent-chromium destination. The extracted scientific values and disclosed mass/species limitations do not need replacement. Promotion here means an audit-passed source draft only; the compiled-ingest gate remains outstanding.

# Audit report — saha2022-chromium-sources-remediation-editorial

Source: RPCRVI_4; batch position 4, extracted draft, not a published source page
Audited: 2026-09-11

## Check 1 — Numerical fidelity
⚠️ All 21 observation magnitudes/assignments match the editorial; public Key numbers lack precise source locations and named underlying-study attribution.

- PDF p1 (printed p1779), IDs 0001–0006: lead-anode tin up to 7%; bath 45–60 °C; current density 1.5–3.0 kA/m²; about 35% used chromium discharged in effluent as mixed trivalent/hexavalent chromium. All verified. Preserve “about” for ID 0006 in a qualifier/notes field; the source is approximate, while the record currently gives an unqualified fraction.
- PDF p2 (printed p1780), Pakade paragraph, IDs 0007–0009: pyrolysis at 800 °C; maximum removal 89.7% at pH 3.0. All verified.
- PDF p2, Fall paragraph, IDs 0010–0012: adsorption 91.7 mg/g at 25 °C after 240 min. All verified; correctly identified as adsorption capacity rather than food/water concentration.
- PDF p2, Biswal paragraph, IDs 0013–0015: wastewater 100–300 mg/L chromium; optimum pH 3.5. All verified. Quasi-total removal is correctly not converted to an invented numerical percent.
- PDF p2, Ndiaye paragraph, IDs 0016–0018 and 0020: five fish species; approximate first-campaign species means 11.1 µg/g for Pagellus bellottii and 40.6 µg/g for Lagocephalus laevigatus; source-attributed legal comparator 5.5 µg/g. All faithfully transcribed, including fish species assignment. The five species are not sample N.
- PDF p2, Traoré paragraph, ID 0019: Upper Continental Crust comparator 35 mg/kg total chromium. Verified as comparator, not measured site concentration or law. `geography: CI` refers to the study discussing this global crustal comparator; clarify in notes if geography could be interpreted as where the background value was measured.
- PDF p1, ID 0021: eight articles in the mini-issue, verified. This does not establish eight new independent measurement datasets.
- Exact draft correction: attribute the first Key numbers paragraph to “the editorial’s summary of Pakade et al. (p1780)” and “its summary of Fall et al. (p1780)”; attribute the fish paragraph to “its summary of Ndiaye et al. (p1780)”. This meets current page-template source-location requirements and makes the stated link to named underlying studies real in the public summary.

## Check 2 — Slug vocabulary
⚠️ Existing routes resolve; matrix metadata is an unflagged new term.

- All five explicit routes and wikilinks exist. `secondary-environmental-review` describes evidence type, not a measured physical matrix, and is absent from the supplied controlled vocabulary. Replace with broad physical matrices supported by the editorial (e.g. soil and fish, with clearly secondary/context-only routing) and an explicitly documented water/wastewater matrix addition where needed; keep “secondary editorial” in source type/fitness, not as the sole matrix. Guard fish routes against classification as independent direct occurrence evidence.
- Ensure `metals/chromium-hexavalent` receives contextual routing from the Cr-VI mention; the current explicit route list includes only `metals/chromium`.

## Check 3 — Speciation and methods
✅ Secondary versus primary evidence and legal attribution are appropriately bounded.

- The editorial explicitly calls the fish analyte Cr(VI) and names UV–visible spectrophotometry, but supplies no basis, sample count, extraction chemistry, or species validation. The draft does not claim validation and correctly requires the primary study before food-occurrence reuse. Preserve EF-3, secondary statistic types, and `independent_food_cohort: false`.
- The 5.5 µg/g legal comparator is only a statement in this editorial. The EF-X/unverified-secondary designation and prohibition on regulatory-register adoption are correct. This audit verifies its faithful quotation, not its legal validity; no primary legal instrument was evaluated. No need to publish that numerical legal allegation in the public page.
- Cr versus Cr-VI is correctly distinguished for the 35 mg/kg crustal comparator. For the wastewater range, the paragraph says “chromium” in a Cr(VI) treatment context; retain its secondary/source-attributed nature, never promote the species assignment to validated primary measurement without the Biswal study.
- All three qualitative claims are supported: natural/industrial release (p1779), anthocyanin-rich watermelon-rind reduction (Kassimu, p1780), and pH-related soil transport/crop context (Kwikima, p1780). No quantitative risk inference is introduced.
- Title, byline, 2022 date, journal/pages/DOI, copyright statement and primary PDF hash match. B-tier editorial/context designation is consistent with the stated use.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brand naming or brand contamination comparison.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No threshold proposal, legal adoption, unsupported consumer advice, or cross-source synthesis. The source’s broad health/legal claims are expressly limited.

## Verdict
REVISE

## Recommended next action
Add public underlying-study/page attribution, retain the approximate 35% qualifier, and normalize matrix/context routing before publication. Preserve secondary fish observations and the rejected legal comparator internally; do not manufacture a new occurrence cohort or regulatory-limit row. The supplied editorial can be ingested as editorial context without treating retrieval of every underlying article as a prerequisite to that bounded ingest.

## Audit scope and verification record

Read-only audit of the extraction JSON as supplied; all source PDFs hashed directly at their recorded raw paths. Inspected full extracted PDF text and rendered Khalid Tables 1/2/4 and Figure 2 plus rendered Saha p1780. Applied all five checks from docs/gpt-collaboration/audit-prompt.md, with the current public-page template controlling headings and operational-note placement. No repository files edited, generators run, legal claims verified, ingests performed, or commits made. This report is not a completed-ingest certificate.

## Revision record

2026-09-11: Applied both sets of recommendations in the extraction packet. Awaiting independent recheck; this record does not assert completed ingestion.

## Independent recheck

2026-09-11, audit_bulk_002_004: PROMOTE for both corrected drafts. All five draft-audit checks pass. Numeric findings and limitations remain intact. This verdict does not certify completed ingestion; source publication, evidence routing, generated outputs, checks and scoped bulk commit remain outstanding.

# Audit report — ibikunle2025-functionalized-nanotubes-chromium-removal

Source: RPCRVI_3; batch position 3; extracted draft only
Audited: 2026-09-11

## Check 1 — Numerical fidelity
✅ All 917 observation magnitudes and original-unit fields are faithful to the cited primary article or publisher-linked supplement. No numerical replacements are required.

- Independently opened the primary DOCX ZIP and parsed `word/document.xml` using ElementTree. All eight tables match `supplement_tables_original` exactly, including blank cells. Each normalized block matches the corresponding original rows after removing empty trailing cells.
- Independently verified all 834 supplement observations (IDs 0050–0883) against actual OOXML numeric cells, reported text, experimental-axis values, material blocks and associated conditions. Correctly accounted for different column order in A.4 (removal before mean/SD) and A.5 (cycle index last). Zero numerical mismatches; zero duplicate mappings to the same numeric source cell. Audit trace: `/tmp/hmi-drain-full-20260911/audit-003-cell-check.json`; independent reparse: `audit-003-independent-tables.json`; checking script: `audit-003-cells.py`.
- Supplement coverage: A.1 has 35 rows × 5 measured/summary cells = 175 observations; A.2 40×5 = 200; A.3 35×5 = 175; A.4 30×5 = 150; A.5 18×5 = 90; final kinetic table 11×4 = 44. Initial-concentration, time, pH, dose and cycle axes are retained as axes, not additional measurements. All material footers, including missing speed and differing times/pH/input concentrations, agree with original cells.
- Main Tables 1–3, IDs 0001–0022, match PDF pp10–11 and rendered tables. Table 1: intercept −1.52404; slope −0.08145; qe 7.59364E−06 mg/g; k1 0.0013575; R² 0.75045. Table 2: intercept 1.49E−04; slope 4.59998; qe 0.21739225 mg/g; qe² 0.16; K2 4.18E+04; R² 1. Table 3 Freundlich: 0.918526683, 0.394284768, 0.99882; Langmuir: −2.47408397 mg/g, −0.3712593, −0.00270081, −0.05502; D–R: 0.66752 mg/g, 1.09E+00 with the source’s unusual beta unit, 0.6776897 kJ/mol, R² 0.9285. Negative and inconsistent model outputs remain source-reported outputs, not physical performance estimates.
- Main prose/caption IDs 0023–0049: abstract 83.04% K-CNT/pH4, 79% Zn-CNT/pH2, 97% K-CNT/pH8, relative decrease about 53%; regeneration 95%, 32.7%, 91%, 13%; kinetic removal 99%; pH-dependent 89% and 74%; 39.96 mg/g CNT capacity; abstract dose 30 mg/20 mL; 25 °C; equilibrium 3 min; contact time 60 min; kinetic input 200 ppb and dose 10 mg; NaOH 0.3 mol/L, 6 h, 40 mg/mL desorption, 50 mg/20 mL adsorption, 30 min; secondary 0.153 ± 0.175 mg/L; unverified legal comparators 20 and 200 µg/L. All numbers and attributions verified against the cited sections. The ± statistic is correctly not invented as SD.
- All 34 regression-inset observations (IDs 0884–0917) verified visually on PDF pp10–12: Figure 7a eight fields, 7b seven, Figure 8 seven, Figure 9 seven, Figure 10 five. Distinguishing Pearson r from adjusted R² is correct. Figure 7a is visibly quadratic despite its first-order-model label. Figure 10’s clipped slope/SE exponents are not invented. The Table 3 versus inset discrepancies are preserved.
- Public Key numbers verified: K-CNT pH8 75.24%/74%/97%; cycle5 K 81.03% versus 95%, Zn 84.45% versus 32.7%; cycle6 K 78.95% versus 91%; K at 40,000 ppb input has duplicate residuals 10,000.00/9,999.00 ppb, mean 9,999.50, SD 0.71, removal 75.00%, with pH4/50 mg/30 min/25 °C footer. Draft accurately gives separate, conflicting source statements.

## Check 2 — Slug vocabulary
✅ Main routing is valid; contextual matrix corrections independently verified in the revised canonical record.

- `metals/chromium-hexavalent` and `mitigation/remediation-evidence` exist. Empty food products and ingredients are correct. `synthetic-water` is explicitly explained as a laboratory-matrix addition and not mapped to commercial drinking water. Nigeria is explicitly laboratory context rather than a food market.
- IDs 0046–0047 now correctly use `groundwater` with explicit secondary total-chromium basis and a note requiring the underlying Elemile study before reuse. These remain source-level secondary context, not the study’s synthetic Cr(VI) measurements.
- IDs 0048–0049 now correctly specify drinking-water/wastewater scope, source-attributed US geography and unverified legal-comparator basis. Their EF-X status and explicit exclusion from regulatory adoption remain intact.

## Check 3 — Speciation and methods
✅ Scientific interpretation is careful; basis corrections independently verified in all 48 affected records.

- IDs 0840–0883 (all 44 final unnumbered kinetic-table records) now explicitly distinguish source-labelled concentrations in mg/L, capacity in mg/g and time/capacity quantities, with unresolved units/input provenance and no conversion. The erroneous copied ppb basis phrase is removed. Original numerical values and units remain unchanged; empirical-synthesis exclusion remains intact.
- IDs 0046–0049 no longer carry the irrelevant adsorbent-capacity basis phrase. IDs 0046–0047 retain `Cr-total`, which is supported by the repository evidence normalizer (`tools/evidence/scan-markdown.ts`, `tools/evidence/model.test.ts`) and distinguishes these secondary total-chromium results from Cr(VI). The source-page frontmatter convention remains `Cr` when that secondary context is later routed.
- Main methods correctly describe potassium-dichromate synthetic solution, DPC/acid reagent addition and 540 nm measurement. PDF p4 supplies the phosphoric acid, five-minute incubation and 1 cm cell. No invented detection limits, recoveries, independent-replicate design or species validation. Source loss of dissolved Cr(VI) signal is not converted to total-chromium removal or proof of adsorption rather than reduction.
- Duplicate concentration columns and means/SDs are distinguishable; `measurement_n: 2` is qualified as two readings, not two independent trials. The 917 records are not 917 experiments. All records have `independent_food_cohort: false`.
- Fifteen all-zero origin rows generate 75 retained source cells, each flagged as an interpreted plotting placeholder and excluded from empirical synthesis. This is appropriate; concentration zeros cannot satisfy the simultaneously asserted input concentration/removal relationship. No zero contamination or nondetection claim is introduced.
- Existing limitations correctly preserve mismatched regeneration pH, cycle efficiencies, pH8 performance, dose/time grids, the A.4 AC-1 200-ppb footer versus 1000-ppb arithmetic, and the final kinetic 544.5 mg/L input versus main-text 200 ppb. A.3 also contains a fixed pH2 footer beneath a varying-pH axis; preserve both as reported rather than letting the footer overwrite the row axis. This is already visible in structured originals; adding that explicit example to the gap notes would improve clarity but is not a numerical-correction requirement.
- Primary PDF and supplement SHA-256 values were recomputed from recorded raw paths and both match. Supplement title/authors identify the same work; primary article has CC BY 4.0 text on p14. Draft makes appropriately limited use of its A-tier source class.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brand names, brand comparisons, or contamination rankings. Materials are experimental sorbent types, not commercial sampled-product brand results. Instrument/reagent names in the original are method names.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No certification threshold proposal, consumer advice, or adoption of alleged legal values. The draft documents conflicting source performance without selecting a preferred claim or making an unqualified material ranking. Source performance problems do not make faithful contextual publication a firewall violation.

## Verdict
PROMOTE — corrected draft only

## Recommended next action
Requested matrix/basis corrections were applied by the parent session and independently rechecked against the canonical extraction. All 917 ID/value/unit tuples are unchanged from the fully audited snapshot. This corrected draft passes all five checks as qualified laboratory evidence; publication, routing generators, checks, provenance completion and commit remain separate compiled-ingest gates. No further numerical extraction is required for this draft audit.

## Scope
Read-only independent audit of canonical extraction snapshot. Reparsed original DOCX rather than trusting cached tables; inspected article text and rendered PDF pp8–12. No repository edits, generators, ingestion or commits. Temporary audit artifacts only.


# Audit report — sharafi2026-nahavand-soil-water-crop-metals

Source: RPCRVI_5; batch position 5; extracted draft only
Audited: 2026-09-11

## Check 1 — Numerical fidelity
❌ Two definite correlation-transcription errors; otherwise the 569-record extraction is faithful at its declared level of precision. Two source-unit/classification transcriptions also need clarification.

Required corrections:

- ID 0178, `barley: Cd versus Zn`: **0.40**, not 0.41. Figure 4b, PDF p12, bottom row, Zn column. Confirmed on a fresh 300-dpi primary-PDF rendering.
- ID 0260, `coriander: Pb versus Hg`: **0.91**, not 0.92. Figure 4d, PDF p12, Pb row, Hg column. The neighboring Cr coefficient is 0.92; the two columns must remain distinct.
- IDs 0348–0349, Table 6 AF: the printed unit is **mg cm² day⁻¹**, a dimensional error in the source. `original_unit: mg/cm2/day` silently repairs it. Preserve the source-printed unit and explicitly note that the expected area denominator differs; do not change the original 0.07/dash values or run risk arithmetic.
- `reference_classifications.Table5_Igeo`: preserve the actual strict inequalities **0<Igeo<1, 1<Igeo<2, 2<Igeo<3, 3<Igeo<4, 4<Igeo<5**, alongside Igeo≤0 and Igeo>5. Bare ranges “0–1” etc. do not preserve the printed boundary conventions. The source leaves equalities at interior boundaries unspecified; do not invent their assignment.

Verification coverage:

- IDs 0001–0069: farm/source counts, soil-property ranges, recoveries, Table 1 reference facts and p10 textual concentration extrema all checked. Counts 150/45/30/35/40 and 150 irrigation samples agree; EC 288–1811 µS/cm, pH 7.35–8.10, OM 0.04–0.34%, nitrogen 0.002–0.017 mg/L and recovery 85–105% match. Table 1 values are correctly separated into reference backgrounds, toxicity-response factors and unverified standards. A scalar Ni MAC of 100 is represented by equal lower/upper endpoints; these are not two independent measurements.
- p10 source-text concentration facts match: soil Zn 1719.9 and Cu 595.5 mg/kg maxima; soil Cd<1.6 and Hg<0.06; sugar-beet soil Cd up to20.3 and Pb>24; water Cu35.3/Zn285.9 mg/L maxima, Pb/Ni generally<3, local Hg~1.26; wheat biomass Cu309.7/Zn163.9 and Cd1.3–1.8 mg/kg; barley Zn>218.6; sugar-beet biomass Zn>3400 and Cd18.4. The internal contradictions are in the paper and are correctly retained rather than repaired.
- IDs 0070–0289: independently transcribed all **220 unique Figure 4 lower-triangle coefficients** from the primary rendering and compared each crop/variable pair programmatically. 218 match; the two corrections above are the only mismatches. Four panels each contain55 pairs; diagonals are excluded. Independent transcript and comparison are preserved in `audit-005-correlation-check.json` and `audit-005-correlations.py` under the same temporary directory. Perfect OM–NC correlations and identical corresponding rows are present in the original.
- IDs 0290–0305: all16 prose correlations match PDF pp11/13, including wheat Cd–Pb+0.69, Cd–Ni+0.50, Pb–Ni+0.53 and Ni–EC+0.52; barley Cr–Ni+0.59, Ni–Pb+0.43, Ni–Cd+0.45; sugar beet Cu–OM+0.45, Zn–OM+0.43, Pb–Cd+0.50, Ni–EC+0.46; coriander Hg–OM+0.39, Hg–pH+0.33, Cr–Ni+0.73, Cd–Pb+0.63, Cd–Ni+0.46. They remain distinct from contradictory figure coefficients.
- IDs 0306–0335: all30 source-stated PLI/Ei/CDI/HI/ADD values match pp13–21, including age-specific PLI1.05/4.75, Cd Ei56–2028 and central280–300, Hg740–790, Cu80–120/Zn22–34, proportions9%/2–7%, CDI endpoints, HI10.14/2.17/6.69/5.67/2.72/0.54, Cr ADD0.16–0.29 and Cd0.009–0.068. These are model claims, not observed intake or clinical outcomes.
- IDs 0336–0429: all94 numeric/dash model-parameter records match Tables 6–9, apart from the AF unit transcription noted above. Adult/child columns, Hg dermal fractions, exponent signs, absent CSF dashes and Table8 body weights/time denominators are correctly assigned. Table7/9 CSF units are faithfully marked as source-labelled dose units rather than silently treated as valid slope-factor dimensions. Cr/Hg labels are not interpreted as speciated measurements.
- IDs 0430–0569: all140 later graph/bound records checked at their declared precision. Figure3 supplies84 crop×metal×matrix shape records, including four unresolved groundwater-Ni nulls; Figure2 supplies16 approximate mean-bar coordinates; Figure5 eight PLI coordinates; Figure10 eight HI coordinates; Figure9 eight diagnostic Cu/Zn child TCR coordinates; Figure11 four Cd ELCR coordinates;12 additional prose bounds/proportions. Graphical magnitudes are grossly accurate, not exact source samples. All140 have `eligible_for_empirical_synthesis: false`.
- Figure3 approximate shapes match the proper metal, crop and matrix. In particular, the sugar-beet soil Zn shape is around2150 mg/kg with higher sample dots, while its crop Zn shape is around485 on a600-axis panel. The extracted text claim >3400 mg/kg is not silently reassigned to soil. Figure3’s “25%–75%” legend and mostly zero-based shapes genuinely prevent confident statistic identification.
- Public Key numbers pass:150 farms split45/30/35/40, November2024, five subsamples and0–30cm,150 irrigation samples, biomass dry basis, prose wheat Cd–Pb+0.69 versus plotted−0.084, biomass Zn>3400 versus figure scale~600. None of the two erroneous internal correlation cells appears in this public table.

## Check 2 — Slug vocabulary
✅ All10 explicit destination slugs and public wikilinks resolve. Physical matrix and contextual routing are appropriate.

- Soil, irrigation water and whole above-ground plant biomass are kept separate. The exact84 Figure3 dispositions cover7 metals×4 crops×3 matrices without duplicates or omissions:28 soil,28 irrigation-water,28 above-ground-biomass routes.
- Empty food product/ingredient arrays are justified by the source’s explicit collection of whole aerial biomass without isolated edible grain or sugar-beet roots. The containing infant-formula folder does not establish a formula route.
- Plant biomass and mixed irrigation-source types are explained in methods and dispositions. All routes are upstream/contextual; no food-compliance or independent food-occurrence cohort is claimed.

## Check 3 — Speciation and methods
✅ Correctly bounded methods and Evidence Fitness. Source inconsistencies remain visible.

- PDF pp4–5 verifies November2024 single-season sampling, five soil subsamples per composite,0–30cm depth, air-dried/sieved soil, shade-dried whole aerial plant biomass, mixed irrigation-water sources, acidification and farmer interviews without quantitative input records.
- ICP-AES3410ARL is correctly assigned to Zn/Cu/Cr/Ni/Pb/Cd; separate aqua-regia digestion/AFS is stated for Hg and As. As is a method/toxicity-table mention rather than an invented eighth occurrence series. No Cr(VI), methylmercury or inorganic-As measurements are inferred.
- Generic85–105% recovery and triplicate laboratory readings are faithfully reported. Numerical LOD/LOQ and CRM identity are not invented.150 farm composites do not become750 independent farms; triplicate assays do not increase field N.
- EF-3 contextual occurrence and EF-X contradictory risk/graph records are appropriate. Reported toxicological factors are the paper’s model inputs, not verified government values or validated total-Cr toxicity assumptions.
- Figure7 genuinely lacks route-column headings and prints concentration units; Figure9 shows Cu/Zn TCR magnitudes well above the caption’s10⁻⁴ ceiling despite missing Cu/Zn CSFs; Figure10 incorrectly labels HI with concentration units; Figure11 repeats ADD/HQ profiles and gives dose units to ELCR. The draft accurately describes these problems without manufacturing replacement models.
- Figure2’s legend explicitly calls the bars means, so the16 `approximate_figure_mean` records are appropriate. Figure3 records are correctly described only as colored-shape coordinates; groundwater-Ni nulls are below reliable graphical resolution, not nondetects or zeros. Exact sample-level values, quartiles and uncertain curve data have explicit unresolved dispositions rather than fabricated extraction.
- Reference-mismatch warning is supported: cited61 concerns organic transistor circuits,68 case-based reasoning,75 pituitary tumors,85 SMEs. The draft appropriately avoids misconduct claims.
- Primary PDF hash matches the recorded SHA-256. Title/byline/year/DOI match; p22 states19February2026 publication and data available only by author request. p26 prints CC BY-NC-ND4.0, correctly retained in metadata. No redistribution or legal-validity determination is made by this audit.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brands or brand contamination rankings. Instrument manufacturers are permissible methodological identifiers.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No certification thresholds, repaired legal limits, consumer risk advice, or unqualified fertilizer-causation claim. The public draft explains source uncertainty and limits quantitative reuse. Whole biomass is not presented as edible tissue.

## Verdict
REVISE

## Recommended next action
Correct the two Figure4 coefficients, preserve the AF source-unit error explicitly, and restore Table5’s exact inequality notation. The remaining numerical extraction and bounded contextual draft pass. After those mechanical corrections, this source can pass the draft audit without retrieving unavailable sample data or recalculating the paper; compiled-ingest checks, publication, regeneration and commit remain separate gates.

## Scope and audit artifacts
Read-only repository audit. Inspected primary PDF text, rendered figure pages and a newly rendered300-dpi Figure4 region. Independent220-pair transcription/comparison is in `/tmp/hmi-drain-full-20260911/audit-005-correlation-check.json`; rendered verification is `audit-005-corr-crop.png`. No source files changed, generators run, ingestion performed, author contacted or commit made. Two errors in a candidate extraction do not require quarantining an unpublished draft; corrected draft promotion is distinct from declaring the ingest complete.

## Final mechanical recheck — 2026-09-11
All four requested fixes are verified in the canonical batch JSON: ID0178 is0.40; ID0260 is0.91; IDs0348–0349 preserve `mg cm² day⁻¹` with an explicit source-dimensional-error note; Table5 retains all printed strict inequalities without assigning unspecified equality boundaries. No new scientific interpretation was introduced.

**Final verdict: PROMOTE (corrected draft only).** Compiled routing, source-page updates, generated outputs, repository checks and commit remain outstanding ingestion gates.


# Audit report — skin2010-significant-risks-for-dermal-oral-lead-exposures-despite

Source: RPIS_10; Esswein, Boeniger and Ashley (2011), *Handwipe Method for Removing Lead from Skin*, DOI10.1520/JAI103527
Audited: 2026-09-11

Scope: Independent read-only audit of position7 draft,174 observations and3 claims. Draft approval is distinct from completed ingestion and from approval of the current incorrect legacy page.

## Check 1 — Numerical fidelity
✅ All174 values/explicit unresolved endpoints agree with the primary at their declared precision. ⚠️ Several inherited basis/assay-limit fields misdescribe otherwise correct numbers; corrections below.

- IDs0001–0054: independently parsed all nine Table3 volunteer rows from primary PDF text and checked every six-column cell; **54/54 exact matches**. The rendered table and footnotes support the row structure. Four background results (volunteers2/5/7/9:0.31/0.65/0.77/0.71µg) are correctly retained as detected below LOQ estimates, not zero or nondetects. Each volunteer has a stable subject identifier. Nine participants are not54 independent people, and two serial sampling wipes were pooled into one analyzed sample.
- IDs0055–0064: LOD0.3 andLOQ0.86µg/sample; prepared90.9mgPb/g mixture;33mg aliquot with±1mg weighing tolerance; reagent purity>99.9%; particle size<10µm;3000/6000µg nominal loading;99% battery-plant PbO—all match pp5–7/13. PbO compound-versus-elemental challenge wording remains explicitly unresolved.
- IDs0065–0081: ISML0.3–2g/g support, citric acid0.01–0.1g/g support; Table1 A10mL/0.5%/12.5% and B10mL/0.25%/18.75%; five separate30-second steps, two serial wipes, and2mL liquid cleanser dose match pp4–6/8/10. ProtocolC/D/T preserve rinse/second-wipe differences. Table2 commercial codes are not wrongly equated to Table1 protocol codes or Figure5 cleanser codes.
- IDs0082–0088: early five replicates/method, comparison prose14 volunteers versus Figure4 captionn5, separate blinded14 participants, twice/product/participant, nine final volunteers, five additional trials all correctly retained. The first comparison's inconsistent N remains an explicit gap;28 uses of a cleanser in the blinded trial are not28 independent subjects.
- IDs0089–0103: source-text remaining masses approximately300,<75,15,15,100,2.5,35,200,>250,16 and27µg; Table3 approximate mean spill670µg, applied2300µg, background maximum2.6µg; additional99.2% removal at6000µg in five trials all match pp7–13. Approximate prose values remain separate from graph estimates; no silent recomputation of Table3 source percentages.
- IDs0104–0169: all66 Figure2–5 means/error-endpoint records visually checked on rendered primary pp7/9/10/11. Magnitudes and cleanser/protocol attribution are grossly accurate at plot resolution. Figure2 four unshown lower confidence endpoints and Figure3D unresolved lower endpoint remain null, not zero. Figures2–4 explicitly label95% confidence limits; Figure5 does not label its interval definition, correctly left unspecified. All66 are approximate and excluded from empirical synthesis. No graphical estimate is represented as a volunteer sample or an exact table mean.
- IDs0170–0174: Figure4 significant symbols are correctly attached to F/U/N/H/G relative toA; printed `p=<0.05` is reasonably represented as an upper bound, not an exactp value. I has no significant symbol. All three qualitative claims agree with pp8–11: rinse/second-wipe improvement; nonsignificant16vs27µg comparison; blinded trial superiority ofA overB/C/D without invented exactp values.
- Public Key numbers all pass:3000µg early challenge/five replicates, approximate2.5µg with two treated wipes+rinse,14 blinded participants twice/product, nine volunteers/99.7–99.9% removal,1.6–6.6µg final collected mass and0.3/0.86µg method limits. Table3 range is not an intrinsic wipe concentration.

Required metadata corrections (no numeric values need changing):

1. Replace the common handwipe basis on Table3's weighed, wax-paper, calculated applied, and percentage columns with their actual quantities. Weighed mass belongs to test dust; wax-paper mass to a surface-wipe sample; applied mass to calculated hand-skin challenge loading; removal to a source-calculated percentage. Likewise ID0100 is wax-paper mean spill, ID0101 mean calculated applied loading, and ID0103 source-reported removal efficiency. These are not all “Pb mass collected from both hands.”
2. Remove `detection_limit`/`quantitation_limit` from Table3 weighed mass, calculated applied mass, and percentage records. The0.3/0.86 limits are µg per analyzed sample, not limits on weighed challenges or percentages. Retain them for the assayed background/wax-paper/final wipe masses, with source sample units explicit.
3. Give IDs0075–0081 protocol-duration/count/dose bases and IDs0170–0174 a significance-bound basis instead of a Pb-mass basis. Pb may remain the study analyte context; these numerical parameters are not Pb measurements.

## Check 2 — Slug vocabulary
⚠️ Destination routes pass; alias metadata needs making concrete.

- All three draft destinations exist: metals/lead; health/cat-2-non-ingestion-exposure-pathways; mitigation/remediation-evidence. Empty products/ingredients correctly avoid baby-wipe intrinsic contamination and unrelated fish routes. Physical skin/sampling-wipe/challenge-dust matrices are explained as contextual study materials, not retail products.
- Primary hash matches recorded SHA256 and the current canonical legacy source page. Preserve its stable opaque citekey, while replacing its incorrect author“Skin”, year2010 and abstract-fragment title with Esswein/Boeniger/Ashley2011 and the actual title/DOI. Manuscript receipt29October2010 is not publication; acceptance21March2011 and onlineMay2011 are printed on p1.
- Required: add a machine-readable `aliases: [esswein2011-handwipe-lead-removal]` (or the supported equivalent consumed by the compiler). `existing_source_repair.key_policy` and metadata prose say this alias is supplied, but the audited record has no actual alias field. Do not create another source page for this exact DOI/hash.
- At compiled gate, replace the legacy fish/baby-wipe and incidental Cd/As/Ni/Cr routes and regenerate their affected outputs. The existing repair plan correctly identifies these errors, but does not itself enact the repair. No extra measured metal series is supported.

## Check 3 — Speciation and methods
✅ Scientific methods and Evidence Fitness are bounded correctly; resolve the row metadata concerns under Check1.

- Primary pp5–6 verifies controlled PbO-containing dust application to palms, initial sampling, timed cleansing/rinse, two serial post-treatment wipes pooled for analysis, and separate wax-paper spill accounting. Nitric/perchloric hot-block digestion and ICP-AES measure recovered elemental Pb mass; they do not measure lead speciation or prove every residual particle was sampled. No bloodlead/absorbed-dose endpoint is present.
- LOD/LOQ, blank/spike/spike-duplicate QA and geographic context agree with the primary. No invented pediatric cohort, demographics, collection period or trial-level uncertainty is added. Statistical methods are insufficiently described for reconstructing repeated-measures significance; draft does not attempt it.
- The source's lead-oxide-versus-elemental challenge mass ambiguity and sampled residual endpoint are explicitly preserved. No unsupported PbO stoichiometric correction or universally near100% performance claim is made.
- Prior-paper skin-safety assertion is correctly treated as secondary evidence; this paper is not an infant-safety or clinical-benefit trial. Technology development/patenting/licensing and lack of independent long-term replication are appropriately disclosed. Publication tier is distinct from fitness and ingest completion.
- Materials/formulation and protocol facts are study context, not consumer mixing/preparation instructions. Figure1 photographs and book end matter are correctly dispositioned as no new quantitative results.

## Check 4 — Part 12 brand firewall
✅ Public draft contains no brand names or brand contamination rankings. Coded treatment comparisons remain source facts; brand mappings stay in the primary PDF. Method vendors, if retained, are methodological identifiers. The legacy page's product routes must be repaired at compilation as specified above.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No live thresholds, compliance recommendation, certification claim, infant-use advice or cross-paper synthesis. The draft describes controlled dermal-removal evidence and explicitly rejects retail wipe occurrence and clinical-benefit uses.

## Verdict
REVISE

## Recommended next action
Apply the column-specific basis/assay-limit corrections and supply the actual alias metadata, then recheck the draft. At the separate compilation gate, update the existing same-hash canonical page and affected legacy routes; no duplicate source page is warranted.

## Audit artifacts and scope
Read primary PDF through recorded Library symlink; verified SHA256; inspected full article text and rendered quantitative pages. Independent54-cell comparison: `/tmp/hmi-drain-full-20260911/audit-007-table3-check.json`. No repository file edited, generator/check run, ingest performed, author contacted or commit made. The requested corrections concern an unpublished draft; this report does not approve the currently incorrect legacy page or declare ingestion complete.

## Final correction recheck — 2026-09-11

All requested metadata corrections are verified in the canonical batch JSON. Each of Table3's six columns has the correct physical matrix and quantitative basis for all nine volunteers; assay limits remain only on the three assayed columns with explicit µgPb/analyzed-sample units. IDs0100/0101/0103 now distinguish spill mass, applied loading and removal percentage. IDs0075–0081 have protocol-specific bases; IDs0170–0174 identify dimensionless significance upper bounds. The actual `aliases` array contains `esswein2011-handwipe-lead-removal`. All174 original numerical values are unchanged.

**Final verdict: PROMOTE (corrected draft only).** All five draft checks pass after correction. The old canonical page and its erroneous fish/baby-wipe/incidental-metal routes still require the planned repair at compilation, with its stable citekey retained; compiled routes, generated outputs, repository checks and commit remain separate ingestion gates.


# Audit report — agwaramgbo2012-there-is-a-growing-global-concern-for-the

Source: RPIS_12; Agwaramgbo et al.2012, *An Evaluation of Edible Plant Extracts for the Phytoremediation of Lead Contaminated Water*, DOI10.4236/jep.2012.38086
Audited: 2026-09-11

Scope: Independent audit of position9 corrected draft,97 observations,72 original table cells,56 printed chart labels and12 plant-route dispositions. The72 table cells are included within the97 observations, not72 additional independent results.

## Check 1 — Numerical fidelity
✅ All numbers match the primary source, with source contradictions preserved. Two metadata corrections were requested and verified before this final verdict.

- IDs0001–0072: independently parsed all18 rows from primary Tables1–3 and compared every concentration/SD/SE/removal-percent cell with both `tables_original` and observations: **72/72 exact matches**. SD andSE are not interchanged. Collard's very small SD0.015 andSE0.0088 are printed source values. All three copies of the control rows are present and repeats explicitly flagged; twelve treatment conditions and two control conditions are not eighteen independent cohorts.
- Table1 verified tuples(mean ppm,SD,SE,removal%): control(1277,37.86,21.86,0); spinach(17.7,0.56,0.32,98.6); mustard(25.2,0.61,0.35,98); collard(2.4,0.015,0.0088,99.8); bitter leaf(534,51.6,29.81,58); diluted control(710,5.03,2.91,0).
- Table2: repeated controls as above; green pepper(30.7,3.3,1.9,97.6); yellow pepper(31.4,1.1,0.65,97.5); red pepper(79.9,1.3,0.75,93.7); tomatoes(220.6,55,31.8,82.7); carrot(20.6,0.61,0.35,98).
- Table3: repeated controls; white grape(46.0,13.4,7.75,96); red grape(89.9,5.5,3.18,92.9); lime(540.8,70.7,40.82,57.6).
- IDs0073–0085: abstract/conclusion sequence99.8,98.7,98.2,97.8,97.75,96.7,95.5,94.28,93.5,84,61 and conclusion-only lime57%; separate Discussion spinach98.8% all match pp722/728/729. Red-grape prose's extra `>` is explicitly preserved as ambiguous ranking punctuation, not silently made a proven lower bound. These values are not substituted for table values.
- IDs0086–0097: nominal stock1300ppm, nominal diluted650ppm, prose measured control1276.66ppm, triplicate reactions,22h abstract versus24h methods,25mL extract+25mL stock,100g plant,200mL extraction water,3000rpm and10min centrifugation all match pp722–724/729. These remain preparation/design facts rather than food measurements.
- All56 labels across Figure1a/b,2a/b,3a/b,4a/b were visually checked on rendered pp725–728. Every group/value is correct. Source-specific differences are retained: Figure2a yellow pepper31ppm versus table31.4; Figure2b tomatoes82.6% versus82.7; Figure3 rounds red-grape90ppm/93% and lime541ppm/58%; Figure4a has collard2,spinach18,yellow pepper31,red pepper80,white grape46.2,tomatoes221,lime541ppm; Figure4b rounds pepper/grape/tomato percentages and prints lime57%. These are printed labels, not digitization estimates or extra samples. Captions do not define error bars; no error-bar type or interval endpoints are invented.
- All public Key numbers pass:12 extracts/triplicate,25+25mL,1277/710ppm controls,collard2.4/0.015/0.0088,carrot20.6/0.61/0.35 with98versus95.5%,lime540.8/70.7/40.82 and57.6%. The stock1.3g/1L/1300ppm and22versus24hours limitation statements are accurate.

Verified corrections:

- IDs0086–0088 now use `synthetic-water`, correctly identifying nominal stock, nominal diluted control and measured undiluted control, rather than plant-extract supernatant.
- IDs0024/0052/0072 retain the source's zero-percent diluted-control entries, but basis and notes now identify them as source-assigned reference zeros. They do not falsely claim710ppm gives zero removal under the1277ppm treatment denominator. No replacement percentage was calculated. All97 numerical values remained unchanged.

## Check 2 — Slug vocabulary
✅ Both qualified destinations exist: mitigation/remediation-evidence and metals/lead. All12 plant dispositions map to laboratory-reagent context and explicitly reject direct food occurrence. No treatment plant was omitted or duplicated.

- Empty products/ingredients are justified: the analyzed sample is centrifuged reaction liquid; original edible tissue was not assayed. Store/market origin of reagents does not make this market-occurrence evidence. The Library's baby-wipe folder is not analytical scope.
- Exact primary SHA256 matches the packet and existing canonical page. Current legacy title is an abstract fragment and several alleged authors are affiliation/address/email fragments; the corrected title, five actual authors,2012 publication, journal3:722–730 and DOI agree with p722. Correct alias and alternate raw handle are machine-readable.
- Preserve stable opaque citekey `agwaramgbo2012-there-is-a-growing-global-concern-for-the`, add its meaningful alias, and replace the same-hash page at compilation. The planned repair correctly removes unrelated fish/root-puree/baby-wipe/seaweed routes and incidental As/Al/Cr measurement scope. This audit approves that plan, not the currently incorrect legacy page.

## Check 3 — Speciation and methods
✅ Methods and Evidence Fitness accurately bound a problematic laboratory experiment.

- Primary pp723–724 confirms local purchased plants/garden bitter leaf,100g with200mL water, filtration/centrifugation, reaction triplicates, room-temperature shaking and clear post-reaction supernatant sent to a commercial laboratory for EPA6010 ICP-AES. Pb is appropriate; no speciated lead method or measured As/Al/Cr series is inferred.
- Stock preparation1.3g lead nitrate in1000mL is described as1300ppm lead, without reconciling compound mass with elementalPb or measured1277ppm. Draft preserves this unresolved basis without stoichiometric correction or treating the nominal recipe as validated elemental concentration.
- Treatments dilute stock1:1, and a separately measured710ppm dilution control is printed. Nevertheless, the source explicitly uses1277ppm for treatment percentages. Draft clearly states the resulting dilution/removal confounding, preserving reported values without manufacturing corrected efficacy. Measured1276.66ppm prose and table1277ppm remain distinct source precision.
- Reaction triplicates do not prove independent lots or markets. No LOD/LOQ, recovery/CRM data, plant-extract blank results, pH measurements, full liquid/solid mass balance or dissolved-versus-particulate separation criterion is invented. Post-centrifugation liquidPb decline does not establish totalPb destruction, mechanism, field-scale performance or safe drinking water.
- All97 observation rows exclude empirical synthesis; this is justified by stock/dilution ambiguity and contextual experimental matrix, not by summary-only reporting. Means,SDs andSEs are preserved despite exclusion. EF-3 qualified laboratory-method context fits; publication tier is not methodological validity or ingest completion.
- The proposed acidity explanation is correctly described as untested. Primary discussion's efficacy claims are not promoted as validated household treatment or clinical advice. No legal or consumer safety threshold is introduced.

## Check 4 — Part 12 brand firewall
✅ Public draft names no product brands or brand-associated contamination values. Plants are treatment categories; methodological vendor names, if retained, remain methods context. Retailer and substrate-brand mentions in the primary are not repeated as contamination findings.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No certification threshold, consumer detoxification recommendation, drinking-water assurance or cross-paper efficacy synthesis. The public page describes the paper's results and contradictions at their supportable scope.

## Verdict
PROMOTE — corrected draft only

## Recommended next action
Compile by repairing the existing same-hash source and its affected routes, retaining the stable citekey and corrected alias. Generated outputs, routing audits, repository checks and commit remain separate ingestion gates; this audit does not mark the source ingested.

## Audit artifacts and scope
Primary nine-page PDF and all quantitative rendered pages inspected; primary SHA256 verified. Independent table comparison is `/tmp/hmi-drain-full-20260911/audit-009-table-check.json`. No repository edits, generators, ingest actions, external contacts or commits performed by this auditor.


# Audit report — authors2019-spatial-contamination-and-health-risks-of-heavy-metal

Source: RPIS_14; Boudia et al.2019, DOI10.1007/s13762-018-02195-1; HAL24-page manuscript and publisher DOCX supplement
Audited: 2026-09-11

Scope: Independent read-only audit of position11 draft,378 observations, six context tables, supplement and figure dispositions. Draft promotion does not approve the current incorrect legacy page or establish ingest completion.

## Check 1 — Numerical fidelity
❌ One definite sign error in contextual PCA loadings. ⚠️ One omitted graphical diagnostic and an overconfident description of the PCA plot. All378 observation values/attributions pass.

Required corrections:

- `source_context_tables.Figure4_PCA_loadings`: component1 zinc is **−0.360**, not+0.360, in the printed matrix on HALp16/manuscriptp15. Other27 loadings match, including component2 Cu−0.449, component3 Ni−0.110 and component4 Zn−0.076.
- Figure5 disposition: include **Cu maximum outlier approximately104** alongside the six other metal outlier diagnostics. The clear red symbol is at~104 on HALp18/manuscriptp17. This contradicts prose saying all metals except certain Pb/As cases have Eri<40. Retain as approximate model-error context, not measured concentration or new sample.
- Figure4 disposition/context notes: do not claim its3D plot faithfully repeats the printed matrix. For example, As appears high on the verticalPC2 axis while the table givesPC2=0.093 andPC3=0.758. Preserve the printed matrix, explicitly flag the apparent axis/position mismatch, and leave graphical component coordinates unresolved rather than repairing or digitizing them.

Verification coverage:

- IDs0001–0336: independently parsed all36 primary Table2 statistical rows, splitting min/max and mean/median, then compared **336/336 numeric/null slots** and all metal/zone/statistic attributions with extraction. This covers six zones×seven metals×eight reported statistics. SD/mean/range units are mg/kg, CV is%, skewness/kurtosis dimensionless. The three downtown kurtosis dashes(tAs/Pb/Zn) correctly remain null/not_reported. The manuscript's malformed19. 91 is faithfully normalized19.91; negative signs and unusual standardized-looking descriptors remain source facts, not recomputed statistics.
- IDs0337–0350: BG1 values(tAs/Co/Cr/Cu/Ni/Pb/Zn)3.58/3.44/21.64/17.1/12.63/24.56/42.95 and BG2 values4.52/3.77/11.33/10.73/7.19/13.27/40.43mg/kg all match. Two offsite background samples are correctly separate from84 study soils.
- IDs0351–0358: zoneN9/13/4/14/17/27, sum84 and all-study Cd<0.01mg/kg match Methods/Results. Triplicate analytical readings do not increase fieldN. TheCd bound is not invented as a formalLOD/LOQ or zero.
- IDs0359–0378: all20 distinct prose concentration summaries match HALpp11/13–15: As median10 and95%-below20; Co mean10.13/min3.43/max21.83; Cr median60/min14.42/max193; Cu mean25.91/median20.77; Ni median28.54/mean26.94/min5.06/max51.84; Pb median52.11/min13.27/max220.5/mean63; Zn median83.34/mean93.27mg/kg. Contradictory prose extrema are retained separately from area tables and flagged, not silently used to replace them.
- Table2 comparators: all14 values match, including CrPNEC3.2 explicitlyCr(III). Table1/S1RfDs: all20 numeric entries and Ni-inhalation dash match; ingestion/inhalation/dermal columns and exponent signs are preserved as unverified source model inputs.
- Table3: all21 unique Pearson coefficients and four marked significance bounds match. Co–Cr.474,Co–Ni.580,Cr–Ni.417 havep<.01; Zn–Ni−.242 hasp<.05. Null bound means no printed significance marker. Diagonals and mirrored pairs do not increase observations.
- Table4/S2: all45 numeric variance/eigenvalue entries and18 structural blanks match the primary and independently reparsed supplement. Initial/extraction/rotated columns remain distinct; selected initial eigenvalues2.070/1.127/1.057/1.034 and cumulative75.551% are correct. KMO.605 and Bartlettp<.01 are accurately recorded. No PCA loading or variance percentage is treated as a causal source fraction.
- Table5: visually checked all168 metal×zone×endpoint slots plus six combinedHIs on image-only HALp21/manuscriptp20. Six Ni inhalation blanks remain null; printed0.00000 values remain rounded model outputs, not soil nondetects. All other values match, including beachCo dermal1.02110/HI1.02500, beachCr ingestion0.11586 versus harbour1.19320, and combinedHI2.06600/3.75334/2.88477/3.13632/3.16516/3.70622. Inconsistent model values are not recalculated. Table5 supports noncancer-model context, not the abstract's cancer claims.
- Risk assumptions match HALpp8–11 and SupplementAnnex1: CF10⁻⁶,50mg/day ingestion,350days/year,202minutes/.14day fraction,18years,41kg,6300days,.1absorption,skin areas.057/.176/.358m²,adherence.11/.011/.031mg/cm²,5m³/day inhalation,PEF1.36×10⁹m³/kg,backgroundfactor1.5,toxicresponse10/5/2/5/6/5/1. Igeo/Eri classification inequalities and pica exclusion are preserved. These are source assumptions, not verified guidance.
- Figure3/S1: all seven map legend ranges match(tAs.4–49.63,Co.5–18,Cr10–193,Cu5–81,Ni4–54,Pb10–225,Zn38–403.24mg/kg). Interpolated surface scales are correctly distinguished from measured extrema, including Cu81versus table223.7 and Zn403.24versus285.7. No84-site data are reverse-engineered from colored maps.
- Figure5's existing approximate diagnostics As134/Co32/Cr34/Ni42/Pb83/Zn8 are grossly faithful; addCu as above. Figure6's42 index groups and median legend are correctly dispositioned without inventing quartiles or sample values. Caption omission ofNi is correctly noted. Maps and model graphics are not additional empirical measurements.
- Public Key numbers all match:84plus2,depth0–20cm,zoneNs; agriculturalAs11.57/10.41/4.92–19.4; roadPb98.4/77.0/45.6–220.5/SD51.85/N27; industrialCr51.17/45.36/11.33–193.36/SD49.32/N14; Cd<.01mg/kg. Methods'100±10% accuracy is source-reported. The erroneous PCA value is not in this public table.

## Check 2 — Slug vocabulary
✅ All11 explicit routes and public links resolve. Both supply-chain routes are environmental soil/source-association context; they do not assert measured crop transfer.

- Products/ingredients are correctly empty. Study matrices are surface soil, not wipes or purees; incidental crop examples in discussion do not become food occurrences. All eight measured elements, including boundedCd and previously omittedCo/Cu/Zn, are retained; incidentalSn is removed.
- PrimarySHA256 matches the existing canonical page. Correct five-author byline, full title,2019year and full DOI agree with the HAL cover/manuscript. Preserve stable opaque citekey and supplied `boudia2019-arzew-soil-metals` alias/alternate handle. CorrectDZ replacesUS; Methods explicitly locate the study nearOran, despite the title's northeastern wording.
- Existing page's truncatedDOI, unknown authors and baby-wipe/root-puree routes require the planned same-hash repair and output regeneration at compilation. Do not create a duplicate page. Publisher pagination/date are recorded as publisher verification; analytical findings here were checked against the explicitly identified HAL manuscript.

## Check 3 — Speciation and methods
✅ Accurate operational basis and bounded Evidence Fitness; address graphical/model issues under Check1.

- Methods confirm sieving2mm,air-drying,grinding0.2mm,0.5g aqua-regia microwave digestion,.45µm filtration,25mL final volume and ICP-AES. Lot blanks,triplicate analyses and RTC049-050 sandy-clay CRM with100±10% accuracy are reported. No independent fieldreplication, dates, metal-specificLOD/LOQ or complete silicate dissolution is invented.
- tAs andCr correctly mean unspeciated elemental acid-extractable measurements. They do not establishiAs/Cr(VI); health model toxicity assumptions are explicitly distinct. Air-dried basis is not silently labelled moisture-corrected dry weight or foodwetweight.
- The primary's 90%-Cr>80 claim,NiPNEC65versus29.9,Zn300calledPNECversus106.8,area-label errors,As/Co/Pb prose discrepancies and cancer-versus-HQ/HI language are source limitations. Draft accurately prevents them becoming unqualified health outcomes or verified legal exceedances. Hypothetical children were not sampled.
- Source-context tables are typed comparator/model/correlation records and excluded from empirical synthesis; occurrence summaries remain source-native environmental data. Summary-only reporting is not itself a fitness defect. No source percentage or pooled statistic is proposed as a live limit.
- Supplement independently reparsed from original DOCX: **147/147 normalized OOXML cells** match preserved tables. Annex1 read in originalXML. All14 cached map/legend images individually hash-match DOCX media and were inspected. S1/S2 repeat main tables; no new cohort or missing per-site numeric dataset was found. Primary and supplement SHA256 values both match packet.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brands or contamination rankings in public draft. Instrument/reference-material vendors are legitimate methods context. The background mention of named industries/retailproducts does not become brand findings.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No certification thresholds, consumer risk advice, invented legal limits or causal source fractions. Public limitations clearly distinguish modelled exposure from observed health and environmental soil from food products.

## Verdict
REVISE

## Recommended next action
Correct the PCA zinc sign, retain the missingCu graphical diagnostic and qualify the inconsistent3D plot; recheck those narrow corrections. Then compile through the existing same-hash canonical page with corrected routes, generated outputs, checks and commit as separate ingestion gates.

## Audit artifacts and scope
Independent336-cell/Table2 and147-cell/OOXML comparison: `/tmp/hmi-drain-full-20260911/audit-011-check.json`; script `audit-011-check.py`; original supplementary text `audit-011-supp-independent.txt`. No repository edits, generators, ingest actions, external contacts or commits performed by auditor.

## Final correction recheck — 2026-09-11

All requested corrections are verified in canonical batch JSON: component1Zn is−0.360; Figure5 retains Cu~104 with the explicit conflicting prose and approximate/model-only status; both Figure4 disposition and matrix notes identify the apparent plot-axis mismatch and prohibit deriving new loadings from it. All378 observation records are unchanged.

**Final verdict: PROMOTE (corrected draft only).** All five draft checks pass after correction. Repair of the existing canonical page/legacy routes, output regeneration, checks and commit remain outstanding compiled-ingestion gates.


# Audit report — bedrossiantz2025-seabass-cadmium-ciprofloxacin-behavior and gawra2025-zebrafish-cadmium-ciprofloxacin-endpoints

Sources: RPIS_9,SETAC2025abstract1.01.P-Tu004; RPIS_37,SETAC2025abstract1.01.P-Tu009
Audited: 2026-09-11

Scope: Two complete identified abstracts only. Positions6and64 are distinct works in one proceedings container. This audit neither approves nor completes the other2290 indexed abstracts, and does not approve deduplication by container hash.

## Check 1 — Numerical fidelity
✅ Both drafts pass; all11 numerical protocol records and7 substantive claims checked against entire target abstracts.

- Bedrossiantz: exact code1.01.P-Tu004,title and eight-author byline match PDFp11/printedp9. All five numerical facts match:21days dietary exposure,Cd10and100mg/kg,ciprofloxacin1and10mg/kg. Source says two concentrations for each compound; no combined-exposure/interactions design is invented. Cd treatment levels remain nominal diet parameters, not fish tissue measurements or environmental occurrence; antibiotic values are explicitly not metal measurements.
- All four Bedrossiantz claims match: reduced distance/social interaction in the conspecific compartment at higher exposures; significantly increased shoaling cohesion at highestCd; prolonged illuminated-zone time in light-dark and group-exploratory testing; reduced basal locomotion and increased freezing. Anxiety/depression-like wording remains attributed fish-behavior interpretation, not clinical diagnosis. Exact effect sizes,pvalues,N and uncertainty are absent and not invented. Further transcriptomic/epigenetic analysis is expressly future work.
- Gawra: exact code1.01.P-Tu009,title and abstract boundaries match PDFpp13–14/printedpp11–12. All six facts match: larvae described as96hours, exposure24hours, ciprofloxacin10–50mg/L,Cd numerical bounds.24–24. Larval age is correctly separated from exposure duration; developmental time reference is not invented.
- PDF literally prints`?g/L` forCd. Both original-unit fields preserve this defect, with a separateµg/L resolution and provenance. Independent web check on2026-09-11 reproduced the access distinction: direct official-page open returned404; indexed/cached official SETAC page text explicitly gives`.24to24μg/L` and namesÉniaCorreia/InêsDomingues. The corrected public unit and byline are supported without claiming freshHTML retrieval. [Official SETAC abstract record](https://setac.secure-platform.com/vienna2025/solicitations/102006/sessiongallery/94247/application/7982).
- All three Gawra claims match: no observed survival/development effects at tested concentrations; catalase andChE activity increased withciprofloxacin and decreased withCd; more zigzag/high-speed swimming specifically in antibiotic-exposed larvae. The latter is not reassigned toCd. Null-effect language does not claim proof of universal safety. Molecular analyses are explicitly underway, not completed.
- Both public Key numbers tables are faithful to these records. No numerical behavioral/enzyme effect size or unsupplied dose grid is invented. Neither abstract contains a figure/table requiring further extraction.

## Check 2 — Slug vocabulary
✅ Both destinations exist for both drafts:metals/cadmium andsupply-chain/aquatic-bioaccumulation. Routing is qualified experimental aquatic-toxicology context; no measured bioaccumulation factor is claimed.

- Empty products/ingredients correctly avoid sunscreen,marketfish andfood-occurrence routes. Matrices distinguish experimental feed/juvenile sea bass from exposurewater/zebrafish larvae. Source-specific physical matrix vocabulary is explained.
- Empty jurisdictions are explicitly justified: affiliations inSpain/Portugal and conference venueVienna do not establish sampling geography. No market or location is inferred.
- Both complete target titles/bylines/codes and PDF/printed-page locators are correct, subject to the documented official byline correction forGawra. The cover confirms35thmeeting,11–15May2025,Vienna; the stale34thcontents header is not used as event identity. Conference-abstract type/tierB correctly avoid treating these as full peer-reviewed articles.
- Hash verification passes for both actual Library files. Their identical1280-page container hash does not identify the individual abstracts. Independent citekeys,abstract IDs,page scopes andtitle/byline identities are preserved. No existing source matching these citekeys/codes was found in the source-page search.

## Check 3 — Speciation and methods
✅ Both drafts accurately bound nominal exposure, preliminary outcomes and absent methods.

- Cd is the experimental metal; ciprofloxacin is a separate antibiotic exposure. No measured exposure validation,Cd salt,feedwet/drybasis,tissue burden,N,tankreplicates,sex/size,analytical metal-assay method or effect magnitude is invented.
- Bedrossiantz correctly lists socialpreference,shoaling,light-dark andgroup-exploratory tests and treats claimed environmental relevance as author language unsupported by an occurrence dataset. Microbiota–gut–brain context in the introduction is not a completed microbiome finding.
- Gawra correctly lists survival,development,swimming andGST/CAT/GR/ChE assays; the abstract gives directional outcomes only forCAT/ChE andantibioticbehavior. No completed transcriptomic/DNAmethylation result is inferred from the study aim or listed endpoints.
- All11 numerical records have empirical-synthesis exclusion and no independent-food cohort. This follows from nominal experimental exposure and missing numerical outcome data, not a rule rejecting summary-only studies. EF-3 attributed preliminary toxicology context is appropriate.
- No humanclinical,pediatric safety,foodcontamination,confirmed molecular mediation orfield bioaccumulation claims appear. Absence of measurable survival/development effects is not generalized to absence oftoxicity.

## Check 4 — Part 12 brand firewall
✅ No sampled-product brands,brand contamination tables orconsumer product comparisons in either public draft. Compound names andresearch methods are scientific identifiers.

## Check 5 — Part 2 wiki/HMTc firewall
✅ No certification thresholds,consumer advisories orpolicy/limit-setting arithmetic. Both drafts explain what these limited abstracts report and exclude unsupported occurrence/clinical/molecular interpretations.

## Verdict
PROMOTE — both corrected drafts only

## Recommended next action
Compile each abstract under its own identity and scope, retaining the shared-container distinction andGawra unit-correction provenance. Complete required source metadata, routing,generated outputs,checks andcommit through the normal gate; neither draft approval nor an abstract-page ingest completes the proceedings book.

## Container coverage and audit scope
The coverage ledger contains2292unique abstractIDs: exactly the two target entries are staged for independent audit, and2290remain`unreviewed-container-item`. Both source records set`whole_container_read:false`and`whole_container_ingested:false`; the ledger also keeps whole-container completionfalse. This is a mechanical index, not a substantive fullbook read or extraction. Abstract boundaries were visually checked to avoid importing adjacent works' values or outcomes.

Read-only audit against primary rendered pages and official cached record; no repository edits,ingest actions,generators,external contacts orcommits performed. The source-page compilation gate remains outstanding.


# Independent draft audit — position 14, Du 2024 preprint

**Final verdict: PROMOTE the corrected draft for compilation.** This is not a completed ingest, approval of the existing legacy page, or confirmation that the published version is complete. Audited the current position-14 packet in `data/evidence/library-drain/batch-01-extractions.json`; repository files were not changed by this auditor.

## Scope and primary verification

Read the 17-page Research Square v1 manuscript, quantitative tables and rendered figure/table pages, and independently reparsed the linked supplemental DOCX. Main PDF SHA-256 `75ff4aad99f41018952d992d74ad6130f67ed89e37a92efef178470de7a4d167` and supplemental DOCX SHA-256 `1de8a62adf505215eee06c592607632677315be0e211a3d22ae1644b04bfd702` match the packet. The supplement is the exact manuscript-linked comparator table, including its attribution footnote, not an individual-measurement dataset.

The current draft meets the five required audit checks:

1. **Numbers — PASS.** All 262 structured records were checked: 200 Table 3–5 slots (including three genuinely unreported canned-Pb concentration slots), 10 Table 1 limits/unreported slots, five manufacturing-origin counts, 17 printed Figure 1–3 percentage labels, five Table 2 model intake values, and 25 Table 6 aHI values. Independent layout-text comparison matched all 200 Table 3–5 values, groups, metals and statistics; visual inspection corroborated table layouts and figure-label attribution. Independent OOXML parsing matched all 27 original supplement cells after whitespace normalization. Figure percentages retain group denominators and number-of-metals attribution; no omitted zero slices or individual sample values were invented. Repeated all/cat/dog/dry/canned summaries refer to the same 93 products, not additional N.
2. **Slug vocabulary and routing — PASS for proposed metadata.** All seven destinations exist: dry-kibble and canned-wet pet-food product pages and the Pb/Cd/Cr/Hg/As metal pages. The two products now appear in `context_only_products`; dry/canned records use actual page slugs and `route_kind: broad_product_context`. All/cat/dog summaries remain mixed-form pet-food context. Nutritional completeness is unproven, so these are not verified complete-and-balanced row contributions. No fish or ingredient occurrence route is justified. The stable opaque `cat2024-individual-and-combined-contamination-of-the-heavy-metals` key is retained with the Du alias; same-hash legacy metadata and obsolete routes remain explicitly scheduled for repair.
3. **Species, methods and fitness — PASS.** Pb/Cd/Cr flame AAS and Hg/As atomic fluorescence, preparation, blanks, calibration standards and absent preprint recovery/precision results match the primary text. Cr is unspeciated; total Hg and total As never become MeHg or iAs. Source-native concentration basis is unresolved; no wet/dry/as-sold conversion is inferred. Positive-only means are not whole-cohort means. The Cd LOD 0.08/LOQ 0.20 mg/kg conflict with reported positive minima and means, and the abstract's erroneous canned-Cd 34.18% versus Table 5's 14.29%, remain explicit. Null limits and canned Pb values remain null. Model intakes and aHI remain EF-X source-model facts with surrogate-reference-dose, species and normalization caveats; they are not observed clinical outcomes.
4. **Brand firewall — PASS.** No brand identities, rankings, endorsements or brand-level inference are introduced. Manufacturing countries are separated from the China sampling market. Ingredient explanations and secondary studies in the discussion do not become measured ingredient contamination.
5. **Wiki/HMTc firewall — PASS.** No certification arithmetic or threshold setting appears in the public draft. Table exceedance counts are source-comparator facts, and the supplement's formulation-dependent limits remain secondary, unverified legal context, excluded from the regulatory register. The source's dry-versus-canned safety ranking and claimed acute harms are not promoted as established findings.

## Corrections verified in the final packet

The public body now follows the current source-page template: unheaded introduction, Key numbers, Methods (brief), Evidence fitness, Limitations and Related evidence. Ingest work logs were removed. Counts, percentages, method thresholds, modeled daily intakes and dimensionless aHI now have appropriate distinct bases. Product-context metadata and dry/canned matrix slugs were corrected. Numerical values remained unchanged and the 200-cell comparison was rerun against the current canonical packet with 200/200 matches.

## Version and completion boundary

The 2024 preprint DOI is `10.21203/rs.3.rs-4838876/v1`. The eight-author identity, 93-product cohort, 45/48 animal groups, 79/14 food forms, production years and five origin counts match the later [publisher article](https://www.nature.com/articles/s41598-025-98066-0), published 17 April 2025, DOI `10.1038/s41598-025-98066-0`. This establishes a shared cohort, not independent replication. Version-specific measurements remain separate; no published measurements or later quality-control details are imported into the preprint extraction. All 262 records are excluded from empirical synthesis pending outcome-level reconciliation, and `published_version_completion_verified` remains false.

No further draft corrections are required for promotion. Full published-version retrieval/extraction and reconciliation remain an explicit recovery gap. Canonical legacy-page repair, structured register compilation, downstream route regeneration, logs/index, applicable checks and scoped commit remain outstanding batch gates. The present public legacy page still contains incorrect metadata and routes; this verdict applies only to its corrected replacement draft.

Verification artifacts: `audit-014-check.py` and `audit-014-check.json` in this temporary directory record independent primary-table and DOCX comparisons.


# Independent draft audit — position 15, Kim 2018

**Final verdict: PROMOTE the corrected draft for compilation.** The initial three revisions are recorded below and all have now been verified as fixed; exact concentration extraction passes. Audit applies to position 15 in `data/evidence/library-drain/batch-01-extractions.json`, not completed ingest. Repository files were not changed by this auditor.

Read the complete eight-page primary PDF and inspected Table 1 and all four boxplots on rendered pages 3–5. Primary and alternate canonical raw copies both have SHA-256 `0c876a831b4f0eedb7670e7f6088e897e592203162857d022ceeba69f6d2d315`. DOI, four-author byline, 25 October 2018 publication and CC BY license match the PDF. The existing `kim2018-dry-dog-food-heavy-metals` citekey is the correct same-source repair target; no additional cohort or source page is needed.

## Required revisions

1. Records 57–63 describe historical secondary human intake. Their dog-food `product_matrix`, retail market and cohort attribution must be replaced with explicit human-diet comparator metadata. Cd explicitly represents North America/Europe; other geography should remain no more specific than the cited source establishes. Remove the shared erroneous `p3 Cd Results` locator from As/Hg/Pb records; Table 1 p4 is correct, with analyte-specific Results locators where needed.
2. Records 72 and 73 represent source prose “over 8” and “over 15” fold. Add greater-than censoring and clarify that the bound applies to the ratio, not the human denominator. Do not replace them with exact arithmetic ratios.
3. Figure 3's poultry-Hg upper whisker appears approximately 0.004 mg/Mcal, inconsistent with the 0.0023 Table 1 and Results maximum. Retain 0.0023 as the exact primary table fact and add this graphical discrepancy to the figure disposition and gap record. No digitized individual sample is warranted.

## Five audit checks

1. **Numerical fidelity — exact values PASS; bound metadata revision above.** All 76 numerical records were reviewed: 36 Table 1 dog-food medians/minima/maxima, four as-fed LOQs and eight CV upper bounds, eight cohort/acquisition counts, seven human comparator values, three counts below the human As comparator, and ten prose fold-comparisons. Independently parsed Table 1 yields 36/36 exact matches by formulation, analyte and statistic (`audit-015-check.json`). The three groups are 17 different formulations each, totaling 51 foods; triplicate analyses do not create 153 independent samples. Design context values (3 aliquots, 5 g, 100 g bag, 40°C, precision designs, 79 kg and 2,900 kcal human normalization) match the source. Secondary toxicology context is attributed to cited studies, not new animal experiments. Exact quartiles are unavailable and are explicitly not invented.
2. **Slug vocabulary and row fit — PASS for food routes; human comparator correction above.** All five destinations exist: dry-kibble pet food and arsenic/cadmium/mercury/lead metal pages. Maintenance/all-life-stage dry dog-food sampling supports finished dry-food occurrence. Fish, poultry and red meat describe formulation groups, not independently assayed raw ingredients. No ingredient routes are created. One lot per formulation and absent calendar sampling period/ingredient provenance remain clear.
3. **Species, methods and fitness — PASS.** Total As and total Hg are retained; no iAs/MeHg inference. Pulverization, triplicate aliquots, microwave nitric-acid digestion, 40°C drying, ICP-MS instrumentation, hydrogen mode, 0.001 mg/kg as-fed LOQ, <5% intra-assay CV and <7% inter-assay CV are faithful. The source says above detection, not above quantification, and supplies no numeric LOD. Manufacturer energy normalization is explicit: observations remain mg/Mcal; absent individual energy values prevent inversion of group summaries to mg/kg. Such summaries remain valid per-energy descriptive facts. Lack of sample-level data is not a reason to erase them.
4. **Brand firewall — PASS.** Public draft contains no brands or brand comparisons. The primary paper's manufacturer list does not identify individual measured concentrations and is not used for brand inference. Laboratory/equipment identities are method information. No endorsement or ingredient causation is claimed.
5. **Wiki/HMTc firewall — PASS.** No certification calculations, current legal compliance claims or pet safety thresholds appear. Historic human comparisons and secondary toxicity doses remain EF-X contextual facts. The article's broad safety claims are not promoted as measured outcomes or validated lifetime safety. Current public template is followed and ingest work logs are absent from the draft.

The draft already handles three important source problems correctly: the As maximum's purported 55-fold canine-median denominator is inconsistent; Figure 4's human Pb dashed line appears around 0.06 mg/Mcal versus the text/Table 1 comparator 0.006; the abstract overstates red-meat versus fish Pb significance, while Results and Figure 4 support red meat versus poultry only. No arithmetic correction of these source contradictions is inferred.

Canonical repair, structured compilation, route regeneration and required batch checks/commit remain outstanding. A subsequent verified-corrections addendum below controls the final draft verdict.

## Final corrections verification

Re-read the current canonical packet after the author applied all three revisions. Records 57–63 now identify historical human-diet secondary comparators, have no dog cohort ID, use appropriate market/time metadata, preserve explicitly stated North America/Europe for Cd and unresolved geography for the others, and carry corrected table/results locators. Records 72–73 now have `censoring: greater_than` and explicitly state that the lower bound applies to the ratio. Figure 3's poultry-Hg discrepancy appears in the figure disposition, gap ledger and public limitations, while the exact Table 1 maximum remains 0.0023 mg/Mcal. All 76 numerical values are unchanged from the audited extraction.

No further draft corrections are required. All five checks pass for the corrected draft. This verdict does not certify completed ingest: canonical page replacement, compiled evidence/routes, affected generators and required batch checks/commit still need their completion gate.


# Independent draft audit — position 19, Dai 2016

**Final verdict: PROMOTE the corrected draft for compilation.** The initial bounded context/metadata revisions are recorded below and have all been verified as resolved. No numerical transcription errors found. This read-only audit covers the current extraction packet and draft, not completed ingest. Only this temporary report was written by the auditor.

## Primary coverage

Read the complete 12-page primary paper and visually compared all table cells, Table 2/3 footnotes, and 16 histogram panels on rendered PDF pages 3–8. Raw SHA-256 `7dd8c23592bca991f01e94c1093c21338c67c1e4d50fb323c65d2626a754b8ce` was independently verified. The six-author byline, title and 2016 publication match the PDF. Independently retrieved [publisher-deposited Crossref metadata](https://api.crossref.org/works/10.21423/jrs-v04n01p021): DOI, six authors, volume 4 issue 1, pages 21–32, CC BY-NC 4.0 and deposited publication date 10 March 2016 match the packet. The packet separately discloses the failed publisher landing page and the PDF availability date of 11 March 2016.

The expanded packet has 670 records: 64 Table 1 count cells, 18 Table 2 statistics, six Table 2 nondetection dispositions, 384 Table 3 cells, 43 Table 3 footnote nondetection dispositions, 99 histogram percentages, 10 ICP-MS LOQs, 42 prose numeric/statistical records, and four source total/detection-percentage records. The 384 Table 3 cells were first compared with primary images row by row, then their structured expansion was mechanically checked for exact value, element, group and statistic correspondence: 384/384 match. All 64 rows and their six fields are retained, including negative distribution-shape statistics, differing analyte Ns and visibly contradictory source cells.

All Table 1/2 cells and footnote Ns match. All 99 histogram labels and their ordered concentration bins match the primary graphics. Zero-percent bins explicitly printed in the graphics are retained; no reconstructed sample values, normalized percentages or unprinted bins are introduced. Parent additions 667–670 faithfully preserve source N=564 and initial/2012/2013–15 percentages 28/78/98.

## Required context and metadata revisions

- Retain the following omitted primary facts in bounded structured context, without asserting independently verified compliance: p9 six of eight As-positive cattle products had source-claimed other-metal violations; p9 Cr detected in all but 13 cattle samples; p5 one Se-yeast product and approximately threefold label excess; p10 approximately 16% of premixes with Hg. Preserve the three source group-comparison P<0.05 statements for Se fish meal versus feed types, Cr minerals, and Hg fish meal versus premix. These can be context records, not additional independent samples.
- Preserve collection/analytical-design quantities in structured method context: >2 kg dry collection, 0.5 g analytical aliquot, 3:1 HNO3:HCl, and 200°C digestion. The public method summary need not list every protocol number.
- Records 625–638 retain correct original ppm/ppb values, but their inherited basis describes source-labelled mg/kg. Correct the basis to explicitly retain each original source unit without conversion, particularly the disputed 2011 Cd ppb endpoints.
- Describe Figure 4's error precisely: caption B=Cr and C=Hg, while axis labels B=Cd and C=Cr. This is misidentification, not a literal exchange of two labels.
- Add the Table 1/Table 3 premix-N discrepancy: fiscal 2012–15 Table 1 sums to 37 premixes, versus N=36 for the Table 3 As/Cd/Pb/Hg groups. Preserve both; do not guess which annual row is wrong.

## Five audit checks

1. **Numeric fidelity — PASS for captured values; context additions above.** Table 1 sums to 565 rather than the source total 564; year-specific totals and detections are retained. The 2012 62/73 table count does not match prose 78%. Table 3 horse Pb median 15 mg/kg conflicts with mean 0.07 and SD 0.28; the apparent error remains a source fact, not a corrected empirical value. Mo footnote h has contradictory positive-group summaries and differing Ns; it is flagged and never converted to zeros. Beef Hg rounded mean 0 with SD 0.002 is not proof of absence. Table 2 Cd maximum 18 mg/kg conflicts with prose 5–82 ppb. All are preserved visibly. The 0–11 mg/kg fishmeal-Hg prose range conflicts with the 0.10–0.12 final histogram bin; no guessed decimal repair is made. Figure 2B's printed Cr percentages total 86.3%; other totals near 100 reflect printed rounding. Mineral Cu median 5.4 versus stated Cu LOQ 10 remains flagged.
2. **Slug vocabulary and routes — PASS.** The new supply-chain feed hub and all nine proposed metal destinations exist. All records have explicit destination candidates. Selenium is retained through the feed hub with its standalone-page gap disclosed. Products and ingredients remain empty: cattle/horse/poultry/swine/liquid/wildlife feeds, fishmeal, minerals and premixes do not become human-food or unmeasured dog/cat-food observations. Feed forms and animal groups remain distinct within the structured record. The hub is a stub awaiting compiled evidence, not falsely described as a completed ingest.
3. **Species, methods and fitness — PASS, with unit-basis refinement above.** As and Hg are total/unspeciated; Cr does not become Cr(VI). OES 2011 and ICP-MS 2012–15 remain distinct; the panel expanded and source does not provide the earlier numerical limit. Ten later LOQs match: Hg 0.01, Cu 10 and the other eight elements 1 mg/kg. Below-LOQ zero substitution is explicit, zero medians are not true absence, and exact moisture correction is unresolved. Liquid feed remains separate. Summary statistics remain usable qualified feed occurrence; mixed forms, zero substitution and changing sampling/panels bar unqualified temporal or cross-product pooling. Correlation coefficients and P bounds match the text and do not imply tissue transfer.
4. **Brand firewall — PASS.** No brands, product endorsements or brand comparisons are introduced. Labels and identified copper/selenium sources are source context, not brand-linked concentration claims. No tissue, milk, meat, egg or clinical result is invented.
5. **Wiki/HMTc firewall — PASS.** The public draft follows the current source-page template, contains no work logs or certification calculations, and qualifies upstream-feed fit. Source legal, nutritional and toxicological comparators remain secondary EF-X context, not regulatory-register instruments or current maximum limits. Source errors including the Se 0.1 ppm=1 mg/kg assertion and inverted Norwegian Hg unit are retained in contextual notes rather than normalized into claims. No source-reported percentile, descriptive statistic or feed concentration sets a live standard.

The eventual verdict applies to this bounded evidence draft only. Source-page creation, evidence compilation, routing to the new hub/metal pages, generators, logs/index, applicable checks and scoped commit remain separate completion gates.

## Final corrections verification

Re-read the corrected canonical position-19 packet. The eight omitted primary-prose facts/comparisons are now in `primary_prose_extras`, with locations, units, source-claim qualifications and P<0.05 bounds; no positive count is invented from the ambiguous Cr denominator. `method_design` now preserves >2 kg collection, 5 kg bag, 0.75 mm screen, two riffle splits, 100 ml bottle, 0.5 g aliquot, 3:1 acid ratio, overnight predigestion and 200°C digestion. These match the methods. Records 625–638 now specify native source ppm/ppb without conversion. Figure 4 is described as a caption misidentification, and the Table 1 premix N=37 versus Table 3 N=36 discrepancy is explicit. The public introduction now states 565 versus 564 directly.

The final packet retains 670 observations plus bounded structured context. All five audit checks pass for the corrected draft. No further draft corrections are required; PROMOTE does not declare the source or batch ingested. Compiled routes, public-page publication, generated outputs, required checks and commit remain outside this read-only audit.


# Independent draft audit — position 18, Nica 2012

**Final verdict: PROMOTE the corrected draft.** This report concerns the bounded source draft, not completed ingest. No repository files were edited.

Read the complete 15-page PDF and inspected primary renders of all six figures and Tables 1–3. Independently verified raw SHA-256 `fae13f8f4d27a122242420dc0b81789f947eb9571b7f46b217710bd770e2c274`. The five-author byline, full title, DOI 10.1186/1752-153X-6-55, 15 June 2012 publication and CC BY 2.0 license are explicit in the PDF. Raw path is the position-18 record in `batch-01.json`.

## Primary issues to preserve

- Soil concentrations represent a 0.5 N HNO3-extractable fraction (1:10, 24 h), not a total-soil digestion. Biota underwent dry ashing and all concentration axes are mg/kg dry weight. Soil/biota extraction differences prevent unqualified transfer or bioavailability claims.
- At least 60 newly matured snails per site were divided into three batches of 20. Batch/analytical replication must not become 60 independent concentration samples. Eight sites were sampled in May 2011. Shell selection, sample sizes and statistical degrees of freedom are not consistently described.
- Table 1 has 120 unique off-diagonal correlations. Soil Cu–Zn is 0.95*** and Cu–Pb 0.81*, contradicting prose that Cu is the exception to correlated soil metals. Soil Zn–Cd 0.22 ns and Cd–Pb 0.25 ns contradict broad claims of strong soil Zn/Cd/Pb correlation. Soil Cu–foot Cu is 0.45 ns; the prose's claimed soil/foot Cu association is unsupported by its own table. Nettle Cu–foot Cu is 0.90**. Log Pb(S)–Log Cu(HP) is 0.029 ns, not 0.29.
- Printed impossible P intervals (e.g. 0.05<p<0.001) and ambiguous statistical degrees of freedom must not be silently repaired. Preserve exact Table 1 coefficient/significance markers and distinguish source interpretation from table facts.
- Figures 1–4 legends misdescribe SF1–SF7 as hepatopancreas, but SFR, methods and Table 1 abbreviations resolve SF as foot. Cu foot means exceed hepatopancreas at THM1/THM2. Cd nettle means exceed acid-extractable soil means at THM1/THM2/THM4; the source's categorical first-trophic-level statement is not universally supported by its graphics. Cross-sectional field measurements do not isolate dietary uptake from soil ingestion/epithelial contact or establish a causal biomagnification factor.
- Figure concentrations and SDs are unlabelled graphical values. Preliminary pixel estimates look grossly consistent with rendered charts, including the very large Pb-S5 error bar. Tiny bars and unresolved SD endpoints must remain bounded or unavailable, never exact zero. Approximation, edge/calibration uncertainty and exclusion from empirical pooling are required.
- Table 2 has 48 mean/SD numeric cells with site-specific significance markers. SH units are not stated in its header; 0.01 mm caliper resolution does not establish that tabulated values around 3.6–4.3 are cm. SW alternates width/weight in the prose, while abbreviations and RSH=SH/SW establish the intended width interpretation.
- Figure 5 supports groups {HP1,HP6}, {HP3,HP4,HPR}, {HP5,HP2,HP7}; source r=0.81 is a cluster-description statistic, not an additional metal-pair correlation. Figure 6 is a sampling map; Table 3 supplies all 16 exact coordinate values.
- Roman snails, nettle leaves and soils were environmental biomonitoring samples, not marketed foods, harvested dietary products or pet-food ingredients. No pet-food or human-food occurrence routes are supported. The Romanian soil comparators are secondary source citations, not independently verified current regulatory instruments.

## Final five-check audit

1. **Numerical fidelity — PASS.** Independently reparsed the primary Table 1 triangle and compared all 120 coefficients and significance markers with both the original-cell capture and expanded observations. All match, including 0.029 ns. Independently compared all 48 Table 2 mean/SD values and their significance markers; all match. All 16 Table 3 coordinates, four LODs, four recoveries, CV bounds, source correlations, P values/bounds, comparative lower bounds and added narrative statistics agree with the primary text/images. The 16 additional prose-statistic rows preserve impossible source intervals and ambiguous degrees of freedom as attributed context, not corrected statistical inference.

   All 128 mean positions and 128 SD positions are represented. Visual review of the four concentration figures and retained pixel coordinates supports gross accuracy of resolved estimates. There are 241 numerical estimates and 15 unresolved null positions (10 means with upper bounds and five SDs), with no zero imputation. All 256 records are explicitly approximate and excluded from empirical synthesis. The final SD correction is verified across all 128 SD records: a combined ±8-pixel endpoint allowance plus calibration uncertainty; means retain ±4 pixels. These are extraction allowances, not 95% confidence intervals. The 32 values in the public eight-site Cu-foot/Zn-hepatopancreas/Cd-hepatopancreas/Pb-soil table match the structured estimates at the displayed one-decimal precision, and every cell has an approximation sign.

2. **Slug and evidence routing — PASS.** All six destinations exist: the two environmental supply-chain pages and the copper, zinc, cadmium and lead pages. All 475 records carry destination candidates. The public related-evidence links use these actual slugs. No product or ingredient route is assigned; Romania/May 2011/wild sentinel context is preserved. Public site-level metal and morphology summaries meet the geographic breakdown requirement without treating the source folder name as a food classification.

3. **Species, methods and Evidence Fitness — PASS with explicit source limitations.** Elemental Cu/Zn/Cd/Pb are retained without chemical-speciation claims; dry-weight tissue measurements remain distinct from dilute-acid-extractable soil. Three pooled batches of 20 snails are not counted as 60 independent tissue concentrations. Selected shell morphology is separately framed at 20 shells/site, with unstated SH units left unresolved. The cluster record now uses `source_cluster_fit_r`; it is not a Pearson metal-pair record. Source/table and source/figure contradictions are explicit, including Cd soil–leaf comparisons at THM1/THM2/THM4. EF-3 environmental-context fitness and empirical-synthesis exclusion are suitable for this bounded packet. No consumer exposure, isolated dietary uptake, source-apportionment causality or universal biomagnification claim is promoted.

4. **Brand firewall — PASS.** No consumer brand, brand ranking, endorsement or product attribution is introduced. Instrument/reagent information is method provenance only.

5. **Wiki/HMTc firewall — PASS.** Public draft follows the current source template and contains literature facts, qualified chart estimates, methods, fitness and limitations. It contains no certification arithmetic, threshold recommendation, compliance verdict or unpublished work log. Quoted Romanian soil comparators remain secondary context and are explicitly unverified against primary legal instruments; chart calibration does not confer regulatory authority.

## Disposition

PROMOTE this corrected 475-record draft and its structured context, with the documented source contradictions and graphical limitations intact. No additional correction is required for draft promotion. Raw-source preservation, canonical page creation, record compilation, destination routing, generated outputs, batch checks, logs and scoped commit remain the parent workflow's ingest-completion gates. This audit performed no repository mutation, generator execution or ingest.


# Audit report — authors2019-toxicology-reports-6-2019-472-481

Source: RPIS_23 / Maurya et al., DOI 10.1016/j.toxrep.2019.05.012  
Audited: 2026-09-11  
Scope: corrected extraction packet and proposed source draft only; existing public source page has not yet been repaired.

Read all ten primary PDF pages, including references; inspected rendered pages 474–478 containing all seven tables and all three figures. Independently verified raw SHA-256 `f1942b1436b7b9120f8c4e6bcbeb6739881ef4e6f8af5cbbf75cf37a0271952e`. The primary title, six-author byline, DOI, online date 29 May 2019, journal 6:472–481 and CC BY 4.0 license match the packet. The existing canonical page carries this same hash and DOI: retain its stable opaque citekey, add the Maurya alias, and replace erroneous metadata/routes rather than create a duplicate.

## Check 1 — Numerical fidelity

✅ Exact source transcription passes. Source contradictions remain qualified, not endorsed.

| Primary source | Audited numeric slots | Result |
| --- | ---: | --- |
| Table 1, p474: seven species × N/length/weight range endpoints | 42 | All match, with original N ambiguity and secondary caption attribution preserved |
| Table 2, p475: eight properties × four sites × mean/SD | 64 | All match |
| Table 3, p476: five metals × four sites × mean/SD | 40 | All match |
| Table 4, p476: seven species × three tissues × five metals × mean/SD | 210 | All match, including one unresolved malformed SD |
| Table 5, p476: ten unique correlations | 10 | All match; no unsupported significance added |
| Table 6, p476: species/tissue/metal BCF cells | 105 | All match as EF-X source calculations |
| Table 7, p478: seven species × five metals × five columns | 175 | All match as EF-X model/reference context |
| Methods counts, midpoint checks, spike recoveries and calibration literals | 14 | All match |

Independent primary-layout parsing matched all complete numerical tables; the rendered pages confirmed attribution, malformed entries and column boundaries. The expanded observations match the original table arrays in value and order. All 110 numerical values in the two public concentration tables match their source cells. The abstract's 32.41 ± 2.55 Zn assignment and 4.77 ± 0.34 metal assignment are correctly identified as errors relative to Table 4. Public counts 60 water/ambiguous 28 fish, 5 g dry tissue and 96.54–98.85% recovery match methods.

The L. rohita gill Cu SD is literally `0..4`, retained as null with its source literal; C. latius muscle Cd SD is visibly 0.6 and is not changed to 0.06. Cr/Cu calibration entries 9999/9996 are preserved as malformed EF-X literals rather than invented 0.9999/0.9996. The pH/DO/hardness prose values, Kanpur Zn 4.75 versus Table 3 4.74, Cd maxima and rounded correlation prose are separately preserved as discrepancies.

Figure 1's four coordinate pairs match the context capture. Figure 2's seven perspective bar panels repeat Table 6; Figure 3's THQ/EDI panels repeat Table 7, including conspicuous source decimal anomalies. They are not independent observations. Figure 3B explicitly labels mg/kg/day despite Table 7's incomplete EDI header. No figure digitization or new risk calculation is needed to retain these facts.

## Check 2 — Slug vocabulary

✅ All nine destination slugs exist. Freshwater muscle alone routes to `products/fish-freshwater`: 70 mean/SD records. Only the C. garua and M. tengara muscle subset additionally routes to `ingredients/catfish`: 20 records. All 140 gill/liver records remain environmental/tissue context, as do water and model/reference records. No marine fish, canned seafood, shellfish, pet-food or feeding-prey ingredient inference remains in the draft.

The stable canonical identity and explicit legacy-repair record correctly identify the existing page's wrong US geography, journal-header title, unknown byline, unmeasured Hg/Ni/Al scope and unrelated seafood routes. Actual canonical and generated-route repair remains a compilation obligation.

## Check 3 — Speciation and methods

✅ Qualified source fitness and routing pass after metadata corrections. Cu/Zn/Pb/Cd/Cr are the reported results; Cr is unspeciated. The dry 5 g tissue digestion conflicts with the wet-weight Table 4 label; the generic 4.8 factor does not document conversion of each table. Every fish concentration keeps this conflict, no cross-basis normalization is applied, and all 660 records are excluded from empirical synthesis.

Water records now identify environmental river-water sampling and a distinct water cohort. All muscle records now mark independence unresolved rather than assume an independent cohort. The prior publication has a different 18-species set; L. rohita is its only named species overlapping this seven-species study. This is independently supported by the [prior study's publisher abstract](https://www.tandfonline.com/doi/full/10.1080/10807039.2018.1456897); it does not establish whether individual rohu samples overlap. Full prior-study measurement extraction was outside this audit.

All 280 BCF/exposure/reference cells retain EF-X and no food-occurrence route. Table 7 averages largely combine three organs despite muscle-only risk methods; its intake-rate, reference-dose and EDI units and several decimals are incompatible. RDA/RfD rows now have secondary-human-reference matrix, no observed geography, null cohort and explicit table-position species linkage. Table 1 qualitative habitat/diet/conservation entries are preserved as source-era secondary assertions, not verified current conservation classifications.

## Check 4 — Part 12 brand firewall

✅ No measured consumer brand, product ranking or endorsement. Scientific instrument/material names are reproducibility information and permitted.

## Check 5 — Part 2 wiki/HMTc firewall

✅ The proposed public draft follows the current template. No certification threshold, standards arithmetic, consumer recommendation or new clinical claim appears. Source BCF/THQ/EDI results are not used to endorse safety or the paper's unsupported cancer-risk assertion. Secondary legal/reference comparators remain explicitly unverified.

## Verdict

PROMOTE the corrected 660-record draft. Final recheck confirms all 70 RDA/RfD collection periods are null and the complete source instrument, wavelengths/slits, gas purities, final 0.01 N acid, signal mode and glassware details are preserved. The source reference mismatches ([92] breast-cancer genomics for BCF, [41] diabetes for THQ and [91] pancreatic cancer for metal-source attribution) are explicitly documented. No numerical transcription correction or other draft revision remains.

## Recommended next action

Promote the bounded draft with its source contradictions and EF-X restrictions intact. Complete canonical replacement, correct routing, generated outputs and all batch checks before claiming ingest completion. This audit did not edit repository files or execute generators.


# Independent draft audit — Ghimire 2026, position 1

Verdict: **PROMOTE the corrected 93-observation draft**. This is a draft-only audit, not completed ingest.

All 81 pages of extracted text were read, including front matter, literature review, methods, results, references and appendices. Main scientific figure renders inspected: FTIR, FESEM, EDX, XRD, calibration, UV–Vis time profiles, removal bars, concentration ratios, PFO and PSO fits; plant herbarium and identification appendices also inspected. SHA-256 independently verified: `e9abe48b8b9e7e93ed8d6b6ebbf26b3bba86c1ebae13082e36d8d747efb71ef4`.

Identity: Bibek Ghimire, May 2026, Tribhuvan University Institute of Engineering, Pulchowk Campus, MSc thesis PUL080MSMSE005, “MOF-Derived Carbon Composites from Jacaranda Seed Pods for Selective Removal of Hexavalent Chromium [Cr(VI)].” No DOI is printed. Copyright permits inspection but imposes copying/financial-use permissions; this is not a CC/open reuse license.

## Primary findings to preserve

- This is an experimental synthetic-water remediation study, not infant-formula or food occurrence. Locally collected Jacaranda seed pods are an adsorbent precursor. No food, supplement or other plant-ingredient destination is justified by the containing Library folder.
- Chromium results use DPC colorimetry at 540 nm, after centrifugation. Signal loss measures apparent aqueous Cr(VI) depletion. Neither Cr(III), total chromium, cobalt leaching nor solid-phase chromium is directly measured. Adsorption, chemical reduction and precipitation are not quantitatively separated. Thesis claims of proven Cr(III) production, chemisorption and complete chromium cleanup are stronger than its measurements support.
- Fixed operational conditions are nominal 10 ppm Cr(VI), pH 2, 25 mg adsorbent, 50 mL solution and 15/30/60/90-minute sampling. Stock reagent mass/concentration, replicate N, statistical uncertainty, aliquot volume/replacement and full DPC recipe are absent. The text claims systematic pH/dose/concentration/isotherm tests but supplies no results for those variations. No regeneration, reuse, real-wastewater, selectivity or multimetal experiment is reported.
- Overview says aqueous growth, but actual synthesis uses methanol. Reagents mention cobalt chloride while the operational recipe specifies cobalt nitrate hexahydrate. Biomass mass and furnace heating ramp/gas flow are unspecified. Carbonization is 700/800/900°C for five hours under nitrogen.
- FESEM discussion at printed pp31–32 calls MOF800 superior and MOF900 lower-performing, whereas the performance graphs and later discussion rank MOF900 highest. Claimed BET/surface-area advantages are not backed by measured BET results. A source-called 300–400 nm “mesopore” should remain an attributed feature-size estimate, not an established pore classification.
- EDX Fig7 reports C/N/O/Co weight percentages 68.27/0.48/19.27/12.22 and atom percentages 80.51/0.21/15.20/3.78. These sum to 100.24 wt% and 99.70 at%, despite both printed totals 100. Do not normalize silently. Elemental EDX does not establish cobalt valence, crystallographic phase or chromium reduction.
- FTIR labels 3321, 2980, 1534 and 666 cm⁻¹ are exact printed anchors; the x-axis says wavelength although cm⁻¹ denotes wavenumber. Assignments and approximate narrative ranges should be source-attributed. XRD sample naming alternates JSP-Pristine and JSP-Pristine900; phase assignments remain the author's interpretation.
- Calibration inset: intercept 0.12445 ± 0.0908, slope 0.32328 ± 0.01779, R² 0.991 and adjusted R² 0.988. No SD/SE definition for those regression ± values is supplied. Five standards appear around 0.5/1/2/5/10 mg/L. The reported 97.75% depletion of nominal 10 ppm implies a residual below the lowest plotted standard; without LOD/LOQ, trace removal is not analytically established.
- Figure11 calls the outcome both adsorption capacity and “% Degradation,” but its data are percentage signal/concentration depletion, not measured mg/g capacity or elemental degradation. Figure12 is the corresponding concentration ratio representation; repeated transforms are not independent experiments.
- Methods introduce Lagergren ln(qe−qt), whereas Fig13/PFO results fit −ln(C/C0). These are apparent concentration-decay fits, not automatically the stated Lagergren adsorption model. Printed PFO rate/R² pairs: pristine 0.0068/0.9667; 700 0.0197/0.9585; 800 0.0295/0.9471; 900 0.0379/0.9073. Rate units follow the minute time axis. PSO t/qt units and underlying qt data are absent; inset regression constants are source model facts, not independently validated measured capacities. Better R² alone does not prove chemisorption or identify a rate-controlling chemical step.
- Secondary Table1 labels cadmium “Cr6+”; prose Pb limit 0.003 mg/L differs from table 0.01. WHO and species-specific legal claims are unverified. Literature-comparator capacity/removal rows are secondary, not new primary measurements; the bamboo entry mismatches Qu/Chen attribution and bibliography topic.

## Final five-check audit

1. **Numerical fidelity — PASS.** Independently checked all 93 observations against primary table cells, printed regression insets, text and plotted positions: one reported removal endpoint; 16 Figure 11 chart readings; 12 PFO and 12 PSO coefficients; 16 PSO chart points; eight EDX cells; four calibration coefficients; five calibration chart points; four FTIR labels; ten approximate size endpoints; and five approximate XRD positions. Exact values agree. All 16 removal-bar coordinates reproduce the rounded extraction under its recorded axis calibration; other chart readings agree with the rendered points within the stated graphical precision. The 37 graph reads and 15 source-approximate size/XRD facts now all carry explicit approximation flags (52 total). Regression ± terms retain their undefined uncertainty type. Methods, secondary tables, qualitative fits and spectral prose are preserved as context rather than extra independent experimental observations. Full 81-page text and all 15 scientific figure renders, relevant tables and appendices were inspected.
2. **Slugs, routing and completeness — PASS for draft.** Both destination pages exist: `mitigation/remediation-evidence` and `metals/chromium-hexavalent`. Every observation has destination candidates; no infant-formula, food-product or ingredient route is present. Source identity, author, year, thesis type and raw hash agree with the primary. The two proposed routes are bounded laboratory mitigation/materials context. Figure transformations and repeated kinetic representations are not independent experimental N. Unavailable raw spectra, uncertainty and missing tests have explicit dispositions.
3. **Species, basis, methods and fitness — PASS.** Source metadata now uses `Cr-VI` and `Co`. DPC aqueous Cr(VI) signal is distinguished from total Cr, unmeasured Cr(III), cobalt leaching and solid-phase chromium. Percent depletion, regression coefficients, characterization composition, spectral positions and graphical t/qt coordinates have separate meanings; no unsupported adsorption-capacity conversion was made. All 93 observations are excluded from empirical synthesis. The public draft preserves calibration extrapolation, model/measurement limitations and the 800-versus-900°C source contradiction without inventing a resolution. Missing replicate N remains missing.
4. **Brand firewall — PASS.** No named commercial product or brand is treated as occurrence evidence or given a contamination/safety finding. Jacaranda is an adsorbent precursor, not a measured food ingredient.
5. **Wiki/HMTc firewall — PASS.** The public draft follows the current source template and reports qualified literature findings only. Secondary legal comparisons remain EF-X context; they do not populate a regulatory register, imply compliance, set certification thresholds or establish treated-water safety. No standards arithmetic or operational worklog is included in the public draft.

## Corrections verified and final disposition

Verified the requested corrections in the latest canonical packet: secondary effluent comparators are **As 5 mg/L and Pb 3 mg/L**; source metal metadata is **Cr-VI/Co**; all 37 graphical readings plus 15 source-approximate facts retain approximation flags. The newly recorded low-end calibration extrapolation and aqueous/methanol/cobalt-reagent inconsistencies correctly preserve source limitations. Primary numerical values were not silently repaired or normalized.

**PROMOTE: no outstanding draft correction identified.** This verdict covers the extraction packet and its `draft_markdown`, not a completed public ingest. Canonical page creation, structured compilation preserving flags, destination updates, generated outputs, routing audits, batch checks, log/index updates and scoped commit remain the parent workflow’s completion gates.



# Audit report — authors2017-risk-assessment-for-children-exposed-to-arsenic

Source: RPIS_11; Ferguson et al. (2018), DOI 10.3390/ijerph15010067.
Audited: 2026-09-11. Independent read-only audit of the extraction packet and draft, not completed ingest.

All 23 PDF pages were read, including references and license. All 15 tables were inspected in primary text and their rendered pages; both Figure 1 maps were inspected at enlarged resolution. Raw SHA-256 independently matches `ce8e0cac176af937ce94af57adc1c1212b739a29d88c77c0dd4c11fc35977745`.

## Check 1 — Numerical fidelity

✅ All 478 current observation slots agree with the primary: 28 Tables 1–3 concentration slots (including two not-applicable entries), 359 Tables 7–15 model slots (including 36 not-applicable entries), and 91 explicit Figure 1 sample labels. These are extraction records, not 478 independent measurements.

- Tables 1–3: all concentration values, depths, statistics and N checked. Chapman depth means/N are 58.5/48, 44.1/47, 19.7/59, 15.2/24, 9.6/24; early 0–15 cm 29.6/13. Colonial depth means/N are 40.7/53 and 17.5/26. Surface-location means/N are Chapman 4.8/4, 94.6/21 and 33.0/36; Colonial unsampled/0, 47.9/40 and 12.0/13. Table 3 preserves means 43.9/40.7, all-area 95% UCLs 63.4/47.7, maxima 262/120 and equivalent-depth maxima 118/120, outfield means 76.5/50.0 and UCLs 87.3/57.7 with the correct separate sample counts. A UCL of a mean is not a concentration percentile.
- Tables 7–15: independently parsed 56/64/45/16/24/90/8/50/6 cells respectively from the primary layout text, then compared all cells to both the structured table and observation representations. No numerical differences. Rendered pages confirm the problematic exponents, headers and missing age label are source errors, not extraction repairs.
- Tables 4–6: all 78 numerical exposure inputs in Table 4, the Table 5 parameter values and six Table 6 categories agree with the source. Inputs remain source-model context, including the distinct pica ingestion assumption and 5206 versus 5207 cm² skin-area entries. Methods preserve 0.33 ingestion RBA, inhalation RBA 1, skin absorption 0.001, contact fraction 0.5, two loading events/day, two hours/day, 169 days/year, 78-year lifetime and the source formulas. Secondary comparators and screening limits are clearly separate from primary soil measurements.
- Figure 1: all 46 Chapman and 45 Colonial label/value pairs match, including the duplicate Chapman SB-16 labels (63.1 and 11.6) and Colonial SB-26B labels (45 and 25.4). Sampling colors yield Chapman 23 July/23 September 2014 and Colonial 20 June/25 August 2014 points. The duplicate identifiers are not silently corrected. Contour values are excluded as interpolations, and maps are not added to table N.
- Public Key numbers all verified: the seven soil-summary rows above; Chapman maximum depth 0–5 cm; Table 12 HQ 2.37 for age 1–2 under the highest-concentration scenario and 9.69 for age 2–3 pica. Public methods' 2014 sampling, 0–15 cm composite definition, two-hour/169-day attendance and 78-year lifetime agree with the primary. HQ values remain attributed unvalidated model outputs, not observed risks or diagnoses.

## Check 2 — Slug vocabulary

✅ The three destination pages exist: `metals/arsenic`, `supply-chain/source-attribution-environmental-burden-apportionment`, and `health/cat-2-non-ingestion-exposure-pathways`. Every record has destination candidates. The environmental hub route is qualified context, not proven source apportionment; the health route is exposure-model context, not personal-care product evidence. No food, baby-wipe, cereal, fish or ingredient route is supported or proposed.

The same-hash, same-DOI legacy canonical page has incorrect year, authors, title, metal scope and products. Retaining its opaque stable key while repairing actual citation metadata and adding `ferguson2018-baseball-fields-arsenic` is appropriate. Primary publication date is 4 January 2018, not receipt in November 2017. Eight authors and CC BY 4.0 license match the PDF.

## Check 3 — Speciation and methods

✅ Corrected metadata distinguishes reported unspeciated soil arsenic (`tAs`, with total-recovery method unreported) from inorganic-arsenic toxicity assumptions. No analytical digestion, moisture basis, arsenic detection limit, arsenic species fraction or human biomonitoring result is invented. Screening limits for pesticides/PAHs are not assigned to arsenic. All model rows are EF-X, not measured doses; all 478 records are excluded from empirical synthesis.

Corrected Tables 12–13 record aggregate exposure route separately from acute/chronic toxicity duration. Model rows now use model-appropriate NA/rounded-zero semantics and distinguish hypothetical exposure periods from the 2014 soil collection dates. Soil null entries 0012/0024 now explicitly state no Colonial infield sample was collected and retain source literals N/A and NA respectively; their null values and differing printed N fields are preserved.

## Check 4 — Part 12 brand firewall

✅ No sampled commercial brand is named or ranked. Named parks are environmental sampling sites. Method software and cited analytical contractors are scientific provenance, not branded product occurrence.

## Check 5 — Part 2 wiki/HMTc firewall

✅ The public draft follows the current template, reports bounded primary findings and avoids clinical advice, safe-play reassurance, regulatory compliance or certification thresholds. Regulatory/toxicological values and external rice/water/China comparisons remain attributed secondary context. No new health-risk calculation is promoted.

## Source contradictions preserved

- Adaptive sampling intensified in contaminated areas; Table 1's 13 early Chapman samples are described as biased low. Table strata overlap; Table 3's infield note says three values while its N column says four. Equivalent-depth summaries are not interchangeable with mixed-depth means.
- Table 7 Colonial age 1–2 ingestion is printed 1.3e-5 although aggregate is 1.3e-4. Table 8 cumulative inhalation values do not equal the displayed age components. Table 10 outfield aggregate doses are below ingestion alone. Table 11 infield dermal and other daily/lifetime correspondences are inconsistent. No silent arithmetic repair is justified.
- Table 14 associates Colonial with 63.4 and Chapman with 47.7, contrary to Table 3; a row after age 2–3 has no age label. The packet preserves printed columns and unresolved age rather than reassigning values.
- Abstract HQ >2.4/>9.7 conflicts with Table 12 2.37/9.69. Prose references a nonexistent cumulative Table 9 row and reports inconsistent percentage changes. The 10.3% added rice/water comparison combines incompatible dose bases. The claim that all cancer risks fit 1e-6–1e-4 conflicts with Table 14 1.6e-4/2.7e-4.
- EF = F prose omits year/day conversion, PEF direction/order is misstated in several passages, and an isolated cancer-concentration sentence uses mg/m³ for soil. Oral MRLs were applied across aggregate routes; source reassurance is not validated guidance. No present-day park risk or remediation status follows from these historical hypothetical scenarios.

## Verdict

**PROMOTE the corrected 478-record draft.** All five checks pass; no outstanding draft correction identified. This verdict is not completed ingestion.

## Recommended next action

All requested corrections were verified in the latest canonical packet, including tAs vocabulary, model duration/route/censoring/period metadata, the expanded source-conflict context and the two not-sampled nulls. Proceed with draft compilation while preserving the distinction between 119 soil-record positions (two not sampled) and 359 unvalidated model positions (36 NA). Canonical repair, destination updates, generated outputs and all batch ingest gates remain separate unfinished work.


# Audit report — pille2021-foamed-hydrogels-metal-removal

Source: RPIS_13, Ann Pille, McGill MSc thesis, December 2021
Audited: 2026-09-11
Scope: independent read-only audit of the extraction packet and draft; compilation and ingest gates excluded.

## Check 1 — Numerical fidelity
✅ All checked primary numeric extraction and conflict dispositions pass.

- Read all 91 physical pages; independently verified the raw SHA-256 `57e9a728e3518c426d9e225e7360eb135c632c3bbadc8196a59250410e52ed99`. Reviewed all 355 observation positions, methods/context tables, figure dispositions and public draft. Inspected physical-page rasters 26/31/36/40 and 54–70, covering every numerical table, both equations and all experimental figures. Figure 1.1 is a secondary process diagram, with no quantitative outcome extracted. Earlier findings are recorded in `audit-010-primary.md`.
- All 24 Table 2.1 cells match, including eight N/A cells, the 6168.16 Å pore-width value, and native m²/g and cm³/g units. Table 2.2's eight formulations × four percentage cells match; source VOL% versus surrounding WT% inconsistency is retained. Table 2.3's six mean/SD values match, with overlapping means linked to Table 2.1 rather than new samples. All native numerical ranges, signs and inequality qualifiers in secondary Tables 1.1–1.5 and 2.4 match the rendered tables.
- Every public Key numbers table value verified: BH/FAH/FAFSH swelling 182±6 / 195±11 / 257±17 g/g, N=6; BET area 0.0436 / 0.0223 / 0.0276 m²/g; Cu approximately 75 / 103 / prose 103.7±1.9 mg/g; Cd approximately 54 / 92 / prose 92.3±9.3 mg/g; Ni approximately 48 / 73 / prose 73.2±12.6 versus chart approximately 80 mg/g. Metal N=3. Means, SDs and graph-reading uncertainty remain distinct.
- Other public quantitative claims match their source locators: approximately 50 mg gel, 50 mL solution, 24 h, pH approximately 5; individual feeds Cu105/Cd109/Ni99 ppm; mixed feeds Cu35/Cd42/Ni35 ppm; mixed BH/FAH/FAFSH removal rounded approximately 17/33/30 Cu, 19/38/34 Cd, 17/29/27 Ni mg/g; water-washed swelling 219/204/285 g/g; eight cycles with FAFSH near 80% at the end; 5 g acrylamide/5 mL acrylic acid, 70°C and 100 mg/L NaCl; thermal N=2. No unit conversion or new clinical calculation was introduced.
- Inspected all retained chart mean and SD positions: Figures 2.6 (15 pairs), 2.7 (16 pairs), 2.8 (15 pairs), 2.9 (6 pairs), 2.10–2.11 (42 pairs), 2.12 (12 pairs), 2.13 (24 pairs), and 2.14–2.15 (18 pairs). Readings agree with primary graphics within the declared tolerances: swelling ±5 g/g, relative-cycle ±5 percentage points, single-metal ±1.5 mg/g, mixed-metal ±0.7 mg/g; thermal endpoints ±2 percentage points. The packet contains 283 approximate values, 24 null observation positions (eight Table 2.1 N/A plus sixteen unresolved SDs), and separately dispositioned eight unresolved early Figure 2.7 means with their SDs. No unavailable point or SD was filled with zero. Cycle-1 100% values are normalization references.
- Source conflicts remain visible: 24h/257 versus prose 48h/256; Figure 2.8's lower endpoints; Figure 2.9 SD discrepancies; Ni prose versus Figure 2.14; formulation percentage basis; original/regenerated pH claims and differing maxima; reuse methods versus three plotted structures; differing initial mixed concentrations. Figure 2.7's drying-method trajectories are not collapsed into the prose's 220→181 comparison.
- Requested correction verified: regenerated Table 2.1 records 0013/0017/0021 no longer inherit the original-gel Table 2.3 timing-conflict note. All endpoint bases now distinguish aqueous concentration, operational mass removal, swelling, BET/pore properties, relative percentages, thermal percentages, ANOVA probabilities, spike deviations and initial swelling rate.
- Final source-typo disposition verified: physical page 69 first reports the structure p-value as 8.55×10⁻¹¹ (correctly retained in observation 0043), but repeats it as 8.55×10¹¹ later on the same page. The impossible positive-exponent repeat is recorded as a source conflict, while the valid first occurrence remains unchanged.

## Check 2 — Slug vocabulary
✅

- All four proposed destinations exist: `mitigation/remediation-evidence`, `metals/copper`, `metals/cadmium`, `metals/nickel`. Their draft destination summaries maintain laboratory-treatment scope and native dry-gel capacity units.
- Product and ingredient lists are empty. Misfiled baby-wipe folder placement creates no product route. Secondary potato-tuber biochar evidence remains a discovery candidate, without a Pille food-observation route.
- Ann Pille is correctly the sole thesis author, year 2021, no thesis DOI invented. The 2021 SSRN manuscript and 2022 journal article are separately identified versions with likely shared experiments, not independent cohorts. Full published-version reconciliation remains an explicit gap.

## Check 3 — Speciation and methods
✅ Final species qualification verified; methods and fitness checks pass.

- Both equations match their rendered originals. The dry-gel mass-removal calculation uses measured supernatant volume; the draft correctly explains retained liquid as a possible contribution and does not claim directly assayed bound metal. Failed gel digestion is disclosed.
- Six swelling replicates, three metal replicates and two thermal replicates are correctly distinguished. No raw measurements, independent synthesis-batch count, analytical detection limits, metal reuse cycles, real-wastewater validation, leaching result, isotherm qmax or equal-molar selectivity constant is invented.
- Source Cu/Ni/Zn methods typo is explicitly contrasted with reagents/results Cu/Cd/Ni. No Zn outcome is routed.
- Final qualification verified: Cu(II)/Cd(II)/Ni(II) identify prepared input species; the corrected draft and structured methods explicitly state that ICP-OES measures elemental metal and does not verify oxidation states after treatment. All relevant records preserve this distinction.
- All 355 records have unique IDs, the same related-study cohort, and explicit exclusion from empirical synthesis. Repeated controls, time points, cycle references and thesis/article versions are not counted as independent samples. EF-3 qualified laboratory remediation/material evidence is appropriate.

## Check 4 — Part 12 brand firewall
✅

- Pluronic F127 identifies the experimental foam-stabilizing reagent. Instrument/vendor names identify scientific methods. No consumer-brand contamination findings or rankings are created.

## Check 5 — Part 2 wiki/HMTc firewall
✅

- Draft and four destination summaries describe literature-supported laboratory findings, with no live limits, certification calculations, consumer advisories or clinical claims. Secondary policy ranges are explicitly unverified legal context. The article-version link is a provenance/cohort precaution, not an independent corroboration claim.

## Verdict
PROMOTE — corrected source draft and 355-record extraction packet only. All five checks pass. Source-internal contradictions and unavailable graph positions remain disclosed limitations, not invented repairs.

## Recommended next action
Proceed to compilation and required repository gates while preserving approximation, species, source-conflict, cohort and exclusion metadata. Canonical source creation, route compilation, evidence-register checks, generators, index/log updates and scoped commit remain separate ingest gates.

## Final correction verification

- Re-read the corrected canonical packet after parent notification: all native endpoint bases and regenerated-gel timing notes are corrected.
- Structured analytical methods and the public draft now explicitly distinguish prepared Cu(II)/Cd(II)/Ni(II) from elemental ICP-OES measurements. All 51 ion-associated records carry `species_basis` and `post_treatment_species_verified: false`.
- The page-69 valid first p-value and impossible positive-exponent repeat are both retained in structured context and an ANOVA-typo gap, without manufacturing a second statistical result.
- Final verdict above supersedes the intermediate REVISE. No repository file was edited and no generator or ingest gate was run by this auditor.
