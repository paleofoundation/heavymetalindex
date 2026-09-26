# Baby lotions, oils, and powders: reading brief

Prepared 26 September 2026 from a 19-PDF collection. This brief, the number ledger, and the flags file are written so that a synthesis can be drafted from them without reopening the PDFs. The brief is descriptive. It reports what each source measured and printed and what each source can and cannot support. It draws no conclusions across studies and sets no threshold.

Companion files:

- Number ledger: `docs/briefs/baby-lotions-oils-powders-number-ledger.csv`, 1,536 rows, IDs BLOP-0001 to BLOP-1536.
- Flags: `data/evidence/baby-lotions-oils-powders-ingest-2026-09-26-flags.csv`, 46 flags, F01 to F46 (25 resolved, 21 unresolved).
- Structured evidence files (per-sample tables): `data/evidence/yaghi2026-baby-powder-mg-per-kg.csv`, `omenka2016-personal-care-products-mg-per-kg.csv`, `arshad2020-cosmetics-table1-mg-per-kg.csv`, `almukainzi2022-topical-cosmetics-table4-ppm.csv`, `stone2021-baby-powder-and-cream-packaging-ppm.csv`, `islam2024-edible-fats-oils-ppm.csv`. Each row carries its ledger row ID.
- Claims: twelve rows added to `data/evidence/claims.jsonl` for this collection.
- Source pages: `wiki/sources/<cite-key>.md` for every cite key named below.

## How to read the ledger

Each ledger row holds one number exactly as printed, with its metal, matrix, sample code, basis, unit, statistic, n, page, and table or figure. `raw_sha256` identifies the PDF. `flag_ids` points to the flags file.

The `value_role` column separates five kinds of number:

- `primary_measurement` (1,431 rows): a value the source reports from its own analysis, including prose variants of table values where the two disagree.
- `biological_monitoring` (11 rows): blood or breast-milk lead in the two case reports.
- `secondary_citation` (10 rows): values one paper quotes from other studies. They are not that paper's data.
- `limit_as_cited` (61 rows): a limit or reference value as a paper attributes it. Many are not confirmed by a primary text in this collection.
- `limit_instrument` (23 rows): a limit read from the primary text of a government instrument in this collection.

Basis terms used: `as-sold` (finished product as purchased), `dry` (after drying; see Omenka), `wet weight` (edible oils), `digest solution` (a reading of the acid digest, not a concentration in the product), `leachate` (the 21 CFR 73.1550 acid extract of talc), `whole blood` and `biological fluid`. Where a source does not state its basis, the ledger says "not stated". Arsenic is total arsenic and chromium is total chromium throughout; no source in the collection speciates arsenic, mercury, or chromium.

Scope of the ledger. For the five primary studies with baby lotion, oil, or powder data (Yaghi, Omenka, Arshad, Almukainzi, Islam), every concentration cell in every data table is ledgered, including non-baby products in the same tables, so that sample context is not lost. For Stone 2021, only the three baby-relevant samples are ledgered; the rest of that 150-component survey is out of scope and its wipe rows are in the baby wipes ledger. Secondary comparisons with other studies are ledgered only where they concern powders or talc (Yaghi). Omenka's Table 8 comparison with other studies (eyeliners, lipsticks, creams from other papers) is not ledgered; its lower rows are misaligned in the PDF. Risk-model outputs (hazard quotients, cancer risks, daily intakes) are not concentrations and are not ledgered.

## Collection inventory

All 19 PDFs passed the SHA-256 check. Seven PDFs matched existing wiki source records by DOI or title; for those, only missing facts were added.

| PDF in the collection | Cite key | Status |
| --- | --- | --- |
| Yaghi 2026, baby powder, Benghazi | yaghi2026-baby-powder-benghazi-libya | new page |
| Omenka 2016, personal care products, Ibadan | omenka2016-personal-care-products-ibadan | new page |
| Duan 2023, infant lead poisoning case | duan2023-infant-lead-poisoning-topical-powder | new page |
| USGS record of Karwowski 2016 (abstract) | karwowski2016-folk-diaper-powder-infant-lead | new page |
| Shenzhen Consumer Council 2020 news report | szcc2020-infant-powders-shenzhen-consumer-council | new page |
| China Food and Drug Network 2019 news report | cnpharm2019-nmpa-notice-childrens-powder-lead | new page |
| Rosnan 2017 undergraduate report excerpt | rosnan2017-talcum-powder-cu-pb-ni-aas | new page |
| Lead Safe Mama 2025 blog post | leadsafemama2025-baby-lotion-single-lot | new page |
| Islam 2024, edible fats and oils | islam2024-edible-fats-oils-bangladesh | new page |
| 21 CFR 73.1550 (2025 edition) | cfr2025-21cfr73-1550-talc-color-additive | new page |
| JECFA talc specification (2003) | jecfa2003-talc-ins553iii-specification | new page |
| Health Canada Diaper Rash Products Monograph (2024) | healthcanada2024-diaper-rash-products-monograph | new page |
| Almukainzi 2022, topical cosmetics, Riyadh | almukainzi2022-saudi-topical-cosmetics-icpms | existing page; identical file |
| Arshad 2020, cosmetics, Pakistan | arshad2020-heavy-metals-cosmetic-products-pakistan | existing page; second copy (PMC) |
| Stone, Washington Ecology 14-04-014 (revised June 2021) | stone2021-wa-metals-childrens-consumer-products | existing page; identical file |
| BVL 2016/2017, technically avoidable heavy metals | bvl2017-technically-avoidable-heavy-metals-cosmetics | existing page; identical file |
| Health Canada cosmetics impurity guidance (modified 2017-10-02) | healthcanada2012-cosmetics-heavy-metal-impurities | existing page; later copy |
| Health Canada Quality of NHP Guide v3.1 | healthcanada2015-natural-health-products-quality-guide | existing page; later printing |
| Washington RCW 70A.560 | wa-tfca-hb1047-2023 | existing page; statutory text added |

Fourteen manifest entries had no PDF and were not ingested. They are listed at the end of this brief.

## Primary measurement studies: commercial baby powders

### Yaghi et al. 2026, Benghazi, Libya (yaghi2026-baby-powder-benghazi-libya)

Design. Sixteen baby talcum powders bought from Benghazi pharmacies in November 2024, coded P1 to P16, countries of origin Thailand, Indonesia, Saudi Arabia, Italy, Turkey, Tunisia, and the United Arab Emirates. Two grams digested with nitric acid and hydrogen peroxide on a hot plate, triplicate digests, flame AAS (GBC 932 Plus). Peer-reviewed regional journal. Crossref publication date 25 January 2026; the PDF issue is dated December 2025 (F01).

Metals. Al, Cd, Cr (total), Cu, Pb, Ni. No As, Hg, Sn, or Cr(VI).

Results, Table 5, mg/kg as sold (mean of triplicate; LDL = below detection, limit not printed):

- Aluminium 12.325 (P2, BLOP-0015) to 275.475 (P11, BLOP-0132), detected in all 16; mean 113.183 (BLOP-0223).
- Copper 7.525 (P10, BLOP-0125) to 77.475 (P11, BLOP-0138), detected in all 16; mean 27.495 (BLOP-0226).
- Chromium below detection in 4; detected 1.550 (P8, BLOP-0097) to 49.975 (P9, BLOP-0110); mean 18.014 with LDL as zero (BLOP-0225).
- Nickel below detection in 6 in Table 5; detected 0.675 (P13, BLOP-0168) to 54.700 (P11, BLOP-0142), with P3 at 50.125 (BLOP-0038); mean 10.436 (BLOP-0228).
- Cadmium below detection in 5; detected 2.275 (P1, BLOP-0004) to 22.600 (P14, BLOP-0173), with P10 at 19.375 (BLOP-0121); mean 5.814 (BLOP-0224).
- Lead below detection in 6; detected 0.65 (P9, BLOP-0114) to 15.575 (P16, BLOP-0205), with P3 at 12.775 (BLOP-0036) and P12 at 10.45 (BLOP-0153); mean 4.591 (BLOP-0227).

Per-sample cells: Table 5 rows are the even-numbered ledger rows in BLOP-0002 to BLOP-0207, and Table 4 digest readings (ppm of digest) are the odd-numbered rows in BLOP-0001 to BLOP-0206. Every detected Table 5 cell equals the Table 4 cell times 25, except sample P5 nickel (BLOP-0063, BLOP-0064), which is detected in Table 4 and LDL in Table 5 (F03, unresolved).

Not usable. The Total Metals column (F04; eight of sixteen rows fail to add up), the Table 4 mean row (F05), the prose maxima and counts that differ from Table 5 (F06, F07, F08; prose rows BLOP-0242 to BLOP-0245), the abstract claim that every metal exceeded the authors' reference values in every powder (F09), and the row labelled FDA limits (Al 0.400, Cd 3.000, Cr 5.000, Cu 13.000, Pb 0.100, Ni 0.600 mg/kg; BLOP-0236 to BLOP-0241), whose cited references do not set such limits (F02, unresolved). Secondary values quoted from other powder studies (BLOP-0246 to BLOP-0255) point in several cases to unrelated reference-list entries (F37).

Limitations. No detection limits, reference materials, or recoveries. One product per code. The risk model has internal anomalies (F38). The authors' risk conclusion is that hazard indices and cancer risks were below their criteria; that is a model output, not a measurement.

### Omenka and Adeyi 2016, Ibadan, Nigeria (omenka2016-personal-care-products-ibadan)

Design. Thirty-five sealed personal care products from six Ibadan markets (manufacture dates 2011 to 2014): 20 creams and lotions, 10 powders, 5 eyeliners. Samples dried (creams at 70 to 80 °C, eyeliners at 105 °C), about 0.5 g digested in aqua regia, flame AAS (Buck Scientific 210/211 VGP). Duplicate analysis on 17 samples. Spike recovery 91 to 98% on two creams. Four products re-analysed by two other laboratories (Table 11). Peer-reviewed.

Metals. Zn, Cd, Pb, Ni.

Baby products in the set:

- Baby powder 7PP (ash 95.9%, moisture 0.36%): Zn 112,000, Cd ND, Pb 468, Ni 5.75 mg/kg (BLOP-0360 to BLOP-0363). The lead value is corroborated by the other two laboratories at 508.5 and 364.63 mg/kg (Table 11; F39, resolved). The zinc (11.2% by mass) was reported as 103,750.8 and 41,872.6 mg/kg by the other laboratories (F40).
- Baby powder 8PP (ash 96.4%, moisture 0.99%): Zn 33.9 ± 0.1, Cd 36.3 ± 0.0, Pb 5.0 ± 0.0, Ni 0.13 ± 0.2 mg/kg (BLOP-0364 to BLOP-0367). The cadmium was reported as 25 and 0.38 mg/kg by the other laboratories (F12, unresolved and contested).
- Baby petroleum jellies 3CC, 7CC, 18CC, 19CC and a jelly named for mothers, 20CC (BLOP-0264 to BLOP-0267, BLOP-0280 to BLOP-0283, BLOP-0324 to BLOP-0335): lead ND to 5.00, cadmium ND to 0.13, nickel ND to 4.00, zinc 5.50 to 16.5 mg/kg. Moisture 0.12 to 14.7%.

Category summaries (Table 6, BLOP-0408 to BLOP-0419): powders (n = 10; printed as 5, F10 resolved) Pb 49.6 ± 147, Cd 3.69 ± 11, Ni 13.5 ± 33, Zn 11,715 ± 35,270 mg/kg; creams (n = 20) Pb 2.59 ± 2.4, Cd 0.11 ± 0.2, Ni 2.12 ± 1.9, Zn 8.11 ± 4.3 mg/kg. Ranges BLOP-0396 to BLOP-0407.

Basis. Results are on dried sample mass, but the paper never states the reporting basis. For powders the difference is at most 1.2% (F45, resolved). For creams it is unresolved (F13): up to about 17% for the baby jellies and up to about eight-fold for the wettest creams in the set.

Other flags. Abstract and prose ranges that differ from the tables (F11; BLOP-0420 to BLOP-0425). Table 7 limit attributions (BLOP-0462 to BLOP-0472; F14): only Health Canada's Cd 3 and Pb 10 ppm are confirmed by a primary text here.

### Almukainzi et al. 2022, Riyadh, Saudi Arabia (almukainzi2022-saudi-topical-cosmetics-icpms)

Design. Twenty-one topical cosmetics chosen from a 447-person survey, one product per category, closed-vessel acid digestion following USP <232>, ICP-MS. Microbial counts in parallel. Peer-reviewed.

Baby products. Sample 8, baby oil (light paraffin oil and perfume) and sample 9, baby powder (talc, zinc oxide, salicylic acid, menthol, perfume). Values, ppm, mean ± SD: baby oil Pb 5.52 ± 7.81, Ni 13.16 ± 18.59, Cr 21.17 ± 29.88, Al 26.81 ± 37.89, Cd 0.23 ± 0.33, As 0.15 ± 0.22 (BLOP-1024 to BLOP-1034); baby powder Pb 23.18 ± 31.82, Ni 24.67 ± 34.61, Cr 39.08 ± 54.96, Al 3774.14 ± 5283.13, Cd 0.38 ± 0.54, As 1.19 ± 1.67 (BLOP-1035 to BLOP-1045). The paper counts the baby powder among six products above 20 ppm lead. Microbial counts: baby oil 1471.5 cfu/ml, baby powder 823.5 cfu/ml.

Limitation. In nearly every Table 4 cell the SD is about 1.41 times the mean and the replicate count is not stated (F20, unresolved). These means are contested. The full 21-product table is in BLOP-0947 to BLOP-1177.

### Stone, Washington State Department of Ecology, 14-04-014 revised 2021 (stone2021-wa-metals-childrens-consumer-products)

Design. State agency survey of 150 children's-product components and 26 packaging components, XRF screening then ICP-MS and CVAA by a contract laboratory. The file name in the collection says 2014; the PDF is the June 2021 revision and is identical to the existing record (F36).

Baby items. One baby powder of unstated formulation (FM006-c01): Cr 2.2, Co 0.4, Pb 0.4, Mo 0.2, Cu 0.4, Zn 2.3 ppm; Sb, As, Cd, Hg printed as 0.0 (BLOP-1186 to BLOP-1235, sample FM006-c01). Two "-b" samples, DT033-b01 and DT008-b02, are the containers of a baby cream and a petroleum jelly, listed as packaging in Table 4 (PDF p. 25) and duplicated in the product appendix because they meet both definitions (PDF p. 13). The cream container carried Co 36.9, Mo 2.6, Cd 1.1, Zn 5.6 ppm; the jelly container Zn 18.8 ppm. These are not contents (F21, resolved). The report's narrative calls DT033 a baby cream (BLOP-1236).

Limitation. The report does not define 0.0 or print reporting limits; the survey's quality plans list 1.0 ppm for Sb, As, Cd, and Pb (F22, unresolved). The baby powder values are all below that level.

## Primary measurement studies: baby lotion

### Arshad et al. 2020, Abbottabad, Haripur, and Mansehra, Pakistan (arshad2020-heavy-metals-cosmetic-products-pakistan)

Design. Sixty-three cosmetics in triplicate (189 measurements), including 30 lotions, digested with nitric, sulphuric, and perchloric acids, flame AAS (PerkinElmer AAnalyst 700), NIST SRM 1515 recovery 97 to 102%. Peer-reviewed.

Baby lotion L19: Cd 0.27 ± 0.02, Cr 0.67 ± 0.03, Fe 2.01 ± 0.72, Ni 6.16 ± 0.33, Pb 7.94 ± 0.10 mg/kg (BLOP-0563 to BLOP-0567). Petroleum jelly L23: Cd bdl, Cr bdl, Fe 0.34 ± 0.05, Ni 2.35 ± 0.29, Pb 1.49 ± 0.03 mg/kg (BLOP-0583 to BLOP-0587). Both read from the text layer and checked against a page render. Across the 30 lotions (BLOP-0473 to BLOP-0622), lead ran 0.068 to 8.29 mg/kg and nickel up to 6.29 mg/kg. The lotion summary rows are BLOP-0623 to BLOP-0642; the Mean row is a detected-only mean for Cd, Cr, and Ni. A spray sunscreen labelled for babies (S5) is in the sunblock group (BLOP-0878 to BLOP-0882).

Flags. Lotion Max row Cr 1.00 against a highest cell of 0.69 (F15, unresolved); Table 2 lotion Ni 3.0 against Table 1 2.592 (F18, unresolved); prose L1 cadmium precision (F16, resolved); prose attribution of the lowest iron to L23 when Table 1 gives it to L7 (F17, resolved). Limits the authors cite (BLOP-0940 to BLOP-0946) are not confirmed by an FDA text here (F19).

### Lead Safe Mama 2025 (leadsafemama2025-baby-lotion-single-lot)

One lot of one US baby lotion, April 2025, reported non-detect: lead below 5 ppb, cadmium below 5 ppb, mercury below 5 ppb, arsenic below 10 ppb (BLOP-1274 to BLOP-1277). Only a summary graphic is in the PDF; the laboratory, method, and report are not (F28). The comparison values beside the results are 2021 proposed baby-food levels from an unenacted bill (BLOP-1278 to BLOP-1281). Grey literature.

## Grey literature and regulatory enforcement: infant powders in China

### Shenzhen Consumer Council 2020, news report (szcc2020-infant-powders-shenzhen-consumer-council)

Twenty infant powders (14 domestic, 6 imported), talc-based and plant-starch-based. All met the Chinese national standard. Maxima: lead 3.5, arsenic 0.87, cadmium 0.31 mg/kg (BLOP-1259 to BLOP-1261). Four samples exceeded the German BVL values (lead 1 sample above 2, arsenic 1 above 0.5, cadmium 4 above 0.1; one exceeded all three), and all four were plant-starch powders without talc. The council report was not obtained and the result image did not render; no per-sample data. The German values quoted match BVL 2017 (F44).

### China Food and Drug Network 2019, news report of an NMPA notice (cnpharm2019-nmpa-notice-childrens-powder-lead)

Re-test lead of 19.3 mg/kg in a children's talc powder batch and 19.45 mg/kg in an infant pine-pollen skin powder batch, against a 10 mg/kg limit (BLOP-1265 to BLOP-1267). A provincial decision found three batches of the talc powder over the limit, all from the same talc raw material. The pine-pollen powder was marketed as talc-free. The 10 mg/kg figure matches the 2015 Chinese cosmetics standard in the register of record (F44).

### Rosnan 2017, undergraduate report excerpt (rosnan2017-talcum-powder-cu-pb-ni-aas)

Eight medicated and non-medicated talcum powders, Malaysia, flame AAS. Abstract ranges in mg/L of digest solution: non-medicated Cu 0.046 to 0.085, Pb 0.298 to 0.754, Ni 0.025 to 0.160; medicated Cu 0.048 to 0.053, Pb 0.449 to 0.596, Ni 0.029 to 0.040 (BLOP-1268 to BLOP-1273). Not convertible to mg/kg from the excerpt, and not stated to be baby powders (F27).

## Case reports: lead-containing traditional and folk powders

### Duan et al. 2023, Chengdu, China (duan2023-infant-lead-poisoning-topical-powder)

A traditional Chinese topical powder used by a breastfeeding mother on her own armpits and under her breasts contained 180.1 ± 0.6 mg/kg lead (BLOP-1237). Her exclusively breastfed infant's blood lead: above 200.0 µg/L at 6 months (May 2020), 429.9, 454.0, and 435.0 µg/L over June and July 2020, 272 µg/L after three chelation cycles, and 84.29 µg/L on 27 January 2022 (BLOP-1241 to BLOP-1246). Mother 77.0 µg/L, father 36.9 µg/L, breast milk 10.0 ± 0.7 µg/L (BLOP-1238 to BLOP-1240). The powder was not applied to the infant. The method for the powder is not stated. The "after 5 months" wording does not fit the printed dates (F24). The paper cites a cosmetics limit of 40 mg/kg and a food limit of 5 mg/kg (BLOP-1247, BLOP-1248); the in-force Chinese cosmetics limit in the register of record is 10 mg/kg (F25, F43). The discussion describes red and yellow lead-oxide powders used in several provinces for infant diaper rash, eczema, and heat rash, as literature background.

### Karwowski et al. 2016, abstract only (karwowski2016-folk-diaper-powder-infant-lead)

A non-commercial Malaysian folk diaper powder used on a 9-month-old US-born infant contained 62% lead by weight, mainly lead oxide, with antimony 1000, arsenic 55, bismuth 110, and thallium 31 ppm (BLOP-1251 to BLOP-1255). Infant blood lead 13 to 18 µg/dL during use and 8 µg/dL four weeks after stopping (BLOP-1256, BLOP-1257). The metals were highly bioaccessible in simulated gastric fluid and slightly in simulated lung fluid. Full text not obtained, so no method is available.

## Context: edible oils

### Islam et al. 2024, Bangladesh (islam2024-edible-fats-oils-bangladesh)

Thirty edible fats and oils, including 10 mustard oils, nitric-perchloric digestion, AAS, wet-weight ppm, single determinations. Mustard oil: nickel 0.550 to 11.3 (mean 4.93), lead detected in 2 of 10 (0.490 in M6, BLOP-1390; 0.73 in M10, BLOP-1418), cadmium below detection in all (mustard oil rows BLOP-1352 to BLOP-1421; all rows BLOP-1282 to BLOP-1491). The paper concerns edible use only and does not mention infant massage or skin application. Prose and abstract variants are flagged (F29; BLOP-1492 to BLOP-1497). Edible-oil standards it cites are not in this collection (F30; BLOP-1498 to BLOP-1508).

## Government and regulatory limits appearing in these sources

Part A lists limits read from primary government texts in this collection. Part B lists limits that papers attribute to regulators but that no primary text in this collection confirms. Part B values are recorded for completeness and are not suitable for limit comparisons.

### Part A. Limits verified from primary text in this collection

| Instrument | Article, section, or table | Analyte | Value | Basis | Scope | Ledger |
| --- | --- | --- | --- | --- | --- | --- |
| Health Canada, Guidance on Heavy Metal Impurities in Cosmetics (effective 2012-07-20; modified 2017-10-02) | Section 4, Policy statement; footnote 21 | Pb; As; Cd; Hg; Sb | 10; 3; 3; 1; 5 ppm | finished cosmetic as sold; impurities above these are technically avoidable; case-by-case enforcement | all cosmetics sold in Canada, including baby lotions, oils, powders sold as cosmetics | BLOP-1512 to BLOP-1516 |
| Health Canada NNHPD, Quality of Natural Health Products Guide v3.1 (1 May 2015) | Section 3.2.2, Table 2 | As; Cd; Pb; total Hg; Sb | 3; 3; 10; 1; 5 ppm | finished topical product | topical natural health products, including diaper-rash powders made only with NHP ingredients such as corn starch or kaolin | BLOP-1522 to BLOP-1526 |
| Same guide | Appendix 3, general finished product specifications | chromium, labelled "Chromium IV (if applicable)" | 5 ppm topical | finished product | label conflicts with section 3.2.1.2 (Chromium VI); absent from Table 2 (F34, unresolved) | BLOP-1527 |
| German BVL, Technically avoidable heavy metal contents in cosmetic products (J Consum Prot Food Saf 12:51-53) | Table 1, cosmetic products in general | Pb; Cd; Hg; As; Sb | 2.0; 0.1; 0.1; 0.5; 0.5 mg/kg | as sold, pressure digestion (method K 84.00-29) | cosmetics in general; baby powder was one of the monitored groups (2010-2012, 1735 samples); orientation values under Regulation (EC) 1223/2009 Article 17, not statutory maxima | BLOP-1528 to BLOP-1532 |
| Same | Table 1 footnotes a and b | Pb; As | 5 mg/kg (make-up powder, rouge, eye shadow, eyeliner, kajal, theatre make-up); 2.5 mg/kg (theatre make-up) | as sold | not baby products | BLOP-1533, BLOP-1534 |
| Washington State, Chapter 70A.560 RCW (2023 c 455; certified 7/12/2024) | RCW 70A.560.020(2) | Pb | intentionally added at any level, or at or above 1 ppm, prohibited from 1 January 2025 (retail stock to 1 January 2026) | finished cosmetic | cosmetics sold in Washington; FDA-approved prescription drugs and ingredients regulated as drugs excluded (subsection 7) | BLOP-1535 |
| Same | RCW 70A.560.020(1)(e) | Hg | intentionally added mercury prohibited; no numeric value | finished cosmetic | same | BLOP-1536 |
| US FDA, 21 CFR 73.1550 Talc (2025 edition) | 73.1550(b) | Pb; As | 20; 3 ppm | leachate: 10 g talc boiled 15 min in 50 mL 0.5 N HCl, expressed per mass of talc; extractable, not total content, and never to be compared directly with total-content results | talc as a colour additive in drugs; raw-material specification, not a finished-product limit (F32); register rows annotated accordingly | BLOP-1509, BLOP-1510 |
| FAO/WHO JECFA, Talc INS 553(iii) specification (61st JECFA, 2003; FNP 52 Add 11) | Purity, Lead | Pb | 2 mg/kg | ingredient as sold, AAS | food-grade talc, oral use; a food-additive specification, not a cosmetic limit, and excluded from any topical-product limit comparison (register row jecfa2003_pb_talc_food_additive_2000); no As, Cd, or Hg specification listed | BLOP-1511 |
| Health Canada NNHPD, Diaper Rash Products Monograph (2024-02-23) | Tables 1 to 3; Specifications | none | no metal value | not applicable | assigns corn starch, kaolin, zinc oxide, calamine, allantoin products to the NHP Guide route and mineral oil, petrolatum, dimethicone products to the drug regulations (F42) | none |

Historical German values cited by Health Canada (1985 orientation values: Pb 20, As 5, Cd 5, Hg 1, Sb 10 ppm for cosmetics) are in BLOP-1517 to BLOP-1521. BVL 2017 supersedes them.

### Part B. Limits attributed to regulators by papers, not confirmed by a primary text in this collection

| Attributed to | Analyte and value as printed | Where printed | Ledger | Flag |
| --- | --- | --- | --- | --- |
| "FDA", baby powder | Al 0.400, Cd 3.000, Cr 5.000, Cu 13.000, Pb 0.100, Ni 0.600 mg/kg | Yaghi Table 5 and section 3.1 | BLOP-0236 to BLOP-0241 | F02 |
| WHO; Health Canada; EU; US; Germany | Cd 0.3, 3, 0.5, 0.08, 0.1 ppm; Pb 10, 10, 0.5, 1.0, 1.0 ppm; Ni (US) 0.6 ppm | Omenka Table 7 | BLOP-0462 to BLOP-0472 | F14 (Health Canada values confirmed; German Pb not) |
| USFDA; Cosmetica Italia; Canada (HCSC) | Cr 50, Ni 200, Cd 3 mg/kg; Ni below 1.0 and 0.5 mg/kg dermatitis thresholds | Arshad pp.781-784 | BLOP-0940 to BLOP-0946 | F19 |
| US FDA; USP <232> | Pb 10 and 20, Cr 50, As 3 ppm; Cd 0.5, Co 5, Ni 20, Cu 300 ppm | Almukainzi pp.8-9 | BLOP-1178 to BLOP-1185 | F19 |
| China National Cosmetics Hygiene Standard; National Food Safety Standard | Pb 40 mg/kg; Pb 5 mg/kg | Duan p.2 | BLOP-1248, BLOP-1247 | F25, F43 |
| China national cosmetics limit | Pb ≤10 mg/kg | CNPharm news report | BLOP-1267 | F44 (matches register of record) |
| German BVL | Pb 2, As 0.5, Cd 0.1 mg/kg | SZCC news report | BLOP-1262 to BLOP-1264 | F44 (matches BVL 2017) |
| Codex; GB/T 23347-2021; RD 308/1983; BDS 1979 | edible-oil values for Pb, Cu, Fe, Ni, Mn | Islam Table 4 | BLOP-1498 to BLOP-1508 | F30 |
| Baby Food Safety Act of 2021 (US bill, not enacted) | Pb 5, Cd 5, Hg 2, As 10 ppb | Lead Safe Mama graphic | BLOP-1278 to BLOP-1281 | F28 |
| US child blood lead reference level | below 5 µg/dL | Karwowski abstract | BLOP-1258 | none |
| China children's blood lead intervention and chelation levels | 100 and 450 µg/L | Duan p.3 | BLOP-1249, BLOP-1250 | none |

Not obtained (named in the manifest; no primary text in this collection): the FDA guidance recommending a 10 ppm maximum for lead in externally applied cosmetics, Korea's Regulation on Cosmetic Safety Standards Article 6, and China's 2015 Safety and Technical Standards for Cosmetics. Records for the Korean and Chinese standards already exist in the corpus from earlier ingests (koreamfds2024-notice-2024-9-cosmetic-safety-standards, mfds2025-cosmetics-safety-standards, nmpa2015-cosmetics-safety-technical-standards); they were not re-verified for this brief.

## Comparability notes for the synthesis author

These notes describe the evidence; they are not findings.

Units and bases differ across the collection. Yaghi, Arshad, Almukainzi, SZCC, CNPharm, and Duan report mg/kg (or ppm) of product, with the basis stated or implied as sold. Omenka reports mg/kg after drying, which matters for creams and not for powders. Rosnan reports mg/L of digest and cannot be converted. Lead Safe Mama reports ppb non-detect thresholds. Stone reports ppm per component with an undefined 0.0. Karwowski reports percent by weight and ppm. The 21 CFR 73.1550 limits are extractable (acid extract), not total.

Censoring conventions differ. Yaghi prints LDL without a limit. Omenka prints ND without a limit. Arshad prints bdl without a limit. Islam prints below detection without a limit. Only Lead Safe Mama prints a numeric threshold. Means with non-detects counted as zero (Yaghi Table 5) are not comparable with detected-only means (Arshad Table 1 Mean row for Cd, Cr, Ni).

Talc and starch. Yaghi's sixteen products are labelled baby talcum powders. Omenka's two baby powders have ash above 95%, consistent with a mineral base. Almukainzi's baby powder lists talc. The SZCC report states that the four samples above the German values were plant-starch powders without talc. The CNPharm notice covers one talc powder and one pine-pollen powder. Stone's baby powder formulation is not stated. No source measures a product identified as a corn-starch baby powder.

Two high-concentration powders in the collection are folk or traditional remedies, not commercial baby powders: the traditional powder in Duan (lead 180.1 mg/kg, used by the mother) and the folk diaper powder in Karwowski (lead 62% by weight).

Baby oil. The only direct baby-oil measurement is Almukainzi's single paraffin-oil sample, whose dispersion is flagged. Islam's mustard oil data are edible-oil context and the paper makes no skin link.

Sample sizes are small. The largest set of commercial baby powders with per-sample values is Yaghi's 16. Omenka has 2 baby powders, Almukainzi 1, Stone 1. Arshad has 1 baby lotion; Omenka 4 baby jellies; Lead Safe Mama 1 lot.

## Decisions recorded on 26 September 2026

- The two 21 CFR 73.1550 register rows now state that the talc limits are measured on an acid extract (extractable, not total content) and must never be compared directly with total-content results. The JECFA food-grade talc lead specification (2 mg/kg) is in the register as a food-additive specification for oral use, excluded from topical-product limit comparisons.
- Folk and traditional lead-oxide powders (Duan 2023, Karwowski 2016) get no product row. They appear as a named hazard note on the children's personal care hub page.
- The Health Canada NHP guide's methylmercury value is an oral limit only. The not-material warning it raised on topical rows is suppressed with a recorded reason (F46).
- Uncontested total-content values were promoted into `data/evidence/values.jsonl` (value_id prefix `lotions-ingest-1-`) and summarised in `data/evidence/category2_baby_topicals_occurrence_summary.csv`: 96 rows for baby talcum powder (Yaghi Table 5 cells except P5 nickel, and the China talc-powder re-test), 4 for corn-starch baby powder (the three Shenzhen maxima, which the article ties to plant-starch powders, and the China pine-pollen re-test), 5 for baby lotion (Arshad L19), and 0 for baby oil. Not promoted: every value with an unresolved flag, the Omenka results (dried samples, reporting basis not stated), the Rosnan digest readings (mg/L), the extract-basis CFR values, Stone's baby powder (0.0 convention unresolved), Almukainzi's baby oil and powder (dispersion unresolved), the single-lot lotion non-detects (no laboratory report), and the two case-report powders. The summary carries only printed values per source; nothing is pooled across sources.

## Unresolved flags (21)

F02 Yaghi FDA-labelled limits row. F03 Yaghi P5 nickel. F04 Yaghi Total Metals column. F05 Yaghi Table 4 means. F12 Omenka 8PP cadmium. F13 Omenka cream basis. F14 Omenka Table 7 attributions. F15 Arshad lotion Cr maximum. F18 Arshad Table 2 versus Table 1. F19 FDA limits cited by Arshad and Almukainzi. F20 Almukainzi dispersion. F22 Stone 0.0 and reporting limits. F24 Duan dates. F27 Rosnan units. F28 Lead Safe Mama laboratory report. F30 Islam edible-oil standards. F34 Health Canada chromium label. F37 Yaghi citation mismatches. F38 Yaghi risk-model anomalies. F40 Omenka inter-laboratory disagreements other than 7PP lead. F43 Duan food limit citation. Values carrying an unresolved flag are kept verbatim and are contested; they should not be used as headline values or in limit comparisons. Reasons, pages, units checks, erratum checks, and corresponding-author emails are in the flags file.

## Manifest entries without a PDF (14, not ingested)

1. Karwowski et al. 2017, Environ Geochem Health 39(5):1133-1143, full text (doi:10.1007/s10653-016-9881-6). Paywalled; the abstract is ingested from the USGS record.
2. Almugren et al. 2023, The presence of NORMs and toxic heavy metals in talcum baby powder, J Radiat Res Appl Sci 16(4):100660 (doi:10.1016/j.jrras.2023.100660). Publisher returned a bot block. Yaghi quotes it for Cd 4.883 to 5.846 mg/kg and Pb 2.585 to 1.944 mg/kg (BLOP-0249, BLOP-0253); those are secondary values.
3. Lin et al. 2012, Lead powder use for skin care and elevated blood lead level among children in a Chinese rural area, J Expo Sci Environ Epidemiol 22(2):198-203 (doi:10.1038/jes.2011.46). Paywalled.
4. Lin et al. 2012, Childhood lead poisoning associated with traditional Chinese medicine, Clin Chim Acta 413(13-14):1156-1159 (doi:10.1016/j.cca.2012.03.010). Paywalled.
5. Nnorom 2011, Trace metals in cosmetic facial talcum powders marketed in Nigeria, Toxicol Environ Chem 93(6):1135-1148 (doi:10.1080/02772248.2011.577075). Paywalled. Omenka Table 8 quotes it for Pb 0.4 to 4.1 and Cd ND to 8.1 mg/kg.
6. Rehman G, Bukhari IH, et al. 2013, Determination of toxic heavy metals in different brands of talcum powder, Int J Appl Nat Sci 2(2):45-52. Only a copy of unclear licence was found. Yaghi quotes it (BLOP-0246, BLOP-0252, BLOP-0254).
7. Rashmi 2020, heavy metals in baby talcum powders, IRIS Journal for Young Scientists vol. X. Site challenge not bypassed. A record exists in the corpus from an earlier ingest (rashmi2020-baby-talcum-powder-heavy-metals-india).
8. Balogun et al. 2024, heavy metals in body creams, Delta State, Nigeria. Link returned 404. A record exists in the corpus from an earlier ingest (balogun2024-body-creams-delta-nigeria).
9. CDC 2012, Infant lead poisoning associated with use of tiro, an eye cosmetic from Nigeria, MMWR 61(30):574-576. Access denied.
10. FDA 2016/2022, Guidance for Industry: Lead in Cosmetic Lip Products and Externally Applied Cosmetics: Recommended Maximum Level. Bot check.
11. Hepp et al. 2014, Survey of cosmetics for arsenic, cadmium, chromium, cobalt, lead, mercury, and nickel content, J Cosmet Sci 65(3):125-145. Open status unclear. A record exists in the corpus from an earlier ingest (hepp2014-fda-cosmetics-seven-elements).
12. Korea Ministry of Food and Drug Safety, Regulation on Cosmetic Safety Standards, Article 6. Page rendered blank.
13. China NMPA 2015, Safety and Technical Standards for Cosmetics. TLS failure and bot challenge. A record exists in the corpus (nmpa2015-cosmetics-safety-technical-standards).
14. China NMPA notice of 26 December 2019 on 27 non-compliant cosmetic batches. Bot challenge; the CNPharm news report stands in for it.
