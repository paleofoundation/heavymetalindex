# Codex bulk ingest report - 2026-07-27

## Scope

- Requested mode: fast serial source-page ingest, no synthesis / standards / pooling / design.
- Roots order: mercury deep dive, ingredient sweep, product sweep, Manual Fetch Kimi, seasonal/geographic auto-fetch, Manual Resourcing, Manual Fetch Discovery.
- Started root: `raw/Research Pull Mercury Deep Dive` (`/Volumes/HMI-Library/research-pulls/metal-deep-dive-mercury-hg`).

## Result

- New source pages committed in this continuation: 2.
- Commits made:
  - `6bf226424` (`ingest: blechinger2026-methylmercury-neurodevelopment-trvs [fresh] from Research Pull Mercury Deep Dive`).
  - `19697b379` (`ingest: kim2019-jeju-shark-metals [fresh] from Research Pull Mercury Deep Dive`).
- Source pages created:
  - `wiki/sources/blechinger2026-methylmercury-neurodevelopment-trvs.md`.
  - `wiki/sources/kim2019-jeju-shark-metals.md`.
- Routing audit for the Blechinger source exited 0: `4272` product-source rows generated overall, `13` unresolved targets, `1021` malformed source rows, `0` blocking. The new Blechinger row in `routing_malformed.csv` is advisory only for intentionally empty `products` / `ingredients`.
- Routing audit for the Kim source exited 0: `4273` product-source rows generated overall, `13` unresolved targets, `1021` malformed source rows, `0` blocking. The Kim source added `1` `fish-marine-predatory` product-route row and did not appear in `routing_unresolved.csv` or `routing_malformed.csv`.
- Stop reason: paper-internal data-integrity issue in the next new candidate PDF.

## Previous Stopper Already Surfaced

Candidate PDF:

`raw/Research Pull Mercury Deep Dive/Fish marine non-predatory sardines anchovies salmon cod/JECFA methylmercury/Karjalainen__EstimatedIntake_FinalDraft_2012.pdf`

SHA-256:

`f5b61d4bb4d58f842211949df2ae90d2161dd95e7b83cb5a9c9466257137160b`

Prior finding: the artifact appears incomplete/corrupt. It starts at `1. Introduction`, lacks a title page, author list, DOI, and publication venue, and rendered pages around Table 1, Table 2, Figure 1, Figure 2, and Figure 3 show captions without the required table/figure bodies. No source page was written for this artifact.

## Current Stopper

Candidate PDF:

`raw/Research Pull Mercury Deep Dive/Fish marine non-predatory sardines anchovies salmon cod/Codex mercury fish/10-1007-s12011-021-03064-8.pdf`

Identity:

- DOI: `10.1007/s12011-021-03064-8`.
- SHA-256: `521602b29d1bf3340fc3327555a19ffc410ac6a35ab2d07b6a782fba8bfdb166`.
- Title: `Metals in Wild and Cultured Dicentrarchus labrax (Linnaeus, 1758) from Fish Markets in Sinop: Consumer's Health Risk Assessment`.
- Authors: Levent Bat, Fatih Sahin, Md. Simul Bhuyan, Elif Arici, Aysah Oztekin.

Identity / duplicate checks performed:

- DOI grep for `10.1007/s12011-021-03064-8` and DOI-slug grep for `10-1007-s12011-021-03064-8` found no existing `wiki/sources/` page.
- Raw-handle grep for `RPHG_10-1007-s12011-021-03064-8` found no existing source page.
- Checksum grep for `521602b29d1bf3340fc3327555a19ffc410ac6a35ab2d07b6a782fba8bfdb166` found no existing source page.
- Proposed cite-key greps for `bat2022-metals-seabass-sinop` and `bat2022-metals-dicentrarchus-labrax-sinop` found no existing source page.

Data-integrity issue:

- Table 1 reports cultured European seabass Cu as `0.27 mg/kg wet wt.`; Figure 1 monthly cultured Cu bars are also visually centered around this magnitude.
- The methods give infant fish intake as `13 g/day`, infant body weight as `10 kg`, and the EDI formula as concentration times fish intake divided by body weight.
- Using the paper's own Table 1 concentration, the cultured-Cu infant EDI should be approximately `3.51E-04 mg/kg body wt./day` (`0.27 mg/kg * 0.013 kg/day / 10 kg`).
- Table 2 instead reports cultured-Cu infant EDI as `3.079E-03`, and the corresponding EWI as `2.2E-02`. The expected EWI from the paper's concentration is about `2.46E-03`.
- Table 2's cultured-Cu children and adults rows, `2.452E-04` and `1.596E-04`, are consistent with the `0.27 mg/kg wet wt.` concentration. The inconsistency appears localized to the cultured-Cu infant EDI/EWI row and downstream risk calculations.
- Table 3 reports cultured-Cu infant THQ as `7.70E-02`; using the paper's `4E-02` Cu reference dose and the concentration-consistent infant EDI gives about `8.8E-03`. The reported cultured-infant HI (`8.45E-01`) therefore appears to include the elevated Cu infant THQ.

Disposition:

- I stopped before writing a `wiki/sources/` page for this Bat 2022 candidate, before appending it to `data/evidence/audit-queue.csv`, before running a source-route audit for it, and before committing any Bat 2022 ingest artifact.
- Suggested queue disposition: send the Bat 2022 PDF to Claude/human audit for whether to ingest exact source-reported values with an explicit arithmetic-warning note, exclude the affected risk-calculation cells, or replace with a corrected article version if one exists.

## Current Stopper - HJBC Canned Fish Mercury Paper

Candidate PDF:

`raw/Research Pull Mercury Deep Dive/Fish marine non-predatory sardines anchovies salmon cod/Codex mercury fish/10-15671-hjbc-778023.pdf`

Identity:

- DOI: `10.15671/hjbc.778023`.
- SHA-256: `2b9e932e3aeb1bbb353cd2f90f6cde4d26ab3c2144b7016984a2a28f85db15f2`.
- Title: `Validation of Determination by Icp-Oes Method of Mercury Residual Levels in Meat of Canned Fish Put up for Sale in Turkey`.
- Authors: Fatma Hepsag and Tefide Kizildeniz.

Identity / duplicate checks performed:

- DOI grep for `10.15671/hjbc.778023` and DOI-slug grep for `10-15671-hjbc-778023` found no existing `wiki/sources/` page.
- Raw-handle grep for `RPHG_10-15671-hjbc-778023` found no existing source page.
- Checksum grep for `2b9e932e3aeb1bbb353cd2f90f6cde4d26ab3c2144b7016984a2a28f85db15f2` found no existing source page.
- The PDF has `10` pages, file size `530481` bytes, and no encryption.

Data-integrity issue:

- The abstract states that recovery experiments used two concentration levels, `30` and `50 mg kg-1`. Rendered Table 2 instead labels the recovery levels as `0.5 ppm Hg` and `0.3 ppm Hg`, with achieved concentration means `0.471 mg kg-1` and `0.295 mg kg-1`.
- The methods state a total of `375` canned fish samples, with skipjack tuna `n=90`, bluefin tuna `n=95`, yellowfin tuna `n=90`, and albacore tuna `n=100`. The results narrative later says that, "from the sample of `102` canned fish samples," no sample exceeded the Turkish Food Codex limit. The source does not reconcile `102` against `375`.
- The abstract states that only `4.8%` of investigated samples were detected at a detectable mercury level and that `1.3%` exceeded the FAO/WHO `0.5 mg kg-1` recommendation. Table 4 then gives species-level mean/minimum/maximum mercury values for four tuna groups, but it does not state whether these are all samples, detected-only samples, or another subset.
- The results text says "Table 3 shows results obtained for Hg in `375` samples," but rendered Table 3 is a certified-reference-material uncertainty table, not a sample-results table. The occurrence table is rendered as Table 4.
- Table 4 reports, for example, canned skipjack tuna mean `0.381 mg kg-1`, standard deviation `0.264 mg kg-1`, standard error `0.063 mg kg-1`, minimum `0.09 mg kg-1`, and maximum `0.66 mg kg-1`. The narrative immediately below reports skipjack as `0.381 +/- 0.005 mg kg-1 ww`, bluefin as `0.274 +/- 0.005`, yellowfin as `0.173 +/- 0.005`, and albacore as `0.079 +/- 0.005`, which does not match Table 4's standard deviations or standard errors.
- The results narrative reports the "smallest Hg" as `0.046 +/- 0.845 mg kg-1 ww` and the "highest value of Hg" as `0.382 +/- 0.153 mg kg-1 ww`; those summary pairs do not reconcile with Table 4's minimum/maximum values (`<LOQ` to `0.66 mg kg-1`) or its species means.
- The discussion states that the highest mercury level determined in the study was `45.33 ug g-1` while also saying detected values were lower than recommended acceptable limits. `45.33 ug g-1` equals `45.33 mg kg-1`, which conflicts with Table 4's maximum `0.66 mg kg-1` and with the claim that levels were below recommended limits.

Disposition:

- I stopped before writing a `wiki/sources/` page for this HJBC candidate, before appending it to `data/evidence/audit-queue.csv`, before running a source-route audit for it, and before committing any HJBC ingest artifact.
- Suggested queue disposition: send the PDF to Claude/human audit for whether it can be ingested with exact source-reported values and a prominent contradiction note, whether only method-validation context should be retained, or whether a corrected article/source table exists.
