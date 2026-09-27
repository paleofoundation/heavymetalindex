---
type: batch-report
updated: 2026-09-27
audience: [regulator, researcher]
---

# Manual resourcing, 2026-09-26, group 1 of 5

Evidence-only ingest. Direction is toward the literature: the pages report what each source prints, including limits, case values, and the absence of a metal result. No synthesis page, metal page, product page, or ingredient page was edited. Shared routing CSVs were regenerated locally and then restored, so this commit does not contain them.

## Counts

Fifteen files were in the slice. Twelve new source pages were written. Three papers already had source pages and were left unchanged. The evidence register for this group has 12 source records and 151 value records. No file was unreadable. No paper was also processed by Codex under the names Clancy, Nacci, Liu, Hahn, or a bottled-water paper.

| Outcome | Cite key | Note |
| --- | --- | --- |
| New | lin2012-guangzhou-hongdan-baby-powder-lead | Case report and powder inquiry. File name does not match the article. |
| New | eu2015-consolidated-1881-2006-contaminants | 21 May 2015 consolidation. Not the 28 September 2020 text. |
| New | bfr2012-nickel-fragrances-toys-opinion | English summary only. No DOI. |
| New | elliott1998-antimony-trioxide-genotoxicity | Genotoxicity doses, not a migration study. |
| New | filon2006-lead-oxide-skin-penetration | In vitro lead oxide skin flux. |
| New | jacob2011-infant-clothing-snaps-nickel | Qualitative dimethylglyoxime snaps. |
| New | kosemund2009-superabsorbent-diaper-safety | No metal concentration. |
| New | rovira2016-trace-elements-skin-contact-clothes | 37 garments, totals and sweat migration. |
| New | cattani2022-pediatric-atopic-patch-tests | Nickel patch tests, not a product assay. |
| New | warshaw2017-wet-wipe-allergens-nacdg | Wet-wipe allergens. No metal. |
| New | yu2016-diaper-product-potential-allergens | Ingredient tally. No metal. |
| New | boreiko2020-antimony-pulmonary-review | Review. One cited occupational limit. |
| Existing, unchanged | hepp2014-fda-cosmetics-seven-elements | Same paper. This PDF hash differs from the hash already on the page. The existing extraction was not revised. |
| Existing, unchanged | chengappa2025-toothpaste-systematic-review | Same DOI. Primary-study numbers inside the review were not re-extracted. |
| Existing, unchanged | balogun2024-body-creams-delta-nigeria | SHA-256 matches the existing page. |

## Evidence rows

Records are in `data/evidence/manual-resourcing-2026-09-26-karen-batch/group-1/sources.jsonl`, `values.jsonl`, and `numbers.csv`. They follow `source.schema.json` and `value.schema.json`. They were not appended to the shared `sources.jsonl` or `values.jsonl`, so a later single merge can take all five groups together.

European commas in Regulation 1881/2006 are stored as printed in `quote_trace`. `original_value` is the same number with a dot decimal. That is notation, not a unit conversion. No value was converted to ppb.

## Spot check

Nineteen ledger rows were rechecked against the text extracts (19 of 151, above 10 percent, and above the floor of 5). All 19 passed.

| Check | Result |
| --- | --- |
| Lead 3.1.2, infant formulae, 0,020 | Pass |
| Lead 3.1.18, food supplements, 3,0 | Pass |
| Cadmium powdered cows' milk formula, 0,010 | Pass |
| Cadmium liquid cows' milk formula, 0,005 | Pass |
| Mercury 3.3.1 heading and exclusion of 3.3.2 | Pass |
| Inorganic tin 3.4.1, canned foods, 200 | Pass |
| Inorganic tin 3.4.3, canned baby foods, 50 | Pass |
| Recital (44), SCF inorganic tin 150 mg/kg | Pass |
| Lin case powder, 214,000 mg/kg | Pass |
| Lin Table 1 boy, November 2008, 330 µg/l | Pass |
| Lin Hongdan average, 817,000 mg/kg | Pass |
| Filon Table 1 experiment 1 median, 2.9 ng/cm2 | Pass |
| Filon Table 1 experiment 5 median, 100.2 ng/cm2 | Pass |
| Rovira Table 3 lead mean 0.16 mg/kg | Pass |
| Rovira Table 3 antimony mean 26.0 mg/kg | Pass |
| Cattani nickel sulfate 9 (16.7 percent) | Pass |
| BfR fragrance trace allowance, 100 mg per kg | Pass |
| Elliott single oral dose, 5000 mg/kg | Pass |
| Boreiko occupational inhalation figure, 0.5 mg/m3 | Pass |

## Flags

The working copy named `10.1038:jes.2011.46` is Lin et al., Clinica Chimica Acta 2012, doi 10.1016/j.cca.2012.03.010. No page was created for 10.1038/jes.2011.46.

The BfR file is the English update of opinion No. 010/2012. The German opinion is not in the file. The REACH nickel-release number is not printed, so it was not entered. The 2010 control plan is cited without a numeric nickel result.

This 21 May 2015 consolidation has no arsenic section. Mercury rows are under the heading Mercury and are recorded as total mercury. Tin rows are inorganic tin. Lead in infant formula (3.1.2) is ready to use and is not split into powder and liquid. Cadmium in formula (3.2.19) is as sold and does split powder from liquid, and cows' milk protein from soya protein isolates alone or mixed with cows' milk. The soya rows are not soya-only rows.

Lin cites a Chinese cosmetic lead limit below 40 mg/kg. That instrument is not in the file. The abstract quotes the hospital blood lead pair and omits the earlier November pair. Both pairs are in Table 1.

Rovira means use half the limit of detection for non-detects. Arsenic, mercury, chromium, and tin are totals. The abstract's 186 to 5749 mg/kg zinc figure is a calculated zinc-pyrithione mass, and the highest item is socks, not a T-shirt. Table 3 elemental zinc maximum is 1185 mg/kg. Sample 35 (cotton pajama) is named as an antimony exception and the concentration is not printed after the page break. Table 5 columns were not assigned except the prose statement that the Tox-Proof extractable antimony limit is 1.0 mg/kg. Printed minima disagree with the methods limits for selenium (table below 0.50, methods 0.25), magnesium (table below 1.00, methods 0.10), and iron migration (table below 0.01, content limit 0.03).

The Jacob PDF includes an unrelated glycogen storage disease case after the brief report. That case was not ingested. Cited nickel figures from other papers were not entered as Jacob's measurements.

Boreiko is a review. Animal bioassay doses were not re-extracted. The 0.5 mg/m3 figure is the occupational limit the review states. The ACGIH text is not in the file.

Filon blood lead figures are Adult Lead Model projections and are tagged as modelled. The soap brand is only in the `brand_raw` column of `numbers.csv`.

## Papers with no metal values

Kosemund 2009, Warshaw 2017, and Yu 2016 do not report a metal concentration. Source pages say so. No metal value rows were invented. Jacob 2011 is qualitative and has no value rows.

## Routing audit, local only

`node tools/evidence/build-routing-audit.mjs` processed 3158 source pages (3160 markdown files, 2 skipped as duplicates). Unresolved targets: 0. Malformed sources: 0.

Product-route rows were emitted for Lin (baby talcum powder), Jacob (infant clothing and clasps), Kosemund (diapers and components), Rovira (infant clothing), Warshaw (baby wipes), and Yu (baby wipes and diapers). The 2015 regulation is skipped by the product-occurrence audit because `source_type` contains "regulation". Its product slugs still resolved in the unresolved check. Pages with an empty `products` array (BfR, Elliott, Filon, Cattani, Boreiko) produced no product-route row, which matches the routing gap recorded on each page.

Value counts on those product-route rows were 0 because the value records are in this group folder, not in the shared `values.jsonl`. The shared routing CSVs were restored after the run and are not in this commit.

Source-contract metadata is complete for the regulation page and for Jacob. The other new pages carry `routing_input_gaps`, which the contract records as gaps. `ingest_status` is not set to complete, because routing regeneration was not committed and synthesis was not run.

## Existing synthesis pages these sources touch

These pages were not edited.

- [[synthesis/heavy-metals-in-baby-lotions-oils-and-powders]] (Lin)
- [[synthesis/supplement-botanical-lead-pathway]] (Lin, Hongdan as a traditional-medicine lead source, not a finished supplement)
- [[synthesis/eu-regulatory-framework-timeline]] (1881/2006 snapshot of 21 May 2015)
- [[synthesis/infant-formula-metal-amplification]] (lead and cadmium formula maximum levels)
- [[synthesis/bivalve-cadmium-amplification]] (cadmium bivalve maximum level)
- [[synthesis/organ-meat-cadmium-lead-accumulation]] (lead and cadmium offal maximum levels)
- [[synthesis/tin-canned-food-acidic-matrix-migration]] (inorganic tin in canned foods)
- [[synthesis/heavy-metals-in-baby-wipes]] (Warshaw and Yu; neither reports a metal concentration)
- [[synthesis/heavy-metals-in-diaper-creams]] (Yu topical preparations and Kosemund diapers; neither reports a metal concentration)

Rovira and Jacob touch infant clothing. Elliott, Boreiko, and Rovira touch antimony. There is no separate antimony synthesis page. Nickel in this slice is toys, snaps, and patch tests, not the plant-staple nickel synthesis.

## Proposed audit-queue rows

Not written to `audit-queue.csv`.

| Cite key | Proposal |
| --- | --- |
| lin2012-guangzhou-hongdan-baby-powder-lead | Confirm the misnamed file against doi 10.1016/j.cca.2012.03.010 and do not open a page for the filename DOI. |
| bfr2012-nickel-fragrances-toys-opinion | Retrieve the German opinion and the printed REACH nickel-release number before any nickel limit is entered. |
| rovira2016-trace-elements-skin-contact-clothes | Sample 35 antimony is missing after the page break. Table 5 columns other than the stated 1.0 mg/kg Tox-Proof antimony limit are not assigned. |
| lin2012-guangzhou-hongdan-baby-powder-lead | The cited Chinese cosmetic limit below 40 mg/kg needs the primary instrument. |
| boreiko2020-antimony-pulmonary-review | The 0.5 mg/m3 occupational limit needs the ACGIH text if it is to be treated as more than a citation. |
| eu2015-consolidated-1881-2006-contaminants | Keep this snapshot distinct from the 28 September 2020 consolidation. Do not read later inorganic-arsenic rice limits into this file. |

## Copyright

© 2026 Paleo Certified, Inc. All rights reserved.

Operated by the Institute of Contaminant Standards.
