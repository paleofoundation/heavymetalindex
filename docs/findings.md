# Findings

Defects and structural problems noticed in passing, logged rather than chased so
they do not derail the task that surfaced them. Each entry records what is
broken, how it was found, and what it blocks. Nothing here is scheduled; a later
session picks entries up deliberately.

## 2026-08-05 — the v3 body/section work is stranded on an unmerged branch

`feat/v3-bodies` (worktree `~/hmi-work/hero-v3`) holds 219 commits that are not
on `main` and were never pushed to origin. It is the entire v3 body-section
build: section vocabulary, page snapshots, the synthesis directory, the
ingredient completeness scorecard, the rebuilt Ask screen, the metals screen,
eight rewritten synthesis findings, and `HeroBand.tsx`.

Found while looking for the PDF generator, which was one commit inside it
(`66634bcd2`). That commit has now been ported to `main` on its own; the other
218 have not. `main` is meanwhile 401 commits ahead of the branch on the content
lane, so this is a lane divergence, not a stale feature branch — merging it is a
deliberate reconciliation, not a fast-forward.

Blocks: every other v3 body-section improvement is invisible on the live site.

## 2026-08-05 — the right rail's actions are dead placeholder links

`quartz/components/Rail.tsx` renders four actions — Follow, Cite this page,
Evidence packet, Share. Three point at `#sources` and one at `#`. None of them
do anything. The rail is on every content page, so every content page shows four
buttons that silently fail when clicked.

Download PDF was added to this rail as a real link (this session). The other
four were left as found.

Blocks: readers who want the citation or the evidence packet cannot get either.

## 2026-08-05 — CiteThisPage is not mounted, so its features do not exist

`quartz/components/CiteThisPage.tsx` implements the working versions of what the
rail fakes: the canonical citation line, Copy citation, BibTeX and RIS download,
share links, and the evidence-packet download. `quartz.layout.ts` carries two
comments saying the component "moved OUT of afterBody and INTO the right rail",
but the right rail contains only `Rail()` and `SourceCitationPanel()`. The
component is referenced nowhere and renders on no page.

This is the failure mode where dropping a component from the layout silently
un-ships its markup, inline JS and CSS site-wide, with the comments left behind
describing an arrangement that no longer exists.

Blocks: BibTeX/RIS export, copy-citation, and the evidence-packet download.

## 2026-08-05 — a YAML syntax error in one page hard-failed the whole build

`wiki/regulations/ca-prop65-ab2762-cosmetics.md` carried an unquoted colon in
its `metal:` frontmatter value, which threw an unhandled `YAMLException` out of
`gray-matter` and killed `npm run build` before Quartz emitted anything. The
build exited without a usable error message pointing at the page.

Fixed locally this session by quoting the value, matching the fix already on
`origin/main` (`9882fa9f2`). Logged because the failure mode remains: one
malformed frontmatter value anywhere in 3,962 pages takes down the entire build,
and the crash names the YAML line but not the file.

Blocks: nothing now. Worth a guarded parse that names the offending file.
