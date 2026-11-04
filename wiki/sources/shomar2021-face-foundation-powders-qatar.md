---
type: source
cite_key: shomar2021-face-foundation-powders-qatar
title: "A comprehensive risk assessment of toxic elements in international brands of face foundation powders"
authors: ["Shomar B", "Rashkeev SN"]
year: 2021
publication: "Environmental Research 193:110274"
doi: 10.1016/j.envres.2020.110274
access_url: "https://doi.org/10.1016/j.envres.2020.110274"
retrieval_date: 2026-11-04
source_type: peer-reviewed
evidence_tier: A
tier_rationale: "Peer-reviewed journal, ICP-MS analysis of 26 elements in 14 international brand samples with NIST SRM 2709 certified reference material verification. Clear reporting of method, LOD for each element, and health risk indices. Limitation: n=14 samples from one market (Qatar) and all samples are face foundation powders."
license: "CC BY 4.0 (PMC OA)"
raw_path: "raw/deposits/HMI-FILL-0024/10.1016_j.envres.2020.110274.pdf"
raw_sha256: c730ad26e632f538bb7e82591b02181373dff4856a7739fb92fc330a6135bf7f
metals: [Pb, Cd, tAs, Hg, Cr, Ni, Co, Cu, Zn, Al, Fe, Mn, Ba, Sr, V, Mo, U, Bi, Se, Sb, Sn, Tl, Be, Li, B, Ag]
ingredients: []
products: ["[[products/dusting-powder-cornstarch-adult]]", "[[products/makeup-foundation-powders-blush]]"]
matrices: [cosmetic-personal-care]
jurisdictions: [QA, FR, US, CA, IT, IE]
near_duplicates: []
sample_n: 14
sample_population: "Fourteen international brand face foundation powder products purchased from cosmetic shops in Qatar. Brands of origin included France (5), USA (3), Canada (2), Italy (2), and Ireland (2). All were pressed-powder or loose-powder face foundation products. Brand names are identified in the source but are not reproduced here per Part 12 of the wiki operating guidelines."
sampling_locations: ["Qatar (retail purchase)"]
sampling_year_range: null
wiki_doi: null
updated: 2026-11-04
ingest_method: evidence-fill-HMI-FILL-0024
created_by: claude-sonnet-4-6
evidence_fitness:
  supports:
    - per-sample-concentration-ranges-of-26-elements-in-face-foundation-powders-by-icp-ms-with-crm-verification
    - dermal-exposure-and-hazard-index-calculations-for-adult-use-scenario
    - comparison-with-eu-and-us-cosmetic-regulatory-limits
  does_not_support:
    - cornstarch-specific-dusting-powder-measurements-all-samples-are-face-foundation
    - speciation-of-arsenic-hexavalent-chromium-or-mercury-species
    - inhalation-or-ingestion-route-exposure-estimates
audience: [regulator, brand-qa, researcher]
sources: 0
---

# Shomar and Rashkeev 2021: Toxic elements in 14 international face foundation powders by ICP-MS

This Environmental Research study measured 26 elements in 14 international brand face foundation powder products purchased from Qatar markets, using ICP-MS (Bruker aurora M90) with NIST SRM 2709 certified reference material verification. The study assessed dermal exposure and computed hazard indices and cancer risk indices for adult female use. All 14 products showed hazard indices well below 1, and the authors concluded dermal exposure from these products was negligible under their modeled use scenario. However, several samples showed substantial variation in toxic element concentrations, with lead reaching 912 ppb and arsenic reaching 215 ppb in individual samples.

## Key numbers

Twenty-six elements measured by ICP-MS (Bruker aurora M90) with NIST SRM 2709 as certified reference material. Units in Table 2 of the source are µg/kg (ppb) except zinc, which is reported in mg/kg. LOD was reported per element. Recovery was verified against NIST SRM 2709.

### Key toxic elements across 14 face foundation powder samples (Table 2 of source, µg/kg unless noted)

| Element | Range across 14 samples | Units |
|---|---|---|
| Arsenic (total) | 15.74-214.63 | µg/kg (ppb) |
| Cadmium | 1.41-25.07 | µg/kg (ppb) |
| Cobalt | 169.35-1018.29 | µg/kg (ppb) |
| Chromium (total) | 39.27-6741.40 | µg/kg (ppb) |
| Copper | 8.12-8123.70 | µg/kg (ppb) |
| Mercury | 1.05-5.33 | µg/kg (ppb) |
| Lead | 2.29-912.08 | µg/kg (ppb) |
| Zinc | 1.4-8909.2 | mg/kg |
| Nickel | not extracted from table; present in panel | µg/kg (ppb) |
| Aluminum | not extracted from table; present in panel | µg/kg (ppb) |

The source identified Sample 7 (a foundation labeled as from France) as carrying the highest lead at approximately 912 ppb. Chromium reached 6741 ppb in one sample. The mean lead across the 14 samples was approximately 190 ppb (inferred from the source's risk calculation text). Zinc was reported separately in mg/kg, up to 8909 mg/kg in one sample, consistent with zinc oxide use in foundation formulation.

### Health risk indices (from source Table 4)

The source calculated non-cancer hazard indices (HI) and incremental lifetime cancer risk (ILCR) for each sample using EPA standard dermal exposure assumptions for adult females. All 14 samples had HI well below 1 (maximum approximately 0.001) and ILCR below 1e-6 for the oral route. The source concluded the face foundation powders did not pose a significant dermal health risk under the modeled exposure conditions.

## Methods

Products were purchased from cosmetic shops in Qatar. Sample preparation involved microwave acid digestion (20 mL HNO3 + 10 mL H2O2 at 150 degrees Celsius for 20 minutes). Analysis was by ICP-MS (Bruker aurora M90). Certified reference material: NIST SRM 2709 (San Joaquin soil). LOD was reported for each element. Twenty-six elements were quantified. Total arsenic, total mercury, and total chromium were measured; speciation was not performed.

## Evidence fitness

This source provides ICP-MS concentration data for 26 elements in 14 international brand face foundation powders, with CRM verification. It is the most analytically rigorous source in the HMI-FILL-0024 deposit for cosmetic powder measurements. All samples are face foundation powders (pressed and loose) rather than cornstarch-based adult dusting powder. The dermal exposure and hazard index calculations are product-specific to face foundation use scenarios.

## Limitations

Products are face foundation powders, not cornstarch-based adult dusting powder. All samples purchased from one market in Qatar; brand origin is international. n=14. Total arsenic, total mercury, and total chromium measured; arsenic speciation, methylmercury, and hexavalent chromium were not performed. The NIST SRM 2709 is a soil matrix, not a cosmetic matrix standard; this is a common practice in cosmetics analysis but introduces some matrix-mismatch uncertainty.

## Related evidence

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[metals/mercury-total]]
- [[metals/chromium]]
- [[products/dusting-powder-cornstarch-adult]]
- [[products/makeup-foundation-powders-blush]]

<!-- BEGIN: hmi-page-history -->
## Update history

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
<!-- END: hmi-page-history -->
