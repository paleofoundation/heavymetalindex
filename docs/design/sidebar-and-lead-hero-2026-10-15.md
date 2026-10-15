# Restore the right sidebar and pilot an illustrated Lead hero

The article layout was placing `.rail` in row 2 of a two-column grid, after the complete article. Restore three desktop columns: contents, main reading surface, right rail. The right rail and hero sidebar share the same width token and left edge. On mobile the rail returns to normal document flow. This corrects sitewide sidebar geometry before the Lead experiment.

The Lead page alone opts into a decorative food/soil/water image, a concise overview and three source-linked highlights. The highlights restate existing page content and preserve the distinction between the CDC reference value and a safety threshold. No numerical limits or certification claims change. Other pages retain their current hero treatment while this pilot is assessed.

The reusable frontmatter fields are `hero_image` and `hero_highlights` (up to three entries with `label`, `text`, `source` and `source_label`). Local WebP assets and canonical source slugs are validated before rendering. Backgrounds are decorative; the headings, summaries, evidence and links are accessible HTML. Image provenance and generation prompt are recorded in `quartz/static/heroes/README.md`.
