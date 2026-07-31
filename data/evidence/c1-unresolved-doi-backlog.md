---
title: C1 unresolved-DOI backlog
date: 2026-07-31
generated_by: C1 retrieval pass (Crossref title, PubMed, OpenAlex)
---

# C1 unresolved-DOI backlog — 19 pages that three indexes could not identify

These are the pages left after the C1 retrieval pass. Each still carries a DOI that does not
resolve at any registration agency (or, for `roslee2016`, `doi: null`), and **none of them could be
identified confidently in Crossref-by-title, PubMed, or OpenAlex.**

## Why they are not closed, and why that is not a choice about effort

The C1 rule offers two closures: verify the real DOI, or drop the DOI and set
`no_doi_assigned: true` **with a verified publisher `access_url`**. Neither is available here.
Retrieval failed, so there is no DOI to verify — and there is no verified publisher URL either,
because verifying one requires first identifying the paper, which is the step that failed.

That leaves only the marker, and **setting `no_doi_assigned: true` on these would be false.**
The pre-commit gate's own comment defines that marker as a *declared no-DOI venue*. These are
papers in journals that do assign DOIs; what is missing is our knowledge of the DOI, not the
publisher's practice. Writing the marker would trade a false identifier for a false claim about
the venue, and it is precisely what the C1 rule means by improvising a marker to clear the gate.

**The structural finding: the schema cannot express "DOI unknown."** It offers exactly two states —
a DOI, or a venue that assigns none — and reality here is a third: retrieval was attempted and
failed. Because the gate enforces the binary, a page in the third state cannot be committed
honestly at all. Removing the fabricated DOI, which is unambiguously the right fix for the actual
defect, is blocked by the gate unless accompanied by a claim we cannot support. That is a gap in
the schema, not a gap in the work, and closing it is a schema-and-gate decision rather than a
per-page one.

Recommended shape, for whoever takes it: a third state (`doi_status: unresolved`) carrying the
retrieval attempts and their date, which the gate accepts in place of `no_doi_assigned`. The
fabricated DOI then comes off all 19 pages immediately, the false identifier stops being
published, and the pages stay honestly marked as unidentified rather than silently mislabelled as
DOI-less venues.

## What was tried

Every page below went through all three routes, in order:

1. **Crossref by title** — the original C1 pass. No confident match.
2. **PubMed** (E-utilities, bare significant title words, similarity-checked against the returned
   record). No match at or above 0.90 with a matching year. Note that the first PubMed attempt
   returned 0 hits on all 37 pages because of an over-constrained exact-phrase query; that was a
   method fault, corrected, and re-run. These 19 are the result of the corrected pass.
3. **OpenAlex** (title search, similarity- and year-checked). Best score recorded per row below;
   all fell below the bar or matched a demonstrably different paper.

## The near-miss that should stay rejected

`shaltout2020-meat-products-pb-cd-nitrite-egypt` has an OpenAlex/Crossref record whose three
authors are the page's three authors, one misspelled in the deposit — a looser author check would
have accepted it. It is a **2019 Benha Veterinary Medical Journal** article, while the page
describes a **2020 Concepts of Dairy & Veterinary Sciences** one. Same authors, similar work,
different publication. Recorded here so the next pass does not "find" it again and take it.

## How a row drains

Identify the paper and either correct the DOI or supply a verified publisher `access_url`. Both
closures require a human or an index not tried here — publisher site search, Google Scholar, or
the raw PDF, which is in the corpus but not present in this worktree (`raw/` is gitignored and
lives off-repo, so the printed DOI on the paper itself was not readable during this pass).
**Reading the raw PDFs is the most promising untried route** and should be the next attempt.

Full register: [`c1-unresolved-doi-backlog.csv`](c1-unresolved-doi-backlog.csv)
