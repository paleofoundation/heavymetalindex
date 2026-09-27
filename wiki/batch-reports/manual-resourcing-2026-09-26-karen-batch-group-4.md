# Manual resourcing, 2026-09-26, group 4 of 5

This report covers the fourth slice of the 2026-09-26 manual-resourcing batch. Thirty-one papers were read. Twenty-seven new source pages were written. Three papers already had source pages and were left unchanged. Shotyk et al. 2006 is the same paper as the page group 2 is creating, so this group does not add a page for it. Structured numbers were copied as printed into the group evidence ledger. No synthesis page, metal page, product page, or ingredient page was edited. Shared routing files, `index.md`, and `wiki/log.md` were not regenerated, because the other four groups are writing source pages at the same time.

The edit moves toward the literature. Values stay in the unit and species the paper printed. No certification threshold was computed or implied.

## Counts

- Papers considered: 31.
- New source pages: 27.
- Existing pages left unchanged: 3 (Yu 2023 beans, EFSA chromium 2014, Rashmi 2020 baby talcum powder).
- Ledger rows: 834, in `data/evidence/manual-resourcing-2026-09-26-karen-batch/group-4/numbers.csv`.
- Flag notes: 129, in the same folder's `flags.md`.
- Papers with no copied metal concentration: Admani 2014, Berg 1994, Cooke 2018, Guin 2001, Nacci 2025, Pack 2021. Zhou 2023 contributes one PFAS figure, not a metal.
- Fully unreadable: none.
- Partial scans: Newton 1994 (empty text layer, OCR of the abstract and methods) and the talc PDF (OCR used only to confirm it is the paper already on the existing page).

`ingest_status` on the new pages is `batch-staged`. A completed ingest would also regenerate routing artifacts and downstream pages. That step is deferred so this group does not overwrite files the other groups own.

## New source pages

- `admani2014-mi-wet-wipes-perianal`. Case of perianal dermatitis attributed to methylisothiazolinone in a wet wipe. No metal concentration.
- `ali2023-lahore-sunblocks-heavy-metals`. Finished sunblocks from Lahore. Lead, cadmium, total chromium, nickel, zinc, total arsenic, aluminium, and titanium, as mg/kg. Routed to sun and suntan products, not to baby mineral sunscreen.
- `basketter2001-chromium-allergic-threshold`. Hexavalent chromium patch and repeated open application doses. Not a concentration in a finished product.
- `berg1994-diaper-dermatitis-wetness-ph`. Diaper-area wetness and pH. No metal concentration. Routed to diapers and components.
- `cdc2012-boston-tiro-infant-lead`. One infant. Capillary blood lead 13 µg/dL, venous 12 then 13 µg/dL, powder 82.6 percent lead, follow-up venous 8 µg/dL. The 8 mg figure is a calculated illustration for a hypothetical 10 mg application, not a measured dose. Routed to traditional eye cosmetics.
- `cooke2018-baby-skin-care-systematic-review`. Systematic review of skin care for healthy term babies. Print year 2018. No metal concentration. Routed to children personal care.
- `cwielag-drabek2020-silesia-vegetables-mining`. Cadmium, lead, and zinc in vegetables grown near mining in Silesia. Vegetable subtype is not resolved, so the ingredient is vegetables and no product row is declared. Some zone IV zinc cells are printed as dashes and are stored as blanks.
- `derry1983-zinc-oxide-ointment-absorption`. Percutaneous zinc from a 40 percent zinc oxide ointment in adults. The paper does not call the ointment a diaper cream. Routed to body and hand leave-on skin care.
- `diaz-bone2009-gut-metalloid-biovolatilization`. Headspace volatilization of arsenic, tin, antimony, mercury, and lead from a gut simulator. Not a food occurrence study.
- `filipe2009-tio2-zno-stratum-corneum`. Titanium dioxide and zinc oxide particles in adult stratum corneum. Not a baby sunscreen and not a finished-product impurity panel.
- `guin2001-baby-wipe-dermatitis`. Preservative hand eczema from baby wipes. No metal concentration. Routed to baby wipes.
- `gulson2010-zno-sunscreen-dermal-zinc`. Zinc from zinc oxide particles in sunscreen used outdoors by adults, measured in blood and urine. Not a baby product.
- `guney2012-toy-jewelry-metal-legislation-review`. Review of U.S. and Canadian legislation on metals in toys and low-cost jewelry. Only limits the review states as limits are copied. Cited occurrence tables from other papers are not re-extracted. Routed to children's jewelry only, because the toy subtype is not resolved. There is no general toys page.
- `heim2009-clothing-fastener-nickel-release`. Nickel release from clothing fasteners worn from newborn to 5 years, synthetic-sweat migration, not total content. The nearest existing page is clasps and fasteners for infant products. The age band is wider than infants. The paper prints 0.5 mg Ni/cm2/week. That unit is kept. It is not converted to the microgram wording usually quoted for Directive 94/27/EC.
- `jensen2003-nickel-systemic-contact-dose`. Oral nickel sulfate doses in nickel-sensitive adults and controls. Not a concentration in a food or a product.
- `kalay-yildizhan2024-turkish-children-contact-sensitivity`. Patch-test positive rates in Turkish children and adolescents. Not product concentrations.
- `keresztes2009-pet-mineral-water-antimony`. Antimony leaching from PET into Hungarian mineral water. Routed to mineral water and to the water ingredient.
- `li2024-nostoc-antimony-biomethylation`. An enzyme that methylates antimony in a Nostoc culture. Not a food or water occurrence measurement.
- `monteiro-riviere2011-sunscreen-nanoparticle-skin`. Pig-skin penetration of sunscreen formulations containing titanium dioxide and zinc oxide. The text layer prints `lg/ml` where the micro sign was dropped. The printed token is kept and flagged. Not a baby sunscreen.
- `nacci2025-disposable-wet-wipes`. Composition and pollution potential of disposable wet wipes. No metal concentration. Not identified as baby wipes, so no product page is declared. Also processed by Codex locally. Retained here for cross-check.
- `newton1994-antimony-trioxide-inhalation-rat`. Rat inhalation of antimony trioxide. Scanned. Both the method target concentrations and the abstract's measured concentrations are copied. Not food or drinking water.
- `oehha2016-antimony-drinking-water-phg`. California public health goal for antimony in drinking water, plus the government limits the document states as limits. Drinking water in general, not bottled water only, so no product page is declared. The water ingredient is declared. The Health Canada 4 ppb figure is the calculated value. The document says the maximum acceptable concentration was set at 6 ppb.
- `pack2021-preservatives-dishwashing-wet-wipes`. Preservatives in automatic dishwasher detergents and in wet wipes. No metals. The wet wipes are not identified as baby wipes. Routed only to automatic dishwasher detergents.
- `poon1998-antimony-rat-drinking-water`. Ninety-day antimony drinking-water study in rats. Toxicology, not a survey of drinking water.
- `shotyk2007-pet-antimony-storage`. Antimony leaching from PET into bottled water during storage. Routed to bottled drinking water and to the water ingredient.
- `yucel2021-contact-allergen-sensitivity-children`. Nickel and chromium patch-test rates in children with contact dermatitis. Not product concentrations.
- `zhou2023-pfas-personal-hygiene-products`. PFAS in personal hygiene products. One headline figure. No metal. No product subtype is resolved.

## Existing pages left unchanged

- `yu2023-zhejiang-beans-toxic-elements`. DOI 10.3390/foods12173300. The PDF hash matches the hash already on that page (`f384718f7578809dd564e3c947a01190558a4ef8a74b248e0053bbb687d2ecd7`). Table 3 is already on the page. No new ledger rows.
- `efsa-chromium-contam-2014`. DOI 10.2903/j.efsa.2014.3595. This PDF hash is `772b81de515781e9b2583f8d4bc7d2e57be69ea8411fa1ebcfaa825c2f4ccc9c`, which differs from the hash on the existing page. The opening text is the 12 June 2014 replacement of the 13 March 2014 version, which is the opinion the page already describes. Not rewritten. No new ledger rows.
- `rashmi2020-baby-talcum-powder-heavy-metals-india`. Same title as the file named `iris.pdf`. That filename is the journal title, not an EPA IRIS assessment. This PDF hash is `0996bcb4d694d21879773aaa3f71d38db3a82e76ab3b8980f5eb836990f72423`, which differs from the hash on the existing page. The existing page already reports the product-level ranges and means for lead, cadmium, and total mercury and already omits commercial names. Not rewritten. No new ledger rows.
- Shotyk et al. 2006, DOI 10.1039/b517844b. The canonical page is `shotyk2006-bottled-water-antimony-pet` in group 2 (PR 173). This group does not keep a second source page. The group-4 ledger rows for this paper use that cite key. This file's sha256, a second raw copy, is `990370bd733fd26d0277db8c49d599351c53d1f23adf558cd65ea47edc3dff06`.

## Codex overlap

Nacci 2025 was also processed by Codex locally. It is marked in the flag file and kept here. No paper in this slice has a first author named Clancy, Liu, or Hahn. Shotyk 2006, Shotyk 2007, and Keresztes 2009 are bottled-water antimony papers. The batch note says Codex processed one bottled-water paper locally. None of the three is marked as a confirmed copy of that local file.

## Spot check

A random 10 percent of the 834 ledger rows was drawn with seed 20260927, which selected 83 rows. Each printed value was searched in the text extract, or in the OCR text for the scanned Newton paper.

Eighty-two rows matched a numeric token in the extract. One row failed the automatic search and passed on a manual read. `G4-0319` (Diaz-Bone 2009) stores the phrase "seven times higher". In the text extract that phrase is split across a line break ("seven times" at the end of one line, "higher" at the start of the next). The sentence is present.

Nineteen of the automatic matches are short tokens of one or two digits. Five of those were read against the surrounding sentence: Basketter 5 ppm under repeated open application, the CDC venous blood lead of 13 µg/dL, Keresztes 2 ng/mL, Derry 60 g of petrolatum control, and a Heim table cell of 24. Each sentence contains the stored value. `G4-0221` is a printed dash for a missing zinc cell in the Silesia vegetable table, not a number. Result: 83 of 83 after the manual read of the line-broken phrase.

## Flags worth a later look

Commercial names appear only in the ledger product column. They are not repeated in this report, in `flags.md`, or in source-page prose.

- Unit: Heim prints milligrams per square centimetre per week for the nickel comparison. The usual quotation of Directive 94/27/EC is micrograms. No conversion was applied.
- Unit: Monteiro text layer prints `lg/ml`.
- Unit: Ali reports product results in mg/kg, a solution detection statement in µg/l, and cited limits in ppm, and treats ppm and mg/kg as the same without showing a conversion.
- Species: digestion totals are stored as total arsenic, total mercury, or total chromium. They are not stored as inorganic arsenic, methylmercury, or hexavalent chromium. Basketter potassium dichromate is stored as hexavalent chromium.
- Migration: Heim is release into synthetic sweat, not total nickel in the metal.
- Scan: Newton 1994. Method targets and measured chamber concentrations both differ and both are copied.
- Blank cells: several Ali titanium cells and the Silesia zone IV zinc row are printed as dashes.

## Routing check

A local check compared the 28 new pages with existing product, ingredient, and metal slugs. It did not write `product_source_routing_audit.csv`, `routing_unresolved.csv`, or `routing_malformed.csv`.

Result: 27 pages checked, 0 unresolved product targets, 0 unresolved ingredient targets, 0 unresolved metals among the symbols the routing audit maps (lead, cadmium, both arsenic species, both mercury species, nickel, aluminium, chromium, hexavalent chromium, tin, antimony, uranium). Zinc, titanium, cobalt, and barium are outside that map. Those pages exist and are linked from the source pages' related-evidence lists. Selenium is named on the Guney page and has no metal page. The audit map does not treat selenium as an unresolved target.

Declared gaps, left unresolved on purpose:

- No general toys page. Guney stays on children's jewelry.
- No general wet-wipe page. Nacci declares no product.
- No general drinking-water product page. The OEHHA goal stays on the water ingredient.
- Heim's fasteners cover newborn to 5 years. The infant clasps page is the nearest existing destination.
- Silesia vegetables are not split into root and non-root.
- Pack's wet wipes are not identified as baby wipes.

## Synthesis pages these sources touch

These pages were not edited. A later synthesis pass would read the new sources with the pages below. Listing them is not a claim that the synthesis was updated.

- `wiki/synthesis/heavy-metals-in-baby-lotions-oils-and-powders.md`. The talc paper is already filed. This batch did not add a second talc page.
- `wiki/synthesis/heavy-metals-in-mineral-baby-sunscreens.md`. Ali is finished sunblock, not identified as baby mineral sunscreen. Gulson, Filipe, and Monteiro are adult or pig dermal studies of zinc oxide or titanium dioxide, which that synthesis already separates from baby-product measurements.
- `wiki/synthesis/heavy-metals-in-diaper-creams.md`. Derry is a 40 percent zinc oxide ointment that the paper does not call a diaper cream. Berg has no metal numbers.
- `wiki/synthesis/heavy-metals-in-baby-wipes.md`. Admani and Guin are clinical wipe reports with no metal concentrations. Nacci and Pack are not identified as baby wipes.
- `wiki/synthesis/eu-regulatory-framework-timeline.md`. Heim's nickel-release comparison, Guney's toy and jewelry limits, and the OEHHA antimony goal are regulatory statements. They were copied as limits, not as new occurrence data.

## Checks run

- Dedup against existing source pages by DOI and by title before any new page was kept.
- Local product, ingredient, and mapped-metal slug check, described above. Clean for the 28 new pages.
- Brand-name scan of the 28 page bodies. No commercial product names from the ledger remained in the prose or the key-numbers tables.
- Spot check, described above.
- The official routing audit was not run. Its first step rewrites the shared routing CSVs.
- `npm test`, `npm run check`, and `npm run build` were not run. Those commands regenerate shared outputs, and `node_modules` is not installed in this worktree.

## Proposed audit-queue notes

These were not written into `audit-queue.csv`.

- Decide which of Shotyk 2006, Shotyk 2007, and Keresztes 2009, if any, is the bottled-water file already processed locally.
- Heim milligram wording versus the microgram wording of the nickel directive. Primary text should settle the unit before any limit page quotes it.
- EFSA file-hash difference, same opinion, left unchanged.
- Rashmi file-hash difference, same paper, left unchanged.
- Selenium on the Guney page has no metal page.

© All rights reserved.
