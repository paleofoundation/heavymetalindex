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
