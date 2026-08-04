---
type: source
raw_handle: MFK_solidum2013
cite_key: solidum2013-metro-manila-junk-food-metals
title: "Quantitative Analysis of Lead, Cadmium and Chromium in Different Brands of Junk Food Marketed in Metro Manila, Philippines"
authors: [Solidum J N, Parel J L, Pascual A, Reyes R, Tiga D J]
year: 2013
publication: "Advanced Materials Research"
doi: "10.4028/www.scientific.net/AMR.634-638.1581"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/solidum2013.pdf"
raw_sha256: "11de488238c93e102ff91e5aeb8e043fddda2c3e69ac4d2a2a687ecd04b52232"
access_url: "https://doi.org/10.4028/www.scientific.net/AMR.634-638.1581"
metals: [Pb, Cd, Cr]
ingredients: ["[[ingredients/potato-chips]]", "[[ingredients/corn]]", "[[ingredients/noodles]]"]
products: ["[[products/snacks-crackers-biscuits]]"]
matrices: [snack-foods, junk-food, dry-snacks]
jurisdictions: [PH]
near_duplicates: []
sample_n: 36
sample_population: "Thirty-six junk-food samples randomly selected from sari-sari stores in Metro Manila, Philippines, in June 2012."
updated: 2026-06-08
---

# Solidum et al. 2013 — Lead, cadmium, and chromium in Metro Manila junk food

## Overview

Solidum and colleagues measured Pb, Cd, and total Cr in 36 junk-food samples purchased from sari-sari stores in Metro Manila, Philippines. The study reports ppm concentrations from flame atomic absorption spectroscopy after nitric-acid digestion. The occurrence finding is aggregate rather than brand-routed here: one imported snack sample had the highest Pb value, Cd was low or non-detectable, and every tested snack was above the source's chromium comparator.

## Key numbers

Aggregate findings reported in the abstract and discussion:

| Finding | Source-reported value |
| --- | --- |
| Samples | 36 junk-food samples |
| Pb range | 0.0093 to 8.5398 ppm |
| Pb comparator | 0.5 ppm |
| Pb exceedance pattern | Almost all samples were below 0.5 ppm; one imported snack sample was reported at 8.5398 ppm |
| Cd range | non-detectable to 0.0085 ppm |
| Cd non-detects | 4 of 36 samples |
| Cd comparator | discussion first says food safety level 0.015 ppm, then says standard safety level 0.05 ppm |
| Cr range | 0.1261 to 0.3106 ppm |
| Cr comparator | 0.1 ppm |
| Cr exceedance pattern | all tested samples were above 0.1 ppm |

The source tables provide sample-level rows, but this source page does not reproduce brand or product-name rows because doing so would attach consumer product names to contamination values.

## Methods (brief)

Thirty-six junk-food samples were randomly selected from sari-sari stores in Metro Manila in June 2012. Five grams of each sample were digested overnight at room temperature in 10 mL concentrated nitric acid, heated at 80 C for 5 h the next day, cooled, filtered, adjusted to 50 mL with distilled water, and analyzed by atomic absorption spectroscopy. The paper's methods section uses both "flameless atomic absorption spectroscopy" and "flame atomic absorption spectroscopy" wording; the abstract and table discussion describe flame AAS.

## Implications

This source contributes Philippines-market snack-food occurrence context for Pb, Cd, and total Cr. Its direct product fit is broad snacks/crackers/biscuits rather than a narrower ingredient row because the sample set mixes many branded snack forms. It is not suitable for Cr-VI routing because chromium was measured and reported only as total Cr.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the title page, DOI, abstract, methods, Tables 1-2, discussion, and conclusions were readable.
- DOI verified from the first page as `10.4028/www.scientific.net/AMR.634-638.1581`; DOI, raw handle `MFK_solidum2013`, and cite-key checks found no existing source page before creation.
- Aggregate ranges and counts in Key numbers were checked against the abstract and discussion. Units are preserved as `ppm`; no conversion to mg/kg or ppb was performed.
- Speciation: chromium is total Cr. The source does not report Cr-VI.
- Brand firewall: the source tables and abstract name individual snack products, but this page reports only aggregate ranges and describes the high-Pb item as an imported snack sample without naming it.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [418e6eeab](https://github.com/paleofoundation/heavymetalindex/commit/418e6eeab) | 2026-06-08 | major | 4 sections added; narrative text revised |
<!-- END: hmi-page-history -->
