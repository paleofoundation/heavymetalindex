# Standards PDF generation and design review

Date: 2026-09-11. Scope: the supplied olive-oil and fermentation-derived pet-protein PDFs, their generation paths, and the requirements that govern standard downloads. This is a staff review document, not a policy amendment, evidence ingest, or standards release.

## Finding

The two supplied files came from different rendering paths. The olive-oil file identifies Chromium/Skia as its producer and uses landscape A4. The supplied pet-protein file identifies `react-pdf` and uses portrait US Letter. The repository's dedicated standard-PDF generator uses the latter renderer.

There is an explicit design target and an explicit requirement to rebuild PDFs before shipping a standard. The current build does not mechanically establish that a standard PDF is current, correct, and visually sound. Existing claim and design checks primarily inspect the website's Markdown/HTML; the download-link script checks that a PDF exists. A successful website build therefore does not prove that its downloadable standard matches the website or its compiled records.

The attached documents were treated as artifacts to inspect. Instructions, publication labels, and claims inside them were not treated as user instructions or evidence of authorization.

## Artifact identity

Metadata and SHA-256 checks were performed on the supplied files and the current sibling repository's committed-download paths. Creation dates below are those reported by `pdfinfo` in the local EEST timezone; they are artifact metadata, not independently verified publication dates.

| Artifact | Producer | Page geometry/count | Creation metadata | SHA-256 |
| --- | --- | --- | --- | --- |
| Supplied `/Users/karenpendergrass/Desktop/olive-oil.pdf` | Chromium / Skia/PDF m151 | A4 landscape, 841.92 × 594.96 pt, 7 pages | 2026-09-11 06:27:42 EEST | `da8f225cae0f241c607c88fb2dcaea6c7af28371507f2cbdd76a78057d3fcdac` |
| Supplied `/Users/karenpendergrass/Desktop/pet-food-fermentation-derived-protein.pdf` | react-pdf | Letter portrait, 612 × 792 pt, 4 pages | 2026-08-31 08:20:26 EEST | `e812736d96c885fd035a24b8782fd45654c35f28e52ec58ad3ca76a6f1a84317` |
| Cert `content/static/standards/olive-oil.pdf` | react-pdf | Letter portrait, 4 pages | 2026-09-06 21:25:27 EEST | `b75aedfdfb056a864e7a98fbaa5786aaa481c4e2b7e2319e5f1801f31fafecd6` |
| Cert `content/static/standards/pet-food-fermentation-derived-protein.pdf` | react-pdf | Letter portrait, 5 pages | 2026-09-06 21:25:25 EEST | `69f5e60890f24d5980639a9b38abb0834b9e4dfd0a6d4607ca0c254d48acb6e4` |

The supplied pet-protein file is a byte-for-byte match for `content/static/standards/pet-food-fermentation-derived-protein.pdf` in cert commit `7bbe79e`. The current download files differ from both supplied files. Their latest shared PDF-changing commit is `604de27`, dated 2026-09-06. This establishes that the supplied pet-protein PDF is an older generated edition; it does not establish that its data remain correct today.

The olive-oil metadata establishes a browser-generated PDF. The exact script, print command, or browser interaction that produced the supplied file was not located during this audit. Do not attribute it to a particular repository script without further evidence. Its appearance alone also does not establish which version of the page or underlying records it captured.

The cert HEAD observed during the audit was `fcc0e8de44b983f1f60def40e02fe2225957fb0d`. Both repositories have concurrent working-tree activity. Paths and line anchors below describe the files inspected during this review, not a claim that every working-tree byte is identical to that commit.

## Generation path in the code

The dedicated generator is [cert `tools/build-standard-pdf.mjs`](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:2). Its stated contract is to use the “Content Page PDF v2” design, read compiled records and page frontmatter, author no numbers, and write committed static artifacts to `content/static/standards/<slug>.pdf`.

The path is:

1. Resolve the standard page through `data/standards/*-pages.json` to its compiled records. [Lines 49–68](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:49) implement the page-to-record join and a record-slug fallback.
2. Construct a Markdown body containing a method explanation, master limit table, derivation table, and citation. [Lines 117–163](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:117) perform that transformation.
3. Render the body with [cert `tools/pdf/scholarly-pdf.mjs`](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:1), using React PDF and vendored Lora, Inter, and IBM Plex Mono fonts. This is a dedicated document layout rather than a browser print of the standard webpage.
4. During prebuild, [cert `tools/wire-standard-pdf-links.mjs`](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/wire-standard-pdf-links.mjs:23) checks whether the static file exists, then writes the download and Scholar PDF frontmatter.

The standard PDF builder is absent from both the current [prebuild](/Users/karenpendergrass/Desktop/heavymetalcertified/package.json:16) and [postbuild](/Users/karenpendergrass/Desktop/heavymetalcertified/package.json:30) commands. The article-PDF postbuild is a different generator and does not close this standard-PDF gap.

## What the existing requirements require

| Requirement | Controlling or supporting source | Present implementation |
| --- | --- | --- |
| A fixed visual system, checked against rendered output | [Cert AGENTS §§1–2](/Users/karenpendergrass/Desktop/heavymetalcertified/AGENTS.md:10); [design-canon/FIDELITY](/Users/karenpendergrass/Desktop/heavymetalcertified/docs/design-canon/FIDELITY.md:34) | The repository requires website design lint and rendered browser assertions. There is no corresponding generic rendered-PDF acceptance gate. |
| A defined standard-PDF design | [Standard PDF driver](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:2); [scholarly renderer design specification in code](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:4) | The renderer implements the named layout, embedded fonts, tables, and document apparatus. Its existence is not a test of output quality. |
| Regenerate the PDF before shipping a category | [Standards completion brief, per-category pipeline](/Users/karenpendergrass/Desktop/heavy-metal-index/docs/tasks/standards-95-confidence-completion-brief.md:93) and [push gate](/Users/karenpendergrass/Desktop/heavy-metal-index/docs/tasks/standards-95-confidence-completion-brief.md:97) | A procedural step, with no standard-PDF freshness check in the ordinary build chain. The same brief already documents the stale-linked-PDF risk at [line 44](/Users/karenpendergrass/Desktop/heavy-metal-index/docs/tasks/standards-95-confidence-completion-brief.md:44). |
| Complete numeric claims, with the current analyte display rule | [HMI CLAUDE Part 19, claim-surface completeness](/Users/karenpendergrass/Desktop/heavy-metal-index/CLAUDE.md:316) | Compiled-record and HTML claim checks exist. They do not inspect PDF bytes or compare extracted PDF cells with the records. |
| Verifiable provenance and correct basis | [HMI AGENTS live method lock](/Users/karenpendergrass/Desktop/heavy-metal-index/AGENTS.md:14), [CLAUDE Part 19](/Users/karenpendergrass/Desktop/heavy-metal-index/CLAUDE.md:272), and [completion brief](/Users/karenpendergrass/Desktop/heavy-metal-index/docs/tasks/standards-95-confidence-completion-brief.md:25) | Confidence and record checks are separate from the PDF renderer. Reading a compiled working record is not a new verification of its legal instrument, scope, or calculation. |

### Nine main rows versus eleven compiled analytes

The latest [CLAUDE Part 19 rule](/Users/karenpendergrass/Desktop/heavy-metal-index/CLAUDE.md:322) controls the public claim display: eight totals (`Pb`, `tAs`, `Cd`, `tHg`, `Ni`, `Al`, total `Cr`, `Sn`) plus `iAs` make **nine main claim rows**. `MeHg` and `Cr-VI` remain two additional species in the **eleven-analyte compiled record**. They retain their numeric limits and applicable testing obligations; they are not two extra main claim-table rows. A separate species note or section can disclose their bounds without changing this distinction.

Every compiled species must remain represented in the underlying record and auditable publication model. A directly governed species value must not be erased or replaced with a fabricated parent bound to make a layout simpler. The current PDF driver's fixed eleven-row `ANALYTES` array at [line 25](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:25), and older prose in the completion brief and claim lint, must not be mistaken for a later override of the live nine-main-row rule. This review changes no governing policy or analyte value.

## Gaps in the current enforcement and output

**Freshness and parity.** `wire-standard-pdf-links.mjs` enables a download based on file existence alone. It neither rebuilds the PDF nor checks input hashes. [Claim-surface lint](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/claim-surface-lint.mjs:145) reads standard `.md` files; [design lint](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/design-lint.mjs:92) also walks Markdown. [check:v3](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/check-v3.mjs:60) tests website computed styles. None proves PDF data parity, date/version parity, font rendering, or pagination quality.

**Provenance is reduced in the PDF.** [The references function](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:104) collects only `read_across` cells and reduces references to generic jurisdiction descriptions. It does not emit their actual source IDs, named instruments, provisions, or primary-source links, and government cells do not produce references there. A generic “government maximum level” does not satisfy the reader's need to trace a particular number to the applicable instrument.

**Variant coverage is incomplete in the derivation apparatus.** [Lines 123–139](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:123) can generate separate limit tables for multiple variants, but the derivation and references use the first variant. This is a broader generator defect even where the two samples each use a single variant.

**Units and basis are overgeneralized.** [Line 146](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:146) labels all standard values ppb/µg/kg. That is unsuitable as a universal template because the standards system also has release, migration, and PDE bases. Native unit and basis should come from the publication model, with an explicit failure for unknown or conflicting bases. This audit does not change either sample's basis or numbers.

**Document identity is inherited from a scholarly article template.** [Back matter](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:544) contains generic preprint/reference status and briefing-specific text. The PDF driver also supplies date/version defaults at [lines 133–161](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs:133). A standard needs its own factual publication status and version/date/DOI metadata; missing metadata must not silently become an invented publication history.

**Pagination has known compromises.** [Table rendering](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:459) prevents individual rows from splitting but does not establish a continued-table header on each following page. [Section grouping](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:480) explicitly permits some headings to strand at the foot of a page. [The footer](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/pdf/scholarly-pdf.mjs:645) omits page numbers because an older dynamic-page-number path failed. These are issues for rendered review, not proof that every output suffers every defect.

There is a useful but limited precedent: [cert `tools/audit-cat1-manual-pdf.mjs`](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/audit-cat1-manual-pdf.mjs:2) compares one consolidated manual's source values and checks extracted PDF tokens. It covers that manual rather than individual standard PDFs, and the extraction check can skip when `pdftotext` is unavailable at [line 145](/Users/karenpendergrass/Desktop/heavymetalcertified/tools/audit-cat1-manual-pdf.mjs:145). Token presence alone also cannot prove that each value appears beside the correct analyte and variant.

## Review artifacts and their limits

The review deliverables are:

- [Olive oil design review](/Users/karenpendergrass/Desktop/heavy-metal-index/output/pdf/olive-oil-design-review.pdf)
- [Fermentation-derived pet-protein design review](/Users/karenpendergrass/Desktop/heavy-metal-index/output/pdf/pet-food-fermentation-derived-protein-design-review.pdf)

These are three-page design proofs built from the current local compiled working records. They demonstrate a revised document hierarchy and typesetting for review. They are not full replacements for the source pages' occurrence narratives, approved standard editions, legal-source verification, certification-ready declarations, DOI deposits, or publication authorizations. The local compiled records used for the proofs are inputs for this review and are not asserted to be a verified source of truth merely because a generator can read them.

Visual improvement and faithful transcription are separate from substantive correctness. Before a revised generator replaces public downloads, the provenance defects and any disputed source mappings must be resolved through the normal source/config/compiler/confidence workflow. No PDF styling task should silently alter a limit or turn an unverified source claim into an approved standard.

### Review builder and recorded checks

The scoped builder is [tools/pdf/build-standards-design-review.py](/Users/karenpendergrass/Desktop/heavy-metal-index/tools/pdf/build-standards-design-review.py:1). It writes only the review PDFs and their snapshot/QA files under `output/pdf/`; it does not write into the cert repository. The PDF subject and visible review notices distinguish the proofs from issued standards. Its selected source data are preserved in [standards-design-review-sources.json](/Users/karenpendergrass/Desktop/heavy-metal-index/output/pdf/standards-design-review-sources.json), including record and manifest hashes, selected variant, register hash, and unresolved register entries.

The builder uses two explicit configurations rather than a general variant fallback: olive oil selects `default`, which matches its manifest; pet protein selects the record's `both`, while its page manifest requests `default`. [The snapshot code](/Users/karenpendergrass/Desktop/heavy-metal-index/tools/pdf/build-standards-design-review.py:58) records both facts, and [the pet proof notes](/Users/karenpendergrass/Desktop/heavy-metal-index/tools/pdf/build-standards-design-review.py:247) disclose the mismatch. That is a deliberate, bounded design-proof choice, not a repair to the production join. A general release generator still needs validated page-to-variant resolution.

The snapshot contains three unresolved GB anchor IDs: olive oil's `china_gb2762_2025_pb_fats_and_oils_80` and `china_gb2762_2025_crtotal_liquid_milk_300`, and pet protein's `china_gb2762_2025_thg_rice_maize_wheat_20`. The proof displays the recorded instrument label with an explicit missing-register warning; no absent register row is manufactured. [The display helper](/Users/karenpendergrass/Desktop/heavy-metal-index/tools/pdf/build-standards-design-review.py:167) recognizes the GB 2762-2025 prefix to produce a readable source-pointer label. This is an interpretation of the existing ID for display, not verification that the claimed edition, scope, or limit applies.

[The recorded QA results](/Users/karenpendergrass/Desktop/heavy-metal-index/output/pdf/standards-design-review-qa.json) report three pages per proof, 11/11 per-analyte numeric-display checks (including numeric parent bounds), passing text-page bounds, no raw `&sup5;` entity or replacement character, and eighteen link annotations per PDF. [The check implementation](/Users/karenpendergrass/Desktop/heavy-metal-index/tools/pdf/build-standards-design-review.py:259) establishes this limited snapshot/display parity. It is not primary-source verification, an independent rederivation of the numbers, full publication-model parity, link-target verification, or a general proof that arbitrary content cannot overlap. Those broader checks remain in the proposed contract below.

## Proposed PDF acceptance requirements

The following is a proposed engineering contract for a later implementation. It is not an amendment to AGENTS, CLAUDE, the method specification, the governing principles, or the existing release/mint gates.

1. **One publication model.** The webpage, export, and PDF consume the same model for each page-to-record join and every variant. It contains the nine main claim rows, both additional species, exact limits, units, basis, provenance classifications, source anchors, assay obligations, and edition metadata. No numeric, species, or basis fallback is inferred by a styling function.
2. **Input and output identity.** A PDF build manifest records the page slug, all input-record hashes, relevant metadata, renderer/template version, font hashes, and PDF SHA-256. Release fails if a required PDF or manifest is absent or stale. This allows locally built committed artifacts without silently trusting their age or filenames.
3. **Cell-level parity.** An independent PDF extraction check compares each analyte/variant/value/unit/basis/provenance tuple with the publication model, including the two additional species. The extractor being absent or failing is a failure, not a skipped pass. Exact source IDs and all cited instruments must also survive the export.
4. **Traceable derivations.** Each claim links to a named instrument, jurisdiction, applicable provision or scope, native value/basis, and disclosed conversion/read-across where relevant. Every variant's provenance is included. Generic country labels alone are insufficient.
5. **Correct document identity.** The PDF carries the actual category, scope, edition/version, publication status, dates, canonical page URL, and DOI only when present in approved committed metadata. A review proof remains visibly a review proof. Standard-specific disclosures replace unrelated scholarly-preprint boilerplate.
6. **Rendered layout checks.** Review every page for clipping, overlap, missing glyphs, legible body/table text, consistent margins and font roles, repeated headers on continued tables, table-row integrity, useful page numbers, and headings kept with their following content. Store raster previews for the changed sample documents so another reviewer can inspect the actual result.
7. **Representative cases.** Exercise olive oil, fermentation-derived pet protein, a long-title case, a multi-record/multi-variant page, lengthy source references, and a non-ppb release/migration/PDE standard. Use the actual publication-model distinctions; do not coerce the examples into one basis to fit the template.
8. **Release wiring.** Run freshness, semantic parity, metadata, and required-artifact checks in the release path. Add a separately reviewable PDF visual-acceptance specification. A successful HTML design check must never be reported as a successful PDF check.

The source/provenance gaps above are scoped follow-up work for the production standards generator. They remain open in this review and are not represented as fixed by the design proofs.

## Reproduce the identity and code audit without changing production

The following commands are read-only. They neither rebuild committed downloads nor invoke prebuild, mint, deploy, or external write tools.

```sh
pdfinfo /Users/karenpendergrass/Desktop/olive-oil.pdf
pdfinfo /Users/karenpendergrass/Desktop/pet-food-fermentation-derived-protein.pdf
shasum -a 256 /Users/karenpendergrass/Desktop/olive-oil.pdf /Users/karenpendergrass/Desktop/pet-food-fermentation-derived-protein.pdf
pdfinfo /Users/karenpendergrass/Desktop/heavymetalcertified/content/static/standards/olive-oil.pdf
pdfinfo /Users/karenpendergrass/Desktop/heavymetalcertified/content/static/standards/pet-food-fermentation-derived-protein.pdf
shasum -a 256 /Users/karenpendergrass/Desktop/heavymetalcertified/content/static/standards/olive-oil.pdf /Users/karenpendergrass/Desktop/heavymetalcertified/content/static/standards/pet-food-fermentation-derived-protein.pdf
git -C /Users/karenpendergrass/Desktop/heavymetalcertified show 7bbe79e:content/static/standards/pet-food-fermentation-derived-protein.pdf | shasum -a 256
git -C /Users/karenpendergrass/Desktop/heavymetalcertified log -1 --format='%h %ad %s' --date=iso-strict -- content/static/standards/olive-oil.pdf content/static/standards/pet-food-fermentation-derived-protein.pdf
rg -n 'prebuild|postbuild|check:v3|release' /Users/karenpendergrass/Desktop/heavymetalcertified/package.json
rg -n 'ANALYTES|findPageRecords|variantTables|references|All values in ppb|renderScholarlyPdf' /Users/karenpendergrass/Desktop/heavymetalcertified/tools/build-standard-pdf.mjs
rg -n 'existsSync|scholar_pdf' /Users/karenpendergrass/Desktop/heavymetalcertified/tools/wire-standard-pdf-links.mjs
rg -n 'Claim-surface completeness|9 rows' /Users/karenpendergrass/Desktop/heavy-metal-index/CLAUDE.md
```

To inspect extracted text without writing to a served path, use `pdftotext -layout <absolute-pdf-path> -`. Text extraction complements rendered-page review; it does not establish visual quality or legal correctness by itself.

## Reproduce the local design proofs

From `/Users/karenpendergrass/Desktop/heavy-metal-index`, run the following with the saved snapshot to repeat the reviewed data inputs. It writes only the local review artifacts in `output/pdf/`. Byte-identical output also requires the same builder, bundled runtime, and vendored fonts.

```sh
/Users/karenpendergrass/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 tools/pdf/build-standards-design-review.py --snapshot output/pdf/standards-design-review-sources.json
```

To intentionally take a new snapshot of the current local working records, omit `--snapshot`:

```sh
/Users/karenpendergrass/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 tools/pdf/build-standards-design-review.py
```

The latter command replaces the saved review snapshot and may change the proof as concurrent standards work changes the source records. Neither command rebuilds or replaces a public standard download.

Final proof verification: both three-page PDFs were rendered with Poppler and all six pages were visually inspected after the last layout change. No clipping, overlaps, stranded headings or missing glyphs were observed. Each PDF has 18 link annotations (internal references plus source/page URLs). Rebuilding with the same saved snapshot, runtime and fonts produced identical PDF SHA-256 hashes. This checks reproducibility and presentation, not legal validity.
