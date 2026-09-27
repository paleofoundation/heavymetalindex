# Manual resourcing batch, 2026-09-26, group 2 of 5

Evidence-only ingest of the Karen manual-resourcing slice assigned as group 2. Direction of the wiki edits is toward the literature: source pages report what each paper prints, including disagreements inside a paper, and they do not set or soften a certification threshold. No synthesis was run. `ingest_status` is not set to complete, because routing regeneration, index, and log updates were intentionally left for a later compiled-wiki pass.

© 2026 Paleo Certified, Inc. All rights reserved.

## Counts

| Item | Count |
| --- | --- |
| Files in the slice | 30 |
| Existing source pages, unchanged | 4 |
| Existing source page updated from abstract to full text | 1 |
| New source pages | 25 |
| Structured evidence rows in the group ledger | 350 |
| Papers fully unreadable | 0 |
| Provisional product or ingredient pages created | 0 |

The ledger is `data/evidence/manual-resourcing-2026-09-26-karen-batch/group-2/values.jsonl`. It uses the `values.jsonl` fields. Original and normalized values are equal. No unit conversion was applied.

## Existing pages, unchanged

- `marcelis2025-micp-leachables-metals` (DOI 10.1016/j.envint.2025.109401). Table 6 leachate numbers are already on the page.
- `xiong2025-heavy-metals-infant-clothing` (DOI 10.3390/toxics13080622). Table 5 means are already on the page.
- `nguyen2016-underwear-trace-elements` (DOI 10.1080/10934529.2016.1221212). The PDF hash matches the page hash.
- `efsa-cadmium-contam-2009` (DOI 10.2903/j.efsa.2009.980). The full opinion is already ingested. The 139-page opinion was not re-extracted.

## Existing page, updated

- `karwowski2016-folk-diaper-powder-infant-lead`. The earlier page was the USGS abstract. This copy is the full Environmental Geochemistry and Health article, DOI 10.1007/s10653-016-9881-6. The supplied filename uses a DOI string that is not this paper. The USGS abstract hash is kept under `near_duplicates`.

## New source pages

- `liu2024-zebrafish-antimony-exposure`
- `makos2021-disposable-diaper-toxic-compounds-review`
- `zhi2020-soybean-cadmium-safe-cultivars`
- `rehman2013-talcum-powder-heavy-metals-pakistan`
- `sun2002-percutaneous-inorganic-lead`
- `shotyk2006-antimony-arctic-snow-bottled-water-commentary`
- `shotyk2006-bottled-water-antimony-pet`
- `boyapati2013-mi-baby-wipes-hand-dermatitis`
- `cahill2014-mi-allergy-wipes-australia`
- `celeiro2015-baby-wipes-fragrance-phthalates`
- `chen2022-preschool-clothing-heavy-metals-asia`
- `fields2006-contact-dermatitis-baby-wipes`
- `edirisinghe2019-sri-lanka-legumes-cereals-as-cd`
- `fischer2005-nickel-elicitation-thresholds`
- `gawkrodger2011-nickel-skin-levels-occupations`
- `holmes2016-zinc-oxide-skin-penetration`
- `ishii2015-phthalates-paper-diapers`
- `kuller2016-infant-skin-care-products`
- `leite-silva2016-nano-zinc-oxide-skin-occlusion`
- `li2015-agrobacterium-antimonite-oxidase`
- `efsa2004-afc-antimony-trioxide-food-contact`
- `schneider2018-inorganic-uv-filters-zno-tio2`
- `silverberg2002-nickel-hypersensitivity-children`
- `tuchman2015-nickel-dermatitis-children`
- `wester1992-percutaneous-cadmium-water-soil`

## One-line summaries

- Liu 2024. Adult zebrafish, 14 days, nominal antimony 0, 30, 300, and 3000 µg/L. Not a food survey. Also processed by Codex locally.
- Makoś-Chełstowska 2021. Review. States that most countries have no legal maximum for individual compounds in diapers. Cited concentrations were not copied.
- Zhi 2020. Twenty-five Chinese soybean cultivars. Pot seed-cadmium means 0.44 and 0.81 mg/kg dry weight at 1.0 and 2.5 mg Cd/kg soil. Field soil total cadmium 1.22 mg/kg. Pot soil total cadmium 0.15 mg/kg.
- Rehman 2013. Thirty talcum powders, Faisalabad. Table 1 means for Pb, Cd, Co, total Cr, and Cu. First author is Rehman, not the coauthor named in the file. Basis in ppm is not confirmed as mg/kg.
- Sun 2002. Skin absorption of four inorganic lead compounds in 10 workers and in rats. Results tables are not readable in this copy, so no absorption percentage was entered.
- Shotyk 2006 commentary. Magazine piece. States a detection limit of five parts per quadrillion, several hundred mg/kg antimony in PET, four parts per trillion in a source water, and up to 30 times more antimony in PET than in the glass comparison. Also processed by Codex locally. No verified DOI or stable access URL.
- Shotyk, Krachler, and Chen 2006. Antimony in Canadian and European bottled waters and in PET versus glass. Table 1 uses letter codes. Also processed by Codex locally.
- Boyapati 2013. Methylisothiazolinone hand dermatitis from baby wipes. No metal concentration.
- Cahill 2014. Clinic methylisothiazolinone rates 3.5%, 8.4%, and 11.3%. DOI on the letter is 10.5694/mja13.10946. Not a metal assay.
- Celeiro 2015. Fragrance allergens, musks, phthalates, and preservatives in baby wipes. No metal concentration.
- Chen 2022. Total metals in 82 preschool garments from four Asian retail groups. Arsenic is total arsenic. Chromium is total chromium. Routed to infant clothing as the closest existing page. Not the existing peanut paper of the same author surname and year.
- Fields 2006. Four adult cases of wipe-preservative dermatitis. The PDF fragment also contains an unrelated letter, which was not ingested.
- Edirisinghe 2019. Total arsenic and cadmium in 181 Sri Lankan legume and cereal samples, wet weight. An inorganic-arsenic reference dose is applied to total arsenic.
- Fischer 2005. Occluded nickel review. Authors' summary: 5% react at 0.44 mg Ni/cm2 and 10% at 1.04 mg Ni/cm2.
- Gawkrodger 2011/2012. Open-application nickel grades in Table 2. Occupation means in Table 1 were not readable as a complete table.
- Holmes 2016. Ten percent zinc oxide on human epidermis. Particles did not enter intact viable epidermis. Accepted manuscript, not the final pagination.
- Ishii 2015. Phthalates in paper diapers. Manufacturer coauthors. No metal concentration entered.
- Kuller 2016. Infant skin-care review. No metal concentration locked.
- Leite-Silva 2016. Nano zinc oxide did not penetrate viable epidermis with or without occlusion or barrier impairment.
- Li 2015. Bacterial antimonite oxidase. Km 64 ± 10 µM Sb(III), Vmax 150 ± 7 nmol min−1 mg−1.
- EFSA AFC 2004. Antimony trioxide REF 35760 restricted to 0.04 mg/kg of food as antimony. Petitioner migration 31.8 µg/kg in 3% acetic acid is labeled as the petitioner result. WHO TDI is labeled as WHO. No resolved DOI.
- Schneider and Lim 2018/2019. Review. Nanoparticle, as they use the word, means below 100 nm. Cited penetration studies were not re-extracted.
- Silverberg 2002. Thirty children, all positive to nickel sulfate 5%, and 50% with an id reaction.
- Tuchman 2015. Clinical review of nickel dermatitis in children. No own concentration locked.
- Wester 1992. Cadmium-109 on cadaver skin. Applied doses 116 ppb in water and 13 ppb in soil. Absorption percentages are not readable in this copy.

## Manifest disagreements

- `10.1016:j.ijheh.2025.114672` is the Karwowski 2016 article (DOI 10.1007/s10653-016-9881-6), not an International Journal of Hygiene and Environmental Health 2025 paper.
- The talc PDF filename uses Muhammad Riaz. The first author is Ghana Rehman.
- `chen2022.pdf` is preschool clothing (DOI 10.1016/j.ecoenv.2022.114121), not `chen2022-peanut-elements-china`.
- `toxics-13-00622.pdf` is the existing Xiong 2025 clothing paper.
- `nguyen2016.pdf` is byte-identical to the existing source hash.

## Unresolved routes

No new product or ingredient pages were created. Declared slugs are existing pages, and the routing audit reported no unresolved target for this tree.

Gaps recorded rather than invented as pages:

- Finger millet, foxtail millet, and sesame seed (Edirisinghe). Maize is routed to corn. Mustard, legumes, cereals, and beans use existing ingredient pages. `routing_input_gaps` on that source lists the three missing crops.
- PET bottles as a packaging product. Shotyk is routed to bottled drinking water and mineral water. The EFSA opinion is routed by matrix (`pet-polymer`, `food-contact-material`) with an empty product list.
- Preschool clothing is filed on `infant-clothing` and the page says the garments are preschool, not only infant.
- Talc results are not split by age, so both `baby-talcum-powder` and `dusting-talc-powders-adult` are declared.

## Flags

- Rehman Table 1 is the value of record. The abstract lead range (0.0006 to 1.05 ppm) and cobalt minimum (0.003 ppm) do not match the table. The claim that lead was the highest metal in every powder is not what the table shows. The final digest volume is unstated, so ppm is not confirmed as mg/kg. The "20 ppm by FDA" sentence is an author statement, not a regulatory-limit row. Chromium is total chromium. Product names in the methods are not keyed to P1–P30 and are omitted.
- Zhi. The abstract names Shennong 10, Tiedou 36, and Liaodou 21 as the field cultivars under 0.20 mg/kg. The field-results paragraph names Tiefeng 31, Shennong 10, and Tiedou 36. Both statements are on the page. The 0.20 mg/kg figure is the authors' cited maximum.
- Edirisinghe. Table 1 is wet weight. The abstract says "on weight basis" without wet or dry. Arsenic is total arsenic, and an inorganic-arsenic reference dose is applied to it. Limits of quantification use different unit bases (0.006 mg/kg cadmium and 18.17 µg/kg arsenic).
- Shotyk JEM. Groundwater is 2.2 ± 1.2 ng/L in the abstract and in most of the article, and 2.2 ± 1.4 ng/L in one results line (n = 34 either way). Polypropylene is 8.2 ± 0.9 ng/L in the abstract and 8.2 ± 0.7 ng/L in the body. Antimony species in the water were not measured. Brand letters only.
- Karwowski. Body antimony is 1005 ppm. The abstract says 1000 ppm. Arsenic 55 ppm is elemental total, not inorganic arsenic. The 105,000 mg/kg bioavailable-lead figure and the "over 10 micrograms from 1 mg" sentence are the authors' calculation.
- Chen. Total content after acid digestion, not migration. Censored minima were not imputed in the ledger. OEKO-TEX and the Chinese textile ceilings are cited without printed numbers, so they are not limit rows.
- EFSA 2004. DOI 10.2903/j.efsa.2004.24 returned not found. A suffixed candidate was not confirmed. Access URL is the address printed on the opinion. Other substances on the same list are not metals and were not ledgered.
- Wester. Percent-of-dose cells and a picogram-per-litre drinking-water sentence are column-damaged and were not recorded.
- Sun. Results tables were not recoverable.
- Holmes and Li. Accepted manuscripts, not final pagination.
- Gawkrodger. Abstract "positive" counts include the doubtful grade. Table 2 is the count of record.
- Makos, Kuller, Tuchman, and Schneider are reviews. Cited numerical studies were not copied.
- Ishii includes authors affiliated with a diaper manufacturer. No brand ranking is published.
- Cahill DOI is the Medical Journal of Australia DOI printed on the letter.

## Papers unreadable

None of the 30 files failed to open. Partial reads:

- Wester 1992. Applied concentrations are readable. The absorption table is not.
- Sun 2002. Design is readable. The results tables are not.
- Shotyk commentary. Figure 1 averages are graphical only.
- Gawkrodger Table 1 occupation means are not a complete table in this copy.
- Fields 2006. The wipes letter is readable. A different letter shares the PDF and was ignored.

## Spot check

Nine ledger rows were re-read against the text extract. All nine passed. A further presence check asked whether each of the 350 original values occurs in the matching text. Three values are present only with thousands separators or a damaged decimal glyph (Karwowski 639,500 ppm and 239,000 mg/kg, and Gawkrodger measured nickel 53.3 µg/L printed as 53Æ3). Those three were confirmed by reading the sentence. No converted units. This is more than 10% of the ledger.

| value_id | Result |
| --- | --- |
| g2-rehman-p3-pb (1.053 ppm) | pass |
| g2-rehman-p30-cu (0.167 ppm) | pass |
| g2-chen-ch-Cu-max (481 mg/kg) | pass |
| g2-edir-sesame-Cd (37.52 µg/kg) | pass |
| g2-shotyk-a-pet-oct (359 ng/L) | pass |
| g2-efsa2004-sml (0.04 mg/kg) | pass |
| g2-karwowski-sb (1005 ppm) | pass |
| g2-zhi-t1-mean (0.44 mg/kg) | pass |
| g2-gawk-n-5.0 (n = 21) | pass |

## Checks

Routing audit (`node tools/evidence/build-routing-audit.mjs`) processed 3171 source pages, with 0 unresolved targets and 0 malformed sources. Shared routing CSVs were restored after the run and are not in this commit.

Source contract (`node tools/evidence/audit-source-contract.mjs`) reported 0 false-complete declarations. Two new pages have non-blocking metadata gaps: the Shotyk commentary has no access URL, and the Edirisinghe page lists three crops that have no ingredient page. The shared gaps file was restored and is not in this commit.

Public-prose leak check on these 26 pages reported no leaks. The full-corpus prose check was not used as a gate, because it walks every source page.

`index.md`, `wiki/log.md`, product pages, ingredient pages, metal pages, and synthesis pages were not edited.

## Proposed audit-queue rows

These are notes for a later queue. `audit-queue.csv` was not edited.

- Rehman 2013. Confirm whether the unstated digest volume allows a mg/kg basis. Do not treat the author-stated 20 ppm lead figure as an FDA instrument until the instrument is quoted.
- Edirisinghe 2019. Keep total arsenic distinct from the inorganic-arsenic reference dose used in the risk section.
- Zhi 2020. Reconcile the two different trios of field cultivars named as below 0.20 mg/kg.
- Shotyk 2006 JEM. Keep both printed standard deviations for the groundwater and polypropylene means.
- EFSA 2004. Resolve the DOI before any citation export. Do not mint.
- Wester 1992 and Sun 2002. Re-key the absorption tables from a cleaner copy before any percent-of-dose row is added.

## Existing synthesis pages these sources touch

Synthesis pages were not edited.

- `wiki/synthesis/heavy-metals-in-baby-lotions-oils-and-powders.md`. Rehman talc means, and the Karwowski full-text update (a folk powder, not commercial talc).
- `wiki/synthesis/heavy-metals-in-baby-wipes.md`. Boyapati, Cahill, Celeiro, and Fields. None of them reports a metal concentration.
- `wiki/synthesis/heavy-metals-in-mineral-baby-sunscreens.md`. Holmes, Leite-Silva, and Schneider. Penetration and review context, not a contaminant survey of products.
- `wiki/synthesis/eu-regulatory-framework-timeline.md`. The EFSA 2004 antimony restriction of 0.04 mg/kg of food.
- `wiki/synthesis/metals-microbiome-disease-pathogenesis.md`. Liu 2024, antimony exposure and intestinal microbiota in zebrafish.

## Also processed by Codex locally

Liu 2024 and both Shotyk 2006 papers were marked as already handled in a local Codex pass. They are ingested here from this copy, with the numbers above checked against the text.
