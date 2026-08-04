---
title: Packaging and storage mitigation
type: mitigation
strategy: packaging-and-storage
intervention_point: packaging-selection, distribution, retail-storage
metals_addressed: [Pb, Cd, Sn, Al, Cr, Ni]
matrices_addressed: [canned-foods, beverages, oils, dairy, infant-formula, spices, food-contact-articles]
audience: [regulator, educator, brand-qa, brand-legal, certifier, manufacturer, supplier, retailer-compliance]
updated: 2026-05-17
sources: 0
---

# Packaging and storage mitigation

## Overview

Packaging-and-storage mitigation is the post-formulation lever that controls heavy-metal migration from food-contact materials into finished product across the supply chain. Unlike agronomic or processing interventions, packaging-and-storage mitigation does not address contamination that arrived with the raw material — it controls contamination that the packaging itself introduces, or that storage conditions accelerate.

The dominant pathways: tin migration from tinplate cans into acidic foods, lead from soldered seams on legacy can stocks, cadmium and chromium from pigments in printed flexible packaging, aluminum from foil and rigid containers (especially with acidic or salty foods), and trace metals migrating from ceramic glazes, plastic additives, and printed paperboard.

## Intervention points

**Packaging-material selection.** Choice of can lining (BPA-NI epoxy, polyester, oleoresinous, or unlined), can stock (electrolytic chrome-coated steel vs. tinplate vs. aluminum), pouch laminate composition (which barrier polymer and which printed-ink chemistry), and glass-jar closure (lacquered metal lug vs. plastisol vs. polyester) determines the migration baseline. Switching from tinplate to ECCS (electrolytic chromium-coated steel) for low-pH products eliminates tin migration but introduces a different decision matrix for finished-product Cr testing. EU food-contact material regulations (Regulation 10/2011 for plastics, Directive 84/500/EEC for ceramics) and FDA food-contact substance regulations (21 CFR Parts 170-199) define the migration limits that packaging selection must meet.

**Internal can-coating integrity.** Coating scratch, scrub, or breach during can-making, processing, or transport exposes the underlying tinplate or steel to the food matrix. Brand QA practice: inspection of can-coating integrity at incoming material stage and at finished-product seam-evaluation; can manufacturers' certificates of analysis include coating thickness and pinhole counts. The HMTc "canned flag" subcategory designation across food categories exists because tinplate migration is structurally a different testing decision than the food's own occurrence load.

**Storage conditions.** Tin migration accelerates with temperature, time, and food acidity. A canned tomato product stored at 25°C for 18 months can show 4-8× the tin load of the same product released at 6 months. Retailer-stock-rotation discipline and warehouse-temperature control are mitigation levers that operate after the brand has lost direct control of the product. Brand specifications for distributor and retailer handling are partial leverage.

**Closure and seal materials.** Plastisol-sealed twist-off lids contain phthalate plasticizers but also pigments and additives; older closures used Pb-stabilized PVC. Foil-induction seals on plastic bottles can introduce trace Al. Wax-paper liners on metal closures can carry Pb from legacy printing inks. Replacement of legacy closure chemistries with food-grade modern equivalents is a one-time mitigation; persistence of legacy stock in regional supply chains is the residual risk.

**Light, oxygen, and moisture exclusion.** Some heavy-metal migration accelerates with oxidation; some accelerates with moisture. Modified-atmosphere packaging and oxygen-scavenger inserts that mitigate other quality defects can have side effects on metal migration — net direction depends on the specific food and packaging combination, and is best determined empirically per product.

## Canned-foods flag — special considerations

Canned foods carry an explicit "canned flag" across HMTc Categories 1 (canned infant foods), 6 (canned seafood), 7 (general canned foods), and 11 (canned meats). The flag triggers Sn testing in addition to the food matrix's own panel. The HMTc Sn-monitoring standard is set against the FDA action level of 250 ppm for canned foods, the EU Reg. 2023/915 limit of 200 ppm for canned foods (100 ppm for canned beverages, 50 ppm for canned infant foods), and Codex MLs.

A finished-product Sn result above the canned-foods limit is almost always a packaging-and-storage finding, not a raw-material finding — tin almost never arrives with raw food matrices. The root-cause analysis pathway is:

1. Coating integrity (is the lining compromised?)
2. Coating compatibility (is the coating appropriate for this product's pH and acidity?)
3. Storage conditions (how long, at what temperature, with what light exposure?)
4. Can-stock origin (regional variations in tinplate quality, soldering legacy vs. modern can-making)

## Food-contact consumer goods — distinct scope

[[products/index|HMTc Category 23 (Food-Contact Consumer Goods and Kitchenware)]] handles the end-user-side of the packaging-and-storage pathway: ceramicware glaze leaching, cookware coatings, water filters, food-storage containers. Mitigation interventions for this category sit with the manufacturer of the kitchenware product, not the food brand, but the migration pathway is the same: a heavy metal in the food-contact article migrates into food and is consumed.

## Cross-references

- [[products/index]] — category pages with the "canned flag" (Cats 1, 6, 7, 11) and food-contact consumer goods (Cat 23)
- [[mitigation/supply-chain-screening]] — incoming-packaging-material screening is a procurement-side intervention
- [[supply-chain/index]] — supply-chain pages with substrate-and-equipment context
- [[regulations/index]] — FDA food-contact substance regs, EU 10/2011 (plastics), EU 84/500/EEC (ceramics), California Prop 65 for Pb/Cd in ceramicware and cookware

## Sources

*Source-grounded magnitude data for each packaging-and-storage intervention is pending the corresponding ingest passes. Priority promotion candidates include the Codex Code of Practice for canned foods (CAC/RCP 60-2005), FDA Compliance Policy Guide 545.450 (lead in ceramics), EU JRC migration testing reports, and primary-literature studies on tinplate corrosion kinetics as a function of food pH and storage temperature.*

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [970e09b65](https://github.com/paleofoundation/heavymetalindex/commit/970e09b65) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [03afe1a61](https://github.com/paleofoundation/heavymetalindex/commit/03afe1a61) | 2026-05-17 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
