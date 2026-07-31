---
type: source
raw_handle: FM_4421773
cite_key: estimated2015-estimated-exposure-arsenic-breastfed
title: "Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort"
authors:
  - Carignan CC
  - Cottingham KL
  - Jackson BP
  - Farzan SF
  - Gandolfi AJ
  - Punshon T
  - Folt CL
  - Karagas MR
publication: Environmental Health Perspectives
year: 2015
doi: 10.1289/ehp.1408789
source_type: peer-reviewed
evidence_tier: A
metals:
  - iAs
ingredients:
  - breastmilk
  - infant-formula
matrices:
  - infant urine
  - breast milk
  - tap water
jurisdictions:
  - US
sample_n: 72
sample_population: "6-week-old infants from the New Hampshire Birth Cohort Study"
measurement_method: "ICP-MS with arsenic speciation via HPLC-ICP-MS"
status: populated
confidence: high
wiki_doi: null
sampling_locations: []
sampling_year_range: null
---

## Carignan et al. (2015)

Early-life arsenic exposure assessment in a birth cohort comparing infant feeding modes. Measured urinary and breast milk arsenic in 72 infants at 6 weeks of age, plus tap water from 874 maternal homes. Formula-fed infants had 7.5-fold higher urinary arsenic than breastfed infants; formula powder estimated as the primary dietary source.

## Key numbers

| Measurement | Median | Max | N |
|---|---|---|---|
| Infant urine As (all) | 0.17 μg/L | 2.9 μg/L | 72 |
| Breast milk As | 0.31 μg/L | 1.94 μg/L | 9 |
| Maternal tap water As | 0.44 μg/L | 4.2 μg/L | 874 |

**Feeding mode comparison:** Formula-fed infants: 0.32 μg/L median urinary As (range 0.02–1.49). Breastfed infants: 0.04 μg/L median urinary As (range <0.01–0.38). Difference: 8-fold median, β=2.02 (95% CI 1.21–2.83, p<0.0001).

**Exposure attribution:** Estimated median daily arsenic exposure in formula-fed infants approximately 70% attributable to formula powder (~0.13 μg/day), remainder to tap water (~0.06 μg/day). Breastfed infants received ~0.03 μg/day primarily via breast milk.

## Methods

Inductively coupled plasma mass spectrometry (ICP-MS) with collision cell for total arsenic quantification. Arsenic speciation (inorganic iAs vs dimethylarsinic acid DMA, monomethylarsonic acid MMA) performed via high-performance liquid chromatography (HPLC) coupled to ICP-MS. Infant exposure calculated from measured concentrations and typical intake volumes (formula reconstitution, breast milk volumes, tap water ingestion). Body weight normalization used for dose comparison.

## Implications

Formula powder represents a substantial arsenic exposure pathway for formula-fed infants in this US cohort, with urinary biomarkers indicating systemic absorption. The 7-fold difference between feeding modes was statistically robust and driven primarily by water-As in reconstituted formula rather than contaminants in the powder itself. Breastfeeding substantially reduces early-life arsenic exposure compared to formula-feeding when formula is reconstituted with As-contaminated tap water.

## Wiki pages updated

- [[ingredients/infant-formula]] → contamination_profile[iAs]
- [[ingredients/breast-milk]] → contamination_profile[iAs]
- [[metals/arsenic-inorganic]] → source references
- [[products/infant-formula-powder-non-soy]] → routing [direct_evidence]
- [[products/infant-rtf-non-soy]] → routing [broad_context]
```

---

**Git commit message:**

```
ingest: carignan2015-arsenic-breastfed-formula [peer-reviewed, A-tier]

Source: Estimated Exposure to Arsenic in Breastfed and Formula-Fed Infants in a United States Cohort

Raw handle: FM_4421773
Cite key: estimated2015-estimated-exposure-arsenic-breastfed

Cohort study (NHBCS): 72 infants at 6 weeks, iAs measured in urine, breast milk, maternal tap water. Formula-fed infants: 7.5× higher urinary As than breastfed (0.32 vs 0.04 μg/L, p<0.0001). ~70% of formula-fed exposure from formula powder. Breastfed exposure minimal (~0.03 μg/day).

Frontmatter: iAs metal, breast milk + infant formula ingredients, infant urine + breast milk + tap water matrices, US jurisdiction, 72 infants, A-tier peer-reviewed.

Body: summary, key numbers table, methods (ICP-MS + HPLC-ICP-MS speciation), implications, wiki pages updated.

Routing: infant-formula-powder-non-soy (direct), infant-rtf-non-soy (broad context), breast-milk (direct), arsenic-inorganic (reference).
```

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [5f7a7150d](https://github.com/paleofoundation/heavymetalindex/commit/5f7a7150d) | 2026-07-29 | major | Contamination-profile values revised; 6 sections added; narrative text revised |
| [43f4b5e53](https://github.com/paleofoundation/heavymetalindex/commit/43f4b5e53) | 2026-06-15 | correction | Contamination-profile values revised; 6 sections removed; narrative text revised |
| [c679df8af](https://github.com/paleofoundation/heavymetalindex/commit/c679df8af) | 2026-06-08 | minor | Narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [6fce7c634](https://github.com/paleofoundation/heavymetalindex/commit/6fce7c634) | 2026-05-20 | major | Contamination-profile values revised; 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
