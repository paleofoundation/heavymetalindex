---
type: source
cite_key: hu2023-china-tea-heavy-metals
title: "Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China"
authors: [Hu C, Zhang X, Zhan N, Liu Y]
year: 2023
publication: "Toxics"
doi: "10.3390/toxics11080662"
source_type: peer-reviewed
evidence_tier: A
license: "cc-by"
raw_path: raw/studies/hu2023-china-tea-heavy-metals.pdf
sha256: 1263675c779cdd1bd8ebb97eab88f38986ac2a97e7be4277b01bab9cd4804350
access_date: 2026-05-12
access_url: "https://doi.org/10.3390/toxics11080662"
metals: [tAs, Cd, Cr, Cu, tHg, Pb]
ingredients: ["[[ingredients/camellia-sinensis]]"]
products: ["[[products/true-tea-camellia-sinensis]]", "[[products/tea]]"]
matrices: [green-tea, white-tea, dark-tea, black-tea, oolong-tea, scented-tea, yellow-tea, tea-plantation-soil]
jurisdictions: [CN]
sample_n: 4803
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-12
---

# Hu et al. 2023 — Heavy Metals in Chinese Tea: National Status and Health Risk

This peer-reviewed meta-analysis, published in Toxics (MDPI, CC BY), synthesized heavy metal concentration data from 227 published papers (1993–2021) covering tea samples and tea plantation soils across China, using Kriging spatial interpolation to map geographic distributions and EPA/Dutch RIVM health risk models to assess non-carcinogenic and carcinogenic risks for adult tea consumers. The study found that the average contamination of six heavy metals in Chinese tea was: As = 0.21 mg/kg, Cd = 0.14 mg/kg, Cr = 1.17 mg/kg, Cu = 14.6 mg/kg, Hg = 0.04 mg/kg, Pb = 1.09 mg/kg. Contamination rates for all metals were below 3%, and non-carcinogenic risks were within safe limits nationally; however, carcinogenic risks from Cd in Shaanxi Province, Anhui Province, and southwest China exceeded acceptable ranges.

## Key numbers

**National average heavy metal concentrations in Chinese tea (mg/kg dry weight):**
- As: 0.21 mg/kg (national limit: 2 mg/kg; sample n: 4,803)
- Cd: 0.14 mg/kg (national limit: 1 mg/kg; sample n: 5,257)
- Cr: 1.17 mg/kg (national limit: 5 mg/kg; sample n: 4,903)
- Cu: 14.6 mg/kg (national limit: 30 mg/kg; sample n: 4,881)
- Hg: 0.04 mg/kg (national limit: 0.3 mg/kg; sample n: 4,026)
- Pb: 1.09 mg/kg (national limit: 5 mg/kg; sample n: 6,611)

**Pollution rate ranking (above national standard):** Cu > Cr > Hg > Cd > Pb > As (all < 3%)

**Tea plantation soil sample sizes:** As (6,767), Cd (7,435), Cr (6,722), Cu (6,772), Hg (6,424), Pb (7,181)

**Maximum observed values:** Cr and Pb exceeded national standards by more than 8x and 6x respectively in some individual samples; attributed to chromium green pigment additions during processing and lead from automobile exhaust deposition (Pb in young leaves ~80% from air deposition).

**Non-carcinogenic risk:** National average hazard index (HI) = 0.04 (well below 1). Highest HI = 0.18 in Tibet (largest tea consumption region of China).

**Carcinogenic risk (As, Cd, Cr, Pb):** Carcinogenic risks from Cd exceeded acceptable range (10⁻⁶–10⁻⁴) in Shaanxi Province, Anhui Province, and southwest China.

**Geographic hotspots:** High concentrations concentrated in southwest China and some eastern provinces; Shaanxi Province (northwest) also flagged.

## Methods (brief)

Meta-analysis of 227 peer-reviewed papers (CNKI/ISI databases, 1993–2021). Data aggregated at national, provincial, city, and township levels for Kriging spatial interpolation. Six metals analyzed (As, Cd, Cr, Cu, Hg, Pb) across seven tea types (green, white, dark, black, oolong, scented, yellow). Health risk assessed via EPA oral ingestion model using EDI = (C × EF × ED × FI × FR)/(WAB × TA × 1000); EF = 365 d/yr; ED = 70 yr; body weight 61.7 kg average. HQ and HI for non-carcinogenic; TCR (cancer slope factor) for carcinogenic risk. Enrichment factors (EF = C_tea/C_soil at matched locations) used to assess soil-to-leaf transfer.

## Limitations

This is a meta-analysis pooling data from 227 studies with heterogeneous methodologies (different years, regions, analytical methods). The "average publication year 2015" corresponds to data reflecting approximately 2012 conditions. Organic Cd and bioavailable fractions are not distinguished. The Cr data include total chromium; Cr-VI is not separately reported. Cu is included as an essential metal analyte; its contamination rate is highest but is largely an agricultural input issue (fungicides), not a toxic metal concern at the concentrations found.

## Implications

- Certification: Provides national-scale baseline for Chinese tea. The Cd mean of 0.14 mg/kg in tea leaves is below the 1 mg/kg Chinese standard and well below toxicological concern at typical consumption rates. Pb mean of 1.09 mg/kg is below the 5 mg/kg Chinese standard; carcinogenic Cd risk in Shaanxi and southwest China is a regional concern that sourcing teams should flag.
- Courses: Strong illustration of how industrial agriculture inputs (chromium green pigment, Hg-containing pesticides) and atmospheric deposition (Pb from vehicle exhaust) contribute to tea contamination independently of soil.
- App: Provides Chinese national average concentrations for tea leaf matrices for Cd, Pb, As, Cr, Hg. These are dry-weight leaf concentrations, not infusion concentrations; the infusion leaching factor is discussed but not tabulated in pages read.
- Microbiome: Not applicable.

## Wiki pages updated on ingest

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/arsenic]]
- [[metals/chromium]]
- [[ingredients/tea]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [96966651f](https://github.com/paleofoundation/heavymetalindex/commit/96966651f) | 2026-05-12 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
