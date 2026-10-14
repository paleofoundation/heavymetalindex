# Burgundy and marigold refresh — 2026-10-14

## Authorization and scope

Karen requested a refresh of the existing Heavy Metal Index website and required
that its existing GitHub source be found before work proceeded. The source is
[`paleofoundation/heavymetalindex`](https://github.com/paleofoundation/heavymetalindex).
On 2026-10-14 she explicitly authorized using an isolated copy in
`/Users/kmfp/Documents/ChatGPT/Drug Repurposing/heavy-metal-index-refresh` for this
work, despite the repository's standing canonical-directory instruction. This is
a task-specific exception; it does not relocate the canonical repository.

Her confirmed direction is: “Keep the layout and content as they are—just refresh
the colors and styling with richer burgundy and marigold accents.”

This change is limited to colors and visual styling. Preserve the existing layout,
markup, fonts, typography sizes, spacing, dimensions, responsive breakpoints,
content, data, navigation, and interactions. The current homepage motif, article
hero structure, and other existing geometry remain intact. This task authorizes
no content acquisition, evidence changes, or scientific reinterpretation.

## Palette and application

| Role | Color |
|---|---|
| Primary burgundy | `#7b153b` |
| Deep burgundy | `#5b0d2a` |
| Footer burgundy | `#480c24` |
| Marigold accent | `#ffc329` |
| Marigold hover | `#ffd569` |
| Pale panel tint (light purple) | `#f6ecf0` |
| Active-navigation gold | `#9b6700` |

Burgundy remains the site's dominant brand color. Marigold is applied selectively
to the existing hero headline accent, search and primary action treatments,
decorative rules, article symbol and kind badge, and labels on the dark footer.
Keep reading surfaces neutral and readable. Use dark burgundy text on filled
marigold controls and maintain visible hover and keyboard-focus states.

Scientific grades, evidence tiers, regulatory status, and other semantic colors
retain their distinct meanings. Decorative accent changes must not make unlike
statuses appear equivalent or imply a change in evidence quality.

## Relationship to earlier design specifications

For this refresh, the palette above supersedes the exact older color values in
the v3 design specifications. It does not authorize any new geometry requirement
or the restoration of historical layouts. The older specifications remain as
historical design records; preserve the current site's structure rather than
using this palette update to resume earlier information-architecture work.

Edit the existing declarations that own each treatment. Preserve the declared
cascade order in `quartz/styles/custom.scss` and the legacy component layer;
do not add specificity patches to override another live declaration. Files under
`wiki/`, `data/`, and `raw/` are outside this refresh's scope.

## Verification

Verified against base commit `b0ed5d00762d6b1fe1c2ef7cd7410aa5f8d30f3b`,
which also backs the current production deployment at the start of this work.

- Both baseline and candidate Quartz builds succeeded: 4,506 Markdown inputs,
  5,255 emitted files each. All 5,160 HTML files are byte-identical after
  normalizing the stylesheet hash in its filename. No content or template edits.
- Homepage and Lead article checked at 1440 × 900 and 390 × 844. Rendered text,
  element coordinates/dimensions, font family, font size, and line height match
  the baseline at each size; no horizontal page overflow. Screenshots reviewed.
- Text contrast: deep burgundy on marigold 8.52:1; white on primary burgundy
  10.43:1; primary burgundy on marigold tint 9.51:1. Active-navigation indicators
  use darker gold for visibility against ivory; bright gold remains decorative.
- `npm run check` passed. `npm test`: 447/449 passed in the authorized workspace.
  The two failures are unchanged standards CLI entrypoint guards comparing an
  encoded URL with an unencoded path containing spaces. Running the two unchanged
  test files with their unchanged fixtures under `/private/tmp/hmi-palette-test-baseline`
  passes all 16 assertions, including both previously failing cases. The guards
  and scientific files are outside this styling task and remain unchanged.
- Test-generated changes to the state-of-food report were restored. The final
  source diff contains only SCSS colors, matching Quartz light-theme colors,
  and this design documentation. `git diff --check` passed.

These static builds intentionally render the committed corpus without rerunning
research generators. Publication uses the existing Git-connected Vercel pipeline
and its full build gates; never replace that pipeline with this comparison build.

## Follow-up: remove homepage hero buttons — 2026-10-14

Karen supplied a screenshot of the “Explore syntheses” and “Our methods” buttons
and asked to remove them. Remove their shared navigation row beneath the homepage
search. This explicitly authorizes that narrow markup change to `wiki/index.md`;
the original palette-only restriction above remains the historical scope of the
initial refresh. Keep the search, existing page content, and other links to
syntheses and methodology. No stylesheet or research-data changes are required.

## Follow-up: light purple panel backgrounds — 2026-10-14

Karen prefers the light purple from the existing “Found an error?” correction
box in place of pale yellow surfaces. Use the existing `--burg-tint` (`#f6ecf0`)
for the homepage ledger header/footer, article Quick Read panels, reuse-panel
headings, and selected search suggestions. Match the ledger borders to the
existing purple border (`#eddfe4`) and use a deeper purple tint on its link hover.
Retain saturated marigold actions, accent rules, headline accents, and decoration.
This is a color-only follow-up with no layout, markup, content, or data changes.

Karen also requested that the two offset layers behind the “Library at a glance”
card use the same light purple. Use `--burg-tint` for both backing layers,
preserving their existing positions, opacity, borders, and the card’s accent rule.
