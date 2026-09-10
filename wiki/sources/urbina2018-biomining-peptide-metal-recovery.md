---
type: source
raw_handle: MFK_44-functional-interplay-between-the-hippo-pathway-
cite_key: urbina2018-biomining-peptide-metal-recovery
title: "Biomining: A biological approach to recycling elemental components from end-of-life electronics"
authors: ["Jesica Urbina"]
year: 2018
publication: "PhD dissertation, University of California, Santa Cruz (Microbiology and Environmental Toxicology); advisor Lynn J. Rothschild (NASA Ames), co-advisor Chad W. Saltikov"
doi: null
source_type: dissertation
no_doi_assigned: true
evidence_tier: C
license: null
access_url: "https://escholarship.org/uc/ucsc_etd"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/44_Functional_Interplay_Between_the_Hippo_Pathway_and_Heavy_Met.pdf"
raw_sha256: "46bbddc784d5bbd6612694a9b6aa81923c8b7118bd04e7a6e5954f0100a23c1a"
near_duplicates: []
metals: [Cu, Zn, Ni]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Eight synthetic peptides (natural-motif, consensus, and rational-design) characterised by isothermal titration calorimetry for Cu, Zn, and Ni binding in 10 mM MES buffer, pH 5.5; engineered Bacillus subtilis flagellin-mutant strains tested in a flagellar-display adsorption screen. No human, dietary, or environmental samples."
updated: 2026-06-08
---

# Urbina 2018 — Biomining dissertation: isothermal-titration characterisation of natural and rationally-designed Cu/Zn/Ni-binding peptides, and a flagellin-knockout strain for surface-display metal recovery

## Overview

Urbina's PhD dissertation at UC Santa Cruz frames biomining (microbial extraction of metals from materials that are not traditionally mined, principally end-of-life electronics) as the application context and then reports two pieces of primary work in support of that goal. Chapter 1 is a review of the state of biomining (biooxidation of metal sulfides, heap bioleaching, basalt and silicate-mineral bioleaching, electronic-component bioleaching, and bioengineering of bacterial surfaces). Chapter 2 measures the intrinsic binding affinity (Kₐ, ΔH, n) of eight short peptides for Cu²⁺, Zn²⁺, and Ni²⁺ by isothermal titration calorimetry (ITC) and the apparent affinity for Cu when a competing ion (Zn or Ni) is pre-bound, contrasting naturally-occurring metal-binding motifs against motifs designed *in silico* by Kožíšek et al. (2008). Chapter 3 constructs and characterises a Bacillus subtilis flagellin-knockout strain (PY79 ΔhagAB::ery) intended as a chassis for displaying random peptide libraries on flagella for affinity-based screening of metal-binding peptides. The dissertation does not measure heavy metals in food, cosmetics, or any human-exposure matrix; its relevance to the Heavy Metal Index is to the peptide-Cu / peptide-Ni / peptide-Zn coordination-chemistry literature that already includes [[sources/luo2024-peptides-heavy-metal-remediation]], [[sources/shalev2022-peptide-metal-nmr-review]], [[sources/spallacci2025-bioinformatics-biomimetic-metal-peptide]], [[sources/zhang2025-metalorian-de-novo-metal-binding-peptides]], and [[sources/grill1989-phytochelatins-heavy-metal-binding-peptides-plants]].

## Why this matters

- It is the first dissertation in the wiki's peptide-metal-binding corpus to put naturally-occurring metal-binding motifs and computationally-designed motifs through the same ITC pipeline under matched conditions (10 mM MES buffer, pH 5.5, 25 °C, Malvern MicroCal iTC200, Origin-7 one-site model). This makes the resulting Kₐ values directly comparable in a way that the published-literature affinity values they reference (collected across different buffers, pH values, and instruments) are not.
- The two natural HypB-derived motifs (HypB1 CTTCGCG, HypB2 MCTTCGCGEG) and the rationally-designed HHTC and CHSK peptides all bind Cu²⁺ with Kₐ in the 10⁶ M⁻¹ range. The consensus Cu-binding motif Cu-02 (HCWCHM) is the highest-affinity peptide at Kₐ ≈ 9.9 × 10⁶ M⁻¹.
- The Zn-targeted rational-design peptides KDTK and KDKD bind Cu more strongly than they bind Zn (consistent with the Irving–Williams stability series Mg²⁺ < Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺). The dissertation reports this as a limit on rational design when the target metal sits below Cu in the series.
- The competition data establish that for the HHTC and CHSK rationally-designed peptides, Cu affinity is lowered by an order of magnitude when Zn or Ni is pre-bound; for the consensus Cu-02 peptide, Cu affinity is lost entirely when Ni is the competing ion. The natural HypB2 motif retains Cu affinity in the presence of both Zn and Ni.
- The exposure-context paragraph in Chapter 1 cites Shantou University Medical College finding 82 % of resident children near the Guiyu, China e-waste processing site have lead poisoning suspected to be caused by e-waste contamination. This is the single human-exposure datapoint in the dissertation; it is a citation to other work, not a measurement reported here.

## Key numbers

Peptides assessed (Chapter 2, Table 1, p. 38).

| Type | Name | Amino-acid sequence | Cognate metal | Source |
| --- | --- | --- | --- | --- |
| Natural motif | HypB1 | CTTCGCG | Unknown | Douglas et al., 2012 |
| Natural motif | HypB2 | MCTTCGCGEG | Unknown | Chang et al., 2008 |
| Natural motif | CZB-7 | GFHGRADALLHKI | Cu/Zn | Yeh et al., 2010 |
| Consensus | Cu-02 | HCWCHM | Cu | Bertini et al., 2010 |
| Rational design | HHTC | HNLGMNHDLQGERPYVTEGC | Cu | Kožíšek et al., 2008 |
| Rational design | CHSK | CPSEDGVSQDK | Cu | Kožíšek et al., 2008 |
| Rational design | KDTK | KTEYVDERSKSLTVDLTK | Zn | Kožíšek et al., 2008 |
| Rational design | KDKD | KFFKDFRHKPATELTHED | Zn | Kožíšek et al., 2008 |

Intrinsic and apparent association constants Kₐ (Chapter 2, Table 2, p. 39; supporting text pp. 28-32). "Zn → Cu" denotes the apparent Kₐ for Cu when Zn is already in solution as a competing ion (titrated as Cu into the pre-formed peptide-Zn complex); "Ni → Cu" likewise.

| Name | Cu Kₐ (M⁻¹) | Zn Kₐ (M⁻¹) | Ni Kₐ (M⁻¹) | Zn → Cu Kₐ (M⁻¹) | Ni → Cu Kₐ (M⁻¹) |
| --- | --- | --- | --- | --- | --- |
| HypB1 | (2.37 ± 0.71) × 10⁶ | 0 (no isotherm) | 0 | (1.29 ± 0.26) × 10⁷ | n/a |
| HypB2 | (1.30 ± 0.07) × 10⁶ | 0 | 0 | (1.98 ± 0.99) × 10⁶ | (3.51 ± 0.18) × 10⁶ |
| CZB-7 | (7.78 ± 1.25) × 10³ | 0 | 0 | 0 | 0 |
| Cu-02 | (9.89 ± 2.18) × 10⁶ | 0 | 0 | (4.97 ± 0.70) × 10⁴ | 0 |
| HHTC | (1.74 ± 0.49) × 10⁶ | 0 | 0 | (8.64 ± 3.11) × 10⁵ | (5.02 ± 1.10) × 10⁵ |
| CHSK | (1.28 ± 0.33) × 10⁶ | 0 | 0 | (2.35 ± 0.81) × 10⁵ | 0 |
| KDTK | (1.05 ± 0.91) × 10⁴ | (2.44 ± 3.53) × 10⁴ † | 0 | (6.51 ± 0.75) × 10⁵ | n/a |
| KDKD | (1.27 ± 0.11) × 10⁴ ‡ | 0 | 0 | (3.08 ± 2.33) × 10⁶ | (1.71 ± 1.08) × 10⁶ |

† Paper-internal discrepancy: Table 2 (p. 39) reports KDTK Zn Kₐ = (2.44 ± 3.53) × 10⁴ M⁻¹, whereas the body text on p. 32 reports "Kₐ = (2.44 ± 3.53) M⁻¹ for Zn." Both values are recorded here; the table value is more consistent with the dissertation's own framing of KDTK as a Zn-designed peptide that nonetheless binds Cu with at-least-comparable affinity. A reader who needs to use this value should consult the supplementary raw ITC traces.

‡ Paper-internal discrepancy: Table 2 (p. 39) reports KDKD Cu Kₐ = (1.27 ± 0.11) × 10⁴ M⁻¹, whereas the body text on p. 32 reports "(1.27 ± 1.13) × 10⁴ M⁻¹." The central value matches; the uncertainty differs by an order of magnitude. The table value (smaller error bar) is recorded above for consistency with how KDTK is handled.

Published-literature Cu Kₐ value cited as comparator for the HHTC peptide (Chapter 2, text on pp. 28-29).

| Peptide | Published Kₐ for Cu | Source citation in dissertation | Notes |
| --- | --- | --- | --- |
| HHTC | (2.4 ± 0.5) × 10⁶ M⁻¹ | Kožíšek et al., 2008 (ITC at pH 7 in ACES buffer) | Dissertation notes >99 % of Cu is precipitated as Cu(OH)₂(s) at pH 7, so the published comparator may reflect mineral-phase dissolution rather than peptide binding; this dissertation measured at pH 5.5 where 99.991 % of Cu is predicted to remain as Cu²⁺. Dissertation reports its observed HHTC value matches the published value within error. (Note: the dissertation body text on p. 28 reports its own intrinsic HHTC Cu Kₐ as (1.89 ± 0.3) × 10⁶ M⁻¹, whereas Table 2 reports (1.74 ± 0.49) × 10⁶ M⁻¹; the table value is used in the intrinsic-Kₐ table above.) |

Truncation / replacement series for the KDETSY residues hypothesised to interact with competing metal ions (Chapter 2, Table 3 region, p. 31-32).

| Modified peptide | Cu Kₐ (M⁻¹) | Notes |
| --- | --- | --- |
| HHTC-Tr (truncated; KDETSY residues omitted) — sequence HNLGMNHLQGRPVTGC | (4.92 ± 2.17) × 10⁶ | Unpaired t-test vs original HHTC, two-tailed P = 0.2783 (no significant difference). Retained Cu affinity in presence of Zn (Kₐ = (1.67 ± 0.85) × 10⁶) or Ni (Kₐ = (1.50 ± 0.67) × 10⁶) |
| HHTC-Re (KDETSY residues replaced with non-interacting NLGQV) — sequence HNLGMNHVLQGNRPLVTQGC | (3.93 ± 2.76) × 10⁶ | Slightly higher affinity than original HHTC (two-tailed P = 0.0621, not statistically significant); Cu affinity retained in presence of Zn or Ni |
| CHSK-Tr (truncated) — sequence CPHVSQK | Similar to original CHSK | Cu affinity lost when Ni or Zn pre-bound, despite no observed Zn or Ni isotherm |
| CHSK-Re (replaced with NLGQV) — sequence CPNLGHVSQNK | (4.86 ± 0.83) × 10⁵ | Order-of-magnitude reduction vs original CHSK; only slightly reduced if Zn pre-bound; completely lost if Ni pre-bound |

Heat-of-dilution / mixing background reference values (Methods, p. 25).

| Condition | Heat output |
| --- | --- |
| Buffer-into-buffer (blank) | 0.02 µcal/sec per injection |
| 5 mM CuCl₂ into buffer | 0.08 µcal/sec |
| 2.6 mM NiCl₂ into buffer | 0.05 µcal/sec |
| 6.4 mM ZnCl₂ into buffer | 1.0 µcal/sec per injection |
| 64 mM ZnCl₂ into buffer | up to 15 µcal/sec |

Buffer ionisation enthalpies relevant to the pH-cross-comparison (Discussion, p. 29).

| Buffer | ΔH_ion |
| --- | --- |
| ACES (literature comparator) | 31.4 kJ/mol |
| MES (this work) | 15.5 kJ/mol |

Speciation modelling parameters (Methods, p. 24-25; Discussion, p. 29).

| Parameter | Value | Source location |
| --- | --- | --- |
| Buffer | 10 mM MES, pH 5.5 | Methods, p. 23 |
| Predicted fraction of Cu present as Cu²⁺ at pH 5.5 | 99.991 % | Discussion, p. 29 |
| Predicted fraction of Cu present as Cu(OH)₂(s) at pH 7 | >99 % | Discussion, p. 28 |
| Speciation modelling software | Visual MINTEQ 3.0 (Gustafsson 2007) | Methods, p. 24 |

Cited exposure-context datapoint (Chapter 1, Introduction, p. 1).

| Item | Value | Source attribution |
| --- | --- | --- |
| Prevalence of lead poisoning in Guiyu (China) e-waste-site resident children with no occupational exposure | 82 % | Attributed to "researchers from Shantou University Medical College"; cited without a year or DOI in the dissertation text |

## Methods (brief)

**Peptide synthesis.** Eight peptides synthesised by Elim Biopharmaceuticals (Hayward, CA), HPLC-purified with HCl as the counter-ion, lyophilised, purity >98 % verified by mass spectrometry. N-terminal acetylation and C-terminal amidation were applied to neutralise terminal charge. Peptide concentration determined by Pierce™ BCA Assay.

**Isothermal titration calorimetry.** Malvern MicroCal iTC200 calorimeter (NASA Ames Space Biosciences Division, Mountain View, CA). 25 °C; 20 injections at 0.5–1 µL each; 150-second injection intervals. Buffer: 10 mM 2-(N-morpholino)-ethanesulfonic acid (MES) at pH 5.5 (the dissertation reports MES was chosen because it does not cause metal-ion interference via complexation or amine oxidation, is stable over pH 3–11, and has a stable pKa across 15–45 °C; citations Wang and Lawrence 1989; Kandegedara and Rorabacher 1999). Peptide concentration typically 0.5 mM in the cell; metal-chloride salt concentrations 2.4–6.4 mM in the syringe (10-20× excess over peptide). For low-affinity titrations, syringe concentrations up to 100× the cell were used. Metal chlorides: CuCl₂·2H₂O (Baker Analyzed ACS), NiCl₂, ZnCl₂. Reference titrations for instrument validation: Ca–EDTA kit (Malvern Panalytical), all parameters within manufacturer specification. Raw data corrected for heat of dilution by subtracting the average of three blank titrations (metal-into-buffer, buffer-into-peptide, buffer-into-buffer). Integrated heat data fit with a one-site binding model in Origin-7 (MicroCal). Heat of ionisation of MES was determined to be negligible (Freyer and Lewis 2008) and no correction was applied.

**ICP-OES.** Metal stock concentrations verified on a Thermo iCAP 7400 ICP-OES at the UC Santa Cruz Marine Analytical Laboratory.

**Speciation modelling.** Visual MINTEQ 3.0 (Gustafsson 2007) used to verify metal-ion speciation under the experimental conditions. Outputs included in the dissertation's supplementary materials.

**Competition assays.** For each peptide, either (a) a competing ion (Zn²⁺ or Ni²⁺) was titrated into a pre-formed peptide–Cu complex, or (b) Cu²⁺ was titrated into a pre-formed peptide–Zn or peptide–Ni complex. The latter set yields the "Zn → Cu Kₐ" and "Ni → Cu Kₐ" apparent constants tabulated above.

**Flagellar-display strain construction (Chapter 3).** Bacillus subtilis PY79 was the starting strain. The hag locus (encoding flagellin) was disrupted by allelic-replacement using an erythromycin-resistance cassette to yield the ΔhagAB::ery strain. Flagellin variants were re-introduced via integration vectors. Adsorption screens were performed against Au(III) and other electronic-waste-relevant metals; chapter results are reported as figures, with replicate-level numerical data in the chapter's figures section (pp. 60-65).

**What this dissertation does not measure.** No dietary, cosmetic, drinking-water, or human-exposure concentrations. No food matrix, no contaminant occurrence values, no regulatory threshold work. The 82 % Pb-poisoning prevalence in Guiyu children quoted in the introduction is a citation to Shantou University Medical College, not a measurement reported by this dissertation.

## Implications

Certification: Not directly applicable. Copper, nickel, and zinc are all in the HMI metal taxonomy ([[metals/copper]], [[metals/nickel]], [[metals/zinc]]); Ni is on the HMTc-certified analyte list (Pb, tAs, Cd, MeHg, tHg, iAs, Ni, Al, Cr-VI, Sn), Cu and Zn are not. The dissertation measures no food or supply-chain matrix and therefore cannot contribute occurrence data to any product-category page.

Courses: Marginal. Useful as worked example in a future advanced module on peptide-based metal chelation chemistry — specifically, how ITC characterises peptide-metal affinity, how the Irving–Williams series constrains rational design when the target metal sits below Cu, and how competing ions can lower apparent affinity for the cognate metal without producing a measurable isotherm for the competitor.

App: Not applicable. No contamination-profile data.

Microbiome: Not applicable. No microbiota or microbial-community measurements; Chapter 3's *Bacillus subtilis* work uses the organism as an engineered chassis, not as a human-microbiome species under environmental stress.

## Verification notes

- **Filename / content mismatch.** The PDF is filed under the source-retrieval folder as `44_Functional_Interplay_Between_the_Hippo_Pathway_and_Heavy_Met.pdf`, but the actual contents are the Urbina (2018) UC Santa Cruz dissertation on biomining and peptide-metal binding. There is no Hippo-pathway content in this file. The raw_handle has been preserved per the manual-fetch convention (MFK_ handle follows the file as source-retrieval delivered it); the cite_key reflects the actual content. A future session that needs the actual Hippo-pathway / heavy-metals paper will need to fetch it separately; this PDF does not contain it.
- **DOI / access_url fallback.** UCSC dissertations are typically deposited in eScholarship (UC's open-access repository); `no_doi_assigned: true` and the `access_url` points at the UCSC ETD collection landing page rather than the specific item, because the exact item URL was not verified during ingest. Both should be backfilled (item-level URL, and DOI if eScholarship has assigned one) when verified.
- **Paper-internal numerical discrepancies (three).** The dissertation contains three independent body-text-vs-Table-2 disagreements that are footnoted above where they appear: (1) KDTK Zn Kₐ — body p. 32 reads "(2.44 ± 3.53) M⁻¹" vs Table 2 p. 39 "(2.44 ± 3.53) × 10⁴ M⁻¹"; (2) KDKD Cu Kₐ — body p. 32 reads "(1.27 ± 1.13) × 10⁴" vs Table 2 "(1.27 ± 0.11) × 10⁴" (central value matches; uncertainty differs by 10×); (3) HHTC intrinsic Cu Kₐ — body p. 28 reads "(1.89 ± 0.3) × 10⁶" vs Table 2 "(1.74 ± 0.49) × 10⁶". In all three cases the Table 2 value is used in the intrinsic-Kₐ table above and the body-text value is footnoted; the table is treated as the canonical record because it carries the dissertation's full uncertainty bookkeeping.
- **Audit editorial review (2026-06-08) flagged misattribution of the (2.4 ± 0.5) × 10⁶ Cu Kₐ comparator.** Initial draft labelled this value as the HypB1 comparator; verified against PDF p. 28–29 — the value is the published HHTC comparator from Kožíšek et al. 2008, not a HypB1 value. The published-literature comparator table has been corrected and the HypB1 row removed.
- **Audit editorial review (2026-06-08) flagged statistic descriptor.** The HHTC-Tr P-value is from an unpaired (not just "two-tailed") t-test per p. 31; descriptor updated to "unpaired t-test … two-tailed P".
- **Audit editorial review (2026-06-08) flagged BCA-assay attribution.** Initial draft wrote "(Thermo Fisher)" after Pierce BCA; PDF p. 23 reads only "Pierce™ BCA Assay" without Thermo Fisher attribution (Pierce is a Thermo brand, but adding it is wiki-added context). Reverted to source wording.
- **Audit editorial review (2026-06-08) flagged MES buffer rationale.** Initial draft paraphrased the MES choice as "to keep histidine pKa ≈ 6 within range" — that specific framing is wiki-added interpretation. Rewritten to use the dissertation's own three-criterion rationale (no metal-ion interference via complexation or amine oxidation; stable over pH 3–11; stable pKa across 15–45 °C).
- **Evidence tier C.** Assigned because this is a PhD dissertation, not peer-reviewed at journal-article level; the binding affinity data are internally consistent and reference-method (ITC) but have not been re-published in a peer-reviewed venue (no DOI located).

## Related evidence
- [[metals/copper]]
- [[metals/nickel]]
- [[metals/zinc]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [50de6ab217](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab217) | 2026-07-27 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
