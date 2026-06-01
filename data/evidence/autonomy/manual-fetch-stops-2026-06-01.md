# Manual-fetch ingest stop notes — 2026-06-01

## STOP: MFK_01-ijerph-19-14760-2022 — out of HMI analyte scope

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_03_Diapers/03_Diapers/01_ijerph-19-14760_2022.pdf`

**Suggested handle:** MFK_01-ijerph-19-14760-2022

**Citation:** Bernard A, Dudler V. Health Risk Assessment of Dermal Exposure to Polycyclic Aromatic Hydrocarbons from the Use of Infant Diapers. Int J Environ Res Public Health. 2022;19(22):14760. DOI: 10.3390/ijerph192214760

**Reason for stop:** Paper is entirely PAH-focused. Measures only the 16 U.S. EPA priority polycyclic aromatic hydrocarbons (benzo[a]pyrene, naphthalene, phenanthrene, anthracene, fluoranthene, pyrene, dibenzo[a,h]anthracene, benzo[g,h,i]perylene, benzo[a]anthracene, indeno[1,2,3-cd]pyrene, chrysene, benzo[b]fluoranthene, benzo[k]fluoranthene, acenaphthene, acenaphthylene, fluorene) in diaper core, top sheet, back sheet, and fastening tapes. No heavy metals data anywhere in the paper — verified by reading all 12 pages including Tables 1–7 (all PAH concentrations and dose calculations) and the conclusions.

PAHs are organic compounds, not metals. They are not in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). HMI source pages that mention PAH do so only peripherally as part of broader contaminant lists in regulator dossiers or total-diet studies; this paper has no metals analyte to anchor on.

**Identity checks (clean — no existing wiki page):**
- DOI grep (10.3390/ijerph192214760, 192214760, 14760_2022): no matches
- Author grep (bernard.*dudler, 14760): no matches
- Suggested-handle grep (MFK_01-ijerph-19-14760): no matches

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** The 03_Diapers folder still contains 9 other PDFs. Several may be in scope (e.g., the ANSES 2019 dossier `07_CONSO2017SA0019EN_2019.pdf` evaluates multiple hazardous chemicals including metals; `09_preliminary-estimation-of-undesired-substances-in-diapers_2019.pdf` likely covers metals; the others should be evaluated individually). This is a per-paper stop, not a folder-exhaustion stop.

**Recommendation for Karen:** If PAH-only diaper papers should be ingested for cross-contaminant context on the diaper product page (parallel to the way PAH appears on `oehha2000-appendix-f-dermal-uptake-soil.md` and similar dermal-exposure references), expand the analyte vocabulary or define a "co-contaminant context" source-type tag before resuming. Otherwise this PDF stays out and can be moved to a `out-of-scope/` review pile.

## STOP: MFK_03-new-diaper-study-final-2015 — out of HMI analyte scope (phthalates-only)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_03_Diapers/03_Diapers/03_New_Diaper_study_FINAL_2015.pdf`

**Suggested handle:** MFK_03-new-diaper-study-final-2015

**Citation:** Toxics Link. Phthalates or Phthalates-free Diaper: Money Matters. New Delhi, India: Toxics Link; 2021. Supervised by Piyush Mohapatra; research and compiled by Alka Dubey. (Filename year `_2015` is misleading; the report is the 2021 publication of 2019 primary research that builds on a prior 2019 Toxics Link study. No DOI; ISBN not stated.)

**Reason for stop:** Paper is entirely phthalates-focused. Two studies are reported:
- 2019 prior study: 20 diaper samples from Delhi market, analyzed for DEHP, BBP, DIBP, DBP (Table 1; max total phthalates 302.25 ppm; DEHP range 2.36–264.94 ppm).
- 2020/current study: 15 e-platform-sourced "organic/chemical-free/phthalate-free" diapers, analyzed for DEHP, BBP, DEP, DIBP (Table 2; DEHP detected in 14/15 samples 2.2–7.78 ppm; BBP in 7/15 samples up to 4.44 ppm).

All five measured analytes (DEHP, BBP, DBP, DIBP, DEP) are phthalate esters — organic plasticizers. None are in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn).

The introduction lists "tributyl-tin" as one chemical type that can occur in diapers (p.1, "These chemicals may cause itching, rashes..."), and sample TL-BD-9 was *labeled* by its manufacturer as "Free from heavy metals and allergens" (Table 2). But the study did **not** measure tin, lead, cadmium, arsenic, or any other metal — verified by reading all 8 pages including both data tables, the analysis sections, the regulations summary (which cites EU 2001/95/EC, GB 15979-2002, MFDS rules, JHPIA voluntary standards — none specifically for metals in diapers), and the endnotes. No metals tables, no metals quantification, no metals exposure calculation.

Parallel to the prior MFK_01 PAH-only stop in the same folder. Phthalates in diapers are a legitimate exposure concern but they are out of HMI scope unless/until Karen expands the analyte vocabulary.

**Identity checks (clean — no existing wiki page):**
- Title/publisher grep (`toxics.?link`, `Phthalates.or.Phthalates.free`): only `johnson2012-cpsc-astm-f963-status.md` matched (false-positive on "toxics" substring; not this paper)
- Filename grep (`New_Diaper_study_FINAL_2015`, `03_New_Diaper`): no matches
- Suggested-handle grep (`MFK_03-new-diaper`, `toxics-link-diaper`, `toxicslink2021`): no matches

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** 8 PDFs remain after this stop (01 and 03 both stopped). Continue evaluating each individually. The Smajgl/Obhodaš tin-in-diapers paper (`04_Smajgl_Obhodas2014...`) IS in scope (Sn is an HMTc analyte). The 2002 EHP paper, 2024 toxics paper, ANSES 2019 dossier, and the 2019 "undesired substances" paper likely cover metals; the 2023/2022 ijerph papers and the 2000 CIB6678 paper should be evaluated.

**Recommendation for Karen:** Same as for the MFK_01 PAH stop — if phthalates-in-diapers context belongs on the diaper product page as a co-contaminant signal (paralleling how DEHP/DBP appear adjacent to metals in EU REACH dossiers and ANSES diaper reports), expand the analyte vocabulary or define a "co-contaminant context" source-type tag. Otherwise this PDF stays out and can be moved to an `out-of-scope/` review pile alongside MFK_01.

## STOP: MFK_05-ehp0110-000023-2002 — out of HMI analyte scope (dioxins-only)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_03_Diapers/03_Diapers/05_ehp0110-000023_2002.pdf`

**Suggested handle:** MFK_05-ehp0110-000023-2002

**Citation:** DeVito MJ, Schecter A. Exposure Assessment to Dioxins from the Use of Tampons and Diapers. Environ Health Perspect. 2002;110(1):23–28. Available at http://ehpnet.niehs.nih.gov/docs/2002/110p23-28devito/abstract.html. Received 28 February 2001; accepted 21 June 2001; online 10 December 2001. Affiliations: NHEERL, U.S. EPA, Research Triangle Park, NC; University of Texas School of Public Health at Dallas.

**Reason for stop:** Paper is entirely dioxins/dibenzofurans-focused. Analyzed all 17 of the 2,3,7,8-chloro-substituted polychlorinated dibenzo-*p*-dioxins (PCDDs) and polychlorinated dibenzofurans (PCDFs) included in the WHO TEF methodology — extracted by ERGO Research Company (Hamburg) — in four brands of tampons (A rayon, A cotton, B, C, D) and four brands of infant diapers (E, F, G disposable; cotton). Tables 1–4 (verified on pages 3–4 of the PDF) report only PCDD/PCDF congener concentrations (pg/g), TEQs (pg TEQ/g and pg TEQ/kg/day), and ratios of diet-to-product exposure. Headline findings: total dioxins in tampons 1.5–23.6 pg/g, brand D notably higher due to 2,3,4,7,8-pentachlorodibenzofuran; refined-analysis tampon exposures 13,000–240,000× lower than dietary; diaper exposures 30,000–2,200,000× lower than dietary. Conclusion: tampons and infant diapers do not significantly contribute to dioxin exposure in the United States.

None of the 17 measured congeners (e.g., 2,3,7,8-TCDD, OCDD, 1,2,3,4,6,7,8-HpCDD, OCDF, 2,3,7,8-TCDF, 1,2,3,7,8-PeCDF, 2,3,4,7,8-PeCDF, all HxCDFs, all HpCDFs) are in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Dioxins are halogenated aromatic organic compounds, not metals. Verified by reading all 6 pages including all 4 data tables, methods (PCDD/PCDF extraction at ERGO, TEF methodology, partition coefficients K_p for TCDF only), discussion, and the full references list (page 28: all 32 cited works are dioxin-, PCB-, PAH-, or pulp-bleaching-related; not one metals reference).

Parallel to the MFK_01 PAH-only stop and the MFK_03 phthalates-only stop in the same folder. The DeVito & Schecter paper is a high-quality A-tier piece of work on dioxin exposure from sanitary products, but it falls completely outside HMI's analyte vocabulary.

**Identity checks (clean — no existing wiki page):**
- DOI/URL grep (`ehp0110-000023`, `110p23-28devito`, `10.1289/ehp.0211023`): no matches
- Author/title grep (`DeVito.*Schecter`, `tampons and diapers`, `tampons and infant diapers`): no matches
- Suggested-handle grep (`MFK_05-ehp0110`, `05_ehp0110-000023`): no matches

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** This is the third out-of-scope stop in the `_extracted_infantcontact_03_Diapers/03_Diapers` folder (MFK_01 PAH, MFK_03 phthalates, MFK_05 dioxins). Three distinct organic-contaminant classes — PAH, phthalates, dioxins — all out of HMI scope. Remaining un-evaluated PDFs in the folder: the 2002 EHP paper is now closed; still to evaluate are 02 (2024 toxics), 04 (Smajgl/Obhodaš tin — in scope, Sn is HMTc), 06–09 (ANSES 2019, undesired-substances 2019, ijerph 2022/2023, CIB6678 2000).

**Recommendation for Karen:** The pattern is now firm enough to act on. Three out of the first five evaluated PDFs in this diaper folder are organics-only (PAH, phthalates, dioxins). One of two things is appropriate:
1. Move the three out-of-scope PDFs (01, 03, 05) to an `out-of-scope/` or `organics-context/` pile so the folder drains faster on the in-scope PDFs (04, and probably 06/07/09).
2. Expand HMI's analyte vocabulary or define a "co-contaminant context" source-type tag so diapers can carry a unified contaminant story (metals + PAH + phthalates + dioxins) on the product page, paralleling the way EU REACH and ANSES diaper dossiers treat them together.

Either decision is fine; the current behavior (per-PDF stop notes accumulating) is the safe default until Karen picks one.

## STOP: MFK_06-unknown — out of HMI scope (CPSIA §104 physical-safety crib NPR, not chemical)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantdurable_01_Cribs_Bassinets_Enclosures/01_Cribs_Bassinets_Enclosures/06_Unknown.pdf`

**Suggested handle:** MFK_06-unknown

**Citation:** U.S. Consumer Product Safety Commission. Briefing package and draft Notice of Proposed Rulemaking — Proposed Standards for Full-Size and Non-Full-Size Cribs under Section 104 of the Consumer Product Safety Improvement Act. CPSC Office of the General Counsel (Falvey, Chao, Pollitzer) and Directorate for Engineering Sciences (Howell, Edwards). Cleared for public release 30 June 2010 under CPSA 6(b)(1). Decision meeting scheduled 14 July 2010.

**Reason for stop:** Document is the CPSC staff briefing package + draft NPR for **physical/mechanical** crib safety under **CPSIA Section 104** (durable infant and toddler products). This is a different rulemaking from CPSIA Section 101 (lead content in children's products), which is what the recent on-topic CPSIA ingests covered (`cpsc2009-cpsia-101-procedures-npr`, `cpsc2009-cpsia-101b-inaccessibility-rule`). The proposed rule would adopt ASTM F 1169-10 (full-size cribs) and ASTM F 406-10 (non-full-size cribs) with modifications, and revoke 16 CFR parts 1508 and 1509.

Substantive content (verified by reading pages 1–11 of 11+ ; the appendix tabs extend the document further but follow the same physical-safety framing):
- Slat disengagement, drop-side hardware failures, mattress support integrity, wood-screw loosening, mis-assembly of key components, sharp points / scissoring openings, slat strength, cyclic side (shake) tests (Health Canada SOR/86-962 adaptation), mattress support vertical impact test, slat/spindle torque, dimensional requirements for full-size vs non-full-size cribs.
- Incident-data narrative: 3,584 EWS crib incidents Nov 2007 – Apr 2010; 153 fatalities (111 sleep-environment, 36 structural/entrapment, 6 unknown circumstances); 1,703 non-fatal injuries; hazard-pattern categories of falls, drop-side problems, limb-between-slats entrapment, wood-related breakage, mattress-support failure, mattress-fit, paint/finish, and miscellaneous structural issues.
- ANPR stakeholder comments (JPMA, Pacific Rim Woodworking, AAP, Kids In Danger / Consumers Union / CFA / Keeping Babies Safe / USPIRG, ASTM F15.18 chair), April 2009 CPSC Crib Roundtable presentations, and 2002–2008 CPSC↔ASTM correspondence — all on the physical-safety topics above.

**Only heavy-metals-adjacent content in the entire document** (page 11): "Another three percent of the reports were complaints of paint-related issues. The vast majority reported concerns for a possible choking hazard or lead exposure resulting from children chewing on paint chips that came off easily from the crib surface. Five cases reported a positive lead test result: two were associated with cribs that were recalled for the presence of lead paint, two did not specify the lead level that was detected by consumers who were using home test kits, and one reported an increased lead level in the child but there was no indication that it was related to the crib." That is the full extent of heavy-metals signal — no quantitative measurement, no analytical method, no contamination distribution, no exposure calculation. Five anecdotal consumer reports out of 3,584 (~0.14 %) referenced lead, three of which are unverified home-test-kit reports. There is nothing in the document that would support a `Key numbers` block or an evidence-register row for any HMI analyte.

This is a different failure mode from the MFK_01/03/05/07 organics-only stops above. Those papers do quantitative chemical work, just on the wrong analytes. This paper does no chemical work at all — it is a regulatory-process document about mechanical safety standards. Ingesting it as an HMI source would require either (a) fabricating chemical content not present in the source, or (b) creating a regulatory-context page whose body would be ~99 % off-topic and would dilute the corpus without supporting any wiki claim.

**Identity checks (clean — no existing wiki page):**
- Folder-substring grep (`Cribs_Bassinets_Enclosures`, `06_Unknown`): no matches
- Suggested-handle grep (`MFK_06-unknown`): no matches
- ASTM-standard grep (`F 1169-10`, `F1169-10`, `ASTM F 406-10`): no matches
- CPSIA-§104 grep (`cpsia.*section.104`, `section 104.*cpsia`): no matches
- The two related on-topic CPSIA ingests (`cpsc2009-cpsia-101-procedures-npr`, `cpsc2009-cpsia-101b-inaccessibility-rule`) are §101 documents about lead content; this June 2010 §104 NPR is a separate rulemaking thread and is not redundant with them.

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** First evaluated PDF in `_extracted_infantdurable_01_Cribs_Bassinets_Enclosures/01_Cribs_Bassinets_Enclosures`. Remaining PDFs in the folder are `00_Products Covered.pdf`, `03_Unknown.pdf`, `07__Toxic Chemicals in Toys and Packaging - Toys.pdf`, `08_Unknown.pdf`. The `07_` filename strongly suggests it is on-topic (toxic chemicals in toys, parallel to CPSIA §101 lead content); the three `Unknown` PDFs need individual evaluation. The folder is plausibly mixed-scope: some CPSC §101 (lead) documents would be on-topic; CPSC §104 (physical safety) documents like this one are not.

**Recommendation for Karen:** Treat CPSIA §104 documents as out of scope for HMI by default. §104 governs mechanical safety of durable infant products; HMI cares about §101 (lead) and §108 (phthalates is also organic, so still out unless analyte vocabulary expands). If `03_Unknown.pdf` and `08_Unknown.pdf` are also §104 NPRs / briefing packages for other durable-infant categories (toddler beds, high chairs, bath seats, gates, play yards, etc.), they will hit the same stop. A quick way to filter the folder is to skip any CPSC document whose subject line says "Section 104" without also touching paint, lead content, or another HMI analyte — `00_Products Covered.pdf` is probably a §104 scope-list document and likewise out of scope.

## STOP: MFK_07-fillable-articles-made-from-melamine-formaldehy — out of HMI analyte scope (melamine + formaldehyde only)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantcontact_04_Feeding_Accessories/04_Feeding_Accessories/07_fillable-articles-made-from-melamine-formaldehyde-resin_2022.pdf`

**Suggested handle:** MFK_07-fillable-articles-made-from-melamine-formaldehy

**Citation:** BfR (German Federal Institute for Risk Assessment). Fillable articles made from melamine formaldehyde resin, such as *coffee-to-go* cups sold as 'bambooware', may leak harmful substances into hot foods. BfR opinion No 046/2019 issued 25 November 2020. DOI 10.17590/20200123-134155.

**Reason for stop:** Opinion is entirely about migration of melamine and formaldehyde — the two monomers of melamine formaldehyde resin (MFR) — from "conventional" MFR tableware and "bambooware" (MFR with bamboo-fibre, rice-husk, or coffee-residue fillers) into hot food simulants. Verified by reading pages 1–15 (subject of assessment, results, formaldehyde toxicological characterisation with TDI 0.6 mg/kg bw/day and C_max 10.4 mg/l, melamine toxicological characterisation with TDI 0.2 mg/kg bw/day) and pages 30–40 (risk characterisation for formaldehyde with Tables 14/15 of intake-vs-TDI, risk characterisation for melamine, derivation of revised SMLT of 6.0 mg/kg food for formaldehyde, repeated-migration tests Figures 4–5, recommendations).

Migration evidence base: 366 MFR articles (138 'conventional' MFR, 228 'bambooware') tested for formaldehyde release; 291 articles (111 'conventional' MFR, 180 'bambooware') tested for melamine release; testing performed by German food monitoring authorities 2014–2019 under Regulation (EU) No 10/2011 hot-fill conditions (2 h at 70 °C with 3% acetic acid simulant). No heavy-metal analyte (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) is mentioned, measured, modelled, or referenced anywhere in the opinion. Melamine (1,3,5-triazine-2,4,6-triamine) is a heterocyclic organic compound; formaldehyde (methanal) is an organic carbonyl. Neither is in HMI's 10-analyte vocabulary.

This is parallel to the previously-stopped MFK_01 (PAH-only), MFK_03 (phthalates-only), and MFK_05 (dioxins-only) entries — same pattern of high-quality regulator-grade FCM migration evidence on an organic contaminant class outside HMI scope. The precedent for partial-coverage ingest is `cfs2012-baby-bottles-tableware.md`, which was ingested because its Annex II carries an explicit Pb/Cd/Ni/Cr/Cr-VI/Al table; this BfR 046/2019 opinion has no analogous heavy-metals section.

**Identity checks (clean — no existing wiki page):**
- DOI grep (`10.17590/20200123-134155`, `046/2019`, `046-2019`): no matches
- Filename grep (`07_fillable-articles-made-from-melamine`, `fillable.*melamine`): no matches
- Suggested-handle grep (`MFK_07-fillable-articles-made-from-melamine`): no matches
- Substance-context grep (`melamine`, `formaldehyde` across `wiki/sources/`): 9 files match, all peripheral mentions in heavy-metals contexts (e.g., diaper/FCM regulator dossiers); none is this BfR opinion

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** First out-of-scope stop in the `_extracted_infantcontact_04_Feeding_Accessories/04_Feeding_Accessories` folder. Other PDFs in the folder should be evaluated individually; "feeding accessories" is a broad scope and some entries likely cover heavy metals (cutlery, plates, sippy cups, weaning sets are common Pb/Cd/Ni surfaces).

**Recommendation for Karen:** Same standing recommendation as for MFK_01/03/05: either move the four organics-only stops (MFK_01 PAH, MFK_03 phthalates, MFK_05 dioxins, MFK_07 melamine+formaldehyde) to an `out-of-scope/` or `organics-context/` pile so future Kimi folder sweeps skip them automatically, or expand HMI's analyte vocabulary / define a "co-contaminant FCM context" source-type tag so feeding-accessory and diaper product pages can carry a unified contaminant story (metals + organics) paralleling EU REACH, ANSES, and BfR dossiers. The pattern is now consistent across two folders (03_Diapers and 04_Feeding_Accessories) and four contaminant classes (PAH, phthalates, dioxins, MFR monomers); a single decision settles both folders and any future folder sweep.

## STOP: MFK_09-unknown — out of HMI subject-matter scope (mechanical safety regulatory economics)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantdurable_02_Strollers_Walkers_Swings/02_Strollers_Walkers_Swings/09_Unknown.pdf`

**Suggested handle:** MFK_09-unknown

**Citation:** Industrial Economics, Incorporated (IEc) for U.S. Consumer Product Safety Commission. *Full-Size Cribs and Non-Full-Size Cribs Standards Rule Review: Final Contractor Technical Report.* Cambridge, MA: IEc; August 2020. Contract CPSC-D-15-004, Task Order 61320619F1109. (Summary Report dated May 27, 2020.) No DOI; agency-commissioned technical report.

**Reason for stop:** Document is a 71-page Regulatory Flexibility Act §610 retrospective review of CPSC's 2010 mandatory mechanical-safety standards for full-size cribs (16 CFR 1219) and non-full-size cribs (16 CFR 1220), promulgated under §104 of the Consumer Product Safety Improvement Act of 2008 (the Danny Keysar Child Product Safety Notification Act). It analyses the *economic burden of the mechanical rule* on small-business crib suppliers — slat strength requirements, drop-side elimination, mattress-support strength, label/warning changes, third-party-testing intervals, and record-keeping. Evidence base: interviews with 9 current/former crib suppliers (6 phone, 3 written) drawn from a frame of 89 firms.

Verified across pages 1–30 (cover, executive summary, Chapter 1 introduction & methodology, Chapter 2 affected-supplier characterisation, Chapter 3 §3.1–3.2 sample summary and Exhibit 3-3 supplier responses, §3.2.1–3.2.5 counterfactual/responses/testing/market/suggestions, §3.3 conclusions, appendix Q&A for Supplier 1). No heavy-metal analyte (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) is measured, modelled, quantified, or used to set any threshold. The acronyms list (p. ii) contains `XRF — X-ray fluorescence`, but the only in-body uses of XRF are:
- §3.2.5 (p. 3-11): "considering other types of testing machines that would reduce the overall cost of testing (e.g., X-ray fluorescence [XRF] tester)" — suggestion to substitute XRF for destructive mechanical testing.
- Exhibit 3-3 row 2 (p. 3-5): "Consider allowing certain types of machines that are cheaper for testing (e.g., XRF tester)."

Footnote 17 (p. 3-4) mentions "testing requirements, such as testing for phthalates and lead, as well as testing component parts" — a single passing reference noting CPSIA's separate lead/phthalates rules, *not* lead measurements in cribs. No lead values, no migration data, no exposure calculation, no regulatory threshold for any metal appears in the report.

The folder context `_extracted_infantdurable_02_Strollers_Walkers_Swings` is also a misfile — the document is about cribs, not strollers/walkers/swings. But regardless of product-category mislabelling, the document's subject (mechanical safety standards economic-impact review) is structurally outside HMI's analyte and synthesis scope.

This is parallel to the MFK_01/03/05/07 organics-only stops in pattern but distinct in failure mode: those four documents are high-quality contaminant studies on non-metal analytes; this one is a regulatory-economic interview report with no contaminant data at all. The CPSC regulatory layer that *would* be in scope (16 CFR Part 1303 lead-in-paint, 16 CFR Part 1500 lead-content limits under CPSIA §101, CPSC's children's-product lead and phthalate testing rule 16 CFR 1107) is referenced only obliquely in footnotes 16–17 as "other federal rules" the suppliers also comply with; the substantive content of those rules is not analysed here.

**Identity checks (clean — no existing wiki page):**
- DOI / contract-ID grep (`CPSC-D-15-004`, `61320619F1109`, `Full-Size Cribs and Non-Full-Size Cribs Standards Rule Review`): no matches
- Suggested-handle / filename grep (`MFK_09-unknown`, `09_Unknown.pdf`, `02_Strollers_Walkers_Swings.*09_Unknown`): no matches
- Cite-key candidate grep (`iec2020-cpsc-crib-rule-review`, `cpsc2020-crib-rule`, `industrial-economics.*crib`): no matches
- 16 CFR rule grep (`16 CFR 1219`, `16 CFR 1220` across `wiki/sources/`): no matches; these mechanical-safety rules are not currently referenced anywhere in the wiki corpus

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** First out-of-scope stop in the `_extracted_infantdurable_02_Strollers_Walkers_Swings/02_Strollers_Walkers_Swings` folder. The folder label suggests stroller / walker / swing content, so other PDFs may also be misfiled — but each should be evaluated individually before being skipped. Infant durables (cribs, strollers, walkers, swings, high chairs) are plausible Pb/Cd/Cr surfaces (paint, coatings, plastic, fabric) and the folder is worth working through.

**Recommendation for Karen:** This stop is structurally different from the four MFK organics-only stops. The MFK_01/03/05/07 stops can be resolved by an analyte-scope decision; this one cannot, because no analyte is measured at all. Two options: (a) move `09_Unknown.pdf` to an `out-of-scope/` pile alongside the organics-only stops with a different sub-tag (e.g., `regulatory-economic-context/`) so it is not re-attempted; (b) leave it in the Kimi corruption folder and accept that the next sweep over this folder will land on it again and re-stop. Option (a) avoids re-work; option (b) preserves the raw filesystem layout. No content decision needed.

## STOP: MFK_15-unknown — out of HMI analyte scope (phthalates-only) + brand-firewall

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantdurable_02_Strollers_Walkers_Swings/02_Strollers_Walkers_Swings/15_Unknown.pdf`

**Suggested handle:** MFK_15-unknown

**Citation:** Schreder E. Not So Squeaky Clean: A Study of Phthalates in Toys. Washington Toxics Coalition, for the Toxic-Free Legacy Coalition. 2008. www.watoxics.org / www.toxicfreelegacy.org. ~8-page advocacy/testing report; no DOI.

**Reason for stop:** Paper measures only phthalates (DEHP, BBP, DBP, DNOP, DEP, DIBP, DIDP, DINP, DMP, plus one unidentified octyl C8 phthalate) by GC/MS in 20 PVC toys. The handheld Innov-X XRF analyzer mentioned in Appendix I is described as capable of detecting Pb, Cd, Cl, Br, Sn, Sb, but per the methods text the XRF was used *only* to identify PVC presence via chlorine detection — no heavy-metals quantification is reported. The Executive Summary mentions Pb and Cd as co-occurring contaminants in PVC toys but explicitly attributes that finding to a different 2007 Ecology Center study (cited at footnote 1, `www.healthytoys.org`), not to this report's own testing. Verified by reading the cover, acknowledgments, Executive Summary, Key Findings, Phthalates: Hidden Danger in the Toy Box, Phthalate Testing Results (Table 1 + Table 2), Results, Solutions, Appendix I: Methods, and References.

Phthalates are organic plasticizers (di-ester compounds), not metals; they are not in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). This is the same failure mode as MFK_03-new-diaper-study-final-2015 (also phthalates-only).

**Secondary firewall concern:** Table 1 is structured as a brand-ranking table — every quantitative phthalate value is attached to a specific named brand/manufacturer (Mattel/Fisher-Price, Mattel/Disney Princess, Götz, Target, NA, Hasbro/My Little Pony, Geoffrey/Toys R Us, Wal-Mart, Kmart/Just Kidz, Hasbro/Playskool, Learning Resources, Lakeshore Learning, Fred Meyer purchase points). Per Part 12 brand-firewall, even if the analytes were in scope, the only quantitative content available for extraction is brand-by-brand and could not be reproduced verbatim. Only category-level summaries would be permissible — but at the category level the data reduces to "9/20 PVC toys contain phthalates at 0.4–47.5%," which carries no metals signal.

**Folder filing mismatch:** PDF is filed under `_extracted_infantdurable_02_Strollers_Walkers_Swings/02_Strollers_Walkers_Swings/` but the report's subjects are toys (dolls, balls, squeeze toys, dinosaur figurine, Tinkertoys, Tonka car, play food) — not strollers, walkers, or swings. The Kimi extractor appears to have misclassified the file. The product-category surface this paper would touch (if it were in scope) is `wiki/products/toys-*` or a children's-product page, not stroller/walker/swing pages.

**Identity checks (clean — no existing wiki page):**
- Author / title grep (`Squeaky Clean`, `Schreder`, `Washington Toxics Coalition.*phthalate`, `Not So Squeaky`): no matches
- Suggested-handle / filename grep (`MFK_15-unknown`, `15_Unknown.pdf`, `15-unknown`, `02_Strollers_Walkers_Swings.*15`): no matches
- No DOI to grep (advocacy report)

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** Second out-of-scope stop in the `_extracted_infantdurable_02_Strollers_Walkers_Swings/02_Strollers_Walkers_Swings` folder (after `09_Unknown.pdf`). The folder now has two confirmed misfilings: a CPSC crib-rule economic-review report (`09_Unknown.pdf`) and this WTC phthalates-in-toys advocacy report (`15_Unknown.pdf`). Other `*_Unknown.pdf` files in this folder are at elevated risk of being similarly off-scope and warrant individual evaluation rather than blanket processing.

**Recommendation for Karen:** Same as MFK_03-new-diaper-study-final-2015 — this is an organics-only (phthalates) testing report with no metals analyte to anchor on. Either (a) expand HMI analyte vocabulary to include co-occurring plasticizers as cross-contaminant context (large policy decision; not recommended for one report), or (b) move `15_Unknown.pdf` to an `out-of-scope/phthalates-only/` review pile so it is not re-attempted. The brand-firewall concern is a secondary lock — even with a vocabulary expansion, this specific source is mostly unusable at the granularity its data is reported.

## STOP: MFK_05-unknown (carriers/highchairs/carseats) — out of HMI analyte scope (flame retardants only)

**PDF:** `raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantdurable_03_Carriers_HighChairs_CarSeats/03_Carriers_HighChairs_CarSeats/05_Unknown.pdf`

**Suggested handle:** MFK_05-unknown

**Citation:** Cooper EM, Kroeger G, Davis K, Clark CR, Ferguson PL, Stapleton HM. Results from Screening Polyurethane Foam Based Consumer Products for Flame Retardant Chemicals: Assessing Impacts on the Change in the Furniture Flammability Standards. Environ Sci Technol. 2016;50(19):10653–10660. DOI: 10.1021/acs.est.6b01602. Received 31 March 2016; revised 8 August 2016; accepted/published 23 August 2016. ACS AuthorChoice open access. Nicholas School of the Environment, Duke University. NIEHS grant P42ES010356.

**Reason for stop:** Paper measures only seven additive **organic flame retardants** in polyurethane foam (PUF) from 1141 household samples submitted to Duke's free public screening service Feb 2014 – Jun 2016:
- **PentaBDE** (commercial mixture: BDE congeners 47, 85, 99, 100, 153, 154 — polybrominated diphenyl ethers)
- **Firemaster 550 / FM550** (mixture: TPHP, isopropylated TPHP isomers, TBB/EHTBB, TBPH/BEHTBP)
- **Firemaster 600 / FM600** (V6 = 2,2-bis(chloromethyl)propane-1,3-diyl tetrakis[2-chloroethyl]bis[phosphate])
- **TDCIPP** (tris(1,3-dichloroisopropyl)phosphate) — most frequently detected (24% of samples), Prop 65-listed
- **TCIPP** (tris(1-chloro-2-propyl) phosphate)
- **TBPP** (a nonhalogenated aryl phosphate mixture with mono- and tributylated TPHP)
- **TPHP** (triphenyl phosphate)

Headline findings (verified by reading all 8 pages including Table 1 product-category counts, Figure 1 product-by-FR pie charts, Figure 2 temporal trend stacked bars, Figure 3 sofa pre/post-2005 bar chart, Figure 4 pre/post-2014 sofa & car-seat charts, and the full references list pages 7–8): 52% of all 1141 samples contained an FR >1% by weight; among 7 major product categories n_chairs=130, n_mattress_pads=106, n_child_car_seats=98, n_mattresses=71, n_other_child_products=49, n_rocking_chairs_and_recliners=44, n_sofas_and_loveseats=451, n_child_mattresses=36; FR detection in child car seats decreased significantly from 91% (purchased 2009–2013) to 50% (purchased post-2014), p<0.0001. TDCIPP detection in child car seats decreased 77% → 48% pre/post-2014; TCIPP rose 29% → 52% as a likely TDCIPP replacement. Across sofas/loveseats, FR detection fell 60% (pre-2014) → 29% (post-2014) following TB-117-2013 amendment and 2011 Prop 65 listing of TDCIPP.

None of the seven measured analytes (BDE-47, -85, -99, -100, -153, -154; TPHP; iso-TPHP; EHTBB; BEHTBP; V6; TDCIPP; TCIPP; TBPP) are in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Brominated diphenyl ethers contain bromine (a halogen, non-metal); organophosphate flame retardants contain phosphorus and chlorine — also non-metals. No metals analyte, no metals method, no metals quantification appears anywhere in the paper. The 34-citation reference list is uniformly flame-retardant / PBDE / TDCIPP toxicology and exposure work; not a single reference is a metals paper.

This is parallel in failure mode to MFK_01 (PAH-only), MFK_03 (phthalates-only), MFK_05-ehp0110 (dioxins-only), MFK_07 (melamine + formaldehyde only): high-quality regulator- or academic-grade contaminant work on an organic-contaminant class outside HMI scope. Cooper et al. 2016 is a particularly strong piece of work — Duke's foam screening project is the canonical US dataset on organophosphate FR replacement of PentaBDE in residential furniture and child products — but its analyte vocabulary does not intersect HMI's.

**Folder filing note:** PDF is correctly filed under `_extracted_infantdurable_03_Carriers_HighChairs_CarSeats/03_Carriers_HighChairs_CarSeats/` (the paper does report on n=98 child car seats), but the contaminant class (FRs in PUF) is not what the HMI surface for car seats would draw on. The car-seat product page in scope for HMI would be metals in seat-fabric finishes, dye mordants, paint, plastic stabilizers (Cd, Pb, Sn), and possibly Cr-VI in leather — not bromine-based or organophosphate flame retardants in foam.

**Identity checks (clean — no existing wiki page):**
- DOI grep (`10.1021/acs.est.6b01602`): no matches in `wiki/sources/`
- Author / title grep (`Cooper.*Stapleton`, `Cooper EM`, `Polyurethane Foam.*Flame Retardant`, `10653.*10660`): no matches
- Suggested-handle / filename grep (`MFK_05-unknown`, `05_Unknown.pdf`, `03_Carriers_HighChairs_CarSeats.*05_Unknown`): no matches
- Cite-key candidate grep (`cooper2016`, `cooper2016-fr-screening`, `cooper2016-puf-fr`): no matches
- Analyte-corpus grep (`cooper|stapleton|flame.retard|tdcipp|fm550` in `wiki/sources/` filenames): no matches; the Heavy Metal Index corpus has no Stapleton-lab or flame-retardant papers, consistent with the analyte-scope boundary

**Action taken:** No ingest. No commits. No audit queue append. Wrapper proceeds to next PDF.

**Folder note:** First evaluated PDF in `_extracted_infantdurable_03_Carriers_HighChairs_CarSeats/03_Carriers_HighChairs_CarSeats`. The folder is plausibly mixed-scope: child car seats / high chairs / carriers are reasonable surfaces for Pb (paint), Cd (plastic stabilizers), Cr-VI (leather), Ni (metal frames). Other PDFs in the folder warrant individual evaluation; a flame-retardant paper landing first does not predict the rest of the folder will be similarly off-scope.

**Recommendation for Karen:** Same standing recommendation as for MFK_01/03/05-dioxins/07 — either (a) move the five organics-only stops (MFK_01 PAH, MFK_03 phthalates, MFK_05-ehp0110 dioxins, MFK_07 melamine+formaldehyde, MFK_05-unknown FRs) to an `out-of-scope/organics-only/` pile so future Kimi sweeps skip them automatically, or (b) expand HMI's analyte vocabulary / define a "co-contaminant context" source-type tag so durable-product pages can carry a unified contaminant story (metals + brominated/organophosphate FRs + PAH + phthalates + dioxins + MFR monomers) paralleling EU REACH, ANSES, BfR, and Duke-lab dossiers. The pattern is now consistent across four folders (03_Diapers, 04_Feeding_Accessories, 02_Strollers_Walkers_Swings, 03_Carriers_HighChairs_CarSeats) and five contaminant classes — a single decision settles all of them and any future folder sweep.

## STOP: atsdr2023-soil-dermal-absorption-guidance — existing post-schema page, no actionable defects

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/ATSDR_Exposure_Dose_Guidance_for_Soil_Sediment_Dermal_Absorption.pdf`

**Suggested handle from wrapper:** KADC_atsdr-exposure-dose-guidance-for-soil-sediment-der

**Existing wiki page:** `wiki/sources/atsdr2023-soil-dermal-absorption-guidance.md` (cite_key `atsdr2023-soil-dermal-absorption-guidance`, raw_handle `MFK_atsdr-exposure-dose-guidance-soil-sediment-dermal`, `updated: 2026-05-17`)

**Reason for stop:** The PDF the wrapper picked is the same source already ingested under raw_handle `MFK_atsdr-exposure-dose-guidance-soil-sediment-dermal` from the prior copy of the same file in `Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/` (now relocated to the Kimi corruption folder structure). The existing page is post-2026-05-14 (updated 2026-05-17), comprehensive, and already audited twice (subagent + Codex cross-vendor) per its own Verification notes section.

Full source-vs-page reconciliation (PDF read pp. 1–21 in two chunks):

| Existing page claim | Source location | Reconciled |
|---|---|---|
| DAD equation form | p. 4 | ✓ |
| Default soil AF: 0.2 child / 0.07 adult | p. 5 | ✓ |
| Table 7 weighted child AFs (5 scenarios incl. mud-footnote-5) | p. 17 | ✓ |
| Table 8 ABSd values (As 0.03, Cd 0.001, PCBs 0.14, PAHs 0.13, inorganic 0.01, VOC/SVOC defaults, TCDD 0.03/0.001 organic-content split) | p. 18 | ✓ |
| Table 1 ABS_GI (all 18 inorganic entries incl. Cd 2.5%/5%, Cr-III 1.3%, Cr-VI 2.5%, Hg-Cl 7%, Hg-metallic 80%, MeHg 100%, Ni 4%, Ba 7%, Be 0.7%, Sb 15%, Cu 57%, Mn 6%, Se 30%, Ag 4%, Tl 100%, V 2.6%, Zn 100%) | p. 7 | ✓ |
| Lead absent from Tables 1 & 8 | p. 7, 18 | ✓ |
| Table 2 standard age groups SA + BW (7 rows, Adult 6,030 cm² / 80 kg) | p. 13 | ✓ |
| Table 3 special groups SA + BW (14 rows incl. four infant sub-bands; worker/educator 80.6 kg) | p. 14 | ✓ |
| ADAFs 10 / 3 / 1 by age band | p. 8 | ✓ |
| CTE 12 yr, RME 33 yr, occupational 5/20 yr, AT 78 yr | pp. 3–4 | ✓ |
| Appendix B Table 9 HQs (all 7 age groups; oral MRL 2E-5 mg/kg/day) | p. 20 | ✓ |
| ABS_GI = 1.0 for PCBs in worked example | App. B Default/Site-Specific Value table p. 19 | ✓ |

No transposed values, no invented method detail, no invalid slugs, no brand-firewall issue, no missing exposure-modeling tables, no legacy headings. The page's `## Verification notes` section already documents the May 17 audit-driven corrections (Ba added to `metals:`, Table 2 / Table 3 BW split corrected, EPA RAGS Part E source-attribution clarified, fabricated IEUBK/LeadSpread reference removed).

**Routing-malformed advisory is the expected backlog state, not an actionable defect:** the page is in `data/evidence/routing_malformed.csv` at **advisory** severity only — `missing_advisory: products;ingredients`, note "Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible." That is correct for this source: it is a US-federal exposure-assessment methodology document about soil/sediment dermal absorption with no product or ingredient occurrence data. Setting `products:` or `ingredients:` to a non-empty value would invent routing the source does not support. The advisory severity is the known acceptable backlog state per the standing manual-fetch memory.

**Per the v2 skill's entry rule** ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"): the strict reading is that any malformed-CSV entry — even advisory — disqualifies the skip, which is why the wrapper picked this PDF. The substantive reading is that advisory-severity malformed for a methodology document with no occurrence data is the intended end state, not a defect for the manual-fetch loop to fix. Re-ingesting this PDF cannot move the page toward a non-advisory malformed state without injecting incorrect frontmatter.

**Identity checks:**
- DOI grep: source has no DOI (gov-report, `no_doi_assigned: true`)
- raw_handle grep `MFK_atsdr-exposure-dose-guidance-soil-sediment-dermal`: matches the existing page (line 3)
- cite-key grep `atsdr2023-soil-dermal-absorption-guidance`: matches the existing page (line 4)

The wrapper-suggested handle `KADC_atsdr-exposure-dose-guidance-for-soil-sediment-der` is a new prefix reflecting the relocated PDF path (Kimi_Agent_Download_Corruption → `KADC_`). Adopting that handle would either (a) require duplicating the existing source page under a new cite-key — which violates the deduplication discipline — or (b) require rewriting the existing page's `raw_handle` and `raw_path` to the relocated path. The path-relocation rewrite is a bulk-cleanup task across many sources, not per-PDF ingest work, and is not in this skill's scope.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** First evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/`. The folder contains 21 PDFs; the other 20 should be evaluated individually. Several entries clearly cover heavy metals in cosmetics, infant clothing, or skin-care formulations (e.g., `An_Overview_of_Heavy_Metals_in_Cosmetic_Products...`, `Heavy_Metals_in_Infant_Clothing...`, `Evaluation_of_heavy_metals_in_cosmetic_products...`); these are likely in-scope and should drain through the loop normally. Several entries (parabens, phthalates from disposable diapers, methyl salicylate, dermal absorption modeling) are organic-contaminant or methodology references that may parallel this stop (existing-page already covers, or analyte-scope mismatch).

**Recommendation for Karen:** Two possible system-level fixes so the wrapper does not re-pick already-comprehensive pages whose only malformed flag is advisory:
1. Tighten the wrapper's "next PDF" selection to treat advisory-severity malformed for `source_type: gov-report` (and similar methodology source types) as not-malformed for picking purposes.
2. Add an explicit `routing_intent: methodology-no-routing` (or similar) frontmatter signal that the audit recognizes as "advisory is the intended end state" so the page drops out of the malformed CSV entirely.
Either fixes the loop; (2) is cleaner because it makes the per-source intent explicit. Until one is in place, this PDF will recur on every Kimi-folder sweep and stop here.

## STOP: oehha2000-appendix-f-dermal-uptake-soil — existing post-schema page, no actionable defects

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/Appendix_F_-_Dermal_Uptake_of_Chemicals_from_Soil_OEHHA.pdf`

**Suggested handle from wrapper:** KADC_appendix-f-dermal-uptake-of-chemicals-from-soil-oe

**Existing wiki page:** `wiki/sources/oehha2000-appendix-f-dermal-uptake-soil.md` (cite_key `oehha2000-appendix-f-dermal-uptake-soil`, raw_handle `MFK_appendix-f-dermal-uptake-chemicals-soil-oehha`, `updated: 2026-05-17`)

**Reason for stop:** The PDF the wrapper picked is the same source already ingested under raw_handle `MFK_appendix-f-dermal-uptake-chemicals-soil-oehha` from the prior copy of the same file in `Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/` (now relocated to the Kimi corruption-folder structure). The existing page is post-2026-05-14 (updated 2026-05-17), comprehensive (all 7 inorganic metals — As, Be, Cd, Cr-VI, Pb, Hg, Ni — plus organic cross-references PCBs, TCDD, BaP/PAHs, HCH, DEHP), and already audited twice per its `## Verification notes` section: a Codex cross-vendor pass (lead primary-study attribution tightened to Stauber 1994 only; HMTc-direction framing softened) and a Claude Opus 4.7 fresh-context subagent pass (REVISE verdict applied: Cd page reference tightened from F-11 to F-11–F-12; `Be` abbreviation false-positive documented).

Source-vs-page reconciliation (PDF read pp. 1–5 in this session; pp. F-1 through F-5 cover §F.1.1 Introduction, §F.1.2.1–F.1.2.9 Risk Assessment Issues — definitions, soil contamination history, soil loading, soil condition, in vivo vs in vitro, species specificity, soil–chemical–tissue interaction, frequency/duration). The page's Methodological notes block matches every claim in the pages read: soil loading 0.2–1.0 mg/cm² typical vs 20–40 mg/cm² in studies (F.1.2.4 p. F-3 ✓), in vivo > in vitro preference (F.1.2.6 p. F-4 ✓), species rank rabbit > rat > pig ≈ monkey ≈ humans from Wester and Maibach 1975/1983 (F.1.2.7 p. F-4 ✓). The chemical list in §F.1.1 (4,4'-methylene dianiline, hexachlorocyclohexanes, DEHP, PCDD/PCDF as TCDD, pentachlorophenol, PAHs as BaP, and salts of arsenic, beryllium, cadmium, mercury, lead, nickel, chromium VI) is fully covered in the page's Key numbers and organics cross-reference blocks. No transposed values, no invented method detail, no invalid slugs, no brand-firewall issue, no legacy headings, no missing exposure-modeling tables. The full per-metal Key-numbers verification was performed in the 2026-05-17 subagent pass.

**Routing-malformed advisory is the expected backlog state, not an actionable defect:** the page is in `data/evidence/routing_malformed.csv` at **advisory** severity only — `missing_advisory: products;ingredients`, note "Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible." That is correct for this source: it is a Cal/EPA OEHHA Air Toxics Hot Spots regulatory technical-support document about soil-pathway dermal absorption with no product or ingredient occurrence data. Setting `products:` or `ingredients:` to a non-empty value would invent routing the source does not support. The advisory severity is the known acceptable backlog state per the standing manual-fetch memory and parallel to the ATSDR stop earlier in this file.

**Per the v2 skill's entry rule** ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"): the strict reading is that any malformed-CSV entry — even advisory — disqualifies the skip, which is why the wrapper picked this PDF. The substantive reading is that advisory-severity malformed for a methodology document with no occurrence data is the intended end state, not a defect for the manual-fetch loop to fix. Re-ingesting this PDF cannot move the page toward a non-advisory malformed state without injecting incorrect frontmatter.

**Identity checks:**
- DOI grep: source has no DOI (gov-report, `no_doi_assigned: true`)
- raw_handle grep `MFK_appendix-f-dermal-uptake-chemicals-soil-oehha`: matches the existing page (line 3)
- cite-key grep `oehha2000-appendix-f-dermal-uptake-soil`: matches the existing page (line 4); `wiki/sources/oehha2000-appendix-f-dermal-uptake-soil.md` is the only file matched

The wrapper-suggested handle `KADC_appendix-f-dermal-uptake-of-chemicals-from-soil-oe` is the same Kimi_Agent_Download_Corruption (KADC_) relocation-prefix pattern flagged in the ATSDR stop above. Same logic applies: adopting it would either duplicate the source under a new cite-key (violates deduplication) or require a bulk path-relocation rewrite that is not per-PDF ingest work.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** Second evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/` (after the ATSDR stop above). This is the same parallel-relocation problem and the same recommendation applies. The 19 remaining PDFs in this folder should be evaluated individually; cosmetics, infant clothing, and dermal-bioaccessibility entries are likely in-scope and will drain through normally, while skin-physiology / methyl-salicylate / paraben / phthalate-modeling entries may parallel this stop.

**Recommendation for Karen:** Same two system-level fixes as the ATSDR stop above — (1) tighten wrapper's "next PDF" selection to treat advisory-severity malformed for `source_type: gov-report` as not-malformed for picking, or (2) add a `routing_intent: methodology-no-routing` frontmatter signal. Until one is in place, both ATSDR Soil/Sediment Guidance and OEHHA Appendix F (and likely SCHER Toy Migration Opinion, SCCS Notes of Guidance, EPA RAGS Part E, etc.) will recur on every Kimi-folder sweep and stop here.

## STOP: sccs2023-notes-of-guidance-cosmetic-ingredients-v12 — existing post-schema page, no actionable defects

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/SCCS_Notes_of_Guidance_for_the_Testing_of_Cosmetic_Ingredients_12th_Revision.pdf`

**Suggested handle from wrapper:** `KADC_sccs-notes-of-guidance-for-the-testing-of-cosmetic`

**Existing wiki page:** `wiki/sources/sccs2023-notes-of-guidance-cosmetic-ingredients-v12.md` (cite_key `sccs2023-notes-of-guidance-cosmetic-ingredients-v12`, raw_handle `MFK_sccs-notes-of-guidance-for-the-testing-of-cosmetic`, `updated: 2026-05-17`, ingest commit `f0494b7` "ingest: sccs2023-notes-of-guidance-cosmetic-ingredients-v12 fresh from Manual Fetch Kimi/Children Personal Care Papers/babycare_01_Exposure_Pathways")

**Reason for stop:** Same parallel-relocation pattern as the ATSDR and OEHHA Appendix F stops earlier in this file. MD5 hash of the wrapper-picked file `c9ce24a093d2a6795fe3a40439c657db` is byte-identical to the file already ingested from `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_01_Exposure_Pathways/01_Exposure_Pathways/SCCS_Notes_of_Guidance_for_the_Testing_of_Cosmetic_Ingredients_12th_Revision.pdf` (confirmed via `md5` on both paths). Same source, two filesystem locations after the Kimi corruption-folder relocation.

The existing page is post-2026-05-14 (updated 2026-05-17), comprehensive (15+ Key-numbers blocks covering Table 3A/3B daily exposures, Table 4 skin surface areas, Table 5 aggregate preservative panel = 17.4 g/d / 269 mg/kg bw/d, the sunscreen 18.0 g/d MoS default, EFSA 2012a child body weights 8.8/11.9/23.1/43.4/61.3 kg, Renwick 1998 child:adult SSA/BW ratios, the children-by-age product class table Appendix 7 A.7.2, pediatric toothpaste/mouthwash retention factors, aerosol/spray MMAD deposition thresholds, EN ISO 17516:2014 microbiological limits Category 1/2, the tiered deterministic/probabilistic assessment framework, hair-dye intermittent-exposure arithmetic, OECD TG 428 skin-absorption compartments, the Appendix 6 CofA "Heavy metals" requirement, and the aggregate-exposure CMR rule), and carries 10 verification notes explaining its routing scope, the umbrella `As`/`tHg`/`Cr`/`Sb` choices, the EU-only jurisdiction, the explicit out-of-scope status of premature neonates, the pending Cosmetics Europe Crème Global 0–3 year update, and the missing `regulations/eu-1223-2009` routing target. No transposed values, no invented method detail, no invalid slugs, no brand-firewall issue, no legacy headings — the page is the canonical EU regulatory-science methodology reference for this wiki and was written cleanly under the v2 skill on first ingest.

**Routing-malformed advisory is the expected backlog state, not an actionable defect:** the page is in `data/evidence/routing_malformed.csv` at **advisory** severity only — `missing_advisory: ingredients`, note "Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible." That is correct for this source: it is the SCCS 12th-revision Notes of Guidance (SCCS/1647/22), a regulatory methodology document with zero ingredient-level occurrence data. Setting `ingredients:` to a non-empty value would invent routing the source does not support. 652 of the 653 entries in `routing_malformed.csv` are advisory; only 1 is `strict`. Advisory is the corpus-wide baseline for methodology and exposure-modeling sources, not a defect for the manual-fetch loop to fix.

**Per the v2 skill's entry rule** ("Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed"): the strict reading is that any malformed-CSV entry — even advisory — disqualifies the skip, which is why the wrapper picked this PDF. The substantive reading is that advisory-severity malformed for a methodology document with no occurrence data is the intended end state, not a defect for the manual-fetch loop to fix. Re-ingesting this PDF cannot move the page toward a non-advisory malformed state without injecting incorrect frontmatter.

**Identity checks:**
- DOI grep: source has no DOI (`no_doi_assigned: true`, `gov-report`)
- raw_handle grep `MFK_sccs-notes-of-guidance-for-the-testing-of-cosmetic`: matches the existing page (line 3); only match
- cite-key grep `sccs2023-notes-of-guidance-cosmetic-ingredients-v12`: matches the existing page (line 4); `wiki/sources/sccs2023-notes-of-guidance-cosmetic-ingredients-v12.md` is the only file matched

The wrapper-suggested handle `KADC_sccs-notes-of-guidance-for-the-testing-of-cosmetic` is the same Kimi_Agent_Download_Corruption (KADC_) relocation-prefix pattern flagged in the ATSDR and OEHHA Appendix F stops above. Same logic applies: adopting it would either duplicate the source under a new cite-key (violates deduplication) or require a bulk path-relocation rewrite that is not per-PDF ingest work.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** Third evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/` (after the ATSDR Soil/Sediment Guidance and OEHHA Appendix F stops above), all three landing on the same parallel-relocation + advisory-malformed pattern. The OEHHA stop note explicitly forecast that "SCCS Notes of Guidance" would recur here next; that prediction now confirmed. The 19 remaining PDFs in this folder should be evaluated individually — cosmetics-occurrence (Borowska 2021, Salama 2016, Iqbal 2020, Khan 2022, Akhtar 2023, the in-vitro zeolite-adsorption QbD paper), infant clothing (Heavy_Metals_in_Infant_Clothing), and dermal-bioaccessibility (Stefaniak, Midander artificial-sweat) entries are likely in-scope and should drain through normally; SCCS Methyl Salicylate (SCCS/1654/23) may have an existing page (verified earlier today: `sccs2025-methyl-salicylate-children-exposure-1676-25.md` exists but cite-key suggests SCCS/1676/25 — needs per-PDF check for whether SCCS/1654/23 is a separate opinion); skin-physiology, parabens-aggregate-modeling, baby-powder-inhalation, and phthalate-DNA-oxidative-damage entries may parallel this stop if they are methodology/review documents rather than occurrence studies.

**Recommendation for Karen:** Same two system-level fixes as the ATSDR and OEHHA stops above — (1) tighten wrapper's "next PDF" selection to treat advisory-severity malformed for `source_type: gov-report` (and by extension `source_type: review` for methodology/synthesis documents with no original measurements) as not-malformed for picking, or (2) add a `routing_intent: methodology-no-routing` frontmatter signal that the routing audit recognises as expected-empty for `products:`/`ingredients:`. Both are infrastructure changes outside the per-PDF ingest scope; both would let this folder drain to its actually-in-scope cosmetics-occurrence and dermal-bioaccessibility PDFs without further stop-note overhead.

## STOP: KADC_sccs-scientific-advice-on-children-exposure-to-met — true duplicate (already ingested + audited 2026-05-17)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/SCCS_Scientific_Advice_on_Children_Exposure_to_Methyl_Salicylate_SCCS_1654_23.pdf`

**Suggested handle:** `KADC_sccs-scientific-advice-on-children-exposure-to-met`

**Citation:** Scientific Committee on Consumer Safety (SCCS). Scientific Advice on children's exposure to Methyl Salicylate (methyl 2-hydroxybenzoate) — revision of SCCS/1654/23 (SCCS/1676/25). European Commission, Directorate-General for Health and Food Safety, adopted by written procedure 30 April 2025. No DOI.

**Reason for stop:** Same paper has an existing v2.0-standard wiki page at `wiki/sources/sccs2025-methyl-salicylate-children-exposure-1676-25.md` (created/enhanced 2026-05-17). The existing page already documents that the PDF filename references SCCS/1654/23 because the file was retrieved from the EU publications page for the 2023 opinion, but the actual document inside is the SCCS/1676/25 Final revision (adopted 2025-04-30) which supersedes 1654/23. The cite-key encodes 1676-25 to disambiguate from the superseded opinion.

**Identity checks — all hit the existing page:**
- DOI grep: N/A (`no_doi_assigned: true` on existing page; "Doi ND" on PDF p.5)
- raw_handle grep `MFK_sccs-scientific-advice-on-children-exposure-to-met` → matches `sccs2025-methyl-salicylate-children-exposure-1676-25.md` line 3 (the suggested KADC_ prefix is the Kimi_Agent_Download_Corruption relocation-prefix variant of the same handle stem)
- cite-key grep `sccs2025-methyl-salicylate-children-exposure-1676-25` → matches the existing page
- Folder-prefix-independent grep `methyl[- ]?salicylate` → single hit at the existing page

**Audit-queue prior entry (line 64):** `sccs2025-methyl-salicylate-children-exposure-1676-25,babycare_01_Exposure_Pathways,MFK_sccs-scientific-advice-on-children-exposure-to-met,09e7e95,2026-05-17T20:00:00Z,audited-revised,REVISE,2026-05-17` — autonomous v2.0 ingest + subagent audit already complete; verdict REVISE; 2 ⚠️ findings (Check 1 768 mg attribution clarity; Check 5 borderline methodology-inheritance language); 1 applied, 0 rejected; routing-gaps already surfaced (fragrance-products slug, hair-conditioner slug, regulations/EC-1223-2009-annex-III-324 page).

**Malformed-CSV entry (line 518):** advisory-severity only — `ingredients;metals` empty because methyl salicylate is an organic substance (methyl 2-hydroxybenzoate, CAS 119-36-8), not a heavy metal. The existing page's verification notes explicitly justify the empty arrays as correct: "The frontmatter `metals:` field is therefore `[]`. Relevance to the Heavy Metal Index is methodological infrastructure: the document is a worked-example application of the SCCS Notes-of-Guidance framework (SCCS/1647/22) for children 0–3 years, providing the product-use amounts, retention factors, dermal-absorption defaults, child body weights, and aggregate-exposure arithmetic that any heavy-metal MoS calculation for children's-personal-care HMTc category-setting must use as inputs." Re-ingest would not change these fields — methyl salicylate cannot acquire a metal slug — so the advisory-malformed flag is permanent and intentional.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** Fourth evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/01_Exposure_Pathways/` (after ATSDR Soil/Sediment, OEHHA Appendix F, and SCCS Notes-of-Guidance stops above). The OEHHA stop note forecast that this SCCS Methyl Salicylate entry would land on either the SCCS-Notes-of-Guidance pattern (advisory-malformed methodology) or be confirmed as a separate opinion needing its own page; this stop confirms it's the former — same parallel-relocation + advisory-malformed pattern, NOT a separate opinion. SCCS/1654/23 (the filename) and SCCS/1676/25 (the actual document) are not two separate opinions; the 2025 revision supersedes and replaces the 2023 version, and the existing wiki page correctly cite-keys the operative current revision.

**Recommendation for Karen:** Same two system-level fixes as ATSDR/OEHHA/SCCS-NoG stops above — (1) advisory-severity malformed entries for `source_type: gov-report` with intentionally-empty `metals`/`ingredients` should not flag the source as a candidate for re-ingest under skill v2.0 step 1's "in malformed" criterion, or (2) add a `routing_intent: methodology-no-routing` (or `routing_intent: organic-substance-not-in-vocabulary`) frontmatter signal so the routing audit recognises these as expected-empty. This is the fourth consecutive PDF in this folder hitting this exact pattern; the wrapper is burning per-PDF cycles on already-audited methodology documents that cannot be enhanced further. The remaining ~19 PDFs in this folder may have a substantial run of cosmetics-occurrence + dermal-bioaccessibility entries that ARE in-scope and would drain normally once the wrapper skips past the advisory-malformed methodology docs.

## STOP: KADC_cpsia-and-lead-fact-sheet — true duplicate, already audited

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/02_Regulatory_Reports/CPSIA_and_Lead_Fact_Sheet.pdf`

**Suggested handle (this drain pass):** KADC_cpsia-and-lead-fact-sheet

**Existing page:** `wiki/sources/cfa2012-cpsia-lead-fact-sheet.md` (updated 2026-05-17; raw_handle `MFK_cpsia-and-lead-fact-sheet`)

**Reason for stop:** Same PDF, byte-identical to the already-ingested copy under the original Manual Fetch Kimi tree. sha256 confirmation:

- `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/02_Regulatory_Reports/CPSIA_and_Lead_Fact_Sheet.pdf` → `097a3918da5e01c7b5d3d4568a9217f5c6eb07370b2b5730637bf60de88a8f68`
- `raw/Manual Fetch Kimi /Children Personal Care Papers/babycare_02_Regulatory_Reports/02_Regulatory_Reports/CPSIA_and_Lead_Fact_Sheet.pdf` → `097a3918da5e01c7b5d3d4568a9217f5c6eb07370b2b5730637bf60de88a8f68`

**Identity checks (existing page detected):**
- raw_handle grep `MFK_cpsia-and-lead-fact-sheet` → single hit at `wiki/sources/cfa2012-cpsia-lead-fact-sheet.md`
- cite-key grep `cfa2012-cpsia-lead-fact-sheet` → single hit at the existing page

**Audit-queue prior entry:** `cfa2012-cpsia-lead-fact-sheet,wiki/sources,MFK_cpsia-and-lead-fact-sheet,99ba482,2026-05-17T23:30:00Z,audited-promote,PROMOTE,2026-05-17` — autonomous v2.0 ingest + subagent audit already complete; verdict PROMOTE; 0 findings; 0 applied; 0 rejected; no audit-application commit needed.

**Malformed-CSV entry:** advisory-severity only — `ingredients;matrices` empty because the source is a two-page consumer-advocacy regulatory summary with no primary measurements (lead-content statutory thresholds, not occurrence data). The existing page's verification notes explicitly justify the empty arrays as correct: "Frontmatter `matrices: []` is correct — no measurements are reported in any matrix; the document is about statutory thresholds on lead **content** in children's products, not about measured occurrence data."

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** First evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/02_Regulatory_Reports/`. The remaining PDF in this subfolder is `TCCP_Chemical_Lists_NY.pdf` (NY TCCP chemical list — likely in scope, evaluate on next tick).

**Recommendation for Karen:** Same system-level fix as the 01_Exposure_Pathways stops above (ATSDR/OEHHA/SCCS-NoG/SCCS-MeSal) — advisory-severity malformed entries for `source_type: ngo-report`/`gov-report`/`gov-guidance` with intentionally-empty `ingredients`/`matrices` (or `metals`) should not flag the source as a candidate for re-ingest under skill v2.0 step 1's "in malformed" criterion. This is the fifth corruption-folder PDF burning a cycle on an already-audited regulatory-summary page that is permanently advisory-malformed by design.

## STOP: KADC_petroleum-jelly-vaseline-specification — not source-grade content (commercial product spec sheet, no measurements)

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/03_Powder_Lotion_Oil_Diaper/Petroleum_Jelly_Vaseline_Specification.pdf`

**Suggested handle:** `KADC_petroleum-jelly-vaseline-specification`

**Citation:** Unidentified petroleum-jelly manufacturer (Iranian; only inferable from the use of ISIRI-3949 = Institute of Standards and Industrial Research of Iran method 3949 for arsenic and heavy-metal testing). No author, no organization name, no publication venue, no year, no DOI, no contact information visible on any of the 4 pages. The document is a four-grade commercial product specification sheet for "Ultra Snow White Petroleum Jelly (Cosmetic Grade)," "Snow White Petroleum Jelly (Pharmaceutical Grade)," "Snow White Petroleum Jelly (Cosmetic Grade)," and "Industrial White Petroleum Jelly."

**Reason for stop:** Document is a commercial/B2B product-data-sheet, not source-grade evidence. Verified by reading all 4 pages in full. Each grade is a 12-row (industrial: 8-row) specification table giving acceptance ranges for **physical-chemical product attributes** — Appearance per BP 2013; Penetration (consistency) ASTM D-937; Color (Lovibond) IP-17; Kinematic viscosity ASTM D-445; Drop melting point ASTM D-127; Congealing ASTM D-938; UV absorbance 290 nm BP-2012; Acidity/alkalinity (pH) BP-2012; Polycyclic aromatic hydrocarbons BP-2012; Sulphated ash BP-2012; Arsenic ISIRI-3949; Heavy metal (Pb) ISIRI-3949.

**Heavy-metals content is purely a Pass/Fail declaration with no numerical value:**
- Arsenic — Result: "Passed", Method: ISIRI-3949, Unit: %w/w (heading only)
- Heavy Metal (Pb) — Result: "Passed", Method: ISIRI-3949, Unit: %w/w (heading only)

No detection limit, no measured concentration, no sample count, no batch identifier, no analytical conditions, no spike/recovery, no LOD/LOQ. "Passed" against the unstated ISIRI-3949 acceptance threshold is the only datum. Even if ISIRI-3949's threshold were knowable (typically ~10 ppm As / ~10 ppm Pb for cosmetics-grade petrolatum in older Iranian standards), this PDF does not state it, and the document supports no Key-numbers block, no `contamination_profile` value, no exposure calculation, no synthesis input. The PAH and acidity rows are likewise Pass/Fail. The only quantitative content is for product-engineering attributes (penetration, viscosity, melting point, congealing point, density, flash point, sulphated ash) which are not in any HMI analyte vocabulary or downstream-page surface.

This is a different failure mode from the prior MFK_01/03/05/07 organics-only stops (wrong analyte class with quantitative data) and from the MFK_06/09 mechanical-safety stops (wrong subject matter entirely). Here the analyte vocabulary is right (As, Pb), but the source provides only a Pass/Fail flag against an unstated threshold — no usable measurement. It is also distinct from the parallel-relocation advisory-malformed stops earlier in this file (ATSDR/OEHHA/SCCS — those are comprehensive methodology documents already ingested; this is not source-grade material in the first place).

**Provenance failure independent of analyte question:** Even if the document carried a numerical Pb value, the source is unattributable. There is no manufacturer name visible on any page (the document header is just "Petroleum Jelly (Vaseline) Specification"), no website, no document control number, no issue date, no revision, no signature, no QA stamp. A wiki source page requires a citable provenance (`source` field, `authors`, `year`, `access_url` or `publisher`); none of these can be filled from the document. Citing the file as "Unknown Iranian petroleum-jelly manufacturer, undated" would not survive the audit-queue's evidence-tier discipline (Part 13: A/B/C-tier all require attributable provenance).

**Identity checks (clean — no existing wiki page):**
- DOI grep: source has no DOI
- Suggested-handle grep `KADC_petroleum-jelly-vaseline-specification`: no matches
- Filename grep `Petroleum_Jelly_Vaseline_Specification`, `petroleum-jelly`, `ultra-snow-white`, `Ultra Snow White`: no matches in `wiki/sources/`
- Method grep `ISIRI-3949`, `ISIRI.?3949`: no matches in `wiki/sources/`
- Substance grep `petroleum.?jelly`, `vaseline` (case-insensitive): 3 false-positive hits (`li2021-lead-lip-cosmetics-china-ecommerce.md`, `balogun2024-body-creams-delta-nigeria.md`, `aldayel2018-facial-cosmetics-saudi-arabia.md`) — all are cosmetics studies that mention petroleum jelly peripherally as an ingredient context, not as the subject of analysis. None covers this spec sheet.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Folder note:** First evaluated PDF in `Kimi_Agent_Download Corruption Issue/babycare_papers/03_Powder_Lotion_Oil_Diaper/`. Remaining PDFs in the folder: `Children_Makeup_Body_Products_US.pdf`, `Feasibility_Study_Action_Limits_Cosmetics_UK.pdf`, `Health_Risks_Heavy_Metals_Online_Market.pdf`, `Heavy_Metals_Body_Creams_Delta_Nigeria.pdf` (may match the existing `balogun2024` page above — duplicate check needed), `Lead_Cadmium_Mercury_Baby_Talcum_India.pdf`, `Overview_Heavy_Metals_Cosmetics_Toxicological.pdf`, `Quality_Control_Cosmetics_Libya.pdf`, `Survey_Health_Assessment_Cosmetic_Children_Denmark.pdf`, `Thermo_Fisher_Heavy_Metals_Cosmetics.pdf`. All filenames suggest in-scope heavy-metals cosmetics studies — this folder should drain through to ingestable material on the next several ticks, with at most one or two more spec-sheet-style stops possible (the Thermo Fisher entry is the most likely candidate for a vendor-marketing analyzer brochure rather than primary research; the remainder look like academic occurrence studies).

**Recommendation for Karen:** This stop is structurally distinct from the prior 01_Exposure_Pathways advisory-malformed loop and from the organics-only analyte-scope stops. Two issues compound:
1. **No usable measurement.** Pass/Fail declarations against an unstated threshold (ISIRI-3949) cannot be ingested as evidence-register rows or `contamination_profile` values. Even with a stated threshold, "the product met the unstated spec" is not occurrence data.
2. **No attributable provenance.** Manufacturer-supplied spec sheets (technical data sheets, certificates of conformity, B2B sales collateral) lack the citable authorship and venue that Part 13 evidence grading requires.

Both issues are categorical — the document type is wrong, not the analyte. Recommend moving manufacturer/B2B technical data sheets to `out-of-scope/commercial-spec-sheets/` so they are not re-attempted; they are not source-grade material for HMI regardless of analyte vocabulary or product category. If Karen wants to capture petroleum-jelly contamination data, the right inputs are FDA/USP monographs (USP–NF Petrolatum monograph, EP Vaselinum album), peer-reviewed analytical surveys, or third-party testing reports (CR/HBBF/EWG) — not vendor spec sheets. The PDF can be physically moved out of the manual-fetch corruption folder or tagged with a `.skip` marker; either prevents wrapper re-pick.

---

## STOP: Heavy_Metals_in_Cosmetics.pdf — already clean-ingested

**PDF:** `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/04_Shampoo_Wipes_Sunscreen/Heavy_Metals_in_Cosmetics.pdf`
**Suggested handle:** `KADC_heavy-metals-in-cosmetics`
**Existing wiki page:** `wiki/sources/attard2022-heavy-metals-cosmetics-review.md`
**Folder:** `manual-fetch/Kimi_Agent_Download Corruption Issue/babycare_papers/04_Shampoo_Wipes_Sunscreen`
**Date:** 2026-06-01

### Identity check

DOI grep / cite-key grep / raw_handle grep against `wiki/sources/` resolves to a single existing page:

- `wiki/sources/attard2022-heavy-metals-cosmetics-review.md`
- `cite_key: attard2022-heavy-metals-cosmetics-review`
- `raw_handle: kimi-children-personal-care-attard2022`
- `doi: 10.5772/intechopen.102406`
- `updated: 2026-05-18` (post the 2026-05-14 merge-enhance cutoff)
- `raw_path` points to the original Kimi-Children-Personal-Care copy of the same PDF; the corruption-folder copy is a duplicate of the same paper

### Routing audit state

- `data/evidence/routing_unresolved.csv`: 0 entries for this source.
- `data/evidence/routing_malformed.csv`: 1 entry, **severity `advisory`** — `ingredients;matrices` empty. This is the intended state: the page is a cosmetic-only review (Attard & Attard 2022 IntechOpen book chapter), and per the page's own Implications note "Cosmetics are outside the food-ingredient taxonomy; no `contamination_profile` rollup is appropriate." Empty `ingredients:` and `matrices:` reflect that the source legitimately has nothing to route into the food-ingredient layer; the advisory is informational and will persist until/unless a cosmetics-ingredient taxonomy is added. Not a defect.

### Skill decision

Per `.claude/skills/ingest-next-manual-fetch-pdf/SKILL.md` Phase 1 step 1:

> Skip PDFs whose existing pages are post-2026-05-14 clean and not in malformed.

The page is post-2026-05-14 clean. The `malformed.csv` entry is advisory-only and reflects an intentional/structural empty (cosmetics outside food-ingredient taxonomy), not a defect the merge-enhance path could repair. Re-ingesting via the corruption-folder copy would either (a) write the identical content (waste), or (b) overwrite the 2026-05-18 merge-enhanced page including its v0→v1 verification notes (regression). Neither is desirable.

### Recommendation for wrapper

Mark `Heavy_Metals_in_Cosmetics.pdf` as already-covered in the Kimi-Agent-Download-Corruption-Issue/babycare_papers/04_Shampoo_Wipes_Sunscreen sub-drain. Either move it to a `_already-ingested/` sibling folder or add a `.skip` marker so it is not re-picked on the next tick. The wiki has a complete Cochrane-quality page for this paper already.

---

## STOP: MFK_cellulose-based-adsorbents-for-heavy-metal-removal — out of HMI subject-matter scope (wastewater remediation review)

**PDF:** `raw/Manual Fetch Kimi /June 1/Cellulose-Based-Adsorbents-for-Heavy-Metal-Removal.pdf`

**Suggested handle:** `MFK_cellulose-based-adsorbents-for-heavy-metal-removal`

**Citation:** Nag S, Biswas S. Cellulose-Based Adsorbents for Heavy Metal Removal. Chapter 5 in: Inamuddin et al. (eds.), Green Adsorbents to Remove Metals, Dyes and Boron from Polluted Water. Environmental Chemistry for a Sustainable World, Vol. 49. Springer Nature Switzerland AG, 2021. pp. 113–134. DOI: 10.1007/978-3-030-47400-3_5.

**Reason for stop:** Book chapter is a chemical-engineering review of cellulose-based adsorbent materials (sugarcane bagasse, wood sawdust, rice waste, coconut waste, modified cellulose, cellulose beads, nano-cellulose, hydrogels) used to *remove* heavy metals from contaminated wastewater. Content covers Langmuir/Freundlich adsorption isotherms, pseudo-first/second-order kinetics, qmax values (mg/g of adsorbent capacity), modification techniques (mercerization, EDTA-treatment, succinic-anhydride grafting), and pH/temperature optimization for wastewater treatment columns. The numeric values throughout the chapter are *adsorption capacities* (how many mg of metal a gram of modified bagasse can remove from spiked synthetic wastewater), not contamination occurrence values in food, ingredients, or supply-chain materials.

This is a remediation-technology review for water/wastewater treatment, not a food contamination study. There is no occurrence data on Pb/Cd/iAs/tHg/etc. in any HMI ingredient, product, or matrix. The metals discussed appear only as solutes being removed from synthetic test solutions by engineered adsorbent media. The chapter's discussion of "heavy metal sources and impacts" (§5.3) is a generic toxicology/regulatory-context paragraph that cites secondary sources for things HMI already covers from primary sources on metal pages.

The only HMI-adjacent fact in the chapter is Table 5.2 (Indian Standards IS 2490/IS 3306 1974 discharge limits for industrial effluent into surface waters and public sewers — As 0.20 mg/L, Hg 0.01 mg/L, Cd 2.00/1.00 mg/L, Pb 0.10/1.00 mg/L, Cr 0.10/2.00 mg/L, Ni 3.0 mg/L, Zn 5.0/15.0 mg/L, Cu 3.0 mg/L). These are industrial wastewater discharge limits from a 1974 Indian standard, not food-safety regulations and not in HMI's regulatory taxonomy.

**Identity checks (clean — no existing wiki page):**
- DOI grep `10.1007/978-3-030-47400-3_5`: no matches in `wiki/sources/`
- Handle grep `MFK_cellulose`, `cellulose-based-adsorbents`: no matches
- Author/year grep `nag.*biswas.*2021`, `nag2021`: no matches

**Pattern recognition:** The June 1 folder contains a cluster of similar wastewater-remediation review papers (`Chelated-heavy-metals-removal-by-in-situ-formed-Fe-II-and-Fe-III-iron-oxy-hydroxides`, `Demolition-waste-for-adsorption-of-metals`, `Heavy-Metal-Removal-Using-Plant-Origin-Biomass-and-Agricultural-Waste-Derived-Biomass`, `Introduction-of-adsorption-techniques-for-heavy-metals-remediation`, `Investigation-of-the-agroecological-applications-of-olive-mill-wastewater-fractions`, `Natural-Clays-as-Adsorbents-for-the-Removal-of-Heavy-Metals-from-Phosphogypsum`, `Role-of-Extremophiles-in-the-Removal-of-Heavy-Metal-and-E-Waste`, `The-Role-of-Wastewater-Treatment-Technologies-in-Municipal-Landfill-Leachate-Treatment`). All eight filenames signal the same category: adsorption/remediation technology for industrial wastewater. None are food, ingredient, or supply-chain contamination studies.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Move the wastewater-remediation cluster (the 8 filenames above plus this one — 9 PDFs total) to `raw/_out-of-scope/wastewater-remediation/` so the manual-fetch loop does not re-attempt them on subsequent ticks. Adsorption-capacity research belongs in a wastewater-treatment knowledge base, not in HMI. The June 1 folder still contains in-scope food-contamination papers (`Evaluation-of-carcinogenic-risk-of-heavy-metals-due-to-consumption-of-rice-in-Southwestern`, `Food_safety_in_the_production_of_olive_oils`, `JSFA Reports 2024 - Lin - 12 heavy metals in various edible`, `NAJSP32025-54T2`, and the two olive-oil DOIs already ingested earlier this morning), so the wrapper should keep ticking through the folder after the remediation cluster is set aside.

## STOP: MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe — out of HMI subject-matter scope (wastewater remediation, Cu(II)-EDTA + non-vocabulary analyte)

**PDF:** `raw/Manual Fetch Kimi /June 1/Chelated-heavy-metals-removal-by-in-situ-formed-Fe-II-and-Fe-III-iron-oxy-hydroxides-Mechanism.pdf`

**Suggested handle:** `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe`

**Citation:** Yang Z, Ma X, Zhou H, Ma J, Ding Y, He D. Chelated heavy metals removal by in-situ formed Fe(II) and Fe(III) iron (oxy)hydroxides: Mechanism and performance. J Environ Chem Eng. 2023;11(5):110531. DOI: 10.1016/j.jece.2023.110531. Received 27 March 2023; revised 3 July 2023; accepted 6 July 2023; available online 10 July 2023. Affiliations: Key Laboratory for City Cluster Environmental Safety and Green Development of the Ministry of Education, School of Ecology, Environment and Resources, Guangdong University of Technology, Guangzhou; Shenzhen Pangu Environmental Protection Technology Co., Ltd., Shenzhen. Correspondence: D. He, di.he@gdut.edu.cn.

**Reason for stop:** This is exactly the lead exemplar called out in the prior `MFK_cellulose-based-adsorbents` stop's pattern-recognition list — a Journal of Environmental Chemical Engineering original-research paper on industrial wastewater treatment, not food/personal-care/supply-chain contamination. Two stacked scope failures:

1. **Subject-matter scope failure (wastewater remediation):** Paper investigates the efficiency and mechanism of Fe(II) vs Fe(III) coagulation-precipitation for removing Cu(II)-EDTA complexes from electroplating-industry wastewater. Verified by reading pp. 1–5 (cover + abstract, Introduction, Materials & methods §§2.1–2.4, Results §§3.1 Fe(II) vs Fe(III) sequestration, §3.2 Effect of pH, §3.3 Properties of in-situ formed iron (oxy)hydroxides, §3.4.1 Cu/Fe XPS speciation). Experimental design: 60 mg/L Cu(II) spiked into deionized water as Cu^II-EDTA stock (1:1 molar Cu:EDTA), then dosed with FeCl₂·4H₂O or FeCl₃·6H₂O at Fe:Cu molar ratios 1:1 through 8:1, pH 6.0–9.0, stirred 350 rpm for 30 min at 25 °C. Outcomes: Cu(II) removal efficiency (%), EDTA removal efficiency, residual Cu(II) concentration against the GB21900-2008 electroplating industrial wastewater discharge standard of total-Cu(II) < 0.5 mg/L. Mechanism analysis via XPS (Cu 2p, Fe 2p), XRD (lepidocrocite γ-FeOOH for Fe(II)-pathway product; 2-line ferrihydrite for Fe(III)-pathway product), SEM morphology, MLiSSP backscattering for floc sedimentation, Turbiscan stability index. The matrix is synthetic spiked aqueous solution; the application is industrial effluent treatment for electroplating-industry discharge compliance. No food matrix, no consumer-product matrix, no exposure pathway, no occurrence data on any commodity HMI tracks.

2. **Analyte-vocabulary scope failure (Cu is not in HMI):** The sole metal analyte studied is copper (Cu). Copper is not in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Iron — the other metal in the paper — is the coagulant reagent, not a contaminant. EDTA (ethylenediaminetetraacetic acid) is the organic chelating ligand, also not in HMI vocabulary. Even if HMI restricted itself to subject-matter scope only and accepted wastewater-remediation papers (which it does not), Cu-EDTA has no analyte handle in this corpus.

This is parallel in failure mode to the prior `MFK_cellulose-based-adsorbents` stop and is the lead exemplar called out in that stop's June 1 folder pattern-recognition cluster. Two-stop precedent now established for this cluster; the next 7 filenames (Demolition-waste-for-adsorption-of-metals, Heavy-Metal-Removal-Using-Plant-Origin-Biomass, Introduction-of-adsorption-techniques-for-heavy-metals-remediation, Investigation-of-the-agroecological-applications-of-olive-mill-wastewater-fractions, Natural-Clays-as-Adsorbents-for-the-Removal-of-Heavy-Metals-from-Phosphogypsum, Role-of-Extremophiles-in-the-Removal-of-Heavy-Metal-and-E-Waste, The-Role-of-Wastewater-Treatment-Technologies-in-Municipal-Landfill-Leachate-Treatment) will hit the same stop on subsequent ticks unless Karen sidelines the cluster.

**Identity checks (clean — no existing wiki page):**
- DOI grep `10.1016/j.jece.2023.110531`, `j.jece.2023.110531`, `2213-3437`: no matches in `wiki/sources/`
- Handle grep `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe`, `chelated-heavy-metals-removal`, `MFK_chelated`: no matches
- Author/year grep `yang2023.*chelated`, `yang2023.*cu-edta`, `yang2023.*ferrihydrite`, `yang2023.*lepidocrocite`: no matches (existing `yang2023-nickel-gut-microbiome-uric-acid.md` is an unrelated NHANES nickel-microbiome paper, different first author institution and topic)
- Substance/method grep `Cu-EDTA`, `Cu\(II\)-EDTA`, `coagulation-precipitation`, `chelated heavy metal`, `lepidocrocite` (case-insensitive across `wiki/sources/`): no matches; HMI has no Cu-EDTA wastewater-remediation precedent

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Action the prior `MFK_cellulose-based-adsorbents` stop's recommendation — move the 9-PDF June 1 wastewater-remediation cluster (the 8 filenames from that stop plus this one explicitly named) to `raw/_out-of-scope/wastewater-remediation/` so subsequent ticks skip them. Both stops together are a clean two-paper confirmation of the pattern; further per-PDF stop notes on the remaining 7 cluster members would be redundant. The substantive in-scope papers in the June 1 folder (the rice carcinogenic-risk paper, the olive-oil food-safety paper, the JSFA edible-12-metals paper, NAJSP32025-54T2, and any others not yet evaluated) will drain normally after the cluster is sidelined.

## STOP: MFK_demolition-waste-for-adsorption-of-metals-a-step-t — out of HMI scope (industrial wastewater remediation; Cu/Ni/Zn adsorbent study)

**PDF:** `raw/Manual Fetch Kimi /June 1/Demolition-waste-for-adsorption-of-metals-A-step-towards-the-circular-economy.pdf`

**Suggested handle:** `MFK_demolition-waste-for-adsorption-of-metals-a-step-t`

**Citation:** Vallini J, Willson V, Fernández Luco L, Saralegui AB, Boeykens SP, Piol MN. Demolition waste for adsorption of metals: A step towards the circular economy. J Environ Manage. 2023;342:118200. DOI: 10.1016/j.jenvman.2023.118200. Received 18 March 2023; revised 28 April 2023; accepted 16 May 2023; available online 8 June 2023. Affiliations: Universidad de Buenos Aires, Facultad de Ingeniería — Instituto de Química Aplicada a la Ingeniería (IQAI), Laboratorio de Química de Sistemas Heterogéneos (LaQuíSiHe); Laboratorio de Materiales y Estructuras (LaME). Correspondence: M.N. Piol, mpiol@fi.uba.ar.

**Reason for stop:** Third PDF in the June 1 wastewater-remediation cluster explicitly enumerated in the prior `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe` stop ("the next 7 filenames … will hit the same stop on subsequent ticks unless Karen sidelines the cluster"). Two stacked scope failures parallel to the cluster precedent:

1. **Subject-matter scope failure (wastewater remediation, not food/personal-care):** Paper proposes building-demolition rubble (crushed concrete + brick, ASTM N°12 sieve, washed and dried at 60 °C; characterized by ZCP and TXRF for leachable impurities) as an adsorbent for Cu²⁺, Ni²⁺, and Zn²⁺ removal from industrial effluents — explicitly named electroplating-industry wastewater. Verified by reading pp. 1–4 (cover/abstract, §1 Introduction, §2.1 Preparation and characterization of adsorbents, §2.2 Selection/preparation/quantification of adsorbates, §2.3 Discontinuous tests, §2.4 Continuous-system Adams-Bohart and Yoon-Nelson breakthrough-curve models). Experimental design: 3.0 g DW + 50 mL of 8–16 mM individual or equimolar multicomponent Cu/Ni/Zn nitrate solutions; pH 7.0 ± 0.2; 200 rpm × 24 h at 25 ± 2 °C for batch tests; fixed-bed column tests for breakthrough curves; AAS quantification (GBC-XplorAA, air-acetylene flame, APHA-3111 B method). Outcomes: %R metal removal, adsorption selectivity order (Cu > Ni > Zn), Adams-Bohart mass-transfer coefficient KAB, Yoon-Nelson τ; downstream disposal pathway is re-encapsulating the saturated DW in cement mortars and concrete with leaching/resistance controls. Matrix is synthetic aqueous metal-nitrate solution mimicking electroplating effluent; the application is industrial wastewater treatment + cement-mortar circular-economy reuse. No food matrix, no consumer-product matrix, no human exposure pathway, no commodity HMI tracks.

2. **Analyte-vocabulary scope failure (Cu and Zn out, only Ni intersects):** Of the three measured metals — Cu²⁺, Ni²⁺, Zn²⁺ — only Ni is in HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn). Cu and Zn are not. Pb²⁺ and CrO₄²⁻ are named in the §1 Introduction only as IARC-classified carcinogens cited from a textbook (Di Giulio and Newman 2008) for general toxicological context, not measured. The single intersecting analyte (Ni) is studied here purely as a target for adsorbent-bed removal kinetics from synthetic electroplating effluent — there is no occurrence data on any food, ingredient, supply-chain, or consumer-product matrix that would route to a wiki page.

This is the third confirmed stop in the June 1 wastewater-remediation cluster (`MFK_cellulose-based-adsorbents`, `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe`, this one). The remaining 6 cluster members (Heavy-Metal-Removal-Using-Plant-Origin-Biomass, Introduction-of-adsorption-techniques-for-heavy-metals-remediation, Investigation-of-the-agroecological-applications-of-olive-mill-wastewater-fractions, Natural-Clays-as-Adsorbents-for-the-Removal-of-Heavy-Metals-from-Phosphogypsum, Role-of-Extremophiles-in-the-Removal-of-Heavy-Metal-and-E-Waste, The-Role-of-Wastewater-Treatment-Technologies-in-Municipal-Landfill-Leachate-Treatment) will hit the same stop on subsequent ticks unless Karen sidelines the cluster per the standing recommendation.

**Identity checks (clean — no existing wiki page):**
- DOI grep `10.1016/j.jenvman.2023.118200` across `wiki/sources/`: no matches
- Handle grep `MFK_demolition-waste-for-adsorption-of-metals-a-step-t`, `demolition-waste-for-adsorption`, `MFK_demolition`: no matches
- Author/year grep `vallini`, `piol`, `boeykens.*2023`, `saralegui.*2023` across `wiki/sources/`: no matches
- Substance/method grep `demolition waste`, `industrial wastewater treatment` against `wiki/sources/`: 5 hits, all unrelated (`ahmed2023-trace-metals-tomato-wastewater` is wastewater-irrigated tomato food-matrix; `kinuthia2021-nairobi-wastewater-biomonitoring` is human-biomonitoring; `ahmed2017-bangladesh-vegetable-arsenic`, `oeko-tex2024-new-limit-values`, `seesuan2025-des-edta-chromium-vi-colorimetric-sensor` are peripheral mentions). HMI has no demolition-waste / construction-debris adsorbent precedent.
- Intake-novelty status (`data/evidence/intake-june-1-novelty-2026-06-01.csv`): `novel`. The novelty check is a content-fingerprint dedupe, not a scope check; novel + out-of-scope is the expected combination for this cluster.

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Same as the two prior cluster stops — move the 9-PDF June 1 wastewater-remediation cluster to `raw/_out-of-scope/wastewater-remediation/` so subsequent ticks skip them. Three-paper confirmation of the pattern is now in place; per-PDF stop notes on the remaining 6 cluster members would be pure redundancy and would burn an autonomy tick per file. The substantive in-scope papers in the June 1 folder (the rice carcinogenic-risk paper, the olive-oil food-safety paper, the JSFA edible-12-metals paper, NAJSP32025-54T2, and any others not yet evaluated) will drain normally after the cluster is sidelined.

## STOP: MFK_heavy-metal-removal-using-plant-origin-biomass-and — out of HMI scope (wastewater-remediation biosorption review; 4th cluster confirmation)

**PDF:** `raw/Manual Fetch Kimi /June 1/Heavy-Metal-Removal-Using-Plant-Origin-Biomass-and-Agricultural-Waste-Derived-Biomass-from.pdf`

**Suggested handle:** MFK_heavy-metal-removal-using-plant-origin-biomass-and

**Citation:** Paranjape P, Sadgir P. Heavy Metal Removal Using Plant Origin Biomass and Agricultural Waste-Derived Biomass from Aqueous Media: a Review. Water Conservation Science and Engineering. 2023;8:9. DOI: 10.1007/s41101-023-00177-0. Received 1 May 2022; revised 16 December 2022; accepted 19 December 2022; published online 1 February 2023. Department of Civil Engineering, College of Engineering, Pune, Maharashtra, India 411005. Springer Nature Singapore Pte Ltd.

**Reason for stop:** Fourth confirmation of the June 1 wastewater-remediation cluster pattern. 21-page review of biosorption methods for removing **copper, aluminum, and iron** from contaminated **water and wastewater** using plant-origin biomass (leaves, seeds, peels, roots) and agricultural waste-derived biomass (husks, shells, fibers). Verified by reading pages 1–5 (abstract, introduction, mechanism of biosorption, isotherm modeling, analytical techniques, opening of removal-by-Cu section through Table 4) and pages 18–21 (entirely references — 150 citations, all biosorption/wastewater-treatment/isotherm-modeling work).

Scope-of-evidence content:
- Abstract: maximum removal efficacies 50–100% across natural low-cost adsorbents; optimal pH 4–9 for Cu, 2–8 for Fe/Al; contact time 20 min–24 h; pseudo-second-order kinetics and Langmuir isotherm as dominant models; thermodynamics 25–60 °C Cu, 25–50 °C Al, 30–70 °C Fe.
- Isotherm models tabulated (Henry's, Freundlich, Langmuir, BET, Temkin, Toth, Dubinin-Radushkevich) — water-treatment engineering, not food-contamination assessment.
- Analytical techniques tabulated (ESR, NMR, Raman, FT-IR, XAS/EXAFS/XANES) — all for characterizing bioadsorbent functional groups and metal-binding sites, not food-matrix metal quantification.
- Example bioadsorbents discussed: Iraqi palm leaves ash, modified tea leaves, palm leaf ash, watermelon rind, Bengal-gram husk, banana peel, orange peel, rice husk, neem leaves, coconut shell, sawdust, biochar from various agricultural residues.

The only HMI-adjacent content in the entire review is one paragraph on p. 2 listing food sources of copper exposure: "Copper can be found in food, particularly shellfish, liver, nuts, chocolate, and mushrooms" — a single sentence with no quantitative data, no source citation specific to those foods, and no contribution to any product-page or ingredient-page evidence register. No analyte in the review's primary scope intersects HMI's 10-analyte vocabulary (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn) except for **Al**, which appears here only as a wastewater contaminant being removed, not as a food contamination signal.

Parallel in failure mode to the three prior cluster stops (`MFK_cellulose-based-adsorbents`, `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe`, `MFK_demolition-waste-for-adsorption-of-metals-a-step-t`) and is one of the "6 remaining cluster members" explicitly anticipated in the prior `demolition-waste` stop note. The cluster boundary is the recurring distinction between wastewater-treatment R&D and food-contamination evidence: HMI's strategic frame (CLAUDE.md Part 1) is "the complete heavy metals food-and-supply-chain literature" — not environmental-remediation engineering.

**Identity checks (clean — no existing wiki page):**
- DOI grep `10.1007/s41101-023-00177-0`, `s41101.023.00177`: no matches
- Author grep `paranjape`, `sadgir`, `paranjape2023`: no matches
- Handle grep `MFK_heavy-metal-removal-using-plant-origin-biomass`, `Heavy-Metal-Removal-Using-Plant-Origin-Biomass`: no matches
- Title-substring grep `Heavy.Metal.Removal.Using.Plant`: no matches

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Standing cluster recommendation now has four-paper confirmation. Five remaining cluster members (Introduction-of-adsorption-techniques-for-heavy-metals-remediation, Investigation-of-the-agroecological-applications-of-olive-mill-wastewater-fractions, Natural-Clays-as-Adsorbents-for-the-Removal-of-Heavy-Metals-from-Phosphogypsum, Role-of-Extremophiles-in-the-Removal-of-Heavy-Metal-and-E-Waste, The-Role-of-Wastewater-Treatment-Technologies-in-Municipal-Landfill-Leachate-Treatment) will hit the same stop on subsequent ticks. Moving the full June 1 wastewater-remediation cluster to `raw/_out-of-scope/wastewater-remediation/` (or equivalent sideline location) drains the autonomy loop onto the substantive in-scope June 1 papers without burning a tick per cluster member.

## STOP: MFK_petrella2019 — out of HMI scope (wastewater-remediation packed-bed-column biosorption study; 5th cluster confirmation)

**PDF:** `raw/Manual Fetch Kimi /June 1/petrella2019.pdf`

**Suggested handle:** MFK_petrella2019

**Citation:** Petrella A, Spasiano D, Rizzi V, Cosma P, Race M, De Vietro N. Thermodynamic and kinetic investigation of heavy metals sorption in packed bed columns by recycled lignocellulosic materials from olive oil production. Chem Eng Commun. 2019. DOI: 10.1080/00986445.2019.1574768. Published online 21 Feb 2019. Politecnico di Bari (DICATECh), Università di Bari (Chemistry), Università di Cassino e del Lazio Meridionale (DICEM), and CNR Nanotec.

**Reason for stop:** Fifth confirmation of the June 1 wastewater-remediation cluster pattern. Same failure mode as `MFK_cellulose-based-adsorbents`, `MFK_chelated-heavy-metals-removal-by-in-situ-formed-fe`, `MFK_demolition-waste-for-adsorption-of-metals-a-step-t`, and `MFK_heavy-metal-removal-using-plant-origin-biomass-and` documented above.

The paper studies HCl/NaOH-pretreated, oven-dried, crushed olive-pomace particles (1–3 mm) — "BOP" (Biosorbent from Olive oil Production) — packed into 1 cm × 50 cm glass columns and eluted with **synthetic distilled-water nitrate solutions** of Pb(NO₃)₂, Cd(NO₃)₂·4H₂O, and Ni(NO₃)₂·7H₂O at 3, 6, and 10 mg·Me⁺²/L influent concentrations and 0.3–0.7 L/h flow rates, generating C/C₀ breakthrough curves (Figures 3–9), kinetic half-exchange times t₀.₅, and sorbent retention capacities Q_exp (Tables 1–6). Headline outcomes (verified by reading all 14 pages including the abstract, Experimental Section, Column Tests, Results & Discussion, all 8 tables, all 12 figures, the Conclusions, and the references list): selectivity order Pb²⁺ > Cd²⁺ > Ni²⁺; maximum capacities 8.15 / 3.5 / 2.9 mg/g_sorbent for Pb / Cd / Ni in the 10 mg/L multimetal solution with 8 g BOP at 0.3 L/h; film-diffusion control in the Nernst stationary liquid film identified as the rate-determining step; exhausted BOP characterized by FTIR-ATR + SEM-EDX (Figures 10–11, Table 7); spent metal-laden BOP encapsulated into CEM II A-LL cement mortars + recycled porous waste glass (Figure 12, Table 8) to obtain lightweight composites with thermal conductivity 0.16 W/m·K and compression strength 3.15 N/mm² for construction-industry reuse, with metals retained in the cement matrix below Italian-standardization leaching limits.

Two stacked scope mismatches with HMI:

1. **Subject-matter scope failure (wastewater engineering + cement-mortar circular-economy, not food/personal-care contamination):** The conclusions explicitly frame the work as "wastewater engineering as alternative materials for the selective removal of HM (Pb⁺², Ni⁺², Cd⁺²)" and note that "the concentrations of the influent solutions were measured in mg/L because … the regulation thresholds for the wastewater discharge are actually measured in mg/L." Matrix is synthetic aqueous metal-nitrate solution mimicking industrial-effluent loading; the downstream pathway is encapsulating the metal-laden sorbent into cement composites for construction-industry plaster/panel applications. No food matrix, no ingredient, no consumer product, no food-contact material, no human-exposure pathway, no commodity HMI tracks.

2. **No olive-oil-occurrence data despite the olive-oil-production substrate:** BOP is an industrial wastewater-treatment sorbent engineered from olive-mill solid residues (with HCl + NaOH pretreatment) — not olive pomace as feed or food. The paper measures sorption capacity of the **engineered sorbent**, never measures heavy-metal **content** of olive pomace itself as a feed or food matrix, and never characterizes olive-oil contamination. The la-pera2010 olive-oil paper (already ingested 2026-06-01 at commit `9156c44` and audited-promote at `aba6e1b`) is the on-topic olive-oil literature; this Petrella paper does not advance that thread.

**Identity checks (clean — no existing wiki page):**
- DOI grep `10.1080/00986445.2019.1574768` against `wiki/sources/`: no matches
- Author grep `petrella`, `petrella2019`, `spasiano`, `de.vietro` against `wiki/sources/`: no matches
- Handle grep `MFK_petrella2019`, `petrella2019` against `wiki/sources/`: no matches

**Action taken:** No ingest. No commits. No audit queue append. No frontmatter edits. Wrapper proceeds to next PDF.

**Recommendation for Karen:** Cluster pattern is now five-paper-confirmed. Remaining members of the June 1 wastewater-remediation set (the four originally listed plus any sibling biosorption / column-sorption / cement-encapsulation papers in the same folder) will hit the same stop on subsequent ticks. Moving the cluster to `raw/_out-of-scope/wastewater-remediation/` continues to be the cheap-and-correct sideline action. The substantive in-scope June 1 papers (mushroom-mercury, milk-metals, olive-oil-metals, cosmetics-Pb/Cd, etc.) continue to drain normally on parallel ticks.
