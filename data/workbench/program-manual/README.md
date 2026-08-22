# Heavy Metal Tested and Certified, Program Manual (program-level)

This directory holds the source for the **program-level** Program Manual: the volume
that describes the HMTc program as a whole (why it exists, governance, how a limit is
set, certification, surveillance, methodology, and, in the internal edition, program
operations). It sits *above* the per-category standards manuals in
`data/workbench/standards-book/`, which carry one category's master limit tables each.

Three editions are generated from one content set:

- **Internal** (`build/HMTc-Program-Manual-Internal-2026.pdf`) — the complete manual,
  including Part 6, Program Operations, and the internal-use notice. For ICS staff.
- **Public** (`build/HMTc-Program-Manual-Public-2026.pdf`) — the external edition, with
  Part 6 and the internal notice dropped. Everything retained is firewall-safe (no
  brand-level data; the methodology it describes is published on heavymetalcertified.com).
- **Team Primer** (`build/HMTc-Program-Team-Primer-2026.pdf`) — the ~8-page (body)
  day-one onboarding doc: the plain-language intro, the end-to-end certification journey,
  and the at-a-glance cheat sheet (the shared Orientation section), plus a pointer into
  the full manual. Same source as the manual, so it cannot drift from it.

## Content files (document order)

`00-internal-notice.md` (internal only) · `07-primer-intro.md` (primer only) ·
`01-edition.md` · `02-toc.md` · `03-how-to-read-{internal,public}.md` ·
`05-orientation.md` (all editions: start-here + certification journey + at-a-glance) ·
`10-part1-why.md` · `20-part2-program.md` · `30-part3-standards.md` ·
`40-part4-testing.md` · `50-part5-methodology.md` · `60-part6-operations.md`
(internal only) · `90-colophon.md` · `95-references.md` · `08-primer-next.md`
(primer only).

Edit the content files, never the assembled masters in `build/` (they are regenerated).
`05-orientation.md` is shared by the manual and the primer; edit it once and both update.

## Rebuild

```
node data/workbench/program-manual/build.mjs --edition=all
node tools/standards/render-program-manual.mjs --input=data/workbench/program-manual/build/HMTc-Program-Manual-Internal-2026.md --subtitle="Program Manual" --edition="2026 Edition · Internal" --pdf
node tools/standards/render-program-manual.mjs --input=data/workbench/program-manual/build/HMTc-Program-Manual-Public-2026.md   --subtitle="Program Manual" --edition="2026 Edition" --pdf
node tools/standards/render-program-manual.mjs --input=data/workbench/program-manual/build/HMTc-Program-Team-Primer-2026.md     --subtitle="Team Primer"    --edition="2026 Edition · Internal" --pdf
```

`--edition=all` builds internal + public + primer; `--edition=both` is internal + public;
or pass a single edition (`internal`, `public`, `primer`).

`build.mjs` runs a firewall check (engine shibboleths) and an em-dash guard on each
master. The renderer reuses the shared Typst book template
(`tools/standards/typst-template.typ`) and falls back to Georgia/Helvetica when the
licensed display fonts are absent; set `TYPST_FONT_PATH` to override.

## Sources of truth this manual summarizes

- Governing Principles: `docs/governance/hmtc-governing-principles.md`
- Governance Policy (Part 2): `data/workbench/standards-book/source-documents/governance-policy.md`
- Lot Testing Schedule (Part 4): `data/workbench/standards-book/source-documents/lot-testing-schedule.md`
- Method v2.0 (Part 3.1): CLAUDE.md Part 19; `docs/standards-methodology.md`; the live
  `program/structure.md` and `program/two-pathways.md` on heavymetalcertified.com
- Taxonomy (Part 3.2): `data/taxonomy/hmtc-v2.json`

When those sources change, edit the corresponding content file and rebuild. Facts here
must not drift from the controlled operating documents; where they disagree, the
controlled document governs.
