---
type: source
raw_handle: RPMEHG_10-21203-rs-3-rs-8595082-v1
cite_key: authors2026-of-lower-arity-balanced-designs-for-which-explicit
title: "of lower-arity balanced designs, for which explicit formulas for replication numbers,"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.21203/rs.3.rs-8595082/v1
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.21203/rs.3.rs-8595082/v1"
raw_path: "/Volumes/HMI-Library/research-pulls/ingredient-sweep/Complete & balanced dry kibble/Complete & balanced dry kibble bioaccumulation/10-21203-rs-3-rs-8595082-v1.pdf"
raw_sha256: "f9ac7b736ebe033d8dfe4021d598de1081c5da94bfb4084910149270ddc17a8d"
metals: [Pb, Al]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - of lower-arity balanced designs, for which explicit formulas for replication num

## Overview

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- License:   This work is licensed under a Creative Commons Attribution 4.0 International License.
- Sudesh K. Srivastav∗,1 Apurv Srivastav2
- 1 Department of Biostatistics and Data Science, Tulane University, New Orleans, USA
- 2 Department of Electrical and Computer Engineering, Center of Bioinformatics and
- We introduce a master (k + 1)-ary design with explicit replication and pairwise concur-
- AMS Subject Classification (2020): 62K10 · 05B05
- first considered by Tocher (1) and later formalized as balanced n-ary designs, in which each
- possible values for treatment multiplicities (0, 1, . . . , n − 1), not the number of treatments
- n = 2. Throughout, we use the convention that an n-ary design permits multiplicities in
- 0, 1, . . . , n − 1; thus a design allowing multiplicity up to k is referred to as (k + 1)-ary.
- in {0, 1, . . . , n − 1}, and (iii) for any two distinct elements i and j, the pairwise index
- definition is consistent with the multiset design framework of Shah and Dey (4) and subse-
- quent generalizations by Billington (5; 6), in which balance is defined via constant weighted
- stood to allow multiplicities in {0, 1, . . . , n − 1}; in particular, the master multiset design
- D(v : k) introduced in Section 2 is (k+1)-ary. Derived subdesigns enforce smaller admissi-
- ble multiplicity ranges as specified in Section 3. As in classical balanced incomplete block
- introduced by Bose (2), which revolutionized the field by providing algebraic techniques to
- Dey (3) and Shah and Dey (4) extended these concepts to n-ary structures, many traditional
- Recent developments include nested balanced n-ary designs (Dey and Midha (8); Sharma and
- are the multiset designs introduced by Assaf et al. (11), which allow repeated elements
- all distinct multisets of size k drawn from a v-set forms a balanced (k+1)-ary design with
- arities, satisfy the generalized Fisher inequality b ≥ v (Preece (12)), and provide analyti-
- Assaf et al. (11), who allow repeated blocks and variable block sizes, our construction uses
- The remainder of the paper is organized as follows. In Section 2, we describe the multiset
- (k+1)-ary design. Section 3 develops systematic deletion schemes that generate balanced
- 2 Construction of Balanced (k+1)-ary Designs
- 2.3 Structural design parameters
- using a standard binomial summation identity (see Appendix A and, for example, Gould (14);
- Riordan (15)). This expression is consistent with the symmetry argument that, among all
- as derived in detail in Appendix B, using repeated hockey-stick identities; see also Gould (14)
- 2.4.1 Case 1: v = 3, k = 2 (balanced 3-ary design)
- The blocks are categorized by their multiplicity patterns in Table 1.
- Table 1: Block configurations for v = 3, k = 2.
- Distinct Pairs (xi = 1, xj = 1) {1, 2}, {1, 3}, {2, 3} 3
- 2.4.2 Case 2: v = 3, k = 3 (balanced 4-ary design)
- The block structure becomes more complex, as shown in Table 2.
- Table 2: Compact block configurations for v = 3, k = 3.
- All distinct (x1 = x2 = x3 = 1) {1, 2, 3} 1
- 2.4.3 Case 3: v = 2, k = 3 (explicit λ calculation)
- smallest non-trivial case D(2 : 3). The master design contains b = 3
- The master pairwise index is λmaster = 41 = 4. Verifying manually via the sum of products:
- Applying the deletion rule for s = 2 (deleting blocks where xi = 3), we remove B1 and B2 .

## Methods (brief)

- The current framework is combinatorially distinct from Efficiency Balanced Sample De-
- the Efficiency Balanced Sample Design (EBSD) framework of Srivastav and Srivastav (13).
- treatments <- sample(1:4, N, replace=TRUE)
- blocks_unbal <- replicate(b, sample(1:v, k, replace = TRUE), simplify = FALSE)
- Sample Simulation Output

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/lead]]
- [[metals/aluminum]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no certification limit, status, or ratchet calculation is stated; any occurrence values remain descriptive only.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [880cf9722](https://github.com/paleofoundation/heavymetalindex/commit/880cf9722) | 2026-08-12 | minor | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sections added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
