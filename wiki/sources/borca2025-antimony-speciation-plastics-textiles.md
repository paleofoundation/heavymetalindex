---
type: source
raw_handle: BORCA-2025-XAS
cite_key: borca2025-antimony-speciation-plastics-textiles
title: "A step towards understanding plastic complexity: Antimony speciation in consumer plastics and synthetic textiles revealed by XAS"
authors: ["Camelia N. Borca", "Thomas Huthwelker", "Montserrat Filella"]
year: 2025
publication: "Journal of Environmental Sciences 153:109-117"
doi: "10.1016/j.jes.2024.02.006"
access_url: "https://doi.org/10.1016/j.jes.2024.02.006"
retrieval_date: 2026-09-25
source_type: peer-reviewed
evidence_tier: A
tier_rationale: "Synchrotron-based X-ray absorption spectroscopy at the Sb L3-edge with linear combination fitting; directly characterises antimony speciation in consumer plastics and polyester textiles rather than inferring it from leaching."
license: "CC BY 4.0"
raw_path: "raw/antimony-verify/Borca_2025_antimony_speciation_plastics_textiles.pdf"
raw_sha256: 263fca44ea4c818cc0048c355038721be2993fe117afcc399f573862f2e6bf28
metals: [Sb]
ingredients: []
products: []
matrices: ["consumer-plastics", "pet-bottle", "cpet-food-tray", "polyester-textile", "electrical-appliance"]
jurisdictions: [CH]
near_duplicates: []
sample_n: 16
sample_population: "Six PET beverage bottles, three crystallised PET (c-PET) food trays (two black, one white), three polyester textiles, three electrical appliances, and one electrical ring; all purchased as consumer products; country of purchase not stated but study conducted at Paul Scherrer Institute, Switzerland."
evidence_fitness:
  supports:
    - antimony-speciation-in-pet-bottles-as-organically-bound-glycolate-or-acetate
    - antimony-speciation-in-electrical-appliances-as-senarmontite
    - total-antimony-concentration-by-portable-xrf-in-consumer-plastics-and-textiles
    - absence-of-significant-antimony-trioxide-in-pet-bottles
  does_not_support:
    - antimony-migration-or-leaching-into-water-or-food
    - identification-of-samples-as-infant-or-baby-products
    - antimony-concentration-in-food-or-beverages
audience: [regulator, researcher, educator]
sources: 0
wiki_doi: null
updated: 2026-11-07
hero_image: /static/heroes/antimony-water-polyester.webp
hero_image_alt: "A water bottle, drinking glass and polyester fabric illustrating Borca 2025 plastic and textile antimony study research context."
---

# Borca, Huthwelker, and Filella 2025. Antimony speciation in consumer plastics and textiles by XAS

Borca and colleagues used synchrotron X-ray absorption spectroscopy (XAS) at the antimony L3-edge to identify the antimony species present in a wide variety of consumer plastic objects and synthetic textiles. The study was conducted at the PHOENIX Beamline of the Swiss Light Source, Paul Scherrer Institute, Switzerland. This is a speciation study, not a migration study: it characterises the chemical form of antimony in the material itself, not the amount released into water or food.

The study was motivated by the gap in knowledge about antimony speciation in consumer plastics. Total antimony in PET bottles had been reported by multiple groups, but the chemical form, relevant to both leaching behaviour and toxicity assessment, had been almost entirely uncharacterised. The International Agency for Research on Cancer (IARC) classified antimony trioxide (Sb2O3) as possibly carcinogenic to humans (Group 2B), and it had been a candidate restricted substance under the EU Restriction of Hazardous Substances Directive (RoHS). Identifying whether antimony in PET is present as the trioxide or in other forms therefore has regulatory relevance.

## Study design

The study measured 16 objects spanning four material categories: six PET bottles, three c-PET food trays, three polyester textiles, and four electrical objects (three appliances and one ring). Total antimony concentration in each object had been determined previously by portable X-ray fluorescence (pXRF) calibrated for plastic materials, following the method in Turner and Filella (2017). XAS spectra at the Sb L3-edge (4132 eV) were recorded in total fluorescence yield (TFY) mode for the plastic samples and in total electron yield (TEY) mode for reference powders. Linear combination fitting (LCF) of reference spectra was used to identify dominant species. For one PET bottle, element-resolved XRF mapping was performed with a 3 x 3 micron focused beam to show the spatial distribution of antimony and calcium.

The analytical design is non-destructive. Samples were mounted freestanding in vacuum and measured with a 1 x 1 mm beam. Beam damage was assessed by recording up to 11 consecutive scans on PET bottle 1; a slight broadening of the pre-edge peak appeared after three hours, so only the first scan per sample was used for LCF. Speciation results for food trays 1 and 2 and polyester textiles 2 and 3 were not reported quantitatively because high calcium content in those samples reduced the signal-to-noise ratio at the antimony emission line.

## Samples

Sixteen consumer objects were measured (Table 1, PDF p. 4):

| Object | Total Sb (mg/kg, pXRF) | Dominant species from XAS |
| --- | ---: | --- |
| PET bottle 1 | 351 | antimony acetate or poly(antimony ethylene glycoxide) |
| PET bottle 2 | 331 | antimony acetate or poly(antimony ethylene glycoxide) |
| PET bottle 3 | 361 | antimony acetate or poly(antimony ethylene glycoxide) |
| PET bottle 4 | 322 | antimony acetate or poly(antimony ethylene glycoxide) |
| PET bottle 5 | 370 | antimony acetate or poly(antimony ethylene glycoxide) |
| PET bottle 6 | 370 | antimony acetate or poly(antimony ethylene glycoxide) |
| c-PET black tray 1 | 369 | organically bound (high Ca, spectra quality insufficient for reliable LCF) |
| c-PET black tray 2 | 303 | organically bound (high Ca, spectra quality insufficient for reliable LCF) |
| c-PET white tray 3 | 355 | antimony acetate or poly(antimony ethylene glycoxide) |
| Polyester textile 1 | 286 | senarmontite |
| Polyester textile 2 | 471 | organically bound (high Ca, spectra quality insufficient for reliable LCF) |
| Polyester textile 3 | 452 | organically bound (high Ca, spectra quality insufficient for reliable LCF) |
| Electrical appliance A | 55835 | senarmontite |
| Electrical appliance B | 27812 | senarmontite |
| Electrical appliance C | 33122 | senarmontite |
| Electrical ring | 28193 | senarmontite |

## Analytes and instrument

The sole analyte is antimony (Sb). Total concentration was measured by portable XRF calibrated for plastics (Sb K-alpha emission line at 26.2 keV, free from interference with other emission lines). Speciation was determined by XAS at the Sb L3-edge (4132 eV) using the PHOENIX Beamline, Swiss Light Source, with a double crystal monochromator (Si(111), resolution 0.4 to 0.5 eV at 4 keV). A four-element solid-state fluorescence detector (Vortex, 180 eV energy resolution) measured the TFY signal. Spectra were processed with the Athena software (Demeter package). LCF used an energy range of 45 eV around the Sb L3-edge with eight reference standards: valentinite, senarmontite, antimony(V) oxide, antimony(III) sulfide, metallic antimony, potassium antimony L-tartrate, poly(antimony ethylene glycoxide), and antimony(III) acetate.

## Results

The six PET bottles all showed spectra consistent with organically bound antimony, specifically antimony acetate (SbAc) or poly(antimony ethylene glycoxide) (PEG). These two references have very similar spectral shapes and cannot be distinguished with confidence by LCF; both are consistent with the catalyst compounds used in PET polymerisation. The LCF and principal component analysis (PCA) both confirmed organically bound antimony as the dominant form. PCA identified two principal components in the six PET spectra, with PEG giving the best agreement (lowest SPOIL value under 3), followed by SbAc, then antimony(V) oxide. The presence of significant amounts of antimony trioxide nanoparticles was excluded within detection limits. The micro-focused XRF map of PET bottle 1 showed calcium and antimony hot spots of approximately 10 to 20 microns in size with no spatial correlation between the two elements.

Electrical appliances A, B, and C showed clear senarmontite spectra, consistent with use as a synergist for halogenated flame retardants. Bromine concentrations in these objects were 84075, 48712, and 71949 mg/kg respectively. The electrical ring showed a senarmontite-consistent spectrum but contained no detectable bromine.

Polyester textile 1 showed a spectrum resembling senarmontite. Textiles 2 and 3 had high calcium content that reduced spectra quality, precluding reliable LCF. The white c-PET food tray spectrum was consistent with organically bound antimony; the two black c-PET trays could not be reliably fitted due to high calcium.

## Methods

XAS data were collected at the PHOENIX Beamline, Swiss Light Source, Paul Scherrer Institute, Villigen, Switzerland. Spectra were acquired with a step size of 1.0 eV above and below the Sb L3-edge and 0.3 eV across the main edge, with 1 second integration per point (approximately 15 minutes per scan). Background subtraction and normalisation used the Athena software with edge energy E0 = 4141.5 eV, k-weight = 2, Rbkg = 1 angstrom, pre-edge range -40 to -15 eV relative to E0, and post-edge range 55 to 225 eV relative to E0. LCF was performed over the energy range -10 to +70 eV relative to the Sb L3-edge. PCA and target transformation were performed with SIXPACK software. XRF mapping used a Kirkpatrick-Baez mirror system with a 3 x 3 micron beam at 4.2 keV, 1 micron step size.

## LOD, LOQ, and CRM recovery

Limits of detection and quantification are not reported for the pXRF or XAS measurements. Certified reference material recovery is not reported.

## Regulatory context

No food regulatory limits are directly applicable. The study objects are plastic consumer goods, not food or beverages. The paper notes that antimony trioxide (Sb2O3) was classified by IARC in Group 2B (possibly carcinogenic to humans) and was a candidate restricted substance under the EU RoHS Directive as of 2020. The finding that PET bottles contain organically bound antimony rather than antimony trioxide is relevant to assessing the form available for potential leaching, though the paper does not measure leaching. The EU, Codex Alimentarius, and national food agencies have set limits for antimony in drinking water and food contact materials, but those limits govern migration, not solid-phase speciation; this study does not address those limits.

## Evidence fitness

This paper supports statements about the chemical form of antimony in the measured plastic objects. PET bottles at approximately 300 to 370 mg/kg antimony contain organically bound antimony, consistent with catalyst residues from PET polymerisation, not antimony trioxide. Electrical appliances at 27000 to 56000 mg/kg contain senarmontite, consistent with flame-retardant use. The paper does not support claims about antimony migration into beverages or food, and does not support identification of the samples as infant or baby products.

## Limitations

The study measures 16 objects, not a market sample. The bottles are not identified by brand, country of origin, or intended use. The two polyester textiles and two c-PET trays with high calcium content could not be speciated with confidence. Because PEG and SbAc reference spectra are very similar, the two cannot be distinguished; both are plausible residues of PET synthesis. A small contribution of antimony(V) cannot be excluded because including Sb2O5 slightly improved some fits, though the improvement was not convincing. Beam damage was detected as a broadening of the pre-edge peak during prolonged exposure, but only first scans were used for fitting. The paper does not report LOD, LOQ, or CRM recovery values.

## Related evidence

- [[metals/antimony]]
- [[sources/biver2021-antimony-release-polyester-artificial-sweat]]
- [[synthesis/antimony-in-baby-products]]

<!-- BEGIN: hmi-page-history -->
## Update history

Rebuilt from PDF (10.1016/j.jes.2024.02.006, CC BY 4.0) on 2026-11-07. Added intro_prose, study_design, samples_n, analytes, results_values, methods, lod_loq, crm_recovery, and regulatory_context sections from the paper text. Corrected license from all-rights-reserved to CC BY 4.0 per paper masthead. Updated sha256 from deposit manifest.
<!-- END: hmi-page-history -->
