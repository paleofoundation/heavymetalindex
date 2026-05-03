# Heavy Metal Index

Public-facing wiki of the Paleo Foundation, at [heavymetalindex.com](https://heavymetalindex.com).

A curated reference on heavy metals in food, supply chain, remediation, and regulatory findings. The wiki reports what the peer-reviewed and regulatory literature supports, with source-linked provenance on every claim.

## Repository layout

- `wiki/` contains the published content, organized by the taxonomy described in `CLAUDE.md`. Every page has YAML frontmatter and follows the templates in the spec.
- `raw/` holds immutable source documents (PDFs, agency reports, third-party testing datasets). Contents are gitignored; only the directory structure is tracked.
- `quartz/` is the Quartz 4 static-site-generator framework (vendored so customizations ship with the repo).
- `quartz.config.ts` and `quartz.layout.ts` configure the site.
- `CLAUDE.md` is the operational specification for how the wiki is built and maintained. Read this before contributing.

## Local development

```bash
npm install
```

```bash
npm run serve
```

Quartz serves the wiki at `http://localhost:8080` with live reload.

To build the static site:

```bash
npm run build
```

Output lands in `public/`.

## Deployment

The site deploys to Vercel on every push to `main`. Vercel builds with `npm run build` and serves from `public/`. The [heavymetalindex.com](https://heavymetalindex.com) domain is canonical; [heavymetaldataindex.com](https://heavymetaldataindex.com) redirects to it with HTTP 301 permanent.

## Contributing

The wiki is maintained by the Paleo Foundation editorial team. External contributions, corrections, and source suggestions are welcome through the channels described on the [contact page](https://heavymetalindex.com/contact). Substantive edits are reviewed before publication per the procedures in `CLAUDE.md`.

## Related properties

- [Paleo Foundation](https://paleofoundation.com) — parent organization
- [Heavy Metal Tested and Certified](https://heavymetaltested.com) — certification program (separate property)
- [Journal of Food Metallomics](https://heavymetaltested.com/journal-of-food-metallomics) — peer-reviewed venue for synthesis work
- [WikiBiome](https://wikibiome.com) — microbiome medicine reference (sibling project)

## License

Content is published by the Paleo Foundation for public research access under the terms available at [/terms](https://heavymetalindex.com/terms). Commercial use, bulk extraction, and derivative works require licensing. The Quartz 4 framework (`quartz/`) is MIT-licensed by Jacky Zhao and contributors.
