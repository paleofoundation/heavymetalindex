---
type: source
raw_handle: Digest/1471-2431-10-63.pdf
cite_key: burrell2010-aluminium-in-infant-formulas
title: "There is (still) too much aluminium in infant formulas"
authors: ["Shelle-Ann M. Burrell", "Christopher Exley"]
year: 2010
publication: "BMC Pediatrics"
doi: "10.1186/1471-2431-10-63"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: "raw/studies/1471-2431-10-63.pdf"
access_url: https://doi.org/10.1186/1471-2431-10-63
raw_sha256: "3f79353a3f8c325ab6ae57a1b12ccaa3504176286228428bffbba261e3630279"
metals: [Al]
products: ["[[products/infant-formula-powder-non-soy]]", "[[products/infant-formula-powder-soy-based]]", "[[products/infant-formula-rtf-liquid-non-soy]]"]
ingredients: ["[[ingredients/infant-formula-ingredients]]", "[[ingredients/milk-and-dairy]]", "[[ingredients/soy]]", "[[ingredients/soy-based-infant-formula]]", "[[ingredients/non-soy-infant-formula]]"]
matrices: [infant-formula-powder, infant-formula-rtf]
jurisdictions: [UK]
sample_n: 15
sample_population: "Fifteen branded infant formula products on the UK market; ready-made liquid and powdered formats; cow-milk-based and soya-based; first-infant, follow-on, growing-up, preterm, and good-night formulations"
updated: 2026-05-17
---

# Burrell and Exley 2010 — Aluminium in infant formulas

Burrell and Exley measured aluminium in infant formula products from the UK market, covering both ready-made liquid formulas and powders, cow-milk-based and a soya-based product, and first-infant, follow-on, growing-up, preterm, and good-night formulations. Ready-made formulas (n=8) ranged from 175.5 to 700.4 µg/L; the highest was the preterm formula. Powder-format entries in Table 2 (n=8), evaluated as prepared-milk equivalents per manufacturer instructions, ranged from 333.3 to 629.0 µg/L; the highest was the soya-based powder. The authors compared these values to typical breast-milk aluminium concentrations (~15-30 µg/L) and characterized formula aluminium content as 10 to 40 times higher.

## Key numbers

- Methods state 15 branded infant formula products; Tables 1-3 enumerate 8 ready-made liquid rows and 8 powder-format rows (one soya-based, seven cow-milk-based). Five replicate samples per product, each measured three times; replicate accepted if % RSD < 10%.
- Ready-made formula Al, mean concentrations (n=8): range 175.5 to 700.4 µg/L. Replicate maximum 863.0 µg/L in the preterm ready-made product. The preterm formula was the highest mean at 700.4 µg/L (Table 1).
- Powder Al, raw powder basis (n=8): range 2.4 to 4.3 µg/g. Replicate maximum 10.8 µg/g in one follow-on powder (Table 2).
- Powder Al, prepared-milk equivalent (per manufacturer reconstitution instructions): range 333.3 to 629.0 µg/L. The soya-based powder was the highest at 629.0 µg/L (Table 2).
- Estimated aluminium ingestion at 6 months, using manufacturer recommended feeding volumes: range 206 to 592 µg Al/24 h across ready-made and prepared powder products. The maximum 592 µg Al/24 h appears for the soya-based powder and one follow-on powder (Table 3).
- Estimated aluminium ingestion at 12 months (growing-up milks): 88 and 107 µg Al/24 h across the two growing-up milk rows.
- Estimated aluminium ingestion for a preterm infant from very-low-birth-weight (<1 kg) up to term (~2.5 kg): 112 to 263 µg Al/24 h.
- Authors' comparison anchor: typical breast-milk aluminium reported as ~15-30 µg/L; formula values are 10 to 40 times higher.

## Methods (brief)

Samples were taken directly from packaging (ready-made liquids shaken before sampling). Microwave digestion used a 50/50 mixture of 14 M HNO3 and 30% w/v H2O2. Digestates were diluted in ultra-pure water (conductivity <0.067 µS/cm). Aluminium was measured by transversely heated graphite atomiser on a PerkinElmer Analyst 600. Five replicate preparations per product × three measurements per preparation; means accepted only if % RSD <10%. LOD/LOQ are not reported in the published methods.

## Ingredient and process signals

The paper identifies cow-milk-based formulas, a soya-based formula, powder and ready-made liquid formats, and a preterm formulation as distinct evidence categories. The high soya-based-powder value (629.0 µg/L prepared-milk equivalent) is discussed in terms of aluminium accumulation in soybean plants and the aluminium tolerance of certain soybean cultivars grown on acid soils. Process contamination from individual ingredients, equipment, storage, and packaging is named as a likely contributor across all formats. `[[ingredients/soy]]` is the relevant agricultural-platform node for the soya-based finding; `[[ingredients/milk-and-dairy]]` and `[[ingredients/infant-formula-ingredients]]` are the formula-platform nodes for the cow-milk-based products.

## Implications

Certification (HMTc): Contributes aluminium occurrence data across three distinct infant-formula product subcategories (cow-milk-based powder, cow-milk-based ready-to-feed liquid, soya-based powder) plus a preterm subcategory not currently represented in the product taxonomy. The soya-powder value (629.0 µg/L prepared) and the preterm ready-made value (700.4 µg/L) are at the upper end of the literature range and warrant subcategory-specific treatment in any aluminium threshold work.

Courses: Teachable case study for brand QA, supply-chain, and regulatory-affairs audiences on format-specific contamination (powder vs ready-made differ on raw-material aluminium, water reconstitution, packaging migration), ingredient-platform effects (soya cultivar selection and acid-soil agronomy on aluminium uptake), and the gap between feeding-direction-based intake estimates and lab-measured product concentrations.

App: Contributes to the `contamination_profile` Al sub-block for the infant-formula ingredient family, with format-specific differentiation: cow-milk-based powder (n=7), cow-milk-based RTF (n=8), soya-based powder (n=1).

## Wiki pages this source may touch

- [[products/infant-formula-powder-non-soy]]
- [[products/infant-formula-powder-soy-based]]
- [[products/infant-formula-rtf-liquid-non-soy]]
- [[ingredients/infant-formula-ingredients]]
- [[ingredients/milk-and-dairy]]
- [[ingredients/soy]]
- [[ingredients/soy-based-infant-formula]]
- [[ingredients/non-soy-infant-formula]]
- [[metals/aluminum]]

## Verification notes

- Cross-vendor audit (Codex, 2026-05-17) corrected Table 2 powder row count from n=7 to n=8 and cow-milk-based powder count from n=6 to n=7; reassigned the 863.0 µg/L ready-made replicate maximum to the preterm product per Table 1; removed avoidable brand-attributed values from Key numbers; and corrected `raw_path` to the matching SHA-256 PDF at `raw/studies/1471-2431-10-63.pdf`.
- The current product taxonomy has no preterm-formula slug; the preterm-formula evidence is captured under `infant-formula-rtf-liquid-non-soy` for routing purposes but is a distinct subcategory in the literature. Flag for Karen per Part 10: consider `infant-formula-preterm-rtf` as a future product page if more preterm-formula evidence accumulates.
- This page was enhanced 2026-05-17 from a Mode B (direct PDF) GPT-5.5 fast-mode draft via the verification pipeline. Prior version (2026-04-29) had a legacy `## Summary` heading and thin Key numbers (4 rounded bullets); enhanced revision adds replicate-sample structure, EDI estimates, breast-milk comparison anchor, and per-table source citation. GPT draft initially listed brand-by-brand values in Key numbers (Part 12 violation); aggregated to format/category level using product-form descriptors (preterm, soya-based, ready-made, powder) without naming the brand. Modernized `## Wiki pages updated on ingest` heading to `## Wiki pages this source may touch`.
