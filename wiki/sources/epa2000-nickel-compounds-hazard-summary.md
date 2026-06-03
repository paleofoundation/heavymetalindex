---
type: source
raw_handle: MFK_nickle-compounds
cite_key: epa2000-nickel-compounds-hazard-summary
title: "Nickel Compounds"
authors: ["U.S. Environmental Protection Agency"]
year: 2000
publication: "U.S. Environmental Protection Agency, Technology Transfer Network Air Toxics Web Site, Hazard Summary; summary created April 1992, updated January 2000"
source_type: gov-report
evidence_tier: A
raw_path: "raw/Manual Fetch Kimi /June 3 Folder/nickle-compounds.pdf"
raw_sha256: f29a4914901affd421df4ba87c4da89f8b7645be78fafb48a599a3dbf81bd6f5
doi: null
no_doi_assigned: true
access_url: "https://www.epa.gov/sites/default/files/2016-09/documents/nickel-compounds.pdf"
license: us-government-work
metals: [Ni]
ingredients: ["[[ingredients/water]]"]
products: ["[[products/cookware-metal-alloy]]", "[[products/utensils-metal]]"]
matrices: [food, drinking-water, occupational-air, ambient-air, dust, tobacco-smoke, cookware, utensils]
jurisdictions: [US, US-CA]
near_duplicates: []
sample_n: null
sample_population: "EPA hazard-summary fact sheet compiling IRIS, EPA Health Assessment Document, ATSDR, CalEPA, NIOSH, OSHA, and ACGIH values for nickel compounds. No primary product sampling or food occurrence dataset."
updated: 2026-06-03
---

# EPA 2000 - Nickel compounds hazard summary

EPA's January 2000 hazard summary for nickel compounds is a context and toxicology source, not a food-occurrence survey. It compiles the oral RfD for soluble nickel salts, inhalation cancer unit-risk values for nickel refinery dust and nickel subsulfide, chronic inhalation reference values from CalEPA and ATSDR, and occupational exposure limits for nickel and nickel carbonyl. The document also states that food is the major source of nickel exposure for the general adult population, estimated at approximately 100 to 300 ug/day, while occupational exposure is primarily inhalation and dermal contact in nickel production, processing, welding, casting, grinding, and related uses. The cookware and utensil routing tags are context-only because the source mentions stainless steel cooking and eating utensils as exposure pathways but reports no product-specific concentrations.

## Key numbers

| Endpoint or value | Nickel species / matrix | Value | Source scope |
| --- | --- | ---: | --- |
| Average adult intake | Food | approximately 100 to 300 ug/day | General-population dietary exposure estimate cited from EPA 1986 and ATSDR 1997 |
| Oral Reference Dose | Soluble nickel salts | 0.02 mg/kg-day | EPA IRIS, based on decreased body and organ weights in rats |
| EPA confidence in oral RfD | Soluble nickel salts | medium | Low confidence in principal study, medium confidence in database |
| EPA inhalation RfC | Nickel | not established | EPA had not established an RfC for nickel |
| CalEPA chronic reference exposure level | Nickel inhalation | 0.00005 mg/m3 | Respiratory and immune-system effects in rats exposed to soluble nickel salt |
| ATSDR chronic-duration inhalation MRL | Nickel inhalation | 0.0002 mg/m3 | Respiratory effects in rats exposed to soluble nickel salt |
| NOAEL used in inhalation chart | Nickel respiratory effects | 0.03 mg/m3 | Figure, Health Data from Inhalation Exposure |
| Cancer classification | Nickel refinery dust and nickel subsulfide | EPA Group A, human carcinogens | Human lung and nasal cancer evidence in refinery workers plus animal inhalation evidence |
| Inhalation unit risk | Nickel refinery dust | 2.4 x 10^-4 per ug/m3 | EPA IRIS cancer potency estimate |
| One-in-a-million inhalation cancer-risk level | Nickel refinery dust | 0.004 ug/m3, equivalent to 4 x 10^-6 mg/m3 | Continuous lifetime exposure estimate |
| Inhalation unit risk | Nickel subsulfide | 4.8 x 10^-4 per ug/m3 | EPA IRIS cancer potency estimate |
| One-in-a-million inhalation cancer-risk level | Nickel subsulfide | 0.002 ug/m3, equivalent to 2 x 10^-6 mg/m3 | Continuous lifetime exposure estimate |
| Cancer classification | Nickel carbonyl | EPA Group B2, probable human carcinogen | Lung tumors in rats exposed by inhalation |
| Conversion factor | Nickel in air at 25 C | 1 ppm = 2.4 mg/m3 | Gas-phase conversion formula in the source |

The source's inhalation-exposure figure also lists occupational and advisory values. EPA labels OSHA values regulatory and NIOSH/ACGIH values advisory. Values shown in the rendered figure are: NIOSH IDLH 10 mg/m3; ACGIH TLV for metal compounds 1.5 mg/m3; OSHA PEL for metal compounds 1 mg/m3; ACGIH TLV for insoluble nickel 0.2 mg/m3; ACGIH TLV for soluble nickel 0.1 mg/m3; NIOSH REL for metal compounds 0.015 mg/m3; and OSHA PEL / NIOSH REL for nickel carbonyl 0.007 mg/m3.

## Methods (brief)

This is an EPA hazard-summary compilation, not a primary analytical study. The fact sheet draws from EPA's Health Assessment Document for Nickel, EPA IRIS records for nickel carbonyl, nickel refinery dust, nickel subsulfide, and soluble nickel salts, ATSDR's 1997 Toxicological Profile for Nickel, CalEPA's chronic reference exposure-level technical support document, and 1997-1999 NIOSH, OSHA, and ACGIH occupational guidance. It reports no sample collection, digestion, speciation method, LOD, LOQ, or product-testing protocol. The numeric values are reference values and exposure-context values, not measured concentrations in food, water, cookware, utensils, batteries, coins, jewelry, or workplace samples.

## Implications

Certification: This source should not enter any HMTc benchmark pool. It is useful as a toxicology and regulatory-context anchor for nickel species, especially the distinction between soluble oral nickel salts, nickel refinery dust, nickel subsulfide, and nickel carbonyl. It supports why nickel occurrence sources must preserve species and matrix rather than treating all nickel contexts as a single risk model.

Courses: The fact sheet is a compact teaching example for how one metal can have separate oral noncancer reference values, inhalation cancer potency values, occupational limits, and consumer-exposure pathways. It also illustrates why a food-source exposure estimate such as 100 to 300 ug/day is not interchangeable with a product concentration limit.

App: The source can support explanatory nickel-health context for [[metals/nickel]] and context-only flags for cookware/utensil exposure pathways. It should not change ingredient risk scores without a primary occurrence dataset.

## Wiki pages this source may touch

- [[metals/nickel]]
- [[ingredients/water]]
- [[products/cookware-metal-alloy]]
- [[products/utensils-metal]]

## Verification notes

The PDF was read in full from the June 3 manual-fetch folder. Page count is 5. `pdftotext` captured the narrative values and references; the inhalation-exposure figure was additionally checked from a rendered page image because several chart labels are embedded visually. The raw filename misspells nickel as `nickle-compounds.pdf`; the document title is "Nickel Compounds" and the cite-key uses the corrected title. No DOI is assigned. The duplicate file `raw/Manual Fetch Kimi /June 3 Folder/nickle-compounds 2.pdf` is byte-identical and is recorded in the tracker as a duplicate, not a separate source.
