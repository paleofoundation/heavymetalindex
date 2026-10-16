---
title: Testing and quality-control mitigation
type: mitigation
strategy: testing-and-qc
intervention_point: receiving, in-process, finished-product
metals_addressed: [Pb, Cd, iAs, Hg, Cr, Ni, Sn, Al]
matrices_addressed: [all]
audience: [regulator, educator, brand-qa, brand-legal, certifier, manufacturer, supplier]
updated: 2026-05-17
sources: 0
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating mitigation testing and qc research context."
---

# Testing and quality-control mitigation

## Overview

Testing-and-QC mitigation is the brand-side and manufacturer-side practice of detecting heavy-metal load early enough in the supply chain that contaminated lots can be diverted, blended, or rejected before they reach finished product. Unlike agronomic or processing interventions, testing-and-QC does not lower heavy-metal load in raw material — it provides the visibility that lets every other mitigation strategy fire on time. Brand QA teams routinely report that the largest single driver of finished-product heavy-metal variance is whether incoming raw material was tested at all, and at what point in the supply chain the test occurred.

## Intervention points

Testing-and-QC has three intervention points, each with different cost, lead time, and remediation options:

**Incoming-raw-material testing (most preventive).** Lots are sampled at the receiving dock or before contract acceptance. A high-Cd cocoa lot rejected at receiving costs the brand a sourcing decision; the same lot detected in finished product costs a recall. Incoming testing is the cheapest place to find a problem and the most expensive place to skip. Sampling plans matter: composite sampling across a lot can mask within-lot heterogeneity in commodities like cacao and rice, where individual sub-lots can vary by 5× on the same supplier's bill of lading.

**In-process testing (catches blending and contamination introduction).** Periodic sampling during processing catches contamination introduced by equipment (lead-soldered seams, brass valves, ceramic glaze fragments), water (high-iAs aquifers), or processing aids (food-grade clays with iAs from natural sources). In-process testing is essential when the raw material was pre-screened but the finished product still exceeds the standard — that delta is by definition introduced post-receiving.

**Finished-product testing (last line, certification-relevant).** Lot-release testing on finished product is the final gate before release to market. Lot-release is what HMT&C certification protocols require for ongoing certification; pre-release detection of an out-of-spec lot is non-conformance handling rather than recall. The economics of finished-product testing are unfavorable as a primary mitigation lever — by the time the product is finished, all the input mitigation costs have been spent — but it is irreplaceable as a verification step.

## Sampling-plan adequacy

A test result is only as good as its sampling plan. Common defects:

- **Within-lot heterogeneity not respected.** Composite sampling masks high-value sub-lots in commodities with skewed distributions (cocoa Cd by farm, rice iAs by paddy block, spices Pb by adulteration source).
- **Pre-shipment sample not from final lot.** Pre-shipment certificates of analysis (COAs) issued by suppliers may sample a different lot than the one actually shipped, especially in commodity brokering. Independent receiving testing controls for this.
- **LOD/LOQ not matched to the standard.** A test method with LOD = 50 ppb cannot enforce a standard of 10 ppb. The lab method must be specified to a LOD/LOQ at least an order of magnitude below the target standard.
- **Speciation gap.** Total arsenic does not certify against an inorganic arsenic limit. Total chromium does not certify against a Cr-VI limit. Total mercury does not certify against a methylmercury limit. Brand QA teams routinely receive COAs that report total when the standard is speciated; the COA does not document compliance.

## Choice of analytical method

The dominant lab methods for HMTc-relevant metals are ICP-MS (inductively coupled plasma mass spectrometry, primary method for Pb, Cd, iAs, tHg, Ni, Cr, Al, Sn at ppb-level), AAS (atomic absorption spectroscopy, legacy method, still used in some regions), and XRF (X-ray fluorescence, used for in-situ screening of solids and surfaces but with substantially higher LODs than ICP-MS). Speciation requires HPLC coupled to ICP-MS for arsenic species, and species-specific approaches for methylmercury, hexavalent chromium, and organotins.

See [[testing/icp-ms]], [[testing/arsenic-speciation]], and related [[testing/index|testing method pages]] for method-specific guidance on LOD/LOQ, sample preparation, and species discrimination.

## Internal vs third-party testing

Brand-internal testing labs offer cost efficiency at scale but may face credibility challenges if results are used to defend against a certification challenge or a regulatory inquiry. Third-party ISO 17025-accredited labs are the default for certification-relevant testing; internal labs are appropriate for in-process and pre-screening work where the certification-of-record will be re-run by a third-party lab. The choice is a cost-vs-defensibility tradeoff that should be made explicitly per program.

## Cross-references

- [[mitigation/supply-chain-screening]] — incoming-raw-material testing is the operational form of supply-chain screening
- [[testing/index]] — analytical method pages with LOD, sample-prep, and speciation specifics
- [[certification/index]] — HMT&C certification protocols specify required testing cadence, method credibility, and sampling plans

## Sources

*Source-grounded magnitude data for each testing-and-QC intervention is pending the corresponding ingest passes. Priority promotion candidates include FDA's TDS methodology documents, Codex CAC/GL 75-2019 (sampling plans for metals in food), EFSA guidance on LOD/LOQ reporting for contaminant occurrence surveys, and primary-literature method-comparison studies for ICP-MS vs AAS vs XRF.*

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [970e09b65](https://github.com/paleofoundation/heavymetalindex/commit/970e09b65) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added |
| [03afe1a61](https://github.com/paleofoundation/heavymetalindex/commit/03afe1a61) | 2026-05-17 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
