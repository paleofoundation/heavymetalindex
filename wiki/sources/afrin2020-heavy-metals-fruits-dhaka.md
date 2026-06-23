---
type: source
raw_handle: manual-fetch-kimi
cite_key: afrin2020-heavy-metals-fruits-dhaka
title: "Determination and Risk Analysis of Heavy Metals in Different Fruits Collected from Different Shops of Dhaka City"
authors: [Afrin S]
year: 2020
publication: "M.S. Thesis, Sher-e-Bangla Agricultural University, Dhaka"
doi: null
no_doi_assigned: true
source_type: peer-reviewed
evidence_tier: B
license: "unknown"
raw_path: "raw/Manual Fetch Kimi /01_Fruits_and_Fruit_Products/01_Fruits_and_Fruit_Products/Determination and risk analysis of heavy metals in different fruits collected from different shops of Dhaka city.pdf"
metals: [Pb, Cd, Cr, Ni, Co]
ingredients: ["[[ingredients/grapes]]", "[[ingredients/apple]]", "[[ingredients/oranges]]", "[[ingredients/banana]]"]
products: ["[[products/fresh-fruit]]"]
matrices: [fresh-fruit]
jurisdictions: [BD]
near_duplicates: []
sample_n: 75
sample_population: "Grape, apple, orange, banana, and pomegranate purchased from 5 retail shops/markets in Dhaka city, Bangladesh, 2018–2019; 25 treatment-shop combinations with 3 replications each"
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-05-19
---

# Afrin 2020 — Heavy metals in retail fruits from Dhaka city, Bangladesh

Five fruit types (grape, apple, orange, banana, pomegranate) were collected from five retail outlets in Dhaka and analyzed for Pb, Cd, Cr, Ni, and Co by AAS. All measured concentrations were below FAO/WHO maximum allowable concentrations: Pb <1.50 mg/kg, Cd <0.20 mg/kg, Cr <2.30 mg/kg, Ni <0.80 mg/kg, Co <50 mg/kg. Pb varied most strongly by outlet/fruit combination, with banana samples from two markets approaching but not exceeding the FAO/WHO Pb limit (1.31 and 1.24 mg/kg vs. a 1.50 mg/kg ceiling). Risk indices (single-factor pollution index, sum of pollution index, metal pollution index) all indicated the fruits posed no contamination risk under FAO/WHO reference values at the time of sampling.

## Key numbers

Concentrations in mg/kg fresh weight (all 25 fruit × site treatments combined, observed ranges):

| Metal | Range across all fruits/sites | FAO/WHO MAC |
|-------|-------------------------------|------------|
| Pb | 0.02–1.31 mg/kg | 1.50 mg/kg |
| Cd | 0.001–0.011 mg/kg | 0.20 mg/kg |
| Cr | 0.001–0.006 mg/kg | 2.30 mg/kg |
| Ni | 0.001–0.016 mg/kg | 0.80 mg/kg |
| Co | 0.001–0.004 mg/kg | 50.00 mg/kg |

Highest measured Pb concentrations were both in banana: 1.31 mg/kg at Kawran Bazar fruit market and 1.24 mg/kg at Meena Bazar (Shyamoli). Highest single-factor pollution index (PI = C_fruit / C_FAO-WHO) was Pb in T19 banana at Kawran Bazar (PI ≈ 0.87 = 1.31 / 1.50). Highest sum-of-pollution-index (SPI, summed across all five metals) was 0.9001 in the same banana sample, followed by 0.8726 in T24 banana at Meena Bazar. Lowest SPI was 0.028 in T8 orange at Agora super market (Dhanmondi). All PI and SPI values remained below 1.0, which the thesis interprets as no contamination under FAO/WHO reference values.

Note: Cr is measured as total chromium; speciation into Cr-VI vs. Cr-III was not performed.

## Methods (brief)

Atomic absorption spectrophotometer (Chemito Technologies AA-203, slit width 0.5 nm; hollow-cathode lamps selected per element); HNO₃/H₂O₂ wet digestion of dried, ground fruit at 95–125°C; method validation by spike recovery at 1.0, 1.5, and 2.0 ppm; results reported on a dry-weight basis. (The thesis §3.5.2 names the AA-203 as the instrument used for sample readings; §3.6 separately references an "AA-7000" model for validation. The operative reading instrument is the AA-203.) Samples were sun-dried (7 days) then oven-dried (45°C/24 h then 30°C/24 h) and manually powdered prior to digestion. Standards (Pb, Cd, Cr, Ni, Co) sourced from Merck (Darmstadt). Experiment laid out in Completely Randomized Design with 3 replications; ANOVA via MSTAT-C with Duncan's Multiple Range Test for mean separation. Sample prep at Sher-e-Bangla Agricultural University; final AAS readings at BARI Soil Science Division, Gazipur. This is an M.S. thesis under Dr. Md. Sirajul Islam Khan (evidence tier B: not journal peer-reviewed).

## Implications

**Certification:** Pb and Cd concentrations in Dhaka retail fruits were well below FAO/WHO MACs; however, FAO/WHO limits are substantially more permissive than EU Regulation 1881/2006 limits (e.g., EU Pb limit for fruits is 0.10 mg/kg, not 1.50 mg/kg). Under EU limits, at least some Pb values from certain sites would warrant closer scrutiny.

**Courses:** Useful case study of a multi-fruit, multi-site survey in a South/Southeast Asian urban retail context; illustrates the importance of comparing against the applicable regulatory standard (FAO/WHO vs. EU limits give different compliance conclusions).

**App:** Low-level contamination profile for common retail fruits in Bangladesh. Confidence: low (M.S. thesis, single season, limited n per fruit per site).

## Wiki pages this source may touch

- [[metals/lead]]
- [[metals/cadmium]]
- [[metals/chromium]]
- [[metals/nickel]]
- [[metals/cobalt]]
- [[ingredients/grapes]]
- [[ingredients/apple]]
- [[ingredients/oranges]]
- [[ingredients/banana]]

## Verification notes

- Cross-vendor strict Part 12 recheck 2026-05-17 found no sampled-product brand naming. Corrected stale PDF path, added measured Co, corrected fruit ingredient slugs, and fixed Key-number ranges/highest Pb/SPI against the thesis abstract and Chapter 4 result tables.
- 2026-05-19 merge-enhance pass against full PDF (pages 33–59): disambiguated single-factor PI (≈0.87 for Pb T19 banana) from SPI (0.9001 for T19; 0.8726 for T24 banana at Meena Bazar), added the 0.028 minimum SPI (T8 orange at Agora), expanded Methods with the specific AAS instrument (Chemito AA-203), digestion protocol (HNO₃/H₂O₂, 95–125°C), drying schedule, ANOVA/DMRT statistical workflow, and the BARI/SAU lab split. Brand-firewall (Part 12) re-checked: the named "shops" (Shwapno, Agora, Prince Bazar, Kawran Bazar, Meena Bazar) are retail sampling locations in Dhaka, not brand owners of the loose-commodity fruit, so site naming remains in scope for synthesis routing.
- Fresh-context audit subagent (2026-05-19) flagged a ⚠️ concern that the source itself is internally inconsistent on AAS model — §3.5.2 reports the Chemito AA-203 used for sample readings, while §3.6 mentions an "AA-7000" for validation. Verified against the PDF; AA-203 is the operative reading instrument. Added a one-line clarifying parenthetical to Methods so a reader cross-checking against the thesis does not stumble. Verdict: PROMOTE; 1 ⚠️ applied, 0 ❌ findings.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c6671](https://github.com/paleofoundation/heavymetalindex/commit/8707c6671) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84efb](https://github.com/paleofoundation/heavymetalindex/commit/140e84efb) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8a2](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8a2) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
<!-- END: hmi-page-history -->
