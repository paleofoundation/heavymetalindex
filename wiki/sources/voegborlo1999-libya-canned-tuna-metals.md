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

Voegborlo and colleagues measured total mercury, cadmium, and lead in canned tuna fish from Misurata, Libya. Mercury was measured by cold-vapour atomic absorption spectrophotometry, while cadmium and lead were measured by flame atomic absorption spectrophotometry. Results are reported in `mg g-1 wet weight` in the extracted text layer, with mercury detected in 20 of 50 samples and cadmium and lead detected in 12 of 50 samples.

## Key numbers

Table 4 reports mean contents of mercury, cadmium, and lead in canned tuna samples:

| Metal | Samples with detections | Range, mg g-1 | Mean, mg g-1 | Standard deviation | Coefficient of variation, % |
| --- | ---: | ---: | ---: | ---: | ---: |
| tHg | 20 | 0.20-0.66 | 0.29 | 0.12 | 40.7 |
| Pb | 12 | 0.18-0.40 | 0.28 | 0.07 | 24.3 |
| Cd | 12 | 0.09-0.32 | 0.18 | 0.08 | 42.2 |

The discussion states that all but two mercury-detected samples were below the 0.5 mg g-1 FAO/WHO limit cited by the source; the two higher mercury values were 0.55 and 0.66 mg g-1. The abstract reports the same ranges and mean values for mercury, cadmium, and lead.

## Methods (brief)

Fifty canned tuna samples were obtained from a commercial tuna canning factory in Misurata, Libya. After opening each 5 kg can, oil was drained and the meat was homogenized in a food blender with stainless-steel cutters. Mercury digestion used 1 g homogenized sample with HCl, HNO3, and H2SO4 before cold-vapour AAS; lead and cadmium digestion used about 10 g sample with H2O2 and HNO3 before flame AAS. Mean spike recoveries were 97.2% for mercury, 99.8% for lead, and 99.3% for cadmium.

## Implications

This source contributes Libya/Mediterranean canned-tuna occurrence data for total mercury, cadmium, and lead. It is useful for canned-fish and predatory marine fish routing, but mercury should remain total-Hg context unless a later source provides methylmercury speciation or a documented conversion rule. The source does not report arsenic, methylmercury, inorganic mercury, or tin.

## Verification notes

- PDF text extracted with `pdftotext -layout`; the title page, abstract, methods, recovery tables, Table 4, and discussion were readable, though the text layer renders "fish" with a ligature artifact.
- The PDF prints PII `S0308-8146(98)00008-9`; DOI was derived as `10.1016/S0308-8146(98)00008-9`. DOI/PII, raw handle `MFK_voegborlo1999`, and cite-key checks found no existing source page before creation.
- All concentration values in Key numbers were checked against Table 4 and the abstract. Units are preserved as `mg g-1 wet weight` as rendered in the extracted text; no conversion to mg/kg or ppm was performed.
- Speciation: mercury is total mercury. The source discusses methylmercury historically but does not measure MeHg.
- Brand firewall: the source uses factory/canned-tuna sampling, not consumer brand rankings.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [bd0631b](https://github.com/paleofoundation/heavymetalindex/commit/bd0631b) | 2026-06-08 | ingest: voegborlo1999-libya-canned-tuna-metals fresh from MFK/June 8 New Folder With Items 3 2 |
<!-- END: hmi-page-history -->
