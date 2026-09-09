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

## Panel alignment and synthesis follow-up

Karen identified that matching text insets did not align the actual rail panels. The old body used 236/312-pixel rails plus 56-pixel gaps; the hero used 264/340-pixel side panels without gaps. `quartz/styles/article-layout.scss` now supplies one grid, maximum width, outer gutter, and inner padding for both halves. A light reading-panel background makes the continuous center boundary visible. Quartz's intermediate mobile body padding is explicitly removed, and both grids switch to a single column at the same breakpoint.

Synthesis titles retain their complete text with a more suitable 32–44-pixel scale. Existing page DOIs now appear directly under the title with a visible DOI label; the DOI metadata, citation action, history action and scholarly PDF link are retained. No DOI, publication status, or evidence claim is invented.

Verification uses the DOI-bearing `synthesis/metals-microbiome-disease-pathogenesis` page. Fixed-width frames isolate phone/tablet/desktop geometry from other tasks resizing the shared browser. The isolated preview build avoids concurrent writers to `public/`. Focused HMI types pass; the same unrelated state-of-food test count assertion remains (290/291 tests passing).

Final checks: all three panel boundaries match within 0.1 pixels at 1440 and 1920 pixels; the stacked center and right panels match at 390 and 1100 pixels. Hero content and DOI fit at all four widths. The synthesis DOI equals `citation_doi`; citation/history anchors resolve; the preview PDF exists and has a valid PDF header. The final isolated Quartz build passed (4,944 emitted files), and the existing renderer generated 25 synthesis PDFs and 10 metal PDFs in the preview folder.
