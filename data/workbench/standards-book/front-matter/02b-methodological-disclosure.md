# Methodological Disclosure: AI Literature-Processing Instruments

## Role categorization: literature-processing instrument, not certification authority

The Heavy Metal Index wiki, which is the literature evidence layer underlying HMTc certification standards, is built using OpenAI's Codex (GPT-5.5) as one of two parallel AI literature-processing instruments, alongside Anthropic's Claude Code (Opus 4.7). Both instruments operate on the same corpus of peer-reviewed primary studies, government reports (FDA, EFSA, EPA, WHO, Codex, ATSDR), and regulatory documents. Both produce the `wiki/sources/` per-paper source pages, the `wiki/ingredients/` commodity contamination profiles, the `wiki/products/` category evidence inventories, and the `wiki/metals/` toxicology context that constitute the literature-baseline for HMTc threshold work.

**Neither instrument sets HMTc certification thresholds. Neither instrument decides certification pass/fail.** The HMTc certification pages, threshold percentile arithmetic, and threshold-setting workflow are maintained separately on a staff-side workbench at heavymetaltested.com and in `data/workbench/standards/` (not under `wiki/`), as documented in the project's governing principles (the wiki/HMTc firewall) and the threshold-setting methodology.

## Methodological role: cross-vendor verification, transparent and reproducible

The two instruments are deliberately drawn from different model vendors (OpenAI for Codex, Anthropic for Claude Code) to enable cross-vendor verification on every wiki source page. The protocol: when one instrument writes or merge-enhances a source page, the other independently audits it against the original source document using a five-check protocol. The five checks are:

1. **Numerical fidelity** against source tables (every reported number traces to the source's stated value with no rounding, averaging, or harmonization).
2. **Slug-vocabulary validation** against the project's controlled taxonomy (every ingredient, product, regulation, and metal slug declared in frontmatter resolves to an existing page or surfaces as an explicit new-page proposal).
3. **Speciation discipline** enforcement of inorganic vs. total arsenic and methylmercury vs. total mercury (the two non-negotiable distinctions named in the project's analytical conventions; speciation is never substituted in pooling).
4. **Brand-firewall compliance** (no brand-identifying contamination data on category or ingredient pages; brand-level data is structurally excluded from the public wiki).
5. **Wiki/HMTc separation compliance** (no certification thresholds, percentile arithmetic, or workbench-side engine vocabulary leaking into the public wiki).

Verdicts (PROMOTE, REVISE, QUARANTINE) and all applied corrections are logged to `data/evidence/audit-queue.csv` and to per-page commit messages in the project's git history. The dual-instrument architecture is conceptually similar to the dual-reviewer protocol used in Cochrane systematic reviews; the substitution of two AI instruments for two human reviewers is documented openly rather than concealed, and every wiki claim traces through git history to the source citation and the audit verdict.

## Accountability and authority remain with the Paleo Foundation as named program operator

Karen Pendergrass (Paleo Certified, Inc. dba The Paleo Foundation) is the named principal investigator with sole authority over: HMTc product category creation, the project's governance documents (CLAUDE.md and OPERATING.md), regulatory interpretation, certification threshold finalization, and program-manual publication. Both Codex and Claude Code operate under published operating manuals (`docs/codex-collaboration/README.md`, `docs/gpt-collaboration/system-prompt.md`, `docs/gpt-collaboration/verification-checklist.md`) that explicitly prohibit autonomous threshold-setting, autonomous synthesis claims beyond what the cited literature supports, and any modification of governance documents without principal-investigator approval.

Where either instrument surfaces a finding requiring human judgment (a paper-internal contradiction, a true duplicate conflict, a new product-category proposal, an HMTc-relevant policy decision), the instrument stops and surfaces to the principal investigator rather than guessing. This boundary is enforced operationally (stop conditions in the operating manuals), logged transparently (per-session run summaries in `data/evidence/codex-runs/` and morning reports in `data/evidence/autonomy/`), and reproducible from git history.

## Why this architecture is documented in the front matter

This disclosure appears at the front of the manual, not in a colophon footnote, because it is structurally important to how the program defends itself against hostile review. Hiding the AI involvement would be the failure mode; the Cochrane-quality standard the program aspires to expects methodology transparency. AI literature-processing is increasingly standard in systematic-review work; AI threshold-setting in a regulated certification program would be novel and harder to defend. The wiki/HMTc firewall, the cross-vendor verification protocol, the named principal investigator, and the audit-trail-from-git-history together form the methodological architecture that lets this manual carry the weight of "Cochrane for heavy metals" rather than "AI-generated certification of food products."
