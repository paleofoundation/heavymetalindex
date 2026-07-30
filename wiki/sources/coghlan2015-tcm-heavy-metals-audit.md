---
type: source
raw_handle: AUTO_GAP-herbal-botanical-infusions-Cd
cite_key: coghlan2015-tcm-heavy-metals-audit
title: "Combined DNA, toxicological and heavy metal analyses provides an auditing toolkit to improve pharmacovigilance of traditional Chinese medicine (TCM)"
authors: [Coghlan ML, Maker G, Crighton E, Haile J, Murray DC, White NE, Byard RW, Bellgard MI, Mullaney I, Trengove R, Allcock RJN, Nash C, Hoban C, Jarrett K, Edwards R, Musgrave IF, Bunce M]
year: 2015
publication: "Scientific Reports 5:17475"
doi: 10.1038/srep17475
access_url: "https://www.nature.com/articles/srep17475.pdf"
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-herbal-botanical-infusions-cd_2015_10-1038-srep17475.pdf"
sha256: fe8b331ec177fb067e11288fdb609fac31a8c740f1b6d18b0ff31c1b8a154763
metals: [tAs, Pb, Cd]
ingredients: []
products: ["[[products/dietary-supplements]]"]
matrices: [traditional-chinese-medicine, herbal-remedy]
jurisdictions: [AU]
sample_n: 26
sample_population: "Twenty-six traditional Chinese medicine products audited in Australia; 25 screened for heavy metals by SF-ICP-MS because one aqueous sample could not be analyzed by the method."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-25
---

# Coghlan et al. 2015 - Heavy Metals in Traditional Chinese Medicine Products

Coghlan et al. combined DNA sequencing, toxicological screening, and heavy-metal screening to audit 26 traditional Chinese medicine products. The heavy-metal component screened 25 products for arsenic, lead, and cadmium by sector-field ICP-MS and compared estimated daily exposures from package dosage directions against Australian TGA medicine limits. The paper is direct finished-product evidence for dietary-supplement/herbal-remedy contamination, not for brewed herbal tea or botanical infusions.

## Key numbers

| Finding | Source-reported value |
| --- | --- |
| Products audited | 26 TCM products |
| Products screened for heavy metals | 25; one aqueous product could not be analyzed by SF-ICP-MS |
| Metals emphasized | Arsenic, lead, cadmium |
| Products with at least one of As/Pb/Cd | 20 of 25 screened products |
| Products with all three As/Pb/Cd | 11 products |
| Regulatory comparison | TGA daily intake limits for a 60 kg person: arsenic 1.2 ug/day, lead 2.2 ug/day, cadmium 0.22 ug/day |
| Highest qualitative flag | One non-listed TCM sample was marked "much greater than 10 times" the arsenic daily limit |
| Overall audit result | 92% of examined TCMs had some form of contamination and/or substitution across DNA, toxicology, and heavy-metal screening |

Table 3 reports heavy-metal results as exceedance bands rather than exact concentrations in the article body: `+` at or below two times the TGA limit, `++` greater than two times, `+++` greater than ten times, and `++++` much greater than ten times. The source states that raw SF-ICP-MS ppm results are in supplementary Table S4; those exact values were not present in the extracted article body.

## Methods (brief)

Powdered TCM samples (~0.3 g) were leached in 5 mL of ultrapure nitric acid (~70%, double distilled) for 24 hours at room temperature, then made up to 10 mL with ultrapure water, filtered through an acid-cleaned 0.2 µm PTFE membrane, and diluted 1:75 with 3% ultrapure HNO3. The authors flag that this "acid leachable" preparation does not determine total metal concentrations; it represents bioavailable metals released from the TCM samples in vitro, and reported values should be considered an underestimate of the total metal concentrations contained within each TCM.

Sixteen heavy metals were determined under ultra-trace clean conditions using sector-field ICP-MS (Thermo Fisher Scientific ELEMENT XR) at the Curtin University ultra-clean TRACE facility. Samples were mixed with an indium internal standard and introduced via an Elemental Scientific Seafast II autosampler enclosed in a metal-free hood. Instrumental and full procedural blanks (3% HNO3), replicates, and quality-control standards (High Purity Standards CWW-TM-A) were run throughout. Internal-standard-normalized ion intensities were quantified against matrix-matched external standards prepared by serial dilution from commercial primary standards; results were blank-subtracted and dilution-corrected. Heavy-metal non-compliance was evaluated against TGA threshold daily intake values for lead, cadmium, and arsenic using product dosage instructions for a 60 kg person.

## Implications

For the dietary-supplements product page, this source provides high-relevance evidence that traditional Chinese medicine products can contain arsenic, lead, and cadmium at levels exceeding medicine daily-intake limits. It should not be routed as brewed herbal infusion occurrence evidence unless a later source identifies the exact product form as an infusion. The article body supports qualitative and regulatory-exceedance claims; exact concentration extraction requires the supplementary Table S4 raw ppm data.

For brand-firewall purposes, the source's TCM sample numbers are sufficient. The wiki should not reproduce consumer product names from the audited medicines.

## Wiki pages this source may touch

- [[products/dietary-supplements]]
- [[metals/arsenic]]
- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

- Batch 1 auto-fetched ingest, 2026-05-25. The wishlist query targeted herbal/botanical infusions, but the actual PDF is a traditional Chinese medicine product audit. Ingested under the actual paper scope and routed to dietary supplements rather than tea/infusion product rows.
- Evidence fitness: direct finished-product supplement evidence, but the article body reports exceedance bands for Table 3. Exact concentration values are pending supplementary-table extraction.
- Digestion basis: SF-ICP-MS values are from a 24-hour cold nitric-acid leach, not a total digestion. The paper itself states the reported concentrations should be treated as underestimates of total metal content. Any downstream pooling must keep these values flagged as leachable/bioavailable, not pooled with total-digest occurrence data without basis-conversion notes.
- Brand firewall: TCM product identifiers are kept as numbered samples only.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [feb2f8563](https://github.com/paleofoundation/heavymetalindex/commit/feb2f8563) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [d1c9a1e86](https://github.com/paleofoundation/heavymetalindex/commit/d1c9a1e86) | 2026-05-25 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
