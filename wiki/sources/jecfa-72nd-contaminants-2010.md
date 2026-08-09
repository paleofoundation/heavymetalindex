---
type: source
cite_key: jecfa-72nd-contaminants-2010
title: "Evaluation of Certain Contaminants in Food: Seventy-second Report of the Joint FAO/WHO Expert Committee on Food Additives"
authors: ["Joint FAO/WHO Expert Committee on Food Additives"]
year: 2011
publication: "WHO Technical Report Series 959"
doi: null
no_doi_assigned: true
access_url: https://www.who.int/publications/i/item/9789241209595
source_type: gov-report
evidence_tier: A
raw_path: raw/reports/JECFA_Lead_Monograph.pdf
sha256: 7300ccdfa4eb81143c27f96f0f9078727eaab0ce541aed1947a9d5e139160e94
access_date: 2026-08-09
license: CC-BY-NC-SA-3.0-IGO
metals: [iAs, tAs, tHg, MeHg]
ingredients: []
products: []
jurisdictions: [international]
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-08-09
---

# JECFA 72nd Meeting (2010) — Contaminants in Food (WHO TRS 959)

## Summary

The Joint FAO/WHO Expert Committee on Food Additives evaluated several food contaminants at its seventy-second meeting (Rome, 16-25 February 2010), reported in WHO Technical Report Series No. 959 (2011). The meeting covered acrylamide, arsenic, deoxynivalenol, furan, mercury, and perchlorate; it did not evaluate lead or cadmium, which were addressed separately at the seventy-third meeting (Geneva, June 2010). For the heavy-metals scope of this wiki the two load-bearing outcomes are the Committee's re-evaluation of inorganic arsenic, which withdrew the long-standing provisional tolerable weekly intake and replaced it with a benchmark-dose reference point for lung cancer, and its first establishment of a provisional tolerable weekly intake specific to inorganic mercury, which withdrew the previous total-mercury PTWI.

This page exists to give TRS 959 its own source record. The document of record was formerly filed under the misleading local filename `JECFA_Lead_Monograph.pdf` and had been mis-cited as the origin of the lead PTWI withdrawal; that citation error was corrected across the wiki on 2026-08-09 (the lead withdrawal is properly attributed to the seventy-third meeting, WHO TRS 960, in [[sources/jecfa-73rd-lead-2010]]). The underlying file is genuinely TRS 959 and evaluates arsenic and mercury, so it is registered here as a valid A-tier primary rather than left without a source page.

## Key numbers

| Analyte | Parameter | Value |
| --- | --- | --- |
| Inorganic arsenic | Benchmark-dose reference point | BMDL0.5 = 3.0 µg/kg b.w./day (range 2.0-7.0 µg/kg b.w./day across the estimated total-dietary-exposure assumptions) for a 0.5% increased incidence of lung cancer |
| Inorganic arsenic | Prior PTWI (withdrawn) | 15 µg/kg b.w./week (2.1 µg/kg b.w./day); withdrawn because it lies in the region of the BMDL0.5 and is no longer health-protective |
| Inorganic mercury | PTWI (newly established) | 4 µg/kg b.w./week, from a BMDL10 for a 10% increase in relative kidney weight in male rats with a 100-fold uncertainty factor; considered applicable to total mercury from foods other than fish and shellfish |
| Total mercury | Prior PTWI (withdrawn) | 5 µg/kg b.w./week (16th meeting); withdrawn |
| Methylmercury | PTWI (referenced, not re-derived) | 1.6 µg/kg b.w./week (established at the 61st meeting, clarified at the 67th); retained as the fish-and-shellfish reference |

## Evidence Fitness

TRS 959 is a toxicological-reference and health-based-guidance-value document, not a food occurrence dataset. It supports reference values (the inorganic-arsenic BMDL0.5, the inorganic-mercury PTWI, the withdrawal decisions) and the exposure framing behind them; it does not provide observed occurrence percentiles for any ingredient or product. The Committee explicitly cautioned that dietary inorganic-arsenic exposure should be estimated from speciated data rather than from generalized conversion factors applied to total-arsenic measurements, because the inorganic fraction of total arsenic varies widely across foods. Use this source for toxicology and regulatory-posture claims on the arsenic and mercury metal pages; do not read occurrence values off it.

## Methods (brief)

For inorganic arsenic the Committee modelled recent epidemiological data (a prospective cohort in north-eastern Taiwan, China, with lung-cancer incidence over an average 11.5 years of follow-up) using benchmark-dose software, deriving BMD and BMDL values for a 0.5% increased incidence over background and selecting the lowest defensible BMDL0.5. For inorganic mercury the Committee applied benchmark-dose modelling to relative kidney-weight increase in male rats exposed to mercury(II) chloride, then applied a 100-fold uncertainty factor and adjusted for the absorbed fraction of ingested inorganic mercury. The Committee noted the absence of any submitted occurrence data on inorganic mercury in foods or water, and general limitations in validated speciation methods and certified reference materials for both inorganic arsenic and mercury species in food matrices.

## Implications

- Certification: fixes the primary-source anchor for the inorganic-arsenic "no health-protective threshold intake" posture and for the inorganic-mercury PTWI. HMT&C reads these as the literature baseline behind arsenic and mercury limit-setting, distinct from the occurrence-percentile view.
- Courses: the arsenic PTWI-to-BMDL transition and the split of the old total-mercury PTWI into a fish/shellfish methylmercury value plus a non-fish inorganic-mercury value are clean teaching examples of how JECFA reference values are revised.
- App: no `contamination_profile` value changes; this is a reference-value source, not an occurrence dataset.
- Microbiome: not applicable.

## Provenance notes

Primary source is the local file `raw/reports/JECFA_Lead_Monograph.pdf` (SHA-256 `7300ccdfa4eb81143c27f96f0f9078727eaab0ce541aed1947a9d5e139160e94`), which is genuinely WHO Technical Report Series No. 959, the seventy-second JECFA report (ISBN 978 92 4 120959 5, © WHO 2011). The filename is a legacy artefact from an earlier mis-ingest and does not reflect the document's contents; renaming the raw file is out of scope (raw/ is append-only and gitignored), so the mismatch is documented here instead. License `CC-BY-NC-SA-3.0-IGO` per WHO standard publication terms; factual data extracted, no verbatim passages reproduced. The seventy-third meeting (TRS 960) is a separate document with its own source record.

## Wiki pages updated on ingest

- [[metals/arsenic-inorganic]]
- [[metals/arsenic-total]]
- [[metals/mercury-total]]
- [[metals/mercury-methyl]]

<!-- BEGIN: hmi-page-history -->
## Update history

This page has no substantive edit history yet. Future revisions will be recorded here once the change lands in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
