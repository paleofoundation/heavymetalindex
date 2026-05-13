# Session prompt: ingest staged PDFs

You have 97 PDFs in `raw/manual-fetch/seasonal-geographic-variance/` (some at the top level from Karen's manual drops, some in the `auto-fetched/` subfolder from `npm run wishlist:fetch`).

Your job: produce source pages per CLAUDE.md Part 6 and Part 8.

## Workflow

For each PDF:

1. Read the file (Marker-converted markdown if available, otherwise extract from PDF).
2. Tell Karen the TL;DR (3-5 sentences) IF she is in the session; otherwise just write the source page.
3. Create the source page at `wiki/sources/<cite-key>.md` using the template in Part 6. Frontmatter must include: cite_key, title, authors, year, publication, doi (if findable), source_type, evidence_tier, license (if known), raw_path, metals, ingredients (as wikilinks), products (as slugs), matrices, jurisdictions.
4. Move the original PDF from the manual-fetch folder into `raw/studies/` or `raw/reports/` per CLAUDE.md Part 4 directory conventions.

Routing fan-out happens automatically per Part 5b; the watcher in `npm run watch:sources` picks up new source pages and refreshes the routing audit within seconds.

Synthesis (contamination_profile updates on ingredient pages) is a SEPARATE workflow per Part 9. Do NOT update ingredient `contamination_profile` blocks during this ingest. The routing audit identifies which cells become eligible for synthesis after these sources land.

## What NOT to do

- Do not update ingredient `contamination_profile` blocks during ingest.
- Do not edit `data/evidence/product_source_routing_audit.csv` by hand.
- Do not edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers on product pages.
- Do not invent new product or ingredient pages mid-ingest. If a source declares an unresolved target, surface it in your batch report; Karen approves new pages per Part 10.

## At the end

Append a batch report at `wiki/batch-reports/<batch-id>-<date>.md` per CLAUDE.md Part 17 format, listing source pages created, any new-page proposals, any contradictions flagged, and any papers that failed to ingest.

## Files in scope (97)

1. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-cd_2015_10-15244-pjoes-59306.pdf
2. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-ias_2015_10-1007-s00217-015-2545-4.pdf
3. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-ias_2015_10-15244-pjoes-59306.pdf
4. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-tas_2015_10-15244-pjoes-59306.pdf
5. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-thg_2015_10-15244-pjoes-59306.pdf
6. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-non-rice-thg_2021_10-1007-s42773-021-00087-1.pdf
7. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-rice-based-ias_2017_10-1371-journal-pone-0176923.pdf
8. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-baby-cereals-dry-rice-based-ni_2022_10-1007-s12403-022-00489-x.pdf
9. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-cd_2016_10-1186-s40064-016-2019-6.pdf
10. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-cd_2017_10-5897-ajar2016-11832.pdf
11. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-cd_2019_10-2478-sjph-2019-0024.pdf
12. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-cd_2022_10-1007-s12011-022-03129-2.pdf
13. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-pb_2022_10-1007-s12011-022-03129-2.pdf
14. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-tas_2016_10-1038-jes-2015-86.pdf
15. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-tas_2018_10-22159-ajpcr-2018-v11i6-25522.pdf
16. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-coffee-tas_2021_10-36787-jti-v15i2-584.pdf
17. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fermented-beverages-non-tea-based-pb_2024_10-1051-bioconf-20249806006.pdf
18. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-al_2018_10-5539-ijc-v10n4p68.pdf
19. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-co_2015_10-5937-savteh1502071s.pdf
20. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-co_2021_10-30744-brjac-2179-3425-ar-87-2021.pdf
21. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-ni_2023_10-11648-j-ijfsb-20230802-12.pdf
22. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-pb_2015_10-5937-savteh1502071s.pdf
23. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-pb_2018_10-32598-ijt-12-3-517-1.pdf
24. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-sb_2025_10-12944-crnfsj-13-3-4.pdf
25. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-sn_2018_10-5539-ijc-v10n4p68.pdf
26. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-tas_2015_10-5937-savteh1502071s.pdf
27. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-tas_2018_10-32598-ijt-12-3-517-1.pdf
28. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-tas_2018_10-5539-ijc-v10n4p68.pdf
29. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-tas_2021_10-46602-jcsn-v46i4-646.pdf
30. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-v_2017_10-1186-s12866-017-1029-z.pdf
31. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juice-not-canned-v_2018_10-22159-ijap-2018v10i4-26788.pdf
32. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-apple-containing-pb_2015_10-1007-s13204-015-0412-z.pdf
33. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-apple-containing-pb_2019_10-20914-2310-1202-2019-3-91-98.pdf
34. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-apple-containing-pb_2020_10-61872-sdj-2020-01-01.pdf
35. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-apple-containing-pb_2024_10-1038-s41598-024-54969-y.pdf
36. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-apple-containing-pb_2024_10-3126-ijasbt-v12i3-70167.pdf
37. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-pb_2015_10-5937-savteh1502071s.pdf
38. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-pb_2018_10-32598-ijt-12-3-517-1.pdf
39. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-tas_2015_10-5937-savteh1502071s.pdf
40. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-tas_2018_10-32598-ijt-12-3-517-1.pdf
41. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-tas_2018_10-5539-ijc-v10n4p68.pdf
42. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fruit-juices-non-apple-tas_2021_10-46602-jcsn-v46i4-646.pdf
43. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-herbal-botanical-infusions-al_2022_10-12982-jams-2022-024.pdf
44. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-herbal-botanical-infusions-al_2022_10-15395-mkb-v54n3-2729.pdf
45. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-herbal-botanical-infusions-cd_2016_10-1038-jes-2015-86.pdf
46. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-herbal-botanical-infusions-pb_2016_10-1038-jes-2015-86.pdf
47. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-infant-formula-powder-non-soy-al_2015_10-5897-ajfs2015-1315.pdf
48. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-infant-formula-powder-non-soy-al_2017_10-46770-as-2017-04-005.pdf
49. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-infant-formula-powder-non-soy-al_2021_10-1007-s11356-021-14700-0.pdf
50. raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-infant-formula-powder-non-soy-ca_2022_10-1007-s12161-022-02267-6.pdf
... and 47 more

## Reference

- CLAUDE.md Part 6 (source-page template), Part 8 (ingest workflows)
- OPERATING.md Part 3 (act without asking for routine ingest decisions)
- Per Karen's standing rule: do not introduce approval gates for decisions you can make on your own.
