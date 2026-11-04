Fill one Heavy Metal Index __KIND__ page from one deposited evidence unit. Then stop.

Unit: __UNIT__
Page kind: __KIND__
Slug: __SLUG__
Wiki page: __PAGE__
Deposit checkout: __DEPOSITS_ROOT__
Deposit directory: __DEPOSITS_ROOT__/__DIR__

DEPOSITS_READ_TOKEN is in the environment so you can read paleofoundation/hmi-evidence-deposits. The checkout above is already cloned. Do not print the token, do not write it into a file, and do not put it in a commit.

Read the papers in that directory (pdftotext is installed). Use only those papers. Every number on the page must appear in the paper you cite, with the matrix, basis, chemical species, statistic, and sample size the paper states. If a table is not in the unit, leave that number out.

Follow the page that already exists:
- If __PAGE__ has page_contract_version, update that compiled page in place. Keep its hero, its Quick read structure, and its section pattern.
- If the page is a scaffold or a classic markdown page, keep its section order. When literature_scope is thin, none, or cited, or provisional_scaffold is true, add a valid cited-measurements block: the begin comment, a [[sources/...]] link, a number beside a concentration unit, and the end comment. The audit markers are `<!-- BEGIN: hmi-cited-measurements -->` and `<!-- END: hmi-cited-measurements -->`.
- If the page does not exist, create it with the __KIND__ section order in docs/page-structure.md.

Also read docs/page-structure.md, docs/content-contract.md, docs/writing-style.md, and docs/page-templates.md before you write. Match those rules. American English. Write ranges with the word "to". Use commas, colons, or parentheses where a dash would otherwise appear. The new prose must not contain an em dash or an en dash.

The page reports what the papers measured. Leave certification thresholds, population typicals, and upper-tail estimates out. Leave a pending contamination_profile cell pending. Do not name certified brands, and do not copy a brand-by-brand results table. Summarize the ingredient, not the brand.

Leave supplier notices and manufacturer GRAS notices out of every file you touch. In particular, do not add any of these: GRN 609, GRN 788, GRN 804, GRN 851, Oryzatein, RPN2026, Axiom.

Keep an existing hero_image that already points at /static/heroes/<name>.webp, including its alt text. Do not add a section-*.webp file, a placeholder image, or a hero_image value outside that path. If the page has no real hero, stop without inventing one and say so in your final message.

Create or update a source page for each paper you cite, using the public source sections in docs/page-templates.md. Record the deposit path in raw_path. Keep local paths and tool names out of the public body. Do not hand-edit data/evidence/product_source_routing_audit.csv.

Append one entry at the top of wiki/log.md, under the frontmatter, in the existing entry shape. Do not change the title line of that file. State which pages you touched and that the direction is toward the literature.

You may run `node tools/build-page-openings.mjs --apply __PAGE__`. Do not commit, do not push, and do not open a pull request.

Do not run `node tools/audit-page-structure.mjs --write-baseline`. Do not pass `--write-baseline` for page structure, page openings, or the thin-with-evidence list. Do not rewrite data/evidence/page-structure-baseline.json, data/evidence/page-openings-baseline.json, or data/fanout/thin-with-evidence-baseline.txt. The workflow merges the latest main before it opens the pull request, and it records only __PAGE__ in those three files.

One unit only. Do not start a second page.
