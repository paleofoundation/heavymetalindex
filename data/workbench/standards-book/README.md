# HMTc Program Manual — Reading Guide for Claude Code Sessions

**Purpose:** This file is the structural index for the HMTc Program Manual. A new Claude Code session asked to work on the manual should read this file *first*, then drill into the specific parts relevant to the request. The manual itself is 383 pages and ~716 KB of markdown; reading it cold burns context. This guide tells you exactly what lives where so you can operate surgically.

**Audience:** Future Claude Code sessions. Karen (when she wants to remember which file holds which content).

## Top-level layout

```
data/workbench/standards-book/
├── README.md                          ← THIS FILE (orientation)
├── adversarial-audit.md               ← Pre-work 6: 18 findings against v0-pre-audit
├── coherence-audit.md                 ← Pre-work 3: cross-document consistency check
├── front-matter/                      ← Title, edition, TOC, How-to-read
├── parts/                             ← Five-part book body
│   ├── 01-why-hmtc-exists/
│   ├── 02-the-hmtc-program/
│   ├── 03-using-heavymetalindex-com/
│   ├── 04-the-standards/              ← Part 3 — 15 product chapters + disclosure
│   ├── 05-the-lot-testing-schedule/
│   └── 06-methodology-and-appendices/
├── source-documents/                  ← Canonical inputs the manual reproduces
│   ├── governance-policy.md           ← Reproduced as Part 2
│   ├── lot-testing-schedule.md        ← Reproduced as Part 4
│   ├── toxicology-callouts.md         ← Per-metal callouts used in Part 2.2 and 3
│   └── preprints/                     ← Three Journal of Food Metallomics papers
└── build/
    ├── HMTc-Program-Manual-2026-v0.md      (master markdown, 6,943 lines)
    ├── HMTc-Program-Manual-2026-v0.typ     (Typst source)
    ├── HMTc-Program-Manual-2026-v0.pdf     (publication-quality, 383 pp)
    └── HMTc-Program-Manual-2026-v0.html    (browser-export path)
```

## The manual at a glance — what each Part covers and where to find it

### Front matter — `front-matter/`
- `01-title-page.md` — title, author (ORCID 0000-0002-2348-7259), Paleo Certified Inc. / Orlando.
- `02-edition-page.md` — 2026 Edition, DOI 10.5281/zenodo.20270512, copyright, IP protections, how-to-cite block.
- `03-table-of-contents.md` — placeholder; Typst's `outline()` directive auto-generates the real TOC at compile time.
- `04-how-to-read-this-document.md` — reading orders for brand legal, retailer compliance, regulators, adversarial readers.

### Part 1 — Why HMTc Exists — `parts/01-why-hmtc-exists/`
Two-pronged argument: structural (why public exposé testing fails) + financial (cost of operating without certification). Closes by introducing heavymetalindex.com as the evidence base.
- `01-introduction.md` — Part 1 framing.
- `02-the-structural-problem.md` — adapted from *Counterproductive Consequences* preprint.
- `03-the-financial-problem.md` — adapted from *Cost of Operating* preprint. Has the scenario math ($1.6M–$6.6M for small brand, etc.) and the ROI framework.
- `04-the-structural-alternative.md` — HMTc as the answer; bridges to Part 2.
- `05-how-hmtc-knows-what-it-knows.md` — heavymetalindex.com and the wiki/HMTc firewall.

### Part 2 — The HMTc Program — `parts/02-the-hmtc-program/`
Operational constitution. Each chapter pairs narrative explanation (from *Certification as a Framework* preprint) with operational text (from `source-documents/governance-policy.md`).
- `00-program-flow-diagram.md` — single-page lifecycle (inquiry → baseline → status → surveillance → CAPA → ratchet).
- `01-purpose-and-principles.md` — action levels vs safety thresholds, ALARA, concentration-based limits, international scope.
- `02-scope-and-tiering.md` — **Tier 1 (Pb, Cd, iAs, MeHg) and Tier 2 (Ni, Sn, Al, Cr)** classification with toxicology rationale. Carries the aggregate-exposure framing (10.4 µg lead/day from FDA-action-level-compliant foods, 4.7× the IRL).
- `03-certification-status-framework.md` — Status A / B / C / D / E framework.
- `04-confidential-remediation-track.md` — the legal-defensibility chapter; brands enroll confidentially before achieving Status A or B.
- `05-mark-usage-rules.md` — eligibility, prohibited claims, anti-arbitrage.
- `06-decision-rules.md` — Measurement Uncertainty + Pass/Fail/Borderline.
- `07-data-governance.md` — structured data, data-integrity hard stops, lab requirements.
- `08-capa.md` — CAPA timelines and required elements.
- `09-supplier-intelligence.md` — anonymized cross-brand alerts; honest anonymization-limits disclosure.
- `10-standards-ratchet.md` — **§12: trigger conditions (P80 of trigger pool + 50% breadth), 20% step cap, 12–18 month transition, exit-and-re-enter prohibition (§12.7), forecast accountability (§12.6).**
- `11-regulatory-escalation.md` — regulatory limit violations are hard-stops independent of HMTc status.
- `12-appeals-and-document-control.md` — **Two-tier appeals: Tier 1 internal, Tier 2 independent Appeals Committee with binding reversal authority.**

### Part 2.5 — Using heavymetalindex.com — `parts/03-using-heavymetalindex-com/`
Bridge chapter showing how brand QA uses the index operationally (diagnostic, remediation playbook, percentile placement roadmap, pre-certification baseline).

### Part 3 — The Standards — `parts/04-the-standards/`
The actual HMTc limit values, one chapter per product category. **Each chapter is self-contained as a licensing exhibit.**
- `00-introduction.md` — Part 3 framing.
- `00a-methodological-disclosure.md` — **AI-instrument disclosure (Codex + Claude Code as dual-instrument cross-vendor verification, Karen as named PI, not certification authority).** Sits between intro and chapter 3.1 so readers encounter it immediately before the first HMTc limit value.
- `01-infant-formula-powder-non-soy.md` through `15-teething-and-snacks-non-rice.md` — 15 product chapters retemplated from `data/workbench/briefings/` via `tools/standards/render-part3-chapter.mjs`.

Per-chapter structure: Master Limit Table → Methodology → Per-Analyte Sections → Adversarial Read → Sources Cited → Provenance Footer.

### Part 4 — Lot Testing Schedule — `parts/05-the-lot-testing-schedule/`
Companion operational manual. The intro file sits in `parts/05-the-lot-testing-schedule/`; the body is **inlined at build time** from `source-documents/lot-testing-schedule.md` (the canonical operational document) via the `inline-source-doc` directive in `tools/standards/build-program-manual.mjs`. Edits to the schedule happen on the source-documents file, not on the inlined output.

### Part 5 — Methodology and Appendices — `parts/06-methodology-and-appendices/`
- `01-how-standards-are-set.md` — the methodology in principle, with the firewall keeping engine arithmetic workbench-side. Specifies the platform-classification rule, the 90/30 row-pass intent and P97/P45 mechanism, the controlled-terms request process.
- `02-program-level-adversarial-read.md` — the Pre-work 6 audit output structured for the reader: 18 attack categories with the manual's responses.
- `03-glossary.md` — alphabetized glossary covering program-operations, regulatory/toxicological, and analytical-chemistry vocabularies.
- `04-sources-index.md` — **the numbered References list, [1] through [60]**, IEEE-adjacent format. Inline `[N]` citations in Parts 1, 2, 2.5, 5 superscript to entries here.
- `05-recognition-framework.md` — how HMTc compares to USDA Organic, Non-GMO Project, NSF/ANSI 173, etc.
- `06-licensing-terms-summary.md` — fee structure, term length, dispute resolution (California-seated AAA arbitration), confidentiality.
- `07-colophon.md` — typesetting, copyright, contact, governance composition.
- `08-about-the-author.md` — Karen's professional bio with publications, ORCID, dual-role disclosure.

## Source documents — `source-documents/`

These are the canonical operational documents the manual reproduces. **Edit these, not the inlined copies in the manual; the build tool re-inlines them on each rebuild.**

- `governance-policy.md` — HMTc Program Governance Policy, v2.0. Reproduced as Part 2. Contains the canonical §12 Standards Ratchet specification.
- `lot-testing-schedule.md` — HMTc Lot Testing Schedule, v2.0. Reproduced as Part 4. Contains §10.2 chain-of-custody (categorical enforcement) and the testing frequency matrix by Status × Risk Tier.
- `toxicology-callouts.md` — eight priority-metal toxicology callouts in canonical form. Used by Part 2.2 and referenced from Part 3 chapters.
- `preprints/` — three published Journal of Food Metallomics papers cited throughout the manual:
  - `counterproductive-consequences-of-public-expose-testing.md` (doi: 10.5281/zenodo.19470572) — reference [46].
  - `cost-of-operating-without-credible-certification.md` (doi: 10.5281/zenodo.18903738) — reference [47].
  - `certification-as-a-framework.md` (doi: 10.5281/zenodo.18905821) — reference [48].

## Audit documents

These document the defensibility trail behind the current edition.

- `coherence-audit.md` — Pre-work 3. Cross-document consistency check across Governing Principles, Governance Policy, Lot Testing Schedule, briefings, CLAUDE.md Part 19. Run before drafting; outputs the contradictions to resolve.
- `adversarial-audit.md` — Pre-work 6. 18 findings against the v0-pre-audit manual. Drives the strengthenings applied in Parts 1, 2, 4, 5 and the writing of Part 5.2. **The clearest single document showing how the manual defends itself against hostile review.** Read this if you're asked to evaluate the manual's defensibility or to extend the methodology to a new attack vector.

## Build pipeline (where to find the tools and what each does)

- `tools/standards/README.md` — pipeline-specific reuse guide. Building a Cat 2 (children's personal care) or Cat 5 (beverages) manual reads this.
- `tools/standards/build-program-manual.mjs` — concatenates parts → master markdown + firewall lint.
- `tools/standards/render-part3-chapter.mjs` — retemplates briefings → Part 3 chapters.
- `tools/standards/render-manual-typst.mjs` — master markdown → Typst → publication-quality PDF (with superscript inline citations).
- `tools/standards/render-manual-html.mjs` — master markdown → styled HTML for browser PDF export.
- `tools/standards/typst-template.typ` — Typst book template (6.14"×9.21", FreightText Pro + Avenir Next, running heads, native outline TOC).

Standard build cycle:
```
node tools/standards/render-part3-chapter.mjs --all
node tools/standards/build-program-manual.mjs
node tools/standards/render-manual-typst.mjs --pdf
```

## Cross-references for orientation

- **Project-wide context:** `CLAUDE.md` (especially Part 2 on the wiki/HMTc firewall, Part 6 on page templates, Part 19 on standards-setting methodology, Part 24 on proactive maintenance and the prompt catalog).
- **Operating-mode rules:** `OPERATING.md` (especially the "no approval gates" rule and the "Karen is out of the loop on routine ingest decisions" pattern).
- **Daemon and autonomy infrastructure:** `tools/autonomy/README.md`, `tools/autonomy/daemon-tick.sh`, `data/evidence/autonomy/morning-report-<date>.md`.
- **Prompt catalog (run prompts from Warp or via Claude Code):** `docs/prompt-catalog.md`.
- **Warp execution guide for the 8-hour autonomous build:** `data/evidence/autonomy/8hr-build/04-warp-execution-guide.md`.

## How to use this guide based on what you're asked to do

**"Update Part 2.10's ratchet specification."**
Go to `source-documents/governance-policy.md` (not the Part 2.10 chapter — the chapter is rendered from source-documents at build time via narrative pairing). Then rebuild.

**"Add a new product chapter to Part 3."**
Add a briefing at `data/workbench/briefings/<slug>.md`, register it in `tools/standards/render-part3-chapter.mjs`'s CHAPTERS array, run the Part 3 generator. The new chapter appears in the master at the next build.

**"Fix a citation."**
Reference list lives in `parts/06-methodology-and-appendices/04-sources-index.md`. Inline citations live in the chapter prose. Both must update consistently. Re-render after.

**"Audit the manual against a new attack vector."**
Read `adversarial-audit.md` for the existing 18 findings, then add the new finding following the same structure (attack, response with manual location, materiality). If applying it requires manual revision, add the strengthening to the relevant chapter; if it's only an audit-trail addition, append to the adversarial-audit document and propagate the response language into Part 5.2.

**"Build the same manual for a different category (Cat 2 personal care, Cat 5 beverages)."**
Read `tools/standards/README.md`. Three-step process: create the content directories, update title/subtitle on the title and edition pages, invoke the Typst renderer with the new metadata. No template changes required.

**"Karen asked for the manual content but I don't want to read 716 KB."**
This file. Then read the specific Part(s) named by her question. Each Part directory averages ~25 KB across its files; reading one Part is ~5% of the full manual's context cost.
