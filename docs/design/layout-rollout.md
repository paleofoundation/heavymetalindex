# Shared page-type layout rollout

PR #248 supplies `HeroBand`, the author sidebar, `article-layout.scss` and
`citedEvidenceSnapshot`. `quartz/util/sectionHero.ts` enables one shared template
per section. Every enabled page gets that section's decorative fallback. A valid
`hero_image` path overrides it, so replacing a placeholder requires changing only
that existing image path. Existing `hero_image_alt` remains supported. Placeholder
images have empty alt text because they describe the section rather than the
individual article. No placeholder ImageObject or SEO metadata is added.

Exactly five section assets are derived from approved PR #248 illustrations,
without new image generation. Their source files, hashes, decoded dimensions,
quality and byte sizes are in `data/design/section-hero-placeholders.json`.
All are 2164×721, WebP quality 85 and below 250 KiB. The established gradient,
photographic composition, dark left half and sidebar remain unchanged. See
`docs/IMAGE-STYLE.md` for the locked treatment.

Snapshot counts use only eligible source records in each page's References
section, including canonical deduplication. They do not use corpus inventory,
frontmatter source totals or incoming links. Zero means no eligible bibliography
records, not no literature in existence. The panel explains the counting scope.

Key facts re-present up to three cited contamination-table rows (retaining their
existing headers, units and confidence) or complete existing cited paragraphs with links
to their original section. They never cut off a qualifier or generate scientific
text. Unresolved or pending sources, pending pages, source inventories and
bibliography entries cannot produce a fact. Long paragraphs remain in the body;
limited evidence can result in fewer than three facts or no fact block. Article
bodies, frontmatter, titles and SEO code are outside the layout changes.

## Verification

Run the repository CI checks, build, then serve `public/`. Run:

```
node tools/check-layout-rollout.mjs ingredients http://localhost:8791 /tmp/hmi-layout-qa
```

The checker inventories rendered pages, selects ten distinct samples (or all
pages if fewer than ten exist), and checks 1440px desktop, 390px mobile and 320px
narrow mobile. It checks document overflow, image loading, sidebar presence,
responsive geometry, fact count and fact anchor destinations. It records JSON
and representative desktop/mobile screenshots. Alias redirects are excluded. Counts refer to rendered article HTML,
including section directories and nested pages, rather than source-file totals.

Each section is enabled in its own PR. Later PRs may depend on the ingredients
PR's shared infrastructure. Review and merge them in dependency order.
