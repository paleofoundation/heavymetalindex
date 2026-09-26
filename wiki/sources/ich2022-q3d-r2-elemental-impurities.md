---
type: source
cite_key: ich2022-q3d-r2-elemental-impurities
title: "ICH Harmonised Guideline Q3D(R2): Guideline for Elemental Impurities"
authors: ["International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use"]
year: 2022
publication: "ICH Q3D(R2), final version adopted 26 April 2022 (Step 4)"
doi: null
no_doi_assigned: true
instrument_citation: "ICH Q3D(R2), Appendix 5 and Tables A.5.1-A.5.2"
access_url: "https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf"
retrieval_date: 2026-09-25
source_type: international-guideline
evidence_tier: A
license: "ICH copyright; may be used and reproduced under a public license with ICH copyright acknowledged (legal notice)"
raw_path: "raw/studies/diaper-creams-2026-09-25/ich2022-q3d-r2-elemental-impurities.pdf"
raw_sha256: 940176418af05c88ed33416a5d5e719a4ab7fe1d31cf1cd56ed331749b649c75
metals: [Pb, Cd, tAs, tHg, Ni, Cr, Sn, Sb]
ingredients: []
products: ["[[products/diaper-cream-zno]]"]
matrices: [drug-products, cutaneous-drug-products, regulatory-guidance]
jurisdictions: [ICH, US, EU, JP, CA]
near_duplicates: []
sample_n: null
sample_population: "Not applicable; harmonised guideline"
evidence_fitness:
  supports:
    - cutaneous-and-transcutaneous-permitted-daily-exposures-for-24-elements-in-drug-products
    - cutaneous-concentration-limits-for-nickel-and-cobalt
    - example-concentrations-for-a-10-g-daily-dose
    - the-stated-exclusion-of-skin-with-substantial-basal-layer-disruption
  does_not_support:
    - a-limit-for-cosmetics-which-are-outside-q3d-scope
    - an-infant-specific-dose-for-the-diaper-area
    - a-finished-product-concentration-without-a-stated-daily-dose
    - measured-metal-content-of-any-product
audience: [regulator, researcher, educator]
sources: 0
updated: 2026-09-26
---

# ICH Q3D(R2) 2022. Elemental impurities, cutaneous route

ICH Q3D(R2) sets permitted daily exposures (PDEs) for elemental impurities in drug products. Appendix 5 extends them to cutaneous and transcutaneous products, which covers an over-the-counter zinc oxide diaper ointment regulated as a drug. For most elements the cutaneous PDE is ten times the parenteral PDE. That rests on an assumed maximum cutaneous bioavailability of 1 percent, raised tenfold for uncertainty. Arsenic uses a factor of 2 and thallium a factor of 1. Nickel and cobalt also carry a concentration limit of 35 µg/g to limit allergic reactions.

## Key numbers

Table A.5.1 lists cutaneous PDEs (µg/day). The Class 1 elements are cadmium 20, lead 50, arsenic 30 and mercury 30. Selected others are cobalt 50, vanadium 100, nickel 200, thallium 8, antimony 900, copper 3000, tin 6000 and chromium 11000. The cutaneous and transcutaneous concentration limit (CTCL) is 35 µg/g for cobalt and for nickel. Table A.5.2 converts the PDEs to concentrations for a drug product dosed at 10 g per day: cadmium 2, lead 5, arsenic 3, mercury 3, nickel 20, thallium 0.8, antimony 90, tin 600 and chromium 1100 µg/g. For elements with both a PDE and a CTCL, the lower limit applies. The full table for all elements, with the oral, parenteral and inhalation PDEs shown for comparison, is in the ledger.

The derivation cites lead oxide absorption under occlusion in rats of less than 0.005 percent, and transcutaneous absorption of inorganic arsenic of approximately 5 percent. The nickel CTCL starts from a dermal limit of 0.5 µg/cm2/week (0.07 µg/cm2/day), assumed to be applied as 0.5 g of product over 250 cm2 once daily: 17.5 µg/day divided by 0.5 g/day gives 35 µg/g. A control threshold of 30 percent of the PDE or CTCL determines whether additional controls are needed.

The guideline states that the generic cutaneous PDE "should not be applied to drug products intended to treat skin with substantial disruption of the basal cell layer of the epidermis". For such products the parenteral PDE is generally an appropriate starting point. Small cuts, abrasions and other quick-healing injuries are not treated as substantial disruption. Appendix 1 explains that the PDEs use an arbitrary adult body mass of 50 kg and are considered appropriate for paediatric pharmaceuticals, and that the lead PDE was set from paediatric data.

## Methods (brief)

This is a harmonised guideline. The cutaneous PDEs are derived from element-specific parenteral PDEs through a cutaneous modifying factor, with no element-by-element dermal absorption data where none exist.

## Evidence fitness

Q3D supports drug-product impurity ceilings expressed as daily exposure. It supports concentration limits only once a maximum daily dose is fixed. The 10 g figures are an example. Converting them to a diaper cream requires the product's actual maximum daily use, which the guideline leaves to the applicant. The basal-layer exclusion bears directly on eroded diaper dermatitis, for which the guideline points to parenteral PDEs as the starting point. Q3D does not apply to cosmetics.

## Limitations

The PDEs are for chronic daily application and rely on assumed, not measured, absorption for most elements. The guideline does not mention infants' skin or diaper occlusion.

## Related evidence

- [[products/diaper-cream-zno]]
- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/nickel]]
- [[sources/sccs2012-zinc-oxide-nano-opinion-1489-12]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
