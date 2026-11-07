---
type: source
raw_handle: PMC11614607
cite_key: inoue-2024-rice-nramp5-cadmium
title: "Engineering rice Nramp5 modifies cadmium and manganese uptake selectivity using yeast assay system"
authors: [Inoue J, Teramoto T, Kazama T, Nakamura T]
year: 2024
publication: "Frontiers in Plant Science"
doi: 10.3389/fpls.2024.1482099
source_type: peer-reviewed
evidence_tier: A
evidence_fitness:
  supports: [mechanistic-context-cadmium-rice-uptake, cultivar-mitigation-background, transporter-biology-review]
  does_not_support: [grain-occurrence-values, dietary-exposure-estimates, population-contamination-profile, certification-limits]
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: [literature_finding]
raw_path: raw/studies/FM_11614607_Engineering_rice_Nramp5_modifies_cadmium_and_manganese_uptak.pdf
sha256: df58277da14d34617f200b8f9cc59006e8cd0b5c01655bb67f6bc9a547672fb1
access_date: 2026-04-25
access_url: https://doi.org/10.3389/fpls.2024.1482099
license: public-redistribute
metals: [Cd]
ingredients: ["[[ingredients/rice]]"]
products: []
matrices: [rice-root, yeast-assay]
jurisdictions: [international]
sample_n: null
sample_population: "Yeast transformants expressing OsNramp5 wild-type or 33 single- and double-amino-acid-substitution mutants; no grain or food samples"
near_duplicates: []
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-11-07
---

# Inoue et al. 2024: Engineering rice Nramp5 to modify cadmium and manganese uptake selectivity

Inoue, Teramoto, Kazama, and Nakamura (Faculty of Agriculture, Kyushu University) report a protein-engineering study of OsNramp5, the natural resistance-associated macrophage protein 5 transporter in rice (*Oryza sativa*) that is primarily responsible for root uptake of both manganese (an essential micronutrient) and cadmium (a toxic contaminant). The paper describes systematic amino acid substitutions at two key residues in the transmembrane metal-binding domain of OsNramp5, with the aim of identifying variants that retain efficient manganese transport while substantially reducing cadmium uptake. Metal uptake was measured in a yeast heterologous expression system (a standard proxy for transporter function) and confirmed by direct inductively coupled plasma optical emission spectrometry (ICP-OES) measurement of metal content in yeast cells. The study is a contribution to low-cadmium rice cultivar development through targeted protein engineering rather than a food-occurrence or dietary-exposure study; it provides no grain cadmium concentration data for contamination-profile purposes.

## Background and study design

Cadmium enters the rice grain primarily through root uptake from paddy soil and translocation to the grain. OsNramp5 (also written OsNRAMP5) is encoded on chromosome 7 and has been identified by genomic analysis and knockout studies as the principal transporter governing Cd and Mn uptake from soil at the rice root (Ishimaru et al. 2012; Sasaki et al. 2012, cited in paper). Because OsNramp5 also transports Mn, knockout of the gene impairs plant growth through Mn deficiency. The goal of this study was therefore to engineer OsNramp5 selectively so that Cd transport is reduced while Mn transport is preserved.

Structural analyses of bacterial Nramp homologs had identified 12 putative metal-binding and transport-critical residues designated positions 1 through 12. The authors focused on residue 11 (the 235th Met in OsNramp5, located in transmembrane domain 6) and residue 8 (the 232nd Ala, located in transmembrane domain 1). Transmembrane domain 6 (TM6) residues at positions 8 and 11 were proposed to be involved in metal selectivity.

The experimental workflow comprised three steps:

1. The 235th Met residue was individually substituted with each of the other 19 canonical amino acids (mutants designated M235X), and all 19 substitution proteins were expressed in Cd-sensitive yeast (*Ayc f1*; Y04069) to estimate Cd uptake efficiency by growth inhibition assay at concentrations from 0 to 81.8 micromolar CdSO4. IC50 values were calculated and relative Cd uptake efficiency was expressed relative to wild-type OsNramp5 (WT = 100%).
2. Mn uptake was measured by equivalent assay in Mn-sensitive yeast (*Apmr1*; Y04534) at 0 to 1.5 mM MnSO4.
3. The two most promising single mutants (M235A and M235C) were combined with seven substitutions at the 232nd Ala residue to generate eight double mutants; their Cd and Mn uptake efficiencies were assessed in both yeast assays.
4. For five selected mutants (M235A, M235C, A232C+M235A, A232S+M235A, A232S+M235C), Cd and Mn content in yeast cells was measured directly by ICP-OES after culturing at 20 micromolar Cd, Mn, Fe, Cu, Zn, and Co. This provided an independent confirmation of the yeast growth assay results.
5. Cd-dependent dose-response analysis was conducted at 0, 2.5, and 7.5 micromolar CdSO4 with 1.8 mM MnSO4 added to mimic conditions in heavily polluted paddy soil (the paper cites 51.9 mg/kg Mn as the soil concentration at which brown spot disease of OsNramp5 knockout plants was observed; Honma et al. 2017).
6. AlphaFold2 and MMseqs2 were used to predict 3D structures of OsNramp5 and the mutants; CAVER Analyst 2.0 characterised the predicted metal transport tunnels; PyKVFinder and pyMOL visualised cavities and hydropathy.

Three biological replicates (independent yeast transformants) were used throughout; statistical evaluation used Dunnett's test, with ** indicating p less than 0.01.

## Key numbers

### Single-mutation screen at residue 235 (Table 1 in paper)

All 19 M235X mutants showed Cd uptake efficiency below 20% of WT. The two substitutions with the highest Mn/Cd selectivity ratio were:

| Mutant | Mn/Cd ratio | Relative Cd uptake (%) | SD | Relative Mn uptake (%) | SD |
|---|---|---:|---:|---:|---:|
| M235A | 11.3 | 7.8 | 0.5 | 88.5 | 12.4 |
| M235C | 7.5 | 8.6 | 0.8 | 65.0 | 30.4 |
| WT reference | 1.0 | 100.0 | 0.0 | 100.0 | 0.0 |
| Q337K (prior mutant) | 1.0 | 36.0 | 11.9 | 37.2 | 16.8 |
| A512T (prior mutant) | 0.9 | 53.9 | 5.5 | 46.3 | 17.8 |

N = 3 for all; p less than 0.01 vs WT for all M235X mutants by Dunnett's test.

### Double-mutation screen at residues 232 and 235 (Table 2 in paper)

Eight double mutants were tested. Three showed Mn/Cd ratios exceeding those of the single mutants:

| Mutant | Mn/Cd ratio | Relative Cd uptake (%) | SD | Relative Mn uptake (%) | SD |
|---|---|---:|---:|---:|---:|
| A232S+M235A | 17.0 | 5.7 | 1.7 | 96.4 | 4.6 |
| A232S+M235C | 13.6 | 4.7 | 0.4 | 64.1 | 12.4 |
| A232C+M235A | 12.8 | 5.5 | 1.5 | 69.8 | 12.5 |

A232S+M235A had the highest Mn/Cd ratio in the yeast assay (17.0) with Mn uptake preserved at 96.4% of WT.

### ICP-OES direct measurement (Table 3 in paper)

Cd and Mn content (ng/mg dry yeast mass) confirmed the yeast-growth assay ranking:

| Construct | Mn/Cd ratio | Relative Cd uptake (%) | Cd mean (ng/mg) | SD | Relative Mn uptake (%) | Mn mean (ng/mg) | SD |
|---|---|---:|---:|---:|---:|---:|---:|
| WT | 1.0 | 100.0 | 129.9 | 10.0 | 100.0 | 17.0 | 2.4 |
| A512T | 0.5 | 90.4 | 118.9 | 19.6 | 48.7 | 12.2 | 1.5 |
| M235A | 3.5 | 17.2 | 35.3 | 3.5 | 60.2 | 13.2 | 1.2 |
| M235C | 5.0 | 10.9 | 28.0 | 3.3 | 54.8 | 12.7 | 1.0 |
| A232C+M235A | 7.4 | 13.9 | 31.4 | 4.9 | 103.3 | 17.3 | 0.7 |
| A232S+M235A | 3.7 | 22.3 | 41.0 | 5.0 | 82.8 | 15.4 | 0.8 |
| A232S+M235C | 4.6 | 13.5 | 31.0 | 7.1 | 62.5 | 13.5 | 2.1 |

By ICP-OES, the best Mn/Cd ratio was achieved by A232C+M235A (ratio 7.4), with Cd reduced to 13.9% of WT and Mn retained at 103.3%. The yeast-assay and ICP-OES rankings correlated with r = 0.95 (p less than 0.01) for Cd and r = 0.85 (p less than 0.01) for Mn (Supplementary Figure 3 cited in paper).

### Dose-response under conditions mimicking polluted soil (Table 4 and Figure 4 in paper)

At 2.5 and 7.5 micromolar CdSO4 with 1.8 mM MnSO4, the three priority mutants (M235A, A232C+M235A, A232S+M235A) maintained Cd uptake at background level (less than 0% relative uptake by ICP-OES basis) while Mn uptake remained at 60% to 103% of WT. The paper cites a soil Mn concentration of 1.8 mM (98.9 mg/kg) in the assay medium as modelling heavily polluted conditions (after Honma et al. 2017).

### Structural analysis summary

Computational modeling with AlphaFold2 predicted that high Mn uptake efficiency (greater than 60% of WT) correlates with three tunnel structural properties: tunnel length between 10.88 and 13.61 angstroms, minimum tunnel radius between 1.24 and 1.46 angstroms, and hydropathy around the metal-binding site between -0.30 and -0.03 (Figure 5A in paper). Of 34 constructs (WT plus 33 mutants), only 6 passed all three filters: WT, M235A, M235C, A232C+M235A, A232S+M235A, A232S+M235C. This matches the experimental results.

## Methods (brief)

**Yeast expression system.** The WT yeast strain BY4741 and two metal-sensitive deletion strains (Cd-sensitive *Ayc f1* Y04069; Mn-sensitive *Apmr1* Y04534) were obtained from EUROSCARF (Oberursel, Germany). OsNramp5 coding sequence was chemically synthesised (Geneart, Thermo Fisher Scientific) and cloned into pDR195 expression plasmid. Site-directed mutagenesis used PrimeSTAR Max (Takara Bio). Yeast transformations were performed with the LiAc/SS carrier DNA/PEG method. Pre-culture was overnight in YNB-ura at 30 degrees C.

**Cd sensitivity assay.** Yeast were cultured at OD600 = 0.001 for 3 days in 96-well plates at 30 degrees C with shaking, with CdSO4 at 0 to 81.8 micromolar. Absorbance at OD600 was measured with an EnSight Multimode Reader (PerkinElmer). IC50 was calculated with the R package "drc" version 3.0-1. Relative Cd uptake was expressed as 1/IC50 normalized to the empty plasmid (0%) and WT (100%).

**Mn sensitivity assay.** Mn assay used 0 to 1.5 mM MnSO4. Relative Mn uptake was normalized analogously.

**ICP-OES.** Selected mutants were grown overnight in YNB-ura at 30 degrees C with 20 micromolar each of Cd, Mn, Fe, Cu, Zn, and Co in a 5 mL pre-culture, then transferred to 20 mL medium containing the same metals, adjusted to pH 4.5 at OD600 = 0.1, and incubated 16 hours at 30 degrees C. Cells were harvested by centrifugation, washed twice with 20 mM EDTA and deionised water, dried at 60 degrees C, and lysed with 0.5 mL 60% HNO3 at 60 degrees C for 2 hours. Metal concentrations were measured on an Agilent 5800 ICP-OES (Agilent, Santa Clara, CA, USA). Apparent metal uptake was calculated by subtracting the empty-plasmid background from the measured value.

**LOD/LOQ.** Not reported for the ICP-OES measurements.

**Certified reference materials (CRM) and recovery.** Not reported.

**Statistical evaluation.** Dunnett's test against WT (Table 1) or against M235A (Table 2); N = 3 biological replicates throughout.

**Structural modeling.** AlphaFold2 via ColabFold v1.5.5 using MMseqs2 (Mirdita et al. 2019, 2022); force-field relaxation with amber. Tunnel detection by CAVER Analyst 2.0 Beta (Jurcik et al. 2018); cavity detection by PyKVFinder (Eisenberg et al. 1984; da Silva Guerra et al. 2021); structures visualised in PyMOL v2.5.0.

## Evidence fitness

This source provides mechanistic context for cadmium uptake in rice. It is not a grain-occurrence study and reports no cadmium concentrations in rice grain, food matrices, or human dietary exposure. Its findings are relevant to the contamination-mitigation and cultivar-selection sections of the rice ingredient page and to the mechanistic background sections of the cadmium metal page; they do not contribute to contamination-profile values (typical_ppb, p95_ppb) for rice or any downstream product.

The yeast heterologous expression system is an established proxy for Nramp transporter function and has been used in prior OsNramp5 characterization (Q337K allele; Kuramata et al. 2022, cited in paper). The correlation between yeast-growth IC50 values and ICP-OES direct Cd content (r = 0.95, p less than 0.01) supports the method's internal validity for ranking relative Cd transport efficiencies among mutants. The ICP-OES validation under polluted-soil-mimicking conditions strengthens confidence that the best mutants (M235A, A232C+M235A, A232S+M235A) retain the desired properties across a range of soil Cd concentrations.

Limitations for translating these results to rice plant performance are acknowledged in the paper: Cd and Mn concentrations in paddy soil water are difficult to estimate, amino acid substitutions may affect plant physiology beyond metal transport, and the protein-engineering approach requires evaluation in planta (rice plants) before conclusions on agricultural reduction of grain cadmium can be drawn. The authors reference a prior study showing that OsNramp5-Q337K expression in rice plants reduced straw Cd to 40% of WT (Kuramata et al. 2022), suggesting that yeast-assay characteristics can predict plant-level outcomes, but no rice plant data are reported in this paper.

## Limitations

No grain occurrence data: The study measures metal uptake in yeast expressing OsNramp5 constructs, not in rice plants or grain. No cadmium or manganese concentrations in rice grain are reported.

No plant validation: The engineered OsNramp5 variants have not yet been evaluated in rice plants (stated explicitly in the Discussion). The in-planta reduction in Cd uptake may differ from yeast-assay predictions due to other transport pathways, organ-specific expression patterns, or agronomic trade-offs.

No LOD/LOQ or CRM recovery reported: Analytical quality control for the ICP-OES step cannot be independently verified from the paper.

Co-metal effects incompletely characterised: The five mutants showed lower Co uptake efficiencies in the ICP-OES experiment (noted in Discussion); the authors attribute this to OsNramp5's role in Co transport. Unexpected effects on Fe, Cu, or Zn nutrition in plants cannot be ruled out from yeast data alone.

Yeast-to-plant translation uncertainty: The yeast assay was conducted at Mn concentrations modelling heavily polluted soil (1.8 mM MnSO4), but actual paddy water Mn concentrations depend on soil redox conditions and vary substantially. The correspondence of assay conditions to real paddy environments is an approximation.

Structural modeling limitations: AlphaFold2 structures are predictions, not crystal or cryo-EM structures, and the inferred tunnel-property thresholds derive from fitting to the experimental results of this single study rather than independent structural validation.

## Related evidence

- [[ingredients/rice]]
- [[metals/cadmium]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [10eef01a03](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a03) | 2026-05-28 | correction | 1 section added |
| [9a3fa9ddf1](https://github.com/paleofoundation/heavymetalindex/commit/9a3fa9ddf1) | 2026-04-30 | major | 1 section added and 1 removed |
| [7c398715cb](https://github.com/paleofoundation/heavymetalindex/commit/7c398715cb) | 2026-04-25 | major | 1 source added; 2 sections added; narrative text revised |
<!-- END: hmi-page-history -->
