# Researcher identity and publication metadata — 2026-09-16

## Scope and isolation

Worktree: `/Users/karenpendergrass/Desktop/hmi-researcher-identity`, branch `codex/hmi-researcher-identity`, based on `c0d06b01ee`. The original `heavy-metal-index` checkout had 5,127 changed/untracked entries at inspection. Its unrelated edits were not copied. This work does not deploy, mint, or update DataCite records.

HMI is a Quartz static wiki. Markdown/frontmatter live in `wiki/`; `quartz/components/Head.tsx` emits canonical and Highwire metadata; `tools/postbuild-inject-jsonld.mjs` injects homepage and publication JSON-LD; `tools/postbuild-open-data.mjs` emits dataset metadata. The author profile is `wiki/authors/karen-pendergrass.md`, rendered through `authorIdentity.tsx`, `pages/Content.tsx`, and `Rail.tsx`.

DataCite tooling is separate: `tools/mint-dois.mjs`, `datacite-preflight.mjs`, `datacite-reconcile-types.mjs`, and `datacite-reconcile-media.mjs`. Preflight is a mutating draft create/read/delete test, not a read-only connectivity check. It was not executed. `AGENTS.md` also gates minting under the ELON PASS C-PUSH workflow.

## Identity and relationships

`data/researcher-identity.json` is identical to the shared HMTc identity record. It records Karen Pendergrass, ORCID `0000-0002-2348-7259`, the supplied Google Scholar profile `xnzAh-wAAAAJ`, and the confirmed LinkedIn profile ending `/karenpendergras/`.

The canonical Person remains `https://contaminantstandards.com/people/karen-pendergrass#person`. The homepage, profile, authored report metadata, and dataset creator use that identity. The author profile keeps its four existing public affiliations. Cross-site core metadata declares ICS and The Paleo Foundation as affiliations, `worksFor` ICS, and a Paleo Foundation Organization → founder → Person relationship. No `alumniOf` relationship is inferred from founding.

The repository's settled entity-naming rule identifies Paleo Certified, Inc. as the legal owner and DataCite account registrant, with Institute of Contaminant Standards and Paleo Foundation as trade names. Editorial publisher/operator remains ICS. HMI is not made a certification suborganization. Its Person projection omits the certification-site profile from `sameAs` to preserve the one-way evidence boundary; the shared JSON retains the complete profile inventory.

## Publication metadata

The shared record now supplies the author name, ORCID, and both named affiliations in Highwire metadata for HMI analytical reports. Explicit coauthors are preserved. A named foreign author does not inherit Karen's identifiers or affiliations, and a conflicting ORCID fails validation. Foreign source pages retain their original authors, journal metadata when provided, and original DOI. Original HMI reports receive no invented journal title.

Navigation pages and thin metal pages without a scholarly PDF emit no report citation tags. Canonical URL, full-text URL, PDF URL, and DOI remain publication-specific. Publication dates use explicit `established`/`published` fields, never modification or file-creation dates; invalid calendar dates are omitted. Boolean `false` and string `"false"` do not accidentally activate `noindex`.

### Existing DOI date audit

There were 26 synthesis landing pages with `wiki_doi`. Twenty-five already had `established` or `published`. `spice-adulteration-lead-infants` alone lacked an immutable publication field. The 36 metal pages had no local `wiki_doi`.

A public, unauthenticated GET of [the DataCite record](https://api.datacite.org/dois/10.83376/hmi.spice-adulteration-lead-infants), retrieved 2026-09-16, returned:

- DOI: `10.83376/hmi.spice-adulteration-lead-infants`
- `publicationYear: 2026`
- `dates: [{ date: "2026-05-13", dateType: "Updated" }]`
- resource type: Technical Report / Report
- canonical URL: `https://heavymetalindex.com/synthesis/spice-adulteration-lead-infants`

The page now has `published: "2026"`. This preserves the registered year without relabeling the update date or inventing a month/day. Highwire and JSON-LD both preserve year-only precision. All 26 existing DOI report landings retain a publication-date tag after the change.

## Verification

Passed:

- `node tools/audit-researcher-identity.mjs` (also added to prebuild and `metadata:audit`).
- `./node_modules/.bin/tsx --test tests/researcher-metadata.test.ts`: 7 tests, including every current DOI report, coauthors, foreign papers, invalid dates, boolean false, homepage/profile/dataset identity, and the HMI organizational boundary.
- `./node_modules/.bin/tsc --noEmit --incremental false`.
- `git diff --check`.
- Direct Quartz build using a seven-page temporary fixture copied from the actual homepage, profile, About page, two syntheses, lead page, and an external source. It emitted 29 files; only existing Sass/punycode deprecation warnings appeared. The rendered profile, DOI report, and original-source tags were inspected; homepage postbuild metadata also parsed successfully.

### Full build follow-up

The fixture output was replaced by a full direct Quartz build:

`node quartz/bootstrap-cli.mjs build -d wiki -o public --concurrency 4`

The build parsed 4,365 Markdown files, filtered one, and emitted 5,110 files (50 seconds parsing, 22 seconds emission). `npm run postbuild` then completed successfully: 4,119 content JSON-LD pages plus seven homepage objects; a catalog with three datasets; 4,383 breadcrumb injections; a 4,120-URL scholarly sitemap; 26 synthesis PDFs and 10 metal PDFs. Prebuild corpus generators were not run, and no original checkout data was changed.

The complete rendered metadata audit passed all 26 DOI reports and all 3,088 emitted source pages, with zero author/DOI exceptions. Homepage and profile graphs passed. The machine-readable result is `reports/researcher-identity/hmi-rendered-metadata-verification.json`.

The browser fidelity gate was run against this complete local output:

`npm run check:v3 -- http://127.0.0.1:8878`

It returned exit 1: **743/866 chrome assertions passed, with 123 gating failures**; the separate non-gating F-16 body inventory passed 27/50, with 23 gaps. The full result is `reports/researcher-identity/hmi-fidelity-gate.log`.

Examples of gating failures are the missing `.hmi-topnav-search > .search-button` and `.hmi-topnav-glyph` selectors; `.proof-layout` gap 0 versus 56px and columns 264/340 versus 236/312px; `.hero-grid` gap 0 versus 72px; and the existing 4px hero-action/8px snapshot radii and author-card shadow. Styles, HeroBand layout, and the gate/specification were unchanged in this task. These layout failures were recorded, not suppressed or repaired as part of identity metadata work. A full untouched-HEAD browser baseline comparison was not run.

`public/` now contains the complete direct build and all scholarly PDFs, not fixture output. This is not a release-green build because the fidelity gate fails and the full prebuild/release pipeline was intentionally not run. No external DataCite mutation or deployment occurred.


### Final creator adapter checks

After the DataCite adapter integration, the combined suite passed **19/19 tests**:

`./node_modules/.bin/tsx --test tests/researcher-metadata.test.ts tools/tests/*.test.mjs`

This includes mocked creator-update safety checks and the real mint adapter exercised against local fixtures, with no live DataCite writes. Future mint metadata now derives publication year from `established ?? published`, matching Highwire/JSON-LD, and blocks missing or invalid publication dates. It does not use the modification date or current year as a substitute. The strengthened identity audit, full TypeScript check, and `git diff --check` also passed after integration.

The final working-tree inspection found no generated wiki edits: only the intended biography update and the one-line source-backed publication year differ under `wiki/`.

The shared creator suite includes a post-write check that detects changes to unrelated bibliographic metadata. Independent PDF verification also passed all 26 DOI publications: searchable matching titles/authors, same-subdirectory PDF URLs, and sizes below 5 MB. Results are in `reports/researcher-identity/hmi-doi-pdf-verification.json`. Existing-record creator updates remain unapplied.
