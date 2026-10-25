# HMI-THIN-INGEST-1 paper ingest brief

You ingest open-access papers that Reed pulled for thin Heavy Metal Index ingredient pages. For each paper in your chunk you write (1) a source record and (2) a findings-store extraction. Nothing else.

ROOT = `/Users/kmfp/ops/heavymetalindex` (the live working folder). SCRATCH = `/private/tmp/claude-502/-Users-kmfp-Desktop/0764695d-9ab2-43d3-9279-0145fa01eacb/scratchpad/thin`.

Your chunk is a JSON list of papers in `SCRATCH/chunks/<chunk>.json`. Each paper has: `doi` (or null), `url`, `title`, `first_author`, `year`, `journal`, `pdf` (absolute path, already sha-verified by Reed), `sha256`, `slugs` (the thin pages Reed pulled it for), `metals`, `notes` (Reed's per-row data notes), `extra`, `batch`.

## Steps per paper

1. Verify the file: `shasum -a 256 <pdf>` must equal `sha256` (skip and log if not). Extract text with `pdftotext -layout <pdf> SCRATCH/text/<source_id>.txt`. If a results table is an image or garbled, render that page with `pdftoppm -r 150 -f N -l N -png <pdf> SCRATCH/text/<source_id>-pN` and read the PNG. Confirm the title and DOI printed in the PDF match the manifest. If the printed DOI differs, use the printed one and record the difference. A PDF with an image-only first page may carry the title on page 2.
2. Pick a `source_id`: `<firstauthorsurname><year>-<3-6 word kebab topic>` in lowercase ASCII (e.g. `horvath2025-hungary-protein-powders-metals`). It must not already exist as `ROOT/wiki/sources/<id>.md` or `ROOT/data/evidence/findings/extract/raw/<id>.json`. Check the DOI is not already in the corpus first: `grep -rl -i "^doi: *<doi>" ROOT/wiki/sources --include='*.md' | grep -v ' 2\.md'`. If it is, reuse that id, do NOT write a new record, and only write the extraction if `extract/raw/<id>.json` is missing.
3. Write the extraction `ROOT/data/evidence/findings/extract/raw/<source_id>.json` exactly per the brief `ROOT/tools/engine/findings/extract/brief.md` (read it fully first; its rules are mandatory). Where that brief says ROOT, use the ROOT above; where it says `/private/tmp/claude-502/apple/text`, use `SCRATCH/text`. Extract EVERY food/product result in the paper, not only the thin page's food.
4. Write the source record `ROOT/wiki/sources/<source_id>.md`, modelled on `ROOT/wiki/sources/orisakwe2012-owerri-food-crops-fruits-metals.md`. Frontmatter: `type: source`, `cite_key`, `title` (as printed), `authors` (as printed, "Surname AB" form, all authors, never "Unknown"), `year` (publication year; but see flags), `publication` (journal, volume, pages if printed), `doi` (null if none), `access_url`, `source_type` (peer-reviewed | preprint | thesis | report | conference-poster | dataset-record), `evidence_tier` (A peer-reviewed primary data, B other primary data, C context), `license` (as stated, else "not stated"), `raw_path` (the absolute pdf path), `metals` (from the full text, not the manifest), `ingredients`/`products` (wikilinks ONLY to pages whose food the paper measures directly, e.g. "[[ingredients/casein]]"; a proxy matrix does not earn a link to the thin page), `matrices`, `jurisdictions` (ISO2), `near_duplicates: []`, `sample_n`, `sample_population` (what, where, collection dates as stated, or "collection dates not reported"), `wiki_doi: null`, `sampling_locations: []`, `sampling_year_range` (from the study, never the publication year), `updated: 2026-10-24`, and `ingest: HMI-THIN-INGEST-1 <batch>`. Body sections: `# <Author> et al. <year> — <plain topic>`, `## Overview` (2-4 sentences), `## Key numbers` (a few verbatim results with table locators), `## Methods (brief)`, `## Evidence Fitness` (sample size, QA, limits; say plainly when it is a proxy for a thin page's food), `## Related evidence` (wikilinks). American English, metal names spelled out in prose, no em dashes, no brand names, no invented numbers. Do not add a "Verification notes" section.

## Hard rules from the owner (Karen, via Elon)

- Never cite or ingest Karen Pendergrass's own papers (any author named Pendergrass). Skip them and log why.
- Never use 10.1016/j.envres.2024.119287 or 10.5620/eaht.2023005 (retracted / excluded).
- Use OA-FILED papers only (your chunk has only those). Never use abstract-only numbers.
- Preprints, posters and theses: `source_type` says so and Evidence Fitness says so. Non-DOI rows (Zenodo records, theses, journals without Crossref DOIs): label them unverified or non-peer-reviewed per `extra.peer_reviewed`; they never replace a DOI paper.
- Proxies: when a paper measures a related matrix (e.g. bottled water for flavored water, flour for chapattis), extract what it measures under its own printed label. Never relabel a proxy as the thin food. In the record, say it is a proxy for `<slug>` and do not link the thin page.
- Specific flags (apply when you meet the paper):
  - Jujube Du 2025 has no resolvable DOI: identify by URL.
  - The Thai-language matcha paper (non-DOI, 2026): use it only if you can confirm from the paper that no author is Karen Pendergrass or affiliated with the Paleo Foundation; otherwise skip and log.
  - fermented-beverage-bases: the kombucha lead outbreak paper is a case report, not representative: disposition `context` or extract as `site_context: experimental`/case, and say so.
  - Redan 2023 (10.1016/j.jfca.2023.105457): confirm the PDF is the published paper (journal header, DOI, pagination). If it is an author manuscript, say so in the record; skip if you cannot confirm it is the paper.
  - Hindawi ISRN paper: the real DOI is 10.5402/2012/827645 (file name uses 10.1155/...).
  - 10.62057/esj.2025.v2.i5: image-only first page; title is on page 2.
  - Alam 10.19109/alkimia.v5i1.10588 has no real year: `year: null`, never cite a year.
  - Raeeszadeh 2021 and Bekele 2024 are preprints; Slinger 2025 is a poster.
  - Suzuki-Inoue 2024 soup rows rest on a food list, not a per-soup table: do not record them as soup measurements.
  - Le Gresley 2021 is lead only; Sixto 2023 cadmium and lead only; Oltulu 2023 stays 2023.
  - Saeid 2022 potato chips: its printed Lorenz sour cream mean does not match its replicates, so exclude that value (log it). Aioanei 2013 wheat bran: table labels conflict with text; use as printed and note it. Phipps 2009 UNLV thesis: method context for spiked candy only, NOT occurrence data (disposition context).
  - Do not ingest Hossein Abadi, Tejera, Adepoju-Bello (abstract only) or Taha, Lee, Divanian, Sohrabi, Nica (abstract only).
  - Swinden 2006 is a thesis with abstract numbers only: disposition context, no findings.
  - Al-Qadeeri is mg/L of digest: keep per-litre units unconverted (value_ugkg null) and never compare with mg/kg.
  - Altwaiq 2019: ICP-AES and AAS disagree; record both as printed and note the conflict.
  - Okoye: the printed Zenodo DOI is not registered; do not cite that DOI (doi: null, access_url = the Zenodo URL).
  - Awoyale 2024: the abstract names Pb/Cd/As but the text says the pepper was not contaminated; follow the text.
  - The 2024 MMWR (Napier, apple cinnamon pouches) is a lead outbreak report: source_type report, findings marked as outbreak/targeted (site_context: market, group says outbreak product), never survey data.
  - cosmetic-clay is non-food: do not use food bands or food units; record as printed.
  - Carignan 2016 appears in two batches: ingest once.
  - Use the manifest first-author names and the year fixes (Abbas 2010, Otitoju 2018) over Crossref.
- Write only: `ROOT/wiki/sources/<new id>.md`, `ROOT/data/evidence/findings/extract/raw/<id>.json`, files under `SCRATCH/text/`, and one ledger line per paper appended to `SCRATCH/ledger/<chunk>.jsonl`. No git, no other edits, no network downloads.

## Ledger line (one JSON object per paper)

`{"key": <manifest key>, "doi": ..., "source_id": ..., "new_record": true|false, "disposition": ..., "findings": <count>, "foods": [...], "thin_slugs": [...], "direct_for_thin_page": true|false, "skipped": null | "<reason>", "flags": [...]}`

## Return (under 120 words)

Counts: papers done, new records, findings written, skipped (with reasons), and any paper whose printed title/DOI did not match the manifest.

## Flags for batches 09 to 14 (Elon, 24 Oct)

- Chunk files for these batches are in `SCRATCH/chunks2/<chunk>.json`; ledger lines go to `SCRATCH/ledger/<chunk>.jsonl` as before.
- Lasky 2013 (10.1289/ehp.1307083) is a short EHP correspondence on arsenic in chicken: source_type correspondence.
- Lopez 2022 (10.1021/acs.est.2c03241) is a lead-adulteration detection-methods paper for spices: disposition context (method), never occurrence data for a finished food.
- Domingo: use the published 10.3390/nu17111755, never the preprint 10.32388/64lzr7.2; one study. Domingo, the Tapia chapter, the Hoque mini review and the Chowdhury preprint: label review or preprint.
- Year fixes Orucoglu 2027 and Asadi Touranlou 2025 vs 2024: use the manifest year.
- CFIA children's food report 2022: snack-category values only; never present them as butter crackers or graham crackers. Khan 2026 Zenodo biscuits is the same PDF as batch-05's: count once (skip if its extraction exists). Do not use Lee, Poornima jam, Skalicka, Nwokoma (abstract only).
- Re-file Jayanthi 2019 (RTE chicken) as a labeled proxy for chicken-nuggets in the record body only (do not relabel its foods).
- Karimi Dehcheshmeh 2021 and Nasiru 2022: cite the printed mEDRA DOI, mark it unverified (no Crossref record). Karimi's Cd/Pb conflict between Table 3 and the abstract, and Nasiru's Pb unit conflict (mg/L vs µg/L): record as printed with integrity flags; do not pick one silently. Nwoke 2021: generic cheese, never Monterey Jack or Swiss.
- Pumpkin itself is unevidenced for pumpkin-pie: say so. Generic cheese rows never get a cheese-variety name.
- Taylor 2005 (10.1289/ehp.113-a687) is a magazine page and Hungerford 2020 (10.3390/proceedings2019036101) a one-page conference abstract: do not ingest.
- Piri 2026 and Feng 2026: Research Square preprints. Armand 2026 and Sayegh 2026: in press. Seyfferth 2024, Nowar 2024 (systematic review) and Bascunan 2023: reviews (context). Kulluk 2023: repository original.
- Price 2023: biokinetic lead model on measured data (extract only measured food values). Er Caliskan 2025: measurement study with simulated risk (extract only the measurements).
- Hanh 2015 is a slide deck: not peer reviewed. Mukherjee 2019: lead only. Islamoglu 2021: As and Hg are mostly less-than values; record them as censored bounds, not values. Banyen 2013: mostly a methods paper; use only its Table 8 own results.
- Keep printed inconsistencies as printed with flags (Muyiwa/Aboyeji As range, Zin Hlyan As ranges, CFIA cassava Cd 8% vs 10%, Islamoglu spinach vs apple Pb).
- Hariono 2023 (plant milk): its printed Pb looks implausible: integrity_flag those values.
- Usman 2021 and Zubairu Yushau 2025: farm or industrial-area crops (site_context accordingly, not market). Begday 2026 main text is Russian: use only values you can read unambiguously from its tables; otherwise no_numeric_results.
- Warsakoon 2010 is coconut milk, a proxy for coconut-water.
