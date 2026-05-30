# Grants Workbench — Reading Guide

**Purpose:** Staff-side workspace for *grant-writing assistance to external, unaffiliated applicants*, leveraging the Heavy Metal Index corpus, the Journal of Food Metallomics preprints, and the HMTc Program Manual. This tooling can **scaffold** the scientific spine (Aims, Significance, Innovation, methodology, references) from the public corpus; **the applicant adopts, edits, and owns it** and supplies product, team, facilities, budget — and authorship. The Paleo Foundation is not a partner, sub-awardee, or preparer of record.

**This is not public wiki content.** It lives under `data/workbench/`, never in `wiki/`, and is excluded from the public build at heavymetalindex.com.

## Governance guardrails (binding)

1. **Brand firewall (CLAUDE.md Part 12).** An applicant company's product composition, COAs, and brand-level test data are handled *here* (or in the future private brand-intelligence build, Part 26), **never** in the public wiki. Sample artifacts in this directory use a generic, unnamed applicant.
2. **Arms-length, not a partner.** The Foundation is not a partner, sub-awardee, co-investigator, or preparer of record on any applicant's grant, and holds no stake in the product. "Help" means providing the public evidence base (heavymetalindex.com) and a scientific-case scaffold the applicant adopts and authors as its own; if the applicant cites the index, that is a one-way public reference. Any future HMTc certification still runs the standard's normal independent process — the "external third party" posture (see [after-palmquist.md](../public-briefings/after-palmquist.md)) is preserved.
3. **Wiki honesty is not negotiable for the grant's benefit (CLAUDE.md Part 2).** We draw claims *from* the corpus into a grant; we never strengthen a wiki claim to serve a grant.

## Division of labor (applicant grant)

| Bucket | Owner | Examples |
|---|---|---|
| Scientific spine (scaffold) | **Corpus-generated; brand authors & owns** | Specific Aims, Significance, Innovation, methodology, literature synthesis |
| Approach + preliminary data | **Shared** | Analytical methods (ICP-MS, HMTc lot-testing rigor) + applicant's product/samples |
| Team / facilities / budget / commercialization | **Applicant only** | Investigators, environment, costs, market plan |

## Contents

- **`PACKET-camel-milk-formula-grant-scaffold.md`** — **the consolidated, external-facing, send-ready document** for a generic camel-milk brand. Combines a cover note, Project Summary/Narrative, Specific Aims, full Research Strategy, References, and the "what your company must add" map into one self-contained file, cleaned of internal language and framed for the recipient (brand authors/owns; Foundation arms-length). Rendered to `.docx` for sending. The files below are the working sources it was assembled from.
- `sample-specific-aims-camel-milk-formula.md` — demonstration Specific Aims page + Significance outline (generic applicant), proving what the corpus + the Pendergrass NEC preprint can generate.
- `research-strategy-camel-milk-formula.md` — full demonstration Research Strategy (Significance · Innovation · Approach), framed as **NIH SBIR** (the brand is applicant and author; the Foundation is an independent evidence resource, not a partner or preparer). Reframed by the 2026-05-29/30 discovery pass: camel milk is a heavy-metal accumulation matrix, so the project is "make a camel-milk formula NEC-safe via bioavailable-nickel measurement + sourcing + surveillance," not "camel milk is clean."
- `project-summary-and-aims-camel-milk-formula.md` — **brand-voice** Project Summary/Abstract, Project Narrative, and polished Specific Aims, with **〔APPLICANT SUPPLIES …〕** tags and a consolidated applicant-supplies map (the brand-missing-data gaps).
- `references-cited-camel-milk-formula.md` — compiled References Cited (DOIs where verified) + a per-claim provenance map + honest gaps in the reference base.
- `prompt-catalog.md` — funder-agnostic grant-writing prompts, adapted from [eseckel/ai-for-grant-writing](https://github.com/eseckel/ai-for-grant-writing) (CC-BY-4.0), tuned to the HMI domain. Mirrors the role of [docs/prompt-catalog.md](../../../docs/prompt-catalog.md) for the standards build.

**Discovery passes feeding this workbench:** 2026-05-29 (camel-milk nickel/heavy-metals → Kerdoun 2024, Chen 2020, Konuspayeva 2010) and 2026-05-30 (camel-milk composition/lactoferrin → 6 PDFs staged in `raw/Manual Fetch Discovery/`). The nickel-seeds-*Lactobacillus* hypothesis was verification-searched and **not supported**, so it is excluded from all artifacts.
