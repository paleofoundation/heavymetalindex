# Homepage hero — 2026-09-10

Karen requested more dimension in the homepage hero and a register appropriate to an authoritative heavy-metals reference library. She explicitly asked to preserve the rest of the homepage.

## Editorial direction

Headline: **The reference library for heavy metals.**

Supporting paragraph: Research on heavy metals in food, consumer products, and human health. Explore what is known, where studies disagree, and the evidence behind the findings.

The hero now leads with the library's purpose and scope. Document hashes and extraction mechanics remain explained elsewhere. The copy makes no claim of exhaustive coverage, established supremacy, or affiliation with Cochrane. Links to evidence syntheses and methodology make the library's central work accessible directly from the hero.

## Visual direction and scope

The existing Lora, Inter, and IBM Plex Mono typography and burgundy palette are retained. Karen reviewed the initial darker preview and requested the lighter character of the interior pages. The backdrop therefore uses the standard #8b2a4a burgundy with a translucent ivory highlight, without the footer's dark wine color. Fine concentric background rules and an ivory ledger with offset paper edges provide depth without motion, image downloads, or additional scripts. The original flat hero rules are replaced in `quartz/styles/home-v3.scss`.

This user-requested hero revision supersedes the older v3 ban on gradients and shadows for this hero only. It is not a claim of exact v3 artifact conformance. Article heroes, navigation, footer, and every section below the homepage hero retain their existing design.

The authored copy lives outside generator markers in `wiki/index.md`. `tools/build-corpus-counter.mjs` owns the generated panel; its heading becomes “Library at a glance,” and its note links to coverage. Counting logic, grades, and numbers are unchanged. The existing inline search implementation is preserved, with the copy column above the paper panel so the suggestion list stays usable.

## Verification

- Read-only comparison confirms the canonical homepage is byte-identical to the pre-edit snapshot outside the hero; all six metric rows are unchanged.
- Running the corpus-counter generator twice preserves the new copy and produces identical output.
- TypeScript check passed in an isolated fixture of the committed release baseline plus only this task's edits.
- All 10 search-ranking regression tests passed.
- Browser verification covers desktop and phone layout, heading spacing, overflow, and in-place search suggestions.

No source ingest, numeric evidence, regulatory values, or certification methodology changed. Wiki edit audit: `hmi-20260910-homepage-hero-library`.
