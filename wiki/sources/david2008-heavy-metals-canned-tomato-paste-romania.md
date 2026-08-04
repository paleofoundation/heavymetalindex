---
type: source
raw_handle: manual-fetch-kimi
cite_key: david2008-heavy-metals-canned-tomato-paste-romania
title: "The heavy metals analyses in canned tomato paste"
authors: [David I, Ştefănuţ Mariana Nela, Balcu I, Berbentea F]
year: 2008
publication: "Journal of Agroalimentary Processes and Technologies"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: B
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf"
raw_sha256: "d55ba8748cd2c467df61ffd0b3de7f3076d6faca578e73f29cbedc7d44f829e9"
duplicate_filesystem_copies:
  - path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf"
    sha256: "d55ba8748cd2c467df61ffd0b3de7f3076d6faca578e73f29cbedc7d44f829e9"
    note: "Byte-identical copy of the canonical raw_path; Kimi agent re-extracted the David 2008 Romanian canned-tomato-paste paper into the processed-foods/snacks/beverages subfolder of the June 8 corruption-issue tree under the parenthetical-filename variant '(Romanian study on sauces)'. Recorded 2026-06-08 so future manual-fetch identity-check cycles in the June 8 batch recognize this location as already-ingested. The canonical-folder parenthetical variant at raw/Manual Fetch Kimi /07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf and the same-named copy at raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste.pdf also share this sha256 and will be appended in their own per-PDF cycles."
metals: [Pb, Cd, Sn, Al, Cr, Fe, Zn, tAs]
ingredients: ["[[ingredients/tomato-paste]]", "[[ingredients/tomato]]"]
products: ["[[products/canned-tomatoes]]", "[[products/tomato-paste]]", "[[products/tomato-sauce]]"]
matrices: [canned-tomato-paste, tomato-sauce]
jurisdictions: [RO, IT]
near_duplicates: []
sample_n: 5
sample_population: "Five commercial canned tomato paste and tomato sauce products sampled from the Romanian retail market in 2008: three Romanian-origin tomato paste products (two in metal cans, one in plastic can as reference) and two Italian-origin tomatoes-in-sauce products (both in metal cans)"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-08
---

# David et al. 2008 — Heavy metals in canned tomato paste (Romania)

## Overview

This Romanian study measured eight heavy metals (Cr, Fe, Pb, Cd, Sn, Al, Zn, As) in five commercially available canned and plastic-packaged tomato paste and tomato-sauce products sourced from the Romanian retail market, using atomic absorption spectrometry and cyclic voltammetry, to evaluate packaging-related contamination risk. The authors conclude that tin (Sn) and aluminium (Al) exceeded legally admitted Romanian concentrations in metal-canned products, particularly the Italian imports. Cadmium reached its highest measured value in one of the Italian metal-canned sauces (0.111 ppm), and lead reached an anomalously high value in the same sample (2.10 ppm) that exceeds typical EU limits for processed tomato products though the authors do not flag it explicitly. Total arsenic was below the limit of detection in all samples. The study highlights the metal-can packaging pathway, especially weld-seam migration, as a significant contamination vector for Sn, Fe, and Al in acidic tomato products, consistent with acid-driven leaching from tin-plate cans.

## Key numbers

All values in ppm (mg/kg), product as sampled (wet weight). Analytical basis: atomic absorption spectrometry (novAA 400 G, ISO 15586:2003) for all eight metals; cyclic voltammetry additionally used to cross-check Fe and Sn in the two Italian-origin samples. Arsenic reported as "under limit detection" in all five samples; no As speciation was performed. Samples are de-identified by product form and origin per the wiki's brand-firewall convention; original brand labels are in the source PDF for verification.

| Sample | Cr | Fe | Pb | Cd | Sn | Al | Zn | As |
|---|---|---|---|---|---|---|---|---|
| Romanian metal-canned tomato paste, sample A | 0.24 | 30.60 | 0.02 | 0.007 | 4.51 | 34.66 | 92 | < LOD |
| Italian metal-canned tomatoes-in-sauce, sample A | 0.18 | 219.58 | 0.27 | 0.043 | 73.78 | 36.64 | 4.03 | < LOD |
| Romanian metal-canned tomato paste, sample B | 0.15 | 17.53 | < LOD | 0.005 | 12.875 | 24.2 | 6.8 | < LOD |
| Italian metal-canned tomatoes-in-sauce, sample B | 0.28 | 41.66 | 2.10 | 0.111 | 15.16 | 80.10 | 9.07 | < LOD |
| Romanian plastic-packaged tomato paste (reference) | 0.26 | 27.61 | 0.16 | 0.017 | 9.24 | 51.86 | 8.79 | < LOD |

Per-analyte range across the five products: Cr 0.15–0.28 ppm; Fe 17.53–219.58 ppm; Pb < LOD–2.10 ppm; Cd 0.005–0.111 ppm; Sn 4.51–73.78 ppm (AAS); Al 24.2–80.10 ppm; Zn 4.03–92 ppm; As < LOD throughout.

Cyclic voltammetry cross-check Sn values for the two Italian-origin samples: sample A = 3.60 ppm (Ipeak = 0.1589 mA/cm²); sample B = 3.40 ppm (Ipeak = 0.1367 mA/cm²). These values are an order of magnitude lower than the AAS Sn results for the same products; the authors attribute the divergence to interfering co-occurring ions affecting the electrochemical response and treat the AAS values as the primary result.

Sampling note from the authors: for both Italian-origin samples, samples were taken "from right next to where the can is welded, for all samples". This deliberate weld-adjacent sampling inflates Sn (and likely Fe, Al) values relative to a homogenised whole-product sample and explains the extreme Italian-sample-A AAS values for Fe (219.58 ppm) and Sn (73.78 ppm).

## Methods (brief)

AA spectrometry: novAA 400 G spectrometer (Analytik Jena, Germany) with graphite furnace and WinAAS 3.17.0 software; ISO 15586:2003 method; HS 55-1 hydride generator for arsenic; element-specific calibration curves from standard solutions. Sample digestion via microwave (MWS-2 Berghof, 1000 W) with concentrated HNO₃ (67%, Merck, heavy-metals free) using a three-step program: T₁ = 160 °C / 15 min, T₂ = 210 °C / 15 min, T₃ = 210 → 100 °C cool-down / 15 min. Digested solutions made up to 25 mL with ultrapure water from a Barnstead RO system.

Cyclic voltammetry: PGZ 402 Voltalab with VoltaMaster 4 software (Radiometer Copenhagen), BEC/EDI X51 V001 electrochemical cell, platinum working (7.85 mm²) and auxiliary (50 mm²) electrodes, standard calomel reference, 0.1 M HNO₃ support electrolyte, 50 mV/min scan rate, 10 mA sensitivity. Calibration curves plotted as Ipeak = f(conc.) for Fe (R = 0.99699) and Sn (R = 0.9983). Applied only to Fe and Sn in the two Italian-origin samples.

Limitations: n = 5 commercial products, no replicates reported, convenience sample with no statistical power for generalisation; deliberate weld-adjacent sampling for Italian-origin samples inflates can-leached metal values above what would be expected from homogenised whole-can content; no detection limits reported for individual analytes (only "under limit detection" flag for As); no interlaboratory validation; published in a regional Romanian technical journal (B-tier evidence); the source PDF does not explicitly state "wet weight" but reports concentrations of product-as-sampled after acid digestion of the un-dried sample, which is functionally wet-weight basis; minor English-language transcription quality issues in the original PDF.

## Implications

Certification: The study provides evidence that tin migration from metal-can construction is a contamination pathway for acidic tomato products. AAS Sn at the weld seam reached 73.78 ppm in one Italian-origin metal-canned sauce — the authors note this exceeded legally admitted Romanian limits in 2008. The cyclic voltammetry cross-check at 3.60 ppm Sn for the same product is closer to expectations for bulk-product Sn in canned tomatoes (EU Sn guidance for canned food is 200 mg/kg for general food and 50 mg/kg for infant food). One Italian-origin sample's Pb value of 2.10 ppm is approximately 20× the EU 1881/2006 limit (as in force at the time of publication; subsequently superseded by EU 2023/915) of 0.10 mg/kg for processed fruit and vegetable products; the same sample's Cd value of 0.111 ppm exceeds the corresponding Cd limit of 0.050 mg/kg. The authors do not explicitly flag these Pb/Cd exceedances in their conclusions, which focus on Sn and Al. Relevance for HMTc product-category work: this is one data point on packaging-pathway Sn/Al migration in canned tomato matrices, weld-seam-biased and dated to 2008.

Courses: Useful illustration of the packaging-metal migration pathway. The contrast between AAS Sn at the weld seam (73.78 ppm for one Italian-origin sample) and the voltammetry cross-check (~3.60 ppm for the same sample) demonstrates that (a) sampling location within a can matters significantly, and (b) the choice of analytical method can shift reported values by an order of magnitude, particularly in matrices with multiple interfering ions.

App: Limited utility for ingredient-level contamination profiling given the small sample size (n = 5), deliberate weld-adjacent sampling that inflates can-leached metal values, and the 2008 vintage. Treat as qualitative evidence for the canning-pathway risk for Sn, Pb, Cd, and Al in tomato products; do not anchor `contamination_profile` ppb values on this study alone without corroboration from higher-n, homogenised-product studies.

## Verification notes

- 2026-05-20 — Merge-enhance pass against the source PDF (identical file present in the folder under both `The heavy metals analyses in canned tomato paste.pdf` and `The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf`; same byte length, same content). Corrected the Key-numbers table column headers, which were previously transposed (`Cd, Sn, Cr, Fe, Pb, Al, Zn, As`) relative to the PDF's actual column order (`Cr, Fe, Pb, Cd, Sn, Al, Zn, As`). Downstream consequence: sample-A Romanian paste's 0.24 was previously labelled "Cd" (actually Cr); the 219.58 ppm extreme value was previously labelled "Sn" (actually Fe); sample-B Italian sauce's 0.28 was previously labelled "Cd" (actually Cr; the actual Cd is 0.111 ppm). All values are now aligned with PDF Table 1 as printed.
- 2026-05-20 — Removed the previous "Note on Pb column" caveat, which incorrectly attributed the column-label/value mismatch to a possible Marker-conversion artefact in the source PDF. The PDF Table 1 is unambiguous (Cr, Fe, Pb, Cd, Sn, Al, Zn, As); the prior wiki transcription introduced the disorder, not the source.
- 2026-05-20 — Corrected the summary and Implications: Cd range across the five samples is 0.005–0.111 ppm (not "0.15–0.28 ppm"); the 219.58 ppm extreme value is Fe by AAS (not Sn); the AAS Sn weld-seam result is 73.78 ppm; the highest-measured Pb is 2.10 ppm (not "low"). The authors' own conclusion that "Sn and Al exceeded legally admitted concentrations" is preserved.
- 2026-05-20 — Frontmatter fix: `[[ingredients/tomatoes]]` → `[[ingredients/tomato]]` to match the actual ingredient page slug.
- 2026-05-20 — Audit subagent (general-purpose) flagged five Part-12 brand-firewall violations (brand names attached to contamination values in Table, sample_population, and Implications). Verified against PDF Table 1 (p. 342) — finding correct. Replaced all five brand names with product-form descriptors (Romanian metal-canned tomato paste sample A/B, Italian metal-canned tomatoes-in-sauce sample A/B, Romanian plastic-packaged tomato paste reference) per the strict Part 12 reading locked 2026-05-17. Brand identifiers retained in the PDF at `raw_path` for source-of-truth verification.
- 2026-05-20 — Audit subagent flagged Part-2 wiki/HMTc firewall: original Implications recommended that "HMT&C product standards for canned tomato products should explicitly address packaging type and weld-seam migration as a risk factor for Sn." Verified against Part 2 — the wiki should report literature, not prescribe to HMTc. Rewrote as observation: "this is one data point on packaging-pathway Sn/Al migration in canned tomato matrices, weld-seam-biased and dated to 2008." Also removed brand-line-tied risk-management framing about "older Italian-canned imports... for the same brand line."
- 2026-05-20 — Audit subagent flagged regulation wikilink: `[[regulations/eu-1881-2006]]` does not exist (taxonomy slug is `eu-1881-2006-contaminants-superseded`). Verified against `ls wiki/regulations/` — finding correct. Corrected the wikilink below.
- 2026-05-20 — Audit subagent flagged matrices `canned-tomato` (singular) as inconsistent with the matrices vocabulary used elsewhere (e.g., `canned-tomato-paste`, `canned-tomato-concentrate`, `canned-tomato-mix`). Verified by grepping `wiki/sources/` — `canned-tomato` singular is unused. Dropped the redundant slug; `canned-tomato-paste` + `tomato-sauce` correctly cover the five sampled products.
- 2026-06-08 — Byte-identical filesystem-copy enhancement. Added `raw_sha256` (`d55ba8748cd2c467df61ffd0b3de7f3076d6faca578e73f29cbedc7d44f829e9`) and a `duplicate_filesystem_copies` block recording a second filesystem location of the canonical PDF at `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_07_Processed_Foods_Snacks_Beverages/07_Processed_Foods_Snacks_Beverages/The heavy metals analyses in canned tomato paste (Romanian study on sauces).pdf`. Verified byte-identical via `shasum -a 256` against the canonical `raw_path` copy. Surfaced via the June 8 re-extraction batch placing the paper a second time under the processed-foods/snacks/beverages subfolder of the corruption-issue tree, under the parenthetical-filename variant. Both filesystem locations now resolve to this canonical source page so future manual-fetch identity-check cycles in the June 8 batch skip re-ingest. No claim, value, slug, exposure number, key-numbers, or HMTc-firewall change. Metadata-only enhancement; no new audit cycle spawned per 2026-06-02 precedent (no body or evidence-bearing frontmatter changed).

## Wiki pages updated on ingest

- [[ingredients/tomato-paste]]
- [[products/canned-tomatoes]]
- [[products/tomato-paste]]
- [[regulations/eu-1881-2006-contaminants-superseded]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [095765ff2](https://github.com/paleofoundation/heavymetalindex/commit/095765ff2) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
