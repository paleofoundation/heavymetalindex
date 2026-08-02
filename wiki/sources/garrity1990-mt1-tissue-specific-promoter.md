---
type: source
raw_handle: MFK_31-tissue-specific-expression-of-metallothionein-i
cite_key: garrity1990-mt1-tissue-specific-promoter
title: "Tissue-Specific Expression from a Compound TATA-Dependent and TATA-Independent Promoter"
authors: ["Paul A. Garrity", "Barbara J. Wold"]
year: 1990
publication: "Molecular and Cellular Biology"
doi: "10.1128/mcb.10.11.5646-5654.1990"
source_type: peer-reviewed
evidence_tier: B
license: "ASM open archive (free access; not CC-licensed; ASM journals open after 6 months and the 1990 issue is well past that window)"
access_url: "https://doi.org/10.1128/mcb.10.11.5646-5654.1990"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/31_Tissue-Specific_Expression_of_Metallothionein-I_Gene.pdf"
raw_sha256: "d6f6b33c5b6e4d2626b6850b60b1006fd696b50abc6617f4820c1d83b038dbf8"
near_duplicates: []
metals: [Cd]
ingredients: []
products: []
matrices: []
jurisdictions: []
sample_n: null
sample_population: "Male mice 8-15 weeks old (DBA/2J, C57BL/6J, BDF1 strains; Jackson Laboratories); cultured P cells (L-cell derivatives) and NIH 3T3 cells; no food, environmental, or human samples."
updated: 2026-06-08
---

# Garrity & Wold 1990 — Compound TATA-dependent and TATA-independent transcription of the mouse metallothionein-I gene

## Overview

Garrity and Wold (California Institute of Technology, Division of Biology) report that the mouse metallothionein-I (MT-I) gene promoter functions in an unusual compound manner, directing both TATA-dependent and TATA-independent modes of transcription *in vivo*. The TATA-dependent message originates from the previously characterised +1 transcription start site and is the predominant species in most cell types and the only species that responds to cadmium induction. TATA-independent initiation occurs at sites distributed across the ~160 bp upstream of +1, is present in all tissues examined but is the predominant species only in testis (specifically in pachytene-stage meiotic cells and early spermatids), and is refractory to metal induction. Site-directed mutagenesis of the TATA element (substituting TCGAGA for TATAAA) drastically alters the ratio of the two RNA classes in cells where the +1 transcript normally dominates; in TATA-minus mutants the upstream TATA-independent RNAs become the most prevalent species but remain refractory to metal induction. The wiki uses this source as mechanistic background for [[metals/cadmium]] on the molecular basis of cadmium induction of metallothionein and on the testicular MT-I "blind spot" that contributes to germ-cell vulnerability to cadmium toxicity. It carries no food-matrix occurrence data and no regulatory content.

## Why this matters

- It is the foundational characterisation that the mouse MT-I gene uses *two* mechanistically distinct promoter modes whose ratio is tissue-specific. Most prior models of metallothionein induction treated the MT-I promoter as a single TATA-dependent element driven by metal-responsive enhancer elements (MREs); this paper shows that picture is incomplete, and that the upstream TATA-independent RNAs — which predominate in germ cells of the testis — never respond to cadmium. The mechanistic asymmetry has direct toxicological consequences: testis is the canonical Cd target organ in mice (Parizek 1960; Nordberg 1971; Meek 1959), and Garrity & Wold pin this in part on the *non-inducibility* of MT-I in testis germ cells, rather than on metallothionein protein dysfunction or Cd sequestration failures alone. Downstream metallothionein reviews on the wiki ([[ruttkay-nedecky2013-metallothionein-oxidative-stress]], [[thirumoorthy2007-metallothionein-overview]], [[yang2024-metallothionein-comprehensive-review]]) cite this lineage of work when they describe MT-I regulation as transcriptionally controlled and as having tissue-restricted induction behaviour.
- It establishes that the MT-I induction response to Cd is solely at the +1 (TATA-dependent) start site. RNA from the TATA-dependent +1 site increased ≥40% and commonly ≥25-fold in all cell types and tissues surveyed except testis after Cd administration. Upstream (TATA-independent) RNAs were unaffected (or slightly *repressed*) by Cd. This bears on any HMI claim that "metallothionein induction is the cellular defence against Cd" — the qualifier is that the induction is mechanistically restricted to the TATA-dependent transcription class, and there exist mammalian tissues (notably testis germ cells) where this class is *not* the dominant MT-I species.
- It documents the canonical experimental Cd dosing regimes used to study MT-I induction in mice: single subcutaneous 10 mg Cd/kg body weight in 200 µL saline 3 h before sacrifice (acute induction); daily subcutaneous 0.25 mg Cd/kg for 12 days (chronic pretreatment to test tolerance); single 1 mg Cd/kg challenge after pretreatment (protection assay). These dose anchors are used as method comparators when later studies (cited in [[ruttkay-nedecky2013-metallothionein-oxidative-stress]]) measure metallothionein induction kinetics; the wiki may surface them where dose-response comparisons across mechanism papers are made.
- It corroborates and extends the Cd-tolerance phenomenon first reported by Parizek (1960) and Nordberg (1971): a low-dose Cd pretreatment regime (0.25 mg/kg/day × 12 days) protected DBA/2J mice from testicular damage at a subsequent 1 mg/kg challenge, even though MT-I and MT-II RNAs in testis remained non-inducible by metal. The authors conclude that "metallothionein protein cannot account for Cd resistance in testis" and that additional resistance mechanisms (e.g., Zn-MT-mediated tolerance attributable to pre-existing Zn-loaded metallothionein in other organs, or zinc-driven tolerance at the level of Cd transport) are involved. This nuance matters when the wiki frames metallothionein as the universal Cd defence: there are tissues (testis) where it is not the relevant defence.

## Key concepts and structure

The paper is a nine-page primary research article (pages 5646-5654 of Volume 10, Number 11 of *Molecular and Cellular Biology*, November 1990). It is organised in the canonical IMRaD pattern: abstract, materials and methods, results (with three result subsections), discussion, and 56 numbered references. Figures 1-5 carry the experimental data: Figure 1 maps the MT-I gene structure and shows RNase protection / primer extension across tissues (testis, kidney, brain, spleen, liver, intestine, muscle, L cells), Figure 2 quantitates the upstream transcript start site groupings (groups A through F), Figure 3 shows RNase protection with full-length and 3'-end cDNA probes confirming splicing and 3'-end processing of the upstream RNAs, Figure 4 maps upstream RNA expression across testicular cell types (spermatogonia, leptotene/zygotene, pachytene, round spermatids, residual body, W/Wv germ-cell-deficient testes), and Figure 5 shows the consequences of TATA and Sp1 site-directed mutations in stably transfected L-cell pools.

### The MT-I promoter map (Figure 2B)

The cis-acting regulatory landscape of the MT-I promoter spans approximately -200 to +1 and includes a canonical TATA element at -25 to -30, two Sp1 binding sites (a distal one at ~-145 and a proximal one at ~-50), two G-box elements, an MLTF binding site, a potential AP-1 site, and six metal-responsive enhancer elements (MREs) labelled A through F. *In vivo* footprinting in L cells detects DNA-protein interactions at most of these sites; only the MRE interactions are dependent on metal treatment.

### The six start-site groups (Figure 2A)

The transcription start sites were operationally grouped into six clusters labelled A through F (panel B), where A = +3 to -1, B = -25 to -35, C = -39 to -75, D = -51 to -119, E = -82 to -146, F = -133 to -146 (per Fig. 2 legend, p. 5649). Group A is the canonical TATA-dependent +1 RNA. Groups B-F are the upstream TATA-independent RNAs. Quantitation in panel A shows, for each of testis, kidney, and L cells, the total MT-I RNA (left bars) and the start-site distribution (right bars). In L cells and kidney the +1 (Group A) transcript dominates; in testis the upstream groups dominate, with Group A constituting only ~15% of total MT-I RNA.

### Tissue distribution (Figure 1B, 1C)

Figure 1B (RNase protection with 5' genomic probe) and Figure 1C (primer extension) survey eight tissues from DBA/2J mice ± Cd treatment. In L cells and kidney, the +1 RNA dominates and Cd treatment shifts the ratio toward +1 (longer transcripts decrease 40-60% after metal treatment in L cells). In testis, the upstream (-44, -28, -134, -162) RNAs dominate and Cd has no significant effect on the +1 RNA level (testis does not respond to Cd with MT-I induction). Brain, spleen, liver, intestine, and muscle show intermediate patterns — upstream RNAs are present in all tissues but not as predominant species except in testis.

### Cell-type localisation in testis (Figure 4)

To identify which testicular cell type carries the upstream MT-I RNAs, the authors examined fractionated germ-cell populations: spermatogonia (8 days post-partum), leptotene/zygotene (17 days), pachytene (>40 days), round spermatids (~40 days, ~60 days, >60 days), residual body, and somatic-only testes from W/Wv mice (which lack germ cells). The upstream MT-I RNAs are most prominent in late meiotic prophase (pachytene-stage cells) and remain prominent in round spermatids, declining in residual bodies and cytoplasmic fragments cast off by condensing spermatids. The +1 RNA gradually declines as germ cells progress from spermatogonia to round spermatids. W/Wv mice (germ-cell-deficient) contained substantially lower upstream MT-I RNA, demonstrating that the upstream transcripts are a germ-cell-restricted feature.

### Site-directed mutagenesis of the TATA element (Figure 5)

The wild-type TATAAA at -25 to -30 was replaced with TCGAGA (a sequence previously shown to disable TATA element function). A separate construct mutated the distal Sp1 site (GGGGCGG → GCCCGGG). The mutated promoter sequences were stably transfected into L cells with the CAT gene fused downstream of +65 bp of MT-I. In the wild-type pMTCAT pool, the +1 RNA dominated and was metal-inducible; in the TATA-mutant pool, the +1 RNA was nearly eliminated and the upstream RNAs became the most prevalent transcripts but remained refractory to metal induction. The Sp1 mutation had no major effect on either the +1 or the upstream RNA production. Thus the TATA element is necessary for +1 RNA production and for metal induction of +1 RNA, but is *not* necessary for upstream RNA production, which is mechanistically TATA-independent.

### Independent regulation of the two classes

The paper's central conclusion is that the upstream RNAs are mechanistically TATA-independent (unaffected by TATA mutation) while the +1 RNA is TATA-dependent (eliminated by TATA mutation). Both classes are properly spliced and polyadenylated, both are RNA polymerase II products, and they differ *only at their 5' site of initiation*. The choice between TATA-dependent and TATA-independent modes is regulated in a tissue-specific manner: the testis germ-cell pattern (upstream RNAs predominate, metal refractory) is intrinsic to MT-I promoter architecture and is not a property of any single cell-type-restricted accessory factor. Mutation of the TATA element alone in L cells does not switch the L-cell pattern to a germ-cell pattern, implying additional layers of regulation beyond TATA-dependence.

## Key numbers

- **Cd induction of +1 MT-I RNA (across cells/tissues surveyed except testis):** ≥40% increase, commonly ≥25-fold.
- **Group A (TATA-dependent +1) RNA share of total MT-I RNA in testis:** ~15%.
- **Effect of TATA mutation on +1 RNA in stably transfected L cells:** +1 RNA virtually eliminated; upstream RNAs become the most prevalent species.
- **Decrease of longer (upstream) MT-I transcripts after Cd treatment in L cells:** 40-60%.
- **Acute Cd dose (mouse subcutaneous, sacrifice 3 h post-injection):** 200 µL of H₂O or 0.9% NaCl with or without CdSO₄ at 10 mg Cd/kg body weight.
- **Chronic Cd pretreatment dose:** 0.25 mg Cd/kg/day (subcutaneous CdSO₄ in saline) for 12 days; saline control n=5; Cd pretreated n=6.
- **High-dose Cd challenge after pretreatment:** single 1 mg Cd/kg subcutaneous injection 13 days post-treatment.
- **Effect of high-dose Cd after saline pretreatment:** testes "weighed approximately half as much" as saline-control testes (n=6 high-dose Cd arm; n=5 saline-only control) at 13 days.
- **Effect of high-dose Cd after Cd pretreatment:** "no discernible decrease in testicular weight" (n=4); body and kidney weights unaffected in either arm.
- **MT-I transcription start site groupings (numbering relative to the +1 start site, per Fig. 2 legend, p. 5649):** A = +3 to -1; B = -25 to -35; C = -39 to -75; D = -51 to -119; E = -82 to -146; F = -133 to -146.
- **Approximate position of canonical MT-I TATA element:** -25 to -30 (TATAAA → TCGAGA in the TATA-mutant construct pMCT).
- **Approximate positions of two Sp1 sites:** distal ~-145 (mutated in pMCSPA: GGGGCGG → GCCCGGG); proximal ~-50.

## Methods (brief)

Animals: male DBA/2J and C57BL/6J mice (Jackson Laboratories, Bar Harbor, Maine) and BDF₁ mice (DBA × C57BL/6J offspring), 8 to 15 weeks old. Strain comparison: no strain-related variation in MT RNA expression noted. Additionally 15-week-old DBA/2J mice were used for the testicular toxicity protection experiments.

Acute Cd induction: mice injected subcutaneously with 200 µL of H₂O or 0.9% NaCl ± CdSO₄ (10 mg Cd/kg body weight), sacrificed 3 h later by cervical dislocation, tissues flash-frozen in liquid nitrogen and stored at -80°C until RNA isolation.

Chronic Cd pretreatment (with reference 42 protocol, CdSO₄ substituted for CdCl₂): daily subcutaneous injection of saline (n=5) vs CdSO₄ at 0.25 mg Cd/kg/day (n=6) for 12 days; bodies, testes, and kidneys weighed; no body or organ weight differences seen at this dose. Subsequent single high-dose challenge: 1 mg Cd/kg per mouse (n=6 pretreated; n=4 saline-pretreated control), tissues examined 13 days later for testicular weight.

Cell lines: L-cell derivative P cells (described in reference 29) maintained in dialysed calf serum. Eight hours prior to harvesting for RNA, fresh medium with or without 6 µM CdSO₄ was added.

Transfections: cells plated at 3.7 × 10⁵ per 10-cm dish; each plate received 10 µg of test plasmid (pMTCAT, pMCT, pMCSPA, or pBluescript KS⁻ control), 10 µg of L cell DNA, and 1 µg of pY3 (hygromycin resistance) by calcium phosphate coprecipitation. Selection in hygromycin (200 µg/mL) for 17 days. More than 90 separate colonies were obtained on each plate. Each test plasmid was used to transfect three plates; the pools of colonies were maintained and analysed separately.

RNA preparation: from L cells per reference 11 with a second organic extraction; from mice per reference 11; testis cell-type and mutant mouse RNAs were provided by Kelly Thomas and Mel Simon and by Debra Wolgemuth (samples per references 53 and 54). LiCl precipitation; A₂₆₀ concentration determination. DNase treatment did not alter results.

RNase protection assays: per references 29 and 56 with modifications including bis-acrylylcystamine acrylamide gels (Bio-Rad). LKB XL densitometer for quantitation. Type III preparation of small yeast RNAs (Sigma R-7125) used as carrier RNA.

Primer extensions: per reference 27, using avian myeloblastosis virus reverse transcriptase (Life Sciences). 5'-end-labelled oligonucleotide primers, signal linearity confirmed by analysing dilutions of a single RNA sample.

Constructs and probes: four MT-I probes used (5'-end genomic probe pSP6-MT-I, full-length cDNA probe pMT-IΔi, 3'-end cDNA probe pMT-IBH, internal cDNA probe pMT-INT). Plasmid pMTCAT (described in reference 30) is a pBluescript KS⁻ derivative containing the MT-I promoter EcoRI-BglII fragment fused to the chloramphenicol acetyltransferase (CAT) gene of pSV2cat and SV40 splicing and poly(A) addition signals. Oligonucleotide-directed mutagenesis created pMCSPA (Sp1 distal site mutant: GGGGCGG → GCCCGGG) and pMCT (TATA mutant: TATAAA → TCGAGA). pBS⁻ was a Stratagene KS⁻ derivative.

Funded by NIH, the Rita Allen Foundation, the Lucille P. Markey Charitable Trust (to B.W.W.), and a National Research Service Award (5 T32 GM 07616-11) from the National Institute of General Medical Sciences (to P.G.).

## Implications

- **Certification:** The paper provides no occurrence data for any food matrix, no exposure data for any human population, and no regulatory threshold-setting information. It does not move any HMTc threshold or category. Its value to HMTc is indirect — it is part of the mechanistic case (cited downstream by metallothionein reviews on the wiki) that metallothionein induction is the primary cellular defence against Cd at the transcriptional level in *most* tissues, with the important qualification that testis germ cells do not exhibit this induction response and therefore rely on different (zinc-mediated, pretreatment-induced) tolerance mechanisms. This nuance is preserved when the wiki frames metallothionein as a universal Cd defence.
- **App:** No routing to ingredient or product pages. The organisms studied are laboratory mice and cultured cell lines; the work is mechanistic biochemistry and molecular biology, not food testing. Empty `ingredients`, `products`, `matrices`, `jurisdictions`.
- **Courses:** Useful as a primary-literature anchor for the "compound promoter" architecture of metal-responsive genes in any course module on metallothionein biology or transcriptional regulation of stress-response genes. The paper is the canonical demonstration that a single gene can encode mechanistically distinct TATA-dependent and TATA-independent transcripts with divergent tissue distribution and divergent inducibility — useful pedagogy for explaining why "metallothionein induction" is not a single uniform response across mammalian tissues. Pair with [[ruttkay-nedecky2013-metallothionein-oxidative-stress]], [[thirumoorthy2007-metallothionein-overview]], and [[yang2024-metallothionein-comprehensive-review]] for the broader context.
- **Microbiome:** Not relevant. The paper is on mouse mammalian tissues and cell lines; no gut microbiome or microbial population is studied.

## Limitations

- The TATA mutation construct uses substitution of TCGAGA for TATAAA; the authors note that the double mutant TAGAGA had been shown previously to disable TATA function in studies using yeast TFIID complementation of a mammalian extract, and that the binding affinity of yeast TFIID for the double mutant adenovirus major late promoter is similar to its affinity for nonspecific DNA. The TCGAGA substitution is thus a strong negative control but is not formally proved to eliminate all TATA function in the *in vivo* mouse-cell context of this paper; some residual +1 RNA persists in the TATA mutant (Figure 5 lanes 3 and 4), albeit with 5'-end heterogeneity characteristic of TATA-element ablation.
- The "TATA-independent" RNA classification is operationally defined by persistence after TATA mutation. The authors acknowledge that this does not prove the upstream RNAs are produced by a wholly distinct promoter complex; the discussion considers two alternative models (closely related DNA-protein complexes with distinct components determining TATA-dependence vs TATA-independence; or mutually exclusive accessory factor complexes). The data presented cannot discriminate between them.
- The conclusion that "metallothionein protein cannot account for Cd resistance in testis" rests on the observation that MT-I and MT-II RNAs are not detectably induced in testis by either acute Cd or 12-day low-dose pretreatment. The paper does not directly measure metallothionein protein levels in testis (only RNA), and it does not rule out that constitutive (uninduced) baseline metallothionein protein could be load-bearing for tolerance. The conclusion as written is consistent with the data but is a conservative interpretation.
- Sample sizes are small: n=4 to n=6 per arm for the testicular toxicity protection experiments; transfection pools are three independent transformant pools per construct. No formal statistical comparison between conditions is reported beyond the consistency of the pattern across pools and tissues.
- Densitometric quantitation of autoradiographs (Figure 5 legend) cautions that autoradiographic exposure necessary to see upstream RNAs caused the +1 RNAs of the wild-type and Sp1-mutant lanes to be underrepresented. Quantitative comparison across lanes is therefore qualitative-magnitude only.
- The work uses radiolabelled RNase protection and primer extension as the readouts. The Northern blot results are mentioned as confirmatory (no gross structural differences in the body of the RNA between upstream and +1 species) but the data are described as "data not shown" rather than presented. The conclusions about splicing and 3'-end processing of upstream RNAs rest on the full-length cDNA probe protection pattern (Figure 3 lanes 1-7) which shows complementarity to the predicted 3' protection product.
- No occurrence data; no consumer exposure data; no regulatory implication.

## Wiki pages this source may touch

- [[metals/cadmium]]

## Verification notes

**Existing-page check.** DOI grep (`10.1128/mcb.10.11.5646-5654.1990`), raw_handle grep (`MFK_31-tissue-specific-expression-of-metallothionein-i`), and cite-key glob (`garrity*`, `wold*`, `*mt1*promoter*`, `*metallothionein-i-promoter*`) over `wiki/sources/` on 2026-06-08 returned no matches. The only "wold" hit (`woldegiorgis2015-ethiopian-edible-mushrooms-minerals`) is a Yebio Woldegiorgis paper on Ethiopian mushrooms, unrelated. This is a NEW source page — no prior version to merge-enhance.

**DOI provenance.** The PDF first page shows the standard ASM citation format `MOLECULAR AND CELLULAR BIOLOGY, Nov. 1990, p. 5646-5654, Vol. 10, No. 11, 0270-7306/90/115646-09$02.00/0`. ASM backfilled DOIs to legacy content under the pattern `10.1128/mcb.<vol>.<issue>.<startpage>-<endpage>.<year>`. The DOI `10.1128/mcb.10.11.5646-5654.1990` is the canonical resolver for this article (PMID 2247075 confirms the same article via the National Library of Medicine record).

**Evidence tier.** B. This is a primary peer-reviewed laboratory study in a mouse mammalian model with cell-line validation. Sample sizes are small (n=4-6 per arm for the toxicity protection arms; three transfection pools per construct); no formal between-arm statistical tests are presented. Tier B is appropriate per `docs/conventions` — A-tier is reserved for well-powered primary studies with formal statistics or authoritative agency monographs; this paper does not clear that bar. Its historical importance (foundational characterisation of the MT-I compound promoter; widely cited in metallothionein-biology reviews) does not elevate its evidence weight for HMI's contamination-and-exposure-focused taxonomy.

**Metals frontmatter.** `Cd` only. The paper uses CdSO₄ (and references CdCl₂ in the cited dosing protocol reference 42) as the sole metal inducer. No other metal is dosed or measured. Zinc (Zn) is mentioned in the discussion as the canonical co-physiological metal for metallothionein and in the context of zinc-driven tolerance mechanisms in the protection experiment, but no Zn measurement is reported. Copper and the MT-II gene are mentioned in the discussion only.

**Ingredients, products, matrices, jurisdictions frontmatter.** All empty. The biological samples are mouse tissues (testis, kidney, brain, spleen, liver, intestine, muscle) and cultured cell lines (P cells from L cells; NIH 3T3). No food matrix, supplement matrix, or personal-care matrix is sampled. The work is conducted at the California Institute of Technology (USA) but no regulatory or jurisdictional frame applies; the work is basic biochemistry and molecular biology. `jurisdictions:` remains empty per the Nagel 1989 sibling-page pattern.

**Sample size.** `null`. The paper does not state a single sample-size count; per-experiment n values appear as n=4-6 per arm for the testicular protection experiments and three transfection pools per construct, with the densitometric quantitation aggregated across multiple independent preparations. The `sample_population` field summarises the experimental units.

**Brand firewall (Part 12).** No commercial brand names appear in any contamination-value or product-evaluation context. Vendor mentions are limited to scientific-method context: Jackson Laboratories (Bar Harbor, Maine) for the mouse strains; Bio-Rad and LKB for densitometry/electrophoresis equipment; Sigma for the carrier yeast RNA; Stratagene for the pBluescript vector; Bethesda Research Laboratories for the pT3/T7-19 cloning vector; Boehringer is *not* mentioned in this paper (that was the Nagel 1989 sibling). All vendor references are standard scientific-method vendor mentions allowed under the verification-checklist Exception 2 for analytical methodology context. No food, supplement, or personal-care brand is named. No firewall action required.

**HMTc firewall (Part 2).** The paper contains no HMTc-threshold language, no claims about HMI certification levels, no consumer-audience risk advisories, and no policy-relevant content. The discussion is entirely mechanistic biochemistry and molecular biology. No firewall action required.

**Speciation note.** The paper uses "Cd" generically; experimental doses are administered as CdSO₄ (and as CdCl₂ in the cited pretreatment protocol of reference 42). No methylated, organic, or oxidation-state-specific Cd species are reported. The HMI canonical analyte symbol for cadmium is `Cd` (no isotope/species distinction needed;).

**Date arithmetic.** Received 7 June 1990; accepted 7 August 1990; published November 1990 (Vol. 10, No. 11). Consistent with `year: 1990` frontmatter and DOI year `1990`.

**Raw-handle stem.** The MFK_31 handle stem `MFK_31-tissue-specific-expression-of-metallothionein-i` is taken from the Kimi-generated PDF filename `31_Tissue-Specific_Expression_of_Metallothionein-I_Gene.pdf`. The Kimi label uses "Metallothionein-I Gene" as the descriptive index-card title; the actual journal article title is "Tissue-Specific Expression from a Compound TATA-Dependent and TATA-Independent Promoter". The discrepancy between handle stem and actual title is a known artifact of the Kimi indexing and is documented here rather than corrected, because changing the raw_handle would lose the audit trail back to the source folder.

**Scope fit.** The paper sits in the "Black Market Peptide Metal Survey / heavy_metals_peptides" Manual Fetch Kimi folder alongside [[ruttkay-nedecky2013-metallothionein-oxidative-stress]], [[thirumoorthy2007-metallothionein-overview]], [[yang2024-metallothionein-comprehensive-review]], [[grill1989-phytochelatins-heavy-metal-binding-peptides-plants]], [[nagel1989-cadmium-resistant-chlamydomonas]], and other peptide/metal mitigation papers. Per the 2026-06-02 scope commit `3f47f95 — scope: mitigation/remediation is in-scope, not a skip`, peptide/metallothionein mechanism papers are in-scope as background for the mitigation-evidence chapter. This 1990 primary-experimental paper is the foundational mechanism of metallothionein-I gene transcriptional regulation that the contemporary reviews lean on.

**Audit subagent (2026-06-08) verdict: REVISE → applied.** Five checks returned two ❌ on Check 1 (numerical fidelity) and ✅ on Checks 2/3/4/5 (slug vocabulary, speciation/methods, Part 12 brand firewall, Part 2 HMTc firewall). Both ❌ findings were independently re-verified against the PDF and applied:
- **Finding 1 (Group C boundary, ❌):** verified PDF Fig. 2 legend on p. 5649 gives "C, −39 to −75" as the boundary, not "C = −39 to −45" as originally written. The wiki had the wrong upper boundary for Group C in two places (the "six start-site groups" paragraph and the Key numbers list). Corrected both occurrences to "C = −39 to −75" and added the page-citation anchor.
- **Finding 2 (n attribution for high-dose Cd protection arms, ❌):** verified PDF p. 5647 col. 2 states "The testes of mice given a single injection of 1 mg of Cd per kg after pretreatment with saline (n = 6)…weighed approximately half as much as those from mice injected with saline after the saline pretreatment (n = 5)" and "Mice pretreated with CdSO₄ showed no such decrease in testicle weight (n = 4)." The wiki had labelled the half-weight (saline-pretreatment → Cd-challenge) arm as n=4; the correct n for that arm is n=6, with n=5 the saline-only control. The n=4 belongs to the Cd-pretreated → Cd-challenge "no decrease" arm. Rewrote the bullet to reflect the source's three-arm structure (n=6 Cd-after-saline, n=5 saline-only control, n=4 Cd-after-Cd).

2 findings, 2 applied, 0 rejected. Audit subagent ID a9f6f632d54da1a39.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [de0b14e7c](https://github.com/paleofoundation/heavymetalindex/commit/de0b14e7c) | 2026-06-08 | minor | Narrative text revised |
| [9792010ac](https://github.com/paleofoundation/heavymetalindex/commit/9792010ac) | 2026-06-08 | major | 14 sections added; narrative text revised |
<!-- END: hmi-page-history -->
