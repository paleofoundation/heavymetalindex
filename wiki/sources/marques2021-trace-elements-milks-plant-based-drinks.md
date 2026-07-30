---
type: source
cite_key: marques2021-trace-elements-milks-plant-based-drinks
raw_handle: FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan
title: "Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks"
authors: [Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, Domingo JL]
year: 2021
publication: "Biological Trace Element Research"
doi: "10.1007/s12011-021-03021-5"
license: "CC-BY-4.0"
access_url: "https://doi.org/10.1007/s12011-021-03021-5"
source_type: peer-reviewed
evidence_tier: A
raw_path: raw/markdown/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan.md
raw_sha256: "c4a9ea041c237c439a2a6bd4d1f346b6d20718d7cefb44eced22089115cc6742"
near_duplicates: []
metals: [Pb, tHg, Ni, U, V]
ingredients: ["[[ingredients/plant-milk]]", "[[ingredients/soy-milk]]", "[[ingredients/soy]]", "[[ingredients/almond]]", "[[ingredients/rice-milk]]", "[[ingredients/rice]]", "[[ingredients/oat]]", "[[ingredients/whole-milk]]", "[[ingredients/milk-and-dairy]]"]
products: ["[[products/plant-milks-soy-based]]", "[[products/plant-milks-rice-based]]", "[[products/plant-milks-non-soy-non-rice]]", "[[products/infant-formula-powder]]"]
context_only_products: ["[[products/infant-formula-powder-non-soy]]"]
matrices: [cow-milk, goat-milk, soy-drink, almond-drink, rice-drink, oat-drink, infant-formula, follow-on-formula]
jurisdictions: [EU, Spain]
sample_n: 32
sample_population: "Thirty-two retail milk and plant-based drink composites purchased from supermarkets in Reus, Catalonia, Spain in January 2021. Selection followed the ENALIA survey of nutrition in Spanish children and adolescents. Frame: cow milk (whole, organic whole, semi-skimmed, organic semi-skimmed, skimmed, organic skimmed, lactose-free, organic lactose-free, fresh variants of each), goat milk (semi-skimmed, organic whole, whole fresh, organic whole fresh), soy drink (conventional and organic), almond drink (conventional and organic), rice drink (conventional and organic), oat drink (conventional and organic), and infant/follow-on formulas (one base infant formula plus four follow-on formula products, each with conventional and organic variants where available). Triplicates of each product type were obtained when up to three brands were available; brand replicates were composited into a single sample per product type before analysis."
sampling_locations: ["[[locations/reus-catalonia-spain]]"]
sampling_year_range: [2021, 2021]
wiki_doi: null
updated: 2026-06-08
---

# Marques et al. 2021 — Essential and non-essential trace elements in milks and plant-based drinks (Reus, Catalonia, Spain retail)

Marques and colleagues at the Universitat Rovira i Virgili Laboratory of Toxicology and Environmental Health measured seven essential elements (Ca, Co, K, Mg, Mn, Na, Ni, P) and four non-essential/toxic elements (Hg, Pb, U, V) in 32 milk and plant-based drink composites purchased from supermarkets in Reus, Catalonia, Spain in January 2021. The product frame covered cow milk (13 variants enumerated in the Methods text, including whole, semi-skimmed, skimmed, lactose-free, fresh, and organic versions; Table 1 contains 14 cow-milk rows owing to source-paper duplication and labeling inconsistencies), goat milk (4 variants), soy drink (conventional and organic), almond drink (conventional and organic), rice drink (conventional and organic), oat drink (conventional and organic), and seven infant/follow-on formula products. All elements were quantified by inductively coupled plasma mass spectrometry (ICP-MS) following nitric-acid digestion. Of the four toxic elements measured, only Pb was detected (in three samples: non-organic whole cow milk, non-organic skimmed cow milk, and non-organic oat drink); Hg, U, and V were below detection limits in every sample. The authors report that the two non-organic cow milk Pb values exceeded the Codex Alimentarius CODEX STAN 193-1995 maximum limit for milk. Goat milk had the highest essential-element content overall (K, Na, P, Mg); cow milk was richest in Ca; soy drink led plant-based drinks for Mg and Mn; almond drink led plant-based drinks for Ca. Production system (organic vs conventional) and presence of lactose did not produce statistically significant differences in essential-element content; sterilization method (fresh vs UHT) and animal species (cow vs goat) did.

## Why this matters

- It connects the locked plant-milk rows to a real finished-beverage occurrence source rather than leaving them as pure taxonomy.
- It distinguishes finished beverage matrices from ingredient-only values, so the values belong on product pages and in occurrence data, not in ingredient `contamination_profile` fields.
- It flags a product-row gap: non-soy/non-rice plant milks (almond, oat) need more occurrence studies before the row can be treated as a clean benchmark for HMTc work; the single non-organic oat drink Pb detection (0.220 in the source's stated units) is well above the LOD and warrants follow-up.
- The infant/follow-on formula rows were reconstituted from powder (15 g powder + 30 mL purified water per the Sample Treatment section) and reported on the reconstituted basis, so the values are RTF/as-consumed-basis, not powder-basis.

## Key numbers

All concentrations below are reported exactly as they appear in source Table 1, which carries the header "Concentrations (µg/kg)". The Materials and Methods section, however, states the limits of detection in µg/g ("0.05 µg/g for Hg, Mn, Ni, Pb and V, and at 0.025 µg/g for Co and U") with numerical values matching the Table 1 LD row, and the paper's Codex Alimentarius reference cites a Pb maximum limit at "0.02 µg/kg" (the actual CODEX STAN 193-1995 milk Pb limit is 0.02 mg/kg = 20 µg/kg). The values in Table 1 are internally consistent with a µg/g basis (for example, cow milk Ca at 1084 in source units matches typical cow milk Ca of approximately 1084 mg/kg, not 1.084 mg/kg). See Verification notes for the unit reconciliation; downstream synthesis must resolve this before pooling these values with other plant-milk occurrence studies.

### Sampling and analytical frame (source Materials and Methods, pp. 4524-4526)

| Item | Source value |
| --- | --- |
| Sampling frame | Retail milks and plant-based drinks purchased in Reus, Catalonia, Spain in January 2021 |
| Sampling guidance | ENALIA National Survey of Nutrition in the Child and Adolescent Population of Spain |
| Total composites analyzed | 32 |
| Matrices | Cow milk (13 variants per Methods text; Table 1 has 14 rows due to source duplication), goat milk (4 variants), soy drink (2), almond drink (2), rice drink (2), oat drink (2), infant/follow-on formula (7) |
| Analytical method | ICP-MS following HNO3 (10% Suprapur) digestion, 8 h pre-digestion at room temperature plus 8 h at 80 °C |
| Reference materials | NIST SRM 1570a (spinach leaves) for Mn/Hg/Pb/Ni/V/Co/U recoveries; NIST SRM 1549a (whole milk powder) for K/Ca/Mg/Na/P recoveries |
| Recovery range | 75 to 110 percent (Ni slightly low at 55 percent) |
| LOD (toxic elements) | Hg 0.05, Pb 0.05, U 0.025, V 0.05, Ni 0.05 (source-stated units: µg/g in Methods text; µg/kg in Table 1 header — see Verification notes) |
| LOD (essential elements) | Ca 50, Co 0.025, K 250, Mg 25, Mn 0.05, Na 250, P 250 |
| Statistics | Median and 25th-75th percentiles for non-normal continuous variables; mean and SD for normal; Mann-Whitney U, Welch t, chi-square or Fisher exact tests as appropriate; Cohen d effect size with 95 percent CI for group comparisons; k-means clustering (3 clusters via elbow method) and PCA for unsupervised structure |

### Toxic-element detection summary (source Table 1 and Results section, pp. 4527-4528)

| Sample | Pb (source units) | Hg | U | V |
| --- | --- | --- | --- | --- |
| Whole cow milk (non-organic) | 0.027 (detected, below LQ; exceeded Codex limit per authors) | <LD | <LD | <LD |
| Skimmed cow milk (non-organic) | 0.033 (detected, below LQ; exceeded Codex limit per authors) | <LD | <LD | <LD |
| Oat drink (non-organic) | 0.220 (detected, above LQ; exceeded Codex limit per authors) | <LD | <LD | <LD |
| All other samples (n=29) | <LD | <LD | <LD | <LD |

Hg, U, and V were not detected in any of the 32 samples. Pb was detected in 3 of 32 samples, all non-organic; the corresponding organic versions of whole cow milk, skimmed cow milk, and oat drink were <LD for Pb. The paper does not measure inorganic arsenic (iAs), cadmium (Cd), aluminum (Al), tin (Sn), chromium (Cr), antimony (Sb), or molybdenum (Mo) as target analytes in this panel.

### Essential-element headline findings (source Table 1 and Results section, p. 4527)

- Highest essential-element values by matrix (per source narrative): Mg and Mn in conventional soy-based drink; Ni in non-organic skimmed fresh cow milk; Ca in organic whole fresh goat milk; K and Na in organic whole goat milk; P in non-organic semi-skimmed goat milk.
- Detection frequencies: Ca, K, Mg, Na, P detected in all 32 samples; Mn detected in 19 of 32 samples; Ni detected in 6 of 32 samples; Co not detected in any sample.
- Soy-based drink contained the highest Mg of any plant-based drink (184 in source units, compared with 21 to 184 across plant-drink categories) and the highest Mn (2.052 in conventional soy and 1.444 in organic soy, compared with 0.035 to 2.052 across all samples).
- Almond drink had the highest Ca content among plant-based drinks (1064 in conventional, 327 in organic almond).
- Among milks, goat had higher Ca, K, Mg, Na, P than cow (Cohen d 95 percent CI ranged from -2.18 to 0.14, all favoring goat).

### Significant group differences (source Results section, pp. 4527-4529)

- **Production system (organic vs conventional):** no significant differences (p > 0.05) for any of Ca, K, Mg, Mn, Na, P in either milks or plant-based drinks. Consistent with prior reports that organic certification does not regulate essential or non-essential element content.
- **Sterilization (fresh vs UHT, milks only):** Mn significantly higher in UHT than fresh (Cohen d 95 percent CI 0.34, 1.65); Ca, Mg, P significantly higher in fresh than UHT (Cohen d 95 percent CI -1.62 to -0.32, -1.60 to -0.30, and -1.56 to -0.26 respectively). K and Na not significantly different.
- **Animal species (cow vs goat, milks only):** Ca, K, Mg, Na, P all significantly higher in goat (p < 0.05); Mn not different.
- **Lactose presence (regular vs lactose-free cow milk):** no significant differences for any essential element.
- **Production system of infant formula (conventional vs organic):** no significant differences for any essential or non-essential element.

### PCA and clustering structure (source Results section, p. 4529)

K-means clustering with three clusters separated the samples into (1) animal milks, (2) soy-based drinks, and (3) other plant-based drinks (almond, oat, rice). The principal component analysis (PC1 63.5 percent, PC2 22.2 percent of variance) loaded Na, Ca, P, K, Mg on the animal-milk cluster and Mn on the soy-based-drink cluster. The non-essential elements (Hg, U, V) and those with detection rate below 50 percent (Ni, Pb) were excluded from the PCA per the authors' analytical protocol.

## Methods (brief)

Composites of each milk and plant-based drink were prepared with 5 mL of each individual sample (triplicate brands where available). Infant formula powder was reconstituted by mixing 15 g of powder with 30 mL of purified water before compositing, so the reported infant/follow-on formula values are on the reconstituted (as-consumed) basis. Up to 5 µL of each sample was mixed with 5 mL of 10 percent HNO3 (Suprapur, E. Merck, Darmstadt, Germany) in hermetic Teflon vessels and digested for 8 h at room temperature followed by 8 h at 80 °C. Digestates were cooled, filtered, and made up to 25 mL with purified water. Each sample was analyzed in duplicate.

Quantification used ICP-MS for Ca, Co, Hg, K, Mg, Mn, Na, Ni, P, Pb, U, and V. Reference materials were NIST SRM 1570a (spinach leaves; used to assess Mn, Hg, Pb, Ni, V, Co, U recoveries) and NIST SRM 1549a (whole milk powder; used to assess K, Ca, Mg, Na, P recoveries). Recoveries ranged from 75 to 110 percent except for Ni, which was slightly low at 55 percent. Limits of detection were 250 µg/g for K, Na, P; 50 µg/g for Ca; 25 µg/g for Mg; 0.05 µg/g for Hg, Mn, Ni, Pb, V; and 0.025 µg/g for Co, U per the Materials and Methods text (the Table 1 LOD row carries the same numerical values but the table header states µg/kg; see Verification notes for the unit reconciliation).

Statistics were performed in R 4.0 and IBM SPSS 27.0. Continuous variables were tested for normality with the Shapiro-Wilk test, then compared between groups with the non-parametric Mann-Whitney U test for non-normal variables, the Welch t test for normal variables, or chi-square / Fisher exact test for categorical variables. Effect sizes used Cohen d with 95 percent confidence intervals. Confidence intervals were set at 95 percent (type I error rate 5 percent). Metals with detection rate below 50 percent (Ni, Pb) were excluded from the parametric group comparisons but were retained for descriptive Table 1 reporting and for the PCA-exclusion rationale.

## Implications

Certification: This is an EU-market (Spain) retail survey covering 32 composites spanning animal milks, plant-based drinks, and infant/follow-on formulas. The toxic-element panel is narrow (Hg, Pb, U, V) and omits the HMTc priority analytes Cd, iAs, Al, Sn, Cr-VI, and Sb. The Pb signal is the only positive finding: three non-organic samples (whole cow milk, skimmed cow milk, oat drink) exceeded the Codex Alimentarius CODEX STAN 193-1995 milk Pb limit per the authors. Because the units in Table 1 are ambiguous between µg/g (consistent with the Methods text and the Codex reference) and µg/kg (as the table header states), these values cannot be pooled with other plant-milk Pb occurrence data until the unit basis is resolved. The Pb detection in a non-organic oat drink is a row-specific signal that the plant-milks-non-soy-non-rice product page should track even if the values themselves require unit reconciliation.

App: Route to plant-milk, soy-milk, soy, almond, rice-milk, rice, oat, whole-milk, and milk-and-dairy ingredient pages, and to plant-milks-soy-based, plant-milks-rice-based, plant-milks-non-soy-non-rice, and infant-formula-powder product pages, with infant-formula-powder-non-soy noted as context-only because the source's infant formula formulations include both standard and follow-on formulas without explicit soy/non-soy splits. Toxic-element routing covers lead, mercury-total, uranium, vanadium, and nickel; Ni metal-page routing is appropriate even though Ni was detected in only 6 of 32 samples because the detection frequency itself is a useful occurrence signal.

Courses: Useful for illustrating (a) the systematic absence of regulatory-relevant toxic elements (Hg, U, V) in EU retail milks and plant-based drinks, (b) the contrast between organic-versus-conventional certification (no element-content effect detected) and animal-species or sterilization-method (significant essential-element effects), (c) the row-specific gap that plant-milk product pages cannot rely on a single small composite study for occurrence-data pooling, and (d) how reconstituted-from-powder infant formula values must be tagged as RTF-basis to avoid downstream conflation with powder-basis FDA workbook values.

## Limitations

The study is Spain-specific, composite-based (not individual-sample), small in sample size for plant-based drinks (only 2 samples per drink type with no within-type replicate quantification), and excludes the HMTc priority analytes Cd, iAs, Al, Sn, Cr-VI, Sb, and Mo. The Pb detection-frequency calculation is on 3 of 32 samples, all non-organic, with no replicate sampling of the same brand or production lot. The unit basis in Table 1 is internally inconsistent with the Methods text (µg/g vs µg/kg as stated in the header), and the Codex reference quoted by the authors uses an incorrect unit format for the Codex STAN 193-1995 milk Pb limit (actual: 0.02 mg/kg = 20 µg/kg); downstream synthesis must reconcile units before pooling these Pb values with other occurrence studies. The PCA exclusion of metals with detection rate below 50 percent means the multivariate structure does not reflect the Pb or Ni signals. The infant/follow-on formula values are on a reconstituted-from-powder (as-consumed) basis and should not be compared directly with powder-basis FDA Closer-to-Zero workbook values without applying the reconstitution factor.

## Wiki pages this source may touch

- [[ingredients/plant-milk]]
- [[ingredients/soy-milk]]
- [[ingredients/soy]]
- [[ingredients/almond]]
- [[ingredients/rice-milk]]
- [[ingredients/rice]]
- [[ingredients/oat]]
- [[ingredients/whole-milk]]
- [[ingredients/milk-and-dairy]]
- [[products/plant-milks-soy-based]]
- [[products/plant-milks-rice-based]]
- [[products/plant-milks-non-soy-non-rice]]
- [[products/infant-formula-powder]]
- [[products/infant-formula-powder-non-soy]]
- [[metals/lead]]
- [[metals/mercury-total]]
- [[metals/uranium]]
- [[metals/vanadium]]
- [[metals/nickel]]

## Verification notes

This page was merge-enhanced on 2026-06-08 from a pre-2026-05-14 source page that lacked the matrices array (causing routing_malformed.csv advisory), had thin Key numbers with no actual numeric values, used the legacy "## Wiki pages updated on ingest" section, and did not document the unit inconsistency in the source paper. DOI 10.1007/s12011-021-03021-5 confirms identity; the same paper was independently re-fetched into raw/Manual Fetch Discovery/marques2021-milk-plant-drinks-trace-elements.pdf via the /discover skill and triggered this enhancement. The original raw_path (FM_9439980 Marker output) is preserved per the v2 merge-enhance protocol.

Unit reconciliation. Source Table 1 carries the header "Concentrations (µg/kg)" but the Materials and Methods text on p. 4526 states the limits of detection in µg/g: "0.05 µg/g for Hg, Mn, Ni, Pb and V, and at 0.025 µg/g for Co and U." The numerical values in the Table 1 LOD row match the µg/g methods-text values exactly (0.05, 0.05, 0.025, 0.05 for Hg, Pb, U, V respectively). The reported essential-element values are also internally consistent with µg/g: for example, whole cow milk Ca at 1084 in source units is consistent with typical cow milk Ca of approximately 1084 mg/kg (= µg/g), not 1.084 mg/kg (= µg/kg). The paper's Results section, referring to the Pb detections in non-organic cow milks, states the values "exceeded the maximum limit set by the Codex Alimentarius (CODEX STAN 193-1995) at 0.02 µg/kg in these samples"; the actual CODEX STAN 193-1995 milk Pb maximum is 0.02 mg/kg (= 20 µg/kg = 0.02 µg/g), and the cow milk Pb values 0.027 and 0.033 exceed this limit only if interpreted as µg/g, not as µg/kg. The most parsimonious reading is that Table 1 and the Codex citation are mislabeled in the published paper, and the actual unit basis throughout is µg/g (= mg/kg). The values on this page are reported as they appear in source Table 1 (numerical values exactly as printed) with this caveat documented; downstream synthesis must apply the µg/g interpretation when pooling with other occurrence studies, or contact the corresponding author to confirm. The corresponding author (M. Marques, montserrat.marques@urv.cat) and the Data Availability statement ("Results are available to any researcher upon direct request to the corresponding author") provide a path to confirm.

Speciation. The paper measured total Hg (no MeHg speciation); the metals: frontmatter entry is tHg accordingly. Pb is reported as total Pb. U is reported as total U with no isotopic speciation; V is reported as total V; Ni is reported as total Ni. Inorganic arsenic, total arsenic, cadmium, aluminum, tin, antimony, and chromium (total or hexavalent) were not measured.

Sampling-location slug. The sampling_locations array uses [[locations/reus-catalonia-spain]] as a placeholder; the locations/ taxonomy does not yet have a dedicated Reus page. The jurisdictions: array (EU, Spain) carries the routable identity for now. If a locations/ wiki page is created for Reus or Catalonia under Karen's Step 0 Lock in the future, this source should be added to its inbound routing.

Infant-formula basis. The Sample Treatment section (source p. 4525) describes powder reconstitution: "For infant formula powder, 15 g was mixed with 30 mL of purified water, and subsequently, the composite was made up with 5 mL of each sample." The seven infant/follow-on formula values in Table 1 are therefore on the reconstituted-as-consumed basis, not the as-sold-powder basis. Downstream synthesis touching the infant-formula-powder product page must apply the reconstitution factor (15 g powder / approximately 45 mL reconstituted liquid, roughly 1:3 weight basis) before comparing with powder-basis FDA Closer-to-Zero workbook values. The context_only_products array flags infant-formula-powder-non-soy because the source does not split soy vs non-soy formula formulations.

License inference. The paper carries an Open Access statement on p. 4532 ("This article is licensed under a Creative Commons Attribution 4.0 International License") and the funding statement ("Open Access funding provided thanks to the CRUE-CSIC agreement with Springer Nature"). License recorded as CC-BY-4.0.

Audit subagent (2026-06-08, agent a3393c0dc09b29b61) returned verdict REVISE with two ⚠️ findings on Check 1 (numerical fidelity). Both verified independently against the PDF Methods section and applied: (a) cow-milk variant count corrected from "10 variants" to "13 variants enumerated in the Methods text (Table 1 contains 14 cow-milk rows owing to source-paper duplication and labeling inconsistencies)" per p. 4525 verbatim enumeration; (b) sample-volume wording corrected from "Approximately 5 µL" to "Up to 5 µL" per p. 4525 verbatim ("Up to 5 µL of each sample was mixed with 5 mL of HNO3"). All other audit checks (slug vocabulary, speciation and methods, Part 12 brand firewall, Part 2 wiki/HMTc firewall) returned ✅ clean. No false positives to record.

Brand firewall. The source does not name individual brands; samples are reported only by product type (whole cow milk, organic skimmed cow milk, etc.). No brand-firewall (Part 12) translation was needed. The methods section names instrument-vendor materials (E. Merck Darmstadt HNO3 Suprapur, NIST SRM 1570a spinach leaves, NIST SRM 1549a whole milk powder, R 4.0, IBM SPSS 27.0) which are scientific-method-vendor references permitted under the 2026-05-17 strict-reading exception.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [64f281eae](https://github.com/paleofoundation/heavymetalindex/commit/64f281eae) | 2026-06-08 | minor | Narrative text revised |
| [a45b20f04](https://github.com/paleofoundation/heavymetalindex/commit/a45b20f04) | 2026-06-08 | major | 9 sections added and 2 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [20add894b](https://github.com/paleofoundation/heavymetalindex/commit/20add894b) | 2026-05-08 | major | 1 section removed |
<!-- END: hmi-page-history -->
