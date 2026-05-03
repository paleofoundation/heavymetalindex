---
title: FDA infant-formula toxic-element ingest audit
description: Routing and prevention audit for FDA FY2023-FY2025 infant-formula toxic-element workbook and companion PDF.
audience: [researcher, regulator]
updated: 2026-05-01
sources: 1
---

# FDA Infant-Formula Toxic-Element Ingest Audit

## Trigger

Source workbook: `raw/reports/toxic_element_infant_formula_prepared_for_posting_20260324.xlsx`, promoted as [[sources/fda2026-infant-formula-product-testing-results]].

Companion PDF: `raw/reports/toxic_element_infant_formula_prepared_for_posting_20260324.pdf`, retained as the human-audit rendering of the same FDA posting.

This audit records which pages the workbook should update, where those pages were missing the information before ingest, and which rules now guard against the same failure.

## Page routing

| FDA simplified product label | Samples | Heavy Metal Index destination | Routing status |
| --- | ---: | --- | --- |
| Infant Formula, Powder, Cow Milk-based | 230 | [[products/infant-formula-powder-non-soy]] | Routed to existing row 1 |
| Infant Formula, Powder, Amino Acid-based | 10 | [[products/infant-formula-powder-non-soy]] | Routed to existing row 1 as non-soy powder; retained as amino acid-based subgroup in source page |
| Infant Formula, Powder, Soy-based | 38 | [[products/infant-formula-powder-soy-based]] | Routed to existing row 2 |
| Infant Formula, Ready-to-Feed Liquid, Cow Milk-based | 20 | [[products/infant-formula-rtf-liquid-non-soy]] | Routed to existing row 3 |
| Infant Formula, Ready-to-Feed Liquid, Soy-based | 3 | [[products/infant-formula-rtf-liquid-soy-based]] | Routed to existing row 4 |
| Infant Formula, Concentrated Liquid, Cow Milk-based | 8 | [[products/infant-formula-concentrated-liquid-non-soy]] | Candidate extension page; not a locked HMTc row |
| Infant Formula, Concentrated Liquid, Soy-based | 3 | [[products/infant-formula-concentrated-liquid-soy-based]] | Candidate extension page; not a locked HMTc row |

## Where the information was missing

- [[products/infant-formula-powder-non-soy]] was still saying that non-soy-specific evidence was pending, even though the FDA workbook has 240 routed non-soy powder samples covering total arsenic, lead, cadmium, and total mercury.
- [[products/infant-formula-powder-soy-based]] was still saying that soy-powder-specific evidence was pending, even though the FDA workbook has 38 routed soy powder samples.
- [[products/infant-formula-rtf-liquid-non-soy]] was still saying that ready-to-feed-specific evidence was pending, even though the FDA workbook has 20 routed ready-to-feed cow milk-based samples.
- [[products/infant-formula-rtf-liquid-soy-based]] was still saying that ready-to-feed-specific evidence was pending, even though the FDA workbook has 3 routed ready-to-feed soy-based samples.
- No locked row had a place for concentrated liquid formula, which means those 11 samples could have been accidentally collapsed into the ready-to-feed rows without an explicit taxonomy-gap rule. They now have candidate extension pages that are deliberately outside the locked sixteen-row list.

## Why the gap happened

- The existing triage flow was optimized around `raw/studies/` PDFs and converted markdown, while this source arrived as a spreadsheet outside the repo.
- Category 1 source promotion had been literature-first, so a government market-basket workbook did not naturally enter the peer-reviewed source-candidate queue.
- Product pages had human-readable `<!-- UNCITED -->` gap markers, but no machine rule checked new raw report files against source pages and product-page citations.
- There was no rule requiring source pages and product pages to cite each other reciprocally after ingest.
- Concentrated liquid formula is present in the FDA source but absent from the locked HMTc Category 1 rows; without candidate extension routing and a quarantine rule, it could be misrouted.

## Prevention rules

1. Any file added to `raw/reports/`, `raw/lab-data/`, `raw/industry/`, or `raw/news/` must be promoted to `wiki/sources/` or mentioned in `wiki/lint/` as queued/deferred before `npm test` passes.
2. Every source page section named `Wiki pages updated on ingest` must point only to existing wiki pages, and each linked page must cite the source page back.
3. Every product page citation to a promoted source must be mirrored in that source page's `Wiki pages updated on ingest` list.
4. Formula routing must preserve product form: powder, ready-to-feed liquid, and concentrated liquid are distinct. Concentrated liquid records route to candidate extension pages and stay out of RTF rows unless the locked taxonomy creates a concentrated-liquid row or an explicit aggregate rule.
5. Formula routing must preserve protein source: soy-based products route only to soy rows; cow milk-based and amino acid-based formula route to non-soy rows unless a future locked row splits specialty formulas.
6. Arsenic from this workbook is stored as total arsenic. It must not be treated as inorganic arsenic unless the separate speciation subset is ingested with row-level traceability.
7. Public wiki output may summarize anonymized market-basket results but must not create brand rankings, certified-brand claims, HMTc threshold claims, or private COA-derived claims.

## Follow-up

- Decide whether the two concentrated-liquid candidate extension pages should become official HMTc Category 1 rows, stay public evidence-only pages, or be included only in an explicit liquid-formula aggregate.
- Add the FDA PFAS, pesticide, phthalate, and human-milk workbooks only through the same raw-file-to-source-page path, with separate analyte vocabularies and public/private checks.
- Extend the future evidence engine to reject any ingest row whose `row_slug` is missing, invented, or silently aggregated from an off-row product form.
