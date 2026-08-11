---
type: source
raw_handle: MFK_16-bandara-2020-protein-powder-heavy-metal-risk
cite_key: bandara2020-protein-powder-heavy-metals
title: "A human health risk assessment of heavy metal ingestion among consumers of protein powder supplements"
authors: [Bandara SB, Towle KM, Monnot AD]
year: 2020
publication: "Toxicology Reports"
doi: "10.1016/j.toxrep.2020.08.001"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
review_state: machine_extracted
claim_classes: [occurrence, exposure, public_wiki_claim]
license: "CC BY-NC-ND 4.0"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/peptide_contamination_pdfs/16_Bandara_2020_Protein_Powder_Heavy_Metal_Risk.pdf"
raw_sha256: "649dd06c4bd34162da50d842b87931707ee2cc95adfd43423b70c4e5286acd22"
access_url: "https://doi.org/10.1016/j.toxrep.2020.08.001"
access_date: 2026-06-08
metals: [tAs, Cd, Pb, tHg]
ingredients: ["[[ingredients/non-soy-protein-source]]"]
products: ["[[products/supplements-protein-collagen-powders]]"]
matrices: [protein-powder, whey-protein, weight-gainer]
jurisdictions: [US]
sample_n: 148
sample_population: "Risk assessment built on heavy-metal concentrations reported in two US third-party testing datasets: 15 protein powder products from the 2010 Consumer Reports analysis (whey and weight-gainer types) and 133 products from the 2018 Clean Label Project. As/Cd/Pb/Hg per-serving concentrations were used to model chronic daily intake, hazard quotients, a cumulative hazard index, and adult blood lead levels (EPA Adult Lead Methodology), assuming 1 or 3 servings/day for a 70 kg adult."
sampling_locations: ["United States"]
sampling_year_range: 2010-2018
updated: 2026-06-08
---

# Bandara et al. 2020 — Heavy metals in protein powder supplements (risk assessment)

## Summary

This peer-reviewed risk assessment characterizes arsenic, cadmium, lead, and mercury in protein powder supplements and models the resulting consumer exposure. The occurrence inputs are secondary — re-analyzed from two US third-party testing datasets (Consumer Reports 2010, n=15; Clean Label Project 2018, n=133), both reported here in anonymized form (sample type, not brand). For the Heavy Metal Index the load-bearing findings are that cadmium carries the highest mean per-serving concentration across the Clean Label Project products, that weight-gainer type powders run higher in arsenic and cadmium than whey-protein type powders, and that the authors' cumulative hazard index stays below 1 for essentially all products except a single high-cadmium outlier (13.18 µg/serving), where three daily servings push the hazard index above 1. All modeled blood lead levels stayed below the CDC 5 µg/dL guidance value. The authors attribute the metal burden to plant-derived and milk-whey ingredients, consistent with cadmium and arsenic tracking with plant and dairy inputs. The practical contribution is a category-level occurrence and exposure picture for protein/collagen powders, with cadmium as the analyte to watch and weight-gainers as the higher-burden sub-type.

## Key numbers

Concentrations are reported by the source as micrograms per serving (µg/serving), not per kilogram; serving sizes ranged ~20–79 g (powders) for the Consumer Reports set and were assumed at 43 g for the Clean Label Project set. Total metals; arsenic is total As (inorganic As reference dose used for the risk step).

Per-serving concentration ranges, Consumer Reports set (Table 1):

| Type | As (µg) | Cd (µg) | Pb (µg) | Hg (µg) |
| --- | --- | --- | --- | --- |
| Whey protein (n=11) | 0.40–1.80 | ND–1.30 | ND–1.63 | ND–0.37 |
| Weight gainer (n=4) | 3.73–5.63 | ND–1.87 | ND–4.50 | ND–0.23 |

Per-serving distribution, Clean Label Project set (n=133, Table 3):

| Metric | As (µg) | Cd (µg) | Pb (µg) | Hg (µg) |
| --- | --- | --- | --- | --- |
| Median | 0.55 | 1.44 | 0.08 | 0.61 |
| 95th pct | 2.17 | 6.84 | 0.21 | 2.26 |
| Max | 3.42 | 13.18 | 0.97 | 5.31 |

- Per-serving concentration order (Clean Label Project mean): Cd > Hg > As > Pb.
- Weight-gainer powders carried significantly higher As (and higher, non-significant, Cd and Pb) than whey powders.
- Cumulative hazard index < 1 for all products under 1 serving/day; the only HI > 1 scenario was the single 13.18 µg/serving cadmium product at 3 servings/day.
- Highest modeled blood lead level 2.24 µg/dL (1.50 µg/dL from the Clean Label Project set) — all below the CDC 5 µg/dL guidance.
- For context the authors cite USP 2012 elemental-impurity PDEs (As 15, Cd 5, Pb 10, Hg 15 µg/day); one Consumer Reports product's As intake (16.9 µg/day at 3 servings) exceeded the USP As PDE.

## Methods (brief)

Secondary risk assessment. Chronic daily intake = concentration × daily intake rate; hazard quotient = CDI / reference dose (US EPA RfDs for iAs, Cd, Hg); hazard index = sum of HQs; adult blood lead via the EPA Adult Lead Methodology (baseline BLL 1.27 µg/dL, 20% GI absorption). No new laboratory measurement; metal concentrations taken from Consumer Reports (2010) and Clean Label Project (2018) third-party testing.

## Implications

- Contributes a cadmium-led occurrence and exposure signal for [[products/supplements-protein-collagen-powders]], with weight-gainer powders as the higher-burden sub-type — useful for any future certification framing of this category.
- Reinforces [[metals/cadmium]] as the protein-powder analyte of concern and provides [[metals/arsenic]], [[metals/lead]], and [[metals/mercury]] per-serving context for the category.
- The plant-and-dairy-ingredient attribution links this back to the cadmium-in-cereals/plant pattern seen elsewhere in the corpus.

## Wiki pages this source may touch

- [[products/supplements-protein-collagen-powders]] — As/Cd/Pb/Hg per-serving distribution; weight-gainer vs whey split.
- [[metals/cadmium]] — highest mean per-serving metal; high-Cd outlier driving HI > 1.
- [[metals/arsenic]], [[metals/lead]], [[metals/mercury]] — category per-serving context.

## Verification notes

- Concentrations from Table 1 (Consumer Reports per-sample) and Table 3 (Clean Label Project distribution). The underlying products are anonymized by the authors (sample ID and type only), so no brand-by-brand data is reproduced and the Part 12 firewall is satisfied at the source.
- Occurrence is SECONDARY: the per-serving concentrations are re-analyzed from Consumer Reports and Clean Label Project third-party testing, not measured by the authors. Treat as B-quality occurrence input for pooling (down-weight versus primary ICP-MS surveys) even though the source journal is peer-reviewed (A-tier); the exposure/hazard modeling is the paper's primary contribution.
- Units are µg per serving, not µg/kg — serving sizes vary (and were assumed at 43 g for the Clean Label Project set), so per-mass concentration must be derived if needed and is not stated directly.
- Speciation: total As reported; inorganic-As RfD applied only in the hazard step. Total Hg reported.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 section added |
| [9d1697b0a](https://github.com/paleofoundation/heavymetalindex/commit/9d1697b0a) | 2026-06-08 | major | 6 sections added; narrative text revised |
<!-- END: hmi-page-history -->
