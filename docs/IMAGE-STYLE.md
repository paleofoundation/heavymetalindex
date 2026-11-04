# Heavy Metal Index image style

Canonical reference: merged PR #248, branch `codex/all-metal-hero-layout`. Audited against main `caabf68b40f485d284e591ddaff013c24a357f4b` on 2026-10-16. The 36 metal/species profiles and their 17 shared hero assets establish the site-wide style. The source of the original prompts is `quartz/static/heroes/README.md`; its complete text is copied verbatim at the end of this document.

## Image treatment and composition

Use AI-generated conceptual editorial still lifes with a restrained photographic appearance and realistic materials. These are illustrations of subjects, exposure pathways or research context, never photographs of a tested sample. Use charcoal work surfaces, muted earth colors, burgundy undertones, natural side lighting and soft focus. Keep objects in the center-right and reserve the dark left half for white HTML text. No people, brands, text, labels, numbers, diagrams, warning signs, watermark, visible contamination or analytical results. Do not depict a material as contaminated, safe, compliant or certified. Do not introduce a metal-exposure claim through an illustrative subject.

Use the exact common prompt below, followed by one space and a concrete scene description. Keep every word of the common prompt. The lead and arsenic prompts are historical exceptions, preserved below rather than rewritten. Related pages may share a still life when its visible subjects genuinely fit every destination. A shared image is not a substitute for a subject fit review. Each destination needs its own descriptive alt text. Keep purees and prepared formula generic where their visual appearance cannot establish composition.

## Palette

The prompts specify color direction, not numeric photographic color values. The exact hex codes below are the committed UI colors surrounding and overlaying those images; they must not be misrepresented as colors mandated by the historical prompts or exact sampled photo colors.

| Role | Hex | Committed source |
| --- | --- | --- |
| Primary burgundy | `#7b153b` | `quartz/styles/proof-design.scss` |
| Deep burgundy | `#5b0d2a` | `quartz/styles/proof-design.scss` |
| Burgundy tint | `#f6ecf0` | `quartz/styles/proof-design.scss` |
| Light burgundy tint | `#fbf5f7` | `quartz/styles/proof-design.scss` |
| Illustrated hero background | `#351723` | `quartz/styles/article-layout.scss` |
| Hero overlay base | `#351323` | `quartz/styles/article-layout.scss` |
| Author/reference sidebar | `#401326` | `quartz/styles/article-layout.scss` |
| Hero title and copy | `#ffffff` | `quartz/components/styles/heroBand.scss` |
| Breadcrumb supporting text | `#f2dce4` | `quartz/components/styles/heroBand.scss` |
| Marigold UI accent | `#ffc329` | `quartz/styles/proof-design.scss` |
| Marigold hover | `#ffd569` | `quartz/styles/proof-design.scss` |
| Page background | `#faf7f4` | `quartz.config.ts` |
| Body ink | `#3f3a3f` | `quartz/styles/proof-design.scss` |

The desktop overlay is exactly `linear-gradient(90deg, #351323f5 0%, #351323d9 36%, #35132366 70%, #35132399 100%)`. At widths up to 800px the main-panel overlay is `#351323c9` and the author/reference panel remains `#401326`. These are renderer rules; do not bake the gradient into the image or change CSS to accommodate an unsuitable image.

## Typography and responsive layout

No typography is generated inside the image. Headings are live HTML in Lora, body copy in Inter, and labels/data fields in IBM Plex Mono, as configured in `quartz.config.ts`. Hero titles use weight 400, line-height 1.2 and `clamp(32px, 3.2vw, 48px)`; the mobile title is 32px. The deck uses 17px/1.6. See `quartz/styles/article-layout.scss`, which overrides the older baseline in `quartz/components/styles/heroBand.scss`.

The article hero is a main panel plus a 340px author/reference sidebar in a container up to 1760px, with 48px outer gutters. Its minimum height is `clamp(520px, 40vw, 640px)`. At widths up to 1149px, gutters are 24px, sidebar width 280px and minimum height 480px. At widths up to 800px, panels stack, gutters become 20px and height follows content. The image uses `object-fit: cover`, `object-position: 70% center` on desktop and `65% center` on mobile. Subject visibility must survive both crops and long page titles.

## Aspect ratio, pixel dimensions and encoding

Target a panoramic 3:1 composition. Preserve the committed metal assets without resizing or renaming them. Their actual dimensions, inspected from their files, are:

| Dimensions | Existing assets |
| --- | --- |
| 2164 × 721 | 12 assets, including cadmium, mercury and nickel |
| 2164 × 727 | lead, arsenic, chromium and organotins |
| 2161 × 728 | iron |

New assets should be delivered at 2164 × 721 pixels, matching the predominant approved export, from a generated panoramic master with enough source resolution. Crop only empty margins, preserving subjects and the dark left half. Do not stretch, tile or substitute a contact-sheet panel. If a master cannot support the intended crop, regenerate. Encode WebP at quality 85. Keep a nontransparent background. Check actual decoded dimensions, WebP format and file size; target below 250 KiB per hero and inspect any larger result rather than degrading image quality silently. The byte target is a continuation convention, not a historical prompt requirement.

Keep XMP descriptions, subject tags, creator credit `Heavy Metal Index` and IPTC digital source type `http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia`, following the committed metal-image provenance. Do not invent a photographer, source photograph or license. Retain the original generated filename, exact prompt and SHA-256 of the deployed file in the batch provenance. This is image provenance, not an evidence or analytical record. No visible AI badge is added.

## Files, naming and integration

Deployed files live in `quartz/static/heroes/` and are referenced as `/static/heroes/<lowercase-hyphenated-subject>.webp`. Choose concrete subjects and context, such as `leafy-greens-spinach-kale-lettuce.webp`, rather than generic numbered assets. No spaces, uppercase names, remote URLs or misleading safety/result words. The existing HeroBand path allowlist accepts only this folder and filename pattern.

Each page opts in through these fields only:

```yaml
hero_image: /static/heroes/leafy-greens-spinach-kale-lettuce.webp
hero_image_alt: "Spinach, kale, collard greens, romaine and iceberg lettuce illustrating spinach ingredient context."
```

Alt-text pattern: `[Concrete visible subjects] illustrating [page subject] [ingredient/product-format/research] context.` Keep it descriptive, accurate to the pixels and scoped to the destination. Do not call an image a tested sample or imply measured contamination. Do not add invisible details or repeat a long title. Preserve the original full metal names in the historical prompts, including their original exceptions.

Original metal image records live in `data/design/metal-hero-images.json`. New batch provenance should live in `data/design/image-batch-NN.json` with exact prompts, original generated paths/names, image dimensions, credit, generation date, output hashes and the explicit page-to-asset/alt mapping. The existing renderer accepts local hero assets without a registry entry; do not change page titles, descriptions, canonicals, SEO helpers or structured-data code for this image-only order. Keep all factual claims in the existing HTML. Record page counts separately from unique asset counts.

## Finished examples

- `quartz/static/heroes/lead-food-soil-water.webp`, used by `wiki/metals/lead.md`.
- `quartz/static/heroes/cadmium-cocoa-grains-crops.webp`, used by `wiki/metals/cadmium.md` and its related profile pages.
- `quartz/static/heroes/nickel-legumes-nuts-cocoa.webp`, used by `wiki/metals/nickel.md`.

## Exact prompt template

The template is the following common prompt copied word for word, followed by one space and the scene. Replace only the scene. The table of original scenes and both exceptional prompts are reproduced verbatim in the source record below.

```text
Use case: photorealistic-natural. Decorative Heavy Metal Index website hero, editorial photographic still life. Panoramic 3:1, objects in center-right, dark soft-focus left half for white title copy. Charcoal work surface, restrained natural side light, muted earth colors with burgundy undertones, premium scientific publication style. No people, text, labels, brands, diagrams, warning signs or watermark. Conceptual context only, no visible contamination or analytical results. Scene:
```

## Original provenance and prompts, verbatim

The following is the complete committed README, including the original lead prompt, common prompt, all sixteen scene entries and the separate arsenic prompt. No wording or punctuation has been changed.

# Hero imagery

## Lead pilot — 2026-10-15

`lead-food-soil-water.webp` is a decorative, AI-generated editorial still life. It depicts wheat, carrots, soil and a glass of water as exposure-pathway context. It is not a photograph of a tested or contaminated sample and carries no analytical result.

Generated with the built-in ImageGen tool, then encoded as WebP at quality 85. Original: `exec-2f68530f-c69b-4132-887a-1ee79656870e.png`, 2164 × 727. No third-party reference images were used.

Prompt: “Wide editorial website hero background for the Lead (Pb) evidence page of Heavy Metal Index. Restrained photographic still life: wheat grains and ears, two unpeeled carrots with traces of soil, dark agricultural soil, and a clear glass of water on a dark laboratory work surface. Panoramic 3:1 composition, subjects center-right, dark soft-focus left half for white copy. Charcoal and muted earth tones with burgundy undertones, natural side lighting. No people, brands, labels, writing, numbers, diagrams, warning signs or watermark. Conceptual exposure-pathway illustration, not a contaminated sample or test result.”

Images are opt-in through `hero_image` frontmatter. Only `/static/heroes/<filename>.webp` assets are accepted by HeroBand. Per-page descriptive alt text is supplied by `hero_image_alt`, as requested by the site owner. Useful information remains real HTML, with links to source records.

## All metal profiles — 2026-10-16

The 16 new images below were generated with the built-in ImageGen tool. They are conceptual still lifes, not photographs of tested samples. Original PNGs remain in the generated-images archive; the deployed assets are optimized WebPs at quality 85. Related chemical-species pages share their element image; developing source-map profiles use materials or laboratory imagery without inventing food-exposure claims.

Machine-readable captions, subjects, credit, dimensions and provenance live in `data/design/metal-hero-images.json`. All new WebPs also carry XMP descriptions, subject tags, creator credit and the IPTC `trainedAlgorithmicMedia` source type. Lead’s existing image pixels and URL are preserved. No visible AI badge is added. The registry does not invent a photographer or assign a new image license.

Common generation prompt (all new images except arsenic):

> Use case: photorealistic-natural. Decorative Heavy Metal Index website hero, editorial photographic still life. Panoramic 3:1, objects in center-right, dark soft-focus left half for white title copy. Charcoal work surface, restrained natural side light, muted earth colors with burgundy undertones, premium scientific publication style. No people, text, labels, brands, diagrams, warning signs or watermark. Conceptual context only, no visible contamination or analytical results. Scene:

Append the following scene to the common prompt:

| Asset | Scene prompt | Original |
| --- | --- | --- |
| arsenic-rice-water-soil.webp | Uncooked rice in a shallow ceramic dish, scattered rice grains, a clear glass of water, and dark agricultural soil. | exec-d578fb3d-2484-4973-a1cf-8a9be380aadf.png |
| cadmium-cocoa-grains-crops.webp | A small broken dark chocolate bar, cocoa beans in a shallow bowl, wheat grains and a few spinach leaves beside dark agricultural soil. | exec-b0eb7a9d-0a4b-4190-b552-a2c0d9a28de6.png |
| mercury-fish-water.webp | One fresh whole fish and a small fillet on a dark ceramic tray, a clear glass of water, subtle coastal stones in the background. | exec-8f3179b1-2361-4975-8cb2-7dd1b9438c41.png |
| nickel-legumes-nuts-cocoa.webp | Dried lentils in a shallow ceramic dish, hazelnuts in shells, oats and a few cocoa beans. | exec-e5d7bc76-d8a4-47bf-b359-1b0238138701.png |
| aluminum-tea-food-contact.webp | Loose tea leaves and a simple tea cup, a folded unbranded sheet of aluminum foil, a small aluminum saucepan and a tomato. | exec-1ba3a62a-5579-4d9f-88ab-018e0316d3b6.png |
| tin-canned-tomatoes-juice.webp | An open unbranded metal food can holding tomatoes, one tomato beside it, a plain metal lid and a clear small glass of fruit juice. | exec-90519be5-1aed-4faf-b23d-23863792b5a1.png |
| organotins-shellfish-marine-context.webp | A few mussels and clams on a dark ceramic tray, a weathered marine stone and a clear glass sample vessel, subtly coastal laboratory atmosphere. | exec-a13b3ff0-6af3-462d-b25b-385abcfc1d4c.png |
| chromium-water-soil-materials.webp | Clear water in a glass beaker, a dark soil core in a shallow tray, a small clean piece of stainless steel, no colored liquids. | exec-6a3faf67-1d08-45f7-a080-0741f2eb79f8.png |
| antimony-water-polyester.webp | A plain transparent PET water bottle with no label or markings, a clear drinking glass and folded white polyester fabric, studio still life. | exec-ed1d84ea-ae99-4a54-9f4e-e08f33a17ac0.png |
| essential-metals-legumes-grains-seeds.webp | A shallow ceramic bowl of mixed lentils, pumpkin seeds, almonds, oats and a few dark green leaves, restrained food-science still life. | exec-8faa61ad-5d3d-46c4-a22c-b92038e7f246.png |
| copper-water-lentils.webp | A small coil of bare copper tubing beside a clear drinking-water glass and a ceramic bowl of lentils, food and material context. | exec-b95e77b8-76e0-4f0e-9871-8042044c5917.png |
| iron-pan-lentils-spinach.webp | A small cast-iron pan, dry lentils in a ceramic dish and a few spinach leaves, simple nutrient and material context. | exec-159fd247-9ef1-4785-a8c8-6ac93ab7c2ee.png |
| cobalt-soil-laboratory.webp | A small dark geological rock specimen in an open glass sample dish, agricultural soil in a ceramic tray, clean unmarked glass laboratory vessels. Subtle cobalt-blue reflected light, without a blue chemical solution. | exec-3f05b12a-182f-4504-a722-98b38e1913fd.png |
| lithium-medical-research.webp | An unmarked closed amber medicine bottle, an empty glass laboratory vial, a small pale geological rock specimen on a dark tray. Medical-therapy research context, no pills, no chemical liquid, no branding. | exec-41597d0e-beb3-4bf8-bf8b-4c66dd37117d.png |
| precious-metals-laboratory-specimens.webp | Small clean gold-colored and silver-colored metal sample pieces arranged in shallow dark ceramic sample dishes, unmarked laboratory glassware in soft focus. Materials research, not jewelry or commerce. | exec-e9138ccd-6536-4748-8595-637471ef7dcd.png |
| trace-metals-geology-laboratory.webp | A carefully arranged collection of natural gray and pale geological rock specimens, a small dish of dark soil, empty clear glass sample vessels and a stainless laboratory sampling spoon. Trace-element research context. No glowing material, no radioactive symbols. | exec-5c16826e-a939-4391-a848-70bf99b6a920.png |

Arsenic used a separate prompt with the same visual direction: “Wide panoramic 3:1 editorial photographic still life of uncooked rice in a shallow ceramic dish, scattered rice grains, a clear glass of water, and dark agricultural soil on a charcoal laboratory work surface. Subjects centered in the right half with a dark soft-focus left half reserved for white title copy. Restrained natural side lighting, burgundy undertones, warm muted earth colors, realistic materials, composed like a premium scientific publication. No people, text, labels, logos, warning symbols, diagrams, watermark, or visible contamination. Conceptual exposure-pathway illustration, not a tested sample or analytical result.”

## Continuation: placeholder sweep (2026-11-03, batch 93)

New metal and element pages use the canonical metal treatment above (common prompt plus a materials/geology or dietary scene, as in the 2026-10-16 metal set): mineral specimens, refined metal forms and unmarked laboratory glassware for elements without a defined food pathway; foods only where dietary intake is the established context (selenium). Generated with the same built-in ImageGen tool through Codex CLI (`codex exec`) on the Heavy Metal Index Mac and exported with `cwebp -q 85` at 2164 × 721 from a 3:1 master. Provenance is in `data/design/image-batch-93.json`.

`npm run lint:hero-images` (also run on pull requests for added or changed pages) fails any non-retired ingredient, product or metal page whose hero is missing, a `section-*.webp` placeholder, a non-allowlisted path or an absent asset. Rice is exempt because its locked approved chrome supplies its hero.
