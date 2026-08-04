---
type: source
raw_handle: MFK_13-jairoun-2020-uae-supplements-heavy-metals
cite_key: jairoun2020-uae-dietary-supplements-heavy-metals
title: "Heavy Metal contamination of Dietary Supplements products available in the UAE markets and the associated risk"
authors: [Jairoun AA, Shahwan M, Zyoud SH]
year: 2020
publication: "Scientific Reports"
doi: "10.1038/s41598-020-76000-w"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
review_state: machine_extracted
claim_classes: [occurrence, exposure, public_wiki_claim]
license: "CC BY 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/peptide_contamination_pdfs/13_Jairoun_2020_UAE_Supplements_Heavy_Metals.pdf"
raw_sha256: "866ba316061ac418ab96dec3763570d48c08e1ccf2e8e5ae9f7c78232933ffde"
access_url: "https://doi.org/10.1038/s41598-020-76000-w"
access_date: 2026-06-08
metals: [Cd, Pb, tAs]
ingredients: []
products: ["[[products/dietary-supplements]]", "[[products/supplements-botanicals-herbs]]"]
matrices: [dietary-supplement, herbal-supplement, vitamin-mineral-supplement]
jurisdictions: [AE]
sample_n: 277
sample_population: "277 dietary supplement products collected by random selection from the UAE market (pharmacies, para-pharmacies, nutrition shops). Categories: 43.7% herbal/botanical, plus vitamin, mineral, and combination products; dosage forms mostly capsules (56.7%) and tablets (25.6%); country of origin USA 60.6%, EU 17.3%, Canada 10.1%, India 9.0%, Australia 2.9%. Cd, Pb, and As measured by ICP-MS (Agilent 7700X, microwave acid digestion, He collision cell); per-product concentration combined with the manufacturer's advised daily adult dose to estimate daily metal intake."
sampling_locations: ["United Arab Emirates (market)"]
sampling_year_range: 2020
updated: 2026-06-09
---

# Jairoun et al. 2020 — Heavy metals in UAE dietary supplements

## Summary

This is a large primary occurrence-and-exposure survey of toxic metals in dietary supplements, a product category the HMTc program covers. The authors measured cadmium, lead, and arsenic by ICP-MS in 277 supplement products sampled from the United Arab Emirates market and combined each product's metal concentration with its labelled daily dose to estimate daily metal intake against acceptable-daily-intake (ADI) reference values. The headline finding is reassuring on average but informative on structure: mean daily intakes were well below ADI for all three metals (Cd 0.73 of 6 µg, Pb 0.85 of 20 µg, As 0.67 of 10 µg), yet 3 of 277 products (1.1%) individually exceeded an ADI (two for cadmium, one for lead). The contamination-determinant structure is the paper's distinctive contribution: cadmium and arsenic intake rose significantly with herbal/probiotic/enzyme/fatty-acid formulations and with powder/liquid and soft-gel dosage forms, while lead was significantly higher in India-manufactured products. The authors conclude that formulation category, dosage form, and country of origin are strong determinants of supplement metal contamination.

## Key numbers

Values are estimated daily metal intake (µg/day) = product concentration (µg/g) × labelled daily dose, by ICP-MS. ADI as cited by the authors (American Herbal Products Association guidance). Arsenic is total As (no speciation).

| Metal | Mean intake (µg/day) | 95% CI | Median | ADI (µg/day) | Products over ADI |
| --- | --- | --- | --- | --- | --- |
| Cd | 0.73 | 0.61–0.85 | 0.47 | 6 | 2 of 277 |
| Pb | 0.85 | 0.62–1.07 | 0.52 | 20 | 1 of 277 |
| As (tAs) | 0.67 | 0.57–0.78 | 0.49 | 10 | 0 of 277 |

- Overall 3 of 277 products (1.1%, 95% CI −0.14 to 2.3) exceeded an ADI for Cd, Pb, and/or As.
- Cadmium intake rose significantly (p < 0.001) with herbs+probiotics+enzymes+fatty-acid formulations (β = 0.876) and herbs+vitamins+minerals+fatty-acids+enzymes (β = 0.725); and with powder/liquid and soft-gel forms (p = 0.030).
- Lead intake was significantly higher in India-made products (multivariate β = 1.599, p < 0.001) and lower in capsule form (β = −0.75, p = 0.002).
- Arsenic intake rose with powder/liquid form (β = 1.65, p < 0.001), soft-gel form (β = 0.52, p = 0.003), and herbal/probiotic/enzyme/fatty-acid blends (β = 0.53, p = 0.005).
- LOQ 50 µg/g (Pb, As), 10 µg/g (Cd); validated spike recovery 80–120%, RSD < 20%.

## Methods (brief)

ICP-MS (Agilent 7700X) with He collision/reaction cell after CEM MARS-5 microwave acid digestion (HNO₃ + H₂O₂ + HCl). Random-selection sampling of 277 orally-taken supplements across UAE outlets. Per-product concentration converted to daily intake via labelled adult dose; means/medians compared to ADI; univariate and multivariate linear regression for contamination determinants (formulation category, dosage form, country of origin). QC: reagent blanks, matrix spikes every 15 samples, calibration verification every 10–15 samples.

## Implications

- Primary, large-n (277) occurrence/exposure dataset for [[products/dietary-supplements]] and [[products/supplements-botanicals-herbs]], anchoring Cd/Pb/As daily-intake distributions and the formulation/dosage-form/origin determinants.
- Identifies formulation (herbal/probiotic/enzyme/fatty-acid blends), dosage form (powder/liquid and soft-gel), and country of origin (India for Pb) as covariates significantly associated with metal intake from supplements in this sample.
- Contributes [[metals/cadmium]], [[metals/lead]], and [[metals/arsenic]] occurrence in supplements with a quantified low-exceedance rate (1.1%).

## Wiki pages this source may touch

- [[products/dietary-supplements]] and [[products/supplements-botanicals-herbs]] — Cd/Pb/As daily-intake distribution and contamination determinants.
- [[metals/cadmium]] — herbal/probiotic formulation and soft-gel/powder association.
- [[metals/lead]] — India-origin association.
- [[metals/arsenic]] — powder/liquid and soft-gel association.

## Verification notes

- Values from Table 2 (overall daily intake) and Tables 3–6 (determinant regressions). Table 2's header label "µg/g" conflicts with the body text and ADI comparison, which are in µg/day intake; the abstract and Results consistently state µg/day, so daily intake (µg/day) is recorded here and the "µg/g" header is treated as a typographical error.
- Reported metric is daily intake (concentration × labelled dose), not raw µg/g concentration, so this is occurrence expressed through an exposure lens; underlying per-product µg/g concentrations are not separately tabulated.
- No brand-by-brand data: results are aggregated by formulation category, dosage form, and country of origin; the Part 12 firewall is satisfied at the source.
- Speciation: total As by ICP-MS; no inorganic-As fraction reported.
- Matrices vocabulary: `dietary-supplement` is in the common-matrices list in `docs/gpt-collaboration/system-prompt.md`; `herbal-supplement` and `vitamin-mineral-supplement` are added as broader-than-product matrix descriptors that follow the same naming convention but are not yet in the common-matrices list. Surfacing for next matrices-vocabulary refresh.
- Audit subagent (2026-06-09) ran the five-check audit against the PDF; verdict REVISE; applied corrections: (a) Check 1 — moved the p<0.001 parenthetical off the herbs+probiotics clause and onto the powder/liquid clause in the As multivariate (Table 6 powder/liquid is p<0.001, soft-gel is p=0.003, herbs+probiotics is p=0.005); (b) Check 2 — added matrices-vocabulary flag above; (c) Check 5 — softened "directly actionable pattern for category screening" (Summary) and "concrete screening levers for any future certification" (Implications) toward literature-fidelity framing per Part 2 wiki/HMTc firewall.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [04500c164](https://github.com/paleofoundation/heavymetalindex/commit/04500c164) | 2026-06-09 | minor | Narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
