---
type: source
raw_handle: MFK_determination-of-heavy-metals-in-a-variety-of-cann
cite_key: nelson2022-cannabis-heavy-metals-method
title: "Determination of Heavy Metals in a Variety of Cannabis and Cannabis-Derived Products, First Action 2021.03"
authors: [Nelson J, Jones C, Heckle S, Anderson L]
year: 2022
publication: "Journal of AOAC INTERNATIONAL"
doi: 10.1093/jaoacint/qsab173
access_url: https://doi.org/10.1093/jaoacint/qsab173
source_type: peer-reviewed
evidence_tier: B
license: "All rights reserved"
raw_path: "raw/Manual Fetch Kimi /June 9/Determination-of-Heavy-Metals-in-a-Variety-of-Cannabis-and-Cannabis-Derived-Products-First.pdf"
metals: [tAs, Cd, tHg, Pb]
ingredients: ["[[ingredients/herbal-botanicals]]"]
products: ["[[products/supplements-botanicals-herbs]]", "[[products/dietary-supplements]]", "[[products/body-hand-leave-on-skin-care]]"]
matrices: [herbal-product, hemp, cannabis-derived-product, dietary-supplement, topical-cream]
jurisdictions: [US, CA]
near_duplicates: []
sample_n: 4
sample_population: "Four cannabis/cannabis-derived validation matrices with native As, Cd, Hg, and Pb values in Table 5: flower (inhaled), hemp butter (oral), pain relief cream (topical), and CBD crude extract (manufacturing). Broader cannabis and hemp sample list is described as data available upon request."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-09
---

# Nelson et al. 2022 - AOAC cannabis heavy-metals method validation

Nelson et al. (2022) report AOAC Official Method 2021.03 for total arsenic, cadmium, total mercury, and lead in cannabis and cannabis-derived products after microwave-assisted acid digestion and ICP-MS. The paper is primarily a single-laboratory method-validation study, but Table 5 includes native concentration values for four validation matrices: flower, hemp butter, pain relief cream, and CBD crude extract. These values are limited occurrence context and should not be treated as a market-prevalence survey.

## Key numbers

Table 5 reports native levels in `ppb, µg/kg` for four cannabis/cannabis-derived matrices. The table labels arsenic, cadmium, mercury, and lead as As, Cd, Hg, and Pb; arsenic and mercury are not speciated, so this page records them as tAs and tHg.

| Matrix | Route/context | tAs | Cd | tHg | Pb |
| --- | --- | ---: | ---: | ---: | ---: |
| Flower | Inhaled | 91.247 | 209.214 | 16.875 | 305.946 |
| Hemp butter | Oral | 0.481 | 0.157 | <LOQ | 3.726 |
| Pain relief cream | Topical | 11.804 | 2.256 | 6.864 | 12.442 |
| CBD crude extract | Manufacturing | 3.147 | 1.105 | 5.757 | 188.103 |

Table 2021.03H gives method LOQs, also in `ppb, µg/kg`, as As `9.171`, Cd `6.247`, Hg `2.155`, and Pb `7.849`. The paper reports that spike recoveries for As, Cd, Hg, and Pb met AOAC SMPR 2020.001 recovery criteria across the four cannabis matrices at low, medium, and high spike levels.

The broader sample list in Table 2021.03G includes hemp flower, CBD vape oil, hemp isolate extract, full spectrum softgel capsules, full spectrum tincture, isolate tincture, CBD coffee grounds, hemp butter, hemp seed oil, CBD beef jerky, CBD hard candy, CBD pineapple drink, CBD balm, CBD topical oil, hemp biomass, spent hemp biomass, CBD crude extract, CBD distillate, and CBD isolate, but the paper says those data are available upon request rather than publishing all native concentration rows.

## Methods (brief)

Samples were homogenized where needed, digested by closed-vessel microwave digestion using a typical `0.5 g` sample portion with `9 mL HNO3` and `1 mL HCl`, diluted to `50 g`, and analyzed by single-quadrupole ICP-MS. The method used helium collision mode/kinetic energy discrimination, ultra-high matrix introduction aerosol dilution, internal standards, calibration verification, continuing calibration blanks, and plant-based NIST SRMs. The paper validates total As, Cd, Hg, and Pb for dried plant materials, concentrates, oils, extracts, tinctures, and other cannabis-related products.

## Implications

The native values in Table 5 provide bounded occurrence context for cannabis-derived oral, inhaled, topical, and manufacturing matrices, while the main contribution of the paper is analytical: AOAC First Action validation of microwave digestion plus ICP-MS for cannabis heavy-metals testing. Product routing should preserve the matrix split. Hemp butter, flower, topical cream, and CBD crude extract should not be pooled as one finished-product distribution.

## Wiki pages this source may touch

- [[ingredients/herbal-botanicals]]
- [[products/supplements-botanicals-herbs]]
- [[products/dietary-supplements]]
- [[products/body-hand-leave-on-skin-care]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/mercury]]
- [[metals/lead]]

## Verification notes

- Identity checks before writing found no existing DOI, raw-handle, or cite-key page for `10.1093/jaoacint/qsab173`, `MFK_determination-of-heavy-metals-in-a-variety-of-cann`, or `nelson2022-cannabis-heavy-metals-method`.
- Source scope: method-validation study, not a market survey. Table 5 native-level values are the only published occurrence numbers for actual cannabis/cannabis-derived matrices; broader sample data are explicitly described as "available upon request."
- Speciation: As and Hg are total/unspecified in the paper; no iAs or MeHg values were inferred.
- Units preserved: native values and LOQs remain in `ppb, µg/kg`; no conversions were performed.
- Jurisdictions record the method-regulatory scope the paper states: U.S. state cannabis testing programs and Canadian cannabis laws. The paper does not report purchase or production jurisdictions for the validation samples, so these codes should not be read as sample-provenance claims.
- Missing slug note: the taxonomy snapshot has no `hemp`, `cannabis`, `CBD`, or `cannabis-derived-products` ingredient/product slug. Frontmatter uses the existing broad `[[ingredients/herbal-botanicals]]`, `[[products/supplements-botanicals-herbs]]`, `[[products/dietary-supplements]]`, and `[[products/body-hand-leave-on-skin-care]]` slugs instead of inventing cannabis-specific pages.
- Brand firewall: sample labels are generic matrix descriptors. Instrument/vendor names in Methods are scientific reproducibility details, not product-brand contamination claims.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [f3c71fe11](https://github.com/paleofoundation/heavymetalindex/commit/f3c71fe11) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
