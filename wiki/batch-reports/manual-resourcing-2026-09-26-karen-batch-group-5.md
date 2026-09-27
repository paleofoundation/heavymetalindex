# Manual resourcing batch, 2026-09-26, group 5 of 5

This report covers the group 5 slice of the 2026-09-26 Karen manual-resourcing batch. Thirty-one PDFs were read. Twenty-six new source pages were written. Five papers already had source pages and were left unchanged. No synthesis was run. Product, ingredient, metal, and regulation pages were not edited. Shared regenerated outputs were not committed.

Direction of the edit: toward the literature. The pages report what these sources state. They do not set or adjust a certification threshold.

© 2026 Paleo Certified, Inc. All rights reserved.
Operated by the Institute of Contaminant Standards.

## Papers ingested and skipped

Ingested as new source pages: 26.

Skipped as existing and unchanged: 5. Dedup was by DOI and title before any page was created. None of the five was updated, because this pass did not add verified numbers beyond the pages already on file.

| Cite key | DOI | Why unchanged |
| --- | --- | --- |
| ma2024-sanitary-napkins-metals | 10.1016/j.eti.2024.103606 | Source page already exists |
| mohammed2020-tt-toys-baby-items | 10.5897/JECE2020.0465 | Source page already exists |
| nyamukamba2023-south-africa-diapers-metals-formaldehyde | 10.3390/ijerph20021023 | Source page already exists |
| efsa-arsenic-contam-2009 | 10.2903/j.efsa.2009.1351 | Source page already exists |
| efsa-lead-contam-2010 | 10.2903/j.efsa.2010.1570 | Source page already exists |

Failed to ingest: none. Ågren 1990 has an empty text layer. Tables 1 and 2 were read from the page image, so the paper was ingested rather than left unread.

Manifest metadata disagreements: the file named aschenbeck2017.pdf is Api, Parakhia, O'Brien, and Basketter, Dermatitis 2017 (DOI 10.1097/DER.0000000000000304), on fragrance sensitization. It is filed as api2017. The Ågren filename DOI 10.1159/000247982 is the 1990 Dermatologica paper, not a second 2009 article. The Crossref issued date is a later DOI registration of the same pages.

## New source pages

- agren1990-zinc-oxide-percutaneous-absorption-man
- api2017-fragrance-human-skin-sensitization-potency
- chapa-martinez2016-pet-bottled-water-antimony
- chu2021-pet-fiber-antimony-china
- clancy2025-methylisothiazolinone-skin-msi
- danjuma2025-hair-dye-ptes-nigeria
- dey2016-disposable-diaper-exposure-factors
- efsa2016-titanium-dioxide-e171-re-evaluation
- fda-draft-lead-cosmetic-lip-externally-applied
- fda2021-otc-monograph-m016-skin-protectant
- fischer2007-nickel-allergy-elicitation-dose-per-area
- fujita2021-hyperzincemia-zno-diaper-dermatitis-infant
- kaksi2022-patch-tests-children-turkey
- krekeler2022-baby-powder-nickel-chromium-abstract
- larese-filon2015-nanoparticle-skin-absorption-review
- mortz2002-adolescent-contact-allergy-odense
- nnorom2011-nigeria-facial-talcum-trace-metals
- pereira2020-nickel-premade-baby-foods
- rovira2015-clothing-skin-trace-elements
- salamone2025-antimony-iii-caco2-intestinal-cells
- shotyk2005-pristine-groundwater-antimony-scandium
- stauber1994-percutaneous-absorption-inorganic-lead
- tukur2012-pet-bottle-antimony-migration
- valli2000-antimony-potassium-tartrate-toxicity-comment
- westerhoff2008-pet-bottled-water-antimony
- zachariadis2009-sunscreens-trace-elements-icpaes

Api 2017 and Clancy 2025 have source pages and zero ledger rows. Neither paper reports a metal concentration.

## Provisional destinations and unresolved routes

No provisional product or ingredient pages were created.

Thirteen sources declare an existing product page. The local routing audit wrote 15 `direct_evidence` rows for them (Nnorom and FDA M016 each touch two product pages). Those rows were not committed. See Checks.

These sources have `products: []` because the paper does not resolve an existing product slug, and no new page was invented:

- Hair dye (Danjuma). There is no broad hair-dye token. Declaring both rinse-off and permanent dye pages would overspecify a paper that does not split them.
- Groundwater (Shotyk). No groundwater product page.
- PET fiber, textile wastewater, and river water (Chu). Not infant clothing.
- Caco-2 cells (Salamone), fragrance sensitization (Api), methylisothiazolinone skin imaging (Clancy), nickel and cobalt patch tests (Fischer, Mortz, Kakşi), inorganic lead skin absorption in adults (Stauber), and the antimony potassium tartrate comment (Valli).
- Titanium dioxide as a food additive (EFSA 2016). Contaminant specifications are recorded. The opinion is not a sunscreen occurrence study.
- Zinc oxide occlusive dressings on adult intact skin (Ågren 1990). This is not a diaper cream.
- Rovira clothing includes infant garments and adult garments. The page routes to infant clothing and the limitation says the sample is not infant-only.
- FDA 2016 draft lead guidance covers lip products and externally applied cosmetics. Only lipstick has a product page in this repo, so only lipstick is declared.
- Zachariadis and Larese Filon are sunscreens and nanoparticle skin absorption. They are routed to sun-suntan-products. They are not identified as baby mineral sunscreens.

Metals outside the routing map (Ti, Zn, Co, Sc) are named in frontmatter where the paper measures them. The router skips unknown symbols rather than opening an unresolved row. Related-evidence links point at the existing metal pages, including titanium, zinc, and cobalt.

## Structured evidence

Batch files, under `data/evidence/manual-resourcing-2026-09-26-karen-batch/group-5/`:

- `numbers.csv`: 1,405 ledger rows across 24 cite keys. Each row keeps the source unit, statistic, n, basis, page, and table or figure. `unit_text_layer` is filled where a glyph correction changed the unit.
- `candidate_values.csv`: the same 1,405 rows in the `local_reingest_candidate_values.csv` column set. `mean_ppb` is blank so a source unit is not silently converted to ppb.
- `sources.jsonl`: identity, DOI, SHA-256, and ledger count for the 26 new pages.
- `flags.md`: unit, species, and other flags.

Reviewed versus pending: the ledger rows are extracted source facts with page provenance. They are not approved contamination-profile values and they are not certification limits. `index.md`, `wiki/log.md`, and `audit-queue.csv` were not edited.

## Spot check

A random 10 percent of ledger rows was checked with seed 20260927: 140 rows. The numeric token was found in the pdftotext layer for 136 rows. Zero rows failed that check. Four Ågren 1990 rows were counted as image-verified because the text layer is empty and the tables were read from the page image.

The check confirms that the numeral occurs in the text layer. It does not re-verify the unit glyph. Tukur water rows can pass the numeral check even where the text layer dropped the micro prefix. Those units were corrected from a page image and are flagged below.

## Papers flagged

- Tukur 2012. The text layer prints mg where the page image prints µg for drinking-water antimony, the EU 5 µg/L and US 6 µg/L values, the 6 µg/kg/day intake figure, and the 40 µg/kg food-migration sentence. PET Table 2 stays mg/kg. The same correction was applied to other water rows, including lead 25 and 10. Those lead lines and the 4.08 migration maximum were not separately cropped. The spike printed as 1 mg/L in the text layer was not cropped.
- Fischer 2007. Figure axes print µg Ni/cm2. Some table headers print mgNi/cm2 for the same numerals. Both printings are kept in the verbatim field.
- Stauber 1994. The text layer prints the microgram sign as #g or /~g. Values are recorded as µg where the surrounding unit is per litre. The discussion also says 5 mg applied where the methods describe 4.4 mg.
- Ågren 1990. Empty text layer. Table means were read from the page image and checked by arithmetic (2.91 minus 2.68 equals 0.23 mg/cm2; 0.23 mg/cm2 over 48 h is about 5 µg/cm2/h). Subject-level tape-stripping numbers from OCR were not used.
- Shotyk 2005. A comparison paragraph cites other bottled-water studies and a WHO maximum allowable concentration. The page image shows 5 µg/L and a cited median of 2 µg/L. The text layer drops the micro prefix and prints mg/L. Those figures are citations, not groundwater measurements from this study. The public key-number table uses the study means (Sb 2.2 ± 1.2 ng/L, n=34; maximum 5.0 ng/L; Sc 8.6 ± 4.7 ng/L, n=28). Site means stay in the ledger.
- Danjuma 2025. Negative concentration cells, including mercury, and a cesium value in the tens of thousands of ppm are copied as printed and are not usable occurrence.
- Rovira 2015. Chromium in cloth is total chromium. A risk model applies a Cr(VI) reference dose to that total. That is not a Cr(VI) measurement.
- Pereira 2020. Dry versus wet weight is not stated. One group mean is 32.4 µg/kg in the results and 33.4 µg/kg in the conclusions. Both are recorded.
- Krekeler 2022. Conference abstract. Approximate nickel and chromium for one 1985 bottle, five replicates. The brand is omitted from page prose. The stored raw path uses a brand-free filename. The PDF itself was not copied into `raw/`.
- FDA draft, December 2016. Marked Draft-Not for Implementation. Recommended maximum 10 ppm lead for lip products and externally applied cosmetics. This is not the later final guidance.
- FDA OTC Monograph M016. Zinc oxide and related skin-protectant percentages. No heavy-metal contaminant limit.
- Clancy 2025 was also processed by Codex locally. Nacci, Liu, and Hahn were not first authors in this slice. Three bottled-water papers are in the slice (Chapa-Martínez, Westerhoff, Tukur) so a later cross-check can compare them. This report does not claim Codex processed all three.

## Papers unreadable

None left unreadable. Ågren 1990 required a page-image read because pdftotext returned only download stamps.

## Existing synthesis pages these sources touch

These pages were not edited. A later synthesis pass should read the new sources before changing a published claim.

- `wiki/synthesis/heavy-metals-in-baby-lotions-oils-and-powders.md`. Krekeler 2022 is a baby-powder nickel and chromium abstract. Nnorom 2011 is mostly adult facial talc, with a baby-powder subgroup of 3, so it is adjacent.
- `wiki/synthesis/heavy-metals-in-diaper-creams.md`. Fujita 2021 is a single-infant zinc oxide ointment case. FDA M016 states zinc oxide active percentages and no contaminant limit. Ågren 1990 is a zinc oxide dressing on adult intact skin, not a diaper cream.
- `wiki/synthesis/heavy-metals-in-mineral-baby-sunscreens.md`. Zachariadis 2009 measures trace elements in sunscreens that are not identified as baby or mineral-only. Larese Filon 2015 is a nanoparticle skin-absorption review. Both are context, not baby-mineral occurrence.
- `wiki/synthesis/dietary-nickel-plant-staple-accumulation.md`. Pereira 2020 measures nickel in premade baby foods. Fischer 2007, Mortz 2002, and Kakşi 2022 are patch-test and elicitation studies, not dietary nickel accumulation.

No bottled-water synthesis page exists. Chapa-Martínez, Westerhoff, Tukur, and Shotyk do not update a current synthesis page.

## Proposed audit-queue rows

Not written to `audit-queue.csv`. Status pending.

| Id | Item |
| --- | --- |
| G5-TUKUR-UNIT | Second crop of Tukur lead 25 and 10, the 4.08 migration maximum, and the 1 mg/L spike, to confirm the micro prefix on those lines |
| G5-FISCHER-UNIT | Decide whether Fischer table headers that print mgNi/cm2 are a glyph error against the µg/cm2 figure axes |
| G5-STAUBER-OCR | Re-read Stauber dose lines (4.4 mg applied versus 5 mg in the discussion) from a page image |
| G5-DANJUMA-NEG | Hold Danjuma negative cells and the extreme cesium value out of any occurrence pool |
| G5-AGREN-IMAGE | Image-read Ågren 1990 individual table cells against the means already checked by arithmetic |
| G5-KREKELER-ABSTRACT | Do not treat the single-bottle abstract as a category distribution |

## Checks

Local routing audit on 2026-09-27, after the 26 pages were on disk: 3,172 source pages processed, 0 unresolved targets, 0 malformed sources. It would have added 15 `direct_evidence` rows. `route_status` on those rows is `missing_direct_product_route` because the product pages were not edited and the value register was not regenerated. That status is expected under the parallel-group rule.

The three shared routing files were restored to the branch base after the audit. They are not in this commit. `index.md`, `wiki/log.md`, generated product sections, and `audit-queue.csv` were not edited.

A field scan of the 26 new pages found `cite_key`, `source_type`, `evidence_tier`, `license`, evidence fitness, a 64-character `raw_sha256`, and either a DOI or `no_doi_assigned: true` with an access URL.

Full `prebuild`, `npm test`, and `npm run build` were not run. Those commands regenerate shared product sections, index files, and routing artifacts that this group must not commit. They should be run once after all five group pulls merge.

The pre-commit hook runs the routing audit and stages the three routing CSVs whenever `wiki/sources/` is committed. This commit skips that hook so those shared files stay out of the pull request. The audit was run locally first, and it passed. Provenance rows for the 26 source pages were still appended to `data/evidence/wiki_edit_audit.jsonl` and are included in the commit.

## Codex overlap

Clancy 2025 is in this slice and was also processed by Codex locally. The source page is still included here.
