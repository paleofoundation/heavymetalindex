---
type: source
raw_handle: MFK_08-unknown
cite_key: villarreal2021-ic-icpms-cr-vi-toys
title: "Ensuring toy safety from hexavalent chromium to meet European regulations using IC-ICPMS quantification"
authors: [Villarreal S, Naels L, Garnier J-F]
year: 2021
publication: "Thermo Fisher Scientific Application Brief AB000383, EMEA Customer Solution Center, Paris, France"
doi: null
no_doi_assigned: true
source_type: industry-application-note
evidence_tier: C
evidence_fitness: EF-X
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: [methods_reference]
license: "vendor application note — © 2021 Thermo Fisher Scientific Inc."
access_url: "https://www.thermofisher.com/ic-icpms"
raw_path: "raw/Manual Fetch Kimi /May 21 Kimi_Agent_Download Corruption Issue/_extracted_infantdurable_01_Cribs_Bassinets_Enclosures/01_Cribs_Bassinets_Enclosures/08_Unknown.pdf"
raw_sha256: 76479bea170a670d5979bb84bc7c377842acdaf650565c9c36a50a69e8ee27a1
metals: [Cr-VI]
ingredients: []
products: ["[[products/toys-painted]]", "[[products/toys-substrate-materials]]", "[[products/art-craft-materials]]"]
matrices: []
jurisdictions: [EU]
near_duplicates: ["[[sources/iso2020-8124-3-toy-migration-elements]]"]
sample_n: 3
sample_population: "Three method-validation samples drawn from toy materials in EN 71-3:2019 categories II (liquid or sticky materials) and III (scraped-off materials): one glue sample (category II, pH 7.46), one plastic toy figure (category III, pH 7.61), and one paint sample (category III, pH 7.43). Samples were prepared per the EN 71-3:2019 migration procedure, then each was analyzed both as-extracted and after spike with 0.01 µg/L Cr(VI) to assess instrumental recovery. The sampling frame is method-demonstration, not population-representative; no brand, lot, country-of-origin, or product-class sampling design is reported, and the work does not constitute an occurrence study."
sampling_locations: []
sampling_year_range: null
ingest_method: manual_fetch_kimi_drain
created_by: claude_opus_47_session
access_date: 2026-06-01
updated: 2026-06-01
---

# Villarreal, Naels and Garnier 2021 — IC-ICPMS quantification of hexavalent chromium in toys per EN 71-3:2019

## Overview

This Thermo Fisher Scientific Application Brief (AB000383, document code AB000383-EN 1121S, © 2021) describes an optimized ion-chromatography / inductively-coupled-plasma mass-spectrometry (IC-ICPMS) workflow on a Thermo Scientific Dionex ICS-6000 IC coupled to a Thermo Scientific iCAP RQ ICP-MS for the speciation and quantification of hexavalent chromium [Cr(VI)] migration from toy materials in compliance with the European toy safety standard EN 71-3:2019. The Brief's primary contribution is methodological — demonstrating that the optimized IC-ICPMS configuration achieves a Cr(VI) instrumental detection limit (3σ) of 0.35 ng/L and a working method quantification of 0.002 µg/L (equivalent to 0.25 µg/kg in the toy material under the EN 71-3 extraction conditions), approximately 20× below the current 0.005 mg/kg EN 71-3:2019 migration limit for category III (scraped-off) materials. Three method-validation samples (glue, plastic toy, paint) were analyzed as the application demonstration: all returned non-detect for Cr(VI) in the migration extract, and spike-recovery in the same matrices ranged from 98% to 109% across the three samples. The Brief is a vendor application note, not a peer-reviewed paper, and the validation-sample data cannot support occurrence claims; the page is filed for its methodological and regulatory-context content.

## Key numbers

### Method performance (calibration and detection)

- Cr(VI) calibration standards (Table 1, p. 2): theoretical concentrations 0.02, 0.04, 0.08, 0.12, 0.16 µg/L; measured peak areas 8,983 / 17,838 / 35,148 / 51,646 / 69,987 counts; back-calculated concentrations 0.019 / 0.040 / 0.080 / 0.119 / 0.161 µg/L.
- Calibration curve (Figure 1, p. 2): R² = 0.9998; background equivalent concentration (BEC) = 0.002 µg/L.
- Instrumental detection limit, 3σ basis (text p. 2): IDL = 0.35 ng/L Cr(VI) = 0.00035 µg/L.
- Cr(VI) retention time (Figure 2, p. 3; text p. 2): ≈50 s. Other chromium species and unretained compounds elute in the void volume at ≈25 s.
- Working method quantification (Conclusion, p. 4): 0.002 µg/L Cr(VI) in the migration extract, corresponding to 0.25 µg/kg in the toy material — stated as 20× below the current EN 71-3:2019 limit.

### Sample analysis and spike recovery (Table 2, p. 4)

| Sample type (EN 71-3 category) | Native Cr(VI), µg/L | Spike level, µg/L | Cr(VI) measured after spike, µg/L | Spike recovery, % |
| --- | --- | --- | --- | --- |
| Glue (pH 7.46) — category II | 0.000 | 0.010 | 0.011 | 109 |
| Plastic toy (pH 7.61) — category III | 0.000 | 0.010 | 0.010 | 98 |
| Paint (pH 7.43) — category III | 0.000 | 0.010 | 0.010 | 103 |

All three native samples returned non-detect for Cr(VI) in the migration extract. Spike recovery across the three matrices is 98%–109% (mean 103%).

### EN 71-3:2019 regulatory context cited in the Brief

- Current EN 71-3:2019 migration limit for Cr(VI) in toy materials: 0.005 mg/kg (p. 1, Introduction, citing the 2015 SCHER opinion).
- Scientific Committee on Health and Environmental Risks (SCHER) 2015 proposal: reduce the Cr(VI) limit to 0.005 mg/kg for liquid and sticky toy materials (Brief states this is "the current value of 0.005 mg/kg" as of 2021); SCHER additionally recommended development of a revised test method that "reliably measure[s] concentrations down to 0.0025 mg/kg" and biennial review of available test methods to find one that reliably assesses even lower concentrations (p. 1, Introduction).
- Stated rationale for tighter limits: infants and children are more vulnerable to toxic metal exposure due to their tendency to lick, chew or swallow small pieces of toys; Cr(VI) is "strongly related to several types of cancer" (citing Alvarez et al. 2021 reference 2).

### Experimental conditions vs EN 71-3:2019 recommended conditions (Table 3, p. 4)

| Parameter | EN 71-3:2019 recommended | Optimized IC-ICPMS conditions |
| --- | --- | --- |
| Mobile phase | 75 mM HNO₃ (pH 7.0) | 75 mM HNO₃ (pH 7.0) |
| Flow | 0.8 mL/min | 0.7 mL/min |
| Column | Non-porous polymer phase with low ion exchange power (5 µm × 4.6 mm × 50 mm) | IonPac NG1 (10 µm × 2 × 50 mm) + Ion Pac AG7 (10 µm × 2 × 50 mm) |
| Column temperature | Ambient | 40 °C |
| Injection volume | 100 µL | 100 µL |
| Analysis time | 3 min | 2 min |

### System hardware (Materials, p. 2)

- Thermo Scientific Dionex ICS-6000 SP Single Pumps (P/N 22181-60001).
- Thermo Scientific Dionex AS-AP Autosampler (P/N 079656).
- Thermo Scientific UltiMate 3000 TCC-3000SD Standard Thermostatted Column Compartment (P/N 5730.0010).
- Thermo Scientific IC/LC Connector Kit for iCAP Q/Qnova Series ICP-MS Systems (P/N 1335350).
- Thermo Scientific Qtegra Intelligent Scientific Data Solution Software ChromControl Plug-in (P/N IQLAAGGACBFAOVMBJD).
- Two Dionex guard columns NG-1 and AG-7 in series (selected to improve impurity retention, reduce analysis time, and increase sample throughput, p. 2).
- PFA-LC nebulizer at the column outlet to the iCAP RQ ICP-MS (p. 2).
- ⁵²Cr (most abundant Cr isotope) selected for quantification with kinetic energy discrimination (KED) using pure helium as the collision gas to eliminate polyatomic interferences (p. 2).

### Standards preparation (p. 2)

- Eluent: 75 mM HNO₃ as oxidizing agent enabling Cr(VI) / Cr(III) separation; for EN 71-3:2019 compliance the pH was adjusted to 7.0 with an ammonia solution to maintain Cr(VI) stability.
- Stock Cr(VI) standard: 1 g/L prepared in ultrapure water; fresh standard dilutions prepared daily; standard-solution pH adjusted to 7.5.

### Migration procedure (p. 3)

- Migration procedure follows EN 71-3:2019 — extraction of soluble elements under conditions simulating contact with gastric juices for a defined period after ingestion of toy material.
- Alkaline post-extraction conditions were used to maintain Cr(VI) stability against redox interconversion with Cr(III) once the migration was complete (the Brief flags that pH and redox potential adversely impact Cr species stability if not monitored).
- Sample types tested: glue and paint from EN 71-3 category II (liquid or sticky materials); plastic figure from category III (scraped-off materials).
- Chromatograms (Figures 3, 4, 5, pp. 3–4) confirm Cr(VI) is stable and retained at ≈50 s in each sample matrix; the spike peaks integrate cleanly above the native baseline.

## Evidence Fitness

This Brief is a vendor application note providing methodological demonstration and regulatory context. The contamination findings (three samples, all non-detect for Cr(VI)) cannot support occurrence claims for any product class, brand, country, or supply chain — sample size and sampling design preclude inference beyond "the optimized method detected no Cr(VI) above 0.002 µg/L in these three samples." The page is filed as **context only** and as a methods reference for the EN 71-3:2019 Cr(VI) analytical workflow. Public evidence label: Context only. The page does not contribute occurrence rows to any ingredient `contamination_profile` and does not support a percentile derivation on any product page.

## Methods (brief)

- **Analytical technique.** Hyphenated ion chromatography / inductively coupled plasma mass spectrometry (IC-ICPMS). Cr(VI) is separated from Cr(III) and other chromium species by anion-exchange chromatography on Dionex IonPac NG1 + AG7 guard columns at 40 °C, 0.7 mL/min, with 75 mM HNO₃ at pH 7.0 (adjusted with ammonia) as the mobile phase. The chromatographic eluent is delivered to a Thermo Scientific iCAP RQ ICP-MS via PFA-LC nebulizer. ⁵²Cr (most abundant Cr isotope) is detected with kinetic energy discrimination (KED) using helium as the collision gas to suppress polyatomic interferences. The Cr(VI) retention time is ≈50 s; other Cr species elute in the void volume at ≈25 s and are not retained.
- **Speciation.** The method explicitly speciates Cr(VI) from total Cr. Cr(III) and other chromium species in the void volume can be optionally identified by complementary ⁵²Cr and ⁵³Cr isotope monitoring.
- **Calibration.** Five-point external calibration at 0.02–0.16 µg/L Cr(VI) (Table 1), R² = 0.9998, BEC = 0.002 µg/L. Standards prepared daily from a 1 g/L Cr(VI) stock in ultrapure water and adjusted to pH 7.5.
- **Detection and quantification.** Instrumental detection limit (3σ) = 0.35 ng/L Cr(VI). Working method quantification claimed at 0.002 µg/L Cr(VI) in the migration extract, equivalent to 0.25 µg/kg in toy material under the EN 71-3 extraction (the Brief's stated 20× margin below the 0.005 mg/kg EN 71-3:2019 limit).
- **Sample preparation.** Migration extraction per EN 71-3:2019 simulating gastric-juice contact after ingestion. Post-extraction alkaline conditions used to maintain Cr(VI) stability against redox interconversion with Cr(III). Sample pH was monitored before injection (reported as 7.43–7.61 across the three test matrices) because Cr(VI) retention time stability depends on sample pH.
- **Quality control demonstrated.** Spike recovery 98%–109% across glue, plastic toy, and paint matrices at the 0.01 µg/L spike level (Table 2). Retention-time stability across sequential injections demonstrated (Figure 2 overlay). No carry-over reported. The Brief does not report reference-material validation (no NIST SRM, no NRCC reference material, no inter-laboratory comparison).
- **Limitations.** Single-vendor demonstration on a single instrument pairing (Dionex ICS-6000 + iCAP RQ ICP-MS) using vendor-supplied consumables. Three method-validation samples (n=3) — no inter-laboratory transfer demonstrated, no method bias against an independent reference, no real-world brand or product sampling. Validation samples were sourced from EN 71-3 category II and III materials only; categories I (dry, brittle, powder-like) were not exercised. No matrix-matched calibration described; the Brief does not state whether matrix effects were quantified beyond the spike-recovery exercise.

## Implications

- **Regulatory context for EN 71-3:2019 Cr(VI) analysis.** Confirms that the current generation of commercial IC-ICPMS hardware can reliably reach the 0.0025 mg/kg "future-revised method" threshold flagged in the SCHER 2015 opinion as the analytical performance needed to support potentially tighter Cr(VI) limits. The Brief's 0.25 µg/kg working quantification is one order of magnitude below the current 0.005 mg/kg EN 71-3:2019 limit and one order of magnitude below the SCHER-recommended 0.0025 mg/kg revised-method target.
- **Speciation matters for Cr in toy materials.** The Brief reinforces that EN 71-3:2019 regulates Cr(VI) specifically (not total Cr), and that any compliance workflow must speciate. Total-Cr workflows (the historic ISO 8124-3 and earlier EN 71-3 lineage) cannot satisfy the EN 71-3:2019 Cr(VI) limit because the toxicological basis for the tighter limit is hexavalent-chromium-specific.
- **Stability of Cr(VI) during extraction and storage is non-trivial.** The Brief documents the pH-dependence of Cr(VI) retention-time stability and the redox-interconversion risk between Cr(VI) and Cr(III) under migration-extraction conditions. Compliance laboratories that adopt EN 71-3:2019 Cr(VI) workflows need to manage extraction pH (alkaline post-extraction), eluent pH (7.0 with ammonia adjustment), standard-solution pH (7.5), and sample-injection pH (~7.4–7.6) as analytical-control parameters, not as procedural detail.
- **Vendor-publication caveats.** Because this is a Thermo Fisher Application Brief demonstrating Thermo Fisher hardware (iCAP RQ, ICS-6000), the page is filed at evidence_tier C and the method-performance numbers are not independently verified against a reference instrument or an inter-laboratory study. The methodological claims are reproducible by reading the Brief; the performance claims are vendor-stated.
- **App.** Not directly relevant to ingredient `contamination_profile` data because no food matrix is involved and the toy-material findings are non-detect on three method-validation samples. Relevant to a future toy-screening surface as a methods reference for the EN 71-3:2019 Cr(VI) workflow.
- **Courses.** Useful methodological example for the speciation/method-development teaching module: a clean case study of an IC-ICPMS optimization driven by a regulatory standard (EN 71-3:2019), with explicit discussion of how pH control across the extraction–storage–injection chain enables Cr(VI) measurement at the 0.002 µg/L working level.

## Wiki pages this source may touch

- [[metals/chromium-hexavalent]]
- [[products/toys-painted]]
- [[products/toys-substrate-materials]]
- [[products/art-craft-materials]]

## Verification notes

- **Source identification.** Silvia Villarreal, Laurent Naels, Jean-François Garnier, "Ensuring toy safety from hexavalent chromium to meet European regulations using IC-ICPMS quantification," Thermo Fisher Scientific Application Brief AB000383, EMEA Customer Solution Center, Paris, France. Document code AB000383-EN 1121S, © 2021 Thermo Fisher Scientific Inc. Pagination is the 5-page Application Brief as ingested. No DOI is assigned; the canonical identifier is the Thermo Fisher document number AB000383. Application Briefs are short vendor publications that sit one step shallower than Application Notes; this Brief explicitly references the longer companion Application Note AN43175 (Reference 3) as the underlying method that the Brief presents in updated form for EN 71-3:2019 compliance.
- **Folder context vs paper scope.** The PDF lives under `_extracted_infantdurable_01_Cribs_Bassinets_Enclosures/01_Cribs_Bassinets_Enclosures/` in the Kimi corruption-issue raw tree. The folder name suggests cribs/bassinets/enclosures, but the Brief is about toys (glue, paint, plastic figure) under EN 71-3:2019, not about cribs or sleep furniture. The folder name reflects the Kimi-agent's batch-organization scheme during the May 2025 corruption-extraction recovery, not the document's actual product-class scope. Frontmatter `products:` reflects the actual product classes addressed by the Brief (painted toys, plastic substrate toys, art/craft materials) rather than the folder name.
- **Source-tier rationale.** `evidence_tier: C`: and consistent with the existing handling of vendor application notes in the corpus ([[sources/moriceau2025-cosmetics-icpms-iso21392]] is the parallel Thermo Fisher cosmetics application note at the same tier). The Brief is a vendor publication; the method-performance claims are vendor-stated and not independently verified. The methodological content is reproducible by reading the Brief but the performance numbers are not inter-laboratory-validated.
- **Source-type rationale.** `source_type: industry-application-note`: matches the existing handling of vendor application notes in the corpus. The Brief is one step shallower in length and depth than an Application Note (5 pp vs typically 12–16 pp) but the document character is the same — a vendor-published methods demonstration, not a peer-reviewed paper, not a regulatory document, not an NGO publication.
- **Evidence-fitness rationale.** `evidence_fitness: EF-X` and `public_evidence_label: Context only`: the sample-size-n=3 method-validation data cannot support any occurrence claim (all three samples are non-detect, the sampling frame is method-demonstration, and no brand/lot/region sampling design exists). The Brief is fit-for-purpose as a methods reference and as regulatory-context anchor for EN 71-3:2019 Cr(VI) analytics, not as occurrence evidence.
- **License rationale.** `vendor application note — © 2021 Thermo Fisher Scientific Inc.`: the document is copyrighted Thermo Fisher Scientific. The bottom-of-page-4 disclaimer states "For Research Use Only. Not for use in diagnostic procedures." and "This information is presented as an example of the capabilities of Thermo Fisher Scientific products. It is not intended to encourage use of these products in any manners that might infringe the intellectual property rights of others." Wiki-side reproduction is limited to the regulatory facts (the 0.005 mg/kg EN 71-3:2019 limit, the SCHER 2015 recommendation, the EN 71-3 categorization scheme) and to the quantitative method-performance content (calibration, detection limit, spike recovery) necessary to convey the Brief's methodological contribution as a context source. Tables 1, 2, and 3 are reproduced verbatim because they are the regulatory and quantitative facts the Brief reports.
- **Frontmatter `metals:` field.** `[Cr-VI]` only. The Brief speciates and quantifies hexavalent chromium specifically; total Cr is mentioned only as the broader analyte category from which Cr(VI) is separated chromatographically. Cr(III) and other Cr species elute in the void volume and are not retained or quantified. Per ("Cr-VI" is a non-negotiable distinction from "Cr"), the frontmatter records Cr-VI alone.
- **Frontmatter `products:` field.** Three slugs selected from the current toy-products taxonomy: `toys-painted` (the paint sample), `toys-substrate-materials` (the plastic toy figure), and `art-craft-materials` (the glue sample). All three are existing pages and the routing layer will fan the source out to each. I considered routing only to `toys-painted` since paint is the most directly Cr(VI)-relevant matrix in the typical EN 71-3 enforcement context, but the Brief explicitly tests all three matrix types and demonstrates spike recovery in each, so all three are appropriate destinations. I did not route to specific toy-product slugs (`toys-rattles`, `toys-balls`, etc.) because the Brief addresses toy *materials* (paint, glue, plastic substrate) rather than any specific toy-product category, consistent with the EN 71-3:2019 scope and the analogous ISO 8124-3:2020 page in the corpus ([[sources/iso2020-8124-3-toy-migration-elements]]).
- **Frontmatter `ingredients: []`** is correct — no food ingredients are involved.
- **Frontmatter `matrices: []`** is correct — no food matrices are reported. The three test matrices (glue, paint, plastic toy) are toy materials, not food matrices.
- **Frontmatter `jurisdictions: [EU]`.** The Brief is explicitly oriented to meeting the European EN 71-3:2019 standard and references the SCHER (Scientific Committee on Health and Environmental Risks, an EU committee) 2015 opinion. The authors are based at the Thermo Fisher EMEA Customer Solution Center in Paris, France. No US, UK, or other-jurisdiction regulatory framing appears in the Brief.
- **Near-duplicates.** [[sources/iso2020-8124-3-toy-migration-elements]] is the international ISO consensus standard that EN 71-3:2019 is the European national-bloc parallel to. ISO 8124-3:2020 regulates total Cr (not Cr-VI); EN 71-3:2019 introduced a separate Cr-VI-specific migration limit not present in ISO 8124-3:2020. The two documents are companion regulatory references, not duplicate methodologies — flagged as a near-duplicate because both are toy-metals migration-test standards that would be cross-referenced together in any toy-Cr compliance workflow, and because the ISO page already records this lineage explicitly in its Implications section.
- **Brand-firewall (Part 12).** No brand-name attribution to contamination values appears in the Brief or in this page. Per the Part 12 Exception 2 (scientific-method vendor/material names), the Materials section reproduces the Thermo Scientific Dionex ICS-6000, iCAP RQ, AS-AP autosampler, UltiMate 3000 TCC-3000SD, IonPac NG1/AG7 guard columns, and Qtegra software references because these are scientific-method names necessary for reproducibility, not brand-attribution to contamination values. The contamination values reported in Table 2 are attributed to product-form descriptors (glue, plastic toy, paint) not to brand-identified products.
- **Wiki/HMTc firewall (Part 2).** The Key numbers section reports the calibration curve, the spike-recovery table, and the experimental-conditions comparison verbatim from the Brief. The EN 71-3:2019 0.005 mg/kg current limit and the SCHER 2015 recommendation are reported as factual regulatory context. No HMTc threshold values are proposed, endorsed, or critiqued. The Implications section notes the Brief's working quantification is one order of magnitude below the current EN 71-3:2019 limit and the SCHER-recommended revised-method target, but treats this as a methodological observation about analytical capability, not as a threshold-setting recommendation. No bridge is constructed from "the method can measure to 0.25 µg/kg" to "HMTc should certify at X µg/kg."
- **Sample size and population.** `sample_n: 3` — three method-validation samples (one glue, one plastic toy, one paint). The `sample_population` field documents the method-demonstration character of the sample frame and explicitly disclaims population-representative inference.
- **Regulation-page mapping.** No `wiki/regulations/en-71-3-2019.md` exists at the 2026-06-01 taxonomy snapshot. A dedicated regulation page for EN 71-3:2019 would be appropriate (regulations get pages on first encounter when they have hard agency identifiers); the rule identifier is unambiguous ("EN 71-3:2019 — Safety of toys — Part 3: Migration of certain elements"). This is flagged for the next regulation-page creation pass rather than created in this manual-fetch ingest cycle, per the v2 skill discipline (do not create regulation pages mid-ingest; surface in stop-report or verification notes). The corpus already cross-references the parallel international standard [[sources/iso2020-8124-3-toy-migration-elements]] and the EU 2009/48/EC Toy Safety Directive (referenced from the ISO 8124-3:2020 page).
- **Date and unit conventions.** Cr(VI) concentrations in the migration extract reported in µg/L per Tables 1 and 2 of the Brief. Cr(VI) in toy material reported in mg/kg per the EN 71-3:2019 regulatory framing. The conversion factor between extract µg/L and toy-material mg/kg follows the EN 71-3 extraction stoichiometry (the Brief states 0.002 µg/L extract corresponds to 0.25 µg/kg toy material, implying a 125× extract-to-substrate ratio at the working level). Method quantification limit BEC = 0.002 µg/L is also reported in extract concentration units. IDL = 0.35 ng/L is reported in nanogram/liter, equivalent to 0.00035 µg/L. Detection-limit basis is 3σ.
- **Raw integrity.** raw_sha256 = 76479bea170a670d5979bb84bc7c377842acdaf650565c9c36a50a69e8ee27a1 confirmed against the file via shasum -a 256. PDF is 2,022,490 bytes (≈1.93 MB) and 5 pages. The original filename "08_Unknown.pdf" reflects the Kimi-agent's filename-loss during the May 2025 corruption-extraction recovery; the document's actual title and authorship were recovered by direct PDF read.
- **References cited in the Brief.** Reference 1: EN 71-3:2019, Safety of Toys – Part 3: Migration of certain elements (the European Committee for Standardization standard the Brief implements). Reference 2: Alvarez CC, Gómez MEB, Zavala AH (2021), "Hexavalent chromium: Regulation and health effects," Journal of Trace Elements in Medicine and Biology, article 126729 — the toxicological-basis citation underpinning the Brief's tighter-limit rationale. Reference 3: Thermo Fisher Scientific Application Note 43175 — the longer companion methods publication that this Brief presents in updated form. None of these three references are currently in the HMI source corpus.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3a67e1307](https://github.com/paleofoundation/heavymetalindex/commit/3a67e1307) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [c3909aad7](https://github.com/paleofoundation/heavymetalindex/commit/c3909aad7) | 2026-06-02 | major | 1 section added |
<!-- END: hmi-page-history -->
