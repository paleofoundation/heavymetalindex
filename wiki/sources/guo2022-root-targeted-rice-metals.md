---
type: source
raw_handle: MFK_43-root-targeted-over-expression-of-heavy-metal
cite_key: guo2022-root-targeted-rice-metals
title: "Root targeted over-expression of the heavy metal tolerance genes TaPCS1 and AtHMA3 reduces As and Cd accumulation in aerial tissues of Oryza Sativa (Rice) Plants"
authors: [Guo J]
year: 2022
publication: "Master of Science thesis, University of California San Diego"
doi: null
no_doi_assigned: true
access_url: null
source_type: thesis
evidence_tier: C
license: "publisher-copyright"
raw_path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Black Market Peptide Metal Survey/heavy_metals_peptides/43_Root_Targeted_Over-Expression_of_Heavy_Metal_Tolerance_Genes.pdf"
raw_sha256: "887700432afd889535ece0059a305d65045ea35ee927f28167f0ef39a9fe39c6"
metals: [Cd, tAs]
ingredients: [rice]
products: []
matrices: []
jurisdictions: []
near_duplicates: []
sample_n: null
sample_population: "Hydroponic Nipponbare wildtype rice plants and transgenic Oryza sativa lines with root-specific overexpression of TaPCS1 or AtHMA3; TaPCS1 lines were exposed to 5 µM CdCl2 plus 10 µM As(III), and AtHMA3 plants were exposed to 2 µM CdCl2; roots and shoots were analyzed separately after 15 days of treatment."
updated: 2026-06-09
---

Guo's UCSD master's thesis tests whether root-specific overexpression of heavy-metal tolerance genes can retain cadmium and arsenic in rice roots rather than aerial tissues. It is rice supply-chain mitigation evidence from a controlled hydroponic seedling experiment, not market occurrence evidence for rice grain. The arsenic treatment was As(III), but the tissue endpoint was ICP-MS after nitric-acid digestion, so the measured plant-tissue endpoint is treated here as total arsenic context rather than inorganic-arsenic occurrence.

## Key numbers

The thesis compared Nipponbare wildtype rice plants against two TaPCS1-overexpressing lines (TaPCS1-1 and TaPCS1-2) and one AtHMA3-overexpressing line. Values were normalized to dry weight, using the source's formula `PPB * 0.003 Liters / dry weight in grams`, and are described in the thesis as `ug / gram-of dry-weight`. The extracted text reports fold changes and p-values but does not provide a table of individual root/shoot concentration values, so no bar-chart values are estimated here.

| Endpoint | Source-reported result |
| --- | --- |
| TaPCS1 exposure | `5 µM` CdCl2 plus `10 µM` As(III) added to hydroponic media for `15 days`; media changed every `3 days` |
| TaPCS1 Cd roots | Root Cd accumulation was over `7-fold` greater in PCS1-1 (`P = 4.0E-3`) and over `10-fold` greater in PCS1-2 than wildtype roots |
| TaPCS1 Cd shoots | Shoot Cd accumulation was reported as almost `6-fold` lower in PCS1-1 and `4-fold` lower in PCS1-2 than wildtype shoots; Figure 3 caption describes PCS1-2 shoots as `3-fold` lower, so the source is internally inconsistent on that one fold-change phrase |
| TaPCS1 tAs roots | Root As content was over `10-fold` greater in PCS1-1 (`P = 0.02`) and over `13-fold` greater in PCS1-2 (`P = 6.3E-05`) than wildtype roots |
| TaPCS1 tAs shoots | Shoot As accumulation was over `5-fold` lower in PCS1-1 (`P = 0.021`) and `2-fold` lower in PCS1-2 (`P = 0.18`) than wildtype shoots |
| Whole-plant partitioning | Wildtype plants stored over `95%` of arsenic and `79%` of Cd in shoots; PCS1-1 shoots contained only `8%` of total plant Cd and `28%` of total plant As |
| AtHMA3 exposure | `2 µM` CdCl2 added to hydroponic media for `15 days` |
| AtHMA3 Cd | AtHMA3 roots accumulated almost `4-fold` more Cd than wildtype roots (`P = 0.095`); AtHMA3 shoots had significantly decreased Cd compared with wildtype shoots (`N = 7` per group, `P = 0.019`) |

The Figure 2 and Figure 3 captions in the extracted text appear to swap or mislabel the As/Cd figure titles relative to the Results paragraphs. This page records the source's text-layer fold-change statements and flags the inconsistency rather than reconciling it by visual inspection.

## Methods (brief)

Sterilized transgenic and wildtype rice seeds were germinated on Murashige and Skoog agar plates, then transferred to `2L` hydroponic chambers with nutrient media for `3 weeks` before metal treatment. TaPCS1 plants received `5 µM` CdCl2 plus `10 µM` As(III); AtHMA3 plants received `2 µM` CdCl2. After `15 days`, plants exposed to cadmium were washed with `5 mM` CaCl2, and plants exposed to cadmium plus arsenic were also washed with `1 mM` K2HPO4; roots and shoots were separated, dried at `37 °C` for `7 days`, digested in `3 mL` of `70%` nitric acid for `24 hours`, heated in boiling water for `30 minutes`, diluted to `3 mL`, and analyzed by ICP-MS at the Donald Danforth Plant Science Center. Significance testing used one-tailed t-tests assuming unequal variance.

## Implications

The thesis supports a mitigation-context claim: in a controlled hydroponic seedling system, root-specific TaPCS1 or AtHMA3 overexpression shifted Cd and arsenic partitioning toward roots and away from shoots. It does not report rice grain concentrations, market samples, finished foods, consumer exposure, or regulatory compliance. Do not use these root/shoot values as rice-grain occurrence data or as a basis for HMTc thresholds.

## Wiki pages this source may touch

- [[ingredients/rice]]
- [[metals/cadmium]]
- [[metals/arsenic-total]]
- [[mitigation/remediation-evidence]]

## Verification notes

- Identity checks: the thesis has no DOI in the extracted text. Greps for the raw handle `MFK_43-root-targeted-over-expression-of-heavy-metal`, the title phrase, the author/title phrase "Joy Guo" / "Root targeted over-expression", and candidate cite key `guo2022-root-targeted-rice-metals` returned no existing `wiki/sources/` page or audit-queue row before creation.
- Raw PDF SHA-256 verified as `887700432afd889535ece0059a305d65045ea35ee927f28167f0ef39a9fe39c6`.
- Speciation: Cd is total cadmium in plant tissue. The exposure solution for the TaPCS1 experiment was As(III), but tissue As was measured by ICP-MS after digestion; the page therefore records arsenic as total arsenic context (`tAs`) and does not promote it to inorganic arsenic occurrence evidence.
- Numerical fidelity: every number in the Key numbers and Methods sections was rechecked against `/tmp/hmi-june8-019.txt`. No plotted bar values were estimated because the extracted text does not table the concentration values behind Figures 2-4.
- Slug vocabulary: frontmatter uses only `rice` from the closed ingredient vocabulary and `Cd` / `tAs` from the metal abbreviation vocabulary. `products` and `matrices` are intentionally empty because rice roots and shoots from a hydroponic seedling experiment are not rice grain, rice bulk product, or any listed product/matrix slug in the taxonomy snapshot.
- Brand firewall: the thesis uses hydroponic nutrient and lab-method context, but no commercial food, supplement, or personal-care brand is attached to a contamination value.
- HMTc firewall: no HMTc thresholds, consumer certification claims, or wiki-side risk translations are introduced.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [af9c97a50](https://github.com/paleofoundation/heavymetalindex/commit/af9c97a50) | 2026-06-23 | major | 1 section added |
| [3bef40937](https://github.com/paleofoundation/heavymetalindex/commit/3bef40937) | 2026-06-09 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
