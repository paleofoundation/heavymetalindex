# Article hero adaptation — 2026-09-09

Requested by Karen: adapt Microbiome Medicine's article-page hero to Heavy Metal Index's material and burgundy theme, with the rounded-square author portrait in the right panel.

## Reference and implementation

Reference implementation: `/Users/karenpendergrass/Desktop/microbiomemedicine/src/components/ArticleView.tsx` and the `.research-hero__*` rules in `src/styles/theme-wp.css`. The supplied Endometriosis screenshot defines the visual direction. Adapted the three columns, lighter center panel, bottom-aligned actions, author attribution and snapshot placement. Retained HMI's Lora typography, burgundy #8b2a4a, dark burgundy #6f2139, page metadata, ORCID, citation/history links and PDF eligibility.

The shared `HeroBand` covers internal reference and directory pages; the homepage keeps its existing separate design. Metal pages use their existing element symbol in the left rail; other pages use a decorative reference-book mark. The decorative rail is omitted on tablets and phones. The author panel stays visible on phones, below the title and actions.

The author photograph is Karen's existing public portrait, identified by Microbiome Medicine's `src/theme/authorsBios.ts`, retrieved from `https://secure.gravatar.com/avatar/104bc2e8ba283fda6309c14b2eca02fe9612e8793ed62621c691e83230d4a963?s=192&d=404&r=g`. It is stored locally as `quartz/static/authors/karen-pendergrass.png`, so page views do not contact Gravatar. The portrait and byline link to HMI's existing About page.

## Validation

- `npm run build`: passed including prebuild and postbuild.
- Focused TypeScript check for Quartz, its config/layout, and root declaration files: passed.
- `npm test`: 290 passed, one unrelated existing state-of-food report assertion failed (25 synthesis records versus 24 expected).
- `npm run check`: blocked by the separate untracked `sites/ics` application's Next/vinext/Cloudflare type setup being included in the root TypeScript project.
- Lead preview inspected at desktop and phone widths; portrait loads, citation and history anchors resolve, and actions wrap on phones.
- Removed legacy hero grid/action overrides and the inherited header margin on pages with a hero.

The unrelated check failures are recorded as `OI-20260909-hero-baseline-validation`. This change is a local design preview, not a production deployment. Generator refreshes from validation are separate from the design commit.
