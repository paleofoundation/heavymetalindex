---
type: methodology
methodology_id: corpus-genesis-2026-04
title: "Corpus Genesis — April 2026 Assembly"
audience: [regulator, educator]
updated: 2026-04-25
sources: 0
---

# Corpus Genesis — April 2026 Assembly

This page documents how the working corpus of the Heavy Metal Index was assembled. It is the answer to the question "how do you know this is the relevant literature?" The wiki's epistemic standing depends on this answer being honest, specific, and reproducible.

## What the corpus is

The working corpus is 23,262 unique PDFs, assembled in April 2026, comprising peer-reviewed research articles from the PubMed Central Open Access Subset and a curated set of regulatory documents from major food-safety agencies. The corpus is the source material from which all source pages, ingredient profiles, metal pages, and synthesis claims in this wiki are drawn. Every wiki claim traces to a source page, and every source page traces to a file in this corpus.

The corpus is intentionally bounded by what is publicly accessible. Papers behind paywalls, commercial datasets, and copyrighted books are not included unless individually licensed and added through a separate workflow documented per source. This is an inclusion criterion, not a limitation hidden in fine print: the wiki's claim is "we have curated the open-access literature on heavy metals across the food supply chain," not "we have the complete literature in all access tiers."

## How the corpus was assembled

The assembly was executed on April 15, 2026 using two scripted PubMed Central searches plus a targeted regulatory document scrape. Each component is documented below in enough detail that an external reviewer could reproduce the search and obtain a comparable corpus, allowing for the natural growth of the PMC open-access subset between the original assembly date and any later reproduction.

### Component one: food metals search

A Python script (`download_food_metals.py`, preserved in the project archive) executed 240 search queries against the NCBI PubMed Central E-utilities API. The query structure was the cross-product of nine target metals and twenty-five food-context categories, plus fifteen targeted special-topic queries.

The nine metals were arsenic, cadmium, lead, mercury, chromium, nickel, aluminum, tin, and manganese. The twenty-five food-context categories were rice, vegetables, fish and seafood, meat and poultry, dairy, cereals and grains, spices and herbs, tea and coffee, fruit, water and beverages, dietary exposure, infant and baby food, processed food, soil and crop, health risk, mushrooms and fungi, nuts and seeds, legumes, seaweed and algae, honey, wine and beer, chocolate and cocoa, food packaging, bioavailability, and market survey.

The fifteen special-topic queries targeted arsenic speciation, mercury and methylmercury, lead exposure in children, cadmium and kidney effects, chromium speciation including hexavalent chromium, nickel allergy, aluminum and cookware, tin and canned foods, manganese neurotoxicity, provisional tolerable daily and weekly intake values across metals, global food contamination patterns, and four multi-metal queries covering food safety generally, food monitoring, risk assessment, and bioaccumulation.

Each query used the PMC E-utilities `esearch.fcgi` endpoint with `retmax=500` and the title-and-abstract field qualifier `[tiab]` to scope matches. Boolean operators (AND, OR) combined metal and food terms within each query. Results were collected into a deduplicated set keyed by PMC ID; papers that appeared in multiple queries were counted only once toward the running total.

The food metals search returned approximately 75,000 raw query hits, which collapsed to **27,216 unique PMC IDs** after within-script deduplication. Deduplication rates by metal are documented in the assembly log: arsenic 21%, cadmium 21%, lead 11%, mercury 49%, chromium 48%, nickel 45%, aluminum 25%, tin under 1%, manganese 36%. The wide variation reflects how broad each metal's terminology is in the literature; lead and tin produce mostly unique results because the search terms map to specific industrial contexts, while mercury and chromium produce highly clustered results because those metals tend to be studied in multi-metal investigations that are recaptured by overlapping queries.

### Component two: CPG production-pipeline search

A second Python script (`download_cpg_pipeline.py`, preserved in the project archive) executed 97 search queries focused on heavy metal contamination across the consumer packaged goods production pipeline. The query taxonomy spanned ten pipeline stages: raw materials and agricultural inputs, food processing and manufacturing, packaging and food contact materials, storage and distribution, specific product categories, analytical methods and monitoring, health effects and risk assessment, geographic and industry contexts, environmental contamination sources, and mitigation strategies.

The pipeline search returned **19,613 unique PMC IDs** after within-script deduplication. The script applied the same `esearch.fcgi` parameters and PMC-ID-based deduplication logic as the food metals script.

### Cross-script overlap

The two scripts deduplicated within themselves but did not deduplicate between each other. Many PMC IDs appeared in both result sets, especially for high-volume metals (lead, cadmium, arsenic) studied in food-supply-chain contexts. The actual count of unique papers across the two scripts combined is therefore lower than the naive sum of 27,216 plus 19,613.

### Component three: regulatory document scrape

Thirty-one regulatory documents were collected from a targeted scrape of agency websites, distinct from the PMC searches. Sources included United States agencies (FDA, EPA Integrated Risk Information System, ATSDR, NTP), European agencies (EFSA, ECHA), international bodies (WHO and FAO joint Codex Alimentarius programs, JECFA, the Minamata Convention secretariat), state-level California (OEHHA Proposition 65), and national agencies including India's FSSAI. The 31 regulatory documents were assembled into the same working corpus folder as the PMC PDFs.

### Download and filtering

PDFs for the PMC searches were downloaded directly from the PMC Open Access AWS S3 bucket at `pmc-oa-opendata.s3.amazonaws.com`. The download script verified each downloaded file by checking the PDF magic bytes (`%PDF` header) and a minimum file size of 50 kilobytes to exclude HTML error pages, redirect responses, and stub records. Files that failed either check were not saved.

Not every PMC ID identified in search has a downloadable open-access PDF in the S3 repository. The PMC Open Access subset is a subset of PMC overall; some papers are indexed in PMC but only available through journal sites, and some are not available as PDFs at all. The expected download success rate for PMC open-access searches is 60 to 70 percent, consistent with what the corpus delivered.

This download success filter is the largest single source of attrition between identified-and-eligible papers and the working corpus. It is a real limitation: any paper that PubMed indexed but that was not in the PMC open-access S3 subset on April 15, 2026 is not in this corpus.

### Final consolidation

The two PMC downloads and the regulatory documents were merged into a single working folder. The merged folder reflects deduplication-by-filename through the two scripts' naming conventions (`FM_{PMC_ID}.pdf` for food metals and `CPG_{PMC_ID}.pdf` for CPG pipeline) plus the 31 regulatory documents named per their agency conventions. Where the same PMC ID appeared in both scripts, the corresponding files were treated as duplicates of each other.

The final consolidated corpus, as committed to the working corpus directory `~/Desktop/27k/`, contains **23,262 PDF files**.

## Verification: triage.py SHA-256 manifest

After assembly, the corpus was processed by `triage.py` v1.2.0, which computed a SHA-256 content hash for every PDF and produced a canonical manifest with one row per file. The triage script applies content-based fingerprinting independent of filenames, providing an independent verification of the merging-and-deduplication step.

Triage results from manifest `manifest_2026-04-22T172232Z.csv`:

- 23,262 input files
- 23,134 unique SHA-256 hashes (byte-distinct files)
- 128 exact duplicate pairs (same SHA-256, different filenames)
- 173 files in 72 near-duplicate clusters (different SHA-256 but high textual overlap, likely preprint-vs-published or cross-script-different-handle pairs)
- 0 likely Certificates of Analysis (firewall verification)

The 128 exact duplicates and 72 near-duplicate clusters are not counted as separate papers in any synthesis. When the same paper appears under two filenames (for example, once as `FM_3750310.pdf` from the food metals script and once as `CPG_3750310.pdf` from the CPG script), only one source page is created in the wiki. This is documented in the dedup log (`exact_duplicates_2026-04-22T172232Z.csv`).

The triage manifest is the canonical handle for every paper in the corpus. Each paper's filesystem identifier (`FM_XXXXXXX` or `CPG_XXXXXXX`) is paired with its SHA-256 hash and its detected metadata (year, DOI where present, license, publisher, detected metals, detected matrices, detected jurisdictions). Wiki source pages cite both the filesystem handle and the SHA hash so any wiki claim can be traced to the exact byte-identical file.

## Honest acknowledgments

This methodology has limitations that the wiki's epistemic positioning depends on stating clearly rather than concealing.

### Open-access only

The corpus is bounded by what is publicly accessible without paywall or institutional license. This excludes substantial bodies of literature published in journals that operate under traditional subscription access, and it skews the temporal distribution of the corpus toward more recent papers because open-access publishing has grown rapidly since the early 2010s.

The triage manifest confirms this skew: 79.8 percent of the corpus is from 2020 or later, and 30.5 percent is from 2025 alone. The 2020-and-earlier literature is under-represented relative to its actual scientific weight in the field. Foundational papers from the 1970s through 2010s, particularly in journals like the New England Journal of Medicine, JAMA, the Lancet, and Cell that historically published behind paywalls, are largely absent from this corpus.

This skew is partially mitigated by three corpus features. First, the regulatory documents component captures agency reports that synthesize and cite older primary literature, providing a path back to foundational findings even when the original papers are not in the corpus. Second, several authoritative textbooks (Handbook on the Toxicology of Metals, Casarett & Doull's Essentials of Toxicology, Patty's Toxicology) have been licensed and ingested separately into the wiki under the `copyright-licensed-private` license class; these textbooks synthesize the older literature that the open-access corpus under-represents. Third, where wiki synthesis touches a topic that depends on pre-2010 work, this dependency is flagged on the relevant page and on `wiki/synthesis.md`.

The plaintiff's-expert response to "you are missing important older literature" is "we acknowledge the open-access bias in the primary literature corpus; the regulatory documents and licensed textbooks bring older synthesized findings into the wiki; specific older studies that the wiki depends on are individually traceable through those sources."

### S3 availability filter

The download success rate of 60 to 70 percent on PMC searches means that approximately 30 to 40 percent of papers identified by query were not retrievable as PDFs from the open-access S3 repository on April 15, 2026. Some of these papers may have been later added to the S3 subset; some may exist only in formats other than PDF in PMC; some may have access restrictions that prevent S3 inclusion despite PMC indexing.

This is a real exclusion. Identified-but-not-retrievable papers represent a known gap that the assembly date pins down. Reproducing the search at a later date would yield a different (likely larger) downloadable set.

### English-language and PubMed-language bias

The PMC Open Access Subset is dominated by English-language publications. Heavy metals research published primarily in Chinese, Korean, Japanese, Spanish, or Portuguese is less likely to be in PMC and therefore less likely to be in this corpus. This is significant for the metals-and-rice literature (substantial Chinese contribution), the metals-and-fish literature (substantial Japanese contribution), and the cocoa contamination literature (substantial South American contribution).

The triage manifest shows English-dominant publishers (MDPI 30%, PLOS 16%, Frontiers 9%, Nature 8%) reflecting this bias.

### Single-snapshot assembly

The corpus was assembled in a discrete operation on April 15, 2026. PMC adds papers continuously, regulations update, new studies appear. The corpus reflects what was searchable, indexed, and downloadable on that single date. Papers published or made open-access after April 15, 2026 are not in the working corpus and would require a delta search to incorporate.

The wiki tracks corpus update operations via `wiki/log.md`. Any future corpus expansion (additional PMC pulls, supplementary regulatory scrapes, individual paper additions) is logged with date, scope, and provenance.

### The merging-and-deduplication step

The two PMC scripts deduplicated within themselves during search; downloads were merged into a single folder; the final 23,262 figure reflects the merged set after attrition through the S3 availability filter. The within-script deduplication is well documented in the script source. The between-script deduplication is implicit in filesystem behavior (same PMC ID would produce different filenames per the script naming conventions, so cross-script duplicates are caught by the SHA verification rather than by an explicit script).

The SHA verification in `triage.py` is the authoritative check on final corpus composition. It identified 128 byte-identical duplicate pairs and 72 near-duplicate clusters in the working corpus, which the wiki's source-page creation logic handles per the deduplication rule (one source page per unique paper, with cross-references for cluster members).

### What this corpus is not

This corpus is not a systematic review in the formal Cochrane sense. A formal systematic review would specify inclusion and exclusion criteria for the substantive content of each paper (study type, sample size threshold, analytical method standards, risk-of-bias assessment) before any paper is read, and then screen the corpus against those criteria. This corpus reflects substantive curation at the wiki level (per ingredient, per metal, per regulation) rather than at the corpus level. The corpus boundary is "open-access PMC literature plus targeted regulatory scrape on these queries on this date," and substantive selection happens during ingestion when source pages are evaluated against the wiki's evidence-tiering and synthesis methodology.

This is a defensible position. It mirrors how living evidence reviews handle scale: define the corpus boundary as broadly and reproducibly as possible, then apply substantive selection at synthesis time on a per-claim basis. The Cochrane positioning works because the wiki's synthesis methodology (per-page methodology section, evidence tiering, contradiction flagging, full resynthesis triggers) is rigorous, not because the corpus boundary itself is a formal inclusion-criteria filter.

## Reproducibility

An external reviewer who wished to evaluate the corpus could reproduce the assembly using the preserved scripts and progress logs. The following artifacts are preserved in the project archive and constitute the reproducibility record:

- `download_food_metals.py` — the full search-and-download script for the food metals component, including all 240 query strings.
- `download_cpg_pipeline.py` — the full search-and-download script for the CPG pipeline component, including all 97 query strings.
- `food_metals_pmc_ids.csv` — the complete list of 27,216 PMC IDs identified in the food metals search, with direct S3 URLs.
- `cpg_pipeline_pmc_ids.csv` — the complete list of 19,613 PMC IDs identified in the CPG pipeline search, with direct S3 URLs.
- `README_food_metals.md`, `README_cpg_pipeline.md`, `README_MASTER.md` — original documentation of the search strategy and scope.
- `regulatory_docs_heavy_metals.zip` — the 31 regulatory documents from the targeted agency scrape.
- `manifest_2026-04-22T172232Z.csv` — the canonical SHA-256 manifest of the 23,262 working corpus, generated by triage.py.
- `exact_duplicates_2026-04-22T172232Z.csv` — the dedup log identifying 128 byte-identical pairs.
- The terminal log from the April 15, 2026 search-and-download run (partial; truncated at query 222 of 240 in the recovered log).

Reproducing the corpus exactly is not possible because the PMC open-access subset grows over time. Reproducing the search and obtaining a comparable corpus is possible. Differences between an original and a reproduced corpus represent the natural growth of the open-access record between dates and would themselves be a useful audit signal.

## How this corpus relates to wiki claims

Every substantive claim in the wiki traces, through a source page, to a specific file in this corpus, identified by its filesystem handle and SHA-256 hash. The wiki does not make claims that are not anchored in the corpus or in separately-licensed sources documented per source page.

Claims that the corpus does not support are flagged in `wiki/synthesis.md` as open questions or evidence gaps. Three current examples: the EFSA 2009 cadmium TWI's reaffirming statements (post-2011) are not currently in the corpus; the EPA IRIS 1985 operative cadmium values are referenced in the wiki but the original 1985 IRIS chemical record is not in the corpus (only the 1999 draft is); the JECFA 73rd-meeting primary derivation documents for cadmium PTMI are not in the corpus.

These gaps are documented openly. Closing them requires either expanding the open-access corpus on the next assembly pass, separately licensing the documents, or accepting them as known limitations of the open-access methodology.

## Future corpus operations

Subsequent corpus expansions will be documented as follow-on methodology entries in this folder, named by date (`corpus-genesis-YYYY-MM.md`). Each expansion entry documents the same components: scope, scripts and queries, search dates, download method, attrition, deduplication, and SHA verification. The cumulative corpus is the union of all assembly operations, with deduplication across operations enforced by SHA-256 hash matching against prior manifests.

The `triage.py` script supports merging new SHA manifests against existing manifests, which provides the mechanical basis for accumulating the corpus over time without losing provenance or risking double-counting in synthesis.

## Why this matters for HMT&C defensibility

The Heavy Metal Tested and Certified program references this wiki for the literature baseline behind certification thresholds. When a brand challenges an HMT&C threshold, or a plaintiff's expert challenges a certification claim, or a regulator questions the scientific basis of HMT&C tier definitions, the answer must be traceable to the literature, and the corpus from which the literature traceability is built must itself be defensible.

This methodology page is the answer to the question one level above the literature itself: not "what does the science say" but "how do you know you have looked at the right body of science." The honest answer documented above is stronger than a claim of completeness would be. A claim of completeness can be falsified by a single missing paper. A claim of "we have curated the open-access PMC literature using these specific queries on this specific date plus these specific regulatory documents, here are the scripts, here are the IDs, here are the SHA hashes" can be audited and verified.

The wiki's epistemic asymmetry argument depends on this auditability, not on completeness in an unobtainable sense.
