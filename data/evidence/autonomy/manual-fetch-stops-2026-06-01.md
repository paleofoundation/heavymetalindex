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
