# Karen Pendergrass author profile — 2026-09-09

## Scope

Replaced the article-author image with Karen's supplied portrait on a pink, white, and burgundy background. Portrait and byline links now lead to `/authors/karen-pendergrass`. Added a compact hover/focus bio card, a dedicated author masthead, work-history timeline, research focus, seven selected DOI-linked works, and links to the full ORCID and WikiBiome profiles. About links to the new profile. The existing shared hero/body rail geometry and synthesis DOI placement are retained.

The profile has its own research-links rail and ProfilePage/Person structured data. It shares the same identity, photograph, ORCID, and four affiliations as the author card. No external profile requests happen during page views; the site remains a static build. The browser script cleans up listeners on Quartz navigation. Escape dismisses the card in capture phase so the existing global search shortcut cannot steal focus.

## Profile provenance

- User explicitly supplied the four affiliations: Institute of Contaminant Standards, Paleo Foundation, Microbiome Medicine, WikiBiome.
- Public ORCID record read 2026-09-09: https://pub.orcid.org/v3.0/0000-0002-2348-7259/record (public profile: https://orcid.org/0000-0002-2348-7259).
- ORCID employment history: ICS, 2026–present, Founder & Chief Executive Officer; Standards Architect; Research Lead. Microbiome Medicine, November 2023–present, Researcher. Paleo Foundation, January 2010–present. Founder roles come from the record's biography.
- WikiBiome public profile inspected in the browser: https://www.wikibiome.com/researchers/0000-0002-2348-7259. It supplies the research-profile design direction and identifies the four selected Zenodo works as preprints. Bibliographic titles and DOIs were cross-checked against the public ORCID record.
- WikiBiome's founder/scientific-editor role: https://www.wikibiome.com/about. No start date was inferred for this affiliation.
- The three selected HMI syntheses are listed in ORCID and already exist in the repository. No evidence was ingested, no source-page claims were changed, and no peer-review or clinical-qualification claim was added.

## Portrait

Input: `/Users/karenpendergrass/Desktop/Karen_Pendergrass.avif`, converted losslessly to PNG for tool compatibility. Mode: built-in image-generation tool, identity-preserve background edit. Selected generation: `exec-924c45ee-4f2a-4d50-9455-8394ea49e100.png`. Final web asset: `quartz/static/authors/karen-pendergrass-hmi.webp`, 720×720, approximately 41 KB. The generated master remains in the image tool's output directory. Only format/size optimization followed generation.

Final prompt:

> Edit this exact author portrait for Heavy Metal Index. Preserve Karen Pendergrass's face, identity, facial proportions, age, expression, freckles, natural hair, white blazer, brown top and crossed-arm pose faithfully; do not beautify, redraw, retouch or change the person. Replace only the transparent/black background and remove the grey cutout halo around hair with a clean contemporary editorial geometric backdrop in the brand's burgundy #8b2a4a, soft blush pink #edcad5, and warm white #fffdfb. Large restrained diagonal or gently curved color fields, predominantly pale pink and white behind her hair for contrast, a burgundy corner, no text, no logos, no symbols, no props. Professional realistic photo, flat matte background with crisp shapes, not a gradient. Frame as a square portrait from head to crossed arms, keeping all hair visible and natural face size, suitable for a rounded-square author avatar and large biography portrait. Output high quality square image.

## Validation and delivery

Focused Quartz TypeScript check passes. Existing URL/path tests pass (23/23). Isolated Quartz build and browser checks cover the profile, portrait navigation, section anchors, card keyboard behavior, and responsive geometry. The earlier root-check issue (`sites/ics` being included in the root project) and report-count test mismatch are already recorded in `OI-20260909-hero-baseline-validation`; unrelated generators were not rerun over the other task's working changes.

Local preview: http://127.0.0.1:8767/authors/karen-pendergrass. Production promotion remains in the existing hero-preview promotion queue. This change does not deploy the site.

Final browser results: author hero/body columns match within 0.1px in 390, 1100, and 1440px fixed frames; the synthesis hero/body also match in phone and desktop frames. Author-profile content and the 340px bio card fit the phone viewport. All hero/profile section anchors resolve, the optimized portrait loads, and Escape preserves focus on the author link. Portrait click navigates directly to the bio. The final Quartz build emitted 4,948 files; 35 existing scholarly PDFs were rendered into the isolated preview.

The pre-existing mobile header/footer overflow is recorded as `OI-20260909-mobile-chrome-overflow`. It is outside the new author surfaces. The shared outstanding ledger already contains another writer's uncommitted entry, so its queue updates remain in the shared working tree rather than being swept into the scoped design commit.

## Production release — 2026-09-09

Published tested commit `94a0d64491f1d10c3f00d6fcf25327fb23e4ea93` through the existing manual production workflow: https://github.com/paleofoundation/heavymetalindex/actions/runs/34354977101. Vercel reported successful deployment, and the custom domain was verified in the browser.

The DOI now lives below the author in the right-side Page snapshot card; the middle hero contains no DOI. The branded portrait opens the bio page, the author card opens on focus, all four affiliations and ORCID are present, and the live synthesis PDF downloads as a 19-page document. Shared hero/body rail geometry remains aligned.

Release validation ran against an isolated tracked snapshot: all 288 tests passed, full TypeScript check passed, prebuild passed, production build completed, and all 35 scholarly PDFs rendered. The root TypeScript project now excludes the separate sites workspace and the stale report test expects the existing 25 findings.

Live profile: https://heavymetalindex.com/authors/karen-pendergrass
Live synthesis: https://heavymetalindex.com/synthesis/metals-microbiome-disease-pathogenesis
