# Diaper creams: reading brief for the evidence synthesis

Prepared 2026-09-26 from the diaper-creams source collection (ingest CREAMS-INGEST-1). This brief and the number ledger at `docs/briefs/diaper-creams-number-ledger.csv` are meant to be enough to write the synthesis without reopening the PDFs. Every number below carries a ledger row ID (DCL-nnnn) and every inconsistency a flag ID (Fnn) from `data/evidence/diaper-creams-ingest-2026-09-26-flags.csv`. Values under an UNRESOLVED flag are marked "barred": they are kept verbatim for completeness and must not appear in a headline or in a limit comparison.

The brief is neutral. It reports what each source measured or set, on what basis, and with what limitations. It does not propose a certification value and does not name any brand or product. Brand names appear only on the consumer-testing source pages, where the source prints them. The direction of this ingest is toward the literature. It adds measured values and regulatory texts, and it records that no finished-product metal limit exists in the US skin-protectant framework.

## 1. What the collection contains

The collection manifest lists 39 entries. Twenty-two PDFs were present and passed their SHA-256 checks. They map to 21 wiki source records, because the two CFR zinc oxide sections are folded into the existing Part 73 record. Seventeen manifest entries had no PDF and are listed in section 8.

| Group | Sources (cite key) | Tier | Ledger rows |
| --- | --- | --- | --- |
| Finished-product measurements | rubin2025a, rubin2025b, rubin2025c, rubin2025d (single-unit laboratory reports); rubin2026 (11-product chart) | C (grey literature) | DCL-0001 to DCL-0068 |
| Zinc dermal pathway | agren1991, khabir2021, pal2016, yasugi2026, sccs2012; rahma2022 (review, no metal numbers) | A (rahma2022 B) | DCL-0069 to DCL-0199 |
| Regulatory and pharmacopoeial texts | ich2022 (Q3D R2); healthcanada2012 (cosmetic impurities); healthcanada2015 (NHP Quality Guide); bvl2017 (German technically avoidable levels); fda2023-21cfr-part73 (§73.1991/§73.2991, 2025 edition); fda2025-21cfr347; fda1990 (55 FR 25204); fda2003 (68 FR 33362); healthcanada2024 (Diaper Rash Products Monograph); edqm2026 (Ph. Eur. 0252 record) | A | DCL-0200 to DCL-0403 |

The ledger has 403 rows, labelled in the `value_role` column. There are 155 measurements (60 of them consumer-testing results, including the 44 chart cells), 147 limits, 21 limits as cited by another instrument, 4 limits as cited by the advocate, 26 doses or compositions, 16 exposure-model parameters, 10 toxicological reference values, 11 cited context values, 4 prose restatements, 4 ingredient specifications, and 5 rows recording a limit that was not obtained, superseded or deleted, or a value not reported. Per-source table extracts are in `data/evidence/<cite-key>-<unit>.csv` (17 files).

## 2. Units, bases and species used in this brief

Consumer-testing results are total element concentrations in the finished product as received, in ppb (µg/kg). 1 ppm = 1,000 ppb = 1 mg/kg = 1 µg/g. Zinc results in the pathway studies are on several bases: µg/g dry tissue (epidermis, liver), µg/mL or µg/ml of fluid (blister fluid, serum), µg/dL of serum (1 µg/dL = 10 µg/L), and µg/mL tissue converted by the authors from dry weight with an assumed 70% water content (khabir2021, F33). None of these bases may be pooled with another. Arsenic is total arsenic and mercury is total mercury in every measurement here. No source speciates iAs, MeHg or Cr(VI) in a product. Regulatory limits are stated on their own basis (section 6): finished product, ingredient, or daily dose.

## 3. Finished-product measurements (grey literature)

### 3.1 Four single-unit laboratory reports (rubin2025a to rubin2025d)

Design: a consumer-advocacy business bought one retail unit of each product, relabelled it with an internal lot number and sent it to a commercial laboratory in Oregon. The laboratory ran ICP-MS for lead, cadmium, arsenic and mercury. The report image is appended to each blog article. Matrix: finished zinc oxide diaper cream, ointment or paste, as received. Metals: Pb, Cd, tAs, tHg.

| Report | Product (neutral) | Lab case, test date | Pb (ppb) | Cd (ppb) | tAs (ppb) | tHg (ppb) | Ledger |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| rubin2025a | 40% zinc oxide ointment (paste) | 2507151, 2025-07-14 | 3303.8 | 55.50 | < 10.00 | < 5.00 | DCL-0001 to DCL-0004 |
| rubin2025b | 40% zinc oxide paste | 2508194, 2025-08-20 | 1401.0 | 509.5 | < 10.00 | < 5.00 | DCL-0005 to DCL-0008 |
| rubin2025c | 40% zinc oxide maximum-strength paste | 2508207, 2025-08-20 | 4657.1 | 473.1 | < 10.00 | < 5.00 | DCL-0009 to DCL-0012 |
| rubin2025d | 13% zinc oxide cream | 2509614, 2025-10-02 | 1244.1 | 45.26 | < 10.00 | < 5.00 | DCL-0013 to DCL-0016 |

Across the four reports, lead ranges from 1244.1 to 4657.1 ppb and cadmium from 45.26 to 509.5 ppb. Arsenic and mercury are below the reporting values in all four. The article prose restates each lead value consistently (DCL-0017 to DCL-0020). The articles cite a Washington State Toxic-Free Cosmetics Act lead limit of 1 ppm (DCL-0021 to DCL-0023) and an FDA 10 ppm cosmetics figure (DCL-0024). Neither instrument is in the collection, and the author's statements about legality conflict across pages (F08 and F09, barred).

Limitations: each figure is one unit from one lot, chosen and shipped by an advocate. The reports print no sample mass, digestion, calibration, recovery, detection limit or accreditation (F12). The '<' entries are left-censored reporting values. The product name in one article differs from its laboratory report, and the report is used (F07). Tier C: these results are leads to be confirmed.

### 3.2 Eleven-product comparison chart (rubin2026)

Design: the same author charts her results for eleven diaper products, one unit each, in ascending order of lead. The chart is dated 17 January 2026 and rounded to whole numbers. Ledger DCL-0025 to DCL-0068, four rows per chart item, in the order Pb, Cd, tHg, tAs. Item k starts at DCL-0025 + 4(k−1).

Chart lead, items 1 to 11: 136, 554, 788, 1,244, 1,401, 1,420, 1,631, 2,508, 3,182, 3,304, 4,657 ppb. Cadmium: 105, 14.1, 74, 45, 510, 137, 17, 211, 123, 56, 473 ppb. Mercury non-detect (<5 ppb) for all. Arsenic non-detect (<10 ppb) except item 1 at 52 ppb (DCL-0028).

Items 4, 5, 10 and 11 equal the four laboratory reports rounded (F03, resolved). The other seven values (items 1, 2, 3, 6, 7, 8, 9) have no report in the collection and are barred (F02). Their zinc oxide content is given only for item 1 (12%) and item 6 (12.8%). For items 2, 3, 7, 8 and 9 the page does not say whether zinc oxide is present (F05, barred for any per-zinc-oxide calculation). The chart says it rounds to whole numbers but prints 14.1 (F01, barred). A legend colour refers to an unnamed "2021 proposed action level" (F13, barred). The page's dates disagree (F04, resolved). The author notes that lead did not track zinc oxide percentage. The chart includes no product without zinc oxide, so it cannot compare zinc-oxide and non-zinc-oxide products.

## 4. Zinc dermal pathway evidence

None of these studies measures lead or cadmium. They measure zinc, the principal element of the active ingredient. Together they bear on whether a zinc oxide vehicle on diaper-area skin delivers its elements into or through skin, and whether barrier damage changes that.

### 4.1 Ågren 1991 (agren1991), Acta Derm Venereol 71:153-156

Design: five healthy adults (four women, one man, aged 23 to 41) wore two occlusive zinc oxide dressings on the forearm for 48 h. One was a commercial gum-rosin adhesive with 25% zinc oxide (2.7 mg Zn/cm2); the other was a hydrocolloid made for the study with 6% zinc oxide (6.0 mg Zn/cm2, F25 barred). Suction-blister roofs (epidermis) and fluid were analysed by atomic absorption. Fifteen rats had two full-thickness back wounds (about 8% of body surface) dressed for 24 h with a plain hydrocolloid, the 6% zinc oxide hydrocolloid or the 25% rosin dressing (n=5 each); serum and liver zinc were measured.

Key values: epidermal zinc 49 ± 5 µg/g dry weight (hydrocolloid) and 127 ± 26 µg/g (rosin) (DCL-0089, DCL-0090; subject values DCL-0069 to DCL-0088). The recomputed SEM for the rosin mean is 22.9 (F23, barred for the SEM only). Blister fluid: 0.29 ± 0.04 and 0.68 ± 0.10 µg/ml (DCL-0091, DCL-0092). Rat serum zinc: 0.95 ± 0.02 (control), 4.06 ± 0.48 (6% hydrocolloid) and 2.56 ± 0.20 µg/ml (rosin) (DCL-0093, DCL-0095, DCL-0097). Rat liver: 146 ± 2, 390 ± 23 and 206 ± 11 µg/g dry weight (DCL-0094, DCL-0096, DCL-0098). The Table II significance footnote is ambiguous (F24, barred). Tape strips and a plain-hydrocolloid control appear in DCL-0099 to DCL-0104. In vitro solubility was 67 and 28 µg/ml (DCL-0105, DCL-0106).

Limitations: very small groups; dressings rather than creams; adult intact skin and rat wounds, not infant diaper dermatitis. The author's conclusion is that the vehicle determines delivery. Systemic uptake through wounds was much greater than through intact skin, and the vehicle ranking reversed between intact and wounded skin.

### 4.2 Khabir et al. 2021 (khabir2021), Int J Mol Sci 22:12372

Design: excised abdominal skin from three women (46 to 53 years) dosed at 2 mg/cm2 of a 20% wt/wt zinc-67 enriched zinc oxide nanoparticle formulation in caprylic/capric triglyceride for 48 h at 35 °C. Laser-ablation ICP-MS gave a layer-resolved tracer map, with an ICP-MS cross-check. HaCaT keratinocytes were used for cytotoxicity. Matrix: human stratum corneum, viable epidermis and dermis.

Key values (Table 1, mean ± SD): viable epidermis exogenous zinc 3.1 ± 0.8 µg/g dry (1.0 ± 0.3 µg/mL by conversion) against endogenous 13 ± 2 µg/g (4.3 ± 0.7 µg/mL) (DCL-0114 to DCL-0118). Stratum corneum exogenous zinc 360 ± 70 µg/g (DCL-0110). Dermis indistinguishable from blank (DCL-0119 to DCL-0123, DCL-0126). HaCaT IC50 26 ± 5 µg Zn/mL, stated as 21 to 31 in the abstract (DCL-0124, DCL-0125; F51 resolved). The authors attribute a tape-strip estimate of 4.5 ± 4.0 µg/g to incomplete stripping (DCL-0129; F35 resolved). The literature endogenous value of 60 µg/g is explained by method differences (DCL-0132, DCL-0133; F34 resolved).

Limitations: intact adult skin, three donors, a sunscreen oil vehicle, no occlusion, and a dry-to-wet conversion that rests on an assumed water content (F33). Particles stayed in the stratum corneum; zinc entered as ions.

### 4.3 Pal et al. 2016 (pal2016), Toxicol Res 5:1066-1077

Design: female SKH-1 hairless mice, 12 groups of 5, given topical zinc oxide nanoparticles (under 50 nm and under 100 nm) at 5% and 10% w/v, or bulk zinc oxide (under 5 µm) at 10%, each with or without UVB at 50 mJ/cm2. Doses were 1.25 and 2.5 mg ZnO/cm2 (DCL-0136, DCL-0137). Skin zinc was measured by atomic absorption at 6, 24 and 48 h.

Findings: skin zinc rose with dose. UVB increased it further for some nanoparticle groups, alongside oxidative-stress and inflammatory markers. The numeric zinc values are only in supplementary Fig. S1, which was not obtained (DCL-0138; F36, barred). Limitations: animal skin, UVB injury rather than dermatitis, no numbers in the main text.

### 4.4 Yasugi et al. 2026 (yasugi2026), Yakugaku Zasshi 146:85-89

Design: single case report from a Japanese neonatal unit. A girl born at 27 weeks 1 day weighing 542 g received oral zinc acetate for low zinc, then zinc oxide ointment for diaper dermatitis that became eroded. Serum zinc was followed, and causality was scored with the Naranjo scale.

Key values: serum zinc 102 (day 28), 65 (day 49), 54 (day 77), 427 (day 93), 199 (day 105), 52 (day 114) and 101 µg/dL (day 128) (DCL-0139 to DCL-0145). Ointment started on day 86. Oral zinc acetate ran at 2 mg/kg/d from day 56, rose to 2.7 mg/kg/d on day 95, was stopped with the ointment after the day-105 result, and restarted at 2 mg/kg/d on day 116 (DCL-0149, DCL-0150). The abstract says day 114, but the body and Fig. 1 give day 116 (F28, resolved to day 116). The 427 µg/dL sample was drawn on day 93 and reported on day 95 (F30, resolved). A total of 40 g of ointment was dispensed; the amount applied was not recorded (DCL-0151). The stated 17-day course does not match the dates (F29, barred for duration). Serum copper was 66 µg/dL (DCL-0146) and serum iron 74 and 88 µg/dL (DCL-0147, DCL-0148). The Naranjo score was 9 (definite). The authors cite a series in which 8 of 17 infants given zinc oxide ointment for diaper dermatitis had hyperzincemia.

Limitations: one patient; concurrent oral zinc; no photographs; no application record. The authors infer percutaneous absorption through barrier-impaired skin from the time course. Reference 14 in this paper is a different 1991 Ågren paper (F31).

### 4.5 SCCS 2012 opinion on nano zinc oxide (sccs2012)

Design: EU scientific committee review of an applicant dossier and the literature on nano zinc oxide as a UV filter at up to 25%. Relevant parts are purity and impurities, solubility, dermal absorption and the margin of safety.

Key values: "No information has been provided on the presence of impurities/contaminants". Impurities are inferred at ≤1% from purity ≥99% (DCL-0155, DCL-0156), with one material ≥96% (DCL-0157; F40). Water solubility of four uncoated nano zinc oxides was 20 to 47 mg/L (DCL-0158 to DCL-0161), and further media results are in DCL-0162 to DCL-0167. The pH 2.7 size classes are printed in mm (DCL-0168; F39, barred). In vitro human skin: receptor-fluid zinc 0.09 ± 0.04 and 0.22 ± 0.12 µg/cm2 in controls, and less than 0.03% of the applied dose from treated membranes (DCL-0173 to DCL-0175; detection limit 0.01 ppm, DCL-0171). The committee adopts 0.03% as the absorbed fraction. Pig skin in vitro: 0.8 to 1.4% of the applied dose in receptor fluid and 1.5 to 2.3% absorbed, comparable to controls (DCL-0176 to DCL-0180). Human beach trial: blood tracer change 0.1 to 0.8%, and less than 0.001% of the applied dose in blood (DCL-0181 to DCL-0187). The trial's group size is printed two ways (F37, barred). EU Risk Assessment Report values: default dermal absorption 2%, oral NOAEL 50 mg Zn2+/day, internal NOAEL 10 mg Zn2+/day (DCL-0188 to DCL-0193). The margin of safety is 7.4 for sunscreen at 25% (DCL-0194 to DCL-0199). The table uses the zinc oxide mass against a Zn2+ NOAEL; a derived Zn2+ basis gives about 9.2 (F38, barred as a comparison).

Damaged skin: SCCS reports "no significant differences ... between damaged skin versus normal healthy skin", and UVB-damaged pig skin "did not enhance the penetration of Zn" (PDF p.49, p.92). The manifest's summary that SCCS concluded on intact skin only is not what the opinion says (F46, resolved). This finding disagrees with pal2016 and with the wound and eroded-skin evidence (F47, barred, contested).

### 4.6 Rahma and Lane 2022 (rahma2022), Pharmaceutics 14:433

Design: narrative review of infant skin barrier function. There are no metal numbers. Relevant statements: the infant barrier approaches adult properties at about two years. Diaper skin is occluded and over-hydrated. "There are limited data supporting the effectiveness of zinc oxide ointment in preventing diaper dermatitis" (section 6.3). The abstract states that no published information exists on dermal absorption of baby-wipe ingredients, and that absorption through infant skin conditions "has not been widely explored" (F44). The review also reports the Felter et al. 2017 diaper-dermatitis absorption modifiers (4-fold for ingredients absorbed at 1 to 10% through normal skin, 2-fold for 10 to 50%) and an infant surface-area-to-body-weight ratio 2.3 times the adult ratio.

## 5. Regulatory, pharmacopoeial and guidance texts: what each does

The US skin-protectant rules (fda2025-21cfr347, fda2003, fda1990) define permitted actives and concentrations. Zinc oxide is permitted at 1 to 25 percent in the codified monograph (DCL-0385, DCL-0396). The 1990 diaper-rash proposal would allow above 25 to 40 percent in an ointment dosage form (DCL-0391), relying on unpublished infant irritation and efficacy studies of a 40% zinc oxide ointment. Bismuth subnitrate was proposed as not safe for diaper rash (DCL-0395). None of these rules sets a metal limit, and diaper-rash claims were never in the codified text (F42). The operative post-2020 US text, OTC Monograph M016, was not obtained.

The US colour-additive specification for zinc oxide (§73.1991, applied to cosmetics by §73.2991) limits the ingredient to Cd 15, Hg 1, As 3 and Pb 20 ppm (DCL-0380 to DCL-0383). It governs zinc oxide used as a colour, not as a drug active. The source note is 42 FR 37537 (F14). As arithmetic, not measurement: 20 ppm lead in the ingredient would contribute at most 8,000 ppb to a 40% zinc oxide product and 2,600 ppb to a 13% product. This bound is stated on the Part 73 source page.

In Canada, zinc oxide diaper-rash products licensed under the 2024 monograph are natural health products (zinc oxide 1 to 25%, or 25 to 40% as ointment, pharmacopoeial grade; DCL-0397 to DCL-0399). Their finished-product specifications follow the NHP Quality Guide. Its Table 2 topical limits are As 3, Cd 3, Pb 10, total Hg 1 and Sb 5 ppm (DCL-0344 to DCL-0348), numerically identical to the Health Canada cosmetic guidance (DCL-0307 to DCL-0311; F43). The Quality Guide's appendix adds chromium at 5 ppm topical, under a row mislabelled "Chromium IV" (DCL-0349; F19 resolved as Cr(VI); F19b barred).

Germany's BVL values apply to cosmetics: Pb 2.0, Cd 0.1, Hg 0.1, As 0.5 and Sb 0.5 mg/kg for cosmetics in general (DCL-0366 to DCL-0377). The Health Canada guidance quotes an older German set that is ten to fifty times higher (F21).

ICH Q3D(R2) applies to drug products, including cutaneous ones. Its cutaneous PDEs and CTCLs are in DCL-0200 to DCL-0301. The basal-layer exclusion for substantially disrupted skin is in the guideline text. The PDEs are stated to suit paediatric products (F17).

The Ph. Eur. zinc oxide monograph keeps lead and cadmium tests with updated limits that were not obtained. It adds thallium at 5 ppm and deletes the arsenic test (DCL-0400 to DCL-0403; F41).

## 6. Every government or regulatory limit appearing in these sources

Values are as printed. "As cited" means the value appears in a source in this collection but its own instrument is not in the collection. Basis codes: FP = finished product as sold; ING = ingredient as sold; DOSE = daily exposure.

| Instrument | Article, section or annex | Analyte | Value as printed | Basis | Scope | Ledger |
| --- | --- | --- | --- | --- | --- | --- |
| 21 CFR 73.1991 (2025) | §73.1991(b) | Cd | not more than 15 ppm | ING | zinc oxide colour additive, externally applied drugs | DCL-0380 |
| 21 CFR 73.1991 (2025) | §73.1991(b) | Hg | not more than 1 ppm | ING | as above | DCL-0381 |
| 21 CFR 73.1991 (2025) | §73.1991(b) | As | not more than 3 ppm | ING | as above | DCL-0382 |
| 21 CFR 73.1991 (2025) | §73.1991(b) | Pb | not more than 20 ppm | ING | as above | DCL-0383 |
| 21 CFR 73.1991 (2025) | §73.1991(b) | ZnO purity | not less than 99 percent | ING | as above | DCL-0384 |
| 21 CFR 73.2991 (2025) | §73.2991(a) | Cd, Hg, As, Pb | same as §73.1991(b) | ING | zinc oxide colour additive, cosmetics | DCL-0380 to DCL-0383 |
| 21 CFR 347 (2025) | §347.10(u) | zinc oxide | 1 to 25 percent; no metal limit | FP (composition) | OTC skin protectant | DCL-0385 |
| 68 FR 33362 (2003) | §347.10(u) | zinc oxide | 1 to 25 percent; no metal limit | FP (composition) | OTC skin protectant (final rule) | DCL-0396 |
| 55 FR 25204 (1990, proposed) | proposed §347.10(s) | zinc oxide | above 25 to 40 percent in an ointment dosage form; no metal limit | FP (composition) | OTC diaper rash protectant | DCL-0391 |
| Health Canada Diaper Rash Products Monograph (2024) | Table 1 | zinc oxide | 1 – 25%; 25 – 40% (zinc oxide ointment); pharmacopoeial grade; no metal limit | FP (composition) | diaper rash natural health products | DCL-0397, DCL-0398 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.2, Table 2 | As | 3 ppm | FP | topical natural health products | DCL-0344 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.2, Table 2 | Cd | 3 ppm | FP | as above | DCL-0345 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.2, Table 2 | Pb | 10 ppm | FP | as above | DCL-0346 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.2, Table 2 | total Hg | 1 ppm | FP | as above | DCL-0347 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.2, Table 2 | Sb | 5 ppm | FP | as above | DCL-0348 |
| NNHPD Quality of NHP Guide v3.1 (2015) | appendix table | Cr(VI), printed "Chromium IV" | Topical: 5 ppm (barred, F19b) | FP | as above | DCL-0349 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.1.2 | Cr(VI) | 0.29 µg/kg b.w./day | DOSE | oral natural health products | DCL-0350 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.1, Table 1 | tAs, iAs, organic As, Cd, Pb, tHg, MeHg | tAs < 10.0 µg/day or < 0.14 µg/kg b.w./day; iAs < 2.1 µg/day or < 0.03; organic As < 1.4 mg/day or < 20 µg/kg; Cd < 6.0 or < 0.09; Pb < 10.0 or < 0.14; tHg < 20.0 or < 0.29; MeHg < 2.0 or < 0.029 | DOSE | oral natural health products | DCL-0351 to DCL-0364 |
| NNHPD Quality of NHP Guide v3.1 (2015) | 3.2.1 | total heavy metals as Pb | not more than 10 ppm (conditional) | FP | natural health products | DCL-0365 |
| Health Canada Guidance on Heavy Metal Impurities in Cosmetics (2012, modified 2017-10-02) | section 4 | Pb, As, Cd, Hg, Sb | 10, 3, 3, 1, 5 ppm | FP | cosmetics sold in Canada | DCL-0307 to DCL-0311 |
| same guidance | footnote 21 | Hg | 3 ppm (former, amended to 1 ppm) | FP | cosmetics | DCL-0312 |
| same guidance, as cited | 3.3 | Pb, As, Cd, Hg, Sb | 20, 5, 5, 1, 10 ppm (German 1985/1990 values) | FP | cosmetics (Germany) | DCL-0313 to DCL-0317 |
| same guidance, as cited | 3.3 | Pb, As, Cd, Hg, Sb | 1, 0.5, 0.1, 0.2, 0.5 ppm (German toothpaste) | FP | toothpaste (Germany) | DCL-0318 to DCL-0322 |
| same guidance, as cited | 3.2 | Pb, As, Cd, Hg, Sb | 0.010, 0.01, 0.005, 0.001, 0.006 mg/L | water | Canadian drinking water | DCL-0323 to DCL-0327 |
| same guidance, as cited | 3.2.1 | Pb | 0.1 ppm | FP | US candy likely consumed by small children | DCL-0328 |
| same guidance, as cited | 3.2.1 | Pb | 10 ppm | FP | monograph-stream NHPs applied to the skin | DCL-0329 |
| same guidance, as cited | 3.2.2 and 3.2.4 | As; Hg | <3 ppm; <1 ppm | ING | US colourants | DCL-0330, DCL-0331 |
| same guidance, as cited | 3.2.4 | Hg | 0.5 ppm | wet | most commercial fish (Canada) | DCL-0332 |
| same guidance, as cited | 3.2.4 | thimerosal (Hg) | 65 ppm | FP | US eye cosmetics | DCL-0333 |
| BVL technically avoidable levels (2017) | Table 1 | Pb | 2.0 mg/kg (5 for listed decorative make-up) | FP | cosmetic products in general | DCL-0366, DCL-0376 |
| BVL (2017) | Table 1 | Cd | 0.1 mg/kg | FP | cosmetic products in general | DCL-0368 |
| BVL (2017) | Table 1 | Hg | 0.1 mg/kg | FP | cosmetic products in general | DCL-0370 |
| BVL (2017) | Table 1 | As | 0.5 mg/kg (2.5 for theater, fan, carnival make-up) | FP | cosmetic products in general | DCL-0372, DCL-0377 |
| BVL (2017) | Table 1 | Sb | 0.5 mg/kg | FP | cosmetic products in general | DCL-0374 |
| BVL (2017) | Table 1 | Pb, Cd, Hg, As, Sb | 0.5, 0.1, 0.1, 0.5, 0.5 mg/kg | FP | toothpaste | DCL-0367, DCL-0369, DCL-0371, DCL-0373, DCL-0375 |
| ICH Q3D(R2) (2022) | Appendix 5, Table A.5.1 | Cd, Pb, As, Hg | cutaneous PDE 20, 50, 30, 30 µg/day | DOSE | cutaneous drug products | DCL-0203, DCL-0208, DCL-0213, DCL-0218 |
| ICH Q3D(R2) (2022) | Table A.5.1 | Ni; Co | cutaneous PDE 200; 50 µg/day; CTCL 35 µg/g each | DOSE; FP | cutaneous drug products | DCL-0234, DCL-0235; DCL-0223, DCL-0224 |
| ICH Q3D(R2) (2022) | Table A.5.1 | Sb, Sn, Cr, Tl | cutaneous PDE 900, 6000, 11000, 8 µg/day | DOSE | cutaneous drug products | DCL-0275, DCL-0295, DCL-0300, DCL-0240 |
| ICH Q3D(R2) (2022) | Table A.5.2 | Cd, Pb, As, Hg, Ni, Co, Tl, Sb, Sn, Cr | 2, 5, 3, 3, 20, 5, 0.8, 90, 600, 1100 µg/g at 10 g/day | FP (dose-dependent) | cutaneous drug products | DCL-0204, DCL-0209, DCL-0214, DCL-0219, DCL-0236, DCL-0225, DCL-0241, DCL-0276, DCL-0296, DCL-0301 |
| ICH Q3D(R2) (2022) | Table A.5.1, comparison columns | all 20 listed elements | oral, parenteral and inhalation PDEs | DOSE | drug products | DCL-0200 to DCL-0301 |
| Ph. Eur. monograph 0252 (Suppl. 10.6) | impurity tests | Tl | 5 ppm | ING | zinc oxide active substance | DCL-0400 |
| Ph. Eur. monograph 0252 (Suppl. 10.6) | impurity tests | Pb; Cd | updated limits, not obtained | ING | zinc oxide active substance | DCL-0401, DCL-0402 |
| Washington State Toxic-Free Cosmetics Act, as cited by an advocate | not stated in source | Pb | 1 ppm (1,000 ppb) | FP | cosmetics sold in Washington; applicability to OTC diaper products disputed by the same author (F08, barred) | DCL-0021 to DCL-0023 |
| FDA lead guidance for cosmetics, as cited by an advocate | not stated in source | Pb | 10 ppm | FP | cosmetics; scope for products that are also drugs not established (F09, barred) | DCL-0024 |

Toxicological reference values printed in the sources, which are not product limits: US EPA oral RfD arsenic 0.3 and cadmium 0.5 µg/kg bw/day; WHO PTDI total mercury 2 µg/kg bw/day and PTWI methylmercury 1.6 µg/kg bw; WHO PTDI antimony 6 µg/kg bw/day (DCL-0338 to DCL-0342). EU RAR zinc NOAEL 50 mg Zn2+/day and internal NOAEL 10 mg Zn2+/day (DCL-0192, DCL-0193).

## 7. Cross-source points the synthesis must handle

The basis of the finished-product results (ppb, as received) matches the finished-product limits in section 6 (ppm, FP) after multiplying ppm by 1,000. It does not match the ingredient specifications (§73.1991, Ph. Eur.) or the ICH daily doses without an assumed zinc oxide fraction or daily dose. Any such conversion must be shown and labelled as derived.

Which limit applies depends on how the product is marketed, and the sources state this directly. In the US a zinc oxide diaper-rash product is an OTC skin-protectant drug. The skin-protectant texts in the collection set no metal limit for it, and the Washington figure's applicability is disputed (F08). In Canada a licensed zinc oxide diaper-rash product is a natural health product under the Quality Guide. A cosmetic-marketed product in either country, or in Germany, falls under the cosmetic guidance.

Barrier damage and zinc uptake is contested across sources (F47). Wounds in rats (agren1991) and eroded diaper dermatitis in one preterm infant (yasugi2026) show large systemic zinc increases, and UVB increased uptake in mice (pal2016). SCCS reports no damaged-versus-intact difference in its pig and human models. ICH Q3D withdraws its cutaneous PDE for substantially disrupted skin. None of these measures lead or cadmium. No source in the collection measures lead or cadmium absorption from a diaper cream or from zinc oxide.

On effectiveness, the only statements are the 1990 FDA finding that its submitted infant studies "support the safe use of 40 percent zinc oxide in an ointment dosage form", and Rahma 2022's statement that data on zinc oxide ointment preventing diaper dermatitis are limited.

## 8. Manifest entries with no PDF (not ingested)

Seventeen manifest entries had no PDF. Each is listed with the reason the manifest records. Bibliographic checks from Crossref are noted where relevant.

1. FDA (2021) OTC Monograph M016, Skin Protectant Drug Products for OTC Human Use. Bot check at accessdata.fda.gov.
2. FDA (2016 draft; 2022 final) Guidance, Lead in Cosmetic Lip Products and Externally Applied Cosmetics: Recommended Maximum Level. Bot check.
3. FDA diaper rash drug products guidance or final rule. Not located.
4. USP-NF monograph Zinc Oxide (and Zinc Oxide Ointment / Paste). Subscription. Crossref DOI 10.31003/uspnf_m89700_04_01 resolves to "Zinc Oxide Compounded Ointment".
5. USP General Chapters <232> and <233>. Access denied.
6. Ph. Eur. monograph 0252 full text. Subscription. Only the free Knowledge Database record was ingested.
7. Regulation (EC) No 1223/2009, consolidated, Annex VI and IV entries for zinc oxide; Commission Regulation (EU) 2016/621. EUR-Lex bot challenge.
8. China NMPA (2015) Safety and Technical Standards for Cosmetics. TLS and bot failures. The secondary-source limits in the manifest are unverified and are not used.
9. Fujita T et al. Hyperzincemia due to topical zinc oxide in an infant with diaper dermatitis. Pediatr Int 64(1):e14761, doi 10.1111/ped.14761. Paywalled. Crossref gives online publication 2021-11-08 (F45).
10. Derry JE, McLean WM, Freeman JB (1983). J Parenter Enteral Nutr 7(2):131-135, doi 10.1177/0148607183007002131. Paywalled.
11. Ågren MS (1990). Percutaneous absorption of zinc from zinc oxide applied topically to intact skin in man. Dermatologica 180:36-39 (volume from agren1991 reference 4, F27), doi 10.1159/000247982. Paywalled.
12. Gulson B et al. (2010). Toxicol Sci 118(1):140-149, doi 10.1093/toxsci/kfq243. Not open access.
13. Gulson B et al. (2012). Sci Total Environ 420:313-318, doi 10.1016/j.scitotenv.2011.12.046. Paywalled.
14. Holmes AM et al. (2016). ACS Nano 10(2):1810-1819, doi 10.1021/acsnano.5b04148. Paywalled.
15. Holmes AM et al. (2020). ACS Appl Bio Mater 3(6):3640-3647, doi 10.1021/acsabm.0c00280. Paywalled.
16. Leite-Silva VR et al. (2016). Eur J Pharm Biopharm 104:140-147, doi 10.1016/j.ejpb.2016.04.022. Paywalled.
17. Turkish thesis (2011), Heavy metal analysis in cosmetic products (includes diaper-rash creams, EDXRF). HTTP 403. Author and values unverified.

The gaps that matter most for the synthesis are M016 (the operative US text), the FDA cosmetic lead guidance (to settle F09), the Washington statute (to settle F08), the USP and Ph. Eur. zinc oxide lead and cadmium limits (the ingredient-grade ceilings behind pharmacopoeial-grade requirements), the Fujita case and the Gulson and Holmes papers (the primary data behind the SCCS and pathway statements), and any peer-reviewed survey of metals in finished diaper creams, of which the collection contains none.

## 9. Flags at a glance

There are 45 flags: 27 resolved and 18 unresolved. The barred values are the chart-only items and rounding (F01, F02, F05, F13), the author's legality statements (F08, F09), the Ågren SEM, footnote and zinc loadings (F23, F24, F25), the Yasugi course length (F29), the Pal supplementary data (F36), the SCCS group size, MoS basis and particle-size units (F37, F38, F39), the Ph. Eur. limits (F41), the current US status of zinc oxide above 25% (F42), the NHP appendix chromium value (F19b), and the damaged-skin disagreement (F47). The flags file gives each flag's verbatim values, locations, resolution citation and, where printed, the corresponding author's email.
