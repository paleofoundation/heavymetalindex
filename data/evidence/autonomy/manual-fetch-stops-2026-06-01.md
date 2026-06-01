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
