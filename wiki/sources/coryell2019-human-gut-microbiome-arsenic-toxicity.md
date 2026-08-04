---
type: source
cite_key: coryell2019-human-gut-microbiome-arsenic-toxicity
title: "The Human Gut Microbiome's Influence on Arsenic Toxicity"
authors: ["Michael Coryell", "Barbara A. Roggenbeck", "Seth T. Walk"]
year: 2019
publication: "Current Pharmacology Reports 5(6):491-504"
doi: "10.1007/s40495-019-00206-4"
source_type: peer-reviewed
evidence_tier: A
license: cc-by
raw_path: "raw/markdown/FM_6953987/FM_6953987.md"
access_url: "https://doi.org/10.1007/s40495-019-00206-4"
metals: [iAs, tAs]
ingredients: []
products: []
matrices: [microbiome, ars-operon, arsM-methyltransferase, aioAB-arxAB-oxidase, arrAB-respiration, thiolation, faecalibacterium-prausnitzii, germ-free-mouse]
jurisdictions: [US]
sample_n_notes: "Comprehensive review article from Montana State University Microbiology & Immunology; synthesizes ~150 primary papers on microbial arsenic biotransformation pathways in the human gut"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-11
---

# Coryell, Roggenbeck, Walk 2019 — The human gut microbiome's influence on arsenic toxicity

## Overview

This Current Pharmacology Reports review from Montana State University (Coryell laboratory, Department of Microbiology and Immunology) is the canonical synthesis of microbial arsenic biotransformation in the human gastrointestinal tract. The paper maps the complete arsenal of bacterial arsenic-handling enzymes (ars operon: arsR, arsB/acr3, arsC, arsA, arsD, arsH, arsI, arsJ, arsK, arsN, arsP; methyltransferase arsM; arsenite oxidases aioAB and arxAB; arsenate respiratory reductase arrAB; thiolation pathways) and the compartment-specific conditions of the oral cavity, stomach, small intestine, and large intestine that constrain which pathways can operate where. The review also synthesizes germ-free mouse, antibiotic, and AS3MT-knockout data demonstrating that the microbiome contributes to host arsenic excretion and protection from toxicity, with inter-individual variation in microbiome composition proposed as a partial explanation for the longstanding observation that arsenicosis severity varies dramatically among people with similar exposure. The paper is the right starting point for any wiki section that aims to capture the microbiome dimension of arsenic toxicity beyond the host AS3MT-pathway framework.

## Key concepts and findings

### Microbial arsenic biotransformation pathways

| Pathway / gene cluster | Function | Toxicological direction |
| --- | --- | --- |
| ars operon (arsR/B/C/A/D/H/I/J/K/N) | Detoxification/efflux from bacterial cell | Neutral for host (protects bacterium, does not help host) |
| arsM (methyltransferase) | Methylates iAs to MMA and DMA, including trivalent intermediates | Can worsen host toxicity by producing more reactive trivalent methylarsenicals (MMA(III), DMA(III), TMA(III)) |
| aioAB / arxAB (oxidases) | Convert As(III) to less toxic As(V) | Beneficial for host |
| arrAB (respiratory reductase) | Use As(V) as terminal electron acceptor (anaerobic respiration) | Can mobilize bound As(V) to soluble form |
| Thiolation (non-enzymatic, sulfide-dependent) | Replace As-O bonds with As-S; produces thioarsenicals (MMMTA(V), DMMTA(V)) | Pentavalent thioarsenicals carry cytotoxicity comparable to trivalent oxoarsenicals |
| ArsP, ArsH, ArsI | Less-characterized organoarsenic transformations | Unknown in human gut context |

### Compartment-specific gut environments

| Compartment | pH | Oxygen | Implication for As metabolism |
| --- | ---: | --- | --- |
| Oral cavity | 6.2-7.6 | Aerobic | Aerobic oxidation pathways feasible (aioAB) |
| Stomach | 1.5-3.5 | Microaerobic | Acidic conditions favor As(III) protonation; some bacteria survive |
| Small intestine | 6-7.4 | Microaerobic to anaerobic | Mixed pathways; absorption window |
| Large intestine | 5.7-6.7 | Anaerobic | arxAB (anaerobic oxidase), arsM, arrAB, thiolation pathways dominant |

### Host-microbiome-arsenic interaction evidence

The review summarizes germ-free and antibiotic-treated mouse data documenting:
- Antibiotic-treated mice excrete less arsenic in stool and accumulate more in organs (liver, spleen, heart, lung) than controls when both groups are exposed to 25 ppm iAs(V).
- AS3MT-knockout mice are hypersensitive to arsenic when germ-free; survival is restored by colonization with human fecal microbiota.
- Microbiome alpha diversity correlates with arsenic survival in mouse models, with substantial inter-individual variation.

### Methylation paradox

The review highlights the methylation paradox: arsenic methylation by AS3MT (host) and arsM (microbial) was historically considered detoxification, but pentavalent methylated intermediates may be reduced to trivalent forms while still bound to the enzyme, producing more reactive end products (MMA(III), DMA(III)) than the parent iAs. SAM depletion through methylation also has secondary effects on host DNA and histone methylation. The review proposes that microbiome-driven methylation may be a meaningful source of these trivalent intermediates in the human gut, independent of host AS3MT.

### Open questions identified

- Direct human GIT measurement of microbial As biotransformation has not been performed; existing data is from environmental, in vitro, and model-organism studies.
- The clinical significance of microbiome-mediated As biotransformation in actual arsenicosis populations is untested.
- Whether microbiome composition can predict who will develop disease from arsenic exposure remains an open empirical question.
- Whether the gut microbiome is a viable intervention target for reducing arsenic toxicity in exposed populations is untested.

## Methods (brief)

Comprehensive narrative review. The paper draws on approximately 150 primary references covering environmental microbiology, host arsenic toxicology, germ-free mouse models, antibiotic-perturbation studies, and clinical epidemiology where available. Compartment-by-compartment gut analysis is constructed from the gut microbiology literature. Pathway-by-pathway enzymatic synthesis draws on the bacterial genetics and crystallography literature.

## Implications

- Certification: HMTc threshold development for iAs in food categories should acknowledge that microbiome composition modulates exposure-to-effect dose-response. Vulnerable populations include those with reduced microbial diversity (antibiotic-treated, IBD, very young infants pre-microbiome-maturation). The chronic TDI framework is a per-host average that does not capture microbiome-driven inter-individual variation.
- Microbiome / clinical: This is the canonical wiki reference for the ars operon, arsM, aioAB/arxAB, arrAB, and thiolation pathways. All gut-microbiome and metals microbiome pages on the wiki should cite this paper as the synthesis anchor for As-microbiome content.
- App: Microbiome-state queries (recent antibiotic use, IBD, infancy) may modulate As risk profiles by 2-fold or more based on available mouse data; this is an app-layer input that the current iAs-only framework misses.
- Courses: Foundational reference for microbiome-aware toxicology training. Most undergraduate and many graduate toxicology programs still teach As metabolism as a purely-host AS3MT process; this paper is the gateway to the modern framing.

## Wiki pages updated on ingest

- [[metals/arsenic]]
- [[metals/arsenic-inorganic]]
- [[microbiome/arsenic-gut-axis]]
- [[microbiome/arsenic-microbial-methylation]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 10 sections added; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | 10 sections removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
