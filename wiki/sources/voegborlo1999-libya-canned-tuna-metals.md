---
type: source
raw_handle: MFK_voegborlo1999
cite_key: voegborlo1999-libya-canned-tuna-metals
title: "Mercury, cadmium and lead content of canned tuna fish"
authors: [Voegborlo R B, El-Methnani A M, Abedin M Z]
year: 1999
publication: "Food Chemistry"
doi: "10.1016/S0308-8146(98)00008-9"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/voegborlo1999.pdf"
raw_sha256: "1ac39dd80d9f6e5666c835728a2a20679467ecf64306cd55c3b00cbc57b9efc0"
access_url: "https://doi.org/10.1016/S0308-8146(98)00008-9"
metals: [tHg, Cd, Pb]
ingredients: ["[[ingredients/canned-tuna]]", "[[ingredients/tinned-fish]]", "[[ingredients/fish]]", "[[ingredients/seafood]]"]
products: ["[[products/canned-fish]]", "[[products/fish-marine-predatory]]"]
matrices: [canned-tuna, fish, wet-weight]
jurisdictions: [LY]
near_duplicates: []
sample_n: 50
sample_population: "Fifty 5 kg cans of tuna fish from the Tuna Canning Factory in Misurata, Libya; tuna were caught by commercial vessels from the Mediterranean coast of Libya and canned as chunks."
updated: 2026-06-08
---

# Voegborlo et al. 1999 — Mercury, cadmium, and lead in Libyan canned tuna

## Overview

Voegborlo and colleagues measured total mercury, cadmium, and lead in canned tuna fish from Misurata, Libya. Mercury was measured by cold-vapour atomic absorption spectrophotometry, while cadmium and lead were measured by flame atomic absorption spectrophotometry. Results are reported in µg g⁻¹ wet weight (equivalent to mg kg⁻¹ or ppm), with mercury detected in 20 of 50 samples and cadmium and lead detected in 12 of 50 samples.

## Key numbers

Table 4 reports mean contents of mercury, cadmium, and lead in canned tuna samples. Values are shown as published (µg g⁻¹ wet weight) with ppb wet-weight equivalents (1 µg g⁻¹ = 1000 ppb):

| Metal | Samples with detections | Range, µg g⁻¹ | Mean, µg g⁻¹ | SD, µg g⁻¹ | CV, % | Range, ppb | Mean, ppb |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| tHg | 20 | 0.20-0.66 | 0.29 | 0.12 | 40.7 | 200-660 | 290 |
| Pb | 12 | 0.18-0.40 | 0.28 | 0.07 | 24.3 | 180-400 | 280 |
| Cd | 12 | 0.09-0.32 | 0.18 | 0.08 | 42.2 | 90-320 | 180 |

The discussion states that all but two mercury-detected samples were below the 0.5 µg g⁻¹ (500 ppb) FAO/WHO 1972 limit cited by the source; the two higher mercury values were 0.55 and 0.66 µg g⁻¹ (550 and 660 ppb). The abstract reports the same ranges and mean values for mercury, cadmium, and lead.

## Methods (brief)

Fifty canned tuna samples were obtained from a commercial tuna canning factory in Misurata, Libya. After opening each 5 kg can, oil was drained and the meat was homogenized in a food blender with stainless-steel cutters. Mercury digestion used 1 g homogenized sample with HCl, HNO3, and H2SO4 before cold-vapour AAS; lead and cadmium digestion used about 10 g sample with H2O2 and HNO3 before flame AAS. Mean spike recoveries were 97.2% for mercury, 99.8% for lead, and 99.3% for cadmium.

## Implications

This source contributes Libya/Mediterranean canned-tuna occurrence data for total mercury, cadmium, and lead. It is useful for canned-fish and predatory marine fish routing, but mercury should remain total-Hg context unless a later source provides methylmercury speciation or a documented conversion rule. The source does not report arsenic, methylmercury, inorganic mercury, or tin.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the title page, abstract, methods, recovery tables, Table 4, and discussion were readable, though the text layer renders "fish" with a ligature artifact AND drops the Greek mu (µ) symbol in unit headers — pdftotext renders "µg g⁻¹" as "mg g⁻¹" or "g g⁻¹". The published typeset PDF unambiguously prints µg g⁻¹ throughout (abstract p.341, results p.343, discussion p.344, Tables 1-4). All concentration units on this page are µg g⁻¹ wet weight (= mg kg⁻¹ = ppm); ppb conversions are shown alongside.
- The PDF prints PII `S0308-8146(98)00008-9`; DOI was derived as `10.1016/S0308-8146(98)00008-9`. DOI/PII, raw handle `MFK_voegborlo1999`, and cite-key checks found no existing source page before creation.
- All concentration values in Key numbers were checked against Table 4 and the abstract (typeset PDF, not pdftotext text layer).
- Speciation: mercury is total mercury. The source discusses methylmercury historically but does not measure MeHg.
- Brand firewall: the source uses factory/canned-tuna sampling at the Misurata canning factory, not consumer brand rankings.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.
- 2026-06-09 audit applied: corrected 1000× unit error (mg g⁻¹ → µg g⁻¹) in body prose, Key numbers table, and FAO/WHO limit reference. Numeric values themselves were correct; only the unit attribution was wrong because the ingest session trusted the pdftotext text layer rather than the typeset units.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [68afd7ce1](https://github.com/paleofoundation/heavymetalindex/commit/68afd7ce1) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
