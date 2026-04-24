# Heavy Metal Index — Change Log

Append-only chronological log of ingests, queries, lints, and schema changes. Each entry follows the format:

```
## [YYYY-MM-DD] <op> | <handle> — <short title>
Pages touched: [[a]], [[b]], [[c]]
Notes: <1–3 sentences on what changed or what was learned>
```

Where `<op>` is one of: ingest | query | lint | certification | course | app | schema.

---

## [2026-04-24] schema | kickoff — initial skeleton
Pages touched: [[index]], [[log]], [[overview]], [[synthesis]], [[metals/cadmium]], [[regulations/fda-closer-to-zero]], [[regulations/oehha-cadmium-prop65]], [[regulations/epa-iris-cadmium-rfd]], [[regulations/efsa-cadmium-twi]], [[regulations/jecfa-cadmium-ptmi]], [[regulations/atsdr-cadmium-mrls]], [[regulations/codex-cadmium-mls]]
Notes: Created initial stub skeleton ahead of the first ingest batch (8 cadmium-focused regulatory/advisory reports plus three textbook chapters covering cadmium toxicology). Ingest order starts with FDA Closer to Zero to establish the programmatic frame, then the Handbook on the Toxicology of Metals chapter 32 (Nordberg, Nogawa, Nordberg, 2015) to ground the canonical tox science, then EFSA, EPA IRIS, JECFA, ATSDR, paired OEHHA Prop 65 evidence and MADL documents, and Codex CCCF17. Patty's and Casarett & Doull's Essentials chapters enter after the regulatory tox documents.

## [2026-04-24] schema | manifest-misfire — trusted filename over contents
Pages touched: [[log]], [[regulations/fda-closer-to-zero]], [[regulations/fda-ctz-Pb-babyfood-10ppb]], [[regulations/fda-ctz-Pb-rootveg-20ppb]], [[regulations/fda-ctz-Pb-cereal-20ppb]], [[index]]
Notes: Batch manifest misfired at entry #1. The file `FDA_CloserToZero_ActionPlan.pdf` was treated in the manifest as a program-level Closer to Zero overview; on extraction, the document is actually FDA's final January 2025 guidance setting **lead** action levels for processed baby food (not the program plan, and not a cadmium document). The batch was built to ground the cadmium ingest, and this file's role needed to be re-read after contents were inspected. Restructured in response: `fda-closer-to-zero.md` is now a program-level overview, and three per-rule pages were created for the three action levels the guidance sets (`fda-ctz-Pb-babyfood-10ppb`, `fda-ctz-Pb-rootveg-20ppb`, `fda-ctz-Pb-cereal-20ppb`). Lesson for future bulk ingests: eyeball each PDF's scope before locking priority order; trust contents, not filenames.

## [2026-04-24] schema | source-template-extension — provenance fields added
Pages touched: [[sources/_TEMPLATE]], [[raw/README]] (raw/README.md committed via .gitignore negation)
Notes: Extended the source-page template with four provenance fields (`sha256`, `access_date`, `access_url`, `license`) per the hybrid-provenance decision. `raw/` remains gitignored; `raw/README.md` is committed and documents the licensing classes (`us-government-work` / `public-redistribute` / `public-reference-only` / `copyright-licensed-private`) and the auditor access process. Copyrighted textbooks (Patty's, Casarett, Handbook on the Toxicology of Metals) are classified `copyright-licensed-private` and held privately; raw files are never placed in the public repository or in Git LFS. The new template is at `wiki/sources/_TEMPLATE.md`; the first ingest (FDA CTZ Pb guidance) will be recorded in this shape from the start.
