---
type: source
raw_handle: MFK_direct-determination-of-mercury-in-white-vinegar-b
cite_key: liu2010-mercury-white-vinegar-afs
title: "Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation atomic fluorescence spectrometry detection"
authors: [Liu Q]
year: 2010
publication: "Spectrochimica Acta Part B"
doi: 10.1016/j.sab.2010.06.004
source_type: peer-reviewed
evidence_tier: A
license: "All rights reserved"
raw_path: "raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Direct determination of mercury in white vinegar by matrix assisted photochemical vapor generation a.pdf"
metals: [tHg]
ingredients: ["[[ingredients/vinegar]]"]
products: ["[[products/vinegar]]"]
matrices: [white-vinegar, vinegar]
jurisdictions: [CN]
near_duplicates: []
sample_n: 3
sample_population: "3 commercial white vinegar samples (acidity 3.5%, 3.95%, 4.0%) purchased from local markets; the author is based at the Beijing Center for Physical and Chemical Analysis but the paper does not state the specific market location."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-26
---

# Liu 2010 — Mercury in white vinegar by photochemical vapor generation AFS

## Overview

This analytical-note paper develops and validates a direct method for total mercury in white vinegar by atomic fluorescence spectrometry (AFS) using matrix-assisted photochemical vapor generation, exploiting the acetic-acid matrix to photoreduce Hg(II) to Hg⁰ under UV irradiation without any sample pretreatment. The method gives an AFS detection limit of 0.08 µg/L and was cross-validated against acid-digestion ICP-MS and against aqueous certified reference materials (GBW(E) 080392 and 080393), with no significant difference between AFS and ICP-MS at the 95% confidence level. Of three commercial white vinegars analyzed, two were below the AFS detection limit and one (4.0% acidity) contained roughly 1.8–2.0 µg/L total mercury; HPLC-AFS speciation found no monomethyl- or monoethylmercury in the real samples.

## Key numbers

All concentrations are reported as µg/L of as-sold white vinegar; µg/L = ppb for this aqueous matrix.

**Method performance (Section 3.5 and Table 2):**

- AFS LOD (peak-area measurement, photochemical vapor generation): 0.08 µg/L.
- ICP-MS LOD after acid digestion (HNO₃/H₂O₂, 180 °C, 1 h closed Teflon bomb): 0.06 µg/L.
- Calibration linear to at least 1 mg/L Hg; calibration line Y = 15.62 C + 2.25, r² = 0.9995.
- Repeatability at 5 µg/L Hg (n = 9): RSD 4.6% intra-day, 7.8% inter-day.
- Spike-recovery range across real-sample matrices: 92–98%.

**Certified reference material recovery (Table 2; CRMs diluted 1 + 4 v/v into blank white vinegar):**

- GBW(E) 080392 (certified 10 ± 0.1 µg/L): AFS 9.6 ± 0.5; ICP-MS 9.2 ± 0.3.
- GBW(E) 080393 (certified 100 ± 1 µg/L): AFS 93 ± 2.3; ICP-MS 91 ± 4.0.
- A *t*-test found no significant difference at 95% confidence between AFS and ICP-MS, and between determined and certified values.

**Real-sample results (Table 2), reported as mean ± 3·SD of 3 replicates:**

- White vinegar 1 (3.5% acidity): n.d. by both AFS (< 0.08 µg/L) and ICP-MS (< 0.06 µg/L); 5 µg/L spike recovered 92% (AFS), 94% (ICP-MS).
- White vinegar 2 (3.95% acidity): n.d. by both methods; 5 µg/L spike recovered 98% (AFS), 96% (ICP-MS).
- White vinegar 3 (4.0% acidity): 1.8 ± 0.2 µg/L (AFS) and 2.0 ± 0.3 µg/L (ICP-MS); 5 µg/L spike recovered 93% (AFS), 95% (ICP-MS).

**Mercury speciation (Section 3.4, by C18 HPLC-AFS):** no monomethylmercury (MeHg) or monoethylmercury (EtHg) detected in any of the three real samples. The total-Hg value on White vinegar 3 is therefore inorganic Hg(II), within the limits of the speciation method's sensitivity (organomercury in natural liquids is typically at ng/L levels per refs [21, 22]).

**Matrix interference findings (Section 3.4):**

- Sugar interference exceeds ±10% on Hg signal at 1% v/v sugar (the paper's stated tolerance threshold for a foreign species is ±5% relative error per Section 3.4; sub-1% sugar concentrations were not tested). The method is therefore restricted to white vinegar (no added sugar) and is not appropriate for aromatic, mature, rice, or fruit vinegars, which all contain sugar per ref [1].
- No significant interference from Fe up to 20 mg/L, Co up to 10 mg/L, Cu up to 10 mg/L, or Ni up to 1 mg/L — a stated advantage over conventional KBH₄ hydride generation, where these transition metals form metallic colloids and suppress signal.

## Methods (brief)

Matrix-assisted photochemical vapor generation AFS on an AFS-9800 (Beijing Haiguang Instrument Co., China) with the default intermittent reactor replaced by a laboratory-constructed flow-through photoreactor (PTFE tube 3 m × 0.5 mm i.d., wrapped around a 20 W mercury UV lamp). Argon carrier gas at 300 mL/min; mercury hollow-cathode lamp at 253.7 nm; PMT voltage 280 V; lamp current 40 mA. Sample uptake into the UV reactor for 15 s, UV irradiation for 30 s, signal integration 35 s, instrument rest 8 s between measurements. Working standards prepared by diluting HgCl₂ stock solutions in 3% v/v acetic acid (matching the typical acidity of commercial white vinegar at ≈3–4%); MeHg and EtHg stock solutions prepared in methanol from Merck-supplied monomethylmercury chloride and monoethylmercury chloride. All solutions stored at 4 °C; Milli-Q water (18.2 MΩ·cm).

ICP-MS validation on an Agilent 7500ca at m/z 202; forward power 1500 W, carrier 800 mL/min, makeup 300 mL/min, plasma 12 L/min, sample uptake 1.5 mL/min, integration 1 s × 3. Acid digestion: 2 mL vinegar + 1 mL concentrated HNO₃ + 1 mL concentrated H₂O₂ in 25 mL Teflon container, sealed in stainless-steel bomb, 180 °C for 1 h, diluted to 10 mL with deionized water for analysis. Mercury speciation by direct injection onto a C18 column with HPLC-AFS using the photo-induced chemical vapor generation system described in the author's prior work (ref [17], Microchem. J. 95).

Optimization confirmed: 3% v/v acetic acid is the photoreductant plateau (signal rises sharply between 0 and 3% v/v, then stable to at least 30% v/v; see Fig. 2); 30 s UV irradiation reaches the photogeneration plateau (Fig. 1); 300 mL/min argon balances baseline stability against dilution and residence-time loss.

This is an analytical-note method-development paper with a small (n = 3) real-sample application. The three commercial vinegars demonstrate the method's behavior on real white-vinegar matrices rather than serving as a systematic occurrence survey; the single positive result (≈2 µg/L tHg) and the speciation showing no organomercury are best read as method-demonstration data, not as a population-level estimate of mercury in white vinegar.

## Implications

Certification: For the three commercial white vinegars sampled, total mercury was at or below ≈2 µg/L (with 2 of 3 below the 0.08 µg/L AFS detection limit and the third at 1.8–2.0 µg/L), and HPLC-AFS speciation found no MeHg or EtHg in any sample. The dataset is too small to characterize the population distribution of tHg in white vinegar — this is one Chinese-origin n = 3 method-demonstration study — and certifiers should not extrapolate a category-wide tHg expectation from these values alone.

Testing: The photochemical vapor generation AFS method offers a pretreatment-free alternative to acid-digestion ICP-MS for total mercury in white vinegar, with comparable accuracy (no significant *t*-test difference vs ICP-MS or vs CRM-certified values), competitive sensitivity (0.08 µg/L LOD by peak area), and tolerance to common transition-metal interferents (Fe to 20 mg/L, Cu/Co to 10 mg/L, Ni to 1 mg/L) that would suppress signal in KBH₄ hydride generation. Applicability is constrained to white vinegar specifically; sugars in aromatic, mature, rice, or fruit vinegars interfere above ±10% at 1% v/v sugar and the method is not transferable to those matrices without modification.

App: Available tHg data for white vinegar from this study sit at ≤2 µg/L. The single-paper n = 3 dataset is insufficient on its own to populate an app-level occurrence estimate; treat tHg in white vinegar as a data-thin commodity until additional surveys accumulate.

Microbiome: Not applicable; the paper does not address gut-microbial endpoints.

## Verification notes

Page was originally drafted under the legacy `manual-fetch-kimi` raw_handle and last updated 2026-05-14. Merge-enhanced on 2026-05-26 against the source PDF to:

- Replace legacy `raw_handle: manual-fetch-kimi` with the canonical `MFK_direct-determination-of-mercury-in-white-vinegar-b` handle, matching the convention used on sibling vinegar source pages ([[ndungu2004-lead-vinegar-icpms-gfaas]], [[karavoltsos2020-copper-trace-metals-vinegars-greece]], [[saei-dehkordi2012-pb-cd-cu-zn-iranian-vinegars]]).
- Correct truncated `raw_path` (prior value cut off at "matrix assist.pdf"; corrected to the full filename "…matrix assisted photochemical vapor generation a.pdf").
- Soften the `sample_population` field. Prior version asserted "from local markets in Beijing, China"; the paper says only "purchased from local markets" without specifying the city. The Beijing inference is reasonable because the author is at the Beijing Center for Physical and Chemical Analysis, but the inference should be marked as such rather than presented as paper-stated.
- Verified the Key numbers against the PDF (Table 2, Section 3.5): all reported LODs, RSDs, CRM recoveries, real-sample concentrations, and speciation findings reproduce the source. Added the calibration line equation (Y = 15.62 C + 2.25, r² = 0.9995) and the upper linear range (1 mg/L) that the prior version omitted.
- Expanded Methods to capture instrumental detail (PMT voltage, lamp current, ICP-MS m/z 202, plasma/carrier/makeup gas flows, integration timing) that supports A-tier classification, plus the optimization plateau details from Figs. 1 and 2 and the matrix-interference tolerances from Section 3.4.
- Restate µg/L = ppb equivalence explicitly in Key numbers for the aqueous matrix.
- **Remove HMTc-framework classification claim from Implications.** Prior version stated "White vinegar should be classified as a low tHg/MeHg risk matrix" — this is HMTc-classification language and violates the Part 2 wiki/HMTc firewall (the wiki reports what the literature says; HMTc classification is HMT&C's job). Revised to report the n = 3 finding honestly and explicitly flag that the dataset is too small for category-level extrapolation.
- Remove the legacy `## Wiki pages updated on ingest` heading per current Part 6 practice; downstream-page fan-out lives in the routing audit, not on the source page.
- License kept as "All rights reserved" — Spectrochimica Acta Part B (Elsevier) 2010 paywall paper; no open-access notice on the PDF.

Auto-audit subagent (2026-05-26) verdict REVISE; Checks 2, 3, 4, 5 clean. Check 1 ⚠️ flagged that "Sugar interference > ±10% on Hg signal at sugar concentration as low as 1% v/v" overstated the source — paper Section 3.4 reports the >±10% effect at 1% v/v but does not test below 1% v/v, so "as low as" implied an untested lower bound. Verified against the PDF and applied: reworded to "exceeds ±10% on Hg signal at 1% v/v sugar," and added the paper's stated ±5% relative-error tolerance threshold for completeness as the audit suggested.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [a22ac5cec](https://github.com/paleofoundation/heavymetalindex/commit/a22ac5cec) | 2026-05-26 | minor | Narrative text revised |
| [cf5630058](https://github.com/paleofoundation/heavymetalindex/commit/cf5630058) | 2026-05-26 | major | 1 section added and 1 removed; narrative text revised |
| [472d023f9](https://github.com/paleofoundation/heavymetalindex/commit/472d023f9) | 2026-05-14 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
