# `raw/` — Source Document Storage

The `raw/` directory is the Heavy Metal Index's immutable source-of-truth for every document cited in the wiki. It is deliberately excluded from git (see `.gitignore` at repo root) for two reasons: the total size exceeds a normal GitHub repository's capacity, and some documents are copyrighted textbooks that cannot be redistributed through a public remote.

This README documents where the PDFs actually live, how the repository references them, and how authorized auditors obtain access for verification.

## Where source documents live

Every ingested source is represented in three places.

First, the full PDF is held on local and private backup storage under `raw/` following the directory layout specified in the root `CLAUDE.md` (`studies/`, `reports/`, `industry/`, `news/`, `lab-data/`, `assets/`, `textbooks/`). The working copy is the directory on the Heavy Metal Index maintainer's workstation.

Second, each document has a source page under `wiki/sources/<cite-key>.md` that is committed to the public repository. The source page carries the metadata that makes provenance auditable: cite key, title, authors, publication, DOI, SHA-256 hash of the raw file, date of access, canonical access URL, license, and evidence tier. The source page is what a reader actually cites.

Third, for publicly redistributable documents (government reports, open-access papers, Creative Commons licensed material), a copy is also preserved in an archival location that is not subject to link rot; the access URL on the source page points there when the agency URL is unstable.

## Licensing classes

Each source falls into one of four license classes, recorded on its source page in the `license` field.

`us-government-work`. Documents authored by US federal agencies as part of their official duties (FDA guidance, EPA IRIS assessments, ATSDR toxicological profiles). Not subject to copyright under 17 U.S.C. § 105. Freely redistributable. Full text may be hosted alongside the source page if useful for verification.

`public-redistribute`. Documents published under a license that permits redistribution (Creative Commons CC-BY, CC-BY-SA, open-access journal articles with explicit redistribution permission, Codex Alimentarius documents released for international use). Freely redistributable subject to license attribution.

`public-reference-only`. Documents that are publicly available but not licensed for redistribution (EFSA scientific opinions, JECFA monographs, most traditional journal articles). Can be cited and quoted under fair use; full-text copies are held privately and not served from the public repository.

`copyright-licensed-private`. Copyrighted works held under individual license (commercial textbooks such as *Casarett & Doull's Essentials of Toxicology*, *Handbook on the Toxicology of Metals*, *Patty's Toxicology*). Only short quotations for citation purposes appear in the wiki; the raw file is never placed in any public repository, Git LFS store, CDN, or cloud location that could constitute redistribution. Held privately by the maintainer and produced on request to authorized auditors.

## Auditor access process

A reader who needs to verify a specific claim in the wiki against the underlying source should follow this process.

First, locate the claim's source page at `wiki/sources/<cite-key>.md` and read the frontmatter. The `access_url` field provides the primary canonical location; for `us-government-work` and `public-redistribute` documents this is typically enough to retrieve the original. The `doi` field, when present, resolves through doi.org.

Second, compare the retrieved PDF's SHA-256 hash against the `sha256` field on the source page. Matching hashes confirm that the Heavy Metal Index is citing the identical document the reader has in hand. Non-matching hashes indicate either a re-issue, a mirror with different compression, or a substituted document; this should be flagged to the maintainer.

Third, for `public-reference-only` and `copyright-licensed-private` sources where retrieval through the access URL is not sufficient (a journal paywall, an out-of-print textbook, a superseded agency document), authorized auditors may request direct access. Auditor categories include regulatory-affairs reviewers for brands evaluating the wiki's evidence base, regulatory staff at FDA, EFSA, Health Canada, or equivalent agencies verifying specific citations, counsel conducting due diligence for litigation, and journalists verifying claims for publication. Requests should be sent to the maintainer contact listed at heavymetalindex.com/about with the specific cite key and reason for the request. Access is provided for verification purposes only and does not constitute a license to redistribute.

## What changes when a source is updated

When a source document is re-issued (a newer edition of a regulatory guidance, a corrected version of a journal article), the prior version is retained in `raw/` under its original filename, the new version is added alongside with a revised filename reflecting the issue date, and a new source page is created under the appropriate cite key. The wiki's regulation and metal pages are updated to cite the current version; the superseded source page is retained as a historical record with a `superseded_by` pointer.

## Why `raw/` is gitignored

Three reasons, all structural rather than expedient.

Total size. The current cadmium pilot batch alone totals roughly 754 MB of PDFs. A representative full-corpus build of 27,000 papers is well beyond a normal GitHub repository's capacity.

Per-file size. *Patty's Toxicology 6-Volume Set* is 102 MB, above GitHub's 100 MB hard limit on individual files. Git LFS would accept it, but LFS is not an appropriate home for copyrighted content regardless of file size.

License integrity. Hosting the raw copies of `public-reference-only` and `copyright-licensed-private` documents on a public remote, even under LFS, would either constitute infringement or require licensing we have not obtained. The cleanest posture is that nothing in `raw/` ever touches a public repository; the source pages provide everything needed for citation, and the access process provides everything needed for verification.
