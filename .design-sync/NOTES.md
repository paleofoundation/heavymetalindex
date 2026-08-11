# design-sync notes — Heavy Metal Index → claude.ai/design

Repo-specific gotchas for future syncs. Read before re-syncing.

## Shape: off-script (hand-authored wrapper library)

HMI is a **Quartz static site**, not a component library — the standard converter cannot bundle Quartz components (they take the whole build graph as props, there is no `dist/`, `package.json` is `private` with no exports). So the DS is a **hand-authored React wrapper library** at `.design-sync/hmi-ds/` whose 12 components emit the EXACT markup + class names of the live Quartz components. It ships the **real compiled v3 CSS** (`public/index.css`) so the wrappers are styled identically. A design built in Claude Design maps back to Quartz by class name (the forward-direction "port the proof" workflow).

- Target project: `Heavy Metal Index Design System` (`c70d039a-eeb6-422a-8ed8-890116b16564`).
- `buildCmd` = `cd .design-sync/hmi-ds && node build-css.mjs && npx tsc -p tsconfig.json`.
- `build-css.mjs` regenerates `styles/hmi-v3.css` = `public/index.css` + the Google-Fonts `@import` prepended. The compiled CSS carries **no** `@font-face`/`@import` because Quartz injects the font stylesheet into the HTML `<head>` separately (`fontOrigin: googleFonts`); the fonts (Lora / Inter / IBM Plex Mono) load at runtime from the font host, exactly as the live site does. `runtimeFontPrefixes` suppresses `[FONT_MISSING]`.

## CRITICAL preview gotcha — Preact vs React

The repo-root `tsconfig.json` sets `jsxImportSource: "preact"` (Quartz uses Preact). esbuild **auto-discovers** it when compiling the preview `.tsx`, producing Preact vnodes, which the real-React preview harness cannot render → `[RENDER] root empty`. **Fix:** `.design-sync/previews/tsconfig.json` pins `jsxImportSource: "react"` (nearest-wins). **Do not delete that file.** React resolves from `.design-sync/hmi-ds/node_modules` (react@18) via the converter's `nodePaths` (`--node-modules`).

## Component set decisions (12 shipped)

- **Included, styled by the shipping CSS:** TopNav, HeroBand, Footer, SourceCitationPanel, ProductEvidenceSummary, Corrections, RelatedPages, GridOfRecords, KeyValueList, CaveatCallout, DataTable, ChipGroup.
- **RelatedPages** is not in the live `quartz.layout.ts`, but its flat `hmi-related`/`hmi-related-title` classes ARE in `public/index.css` (the pre-v3 grid classes `hmi-related-grid`/`-group` grep 0), so the wrapper emits the flat v3 markup. Markup sourced from `.tmp-recovery-20260611-191438/`.
- **Corrections** — the live Quartz component is headless (renders `null`); the form markup lives in `wiki/errata.md`. The wrapper reconstructs that form.
- **EXCLUDED — EvidenceHeader, CiteThisPage.** Both are deleted/unmounted Quartz components whose SCREEN CSS is not in `public/index.css` (`hmi-evidence-*` grep 0; cite selectors exist only in an `@media print` block). They would render unstyled, so they are deliberately not synced. Full wrappers were drafted (agent output) then removed. **If Karen re-mounts them live** (so their `.scss` compiles into `public/index.css`), re-author and include.

## Reserved CLAUDE.md (cannot be managed by the tool)

The DS project carries a stale `CLAUDE.md` (the repo's wiki operating manual, from the earlier raw-dump upload). DesignSync **blocks both write and delete of `CLAUDE.md` and `.claude/`** (reserved: they carry design-agent instructions). So it cannot be replaced via the tool. The proper design guidance lives in `README.md` (the conventions header). If the stale file must be replaced, do it in the claude.ai/design UI directly.

## Card viewports

Full-width chrome uses viewport overrides so the card shows the desktop layout, not the mobile-collapsed state: `TopNav` = `{cardMode:"single","viewport":"1360x120"}`; `GridOfRecords` = `{cardMode:"column","viewport":"1024x680"}`. HeroBand/Footer/ProductEvidenceSummary/DataTable/Corrections/RelatedPages = `column`.

## Known render warns (triaged — not new)

- `[TOKENS_MISSING]` (non-blocking): 7 vars referenced by the full site CSS but unused by the 12 components — `--shiki-light`/`-light-bg`/`-dark`/`-dark-bg` (code highlighting), `--shadow-xs`, `--radius-xs`, `--bar-width` (graph). Safe to ignore.

## Re-sync risks (watch-list)

- `styles/hmi-v3.css` is regenerated from `public/index.css` every build. If the site is rebuilt and `public/index.css` changes, `buildCmd` picks it up automatically. But a NEW v3 class added to the site does not auto-create a wrapper — author new wrappers as needed.
- The component set is hand-curated (12). Adding one = author `hmi-ds/src/<Name>.tsx` + `previews/<Name>.tsx` + a barrel export + rebuild.
- If the repo-root `tsconfig.json` `jsxImportSource` changes, the preview override still pins `react` — keep `.design-sync/previews/tsconfig.json`.
- Watch EvidenceHeader/CiteThisPage: if re-mounted live, they become includable.
- The reserved `CLAUDE.md` cannot be updated by re-sync.
